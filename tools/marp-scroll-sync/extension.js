// Marp Scroll Sync (ChibaU)
// - ステータスバーに「編集中のカーソル行が Marp の何枚目か」を表示
// - サイドの Webview プレビューをカーソル位置のスライドへ自動スクロール
// - スライドをクリックすると本文の該当行へジャンプ（双方向同期）
// - エディタで選択した文字を、プレビュー下部のツールバー／キーで font-size 1px 刻み・色変更
//   （テーマ CSS は別ファイルなので、その箇所だけインライン <span style="… !important"> で上書きする）
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { Marp } = require('@marp-team/marp-core');

let statusItem;
let panel = null;          // 現在のプレビュー WebviewPanel
let panelDocUri = null;    // プレビュー対象ドキュメントの uri.toString()
let slideStarts = [];      // プレビュー対象の各スライド開始行(0-based)
let renderTimer = null;
let revealDeco = null;     // クリック逆引き時の一時ハイライト用デコレーション
let revealDecoTimer = null;
let presentTerminal = null; // プレゼン用HTML生成を流す統合ターミナル

// --- サイズ/色 微調整（tune）用の状態 ---
const TUNE_CLASS = 'ss-tune';
const DEFAULT_PX = 23;       // 種サイズ（テーマ既定 section=23px）。実寸はプレビュークリックで上書きされる
let lastClickedPx = null;    // 直近にプレビューでクリックした要素の実寸(px)。サイズ増減の起点に使う
let renderImmediate = false; // tune 由来の編集は 700ms 待たず即時に再描画する
let lastScrollIndex = -1;    // 同一スライド内の微調整でプレビューを揺らさないための直近スクロール先
let tuneChain = Promise.resolve(); // 連打しても編集が競合しないよう直列化する

/** frontmatter に marp: true を持つ markdown か */
function isMarpDoc(doc) {
  if (!doc || doc.languageId !== 'markdown') return false;
  const head = doc.getText(new vscode.Range(0, 0, Math.min(doc.lineCount, 30), 0));
  return /^---[\s\S]*?\n\s*marp\s*:\s*true/m.test(head);
}

/**
 * 各スライドの開始行(0-based)を返す。marp-core のページ分割と一致するよう、
 * frontmatter を除外し、コードフェンス内と HTMLコメント内（発表者ノート等）を無視し、
 * setext 見出し（段落テキスト直後の ---）は区切りに数えない。
 * ただし直前が空行、または直前行で HTMLコメントが閉じた（-->）場合は区切り＝marp と一致。
 *   例: ノート `<!-- … -->` の直後に `---` を置く書き方は、marp ではページ区切りになる。
 *       これを取りこぼすと以降のスライドが1枚ずつズレる（同期・逆引きが別の場所へ飛ぶ）。
 */
function slideStartLines(text) {
  const lines = text.split(/\r?\n/);
  const starts = [];
  let i = 0;
  if (lines[0] !== undefined && /^---\s*$/.test(lines[0])) {
    let j = 1;
    while (j < lines.length && !/^---\s*$/.test(lines[j])) j++;
    i = j + 1; // frontmatter の閉じ --- の次行から最初のスライド
  }
  starts.push(i);
  let inFence = false;            // コードフェンス ``` / ~~~ の内側か
  let inComment = false;          // 複数行 HTMLコメント <!-- … --> の内側か
  let prevClosedComment = false;  // 直前の行で HTMLコメントが閉じたか（--> 直後の --- 判定用）
  for (let k = i; k < lines.length; k++) {
    const line = lines[k];
    const t = line.trim();
    // コメント内：閉じ --> を探すだけ。中の --- や ``` は区切り扱いしない
    if (inComment) {
      if (/-->/.test(line)) inComment = false;
      prevClosedComment = !inComment; // この行で閉じたら、次行の --- 判定に使う
      continue;
    }
    // コードフェンス内：閉じ記号を探すだけ
    if (inFence) {
      if (/^(```|~~~)/.test(t)) inFence = false;
      prevClosedComment = false;
      continue;
    }
    if (/^(```|~~~)/.test(t)) { inFence = true; prevClosedComment = false; continue; }
    // この行で開いて同一行内で閉じない HTMLコメント → 複数行コメントに入る
    if (/<!--/.test(line) && !/-->/.test(line.slice(line.indexOf('<!--') + 4))) {
      inComment = true; prevClosedComment = false; continue;
    }
    // 1行で完結する HTMLコメント（発表者ノート等）。marp では HTMLブロックが -->
    // の行で終わるので、直後の --- はページ区切りになる。複数行コメントと同じ扱いにする。
    // これを落とすと、ノート直後に --- を書いたデックだけ枚数が足りなくなる（例: 73枚→69枚）。
    if (/^<!--/.test(t) && /-->$/.test(t)) { prevClosedComment = true; continue; }
    if (/^---+\s*$/.test(line)) {
      const prev = k > 0 ? lines[k - 1].trim() : '';
      // 直前が空行 OR 直前行で HTMLコメントが閉じた（-->）→ スライド区切り（marp と一致）
      if (prev === '' || prevClosedComment) starts.push(k + 1);
    }
    prevClosedComment = false;
  }
  return starts;
}

/** 行番号(0-based)→ スライド index(0-based) */
function slideIndexForLine(starts, line) {
  let idx = 0;
  for (let n = 0; n < starts.length; n++) {
    if (starts[n] <= line) idx = n; else break;
  }
  return idx;
}

/** スライド index → 原稿の行範囲 [start, end)(end は exclusive) */
function lineRangeForSlide(starts, idx, lineCount) {
  const start = starts[idx] !== undefined ? starts[idx] : 0;
  const end = starts[idx + 1] !== undefined ? starts[idx + 1] : lineCount;
  return [start, end];
}

/** レンダリング後テキストと比較できるよう、原稿行から HTML タグ・Markdown 記号・実体参照を落として正規化 */
function normalizeForMatch(s) {
  return String(s)
    .replace(/<[^>]+>/g, ' ')                 // HTML タグ
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/`+/g, '')                        // インラインコード
    .replace(/\*\*|\*|__|~~/g, '')             // 強調
    .replace(/^[\s>#*\-+|]+/, '')              // 行頭の箇条書き/見出し/引用/表記号
    .replace(/\s+/g, ' ')
    .trim();
}

/** 2 文字列の最長共通部分文字列の長さ（短い行同士なので素朴な DP で十分） */
function lcsLen(a, b) {
  if (!a || !b) return 0;
  const m = a.length, n = b.length;
  let prev = new Array(n + 1).fill(0);
  let best = 0;
  for (let i = 1; i <= m; i++) {
    const cur = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        cur[j] = prev[j - 1] + 1;
        if (cur[j] > best) best = cur[j];
      }
    }
    prev = cur;
  }
  return best;
}

/**
 * クリックされたテキスト(query)に最も一致する原稿行を、スライドの行範囲内だけで探す。
 * 戻り値: 行番号(0-based) / 見つからなければ -1。
 */
function findLineForText(lines, startLn, endLn, query) {
  const q = normalizeForMatch(query);
  if (q.length < 1) return -1;
  let best = -1, bestScore = 0;
  for (let ln = startLn; ln < endLn && ln < lines.length; ln++) {
    const nl = normalizeForMatch(lines[ln]);
    if (!nl) continue;
    let score;
    if (nl.includes(q)) score = q.length + 1000;        // 行が clicked run を丸ごと含む(最強)
    else if (q.includes(nl)) score = nl.length + 500;   // 行テキストが clicked run の一部
    else score = lcsLen(nl, q);                          // 部分一致
    if (score > bestScore) { bestScore = score; best = ln; }
  }
  return bestScore >= 2 ? best : -1;
}

function updateStatus(editor) {
  if (!statusItem) return;
  const isMarp = !!(editor && isMarpDoc(editor.document));
  vscode.commands.executeCommand('setContext', 'marpScrollSync.isMarp', isMarp);
  if (!isMarp) { statusItem.hide(); return; }
  const starts = slideStartLines(editor.document.getText());
  const line = editor.selection.active.line;
  const idx = slideIndexForLine(starts, line);
  statusItem.text = `$(layout) Slide ${idx + 1}/${starts.length}`;
  statusItem.tooltip = 'Marp: クリックで同期プレビューを開く / 何枚目を編集中か';
  statusItem.show();
  // プレビュー追従（スライドが変わったときだけ。微調整中に揺らさない）
  if (panel && panelDocUri === editor.document.uri.toString()) {
    if (idx !== lastScrollIndex) {
      lastScrollIndex = idx;
      panel.webview.postMessage({ type: 'scrollToSlide', index: idx });
    }
    postTuneState(editor); // 選択に応じてツールバーの表示(px/色/活性)を更新
  }
}

/**
 * 相対ローカル画像・動画参照を webview uri に書き換える。
 * poster も対象にすること：<video poster="./src/…png"> を書き換えないと、
 * 動画の1枚目が出ずに黒い箱になる（CSP の media-src も合わせて必要）。
 */
function rewriteAssets(html, webview, docDir) {
  return html.replace(/(\bsrc\s*=\s*|\bposter\s*=\s*|\bxlink:href\s*=\s*|\bhref\s*=\s*)(["'])([^"']+)\2/g, (full, attr, q, val) => {
    if (/^(https?:|data:|#|\/\/)/.test(val)) return full;       // 外部 / data / アンカーは触らない
    if (/^[a-zA-Z]+:/.test(val)) return full;                   // スキーム付きは触らない
    const abs = path.resolve(docDir, val);
    try {
      const uri = webview.asWebviewUri(vscode.Uri.file(abs));
      return `${attr}${q}${uri.toString()}${q}`;
    } catch (_) { return full; }
  });
}

/**
 * repoRoot/theme/*.css を全部拾って絶対パスで返す。
 * chiba-deck / tsutawaru-academic は `@import "academic"` するので academic.css を先頭に置く。
 * （テーマを増やしてもここを書き換えなくていいように、固定リストにはしない）
 */
function themeFiles(repoRoot) {
  const dir = path.join(repoRoot, 'theme');
  let names;
  try { names = fs.readdirSync(dir).filter(n => n.endsWith('.css')); } catch (_) { return []; }
  names.sort((a, b) => (a === 'academic.css' ? -1 : b === 'academic.css' ? 1 : a.localeCompare(b)));
  return names.map(n => path.join(dir, n));
}

/** marp-core でデッキを描画し {html, css} を返す（テーマも読み込む） */
function renderDeck(webview, doc) {
  const docDir = path.dirname(doc.uri.fsPath);
  const repoRoot = vscode.workspace.getWorkspaceFolder(doc.uri)?.uri.fsPath || docDir;
  const marp = new Marp({ html: true });
  // 各ブロックトークンに元の行番号(0-based)を data-line として付与 → クリック逆引きを確実にする
  marp.markdown.core.ruler.push('ss_line_numbers', (state) => {
    for (const t of state.tokens) {
      if (t.map && t.nesting === 1) t.attrSet('data-line', String(t.map[0]));
    }
  });
  for (const abs of themeFiles(repoRoot)) {
    try { marp.themeSet.add(fs.readFileSync(abs, 'utf8')); } catch (_) { /* 任意 */ }
  }
  const { html, css } = marp.render(doc.getText());
  return { html: rewriteAssets(html, webview, docDir), css };
}

function buildHtml(webview, doc, initialIndex) {
  let html, css;
  try { ({ html, css } = renderDeck(webview, doc)); }
  catch (e) { return `<body style="font-family:sans-serif;padding:20px;color:#b00">レンダリングエラー: ${String(e.message || e)}</body>`; }

  const cspSource = webview.cspSource;
  return /* html */ `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy"
  content="default-src 'none'; img-src ${cspSource} https: data:; media-src ${cspSource} https: data: blob:; style-src ${cspSource} https: 'unsafe-inline'; script-src 'unsafe-inline'; font-src ${cspSource} https: data:;">
<style>
  html,body { margin:0; padding:0; background:#4a4a4f; }
  #wrap { padding:16px 16px 60vh; }
  div.marpit > svg[data-marpit-svg] {
    display:block; width:100%; height:auto; max-width:1120px;
    margin:0 auto 14px; box-shadow:0 1px 8px rgba(0,0,0,.45);
    cursor:default; scroll-margin-top:12px; border:3px solid transparent;
  }
  div.marpit > svg.current-slide { border-color:#4aa3ff; }
  .badge { position:fixed; top:8px; right:14px; z-index:9;
    background:#222a; color:#fff; font:600 12px/1.4 sans-serif;
    padding:3px 9px; border-radius:9px; pointer-events:none; }
  /* サイズ/色 微調整ツールバー（下部中央・常駐） */
  #tuner { position:fixed; left:50%; bottom:14px; transform:translateX(-50%); z-index:20;
    display:flex; align-items:center; gap:6px; padding:6px 10px; border-radius:24px;
    background:#1f1f24f0; box-shadow:0 2px 12px rgba(0,0,0,.55); color:#eee;
    font:600 12px/1 -apple-system,BlinkMacSystemFont,sans-serif; user-select:none; }
  #tuner button { font:inherit; color:#eee; background:#3a3a42; border:1px solid #555;
    border-radius:6px; padding:5px 9px; cursor:pointer; }
  #tuner button:hover { background:#4a4a55; }
  #tuner button:active { background:#5a5a66; }
  #tuner .sz { min-width:48px; text-align:center; font-variant-numeric:tabular-nums; }
  #tuner .sep { width:1px; height:18px; background:#555; margin:0 2px; }
  #tuner input[type=color] { width:26px; height:24px; padding:0; border:1px solid #555;
    border-radius:6px; background:none; cursor:pointer; }
  #tuner .sw { width:18px; height:18px; padding:0; border-radius:50%; border:1px solid #0006; }
  #tuner[data-active="0"] { opacity:.45; }
  #tuner[data-active="0"] button, #tuner[data-active="0"] input { pointer-events:none; }
</style>
<style id="deck-css">${css}</style>
</head>
<body>
<div class="badge" id="badge"></div>
<div id="wrap">${html}</div>
<div id="tuner" data-active="0" title="エディタで文字を選択してから操作（↑↓でも±1px）">
  <button id="tDec" title="−1px (↓)">A−</button>
  <span class="sz" id="tSize">–</span>
  <button id="tInc" title="+1px (↑)">A+</button>
  <span class="sep"></span>
  <input type="color" id="tColor" value="#A6192E" title="色を選ぶ">
  <button class="sw" data-c="#A6192E" style="background:#A6192E" title="赤(テーマ)"></button>
  <button class="sw" data-c="#7d1322" style="background:#7d1322" title="濃赤"></button>
  <button class="sw" data-c="#1f6fb2" style="background:#1f6fb2" title="青"></button>
  <button class="sw" data-c="#2e7d32" style="background:#2e7d32" title="緑"></button>
  <button class="sw" data-c="#1a1a1a" style="background:#1a1a1a" title="黒(標準)"></button>
  <span class="sep"></span>
  <button id="tClear" title="サイズ/色をリセット">✕</button>
</div>
<script>
  const vscode = acquireVsCodeApi();
  const initial = ${Number.isInteger(initialIndex) ? initialIndex : 0};
  function slides(){ return Array.from(document.querySelectorAll('div.marpit > svg[data-marpit-svg]')); }
  const badge = document.getElementById('badge');
  let cur = initial;          // いま選ばれているスライド（キー送りの起点）
  let navMode = false;        // キーでスライドを送っている最中か（true の間は ↑↓ を必ずページ送りに使う）
  function highlight(i){
    const ss = slides();
    cur = Math.max(0, Math.min(ss.length - 1, i));
    ss.forEach((s,idx)=>s.classList.toggle('current-slide', idx===cur));
    if (badge) badge.textContent = 'Slide ' + (cur+1) + '/' + ss.length;
  }
  function scrollTo(i){
    const s = slides()[i];
    if (s){ s.scrollIntoView({behavior:'smooth', block:'start'}); highlight(i); }
  }
  // キーでのスライド送り。プレビューを動かし、原稿のカーソルも同じスライドへ（フォーカスは奪わない）
  function goTo(i){
    const ss = slides(); if (!ss.length) return;
    const n = Math.max(0, Math.min(ss.length - 1, i));
    if (n === cur) return;
    navMode = true;
    scrollTo(n);
    vscode.postMessage({type:'gotoSlide', index:n});
  }
  function go(d){ goTo(cur + d); }
  // クリック逆引き: ポインタ直下のテキストノードを精密に取り、その文字列で原稿を照合させる。
  // 併せて要素の実寸 font-size(px) を読み、サイズ増減の起点として送る。
  function probeUnderPointer(ev){
    let r = null;
    if (document.caretRangeFromPoint) r = document.caretRangeFromPoint(ev.clientX, ev.clientY);
    else if (document.caretPositionFromPoint){ const p = document.caretPositionFromPoint(ev.clientX, ev.clientY); if(p) r = {startContainer:p.offsetNode}; }
    const node = r && r.startContainer;
    const el = (node && (node.nodeType===3 ? node.parentElement : node)) || ((ev.target && ev.target.closest) ? ev.target : null);
    let px = null, line = null;
    if (el){
      try { px = parseFloat(getComputedStyle(el).fontSize) || null; } catch(_){}
      const le = el.closest ? el.closest('[data-line]') : null;     // 元の行番号(確実)
      if (le && le.tagName !== 'SECTION'){ const n = parseInt(le.getAttribute('data-line'), 10); if (Number.isFinite(n)) line = n; }
    }
    let text = '';
    if (node && node.nodeType === 3) text = node.textContent || '';
    else if (el && el.textContent) text = el.textContent;
    return { text, px, line };
  }
  document.addEventListener('click', (ev)=>{
    navMode = false;   // クリックし直したらページ送りモードを抜ける（↑↓ がサイズ調整に戻る）
    if (ev.target && ev.target.closest && ev.target.closest('#tuner')) return; // ツールバーは逆引き対象外
    const svg = ev.target && ev.target.closest ? ev.target.closest('svg[data-marpit-svg]') : null;
    if (!svg) return;
    const i = slides().indexOf(svg);
    if (i < 0) return;
    const u = probeUnderPointer(ev);
    const text = (u.text || '').replace(/\s+/g,' ').trim();
    if (u.line != null) vscode.postMessage({type:'revealLine', index:i, line:u.line, px:u.px});       // data-line で確実に逆引き
    else if (text) vscode.postMessage({type:'revealText', index:i, text, px:u.px});                    // 保険: テキスト照合
    else vscode.postMessage({type:'revealSlide', index:i});                                            // 余白: スライド先頭
  });
  // --- ツールバー ---
  const tuner = document.getElementById('tuner');
  const tSize = document.getElementById('tSize');
  const tColor = document.getElementById('tColor');
  let tActive = false;
  function setTuneState(s){
    tActive = !!s.active;
    tuner.setAttribute('data-active', tActive ? '1' : '0');
    tSize.textContent = (s.size != null) ? (s.size + 'px') : '–';
    if (s.color) tColor.value = s.color;
  }
  document.getElementById('tInc').addEventListener('click', ()=>vscode.postMessage({type:'tune', op:'inc'}));
  document.getElementById('tDec').addEventListener('click', ()=>vscode.postMessage({type:'tune', op:'dec'}));
  document.getElementById('tClear').addEventListener('click', ()=>vscode.postMessage({type:'tune', op:'clear'}));
  tColor.addEventListener('input', ()=>vscode.postMessage({type:'tune', op:'color', value:tColor.value}));
  Array.from(document.querySelectorAll('#tuner .sw')).forEach(b=>
    b.addEventListener('click', ()=>vscode.postMessage({type:'tune', op:'color', value:b.getAttribute('data-c')})));
  // キー操作
  //   ↑ / ↓        … スライドを1枚送る（原稿側で文字を選んでいる間は従来どおり ±1px）
  //   PageUp/Down・j/k・Shift+↑↓ … 文字を選んでいても必ずスライド送り
  //   Home / End   … 先頭 / 末尾のスライドへ
  window.addEventListener('keydown', (ev)=>{
    if (ev.target && ev.target.id === 'tColor') return;
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const k = ev.key;
    if (k === 'PageDown' || k === 'j'){ ev.preventDefault(); go(+1); return; }
    if (k === 'PageUp'   || k === 'k'){ ev.preventDefault(); go(-1); return; }
    if (k === 'Home'){ ev.preventDefault(); goTo(0); return; }
    if (k === 'End'){  ev.preventDefault(); goTo(slides().length - 1); return; }
    if (k !== 'ArrowUp' && k !== 'ArrowDown') return;
    ev.preventDefault();
    const tuning = tActive && !navMode && !ev.shiftKey;   // 文字を選んでいて、かつページ送り中でなければサイズ調整
    if (tuning) vscode.postMessage({type:'tune', op: k === 'ArrowUp' ? 'inc' : 'dec'});
    else go(k === 'ArrowDown' ? +1 : -1);
  });
  window.addEventListener('message', e=>{
    const m = e.data || {};
    if (m.type === 'scrollToSlide') scrollTo(m.index);
    else if (m.type === 'render'){
      document.getElementById('deck-css').textContent = m.css || '';
      document.getElementById('wrap').innerHTML = m.html || '';
      highlight(Number.isInteger(m.index) ? m.index : 0); // 差し替え時はスクロールせず強調のみ（揺らさない）
    }
    else if (m.type === 'tuneState') setTuneState(m);
  });
  // 初期表示
  highlight(initial);
  window.requestAnimationFrame(()=>scrollTo(initial));
</script>
</body></html>`;
}

function renderInto(panelRef, doc, initialIndex) {
  panelRef.webview.html = buildHtml(panelRef.webview, doc, initialIndex);
}

/** 既存 webview の中身(#wrap と deck-css)だけ差し替える。ツールバー・スクロール位置を保つ。 */
function renderUpdate(doc, idx) {
  if (!panel) return;
  try {
    const { html, css } = renderDeck(panel.webview, doc);
    panel.webview.postMessage({ type: 'render', html, css, index: idx });
  } catch (e) {
    panel.webview.postMessage({ type: 'render', index: 0, css: '',
      html: '<pre style="color:#f88;padding:16px;white-space:pre-wrap">レンダリングエラー: ' + String(e.message || e) + '</pre>' });
  }
}

function openPreview(context) {
  const editor = vscode.window.activeTextEditor;
  if (!editor || !isMarpDoc(editor.document)) {
    vscode.window.showInformationMessage('Marp (marp: true) の markdown を開いてから実行してください。');
    return;
  }
  const doc = editor.document;
  slideStarts = slideStartLines(doc.getText());
  const idx = slideIndexForLine(slideStarts, editor.selection.active.line);
  lastScrollIndex = idx;

  if (panel) { panel.reveal(vscode.ViewColumn.Beside, true); }
  else {
    const repoRoot = vscode.workspace.getWorkspaceFolder(doc.uri)?.uri.fsPath;
    const roots = [vscode.Uri.file(path.dirname(doc.uri.fsPath))];
    if (repoRoot) roots.push(vscode.Uri.file(repoRoot));
    panel = vscode.window.createWebviewPanel(
      'marpScrollSync', 'Marp Sync Preview', { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
      { enableScripts: true, retainContextWhenHidden: true, localResourceRoots: roots }
    );
    panel.onDidDispose(() => { panel = null; panelDocUri = null; }, null, context.subscriptions);
    panel.webview.onDidReceiveMessage((m) => {
      if (!m) return;

      if (m.type === 'tune') {
        const ed = panelEditor();
        if (!ed) { vscode.window.showInformationMessage('プレビュー対象の Markdown エディタを表示してから操作してください。'); return; }
        if (m.op === 'inc') applyTune(ed, { dPx: +1 });
        else if (m.op === 'dec') applyTune(ed, { dPx: -1 });
        else if (m.op === 'color') applyTune(ed, { color: m.value });
        else if (m.op === 'clear') applyTune(ed, { clear: true });
        return;
      }

      const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri)
        || vscode.window.activeTextEditor;
      if (!ed) return;

      if (m.type === 'revealLine' && typeof m.line === 'number') {
        if (typeof m.px === 'number' && m.px > 0) lastClickedPx = Math.round(m.px); // サイズ増減の起点
        const ln = Math.max(0, Math.min(m.line, ed.document.lineCount - 1));
        const text = ed.document.lineAt(ln).text;
        const startCol = text.length - text.replace(/^\s+/, '').length;
        const range = new vscode.Range(ln, startCol, ln, Math.max(startCol, text.length));
        ed.selection = new vscode.Selection(range.start, range.end);
        ed.revealRange(range, vscode.TextEditorRevealType.InCenterIfOutsideViewport);
        flashReveal(ed, range);
        vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: false })
          .then(() => postTuneState(ed));
        return;
      }

      if (m.type === 'revealText' && typeof m.text === 'string' && slideStarts[m.index] !== undefined) {
        if (typeof m.px === 'number' && m.px > 0) lastClickedPx = Math.round(m.px); // サイズ増減の起点
        // クリックした文字列を、そのスライドの行範囲内だけで照合 → 該当行を選択＆一時ハイライト
        const lines = ed.document.getText().split(/\r?\n/);
        const [s, e] = lineRangeForSlide(slideStarts, m.index, lines.length);
        let ln = findLineForText(lines, s, e, m.text);
        if (ln < 0) ln = s;                              // 一致行なし → スライド先頭行を必ずハイライト
        const text = lines[ln] || '';
        const startCol = text.length - text.replace(/^\s+/, '').length; // 行頭インデントを除いた先頭
        const range = new vscode.Range(ln, startCol, ln, Math.max(startCol, text.length));
        ed.selection = new vscode.Selection(range.start, range.end);
        ed.revealRange(range, vscode.TextEditorRevealType.InCenterIfOutsideViewport);
        flashReveal(ed, range);
        vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: false })
          .then(() => postTuneState(ed));
        return;
      }

      if (m.type === 'revealSlide' && slideStarts[m.index] !== undefined) {
        const ln = slideStarts[m.index];
        const pos = new vscode.Position(ln, 0);
        ed.selection = new vscode.Selection(pos, pos);
        ed.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.AtTop);
        // 余白クリック＝「スライドを選ぶ」操作。フォーカスはプレビューに残し、続けて ↑↓ で送れるようにする
        vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: true });
        return;
      }

      // ↑↓ 等でのスライド送り。原稿のカーソルだけ動かし、プレビューのフォーカスは奪わない
      if (m.type === 'gotoSlide' && slideStarts[m.index] !== undefined) {
        const ln = slideStarts[m.index];
        const pos = new vscode.Position(ln, 0);
        ed.selection = new vscode.Selection(pos, pos);
        ed.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.AtTop);
        lastScrollIndex = m.index;      // プレビューは既に動いているので押し戻さない
        updateStatus(ed);               // ステータスバーの Slide n/N を更新
        return;
      }
    }, null, context.subscriptions);
  }
  panelDocUri = doc.uri.toString();
  renderInto(panel, doc, idx);
  postTuneState(editor);
}

/** 逆引きで当てた行を一時的に色付けして見つけやすくする（選択ハイライトに加えての強調） */
function flashReveal(editor, range) {
  if (!revealDeco) return;
  clearTimeout(revealDecoTimer);
  editor.setDecorations(revealDeco, [range]);
  revealDecoTimer = setTimeout(() => {
    try { editor.setDecorations(revealDeco, []); } catch (_) { /* エディタが閉じた等 */ }
  }, 2500);
}

function doRender(doc) {
  slideStarts = slideStartLines(doc.getText());
  const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri);
  const idx = ed ? slideIndexForLine(slideStarts, ed.selection.active.line) : 0;
  renderUpdate(doc, idx);
}

function scheduleReRender() {
  if (!panel || !panelDocUri) return;
  const doc = vscode.workspace.textDocuments.find(d => d.uri.toString() === panelDocUri);
  if (!doc) return;
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => doRender(doc), 700);
}

// ===== サイズ/色 微調整（tune） =====

function panelEditor() {
  return vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri)
    || (isMarpDoc(vscode.window.activeTextEditor && vscode.window.activeTextEditor.document) ? vscode.window.activeTextEditor : null);
}

function activeMarpEditor() {
  const a = vscode.window.activeTextEditor;
  if (a && isMarpDoc(a.document)) return a;
  return panelEditor();
}

function clampPx(n) { return Math.max(6, Math.min(200, Math.round(n))); }

function buildTuneStyle({ fontPx, color }) {
  const parts = [];
  if (fontPx != null) parts.push('font-size:' + fontPx + 'px !important');
  if (color) parts.push('color:' + color + ' !important');
  return parts.join('; ');
}

/** 行テキスト内で [s,e) を内側に含む ss-tune span を返す（なければ null） */
function findEnclosingTuneSpan(lineText, s, e) {
  const re = new RegExp('<span class="' + TUNE_CLASS + '"([^>]*)>([\\s\\S]*?)<\\/span>', 'g');
  let m;
  while ((m = re.exec(lineText))) {
    const open = m[0].slice(0, m[0].indexOf('>') + 1);
    const innerStart = m.index + open.length;
    const inner = m[2];
    const innerEnd = innerStart + inner.length;
    const tagEnd = m.index + m[0].length;
    if (s >= innerStart && e <= innerEnd) {
      const attrs = m[1] || '';
      const sm = attrs.match(/style\s*=\s*"([^"]*)"/i);
      const style = sm ? sm[1] : '';
      const fm = style.match(/font-size\s*:\s*([\d.]+)px/i);
      const cm = style.match(/color\s*:\s*([^;"]+)/i);
      return {
        tagStart: m.index, tagEnd, inner, innerStart, innerEnd,
        fontPx: fm ? Math.round(parseFloat(fm[1])) : null,
        color: cm ? cm[1].replace(/!important/i, '').trim() : null,
      };
    }
  }
  return null;
}

/** 行頭のブロック記号(- * + / # / 1. / >)と前後の空白を除き、装飾対象の本文範囲に詰める */
function trimToContent(lineText, s, e) {
  while (s < e && /\s/.test(lineText[s])) s++;
  if (lineText.slice(0, s).trim() === '') { // 選択が行頭から始まっている → マーカーを除く
    const mk = lineText.slice(s).match(/^(#{1,6}\s+|[-*+]\s+|\d+\.\s+|>\s+)/);
    if (mk) s += mk[0].length;
  }
  while (e > s && /\s/.test(lineText[e - 1])) e--;
  return [s, e];
}

/** 選択範囲に font-size/color を適用（連打が競合しないよう直列化） */
function applyTune(editor, opts) {
  tuneChain = tuneChain.then(() => applyTuneInner(editor, opts)).catch(() => {});
  return tuneChain;
}

async function applyTuneInner(editor, opts) {
  if (!editor) return;
  const sel = editor.selection;
  if (sel.start.line !== sel.end.line) {
    vscode.window.showInformationMessage('サイズ/色は 1 行内で選択した文字に適用できます。');
    return;
  }
  const lineNo = sel.start.line;
  const lineText = editor.document.lineAt(lineNo).text;
  let sCol = sel.start.character, eCol = sel.end.character;
  if (sCol === eCol) { // 空選択 → カーソル位置の単語に広げる
    const wr = editor.document.getWordRangeAtPosition(sel.start);
    if (wr) { sCol = wr.start.character; eCol = wr.end.character; }
    else { vscode.window.showInformationMessage('変更したい文字を選択してください。'); return; }
  }

  const span = findEnclosingTuneSpan(lineText, sCol, eCol);
  let editStart, editEnd, newText, reInner;

  if (span) { // 既存 span を更新（数値/色だけ書き換え、入れ子にしない）
    let fontPx = span.fontPx, color = span.color;
    if (opts.clear) { fontPx = null; color = null; }
    if (opts.dPx != null) {
      const base = (span.fontPx != null ? span.fontPx : (lastClickedPx != null ? lastClickedPx : DEFAULT_PX));
      fontPx = clampPx(base + opts.dPx);
    }
    if (opts.color !== undefined) color = opts.color || null;
    const style = buildTuneStyle({ fontPx, color });
    editStart = span.tagStart; editEnd = span.tagEnd;
    if (!style) { // 完全リセット → span を外して中身だけに
      newText = span.inner;
      reInner = [editStart, editStart + span.inner.length];
    } else {
      const open = '<span class="' + TUNE_CLASS + '" style="' + style + '">';
      newText = open + span.inner + '</span>';
      reInner = [editStart + open.length, editStart + open.length + span.inner.length];
    }
  } else { // 新規に span で包む
    if (opts.clear) { vscode.window.showInformationMessage('この箇所にはサイズ/色は設定されていません。'); return; }
    [sCol, eCol] = trimToContent(lineText, sCol, eCol);
    if (sCol >= eCol) { vscode.window.showInformationMessage('装飾できる文字がありません。'); return; }
    const inner = lineText.slice(sCol, eCol);
    let fontPx = null, color = null;
    if (opts.dPx != null) fontPx = clampPx((lastClickedPx != null ? lastClickedPx : DEFAULT_PX) + opts.dPx);
    if (opts.color !== undefined && opts.color) color = opts.color;
    const style = buildTuneStyle({ fontPx, color });
    if (!style) return;
    const open = '<span class="' + TUNE_CLASS + '" style="' + style + '">';
    newText = open + inner + '</span>';
    editStart = sCol; editEnd = eCol;
    reInner = [sCol + open.length, sCol + open.length + inner.length];
  }

  const we = new vscode.WorkspaceEdit();
  we.replace(editor.document.uri, new vscode.Range(lineNo, editStart, lineNo, editEnd), newText);
  renderImmediate = true; // この編集は即時反映
  const ok = await vscode.workspace.applyEdit(we);
  if (!ok) { renderImmediate = false; return; }
  // 包んだ中身を選び直して、連続で ±1px や色変更ができるようにする
  editor.selection = new vscode.Selection(lineNo, reInner[0], lineNo, reInner[1]);
  postTuneState(editor);
}

/** 現在の選択に応じてツールバーの表示(px/色/活性)を更新する */
function postTuneState(editor) {
  if (!panel) return;
  let size = null, color = null, active = false;
  if (editor && isMarpDoc(editor.document) && editor.document.uri.toString() === panelDocUri) {
    const sel = editor.selection;
    if (sel.start.line === sel.end.line) {
      const lineText = editor.document.lineAt(sel.start.line).text;
      let sCol = sel.start.character, eCol = sel.end.character;
      if (sCol === eCol) {
        const wr = editor.document.getWordRangeAtPosition(sel.start);
        if (wr) { sCol = wr.start.character; eCol = wr.end.character; }
      }
      active = eCol > sCol;
      const span = findEnclosingTuneSpan(lineText, sCol, eCol);
      if (span) { size = span.fontPx != null ? span.fontPx : (lastClickedPx != null ? lastClickedPx : DEFAULT_PX); color = span.color; }
      else size = lastClickedPx != null ? lastClickedPx : DEFAULT_PX;
    }
  }
  panel.webview.postMessage({ type: 'tuneState', size, color, active });
}

async function pickColor() {
  const presets = [
    { label: '$(circle-filled) 赤（テーマ）', value: '#A6192E' },
    { label: '$(circle-filled) 濃赤', value: '#7d1322' },
    { label: '$(circle-filled) 青', value: '#1f6fb2' },
    { label: '$(circle-filled) 緑', value: '#2e7d32' },
    { label: '$(circle-filled) 橙', value: '#e07b00' },
    { label: '$(circle-filled) 黒（標準）', value: '#1a1a1a' },
    { label: '$(paintcan) カスタム (hex)…', value: '__custom__' },
    { label: '$(clear-all) 色を消す', value: '__none__' },
  ];
  const pick = await vscode.window.showQuickPick(presets, { placeHolder: '文字色を選ぶ' });
  if (!pick) return undefined;
  if (pick.value === '__none__') return null;
  if (pick.value === '__custom__') {
    const v = await vscode.window.showInputBox({ prompt: '色 (例 #c8102e / rgb(200,16,46))', value: '#' });
    if (v == null) return undefined;
    return v.trim() || undefined;
  }
  return pick.value;
}

function cmdInc() { applyTune(activeMarpEditor(), { dPx: +1 }); }
function cmdDec() { applyTune(activeMarpEditor(), { dPx: -1 }); }
async function cmdColor() {
  const ed = activeMarpEditor();
  if (!ed) { vscode.window.showInformationMessage('Marp の Markdown で文字を選択してください。'); return; }
  const c = await pickColor();
  if (c !== undefined) applyTune(ed, { color: c });
}
function cmdClear() { applyTune(activeMarpEditor(), { clear: true }); }

/** marp-cli(--html)でプレゼン用HTMLを生成し、現在のスライドからブラウザで開く */
async function present() {
  // 対象 md と現在ページ(1-based)を解決：アクティブが Marp md ならそれ、なければプレビュー対象
  let doc = null, page = 1;
  const active = vscode.window.activeTextEditor;
  if (active && isMarpDoc(active.document)) {
    doc = active.document;
    page = slideIndexForLine(slideStartLines(doc.getText()), active.selection.active.line) + 1;
  } else if (panelDocUri) {
    doc = vscode.workspace.textDocuments.find(d => d.uri.toString() === panelDocUri);
    if (doc) {
      const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri);
      page = (ed ? slideIndexForLine(slideStartLines(doc.getText()), ed.selection.active.line) : 0) + 1;
    }
  }
  if (!doc) {
    vscode.window.showInformationMessage('marp: true の markdown を開いてから実行してください。');
    return;
  }
  await doc.save(); // marp-cli はディスクから読むので未保存分を反映

  const mdPath = doc.uri.fsPath;
  const deckDir = path.dirname(mdPath);
  const repoRoot = vscode.workspace.getWorkspaceFolder(doc.uri)?.uri.fsPath || deckDir;
  // 画像の相対参照(./src, ../assets)がそのまま解決できるよう、出力は md と同じディレクトリに置く
  const outHtml = path.join(deckDir, '.marp-present.html');

  const themeArgs = themeFiles(repoRoot)
    .map(p => `--theme-set ${JSON.stringify(p)}`)
    .join(' ');

  // 統合ターミナルで実行する。child_process と違い実シェル環境(PATH完備)を継ぎ、
  // 出力も見えるので無音ハングしない。生成成功後に bespoke の #<ページ> で既定ブラウザを開く。
  const openUrl = `file://${outHtml}#${page}`;
  const cmd = `npx --yes @marp-team/marp-cli@latest ${JSON.stringify(mdPath)} `
            + `${themeArgs} --html --allow-local-files -o ${JSON.stringify(outHtml)} `
            + `&& open ${JSON.stringify(openUrl)}`;

  if (!presentTerminal || presentTerminal.exitStatus !== undefined) {
    presentTerminal = vscode.window.createTerminal({ name: 'Marp Present', cwd: repoRoot });
  }
  presentTerminal.show(true);
  presentTerminal.sendText(cmd);
}

function gotoSlide() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || !isMarpDoc(editor.document)) return;
  const starts = slideStartLines(editor.document.getText());
  vscode.window.showInputBox({ prompt: `スライド番号 (1-${starts.length})`, validateInput: v => {
    const n = Number(v); return (Number.isInteger(n) && n >= 1 && n <= starts.length) ? null : '範囲外です';
  }}).then(v => {
    if (v == null) return;
    const ln = starts[Number(v) - 1];
    const pos = new vscode.Position(ln, 0);
    editor.selection = new vscode.Selection(pos, pos);
    editor.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.AtTop);
  });
}

function activate(context) {
  statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 200);
  statusItem.command = 'marpScrollSync.openPreview';
  context.subscriptions.push(statusItem);

  revealDeco = vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(255,214,0,0.38)',         // 黄色ハイライト
    border: '1px solid rgba(245,180,0,0.9)',
    borderRadius: '2px',
    isWholeLine: true,                                // 行全体を着色して見つけやすく
    overviewRulerColor: 'rgba(245,180,0,0.95)',
    overviewRulerLane: vscode.OverviewRulerLane.Full,
  });
  context.subscriptions.push(revealDeco);

  context.subscriptions.push(
    vscode.commands.registerCommand('marpScrollSync.openPreview', () => openPreview(context)),
    vscode.commands.registerCommand('marpScrollSync.present', () => present()),
    vscode.commands.registerCommand('marpScrollSync.gotoSlide', gotoSlide),
    vscode.commands.registerCommand('marpScrollSync.incFont', cmdInc),
    vscode.commands.registerCommand('marpScrollSync.decFont', cmdDec),
    vscode.commands.registerCommand('marpScrollSync.setColor', cmdColor),
    vscode.commands.registerCommand('marpScrollSync.clearTune', cmdClear),
    vscode.window.onDidChangeTextEditorSelection(e => updateStatus(e.textEditor)),
    vscode.window.onDidChangeActiveTextEditor(ed => updateStatus(ed)),
    vscode.workspace.onDidChangeTextDocument(e => {
      if (panelDocUri && e.document.uri.toString() === panelDocUri) {
        if (renderImmediate) { renderImmediate = false; clearTimeout(renderTimer); doRender(e.document); }
        else scheduleReRender();
      }
    })
  );
  updateStatus(vscode.window.activeTextEditor);
}

function deactivate() {}

module.exports = { activate, deactivate };
