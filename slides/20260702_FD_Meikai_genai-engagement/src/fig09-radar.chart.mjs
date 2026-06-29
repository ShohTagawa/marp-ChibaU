// 職業カテゴリ別 AIカバレッジ（理論 vs 実際）レーダー
// 出典: Massenkoff & McCrory (2026) "Labor market impacts of AI" Fig.2 を再現（値は図から読み取り・要確認）
// 不動産に関わる職種（Management / Business & finance / Sales / Office & admin）を赤で強調

// [カテゴリ, 理論(青), 実際(赤)] — 時計回り（上=Management）
const rows = [
  ["Management", 0.92, 0.27],
  ["Business & finance", 0.90, 0.40],
  ["Computer & math", 0.80, 0.45],
  ["Architecture & engineering", 0.68, 0.12],
  ["Life & social sciences", 0.62, 0.07],
  ["Social services", 0.48, 0.05],
  ["Legal", 0.95, 0.13],
  ["Education & library", 0.52, 0.07],
  ["Arts & media", 0.80, 0.16],
  ["Healthcare practitioners", 0.55, 0.11],
  ["Healthcare support", 0.27, 0.13],
  ["Protective service", 0.20, 0.07],
  ["Food & serving", 0.12, 0.03],
  ["Grounds maintenance", 0.06, 0.02],
  ["Personal care", 0.09, 0.03],
  ["Sales", 0.42, 0.23],
  ["Office & admin", 0.85, 0.37],
  ["Agriculture", 0.10, 0.03],
  ["Construction", 0.07, 0.02],
  ["Installation & repair", 0.13, 0.05],
  ["Production", 0.18, 0.05],
  ["Transportation", 0.16, 0.06],
];

// EChartsのレーダーは反時計回りなので、出典図（時計回り）に合わせて
// 先頭(Management)を上に固定したまま残りを反転する
const disp = [rows[0], ...rows.slice(1).reverse()];

// 不動産に関わる軸（赤で強調）
const HL = new Set(["Management", "Business & finance", "Sales", "Office & admin"]);

const BLUE = "#3B7DD8";
const RED = "#E0483A";

export default {
  color: [BLUE, RED],
  legend: { show: false },
  radar: {
    shape: "polygon",
    center: ["50%", "50%"],
    radius: "70%",
    splitNumber: 5,
    axisName: {
      formatter: (name) => (HL.has(name) ? `{hl|${name}}` : `{nm|${name}}`),
      rich: {
        hl: { color: RED, fontWeight: "bold", fontSize: 14, lineHeight: 16 },
        nm: { color: "#6b7177", fontSize: 14, lineHeight: 16 },
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
      symbolSize: 5,
      lineStyle: { color: BLUE, width: 2.5 },
      itemStyle: { color: BLUE },
      areaStyle: { color: "rgba(59,125,216,0.22)" },
      data: [{ value: disp.map((r) => r[1]), name: "理論上のAI適用範囲（できる）" }],
    },
    {
      type: "radar",
      symbol: "rect",
      symbolSize: 6,
      lineStyle: { color: RED, width: 2.5 },
      itemStyle: { color: RED },
      areaStyle: { color: "rgba(224,72,58,0.30)" },
      data: [{ value: disp.map((r) => r[2]), name: "実際のAI利用範囲（している）" }],
    },
  ],
};
