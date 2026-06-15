#!/usr/bin/env bash
# Marp スライドを「そのまま発表」するスクリプト。
# bespoke テンプレートのHTMLを描画して Chrome で開くだけ。発表中のキー操作:
#   F = 全画面 /  P = 発表者ビュー(ノート・タイマー・次スライド) /  ←→ = ページ送り /  O = 一覧
#
# 使い方:
#   tools/marp-present/present.sh [slides/<deck>/<deck>.md]
#   （引数なしなら最後に編集したデックを自動選択）
# 環境変数:
#   CHROME_PATH  Chrome の実行パス（未指定なら /Applications/Google Chrome.app を試す）
set -euo pipefail

# リポジトリルート(このスクリプトの2つ上)を基準にする
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

MD="${1:-}"
# 引数なし(npm run present / NPMスクリプトの▶等)のときは、最後に編集したデックを自動選択。
if [ -z "$MD" ]; then
  MD="$(find "$ROOT/slides" -mindepth 1 -maxdepth 2 -name '*.md' ! -name '_*' -print0 2>/dev/null \
        | xargs -0 stat -f '%m %N' 2>/dev/null | sort -rn | head -1 | cut -d' ' -f2-)"
  [ -n "$MD" ] || { echo "デックの .md が見つかりません。引数で指定してください: present.sh <deck.md>" >&2; exit 1; }
  echo "（引数なし）最後に編集したデックを自動選択: ${MD#"$ROOT"/}"
fi
[ -f "$MD" ] || { echo "not found: $MD" >&2; exit 1; }

MD_ABS="$(cd "$(dirname "$MD")" && pwd)/$(basename "$MD")"
DECK_DIR="$(dirname "$MD_ABS")"
DECK_NAME="$(basename "${MD_ABS%.md}")"

: "${CHROME_PATH:=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
[ -x "$CHROME_PATH" ] || { echo "Chrome not found: $CHROME_PATH (set CHROME_PATH)" >&2; exit 1; }

# 画像の相対参照(../assets/… や ./src/…)を壊さないため、HTMLは md と同じ階層に置く。
# (marp は HTML 出力時に相対パスをそのまま残すので、out/ など別階層に出すと画像が消える。
#  build-pdf.sh が中間HTMLを同階層に置いているのと同じ理由。)
# 先頭ドット＋ *.html は .gitignore 済みなのでコミットされない。
HTML="$DECK_DIR/.marp-present.html"

echo "[1/2] marp: 発表用HTML(bespoke)を描画  → $DECK_NAME"
# --no-stdin が最重要：これが無いと、非対話的な実行（VS Codeのタスク/ターミナル/バックグラウンド）で
#   marp がファイル引数を渡しても標準入力を待ち続けて数分固まる
#   （"Currently waiting data from stdin stream…" で停止）。これがハングの主因。
# --allow-local-files は付けない：HTML出力には不要で、marp の Puppeteer 経路を起こす。
#   画像は Chrome 側の --allow-file-access-from-files（下の起動オプション）で file:// から読める。
npx --yes @marp-team/marp-cli@latest "$MD_ABS" --no-stdin \
  --theme-set "$ROOT/theme/academic.css" "$ROOT/theme/ponchie.css" \
  --html -o "$HTML" </dev/null >/dev/null

echo "[2/2] Chrome で開く  (F=全画面 / P=発表者ビュー / ←→=ページ送り / O=一覧)"
# nohup + & : Chrome が未起動でもスクリプトをブロックしないように切り離す。
# --allow-file-access-from-files は cold start 時のみ効き、file:// から ../assets/ の画像も確実に読める。
nohup "$CHROME_PATH" --new-window --allow-file-access-from-files "file://$HTML" >/dev/null 2>&1 &
echo "=> $HTML"
