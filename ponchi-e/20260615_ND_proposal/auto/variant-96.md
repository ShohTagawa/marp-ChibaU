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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gAccH)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1104" y="13" width="140" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1118" y="19" width="112" height="22"/>
  <text x="40" y="84" font-size="15.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="48" y="116" font-size="12" font-weight="700" fill="#c4632a">① 課題</text>
  <text x="615" y="116" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="middle">② 2本柱で接続する（アプリ × AI基盤）</text>
  <text x="1232" y="116" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="end">③ GOAL</text>
  <rect x="40" y="126" width="252" height="300" rx="16" fill="#FBF3EC" stroke="#f0d9c6" stroke-width="1"/>
  <rect x="40" y="126" width="252" height="38" rx="16" fill="url(#gWarn)"/>
  <rect x="40" y="146" width="252" height="18" fill="url(#gWarn)"/>
  <text x="64" y="151" font-size="14" font-weight="700" fill="#ffffff">立ち行かない現状</text>
  <g transform="translate(330,200)"><path d="M0 -10 L10 8 L-10 8 Z" fill="#E07B39"/></g>
  <rect x="56" y="178" width="220" height="54" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="68" y="198" font-size="12.5" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="68" y="218" font-size="11" fill="#666">院生の多様化・申請/評価/添削/留学で限界</text>
  <rect x="56" y="238" width="220" height="54" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="68" y="258" font-size="12.5" font-weight="700" fill="#c4632a">B 人材育成が多様化・高度化</text>
  <text x="68" y="278" font-size="11" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="56" y="298" width="220" height="54" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="68" y="318" font-size="12.5" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="68" y="338" font-size="11" fill="#666">支援が乱立・重複・分散で届かない</text>
  <rect x="56" y="358" width="220" height="54" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="68" y="378" font-size="12.5" font-weight="700" fill="#c4632a">D 実践知が共有・蓄積されない</text>
  <text x="68" y="398" font-size="11" fill="#666">反復・システム乱立・異動でゼロリセット</text>
  <path d="M292 276 L322 276 L336 290 L322 304 L292 304 L306 290 Z" fill="#1A7A5E"/>
  <rect x="346" y="126" width="538" height="300" rx="16" fill="#F2F9F6" stroke="#cfe6dd" stroke-width="1"/>
  <rect x="346" y="126" width="538" height="38" rx="16" fill="url(#gAccH)"/>
  <rect x="346" y="146" width="538" height="18" fill="url(#gAccH)"/>
  <text x="370" y="151" font-size="14" font-weight="700" fill="#ffffff">柱① アプリ（フロント）　×　柱② AIエージェント基盤（裏側）</text>
  <rect x="362" y="180" width="166" height="234" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <text x="378" y="204" font-size="12.5" font-weight="700" fill="#1A7A5E">柱① 接続アプリ</text>
  <rect x="404" y="218" width="82" height="138" rx="11" fill="#E4F2EC"/>
  <rect x="409" y="223" width="72" height="128" rx="8" fill="#ffffff" stroke="#1A7A5E" stroke-width="1.3"/>
  <rect x="409" y="223" width="72" height="20" rx="8" fill="#1A7A5E"/>
  <rect x="409" y="235" width="72" height="8" fill="#1A7A5E"/>
  <text x="445" y="237" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">研究×学び</text>
  <rect x="417" y="252" width="56" height="9" rx="3" fill="#E4F2EC"/>
  <circle cx="424" cy="276" r="5" fill="#cfe0d8"/><rect x="433" y="272" width="40" height="7" rx="3" fill="#cfe0d8"/>
  <circle cx="424" cy="296" r="5" fill="#cfe0d8"/><rect x="433" y="292" width="40" height="7" rx="3" fill="#cfe0d8"/>
  <circle cx="424" cy="316" r="5" fill="#ec9554"/><rect x="433" y="312" width="40" height="7" rx="3" fill="#f0d9c6"/>
  <rect x="409" y="332" width="72" height="14" rx="4" fill="#1A7A5E"/>
  <text x="445" y="343" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">あなた専用の伴走</text>
  <text x="445" y="380" font-size="11" fill="#555" text-anchor="middle">情報・機会の入口</text>
  <text x="445" y="398" font-size="11" fill="#555" text-anchor="middle">学生・教員・職員が使う</text>
  <text x="540" y="298" font-size="22" font-weight="700" fill="#1A7A5E" text-anchor="middle">＋</text>
  <rect x="556" y="180" width="312" height="234" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <text x="574" y="204" font-size="12.5" font-weight="700" fill="#1A7A5E">柱② AI基盤 ― 課題A〜Dに1:1で対応</text>
  <rect x="572" y="216" width="282" height="44" rx="8" fill="#F2F9F6"/>
  <text x="584" y="234" font-size="11.5" font-weight="700" fill="#16624b">A→ 指導負担を軽減し研究時間を確保</text>
  <text x="584" y="251" font-size="10.5" fill="#666">AI多言語支援・ラボ共通支援・支援者接続</text>
  <rect x="572" y="266" width="282" height="44" rx="8" fill="#F2F9F6"/>
  <text x="584" y="284" font-size="11.5" font-weight="700" fill="#16624b">B→ 院生の研究力を向上</text>
  <text x="584" y="301" font-size="10.5" fill="#666">CVデータベース＋AI伴走の段階別個別支援</text>
  <rect x="572" y="316" width="282" height="44" rx="8" fill="#F2F9F6"/>
  <text x="584" y="334" font-size="11.5" font-weight="700" fill="#16624b">C→ 個別最適な情報を直に届ける</text>
  <text x="584" y="351" font-size="10.5" fill="#666">学生ニーズ × 全学の支援情報を突合し投下</text>
  <rect x="572" y="366" width="282" height="40" rx="8" fill="#F2F9F6"/>
  <text x="584" y="384" font-size="11.5" font-weight="700" fill="#16624b">D→ 支援者の労力削減・効率化</text>
  <text x="584" y="400" font-size="10.5" fill="#666">RAGで省力化・IR/成果を自動収集し統合分析</text>
  <path d="M884 276 L914 276 L928 290 L914 304 L884 304 L898 290 Z" fill="#1A7A5E"/>
  <rect x="938" y="126" width="302" height="300" rx="16" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="966" cy="156" r="15" fill="#ffffff"/>
  <g transform="translate(966,156)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="992" y="162" font-size="15" font-weight="700" fill="#ffffff">向かう先（GOAL）</text>
  <text x="966" y="200" font-size="17" font-weight="700" fill="#ffffff">研究者と支援者が</text>
  <text x="966" y="222" font-size="17" font-weight="700" fill="#ffffff">躍動する大学へ</text>
  <g font-size="12.5" fill="#DCEEE5"><text x="978" y="256">◆ 教員の研究時間が増える</text><text x="978" y="282">◆ 院生の研究力が伸び続ける</text><text x="978" y="308">◆ 必要な支援が個人に届く</text><text x="978" y="334">◆ 実践知が基盤に蓄積・再利用</text></g>
  <rect x="954" y="354" width="270" height="56" rx="9" fill="#ffffff" opacity="0.14"/>
  <text x="966" y="376" font-size="11" fill="#DCEEE5">副次：許諾済データを学内・行政・</text>
  <text x="966" y="394" font-size="11" fill="#DCEEE5">企業で共同利活用／統合分析で経営判断↑／外販</text>
  <rect x="40" y="448" width="1200" height="74" rx="14" fill="#F2F9F6" stroke="#cfe6dd" stroke-width="1"/>
  <rect x="40" y="448" width="150" height="74" rx="14" fill="url(#gAccH)"/>
  <text x="115" y="480" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI</text>
  <text x="115" y="502" font-size="10.5" fill="#DCEEE5" text-anchor="middle">※すべて試算</text>
  <text x="312" y="488" font-size="34" font-weight="700" fill="#1A7A5E" text-anchor="middle">+3h</text>
  <text x="312" y="510" font-size="11" fill="#555" text-anchor="middle">教員の研究時間／週</text>
  <text x="560" y="488" font-size="34" font-weight="700" fill="#E07B39" text-anchor="middle">−50%</text>
  <text x="560" y="510" font-size="11" fill="#555" text-anchor="middle">定型問い合わせ</text>
  <text x="808" y="488" font-size="34" font-weight="700" fill="#1A7A5E" text-anchor="middle">+20pt</text>
  <text x="808" y="510" font-size="11" fill="#555" text-anchor="middle">院生の研究力</text>
  <text x="1066" y="488" font-size="34" font-weight="700" fill="#1A7A5E" text-anchor="middle">+5pt</text>
  <text x="1066" y="510" font-size="11" fill="#555" text-anchor="middle">修了率（中退率↓）</text>
  <text x="40" y="552" font-size="12.5" font-weight="700" fill="#999999">ロードマップ ― 段階的に接続を広げる（Level 1 → 3）</text>
  <path d="M150 624 C360 624 420 604 600 600 S960 580 1060 576" stroke="#9bbcb1" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="190" y="600" width="262" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="210" y="622" font-size="13.5" font-weight="700" fill="#16624b">接続アプリを提供</text>
  <text x="210" y="641" font-size="11" fill="#555">情報・データ・機会を一つに集約</text>
  <rect x="600" y="576" width="262" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="620" y="598" font-size="13.5" font-weight="700" fill="#16624b">AI基盤で個別伴走</text>
  <text x="620" y="617" font-size="11" fill="#555">CV-DB×AIで院生・教員を支援</text>
  <rect x="1008" y="552" width="232" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="1028" y="574" font-size="13.5" font-weight="700" fill="#16624b">全学・社会へ展開</text>
  <text x="1028" y="593" font-size="11" fill="#555">実践知共有・共同研究・外販</text>
  <circle cx="150" cy="624" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="150" y="632" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="600" cy="600" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="600" y="608" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="1008" cy="576" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="1008" y="584" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <text x="1240" y="700" font-size="10" fill="#bbbbbb" text-anchor="end">KPIは想定／試算値（千葉大学・役員ブリーフ）</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。横3幕フロー(①課題A-D→②2本柱：接続アプリのmockup×AI基盤がA-Dに1:1対応→③GOALバースト)＋下段にkpiBand(想定/試算明示)＋ロードマップ旅(Level1-3)。白基調クリーン・teal/warn橙/ニュートラルの3色・airy密度。 -->
