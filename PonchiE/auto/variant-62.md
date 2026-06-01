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
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#d9ece4"/><stop offset="1" stop-color="#bfe2d4"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.55"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <g opacity="0.10">
    <rect x="120" y="120" width="1040" height="470" rx="18" fill="#ffffff" stroke="#1A7A5E" stroke-width="2"/>
    <rect x="120" y="120" width="1040" height="40" rx="18" fill="#1A7A5E"/>
    <rect x="120" y="146" width="1040" height="14" fill="#1A7A5E"/>
    <circle cx="148" cy="140" r="6" fill="#ffffff"/>
    <circle cx="168" cy="140" r="6" fill="#ffffff"/>
    <circle cx="188" cy="140" r="6" fill="#ffffff"/>
    <rect x="230" y="131" width="700" height="18" rx="9" fill="#ffffff"/>
    <rect x="150" y="190" width="360" height="26" rx="8" fill="#1A7A5E"/>
    <rect x="150" y="236" width="940" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="262" width="900" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="288" width="940" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="330" width="300" height="24" rx="8" fill="#1A7A5E"/>
    <rect x="150" y="372" width="880" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="398" width="930" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="440" width="320" height="24" rx="8" fill="#1A7A5E"/>
    <rect x="150" y="482" width="900" height="12" rx="6" fill="#1A7A5E"/>
    <rect x="150" y="508" width="860" height="12" rx="6" fill="#1A7A5E"/>
  </g>
  <rect x="0" y="98" width="1280" height="492" fill="#ffffff" opacity="0.45"/>
  <path d="M-40 720 L320 720 L1280 200 L1280 720 Z" fill="url(#gSlope)" opacity="0.55"/>
  <path d="M-40 720 L200 720 L1090 220 L1280 220 L1280 360 Z" fill="#bfe2d4" opacity="0.30"/>
  <circle cx="1110" cy="200" r="180" fill="url(#goalGlow)"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（役員ブリーフ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を「接続」し、低地の課題から GOAL へ ― 取組1–4で駆け上がる</text>
  <text x="46" y="118" font-size="13" font-weight="700" fill="#c4632a">低地：大学が抱える課題（A–D）</text>
  <rect x="40" y="128" width="250" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="128" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="148" r="10" fill="#FBEDE2"/>
  <text x="64" y="153" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="82" y="151" font-size="12" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="54" y="172" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="54" y="186" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="200" width="250" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="200" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="220" r="10" fill="#FBEDE2"/>
  <text x="64" y="225" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="82" y="223" font-size="12" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="54" y="244" font-size="10" fill="#666">求める水準が上昇・成功モデルも多様化</text>
  <text x="54" y="258" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="272" width="250" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="272" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="292" r="10" fill="#FBEDE2"/>
  <text x="64" y="297" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="82" y="295" font-size="12" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="54" y="316" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="54" y="330" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="344" width="250" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="344" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="364" r="10" fill="#FBEDE2"/>
  <text x="64" y="369" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="82" y="367" font-size="12" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="54" y="388" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="54" y="402" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M312 424 L1066 168" stroke="#1c6e44" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.32" stroke-dasharray="2 12"/>
  <path d="M295 160 C314 160 318 360 332 386" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M295 232 C314 232 318 372 332 392" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M295 304 C314 304 318 380 332 398" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M295 376 C314 376 318 392 332 404" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <text x="334" y="128" font-size="13" font-weight="700" fill="#16624b">昇る斜面：AI×接続基盤の打ち手（取組1–4＝課題A–Dに1:1対応）</text>
  <rect x="328" y="338" width="248" height="84" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="352" cy="362" r="13" fill="#ffffff"/>
  <text x="352" y="367" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="372" y="360" font-size="11" font-weight="700" fill="#bfe9da">取組1</text>
  <text x="372" y="376" font-size="12.5" font-weight="700" fill="#ffffff">指導負担を軽減・研究時間を確保</text>
  <text x="342" y="397" font-size="9.5" fill="#dbefe6">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="342" y="412" font-size="9.5" fill="#dbefe6">→ 教員は研究そのものに時間を回せる</text>
  <rect x="558" y="262" width="248" height="84" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="582" cy="286" r="13" fill="#ffffff"/>
  <text x="582" y="291" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="602" y="284" font-size="11" font-weight="700" fill="#bfe9da">取組2</text>
  <text x="602" y="300" font-size="12.5" font-weight="700" fill="#ffffff">院生一人ひとりの研究力を向上</text>
  <text x="572" y="321" font-size="9.5" fill="#dbefe6">CVデータベース＋AI伴走で段階別に個別支援</text>
  <text x="572" y="336" font-size="9.5" fill="#dbefe6">留学先・ラボ・企業のマッチングも可能に</text>
  <path d="M576 380 L558 346" stroke="#1c6e44" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <rect x="788" y="282" width="248" height="84" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="812" cy="306" r="13" fill="#ffffff"/>
  <text x="812" y="311" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="832" y="304" font-size="11" font-weight="700" fill="#bfe9da">取組3</text>
  <text x="832" y="320" font-size="12.5" font-weight="700" fill="#ffffff">個別最適な情報を直に届ける</text>
  <text x="802" y="341" font-size="9.5" fill="#dbefe6">①学生の入力ニーズ＋②全学の支援情報を</text>
  <text x="802" y="356" font-size="9.5" fill="#dbefe6">突合し、必要な個人へダイレクト投下</text>
  <path d="M806 306 L788 322" stroke="#1c6e44" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <rect x="788" y="170" width="248" height="84" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="812" cy="194" r="13" fill="#ffffff"/>
  <text x="812" y="199" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="832" y="192" font-size="11" font-weight="700" fill="#bfe9da">取組4</text>
  <text x="832" y="208" font-size="12.5" font-weight="700" fill="#ffffff">支援者の労力を削減・効率化</text>
  <text x="802" y="229" font-size="9.5" fill="#dbefe6">反復・窓口業務をRAGで省力化</text>
  <text x="802" y="244" font-size="9.5" fill="#dbefe6">IR・成果・回答を自動収集し統合分析</text>
  <path d="M912 282 L912 254" stroke="#1c6e44" stroke-width="2.6" fill="none" marker-end="url(#mG)"/>
  <circle cx="1130" cy="158" r="48" fill="url(#gGoal)" filter="url(#sh)"/>
  <g stroke="#ffffff" stroke-width="2.4" fill="none"><circle cx="1130" cy="158" r="22"/><circle cx="1130" cy="158" r="10"/></g>
  <g stroke="#ffffff" stroke-width="3" opacity="0.9"><line x1="1130" y1="92" x2="1130" y2="104"/><line x1="1196" y1="158" x2="1184" y2="158"/><line x1="1130" y1="224" x2="1130" y2="212"/><line x1="1064" y1="158" x2="1076" y2="158"/><line x1="1083" y1="111" x2="1092" y2="120"/><line x1="1177" y1="111" x2="1168" y2="120"/><line x1="1083" y1="205" x2="1092" y2="196"/><line x1="1177" y1="205" x2="1168" y2="196"/></g>
  <text x="1130" y="248" font-size="15" font-weight="700" fill="#1c6e44" text-anchor="middle">GOAL</text>
  <text x="1130" y="266" font-size="10.5" fill="#16624b" text-anchor="middle">研究者と支援者が</text>
  <text x="1130" y="280" font-size="10.5" font-weight="700" fill="#16624b" text-anchor="middle">躍動する Nexus University</text>
  <path d="M974 230 L1086 178" stroke="#1c6e44" stroke-width="3" fill="none" marker-end="url(#mG)"/>
  <text x="46" y="436" font-size="12" font-weight="700" fill="#16624b">受益者：それぞれのニーズが「導入後」に解消される</text>
  <rect x="40" y="444" width="295" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="444" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="56" y="463" font-size="11" font-weight="700" fill="#16624b">学生・院生</text>
  <text x="56" y="479" font-size="9.5" fill="#666">支援が届かない → 個別最適に直届け</text>
  <text x="56" y="493" font-size="9.5" fill="#666">研究力・キャリアをAIが伴走</text>
  <rect x="345" y="444" width="295" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="444" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="361" y="463" font-size="11" font-weight="700" fill="#16624b">教員</text>
  <text x="361" y="479" font-size="9.5" fill="#666">指導・事務に忙殺 → 負担軽減</text>
  <text x="361" y="493" font-size="9.5" fill="#666">研究時間を確保（多言語・共通支援）</text>
  <rect x="650" y="444" width="295" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="444" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="666" y="463" font-size="11" font-weight="700" fill="#16624b">職員・支援者</text>
  <text x="666" y="479" font-size="9.5" fill="#666">反復・窓口業務 → RAGで省力化</text>
  <text x="666" y="493" font-size="9.5" fill="#666">実践知を基盤に蓄積・再利用</text>
  <rect x="955" y="444" width="285" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="444" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="971" y="463" font-size="11" font-weight="700" fill="#16624b">大学（経営）</text>
  <text x="971" y="479" font-size="9.5" fill="#666">分析が分散 → 統合分析で迅速判断</text>
  <text x="971" y="493" font-size="9.5" fill="#666">許諾済データ共有・アプリ外販も</text>
  <path d="M40 512 L1206 512 L1240 533 L1206 554 L40 554 Z" fill="url(#gWarn)"/>
  <text x="56" y="538" font-size="13" font-weight="700" fill="#ffffff">システムでなく〈データ〉を接続基盤でつなぐ ― 段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <text x="42" y="580" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ／確定値ではない）</text>
  <rect x="40" y="586" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="586" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="58" y="619" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="132" y="606" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="132" y="620" font-size="10" fill="#555">研究時間を確保（想定）</text>
  <rect x="345" y="586" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="586" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="363" y="619" font-size="21" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="437" y="606" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="437" y="620" font-size="10" fill="#555">窓口業務（試算）</text>
  <rect x="650" y="586" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="586" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="668" y="619" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="748" y="606" font-size="10" fill="#555">院生の研究力</text>
  <text x="748" y="620" font-size="10" fill="#555">（試算・自己効力感）</text>
  <rect x="955" y="586" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="586" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="973" y="619" font-size="21" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1047" y="606" font-size="10" fill="#555">修了率の改善</text>
  <text x="1047" y="620" font-size="10" fill="#555">（中退率↓・想定）</text>
  <path d="M40 646 L1206 646 L1240 680 L1206 714 L40 714 Z" fill="url(#gAccH)"/>
  <text x="623" y="685" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ駆け上がる</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-62。骨格=ロードマップ旅(対角クライム)：左下の低地=課題A-D／左下→右上の昇る斜面に取組1-4(A-D 1:1対応)を階段配置／右上=goalBurst(放射GOAL)。0層背景=アプリ画面を巨大テキストボックスに見立てた薄パネル(ブラウザ枠・UI行・見出しボックス opacity0.10＋白スクリム0.45)。teal＋warn橙＋ニュートラルの3色。beneficiaryRow(学生/教員/職員/大学のニーズ→導入後)・橙の段階展開帯・想定KPI(試算明示)入りのpacked。 -->
