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
    <linearGradient id="gRamp" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gNode" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2fa97f"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2fa97f" stop-opacity="0.40"/><stop offset="1" stop-color="#2fa97f" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#16624b"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <path d="M40 600 L1170 130 L1240 130 L1240 600 Z" fill="#27a07c" opacity="0.05"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University への登坂ロードマップ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M70 588 C420 588 760 360 1166 150" stroke="#cfe5dc" stroke-width="22" fill="none" stroke-linecap="round" opacity="0.55"/>
  <path d="M70 588 C420 588 760 360 1166 150" stroke="url(#gRamp)" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="2 16" opacity="0.85"/>
  <text x="44" y="116" font-size="12" font-weight="700" fill="#c4632a">出発点：大学が抱える課題（低地 A–D）</text>
  <rect x="40" y="124" width="234" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="124" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="146" r="11" fill="#FBEDE2"/>
  <text x="64" y="151" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="84" y="151" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="54" y="174" font-size="10" fill="#666">院生の多様化・申請・評価・全員留学で限界</text>
  <rect x="40" y="196" width="234" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="196" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="218" r="11" fill="#FBEDE2"/>
  <text x="64" y="223" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="84" y="223" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="54" y="246" font-size="10" fill="#666">求める水準が上昇、個別育成と最適投下が必須</text>
  <rect x="40" y="268" width="234" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="268" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="290" r="11" fill="#FBEDE2"/>
  <text x="64" y="295" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="84" y="295" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="54" y="318" font-size="10" fill="#666">支援が乱立・重複・分散し個人に届かない</text>
  <rect x="40" y="340" width="234" height="64" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="340" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="362" r="11" fill="#FBEDE2"/>
  <text x="64" y="367" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="84" y="367" font-size="12.5" font-weight="700" fill="#1f2937">実践知が蓄積・活用されない</text>
  <text x="54" y="390" font-size="10" fill="#666">手続きの反復・データ分散・異動でゼロ化</text>
  <path d="M276 156 C300 156 300 470 322 470" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M276 228 C310 228 310 472 330 478" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M276 300 C312 300 460 478 540 372" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.55"/>
  <path d="M276 372 C320 420 470 490 540 392" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.55"/>
  <text x="40" y="430" font-size="10" fill="#9a9a9a">↑ 課題A–D は打ち手①–④に 1:1 で対応し、斜面を昇る</text>
  <g transform="translate(372,478)">
    <circle cx="0" cy="0" r="26" fill="url(#gNode)" filter="url(#sh)"/>
    <text x="0" y="6" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
    <text x="36" y="-6" font-size="13" font-weight="700" fill="#16624b">A→ 指導負担を軽減</text>
    <text x="36" y="11" font-size="10.5" fill="#555">AI多言語支援・ラボ共通支援・支援者接続</text>
    <text x="36" y="27" font-size="10.5" fill="#555">→ 教員の研究時間を確保</text>
  </g>
  <g transform="translate(560,372)">
    <circle cx="0" cy="0" r="26" fill="url(#gNode)" filter="url(#sh)"/>
    <text x="0" y="6" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
    <text x="36" y="-6" font-size="13" font-weight="700" fill="#16624b">B→ 院生の研究力を向上</text>
    <text x="36" y="11" font-size="10.5" fill="#555">CVデータベース＋AI伴走で段階別の個別支援</text>
    <text x="36" y="27" font-size="10.5" fill="#555">留学先・ラボ・企業のマッチング</text>
  </g>
  <g transform="translate(770,288)">
    <circle cx="0" cy="0" r="26" fill="url(#gNode)" filter="url(#sh)"/>
    <text x="0" y="6" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
    <text x="36" y="-6" font-size="13" font-weight="700" fill="#16624b">C→ 個別最適な情報を直に届ける</text>
    <text x="36" y="11" font-size="10.5" fill="#555">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
    <text x="36" y="27" font-size="10.5" fill="#555">突合し、必要な個人へダイレクト投下</text>
  </g>
  <g transform="translate(936,208)">
    <circle cx="0" cy="0" r="26" fill="url(#gNode)" filter="url(#sh)"/>
    <text x="0" y="6" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
    <text x="-220" y="56" font-size="13" font-weight="700" fill="#16624b">D→ 支援者の労力を削減・効率化</text>
    <text x="-220" y="73" font-size="10.5" fill="#555">反復・窓口業務をRAGで省力化／IR・成果・</text>
    <text x="-220" y="89" font-size="10.5" fill="#555">回答を自動収集し統合分析で経営判断を迅速化</text>
  </g>
  <rect x="330" y="478" width="156" height="108" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="330" y="478" width="156" height="18" rx="10" fill="#125642"/>
  <rect x="330" y="487" width="156" height="9" fill="#125642"/>
  <circle cx="342" cy="487" r="2.2" fill="#7fb8a6"/>
  <circle cx="349" cy="487" r="2.2" fill="#7fb8a6"/>
  <circle cx="356" cy="487" r="2.2" fill="#7fb8a6"/>
  <text x="372" y="491" font-size="9" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="330" y="496" width="44" height="90" fill="#eaf4ef"/>
  <rect x="338" y="508" width="28" height="7" rx="3" fill="#1A7A5E"/>
  <rect x="338" y="520" width="28" height="7" rx="3" fill="#cfe0d8"/>
  <rect x="338" y="532" width="28" height="7" rx="3" fill="#cfe0d8"/>
  <circle cx="352" cy="558" r="7" fill="#bfe0d4"/>
  <path d="M347 568 A7 7 0 0 1 357 568" fill="#bfe0d4"/>
  <text x="384" y="514" font-size="9.5" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="389" cy="527" r="3" fill="#1A7A5E"/>
  <rect x="397" y="524" width="78" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="389" cy="539" r="3" fill="#9bc3b5"/>
  <rect x="397" y="536" width="62" height="6" rx="3" fill="#E4F2EC"/>
  <rect x="384" y="550" width="92" height="16" rx="8" fill="#1A7A5E"/>
  <text x="392" y="561" font-size="8.5" fill="#ffffff">AI伴走：次の一手を提案</text>
  <text x="384" y="580" font-size="8.5" fill="#777">学内外の学習・スキル・資格を一元化</text>
  <text x="498" y="500" font-size="10.5" font-weight="700" fill="#16624b">接続基盤（Nexus）が登坂を支える</text>
  <text x="498" y="516" font-size="10" fill="#666">＝ CVデータベース ＋ AI伴走 ＋ RAG で</text>
  <text x="498" y="531" font-size="10" fill="#666">〈情報・データ・サポート・機会〉を「接続」</text>
  <rect x="498" y="540" width="248" height="44" rx="9" fill="#FBEDE2"/>
  <text x="510" y="558" font-size="9.5" font-weight="700" fill="#c4632a">副次効果</text>
  <text x="510" y="573" font-size="9.5" fill="#8a5a30">許諾済データの共同研究（行政・企業）／アプリ外販</text>
  <circle cx="1140" cy="186" r="120" fill="url(#goalGlow)"/>
  <g transform="translate(1056,90)">
    <path d="M84 0 L168 60 L130 174 L38 174 L0 60 Z" fill="url(#gGoal)" filter="url(#sh)"/>
    <circle cx="84" cy="34" r="14" fill="#ffffff"/>
    <g transform="translate(84,34)" stroke="#16624b" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
    <text x="84" y="68" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
    <text x="84" y="86" font-size="10" fill="#dff1e7" text-anchor="middle">Nexus University</text>
    <circle cx="26" cy="104" r="2.6" fill="#bff0d3"/>
    <text x="36" y="108" font-size="10.5" fill="#ffffff">研究者・支援者が躍動</text>
    <circle cx="26" cy="124" r="2.6" fill="#bff0d3"/>
    <text x="36" y="128" font-size="10.5" fill="#ffffff">院生の研究力・国際性↑</text>
    <circle cx="26" cy="144" r="2.6" fill="#bff0d3"/>
    <text x="36" y="148" font-size="10.5" fill="#ffffff">修了率↑・中退率↓</text>
    <circle cx="26" cy="164" r="2.6" fill="#bff0d3"/>
    <text x="36" y="168" font-size="10.5" fill="#ffffff">経営判断の高度化</text>
  </g>
  <g opacity="0.85"><path d="M1230 92 l5 -14 l5 14 z" fill="#2fa97f"/><path d="M1210 110 l4 -11 l4 11 z" fill="#ee9a4d"/><path d="M1248 116 l4 -11 l4 11 z" fill="#2fa97f"/></g>
  <text x="42" y="618" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ・あくまで目標値）</text>
  <rect x="40" y="624" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="624" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="58" y="657" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="130" y="644" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="130" y="659" font-size="10.5" fill="#555">研究時間を確保</text>
  <rect x="335" y="624" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="335" y="624" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="353" y="657" font-size="21" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="427" y="644" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="427" y="659" font-size="10.5" fill="#555">窓口業務（RAG）</text>
  <rect x="630" y="624" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="630" y="624" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="648" y="657" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="728" y="644" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="728" y="659" font-size="10.5" fill="#555">（自己効力感）</text>
  <rect x="925" y="624" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="925" y="624" width="5" height="48" rx="2.5" fill="url(#gHdr)"/>
  <text x="943" y="657" font-size="21" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1017" y="644" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1017" y="659" font-size="10.5" fill="#555">（中退率↓）</text>
  <text x="640" y="704" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">課題A–Dを打ち手①–④で一段ずつ昇り、研究×学びがつながる Nexus University へ駆け上がる</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-48：骨格=ロードマップ旅(対角クライム)。低地の課題A-D→左下から右上へ昇る斜面に打ち手①-④(1:1対応)→右上GOALバースト。白基調クリーン／teal＋warn橙＋ニュートラルの3色／airy。appMockup(研究×学びアプリ)・kpiBand(想定/試算明示)・goalBurst搭載。千葉大ALC構想図の登坂の動きに寄せた。 -->
