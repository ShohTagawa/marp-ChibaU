# 文字起こしパイプライン（ローカル / whisper.cpp）

このMacでの動画文字起こしは **ローカルの whisper.cpp** で行う。`gcloud` は未インストールで、GCP Speech-to-Text は
認証・API有効化・1分超は GCS 経由など初期設定が重い。ローカルなら **音声を外部に出さず完結**する（この講義の趣旨＝
機微データを外部に出さない、とも整合）。実機は M4 Mac で Metal 動作（CUDA無し）。

## 環境
- **ffmpeg**: `/opt/homebrew/bin/ffmpeg`
- **whisper-cli**: `/Users/sh/whisper.cpp/build/bin/whisper-cli` ← リポジトリ直下ではなく **`build/bin/` 配下**
- **モデル**: `/Users/sh/whisper.cpp/models/ggml-large-v3-turbo-q5_0.bin`（約574MB・日本語精度良好・M4 Metalで8分音声を約93秒）
  - `ggml-base.bin` もあるが日本語の精度は不足ぎみ。`for-tests-ggml-*.bin`（575KB）は **全部テスト用スタブで使えない**
  - 別モデルは `cd /Users/sh/whisper.cpp/models && bash ./download-ggml-model.sh <name>`（例: `large-v3-turbo-q5_0`, `large-v3-turbo`, `medium`）
- **ディスク注意**: 残量が逼迫しがち（実績で残り7.6GB＝99%使用）。大型モデルの一括DLは避け、turbo-q5系で十分。

## 手順

### 1) 音声抽出（16kHz / mono / 16bit WAV ＝ whisper.cpp の要件）
```bash
DECK="/Users/sh/marp-ChibaU/slides/<deck>"
mkdir -p "$DECK/transcript"
ffmpeg -y -i "<入力動画.mov>" -vn -ar 16000 -ac 1 -c:a pcm_s16le "$DECK/transcript/v<N>_audio.wav"
```
（OBS等の録画もそのまま読める。`-vn`=映像捨てる、`-ar 16000`=16kHz、`-ac 1`=モノラル）

### 2) 文字起こし（日本語）
```bash
/Users/sh/whisper.cpp/build/bin/whisper-cli \
  -m /Users/sh/whisper.cpp/models/ggml-large-v3-turbo-q5_0.bin \
  -f "$DECK/transcript/v<N>_audio.wav" \
  -l ja -bs 5 -t 8 \
  --prompt "研究における生成AIの活用法。生成AI、トランスフォーマー、ニューラルネットワーク、機械学習、研究倫理、リテラシー、アカデミック・インテグリティ、千葉大学、田川、オンデマンド、グループワーク、Moodle、クライテリア。" \
  -otxt -osrt -of "$DECK/transcript/v<N>_transcript"
```
- `-l ja`：日本語で**転写**（翻訳しない）
- `-bs 5`：ビーム探索（品質重視）／`-t 8`：スレッド
- `--prompt`：**その回の固有名詞・専門用語を列挙**しておくと誤変換が大きく減る（その回の原稿から拾う）
- 出力：`v<N>_transcript.txt`（プレーン）と `v<N>_transcript.srt`（タイムスタンプ付き＝スライド対応づけに使う）

## 日本語の誤変換（同音異義）— 原稿ドラフトを正本に直す
whisper は日本語の同音異義をよく取り違える。**その回のドラフト原稿を用語の正本**として校正する。第1回で実際に出た例：

| 誤（whisper） | 正 |
|---|---|
| 地球学生科学 | 地球惑星科学 |
| 国際未来教育機関 | 国際未来教育基幹 |
| 作読 | 査読 |
| 学術療法流通 | 学術情報流通 |
| 成果交付 | 成果公表 |
| 需要状況 | 受容状況 |
| 共同（を通じて） | 協働 |
| 外観する | 概観する |
| 研究理論の観点 | 研究倫理の観点 |
| 講座されています | 構成されています |
| 2ターン分 | 2ターム分 |
| 中学（になる） | 中核 |
| 生成（を活用） | 生成AI |
| 研究所をやっている | 研究者をやっていた |

固有名詞・数値・専門用語は、文字起こしを鵜呑みにせず必ず原稿側の正しい表記に直す。
