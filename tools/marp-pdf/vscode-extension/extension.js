// Marp ChibaU PDF — エディタ右上ツールバーに「📄 PDF出力」ボタンを足すだけの最小ローカル拡張。
// 実体は tools/marp-pdf/build-pdf.sh（全スライドを1HTMLに描画 → ページ範囲ごとに分割印刷
// → pdfunite で結合）。Chrome の printToPDF を一括で呼ばないので落ちず、ベクター品質を維持する。
// 依存パッケージなし・マーケット非経由・全コードここに見えている。
const vscode = require('vscode');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');

// GUI(Dock/Finder)から起動した VS Code の拡張ホストは ~/.zshrc を読まず PATH が最小になり、
// npx / node / pdfunite / python3 を見失うことがある。既知の場所を明示的に足して回避。
function buildPath(existing) {
  const extra = ['/opt/homebrew/bin', '/usr/local/bin', '/usr/bin', '/bin', '/usr/sbin', '/sbin'];
  const cur = (existing || '').split(':').filter(Boolean);
  const seen = new Set();
  return [...extra, ...cur].filter((p) => (seen.has(p) ? false : (seen.add(p), true))).join(':');
}

const TIMEOUT_MS = 5 * 60 * 1000;

function activate(context) {
  const out = vscode.window.createOutputChannel('Marp PDF');

  const cmd = vscode.commands.registerCommand('marpChibau.exportPdf', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== 'markdown') {
      vscode.window.showErrorMessage('Marp PDF: Markdown(.md) を開いた状態で実行してください。');
      return;
    }
    const doc = editor.document;
    if (doc.isDirty) { await doc.save(); }      // 最新内容で書き出す
    const mdPath = doc.uri.fsPath;

    const folder = vscode.workspace.getWorkspaceFolder(doc.uri);
    if (!folder) {
      vscode.window.showErrorMessage('Marp PDF: このファイルはワークスペース内にありません。フォルダを開いて実行してください。');
      return;
    }
    const root = folder.uri.fsPath;
    const script = path.join(root, 'tools', 'marp-pdf', 'build-pdf.sh');
    if (!fs.existsSync(script)) {
      vscode.window.showErrorMessage('Marp PDF: tools/marp-pdf/build-pdf.sh が見つかりません（' + root + '）。');
      return;
    }

    const chunk = vscode.workspace.getConfiguration('marpChibau').get('chunkSize', 0);
    const env = Object.assign({}, process.env);
    env.PATH = buildPath(env.PATH);
    if (!env.CHROME_PATH) {
      env.CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    }
    if (chunk && chunk > 0) { env.CHUNK = String(chunk); }

    out.clear();
    out.show(true); // 進捗が見えるよう出力パネルを前面に
    out.appendLine('=== Marp PDF build (v2) ===');
    out.appendLine('script : ' + script);
    out.appendLine('md     : ' + mdPath);
    out.appendLine('PATH   : ' + env.PATH);
    out.appendLine('---');

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: 'Marp: ベクターPDFを書き出し中…', cancellable: true },
      (progress, token) => new Promise((resolve) => {
        // stdin は 'ignore'：何かが入力待ちになっても EOF を受けて固まらない。
        const child = cp.spawn('bash', [script, mdPath], {
          cwd: root,
          env,
          stdio: ['ignore', 'pipe', 'pipe'],
        });

        let lastPdf = null;
        let done = false;
        const finish = (fn) => { if (!done) { done = true; clearTimeout(timer); fn(); } };

        const onData = (buf) => {
          const s = buf.toString();
          out.append(s);
          const m = s.match(/=>\s*(.+\.pdf)\s*$/m);
          if (m) { lastPdf = m[1].trim(); }
          const step = s.match(/\[(\d)\/4\]/);
          if (step) { progress.report({ message: 'ステップ ' + step[1] + '/4' }); }
        };
        child.stdout.on('data', onData);
        child.stderr.on('data', onData);

        const timer = setTimeout(() => {
          out.appendLine('\n[TIMEOUT] 5分を超えたため中断します。');
          try { child.kill('SIGKILL'); } catch (e) {}
        }, TIMEOUT_MS);

        token.onCancellationRequested(() => {
          out.appendLine('\n[CANCELLED] ユーザー操作で中断。');
          try { child.kill('SIGKILL'); } catch (e) {}
        });

        child.on('error', (e) => {
          finish(() => {
            out.appendLine('\n[SPAWN ERROR] ' + (e && e.message ? e.message : e));
            out.show(true);
            vscode.window.showErrorMessage('Marp PDF: 起動に失敗（' + (e && e.message) + '）。出力パネルを確認してください。');
            resolve();
          });
        });

        child.on('close', (code, signal) => {
          finish(() => {
            out.appendLine('\n=== DONE (exit=' + code + (signal ? ', signal=' + signal : '') + ') ===');
            if (code === 0) {
              const OPEN = 'PDFを開く';
              const REVEAL = 'フォルダで表示';
              vscode.window.showInformationMessage('Marp PDF: 書き出し完了 🎉', OPEN, REVEAL).then((sel) => {
                if (!lastPdf) { return; }
                const uri = vscode.Uri.file(lastPdf);
                if (sel === OPEN) { vscode.env.openExternal(uri); }
                else if (sel === REVEAL) { vscode.commands.executeCommand('revealFileInOS', uri); }
              });
            } else {
              out.show(true);
              vscode.window.showErrorMessage(
                'Marp PDF: 失敗（exit=' + code + '）。出力パネル「Marp PDF」の最後の行を確認してください。'
              );
            }
            resolve();
          });
        });
      })
    );
  });

  context.subscriptions.push(cmd, out);
}

function deactivate() {}

module.exports = { activate, deactivate };
