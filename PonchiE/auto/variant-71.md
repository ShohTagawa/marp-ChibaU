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
    <linearGradient id="gWarmH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ef8f37"/><stop offset="1" stop-color="#d96a1e"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a94a"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gYel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd35a"/><stop offset="1" stop-color="#f4b02e"/></linearGradient>
    <linearGradient id="gBlueR" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2f6fb0"/><stop offset="1" stop-color="#7fb3e0"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f59e2e"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff3cf"/><stop offset="0.6" stop-color="#ffd35a" stop-opacity="0.55"/><stop offset="1" stop-color="#ffd35a" stop-opacity="0"/></radialGradient>
    <filter id="sh71" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a4a1e" flood-opacity="0.18"/></filter>
    <filter id="shS71" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a4a1e" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <g opacity="0.5"><path d="M-40 720 L300 360 L300 480 L-40 720 Z" fill="url(#gBlueR)" opacity="0.16"/><path d="M180 720 L640 300 L640 430 L320 720 Z" fill="url(#gBlueR)" opacity="0.14"/><path d="M520 720 L1000 250 L1000 380 L660 720 Z" fill="url(#gBlueR)" opacity="0.12"/><path d="M880 720 L1340 210 L1340 340 L1020 720 Z" fill="url(#gBlueR)" opacity="0.1"/></g>
  <path d="M40 700 L150 612 L150 648 L40 736 Z" fill="#2f6fb0" opacity="0.18"/><path d="M150 612 L260 524 L260 560 L150 648 Z" fill="#2f6fb0" opacity="0.16"/><path d="M260 524 L370 436 L370 472 L260 560 Z" fill="#2f6fb0" opacity="0.14"/>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gWarmH)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#FCEFD9"/>
  <text x="40" y="81" font-size="15" font-weight="700" fill="#b85e16">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="34" y="100" width="320" height="28" rx="7" fill="#FBE1CC"/>
  <text x="48" y="119" font-size="13" font-weight="700" fill="#c4632a">課題 ― 大学が抱える4つの壁</text>
  <rect x="362" y="100" width="172" height="28" rx="7" fill="#FFF1C9"/>
  <text x="448" y="119" font-size="13" font-weight="700" fill="#a9721a" text-anchor="middle">AIで変換</text>
  <rect x="542" y="100" width="404" height="28" rx="7" fill="#FBE1CC"/>
  <text x="556" y="119" font-size="13" font-weight="700" fill="#c4632a">打ち手 ― AI×接続基盤で実現すること</text>
  <rect x="954" y="100" width="292" height="28" rx="7" fill="#E7F0FA"/>
  <text x="1100" y="119" font-size="13" font-weight="700" fill="#2f6fb0" text-anchor="middle">価値の集約点</text>
  <rect x="34" y="136" width="320" height="92" rx="11" fill="#FBE9DA" filter="url(#shS71)"/>
  <circle cx="60" cy="162" r="12" fill="#d96a1e"/><text x="60" y="167" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <circle cx="334" cy="158" r="11" fill="#ffffff" stroke="#d96a1e" stroke-width="1.3"/><circle cx="330" cy="156" r="3.2" fill="#d96a1e"/><path d="M325 168 q5 -7 10 0" stroke="#d96a1e" stroke-width="1.6" fill="none"/>
  <text x="80" y="167" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="50" y="190" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="50" y="208" font-size="11" fill="#7a5a45">研究費申請・評価資料・学振添削・全員留学</text>
  <text x="50" y="222" font-size="10.5" fill="#a98a72">で指導が限界に</text>
  <rect x="542" y="136" width="404" height="92" rx="11" fill="#FFF6EA" filter="url(#shS71)"/>
  <rect x="542" y="136" width="6" height="92" rx="3" fill="url(#gWarm)"/>
  <text x="566" y="165" font-size="13.5" font-weight="700" fill="#b85e16">指導負担を軽減し、研究時間を確保</text>
  <text x="566" y="188" font-size="11" fill="#6b4f3c">AIの多言語支援・ラボへの共通支援・支援者への接続</text>
  <text x="566" y="206" font-size="11" fill="#6b4f3c">が容易になり、教員は研究そのものに時間を回せる</text>
  <text x="566" y="222" font-size="10.5" fill="#a98a72">＝コア業務へ集中</text>
  <path d="M364 182 L356 182 M524 176 L536 182 L524 188" stroke="#f4b02e" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="448" cy="182" r="19" fill="url(#gYel)" filter="url(#shS71)"/><text x="448" y="187" font-size="12" font-weight="700" fill="#7a4e08" text-anchor="middle">AI</text>
  <rect x="34" y="234" width="320" height="92" rx="11" fill="#FBE9DA" filter="url(#shS71)"/>
  <circle cx="60" cy="260" r="12" fill="#d96a1e"/><text x="60" y="265" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <circle cx="332" cy="256" r="11" fill="#ffffff" stroke="#d96a1e" stroke-width="1.3"/><path d="M332 251 l2.5 5 l5.5 0.5 l-4 4 l1 5.5 l-5 -3 l-5 3 l1 -5.5 l-4 -4 l5.5 -0.5 Z" fill="#d96a1e" transform="translate(0,1) scale(0.62) translate(202,98)"/>
  <text x="80" y="265" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材育成が多様化・高度化</text>
  <text x="50" y="288" font-size="11" fill="#7a5a45">成功モデルが多様化し、求める水準も上昇</text>
  <text x="50" y="306" font-size="11" fill="#7a5a45">個々に異なる能力育成と資源の最適投下</text>
  <text x="50" y="320" font-size="10.5" fill="#a98a72">が必須に</text>
  <rect x="542" y="234" width="404" height="92" rx="11" fill="#FFF6EA" filter="url(#shS71)"/>
  <rect x="542" y="234" width="6" height="92" rx="3" fill="url(#gWarm)"/>
  <text x="566" y="263" font-size="13.5" font-weight="700" fill="#b85e16">院生一人ひとりの研究力を向上</text>
  <text x="566" y="286" font-size="11" fill="#6b4f3c">CVデータベース（学内外の学習・スキル・資格記録）＋AI伴走</text>
  <text x="566" y="304" font-size="11" fill="#6b4f3c">で段階別の個別支援。留学・ラボ・企業マッチングも実現</text>
  <text x="566" y="320" font-size="10.5" fill="#a98a72">＝研究力＋20pt（想定）</text>
  <path d="M364 280 L356 280 M524 274 L536 280 L524 286" stroke="#f4b02e" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="448" cy="280" r="19" fill="url(#gYel)" filter="url(#shS71)"/><text x="448" y="285" font-size="12" font-weight="700" fill="#7a4e08" text-anchor="middle">AI</text>
  <rect x="34" y="332" width="320" height="92" rx="11" fill="#FBE9DA" filter="url(#shS71)"/>
  <circle cx="60" cy="358" r="12" fill="#d96a1e"/><text x="60" y="363" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <circle cx="332" cy="354" r="11" fill="#ffffff" stroke="#d96a1e" stroke-width="1.3"/><path d="M327 354 l4 4 l6 -7" stroke="#d96a1e" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="80" y="363" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="50" y="386" font-size="11" fill="#7a5a45">学内のサポートが乱立・重複・分散</text>
  <text x="50" y="404" font-size="11" fill="#7a5a45">支援部署から「真に必要な個人」へ届かない</text>
  <text x="50" y="418" font-size="10.5" fill="#a98a72">＝機会のロス</text>
  <rect x="542" y="332" width="404" height="92" rx="11" fill="#FFF6EA" filter="url(#shS71)"/>
  <rect x="542" y="332" width="6" height="92" rx="3" fill="url(#gWarm)"/>
  <text x="566" y="361" font-size="13.5" font-weight="700" fill="#b85e16">個別最適な情報・機会を直に届ける</text>
  <text x="566" y="384" font-size="11" fill="#6b4f3c">①学生が入力したニーズ ＋ ②全学の支援情報を突合し</text>
  <text x="566" y="402" font-size="11" fill="#6b4f3c">必要とする個人へ機会をダイレクトに投下</text>
  <text x="566" y="418" font-size="10.5" fill="#a98a72">＝一人も取りこぼさない</text>
  <path d="M364 378 L356 378 M524 372 L536 378 L524 384" stroke="#f4b02e" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="448" cy="378" r="19" fill="url(#gYel)" filter="url(#shS71)"/><text x="448" y="383" font-size="12" font-weight="700" fill="#7a4e08" text-anchor="middle">AI</text>
  <rect x="34" y="430" width="320" height="92" rx="11" fill="#FBE9DA" filter="url(#shS71)"/>
  <circle cx="60" cy="456" r="12" fill="#d96a1e"/><text x="60" y="461" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <circle cx="332" cy="452" r="11" fill="#ffffff" stroke="#d96a1e" stroke-width="1.3"/><rect x="327" y="447" width="10" height="10" rx="2" fill="none" stroke="#d96a1e" stroke-width="1.4"/><path d="M329 452 h6 M329 449.5 h6 M329 454.5 h6" stroke="#d96a1e" stroke-width="1"/>
  <text x="80" y="461" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="50" y="484" font-size="11" fill="#7a5a45">同じ手続き・問い合わせ・定型業務の反復</text>
  <text x="50" y="502" font-size="11" fill="#7a5a45">システム乱立・データ分散・異動でゼロリセット</text>
  <text x="50" y="516" font-size="10.5" fill="#a98a72">＝知が蓄積されない</text>
  <rect x="542" y="430" width="404" height="92" rx="11" fill="#FFF6EA" filter="url(#shS71)"/>
  <rect x="542" y="430" width="6" height="92" rx="3" fill="url(#gWarm)"/>
  <text x="566" y="459" font-size="13.5" font-weight="700" fill="#b85e16">支援者の労力を削減し業務を効率化</text>
  <text x="566" y="482" font-size="11" fill="#6b4f3c">〈データ〉を基盤上で接続しAIで分析。反復・窓口業務は</text>
  <text x="566" y="500" font-size="11" fill="#6b4f3c">RAGで省力化、IR・成果・回答を自動収集・統合分析</text>
  <text x="566" y="516" font-size="10.5" fill="#a98a72">＝定型問い合わせ−50%（試算）</text>
  <path d="M364 476 L356 476 M524 470 L536 476 L524 482" stroke="#f4b02e" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="448" cy="476" r="19" fill="url(#gYel)" filter="url(#shS71)"/><text x="448" y="481" font-size="12" font-weight="700" fill="#7a4e08" text-anchor="middle">AI</text>
  <circle cx="1100" cy="300" r="150" fill="url(#gBurst)"/>
  <rect x="996" y="146" width="208" height="324" rx="18" fill="#ffffff" stroke="#e8c9a0" stroke-width="1.4" filter="url(#sh71)"/>
  <rect x="996" y="146" width="208" height="44" rx="18" fill="url(#gWarmH)"/><rect x="996" y="170" width="208" height="20" fill="url(#gWarmH)"/>
  <text x="1100" y="174" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <text x="1016" y="210" font-size="11" font-weight="700" fill="#b85e16">あなたへの本日の機会</text>
  <rect x="1014" y="218" width="172" height="34" rx="7" fill="#FFF1C9"/><circle cx="1028" cy="235" r="6" fill="#f4b02e"/><text x="1041" y="232" font-size="9.5" fill="#7a4e08">学振DC 添削枠 ２件</text><text x="1041" y="245" font-size="9" fill="#a9721a">AI下書き済 → 締切まで5日</text>
  <rect x="1014" y="258" width="172" height="34" rx="7" fill="#E7F0FA"/><circle cx="1028" cy="275" r="6" fill="#2f6fb0"/><text x="1041" y="272" font-size="9.5" fill="#1f4f7e">海外ラボ短期留学マッチ</text><text x="1041" y="285" font-size="9" fill="#3f6f9e">CV適合度 92％ ／ 渡航支援あり</text>
  <rect x="1014" y="298" width="172" height="34" rx="7" fill="#FFF1C9"/><circle cx="1028" cy="315" r="6" fill="#f4b02e"/><text x="1041" y="312" font-size="9.5" fill="#7a4e08">企業共同研究 説明会</text><text x="1041" y="325" font-size="9" fill="#a9721a">あなたの研究テーマに直結</text>
  <text x="1016" y="352" font-size="11" font-weight="700" fill="#b85e16">支援者ダッシュボード</text>
  <rect x="1014" y="360" width="82" height="40" rx="7" fill="#FBE9DA"/><text x="1055" y="378" font-size="16" font-weight="700" fill="#d96a1e" text-anchor="middle">−50%</text><text x="1055" y="392" font-size="8.5" fill="#9a4a1e" text-anchor="middle">定型対応(試算)</text>
  <rect x="1104" y="360" width="82" height="40" rx="7" fill="#E7F0FA"/><text x="1145" y="378" font-size="16" font-weight="700" fill="#2f6fb0" text-anchor="middle">統合IR</text><text x="1145" y="392" font-size="8.5" fill="#1f4f7e" text-anchor="middle">成果を自動収集</text>
  <rect x="1014" y="408" width="172" height="50" rx="7" fill="#FFF6EA" stroke="#f0d2a8" stroke-width="1"/><text x="1100" y="426" font-size="10" font-weight="700" fill="#b85e16" text-anchor="middle">許諾済データを共有・利活用</text><text x="1100" y="441" font-size="9" fill="#6b4f3c" text-anchor="middle">学内・行政・企業の共同研究</text><text x="1100" y="453" font-size="9" fill="#6b4f3c" text-anchor="middle">経営判断を迅速化／アプリ外販も視野</text>
  <g><circle cx="58" cy="560" r="14" fill="#d96a1e"/><circle cx="58" cy="555" r="4.5" fill="#fff"/><path d="M50 568 q8 -10 16 0" fill="#fff"/><text x="80" y="558" font-size="11.5" font-weight="700" fill="#9a4a1e">教員</text><text x="80" y="571" font-size="9.5" fill="#a98a72">研究時間を取り戻す</text></g>
  <g><circle cx="210" cy="560" r="14" fill="#f4b02e"/><circle cx="210" cy="555" r="4.5" fill="#fff"/><path d="M202 568 q8 -10 16 0" fill="#fff"/><text x="232" y="558" font-size="11.5" font-weight="700" fill="#9a4a1e">院生</text><text x="232" y="571" font-size="9.5" fill="#a98a72">伴走で研究力↑</text></g>
  <g><circle cx="360" cy="560" r="14" fill="#2f6fb0"/><circle cx="360" cy="555" r="4.5" fill="#fff"/><path d="M352 568 q8 -10 16 0" fill="#fff"/><text x="382" y="558" font-size="11.5" font-weight="700" fill="#1f4f7e">支援者</text><text x="382" y="571" font-size="9.5" fill="#6f8aa8">実践知を蓄積</text></g>
  <rect x="34" y="586" width="912" height="116" rx="13" fill="#FFF6EA" stroke="#f0d2a8" stroke-width="1.2"/>
  <rect x="34" y="586" width="912" height="30" rx="13" fill="url(#gWarmH)"/><rect x="34" y="600" width="912" height="16" fill="url(#gWarmH)"/>
  <text x="50" y="607" font-size="14" font-weight="700" fill="#ffffff">課題A–Dを1対1で解決し、研究×学びがつながり躍動する Nexus University へ</text>
  <text x="770" y="607" font-size="10.5" fill="#fff2e0">※KPIは想定／試算値</text>
  <rect x="48" y="626" width="210" height="64" rx="9" fill="#ffffff" filter="url(#shS71)"/><text x="153" y="656" font-size="26" font-weight="700" fill="#d96a1e" text-anchor="middle">＋3h／週</text><text x="153" y="676" font-size="10.5" fill="#9a4a1e" text-anchor="middle">教員の研究時間（想定）</text>
  <rect x="270" y="626" width="210" height="64" rx="9" fill="#ffffff" filter="url(#shS71)"/><text x="375" y="656" font-size="26" font-weight="700" fill="#d96a1e" text-anchor="middle">−50%</text><text x="375" y="676" font-size="10.5" fill="#9a4a1e" text-anchor="middle">定型問い合わせ（試算）</text>
  <rect x="492" y="626" width="210" height="64" rx="9" fill="#ffffff" filter="url(#shS71)"/><text x="597" y="656" font-size="26" font-weight="700" fill="#2f6fb0" text-anchor="middle">＋20pt</text><text x="597" y="676" font-size="10.5" fill="#1f4f7e" text-anchor="middle">院生の研究力（想定）</text>
  <rect x="714" y="626" width="218" height="64" rx="9" fill="#ffffff" filter="url(#shS71)"/><text x="823" y="656" font-size="26" font-weight="700" fill="#2f6fb0" text-anchor="middle">＋5pt</text><text x="823" y="676" font-size="10.5" fill="#1f4f7e" text-anchor="middle">修了率（中退率↓・想定）</text>
  <path d="M996 622 L1110 540 L1110 575 L1040 622 Z" fill="#f4b02e" opacity="0.22"/>
  <circle cx="1100" cy="540" r="34" fill="url(#gGoal)" filter="url(#sh71)"/><path d="M1100 524 l4 8 l9 1 l-6.5 6.5 l1.5 9 l-8 -4.5 l-8 4.5 l1.5 -9 l-6.5 -6.5 l9 -1 Z" fill="#fff" opacity="0.92"/>
  <text x="1100" y="592" font-size="12" font-weight="700" fill="#b85e16" text-anchor="middle">研究×学びの躍動</text>
  <text x="1100" y="607" font-size="10" fill="#9a4a1e" text-anchor="middle">＝大学の競争力</text>
</svg>

<!-- variant-71 レシピ: Before→After対応表(#2/#5派生)。左=課題 / 中央=AI変換 / 右=打ち手 をA-D 1:1対応。0層に左下→右上へ昇る半透明ブルーリボン+シェブロンで前進エネルギー。橙/黄の温かいムード、アクセント焦点はgoalBurst+星1点。packed密度でappMockup(Nexus App)・登場人物アイコン群(教員/院生/支援者)・goalBurst・統合KPI帯を盛り込み。KPIは全て想定/試算を明示。 -->
