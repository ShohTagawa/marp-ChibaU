#!/usr/bin/env python3
"""pptx→marp変換の「原文忠実性」チェッカー（標準ライブラリのみ）。

元pptxの全テキストを抽出し、変換後のmarp mdに一字一句含まれているかを突合する。
Claudeが変換時に勝手に言い換え・要約・省略した箇所を機械的に検出するためのツール。

使い方:
  python3 tools/pptx2marp/check-fidelity.py <original.pptx> <converted.md> [--min-len 6]

判定:
  - pptx側の各段落テキスト（既定6文字以上）が、md側（HTMLタグ除去・空白無視）に
    部分文字列として存在するかを見る
  - MISSING = md に見つからない → 改変・要約・省略の疑い。1件ずつ目視で判断する
  - 出力の最後に忠実率（found/total）を表示

注意:
  - 空白・改行の違いは無視して比較する（日本語はこれで実用十分）
  - スライド番号・日付・ページ番号などの自動テキストも拾うので、MISSINGが
    すべて「悪」ではない。意図的な省略なら、その旨をユーザーに報告して承認を得ること
"""
import sys, re, html, zipfile, argparse
import xml.etree.ElementTree as ET

A_NS = "{http://schemas.openxmlformats.org/drawingml/2006/main}"


def normalize(s: str) -> str:
    """比較用正規化：全空白を除去し、よくある互換文字を揃える"""
    s = re.sub(r"\s+", "", s)
    table = str.maketrans({
        "“": '"', "”": '"', "‘": "'", "’": "'",
        "－": "-", "―": "-", "‐": "-", "–": "-", "—": "-",
        "～": "〜", "！": "!", "？": "?", "：": ":", "；": ";",
        "（": "(", "）": ")", "［": "[", "］": "]",
        "，": ",", "．": ".", "０": "0", "１": "1", "２": "2", "３": "3",
        "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9",
    })
    return s.translate(table)


def pptx_paragraphs(path: str):
    """(slide_no, paragraph_text) を列挙。段落内の<a:t>ランは結合する"""
    with zipfile.ZipFile(path) as z:
        slide_files = sorted(
            (n for n in z.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", n)),
            key=lambda n: int(re.search(r"(\d+)", n).group(1)),
        )
        for name in slide_files:
            no = int(re.search(r"(\d+)", name).group(1))
            root = ET.fromstring(z.read(name))
            for p in root.iter(f"{A_NS}p"):
                text = "".join(t.text or "" for t in p.iter(f"{A_NS}t"))
                if text.strip():
                    yield no, text.strip()


def md_text(path: str) -> str:
    """md本文からHTMLコメント・タグを除いた比較用テキスト"""
    src = open(path, encoding="utf-8").read()
    src = re.sub(r"<!--.*?-->", "", src, flags=re.S)   # スピーカーノート等
    src = re.sub(r"<[^>]+>", "", src)                   # HTML/SVGタグ
    src = html.unescape(src)                            # &amp; → & など
    return normalize(src)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pptx")
    ap.add_argument("md")
    ap.add_argument("--min-len", type=int, default=6,
                    help="この文字数未満の段落は突合対象外（既定6）")
    args = ap.parse_args()

    target = md_text(args.md)
    total = found = 0
    missing = []
    for no, para in pptx_paragraphs(args.pptx):
        norm = normalize(para)
        if len(norm) < args.min_len:
            continue
        total += 1
        if norm in target:
            found += 1
        else:
            missing.append((no, para))

    print(f"原文段落: {total}  一致: {found}  不一致: {len(missing)}  "
          f"忠実率: {found/total*100:.1f}%" if total else "対象段落なし")
    if missing:
        print("\n== MISSING（md内に原文どおり見つからない段落。改変/要約/省略の疑い） ==")
        cur = None
        for no, para in missing:
            if no != cur:
                print(f"\n[slide {no}]")
                cur = no
            print(f"  ✗ {para[:80]}{'…' if len(para) > 80 else ''}")
        sys.exit(1)


if __name__ == "__main__":
    main()
