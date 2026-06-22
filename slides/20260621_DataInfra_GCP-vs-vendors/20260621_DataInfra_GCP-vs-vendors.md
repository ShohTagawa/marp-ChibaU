---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">全学データ基盤の構成比較</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  :root {
    --hdr-left-w: 27%;
    --hdr-gap: -4px;
  }
  /* 比較表を読みやすく：4列でも詰まりすぎないよう調整 */
  .fig-area table { font-size: 19px; }
  .fig-area td, .fig-area th { padding: 6px 10px; line-height: 1.35; }
  .ok { color: #1f8f6e; font-weight: 700; }
  .ng { color: #A6192E; font-weight: 700; }
---

<!-- _class: cover -->

# 全学データ活用基盤の<br>構成比較

## GCP / Gemini Enterprise を中核とする案<br>― 個社組合せ案・Microsoft Azure 案との比較

### 田川　翔
### 千葉大学 国際未来教育基幹 / アカデミック・リンク・センター

<div class="meta">2026年6月 / 情報部門向け 検討資料（たたき台）</div>

<!-- 本資料の目的を最初に宣言する：「どのデータ基盤を中核に据えるか」を、情報担当が判断できる材料に落とすこと。結論は『本学の前提ではGCP/Gemini Enterprise中核が最小投資で一気通貫』。本日はその根拠を7つの観点で示す。仮の将来構想を前提にした検討であることを断る。 -->

---

<!-- _class: summary -->

<div class="page-title">前提と出発点</div>

## 本学はすでに「土台」を持っている

<div class="sections">

<div class="sec-box">

### 導入済みの基盤

- Google Workspace（faculty.gs.chiba-u.jp）を全学運用
- Box を研究・業務データの置き場として全学導入
- Office 365（Word・Excel・Teams）も日常的に利用

</div>

<div class="sec-box">

### 残すべきシステム

- 既存SaaS 約10（教務・人事給与などの事務系）
- Office 365：文科省がMS前提の限り不可欠
- Box：データレイク的な中核ストレージ

</div>

<div class="sec-box">

### やりたい3つのこと

- ①データ活用（可視化・分析・ナレッジ発掘）
- ②業務フローの自動化（Power Automate等）
- ③AIエージェント・アプリで業務を高度化

</div>

</div>

<!-- 大前提：本学は「ゼロから基盤を作る」のではない。WorkspaceとBoxという土台がすでにある。だから問いは『その土台に何を最小限足すか』。残すシステムは動かさない前提で考える。 -->

---

<!-- _class: fig -->

<div class="page-title">検討している3案</div>

## 構成シナリオは大きく3つ

<div class="fig-area">

| | データ基盤 | AI・エージェント | データ連携 |
|---|---|---|---|
| **A：GCP中核** | BigQuery（必要時のみ）＋Box直結 | Gemini Enterprise | ネイティブ・コネクタ |
| **B：個社組合せ** | Databricks（レイク）＋Snowflake（基盤） | Google/MSのAIが参照 | HULFTで都度連携 |
| **C：MS Azure** | Microsoft Fabric / OneLake | Copilot / Azure OpenAI | M365ネイティブ |

</div>

<div class="caption">※ B案＝「SaaSのDB→HULFT→Databricks→Snowflake→AIが参照」というベンダー提案シナリオ</div>

<div class="takeaway">論点は「土台に何を足すか」。足す数が少ない案ほど有利</div>

<!-- B案は一見もっともらしいが、HULFT・Databricks・Snowflakeという3つの新規契約が前提。C案はMS純正で固まるが、本学はWorkspace中心なので二重投資になりがち。A案は既存基盤への追加が最小。この『追加の少なさ』が後の全観点に効いてくる。 -->

---

<!-- _class: message -->

# 結論：本学では<br>GCP / Gemini Enterprise 中核が最有力

## Workspace と Box が揃う本学なら、追加契約を最小化して一気通貫できる<br>Snowflake / Databricks は"あれば便利"だが、本学の規模・用途では必須でない

<!-- 先に結論を置く。理由は単純：本学はGoogle基盤の上に乗っており、Geminiは追加ライセンスだけで動く。Boxもネイティブに繋がる。Snowflake/Databricksは強力だが、それは『超大規模・マルチクラウド・専任データチーム』が前提の道具。本学の用途（3,000人・事務/教学データ）ではオーバースペックで、運用負担と費用が先に立つ。次章から7観点で裏づける。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# 全体像 ― データの流れ

## 「何段で繋ぐか」が複雑さ・費用・壊れやすさを決める

<!-- 評価の前に、2案のデータの流れを絵で比べる。情報担当が直感的に効くのは『経路の段数』と『契約の数』。ここが少ないほど、障害点が減り、運用が軽く、学ぶことも減る。 -->

---

<!-- _class: fig -->

<div class="page-title">アーキテクチャ比較</div>

## A案は「直結」、B案は「多段コピー」

<div class="fig-area">

<svg viewBox="0 0 1240 470" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="aG" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#1f8f6e"/></marker>
    <marker id="aK" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9aa0a6"/></marker>
  </defs>
  <!-- ===== 案A ===== -->
  <text x="30" y="40" font-size="20" font-weight="700" fill="#1f8f6e">案A：GCP / Gemini Enterprise 中核（直結）</text>
  <rect x="30" y="58" width="160" height="120" rx="10" fill="#E4F2EC" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="110" y="82" font-size="13" fill="#125642" text-anchor="middle" font-weight="700">既存の置き場</text>
  <text x="110" y="106" font-size="13" fill="#1f2937" text-anchor="middle">既存SaaS</text>
  <text x="110" y="128" font-size="13" fill="#1f2937" text-anchor="middle">Box</text>
  <text x="110" y="150" font-size="13" fill="#1f2937" text-anchor="middle">Workspace</text>

  <line x1="192" y1="118" x2="262" y2="118" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#aG)"/>
  <rect x="266" y="78" width="170" height="80" rx="10" fill="#fff" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="351" y="112" font-size="13.5" fill="#125642" text-anchor="middle" font-weight="700">ネイティブ</text>
  <text x="351" y="134" font-size="13.5" fill="#125642" text-anchor="middle" font-weight="700">コネクタ</text>

  <line x1="438" y1="118" x2="508" y2="118" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#aG)"/>
  <rect x="512" y="66" width="250" height="104" rx="10" fill="#1f8f6e"/>
  <text x="637" y="100" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">Gemini Enterprise</text>
  <text x="637" y="124" font-size="13" fill="#d7efe6" text-anchor="middle">＋ BigQuery（必要時のみ）</text>
  <text x="637" y="148" font-size="12.5" fill="#d7efe6" text-anchor="middle">検索・分析・エージェント</text>

  <line x1="764" y1="118" x2="834" y2="118" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#aG)"/>
  <rect x="838" y="86" width="150" height="64" rx="10" fill="#E4F2EC" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="913" y="124" font-size="14" fill="#125642" text-anchor="middle" font-weight="700">職員・現場</text>

  <rect x="1008" y="70" width="206" height="96" rx="10" fill="#F3F7F5" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="1111" y="98" font-size="13" fill="#125642" text-anchor="middle" font-weight="700">追加契約</text>
  <text x="1111" y="124" font-size="20" fill="#1f8f6e" text-anchor="middle" font-weight="700">最小</text>
  <text x="1111" y="148" font-size="11.5" fill="#6b7280" text-anchor="middle">Boxは直結／重い分析だけBQ</text>
  <line x1="40" y1="210" x2="1200" y2="210" stroke="#e3e7ea" stroke-width="1"/>
  <!-- ===== 案B ===== -->
  <text x="30" y="252" font-size="20" font-weight="700" fill="#6b7280">案B：個社組合せ（HULFT→Databricks→Snowflake→AI）</text>
  <rect x="30" y="276" width="120" height="110" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="90" y="324" font-size="13" fill="#374151" text-anchor="middle" font-weight="700">SaaS</text>
  <text x="90" y="346" font-size="13" fill="#374151" text-anchor="middle">／ Box</text>

  <line x1="152" y1="331" x2="208" y2="331" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="212" y="296" width="120" height="70" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="272" y="337" font-size="14" fill="#374151" text-anchor="middle" font-weight="700">HULFT</text>

  <line x1="334" y1="331" x2="390" y2="331" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="394" y="291" width="150" height="80" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="469" y="326" font-size="13.5" fill="#374151" text-anchor="middle" font-weight="700">Databricks</text>
  <text x="469" y="348" font-size="12" fill="#6b7280" text-anchor="middle">データレイク</text>

  <line x1="546" y1="331" x2="602" y2="331" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="606" y="291" width="150" height="80" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="681" y="326" font-size="13.5" fill="#374151" text-anchor="middle" font-weight="700">Snowflake</text>
  <text x="681" y="348" font-size="12" fill="#6b7280" text-anchor="middle">データ基盤</text>

  <line x1="758" y1="331" x2="814" y2="331" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="818" y="296" width="170" height="70" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="903" y="328" font-size="13" fill="#374151" text-anchor="middle" font-weight="700">Google/MSのAI</text>
  <text x="903" y="350" font-size="12" fill="#6b7280" text-anchor="middle">が参照</text>

  <rect x="1008" y="283" width="206" height="96" rx="10" fill="#FBEDE2" stroke="#E07B39" stroke-width="1.5"/>
  <text x="1111" y="311" font-size="13" fill="#9a5224" text-anchor="middle" font-weight="700">追加契約</text>
  <text x="1111" y="337" font-size="18" fill="#A6192E" text-anchor="middle" font-weight="700">3つ</text>
  <text x="1111" y="361" font-size="11.5" fill="#9a5224" text-anchor="middle">HULFT＋Databricks＋Snowflake</text>
</svg>

</div>

<div class="takeaway">経路が短く契約が少ないほど、安く・壊れにくく・学びやすい</div>

<!-- 上段A案：BoxやSaaSはネイティブコネクタでGeminiに直結。重い分析が要るデータだけBigQueryに置く。中継基盤を新たに買わない。下段B案：同じことをするのに、HULFT・Databricks・Snowflakeの3製品を経由＝3つの契約・3つの運用・3つの障害点。データも何度もコピーする。『DatabricksもSnowflakeも入れなくてもGCPでいける』を一枚で示す図。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# 7つの観点で比較

## 整合性・コスト・運用・学習・管理・現場・連携

<!-- ここからご依頼の7観点で一つずつ評価する。まず一覧で全体感を掴み、その後に効きの大きい観点（コスト・Box連携・Office連携・現場拡張）を深掘りする。 -->

---

<!-- _class: fig -->

<div class="page-title">7観点の一覧</div>

## 評価サマリ（3案 × 7観点）

<div class="fig-area">

| 観点 | A：GCP/Gemini | B：個社組合せ | C：MS Azure |
|---|---|---|---|
| ①整合性・ガバナンス | <span class="ok">権限継承で一元</span> | 段数多く複雑 | M365内は一元 |
| ②導入コスト | <span class="ok">既存基盤に追加</span> | 3製品を新規契約 | Fabric新規 |
| ③運用コスト | <span class="ok">サーバレス自動</span> | 専任運用が必要 | 容量管理が必要 |
| ④再学習 | <span class="ok">SQL＋ノーコード</span> | Spark等の専門 | Fabric習得 |
| ⑤管理・追従 | <span class="ok">自動で最新化</span> | 都度チューニング | 容量設計に依存 |
| ⑥現場の拡張 | <span class="ok">ノーコードで可</span> | 専門人材に依存 | Power系で可 |
| ⑦既存連携 | <span class="ok">Box/Office横断</span> | 連携を作り込む | M365に強い |

</div>

<div class="takeaway">7観点すべてで、本学の前提ではA案が優位または同等</div>

<!-- この表が資料の心臓部。各セルは後続スライドの結論を一語で。緑＝A案が明確に優位な観点。Azure(C)はM365寄りの組織なら良いが、本学はWorkspace中心なので二重投資になる。B(個社)は機能は最強だが、本学規模では運用・費用が重い。次から数字と具体で裏づける。 -->

---

<!-- _class: fig -->

<div class="page-title">②③ コスト感</div>

## 「基盤費」より「契約数×運用人件費」で差がつく

<div class="fig-area">

| 製品 | 課金の考え方 | 規模感の目安 |
|---|---|---|
| **BigQuery（GCP）** | 保存$20/TB＋走査$5/TB（月1TB無料） | 年100万円規模で収まりやすい |
| Snowflake | 保存$23〜40/TB＋計算をクレジット従量 | 管理不足だと3〜5割の払い過ぎ |
| Databricks | $0.40/DBU時＋計算VM＋保存 | 月$2〜5千〜＋隠れ費用 約4割 |
| Microsoft Fabric | 容量制 F2〜（約$262/月〜） | 年100万円規模 |

</div>

<div class="caption">AIライセンス：Gemini Enterprise Standard $30/人/月（年契約）／本学はSDK案 約¥7,200/人/年が本命。M365 Copilot は ¥4,497/人/月（別資料で試算済み）</div>

<div class="takeaway">基盤費はどの案も誤差。差は契約数と運用人手で開く</div>

<!-- ポイントを正しく伝える：データ基盤『そのもの』の費用は、BigQueryでもFabricでも年100万円規模で、総額に対し誤差。本当に効くのは(1)契約数（B案はHULFT＋Databricks＋Snowflakeの3つの固定費）と(2)運用人件費（クラスタ/ウェアハウスのサイジング・チューニングに人手が要る）。BigQueryはサーバレスで遊休課金ゼロ・容量管理不要。Snowflakeは放置で3〜5割払い過ぎ、Databricksは隠れ費用が業界平均で約4割上乗せ、という調査もある。 -->

---

<!-- _class: summary -->

<div class="page-title">⑦ Box 連携</div>

## Box は「コピーせず」そのまま活かせる

<div class="sections">

<div class="sec-box">

### A案：Gemini × Box（直結）

- ネイティブBoxコネクタで連携（数クリック）
- 取り込み不要のフェデレーション検索が可能
- Box内のPDF/PPTX/XLSX/CSVを直接解析
- Boxの既存権限を継承＝見える人だけ見える

</div>

<div class="sec-box">

### B案：Snowflake経由（多段コピー）

- Box→HULFT→レイク→基盤と何度も写す
- コピーのたびに整合性・鮮度・権限の管理が増える
- 連携処理（ETL）を作り込み、保守し続ける必要
- 「Box＝データレイク」が遠回りになる

</div>

</div>

<div class="takeaway">全学Boxを最短で活かせるのはGemini。Snowflakeは不要</div>

<!-- ご依頼の核心『SnowflakeよりGeminiの方がBoxをデータレイク化しやすい』の根拠スライド。Gemini Enterpriseは公式にBoxコネクタを持ち、フェデレーション（コピーせず直接参照）と取り込みの両対応。しかもBox内のOffice/PDFを開かずに中身を解析・回答できる。権限はBox側を継承するのでガバナンスも崩れない。B案はBoxの中身をAIに見せるまでに何段もコピーが要り、その都度パイプラインの保守が発生する。 -->

---

<!-- _class: summary -->

<div class="page-title">⑦ Office・Workspace 連携</div>

## MS必須要件を壊さず、AIだけ横断させる

<div class="sections">

<div class="sec-box">

### ファイルは今のまま

- Word・Excel・Teams・Box はそのまま継続
- 文科省のMS前提も維持できる
- 既存の使い勝手を変えない

</div>

<div class="sec-box">

### AIが横断して参照

- SharePoint/OneDrive/Outlook/Box/Workspace
- これらをコネクタで横断検索（権限継承）
- 「置き場はそのまま、頭脳だけ足す」

</div>

<div class="sec-box">

### Excel ⇄ BigQuery

- ODBC/Power QueryでExcelからSQL接続
- SheetsはConnected Sheetsで直接分析
- 既存の「ExcelにRDB接続」運用を継続可

</div>

</div>

<div class="takeaway">Officeは残す。GeminiはUIを変えず横串だけ通す</div>

<!-- 重要な安心材料：A案はOfficeを置き換えない。Word/Excel/Teams/Boxはそのまま。Gemini EnterpriseはSharePoint・OneDrive・Outlook・Box・Workspaceを『Secure Broker』として横断し、各システムの権限を尊重して検索・要約する。現状の『ExcelにSQLのRDBを接続』という使い方も、BigQueryのODBC/Power Queryで継続でき、SheetsならConnected Sheetsでノーコードに分析できる。文科省MS前提とも矛盾しない。 -->

---

<!-- _class: summary -->

<div class="page-title">①⑤ 整合性・管理</div>

## 「一つの基盤」を「サーバレスで自動運用」

<div class="sections">

<div class="sec-box">

### ① データの論理的整合性

- 元データの権限をそのまま継承（横断検索でも崩れない）
- コピーを増やさない＝鮮度ズレ・二重管理を抑制
- 監査・アクセス管理をGoogle基盤に一元化

</div>

<div class="sec-box">

### ⑤ 管理・高度化への自動追従

- BigQueryはサーバレス＝容量設計・増設が不要
- モデルは自動で最新化（Vertex AIはGemini Enterprise Agent Platformへ統合）
- 個社案はクラスタ/ウェアハウスを都度チューニング

</div>

</div>

<div class="takeaway">整合性は権限継承で、運用はサーバレスで軽くする</div>

<!-- ①整合性：データを何度もコピーするほど『どれが正か』『誰が見てよいか』が崩れる。A案はコピーを最小化し、各システムの権限を継承するので、横断検索でも見える範囲が崩れない。⑤管理：BigQueryはサーバレスで容量管理が要らず、使った分だけ。AIモデルもGoogle側が自動で更新（2026年のCloud NextでVertex AIはGemini Enterprise Agent Platformに統合）。B/C案はクラスタやキャパシティの設計・増設を人手で続ける必要がある＝『技術進歩についていく』のが重い。 -->

---

<!-- _class: summary -->

<div class="page-title">④⑥ 学習・現場拡張</div>

## 学ぶことが少なく、現場が自分で作れる

<div class="sections">

<div class="sec-box">

### ④ 再学習コストが小さい

- 標準SQL（BigQuery）＋使い慣れたSheets/Excel
- UIは既存のWorkspaceの延長で迷いにくい
- Databricksは Spark/PySpark とクラスタ管理人材が前提

</div>

<div class="sec-box">

### ⑥ 現場が自分で拡張できる

- ノーコードのAgent Designerで職員が自作可
- 開発者向けには ADK（Agent Development Kit）
- ManabiyaAI等の学内知見をそのまま活かせる

</div>

</div>

<div class="takeaway">専門人材依存を避け、現場主導で広げられる</div>

<!-- ④学習：A案で新たに学ぶのは標準SQL程度。Sheets/Excelはそのまま。対してDatabricksはSpark/PySpark/Scalaとクラスタ運用の専門人材が前提で、採用・育成のコストが大きい。⑥現場拡張：Gemini Enterpriseはノーコードの『Agent Designer』を備え、職員が自分でエージェントを作れる。開発が必要ならADKもある。本学のManabiyaAI等の知見を独自フロントに活かせる。『みんなが使いやすい』を制度的に担保できる。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# 将来展開と進め方

## やりたい3つを、どう実現し、どう始めるか

<!-- 最後に、ご提示の『やりたい3つ』をGCPでどう実現するか、そして公平にSnowflake/Databricksが活きる場面も押さえたうえで、現実的な進め方を示す。 -->

---

<!-- _class: summary -->

<div class="page-title">やりたい3つ × GCP</div>

## 3つとも、GCP中核で素直に実現できる

<div class="sections">

<div class="sec-box">

### ① データ活用・可視化

- Looker / Connected Sheetsで可視化
- BigQuery＋Geminiでナレッジ発掘
- 部署データの分析を現場の言葉で

</div>

<div class="sec-box">

### ② 業務フロー自動化

- Workspace Flows / Apps Scriptで自動化
- 既存のPower Automateとも併用できる
- 申請・問合せをエージェント化

</div>

<div class="sec-box">

### ③ AIエージェント・アプリ

- Agent Designer / ADKで開発
- Box・SaaSを根拠（グラウンディング）に
- 独自フロントで学内UXを作り込む

</div>

</div>

<div class="takeaway">可視化・自動化・エージェントを一つの基盤で完結</div>

<!-- ①可視化：LookerやConnected Sheetsで現場が触れる可視化、BigQuery×Geminiで横断のナレッジ発掘。②自動化：Workspace FlowsやApps Scriptで内製、既存Power Automateも残して併用できる（どちらかに寄せる必要はない）。③エージェント：Agent Designer/ADKで、Box・SaaSを根拠にした業務エージェントを作る。3つとも別々の基盤を買わずに一つで完結するのがA案の強み。 -->

---

<!-- _class: fig -->

<div class="page-title">段階導入</div>

## 契約ゼロのPoCから始められる

<div class="fig-area">

<svg viewBox="0 0 1120 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="rmB" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1f8f6e"/></marker>
  </defs>
  <rect x="30" y="232" width="230" height="78" rx="10" fill="#E4F2EC" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="145" y="262" font-size="15" fill="#125642" text-anchor="middle" font-weight="700">STEP 1</text>
  <text x="145" y="286" font-size="13" fill="#1f2937" text-anchor="middle">Box直結でAI検索PoC</text>
  <text x="145" y="304" font-size="11.5" fill="#6b7280" text-anchor="middle">追加契約ゼロで試す</text>

  <rect x="290" y="176" width="230" height="78" rx="10" fill="#CDE8DD" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="405" y="206" font-size="15" fill="#125642" text-anchor="middle" font-weight="700">STEP 2</text>
  <text x="405" y="230" font-size="13" fill="#1f2937" text-anchor="middle">部署データを可視化</text>
  <text x="405" y="248" font-size="11.5" fill="#6b7280" text-anchor="middle">BigQuery＋Sheets/Looker</text>

  <rect x="550" y="120" width="230" height="78" rx="10" fill="#9ED3BF" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="665" y="150" font-size="15" fill="#0f4a38" text-anchor="middle" font-weight="700">STEP 3</text>
  <text x="665" y="174" font-size="13" fill="#1f2937" text-anchor="middle">ノーコードでエージェント</text>
  <text x="665" y="192" font-size="11.5" fill="#33564b" text-anchor="middle">現場が自作・横展開</text>

  <rect x="810" y="64" width="240" height="78" rx="10" fill="#1f8f6e"/>
  <text x="930" y="94" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">STEP 4</text>
  <text x="930" y="118" font-size="13" fill="#eafaf3" text-anchor="middle">全学展開・業務連携</text>
  <text x="930" y="136" font-size="11.5" fill="#cdeee0" text-anchor="middle">自動化・基幹連携へ</text>

  <line x1="120" y1="232" x2="900" y2="120" stroke="#1f8f6e" stroke-width="3" marker-end="url(#rmB)"/>
  <line x1="20" y1="320" x2="1090" y2="320" stroke="#cbd5cf" stroke-width="2"/>
  <text x="145" y="344" font-size="12" fill="#6b7280" text-anchor="middle">数週間</text>
  <text x="405" y="344" font-size="12" fill="#6b7280" text-anchor="middle">小規模</text>
  <text x="665" y="344" font-size="12" fill="#6b7280" text-anchor="middle">部署横断</text>
  <text x="930" y="344" font-size="12" fill="#6b7280" text-anchor="middle">全学</text>
</svg>

</div>

<div class="takeaway">大きな初期投資なしに、効果を見ながら段階拡張できる</div>

<!-- 進め方も低リスク。STEP1はBoxへのコネクタ接続だけで、追加契約ゼロのPoCができる（既存Workspaceの範囲）。効果が見えたらSTEP2でBigQueryに必要な分だけ載せて可視化、STEP3で現場がノーコードでエージェントを作り、STEP4で全学・基幹連携へ。B案のように『まず3製品を契約してから』という重い入口にならない。 -->

---

<!-- _class: summary -->

<div class="page-title">公平な評価</div>

## Snowflake / Databricks が活きる場面もある

<div class="sections">

<div class="sec-box">

### それでも個社案が有利なケース

- マルチクラウド義務・ベンダー中立が要件
- 超大規模のデータエンジニアリング/ML
- 独立した重い分析を持つ事業部が多数

</div>

<div class="sec-box">

### 本学で「必須でない」理由

- 規模は3,000人・主に事務/教学データ
- すでにWorkspace＋Boxの土台がある
- 必要になれば後から足せる（最初は不要）

</div>

</div>

<div class="takeaway">「今は要らない／必要になれば足せる」が現実解</div>

<!-- フェアに述べる。Snowflake/Databricksは決して悪い製品ではなく、マルチクラウド義務やベンダー中立要件、ペタバイト級のデータエンジニアリング/ML、独立した重い分析部門が多い組織では合理的。だが本学はそのいずれにも当てはまらない。3,000人規模・事務/教学データ・既存Workspace+Box。だから『最初から3製品を契約』する必要はなく、必要になった時点で足せばよい。意思決定を可逆にしておくのが賢い。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- 本学はWorkspace＋Boxの土台がある＝GCPは「追加が最小」
- Boxはコピー不要でGeminiが直接活用、Snowflakeは不要
- 7観点（整合・コスト・運用・学習・管理・現場・連携）でGCP優位
- サーバレス＆ノーコードで運用も拡張も軽い
- Snowflake/Databricksは「必要になったら足す」で十分

<!-- 5点で締める。要は『本学の前提では、GCP/Gemini Enterpriseを中核にするのが、最小投資で一気通貫でき、運用も学習も軽い』。Snowflake/Databricksは将来の選択肢として残しつつ、今は入れない判断が合理的。次アクション：BoxコネクタでのPoCを小さく始め、効果を数字で示して全学判断につなげる。 -->

---

<!-- _class: refs -->

<div class="page-title">出典・参考</div>

## 出典・参考（主要）

- Google Cloud. *Connect Box / Introduction to connectors* (Gemini Enterprise Docs). https://docs.cloud.google.com/gemini/enterprise/docs/connect-box
- Google Cloud. *Gemini Enterprise Agent Platform pricing*. https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing
- Google Cloud. *Introduction to BigLake tables / object tables* (BigQuery Docs). https://docs.cloud.google.com/bigquery/docs/biglake-intro
- Google Cloud. *Using Connected Sheets / BigQuery ODBC for Excel*. https://docs.cloud.google.com/bigquery/docs/connected-sheets
- Box & Google Cloud. *Strategic partnership: Vertex AI / BigQuery / Agentspace*. https://blog.box.com/google-cloud-next-2025-how-box-and-google-cloud-are-transforming-enterprise-content-ai
- Revefi. *Snowflake vs Databricks vs BigQuery: 2026 Pricing Comparison*. https://www.revefi.com/snowflake-vs-databricks-vs-bigquery-the-2026-pricing-comparison-guide
- Kanerika. *Microsoft Fabric vs Google BigQuery (2025)*. https://kanerika.com/blogs/microsoft-fabric-vs-google-bigquery/
- Saison Technology. *HULFT Square connectors（BigQuery/GCS/Box/Azure/AWS）*. https://www.hulft.com/service/hulft-square

<!-- 価格・コネクタ・連携の事実はGoogle Cloud公式とベンダー比較記事に基づく。価格は2026年6月時点・定価ベースで、実導入時は見積で再確認する。AIライセンスの全学費用試算は別資料（20260611）を参照。 -->
