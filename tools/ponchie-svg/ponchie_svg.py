"""ponchie_svg — Marpポンチ絵用の小さなSVG DSL。

生SVGの代わりにPythonで部品を並べ、Marp用 .md を再生成する。
全部品が9点アンカー（イラレの基準点と同じ）に対応：

    nw  n  ne
    w   c  e      例: anchor="e" → (x,y) がその部品の右端・上下中央になる
    sw  s  se

テキストは text-anchor / dominant-baseline、矩形系は座標オフセットで実現。
使い方はスライド側の .py（例: slides/*/20260611_Ponchie_LayerArchitecture.py）と
.claude/skills/marp-ponchie/references/python-dsl.md を参照。
"""
from pathlib import Path

WIDTH, HEIGHT = 1280, 720

_ANCHOR = {
    "nw": (0, 0), "n": (0.5, 0), "ne": (1, 0),
    "w": (0, 0.5), "c": (0.5, 0.5), "e": (1, 0.5),
    "sw": (0, 1), "s": (0.5, 1), "se": (1, 1),
}
_TEXT_ANCHOR = {0: None, 0.5: "middle", 1: "end"}  # start は省略
_BASELINE = {0: "text-before-edge", 0.5: "central", 1: "text-after-edge"}

# svg-library.md と同じ標準defs（グラデ・影・矢印マーカー）
DEFS = (
    '<linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>'
    '<linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1A7A5E"/><stop offset="1" stop-color="#125642"/></linearGradient>'
    '<linearGradient id="gOut" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3F72B5"/><stop offset="1" stop-color="#284F84"/></linearGradient>'
    '<radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.12"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>'
    '<filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#125642" flood-opacity="0.18"/></filter>'
    '<filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#125642" flood-opacity="0.12"/></filter>'
    '<marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>'
)

# アイコングリフ集（中心(0,0)・半径r≈10想定、{c}=ストローク色）
ICONS = {
    "apps": '<g stroke="{c}" stroke-width="2" fill="none"><rect x="-8" y="-8" width="6.5" height="6.5" rx="1.5"/><rect x="1.5" y="-8" width="6.5" height="6.5" rx="1.5"/><rect x="-8" y="1.5" width="6.5" height="6.5" rx="1.5"/><rect x="1.5" y="1.5" width="6.5" height="6.5" rx="1.5"/></g>',
    "chart": '<g stroke="{c}" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M-10 8 H10"/><rect x="-8.5" y="1" width="4.5" height="7"/><rect x="-1.7" y="-3" width="4.5" height="11"/><rect x="5" y="-8" width="4.5" height="16"/></g>',
    "ai": '<g stroke="{c}" stroke-width="2" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-11 M-7 3 H-11 M7 -3 H11 M7 3 H11 M-3 -7 V-11 M3 -7 V-11 M-3 7 V11 M3 7 V11"/></g>',
    "db": '<g stroke="{c}" stroke-width="2.2" fill="none"><ellipse cx="0" cy="-7" rx="10" ry="3.5"/><path d="M-10 -7 V7"/><path d="M10 -7 V7"/><path d="M-10 0 A10 3.5 0 0 0 10 0"/><path d="M-10 7 A10 3.5 0 0 0 10 7"/></g>',
    "cloud": '<path d="M-9 5 A4.5 4.5 0 0 1 -8 -4 A6.5 6.5 0 0 1 5 -6 A5 5 0 0 1 9 5 Z" stroke="{c}" stroke-width="2.2" fill="none" stroke-linejoin="round"/>',
    "network": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="-6" cy="5" r="2.5"/><circle cx="6" cy="5" r="2.5"/><circle cx="0" cy="-6" r="2.5"/><path d="M-4.5 3 L-1.5 -4 M4.5 3 L1.5 -4 M-3.5 5 H3.5"/></g>',
    "shield": '<path d="M0 -9 L7 -6 V0 C7 5 4 8 0 10 C-4 8 -7 5 -7 0 V-6 Z" stroke="{c}" stroke-width="2" fill="none" stroke-linejoin="round"/>',
    "people": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>',
    "person": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>',
    "book": '<g stroke="{c}" stroke-width="2" fill="none"><path d="M-8 -7 L0 -5 L0 8 L-8 6 Z"/><path d="M8 -7 L0 -5 L0 8 L8 6 Z"/></g>',
    "target": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>',
    "building": '<g stroke="{c}" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>',
    "gear": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>',
    "bulb": '<g stroke="{c}" stroke-width="2" fill="none"><circle cx="0" cy="-2" r="6"/><path d="M-3 6 H3 M-2 9 H2"/></g>',
    "link": '<g stroke="{c}" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>',
}

FRONTMATTER = """---
marp: true
theme: ponchie
paginate: false
size: 16:9
header: ''
footer: ''
html: true
---

<!-- _class: onepager -->
"""


def _f(v):
    """数値を最短表記に（43.0→'43', 11.5→'11.5'）。"""
    return f"{v:g}"


def _esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def est_w(text, size):
    """テキストのおおよその描画幅(px)。CJK=1em、英数≈0.55em の概算。"""
    w = 0.0
    for ch in text:
        if ord(ch) > 0x2E7F:  # CJK・全角
            w += 1.0
        elif ch.isupper():
            w += 0.7
        else:
            w += 0.55
    return w * size


def _topleft(x, y, w, h, anchor):
    ax, ay = _ANCHOR[anchor]
    return x - ax * w, y - ay * h


class SVG:
    def __init__(self, width=WIDTH, height=HEIGHT, defs=DEFS):
        self.width, self.height = width, height
        self.defs = defs
        self.parts = []

    # ── 低レベル ──────────────────────────────
    def raw(self, line):
        """生SVGの逃げ道。1要素=1行で渡す（空行禁止）。"""
        self.parts.append(line)

    def comment(self, s):
        self.parts.append(f"<!-- {s} -->")

    # ── 基本部品（9点アンカー対応） ──────────────
    def rect(self, x, y, w, h, anchor="nw", rx=0, fill="#fff",
             stroke=None, stroke_width=1, shadow=None, opacity=None):
        """矩形。anchorで(x,y)の基準点を指定。bbox (x0,y0,w,h) を返す。"""
        x0, y0 = _topleft(x, y, w, h, anchor)
        a = [f'x="{_f(x0)}"', f'y="{_f(y0)}"', f'width="{_f(w)}"', f'height="{_f(h)}"']
        if rx:
            a.append(f'rx="{_f(rx)}"')
        a.append(f'fill="{fill}"')
        if stroke:
            a += [f'stroke="{stroke}"', f'stroke-width="{_f(stroke_width)}"']
        if opacity is not None:
            a.append(f'opacity="{_f(opacity)}"')
        if shadow:
            a.append(f'filter="url(#{shadow})"')
        self.parts.append(f'<rect {" ".join(a)}/>')
        return x0, y0, w, h

    def text(self, s, x, y, size=13, fill="#374151", weight=None,
             anchor="w", lh=1.4, baseline=False, opacity=None):
        """テキスト。anchor="w" なら(x,y)が左端・上下中央。
        "\\n" 区切りで複数行（行間 lh×size、ブロック全体をanchor基準で配置）。
        baseline=True なら生SVGと同じく y をベースラインとして使う。"""
        ax, ay = _ANCHOR[anchor]
        common = [f'font-size="{_f(size)}"']
        if weight:
            common.append(f'font-weight="{weight}"')
        common.append(f'fill="{fill}"')
        if _TEXT_ANCHOR[ax]:
            common.append(f'text-anchor="{_TEXT_ANCHOR[ax]}"')
        if not baseline:
            common.append(f'dominant-baseline="{_BASELINE[ay]}"')
        if opacity is not None:
            common.append(f'opacity="{_f(opacity)}"')
        lines = s.split("\n")
        step = size * lh
        y0 = y if baseline else y - ay * step * (len(lines) - 1)
        for i, ln in enumerate(lines):
            a = [f'x="{_f(x)}"', f'y="{_f(y0 + i * step)}"'] + common
            self.parts.append(f'<text {" ".join(a)}>{_esc(ln)}</text>')

    def circle(self, cx, cy, r, fill, stroke=None, stroke_width=1, shadow=None):
        a = [f'cx="{_f(cx)}"', f'cy="{_f(cy)}"', f'r="{_f(r)}"', f'fill="{fill}"']
        if stroke:
            a += [f'stroke="{stroke}"', f'stroke-width="{_f(stroke_width)}"']
        if shadow:
            a.append(f'filter="url(#{shadow})"')
        self.parts.append(f'<circle {" ".join(a)}/>')

    def path(self, d, fill="none", stroke=None, stroke_width=None,
             shadow=None, marker_end=None, extra=""):
        a = [f'd="{d}"', f'fill="{fill}"']
        if stroke:
            a.append(f'stroke="{stroke}"')
        if stroke_width:
            a.append(f'stroke-width="{_f(stroke_width)}"')
        if marker_end:
            a.append(f'marker-end="url(#{marker_end})"')
        if shadow:
            a.append(f'filter="url(#{shadow})"')
        if extra:
            a.append(extra)
        self.parts.append(f'<path {" ".join(a)}/>')

    def image(self, href, x, y, w, h, anchor="nw"):
        x0, y0 = _topleft(x, y, w, h, anchor)
        self.parts.append(
            f'<image href="{href}" x="{_f(x0)}" y="{_f(y0)}" width="{_f(w)}" height="{_f(h)}"/>')

    # ── 複合部品 ──────────────────────────────
    def pill(self, label, x, y, anchor="c", h=26, w=None, pad=16,
             size=12, weight=700, fill="#1A7A5E", color="#fff", shadow=None):
        """角丸ピルバッジ（ステータス・凡例用）。w省略時は文字幅から自動。
        bbox (x0,y0,w,h) を返すので、凡例のように後続テキストを連結できる。"""
        if w is None:
            w = round(est_w(label, size) + 2 * pad)
        x0, y0, w, h = self.rect(x, y, w, h, anchor=anchor, rx=h / 2,
                                 fill=fill, shadow=shadow)
        self.text(label, x0 + w / 2, y0 + h / 2, size=size, fill=color,
                  weight=weight, anchor="c")
        return x0, y0, w, h

    def icon(self, name, x, y, r=20, bg="#1A7A5E", fg="#fff", scale=1):
        """円バッジ＋アイコングリフ。(x,y)=中心。name は ICONS のキー。"""
        self.circle(x, y, r, fill=bg)
        t = f"translate({_f(x)},{_f(y)})"
        if scale != 1:
            t += f" scale({_f(scale)})"
        self.parts.append(f'<g transform="{t}">{ICONS[name].format(c=fg)}</g>')

    def arrow_band(self, x, x2, y, h=62, tip=30, fill="url(#gAccH)", shadow="shSoft"):
        """矢じり付きの結論帯（下部キーメッセージ用）。"""
        ym = y + h / 2
        d = (f"M{_f(x)} {_f(y)} L{_f(x2)} {_f(y)} L{_f(x2 + tip)} {_f(ym)} "
             f"L{_f(x2)} {_f(y + h)} L{_f(x)} {_f(y + h)} Z")
        self.path(d, fill=fill, shadow=shadow)

    # ── 出力 ──────────────────────────────────
    def svg(self):
        lines = [f'<svg viewBox="0 0 {self.width} {self.height}" xmlns="http://www.w3.org/2000/svg">']
        if self.defs:
            lines.append(f"  <defs>{self.defs}</defs>")
        lines += [f"  {p}" for p in self.parts]
        lines.append("</svg>")
        return "\n".join(lines)

    def write_marp_md(self, path, source=None):
        """Marp用 .md を書き出す。source に生成元 .py 名を渡すと注記を入れる。"""
        note = f"\n<!-- generated by {source} — 編集は .py 側で行い再実行する -->\n" if source else "\n"
        Path(path).write_text(FRONTMATTER + note + "\n" + self.svg() + "\n",
                              encoding="utf-8")
