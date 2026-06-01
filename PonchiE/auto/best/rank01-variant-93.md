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
    <linearGradient id="gWarmH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4a32a"/><stop offset="1" stop-color="#e07b2a"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7b733"/><stop offset="1" stop-color="#e2762a"/></linearGradient>
    <linearGradient id="gHub" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ef8b1e"/><stop offset="1" stop-color="#c85f12"/></linearGradient>
    <radialGradient id="glowW" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f4a32a" stop-opacity="0.22"/><stop offset="1" stop-color="#f4a32a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#b5651d" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#b5651d" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="64" fill="url(#gWarmH)"/>
  <text x="40" y="41" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1104" y="15" width="140" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1118" y="21" width="112" height="22"/>
  <text x="40" y="96" font-size="16" font-weight="700" fill="#c2611a">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="500" cy="360" r="190" fill="url(#glowW)"/>
  <rect x="40" y="120" width="430" height="200" rx="16" fill="#fffaf2" stroke="#f3d9af" stroke-width="1" filter="url(#shSoft)"/>
  <circle cx="74" cy="152" r="16" fill="url(#gWarm)"/>
  <g transform="translate(74,153)" stroke="#ffffff" stroke-width="2.2" fill="none"><circle cx="-5" cy="-4" r="3.6"/><circle cx="6" cy="-4" r="3.6"/><path d="M-12 8 A7 7 0 0 1 0 7"/><path d="M0 7 A7 7 0 0 1 13 8"/></g>
  <text x="100" y="150" font-size="17" font-weight="700" fill="#9a4a10">A 教員</text>
  <text x="100" y="170" font-size="13" font-weight="700" fill="#3a3a3a">研究時間を取り戻す</text>
  <text x="62" y="200" font-size="12" font-weight="700" fill="#c2611a">課題：業務負荷の急増</text>
  <text x="62" y="221" font-size="11.5" fill="#5a5045">院生の多様化・申請・評価・学振添削・全員留学で限界</text>
  <line x1="62" y1="236" x2="448" y2="236" stroke="#f0dcc0" stroke-width="1"/>
  <text x="62" y="258" font-size="12" font-weight="700" fill="#c2611a">打ち手：</text>
  <text x="62" y="278" font-size="12" fill="#3a3a3a">AI多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="62" y="298" font-size="12.5" font-weight="700" fill="#9a4a10">→ 支援者へ接続し、研究そのものに時間を回せる</text>
  <rect x="810" y="120" width="430" height="200" rx="16" fill="#fffaf2" stroke="#f3d9af" stroke-width="1" filter="url(#shSoft)"/>
  <circle cx="844" cy="152" r="16" fill="url(#gWarm)"/>
  <g transform="translate(844,152)" stroke="#ffffff" stroke-width="2.2" fill="none"><circle cx="0" cy="0" r="9"/><circle cx="0" cy="0" r="3.6"/></g>
  <text x="870" y="150" font-size="17" font-weight="700" fill="#9a4a10">B 院生</text>
  <text x="870" y="170" font-size="13" font-weight="700" fill="#3a3a3a">研究力を伸ばす</text>
  <text x="832" y="200" font-size="12" font-weight="700" fill="#c2611a">課題：育成の多様化・高度化</text>
  <text x="832" y="221" font-size="11.5" fill="#5a5045">個別の能力育成と資源の最適投下が必須</text>
  <line x1="832" y1="236" x2="1218" y2="236" stroke="#f0dcc0" stroke-width="1"/>
  <text x="832" y="258" font-size="12" font-weight="700" fill="#c2611a">打ち手：</text>
  <text x="832" y="278" font-size="12" fill="#3a3a3a">CVデータベース＋AI伴走の段階別個別支援</text>
  <text x="832" y="298" font-size="12.5" font-weight="700" fill="#9a4a10">→ 留学・ラボ・企業マッチングも可能に</text>
  <rect x="40" y="338" width="430" height="200" rx="16" fill="#fffaf2" stroke="#f3d9af" stroke-width="1" filter="url(#shSoft)"/>
  <circle cx="74" cy="370" r="16" fill="url(#gWarm)"/>
  <g transform="translate(74,371)" stroke="#ffffff" stroke-width="2.2" fill="none"><circle cx="0" cy="-5" r="4.5"/><path d="M-8 9 A8 8 0 0 1 8 9"/></g>
  <text x="100" y="368" font-size="17" font-weight="700" fill="#9a4a10">C 個人</text>
  <text x="100" y="388" font-size="13" font-weight="700" fill="#3a3a3a">必要な情報を直に届ける</text>
  <text x="62" y="418" font-size="12" font-weight="700" fill="#c2611a">課題：大学→個人のミッシングリンク</text>
  <text x="62" y="439" font-size="11.5" fill="#5a5045">支援が乱立・重複・分散し、必要な個人に届かない</text>
  <line x1="62" y1="454" x2="448" y2="454" stroke="#f0dcc0" stroke-width="1"/>
  <text x="62" y="476" font-size="12" font-weight="700" fill="#c2611a">打ち手：</text>
  <text x="62" y="496" font-size="12" fill="#3a3a3a">①学生入力ニーズ ＋ ②全学の支援情報を突合</text>
  <text x="62" y="516" font-size="12.5" font-weight="700" fill="#9a4a10">→ 真に必要な個人へダイレクト投下</text>
  <rect x="810" y="338" width="430" height="200" rx="16" fill="#fffaf2" stroke="#f3d9af" stroke-width="1" filter="url(#shSoft)"/>
  <circle cx="844" cy="370" r="16" fill="url(#gWarm)"/>
  <g transform="translate(844,370)" stroke="#ffffff" stroke-width="2.2" fill="none"><rect x="-10" y="-5" width="10" height="10" rx="4.5"/><rect x="0" y="-5" width="10" height="10" rx="4.5"/></g>
  <text x="870" y="368" font-size="17" font-weight="700" fill="#9a4a10">D 支援者</text>
  <text x="870" y="388" font-size="13" font-weight="700" fill="#3a3a3a">実践知を活かし効率化</text>
  <text x="832" y="418" font-size="12" font-weight="700" fill="#c2611a">課題：実践知が散逸</text>
  <text x="832" y="439" font-size="11.5" fill="#5a5045">反復業務・システム乱立・異動でゼロリセット</text>
  <line x1="832" y1="454" x2="1218" y2="454" stroke="#f0dcc0" stroke-width="1"/>
  <text x="832" y="476" font-size="12" font-weight="700" fill="#c2611a">打ち手：</text>
  <text x="832" y="496" font-size="12" fill="#3a3a3a">データを基盤上で接続しRAGで窓口を省力化</text>
  <text x="832" y="516" font-size="12.5" font-weight="700" fill="#9a4a10">→ IR・成果・回答を自動収集し統合分析</text>
  <path d="M470 200 L560 280" stroke="#f0c986" stroke-width="6" stroke-linecap="round"/>
  <path d="M810 200 L720 280" stroke="#f0c986" stroke-width="6" stroke-linecap="round"/>
  <path d="M470 458 L560 380" stroke="#f0c986" stroke-width="6" stroke-linecap="round"/>
  <path d="M810 458 L720 380" stroke="#f0c986" stroke-width="6" stroke-linecap="round"/>
  <circle cx="640" cy="330" r="62" fill="url(#gHub)" filter="url(#sh)"/>
  <circle cx="640" cy="330" r="62" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.55"/>
  <text x="640" y="324" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="346" font-size="11" fill="#ffe9cf" text-anchor="middle">接続基盤ハブ</text>
  <rect x="556" y="404" width="168" height="120" rx="12" fill="#ffffff" stroke="#e7b97a" stroke-width="1.5" filter="url(#shSoft)"/>
  <rect x="556" y="404" width="168" height="22" rx="12" fill="url(#gWarmH)"/>
  <rect x="556" y="415" width="168" height="11" fill="url(#gWarmH)"/>
  <text x="640" y="419" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <rect x="568" y="434" width="144" height="14" rx="3" fill="#fcefd9"/>
  <text x="575" y="444" font-size="9.5" fill="#9a4a10">あなたに届いた支援 3件</text>
  <rect x="568" y="454" width="68" height="30" rx="5" fill="#fff6e8" stroke="#f0d3a0" stroke-width="1"/>
  <text x="602" y="467" font-size="9" fill="#7a5a30" text-anchor="middle">学振添削</text>
  <text x="602" y="478" font-size="9" font-weight="700" fill="#c2611a" text-anchor="middle">AI伴走</text>
  <rect x="644" y="454" width="68" height="30" rx="5" fill="#fff6e8" stroke="#f0d3a0" stroke-width="1"/>
  <text x="678" y="467" font-size="9" fill="#7a5a30" text-anchor="middle">留学先</text>
  <text x="678" y="478" font-size="9" font-weight="700" fill="#c2611a" text-anchor="middle">マッチ</text>
  <rect x="568" y="490" width="144" height="24" rx="6" fill="url(#gWarm)"/>
  <text x="640" y="506" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">必要な機会を直に受け取る</text>
  <text x="500" y="563" font-size="11" fill="#9a8a76" text-anchor="middle">入力 → 接続 → AI分析 → 個別投下</text>
  <rect x="40" y="588" width="760" height="58" rx="10" fill="#fff7ec" stroke="#f3d9af" stroke-width="1"/>
  <text x="56" y="607" font-size="11" font-weight="700" fill="#c2611a">想定KPI（試算・効果仮説）</text>
  <line x1="238" y1="600" x2="238" y2="636" stroke="#f0dcc0" stroke-width="1"/>
  <line x1="458" y1="600" x2="458" y2="636" stroke="#f0dcc0" stroke-width="1"/>
  <line x1="636" y1="600" x2="636" y2="636" stroke="#f0dcc0" stroke-width="1"/>
  <text x="56" y="637" font-size="25" font-weight="700" fill="#e2762a">＋3h<tspan font-size="11" fill="#7a5a30">/週 研究時間</tspan></text>
  <text x="250" y="637" font-size="25" font-weight="700" fill="#e2762a">−50%<tspan font-size="11" fill="#7a5a30"> 定型問合せ</tspan></text>
  <text x="470" y="637" font-size="25" font-weight="700" fill="#e2762a">＋20pt<tspan font-size="11" fill="#7a5a30"> 研究力</tspan></text>
  <text x="648" y="637" font-size="25" font-weight="700" fill="#e2762a">＋5pt<tspan font-size="11" fill="#7a5a30"> 修了率</tspan></text>
  <rect x="816" y="588" width="424" height="58" rx="10" fill="#fdf3e6" stroke="#f0d3a0" stroke-width="1"/>
  <text x="832" y="606" font-size="10.5" font-weight="700" fill="#c2611a">副次効果</text>
  <text x="832" y="624" font-size="10.5" fill="#5a5045">許諾済データの共有・利活用（学内・行政・企業の共同研究）</text>
  <text x="832" y="640" font-size="10.5" fill="#5a5045">統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M40 662 L1206 662 L1240 686 L1206 710 L40 710 Z" fill="url(#gWarmH)"/>
  <text x="635" y="694" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-93 2×2マトリクス+中心Nexusハブ。橙黄の温配色・airy密度。appMockup/kpiBand(想定試算)/副次効果バンド入り。A-D課題↔打ち手1:1。 -->
</content>
</invoke>
