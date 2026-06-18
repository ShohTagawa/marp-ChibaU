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
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.22"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <circle cx="540" cy="350" r="250" fill="url(#glow)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="122" font-size="12.5" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <text x="990" y="122" font-size="12.5" font-weight="700" fill="#16624b">AI×接続基盤で変わること（A–D）</text>
  <rect x="40" y="132" width="250" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="132" width="6" height="104" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="158" r="12" fill="#FBEDE2"/>
  <text x="68" y="163" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="90" y="158" font-size="13.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="58" y="184" font-size="11" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="58" y="202" font-size="11" fill="#666">研究費申請・評価資料・学振添削・全員留学</text>
  <rect x="40" y="244" width="250" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="244" width="6" height="104" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="270" r="12" fill="#FBEDE2"/>
  <text x="68" y="275" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="90" y="270" font-size="13.5" font-weight="700" fill="#1f2937">能力育成が多様化・高度化</text>
  <text x="58" y="296" font-size="11" fill="#666">成功モデルが多様化、求める水準も上昇</text>
  <text x="58" y="314" font-size="11" fill="#666">個々に異なる育成と資源の最適投下が必須</text>
  <rect x="40" y="356" width="250" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="356" width="6" height="104" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="382" r="12" fill="#FBEDE2"/>
  <text x="68" y="387" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="90" y="382" font-size="13.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="58" y="408" font-size="11" fill="#666">支援が乱立・重複・分散している</text>
  <text x="58" y="426" font-size="11" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="468" width="250" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="468" width="6" height="104" rx="3" fill="url(#gWarn)"/>
  <circle cx="68" cy="494" r="12" fill="#FBEDE2"/>
  <text x="68" y="499" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="90" y="494" font-size="13.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="58" y="520" font-size="11" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="58" y="538" font-size="11" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M294 184 C330 184 330 260 360 260" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M294 296 C330 296 330 300 360 305" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M294 408 C330 408 330 400 360 398" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <path d="M294 520 C330 520 330 444 360 444" stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mW)"/>
  <rect x="372" y="150" width="336" height="404" rx="20" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="412" cy="196" r="17" fill="#ffffff"/>
  <g transform="translate(412,196)" stroke="#1A7A5E" stroke-width="2.2" fill="none"><rect x="-9" y="-5" width="9" height="9" rx="4.5"/><rect x="0" y="-5" width="9" height="9" rx="4.5"/></g>
  <text x="440" y="192" font-size="13" font-weight="700" fill="#bfe9da">接続基盤（Nexus）</text>
  <text x="440" y="212" font-size="20" font-weight="700" fill="#ffffff">分散を「接続」する</text>
  <text x="392" y="252" font-size="12.5" fill="#eaf6f0">システムではなく〈データ〉を基盤上でつなぎ、</text>
  <text x="392" y="272" font-size="12.5" fill="#eaf6f0">AIが文脈に応じて個別に届ける中核。</text>
  <rect x="392" y="294" width="138" height="46" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="461" y="313" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">情報</text>
  <text x="461" y="331" font-size="10.5" fill="#d8efe6" text-anchor="middle">学修履歴・成果</text>
  <rect x="548" y="294" width="138" height="46" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="617" y="313" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">データ</text>
  <text x="617" y="331" font-size="10.5" fill="#d8efe6" text-anchor="middle">IR・アンケート</text>
  <rect x="392" y="352" width="138" height="46" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="461" y="371" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">サポート</text>
  <text x="461" y="389" font-size="10.5" fill="#d8efe6" text-anchor="middle">全学の支援情報</text>
  <rect x="548" y="352" width="138" height="46" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="617" y="371" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">機会</text>
  <text x="617" y="389" font-size="10.5" fill="#d8efe6" text-anchor="middle">留学・ラボ・企業</text>
  <text x="540" y="436" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="392" y="456" width="294" height="74" rx="12" fill="#ffffff" opacity="0.12"/>
  <text x="540" y="482" font-size="12.5" fill="#eaf6f0" text-anchor="middle">「真に必要とする個人」へ、情報・支援・</text>
  <text x="540" y="502" font-size="12.5" fill="#eaf6f0" text-anchor="middle">訓練機会をダイレクトに投下する</text>
  <text x="540" y="521" font-size="11.5" font-weight="700" fill="#bfe9da" text-anchor="middle">研究×学びが「つながる」</text>
  <path d="M708 260 C745 260 755 184 790 184" stroke="#1A7A5E" stroke-width="2.6" fill="none" marker-end="url(#mA)"/>
  <path d="M708 320 C745 320 755 296 790 296" stroke="#1A7A5E" stroke-width="2.6" fill="none" marker-end="url(#mA)"/>
  <path d="M708 400 C745 400 755 408 790 408" stroke="#1A7A5E" stroke-width="2.6" fill="none" marker-end="url(#mA)"/>
  <path d="M708 460 C745 460 755 520 790 520" stroke="#1A7A5E" stroke-width="2.6" fill="none" marker-end="url(#mA)"/>
  <rect x="800" y="132" width="440" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="800" y="132" width="6" height="104" rx="3" fill="url(#gAccH)"/>
  <circle cx="828" cy="158" r="12" fill="#E4F2EC"/>
  <text x="828" y="163" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="850" y="158" font-size="13.5" font-weight="700" fill="#16624b">教員の指導負担を軽減し、研究時間を確保</text>
  <text x="818" y="184" font-size="11.5" fill="#444">AIの多言語支援、ラボへの共通支援、</text>
  <text x="818" y="204" font-size="11.5" fill="#444">支援者への接続が容易に → 研究時間↑</text>
  <rect x="800" y="244" width="440" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="800" y="244" width="6" height="104" rx="3" fill="url(#gAccH)"/>
  <circle cx="828" cy="270" r="12" fill="#E4F2EC"/>
  <text x="828" y="275" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="850" y="270" font-size="13.5" font-weight="700" fill="#16624b">院生の研究力を向上</text>
  <text x="818" y="296" font-size="11.5" fill="#444">CVデータベース＋AI伴走で段階別に個別支援</text>
  <text x="818" y="316" font-size="11.5" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="800" y="356" width="440" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="800" y="356" width="6" height="104" rx="3" fill="url(#gAccH)"/>
  <circle cx="828" cy="382" r="12" fill="#E4F2EC"/>
  <text x="828" y="387" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="850" y="382" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="818" y="408" font-size="11.5" fill="#444">①学生が入力したニーズ ＋ ②全学の支援情報</text>
  <text x="818" y="428" font-size="11.5" fill="#444">を突合し、必要とする個人へダイレクト投下</text>
  <rect x="800" y="468" width="440" height="104" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="800" y="468" width="6" height="104" rx="3" fill="url(#gAccH)"/>
  <circle cx="828" cy="494" r="12" fill="#E4F2EC"/>
  <text x="828" y="499" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="850" y="494" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力を削減し、業務を効率化</text>
  <text x="818" y="520" font-size="11.5" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="818" y="538" font-size="11.5" fill="#444">IR・研究成果・アンケートを自動収集し統合分析</text>
  <text x="40" y="592" font-size="11" fill="#8a8a8a">さらに：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M40 606 L1206 606 L1240 642 L1206 678 L40 678 Z" fill="url(#gAccH)"/>
  <text x="623" y="648" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #3 バックボーン＋ヒーロー結節点。左=課題A-D流入 → 中央=接続基盤(Nexus)ヒーロー → 右=AI打ち手A-D流出。"接続"を画で立てる役員サマリ。 -->
