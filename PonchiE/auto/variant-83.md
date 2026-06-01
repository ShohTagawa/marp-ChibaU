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
    <linearGradient id="gHd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#b85c1c"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#fce7c8"/><stop offset="1" stop-color="#f6c873"/></linearGradient>
    <linearGradient id="gStep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7a93f"/><stop offset="1" stop-color="#e07b20"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf4a"/><stop offset="1" stop-color="#f29220"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd862" stop-opacity="0.9"/><stop offset="0.6" stop-color="#f7a93f" stop-opacity="0.35"/><stop offset="1" stop-color="#f7a93f" stop-opacity="0"/></radialGradient>
    <linearGradient id="gLow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe9d8"/><stop offset="1" stop-color="#f3d3b4"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a5012" flood-opacity="0.24"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a5012" flood-opacity="0.16"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mC" markerWidth="11" markerHeight="11" refX="6" refY="3.2" orient="auto"><path d="M0 0 L8 3.2 L0 6.4 Z" fill="#e07b20"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.09" stroke="#c98a3a" stroke-width="1" fill="none"><path d="M120 250 L300 200 L470 260 L640 210 L820 300 L1000 240 L1180 320"/><path d="M180 420 L360 380 L540 440 L720 390 L900 470 L1080 410"/><path d="M120 250 L180 420"/><path d="M300 200 L360 380"/><path d="M640 210 L720 390"/><path d="M1000 240 L1080 410"/></g>
  <g opacity="0.13" fill="#c98a3a"><circle cx="120" cy="250" r="4"/><circle cx="300" cy="200" r="4"/><circle cx="470" cy="260" r="4"/><circle cx="640" cy="210" r="4"/><circle cx="820" cy="300" r="4"/><circle cx="1000" cy="240" r="4"/><circle cx="1180" cy="320" r="4"/><circle cx="180" cy="420" r="3.4"/><circle cx="360" cy="380" r="3.4"/><circle cx="540" cy="440" r="3.4"/><circle cx="720" cy="390" r="3.4"/><circle cx="900" cy="470" r="3.4"/><circle cx="1080" cy="410" r="3.4"/></g>
  <g opacity="0.06" fill="#c98a3a"><circle cx="240" cy="560" r="3"/><circle cx="430" cy="600" r="3"/><circle cx="610" cy="560" r="3"/><circle cx="790" cy="610" r="3"/><circle cx="980" cy="560" r="3"/></g>
  <path d="M0 660 L120 612 L420 540 L720 452 L980 360 L1280 250 L1280 720 L0 720 Z" fill="url(#gSlope)" opacity="0.55"/>
  <path d="M0 700 L300 636 L640 552 L960 452 L1280 348 L1280 720 L0 720 Z" fill="#f3c779" opacity="0.4"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHd)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想ロードマップ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#fbe9d4"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#a85518">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ ― 低地の課題から GOAL へ登る</text>
  <circle cx="1150" cy="215" r="155" fill="url(#burst)"/>
  <g opacity="0.5" stroke="#f7a93f" stroke-width="2.5" stroke-linecap="round"><path d="M1150 70 L1150 96"/><path d="M1024 142 L1046 156"/><path d="M1276 142 L1254 156"/><path d="M1058 95 L1074 116"/><path d="M1242 95 L1226 116"/></g>
  <text x="44" y="110" font-size="12" font-weight="700" fill="#b85c1c">低地＝大学が抱える課題（A–D）</text>
  <text x="44" y="610" font-size="11" fill="#a06b3a">背景：学内・行政・企業に散らばる都市ノード（情報・データ・人）を結線して可視化</text>
  <rect x="40" y="118" width="262" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="118" width="6" height="74" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="139" r="11" fill="#fbe2cd"/>
  <text x="66" y="144" font-size="13" font-weight="700" fill="#b85c1c" text-anchor="middle">A</text>
  <text x="86" y="144" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="166" font-size="10" fill="#6b7280">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="182" font-size="10" fill="#6b7280">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="200" width="262" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="200" width="6" height="74" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="221" r="11" fill="#fbe2cd"/>
  <text x="66" y="226" font-size="13" font-weight="700" fill="#b85c1c" text-anchor="middle">B</text>
  <text x="86" y="226" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="248" font-size="10" fill="#6b7280">求める水準が上昇・成功モデルも多様</text>
  <text x="56" y="264" font-size="10" fill="#6b7280">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="282" width="262" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="282" width="6" height="74" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="303" r="11" fill="#fbe2cd"/>
  <text x="66" y="308" font-size="13" font-weight="700" fill="#b85c1c" text-anchor="middle">C</text>
  <text x="86" y="308" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="330" font-size="10" fill="#6b7280">支援が乱立・重複・分散している</text>
  <text x="56" y="346" font-size="10" fill="#6b7280">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="364" width="262" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="364" width="6" height="74" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="385" r="11" fill="#fbe2cd"/>
  <text x="66" y="390" font-size="13" font-weight="700" fill="#b85c1c" text-anchor="middle">D</text>
  <text x="86" y="390" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="412" font-size="10" fill="#6b7280">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="428" font-size="10" fill="#6b7280">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M40 470 L36 470 L36 130 L40 130" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.55"/>
  <text x="22" y="304" font-size="10" font-weight="700" fill="#b85c1c" transform="rotate(-90 22 304)" text-anchor="middle">課題（低地）</text>
  <path d="M312 200 C346 250 364 410 408 432" stroke="#e07b20" stroke-width="2.4" fill="none" opacity="0.8" marker-end="url(#mC)"/>
  <text x="360" y="160" font-size="11" font-weight="700" fill="#b85c1c">課題↔打ち手 1:1 で登る</text>
  <rect x="404" y="438" width="252" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="430" cy="464" r="14" fill="#ffffff"/>
  <text x="430" y="469" font-size="14" font-weight="700" fill="#e07b20" text-anchor="middle">A</text>
  <text x="452" y="461" font-size="12.5" font-weight="700" fill="#ffffff">取組1：研究時間を確保</text>
  <text x="452" y="478" font-size="9.6" fill="#fff3e2">指導負担を軽減</text>
  <text x="418" y="500" font-size="10" fill="#fff7ee">AI多言語支援・ラボ共通支援</text>
  <text x="418" y="515" font-size="10" fill="#fff7ee">支援者接続 → 研究に時間を回す</text>
  <path d="M656 480 C690 470 700 410 730 386" stroke="#e07b20" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mC)"/>
  <rect x="556" y="350" width="252" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="582" cy="376" r="14" fill="#ffffff"/>
  <text x="582" y="381" font-size="14" font-weight="700" fill="#e07b20" text-anchor="middle">B</text>
  <text x="604" y="373" font-size="12.5" font-weight="700" fill="#ffffff">取組2：研究力を向上</text>
  <text x="604" y="390" font-size="9.6" fill="#fff3e2">院生一人ひとり</text>
  <text x="570" y="412" font-size="10" fill="#fff7ee">CV-DB（学習/スキル/資格）＋AI伴走</text>
  <text x="570" y="427" font-size="10" fill="#fff7ee">留学・ラボ・企業をマッチング</text>
  <path d="M808 388 C842 378 850 318 880 296" stroke="#e07b20" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mC)"/>
  <rect x="706" y="260" width="252" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="732" cy="286" r="14" fill="#ffffff"/>
  <text x="732" y="291" font-size="14" font-weight="700" fill="#e07b20" text-anchor="middle">C</text>
  <text x="754" y="283" font-size="12.5" font-weight="700" fill="#ffffff">取組3：情報を直に届ける</text>
  <text x="754" y="300" font-size="9.6" fill="#fff3e2">個別最適</text>
  <text x="720" y="322" font-size="10" fill="#fff7ee">①学生入力ニーズ ＋ ②全学支援情報</text>
  <text x="720" y="337" font-size="10" fill="#fff7ee">を突合 → 必要な個人へダイレクト投下</text>
  <path d="M958 298 C992 288 998 240 1018 222" stroke="#e07b20" stroke-width="3" fill="none" opacity="0.9" marker-end="url(#mC)"/>
  <rect x="856" y="172" width="252" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="882" cy="198" r="14" fill="#ffffff"/>
  <text x="882" y="203" font-size="14" font-weight="700" fill="#e07b20" text-anchor="middle">D</text>
  <text x="904" y="195" font-size="12.5" font-weight="700" fill="#ffffff">取組4：支援者を効率化</text>
  <text x="904" y="212" font-size="9.6" fill="#fff3e2">労力を削減</text>
  <text x="870" y="234" font-size="10" fill="#fff7ee">反復・窓口業務をRAGで省力化</text>
  <text x="870" y="249" font-size="10" fill="#fff7ee">IR・成果・回答を自動収集し統合分析</text>
  <g transform="translate(330,470)"><circle cx="0" cy="0" r="13" fill="#ffffff" filter="url(#shSoft)"/><circle cx="0" cy="-3" r="4" fill="#b85c1c"/><path d="M-7 7 A8 8 0 0 1 7 7" fill="#b85c1c"/></g>
  <g transform="translate(358,470)"><circle cx="0" cy="0" r="13" fill="#ffffff" filter="url(#shSoft)"/><circle cx="0" cy="-3" r="4" fill="#e07b20"/><path d="M-7 7 A8 8 0 0 1 7 7" fill="#e07b20"/></g>
  <g transform="translate(386,470)"><circle cx="0" cy="0" r="13" fill="#ffffff" filter="url(#shSoft)"/><circle cx="0" cy="-3" r="4" fill="#f7a93f"/><path d="M-7 7 A8 8 0 0 1 7 7" fill="#f7a93f"/></g>
  <text x="358" y="500" font-size="9.5" font-weight="700" fill="#b85c1c" text-anchor="middle">研究者・院生・支援者</text>
  <rect x="40" y="540" width="372" height="158" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="540" width="372" height="24" rx="14" fill="#e07b20"/>
  <rect x="40" y="552" width="372" height="12" fill="#e07b20"/>
  <circle cx="56" cy="552" r="2.6" fill="#ffd29a"/>
  <circle cx="65" cy="552" r="2.6" fill="#ffd29a"/>
  <circle cx="74" cy="552" r="2.6" fill="#ffd29a"/>
  <text x="92" y="556" font-size="10" fill="#fff0e0">研究×学び アプリ（接続基盤 Nexus）</text>
  <rect x="52" y="574" width="78" height="114" rx="6" fill="#fbe9d4"/>
  <rect x="62" y="588" width="58" height="9" rx="3" fill="#e07b20"/>
  <rect x="62" y="604" width="58" height="9" rx="3" fill="#f1cda0"/>
  <rect x="62" y="620" width="58" height="9" rx="3" fill="#f1cda0"/>
  <circle cx="81" cy="654" r="9" fill="#f0c590"/>
  <path d="M74 668 A9 9 0 0 1 88 668" fill="#f0c590"/>
  <text x="146" y="586" font-size="11" font-weight="700" fill="#a85518">CVデータベース ＋ AI伴走</text>
  <circle cx="152" cy="602" r="3.5" fill="#e07b20"/>
  <rect x="162" y="598" width="120" height="7" rx="3" fill="#fbe9d4"/>
  <circle cx="152" cy="617" r="3.5" fill="#eab877"/>
  <rect x="162" y="613" width="150" height="7" rx="3" fill="#fbe9d4"/>
  <circle cx="152" cy="632" r="3.5" fill="#eab877"/>
  <rect x="162" y="628" width="100" height="7" rx="3" fill="#fbe9d4"/>
  <rect x="146" y="646" width="244" height="20" rx="9" fill="#e07b20"/>
  <text x="156" y="660" font-size="9.4" fill="#ffffff">AI伴走：段階別に次の一手を個別提案</text>
  <text x="146" y="682" font-size="9.6" fill="#7a5a30">許諾済データを学内・行政・企業の共同研究へ</text>
  <rect x="426" y="540" width="382" height="158" rx="14" fill="#fff4e4" filter="url(#shSoft)"/>
  <circle cx="452" cy="566" r="12" fill="#ffffff"/>
  <g transform="translate(452,566)" stroke="#e07b20" stroke-width="2" fill="none"><rect x="-7" y="-4" width="7" height="8" rx="3"/><rect x="0" y="-4" width="7" height="8" rx="3"/></g>
  <text x="472" y="570" font-size="12.5" font-weight="700" fill="#a85518">接続する＝〈情報・データ・サポート・機会〉</text>
  <text x="440" y="592" font-size="10.5" fill="#5f4423">真に必要とする個人へ、情報・支援・機会を</text>
  <text x="440" y="608" font-size="10.5" fill="#5f4423">ダイレクト投下 → 研究×学びが「つながる」</text>
  <rect x="440" y="620" width="356" height="30" rx="8" fill="#fbe2c7"/>
  <text x="452" y="639" font-size="10.5" font-weight="700" fill="#a85518">段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携</text>
  <text x="440" y="666" font-size="10" fill="#5f4423">副次：統合分析で経営判断を迅速化／アプリ外販</text>
  <text x="440" y="684" font-size="10" fill="#5f4423">「システム」でなく〈データ〉を基盤でつなぐ</text>
  <rect x="1060" y="172" width="180" height="200" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1090" cy="204" r="14" fill="#ffffff"/>
  <g transform="translate(1090,204)" stroke="#e07b20" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1114" y="210" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1078" y="236" font-size="11" font-weight="700" fill="#7a4310">研究者と支援者が躍動する</text>
  <text x="1078" y="252" font-size="11" font-weight="700" fill="#7a4310">Nexus University</text>
  <circle cx="1082" cy="276" r="3" fill="#ffffff"/>
  <text x="1093" y="280" font-size="11" fill="#5f3a0e">研究力・国際性 ↑</text>
  <circle cx="1082" cy="298" r="3" fill="#ffffff"/>
  <text x="1093" y="302" font-size="11" fill="#5f3a0e">標準年限内の修了率 ↑</text>
  <circle cx="1082" cy="320" r="3" fill="#ffffff"/>
  <text x="1093" y="324" font-size="11" fill="#5f3a0e">中退率 ↓</text>
  <circle cx="1082" cy="342" r="3" fill="#ffffff"/>
  <text x="1093" y="346" font-size="11" fill="#5f3a0e">経営判断の高度化</text>
  <text x="822" y="556" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ・あくまで目標値）</text>
  <rect x="822" y="566" width="200" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="822" y="566" width="5" height="58" rx="2.5" fill="url(#gWarn)"/>
  <text x="840" y="602" font-size="22" font-weight="700" fill="#b85c1c">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="912" y="589" font-size="10" fill="#5f4423">教員1人の</text>
  <text x="912" y="604" font-size="10" fill="#5f4423">研究時間確保</text>
  <text x="912" y="618" font-size="9" fill="#a78a5e">A 想定</text>
  <rect x="1032" y="566" width="208" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1032" y="566" width="5" height="58" rx="2.5" fill="url(#gWarn)"/>
  <text x="1050" y="602" font-size="22" font-weight="700" fill="#b85c1c">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="1124" y="589" font-size="10" fill="#5f4423">定型問い合わせ</text>
  <text x="1124" y="604" font-size="10" fill="#5f4423">窓口（RAG）</text>
  <text x="1124" y="618" font-size="9" fill="#a78a5e">D 想定</text>
  <rect x="822" y="632" width="200" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="822" y="632" width="5" height="58" rx="2.5" fill="url(#gWarn)"/>
  <text x="840" y="668" font-size="22" font-weight="700" fill="#b85c1c">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="912" y="655" font-size="10" fill="#5f4423">院生の研究力</text>
  <text x="912" y="670" font-size="10" fill="#5f4423">（自己効力感）</text>
  <text x="912" y="684" font-size="9" fill="#a78a5e">B 想定</text>
  <rect x="1032" y="632" width="208" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1032" y="632" width="5" height="58" rx="2.5" fill="url(#gWarn)"/>
  <text x="1050" y="668" font-size="22" font-weight="700" fill="#b85c1c">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1124" y="655" font-size="10" fill="#5f4423">修了率の改善</text>
  <text x="1124" y="670" font-size="10" fill="#5f4423">（中退率↓）</text>
  <text x="1124" y="684" font-size="9" fill="#a78a5e">C 想定</text>
</svg>

<!-- ポンチ絵 variant-83：骨格=ロードマップ旅(対角クライム)。左の低地に課題A-D→対角の昇る斜面に取組1-4(A-D 1:1)→右上GOALバースト。0層=世界地図風ドット&結線(都市ノード)。橙/黄の温かい配色・アクセント焦点=右上バースト。packed密度・appMockup・登場人物アイコン群入り。KPIは全て「想定/試算」と明示。 -->
