# CLAUDE.md — marp-ChibaU

このリポジトリは千葉大学スタイルの Marp スライドを管理するプロジェクトです。

## 重要：あなたが守るべきルール

### スライド生成時の手順

1. 新しいスライドを作る・既存スライドを編集するときは、必ず **`marp-academic-slides`** スキルを起動する(`.claude/skills/marp-academic-slides/` にプロジェクト同梱)
2. スキル内の `references/patterns.md` と `references/density-guide.md` を読んでからスライド構造を決める
3. テーマ CSS は **`theme/academic.css`** を使う(スキル内の `assets/academic.css` ではなく、こちらが正本)
4. 新しいスライドは **`slides/`** 配下に「**1デック = 1ディレクトリ**」で作る。ディレクトリ名は `YYYYMMDD_<イベント略号>_<時刻orコマ>_<内容>` 形式（例：`20260519_ALC_1210_AI-function`）
5. **1デックの内部構造**：
   ```
   slides/
     20260519_ALC_1210_AI-function/             ← デックのルート
       20260519_ALC_1210_AI-function.md         ← 同名のmd
       src/                                      ← 入力素材（画像・動画・固有ロゴ等）
         fig01a-gemini-data-protection.png
         fig05-learnlm-demo.mov
         ...
       out/                                      ← 出力先（PDF / HTML / PNG）
         20260519_ALC_1210_AI-function.pdf
   ```
   - md内では `./src/ファイル名` で素材を参照する
   - PDF/HTML出力は `-o ./out/<deck-name>.<ext>` で `out/` に書き出す
   - 素材名は **半角英数・ハイフン** のみ。全角・空白・括弧は禁止（リンク切れの原因）
   - 命名規則：`fig{番号}-{内容}.{ext}`（例：`fig02-capability-overhang.png`、`fig05-learnlm-demo.mov`）。番号はスライド出現順、a/bで枝番
6. **複数デックで共有する素材のみ** `slides/assets/`（千葉大ロゴ・共通アイコン等）に置く
   - **ポンチ絵（PonchiE/）も同じ命名規則**：`PonchiE/YYYYMMDD_<イベント略号>_<内容>/` に同名md＋`src/`＋`out/`（例：`PonchiE/20260623_ND_db-coevolution/`）。直下の `onepager-*.md` は旧実験ファイルなので真似しない
7. **データ付きのグラフ**（棒・横棒・折れ線・棒+線複合・円/ドーナツ・散布図・ヒストグラム・箱ひげ・積み上げ棒など）を入れるときは、必ず **`marp-echarts`** スキルを使う（`.claude/skills/marp-echarts/`）。ECharts の option を書き、`tools/echarts-render/render.mjs` で静的SVGに焼き、`.fig-area` に **インライン直書き** する。
   - `<img src="*.svg">` や `![](*.svg)` は PDF/PNG 書き出しで**空白になる**ので使わない（インラインSVGのみ）。
   - インラインSVGは**空行を含めない**（Markdownがブロックを打ち切りスライドが消える。render.mjs が1行化して回避）。
   - 手描きの構造図（フロー・概念図）は従来どおり手書きインラインSVGでよい。グラフ（データ可視化）だけ marp-echarts に寄せる。

### フォントサイズの厳守ルール

- **デフォルト 23px**(`section { font-size: 23px }`)
- **最小 18px**(これより小さくしない。詰める前にレイアウトを変える)
- **`.takeaway` だけは固定 28px**(これは縮小しない)
- callout / qa-grid 等の特殊ブロックも、明示的に拡大しない限り 23px

### ヘッダーは固定高さ 56px

`--header-h: 56px` を変更しない。文字サイズや行間で高さが変動しないよう、`min-height` / `max-height` を二重で固定している。

### Frontmatter テンプレート

```yaml
---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">デックタイトル</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
# ↑ mdは slides/<deck-name>/<deck-name>.md にあるので、
#    共通ロゴ → ../assets/chiba-logo.png
#    デック固有素材 → ./src/figXX-....png
footer: ''
---
```

### 主要クラス一覧

| クラス | 用途 |
|---|---|
| `<!-- _class: cover \| intro \| fig \| summary \| split \| message \| divider \| wrap \| refs \| qa -->` | スライドパターン |
| `<div class="page-title">…</div>` | スライド固有のページタイトル(ヘッダー中央の濃赤帯) |
| `<div class="callout-{gray\|green\|pink\|orange\|yellow\|blue}">…</div>` | 色付き帯ヘッダー |
| `<div class="indent-{sm\|md\|lg\|xl}">…</div>` | リストの追加インデント |
| `<span class="hl">…</span>` / `<span class="hl-dark">…</span>` | 赤系強調文字 |
| `<div class="qa-grid">…</div>` | 質問/回答の2列レイアウト(偶奇で交互配置) |
| `<div class="takeaway">要点</div>` | スライド下端固定の要点帯(28px固定) |

## プレビュー・出力コマンド

> **⚠️ `--html` は全コマンドで必須。** これを付け忘れると、インラインSVGや `<div>` などの生HTMLが
> すべてエスケープされ、図が「生のSVGソースコードの文字列」として描画される（＝はみ出し・余白崩れに見える）。
> PDF/PNG/プレビューすべてに付けること。

```bash
# 変数（このDIRが正本ルート）
DECK=slides/<deck-name>

# プレビュー
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --preview

# PDF を out/ に書き出す
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --pdf --allow-local-files -o "$DECK/out/<deck-name>.pdf"

# HTML / PNG も同様に -o で out/ を指定
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --allow-local-files -o "$DECK/out/<deck-name>.html"
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --images png --allow-local-files -o "$DECK/out/<deck-name>.png"
```

### PDFが "Printing failed" で落ちるとき（枚数の多い/SVGが重いデック）

```
[ ERROR ] Failed converting Markdown. (Protocol error (Page.printToPDF): Printing failed)
```

**原因**：壊れたスライドではない。Chrome の `printToPDF` は1回の印刷で serialize するページの累積量が
多いほど落ちる（Skiaの上限）。個々のスライドは正常に描画できるのに、全80枚などを一括で渡すと超える。

**解決（ベクター品質を保ったまま）**：専用ビルドスクリプトを使う。全スライドを1つのHTMLに描画し、
ページ範囲（既定20枚）ごとに分割印刷 → `pdfunite` で結合する。ベクターのまま・ページ番号も連番のまま。

```bash
tools/marp-pdf/build-pdf.sh slides/<deck-name>/<deck-name>.md
# 出力先を変えるなら第2引数 / 1チャンクの枚数を減らすなら CHUNK=15 を前置
```

VS Code からは：
- **エディタ右上のツールバーの 📄 ボタン**（おすすめ）：開いているデックをそのままベクターPDF化。自作ローカル拡張
  `tools/marp-pdf/vscode-extension/`（`~/.vscode/extensions/marp-chibau-pdf` へシンボリックリンク済み）。
  チャンク数は設定 `marpChibau.chunkSize`（0=既定20、落ちるなら12）。**再インストール手順**は同フォルダの該当節参照。
- **NPM スクリプト ▶**（標準機能）：エクスプローラーの「NPM スクリプト」で `pdf`／`pdf:safe`（`package.json`）。
- **⌘⇧B**（標準機能）：開いている `.md` を対象（`.vscode/tasks.json`）。

> ⚠️ **PNG経由（`--images png` → img2pdf）は使わない**。ラスタ化で文字がにじみ、学生から見づらいと苦情が出る。
> 必ず上記スクリプト（ベクター）で出すこと。`pdfunite` は poppler（`brew install poppler`）に含まれる。

VS Code では `.vscode/settings.json` で `markdown.marp.themes` が `./theme/academic.css` を指しているので、Marp 拡張のプレビューがそのまま使える。

## PowerPoint からの取り込み（pptx2marp）

既存の `.pptx` を **座標再現＋academic デザイン**で Marp デック化するツール。
ヘッダー以外は元スライドと位置・内容を一致させ、配色・字体・ヘッダー帯・ページ番号だけ
academic テーマに従う。詳細は `tools/pptx2marp/README.md`。

```bash
python3 tools/pptx2marp/pptx2marp.py <input.pptx> --name <deck-name> --title "<タイトル>"
```

表は HTML テーブルで再現。WMF/EMF 画像・動画・ネイティブグラフは再現不可のため位置に注記が入る
（グラフは `marp-echarts` で作り直し推奨）。

## 既存スライド

- [slides/intro-demo.md](slides/intro-demo.md) — 自己紹介、今日のまとめ(3色 callout)、千葉大の指針、シナリオ+takeaway の4枚デモ
