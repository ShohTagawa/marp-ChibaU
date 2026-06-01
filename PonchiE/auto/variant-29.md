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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e3a5c"/><stop offset="0.55" stop-color="#11597a"/><stop offset="1" stop-color="#138a7a"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1ba596"/><stop offset="1" stop-color="#0e6f64"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3a85e"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3bb35e"/><stop offset="1" stop-color="#17713a"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#5fd07f" stop-opacity="0.55"/><stop offset="1" stop-color="#5fd07f" stop-opacity="0"/></radialGradient>
    <linearGradient id="gBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef6fb"/><stop offset="1" stop-color="#e3eef6"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0e3a5c" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e3a5c" flood-opacity="0.13"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBg)"/>
  <g opacity="0.5">
    <circle cx="150" cy="200" r="3" fill="#9fc0d8"/><circle cx="250" cy="160" r="2.5" fill="#9fc0d8"/><circle cx="360" cy="230" r="3" fill="#9fc0d8"/><circle cx="470" cy="180" r="2.5" fill="#9fc0d8"/><circle cx="600" cy="150" r="3" fill="#9fc0d8"/><circle cx="720" cy="210" r="2.5" fill="#9fc0d8"/><circle cx="840" cy="170" r="3" fill="#9fc0d8"/><circle cx="960" cy="240" r="2.5" fill="#9fc0d8"/><circle cx="1080" cy="190" r="3" fill="#9fc0d8"/><circle cx="1180" cy="150" r="2.5" fill="#9fc0d8"/>
    <circle cx="180" cy="420" r="3" fill="#9fc0d8"/><circle cx="320" cy="480" r="2.5" fill="#9fc0d8"/><circle cx="520" cy="440" r="3" fill="#9fc0d8"/><circle cx="700" cy="520" r="2.5" fill="#9fc0d8"/><circle cx="900" cy="460" r="3" fill="#9fc0d8"/><circle cx="1100" cy="520" r="2.5" fill="#9fc0d8"/><circle cx="240" cy="600" r="3" fill="#9fc0d8"/><circle cx="640" cy="630" r="2.5" fill="#9fc0d8"/><circle cx="1020" cy="610" r="3" fill="#9fc0d8"/>
    <path d="M150 200 L250 160 L360 230 L470 180 L600 150 L720 210 L840 170 L960 240 L1080 190 L1180 150" stroke="#b7d2e4" stroke-width="1" fill="none"/>
    <path d="M180 420 L320 480 L520 440 L700 520 L900 460 L1100 520" stroke="#b7d2e4" stroke-width="1" fill="none"/>
    <path d="M250 160 L320 480 M600 150 L520 440 M840 170 L900 460 M1080 190 L1100 520 M360 230 L240 600 M720 210 L640 630" stroke="#c5dbea" stroke-width="0.8" fill="none"/>
  </g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#0e3a5c" opacity="0.92"/>
  <text x="40" y="84" font-size="14.5" font-weight="700" fill="#d7ecf6">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="106" width="404" height="28" rx="7" fill="#FBEDE2"/>
  <text x="52" y="125" font-size="13" font-weight="700" fill="#c4632a">BEFORE ― 大学が抱える課題</text>
  <rect x="452" y="106" width="200" height="28" rx="7" fill="#0e3a5c"/>
  <text x="552" y="125" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI×接続基盤で変換</text>
  <rect x="664" y="106" width="404" height="28" rx="7" fill="#E0F3EF"/>
  <text x="680" y="125" font-size="13" font-weight="700" fill="#0e6f64">AFTER ― 課題ごとの打ち手（A–D 1:1）</text>
  <rect x="36" y="142" width="404" height="86" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="166" r="12" fill="#ffffff"/>
  <text x="62" y="171" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="84" y="171" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="52" y="195" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）／研究費</text>
  <text x="52" y="213" font-size="11" fill="#7a5a45">申請・評価資料・学振添削・全員留学で限界</text>
  <circle cx="552" cy="185" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="552" y="181" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <text x="552" y="194" font-size="8" fill="#cdeee8" text-anchor="middle">多言語</text>
  <path d="M444 185 L526 185" stroke="#138a7a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M578 178 L660 178 M652 172 L662 178 L652 184" stroke="#1ba596" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="664" y="142" width="404" height="86" rx="11" fill="#F1FBF8" filter="url(#shSoft)"/>
  <rect x="664" y="142" width="6" height="86" rx="3" fill="url(#gTeal)"/>
  <text x="688" y="171" font-size="13.5" font-weight="700" fill="#0e6f64">指導負担を軽減し、研究時間を確保</text>
  <text x="688" y="195" font-size="11" fill="#3c5b50">AIの多言語支援・ラボへの共通支援・支援者への</text>
  <text x="688" y="213" font-size="11" fill="#3c5b50">接続が容易になり、教員は研究に時間を回せる</text>
  <rect x="36" y="234" width="404" height="86" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="258" r="12" fill="#ffffff"/>
  <text x="62" y="263" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="84" y="263" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が多様化・高度化</text>
  <text x="52" y="287" font-size="11" fill="#7a5a45">成功モデルが多様化し、求める水準も上昇／個別</text>
  <text x="52" y="305" font-size="11" fill="#7a5a45">の能力育成と資源の最適投下が必須に</text>
  <circle cx="552" cy="277" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="552" y="273" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <text x="552" y="286" font-size="8" fill="#cdeee8" text-anchor="middle">伴走</text>
  <path d="M444 277 L526 277" stroke="#138a7a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M578 270 L660 270 M652 264 L662 270 L652 276" stroke="#1ba596" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="664" y="234" width="404" height="86" rx="11" fill="#F1FBF8" filter="url(#shSoft)"/>
  <rect x="664" y="234" width="6" height="86" rx="3" fill="url(#gTeal)"/>
  <text x="688" y="263" font-size="13.5" font-weight="700" fill="#0e6f64">院生一人ひとりの研究力を向上</text>
  <text x="688" y="287" font-size="11" fill="#3c5b50">CVデータベース＋AI伴走で段階別の個別支援／</text>
  <text x="688" y="305" font-size="11" fill="#3c5b50">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="36" y="326" width="404" height="86" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="350" r="12" fill="#ffffff"/>
  <text x="62" y="355" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="84" y="355" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="52" y="379" font-size="11" fill="#7a5a45">学内のサポートが乱立・重複・分散／真に必要と</text>
  <text x="52" y="397" font-size="11" fill="#7a5a45">する個人へ届かない</text>
  <circle cx="552" cy="369" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="552" y="365" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <text x="552" y="378" font-size="8" fill="#cdeee8" text-anchor="middle">突合</text>
  <path d="M444 369 L526 369" stroke="#138a7a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M578 362 L660 362 M652 356 L662 362 L652 368" stroke="#1ba596" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="664" y="326" width="404" height="86" rx="11" fill="#F1FBF8" filter="url(#shSoft)"/>
  <rect x="664" y="326" width="6" height="86" rx="3" fill="url(#gTeal)"/>
  <text x="688" y="355" font-size="13.5" font-weight="700" fill="#0e6f64">個別最適な情報・支援を直に届ける</text>
  <text x="688" y="379" font-size="11" fill="#3c5b50">①学生入力ニーズ ＋ ②全学の支援情報を突合し、</text>
  <text x="688" y="397" font-size="11" fill="#3c5b50">必要とする個人へ機会をダイレクト投下</text>
  <rect x="36" y="418" width="404" height="86" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="442" r="12" fill="#ffffff"/>
  <text x="62" y="447" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="84" y="447" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="52" y="471" font-size="11" fill="#7a5a45">同じ手続き・問い合わせの反復／システム乱立・</text>
  <text x="52" y="489" font-size="11" fill="#7a5a45">データ分散・異動でゼロリセット</text>
  <circle cx="552" cy="461" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="552" y="457" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <text x="552" y="470" font-size="8" fill="#cdeee8" text-anchor="middle">RAG</text>
  <path d="M444 461 L526 461" stroke="#138a7a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M578 454 L660 454 M652 448 L662 454 L652 460" stroke="#1ba596" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="664" y="418" width="404" height="86" rx="11" fill="#F1FBF8" filter="url(#shSoft)"/>
  <rect x="664" y="418" width="6" height="86" rx="3" fill="url(#gTeal)"/>
  <text x="688" y="447" font-size="13.5" font-weight="700" fill="#0e6f64">支援者の労力を削減し、業務を効率化</text>
  <text x="688" y="471" font-size="11" fill="#3c5b50">〈データ〉を基盤上で接続しAIで分析／反復・窓口</text>
  <text x="688" y="489" font-size="11" fill="#3c5b50">をRAGで省力化、IR・成果・回答を自動収集・統合</text>
  <circle cx="1124" cy="200" r="118" fill="url(#gBurst)"/>
  <rect x="1086" y="146" width="76" height="150" rx="13" fill="#ffffff" stroke="#cfe0ec" stroke-width="1.5" filter="url(#sh)"/>
  <rect x="1086" y="146" width="76" height="30" rx="13" fill="url(#gHdr)"/>
  <rect x="1086" y="163" width="76" height="13" fill="url(#gHdr)"/>
  <text x="1124" y="166" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <rect x="1096" y="184" width="56" height="14" rx="3" fill="#E0F3EF"/>
  <text x="1124" y="194" font-size="7.5" fill="#0e6f64" text-anchor="middle">あなた向けの支援</text>
  <rect x="1096" y="204" width="56" height="10" rx="2" fill="#FBEDE2"/>
  <rect x="1096" y="218" width="40" height="10" rx="2" fill="#eef6fb"/>
  <rect x="1096" y="232" width="56" height="10" rx="2" fill="#eef6fb"/>
  <circle cx="1112" cy="262" r="9" fill="url(#gTeal)"/>
  <text x="1112" y="265" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <rect x="1126" y="256" width="28" height="12" rx="6" fill="#E0F3EF"/>
  <text x="1140" y="265" font-size="7" fill="#0e6f64" text-anchor="middle">伴走</text>
  <text x="1124" y="312" font-size="10" font-weight="700" fill="#0e3a5c" text-anchor="middle">研究者・院生・支援者を</text>
  <text x="1124" y="328" font-size="10" font-weight="700" fill="#0e3a5c" text-anchor="middle">1つの基盤でつなぐ</text>
  <g transform="translate(1090,344)">
    <circle cx="12" cy="0" r="10" fill="#1ba596"/><circle cx="12" cy="-4" r="3.4" fill="#ffffff"/><path d="M6 4 a6 5 0 0 1 12 0 Z" fill="#ffffff"/>
    <circle cx="40" cy="0" r="10" fill="#d2772f"/><circle cx="40" cy="-4" r="3.4" fill="#ffffff"/><path d="M34 4 a6 5 0 0 1 12 0 Z" fill="#ffffff"/>
    <circle cx="68" cy="0" r="10" fill="#2f7fb0"/><circle cx="68" cy="-4" r="3.4" fill="#ffffff"/><path d="M62 4 a6 5 0 0 1 12 0 Z" fill="#ffffff"/>
  </g>
  <text x="1124" y="376" font-size="8.5" fill="#5a6b75" text-anchor="middle">研究者／院生／支援者</text>
  <rect x="1086" y="394" width="160" height="112" rx="11" fill="#0e3a5c" filter="url(#shSoft)"/>
  <rect x="1086" y="394" width="160" height="24" rx="11" fill="url(#gGoal)"/>
  <rect x="1086" y="408" width="160" height="10" fill="url(#gGoal)"/>
  <text x="1166" y="411" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI（試算）</text>
  <text x="1100" y="436" font-size="10.5" fill="#dceef9">教員の研究時間</text>
  <text x="1238" y="436" font-size="13" font-weight="700" fill="#7be39a" text-anchor="end">＋3h/週</text>
  <text x="1100" y="455" font-size="10.5" fill="#dceef9">定型問い合わせ</text>
  <text x="1238" y="455" font-size="13" font-weight="700" fill="#f3a85e" text-anchor="end">−50%</text>
  <text x="1100" y="474" font-size="10.5" fill="#dceef9">院生の研究力</text>
  <text x="1238" y="474" font-size="13" font-weight="700" fill="#7be39a" text-anchor="end">＋20pt</text>
  <text x="1100" y="493" font-size="10.5" fill="#dceef9">修了率（中退率↓）</text>
  <text x="1238" y="493" font-size="13" font-weight="700" fill="#7be39a" text-anchor="end">＋5pt</text>
  <rect x="36" y="514" width="1210" height="44" rx="10" fill="#ffffff" stroke="#cfe0ec" stroke-width="1.3" filter="url(#shSoft)"/>
  <text x="52" y="532" font-size="11.5" font-weight="700" fill="#0e3a5c">副次効果</text>
  <text x="52" y="550" font-size="11" fill="#5a6b75">許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M36 572 L1210 572 L1246 612 L1210 652 L36 652 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <text x="623" y="606" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
  <text x="623" y="632" font-size="11" fill="#d4f3de" text-anchor="middle">分散した情報・データ・サポート・機会を、世界とつながる1つの接続基盤へ統合する</text>
  <text x="40" y="686" font-size="9.5" fill="#8a99a4">※ KPIはすべて想定／試算値（導入効果の目安であり、実績値ではない）。</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #29 Before→AI変換→Afterの3列対応表。世界地図ドット背景・多色リッチ(teal/橙/緑GOAL/青)・packed・appMockup/goalBurst/登場人物アイコン群を盛り込み。 -->
