---
name: marp-ponchie
description: 1枚もの「ポンチ絵」(conceptual infographic / 全体像図) を Marp + インラインSVG で作るスキル。会議体・役員・学長向けの「これ1枚で構想が伝わる」図を、ゾーン背景・グラデ・影・アイコン・フロー矢印などのリッチなSVGデザイン言語で組む。marp-academic-slides からのフォーク。
---

# Marp ポンチ絵 (1-sheet Conceptual Infographic)

`marp-academic-slides` が「複数スライドのデック」を作るのに対し、このスキルは **1枚で全体像を語るポンチ絵** を作る。スライド全体が **1つのフルブリードSVG**。枠を並べて塗るだけの平板な図ではなく、**ゾーン背景・グラデーション・ドロップシャドウ・アイコン・太いフロー矢印・番号バッジ** を使って、ダイナミックで一目で分かる構想図にする。

## When to use

- 「1枚で説明できる図にして」「ポンチ絵にして」「全体像を1枚で」
- 学長・役員・会議体に出す **構想サマリ1枚**
- 既存デックの内容を **1枚に凝縮** する依頼
- 「枠だけで地味」「もっと格好良く・ダイナミックに」という改善依頼

複数スライドのデックthat's needed なら `marp-academic-slides` を使う。これは **常に1ページ** の成果物。

## Files in this skill

```
marp-ponchie/
├── SKILL.md                      (this file)
├── assets/
│   └── ponchie.css               フルブリード1ページ用テーマ。theme-set で参照
└── references/
    ├── design-language.md        配色・ゾーン・グラデ・影・余白・タイポの設計原則【先に読む】
    └── svg-library.md            コピペ用SVG部品（defs/アイコン/矢印/バッジ/カード/帯）
```

参照順：
1. 設計前に **references/design-language.md**（短い・必読）
2. 部品を置くたびに **references/svg-library.md** からコピペして調整

## Workflow

1. **要件確認**：計画名（＝図のタイトル）、伝えたい因果/構造（課題→打ち手→ゴール 等）、ロゴパス、出力先。曖昧なら `AskUserQuestion` 1回で集約。
2. **テーマ配置**：出力先から参照できる場所に `ponchie.css` を置く（既にあれば再利用）。
3. **骨格を決める**：design-language.md の「構図テンプレ」から1つ選ぶ（横3幕フロー / 階層ピラミッド / ハブ&スポーク / ロードマップ旅 / Before→After）。
4. **defs を先に置く**：svg-library.md のグラデ・影・矢印マーカー定義をSVG先頭の `<defs>` に貼る。
5. **ゾーン背景 → 部品 → テキスト** の順で重ねる（奥から手前へ）。
6. **Write**：1枚の `.md` に1つの `<svg>` を書く。
7. **必ずレンダルして目視**：PNGに出して、はみ出し・重なり・余白を確認 → 直す。
8. 使い方を1-2行で提示。

## Output rules（重要）

- **1ポンチ絵 = 1 Markdown = 1 `<svg>`**。`viewBox="0 0 1280 720"`（16:9）。
- frontmatter は下記テンプレ。`theme: ponchie`、本文は `<!-- _class: onepager -->` 付き1セクションのみ。
- **SVG内に空行を入れない**。markdown-it/Marp は空行でHTMLブロックを分断し、生のSVGがテキストとして漏れて描画が壊れる。要素間に空行を置かないこと。
- ロゴ等の画像は `<image href="./src/ファイル名">`。出力時に `--allow-local-files` 必須。
- 文字最小は **11px**（ポンチ絵は密度優先で本文より小さくてよい）。ただし読めること。タイトル・キーメッセージは大きく（22〜30px）コントラストを効かせる。
- VS Codeプレビューでは未許可タグがサニタイズされるので `.vscode/settings.json` の `markdown.marp.html` 許可リストに `svg/g/rect/circle/path/text/polygon/polyline/line/defs/marker/image/linearGradient/radialGradient/stop/filter/feDropShadow/ellipse` を入れておく（PDFは marp-cli `--html` でこの許可リストに関係なく出る）。

### Frontmatter テンプレ

```yaml
---
marp: true
theme: ponchie
paginate: false
size: 16:9
header: ''
footer: ''
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs> ... </defs>
  ... 背景ゾーン → 部品 → テキスト ...
</svg>
```

> 注：`section.onepager` の細かい上書きが要るデックでは frontmatter の `style:` で足してよいが、`ponchie.css` を使えば基本は不要。

## レンダリング

```bash
# PDF
npx @marp-team/marp-cli@latest <file>.md --pdf --allow-local-files --html --theme-set theme/ponchie.css -o out/<name>.pdf
# 目視確認用PNG
npx @marp-team/marp-cli@latest <file>.md --images png --allow-local-files --html --theme-set theme/ponchie.css -o out/<name>.png
```

フラグは必ず **入力ファイルの後**。書いたら一度PNGに出して必ず目視する。

## Design north star（このスキルの肝）

平板な「枠＋塗り」を脱する。詳細は `references/design-language.md`。要点：

1. **ゾーンで地を作る** — 個々の箱より先に、大きな背景ゾーン（ソフト塗り・角丸パネル・斜め帯・グラデ）で意味のかたまりを作る。地→図の順。
2. **奥行き** — ドロップシャドウとグラデで浮かせる。境界線は細く淡く（または無し）。ベタ枠線で囲わない。
3. **アイコンで即解** — 各かたまりに1つアイコン（人・本・AIチップ・的・建物…）。文字を読む前に意味が立つ。
4. **フローを描く** — 太いシェブロン/曲線/リボンで因果と流れを示す。矢印は細線でなく塊で。
5. **主役を1つ** — 中央のハブや巨大な数字など、視線の着地点を1つ作る。
6. **配色は3色まで** — primary(accent) ＋ 注意色(warn) ＋ ニュートラル。多色にしない。
