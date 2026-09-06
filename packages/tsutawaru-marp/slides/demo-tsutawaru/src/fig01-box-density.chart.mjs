// 囲み密度（枠/枚）— 著者の運用リポジトリ（139デック）を実測した値。
// 計測方法: 各 .md の `^---$` 区切りをスライド数、囲み系クラスの出現数を囲み数として数え、
//   囲み数 ÷ スライド数 を算出。「ルール適用後」は本のルールで推敲を経たデック。
// 本のルール: 項目数は概ね6まで（p.123）／強調は1つだけ、他はグレー（p.140）。

import { ACCENT, MUTED, MUTED_D, INK, SUB } from '../../../tools/echarts-render/tsutawaru-theme.mjs';

const rows = [
  { name: 'ルール適用後 A', v: 0.00, hi: false },
  { name: 'ルール適用後 B', v: 0.08, hi: false },
  { name: 'ルール適用後 C', v: 0.45, hi: false },
  { name: 'ルール適用後 D', v: 1.11, hi: false },
  { name: '全体の平均', v: 1.35, hi: true },
  { name: '最も多いデック', v: 3.41, hi: false },
];

export default {
  // containLabel は和文ラベル幅を過小評価して左端で切れるので、左余白は実寸で確保する
  grid: { left: 184, right: 58, top: 10, bottom: 34, containLabel: false },
  xAxis: {
    type: 'value',
    max: 4,
    splitNumber: 4,                       // 目盛は粗く、区切りは丸い数字に（p.208）
    axisLabel: { formatter: '{value}', fontSize: 16, color: SUB },
  },
  yAxis: {
    type: 'category',
    data: rows.map(r => r.name),
    axisLabel: { fontSize: 17, color: INK, fontWeight: 400 },
    axisLine: { show: true, lineStyle: { color: INK, width: 1.5 } },
  },
  series: [{
    type: 'bar',
    data: rows.map((r, i) => ({
      value: r.v,
      // 強調は1本だけ、残りはグレー（p.140）。塗りのみで枠線は付けない（p.100）
      itemStyle: { color: r.hi ? ACCENT : (i % 2 ? MUTED_D : MUTED) },
    })),
    barMaxWidth: 30,
    barCategoryGap: '42%',
    // 凡例を使わず値を直接添える（p.198 色のみに頼らない）
    label: {
      show: true, position: 'right', formatter: '{c}',
      fontSize: 17, fontWeight: 700, color: INK, distance: 8,
    },
  }],
};
