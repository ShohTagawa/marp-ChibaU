// Marp Scroll Sync (ChibaU)
// - ステータスバーに「編集中のカーソル行が Marp の何枚目か」を表示
// - サイドの Webview プレビューをカーソル位置のスライドへ自動スクロール
// - スライドをクリックすると本文の該当行へジャンプ（双方向同期）
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { Marp } = require('@marp-team/marp-core');

let statusItem;
let panel = null;          // 現在のプレビュー WebviewPanel
let panelDocUri = null;    // プレビュー対象ドキュメントの uri.toString()
let slideStarts = [];      // プレビュー対象の各スライド開始行(0-based)
let renderTimer = null;

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

function updateStatus(editor) {
  if (!statusItem) return;
  if (!editor || !isMarpDoc(editor.document)) { statusItem.hide(); return; }
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
  slides().forEach((s,i)=>{ s.addEventListener('click', ()=>vscode.postMessage({type:'revealSlide', index:i})); });
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
      if (m && m.type === 'revealSlide') {
        const ed = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === panelDocUri)
          || vscode.window.activeTextEditor;
        if (ed && slideStarts[m.index] !== undefined) {
          const ln = slideStarts[m.index];
          const pos = new vscode.Position(ln, 0);
          ed.selection = new vscode.Selection(pos, pos);
          ed.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.AtTop);
          vscode.window.showTextDocument(ed.document, { viewColumn: ed.viewColumn, preserveFocus: false });
        }
      }
    }, null, context.subscriptions);
  }
  panelDocUri = doc.uri.toString();
  renderInto(panel, doc, idx);
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

  context.subscriptions.push(
    vscode.commands.registerCommand('marpScrollSync.openPreview', () => openPreview(context)),
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
