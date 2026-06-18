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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#3cae6a"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.5"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <path d="M40 612 L1160 196 L1160 612 Z" fill="url(#gSlope)" opacity="0.10"/>
  <path d="M40 612 L1160 612 L1160 196 Z" fill="#f4faf7" opacity="0.0"/>
  <g opacity="0.06" stroke="#1A7A5E" stroke-width="1" fill="none"><path d="M70 600 L1150 210"/><path d="M70 624 L1150 234"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（昇るロードマップ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#E4F2EC"/>
  <text x="40" y="77" font-size="14" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="108" font-size="12" font-weight="700" fill="#c4632a">低地＝大学が抱える課題（A–D）／ 斜面を昇る取組1–4で右上のGOALへ</text>
  <rect x="38" y="118" width="246" height="60" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="38" y="118" width="6" height="60" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="138" r="10" fill="#FBEDE2"/>
  <text x="62" y="143" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="80" y="138" font-size="12" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="54" y="160" font-size="10" fill="#666">院生の多様化・申請/評価/学振添削・</text>
  <text x="54" y="173" font-size="10" fill="#666">全員留学で限界</text>
  <rect x="38" y="186" width="246" height="60" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="38" y="186" width="6" height="60" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="206" r="10" fill="#FBEDE2"/>
  <text x="62" y="211" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="80" y="206" font-size="12" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="54" y="228" font-size="10" fill="#666">求める水準が上昇・成功モデルも多様</text>
  <text x="54" y="241" font-size="10" fill="#666">個別育成と資源の最適投下が必須</text>
  <rect x="38" y="254" width="246" height="60" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="38" y="254" width="6" height="60" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="274" r="10" fill="#FBEDE2"/>
  <text x="62" y="279" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="80" y="274" font-size="12" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="54" y="296" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="54" y="309" font-size="10" fill="#666">必要とする個人へ直接届かない</text>
  <rect x="38" y="322" width="246" height="60" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="38" y="322" width="6" height="60" rx="3" fill="url(#gWarn)"/>
  <circle cx="62" cy="342" r="10" fill="#FBEDE2"/>
  <text x="62" y="347" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="80" y="342" font-size="12" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="54" y="364" font-size="10" fill="#666">同じ手続きの反復・システム乱立</text>
  <text x="54" y="377" font-size="10" fill="#666">データ分散・異動でゼロリセット</text>
  <path d="M138 612 L1148 222 L1148 252 L150 642 Z" fill="url(#gSlope)" filter="url(#sh)"/>
  <g opacity="0.16" stroke="#ffffff" stroke-width="1.4" fill="none"><path d="M180 605 L1130 238"/><path d="M210 624 L1140 264"/></g>
  <path d="M300 386 C320 410 330 460 318 498" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <text x="270" y="540" font-size="9.5" fill="#c4632a" opacity="0.85">課題を起点に</text>
  <g transform="translate(330,512)">
    <circle cx="0" cy="0" r="22" fill="#ffffff" filter="url(#sh)"/>
    <circle cx="0" cy="0" r="22" fill="none" stroke="#27a07c" stroke-width="2.5"/>
    <text x="0" y="6" font-size="18" font-weight="700" fill="#16624b" text-anchor="middle">1</text>
    <rect x="-118" y="30" width="236" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="-118" y="30" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
    <text x="-104" y="49" font-size="11.5" font-weight="700" fill="#16624b">取組1（→A）指導負担を軽減</text>
    <text x="-104" y="65" font-size="9.5" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
    <text x="-104" y="79" font-size="9.5" fill="#444">→ 教員は研究時間を確保できる</text>
  </g>
  <g transform="translate(580,420)">
    <circle cx="0" cy="0" r="22" fill="#ffffff" filter="url(#sh)"/>
    <circle cx="0" cy="0" r="22" fill="none" stroke="#27a07c" stroke-width="2.5"/>
    <text x="0" y="6" font-size="18" font-weight="700" fill="#16624b" text-anchor="middle">2</text>
    <rect x="-118" y="30" width="236" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="-118" y="30" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
    <text x="-104" y="49" font-size="11.5" font-weight="700" fill="#16624b">取組2（→B）研究力を向上</text>
    <text x="-104" y="65" font-size="9.5" fill="#444">CV-DB（学内外の学習/スキル/資格）＋AI伴走</text>
    <text x="-104" y="79" font-size="9.5" fill="#444">→ 段階別の個別支援・留学/ラボ/企業マッチング</text>
  </g>
  <g transform="translate(830,332)">
    <circle cx="0" cy="0" r="22" fill="#ffffff" filter="url(#sh)"/>
    <circle cx="0" cy="0" r="22" fill="none" stroke="#27a07c" stroke-width="2.5"/>
    <text x="0" y="6" font-size="18" font-weight="700" fill="#16624b" text-anchor="middle">3</text>
    <rect x="-118" y="-90" width="236" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="-118" y="-90" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
    <text x="-104" y="-71" font-size="11.5" font-weight="700" fill="#16624b">取組3（→C）情報を直に届ける</text>
    <text x="-104" y="-55" font-size="9.5" fill="#444">①学生のニーズ ＋ ②全学の支援情報を突合</text>
    <text x="-104" y="-41" font-size="9.5" fill="#444">→ 必要な個人へダイレクト投下</text>
  </g>
  <g transform="translate(1042,250)">
    <circle cx="0" cy="0" r="22" fill="#ffffff" filter="url(#sh)"/>
    <circle cx="0" cy="0" r="22" fill="none" stroke="#27a07c" stroke-width="2.5"/>
    <text x="0" y="6" font-size="18" font-weight="700" fill="#16624b" text-anchor="middle">4</text>
    <rect x="-118" y="-90" width="236" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="-118" y="-90" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
    <text x="-104" y="-71" font-size="11.5" font-weight="700" fill="#16624b">取組4（→D）支援を効率化</text>
    <text x="-104" y="-55" font-size="9.5" fill="#444">データを基盤上で接続しAIで分析・RAGで省力化</text>
    <text x="-104" y="-41" font-size="9.5" fill="#444">→ IR・成果・回答を自動収集し統合分析</text>
  </g>
  <circle cx="1168" cy="172" r="92" fill="url(#goalGlow)"/>
  <g fill="#3cae6a" opacity="0.5"><path d="M1168 80 L1176 116 L1168 110 L1160 116 Z"/><path d="M1260 172 L1224 180 L1230 172 L1224 164 Z"/><path d="M1100 110 L1130 132 L1122 134 L1126 144 Z"/><path d="M1236 110 L1206 132 L1214 134 L1210 144 Z"/></g>
  <circle cx="1168" cy="172" r="58" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="1168" cy="172" r="58" fill="none" stroke="#bff0d3" stroke-width="2"/>
  <g transform="translate(1168,150)" stroke="#ffffff" stroke-width="2.2" fill="none"><circle cx="0" cy="0" r="9"/><circle cx="0" cy="0" r="4"/></g>
  <text x="1168" y="182" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1168" y="202" font-size="9.5" fill="#dff1e7" text-anchor="middle">躍動する大学</text>
  <rect x="296" y="118" width="160" height="92" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="296" y="118" width="160" height="18" rx="10" fill="#125642"/>
  <rect x="296" y="127" width="160" height="9" fill="#125642"/>
  <circle cx="308" cy="127" r="2.2" fill="#7fb8a6"/>
  <circle cx="315" cy="127" r="2.2" fill="#7fb8a6"/>
  <text x="328" y="131" font-size="8.5" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="296" y="136" width="44" height="74" fill="#eaf4ef"/>
  <rect x="304" y="148" width="28" height="6" rx="3" fill="#1A7A5E"/>
  <rect x="304" y="160" width="28" height="6" rx="3" fill="#cfe0d8"/>
  <rect x="304" y="172" width="28" height="6" rx="3" fill="#cfe0d8"/>
  <circle cx="318" cy="194" r="6" fill="#bfe0d4"/>
  <text x="352" y="153" font-size="9" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="356" cy="166" r="3" fill="#1A7A5E"/>
  <rect x="364" y="163" width="78" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="356" cy="178" r="3" fill="#9bc3b5"/>
  <rect x="364" y="175" width="62" height="6" rx="3" fill="#E4F2EC"/>
  <rect x="350" y="190" width="96" height="14" rx="7" fill="#1A7A5E"/>
  <text x="356" y="200" font-size="8" fill="#ffffff">AI伴走：次の一手を提案</text>
  <text x="376" y="232" font-size="9.5" fill="#16624b" text-anchor="middle">＝ 接続基盤Nexus の中核</text>
  <path d="M40 470 L1206 470 L1240 491 L1206 512 L40 512 Z" fill="url(#gWarn)"/>
  <text x="56" y="496" font-size="13" font-weight="700" fill="#ffffff">段階展開：Lv1 アプリ（研究×学び）→ Lv2 全学データ接続基盤 → Lv3 学外連携（行政・企業の共同研究／統合分析で経営判断を迅速化）</text>
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
  <text x="623" y="641" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題の低地から取組1–4で昇り、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-97。骨格=ロードマップ旅(対角クライム)。白基調クリーン／左の低地に課題A-D／緑の昇る斜面リボン上に取組1-4ノード(A-Dと1:1)／右上にgoalBurst(GOAL)／中央上にappMockup(CV-DB+AI伴走)／橙のstageBand(Lv1→Lv3)／想定KPI(試算)。teal+warn+ニュートラルの3色制限。 -->
