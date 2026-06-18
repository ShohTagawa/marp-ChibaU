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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f7d8c"/><stop offset="1" stop-color="#0b4f6b"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15a08a"/><stop offset="1" stop-color="#0c6e63"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7fc4"/><stop offset="1" stop-color="#1d4e86"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef9a4f"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fae5a"/><stop offset="1" stop-color="#1f7e3a"/></linearGradient>
    <linearGradient id="gBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef6fb"/><stop offset="1" stop-color="#e6f2f3"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.95"/><stop offset="0.6" stop-color="#7fd49a" stop-opacity="0.35"/><stop offset="1" stop-color="#3fae5a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0b3a4a" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0b3a4a" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0c6e63"/></marker>
    <marker id="mB" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1d4e86"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBg)"/>
  <g opacity="0.08" stroke="#1d4e86" stroke-width="1.4" fill="none"><circle cx="640" cy="392" r="250"/><ellipse cx="640" cy="392" rx="250" ry="84"/><ellipse cx="640" cy="392" rx="250" ry="168"/><ellipse cx="640" cy="392" rx="84" ry="250"/><ellipse cx="640" cy="392" rx="168" ry="250"/><line x1="390" y1="392" x2="890" y2="392"/><line x1="640" y1="142" x2="640" y2="642"/></g>
  <g opacity="0.07" stroke="#0f7d8c" stroke-width="1.1" stroke-dasharray="2 7" fill="none"><path d="M120 250 L360 180 L560 300 L820 200 L1080 280"/><path d="M180 540 L430 470 L690 560 L940 460 L1150 540"/><path d="M360 180 L430 470"/><path d="M560 300 L690 560"/><path d="M820 200 L940 460"/></g>
  <g opacity="0.10" fill="#0f7d8c"><circle cx="360" cy="180" r="3"/><circle cx="560" cy="300" r="3"/><circle cx="820" cy="200" r="3"/><circle cx="1080" cy="280" r="3"/><circle cx="430" cy="470" r="3"/><circle cx="690" cy="560" r="3"/><circle cx="940" cy="460" r="3"/></g>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gHdr)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究 × 学び」接続基盤</text>
  <rect x="1104" y="13" width="140" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1118" y="19" width="112" height="22"/>
  <rect x="0" y="60" width="1280" height="32" fill="#dcecef"/>
  <text x="40" y="82" font-size="15" font-weight="700" fill="#0b4f6b">学内に分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ ― 千葉大学・役員ブリーフ</text>
  <text x="40" y="118" font-size="13" font-weight="700" fill="#c4632a">第1幕　課題（このままでは立ち行かない）</text>
  <rect x="40" y="126" width="318" height="356" rx="16" fill="#fbede2" opacity="0.85"/>
  <rect x="52" y="138" width="294" height="40" rx="9" fill="url(#gWarn)"/>
  <circle cx="76" cy="158" r="13" fill="#ffffff"/>
  <g transform="translate(76,159)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="76" cy="161" r="1.1" fill="#d2772f"/>
  <text x="98" y="163" font-size="14" font-weight="700" fill="#ffffff">A〜D の構造課題</text>
  <rect x="52" y="186" width="294" height="68" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="64" y="206" font-size="13" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="64" y="224" font-size="11" fill="#555">院生の多様化（社会人・留学生・他分野）</text>
  <text x="64" y="241" font-size="11" fill="#555">申請・評価資料・学振添削・全員留学で限界</text>
  <rect x="52" y="260" width="294" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="64" y="280" font-size="13" font-weight="700" fill="#c4632a">B 研究人材育成が多様化・高度化</text>
  <text x="64" y="297" font-size="11" fill="#555">成功モデル多様化・水準上昇／資源最適配分</text>
  <rect x="52" y="316" width="294" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="64" y="336" font-size="13" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="64" y="353" font-size="11" fill="#555">支援が乱立・重複・分散／必要な個人に届かず</text>
  <rect x="52" y="372" width="294" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="64" y="392" font-size="13" font-weight="700" fill="#c4632a">D 支援者の実践知が活かされない</text>
  <text x="64" y="409" font-size="11" fill="#555">同手続きの反復／システム乱立・異動でゼロ化</text>
  <text x="64" y="448" font-size="11.5" font-weight="700" fill="#a85420">院生↑ × 教員数一定 → 広がる支援ギャップ</text>
  <text x="64" y="468" font-size="11" fill="#8a6a55">課題は個別ではなく「接続の欠如」に根がある</text>
  <path d="M362 290 L382 290 L398 312 L382 334 L362 334 L378 312 Z" fill="#0c6e63"/>
  <text x="408" y="118" font-size="13" font-weight="700" fill="#0c6e63">第2幕　打ち手 ― 2本柱（アプリ × AI基盤）で A〜D に1:1対応</text>
  <rect x="408" y="126" width="486" height="356" rx="16" fill="#e7f3f1" opacity="0.9"/>
  <rect x="420" y="138" width="231" height="172" rx="12" fill="#ffffff" filter="url(#sh)"/>
  <rect x="420" y="138" width="231" height="30" rx="12" fill="url(#gTeal)"/>
  <rect x="420" y="150" width="231" height="18" fill="url(#gTeal)"/>
  <text x="434" y="159" font-size="12.5" font-weight="700" fill="#ffffff">柱① アプリ（フロント）</text>
  <rect x="434" y="178" width="58" height="84" rx="9" fill="#e7f3f1"/>
  <rect x="438" y="182" width="50" height="76" rx="7" fill="#ffffff" stroke="#0c6e63" stroke-width="1.2"/>
  <rect x="438" y="182" width="50" height="14" rx="7" fill="#0c6e63"/>
  <rect x="438" y="189" width="50" height="7" fill="#0c6e63"/>
  <rect x="445" y="204" width="36" height="7" rx="3" fill="#e7f3f1" stroke="#bfe0d8" stroke-width="0.6"/>
  <circle cx="449" cy="221" r="3.4" fill="#cfe7df"/><rect x="455" y="218" width="26" height="5" rx="2" fill="#cfe7df"/>
  <circle cx="449" cy="234" r="3.4" fill="#cfe7df"/><rect x="455" y="231" width="26" height="5" rx="2" fill="#cfe7df"/>
  <circle cx="449" cy="247" r="3.4" fill="#cfe7df"/><rect x="455" y="244" width="26" height="5" rx="2" fill="#cfe7df"/>
  <text x="502" y="198" font-size="12.5" font-weight="700" fill="#0c6e63">学びの入口</text>
  <text x="502" y="216" font-size="11" fill="#555">情報・資源が集約</text>
  <text x="502" y="233" font-size="11" fill="#555">CVデータベース</text>
  <text x="502" y="250" font-size="11" fill="#555">学内外の学習・資格記録</text>
  <text x="502" y="280" font-size="11" font-weight="700" fill="#16624b">→ 学生がニーズを入力</text>
  <rect x="663" y="138" width="219" height="172" rx="12" fill="#ffffff" filter="url(#sh)"/>
  <rect x="663" y="138" width="219" height="30" rx="12" fill="url(#gBlue)"/>
  <rect x="663" y="150" width="219" height="18" fill="url(#gBlue)"/>
  <text x="677" y="159" font-size="12.5" font-weight="700" fill="#ffffff">柱② AIエージェント基盤（裏側）</text>
  <g transform="translate(694,194)" stroke="#1d4e86" stroke-width="1.6" fill="none"><rect x="-13" y="-13" width="26" height="26" rx="4"/><path d="M-13 -5 H-18 M-13 5 H-18 M13 -5 H18 M13 5 H18 M-5 -13 V-18 M5 -13 V-18 M-5 13 V18 M5 13 V18"/><circle cx="0" cy="0" r="5"/></g>
  <text x="720" y="190" font-size="11.5" fill="#333">実践知をRAGで統合</text>
  <text x="720" y="207" font-size="11.5" fill="#333">学修履歴・データ突合</text>
  <text x="677" y="236" font-size="11" fill="#444">許諾済データを基盤で接続し統合分析</text>
  <text x="677" y="254" font-size="11" fill="#444">反復・窓口業務を省力化／IR自動収集</text>
  <text x="677" y="282" font-size="12.5" font-weight="700" fill="#1d4e86">→ 文脈に応じ個別最適に投下</text>
  <rect x="420" y="322" width="462" height="150" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="434" y="342" font-size="12" font-weight="700" fill="#0c6e63">課題 ↔ 打ち手（1:1対応）</text>
  <rect x="434" y="350" width="222" height="56" rx="8" fill="#f3faf8"/>
  <text x="444" y="368" font-size="11.5" font-weight="700" fill="#c4632a">A</text><text x="458" y="368" font-size="11" fill="#333">教員の負荷 → 指導負担を軽減</text>
  <text x="458" y="384" font-size="10.5" fill="#666">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="458" y="400" font-size="10.5" fill="#666">→ 研究時間を確保</text>
  <rect x="660" y="350" width="210" height="56" rx="8" fill="#f3faf8"/>
  <text x="670" y="368" font-size="11.5" font-weight="700" fill="#c4632a">B</text><text x="684" y="368" font-size="11" fill="#333">育成高度化 → 研究力を向上</text>
  <text x="684" y="384" font-size="10.5" fill="#666">CV-DB＋AI伴走の段階別個別支援</text>
  <text x="684" y="400" font-size="10.5" fill="#666">留学・ラボ・企業マッチング</text>
  <rect x="434" y="410" width="222" height="56" rx="8" fill="#f3faf8"/>
  <text x="444" y="428" font-size="11.5" font-weight="700" fill="#c4632a">C</text><text x="458" y="428" font-size="11" fill="#333">届かない支援 → 直に届ける</text>
  <text x="458" y="444" font-size="10.5" fill="#666">学生入力ニーズ × 全学の支援情報を突合</text>
  <text x="458" y="460" font-size="10.5" fill="#666">→ 必要な個人へダイレクト投下</text>
  <rect x="660" y="410" width="210" height="56" rx="8" fill="#f3faf8"/>
  <text x="670" y="428" font-size="11.5" font-weight="700" fill="#c4632a">D</text><text x="684" y="428" font-size="11" fill="#333">実践知の死蔵 → 効率化</text>
  <text x="684" y="444" font-size="10.5" fill="#666">基盤で接続しAI分析／RAGで省力化</text>
  <text x="684" y="460" font-size="10.5" fill="#666">成果・回答を自動収集・統合分析</text>
  <path d="M898 290 L918 290 L934 312 L918 334 L898 334 L914 312 Z" fill="#1f7e3a"/>
  <text x="944" y="118" font-size="13" font-weight="700" fill="#1f7e3a">第3幕　GOAL</text>
  <circle cx="1068" cy="262" r="120" fill="url(#burst)"/>
  <g transform="translate(1068,262)"><g stroke="#3fae5a" stroke-width="3" stroke-linecap="round" opacity="0.5"><line x1="0" y1="-112" x2="0" y2="-94"/><line x1="79" y1="-79" x2="66" y2="-66"/><line x1="112" y1="0" x2="94" y2="0"/><line x1="79" y1="79" x2="66" y2="66"/><line x1="-79" y1="79" x2="-66" y2="66"/><line x1="-112" y1="0" x2="-94" y2="0"/><line x1="-79" y1="-79" x2="-66" y2="-66"/></g></g>
  <rect x="944" y="126" width="296" height="356" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="972" cy="158" r="14" fill="#ffffff"/>
  <g transform="translate(972,158)" stroke="#1f7e3a" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.4"/></g>
  <text x="996" y="163" font-size="14" font-weight="700" fill="#ffffff">研究者と支援者が躍動する大学</text>
  <text x="962" y="200" font-size="18" font-weight="700" fill="#ffffff">教員の手間 ↓ × 研究力 ↑</text>
  <text x="962" y="228" font-size="12.5" fill="#e7f7ec">情報がリンクするほど、学内すべての</text>
  <text x="962" y="246" font-size="12.5" fill="#e7f7ec">成果が連鎖的に伸びる好循環へ</text>
  <rect x="962" y="262" width="260" height="92" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="974" y="282" font-size="12" font-weight="700" fill="#ffffff">副次的な価値</text>
  <text x="974" y="301" font-size="11" fill="#e7f7ec">・許諾済データの共有・利活用</text>
  <text x="984" y="317" font-size="10.5" fill="#dff0e5">（学内・行政・企業の共同研究）</text>
  <text x="974" y="335" font-size="11" fill="#e7f7ec">・統合分析で経営判断を迅速化</text>
  <text x="974" y="351" font-size="11" fill="#e7f7ec">・アプリ外販</text>
  <text x="962" y="382" font-size="12.5" font-weight="700" fill="#ffffff">→ 中退率↓・修了率↑・研究力↑</text>
  <text x="962" y="402" font-size="11.5" fill="#e7f7ec">→ 自ら考える人材が育つ大学へ</text>
  <rect x="962" y="416" width="260" height="54" rx="10" fill="#ffffff" opacity="0.16"/>
  <text x="974" y="437" font-size="11.5" font-weight="700" fill="#ffffff">登場人物が一つの基盤で繋がる</text>
  <g transform="translate(984,455)" fill="#ffffff" opacity="0.92"><circle cx="0" cy="-5" r="4.5"/><path d="M-8 8 A8 8 0 0 1 8 8 Z" stroke="#ffffff" stroke-width="0"/></g>
  <g transform="translate(1016,455)" fill="#ffffff" opacity="0.92"><circle cx="0" cy="-5" r="4.5"/><path d="M-8 8 A8 8 0 0 1 8 8 Z"/></g>
  <g transform="translate(1048,455)" fill="#ffffff" opacity="0.92"><circle cx="0" cy="-5" r="4.5"/><path d="M-8 8 A8 8 0 0 1 8 8 Z"/></g>
  <g transform="translate(1080,455)" fill="#ffffff" opacity="0.92"><circle cx="0" cy="-5" r="4.5"/><path d="M-8 8 A8 8 0 0 1 8 8 Z"/></g>
  <text x="1100" y="459" font-size="10.5" fill="#e7f7ec">学生・教員・職員・大学</text>
  <text x="40" y="510" font-size="12.5" font-weight="700" fill="#7a8a90">ロードマップ（Level 1 → 3）</text>
  <path d="M120 596 C320 596 380 576 560 572 S900 552 1010 548" stroke="#9cc6c0" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="150" y="572" width="248" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <text x="200" y="592" font-size="13" font-weight="700" fill="#0c6e63">アプリ（CV-DB集約）</text>
  <text x="200" y="610" font-size="10.5" fill="#555">情報・資源・学習記録を一つに</text>
  <rect x="546" y="548" width="248" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <text x="596" y="568" font-size="13" font-weight="700" fill="#1d4e86">AI基盤で個別伴走</text>
  <text x="596" y="586" font-size="10.5" fill="#555">突合・伴走・支援者接続を展開</text>
  <rect x="938" y="524" width="248" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <text x="988" y="544" font-size="13" font-weight="700" fill="#1f7e3a">全学DX・経営活用</text>
  <text x="988" y="562" font-size="10.5" fill="#555">統合分析でIR/経営・外部連携へ</text>
  <circle cx="120" cy="596" r="20" fill="url(#gTeal)" filter="url(#shS)"/>
  <text x="120" y="603" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="560" cy="572" r="20" fill="url(#gBlue)" filter="url(#shS)"/>
  <text x="560" y="579" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="912" cy="548" r="20" fill="url(#gGoal)" filter="url(#shS)"/>
  <text x="912" y="555" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <rect x="40" y="640" width="1200" height="58" rx="12" fill="#0b4f6b"/>
  <rect x="52" y="652" width="118" height="34" rx="8" fill="#ef9a4f"/>
  <text x="111" y="667" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">想定／試算KPI</text>
  <text x="111" y="681" font-size="9.5" fill="#fff3e6" text-anchor="middle">（実測値ではない）</text>
  <line x1="186" y1="650" x2="186" y2="688" stroke="#2f6b85" stroke-width="1"/>
  <text x="208" y="664" font-size="16" font-weight="700" fill="#ffe9a8">+3h/週</text>
  <text x="208" y="682" font-size="10.5" fill="#cfe2ea">教員の研究時間（想定）</text>
  <line x1="378" y1="650" x2="378" y2="688" stroke="#2f6b85" stroke-width="1"/>
  <text x="400" y="664" font-size="16" font-weight="700" fill="#ffe9a8">−50%</text>
  <text x="400" y="682" font-size="10.5" fill="#cfe2ea">定型問い合わせ（試算）</text>
  <line x1="580" y1="650" x2="580" y2="688" stroke="#2f6b85" stroke-width="1"/>
  <text x="602" y="664" font-size="16" font-weight="700" fill="#ffe9a8">+20pt</text>
  <text x="602" y="682" font-size="10.5" fill="#cfe2ea">院生の研究力（想定）</text>
  <line x1="772" y1="650" x2="772" y2="688" stroke="#2f6b85" stroke-width="1"/>
  <text x="794" y="664" font-size="16" font-weight="700" fill="#ffe9a8">+5pt</text>
  <text x="794" y="682" font-size="10.5" fill="#cfe2ea">修了率（中退率↓・試算）</text>
  <line x1="980" y1="650" x2="980" y2="688" stroke="#2f6b85" stroke-width="1"/>
  <text x="1002" y="672" font-size="12.5" font-weight="700" fill="#ffffff">分散を「接続」し、研究と学びが連鎖して伸びる大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤でA-D 1:1対応→③GOAL goalBurst)＋下段ロードマップ旅(Level1-3)。0層=薄いグローブ(経線緯線楕円)＋ネットワーク点線(opacity0.06-0.1)で国際×接続を地で表現。配色=teal＋橙(課題)＋緑(GOAL)＋青(AI基盤)の多色リッチ。密度packed。KPIは想定/試算と明示。 -->
