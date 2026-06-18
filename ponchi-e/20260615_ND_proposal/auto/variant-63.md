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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gBone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9b486" stop-opacity="0.55"/><stop offset="0.5" stop-color="#27a07c"/><stop offset="1" stop-color="#3cae6a"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a9bd6"/><stop offset="1" stop-color="#125b7e"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <radialGradient id="nexGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2a9bd6" stop-opacity="0.42"/><stop offset="1" stop-color="#2a9bd6" stop-opacity="0"/></radialGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.40"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#123a4f" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#234a3d" flood-opacity="0.16"/></filter>
    <marker id="mGreen" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <rect x="36" y="100" width="372" height="486" rx="22" fill="#f7ede2" opacity="0.85" filter="url(#shSoft)"/>
  <rect x="872" y="100" width="372" height="486" rx="22" fill="#e4f2ec" opacity="0.9" filter="url(#shSoft)"/>
  <rect x="430" y="240" width="420" height="210" rx="26" fill="#e3f0f8" opacity="0.85" filter="url(#shSoft)"/>
  <path d="M120 350 L1180 350 L1180 388 L120 388 Z" fill="url(#gBone)" opacity="0.18"/>
  <g opacity="0.10" fill="#2a9bd6"><circle cx="560" cy="170" r="3"/><circle cx="700" cy="200" r="3"/><circle cx="630" cy="500" r="3"/><circle cx="740" cy="540" r="3"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="23" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="79" font-size="15" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="58" y="124" font-size="15" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <g>
    <rect x="58" y="138" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="58" y="138" width="7" height="92" rx="3.5" fill="url(#gWarn)"/>
    <circle cx="88" cy="166" r="13" fill="#FBEDE2"/>
    <text x="88" y="171" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
    <text x="112" y="166" font-size="14" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
    <text x="80" y="190" font-size="11" fill="#6b7280">院生の多様化（社会人・留学生・他分野）</text>
    <text x="80" y="208" font-size="11" fill="#6b7280">申請・評価・学振添削・全員留学で限界</text>
  </g>
  <g>
    <rect x="58" y="244" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="58" y="244" width="7" height="92" rx="3.5" fill="url(#gWarn)"/>
    <circle cx="88" cy="272" r="13" fill="#FBEDE2"/>
    <text x="88" y="277" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
    <text x="112" y="272" font-size="14" font-weight="700" fill="#1f2937">研究人材の育成が高度化</text>
    <text x="80" y="296" font-size="11" fill="#6b7280">求める水準が上昇・成功モデルも多様化</text>
    <text x="80" y="314" font-size="11" fill="#6b7280">個別の能力育成と資源の最適投下が必須</text>
  </g>
  <g>
    <rect x="58" y="350" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="58" y="350" width="7" height="92" rx="3.5" fill="url(#gWarn)"/>
    <circle cx="88" cy="378" r="13" fill="#FBEDE2"/>
    <text x="88" y="383" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
    <text x="112" y="378" font-size="14" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
    <text x="80" y="402" font-size="11" fill="#6b7280">支援が乱立・重複・分散している</text>
    <text x="80" y="420" font-size="11" fill="#6b7280">真に必要とする個人へ直接届かない</text>
  </g>
  <g>
    <rect x="58" y="456" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="58" y="456" width="7" height="92" rx="3.5" fill="url(#gWarn)"/>
    <circle cx="88" cy="484" r="13" fill="#FBEDE2"/>
    <text x="88" y="489" font-size="15" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
    <text x="112" y="484" font-size="14" font-weight="700" fill="#1f2937">支援者の実践知が埋もれる</text>
    <text x="80" y="508" font-size="11" fill="#6b7280">同じ手続き・問い合わせの反復</text>
    <text x="80" y="526" font-size="11" fill="#6b7280">システム乱立・分散・異動でゼロ化</text>
  </g>
  <path d="M386 184 C414 184 420 320 452 332" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M386 290 C414 290 420 338 452 342" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M386 396 C414 396 420 350 452 348" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M386 502 C414 502 420 364 452 356" stroke="#d2772f" stroke-width="9" fill="none" opacity="0.32" stroke-linecap="round"/>
  <circle cx="640" cy="338" r="178" fill="url(#nexGlow)"/>
  <rect x="468" y="258" width="344" height="172" rx="20" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.13" stroke="#ffffff" stroke-width="1.3" fill="none"><ellipse cx="640" cy="344" rx="92" ry="92"/><ellipse cx="640" cy="344" rx="38" ry="92"/><ellipse cx="640" cy="344" rx="92" ry="38"/></g>
  <circle cx="500" cy="290" r="15" fill="#ffffff"/>
  <g transform="translate(500,290)" stroke="#1668a0" stroke-width="2.2" fill="none"><rect x="-10" y="-5" width="10" height="10" rx="4"/><rect x="2" y="-5" width="10" height="10" rx="4"/></g>
  <text x="524" y="288" font-size="15" font-weight="700" fill="#ffffff">接続基盤（Nexus）</text>
  <text x="524" y="307" font-size="11.5" fill="#cfe9f6">〈情報・データ・サポート・機会〉を接続</text>
  <rect x="488" y="322" width="148" height="96" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="488" y="322" width="148" height="18" rx="9" fill="#0e486b"/>
  <rect x="488" y="332" width="148" height="8" fill="#0e486b"/>
  <circle cx="500" cy="331" r="2.4" fill="#7fb8d8"/>
  <circle cx="508" cy="331" r="2.4" fill="#7fb8d8"/>
  <text x="520" y="335" font-size="8.5" fill="#cfe9f6">研究×学び アプリ</text>
  <rect x="496" y="348" width="50" height="62" rx="4" fill="#eaf3f8"/>
  <rect x="503" y="356" width="36" height="7" rx="3" fill="#2a9bd6"/>
  <rect x="503" y="368" width="36" height="7" rx="3" fill="#cfe0e8"/>
  <rect x="503" y="380" width="36" height="7" rx="3" fill="#cfe0e8"/>
  <circle cx="521" cy="398" r="6" fill="#bfd8e8"/>
  <text x="556" y="360" font-size="9.5" font-weight="700" fill="#0e486b">CVデータベース</text>
  <circle cx="560" cy="372" r="3" fill="#2a9bd6"/>
  <rect x="568" y="369" width="58" height="6" rx="3" fill="#e3f0f8"/>
  <circle cx="560" cy="385" r="3" fill="#9bc3d8"/>
  <rect x="568" y="382" width="50" height="6" rx="3" fill="#e3f0f8"/>
  <rect x="552" y="394" width="76" height="16" rx="8" fill="#1c6e44"/>
  <text x="560" y="406" font-size="8.5" fill="#ffffff">AI伴走：次の一手</text>
  <rect x="644" y="322" width="160" height="96" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="724" y="345" font-size="11" fill="#eaf6fb" text-anchor="middle">①学生の入力ニーズ ＋</text>
  <text x="724" y="362" font-size="11" fill="#eaf6fb" text-anchor="middle">②全学の支援情報を突合</text>
  <text x="724" y="383" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">→ 必要な個人へ</text>
  <text x="724" y="401" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">ダイレクト投下</text>
  <text x="640" y="252" font-size="11" font-weight="700" fill="#1668a0" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG で分散を「接続」</text>
  <text x="930" y="124" font-size="15" font-weight="700" fill="#16624b">AI×接続基盤の打ち手（A–D）</text>
  <g>
    <rect x="894" y="138" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="894" y="138" width="7" height="92" rx="3.5" fill="url(#gHdr)"/>
    <circle cx="924" cy="166" r="13" fill="#E4F2EC"/>
    <text x="924" y="171" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
    <text x="948" y="166" font-size="14" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
    <text x="916" y="190" font-size="11" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
    <text x="916" y="208" font-size="11" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  </g>
  <g>
    <rect x="894" y="244" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="894" y="244" width="7" height="92" rx="3.5" fill="url(#gHdr)"/>
    <circle cx="924" cy="272" r="13" fill="#E4F2EC"/>
    <text x="924" y="277" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
    <text x="948" y="272" font-size="14" font-weight="700" fill="#16624b">院生の研究力を向上</text>
    <text x="916" y="296" font-size="11" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
    <text x="916" y="314" font-size="11" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  </g>
  <g>
    <rect x="894" y="350" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="894" y="350" width="7" height="92" rx="3.5" fill="url(#gHdr)"/>
    <circle cx="924" cy="378" r="13" fill="#E4F2EC"/>
    <text x="924" y="383" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
    <text x="948" y="378" font-size="14" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
    <text x="916" y="402" font-size="11" fill="#444">学生ニーズと全学支援情報を突合し</text>
    <text x="916" y="420" font-size="11" fill="#444">必要な個人へダイレクト投下</text>
  </g>
  <g>
    <rect x="894" y="456" width="328" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="894" y="456" width="7" height="92" rx="3.5" fill="url(#gHdr)"/>
    <circle cx="924" cy="484" r="13" fill="#E4F2EC"/>
    <text x="924" y="489" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
    <text x="948" y="484" font-size="14" font-weight="700" fill="#16624b">支援者の労力を削減・効率化</text>
    <text x="916" y="508" font-size="11" fill="#444">反復・窓口業務をRAGで省力化</text>
    <text x="916" y="526" font-size="11" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  </g>
  <path d="M828 332 C858 320 866 184 894 184" stroke="#1c6e44" stroke-width="9" fill="none" opacity="0.30" stroke-linecap="round" marker-end="url(#mGreen)"/>
  <path d="M828 342 C858 342 866 290 894 290" stroke="#1c6e44" stroke-width="9" fill="none" opacity="0.30" stroke-linecap="round" marker-end="url(#mGreen)"/>
  <path d="M828 348 C858 360 866 396 894 396" stroke="#1c6e44" stroke-width="9" fill="none" opacity="0.30" stroke-linecap="round" marker-end="url(#mGreen)"/>
  <path d="M828 356 C858 380 866 502 894 502" stroke="#1c6e44" stroke-width="9" fill="none" opacity="0.30" stroke-linecap="round" marker-end="url(#mGreen)"/>
  <path d="M40 596 L1206 596 L1240 615 L1206 634 L40 634 Z" fill="url(#gWarn)"/>
  <text x="58" y="621" font-size="13.5" font-weight="700" fill="#ffffff">段階展開：Lv1 アプリ → Lv2 全学データ基盤 → Lv3 学外連携（行政・企業）</text>
  <rect x="760" y="601" width="270" height="28" rx="14" fill="#ffffff" opacity="0.92"/>
  <text x="775" y="620" font-size="10.5" font-weight="700" fill="#c4632a">副次：許諾済データの共有・経営判断の迅速化・アプリ外販</text>
  <circle cx="1130" cy="664" r="3" fill="#d2772f"/>
  <path d="M40 646 L1206 646 L1240 678 L1206 710 L40 710 Z" fill="url(#gHdr)"/>
  <circle cx="84" cy="678" r="20" fill="url(#goalGlow)"/>
  <g transform="translate(84,678)" stroke="#ffffff" stroke-width="2" fill="none"><circle cx="0" cy="0" r="9"/><circle cx="0" cy="0" r="4"/></g>
  <text x="120" y="671" font-size="11" font-weight="700" fill="#bff0d3">想定KPI（導入後の試算イメージ）</text>
  <text x="120" y="690" font-size="14.5" font-weight="700" fill="#ffffff">研究時間 ＋3h/週 ・ 定型問い合わせ −50% ・ 研究力 ＋20pt ・ 修了率 ＋5pt（中退率↓）</text>
  <text x="1120" y="690" font-size="11.5" font-weight="700" fill="#bff0d3" text-anchor="end">GOAL：躍動する Nexus University</text>
</svg>

<!-- variant-63：骨格#6 バックボーン＋中央ヒーロー結節点(Nexus・青グラデ＋appMockup)。左=課題A-D(薄warm面)→中央=接続基盤→右=打ち手A-D(薄teal面)、塊矢印で流入/流出。多色リッチ(teal+橙+緑GOAL+青Nexus)。airy密度。stageBand(橙)＋副次効果チップ＋想定KPI帯(緑・試算明示)。A-D 1:1対応。 -->
