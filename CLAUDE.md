# CLAUDE.md — marp-ChibaU

このリポジトリは千葉大学スタイルの Marp スライドを管理するプロジェクトです。

## 重要：あなたが守るべきルール

### スライド生成時の手順

1. 新しいスライドを作る・既存スライドを編集するときは、必ず **`marp-academic-slides`** スキルを起動する(`.claude/skills/marp-academic-slides/` にプロジェクト同梱)
2. スキル内の `references/patterns.md` と `references/density-guide.md` を読んでからスライド構造を決める
3. テーマ CSS は **`theme/academic.css`** を使う(スキル内の `assets/academic.css` ではなく、こちらが正本)
4. 新しいスライドは **`slides/`** ディレクトリ配下に書く。ファイル名は `YYYYMMDD_<イベント略号>_<時刻/コマ>_<内容>.md` 形式（例：`20260519_ALC_1210_AI-function.md`）
5. **素材（画像・動画）の配置ルール**：
   - **既定**：mdファイルと同階層に **同名のフォルダ** を作り、その中に素材を入れる。md内では `./<mdと同名>/ファイル名` で参照する
     - 例：`slides/20260519_ALC_1210_AI-function.md` の素材は `slides/20260519_ALC_1210_AI-function/` に置く
   - 素材名は **半角英数・ハイフン** のみ。全角文字・空白は禁止（リンク切れの原因になるため）
   - 命名は内容を反映：`fig{番号}-{内容}.{ext}`（例：`fig05-learnlm-demo.mov`、`fig02-capability-overhang.png`）
   - **複数スライドで共有する素材のみ** `slides/assets/`（ロゴ・共通アイコン等）に置く

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
header: '<div class="hdr-left">デックタイトル</div><img class="hdr-logo" src="./assets/chiba-logo.png" alt="千葉大学">'
# ↑ ロゴ等の共通素材は ./assets/ 配下。個別スライド固有の素材は ./<mdと同名フォルダ>/ 配下。
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

```bash
# プレビュー
npx @marp-team/marp-cli@latest slides/<name>.md --theme-set theme/academic.css --preview

# PNG
npx @marp-team/marp-cli@latest slides/<name>.md --theme-set theme/academic.css --images png --allow-local-files

# PDF
npx @marp-team/marp-cli@latest slides/<name>.md --theme-set theme/academic.css --pdf --allow-local-files
```

VS Code では `.vscode/settings.json` で `markdown.marp.themes` が `./theme/academic.css` を指しているので、Marp 拡張のプレビューがそのまま使える。

## 既存スライド

- [slides/intro-demo.md](slides/intro-demo.md) — 自己紹介、今日のまとめ(3色 callout)、千葉大の指針、シナリオ+takeaway の4枚デモ
