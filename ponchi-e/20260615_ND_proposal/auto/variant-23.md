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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E07B39"/><stop offset="1" stop-color="#c8611f"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2A03C"/><stop offset="1" stop-color="#d97316"/></linearGradient>
    <linearGradient id="gSun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset="1" stop-color="#F2A03C"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2f6fb0" stop-opacity="0.16"/><stop offset="1" stop-color="#9fc6ed" stop-opacity="0.05"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#F2A03C" stop-opacity="0.34"/><stop offset="1" stop-color="#F2A03C" stop-opacity="0"/></radialGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFE9A8"/><stop offset="0.6" stop-color="#FFD66B"/><stop offset="1" stop-color="#F2A03C"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a4d12" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a4d12" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#FFFDF8"/>
  <path d="M-40 720 L420 720 L900 80 L440 80 Z" fill="url(#gRibbon)"/>
  <path d="M280 720 L720 720 L1180 80 L740 80 Z" fill="url(#gRibbon)"/>
  <path d="M620 720 L980 720 L1340 120 L980 120 Z" fill="url(#gRibbon)"/>
  <path d="M120 560 L300 560 L250 500 L430 500" stroke="#2f6fb0" stroke-width="3" fill="none" opacity="0.14" stroke-linejoin="round"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#FCEFD9"/>
  <text x="40" y="85" font-size="15" font-weight="700" fill="#b5651d">分散する〈情報・データ・支援・機会〉を一つの基盤で接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="640" cy="368" r="172" fill="url(#gGlow)"/>
  <rect x="36" y="108" width="556" height="222" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="108" width="556" height="32" rx="14" fill="url(#gWarm)"/>
  <rect x="36" y="124" width="556" height="16" fill="url(#gWarm)"/>
  <circle cx="62" cy="132" r="12" fill="#ffffff"/>
  <g transform="translate(62,133)" stroke="#d97316" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 6 A6 6 0 0 1 0 5"/><path d="M0 5 A6 6 0 0 1 10 6"/></g>
  <text x="82" y="137" font-size="14.5" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <rect x="50" y="152" width="528" height="20" rx="5" fill="#FCEFD9"/>
  <text x="60" y="166" font-size="10.5" font-weight="700" fill="#b5651d">課題：業務負荷が急増（院生の多様化／申請・評価・学振添削・全員留学で限界）</text>
  <text x="58" y="192" font-size="12" fill="#3a3a3a">→ AIの多言語支援・ラボへの共通支援で指導を肩代わり</text>
  <text x="58" y="214" font-size="12" fill="#3a3a3a">→ 支援者への接続が容易になり指導負担を軽減</text>
  <text x="58" y="240" font-size="12.5" font-weight="700" fill="#b5530f">⇒ 教員は研究そのものに時間を回せる</text>
  <rect x="50" y="252" width="528" height="64" rx="8" fill="#FFF7EC"/>
  <g transform="translate(64,262)"><rect x="0" y="0" width="44" height="46" rx="6" fill="#ffffff" stroke="#F2A03C" stroke-width="1.4"/><rect x="6" y="6" width="32" height="6" rx="2" fill="#F2A03C"/><rect x="6" y="16" width="32" height="3" rx="1.5" fill="#e7c79a"/><rect x="6" y="22" width="24" height="3" rx="1.5" fill="#e7c79a"/><circle cx="33" cy="36" r="6" fill="#FFD66B"/><text x="33" y="39" font-size="7.5" font-weight="700" fill="#9a4d12" text-anchor="middle">AI</text></g>
  <text x="122" y="278" font-size="11" font-weight="700" fill="#3a3a3a">アプリ：多言語の申請・添削アシスト</text>
  <text x="122" y="296" font-size="10.5" fill="#6b6b6b">ラボ共通の支援ダッシュボードで定型を自動化</text>
  <text x="122" y="312" font-size="10.5" fill="#6b6b6b">→ 教員はワンクリックで支援者へ橋渡し</text>
  <rect x="688" y="108" width="556" height="222" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="688" y="108" width="556" height="32" rx="14" fill="url(#gWarm)"/>
  <rect x="688" y="124" width="556" height="16" fill="url(#gWarm)"/>
  <circle cx="714" cy="132" r="12" fill="#ffffff"/>
  <g transform="translate(714,132)" stroke="#d97316" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7.5"/><circle cx="0" cy="0" r="3"/></g>
  <text x="734" y="137" font-size="14.5" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <rect x="702" y="152" width="528" height="20" rx="5" fill="#FCEFD9"/>
  <text x="712" y="166" font-size="10.5" font-weight="700" fill="#b5651d">課題：育成が多様化・高度化（個別の能力育成と資源の最適投下が必須）</text>
  <text x="710" y="192" font-size="12" fill="#3a3a3a">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="710" y="214" font-size="12" fill="#3a3a3a">→ 研究段階に合わせAI伴走の段階別個別支援</text>
  <text x="710" y="240" font-size="12.5" font-weight="700" fill="#b5530f">⇒ 留学・ラボ・企業のマッチングも可能に</text>
  <rect x="702" y="252" width="528" height="64" rx="8" fill="#FFF7EC"/>
  <g transform="translate(716,262)"><rect x="0" y="0" width="44" height="46" rx="6" fill="#ffffff" stroke="#F2A03C" stroke-width="1.4"/><circle cx="22" cy="14" r="7" fill="#FFD66B"/><path d="M22 22 Q22 32 22 40" stroke="#F2A03C" stroke-width="2" fill="none"/><circle cx="13" cy="40" r="3" fill="#F2A03C"/><circle cx="22" cy="40" r="3" fill="#d97316"/><circle cx="31" cy="40" r="3" fill="#FFD66B"/></g>
  <text x="774" y="278" font-size="11" font-weight="700" fill="#3a3a3a">アプリ：CV × AI伴走の個別ロードマップ</text>
  <text x="774" y="296" font-size="10.5" fill="#6b6b6b">記録から次の一手を提案、伸ばす能力を可視化</text>
  <text x="774" y="312" font-size="10.5" fill="#6b6b6b">→ 留学・ラボ・企業へ最適マッチング</text>
  <rect x="36" y="406" width="556" height="222" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="406" width="556" height="32" rx="14" fill="url(#gWarm)"/>
  <rect x="36" y="422" width="556" height="16" fill="url(#gWarm)"/>
  <circle cx="62" cy="430" r="12" fill="#ffffff"/>
  <g transform="translate(62,431)" stroke="#d97316" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.6"/><path d="M-7 7 A7 7 0 0 1 7 7"/></g>
  <text x="82" y="435" font-size="14.5" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <rect x="50" y="450" width="528" height="20" rx="5" fill="#FCEFD9"/>
  <text x="60" y="464" font-size="10.5" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・重複・分散し届かない）</text>
  <text x="58" y="490" font-size="12" fill="#3a3a3a">→ ①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="58" y="512" font-size="12" fill="#3a3a3a">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="58" y="538" font-size="12.5" font-weight="700" fill="#b5530f">⇒ 個別最適化した学び・訓練機会を提供</text>
  <rect x="50" y="550" width="528" height="64" rx="8" fill="#FFF7EC"/>
  <g transform="translate(64,560)"><rect x="0" y="0" width="44" height="46" rx="6" fill="#ffffff" stroke="#F2A03C" stroke-width="1.4"/><path d="M10 8 L34 8 L34 30 L26 30 L22 37 L18 30 L10 30 Z" fill="#FFD66B"/><circle cx="17" cy="19" r="2" fill="#d97316"/><circle cx="22" cy="19" r="2" fill="#d97316"/><circle cx="27" cy="19" r="2" fill="#d97316"/></g>
  <text x="122" y="576" font-size="11" font-weight="700" fill="#3a3a3a">アプリ：ニーズ×支援情報のマッチング通知</text>
  <text x="122" y="594" font-size="10.5" fill="#6b6b6b">乱立する支援を1本の導線に集約し本人へ</text>
  <text x="122" y="610" font-size="10.5" fill="#6b6b6b">→ 「あなた向け」の機会をプッシュ配信</text>
  <rect x="688" y="406" width="556" height="222" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="688" y="406" width="556" height="32" rx="14" fill="url(#gWarm)"/>
  <rect x="688" y="422" width="556" height="16" fill="url(#gWarm)"/>
  <circle cx="714" cy="430" r="12" fill="#ffffff"/>
  <g transform="translate(714,430)" stroke="#d97316" stroke-width="2" fill="none"><rect x="-8" y="-4" width="8" height="8" rx="4"/><rect x="0" y="-4" width="8" height="8" rx="4"/></g>
  <text x="734" y="435" font-size="14.5" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <rect x="702" y="450" width="528" height="20" rx="5" fill="#FCEFD9"/>
  <text x="712" y="464" font-size="10.5" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務／システム乱立／異動でゼロリセット）</text>
  <text x="710" y="490" font-size="12" fill="#3a3a3a">→ システムでなく〈データ〉を基盤上で接続しAIで分析</text>
  <text x="710" y="512" font-size="12" fill="#3a3a3a">→ 反復・窓口業務をRAGで省力化</text>
  <text x="710" y="538" font-size="12.5" font-weight="700" fill="#b5530f">⇒ IR・成果・回答を自動収集し統合分析</text>
  <rect x="702" y="550" width="528" height="64" rx="8" fill="#FFF7EC"/>
  <g transform="translate(716,560)"><rect x="0" y="0" width="44" height="46" rx="6" fill="#ffffff" stroke="#F2A03C" stroke-width="1.4"/><rect x="8" y="30" width="6" height="10" fill="#FFD66B"/><rect x="19" y="22" width="6" height="18" fill="#F2A03C"/><rect x="30" y="14" width="6" height="26" fill="#d97316"/></g>
  <text x="774" y="576" font-size="11" font-weight="700" fill="#3a3a3a">アプリ：RAG窓口 ＋ 統合分析ダッシュボード</text>
  <text x="774" y="594" font-size="10.5" fill="#6b6b6b">問い合わせ応答を自動化し、知を組織に蓄積</text>
  <text x="774" y="610" font-size="10.5" fill="#6b6b6b">→ 経営判断に効くIR指標を即時提示</text>
  <circle cx="640" cy="368" r="52" fill="url(#gWarm)" filter="url(#sh)"/>
  <circle cx="640" cy="368" r="52" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.6"/>
  <text x="640" y="362" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="380" font-size="9.5" fill="#fff1d8" text-anchor="middle">接続ハブ</text>
  <text x="640" y="394" font-size="8.5" fill="#fde6c2" text-anchor="middle">データ／AI</text>
  <path d="M592 330 L640 368" stroke="#F2A03C" stroke-width="2.5" opacity="0.5"/>
  <path d="M688 330 L640 368" stroke="#F2A03C" stroke-width="2.5" opacity="0.5"/>
  <path d="M592 406 L640 368" stroke="#F2A03C" stroke-width="2.5" opacity="0.5"/>
  <path d="M688 406 L640 368" stroke="#F2A03C" stroke-width="2.5" opacity="0.5"/>
  <g transform="translate(1130,360)"><circle cx="0" cy="0" r="44" fill="url(#gBurst)" filter="url(#shS)"/><g stroke="#F2A03C" stroke-width="2.5" opacity="0.55"><path d="M0 -52 L0 -62"/><path d="M37 -37 L44 -44"/><path d="M52 0 L62 0"/><path d="M37 37 L44 44"/><path d="M0 52 L0 62"/><path d="M-37 37 L-44 44"/><path d="M-52 0 L-62 0"/><path d="M-37 -37 L-44 -44"/></g><text x="0" y="-22" font-size="8.5" font-weight="700" fill="#9a4d12" text-anchor="middle">想定KPI（試算）</text><text x="0" y="-4" font-size="9.5" font-weight="700" fill="#7a3c0c" text-anchor="middle">研究時間 +3h/週</text><text x="0" y="11" font-size="9.5" font-weight="700" fill="#7a3c0c" text-anchor="middle">問い合わせ −50%</text><text x="0" y="26" font-size="9.5" font-weight="700" fill="#7a3c0c" text-anchor="middle">研究力 +20pt</text><text x="0" y="41" font-size="9.5" font-weight="700" fill="#7a3c0c" text-anchor="middle">修了率 +5pt</text></g>
  <path d="M40 644 L1206 644 L1240 678 L1206 712 L40 712 Z" fill="url(#gHdr)"/>
  <text x="40" y="666" font-size="10.5" font-weight="700" fill="#FFE9A8">副次：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリ外販</text>
  <text x="623" y="694" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-23 #5 2×2マトリクス＋中心Nexusハブ。橙/黄ウォーム配色、左下→右上の青リボン地。各象限にappMockup、右にgoalBurst(KPI想定/試算)。packed。 -->
