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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBurst" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2bab84"/><stop offset="1" stop-color="#14694f"/></linearGradient>
    <radialGradient id="gGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#2bab84" stop-opacity="0.30"/><stop offset="1" stop-color="#2bab84" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0 L0 0 0 24" fill="none" stroke="#1A7A5E" stroke-width="0.5" stroke-opacity="0.10"/></pattern>
    <pattern id="gridBig" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M120 0 L0 0 0 120" fill="none" stroke="#1A7A5E" stroke-width="0.8" stroke-opacity="0.14"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#F7FBFA"/>
  <rect x="0" y="98" width="1280" height="492" fill="url(#grid)"/>
  <rect x="0" y="98" width="1280" height="492" fill="url(#gridBig)"/>
  <rect x="40" y="118" width="1200" height="454" fill="none" stroke="#1A7A5E" stroke-width="0.8" stroke-opacity="0.30" stroke-dasharray="2 4"/>
  <path d="M40 110 L40 116 M1240 110 L1240 116 M40 113 L1240 113" stroke="#1A7A5E" stroke-width="0.7" stroke-opacity="0.45"/>
  <text x="640" y="110" font-size="10" fill="#1A7A5E" fill-opacity="0.55" text-anchor="middle">設計図：課題A–D ↔ 打ち手A–D を1対1で対応</text>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="124" width="372" height="26" rx="6" fill="#FBEDE2"/>
  <text x="58" y="142" font-size="13" font-weight="700" fill="#c4632a">課題 ― 大学がいま抱える現実</text>
  <rect x="430" y="124" width="200" height="26" rx="6" fill="#E9F5F0"/>
  <text x="530" y="142" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">AI×接続基盤で変換</text>
  <rect x="648" y="124" width="592" height="26" rx="6" fill="#E4F2EC"/>
  <text x="666" y="142" font-size="13" font-weight="700" fill="#16624b">打ち手 ― 実装する解（1対1対応）</text>
  <rect x="40" y="160" width="372" height="78" rx="10" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="66" cy="186" r="12" fill="#ffffff"/>
  <text x="66" y="191" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="184" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="56" y="209" font-size="10.5" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="227" font-size="10.5" fill="#7a5a45">研究費申請・評価資料・学振添削で限界</text>
  <rect x="648" y="160" width="592" height="78" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="648" y="160" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <text x="670" y="184" font-size="13.5" font-weight="700" fill="#16624b">指導負担を軽減し、研究時間を確保</text>
  <text x="670" y="208" font-size="10.5" fill="#3c5b50">AIの多言語支援・ラボ共通支援・支援者への接続で、</text>
  <text x="670" y="226" font-size="10.5" fill="#3c5b50">教員は研究そのものに時間を回せる</text>
  <rect x="40" y="246" width="372" height="78" rx="10" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="66" cy="272" r="12" fill="#ffffff"/>
  <text x="66" y="277" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="270" font-size="13.5" font-weight="700" fill="#9a4a1e">人材育成が多様化・高度化</text>
  <text x="56" y="295" font-size="10.5" fill="#7a5a45">成功モデルが多様化し求める水準も上昇</text>
  <text x="56" y="313" font-size="10.5" fill="#7a5a45">個別の能力育成と資源の最適投下が必須</text>
  <rect x="648" y="246" width="592" height="78" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="648" y="246" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <text x="670" y="270" font-size="13.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="670" y="294" font-size="10.5" fill="#3c5b50">CVデータベース＋AI伴走で段階別の個別支援、</text>
  <text x="670" y="312" font-size="10.5" fill="#3c5b50">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="332" width="372" height="78" rx="10" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="66" cy="358" r="12" fill="#ffffff"/>
  <text x="66" y="363" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="356" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="56" y="381" font-size="10.5" fill="#7a5a45">学内サポートが乱立・重複・分散</text>
  <text x="56" y="399" font-size="10.5" fill="#7a5a45">真に必要とする個人へ届いていない</text>
  <rect x="648" y="332" width="592" height="78" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="648" y="332" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <text x="670" y="356" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を直接届ける</text>
  <text x="670" y="380" font-size="10.5" fill="#3c5b50">①学生入力ニーズ ＋ ②全学の支援情報を突合し、</text>
  <text x="670" y="398" font-size="10.5" fill="#3c5b50">必要とする個人へ機会をダイレクト投下</text>
  <rect x="40" y="418" width="372" height="78" rx="10" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="66" cy="444" r="12" fill="#ffffff"/>
  <text x="66" y="449" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="442" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活かせない</text>
  <text x="56" y="467" font-size="10.5" fill="#7a5a45">同じ手続き・問い合わせの反復</text>
  <text x="56" y="485" font-size="10.5" fill="#7a5a45">システム乱立・データ分散・異動でゼロ化</text>
  <rect x="648" y="418" width="592" height="78" rx="10" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="648" y="418" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <text x="670" y="442" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力を削減・効率化</text>
  <text x="670" y="466" font-size="10.5" fill="#3c5b50">データを基盤上で接続しAIで分析、窓口業務をRAGで</text>
  <text x="670" y="484" font-size="10.5" fill="#3c5b50">省力化、IR・成果・回答を自動収集して統合分析</text>
  <rect x="430" y="160" width="200" height="336" rx="12" fill="#E9F5F0" filter="url(#shSoft)"/>
  <rect x="430" y="160" width="200" height="336" rx="12" fill="none" stroke="#1A7A5E" stroke-width="1" stroke-opacity="0.30"/>
  <circle cx="530" cy="200" r="22" fill="url(#gGlow)"/>
  <circle cx="530" cy="200" r="17" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="530" y="205" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M412 199 L424 199 M636 193 L650 199 L636 205" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M412 285 L424 285 M636 279 L650 285 L636 291" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M412 371 L424 371 M636 365 L650 371 L636 377" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M412 457 L424 457 M636 451 L650 457 L636 463" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="530" y="246" font-size="10.5" font-weight="700" fill="#16624b" text-anchor="middle">接続基盤</text>
  <rect x="466" y="320" width="128" height="158" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="466" y="320" width="128" height="158" rx="14" fill="none" stroke="#1A7A5E" stroke-width="1.2" stroke-opacity="0.5"/>
  <rect x="478" y="332" width="104" height="18" rx="5" fill="url(#gAccH)"/>
  <text x="530" y="345" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <rect x="478" y="358" width="104" height="13" rx="3" fill="#E4F2EC"/>
  <rect x="478" y="376" width="68" height="9" rx="3" fill="#D6ECE3"/>
  <rect x="478" y="390" width="104" height="22" rx="5" fill="#F2FBF8" stroke="#1A7A5E" stroke-width="0.7" stroke-opacity="0.4"/>
  <text x="486" y="404" font-size="8" fill="#16624b">あなた向けの支援3件</text>
  <rect x="478" y="418" width="104" height="22" rx="5" fill="#F2FBF8" stroke="#1A7A5E" stroke-width="0.7" stroke-opacity="0.4"/>
  <text x="486" y="432" font-size="8" fill="#16624b">AI伴走：次の一手</text>
  <rect x="478" y="448" width="104" height="20" rx="6" fill="url(#gAcc)"/>
  <text x="530" y="461" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">個別最適に届く</text>
  <rect x="40" y="506" width="710" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="506" width="710" height="64" rx="10" fill="none" stroke="#1A7A5E" stroke-width="1" stroke-opacity="0.30"/>
  <text x="58" y="525" font-size="11.5" font-weight="700" fill="#16624b">段階展開ロードマップ</text>
  <rect x="58" y="535" width="206" height="26" rx="6" fill="#E4F2EC"/>
  <text x="70" y="552" font-size="10.5" font-weight="700" fill="#16624b">Lv1 データ接続・多言語/RAG支援</text>
  <path d="M268 548 L280 548 M278 543 L286 548 L278 553" stroke="#1A7A5E" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="290" y="535" width="190" height="26" rx="6" fill="#CFEAE0"/>
  <text x="302" y="552" font-size="10.5" font-weight="700" fill="#16624b">Lv2 CV基盤・個別マッチング</text>
  <path d="M484 548 L496 548 M494 543 L502 548 L494 553" stroke="#1A7A5E" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="506" y="535" width="226" height="26" rx="6" fill="url(#gAcc)"/>
  <text x="518" y="552" font-size="10.5" font-weight="700" fill="#ffffff">Lv3 統合分析で経営判断・外販</text>
  <rect x="648" y="506" width="592" height="0" fill="none"/>
  <circle cx="900" cy="538" r="2" fill="none"/>
  <g transform="translate(894,538)"><path d="M0 -32 L9 -10 L31 -10 L13 4 L20 26 L0 13 L-20 26 L-13 4 L-31 -10 L-9 -10 Z" fill="url(#gBurst)" filter="url(#sh)"/></g>
  <text x="894" y="528" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">想定</text>
  <text x="894" y="544" font-size="9" fill="#ffffff" text-anchor="middle">/試算</text>
  <text x="942" y="514" font-size="11.5" font-weight="700" fill="#16624b">想定KPI（あくまで想定/試算）</text>
  <rect x="942" y="522" width="142" height="44" rx="8" fill="#F2FBF8" stroke="#1A7A5E" stroke-width="0.8" stroke-opacity="0.35"/>
  <text x="1013" y="540" font-size="16" font-weight="700" fill="#16624b" text-anchor="middle">＋3h/週</text>
  <text x="1013" y="558" font-size="9" fill="#3c5b50" text-anchor="middle">教員の研究時間</text>
  <rect x="1092" y="522" width="148" height="44" rx="8" fill="#F2FBF8" stroke="#1A7A5E" stroke-width="0.8" stroke-opacity="0.35"/>
  <text x="1166" y="540" font-size="16" font-weight="700" fill="#c4632a" text-anchor="middle">−50%</text>
  <text x="1166" y="558" font-size="9" fill="#3c5b50" text-anchor="middle">定型問い合わせ</text>
  <rect x="942" y="538" width="0" height="0" fill="none"/>
  <text x="40" y="588" font-size="10" fill="#8a8a8a">他の想定KPI（想定/試算）：院生の研究力＋20pt／修了率＋5pt（中退率↓）　副次：許諾済データの共同研究利活用・経営判断の迅速化・アプリ外販</text>
  <path d="M40 600 L1206 600 L1240 638 L1206 676 L40 676 Z" fill="url(#gAccH)"/>
  <text x="623" y="643" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-85: Before→After対応表(4行A-D 1:1)＋ブループリント方眼/寸法線背景＋teal3色＋stageBand(Lv1→Lv3)＋appMockup＋goalBurst(想定/試算)。 -->
