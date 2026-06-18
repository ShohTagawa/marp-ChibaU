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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3f7fb8"/><stop offset="1" stop-color="#2a5e8e"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2faf6a"/><stop offset="1" stop-color="#17854a"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#7be0a8" stop-opacity="0.55"/><stop offset="1" stop-color="#7be0a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="85" font-size="15" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="32" y="108" width="368" height="30" rx="8" fill="#FBEDE2"/>
  <text x="50" y="128" font-size="13.5" font-weight="700" fill="#c4632a">課題 ― いま大学が抱える</text>
  <rect x="448" y="108" width="200" height="30" rx="8" fill="#DCEAF6"/>
  <text x="548" y="128" font-size="13.5" font-weight="700" fill="#2a5e8e" text-anchor="middle">AIで変換</text>
  <rect x="696" y="108" width="552" height="30" rx="8" fill="#E4F2EC"/>
  <text x="714" y="128" font-size="13.5" font-weight="700" fill="#16624b">打ち手 ― 接続基盤×AIで実現</text>
  <rect x="32" y="146" width="616" height="312" rx="14" fill="#FBE7D9" opacity="0.55"/>
  <rect x="666" y="146" width="582" height="312" rx="14" fill="#E1F1EA" opacity="0.6"/>
  <rect x="40" y="152" width="360" height="68" rx="10" fill="#FCEFE4" filter="url(#shSoft)"/>
  <circle cx="68" cy="178" r="13" fill="url(#gWarn)"/>
  <text x="68" y="183" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="90" y="174" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="90" y="192" font-size="10.5" fill="#7a5a45">院生の多様化／申請・評価資料・学振</text>
  <text x="90" y="207" font-size="10.5" fill="#7a5a45">添削・全員留学で時間が足りない</text>
  <circle cx="498" cy="186" r="19" fill="url(#gBlue)" filter="url(#sh)"/>
  <text x="498" y="191" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 186 L466 186 M523 180 L536 186 L523 192" stroke="#2a5e8e" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="674" y="152" width="566" height="68" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="674" y="152" width="6" height="68" rx="3" fill="url(#gAccH)"/>
  <text x="696" y="174" font-size="13.5" font-weight="700" fill="#16624b">指導負担を軽減し、研究時間を確保</text>
  <text x="696" y="192" font-size="10.5" fill="#3c5b50">AIの多言語支援・ラボ共通支援・支援者への接続で</text>
  <text x="696" y="207" font-size="10.5" fill="#3c5b50">教員は研究そのものに時間を回せる</text>
  <rect x="40" y="228" width="360" height="68" rx="10" fill="#FCEFE4" filter="url(#shSoft)"/>
  <circle cx="68" cy="254" r="13" fill="url(#gWarn)"/>
  <text x="68" y="259" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="90" y="250" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が多様・高度化</text>
  <text x="90" y="268" font-size="10.5" fill="#7a5a45">成功モデル多様化・求める水準が上昇</text>
  <text x="90" y="283" font-size="10.5" fill="#7a5a45">個別の能力育成と資源の最適投下が必須</text>
  <circle cx="498" cy="262" r="19" fill="url(#gBlue)" filter="url(#sh)"/>
  <text x="498" y="267" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 262 L466 262 M523 256 L536 262 L523 268" stroke="#2a5e8e" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="674" y="228" width="566" height="68" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="674" y="228" width="6" height="68" rx="3" fill="url(#gAccH)"/>
  <text x="696" y="250" font-size="13.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="696" y="268" font-size="10.5" fill="#3c5b50">CVデータベース＋AI伴走で段階別の個別支援、</text>
  <text x="696" y="283" font-size="10.5" fill="#3c5b50">留学先・ラボ・企業とのマッチングも可能に</text>
  <rect x="40" y="304" width="360" height="68" rx="10" fill="#FCEFE4" filter="url(#shSoft)"/>
  <circle cx="68" cy="330" r="13" fill="url(#gWarn)"/>
  <text x="68" y="335" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="90" y="326" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="90" y="344" font-size="10.5" fill="#7a5a45">支援が乱立・重複・分散している</text>
  <text x="90" y="359" font-size="10.5" fill="#7a5a45">真に必要とする個人へ届かない</text>
  <circle cx="498" cy="338" r="19" fill="url(#gBlue)" filter="url(#sh)"/>
  <text x="498" y="343" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 338 L466 338 M523 332 L536 338 L523 344" stroke="#2a5e8e" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="674" y="304" width="566" height="68" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="674" y="304" width="6" height="68" rx="3" fill="url(#gAccH)"/>
  <text x="696" y="326" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="696" y="344" font-size="10.5" fill="#3c5b50">①学生入力ニーズ ＋ ②全学の支援情報を突合し、</text>
  <text x="696" y="359" font-size="10.5" fill="#3c5b50">必要な個人へ機会をダイレクトに投下</text>
  <rect x="40" y="380" width="360" height="68" rx="10" fill="#FCEFE4" filter="url(#shSoft)"/>
  <circle cx="68" cy="406" r="13" fill="url(#gWarn)"/>
  <text x="68" y="411" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="90" y="402" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活かされない</text>
  <text x="90" y="420" font-size="10.5" fill="#7a5a45">同じ手続きの反復・システム乱立</text>
  <text x="90" y="435" font-size="10.5" fill="#7a5a45">データ分散・異動でゼロリセット</text>
  <circle cx="498" cy="414" r="19" fill="url(#gBlue)" filter="url(#sh)"/>
  <text x="498" y="419" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 414 L466 414 M523 408 L536 414 L523 420" stroke="#2a5e8e" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="674" y="380" width="566" height="68" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="674" y="380" width="6" height="68" rx="3" fill="url(#gAccH)"/>
  <text x="696" y="402" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力削減・業務を効率化</text>
  <text x="696" y="420" font-size="10.5" fill="#3c5b50">データを基盤上で接続しAIで分析、反復・窓口を</text>
  <text x="696" y="435" font-size="10.5" fill="#3c5b50">RAGで省力化、IR・成果・回答を自動収集・統合</text>
  <rect x="32" y="468" width="1216" height="22" rx="6" fill="#EEF4F1"/>
  <text x="44" y="483" font-size="10.5" fill="#6b7280">副次効果：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <rect x="32" y="500" width="1216" height="104" rx="14" fill="url(#gAccH)" filter="url(#sh)"/>
  <text x="52" y="528" font-size="14" font-weight="700" fill="#bfe8d6">想定インパクト（試算）</text>
  <text x="52" y="548" font-size="10" fill="#9fd3bd">※数値はすべて想定・試算であり、確定値ではありません</text>
  <rect x="296" y="500" width="2" height="104" fill="#3a7a62"/>
  <text x="368" y="552" font-size="46" font-weight="700" fill="#ffffff" text-anchor="middle">＋3h</text>
  <text x="368" y="578" font-size="12.5" font-weight="700" fill="#d6f0e4" text-anchor="middle">教員の研究時間／週</text>
  <text x="368" y="595" font-size="10" fill="#9fd3bd" text-anchor="middle">（想定）</text>
  <rect x="540" y="512" width="2" height="80" fill="#3a7a62"/>
  <text x="638" y="552" font-size="46" font-weight="700" fill="#ffd9a8" text-anchor="middle">−50%</text>
  <text x="638" y="578" font-size="12.5" font-weight="700" fill="#d6f0e4" text-anchor="middle">定型問い合わせ</text>
  <text x="638" y="595" font-size="10" fill="#9fd3bd" text-anchor="middle">（試算）</text>
  <rect x="800" y="512" width="2" height="80" fill="#3a7a62"/>
  <text x="906" y="552" font-size="46" font-weight="700" fill="#ffffff" text-anchor="middle">＋20pt</text>
  <text x="906" y="578" font-size="12.5" font-weight="700" fill="#d6f0e4" text-anchor="middle">院生の研究力</text>
  <text x="906" y="595" font-size="10" fill="#9fd3bd" text-anchor="middle">（想定）</text>
  <rect x="1060" y="512" width="2" height="80" fill="#3a7a62"/>
  <text x="1156" y="552" font-size="46" font-weight="700" fill="#a8e6c2" text-anchor="middle">＋5pt</text>
  <text x="1156" y="578" font-size="12.5" font-weight="700" fill="#d6f0e4" text-anchor="middle">修了率（中退率↓）</text>
  <text x="1156" y="595" font-size="10" fill="#9fd3bd" text-anchor="middle">（試算）</text>
  <ellipse cx="640" cy="664" rx="360" ry="40" fill="url(#gBurst)"/>
  <path d="M40 644 L1206 644 L1240 676 L1206 708 L40 708 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <text x="623" y="682" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #variant-64 Before→After対応表(課題A-D↔打ち手A-D 1:1, 中央AI変換)＋kpiBand(巨大数字KPI主役・想定/試算明示)＋goalBurst。多色リッチ(teal+橙+青+緑GOAL)。 -->
