# 出典・参照資料の所在（この研修で使うもの）

PDFはリポジトリに入れない（著作権・容量）。ローカルの所在とURLを書く。検証状況は `../README.md` §4。

## AIリテラシーの枠組み（到達点の根拠）

| 資料 | ローカル | 使う箇所 |
|---|---|---|
| Ng, D. T. K., Leung, J. K. L., Chu, S. K. W., & Qiao, M. S. (2021). Conceptualizing AI literacy: An exploratory review. *Computers and Education: Artificial Intelligence*, 2, 100041. https://doi.org/10.1016/j.caeai.2021.100041 | `~/book-reading/papers/AI literacy/Ng et al. (2021) Conceptualizing AI literacy/`（PDF・日本語ノート・抜き書きmd） | 4側面＝§3.1 Table 4（pp.3–4）、Bloom対応＝§3.5 Fig. 2（p.5） |
| Long, D., & Magerko, B. (2020). What is AI literacy? Competencies and design considerations. *CHI '20*, Paper 598. https://doi.org/10.1145/3313831.3376727 | `~/book-reading/papers/AI literacy/Long and Magerko (2020) What is AI Literacy/`（PDF・日本語ノート） | 定義 p.2／C5・C6 p.4／C9・C10・C12・C13 p.6／C16 p.7／C17 p.9 |
| Laupichler et al. (2022) AI literacy in higher and adult education（同フォルダ） | `~/book-reading/papers/AI literacy/Laupichler et al. (2022) .../` | 今回は未使用（高等教育向けの補強に使える） |

## 仕組み（動画1・6）

| 資料 | 所在 | 使う箇所 |
|---|---|---|
| Chollet, F., & Watson, M.（巣籠悠輔 監訳、クイープ 訳）(2026)『Pythonによるディープラーニングと生成AI・LLM』マイナビ出版（原著 *Deep Learning with Python*, 3rd ed.） | 紙の本（先生の手元）。引用は `../transcript/元音声_文字起こし_2026-09.md` 末尾 | 図1-2（p.4）、3要素（p.5） |
| ALC 1210「性能ギャップ」図（Capability overhang） | `../src/fig02-capability-overhang.svg` | 動画6。出所表記「Anthropic」は要確認 |
| Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. *ICLR 2023*. https://arxiv.org/abs/2210.03629 | Web（arXiv） | 動画6 スライド6-4（エージェント＝考える→道具を使う→観る、の繰り返し）。書誌は2026-09-12にWebで確認 |
| 植草lite「仕組みを一言で言うと ③」「仕組みのまとめ」「守り ②」「守り ④」「使い方の変化」 | `slides/20260820_SD_Uekusa_genai-usage_lite/` | 動画6（6-4）・動画7（7-4・7-5）・動画8（8-5）。守り④の表は Science の guidelines PDF が出典（元スライドにリンクあり） |

## データの扱い・安全（動画1・7）

| 資料 | URL | 使う箇所 |
|---|---|---|
| Google Workspace Updates (2025-04) NotebookLM and the Gemini app are now Core Services with enterprise-grade data protection for all education customers | https://workspaceupdates.googleblog.com/2025/04/notebookLM-and-gemini-app-core-services-for-education-customers.html | 学習に不使用・人のレビュー無し・FERPA等に対応 |
| Google Workspace with Gemini FAQ for Education | https://knowledge.workspace.google.com/admin/gemini/gemini-for-google-workspace-faq-education | 同上 |
| 千葉大学「千葉大学の教育・学習における生成AIの利用についての指針」（令和7年9月18日改訂・日英） | `refs/千葉大学の教育・学習における生成AIの利用についての指針（令和7年9月18日改訂・日英）.pdf`（2ページ。p.1 日本語、p.2 英語）／[Drive](https://drive.google.com/file/d/1ZultuLWXNLJ53M43ExrYG8cIfwqcCnCO/view)（要ログイン） | ✅ 2026-09-12 全文確認。項目と使う箇所は末尾の表 |
| RIZAP株式会社「外部生成AIサービスへのお客様情報の誤ったアップロードに関するお詫びとお知らせ」2026-09-03 | https://business.rizap.jp/news/2492 | 動画7 国内事例（明海2「要点①」に組み込み済み） |

## 「扱わないこと」で名前だけ出す資料（動画1）

| 資料 | 所在 |
|---|---|
| OECD (2026) *Digital Education Outlook 2026: Exploring Effective Uses of Generative AI in Education* 日本語版（訳：吉田塁・東京大学、2026年4月） | https://edulab.t.u-tokyo.ac.jp/oecd-digital-education-outlook-2026-japanese/ ／ PDF https://edulab.t.u-tokyo.ac.jp/wp-content/uploads/2026/04/OECD-Digital-Education-Outlook-2026-Japanese.pdf（動画5のNotebookソース候補にも） |
| MIT (2026-08-13) *Report of MIT's Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training*（38p） | 原文 https://facultygovernance.mit.edu/committee/committee-ai-use-teaching-learning-and-research-training ／ 対訳版 https://claude.ai/code/artifact/230038a0-80b9-4329-97aa-bf5723118ae7 ／ ローカル `~/book-reading/papers/Higher education research/MIT (2026) AI Use in Teaching, Learning, and Research Training/` |
| 文部科学省の初等中等向け生成AIガイドライン | 正式名称・版は未確認。スライドは一般名で書く |

## 再利用するデック（スライドの元）

| デック | 使う動画 |
|---|---|
| `slides/20260519_ALC_1210_AI-function/`（ALC 1210） | 1・2・3・6・7・8 |
| `slides/20261001_FD_Meikai_2_genai-workshop/`（明海2） | 1・3・5・6・7 |
| `slides/20260623_ALC_15min04_workspace-studio/`（Studioのみ） | 4 |

明海1（`20260702_FD_Meikai_genai-engagement`）は使わない。

## 千葉大学の指針：項目と、この研修で使う箇所

千葉大学 国際未来教育基幹キャビネット・高等教育センター「千葉大学の教育・学習における生成AIの利用についての指針」（令和5年10月13日策定、令和7年9月18日改訂）。要旨は原文p.1（日本語）から。スライドに引用するときは原文の文言を使う。番号はスライド計画 v2。

| 項目 | 要旨 | 使う箇所 |
|---|---|---|
| 1 | 一律に禁止せず、目的に応じて「生成AIについての学び」「生成AIを用いた学び」「生成AIによらない学び」をそれぞれ推進する | 7-6 上段／1-2 |
| 2 | 授業での利用は目的に合致することが前提で、合致するかは担当教員が判断する。教育目標の達成が大きく損なわれる授業では、利用を禁止・制限できる | 7-6 |
| 3 | 禁止・制限するときはシラバス等に明記する。理由を受講生にわかりやすく説明することが望まれる | 7-6 |
| 4 | 出力と人間が作成したものを完全に識別する方法は確立されていない。評価方法の変更、複数の方法による評価、レポート課題の設定の工夫で適切に評価する | 7-4 |
| 5 | 学生の留意点（教員は受講生に周知する）：個人情報や機密情報は入力しない（公開されても差し支えない情報のみ）／未公表の研究計画や研究成果の入力は情報漏洩の危険／出力に誤った情報や偏った情報が含まれる場合がある／著作権侵害や剽窃等の問題が生じるおそれ | 1-6（絶対NG3点の根拠）、3-4、7-5、7-6、自己チェック④ |
| 6 | 学生に利用を認めるときは、外部サービス利用登録の有無や有料版・無料版などで成果物に差が生まれ得るため、公平性に配慮する | 7-6 |
| 7 | 教員は、総括情報保護管理責任者等による生成AI等の利用に関する通知等を参照し、遵守する | 7-6、3-4（学生のレポートを扱う場合） |

**指針に書かれていないこと**：教職員が個人情報・機密情報を入れてよい基盤、成績情報の扱い。これらは項目7の通知の側にあるはずなので、文書名・日付・該当箇所を確認するまでスライドに載せない。
