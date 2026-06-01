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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f5fa6"/><stop offset="1" stop-color="#103e6e"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gTealH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3aa657"/><stop offset="1" stop-color="#1d7a38"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7fc4"/><stop offset="1" stop-color="#1f5e96"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe79a" stop-opacity="0.95"/><stop offset="0.6" stop-color="#ffd24d" stop-opacity="0.35"/><stop offset="1" stop-color="#ffd24d" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 H0 V32" fill="none" stroke="#2f7fc4" stroke-width="0.5" stroke-opacity="0.13"/></pattern>
    <pattern id="gridFine" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M8 0 H0 V8" fill="none" stroke="#2f7fc4" stroke-width="0.35" stroke-opacity="0.07"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#103e6e" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#103e6e" flood-opacity="0.13"/></filter>
    <marker id="mDim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M1 1 L7 4 L1 7" fill="none" stroke="#2f7fc4" stroke-width="1" stroke-opacity="0.5"/></marker>
  </defs>
  <rect x="0" y="90" width="1280" height="630" fill="#f3f8fc"/>
  <rect x="0" y="90" width="1280" height="630" fill="url(#gridFine)"/>
  <rect x="0" y="90" width="1280" height="630" fill="url(#grid)"/>
  <path d="M30 104 H1250" stroke="#2f7fc4" stroke-width="0.8" stroke-opacity="0.4" stroke-dasharray="2 5" marker-start="url(#mDim)" marker-end="url(#mDim)" fill="none"/>
  <text x="640" y="100" font-size="10" fill="#2f7fc4" fill-opacity="0.55" text-anchor="middle" font-style="italic">DESIGN BLUEPRINT — Nexus University 構想 / 千葉大学</text>
  <path d="M20 116 V700" stroke="#2f7fc4" stroke-width="0.8" stroke-opacity="0.35" stroke-dasharray="2 5" marker-start="url(#mDim)" marker-end="url(#mDim)" fill="none"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHead)"/>
  <text x="40" y="37" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 〈研究×学び〉接続基盤</text>
  <rect x="1106" y="11" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="17" width="112" height="22"/>
  <rect x="0" y="56" width="1280" height="34" fill="#dcebf7"/>
  <text x="40" y="78" font-size="15" font-weight="700" fill="#103e6e">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="44" y="124" font-size="13" font-weight="700" fill="#7a8aa0">① 課題（A–D）</text>
  <rect x="40" y="132" width="286" height="416" rx="16" fill="#fff5ee" stroke="#f1d4bd" stroke-width="1" filter="url(#sh)"/>
  <rect x="40" y="132" width="286" height="34" rx="16" fill="url(#gWarn)"/>
  <rect x="40" y="149" width="286" height="17" fill="url(#gWarn)"/>
  <circle cx="63" cy="149" r="12" fill="#ffffff"/>
  <g transform="translate(63,150)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -6 L6 5 L-6 5 Z"/></g>
  <circle cx="63" cy="151" r="1" fill="#d2772f"/>
  <text x="84" y="155" font-size="13.5" font-weight="700" fill="#ffffff">このままでは立ち行かない</text>
  <rect x="54" y="178" width="258" height="84" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="74" cy="198" r="11" fill="#fbe5d3"/><text x="74" y="203" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="92" y="195" font-size="12.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
  <text x="64" y="222" font-size="11" fill="#555">院生の多様化（社会人・留学生・他分野）</text>
  <text x="64" y="240" font-size="11" fill="#555">研究費申請・評価資料・学振添削・全員留学</text>
  <text x="64" y="256" font-size="11" font-weight="700" fill="#c4632a">→ 1人の負担が限界</text>
  <rect x="54" y="270" width="258" height="64" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="74" cy="290" r="11" fill="#fbe5d3"/><text x="74" y="295" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="92" y="287" font-size="12.5" font-weight="700" fill="#c4632a">育成が多様化・高度化</text>
  <text x="64" y="312" font-size="11" fill="#555">成功モデルが多様化／求める水準が上昇</text>
  <text x="64" y="328" font-size="11" font-weight="700" fill="#c4632a">→ 個別育成と資源の最適投下が必須</text>
  <rect x="54" y="342" width="258" height="64" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="74" cy="362" r="11" fill="#fbe5d3"/><text x="74" y="367" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="92" y="359" font-size="12.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
  <text x="64" y="384" font-size="11" fill="#555">支援が乱立・重複・分散している</text>
  <text x="64" y="400" font-size="11" font-weight="700" fill="#c4632a">→ 真に必要な個人に届かない</text>
  <rect x="54" y="414" width="258" height="64" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="74" cy="434" r="11" fill="#fbe5d3"/><text x="74" y="439" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="92" y="431" font-size="12.5" font-weight="700" fill="#c4632a">支援者の実践知が死蔵</text>
  <text x="64" y="456" font-size="11" fill="#555">同じ手続きの反復／システム乱立・分散</text>
  <text x="64" y="472" font-size="11" font-weight="700" fill="#c4632a">→ 異動でゼロリセット</text>
  <rect x="54" y="488" width="258" height="48" rx="9" fill="#fff0e4"/>
  <text x="183" y="508" font-size="11" fill="#a85a23" text-anchor="middle">許諾済データは共有・利活用が未着手</text>
  <text x="183" y="525" font-size="11" fill="#a85a23" text-anchor="middle">（学内・行政・企業の共同研究の芽）</text>
  <path d="M330 332 L350 332 L364 353 L350 374 L330 374 L344 353 Z" fill="#1A7A5E"/>
  <text x="572" y="124" font-size="13" font-weight="700" fill="#7a8aa0">② 打ち手 ＝ 2本柱（アプリ × AI基盤）</text>
  <rect x="372" y="132" width="488" height="416" rx="16" fill="#eef9f5" stroke="#cfe6dd" stroke-width="1" filter="url(#sh)"/>
  <rect x="372" y="132" width="488" height="34" rx="16" fill="url(#gTealH)"/>
  <rect x="372" y="149" width="488" height="17" fill="url(#gTealH)"/>
  <circle cx="396" cy="149" r="12" fill="#ffffff"/>
  <g transform="translate(396,149)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="416" y="155" font-size="13.5" font-weight="700" fill="#ffffff">課題と1:1で対応する打ち手</text>
  <rect x="386" y="178" width="226" height="358" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="386" y="178" width="226" height="30" rx="11" fill="#1f8f6e"/>
  <rect x="386" y="192" width="226" height="16" fill="#1f8f6e"/>
  <rect x="402" y="186" width="22" height="14" rx="3" fill="#ffffff"/>
  <rect x="404" y="188" width="18" height="10" rx="2" fill="#1f8f6e"/>
  <text x="434" y="198" font-size="12.5" font-weight="700" fill="#ffffff">柱① 研究×学びアプリ</text>
  <rect x="398" y="216" width="202" height="74" rx="8" fill="#f2faf7"/>
  <circle cx="416" cy="234" r="10" fill="#d8efe6"/><text x="416" y="239" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="434" y="231" font-size="11.5" font-weight="700" fill="#16624b">指導負担を軽減</text>
  <text x="408" y="251" font-size="10.5" fill="#555">AI多言語支援／ラボ共通支援</text>
  <text x="408" y="267" font-size="10.5" fill="#555">支援者どうしを接続</text>
  <text x="408" y="283" font-size="10.5" font-weight="700" fill="#16624b">→ 研究時間を確保</text>
  <rect x="398" y="298" width="202" height="106" rx="8" fill="#f2faf7"/>
  <circle cx="416" cy="316" r="10" fill="#d8efe6"/><text x="416" y="321" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="434" y="313" font-size="11.5" font-weight="700" fill="#16624b">院生の研究力を向上</text>
  <text x="408" y="333" font-size="10.5" fill="#555">CVデータベース（学内外の</text>
  <text x="408" y="348" font-size="10.5" fill="#555">学習・スキル・資格を記録）</text>
  <text x="408" y="365" font-size="10.5" fill="#555">＋AI伴走の段階別 個別支援</text>
  <text x="408" y="382" font-size="10.5" fill="#555">留学・ラボ・企業マッチング</text>
  <text x="408" y="398" font-size="10.5" font-weight="700" fill="#16624b">→ 一人ひとりを高度化</text>
  <rect x="398" y="412" width="202" height="112" rx="8" fill="#f2faf7"/>
  <circle cx="416" cy="430" r="10" fill="#d8efe6"/><text x="416" y="435" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="434" y="427" font-size="11.5" font-weight="700" fill="#16624b">個別最適を直に届ける</text>
  <text x="408" y="447" font-size="10.5" fill="#555">①学生入力ニーズ ＋</text>
  <text x="408" y="463" font-size="10.5" fill="#555">②全学の支援情報を突合</text>
  <path d="M414 472 H560" stroke="#9bbcb1" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="408" y="491" font-size="10.5" font-weight="700" fill="#16624b">→ 必要な個人へダイレクト投下</text>
  <text x="408" y="510" font-size="10" fill="#888">乱立・重複・分散を解消</text>
  <rect x="624" y="178" width="226" height="358" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="624" y="178" width="226" height="30" rx="11" fill="#125642"/>
  <rect x="624" y="192" width="226" height="16" fill="#125642"/>
  <g transform="translate(644,193)" stroke="#ffffff" stroke-width="1.5" fill="none"><circle cx="0" cy="0" r="5"/><circle cx="0" cy="0" r="2"/></g>
  <text x="660" y="198" font-size="12.5" font-weight="700" fill="#ffffff">柱② AIエージェント基盤</text>
  <rect x="636" y="216" width="202" height="150" rx="8" fill="#eef6f3"/>
  <circle cx="654" cy="234" r="10" fill="#cfe6dd"/><text x="654" y="239" font-size="12" font-weight="700" fill="#0f4a39" text-anchor="middle">D</text>
  <text x="672" y="231" font-size="11.5" font-weight="700" fill="#0f4a39">支援者の労力を削減</text>
  <text x="646" y="251" font-size="10.5" fill="#555">データを基盤上で接続し</text>
  <text x="646" y="267" font-size="10.5" fill="#555">AIで分析</text>
  <text x="646" y="287" font-size="10.5" fill="#555">反復・窓口業務を RAG で省力化</text>
  <text x="646" y="307" font-size="10.5" fill="#555">IR・成果・回答を自動収集し</text>
  <text x="646" y="323" font-size="10.5" fill="#555">統合分析</text>
  <text x="646" y="343" font-size="10.5" font-weight="700" fill="#0f4a39">→ 実践知を蓄積・全学展開</text>
  <text x="646" y="360" font-size="10" fill="#888">異動でゼロリセットしない</text>
  <rect x="636" y="376" width="202" height="148" rx="8" fill="#eef6f3"/>
  <text x="646" y="396" font-size="11" font-weight="700" fill="#0f4a39">副次効果</text>
  <circle cx="650" cy="414" r="2.2" fill="#1f8f6e"/><text x="660" y="418" font-size="10.5" fill="#555">許諾済データの共有・利活用</text>
  <text x="660" y="434" font-size="10" fill="#888">学内・行政・企業の共同研究</text>
  <circle cx="650" cy="452" r="2.2" fill="#1f8f6e"/><text x="660" y="456" font-size="10.5" fill="#555">統合分析で経営判断を迅速化</text>
  <circle cx="650" cy="476" r="2.2" fill="#1f8f6e"/><text x="660" y="480" font-size="10.5" fill="#555">アプリの外販（収益の芽）</text>
  <rect x="646" y="494" width="182" height="22" rx="6" fill="#dcefe7"/>
  <text x="737" y="509" font-size="10.5" font-weight="700" fill="#16624b" text-anchor="middle">基盤が繋ぐほど価値が連鎖</text>
  <path d="M864 332 L884 332 L898 353 L884 374 L864 374 L878 353 Z" fill="#3aa657"/>
  <text x="1006" y="124" font-size="13" font-weight="700" fill="#7a8aa0">③ GOAL</text>
  <circle cx="1050" cy="300" r="150" fill="url(#burst)"/>
  <rect x="906" y="132" width="334" height="416" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="934" cy="162" r="14" fill="#ffffff"/>
  <g transform="translate(934,162)" stroke="#1d7a38" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="958" y="167" font-size="15" font-weight="700" fill="#ffffff">向かう先</text>
  <text x="930" y="206" font-size="20" font-weight="700" fill="#ffffff">接続が、躍動を生む。</text>
  <text x="930" y="234" font-size="13" fill="#e3f4e8">研究者と支援者が躍動する大学へ</text>
  <rect x="930" y="252" width="286" height="1" fill="#ffffff" opacity="0.4"/>
  <text x="930" y="280" font-size="12.5" fill="#eaf7ee">・教員の手間↓ × 研究力↑</text>
  <text x="930" y="304" font-size="12.5" fill="#eaf7ee">・必要な人に支援が届く</text>
  <text x="930" y="328" font-size="12.5" fill="#eaf7ee">・実践知が蓄積し全学で連鎖</text>
  <text x="930" y="352" font-size="12.5" fill="#eaf7ee">・データ統合で経営判断が速い</text>
  <rect x="930" y="372" width="286" height="156" rx="12" fill="#ffffff" opacity="0.94"/>
  <text x="945" y="394" font-size="11.5" font-weight="700" fill="#1d7a38">想定KPI（想定／試算値）</text>
  <text x="952" y="436" font-size="34" font-weight="700" fill="#1d7a38">＋3h</text>
  <text x="952" y="452" font-size="10.5" fill="#666">教員の研究時間／週</text>
  <text x="1092" y="436" font-size="34" font-weight="700" fill="#d2772f">−50%</text>
  <text x="1092" y="452" font-size="10.5" fill="#666">定型問い合わせ</text>
  <text x="952" y="500" font-size="34" font-weight="700" fill="#1d7a38">＋20pt</text>
  <text x="952" y="516" font-size="10.5" fill="#666">院生の研究力</text>
  <text x="1092" y="500" font-size="34" font-weight="700" fill="#0f5fa6">＋5pt</text>
  <text x="1092" y="516" font-size="10.5" fill="#666">修了率（中退率↓）</text>
  <text x="44" y="572" font-size="12.5" font-weight="700" fill="#103e6e">ロードマップ ― 段階的に接続範囲を拡大（Level 1 → 3）</text>
  <path d="M120 620 C360 620 380 612 600 608 S980 600 1100 596" stroke="#9bbac7" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="150" y="600" width="252" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="176" y="624" font-size="13" font-weight="700" fill="#103e6e">L1 研究×学びアプリ</text>
  <text x="176" y="645" font-size="11" fill="#555">情報・資源・機会を一つに集約</text>
  <rect x="540" y="588" width="252" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="566" y="612" font-size="13" font-weight="700" fill="#16624b">L2 AIエージェント基盤</text>
  <text x="566" y="633" font-size="11" fill="#555">伴走支援・負担軽減・実践知展開</text>
  <rect x="936" y="578" width="252" height="58" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="962" y="602" font-size="13" font-weight="700" fill="#1d7a38">L3 全学・社会へ接続</text>
  <text x="962" y="623" font-size="11" fill="#555">教育・研究・事務・共同研究へ拡大</text>
  <circle cx="120" cy="620" r="21" fill="url(#gBlue)" filter="url(#sh)"/><text x="120" y="627" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="510" cy="608" r="21" fill="url(#gTeal)" filter="url(#sh)"/><text x="510" y="615" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="906" cy="596" r="21" fill="url(#gGoal)" filter="url(#sh)"/><text x="906" y="603" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M40 678 L1206 678 L1240 699 L1206 720 L40 720 Z" fill="url(#gHead)"/>
  <text x="623" y="705" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">分散を「接続」するハブとなり、研究者と支援者が躍動し続ける Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤[打ち手A-Dを1:1対応]→③GOAL)＋下段ロードマップ旅(L1-3)。地=極薄ブループリント方眼+寸法線で設計図トーン。配色=teal+橙(課題)+緑(GOAL)+青(背景/L1)の多色リッチ。追加要素=goalBurst(放射グロー)・kpiBand(白パネル)・巨大数字KPI(34px,想定/試算明示)。 -->
