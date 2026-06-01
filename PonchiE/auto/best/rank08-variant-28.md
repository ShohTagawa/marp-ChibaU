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
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#43be74"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3f7fc4"/><stop offset="1" stop-color="#2a5d96"/></linearGradient>
    <linearGradient id="gBackbone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="0.42" stop-color="#27a07c"/><stop offset="0.78" stop-color="#1f8f6e"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#43be74" stop-opacity="0.5"/><stop offset="1" stop-color="#43be74" stop-opacity="0"/></radialGradient>
    <radialGradient id="nexusGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.42"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f6fafe"/>
  <rect x="0" y="88" width="1280" height="502" fill="#eef5fb" opacity="0.6"/>
  <g opacity="0.13" fill="#3f7fc4"><circle cx="150" cy="150" r="3"/><circle cx="230" cy="200" r="2.6"/><circle cx="120" cy="320" r="2.6"/><circle cx="360" cy="135" r="2.6"/><circle cx="520" cy="170" r="3"/><circle cx="660" cy="130" r="2.6"/><circle cx="780" cy="180" r="2.6"/><circle cx="920" cy="150" r="3"/><circle cx="1060" cy="200" r="2.6"/><circle cx="1180" cy="160" r="2.6"/><circle cx="980" cy="320" r="2.6"/><circle cx="1140" cy="300" r="2.6"/><circle cx="700" cy="540" r="2.6"/><circle cx="430" cy="540" r="2.6"/><circle cx="240" cy="470" r="2.6"/><circle cx="1080" cy="490" r="2.6"/><circle cx="560" cy="320" r="2.6"/></g>
  <g opacity="0.10" stroke="#3f7fc4" stroke-width="1" fill="none"><path d="M150 150 L230 200"/><path d="M230 200 L360 135"/><path d="M360 135 L520 170"/><path d="M520 170 L660 130"/><path d="M660 130 L780 180"/><path d="M780 180 L920 150"/><path d="M920 150 L1060 200"/><path d="M1060 200 L1180 160"/><path d="M120 320 L240 470"/><path d="M980 320 L1140 300"/><path d="M560 320 L700 540"/><path d="M430 540 L700 540"/></g>
  <circle cx="495" cy="300" r="190" fill="url(#nexusGlow)"/>
  <circle cx="1140" cy="270" r="170" fill="url(#goalGlow)"/>
  <path d="M40 560 L1240 560 L1240 596 L40 596 Z" fill="url(#gBackbone)" opacity="0.16"/>
  <path d="M300 300 C340 300 340 300 348 300" stroke="url(#gBackbone)" stroke-width="18" fill="none" opacity="0.22"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">Nexus University 構想 ― 〈研究×学び〉を接続する全学基盤</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="42" y="110" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="116" width="256" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="138" r="11" fill="#FBEDE2"/>
  <text x="66" y="143" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="143" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="166" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="181" font-size="10" fill="#666">研究費申請・評価資料・学振添削・全員留学</text>
  <text x="56" y="196" font-size="10" fill="#666">で指導が限界に達している</text>
  <rect x="40" y="210" width="256" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="210" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="232" r="11" fill="#FBEDE2"/>
  <text x="66" y="237" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="237" font-size="12.5" font-weight="700" fill="#1f2937">人材育成が多様化・高度化</text>
  <text x="56" y="260" font-size="10" fill="#666">成功モデルが多様化し求める水準も上昇</text>
  <text x="56" y="275" font-size="10" fill="#666">個別の能力育成と資源の最適投下が</text>
  <text x="56" y="290" font-size="10" fill="#666">必須になっている</text>
  <rect x="40" y="304" width="256" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="304" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="326" r="11" fill="#FBEDE2"/>
  <text x="66" y="331" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="331" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="354" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="369" font-size="10" fill="#666">真に必要とする個人に情報が</text>
  <text x="56" y="384" font-size="10" fill="#666">直接届かない</text>
  <rect x="40" y="398" width="256" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="398" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="420" r="11" fill="#FBEDE2"/>
  <text x="66" y="425" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="425" font-size="12.5" font-weight="700" fill="#1f2937">実践知が蓄積・活用されない</text>
  <text x="56" y="448" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="463" font-size="10" fill="#666">システム乱立・データ分散、異動で</text>
  <text x="56" y="478" font-size="10" fill="#666">ノウハウがゼロリセット</text>
  <path d="M298 159 C320 159 322 286 346 290" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M298 253 C320 253 322 290 346 296" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M298 347 C320 347 322 312 346 306" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M298 441 C320 441 322 320 346 314" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <rect x="348" y="116" width="298" height="368" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="497" cy="300" rx="140" ry="140"/><ellipse cx="497" cy="300" rx="55" ry="140"/><ellipse cx="497" cy="300" rx="140" ry="55"/></g>
  <circle cx="378" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(378,148)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="400" y="145" font-size="13" font-weight="700" fill="#bfe9da">接続基盤（Nexus）＝結節点</text>
  <text x="400" y="163" font-size="11" fill="#d8efe6">分散を「接続」する基盤 ＋ AI伴走アプリ</text>
  <rect x="364" y="176" width="266" height="120" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="364" y="176" width="266" height="20" rx="10" fill="#125642"/>
  <rect x="364" y="186" width="266" height="10" fill="#125642"/>
  <circle cx="378" cy="186" r="2.4" fill="#7fb8a6"/>
  <circle cx="386" cy="186" r="2.4" fill="#7fb8a6"/>
  <circle cx="394" cy="186" r="2.4" fill="#7fb8a6"/>
  <text x="410" y="190" font-size="10" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="364" y="196" width="54" height="100" fill="#eaf4ef"/>
  <rect x="372" y="208" width="38" height="8" rx="3" fill="#1A7A5E"/>
  <rect x="372" y="222" width="38" height="8" rx="3" fill="#cfe0d8"/>
  <rect x="372" y="236" width="38" height="8" rx="3" fill="#cfe0d8"/>
  <circle cx="391" cy="266" r="8" fill="#bfe0d4"/>
  <path d="M385 278 A8 8 0 0 1 397 278" fill="#bfe0d4"/>
  <text x="430" y="216" font-size="10" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="436" cy="230" r="3.5" fill="#1A7A5E"/>
  <rect x="445" y="226" width="108" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="244" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="240" width="138" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="258" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="254" width="90" height="7" rx="3" fill="#E4F2EC"/>
  <rect x="430" y="270" width="192" height="18" rx="8" fill="#1A7A5E"/>
  <text x="439" y="283" font-size="10" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="497" y="320" font-size="11" fill="#eaf6f0" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="497" y="339" font-size="12" font-weight="700" fill="#bfe9da" text-anchor="middle">＝ CV-DB ＋ AI伴走 ＋ RAG</text>
  <rect x="364" y="352" width="266" height="64" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="497" y="373" font-size="11" fill="#eaf6f0" text-anchor="middle">「真に必要とする個人」へ情報・支援・</text>
  <text x="497" y="390" font-size="11" fill="#eaf6f0" text-anchor="middle">機会をダイレクトに投下する</text>
  <text x="497" y="408" font-size="11" font-weight="700" fill="#bfe9da" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <rect x="364" y="424" width="266" height="48" rx="10" fill="url(#gBlue)" opacity="0.85"/>
  <text x="497" y="444" font-size="10.5" fill="#eaf3fb" text-anchor="middle">副次：許諾済データを学内・行政・企業で</text>
  <text x="497" y="460" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">共有・利活用／統合分析で経営判断を迅速化</text>
  <text x="668" y="110" font-size="12" font-weight="700" fill="#16624b">AI×接続基盤で変わること（A–D）</text>
  <rect x="664" y="116" width="346" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="116" width="6" height="86" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="138" r="11" fill="#E4F2EC"/>
  <text x="690" y="143" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="710" y="143" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="680" y="166" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="680" y="181" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <text x="680" y="196" font-size="10" fill="#1A7A5E">［課題A：業務負荷の急増に対応］</text>
  <rect x="664" y="210" width="346" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="210" width="6" height="86" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="232" r="11" fill="#E4F2EC"/>
  <text x="690" y="237" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="710" y="237" font-size="12.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="680" y="260" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="680" y="275" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <text x="680" y="290" font-size="10" fill="#1A7A5E">［課題B：多様化・高度化に対応］</text>
  <rect x="664" y="304" width="346" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="304" width="6" height="86" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="326" r="11" fill="#E4F2EC"/>
  <text x="690" y="331" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="710" y="331" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="680" y="354" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="680" y="369" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <text x="680" y="384" font-size="10" fill="#1A7A5E">［課題C：ミッシングリンクを解消］</text>
  <rect x="664" y="398" width="346" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="398" width="6" height="86" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="420" r="11" fill="#E4F2EC"/>
  <text x="690" y="425" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="710" y="425" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="680" y="448" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="680" y="463" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <text x="680" y="478" font-size="10" fill="#1A7A5E">［課題D：実践知の死蔵を解消］</text>
  <path d="M630 300 C648 300 648 290 662 290" stroke="#1A7A5E" stroke-width="2.6" fill="none" opacity="0.85" marker-end="url(#mA)"/>
  <path d="M1010 159 C1028 159 1032 250 1050 256" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 253 C1028 253 1032 268 1050 270" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 347 C1028 347 1032 296 1050 290" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 441 C1028 441 1032 320 1050 308" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <rect x="1052" y="116" width="188" height="368" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2"><path d="M1146 150 L1150 138 L1154 150 L1166 154 L1154 158 L1150 170 L1146 158 L1134 154 Z"/></g>
  <circle cx="1078" cy="150" r="14" fill="#ffffff"/>
  <g transform="translate(1078,150)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1102" y="156" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1068" y="190" font-size="11.5" fill="#dff1e7">研究者と支援者が躍動する</text>
  <text x="1068" y="207" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1072" cy="236" r="3" fill="#bff0d3"/>
  <text x="1084" y="240" font-size="12" fill="#ffffff">教員の研究時間 ↑</text>
  <circle cx="1072" cy="264" r="3" fill="#bff0d3"/>
  <text x="1084" y="268" font-size="12" fill="#ffffff">院生の研究力・国際性 ↑</text>
  <circle cx="1072" cy="292" r="3" fill="#bff0d3"/>
  <text x="1084" y="296" font-size="12" fill="#ffffff">修了率 ↑ ・中退率 ↓</text>
  <circle cx="1072" cy="320" r="3" fill="#bff0d3"/>
  <text x="1084" y="324" font-size="12" fill="#ffffff">経営判断の高度化</text>
  <circle cx="1072" cy="348" r="3" fill="#bff0d3"/>
  <text x="1084" y="352" font-size="12" fill="#ffffff">学外連携・アプリ外販</text>
  <rect x="1068" y="372" width="156" height="100" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1146" y="396" font-size="10.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="1146" y="412" font-size="10.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1146" y="434" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="1146" y="458" font-size="10" fill="#dff1e7" text-anchor="middle">Lv1アプリ→Lv2全学→Lv3学外</text>
  <text x="42" y="538" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ・あくまで目標値）</text>
  <rect x="40" y="544" width="285" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="544" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="58" y="586" font-size="30" font-weight="700" fill="#16624b">＋3<tspan font-size="13" font-weight="400">h/週</tspan></text>
  <text x="158" y="568" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="158" y="584" font-size="10.5" fill="#555">研究時間を確保</text>
  <text x="158" y="598" font-size="10" fill="#999">※想定/試算</text>
  <rect x="345" y="544" width="285" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="544" width="5" height="58" rx="2.5" fill="url(#gWarn)"/>
  <text x="363" y="586" font-size="30" font-weight="700" fill="#c4632a">−50<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="468" y="568" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="468" y="584" font-size="10.5" fill="#555">窓口業務（RAG）</text>
  <text x="468" y="598" font-size="10" fill="#999">※想定/試算</text>
  <rect x="650" y="544" width="285" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="544" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="668" y="586" font-size="30" font-weight="700" fill="#16624b">＋20<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="780" y="568" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="780" y="584" font-size="10.5" fill="#555">（自己効力感）</text>
  <text x="780" y="598" font-size="10" fill="#999">※想定/試算</text>
  <rect x="955" y="544" width="285" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="544" width="5" height="58" rx="2.5" fill="url(#gGoal)"/>
  <text x="973" y="586" font-size="30" font-weight="700" fill="#1c6e44">＋5<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="1078" y="568" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1078" y="584" font-size="10.5" fill="#555">（中退率 ↓）</text>
  <text x="1078" y="598" font-size="10" fill="#999">※想定/試算</text>
  <path d="M40 614 L1206 614 L1240 648 L1206 682 L40 682 Z" fill="url(#gAccH)"/>
  <text x="623" y="653" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">システムでなく〈データ〉を接続基盤でつなぐ ― 研究×学びがつながり躍動する Nexus University へ</text>
  <text x="623" y="673" font-size="11" fill="#cdeae0" text-anchor="middle">課題A–Dと打ち手A–Dは1:1で対応／KPIはすべて想定・試算値</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-28：骨格=バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D流入(橙)→中央=接続基盤Nexus(グロー・アプリ画像)→右=AI打ち手A-D(緑、課題1:1明示)→右端GOALバースト(緑・goalBurst)。0層=世界地図風ドット＆都市結線(青)。多色リッチ(teal＋橙＋緑GOAL＋青背景)。kpiBand=巨大数字KPIを主役(全て想定/試算明示)。viewBox 1280x720・空行なし。 -->
