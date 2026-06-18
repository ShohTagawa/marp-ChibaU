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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9772a"/><stop offset="1" stop-color="#b8551a"/></linearGradient>
    <linearGradient id="gWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4a32e"/><stop offset="1" stop-color="#e07b16"/></linearGradient>
    <linearGradient id="gWarmH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4a32e"/><stop offset="1" stop-color="#e07b16"/></linearGradient>
    <linearGradient id="gYellow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd24d"/><stop offset="1" stop-color="#f7b733"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e07b16"/><stop offset="0.55" stop-color="#f4982a"/><stop offset="1" stop-color="#ffc94d"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f4a32e" stop-opacity="0.28"/><stop offset="1" stop-color="#f4a32e" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#b8551a" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#b8551a" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="98" width="1280" height="492" fill="#fff8ec"/>
  <g fill="#f4a32e" opacity="0.16"><circle cx="120" cy="150" r="3"/><circle cx="180" cy="170" r="3"/><circle cx="240" cy="140" r="3"/><circle cx="300" cy="200" r="3"/><circle cx="430" cy="155" r="3"/><circle cx="520" cy="185" r="3"/><circle cx="640" cy="150" r="3"/><circle cx="720" cy="195" r="3"/><circle cx="830" cy="160" r="3"/><circle cx="930" cy="200" r="3"/><circle cx="1040" cy="150" r="3"/><circle cx="1140" cy="185" r="3"/><circle cx="160" cy="420" r="3"/><circle cx="260" cy="460" r="3"/><circle cx="380" cy="430" r="3"/><circle cx="520" cy="470" r="3"/><circle cx="660" cy="440" r="3"/><circle cx="800" cy="475" r="3"/><circle cx="950" cy="435" r="3"/><circle cx="1100" cy="465" r="3"/><circle cx="210" cy="300" r="3"/><circle cx="600" cy="300" r="3"/><circle cx="1000" cy="300" r="3"/></g>
  <g stroke="#f4a32e" stroke-width="1" opacity="0.10" fill="none"><path d="M120 150 L240 140 L430 155 L640 150 L830 160 L1040 150"/><path d="M180 170 L300 200 L520 185 L720 195 L930 200 L1140 185"/><path d="M160 420 L380 430 L660 440 L950 435 L1100 465"/><path d="M120 150 L210 300 L160 420"/><path d="M640 150 L600 300 L660 440"/><path d="M1040 150 L1000 300 L950 435"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHead)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#fdeccb"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#a64f15">学内に分散する〈情報・データ・サポート・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="195" cy="270" r="155" fill="url(#glow)"/>
  <text x="42" y="128" font-size="13" font-weight="700" fill="#c97119">① いま起きている課題</text>
  <rect x="40" y="138" width="332" height="288" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="138" width="332" height="38" rx="16" fill="url(#gWarmH)"/>
  <rect x="40" y="157" width="332" height="19" fill="url(#gWarmH)"/>
  <circle cx="66" cy="157" r="13" fill="#ffffff"/>
  <g transform="translate(66,158)" stroke="#e07b16" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="66" cy="160" r="1.1" fill="#e07b16"/>
  <text x="88" y="162" font-size="14" font-weight="700" fill="#ffffff">繋がっていない大学</text>
  <text x="58" y="206" font-size="12.5" font-weight="700" fill="#a64f15">A 教員の業務負荷が急増</text>
  <text x="58" y="224" font-size="11" fill="#6b5a48">院生の多様化・申請/評価/添削で限界</text>
  <text x="58" y="256" font-size="12.5" font-weight="700" fill="#a64f15">B 研究人材の育成が多様化・高度化</text>
  <text x="58" y="274" font-size="11" fill="#6b5a48">求める水準↑・個別育成と資源配分が必須</text>
  <text x="58" y="306" font-size="12.5" font-weight="700" fill="#a64f15">C 大学→個人のミッシングリンク</text>
  <text x="58" y="324" font-size="11" fill="#6b5a48">支援が乱立・重複・分散し届かない</text>
  <text x="58" y="356" font-size="12.5" font-weight="700" fill="#a64f15">D 支援者の実践知が活かされない</text>
  <text x="58" y="374" font-size="11" fill="#6b5a48">反復作業・データ分散・異動でゼロリセット</text>
  <text x="58" y="406" font-size="11.5" font-weight="700" fill="#c97119">→ A〜D を 1:1 で打ち手に接続</text>
  <path d="M380 268 L402 268 L418 292 L402 316 L380 316 L396 292 Z" fill="url(#gWarm)"/>
  <text x="430" y="128" font-size="13" font-weight="700" fill="#c97119">② 2本柱で接続する ― アプリ × AI基盤</text>
  <rect x="430" y="138" width="436" height="288" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="450" y="156" width="186" height="252" rx="12" fill="#fff8ec" filter="url(#shSoft)"/>
  <circle cx="474" cy="182" r="14" fill="#fdeccb"/>
  <g transform="translate(474,182)" stroke="#e07b16" stroke-width="1.8" fill="none"><rect x="-6" y="-8" width="12" height="16" rx="2"/><path d="M-3 6 H3"/></g>
  <text x="498" y="180" font-size="13" font-weight="700" fill="#a64f15">柱① アプリ</text>
  <text x="498" y="196" font-size="10.5" fill="#6b5a48">学びの入口・フロント</text>
  <rect x="468" y="214" width="58" height="86" rx="9" fill="#fdeccb" opacity="0.7"/>
  <rect x="472" y="218" width="50" height="78" rx="7" fill="#ffffff" stroke="#e07b16" stroke-width="1.3"/>
  <rect x="472" y="218" width="50" height="14" rx="7" fill="#e07b16"/>
  <rect x="472" y="225" width="50" height="7" fill="#e07b16"/>
  <rect x="479" y="240" width="36" height="7" rx="3" fill="#fdeccb" stroke="#f0d4a4" stroke-width="0.6"/>
  <circle cx="484" cy="258" r="3.4" fill="#f0d4a4"/><rect x="490" y="255" width="25" height="5" rx="2" fill="#f0d4a4"/>
  <circle cx="484" cy="272" r="3.4" fill="#f0d4a4"/><rect x="490" y="269" width="25" height="5" rx="2" fill="#f0d4a4"/>
  <circle cx="484" cy="286" r="3.4" fill="#f0d4a4"/><rect x="490" y="283" width="25" height="5" rx="2" fill="#f0d4a4"/>
  <text x="540" y="232" font-size="11" font-weight="700" fill="#a64f15">B 院生の研究力↑</text>
  <text x="540" y="248" font-size="10" fill="#6b5a48">CV-DB＋AI伴走で段階別個別支援</text>
  <text x="540" y="262" font-size="10" fill="#6b5a48">学習/スキル/資格を記録</text>
  <text x="540" y="284" font-size="11" font-weight="700" fill="#a64f15">C 必要な個人へ直送</text>
  <text x="540" y="300" font-size="10" fill="#6b5a48">学生ニーズ×全学支援を突合</text>
  <text x="648" y="300" font-size="20" font-weight="700" fill="#e07b16" text-anchor="middle">＋</text>
  <rect x="660" y="156" width="190" height="252" rx="12" fill="#fff8ec" filter="url(#shSoft)"/>
  <circle cx="684" cy="182" r="14" fill="#fdeccb"/>
  <g transform="translate(684,182)" stroke="#e07b16" stroke-width="1.8" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="708" y="180" font-size="13" font-weight="700" fill="#a64f15">柱② AI基盤</text>
  <text x="708" y="196" font-size="10.5" fill="#6b5a48">裏側で実践知を統合</text>
  <text x="676" y="226" font-size="11" font-weight="700" fill="#a64f15">A 教員の指導負担を軽減</text>
  <text x="676" y="242" font-size="10" fill="#6b5a48">AI多言語支援・ラボ共通支援</text>
  <text x="676" y="256" font-size="10" fill="#6b5a48">支援者接続で研究時間を確保</text>
  <text x="676" y="284" font-size="11" font-weight="700" fill="#a64f15">D 支援者の労力削減</text>
  <text x="676" y="300" font-size="10" fill="#6b5a48">基盤上でデータ接続・AIで分析</text>
  <text x="676" y="314" font-size="10" fill="#6b5a48">反復/窓口をRAGで省力化</text>
  <text x="676" y="328" font-size="10" fill="#6b5a48">IR・成果・回答を自動収集/統合</text>
  <rect x="450" y="368" width="400" height="32" rx="8" fill="#fdeccb"/>
  <text x="650" y="389" font-size="12.5" font-weight="700" fill="#a64f15" text-anchor="middle">A〜D の課題を 1:1 で打ち手に接続 ＝ Nexus 基盤</text>
  <path d="M874 268 L896 268 L912 292 L896 316 L874 316 L890 292 Z" fill="url(#gWarm)"/>
  <text x="922" y="128" font-size="13" font-weight="700" fill="#c97119">③ 向かう先（GOAL）</text>
  <rect x="922" y="138" width="318" height="288" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="950" cy="170" r="15" fill="#ffffff"/>
  <g transform="translate(950,170)" stroke="#e07b16" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="976" y="176" font-size="15" font-weight="700" fill="#ffffff">研究者と支援者が躍動</text>
  <text x="942" y="216" font-size="19" font-weight="700" fill="#ffffff">分散を「接続」する</text>
  <text x="942" y="244" font-size="13" fill="#fff2dc">情報・データ・人がリンクするほど、</text>
  <text x="942" y="263" font-size="13" fill="#fff2dc">学内すべての研究成果が連鎖的に伸びる</text>
  <text x="942" y="296" font-size="12.5" fill="#fff2dc">→ 教員は研究に集中、院生は伴走で育つ</text>
  <text x="942" y="316" font-size="12.5" fill="#fff2dc">→ 支援者の実践知が蓄積・再利用される</text>
  <rect x="942" y="334" width="278" height="74" rx="11" fill="#ffffff" opacity="0.16"/>
  <text x="956" y="358" font-size="11.5" font-weight="700" fill="#ffffff">副次効果</text>
  <text x="956" y="377" font-size="10.5" fill="#fff2dc">・許諾済データを学内/行政/企業で共同研究</text>
  <text x="956" y="393" font-size="10.5" fill="#fff2dc">・統合分析で経営判断を迅速化 ・アプリ外販</text>
  <text x="42" y="464" font-size="13" font-weight="700" fill="#c97119">想定KPI（想定/試算）</text>
  <rect x="40" y="474" width="760" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="160" y="510" font-size="34" font-weight="700" fill="#e07b16" text-anchor="middle">+3h</text>
  <text x="160" y="532" font-size="11.5" font-weight="700" fill="#a64f15" text-anchor="middle">教員の研究時間/週</text>
  <text x="160" y="550" font-size="10" fill="#9a8a78" text-anchor="middle">※想定/試算</text>
  <line x1="293" y1="490" x2="293" y2="550" stroke="#f0d4a4" stroke-width="1.2"/>
  <text x="386" y="510" font-size="34" font-weight="700" fill="#e07b16" text-anchor="middle">−50%</text>
  <text x="386" y="532" font-size="11.5" font-weight="700" fill="#a64f15" text-anchor="middle">定型問い合わせ</text>
  <text x="386" y="550" font-size="10" fill="#9a8a78" text-anchor="middle">※想定/試算</text>
  <line x1="520" y1="490" x2="520" y2="550" stroke="#f0d4a4" stroke-width="1.2"/>
  <text x="612" y="510" font-size="34" font-weight="700" fill="#e07b16" text-anchor="middle">+20pt</text>
  <text x="612" y="532" font-size="11.5" font-weight="700" fill="#a64f15" text-anchor="middle">院生の研究力</text>
  <text x="612" y="550" font-size="10" fill="#9a8a78" text-anchor="middle">※想定/試算</text>
  <line x1="700" y1="490" x2="700" y2="550" stroke="#f0d4a4" stroke-width="1.2"/>
  <text x="752" y="510" font-size="34" font-weight="700" fill="#e07b16" text-anchor="middle">+5pt</text>
  <text x="752" y="532" font-size="11.5" font-weight="700" fill="#a64f15" text-anchor="middle">修了率(中退↓)</text>
  <text x="752" y="550" font-size="10" fill="#9a8a78" text-anchor="middle">※想定/試算</text>
  <text x="822" y="464" font-size="13" font-weight="700" fill="#c97119">ロードマップ</text>
  <path d="M870 540 C960 540 980 522 1050 518 S1180 506 1212 504" stroke="#f0c98a" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="850" y="500" width="120" height="66" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="910" y="522" font-size="12.5" font-weight="700" fill="#a64f15" text-anchor="middle">L1 接続</text>
  <text x="910" y="540" font-size="10" fill="#6b5a48" text-anchor="middle">情報・資源を</text>
  <text x="910" y="554" font-size="10" fill="#6b5a48" text-anchor="middle">基盤に集約</text>
  <rect x="985" y="494" width="120" height="66" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="1045" y="516" font-size="12.5" font-weight="700" fill="#a64f15" text-anchor="middle">L2 伴走</text>
  <text x="1045" y="534" font-size="10" fill="#6b5a48" text-anchor="middle">AIで個別支援</text>
  <text x="1045" y="548" font-size="10" fill="#6b5a48" text-anchor="middle">負担を軽減</text>
  <rect x="1120" y="488" width="120" height="66" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="1180" y="510" font-size="12.5" font-weight="700" fill="#a64f15" text-anchor="middle">L3 拡張</text>
  <text x="1180" y="528" font-size="10" fill="#6b5a48" text-anchor="middle">経営/外部へ</text>
  <text x="1180" y="542" font-size="10" fill="#6b5a48" text-anchor="middle">展開・外販</text>
  <circle cx="870" cy="540" r="16" fill="url(#gWarm)" filter="url(#shSoft)"/>
  <text x="870" y="546" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="1005" cy="518" r="16" fill="url(#gWarm)" filter="url(#shSoft)"/>
  <text x="1005" y="524" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="1140" cy="504" r="16" fill="url(#gWarm)" filter="url(#shSoft)"/>
  <text x="1140" y="510" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M40 598 L1206 598 L1240 638 L1206 678 L40 678 Z" fill="url(#gHead)"/>
  <text x="623" y="643" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続するハブとなり、研究者と支援者が躍動し続ける大学へ</text>
</svg>

<!-- ポンチ絵(marp-ponchie)variant-33。横3幕フロー(①課題A-D→②2本柱:アプリ×AI基盤→③GOAL)＋下段ロードマップL1-3。0層に世界地図風ドット＆都市結線。橙/黄の温かい配色、GOALを1焦点にグロー。airy密度でKPIを巨大数字＋全件「想定/試算」明示。課題A-Dと打ち手を1:1接続(A負担軽減/B研究力/C直送/D省力化)。副次効果(許諾済データ共同研究/経営判断/外販)を小バッジ。 -->
