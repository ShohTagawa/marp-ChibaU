// 『伝わるデザインの基本 増補改訂3版』準拠の ECharts テーマ
// theme/tsutawaru-academic.css と対になる。根拠ページはコメントの p.NNN。
//
//   p.123 グラフの項目数の上限は概ね6
//   p.132 影をなくす／余計な目盛線は消す・薄くする
//   p.134 軸の色は黒
//   p.126 折れ線のプロットは●（丸）
//   p.127 円グラフの区切りは白い枠線
//   p.140 強調するのは1系列。他の系列はグレーに落とす
//   p.141 多様な図形・色を使いすぎない
//   p.195 色覚多様性：赤と緑の対比を避け、オレンジや青を使う／暖色×寒色＋明度差
//   p.198 色のみに頼らない（凡例より直接ラベル）
//   p.208 目盛りは粗く／文字は細すぎない／要素を揃える／余白をとる
//   p.100 色を使うのは「塗り」か「枠」のどちらか一方だけ

// フォント名は必ず「単一引用符」で囲む。
// ECharts の SSR は font-family をそのまま style="…" 属性に埋め込むため、
// 二重引用符を使うと属性が途中で閉じ、インライン埋め込み時に文字が全部消える。
const JP_FONT =
  "'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif";

// 4色ルール（p.190）に合わせ、グラフの既定は「メインの色＋無彩色」だけ。
export const INK = '#262626';      // 文字の基本色（黒ではない・p.193/198）
export const SUB = '#5F5F5F';      // 重要度の低い文字
export const ACCENT = '#A6192E';   // メインの色（えんじ＝原色を避ける・p.205）
export const GRID = '#E4E4E4';     // 目盛線は薄く（p.132）
export const MUTED = '#BDBDBD';    // 強調しない系列（p.140）
export const MUTED_D = '#8A8A8A';  // 強調しない系列（2本目以降・明度で差をつける）

// 系列が全部主役のときだけ使う配色。
// 暖色×寒色＋明度差、赤と緑を隣り合わせない（p.195）。
export const TSUTAWARU_COLORS = [
  ACCENT,     // えんじ（暖・暗）
  '#2166AC',  // 青  （寒・中）
  '#B45309',  // 橙  （暖・中）
  '#8A8A8A',  // 灰
  '#5B3E8E',  // 紫  （寒・暗）
  '#8C5A2B',  // 茶
];

/**
 * 「1系列だけ強調、残りはグレー」の色配列を作る（p.140）。
 * @param {number} n     系列（または棒）の数
 * @param {number} focus 強調するインデックス。-1 なら全部グレー
 * @param {string} color 強調色（既定はメインの色）
 */
export function focusColors(n, focus = 0, color = ACCENT) {
  return Array.from({ length: n }, (_, i) =>
    i === focus ? color : (i % 2 ? MUTED_D : MUTED)
  );
}

export const tsutawaruTheme = {
  color: TSUTAWARU_COLORS,
  backgroundColor: 'transparent',
  textStyle: { fontFamily: JP_FONT, color: INK },

  // チャート内のタイトルは使わない（スライドの見出しと二重になる）。
  // 使う場合に備えてスタイルだけ定義。
  title: {
    textStyle: { fontFamily: JP_FONT, color: INK, fontWeight: 700, fontSize: 22 },
    subtextStyle: { fontFamily: JP_FONT, color: SUB, fontSize: 16 },
  },

  // 凡例よりも系列への直接ラベルを推奨（p.198）。使う場合は控えめに。
  legend: {
    itemWidth: 14, itemHeight: 10, icon: 'roundRect',
    textStyle: { fontFamily: JP_FONT, color: SUB, fontSize: 16 },
  },

  // 余白をとる（p.208）。containLabel で軸ラベルのはみ出しを防ぐ。
  grid: { left: 12, right: 26, top: 26, bottom: 10, containLabel: true },
  tooltip: { show: false },     // 静的SVGなので無効

  // カテゴリ軸：軸線は黒（p.134）、目盛線は出さない
  categoryAxis: {
    axisLine: { show: true, lineStyle: { color: INK, width: 1.5 } },
    axisTick: { show: false },
    axisLabel: { color: INK, fontFamily: JP_FONT, fontSize: 17, fontWeight: 700, margin: 10 },
    splitLine: { show: false },
    splitArea: { show: false },
  },
  // 数値軸：軸線は出さず、薄い横罫だけ（p.132「消す・薄く」／p.208 の作例）
  valueAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: SUB, fontFamily: JP_FONT, fontSize: 16, margin: 10 },
    splitLine: { show: true, lineStyle: { color: [GRID], width: 1 } },
    splitArea: { show: false },
    splitNumber: 4,             // 目盛は粗く（p.208「目盛りが細かすぎる」への対処）
  },
  logAxis:  { axisLine: { show: false }, axisTick: { show: false },
              splitLine: { show: true, lineStyle: { color: [GRID] } } },
  timeAxis: { axisLine: { show: true, lineStyle: { color: INK, width: 1.5 } },
              axisTick: { show: false },
              axisLabel: { color: SUB, fontFamily: JP_FONT, fontSize: 16 },
              splitLine: { show: false } },

  // 棒：角丸なし・影なし・太らせすぎない（p.98/p.132）
  bar: {
    itemStyle: { borderRadius: 0, borderWidth: 0, shadowBlur: 0, shadowColor: 'transparent' },
    barMaxWidth: 56,
    barCategoryGap: '38%',
    label: { fontFamily: JP_FONT, fontSize: 17, fontWeight: 700, color: INK },
  },
  // 折れ線：プロットは●（p.126）、影・面グラデーションなし
  line: {
    lineStyle: { width: 2.5, shadowBlur: 0 },
    symbol: 'circle',
    symbolSize: 9,
    itemStyle: { borderWidth: 0, shadowBlur: 0 },
    smooth: false,
    label: { fontFamily: JP_FONT, fontSize: 17, fontWeight: 700, color: INK },
  },
  // 円：区切りは白い枠線（p.127）。ラベルは外に、引き出し線は細く（p.121）
  pie: {
    itemStyle: { borderColor: '#ffffff', borderWidth: 2, shadowBlur: 0 },
    label: { fontFamily: JP_FONT, fontSize: 17, color: INK,
             lineHeight: 22, alignTo: 'labelLine' },
    labelLine: { length: 14, length2: 14, lineStyle: { width: 1, color: SUB } },
  },
  scatter: {
    itemStyle: { borderWidth: 0, shadowBlur: 0, opacity: 0.85 },
    symbolSize: 12,
  },
  boxplot: { itemStyle: { borderWidth: 1.5, color: '#ffffff' } },
  radar: {
    lineStyle: { width: 2.5 }, symbol: 'circle', symbolSize: 8,
    areaStyle: { opacity: 0.12 },
  },
  graph: { color: TSUTAWARU_COLORS },
  // 補助線（p.130 補助線の色は白／目盛の上に重なる線は目立たせない）
  markLine: { lineStyle: { color: SUB, width: 1, type: 'dashed' },
              label: { fontFamily: JP_FONT, fontSize: 15, color: SUB } },
};

export default tsutawaruTheme;
