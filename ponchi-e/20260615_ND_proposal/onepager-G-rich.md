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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.45"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <path d="M-40 720 L320 720 L840 300 L980 300 Z" fill="#9fc5e8" opacity="0.20"/>
  <path d="M-40 720 L200 720 L700 360 L820 360 Z" fill="#bcd6ef" opacity="0.22"/>
  <g opacity="0.07" stroke="#1A7A5E" stroke-width="1.2" fill="none"><ellipse cx="560" cy="410" rx="320" ry="320"/><ellipse cx="560" cy="410" rx="120" ry="320"/><ellipse cx="560" cy="410" rx="232" ry="320"/><ellipse cx="560" cy="410" rx="320" ry="120"/><ellipse cx="560" cy="410" rx="320" ry="232"/></g>
  <g opacity="0.10" fill="#1A7A5E"><circle cx="300" cy="250" r="3"/><circle cx="470" cy="180" r="3"/><circle cx="690" cy="300" r="3"/><circle cx="820" cy="470" r="3"/><circle cx="380" cy="520" r="3"/></g>
  <g opacity="0.10" stroke="#1A7A5E" stroke-width="1" fill="none"><path d="M300 250 L470 180"/><path d="M470 180 L690 300"/><path d="M690 300 L820 470"/><path d="M300 250 L380 520"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想の全体像</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="1150" cy="200" r="170" fill="url(#goalGlow)"/>
  <text x="42" y="110" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="116" width="252" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="80" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="138" r="11" fill="#FBEDE2"/>
  <text x="66" y="143" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="143" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="166" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="182" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="204" width="252" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="204" width="6" height="80" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="226" r="11" fill="#FBEDE2"/>
  <text x="66" y="231" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="231" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="254" font-size="10" fill="#666">求める水準が上昇、成功モデルも多様化</text>
  <text x="56" y="270" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="292" width="252" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="292" width="6" height="80" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="314" r="11" fill="#FBEDE2"/>
  <text x="66" y="319" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="319" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="342" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="358" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="380" width="252" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="380" width="6" height="80" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="402" r="11" fill="#FBEDE2"/>
  <text x="66" y="407" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="407" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="430" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="446" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M296 156 C322 156 322 200 346 200" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.8" marker-end="url(#mW)"/>
  <path d="M296 244 C322 244 322 262 346 270" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.8" marker-end="url(#mW)"/>
  <path d="M296 332 C322 332 322 320 346 312" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.8" marker-end="url(#mW)"/>
  <path d="M296 420 C322 420 322 380 346 372" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.8" marker-end="url(#mW)"/>
  <rect x="348" y="116" width="306" height="344" rx="18" fill="url(#gAcc)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="501" cy="288" rx="140" ry="140"/><ellipse cx="501" cy="288" rx="55" ry="140"/><ellipse cx="501" cy="288" rx="140" ry="55"/></g>
  <circle cx="378" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(378,148)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="400" y="145" font-size="12" font-weight="700" fill="#bfe9da">接続基盤（Nexus）</text>
  <text x="400" y="163" font-size="11.5" fill="#d8efe6">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="362" y="178" width="278" height="116" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="362" y="178" width="278" height="20" rx="10" fill="#125642"/>
  <rect x="362" y="188" width="278" height="10" fill="#125642"/>
  <circle cx="376" cy="188" r="2.4" fill="#7fb8a6"/>
  <circle cx="384" cy="188" r="2.4" fill="#7fb8a6"/>
  <circle cx="392" cy="188" r="2.4" fill="#7fb8a6"/>
  <text x="408" y="192" font-size="9.5" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="362" y="198" width="56" height="96" fill="#eaf4ef"/>
  <rect x="370" y="210" width="40" height="8" rx="3" fill="#1A7A5E"/>
  <rect x="370" y="224" width="40" height="8" rx="3" fill="#cfe0d8"/>
  <rect x="370" y="238" width="40" height="8" rx="3" fill="#cfe0d8"/>
  <circle cx="390" cy="268" r="8" fill="#bfe0d4"/>
  <path d="M384 280 A8 8 0 0 1 396 280" fill="#bfe0d4"/>
  <text x="430" y="218" font-size="10" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="436" cy="232" r="3.5" fill="#1A7A5E"/>
  <rect x="445" y="228" width="110" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="246" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="242" width="140" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="260" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="256" width="92" height="7" rx="3" fill="#E4F2EC"/>
  <rect x="430" y="272" width="196" height="18" rx="8" fill="#1A7A5E"/>
  <text x="439" y="285" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="501" y="318" font-size="11" fill="#eaf6f0" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="501" y="338" font-size="12" font-weight="700" fill="#bfe9da" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="362" y="350" width="278" height="58" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="501" y="371" font-size="11" fill="#eaf6f0" text-anchor="middle">「真に必要とする個人」へ、情報・支援・</text>
  <text x="501" y="388" font-size="11" fill="#eaf6f0" text-anchor="middle">機会をダイレクトに投下する</text>
  <text x="501" y="404" font-size="11" font-weight="700" fill="#bfe9da" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <text x="501" y="432" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する基盤</text>
  <text x="666" y="110" font-size="12" font-weight="700" fill="#16624b">AI×接続基盤で変わること（A–D）</text>
  <rect x="664" y="116" width="356" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="116" width="6" height="80" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="138" r="11" fill="#E4F2EC"/>
  <text x="690" y="143" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="710" y="143" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="680" y="166" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="680" y="182" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="664" y="204" width="356" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="204" width="6" height="80" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="226" r="11" fill="#E4F2EC"/>
  <text x="690" y="231" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="710" y="231" font-size="12.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="680" y="254" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="680" y="270" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="664" y="292" width="356" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="292" width="6" height="80" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="314" r="11" fill="#E4F2EC"/>
  <text x="690" y="319" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="710" y="319" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="680" y="342" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="680" y="358" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="664" y="380" width="356" height="80" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="380" width="6" height="80" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="402" r="11" fill="#E4F2EC"/>
  <text x="690" y="407" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="710" y="407" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="680" y="430" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="680" y="446" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1020 150 C1036 150 1040 196 1058 196" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 240 C1036 240 1040 240 1058 234" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 330 C1036 330 1040 300 1058 290" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 418 C1036 418 1040 350 1058 340" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <rect x="1060" y="116" width="180" height="344" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1090" cy="148" r="14" fill="#ffffff"/>
  <g transform="translate(1090,148)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1114" y="154" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1078" y="188" font-size="11.5" fill="#dff1e7">研究者と支援者が躍動する</text>
  <text x="1078" y="205" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1082" cy="234" r="3" fill="#bff0d3"/>
  <text x="1094" y="238" font-size="12.5" fill="#ffffff">中退率 ↓</text>
  <circle cx="1082" cy="262" r="3" fill="#bff0d3"/>
  <text x="1094" y="266" font-size="12.5" fill="#ffffff">標準年限内の修了率 ↑</text>
  <circle cx="1082" cy="290" r="3" fill="#bff0d3"/>
  <text x="1094" y="294" font-size="12.5" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1082" cy="318" r="3" fill="#bff0d3"/>
  <text x="1094" y="322" font-size="12.5" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1082" cy="346" r="3" fill="#bff0d3"/>
  <text x="1094" y="350" font-size="12.5" fill="#ffffff">経営判断の高度化</text>
  <rect x="1078" y="372" width="144" height="70" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1150" y="394" font-size="10.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="1150" y="410" font-size="10.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1150" y="429" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <path d="M40 470 L1206 470 L1240 491 L1206 512 L40 512 Z" fill="url(#gWarn)"/>
  <text x="56" y="496" font-size="13.5" font-weight="700" fill="#ffffff">システムでなく〈データ〉を接続基盤でつなぐ ― 段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <text x="42" y="536" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="40" y="542" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="542" width="5" height="50" rx="2.5" fill="url(#gAccH)"/>
  <text x="58" y="576" font-size="22" font-weight="700" fill="#16624b">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="132" y="563" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="132" y="578" font-size="10.5" fill="#555">研究時間を確保</text>
  <rect x="345" y="542" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="542" width="5" height="50" rx="2.5" fill="url(#gAccH)"/>
  <text x="363" y="576" font-size="22" font-weight="700" fill="#16624b">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="437" y="563" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="437" y="578" font-size="10.5" fill="#555">窓口業務（RAG）</text>
  <rect x="650" y="542" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="542" width="5" height="50" rx="2.5" fill="url(#gAccH)"/>
  <text x="668" y="576" font-size="22" font-weight="700" fill="#16624b">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="748" y="563" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="748" y="578" font-size="10.5" fill="#555">（自己効力感）</text>
  <rect x="955" y="542" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="542" width="5" height="50" rx="2.5" fill="url(#gAccH)"/>
  <text x="973" y="576" font-size="22" font-weight="700" fill="#16624b">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1047" y="563" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1047" y="578" font-size="10.5" fill="#555">（中退率↓）</text>
  <path d="M40 602 L1206 602 L1240 636 L1206 670 L40 670 Z" fill="url(#gAccH)"/>
  <text x="623" y="641" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) リッチ版G。背景グローブ＋ネットワーク(0層)／上昇リボン／中央=接続基盤Nexus(アプリ画像入り)／右=AI打ち手A-D→GOALバースト(緑・成果列挙)／橙の段階展開帯／想定KPI(試算)。千葉大ALC構想図の盛りを参照。 -->
