# pptx2marp — PowerPoint → academic テーマの Marp デック変換

PowerPoint(`.pptx`) を **「座標再現＋academic CSS」** 方式で Marp デックに変換します。

## 方針（何を一致させ、何を academic に任せるか）

| 項目 | 扱い |
|---|---|
| 図形・画像・テキストの**位置/サイズ/順序/内容** | 元 `.pptx` に**完全一致**（EMU 座標 → % で HTML 絶対配置） |
| フォント**サイズ** | 元 pt を維持（箱からの溢れ防止＝レイアウト一致のため） |
| **配色・字体(font-family)・ヘッダー帯・ページ番号** | **academic テーマ**（`theme/academic.css`）に委ねる |
| 各スライドの**タイトル枠** | academic の中央帯 `page-title` に載せる（＝ヘッダー扱い） |
| **表紙レイアウト**のタイトル | 帯に上げず、元座標の大見出しのまま再現 |

> 文字の折り返しはブラウザ(Marp)の描画依存のため、元と完全一致しない場合があります（位置・内容・画像は一致）。

## 使い方

```bash
# リポジトリルートで
python3 tools/pptx2marp/pptx2marp.py <input.pptx> \
    [--name 20260608_Lecture_intro]   # デック名（省略時 YYYYMMDD_Import_<slug>）
    [--title "発表タイトル"]            # ヘッダー帯のデックタイトル（省略時ファイル名）
    [--event Lecture] [--date 20260608] [--slug intro]
    [--out slides]                     # 出力ベース（既定 slides/）
```

出力（CLAUDE.md 規約どおり 1デック=1ディレクトリ）:

```
slides/<deck-name>/
  <deck-name>.md      # Marp markdown（座標再現レイヤの CSS を frontmatter に同梱）
  src/                # 抽出画像 figNN-img.<ext>
  out/                # PDF/HTML/PNG の出力先
  academic.css        # テーマのコピー（自己完結用）
```

変換後にプレビュー / PDF:

```bash
npx @marp-team/marp-cli@latest "slides/<deck>/<deck>.md" --theme-set theme/academic.css --html --preview
tools/marp-pdf/build-pdf.sh "slides/<deck>/<deck>.md"
```

## 対応・制約

| 要素 | 対応 |
|---|---|
| テキスト（段落・改行・整列・箇条書き記号・インデント） | ✅ 再現 |
| 画像（PNG/JPG 等） | ✅ 元位置・サイズで配置 |
| 表（テーブル） | ✅ HTML テーブルで再現（ヘッダー行は academic アクセント色） |
| グループ図形 | ✅ 子座標系を変換して再帰展開 |
| スピーカーノート | ✅ HTML コメントとして保持 |
| **WMF / EMF** ベクター画像 | ⚠ ブラウザが描画不可 → 点線枠の注記。PowerPoint で PNG 等に再保存を |
| **動画(MEDIA)** | ⚠ 埋め込み不可 → 位置に注記。元ファイル参照 |
| **ネイティブ・グラフ/SmartArt** | ⚠ 再現不可 → 位置に注記。`marp-echarts` で作り直し推奨 |

## 依存

- Python 3 / `python-pptx`（`pip3 install python-pptx`）
- 出力確認に Node + `@marp-team/marp-cli`（既存のリポジトリ運用と同じ）
