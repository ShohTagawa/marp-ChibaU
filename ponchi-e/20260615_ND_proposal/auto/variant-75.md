---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa088"/><stop offset="1" stop-color="#0e6e5c"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d7bd4"/><stop offset="1" stop-color="#2456a8"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a52"/><stop offset="1" stop-color="#d2742a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2fae6e"/><stop offset="1" stop-color="#157a45"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#cfe0f5" stop-opacity="0.55"/><stop offset="1" stop-color="#9fc0ec" stop-opacity="0.30"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2456a8" stop-opacity="0.10"/><stop offset="1" stop-color="#2456a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#1d3a63" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1d3a63" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="98" width="1280" height="492" fill="#f6f9fc"/>
  <g opacity="0.9"><path d="M-40 720 L360 720 L760 200 L360 200 Z" fill="url(#gRibbon)"/><path d="M300 720 L700 720 L1100 200 L700 200 Z" fill="url(#gRibbon)" opacity="0.7"/><path d="M640 720 L1040 720 L1380 240 L980 240 Z" fill="url(#gRibbon)" opacity="0.5"/></g>
  <g fill="none" stroke="#2456a8" stroke-width="3" opacity="0.16"><path d="M120 640 L300 380"/><path d="M210 640 L390 380"/><path d="M520 600 L700 340"/><path d="M900 560 L1080 300"/></g>
  <circle cx="1080" cy="300" r="260" fill="url(#gGlow)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1104" y="14" width="140" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ ― 千葉大学</text>
  <text x="40" y="128" font-size="13" font-weight="700" fill="#7a8aa0">① いま起きている課題</text>
  <rect x="40" y="140" width="300" height="324" rx="18" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="140" width="300" height="44" rx="18" fill="url(#gWarn)"/>
  <rect x="40" y="160" width="300" height="24" fill="url(#gWarn)"/>
  <circle cx="68" cy="162" r="15" fill="#ffffff"/>
  <g transform="translate(68,163)" stroke="#d2742a" stroke-width="2.2" fill="none"><path d="M0 -8 L8 7 L-8 7 Z"/></g>
  <circle cx="68" cy="166" r="1.2" fill="#d2742a"/>
  <text x="92" y="168" font-size="15" font-weight="700" fill="#ffffff">支援が「届かない」</text>
  <text x="62" y="212" font-size="13" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="62" y="231" font-size="11.5" fill="#666">院生の多様化＋申請・評価・添削で限界</text>
  <text x="62" y="262" font-size="13" font-weight="700" fill="#c4632a">B 人材育成が多様化・高度化</text>
  <text x="62" y="281" font-size="11.5" fill="#666">求める水準↑、個別育成と資源配分が必須</text>
  <text x="62" y="312" font-size="13" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="62" y="331" font-size="11.5" fill="#666">支援が乱立・重複、必要な個人に届かない</text>
  <text x="62" y="362" font-size="13" font-weight="700" fill="#c4632a">D 実践知が蓄積・活用されない</text>
  <text x="62" y="381" font-size="11.5" fill="#666">同手続きの反復、異動でゼロリセット</text>
  <rect x="58" y="404" width="264" height="44" rx="10" fill="#FBEDE2"/>
  <text x="190" y="431" font-size="12.5" font-weight="700" fill="#c4632a" text-anchor="middle">A–D それぞれに 1:1 で打ち手を用意</text>
  <path d="M346 286 L366 286 L382 308 L366 330 L346 330 L362 308 Z" fill="#2456a8"/>
  <text x="406" y="128" font-size="13" font-weight="700" fill="#7a8aa0">② 2本柱でつなぐ ― アプリ × AI基盤</text>
  <rect x="392" y="140" width="468" height="324" rx="18" fill="#ffffff" filter="url(#sh)"/>
  <rect x="392" y="140" width="468" height="44" rx="18" fill="url(#gTeal)"/>
  <rect x="392" y="160" width="468" height="24" fill="url(#gTeal)"/>
  <circle cx="420" cy="162" r="15" fill="#ffffff"/>
  <g transform="translate(420,162)" stroke="#0e6e5c" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3"/></g>
  <text x="444" y="168" font-size="15" font-weight="700" fill="#ffffff">接続基盤 = NEXUS</text>
  <rect x="410" y="200" width="200" height="150" rx="12" fill="#F2F8FF" filter="url(#shS)"/>
  <text x="424" y="224" font-size="13" font-weight="700" fill="#2456a8">柱① アプリ（フロント）</text>
  <rect x="424" y="238" width="62" height="96" rx="10" fill="#E4EEFB"/>
  <rect x="429" y="243" width="52" height="86" rx="8" fill="#ffffff" stroke="#3d7bd4" stroke-width="1.4"/>
  <rect x="429" y="243" width="52" height="15" rx="8" fill="#3d7bd4"/>
  <rect x="429" y="251" width="52" height="7" fill="#3d7bd4"/>
  <rect x="436" y="266" width="38" height="7" rx="3" fill="#E4EEFB"/>
  <circle cx="441" cy="285" r="3.6" fill="#cdddf5"/><rect x="448" y="282" width="26" height="5" rx="2" fill="#cdddf5"/>
  <circle cx="441" cy="299" r="3.6" fill="#cdddf5"/><rect x="448" y="296" width="26" height="5" rx="2" fill="#cdddf5"/>
  <circle cx="441" cy="313" r="3.6" fill="#cdddf5"/><rect x="448" y="310" width="26" height="5" rx="2" fill="#cdddf5"/>
  <text x="498" y="262" font-size="12" font-weight="700" fill="#1d4a8a">A 教員の指導負担↓</text>
  <text x="498" y="280" font-size="11" fill="#555">多言語支援・ラボ共通支援</text>
  <text x="498" y="300" font-size="12" font-weight="700" fill="#1d4a8a">B 院生の研究力↑</text>
  <text x="498" y="318" font-size="11" fill="#555">CV-DB＋AI伴走で段階別個別支援</text>
  <rect x="630" y="200" width="212" height="150" rx="12" fill="#EFFAF5" filter="url(#shS)"/>
  <text x="644" y="224" font-size="13" font-weight="700" fill="#0e6e5c">柱② AI基盤（裏側）</text>
  <circle cx="664" cy="252" r="13" fill="#d8f0e6"/>
  <g transform="translate(664,252)" stroke="#0e6e5c" stroke-width="1.6" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="686" y="248" font-size="12" font-weight="700" fill="#0e6e5c">C 個別最適を直に届ける</text>
  <text x="686" y="266" font-size="10.5" fill="#555">学生ニーズ × 全学支援情報を突合</text>
  <text x="644" y="298" font-size="12" font-weight="700" fill="#0e6e5c">D 支援者の労力↓・効率化</text>
  <text x="644" y="316" font-size="10.5" fill="#555">RAGで窓口省力・IR/成果を統合分析</text>
  <text x="644" y="336" font-size="10.5" fill="#555">許諾済データを基盤上で接続・分析</text>
  <rect x="410" y="362" width="432" height="40" rx="9" fill="#E4F2EC"/>
  <text x="626" y="386" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">2本柱で 教員を増やさず 個別に伴走 ＝ だから接続が要</text>
  <rect x="410" y="412" width="432" height="40" rx="9" fill="#F2F8FF" stroke="#cdddf5" stroke-width="1"/>
  <text x="424" y="437" font-size="11.5" font-weight="700" fill="#2456a8">＋副次効果</text>
  <text x="626" y="437" font-size="11" fill="#555" text-anchor="middle">許諾済データの共同研究 ／ 統合分析で経営判断を迅速化 ／ アプリ外販</text>
  <path d="M866 286 L886 286 L902 308 L886 330 L866 330 L882 308 Z" fill="#2fae6e"/>
  <text x="926" y="128" font-size="13" font-weight="700" fill="#7a8aa0">③ 向かう先（GOAL）</text>
  <rect x="912" y="140" width="328" height="324" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="940" cy="170" r="16" fill="#ffffff"/>
  <g transform="translate(940,170)" stroke="#157a45" stroke-width="2.2" fill="none"><circle cx="0" cy="0" r="8.5"/><circle cx="0" cy="0" r="3.5"/></g>
  <circle cx="940" cy="170" r="1.4" fill="#157a45"/>
  <text x="966" y="176" font-size="16" font-weight="700" fill="#ffffff">躍動する大学へ</text>
  <text x="936" y="220" font-size="20" font-weight="700" fill="#ffffff">教員の手間↓ × 研究力↑</text>
  <text x="936" y="250" font-size="13" fill="#DDF1E6">情報がリンクするほど、学内の</text>
  <text x="936" y="270" font-size="13" fill="#DDF1E6">成果が連鎖的に伸びる好循環</text>
  <text x="936" y="306" font-size="12.5" fill="#DDF1E6">研究者と支援者が躍動し、</text>
  <text x="936" y="326" font-size="12.5" fill="#DDF1E6">自ら考える学生が育つ</text>
  <rect x="936" y="350" width="280" height="98" rx="12" fill="#ffffff" opacity="0.16"/>
  <text x="950" y="374" font-size="11.5" font-weight="700" fill="#ffffff">想定KPI（試算／達成保証ではない）</text>
  <text x="950" y="398" font-size="12" fill="#eafaf1">研究時間 <tspan font-size="17" font-weight="700">+3h/週</tspan>　定型問合せ <tspan font-size="17" font-weight="700">-50%</tspan></text>
  <text x="950" y="430" font-size="12" fill="#eafaf1">研究力 <tspan font-size="17" font-weight="700">+20pt</tspan>　修了率 <tspan font-size="17" font-weight="700">+5pt</tspan> (中退↓)</text>
  <text x="40" y="500" font-size="13" font-weight="700" fill="#7a8aa0">ロードマップ ― 接続を段階的に広げる</text>
  <path d="M150 560 C360 560 420 540 600 532 S960 514 1080 506" stroke="#9fc0ec" stroke-width="4" stroke-dasharray="2 11" stroke-linecap="round" fill="none"/>
  <rect x="190" y="540" width="270" height="60" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="214" y="565" font-size="14" font-weight="700" fill="#2456a8">アプリで情報を集約</text>
  <text x="214" y="586" font-size="11.5" fill="#555">学内の情報・資源・機会を一つに</text>
  <rect x="600" y="522" width="270" height="60" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="624" y="547" font-size="14" font-weight="700" fill="#0e6e5c">AI基盤で個別伴走</text>
  <text x="624" y="568" font-size="11.5" fill="#555">CV-DB＋RAGで支援を直接投下</text>
  <rect x="966" y="496" width="274" height="60" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="990" y="521" font-size="14" font-weight="700" fill="#157a45">全学・外部へ展開</text>
  <text x="990" y="542" font-size="11.5" fill="#555">経営判断・共同研究・外販へ拡大</text>
  <circle cx="150" cy="560" r="24" fill="url(#gBlue)" filter="url(#sh)"/>
  <text x="150" y="568" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="600" cy="532" r="24" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="600" y="540" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="1030" cy="506" r="24" fill="url(#gGoal)" filter="url(#sh)"/>
  <text x="1030" y="514" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M40 624 L1206 624 L1240 662 L1206 700 L40 700 Z" fill="url(#gHead)"/>
  <text x="623" y="668" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">分散をつなぐ Nexus が、院生の研究力と大学の成果を伸ばし続ける</text>
</svg>

<!-- variant-75: 横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤[A-D打ち手1:1]→③GOAL)＋下段ロードマップ旅(Level1-3)。背景は左下→右上へ昇る半透明青リボン/シェブロンで前進エネルギー。多色リッチ(teal+橙+緑GOAL+青背景)。airy密度。appMockup/kpiBand(想定KPI明示)/stageBand/副次効果を内包。 -->
