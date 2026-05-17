# marp-ChibaU

千葉大学スタイルの Marp スライドプロジェクト。Claude Code のスキル付き。

## 構成

```
marp-ChibaU/
├── CLAUDE.md                          # Claude Code 用のプロジェクト指示書
├── README.md                          # このファイル
├── .claude/
│   └── skills/
│       └── marp-academic-slides/      # スライド生成スキル(プロジェクト同梱)
├── .vscode/
│   └── settings.json                  # VS Code Marp 拡張の設定
├── theme/
│   └── academic.css                   # メインの千葉大テーマ CSS
└── slides/
    ├── intro-demo.md                  # サンプルスライド
    └── assets/
        └── chiba-logo.png             # ロゴ画像
```

## 別のPCでの立ち上げ

1. このリポジトリを git clone する
2. Claude Code をプロジェクトディレクトリで起動 — `.claude/skills/marp-academic-slides/` が自動認識される
3. VS Code でディレクトリを開く — `.vscode/settings.json` により Marp 拡張がテーマを自動で読み込む

## VS Code での編集

[Marp for VS Code 拡張](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) をインストール後、`slides/*.md` を開けば右上のアイコンからプレビュー可能。

## CLI でのレンダリング

```bash
# プレビュー
npx @marp-team/marp-cli@latest slides/intro-demo.md --theme-set theme/academic.css --preview

# PNG 出力
npx @marp-team/marp-cli@latest slides/intro-demo.md --theme-set theme/academic.css --images png --allow-local-files

# PDF 出力
npx @marp-team/marp-cli@latest slides/intro-demo.md --theme-set theme/academic.css --pdf --allow-local-files
```

## スライドを書くときの基本ルール

- フォントサイズ: **原則 23px**(縮小せざるを得ない時のみ最小 18px)
- `.takeaway`: **固定 28px**
- 1スライド1メッセージ
- ヘッダーは固定高さ 56px

## 主要なクラス

- ページタイトル: `<div class="page-title">タイトル</div>`
- callout 帯: `<div class="callout-{gray|green|pink|orange|yellow|blue}">…</div>`
- インデント: `<div class="indent-{sm|md|lg|xl}">…</div>`
- 強調色: `<span class="hl">…</span>` / `<span class="hl-dark">…</span>`
- Q&A: `<div class="qa-grid">…</div>`(偶数番目が答え)
- takeaway: `<div class="takeaway">要点</div>`(固定位置・固定サイズ)

詳細は [.claude/skills/marp-academic-slides/references/patterns.md](.claude/skills/marp-academic-slides/references/patterns.md) を参照。
