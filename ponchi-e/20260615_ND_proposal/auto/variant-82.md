---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
header: ''
footer: ''
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gWarmH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef8b2e"/><stop offset="1" stop-color="#d96a18"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f5a23b"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gSun" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffce4f"/><stop offset="1" stop-color="#f3a233"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8801e"/><stop offset="1" stop-color="#b8530e"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd75e" stop-opacity="0.95"/><stop offset="0.55" stop-color="#ffbe3a" stop-opacity="0.55"/><stop offset="1" stop-color="#ffbe3a" stop-opacity="0"/></radialGradient>
    <radialGradient id="glowW" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f3a233" stop-opacity="0.12"/><stop offset="1" stop-color="#f3a233" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#a85410" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#a85410" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d96a18"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.5" stroke="#f0b15a" stroke-width="1.1" fill="none"><path d="M120 250 L300 210 L470 270 L640 220 L820 280 L1010 230 L1180 280"/><path d="M180 360 L360 410 L560 350 L760 400 L960 350 L1150 400"/><path d="M150 500 L340 470 L520 520 L720 470 L920 520 L1120 480"/></g>
  <g fill="#e89a35" opacity="0.5"><circle cx="120" cy="250" r="4"/><circle cx="300" cy="210" r="3"/><circle cx="470" cy="270" r="4.5"/><circle cx="640" cy="220" r="3"/><circle cx="820" cy="280" r="4"/><circle cx="1010" cy="230" r="3"/><circle cx="1180" cy="280" r="4"/><circle cx="180" cy="360" r="3.5"/><circle cx="360" cy="410" r="4.5"/><circle cx="560" cy="350" r="3"/><circle cx="760" cy="400" r="4"/><circle cx="960" cy="350" r="3.5"/><circle cx="1150" cy="400" r="3"/><circle cx="150" cy="500" r="4"/><circle cx="340" cy="470" r="3"/><circle cx="520" cy="520" r="4.5"/><circle cx="720" cy="470" r="3"/><circle cx="920" cy="520" r="4"/><circle cx="1120" cy="480" r="3.5"/></g>
  <g fill="#f0b15a" opacity="0.22"><circle cx="240" cy="300" r="2"/><circle cx="420" cy="330" r="2"/><circle cx="600" cy="290" r="2"/><circle cx="700" cy="320" r="2"/><circle cx="880" cy="320" r="2"/><circle cx="1060" cy="300" r="2"/><circle cx="260" cy="440" r="2"/><circle cx="640" cy="440" r="2"/><circle cx="840" cy="450" r="2"/><circle cx="1020" cy="450" r="2"/></g>
  <rect x="0" y="98" width="1280" height="492" fill="#fffaf2" opacity="0.62"/>
  <circle cx="640" cy="250" r="260" fill="url(#glowW)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gWarmH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」を接続する基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#fdeccf"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#b8530e">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="126" font-size="13" font-weight="700" fill="#c98432">① 課題 ― このままでは届かない・回らない</text>
  <rect x="40" y="136" width="300" height="206" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="136" width="300" height="34" rx="14" fill="url(#gWarm)"/>
  <rect x="40" y="152" width="300" height="18" fill="url(#gWarm)"/>
  <circle cx="62" cy="153" r="12" fill="#ffffff"/>
  <g transform="translate(62,153)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -6 L6 5 L-6 5 Z"/></g>
  <circle cx="62" cy="155" r="1" fill="#d2772f"/>
  <text x="82" y="158" font-size="13" font-weight="700" fill="#ffffff">4つのギャップ</text>
  <text x="56" y="194" font-size="11.5" font-weight="700" fill="#b8530e">A 教員の業務負荷が急増</text>
  <text x="62" y="210" font-size="10.5" fill="#666">院生の多様化・申請/評価/添削で限界</text>
  <text x="56" y="234" font-size="11.5" font-weight="700" fill="#b8530e">B 人材育成が多様化・高度化</text>
  <text x="62" y="250" font-size="10.5" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <text x="56" y="274" font-size="11.5" font-weight="700" fill="#b8530e">C 大学→個人のミッシングリンク</text>
  <text x="62" y="290" font-size="10.5" fill="#666">支援が乱立・重複・分散し届かない</text>
  <text x="56" y="314" font-size="11.5" font-weight="700" fill="#b8530e">D 支援者の実践知が活かされない</text>
  <text x="62" y="330" font-size="10.5" fill="#666">反復・データ分散・異動でゼロリセット</text>
  <path d="M348 226 L368 226 L382 247 L368 268 L348 268 L362 247 Z" fill="#ef8b2e"/>
  <text x="392" y="126" font-size="13" font-weight="700" fill="#c98432">② 2本柱で打ち手 ― 課題A-Dに1:1で対応</text>
  <rect x="392" y="136" width="468" height="206" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="392" y="136" width="468" height="34" rx="14" fill="url(#gSun)"/>
  <rect x="392" y="152" width="468" height="18" fill="url(#gSun)"/>
  <circle cx="414" cy="153" r="12" fill="#ffffff"/>
  <g transform="translate(414,153)" stroke="#d2772f" stroke-width="1.8" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="436" y="158" font-size="13" font-weight="700" fill="#7a4406">アプリ（フロント） × AI基盤（裏側）</text>
  <rect x="404" y="178" width="222" height="76" rx="9" fill="#fff6e6" filter="url(#shSoft)"/>
  <text x="414" y="196" font-size="11.5" font-weight="700" fill="#b8530e">柱① アプリ ＝ 接続のフロント</text>
  <text x="414" y="214" font-size="10.5" fill="#555">A 多言語支援・ラボ共通支援で指導負担↓</text>
  <text x="414" y="231" font-size="10.5" fill="#555">C 学生ニーズ×全学支援情報を突合→直送</text>
  <text x="414" y="248" font-size="10.5" fill="#555">→ 必要な個人へダイレクト投下</text>
  <rect x="638" y="178" width="210" height="76" rx="9" fill="#fff6e6" filter="url(#shSoft)"/>
  <text x="648" y="196" font-size="11.5" font-weight="700" fill="#b8530e">柱② AI基盤 ＝ 接続の裏側</text>
  <text x="648" y="214" font-size="10.5" fill="#555">B CV DB＋AI伴走で段階別の研究力育成</text>
  <text x="648" y="231" font-size="10.5" fill="#555">D データ接続・RAGで反復/窓口を省力化</text>
  <text x="648" y="248" font-size="10.5" fill="#555">→ IR・成果・回答を自動収集・統合分析</text>
  <rect x="404" y="262" width="444" height="34" rx="8" fill="#fdeccf"/>
  <text x="626" y="284" font-size="12.5" font-weight="700" fill="#b8530e" text-anchor="middle">A→指導負担↓ ／ B→研究力↑ ／ C→個別最適に直送 ／ D→支援者を効率化</text>
  <rect x="404" y="304" width="444" height="30" rx="8" fill="#fff6e6"/>
  <text x="626" y="324" font-size="11" fill="#7a4406" text-anchor="middle">副次：許諾済データの共同研究利活用／統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M868 226 L888 226 L902 247 L888 268 L868 268 L882 247 Z" fill="#ef8b2e"/>
  <circle cx="1050" cy="239" r="118" fill="url(#burst)"/>
  <g stroke="#ffce4f" stroke-width="3" stroke-linecap="round" opacity="0.85"><path d="M1050 108 V128"/><path d="M1050 350 V370"/><path d="M919 239 H939"/><path d="M1161 239 H1181"/><path d="M958 147 L972 161"/><path d="M1128 317 L1142 331"/><path d="M1142 147 L1128 161"/><path d="M972 317 L958 331"/></g>
  <rect x="912" y="136" width="276" height="206" rx="14" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="936" cy="162" r="13" fill="#ffffff"/>
  <g transform="translate(936,162)" stroke="#d96a18" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="958" y="167" font-size="14" font-weight="700" fill="#ffffff">③ GOAL</text>
  <text x="936" y="200" font-size="16" font-weight="700" fill="#ffffff">接続が、躍動を生む</text>
  <text x="936" y="226" font-size="12" fill="#ffe9c9">情報がリンクするほど</text>
  <text x="936" y="244" font-size="12" fill="#ffe9c9">研究者と支援者の成果が連鎖</text>
  <text x="936" y="276" font-size="12" fill="#ffe9c9">→ 教員は研究へ・院生は伸びる</text>
  <text x="936" y="294" font-size="12" fill="#ffe9c9">→ 中退率↓ × 修了率↑ の好循環</text>
  <text x="936" y="322" font-size="12.5" font-weight="700" fill="#fff3df">自ら考える研究者が育つ大学へ</text>
  <text x="40" y="370" font-size="13" font-weight="700" fill="#c98432">想定インパクト ― KPI（すべて想定/試算）</text>
  <rect x="40" y="380" width="1200" height="118" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="380" width="1200" height="118" rx="14" fill="url(#gSun)" opacity="0.10"/>
  <rect x="40" y="380" width="300" height="118" rx="14" fill="url(#gWarm)"/>
  <rect x="56" y="396" width="20" height="20" rx="5" fill="#ffffff" opacity="0.9"/>
  <text x="82" y="412" font-size="13" font-weight="700" fill="#ffffff">主役KPI（想定/試算）</text>
  <text x="190" y="466" font-size="74" font-weight="700" fill="#ffffff" text-anchor="middle">+3h</text>
  <text x="190" y="488" font-size="13" fill="#ffe9c9" text-anchor="middle">教員の研究時間 ／ 週</text>
  <line x1="358" y1="404" x2="358" y2="474" stroke="#f0c889" stroke-width="1.4"/>
  <text x="438" y="446" font-size="44" font-weight="700" fill="#d96a18" text-anchor="middle">−50%</text>
  <text x="438" y="476" font-size="12" fill="#7a4406" text-anchor="middle">定型問い合わせ（試算）</text>
  <line x1="558" y1="404" x2="558" y2="474" stroke="#f0c889" stroke-width="1.4"/>
  <text x="660" y="446" font-size="44" font-weight="700" fill="#d96a18" text-anchor="middle">+20pt</text>
  <text x="660" y="476" font-size="12" fill="#7a4406" text-anchor="middle">院生の研究力（想定）</text>
  <line x1="772" y1="404" x2="772" y2="474" stroke="#f0c889" stroke-width="1.4"/>
  <text x="876" y="446" font-size="44" font-weight="700" fill="#d96a18" text-anchor="middle">+5pt</text>
  <text x="876" y="476" font-size="12" fill="#7a4406" text-anchor="middle">修了率（中退率↓・試算）</text>
  <line x1="990" y1="404" x2="990" y2="474" stroke="#f0c889" stroke-width="1.4"/>
  <text x="1115" y="430" font-size="12.5" font-weight="700" fill="#b8530e" text-anchor="middle">数値は導入前の想定値</text>
  <text x="1115" y="450" font-size="11" fill="#7a4406" text-anchor="middle">実測で検証・更新する</text>
  <text x="1115" y="470" font-size="11" fill="#7a4406" text-anchor="middle">前提：段階導入を想定</text>
  <text x="40" y="524" font-size="13" font-weight="700" fill="#c98432">ロードマップ ― 段階的に提供価値を拡大</text>
  <path d="M160 596 C360 596 420 576 600 572 S940 552 1060 548" stroke="#eaa84e" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="196" y="574" width="248" height="48" rx="10" fill="#fff6e6" filter="url(#shSoft)"/>
  <text x="216" y="595" font-size="13" font-weight="700" fill="#b8530e">接続アプリを公開</text>
  <text x="216" y="613" font-size="11" fill="#555">情報・支援・機会を一つに集約</text>
  <rect x="606" y="554" width="248" height="48" rx="10" fill="#fff6e6" filter="url(#shSoft)"/>
  <text x="626" y="575" font-size="13" font-weight="700" fill="#b8530e">AI基盤で伴走</text>
  <text x="626" y="593" font-size="11" fill="#555">CV DB×AIで個別最適・実践知展開</text>
  <rect x="992" y="534" width="248" height="48" rx="10" fill="#fff6e6" filter="url(#shSoft)"/>
  <text x="1012" y="555" font-size="13" font-weight="700" fill="#b8530e">全学・経営へ展開</text>
  <text x="1012" y="573" font-size="11" fill="#555">統合分析でIR・共同研究・外販</text>
  <circle cx="160" cy="596" r="21" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="160" y="603" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="600" cy="572" r="21" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="600" y="579" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="978" cy="548" r="21" fill="url(#gWarm)" filter="url(#sh)"/>
  <text x="978" y="555" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M40 638 L1206 638 L1240 670 L1206 702 L40 702 Z" fill="url(#gWarmH)"/>
  <text x="623" y="678" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散をつなぐハブとなり、研究者と支援者が躍動し続ける Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。横3幕フロー(①課題A-D→②2本柱(アプリ×AI基盤)→③GOALバースト)＋主役KPIバンド(巨大数字+3h)＋ロードマップLv1-3。背景=世界地図風ドット&結線(都市ノード)。配色=橙/黄の温かみ、アクセント焦点=goalBurst。KPIは全て「想定/試算」明示。課題A-D↔打ち手A-Dを1:1対応。 -->
