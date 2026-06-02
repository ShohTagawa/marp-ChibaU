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
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#43be74"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3f7fc4"/><stop offset="1" stop-color="#2a5d96"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#43be74" stop-opacity="0.5"/><stop offset="1" stop-color="#43be74" stop-opacity="0"/></radialGradient>
    <radialGradient id="nexusGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.42"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f6fafe"/>
  <rect x="0" y="88" width="1280" height="472" fill="#eef5fb" opacity="0.6"/>
  <g opacity="0.13" fill="#3f7fc4"><circle cx="150" cy="150" r="3"/><circle cx="230" cy="200" r="2.6"/><circle cx="120" cy="320" r="2.6"/><circle cx="360" cy="135" r="2.6"/><circle cx="520" cy="170" r="3"/><circle cx="660" cy="130" r="2.6"/><circle cx="780" cy="180" r="2.6"/><circle cx="920" cy="150" r="3"/><circle cx="1060" cy="200" r="2.6"/><circle cx="1180" cy="160" r="2.6"/><circle cx="980" cy="320" r="2.6"/><circle cx="1140" cy="300" r="2.6"/></g>
  <g opacity="0.10" stroke="#3f7fc4" stroke-width="1" fill="none"><path d="M150 150 L230 200"/><path d="M230 200 L360 135"/><path d="M360 135 L520 170"/><path d="M520 170 L660 130"/><path d="M660 130 L780 180"/><path d="M780 180 L920 150"/><path d="M920 150 L1060 200"/><path d="M1060 200 L1180 160"/><path d="M980 320 L1140 300"/></g>
  <circle cx="497" cy="300" r="190" fill="url(#nexusGlow)"/>
  <circle cx="1146" cy="270" r="160" fill="url(#goalGlow)"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">Nexus University ― ユーザーから見た「使い方」と実現イメージ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学生・教員・支援職員が、接続基盤＋AI伴走アプリを〈どう使い〉〈何が変わるか〉― 一人ひとりの利用から大学全体の躍動へ</text>
  <text x="42" y="110" font-size="12" font-weight="700" fill="#16624b">ユーザー（使う人）と使い方</text>
  <rect x="40" y="116" width="256" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="112" rx="3" fill="url(#gAccH)"/>
  <circle cx="66" cy="138" r="12" fill="#E4F2EC"/>
  <g transform="translate(66,138)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="88" y="143" font-size="12.5" font-weight="700" fill="#1f2937">院生・学生</text>
  <text x="56" y="168" font-size="10" fill="#666">・ニーズと Research Journey を入力</text>
  <text x="56" y="185" font-size="10" fill="#666">・AI伴走に進路・研究を相談</text>
  <text x="56" y="202" font-size="10" fill="#666">・学内外の学び・スキル・資格を記録</text>
  <rect x="40" y="240" width="256" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="240" width="6" height="112" rx="3" fill="url(#gAccH)"/>
  <circle cx="66" cy="262" r="12" fill="#E4F2EC"/>
  <g transform="translate(66,262)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="88" y="267" font-size="12.5" font-weight="700" fill="#1f2937">教員（研究室）</text>
  <text x="56" y="292" font-size="10" fill="#666">・定型業務・問合せを AI に任せる</text>
  <text x="56" y="309" font-size="10" fill="#666">・ラボ院生の支援を AI と分担</text>
  <text x="56" y="326" font-size="10" fill="#666">・多言語対応も AI が下支え</text>
  <rect x="40" y="364" width="256" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="364" width="6" height="112" rx="3" fill="url(#gAccH)"/>
  <circle cx="66" cy="386" r="12" fill="#E4F2EC"/>
  <g transform="translate(66,386)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
  <text x="88" y="391" font-size="12.5" font-weight="700" fill="#1f2937">支援職員・支援部署</text>
  <text x="56" y="416" font-size="10" fill="#666">・分散データを基盤に接続</text>
  <text x="56" y="433" font-size="10" fill="#666">・全学の支援情報を共有・更新</text>
  <text x="56" y="450" font-size="10" fill="#666">・反復・窓口業務を RAG 化</text>
  <path d="M298 172 C322 172 324 292 346 296" stroke="#1A7A5E" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mA)"/>
  <path d="M298 296 C322 296 324 300 346 300" stroke="#1A7A5E" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mA)"/>
  <path d="M298 420 C322 420 324 308 346 304" stroke="#1A7A5E" stroke-width="2.4" fill="none" opacity="0.85" marker-end="url(#mA)"/>
  <rect x="348" y="116" width="298" height="368" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="497" cy="300" rx="140" ry="140"/><ellipse cx="497" cy="300" rx="55" ry="140"/><ellipse cx="497" cy="300" rx="140" ry="55"/></g>
  <circle cx="378" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(378,148)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="400" y="145" font-size="13" font-weight="700" fill="#bfe9da">接続基盤 Nexus ＋ AI伴走アプリ</text>
  <text x="400" y="163" font-size="11" fill="#d8efe6">分散する情報・データ・サポート・機会を接続</text>
  <rect x="364" y="176" width="266" height="120" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="364" y="176" width="266" height="20" rx="10" fill="#125642"/>
  <rect x="364" y="186" width="266" height="10" fill="#125642"/>
  <circle cx="378" cy="186" r="2.4" fill="#7fb8a6"/>
  <circle cx="386" cy="186" r="2.4" fill="#7fb8a6"/>
  <circle cx="394" cy="186" r="2.4" fill="#7fb8a6"/>
  <text x="410" y="190" font-size="10" fill="#cdeae0">研究×学び アプリ</text>
  <rect x="364" y="196" width="54" height="100" fill="#eaf4ef"/>
  <rect x="372" y="208" width="38" height="8" rx="3" fill="#1A7A5E"/>
  <rect x="372" y="222" width="38" height="8" rx="3" fill="#cfe0d8"/>
  <rect x="372" y="236" width="38" height="8" rx="3" fill="#cfe0d8"/>
  <circle cx="391" cy="266" r="8" fill="#bfe0d4"/>
  <path d="M385 278 A8 8 0 0 1 397 278" fill="#bfe0d4"/>
  <text x="430" y="216" font-size="10" font-weight="700" fill="#16624b">Research Journey ログ</text>
  <circle cx="436" cy="230" r="3.5" fill="#1A7A5E"/>
  <rect x="445" y="226" width="108" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="244" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="240" width="138" height="7" rx="3" fill="#E4F2EC"/>
  <circle cx="436" cy="258" r="3.5" fill="#9bc3b5"/>
  <rect x="445" y="254" width="90" height="7" rx="3" fill="#E4F2EC"/>
  <rect x="430" y="270" width="192" height="18" rx="8" fill="#1A7A5E"/>
  <text x="439" y="283" font-size="10" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="497" y="320" font-size="11" fill="#eaf6f0" text-anchor="middle">学生の入力ニーズ × 全学の支援情報を AI が突合</text>
  <text x="497" y="339" font-size="12" font-weight="700" fill="#bfe9da" text-anchor="middle">「真に必要とする個人」へ最適な一手を返す</text>
  <rect x="364" y="352" width="266" height="56" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="497" y="374" font-size="11" fill="#eaf6f0" text-anchor="middle">使うほどデータが蓄積し、提案が賢くなる</text>
  <text x="497" y="392" font-size="11" font-weight="700" fill="#bfe9da" text-anchor="middle">全ユーザーが同じ基盤を共有する</text>
  <rect x="364" y="416" width="266" height="56" rx="10" fill="url(#gBlue)" opacity="0.85"/>
  <text x="497" y="438" font-size="10.5" fill="#eaf3fb" text-anchor="middle">許諾済データは学内・行政・企業で</text>
  <text x="497" y="455" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">共有・利活用／統合分析で経営判断を迅速化</text>
  <text x="668" y="110" font-size="12" font-weight="700" fill="#16624b">実現すること（こう変わる）</text>
  <path d="M646 296 C652 296 656 174 662 172" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M646 300 C652 300 656 296 662 296" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M646 304 C652 304 656 420 662 420" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <rect x="664" y="116" width="346" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="116" width="6" height="112" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="138" r="12" fill="#E4F2EC"/>
  <g transform="translate(690,138)" stroke="#1c6e44" stroke-width="2.2" fill="none"><path d="M-5 0 L-1 4 L6 -5"/></g>
  <text x="712" y="143" font-size="12.5" font-weight="700" fill="#16624b">院生：研究力・進路が拓ける</text>
  <text x="682" y="168" font-size="10" fill="#444">・進路/研究段階に合う個別支援が届く</text>
  <text x="682" y="185" font-size="10" fill="#444">・留学先・ラボ・企業（共同研究先）にマッチング</text>
  <text x="682" y="202" font-size="10" fill="#444">・自分の成長と次の一手が可視化される</text>
  <rect x="664" y="240" width="346" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="240" width="6" height="112" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="262" r="12" fill="#E4F2EC"/>
  <g transform="translate(690,262)" stroke="#1c6e44" stroke-width="2.2" fill="none"><path d="M-5 0 L-1 4 L6 -5"/></g>
  <text x="712" y="267" font-size="12.5" font-weight="700" fill="#16624b">教員：研究時間が増える</text>
  <text x="682" y="292" font-size="10" fill="#444">・反復・窓口業務を RAG で省力化</text>
  <text x="682" y="309" font-size="10" fill="#444">・院生支援を AI が共通で肩代わり</text>
  <text x="682" y="326" font-size="10" fill="#444">・研究そのものに時間を回せる</text>
  <rect x="664" y="364" width="346" height="112" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="364" width="6" height="112" rx="3" fill="url(#gGoal)"/>
  <circle cx="690" cy="386" r="12" fill="#E4F2EC"/>
  <g transform="translate(690,386)" stroke="#1c6e44" stroke-width="2.2" fill="none"><path d="M-5 0 L-1 4 L6 -5"/></g>
  <text x="712" y="391" font-size="12.5" font-weight="700" fill="#16624b">職員：実践知が活き続ける</text>
  <text x="682" y="416" font-size="10" fill="#444">・必要な個人へ情報を直接届けられる</text>
  <text x="682" y="433" font-size="10" fill="#444">・IR・成果・回答を自動収集し統合分析</text>
  <text x="682" y="450" font-size="10" fill="#444">・異動・引継ぎでも知見が消えない</text>
  <path d="M1010 200 C1028 200 1032 256 1050 258" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 296 C1028 296 1032 290 1050 290" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1010 392 C1028 392 1032 322 1050 320" stroke="#1c6e44" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <rect x="1052" y="116" width="188" height="360" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2"><path d="M1146 150 L1150 138 L1154 150 L1166 154 L1154 158 L1150 170 L1146 158 L1134 154 Z"/></g>
  <circle cx="1078" cy="150" r="14" fill="#ffffff"/>
  <g transform="translate(1078,150)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1102" y="156" font-size="15" font-weight="700" fill="#ffffff">実現する大学</text>
  <text x="1068" y="190" font-size="11.5" fill="#dff1e7">研究×学びがつながり</text>
  <text x="1068" y="207" font-size="11.5" font-weight="700" fill="#ffffff">躍動する Nexus University</text>
  <circle cx="1072" cy="236" r="3" fill="#bff0d3"/>
  <text x="1084" y="240" font-size="11" fill="#ffffff">一人ひとりが自分ごとで使う</text>
  <circle cx="1072" cy="264" r="3" fill="#bff0d3"/>
  <text x="1084" y="268" font-size="11" fill="#ffffff">使うほど賢くなる基盤</text>
  <circle cx="1072" cy="292" r="3" fill="#bff0d3"/>
  <text x="1084" y="296" font-size="11" fill="#ffffff">全学の成果が連鎖的に伸びる</text>
  <circle cx="1072" cy="320" r="3" fill="#bff0d3"/>
  <text x="1084" y="324" font-size="11" fill="#ffffff">学外連携・アプリ外販へ</text>
  <rect x="1068" y="346" width="156" height="116" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1146" y="372" font-size="10.5" fill="#eafaf1" text-anchor="middle">使う輪が広がるほど</text>
  <text x="1146" y="389" font-size="10.5" fill="#eafaf1" text-anchor="middle">基盤の価値が増す</text>
  <text x="1146" y="414" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="1146" y="440" font-size="10" fill="#dff1e7" text-anchor="middle">Lv1 個人 → Lv2 全学</text>
  <text x="1146" y="455" font-size="10" fill="#dff1e7" text-anchor="middle">→ Lv3 学外連携</text>
  <text x="42" y="508" font-size="11" font-weight="700" fill="#9a9a9a">使い方の循環 ― 使うほどデータが蓄積し、価値が個人へ還る</text>
  <path d="M880 514 C880 488 168 488 168 514" stroke="#1c6e44" stroke-width="1.6" fill="none" stroke-dasharray="3 5" opacity="0.6" marker-end="url(#mG)"/>
  <rect x="40" y="514" width="224" height="46" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="537" r="11" fill="#E4F2EC"/>
  <text x="62" y="541" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">1</text>
  <text x="80" y="532" font-size="11" font-weight="700" fill="#1f2937">使う</text>
  <text x="80" y="549" font-size="9.5" fill="#666">ニーズ・Journey を入力</text>
  <path d="M268 537 L284 537" stroke="#1c6e44" stroke-width="2.4" marker-end="url(#mG)"/>
  <rect x="288" y="514" width="224" height="46" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="310" cy="537" r="11" fill="#E4F2EC"/>
  <text x="310" y="541" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">2</text>
  <text x="328" y="532" font-size="11" font-weight="700" fill="#1f2937">たまる</text>
  <text x="328" y="549" font-size="9.5" fill="#666">基盤にデータが接続・蓄積</text>
  <path d="M516 537 L532 537" stroke="#1c6e44" stroke-width="2.4" marker-end="url(#mG)"/>
  <rect x="536" y="514" width="224" height="46" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="558" cy="537" r="11" fill="#E4F2EC"/>
  <text x="558" y="541" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">3</text>
  <text x="576" y="532" font-size="11" font-weight="700" fill="#1f2937">かえる</text>
  <text x="576" y="549" font-size="9.5" fill="#666">AI が個別の次の一手を提案</text>
  <path d="M764 537 L780 537" stroke="#1c6e44" stroke-width="2.4" marker-end="url(#mG)"/>
  <rect x="784" y="514" width="224" height="46" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="806" cy="537" r="11" fill="#E4F2EC"/>
  <text x="806" y="541" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">4</text>
  <text x="824" y="532" font-size="11" font-weight="700" fill="#1f2937">とどく</text>
  <text x="824" y="549" font-size="9.5" fill="#666">必要な人へ機会が届く</text>
  <path d="M40 614 L1206 614 L1240 648 L1206 682 L40 682 Z" fill="url(#gAccH)"/>
  <text x="623" y="653" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">ユーザー一人ひとりの〈使い方〉が基盤上でつながる ― 研究×学びが躍動する Nexus University へ</text>
  <text x="623" y="673" font-size="11" fill="#cdeae0" text-anchor="middle">学生＝個別支援が届く／教員＝研究時間が増える／職員＝実践知が活きる ― 全員が同じ基盤を共有</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)：Nexus基盤の「ユーザー視点・利用イメージ」。骨格=バックボーン＋中央ヒーロー結節点を踏襲。左=3ペルソナ(院生/教員/職員)の使い方→中央=接続基盤Nexus＋AI伴走アプリ(突合・提案)→右=各ペルソナの実現価値(緑、1:1対応)→右端=実現する大学GOALパネル。下段=使い方の循環(使う→たまる→かえる→とどく＋戻り破線)。viewBox 1280x720・空行なし。 -->
