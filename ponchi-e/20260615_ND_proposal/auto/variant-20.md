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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16335c"/><stop offset="1" stop-color="#0e6b6a"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#cfe7e6"/><stop offset="1" stop-color="#7fc6c2"/></linearGradient>
    <linearGradient id="gStep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f8c"/><stop offset="1" stop-color="#123f5e"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1aa3a0"/><stop offset="1" stop-color="#0f5f7a"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e69a5b"/><stop offset="1" stop-color="#cf7a34"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16335c"/><stop offset="1" stop-color="#0e6b6a"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#19b3ae" stop-opacity="0.55"/><stop offset="1" stop-color="#19b3ae" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#10324a" flood-opacity="0.24"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#10324a" flood-opacity="0.16"/></filter>
    <marker id="mC" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1f8f8c"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#cf7a34"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f4f8fa"/>
  <rect x="0" y="88" width="1280" height="502" fill="#eef4f6"/>
  <path d="M0 590 L0 470 L470 470 L470 590 Z" fill="#fbeede" opacity="0.85"/>
  <text x="22" y="492" font-size="11" font-weight="700" fill="#cf7a34" opacity="0.9">低地：大学が抱える課題（A–D）</text>
  <path d="M40 588 L1180 248 L1244 248 L1244 588 Z" fill="url(#gSlope)" opacity="0.55"/>
  <path d="M40 588 L1180 248" stroke="#3f9e9a" stroke-width="3" fill="none" opacity="0.55" stroke-dasharray="2 9" stroke-linecap="round"/>
  <g opacity="0.07" stroke="#16335c" stroke-width="1.1" fill="none"><circle cx="520" cy="420" r="250"/><circle cx="520" cy="420" r="160"/><circle cx="520" cy="420" r="90"/></g>
  <g opacity="0.10" fill="#16335c"><circle cx="300" cy="540" r="3"/><circle cx="560" cy="430" r="3"/><circle cx="820" cy="360" r="3"/><circle cx="1020" cy="300" r="3"/></g>
  <g opacity="0.10" stroke="#16335c" stroke-width="1" fill="none"><path d="M300 540 L560 430"/><path d="M560 430 L820 360"/><path d="M820 360 L1020 300"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（対角ロードマップ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#e1eef0"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#0e5a59">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="1145" cy="180" r="160" fill="url(#burst)"/>
  <rect x="36" y="100" width="226" height="200" rx="13" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="100" width="226" height="26" rx="13" fill="url(#gWarn)"/>
  <rect x="36" y="113" width="226" height="13" fill="#cf7a34"/>
  <text x="50" y="118" font-size="12.5" font-weight="700" fill="#ffffff">課題 ＝ 出発点（低地）</text>
  <circle cx="52" cy="146" r="9" fill="#fbede2"/>
  <text x="52" y="150" font-size="11" font-weight="700" fill="#cf7a34" text-anchor="middle">A</text>
  <text x="68" y="143" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="50" y="158" font-size="10" fill="#6b7280">院生多様化／申請・評価・学振・全員留学</text>
  <circle cx="52" cy="183" r="9" fill="#fbede2"/>
  <text x="52" y="187" font-size="11" font-weight="700" fill="#cf7a34" text-anchor="middle">B</text>
  <text x="68" y="180" font-size="11.5" font-weight="700" fill="#1f2937">人材育成が多様化・高度化</text>
  <text x="50" y="195" font-size="10" fill="#6b7280">水準上昇／個別育成と資源最適投下が必須</text>
  <circle cx="52" cy="220" r="9" fill="#fbede2"/>
  <text x="52" y="224" font-size="11" font-weight="700" fill="#cf7a34" text-anchor="middle">C</text>
  <text x="68" y="217" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="50" y="232" font-size="10" fill="#6b7280">支援が乱立・重複・分散、個人に届かない</text>
  <circle cx="52" cy="257" r="9" fill="#fbede2"/>
  <text x="52" y="261" font-size="11" font-weight="700" fill="#cf7a34" text-anchor="middle">D</text>
  <text x="68" y="254" font-size="11.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="50" y="269" font-size="10" fill="#6b7280">反復／システム乱立・データ分散・異動で0化</text>
  <text x="50" y="290" font-size="10.5" font-weight="700" fill="#0e5a59">接続基盤(Nexus)＝CV-DB＋AI伴走＋RAG で登る</text>
  <path d="M268 232 C302 232 300 372 332 372" stroke="#cf7a34" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <rect x="334" y="338" width="232" height="118" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="360" cy="364" r="13" fill="#ffffff"/>
  <text x="360" y="369" font-size="13" font-weight="700" fill="#123f5e" text-anchor="middle">1</text>
  <text x="380" y="361" font-size="10" font-weight="700" fill="#bfe7e5">課題A ↔ 打ち手1</text>
  <text x="380" y="374" font-size="12" font-weight="700" fill="#ffffff">研究時間を確保</text>
  <text x="350" y="396" font-size="10" fill="#e3f4f3">AI多言語支援・ラボ共通支援で</text>
  <text x="350" y="410" font-size="10" fill="#e3f4f3">教員の指導負担を軽減、支援者へ接続</text>
  <text x="350" y="431" font-size="10.5" font-weight="700" fill="#bfe7e5">→ 教員は研究そのものに時間を回せる</text>
  <text x="350" y="447" font-size="10" fill="#cdeae9">標高 Lv.1：まずアプリで効く</text>
  <path d="M566 388 C588 388 590 318 612 318" stroke="#1f8f8c" stroke-width="2.6" fill="none" marker-end="url(#mC)"/>
  <rect x="614" y="278" width="232" height="118" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="640" cy="304" r="13" fill="#ffffff"/>
  <text x="640" y="309" font-size="13" font-weight="700" fill="#123f5e" text-anchor="middle">2</text>
  <text x="660" y="301" font-size="10" font-weight="700" fill="#bfe7e5">課題B ↔ 打ち手2</text>
  <text x="660" y="314" font-size="12" font-weight="700" fill="#ffffff">院生の研究力を向上</text>
  <text x="630" y="336" font-size="10" fill="#e3f4f3">CVデータベース（学内外の学習・スキル・</text>
  <text x="630" y="350" font-size="10" fill="#e3f4f3">資格記録）＋ AI伴走で段階別の個別支援</text>
  <text x="630" y="371" font-size="10.5" font-weight="700" fill="#bfe7e5">→ 留学・ラボ・企業マッチングも可能に</text>
  <text x="630" y="387" font-size="10" fill="#cdeae9">標高 Lv.2：データが効く</text>
  <path d="M846 328 C868 328 870 258 892 258" stroke="#1f8f8c" stroke-width="2.6" fill="none" marker-end="url(#mC)"/>
  <rect x="894" y="156" width="232" height="118" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="920" cy="182" r="13" fill="#ffffff"/>
  <text x="920" y="187" font-size="13" font-weight="700" fill="#123f5e" text-anchor="middle">3</text>
  <text x="940" y="179" font-size="10" font-weight="700" fill="#bfe7e5">課題C ↔ 打ち手3</text>
  <text x="940" y="192" font-size="12" font-weight="700" fill="#ffffff">個別最適な情報を直に届ける</text>
  <text x="910" y="214" font-size="10" fill="#e3f4f3">①学生の入力ニーズ ＋ ②全学の支援情報</text>
  <text x="910" y="228" font-size="10" fill="#e3f4f3">を突合し、必要な個人へダイレクト投下</text>
  <text x="910" y="249" font-size="10.5" font-weight="700" fill="#bfe7e5">→ 真に必要とする個人へ届く</text>
  <text x="910" y="265" font-size="10" fill="#cdeae9">標高 Lv.2＋：突合で効く</text>
  <rect x="614" y="406" width="232" height="116" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="640" cy="432" r="13" fill="#ffffff"/>
  <text x="640" y="437" font-size="13" font-weight="700" fill="#123f5e" text-anchor="middle">4</text>
  <text x="660" y="429" font-size="10" font-weight="700" fill="#bfe7e5">課題D ↔ 打ち手4</text>
  <text x="660" y="442" font-size="12" font-weight="700" fill="#ffffff">支援者の労力を削減・効率化</text>
  <text x="630" y="464" font-size="10" fill="#e3f4f3">データを基盤上で接続しAIで分析、反復・</text>
  <text x="630" y="478" font-size="10" fill="#e3f4f3">窓口業務をRAGで省力化</text>
  <text x="630" y="499" font-size="10.5" font-weight="700" fill="#bfe7e5">→ IR・成果・回答を自動収集し統合分析</text>
  <text x="630" y="515" font-size="10" fill="#cdeae9">副次：許諾済データを学外連携・経営判断に活用</text>
  <path d="M1010 156 C1010 132 1060 132 1060 120" stroke="#1f8f8c" stroke-width="2.6" fill="none" marker-end="url(#mC)"/>
  <circle cx="1128" cy="120" r="58" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.95"><path d="M1128 64 L1136 96 L1170 96 L1142 116 L1152 150 L1128 130 L1104 150 L1114 116 L1086 96 L1120 96 Z" fill="#ffffff" opacity="0.2"/></g>
  <text x="1128" y="112" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1128" y="131" font-size="10" fill="#dff4f3" text-anchor="middle">躍動する大学</text>
  <rect x="894" y="100" width="232" height="44" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="908" y="118" font-size="10.5" font-weight="700" fill="#0e5a59">Nexus University の実現</text>
  <text x="908" y="134" font-size="10" fill="#445">躍動する好循環へ：中退率↓・修了率↑・国際性↑</text>
  <text x="42" y="320" font-size="10" font-weight="700" fill="#9aa3ad">↑ 標高＝接続のレベル　Lv.1 アプリ → Lv.2 全学基盤 → Lv.3 学外連携（行政・企業）</text>
  <rect x="40" y="538" width="1200" height="48" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="538" width="6" height="48" rx="3" fill="url(#gKpi)"/>
  <text x="60" y="556" font-size="11" font-weight="700" fill="#16335c">受益者の「いま」と「導入後」</text>
  <text x="60" y="571" font-size="10" fill="#9aa3ad">ニーズ → 接続基盤で満たす</text>
  <text x="208" y="552" font-size="11" font-weight="700" fill="#1f2937">学生</text>
  <text x="208" y="568" font-size="10" fill="#6b7280">機会が届かない</text>
  <text x="208" y="580" font-size="10" font-weight="700" fill="#0e7a78">→ 個別に直接届く</text>
  <text x="408" y="552" font-size="11" font-weight="700" fill="#1f2937">教員</text>
  <text x="408" y="568" font-size="10" fill="#6b7280">指導負担で限界</text>
  <text x="408" y="580" font-size="10" font-weight="700" fill="#0e7a78">→ 研究時間を確保</text>
  <text x="608" y="552" font-size="11" font-weight="700" fill="#1f2937">職員</text>
  <text x="608" y="568" font-size="10" fill="#6b7280">反復・窓口で疲弊</text>
  <text x="608" y="580" font-size="10" font-weight="700" fill="#0e7a78">→ RAGで省力化</text>
  <text x="828" y="552" font-size="11" font-weight="700" fill="#1f2937">大学</text>
  <text x="828" y="568" font-size="10" fill="#6b7280">データ分散で判断遅</text>
  <text x="828" y="580" font-size="10" font-weight="700" fill="#0e7a78">→ 統合分析で迅速化</text>
  <text x="1028" y="552" font-size="11" font-weight="700" fill="#1f2937">社会</text>
  <text x="1028" y="568" font-size="10" fill="#6b7280">共同研究が滞る</text>
  <text x="1028" y="580" font-size="10" font-weight="700" fill="#0e7a78">→ 行政・企業と連携</text>
  <text x="42" y="606" font-size="10.5" font-weight="700" fill="#9aa3ad">想定KPI（導入後の試算イメージ ／ 確定値ではない）</text>
  <rect x="40" y="612" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="612" width="5" height="48" rx="2.5" fill="url(#gKpi)"/>
  <text x="56" y="646" font-size="21" font-weight="700" fill="#16335c">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="124" y="632" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="124" y="646" font-size="10" fill="#555">研究時間を確保</text>
  <rect x="288" y="612" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="288" y="612" width="5" height="48" rx="2.5" fill="url(#gKpi)"/>
  <text x="304" y="646" font-size="21" font-weight="700" fill="#16335c">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="372" y="632" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="372" y="646" font-size="10" fill="#555">窓口業務（RAG）</text>
  <rect x="536" y="612" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="536" y="612" width="5" height="48" rx="2.5" fill="url(#gKpi)"/>
  <text x="552" y="646" font-size="21" font-weight="700" fill="#16335c">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="620" y="632" font-size="10" fill="#555">院生の研究力</text>
  <text x="620" y="646" font-size="10" fill="#555">（自己効力感）</text>
  <rect x="784" y="612" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="784" y="612" width="5" height="48" rx="2.5" fill="url(#gKpi)"/>
  <text x="800" y="646" font-size="21" font-weight="700" fill="#16335c">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="868" y="632" font-size="10" fill="#555">修了率の改善</text>
  <text x="868" y="646" font-size="10" fill="#555">（中退率↓）</text>
  <rect x="1032" y="612" width="208" height="48" rx="10" fill="url(#gKpi)" filter="url(#shSoft)"/>
  <text x="1136" y="634" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">人手・時間を最大化し</text>
  <text x="1136" y="650" font-size="11" font-weight="700" fill="#bfe7e5" text-anchor="middle">研究×学びがつながる</text>
  <path d="M40 676 L1206 676 L1240 698 L1206 720 L40 720 Z" fill="url(#gKpi)"/>
  <text x="623" y="703" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">低地の課題A–Dを打ち手1–4で1段ずつ登り、Nexus University の GOAL へ ― 接続するのはシステムでなく〈データ〉</text>
</svg>

<!-- ポンチ絵skill(marp-ponchie) variant-20。骨格=ロードマップ旅(対角クライム)：左下の低地に課題A-D→昇る斜面に打ち手1-4(A-D 1:1対応)を配置→右上GOALバースト。ネイビー＋tealの寒色クール／packed密度／ゾーンは面塗り+影で区切る/kpiBand・beneficiaryRow(学生/教員/職員/大学/社会)・goalBurst入り。KPIは「想定/試算」明示。 -->
</content>
</invoke>
