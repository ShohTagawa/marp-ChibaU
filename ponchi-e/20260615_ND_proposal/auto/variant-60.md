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
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f7faf9"/>
  <rect x="64" y="116" width="544" height="468" rx="14" fill="#e6efec" opacity="0.55"/>
  <rect x="64" y="116" width="544" height="34" rx="14" fill="#d4e3de" opacity="0.6"/>
  <circle cx="86" cy="133" r="5" fill="#cbd9d4" opacity="0.7"/><circle cx="104" cy="133" r="5" fill="#cbd9d4" opacity="0.7"/><circle cx="122" cy="133" r="5" fill="#cbd9d4" opacity="0.7"/>
  <rect x="150" y="125" width="430" height="16" rx="8" fill="#ffffff" opacity="0.55"/>
  <rect x="86" y="174" width="240" height="20" rx="6" fill="#d4e3de" opacity="0.5"/>
  <rect x="86" y="208" width="498" height="12" rx="6" fill="#dde7e3" opacity="0.45"/>
  <rect x="86" y="232" width="498" height="12" rx="6" fill="#dde7e3" opacity="0.45"/>
  <rect x="86" y="256" width="360" height="12" rx="6" fill="#dde7e3" opacity="0.45"/>
  <rect x="86" y="296" width="498" height="12" rx="6" fill="#dde7e3" opacity="0.4"/>
  <rect x="86" y="320" width="430" height="12" rx="6" fill="#dde7e3" opacity="0.4"/>
  <rect x="700" y="150" width="500" height="430" rx="16" fill="#eaf3ef" opacity="0.5"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="84" y="142" font-size="15" font-weight="700" fill="#c4632a">課題</text>
  <text x="372" y="142" font-size="15" font-weight="700" fill="#16624b">AIの打ち手（1:1で対応）</text>
  <g>
    <rect x="84" y="158" width="200" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="106" cy="180" r="11" fill="#E07B39"/><text x="106" y="185" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="124" y="185" font-size="13" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
    <text x="98" y="210" font-size="11" fill="#7a5a45">院生の多様化・申請/評価/</text>
    <text x="98" y="228" font-size="11" fill="#7a5a45">添削・全員留学で限界</text>
    <path d="M290 201 L368 201" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mW)"/>
    <rect x="380" y="158" width="216" height="86" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="402" cy="180" r="11" fill="#1A7A5E"/><text x="402" y="185" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="420" y="185" font-size="13" font-weight="700" fill="#16624b">指導負担を軽減し研究時間↑</text>
    <text x="394" y="210" font-size="11" fill="#445" >AI多言語支援・ラボ共通</text>
    <text x="394" y="228" font-size="11" fill="#445">支援・支援者を接続</text>
  </g>
  <g>
    <rect x="84" y="256" width="200" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="106" cy="278" r="11" fill="#E07B39"/><text x="106" y="283" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="124" y="283" font-size="13" font-weight="700" fill="#c4632a">人材育成が多様化・高度化</text>
    <text x="98" y="308" font-size="11" fill="#7a5a45">成功モデル多様化・水準↑</text>
    <text x="98" y="326" font-size="11" fill="#7a5a45">個別育成と資源配分が必須</text>
    <path d="M290 299 L368 299" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mW)"/>
    <rect x="380" y="256" width="216" height="86" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="402" cy="278" r="11" fill="#1A7A5E"/><text x="402" y="283" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="420" y="283" font-size="13" font-weight="700" fill="#16624b">院生の研究力を向上</text>
    <text x="394" y="308" font-size="11" fill="#445">CVデータベース＋AI伴走で</text>
    <text x="394" y="326" font-size="11" fill="#445">段階別個別支援・マッチング</text>
  </g>
  <g>
    <rect x="84" y="354" width="200" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="106" cy="376" r="11" fill="#E07B39"/><text x="106" y="381" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="124" y="381" font-size="13" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
    <text x="98" y="406" font-size="11" fill="#7a5a45">支援が乱立・重複・分散し</text>
    <text x="98" y="424" font-size="11" fill="#7a5a45">必要な個人に届かない</text>
    <path d="M290 397 L368 397" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mW)"/>
    <rect x="380" y="354" width="216" height="86" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="402" cy="376" r="11" fill="#1A7A5E"/><text x="402" y="381" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="420" y="381" font-size="13" font-weight="700" fill="#16624b">最適な情報を直に届ける</text>
    <text x="394" y="406" font-size="11" fill="#445">学生のニーズ×全学支援情報</text>
    <text x="394" y="424" font-size="11" fill="#445">を突合し必要な個人へ投下</text>
  </g>
  <g>
    <rect x="84" y="452" width="200" height="86" rx="12" fill="#FBEDE2" filter="url(#shSoft)"/>
    <circle cx="106" cy="474" r="11" fill="#E07B39"/><text x="106" y="479" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="124" y="479" font-size="13" font-weight="700" fill="#c4632a">支援者の実践知が死蔵</text>
    <text x="98" y="504" font-size="11" fill="#7a5a45">同じ手続きの反復・分散</text>
    <text x="98" y="522" font-size="11" fill="#7a5a45">異動でゼロリセット</text>
    <path d="M290 495 L368 495" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mW)"/>
    <rect x="380" y="452" width="216" height="86" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="402" cy="474" r="11" fill="#1A7A5E"/><text x="402" y="479" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="420" y="479" font-size="13" font-weight="700" fill="#16624b">支援者の労力を削減</text>
    <text x="394" y="504" font-size="11" fill="#445">基盤上でデータ接続・分析</text>
    <text x="394" y="522" font-size="11" fill="#445">RAGで反復・窓口を省力化</text>
  </g>
  <polygon points="760,548 1160,548 1180,498 740,498" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="960" y="528" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">データ接続基盤 ＝ 人・データ・支援・実践知を集約</text>
  <polygon points="800,488 1120,488 1140,438 780,438" fill="#1A7A5E" filter="url(#shSoft)"/>
  <text x="960" y="468" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能 ＝ 接続データを分析し個別最適に支援</text>
  <polygon points="852,428 1068,428 960,348" fill="url(#gTop)" filter="url(#sh)"/>
  <circle cx="960" cy="384" r="13" fill="#ffffff"/><g transform="translate(960,384)" stroke="#16624b" stroke-width="2" fill="none"><path d="M-8 -2 L0 -7 L8 -2"/><path d="M-6 -2 V6 M-2 -2 V6 M2 -2 V6 M6 -2 V6 M-8 7 H8"/></g>
  <text x="960" y="418" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <rect x="700" y="158" width="148" height="226" rx="18" fill="#ffffff" filter="url(#sh)"/>
  <rect x="710" y="178" width="128" height="186" rx="6" fill="#E4F2EC"/>
  <rect x="724" y="170" width="100" height="6" rx="3" fill="#dde7e3"/>
  <rect x="718" y="190" width="112" height="22" rx="5" fill="#1A7A5E"/>
  <text x="774" y="205" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">あなた専用の支援</text>
  <rect x="718" y="220" width="112" height="40" rx="6" fill="#ffffff"/>
  <circle cx="732" cy="232" r="6" fill="#27a07c"/>
  <text x="744" y="230" font-size="9.5" fill="#445">学振添削 締切3日前</text>
  <text x="744" y="244" font-size="9.5" fill="#445">→ AI下書き準備済</text>
  <text x="752" y="255" font-size="9" fill="#9aa">tap →</text>
  <rect x="718" y="268" width="112" height="34" rx="6" fill="#ffffff"/>
  <circle cx="732" cy="280" r="6" fill="#E07B39"/>
  <text x="744" y="279" font-size="9.5" fill="#445">海外ラボ募集が</text>
  <text x="744" y="292" font-size="9.5" fill="#445">あなたに一致</text>
  <rect x="718" y="310" width="112" height="44" rx="6" fill="#E4F2EC"/>
  <text x="774" y="327" font-size="9.5" fill="#16624b" text-anchor="middle">CV・スキル・資格を</text>
  <text x="774" y="341" font-size="9.5" font-weight="700" fill="#16624b" text-anchor="middle">学内外まとめて記録</text>
  <text x="774" y="404" font-size="11" font-weight="700" fill="#16624b" text-anchor="middle">アプリ＝個人に届く接続点</text>
  <text x="1100" y="180" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">GOAL</text>
  <g stroke="#E07B39" stroke-width="2"><path d="M1100 188 V200"/><path d="M1064 196 L1072 206"/><path d="M1136 196 L1128 206"/></g>
  <rect x="876" y="208" width="320" height="120" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="902" cy="234" r="4" fill="#1A7A5E"/><text x="916" y="239" font-size="12" fill="#333">許諾済データを学内・行政・企業で共同利活用</text>
  <circle cx="902" cy="266" r="4" fill="#1A7A5E"/><text x="916" y="271" font-size="12" fill="#333">統合分析で経営判断を迅速化</text>
  <circle cx="902" cy="298" r="4" fill="#1A7A5E"/><text x="916" y="303" font-size="12" fill="#333">アプリの外販で新たな収益機会</text>
  <rect x="640" y="600" width="600" height="56" rx="12" fill="#fff7ef" stroke="#f0d3b5" stroke-width="1.2"/>
  <text x="652" y="592" font-size="11.5" font-weight="700" fill="#c4632a">想定KPI（試算・目標値）</text>
  <text x="700" y="624" font-size="26" font-weight="700" fill="#16624b" text-anchor="middle">+3h</text>
  <text x="700" y="646" font-size="10.5" fill="#6b7280" text-anchor="middle">研究時間/週</text>
  <line x1="788" y1="612" x2="788" y2="644" stroke="#ead" stroke-width="1"/>
  <text x="876" y="624" font-size="26" font-weight="700" fill="#16624b" text-anchor="middle">−50%</text>
  <text x="876" y="646" font-size="10.5" fill="#6b7280" text-anchor="middle">定型問い合わせ</text>
  <line x1="964" y1="612" x2="964" y2="644" stroke="#ead" stroke-width="1"/>
  <text x="1052" y="624" font-size="26" font-weight="700" fill="#16624b" text-anchor="middle">+20pt</text>
  <text x="1052" y="646" font-size="10.5" fill="#6b7280" text-anchor="middle">院生の研究力</text>
  <line x1="1140" y1="612" x2="1140" y2="644" stroke="#ead" stroke-width="1"/>
  <text x="1190" y="624" font-size="26" font-weight="700" fill="#16624b" text-anchor="middle">+5pt</text>
  <text x="1190" y="646" font-size="10.5" fill="#6b7280" text-anchor="middle">修了率</text>
  <path d="M40 596 L560 596 L590 626 L560 656 L40 656 Z" fill="url(#gAccH)"/>
  <text x="300" y="632" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">接続が価値を生む大学へ</text>
</svg>

<!-- variant-60：階層ピラミッド骨格。0層に〈アプリ画面=巨大テキストボックス〉の薄色UIパネルを地として敷き、その上に本体を重ねる。左=課題A-Dと打ち手A-Dを1:1で矢印接続、中央=データ接続基盤→AI機能→Nexus Universityの3層ピラミッド、右上=appMockup(スマホ)＋goalBurst(副次成果)、下=kpiBand(想定/試算)。teal＋warn橙＋ニュートラルの3色制限・airy密度。 -->
