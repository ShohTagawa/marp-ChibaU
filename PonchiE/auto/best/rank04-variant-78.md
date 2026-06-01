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
    <linearGradient id="gNavyH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15314f"/><stop offset="1" stop-color="#0c2236"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1ec8c0"/><stop offset="1" stop-color="#0e8e88"/></linearGradient>
    <linearGradient id="gTealH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16a8a0"/><stop offset="1" stop-color="#0c7a74"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#11405f"/><stop offset="0.55" stop-color="#0e6f6a"/><stop offset="1" stop-color="#16b0a8"/></linearGradient>
    <radialGradient id="gGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#1ec8c0" stop-opacity="0.35"/><stop offset="1" stop-color="#1ec8c0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2236" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2236" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f3f7fa"/>
  <g opacity="0.5">
    <circle cx="150" cy="190" r="3" fill="#9fc0d6"/><circle cx="240" cy="160" r="2.5" fill="#9fc0d6"/><circle cx="330" cy="220" r="3" fill="#9fc0d6"/><circle cx="430" cy="170" r="2.5" fill="#9fc0d6"/><circle cx="560" cy="210" r="3" fill="#9fc0d6"/><circle cx="660" cy="160" r="2.5" fill="#9fc0d6"/><circle cx="780" cy="200" r="3" fill="#9fc0d6"/><circle cx="900" cy="170" r="2.5" fill="#9fc0d6"/><circle cx="1020" cy="220" r="3" fill="#9fc0d6"/><circle cx="1130" cy="180" r="2.5" fill="#9fc0d6"/>
    <circle cx="180" cy="380" r="2.5" fill="#9fc0d6"/><circle cx="300" cy="430" r="3" fill="#9fc0d6"/><circle cx="470" cy="400" r="2.5" fill="#9fc0d6"/><circle cx="640" cy="450" r="3" fill="#9fc0d6"/><circle cx="820" cy="410" r="2.5" fill="#9fc0d6"/><circle cx="980" cy="440" r="3" fill="#9fc0d6"/><circle cx="1110" cy="400" r="2.5" fill="#9fc0d6"/>
    <circle cx="220" cy="580" r="3" fill="#9fc0d6"/><circle cx="380" cy="610" r="2.5" fill="#9fc0d6"/><circle cx="560" cy="600" r="3" fill="#9fc0d6"/><circle cx="760" cy="620" r="2.5" fill="#9fc0d6"/><circle cx="960" cy="590" r="3" fill="#9fc0d6"/><circle cx="1100" cy="610" r="2.5" fill="#9fc0d6"/>
    <path d="M150 190 L240 160 L430 170 L660 160 L900 170 L1130 180" stroke="#bcd4e3" stroke-width="1" fill="none"/>
    <path d="M180 380 L470 400 L820 410 L1110 400" stroke="#bcd4e3" stroke-width="1" fill="none"/>
    <path d="M330 220 L300 430 L380 610" stroke="#bcd4e3" stroke-width="1" fill="none"/>
    <path d="M780 200 L820 410 L760 620" stroke="#bcd4e3" stroke-width="1" fill="none"/>
    <path d="M1020 220 L980 440 L960 590" stroke="#bcd4e3" stroke-width="1" fill="none"/>
  </g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gNavyH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#0c2236" opacity="0.92"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#8fe6e0">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="58" y="124" font-size="13.5" font-weight="700" fill="#b15a2e">課題（現状）</text>
  <text x="470" y="124" font-size="13.5" font-weight="700" fill="#0c7a74" text-anchor="middle">AI × 接続基盤</text>
  <text x="544" y="124" font-size="13.5" font-weight="700" fill="#16624b">打ち手（効果）</text>
  <text x="846" y="124" font-size="10" fill="#94a8b5" text-anchor="end">A–D を 1:1 で対応</text>
  <rect x="40" y="142" width="380" height="86" rx="11" fill="#fceee4" filter="url(#shSoft)"/>
  <circle cx="68" cy="167" r="13" fill="#e07b39"/>
  <text x="68" y="172" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="90" y="166" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="56" y="194" font-size="10.5" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="214" font-size="10.5" fill="#7a5a45">研究費申請・評価資料・学振添削で限界</text>
  <circle cx="470" cy="185" r="20" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="470" y="190" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M428 185 L444 185 M496 179 L510 185 L496 191" stroke="#0c7a74" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="522" y="142" width="338" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="142" width="6" height="86" rx="3" fill="url(#gTealH)"/>
  <text x="544" y="166" font-size="13.5" font-weight="700" fill="#0c5a55">指導負担を軽減し研究時間を確保</text>
  <text x="544" y="194" font-size="10.5" fill="#3c5b58">AI多言語支援・ラボ共通支援・支援者接続で</text>
  <text x="544" y="214" font-size="10.5" fill="#3c5b58">教員は研究そのものに時間を回せる</text>
  <rect x="40" y="238" width="380" height="86" rx="11" fill="#fceee4" filter="url(#shSoft)"/>
  <circle cx="68" cy="263" r="13" fill="#e07b39"/>
  <text x="68" y="268" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="90" y="262" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が高度化</text>
  <text x="56" y="290" font-size="10.5" fill="#7a5a45">成功モデルが多様化し求める水準が上昇</text>
  <text x="56" y="310" font-size="10.5" fill="#7a5a45">個別の能力育成と資源の最適投下が必須</text>
  <circle cx="470" cy="281" r="20" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="470" y="286" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M428 281 L444 281 M496 275 L510 281 L496 287" stroke="#0c7a74" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="522" y="238" width="338" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="238" width="6" height="86" rx="3" fill="url(#gTealH)"/>
  <text x="544" y="262" font-size="13.5" font-weight="700" fill="#0c5a55">院生一人ひとりの研究力を向上</text>
  <text x="544" y="290" font-size="10.5" fill="#3c5b58">CVデータベース＋AI伴走で段階別の個別支援</text>
  <text x="544" y="310" font-size="10.5" fill="#3c5b58">留学・ラボ・企業マッチングも可能に</text>
  <rect x="40" y="334" width="380" height="86" rx="11" fill="#fceee4" filter="url(#shSoft)"/>
  <circle cx="68" cy="359" r="13" fill="#e07b39"/>
  <text x="68" y="364" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="90" y="358" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="56" y="386" font-size="10.5" fill="#7a5a45">支援が乱立・重複・分散している</text>
  <text x="56" y="406" font-size="10.5" fill="#7a5a45">真に必要とする個人へ届かない</text>
  <circle cx="470" cy="377" r="20" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="470" y="382" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M428 377 L444 377 M496 371 L510 377 L496 383" stroke="#0c7a74" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="522" y="334" width="338" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="334" width="6" height="86" rx="3" fill="url(#gTealH)"/>
  <text x="544" y="358" font-size="13.5" font-weight="700" fill="#0c5a55">個別最適な情報を直に届ける</text>
  <text x="544" y="386" font-size="10.5" fill="#3c5b58">①学生入力ニーズ ＋ ②全学の支援情報を突合</text>
  <text x="544" y="406" font-size="10.5" fill="#3c5b58">必要とする個人へダイレクトに投下</text>
  <rect x="40" y="430" width="380" height="86" rx="11" fill="#fceee4" filter="url(#shSoft)"/>
  <circle cx="68" cy="455" r="13" fill="#e07b39"/>
  <text x="68" y="460" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="90" y="454" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="56" y="482" font-size="10.5" fill="#7a5a45">同じ手続きの反復・窓口業務の繰り返し</text>
  <text x="56" y="502" font-size="10.5" fill="#7a5a45">システム乱立・データ分散・異動でゼロ化</text>
  <circle cx="470" cy="473" r="20" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="470" y="478" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M428 473 L444 473 M496 467 L510 473 L496 479" stroke="#0c7a74" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="522" y="430" width="338" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="430" width="6" height="86" rx="3" fill="url(#gTealH)"/>
  <text x="544" y="454" font-size="13.5" font-weight="700" fill="#0c5a55">支援者の労力削減・業務を効率化</text>
  <text x="544" y="482" font-size="10.5" fill="#3c5b58">データを基盤上で接続しAIで分析・RAGで省力化</text>
  <text x="544" y="502" font-size="10.5" fill="#3c5b58">IR・成果・回答を自動収集して統合分析</text>
  <ellipse cx="1055" cy="290" rx="180" ry="160" fill="url(#gGlow)"/>
  <rect x="900" y="142" width="310" height="288" rx="14" fill="#0c2236" filter="url(#sh)"/>
  <text x="1055" y="170" font-size="13" font-weight="700" fill="#8fe6e0" text-anchor="middle">接続アプリ（イメージ）</text>
  <rect x="975" y="186" width="160" height="232" rx="16" fill="#13314c" stroke="#2c5570" stroke-width="2"/>
  <rect x="989" y="204" width="132" height="22" rx="6" fill="url(#gTeal)"/>
  <text x="1055" y="219" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">あなたへの今日の機会</text>
  <rect x="989" y="234" width="132" height="34" rx="7" fill="#1d4763"/>
  <circle cx="1004" cy="251" r="7" fill="#1ec8c0"/>
  <text x="1018" y="248" font-size="8.5" fill="#cfe6ef">学振 添削サポート</text>
  <text x="1018" y="261" font-size="8" fill="#7fa3b5">締切まで12日・AI下書き有</text>
  <rect x="989" y="274" width="132" height="34" rx="7" fill="#1d4763"/>
  <circle cx="1004" cy="291" r="7" fill="#1ec8c0"/>
  <text x="1018" y="288" font-size="8.5" fill="#cfe6ef">海外ラボ マッチ 3件</text>
  <text x="1018" y="301" font-size="8" fill="#7fa3b5">CV・スキルから自動推薦</text>
  <rect x="989" y="314" width="132" height="34" rx="7" fill="#1d4763"/>
  <circle cx="1004" cy="331" r="7" fill="#1ec8c0"/>
  <text x="1018" y="328" font-size="8.5" fill="#cfe6ef">多言語 研究相談</text>
  <text x="1018" y="341" font-size="8" fill="#7fa3b5">AI伴走・支援者へ接続</text>
  <rect x="989" y="354" width="132" height="26" rx="13" fill="url(#gTeal)"/>
  <text x="1055" y="371" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">ニーズを入力 → 機会が届く</text>
  <text x="1055" y="402" font-size="9" fill="#7fa3b5" text-anchor="middle">学生ニーズ × 全学支援情報を AI が突合</text>
  <rect x="40" y="526" width="820" height="70" rx="12" fill="#0c2236" filter="url(#shSoft)"/>
  <text x="60" y="552" font-size="13" font-weight="700" fill="#8fe6e0">想定KPI（試算）</text>
  <text x="60" y="570" font-size="9.5" fill="#7fa3b5">※ 導入後の試算・見込み値</text>
  <rect x="208" y="538" width="158" height="46" rx="9" fill="#13344f"/>
  <text x="287" y="563" font-size="22" font-weight="700" fill="#1ec8c0" text-anchor="middle">+3h<tspan font-size="11" fill="#cfe6ef">/週</tspan></text>
  <text x="287" y="578" font-size="9" fill="#9fc0d6" text-anchor="middle">教員の研究時間</text>
  <rect x="374" y="538" width="158" height="46" rx="9" fill="#13344f"/>
  <text x="453" y="563" font-size="22" font-weight="700" fill="#1ec8c0" text-anchor="middle">−50<tspan font-size="11" fill="#cfe6ef">%</tspan></text>
  <text x="453" y="578" font-size="9" fill="#9fc0d6" text-anchor="middle">定型問い合わせ</text>
  <rect x="540" y="538" width="158" height="46" rx="9" fill="#13344f"/>
  <text x="619" y="563" font-size="22" font-weight="700" fill="#1ec8c0" text-anchor="middle">+20<tspan font-size="11" fill="#cfe6ef">pt</tspan></text>
  <text x="619" y="578" font-size="9" fill="#9fc0d6" text-anchor="middle">院生の研究力</text>
  <rect x="706" y="538" width="138" height="46" rx="9" fill="#13344f"/>
  <text x="775" y="563" font-size="22" font-weight="700" fill="#1ec8c0" text-anchor="middle">+5<tspan font-size="11" fill="#cfe6ef">pt</tspan></text>
  <text x="775" y="578" font-size="9" fill="#9fc0d6" text-anchor="middle">修了率（中退↓）</text>
  <rect x="900" y="446" width="310" height="150" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="930" cy="476" r="16" fill="url(#gTeal)"/>
  <path d="M923 476 L928 482 L938 470" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="956" y="481" font-size="14" font-weight="700" fill="#0c5a55">GOAL ― 副次的な成果</text>
  <g font-size="10.5" fill="#2d4a48">
    <circle cx="924" cy="508" r="3" fill="#16a8a0"/><text x="936" y="512">許諾済データの共有・利活用（学内・行政・企業と）</text>
    <circle cx="924" cy="534" r="3" fill="#16a8a0"/><text x="936" y="538">統合分析で経営判断を迅速化</text>
    <circle cx="924" cy="560" r="3" fill="#16a8a0"/><text x="936" y="564">基盤アプリの外販も視野</text>
  </g>
  <path d="M40 606 L1206 606 L1240 642 L1206 678 L40 678 Z" fill="url(#gGoal)"/>
  <text x="623" y="648" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
  <text x="623" y="700" font-size="11" fill="#5a7686" text-anchor="middle">分散した情報・データ・サポート・機会を一つの基盤に「接続」する</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-78 Before→After対応表(寒色ネイビー×teal/airy)。世界地図ドット背景+appMockup+kpiBand(想定/試算明示)+goalBurst。課題A-D↔打ち手A-Dを1:1。 -->
