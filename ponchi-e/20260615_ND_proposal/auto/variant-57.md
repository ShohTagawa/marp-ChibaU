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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8862f"/><stop offset="1" stop-color="#c4632a"/></linearGradient>
    <linearGradient id="gAI" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6b24a"/><stop offset="1" stop-color="#e07b39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8862f"/><stop offset="1" stop-color="#b85420"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff3e0"/><stop offset="1" stop-color="#ffe6c2"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a4a1e" flood-opacity="0.18"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a4a1e" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffdf8"/>
  <rect x="56" y="120" width="1168" height="476" rx="18" fill="#fcf4e8" opacity="0.9"/>
  <rect x="56" y="120" width="1168" height="40" rx="18" fill="#f4e3cc" opacity="0.6"/>
  <circle cx="84" cy="140" r="6" fill="#e9c79a" opacity="0.7"/>
  <circle cx="104" cy="140" r="6" fill="#e9c79a" opacity="0.7"/>
  <circle cx="124" cy="140" r="6" fill="#e9c79a" opacity="0.7"/>
  <rect x="320" y="130" width="640" height="20" rx="10" fill="#ffffff" opacity="0.7"/>
  <text x="360" y="145" font-size="11" fill="#caa978" opacity="0.8">https://nexus.chiba-u.ac.jp ── 研究×学び 接続基盤</text>
  <rect x="84" y="182" width="300" height="14" rx="7" fill="#efddc4" opacity="0.5"/>
  <rect x="84" y="206" width="1112" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="84" y="226" width="980" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="84" y="330" width="1112" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="84" y="350" width="900" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="84" y="470" width="1112" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="84" y="490" width="1040" height="10" rx="5" fill="#f0e0c9" opacity="0.4"/>
  <rect x="0" y="98" width="1280" height="500" fill="#ffffff" opacity="0.45"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#FBEDE2"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#b85420">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="112" width="372" height="28" rx="8" fill="#FBEDE2"/>
  <text x="58" y="131" font-size="13.5" font-weight="700" fill="#c4632a">課題 ― いま大学が抱える</text>
  <rect x="436" y="112" width="180" height="28" rx="8" fill="url(#gAI)"/>
  <text x="526" y="131" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">AIで変換</text>
  <rect x="640" y="112" width="600" height="28" rx="8" fill="#FBEDE2"/>
  <text x="658" y="131" font-size="13.5" font-weight="700" fill="#c4632a">打ち手 ― 接続基盤＋AIで実現</text>
  <rect x="40" y="150" width="372" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="150" width="6" height="100" rx="3" fill="#e8a14a"/>
  <circle cx="72" cy="178" r="13" fill="#FBEDE2"/>
  <text x="72" y="183" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="96" y="183" font-size="14" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="58" y="210" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野の流入）</text>
  <text x="58" y="230" font-size="11" fill="#7a5a45">研究費申請・評価資料・学振添削・全員留学で限界</text>
  <circle cx="526" cy="200" r="21" fill="url(#gAI)" filter="url(#sh)"/>
  <text x="526" y="205" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M474 200 L462 200 M558 194 L572 200 L558 206" stroke="#e07b39" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="640" y="150" width="600" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="640" y="150" width="6" height="100" rx="3" fill="url(#gGoal)"/>
  <text x="664" y="183" font-size="14" font-weight="700" fill="#b85420">指導負担を軽減し、研究時間を確保</text>
  <text x="664" y="210" font-size="11" fill="#5a4838">AIの多言語支援・ラボへの共通支援・支援者への接続が容易に</text>
  <text x="664" y="230" font-size="11" fill="#5a4838">教員は煩雑な定型から解放され、研究そのものに時間を回せる</text>
  <rect x="40" y="262" width="372" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="262" width="6" height="100" rx="3" fill="#e8a14a"/>
  <circle cx="72" cy="290" r="13" fill="#FBEDE2"/>
  <text x="72" y="295" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="96" y="295" font-size="14" font-weight="700" fill="#9a4a1e">研究人材の育成が高度化</text>
  <text x="58" y="322" font-size="11" fill="#7a5a45">成功モデルが多様化し、院生に求める水準も上昇</text>
  <text x="58" y="342" font-size="11" fill="#7a5a45">個々に異なる能力育成と、資源の最適投下が必須に</text>
  <circle cx="526" cy="312" r="21" fill="url(#gAI)" filter="url(#sh)"/>
  <text x="526" y="317" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M474 312 L462 312 M558 306 L572 312 L558 318" stroke="#e07b39" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="640" y="262" width="600" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="640" y="262" width="6" height="100" rx="3" fill="url(#gGoal)"/>
  <text x="664" y="295" font-size="14" font-weight="700" fill="#b85420">院生一人ひとりの研究力を向上</text>
  <text x="664" y="322" font-size="11" fill="#5a4838">CVデータベース（学内外の学習・スキル・資格記録）＋AI伴走で個別支援</text>
  <text x="664" y="342" font-size="11" fill="#5a4838">研究段階に応じ、留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="374" width="372" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="374" width="6" height="100" rx="3" fill="#e8a14a"/>
  <circle cx="72" cy="402" r="13" fill="#FBEDE2"/>
  <text x="72" y="407" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="96" y="407" font-size="14" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="58" y="434" font-size="11" fill="#7a5a45">学内の各種サポートが乱立・重複・分散している</text>
  <text x="58" y="454" font-size="11" fill="#7a5a45">支援部署から「真に必要とする個人」へ届かない</text>
  <circle cx="526" cy="424" r="21" fill="url(#gAI)" filter="url(#sh)"/>
  <text x="526" y="429" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M474 424 L462 424 M558 418 L572 424 L558 430" stroke="#e07b39" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="640" y="374" width="600" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="640" y="374" width="6" height="100" rx="3" fill="url(#gGoal)"/>
  <text x="664" y="407" font-size="14" font-weight="700" fill="#b85420">個別最適な情報・支援を直に届ける</text>
  <text x="664" y="434" font-size="11" fill="#5a4838">①学生が入力したニーズ ＋ ②集約・統合した全学の支援情報を突合</text>
  <text x="664" y="454" font-size="11" fill="#5a4838">必要とする個人へ、機会をダイレクトに投下</text>
  <rect x="40" y="486" width="372" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="486" width="6" height="100" rx="3" fill="#e8a14a"/>
  <circle cx="72" cy="514" r="13" fill="#FBEDE2"/>
  <text x="72" y="519" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="96" y="519" font-size="14" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="58" y="546" font-size="11" fill="#7a5a45">同じ手続き・説明・問い合わせ・定型業務の反復</text>
  <text x="58" y="566" font-size="11" fill="#7a5a45">システム乱立・データ分散・異動でゼロリセット</text>
  <circle cx="526" cy="536" r="21" fill="url(#gAI)" filter="url(#sh)"/>
  <text x="526" y="541" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M474 536 L462 536 M558 530 L572 536 L558 542" stroke="#e07b39" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="640" y="486" width="600" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="640" y="486" width="6" height="100" rx="3" fill="url(#gGoal)"/>
  <text x="664" y="519" font-size="14" font-weight="700" fill="#b85420">支援者の労力を削減し、業務を効率化</text>
  <text x="664" y="546" font-size="11" fill="#5a4838">システムでなく〈データ〉を基盤上で接続し、AIで迅速に分析</text>
  <text x="664" y="566" font-size="11" fill="#5a4838">反復・窓口業務をRAGで省力化、IR・成果・回答を自動収集</text>
  <rect x="40" y="600" width="724" height="40" rx="10" fill="url(#gKpi)" filter="url(#shS)"/>
  <text x="58" y="617" font-size="10.5" font-weight="700" fill="#b85420">想定KPI（試算）</text>
  <text x="58" y="633" font-size="10" fill="#9a6a40">※効果の目安であり実測値ではない</text>
  <text x="220" y="626" font-size="22" font-weight="700" fill="#c4632a">+3h</text>
  <text x="276" y="619" font-size="9.5" fill="#7a5a45">教員の研究</text>
  <text x="276" y="632" font-size="9.5" fill="#7a5a45">時間/週</text>
  <text x="360" y="626" font-size="22" font-weight="700" fill="#c4632a">-50%</text>
  <text x="426" y="619" font-size="9.5" fill="#7a5a45">定型問い</text>
  <text x="426" y="632" font-size="9.5" fill="#7a5a45">合わせ</text>
  <text x="500" y="626" font-size="22" font-weight="700" fill="#c4632a">+20pt</text>
  <text x="566" y="619" font-size="9.5" fill="#7a5a45">院生の</text>
  <text x="566" y="632" font-size="9.5" fill="#7a5a45">研究力</text>
  <text x="636" y="626" font-size="22" font-weight="700" fill="#c4632a">+5pt</text>
  <text x="692" y="619" font-size="9.5" fill="#7a5a45">修了率</text>
  <text x="692" y="632" font-size="9.5" fill="#7a5a45">中退率↓</text>
  <rect x="780" y="600" width="460" height="40" rx="10" fill="#fef7ee" filter="url(#shS)"/>
  <text x="798" y="617" font-size="10.5" font-weight="700" fill="#b85420">副次効果</text>
  <text x="798" y="633" font-size="10" fill="#7a5a45">許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリ外販も視野</text>
  <rect x="40" y="652" width="1200" height="48" rx="12" fill="url(#gGoal)" filter="url(#sh)"/>
  <text x="640" y="682" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-57 Before→After 4行対応表。背景=アプリ画面を巨大テキストボックスに見立てた薄色パネル(0層)。橙/黄の温かみ・airy・KPI band/副次効果。 -->
