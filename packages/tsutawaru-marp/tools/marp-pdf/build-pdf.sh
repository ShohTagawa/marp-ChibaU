#!/usr/bin/env bash
# marp のスライドを「落ちずに」ベクターPDF化するビルドスクリプト。
#
# 背景: スライド枚数が多い/インラインSVGが重いデックでは、Chrome の printToPDF が
#   "Failed converting Markdown. (Protocol error (Page.printToPDF): Printing failed)"
# で落ちる。原因は壊れたスライドではなく、1回の印刷で serialize するページの累積量が
# Chrome(Skia) の上限を超えること。個々のスライドは正常に描画できる。
#
# 解決: 全スライドを1つのHTMLに描画 → ページ範囲(既定20枚)ごとに分割印刷 → pdfunite で結合。
#   - 各印刷ジョブの serialize 量が小さくなるので落ちない
#   - page.pdf() なのでベクター品質を維持(PNGラスタ化しない)
#   - ページ番号は全体描画時に 1..N で焼かれ、範囲印刷でもその番号を保持 → 連番が崩れない
#
# 使い方:
#   tools/marp-pdf/build-pdf.sh slides/<deck>/<deck>.md [出力先.pdf]
# 環境変数:
#   CHUNK       1チャンクのページ数 (既定 20)
#   CHROME_PATH Chrome の実行パス (未指定なら /Applications/Google Chrome.app を試す)
set -euo pipefail

# リポジトリルート(このスクリプトの2つ上)を基準にする
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

MD="${1:-}"
# 引数なし(npm run pdf / NPMスクリプトの▶ボタン等)のときは、最後に編集したデックを自動選択。
# slides 直下〜デック直下(深さ1〜2)の *.md から、'_'始まり(一時ファイル)を除いて最新mtimeを選ぶ。
if [ -z "$MD" ]; then
  MD="$(find "$ROOT/slides" -mindepth 1 -maxdepth 2 -name '*.md' ! -name '_*' -print0 2>/dev/null \
        | xargs -0 stat -f '%m %N' 2>/dev/null | sort -rn | head -1 | cut -d' ' -f2-)"
  [ -n "$MD" ] || { echo "デックの .md が見つかりません。引数で指定してください: build-pdf.sh <deck.md>" >&2; exit 1; }
  echo "（引数なし）最後に編集したデックを自動選択: ${MD#"$ROOT"/}"
fi
[ -f "$MD" ] || { echo "not found: $MD" >&2; exit 1; }

MD_ABS="$(cd "$(dirname "$MD")" && pwd)/$(basename "$MD")"
DECK_DIR="$(dirname "$MD_ABS")"
DECK_NAME="$(basename "${MD_ABS%.md}")"
OUT="${2:-$DECK_DIR/out/$DECK_NAME.pdf}"
# theme/ 配下の全 .css を登録する。デックは frontmatter の theme: 名で1つを選ぶ。
# tsutawaru-academic.css は @import "academic" するため academic.css も同時に渡す必要がある。
THEMES=("$ROOT"/theme/*.css)
CHUNK="${CHUNK:-20}"

: "${CHROME_PATH:=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
export CHROME_PATH
[ -x "$CHROME_PATH" ] || { echo "Chrome not found: $CHROME_PATH (set CHROME_PATH)" >&2; exit 1; }
command -v pdfunite >/dev/null || { echo "pdfunite not found (brew install poppler)" >&2; exit 1; }

mkdir -p "$(dirname "$OUT")"
TMP="$(mktemp -d)"
# 中間HTMLは「元の .md と同じディレクトリ」に置く。
# marp は HTML 出力時に画像を ../assets/... など相対パスのまま残すため、
# 別ディレクトリ(例 /tmp)に置くと相対参照が壊れて画像が表示されなくなる。
HTML="$DECK_DIR/.marp-pdfbuild-$$.html"
trap 'rm -rf "$TMP"; rm -f "$HTML"' EXIT

echo "[1/4] marp: 全スライドを1つのHTMLに描画 (printToPDFを使わないので落ちない)"
# --no-stdin が必須：これが無いと VS Codeのタスク/ターミナル等の非対話実行で marp が
# 標準入力を待って固まる（"Currently waiting data from stdin stream…"）。PDFが「動かない」主因。
npx --yes @marp-team/marp-cli@latest "$MD_ABS" --no-stdin \
  --theme-set "${THEMES[@]}" --html --allow-local-files -o "$HTML" </dev/null >/dev/null

# スライド枚数を frontmatter 込みで数える(marpのページ数 == md内の --- 区切りブロック数)
N="$(python3 - "$MD_ABS" <<'PY'
import re, sys
t = open(sys.argv[1], encoding="utf-8").read()
m = re.match(r"^---\n.*?\n---\n", t, re.S)
body = t[m.end():] if m else t
print(len(re.split(r"\n---\n", body)))
PY
)"
echo "      スライド枚数: $N  / チャンク: $CHUNK 枚ずつ"

# puppeteer-core を npx キャッシュから探す(marpを実行済みなので存在するはず)
PUP_DIR="$(find "$HOME/.npm/_npx" -maxdepth 3 -type d -name puppeteer-core 2>/dev/null | head -1)"
[ -n "$PUP_DIR" ] || { echo "puppeteer-core が見つかりません" >&2; exit 1; }
PUPPETEER_BASE="$(dirname "$PUP_DIR")"
export PUPPETEER_BASE

echo "[2/4] ページ範囲ごとに分割印刷 (ベクター)"
JOBS=(); PARTS=(); i=1; idx=0
while [ "$i" -le "$N" ]; do
  end=$(( i + CHUNK - 1 )); [ "$end" -gt "$N" ] && end="$N"
  idx=$(( idx + 1 ))
  part="$TMP/part_$(printf '%03d' "$idx").pdf"
  JOBS+=("$i-$end" "$part"); PARTS+=("$part")
  i=$(( end + 1 ))
done
node "$ROOT/tools/marp-pdf/chunk-print.mjs" "$HTML" "${JOBS[@]}"

echo "[3/4] pdfunite で結合"
pdfunite "${PARTS[@]}" "$OUT"

echo "[4/4] 完了"
if command -v pdfinfo >/dev/null; then pdfinfo "$OUT" | grep -E 'Pages|Page size'; fi
echo "=> $OUT"
