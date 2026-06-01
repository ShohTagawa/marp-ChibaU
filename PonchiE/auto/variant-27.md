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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#46c478"/><stop offset="1" stop-color="#1c7a48"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7fb0e0"/><stop offset="1" stop-color="#bcd6ef"/></linearGradient>
    <radialGradient id="goalBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#46c478" stop-opacity="0.55"/><stop offset="1" stop-color="#46c478" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.16"/></filter>
    <marker id="mTeal" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <path d="M-60 720 L420 720 L1340 120 L1340 360 L420 760 L-60 760 Z" fill="url(#gRibbon)" opacity="0.18"/>
  <path d="M-60 720 L300 720 L1180 130 L1180 250 L300 760 L-60 760 Z" fill="#7fb0e0" opacity="0.16"/>
  <g fill="#5d9ad6" opacity="0.16"><path d="M120 680 L260 588 L300 614 L160 706 Z"/><path d="M360 552 L500 460 L540 486 L400 578 Z"/><path d="M600 424 L740 332 L780 358 L640 450 Z"/><path d="M840 296 L980 204 L1020 230 L880 322 Z"/></g>
  <g opacity="0.08" fill="#1A7A5E"><circle cx="240" cy="300" r="3"/><circle cx="440" cy="240" r="3"/><circle cx="700" cy="200" r="3"/><circle cx="980" cy="180" r="3"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（役員ブリーフ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="120" font-size="13" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）― 低地</text>
  <rect x="40" y="130" width="300" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="130" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="150" r="11" fill="#FBEDE2"/>
  <text x="68" y="155" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="88" y="155" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="58" y="182" font-size="10.5" fill="#666">院生の多様化・申請・評価・学振・全員留学</text>
  <rect x="40" y="204" width="300" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="204" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="224" r="11" fill="#FBEDE2"/>
  <text x="68" y="229" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="88" y="229" font-size="12.5" font-weight="700" fill="#1f2937">研究人材の育成が多様化・高度化</text>
  <text x="58" y="256" font-size="10.5" fill="#666">水準上昇・個別育成と資源の最適投下が必須</text>
  <rect x="40" y="278" width="300" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="278" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="298" r="11" fill="#FBEDE2"/>
  <text x="68" y="303" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="88" y="303" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="58" y="330" font-size="10.5" fill="#666">支援が乱立・重複・分散し個人に届かない</text>
  <rect x="40" y="352" width="300" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="352" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="372" r="11" fill="#FBEDE2"/>
  <text x="68" y="377" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="88" y="377" font-size="12.5" font-weight="700" fill="#1f2937">支援者の実践知が活かされない</text>
  <text x="58" y="404" font-size="10.5" fill="#666">手続き反復・システム乱立・異動でゼロ化</text>
  <path d="M150 430 L1010 178" stroke="#1A7A5E" stroke-width="3" fill="none" stroke-dasharray="2 8" stroke-linecap="round" opacity="0.5"/>
  <text x="360" y="476" font-size="13" font-weight="700" fill="#16624b">AI×接続基盤の打ち手（A–D／課題と1:1）― 昇る斜面で前進</text>
  <g transform="translate(356,392)">
    <path d="M0 26 L36 26 L48 13 L36 0 L0 0 Z" fill="url(#gTeal)" opacity="0.9"/>
    <text x="14" y="18" font-size="13" font-weight="700" fill="#ffffff">A</text>
    <rect x="40" y="-14" width="248" height="64" rx="11" fill="#ffffff" filter="url(#sh)"/>
    <rect x="40" y="-14" width="6" height="64" rx="3" fill="url(#gHdr)"/>
    <text x="58" y="6" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
    <text x="58" y="26" font-size="10.5" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
    <text x="58" y="42" font-size="10.5" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  </g>
  <g transform="translate(556,288)">
    <path d="M0 26 L36 26 L48 13 L36 0 L0 0 Z" fill="url(#gTeal)" opacity="0.9"/>
    <text x="14" y="18" font-size="13" font-weight="700" fill="#ffffff">B</text>
    <rect x="40" y="-14" width="248" height="64" rx="11" fill="#ffffff" filter="url(#sh)"/>
    <rect x="40" y="-14" width="6" height="64" rx="3" fill="url(#gHdr)"/>
    <text x="58" y="6" font-size="12.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
    <text x="58" y="26" font-size="10.5" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
    <text x="58" y="42" font-size="10.5" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  </g>
  <g transform="translate(620,184)">
    <path d="M0 26 L36 26 L48 13 L36 0 L0 0 Z" fill="url(#gTeal)" opacity="0.9"/>
    <text x="14" y="18" font-size="13" font-weight="700" fill="#ffffff">C</text>
    <rect x="40" y="-14" width="248" height="64" rx="11" fill="#ffffff" filter="url(#sh)"/>
    <rect x="40" y="-14" width="6" height="64" rx="3" fill="url(#gHdr)"/>
    <text x="58" y="6" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
    <text x="58" y="26" font-size="10.5" fill="#444">①学生ニーズ ＋ ②全学の支援情報を突合</text>
    <text x="58" y="42" font-size="10.5" fill="#444">→ 必要な個人へダイレクト投下</text>
  </g>
  <g transform="translate(700,108)">
    <path d="M0 26 L36 26 L48 13 L36 0 L0 0 Z" fill="url(#gTeal)" opacity="0.9"/>
    <text x="14" y="18" font-size="13" font-weight="700" fill="#ffffff">D</text>
    <rect x="40" y="-14" width="248" height="64" rx="11" fill="#ffffff" filter="url(#sh)"/>
    <rect x="40" y="-14" width="6" height="64" rx="3" fill="url(#gHdr)"/>
    <text x="58" y="6" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
    <text x="58" y="26" font-size="10.5" fill="#444">反復・窓口業務をRAGで省力化</text>
    <text x="58" y="42" font-size="10.5" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  </g>
  <circle cx="1130" cy="172" r="120" fill="url(#goalBurst)"/>
  <g stroke="#9be0b6" stroke-width="3" opacity="0.55"><path d="M1130 36 L1130 56"/><path d="M1238 88 L1222 100"/><path d="M1022 88 L1038 100"/><path d="M1264 172 L1244 172"/></g>
  <rect x="1018" y="110" width="224" height="124" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1048" cy="142" r="14" fill="#ffffff"/>
  <g transform="translate(1048,142)" stroke="#1c7a48" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1072" y="148" font-size="20" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1036" y="180" font-size="12" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <text x="1036" y="200" font-size="11" fill="#dff1e7">研究者と支援者が躍動し</text>
  <text x="1036" y="216" font-size="11" fill="#dff1e7">成果が連鎖的に伸びる好循環へ</text>
  <rect x="356" y="500" width="288" height="120" rx="14" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="376" y="528" font-size="13" font-weight="700" fill="#bfe9da">接続基盤（Nexus）＋ 研究×学びアプリ</text>
  <rect x="376" y="540" width="86" height="66" rx="8" fill="#ffffff"/>
  <rect x="376" y="540" width="86" height="14" rx="8" fill="#125642"/>
  <rect x="376" y="548" width="86" height="6" fill="#125642"/>
  <circle cx="388" cy="547" r="2" fill="#7fb8a6"/>
  <rect x="384" y="562" width="70" height="7" rx="3" fill="#1A7A5E"/>
  <rect x="384" y="574" width="70" height="6" rx="3" fill="#cfe0d8"/>
  <rect x="384" y="586" width="70" height="6" rx="3" fill="#cfe0d8"/>
  <text x="474" y="558" font-size="11" font-weight="700" fill="#ffffff">CVデータベース</text>
  <text x="474" y="576" font-size="10.5" fill="#dff1e7">＋ AI伴走 ＋ RAG</text>
  <text x="474" y="596" font-size="10.5" fill="#dff1e7">＝ 分散を「接続」</text>
  <text x="668" y="520" font-size="11" font-weight="700" fill="#9a9a9a">副次効果</text>
  <rect x="668" y="528" width="226" height="28" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="686" cy="542" r="6" fill="#E4F2EC"/>
  <text x="700" y="546" font-size="10.5" fill="#16624b">許諾済データの共有・共同研究（行政・企業）</text>
  <rect x="668" y="562" width="226" height="28" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="686" cy="576" r="6" fill="#E4F2EC"/>
  <text x="700" y="580" font-size="10.5" fill="#16624b">統合分析で経営判断を迅速化</text>
  <rect x="668" y="596" width="226" height="28" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="686" cy="610" r="6" fill="#E4F2EC"/>
  <text x="700" y="614" font-size="10.5" fill="#16624b">アプリの外販（学外展開）</text>
  <path d="M40 470 L470 470 L470 458 L470 482 Z" fill="none"/>
  <text x="912" y="504" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="912" y="512" width="158" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="912" y="512" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="928" y="544" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="1000" y="532" font-size="10" fill="#555">教員の</text>
  <text x="1000" y="546" font-size="10" fill="#555">研究時間</text>
  <rect x="1082" y="512" width="158" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="1082" y="512" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="1098" y="544" font-size="21" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="1172" y="532" font-size="10" fill="#555">定型問い合</text>
  <text x="1172" y="546" font-size="10" fill="#555">わせ(RAG)</text>
  <rect x="912" y="568" width="158" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="912" y="568" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="928" y="600" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1006" y="588" font-size="10" fill="#555">院生の</text>
  <text x="1006" y="602" font-size="10" fill="#555">研究力</text>
  <rect x="1082" y="568" width="158" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="1082" y="568" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="1098" y="600" font-size="21" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1176" y="588" font-size="10" fill="#555">修了率↑</text>
  <text x="1176" y="602" font-size="10" fill="#555">中退率↓</text>
  <path d="M40 632 L1206 632 L1240 660 L1206 688 L40 688 Z" fill="url(#gHdr)"/>
  <text x="623" y="667" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">課題の低地から打ち手を昇り、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-27：骨格=ロードマップ旅(対角クライム)。0層=左下→右上の青リボン＋シェブロンで前進エネルギー。多色リッチ(teal＋橙課題＋緑GOALバースト＋青背景)・airy。低地に課題A-D／斜面に打ち手A-D(1:1・点線の登坂路)／右上GOALバースト。appMockup＋副次効果＋想定KPI(試算明示)＋結論帯。 -->
