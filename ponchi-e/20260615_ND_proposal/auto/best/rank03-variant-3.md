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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e5d72"/><stop offset="1" stop-color="#10806a"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14a08a"/><stop offset="1" stop-color="#0c6a73"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef9a52"/><stop offset="1" stop-color="#d9722a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f9e5c"/><stop offset="1" stop-color="#15803d"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e5d72"/><stop offset="1" stop-color="#14a08a"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#14a08a" stop-opacity="0.22"/><stop offset="1" stop-color="#14a08a" stop-opacity="0"/></radialGradient>
    <radialGradient id="bgGlow" cx="50%" cy="42%" r="62%"><stop offset="0" stop-color="#eaf6f3"/><stop offset="1" stop-color="#dfeef4"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0c4f59" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c4f59" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0c6a73"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#bgGlow)"/>
  <g stroke="#1a8a9a" stroke-width="1" fill="none" opacity="0.08"><circle cx="640" cy="360" r="300"/><ellipse cx="640" cy="360" rx="300" ry="120"/><ellipse cx="640" cy="360" rx="300" ry="210"/><ellipse cx="640" cy="360" rx="160" ry="300"/><ellipse cx="640" cy="360" rx="80" ry="300"/><line x1="340" y1="360" x2="940" y2="360"/><line x1="640" y1="60" x2="640" y2="660"/></g>
  <g stroke="#127a86" stroke-width="1" stroke-dasharray="2 7" fill="none" opacity="0.10"><path d="M120 200 L420 150 L760 240 L1120 170"/><path d="M150 540 L500 600 L880 520 L1150 580"/><path d="M200 360 L560 300 L900 400 L1160 330"/></g>
  <g fill="#127a86" opacity="0.10"><circle cx="420" cy="150" r="3"/><circle cx="760" cy="240" r="3"/><circle cx="500" cy="600" r="3"/><circle cx="880" cy="520" r="3"/><circle cx="900" cy="400" r="3"/><circle cx="1120" cy="170" r="3"/></g>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHdr)"/>
  <text x="40" y="38" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究 × 学び」接続基盤</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#dcefe8"/>
  <text x="40" y="80" font-size="15.5" font-weight="700" fill="#0c6a73">学内に散在する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <ellipse cx="640" cy="318" rx="250" ry="190" fill="url(#glow)"/>
  <g stroke="#0c6a73" stroke-width="3.4" fill="none" opacity="0.9">
    <path d="M340 218 C480 250 540 280 560 300" marker-end="url(#mA)"/>
    <path d="M940 218 C800 250 740 280 720 300" marker-end="url(#mA)"/>
    <path d="M340 432 C480 400 540 372 560 350" marker-end="url(#mA)"/>
    <path d="M940 432 C800 400 740 372 720 350" marker-end="url(#mA)"/>
  </g>
  <circle cx="640" cy="325" r="92" fill="url(#gNexus)" filter="url(#sh)"/>
  <circle cx="640" cy="325" r="92" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.45"/>
  <g transform="translate(640,272)" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.92"><circle cx="0" cy="0" r="11"/><circle cx="-15" cy="13" r="6"/><circle cx="15" cy="13" r="6"/><circle cx="0" cy="20" r="6"/><path d="M0 11 L0 14 M-7 7 L-12 10 M7 7 L12 10"/></g>
  <text x="640" y="330" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="640" y="356" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="384" font-size="11.5" fill="#d6f3ec" text-anchor="middle">データ × AI × 人を束ねる</text>
  <g>
    <rect x="40" y="120" width="288" height="106" rx="15" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="40" y="120" width="6" height="106" rx="3" fill="url(#gWarn)"/>
    <circle cx="74" cy="150" r="15" fill="#fbe7d6"/><text x="74" y="156" font-size="16" font-weight="700" fill="#cf6b22" text-anchor="middle">A</text>
    <text x="98" y="146" font-size="14.5" font-weight="700" fill="#cf6b22">課題：教員の業務負荷が急増</text>
    <text x="98" y="167" font-size="11.5" fill="#555">院生の多様化(社会人・留学生・他分野)</text>
    <text x="98" y="184" font-size="11.5" fill="#555">＋申請・評価・添削・全員留学で限界</text>
    <rect x="62" y="194" width="252" height="24" rx="7" fill="#e9f7f3"/>
    <text x="74" y="210" font-size="11.5" font-weight="700" fill="#0c6a73">打ち手：AI多言語支援・ラボ共通支援で時間確保</text>
  </g>
  <g>
    <rect x="952" y="120" width="288" height="106" rx="15" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="1234" y="120" width="6" height="106" rx="3" fill="url(#gWarn)"/>
    <circle cx="986" cy="150" r="15" fill="#fbe7d6"/><text x="986" y="156" font-size="16" font-weight="700" fill="#cf6b22" text-anchor="middle">B</text>
    <text x="1010" y="146" font-size="14.5" font-weight="700" fill="#cf6b22">課題：人材育成の多様化・高度化</text>
    <text x="1010" y="167" font-size="11.5" fill="#555">成功モデル多様化・求める水準が上昇</text>
    <text x="1010" y="184" font-size="11.5" fill="#555">個別の能力育成と資源最適投下が必須</text>
    <rect x="974" y="194" width="252" height="24" rx="7" fill="#e9f7f3"/>
    <text x="986" y="210" font-size="11.5" font-weight="700" fill="#0c6a73">打ち手：CV-DB＋AI伴走で段階別マッチング</text>
  </g>
  <g>
    <rect x="40" y="424" width="288" height="106" rx="15" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="40" y="424" width="6" height="106" rx="3" fill="url(#gWarn)"/>
    <circle cx="74" cy="454" r="15" fill="#fbe7d6"/><text x="74" y="460" font-size="16" font-weight="700" fill="#cf6b22" text-anchor="middle">C</text>
    <text x="98" y="450" font-size="14.5" font-weight="700" fill="#cf6b22">課題：大学→個人のミッシングリンク</text>
    <text x="98" y="471" font-size="11.5" fill="#555">支援が乱立・重複・分散</text>
    <text x="98" y="488" font-size="11.5" fill="#555">真に必要な個人に届かない</text>
    <rect x="62" y="498" width="252" height="24" rx="7" fill="#e9f7f3"/>
    <text x="74" y="514" font-size="11.5" font-weight="700" fill="#0c6a73">打ち手：ニーズ×全学支援を突合し直に投下</text>
  </g>
  <g>
    <rect x="952" y="424" width="288" height="106" rx="15" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="1234" y="424" width="6" height="106" rx="3" fill="url(#gWarn)"/>
    <circle cx="986" cy="454" r="15" fill="#fbe7d6"/><text x="986" y="460" font-size="16" font-weight="700" fill="#cf6b22" text-anchor="middle">D</text>
    <text x="1010" y="450" font-size="14.5" font-weight="700" fill="#cf6b22">課題：実践知が共有・蓄積されない</text>
    <text x="1010" y="471" font-size="11.5" fill="#555">同じ手続きの反復／データ分散</text>
    <text x="1010" y="488" font-size="11.5" fill="#555">異動でゼロリセット</text>
    <rect x="974" y="498" width="252" height="24" rx="7" fill="#e9f7f3"/>
    <text x="986" y="514" font-size="11.5" font-weight="700" fill="#0c6a73">打ち手：基盤で接続しRAG省力化・統合分析</text>
  </g>
  <g>
    <rect x="372" y="118" width="148" height="40" rx="20" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="396" cy="138" r="13" fill="#e9f7f3"/><g transform="translate(396,138)" stroke="#0c6a73" stroke-width="1.8" fill="none"><rect x="-6" y="-8" width="12" height="16" rx="2"/><path d="M-6 -3 H6 M-6 3 H6"/></g>
    <text x="418" y="143" font-size="12" font-weight="700" fill="#0c6a73">許諾済データ共有</text>
    <rect x="566" y="118" width="148" height="40" rx="20" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="590" cy="138" r="13" fill="#e9f7f3"/><g transform="translate(590,138)" stroke="#0c6a73" stroke-width="1.8" fill="none"><path d="M-7 6 V-2 M-2 6 V-5 M3 6 V-1 M8 6 V-7"/></g>
    <text x="612" y="143" font-size="12" font-weight="700" fill="#0c6a73">経営判断を迅速化</text>
    <rect x="760" y="118" width="118" height="40" rx="20" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="784" cy="138" r="13" fill="#e9f7f3"/><g transform="translate(784,138)" stroke="#0c6a73" stroke-width="1.8" fill="none"><path d="M-7 0 H7 M3 -4 L7 0 L3 4"/></g>
    <text x="806" y="143" font-size="12" font-weight="700" fill="#0c6a73">アプリ外販</text>
  </g>
  <text x="625" y="180" font-size="11" fill="#0c6a73" text-anchor="middle" opacity="0.9">副次効果：許諾済データを土台に、学内・行政・企業の共同研究へ展開</text>
  <g>
    <rect x="595" y="468" width="90" height="160" rx="14" fill="#ffffff" stroke="#cfe3df" filter="url(#shSoft)"/>
    <rect x="603" y="486" width="74" height="118" rx="4" fill="#e9f7f3"/>
    <circle cx="640" cy="616" r="6" fill="#cfe3df"/>
    <rect x="611" y="494" width="58" height="14" rx="3" fill="url(#gNexus)"/>
    <rect x="611" y="516" width="58" height="9" rx="2" fill="#cfe3df"/>
    <rect x="611" y="531" width="40" height="9" rx="2" fill="#cfe3df"/>
    <rect x="611" y="550" width="58" height="20" rx="4" fill="url(#gGoal)"/>
    <rect x="611" y="578" width="58" height="9" rx="2" fill="#cfe3df"/>
    <text x="640" y="650" font-size="10.5" font-weight="700" fill="#0c6a73" text-anchor="middle">学生アプリ：自分専用コンパス</text>
  </g>
  <rect x="40" y="556" width="515" height="84" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="60" y="578" font-size="13" font-weight="700" fill="#0c6a73">想定KPI（試算・効果見込み）</text>
  <g>
    <text x="118" y="612" font-size="30" font-weight="700" fill="#0e5d72" text-anchor="middle">＋3h</text>
    <text x="118" y="630" font-size="10.5" fill="#555" text-anchor="middle">教員の研究時間/週</text>
    <text x="244" y="612" font-size="30" font-weight="700" fill="#d9722a" text-anchor="middle">−50%</text>
    <text x="244" y="630" font-size="10.5" fill="#555" text-anchor="middle">定型問い合わせ</text>
    <text x="370" y="612" font-size="30" font-weight="700" fill="#15803d" text-anchor="middle">＋20pt</text>
    <text x="370" y="630" font-size="10.5" fill="#555" text-anchor="middle">院生の研究力</text>
    <text x="492" y="612" font-size="30" font-weight="700" fill="#15803d" text-anchor="middle">＋5pt</text>
    <text x="492" y="630" font-size="10.5" fill="#555" text-anchor="middle">修了率(中退率↓)</text>
  </g>
  <rect x="725" y="556" width="515" height="84" rx="14" fill="url(#gKpi)" filter="url(#shSoft)"/>
  <text x="745" y="582" font-size="13" font-weight="700" fill="#ffffff">STAGE｜段階展開</text>
  <g font-size="11.5" fill="#ffffff">
    <circle cx="765" cy="612" r="11" fill="#ffffff"/><text x="765" y="616" font-size="12" font-weight="700" fill="#0e5d72" text-anchor="middle">1</text>
    <text x="784" y="610" font-weight="700">接続基盤＋AI伴走</text>
    <text x="784" y="626" font-size="10" fill="#cfeef0">ラボ共通支援を整備</text>
    <circle cx="935" cy="612" r="11" fill="#ffffff"/><text x="935" y="616" font-size="12" font-weight="700" fill="#0e5d72" text-anchor="middle">2</text>
    <text x="954" y="610" font-weight="700">全学CV-DB突合</text>
    <text x="954" y="626" font-size="10" fill="#cfeef0">個別最適に直接投下</text>
    <circle cx="1095" cy="612" r="11" fill="#ffffff"/><text x="1095" y="616" font-size="12" font-weight="700" fill="#0e5d72" text-anchor="middle">3</text>
    <text x="1114" y="610" font-weight="700">統合分析・外販</text>
    <text x="1114" y="626" font-size="10" fill="#cfeef0">経営判断と共同研究へ</text>
  </g>
  <path d="M40 660 L1206 660 L1240 690 L1206 720 L40 720 Z" fill="url(#gGoal)"/>
  <text x="623" y="685" font-size="13" fill="#dcf3e3" text-anchor="middle">GOAL：散在資源を1つのNexusに接続 → 研究者と支援者が躍動する大学へ</text>
  <text x="623" y="708" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">A〜Dの課題を打ち手で解き、価値が全学に放射する</text>
</svg>

<!-- variant-3：ハブ&スポーク多色リッチ版。中央=接続基盤Nexusに4本の曲線が合流、周囲にA-D課題↔打ち手を1:1配置(左A/右B/左下C/右下D)。0層に薄いグローブ(経緯線楕円)＋ネットワーク点線。上=副次効果バッジ3点、中央下=学生アプリmockup、下段左=想定KPIバンド(必ず試算明示)・右=stageBand、最下=GOAL帯。 -->
