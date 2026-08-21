#!/usr/bin/env python3
"""
Marpデックの読み上げ原稿（HTMLコメント）を Google Cloud TTS で音声化し、
スライドPNGと合成してナレーション付き動画（mp4）を作る。

  python3 tools/slide-video/build-video.py slides/<deck>/<deck>.md

主なオプション:
  --voice ja-JP-Chirp3-HD-Charon   声（`--list-voices` で一覧）
  --rate 1.0                       話速（1.0=標準。田川先生は早口なので1.1〜1.2も可）
  --slides 1-3                     一部のスライドだけ（試聴用）
  --audio-only                     音声だけ作って動画は作らない
  --skip-png                       PNGを作り直さない（既存 out/frames を使う）
  --scale 1.5                      PNGの拡大率（1.5 → 1920x1080）

原稿の取り出しかた:
  各スライド末尾の <!-- ... --> を読み上げ原稿とみなす。
  ただし `_class:` などのMarpディレクティブは除外し、
  行頭が【】の指示行（【表紙／1分30秒】【要確認】…）と、
  丸ごと（）で囲まれたト書き行は読み上げない。
"""

import argparse
import base64
import json
import os
import re
import ssl
import subprocess
import sys
import urllib.error
import urllib.request
import wave
from pathlib import Path

try:  # python.org 版Pythonはシステムのルート証明書を見に行かないので certifi を使う
    import certifi
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl.create_default_context()

TTS_URL = "https://texttospeech.googleapis.com/v1/text:synthesize"
VOICES_URL = "https://texttospeech.googleapis.com/v1/voices?languageCode=ja-JP"

# 読み間違えやすい語の読み仮名（必要に応じて足す）
PRONUNCIATION = [
    ("PNAS", "ピーエヌエーエス"),
    ("GPT Base", "ジーピーティー・ベース"),
    ("GPT Tutor", "ジーピーティー・チューター"),
    ("GPT-4", "ジーピーティーフォー"),
    ("ChatGPT", "チャットジーピーティー"),
    ("crutch", "クラッチ"),
    ("Bastani", "バスターニ"),
    ("GitHub", "ギットハブ"),
    ("Correction", "コレクション"),
    ("%", "パーセント"),
]

SAMPLE_RATE = 24000
GAP_BETWEEN_PARAGRAPHS = 0.45  # 段落間の無音（秒）
GAP_AT_SLIDE_END = 0.8         # スライド末尾の無音（秒）


def sh(cmd, **kw):
    return subprocess.run(cmd, check=True, capture_output=True, text=True, **kw)


def access_token():
    return sh(["gcloud", "auth", "print-access-token"]).stdout.strip()


def api_post(url, token, project, payload):
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "x-goog-user-project": project,
            "Content-Type": "application/json; charset=utf-8",
        },
    )
    try:
        with urllib.request.urlopen(req, context=SSL_CTX) as res:
            return json.load(res)
    except urllib.error.HTTPError as e:
        sys.exit(f"[ERROR] TTS API: {e.code}\n{e.read().decode('utf-8', 'replace')}")


# ── デックの解析 ──────────────────────────────────────────────

def split_slides(md_text):
    """frontmatterを除き、行が `---` だけの箇所でスライドに割る"""
    lines = md_text.split("\n")
    i = 0
    if lines and lines[0].strip() == "---":            # frontmatter を飛ばす
        i = 1
        while i < len(lines) and lines[i].strip() != "---":
            i += 1
        i += 1
    slides, cur = [], []
    for line in lines[i:]:
        if line.strip() == "---":
            slides.append("\n".join(cur))
            cur = []
        else:
            cur.append(line)
    slides.append("\n".join(cur))
    return [s for s in slides if s.strip()]


def narration_of(slide_md):
    """スライド内のHTMLコメントから読み上げ文を取り出す"""
    out = []
    for body in re.findall(r"<!--(.*?)-->", slide_md, re.DOTALL):
        body = body.strip()
        if not body or body.lstrip().startswith("_"):   # Marpディレクティブ
            continue
        keep = []
        for line in body.split("\n"):
            s = line.strip()
            if s.startswith("【"):                      # 指示行・要確認メモ
                continue
            if re.fullmatch(r"[（(].*[）)]", s):        # ト書き
                continue
            keep.append(s)
        text = "\n".join(keep)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
        if text:
            out.append(text)
    return "\n\n".join(out)


def to_speech_text(text):
    for a, b in PRONUNCIATION:
        text = text.replace(a, b)
    return text


# ── 音声合成 ──────────────────────────────────────────────────

def synth(token, project, voice, rate, text):
    payload = {
        "input": {"text": to_speech_text(text)},
        "voice": {"languageCode": "ja-JP", "name": voice},
        "audioConfig": {
            "audioEncoding": "LINEAR16",
            "sampleRateHertz": SAMPLE_RATE,
            "speakingRate": rate,
        },
    }
    res = api_post(TTS_URL, token, project, payload)
    return base64.b64decode(res["audioContent"])


def wav_frames(wav_bytes, tmp):
    tmp.write_bytes(wav_bytes)
    with wave.open(str(tmp), "rb") as w:
        return w.readframes(w.getnframes()), w.getparams()


def write_wav(path, chunks, params):
    with wave.open(str(path), "wb") as w:
        w.setnchannels(params.nchannels)
        w.setsampwidth(params.sampwidth)
        w.setframerate(params.framerate)
        for c in chunks:
            w.writeframes(c)


def silence(seconds, params):
    return b"\x00" * int(seconds * params.framerate) * params.sampwidth * params.nchannels


# ── メイン ────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("deck")
    ap.add_argument("--voice", default="ja-JP-Chirp3-HD-Charon")
    ap.add_argument("--rate", type=float, default=1.0)
    ap.add_argument("--project", default=os.environ.get("GCP_PROJECT", "helical-ascent-503601-m5"))
    ap.add_argument("--slides", default=None, help="例: 1-3 / 5 / 2,7")
    ap.add_argument("--scale", default="1.5")
    ap.add_argument("--audio-only", action="store_true")
    ap.add_argument("--skip-png", action="store_true")
    ap.add_argument("--out", default=None)
    ap.add_argument("--list-voices", action="store_true")
    args = ap.parse_args()

    token = access_token()

    if args.list_voices:
        req = urllib.request.Request(
            VOICES_URL,
            headers={"Authorization": f"Bearer {token}", "x-goog-user-project": args.project},
        )
        with urllib.request.urlopen(req, context=SSL_CTX) as res:
            for v in sorted(json.load(res)["voices"], key=lambda x: (x["ssmlGender"], x["name"])):
                print(f"{v['ssmlGender']:7s} {v['name']}")
        return

    deck = Path(args.deck).resolve()
    root = Path(__file__).resolve().parents[2]
    outdir = Path(args.out) if args.out else deck.parent / "out"
    frames, audio = outdir / "frames", outdir / "audio"
    for d in (outdir, frames, audio):
        d.mkdir(parents=True, exist_ok=True)

    slides = split_slides(deck.read_text(encoding="utf-8"))
    scripts = [narration_of(s) for s in slides]

    wanted = set(range(1, len(slides) + 1))
    if args.slides:
        wanted = set()
        for part in args.slides.split(","):
            if "-" in part:
                a, b = part.split("-")
                wanted |= set(range(int(a), int(b) + 1))
            else:
                wanted.add(int(part))

    # 1) スライドPNG
    if not args.audio_only and not args.skip_png:
        print("[1/3] スライドをPNG化しています…")
        sh([
            "npx", "@marp-team/marp-cli@latest", str(deck), "--no-stdin",
            "--theme-set", "theme/academic.css", "theme/tsutawaru-academic.css",
            "--html", "--images", "png", "--image-scale", args.scale,
            "--allow-local-files", "-o", str(frames / "f.png"),
        ], cwd=root)

    # 2) 音声
    print("[2/3] 音声を合成しています…")
    tmp = outdir / ".tmp.wav"
    params, total_chars, made = None, 0, []
    for n, text in enumerate(scripts, start=1):
        if n not in wanted:
            continue
        dest = audio / f"{n:03d}.wav"
        if not text.strip():
            print(f"  slide {n:02d}: 原稿なし → スキップ")
            continue
        chunks = []
        for para in [p for p in text.split("\n\n") if p.strip()]:
            total_chars += len(para)
            data, params = wav_frames(synth(token, args.project, args.voice, args.rate, para), tmp)
            chunks.append(data)
            chunks.append(silence(GAP_BETWEEN_PARAGRAPHS, params))
        chunks[-1] = silence(GAP_AT_SLIDE_END, params)
        write_wav(dest, chunks, params)
        secs = sum(len(c) for c in chunks) / (params.framerate * params.sampwidth * params.nchannels)
        print(f"  slide {n:02d}: {len(text):4d}字 → {secs:5.1f}秒  {dest.name}")
        made.append((n, dest, secs))
    if tmp.exists():
        tmp.unlink()
    print(f"  合計 {sum(s for _, _, s in made)/60:.1f}分 / 課金対象 {total_chars}字")

    if args.audio_only:
        return

    # 3) 動画
    print("[3/3] 動画を作っています…")
    segdir = outdir / "segments"
    segdir.mkdir(exist_ok=True)
    seglist = []
    for n, wav, _ in made:
        png = frames / f"f.{n:03d}.png"
        if not png.exists():
            sys.exit(f"[ERROR] PNGがありません: {png}")
        seg = segdir / f"{n:03d}.mp4"
        sh([
            "ffmpeg", "-y", "-loop", "1", "-i", str(png), "-i", str(wav),
            "-c:v", "libx264", "-tune", "stillimage", "-preset", "medium", "-crf", "20",
            "-c:a", "aac", "-b:a", "192k", "-pix_fmt", "yuv420p",
            "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
            "-r", "30", "-shortest", str(seg),
        ])
        seglist.append(seg)

    listfile = segdir / "list.txt"
    listfile.write_text("".join(f"file '{s.name}'\n" for s in seglist), encoding="utf-8")
    final = outdir / f"{deck.stem}.mp4"
    sh(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(listfile), "-c", "copy", str(final)])
    print(f"\n完成: {final}")


if __name__ == "__main__":
    main()
