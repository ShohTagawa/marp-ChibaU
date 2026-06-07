// Marp ChibaU PDF — エディタ右上ツールバーに「📄 PDF出力」ボタンを足すだけの最小ローカル拡張。
// 実体は tools/marp-pdf/build-pdf.sh（全スライドを1HTMLに描画 → ページ範囲ごとに分割印刷
// → pdfunite で結合）。Chrome の printToPDF を一括で呼ばないので落ちず、ベクター品質を維持する。
// 依存パッケージなし・マーケット非経由・全コードここに見えている。
const vscode = require('vscode');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');

function activate(context) {
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
    if (!env.CHROME_PATH) {
      env.CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    }
    if (chunk && chunk > 0) { env.CHUNK = String(chunk); }

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: 'Marp: ベクターPDFを書き出し中…', cancellable: false },
      () => new Promise((resolve) => {
        cp.execFile('bash', [script, mdPath], { cwd: root, env, maxBuffer: 64 * 1024 * 1024 },
          (err, stdout, stderr) => {
            if (err) {
              const out = vscode.window.createOutputChannel('Marp PDF');
              out.appendLine(String(stdout || ''));
              out.appendLine(String(stderr || ''));
              out.show(true);
              vscode.window.showErrorMessage(
                'Marp PDF: 書き出しに失敗しました。落ちる場合は設定 marpChibau.chunkSize を 12 などに下げて再実行してください。'
              );
              resolve();
              return;
            }
            const m = String(stdout || '').match(/=>\s*(.+\.pdf)\s*$/m);
            const pdf = m ? m[1].trim() : null;
            const OPEN = 'PDFを開く';
            const REVEAL = 'フォルダで表示';
            vscode.window.showInformationMessage('Marp PDF: 書き出し完了 🎉', OPEN, REVEAL).then((sel) => {
              if (!pdf) { return; }
              const uri = vscode.Uri.file(pdf);
              if (sel === OPEN) { vscode.env.openExternal(uri); }
              else if (sel === REVEAL) { vscode.commands.executeCommand('revealFileInOS', uri); }
            });
            resolve();
          });
      })
    );
  });
  context.subscriptions.push(cmd);
}

function deactivate() {}

module.exports = { activate, deactivate };
