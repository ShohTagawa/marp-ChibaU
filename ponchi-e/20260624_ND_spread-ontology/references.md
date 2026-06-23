# 先行研究・参考文献（検証済み）— 大学体験オントロジー / SPReAD第2回

> 31エージェントの多角リサーチ＋各引用の二重確認で作成。`[high]`＝出典URLで実在・書誌を確認／`[med]`＝実在は確認だが査読・本文未確定／`[low]`＝学術文献でない（着想背景のみ）。**様式1には文献欄が無い**ため、本文（妥当性欄）に主要6件を織り込み、フル版は本ファイルで保管。

## 位置づけ（様式1・妥当性欄に反映済み）

LLMによるオントロジー/知識グラフ構築は手法として確立しつつあり（LLMs4OL, SPIRES/OntoGPT, Pan et al.）、高等教育応用も登場（KnowEdu, Abu-Rasheed et al., 九大Li et al.）。**ただし対象は履修・教材・成績・カリキュラムに集中**し、所属感・社会的つながり・転機を含む「大学生活全体の体験」は質問紙・縦断調査での概念化に留まる。**実行動ログからLLMで体験オントロジーを半自動抽出し人手検証する実証研究は国内外で確認できず**、本研究はこの分断を架橋する。

## 白地（ホワイトスペース）判定

**「概ね妥当」。ただし無条件の『世界初』とは書かない**。「手法は確立・高等教育応用も登場、しかし対象は履修・成績・カリキュラム・コンピテンシーに偏在し、正課外・情意・社会的つながり・転機を含む生活全体は未着手＝白地」と**差異の所在を明示**する（査読での既存性指摘リスク回避）。最近接競合：Abu-Rasheed et al. 2025（LLM×高等教育KG＝カリキュラム限定）／Li et al. 2024（九大・LLMオントロジー学習×成績）／Kabashkin 2025（student digital twin＝学業・コンピテンシー中心）。

## 本文に引くべき主要6件（様式1）

1. **Babaei Giglou, D'Souza & Auer (2023) LLMs4OL** — 手法の確立（方法論的支柱）
2. **Caufield et al. (2024) SPIRES/OntoGPT**, Bioinformatics 40(3) btae104 — スキーマ駆動LLM抽出＋既存語彙へのグラウンディングの実装先例
3. **Abu-Rasheed et al. (2025)** LLM-Assisted KG for Curriculum/Domain — 最近接競合（カリキュラム限定の対比）
4. **Li et al. (2024)** LLM-Driven Ontology Learning for Student Performance, KSEM2024 — 国内九大・LLMオントロジー学習が成績中心であることの最重要対抗文献
5. **緒方広明 (2017)**『大学教育におけるラーニング・アナリティクスの導入と研究』日本教育工学会論文誌41(3) — 国内LAの到達点（学修ログ中心）
6. **Abu-Salih & Alotaibi (2024)** 教育KG体系的レビュー, Heliyon 10(3) e25383 — 既存教育KGが履修・カリキュラム・推薦に集中することの俯瞰的根拠

## フル文献リスト

### LLMによるオントロジー/知識グラフ構築（手法層）
- `[high]` Babaei Giglou H., D'Souza J., Auer S. "LLMs4OL: Large Language Models for Ontology Learning." ISWC 2023, LNCS 14265, pp.408–427, Springer. DOI:10.1007/978-3-031-47240-4_22（preprint arXiv:2307.16648）
- `[high]` Caufield J.H. et al. "Structured prompt interrogation and recursive extraction of semantics (SPIRES)…" Bioinformatics 40(3), btae104, 2024. DOI:10.1093/bioinformatics/btae104（OntoGPT: github.com/monarch-initiative/ontogpt; preprint arXiv:2304.02711）
- `[high]` Pan S. et al. "Unifying Large Language Models and Knowledge Graphs: A Roadmap." IEEE TKDE 36(7), pp.3580–3599, 2024. DOI:10.1109/TKDE.2024.3352100（arXiv:2306.08302）
- `[high]` Babaei Giglou H. et al. "LLMs4OL 2024 Overview (1st Challenge)." TIB-OP Vol.4, pp.3–16, 2024（arXiv:2409.10146）
- `[high]` Babaei Giglou H. et al. "LLMs4OL 2025 Overview (2nd Challenge)." TIB-OP Vol.6, 2025. DOI:10.52825/ocp.v6i.2913（Text2Onto課題追加・ISWC2025@奈良）
- `[med]` Bian H. "LLM-empowered knowledge graph construction: A survey." arXiv:2510.20345, 2025（査読/最終掲載未確定）

### 高等教育×オントロジー/KG（応用層・白地の対抗文献）
- `[high]` Li G., Tang C., Chen L., Deguchi D., Yamashita T., Shimada A. "LLM-Driven Ontology Learning to Augment Student Performance Analysis in Higher Education." KSEM 2024, LNAI 14886, pp.57–68. DOI:10.1007/978-981-97-5498-4_5（**九州大学・島田敬士研**／対象＝講義知識概念＋成績予測）
- `[high]` Abu-Rasheed H. et al. "LLM-Assisted Knowledge Graph Completion for Curriculum and Domain Modelling…" IEEE EDUCON 2025; arXiv:2501.12300（対象＝カリキュラム/ドメイン・科目推薦）
- `[high]` Abu-Salih B., Alotaibi S. "A systematic literature review of knowledge graph construction and application in education." Heliyon 10(3), e25383, 2024. DOI:10.1016/j.heliyon.2024.e25383
- `[high]` Chen P., Lu Y., Zheng V.W., Chen X., Yang B. "KnowEdu: A System to Construct Knowledge Graph for Education." IEEE Access 6, pp.31553–31563, 2018. DOI:10.1109/ACCESS.2018.2839607
- `[med]` Kabashkin I. "AI-Based Digital Twins of Students…" Information (MDPI) 16(10), 846, 2025（本文未精読／学業・コンピテンシー中心）

### 教育データ標準・学習体験記述
- `[high]` IEEE Std 1484.12.1-2020 Learning Object Metadata (LOM)（IEEE Xplore 9262118）
- `[high]` IEEE Std 9274.1.1-2023 xAPI 2.0（IEEE Xplore 10273185）
- `[high]` Miles A., Bechhofer S. (eds.) "SKOS Reference." W3C Recommendation, 2009. https://www.w3.org/TR/skos-reference/
- `[high]` 1EdTech "Caliper Analytics Specification v1.2." 2020. https://www.imsglobal.org/spec/caliper/v1p2
- `[high]` schema.org/LearningResource (LRMI; DCMI LRMI Task Group)

### 体験・所属感・学修ログの社会科学/LA
- `[high]` Crawford J. et al. "Sense of belonging in higher education students: an Australian longitudinal study 2013–2019." Studies in Higher Education 49(3), pp.395–409, 2023. DOI:10.1080/03075079.2023.2238006
- `[high]` Romero C., Ventura S. "Educational data mining: A survey from 1995 to 2005." Expert Systems with Applications 33(1), pp.135–146, 2007. DOI:10.1016/j.eswa.2006.04.005

### 国内（日本）の現状
- `[high]` 緒方広明 (2017)『大学教育におけるラーニング・アナリティクスの導入と研究』日本教育工学会論文誌 41(3), pp.221–231. DOI:10.15077/jjet.42002
- `[high]` 緒方広明 ほか (2016)『教育ビッグデータの利活用に向けた学習ログの蓄積と分析』教育システム情報学会誌(JSiSE) 33(2), pp.58–66. DOI:10.14926/jsise.33.58
- `[high]` 関谷貴之・山口和紀 (2005)『講義データベース：オントロジーを用いた…講義情報の構造化』知能と情報 17(5), pp.536–546. DOI:10.3156/jsoft.17.536（国内教育オントロジーの早期例＝講義/正課に限定）
- `[high]` 小林和馬・山本和英・浜本隆二 (2024)『GPT-4による診療文書からのオントロジー自動構築の初期検討』(C10-6) 言語処理学会第30回年次大会(NLP2024)（国内LLM×テキスト→オントロジー／医療ドメイン限定）
- `[high]` Kondo T., Nishigori H. (2025) "AI's Accuracy in Extracting Learning Experiences From Clinical Practice Logs." JMIR Medical Education 11:e68697. DOI:10.2196/68697（名大医・臨床実習ログからGPT-4で「学習経験」抽出＝最近接だが臨床限定）
- `[high]` 日本学術会議 (2020)『教育のデジタル化を踏まえた学習データの利活用に関する提言』2020-09-30. https://www.scj.go.jp/ja/info/kohyo/pdf/kohyo-24-t299-1.pdf
- `[high]` 村上正行 (2023)『大学における教育DXの可能性』名古屋高等教育研究 23, pp.261–278

### 着想の背景（学術引用しない）
- `[low]` Andrej Karpathy "LLM Wiki"（GitHub Gist 442a6bf…, 2026-04＋X投稿）。比喩・着想としてのみ言及。

## 注意点（提出前チェック）
- **「世界初/初の試み」と断定しない** → 最近接競合（Abu-Rasheed 2025／Li et al. 2024／Kabashkin 2025）を認めた上で「差異＝正課外・情意・転機を扱う点」を明示。
- **Karpathy LLM-wiki**＝学術文献でない（low）。着想の比喩のみ。
- **Kabashkin 2025 / Bian 2025**＝med（本文/査読未確定）。内容に踏み込むなら本文確認。
- 所属感・転機の社会科学側は Crawford et al.(2023) を1件確定。厚く引くなら **Tinto（student departure）/Astin（student involvement）** の原典を別途確定。
- 国内の退学予測・学生生活実態調査（JASSO等）は存在するが**自己申告アンケート中心**。「生活面データは調査として存在するが、行動ログ×LLMによる体験オントロジー自動構築は未確立」と手法面の白地として書き分ける。
- 緒方JJET論文の発行年は文献により2017/2018と揺れ（J-STAGE表記2017）。「緒方(2017)」を基本に注記推奨。
