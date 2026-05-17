# CLAUDE.md — marp-ChibaU

このリポジトリは千葉大学スタイルの Marp スライドを管理するプロジェクトです。

## 重要：あなたが守るべきルール

### スライド生成時の手順

1. 新しいスライドを作る・既存スライドを編集するときは、必ず **`marp-academic-slides`** スキルを起動する(`.claude/skills/marp-academic-slides/` にプロジェクト同梱)
2. スキル内の `references/patterns.md` と `references/density-guide.md` を読んでからスライド構造を決める
3. テーマ CSS は **`theme/academic.css`** を使う(スキル内の `assets/academic.css` ではなく、こちらが正本)
4. 新しいスライドは **`slides/`** ディレクトリ配下に書く
5. 画像は **`slides/assets/`** に配置する(ロゴは既に `slides/assets/chiba-logo.png` にあり)

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
