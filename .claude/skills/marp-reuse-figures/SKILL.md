---
name: marp-reuse-figures
description: 自分が過去に作った既存スライド（.pptx や 既存の Marp デック）の中の図・画像を、新しい Marp デックに「PNG画像として」取り込んで埋め込むスキル。SVGで描き直さず、元の図そのものを再利用したいとき。トリガー：「自分の作ったスライドの図を使って」「前のpptxの絵を入れて」「この図を再利用」「元スライドの図を取り込んで」。pptx2marp（デック丸ごと変換）とは別で、必要な図だけを選んで挿入する用途。
---

# marp-reuse-figures — 既存スライドの図を新デックに再利用

自分が過去に作った `.pptx` や既存 Marp デックの中の**図・画像（写真・グラフ・概念図など）**を、
新しい Marp デックに **PNG/JPG のまま** 取り込んで埋め込むためのスキル。
**SVGで描き直さない**。元の図をそのまま活かす。

## いつ使うか
- 「自分が作った前のスライドの、あの図を入れて」と言われたとき
- ハルシネーション例・次トークン予測のグラフ・モデル構造図など、**作り直すより本物を使う方が良い**図があるとき
- 1デック丸ごと変換（→ `tools/pptx2marp`）ではなく、**必要な図だけ**選んで挿入したいとき

## 前提（このリポジトリの規約）
- 1デック=1ディレクトリ（`slides/<deck>/`）。図は `slides/<deck>/src/` に置く。
- 図のファイル名は**半角英数・ハイフンのみ**：`fig{番号}-{内容}.{ext}`（番号はスライド出現順、a/bで枝番）。
- md内では `./src/figNN-....png` で参照。`--html` は描画時に必須（CLAUDE.md参照）。
- 自作スライドの図なので著作権上は自由に使えるが、**外部の図**を混ぜる場合は出典 `<div class="attr">` を付ける。

## 手順

### 1. 元素材を取り出す
**pptx の場合**（pptx は zip）:
```bash
mkdir -p /tmp/figsrc && (cd /tmp/figsrc && unzip -o "/path/to/source.pptx" >/dev/null)
ls /tmp/figsrc/ppt/media/        # image1.png, image2.jpg, ...
```
**既存 Marp デックの場合**: その `slides/<deck>/src/` の図をそのまま参照元にする。

> ⚠️ TCC: `~/Downloads`・`~/Documents` 等は読めないことがある。読めない時はユーザーに
> `~/.claude/inbox/` か リポジトリ内へコピーしてもらう（inbox-access スキル参照）。

### 2. どの図が何かを把握する（スライド本文↔画像の対応）
画像だけ見ても用途が分からないので、**各スライドの文字と、そのスライドが参照する画像**を対にして出す:
```bash
python3 .claude/skills/marp-reuse-figures/scripts/pptx-figmap.py /tmp/figsrc
```
出力で「どのスライドの・どの文脈の図か」を確認し、**使う画像を選ぶ**。
（装飾バナー・帯など中身のない画像はスキップ。Readツールで画像を実際に見て中身を確認すると確実。）

### 3. 新デックの src/ に、規約名でコピー
```bash
D=slides/<deck>
cp /tmp/figsrc/ppt/media/image43.png "$D/src/fig02a-transformer-architecture.png"
cp /tmp/figsrc/ppt/media/image44.png "$D/src/fig04a-nexttoken-wagahai.png"
```

### 4. スライドに埋め込む（SVGにしない）
図中心スライドは `fig` 型、左右なら `split` 型。画像は素直に `<img>`:
```markdown
<!-- _class: fig -->
<div class="page-title">LLMの中身</div>
## トランスフォーマーの構造
<div class="fig-area">
<img src="./src/fig02a-transformer-architecture.png" alt="トランスフォーマー構造" style="max-height:430px">
</div>
<div class="caption">図. 自作の構造図（埋め込み→自己注意→MLP→softmax）</div>
<div class="takeaway">要点…</div>
```
- `.fig-area` 内の `img` は `max-height:380〜430px` を目安に。split-left なら `max-height:330px` 程度。
- 縦長/横長の図はアスペクト比を保つ（`height:auto`）。複数並べるなら `.grid2`/`.grid3` か `figwrap`。
- **`![](*.svg)` や `<img src=*.svg>` は使わない**（PDF/PNGで空白化）。再利用するのは PNG/JPG のラスタ図。

### 5. 描画して確認
```bash
npx @marp-team/marp-cli@latest "$D/<deck>.md" --theme-set theme/academic.css --html --images png --allow-local-files -o "$D/out/<deck>.png"
```
PNGをReadツールで開き、図が枠内に収まっているか・潰れていないかを目視。

## やってはいけない
- 元の図を SVG で“描き直す”（指示が「元の図を使う」なら、そのまま PNG で使う）
- 全角・空白・括弧入りのファイル名（リンク切れ）
- `~/Downloads` 等を直接読もうとして止まる（コピーを依頼する）
- 装飾用の帯/バナー画像を中身のある図と誤って挿入する（事前に Read で確認）
