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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15324f"/><stop offset="1" stop-color="#0c2238"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa6a0"/><stop offset="1" stop-color="#0d6f72"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d4e79"/><stop offset="1" stop-color="#0e2c47"/></linearGradient>
    <linearGradient id="gBone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfe6ec"/><stop offset="1" stop-color="#8fd0cf"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#17b3ac"/><stop offset="1" stop-color="#0c6b6e"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f6f99"/><stop offset="1" stop-color="#274c6e"/></linearGradient>
    <linearGradient id="gStage" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1aa6a0"/><stop offset="0.5" stop-color="#15324f"/><stop offset="1" stop-color="#0c2238"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#17b3ac" stop-opacity="0.5"/><stop offset="1" stop-color="#17b3ac" stop-opacity="0"/></radialGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1aa6a0" stop-opacity="0.42"/><stop offset="1" stop-color="#1aa6a0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2238" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2238" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#3f6f99"/></marker>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0d6f72"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="720" fill="#f6fafb"/>
  <g opacity="0.05" stroke="#15324f" stroke-width="1" fill="none"><path d="M150 250 L360 200 L560 300 L760 230 L980 320 L1150 260"/><path d="M150 430 L360 480 L560 400 L760 470 L980 380 L1150 440"/></g>
  <g opacity="0.07" fill="#1aa6a0"><circle cx="360" cy="200" r="3"/><circle cx="560" cy="300" r="3"/><circle cx="760" cy="230" r="3"/><circle cx="980" cy="320" r="3"/><circle cx="360" cy="480" r="3"/><circle cx="760" cy="470" r="3"/></g>
  <path d="M300 360 C520 360 620 360 980 360" stroke="url(#gBone)" stroke-width="120" fill="none" opacity="0.30" stroke-linecap="round"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想の全体像</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#e2f1f2"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#0d4f63">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="588" cy="328" r="180" fill="url(#hubGlow)"/>
  <text x="40" y="110" font-size="12" font-weight="700" fill="#3f6f99">大学が抱える課題（A–D）が流入</text>
  <rect x="36" y="116" width="248" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="116" width="6" height="82" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="138" r="11" fill="#e7eef6"/>
  <text x="62" y="143" font-size="13" font-weight="700" fill="#274c6e" text-anchor="middle">A</text>
  <text x="82" y="143" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="52" y="166" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="52" y="182" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="36" y="206" width="248" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="206" width="6" height="82" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="228" r="11" fill="#e7eef6"/>
  <text x="62" y="233" font-size="13" font-weight="700" fill="#274c6e" text-anchor="middle">B</text>
  <text x="82" y="233" font-size="12.5" font-weight="700" fill="#1f2937">人材育成が多様化・高度化</text>
  <text x="52" y="256" font-size="10" fill="#666">求める水準が上昇、成功モデルも多様化</text>
  <text x="52" y="272" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="36" y="296" width="248" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="296" width="6" height="82" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="318" r="11" fill="#e7eef6"/>
  <text x="62" y="323" font-size="13" font-weight="700" fill="#274c6e" text-anchor="middle">C</text>
  <text x="82" y="323" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="52" y="346" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="52" y="362" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="36" y="386" width="248" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="386" width="6" height="82" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="408" r="11" fill="#e7eef6"/>
  <text x="62" y="413" font-size="13" font-weight="700" fill="#274c6e" text-anchor="middle">D</text>
  <text x="82" y="413" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="52" y="436" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="52" y="452" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M288 157 C330 157 360 250 404 268" stroke="#3f6f99" stroke-width="9" fill="none" opacity="0.5" marker-end="url(#mW)"/>
  <path d="M288 247 C330 247 360 290 404 296" stroke="#3f6f99" stroke-width="9" fill="none" opacity="0.5" marker-end="url(#mW)"/>
  <path d="M288 337 C330 337 360 330 404 326" stroke="#3f6f99" stroke-width="9" fill="none" opacity="0.5" marker-end="url(#mW)"/>
  <path d="M288 427 C330 427 360 370 404 356" stroke="#3f6f99" stroke-width="9" fill="none" opacity="0.5" marker-end="url(#mW)"/>
  <rect x="406" y="116" width="300" height="352" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#7fd6d2" stroke-width="1.2" fill="none"><ellipse cx="556" cy="292" rx="138" ry="138"/><ellipse cx="556" cy="292" rx="54" ry="138"/><ellipse cx="556" cy="292" rx="138" ry="54"/></g>
  <circle cx="434" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(434,148)" stroke="#0d6f72" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="456" y="145" font-size="13" font-weight="700" fill="#8fe3df">接続基盤（Nexus）</text>
  <text x="456" y="163" font-size="11" fill="#cfeeed">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="420" y="178" width="272" height="114" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="420" y="178" width="272" height="20" rx="10" fill="#0d6f72"/>
  <rect x="420" y="188" width="272" height="10" fill="#0d6f72"/>
  <circle cx="434" cy="188" r="2.4" fill="#7fd6d2"/>
  <circle cx="442" cy="188" r="2.4" fill="#7fd6d2"/>
  <circle cx="450" cy="188" r="2.4" fill="#7fd6d2"/>
  <text x="466" y="192" font-size="9.5" fill="#cfeeed">研究×学び アプリ</text>
  <rect x="420" y="198" width="56" height="94" fill="#e7f4f4"/>
  <rect x="428" y="210" width="40" height="8" rx="3" fill="#1aa6a0"/>
  <rect x="428" y="224" width="40" height="8" rx="3" fill="#cfe4e3"/>
  <rect x="428" y="238" width="40" height="8" rx="3" fill="#cfe4e3"/>
  <circle cx="448" cy="266" r="8" fill="#b9e2e0"/>
  <path d="M442 278 A8 8 0 0 1 454 278" fill="#b9e2e0"/>
  <text x="488" y="218" font-size="10" font-weight="700" fill="#0d4f63">CVデータベース</text>
  <circle cx="494" cy="232" r="3.5" fill="#1aa6a0"/>
  <rect x="503" y="228" width="110" height="7" rx="3" fill="#e2f1f2"/>
  <circle cx="494" cy="246" r="3.5" fill="#9fcecc"/>
  <rect x="503" y="242" width="140" height="7" rx="3" fill="#e2f1f2"/>
  <circle cx="494" cy="260" r="3.5" fill="#9fcecc"/>
  <rect x="503" y="256" width="92" height="7" rx="3" fill="#e2f1f2"/>
  <rect x="488" y="270" width="196" height="18" rx="8" fill="#1aa6a0"/>
  <text x="497" y="283" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="556" y="316" font-size="11" fill="#e7f7f6" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="556" y="336" font-size="12" font-weight="700" fill="#8fe3df" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="420" y="350" width="272" height="60" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="556" y="372" font-size="11" fill="#e7f7f6" text-anchor="middle">「真に必要とする個人」へ、情報・支援・</text>
  <text x="556" y="389" font-size="11" fill="#e7f7f6" text-anchor="middle">機会をダイレクトに投下する</text>
  <text x="556" y="406" font-size="11" font-weight="700" fill="#8fe3df" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <text x="556" y="436" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する基盤</text>
  <path d="M706 268 C744 268 760 250 776 250" stroke="#0d6f72" stroke-width="9" fill="none" opacity="0.55" marker-end="url(#mT)"/>
  <path d="M706 296 C744 296 760 296 776 296" stroke="#0d6f72" stroke-width="9" fill="none" opacity="0.55" marker-end="url(#mT)"/>
  <path d="M706 326 C744 326 760 342 776 342" stroke="#0d6f72" stroke-width="9" fill="none" opacity="0.55" marker-end="url(#mT)"/>
  <path d="M706 356 C744 356 760 388 776 388" stroke="#0d6f72" stroke-width="9" fill="none" opacity="0.55" marker-end="url(#mT)"/>
  <text x="780" y="110" font-size="12" font-weight="700" fill="#0d4f63">AI×接続基盤で変わること（A–D）</text>
  <rect x="778" y="116" width="300" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="778" y="116" width="6" height="82" rx="3" fill="url(#gTeal)"/>
  <circle cx="804" cy="138" r="11" fill="#e2f1f2"/>
  <text x="804" y="143" font-size="13" font-weight="700" fill="#0d4f63" text-anchor="middle">A</text>
  <text x="824" y="143" font-size="12.5" font-weight="700" fill="#0d4f63">指導負担を軽減し研究時間を確保</text>
  <text x="794" y="166" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="794" y="182" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="778" y="206" width="300" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="778" y="206" width="6" height="82" rx="3" fill="url(#gTeal)"/>
  <circle cx="804" cy="228" r="11" fill="#e2f1f2"/>
  <text x="804" y="233" font-size="13" font-weight="700" fill="#0d4f63" text-anchor="middle">B</text>
  <text x="824" y="233" font-size="12.5" font-weight="700" fill="#0d4f63">院生一人ひとりの研究力を向上</text>
  <text x="794" y="256" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="794" y="272" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="778" y="296" width="300" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="778" y="296" width="6" height="82" rx="3" fill="url(#gTeal)"/>
  <circle cx="804" cy="318" r="11" fill="#e2f1f2"/>
  <text x="804" y="323" font-size="13" font-weight="700" fill="#0d4f63" text-anchor="middle">C</text>
  <text x="824" y="323" font-size="12.5" font-weight="700" fill="#0d4f63">個別最適な情報を直に届ける</text>
  <text x="794" y="346" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="794" y="362" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="778" y="386" width="300" height="82" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="778" y="386" width="6" height="82" rx="3" fill="url(#gTeal)"/>
  <circle cx="804" cy="408" r="11" fill="#e2f1f2"/>
  <text x="804" y="413" font-size="13" font-weight="700" fill="#0d4f63" text-anchor="middle">D</text>
  <text x="824" y="413" font-size="12.5" font-weight="700" fill="#0d4f63">支援者の労力を削減し効率化</text>
  <text x="794" y="436" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="794" y="452" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1078 157 C1098 157 1102 230 1120 240" stroke="#0c6b6e" stroke-width="8" fill="none" opacity="0.6" marker-end="url(#mT)"/>
  <path d="M1078 247 C1098 247 1102 270 1120 274" stroke="#0c6b6e" stroke-width="8" fill="none" opacity="0.6" marker-end="url(#mT)"/>
  <path d="M1078 337 C1098 337 1102 310 1120 306" stroke="#0c6b6e" stroke-width="8" fill="none" opacity="0.6" marker-end="url(#mT)"/>
  <path d="M1078 427 C1098 427 1102 350 1120 340" stroke="#0c6b6e" stroke-width="8" fill="none" opacity="0.6" marker-end="url(#mT)"/>
  <circle cx="1186" cy="292" r="120" fill="url(#goalGlow)"/>
  <rect x="1122" y="116" width="122" height="352" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1150" cy="148" r="14" fill="#ffffff"/>
  <g transform="translate(1150,148)" stroke="#0c6b6e" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1172" y="154" font-size="18" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1138" y="186" font-size="10.5" fill="#dff5f4">研究者と支援者が</text>
  <text x="1138" y="201" font-size="10.5" font-weight="700" fill="#ffffff">躍動する大学</text>
  <circle cx="1140" cy="228" r="3" fill="#b9f0ec"/>
  <text x="1150" y="232" font-size="11" fill="#ffffff">中退率 ↓</text>
  <circle cx="1140" cy="252" r="3" fill="#b9f0ec"/>
  <text x="1150" y="256" font-size="11" fill="#ffffff">修了率 ↑</text>
  <circle cx="1140" cy="276" r="3" fill="#b9f0ec"/>
  <text x="1150" y="280" font-size="11" fill="#ffffff">研究力 ↑</text>
  <circle cx="1140" cy="300" r="3" fill="#b9f0ec"/>
  <text x="1150" y="304" font-size="11" fill="#ffffff">国際性 ↑</text>
  <circle cx="1140" cy="324" r="3" fill="#b9f0ec"/>
  <text x="1150" y="328" font-size="11" fill="#ffffff">経営判断 ↑</text>
  <rect x="1136" y="350" width="96" height="60" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1184" y="372" font-size="10" fill="#eafcfb" text-anchor="middle">許諾済データの</text>
  <text x="1184" y="386" font-size="10" fill="#eafcfb" text-anchor="middle">共同研究・外販</text>
  <text x="1184" y="403" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="556" y="460" font-size="9.5" fill="#cfeeed" text-anchor="middle" opacity="0.9">システムでなく〈データ〉を接続基盤でつなぐ</text>
  <path d="M36 484 L1206 484 L1240 506 L1206 528 L36 528 Z" fill="url(#gStage)"/>
  <text x="52" y="500" font-size="11" font-weight="700" fill="#cfeeed">段階展開</text>
  <circle cx="150" cy="506" r="9" fill="#ffffff"/>
  <text x="150" y="510" font-size="11" font-weight="700" fill="#0d6f72" text-anchor="middle">1</text>
  <text x="168" y="510" font-size="12.5" font-weight="700" fill="#ffffff">アプリ（研究×学び）</text>
  <circle cx="540" cy="506" r="9" fill="#ffffff"/>
  <text x="540" y="510" font-size="11" font-weight="700" fill="#15324f" text-anchor="middle">2</text>
  <text x="558" y="510" font-size="12.5" font-weight="700" fill="#ffffff">全学データ接続基盤</text>
  <circle cx="900" cy="506" r="9" fill="#ffffff"/>
  <text x="900" y="510" font-size="11" font-weight="700" fill="#0c2238" text-anchor="middle">3</text>
  <text x="918" y="510" font-size="12.5" font-weight="700" fill="#ffffff">学外連携（行政・企業）</text>
  <text x="42" y="552" font-size="11" font-weight="700" fill="#8a8a8a">想定KPI（導入後の試算イメージ／確定値ではない）</text>
  <rect x="36" y="558" width="288" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="558" width="5" height="50" rx="2.5" fill="url(#gTeal)"/>
  <text x="54" y="592" font-size="22" font-weight="700" fill="#0d4f63">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="128" y="579" font-size="10.5" fill="#555">教員の研究時間</text>
  <text x="128" y="594" font-size="10.5" fill="#555">を確保（想定）</text>
  <rect x="334" y="558" width="288" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="334" y="558" width="5" height="50" rx="2.5" fill="url(#gTeal)"/>
  <text x="352" y="592" font-size="22" font-weight="700" fill="#0d4f63">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="426" y="579" font-size="10.5" fill="#555">定型問い合わせ</text>
  <text x="426" y="594" font-size="10.5" fill="#555">（RAG・試算）</text>
  <rect x="632" y="558" width="288" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="632" y="558" width="5" height="50" rx="2.5" fill="url(#gTeal)"/>
  <text x="650" y="592" font-size="22" font-weight="700" fill="#0d4f63">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="730" y="579" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="730" y="594" font-size="10.5" fill="#555">（想定）</text>
  <rect x="930" y="558" width="288" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="930" y="558" width="5" height="50" rx="2.5" fill="url(#gTeal)"/>
  <text x="948" y="592" font-size="22" font-weight="700" fill="#0d4f63">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1028" y="579" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1028" y="594" font-size="10.5" fill="#555">（中退率↓・試算）</text>
  <path d="M36 620 L1206 620 L1240 654 L1206 688 L36 688 Z" fill="url(#gHdr)"/>
  <text x="623" y="659" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-91：バックボーン＋中央ヒーロー結節点（Nexus）。左=課題A-D流入→中央=接続基盤(appMockup入り)→右=打ち手A-D→far-right goalBurst。配色ネイビー＋teal寒色クール／背景白基調・地は最小（薄ネットワーク線＋薄バックボーンリボン）。balanced密度。stageBand(Lv1→Lv3)＋想定KPI(試算明示)＋結論帯。A-D課題↔打ち手1:1対応。 -->
