# ECharts レシピ集（千葉大スライド用）

各テンプレは `tools/echarts-render/render.mjs` にそのまま渡せる ECharts `option`。
共通方針：**チャート内 `title` は付けない**（スライドの `## 見出し` を使う）／色・フォントはテーマが自動適用。
描画：`node tools/echarts-render/render.mjs <これを保存した.json> /tmp/out.svg 800x450`

---

## 1. 縦棒（bar）— 量の比較

```json
{
  "xAxis": { "type": "category", "data": ["A", "B", "C", "D", "E"] },
  "yAxis": { "type": "value", "name": "件数" },
  "series": [{ "type": "bar", "data": [120, 200, 150, 80, 170], "barWidth": "55%" }]
}
```
注：1系列なら主役色（赤）で塗られる。特定の棒だけ強調するなら `data` を `{ "value": 200, "itemStyle": { "color": "#A6192E" } }` の形に。

## 2. 横棒（bar 横向き）— カテゴリ名が長い／多い時

```json
{
  "grid": { "left": 140 },
  "xAxis": { "type": "value", "name": "回答数" },
  "yAxis": { "type": "category", "data": ["とても良い", "良い", "普通", "悪い", "とても悪い"], "inverse": true },
  "series": [{ "type": "bar", "data": [42, 88, 35, 12, 5], "barWidth": "60%" }]
}
```
注：ラベルが切れる時は `grid.left` を増やす（見切れ防止）。

## 3. 折れ線（line）— 推移・複数系列

```json
{
  "legend": { "top": 0, "data": ["講義A", "講義B"] },
  "xAxis": { "type": "category", "boundaryGap": false, "data": ["4月","5月","6月","7月"] },
  "yAxis": { "type": "value", "name": "出席率(%)", "max": 100 },
  "series": [
    { "name": "講義A", "type": "line", "data": [88, 85, 90, 92], "smooth": true },
    { "name": "講義B", "type": "line", "data": [80, 78, 82, 79], "smooth": true }
  ]
}
```
注：`smooth:true` で曲線。面で見せるなら各系列に `"areaStyle": {}`。

## 4. 棒＋折れ線 複合（2軸）— 実数と率を同時に

```json
{
  "legend": { "top": 0, "data": ["受講者数", "平均点"] },
  "xAxis": { "type": "category", "data": ["2021","2022","2023","2024","2025"] },
  "yAxis": [
    { "type": "value", "name": "人数" },
    { "type": "value", "name": "点", "max": 100, "splitLine": { "show": false } }
  ],
  "series": [
    { "name": "受講者数", "type": "bar", "data": [120, 145, 160, 180, 210] },
    { "name": "平均点", "type": "line", "yAxisIndex": 1, "data": [72, 75, 78, 80, 83] }
  ]
}
```

## 5. 円 / ドーナツ（pie）— 構成比

```json
{
  "legend": { "top": 0 },
  "series": [{
    "type": "pie",
    "radius": ["40%", "70%"],
    "center": ["50%", "56%"],
    "label": { "formatter": "{b}\n{d}%" },
    "data": [
      { "value": 48, "name": "理解できた" },
      { "value": 32, "name": "ふつう" },
      { "value": 20, "name": "難しかった" }
    ]
  }]
}
```
注：`radius` を `"70%"` の単値にすると普通の円グラフ。3〜6分類が見やすい上限。

## 6. 散布図（scatter）— 2変数の関係

```json
{
  "xAxis": { "type": "value", "name": "学習時間(h)" },
  "yAxis": { "type": "value", "name": "得点" },
  "series": [{
    "type": "scatter", "symbolSize": 12,
    "data": [[2,55],[3,60],[4,66],[5,70],[6,78],[7,82],[8,88]]
  }]
}
```
注：回帰の説明をするなら `markLine` で近似線を足せる：`"markLine": { "data": [{ "type": "average" }] }`。

## 7. ヒストグラム（bar の階級）— 分布

```json
{
  "xAxis": { "type": "category", "data": ["0-20","20-40","40-60","60-80","80-100"], "name": "点" },
  "yAxis": { "type": "value", "name": "人数" },
  "series": [{ "type": "bar", "data": [3, 8, 22, 31, 14], "barWidth": "98%" }]
}
```
注：階級は事前に集計して渡す（ECharts は自動ビニングしない）。`barWidth:"98%"` で隣接させ度数分布らしく。

## 8. 箱ひげ図（boxplot）— ばらつき・外れ値

```json
{
  "xAxis": { "type": "category", "data": ["A班","B班","C班"] },
  "yAxis": { "type": "value", "name": "得点" },
  "series": [{
    "type": "boxplot",
    "data": [
      [60, 68, 74, 82, 95],
      [55, 63, 70, 78, 88],
      [62, 70, 76, 84, 92]
    ]
  }]
}
```
注：各データは `[最小, Q1, 中央値, Q3, 最大]`。生データから5数要約を先に計算しておく。

## 9. 積み上げ棒（stacked bar）— 内訳の推移

```json
{
  "legend": { "top": 0, "data": ["対面","オンデマンド","ハイブリッド"] },
  "xAxis": { "type": "category", "data": ["2022","2023","2024","2025"] },
  "yAxis": { "type": "value", "name": "科目数" },
  "series": [
    { "name": "対面", "type": "bar", "stack": "t", "data": [30, 26, 22, 18] },
    { "name": "オンデマンド", "type": "bar", "stack": "t", "data": [8, 14, 20, 28] },
    { "name": "ハイブリッド", "type": "bar", "stack": "t", "data": [4, 8, 12, 16] }
  ]
}
```

---

## サイズの目安（render.mjs の第3引数）

| 形 | 推奨 |
|---|---|
| 標準（カテゴリ〜6） | `800x450` |
| カテゴリが多い縦棒・折れ線 | `960x450` |
| 横棒（ラベル長い） | `800x500` |
| 円・正方形寄り | `640x460` |

出力SVGは `viewBox` のみなのでスライド幅にフィット。`.fig-area` で縦が詰まる時は描画サイズの縦を小さく（例 `800x420`）。
