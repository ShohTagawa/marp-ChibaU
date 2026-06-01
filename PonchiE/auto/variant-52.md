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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2bb089"/><stop offset="0.55" stop-color="#127a8f"/><stop offset="1" stop-color="#0d4f63"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a52"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a9d4f"/><stop offset="1" stop-color="#1d6f31"/></linearGradient>
    <linearGradient id="gBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fb"/><stop offset="1" stop-color="#e3edf7"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#127a8f" stop-opacity="0.22"/><stop offset="1" stop-color="#127a8f" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3a9d4f" stop-opacity="0.30"/><stop offset="1" stop-color="#3a9d4f" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0d3a4a" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0d3a4a" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#127a8f"/></marker>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gBg)"/>
  <g opacity="0.10" stroke="#2563a8" fill="none" stroke-width="1.1">
    <circle cx="612" cy="320" r="232"/>
    <ellipse cx="612" cy="320" rx="232" ry="78"/>
    <ellipse cx="612" cy="320" rx="232" ry="150"/>
    <ellipse cx="612" cy="320" rx="92" ry="232"/>
    <ellipse cx="612" cy="320" rx="170" ry="232"/>
    <path d="M380 320 H844 M612 88 V552"/>
  </g>
  <g opacity="0.08" stroke="#2563a8" stroke-width="1" stroke-dasharray="3 7" fill="none">
    <path d="M120 150 L360 250 L240 430 L520 500 L760 520 L1040 430 L1160 230 L900 140 L612 110 L120 150"/>
    <path d="M360 250 L612 320 L760 520 M520 500 L612 320 L900 140 M240 430 L612 320 L1040 430"/>
  </g>
  <g opacity="0.5" fill="#2563a8"><circle cx="120" cy="150" r="3"/><circle cx="360" cy="250" r="3"/><circle cx="240" cy="430" r="3"/><circle cx="520" cy="500" r="3"/><circle cx="760" cy="520" r="3"/><circle cx="1040" cy="430" r="3"/><circle cx="1160" cy="230" r="3"/><circle cx="900" cy="140" r="3"/><circle cx="612" cy="110" r="3"/></g>
  <rect x="0" y="98" width="1280" height="492" fill="#ffffff" opacity="0.42"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#dde9f5"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16486e">学内に分散する〈情報・データ・支援・機会〉を1つの基盤に接続 ― 研究者と支援者が躍動する大学へ</text>
  <text x="58" y="126" font-size="13" font-weight="700" fill="#c4632a">課題：資源も実践知も散在</text>
  <g font-size="11.5">
    <rect x="40" y="138" width="246" height="80" rx="11" fill="#FBEDE2" stroke="#eccba9" filter="url(#shSoft)"/>
    <circle cx="64" cy="162" r="13" fill="url(#gWarn)"/><text x="64" y="167" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="86" y="160" font-size="13" font-weight="700" fill="#9a4e1c">教員の業務負荷が急増</text>
    <text x="50" y="184" fill="#5a3a23">院生の多様化(社会人・留学生・他分野)</text>
    <text x="50" y="202" fill="#5a3a23">申請・評価・学振・全員留学で限界</text>
    <rect x="40" y="226" width="246" height="80" rx="11" fill="#FBEDE2" stroke="#eccba9" filter="url(#shSoft)"/>
    <circle cx="64" cy="250" r="13" fill="url(#gWarn)"/><text x="64" y="255" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="86" y="248" font-size="13" font-weight="700" fill="#9a4e1c">人材育成の多様化・高度化</text>
    <text x="50" y="272" fill="#5a3a23">成功モデルが多様化・水準は上昇</text>
    <text x="50" y="290" fill="#5a3a23">個別育成と資源の最適投下が必須</text>
    <rect x="40" y="314" width="246" height="80" rx="11" fill="#FBEDE2" stroke="#eccba9" filter="url(#shSoft)"/>
    <circle cx="64" cy="338" r="13" fill="url(#gWarn)"/><text x="64" y="343" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="86" y="336" font-size="13" font-weight="700" fill="#9a4e1c">大学→個人のミッシングリンク</text>
    <text x="50" y="360" fill="#5a3a23">支援が乱立・重複・分散</text>
    <text x="50" y="378" fill="#5a3a23">真に必要な個人に届かない</text>
    <rect x="40" y="402" width="246" height="80" rx="11" fill="#FBEDE2" stroke="#eccba9" filter="url(#shSoft)"/>
    <circle cx="64" cy="426" r="13" fill="url(#gWarn)"/><text x="64" y="431" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="86" y="424" font-size="13" font-weight="700" fill="#9a4e1c">支援者の実践知が埋もれる</text>
    <text x="50" y="448" fill="#5a3a23">同じ手続きの反復・システム乱立</text>
    <text x="50" y="466" fill="#5a3a23">データ分散・異動でゼロリセット</text>
  </g>
  <g stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.9">
    <path d="M286 178 C360 178 408 250 480 290" marker-end="url(#mW)"/>
    <path d="M286 266 C360 266 408 290 480 308" marker-end="url(#mW)"/>
    <path d="M286 354 C360 354 408 330 480 326" marker-end="url(#mW)"/>
    <path d="M286 442 C360 442 408 390 480 344" marker-end="url(#mW)"/>
  </g>
  <circle cx="566" cy="316" r="158" fill="url(#glow)"/>
  <circle cx="566" cy="316" r="92" fill="url(#gNexus)" filter="url(#sh)"/>
  <circle cx="566" cy="316" r="92" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.5"/>
  <text x="566" y="300" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="566" y="328" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="566" y="350" font-size="11.5" fill="#cfeef2" text-anchor="middle">情報・データ・支援を1点に</text>
  <text x="566" y="206" font-size="11" font-weight="700" fill="#0d4f63" text-anchor="middle">AI伴走</text>
  <circle cx="566" cy="232" r="22" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(566,232)" stroke="#127a8f" stroke-width="1.8" fill="none"><rect x="-8" y="-8" width="16" height="16" rx="2"/><path d="M-8 -3 H-12 M-8 3 H-12 M8 -3 H12 M8 3 H12 M-3 -8 V-12 M3 -8 V-12 M-3 8 V12 M3 8 V12"/></g>
  <g stroke="#127a8f" stroke-width="3" fill="none">
    <path d="M658 316 C742 316 742 178 818 178" marker-end="url(#mA)"/>
    <path d="M658 316 C742 316 742 266 818 266" marker-end="url(#mA)"/>
    <path d="M658 316 C742 316 742 354 818 354" marker-end="url(#mA)"/>
    <path d="M658 316 C742 316 742 442 818 442" marker-end="url(#mA)"/>
  </g>
  <text x="958" y="126" font-size="13" font-weight="700" fill="#0f6e55">AI打ち手：課題A-Dに1:1で対応</text>
  <g font-size="11.5">
    <rect x="824" y="138" width="420" height="80" rx="11" fill="#ffffff" stroke="#cfe3da" filter="url(#shSoft)"/>
    <circle cx="848" cy="162" r="13" fill="url(#gAcc)"/><text x="848" y="167" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="870" y="160" font-size="13" font-weight="700" fill="#0f6e55">指導負担を軽減し研究時間を確保</text>
    <text x="834" y="184" fill="#37463f">AI多言語支援・ラボ共通支援</text>
    <text x="834" y="202" fill="#37463f">支援者どうしを接続</text>
    <rect x="824" y="226" width="420" height="80" rx="11" fill="#ffffff" stroke="#cfe3da" filter="url(#shSoft)"/>
    <circle cx="848" cy="250" r="13" fill="url(#gAcc)"/><text x="848" y="255" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="870" y="248" font-size="13" font-weight="700" fill="#0f6e55">院生の研究力を段階別に向上</text>
    <text x="834" y="272" fill="#37463f">CV-DB(学習・スキル・資格)＋AI伴走</text>
    <text x="834" y="290" fill="#37463f">留学・ラボ・企業マッチング</text>
    <rect x="824" y="314" width="420" height="80" rx="11" fill="#ffffff" stroke="#cfe3da" filter="url(#shSoft)"/>
    <circle cx="848" cy="338" r="13" fill="url(#gAcc)"/><text x="848" y="343" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="870" y="336" font-size="13" font-weight="700" fill="#0f6e55">個別最適な情報を直に届ける</text>
    <text x="834" y="360" fill="#37463f">①学生入力ニーズ ＋ ②全学の支援情報</text>
    <text x="834" y="378" fill="#37463f">を突合 → 必要な個人へダイレクト投下</text>
    <rect x="824" y="402" width="420" height="80" rx="11" fill="#ffffff" stroke="#cfe3da" filter="url(#shSoft)"/>
    <circle cx="848" cy="426" r="13" fill="url(#gAcc)"/><text x="848" y="431" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="870" y="424" font-size="13" font-weight="700" fill="#0f6e55">支援者の労力削減・効率化</text>
    <text x="834" y="448" fill="#37463f">反復・窓口業務をRAGで省力化</text>
    <text x="834" y="466" fill="#37463f">IR・成果・回答を自動収集→統合分析</text>
  </g>
  <ellipse cx="640" cy="556" rx="520" ry="120" fill="url(#burst)"/>
  <path d="M40 502 L1206 502 L1240 540 L1206 578 L40 578 Z" fill="url(#gGoal)" filter="url(#shSoft)"/>
  <text x="64" y="532" font-size="13" fill="#d6f0dc">副次効果</text>
  <text x="64" y="558" font-size="13.5" font-weight="700" fill="#ffffff">許諾済データの共同研究(学内・行政・企業)／統合分析で経営判断を迅速化／アプリ外販</text>
  <rect x="1018" y="510" width="186" height="60" rx="10" fill="#ffffff" opacity="0.16"/>
  <text x="1111" y="534" font-size="12" fill="#eafaee" text-anchor="middle">GOAL：研究者と支援者が</text>
  <text x="1111" y="556" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">躍動する大学へ</text>
  <rect x="40" y="594" width="1200" height="104" rx="14" fill="#0f4a39" filter="url(#sh)"/>
  <text x="62" y="620" font-size="13.5" font-weight="700" fill="#ffd9b0">想定KPI（いずれも想定／試算値）</text>
  <g text-anchor="middle">
    <text x="200" y="660" font-size="40" font-weight="700" fill="#ffffff">+3h</text>
    <text x="200" y="682" font-size="12" fill="#bfe6d6">教員の研究時間／週</text>
    <text x="490" y="660" font-size="40" font-weight="700" fill="#ee9a52">−50%</text>
    <text x="490" y="682" font-size="12" fill="#bfe6d6">定型問い合わせ</text>
    <text x="780" y="660" font-size="40" font-weight="700" fill="#ffffff">+20pt</text>
    <text x="780" y="682" font-size="12" fill="#bfe6d6">院生の研究力</text>
    <text x="1068" y="660" font-size="40" font-weight="700" fill="#7fdf9b">+5pt</text>
    <text x="1068" y="682" font-size="12" fill="#bfe6d6">修了率（中退率↓）</text>
  </g>
  <line x1="345" y1="618" x2="345" y2="684" stroke="#2b6e5a" stroke-width="1.2"/>
  <line x1="635" y1="618" x2="635" y2="684" stroke="#2b6e5a" stroke-width="1.2"/>
  <line x1="924" y1="618" x2="924" y2="684" stroke="#2b6e5a" stroke-width="1.2"/>
</svg>

<!-- variant-52：ハブ&スポーク。背景に薄いグローブ(経線/緯線楕円)＋ネットワーク点線で国際×接続を地に。中央=接続基盤Nexus、左=課題A-D(橙)が曲線で合流、右=AI打ち手A-D(teal)へ放射(1:1対応)。下=goalBurst付きGOAL帯＋巨大数字KPIバンド(全て想定/試算明示)。多色リッチ(teal+橙+緑GOAL+青背景)。 -->
</content>
</invoke>
