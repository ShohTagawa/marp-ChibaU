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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e6a8a"/><stop offset="1" stop-color="#0b4a63"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d97b4"/><stop offset="1" stop-color="#0c5b73"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f0a258"/><stop offset="1" stop-color="#dc7a2c"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f9e63"/><stop offset="1" stop-color="#18713f"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1d97b4" stop-opacity="0.30"/><stop offset="1" stop-color="#1d97b4" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 H0 V32" fill="none" stroke="#bcd8e2" stroke-width="0.8"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0b4a63" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0b4a63" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1d97b4"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#dc7a2c"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#eef6f9"/>
  <rect x="0" y="56" width="1280" height="664" fill="url(#grid)" opacity="0.6"/>
  <g stroke="#9cc2d2" stroke-width="0.9" fill="none" opacity="0.7"><path d="M40 600 H1240"/><path d="M40 594 V606"/><path d="M1240 594 V606"/><path d="M640 96 V108"/></g>
  <text x="44" y="613" font-size="10" fill="#6f93a3">設計図：分散資源 → Nexus 接続基盤 → 価値の放射</text>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHead)"/>
  <text x="40" y="36" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="13" width="138" height="30" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="16"/>
  <text x="40" y="84" font-size="15.5" font-weight="700" fill="#0c5b73">分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="120" y="150" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">課題：資源が散在</text>
  <g font-size="11.5" fill="#333">
    <rect x="40" y="170" width="170" height="58" rx="11" fill="#fff5ec" stroke="#f0c79e" filter="url(#shS)"/>
    <circle cx="62" cy="190" r="9" fill="#dc7a2c"/><text x="62" y="194" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">A</text>
    <text x="80" y="194" font-size="12.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
    <text x="56" y="214" font-size="11">院生の多様化・申請/評価/添削で限界</text>
    <rect x="40" y="240" width="170" height="58" rx="11" fill="#fff5ec" stroke="#f0c79e" filter="url(#shS)"/>
    <circle cx="62" cy="260" r="9" fill="#dc7a2c"/><text x="62" y="264" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">B</text>
    <text x="80" y="264" font-size="12.5" font-weight="700" fill="#c4632a">人材育成が多様化・高度化</text>
    <text x="56" y="284" font-size="11">成功モデル多様化／求める水準↑</text>
    <rect x="40" y="310" width="170" height="58" rx="11" fill="#fff5ec" stroke="#f0c79e" filter="url(#shS)"/>
    <circle cx="62" cy="330" r="9" fill="#dc7a2c"/><text x="62" y="334" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">C</text>
    <text x="80" y="334" font-size="12.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
    <text x="56" y="354" font-size="11">支援が乱立・重複／個人に届かない</text>
    <rect x="40" y="380" width="170" height="58" rx="11" fill="#fff5ec" stroke="#f0c79e" filter="url(#shS)"/>
    <circle cx="62" cy="400" r="9" fill="#dc7a2c"/><text x="62" y="404" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">D</text>
    <text x="80" y="404" font-size="12.5" font-weight="700" fill="#c4632a">実践知が蓄積・活用されない</text>
    <text x="56" y="424" font-size="11">反復／システム乱立・異動でゼロ化</text>
  </g>
  <g stroke="#dc7a2c" stroke-width="2.4" fill="none" opacity="0.85"><path d="M214 199 C300 199 330 290 412 304" marker-end="url(#mW)"/><path d="M214 269 C300 269 350 296 412 308" marker-end="url(#mW)"/><path d="M214 339 C300 339 350 320 412 312" marker-end="url(#mW)"/><path d="M214 409 C300 409 330 326 412 316" marker-end="url(#mW)"/></g>
  <circle cx="512" cy="310" r="120" fill="url(#gGlow)"/>
  <circle cx="512" cy="310" r="78" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="512" y="300" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="512" y="324" font-size="14" font-weight="700" fill="#cdeef5" text-anchor="middle">接続基盤</text>
  <text x="512" y="344" font-size="10.5" fill="#cdeef5" text-anchor="middle">情報・データ・人を統合</text>
  <g transform="translate(596,214)"><rect x="-20" y="-30" width="40" height="64" rx="7" fill="#ffffff" stroke="#1d97b4" stroke-width="1.6" filter="url(#shS)"/><rect x="-15" y="-24" width="30" height="40" rx="2" fill="#e3f3f7"/><circle cx="0" cy="25" r="3.5" fill="#1d97b4"/><path d="M-9 -14 H9 M-9 -7 H4" stroke="#1d97b4" stroke-width="1.4"/></g>
  <text x="596" y="262" font-size="10" font-weight="700" fill="#0c5b73" text-anchor="middle">専用アプリ</text>
  <g stroke="#1d97b4" stroke-width="3" fill="none"><path d="M590 310 C660 310 660 200 728 200" marker-end="url(#mT)"/><path d="M590 310 C660 310 660 280 728 280" marker-end="url(#mT)"/><path d="M590 310 C660 310 660 360 728 360" marker-end="url(#mT)"/><path d="M590 310 C660 310 660 440 728 440" marker-end="url(#mT)"/></g>
  <g>
    <rect x="734" y="170" width="372" height="64" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="734" y="170" width="6" height="64" rx="3" fill="#1d97b4"/>
    <circle cx="762" cy="190" r="10" fill="#1d97b4"/><text x="762" y="194" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">A</text>
    <text x="782" y="194" font-size="14" font-weight="700" fill="#0c5b73">教員の研究時間を確保</text>
    <text x="752" y="218" font-size="11.5" fill="#333">AI多言語支援・ラボ共通支援・支援者を接続し指導負担を軽減</text>
    <rect x="734" y="244" width="372" height="64" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="734" y="244" width="6" height="64" rx="3" fill="#1d97b4"/>
    <circle cx="762" cy="264" r="10" fill="#1d97b4"/><text x="762" y="268" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">B</text>
    <text x="782" y="268" font-size="14" font-weight="700" fill="#0c5b73">院生の研究力を向上</text>
    <text x="752" y="292" font-size="11.5" fill="#333">CVデータベース＋AI伴走で段階別個別支援・留学/企業マッチング</text>
    <rect x="734" y="318" width="372" height="64" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="734" y="318" width="6" height="64" rx="3" fill="#1d97b4"/>
    <circle cx="762" cy="338" r="10" fill="#1d97b4"/><text x="762" y="342" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">C</text>
    <text x="782" y="342" font-size="14" font-weight="700" fill="#0c5b73">個別最適な情報を直に届ける</text>
    <text x="752" y="366" font-size="11.5" fill="#333">学生のニーズ × 全学の支援情報を突合 → 必要な個人へ投下</text>
    <rect x="734" y="392" width="372" height="64" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="734" y="392" width="6" height="64" rx="3" fill="#1d97b4"/>
    <circle cx="762" cy="412" r="10" fill="#1d97b4"/><text x="762" y="416" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">D</text>
    <text x="782" y="416" font-size="14" font-weight="700" fill="#0c5b73">支援者の労力削減・効率化</text>
    <text x="752" y="440" font-size="11.5" fill="#333">基盤上でデータ接続・RAGで窓口省力化・成果を自動収集/分析</text>
  </g>
  <text x="920" y="156" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">AI打ち手（課題A-Dに1:1で対応）</text>
  <g stroke="#2f9e63" stroke-width="3" fill="none"><path d="M1106 313 C1138 313 1138 313 1158 313" marker-end="url(#mT)"/></g>
  <path d="M1130 280 L1232 280 L1256 313 L1232 346 L1130 346 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <text x="1185" y="308" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1185" y="328" font-size="10" fill="#d6f0e0" text-anchor="middle">選ばれる大学</text>
  <rect x="40" y="474" width="640" height="62" rx="12" fill="#0c5b73" filter="url(#shS)"/>
  <text x="58" y="498" font-size="12.5" font-weight="700" fill="#9fd6e3">副次効果</text>
  <text x="58" y="520" font-size="11.5" fill="#eaf6f9">許諾済データの共同利活用（学内・行政・企業）／統合分析で経営判断を迅速化／アプリ外販</text>
  <rect x="694" y="474" width="546" height="62" rx="12" fill="#ffffff" stroke="#cfe3ea" filter="url(#shS)"/>
  <text x="710" y="494" font-size="12.5" font-weight="700" fill="#c4632a">想定KPI（試算）</text>
  <g font-size="11" fill="#333"><text x="710" y="518" font-size="11.5" fill="#0c5b73">研究時間 <tspan font-size="15" font-weight="700" fill="#1d97b4">+3h</tspan>/週</text><text x="846" y="518" font-size="11.5" fill="#0c5b73">定型問い合わせ <tspan font-size="15" font-weight="700" fill="#dc7a2c">−50%</tspan></text><text x="1010" y="518" font-size="11.5" fill="#0c5b73">研究力 <tspan font-size="15" font-weight="700" fill="#1d97b4">+20pt</tspan>／修了率 <tspan font-size="15" font-weight="700" fill="#2f9e63">+5pt</tspan></text></g>
  <rect x="40" y="552" width="1200" height="48" rx="10" fill="url(#gGoal)"/>
  <text x="640" y="582" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">資源を「接続」するNexusへ ― 研究者と支援者が躍動し、研究力が伸び続ける大学へ</text>
</svg>

<!-- variant-87：ハブ&スポーク（airy/多色リッチ/ブループリント地）。左=課題A-D(橙)→曲線で中央Nexus接続基盤に合流→右=AI打ち手A-D(teal,1:1対応)が放射→GOAL(緑シェブロン)。下段=副次効果(青)＋想定KPIバンド(試算明示)＋結論帯(緑)。背景=極薄方眼+寸法線で設計図トーン。 -->
