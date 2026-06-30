---
name: marp-academic-slides
description: Generate Japanese academic presentation slides as Marp markdown (marp:true frontmatter) with a Chiba-University-style red header band, university logo top-right, and ~10 pre-designed slide patterns (cover, self-intro, figure-centric, text-summary, left-right split, message, summary, references, chapter divider, Q&A). Use whenever the user asks to make slides, スライド, 発表資料, プレゼン, marpデック, 学会発表, 卒論/修論/中間発表, 講義スライド, ラボミーティング資料, or wants to extend/edit an existing Marp deck. Use even when the user does not say the word "marp" — if the deliverable is a slide deck for an academic or business presentation in Japanese, this skill applies.
---

# Marp Academic Slides

日本語の学術発表向け Marp スライドを生成するスキル。千葉大学風の赤いヘッダー帯デザインをデフォルトに、色・大学名・ロゴは差し替え可能。10種類のスライド型を用意。

## When to use

- 「marpで〜のスライド作って」「〜の発表資料作って」「プレゼン作って」
- 既存の `.md` (`marp: true` 付き) を編集・章追加する依頼
- 学会発表・卒論/修論・ラボミーティング・講義資料の新規作成
- 既存原稿（論文・要旨・メモ）から発表資料に組み直す依頼

「1枚の図解だけ欲しい」「テキストの箇条書きだけで十分」のような単発依頼は対象外。複数スライドで構成される **デック** を作る時に発動する。

## Files in this skill

```
marp-academic-slides/
├── SKILL.md                 (this file)
├── assets/
│   ├── academic.css         Marpカスタムテーマ。デックと同じ階層にコピー/参照させる
│   └── example-deck.md      10パターン全部入りの完成例
└── references/
    ├── patterns.md          10スライドパターンの仕様とMarkdownスニペット
    └── density-guide.md     「スカスカ」回避のチェックリスト
```

参照タイミング：
- スライドを設計する前に必ず **references/density-guide.md** に目を通す（短い）
- 各スライドを書く時に **references/patterns.md** から該当パターンを参照
- 構成に迷ったら **assets/example-deck.md** の完成例を参照

## Workflow

1. **要件確認**：発表タイトル・章構成・所属・ロゴパス・出力先パスを把握。情報が足りなければ `AskUserQuestion` を1回だけ使ってまとめて確認する。
2. **テーマCSSを配置**：出力先ディレクトリに `assets/academic.css` をコピー（もしくは相対パスで参照可能なら参照のみ）。すでにあればスキップ。
3. **パターン選択と密度確認**：references/patterns.md と density-guide.md を読み、各スライドに適切な型と最小コンテンツを決める。
4. **再利用を先に探す**：新規作図・新規執筆の前に、似た図・概念スライドが過去の自分のデックや指定 pptx に無いか確認する。あれば描き直さず取り込む（図は `marp-reuse-figures` で `src/figNN-...` にPNGのままコピー、定番スライドは構成ごとコピーして字句を保つ）。取り込んだ媒体は必ず `src/` にコピーしてリンク切れを防ぐ。
5. **Markdown を Write**：単一の `.md` に全スライドを書き出す。
6. **描画して目視確認（必須）**：`--html --no-stdin` 付きで PNG を出力し、該当スライドを Read で開いて「反映・見切れ・対象取り違え」を確認してから完了報告する（CLAUDE.md「必須確認ループ」）。markdownのdiffだけで「できました」と言わない。
7. **使い方を提示**：プレビュー/PDF 出力コマンドを最後に1-2行で示す。

## Output rules

- **1デック = 1 Markdown ファイル**。frontmatter は下記テンプレートを使う。
- ヘッダー帯のロゴは `<img class="hdr-logo">` で参照。CSS 側で `height: 36px; width: auto;` が効く。
- **スピーカーノートは Marp 標準の HTML コメント** `<!-- ノート本文 -->` をスライド末尾に書く。Marp Preview や PDF 出力時に発表者ノートとして扱われる。
- 文字数上限（patterns.md 記載）を超えるなら **スライドを分割** する。詰め込まない。

### 素材（画像・動画）の配置ルール【重要】

リンク切れの最大要因は「全角・空白を含むファイル名」と「素材の置き場所がバラバラ」の2つ。**1デック=1ディレクトリ**で完結させる。

**標準構造（必ずこの形）**：

```
slides/
  YYYYMMDD_<略号>_<時刻>_<内容>/                ← デックのルート（ディレクトリ）
    YYYYMMDD_<略号>_<時刻>_<内容>.md            ← ルートと同名のmd
    src/                                         ← 入力素材（画像・動画・固有ロゴ）
      fig01-...png
      fig05-...mov
    out/                                         ← 出力（PDF/HTML/PNG）
      <deck-name>.pdf
```

例：`slides/20260519_ALC_1210_AI-function/20260519_ALC_1210_AI-function.md` → 素材は `slides/20260519_ALC_1210_AI-function/src/fig05-learnlm-demo.mov`

**ルール**：

1. **デック名**：`YYYYMMDD_<イベント略号>_<時刻orコマ>_<内容>` 形式。半角英数・ハイフン・アンダースコアのみ
2. **md内の素材参照**：`./src/ファイル名` で書く
3. **素材ファイル名**：半角英数とハイフンのみ。全角・空白・括弧・記号は禁止
   - 命名規則：`fig{番号}-{内容を表す英単語}.{ext}`（例：`fig02-capability-overhang.png`、`fig09-canvas-translation.mov`）
   - 番号はスライド出現順、a/bで枝番（例：`fig01a-...`, `fig01b-...`）
4. **共通素材**：複数デックで再利用するロゴ・アイコンは `slides/assets/` に置く（例：`chiba-logo.png`）。デック固有素材はここに置かない
5. **ユーザーから素材を受け取ったとき**：`画面収録 YYYY-MM-DD HH.MM.SS.mov` のような名前で渡されることが多い。即、上記命名規則でリネームして `src/` に移すことを提案する
6. **出力（PDF/HTML/PNG）**：`out/` フォルダに書き出す。Marp CLIの `-o` フラグで指定（`--html` と `--no-stdin` は必須）：
   ```bash
   npx @marp-team/marp-cli@latest slides/<deck>/<deck>.md --no-stdin --html --pdf --allow-local-files -o slides/<deck>/out/<deck>.pdf
   ```
7. **新規デック作成手順**：
   1. `mkdir -p slides/<deck-name>/{src,out}` でフォルダを先に作る
   2. md は `slides/<deck-name>/<deck-name>.md` に書く
   3. frontmatterのロゴ：共通素材なら `../assets/chiba-logo.png`、デック固有なら `./src/logo.png`（mdから見た相対パス）

### Frontmatter テンプレ

`header:` には **デックタイトル（発表全体の名前）と ロゴ** だけを置く。ページタイトル（スライド固有のタイトル）は本文側で `<div class="page-title">` を使う。

```yaml
---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">{{発表タイトル}}</div><img class="hdr-logo" src="{{ロゴ画像パス}}">'
footer: ''
---
```

### 各スライドのページタイトル

スライド本文の冒頭に1行：

```html
<div class="page-title">{{そのスライドのタイトル}}</div>
```

CSS側でヘッダー帯の中央に「中央トラペゾイド」として描画される。`<!-- _header: ... -->` で毎回書き直す必要はない。

cover / divider / message / qa はヘッダー帯を表示しないので `page-title` も不要（書いても表示されない）。

### テーマ色・フォント・大学名の差し替え

frontmatter の `style:` で CSS 変数を上書きする。CSS本体は触らない。

**色**：

```yaml
style: |
  :root {
    --accent: #003B71;        /* 例：赤→紺 */
    --accent-soft: #E6EEF7;
  }
```

**フォント**（CSS変数 `--font-jp` を差し替え）：

```yaml
style: |
  @import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap');
  :root { --font-jp: "BIZ UDPGothic", sans-serif; }
```

選べる主な選択肢：
- デフォルト：`"Hiragino Kaku Gothic ProN", "Yu Gothic Medium", "Noto Sans JP", "Meiryo", sans-serif`（OS標準・読み込み不要）
- **BIZ UDPGothic**（読みやすさ重視）：上の `@import` を使う
- **Noto Sans JP**：`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'); :root { --font-jp: "Noto Sans JP", sans-serif; }`
- **Google Sans**：Webfont として公開されていない。ローカルにインストール済みの環境でのみ `:root { --font-jp: "Google Sans", "Noto Sans JP", sans-serif; }` を使う

### ヘッダー帯の幅・噛み合わせの調整つまみ

左の赤帯（デックタイトル）と中央の濃赤帯（ページタイトル）の幅・位置は、frontmatter の `style:` で **CSS変数を上書きするだけ** で調整できる。CSS本体は触らない。

```yaml
style: |
  :root {
    --hdr-left-w: 23%;   /* 左の赤帯の幅。タイトルの長さに合わせて伸縮 */
    --pt-width:   32%;   /* 中央ページタイトル帯の幅(文字が折り返すなら広く) */
    /* 左帯と中央帯の「白い隙間」つまみ：
         4px  → 既定デザイン：2帯の間に白い隙間が出る(これはこれでカッコいい)
         0    → 隙間ゼロでピタッと接する
         -4px → 重ねて白を完全に消す                                      */
    --hdr-gap:   -4px;
    /* ↓この式は触らなくてよい(左帯の右スラントに中央帯を噛み合わせる) */
    --pt-left: calc(var(--hdr-left-w) - var(--hdr-slant) + var(--hdr-gap));
  }
```

- 普段いじるのは **`--hdr-gap`**（白い隙間の有無）と **`--hdr-left-w`**（左帯の長さ）の2つだけ。
- `--pt-left` の calc 式と `--hdr-slant`(=22px, 斜めカット幅) は既定のまま使う。
- `--pt-left` / `--pt-width` を **設定しなければ既定レイアウト**（テーマCSSのフォールバック値）になるので、調整不要なデックでは丸ごと省略してよい。
- **表紙だけ左帯を短くしたい**等の「特定パターンのみ変えたい」場合は、`:root` ではなくそのクラスに対して上書きする：
  ```yaml
  section.cover-hero { --hdr-left-w: 19%; }  /* 表紙は中央帯が無いので文字幅に詰める */
  ```

## Arguments / 引数の慣習

最初に必要な情報を整理する。曖昧なら **1回だけ** AskUserQuestion で集約する。

| 項目 | 必須 | 例 |
|---|---|---|
| 発表タイトル | yes | "生物論文 - AI" |
| 大学/所属表示 | yes | "千葉大学" |
| ロゴ画像パス | yes | "./assets/chiba-logo.png" |
| 出力先パス | yes | "./slides/2026-05-self-intro.md" |
| 章立てまたは元原稿 | yes | 章タイトルの列挙、または既存メモ |
| テーマ色 | no | デフォルト `#A6192E` |

ロゴ画像がない場合は、`<img class="hdr-logo" src="./assets/logo-placeholder.png" alt="LOGO">` のプレースホルダーで生成し、後で差し替えてもらう旨をコメントで付記する。

## Anti-sparse rule（スカスカ回避）

詳細は `references/density-guide.md`。概要：

- 1スライド1メッセージは守るが、**メッセージ＋根拠＋補足図** の三点セットを基本にする。本文1行のスライドは作らない。
- 箇条書きは **3項目以上を原則**。2項目以下になるなら：①統合して別パターン、②補足列を増やす、③パターン③（左右分割）に変えて図を足す。
- 図表は積極的にプレースホルダー（`![alt](placeholder.png)` または角丸ボックスに `[ここに○○のグラフを配置]`）を提案する。空白を空白のまま残さない。
- **最小フォントサイズ 18px** を厳守。これより小さくしない。余白が出るなら **コンテンツを増やす** か **パターンを変える**。

## Final delivery

ファイルを書いた後、ユーザーに以下を1-2行で伝える：

- 保存先パス
- プレビュー：`npx @marp-team/marp-cli@latest "<file>.md" --no-stdin --html --preview` または VS Code Marp 拡張
- PDF 出力：`npx @marp-team/marp-cli@latest "<file>.md" --no-stdin --html --pdf --allow-local-files`

> **`--html` と `--no-stdin` は全 marp コマンドで必須**。`--html` が無いとインラインSVG/生HTMLが文字列化して図が崩れ、`--no-stdin` が無いと非対話実行で標準入力待ちでハングする。

長い説明や所感は不要。必要な情報だけ。
