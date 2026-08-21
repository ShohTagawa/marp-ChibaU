# slide-video｜読み上げ原稿 → TTS → ナレーション付き動画

Marpデックの各スライドに書いた **読み上げ原稿（HTMLコメント）** を Google Cloud Text-to-Speech で
音声化し、スライドPNGと合成して **mp4** を作る。

```
デック.md の <!-- 原稿 -->  ──TTS──▶  out/audio/NNN.wav
デック.md ──marp──▶ out/frames/f.NNN.png
                    └─ ffmpeg ─▶ out/segments/NNN.mp4 ─concat─▶ out/<deck>.mp4
```

## 前提

- `gcloud` が認証済み（`gcloud auth login`）。既定プロジェクトは `helical-ascent-503601-m5`
- そのプロジェクトで **Cloud Text-to-Speech API が有効**（`gcloud services enable texttospeech.googleapis.com`）
- `ffmpeg`（`brew install ffmpeg`）

## 使い方

```bash
# 全スライド（PNG化 → 音声 → 動画）
python3 tools/slide-video/build-video.py slides/<deck>/<deck>.md

# 声を変える／話速を上げる
python3 tools/slide-video/build-video.py slides/<deck>/<deck>.md \
  --voice ja-JP-Chirp3-HD-Iapetus --rate 1.1

# 一部だけ試聴（音声のみ・動画は作らない）
python3 tools/slide-video/build-video.py slides/<deck>/<deck>.md --audio-only --slides 1-3

# 声の一覧
python3 tools/slide-video/build-video.py x --list-voices
```

| オプション | 既定 | 意味 |
|---|---|---|
| `--voice` | `ja-JP-Chirp3-HD-Charon` | 声。Chirp3-HD が最も自然。Neural2 は素直で聞き取りやすい |
| `--rate` | `1.0` | 話速。1.1〜1.2 で早口寄り |
| `--slides` | 全部 | `1-3` / `5` / `2,7` |
| `--scale` | `1.5` | PNGの拡大率（1.5 → 1920x1080 相当） |
| `--audio-only` | off | 音声だけ作る（声の試聴用） |
| `--skip-png` | off | PNGを作り直さない（原稿だけ直したとき） |
| `--project` | `helical-ascent-503601-m5` | 課金・クォータのプロジェクト |

## 原稿の書き方（デック側）

各スライドの末尾に HTMLコメントで原稿を置く。**そのコメントがそのまま読み上げられる。**

```markdown
<div class="takeaway">…</div>

<!--
【結果／2分45秒】          ← 行頭が【…】の行は読まれない（時間配分・メモ用）

結果です。少しグラフの読み方から説明します。

横に、大きく2つのかたまりがあります。…   ← 空行で区切ると、そこに0.45秒の間が入る

（ここは間を取る）        ← 丸ごと（）の行も読まれない（ト書き）
-->
```

- `<!-- _class: cover-hero -->` などの **Marpディレクティブは自動で除外**される
- 段落間は 0.45秒、スライド末尾は 0.8秒の無音が入る（スクリプト冒頭の定数で変更可）
- 読み間違える語は `build-video.py` の `PRONUNCIATION` に読み仮名を足す
  （既定：PNAS・GPT Base・GPT Tutor・GPT-4・ChatGPT・% など）

## 注意

- 課金はTTSの文字数だけ。20分の講義でおよそ5,000〜7,000字なので、1本あたりのコストはごく小さい
- 音声は `out/audio/` に残るので、**直したスライドの音声だけ作り直して** `--skip-png` で再合成できる
- 動画の結合は無劣化（`-c copy`）。セグメントは `out/segments/` に残る
