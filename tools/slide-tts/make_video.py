#!/usr/bin/env python3
"""slide-tts/make_video — 原稿(script-vN.md)＋スライドPNGから、GCP Cloud TTSで
ナレーション付き動画(16:9/1080p)＋字幕SRTを作る。

前提:
  - ADC が設定済み（gcloud auth application-default login / setup_adc.sh）。
  - 対象プロジェクトで Cloud Text-to-Speech API 有効＋課金。
  - 原稿は「### スライド N-T｜タイトル」ブロックが、スライドPNGと**同じ順番・同数**に
    再同期済みであること（= 1ブロック=1スライド）。冒頭の「## ねらい」はスライド1へ前置。

使い方:
  python3 tools/slide-tts/make_video.py \
    --script slides/<deck>/parts/script-v1.md \
    --png-glob 'slides/<deck>/out/p.{n:03d}.png' --start 1 \
    --out slides/<deck>/out/video01.mp4 \
    [--voice ja-JP-Neural2-C] [--rate 1.2] [--prepend-nerai]

肝心なのは clean_for_tts(): 読み上げに記号(###/**/-/<div>/表/リンク/〔目安〕等)を渡さない。
"""
import argparse, base64, json, os, re, subprocess, tempfile, sys
import google.auth, google.auth.transport.requests as gtr, requests

def clean_for_tts(s: str) -> str:
    """マークアップを全部落として地の文だけにする（TTSに記号を読ませない）。"""
    s = re.sub(r'```.*?```', '', s, flags=re.S)          # コードフェンス
    s = re.sub(r'`([^`]*)`', r'\1', s)                   # インラインコード
    s = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', s)     # 画像/リンク → テキスト
    s = re.sub(r'<[^>]+>', '', s)                        # HTMLタグ(div/span/svg等)
    s = re.sub(r'^\s{0,3}#{1,6}\s*', '', s, flags=re.M)  # 見出し ###
    s = re.sub(r'^\s*>+\s?', '', s, flags=re.M)          # 引用 >
    s = re.sub(r'^\s*[-*+・]\s+', '', s, flags=re.M)      # 箇条書き
    s = re.sub(r'^\s*\d+[.)]\s+', '', s, flags=re.M)     # 番号付き
    s = re.sub(r'\*\*([^*]*)\*\*', r'\1', s)             # 太字
    s = re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)', r'\1', s)    # 斜体
    s = re.sub(r'_{1,2}([^_]+)_{1,2}', r'\1', s)         # _強調_
    s = re.sub(r'~~([^~]*)~~', r'\1', s)                 # 取り消し
    s = re.sub(r'^\s*\|.*\|\s*$', '', s, flags=re.M)     # 表の行
    s = re.sub(r'〔[^〕]*〕', '', s)                       # 〔目安 m:ss〕
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s.strip()

def parse_blocks(path):
    txt = open(path, encoding='utf-8').read()
    m = re.search(r'##\s*ねらい\s*\n(.*?)\n###\s', txt, re.S)
    nerai = m.group(1).strip() if m else ''
    blocks = re.findall(r'###\s*スライド[^\n]*\n(.*?)(?=\n###\s*スライド|\Z)', txt, re.S)
    return nerai, [b.strip() for b in blocks]

def tts(text, out, voice, rate, hdr):
    r = requests.post('https://texttospeech.googleapis.com/v1/text:synthesize', headers=hdr,
        json={'input': {'text': text}, 'voice': {'languageCode': 'ja-JP', 'name': voice},
              'audioConfig': {'audioEncoding': 'MP3', 'speakingRate': rate}}, timeout=120)
    r.raise_for_status()
    open(out, 'wb').write(base64.b64decode(r.json()['audioContent']))

def dur(f):
    return float(subprocess.check_output(['ffprobe','-v','quiet','-show_entries','format=duration','-of','csv=p=0', f]).strip())

def ts(x):
    h=int(x//3600); m=int(x%3600//60); s=x%60
    return f'{h:02d}:{m:02d}:{int(s):02d},{int((s%1)*1000):03d}'

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--script', required=True)
    ap.add_argument('--png-glob', required=True, help="例: '.../out/p.{n:03d}.png'")
    ap.add_argument('--start', type=int, default=1, help='最初のスライドPNG番号')
    ap.add_argument('--out', required=True)
    ap.add_argument('--voice', default='ja-JP-Neural2-C')
    ap.add_argument('--rate', type=float, default=1.2)
    ap.add_argument('--prepend-nerai', action='store_true', help='ねらいをスライド1に前置')
    a = ap.parse_args()

    qp = json.load(open(os.path.expanduser('~/.config/gcloud/application_default_credentials.json'))).get('quota_project_id')
    creds, _ = google.auth.default(scopes=['https://www.googleapis.com/auth/cloud-platform'])
    creds.refresh(gtr.Request())
    hdr = {'Authorization': f'Bearer {creds.token}', 'x-goog-user-project': qp, 'Content-Type': 'application/json'}

    nerai, blocks = parse_blocks(a.script)
    narr = [clean_for_tts(b) for b in blocks]
    if a.prepend_nerai and narr:
        narr[0] = clean_for_tts(nerai + '\n' + blocks[0])
    work = tempfile.mkdtemp(); clips=[]; srt=[]; t=0.0
    for i, body in enumerate(narr):
        png = a.png_glob.format(n=a.start + i)
        if not os.path.exists(png):
            print('!! PNG not found:', png); sys.exit(1)
        mp3=f'{work}/a{i}.mp3'; tts(body, mp3, a.voice, a.rate, hdr); d=dur(mp3)
        clip=f'{work}/c{i}.mp4'
        subprocess.run(['ffmpeg','-y','-loop','1','-i',png,'-i',mp3,'-c:v','libx264','-tune','stillimage',
            '-c:a','aac','-b:a','192k','-pix_fmt','yuv420p','-vf','scale=1920:1080,setsar=1','-r','25','-shortest',clip],
            check=True, capture_output=True)
        clips.append(clip); srt.append(f'{i+1}\n{ts(t)} --> {ts(t+d)}\n{body[:140].replace(chr(10)," ")}\n'); t+=d
        print(f'slide {a.start+i}: {d:.1f}s ({len(body)}c)')
    lst=f'{work}/list.txt'; open(lst,'w').write('\n'.join(f"file '{c}'" for c in clips))
    subprocess.run(['ffmpeg','-y','-f','concat','-safe','0','-i',lst,'-c','copy', a.out], check=True, capture_output=True)
    open(os.path.splitext(a.out)[0]+'.srt','w',encoding='utf-8').write('\n'.join(srt))
    print(f'DONE {a.out}  total {t:.1f}s ({t/60:.1f}min)  1920x1080')

if __name__ == '__main__':
    main()
