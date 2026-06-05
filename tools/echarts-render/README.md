# echarts-render

Apache ECharts の `option` を **静的 SVG**（SSR・ブラウザ不要）に焼き出すツール。
Marp スライドへ **インライン SVG** として貼ると、PDF/PNG 書き出しでも崩れない。

千葉大スライドでの使い方・グラフ種別テンプレは
`.claude/skills/marp-echarts/`（SKILL.md / references/recipes.md）を参照。

## セットアップ（初回のみ）

```bash
cd tools/echarts-render
npm install      # echarts を導入（node_modules は gitignore 済み）
```

## 使い方

```bash
node render.mjs <option.(json|mjs)|-> <out.svg> [WxH] [--no-theme]
```

- `<option>` … ECharts の `setOption` に渡すオブジェクト。`.json` / `.mjs(export default)` / `-`(stdin, JSON)。
- `<out.svg>` … 出力先。出力は `width/height` を外し `viewBox` のみ → 貼り先の幅に自動フィット。
- `[WxH]` … 既定 `800x450`。
- `--no-theme` … 千葉大テーマを当てず素の ECharts。

### 例

```bash
node render.mjs chart.json /tmp/fig03.svg 960x450
echo '{"xAxis":{"type":"category","data":["A","B"]},"yAxis":{"type":"value"},"series":[{"type":"bar","data":[3,5]}]}' \
  | node render.mjs - /tmp/q.svg
```

焼いた SVG の中身を、スライドの `<div class="fig-area">…</div>` に直接貼る（`<img src>` は marp の PDF/PNG で読めないので不可）。
