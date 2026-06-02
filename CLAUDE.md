# CLAUDE.md — marp-ChibaU

このリポジトリは千葉大学スタイルの Marp スライドを管理するプロジェクトです。

## 重要：あなたが守るべきルール

### スライド生成時の手順

1. 新しいスライドを作る・既存スライドを編集するときは、必ず **`marp-academic-slides`** スキルを起動する(`.claude/skills/marp-academic-slides/` にプロジェクト同梱)
2. スキル内の `references/patterns.md` と `references/density-guide.md` を読んでからスライド構造を決める
3. テーマ CSS は **`theme/academic.css`** を使う(スキル内の `assets/academic.css` ではなく、こちらが正本)
4. 新しいスライドは **`slides/`** 配下に「**1デック = 1ディレクトリ**」で作る。ディレクトリ名は `YYYYMMDD_<イベント略号>_<時刻orコマ>_<内容>` 形式（例：`20260519_ALC_1210_AI-function`）
5. **1デックの内部構造**：
   ```
   slides/
     20260519_ALC_1210_AI-function/             ← デックのルート
       20260519_ALC_1210_AI-function.md         ← 同名のmd
       src/                                      ← 入力素材（画像・動画・固有ロゴ等）
         fig01a-gemini-data-protection.png
         fig05-learnlm-demo.mov
         ...
       out/                                      ← 出力先（PDF / HTML / PNG）
         20260519_ALC_1210_AI-function.pdf
   ```
   - md内では `./src/ファイル名` で素材を参照する
   - PDF/HTML出力は `-o ./out/<deck-name>.<ext>` で `out/` に書き出す
   - 素材名は **半角英数・ハイフン** のみ。全角・空白・括弧は禁止（リンク切れの原因）
   - 命名規則：`fig{番号}-{内容}.{ext}`（例：`fig02-capability-overhang.png`、`fig05-learnlm-demo.mov`）。番号はスライド出現順、a/bで枝番
6. **複数デックで共有する素材のみ** `slides/assets/`（千葉大ロゴ・共通アイコン等）に置く

### フォントサイズの厳守ルール

- **デフォルト 23px**(`section { font-size: 23px }`)
- **最小 18px**(これより小さくしない。詰める前にレイアウトを変える)
- **`.takeaway` だけは固定 28px**(これは縮小しない)
- callout / qa-grid 等の特殊ブロックも、明示的に拡大しない限り 23px

### ヘッダーは固定高さ 56px

`--header-h: 56px` を変更しない。文字サイズや行間で高さが変動しないよう、`min-height` / `max-height` を二重で固定している。

### Frontmatter テンプレート

```yaml
---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">デックタイトル</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
# ↑ mdは slides/<deck-name>/<deck-name>.md にあるので、
#    共通ロゴ → ../assets/chiba-logo.png
#    デック固有素材 → ./src/figXX-....png
footer: ''
---
```

### 主要クラス一覧

| クラス | 用途 |
|---|---|
| `<!-- _class: cover \| intro \| fig \| summary \| split \| message \| divider \| wrap \| refs \| qa -->` | スライドパターン |
| `<div class="page-title">…</div>` | スライド固有のページタイトル(ヘッダー中央の濃赤帯) |
| `<div class="callout-{gray\|green\|pink\|orange\|yellow\|blue}">…</div>` | 色付き帯ヘッダー |
| `<div class="indent-{sm\|md\|lg\|xl}">…</div>` | リストの追加インデント |
| `<span class="hl">…</span>` / `<span class="hl-dark">…</span>` | 赤系強調文字 |
| `<div class="qa-grid">…</div>` | 質問/回答の2列レイアウト(偶奇で交互配置) |
| `<div class="takeaway">要点</div>` | スライド下端固定の要点帯(28px固定) |

## プレビュー・出力コマンド

> **⚠️ `--html` は全コマンドで必須。** これを付け忘れると、インラインSVGや `<div>` などの生HTMLが
> すべてエスケープされ、図が「生のSVGソースコードの文字列」として描画される（＝はみ出し・余白崩れに見える）。
> PDF/PNG/プレビューすべてに付けること。

```bash
# 変数（このDIRが正本ルート）
DECK=slides/<deck-name>

# プレビュー
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --preview

# PDF を out/ に書き出す
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --pdf --allow-local-files -o "$DECK/out/<deck-name>.pdf"

# HTML / PNG も同様に -o で out/ を指定
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --allow-local-files -o "$DECK/out/<deck-name>.html"
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --theme-set theme/academic.css --html --images png --allow-local-files -o "$DECK/out/<deck-name>.png"
```

> 注: 環境によっては marp の `--pdf`（Chrome printToPDF）が "Printing failed" で落ちる。その場合は
> `--html --images png` でPNGを出してから `python3 -m img2pdf out/slide.*.png --pagesize 1280x720 -o out/<deck-name>.pdf` で代替する。

VS Code では `.vscode/settings.json` で `markdown.marp.themes` が `./theme/academic.css` を指しているので、Marp 拡張のプレビューがそのまま使える。

## 既存スライド

- [slides/intro-demo.md](slides/intro-demo.md) — 自己紹介、今日のまとめ(3色 callout)、千葉大の指針、シナリオ+takeaway の4枚デモ
