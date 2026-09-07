# Marp ChibaU（ローカル VS Code 拡張）— mac / Windows 共通

開いている Marp `.md` を、エディタ右上ツールバー／ステータスバー右下の **2つのボタン**で操作する最小拡張。
マーケット非経由・依存パッケージゼロ・全コードは `extension.js` に見えている。
ボタンは `marp-ChibaU` 配下の Markdown を開いたときだけ表示（`package.json` の `when` 句）。

| ボタン | コマンド | 実体 | 内容 |
|---|---|---|---|
| **▶**（再生） | `marpChibau.present` | [`../../marp-present/present.mjs`](../../marp-present/present.mjs) | bespoke HTML を描画して Chrome で開く。発表中 **F**=全画面 / **P**=発表者ビュー / **←→**=ページ送り / **O**=一覧。 |
| **📄**（PDF） | `marpChibau.exportPdf` | [`../build-pdf.mjs`](../build-pdf.mjs) | 全スライドを分割印刷してベクターPDF化し pdf-lib で結合。Chrome の `printToPDF` を一括で呼ばないので "Printing failed" で落ちない。 |

実体はどちらも **Node スクリプト**（bash 不要）。拡張は `node <script> <md>` を spawn するだけ。
Chrome の場所は OS ごとに自動検出（mac: `/Applications/Google Chrome.app`、Windows: `Program Files` の Chrome / Edge）。

設定（VS Code の設定画面で `marpChibau` を検索）：

| 設定 | 既定 | 意味 |
|---|---|---|
| `marpChibau.chunkSize` | 0（=20） | PDF 1チャンクのページ数。落ちるなら 12 など小さく |
| `marpChibau.chromePath` | 空（自動） | Chrome/Edge 実行ファイルを固定したいとき |
| `marpChibau.nodePath` | 空（PATH） | nvm 等で `node` が見つからないときだけ |

## 使い方

1. デックの `.md` を開く
2. 右上の **▶**（プレゼン）または **📄**（PDF）、あるいはステータスバー右下の「▶ プレゼン」「📄 PDF」をクリック
3. プレゼン → Chrome が開く（**F** で全画面）。PDF → 「完了 🎉」通知（`PDFを開く`／`フォルダで表示` 付き）

## インストール / 再インストール（mac も Windows も同じ）

リポジトリのルートで：

```bash
npm run setup
```

これが `~/.vscode/extensions/marp-chibau-pdf` にこのフォルダへのリンクを作る
（mac/Linux はシンボリックリンク、Windows は**ジャンクション**＝管理者権限・開発者モード不要）。
同時に `npm install`（marp-cli / pdf-lib）と、同期プレビュー拡張 `marp-scroll-sync` のリンクも行う。
その後 VS Code を再読込：コマンドパレット →「Developer: Reload Window」。

状態確認だけなら `npm run setup:check`。

> ⚠️ 旧版の README は `ln -sfn` にユーザー名込みの固定パス（`/Users/shoh/...`）を書いていたため、
> ユーザー名が変わるとリンクが切れて両ボタンが消えた。手で貼るときも必ず `$HOME` 基準で。
> Windows で手で貼る場合は PowerShell で
> `New-Item -ItemType Junction -Path "$HOME\.vscode\extensions\marp-chibau-pdf" -Target "<repo>\tools\marp-pdf\vscode-extension"`。

## アンインストール

```bash
# mac / Linux
rm "$HOME/.vscode/extensions/marp-chibau-pdf"
# Windows (PowerShell)  ※ジャンクションの削除。中身は消えない
Remove-Item "$HOME\.vscode\extensions\marp-chibau-pdf"
```

その後 VS Code を再読込。
