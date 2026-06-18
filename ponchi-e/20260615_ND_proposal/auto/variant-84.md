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
    <linearGradient id="gBone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfe6dc"/><stop offset="0.5" stop-color="#27a07c"/><stop offset="1" stop-color="#3cae6a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.42"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#1A7A5E" stroke-width="0.6" opacity="0.5"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <rect x="0" y="88" width="1280" height="540" fill="url(#grid)" opacity="0.55"/>
  <g stroke="#1A7A5E" stroke-width="0.8" opacity="0.16" fill="none"><path d="M40 104 L40 116 M1240 104 L1240 116 M40 110 L1240 110"/><path d="M44 110 L52 106 M44 110 L52 114 M1236 110 L1228 106 M1236 110 L1228 114"/></g>
  <text x="640" y="106" font-size="10" fill="#1A7A5E" opacity="0.45" text-anchor="middle">設計図：分散を「接続」する一枚構想  ◇ blueprint</text>
  <g stroke="#1A7A5E" stroke-width="0.8" opacity="0.16" fill="none"><path d="M28 116 L40 116 M28 612 L40 612 M34 116 L34 612"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M44 300 L1236 300 L1236 420 L44 420 Z" fill="url(#gBone)" opacity="0.16"/>
  <path d="M44 348 L1180 348 L1180 336 L1236 360 L1180 384 L1180 372 L44 372 Z" fill="url(#gBone)" opacity="0.55"/>
  <text x="120" y="328" font-size="11" font-weight="700" fill="#16624b" opacity="0.8">バックボーン：左の課題 → 中央 Nexus → 右の打ち手 へ流れる</text>
  <text x="56" y="132" font-size="13" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="48" y="142" width="270" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="142" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="76" cy="166" r="12" fill="#FBEDE2"/>
  <text x="76" y="171" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="98" y="170" font-size="13" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="66" y="194" font-size="10.5" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="66" y="211" font-size="10.5" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="48" y="232" width="270" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="232" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="76" cy="256" r="12" fill="#FBEDE2"/>
  <text x="76" y="261" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="98" y="260" font-size="13" font-weight="700" fill="#1f2937">研究人材の育成が高度化</text>
  <text x="66" y="284" font-size="10.5" fill="#666">求める水準が上昇・成功モデルも多様化</text>
  <text x="66" y="301" font-size="10.5" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="48" y="412" width="270" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="412" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="76" cy="436" r="12" fill="#FBEDE2"/>
  <text x="76" y="441" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="98" y="440" font-size="13" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="66" y="464" font-size="10.5" fill="#666">支援が乱立・重複・分散している</text>
  <text x="66" y="481" font-size="10.5" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="48" y="502" width="270" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="502" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="76" cy="526" r="12" fill="#FBEDE2"/>
  <text x="76" y="531" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="98" y="530" font-size="13" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="66" y="554" font-size="10.5" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="66" y="571" font-size="10.5" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M322 181 C360 181 360 320 408 332" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M322 271 C360 271 360 335 408 344" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M322 451 C360 451 360 392 408 380" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M322 541 C360 541 360 404 408 392" stroke="#d2772f" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <circle cx="556" cy="360" r="180" fill="url(#goalGlow)"/>
  <rect x="412" y="232" width="288" height="256" rx="20" fill="url(#gAcc)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.1" fill="none"><ellipse cx="556" cy="360" rx="120" ry="120"/><ellipse cx="556" cy="360" rx="48" ry="120"/><ellipse cx="556" cy="360" rx="120" ry="48"/></g>
  <circle cx="442" cy="264" r="13" fill="#ffffff"/>
  <g transform="translate(442,264)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="464" y="261" font-size="13" font-weight="700" fill="#bfe9da">接続基盤（Nexus）</text>
  <text x="464" y="279" font-size="11" fill="#d8efe6">〈情報・データ・サポート・機会〉を統合</text>
  <rect x="430" y="294" width="118" height="174" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="430" y="294" width="118" height="20" rx="10" fill="#125642"/>
  <rect x="430" y="304" width="118" height="10" fill="#125642"/>
  <circle cx="442" cy="304" r="2.4" fill="#7fb8a6"/>
  <circle cx="450" cy="304" r="2.4" fill="#7fb8a6"/>
  <text x="462" y="308" font-size="9" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="442" y="324" width="94" height="9" rx="4" fill="#1A7A5E"/>
  <text x="448" y="331" font-size="7.5" fill="#ffffff">CVデータベース</text>
  <circle cx="448" cy="348" r="3" fill="#1A7A5E"/>
  <rect x="456" y="345" width="76" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="448" cy="362" r="3" fill="#9bc3b5"/>
  <rect x="456" y="359" width="60" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="448" cy="376" r="3" fill="#9bc3b5"/>
  <rect x="456" y="373" width="70" height="6" rx="3" fill="#E4F2EC"/>
  <rect x="442" y="390" width="94" height="20" rx="9" fill="#1A7A5E"/>
  <text x="489" y="403" font-size="8.5" fill="#ffffff" text-anchor="middle">AI伴走：次の一手を提案</text>
  <circle cx="466" cy="436" r="11" fill="#bfe0d4"/>
  <path d="M457 451 A11 11 0 0 1 475 451" fill="#bfe0d4"/>
  <text x="489" y="432" font-size="8.5" fill="#16624b">学生入力</text>
  <text x="489" y="445" font-size="8.5" fill="#16624b">ニーズ →</text>
  <text x="489" y="458" font-size="8.5" font-weight="700" fill="#16624b">個別投下</text>
  <text x="624" y="320" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">CVデータベース</text>
  <text x="624" y="337" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">＋ AI伴走 ＋ RAG</text>
  <text x="624" y="362" font-size="10.5" fill="#eaf6f0" text-anchor="middle">許諾済データを基盤で接続</text>
  <text x="624" y="378" font-size="10.5" fill="#eaf6f0" text-anchor="middle">→ 統合分析で経営判断を迅速化</text>
  <rect x="588" y="398" width="100" height="66" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="638" y="420" font-size="10" fill="#eafaf1" text-anchor="middle">真に必要な個人へ</text>
  <text x="638" y="436" font-size="10" fill="#eafaf1" text-anchor="middle">ダイレクトに</text>
  <text x="638" y="454" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">情報・機会を投下</text>
  <text x="724" y="132" font-size="13" font-weight="700" fill="#16624b">AI×接続基盤の打ち手（A–D）</text>
  <rect x="716" y="142" width="306" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="716" y="142" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="166" r="12" fill="#E4F2EC"/>
  <text x="744" y="171" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="766" y="170" font-size="13" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="734" y="194" font-size="10.5" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="734" y="211" font-size="10.5" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="716" y="232" width="306" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="716" y="232" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="256" r="12" fill="#E4F2EC"/>
  <text x="744" y="261" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="766" y="260" font-size="13" font-weight="700" fill="#16624b">院生の研究力を個別に向上</text>
  <text x="734" y="284" font-size="10.5" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="734" y="301" font-size="10.5" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="716" y="412" width="306" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="716" y="412" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="436" r="12" fill="#E4F2EC"/>
  <text x="744" y="441" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="766" y="440" font-size="13" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="734" y="464" font-size="10.5" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="734" y="481" font-size="10.5" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="716" y="502" width="306" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="716" y="502" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="526" r="12" fill="#E4F2EC"/>
  <text x="744" y="531" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="766" y="530" font-size="13" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="734" y="554" font-size="10.5" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="734" y="571" font-size="10.5" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M700 332 C710 332 706 181 716 181" stroke="#1c6e44" stroke-width="3" fill="none" marker-end="url(#mG)"/>
  <path d="M700 344 C710 344 706 271 716 271" stroke="#1c6e44" stroke-width="3" fill="none" marker-end="url(#mG)"/>
  <path d="M700 380 C710 380 706 451 716 451" stroke="#1c6e44" stroke-width="3" fill="none" marker-end="url(#mG)"/>
  <path d="M700 392 C710 392 706 541 716 541" stroke="#1c6e44" stroke-width="3" fill="none" marker-end="url(#mG)"/>
  <rect x="1030" y="142" width="206" height="438" rx="20" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.14"><path d="M1133 178 L1142 200 L1166 200 L1147 214 L1154 238 L1133 224 L1112 238 L1119 214 L1100 200 L1124 200 Z" fill="#ffffff"/></g>
  <circle cx="1058" cy="178" r="14" fill="#ffffff"/>
  <g transform="translate(1058,178)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1082" y="184" font-size="20" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1046" y="216" font-size="12" fill="#dff1e7">研究者と支援者が躍動する</text>
  <text x="1046" y="234" font-size="12.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1052" cy="268" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="272" font-size="12.5" fill="#ffffff">教員の研究時間 ↑</text>
  <circle cx="1052" cy="298" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="302" font-size="12.5" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1052" cy="328" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="332" font-size="12.5" fill="#ffffff">標準年限内の修了率 ↑</text>
  <circle cx="1052" cy="358" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="362" font-size="12.5" fill="#ffffff">中退率 ↓</text>
  <circle cx="1052" cy="388" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="392" font-size="12.5" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1052" cy="418" r="3.2" fill="#bff0d3"/>
  <text x="1064" y="422" font-size="12.5" fill="#ffffff">経営判断の高度化</text>
  <rect x="1046" y="442" width="174" height="124" rx="11" fill="#ffffff" opacity="0.14"/>
  <text x="1133" y="466" font-size="10.5" fill="#eafaf1" text-anchor="middle">副次：許諾済データの</text>
  <text x="1133" y="482" font-size="10.5" fill="#eafaf1" text-anchor="middle">共有・利活用（学内・</text>
  <text x="1133" y="498" font-size="10.5" fill="#eafaf1" text-anchor="middle">行政・企業の共同研究）</text>
  <text x="1133" y="522" font-size="10.5" fill="#eafaf1" text-anchor="middle">アプリ外販も視野に</text>
  <text x="1133" y="548" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">成果が連鎖する好循環へ</text>
  <text x="44" y="612" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ ／ 確定値ではありません）</text>
  <rect x="44" y="620" width="288" height="56" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="44" y="620" width="5" height="56" rx="2.5" fill="url(#gAccH)"/>
  <text x="62" y="658" font-size="26" font-weight="700" fill="#16624b">＋3<tspan font-size="13" font-weight="400">h/週</tspan></text>
  <text x="148" y="641" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="148" y="657" font-size="10.5" fill="#555">研究時間を確保</text>
  <text x="148" y="671" font-size="8.5" fill="#c4632a">※想定</text>
  <rect x="346" y="620" width="288" height="56" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="346" y="620" width="5" height="56" rx="2.5" fill="url(#gAccH)"/>
  <text x="364" y="658" font-size="26" font-weight="700" fill="#16624b">−50<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="452" y="641" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="452" y="657" font-size="10.5" fill="#555">窓口業務（RAG）</text>
  <text x="452" y="671" font-size="8.5" fill="#c4632a">※試算</text>
  <rect x="648" y="620" width="288" height="56" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="648" y="620" width="5" height="56" rx="2.5" fill="url(#gAccH)"/>
  <text x="666" y="658" font-size="26" font-weight="700" fill="#16624b">＋20<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="756" y="641" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="756" y="657" font-size="10.5" fill="#555">（自己効力感）</text>
  <text x="756" y="671" font-size="8.5" fill="#c4632a">※想定</text>
  <rect x="950" y="620" width="288" height="56" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="950" y="620" width="5" height="56" rx="2.5" fill="url(#gAccH)"/>
  <text x="968" y="658" font-size="26" font-weight="700" fill="#16624b">＋5<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="1058" y="641" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1058" y="657" font-size="10.5" fill="#555">（中退率↓）</text>
  <text x="1058" y="671" font-size="8.5" fill="#c4632a">※試算</text>
</svg>

<!-- variant-84: バックボーン＋中央ヒーロー結節点(Nexus)。背景=極薄ブループリント方眼＋寸法線で設計図トーン。配色=teal＋warn橙＋ニュートラルの3色制限。密度airy。左課題A-D→塊矢印→中央Nexus(appMockup入り)→塊矢印→右打ち手A-D→右端goalBurst。下段kpiBand(全て※想定/試算明示)。A-D課題↔打ち手1:1対応。 -->
