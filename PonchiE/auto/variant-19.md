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
    <linearGradient id="gNavyH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1a3a5c"/><stop offset="1" stop-color="#0e2740"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f9e9b"/><stop offset="1" stop-color="#147a78"/></linearGradient>
    <linearGradient id="gNavy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#23507e"/><stop offset="1" stop-color="#0e2740"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e08a4d"/><stop offset="1" stop-color="#c96f2c"/></linearGradient>
    <linearGradient id="gBand" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f9e9b"/><stop offset="0.5" stop-color="#2b6a9c"/><stop offset="1" stop-color="#23507e"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1f9e9b" stop-opacity="0.85"/><stop offset="0.6" stop-color="#23507e" stop-opacity="0.30"/><stop offset="1" stop-color="#23507e" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0e2740" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e2740" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gNavyH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#e3f1f0"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#147a78">学内に分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="32" y="108" width="320" height="296" rx="18" fill="#fcefe4" filter="url(#shS)"/>
  <rect x="372" y="108" width="540" height="296" rx="18" fill="#e3f1f0" filter="url(#shS)"/>
  <rect x="932" y="108" width="316" height="296" rx="18" fill="#e8eef6" filter="url(#shS)"/>
  <circle cx="60" cy="138" r="15" fill="url(#gWarn)"/>
  <g transform="translate(60,138)" stroke="#ffffff" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="60" cy="141" r="1.2" fill="#ffffff"/>
  <text x="84" y="135" font-size="16" font-weight="700" fill="#c96f2c">① 4つの課題</text>
  <text x="84" y="152" font-size="11" fill="#b06a30">いま、大学は接続が切れている</text>
  <rect x="48" y="170" width="288" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="195" r="11" fill="#fcefe4"/><text x="68" y="200" font-size="13" font-weight="700" fill="#c96f2c" text-anchor="middle">A</text>
  <text x="86" y="190" font-size="12.5" font-weight="700" fill="#333">教員の業務負荷が急増</text>
  <text x="86" y="208" font-size="10.5" fill="#777">院生の多様化・申請/評価/添削で限界</text>
  <rect x="48" y="226" width="288" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="251" r="11" fill="#fcefe4"/><text x="68" y="256" font-size="13" font-weight="700" fill="#c96f2c" text-anchor="middle">B</text>
  <text x="86" y="246" font-size="12.5" font-weight="700" fill="#333">人材育成が多様化・高度化</text>
  <text x="86" y="264" font-size="10.5" fill="#777">求める水準↑ 個別育成と資源配分が必須</text>
  <rect x="48" y="282" width="288" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="307" r="11" fill="#fcefe4"/><text x="68" y="312" font-size="13" font-weight="700" fill="#c96f2c" text-anchor="middle">C</text>
  <text x="86" y="302" font-size="12.5" font-weight="700" fill="#333">大学→個人のミッシングリンク</text>
  <text x="86" y="320" font-size="10.5" fill="#777">支援が乱立・重複・分散し届かない</text>
  <rect x="48" y="338" width="288" height="50" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="363" r="11" fill="#fcefe4"/><text x="68" y="368" font-size="13" font-weight="700" fill="#c96f2c" text-anchor="middle">D</text>
  <text x="86" y="358" font-size="12.5" font-weight="700" fill="#333">支援者の実践知が活かされない</text>
  <text x="86" y="376" font-size="10.5" fill="#777">反復・データ分散・異動でゼロリセット</text>
  <path d="M352 240 L364 240 L376 256 L364 272 L352 272 L362 256 Z" fill="#23507e"/>
  <circle cx="398" cy="138" r="15" fill="url(#gTeal)"/>
  <g transform="translate(398,138)" stroke="#ffffff" stroke-width="1.8" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="422" y="135" font-size="16" font-weight="700" fill="#147a78">② 2本柱で打ち手（課題A–Dに1:1対応）</text>
  <text x="422" y="152" font-size="11" fill="#3a8a87">アプリ（フロント）× AI基盤（裏側）</text>
  <rect x="388" y="170" width="118" height="218" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="447" y="190" font-size="12" font-weight="700" fill="#147a78" text-anchor="middle">柱① アプリ</text>
  <rect x="412" y="200" width="70" height="106" rx="9" fill="#e3f1f0"/>
  <rect x="417" y="205" width="60" height="96" rx="7" fill="#ffffff" stroke="#1f9e9b" stroke-width="1.3"/>
  <rect x="417" y="205" width="60" height="16" rx="7" fill="url(#gTeal)"/>
  <rect x="417" y="213" width="60" height="8" fill="#1f9e9b"/>
  <rect x="424" y="229" width="46" height="9" rx="3" fill="#e3f1f0" stroke="#bfe0de" stroke-width="0.6"/>
  <circle cx="430" cy="252" r="4" fill="#cfe7e5"/><rect x="438" y="248" width="32" height="6" rx="2" fill="#cfe7e5"/>
  <circle cx="430" cy="268" r="4" fill="#cfe7e5"/><rect x="438" y="264" width="32" height="6" rx="2" fill="#cfe7e5"/>
  <circle cx="430" cy="284" r="4" fill="#cfe7e5"/><rect x="438" y="280" width="32" height="6" rx="2" fill="#cfe7e5"/>
  <text x="447" y="332" font-size="10.5" fill="#555" text-anchor="middle">情報・支援の</text>
  <text x="447" y="348" font-size="10.5" fill="#555" text-anchor="middle">入口を一つに</text>
  <text x="447" y="368" font-size="11" font-weight="700" fill="#147a78" text-anchor="middle">届ける窓口</text>
  <text x="520" y="186" font-size="20" font-weight="700" fill="#23507e">＋</text>
  <rect x="540" y="170" width="356" height="106" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="556" y="190" font-size="12" font-weight="700" fill="#147a78">柱② AI基盤（実践知・データを接続）</text>
  <rect x="552" y="200" width="166" height="32" rx="7" fill="#eef6f5"/>
  <text x="560" y="214" font-size="11" font-weight="700" fill="#c96f2c">A→</text><text x="582" y="214" font-size="11" fill="#333">指導負担を軽減</text>
  <text x="560" y="227" font-size="9.5" fill="#888">多言語支援・ラボ共通支援・支援者接続</text>
  <rect x="724" y="200" width="160" height="32" rx="7" fill="#eef6f5"/>
  <text x="732" y="214" font-size="11" font-weight="700" fill="#c96f2c">B→</text><text x="754" y="214" font-size="11" fill="#333">研究力を向上</text>
  <text x="732" y="227" font-size="9.5" fill="#888">CV DB＋AI伴走の段階別個別支援</text>
  <rect x="552" y="238" width="166" height="32" rx="7" fill="#eef6f5"/>
  <text x="560" y="252" font-size="11" font-weight="700" fill="#c96f2c">C→</text><text x="582" y="252" font-size="11" fill="#333">個別最適を直送</text>
  <text x="560" y="265" font-size="9.5" fill="#888">学生ニーズ×全学支援情報を突合</text>
  <rect x="724" y="238" width="160" height="32" rx="7" fill="#eef6f5"/>
  <text x="732" y="252" font-size="11" font-weight="700" fill="#c96f2c">D→</text><text x="754" y="252" font-size="11" fill="#333">支援者を省力化</text>
  <text x="732" y="265" font-size="9.5" fill="#888">RAGで反復削減・成果を自動統合分析</text>
  <rect x="388" y="286" width="508" height="44" rx="9" fill="url(#gBand)" filter="url(#shS)"/>
  <text x="396" y="313" font-size="12" font-weight="700" fill="#ffffff">段階展開</text>
  <rect x="466" y="294" width="116" height="28" rx="7" fill="#ffffff" opacity="0.92"/>
  <text x="524" y="312" font-size="11" font-weight="700" fill="#147a78" text-anchor="middle">Lv1 情報集約</text>
  <path d="M586 308 L606 308" stroke="#ffffff" stroke-width="2.5" fill="none"/><path d="M604 304 L610 308 L604 312 Z" fill="#ffffff"/>
  <rect x="614" y="294" width="116" height="28" rx="7" fill="#ffffff" opacity="0.92"/>
  <text x="672" y="312" font-size="11" font-weight="700" fill="#2b6a9c" text-anchor="middle">Lv2 AI伴走</text>
  <path d="M734 308 L754 308" stroke="#ffffff" stroke-width="2.5" fill="none"/><path d="M752 304 L758 308 L752 312 Z" fill="#ffffff"/>
  <rect x="762" y="294" width="126" height="28" rx="7" fill="#ffffff" opacity="0.92"/>
  <text x="825" y="312" font-size="11" font-weight="700" fill="#23507e" text-anchor="middle">Lv3 全学・外販</text>
  <rect x="388" y="340" width="508" height="50" rx="10" fill="#eef6f5"/>
  <text x="404" y="360" font-size="11.5" font-weight="700" fill="#147a78">副次効果</text>
  <text x="404" y="378" font-size="10.5" fill="#555">許諾済データの共同研究（学内・行政・企業）／統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M912 240 L924 240 L936 256 L924 272 L912 272 L922 256 Z" fill="#23507e"/>
  <circle cx="1090" cy="250" r="120" fill="url(#burst)"/>
  <g stroke="#1f9e9b" stroke-width="3" stroke-linecap="round" opacity="0.5"><path d="M1090 118 V102"/><path d="M1090 382 V398"/><path d="M958 250 H942"/><path d="M1222 250 H1238"/><path d="M998 158 L987 147"/><path d="M1182 342 L1193 353"/><path d="M1182 158 L1193 147"/><path d="M998 342 L987 353"/></g>
  <circle cx="958" cy="138" r="15" fill="url(#gNavy)"/>
  <g transform="translate(958,138)" stroke="#ffffff" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="982" y="135" font-size="16" font-weight="700" fill="#23507e">③ GOAL</text>
  <text x="982" y="152" font-size="11" fill="#3a6a96">接続が生む好循環</text>
  <text x="1090" y="230" font-size="19" font-weight="700" fill="#0e2740" text-anchor="middle">研究者と支援者が</text>
  <text x="1090" y="256" font-size="19" font-weight="700" fill="#0e2740" text-anchor="middle">躍動する大学</text>
  <text x="1090" y="288" font-size="12" fill="#3a6a96" text-anchor="middle">分散を接続 → 成果が連鎖的に伸びる</text>
  <rect x="952" y="328" width="276" height="62" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <text x="1090" y="348" font-size="10.5" font-weight="700" fill="#c96f2c" text-anchor="middle">想定／試算KPI（効果見込み）</text>
  <text x="1090" y="366" font-size="11" font-weight="700" fill="#147a78" text-anchor="middle">教員 研究時間 ＋3h/週　定型問合せ −50%</text>
  <text x="1090" y="382" font-size="11" font-weight="700" fill="#23507e" text-anchor="middle">院生 研究力 ＋20pt　修了率 ＋5pt</text>
  <rect x="32" y="420" width="1216" height="34" rx="9" fill="#e8eef6"/>
  <text x="48" y="442" font-size="13" font-weight="700" fill="#23507e">ロードマップ：分散した支援を「接続基盤」へ ― 集約 → 伴走 → 全学展開</text>
  <path d="M150 540 C360 540 420 512 620 506 S960 478 1080 472" stroke="#9bbfce" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="190" y="512" width="262" height="58" rx="11" fill="#fcefe4" filter="url(#shS)"/>
  <text x="212" y="535" font-size="14" font-weight="700" fill="#c96f2c">Lv1　情報・支援の集約</text>
  <text x="212" y="556" font-size="11.5" fill="#555">学内に散る情報・資源をアプリに一元化</text>
  <rect x="618" y="478" width="262" height="58" rx="11" fill="#e3f1f0" filter="url(#shS)"/>
  <text x="640" y="501" font-size="14" font-weight="700" fill="#147a78">Lv2　AI伴走で個別最適</text>
  <text x="640" y="522" font-size="11.5" fill="#555">CV DB＋AIで段階別支援・突合して直送</text>
  <rect x="980" y="444" width="262" height="58" rx="11" fill="#e8eef6" filter="url(#shS)"/>
  <text x="1002" y="467" font-size="14" font-weight="700" fill="#23507e">Lv3　全学展開・外部接続</text>
  <text x="1002" y="488" font-size="11.5" fill="#555">教員・事務・経営へ拡大／共同研究・外販</text>
  <circle cx="150" cy="540" r="24" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="150" y="548" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="620" cy="506" r="24" fill="url(#gBand)" filter="url(#sh)"/>
  <text x="620" y="514" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="1056" cy="472" r="24" fill="url(#gNavy)" filter="url(#sh)"/>
  <text x="1056" y="480" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M32 598 L1206 598 L1240 638 L1206 678 L32 678 Z" fill="url(#gNavyH)"/>
  <text x="619" y="644" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">分散を「接続」するハブとなり、研究者と支援者が躍動し続ける大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤[課題と1:1対応]→③GOALバースト)＋下段ロードマップ旅(Lv1集約→Lv2伴走→Lv3全学)。地=淡teal/淡warm/淡navyの面塗りゾーン(太枠なし・影で分離)。配色=ネイビー＋tealの寒色クール。appMockup・goalBurst(放射グロー+光条)・stageBand(Lv1→Lv3帯)を実装。KPIは「想定/試算」と明示。 -->
