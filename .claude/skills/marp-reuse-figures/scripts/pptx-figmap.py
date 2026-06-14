#!/usr/bin/env python3
"""pptx-figmap — 展開済み pptx の各スライドについて、本文テキストと参照画像の対応を出力する。
使い方:
    # まず unzip しておく:  (cd /tmp/figsrc && unzip -o source.pptx)
    python3 pptx-figmap.py /tmp/figsrc

各スライドを1行で:  s03 [topic-flags] 「本文先頭…」 imgs=[image5.png, ...]
これで「どの画像が、どの文脈の図か」を当たりを付けてから、使う図を選ぶ。
"""
import re, glob, os, sys

def text_of(p):
    s = open(p, encoding="utf-8").read()
    return "".join(re.findall(r"<a:t>(.*?)</a:t>", s))

def main(root):
    slides = sorted(glob.glob(os.path.join(root, "ppt/slides/slide*.xml")),
                    key=lambda x: int(re.findall(r"\d+", os.path.basename(x))[0]))
    if not slides:
        print("スライドXMLが見つかりません。先に unzip しましたか？:", root); return
    # keyword flags to hint topics (編集して使う)
    flags = {
        "LLM/中身": r"トランスフォーマ|Transformer|アテンション|Attention|並列|ニューラル|トークン|埋め込み|softmax|LLM",
        "幻覚/フェイク": r"ハルシ|幻覚|hallucin|フェイク|ディープフェイク|偽|捏造|誤情報",
        "予測": r"予測|確率|next|プレディク|サンプリング",
        "倫理/著作": r"倫理|著作|個人情報|規約|ポリシー|査読",
    }
    for sl in slides:
        n = int(re.findall(r"\d+", os.path.basename(sl))[0])
        t = text_of(sl)
        rel = os.path.join(root, "ppt/slides/_rels", os.path.basename(sl) + ".rels")
        imgs = []
        if os.path.exists(rel):
            imgs = re.findall(r"media/([\w.]+\.(?:png|jpg|jpeg|gif|emf|wmf))",
                              open(rel, encoding="utf-8").read(), re.I)
        tag = "".join(f"[{k}]" for k, rx in flags.items() if re.search(rx, t, re.I))
        head = re.sub(r"\s+", " ", t)[:80]
        if imgs or tag:
            print(f"s{n:02d} {tag} 「{head}」 imgs={imgs}")

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
