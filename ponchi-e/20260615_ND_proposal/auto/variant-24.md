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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#27a07c" stop-opacity="0.14"/><stop offset="1" stop-color="#27a07c" stop-opacity="0.05"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.20"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <polygon points="-40,720 360,720 700,300 300,300" fill="url(#gRibbon)"/>
  <polygon points="300,720 700,720 1040,300 640,300" fill="url(#gRibbon)"/>
  <polygon points="640,720 1040,720 1340,360 960,360" fill="url(#gRibbon)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="412" cy="356" r="184" fill="url(#glow)"/>
  <circle cx="412" cy="356" r="96" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="412" y="344" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="412" y="370" font-size="15" font-weight="700" fill="#DCEEE5" text-anchor="middle">接続基盤</text>
  <text x="412" y="392" font-size="11.5" fill="#DCEEE5" text-anchor="middle">アプリ × AI伴走</text>
  <g stroke="#1A7A5E" stroke-width="3" fill="none">
    <path d="M412 260 C412 190 600 190 670 158" marker-end="url(#mA)"/>
    <path d="M508 356 C600 356 600 296 670 286" marker-end="url(#mA)"/>
    <path d="M508 356 C600 356 600 416 670 414" marker-end="url(#mA)"/>
    <path d="M412 452 C412 522 600 522 670 542" marker-end="url(#mA)"/>
  </g>
  <g font-family="sans-serif">
    <rect x="676" y="116" width="262" height="84" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="676" y="116" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="698" y="140" font-size="13.5" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
    <text x="698" y="160" font-size="11" fill="#666">院生の多様化・申請/評価/添削で限界</text>
    <text x="698" y="184" font-size="12" font-weight="700" fill="#16624b">→ 多言語AI支援で研究時間を確保</text>
    <rect x="676" y="244" width="262" height="84" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="676" y="244" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="698" y="268" font-size="13.5" font-weight="700" fill="#c4632a">B 育成の多様化・高度化</text>
    <text x="698" y="288" font-size="11" fill="#666">成功モデル多様・水準上昇</text>
    <text x="698" y="312" font-size="12" font-weight="700" fill="#16624b">→ CV-DB＋AI伴走で段階別に研究力UP</text>
    <rect x="676" y="372" width="262" height="84" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="676" y="372" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="698" y="396" font-size="13.5" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
    <text x="698" y="416" font-size="11" fill="#666">支援が乱立・重複・分散し届かない</text>
    <text x="698" y="440" font-size="12" font-weight="700" fill="#16624b">→ ニーズ×全学情報を突合し直送</text>
    <rect x="676" y="500" width="262" height="84" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="676" y="500" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="698" y="524" font-size="13.5" font-weight="700" fill="#c4632a">D 実践知が蓄積・活用されない</text>
    <text x="698" y="544" font-size="11" fill="#666">反復・システム乱立・異動でリセット</text>
    <text x="698" y="568" font-size="12" font-weight="700" fill="#16624b">→ 基盤接続＋RAGで省力・統合分析</text>
  </g>
  <g font-family="sans-serif">
    <rect x="980" y="120" width="264" height="232" rx="16" fill="#ffffff" filter="url(#sh)"/>
    <rect x="980" y="120" width="264" height="34" rx="16" fill="url(#gAccH)"/>
    <rect x="980" y="138" width="264" height="16" fill="url(#gAccH)"/>
    <text x="1112" y="142" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">アプリのイメージ</text>
    <rect x="1062" y="168" width="100" height="172" rx="14" fill="#0f4a39"/>
    <rect x="1069" y="178" width="86" height="152" rx="6" fill="#E4F2EC"/>
    <rect x="1077" y="186" width="70" height="20" rx="5" fill="#1f8f6e"/>
    <text x="1112" y="200" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">My Compass</text>
    <rect x="1077" y="212" width="70" height="16" rx="4" fill="#ffffff"/>
    <text x="1083" y="223" font-size="8" fill="#16624b">CVデータベース</text>
    <rect x="1077" y="232" width="70" height="16" rx="4" fill="#ffffff"/>
    <text x="1083" y="243" font-size="8" fill="#16624b">あなた向けの機会</text>
    <rect x="1077" y="252" width="70" height="34" rx="4" fill="#ffffff"/>
    <text x="1083" y="264" font-size="8" fill="#c4632a">AI伴走チャット</text>
    <text x="1083" y="278" font-size="8" fill="#999">留学/ラボ/企業</text>
    <rect x="1077" y="290" width="70" height="32" rx="4" fill="#1A7A5E"/>
    <text x="1112" y="305" font-size="8" fill="#ffffff" text-anchor="middle">必要な情報を</text>
    <text x="1112" y="316" font-size="8" fill="#ffffff" text-anchor="middle">あなたへ直送</text>
    <text x="993" y="184" font-size="10.5" font-weight="700" fill="#16624b">学内外の</text>
    <text x="993" y="200" font-size="10.5" font-weight="700" fill="#16624b">学習/スキル/</text>
    <text x="993" y="216" font-size="10.5" font-weight="700" fill="#16624b">資格を記録</text>
    <text x="993" y="248" font-size="10" fill="#555">↓</text>
    <text x="993" y="270" font-size="10.5" font-weight="700" fill="#16624b">AIが段階別に</text>
    <text x="993" y="286" font-size="10.5" font-weight="700" fill="#16624b">個別伴走</text>
    <text x="993" y="318" font-size="10" fill="#555">↓ 機会と</text>
    <text x="993" y="334" font-size="10" fill="#555">マッチング</text>
  </g>
  <g font-family="sans-serif">
    <text x="980" y="384" font-size="12.5" font-weight="700" fill="#16624b">副次効果</text>
    <text x="996" y="406" font-size="10.5" fill="#555">・許諾済データを学内/行政/企業で共同利活用</text>
    <text x="996" y="424" font-size="10.5" fill="#555">・統合分析でIR・経営判断を迅速化</text>
    <text x="996" y="442" font-size="10.5" fill="#555">・基盤アプリの外販</text>
  </g>
  <text x="412" y="490" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">課題A-D ←→ 打ち手A-D を1:1で接続</text>
  <g font-family="sans-serif">
    <rect x="36" y="566" width="908" height="64" rx="12" fill="url(#gAccH)"/>
    <text x="56" y="588" font-size="11.5" font-weight="700" fill="#DCEEE5">想定KPI（試算・目標値／効果は前提により変動）</text>
    <text x="120" y="616" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">＋3h/週</text>
    <text x="120" y="600" font-size="9.5" fill="#DCEEE5" text-anchor="middle">教員の研究時間</text>
    <text x="350" y="616" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">−50%</text>
    <text x="350" y="600" font-size="9.5" fill="#DCEEE5" text-anchor="middle">定型問い合わせ</text>
    <text x="580" y="616" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">＋20pt</text>
    <text x="580" y="600" font-size="9.5" fill="#DCEEE5" text-anchor="middle">院生の研究力</text>
    <text x="820" y="616" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">＋5pt</text>
    <text x="820" y="600" font-size="9.5" fill="#DCEEE5" text-anchor="middle">修了率（中退率↓）</text>
  </g>
  <g font-family="sans-serif">
    <path d="M980 566 L1216 566 L1244 598 L1216 630 L980 630 Z" fill="url(#gAcc)"/>
    <text x="1100" y="590" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
    <text x="1100" y="610" font-size="10" fill="#DCEEE5" text-anchor="middle">研究者と支援者が</text>
    <text x="1100" y="624" font-size="10" fill="#DCEEE5" text-anchor="middle">躍動する大学へ</text>
  </g>
  <text x="412" y="664" font-size="11" fill="#999999" text-anchor="middle">中央のNexusに学内資源を接続 → 課題A-Dを打ち手A-Dで解き、価値が放射する</text>
</svg>

<!-- variant-24：ハブ&スポーク。中央=接続基盤Nexus、右へ課題A-D↔打ち手A-Dカードを曲線で合流。背景=左下→右上へ昇る半透明tealリボン3枚。右上=appMockup(My Compass)、下=kpiBand(想定/試算明示)＋goalBurst。3色制限(teal/warn橙/ニュートラル)・airy。 -->
