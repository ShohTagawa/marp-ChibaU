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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#b35a1c"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f0a64a"/><stop offset="1" stop-color="#e07b39"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6c04f"/><stop offset="1" stop-color="#f2a83c"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fbe0a8"/><stop offset="1" stop-color="#f8d27e"/></linearGradient>
    <linearGradient id="gBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff7ea"/><stop offset="1" stop-color="#fdedd2"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a5012" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a5012" flood-opacity="0.16"/></filter>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffd98a" stop-opacity="0.9"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#c4632a"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBg)"/>
  <g opacity="0.5" stroke="#e8b97a" stroke-width="1" fill="#e0a25a">
    <circle cx="150" cy="200" r="3"/><circle cx="240" cy="160" r="2.5"/><circle cx="330" cy="230" r="3"/><circle cx="180" cy="300" r="2.5"/><circle cx="300" cy="340" r="3"/><circle cx="120" cy="420" r="2.5"/><circle cx="260" cy="470" r="3"/><circle cx="980" cy="190" r="3"/><circle cx="1080" cy="240" r="2.5"/><circle cx="1140" cy="330" r="3"/><circle cx="1010" cy="380" r="2.5"/><circle cx="1100" cy="450" r="3"/><circle cx="950" cy="490" r="2.5"/><circle cx="1170" cy="200" r="2.5"/><circle cx="640" cy="520" r="2.5"/>
    <path d="M150 200 L240 160 L330 230" stroke-width="0.8" fill="none"/><path d="M180 300 L300 340 L260 470" stroke-width="0.8" fill="none"/><path d="M980 190 L1080 240 L1140 330 L1100 450" stroke-width="0.8" fill="none"/><path d="M330 230 L640 520 L1010 380" stroke-width="0.8" fill="none" opacity="0.6"/>
  </g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#fbe6c4"/>
  <text x="40" y="85" font-size="15" font-weight="700" fill="#a8541a">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <g><circle cx="945" cy="240" r="150" fill="url(#glow)"/></g>
  <polygon points="700,118 1190,118 1145,206 745,206" fill="url(#gTop)" filter="url(#sh)"/>
  <circle cx="745" cy="162" r="17" fill="#ffffff"/>
  <g transform="translate(745,162)" stroke="#d2772f" stroke-width="2.2" fill="none"><path d="M-9 5 L0 -9 L9 5"/><path d="M-6 5 V-2 M0 5 V-6 M6 5 V-2"/></g>
  <text x="970" y="156" font-size="21" font-weight="700" fill="#ffffff" text-anchor="middle">頂：Nexus University</text>
  <text x="970" y="184" font-size="13.5" fill="#fff3e0" text-anchor="middle">研究者と支援者が躍動する大学</text>
  <polygon points="630,224 1188,224 1145,318 673,318" fill="url(#gMid)" filter="url(#shS)"/>
  <text x="900" y="262" font-size="18" font-weight="700" fill="#7a3d0c" text-anchor="middle">中：AI機能 ＝ 文脈に応じた個別最適</text>
  <text x="900" y="296" font-size="13" fill="#8a4a14" text-anchor="middle">多言語支援・CVデータベース×AI伴走・突合配信・RAG省力化</text>
  <polygon points="560,336 1186,336 1143,430 603,430" fill="url(#gBase)" filter="url(#shS)"/>
  <text x="873" y="374" font-size="18" font-weight="700" fill="#8a4a14" text-anchor="middle">土台：データ接続基盤</text>
  <text x="873" y="406" font-size="13" fill="#9a5618" text-anchor="middle">学内に散る 人・データ・支援・実践知 を1つに接続</text>
  <path d="M540 432 L540 132" stroke="#e07b39" stroke-width="11" stroke-linecap="round" fill="none"/>
  <path d="M540 132 L531 150 L549 150 Z" fill="#c4632a"/>
  <text x="558" y="290" font-size="12" font-weight="700" fill="#a8541a" transform="rotate(-90 558 290)" text-anchor="middle">価値が積み上がる</text>
  <text x="40" y="150" font-size="14" font-weight="700" fill="#b35a1c">課題 ↔ AI打ち手（1:1）</text>
  <rect x="40" y="162" width="480" height="58" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="191" r="14" fill="#fbe6c4"/><text x="68" y="196" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="92" y="184" font-size="12" font-weight="700" fill="#7a3d0c">教員の業務負荷が急増</text>
  <text x="92" y="204" font-size="11.5" fill="#555">→ 多言語支援・ラボ共通支援で研究時間を確保</text>
  <rect x="40" y="228" width="480" height="58" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="257" r="14" fill="#fbe6c4"/><text x="68" y="262" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="92" y="250" font-size="12" font-weight="700" fill="#7a3d0c">研究人材育成の多様化・高度化</text>
  <text x="92" y="270" font-size="11.5" fill="#555">→ CVデータベース×AI伴走で段階別に研究力を向上</text>
  <rect x="40" y="294" width="480" height="58" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="323" r="14" fill="#fbe6c4"/><text x="68" y="328" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="92" y="316" font-size="12" font-weight="700" fill="#7a3d0c">大学→個人のミッシングリンク</text>
  <text x="92" y="336" font-size="11.5" fill="#555">→ ニーズと全学支援を突合し必要な個人へ直送</text>
  <rect x="40" y="360" width="480" height="58" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="389" r="14" fill="#fbe6c4"/><text x="68" y="394" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="92" y="382" font-size="12" font-weight="700" fill="#7a3d0c">支援者の実践知が共有・蓄積されない</text>
  <text x="92" y="402" font-size="11.5" fill="#555">→ 基盤接続＋RAGで省力化・成果を統合分析</text>
  <rect x="1110" y="116" width="130" height="120" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="1122" y="128" width="106" height="20" rx="5" fill="#f2a83c"/>
  <rect x="1128" y="158" width="94" height="9" rx="3" fill="#fbe0a8"/><rect x="1128" y="172" width="74" height="9" rx="3" fill="#fbe0a8"/>
  <rect x="1128" y="188" width="94" height="9" rx="3" fill="#fbe0a8"/><rect x="1128" y="202" width="60" height="9" rx="3" fill="#fbe0a8"/>
  <circle cx="1207" cy="220" r="11" fill="#e07b39"/><text x="1207" y="224" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">AI</text>
  <text x="1175" y="134.5" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">App</text>
  <text x="40" y="452" font-size="13" font-weight="700" fill="#b35a1c">想定KPI（試算）</text>
  <rect x="40" y="462" width="288" height="76" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="184" y="500" font-size="30" font-weight="700" fill="#c4632a" text-anchor="middle">＋3h/週</text>
  <text x="184" y="522" font-size="12" fill="#555" text-anchor="middle">教員の研究時間（想定）</text>
  <rect x="338" y="462" width="288" height="76" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="482" y="500" font-size="30" font-weight="700" fill="#c4632a" text-anchor="middle">−50%</text>
  <text x="482" y="522" font-size="12" fill="#555" text-anchor="middle">定型問い合わせ（試算）</text>
  <rect x="636" y="462" width="288" height="76" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="780" y="500" font-size="30" font-weight="700" fill="#c4632a" text-anchor="middle">＋20pt</text>
  <text x="780" y="522" font-size="12" fill="#555" text-anchor="middle">院生の研究力（想定）</text>
  <rect x="934" y="462" width="288" height="76" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="1078" y="500" font-size="30" font-weight="700" fill="#c4632a" text-anchor="middle">＋5pt</text>
  <text x="1078" y="522" font-size="12" fill="#555" text-anchor="middle">修了率／中退率↓（試算）</text>
  <rect x="40" y="552" width="376" height="44" rx="11" fill="#fff4e2" stroke="#f0c98a" stroke-width="1"/>
  <text x="60" y="571" font-size="11.5" font-weight="700" fill="#a8541a">副次効果</text>
  <text x="60" y="589" font-size="11" fill="#7a3d0c">許諾済データの共同研究 ／ 統合分析で経営判断を迅速化 ／ アプリ外販</text>
  <path d="M432 552 L1206 552 L1240 596 L1206 640 L432 640 Z" fill="url(#gHdr)"/>
  <text x="828" y="600" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">接続が価値を連鎖させ、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="700" font-size="10" fill="#b08050">※KPIはいずれも導入効果の想定／試算であり、確定値ではない。</text>
</svg>

<!-- variant-81：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University）。背景に世界地図風ドット＆結線。橙/黄の温かいムード、アクセントはKPIの巨大数字＋頂点に集約。左にA-D課題↔打ち手の1:1カード、右上にappMockup、下にkpiBand4枚＋副次効果。KPIは全て想定/試算と明示。 -->
