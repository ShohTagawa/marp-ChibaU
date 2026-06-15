# Marp ChibaU（ローカル VS Code 拡張）

開いている Marp `.md` を、エディタ右上ツールバーの **2つのボタン**で操作する最小拡張。
マーケット非経由・依存パッケージゼロ・全コードは `extension.js` に見えている。
ボタンは `marp-ChibaU` 配下の Markdown を開いたときだけ表示（`package.json` の `when` 句）。

| ボタン | コマンド | 実体 | 内容 |
|---|---|---|---|
| **▶**（再生） | `marpChibau.present` | [`../../marp-present/present.sh`](../../marp-present/present.sh) | bespoke HTML を描画して Chrome で開く。発表中 **F**=全画面 / **P**=発表者ビュー / **←→**=ページ送り / **O**=一覧。 |
| **📄**（PDF） | `marpChibau.exportPdf` | [`../build-pdf.sh`](../build-pdf.sh) | 全スライドを分割印刷してベクターPDF化。Chrome の `printToPDF` を一括で呼ばないので "Printing failed" で落ちない。 |

- PDFのチャンク数は VS Code 設定 `marpChibau.chunkSize`（0=スクリプト既定20、落ちるなら12 など）。

## 使い方

1. デックの `.md` を開く
2. エディタ右上の **▶**（プレゼン）または **📄**（PDF）をクリック
3. プレゼン → Chrome が開く（**F** で全画面）。PDF → 「完了 🎉」通知（`PDFを開く`／`フォルダで表示` 付き）。

## インストール / 再インストール

VS Code はこのフォルダへのシンボリックリンクを `~/.vscode/extensions` から読み込む。

```bash
ln -sfn "$HOME/marp-ChibaU/tools/marp-pdf/vscode-extension" \
        "$HOME/.vscode/extensions/marp-chibau-pdf"
# その後 VS Code を再読込：⌘⇧P →「Developer: Reload Window」、または ⌘Q で完全終了→再起動
```

> ⚠️ 旧版の README は `/Users/shoh/...` という固定パスを書いていたため、ユーザー名が変わると
> リンクが切れて両ボタンが消えた。**必ず上記の `$HOME` 版**を使うこと。

## アンインストール

```bash
rm "$HOME/.vscode/extensions/marp-chibau-pdf"
# VS Code 再読込
```
