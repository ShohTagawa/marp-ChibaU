#!/usr/bin/env python3
"""matplotlib（日本語対応）で tsutawaru 風のグラフを描き、Marp 用インラインSVGを出力する。

ECharts を使わない場合の代替。日本語フォントは matplotlib-fontja（japanize-matplotlib の
後継）が面倒を見る。文字は既定でパス（アウトライン）化されるので
（svg.fonttype='path'）、閲覧環境にフォントが無くても崩れない。

    pip install matplotlib matplotlib-fontja
    # Python 3.11 以前なら従来の japanize-matplotlib でも可
    # （3.12以降は distutils 削除のため japanize-matplotlib は動かない）

使い方:
    python3 tools/matplotlib-chart/example.py slides/<deck>/src/fig01-example.svg

出力SVGは 1行化・width/height除去（viewBoxのみ）済みで、そのままスライドに
インラインで貼れる（<img src="*.svg"> は Marp の PDF/PNG 化で空白になるので不可）。
"""
import re
import sys

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

try:  # 日本語フォント登録（どちらかが入っていればよい）
    import matplotlib_fontja  # noqa: F401
except ImportError:
    try:
        import japanize_matplotlib  # noqa: F401  (Python 3.11 以前のみ動く)
    except ImportError:
        sys.exit("pip install matplotlib-fontja してください（日本語フォント登録）")

# ── tsutawaru の配色（theme/tsutawaru-academic.css と同じ値）────────────
INK = "#262626"      # 文字の基本色（黒ではない）
SUB = "#5F5F5F"      # 重要度の低い文字
ACCENT = "#A6192E"   # メインの色（えんじ＝原色を避ける）
GRID = "#E4E4E4"     # 目盛線は薄く
MUTED = "#BDBDBD"    # 強調しない系列
MUTED_D = "#8A8A8A"

# ── サンプル: 横棒グラフ（強調は1本だけ、値は直接添える）────────────────
labels = ["ルール適用後 A", "ルール適用後 B", "ルール適用後 C", "ルール適用後 D", "全体の平均", "最も多いデック"]
values = [0.00, 0.08, 0.45, 1.11, 1.35, 3.41]
focus = 4  # 強調するのは1本だけ（p.140）。残りはグレー
colors = [ACCENT if i == focus else (MUTED_D if i % 2 else MUTED) for i in range(len(values))]

fig, ax = plt.subplots(figsize=(7.6, 4.0), dpi=100)
bars = ax.barh(range(len(values)), values, color=colors, height=0.58)
ax.set_yticks(range(len(values)), labels, fontsize=12, color=INK)
ax.invert_yaxis()

# 軸線は左だけ黒、目盛線は薄い縦罫だけ。影・立体感・枠は付けない（p.132/p.134/p.104）
for side in ("top", "right", "bottom"):
    ax.spines[side].set_visible(False)
ax.spines["left"].set_color(INK)
ax.spines["left"].set_linewidth(1.5)
ax.tick_params(length=0, colors=SUB, labelsize=11)
ax.set_xlim(0, 4)
ax.set_xticks([0, 1, 2, 3, 4])  # 目盛は粗く、区切りは丸い数字に（p.208）
ax.xaxis.grid(True, color=GRID, linewidth=1)
ax.set_axisbelow(True)

# 凡例を使わず値を直接添える（p.198 色のみに頼らない）
for bar, v in zip(bars, values):
    ax.text(v + 0.06, bar.get_y() + bar.get_height() / 2, f"{v:.2f}".rstrip("0").rstrip("."),
            va="center", fontsize=12, fontweight="bold", color=INK)

fig.tight_layout()

# ── Marp インライン用に整形して保存 ─────────────────────────────────────
out = sys.argv[1] if len(sys.argv) > 1 else "example.svg"
import io

buf = io.StringIO()
fig.savefig(buf, format="svg", bbox_inches="tight", transparent=True)
svg = buf.getvalue()
svg = svg[svg.index("<svg"):]                                   # XML宣言・DOCTYPEを除去
svg = re.sub(r'<svg([^>]*?)\swidth="[^"]*"\sheight="[^"]*"', r"<svg\1", svg, count=1)
svg = re.sub(r"\n\s*", "", svg)                                  # 空行があるとMarpが壊れるため1行化
with open(out, "w", encoding="utf-8") as f:
    f.write(svg)
print(f"✓ {out}  ({len(svg):,} bytes) — スライドにインラインで貼ってください")
