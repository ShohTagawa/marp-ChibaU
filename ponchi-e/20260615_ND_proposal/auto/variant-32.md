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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e2a4a"/><stop offset="1" stop-color="#103b52"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15506b"/><stop offset="1" stop-color="#0e3a52"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c8f97"/><stop offset="1" stop-color="#147b86"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2fb6b6"/><stop offset="1" stop-color="#0f3b58"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f3b58"/><stop offset="1" stop-color="#157a86"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#43c9c9" stop-opacity="0.55"/><stop offset="1" stop-color="#43c9c9" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0b2740" flood-opacity="0.28"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0b2740" flood-opacity="0.18"/></filter>
    <marker id="mT" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2fb6b6"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#eef4f7"/>
  <g fill="#9fb9c9" opacity="0.5"><circle cx="120" cy="180" r="3.2"/><circle cx="190" cy="150" r="2.4"/><circle cx="250" cy="210" r="3"/><circle cx="330" cy="160" r="2.2"/><circle cx="420" cy="200" r="3.2"/><circle cx="520" cy="150" r="2.4"/><circle cx="610" cy="220" r="3"/><circle cx="700" cy="160" r="2.4"/><circle cx="800" cy="210" r="3.2"/><circle cx="900" cy="150" r="2.2"/><circle cx="990" cy="220" r="3"/><circle cx="1080" cy="170" r="2.4"/><circle cx="1160" cy="210" r="3.2"/><circle cx="150" cy="320" r="2.6"/><circle cx="280" cy="360" r="3"/><circle cx="430" cy="330" r="2.4"/><circle cx="560" cy="380" r="3"/><circle cx="690" cy="340" r="2.4"/><circle cx="840" cy="380" r="3"/><circle cx="980" cy="330" r="2.4"/><circle cx="1120" cy="370" r="3"/><circle cx="200" cy="470" r="2.6"/><circle cx="360" cy="500" r="3"/><circle cx="520" cy="470" r="2.4"/><circle cx="700" cy="500" r="3"/><circle cx="870" cy="470" r="2.4"/><circle cx="1040" cy="500" r="3"/></g>
  <g stroke="#a9c2d2" stroke-width="1" opacity="0.4" fill="none"><path d="M120 180 L250 210 L420 200 L610 220 L800 210 L990 220 L1160 210"/><path d="M190 150 L330 160 L520 150 L700 160 L900 150 L1080 170"/><path d="M150 320 L280 360 L560 380 L840 380 L1120 370"/><path d="M250 210 L280 360 M610 220 L560 380 M990 220 L980 330"/></g>
  <rect x="0" y="98" width="1280" height="492" fill="#ffffff" opacity="0.62"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#dbe9ef"/>
  <text x="40" y="84" font-size="15" font-weight="700" fill="#0e3a52">分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="120" font-size="13.5" font-weight="700" fill="#7a8a96">課題（A–D）</text>
  <rect x="40" y="128" width="300" height="103" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="128" width="6" height="103" rx="3" fill="#e07b39"/>
  <circle cx="68" cy="152" r="11" fill="#fbede2"/><text x="68" y="157" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">A</text>
  <text x="88" y="150" font-size="13.5" font-weight="700" fill="#0e3a52">教員の業務負荷が急増</text>
  <text x="56" y="172" font-size="10.5" fill="#52606b">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="188" font-size="10.5" fill="#52606b">研究費申請・評価資料・学振添削・全員留学</text>
  <text x="56" y="208" font-size="11" font-weight="700" fill="#c4632a">→ 従来手法では限界</text>
  <rect x="40" y="241" width="300" height="103" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="241" width="6" height="103" rx="3" fill="#e07b39"/>
  <circle cx="68" cy="265" r="11" fill="#fbede2"/><text x="68" y="270" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">B</text>
  <text x="88" y="263" font-size="13.5" font-weight="700" fill="#0e3a52">研究人材の育成が高度化</text>
  <text x="56" y="285" font-size="10.5" fill="#52606b">成功モデルが多様化・求める水準が上昇</text>
  <text x="56" y="301" font-size="10.5" fill="#52606b">個別の能力育成と資源の最適投下が必須</text>
  <text x="56" y="321" font-size="11" font-weight="700" fill="#c4632a">→ 画一支援では届かない</text>
  <rect x="40" y="354" width="300" height="103" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="354" width="6" height="103" rx="3" fill="#e07b39"/>
  <circle cx="68" cy="378" r="11" fill="#fbede2"/><text x="68" y="383" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">C</text>
  <text x="88" y="376" font-size="13.5" font-weight="700" fill="#0e3a52">大学→個人のミッシングリンク</text>
  <text x="56" y="398" font-size="10.5" fill="#52606b">支援が乱立・重複・分散している</text>
  <text x="56" y="414" font-size="10.5" fill="#52606b">真に必要な個人に届いていない</text>
  <text x="56" y="434" font-size="11" font-weight="700" fill="#c4632a">→ 機会の取りこぼし</text>
  <rect x="40" y="467" width="300" height="103" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="467" width="6" height="103" rx="3" fill="#e07b39"/>
  <circle cx="68" cy="491" r="11" fill="#fbede2"/><text x="68" y="496" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">D</text>
  <text x="88" y="489" font-size="13.5" font-weight="700" fill="#0e3a52">支援者の実践知が蓄積されない</text>
  <text x="56" y="511" font-size="10.5" fill="#52606b">同じ手続きの反復・システム乱立</text>
  <text x="56" y="527" font-size="10.5" fill="#52606b">データ分散・異動でゼロリセット</text>
  <text x="56" y="547" font-size="11" font-weight="700" fill="#c4632a">→ 知が個人に閉じる</text>
  <g stroke="#2fb6b6" stroke-width="2.4" fill="none" marker-end="url(#mT)"><path d="M344 180 L382 180"/><path d="M344 293 L382 293"/><path d="M344 406 L382 406"/><path d="M344 519 L382 519"/></g>
  <text x="700" y="120" font-size="13.5" font-weight="700" fill="#7a8a96" text-anchor="middle">AI打ち手（A–D に 1:1 対応）— 接続基盤の上に機能を積み上げる</text>
  <polygon points="560,470 920,470 980,558 500,558" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="740" y="500" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">土台：データ接続基盤</text>
  <text x="740" y="522" font-size="11" fill="#cfe6ea" text-anchor="middle">人・データ・支援・実践知を許諾済で接続／RAGで統合</text>
  <text x="740" y="540" font-size="10.5" fill="#9fc9d0" text-anchor="middle">学内・行政・企業の共同研究、IR・成果を自動収集</text>
  <polygon points="588,322 892,322 952,464 528,464" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="740" y="350" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能：4つの打ち手</text>
  <text x="555" y="374" font-size="10.5" fill="#eafafa">A 多言語支援・ラボ共通支援で教員の指導負担↓</text>
  <text x="555" y="392" font-size="10.5" fill="#eafafa">B CVデータベース＋AI伴走で院生の研究力↑</text>
  <text x="555" y="410" font-size="10.5" fill="#eafafa">C 学生ニーズ×全学支援を突合し個人へ直送</text>
  <text x="555" y="428" font-size="10.5" fill="#eafafa">D 反復・窓口をRAGで省力化、成果を統合分析</text>
  <polygon points="640,210 840,210 884,316 596,316" fill="url(#gTop)" filter="url(#sh)"/>
  <rect x="450" y="150" width="290" height="0" fill="none"/>
  <ellipse cx="740" cy="234" rx="120" ry="48" fill="url(#gBurst)"/>
  <circle cx="740" cy="232" r="13" fill="#ffffff"/>
  <g transform="translate(740,232)" stroke="#147b86" stroke-width="2" fill="none"><circle cx="0" cy="0" r="6.5"/><path d="M0 -6.5 V6.5 M-6.5 0 H6.5"/></g>
  <text x="740" y="272" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <text x="740" y="292" font-size="10.5" fill="#0e3a52" text-anchor="middle">研究者と支援者が躍動する大学</text>
  <text x="1010" y="120" font-size="13.5" font-weight="700" fill="#7a8a96">副次効果</text>
  <rect x="970" y="128" width="270" height="103" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="996" cy="154" r="12" fill="#dbeff1"/>
  <g transform="translate(996,154)" stroke="#147b86" stroke-width="2" fill="none"><circle cx="-3" cy="0" r="3.5"/><circle cx="4" cy="0" r="3.5"/></g>
  <text x="1018" y="151" font-size="12.5" font-weight="700" fill="#0e3a52">データの共有・利活用</text>
  <text x="986" y="174" font-size="10.5" fill="#52606b">許諾済データで学内・行政・</text>
  <text x="986" y="190" font-size="10.5" fill="#52606b">企業の共同研究を加速</text>
  <text x="986" y="210" font-size="10.5" fill="#52606b">統合分析で経営判断を迅速化／</text>
  <text x="986" y="226" font-size="10.5" font-weight="700" fill="#147b86">アプリの外販も視野</text>
  <text x="1010" y="252" font-size="13.5" font-weight="700" fill="#7a8a96">想定KPI（試算）</text>
  <rect x="970" y="260" width="270" height="172" rx="12" fill="#f3f8fa" filter="url(#shS)"/>
  <rect x="970" y="260" width="270" height="26" rx="12" fill="url(#gKpi)"/><rect x="970" y="273" width="270" height="13" fill="url(#gKpi)"/>
  <text x="1105" y="278" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">いずれも導入後の想定／試算値</text>
  <text x="990" y="312" font-size="26" font-weight="700" fill="#147b86">+3h</text><text x="1052" y="306" font-size="10.5" fill="#52606b">教員の研究時間</text><text x="1052" y="320" font-size="10.5" fill="#52606b">／週</text>
  <text x="990" y="350" font-size="26" font-weight="700" fill="#147b86">−50%</text><text x="1066" y="344" font-size="10.5" fill="#52606b">定型問い合わせ</text><text x="1066" y="358" font-size="10.5" fill="#52606b">（窓口）</text>
  <text x="990" y="388" font-size="26" font-weight="700" fill="#147b86">+20pt</text><text x="1066" y="382" font-size="10.5" fill="#52606b">院生の研究力</text><text x="1066" y="396" font-size="10.5" fill="#52606b">（評価指標）</text>
  <text x="990" y="424" font-size="26" font-weight="700" fill="#147b86">+5pt</text><text x="1058" y="418" font-size="10.5" fill="#52606b">修了率（中退率↓）</text>
  <text x="40" y="588" font-size="12" font-weight="700" fill="#7a8a96">誰に効くか：ニーズ → 導入後</text>
  <rect x="338" y="568" width="148" height="40" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="360" cy="588" r="11" fill="#dbeff1"/><g transform="translate(360,589)" stroke="#147b86" stroke-width="1.8" fill="none"><circle cx="0" cy="-3" r="3"/><path d="M-5 6 A5 5 0 0 1 5 6"/></g>
  <text x="378" y="585" font-size="11.5" font-weight="700" fill="#0e3a52">学生</text>
  <text x="378" y="601" font-size="10" fill="#52606b">伴走支援 → 研究力↑</text>
  <rect x="496" y="568" width="148" height="40" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="518" cy="588" r="11" fill="#dbeff1"/><g transform="translate(518,589)" stroke="#147b86" stroke-width="1.8" fill="none"><circle cx="-3" cy="-3" r="2.6"/><circle cx="4" cy="-3" r="2.6"/><path d="M-8 6 A5 5 0 0 1 0 5"/><path d="M0 5 A5 5 0 0 1 9 6"/></g>
  <text x="536" y="585" font-size="11.5" font-weight="700" fill="#0e3a52">教員</text>
  <text x="536" y="601" font-size="10" fill="#52606b">負担減 → 研究時間↑</text>
  <rect x="654" y="568" width="148" height="40" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="676" cy="588" r="11" fill="#dbeff1"/><g transform="translate(676,588)" stroke="#147b86" stroke-width="1.8" fill="none"><circle cx="0" cy="0" r="3.4"/><path d="M0 -7 V-4 M0 7 V4 M-7 0 H-4 M7 0 H4"/></g>
  <text x="694" y="585" font-size="11.5" font-weight="700" fill="#0e3a52">職員</text>
  <text x="694" y="601" font-size="10" fill="#52606b">窓口DX → 省力化</text>
  <rect x="812" y="568" width="148" height="40" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="834" cy="588" r="11" fill="#dbeff1"/><g transform="translate(834,589)" stroke="#147b86" stroke-width="1.8" fill="none"><path d="M-7 -2 L0 -7 L7 -2"/><path d="M-5 -2 V5 M0 -2 V5 M5 -2 V5 M-7 6 H7"/></g>
  <text x="852" y="585" font-size="11.5" font-weight="700" fill="#0e3a52">大学</text>
  <text x="852" y="601" font-size="10" fill="#52606b">統合分析 → 経営↑</text>
  <path d="M40 624 L1206 624 L1240 660 L1206 696 L40 696 Z" fill="url(#gHdr)"/>
  <text x="623" y="666" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続し、研究者と支援者が躍動する Nexus University へ</text>
</svg>
