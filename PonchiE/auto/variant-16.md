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
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7bbf"/><stop offset="1" stop-color="#1d4f7c"/></linearGradient>
    <linearGradient id="gOrange" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8893a"/><stop offset="1" stop-color="#bf5f1c"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3aa564"/><stop offset="1" stop-color="#1c7a45"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.22"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe39a" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe39a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f3a2c" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1d3a55" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="98" fill="#eef4f9"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">分散する〈情報・データ・支援・機会〉を一つの基盤で接続し、研究者と支援者が躍動する大学へ</text>
  <rect x="50" y="110" width="540" height="180" rx="16" fill="#e3f1ec" filter="url(#shSoft)"/>
  <rect x="690" y="110" width="540" height="180" rx="16" fill="#fcefe3" filter="url(#shSoft)"/>
  <rect x="50" y="338" width="540" height="180" rx="16" fill="#e7f0fa" filter="url(#shSoft)"/>
  <rect x="690" y="338" width="540" height="180" rx="16" fill="#e3f1ec" filter="url(#shSoft)"/>
  <circle cx="640" cy="314" r="120" fill="url(#glow)"/>
  <rect x="50" y="110" width="540" height="30" rx="15" fill="url(#gTeal)"/>
  <rect x="50" y="125" width="540" height="15" fill="url(#gTeal)"/>
  <circle cx="74" cy="125" r="12" fill="#ffffff"/>
  <g transform="translate(74,126)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 6 A6 6 0 0 1 0 5"/><path d="M0 5 A6 6 0 0 1 10 6"/></g>
  <text x="94" y="130" font-size="14" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <text x="66" y="162" font-size="11" font-weight="700" fill="#bf5f1c">課題：業務負荷の急増（院生多様化・申請・評価・学振添削・全員留学）</text>
  <text x="66" y="186" font-size="12" fill="#2f4f45">→ AI多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="66" y="208" font-size="12" fill="#2f4f45">→ 支援者への接続が容易になり指導負担を軽減</text>
  <text x="66" y="232" font-size="12.5" font-weight="700" fill="#16624b">→ 教員は研究そのものに時間を回せる</text>
  <rect x="690" y="110" width="540" height="30" rx="15" fill="url(#gOrange)"/>
  <rect x="690" y="125" width="540" height="15" fill="url(#gOrange)"/>
  <circle cx="714" cy="125" r="12" fill="#ffffff"/>
  <g transform="translate(714,125)" stroke="#bf5f1c" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7.5"/><circle cx="0" cy="0" r="3"/></g>
  <text x="734" y="130" font-size="14" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <text x="706" y="162" font-size="11" font-weight="700" fill="#bf5f1c">課題：育成の多様化・高度化（個別の能力育成と資源最適化が必須）</text>
  <text x="706" y="186" font-size="12" fill="#5a4030">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="706" y="208" font-size="12" fill="#5a4030">→ 研究段階に合わせAI伴走型の個別研究支援</text>
  <text x="706" y="232" font-size="12.5" font-weight="700" fill="#a05216">→ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="50" y="338" width="540" height="30" rx="15" fill="url(#gBlue)"/>
  <rect x="50" y="353" width="540" height="15" fill="url(#gBlue)"/>
  <circle cx="74" cy="353" r="12" fill="#ffffff"/>
  <g transform="translate(74,354)" stroke="#1d4f7c" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.5"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g>
  <text x="94" y="358" font-size="14" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <text x="66" y="390" font-size="11" font-weight="700" fill="#1d4f7c">課題：大学→個人のミッシングリンク（支援が乱立・分散し届かない）</text>
  <text x="66" y="414" font-size="12" fill="#2b4156">→ ①学生入力ニーズ ＋ ②全学の支援情報を突合</text>
  <text x="66" y="436" font-size="12" fill="#2b4156">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="66" y="460" font-size="12.5" font-weight="700" fill="#1d4f7c">→ 個別最適化した学び・訓練機会を提供</text>
  <rect x="690" y="338" width="540" height="30" rx="15" fill="url(#gTeal)"/>
  <rect x="690" y="353" width="540" height="15" fill="url(#gTeal)"/>
  <circle cx="714" cy="353" r="12" fill="#ffffff"/>
  <g transform="translate(714,353)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-8" y="-4" width="8" height="8" rx="3.5"/><rect x="0" y="-4" width="8" height="8" rx="3.5"/></g>
  <text x="734" y="358" font-size="14" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <text x="706" y="390" font-size="11" font-weight="700" fill="#bf5f1c">課題：実践知が散逸（反復業務・システム乱立・異動でゼロリセット）</text>
  <text x="706" y="414" font-size="12" fill="#2f4f45">→ システムでなく〈データ〉を基盤上で接続しAI分析</text>
  <text x="706" y="436" font-size="12" fill="#2f4f45">→ 反復・窓口業務をRAGで省力化</text>
  <text x="706" y="460" font-size="12.5" font-weight="700" fill="#16624b">→ IR・成果・回答を自動収集し統合分析</text>
  <circle cx="640" cy="314" r="46" fill="url(#gTeal)" filter="url(#sh)"/>
  <circle cx="640" cy="314" r="46" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.55"/>
  <text x="640" y="309" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="327" font-size="9.5" fill="#d8efe6" text-anchor="middle">接続基盤ハブ</text>
  <rect x="50" y="534" width="1180" height="96" rx="14" fill="#0f4a39" filter="url(#sh)"/>
  <text x="74" y="566" font-size="13" font-weight="700" fill="#ffe39a">想定KPI（試算）</text>
  <text x="74" y="586" font-size="10.5" fill="#bfe3d6">数値は導入後の想定／試算値であり実績ではない</text>
  <circle cx="362" cy="582" r="58" fill="url(#burst)"/>
  <text x="362" y="592" font-size="48" font-weight="700" fill="#ffffff" text-anchor="middle">+3h</text>
  <text x="362" y="616" font-size="11.5" font-weight="700" fill="#d8efe6" text-anchor="middle">教員の研究時間／週（想定）</text>
  <line x1="498" y1="548" x2="498" y2="616" stroke="#2f7a62" stroke-width="1.4"/>
  <text x="560" y="572" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">−50%</text>
  <text x="560" y="596" font-size="11" fill="#d8efe6" text-anchor="middle">定型問い合わせ（想定）</text>
  <line x1="676" y1="548" x2="676" y2="616" stroke="#2f7a62" stroke-width="1.4"/>
  <text x="752" y="572" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">+20pt</text>
  <text x="752" y="596" font-size="11" fill="#d8efe6" text-anchor="middle">院生の研究力（試算）</text>
  <line x1="852" y1="548" x2="852" y2="616" stroke="#2f7a62" stroke-width="1.4"/>
  <text x="928" y="572" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">+5pt</text>
  <text x="928" y="596" font-size="11" fill="#d8efe6" text-anchor="middle">修了率／中退率↓（試算）</text>
  <rect x="1024" y="548" width="186" height="68" rx="10" fill="#11553f"/>
  <text x="1117" y="572" font-size="11" font-weight="700" fill="#ffe39a" text-anchor="middle">副次効果</text>
  <text x="1117" y="592" font-size="9.8" fill="#cfe8de" text-anchor="middle">許諾済データの共同研究</text>
  <text x="1117" y="606" font-size="9.8" fill="#cfe8de" text-anchor="middle">経営判断迅速化／外販</text>
  <path d="M50 642 L1196 642 L1230 671 L1196 700 L50 700 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1196" cy="671" r="40" fill="url(#burst)"/>
  <text x="616" y="680" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #16 2×2マトリクス＋中心Nexusハブ。多色リッチ（teal/橙/青/緑GOAL）・ゾーン面塗り背景・想定KPIバンド＋巨大数字+3hを主役・goalBurst。A-D課題↔打ち手1:1。 -->
