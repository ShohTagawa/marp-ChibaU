# 全学データ活用基盤 徹底比較分析 ―― 「最終的にどちらが良くなるか」

**対象組織**：千葉大学（職員約3,000人・Google Workspace＋Box 全学導入済み・Office 365 併用）
**作成**：2026年6月21日 / 情報部門向け
**問い**：データ基盤＋AIエージェント基盤として、(A) GCP/Gemini Enterprise 中核、(B) 個社組合せ（HULFT＋Databricks＋Snowflake）、(C) Microsoft Azure/Fabric 中心 ―― どれが「今」、そして「3〜5年後」に良くなるか。

> 本書は5観点の並列調査（GCP / 個社組合せ / Microsoft / AI推論コスト / ロックイン・TCO戦略）を統合したもの。価格は2026年6月時点・定価ベース。実導入時は見積で再確認。

**不変の前提（動かさない条件）**：①**Box は今後も全学のデータ置き場として継続**（研究データ・Office系ファイルの中核。移行しない）②Office 365（Word/Excel/Teams）も UI・ファイルとして継続③既存SaaS約10は残す。つまり本検討は「これらの上に、データ基盤とAIをどう最小限で足すか」であり、Box・Officeを置き換える話ではない。

---

## エグゼクティブサマリ（先に結論）

**結論：本学では (A) GCP/Gemini Enterprise 中核が「今も、3〜5年後も」最有力。**

理由は3つの構造変化に集約される。

1. **Iceberg大収束（2026年3月完成）でデータ形式のロックインが消えた。** データをオープン形式（Apache Iceberg）でオブジェクトストレージに置けば、クエリエンジン（BigQuery / Snowflake / Databricks / Fabric）は後から交換可能。**「最初にどれを選ぶか」の失敗コストが激減した** → 既存資産に最も近いBigQueryで小さく始めるのが最小リスク。

2. **AI推論コストは急落（2023→2026で約94.5%減）し、モデルは毎年入れ替わる。** 特定ベンダーのAIに長期固定するのは不利。Gemini Enterprise Agent Platform は Model Garden で **200以上のモデル（Gemini・Claude・Gemma 等）を差し替え可能** で、この潮流に乗れる。

3. **TCOを決めるのはライセンス費ではなく「運用人件費」。** 本学のように専任データエンジニアを多数抱えにくい組織では、**サーバレスで運用が軽いBigQuery** が実質コストを最小化する。個社案（B）はクラスタ/ウェアハウスの常時チューニングに専門人材が要り、過剰。

**教育機関価格でAの優位はさらに拡大**：本学はWorkspace for Education運用のため、Gemini in Workspace の主要機能と **Workspace Studio（ノーコードAgent作成）が無償同梱**。プレミアムも Google AI Pro for Education 約$132/人/年と商用の1/3以下。対して **Snowflake/Databricks は本番運用の教育割引が無い**（無償なのは授業・研究用のみ）。詳細は §6。

**両端の整理**：
- **(B) 個社組合せ**＝超大規模・マルチクラウド義務・専任DEチームを持つ大企業の教科書設計。本学では機能・コスト・運用すべてで過剰。
- **(C) MS単独**＝Workspaceを捨ててMicrosoftに寄せ切るなら成立。中途半端な併存は **二重投資**（M365 Copilot $30/人/月の純増）になり、しかもデータ基盤をGoogle側に置くとCopilot最大の強み（文脈統合）が死ぬ。

**進め方**：BoxコネクタでのPoC（追加契約ゼロ）→ BigQuery（Iceberg有効化）で可視化 → ノーコードでエージェント → 全学。**可逆性3原則**（Icebergで保管 / 連携はMCP・A2A経由 / egress試算をRFPに明記）を守れば、3〜5年後に別エンジンが優位になっても乗り換えコストはほぼゼロ。

---

## 0. システム構成図（4案）

### 案A：GCP / Gemini Enterprise 中核（直結・推奨）

```
 既存資産                取り込み/参照          基盤・AI                出口
┌──────────────┐      ┌───────────┐      ┌──────────────────┐    ┌──────────┐
│ Google       │─────▶│ ネイティブ  │─────▶│ Gemini Enterprise │───▶│ 職員・現場 │
│  Workspace   │      │ コネクタ /  │      │  (検索・エージェント)│    │ Looker/  │
│ Box          │─────▶│ MCPサーバー │      │  ＋ BigQuery      │    │ Sheets   │
│ 既存SaaS(10) │      │ (50+ GA)   │      │  (分析・必要時のみ) │    │          │
└──────────────┘      └───────────┘      └──────────────────┘    └──────────┘
                                            ▲ Model Garden 200+ (Gemini/Claude/Gemma)
 追加契約：最小（Boxは直結・重い分析だけBigQuery）／運用：サーバレス（人手最小）
```

### 案B：個社組合せ（HULFT→Databricks→Snowflake→AIが参照）

```
┌────────┐   ┌───────┐   ┌─────────────┐   ┌────────────┐   ┌─────────────┐
│SaaS/Box │──▶│ HULFT │──▶│ Databricks   │──▶│ Snowflake  │──▶│ Google/MSの │
│         │   │(連携) │   │ (データレイク) │   │ (データ基盤) │   │ AIが参照     │
└────────┘   └───────┘   └─────────────┘   └────────────┘   └─────────────┘
 追加契約：3つ（HULFT＋Databricks＋Snowflake）／運用：3ベンダー分の専任体制が必要
 ※ DatabricksもSnowflakeも取込・ガバナンス・AIを内蔵 → 役割が重複し冗長
```

### 案C：Microsoft Azure / Fabric 中心

```
┌──────────────┐   ┌──────────────────┐   ┌─────────────────┐
│ Office 365    │──▶│ Microsoft Fabric  │──▶│ M365 Copilot /   │
│ (Word/Excel/  │   │ (OneLake/Fabric IQ)│   │ Copilot Studio   │
│  Teams)       │   │ ＋ Azure AI Foundry│   │ (エージェント)     │
└──────────────┘   └──────────────────┘   └─────────────────┘
 ▲ ただし Google Workspace/Drive/Gmail の資産はFabric/Copilotから直接見えない（要カスタム連携）
 追加契約：M365 Copilot $30/人/月が純増（Workspaceと二重投資）
```

### 推奨ターゲット構成（可逆性を組み込んだ案A）

```
 Google Workspace（既存）──Admin export / Connected Sheets──┐
                                                            ▼
 Box（既存）──Boxコネクタ / Box AI──────────────▶  BigQuery（Iceberg管理テーブルを有効化）
                                                            │  └ データはGCS上にIceberg形式で保管
                                                            ▼     （= 将来エンジン乗換コスト≒0）
                                            Gemini Enterprise / Agent Platform
                                            （Model Garden 200+・MCP/A2A経由でツール連携）
                                                            ▼
                                            Looker / Connected Sheets / 独自フロント
```
**設計思想**：①データはIcebergでGCSに置き特定エンジンに閉じ込めない ②エージェント連携はMCP/A2A標準を経由し特定AIベンダーに直結しない ③egress試算を事前に持ち判断を可逆にする。

---

## 1. 2026年の現状（3案の到達点）

### 1-1. GCP / Google（案A）

**2026年4月 Cloud Next '26 で大再編**：
- **Vertex AI → Gemini Enterprise Agent Platform** に改名・統合（既存顧客は移行不要）。**Agentspace は Gemini Enterprise（エンドユーザー向けアシスタント）に吸収**。フロント（Gemini Enterprise）＋ビルド基盤（Agent Platform）の二層構造。
- Agent Platform は Build（**Agent Studio ノーコード** / ADK コードファースト / Agent Garden テンプレート）、Scale、Govern（Agent Identity/Registry/Gateway）、Optimize（Simulation/Evaluation/Observability）を備える。**Model Garden で200以上のモデル**（Gemini 3.1 Pro/Flash、Gemma 4、**Claude Opus/Sonnet/Haiku** 等）にアクセス可。
- **Gemini 3.1 Pro はコンテキスト長 1M〜2Mトークン**（GA）。

**BigQuery**：
- **Apache Iceberg マネージドテーブル（BigLake Iceberg）コア機能 GA**（タイムトラベル・列レベルセキュリティ・スキーマ進化・DML）。一部（マルチステートメントTx・パーティショニング）はプレビュー。
- **Lakehouse Federation GA**（AWS Glue / Databricks / Snowflake / SAP に接続）。
- **Agentic Data Cloud / Knowledge Catalog（旧 Dataplex、2026/4/10改名）GA** ―― データの意味を自動抽出しセマンティックグラフを構築。
- **Comments to SQL（自然言語→クエリ）GA**、**Gemini ネイティブ埋め込み GA**。`AI.PARSE_DOCUMENT`（OCR＋チャンキングをSQL関数で）はプレビュー。
- **Connected Sheets × BigQuery ML** に TimesFM 予測機能追加（2026/2）→ SQL不要で職員がデータ予測。

**コネクタ・標準**：
- **Google管理 MCP サーバー 50以上 GA**（BigQuery / Cloud Storage / Gmail / Drive 等）。**A2A プロトコル v1.0 本番**（150超の組織採用）。
- **Box データストア連携は利用可**（フェデレーション検索／取込、Box内 PDF/PPTX/XLSX/CSV を直接解析、Box権限を継承）。
- ⚠️ **正直な留保点**：**SharePoint / OneDrive / Outlook 等のMicrosoft 365コネクタは2026年中盤時点でパブリックプレビュー**。Office文書中心の事務部門で「今すぐフル本番」は時期尚早。ノーコードのエージェント構築・発行も一部プレビュー→2026年内にGA見込み。

出典：[Cloud Next '26 Wrap-up](https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up) / [Gemini Enterprise Agent Platform](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform) / [BigQuery Iceberg](https://docs.cloud.google.com/bigquery/docs/iceberg-tables) / [Google-managed MCP servers GA](https://cloud.google.com/blog/products/ai-machine-learning/google-managed-mcp-servers-are-available-for-everyone) / [Connect Box (Gemini Enterprise)](https://docs.cloud.google.com/gemini/enterprise/docs/connect-box)

### 1-2. Snowflake / Databricks / HULFT（案B）

- **Snowflake**：Cortex Agents GA、Snowflake Intelligence（業務エージェント／Gmail・Slack等へのMCPコネクタはプレビュー）、**Openflow がGCP対応＋BigQueryコネクタ追加**（＝皮肉にも Snowflake→BigQuery 移送路にも読める）、**Iceberg v3 本番対応**、Horizon/Polaris カタログで双方向Iceberg相互運用。FY2026総収益 $4.68B（+29%）。
- **Databricks**：**Agent Bricks GA**（OpenAI/Anthropic/Google/OSS を Unity Catalog 一元管理、MCPネイティブ）、Genie GA（月150 DBU無料→2026/7従量）、**Lakebase**（Neon買収のサーバレスPostgreSQL）でOLTPまで取り込みフルスタック化。ARR $5.4B（+65%）。
- **HULFT**：HULFT Square 2025.3（2026/3）で動的スケーリング・Snowflake VPCエンドポイント（東京）対応等。iPaaS＋EAIをカバーするが、スケールするデータエンジニアリングでは Databricks/Snowflake に機能が及ばない。

**両巨頭は「AI実行基盤」として正面衝突**（SnowflakeはSQL/アナリスト層から上昇、DatabricksはMLエンジニア層から下降）。**2028年までに中規模組織は「どちらか1社で完結」が主流**になる見込み。両方＋HULFTを別契約する構成は、取込・ガバナンス・AIが**三重に重複**する。

出典：[Snowflake Summit 2026 まとめ](https://atlan.com/know/snowflake/summit-2026-announcements/) / [Snowflake Openflow](https://www.snowflake.com/en/product/features/openflow/) / [Databricks Agent Bricks](https://www.databricks.com/product/artificial-intelligence/agent-bricks) / [Databricks DAIS 2026](https://qubika.com/blog/everything-databricks-announced-dais-data-ai-summit-2026/) / [HULFT Square リリースノート](https://www.hulft.com/help/en-us/HULFTSquare/Content/TOP/releasenote.htm)

### 1-3. Microsoft Azure / Fabric（案C）

- **Microsoft Fabric**：OneLake GA、**Iceberg共有（Snowflake相互運用）GA（2026/2）**、Direct Lake GA、**Fabric IQ（セマンティック/オントロジー層）GA（2026/5 Build）**、Fabric Data Agents GA、Purview統合 GA。Fabric IQ Ontologies・HorizonDB（エージェント向けDB）はプレビュー。
- **M365 Copilot**：エンタープライズ $30/人/月（E3/E5前提）、Agent Mode（Word/Excel）GA（2026/3）。Copilot Studio はエンタープライズに同梱、外部向けは $200/月（25,000クレジット）。
- **Azure AI Foundry**：GPT-4o / GPT-5系 / Llama / Mistral / DeepSeek / Grok 等を従量課金。

**強み**：M365ネイティブ連携（Word/Excel/Teams/Outlookの文脈横断）、Purview一本の統合ガバナンス、教育機関の導入実績。
**弱み（本学前提）**：**Workspace併存だと二重投資**（M365 Copilot $30/人純増）。**Google Drive/Gmail資産はFabric/Copilotから直接参照不可**（要カスタム連携）。Fabric IQ Ontologies・HorizonDB等の中核がまだプレビューで実用期は2026末〜2027。

**急所**：Copilotの最大の強みは「文脈の統合」。**データ基盤をGoogle側に置くとこの強みが死に、Copilotは単なる文書操作AIに留まる**。逆にGeminiはWorkspace（Business Standard $14/人/月）に標準同梱され、Workspace基盤の組織には費用対効果で勝る。

出典：[Fabric Pricing 2026](https://www.synapx.com/blogs/microsoft-fabric-pricing-guide-2026/) / [M365 Copilot Pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing) / [Build 2026: Fabric Data Agents](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/) / [Google Workspace vs M365 2026](https://www.ciotech.us/microsoft-365-vs-google-workspace-better-decision-2026/)

---

## 2. AI推論コストの構造と展望

「データ基盤の上にAIを載せる」意思決定は、推論コストの動きに強く依存する。

### 2-1. 単価は急落している（LLMflation）

トークン単価（$/100万トークン）の推移と最新モデル：

| モデル | 時期 | 入力 | 出力 |
|---|---|---:|---:|
| GPT-4 | 2023/3 | $30 | $60 |
| GPT-4o | 2024/5 | $2.50 | $10 |
| GPT-4o mini | 2024/7 | $0.15 | $0.60 |
| Gemini 2.5 Flash | 2024末 | $0.15 | $0.60 |
| **Gemini 3.1 Pro**（2026） | 2026 | $2.00 | $12.00 |
| **Gemini 3.5 Flash**（2026/5/19・最新） | 2026 | **$1.50** | **$9.00** |
| **Claude Sonnet 4.6** | 2026 | **$3.00** | **$15.00** |
| Claude Opus 4.8（参考・最上位Opus） | 2026 | $5.00 | $25.00 |
| Claude Haiku 4.5（参考・小型） | 2026 | $1.00 | $5.00 |
| GPT-5 nano（最安級） | 2026 | $0.05 | $0.40 |

※ 割引：**Gemini 3.5 Flash** はキャッシュ入力 $0.15／Batch・Flex で **−50%**。**Claude** はプロンプトキャッシュ読取 **約0.1×**・Batch API **−50%**。実運用ではキャッシュ＋バッチで体感単価はさらに下がる。

- フロンティア級モデルの平均出力単価指数：**2023/3=100 → 2026=5.5（約94.5%減）**。最新の高性能Flash級（Gemini 3.5 Flash $9/出力）でも、2023年のGPT-4（$60）比で **約1/7**。
- Epoch AI：**同等性能のコストは年10〜900倍（中央値で年200倍）低下**。GPT-3（2021, $60）→ Llama 3.2 3B 相当（$0.06）で **1000倍**（MMLU 42水準）。
- 要因は GPU 進化に加え、量子化・蒸留・小型モデルの性能向上・オープンソース競争（アルゴリズム効率の寄与が最大）。

### 2-2. 逆風：使用量は増える

- **推論（reasoning）モデルのトークン膨張**：思考トークンが出力単価で課金され、コスト乗数 **10〜30倍**。
- **エージェントの多段実行**：「エージェントはチャットの50倍トークンを消費」。コンテキスト累積で実質 8〜15倍、API連鎖が増えると **O(n²)** で膨張。
- 削減技術：プロンプトキャッシュ（最大90%オフ）、バッチ（−50%）、蒸留、オープンウェイト自前ホスト（<$0.10/100万トークン）。

### 2-3. 含意（本学・3,000人規模）

- 現行 Gemini 2.5 Flash 相当で、1人あたり月100万出力トークン利用 ≒ **$0.60/人/月 = 年$7.2/人 → 3,000人で年約$21,600**。2〜3年で単価が更に10倍下がれば年$2,160規模も視野。
- ただし **エージェント多用・推論モデル採用でこの試算は一気に10〜50倍** に跳ねうる。総コストは「単価↓ × 使用量↑」の綱引き。賢いアーキテクチャ（キャッシュ・モデルルーティング・ループ最適化）で制御可能な水準。
- **戦略的核心**：最安・最高性能のモデルは半年で変わる。**特定モデル/ベンダーへの長期固定は危険**。APIレイヤーを抽象化しモデルを差し替えられる基盤が、専用AI基盤への固定より明確に有利。長期投資サイクルを持つ大学に特に当てはまる。
- → この点で **Gemini Enterprise Agent Platform（Model Garden 200+・Claude含む）/ Databricks Agent Bricks（マルチモデル）** は条件を満たす。重要なのは「AIの頭脳」より、**データと人材が既にある場所に基盤を置く**こと。

出典：[a16z LLMflation](https://a16z.com/llmflation-llm-inference-cost/) / [Epoch AI 推論価格トレンド](https://epoch.ai/data-insights/llm-inference-price-trends) / [arXiv 2511.23455](https://arxiv.org/html/2511.23455v1) / [LeanOps: Agents burn 50x tokens](https://leanopstech.com/blog/agentic-ai-cost-runaway-token-budget-2026/) / [GMI Cloud: 推論コスト最適化](https://www.gmicloud.ai/en/blog/llm-inference-cost-optimization-caching-batching-routing)

---

## 3. ロックインと Iceberg 収束（＝判断の可逆性）

**2026年3月、Apache Iceberg を軸とした「大収束」が完成した。**

- Databricks Unity Catalog が Iceberg REST Catalog 双方向相互運用 GA（2025）、AWS S3 Tables GA、Snowflake が Polaris をOSS化、BigQuery がマネージドIcebergテーブル GA。**2026/3/5 に Snowflake × Microsoft Fabric が Iceberg v3 で完全双方向相互運用**を発表。
- **意味**：データを Iceberg 形式でオブジェクトストレージ（GCS/S3）に置けば、**クエリエンジンは後から交換できる**。乗り換えコストは「クエリ方言の翻訳」（500クエリで20〜40時間）が主体で、**データ移行コストは事実上ゼロに近づく**。
- **ロックインの本質は「フォーマット」から「ヒト・ワークフロー・AI統合」へ移った。**

**egress（下り転送）コスト**：AWS $0.09/GB、Azure $0.087、GCP $0.12（最初の1TB）、クロスクラウド $0.02〜0.09。数十〜数百TBの大学規模で乗り換えると **数百万〜数千万円** になりうる（※ EU Data Act の影響で「完全退出」時のegress免除が主要各社で進行）。→ **データを置く場所は既存資産に近い方が有利**（Workspace/Box が Google 寄り → BigQuery が最短・最小egress）。

**相互運用標準（MCP / A2A）**：
- **MCP**（Anthropic, 2024/11）：月9,700万SDKダウンロード・1万超サーバ、2025/12にLinux Foundation（AAIF）へ。
- **A2A**（Google, 2025/4）：Linux Foundation寄贈、2026初頭 v1.0、**150超の組織が本番採用**（AWS・Microsoft・Salesforce・SAP等）。
- → エージェント連携が TCP のように標準化。Workspace・BigQuery は MCP 対応エコシステムに既に組み込まれ、**既存データとAIをつなぐ最短経路がGoogle側で整っている**。

出典：[Databricks Iceberg v3](https://www.databricks.com/blog/next-era-open-lakehouse-apache-icebergtm-v3-public-preview-databricks) / [Snowflake×Fabric Iceberg相互運用](https://analyticsweek.com/apache-iceberg-zero-copy-snowflake-fabric-2026/) / [Cloud Egress Fees 2026](https://www.stmicro.net/blog/cloud-egress-fees-hidden-costs-2026/) / [MCP & A2A エコシステム](https://neuralwired.com/2026/03/03/model-context-protocol-mcp-agent-economy/) / [A2A protocol](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)

---

## 4. TCO の実態 ―― 何が本当に効くか

**ライセンス費は氷山の一角。** データ基盤TCOの構造：

| コスト要因 | 実態 |
|---|---|
| ライセンス・クエリ料金 | 把握しやすいが「見積比2〜3倍」になりやすい |
| **専任データエンジニア** | **最大の隠れコスト**。年800〜1,500万円/人 |
| egress・アイドルリソース | 60%の組織が事前に過小評価 |
| 移行作業（人件費・並行稼働） | 30〜50%過小評価される |
| チューニング・ガバナンス維持 | BigQueryは自動スケールで省ける／Databricksはクラスタ管理が必要 |

- 基盤「そのもの」の費用（BigQuery / Fabric の容量）は **年100万円規模で総額に対し誤差**。**差は「契約数 × 運用人件費」で開く**。
- 中規模実例：Snowflake 年$36K vs Databricks 年$28K だが、移行工数（Spark SQL差異）60〜100時間で差額が消えうる。大規模事例「Snowflake+Databricks → BigQuery 移行」は年$924K削減の報告もある（※大企業事例、規模で条件は異なる）。
- **大学特有のリスク**：専任DEを雇用しにくい場合、**フルマネージド・サーバレス寄り（BigQuery）の方が実質TCOを下げやすい**。案B（3ベンダー運用）は人件費でTCOが膨らむ最たる例。

出典：[Cloud TCO 2025-2026](https://www.datastackhub.com/insights/cloud-tco-total-cost-of-ownership-statistics/) / [Snowflake vs Databricks 2026](https://tech-insider.org/snowflake-vs-databricks-2026/) / [Back Market: → BigQuery移行](https://cloud.google.com/blog/topics/customers/back-market-migrates-from-snowflake-and-databricks-to-bigquery)

---

## 5. 3〜5年の予測と最終判断

### 5-1. 何が勝敗を決めるか（構造のまとめ）

| 要因 | 2026→2029の方向 | 効いてくる案 |
|---|---|---|
| データ形式 | Iceberg収束で**ロックイン消滅**・乗換可逆に | どの案でも可逆 → **最初の失敗コストが激減**（Aで小さく始めて損なし） |
| 推論単価 | **急落継続**（年10〜50倍）、モデルは毎年交代 | **モデル差し替え可能な基盤**が有利（A:Model Garden / B:Agent Bricks） |
| 使用量 | エージェント普及で**増大**（10〜50倍） | キャッシュ・ルーティングで制御。基盤の柔軟性が効く |
| 標準化 | MCP/A2A が事実上の標準に | **Google側が最短経路**（既存Workspace/Box資産に近い） |
| TCO | 人件費・運用が支配的 | **サーバレスで運用が軽いA**が最小、**3ベンダーのBが最大** |

### 5-2. 最終判断（本学＝Workspace＋Box＋Office併存）

**(A) GCP/Gemini 中核が「今も3〜5年後も」最有力。** 4つの理由がいずれも時間とともに強まる：

1. **運用が最も軽い**（サーバレス＝専任DE不要）→ TCOの支配項である人件費を最小化。
2. **既存資産に最も近い**（Workspace/Box）→ egress・連携構築が最小、ゼロコピーに最も近い。
3. **可逆**（Iceberg）→ もし将来別エンジンが優位でも、データ移行コスト≒0で乗り換えられる＝**今Aを選ぶリスクが構造的に低い**。
4. **モデル柔軟**（Model Garden 200+・Claude含む）→ 推論デフレと毎年のモデル交代に乗れる。

**(B) 個社組合せは過剰。** 機能が三重に重複し、3ベンダーの運用人件費でTCOが最も膨らむ。合理化されるのは「超大規模ML・マルチクラウド義務・専任DEチーム」を持つ組織のみ ―― 本学はいずれにも当てはまらない。**必要になった時点で BigQuery の隣に足せばよい**（Lakehouse Federation / Iceberg で共存可能）。

**(C) MS単独は二者択一。** Workspaceを捨てMicrosoftに全面移行するなら一貫性が出る。だが現状の併存のままCopilotを足すと **$30/人/月の純増（二重投資）** で、しかもデータ基盤をGoogle側に置く限りCopilotの強み（文脈統合）が活きない。**Office/Teams/Word/Excel は「UI・ファイル」として残し、データ基盤とAIはGoogle側**、という現在の割り切りが費用対効果で最良。

### 5-3. リスクと留保（公平に）

- **GCPの弱点**：M365コネクタ（SharePoint/OneDrive/Outlook）が**2026年中盤時点でパブリックプレビュー**。事務文書中心の本番投入は GA を待つ判断もあり得る。エンタープライズAIの従量課金は規模次第で予測が難しい → **PoCで実測**してから全学展開。
- **再評価の条件**：①専任データエンジニア部隊を本格的に持つ ②ペタバイト級ML/DEが常態化 ③マルチクラウド義務が課される ―― このいずれかが現実になれば、DatabricH/Snowflake の追加を再検討。

### 5-4. 進め方（可逆性を保つ）

1. **STEP1**：BoxコネクタでAI検索PoC（**追加契約ゼロ**、数週間）。
2. **STEP2**：部署データを BigQuery（**Iceberg管理テーブルを有効化**）に必要分だけ載せ、Connected Sheets/Looker で可視化（小規模）。
3. **STEP3**：ノーコード（Agent Studio）で業務エージェントを現場が自作・横展開。
4. **STEP4**：全学展開・基幹/自動化連携。**MCP/A2A経由**で外部ツールと結合。

**可逆性3原則**：①データは Iceberg で GCS に置く ②エージェント連携は MCP/A2A を経由 ③egress試算を事前に持ち RFP に明記。これで「最初の選択を間違えても安く引き返せる」状態を担保する。

---

## 6. アカデミック価格の反映（教育機関向け）

本学は教育機関のため、教育向け価格・無償枠が使える。これは**案Aをさらに有利にする**（Googleは中核AIが実質バンドル／Snowflake・Databricksは本番運用の教育割引が無い）。

**Google（案A）― 多くが既に無償/バンドル**
- **Gemini in Workspace の主要機能は Workspace for Education 各エディションに無償同梱**（Education Fundamentals=Gmail要約・下書き、Education Plus / Teaching & Learning アドオン=Docs/Slides/Forms/Vids/Sheets）。本学は既にWorkspace運用のため、**追加費用ゼロで多くのAI機能が使える**。
- **Workspace Studio（ノーコードAIエージェント作成）は全Education版のコアサービスとして無償**。＝「現場が自分でエージェントを作る」が **$0** で始められる（案Aの⑥現場拡張がアカデミックでは無料）。
- **Google AI Pro for Education**（プレミアム有料アドオン／Deep Research・NotebookLM拡張・Meet要約・DLP強化等。対象=Education Fundamentals/Standard/Plus）：**約$132/人/年水準（要見積）**。商用 Gemini Enterprise Standard（$360/人/年）の **約1/3以下**。
- **Google Cloud 教育/研究クレジット**（Teaching & Learning credits・Research credits）で BigQuery 等の従量費用を相殺可（教職員・院生・研究者対象、要申請、4-6週で審査）。
- **Gemini Enterprise SDK（独自フロント前提のエージェント運用基盤）の教育機関向け見積価格（ベンダー提示）**：**学生 ¥600/月（＝¥7,200/年）／教職員 ¥2,800/月（＝¥33,600/年）**。
  - **実際の配布規模（重要）**：フル配布する教員は **全学で約100名**（全教職員3,000人にフル配布するわけではない）。→ 教員フル席 ＝ 100名 × ¥33,600 ＝ **約336万円/年**。学生は（配布学生数 × ¥7,200/年）で必要分のみ。残りの教職員・学生は **Workspace無償ベースライン（Gemini in Workspace / Workspace Studio）** でカバー。
  - ⚠️ **少数配布ではGeminiが圧倒的に有利**：M365 Copilot（教育版）は **300席最小**のため、100名規模ではアドオン購入の最小要件を満たさず300席分の支払いが必要。Gemini Enterprise SDK は**必要人数だけ配布でき、100名で約336万円/年**に収まる。
  - ⚠️ **過去試算の補正**：別資料20260611の「SDK ¥7,200/人/年＝年2,160万円」は学生レートを3,000人に、前ターン本書の「約1.0億円/年」は教職員レートを3,000人に当てた数字で、**いずれも配布規模の前提が過大**。実態は配布対象を絞れる（下表）。同デックの費用比較スライドは要更新。

**■ 配布シナリオ別の全学試算（実人数・令和7年5月1日現在）**

人数の根拠（千葉大学公表値）：学部生 **10,450**／大学院生 **3,472**（＝学生全員 **13,922**）／役員・教職員 **3,658**（うち医療職 **1,450**＝病院の看護師等）。→ **教職員(医療系除く) ＝ 3,658 − 1,450 ＝ 2,208**。単価：学生 ¥600/月（¥7,200/年）、教職員 ¥2,800/月（¥33,600/年）。

| # | 配布対象 | 人数 | 単価(月) | 年額 |
|---|---|---:|---|---:|
| ① | 大学院以上学生（院生） | 3,472 | ¥600 | **約2,500万円** |
| ② | 教職員(医療系除く) | 2,208 | ¥2,800 | **約7,420万円** |
| ③ | 学生全員 ＋ 教職員(医療系除く) | 16,130 | ¥600/¥2,800 | **約1.74億円** |
| 参考 | 院生 ＋ 教職員(医療系除く) | 5,680 | ¥600/¥2,800 | 約9,920万円 |
| 参考 | 教員フル配布のみ（最小） | 100 | ¥2,800 | 約336万円 |

- **¥600（学生）プランでもAIエージェントを配布できる**（教室など限定範囲）。＝学生にも「チャットだけ」でなくエージェント機能を行き渡らせられるので、全員に¥2,800席を持たせる必要はない。
- **段階配布の現実解**：教員100名（約336万円）→ 院生＋教職員(医療系除く)（約9,920万円）→ 学生全員まで拡張（約1.74億円）と、規模に応じて伸ばせる。**Workspace無償ベースライン（Gemini in Workspace / Workspace Studio）が全員の底上げ**を担うため、有料席は「エージェントを本格運用する層」に絞れる。
- 医療職1,450名（病院看護師等）は配布対象外の前提。Microsoft案だと **M365 Copilotは300席最小**のため、①②のような層別の絞り込み配布が組みにくい（最小席数の支払いが先行）。

**Microsoft（案C）― 一部無償だがフルCopilotは有料アドオン**
- **Copilot Chat は A1/A3/A5 に無償**（教職員・13歳以上の学生、組織アカウントでサインイン時）。
- **フルの M365 Copilot は A3/A5 の有料アドオン：教育向け約$18/人/月（≒$216/人/年）**（2025/12〜、300席最小、教職員向け）。商用$30より割安だが、**ベース（A3/A5）＋座席アドオン**である点と、Workspace併存時の二重投資の構図は変わらない。

**Snowflake / Databricks（案B）― 本番運用の教育割引は実質なし**
- 両社の教育プログラム（Snowflake for Academia / Databricks University Alliance）は**「授業・学習・研究用の無償アクセス＋カリキュラム・認定」**に限られ、**全学の本番データ基盤としての価格優遇ではない**。本番運用は商用価格（参考：Snowflake SMB平均≒$127K/年、Databricks SMB平均≒$193K/年水準）。→ **案Bの費用劣位はアカデミック前提でむしろ拡大する**。

出典：[Bett 2026 Premium AI for Education](https://blog.google/products-and-platforms/products/education/bett26-premium-ai/) / [Google AI Pro for Education](https://workspaceupdates.googleblog.com/2025/09/google-ai-pro-for-education.html) / [Google Cloud 教育クレジット](https://docs.cloud.google.com/billing/docs/how-to/edu-grants) / [Google for Education Research Credits](https://edu.google.com/intl/ALL_us/programs/credits/research/) / [M365 Copilot for Education アドオン](https://learn.microsoft.com/en-us/microsoft-365/education/guide/1-addons/addons-copilot) / [Snowflake for Academia](https://learn.snowflake.com/en/snowflake-for-academia/) / [Databricks University Alliance](https://www.databricks.com/university)

---

## 7. 補論：モデルに近い企業ほど有利か（垂直統合の優位）

「モデルに近い企業ほど有利」という主張は、**戦略論点として成立する**。要は、**最も有利なのは「frontierモデルの開発元＝クラウド＝アプリ＝既存ベンダーが一致する垂直統合スタック」に乗ること**。

### 7-1. 「近さ」が生む4つの実利

1. **新モデルの早期利用** … 開発元のプラットフォームは新モデルを最速で載せる（Model Gardenが自動更新）。
2. **第一者価格（中間マージンなし）** … モデル開発元が直接値付け。再販・ラッパー層を経由しない分、価格に乗る中間マージンが少ない。
3. **自社インフラ最適化の価格性能** … GoogleはTPUで自社モデルを動かすので、同等知能あたりの価格性能を出しやすい（Gemini 3.5 Flash $1.50/$9 の安さはその表れ）。
4. **最深の統合** … モデル⇄データ⇄アプリ⇄権限が同一スタック＝Box/Workspace/BigQueryを根拠にするグラウンディングが最短・最も安全。

### 7-2. 各社の「モデル近接度」

| 企業 | モデル | 近接度 |
|---|---|---|
| **Google** | Gemini（**自社開発**）＋BigQuery＋Workspace＋Agent Platform | **唯一のフル垂直統合**＝最も近い |
| Microsoft | OpenAI(GPT)に依存＋自社MAIも開発 | "半"垂直統合。ただし本学がMSに寄るとWorkspace二重投資 |
| Snowflake / Databricks | 自社モデルなし。OpenAI/Anthropic/GoogleをAPIで"借りる" | **モデルから一段遠い**（取り込み遅延・再販マージン） |
| Box | 自社モデルなしの**コンテンツ層**。Box AIはGoogle/OpenAIを借りる | モデルからは遠い → 「置き場」に徹するのが正解 |

### 7-3. 本学にとっての含意

本学は**Workspace＋Boxで既にGoogleに最も近い**。Geminiは自社モデルなので、frontierの**早期利用・第一者価格・最深統合**をそのまま享受できる。そして**Boxは永続のコンテンツ層として残し、その中身を“モデルに近い頭脳”であるGeminiが直接根拠にする** ―― これが「モデルに近い＝有利」を本学で具現化する形。Boxはモデルを持たない置き場なので、Boxに頭脳を期待せず、頭脳はGooge側に置くのが噛み合う。

### 7-4. 正直な反論と、その解（ロックインとの両立）

- **反論①「近さ＝ロックイン」** … モデルに寄せるほど抜けにくくなる。
- **反論②「推論はコモディティ化し、近さの価値は逓減」** … §2の通り単価は急落し、最安・最高性能のモデルは半年で交代する。
- **解** … **第一者のGeminiを主役にしつつ、Model Garden（200+・Claude Sonnet 4.6等を含む）でモデルを差し替え可能に保つ**。データはIceberg、エージェント連携はMCP/A2Aという開放層に置く。→ **「近さの利（早期・安い・深い）」を取りながら、「近さの害（ロックイン）」を開放標準で打ち消す**。

> **補論の結論**：「モデルに近い（垂直統合）ほど有利」は正しく、本学はその近さを既に持っている。条件は、一社のモデルに固定せず開放層（Iceberg／MCP／A2A）で可逆性を確保すること。近さの利を取り、近さの害を標準で消す——これが本学の最適姿勢。

---

## 付録A：価格早見表（2026年6月・★＝教育機関向け価格/無償枠）

| 区分 | 項目 | 価格 |
|---|---|---|
| 基盤(GCP) | BigQuery オンデマンド | $6.25/TiB（月1TiB無料）★教育/研究クレジットで相殺可 |
| 基盤(GCP) | BigQuery ストレージ | アクティブ $0.02/GB・長期 $0.01/GB |
| 基盤(MS) | Fabric F2 / F64 | 約$262 / 約$5,257（月） |
| 基盤(SF) | Snowflake クレジット | $2〜5/credit（GCP東京 +10〜50%）／★本番の教育割引なし |
| 基盤(DB) | Databricks DBU | AI/ML $0.07・SQL ≒$0.75/DBU／★本番の教育割引なし |
| ★AI席(G) | Gemini in Workspace（主要機能） | **無償同梱**（Education 各版） |
| ★AI席(G) | Workspace Studio（ノーコードagent） | **無償**（全Education版コアサービス） |
| ★AI席(G) | Google AI Pro for Education | 約$132/人/年（要見積・プレミアム） |
| ★AI席(G) | Gemini Enterprise SDK（教育・見積） | **学生 ¥600/月（¥7,200/年）／教職員 ¥2,800/月（¥33,600/年）**。フル配布教員=全学約100名→**約336万円/年** |
| 参考(G) | 商用 Gemini Enterprise | Business $21 / Standard $30 / Plus $50（/人/月・年契） |
| ★AI席(MS) | Copilot Chat | **無償**（A1/A3/A5・教職員/学生13+） |
| ★AI席(MS) | M365 Copilot（フル） | 約$18/人/月＝≒$216/人/年（A3/A5アドオン・300席最小） |
| 推論(G) | Gemini 3.5 Flash（最新） | 入力$1.50 / 出力$9.00（/100万tok）。キャッシュ入力$0.15・Batch −50% |
| 推論(G) | Gemini 3.1 Pro | 入力$2 / 出力$12（<200K）。Batch −50% |
| 推論(Claude) | Sonnet 4.6 / Opus 4.8 / Haiku 4.5 | $3/$15 ・ $5/$25 ・ $1/$5（キャッシュ読取 約0.1×・Batch −50%） |
| 推論(MS) | GPT-4o / GPT-5 nano | $2.50/$10 ・ $0.05/(入力) |

## 付録B：高等教育セクターの動向

- M365/Teams は国内大学のキャンパスライセンスでシェア大。Google Workspace for Education は2025/3より全プランにGemini無償統合。
- 東京大学はオンプレ→M365 Copilot/RAG構築を推進（AXIES 2024）。一方でWorkspace採用大学も多い。
- **学認（GakuNin）クラウド**（NII仲介）は GCP/AWS/Azure すべて対応、GakuNin RDM が研究データ基盤、SAML連携で認証統一可。→ どの基盤でも学認スキームに乗せられる。

出典：[BigQuery Connected Sheets×TimesFM](https://workspaceupdates.googleblog.com/2026/02/forecast-data-in-connected-sheets-BigQueryML-TimesFM.html) / [東京大学 生成AI環境整備 AXIES2024](https://axies.jp/_files/conf/conf2024/paper/12AM1B-2.pdf) / [学認クラウド NII](https://cloud.gakunin.jp/)

## 付録C：主要出典（再掲・分野別）

- **GCP**：[Cloud Next '26](https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2026-wrap-up) / [Agent Platform](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform) / [BigQuery Iceberg](https://docs.cloud.google.com/bigquery/docs/iceberg-tables) / [MCP servers GA](https://cloud.google.com/blog/products/ai-machine-learning/google-managed-mcp-servers-are-available-for-everyone) / [Connect Box](https://docs.cloud.google.com/gemini/enterprise/docs/connect-box) / [BigQuery価格](https://cloud.google.com/bigquery/pricing)
- **Snowflake/Databricks/HULFT**：[Snowflake Summit 2026](https://atlan.com/know/snowflake/summit-2026-announcements/) / [Agent Bricks](https://www.databricks.com/product/artificial-intelligence/agent-bricks) / [DAIS 2026](https://qubika.com/blog/everything-databricks-announced-dais-data-ai-summit-2026/) / [HULFT Square](https://www.hulft.com/help/en-us/HULFTSquare/Content/TOP/releasenote.htm) / [SF vs DB vs BQ 2026](https://technologymatch.com/blog/snowflake-vs-databricks-vs-bigquery-a-guide-for-it-leaders-in-2026)
- **Microsoft**：[Fabric Pricing 2026](https://www.synapx.com/blogs/microsoft-fabric-pricing-guide-2026/) / [M365 Copilot Pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing) / [Build 2026](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/)
- **推論コスト**：[a16z LLMflation](https://a16z.com/llmflation-llm-inference-cost/) / [Epoch AI](https://epoch.ai/data-insights/llm-inference-price-trends) / [arXiv 2511.23455](https://arxiv.org/html/2511.23455v1)
- **ロックイン/TCO**：[Iceberg v3](https://www.databricks.com/blog/next-era-open-lakehouse-apache-icebergtm-v3-public-preview-databricks) / [SF×Fabric相互運用](https://analyticsweek.com/apache-iceberg-zero-copy-snowflake-fabric-2026/) / [Cloud TCO 2026](https://www.datastackhub.com/insights/cloud-tco-total-cost-of-ownership-statistics/) / [egress 2026](https://www.stmicro.net/blog/cloud-egress-fees-hidden-costs-2026/)

---

*本分析は2026年6月の公開情報・ベンダー資料に基づく検討用たたき台。価格・GA状況は流動的につき、調達時に最新の見積・GA状況で再確認すること。プレゼン用スライドは同フォルダの `20260621_DataInfra_GCP-vs-vendors.md`（PDFは `out/`）を参照。*
