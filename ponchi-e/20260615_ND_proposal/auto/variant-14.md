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
    <linearGradient id="gH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9efe7" stop-opacity="0"/><stop offset="0.5" stop-color="#bfe3d6" stop-opacity="0.9"/><stop offset="1" stop-color="#a9d8c7" stop-opacity="0.5"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2fa572"/><stop offset="1" stop-color="#155c3c"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.55"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9c9" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe9c9" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="9" markerHeight="9" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <rect x="32" y="98" width="290" height="392" rx="18" fill="#FBEDE2" opacity="0.7" filter="url(#shS)"/>
  <rect x="956" y="98" width="292" height="392" rx="18" fill="#E4F2EC" opacity="0.85" filter="url(#shS)"/>
  <path d="M40 290 L1240 290 L1240 320 L40 320 Z" fill="url(#gBack)" opacity="0.35"/>
  <g opacity="0.06" stroke="#1A7A5E" stroke-width="1.2" fill="none"><ellipse cx="640" cy="300" rx="300" ry="300"/><ellipse cx="640" cy="300" rx="110" ry="300"/><ellipse cx="640" cy="300" rx="215" ry="300"/><ellipse cx="640" cy="300" rx="300" ry="110"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（役員ブリーフ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="46" y="116" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="122" width="270" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="122" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="146" r="11" fill="#FBEDE2"/>
  <text x="66" y="151" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="151" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="174" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="190" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="214" width="270" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="214" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="238" r="11" fill="#FBEDE2"/>
  <text x="66" y="243" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="243" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="266" font-size="10" fill="#666">求める水準が上昇、成功モデルも多様化</text>
  <text x="56" y="282" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="306" width="270" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="306" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="330" r="11" fill="#FBEDE2"/>
  <text x="66" y="335" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="335" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="358" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="374" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="398" width="270" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="398" width="6" height="86" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="422" r="11" fill="#FBEDE2"/>
  <text x="66" y="427" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="427" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="450" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="466" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M312 165 C336 165 340 250 366 270" stroke="#d2772f" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M312 257 C336 257 344 268 366 282" stroke="#d2772f" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M312 349 C336 349 344 332 366 312" stroke="#d2772f" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M312 441 C336 441 340 350 366 326" stroke="#d2772f" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <circle cx="498" cy="296" r="158" fill="url(#goalGlow)"/>
  <rect x="368" y="120" width="262" height="360" rx="20" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="499" cy="300" rx="120" ry="120"/><ellipse cx="499" cy="300" rx="46" ry="120"/><ellipse cx="499" cy="300" rx="120" ry="46"/></g>
  <circle cx="398" cy="150" r="13" fill="#ffffff"/>
  <g transform="translate(398,150)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="420" y="147" font-size="13" font-weight="700" fill="#ffffff">接続基盤（Nexus）</text>
  <text x="420" y="165" font-size="10.5" fill="#d8efe6">システムでなく〈データ〉を接続</text>
  <rect x="384" y="180" width="230" height="120" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="384" y="180" width="230" height="18" rx="10" fill="#125642"/>
  <rect x="384" y="189" width="230" height="9" fill="#125642"/>
  <text x="396" y="193" font-size="9" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="384" y="198" width="56" height="102" fill="#eaf4ef"/>
  <rect x="392" y="210" width="40" height="8" rx="3" fill="#1A7A5E"/>
  <rect x="392" y="224" width="40" height="8" rx="3" fill="#cfe0d8"/>
  <rect x="392" y="238" width="40" height="8" rx="3" fill="#cfe0d8"/>
  <circle cx="412" cy="272" r="8" fill="#bfe0d4"/>
  <path d="M406 284 A8 8 0 0 1 418 284" fill="#bfe0d4"/>
  <text x="452" y="218" font-size="10" font-weight="700" fill="#16624b">CVデータベース</text>
  <text x="452" y="232" font-size="8.5" fill="#7a8a84">学内外の学習・スキル・資格記録</text>
  <circle cx="456" cy="246" r="3.2" fill="#1A7A5E"/>
  <rect x="464" y="242" width="120" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="456" cy="259" r="3.2" fill="#9bc3b5"/>
  <rect x="464" y="255" width="138" height="7" rx="3" fill="#E4F2EC"/>
  <rect x="450" y="272" width="154" height="18" rx="8" fill="#1A7A5E"/>
  <text x="459" y="285" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="499" y="324" font-size="10.5" fill="#eaf6f0" text-anchor="middle">①学生の入力ニーズ ＋ ②全学の支援情報を突合</text>
  <text x="499" y="342" font-size="11.5" font-weight="700" fill="#bfe9da" text-anchor="middle">必要な個人へダイレクトに投下</text>
  <rect x="384" y="354" width="230" height="56" rx="10" fill="#ffffff" opacity="0.13"/>
  <text x="499" y="375" font-size="10.5" fill="#eaf6f0" text-anchor="middle">許諾済データを共有・利活用／統合分析で</text>
  <text x="499" y="391" font-size="10.5" fill="#eaf6f0" text-anchor="middle">経営判断を迅速化／アプリ外販も視野</text>
  <text x="499" y="407" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <path d="M632 270 C656 270 660 250 686 165" stroke="#1c6e44" stroke-width="6" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <path d="M632 282 C656 282 660 268 686 257" stroke="#1c6e44" stroke-width="6" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <path d="M632 312 C656 312 660 332 686 349" stroke="#1c6e44" stroke-width="6" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <path d="M632 326 C656 326 660 350 686 441" stroke="#1c6e44" stroke-width="6" fill="none" opacity="0.5" marker-end="url(#mG)"/>
  <text x="690" y="116" font-size="12" font-weight="700" fill="#16624b">AI×接続基盤で変わること（A–D）</text>
  <rect x="684" y="122" width="266" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="684" y="122" width="6" height="86" rx="3" fill="url(#gH)"/>
  <circle cx="710" cy="146" r="11" fill="#E4F2EC"/>
  <text x="710" y="151" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="730" y="151" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="700" y="174" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="700" y="190" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="684" y="214" width="266" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="684" y="214" width="6" height="86" rx="3" fill="url(#gH)"/>
  <circle cx="710" cy="238" r="11" fill="#E4F2EC"/>
  <text x="710" y="243" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="730" y="243" font-size="12.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="700" y="266" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="700" y="282" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="684" y="306" width="266" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="684" y="306" width="6" height="86" rx="3" fill="url(#gH)"/>
  <circle cx="710" cy="330" r="11" fill="#E4F2EC"/>
  <text x="710" y="335" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="730" y="335" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="700" y="358" font-size="10" fill="#444">①ニーズ ＋ ②全学の支援情報を突合し</text>
  <text x="700" y="374" font-size="10" fill="#444">真に必要な個人へダイレクト投下</text>
  <rect x="684" y="398" width="266" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="684" y="398" width="6" height="86" rx="3" fill="url(#gH)"/>
  <circle cx="710" cy="422" r="11" fill="#E4F2EC"/>
  <text x="710" y="427" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="730" y="427" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="700" y="450" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="700" y="466" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <circle cx="1102" cy="200" r="150" fill="url(#burst)"/>
  <g opacity="0.5" stroke="#ee9a4d" stroke-width="2"><path d="M1102 70 L1102 96"/><path d="M1232 200 L1206 200"/><path d="M1010 110 L1028 128"/><path d="M1194 110 L1176 128"/></g>
  <rect x="966" y="120" width="272" height="360" rx="20" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="996" cy="152" r="14" fill="#ffffff"/>
  <g transform="translate(996,152)" stroke="#155c3c" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1020" y="158" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="984" y="192" font-size="11.5" fill="#dff1e7">研究者と支援者が躍動する</text>
  <text x="984" y="209" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="988" cy="238" r="3" fill="#bff0d3"/>
  <text x="1000" y="242" font-size="12" fill="#ffffff">院生の研究力 ↑ ／ 修了率 ↑</text>
  <circle cx="988" cy="264" r="3" fill="#bff0d3"/>
  <text x="1000" y="268" font-size="12" fill="#ffffff">中退率 ↓ ／ 海外留学・国際性 ↑</text>
  <circle cx="988" cy="290" r="3" fill="#bff0d3"/>
  <text x="1000" y="294" font-size="12" fill="#ffffff">教員の研究時間を確保</text>
  <circle cx="988" cy="316" r="3" fill="#bff0d3"/>
  <text x="1000" y="320" font-size="12" fill="#ffffff">支援者の実践知が蓄積・再利用</text>
  <rect x="984" y="340" width="238" height="124" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1000" y="362" font-size="11" font-weight="700" fill="#ffffff">学外へ広がる連鎖</text>
  <circle cx="990" cy="382" r="3" fill="#bff0d3"/>
  <text x="1002" y="386" font-size="10.5" fill="#eafaf1">学内・行政・企業の共同研究</text>
  <circle cx="990" cy="404" r="3" fill="#bff0d3"/>
  <text x="1002" y="408" font-size="10.5" fill="#eafaf1">統合分析で経営判断を迅速化</text>
  <circle cx="990" cy="426" r="3" fill="#bff0d3"/>
  <text x="1002" y="430" font-size="10.5" fill="#eafaf1">アプリ外販で価値を学外展開</text>
  <text x="1103" y="454" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">→ 成果が連鎖する好循環へ</text>
  <text x="42" y="510" font-size="11" font-weight="700" fill="#16624b">受益者：誰のどのニーズが、導入後どう変わるか</text>
  <rect x="40" y="516" width="296" height="58" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="516" width="5" height="58" rx="2.5" fill="url(#gH)"/>
  <text x="56" y="536" font-size="11.5" font-weight="700" fill="#16624b">学生・院生</text>
  <text x="56" y="553" font-size="9.5" fill="#888">必要な支援に辿り着けない</text>
  <text x="56" y="567" font-size="9.5" fill="#16624b">→ 個別最適な情報・伴走が直に届く</text>
  <rect x="344" y="516" width="296" height="58" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="344" y="516" width="5" height="58" rx="2.5" fill="url(#gH)"/>
  <text x="360" y="536" font-size="11.5" font-weight="700" fill="#16624b">教員</text>
  <text x="360" y="553" font-size="9.5" fill="#888">指導・事務の負荷が増大</text>
  <text x="360" y="567" font-size="9.5" fill="#16624b">→ 負担軽減で研究時間を確保</text>
  <rect x="648" y="516" width="296" height="58" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="648" y="516" width="5" height="58" rx="2.5" fill="url(#gH)"/>
  <text x="664" y="536" font-size="11.5" font-weight="700" fill="#16624b">職員・支援者</text>
  <text x="664" y="553" font-size="9.5" fill="#888">反復業務・データ分散</text>
  <text x="664" y="567" font-size="9.5" fill="#16624b">→ RAG省力化・実践知を蓄積</text>
  <rect x="952" y="516" width="296" height="58" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="952" y="516" width="5" height="58" rx="2.5" fill="url(#gH)"/>
  <text x="968" y="536" font-size="11.5" font-weight="700" fill="#16624b">大学（経営）</text>
  <text x="968" y="553" font-size="9.5" fill="#888">判断材料が散在・遅延</text>
  <text x="968" y="567" font-size="9.5" fill="#16624b">→ 統合分析で迅速な経営判断</text>
  <text x="42" y="596" font-size="10.5" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ・あくまで想定値）</text>
  <rect x="40" y="600" width="296" height="46" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="600" width="5" height="46" rx="2.5" fill="url(#gH)"/>
  <text x="56" y="632" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="130" y="619" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="130" y="633" font-size="10" fill="#555">研究時間を確保</text>
  <rect x="344" y="600" width="296" height="46" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="344" y="600" width="5" height="46" rx="2.5" fill="url(#gH)"/>
  <text x="360" y="632" font-size="21" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="434" y="619" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="434" y="633" font-size="10" fill="#555">窓口業務（RAG）</text>
  <rect x="648" y="600" width="296" height="46" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="648" y="600" width="5" height="46" rx="2.5" fill="url(#gH)"/>
  <text x="664" y="632" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="744" y="619" font-size="10" fill="#555">院生の研究力</text>
  <text x="744" y="633" font-size="10" fill="#555">（自己効力感）</text>
  <rect x="952" y="600" width="296" height="46" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="952" y="600" width="5" height="46" rx="2.5" fill="url(#gH)"/>
  <text x="968" y="632" font-size="21" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1048" y="619" font-size="10" fill="#555">修了率の改善</text>
  <text x="1048" y="633" font-size="10" fill="#555">（中退率↓）</text>
  <path d="M40 660 L1206 660 L1240 690 L1206 720 L40 720 Z" fill="url(#gH)"/>
  <text x="623" y="695" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-14：バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D流入(橙塊矢印)→中央=接続基盤→右=打ち手A-D(緑塊矢印)→goalBurst。ゾーン背景は淡warm/淡tealの面塗り＋影(太枠なし)。teal+warn橙+ニュートラルの3色。beneficiaryRow(学生/教員/職員/大学)＋想定KPI帯。packed。 -->
