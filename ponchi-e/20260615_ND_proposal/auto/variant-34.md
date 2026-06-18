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
    <linearGradient id="vHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8842c"/><stop offset="1" stop-color="#c25e1c"/></linearGradient>
    <linearGradient id="vSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#fde3b8"/><stop offset="1" stop-color="#f6b94e"/></linearGradient>
    <linearGradient id="vStep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fff5e6"/></linearGradient>
    <linearGradient id="vGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#ef7a1a"/></linearGradient>
    <linearGradient id="vBand" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f59e2b"/><stop offset="1" stop-color="#d9701a"/></linearGradient>
    <radialGradient id="vBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd166" stop-opacity="0.85"/><stop offset="0.55" stop-color="#ffb347" stop-opacity="0.35"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
    <filter id="vSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a4d10" flood-opacity="0.22"/></filter>
    <filter id="vShS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a4d10" flood-opacity="0.16"/></filter>
    <marker id="vAr" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d9701a"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.10" fill="#c25e1c"><circle cx="150" cy="180" r="3"/><circle cx="260" cy="140" r="3"/><circle cx="360" cy="210" r="3"/><circle cx="470" cy="150" r="3"/><circle cx="600" cy="200" r="3"/><circle cx="720" cy="150" r="3"/><circle cx="850" cy="210" r="3"/><circle cx="960" cy="150" r="3"/><circle cx="1090" cy="200" r="3"/><circle cx="210" cy="320" r="3"/><circle cx="430" cy="350" r="3"/><circle cx="660" cy="330" r="3"/><circle cx="900" cy="360" r="3"/><circle cx="1120" cy="320" r="3"/><circle cx="320" cy="470" r="3"/><circle cx="560" cy="500" r="3"/><circle cx="800" cy="480" r="3"/><circle cx="1040" cy="500" r="3"/></g>
  <g opacity="0.08" stroke="#c25e1c" stroke-width="1" fill="none"><path d="M150 180 L260 140 L470 150 L720 150 L960 150"/><path d="M210 320 L430 350 L660 330 L900 360 L1120 320"/><path d="M260 140 L210 320"/><path d="M470 150 L430 350"/><path d="M720 150 L660 330"/><path d="M960 150 L900 360"/><path d="M430 350 L320 470 L560 500 L800 480 L1040 500"/></g>
  <path d="M-40 720 L260 720 L1120 250 L1280 250 L1280 720 Z" fill="url(#vSlope)" opacity="0.55"/>
  <path d="M-40 720 L160 720 L1060 300 L1180 300 L1180 720 Z" fill="#f6b94e" opacity="0.28"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#vHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想 ロードマップ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#fdeccd"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#9a4d10">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="42" y="112" font-size="12" font-weight="700" fill="#b85c1a">低地＝大学が抱える課題（A–D）</text>
  <rect x="40" y="120" width="232" height="56" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="120" width="6" height="56" rx="3" fill="#c25e1c"/>
  <circle cx="66" cy="140" r="11" fill="#fbe3cc"/>
  <text x="66" y="145" font-size="13" font-weight="700" fill="#c25e1c" text-anchor="middle">A</text>
  <text x="86" y="140" font-size="12" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="166" font-size="10" fill="#6b7280">院生の多様化・申請/評価/学振・全員留学で限界</text>
  <rect x="40" y="186" width="232" height="56" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="186" width="6" height="56" rx="3" fill="#c25e1c"/>
  <circle cx="66" cy="206" r="11" fill="#fbe3cc"/>
  <text x="66" y="211" font-size="13" font-weight="700" fill="#c25e1c" text-anchor="middle">B</text>
  <text x="86" y="206" font-size="12" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="232" font-size="10" fill="#6b7280">水準上昇・成功モデル多様化／最適投下が必須</text>
  <rect x="40" y="252" width="232" height="56" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="252" width="6" height="56" rx="3" fill="#c25e1c"/>
  <circle cx="66" cy="272" r="11" fill="#fbe3cc"/>
  <text x="66" y="277" font-size="13" font-weight="700" fill="#c25e1c" text-anchor="middle">C</text>
  <text x="86" y="272" font-size="12" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="298" font-size="10" fill="#6b7280">支援が乱立・重複・分散し個人に届かない</text>
  <rect x="40" y="318" width="232" height="56" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="318" width="6" height="56" rx="3" fill="#c25e1c"/>
  <circle cx="66" cy="338" r="11" fill="#fbe3cc"/>
  <text x="66" y="343" font-size="13" font-weight="700" fill="#c25e1c" text-anchor="middle">D</text>
  <text x="86" y="338" font-size="12" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="364" font-size="10" fill="#6b7280">手続き反復・システム乱立・異動でゼロ化</text>
  <text x="300" y="640" font-size="12" font-weight="700" fill="#b85c1a">斜面＝AI×接続基盤の打ち手（取組1–4 ＝ 課題A–Dに1:1対応）</text>
  <path d="M300 590 C520 560 720 470 980 320" stroke="#ffffff" stroke-width="10" fill="none" opacity="0.7"/>
  <path d="M300 590 C520 560 720 470 980 320" stroke="#d9701a" stroke-width="2.4" fill="none" stroke-dasharray="2 9" stroke-linecap="round" marker-end="url(#vAr)"/>
  <rect x="300" y="496" width="250" height="86" rx="12" fill="url(#vStep)" filter="url(#vSh)"/>
  <rect x="300" y="496" width="250" height="22" rx="12" fill="#e8842c"/>
  <rect x="300" y="508" width="250" height="10" fill="#e8842c"/>
  <text x="314" y="512" font-size="11" font-weight="700" fill="#ffffff">取組1 ← 課題A</text>
  <text x="314" y="538" font-size="13" font-weight="700" fill="#9a4d10">指導負担を軽減し研究時間を確保</text>
  <text x="314" y="558" font-size="10.5" fill="#555">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="314" y="574" font-size="10.5" fill="#555">→ 教員は研究そのものに時間を回せる</text>
  <rect x="438" y="416" width="250" height="86" rx="12" fill="url(#vStep)" filter="url(#vSh)"/>
  <rect x="438" y="416" width="250" height="22" rx="12" fill="#e8842c"/>
  <rect x="438" y="428" width="250" height="10" fill="#e8842c"/>
  <text x="452" y="432" font-size="11" font-weight="700" fill="#ffffff">取組2 ← 課題B</text>
  <text x="452" y="458" font-size="13" font-weight="700" fill="#9a4d10">院生一人ひとりの研究力を向上</text>
  <text x="452" y="478" font-size="10.5" fill="#555">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="452" y="494" font-size="10.5" fill="#555">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="588" y="334" width="250" height="86" rx="12" fill="url(#vStep)" filter="url(#vSh)"/>
  <rect x="588" y="334" width="250" height="22" rx="12" fill="#e8842c"/>
  <rect x="588" y="346" width="250" height="10" fill="#e8842c"/>
  <text x="602" y="350" font-size="11" font-weight="700" fill="#ffffff">取組3 ← 課題C</text>
  <text x="602" y="376" font-size="13" font-weight="700" fill="#9a4d10">個別最適な情報を直に届ける</text>
  <text x="602" y="396" font-size="10.5" fill="#555">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="602" y="412" font-size="10.5" fill="#555">突合し、必要な個人へダイレクト投下</text>
  <rect x="740" y="250" width="250" height="86" rx="12" fill="url(#vStep)" filter="url(#vSh)"/>
  <rect x="740" y="250" width="250" height="22" rx="12" fill="#e8842c"/>
  <rect x="740" y="262" width="250" height="10" fill="#e8842c"/>
  <text x="754" y="266" font-size="11" font-weight="700" fill="#ffffff">取組4 ← 課題D</text>
  <text x="754" y="292" font-size="13" font-weight="700" fill="#9a4d10">支援者の労力を削減し効率化</text>
  <text x="754" y="312" font-size="10.5" fill="#555">反復・窓口業務をRAGで省力化</text>
  <text x="754" y="328" font-size="10.5" fill="#555">IR・成果・回答を自動収集し統合分析</text>
  <path d="M286 148 C300 148 300 524 314 524" stroke="#d9701a" stroke-width="1.8" fill="none" opacity="0.5" stroke-dasharray="3 4"/>
  <path d="M286 214 C300 214 300 444 452 444" stroke="#d9701a" stroke-width="1.8" fill="none" opacity="0.5" stroke-dasharray="3 4"/>
  <path d="M286 280 C300 280 300 362 602 362" stroke="#d9701a" stroke-width="1.8" fill="none" opacity="0.5" stroke-dasharray="3 4"/>
  <path d="M286 346 C300 346 300 278 754 278" stroke="#d9701a" stroke-width="1.8" fill="none" opacity="0.5" stroke-dasharray="3 4"/>
  <circle cx="1095" cy="200" r="150" fill="url(#vBurst)"/>
  <g opacity="0.9" stroke="#ffd166" stroke-width="3" stroke-linecap="round"><path d="M1095 30 L1095 56"/><path d="M955 70 L972 90"/><path d="M1235 70 L1218 90"/><path d="M905 200 L932 200"/><path d="M1285 200 L1258 200"/></g>
  <circle cx="1095" cy="200" r="96" fill="url(#vGoal)" filter="url(#vSh)"/>
  <circle cx="1095" cy="156" r="15" fill="#ffffff"/>
  <g transform="translate(1095,156)" stroke="#ef7a1a" stroke-width="2.4" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1095" y="195" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1095" y="217" font-size="11" fill="#fff3e0" text-anchor="middle">研究者と支援者が</text>
  <text x="1095" y="232" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">躍動する大学へ</text>
  <text x="1095" y="252" font-size="10.5" fill="#fff3e0" text-anchor="middle">成果が連鎖し好循環</text>
  <rect x="930" y="384" width="312" height="72" rx="12" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="930" y="384" width="6" height="72" rx="3" fill="#e8842c"/>
  <text x="950" y="406" font-size="11.5" font-weight="700" fill="#9a4d10">＋ 副次効果</text>
  <text x="950" y="424" font-size="10" fill="#555">許諾済データの共有・利活用（学内・行政・企業の共同研究）</text>
  <text x="950" y="439" font-size="10" fill="#555">統合分析で経営判断を迅速化／アプリの外販</text>
  <text x="42" y="404" font-size="11" font-weight="700" fill="#9a8" >接続の核：</text>
  <rect x="40" y="412" width="232" height="78" rx="12" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="412" width="6" height="78" rx="3" fill="url(#vBand)"/>
  <circle cx="68" cy="436" r="13" fill="#fdeccd"/>
  <g transform="translate(68,436)" stroke="#c25e1c" stroke-width="2" fill="none"><rect x="-8" y="-4" width="8" height="8" rx="3"/><rect x="1" y="-4" width="8" height="8" rx="3"/></g>
  <text x="90" y="433" font-size="12.5" font-weight="700" fill="#9a4d10">接続基盤 Nexus</text>
  <text x="90" y="450" font-size="10" fill="#555">CVデータベース ＋ AI伴走 ＋ RAG</text>
  <text x="56" y="470" font-size="10" fill="#6b7280">システムでなく〈データ〉を接続</text>
  <text x="56" y="484" font-size="10" fill="#6b7280">Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携</text>
  <text x="42" y="528" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="40" y="536" width="226" height="74" rx="12" fill="url(#vBand)" filter="url(#vSh)"/>
  <text x="56" y="582" font-size="46" font-weight="700" fill="#ffffff">＋3<tspan font-size="18" font-weight="400">h/週</tspan></text>
  <text x="56" y="602" font-size="10.5" font-weight="700" fill="#fff3e0">教員1人あたりの研究時間を確保（主役指標）</text>
  <text x="282" y="552" font-size="10" fill="#9a9a9a">※下記はいずれも想定/試算値</text>
  <rect x="284" y="560" width="222" height="50" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="284" y="560" width="5" height="50" rx="2.5" fill="url(#vBand)"/>
  <text x="300" y="595" font-size="22" font-weight="700" fill="#c25e1c">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="372" y="582" font-size="10.5" fill="#555">定型問い合わせ・</text>
  <text x="372" y="597" font-size="10.5" fill="#555">窓口業務（RAG）</text>
  <rect x="516" y="560" width="222" height="50" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="516" y="560" width="5" height="50" rx="2.5" fill="url(#vBand)"/>
  <text x="532" y="595" font-size="22" font-weight="700" fill="#c25e1c">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="604" y="582" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="604" y="597" font-size="10.5" fill="#555">（自己効力感）</text>
  <rect x="748" y="560" width="222" height="50" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="748" y="560" width="5" height="50" rx="2.5" fill="url(#vBand)"/>
  <text x="764" y="595" font-size="22" font-weight="700" fill="#c25e1c">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="836" y="582" font-size="10.5" fill="#555">修了率の改善</text>
  <text x="836" y="597" font-size="10.5" fill="#555">（中退率↓）</text>
  <rect x="982" y="560" width="258" height="50" rx="10" fill="#fdeccd" filter="url(#vShS)"/>
  <text x="998" y="582" font-size="10.5" font-weight="700" fill="#9a4d10">いずれも導入後の「想定/試算」</text>
  <text x="998" y="598" font-size="10" fill="#9a5d2a">実測は段階展開の各Lvで検証する</text>
  <path d="M40 626 L1206 626 L1240 658 L1206 690 L40 690 Z" fill="url(#vBand)"/>
  <text x="623" y="664" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">課題の低地から打ち手の斜面を昇り、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵 variant-34：骨格=ロードマップ旅(対角クライム)。低地=課題A-D／左下→右上の昇る斜面に取組1-4(課題A-Dと1:1)を階段配置／右上=goalBurst(放射＋同心円)。0層=世界地図風ドット&都市結線。配色=橙/黄の温かみ、焦点はGOALバースト1点。巨大数字KPI「＋3h/週」を主役に、kpiBandで残り指標。KPIは全て「想定/試算」と明示。 -->
