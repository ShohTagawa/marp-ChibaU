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
    <linearGradient id="gHd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e5f8a"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gNex" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa389"/><stop offset="0.55" stop-color="#178a72"/><stop offset="1" stop-color="#0e5f8a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f0a24e"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9842f" stop-opacity="0.92"/><stop offset="0.5" stop-color="#1aa389" stop-opacity="0.95"/><stop offset="1" stop-color="#2e9c5e" stop-opacity="0.95"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.5"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <radialGradient id="nexGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1aa389" stop-opacity="0.46"/><stop offset="1" stop-color="#1aa389" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c3f56" flood-opacity="0.24"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c3f56" flood-opacity="0.15"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f7fafc"/>
  <rect x="0" y="88" width="1280" height="502" fill="#eef5f9" opacity="0.6"/>
  <g opacity="0.10" fill="#0e5f8a"><circle cx="150" cy="180" r="3"/><circle cx="245" cy="150" r="2.4"/><circle cx="330" cy="205" r="2.4"/><circle cx="210" cy="250" r="2.4"/><circle cx="430" cy="160" r="3"/><circle cx="540" cy="220" r="2.4"/><circle cx="640" cy="165" r="2.4"/><circle cx="745" cy="210" r="3"/><circle cx="850" cy="160" r="2.4"/><circle cx="960" cy="220" r="2.4"/><circle cx="1060" cy="170" r="3"/><circle cx="1150" cy="215" r="2.4"/><circle cx="180" cy="430" r="2.4"/><circle cx="300" cy="500" r="3"/><circle cx="470" cy="460" r="2.4"/><circle cx="620" cy="520" r="2.4"/><circle cx="780" cy="470" r="3"/><circle cx="930" cy="525" r="2.4"/><circle cx="1080" cy="470" r="2.4"/><circle cx="1180" cy="520" r="3"/></g>
  <g opacity="0.08" stroke="#0e5f8a" stroke-width="1" fill="none"><path d="M150 180 L245 150 L330 205 L430 160 L540 220 L640 165 L745 210 L850 160 L960 220 L1060 170 L1150 215"/><path d="M180 430 L300 500 L470 460 L620 520 L780 470 L930 525 L1080 470 L1180 520"/><path d="M330 205 L300 500"/><path d="M640 165 L620 520"/><path d="M960 220 L930 525"/><path d="M210 250 L470 460"/><path d="M745 210 L780 470"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHd)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M44 300 L1236 300 L1236 432 L44 432 Z" fill="#dfeef1" opacity="0.55"/>
  <path d="M300 366 L640 366" stroke="#cfe0d8" stroke-width="2" stroke-dasharray="4 5" opacity="0.7"/>
  <circle cx="640" cy="366" r="170" fill="url(#nexGlow)"/>
  <circle cx="1158" cy="366" r="150" fill="url(#goalGlow)"/>
  <text x="44" y="112" font-size="12.5" font-weight="700" fill="#c4632a">課題（A–D）が大学に流入</text>
  <rect x="44" y="120" width="248" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="120" width="6" height="40" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="140" r="10" fill="#FBEDE2"/>
  <text x="68" y="144" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="137" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="86" y="153" font-size="9.5" fill="#777">院生の多様化・申請・評価・全員留学で限界</text>
  <rect x="44" y="166" width="248" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="166" width="6" height="40" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="186" r="10" fill="#FBEDE2"/>
  <text x="68" y="190" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="183" font-size="11.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="86" y="199" font-size="9.5" fill="#777">水準が上昇・能力育成と資源の最適投下が必須</text>
  <rect x="44" y="212" width="248" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="212" width="6" height="40" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="232" r="10" fill="#FBEDE2"/>
  <text x="68" y="236" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="229" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="86" y="245" font-size="9.5" fill="#777">支援が乱立・重複・分散し個人に届かない</text>
  <rect x="44" y="258" width="248" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="258" width="6" height="40" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="278" r="10" fill="#FBEDE2"/>
  <text x="68" y="282" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="275" font-size="11.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="86" y="291" font-size="9.5" fill="#777">手続き反復・システム乱立・異動でゼロ化</text>
  <g transform="translate(90,470)"><circle cx="0" cy="0" r="16" fill="#FBEDE2"/><circle cx="0" cy="-5" r="5" fill="#d2772f"/><path d="M-9 9 A9 9 0 0 1 9 9 Z" fill="#d2772f"/></g>
  <text x="116" y="462" font-size="11" font-weight="700" fill="#1f2937">教員・研究者</text>
  <text x="116" y="478" font-size="9.5" fill="#777">指導と研究の両立に限界</text>
  <g transform="translate(90,520)"><circle cx="0" cy="0" r="16" fill="#FBEDE2"/><circle cx="0" cy="-5" r="5" fill="#e9842f"/><path d="M-9 9 A9 9 0 0 1 9 9 Z" fill="#e9842f"/></g>
  <text x="116" y="512" font-size="11" font-weight="700" fill="#1f2937">院生（多様な背景）</text>
  <text x="116" y="528" font-size="9.5" fill="#777">社会人・留学生・他分野</text>
  <path d="M294 140 C320 140 330 360 384 364" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M294 186 C326 186 332 360 384 366" stroke="#d2772f" stroke-width="3.4" fill="none" opacity="0.6" marker-end="url(#mW)"/>
  <path d="M294 232 C326 232 332 368 384 368" stroke="#d2772f" stroke-width="3.4" fill="none" opacity="0.6" marker-end="url(#mW)"/>
  <path d="M294 278 C320 278 330 372 384 372" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <rect x="388" y="240" width="312" height="252" rx="20" fill="url(#gNex)" filter="url(#sh)"/>
  <g opacity="0.13" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="544" cy="366" rx="128" ry="128"/><ellipse cx="544" cy="366" rx="52" ry="128"/><ellipse cx="544" cy="366" rx="128" ry="52"/></g>
  <circle cx="416" cy="272" r="13" fill="#ffffff"/>
  <g transform="translate(416,272)" stroke="#178a72" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="438" y="269" font-size="13" font-weight="700" fill="#d7f3ea">接続基盤（Nexus）</text>
  <text x="438" y="285" font-size="10" fill="#bfe9da">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="404" y="298" width="158" height="120" rx="9" fill="#ffffff" filter="url(#sh)"/>
  <rect x="404" y="298" width="158" height="18" rx="9" fill="#0e5f8a"/>
  <rect x="404" y="308" width="158" height="8" fill="#0e5f8a"/>
  <circle cx="416" cy="307" r="2.2" fill="#7fb8c9"/>
  <circle cx="423" cy="307" r="2.2" fill="#7fb8c9"/>
  <circle cx="430" cy="307" r="2.2" fill="#7fb8c9"/>
  <text x="446" y="311" font-size="8.5" fill="#d7eef5">研究×学び アプリ</text>
  <rect x="404" y="316" width="48" height="102" fill="#eef6f3"/>
  <rect x="412" y="328" width="32" height="7" rx="3" fill="#178a72"/>
  <rect x="412" y="340" width="32" height="7" rx="3" fill="#cfe0d8"/>
  <rect x="412" y="352" width="32" height="7" rx="3" fill="#cfe0d8"/>
  <circle cx="428" cy="384" r="8" fill="#bfe0d4"/>
  <path d="M422 396 A8 8 0 0 1 434 396" fill="#bfe0d4"/>
  <text x="462" y="334" font-size="9" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="466" cy="348" r="3" fill="#178a72"/>
  <rect x="474" y="345" width="78" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="466" cy="362" r="3" fill="#9bc3b5"/>
  <rect x="474" y="359" width="62" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="466" cy="376" r="3" fill="#9bc3b5"/>
  <rect x="474" y="373" width="78" height="6" rx="3" fill="#E4F2EC"/>
  <rect x="460" y="390" width="94" height="20" rx="8" fill="#178a72"/>
  <text x="468" y="404" font-size="8.5" fill="#ffffff">AI伴走：次の一手を提案</text>
  <rect x="576" y="298" width="112" height="120" rx="9" fill="#ffffff" opacity="0.14"/>
  <text x="632" y="320" font-size="10" font-weight="700" fill="#d7f3ea" text-anchor="middle">統合される4要素</text>
  <text x="632" y="342" font-size="10" fill="#eaf6f0" text-anchor="middle">情報 ・ データ</text>
  <text x="632" y="360" font-size="10" fill="#eaf6f0" text-anchor="middle">サポート ・ 機会</text>
  <text x="632" y="384" font-size="9.5" fill="#bfe9da" text-anchor="middle">＝ CV-DB ＋ AI伴走</text>
  <text x="632" y="400" font-size="9.5" fill="#bfe9da" text-anchor="middle">＋ RAG で接続</text>
  <text x="544" y="442" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">真に必要とする個人へダイレクト投下</text>
  <text x="544" y="460" font-size="10.5" font-weight="700" fill="#bfe9da" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <g transform="translate(414,470)"><circle cx="0" cy="0" r="15" fill="#E4F2EC"/><circle cx="-5" cy="-3" r="3.5" fill="#178a72"/><circle cx="5" cy="-3" r="3.5" fill="#178a72"/><path d="M-9 8 A9 9 0 0 1 9 8" fill="none" stroke="#178a72" stroke-width="2.5"/></g>
  <text x="436" y="466" font-size="10.5" font-weight="700" fill="#1f2937">支援者・URA</text>
  <text x="436" y="481" font-size="9.5" fill="#777">実践知を基盤に蓄積</text>
  <text x="704" y="112" font-size="12.5" font-weight="700" fill="#16624b">AI打ち手（A–D）が躍動を生む</text>
  <rect x="702" y="120" width="320" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="702" y="120" width="6" height="40" rx="3" fill="url(#gNex)"/>
  <circle cx="726" cy="140" r="10" fill="#E4F2EC"/>
  <text x="726" y="144" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="744" y="137" font-size="11.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="744" y="153" font-size="9.5" fill="#555">AI多言語支援・ラボ共通支援・支援者接続</text>
  <rect x="702" y="166" width="320" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="702" y="166" width="6" height="40" rx="3" fill="url(#gNex)"/>
  <circle cx="726" cy="186" r="10" fill="#E4F2EC"/>
  <text x="726" y="190" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="744" y="183" font-size="11.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="744" y="199" font-size="9.5" fill="#555">CV-DB＋AI伴走で段階別支援・留学/企業マッチ</text>
  <rect x="702" y="212" width="320" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="702" y="212" width="6" height="40" rx="3" fill="url(#gNex)"/>
  <circle cx="726" cy="232" r="10" fill="#E4F2EC"/>
  <text x="726" y="236" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="744" y="229" font-size="11.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="744" y="245" font-size="9.5" fill="#555">学生ニーズ＋全学の支援情報を突合し投下</text>
  <rect x="702" y="258" width="320" height="40" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <rect x="702" y="258" width="6" height="40" rx="3" fill="url(#gNex)"/>
  <circle cx="726" cy="278" r="10" fill="#E4F2EC"/>
  <text x="726" y="282" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="744" y="275" font-size="11.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="744" y="291" font-size="9.5" fill="#555">反復・窓口をRAGで省力化・成果を自動統合分析</text>
  <path d="M700 364 C760 358 940 200 998 158" stroke="#1c6e44" stroke-width="3" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <path d="M700 366 C770 360 940 220 998 200" stroke="#1c6e44" stroke-width="3.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <path d="M700 368 C770 372 940 320 998 280" stroke="#1c6e44" stroke-width="3.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <path d="M700 370 C760 376 940 420 998 462" stroke="#1c6e44" stroke-width="3" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <rect x="1000" y="306" width="236" height="186" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.5"><path d="M1118 300 L1124 320 L1145 320 L1128 333 L1134 354 L1118 341 L1102 354 L1108 333 L1091 320 L1112 320 Z" fill="#7ee0a6"/></g>
  <circle cx="1028" cy="338" r="13" fill="#ffffff"/>
  <g transform="translate(1028,338)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1050" y="335" font-size="18" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1050" y="352" font-size="10" fill="#dff1e7">研究者と支援者が躍動する大学</text>
  <circle cx="1018" cy="376" r="3" fill="#bff0d3"/>
  <text x="1030" y="380" font-size="11" fill="#ffffff">院生の研究力 ↑ ・ 修了率 ↑</text>
  <circle cx="1018" cy="400" r="3" fill="#bff0d3"/>
  <text x="1030" y="404" font-size="11" fill="#ffffff">中退率 ↓ ・ 海外留学・国際性 ↑</text>
  <circle cx="1018" cy="424" r="3" fill="#bff0d3"/>
  <text x="1030" y="428" font-size="11" fill="#ffffff">許諾済データの共同研究・外販</text>
  <circle cx="1018" cy="448" r="3" fill="#bff0d3"/>
  <text x="1030" y="452" font-size="11" fill="#ffffff">統合分析で経営判断を高度化</text>
  <text x="1118" y="480" font-size="11" font-weight="700" fill="#eafaf1" text-anchor="middle">＝ Nexus University の実現</text>
  <path d="M40 506 L1206 506 L1240 526 L1206 546 L40 546 Z" fill="url(#gBack)"/>
  <text x="56" y="530" font-size="13" font-weight="700" fill="#ffffff">システムでなく〈データ〉を接続基盤でつなぐ ― 段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <text x="42" y="568" font-size="10.5" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ／確定値ではない）</text>
  <rect x="40" y="574" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="574" width="5" height="48" rx="2.5" fill="url(#gNex)"/>
  <text x="56" y="607" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="128" y="594" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="128" y="609" font-size="10" fill="#555">研究時間を確保</text>
  <rect x="345" y="574" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="345" y="574" width="5" height="48" rx="2.5" fill="url(#gWarn)"/>
  <text x="361" y="607" font-size="21" font-weight="700" fill="#c4632a">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="433" y="594" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="433" y="609" font-size="10" fill="#555">窓口業務（RAG）</text>
  <rect x="650" y="574" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="650" y="574" width="5" height="48" rx="2.5" fill="url(#gNex)"/>
  <text x="666" y="607" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="744" y="594" font-size="10" fill="#555">院生の研究力</text>
  <text x="744" y="609" font-size="10" fill="#555">（自己効力感）</text>
  <rect x="955" y="574" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="955" y="574" width="5" height="48" rx="2.5" fill="url(#gGoal)"/>
  <text x="971" y="607" font-size="21" font-weight="700" fill="#1c6e44">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1049" y="594" font-size="10" fill="#555">修了率の改善</text>
  <text x="1049" y="609" font-size="10" fill="#555">（中退率↓）</text>
  <path d="M40 632 L1206 632 L1240 666 L1206 700 L40 700 Z" fill="url(#gHd)"/>
  <text x="623" y="671" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵(marp-ponchie) variant-77。骨格#6バックボーン＋中央ヒーロー結節点(Nexus)。0層=世界地図風ドット＆都市結線。多色リッチ(teal＋橙＋緑GOAL＋青背景)。packed。左=課題A-D流入→中央Nexus(appMockup/CV-DB/統合4要素)→右=AI打ち手A-D→GOALバースト。登場人物アイコン群(教員/院生/支援者)。A-D課題↔打ち手1:1対応。想定KPIは試算と明示。 -->
