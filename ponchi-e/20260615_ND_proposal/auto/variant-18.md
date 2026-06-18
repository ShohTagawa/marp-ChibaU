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
    <linearGradient id="gNavy" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#163a5f"/><stop offset="1" stop-color="#0e2747"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1f8f8f"/><stop offset="1" stop-color="#34b3ae"/></linearGradient>
    <linearGradient id="gApex" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1d6f88"/><stop offset="1" stop-color="#2aa3b0"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#22576f"/><stop offset="1" stop-color="#2e7e8c"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c4a6b"/><stop offset="1" stop-color="#15395a"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="7" flood-color="#0e2747" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0e2747" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2aa3b0"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="64" fill="url(#gNavy)"/>
  <text x="40" y="41" font-size="27" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1104" y="15" width="140" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1118" y="21" width="112" height="22"/>
  <rect x="0" y="64" width="1280" height="34" fill="#e7f3f3"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#13495a">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="116" width="392" height="476" rx="20" fill="#eef4f8" filter="url(#shS)"/>
  <rect x="852" y="116" width="392" height="476" rx="20" fill="#e9f5f4" filter="url(#shS)"/>
  <text x="58" y="146" font-size="15" font-weight="700" fill="#5b6b78">いまの課題（A〜D）</text>
  <rect x="58" y="158" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="184" r="14" fill="#fbeae0"/><text x="84" y="189" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">A</text>
  <text x="110" y="182" font-size="13.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="76" y="206" font-size="11.5" fill="#566573">院生の多様化（社会人・留学生・</text>
  <text x="76" y="223" font-size="11.5" fill="#566573">他分野）／申請・評価・添削で</text>
  <text x="76" y="240" font-size="11.5" font-weight="700" fill="#c4632a">指導が限界に</text>
  <rect x="58" y="260" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="286" r="14" fill="#fbeae0"/><text x="84" y="291" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">B</text>
  <text x="110" y="284" font-size="13.5" font-weight="700" fill="#1f2937">人材育成が多様化・高度化</text>
  <text x="76" y="308" font-size="11.5" fill="#566573">成功モデルが多様化し求める</text>
  <text x="76" y="325" font-size="11.5" fill="#566573">水準も上昇／個別育成と</text>
  <text x="76" y="342" font-size="11.5" font-weight="700" fill="#c4632a">資源の最適投下が必須</text>
  <rect x="58" y="362" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="388" r="14" fill="#fbeae0"/><text x="84" y="393" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">C</text>
  <text x="110" y="386" font-size="13.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="76" y="410" font-size="11.5" fill="#566573">支援が乱立・重複・分散し、</text>
  <text x="76" y="427" font-size="11.5" fill="#566573">真に必要な個人に</text>
  <text x="76" y="444" font-size="11.5" font-weight="700" fill="#c4632a">届いていない</text>
  <rect x="58" y="464" width="348" height="108" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="490" r="14" fill="#fbeae0"/><text x="84" y="495" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">D</text>
  <text x="110" y="488" font-size="13.5" font-weight="700" fill="#1f2937">支援者の実践知が死蔵</text>
  <text x="76" y="512" font-size="11.5" fill="#566573">同じ手続きの反復／システム</text>
  <text x="76" y="529" font-size="11.5" fill="#566573">乱立・データ分散／異動で</text>
  <text x="76" y="546" font-size="11.5" font-weight="700" fill="#c4632a">実践知がゼロリセット</text>
  <text x="76" y="566" font-size="11.5" fill="#8a97a3">＝ 蓄積・活用されない</text>
  <text x="874" y="146" font-size="15" font-weight="700" fill="#1d7e7e">AIの打ち手（A〜Dに1:1対応）</text>
  <rect x="874" y="158" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="900" cy="184" r="14" fill="#daf0ee"/><text x="900" y="189" font-size="14" font-weight="700" fill="#1d7e7e" text-anchor="middle">A</text>
  <text x="926" y="182" font-size="13.5" font-weight="700" fill="#13495a">指導負担を軽減し研究時間を確保</text>
  <text x="892" y="206" font-size="11.5" fill="#3f5560">AI多言語支援でラボの共通</text>
  <text x="892" y="223" font-size="11.5" fill="#3f5560">支援を肩代わり／支援者を</text>
  <text x="892" y="240" font-size="11.5" font-weight="700" fill="#1d7e7e">必要な相手に接続</text>
  <rect x="874" y="260" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="900" cy="286" r="14" fill="#daf0ee"/><text x="900" y="291" font-size="14" font-weight="700" fill="#1d7e7e" text-anchor="middle">B</text>
  <text x="926" y="284" font-size="13.5" font-weight="700" fill="#13495a">院生の研究力を向上</text>
  <text x="892" y="308" font-size="11.5" fill="#3f5560">CVデータベース（学習・スキル・</text>
  <text x="892" y="325" font-size="11.5" fill="#3f5560">資格）＋AI伴走の段階別支援／</text>
  <text x="892" y="342" font-size="11.5" font-weight="700" fill="#1d7e7e">留学・ラボ・企業マッチング</text>
  <rect x="874" y="362" width="348" height="92" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="900" cy="388" r="14" fill="#daf0ee"/><text x="900" y="393" font-size="14" font-weight="700" fill="#1d7e7e" text-anchor="middle">C</text>
  <text x="926" y="386" font-size="13.5" font-weight="700" fill="#13495a">個別最適な情報を直に届ける</text>
  <text x="892" y="410" font-size="11.5" fill="#3f5560">①学生の入力ニーズ ＋ ②全学の</text>
  <text x="892" y="427" font-size="11.5" fill="#3f5560">支援情報 を突合し、</text>
  <text x="892" y="444" font-size="11.5" font-weight="700" fill="#1d7e7e">必要な個人へダイレクト投下</text>
  <rect x="874" y="464" width="348" height="108" rx="13" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="900" cy="490" r="14" fill="#daf0ee"/><text x="900" y="495" font-size="14" font-weight="700" fill="#1d7e7e" text-anchor="middle">D</text>
  <text x="926" y="488" font-size="13.5" font-weight="700" fill="#13495a">支援者の労力を削減・効率化</text>
  <text x="892" y="512" font-size="11.5" fill="#3f5560">データを基盤上で接続しAI分析／</text>
  <text x="892" y="529" font-size="11.5" fill="#3f5560">反復・窓口業務をRAGで省力化／</text>
  <text x="892" y="546" font-size="11.5" font-weight="700" fill="#1d7e7e">IR・成果・回答を自動収集・統合</text>
  <text x="892" y="566" font-size="11.5" fill="#7c8a8a">＝ 経営判断を迅速化／外販も</text>
  <polygon points="462,538 818,538 870,592 410,592" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="640" y="572" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">データ接続基盤 ― 情報・データ・支援・機会を1つに繋ぐ</text>
  <polygon points="508,448 772,448 818,510 462,510" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="640" y="484" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能 ― 突合・伴走・分析・RAG</text>
  <polygon points="558,360 722,360 768,422 512,422" fill="url(#gApex)" filter="url(#sh)"/>
  <circle cx="640" cy="384" r="13" fill="#ffffff"/><g transform="translate(640,384)" stroke="#1d7e7e" stroke-width="2" fill="none"><circle cx="0" cy="0" r="6"/><path d="M0 -9 V-6 M0 9 V6 M-9 0 H-6 M9 0 H6"/></g>
  <text x="640" y="414" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <rect x="486" y="150" width="308" height="190" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="486" y="150" width="308" height="34" rx="16" fill="url(#gTeal)"/><rect x="486" y="167" width="308" height="17" fill="url(#gTeal)"/>
  <text x="640" y="172" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">院生向けアプリ（イメージ）</text>
  <rect x="504" y="196" width="132" height="128" rx="14" fill="#0e2747"/>
  <rect x="512" y="210" width="116" height="20" rx="5" fill="#2aa3b0"/><text x="570" y="224" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI伴走チャット</text>
  <rect x="512" y="236" width="80" height="11" rx="3" fill="#3a5168"/><rect x="512" y="252" width="104" height="11" rx="3" fill="#3a5168"/>
  <rect x="540" y="268" width="80" height="11" rx="3" fill="#1f8f8f"/><rect x="512" y="284" width="96" height="11" rx="3" fill="#3a5168"/>
  <rect x="512" y="304" width="116" height="12" rx="4" fill="#34b3ae"/>
  <text x="652" y="214" font-size="11" font-weight="700" fill="#13495a">CVデータベース</text>
  <rect x="652" y="222" width="124" height="9" rx="3" fill="#cfe6e4"/><rect x="652" y="235" width="100" height="9" rx="3" fill="#cfe6e4"/>
  <text x="652" y="262" font-size="11" font-weight="700" fill="#13495a">ニーズ→支援 突合</text>
  <rect x="652" y="270" width="124" height="9" rx="3" fill="#cfe6e4"/><rect x="652" y="283" width="86" height="9" rx="3" fill="#cfe6e4"/>
  <text x="652" y="310" font-size="11" font-weight="700" fill="#1d7e7e">留学・ラボ・企業マッチング</text>
  <text x="430" y="220" font-size="12" font-weight="700" fill="#5b6b78">課題</text>
  <text x="850" y="220" font-size="12" font-weight="700" fill="#1d7e7e" text-anchor="end">打ち手</text>
  <path d="M410 200 L470 200" stroke="#2aa3b0" stroke-width="3" fill="none" marker-end="url(#mT)" opacity="0.55"/>
  <path d="M810 200 L870 200" stroke="#2aa3b0" stroke-width="3" fill="none" marker-end="url(#mT)" opacity="0.55"/>
  <rect x="36" y="602" width="1208" height="52" rx="14" fill="#0e2747"/>
  <text x="58" y="622" font-size="11.5" font-weight="700" fill="#6fb7c4">想定KPI（試算）</text>
  <text x="58" y="642" font-size="11" fill="#9fb6c4">導入効果の目安・試算値</text>
  <line x1="300" y1="612" x2="300" y2="644" stroke="#2a4a68" stroke-width="1.3"/>
  <text x="330" y="626" font-size="26" font-weight="700" fill="#34b3ae">+3h</text><text x="330" y="645" font-size="10.5" fill="#cfe0ea">教員の研究時間/週</text>
  <line x1="478" y1="612" x2="478" y2="644" stroke="#2a4a68" stroke-width="1.3"/>
  <text x="508" y="626" font-size="26" font-weight="700" fill="#34b3ae">-50%</text><text x="508" y="645" font-size="10.5" fill="#cfe0ea">定型問い合わせ</text>
  <line x1="700" y1="612" x2="700" y2="644" stroke="#2a4a68" stroke-width="1.3"/>
  <text x="730" y="626" font-size="26" font-weight="700" fill="#34b3ae">+20pt</text><text x="730" y="645" font-size="10.5" fill="#cfe0ea">院生の研究力</text>
  <line x1="912" y1="612" x2="912" y2="644" stroke="#2a4a68" stroke-width="1.3"/>
  <text x="942" y="626" font-size="26" font-weight="700" fill="#34b3ae">+5pt</text><text x="942" y="645" font-size="10.5" fill="#cfe0ea">修了率（中退率↓）</text>
  <g transform="translate(1138,628)"><circle cx="0" cy="0" r="10" fill="none" stroke="#34b3ae" stroke-width="2"/><path d="M-5 0 L-1 4 L6 -5" stroke="#34b3ae" stroke-width="2.4" fill="none"/></g>
  <text x="1120" y="632" font-size="11" font-weight="700" fill="#6fb7c4" text-anchor="end">GOAL</text>
  <g transform="translate(640,300)"><g stroke="#2aa3b0" stroke-width="2" opacity="0.5"><path d="M0 -22 V-12"/><path d="M16 -16 L9 -9"/><path d="M22 0 H12"/><path d="M16 16 L9 9"/><path d="M-16 -16 L-9 -9"/><path d="M-22 0 H-12"/><path d="M-16 16 L-9 9"/></g></g>
</svg>

<!-- 階層ピラミッド版：左ゾーン=課題A-D（淡warm地・面塗り）／右ゾーン=打ち手A-D（淡teal地）でA-D1:1対応、中央に土台=データ接続基盤→中=AI機能→頂=Nexus Universityの3層ピラミッド、上にappMockup（院生アプリ）、下にkpiBand（想定/試算を明示）、頂点上にgoalBurst。配色=ネイビー+tealの寒色クール、airy密度。 -->
