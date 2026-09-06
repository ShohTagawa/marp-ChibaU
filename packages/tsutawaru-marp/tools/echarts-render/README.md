# echarts-render

Apache ECharts の `option` を **静的 SVG**（SSR・ブラウザ不要）に焼き出すツール。
Marp スライドへ **インライン SVG** として貼ると、PDF/PNG 書き出しでも崩れない。

## セットアップ（初回のみ）

パッケージのルートで:

```bash
npm install
```

（`echarts` はルートの package.json の依存。`node_modules` はルートに入る）

## 使い方

```bash
node tools/echarts-render/render.mjs <option.(json|mjs)|-> <out.svg> [WxH] [--no-theme]
```

- `<option>` … ECharts の `setOption` に渡すオブジェクト。`.json` / `.mjs`（`export default {…}`）/ `-`（stdin, JSON）。
- `<out.svg>` … 出力先。出力は `width/height` 属性を外し `viewBox` のみ → 貼り先の幅に自動フィット。
- `[WxH]` … 既定 `800x450`。
- `--no-theme` … tsutawaru テーマを当てず素の ECharts。

既定で `tsutawaru-theme.mjs`（『伝わるデザインの基本』準拠：強調1系列＋残りグレー・
目盛は粗く・影と角丸なし・凡例より直接ラベル・赤緑対比を避ける）が当たる。
`.mjs` の option からは `focusColors(n, i)` などのヘルパを import できる:

```js
import { ACCENT, MUTED, INK, SUB, focusColors } from '../../../tools/echarts-render/tsutawaru-theme.mjs';
```

### 例

```bash
echo '{"xAxis":{"type":"category","data":["A","B"]},"yAxis":{"type":"value"},"series":[{"type":"bar","data":[3,5]}]}' \
  | node tools/echarts-render/render.mjs - /tmp/q.svg
```

## 埋め込みの3原則

1. **インラインで貼る**。`<img src="*.svg">` や `![](*.svg)` は Marp の PDF/PNG 化で空白になる。
   焼いた SVG の中身をスライドの Markdown に直接貼る。
2. **SVG に空行を入れない**。Markdown が raw HTML ブロックを空行で打ち切り、スライドが壊れる
   （render.mjs が1行化して出力するのでそのまま貼ればよい）。
3. **フォント名は単一引用符**。ECharts SSR は font-family を `style="…"` 属性にそのまま埋め込む
   ため、二重引用符だと属性が途中で閉じてグラフの文字が全消えすることがある（テーマ側は対応済み。
   option 内で fontFamily を書くときも `'BIZ UDPGothic',sans-serif` のように書く）。
