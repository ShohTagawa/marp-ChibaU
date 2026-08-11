#!/usr/bin/env node
// ECharts の option を静的SVGに焼き出す（SSR・ブラウザ不要）。
//
// 使い方:
//   node render.mjs <option.(json|mjs|js) | -> <out.svg> [WxH] [--theme <name>] [--no-theme]
//   echo '<json>' | node render.mjs - out.svg 800x450
//
//   <option>   ECharts の setOption に渡すオブジェクト。
//              .json なら JSON、.mjs/.js なら `export default {…}`、'-' は標準入力(JSON)。
//   <out.svg>  出力先。Marp では slides/<deck>/src/figNN-<name>.svg に置く規約。
//   [WxH]      ピクセル。既定 800x450（16:9）。.fig-area に入れると幅100%で自動縮小。
//   --theme    chiba（既定・千葉大カラー）/ tsutawaru（『伝わるデザインの基本』準拠：
//              強調1系列＋グレー、目盛は粗く、影・角丸なし、CUD配慮）。
//              theme/tsutawaru-academic.css を使うデックでは tsutawaru を指定する。
//   --no-theme テーマを当てず素のEChartsで描く。
//
// 例: node render.mjs sales.json ../../slides/<deck>/src/fig03-sales.svg 800x450

import * as echarts from 'echarts';
import { chibaTheme } from './chiba-theme.mjs';
import { tsutawaruTheme } from './tsutawaru-theme.mjs';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

const rawArgs = process.argv.slice(2);
const noTheme = rawArgs.includes('--no-theme');
// --theme <name> / --theme=<name>。既定は chiba。
// tsutawaru = 『伝わるデザインの基本』準拠（theme/tsutawaru-academic.css と対）
let themeName = 'chiba';
const args = [];
for (let i = 0; i < rawArgs.length; i++) {
  const a = rawArgs[i];
  if (a === '--no-theme') continue;
  if (a === '--theme') { themeName = rawArgs[++i]; continue; }
  if (a.startsWith('--theme=')) { themeName = a.slice(8); continue; }
  if (a === '--tsutawaru') { themeName = 'tsutawaru'; continue; }
  args.push(a);
}
const THEMES = { chiba: chibaTheme, tsutawaru: tsutawaruTheme };
if (!noTheme && !THEMES[themeName]) {
  console.error(`unknown theme: ${themeName} (available: ${Object.keys(THEMES).join(', ')})`);
  process.exit(1);
}
const [optionArg, outArg, sizeArg = '800x450'] = args;

if (!optionArg || !outArg) {
  console.error('usage: node render.mjs <option.(json|mjs)|-> <out.svg> [WxH] [--no-theme]');
  process.exit(1);
}

const [width, height] = sizeArg.split('x').map(Number);
if (!width || !height) { console.error(`bad size: ${sizeArg}`); process.exit(1); }

async function loadOption() {
  if (optionArg === '-') {
    const raw = readFileSync(0, 'utf-8');           // stdin
    return JSON.parse(raw);
  }
  const abs = resolve(optionArg);
  const ext = extname(abs).toLowerCase();
  if (ext === '.json') return JSON.parse(readFileSync(abs, 'utf-8'));
  if (ext === '.mjs' || ext === '.js') {
    const mod = await import(pathToFileURL(abs).href);
    return mod.default ?? mod.option;
  }
  // 拡張子なし等は JSON とみなす
  return JSON.parse(readFileSync(abs, 'utf-8'));
}

const option = await loadOption();
if (!option || typeof option !== 'object') {
  console.error('option must be an object'); process.exit(1);
}
// 静的SVGなのでアニメーションは常にオフ
option.animation = false;

echarts.registerTheme('deck', noTheme ? {} : THEMES[themeName]);

const chart = echarts.init(null, 'deck', { renderer: 'svg', ssr: true, width, height });
chart.setOption(option);
let svg = chart.renderToSVGString();
chart.dispose();

// Marpでの拡大縮小をしやすいよう width/height 属性を外し viewBox だけ残す
svg = svg.replace(/<svg([^>]*?)\swidth="\d+"\sheight="\d+"/, '<svg$1');
// 改行を全除去して1行にする。
// 理由: Marp(Markdown)はインライン raw HTML ブロックを「空行」で終端扱いするため、
// SVG内に空行が1つでもあると残りがMarkdownとして誤解釈され、スライドが丸ごと壊れる。
svg = svg.replace(/\n\s*/g, '');

mkdirSync(dirname(resolve(outArg)), { recursive: true });
writeFileSync(resolve(outArg), svg, 'utf-8');
console.log(`✓ ${outArg}  (${width}x${height}, ${svg.length.toLocaleString()} bytes)`);
