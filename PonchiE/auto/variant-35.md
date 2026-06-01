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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="1" stop-color="#b85c1c"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2a65a"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gWarmSoft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdf1e2"/><stop offset="1" stop-color="#fbe6cf"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6b13e"/><stop offset="1" stop-color="#e07b1e"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f7c873" stop-opacity="0.55"/><stop offset="0.5" stop-color="#f0a23e" stop-opacity="0.75"/><stop offset="1" stop-color="#2f7d63" stop-opacity="0.55"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f9b73"/><stop offset="1" stop-color="#1b6147"/></linearGradient>
    <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f6b13e" stop-opacity="0.55"/><stop offset="1" stop-color="#f6b13e" stop-opacity="0"/></radialGradient>
    <radialGradient id="goalBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#41c08c" stop-opacity="0.5"/><stop offset="1" stop-color="#41c08c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#8a4a12" flood-opacity="0.25"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#8a4a12" flood-opacity="0.16"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1b6147"/></marker>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#c89a5e" stroke-width="0.6"/></pattern>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffdf8"/>
  <rect x="0" y="88" width="1280" height="632" fill="url(#grid)" opacity="0.28"/>
  <g stroke="#c08a3e" stroke-width="0.8" opacity="0.30" fill="none"><path d="M40 104 L40 96 M1240 104 L1240 96 M40 100 L1240 100"/><path d="M44 100 L52 97 M44 100 L52 103" stroke-width="0.8"/><path d="M1236 100 L1228 97 M1236 100 L1228 103" stroke-width="0.8"/></g>
  <text x="640" y="98" font-size="10" fill="#b5823a" opacity="0.5" text-anchor="middle">1280 × 720  —  Nexus University blueprint</text>
  <g stroke="#c08a3e" stroke-width="0.8" opacity="0.30" fill="none"><path d="M24 116 L32 116 M24 700 L32 700 M28 116 L28 700"/></g>
  <path d="M48 300 L1232 300 L1232 470 L48 470 Z" fill="url(#gBack)" opacity="0.18"/>
  <path d="M48 300 L1232 300 L1232 312 L48 312 Z" fill="#d2772f" opacity="0.12"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（役員ブリーフ 1枚）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#fbe6cf"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#9a4a14">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="42" y="112" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）が流れ込む</text>
  <rect x="40" y="118" width="258" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="118" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="140" r="11" fill="#fbe6cf"/>
  <text x="66" y="145" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="145" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="167" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="183" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="204" width="258" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="204" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="226" r="11" fill="#fbe6cf"/>
  <text x="66" y="231" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="231" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="253" font-size="10" fill="#666">求める水準が上昇・成功モデルも多様化</text>
  <text x="56" y="269" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="290" width="258" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="290" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="312" r="11" fill="#fbe6cf"/>
  <text x="66" y="317" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="317" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="339" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="355" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="376" width="258" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="376" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="398" r="11" fill="#fbe6cf"/>
  <text x="66" y="403" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="403" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="425" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="441" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M300 157 C334 157 332 280 372 286" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32"/>
  <path d="M300 243 C334 243 340 286 372 290" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32"/>
  <path d="M300 329 C334 329 340 296 372 292" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32"/>
  <path d="M300 415 C334 415 340 304 372 296" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32"/>
  <path d="M362 291 L382 281 L382 287 L398 287 L398 295 L382 295 L382 301 Z" fill="#d2772f"/>
  <circle cx="510" cy="288" r="168" fill="url(#heroGlow)"/>
  <rect x="406" y="120" width="320" height="338" rx="20" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.14" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="566" cy="289" rx="150" ry="150"/><ellipse cx="566" cy="289" rx="60" ry="150"/><ellipse cx="566" cy="289" rx="150" ry="60"/></g>
  <circle cx="436" cy="152" r="14" fill="#ffffff"/>
  <g transform="translate(436,152)" stroke="#d2772f" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="460" y="148" font-size="13" font-weight="700" fill="#fff7ec">接続基盤（Nexus）</text>
  <text x="460" y="166" font-size="11" fill="#ffeed6">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="424" y="180" width="190" height="120" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="424" y="180" width="190" height="20" rx="10" fill="#9a4a14"/>
  <rect x="424" y="190" width="190" height="10" fill="#9a4a14"/>
  <circle cx="438" cy="190" r="2.4" fill="#f2c189"/>
  <circle cx="446" cy="190" r="2.4" fill="#f2c189"/>
  <circle cx="454" cy="190" r="2.4" fill="#f2c189"/>
  <text x="470" y="194" font-size="9" fill="#fbe6cf">研究×学び アプリ</text>
  <rect x="424" y="200" width="50" height="100" fill="#fdf1e2"/>
  <rect x="432" y="212" width="34" height="7" rx="3" fill="#d2772f"/>
  <rect x="432" y="225" width="34" height="7" rx="3" fill="#e7cdb0"/>
  <rect x="432" y="238" width="34" height="7" rx="3" fill="#e7cdb0"/>
  <circle cx="449" cy="270" r="8" fill="#f2c189"/>
  <path d="M443 282 A8 8 0 0 1 455 282" fill="#f2c189"/>
  <text x="484" y="220" font-size="10" font-weight="700" fill="#9a4a14">CVデータベース</text>
  <circle cx="490" cy="234" r="3.5" fill="#d2772f"/>
  <rect x="499" y="230" width="100" height="7" rx="3" fill="#fbe6cf"/>
  <circle cx="490" cy="248" r="3.5" fill="#d8a86e"/>
  <rect x="499" y="244" width="106" height="7" rx="3" fill="#fbe6cf"/>
  <circle cx="490" cy="262" r="3.5" fill="#d8a86e"/>
  <rect x="499" y="258" width="84" height="7" rx="3" fill="#fbe6cf"/>
  <rect x="484" y="276" width="122" height="18" rx="8" fill="#d2772f"/>
  <text x="492" y="289" font-size="8.5" fill="#ffffff">AI伴走：次の一手を個別提案</text>
  <g transform="translate(0,0)"><circle cx="452" cy="320" r="11" fill="#ffffff"/><circle cx="452" cy="316" r="3.4" fill="#d2772f"/><path d="M446 326 A6 6 0 0 1 458 326" fill="#d2772f"/><circle cx="486" cy="320" r="11" fill="#ffffff"/><circle cx="486" cy="316" r="3.4" fill="#2f9b73"/><path d="M480 326 A6 6 0 0 1 492 326" fill="#2f9b73"/><circle cx="520" cy="320" r="11" fill="#ffffff"/><circle cx="520" cy="316" r="3.4" fill="#b85c1c"/><path d="M514 326 A6 6 0 0 1 526 326" fill="#b85c1c"/></g>
  <text x="540" y="324" font-size="10" fill="#fff7ec">院生・教員・支援者をつなぐ</text>
  <text x="566" y="352" font-size="11" fill="#fff7ec" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="566" y="370" font-size="11.5" font-weight="700" fill="#fff3df" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="424" y="382" width="284" height="62" rx="10" fill="#ffffff" opacity="0.16"/>
  <text x="566" y="402" font-size="10.5" fill="#fff7ec" text-anchor="middle">「真に必要とする個人」へ、情報・支援・機会を</text>
  <text x="566" y="418" font-size="10.5" fill="#fff7ec" text-anchor="middle">ダイレクトに投下し、研究×学びがつながる</text>
  <text x="566" y="436" font-size="11" font-weight="700" fill="#fff3df" text-anchor="middle">→ 研究者と支援者が躍動する基盤</text>
  <path d="M726 286 L758 286 L758 280 L778 290 L758 300 L758 294 L726 294 Z" fill="#e07b1e"/>
  <text x="666" y="112" font-size="12" font-weight="700" fill="#1b6147">AI×接続基盤で打つ手（A–D・課題と1:1）</text>
  <rect x="664" y="118" width="356" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="664" y="118" width="6" height="78" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="140" r="11" fill="#dcf0e7"/>
  <text x="690" y="145" font-size="13" font-weight="700" fill="#1b6147" text-anchor="middle">A</text>
  <text x="710" y="145" font-size="12.5" font-weight="700" fill="#1b6147">指導負担を軽減し研究時間を確保</text>
  <text x="680" y="167" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="680" y="183" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="664" y="204" width="356" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="664" y="204" width="6" height="78" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="226" r="11" fill="#dcf0e7"/>
  <text x="690" y="231" font-size="13" font-weight="700" fill="#1b6147" text-anchor="middle">B</text>
  <text x="710" y="231" font-size="12.5" font-weight="700" fill="#1b6147">院生一人ひとりの研究力を向上</text>
  <text x="680" y="253" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="680" y="269" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="664" y="290" width="356" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="664" y="290" width="6" height="78" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="312" r="11" fill="#dcf0e7"/>
  <text x="690" y="317" font-size="13" font-weight="700" fill="#1b6147" text-anchor="middle">C</text>
  <text x="710" y="317" font-size="12.5" font-weight="700" fill="#1b6147">個別最適な情報を直に届ける</text>
  <text x="680" y="339" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="680" y="355" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="664" y="376" width="356" height="78" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="664" y="376" width="6" height="78" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="398" r="11" fill="#dcf0e7"/>
  <text x="690" y="403" font-size="13" font-weight="700" fill="#1b6147" text-anchor="middle">D</text>
  <text x="710" y="403" font-size="12.5" font-weight="700" fill="#1b6147">支援者の労力を削減し効率化</text>
  <text x="680" y="425" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="680" y="441" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1020 152 C1040 152 1044 210 1062 214" stroke="#1b6147" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 240 C1040 240 1044 250 1062 250" stroke="#1b6147" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 328 C1040 328 1044 296 1062 290" stroke="#1b6147" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1020 414 C1040 414 1044 340 1062 332" stroke="#1b6147" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <circle cx="1150" cy="262" r="130" fill="url(#goalBurst)"/>
  <g stroke="#41c08c" stroke-width="2" opacity="0.5"><path d="M1150 130 L1150 150"/><path d="M1150 374 L1150 394"/><path d="M1244 262 L1264 262"/><path d="M1206 200 L1220 186"/><path d="M1206 324 L1220 338"/><path d="M1094 200 L1080 186"/></g>
  <rect x="1064" y="118" width="176" height="336" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1094" cy="150" r="14" fill="#ffffff"/>
  <g transform="translate(1094,150)" stroke="#1b6147" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1118" y="156" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1080" y="190" font-size="11.5" fill="#dcf0e7">研究者と支援者が躍動する</text>
  <text x="1080" y="207" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1084" cy="234" r="3" fill="#bff0d3"/>
  <text x="1096" y="238" font-size="12" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1084" cy="260" r="3" fill="#bff0d3"/>
  <text x="1096" y="264" font-size="12" fill="#ffffff">標準年限内の修了率 ↑</text>
  <circle cx="1084" cy="286" r="3" fill="#bff0d3"/>
  <text x="1096" y="290" font-size="12" fill="#ffffff">中退率 ↓・国際性 ↑</text>
  <circle cx="1084" cy="312" r="3" fill="#bff0d3"/>
  <text x="1096" y="316" font-size="12" fill="#ffffff">経営判断の高度化</text>
  <rect x="1080" y="332" width="144" height="60" rx="10" fill="#ffffff" opacity="0.16"/>
  <text x="1152" y="354" font-size="10.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="1152" y="370" font-size="10.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1152" y="388" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <path d="M40 466 L1206 466 L1240 487 L1206 508 L40 508 Z" fill="url(#gWarn)"/>
  <text x="56" y="492" font-size="13" font-weight="700" fill="#ffffff">副次効果：許諾済データを共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリ外販</text>
  <text x="42" y="532" font-size="11" font-weight="700" fill="#9a4a14">想定KPI（導入後の試算イメージ・実測値ではない）</text>
  <rect x="40" y="538" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="538" width="5" height="50" rx="2.5" fill="url(#gWarn)"/>
  <text x="58" y="572" font-size="22" font-weight="700" fill="#c4632a">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="132" y="559" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="132" y="574" font-size="10.5" fill="#555">研究時間を確保〔試算〕</text>
  <rect x="345" y="538" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="345" y="538" width="5" height="50" rx="2.5" fill="url(#gWarn)"/>
  <text x="363" y="572" font-size="22" font-weight="700" fill="#c4632a">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="437" y="559" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="437" y="574" font-size="10.5" fill="#555">窓口業務〔想定〕</text>
  <rect x="650" y="538" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="650" y="538" width="5" height="50" rx="2.5" fill="url(#gWarn)"/>
  <text x="668" y="572" font-size="22" font-weight="700" fill="#c4632a">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="748" y="559" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="748" y="574" font-size="10.5" fill="#555">（自己効力感）〔想定〕</text>
  <rect x="955" y="538" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="955" y="538" width="5" height="50" rx="2.5" fill="url(#gWarn)"/>
  <text x="973" y="572" font-size="22" font-weight="700" fill="#c4632a">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1047" y="559" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="1047" y="574" font-size="10.5" fill="#555">（中退率↓）〔試算〕</text>
  <path d="M40 598 L1206 598 L1240 632 L1206 666 L40 666 Z" fill="url(#gHdr)"/>
  <text x="623" y="637" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-35：バックボーン＋中央ヒーロー結節点（Nexus）。0層=極薄ブループリント方眼＋寸法線（設計図トーン）／配色=橙黄の温かみ・アクセント焦点1つ（中央Nexus glow）／密度=packed／課題A-D塊矢印→中央Nexus（appMockup＋登場人物アイコン群）→打ち手A-D（1:1）→右GOALバースト。KPIは全て〔想定/試算〕明示。 -->
