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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8862a"/><stop offset="1" stop-color="#c75d12"/></linearGradient>
    <linearGradient id="gHub" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a93b"/><stop offset="1" stop-color="#d56a17"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4b13a"/><stop offset="1" stop-color="#e07a1e"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f5a623" stop-opacity="0.30"/><stop offset="1" stop-color="#f5a623" stop-opacity="0"/></radialGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff4d6" stop-opacity="0.95"/><stop offset="1" stop-color="#ffe6a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#a4530f" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#a4530f" flood-opacity="0.15"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d56a17"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf1"/>
  <g opacity="0.12">
    <rect x="44" y="108" width="1192" height="498" rx="18" fill="#ffffff" stroke="#e7a24a" stroke-width="2"/>
    <rect x="44" y="108" width="1192" height="40" rx="18" fill="#f3c071"/>
    <circle cx="74" cy="128" r="6" fill="#e0801c"/><circle cx="96" cy="128" r="6" fill="#e0801c"/><circle cx="118" cy="128" r="6" fill="#e0801c"/>
    <rect x="150" y="120" width="900" height="16" rx="8" fill="#ffffff"/>
    <rect x="70" y="178" width="430" height="26" rx="6" fill="#f3c071"/>
    <rect x="70" y="222" width="1090" height="12" rx="6" fill="#efbf78"/>
    <rect x="70" y="248" width="1010" height="12" rx="6" fill="#efbf78"/>
    <rect x="70" y="274" width="1060" height="12" rx="6" fill="#efbf78"/>
    <rect x="70" y="320" width="560" height="120" rx="10" fill="#f7d29a"/>
    <rect x="660" y="320" width="500" height="120" rx="10" fill="#f7d29a"/>
    <rect x="70" y="470" width="1090" height="12" rx="6" fill="#efbf78"/>
    <rect x="70" y="496" width="940" height="12" rx="6" fill="#efbf78"/>
    <rect x="70" y="540" width="220" height="40" rx="20" fill="#e89b3a"/>
  </g>
  <rect x="0" y="98" width="1280" height="510" fill="#fffaf1" opacity="0.50"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#fdeccb"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#9a4a08">学内に散在する〈情報・データ・サポート・機会〉を「接続」 ― 研究者と支援者が躍動する大学へ</text>
  <text x="64" y="124" font-size="13" font-weight="700" fill="#b35b12">課題（A〜D）</text>
  <g font-size="11.5">
    <rect x="40" y="134" width="252" height="106" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <circle cx="64" cy="160" r="13" fill="#fbe3bd"/><text x="64" y="165" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">A</text>
    <text x="86" y="158" font-size="12.5" font-weight="700" fill="#333">教員の業務負荷が急増</text>
    <text x="50" y="186" fill="#555">院生の多様化（社会人・留学生・他分野）</text>
    <text x="50" y="204" fill="#555">研究費申請・評価資料・学振添削・全員留学</text>
    <text x="50" y="226" fill="#c4640f" font-weight="700">→ 個の指導が限界に</text>
    <rect x="40" y="248" width="252" height="106" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <circle cx="64" cy="274" r="13" fill="#fbe3bd"/><text x="64" y="279" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">B</text>
    <text x="86" y="272" font-size="12.5" font-weight="700" fill="#333">人材育成が多様化・高度化</text>
    <text x="50" y="300" fill="#555">成功モデルが多様化・水準が上昇</text>
    <text x="50" y="318" fill="#555">個別の能力育成と資源の最適投下が必須</text>
    <text x="50" y="340" fill="#c4640f" font-weight="700">→ 画一支援では届かない</text>
    <rect x="40" y="362" width="252" height="106" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <circle cx="64" cy="388" r="13" fill="#fbe3bd"/><text x="64" y="393" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">C</text>
    <text x="86" y="386" font-size="12.5" font-weight="700" fill="#333">大学→個人のミッシングリンク</text>
    <text x="50" y="414" fill="#555">支援が乱立・重複・分散</text>
    <text x="50" y="432" fill="#555">真に必要な個人に届かない</text>
    <text x="50" y="454" fill="#c4640f" font-weight="700">→ 機会が埋もれる</text>
    <rect x="40" y="476" width="252" height="106" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <circle cx="64" cy="502" r="13" fill="#fbe3bd"/><text x="64" y="507" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">D</text>
    <text x="86" y="500" font-size="12.5" font-weight="700" fill="#333">支援者の実践知が死蔵</text>
    <text x="50" y="528" fill="#555">同じ手続きの反復・システム乱立</text>
    <text x="50" y="546" fill="#555">データ分散・異動でゼロリセット</text>
    <text x="50" y="568" fill="#c4640f" font-weight="700">→ ノウハウが消える</text>
  </g>
  <g stroke="#e7b56a" stroke-width="1.6" fill="none">
    <path d="M292 187 C360 187 380 320 446 330"/>
    <path d="M292 301 C360 301 392 330 446 342"/>
    <path d="M292 415 C360 415 392 366 446 354"/>
    <path d="M292 529 C360 529 380 388 446 366"/>
  </g>
  <circle cx="585" cy="348" r="178" fill="url(#gGlow)"/>
  <g opacity="0.85"><circle cx="585" cy="348" r="150" fill="none" stroke="#f3c071" stroke-width="1.4" stroke-dasharray="5 7"/></g>
  <circle cx="585" cy="348" r="108" fill="url(#gHub)" filter="url(#sh)"/>
  <circle cx="585" cy="348" r="108" fill="url(#gBurst)" opacity="0.18"/>
  <g transform="translate(585,296)" stroke="#ffffff" stroke-width="2.4" fill="none"><circle cx="0" cy="0" r="10"/><circle cx="-18" cy="14" r="6"/><circle cx="18" cy="14" r="6"/><path d="M-8 8 L-13 11 M8 8 L13 11"/></g>
  <text x="585" y="346" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="585" y="368" font-size="14" font-weight="700" fill="#fff3d8" text-anchor="middle">接続基盤</text>
  <text x="585" y="392" font-size="11" fill="#ffe8c2" text-anchor="middle">研究 × 学び を繋ぐ</text>
  <g font-size="10.5" font-weight="700">
    <circle cx="585" cy="206" r="24" fill="#ffffff" filter="url(#shS)"/><g transform="translate(585,202)" stroke="#d56a17" stroke-width="2" fill="none"><rect x="-8" y="-8" width="16" height="16" rx="2"/><path d="M-8 -3 H-12 M8 -3 H12 M-3 -8 V-12 M3 -8 V-12 M-3 8 V12 M3 8 V12"/></g><text x="585" y="240" fill="#9a4a08" text-anchor="middle">AI伴走</text>
    <circle cx="455" cy="250" r="22" fill="#ffffff" filter="url(#shS)"/><g transform="translate(455,247)" stroke="#d56a17" stroke-width="2" fill="none"><rect x="-7" y="-9" width="14" height="18" rx="2"/><path d="M-7 -3 H7 M-7 3 H7"/></g><text x="455" y="284" fill="#9a4a08" text-anchor="middle">CV-DB</text>
    <circle cx="715" cy="250" r="22" fill="#ffffff" filter="url(#shS)"/><g transform="translate(715,248)" stroke="#d56a17" stroke-width="2" fill="none"><path d="M-9 4 V-2 M-3 4 V-6 M3 4 V-9 M9 4 V-4"/><path d="M-11 6 H11"/></g><text x="715" y="284" fill="#9a4a08" text-anchor="middle">統合分析</text>
  </g>
  <g stroke="#e08a26" stroke-width="2.6" fill="none">
    <path d="M690 300 C770 268 800 196 852 182" marker-end="url(#mA)"/>
    <path d="M693 336 C790 318 808 296 852 290" marker-end="url(#mA)"/>
    <path d="M693 360 C790 378 808 396 852 398" marker-end="url(#mA)"/>
    <path d="M690 396 C770 428 800 500 852 506" marker-end="url(#mA)"/>
  </g>
  <text x="1108" y="124" font-size="13" font-weight="700" fill="#b35b12" text-anchor="end">打ち手（A〜D・1:1対応）</text>
  <g font-size="11.5">
    <rect x="858" y="134" width="382" height="98" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <rect x="858" y="134" width="6" height="98" rx="3" fill="#e07a1e"/>
    <circle cx="888" cy="160" r="13" fill="#fbe3bd"/><text x="888" y="165" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">A</text>
    <text x="910" y="158" font-size="12.5" font-weight="700" fill="#1f7a5a">指導負担を軽減し研究時間を確保</text>
    <text x="872" y="184" fill="#555">AI多言語支援／ラボ共通支援</text>
    <text x="872" y="204" fill="#555">支援者どうしを接続し重複をなくす</text>
    <rect x="858" y="240" width="382" height="98" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <rect x="858" y="240" width="6" height="98" rx="3" fill="#e07a1e"/>
    <circle cx="888" cy="266" r="13" fill="#fbe3bd"/><text x="888" y="271" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">B</text>
    <text x="910" y="264" font-size="12.5" font-weight="700" fill="#1f7a5a">院生の研究力を向上</text>
    <text x="872" y="290" fill="#555">CV-DB（学内外の学習・スキル・資格）</text>
    <text x="872" y="310" fill="#555">AI伴走の段階別個別支援</text>
    <text x="872" y="330" fill="#555">留学・ラボ・企業マッチング</text>
    <rect x="858" y="346" width="382" height="98" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <rect x="858" y="346" width="6" height="98" rx="3" fill="#e07a1e"/>
    <circle cx="888" cy="372" r="13" fill="#fbe3bd"/><text x="888" y="377" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">C</text>
    <text x="910" y="370" font-size="12.5" font-weight="700" fill="#1f7a5a">個別最適な情報を直に届ける</text>
    <text x="872" y="396" fill="#555">①学生入力ニーズ ＋ ②全学の支援情報</text>
    <text x="872" y="416" fill="#555">を突合 → 必要な個人へダイレクト投下</text>
    <rect x="858" y="452" width="382" height="98" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#f0c483" stroke-width="1"/>
    <rect x="858" y="452" width="6" height="98" rx="3" fill="#e07a1e"/>
    <circle cx="888" cy="478" r="13" fill="#fbe3bd"/><text x="888" y="483" font-size="13" font-weight="700" fill="#c4640f" text-anchor="middle">D</text>
    <text x="910" y="476" font-size="12.5" font-weight="700" fill="#1f7a5a">支援者の労力削減・効率化</text>
    <text x="872" y="502" fill="#555">基盤上でデータ接続・AI分析／窓口はRAG省力化</text>
    <text x="872" y="522" fill="#555">IR・成果・回答を自動収集し統合分析</text>
  </g>
  <g>
    <rect x="40" y="592" width="566" height="34" rx="10" fill="#fdeccb" stroke="#f0c483" stroke-width="1"/>
    <text x="54" y="613" font-size="11.5" font-weight="700" fill="#9a4a08">副次効果：</text>
    <text x="124" y="613" font-size="11" fill="#7a5524">許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリ外販</text>
  </g>
  <g>
    <rect x="618" y="592" width="622" height="34" rx="10" fill="#1f7a5a"/>
    <text x="632" y="608" font-size="9.5" font-weight="700" fill="#bfe8d8">想定KPI（試算）</text>
    <text x="724" y="606" font-size="11" font-weight="700" fill="#ffffff">研究時間＋3h/週</text>
    <text x="724" y="620" font-size="9.5" fill="#cdeede">（教員・想定）</text>
    <text x="852" y="606" font-size="11" font-weight="700" fill="#ffffff">定型問い合わせ−50%</text>
    <text x="852" y="620" font-size="9.5" fill="#cdeede">（試算）</text>
    <text x="1000" y="606" font-size="11" font-weight="700" fill="#ffffff">研究力＋20pt</text>
    <text x="1000" y="620" font-size="9.5" fill="#cdeede">（院生・想定）</text>
    <text x="1110" y="606" font-size="11" font-weight="700" fill="#ffffff">修了率＋5pt</text>
    <text x="1110" y="620" font-size="9.5" fill="#cdeede">（試算・中退↓）</text>
  </g>
  <path d="M40 642 L1206 642 L1240 671 L1206 700 L40 700 Z" fill="url(#gGoal)"/>
  <text x="623" y="666" font-size="12.5" fill="#fff3da" text-anchor="middle">GOAL：分散を「接続」へ ― 必要な個人に必要な機会が届き、実践知が基盤に蓄積されて連鎖的に成果が伸びる</text>
  <text x="623" y="688" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-59：ハブ&スポーク。地(0層)=アプリ画面を巨大テキストボックスに見立てた薄色UIパネル。左A〜D課題→中央Nexus接続基盤(AI伴走/CV-DB/統合分析)→右A〜D打ち手(1:1)。橙/黄ムード、KPIは想定/試算明示。 -->
