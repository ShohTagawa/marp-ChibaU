# CLAUDE.md — marp-ChibaU

このリポジトリは千葉大学スタイルの Marp スライドを管理するプロジェクトです。

## 重要：あなたが守るべきルール

### 「直した」と言う前に、必ずレンダリングして目で確認する（最重要）

最も多い失敗は「編集したと言ったのに反映されていない」。**markdownのdiffではなく、描画結果で「完了」を判断する。**

見た目に関わる編集（フォント・位置・図・はみ出し・色・ヘッダー・画像差し替え）をしたら、毎回：

1. 該当デックをPNG化する（重いデックは該当ページ前後だけでよい）：
   ```bash
   npx @marp-team/marp-cli@latest "$DECK/<deck>.md" --no-stdin --theme-set theme/academic.css --html --images png --allow-local-files -o "$DECK/out/<deck>.png"
   ```
2. **編集したスライドのPNGを Read ツールで実際に開いて見る。**
3. 次の3点を目視確認してから「完了」と言う：
   - (a) 意図した変化が**実際に反映**されているか
   - (b) **見切れ・被り・かさなり**が無いか（ヘッダー帯・takeaway帯・隣接ブロックと衝突していないか）
   - (c) **対象を取り違えていない**か：編集したmdは本当にそのデックのmdか（別デックに画像を入れていないか）／読み込まれているCSSは正本か／同じ文字列が複数あって一部しか置換していないか

### 事実・出典は裏取り必須（学術デックの絶対条件）

このリポジトリは学術・講義用。**未検証の事実・統計・ガイドライン名・図/規定の所在をスライドに載せない。**

- 数値・引用・ガイドライン名を書く前に、**一次資料（PDF/URL/官公庁文書）の実物**に当たり、**該当ページ/箇所**を明記し、本当にそこに在ることを確認してから載せる。記憶や一般知識で「たぶんこのガイドライン」と書かない。確認できなければ『要確認』と明示してユーザーに尋ねる。
- ユーザーが正しい名称・出典を指定したら、その訂正を**正本として採用**する（例：AI事業者ガイドライン→AI原則）。
- 技術用語の分類・入れ子を正確に保つ（生成AIをTransformerの下位に入れ子にしない／識別系と生成系を区別する／reasoningは1回のforward passでなく反復を要する 等）。曖昧なら断定せず確認する。
- 自分が作った図・スライドは著作権自由。外部の図を混ぜる場合のみ `<div class="attr">出典…</div>` を付ける。

### スライド生成時の手順

1. 新しいスライドを作る・既存スライドを編集するときは、必ず **`marp-academic-slides`** スキルを起動する(`.claude/skills/marp-academic-slides/` にプロジェクト同梱)
2. スキル内の `references/patterns.md` と `references/density-guide.md` を読んでからスライド構造を決める
   - **作り始める前に [docs/revision-map_2026H1.md](docs/revision-map_2026H1.md) の A群（添削濃厚）デックをよく見る**。A群は田川先生の添削が濃く反映された「好みの正解集」。デザイン・言い回し・構成はここから学び、まず似た回・似た用途のA群デックを2〜3本開いて型を掴んでから書く（例：デザイン基準= `20260623_ALC_15min04_workspace-studio`、講義= `20260602_InfoLit_8_network`、研修= `20260702_FD_Meikai_genai-engagement`、講演= `20260620_EdTechCase_AI-univ-change`）
   - **C群（pptx変換のみ）のデックはデザイン・文体の参照元にしない**（体裁がClaude任せで添削されていない）
3. テーマ CSS は **`theme/` 直下のものだけが正本**：`theme/academic.css`（基本）と、それを `@import` して部品を足した **`theme/chiba-deck.css`（多くのスライドデックが使う実運用テーマ）**。どちらを使うかは後述の「### テーマは2層」を見る。**スキル配下・ホーム配下・出力先などに別コピーを置かない／コピーしない**（古いCSSが本番とズレる。過去コピーに `--header-h:50px` 等のロック違反あり）。
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
   - **ポンチ絵（PonchiE/）も同じ命名規則**：`PonchiE/YYYYMMDD_<イベント略号>_<内容>/` に同名md＋`src/`＋`out/`（例：`PonchiE/20260623_ND_db-coevolution/`）。直下の `onepager-*.md` は旧実験ファイルなので真似しない
7. **データ付きのグラフ**（棒・横棒・折れ線・棒+線複合・円/ドーナツ・散布図・ヒストグラム・箱ひげ・積み上げ棒など）を入れるときは、必ず **`marp-echarts`** スキルを使う（`.claude/skills/marp-echarts/`）。ECharts の option を書き、`tools/echarts-render/render.mjs` で静的SVGに焼き、`.fig-area` に **インライン直書き** する。
   - `<img src="*.svg">` や `![](*.svg)` は PDF/PNG 書き出しで**空白になる**ので使わない（インラインSVGのみ）。
   - インラインSVGは**空行を含めない**（Markdownがブロックを打ち切りスライドが消える。render.mjs が1行化して回避）。
   - 手描きの構造図（フロー・概念図）は従来どおり手書きインラインSVGでよい。グラフ（データ可視化）だけ marp-echarts に寄せる。

### テーマは2層（academic / chiba-deck）

実際のデックの**大半は `chiba-deck` を使う**（実測：chiba-deck 109デック / academic 29デック）。

| theme | 用途 | 中身 |
|---|---|---|
| `academic` | 基本テーマ（土台・少数の純学術デック） | ヘッダー帯・page-title・cover-hero・takeaway・fig/split/summary などの基盤 |
| `chiba-deck` | **多くのスライドデックの実運用テーマ** | `@import "academic"` の上に 本文25px・**右下PiP動画予約**(`--pip-w/--pip-h`・ページ番号は左下)・部品ライブラリ(`box-accent`/`box-info`/`box-warn`/`stepbox`/`tag`系/`pcard`+`cardrow`/`cite`/`goal-box`/`flowrow`+`fbox`/`subhead`/`sec-open`)を追加 |

- **新規の講義・PPTX再構築デックは原則 `theme: chiba-deck`**。学会ポスター的な純学術1デックだけ `academic` でよい。
- 表紙は **`cover-hero` が標準**（旧 `cover` は使わない）。
- `chiba-deck` は `@import "academic"` するので、**ビルド時は両方を渡す**：`--theme-set theme/academic.css theme/chiba-deck.css`（PDFは `tools/marp-pdf/build-pdf.sh` が自動で両方渡す）。
- 配色はデック側 frontmatter で。**既定はガーネット赤**。`class: teal` / `class: navy` で系列配色に切替（chiba-deck同梱プリセット）。`--hdr-left-w:21%`・全幅下線・ガーネット三点は chiba-deck の既定なので、新規デックで再指定不要。

### フォントサイズの厳守ルール

- **デフォルト 23px**(`section { font-size: 23px }`)
- **最小 18px**(これより小さくしない。詰める前にレイアウトを変える)
- **`.takeaway` だけは固定 28px**(これは縮小しない)
- callout / qa-grid 等の特殊ブロックも、明示的に拡大しない限り 23px
- **基準は「講堂で投影して読めるか」**（エディタのズームで読めるか、ではない）。投影して小さいと言われたら、意味のある刻みで**大きく**する（一回り＝+2〜4px目安）。再設計時の正味方向はたいてい拡大だが、下げ過ぎ（「48が小さくなりすぎ」等）にも注意。
- **実運用は二極化している**：タイトル・強調は 24/26/30px へ**上げる**一方、情報密度の高い本文は 18〜22px へ**下げる**ことがある（どちらも正当・18px下限は厳守）。一律に大きくしない。重要語の強調は赤系の色＋太字で行う（縮める前にレイアウト／パターンを変える）。

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
| `<div class="body">…</div>` | 見出しとtakeawayの「間」を囲む本文ゾーン。残りの縦スペースを埋める |
| `<!-- _class: vcenter \| vspread \| vtop -->` | `.body`ゾーンの縦配分(中央/均等/上詰め)。タイトル・takeawayは動かさない。`summary`は`.sections`、`split`は`.split-body`に効く |
| `<div class="cols">…</div>` | 横並びの列を等幅・等高に揃える(上揃えは `cols top`) |

上表は `academic` 基本テーマのクラス。**`theme: chiba-deck` のときは以下の部品が主力**（実デッキでの使用頻度が高い順）：

| クラス | 用途 |
|---|---|
| `<!-- _class: cover-hero -->` | **標準の表紙**（中央タイトル＋丸写真＋メタ）。旧 `cover` の代わり |
| `<div class="box-accent\|box-info\|box-warn">…</div>` | アウトライン型コールアウト(強調/補足/警告)。academicの `callout-*` の代わり |
| `<div class="stepbox"><div class="st">…</div></div>` | 順序ステップ枠(①→②→③) |
| `<span class="tag tag-accent\|tag-soft\|tag-analyze\|tag-design\|tag-ref">…</span>` | 役割ラベルのピル(H1直後に置くと縦位置が揃う) |
| `<div class="cardrow"><div class="pcard"><div class="pc-h">見出し</div>…</div></div>` | 影付き要点カード列(等幅・等高) |
| `<div class="cite">著者(年). …</div>` | APA風の出典行(19px) |
| `<div class="goal-box">…</div>` / `<div class="subhead">…</div>` | 達成目標枠 / サブ見出し |
| `<div class="flowrow"><div class="fbox blue\|red\|gray">…</div><span class="farrow">⇒</span>…</div>` | 色枠＋矢印フロー |
| `class="pip-safe"` | 右下のPiP動画域に被らないよう右マージンを確保 |

## プレビュー・出力コマンド

> **⚠️ `--html` は全コマンドで必須。** これを付け忘れると、インラインSVGや `<div>` などの生HTMLが
> すべてエスケープされ、図が「生のSVGソースコードの文字列」として描画される（＝はみ出し・余白崩れに見える）。
> PDF/PNG/プレビューすべてに付けること。
>
> **⚠️ `--no-stdin` も全コマンドで必須。** これが無いと、VS Codeのタスク/ターミナル/バックグラウンド等の
> 非対話実行で marp がファイル引数を渡しても標準入力を待って数分固まる
> （`[INFO] Currently waiting data from stdin stream…` で停止）。ボタン/スクリプトのハングの主因。

```bash
# 変数（このDIRが正本ルート）
DECK=slides/<deck-name>

# プレビュー
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin --theme-set theme/academic.css --html --preview

# PDF を out/ に書き出す
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin --theme-set theme/academic.css --html --pdf --allow-local-files -o "$DECK/out/<deck-name>.pdf"

# HTML / PNG も同様に -o で out/ を指定
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin --theme-set theme/academic.css --html --allow-local-files -o "$DECK/out/<deck-name>.html"
npx @marp-team/marp-cli@latest "$DECK/<deck-name>.md" --no-stdin --theme-set theme/academic.css --html --images png --allow-local-files -o "$DECK/out/<deck-name>.png"
```

### PDFが "Printing failed" で落ちるとき（枚数の多い/SVGが重いデック）

```
[ ERROR ] Failed converting Markdown. (Protocol error (Page.printToPDF): Printing failed)
```

**原因**：壊れたスライドではない。Chrome の `printToPDF` は1回の印刷で serialize するページの累積量が
多いほど落ちる（Skiaの上限）。個々のスライドは正常に描画できるのに、全80枚などを一括で渡すと超える。

**解決（ベクター品質を保ったまま）**：専用ビルドスクリプトを使う。全スライドを1つのHTMLに描画し、
ページ範囲（既定20枚）ごとに分割印刷 → `pdfunite` で結合する。ベクターのまま・ページ番号も連番のまま。

```bash
tools/marp-pdf/build-pdf.sh slides/<deck-name>/<deck-name>.md
# 出力先を変えるなら第2引数 / 1チャンクの枚数を減らすなら CHUNK=15 を前置
```

VS Code からは（自作ローカル拡張 `tools/marp-pdf/vscode-extension/` が右上ツールバーに2ボタンを出す。
`~/.vscode/extensions/marp-chibau-pdf` への symlink で読み込む。**symlink先は `$HOME` 基準で貼ること**＝
ユーザー名を直書き（旧 `/Users/shoh/…`）すると名前変更でリンクが切れ、ボタンが消える。再インストールは同フォルダのREADME）：
- **▶ ボタン（プレゼン）**：開いているデックを bespoke HTML にして Chrome で全画面プレゼン（**F**=全画面 / **P**=発表者ビュー / **←→**=ページ送り / **O**=一覧）。実体は `tools/marp-present/present.sh`。
- **📄 ボタン（PDF）**（おすすめ）：開いているデックをそのままベクターPDF化。チャンク数は設定 `marpChibau.chunkSize`（0=既定20、落ちるなら12）。
- **NPM スクリプト ▶**（標準機能）：エクスプローラーの「NPM スクリプト」で `pdf`／`pdf:safe`／`present`（`package.json`）。
- **⌘⇧B**（標準機能）：開いている `.md` をPDF化（`.vscode/tasks.json`）。

> ⚠️ **PNG経由（`--images png` → img2pdf）は使わない**。ラスタ化で文字がにじみ、学生から見づらいと苦情が出る。
> 必ず上記スクリプト（ベクター）で出すこと。`pdfunite` は poppler（`brew install poppler`）に含まれる。

VS Code では `.vscode/settings.json` で `markdown.marp.themes` が `./theme/academic.css` を指しているので、Marp 拡張のプレビューがそのまま使える。

## PowerPoint からの取り込み（pptx2marp）

既存の `.pptx` を **座標再現＋academic デザイン**で Marp デック化するツール。
ヘッダー以外は元スライドと位置・内容を一致させ、配色・字体・ヘッダー帯・ページ番号だけ
academic テーマに従う。詳細は `tools/pptx2marp/README.md`。

```bash
python3 tools/pptx2marp/pptx2marp.py <input.pptx> --name <deck-name> --title "<タイトル>"
```

表は HTML テーブルで再現。WMF/EMF 画像・動画・ネイティブグラフは再現不可のため位置に注記が入る
（グラフは `marp-echarts` で作り直し推奨）。

### 原文忠実の原則（pptx・既存スライドからの取り込み全般）

**原典の文言は一字一句そのままコピーする。** 変換・移植の際に、要約・言い換え・「改善」を勝手に行わない。
原文に誤字があってもまず原文どおりに写し、直したい場合は**変更候補の一覧を提示して承認を得てから**変える。
レイアウトの都合で文を分割・改行するのは可（字句は変えない）。

変換・移植後は必ず機械突合する：

```bash
python3 tools/pptx2marp/check-fidelity.py <original.pptx> <converted.md>
```

- 忠実率と MISSING（原文どおりに見つからない段落）の一覧が出る。**MISSING はゼロが原則**。
- 意図的に省略した段落（ページ番号・日付・重複ヘッダー等）が MISSING に出る場合は、その一覧を**ユーザーに報告**して了承を得る。黙って落とさない。

## 自分の既存スライドの「図だけ」を再利用する（marp-reuse-figures）

過去に自分が作った `.pptx` や既存デックの中の図（写真・グラフ・構造図など）を、新デックに
**PNGのまま**取り込んで埋め込みたいとき（＝SVGで描き直さない）は **`marp-reuse-figures`** スキルを使う
（`.claude/skills/marp-reuse-figures/`）。pptx2marp（デック丸ごと変換）と違い、**必要な図だけ**を選んで挿入する。

- 流れ：pptxをunzip → `scripts/pptx-figmap.py` で「どの図が何か」を把握 → 使う図を `src/figNN-内容.png` に
  規約名でコピー → `fig`/`split` 型に `<img src="./src/figNN-...">` で埋め込む（`*.svg` は使わない）→ 描画確認。
- 「元のスライドの絵をそのまま使って」と言われたら、作り直さずこのスキルで取り込む。
- 自作図は著作権自由。外部の図を混ぜる場合のみ `<div class="attr">出典…</div>` を付ける。

## 読み上げ原稿の作成・収録動画の反映（lecture-script）

各回の **読み上げ原稿**（`slides/<deck>/原稿_第N回.md`）を作る・直すとき、また **収録した動画を原稿に反映する**
（＝実際に話した内容に原稿を合わせる）ときは **`lecture-script`** スキルを使う（`.claude/skills/lecture-script/`）。

- 動画の文字起こしは **ローカルの whisper.cpp**：`ffmpeg` で16kHz mono WAV化 → `build/bin/whisper-cli -l ja`。`gcloud` 無し・音声を外部に出さない。詳細とコマンド・誤変換表は `references/transcription.md`。
- 反映は **1動画ずつ**・本文段落だけ差し替え（`# 動画N`／`### スライド`見出しと `---` は保持）、**編集前に必ず別名 `.bak`** でバックアップ。
- 語尾・文体と「ドラフト→実収録」の差分パターンは `references/style-guide.md`（新規ドラフトを書くときの指針にもなる）。

## 既存スライド

- [slides/intro-demo.md](slides/intro-demo.md) — 自己紹介、今日のまとめ(3色 callout)、千葉大の指針、シナリオ+takeaway の4枚デモ
