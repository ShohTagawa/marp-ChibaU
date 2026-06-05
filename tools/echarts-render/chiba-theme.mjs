// 千葉大スライド用 ECharts テーマ
// 配色は theme/academic.css と手描きSVG図のパレットに合わせている。
// 主役: Chiba Red #A6192E / 補助: 青 #3E78B2・緑 #3C8A57・橙 #D98A2B・灰 #6B6F76
export const CHIBA_COLORS = [
  '#A6192E', '#3E78B2', '#3C8A57', '#D98A2B', '#6B6F76', '#7d1322', '#8FB3D9', '#A9D08E'
];

const JP_FONT = '"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif';
const INK = '#1a1a1a';
const SUB = '#555555';
const AXIS = '#cccccc';
const SPLIT = '#ececec';

// ECharts テーマオブジェクト（echarts.init(null, 'chiba', …) で適用）
export const chibaTheme = {
  color: CHIBA_COLORS,
  backgroundColor: 'transparent',
  textStyle: { fontFamily: JP_FONT, color: INK },
  title: {
    textStyle: { fontFamily: JP_FONT, color: INK, fontWeight: 700, fontSize: 20 },
    subtextStyle: { fontFamily: JP_FONT, color: SUB, fontSize: 14 }
  },
  legend: { textStyle: { fontFamily: JP_FONT, color: SUB, fontSize: 14 } },
  grid: { left: 48, right: 24, top: 48, bottom: 40, containLabel: true },
  tooltip: { show: false }, // 静的SVGなので無効化
  categoryAxis: {
    axisLine: { lineStyle: { color: AXIS } },
    axisTick: { lineStyle: { color: AXIS } },
    axisLabel: { color: SUB, fontFamily: JP_FONT, fontSize: 14 },
    splitLine: { show: false, lineStyle: { color: [SPLIT] } }
  },
  valueAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: SUB, fontFamily: JP_FONT, fontSize: 14 },
    splitLine: { show: true, lineStyle: { color: [SPLIT] } }
  },
  bar: { itemStyle: { borderRadius: [4, 4, 0, 0] } },
  line: { lineStyle: { width: 3 }, symbolSize: 8 },
  pie: {
    label: { fontFamily: JP_FONT, color: INK, fontSize: 14 },
    itemStyle: { borderColor: '#fff', borderWidth: 2 }
  }
};

export default chibaTheme;
