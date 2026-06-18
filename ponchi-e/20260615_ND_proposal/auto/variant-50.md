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
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#27a07c" stop-opacity="0.30"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <g opacity="0.08" stroke="#16624b" fill="none" stroke-width="1">
    <ellipse cx="640" cy="400" rx="430" ry="430"/>
    <ellipse cx="640" cy="400" rx="430" ry="150"/>
    <ellipse cx="640" cy="400" rx="430" ry="280"/>
    <ellipse cx="640" cy="400" rx="120" ry="430"/>
    <ellipse cx="640" cy="400" rx="280" ry="430"/>
    <line x1="210" y1="400" x2="1070" y2="400"/>
    <line x1="640" y1="-30" x2="640" y2="830"/>
  </g>
  <g opacity="0.07" stroke="#1f8f6e" stroke-width="1" stroke-dasharray="2 6">
    <line x1="180" y1="170" x2="520" y2="540"/>
    <line x1="1100" y1="200" x2="640" y2="470"/>
    <line x1="320" y1="600" x2="980" y2="240"/>
    <line x1="120" y1="430" x2="900" y2="600"/>
    <line x1="700" y1="120" x2="1120" y2="520"/>
  </g>
  <g opacity="0.10" fill="#1f8f6e">
    <circle cx="180" cy="170" r="3"/><circle cx="520" cy="540" r="3"/><circle cx="1100" cy="200" r="3"/><circle cx="640" cy="470" r="3"/><circle cx="320" cy="600" r="3"/><circle cx="980" cy="240" r="3"/><circle cx="120" cy="430" r="3"/><circle cx="900" cy="600" r="3"/><circle cx="700" cy="120" r="3"/><circle cx="1120" cy="520" r="3"/>
  </g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="84" font-size="15" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="104" width="470" height="26" rx="7" fill="#FBEDE2"/>
  <text x="56" y="122" font-size="13" font-weight="700" fill="#c4632a">BEFORE ― 大学が抱える課題</text>
  <rect x="524" y="104" width="190" height="26" rx="7" fill="url(#gWarn)"/>
  <text x="619" y="122" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI × 接続基盤で変換</text>
  <rect x="728" y="104" width="512" height="26" rx="7" fill="#E4F2EC"/>
  <text x="744" y="122" font-size="13" font-weight="700" fill="#16624b">AFTER ― 課題A–Dと1対1で対応する打ち手</text>
  <g>
    <rect x="40" y="138" width="470" height="74" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="162" r="12" fill="#ffffff"/>
    <text x="68" y="167" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
    <text x="90" y="166" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
    <text x="56" y="188" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）＋研究費申請・</text>
    <text x="56" y="204" font-size="11" fill="#7a5a45">評価資料・学振添削・全員留学対応で指導が限界に</text>
    <circle cx="619" cy="175" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
    <text x="619" y="180" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
    <path d="M584 175 L576 175 M644 169 L658 175 L644 181" stroke="#d2772f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="728" y="138" width="512" height="74" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
    <rect x="728" y="138" width="6" height="74" rx="3" fill="url(#gAccH)"/>
    <text x="750" y="166" font-size="13.5" font-weight="700" fill="#16624b">指導負担を軽減し、研究時間を確保</text>
    <text x="750" y="188" font-size="11" fill="#3c5b50">AI多言語支援・ラボ共通支援・支援者への接続を整備し、</text>
    <text x="750" y="204" font-size="11" fill="#3c5b50">教員は研究そのものに時間を回せる</text>
  </g>
  <g>
    <rect x="40" y="218" width="470" height="74" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="242" r="12" fill="#ffffff"/>
    <text x="68" y="247" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
    <text x="90" y="246" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が多様化・高度化</text>
    <text x="56" y="268" font-size="11" fill="#7a5a45">成功モデルが多様化し、求める水準も上昇。個別の能力</text>
    <text x="56" y="284" font-size="11" fill="#7a5a45">育成と、限られた資源の最適投下が必須に</text>
    <circle cx="619" cy="255" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
    <text x="619" y="260" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
    <path d="M584 255 L576 255 M644 249 L658 255 L644 261" stroke="#d2772f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="728" y="218" width="512" height="74" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
    <rect x="728" y="218" width="6" height="74" rx="3" fill="url(#gAccH)"/>
    <text x="750" y="246" font-size="13.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
    <text x="750" y="268" font-size="11" fill="#3c5b50">CVデータベース（学内外の学習・スキル・資格記録）＋AI</text>
    <text x="750" y="284" font-size="11" fill="#3c5b50">伴走で段階別に個別支援。留学・ラボ・企業をマッチング</text>
  </g>
  <g>
    <rect x="40" y="298" width="470" height="74" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="322" r="12" fill="#ffffff"/>
    <text x="68" y="327" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
    <text x="90" y="326" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
    <text x="56" y="348" font-size="11" fill="#7a5a45">学内の各種サポートが乱立・重複・分散し、真に必要と</text>
    <text x="56" y="364" font-size="11" fill="#7a5a45">する個人へ届いていない</text>
    <circle cx="619" cy="335" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
    <text x="619" y="340" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
    <path d="M584 335 L576 335 M644 329 L658 335 L644 341" stroke="#d2772f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="728" y="298" width="512" height="74" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
    <rect x="728" y="298" width="6" height="74" rx="3" fill="url(#gAccH)"/>
    <text x="750" y="326" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を、必要な個人へ直に届ける</text>
    <text x="750" y="348" font-size="11" fill="#3c5b50">①学生が入力したニーズ ＋ ②全学の支援情報を突合し、</text>
    <text x="750" y="364" font-size="11" fill="#3c5b50">必要とする個人へ機会をダイレクトに投下</text>
  </g>
  <g>
    <rect x="40" y="378" width="470" height="74" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="68" cy="402" r="12" fill="#ffffff"/>
    <text x="68" y="407" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
    <text x="90" y="406" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
    <text x="56" y="428" font-size="11" fill="#7a5a45">同じ手続き・問い合わせの反復。システム乱立・データ</text>
    <text x="56" y="444" font-size="11" fill="#7a5a45">分散・異動の引継ぎで実践知がゼロリセットされる</text>
    <circle cx="619" cy="415" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
    <text x="619" y="420" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
    <path d="M584 415 L576 415 M644 409 L658 415 L644 421" stroke="#d2772f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="728" y="378" width="512" height="74" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
    <rect x="728" y="378" width="6" height="74" rx="3" fill="url(#gAccH)"/>
    <text x="750" y="406" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力を削減し、業務を効率化</text>
    <text x="750" y="428" font-size="11" fill="#3c5b50">〈データ〉を基盤上で接続しAIで分析。反復・窓口業務を</text>
    <text x="750" y="444" font-size="11" fill="#3c5b50">RAGで省力化、IR・成果・回答を自動収集して統合分析</text>
  </g>
  <rect x="40" y="462" width="1200" height="56" rx="11" fill="#ffffff" stroke="#1f8f6e" stroke-opacity="0.25" stroke-width="1" filter="url(#shSoft)"/>
  <text x="56" y="481" font-size="11.5" font-weight="700" fill="#16624b">受益者：ニーズ → 導入後</text>
  <line x1="232" y1="468" x2="232" y2="512" stroke="#1f8f6e" stroke-opacity="0.2"/>
  <text x="252" y="481" font-size="11.5" font-weight="700" fill="#9a4a1e">学生</text>
  <text x="252" y="500" font-size="10.5" fill="#3c5b50">機会が届かない → 個別最適な支援を直受</text>
  <line x1="540" y1="468" x2="540" y2="512" stroke="#1f8f6e" stroke-opacity="0.2"/>
  <text x="560" y="481" font-size="11.5" font-weight="700" fill="#9a4a1e">教員</text>
  <text x="560" y="500" font-size="10.5" fill="#3c5b50">指導で多忙 → 研究時間を回復</text>
  <line x1="800" y1="468" x2="800" y2="512" stroke="#1f8f6e" stroke-opacity="0.2"/>
  <text x="820" y="481" font-size="11.5" font-weight="700" fill="#9a4a1e">職員</text>
  <text x="820" y="500" font-size="10.5" fill="#3c5b50">反復業務 → RAGで省力化</text>
  <line x1="1010" y1="468" x2="1010" y2="512" stroke="#1f8f6e" stroke-opacity="0.2"/>
  <text x="1030" y="481" font-size="11.5" font-weight="700" fill="#9a4a1e">大学</text>
  <text x="1030" y="500" font-size="10.5" fill="#3c5b50">判断が遅い → 統合分析で迅速化</text>
  <rect x="40" y="526" width="1200" height="52" rx="11" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="58" y="557" font-size="11.5" font-weight="700" fill="#ffffff">想定KPI</text>
  <text x="58" y="571" font-size="10" fill="#cdeae0">（試算）</text>
  <line x1="146" y1="534" x2="146" y2="570" stroke="#ffffff" stroke-opacity="0.3"/>
  <text x="290" y="552" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">＋3h/週</text>
  <text x="290" y="570" font-size="10.5" fill="#cdeae0" text-anchor="middle">教員の研究時間</text>
  <line x1="430" y1="534" x2="430" y2="570" stroke="#ffffff" stroke-opacity="0.3"/>
  <text x="565" y="552" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">−50%</text>
  <text x="565" y="570" font-size="10.5" fill="#cdeae0" text-anchor="middle">定型問い合わせ</text>
  <line x1="705" y1="534" x2="705" y2="570" stroke="#ffffff" stroke-opacity="0.3"/>
  <text x="840" y="552" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">＋20pt</text>
  <text x="840" y="570" font-size="10.5" fill="#cdeae0" text-anchor="middle">院生の研究力</text>
  <line x1="980" y1="534" x2="980" y2="570" stroke="#ffffff" stroke-opacity="0.3"/>
  <text x="1110" y="552" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">＋5pt</text>
  <text x="1110" y="570" font-size="10.5" fill="#cdeae0" text-anchor="middle">修了率（中退率↓）</text>
  <ellipse cx="640" cy="648" rx="430" ry="70" fill="url(#gBurst)"/>
  <path d="M40 590 L1206 590 L1240 626 L1206 662 L40 662 Z" fill="url(#gAccH)"/>
  <text x="623" y="632" font-size="18.5" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
  <text x="623" y="690" font-size="10.5" fill="#7a8a85" text-anchor="middle">副次：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
</svg>

<!-- variant-50: Before→After対応表(骨格#5) packed。背景=グローブ経緯線+ネットワーク点線(地)。3色制限(teal+warn+neutral)。kpiBand/beneficiaryRow/goalBurst入り。KPIは「想定/試算」明示。 -->
