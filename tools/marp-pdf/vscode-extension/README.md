# Marp ChibaU PDF（ローカル VS Code 拡張）

開いている Marp `.md` を、エディタ右上ツールバーの **📄 ボタン**1つでベクターPDF化する最小拡張。
実体は [`../build-pdf.sh`](../build-pdf.sh)（全スライドを1HTMLに描画 → ページ範囲ごとに分割印刷 →
`pdfunite` で結合）。Chrome の `printToPDF` を一括で呼ばないので "Printing failed" で落ちない。

- マーケット非経由・依存パッケージゼロ・全コードは `extension.js` に見えている。
- ボタンは `marp-ChibaU` 配下の Markdown を開いたときだけ表示（`package.json` の `when` 句）。
- チャンク数は VS Code 設定 `marpChibau.chunkSize`（0=スクリプト既定20、落ちるなら12 など）。

## 使い方

1. デックの `.md` を開く
2. エディタ右上の **📄**（file-pdf アイコン）をクリック
3. 「書き出し中…」→「完了 🎉」通知。`PDFを開く`／`フォルダで表示` ボタン付き。

## インストール / 再インストール

VS Code はこのフォルダへのシンボリックリンクを `~/.vscode/extensions` から読み込む。

```bash
ln -sfn /Users/shoh/marp-ChibaU/tools/marp-pdf/vscode-extension \
        ~/.vscode/extensions/marp-chibau-pdf
# その後 VS Code を ⌘Q で完全終了 → 再起動（Reload Window でも可）
```

## アンインストール

```bash
rm ~/.vscode/extensions/marp-chibau-pdf
# VS Code 再起動
```
