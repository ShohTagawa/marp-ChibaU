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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#b95a18"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4a93f"/><stop offset="1" stop-color="#e07b22"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#3f7fd6"/><stop offset="1" stop-color="#7fb0e6"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e88a2a"/><stop offset="1" stop-color="#f6b73e"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe6b0" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe6b0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a4a1e" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a4a1e" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <path d="M-40 720 L520 720 L1320 60 L1320 240 L640 720 Z" fill="url(#gRibbon)" opacity="0.10"/>
  <path d="M-40 720 L300 720 L1100 60 L1320 60 L1320 -10 L760 -10 L-40 600 Z" fill="url(#gRibbon)" opacity="0.07"/>
  <path d="M40 700 L160 640 L150 660 L260 600" stroke="#3f7fd6" stroke-width="3" fill="none" opacity="0.18" stroke-linecap="round"/>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="22"/>
  <rect x="0" y="58" width="1280" height="34" fill="#FBEDE2"/>
  <text x="40" y="80" font-size="15" font-weight="700" fill="#b95a18">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="104" width="372" height="28" rx="7" fill="#FBEDE2"/>
  <text x="56" y="123" font-size="13.5" font-weight="700" fill="#c4632a">いまの課題（A–D）</text>
  <rect x="424" y="104" width="200" height="28" rx="7" fill="#E7F0FB"/>
  <text x="524" y="123" font-size="13.5" font-weight="700" fill="#2f6bc0" text-anchor="middle">AIで変換</text>
  <rect x="636" y="104" width="604" height="28" rx="7" fill="#FDF3DC"/>
  <text x="652" y="123" font-size="13.5" font-weight="700" fill="#b07a12">打ち手＝変わること（A–D 1:1）</text>
  <rect x="40" y="142" width="372" height="86" rx="11" fill="#FBEDE2" filter="url(#shS)"/>
  <circle cx="68" cy="168" r="13" fill="#ffffff"/>
  <text x="68" y="173" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="90" y="173" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="56" y="196" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="214" font-size="11" fill="#7a5a45">研究費申請・評価資料・学振添削で限界</text>
  <path d="M412 162 L450 162 L450 152 L470 185 L450 218 L450 208 L412 208 Z" fill="url(#gWarm)"/>
  <text x="441" y="189" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <rect x="636" y="142" width="604" height="86" rx="11" fill="#FDF3DC" filter="url(#shS)"/>
  <rect x="636" y="142" width="6" height="86" rx="3" fill="url(#gWarm)"/>
  <text x="660" y="170" font-size="13.5" font-weight="700" fill="#9a5e0e">指導負担を軽減し、研究時間を確保</text>
  <text x="660" y="194" font-size="11" fill="#6b5a30">AIの多言語支援・ラボ共通支援・支援者への接続で、</text>
  <text x="660" y="212" font-size="11" fill="#6b5a30">教員は研究そのものに時間を回せる</text>
  <rect x="40" y="236" width="372" height="86" rx="11" fill="#FBEDE2" filter="url(#shS)"/>
  <circle cx="68" cy="262" r="13" fill="#ffffff"/>
  <text x="68" y="267" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="90" y="267" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が高度化</text>
  <text x="56" y="290" font-size="11" fill="#7a5a45">成功モデルが多様化・求める水準が上昇</text>
  <text x="56" y="308" font-size="11" fill="#7a5a45">個別の能力育成と資源の最適投下が必須</text>
  <path d="M412 256 L450 256 L450 246 L470 279 L450 312 L450 302 L412 302 Z" fill="url(#gWarm)"/>
  <text x="441" y="283" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <rect x="636" y="236" width="604" height="86" rx="11" fill="#FDF3DC" filter="url(#shS)"/>
  <rect x="636" y="236" width="6" height="86" rx="3" fill="url(#gWarm)"/>
  <text x="660" y="264" font-size="13.5" font-weight="700" fill="#9a5e0e">院生一人ひとりの研究力を向上</text>
  <text x="660" y="288" font-size="11" fill="#6b5a30">CVデータベース＋AI伴走で段階別に個別支援。</text>
  <text x="660" y="306" font-size="11" fill="#6b5a30">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="330" width="372" height="86" rx="11" fill="#FBEDE2" filter="url(#shS)"/>
  <circle cx="68" cy="356" r="13" fill="#ffffff"/>
  <text x="68" y="361" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="90" y="361" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="56" y="384" font-size="11" fill="#7a5a45">支援が乱立・重複・分散している</text>
  <text x="56" y="402" font-size="11" fill="#7a5a45">真に必要とする個人へ届かない</text>
  <path d="M412 350 L450 350 L450 340 L470 373 L450 406 L450 396 L412 396 Z" fill="url(#gWarm)"/>
  <text x="441" y="377" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <rect x="636" y="330" width="604" height="86" rx="11" fill="#FDF3DC" filter="url(#shS)"/>
  <rect x="636" y="330" width="6" height="86" rx="3" fill="url(#gWarm)"/>
  <text x="660" y="358" font-size="13.5" font-weight="700" fill="#9a5e0e">個別最適な情報を直に届ける</text>
  <text x="660" y="382" font-size="11" fill="#6b5a30">①学生入力ニーズ ＋ ②全学の支援情報を突合し、</text>
  <text x="660" y="400" font-size="11" fill="#6b5a30">必要とする個人へ機会をダイレクト投下</text>
  <rect x="40" y="424" width="372" height="86" rx="11" fill="#FBEDE2" filter="url(#shS)"/>
  <circle cx="68" cy="450" r="13" fill="#ffffff"/>
  <text x="68" y="455" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="90" y="455" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="56" y="478" font-size="11" fill="#7a5a45">同じ手続き・問い合わせの反復</text>
  <text x="56" y="496" font-size="11" fill="#7a5a45">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M412 444 L450 444 L450 434 L470 467 L450 500 L450 490 L412 490 Z" fill="url(#gWarm)"/>
  <text x="441" y="471" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <rect x="636" y="424" width="604" height="86" rx="11" fill="#FDF3DC" filter="url(#shS)"/>
  <rect x="636" y="424" width="6" height="86" rx="3" fill="url(#gWarm)"/>
  <text x="660" y="452" font-size="13.5" font-weight="700" fill="#9a5e0e">支援者の労力を削減し効率化</text>
  <text x="660" y="476" font-size="11" fill="#6b5a30">データを基盤上で接続しAIで分析。窓口・反復業務は</text>
  <text x="660" y="494" font-size="11" fill="#6b5a30">RAGで省力化、IR・成果・回答を自動収集・統合分析</text>
  <ellipse cx="232" cy="600" rx="220" ry="92" fill="url(#gBurst)"/>
  <rect x="40" y="528" width="1200" height="158" rx="14" fill="url(#gKpi)" filter="url(#sh)"/>
  <rect x="40" y="528" width="1200" height="30" rx="14" fill="#ffffff" opacity="0.16"/>
  <text x="64" y="549" font-size="13.5" font-weight="700" fill="#ffffff">想定KPI（試算）― 1対1の打ち手が積み上がると</text>
  <text x="232" y="616" font-size="62" font-weight="700" fill="#ffffff" text-anchor="middle">＋3h</text>
  <text x="232" y="650" font-size="14" font-weight="700" fill="#fff6e6" text-anchor="middle">教員の研究時間／週（想定）</text>
  <line x1="430" y1="572" x2="430" y2="664" stroke="#ffffff" stroke-width="1.5" opacity="0.45"/>
  <text x="560" y="600" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">−50%</text>
  <text x="560" y="628" font-size="13" font-weight="700" fill="#fff6e6" text-anchor="middle">定型問い合わせ</text>
  <text x="560" y="646" font-size="11" fill="#fff0d8" text-anchor="middle">（想定）</text>
  <line x1="690" y1="572" x2="690" y2="664" stroke="#ffffff" stroke-width="1.5" opacity="0.45"/>
  <text x="820" y="600" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">＋20pt</text>
  <text x="820" y="628" font-size="13" font-weight="700" fill="#fff6e6" text-anchor="middle">院生の研究力</text>
  <text x="820" y="646" font-size="11" fill="#fff0d8" text-anchor="middle">（試算）</text>
  <line x1="950" y1="572" x2="950" y2="664" stroke="#ffffff" stroke-width="1.5" opacity="0.45"/>
  <text x="1090" y="600" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">＋5pt</text>
  <text x="1090" y="628" font-size="13" font-weight="700" fill="#fff6e6" text-anchor="middle">修了率（中退率↓）</text>
  <text x="1090" y="646" font-size="11" fill="#fff0d8" text-anchor="middle">（想定）</text>
  <text x="40" y="704" font-size="10.5" fill="#9a7a55">副次効果：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
</svg>

<!-- variant-22: Before→After対応表（4行A-D 1:1, 左課題/中央AI/右打ち手）。左下→右上の青リボン地。橙/黄の温かみ。KPIバンド＋巨大数字＋goalBurst。KPIは全て想定/試算明示。 -->
</content>
</invoke>
