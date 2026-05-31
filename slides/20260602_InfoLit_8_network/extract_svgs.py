#!/usr/bin/env python3
"""インラインSVGを外部 src-ext/figNN.svg に切り出し、<img>参照に置換したコピーmdを作る。
忠実性のため各SVGに font-family / .card影 / var()実値 / xmlns を焼き込む。"""
import re, os, sys

DECK = "slides/20260602_InfoLit_8_network"
SRC_MD = f"{DECK}/20260602_InfoLit_8_network.md"
OUT_MD = f"{DECK}/20260602_InfoLit_8_network.ext.md"
SVGDIR = f"{DECK}/src-ext"
os.makedirs(SVGDIR, exist_ok=True)

FONT = '"BIZ UDPGothic","Hiragino Kaku Gothic ProN","Yu Gothic Medium","Noto Sans JP","Meiryo",sans-serif'
VARMAP = [("var(--accent-soft)", "#F8E5EA"),
          ("var(--accent-dark)", "#7d1322"),
          ("var(--accent)", "#A6192E")]
STYLE_INJECT = (f'<style>text{{font-family:{FONT};}}'
                f'.card{{filter:drop-shadow(0 2px 3px rgba(0,0,0,.12));}}</style>')

src = open(SRC_MD, encoding="utf-8").read()
# フロントマター(先頭の --- ... --- )は触らない
fm_match = re.match(r"^(---\n.*?\n---\n)", src, re.DOTALL)
fm = fm_match.group(1)
body = src[len(fm):]

svg_re = re.compile(r"<svg\b([^>]*)>(.*?)</svg>", re.DOTALL)
count = 0

def repl(m):
    global count
    count += 1
    n = f"{count:02d}"
    open_attrs = m.group(1)
    inner = m.group(2)
    full = m.group(0)
    # 色var()を実値へ
    svg_text = full
    for a, b in VARMAP:
        svg_text = svg_text.replace(a, b)
    # xmlns付与
    if "xmlns" not in svg_text[:200]:
        svg_text = svg_text.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"', 1)
    # 開きタグ直後に style 注入
    svg_text = re.sub(r"(<svg\b[^>]*>)", r"\1" + STYLE_INJECT, svg_text, count=1)
    # ファイル書き出し
    fn = f"{SVGDIR}/fig{n}.svg"
    open(fn, "w", encoding="utf-8").write('<?xml version="1.0" encoding="UTF-8"?>\n' + svg_text + "\n")
    # 元の width / style を <img> に引き継ぐ
    wm = re.search(r'width="([^"]+)"', open_attrs)
    width = wm.group(1) if wm else "100%"
    sm = re.search(r'style="([^"]+)"', open_attrs)
    ostyle = sm.group(1) if sm else ""
    mh = re.search(r"max-height:\s*([0-9]+px)", ostyle)
    maxh = mh.group(1) if mh else ""
    marg = re.search(r"margin:\s*([^;]+)", ostyle)
    margin = marg.group(1) if marg else ""
    style = f"width:{width};object-fit:contain;display:block;"
    if maxh: style += f"max-height:{maxh};"
    if margin: style += f"margin:{margin};"
    else: style += "margin:0 auto;"
    return f'<img class="svgfig" src="./src-ext/fig{n}.svg" style="{style}">'

new_body = svg_re.sub(repl, body)
open(OUT_MD, "w", encoding="utf-8").write(fm + new_body)
print(f"抽出 {count} 個 → {SVGDIR}/figNN.svg")
print(f"コピーmd: {OUT_MD}  ({len(new_body.splitlines())} 行, 元 {len(body.splitlines())} 行)")
