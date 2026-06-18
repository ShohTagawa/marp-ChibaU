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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#13658f"/><stop offset="1" stop-color="#0c4360"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa3a3"/><stop offset="1" stop-color="#0e6e6e"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2fae5e"/><stop offset="1" stop-color="#177a3c"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a86c8"/><stop offset="1" stop-color="#1c5f97"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd34d" stop-opacity="0.9"/><stop offset="0.55" stop-color="#2fae5e" stop-opacity="0.18"/><stop offset="1" stop-color="#2fae5e" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0 H0 V26" fill="none" stroke="#2b6f94" stroke-width="0.6" opacity="0.18"/></pattern>
    <pattern id="gridFine" width="6.5" height="6.5" patternUnits="userSpaceOnUse"><path d="M6.5 0 H0 V6.5" fill="none" stroke="#2b6f94" stroke-width="0.4" opacity="0.10"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c3a52" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c3a52" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0e6e6e"/></marker>
    <marker id="mB" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c5f97"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#eef4f8"/>
  <rect x="0" y="98" width="1280" height="588" fill="url(#gridFine)"/>
  <rect x="0" y="98" width="1280" height="588" fill="url(#grid)"/>
  <rect x="20" y="112" width="1240" height="560" fill="none" stroke="#1c5f97" stroke-width="1" stroke-dasharray="3 4" opacity="0.30"/>
  <path d="M20 104 H1260" stroke="#1c5f97" stroke-width="0.8" opacity="0.30"/>
  <path d="M20 100 V108 M1260 100 V108" stroke="#1c5f97" stroke-width="0.8" opacity="0.30"/>
  <text x="1262" y="111" font-size="9" fill="#1c5f97" opacity="0.5" text-anchor="end">scale 1:1 / 1280×720</text>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#dbeaf2"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#0c4360">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="124" font-size="12.5" font-weight="700" fill="#13658f">① 現状の課題（A–D）</text>
  <text x="640" y="124" font-size="12.5" font-weight="700" fill="#0e6e6e" text-anchor="middle">② 2本柱で打ち返す（アプリ × AI基盤｜A–D 1:1対応）</text>
  <text x="1240" y="124" font-size="12.5" font-weight="700" fill="#177a3c" text-anchor="end">③ GOAL</text>
  <rect x="32" y="134" width="248" height="372" rx="14" fill="#fbede2" filter="url(#sh)"/>
  <rect x="32" y="134" width="248" height="32" rx="14" fill="url(#gWarn)"/>
  <rect x="32" y="150" width="248" height="16" fill="url(#gWarn)"/>
  <circle cx="56" cy="150" r="12" fill="#ffffff"/>
  <text x="56" y="155" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">!</text>
  <text x="76" y="155" font-size="13" font-weight="700" fill="#ffffff">このままでは立ち行かない</text>
  <rect x="44" y="176" width="224" height="74" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="194" r="11" fill="#d2772f"/>
  <text x="62" y="199" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="80" y="192" font-size="12.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
  <text x="52" y="214" font-size="10.5" fill="#6b5648">院生が多様化（社会人・留学生・他分野）</text>
  <text x="52" y="230" font-size="10.5" fill="#6b5648">申請・評価・学振添削・全員留学で限界</text>
  <rect x="44" y="256" width="224" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="274" r="11" fill="#d2772f"/>
  <text x="62" y="279" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="80" y="272" font-size="12.5" font-weight="700" fill="#c4632a">人材育成の多様化・高度化</text>
  <text x="52" y="293" font-size="10.5" fill="#6b5648">成功モデルが多様化／求める水準が上昇</text>
  <text x="52" y="309" font-size="10.5" fill="#6b5648">個別の能力育成と資源の最適投下が必須</text>
  <rect x="44" y="322" width="224" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="340" r="11" fill="#d2772f"/>
  <text x="62" y="345" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="80" y="338" font-size="12.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
  <text x="52" y="359" font-size="10.5" fill="#6b5648">支援が乱立・重複・分散している</text>
  <text x="52" y="375" font-size="10.5" fill="#6b5648">真に必要な個人に届いていない</text>
  <rect x="44" y="388" width="224" height="62" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="406" r="11" fill="#d2772f"/>
  <text x="62" y="411" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="80" y="404" font-size="12.5" font-weight="700" fill="#c4632a">支援者の実践知が埋もれる</text>
  <text x="52" y="425" font-size="10.5" fill="#6b5648">同じ手続きの反復／システム乱立</text>
  <text x="52" y="441" font-size="10.5" fill="#6b5648">データ分散・異動でゼロリセット</text>
  <rect x="44" y="458" width="224" height="38" rx="9" fill="#fff3e9" stroke="#e0a878" stroke-width="1"/>
  <text x="156" y="475" font-size="11" font-weight="700" fill="#c4632a" text-anchor="middle">支援ギャップが広がり続ける</text>
  <text x="156" y="489" font-size="10" fill="#8a6a54" text-anchor="middle">教員数は一定・院生は増加</text>
  <path d="M282 300 L300 300 L312 320 L300 340 L282 340 L294 320 Z" fill="#0e6e6e"/>
  <rect x="318" y="134" width="610" height="372" rx="14" fill="#eafafa" filter="url(#sh)"/>
  <rect x="318" y="134" width="610" height="32" rx="14" fill="url(#gTeal)"/>
  <rect x="318" y="150" width="610" height="16" fill="url(#gTeal)"/>
  <circle cx="342" cy="150" r="12" fill="#ffffff"/>
  <g transform="translate(342,150)" stroke="#0e6e6e" stroke-width="1.6" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="362" y="155" font-size="13" font-weight="700" fill="#ffffff">柱① 図書館アプリ（フロント） ＋ 柱② AIエージェント基盤（裏側）</text>
  <rect x="332" y="174" width="138" height="166" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="401" y="192" font-size="11" font-weight="700" fill="#0e6e6e" text-anchor="middle">アプリ（学びの入口）</text>
  <rect x="372" y="200" width="58" height="120" rx="10" fill="#d6f2f2"/>
  <rect x="376" y="204" width="50" height="112" rx="8" fill="#ffffff" stroke="#0e6e6e" stroke-width="1.3"/>
  <rect x="376" y="204" width="50" height="16" rx="8" fill="#0e6e6e"/>
  <rect x="376" y="212" width="50" height="8" fill="#0e6e6e"/>
  <circle cx="401" cy="316" r="3" fill="#0e6e6e"/>
  <rect x="383" y="227" width="36" height="7" rx="3" fill="#d6f2f2"/>
  <circle cx="388" cy="247" r="4" fill="#9bdada"/><rect x="396" y="244" width="24" height="5" rx="2" fill="#cfeaea"/>
  <circle cx="388" cy="263" r="4" fill="#9bdada"/><rect x="396" y="260" width="24" height="5" rx="2" fill="#cfeaea"/>
  <circle cx="388" cy="279" r="4" fill="#9bdada"/><rect x="396" y="276" width="24" height="5" rx="2" fill="#cfeaea"/>
  <rect x="383" y="294" width="36" height="9" rx="4" fill="#1aa3a3"/>
  <path d="M470 257 L494 257" stroke="#0e6e6e" stroke-width="2" fill="none" marker-end="url(#mT)"/>
  <rect x="500" y="174" width="416" height="166" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="514" y="192" font-size="11" font-weight="700" fill="#0e6e6e">AIエージェント基盤 ― 実践知と全学データを接続</text>
  <rect x="514" y="202" width="200" height="62" rx="8" fill="#eafafa"/>
  <circle cx="534" cy="222" r="9" fill="#1aa3a3"/>
  <text x="534" y="226" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="550" y="219" font-size="11" font-weight="700" fill="#0e6e6e">指導負担を軽減・研究時間確保</text>
  <text x="524" y="237" font-size="9.5" fill="#3d6a6a">AI多言語支援／ラボ共通支援</text>
  <text x="524" y="252" font-size="9.5" fill="#3d6a6a">支援者どうしを接続</text>
  <rect x="724" y="202" width="180" height="62" rx="8" fill="#eafafa"/>
  <circle cx="744" cy="222" r="9" fill="#1aa3a3"/>
  <text x="744" y="226" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="760" y="219" font-size="11" font-weight="700" fill="#0e6e6e">院生の研究力を向上</text>
  <text x="734" y="237" font-size="9.5" fill="#3d6a6a">CV-DB（学習/スキル/資格）</text>
  <text x="734" y="252" font-size="9.5" fill="#3d6a6a">AI伴走＋留学・ラボ・企業マッチ</text>
  <rect x="514" y="270" width="200" height="62" rx="8" fill="#eafafa"/>
  <circle cx="534" cy="290" r="9" fill="#1aa3a3"/>
  <text x="534" y="294" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="550" y="287" font-size="11" font-weight="700" fill="#0e6e6e">最適情報を個人へ直送</text>
  <text x="524" y="305" font-size="9.5" fill="#3d6a6a">①学生の入力ニーズ ②全学支援情報</text>
  <text x="524" y="320" font-size="9.5" fill="#3d6a6a">を突合 → 必要な個人にダイレクト</text>
  <rect x="724" y="270" width="180" height="62" rx="8" fill="#eafafa"/>
  <circle cx="744" cy="290" r="9" fill="#1aa3a3"/>
  <text x="744" y="294" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="760" y="287" font-size="11" font-weight="700" fill="#0e6e6e">支援者を省力化・効率化</text>
  <text x="734" y="305" font-size="9.5" fill="#3d6a6a">基盤でデータ接続・AI分析</text>
  <text x="734" y="320" font-size="9.5" fill="#3d6a6a">反復/窓口をRAGで省力・自動統合</text>
  <rect x="332" y="350" width="584" height="44" rx="10" fill="#d6f2f2"/>
  <circle cx="356" cy="372" r="12" fill="#0e6e6e"/>
  <g transform="translate(356,372)" stroke="#ffffff" stroke-width="1.6" fill="none"><circle cx="0" cy="0" r="6"/><circle cx="0" cy="0" r="2.5"/></g>
  <text x="378" y="368" font-size="12" font-weight="700" fill="#0c4360">副次効果：許諾済データの共有・利活用（学内・行政・企業の共同研究）</text>
  <text x="378" y="386" font-size="11" fill="#2d5560">統合分析で経営判断を迅速化／アプリの外販で新たな価値へ</text>
  <text x="624" y="426" font-size="11.5" font-weight="700" fill="#13658f" text-anchor="middle">想定KPI（いずれも試算）</text>
  <rect x="332" y="436" width="138" height="62" rx="9" fill="#ffffff" stroke="#9ec9e0" stroke-width="1" filter="url(#shSoft)"/>
  <text x="401" y="464" font-size="22" font-weight="700" fill="#1c5f97" text-anchor="middle">＋3h</text>
  <text x="401" y="482" font-size="10" fill="#5b7e93" text-anchor="middle">教員の研究時間/週</text>
  <text x="401" y="494" font-size="8.5" fill="#9bb4c4" text-anchor="middle">※想定・試算</text>
  <rect x="480" y="436" width="138" height="62" rx="9" fill="#ffffff" stroke="#9ec9e0" stroke-width="1" filter="url(#shSoft)"/>
  <text x="549" y="464" font-size="22" font-weight="700" fill="#1c5f97" text-anchor="middle">−50%</text>
  <text x="549" y="482" font-size="10" fill="#5b7e93" text-anchor="middle">定型問い合わせ</text>
  <text x="549" y="494" font-size="8.5" fill="#9bb4c4" text-anchor="middle">※想定・試算</text>
  <rect x="628" y="436" width="138" height="62" rx="9" fill="#ffffff" stroke="#9ec9e0" stroke-width="1" filter="url(#shSoft)"/>
  <text x="697" y="464" font-size="22" font-weight="700" fill="#1c5f97" text-anchor="middle">＋20pt</text>
  <text x="697" y="482" font-size="10" fill="#5b7e93" text-anchor="middle">院生の研究力</text>
  <text x="697" y="494" font-size="8.5" fill="#9bb4c4" text-anchor="middle">※想定・試算</text>
  <rect x="776" y="436" width="140" height="62" rx="9" fill="#ffffff" stroke="#9ec9e0" stroke-width="1" filter="url(#shSoft)"/>
  <text x="846" y="464" font-size="22" font-weight="700" fill="#1c5f97" text-anchor="middle">＋5pt</text>
  <text x="846" y="482" font-size="10" fill="#5b7e93" text-anchor="middle">修了率（中退↓）</text>
  <text x="846" y="494" font-size="8.5" fill="#9bb4c4" text-anchor="middle">※想定・試算</text>
  <path d="M930 300 L948 300 L960 320 L948 340 L930 340 L942 320 Z" fill="#177a3c"/>
  <circle cx="1098" cy="290" r="150" fill="url(#burst)"/>
  <rect x="966" y="134" width="282" height="372" rx="14" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="992" cy="162" r="13" fill="#ffffff"/>
  <g transform="translate(992,162)" stroke="#177a3c" stroke-width="1.8" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="1016" y="167" font-size="14" font-weight="700" fill="#ffffff">GOAL</text>
  <g transform="translate(1107,230)"><g stroke="#ffe08a" stroke-width="2.4" stroke-linecap="round"><path d="M0 -52 V-40"/><path d="M37 -37 L29 -29"/><path d="M52 0 H40"/><path d="M37 37 L29 29"/><path d="M0 52 V40"/><path d="M-37 37 L-29 29"/><path d="M-52 0 H-40"/><path d="M-37 -37 L-29 -29"/></g><circle cx="0" cy="0" r="26" fill="#ffffff"/><path d="M0 -16 L4.7 -5 L16 -4 L7.5 3.5 L10 15 L0 9 L-10 15 L-7.5 3.5 L-16 -4 L-4.7 -5 Z" fill="#2fae5e"/></g>
  <text x="1107" y="318" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が</text>
  <text x="1107" y="340" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">躍動する大学へ</text>
  <rect x="982" y="356" width="250" height="32" rx="8" fill="#ffffff" opacity="0.18"/>
  <text x="1107" y="377" font-size="11.5" fill="#eafff2" text-anchor="middle">教員の手間↓ × 院生の研究力↑</text>
  <rect x="982" y="394" width="250" height="32" rx="8" fill="#ffffff" opacity="0.18"/>
  <text x="1107" y="415" font-size="11.5" fill="#eafff2" text-anchor="middle">支援が必要な個人に確実に届く</text>
  <rect x="982" y="432" width="250" height="32" rx="8" fill="#ffffff" opacity="0.18"/>
  <text x="1107" y="453" font-size="11.5" fill="#eafff2" text-anchor="middle">実践知が蓄積し連鎖的に伸びる</text>
  <text x="1107" y="488" font-size="11" font-weight="700" fill="#d8ffe6" text-anchor="middle">中退率↓・修了率↑・研究力↑の好循環</text>
  <rect x="32" y="516" width="1216" height="62" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="50" y="540" font-size="12" font-weight="700" fill="#13658f">ロードマップ</text>
  <path d="M150 552 H1200" stroke="#bcd6e6" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round" fill="none"/>
  <circle cx="200" cy="552" r="16" fill="url(#gTeal)"/>
  <text x="200" y="557" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <text x="230" y="548" font-size="12" font-weight="700" fill="#0e6e6e">図書館アプリ</text>
  <text x="230" y="564" font-size="10" fill="#5b7e93">情報・資源を一つに集約</text>
  <circle cx="560" cy="552" r="16" fill="url(#gTeal)"/>
  <text x="560" y="557" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <text x="590" y="548" font-size="12" font-weight="700" fill="#0e6e6e">AI基盤で個別支援</text>
  <text x="590" y="564" font-size="10" fill="#5b7e93">学習支援・負担軽減・実践知展開</text>
  <circle cx="930" cy="552" r="16" fill="url(#gGoal)"/>
  <text x="930" y="557" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <text x="960" y="548" font-size="12" font-weight="700" fill="#177a3c">全学・経営へ展開</text>
  <text x="960" y="564" font-size="10" fill="#5b7e93">IR統合・共同研究・外販</text>
  <rect x="32" y="588" width="1216" height="84" rx="12" fill="#f3f8fb" filter="url(#shSoft)"/>
  <text x="50" y="610" font-size="12" font-weight="700" fill="#13658f">登場人物 ― 誰が躍動するか</text>
  <g transform="translate(120,642)" stroke="#1aa3a3" stroke-width="2" fill="none"><circle cx="0" cy="-6" r="6"/><path d="M-11 12 A11 11 0 0 1 11 12"/></g>
  <text x="148" y="638" font-size="12.5" font-weight="700" fill="#0e6e6e">院生・学生</text>
  <text x="148" y="654" font-size="10" fill="#5b7e93">AIが伴走し研究力が伸びる</text>
  <g transform="translate(400,642)" stroke="#1c5f97" stroke-width="2" fill="none"><circle cx="-5" cy="-6" r="5"/><circle cx="6" cy="-6" r="5"/><path d="M-15 12 A9 9 0 0 1 -1 11"/><path d="M-1 11 A9 9 0 0 1 16 12"/></g>
  <text x="430" y="638" font-size="12.5" font-weight="700" fill="#1c5f97">教員</text>
  <text x="430" y="654" font-size="10" fill="#5b7e93">定型支援をAIが肩代わり・研究時間↑</text>
  <g transform="translate(700,642)" stroke="#d2772f" stroke-width="2" fill="none"><circle cx="0" cy="0" r="6"/><path d="M0 -11 V-7 M0 11 V7 M-11 0 H-7 M11 0 H7 M-8 -8 L-5 -5 M8 8 L5 5 M8 -8 L5 -5 M-8 8 L-5 5"/></g>
  <text x="728" y="638" font-size="12.5" font-weight="700" fill="#c4632a">支援者・職員</text>
  <text x="728" y="654" font-size="10" fill="#5b7e93">実践知が蓄積・窓口DXで省力化</text>
  <g transform="translate(1000,642)" stroke="#177a3c" stroke-width="2" fill="none"><path d="M-11 -4 L0 -10 L11 -4"/><path d="M-9 -4 V8 M-3 -4 V8 M3 -4 V8 M9 -4 V8 M-11 9 H11"/></g>
  <text x="1028" y="638" font-size="12.5" font-weight="700" fill="#177a3c">大学（経営）</text>
  <text x="1028" y="654" font-size="10" fill="#5b7e93">データ統合でIR・経営判断を迅速化</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤でA-D 1:1対応→③GOALバースト)＋下段ロードマップ＋最下段に登場人物アイコン群。0層=ブループリント方眼(粗+細)＋寸法線で設計図トーン。配色=teal(打ち手)＋橙(課題)＋緑(GOAL)＋青(背景/KPI/教員)の多色リッチ。密度packed。KPIは全て「想定・試算」明示。appMockup/goalBurst/人物アイコン投入。 -->
