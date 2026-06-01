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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#9a4e16"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0a13c"/><stop offset="1" stop-color="#c4632a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2b23b"/><stop offset="1" stop-color="#dd8a1e"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6e8"/><stop offset="1" stop-color="#ffeccd"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#5a8fc7"/><stop offset="1" stop-color="#9fc5e8"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f2b23b" stop-opacity="0.55"/><stop offset="1" stop-color="#f2b23b" stop-opacity="0"/></radialGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f0a13c" stop-opacity="0.45"/><stop offset="1" stop-color="#f0a13c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#8a4a12" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#8a4a12" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#b85f24"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#c4632a"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffdf8"/>
  <path d="M-60 720 L380 720 L1340 80 L900 80 Z" fill="url(#gRibbon)" opacity="0.16"/>
  <path d="M-60 720 L240 720 L1200 80 L900 80 Z" fill="url(#gRibbon)" opacity="0.13"/>
  <path d="M-60 720 L120 720 L1060 80 L880 80 Z" fill="url(#gRibbon)" opacity="0.10"/>
  <g opacity="0.10" fill="#5a8fc7"><circle cx="240" cy="560" r="3"/><circle cx="430" cy="470" r="3"/><circle cx="640" cy="380" r="3"/><circle cx="850" cy="290" r="3"/><circle cx="1040" cy="200" r="3"/></g>
  <g opacity="0.10" stroke="#5a8fc7" stroke-width="1" fill="none"><path d="M240 560 L430 470"/><path d="M430 470 L640 380"/><path d="M640 380 L850 290"/><path d="M850 290 L1040 200"/></g>
  <circle cx="495" cy="300" r="190" fill="url(#hubGlow)"/>
  <circle cx="1148" cy="180" r="150" fill="url(#goalGlow)"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想の全体像</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#FBEDE2"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#9a4e16">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="42" y="110" font-size="12" font-weight="700" fill="#b85f24">流入する課題（A–D）</text>
  <rect x="40" y="116" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="78" rx="3" fill="#b85f24"/>
  <circle cx="66" cy="138" r="11" fill="#FBEDE2"/>
  <text x="66" y="143" font-size="13" font-weight="700" fill="#b85f24" text-anchor="middle">A</text>
  <text x="86" y="143" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="165" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="181" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="202" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="202" width="6" height="78" rx="3" fill="#b85f24"/>
  <circle cx="66" cy="224" r="11" fill="#FBEDE2"/>
  <text x="66" y="229" font-size="13" font-weight="700" fill="#b85f24" text-anchor="middle">B</text>
  <text x="86" y="229" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="251" font-size="10" fill="#666">求める水準が上昇、成功モデルも多様化</text>
  <text x="56" y="267" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="288" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="288" width="6" height="78" rx="3" fill="#b85f24"/>
  <circle cx="66" cy="310" r="11" fill="#FBEDE2"/>
  <text x="66" y="315" font-size="13" font-weight="700" fill="#b85f24" text-anchor="middle">C</text>
  <text x="86" y="315" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="337" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="353" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="374" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="374" width="6" height="78" rx="3" fill="#b85f24"/>
  <circle cx="66" cy="396" r="11" fill="#FBEDE2"/>
  <text x="66" y="401" font-size="13" font-weight="700" fill="#b85f24" text-anchor="middle">D</text>
  <text x="86" y="401" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="423" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="439" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M288 155 C312 155 314 250 340 268" stroke="#b85f24" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M288 241 C312 241 316 270 340 282" stroke="#b85f24" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M288 327 C312 327 316 300 340 296" stroke="#b85f24" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M288 413 C312 413 314 318 340 310" stroke="#b85f24" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <rect x="344" y="116" width="276" height="336" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.14" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="482" cy="284" rx="130" ry="130"/><ellipse cx="482" cy="284" rx="52" ry="130"/><ellipse cx="482" cy="284" rx="130" ry="52"/></g>
  <circle cx="374" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(374,148)" stroke="#c4632a" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="396" y="145" font-size="12" font-weight="700" fill="#fff3e0">接続基盤（Nexus）</text>
  <text x="396" y="163" font-size="11.5" fill="#ffe9cf">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="358" y="178" width="248" height="104" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="358" y="178" width="248" height="18" rx="10" fill="#9a4e16"/>
  <rect x="358" y="187" width="248" height="9" fill="#9a4e16"/>
  <circle cx="372" cy="187" r="2.4" fill="#e6b483"/>
  <circle cx="380" cy="187" r="2.4" fill="#e6b483"/>
  <circle cx="388" cy="187" r="2.4" fill="#e6b483"/>
  <text x="402" y="191" font-size="9" fill="#ffe9cf">研究×学び アプリ</text>
  <text x="372" y="216" font-size="10" font-weight="700" fill="#9a4e16">CVデータベース</text>
  <circle cx="378" cy="230" r="3.5" fill="#c4632a"/>
  <rect x="388" y="226" width="106" height="7" rx="3" fill="#FBEDE2"/>
  <circle cx="378" cy="244" r="3.5" fill="#d9a878"/>
  <rect x="388" y="240" width="134" height="7" rx="3" fill="#FBEDE2"/>
  <circle cx="378" cy="258" r="3.5" fill="#d9a878"/>
  <rect x="388" y="254" width="88" height="7" rx="3" fill="#FBEDE2"/>
  <rect x="372" y="266" width="222" height="18" rx="8" fill="#c4632a"/>
  <text x="381" y="279" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="482" y="306" font-size="11" fill="#fff3e0" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="482" y="325" font-size="12" font-weight="700" fill="#fff3e0" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="358" y="338" width="248" height="56" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="482" y="359" font-size="11" fill="#fff3e0" text-anchor="middle">「真に必要とする個人」へ、情報・支援・</text>
  <text x="482" y="376" font-size="11" fill="#fff3e0" text-anchor="middle">機会をダイレクトに投下する</text>
  <text x="482" y="392" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <text x="482" y="426" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する基盤</text>
  <path d="M620 200 C648 200 650 250 680 266" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <path d="M620 282 C648 282 650 282 680 282" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <path d="M620 368 C648 368 650 318 680 300" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <text x="666" y="110" font-size="12" font-weight="700" fill="#9a4e16">AI×接続基盤で変わること（A–D）</text>
  <rect x="664" y="116" width="346" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="116" width="6" height="78" rx="3" fill="#dd8a1e"/>
  <circle cx="690" cy="138" r="11" fill="#FBEDE2"/>
  <text x="690" y="143" font-size="13" font-weight="700" fill="#9a4e16" text-anchor="middle">A</text>
  <text x="710" y="143" font-size="12.5" font-weight="700" fill="#9a4e16">指導負担を軽減し研究時間を確保</text>
  <text x="680" y="165" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="680" y="181" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="664" y="202" width="346" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="202" width="6" height="78" rx="3" fill="#dd8a1e"/>
  <circle cx="690" cy="224" r="11" fill="#FBEDE2"/>
  <text x="690" y="229" font-size="13" font-weight="700" fill="#9a4e16" text-anchor="middle">B</text>
  <text x="710" y="229" font-size="12.5" font-weight="700" fill="#9a4e16">院生一人ひとりの研究力を向上</text>
  <text x="680" y="251" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="680" y="267" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="664" y="288" width="346" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="288" width="6" height="78" rx="3" fill="#dd8a1e"/>
  <circle cx="690" cy="310" r="11" fill="#FBEDE2"/>
  <text x="690" y="315" font-size="13" font-weight="700" fill="#9a4e16" text-anchor="middle">C</text>
  <text x="710" y="315" font-size="12.5" font-weight="700" fill="#9a4e16">個別最適な情報を直に届ける</text>
  <text x="680" y="337" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="680" y="353" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="664" y="374" width="346" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="374" width="6" height="78" rx="3" fill="#dd8a1e"/>
  <circle cx="690" cy="396" r="11" fill="#FBEDE2"/>
  <text x="690" y="401" font-size="13" font-weight="700" fill="#9a4e16" text-anchor="middle">D</text>
  <text x="710" y="401" font-size="12.5" font-weight="700" fill="#9a4e16">支援者の労力を削減し効率化</text>
  <text x="680" y="423" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="680" y="439" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1010 150 C1030 150 1034 196 1054 196" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 240 C1030 240 1034 240 1054 234" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 326 C1030 326 1034 300 1054 290" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 412 C1030 412 1034 350 1054 340" stroke="#c4632a" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <rect x="1056" y="116" width="184" height="336" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1086" cy="148" r="14" fill="#ffffff"/>
  <g transform="translate(1086,148)" stroke="#dd8a1e" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1110" y="154" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1074" y="188" font-size="11.5" fill="#fff6e6">研究者と支援者が躍動する</text>
  <text x="1074" y="205" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1078" cy="234" r="3" fill="#ffffff"/>
  <text x="1090" y="238" font-size="12.5" fill="#ffffff">中退率 ↓</text>
  <circle cx="1078" cy="262" r="3" fill="#ffffff"/>
  <text x="1090" y="266" font-size="12.5" fill="#ffffff">標準年限内の修了率 ↑</text>
  <circle cx="1078" cy="290" r="3" fill="#ffffff"/>
  <text x="1090" y="294" font-size="12.5" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1078" cy="318" r="3" fill="#ffffff"/>
  <text x="1090" y="322" font-size="12.5" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1078" cy="346" r="3" fill="#ffffff"/>
  <text x="1090" y="350" font-size="12.5" fill="#ffffff">経営判断の高度化</text>
  <rect x="1074" y="372" width="150" height="64" rx="10" fill="#ffffff" opacity="0.18"/>
  <text x="1149" y="393" font-size="10.5" fill="#fff6e6" text-anchor="middle">学内すべての成果が</text>
  <text x="1149" y="409" font-size="10.5" fill="#fff6e6" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1149" y="428" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <path d="M40 462 L1206 462 L1240 481 L1206 500 L40 500 Z" fill="url(#gHdr)"/>
  <text x="56" y="486" font-size="13" font-weight="700" fill="#ffffff">システムでなく〈データ〉を接続基盤でつなぐ ― 段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <rect x="40" y="512" width="316" height="170" rx="14" fill="url(#gKpi)" filter="url(#sh)"/>
  <rect x="40" y="512" width="316" height="28" rx="14" fill="#c4632a"/>
  <rect x="40" y="526" width="316" height="14" fill="#c4632a"/>
  <text x="198" y="531" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI ― 主役：研究時間の創出（試算）</text>
  <text x="198" y="615" font-size="78" font-weight="700" fill="#c4632a" text-anchor="middle">＋3<tspan font-size="30" font-weight="700">h</tspan></text>
  <text x="198" y="648" font-size="14" font-weight="700" fill="#9a4e16" text-anchor="middle">教員1人あたり／週の研究時間</text>
  <text x="198" y="668" font-size="11" fill="#8a7a5a" text-anchor="middle">＊導入後の試算イメージ（想定値）</text>
  <text x="378" y="532" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="376" y="538" width="864" height="46" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="376" y="538" width="280" height="46" rx="10" fill="#ffffff"/>
  <text x="394" y="571" font-size="26" font-weight="700" fill="#c4632a">−50<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="478" y="558" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="478" y="573" font-size="10.5" fill="#555">窓口業務（RAG・試算）</text>
  <line x1="664" y1="548" x2="664" y2="574" stroke="#eadbc4" stroke-width="1.4"/>
  <text x="684" y="571" font-size="26" font-weight="700" fill="#c4632a">＋20<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="778" y="558" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="778" y="573" font-size="10.5" fill="#555">（自己効力感・試算）</text>
  <line x1="952" y1="548" x2="952" y2="574" stroke="#eadbc4" stroke-width="1.4"/>
  <text x="972" y="571" font-size="26" font-weight="700" fill="#c4632a">＋5<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="1058" y="558" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1058" y="573" font-size="10.5" fill="#555">（中退率↓・試算）</text>
  <path d="M376 600 L1206 600 L1240 641 L1206 682 L376 682 Z" fill="url(#gHdr)"/>
  <text x="800" y="647" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-70。骨格=バックボーン＋中央ヒーロー結節点(Nexus)。0層=左下→右上へ昇る青リボン/シェブロン＋ネットワーク。配色=橙/黄の温かみ(アクセント1焦点)。balanced密度。左=課題A-D流入→中央Nexus→右=打ち手A-D(1:1対応)→GOALバースト。kpiBand＋巨大数字KPI(＋3h/週)を主役に、全KPIに「想定/試算」を明示。 -->
