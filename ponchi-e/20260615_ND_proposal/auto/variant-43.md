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
    <linearGradient id="gNavyH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16314f"/><stop offset="1" stop-color="#0c2236"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22a3a8"/><stop offset="1" stop-color="#11636a"/></linearGradient>
    <linearGradient id="gTealBand" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15808a"/><stop offset="1" stop-color="#103e58"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#13556a"/><stop offset="0.55" stop-color="#16314f"/><stop offset="1" stop-color="#0c2236"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#3fd0d6" stop-opacity="0.55"/><stop offset="1" stop-color="#3fd0d6" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2236" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2236" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gNavyH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E2F1F2"/>
  <text x="40" y="85" font-size="15" font-weight="700" fill="#103e58">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="106" width="372" height="28" rx="7" fill="#FCEEEA"/>
  <text x="52" y="125" font-size="13" font-weight="700" fill="#b8542e">BEFORE ― 大学が抱える課題</text>
  <rect x="416" y="106" width="118" height="28" rx="7" fill="#0c2236"/>
  <text x="475" y="125" font-size="13" font-weight="700" fill="#7fe6ec" text-anchor="middle">AI で変換</text>
  <rect x="542" y="106" width="702" height="28" rx="7" fill="#E2F1F2"/>
  <text x="558" y="125" font-size="13" font-weight="700" fill="#103e58">AFTER ― AI×接続基盤による打ち手（課題と1対1）</text>
  <rect x="36" y="142" width="372" height="82" rx="11" fill="#FCEEEA" filter="url(#shSoft)"/>
  <circle cx="62" cy="166" r="12" fill="#ffffff"/>
  <text x="62" y="171" font-size="13" font-weight="700" fill="#b8542e" text-anchor="middle">A</text>
  <text x="84" y="170" font-size="13.5" font-weight="700" fill="#9a4527">教員の業務負荷が急増</text>
  <text x="52" y="194" font-size="11" fill="#7a5747">院生の多様化（社会人・留学生・他分野）が進み</text>
  <text x="52" y="212" font-size="11" fill="#7a5747">研究費申請・評価・学振添削・全員留学で限界</text>
  <circle cx="448" cy="183" r="18" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="448" y="188" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M416 183 L408 183 M470 177 L484 183 L470 189" stroke="#11636a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="542" y="142" width="702" height="82" rx="11" fill="#EAF7F8" filter="url(#shSoft)"/>
  <rect x="542" y="142" width="6" height="82" rx="3" fill="url(#gTealBand)"/>
  <text x="566" y="170" font-size="13.5" font-weight="700" fill="#103e58">指導負担を軽減し、研究時間を確保</text>
  <text x="566" y="194" font-size="11" fill="#34555f">AIの多言語支援・ラボ共通支援・支援者への接続を容易化し</text>
  <text x="566" y="212" font-size="11" fill="#34555f">教員は研究そのものへ時間を回せる</text>
  <rect x="36" y="232" width="372" height="82" rx="11" fill="#FCEEEA" filter="url(#shSoft)"/>
  <circle cx="62" cy="256" r="12" fill="#ffffff"/>
  <text x="62" y="261" font-size="13" font-weight="700" fill="#b8542e" text-anchor="middle">B</text>
  <text x="84" y="260" font-size="13.5" font-weight="700" fill="#9a4527">研究人材の育成が多様化・高度化</text>
  <text x="52" y="284" font-size="11" fill="#7a5747">成功モデルが多様化し求める水準も上昇</text>
  <text x="52" y="302" font-size="11" fill="#7a5747">個別の能力育成と資源の最適投下が必須に</text>
  <circle cx="448" cy="273" r="18" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="448" y="278" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M416 273 L408 273 M470 267 L484 273 L470 279" stroke="#11636a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="542" y="232" width="702" height="82" rx="11" fill="#EAF7F8" filter="url(#shSoft)"/>
  <rect x="542" y="232" width="6" height="82" rx="3" fill="url(#gTealBand)"/>
  <text x="566" y="258" font-size="13.5" font-weight="700" fill="#103e58">院生一人ひとりの研究力を向上</text>
  <text x="566" y="279" font-size="11" fill="#34555f">CVデータベース（学内外の学習・スキル・資格記録）＋AI伴走で</text>
  <text x="566" y="296" font-size="11" fill="#34555f">段階別に個別支援、留学・ラボ・企業マッチングも可能に</text>
  <rect x="36" y="322" width="372" height="82" rx="11" fill="#FCEEEA" filter="url(#shSoft)"/>
  <circle cx="62" cy="346" r="12" fill="#ffffff"/>
  <text x="62" y="351" font-size="13" font-weight="700" fill="#b8542e" text-anchor="middle">C</text>
  <text x="84" y="350" font-size="13.5" font-weight="700" fill="#9a4527">大学→個人のミッシングリンク</text>
  <text x="52" y="374" font-size="11" fill="#7a5747">学内サポートが乱立・重複・分散し</text>
  <text x="52" y="392" font-size="11" fill="#7a5747">真に必要とする個人へ届かない</text>
  <circle cx="448" cy="363" r="18" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="448" y="368" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M416 363 L408 363 M470 357 L484 363 L470 369" stroke="#11636a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="542" y="322" width="702" height="82" rx="11" fill="#EAF7F8" filter="url(#shSoft)"/>
  <rect x="542" y="322" width="6" height="82" rx="3" fill="url(#gTealBand)"/>
  <text x="566" y="348" font-size="13.5" font-weight="700" fill="#103e58">個別最適な情報・支援を直に届ける</text>
  <text x="566" y="369" font-size="11" fill="#34555f">①学生が入力したニーズ ＋ ②全学の支援情報を突合し</text>
  <text x="566" y="386" font-size="11" fill="#34555f">必要とする個人へ機会をダイレクトに投下</text>
  <rect x="36" y="412" width="372" height="82" rx="11" fill="#FCEEEA" filter="url(#shSoft)"/>
  <circle cx="62" cy="436" r="12" fill="#ffffff"/>
  <text x="62" y="441" font-size="13" font-weight="700" fill="#b8542e" text-anchor="middle">D</text>
  <text x="84" y="440" font-size="13.5" font-weight="700" fill="#9a4527">支援者の実践知が活用されない</text>
  <text x="52" y="464" font-size="11" fill="#7a5747">同じ手続き・問い合わせ・定型業務の反復</text>
  <text x="52" y="482" font-size="11" fill="#7a5747">システム乱立・データ分散・異動でゼロリセット</text>
  <circle cx="448" cy="453" r="18" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="448" y="458" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M416 453 L408 453 M470 447 L484 453 L470 459" stroke="#11636a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="542" y="412" width="702" height="82" rx="11" fill="#EAF7F8" filter="url(#shSoft)"/>
  <rect x="542" y="412" width="6" height="82" rx="3" fill="url(#gTealBand)"/>
  <text x="566" y="438" font-size="13.5" font-weight="700" fill="#103e58">支援者の労力を削減し、業務を効率化</text>
  <text x="566" y="459" font-size="11" fill="#34555f">データを基盤上で接続しAIで分析、反復・窓口業務をRAGで省力化</text>
  <text x="566" y="476" font-size="11" fill="#34555f">IR・成果・回答を自動収集し統合分析、経営判断を迅速化</text>
  <rect x="36" y="506" width="508" height="78" rx="11" fill="#F4F7F9" stroke="#cdd9df" stroke-width="1" filter="url(#shSoft)"/>
  <rect x="36" y="506" width="6" height="78" rx="3" fill="url(#gTealBand)"/>
  <text x="58" y="528" font-size="12.5" font-weight="700" fill="#103e58">段階展開：AI伴走の個別支援レベル</text>
  <rect x="58" y="540" width="146" height="32" rx="6" fill="#dbeef0"/>
  <text x="70" y="555" font-size="11" font-weight="700" fill="#11636a">Lv1 記録・可視化</text>
  <text x="70" y="568" font-size="9.5" fill="#4a6670">CV・スキルを集約</text>
  <path d="M206 556 L222 556 M218 551 L226 556 L218 561" stroke="#11636a" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="228" y="540" width="146" height="32" rx="6" fill="#a7dde0"/>
  <text x="240" y="555" font-size="11" font-weight="700" fill="#0d4a52">Lv2 診断・推薦</text>
  <text x="240" y="568" font-size="9.5" fill="#2c5159">弱み補強と機会提示</text>
  <path d="M376 556 L392 556 M388 551 L396 556 L388 561" stroke="#11636a" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="398" y="540" width="128" height="32" rx="6" fill="url(#gTeal)"/>
  <text x="410" y="555" font-size="11" font-weight="700" fill="#ffffff">Lv3 伴走・接続</text>
  <text x="410" y="568" font-size="9.5" fill="#d6f6f8">留学・ラボ・企業</text>
  <rect x="556" y="506" width="426" height="78" rx="11" fill="#EAF7F8" filter="url(#shSoft)"/>
  <text x="572" y="528" font-size="12.5" font-weight="700" fill="#103e58">想定KPI（想定／試算値）</text>
  <text x="572" y="555" font-size="22" font-weight="700" fill="#11636a">+3h</text>
  <text x="572" y="571" font-size="10" fill="#4a6670">教員の研究時間/週</text>
  <text x="676" y="555" font-size="22" font-weight="700" fill="#11636a">−50%</text>
  <text x="676" y="571" font-size="10" fill="#4a6670">定型問い合わせ</text>
  <text x="794" y="555" font-size="22" font-weight="700" fill="#11636a">+20pt</text>
  <text x="794" y="571" font-size="10" fill="#4a6670">院生の研究力</text>
  <text x="902" y="555" font-size="22" font-weight="700" fill="#11636a">+5pt</text>
  <text x="902" y="571" font-size="10" fill="#4a6670">修了率（中退↓）</text>
  <rect x="994" y="506" width="86" height="78" rx="11" fill="#0c2236" filter="url(#sh)"/>
  <rect x="1006" y="518" width="62" height="54" rx="6" fill="#ffffff"/>
  <rect x="1006" y="518" width="62" height="13" rx="6" fill="url(#gTeal)"/>
  <text x="1037" y="528" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <rect x="1012" y="537" width="50" height="6" rx="3" fill="#cfe7e9"/>
  <rect x="1012" y="547" width="38" height="6" rx="3" fill="#cfe7e9"/>
  <rect x="1012" y="557" width="50" height="9" rx="3" fill="url(#gTeal)"/>
  <text x="1037" y="564" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">接続</text>
  <text x="1037" y="578" font-size="8.5" font-weight="700" fill="#7fe6ec" text-anchor="middle">支援アプリ</text>
  <circle cx="1162" cy="545" r="56" fill="url(#gBurst)"/>
  <circle cx="1162" cy="545" r="40" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="1162" y="538" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1162" y="555" font-size="9" fill="#d6f6f8" text-anchor="middle">研究×学びが</text>
  <text x="1162" y="567" font-size="9" fill="#d6f6f8" text-anchor="middle">つながる</text>
  <path d="M36 596 L1206 596 L1240 632 L1206 668 L36 668 Z" fill="url(#gGoal)"/>
  <text x="40" y="638" font-size="10" fill="#9fb6c8">副次：許諾済データの学内・行政・企業での共同研究／統合分析で経営判断を迅速化／アプリ外販も視野</text>
  <text x="621" y="652" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">課題A–Dを1対1で解決し、研究×学びが躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-43：Before→After対応表（4行A-D 1:1）／ネイビー＋teal寒色クール／balanced密度。追加：appMockup・goalBurst・stageBand(Lv1→Lv3)。KPIは想定/試算明示。 -->
