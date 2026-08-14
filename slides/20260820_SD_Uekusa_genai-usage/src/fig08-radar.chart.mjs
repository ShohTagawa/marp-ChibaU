// 職業カテゴリ別 AIカバレッジ（理論上できる vs 実際にしている）レーダー
// 出典: Massenkoff & McCrory (2026) "Labor market impacts of AI" Fig.2 を再現
//       （値は公開図からの読み取り・要確認。明海FDデック src/fig09-radar.chart.mjs から移植）
// 明海版は「不動産に関わる職種」を強調していた。植草学園SD版は
// 小学校教諭・幼稚園（保育）・学園事務にあたる軸＝教育・図書／対人ケア／事務・管理 を緑で強調する。
// （赤は「実際にしている」系列で使うため、ラベルは色被りしないデックのaccent緑にする）

// [カテゴリ, 理論(できる), 実際(している)] — 時計回り（上=管理職）
const rows = [
  ["管理職", 0.92, 0.27],
  ["ビジネス・金融", 0.90, 0.40],
  ["情報・数学", 0.80, 0.45],
  ["建築・工学", 0.68, 0.12],
  ["自然・社会科学", 0.62, 0.07],
  ["社会福祉", 0.48, 0.05],
  ["法務", 0.95, 0.13],
  ["教育・図書", 0.52, 0.07],
  ["芸術・メディア", 0.80, 0.16],
  ["医療専門職", 0.55, 0.11],
  ["医療補助", 0.27, 0.13],
  ["保安", 0.20, 0.07],
  ["飲食", 0.12, 0.03],
  ["清掃・整備", 0.06, 0.02],
  ["対人ケア", 0.09, 0.03],
  ["営業・販売", 0.42, 0.23],
  ["事務・管理", 0.85, 0.37],
  ["農林漁業", 0.10, 0.03],
  ["建設", 0.07, 0.02],
  ["設置・修理", 0.13, 0.05],
  ["製造", 0.18, 0.05],
  ["運輸", 0.16, 0.06],
];

// EChartsのレーダーは反時計回りなので、出典図（時計回り）に合わせて
// 先頭(管理職)を上に固定したまま残りを反転する
const disp = [rows[0], ...rows.slice(1).reverse()];

// 学園の仕事にあたる軸（緑で強調）
const HL = new Set(["教育・図書", "対人ケア", "事務・管理"]);

const BLUE = "#3B7DD8";
const RED = "#E0483A";
const GREEN = "#2F6B3A";  // デック accent（強調ラベル用）

export default {
  color: [BLUE, RED],
  legend: { show: false },
  radar: {
    shape: "polygon",
    center: ["50%", "51%"],
    radius: "82%",
    splitNumber: 5,
    axisName: {
      formatter: (name) => (HL.has(name) ? `{hl|${name}}` : `{nm|${name}}`),
      rich: {
        hl: { color: GREEN, fontWeight: "bold", fontSize: 26, lineHeight: 28 },
        nm: { color: "#6b7177", fontSize: 26, lineHeight: 28 },
      },
    },
    axisLine: { lineStyle: { color: "#d6d9dd" } },
    splitLine: { lineStyle: { color: "#e3e6ea" } },
    splitArea: { areaStyle: { color: ["#fbfbfa", "#f4f4f2"] } },
    axisLabel: { show: false },
    indicator: disp.map(([name]) => ({ name, max: 1 })),
  },
  series: [
    {
      type: "radar",
      emphasis: { disabled: true },   // 静的SVGなのでホバー効果は不要
      symbolSize: 4,
      lineStyle: { color: BLUE, width: 2.5 },
      itemStyle: { color: BLUE },
      areaStyle: { color: "rgba(59,125,216,0.22)" },
      data: [{ value: disp.map((r) => r[1]), name: "理論上のAI適用範囲（できる）" }],
    },
    {
      type: "radar",
      emphasis: { disabled: true },   // 静的SVGなのでホバー効果は不要
      symbol: "rect",
      symbolSize: 5,
      lineStyle: { color: RED, width: 3 },
      itemStyle: { color: RED },
      areaStyle: { color: "rgba(224,72,58,0.32)" },
      data: [{ value: disp.map((r) => r[2]), name: "実際のAI利用範囲（している）" }],
    },
  ],
};
