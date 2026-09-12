# src ── 8本で共有する図（元デックからコピー）

各動画のデックを作るときは、ここから各デックの `src/` に**同じファイル名でコピー**して `./src/…` で参照する（`../src/` 参照は配布時に切れる）。

| ファイル | 元 | 使う動画 | 中身 |
|---|---|---|---|
| fig01a-gemini-data-protection.png | ALC 1210 | 1 | 大学版Geminiの「データ保護」表示のスクリーンショット |
| gemini-privacy.png | 明海2 | 1・7 | Gemini 設定→アクティビティ（データの扱いの説明） |
| fig03-prompt-template.png | ALC 1210 | 2 | おすすめの簡易プロンプト（Google 4要素） |
| fig20-gem-syllabus.png | ALC 1210 | 2 | Gem（シラバスチェック）の画面。動画 `fig20-gem-syllabus.mov`（30MB）は**コピーしていない**。必要なら `slides/20260519_ALC_1210_AI-function/src/` から |
| fig04a-at-mention-calendar.png | ALC 1210 | 3 | @でカレンダーを呼び出す画面 |
| fig04b-gmail-smart-features.png | ALC 1210 | 3 | Gmailスマート機能のスイッチ |
| notebooklm-ui.png | 明海2 | 5 | Gemini Notebook の画面 |
| fig02-capability-overhang.svg / .png | ALC 1210 | 6 | 性能（指数）と活用（線形）のギャップ。出所表記は要確認 |
| fig24-ooda-loop.svg / .png | ALC 1210 | 7 | OODAループ＋Pause（主語は人間） |

- SVGは **インラインで直書き**する（`<img src="*.svg">` はPDF/PNG出力で空白になる）。
- Workspace Studio（動画4）の「しくみ＝Flow」図は ALC 15min04 のデック内にインラインSVGで入っているので、mdからコピーする。
- 動画1の機械学習の図（Chollet 図1-2）は外部図のため**自作SVGで描く**。元図の内容は `../transcript/元音声_文字起こし_2026-09.md` 末尾。
- 表紙の写真は共通の `slides/assets/profile.jpg`、ロゴは `slides/assets/chiba-logo.png`。
