---
marp: true
theme: ponchie
paginate: false
size: 16:9
header: ''
footer: ''
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e07b1f"/><stop offset="1" stop-color="#c25e10"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a93b"/><stop offset="1" stop-color="#e07b1f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ef8a22"/><stop offset="1" stop-color="#b9510a"/></linearGradient>
    <linearGradient id="gAct1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d8742e"/><stop offset="1" stop-color="#bf5d18"/></linearGradient>
    <linearGradient id="gPillar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6e8"/><stop offset="1" stop-color="#ffedd2"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd27a" stop-opacity="0.95"/><stop offset="0.55" stop-color="#f6a93b" stop-opacity="0.45"/><stop offset="1" stop-color="#f6a93b" stop-opacity="0"/></radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f6a93b" stop-opacity="0.16"/><stop offset="1" stop-color="#f6a93b" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9c4e0a" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9c4e0a" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d8742e"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#9aa3ad"/></marker>
  </defs>
  <circle cx="660" cy="250" r="150" fill="url(#halo)"/>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">Nexus University 構想 ― 〈研究 × 学び〉接続基盤</text>
  <rect x="1106" y="13" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="60" width="1280" height="34" fill="#fff1dc"/>
  <text x="40" y="83" font-size="15" font-weight="700" fill="#b9510a">学内に分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="116" font-size="12.5" font-weight="700" fill="#b07a3a">① 課題 ― このままでは立ち行かない</text>
  <rect x="40" y="124" width="312" height="332" rx="14" fill="#fffaf2" filter="url(#sh)"/>
  <rect x="40" y="124" width="312" height="34" rx="14" fill="url(#gAct1)"/>
  <rect x="40" y="140" width="312" height="18" fill="url(#gAct1)"/>
  <circle cx="64" cy="141" r="13" fill="#ffffff"/>
  <g transform="translate(64,142)" stroke="#bf5d18" stroke-width="1.9" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/><path d="M0 -1 V3"/></g>
  <circle cx="64" cy="148" r="1.1" fill="#bf5d18"/>
  <text x="86" y="146" font-size="13.5" font-weight="700" fill="#ffffff">分散・重複・ゼロリセット</text>
  <rect x="54" y="170" width="284" height="64" rx="9" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="68" y="189" font-size="12.5" font-weight="700" fill="#bf5d18">A 教員の業務負荷が急増</text>
  <text x="68" y="207" font-size="11" fill="#5a5048">院生の多様化（社会人・留学生・他分野）</text>
  <text x="68" y="224" font-size="11" fill="#5a5048">研究費申請・評価資料・学振添削で限界</text>
  <rect x="54" y="240" width="284" height="64" rx="9" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="68" y="259" font-size="12.5" font-weight="700" fill="#bf5d18">B 人材育成が多様化・高度化</text>
  <text x="68" y="277" font-size="11" fill="#5a5048">成功モデルが多様化・求める水準が上昇</text>
  <text x="68" y="294" font-size="11" fill="#5a5048">個別の能力育成と資源の最適投下が必須</text>
  <rect x="54" y="310" width="284" height="64" rx="9" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="68" y="329" font-size="12.5" font-weight="700" fill="#bf5d18">C 大学→個人のミッシングリンク</text>
  <text x="68" y="347" font-size="11" fill="#5a5048">支援が乱立・重複・分散する</text>
  <text x="68" y="364" font-size="11" fill="#5a5048">真に必要な個人に届かない</text>
  <rect x="54" y="380" width="284" height="64" rx="9" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="68" y="399" font-size="12.5" font-weight="700" fill="#bf5d18">D 支援者の実践知が活かせない</text>
  <text x="68" y="417" font-size="11" fill="#5a5048">同じ手続きの反復・システム乱立</text>
  <text x="68" y="434" font-size="11" fill="#5a5048">データ分散・異動でゼロリセット</text>
  <path d="M356 274 L376 274 L390 296 L376 318 L356 318 L370 296 Z" fill="#e07b1f"/>
  <text x="373" y="262" font-size="11" font-weight="700" fill="#b07a3a" text-anchor="middle">接続</text>
  <text x="394" y="116" font-size="12.5" font-weight="700" fill="#b07a3a">② 2本柱で接続 ― アプリ × AI基盤（A–D に1:1で対応）</text>
  <rect x="394" y="124" width="494" height="332" rx="14" fill="#fffaf2" filter="url(#sh)"/>
  <rect x="404" y="138" width="278" height="156" rx="11" fill="url(#gPillar)" filter="url(#shS)"/>
  <circle cx="426" cy="160" r="13" fill="#e07b1f"/>
  <g transform="translate(426,160)" stroke="#ffffff" stroke-width="1.7" fill="none"><rect x="-5" y="-7" width="10" height="14" rx="2"/><path d="M-2 5 H2"/></g>
  <text x="448" y="165" font-size="13" font-weight="700" fill="#b9510a">柱① アプリ（学生フロント）</text>
  <rect x="414" y="178" width="60" height="100" rx="9" fill="#ffe9cd"/>
  <rect x="418" y="182" width="52" height="92" rx="7" fill="#ffffff" stroke="#e07b1f" stroke-width="1.2"/>
  <rect x="418" y="182" width="52" height="15" rx="7" fill="#e07b1f"/>
  <rect x="418" y="190" width="52" height="7" fill="#e07b1f"/>
  <rect x="424" y="204" width="40" height="8" rx="3" fill="#fff1dc" stroke="#f1d9b8" stroke-width="0.6"/>
  <circle cx="430" cy="223" r="4" fill="#ffd9a8"/><rect x="437" y="219" width="27" height="6" rx="2" fill="#ffd9a8"/>
  <circle cx="430" cy="238" r="4" fill="#ffd9a8"/><rect x="437" y="234" width="27" height="6" rx="2" fill="#ffd9a8"/>
  <circle cx="430" cy="253" r="4" fill="#ffd9a8"/><rect x="437" y="249" width="27" height="6" rx="2" fill="#ffd9a8"/>
  <rect x="424" y="262" width="40" height="9" rx="4" fill="#e07b1f"/>
  <text x="486" y="200" font-size="11" font-weight="700" fill="#b9510a">A 教員の指導負担↓</text>
  <text x="486" y="217" font-size="10.5" fill="#5a5048">AI多言語支援・ラボ共通支援</text>
  <text x="486" y="240" font-size="11" font-weight="700" fill="#b9510a">B 院生の研究力↑</text>
  <text x="486" y="257" font-size="10.5" fill="#5a5048">CVデータベース＋AI伴走の</text>
  <text x="486" y="271" font-size="10.5" fill="#5a5048">段階別個別支援・マッチング</text>
  <text x="688" y="220" font-size="22" font-weight="700" fill="#e07b1f" text-anchor="middle">×</text>
  <rect x="702" y="138" width="176" height="156" rx="11" fill="url(#gPillar)" filter="url(#shS)"/>
  <circle cx="724" cy="160" r="13" fill="#e07b1f"/>
  <g transform="translate(724,160)" stroke="#ffffff" stroke-width="1.6" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="746" y="165" font-size="13" font-weight="700" fill="#b9510a">柱② AI基盤</text>
  <text x="714" y="192" font-size="11" font-weight="700" fill="#b9510a">C 個別最適を直に届ける</text>
  <text x="714" y="208" font-size="10.5" fill="#5a5048">学生ニーズ ＋ 全学の支援</text>
  <text x="714" y="222" font-size="10.5" fill="#5a5048">情報を突合→必要な個人へ</text>
  <text x="714" y="246" font-size="11" font-weight="700" fill="#b9510a">D 支援者の労力↓</text>
  <text x="714" y="262" font-size="10.5" fill="#5a5048">基盤上で接続・AIで分析</text>
  <text x="714" y="276" font-size="10.5" fill="#5a5048">反復・窓口をRAGで省力化</text>
  <rect x="404" y="304" width="474" height="62" rx="10" fill="#fff1dc"/>
  <text x="418" y="324" font-size="12" font-weight="700" fill="#b9510a">副次価値</text>
  <text x="418" y="343" font-size="10.5" fill="#5a5048">許諾済データの共有・利活用（学内・行政・企業の共同研究）</text>
  <text x="418" y="359" font-size="10.5" fill="#5a5048">統合分析で経営判断を迅速化／アプリ外販</text>
  <text x="394" y="386" font-size="12.5" font-weight="700" fill="#b07a3a">想定KPI（試算・効果検証前）</text>
  <rect x="404" y="394" width="114" height="62" rx="10" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="461" y="424" font-size="22" font-weight="700" fill="#e07b1f" text-anchor="middle">+3h</text>
  <text x="461" y="442" font-size="10" fill="#7a6a58" text-anchor="middle">教員 研究時間/週</text>
  <rect x="524" y="394" width="114" height="62" rx="10" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="581" y="424" font-size="22" font-weight="700" fill="#e07b1f" text-anchor="middle">-50%</text>
  <text x="581" y="442" font-size="10" fill="#7a6a58" text-anchor="middle">定型問い合わせ</text>
  <rect x="644" y="394" width="114" height="62" rx="10" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="701" y="424" font-size="21" font-weight="700" fill="#e07b1f" text-anchor="middle">+20pt</text>
  <text x="701" y="442" font-size="10" fill="#7a6a58" text-anchor="middle">院生の研究力</text>
  <rect x="764" y="394" width="114" height="62" rx="10" fill="#ffffff" stroke="#f1d9b8" stroke-width="1"/>
  <text x="821" y="424" font-size="21" font-weight="700" fill="#e07b1f" text-anchor="middle">+5pt</text>
  <text x="821" y="442" font-size="10" fill="#7a6a58" text-anchor="middle">修了率（中退↓）</text>
  <path d="M892 274 L912 274 L926 296 L912 318 L892 318 L906 296 Z" fill="#e07b1f"/>
  <text x="909" y="262" font-size="11" font-weight="700" fill="#b07a3a" text-anchor="middle">躍動</text>
  <circle cx="1063" cy="280" r="118" fill="url(#burst)"/>
  <g stroke="#f6a93b" stroke-width="3" stroke-linecap="round" opacity="0.7"><path d="M1063 150 V128"/><path d="M1063 410 V432"/><path d="M933 280 H911"/><path d="M1193 280 H1215"/><path d="M972 189 L957 174"/><path d="M1154 371 L1169 386"/><path d="M1154 189 L1169 174"/><path d="M972 371 L957 386"/></g>
  <text x="930" y="116" font-size="12.5" font-weight="700" fill="#b07a3a">③ GOAL</text>
  <rect x="930" y="172" width="266" height="216" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="958" cy="202" r="15" fill="#ffffff"/>
  <g transform="translate(958,202)" stroke="#e07b1f" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.4"/></g>
  <text x="984" y="208" font-size="16" font-weight="700" fill="#ffffff">Nexus University</text>
  <text x="952" y="248" font-size="17" font-weight="700" fill="#ffffff">研究者と支援者が</text>
  <text x="952" y="272" font-size="17" font-weight="700" fill="#ffffff">躍動する大学へ</text>
  <text x="952" y="302" font-size="12" fill="#ffe8cc">情報・データ・サポート・機会</text>
  <text x="952" y="320" font-size="12" fill="#ffe8cc">が「接続」され連鎖的に伸びる</text>
  <text x="952" y="348" font-size="11.5" fill="#ffe8cc">中退率↓・修了率↑・研究力↑の好循環</text>
  <text x="952" y="368" font-size="11.5" fill="#ffe8cc">統合分析で経営判断を迅速化</text>
  <text x="40" y="486" font-size="12.5" font-weight="700" fill="#b07a3a">ロードマップ ― 接続の段階拡大（Level 1 → 3）</text>
  <path d="M150 560 C360 560 420 532 600 528 S960 502 1090 498" stroke="#e0b888" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="186" y="534" width="246" height="52" rx="10" fill="#fffaf2" filter="url(#shS)"/>
  <text x="206" y="556" font-size="13" font-weight="700" fill="#b9510a">L1 アプリで情報を集約</text>
  <text x="206" y="575" font-size="11" fill="#5a5048">分散する情報・資源を一つに</text>
  <rect x="596" y="508" width="246" height="52" rx="10" fill="#fffaf2" filter="url(#shS)"/>
  <text x="616" y="530" font-size="13" font-weight="700" fill="#b9510a">L2 AI基盤で個別支援</text>
  <text x="616" y="549" font-size="11" fill="#5a5048">伴走・負担軽減・実践知の展開</text>
  <rect x="982" y="482" width="258" height="52" rx="10" fill="#fffaf2" filter="url(#shS)"/>
  <text x="1002" y="504" font-size="13" font-weight="700" fill="#b9510a">L3 全学・経営へ展開</text>
  <text x="1002" y="523" font-size="11" fill="#5a5048">IR・成果・回答を統合分析</text>
  <circle cx="150" cy="560" r="22" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="150" y="568" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="600" cy="528" r="22" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="600" y="536" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="966" cy="498" r="22" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="966" y="506" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <g transform="translate(0,0)"><circle cx="1066" cy="556" r="16" fill="#fff1dc" stroke="#e07b1f" stroke-width="1.4"/><g transform="translate(1066,557)" stroke="#bf5d18" stroke-width="1.8" fill="none"><circle cx="0" cy="-4" r="3.4"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g><circle cx="1098" cy="556" r="16" fill="#fff1dc" stroke="#e07b1f" stroke-width="1.4"/><g transform="translate(1098,558)" stroke="#bf5d18" stroke-width="1.7" fill="none"><circle cx="-4" cy="-3" r="2.8"/><circle cx="5" cy="-3" r="2.8"/><path d="M-9 7 A5 5 0 0 1 0 6"/><path d="M0 6 A5 5 0 0 1 10 7"/></g><circle cx="1130" cy="556" r="16" fill="#fff1dc" stroke="#e07b1f" stroke-width="1.4"/><g transform="translate(1130,556)" stroke="#bf5d18" stroke-width="1.7" fill="none"><circle cx="0" cy="0" r="3.6"/><path d="M0 -7 V-4 M0 7 V4 M-7 0 H-4 M7 0 H4"/></g><circle cx="1162" cy="556" r="16" fill="#fff1dc" stroke="#e07b1f" stroke-width="1.4"/><g transform="translate(1162,556)" stroke="#bf5d18" stroke-width="1.7" fill="none"><path d="M-8 -2 L0 -7 L8 -2"/><path d="M-6 -2 V6 M0 -2 V6 M6 -2 V6 M-8 7 H8"/></g></g>
  <text x="1180" y="540" font-size="10" font-weight="700" fill="#b07a3a" text-anchor="end">学生・教員・職員・大学が躍動</text>
  <path d="M40 616 L1206 616 L1240 652 L1206 688 L40 688 Z" fill="url(#gHead)"/>
  <text x="623" y="658" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散を「接続」するハブ＝Nexus University で、研究者と支援者が躍動し続ける大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。橙/黄ムードの横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤[A-Dに1:1対応]→③GOAL goalBurst)＋下段ロードマップ旅(L1-3)。appMockup・登場人物アイコン群・KPIは想定/試算明示。packed密度・白基調クリーン。 -->
