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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#14506b"/><stop offset="1" stop-color="#0d3a4f"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f8f"/><stop offset="1" stop-color="#0e5f63"/></linearGradient>
    <linearGradient id="gOrange" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3aa66f"/><stop offset="1" stop-color="#1f7a4d"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f7a4d"/><stop offset="1" stop-color="#0e5f63"/></linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#2f6f9e" stroke-width="0.6" opacity="0.22"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0d3a4f" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0d3a4f" flood-opacity="0.14"/></filter>
    <marker id="mUp" markerWidth="11" markerHeight="11" refX="3" refY="6" orient="auto"><path d="M3 0 L6 7 L0 7 Z" fill="#1f7a4d"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#eef5fb"/>
  <rect x="0" y="98" width="1280" height="565" fill="url(#grid)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#dcebf6"/>
  <text x="40" y="86" font-size="15" font-weight="700" fill="#14506b">分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="128" font-size="13" font-weight="700" fill="#5a7488">課題 A–D ＝ いまの限界</text>
  <line x1="40" y1="136" x2="40" y2="600" stroke="#2f6f9e" stroke-width="0.8" stroke-dasharray="3" opacity="0.4"/>
  <line x1="430" y1="136" x2="430" y2="600" stroke="#2f6f9e" stroke-width="0.8" stroke-dasharray="3" opacity="0.4"/>
  <rect x="40" y="146" width="372" height="100" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="146" width="6" height="100" rx="3" fill="#d2772f"/>
  <text x="62" y="172" font-size="15" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="62" y="196" font-size="12" fill="#3a4a55">院生の多様化（社会人・留学生・他分野）。</text>
  <text x="62" y="214" font-size="12" fill="#3a4a55">研究費申請・評価資料・学振添削・全員</text>
  <text x="62" y="232" font-size="12" fill="#3a4a55">留学の対応で指導が限界に。</text>
  <rect x="40" y="258" width="372" height="100" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="258" width="6" height="100" rx="3" fill="#d2772f"/>
  <text x="62" y="284" font-size="15" font-weight="700" fill="#c4632a">B 育成が多様化・高度化</text>
  <text x="62" y="308" font-size="12" fill="#3a4a55">成功モデルが多様化し、求める水準も</text>
  <text x="62" y="326" font-size="12" fill="#3a4a55">上昇。個別の能力育成と資源の最適</text>
  <text x="62" y="344" font-size="12" fill="#3a4a55">投下が必須に。</text>
  <rect x="40" y="370" width="372" height="100" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="370" width="6" height="100" rx="3" fill="#d2772f"/>
  <text x="62" y="396" font-size="15" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="62" y="420" font-size="12" fill="#3a4a55">支援が乱立・重複・分散し、真に必要</text>
  <text x="62" y="438" font-size="12" fill="#3a4a55">な個人へ届かない。</text>
  <rect x="40" y="482" width="372" height="100" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="482" width="6" height="100" rx="3" fill="#d2772f"/>
  <text x="62" y="508" font-size="15" font-weight="700" fill="#c4632a">D 実践知が共有されない</text>
  <text x="62" y="532" font-size="12" fill="#3a4a55">同じ手続きの反復。システム乱立・</text>
  <text x="62" y="550" font-size="12" fill="#3a4a55">データ分散・異動でゼロリセット。</text>
  <text x="62" y="568" font-size="12" fill="#3a4a55"></text>
  <path d="M412 196 L452 196" stroke="#1f7a4d" stroke-width="3" fill="none" marker-end="url(#mUp)"/>
  <path d="M412 308 L452 308" stroke="#1f7a4d" stroke-width="3" fill="none" marker-end="url(#mUp)"/>
  <path d="M412 420 L452 420" stroke="#1f7a4d" stroke-width="3" fill="none" marker-end="url(#mUp)"/>
  <path d="M412 532 L452 532" stroke="#1f7a4d" stroke-width="3" fill="none" marker-end="url(#mUp)"/>
  <text x="470" y="128" font-size="13" font-weight="700" fill="#5a7488">接続基盤の上に AI 機能を積み、Nexus University へ</text>
  <polygon points="630,150 880,150 928,210 582,210" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="755" cy="172" r="13" fill="#ffffff"/>
  <g transform="translate(755,172)" stroke="#1f7a4d" stroke-width="2" fill="none"><path d="M-8 4 L0 -8 L8 4"/><path d="M-5 4 V9 M5 4 V9 M-8 9 H8"/></g>
  <text x="755" y="200" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">頂 ＝ Nexus University</text>
  <polygon points="560,222 950,222 998,290 512,290" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="755" y="252" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">中 ＝ AI 機能（A–D に1:1で対応）</text>
  <text x="755" y="274" font-size="11.5" fill="#d8f0ee" text-anchor="middle">多言語支援・CV伴走・個別最適配信・RAG省力化</text>
  <polygon points="490,302 1020,302 1068,374 442,374" fill="#cfe6e6" filter="url(#shS)"/>
  <circle cx="755" cy="328" r="13" fill="#0e5f63"/>
  <g transform="translate(755,328)" stroke="#ffffff" stroke-width="2" fill="none"><circle cx="0" cy="0" r="6"/><path d="M-9 0 H-6 M9 0 H6 M0 -9 V-6 M0 9 V6"/></g>
  <text x="755" y="356" font-size="14" font-weight="700" fill="#0e5f63" text-anchor="middle">土台 ＝ データ接続基盤（人・データ・支援・実践知を集約）</text>
  <path d="M1058 360 L1058 200" stroke="#1f7a4d" stroke-width="9" stroke-linecap="round" fill="none" opacity="0.55"/>
  <path d="M1058 196 L1050 214 L1066 214 Z" fill="#1f7a4d"/>
  <text x="1078" y="288" font-size="11.5" font-weight="700" fill="#1f7a4d" transform="rotate(-90 1078 288)" text-anchor="middle">価値が積み上がる</text>
  <rect x="470" y="394" width="612" height="14" rx="7" fill="#dcebf6"/>
  <text x="478" y="404" font-size="9.5" fill="#5a7488">STAGE</text>
  <circle cx="560" cy="401" r="9" fill="url(#gTeal)"/><text x="560" y="404" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <text x="576" y="404" font-size="10.5" fill="#3a4a55">基盤接続</text>
  <circle cx="720" cy="401" r="9" fill="url(#gTeal)"/><text x="720" y="404" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <text x="736" y="404" font-size="10.5" fill="#3a4a55">AI機能展開</text>
  <circle cx="900" cy="401" r="9" fill="url(#gGoal)"/><text x="900" y="404" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <text x="916" y="404" font-size="10.5" fill="#3a4a55">全学運用・外販</text>
  <text x="470" y="436" font-size="13" font-weight="700" fill="#5a7488">AI 打ち手（A–D に1:1対応）</text>
  <rect x="470" y="446" width="296" height="68" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="470" y="446" width="6" height="68" rx="3" fill="#1f8f8f"/>
  <text x="488" y="468" font-size="13" font-weight="700" fill="#0e5f63">A 指導負担を軽減・研究時間確保</text>
  <text x="488" y="488" font-size="11" fill="#3a4a55">AI多言語支援・ラボ共通支援・</text>
  <text x="488" y="505" font-size="11" fill="#3a4a55">支援者どうしを接続。</text>
  <rect x="786" y="446" width="296" height="68" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="786" y="446" width="6" height="68" rx="3" fill="#1f8f8f"/>
  <text x="804" y="468" font-size="13" font-weight="700" fill="#0e5f63">B 院生の研究力を向上</text>
  <text x="804" y="488" font-size="11" fill="#3a4a55">CVデータベース＋AI伴走の段階別</text>
  <text x="804" y="505" font-size="11" fill="#3a4a55">支援。留学・ラボ・企業マッチング。</text>
  <rect x="470" y="522" width="296" height="68" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="470" y="522" width="6" height="68" rx="3" fill="#1f8f8f"/>
  <text x="488" y="544" font-size="13" font-weight="700" fill="#0e5f63">C 個別最適な情報を直に届ける</text>
  <text x="488" y="564" font-size="11" fill="#3a4a55">学生入力ニーズ × 全学の支援情報を</text>
  <text x="488" y="581" font-size="11" fill="#3a4a55">突合 → 必要な個人へダイレクト投下。</text>
  <rect x="786" y="522" width="296" height="68" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="786" y="522" width="6" height="68" rx="3" fill="#1f8f8f"/>
  <text x="804" y="544" font-size="13" font-weight="700" fill="#0e5f63">D 支援者の労力を削減・効率化</text>
  <text x="804" y="564" font-size="11" fill="#3a4a55">基盤上で接続しAIで分析。RAGで</text>
  <text x="804" y="581" font-size="11" fill="#3a4a55">反復・窓口を省力化。IR成果を統合。</text>
  <rect x="1100" y="146" width="140" height="288" rx="14" fill="#0d3a4f" filter="url(#sh)"/>
  <rect x="1110" y="158" width="120" height="240" rx="9" fill="#f4f9fc"/>
  <rect x="1110" y="158" width="120" height="30" rx="9" fill="url(#gTeal)"/>
  <text x="1170" y="178" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <rect x="1122" y="200" width="96" height="22" rx="5" fill="#dcebf6"/>
  <text x="1130" y="215" font-size="9.5" fill="#14506b">AI伴走チャット</text>
  <rect x="1122" y="230" width="96" height="22" rx="5" fill="#e3f3ec"/>
  <text x="1130" y="245" font-size="9.5" fill="#1f7a4d">CV / スキル記録</text>
  <rect x="1122" y="260" width="96" height="22" rx="5" fill="#fbeede"/>
  <text x="1130" y="275" font-size="9.5" fill="#c4632a">支援マッチング</text>
  <rect x="1122" y="290" width="96" height="22" rx="5" fill="#dcebf6"/>
  <text x="1130" y="305" font-size="9.5" fill="#14506b">手続き・窓口DX</text>
  <rect x="1122" y="320" width="96" height="22" rx="5" fill="#e3f3ec"/>
  <text x="1130" y="335" font-size="9.5" fill="#1f7a4d">IR / 成果ダッシュ</text>
  <rect x="1122" y="350" width="96" height="34" rx="5" fill="#0d3a4f"/>
  <text x="1170" y="365" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">必要な個人へ</text>
  <text x="1170" y="378" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">直接届く</text>
  <text x="1100" y="456" font-size="11" font-weight="700" fill="#5a7488">副次効果</text>
  <rect x="1100" y="464" width="140" height="34" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <text x="1112" y="479" font-size="9.5" fill="#3a4a55">許諾済データの共有・</text>
  <text x="1112" y="492" font-size="9.5" fill="#3a4a55">利活用（産官学連携）</text>
  <rect x="1100" y="504" width="140" height="34" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <text x="1112" y="519" font-size="9.5" fill="#3a4a55">統合分析で経営判断を</text>
  <text x="1112" y="532" font-size="9.5" fill="#3a4a55">迅速化</text>
  <rect x="1100" y="544" width="140" height="34" rx="8" fill="#ffffff" filter="url(#shS)"/>
  <text x="1112" y="559" font-size="9.5" fill="#3a4a55">アプリの外販（学外</text>
  <text x="1112" y="572" font-size="9.5" fill="#3a4a55">展開）</text>
  <rect x="40" y="606" width="1200" height="62" rx="13" fill="url(#gKpi)" filter="url(#sh)"/>
  <text x="60" y="630" font-size="12" font-weight="700" fill="#bfe9d8">想定／試算 KPI（実測値ではなく目標値）</text>
  <line x1="320" y1="616" x2="320" y2="660" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
  <text x="345" y="636" font-size="30" font-weight="700" fill="#ffffff">＋3h</text>
  <text x="430" y="636" font-size="11" fill="#dff3ea">教員の研究時間</text>
  <text x="430" y="652" font-size="11" fill="#dff3ea">／週</text>
  <line x1="555" y1="616" x2="555" y2="660" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
  <text x="580" y="636" font-size="30" font-weight="700" fill="#ffffff">−50%</text>
  <text x="690" y="644" font-size="11" fill="#dff3ea">定型問い合わせ</text>
  <line x1="800" y1="616" x2="800" y2="660" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
  <text x="825" y="636" font-size="30" font-weight="700" fill="#ffffff">＋20pt</text>
  <text x="945" y="644" font-size="11" fill="#dff3ea">院生の研究力</text>
  <line x1="1045" y1="616" x2="1045" y2="660" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
  <text x="1070" y="636" font-size="30" font-weight="700" fill="#ffffff">＋5pt</text>
  <text x="1170" y="636" font-size="11" fill="#dff3ea">修了率</text>
  <text x="1170" y="652" font-size="11" fill="#dff3ea">（中退率↓）</text>
</svg>

<!-- variant-39：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University）。背景=ブループリント方眼＋寸法線、多色リッチ（teal＋橙課題＋緑GOAL＋青地）、airy密度。左=課題A-D、中央=ピラミッド+stageBand+打ち手A-D（1:1対応・矢印で連結）、右=appMockup+副次効果3枚、下=kpiBand（想定/試算と明示）。 -->
