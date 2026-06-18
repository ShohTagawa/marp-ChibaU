---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gHd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e08524"/><stop offset="1" stop-color="#b85e12"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a13c"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3b34e"/><stop offset="1" stop-color="#e0852a"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd98a"/><stop offset="1" stop-color="#f2b651"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.95"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#8a4e10" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#8a4e10" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.11">
    <rect x="150" y="116" width="980" height="470" rx="18" fill="#ffffff" stroke="#c98a3a" stroke-width="2"/>
    <rect x="150" y="116" width="980" height="40" rx="18" fill="#e0852a"/>
    <rect x="150" y="140" width="980" height="16" fill="#e0852a"/>
    <circle cx="178" cy="136" r="6" fill="#ffffff"/><circle cx="200" cy="136" r="6" fill="#ffffff"/><circle cx="222" cy="136" r="6" fill="#ffffff"/>
    <rect x="260" y="128" width="700" height="16" rx="8" fill="#ffffff"/>
    <rect x="186" y="186" width="300" height="20" rx="6" fill="#e0852a"/>
    <rect x="186" y="224" width="908" height="12" rx="6" fill="#d7b483"/>
    <rect x="186" y="252" width="860" height="12" rx="6" fill="#d7b483"/>
    <rect x="186" y="280" width="780" height="12" rx="6" fill="#d7b483"/>
    <rect x="186" y="330" width="220" height="16" rx="6" fill="#e0852a"/>
    <rect x="186" y="366" width="908" height="12" rx="6" fill="#d7b483"/>
    <rect x="186" y="394" width="830" height="12" rx="6" fill="#d7b483"/>
    <rect x="980" y="430" width="850" height="0" fill="none"/>
    <rect x="186" y="440" width="240" height="120" rx="10" fill="#f2b651"/>
    <rect x="446" y="440" width="240" height="120" rx="10" fill="#f2b651"/>
    <rect x="706" y="440" width="240" height="120" rx="10" fill="#f2b651"/>
    <rect x="966" y="440" width="128" height="120" rx="10" fill="#f2b651"/>
  </g>
  <rect x="0" y="98" width="1280" height="492" fill="#ffffff" opacity="0.42"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHd)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#FBEDE2"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#b85e12">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ ─ 役員ブリーフ1枚</text>
  <text x="40" y="124" font-size="13" font-weight="700" fill="#9a6418">課題（いま）</text>
  <rect x="36" y="130" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="36" y="130" width="6" height="106" rx="3" fill="#d2772f"/>
  <circle cx="62" cy="154" r="12" fill="#FBEDE2"/><text x="62" y="159" font-size="13" font-weight="700" fill="#b85e12" text-anchor="middle">A</text>
  <text x="82" y="152" font-size="12.5" font-weight="700" fill="#7a4d12">教員の業務負荷が急増</text>
  <text x="50" y="178" font-size="11" fill="#5b5b5b">院生の多様化（社会人・留学生・</text>
  <text x="50" y="195" font-size="11" fill="#5b5b5b">他分野）＋費申請・評価・学振</text>
  <text x="50" y="212" font-size="11" fill="#5b5b5b">添削・全員留学で指導が限界</text>
  <rect x="36" y="248" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="36" y="248" width="6" height="106" rx="3" fill="#d2772f"/>
  <circle cx="62" cy="272" r="12" fill="#FBEDE2"/><text x="62" y="277" font-size="13" font-weight="700" fill="#b85e12" text-anchor="middle">B</text>
  <text x="82" y="270" font-size="12.5" font-weight="700" fill="#7a4d12">育成が多様化・高度化</text>
  <text x="50" y="296" font-size="11" fill="#5b5b5b">成功モデルが多様化し求める</text>
  <text x="50" y="313" font-size="11" fill="#5b5b5b">水準も上昇。個別の能力育成と</text>
  <text x="50" y="330" font-size="11" fill="#5b5b5b">資源の最適投下が必須</text>
  <rect x="36" y="366" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="36" y="366" width="6" height="106" rx="3" fill="#d2772f"/>
  <circle cx="62" cy="390" r="12" fill="#FBEDE2"/><text x="62" y="395" font-size="13" font-weight="700" fill="#b85e12" text-anchor="middle">C</text>
  <text x="82" y="388" font-size="12.5" font-weight="700" fill="#7a4d12">大学→個人のミッシングリンク</text>
  <text x="50" y="414" font-size="11" fill="#5b5b5b">支援が乱立・重複・分散し、</text>
  <text x="50" y="431" font-size="11" fill="#5b5b5b">真に必要な個人に届かない</text>
  <rect x="36" y="484" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="36" y="484" width="6" height="106" rx="3" fill="#d2772f"/>
  <circle cx="62" cy="508" r="12" fill="#FBEDE2"/><text x="62" y="513" font-size="13" font-weight="700" fill="#b85e12" text-anchor="middle">D</text>
  <text x="82" y="506" font-size="12.5" font-weight="700" fill="#7a4d12">支援者の実践知が活きない</text>
  <text x="50" y="532" font-size="11" fill="#5b5b5b">同じ手続きの反復／システム</text>
  <text x="50" y="549" font-size="11" fill="#5b5b5b">乱立・データ分散／異動で</text>
  <text x="50" y="566" font-size="11" fill="#5b5b5b">知がゼロリセット</text>
  <text x="944" y="124" font-size="13" font-weight="700" fill="#9a6418">AI打ち手（1:1で対応）</text>
  <rect x="944" y="130" width="300" height="106" rx="13" fill="#fff5e6" filter="url(#shS)"/>
  <rect x="1238" y="130" width="6" height="106" rx="3" fill="#e0852a"/>
  <circle cx="970" cy="154" r="12" fill="#e0852a"/><text x="970" y="159" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="990" y="152" font-size="12.5" font-weight="700" fill="#7a4d12">指導負担↓・研究時間を確保</text>
  <text x="958" y="178" font-size="11" fill="#5b5b5b">AI多言語支援／ラボ共通支援／</text>
  <text x="958" y="195" font-size="11" fill="#5b5b5b">学内の支援者どうしを接続し、</text>
  <text x="958" y="212" font-size="11" fill="#5b5b5b">教員が研究に集中できる</text>
  <rect x="944" y="248" width="300" height="106" rx="13" fill="#fff5e6" filter="url(#shS)"/>
  <rect x="1238" y="248" width="6" height="106" rx="3" fill="#e0852a"/>
  <circle cx="970" cy="272" r="12" fill="#e0852a"/><text x="970" y="277" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="990" y="270" font-size="12.5" font-weight="700" fill="#7a4d12">院生の研究力を向上</text>
  <text x="958" y="296" font-size="11" fill="#5b5b5b">CVデータベース（学習・スキル・</text>
  <text x="958" y="313" font-size="11" fill="#5b5b5b">資格）＋AI伴走の段階別支援／</text>
  <text x="958" y="330" font-size="11" fill="#5b5b5b">留学・ラボ・企業マッチング</text>
  <rect x="944" y="366" width="300" height="106" rx="13" fill="#fff5e6" filter="url(#shS)"/>
  <rect x="1238" y="366" width="6" height="106" rx="3" fill="#e0852a"/>
  <circle cx="970" cy="390" r="12" fill="#e0852a"/><text x="970" y="395" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="990" y="388" font-size="12.5" font-weight="700" fill="#7a4d12">最適な情報を直に届ける</text>
  <text x="958" y="414" font-size="11" fill="#5b5b5b">①学生の入力ニーズ ＋ ②全学の</text>
  <text x="958" y="431" font-size="11" fill="#5b5b5b">支援情報を突合 → 必要な個人</text>
  <text x="958" y="448" font-size="11" fill="#5b5b5b">へダイレクトに投下</text>
  <rect x="944" y="484" width="300" height="106" rx="13" fill="#fff5e6" filter="url(#shS)"/>
  <rect x="1238" y="484" width="6" height="106" rx="3" fill="#e0852a"/>
  <circle cx="970" cy="508" r="12" fill="#e0852a"/><text x="970" y="513" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="990" y="506" font-size="12.5" font-weight="700" fill="#7a4d12">支援者の労力削減・効率化</text>
  <text x="958" y="532" font-size="11" fill="#5b5b5b">基盤上でデータ接続しAI分析／</text>
  <text x="958" y="549" font-size="11" fill="#5b5b5b">反復・窓口をRAGで省力化／</text>
  <text x="958" y="566" font-size="11" fill="#5b5b5b">IR・成果・回答を自動統合分析</text>
  <circle cx="688" cy="186" r="86" fill="url(#gBurst)"/>
  <g stroke="#f0b84a" stroke-width="3" stroke-linecap="round"><path d="M688 92 V112"/><path d="M754 116 L740 130"/><path d="M622 116 L636 130"/><path d="M778 186 H758"/><path d="M598 186 H618"/></g>
  <polygon points="688,128 762,196 614,196" fill="url(#gWarm)" filter="url(#sh)"/>
  <circle cx="688" cy="170" r="13" fill="#ffffff"/><g transform="translate(688,170)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V6 M-2 -3 V6 M3 -3 V6 M8 -3 V6 M-9 7 H9"/></g>
  <text x="688" y="216" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <polygon points="560,206 816,206 866,288 510,288" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="688" y="240" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能 ＝ 伴走・分析・突合・RAG省力化</text>
  <text x="688" y="262" font-size="11.5" fill="#fff3df" text-anchor="middle">院生に個別支援、支援者に効率化を届ける</text>
  <polygon points="470,298 906,298 956,440 420,440" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="688" y="338" font-size="14.5" font-weight="700" fill="#7a4d12" text-anchor="middle">データ接続基盤</text>
  <text x="688" y="362" font-size="11.5" fill="#8a5a18" text-anchor="middle">人・データ・支援・実践知・機会を一つに集約</text>
  <text x="688" y="384" font-size="11.5" fill="#8a5a18" text-anchor="middle">CVデータベース／全学の支援情報／許諾済データ</text>
  <text x="688" y="406" font-size="11" fill="#a06a20" text-anchor="middle">副次：学内・行政・企業の共同研究／統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M688 478 L688 452" stroke="#d2772f" stroke-width="4" fill="none" marker-end="url(#mA)"/>
  <rect x="368" y="486" width="640" height="62" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="368" y="486" width="640" height="22" rx="12" fill="#e0852a"/>
  <rect x="368" y="498" width="640" height="10" fill="#e0852a"/>
  <text x="688" y="502" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI（試算・効果は今後検証）</text>
  <text x="408" y="534" font-size="13" font-weight="700" fill="#b85e12">研究時間 +3h/週</text>
  <text x="568" y="534" font-size="13" font-weight="700" fill="#b85e12">定型問合せ −50%</text>
  <text x="742" y="534" font-size="13" font-weight="700" fill="#b85e12">研究力 +20pt</text>
  <text x="892" y="534" font-size="13" font-weight="700" fill="#b85e12">修了率 +5pt</text>
  <g transform="translate(440,572)"><circle cx="0" cy="-4" r="9" fill="#fff" stroke="#d2772f" stroke-width="2"/><g stroke="#d2772f" stroke-width="2" fill="none"><circle cx="0" cy="-7" r="3.2"/><path d="M-6 4 A6 6 0 0 1 6 4"/></g><text x="18" y="2" font-size="11" font-weight="700" fill="#7a4d12">院生</text></g>
  <g transform="translate(560,572)"><circle cx="0" cy="-4" r="9" fill="#fff" stroke="#d2772f" stroke-width="2"/><g stroke="#d2772f" stroke-width="2" fill="none"><circle cx="-3" cy="-7" r="2.6"/><circle cx="4" cy="-7" r="2.6"/><path d="M-8 4 A5 5 0 0 1 0 3"/><path d="M0 3 A5 5 0 0 1 9 4"/></g><text x="18" y="2" font-size="11" font-weight="700" fill="#7a4d12">教員</text></g>
  <g transform="translate(680,572)"><circle cx="0" cy="-4" r="9" fill="#fff" stroke="#d2772f" stroke-width="2"/><g stroke="#d2772f" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.4"/><path d="M0 -9 V-7 M0 1 V-1 M-5 -4 H-3 M5 -4 H3"/></g><text x="18" y="2" font-size="11" font-weight="700" fill="#7a4d12">支援者</text></g>
  <g transform="translate(820,572)"><circle cx="0" cy="-4" r="9" fill="#fff" stroke="#d2772f" stroke-width="2"/><g stroke="#d2772f" stroke-width="2" fill="none"><path d="M-7 -1 L0 -6 L7 -1"/><path d="M-5 -1 V4 M0 -1 V4 M5 -1 V4 M-7 5 H7"/></g><text x="18" y="2" font-size="11" font-weight="700" fill="#7a4d12">大学</text></g>
  <path d="M40 606 L1206 606 L1240 644 L1206 682 L40 682 Z" fill="url(#gHd)"/>
  <text x="623" y="650" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">接続が価値を生む ─ 研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-11：温暖（橙/黄）×packed。0層に薄いアプリ画面（ブラウザ枠・UI行・見出しボックス）を地として敷き、その上に3層ピラミッド（土台＝データ接続基盤→中＝AI機能→頂＝Nexus University＋goalBurst）。左にA-D課題／右にA-D打ち手を1:1配置。下にKPI(想定/試算明示)＋登場人物アイコン群＋結論帯。 -->
