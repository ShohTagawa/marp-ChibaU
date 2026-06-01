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
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#1f8f6e" stop-opacity="0.30"/><stop offset="1" stop-color="#1f8f6e" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <g opacity="0.08" stroke="#125642" fill="none" stroke-width="1">
    <circle cx="640" cy="400" r="300"/>
    <ellipse cx="640" cy="400" rx="120" ry="300"/>
    <ellipse cx="640" cy="400" rx="240" ry="300"/>
    <ellipse cx="640" cy="400" rx="300" ry="100"/>
    <ellipse cx="640" cy="400" rx="300" ry="220"/>
    <line x1="340" y1="400" x2="940" y2="400"/>
  </g>
  <g opacity="0.07" stroke="#1f8f6e" stroke-dasharray="2 6" stroke-width="1">
    <line x1="180" y1="180" x2="520" y2="300"/><line x1="520" y1="300" x2="760" y2="220"/><line x1="760" y1="220" x2="1080" y2="340"/>
    <line x1="200" y1="560" x2="500" y2="480"/><line x1="500" y1="480" x2="820" y2="560"/><line x1="820" y1="560" x2="1090" y2="470"/>
    <line x1="520" y1="300" x2="500" y2="480"/><line x1="760" y1="220" x2="820" y2="560"/>
  </g>
  <g fill="#1f8f6e" opacity="0.10"><circle cx="180" cy="180" r="3"/><circle cx="520" cy="300" r="3"/><circle cx="760" cy="220" r="3"/><circle cx="1080" cy="340" r="3"/><circle cx="200" cy="560" r="3"/><circle cx="500" cy="480" r="3"/><circle cx="820" cy="560" r="3"/><circle cx="1090" cy="470" r="3"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="85" font-size="15" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ ― 国際×接続を地で結ぶ</text>
  <rect x="36" y="106" width="372" height="26" rx="7" fill="#FBEDE2"/>
  <text x="52" y="124" font-size="13" font-weight="700" fill="#c4632a">課題 ― いま大学が抱える壁</text>
  <rect x="440" y="106" width="178" height="26" rx="7" fill="#E4F2EC"/>
  <text x="529" y="124" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">AI変換</text>
  <rect x="650" y="106" width="594" height="26" rx="7" fill="#E4F2EC"/>
  <text x="666" y="124" font-size="13" font-weight="700" fill="#16624b">打ち手 ― AI×接続基盤で実現すること</text>
  <rect x="36" y="142" width="372" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="168" r="12" fill="#ffffff"/>
  <text x="62" y="173" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="84" y="173" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="52" y="200" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="52" y="220" font-size="11" fill="#7a5a45">研究費申請・評価・学振添削・全員留学で限界</text>
  <circle cx="529" cy="192" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="529" y="197" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M422 192 L500 192 M624 186 L640 192 L624 198 M558 192 L640 192" stroke="#1A7A5E" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="650" y="142" width="594" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="650" y="142" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="674" y="171" font-size="13.5" font-weight="700" fill="#16624b">A 指導負担を軽減し、研究時間を確保</text>
  <text x="674" y="196" font-size="11" fill="#3c5b50">AI多言語支援・ラボ共通支援・支援者への接続で</text>
  <text x="674" y="216" font-size="11" fill="#3c5b50">定型対応を肩代わりし、教員は研究そのものへ集中</text>
  <rect x="36" y="252" width="372" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="278" r="12" fill="#ffffff"/>
  <text x="62" y="283" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="84" y="283" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が多様化・高度化</text>
  <text x="52" y="310" font-size="11" fill="#7a5a45">成功モデルが多様化し求める水準も上昇</text>
  <text x="52" y="330" font-size="11" fill="#7a5a45">個別の能力育成と資源の最適投下が必須に</text>
  <circle cx="529" cy="302" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="529" y="307" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M422 302 L500 302 M624 296 L640 302 L624 308 M558 302 L640 302" stroke="#1A7A5E" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="650" y="252" width="594" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="650" y="252" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="674" y="281" font-size="13.5" font-weight="700" fill="#16624b">B 院生一人ひとりの研究力を向上</text>
  <text x="674" y="306" font-size="11" fill="#3c5b50">CVデータベース（学内外の学習・スキル・資格記録）</text>
  <text x="674" y="326" font-size="11" fill="#3c5b50">＋AI伴走の段階別支援、留学・ラボ・企業マッチング</text>
  <rect x="36" y="362" width="372" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="388" r="12" fill="#ffffff"/>
  <text x="62" y="393" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="84" y="393" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="52" y="420" font-size="11" fill="#7a5a45">支援が乱立・重複・分散している</text>
  <text x="52" y="440" font-size="11" fill="#7a5a45">真に必要とする個人へ届いていない</text>
  <circle cx="529" cy="412" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="529" y="417" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M422 412 L500 412 M624 406 L640 412 L624 418 M558 412 L640 412" stroke="#1A7A5E" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="650" y="362" width="594" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="650" y="362" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="674" y="391" font-size="13.5" font-weight="700" fill="#16624b">C 個別最適な情報を直に届ける</text>
  <text x="674" y="416" font-size="11" fill="#3c5b50">①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="674" y="436" font-size="11" fill="#3c5b50">必要とする個人へ機会をダイレクトに投下</text>
  <rect x="36" y="472" width="372" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="62" cy="498" r="12" fill="#ffffff"/>
  <text x="62" y="503" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="84" y="503" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="52" y="530" font-size="11" fill="#7a5a45">同じ手続き・問い合わせの反復</text>
  <text x="52" y="550" font-size="11" fill="#7a5a45">システム乱立・データ分散・異動でゼロリセット</text>
  <circle cx="529" cy="522" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="529" y="527" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M422 522 L500 522 M624 516 L640 522 L624 528 M558 522 L640 522" stroke="#1A7A5E" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="650" y="472" width="594" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="650" y="472" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="674" y="501" font-size="13.5" font-weight="700" fill="#16624b">D 支援者の労力を削減し効率化</text>
  <text x="674" y="526" font-size="11" fill="#3c5b50">データを基盤上で接続しAIで分析、窓口業務をRAGで省力化</text>
  <text x="674" y="546" font-size="11" fill="#3c5b50">IR・成果・回答を自動収集し、統合分析で経営判断を迅速化</text>
  <rect x="36" y="584" width="600" height="64" rx="11" fill="#0f4a39"/>
  <text x="52" y="606" font-size="11.5" font-weight="700" fill="#9fe3cc">段階展開 ― 小さく出して接続で育てる</text>
  <rect x="52" y="616" width="172" height="22" rx="11" fill="#27a07c"/>
  <text x="138" y="631" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 ラボ内パイロット</text>
  <path d="M226 627 L244 627 M238 622 L246 627 L238 632" stroke="#9fe3cc" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="248" y="616" width="166" height="22" rx="11" fill="#1f8f6e"/>
  <text x="331" y="631" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 全学CVデータ接続</text>
  <path d="M416 627 L434 627 M428 622 L436 627 L428 632" stroke="#9fe3cc" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="438" y="616" width="182" height="22" rx="11" fill="#125642"/>
  <text x="529" y="631" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 行政・企業との共創</text>
  <rect x="650" y="584" width="430" height="64" rx="11" fill="#ffffff" stroke="#cfe6dd" stroke-width="1.2" filter="url(#shSoft)"/>
  <text x="668" y="604" font-size="11.5" font-weight="700" fill="#16624b">想定KPI（想定・試算値）</text>
  <text x="668" y="627" font-size="11" fill="#3c5b50">研究時間 +3h/週 ・ 定型問い合わせ −50%</text>
  <text x="668" y="643" font-size="11" fill="#3c5b50">院生の研究力 +20pt ・ 修了率 +5pt（中退率↓）</text>
  <rect x="940" y="588" width="124" height="56" rx="10" fill="#F2FBF8" stroke="#bcdfd2" stroke-width="1"/>
  <rect x="948" y="595" width="108" height="9" rx="3" fill="#1f8f6e" opacity="0.85"/>
  <rect x="948" y="608" width="70" height="6" rx="3" fill="#27a07c" opacity="0.5"/>
  <rect x="948" y="618" width="92" height="6" rx="3" fill="#27a07c" opacity="0.5"/>
  <rect x="948" y="628" width="56" height="6" rx="3" fill="#27a07c" opacity="0.5"/>
  <circle cx="1044" cy="631" r="8" fill="url(#gAcc)"/>
  <text x="1044" y="635" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <circle cx="1162" cy="616" r="58" fill="url(#gBurst)"/>
  <path d="M1162 562 l8 18 18 -10 -8 19 19 6 -19 6 8 19 -18 -10 -8 18 -8 -18 -18 10 8 -19 -19 -6 19 -6 -8 -19 18 10 z" fill="url(#gAccH)" filter="url(#sh)"/>
  <text x="1162" y="610" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="1162" y="624" font-size="9.5" fill="#cdeede" text-anchor="middle">University</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-1: Before→After 3列対応表（左=課題A-D/中央=AI変換/右=打ち手A-D 1:1）。0層に薄グローブ＋ネットワーク点線。teal+warn+ニュートラル3色。stageBand(Lv1→Lv3)・appMockup・goalBurst・想定KPI明示。 -->
