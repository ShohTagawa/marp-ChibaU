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
    <linearGradient id="gWarmH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E8821E"/><stop offset="1" stop-color="#C25A12"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6A93B"/><stop offset="1" stop-color="#D2680F"/></linearGradient>
    <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD15C"/><stop offset="1" stop-color="#F2A024"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFC93C" stop-opacity="0.95"/><stop offset="0.6" stop-color="#F6A93B" stop-opacity="0.45"/><stop offset="1" stop-color="#F6A93B" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9c4a0a" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9c4a0a" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#FFFBF4"/>
  <g opacity="0.11">
    <rect x="84" y="150" width="1112" height="440" rx="18" fill="#ffffff" stroke="#C25A12" stroke-width="3"/>
    <rect x="84" y="150" width="1112" height="44" rx="18" fill="#E8821E"/>
    <rect x="84" y="178" width="1112" height="16" fill="#E8821E"/>
    <circle cx="112" cy="172" r="7" fill="#ffffff"/>
    <circle cx="134" cy="172" r="7" fill="#ffffff"/>
    <circle cx="156" cy="172" r="7" fill="#ffffff"/>
    <rect x="300" y="162" width="640" height="20" rx="10" fill="#ffffff"/>
    <rect x="120" y="222" width="430" height="26" rx="6" fill="#F2A024"/>
    <rect x="120" y="266" width="980" height="12" rx="6" fill="#D2680F"/>
    <rect x="120" y="290" width="900" height="12" rx="6" fill="#D2680F"/>
    <rect x="120" y="314" width="940" height="12" rx="6" fill="#D2680F"/>
    <rect x="730" y="222" width="370" height="26" rx="6" fill="#F2A024"/>
    <rect x="120" y="372" width="430" height="26" rx="6" fill="#F2A024"/>
    <rect x="120" y="416" width="980" height="12" rx="6" fill="#D2680F"/>
    <rect x="120" y="440" width="900" height="12" rx="6" fill="#D2680F"/>
    <rect x="120" y="464" width="940" height="12" rx="6" fill="#D2680F"/>
    <rect x="730" y="372" width="370" height="26" rx="6" fill="#F2A024"/>
    <rect x="120" y="510" width="600" height="12" rx="6" fill="#D2680F"/>
    <rect x="120" y="534" width="520" height="12" rx="6" fill="#D2680F"/>
  </g>
  <rect x="0" y="98" width="1280" height="492" fill="#FFFBF4" opacity="0.55"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gWarmH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#FCEBD2"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#9c4a0a">分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="640" cy="300" r="150" fill="url(#burst)"/>
  <rect x="40" y="110" width="566" height="180" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="110" width="566" height="32" rx="14" fill="url(#gWarmH)"/>
  <rect x="40" y="126" width="566" height="16" fill="url(#gWarmH)"/>
  <circle cx="68" cy="132" r="13" fill="#ffffff"/>
  <g transform="translate(68,133)" stroke="#D2680F" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="90" y="137" font-size="14.5" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <text x="56" y="165" font-size="11" font-weight="700" fill="#b5651d">課題：業務負荷の急増（院生の多様化・申請・評価・学振添削・全員留学）</text>
  <text x="56" y="190" font-size="12" fill="#5a463a">→ AIの多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="56" y="212" font-size="12" fill="#5a463a">→ 支援者への接続が容易になり指導負担を軽減</text>
  <text x="56" y="236" font-size="12.5" font-weight="700" fill="#b8500f">→ 教員は研究そのものに時間を回せる</text>
  <text x="56" y="263" font-size="11" font-weight="700" fill="#C25A12">A課題 ↔ A打ち手（1:1対応）</text>
  <rect x="674" y="110" width="566" height="180" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="110" width="566" height="32" rx="14" fill="url(#gWarmH)"/>
  <rect x="674" y="126" width="566" height="16" fill="url(#gWarmH)"/>
  <circle cx="702" cy="132" r="13" fill="#ffffff"/>
  <g transform="translate(702,132)" stroke="#D2680F" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="724" y="137" font-size="14.5" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <text x="690" y="165" font-size="11" font-weight="700" fill="#b5651d">課題：育成の多様化・高度化（個別の能力育成と資源最適化が必須）</text>
  <text x="690" y="190" font-size="12" fill="#5a463a">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="690" y="212" font-size="12" fill="#5a463a">→ 研究段階に合わせAI伴走の段階別個別支援</text>
  <text x="690" y="236" font-size="12.5" font-weight="700" fill="#b8500f">→ 留学先・ラボ・企業のマッチングも可能に</text>
  <text x="690" y="263" font-size="11" font-weight="700" fill="#C25A12">B課題 ↔ B打ち手（1:1対応）</text>
  <rect x="40" y="306" width="566" height="180" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="306" width="566" height="32" rx="14" fill="url(#gWarmH)"/>
  <rect x="40" y="322" width="566" height="16" fill="url(#gWarmH)"/>
  <circle cx="68" cy="328" r="13" fill="#ffffff"/>
  <g transform="translate(68,329)" stroke="#D2680F" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="90" y="333" font-size="14.5" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <text x="56" y="361" font-size="11" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・分散し届かない）</text>
  <text x="56" y="386" font-size="12" fill="#5a463a">→ ①学生入力ニーズ ＋ ②全学の支援情報を突合</text>
  <text x="56" y="408" font-size="12" fill="#5a463a">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="56" y="432" font-size="12.5" font-weight="700" fill="#b8500f">→ 個別最適化した学び・訓練機会を提供</text>
  <text x="56" y="459" font-size="11" font-weight="700" fill="#C25A12">C課題 ↔ C打ち手（1:1対応）</text>
  <rect x="674" y="306" width="566" height="180" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="306" width="566" height="32" rx="14" fill="url(#gWarmH)"/>
  <rect x="674" y="322" width="566" height="16" fill="url(#gWarmH)"/>
  <circle cx="702" cy="328" r="13" fill="#ffffff"/>
  <g transform="translate(702,329)" stroke="#D2680F" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="724" y="333" font-size="14.5" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <text x="690" y="361" font-size="11" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務・システム乱立・異動でゼロリセット）</text>
  <text x="690" y="386" font-size="12" fill="#5a463a">→ システムでなく〈データ〉を基盤上で接続しAI分析</text>
  <text x="690" y="408" font-size="12" fill="#5a463a">→ 反復・窓口業務をRAGで省力化</text>
  <text x="690" y="432" font-size="12.5" font-weight="700" fill="#b8500f">→ IR・成果・回答を自動収集し統合分析</text>
  <text x="690" y="459" font-size="11" font-weight="700" fill="#C25A12">D課題 ↔ D打ち手（1:1対応）</text>
  <circle cx="640" cy="300" r="50" fill="url(#gWarm)" filter="url(#sh)"/>
  <circle cx="640" cy="300" r="50" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.6"/>
  <text x="640" y="295" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="313" font-size="10" fill="#fff3df" text-anchor="middle">接続ハブ</text>
  <rect x="40" y="500" width="1200" height="120" rx="14" fill="url(#gGold)" filter="url(#sh)"/>
  <rect x="40" y="500" width="1200" height="26" rx="14" fill="#F2A024"/>
  <rect x="40" y="513" width="1200" height="13" fill="#F2A024"/>
  <text x="56" y="518" font-size="13" font-weight="700" fill="#7a3a08">想定／試算 KPI ― Nexus 導入で見込む変化</text>
  <text x="146" y="576" font-size="46" font-weight="700" fill="#9c4a0a" text-anchor="middle">+3h</text>
  <text x="146" y="600" font-size="12" font-weight="700" fill="#7a3a08" text-anchor="middle">教員の研究時間／週</text>
  <line x1="280" y1="540" x2="280" y2="608" stroke="#e0a64e" stroke-width="1.5"/>
  <text x="430" y="576" font-size="46" font-weight="700" fill="#9c4a0a" text-anchor="middle">−50%</text>
  <text x="430" y="600" font-size="12" font-weight="700" fill="#7a3a08" text-anchor="middle">定型問い合わせ</text>
  <line x1="572" y1="540" x2="572" y2="608" stroke="#e0a64e" stroke-width="1.5"/>
  <text x="715" y="576" font-size="46" font-weight="700" fill="#9c4a0a" text-anchor="middle">+20pt</text>
  <text x="715" y="600" font-size="12" font-weight="700" fill="#7a3a08" text-anchor="middle">院生の研究力</text>
  <line x1="858" y1="540" x2="858" y2="608" stroke="#e0a64e" stroke-width="1.5"/>
  <text x="1005" y="576" font-size="46" font-weight="700" fill="#9c4a0a" text-anchor="middle">+5pt</text>
  <text x="1005" y="600" font-size="12" font-weight="700" fill="#7a3a08" text-anchor="middle">修了率（中退率↓）</text>
  <rect x="1110" y="540" width="116" height="64" rx="10" fill="#9c4a0a"/>
  <text x="1168" y="565" font-size="10.5" fill="#ffe8c4" text-anchor="middle">いずれも</text>
  <text x="1168" y="582" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">想定/試算</text>
  <text x="1168" y="597" font-size="10.5" fill="#ffe8c4" text-anchor="middle">の見込値</text>
  <text x="40" y="640" font-size="11" fill="#9a8a76">さらに：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M40 654 L1206 654 L1240 686 L1206 718 L40 718 Z" fill="url(#gWarmH)"/>
  <text x="623" y="692" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-58: 2×2マトリクス＋中心Nexusハブ。背景に「アプリ画面=巨大テキストボックス」薄パネル(0.11)。橙/黄の温色ムード、goalBurst(中心放射)＋kpiBand(下部金帯に巨大数字KPI4本、全て想定/試算明示)。A-D課題↔打ち手1:1。 -->
