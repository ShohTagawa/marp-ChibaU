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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#b85c1c"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f5a623"/><stop offset="1" stop-color="#e07b2a"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd166"/><stop offset="1" stop-color="#f6b042"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0d6"/><stop offset="1" stop-color="#ffe2ad"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff3cf"/><stop offset="0.6" stop-color="#ffe39a"/><stop offset="1" stop-color="#ffe39a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#a8580f" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#a8580f" flood-opacity="0.16"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#fff3df"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#a8580f">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="118" font-size="13" font-weight="700" fill="#b85c1c">課題 A–D ／ 打ち手は1:1で対応</text>
  <rect x="34" y="128" width="300" height="86" rx="13" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <circle cx="58" cy="151" r="13" fill="#d2772f"/><text x="58" y="156" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="78" y="148" font-size="12.5" font-weight="700" fill="#a8580f">教員の業務負荷が急増</text>
  <text x="44" y="170" font-size="10.5" fill="#555">院生の多様化(社会人・留学生・他分野)</text>
  <text x="44" y="186" font-size="10.5" fill="#555">研究費申請・評価資料・学振添削・全員留学</text>
  <text x="44" y="204" font-size="10.5" font-weight="700" fill="#b85c1c">→ 従来の個別指導は限界</text>
  <rect x="34" y="222" width="300" height="86" rx="13" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <circle cx="58" cy="245" r="13" fill="#d2772f"/><text x="58" y="250" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="78" y="242" font-size="12.5" font-weight="700" fill="#a8580f">人材育成が多様化・高度化</text>
  <text x="44" y="264" font-size="10.5" fill="#555">成功モデルが多様化・求める水準が上昇</text>
  <text x="44" y="280" font-size="10.5" fill="#555">個別の能力育成と資源の最適投下が必須</text>
  <text x="44" y="298" font-size="10.5" font-weight="700" fill="#b85c1c">→ 一律支援では伸びない</text>
  <rect x="34" y="316" width="300" height="86" rx="13" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <circle cx="58" cy="339" r="13" fill="#d2772f"/><text x="58" y="344" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="78" y="336" font-size="12.5" font-weight="700" fill="#a8580f">大学→個人のミッシングリンク</text>
  <text x="44" y="358" font-size="10.5" fill="#555">支援が乱立・重複・分散している</text>
  <text x="44" y="374" font-size="10.5" fill="#555">真に必要な個人に届かない</text>
  <text x="44" y="392" font-size="10.5" font-weight="700" fill="#b85c1c">→ 機会の取りこぼし</text>
  <rect x="34" y="410" width="300" height="86" rx="13" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <circle cx="58" cy="433" r="13" fill="#d2772f"/><text x="58" y="438" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="78" y="430" font-size="12.5" font-weight="700" fill="#a8580f">支援者の実践知が活かされない</text>
  <text x="44" y="452" font-size="10.5" fill="#555">同じ手続きの反復／システム乱立・分散</text>
  <text x="44" y="468" font-size="10.5" fill="#555">異動でゼロリセットされる</text>
  <text x="44" y="486" font-size="10.5" font-weight="700" fill="#b85c1c">→ 知が蓄積されない</text>
  <path d="M340 269 L372 269" stroke="#d2772f" stroke-width="3" marker-end="url(#mW)" fill="none"/>
  <path d="M340 359 L372 359" stroke="#d2772f" stroke-width="3" marker-end="url(#mW)" fill="none"/>
  <circle cx="700" cy="320" r="190" fill="url(#gBurst)"/>
  <polygon points="700,128 850,206 550,206" fill="url(#gTop)" filter="url(#sh)"/>
  <circle cx="700" cy="152" r="13" fill="#ffffff"/><g transform="translate(700,152)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M-9 -2 L0 -8 L9 -2"/><path d="M-7 -2 V6 M-2 -2 V6 M3 -2 V6 M8 -2 V6 M-9 7 H9"/></g>
  <text x="700" y="190" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <polygon points="548,210 852,210 922,310 478,310" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="700" y="240" font-size="14.5" font-weight="700" fill="#8a4a10" text-anchor="middle">AI機能：個別最適に支援を届ける</text>
  <text x="510" y="266" font-size="10.5" font-weight="700" fill="#7a4310">A 多言語支援</text>
  <text x="510" y="282" font-size="10" fill="#6b4012">ラボ共通支援・支援者接続</text>
  <text x="700" y="266" font-size="10.5" font-weight="700" fill="#7a4310" text-anchor="middle">B CV-DB＋AI伴走</text>
  <text x="700" y="282" font-size="10" fill="#6b4012" text-anchor="middle">段階別の個別育成・マッチング</text>
  <text x="890" y="266" font-size="10.5" font-weight="700" fill="#7a4310" text-anchor="end">C ニーズ突合</text>
  <text x="890" y="282" font-size="10" fill="#6b4012" text-anchor="end">必要な個人へ直接投下</text>
  <text x="700" y="300" font-size="10.5" font-weight="700" fill="#7a4310" text-anchor="middle">D 反復・窓口をRAGで省力化／IR自動収集・統合分析</text>
  <polygon points="476,314 924,314 1000,430 400,430" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="700" y="344" font-size="14.5" font-weight="700" fill="#8a4a10" text-anchor="middle">データ接続基盤：人・データ・支援・実践知を1つに接続</text>
  <rect x="438" y="356" width="120" height="58" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="498" y="378" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">学内情報</text>
  <text x="498" y="396" font-size="9.5" fill="#666" text-anchor="middle">支援・成果・IR</text>
  <text x="498" y="409" font-size="9.5" fill="#666" text-anchor="middle">を集約</text>
  <rect x="572" y="356" width="120" height="58" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="632" y="378" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">CVデータベース</text>
  <text x="632" y="396" font-size="9.5" fill="#666" text-anchor="middle">学習・スキル・</text>
  <text x="632" y="409" font-size="9.5" fill="#666" text-anchor="middle">資格の記録</text>
  <rect x="706" y="356" width="120" height="58" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="766" y="378" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">許諾済データ</text>
  <text x="766" y="396" font-size="9.5" fill="#666" text-anchor="middle">学内・行政・企業</text>
  <text x="766" y="409" font-size="9.5" fill="#666" text-anchor="middle">の共同研究</text>
  <rect x="840" y="356" width="120" height="58" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="900" y="378" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">統合分析</text>
  <text x="900" y="396" font-size="9.5" fill="#666" text-anchor="middle">経営判断を迅速化</text>
  <text x="900" y="409" font-size="9.5" fill="#666" text-anchor="middle">＋アプリ外販</text>
  <rect x="998" y="128" width="248" height="200" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="998" y="128" width="248" height="34" rx="16" fill="url(#gTop)"/><rect x="998" y="146" width="248" height="16" fill="url(#gTop)"/>
  <text x="1122" y="151" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者・支援者の手元へ</text>
  <rect x="1018" y="176" width="96" height="136" rx="11" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2"/>
  <rect x="1018" y="176" width="96" height="26" rx="11" fill="#f6b042"/><rect x="1018" y="189" width="96" height="13" fill="#f6b042"/>
  <text x="1066" y="194" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">AI伴走 Chat</text>
  <rect x="1028" y="210" width="76" height="14" rx="4" fill="#ffe2ad"/><text x="1034" y="220" font-size="8.5" fill="#8a4a10">次の一手は？</text>
  <rect x="1028" y="228" width="76" height="22" rx="4" fill="#fff0d6"/><text x="1034" y="238" font-size="8" fill="#6b4012">学振添削を提案</text><text x="1034" y="247" font-size="8" fill="#6b4012">／留学先を提示</text>
  <rect x="1028" y="254" width="76" height="22" rx="4" fill="#fff0d6"/><text x="1034" y="264" font-size="8" fill="#6b4012">あなた向け公募</text><text x="1034" y="273" font-size="8" fill="#6b4012">を直接通知</text>
  <rect x="1028" y="280" width="76" height="22" rx="6" fill="#d2772f"/><text x="1066" y="294" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">伴走を開始</text>
  <rect x="1124" y="176" width="106" height="136" rx="11" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2"/>
  <text x="1177" y="195" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">届く相手</text>
  <circle cx="1142" cy="222" r="11" fill="#ffe2ad"/><g transform="translate(1142,223)" stroke="#a8580f" stroke-width="1.6" fill="none"><circle cx="0" cy="-3" r="3"/><path d="M-5 6 A5 5 0 0 1 5 6"/></g>
  <text x="1162" y="219" font-size="9.5" font-weight="700" fill="#7a4310">院生</text><text x="1162" y="231" font-size="8.5" fill="#666">研究力を可視化</text>
  <circle cx="1142" cy="252" r="11" fill="#ffe2ad"/><g transform="translate(1142,252)" stroke="#a8580f" stroke-width="1.6" fill="none"><circle cx="-3" cy="-3" r="2.6"/><circle cx="4" cy="-3" r="2.6"/><path d="M-8 6 A4 4 0 0 1 0 5"/><path d="M0 5 A4 4 0 0 1 9 6"/></g>
  <text x="1162" y="249" font-size="9.5" font-weight="700" fill="#7a4310">教員</text><text x="1162" y="261" font-size="8.5" fill="#666">研究時間が増える</text>
  <circle cx="1142" cy="284" r="11" fill="#ffe2ad"/><g transform="translate(1142,284)" stroke="#a8580f" stroke-width="1.6" fill="none"><circle cx="0" cy="0" r="3.2"/><path d="M0 -6 V-4 M0 6 V4 M-6 0 H-4 M6 0 H4"/></g>
  <text x="1162" y="281" font-size="9.5" font-weight="700" fill="#7a4310">職員</text><text x="1162" y="293" font-size="8.5" fill="#666">窓口を省力化</text>
  <path d="M960 372 C985 372 1010 300 998 240" stroke="#d2772f" stroke-width="2.5" stroke-dasharray="5" fill="none" marker-end="url(#mW)"/>
  <rect x="34" y="512" width="926" height="84" rx="14" fill="#fffaf0" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <rect x="34" y="512" width="180" height="84" rx="14" fill="url(#gMid)"/>
  <text x="124" y="546" font-size="14" font-weight="700" fill="#8a4a10" text-anchor="middle">想定KPI</text>
  <text x="124" y="566" font-size="10.5" font-weight="700" fill="#a8580f" text-anchor="middle">※すべて想定/試算</text>
  <text x="124" y="582" font-size="9.5" fill="#7a4310" text-anchor="middle">導入効果の見込み値</text>
  <text x="290" y="540" font-size="30" font-weight="700" fill="#d2772f" text-anchor="middle">+3h</text>
  <text x="290" y="560" font-size="10.5" fill="#555" text-anchor="middle">教員の研究時間</text>
  <text x="290" y="576" font-size="10" font-weight="700" fill="#a8580f" text-anchor="middle">／週（想定）</text>
  <text x="470" y="540" font-size="30" font-weight="700" fill="#d2772f" text-anchor="middle">−50%</text>
  <text x="470" y="560" font-size="10.5" fill="#555" text-anchor="middle">定型問い合わせ</text>
  <text x="470" y="576" font-size="10" font-weight="700" fill="#a8580f" text-anchor="middle">（試算）</text>
  <text x="650" y="540" font-size="30" font-weight="700" fill="#d2772f" text-anchor="middle">+20pt</text>
  <text x="650" y="560" font-size="10.5" fill="#555" text-anchor="middle">院生の研究力</text>
  <text x="650" y="576" font-size="10" font-weight="700" fill="#a8580f" text-anchor="middle">（想定）</text>
  <text x="850" y="540" font-size="30" font-weight="700" fill="#d2772f" text-anchor="middle">+5pt</text>
  <text x="850" y="560" font-size="10.5" fill="#555" text-anchor="middle">修了率（中退率↓）</text>
  <text x="850" y="576" font-size="10" font-weight="700" fill="#a8580f" text-anchor="middle">（試算）</text>
  <rect x="976" y="512" width="270" height="84" rx="14" fill="#fff7ec" stroke="#f3cf9a" stroke-width="1.2" filter="url(#shS)"/>
  <circle cx="1002" cy="538" r="13" fill="#f6b042"/><text x="1002" y="543" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">＋</text>
  <text x="1024" y="535" font-size="12" font-weight="700" fill="#a8580f">副次効果</text>
  <text x="990" y="558" font-size="10" fill="#555">許諾済データの共有・利活用で</text>
  <text x="990" y="573" font-size="10" fill="#555">学内・行政・企業の共同研究を加速</text>
  <text x="990" y="588" font-size="10" font-weight="700" fill="#b85c1c">統合分析で経営判断を迅速化／外販</text>
  <path d="M40 612 L1206 612 L1240 654 L1206 696 L40 696 Z" fill="url(#gHdr)"/>
  <text x="623" y="660" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">接続が価値を生む ― 研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-95：橙/黄の温かい階層ピラミッド。土台=データ接続基盤(4カード)→中=AI機能(A-D打ち手)→頂=Nexus University。左に課題A-D(1:1で中段打ち手に対応・矢印接続)、右上にappMockup(AI伴走Chat＋届く相手の登場人物アイコン群)、頂点裏にgoalBurst放射、下段に想定/試算明示のKPI4数値＋副次効果。packed高密度・白基調クリーン。 -->
