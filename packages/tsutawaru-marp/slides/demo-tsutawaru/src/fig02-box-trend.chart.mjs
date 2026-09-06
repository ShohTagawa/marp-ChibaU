// 月別の囲み密度（枠/枚）— 著者の運用リポジトリをデック作成月で集計した実測値。
// 本のルールの運用を始めた6月から 0.39枠/枚 まで急減している。
//
// 本のルール: 折れ線のプロットは●（p.126）／系列名は凡例でなく線の先に直接書く
// （p.198 色のみに頼らない）／基準線は細い破線（p.130・markLine）。

import { ACCENT, INK, SUB, JP_FONT } from '../../../tools/echarts-render/tsutawaru-theme.mjs';

const months = ['10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月'];
const vals   = [ 1.47,  1.95,  2.42, 2.45, 2.28, 2.11, 2.52, 1.62, 0.39, 0.51 ];

export default {
  grid: { left: 10, right: 108, top: 24, bottom: 6, containLabel: true },
  xAxis: { type: 'category', data: months, boundaryGap: false },
  yAxis: { type: 'value', max: 3, splitNumber: 3 },   // 目盛は粗く（p.208）
  series: [{
    type: 'line',
    data: vals,
    itemStyle: { color: ACCENT },
    lineStyle: { color: ACCENT },
    // 凡例の代わりに線の終端へ系列名を直接書く（p.198）
    endLabel: {
      show: true, formatter: '囲み密度',
      fontSize: 17, fontWeight: 700, color: INK, fontFamily: JP_FONT,
      distance: 10,
    },
    // 全体平均の基準線（fig01 と同じ 1.35。細い破線・p.130）
    markLine: {
      symbol: 'none',
      data: [{
        yAxis: 1.35,
        label: { formatter: '全体平均 1.35', position: 'insideEndTop', fontFamily: JP_FONT },
      }],
    },
  }],
};
