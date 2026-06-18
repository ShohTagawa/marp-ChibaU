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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e3a52"/><stop offset="1" stop-color="#16624b"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gApex" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3aa07c"/><stop offset="1" stop-color="#1f8f6e"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef5fa"/><stop offset="1" stop-color="#dce9f2"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.95"/><stop offset="0.6" stop-color="#f6c453" stop-opacity="0.55"/><stop offset="1" stop-color="#f6c453" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 L0 32" fill="none" stroke="#1f6f9c" stroke-width="0.6" stroke-opacity="0.10"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f3a4a" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f3a4a" flood-opacity="0.14"/></filter>
    <marker id="mUp" markerWidth="12" markerHeight="12" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16624b"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBlue)"/>
  <rect x="0" y="98" width="1280" height="560" fill="url(#grid)"/>
  <path d="M30 150 L30 416" stroke="#1f6f9c" stroke-width="0.8" stroke-opacity="0.30"/><path d="M26 154 L34 154 M26 412 L34 412" stroke="#1f6f9c" stroke-width="0.8" stroke-opacity="0.30"/>
  <text x="22" y="283" font-size="10" fill="#5b86a3" transform="rotate(-90 22 283)" text-anchor="middle">下層→上層へ価値が積層</text>
  <path d="M340 426 L944 426" stroke="#1f6f9c" stroke-width="0.8" stroke-opacity="0.26"/><path d="M340 422 L340 430 M944 422 L944 430" stroke="#1f6f9c" stroke-width="0.8" stroke-opacity="0.26"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#e3eef6"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="640" cy="226" r="118" fill="url(#gBurst)"/>
  <polygon points="640,142 712,206 568,206" fill="url(#gApex)" filter="url(#sh)"/>
  <circle cx="640" cy="178" r="13" fill="#ffffff"/>
  <g transform="translate(640,178)" stroke="#16624b" stroke-width="2" fill="none"><path d="M-8 5 L0 -8 L8 5"/><path d="M-6 5 V9 M-2 5 V9 M2 5 V9 M6 5 V9 M-8 9 H8"/></g>
  <text x="640" y="201" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <polygon points="520,212 760,212 832,310 448,310" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="640" y="248" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能：多言語支援 ・ CVデータベース伴走</text>
  <text x="640" y="270" font-size="13" font-weight="700" fill="#fff3e8" text-anchor="middle">個別最適マッチング ・ RAG窓口省力化</text>
  <text x="640" y="291" font-size="11.5" fill="#fff3e8" text-anchor="middle">実践知＋情報を接続し、文脈に応じて個へ届ける</text>
  <polygon points="430,318 850,318 922,416 358,416" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="640" y="354" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">データ接続基盤</text>
  <text x="640" y="378" font-size="12" fill="#dff2ea" text-anchor="middle">人・データ・支援・実践知・機会を1枚に集約／許諾済データを安全に接続</text>
  <text x="640" y="400" font-size="11.5" fill="#dff2ea" text-anchor="middle">学内・行政・企業の共同研究 ／ 統合分析で経営判断を迅速化 ／ アプリ外販</text>
  <text x="170" y="150" font-size="13" font-weight="700" fill="#0e3a52">課題 → AIの打ち手（1:1）</text>
  <rect x="44" y="166" width="290" height="62" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="166" width="6" height="62" rx="3" fill="#d2772f"/>
  <text x="64" y="186" font-size="12.5" font-weight="700" fill="#0e3a52">A 教員の業務負荷が急増</text>
  <text x="64" y="204" font-size="10.5" fill="#7a6a5a">院生の多様化・申請/評価/添削</text>
  <text x="64" y="222" font-size="11.5" font-weight="700" fill="#16624b">→ 多言語AI・ラボ共通支援で研究時間確保</text>
  <rect x="44" y="236" width="290" height="62" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="236" width="6" height="62" rx="3" fill="#d2772f"/>
  <text x="64" y="256" font-size="12.5" font-weight="700" fill="#0e3a52">B 育成が多様化・高度化</text>
  <text x="64" y="274" font-size="10.5" fill="#7a6a5a">求める水準上昇・資源の最適投下</text>
  <text x="64" y="292" font-size="11.5" font-weight="700" fill="#16624b">→ CV-DB＋AI伴走で段階別に研究力向上</text>
  <rect x="44" y="306" width="290" height="62" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="44" y="306" width="6" height="62" rx="3" fill="#d2772f"/>
  <text x="64" y="326" font-size="12.5" font-weight="700" fill="#0e3a52">C 大学→個人のミッシングリンク</text>
  <text x="64" y="344" font-size="10.5" fill="#7a6a5a">支援が乱立・重複・分散</text>
  <text x="64" y="362" font-size="11.5" font-weight="700" fill="#16624b">→ ニーズ×支援情報を突合し個へ直送</text>
  <rect x="946" y="166" width="290" height="62" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="1230" y="166" width="6" height="62" rx="3" fill="#1f8f6e"/>
  <text x="966" y="186" font-size="12.5" font-weight="700" fill="#0e3a52">D 実践知が共有・蓄積されない</text>
  <text x="966" y="204" font-size="10.5" fill="#7a6a5a">同手続きの反復・異動でゼロリセット</text>
  <text x="966" y="222" font-size="11.5" font-weight="700" fill="#16624b">→ 基盤で接続しAI分析・RAGで省力化</text>
  <rect x="946" y="236" width="290" height="132" rx="11" fill="#0e3a52" filter="url(#shS)"/>
  <text x="966" y="262" font-size="13" font-weight="700" fill="#ffd98a">副次効果</text>
  <text x="966" y="288" font-size="11.5" fill="#dbe8f1">許諾済データの共有・利活用で</text>
  <text x="966" y="306" font-size="11.5" fill="#dbe8f1">学内×行政×企業の共同研究を促進</text>
  <text x="966" y="332" font-size="11.5" fill="#dbe8f1">IR・成果・回答を自動収集・統合分析</text>
  <text x="966" y="350" font-size="11.5" font-weight="700" fill="#ffffff">→ 経営判断を迅速化／アプリ外販</text>
  <rect x="44" y="436" width="1192" height="118" rx="16" fill="#0e3a52" filter="url(#sh)"/>
  <text x="68" y="466" font-size="14" font-weight="700" fill="#ffd98a">想定KPI（試算・導入後イメージ）</text>
  <text x="68" y="486" font-size="10.5" fill="#9fb8c9">※数値はいずれも想定／試算であり確定値ではない</text>
  <rect x="68" y="500" width="270" height="42" rx="9" fill="#13455f"/>
  <text x="92" y="528" font-size="30" font-weight="700" fill="#ffffff">+3h</text>
  <text x="168" y="520" font-size="11.5" fill="#dbe8f1">教員の研究時間</text>
  <text x="168" y="536" font-size="11.5" font-weight="700" fill="#7fe3c0">／週（想定）</text>
  <rect x="352" y="500" width="270" height="42" rx="9" fill="#13455f"/>
  <text x="376" y="528" font-size="30" font-weight="700" fill="#ffffff">−50%</text>
  <text x="478" y="520" font-size="11.5" fill="#dbe8f1">定型問い合わせ</text>
  <text x="478" y="536" font-size="11.5" font-weight="700" fill="#7fe3c0">（想定）</text>
  <rect x="636" y="500" width="270" height="42" rx="9" fill="#13455f"/>
  <text x="660" y="528" font-size="30" font-weight="700" fill="#ffffff">+20pt</text>
  <text x="768" y="520" font-size="11.5" fill="#dbe8f1">院生の研究力</text>
  <text x="768" y="536" font-size="11.5" font-weight="700" fill="#7fe3c0">（試算）</text>
  <rect x="920" y="500" width="296" height="42" rx="9" fill="#13455f"/>
  <text x="944" y="528" font-size="30" font-weight="700" fill="#ffffff">+5pt</text>
  <text x="1030" y="520" font-size="11.5" fill="#dbe8f1">修了率（中退率↓）</text>
  <text x="1030" y="536" font-size="11.5" font-weight="700" fill="#7fe3c0">（試算）</text>
  <path d="M44 574 L1202 574 L1236 612 L1202 650 L44 650 Z" fill="url(#gBase)"/>
  <text x="623" y="618" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤の上にAIを積み、Nexus University ＝ 研究者と支援者が躍動する大学へ</text>
</svg>

<!-- variant-88：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University）。背景は極薄ブループリント方眼＋寸法線で設計図トーン。多色リッチ（teal基盤＋橙AI＋緑GOAL＋青背景）。左にA-C課題↔打ち手1:1カード＋右にD＋副次。下にgoalBurst（頂上の放射）＋kpiBand（巨大数字KPI、全て想定/試算明示）。下端タグライン帯。 -->
