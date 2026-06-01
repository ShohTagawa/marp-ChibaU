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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f8a"/><stop offset="1" stop-color="#125450"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a0a0"/><stop offset="1" stop-color="#0f4a48"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7fb4e0"/><stop offset="1" stop-color="#3f8fd0"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1f8f8a"/><stop offset="0.55" stop-color="#3aa07a"/><stop offset="1" stop-color="#3cae6a"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f7c948" stop-opacity="0.55"/><stop offset="1" stop-color="#f7c948" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0e3f3d" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e3f3d" flood-opacity="0.14"/></filter>
    <marker id="mUp" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#ffffff"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f8fbfb"/>
  <path d="M-60 720 L240 720 L1340 -40 L1040 -40 Z" fill="url(#gRibbon)" opacity="0.16"/>
  <path d="M-60 720 L120 720 L1180 -40 L1000 -40 Z" fill="url(#gRibbon)" opacity="0.18"/>
  <g opacity="0.22" fill="#5a9fd4"><path d="M60 660 L150 600 L150 632 L60 692 Z"/><path d="M210 558 L300 498 L300 530 L210 590 Z"/><path d="M360 456 L450 396 L450 428 L360 488 Z"/><path d="M510 354 L600 294 L600 326 L510 386 Z"/><path d="M660 252 L750 192 L750 224 L660 284 Z"/></g>
  <g opacity="0.10" stroke="#1f8f8a" stroke-width="1" fill="none"><circle cx="940" cy="180" r="3"/><circle cx="1010" cy="140" r="3"/><circle cx="880" cy="240" r="3"/><path d="M880 240 L940 180 L1010 140"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University への登り道</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#E2F1F0"/>
  <text x="40" y="77" font-size="14.5" font-weight="700" fill="#155954">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M40 580 L300 580 L300 596 L40 596 Z" fill="#FBEDE2"/>
  <text x="52" y="592" font-size="11" font-weight="700" fill="#c4632a" text-anchor="start">低地＝大学が抱える課題（A–D）</text>
  <path d="M70 540 L760 110" stroke="url(#gSlope)" stroke-width="44" stroke-linecap="round" opacity="0.95"/>
  <path d="M70 540 L760 110" stroke="#ffffff" stroke-width="2.4" stroke-dasharray="3 14" opacity="0.7"/>
  <path d="M700 150 L770 104 L800 150 Z" fill="#3cae6a" opacity="0.95"/>
  <g font-size="10" fill="#155954" opacity="0.85"><text x="56" y="572">START</text></g>
  <text x="50" y="116" font-size="12" font-weight="700" fill="#c4632a">課題 A–D（低地）</text>
  <rect x="48" y="124" width="236" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="124" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="72" cy="144" r="10" fill="#FBEDE2"/>
  <text x="72" y="148" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="90" y="146" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="62" y="166" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="62" y="181" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="48" y="196" width="236" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="196" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="72" cy="216" r="10" fill="#FBEDE2"/>
  <text x="72" y="220" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="90" y="218" font-size="11.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="62" y="238" font-size="10" fill="#666">求める水準が上昇・成功モデルも多様</text>
  <text x="62" y="253" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="48" y="268" width="236" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="268" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="72" cy="288" r="10" fill="#FBEDE2"/>
  <text x="72" y="292" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="90" y="290" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="62" y="310" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="62" y="325" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="48" y="340" width="236" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="48" y="340" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="72" cy="360" r="10" fill="#FBEDE2"/>
  <text x="72" y="364" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="90" y="362" font-size="11.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="62" y="382" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="62" y="397" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <text x="300" y="446" font-size="12" font-weight="700" fill="#155954">AI×接続基盤の打ち手（取組1–4＝課題A–Dと1:1で対応し斜面を登る）</text>
  <path d="M284 156 C300 156 300 470 316 470" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <g transform="translate(316,408)">
    <rect x="0" y="0" width="252" height="118" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <circle cx="26" cy="26" r="13" fill="#ffffff"/>
    <text x="26" y="31" font-size="14" font-weight="700" fill="#0f4a48" text-anchor="middle">1</text>
    <text x="48" y="22" font-size="10" font-weight="700" fill="#bfe9e6">課題Aへ →</text>
    <text x="48" y="38" font-size="12.5" font-weight="700" fill="#ffffff">研究時間を確保</text>
    <text x="16" y="62" font-size="10.5" fill="#e3f4f3">教員の指導負担を軽減</text>
    <text x="16" y="80" font-size="10" fill="#cfe9e7">AI多言語支援・ラボ共通支援</text>
    <text x="16" y="96" font-size="10" fill="#cfe9e7">支援者どうしを接続</text>
    <text x="16" y="111" font-size="10" font-weight="700" fill="#bfe9e6">→ 研究そのものに時間を回せる</text>
  </g>
  <g transform="translate(516,306)">
    <rect x="0" y="0" width="252" height="118" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <circle cx="26" cy="26" r="13" fill="#ffffff"/>
    <text x="26" y="31" font-size="14" font-weight="700" fill="#0f4a48" text-anchor="middle">2</text>
    <text x="48" y="22" font-size="10" font-weight="700" fill="#bfe9e6">課題Bへ →</text>
    <text x="48" y="38" font-size="12.5" font-weight="700" fill="#ffffff">研究力を向上</text>
    <text x="16" y="62" font-size="10.5" fill="#e3f4f3">院生一人ひとりを段階別に支援</text>
    <text x="16" y="80" font-size="10" fill="#cfe9e7">CVデータベース＋AI伴走</text>
    <text x="16" y="96" font-size="10" fill="#cfe9e7">留学先・ラボ・企業をマッチング</text>
    <text x="16" y="111" font-size="10" font-weight="700" fill="#bfe9e6">→ 能力育成と資源投下を最適化</text>
  </g>
  <g transform="translate(716,204)">
    <rect x="0" y="0" width="252" height="118" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <circle cx="26" cy="26" r="13" fill="#ffffff"/>
    <text x="26" y="31" font-size="14" font-weight="700" fill="#0f4a48" text-anchor="middle">3</text>
    <text x="48" y="22" font-size="10" font-weight="700" fill="#bfe9e6">課題Cへ →</text>
    <text x="48" y="38" font-size="12.5" font-weight="700" fill="#ffffff">情報を直に届ける</text>
    <text x="16" y="62" font-size="10.5" fill="#e3f4f3">真に必要な個人へダイレクト投下</text>
    <text x="16" y="80" font-size="10" fill="#cfe9e7">①学生の入力ニーズ ＋</text>
    <text x="16" y="96" font-size="10" fill="#cfe9e7">②全学の支援情報 を突合</text>
    <text x="16" y="111" font-size="10" font-weight="700" fill="#bfe9e6">→ 乱立・分散を個別最適へ</text>
  </g>
  <g transform="translate(916,102)">
    <rect x="0" y="0" width="252" height="118" rx="12" fill="url(#gTeal)" filter="url(#sh)"/>
    <circle cx="26" cy="26" r="13" fill="#ffffff"/>
    <text x="26" y="31" font-size="14" font-weight="700" fill="#0f4a48" text-anchor="middle">4</text>
    <text x="48" y="22" font-size="10" font-weight="700" fill="#bfe9e6">課題Dへ →</text>
    <text x="48" y="38" font-size="12.5" font-weight="700" fill="#ffffff">支援者を効率化</text>
    <text x="16" y="62" font-size="10.5" fill="#e3f4f3">実践知を基盤に接続しAIで分析</text>
    <text x="16" y="80" font-size="10" fill="#cfe9e7">反復・窓口業務をRAGで省力化</text>
    <text x="16" y="96" font-size="10" fill="#cfe9e7">IR・成果・回答を自動収集・統合</text>
    <text x="16" y="111" font-size="10" font-weight="700" fill="#bfe9e6">→ 異動でもゼロリセットしない</text>
  </g>
  <circle cx="1158" cy="116" r="120" fill="url(#goalGlow)"/>
  <g transform="translate(996,18)">
    <path d="M0 64 L150 24 L200 56 L162 96 L196 138 L150 168 L0 132 Z" fill="url(#gGreen)" filter="url(#sh)"/>
    <circle cx="48" cy="56" r="15" fill="#ffffff"/>
    <g transform="translate(48,56)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
    <text x="74" y="52" font-size="20" font-weight="700" fill="#ffffff">GOAL</text>
    <text x="74" y="72" font-size="10.5" font-weight="700" fill="#dff1e7">Nexus University</text>
    <text x="20" y="98" font-size="10.5" fill="#eafaf1">研究者と支援者が躍動する大学</text>
    <text x="20" y="116" font-size="10" fill="#dff1e7">許諾済データを学内・行政・企業で共同利活用</text>
    <text x="20" y="132" font-size="10" fill="#dff1e7">統合分析で経営判断を迅速化／アプリ外販</text>
    <text x="20" y="150" font-size="10" font-weight="700" fill="#ffffff">成果が連鎖的に伸びる好循環へ</text>
  </g>
  <path d="M40 542 L760 542 L760 558 L40 558 Z" fill="#155954"/>
  <text x="52" y="554" font-size="11" font-weight="700" fill="#ffffff">登る＝段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <text x="788" y="446" font-size="11.5" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="788" y="456" width="450" height="90" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="788" y="456" width="6" height="90" rx="3" fill="url(#gGreen)"/>
  <text x="812" y="500" font-size="40" font-weight="700" fill="#1c6e44">＋3<tspan font-size="16" font-weight="400">h/週</tspan></text>
  <text x="812" y="524" font-size="10.5" fill="#555">教員1人あたりの研究時間（A）</text>
  <line x1="978" y1="470" x2="978" y2="532" stroke="#e3eceb" stroke-width="1.4"/>
  <text x="998" y="494" font-size="34" font-weight="700" fill="#155954">−50<tspan font-size="15" font-weight="400">%</tspan></text>
  <text x="998" y="516" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="998" y="531" font-size="10.5" fill="#555">窓口業務 RAG（D）</text>
  <line x1="1112" y1="470" x2="1112" y2="532" stroke="#e3eceb" stroke-width="1.4"/>
  <text x="1130" y="494" font-size="34" font-weight="700" fill="#c4632a">＋20<tspan font-size="15" font-weight="400">pt</tspan></text>
  <text x="1130" y="516" font-size="10.5" fill="#555">院生の研究力（B）</text>
  <text x="1130" y="531" font-size="10.5" fill="#555">＋ 修了率＋5pt・中退率↓</text>
  <path d="M40 592 L1206 592 L1240 636 L1206 680 L40 680 Z" fill="url(#gHdr)"/>
  <text x="623" y="642" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
  <text x="623" y="664" font-size="11" fill="#cdebe9" text-anchor="middle">課題A–Dを低地に、打ち手1–4で斜面を登り、GOALへ駆け上がる</text>
</svg>

<!-- variant-76：ロードマップ旅(対角クライム)。低地=課題A–D／青シェブロンリボンの上昇斜面／取組1–4が左下→右上にカード階段で登る(A-D 1:1)／右上GOALバースト(緑・星形)／巨大数字KPIband(想定/試算明示)。多色リッチ：teal＋橙＋緑GOAL＋青背景。 -->
