#!/usr/bin/env bash
# 互換ラッパー：実体は同じフォルダの present.mjs（Node・mac/Windows/Linux 共通）。
# 旧来どおり `tools/marp-present/present.sh [slides/<deck>/<deck>.md]` で呼べる。
set -euo pipefail
exec node "$(dirname "${BASH_SOURCE[0]}")/present.mjs" "$@"
