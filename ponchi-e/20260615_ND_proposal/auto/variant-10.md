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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8881f"/><stop offset="1" stop-color="#c8631a"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7b733"/><stop offset="1" stop-color="#e07b2c"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f59e1b"/><stop offset="1" stop-color="#c25410"/></linearGradient>
    <linearGradient id="gChal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9aa0a6"/><stop offset="1" stop-color="#6b7177"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f59e1b" stop-opacity="0.30"/><stop offset="1" stop-color="#f59e1b" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9c2" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe9c2" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#7a3d09" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#7a3d09" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#e07b2c"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.13">
    <rect x="92" y="150" width="700" height="430" rx="14" fill="#ffffff" stroke="#d9b889" stroke-width="2"/>
    <rect x="92" y="150" width="700" height="34" rx="14" fill="#ecd3ad"/>
    <circle cx="116" cy="167" r="6" fill="#d9b889"/><circle cx="136" cy="167" r="6" fill="#d9b889"/><circle cx="156" cy="167" r="6" fill="#d9b889"/>
    <rect x="190" y="160" width="560" height="14" rx="7" fill="#f3e3c8"/>
    <rect x="120" y="208" width="380" height="26" rx="6" fill="#f0d8b2"/>
    <rect x="120" y="252" width="640" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="276" width="600" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="300" width="640" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="336" width="300" height="24" rx="6" fill="#f0d8b2"/>
    <rect x="120" y="380" width="620" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="404" width="560" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="440" width="640" height="12" rx="6" fill="#eedcbd"/>
    <rect x="120" y="476" width="240" height="24" rx="6" fill="#f0d8b2"/>
    <rect x="120" y="516" width="600" height="12" rx="6" fill="#eedcbd"/>
    <rect x="900" y="150" width="288" height="430" rx="30" fill="#ffffff" stroke="#d9b889" stroke-width="2"/>
    <rect x="1010" y="166" width="68" height="9" rx="4.5" fill="#ecd3ad"/>
    <rect x="924" y="200" width="240" height="20" rx="6" fill="#f0d8b2"/>
    <rect x="924" y="238" width="240" height="58" rx="10" fill="#f5e6cc"/>
    <rect x="924" y="312" width="240" height="58" rx="10" fill="#f5e6cc"/>
    <rect x="924" y="386" width="240" height="58" rx="10" fill="#f5e6cc"/>
    <rect x="924" y="460" width="240" height="58" rx="10" fill="#f5e6cc"/>
  </g>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHdr)"/>
  <text x="40" y="38" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#fbe7c6"/>
  <text x="40" y="81" font-size="15.5" font-weight="700" fill="#b5601a">学内に分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="120" y="118" font-size="14" font-weight="700" fill="#8a8f95">課題（散在・分断）</text>
  <text x="640" y="118" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">接続基盤 Nexus が束ねる</text>
  <text x="1044" y="118" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">AIの打ち手（1:1で対応）</text>
  <g font-size="11.5">
    <rect x="48" y="132" width="248" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="48" y="132" width="6" height="92" rx="3" fill="url(#gChal)"/>
    <circle cx="74" cy="156" r="13" fill="#eceef0"/><text x="74" y="161" font-size="14" font-weight="700" fill="#6b7177" text-anchor="middle">A</text>
    <text x="96" y="161" font-size="13.5" font-weight="700" fill="#444">教員の業務負荷が急増</text>
    <text x="66" y="184" fill="#555">院生の多様化（社会人・留学生・他</text>
    <text x="66" y="201" fill="#555">分野）／申請・評価・学振添削・全</text>
    <text x="66" y="218" fill="#555">員留学で指導が限界に</text>
    <rect x="48" y="232" width="248" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="48" y="232" width="6" height="92" rx="3" fill="url(#gChal)"/>
    <circle cx="74" cy="256" r="13" fill="#eceef0"/><text x="74" y="261" font-size="14" font-weight="700" fill="#6b7177" text-anchor="middle">B</text>
    <text x="96" y="261" font-size="13.5" font-weight="700" fill="#444">育成が多様化・高度化</text>
    <text x="66" y="284" fill="#555">成功モデルが多様化し求める水準も</text>
    <text x="66" y="301" fill="#555">上昇／個別の能力育成と資源の最適</text>
    <text x="66" y="318" fill="#555">投下が必須に</text>
    <rect x="48" y="332" width="248" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="48" y="332" width="6" height="92" rx="3" fill="url(#gChal)"/>
    <circle cx="74" cy="356" r="13" fill="#eceef0"/><text x="74" y="361" font-size="14" font-weight="700" fill="#6b7177" text-anchor="middle">C</text>
    <text x="96" y="361" font-size="13.5" font-weight="700" fill="#444">大学→個人のミッシングリンク</text>
    <text x="66" y="384" fill="#555">支援が乱立・重複・分散し、真に必</text>
    <text x="66" y="401" fill="#555">要としている個人のところまで届い</text>
    <text x="66" y="418" fill="#555">ていない</text>
    <rect x="48" y="432" width="248" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="48" y="432" width="6" height="92" rx="3" fill="url(#gChal)"/>
    <circle cx="74" cy="456" r="13" fill="#eceef0"/><text x="74" y="461" font-size="14" font-weight="700" fill="#6b7177" text-anchor="middle">D</text>
    <text x="96" y="461" font-size="13.5" font-weight="700" fill="#444">支援者の実践知が埋もれる</text>
    <text x="66" y="484" fill="#555">同じ手続きの反復／システム乱立・</text>
    <text x="66" y="501" fill="#555">データ分散・異動でゼロリセットさ</text>
    <text x="66" y="518" fill="#555">れ蓄積・活用されない</text>
  </g>
  <g stroke="#d6b06f" stroke-width="1.6" fill="none">
    <path d="M296 178 C386 178 408 280 470 312"/>
    <path d="M296 278 C386 278 410 300 470 322"/>
    <path d="M296 378 C386 378 410 348 470 348"/>
    <path d="M296 478 C386 478 408 392 470 360"/>
  </g>
  <circle cx="560" cy="334" r="118" fill="url(#glow)"/>
  <circle cx="560" cy="334" r="84" fill="url(#gNexus)" filter="url(#sh)"/>
  <circle cx="560" cy="334" r="84" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.45"/>
  <text x="560" y="318" font-size="13" fill="#ffe6c2" text-anchor="middle">接続基盤</text>
  <text x="560" y="346" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="560" y="368" font-size="11.5" fill="#ffe6c2" text-anchor="middle">データを束ね AI が分析</text>
  <g stroke="#e07b2c" stroke-width="3" fill="none">
    <path d="M644 300 C730 300 752 178 838 178" marker-end="url(#mA)"/>
    <path d="M644 320 C730 320 752 278 838 278" marker-end="url(#mA)"/>
    <path d="M644 348 C730 348 752 378 838 378" marker-end="url(#mA)"/>
    <path d="M644 368 C730 368 752 478 838 478" marker-end="url(#mA)"/>
  </g>
  <g font-size="11.5">
    <rect x="844" y="132" width="392" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="844" y="132" width="6" height="92" rx="3" fill="url(#gWarm)"/>
    <circle cx="872" cy="156" r="13" fill="#fbe7c6"/><text x="872" y="161" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">A</text>
    <text x="896" y="161" font-size="13.5" font-weight="700" fill="#c25410">指導負担を軽減し研究時間を確保</text>
    <text x="864" y="184" fill="#444">AI多言語支援で院生の多様化に対応／ラボ共通の</text>
    <text x="864" y="201" fill="#444">定型支援を肩代わり／必要な支援者へ自動で接続し、</text>
    <text x="864" y="218" fill="#444">教員は研究そのものに集中できる</text>
    <rect x="844" y="232" width="392" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="844" y="232" width="6" height="92" rx="3" fill="url(#gWarm)"/>
    <circle cx="872" cy="256" r="13" fill="#fbe7c6"/><text x="872" y="261" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">B</text>
    <text x="896" y="261" font-size="13.5" font-weight="700" fill="#c25410">院生の研究力を向上</text>
    <text x="864" y="284" fill="#444">CVデータベース（学内外の学習・スキル・資格記録）</text>
    <text x="864" y="301" fill="#444">＋AI伴走の段階別個別支援／留学・ラボ・企業との</text>
    <text x="864" y="318" fill="#444">マッチングで一人ひとりを最適に伸ばす</text>
    <rect x="844" y="332" width="392" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="844" y="332" width="6" height="92" rx="3" fill="url(#gWarm)"/>
    <circle cx="872" cy="356" r="13" fill="#fbe7c6"/><text x="872" y="361" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">C</text>
    <text x="896" y="361" font-size="13.5" font-weight="700" fill="#c25410">個別最適な情報を直に届ける</text>
    <text x="864" y="384" fill="#444">①学生が入力するニーズ ＋ ②全学の支援情報を</text>
    <text x="864" y="401" fill="#444">突合し、必要としている個人へダイレクトに投下／</text>
    <text x="864" y="418" fill="#444">乱立・分散をなくし「届く」状態へ</text>
    <rect x="844" y="432" width="392" height="92" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="844" y="432" width="6" height="92" rx="3" fill="url(#gWarm)"/>
    <circle cx="872" cy="456" r="13" fill="#fbe7c6"/><text x="872" y="461" font-size="14" font-weight="700" fill="#c25410" text-anchor="middle">D</text>
    <text x="896" y="461" font-size="13.5" font-weight="700" fill="#c25410">支援者の労力を削減・効率化</text>
    <text x="864" y="484" fill="#444">データを基盤上で接続しAIで分析／反復・窓口業務を</text>
    <text x="864" y="501" fill="#444">RAGで省力化／IR・成果・回答を自動収集し統合分析、</text>
    <text x="864" y="518" fill="#444">実践知を蓄積・再利用する</text>
  </g>
  <rect x="440" y="438" width="240" height="74" rx="12" fill="#fff4e2" stroke="#f0c98a" stroke-width="1.2"/>
  <text x="560" y="460" font-size="12" font-weight="700" fill="#b5601a" text-anchor="middle">副次的な価値</text>
  <text x="560" y="479" font-size="10.5" fill="#7a5a30" text-anchor="middle">許諾済データを学内・行政・企業で共同利活用</text>
  <text x="560" y="495" font-size="10.5" fill="#7a5a30" text-anchor="middle">統合分析で経営判断を迅速化／アプリ外販</text>
  <circle cx="640" cy="618" r="120" fill="url(#burst)"/>
  <path d="M40 540 L1206 540 L1240 580 L1206 620 L40 620 Z" fill="url(#gNexus)"/>
  <text x="40" y="566" font-size="13" fill="#ffe6c2">GOAL</text>
  <text x="623" y="568" font-size="13.5" fill="#ffe6c2" text-anchor="middle">課題A–Dを Nexus が1:1で解く ＝ 教員の手間↓ × 研究力↑、情報がリンクするほど学内すべての成果が連鎖的に伸びる</text>
  <text x="623" y="600" font-size="18.5" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続し、研究者と支援者が躍動する大学へ</text>
  <g>
    <rect x="50" y="636" width="278" height="70" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="74" y="678" font-size="34" font-weight="700" fill="#e07b2c">+3h</text>
    <text x="160" y="666" font-size="12" font-weight="700" fill="#444">教員の研究時間</text>
    <text x="160" y="685" font-size="11.5" fill="#666">／週</text>
    <rect x="340" y="636" width="278" height="70" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="364" y="678" font-size="34" font-weight="700" fill="#e07b2c">−50%</text>
    <text x="476" y="666" font-size="12" font-weight="700" fill="#444">定型問い合わせ</text>
    <text x="476" y="685" font-size="11.5" fill="#666">窓口業務を省力化</text>
    <rect x="630" y="636" width="278" height="70" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="654" y="678" font-size="34" font-weight="700" fill="#e07b2c">+20pt</text>
    <text x="766" y="666" font-size="12" font-weight="700" fill="#444">院生の研究力</text>
    <text x="766" y="685" font-size="11.5" fill="#666">指標スコア</text>
    <rect x="920" y="636" width="278" height="70" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="944" y="678" font-size="34" font-weight="700" fill="#e07b2c">+5pt</text>
    <text x="1044" y="666" font-size="12" font-weight="700" fill="#444">修了率</text>
    <text x="1044" y="685" font-size="11.5" fill="#666">中退率↓</text>
  </g>
  <text x="1230" y="714" font-size="11" font-weight="700" fill="#b5601a" text-anchor="end">KPIはすべて想定／試算値</text>
</svg>

<!-- variant-10：ハブ&スポーク。0層=アプリ画面（ブラウザ枠＋スマホ枠＋薄UI行）を地に敷く。左=課題A-D、中央=接続基盤Nexus、右=AI打ち手A-D（1:1）。下=goalBurst帯＋kpiBand（巨大数字KPI4本、すべて想定/試算明示）。橙/黄の温色ムード、アクセントはNexus1焦点。 -->
