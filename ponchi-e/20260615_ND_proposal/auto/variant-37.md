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
    <linearGradient id="gH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E07B39"/><stop offset="1" stop-color="#c9621f"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.22"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#E07B39" stop-opacity="0.85"/><stop offset="1" stop-color="#E07B39" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#1A7A5E" stroke-width="0.5" opacity="0.10"/></pattern>
    <pattern id="grid5" width="160" height="160" patternUnits="userSpaceOnUse"><path d="M160 0 L0 0 0 160" fill="none" stroke="#1A7A5E" stroke-width="1" opacity="0.10"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="88" width="1280" height="552" fill="url(#grid)"/>
  <rect x="0" y="88" width="1280" height="552" fill="url(#grid5)"/>
  <line x1="40" y1="100" x2="40" y2="116" stroke="#1A7A5E" stroke-width="0.8" opacity="0.45"/><line x1="1240" y1="100" x2="1240" y2="116" stroke="#1A7A5E" stroke-width="0.8" opacity="0.45"/><line x1="40" y1="108" x2="1240" y2="108" stroke="#1A7A5E" stroke-width="0.8" opacity="0.30" stroke-dasharray="2 4"/><text x="640" y="105" font-size="10" fill="#7aa99a" text-anchor="middle">— Nexus University 設計図 / blueprint —</text>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gH)"/>
  <text x="40" y="37" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="77" font-size="14.5" font-weight="700" fill="#16624b">分散する〈情報・データ・サポート・機会〉を1つの基盤で接続 ― 4つの立場の課題と打ち手を1:1で解く</text>
  <circle cx="640" cy="358" r="170" fill="url(#glow)"/>
  <rect x="40" y="104" width="430" height="232" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="104" width="430" height="32" rx="14" fill="url(#gH)"/><rect x="40" y="120" width="430" height="16" fill="url(#gH)"/>
  <circle cx="66" cy="129" r="12" fill="#ffffff"/><g transform="translate(66,130)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 6 A6 6 0 0 1 1 5"/><path d="M1 5 A6 6 0 0 1 10 6"/></g>
  <text x="86" y="134" font-size="14" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <rect x="56" y="148" width="398" height="20" rx="5" fill="#FBEDE2"/><text x="64" y="162" font-size="10.5" font-weight="700" fill="#b5651d">課題：業務負荷の急増（院生多様化・申請・評価・学振添削・全員留学）</text>
  <text x="64" y="186" font-size="11.5" fill="#2f4f45">→ AI多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="64" y="206" font-size="11.5" fill="#2f4f45">→ 支援者への接続が容易になり負担を軽減</text>
  <text x="64" y="228" font-size="12" font-weight="700" fill="#16624b">⇒ 教員は研究そのものに時間を回せる</text>
  <rect x="56" y="244" width="398" height="76" rx="8" fill="#F4FAF8" stroke="#cfe6dd" stroke-width="1"/>
  <text x="68" y="262" font-size="10" font-weight="700" fill="#16624b">段階展開</text>
  <rect x="116" y="252" width="100" height="16" rx="8" fill="#27a07c"/><text x="166" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 個別実証</text>
  <rect x="224" y="252" width="100" height="16" rx="8" fill="#1f8f6e"/><text x="274" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 ラボ展開</text>
  <rect x="332" y="252" width="110" height="16" rx="8" fill="#125642"/><text x="387" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 全学標準</text>
  <text x="68" y="290" font-size="10" fill="#5a7a70">想定KPI（試算）：教員の研究時間 +3h/週</text>
  <text x="68" y="308" font-size="10" fill="#5a7a70">想定KPI（試算）：定型問い合わせ −50%</text>
  <rect x="810" y="104" width="430" height="232" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="810" y="104" width="430" height="32" rx="14" fill="url(#gH)"/><rect x="810" y="120" width="430" height="16" fill="url(#gH)"/>
  <circle cx="836" cy="129" r="12" fill="#ffffff"/><g transform="translate(836,129)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="856" y="134" font-size="14" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <rect x="826" y="148" width="398" height="20" rx="5" fill="#FBEDE2"/><text x="834" y="162" font-size="10.5" font-weight="700" fill="#b5651d">課題：育成の多様化・高度化（個別の能力育成と資源最適化が必須）</text>
  <text x="834" y="186" font-size="11.5" fill="#2f4f45">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="834" y="206" font-size="11.5" fill="#2f4f45">→ 研究段階に合わせAI伴走の個別研究支援</text>
  <text x="834" y="228" font-size="12" font-weight="700" fill="#16624b">⇒ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="826" y="244" width="398" height="76" rx="8" fill="#F4FAF8" stroke="#cfe6dd" stroke-width="1"/>
  <text x="838" y="262" font-size="10" font-weight="700" fill="#16624b">段階展開</text>
  <rect x="886" y="252" width="100" height="16" rx="8" fill="#27a07c"/><text x="936" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 記録蓄積</text>
  <rect x="994" y="252" width="100" height="16" rx="8" fill="#1f8f6e"/><text x="1044" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 AI伴走</text>
  <rect x="1102" y="252" width="112" height="16" rx="8" fill="#125642"/><text x="1158" y="263" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 機会接続</text>
  <text x="838" y="290" font-size="10" fill="#5a7a70">想定KPI（試算）：院生の研究力 +20pt</text>
  <text x="838" y="308" font-size="10" fill="#5a7a70">想定KPI（試算）：修了率 +5pt（中退率↓）</text>
  <rect x="40" y="364" width="430" height="206" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="364" width="430" height="32" rx="14" fill="url(#gH)"/><rect x="40" y="380" width="430" height="16" fill="url(#gH)"/>
  <circle cx="66" cy="389" r="12" fill="#ffffff"/><g transform="translate(66,390)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.5"/><path d="M-7 7 A7 7 0 0 1 7 7"/></g>
  <text x="86" y="394" font-size="14" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <rect x="56" y="408" width="398" height="20" rx="5" fill="#FBEDE2"/><text x="64" y="422" font-size="10.5" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・分散し届かない）</text>
  <text x="64" y="446" font-size="11.5" fill="#2f4f45">→ ①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="64" y="466" font-size="11.5" fill="#2f4f45">→ 「真に必要とする個人」へ情報・機会を直投下</text>
  <text x="64" y="488" font-size="12" font-weight="700" fill="#16624b">⇒ 個別最適化した学び・訓練機会を提供</text>
  <rect x="56" y="504" width="398" height="50" rx="8" fill="#F4FAF8" stroke="#cfe6dd" stroke-width="1"/>
  <text x="68" y="522" font-size="10" font-weight="700" fill="#16624b">段階展開</text>
  <rect x="116" y="512" width="100" height="16" rx="8" fill="#27a07c"/><text x="166" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 ニーズ収集</text>
  <rect x="224" y="512" width="100" height="16" rx="8" fill="#1f8f6e"/><text x="274" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 突合配信</text>
  <rect x="332" y="512" width="110" height="16" rx="8" fill="#125642"/><text x="387" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 全学最適</text>
  <text x="68" y="545" font-size="10" fill="#5a7a70">許諾済データで学内・行政・企業の共同研究へ展開</text>
  <rect x="810" y="364" width="430" height="206" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="810" y="364" width="430" height="32" rx="14" fill="url(#gH)"/><rect x="810" y="380" width="430" height="16" fill="url(#gH)"/>
  <circle cx="836" cy="389" r="12" fill="#ffffff"/><g transform="translate(836,389)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-8" y="-4" width="8" height="8" rx="3.5"/><rect x="1" y="-4" width="8" height="8" rx="3.5"/></g>
  <text x="856" y="394" font-size="14" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <rect x="826" y="408" width="398" height="20" rx="5" fill="#FBEDE2"/><text x="834" y="422" font-size="10.5" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務・システム乱立・異動でゼロリセット）</text>
  <text x="834" y="446" font-size="11.5" fill="#2f4f45">→ システムでなく〈データ〉を基盤上で接続しAI分析</text>
  <text x="834" y="466" font-size="11.5" fill="#2f4f45">→ 反復・窓口業務をRAGで省力化</text>
  <text x="834" y="488" font-size="12" font-weight="700" fill="#16624b">⇒ IR・成果・回答を自動収集し統合分析</text>
  <rect x="826" y="504" width="398" height="50" rx="8" fill="#F4FAF8" stroke="#cfe6dd" stroke-width="1"/>
  <text x="838" y="522" font-size="10" font-weight="700" fill="#16624b">段階展開</text>
  <rect x="886" y="512" width="100" height="16" rx="8" fill="#27a07c"/><text x="936" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 データ接続</text>
  <rect x="994" y="512" width="100" height="16" rx="8" fill="#1f8f6e"/><text x="1044" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 RAG省力</text>
  <rect x="1102" y="512" width="112" height="16" rx="8" fill="#125642"/><text x="1158" y="523" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 統合分析</text>
  <text x="838" y="545" font-size="10" fill="#5a7a70">統合分析で経営判断を迅速化／アプリ外販も視野</text>
  <line x1="470" y1="220" x2="568" y2="300" stroke="#1A7A5E" stroke-width="2.5" opacity="0.35"/><line x1="810" y1="220" x2="712" y2="300" stroke="#1A7A5E" stroke-width="2.5" opacity="0.35"/><line x1="470" y1="467" x2="568" y2="416" stroke="#1A7A5E" stroke-width="2.5" opacity="0.35"/><line x1="810" y1="467" x2="712" y2="416" stroke="#1A7A5E" stroke-width="2.5" opacity="0.35"/>
  <rect x="556" y="298" width="168" height="120" rx="12" fill="#ffffff" filter="url(#shS)" stroke="#1A7A5E" stroke-width="1.2"/>
  <rect x="556" y="298" width="168" height="22" rx="12" fill="url(#gAcc)"/><rect x="556" y="310" width="168" height="10" fill="url(#gAcc)"/>
  <circle cx="568" cy="309" r="2" fill="#ffffff" opacity="0.7"/><circle cx="576" cy="309" r="2" fill="#ffffff" opacity="0.7"/>
  <text x="640" y="314" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus アプリ</text>
  <rect x="566" y="326" width="148" height="16" rx="4" fill="#E4F2EC"/><text x="572" y="338" font-size="10" fill="#16624b">ニーズ入力→個別最適配信</text>
  <rect x="566" y="346" width="70" height="40" rx="5" fill="#F4FAF8" stroke="#cfe6dd"/><text x="601" y="362" font-size="10" font-weight="700" fill="#16624b" text-anchor="middle">CV-DB</text><text x="601" y="377" font-size="10" fill="#5a7a70" text-anchor="middle">学習記録</text>
  <rect x="644" y="346" width="70" height="40" rx="5" fill="#F4FAF8" stroke="#cfe6dd"/><text x="679" y="362" font-size="10" font-weight="700" fill="#16624b" text-anchor="middle">AI伴走</text><text x="679" y="377" font-size="10" fill="#5a7a70" text-anchor="middle">RAG分析</text>
  <rect x="566" y="392" width="148" height="16" rx="8" fill="url(#gWarn)"/><text x="640" y="403" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">機会の直投下</text>
  <circle cx="640" cy="468" r="56" fill="url(#burst)"/>
  <circle cx="640" cy="468" r="42" fill="url(#gAcc)" filter="url(#sh)"/><circle cx="640" cy="468" r="42" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <text x="640" y="463" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text><text x="640" y="480" font-size="10" fill="#d8efe6" text-anchor="middle">接続基盤ハブ</text>
  <text x="640" y="535" font-size="10.5" font-weight="700" fill="#c9621f" text-anchor="middle">許諾済データを共有・利活用 → 経営判断を迅速化</text>
  <path d="M40 576 L1206 576 L1240 608 L1206 640 L40 640 Z" fill="url(#gH)"/>
  <text x="623" y="614" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
  <text x="40" y="664" font-size="10" fill="#9a9a9a">※ KPIはすべて想定／試算値（教員の研究時間+3h/週・定型問い合わせ−50%・院生の研究力+20pt・修了率+5pt）。骨格：2×2マトリクス＋中心Nexusハブ。</text>
</svg>

<!-- variant-37：2×2マトリクス＋中心Nexusハブ。背景=ブループリント方眼＋寸法線の設計図トーン。teal中心3色制限（teal＋warn橙＋ニュートラル）。balanced密度。追加要素=appMockup（中央Nexusアプリ）/goalBurst（ハブ背後の橙バースト）/stageBand（各象限 Lv1→Lv3帯）。A-D課題↔打ち手1:1。KPIは想定/試算と明示。 -->
