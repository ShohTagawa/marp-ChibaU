# 添削マップ 2026年前半（どのデックを・どれだけ・どう直したか）

Claude Code のセッションログ（このMac + my-life プロジェクト）と git 履歴（`--numstat`）を突き合わせた、デック別の「田川先生による添削量」の台帳。
**目的**：どのデックに先生の好みが濃く反映されているか（＝スライド自動作成の学習ソースとして信頼できるか）を区別する。

- **作成PC判定**：git author が `Shoh Tagawa`（スペースあり）= このMac ／ `ShohTagawa` = 他PC。ローカル reflog（commit vs pull）とも完全一致。
- **添削churn**：作成コミット以降の追加+削除行数（デック内 .md、out/・.bak は除外）
- **指示数**：そのデックを編集したセッション内のユーザー発話数（このMacのログのみ。他PC分は git でしか見えない）
- 生成スクリプト：セッションログ抽出＋git集計（scratchpad 一時スクリプト。再生成時は git log --numstat と ~/.claude/projects/-Users-shoh-marp-ChibaU*/ を再走査）

## A. 添削濃厚（好みが濃く反映済み＝参照優先度・高）

| デック | 作成 | PC | commits | 添削churn | 指示数 | 添削の主内容 |
|---|---|---|---|---|---|---|
| slides/20260620_EdTechCase_AI-univ-change | 6/18 | 他PC→両方 | 5 | 10,371 | 90 | 構成案v2全面差替、fan-out目視/事実確認、takeaway被り、ペルソナ(院生)レビュー |
| slides/20260602_InfoLit_8_network | 5/31 | このMac | 16 | 5,456 | 99 | SVG見切れ多数、比喩・例の学生目線化、引用検証、原稿同期。**skill化の発祥デック** |
| slides/20260702_FD_Meikai_genai-engagement | 6/29 | このMac | 6 | 3,835 | 11 | 90分設計、写真増、原稿(早口400w/min)、クラスデザインシート |
| slides/20260609_Boeing_Extension#2 | 6/3 | 他PC→両方 | 6 | 2,044 | 33 | ワーク設計（自己紹介30秒/HMW穴埋め/記入先リンク/時間検算）、px単位の文字指定 |
| slides/20260616_InfoLit_10_ethics-security | 6/16 | 他PC | 5 | 1,496 | 0* | （他PC作業のためログ無し。churnのみ） |
| slides/20260623_ALC_15min04_workspace-studio | 6/15 | 他PC | 3 | 1,195 | 0* | 同上。**「一番きれい」と本人評価**のデザイン基準デック |
| slides/20260621+0622_DataInfra_GCP-vs-vendors | 6/22 | このMac | 2+4 | 975+146 | 69 | コンサル型資料の要件（中立タイトル、構成図、実費試算、callout作法） |
| slides/20260623_InfoLit_11_security-tech | 6/22 | このMac | 3 | 894 | 12 | 前任範囲との差分設計、学生質問の反映、見切れ修正 |
| slides/20260702_ALC_15min05_mechanism-colab | 6/30 | 他PC→このMac | 4 | 600 | 14 | ipynb検証、AI透明性表記（Opus作成/Fable検証/責任は自分）、AIっぽさ除去 |
| slides/20260605_Boeing_Extension#1 | 6/3 | 他PC→両方 | 7 | 407 | 26 | 動画width固定、実データ差替（千葉銀レポ等）、関係者文面のニュアンス反映 |
| slides/20260519_ALC_1210_AI-function | 5/20 | このMac | 5 | 210 | 42 | OODA×Pause図の共同設計（人が主語）、SVG微調整の連続指示 |
| slides/20260611_BoardBrief_AcaLinApp | 6/13 | このMac | 2 | 62 | 44 | 理事向け説明＋実アプリ改修と連動 |
| slides/20260521_MedSchool_Google-Innovator | 5/30 | このMac | 2 | 84 | 12 | 実写真多用、Innovator気づき中心 |
| slides/20260609_InfoLit_9_application | 6/13 | このMac | 2 | 126 | 25 | 8-20-90設計、ipynb難易度調整（1年生目線） |
| PonchiE/20260623_ND_db-coevolution ほかポンチ絵群 | 6/11-13 | このMac | - | - | 80+ | 矢印最前面、パネル端揃え、平易な言葉（ACID→例外なく処理）、レイヤー色の意味分け |
| slides/20260629_ALC_thinking-students-creation | 7/2 | このMac | 1 | 0 | 8 | messageスライドの言葉選び（最適化でなく、変化は私たちから） |

*他PC作業分の添削はそのPCのセッションログにのみ残っている。

## B. 他PCで作成・添削（このMacにログ無し、git diffのみ追跡可）

| デック | 作成 | commits | 添削churn |
|---|---|---|---|
| slides/20260614_GenAI-Research_01_ethics-literacy | 6/15 | 3 | 2,420 |
| slides/20260623_GenAI-Research_03_how-genai-works | 6/15 | 2 | 415 |
| slides/20260616_ai_group_awareness_meta_analysis_short | 6/16 | 2 | 66（+このMacで引用検証22指示） |

## C. 変換移植のみ（Claudeが既存pptx等から起こしただけ＝好み信号なし）

- 6/28 の一括コミット（94439d9・4a067cd、他PC）で移植された約30本：`20250514_*`、`20250611_GenAI_*`、`20250613_Akarin_*`、`20251020/1128/1203_Talk_*`、`20260415_Guest_*`、`20260423_AICourse_*`、`20260628_InfoLit_4b/6/7_*`、`20260628_AICourse_kai3_prep` など
- これらは**内容は先生の過去スライド由来だが、marp化の体裁はClaude任せ**。デザインの参照元にしない（参照するのはA群）。

## D. 実験・その他

| デック | 備考 |
|---|---|
| PonchiE/auto | 自動生成バリアント実験（churn 16,002は生成物の入替。添削ではない） |
| slides/20260608_TEST_fd / TEST_miyazaki | pptx→marp変換テスト |

## 使い方

- 新規デック作成時の**デザイン・文体の参照元は A群**（特に ALC_15min04・InfoLit_8・EdTechCase・Meikai FD）。
- ここから抽出した一般則は `.claude/skills/marp-academic-slides/references/`（density-guide.md / patterns.md）と `lecture-script`・`marp-ponchie` に反映済み（2026-07-04）。
- 更新方法：新しい添削パスを回したら、この表に行を足すかchurnを更新する。
