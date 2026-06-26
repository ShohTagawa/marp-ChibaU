---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">全学データ基盤 構成比較</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  :root { --hdr-left-w: 30%; --accent: #C8611C; --accent-dark: #8f3f12; --accent-soft: #FBEAD9; }
  /* 中央ページタイトル帯：左帯（30%）の右スラントに噛み合わせて配置 */
  section .page-title { left: 27%; width: 36%; }
  /* ヘッダー下のアクセント線を全幅・前面で引く */
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  section.cover-hero { --hdr-left-w: 30%; }
  section.cover-hero .title-event { color: #C8611C; }
  /* 比較表を読みやすく */
  .fig-area table { font-size: 19px; }
  .fig-area td, .fig-area th { padding: 6px 10px; line-height: 1.35; }
  .ok { color: #0F766E; font-weight: 700; }
  .ng { color: #C8611C; font-weight: 700; }
  /* fig-up: 図を上に寄せる（中央寄せの上側余白を詰める） */
  section.fig-up .fig-area { margin-top: -48px; }
  /* fig-big: 表を大きく */
  section.fig-big .fig-area table { font-size: 23px; }
  section.fig-big .fig-area td, section.fig-big .fig-area th { padding: 9px 14px; }
  /* fig-sm: 行数の多い表を小さく */
  section.fig-sm .fig-area table { font-size: 16px; }
  section.fig-sm .fig-area td, section.fig-sm .fig-area th { padding: 5px 8px; line-height: 1.3; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">全学のデータ活用基盤の整理に関する</div>
<div class="title-big">3つの構成案の比較</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">構成比較 ― 技術評価レポート<br>GCP案・個社組合せ案・Microsoft Azure 案の比較検討</div>
<div class="title-date">2026/6/22（月）</div>
<div class="title-affil">千葉大学 国際未来教育基幹 / アカデミック・リンク・センター<br>元 日本貨物航空IT戦略部(兼務)<br>田川 翔</div>
</div>
</div>

<!--
- 全学データ基盤を「どこを中核に据えるか」。結論はGCP/Gemini Enterprise中核。本学はWorkspace+Boxの土台が既にあり、追加最小で一気通貫できる。
- 本日は情報担当向けに、7観点＋2026年の現状・展望（推論コスト・Iceberg・モデル近接）で根拠を示す。
-->

---

<!-- _class: summary -->

<div class="page-title">前提（動かさない条件）</div>

## 本学の持っている土台と方向性の整理

<div class="sections">

<div class="sec-box">

### 既に導入済みの基盤

- Google Workspace を一部職員を除き、全学運用（faculty.gs.chiba-u.jp）
- Box を研究・業務データの中核ストレージに全学導入
- Office 365（Word・Excel・Teams）も日常的に利用

</div>

<div class="sec-box">

### 残すシステム（不変）

- 既存SaaS 約10（教務・人事給与などの事務系）
- **Box、Office 365 (文科省がMS前提の限り不可欠)は今後も継続**を前提

</div>

<div class="sec-box">

### やりたい3つのこと： より働きやすく、学べる場へ。大学の基盤を強化する。

- ① データ活用（可視化・分析・ナレッジ発掘）
- ② AIエージェント・アプリで業務を高度化、フローを自動化
- ③ AI時代の大学に向けたUX変革 (アプリ)

</div>

</div>

<!--
- 大前提：ゼロから作るのではない。WorkspaceとBoxの土台がある。だから「何を最小限足すか」。Boxは永続、Officeも残す。
-->

---

<!-- _class: fig -->

<div class="page-title">検討している3案</div>

## 構成シナリオは大きく3つ

<div class="fig-area">

| | データ基盤 | AI・エージェント | データ連携 |
|---|---|---|---|
| **GCP案** | BigQuery（必要時のみ）＋Box直結 | Gemini Enterprise | ネイティブ・コネクタ |
| **個社組合せ案** | Databricks（レイク）＋Snowflake（基盤） | Google/MSのAIが参照 | HULFTで都度連携 |
| **Azure案** | Microsoft Fabric / OneLake | Copilot / Azure OpenAI | M365ネイティブ |

</div>

<div class="caption">トランスフォーメーションクラウドの一括導入か、<br>個別サービスを購入して連携するか？</div>

<div class="callout-blue">評価軸</div>

- **整合性 ・ 導入コスト ・ 運用コスト ・ 再学習 ・ 管理追従 ・ 現場拡張 ・ 既存連携（Box/Office）**（7観点）
- 補足要素： ベンダー支援/人材育成 ・ **他大学実績** ・ **リバースETL（AI実行＋人の承認）** ・ 将来性/ロックイン回避

<div class="takeaway">3案を共通の評価軸で比較し、本学の前提に最も適合する構成を選ぶ</div>

<!--
- 個社組合せ案はHULFT・Databricks・Snowflakeの3契約が前提。Azure案はMS純正で固まるがWorkspaceと二重投資。GCP案は既存基盤への追加が最小。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# 全体像 ― データを中心とした流れ

## 「何段で繋ぐか」が複雑さ・費用・壊れやすさを決める

<!--
- 評価の前に2案のデータの流れを絵で比べる。効くのは「経路の段数」と「契約の数」。少ないほど軽く・安く・学びやすい。
-->

---

<!-- _class: fig -->

<div class="page-title">アーキテクチャ比較</div>

## GCP案は「直結」、個社組合せ案は「多段コピー」

<div class="fig-area">

<svg viewBox="0 0 1240 390" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="aG" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#1f8f6e"/></marker>
    <marker id="aK" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9aa0a6"/></marker>
  </defs>
  <text x="30" y="40" font-size="20" font-weight="700" fill="#1f8f6e">GCP案：Gemini Enterprise 中核</text>
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
  <line x1="40" y1="190" x2="1200" y2="190" stroke="#e3e7ea" stroke-width="1"/>
  <text x="30" y="230" font-size="20" font-weight="700" fill="#6b7280">個社組合せ案：HULFT→Databricks→Snowflake→AI</text>
  <rect x="30" y="254" width="120" height="110" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="90" y="302" font-size="13" fill="#374151" text-anchor="middle" font-weight="700">SaaS</text>
  <text x="90" y="324" font-size="13" fill="#374151" text-anchor="middle">／ Box</text>
  <line x1="152" y1="309" x2="208" y2="309" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="212" y="274" width="120" height="70" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="272" y="315" font-size="14" fill="#374151" text-anchor="middle" font-weight="700">HULFT</text>
  <line x1="334" y1="309" x2="390" y2="309" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="394" y="269" width="150" height="80" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="469" y="304" font-size="13.5" fill="#374151" text-anchor="middle" font-weight="700">Databricks</text>
  <text x="469" y="326" font-size="12" fill="#6b7280" text-anchor="middle">データレイク</text>
  <line x1="546" y1="309" x2="602" y2="309" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="606" y="269" width="150" height="80" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="681" y="304" font-size="13.5" fill="#374151" text-anchor="middle" font-weight="700">Snowflake</text>
  <text x="681" y="326" font-size="12" fill="#6b7280" text-anchor="middle">データ基盤</text>
  <line x1="758" y1="309" x2="814" y2="309" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#aK)"/>
  <rect x="818" y="274" width="170" height="70" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="903" y="306" font-size="13" fill="#374151" text-anchor="middle" font-weight="700">Google/MSのAI</text>
  <text x="903" y="328" font-size="12" fill="#6b7280" text-anchor="middle">が参照</text>
  <rect x="1008" y="261" width="206" height="96" rx="10" fill="#FBEDE2" stroke="#E07B39" stroke-width="1.5"/>
  <text x="1111" y="289" font-size="13" fill="#9a5224" text-anchor="middle" font-weight="700">追加契約</text>
  <text x="1111" y="315" font-size="18" fill="#C8611C" text-anchor="middle" font-weight="700">3つ</text>
  <text x="1111" y="339" font-size="11.5" fill="#9a5224" text-anchor="middle">HULFT＋Databricks＋Snowflake</text>
</svg>

</div>

<div class="caption">GCP案＝Box/Workspace にコネクタで直結し追加最小／個社組合せ案＝HULFT で多段にコピーし基盤化</div>

<div class="takeaway">本来は、経路が短く契約が少ないほど、安く・壊れにくく・変更対応が簡単で、学びやすい</div>

<!--
- 上段（GCP案）：Box/SaaSはネイティブコネクタでGeminiに直結。重い分析だけBigQuery。中継基盤を新たに買わない。
- 下段（個社組合せ案）：同じことに HULFT・Databricks・Snowflake の3製品＝3契約・3運用・3障害点。データも何度もコピー。「DatabricksもSnowflakeも入れなくてもGCPでいける」を一枚で示す。
-->

---

<!-- _class: fig fig-up -->

<div class="page-title">システム構成図</div>

## 推奨構成（GCP案）の全体像

<div class="fig-area">

<svg viewBox="0 0 1240 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="upA" markerWidth="10" markerHeight="10" refX="3" refY="2" orient="auto"><path d="M0 5 L3 0 L6 5 Z" fill="#C8611C"/></marker>
  </defs>
  <line x1="44" y1="470" x2="44" y2="40" stroke="#C8611C" stroke-width="3" marker-end="url(#upA)"/>
  <text x="24" y="255" font-size="12" fill="#8f3f12" text-anchor="middle" transform="rotate(-90 24 255)">下→上にデータ・AIが流れる</text>
  <rect x="1006" y="24" width="208" height="448" rx="12" fill="#FBEAD9" stroke="#C8611C" stroke-width="1.5"/>
  <text x="1098" y="248" font-size="18" font-weight="700" fill="#8f3f12" text-anchor="middle" transform="rotate(-90 1098 248)">ガバナンス・権限継承</text>
  <text x="1126" y="248" font-size="12.5" fill="#9a5224" text-anchor="middle" transform="rotate(-90 1126 248)">全層を貫く（Knowledge Catalog）</text>
  <rect x="66" y="24" width="924" height="80" rx="12" fill="#F3F7F5" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="88" y="60" font-size="16" font-weight="700" fill="#125642">利用・UI</text>
  <text x="88" y="82" font-size="12" fill="#6b7280">（出口）</text>
  <text x="250" y="58" font-size="15" fill="#1f2937">Office 365（Word / Excel / Teams ＝ そのまま）</text>
  <text x="250" y="84" font-size="15" fill="#1f2937">Looker・Connected Sheets　｜　独自フロント・アシスタント</text>
  <rect x="66" y="116" width="924" height="80" rx="12" fill="#1f8f6e"/>
  <text x="88" y="152" font-size="16" font-weight="700" fill="#ffffff">AI・</text>
  <text x="88" y="174" font-size="16" font-weight="700" fill="#ffffff">エージェント</text>
  <text x="300" y="152" font-size="15" fill="#ffffff">Gemini Enterprise（検索・エージェント）　｜　Agent Designer（ノーコード）</text>
  <text x="300" y="176" font-size="15" fill="#d7efe6">Model Garden ＝ Gemini・Claude 等を差し替え可能</text>
  <rect x="66" y="208" width="924" height="70" rx="12" fill="#E4F2EC" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="88" y="240" font-size="16" font-weight="700" fill="#125642">データ基盤</text>
  <text x="88" y="262" font-size="12" fill="#6b7280">必要時のみ</text>
  <text x="300" y="249" font-size="15" fill="#1f2937">BigQuery（Iceberg対応）／ Cloud Storage ― 重い分析・蓄積が要るデータだけ</text>
  <rect x="66" y="290" width="924" height="70" rx="12" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="1.5"/>
  <text x="88" y="331" font-size="16" font-weight="700" fill="#1A4A7A">連携</text>
  <text x="300" y="322" font-size="15" fill="#1f2937">ネイティブコネクタ（Box / SharePoint / OneDrive 等）／ MCP・A2A（標準）</text>
  <text x="300" y="346" font-size="15" fill="#1f2937">（必要時のみ）HULFT ― 既存基幹との橋渡しが要るときだけ</text>
  <rect x="66" y="372" width="924" height="100" rx="12" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="88" y="414" font-size="16" font-weight="700" fill="#374151">既存資産</text>
  <text x="88" y="436" font-size="12" fill="#6b7280">残す・移行しない</text>
  <rect x="300" y="392" width="200" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="400" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">既存SaaS</text>
  <text x="400" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">教務・人事給与 等</text>
  <rect x="516" y="392" width="200" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="616" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">Box</text>
  <text x="616" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">研究・業務データ（永続）</text>
  <rect x="732" y="392" width="238" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="851" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">Google Workspace</text>
  <text x="851" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">Gmail / Drive / Docs / Sheets</text>
</svg>

</div>

<div class="takeaway">既存資産（最下層）は残し、GCPを上に薄く重ねる。AIが全層を横断</div>

<!-- システム構成図。最下層＝既存資産（SaaS/Box/Workspace、残す・移行しない）。その上に薄く重ねる：連携層（ネイティブコネクタ/MCP・A2A、必要時のみHULFT）→データ基盤層（BigQuery/Iceberg、重い分析が要るときだけ）→AI・エージェント層（Gemini Enterprise/Agent Designer/Model Garden＝モデル差替可）→利用・UI層（Office・Looker・Connected Sheets・独自フロント）。右の縦串＝ガバナンス・権限継承（Knowledge Catalog）が全層を貫く。Box等は動かさず、GCPを薄く重ねる構成であることを強調。 -->

---

<!-- _class: fig fig-up -->

<div class="page-title">構成図（個社案）</div>

## 個社組合せ案の全体像

<div class="fig-area">

<svg viewBox="0 0 1240 470" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="upK" markerWidth="10" markerHeight="10" refX="3" refY="2" orient="auto"><path d="M0 5 L3 0 L6 5 Z" fill="#9aa0a6"/></marker>
  </defs>
  <line x1="44" y1="442" x2="44" y2="36" stroke="#9aa0a6" stroke-width="3" marker-end="url(#upK)"/>
  <text x="24" y="240" font-size="12" fill="#6b7280" text-anchor="middle" transform="rotate(-90 24 240)">下→上に多段でコピー</text>
  <rect x="1000" y="20" width="104" height="426" rx="10" fill="#FBEDE2" stroke="#E07B39" stroke-width="1.5"/>
  <text x="1052" y="233" font-size="14" font-weight="700" fill="#9a5224" text-anchor="middle" transform="rotate(-90 1052 233)">Snowflake Horizon</text>
  <rect x="1110" y="20" width="104" height="426" rx="10" fill="#EFEAF5" stroke="#7B6BA6" stroke-width="1.5"/>
  <text x="1162" y="233" font-size="13.5" font-weight="700" fill="#4a3a6b" text-anchor="middle" transform="rotate(-90 1162 233)">Databricks Unity Catalog</text>
  <rect x="66" y="20" width="918" height="56" rx="10" fill="#F3F7F5" stroke="#9aa0a6" stroke-width="1.3"/>
  <text x="88" y="53" font-size="15" font-weight="700" fill="#374151">利用・BI</text>
  <text x="300" y="53" font-size="14.5" fill="#1f2937">Office 365（そのまま）／ Power BI・Looker 等</text>
  <rect x="66" y="84" width="918" height="56" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.3"/>
  <text x="88" y="117" font-size="15" font-weight="700" fill="#374151">AI参照</text>
  <text x="300" y="117" font-size="14.5" fill="#1f2937">Google / MS の AI が Snowflake・Databricks を参照（外部接続）</text>
  <rect x="66" y="148" width="584" height="56" rx="10" fill="#FCEBEA" stroke="#C0392B" stroke-width="1.6"/>
  <text x="88" y="170" font-size="15" font-weight="700" fill="#8a2620">データ基盤</text>
  <text x="88" y="192" font-size="10.5" font-weight="700" fill="#C0392B">新規購入</text>
  <text x="322" y="181" font-size="14.5" fill="#1f2937">Snowflake（DWH ／ Cortex ／ Horizon）</text>
  <rect x="66" y="212" width="584" height="56" rx="10" fill="#FCEBEA" stroke="#C0392B" stroke-width="1.6"/>
  <text x="88" y="234" font-size="15" font-weight="700" fill="#8a2620">データレイク</text>
  <text x="88" y="256" font-size="10.5" font-weight="700" fill="#C0392B">新規購入</text>
  <text x="322" y="245" font-size="14.5" fill="#1f2937">Databricks（Unity Catalog ／ Mosaic AI）</text>
  <rect x="672" y="148" width="312" height="120" rx="12" fill="#E3F0FB" stroke="#0061D5" stroke-width="2"/>
  <text x="828" y="192" font-size="26" font-weight="700" fill="#0061D5" text-anchor="middle">Box</text>
  <text x="828" y="220" font-size="14" fill="#34506b" text-anchor="middle">研究・業務データ（大量）</text>
  <text x="828" y="246" font-size="11" fill="#6b7280" text-anchor="middle">取込に HULFT / Databricks / Snowflake が必要</text>
  <rect x="66" y="276" width="918" height="56" rx="10" fill="#FCEBEA" stroke="#C0392B" stroke-width="1.6"/>
  <text x="88" y="298" font-size="15" font-weight="700" fill="#8a2620">連携</text>
  <text x="88" y="320" font-size="10.5" font-weight="700" fill="#C0392B">新規購入</text>
  <text x="322" y="309" font-size="14.5" fill="#1f2937">HULFT（EAI ／ iPaaS）― SaaS↔クラウド間のデータ移送・変換</text>
  <rect x="66" y="340" width="918" height="106" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.3"/>
  <text x="88" y="385" font-size="15" font-weight="700" fill="#374151">既存資産</text>
  <text x="88" y="407" font-size="12" fill="#6b7280">残す</text>
  <rect x="320" y="360" width="280" height="66" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="460" y="389" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">既存SaaS</text>
  <text x="460" y="409" font-size="11.5" fill="#6b7280" text-anchor="middle">教務・人事給与 等</text>
  <rect x="620" y="360" width="364" height="66" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="802" y="389" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">Google Workspace / Office</text>
  <text x="802" y="409" font-size="11.5" fill="#6b7280" text-anchor="middle">Gmail / Drive / Word / Excel</text>
</svg>

</div>

<div class="caption">赤＝新規に購入・契約が必要（HULFT・Databricks・Snowflake）。Box の大量データもこの3製品を経由して取り込む</div>

<div class="takeaway">3製品・6層構成。各層の運用とガバナンス（Horizon／UC）が分散する</div>

<!-- 個社組合せ案の構成図。GCP案の構成図と対で見る。既存資産→HULFT（連携）→Databricks（レイク）→Snowflake（DWH）→AIが外部参照→BI、の6層。データを各層で多段にコピーし、ガバナンスはSnowflake HorizonとDatabricks Unity Catalogの2系統に分かれる。機能は強力だが、運用・ガバナンス・コストが分散するのが技術的特徴。中立に事実として提示。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# 7つの観点で比較

## 整合性・コスト・運用・学習・管理・現場・連携

<!--
- ご依頼の7観点で評価する。まず一覧で全体感、その後にコスト・Box連携・配布試算を深掘りする。
-->

---

<!-- _class: fig fig-big -->

<div class="page-title">7観点の一覧</div>

## 評価サマリ（3案 × 7観点）

<div class="fig-area">

| 観点 | GCP案 | 個社組合せ案 | Azure案 |
|---|---|---|---|
| ①整合性・ガバナンス | <span class="ok">権限継承で一元</span> | 段数多く複雑 | M365内は一元 |
| ②導入コスト | <span class="ok">既存基盤に追加</span> | 3製品を新規契約 | Fabric新規 |
| ③運用コスト | <span class="ok">サーバレス自動</span> | 専任運用が必要 | 容量管理が必要 |
| ④再学習 | <span class="ok">SQL＋ノーコード</span> | Spark等の専門 | Fabric習得 |
| ⑤管理・追従 | <span class="ok">自動で最新化</span> | 都度チューニング | 容量設計に依存 |
| ⑥現場の拡張 | <span class="ok">ノーコードで可</span> | 専門人材に依存 | Power系で可 |
| ⑦既存連携 | <span class="ok">Box/Office横断</span> | 連携を作り込む | M365に強い |

</div>

<div class="takeaway">7観点すべてで、本学の前提ではGCP案が優位または同等</div>

<!--
- 緑＝GCP案が明確に優位な観点。Azure案はM365寄り組織なら良いが本学はWorkspace中心で二重投資。個社組合せ案は機能最強だが本学規模では運用・費用が重い。
-->

---

<!-- _class: fig -->

<div class="page-title">基盤の技術比較</div>

## BigQuery と Snowflake の主な違い

<div class="fig-area">

| 機能 | BigQuery（GCP） | Snowflake |
|---|---|---|
| アーキ／スケール | 完全サーバレス・自動（遊休課金なし） | 仮想ウェアハウス（サイズ選択・起動停止） |
| 課金 | 走査 $6.25/TiB or スロット定額 | クレジット秒課金（$2〜）＋保存$23〜/TB |
| SQL内蔵AI | BigQuery ML ／ **Gemini in BigQuery** | **Cortex AI ／ Cortex Agents** |
| ストリーミング | ネイティブ（Storage Write API） | Snowpipe（準リアルタイム） |
| オープン形式 | BigLake **Iceberg**・外部直接クエリ | **Iceberg Tables ／ Polaris** |
| マルチクラウド | BigQuery Omni（AWS/Azure） | 本質的にマルチクラウド |
| ガバナンス | Knowledge Catalog（旧Dataplex） | Horizon Catalog |
| Workspace/Box連携 | **ネイティブ**（Connected Sheets・Gemini） | コネクタ経由 |

</div>

<div class="caption">「ストレージ／コンピュート分離」「Iceberg対応」は両者共通。差は運用モデル（サーバレス vs ウェアハウス）と既存資産との距離</div>

<div class="takeaway">BigQuery＝運用が軽くGoogle資産と密／Snowflake＝マルチクラウド運用に強み</div>

<!-- BigQueryとSnowflakeの技術比較。両者ともストレージ/コンピュート分離・Iceberg対応は共通。違いは(1)運用モデル：BQは完全サーバレス（スロット自動・遊休課金なし）、SFは仮想ウェアハウスのサイズ選択・起動停止が必要 (2)課金：BQは走査量orスロット定額、SFはクレジット秒課金＋保存 (3)SQL内蔵AI：BQはBigQuery ML/Gemini、SFはCortex (4)既存資産との距離：BQはWorkspace/Boxとネイティブ、SFはコネクタ経由。本学の前提（Workspace+Box・専任DE少）ではBQの運用の軽さと近さが効くという技術的事実。中立に提示。 -->

---

<!-- _class: fig fig-sm -->

<div class="page-title">料金プラン</div>

## 各社の料金プラン ― 基盤とシート（2026・教育向け定価）

<div class="fig-area">

| 区分 | 製品 / ライセンス | 単価（2026・定価） |
|---|---|---|
| 基盤 | BigQuery（GCP） | 走査 $6.25/TiB（月1TiB無料）・保存 $0.02/GB／Enterprise $0.06/slot時 |
| 基盤 | Snowflake | クレジット：Std **$2**・Ent **$3**・BizCrit **$4**／保存 $23/TB（東京 +10〜50%） |
| 基盤 | Databricks | DBU：Jobs **$0.15** 〜 Serverless SQL **$0.70**（Premium／Ent +15〜25%・別途VM代） |
| 基盤 | HULFT Square | 公開価格なし（要見積） |
| 基盤 | Microsoft Fabric | 容量 F2 約$262/月〜・F64 約$5,257/月（予約 −30〜40%） |
| 席 | 基本AI（Gemini in Workspace・Studio） | **無償**（Education） |
| 席 | Gemini Enterprise SDK（教育・見積） | 学生 **¥600**・教職員 **¥2,800** /人/月 |
| 席 | Gemini Enterprise（商用・参考） | Business $21・Standard $30・Plus $50 /人/月 |
| 席 | M365 Copilot（参考） | 商用 $30・教育 $18 /人/月 |

</div>

<div class="caption">定価/オンデマンド。Snowflake・Databricks は従量（使用量×単価）で総額は使用量次第（容量契約 −20〜45%）。次ページ（コスト概算）はこの単価に人数・規模を当てた試算。$1=160円</div>

<div class="takeaway">基盤(SF/DB)は使った分だけ・席は人数×単価。これを元に次ページで実額化</div>

<!--
- データ基盤そのものの費用は年100万円規模で誤差。効くのは契約数（個社組合せ案は3つ）と運用人件費（クラスタ/ウェアハウスのチューニング）。BigQueryはサーバレスで遊休課金ゼロ。
- 推論単価は2023→2026で約94.5%減。最新Flash級でも安い。モデルは差し替え可能に保つのが正解（CHAPTER 3）。
-->

---

<!-- _class: fig -->

<div class="page-title">コスト概算</div>

## 実費でいくら？ 教職員100人 と 全員（医療系除く2,208名）

<div class="fig-area">

| 費目（実費） | GCP案 | 個社組合せ案 |
|---|---|---|
| **初期**：設計・構築・移行（一度） | 約1,000万円（移行）＋設計小 | 約3,000万〜（3製品の設計・構築・移行） |
| 年額：基盤・連携・運用 | BigQuery従量＋兼任 ＝ **〜100万円** | 3製品＋専任DE ＝ **約3,000万〜1億円超** |
| 年額：AI席 教職員100人 | ¥2,800×100×12 ＝ **約336万円** | 同 約336万円 |
| 年額：AI席 教職員全員(2,208) | ¥2,800×2,208×12 ＝ **約7,420万円** | 同 約7,420万円 |
| **年額合計：100人** | **約436万円** | **約3,300万〜1億円超** |
| **年額合計：教職員全員** | **約7,520万円** | **約1.0億〜1.7億円超** |

</div>

<div class="caption">初期＝一度きり（設計・構築・移行）／年額＝ランニング。AI席＝Gemini SDK ¥2,800/教職員/月（両案同額）。<br>Education は基本AI無償＝有料席は任意。$1=160円・要見積</div>

<div class="takeaway">AI席は両案共通。差は初期＋基盤・運用 ― GCPは軽い、個社は3製品で重い</div>

<!-- 個社案の値段感を具体化。Snowflake/Databricksは中規模で各$36K〜96K/年、大規模はmedian$250K/年規模。加えてHULFT（要見積）と専任データエンジニア2-3名の人件費が支配的で、利用が小さくても下がりにくい。GCP案はBigQueryが年100万円規模、Geminiは配布範囲で可変、サーバレスで専任人材が最小。前提を明示した概算で、規模が小さいほどGCP案が安いという事実を示す。 -->

---

<!-- _class: summary -->

<div class="page-title">支援・人材育成</div>

## 導入後の支援と人材育成（評価要因）

<div class="callout-blue">Google Cloud / Google for Education（Google 合同会社）の支援</div>

- **Google Skills** で Cloud の内容を**無料で学習**できる（職員・学生）
- 千葉大学では、さらに**資格試験の受験料が半額**
- **Google・パートナー企業からの直接支援**（PoC・設計・移行）が受けられる

<div class="callout-orange" style="margin-left: 2.5em; color: #6b7280;">人的ネットワーク：Google 元・生成AI本部長 橋口剛 氏との繋がりがあり、Google本体へ直接の質問、Google側エンジニアとの直接の打合せ設定が可能</div>

<div class="callout-gray">参考：個社組合せ案（Snowflake / Databricks / HULFT）</div>

- 各ベンダーと**個別契約**。教育・認定プログラムは製品ごとに別建て
- 学習リソース・認定は各社にあるが、**横断の一元支援は限定的**

<div class="takeaway">導入支援・人材育成・資格取得の容易さも評価に織り込む</div>

<!-- ベンダー支援・人材育成という評価軸。Google：Google SkillsでCloudを無料学習、千葉大では資格受験料が半額、Google/パートナーから直接支援（PoC・設計・移行）。さらにGoogle元・生成AI本部長 橋口剛氏との繋がりがあり、Google本体へ直接の質問・打合せ設定が可能（本人の人的ネットワーク）。個社案は各社個別契約で教育・支援が分散。 -->

---

<!-- _class: summary -->

<div class="page-title">他大学での実績</div>

## 他大学での導入実績（採用例）も評価に入れる

<div class="sections">

<div class="sec-box">

### GCP案（Google）

- 教育機関で最も広く普及（Workspace for Education＋Gemini・全年齢対応）
- **大阪大学・東北大学**など、BigQuery を IR・データ分析基盤に採用、知見・横展開が容易

</div>

<div class="sec-box">

### 個社案（Snowflake / Databricks）

- Databricks＝**UC Berkeley 発**、研究大学で研究・ML・大規模分析に採用
- Higher Education 向けソリューションあり
- Snowflake＝分析・IR 基盤での採用例

</div>

<div class="sec-box">

### Azure案（Microsoft）

- M365 が国内大学で大きなシェア
- **東京大学**が全学の生成AI環境で Copilot/M365 を整備（AXIES 2024）
- M365 中心の大学に親和性

</div>

</div>

<div class="takeaway">本学と同型の大学が多いGoogle案が横展開で有利（研究重分析はDatabricks）</div>

<!-- 他大学実績を評価要因に追加。Google＝教育機関で最普及（本学と同型が多く知見・人材・横展開で有利）。Databricks＝UC Berkeley発で研究大学に実績。Snowflake＝分析/IR。MS＝M365シェア大・東大が生成AI環境でCopilot/M365（AXIES2024）。具体的な国内大学の名前付き事例は各社カスタマー事例で要確認（この場では捏造しない）。 -->

---

<!-- _class: summary -->

<div class="page-title">⑦ Box 連携</div>

## Box の扱い：直結（コネクタ）と多段（ETL）の比較

<div class="sections">

<div class="sec-box">

### GCP案：Gemini × Box（直結）

- ネイティブBoxコネクタで連携（数クリック）
- 取り込み不要のフェデレーション検索が可能
- Box内のPDF/PPTX/XLSX/CSVを直接解析
- Boxの既存権限を継承＝見える人だけ見える

</div>

<div class="sec-box">

### 個社組合せ案：Snowflake経由（多段コピー）

- 基盤を越えて何度も読み込みが発生
- コピーのたびに整合性・鮮度・権限の管理が増える
- 連携処理（ETL）を作り込み、保守し続ける必要
- 「Box＝データレイク」が遠回りになる

</div>

</div>

<div class="takeaway">直結はコピー不要で保守が軽い／多段ETLはコピーと保守が継続発生</div>

<!--
- ご依頼の核心。Gemini EnterpriseはBoxコネクタを公式に持ち、フェデレーション（コピー不要）と取込の両対応。Box内のOffice/PDFを開かず解析。権限はBox側を継承。
- 個社組合せ案はBoxの中身をAIに見せるまでに何段もコピー＋パイプライン保守。
-->

---

<!-- _class: summary -->

<div class="page-title">⑦ Office・Workspace 連携</div>

## MS必須要件を壊さず、AIだけ横断させる

<div class="sections">

<div class="sec-box">

### ファイルは今のまま

- Word・Excel・Teams・Box はそのまま継続、文科省のMS前提も維持できる
- UI/UXレイヤーでは、既存の使い勝手を変えない

</div>

<div class="sec-box">

### AIが横断して参照

- SharePoint/OneDrive/Outlook/Box/Workspace
- これらをコネクタで横断検索（権限継承）※ GCPではM365系コネクタは現在プレビュー、Boxは利用可

</div>

<div class="sec-box">

### Excel ⇄ BigQuery

- ODBC/Power QueryでExcelからSQL接続
- SheetsはConnected Sheetsで直接分析
- 既存の「ExcelにRDB接続」運用を継続可

</div>

</div>

<div class="takeaway">Officeは残す。GeminiはUIを変えず横串だけ通す</div>

<!--
- GCP案はOfficeを置き換えない。Gemini EnterpriseはSharePoint・OneDrive・Outlook・Box・Workspaceを横断（権限尊重）。ただしM365系コネクタは2026年中盤時点でプレビュー、Boxデータストアは利用可。本番はPoCで実測してから。
-->

---

<!-- _class: fig -->

<div class="page-title">配布シナリオ別 試算</div>

## 有料版AIを全学に配るといくら？（実人数・令和7年5月1日）

<div class="fig-area">

| # | 配布対象 | 人数 | 単価(月) | 年額 |
|---|---|---:|---|---:|
| ① | 大学院以上学生（院生） | 3,472 | ¥600 | **約2,500万円** |
| ② | 教職員(医療系除く) | 2,208 | ¥2,800 | **約7,420万円** |
| ③ | 学生全員 ＋ 教職員(医療系除く) | 16,130 | ¥600/¥2,800 | **約1.74億円** |
| 参考 | 院生 ＋ 教職員(医療系除く) | 5,680 | ¥600/¥2,800 | 約9,920万円 |
| 参考 | 教員フル配布のみ（最小） | 100 | ¥2,800 | 約336万円 |

</div>

<div class="caption">人数：学部生10,450／院生3,472／役員・教職員3,658（うち医療職1,450を除外＝2,208）。<br>Gemini Enterprise SDK 教育価格（学生¥600・教職員¥2,800/月）を参考。</div>

<div class="takeaway">¥600学生プランでも教室など限定範囲にAIエージェント配布可</div>

<!--
- 医療職1,450（病院看護師等）を除外。段階配布：教員100名(約336万)→院生＋教職員医療系除く(約9,920万)→学生全員まで(約1.74億)。
- M365 Copilotは300席最小で層別の絞り込み配布が組みにくい。Geminiは必要人数だけ配れる。全員の底上げはWorkspace無償ベースラインが担う。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# 2026年の現状と展望

## 「最終的にどちらが良くなるか」を決める3つの力

<!--
- 将来展望。Iceberg収束で可逆に、推論コストは急落、そして「モデルに近いほど有利」。この3つがいずれもGCP案を有利にする。
-->

---

<!-- _class: summary -->

<div class="page-title">可逆性とコスト</div>

## Iceberg収束で乗換自由、推論は急落

<div class="sections">

<div class="sec-box">

### Iceberg大収束（2026/3完成）

- データ基盤＝**ストレージ＋計算エンジン＋テーブル形式**の3要素
- Iceberg＝**テーブル形式を標準化**しエンジンから独立させる層
- 4基盤（BQ/Snowflake/Databricks/Fabric）が対応＝**乗換可**
- 移行はクエリ翻訳のみ（データ移行≒0）＝選択の失敗リスク小

</div>

<div class="sec-box">

### 推論コストの急落

- 出力単価は2023→2026で**約94.5%減**（年200倍ペース）
- 最新Gemini 3.5 Flashでも $1.50/$9.00
- 逆風＝エージェント多段でトークン10〜50倍
- → 特定モデル固定は不利。**差し替え可能**が有利

</div>

</div>

<div class="takeaway">基盤は乗換可能・モデルは毎年交代 ― 軽さと差し替え可能性が評価軸</div>

<!--
- Iceberg収束でフォーマットのロックインは消滅。ロックインの本質は「ヒト・ワークフロー・AI統合」へ移った。
- 推論はコモディティ化。モデルは半年で最安最強が変わる。Model Garden(200+・Claude含む)で差し替えられる基盤が有利。
-->

---

<!-- _class: summary -->

<div class="page-title">評価要因</div>

## ベンダーとモデルの距離（垂直統合）

<div class="sections">

<div class="sec-box">

### 近さ＝有利の理由（垂直統合）

- モデル＝クラウド＝アプリ＝既存ベンダー一致ほど有利
- ①新モデル早期　②第一者価格（中間マージンなし）
- ③TPU最適化の価格性能　④最深の統合
- Snowflake/Databricksはモデルを**借りる**一段遠い層

</div>

<div class="sec-box">

### 本学への含意と"解"

- **Google**＝Gemini自社で、本学は**既にGoogleに最も近い**
- Boxは「置き場」、頭脳（モデル）はGoogle側に
- 解：第一者Geminiを主役に Model Garden で差替可
- データ=Iceberg／連携=MCP・A2A の開放層で可逆に

</div>

</div>

<div class="takeaway">モデルに近いほど、値段は安く、性能が上がり、単純になる / 設計でロックイン防止</div>

<!--
- モデルに近い＝有利は正しく、本学はその近さを既に持つ。条件は一社のモデルに固定せず開放層(Iceberg/MCP/A2A)で可逆性を確保すること。
- Snowflake/DatabricksはモデルをAPIで借りる層なので、新モデル取り込みに遅延・再販マージンが乗る。
-->

---

<!-- _class: summary -->

<div class="page-title">アカデミック価格</div>

## 教育機関向け価格・無償枠の適用

<div class="sections">

<div class="sec-box">

### Google（多くが無償/バンドル）

- Gemini in Workspace 主要機能は**Education版に無償同梱**
- ノーコードの**Workspace Studio も無償**（現場が自作$0）
- Google AI Pro for Education ≒ **$132/人/年**（商用の1/3以下）
- Gemini Enterpriseも年7200円/1人
- BigQueryは教育/研究クレジットで相殺可

</div>

<div class="sec-box">

### 他案

- MS：Copilot Chatは無償だが**フルCopilotは$18/人/月**の有料アドオン（300席最小）
- **Snowflake/Databricks：本番運用の教育割引なし**
→ 個社組合せ案の費用劣位はアカデミック前提でむしろ拡大

</div>

</div>

<div class="takeaway">無償ベースライン＋安価な席で、底上げと本格利用を両立</div>

<!--
- 本学はWorkspace for Education運用。Gemini in WorkspaceとWorkspace Studioが無償＝現場のエージェント自作が$0。プレミアムもAI Pro $132/年。
- Snowflake/Databricksの教育プログラムは授業・研究用の無償アクセスのみで、本番基盤の価格優遇ではない。
-->

---

<!-- _class: summary -->

<div class="page-title">個社組み合わせが生きるシナリオ</div>

## Snowflake / Databricks のほうが良い場合

<div class="sections">

<div class="sec-box">

### それでも個社組合せ案が有利なケース

- マルチクラウド義務・ベンダー中立が要件
- 超大規模のデータエンジニアリング/ML
- 独立した重い分析を持つ事業部が多数

</div>

<div class="sec-box">

### 本学で「必須でない」理由

- 規模は3,000人規模・主に事務/教学データ
- すでにWorkspace＋Boxの土台がある
- 必要になれば後から足せる（最初は不要）

</div>

</div>

<div class="takeaway">「必要になれば足せる」が現実解では？</div>

<!--
- フェアに。Snowflake/Databricksは超大規模・マルチクラウド義務・専任DEチームを持つ組織では合理的。本学はいずれにも当てはまらない。Lakehouse Federation/Icebergで後から共存できる。
-->

---

<!-- _class: summary -->

<div class="page-title">リバースETL</div>

## 分析の先：AIが起案・実行 → 人が承認 → 業務に反映（リバースETL）

<div class="sections">

<div class="sec-box">

### GCP案 ◎

- Gemini Enterprise Agent がアクション実行
- Workspace Flows／Apps Script で Box・SaaS・Sheets に書き戻し
- **承認ステップ（人の確認）を組み込める**

</div>

<div class="sec-box">

### Azure案 ◎

- **Power Automate が承認フローを標準装備**
- Copilot Studio エージェントと連携
- M365内の業務はMSの王道

</div>

<div class="sec-box">

### 個社案 △

- Snowflake/Databricks は分析側が強い
- 書き戻しは Census/Hightouch や HULFT が別途
- 承認フローも別実装が必要

</div>

</div>

<div class="takeaway">AI実行＋人の承認はGCP・Azureがネイティブ／個社案は書き戻しツールが別途要</div>

<!-- リバースETL＝分析の逆向き（データ基盤→業務システムへ書き戻す）。AIが起案・実行→人が承認→反映というhuman-in-the-loopの業務。GCP＝Gemini Agent＋Workspace Flows/Apps Scriptでネイティブ・承認ステップ可。Azure＝Power Automateの承認フロー＋Copilot Studio（MSの王道）。個社＝分析は強いが書き戻し（Census/Hightouch/HULFT）と承認は別途。本学はWorkspace運用なのでGCP案が素直。GCPとAzureが◎、本学前提ではGCPが native。 -->

---

<!-- _class: fig -->

<div class="page-title">段階導入</div>

## 契約ゼロのPoCから開始

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
  <line x1="260" y1="271" x2="288" y2="217" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#rmB)"/>
  <line x1="520" y1="215" x2="548" y2="161" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#rmB)"/>
  <line x1="780" y1="159" x2="808" y2="105" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#rmB)"/>
  <line x1="20" y1="320" x2="1090" y2="320" stroke="#cbd5cf" stroke-width="2"/>
  <text x="145" y="344" font-size="12" fill="#6b7280" text-anchor="middle">試行</text>
  <text x="405" y="344" font-size="12" fill="#6b7280" text-anchor="middle">小規模</text>
  <text x="665" y="344" font-size="12" fill="#6b7280" text-anchor="middle">部署横断</text>
  <text x="930" y="344" font-size="12" fill="#6b7280" text-anchor="middle">全学</text>
</svg>

</div>

<div class="takeaway">大きな初期投資なしに、効果を見ながら段階拡張できる</div>

<!--
- STEP1はBoxコネクタ接続だけで追加契約ゼロのPoC。効果が見えたらSTEP2でBigQueryに必要分、STEP3で現場がノーコードでエージェント、STEP4で全学・基幹連携。個社組合せ案の「まず3製品契約」という重い入口にならない。
-->

---

<!-- _class: refs -->

<div class="page-title">出典・参考</div>

## 出典・参考（主要）

- **Google Cloud**：Connect Box ／ Gemini Enterprise Agent Platform（Cloud Next '26）／ BigLake・Iceberg・Connected Sheets・BigQuery 価格（docs.cloud.google.com）
- **Iceberg**：Apache Iceberg 公式 ／ Snowflake×Fabric 相互運用（2026/3）／ NateRive「なぜ今 Iceberg」(Qiita)
- **基盤コスト**：Snowflake クレジット・Databricks DBU 単価／本番費用（Revefi・CloudZero・tech-insider）
- **推論コスト**：a16z LLMflation ／ Epoch AI 推論価格トレンド ／ Gemini 3.5 Flash・Claude 価格（claude-api）
- **Microsoft**：M365 Copilot 教育価格 ／ Microsoft Fabric 価格
- **千葉大学（公表値）**：役員・教職員数 ／ 学部・大学院学生数（令和7年5月1日現在）

<!--
- 価格・コネクタ・連携の事実はGoogle Cloud公式とベンダー比較・公表値に基づく。価格は2026年6月時点・定価ベースで、実導入時は見積・GA状況で再確認。詳細根拠は同フォルダ ANALYSIS_deep-comparison_2026.md を参照。
-->
