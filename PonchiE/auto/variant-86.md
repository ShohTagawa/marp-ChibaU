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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E07B39"/><stop offset="1" stop-color="#c4621f"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.22"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.30"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#1A7A5E" stroke-width="0.6" opacity="0.10"/></pattern>
    <pattern id="gridFine" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M8 0 L0 0 0 8" fill="none" stroke="#1A7A5E" stroke-width="0.4" opacity="0.05"/></pattern>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#F7FBFA"/>
  <rect x="0" y="90" width="1280" height="630" fill="url(#gridFine)"/>
  <rect x="0" y="90" width="1280" height="630" fill="url(#grid)"/>
  <line x1="40" y1="100" x2="1240" y2="100" stroke="#1A7A5E" stroke-width="0.7" opacity="0.22"/><path d="M40 96 L40 104 M1240 96 L1240 104" stroke="#1A7A5E" stroke-width="0.7" opacity="0.22"/>
  <line x1="30" y1="100" x2="30" y2="704" stroke="#1A7A5E" stroke-width="0.7" opacity="0.18"/><path d="M26 100 L34 100 M26 704 L34 704" stroke="#1A7A5E" stroke-width="0.7" opacity="0.18"/>
  <text x="640" y="98" font-size="10" fill="#1A7A5E" opacity="0.45" text-anchor="middle" font-family="monospace">— 1280 —</text>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gAccH)"/>
  <text x="40" y="38" font-size="23" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <text x="1244" y="38" font-size="10" fill="#cfeee2" text-anchor="end" font-family="monospace">DWG. NEXUS-2026</text>
  <rect x="0" y="58" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="79" font-size="14.5" font-weight="700" fill="#16624b">分散する〈情報・データ・支援・機会〉を一つの基盤で接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="640" cy="262" r="138" fill="url(#glow)"/>
  <text x="44" y="108" font-size="10.5" fill="#b5651d" font-weight="700" font-family="monospace">課題 → 打ち手 ＝ 1:1 対応</text>
  <rect x="40" y="116" width="566" height="146" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="116" width="566" height="30" rx="13" fill="url(#gAccH)"/><rect x="40" y="131" width="566" height="15" fill="url(#gAccH)"/>
  <circle cx="66" cy="131" r="12" fill="#ffffff"/>
  <g transform="translate(66,132)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 6 A5.5 5.5 0 0 1 0 5.5"/><path d="M0 5.5 A5.5 5.5 0 0 1 10 6"/></g>
  <text x="86" y="136" font-size="14" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <rect x="54" y="156" width="538" height="20" rx="5" fill="#FBEDE2"/>
  <text x="62" y="170" font-size="10.5" font-weight="700" fill="#b5651d">課題：業務負荷の急増（院生の多様化・申請・評価・学振添削・全員留学）</text>
  <text x="56" y="196" font-size="11.5" fill="#2f4f45">→ AIの多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="56" y="216" font-size="11.5" fill="#2f4f45">→ 支援者への接続が容易になり指導負担を軽減</text>
  <text x="56" y="238" font-size="12" font-weight="700" fill="#16624b">→ 教員は研究そのものに時間を回せる</text>
  <rect x="674" y="116" width="566" height="146" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="116" width="566" height="30" rx="13" fill="url(#gAccH)"/><rect x="674" y="131" width="566" height="15" fill="url(#gAccH)"/>
  <circle cx="700" cy="131" r="12" fill="#ffffff"/>
  <g transform="translate(700,131)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="720" y="136" font-size="14" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <rect x="688" y="156" width="538" height="20" rx="5" fill="#FBEDE2"/>
  <text x="696" y="170" font-size="10.5" font-weight="700" fill="#b5651d">課題：育成の多様化・高度化（個別の能力育成と資源最適化が必須）</text>
  <text x="690" y="196" font-size="11.5" fill="#2f4f45">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="690" y="216" font-size="11.5" fill="#2f4f45">→ 段階に合わせAI伴走の個別研究支援</text>
  <text x="690" y="238" font-size="12" font-weight="700" fill="#16624b">→ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="278" width="566" height="146" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="278" width="566" height="30" rx="13" fill="url(#gAccH)"/><rect x="40" y="293" width="566" height="15" fill="url(#gAccH)"/>
  <circle cx="66" cy="293" r="12" fill="#ffffff"/>
  <g transform="translate(66,294)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-3.5" r="3.5"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g>
  <text x="86" y="298" font-size="14" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <rect x="54" y="318" width="538" height="20" rx="5" fill="#FBEDE2"/>
  <text x="62" y="332" font-size="10.5" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・分散し届かない）</text>
  <text x="56" y="358" font-size="11.5" fill="#2f4f45">→ ①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="56" y="378" font-size="11.5" fill="#2f4f45">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="56" y="400" font-size="12" font-weight="700" fill="#16624b">→ 個別最適化した学び・訓練機会を提供</text>
  <rect x="674" y="278" width="566" height="146" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="278" width="566" height="30" rx="13" fill="url(#gAccH)"/><rect x="674" y="293" width="566" height="15" fill="url(#gAccH)"/>
  <circle cx="700" cy="293" r="12" fill="#ffffff"/>
  <g transform="translate(700,294)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-8" y="-3.5" width="8" height="7" rx="3.5"/><rect x="0" y="-3.5" width="8" height="7" rx="3.5"/></g>
  <text x="720" y="298" font-size="14" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <rect x="688" y="318" width="538" height="20" rx="5" fill="#FBEDE2"/>
  <text x="696" y="332" font-size="10.5" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務・システム乱立・異動でゼロリセット）</text>
  <text x="690" y="358" font-size="11.5" fill="#2f4f45">→ 〈データ〉を基盤上で接続しAIで分析</text>
  <text x="690" y="378" font-size="11.5" fill="#2f4f45">→ 反復・窓口業務をRAGで省力化</text>
  <text x="690" y="400" font-size="12" font-weight="700" fill="#16624b">→ IR・成果・回答を自動収集し統合分析</text>
  <circle cx="640" cy="270" r="40" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="640" cy="270" r="40" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <circle cx="640" cy="270" r="48" fill="none" stroke="#1A7A5E" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  <text x="640" y="266" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="282" font-size="9" fill="#d8efe6" text-anchor="middle">接続ハブ</text>
  <rect x="40" y="438" width="1200" height="62" rx="11" fill="#0f4a39" filter="url(#shSoft)"/>
  <rect x="40" y="438" width="166" height="62" rx="11" fill="url(#gWarn)"/>
  <text x="123" y="466" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI</text>
  <text x="123" y="486" font-size="9.5" fill="#ffe7d6" text-anchor="middle">（試算ベース）</text>
  <line x1="206" y1="450" x2="206" y2="488" stroke="#ffffff" stroke-width="0.8" opacity="0.25"/>
  <text x="330" y="465" font-size="27" font-weight="700" fill="#ffffff" text-anchor="middle">＋3h<tspan font-size="13">/週</tspan></text>
  <text x="330" y="488" font-size="11" fill="#cfeee2" text-anchor="middle">教員の研究時間</text>
  <line x1="463" y1="450" x2="463" y2="488" stroke="#ffffff" stroke-width="0.8" opacity="0.25"/>
  <text x="585" y="465" font-size="27" font-weight="700" fill="#ffffff" text-anchor="middle">−50<tspan font-size="15">%</tspan></text>
  <text x="585" y="488" font-size="11" fill="#cfeee2" text-anchor="middle">定型問い合わせ</text>
  <line x1="710" y1="450" x2="710" y2="488" stroke="#ffffff" stroke-width="0.8" opacity="0.25"/>
  <text x="838" y="465" font-size="27" font-weight="700" fill="#ffffff" text-anchor="middle">＋20<tspan font-size="15">pt</tspan></text>
  <text x="838" y="488" font-size="11" fill="#cfeee2" text-anchor="middle">院生の研究力</text>
  <line x1="965" y1="450" x2="965" y2="488" stroke="#ffffff" stroke-width="0.8" opacity="0.25"/>
  <text x="1100" y="465" font-size="27" font-weight="700" fill="#ffffff" text-anchor="middle">＋5<tspan font-size="15">pt</tspan></text>
  <text x="1100" y="488" font-size="11" fill="#cfeee2" text-anchor="middle">修了率（中退率↓）</text>
  <text x="44" y="524" font-size="11" font-weight="700" fill="#16624b">受益者の変化（導入前 → 導入後）</text>
  <text x="640" y="524" font-size="10" fill="#8a8a8a" text-anchor="middle">＋ 副次：許諾済データの共有・利活用（学内/行政/企業の共同研究）・経営判断の迅速化・アプリ外販</text>
  <rect x="40" y="530" width="291" height="62" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="530" width="6" height="62" rx="3" fill="#27a07c"/>
  <text x="58" y="551" font-size="12" font-weight="700" fill="#16624b">学生・院生</text>
  <text x="58" y="569" font-size="10" fill="#b5651d">支援が届かない</text>
  <text x="58" y="585" font-size="10.5" font-weight="700" fill="#2f4f45">→ 個別最適な学びと機会</text>
  <rect x="343" y="530" width="291" height="62" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="343" y="530" width="6" height="62" rx="3" fill="#27a07c"/>
  <text x="361" y="551" font-size="12" font-weight="700" fill="#16624b">教員</text>
  <text x="361" y="569" font-size="10" fill="#b5651d">指導負荷で研究時間減</text>
  <text x="361" y="585" font-size="10.5" font-weight="700" fill="#2f4f45">→ 研究に集中できる</text>
  <rect x="646" y="530" width="291" height="62" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="646" y="530" width="6" height="62" rx="3" fill="#27a07c"/>
  <text x="664" y="551" font-size="12" font-weight="700" fill="#16624b">職員・支援者</text>
  <text x="664" y="569" font-size="10" fill="#b5651d">反復・散逸・ゼロリセット</text>
  <text x="664" y="585" font-size="10.5" font-weight="700" fill="#2f4f45">→ 実践知が蓄積・効率化</text>
  <rect x="949" y="530" width="291" height="62" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="949" y="530" width="6" height="62" rx="3" fill="#27a07c"/>
  <text x="967" y="551" font-size="12" font-weight="700" fill="#16624b">大学（経営）</text>
  <text x="967" y="569" font-size="10" fill="#b5651d">データ分散・判断が遅い</text>
  <text x="967" y="585" font-size="10.5" font-weight="700" fill="#2f4f45">→ 統合分析で迅速な判断</text>
  <circle cx="640" cy="660" r="120" fill="url(#burst)"/>
  <path d="M40 606 L1206 606 L1240 660 L1206 714 L40 714 Z" fill="url(#gAccH)"/>
  <g stroke="#ffffff" stroke-width="1.4" opacity="0.55"><path d="M150 624 L138 660 L150 696"/><path d="M1118 624 L1130 660 L1118 696"/></g>
  <text x="623" y="654" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
  <text x="623" y="678" font-size="11" fill="#cfeee2" text-anchor="middle">課題A–Dを1:1で解き、受益者すべてに価値を還流する設計</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #5変奏：2×2マトリクス＋中心Nexusハブ。背景にブループリント方眼/寸法線で設計図トーン、KPIバンド(想定/試算明示)・受益者Row(導入前→後)・goalBurstを盛ったpacked版。3色制限(teal+warn橙+ニュートラル)。 -->
</content>
</invoke>
