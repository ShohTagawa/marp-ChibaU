# Python DSL でポンチ絵を生成する（tools/ponchie-svg）

生SVGの手書きは属性が多く編集がつらい。繰り返し部品が多い図は
`tools/ponchie-svg/ponchie_svg.py` のDSLで **.py をソースにして .md を生成** する。

- ソース：スライドと同じディレクトリに同名の `.py`（例 `slides/X/Y.py` → `slides/X/Y.md`）
- 再生成：`python3 Y.py`（frontmatter・onepagerクラス込みの完全な .md を上書き）
- 実例：`slides/20260611_Ponchie_DataPlatform/20260611_Ponchie_LayerArchitecture.py`
- **生成された .md は直接編集しない**（冒頭に generated 注記が入る）

## 9点アンカー（イラレの基準点と同じ）

全部品の `anchor=` で (x,y) の意味を切り替える：

```
nw   n   ne          例: anchor="e"  → (x,y) が部品の右端・上下中央
 w   c   e           例: anchor="c"  → (x,y) が部品の中心
sw   s   se          既定: text は "w"、rect は "nw"、pill は "c"
```

テキストは `text-anchor` × `dominant-baseline` に、矩形系は座標オフセットに変換される。
`text(..., baseline=True)` で生SVGと同じベースライン指定にも戻せる。

## API早見表

```python
from ponchie_svg import SVG, ICONS, est_w

s = SVG()                                  # viewBox 0 0 1280 720、標準defs入り
s.rect(x, y, w, h, anchor="nw", rx=14, fill="#E4F2EC", shadow="shSoft")
s.text("見出し", x, y, size=16, weight=700, fill="#fff", anchor="w")
s.text("2行の\nテキスト", x, y, anchor="c", lh=1.4)   # \n で複数行・ブロックごと配置
s.pill("新規", x, y, anchor="e", fill="#fff", color="#125642")  # 幅は文字数から自動
s.icon("ai", x, y, r=20, bg="#fff", fg="#1A7A5E")    # 円バッジ＋グリフ
s.circle(cx, cy, r, fill="url(#glow)")
s.path("M40 620 ...", fill="url(#gAccH)", shadow="shSoft")
s.image("../assets/logo.png", x, y, w, h, anchor="c")
s.arrow_band(40, 1210, 620)                # 下部の矢じり付き結論帯
s.comment("セクション名")                   # 生成mdに <!-- --> を入れる
s.raw('<ellipse .../>')                    # 逃げ道（1要素1行・空行禁止）
s.write_marp_md(HERE / "Y.md", source="Y.py")
```

- `pill()`・`rect()` は bbox `(x0, y0, w, h)` を返す → 凡例のようにピル幅に応じて後続テキストを連結できる
- `shadow=` は `"sh"`（強）/ `"shSoft"`（弱）。defs は svg-library.md と同一定義を自動挿入
- アイコン名：`apps chart ai db cloud network shield people person book target building gear bulb link`（svg-library.md のグリフと同じ。追加は ICONS dict へ）
- 色は実値で渡す（CSS変数不可、svg-library.md と同じ理由）

## 書き方のコツ

- レイヤー帯・カードなど **繰り返しは dict のリスト＋for ループ** にする（文言修正がデータ編集だけで済む）
- 行の縦中央 `cy` を基準に `cy-13`（タイトル）/ `cy+15`（説明）のように相対で書くと、行の追加・移動が y 一箇所の変更で済む
- 新しい定型部品が必要になったら、スライド側でなく ponchie_svg.py にメソッドを足して育てる
