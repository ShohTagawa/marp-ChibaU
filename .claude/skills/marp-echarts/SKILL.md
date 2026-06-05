---
name: marp-echarts
description: Draw data charts with Apache ECharts and embed them into Marp academic slides as static inline SVG (Chiba-University styled). Renders server-side (no browser) so charts survive PDF/PNG export. Use whenever the user wants a グラフ / チャート / 図 with data in a slide — 棒グラフ, 横棒, 折れ線, 複合(棒+線), 円/ドーナツ, 散布図, ヒストグラム, 箱ひげ図, 積み上げ棒, レーダー — or says "ECharts", "データを可視化", "グラフを入れて", "グラフを描いて". Pairs with the marp-academic-slides skill (use that for the deck/pattern, this for the chart).
---

# Marp ECharts

データ付きのグラフを **Apache ECharts** で描き、Marp スライドに **静的インライン SVG** として埋め込むスキル。
ブラウザ不要の SSR（サーバサイド描画）で SVG を焼くので、**PDF/PNG 書き出しでも崩れない**。配色は千葉大スタイル（`theme/academic.css` と手描きSVG図に整合）。

## When to use

- 「このデータで棒グラフ／折れ線／円グラフを作ってスライドに入れて」
- 「受講者数の推移をグラフにして」「アンケート結果を可視化して」
- ヒストグラム・箱ひげ図・散布図・複合グラフなど、数値データを図にする依頼
- 既存スライドの図差し替え（手描きSVG → データグラフ）

単発の「画像1枚だけ」でも可。デック作成は **marp-academic-slides** スキルと併用（あちらで型、こちらでグラフ）。

## 重要：埋め込みは「インライン SVG」一択

Marp の PDF/PNG 化（Chrome）では、**`<img src="chart.svg">` や `![](chart.svg)` は読み込まれず空白になる**（実測で確認済み）。
必ず `<svg>…</svg>` 本体を `.fig-area` の中に**直接貼る**こと。`--html` 付きで描画すれば素のSVGが正しく描画される。

## ワークフロー

1. **ECharts の option を書く**。グラフ種別はレシピ集 `references/recipes.md` のテンプレを土台にする。
   - **チャート内の `title` は付けない**。スライドの `## 見出し` をタイトルにする（二重になり上端で重なるため）。
   - `tooltip` は静的SVGでは無意味なので不要（テーマ側で無効化済み）。
2. **option を保存**：`slides/<deck>/src/figNN-<name>.chart.json`（編集可能な“元データ”。命名は CLAUDE.md 規約に従う）。
3. **SVG に焼く**：
   ```bash
   node tools/echarts-render/render.mjs \
     slides/<deck>/src/figNN-<name>.chart.json \
     /tmp/figNN.svg 800x450
   ```
   - 初回のみ `cd tools/echarts-render && npm install`（echarts 導入。`node_modules` は gitignore 済み）。
   - サイズは横長カテゴリが多いなら `960x450` 等に。出力SVGは `width/height` を外し `viewBox` のみ → スライド幅に自動フィット。
4. **インライン埋め込み**：焼いた `/tmp/figNN.svg` の中身を、図表中心型(fig)スライドの `.fig-area` に貼る：
   ```markdown
   <!-- _class: fig -->
   <div class="page-title">{{ページタイトル ≤14字}}</div>

   ## {{グラフの見出し ≤20字}}

   <div class="fig-area">
   <svg ... viewBox="0 0 800 450"> … （render.mjs の出力をそのまま） … </svg>
   </div>

   <div class="takeaway">{{要点 ≤43字}}</div>
   ```
5. **原寸で確認**：`--html` 付きで PNG 出力し、はみ出し・重なりを目視（marp-academic-slides の density-guide「インラインSVG図解の作法」に従う）。

## スタイル

- 配色・フォントは `tools/echarts-render/chiba-theme.mjs` が自動適用（主役 Chiba Red `#A6192E`／補助 青緑橙灰）。素のEChartsで描きたい時だけ `--no-theme`。
- 系列の色を個別指定したい時は option 内の `itemStyle.color` / `lineStyle.color` が優先される。
- 軸ラベル・凡例は 14px 基準。データが多すぎてラベルが潰れる時は、件数を絞る／横棒にする／`axisLabel.interval` で間引く。

## 再生成

データ修正時は `src/figNN-*.chart.json` を直して `render.mjs` を再実行 → スライドのインラインSVGブロックを差し替える。JSON が元、スライド内SVGは生成物。

## Files in this skill

- `SKILL.md` … 本ファイル（使い方）
- `references/recipes.md` … グラフ種別ごとの ECharts option テンプレ（千葉大スタイル前提）

## エンジン（リポジトリ同梱）

- `tools/echarts-render/render.mjs` … option(JSON/mjs/stdin) → 静的SVG レンダラ（SSR）
- `tools/echarts-render/chiba-theme.mjs` … 千葉大カラーの ECharts テーマ
- `tools/echarts-render/package.json` … echarts 依存（`npm install` で導入）

## See also

- **marp-academic-slides** … デック全体・スライド型・密度ルール。fig パターンと「インラインSVG図解の作法（見切れ防止）」はそちらの `references/` 参照。
