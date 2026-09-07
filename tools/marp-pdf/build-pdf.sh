#!/usr/bin/env bash
# 互換ラッパー：実体は同じフォルダの build-pdf.mjs（Node・mac/Windows/Linux 共通）。
# 旧来どおり `tools/marp-pdf/build-pdf.sh slides/<deck>/<deck>.md [out.pdf]` で呼べる。
# 環境変数 CHUNK / CHROME_PATH はそのまま .mjs に引き継がれる。
set -euo pipefail
exec node "$(dirname "${BASH_SOURCE[0]}")/build-pdf.mjs" "$@"
