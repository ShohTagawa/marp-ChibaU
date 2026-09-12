// svg-tidy 共通ライブラリ：Marp の md からインライン SVG を見つけ、
// 「1要素1行・空行なし」に整形し、<text> の所在（行・列・座標・文字列）を索引化する。
//
// なぜ整形するか：1行化された SVG（1万字超）は VS Code で折りたためず、Cmd+F で
// 当たっても巨大な1行の中で位置が分からない。1要素1行なら
//   - 各 <text> が独立した短い行になり、行番号でそのまま場所を指せる
//   - VS Code 拡張（tools/marp-pdf/vscode-extension）で <svg>…</svg> を折りたためる
// 空行を1つも作らないので Markdown の HTML ブロックは途切れず、描画は変わらない。

// ── 位置ユーティリティ ───────────────────────────────────────────────
export function lineIndex(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text.charCodeAt(i) === 10) starts.push(i + 1);
  return {
    // 1-based line / col（col は UTF-16 単位＝VS Code の列と一致）
    at(offset) {
      let lo = 0, hi = starts.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (starts[mid] <= offset) lo = mid; else hi = mid - 1; }
      return { line: lo + 1, col: offset - starts[lo] + 1 };
    },
    lineStart(offset) { return starts[this.at(offset).line - 1]; },
  };
}

// ── フェンス（```）と frontmatter の範囲：この中の <svg> は触らない ──
export function fencedRanges(md) {
  const ranges = [];
  let inFence = null, fenceStart = 0, off = 0;
  for (const ln of md.split('\n')) {
    const m = ln.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (m) {
      if (!inFence) { inFence = m[1][0]; fenceStart = off; }
      else if (m[1][0] === inFence) { ranges.push([fenceStart, off + ln.length]); inFence = null; }
    }
    off += ln.length + 1;
  }
  if (inFence) ranges.push([fenceStart, md.length]);
  return ranges;
}

export function frontmatterEnd(md) {
  if (!md.startsWith('---')) return 0;
  const m = /^---[^\n]*\n[\s\S]*?\n---[ \t]*(\n|$)/.exec(md);
  return m ? m[0].length : 0;
}

const inRanges = (ranges, i) => ranges.some(([a, b]) => i >= a && i <= b);

// Marp のスライド番号：frontmatter 以降の水平線（--- / *** / ___）を数える
export function slideNumberer(md) {
  const fm = frontmatterEnd(md);
  const fences = fencedRanges(md);
  const seps = [];
  const re = /^ {0,3}(-{3,}|\*{3,}|_{3,})[ \t]*$/gm;
  let m;
  while ((m = re.exec(md))) if (m.index >= fm && !inRanges(fences, m.index)) seps.push(m.index);
  return (offset) => { let n = 1; for (const s of seps) { if (s < offset) n++; else break; } return n; };
}

// ── <svg>…</svg> ブロックの列挙（入れ子 svg・コメント内は考慮） ──────
export function findSvgBlocks(md) {
  const fences = fencedRanges(md);
  const slideOf = slideNumberer(md);
  const li = lineIndex(md);
  const blocks = [];
  const open = /<svg(?=[\s>\/])/gi;
  let m;
  while ((m = open.exec(md))) {
    if (inRanges(fences, m.index)) continue;
    const end = matchingSvgEnd(md, m.index);
    if (end < 0) break;
    const start = m.index;
    const { line, col } = li.at(start);
    blocks.push({ start, end, line, col, slide: slideOf(start), raw: md.slice(start, end) });
    open.lastIndex = end;
  }
  // 同一スライド内の通し番号
  let prevSlide = -1, k = 0;
  for (const b of blocks) { if (b.slide !== prevSlide) { prevSlide = b.slide; k = 0; } b.index = ++k; }
  return blocks;
}

function matchingSvgEnd(md, from) {
  const re = /<!--[\s\S]*?-->|<\/svg\s*>|<svg(?=[\s>\/])/gi;
  re.lastIndex = from;
  let depth = 0, m;
  while ((m = re.exec(md))) {
    const t = m[0];
    if (t.startsWith('<!--')) continue;
    if (t.startsWith('</')) { depth--; if (depth === 0) return m.index + t.length; continue; }
    // 開始タグ：自己閉じ（<svg …/>）なら深さを増やさない
    const gt = tagEnd(md, m.index);
    if (md.slice(gt - 1, gt) === '/' ) { if (depth === 0) return gt + 1; continue; }
    depth++;
    re.lastIndex = gt + 1;
  }
  return -1;
}

// タグの終わり（'>' の位置）を引用符を尊重して返す
function tagEnd(s, i) {
  let j = i + 1, q = null;
  while (j < s.length) {
    const c = s[j];
    if (q) { if (c === q) q = null; }
    else if (c === '"' || c === "'") q = c;
    else if (c === '>') return j;
    j++;
  }
  return s.length - 1;
}

// ── 整形：1要素1行・空行なし ───────────────────────────────────────────
// 中身をそのまま1行に保つ要素（空白が意味を持つ／分割すると描画が変わる）
const RAW_ELEMENTS = new Set(['text', 'style', 'title', 'desc', 'script', 'foreignObject', 'metadata', 'textPath', 'tspan']);

// タグ文字列の内部空白を正規化（引用符の外は1スペースに、引用符の中は改行だけスペースに）
function normalizeTag(tag) {
  let out = '', q = null;
  for (let i = 0; i < tag.length; i++) {
    const c = tag[i];
    if (q) { out += (c === '\n' || c === '\r') ? ' ' : c; if (c === q) q = null; continue; }
    if (c === '"' || c === "'") { q = c; out += c; continue; }
    if (/\s/.test(c)) { if (out[out.length - 1] !== ' ') out += ' '; continue; }
    out += c;
  }
  return out.replace(/ \/>$/, '/>').replace(/ >$/, '>');
}

// 生要素（<text>…</text> 等）の中の改行処理：SVG の xml:space 規則に合わせる
function flattenRaw(name, s) {
  if (name === 'text' || name === 'tspan' || name === 'textPath') {
    const preserve = /xml:space\s*=\s*["']preserve["']/.test(s.slice(0, tagEnd(s, 0) + 1));
    // default: 改行は「除去」、preserve: 改行は「スペース」
    return preserve ? s.replace(/\r?\n/g, ' ') : s.replace(/\r?\n[ \t]*/g, '');
  }
  return s.replace(/\r?\n[ \t]*/g, ' ');
}

// name の閉じタグ位置（同名の入れ子を数える）。戻り値は閉じタグ '>' の次
function rawElementEnd(s, name, from) {
  const re = new RegExp(`<\\/${name}\\s*>|<${name}(?=[\\s>\\/])`, 'g');
  re.lastIndex = from;
  let depth = 1, m;
  while ((m = re.exec(s))) {
    if (m[0].startsWith('</')) { depth--; if (depth === 0) return m.index + m[0].length; }
    else { const gt = tagEnd(s, m.index); if (s[gt - 1] !== '/') depth++; re.lastIndex = gt + 1; }
  }
  return s.length;
}

/**
 * インライン SVG 文字列を「1要素1行・空行なし」の行配列に整形する。
 * - 開始/終了タグはそれぞれ1行、深さに応じて indent（既定1スペース）で字下げ
 * - <text>/<style>/<title>/<desc>/<foreignObject>… は中身ごと1行に保つ
 * - 要素間の空白テキストは捨てる（SVG では無意味）。文字を含むテキストノードは残す
 */
export function formatSvg(src, { indent = ' ' } = {}) {
  const out = [];
  let depth = 0, i = 0;
  const n = src.length;
  const push = (line) => { if (line.trim()) out.push(line); };
  const pad = () => indent.repeat(depth);
  while (i < n) {
    if (src[i] !== '<') {
      let j = src.indexOf('<', i); if (j < 0) j = n;
      const t = src.slice(i, j);
      if (t.trim()) push(pad() + t.trim().replace(/\s*\r?\n\s*/g, ' '));
      i = j; continue;
    }
    if (src.startsWith('<!--', i)) {
      let j = src.indexOf('-->', i); j = j < 0 ? n : j + 3;
      push(pad() + src.slice(i, j).replace(/\s*\r?\n\s*/g, ' '));
      i = j; continue;
    }
    if (src.startsWith('<![CDATA[', i)) {
      let j = src.indexOf(']]>', i); j = j < 0 ? n : j + 3;
      push(pad() + src.slice(i, j).replace(/\r?\n/g, ' '));
      i = j; continue;
    }
    const gt = tagEnd(src, i);
    const rawTag = src.slice(i, gt + 1);
    const tag = normalizeTag(rawTag);
    const closing = tag[1] === '/';
    const selfClosing = tag.endsWith('/>');
    const name = (tag.match(/^<\/?([A-Za-z_:][\w:.-]*)/) || [])[1] || '';
    if (closing) { depth = Math.max(0, depth - 1); push(pad() + tag); i = gt + 1; continue; }
    if (!selfClosing && RAW_ELEMENTS.has(name)) {
      const end = rawElementEnd(src, name, gt + 1);
      push(pad() + tag + flattenRaw(name, src.slice(gt + 1, end)));
      i = end; continue;
    }
    push(pad() + tag);
    if (!selfClosing) depth++;
    i = gt + 1;
  }
  return out;
}

// ── <text> の索引 ─────────────────────────────────────────────────────
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'", nbsp: ' ' };
export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') { const code = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(code) ? String.fromCodePoint(code) : m; }
    return ENT[e] !== undefined ? ENT[e] : m;
  });
}
export function escapeText(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function attr(tag, name) {
  const m = new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`).exec(tag);
  return m ? (m[2] !== undefined ? m[2] : m[3]) : undefined;
}

/**
 * md 全体（または1ブロック）から <text> 要素を列挙する。
 * 戻り値: { line, col, start, end, innerStart, innerEnd, x, y, anchor, text, hasMarkup }
 */
export function findTexts(md, block) {
  const li = lineIndex(md);
  const from = block ? block.start : 0, to = block ? block.end : md.length;
  const re = /<text(?=[\s>])/g;
  re.lastIndex = from;
  const texts = [];
  let m;
  while ((m = re.exec(md)) && m.index < to) {
    const gt = tagEnd(md, m.index);
    const tag = md.slice(m.index, gt + 1);
    if (tag.endsWith('/>')) { re.lastIndex = gt + 1; continue; }
    const end = rawElementEnd(md, 'text', gt + 1);
    const inner = md.slice(gt + 1, end).replace(/<\/text\s*>$/, '');
    const innerEnd = gt + 1 + inner.length;
    let x = attr(tag, 'x'), y = attr(tag, 'y');
    if ((x === undefined || y === undefined)) {
      const tr = attr(tag, 'transform');
      const t = tr && /translate\(\s*([-\d.]+)[ ,]+([-\d.]+)/.exec(tr);
      if (t) { x = x === undefined ? t[1] : x; y = y === undefined ? t[2] : y; }
    }
    const plain = decodeEntities(inner.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
    const { line, col } = li.at(m.index);
    texts.push({ line, col, start: m.index, end, innerStart: gt + 1, innerEnd, x: x ?? '', y: y ?? '', anchor: attr(tag, 'text-anchor') || '', text: plain, hasMarkup: /<[a-zA-Z]/.test(inner) });
    re.lastIndex = end;
  }
  return texts;
}
