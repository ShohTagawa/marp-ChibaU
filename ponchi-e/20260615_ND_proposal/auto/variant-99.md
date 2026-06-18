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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#103a52"/><stop offset="1" stop-color="#0c2a3c"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa39a"/><stop offset="1" stop-color="#0d6b66"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef9a52"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f9e5e"/><stop offset="1" stop-color="#1c6e40"/></linearGradient>
    <radialGradient id="gBg" cx="0.5" cy="0.42" r="0.75"><stop offset="0" stop-color="#eef6fb"/><stop offset="1" stop-color="#dbeaf3"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2a3c" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2a3c" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBg)"/>
  <g opacity="0.08" stroke="#0d6b66" fill="none" stroke-width="1.2">
    <ellipse cx="640" cy="420" rx="300" ry="300"/>
    <ellipse cx="640" cy="420" rx="300" ry="120"/>
    <ellipse cx="640" cy="420" rx="300" ry="210"/>
    <ellipse cx="640" cy="420" rx="120" ry="300"/>
    <ellipse cx="640" cy="420" rx="210" ry="300"/>
    <line x1="340" y1="420" x2="940" y2="420"/>
    <line x1="640" y1="120" x2="640" y2="720"/>
  </g>
  <g opacity="0.07" stroke="#103a52" stroke-width="1" stroke-dasharray="3 6">
    <line x1="150" y1="200" x2="430" y2="360"/>
    <line x1="430" y1="360" x2="760" y2="240"/>
    <line x1="760" y1="240" x2="1080" y2="420"/>
    <line x1="220" y1="560" x2="560" y2="470"/>
    <line x1="560" y1="470" x2="900" y2="600"/>
    <line x1="900" y1="600" x2="1130" y2="500"/>
  </g>
  <g opacity="0.1" fill="#0d6b66"><circle cx="150" cy="200" r="4"/><circle cx="430" cy="360" r="4"/><circle cx="760" cy="240" r="4"/><circle cx="1080" cy="420" r="4"/><circle cx="220" cy="560" r="4"/><circle cx="560" cy="470" r="4"/><circle cx="900" cy="600" r="4"/><circle cx="1130" cy="500" r="4"/></g>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHdr)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="58" width="1280" height="34" fill="#103a52" opacity="0.92"/>
  <text x="40" y="80" font-size="15" font-weight="700" fill="#cfe6f2">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="106" width="372" height="28" rx="8" fill="#FBEDE2"/>
  <text x="56" y="125" font-size="13.5" font-weight="700" fill="#c4632a">課題 ― いま大学が抱える困りごと</text>
  <rect x="436" y="106" width="128" height="28" rx="8" fill="#E2F4F2"/>
  <text x="500" y="125" font-size="13.5" font-weight="700" fill="#0d6b66" text-anchor="middle">AI×接続</text>
  <rect x="588" y="106" width="372" height="28" rx="8" fill="#E4F3EA"/>
  <text x="604" y="125" font-size="13.5" font-weight="700" fill="#1c6e40">打ち手 ― 接続基盤で実現すること</text>
  <g>
    <rect x="40" y="142" width="372" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="168" r="13" fill="#ffffff"/>
    <text x="68" y="173" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
    <text x="90" y="173" font-size="14" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
    <text x="58" y="198" font-size="11.5" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
    <text x="58" y="216" font-size="11.5" fill="#7a5a45">申請・評価資料・学振添削・全員留学で限界</text>
    <rect x="436" y="142" width="128" height="86" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <text x="500" y="180" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">多言語AI支援</text>
    <text x="500" y="200" font-size="10.5" fill="#d6f2ef" text-anchor="middle">ラボ共通・支援者接続</text>
    <path d="M420 185 L432 185 M568 179 L582 185 L568 191" stroke="#0d6b66" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="588" y="142" width="372" height="86" rx="12" fill="#F2FBF7" filter="url(#shSoft)"/>
    <rect x="588" y="142" width="6" height="86" rx="3" fill="url(#gGoal)"/>
    <text x="610" y="173" font-size="14" font-weight="700" fill="#1c6e40">指導負担を軽減し研究時間を確保</text>
    <text x="610" y="198" font-size="11.5" fill="#3c5b50">多言語支援・共通化で雑務を圧縮し</text>
    <text x="610" y="216" font-size="11.5" fill="#3c5b50">教員は研究そのものへ時間を回せる</text>
  </g>
  <g>
    <rect x="40" y="236" width="372" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="262" r="13" fill="#ffffff"/>
    <text x="68" y="267" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
    <text x="90" y="267" font-size="14" font-weight="700" fill="#9a4a1e">人材育成が多様化・高度化</text>
    <text x="58" y="292" font-size="11.5" fill="#7a5a45">成功モデルが多様化し求める水準も上昇</text>
    <text x="58" y="310" font-size="11.5" fill="#7a5a45">個別の能力育成と資源の最適投下が必須</text>
    <rect x="436" y="236" width="128" height="86" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <text x="500" y="274" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">CV-DB＋AI伴走</text>
    <text x="500" y="294" font-size="10.5" fill="#d6f2ef" text-anchor="middle">段階別マッチング</text>
    <path d="M420 279 L432 279 M568 273 L582 279 L568 285" stroke="#0d6b66" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="588" y="236" width="372" height="86" rx="12" fill="#F2FBF7" filter="url(#shSoft)"/>
    <rect x="588" y="236" width="6" height="86" rx="3" fill="url(#gGoal)"/>
    <text x="610" y="267" font-size="14" font-weight="700" fill="#1c6e40">院生一人ひとりの研究力を向上</text>
    <text x="610" y="292" font-size="11.5" fill="#3c5b50">学習・スキル・資格記録を束ね段階別支援</text>
    <text x="610" y="310" font-size="11.5" fill="#3c5b50">留学先・ラボ・企業へのマッチングも可能に</text>
  </g>
  <g>
    <rect x="40" y="330" width="372" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="356" r="13" fill="#ffffff"/>
    <text x="68" y="361" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
    <text x="90" y="361" font-size="14" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
    <text x="58" y="386" font-size="11.5" fill="#7a5a45">支援が乱立・重複・分散している</text>
    <text x="58" y="404" font-size="11.5" fill="#7a5a45">真に必要とする個人へ届かない</text>
    <rect x="436" y="330" width="128" height="86" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <text x="500" y="368" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">ニーズ×支援</text>
    <text x="500" y="388" font-size="10.5" fill="#d6f2ef" text-anchor="middle">突合エンジン</text>
    <path d="M420 373 L432 373 M568 367 L582 373 L568 379" stroke="#0d6b66" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="588" y="330" width="372" height="86" rx="12" fill="#F2FBF7" filter="url(#shSoft)"/>
    <rect x="588" y="330" width="6" height="86" rx="3" fill="url(#gGoal)"/>
    <text x="610" y="361" font-size="14" font-weight="700" fill="#1c6e40">個別最適な情報を直に届ける</text>
    <text x="610" y="386" font-size="11.5" fill="#3c5b50">①学生のニーズ ＋ ②全学の支援情報を突合</text>
    <text x="610" y="404" font-size="11.5" fill="#3c5b50">必要な個人へ機会をダイレクト投下</text>
  </g>
  <g>
    <rect x="40" y="424" width="372" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="450" r="13" fill="#ffffff"/>
    <text x="68" y="455" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
    <text x="90" y="455" font-size="14" font-weight="700" fill="#9a4a1e">支援者の実践知が活かせない</text>
    <text x="58" y="480" font-size="11.5" fill="#7a5a45">同じ手続き・問い合わせの反復</text>
    <text x="58" y="498" font-size="11.5" fill="#7a5a45">システム乱立・データ分散・異動でリセット</text>
    <rect x="436" y="424" width="128" height="86" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <text x="500" y="462" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">データ接続</text>
    <text x="500" y="482" font-size="10.5" fill="#d6f2ef" text-anchor="middle">RAG省力化</text>
    <path d="M420 467 L432 467 M568 461 L582 467 L568 473" stroke="#0d6b66" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="588" y="424" width="372" height="86" rx="12" fill="#F2FBF7" filter="url(#shSoft)"/>
    <rect x="588" y="424" width="6" height="86" rx="3" fill="url(#gGoal)"/>
    <text x="610" y="455" font-size="14" font-weight="700" fill="#1c6e40">支援者の労力を削減し効率化</text>
    <text x="610" y="480" font-size="11.5" fill="#3c5b50">データを基盤上で接続しAIで分析・自動収集</text>
    <text x="610" y="498" font-size="11.5" fill="#3c5b50">反復・窓口業務をRAGで省力化</text>
  </g>
  <rect x="984" y="142" width="256" height="368" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="984" y="142" width="256" height="34" rx="14" fill="url(#gHdr)"/>
  <text x="1112" y="164" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">学生・支援者アプリ</text>
  <rect x="1054" y="190" width="116" height="190" rx="14" fill="#0c2a3c"/>
  <rect x="1062" y="200" width="100" height="170" rx="8" fill="#eef6fb"/>
  <rect x="1062" y="200" width="100" height="26" rx="8" fill="url(#gTeal)"/>
  <text x="1112" y="217" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">あなたへの機会</text>
  <rect x="1070" y="234" width="84" height="22" rx="5" fill="#ffffff"/>
  <text x="1078" y="248" font-size="8" fill="#9a4a1e">学振 締切3日前</text>
  <rect x="1070" y="262" width="84" height="22" rx="5" fill="#ffffff"/>
  <text x="1078" y="276" font-size="8" fill="#0d6b66">留学公募 適合92%</text>
  <rect x="1070" y="290" width="84" height="22" rx="5" fill="#ffffff"/>
  <text x="1078" y="304" font-size="8" fill="#1c6e40">企業共同研究 紹介</text>
  <rect x="1070" y="318" width="84" height="22" rx="5" fill="#ffffff"/>
  <text x="1078" y="332" font-size="8" fill="#103a52">AI伴走チャット</text>
  <rect x="1062" y="346" width="100" height="24" rx="6" fill="url(#gGoal)"/>
  <text x="1112" y="362" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">今すぐ応募する</text>
  <text x="1112" y="398" font-size="10" fill="#5a6b76" text-anchor="middle">ニーズ入力 → 全学情報と</text>
  <text x="1112" y="412" font-size="10" fill="#5a6b76" text-anchor="middle">突合し個別に投下</text>
  <rect x="40" y="522" width="920" height="64" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="522" width="170" height="64" rx="12" fill="url(#gHdr)"/>
  <text x="125" y="548" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI</text>
  <text x="125" y="568" font-size="9.5" fill="#cfe6f2" text-anchor="middle">※すべて試算値</text>
  <text x="298" y="552" font-size="26" font-weight="700" fill="#0d6b66" text-anchor="middle">+3h</text>
  <text x="298" y="572" font-size="10" fill="#5a6b76" text-anchor="middle">教員の研究時間/週</text>
  <text x="478" y="552" font-size="26" font-weight="700" fill="#d2772f" text-anchor="middle">−50%</text>
  <text x="478" y="572" font-size="10" fill="#5a6b76" text-anchor="middle">定型問い合わせ</text>
  <text x="658" y="552" font-size="26" font-weight="700" fill="#0d6b66" text-anchor="middle">+20pt</text>
  <text x="658" y="572" font-size="10" fill="#5a6b76" text-anchor="middle">院生の研究力</text>
  <text x="858" y="552" font-size="26" font-weight="700" fill="#1c6e40" text-anchor="middle">+5pt</text>
  <text x="858" y="572" font-size="10" fill="#5a6b76" text-anchor="middle">修了率（中退↓）</text>
  <rect x="984" y="522" width="256" height="64" rx="12" fill="#E2F4F2" filter="url(#shSoft)"/>
  <text x="1000" y="544" font-size="11" font-weight="700" fill="#0d6b66">副次効果</text>
  <text x="1000" y="562" font-size="9.5" fill="#3c5b50">許諾済データ共有（学内・行政・企業）</text>
  <text x="1000" y="578" font-size="9.5" fill="#3c5b50">経営判断を迅速化／アプリ外販も視野</text>
  <path d="M40 600 L1206 600 L1240 660 L1206 720 L40 720 Z" fill="url(#gGoal)"/>
  <text x="623" y="666" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びが世界とつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #variant-99 Before→After対応表(4行A-D 1:1)。地=薄いグローブ＋ネットワーク点線で国際×接続。多色リッチ(teal+橙+緑GOAL+青地)。appMockup/kpiBand(想定明示)/副次効果を配置。airy密度。 -->
