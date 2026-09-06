# CLAUDE.md — tsutawaru-marp

このリポジトリは『伝わるデザインの基本』準拠の Marp スライドテーマ（tsutawaru-academic）と、
それで作るスライド群を管理するプロジェクトです。

## 重要：あなたが守るべきルール

### 「直した」と言う前に、必ずレンダリングして目で確認する（最重要）

最も多い失敗は「編集したと言ったのに反映されていない」。**markdownのdiffではなく、描画結果で「完了」を判断する。**

見た目に関わる編集（フォント・位置・図・はみ出し・色・ヘッダー・画像差し替え）をしたら、毎回：

1. 該当デックをPNG化する（重いデックは該当ページ前後だけでよい）：
   ```bash
   npx @marp-team/marp-cli@latest "slides/<deck>/<deck>.md" --no-stdin \
     --theme-set theme/academic.css theme/tsutawaru-academic.css \
     --html --images png --allow-local-files -o "slides/<deck>/out/<deck>.png"
   ```
2. **編集したスライドのPNGを Read ツールで実際に開いて見る。**
3. 次の3点を目視確認してから「完了」と言う：
   - (a) 意図した変化が**実際に反映**されているか
   - (b) **見切れ・被り・かさなり**が無いか（ヘッダー帯・takeaway帯・隣接ブロックと衝突していないか）
   - (c) **対象を取り違えていない**か：編集したmdは本当にそのデックのmdか／同じ文字列が複数あって一部しか置換していないか

### 事実・出典は裏取り必須

数値・引用・固有名詞・ガイドライン名をスライドに書く前に、一次資料（PDF/URL/公的文書）の
実物に当たって確認する。確認できなければ『要確認』と明示してユーザーに尋ねる。
自作の図は自由に使ってよい。外部の図を混ぜる場合のみ `<div class="attr">出典…</div>` を付ける。

### スライドを書く前に読むもの

1. [docs/tsutawaru-guide.md](docs/tsutawaru-guide.md) — テーマの設計思想・部品カタログ・グラフのルール
2. [slides/demo-tsutawaru/](slides/demo-tsutawaru/) — 11枚の見本デック。構成・書き方の下敷きにする

### テーマは2枚セット

`theme/` 直下の CSS だけが正本。**別コピーを作らない**（古いCSSが本番とズレる事故の元）。

- `theme/academic.css` … 土台（ヘッダー帯・表紙・スライド型の基盤）
- `theme/tsutawaru-academic.css` … 本文を『伝わるデザインの基本』のルールで再定義。**新規デックはこれ**

frontmatter は `theme: tsutawaru-academic`、ビルド時は `--theme-set theme/academic.css theme/tsutawaru-academic.css` と**2枚とも渡す**。

### デックの置き方（1デック = 1ディレクトリ）

```
slides/
  <deck-name>/              ← 例: 20260901_seminar_ai-intro（YYYYMMDD_イベント_内容）
    <deck-name>.md          ← 同名のmd
    src/                    ← 入力素材（画像・動画・グラフのoption）
      fig01-overview.png
      fig02-sales.chart.mjs
    out/                    ← 出力先（PDF / HTML / PNG）。gitignore済み
```

- md内では `./src/ファイル名` で素材を参照する
- 素材名は**半角英数・ハイフンのみ**。全角・空白・括弧は禁止（リンク切れの原因）
- 命名規則：`fig{番号}-{内容}.{ext}`。番号はスライド出現順、a/bで枝番
- 共有素材（ロゴ等）だけ `slides/assets/` に置く

### Frontmatter テンプレート

```yaml
---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">デックタイトル</div><img class="hdr-logo" src="../assets/logo-placeholder.png" alt="LOGO">'
footer: ''
---
```

ロゴは `slides/assets/` に自組織のPNGを置いて差し替える。不要なら `<img>` ごと消してよい。

### フォントサイズの厳守ルール

- **デフォルト 23px**（`section { font-size: 23px }`）
- **最小 18px**（これより小さくしない。詰める前にレイアウトを変える）
- **`.takeaway` だけは固定 28px**（これは縮小しない）
- **基準は「講堂で投影して読めるか」**（エディタのズームで読めるか、ではない）
- 文字を縮めて収めない。入らないのは情報過多のサイン：図表を減らす／文字数を減らす／ページを分割する

### ヘッダーは固定高さ 56px

`--header-h: 56px` を変更しない。文字サイズや行間で高さが変動しないよう `min-height` / `max-height` を二重で固定している。

### 囲みは最小限に

囲みたくなったら3段階で落とす：`.fill`（塗りだけ）→ `.rule-box`（細枠だけ）→ `.group`（囲まない）。
構造は囲みではなく**太さ・余白・揃え**で作る。詳細は docs/tsutawaru-guide.md 第3節。

### 書き終えたら lint

```bash
node tools/tsutawaru-lint.mjs slides/<deck-name>
```

囲み過多・文字数過多・18px未満・体言止め・煽り語を点検する（**目視確認の代わりにはならない**）。

## グラフ（データ可視化）

データ付きのグラフ（棒・横棒・折れ線・円・散布図など）は ECharts で描き、
**静的SVGに焼いてインラインで貼る**：

1. option を `slides/<deck>/src/figNN-<name>.chart.mjs`（`export default {…}`）に書く。
   `tools/echarts-render/tsutawaru-theme.mjs` から `focusColors(n, i)` 等を import できる
2. SVGに焼く（初回のみルートで `npm install`）：
   ```bash
   node tools/echarts-render/render.mjs slides/<deck>/src/figNN-<name>.chart.mjs \
     slides/<deck>/src/figNN-<name>.svg 760x400
   ```
3. 焼いたSVGの中身をスライドの Markdown に**インラインで直書き**する

**3つの禁止事項**：

- `<img src="*.svg">` や `![](*.svg)` は使わない（PDF/PNG書き出しで**空白になる**）
- インラインSVGに**空行を含めない**（Markdownがブロックを打ち切りスライドが消える。render.mjs が1行化して回避）
- ECharts の option で fontFamily を書くときは**フォント名を単一引用符**で（二重引用符だと属性が壊れて文字が全消えする）

Python 派の代替は `tools/matplotlib-chart/`（japanize-matplotlib。使い方は同READMEを参照）。
手描きの構造図（フロー・概念図）は従来どおり手書きインラインSVGでよい。

## プレビュー・出力コマンド

> **⚠️ `--html` は全コマンドで必須。** 付け忘れるとインラインSVGや `<div>` などの生HTMLが
> エスケープされ、図が「生のソースコードの文字列」として描画される。
>
> **⚠️ `--no-stdin` も全コマンドで必須。** 無いと非対話実行（エディタのタスク/バックグラウンド）で
> marp が標準入力を待って数分固まる。

```bash
DECK=slides/<deck-name>

# プレビュー
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin \
  --theme-set theme/academic.css theme/tsutawaru-academic.css --html --preview

# PNG（目視確認用）
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin \
  --theme-set theme/academic.css theme/tsutawaru-academic.css \
  --html --images png --allow-local-files -o "$DECK/out/<deck-name>.png"

# PDF（ベクター・落ちない分割印刷方式）
bash tools/marp-pdf/build-pdf.sh "$DECK/<deck-name>.md"

# 発表（Chromeで全画面プレゼン。F=全画面 / P=発表者ビュー / ←→=ページ送り）
bash tools/marp-present/present.sh "$DECK/<deck-name>.md"
```

- 修正の反復中はPNG目視だけにして、PDFは仕上げ時に1回出す
- PDFが `Printing failed` で落ちるデックは `CHUNK=12 bash tools/marp-pdf/build-pdf.sh …`
- **PNG経由のPDF化（ラスタ化）はしない**。文字がにじむ。必ず build-pdf.sh（ベクター）で出す
