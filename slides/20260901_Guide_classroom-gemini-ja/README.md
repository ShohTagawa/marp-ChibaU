# Google Classroom app in Gemini — 千葉大学 仮訳版

Google for Education 公開資料
**「Google Classroom app in Gemini: Guide for educators」（全21ページ）** の日本語仮訳デック。
**原典のレイアウト・配色をそのまま再現**し、本文だけを日本語に置き換えている。

## 位置づけ

- 非公式訳（千葉大学 仮訳）。表紙に「千葉大学 仮訳版」チップと、原典・非公式訳である旨の注記を入れてある。
- 原典 PDF は `orig/source.pdf`。`orig/p-01.png` 〜 `p-21.png` は 200dpi でページ画像化したもの（版面の実測用）。

## テーマ

`theme/google-edu.css`（このデック用に新設）。千葉大テーマ（academic / chiba-deck / tsutawaru-academic）とは
系統が別なので `@import` していない。**原典の体裁を保つデック専用**で、通常の講義・研究デックには使わない。

- 設計基準 1280x720（原典 720x405pt = 1000x563 の 1.28 倍）。座標はすべて原典実測値 x1.28。
- 配色は原典から実測：`#4285F4` / `#34A853` / `#EA4335` / `#FBBC05`、地色 `#F8F9FA` `#F3F6FC`、
  文字 `#202124` `#3C4043`、表の淡色列 `#E9EFF9` `#E9F2ED` `#F7EDED` `#F8EFD5`。
- ページ個別のレイアウト（表紙・ユースケース面の重ねパネル等）はデック側 frontmatter の `style:` に置く。

## 素材（src/）

原典ページからの切り出し。図版・ブラウザモックは原典の背景色ごと切り出し、
HTML 側で同じ座標・同じ地色を再現して継ぎ目が出ないようにしている。

- `logo-gfe.png` … フッタの Google for Education ロゴ。淡色地でも白箱が出ないよう**アルファ抽出済み**。
- アイコン（青丸のチェック／電球、Pro tip の電球）は画像ではなく**インライン SVG** でデック内に直書き。

## ビルド

```bash
# PNG（目視確認用）
npx @marp-team/marp-cli@latest slides/20260901_Guide_classroom-gemini-ja/20260901_Guide_classroom-gemini-ja.md \
  --no-stdin --theme-set theme/google-edu.css --html --images png --allow-local-files \
  -o slides/20260901_Guide_classroom-gemini-ja/out/check.png

# PDF
bash tools/marp-pdf/build-pdf.sh slides/20260901_Guide_classroom-gemini-ja/20260901_Guide_classroom-gemini-ja.md
```

## 既知の制限

- 図版内の Gemini / Classroom の**画面キャプチャは原典のまま（英語UI）**。UI 文言まで日本語化する場合は、
  日本語UIで撮り直した画像に差し替える必要がある。
- 原典のリンク（User guide 等）はボタンの見た目のみ再現。リンク先URLは原典 PDF を参照。
