#!/usr/bin/env node
// ECharts の option を静的SVGに焼き出す（SSR・ブラウザ不要）。
//
// 使い方:
//   node render.mjs <option.(json|mjs|js) | -> <out.svg> [WxH] [--no-theme]
//   echo '<json>' | node render.mjs - out.svg 800x450
//
//   <option>   ECharts の setOption に渡すオブジェクト。
//              .json なら JSON、.mjs/.js なら `export default {…}`、'-' は標準入力(JSON)。
//   <out.svg>  出力先。Marp では slides/<deck>/src/figNN-<name>.svg に置く規約。
//   [WxH]      ピクセル。既定 800x450（16:9）。スライドに入れると幅100%で自動縮小。
//   --no-theme テーマを当てず素のEChartsで描く。
//
// 既定で tsutawaru テーマ（『伝わるデザインの基本』準拠：強調1系列＋グレー、
// 目盛は粗く、影・角丸なし、CUD配慮）を当てる。theme/tsutawaru-academic.css と対。
//
// 例: node render.mjs slides/<deck>/src/fig03-sales.chart.mjs /tmp/fig03.svg 800x450

import * as echarts from 'echarts';
import { tsutawaruTheme } from './tsutawaru-theme.mjs';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

const rawArgs = process.argv.slice(2);
const noTheme = rawArgs.includes('--no-theme');
const args = rawArgs.filter((a) => a !== '--no-theme' && !a.startsWith('--theme'));
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

echarts.registerTheme('deck', noTheme ? {} : tsutawaruTheme);

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
