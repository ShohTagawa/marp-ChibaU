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
    <linearGradient id="gNavy" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16314f"/><stop offset="1" stop-color="#0d2138"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa3a3"/><stop offset="1" stop-color="#127a7a"/></linearGradient>
    <linearGradient id="gTealH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1aa3a3"/><stop offset="1" stop-color="#0f6e6e"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16314f"/><stop offset="1" stop-color="#0f6e6e"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1aa3a3" stop-opacity="0.16"/><stop offset="1" stop-color="#1aa3a3" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0d2138" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0d2138" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#127a7a"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f5f9fa"/>
  <g opacity="0.08" stroke="#16314f" stroke-width="1.4" fill="none"><circle cx="640" cy="300" r="232"/><ellipse cx="640" cy="300" rx="232" ry="78"/><ellipse cx="640" cy="300" rx="232" ry="155"/><ellipse cx="640" cy="300" rx="78" ry="232"/><ellipse cx="640" cy="300" rx="155" ry="232"/><line x1="408" y1="300" x2="872" y2="300"/></g>
  <g opacity="0.07" fill="#127a7a"><circle cx="150" cy="180" r="3"/><circle cx="320" cy="120" r="3"/><circle cx="540" cy="160" r="3"/><circle cx="980" cy="150" r="3"/><circle cx="1140" cy="220" r="3"/><circle cx="220" cy="430" r="3"/><circle cx="1080" cy="430" r="3"/><circle cx="760" cy="470" r="3"/></g>
  <g opacity="0.06" stroke="#127a7a" stroke-width="1.2" stroke-dasharray="2 7" fill="none"><path d="M150 180 L320 120 L540 160 L980 150 L1140 220"/><path d="M220 430 L540 160"/><path d="M1080 430 L980 150"/><path d="M760 470 L540 160"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gNavy)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#dff1f1"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#0f5757">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="124" font-size="13" font-weight="700" fill="#8aa0a8">① 課題</text>
  <rect x="40" y="132" width="318" height="350" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="132" width="318" height="38" rx="16" fill="url(#gNavy)"/>
  <rect x="40" y="150" width="318" height="20" fill="url(#gNavy)"/>
  <circle cx="66" cy="151" r="13" fill="#ffffff"/>
  <g transform="translate(66,152)" stroke="#16314f" stroke-width="2" fill="none"><path d="M0 -7 L6 5 L-6 5 Z"/></g>
  <circle cx="66" cy="154" r="1.1" fill="#16314f"/>
  <text x="88" y="156" font-size="14" font-weight="700" fill="#ffffff">このままでは立ち行かない</text>
  <rect x="56" y="184" width="286" height="68" rx="9" fill="#eef5f7"/>
  <text x="70" y="206" font-size="13.5" font-weight="700" fill="#16314f">A 教員の業務負荷が急増</text>
  <text x="70" y="226" font-size="11.5" fill="#5a6b73">院生の多様化（社会人・留学生・他分野）</text>
  <text x="70" y="243" font-size="11.5" fill="#5a6b73">申請・評価・添削・全員留学で限界</text>
  <rect x="56" y="258" width="286" height="50" rx="9" fill="#eef5f7"/>
  <text x="70" y="278" font-size="13.5" font-weight="700" fill="#16314f">B 人材育成が多様化・高度化</text>
  <text x="70" y="297" font-size="11.5" fill="#5a6b73">成功モデルが多様化・水準が上昇</text>
  <rect x="56" y="314" width="286" height="50" rx="9" fill="#eef5f7"/>
  <text x="70" y="334" font-size="13.5" font-weight="700" fill="#16314f">C 大学→個人のミッシングリンク</text>
  <text x="70" y="353" font-size="11.5" fill="#5a6b73">支援が乱立・重複・分散し届かない</text>
  <rect x="56" y="370" width="286" height="50" rx="9" fill="#eef5f7"/>
  <text x="70" y="390" font-size="13.5" font-weight="700" fill="#16314f">D 実践知が活かされない</text>
  <text x="70" y="409" font-size="11.5" fill="#5a6b73">同じ手続きの反復・異動でゼロリセット</text>
  <text x="56" y="444" font-size="11.5" fill="#8aa0a8">支援が個人に届かず、知が蓄積されない</text>
  <text x="56" y="462" font-size="11.5" fill="#8aa0a8">＝ 接続の欠如が全体のボトルネック</text>
  <path d="M364 290 L382 290 L396 305 L382 320 L364 320 L378 305 Z" fill="#127a7a"/>
  <text x="408" y="124" font-size="13" font-weight="700" fill="#8aa0a8">② 接続基盤 ― 2本柱（課題A-Dに1:1対応）</text>
  <rect x="404" y="132" width="442" height="350" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="404" y="132" width="442" height="38" rx="16" fill="url(#gTealH)"/>
  <rect x="404" y="150" width="442" height="20" fill="url(#gTealH)"/>
  <circle cx="430" cy="151" r="13" fill="#ffffff"/>
  <g transform="translate(430,151)" stroke="#127a7a" stroke-width="1.8" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="452" y="156" font-size="14" font-weight="700" fill="#ffffff">アプリ（フロント） × AI基盤（裏側）</text>
  <rect x="420" y="184" width="196" height="200" rx="10" fill="#f1f9f9" filter="url(#shSoft)"/>
  <text x="432" y="206" font-size="12.5" font-weight="700" fill="#0f6e6e">柱① アプリ（フロント）</text>
  <rect x="432" y="216" width="58" height="92" rx="9" fill="#dff1f1"/>
  <rect x="436" y="220" width="50" height="84" rx="7" fill="#ffffff" stroke="#1aa3a3" stroke-width="1.3"/>
  <rect x="436" y="220" width="50" height="15" rx="7" fill="#16314f"/>
  <rect x="436" y="227" width="50" height="8" fill="#16314f"/>
  <rect x="443" y="242" width="36" height="7" rx="3" fill="#dff1f1" stroke="#bfe0e0" stroke-width="0.6"/>
  <circle cx="448" cy="262" r="3.4" fill="#bfe0e0"/><rect x="454" y="259" width="25" height="5" rx="2" fill="#bfe0e0"/>
  <circle cx="448" cy="277" r="3.4" fill="#bfe0e0"/><rect x="454" y="274" width="25" height="5" rx="2" fill="#bfe0e0"/>
  <circle cx="448" cy="292" r="3.4" fill="#1aa3a3" opacity="0.5"/><rect x="454" y="289" width="25" height="5" rx="2" fill="#bfe0e0"/>
  <text x="502" y="240" font-size="11.5" fill="#445" >学生がニーズを入力</text>
  <text x="502" y="262" font-size="11.5" fill="#445">情報・資源が集約</text>
  <text x="502" y="284" font-size="11.5" fill="#445">学びの入口・接点</text>
  <text x="502" y="306" font-size="11.5" fill="#445">CV・履歴を可視化</text>
  <text x="432" y="346" font-size="11.5" font-weight="700" fill="#0f6e6e">必要な個人へ</text>
  <text x="432" y="364" font-size="11.5" font-weight="700" fill="#0f6e6e">ダイレクト投下</text>
  <text x="638" y="288" font-size="22" font-weight="700" fill="#127a7a" text-anchor="middle">×</text>
  <rect x="656" y="184" width="174" height="200" rx="10" fill="#f1f9f9" filter="url(#shSoft)"/>
  <text x="668" y="206" font-size="12.5" font-weight="700" fill="#0f6e6e">柱② AI基盤（裏側）</text>
  <text x="668" y="230" font-size="11.5" fill="#334">・多言語・段階別の伴走</text>
  <text x="668" y="252" font-size="11.5" fill="#334">・全学の支援情報を突合</text>
  <text x="668" y="274" font-size="11.5" fill="#334">・RAGで反復業務を省力化</text>
  <text x="668" y="296" font-size="11.5" fill="#334">・IR/成果を自動収集・分析</text>
  <text x="668" y="318" font-size="11.5" fill="#334">・許諾済データを共同利用</text>
  <text x="668" y="346" font-size="11.5" font-weight="700" fill="#0f6e6e">実践知を接続し</text>
  <text x="668" y="364" font-size="11.5" font-weight="700" fill="#0f6e6e">文脈別に最適配分</text>
  <rect x="420" y="394" width="410" height="76" rx="10" fill="#dff1f1"/>
  <text x="432" y="414" font-size="12" font-weight="700" fill="#0f5757">打ち手 ↔ 課題（1:1）</text>
  <text x="432" y="434" font-size="11.5" fill="#16314f">A 教員の指導負担を軽減し研究時間を確保</text>
  <text x="432" y="450" font-size="11.5" fill="#16314f">B 院生の研究力を向上（CV-DB＋AI伴走）</text>
  <text x="640" y="434" font-size="11.5" fill="#16314f">C 個別最適な情報を直に届ける</text>
  <text x="640" y="450" font-size="11.5" fill="#16314f">D 支援者の労力を削減・効率化</text>
  <path d="M852 290 L870 290 L884 305 L870 320 L852 320 L866 305 Z" fill="#127a7a"/>
  <circle cx="1063" cy="300" r="150" fill="url(#glow)"/>
  <text x="892" y="124" font-size="13" font-weight="700" fill="#8aa0a8">③ GOAL</text>
  <rect x="892" y="132" width="348" height="350" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="918" cy="160" r="14" fill="#ffffff"/>
  <g transform="translate(918,160)" stroke="#127a7a" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7.5"/><circle cx="0" cy="0" r="3"/></g>
  <text x="942" y="166" font-size="15" font-weight="700" fill="#ffffff">研究者と支援者が躍動</text>
  <text x="912" y="200" font-size="18" font-weight="700" fill="#ffffff">接続するほど成果が連鎖</text>
  <g opacity="0.9"><circle cx="924" cy="232" r="3.5" fill="#5fd0d0"/><circle cx="924" cy="262" r="3.5" fill="#5fd0d0"/><circle cx="924" cy="292" r="3.5" fill="#5fd0d0"/><circle cx="924" cy="322" r="3.5" fill="#5fd0d0"/><circle cx="924" cy="352" r="3.5" fill="#5fd0d0"/></g>
  <text x="940" y="237" font-size="12.5" fill="#dff1f1">教員の研究時間が戻る</text>
  <text x="940" y="267" font-size="12.5" fill="#dff1f1">院生の研究力が伸び続ける</text>
  <text x="940" y="297" font-size="12.5" fill="#dff1f1">支援が必要な個人に届く</text>
  <text x="940" y="327" font-size="12.5" fill="#dff1f1">実践知が組織に蓄積される</text>
  <text x="940" y="357" font-size="12.5" fill="#dff1f1">統合分析で経営判断が迅速化</text>
  <rect x="912" y="378" width="308" height="40" rx="9" fill="#ffffff" opacity="0.12"/>
  <text x="1066" y="403" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">中退率↓・修了率↑・外販も視野</text>
  <text x="912" y="446" font-size="11.5" fill="#bfe0e0">学内・行政・企業の共同研究へ拡張</text>
  <text x="912" y="464" font-size="11.5" fill="#bfe0e0">＝ Nexus University の到達点</text>
  <rect x="40" y="500" width="1200" height="58" rx="12" fill="#16314f"/>
  <text x="60" y="525" font-size="12.5" font-weight="700" fill="#7fd0d0">想定KPI</text>
  <text x="60" y="544" font-size="10.5" fill="#9fb4bc">※ いずれも導入効果の想定／試算値</text>
  <rect x="190" y="510" width="244" height="38" rx="8" fill="#1d3c5e"/>
  <text x="206" y="528" font-size="20" font-weight="700" fill="#5fd0d0">＋3h<tspan font-size="11" fill="#bfe0e0">/週</tspan></text>
  <text x="206" y="542" font-size="11" fill="#dff1f1">教員の研究時間（想定）</text>
  <rect x="446" y="510" width="244" height="38" rx="8" fill="#1d3c5e"/>
  <text x="462" y="528" font-size="20" font-weight="700" fill="#5fd0d0">−50<tspan font-size="11" fill="#bfe0e0">%</tspan></text>
  <text x="462" y="542" font-size="11" fill="#dff1f1">定型問い合わせ（試算）</text>
  <rect x="702" y="510" width="244" height="38" rx="8" fill="#1d3c5e"/>
  <text x="718" y="528" font-size="20" font-weight="700" fill="#5fd0d0">＋20<tspan font-size="11" fill="#bfe0e0">pt</tspan></text>
  <text x="718" y="542" font-size="11" fill="#dff1f1">院生の研究力（想定）</text>
  <rect x="958" y="510" width="262" height="38" rx="8" fill="#1d3c5e"/>
  <text x="974" y="528" font-size="20" font-weight="700" fill="#5fd0d0">＋5<tspan font-size="11" fill="#bfe0e0">pt</tspan></text>
  <text x="974" y="542" font-size="11" fill="#dff1f1">修了率（試算・中退率↓）</text>
  <text x="40" y="582" font-size="11.5" font-weight="700" fill="#8aa0a8">ロードマップ</text>
  <path d="M150 626 C420 626 470 614 690 612 S980 602 1090 600" stroke="#a8c4c4" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="186" y="608" width="240" height="40" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="206" y="626" font-size="12.5" font-weight="700" fill="#0f5757">アプリ（接続フロント）</text>
  <text x="206" y="642" font-size="11" fill="#5a6b73">情報・資源を一つに集約</text>
  <rect x="556" y="606" width="256" height="40" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="576" y="624" font-size="12.5" font-weight="700" fill="#0f5757">AI基盤（伴走・突合）</text>
  <text x="576" y="640" font-size="11" fill="#5a6b73">個別支援・実践知の蓄積</text>
  <rect x="950" y="600" width="270" height="40" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="970" y="618" font-size="12.5" font-weight="700" fill="#0f5757">全学・社会へ展開</text>
  <text x="970" y="634" font-size="11" fill="#5a6b73">共同研究・経営判断・外販</text>
  <circle cx="150" cy="626" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="150" y="634" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="690" cy="612" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="690" y="620" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="1090" cy="600" r="22" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="1090" y="608" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M40 668 L1206 668 L1240 694 L1206 720 L40 720 Z" fill="url(#gNavy)"/>
  <text x="623" y="700" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続するハブとなり、研究力が伸び続ける大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤→③GOALバースト)＋下段ロードマップ。0層=ごく薄いグローブ(経線/緯線楕円)＋ネットワーク点線(opacity0.06-0.1)で国際×接続を地に。配色=ネイビー＋tealの寒色クール、密度=airy。appMockup/kpiBand(全KPIに想定・試算明示)/goalBurst入り。課題A-D↔打ち手A-Dを1:1対応。 -->
