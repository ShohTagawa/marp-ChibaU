// Marp Scroll Sync (ChibaU)
// - ステータスバーに「編集中のカーソル行が Marp の何枚目か」を表示
// - サイドの Webview プレビューをカーソル位置のスライドへ自動スクロール
// - スライドをクリックすると本文の該当行へジャンプ（双方向同期）
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { Marp } = require('@marp-team/marp-core');

let statusItem;
let panel = null;          // 現在のプレビュー WebviewPanel
let panelDocUri = null;    // プレビュー対象ドキュメントの uri.toString()
let slideStarts = [];      // プレビュー対象の各スライド開始行(0-based)
let renderTimer = null;
let revealDeco = null;     // クリック逆引き時の一時ハイライト用デコレーション
let revealDecoTimer = null;

/** frontmatter に marp: true を持つ markdown か */
function isMarpDoc(doc) {
  if (!doc || doc.languageId !== 'markdown') return false;
  const head = doc.getText(new vscode.Range(0, 0, Math.min(doc.lineCount, 30), 0));
  return /^---[\s\S]*?\n\s*marp\s*:\s*true/m.test(head);
}

/**
 * 各スライドの開始行(0-based)を返す。marp-core のページ分割と一致するよう、
 * frontmatter を除外し、コードフェンス内を無視し、setext 見出し（直前が非空行の ---）を除外する。
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
  let inFence = false;
  for (let k = i; k < lines.length; k++) {
    const line = lines[k];
    const t = line.trim();
    if (/^(```|~~~)/.test(t)) { inFence = !inFence; continue; }
    if (inFence) continue;
    if (/^---+\s*$/.test(line)) {
      const prev = k > 0 ? lines[k - 1].trim() : '';
      if (prev === '') starts.push(k + 1); // 直前が空行 → スライド区切り
    }
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
  // プレビュー追従
  if (panel && panelDocUri === editor.document.uri.toString()) {
    panel.webview.postMessage({ type: 'scrollToSlide', index: idx });
  }
}

/** 相対ローカル画像参照を webview uri に書き換える */
function rewriteAssets(html, webview, docDir) {
  return html.replace(/(\bsrc\s*=\s*|\bxlink:href\s*=\s*|\bhref\s*=\s*)(["'])([^"']+)\2/g, (full, attr, q, val) => {
    if (/^(https?:|data:|#|\/\/)/.test(val)) return full;       // 外部 / data / アンカーは触らない
    if (/^[a-zA-Z]+:/.test(val)) return full;                   // スキーム付きは触らない
    const abs = path.resolve(docDir, val);
    try {
      const uri = webview.asWebviewUri(vscode.Uri.file(abs));
      return `${attr}${q}${uri.toString()}${q}`;
    } catch (_) { return full; }
  });
}

function buildHtml(webview, doc, initialIndex) {
  const docDir = path.dirname(doc.uri.fsPath);
  const repoRoot = vscode.workspace.getWorkspaceFolder(doc.uri)?.uri.fsPath || docDir;
  const marp = new Marp({ html: true });
  // プロジェクトのテーマを読み込む（academic / ponchie）
  for (const rel of ['theme/academic.css', 'theme/ponchie.css']) {
    try { marp.themeSet.add(fs.readFileSync(path.join(repoRoot, rel), 'utf8')); } catch (_) { /* 任意 */ }
  }
  let html, css;
  try { ({ html, css } = marp.render(doc.getText())); }
  catch (e) { return `<body style="font-family:sans-serif;padding:20px;color:#b00">レンダリングエラー: ${String(e.message || e)}</body>`; }
  html = rewriteAssets(html, webview, docDir);

  const cspSource = webview.cspSource;
  return /* html */ `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy"
  content="default-src 'none'; img-src ${cspSource} https: data:; style-src ${cspSource} 'unsafe-inline'; script-src 'unsafe-inline'; font-src ${cspSource} https: data:;">
<style>
  html,body { margin:0; padding:0; background:#4a4a4f; }
  #wrap { padding:16px 16px 60vh; }
  div.marpit > svg[data-marpit-svg] {
    display:block; width:100%; height:auto; max-width:1120px;
    margin:0 auto 14px; box-shadow:0 1px 8px rgba(0,0,0,.45);
    cursor:pointer; scroll-margin-top:12px; border:3px solid transparent;
  }
  div.marpit > svg.current-slide { border-color:#4aa3ff; }
  .badge { position:fixed; top:8px; right:14px; z-index:9;
    background:#222a; color:#fff; font:600 12px/1.4 sans-serif;
    padding:3px 9px; border-radius:9px; pointer-events:none; }
</style>
<style>${css}</style>
</head>
<body>
<div class="badge" id="badge"></div>
<div id="wrap">${html}</div>
<script>
  const vscode = acquireVsCodeApi();
  const initial = ${Number.isInteger(initialIndex) ? initialIndex : 0};
  function slides(){ return Array.from(document.querySelectorAll('div.marpit > svg[data-marpit-svg]')); }
  const badge = document.getElementById('badge');
  function highlight(i){
    const ss = slides();
    ss.forEach((s,idx)=>s.classList.toggle('current-slide', idx===i));
    if (badge) badge.textContent = 'Slide ' + (i+1) + '/' + ss.length;
  }
  function scrollTo(i){
    const s = slides()[i];
    if (s){ s.scrollIntoView({behavior:'smooth', block:'start'}); highlight(i); }
  }
  // クリック逆引き: ポインタ直下のテキストノードを精密に取り、その文字列で原稿を照合させる。
  // 文字が拾えない余白クリックはスライド先頭へのジャンプにフォールバック。
  function textUnderPointer(ev){
    let r = null;
    if (document.caretRangeFromPoint) r = document.caretRangeFromPoint(ev.clientX, ev.clientY);
    else if (document.caretPositionFromPoint){ const p = document.caretPositionFromPoint(ev.clientX, ev.clientY); if(p) r = {startContainer:p.offsetNode}; }
    let node = r && r.startContainer;
    if (node && node.nodeType === 3) return node.textContent || '';     // テキストノード = 一行ぶんの連続テキスト
    const el = (ev.target && ev.target.closest) ? ev.target : null;
    return el && el.textContent ? el.textContent : '';
  }
  document.addEventListener('click', (ev)=>{
    const svg = ev.target && ev.target.closest ? ev.target.closest('svg[data-marpit-svg]') : null;
    if (!svg) return;
    const i = slides().indexOf(svg);
    if (i < 0) return;
    const text = (textUnderPointer(ev) || '').replace(/\s+/g,' ').trim();
    vscode.postMessage(text ? {type:'revealText', index:i, text} : {type:'revealSlide', index:i});
  });
  window.addEventListener('message', e=>{
    const m = e.data || {};
    if (m.type === 'scrollToSlide') scrollTo(m.index);
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

function openPreview(context) {
  const editor = vscode.window.activeTextEditor;
  if (!editor || !isMarpDoc(editor.document)) {
    vscode.window.showInformationMessage('Marp (marp: true) の markdown を開いてから実行してください。');
    return;
  }
  const doc = editor.document;
  slideStarts = slideStartLines(doc.getText());
  const idx = slideIndexForLine(slideStarts, editor.selection.active.line);

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
      const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri)
        || vscode.window.activeTextEditor;
      if (!ed) return;

      if (m.type === 'revealText' && typeof m.text === 'string' && slideStarts[m.index] !== undefined) {
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
        vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: false });
        return;
      }

      if (m.type === 'revealSlide' && slideStarts[m.index] !== undefined) {
        const ln = slideStarts[m.index];
        const pos = new vscode.Position(ln, 0);
        ed.selection = new vscode.Selection(pos, pos);
        ed.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.AtTop);
        vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: false });
      }
    }, null, context.subscriptions);
  }
  panelDocUri = doc.uri.toString();
  renderInto(panel, doc, idx);
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

function scheduleReRender() {
  if (!panel || !panelDocUri) return;
  const doc = vscode.workspace.textDocuments.find(d => d.uri.toString() === panelDocUri);
  if (!doc) return;
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => {
    slideStarts = slideStartLines(doc.getText());
    const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri);
    const idx = ed ? slideIndexForLine(slideStarts, ed.selection.active.line) : 0;
    renderInto(panel, doc, idx);
  }, 700);
}

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

  const themeArgs = ['theme/academic.css', 'theme/ponchie.css']
    .map(r => path.join(repoRoot, r))
    .filter(p => fs.existsSync(p))
    .map(p => `--theme-set ${JSON.stringify(p)}`)
    .join(' ');

  // GUI 起動の VS Code は PATH に Homebrew が無いことがあるので補う
  const npx = fs.existsSync('/opt/homebrew/bin/npx') ? '/opt/homebrew/bin/npx'
            : fs.existsSync('/usr/local/bin/npx') ? '/usr/local/bin/npx' : 'npx';
  const env = { ...process.env, PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH || ''}` };
  // --yes: 初回の「Ok to proceed?」プロンプトで固まらないよう自動承認
  const cmd = `${npx} --yes @marp-team/marp-cli@latest ${JSON.stringify(mdPath)} ${themeArgs} --html --allow-local-files -o ${JSON.stringify(outHtml)}`;

  await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: 'Marp: プレゼン用HTMLを生成中…', cancellable: false },
    () => new Promise((resolve) => {
      cp.exec(cmd, { cwd: repoRoot, env, maxBuffer: 1 << 24 }, (err, _stdout, stderr) => {
        if (err) {
          const msg = String(stderr || err.message).split('\n').find(Boolean) || 'unknown error';
          vscode.window.showErrorMessage('Marp 生成に失敗: ' + msg);
          resolve();
          return;
        }
        // bespoke テンプレートは URL の #<ページ番号> で開始位置を指定できる
        const uri = vscode.Uri.file(outHtml).with({ fragment: String(page) });
        vscode.env.openExternal(uri);
        resolve();
      });
    })
  );
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
    vscode.window.onDidChangeTextEditorSelection(e => updateStatus(e.textEditor)),
    vscode.window.onDidChangeActiveTextEditor(ed => updateStatus(ed)),
    vscode.workspace.onDidChangeTextDocument(e => {
      if (panelDocUri && e.document.uri.toString() === panelDocUri) scheduleReRender();
    })
  );
  updateStatus(vscode.window.activeTextEditor);
}

function deactivate() {}

module.exports = { activate, deactivate };
