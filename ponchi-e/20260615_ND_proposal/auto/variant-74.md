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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0c4334"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3aa385"/><stop offset="1" stop-color="#1A7A5E"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c7e6db"/><stop offset="1" stop-color="#9cd0bf"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="gGoal" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fbe9d6"/><stop offset="0.6" stop-color="#f3cfa5"/><stop offset="1" stop-color="#f3cfa5" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#E07B39"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f4f9f7"/>
  <g opacity="0.5"><path d="M-80 720 L300 720 L520 470 L140 470 Z" fill="#dcefe6"/><path d="M120 720 L500 720 L760 420 L380 420 Z" fill="#cfe9f3"/><path d="M360 720 L760 720 L1080 360 L680 360 Z" fill="#dcefe6"/><path d="M640 720 L1060 720 L1380 320 L960 320 Z" fill="#cfe9f3"/></g>
  <g opacity="0.7"><path d="M-40 700 L40 700 L420 250 L340 250 Z" fill="#bfe3ee"/><path d="M260 720 L350 720 L760 240 L670 240 Z" fill="#c7ead7"/><path d="M620 720 L720 720 L1180 200 L1080 200 Z" fill="#bfe3ee"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="118" font-size="12.5" font-weight="700" fill="#999999">課題（いま）　↔　AIによる打ち手（A〜D 1:1対応）</text>
  <rect x="40" y="128" width="306" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="128" width="6" height="78" rx="3" fill="#d2772f"/>
  <circle cx="66" cy="150" r="11" fill="#FBEDE2"/><text x="66" y="155" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">A</text>
  <text x="86" y="148" font-size="13" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
  <text x="58" y="170" font-size="11" fill="#444">院生の多様化（社会人・留学生・他分野）</text>
  <text x="58" y="186" font-size="11" fill="#444">研究費申請・評価資料・学振添削が限界</text>
  <rect x="40" y="214" width="306" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="214" width="6" height="78" rx="3" fill="#d2772f"/>
  <circle cx="66" cy="236" r="11" fill="#FBEDE2"/><text x="66" y="241" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">B</text>
  <text x="86" y="234" font-size="13" font-weight="700" fill="#c4632a">人材育成の多様化・高度化</text>
  <text x="58" y="256" font-size="11" fill="#444">成功モデルが多様化・求める水準が上昇</text>
  <text x="58" y="272" font-size="11" fill="#444">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="300" width="306" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="300" width="6" height="78" rx="3" fill="#d2772f"/>
  <circle cx="66" cy="322" r="11" fill="#FBEDE2"/><text x="66" y="327" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">C</text>
  <text x="86" y="320" font-size="13" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
  <text x="58" y="342" font-size="11" fill="#444">支援が乱立・重複・分散している</text>
  <text x="58" y="358" font-size="11" fill="#444">真に必要な個人に届かない</text>
  <rect x="40" y="386" width="306" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="386" width="6" height="78" rx="3" fill="#d2772f"/>
  <circle cx="66" cy="408" r="11" fill="#FBEDE2"/><text x="66" y="413" font-size="13" font-weight="700" fill="#d2772f" text-anchor="middle">D</text>
  <text x="86" y="406" font-size="13" font-weight="700" fill="#c4632a">支援者の実践知が活きない</text>
  <text x="58" y="428" font-size="11" fill="#444">同じ手続きの反復・システム乱立</text>
  <text x="58" y="444" font-size="11" fill="#444">データ分散・異動でゼロリセット</text>
  <g stroke="#E07B39" stroke-width="2.5" fill="none"><path d="M350 167 L394 167" marker-end="url(#mW)"/><path d="M350 253 L394 253" marker-end="url(#mW)"/><path d="M350 339 L394 339" marker-end="url(#mW)"/><path d="M350 425 L394 425" marker-end="url(#mW)"/></g>
  <polygon points="640,128 1240,128 1240,330 700,330" fill="#1A7A5E" opacity="0.10"/>
  <polygon points="700,330 1240,330 1240,468 760,468" fill="#27a07c" opacity="0.12"/>
  <rect x="404" y="128" width="392" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="430" cy="150" r="11" fill="#E4F2EC"/><text x="430" y="155" font-size="13" font-weight="700" fill="#1A7A5E" text-anchor="middle">A</text>
  <text x="450" y="148" font-size="13" font-weight="700" fill="#16624b">教員の指導負担を軽減し研究時間を確保</text>
  <text x="422" y="170" font-size="11" fill="#333">AI多言語支援／ラボ共通支援／支援者接続</text>
  <text x="422" y="186" font-size="11" font-weight="700" fill="#16624b">→ 指導の手間を肩代わりし研究へ集中</text>
  <rect x="404" y="214" width="392" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="430" cy="236" r="11" fill="#E4F2EC"/><text x="430" y="241" font-size="13" font-weight="700" fill="#1A7A5E" text-anchor="middle">B</text>
  <text x="450" y="234" font-size="13" font-weight="700" fill="#16624b">院生の研究力を向上</text>
  <text x="422" y="256" font-size="11" fill="#333">CVデータベース（学習/スキル/資格）＋AI伴走</text>
  <text x="422" y="272" font-size="11" font-weight="700" fill="#16624b">→ 段階別個別支援・留学/ラボ/企業マッチング</text>
  <rect x="404" y="300" width="392" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="430" cy="322" r="11" fill="#E4F2EC"/><text x="430" y="327" font-size="13" font-weight="700" fill="#1A7A5E" text-anchor="middle">C</text>
  <text x="450" y="320" font-size="13" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="422" y="342" font-size="11" fill="#333">①学生入力ニーズ × ②全学の支援情報を突合</text>
  <text x="422" y="358" font-size="11" font-weight="700" fill="#16624b">→ 必要な個人へダイレクト投下</text>
  <rect x="404" y="386" width="392" height="78" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="430" cy="408" r="11" fill="#E4F2EC"/><text x="430" y="413" font-size="13" font-weight="700" fill="#1A7A5E" text-anchor="middle">D</text>
  <text x="450" y="406" font-size="13" font-weight="700" fill="#16624b">支援者の労力削減・効率化</text>
  <text x="422" y="428" font-size="11" fill="#333">基盤上でデータ接続・AI分析／窓口をRAG省力化</text>
  <text x="422" y="444" font-size="11" font-weight="700" fill="#16624b">→ IR・成果・回答を自動収集し統合分析</text>
  <text x="816" y="124" font-size="12.5" font-weight="700" fill="#999999">三層で積み上がる構造</text>
  <polygon points="900,420 1240,420 1240,464 820,464" fill="url(#gBase)" filter="url(#shSoft)"/>
  <text x="1030" y="447" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">土台：データ接続基盤（許諾済データを安全に接続）</text>
  <polygon points="900,330 1240,330 1240,412 880,412" fill="url(#gMid)" filter="url(#shSoft)"/>
  <text x="1060" y="365" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能</text>
  <text x="1060" y="386" font-size="11" fill="#eafff6" text-anchor="middle">伴走支援・突合・RAG・統合分析</text>
  <polygon points="940,240 1200,240 1240,322 900,322" fill="url(#gTop)" filter="url(#sh)"/>
  <circle cx="1070" cy="262" r="13" fill="#ffffff"/><g transform="translate(1070,262)" stroke="#0c4334" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="2.6"/></g>
  <text x="1070" y="298" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <ellipse cx="1078" cy="180" rx="120" ry="64" fill="url(#gGoal)"/>
  <text x="1078" y="166" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">研究者と支援者が</text>
  <text x="1078" y="186" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">躍動する大学へ</text>
  <text x="1078" y="208" font-size="10.5" fill="#8a6a4a" text-anchor="middle">共同研究・経営判断迅速化・アプリ外販</text>
  <text x="40" y="486" font-size="12.5" font-weight="700" fill="#999999">受益者：いまのニーズ　→　導入後</text>
  <rect x="40" y="494" width="288" height="64" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="64" cy="520" r="14" fill="#E4F2EC"/><g transform="translate(64,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="86" y="514" font-size="13.5" font-weight="700" fill="#1A7A5E">学生</text>
  <text x="86" y="532" font-size="10.5" fill="#666">支援が届かない</text>
  <text x="86" y="550" font-size="11" font-weight="700" fill="#16624b">→ AI伴走で研究力↑</text>
  <rect x="338" y="494" width="288" height="64" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="362" cy="520" r="14" fill="#E4F2EC"/><g transform="translate(362,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 8 A6 6 0 0 1 0 7"/><path d="M0 7 A6 6 0 0 1 11 8"/></g>
  <text x="384" y="514" font-size="13.5" font-weight="700" fill="#1A7A5E">教員</text>
  <text x="384" y="532" font-size="10.5" fill="#666">指導負荷が限界</text>
  <text x="384" y="550" font-size="11" font-weight="700" fill="#16624b">→ 研究時間を確保</text>
  <rect x="636" y="494" width="288" height="64" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="660" cy="520" r="14" fill="#E4F2EC"/><g transform="translate(660,520)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
  <text x="682" y="514" font-size="13.5" font-weight="700" fill="#1A7A5E">職員</text>
  <text x="682" y="532" font-size="10.5" fill="#666">反復・窓口に追われ</text>
  <text x="682" y="550" font-size="11" font-weight="700" fill="#16624b">→ RAGで省力化</text>
  <rect x="934" y="494" width="306" height="64" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="958" cy="520" r="14" fill="#E4F2EC"/><g transform="translate(958,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
  <text x="980" y="514" font-size="13.5" font-weight="700" fill="#1A7A5E">大学</text>
  <text x="980" y="532" font-size="10.5" fill="#666">データ分散で判断遅れ</text>
  <text x="980" y="550" font-size="11" font-weight="700" fill="#16624b">→ 統合分析で迅速化</text>
  <rect x="40" y="572" width="1200" height="118" rx="14" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="64" y="600" font-size="14" font-weight="700" fill="#ffffff">想定KPI（いずれも想定／試算値）</text>
  <text x="240" y="600" font-size="11" fill="#cdeee2">— 実証で検証し更新</text>
  <g><rect x="64" y="612" width="266" height="62" rx="10" fill="#ffffff" opacity="0.96"/><text x="84" y="652" font-size="34" font-weight="700" fill="#16624b">+3h</text><text x="178" y="640" font-size="12" font-weight="700" fill="#444">教員の研究時間</text><text x="178" y="658" font-size="11" fill="#888">／週（想定）</text></g>
  <g><rect x="346" y="612" width="266" height="62" rx="10" fill="#ffffff" opacity="0.96"/><text x="366" y="652" font-size="34" font-weight="700" fill="#16624b">−50%</text><text x="486" y="640" font-size="12" font-weight="700" fill="#444">定型問い合わせ</text><text x="486" y="658" font-size="11" fill="#888">（試算）</text></g>
  <g><rect x="628" y="612" width="266" height="62" rx="10" fill="#ffffff" opacity="0.96"/><text x="648" y="652" font-size="34" font-weight="700" fill="#16624b">+20pt</text><text x="772" y="640" font-size="12" font-weight="700" fill="#444">院生の研究力</text><text x="772" y="658" font-size="11" fill="#888">（想定）</text></g>
  <g><rect x="910" y="612" width="266" height="62" rx="10" fill="#ffffff" opacity="0.96"/><text x="930" y="652" font-size="34" font-weight="700" fill="#16624b">+5pt</text><text x="1042" y="640" font-size="12" font-weight="700" fill="#444">修了率（中退率↓）</text><text x="1042" y="658" font-size="11" fill="#888">（試算）</text></g>
</svg>
