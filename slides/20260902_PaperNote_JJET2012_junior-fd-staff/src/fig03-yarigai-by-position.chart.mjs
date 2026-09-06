// FD業務に対する「やりがい」の平均（5件法：1=まったく感じていない〜5=非常に感じている）
// 出典: 田口・半澤・杉原・村上 (2012) 日本教育工学会論文誌 36(3), 327-337.
//   平均値は p.332「3.2.3 ポジションの違いによるやりがいと不安の差」の本文
//   （若手センター M=4.18／若手委員会 M=3.32／代表者 M=4.08／若手事務職 M=3.54）、
//   N は p.331 図1 の凡例（若手センター22・若手委員会79・若手事務職37・代表者159）。
//   一元配置分散分析 F(3,293)=14.14, p<.001（Tukey法）。
// 本のルール: 強調は1本だけ、他はグレー（p.140）／凡例でなく値を直接添える（p.198）。

import { ACCENT, MUTED, MUTED_D, INK, SUB } from '../../../tools/echarts-render/tsutawaru-theme.mjs';

// ECharts のカテゴリ軸は先頭が下に来るので、上に出したい順の逆で並べる
const rows = [
  { name: '若手・委員会所属（N=79）', v: 3.32, hi: false },
  { name: '若手・事務職（N=37）',     v: 3.54, hi: false },
  { name: '代表者（N=159）',          v: 4.08, hi: false },
  { name: '若手・センター所属（N=22）', v: 4.18, hi: true },
];

export default {
  // containLabel は和文ラベル幅を過小評価して左端で切れるので、左余白は実寸で確保する
  grid: { left: 262, right: 64, top: 12, bottom: 40, containLabel: false },
  xAxis: {
    type: 'value',
    min: 1, max: 5,
    splitNumber: 4,                       // 目盛は粗く（p.208）：1・2・3・4・5
    axisLabel: { formatter: '{value}', fontSize: 16, color: SUB },
    name: '5件法の平均',
    nameLocation: 'end',
    nameGap: 10,
    nameTextStyle: { fontSize: 15, color: SUB, align: 'right', verticalAlign: 'top', padding: [22, 0, 0, 0] },
  },
  yAxis: {
    type: 'category',
    data: rows.map(r => r.name),
    axisLabel: { fontSize: 17, color: INK, fontWeight: 400 },
    axisLine: { show: true, lineStyle: { color: INK, width: 1.5 } },
    axisTick: { show: false },
  },
  series: [{
    type: 'bar',
    data: rows.map((r, i) => ({
      value: r.v,
      // 強調は1本だけ、残りはグレー（p.140）。塗りのみで枠線は付けない（p.100）
      itemStyle: { color: r.hi ? ACCENT : (i % 2 ? MUTED_D : MUTED) },
    })),
    barMaxWidth: 34,
    barCategoryGap: '40%',
    // 凡例を使わず値を直接添える（p.198 色のみに頼らない）
    label: {
      show: true, position: 'right', formatter: '{c}',
      fontSize: 18, fontWeight: 700, color: INK, distance: 8,
    },
  }],
};
