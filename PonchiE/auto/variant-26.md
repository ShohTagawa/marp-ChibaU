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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gRib" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.16"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0.03"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.12"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe7c9" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe7c9" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#E07B39"/></marker>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="98" width="1280" height="622" fill="#ffffff"/>
  <polygon points="-40,720 360,470 520,540 120,720" fill="url(#gRib)"/>
  <polygon points="160,720 620,420 800,500 360,720" fill="url(#gRib)"/>
  <polygon points="460,720 980,360 1180,450 700,720" fill="url(#gRib)"/>
  <polygon points="820,720 1340,300 1340,720" fill="url(#gRib)"/>
  <circle cx="1090" cy="250" r="210" fill="url(#glow)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="124" font-size="13" font-weight="700" fill="#9aa3a0">① いまの課題（A→D）</text>
  <text x="438" y="124" font-size="13" font-weight="700" fill="#9aa3a0">② 打ち手 ＝ アプリ × AIエージェント基盤（A→D 1:1）</text>
  <text x="1010" y="124" font-size="13" font-weight="700" fill="#9aa3a0">③ 向かう先</text>
  <rect x="40" y="132" width="362" height="306" rx="14" fill="#FBEDE2" filter="url(#shSoft)"/>
  <rect x="40" y="132" width="362" height="32" rx="14" fill="url(#gWarn)"/>
  <rect x="40" y="148" width="362" height="16" fill="url(#gWarn)"/>
  <circle cx="62" cy="148" r="12" fill="#ffffff"/>
  <g transform="translate(62,149)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -6 L6 5 L-6 5 Z"/></g>
  <circle cx="62" cy="151" r="1" fill="#d2772f"/>
  <text x="82" y="153" font-size="14" font-weight="700" fill="#ffffff">このままでは立ち行かない</text>
  <rect x="52" y="174" width="338" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="70" cy="190" r="9" fill="#E07B39"/><text x="70" y="194" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="86" y="194" font-size="12.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
  <text x="62" y="214" font-size="11" fill="#555">院生の多様化（社会人・留学生・他分野）</text>
  <text x="62" y="228" font-size="11" fill="#555">申請・評価・添削・全員留学で限界</text>
  <rect x="52" y="238" width="338" height="46" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="70" cy="254" r="9" fill="#E07B39"/><text x="70" y="258" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="86" y="258" font-size="12.5" font-weight="700" fill="#c4632a">育成が多様化・高度化</text>
  <text x="62" y="277" font-size="11" fill="#555">成功モデル多様化・水準上昇／個別最適と資源配分が必須</text>
  <rect x="52" y="290" width="338" height="46" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="70" cy="306" r="9" fill="#E07B39"/><text x="70" y="310" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="86" y="310" font-size="12.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
  <text x="62" y="329" font-size="11" fill="#555">支援が乱立・重複・分散／必要な個人に届かない</text>
  <rect x="52" y="342" width="338" height="50" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="70" cy="358" r="9" fill="#E07B39"/><text x="70" y="362" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="86" y="362" font-size="12.5" font-weight="700" fill="#c4632a">支援者の実践知が死蔵</text>
  <text x="62" y="381" font-size="11" fill="#555">同じ手続きの反復／システム乱立・データ分散</text>
  <text x="62" y="394" font-size="11" fill="#555">異動でゼロリセット</text>
  <path d="M404 270 L420 270 L432 285 L420 300 L404 300 L416 285 Z" fill="#1A7A5E"/>
  <rect x="438" y="132" width="534" height="306" rx="14" fill="#F2F8F5" filter="url(#shSoft)"/>
  <rect x="438" y="132" width="534" height="32" rx="14" fill="url(#gAccH)"/>
  <rect x="438" y="148" width="534" height="16" fill="url(#gAccH)"/>
  <circle cx="460" cy="148" r="12" fill="#ffffff"/>
  <g transform="translate(460,148)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2 H-9 M-6 2 H-9 M6 -2 H9 M6 2 H9 M-2 -6 V-9 M2 -6 V-9 M-2 6 V9 M2 6 V9"/></g>
  <text x="480" y="153" font-size="13.5" font-weight="700" fill="#ffffff">柱① 学びのアプリ（フロント） ＋ 柱② AIエージェント基盤（裏側）</text>
  <rect x="452" y="174" width="506" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="470" cy="190" r="9" fill="#1A7A5E"/><text x="470" y="194" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="486" y="194" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="462" y="214" font-size="11" fill="#555">AI多言語支援・ラボ共通支援・支援者どうしを接続</text>
  <text x="462" y="228" font-size="11" fill="#888">→ 教員の手間を増やさず個別伴走</text>
  <rect x="452" y="238" width="506" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="470" cy="254" r="9" fill="#1A7A5E"/><text x="470" y="258" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="486" y="258" font-size="12.5" font-weight="700" fill="#16624b">院生の研究力を向上</text>
  <text x="462" y="278" font-size="11" fill="#555">CVデータベース（学内外の学習・スキル・資格）＋ AI伴走の段階別支援</text>
  <text x="462" y="292" font-size="11" fill="#888">→ 留学・ラボ・企業マッチング</text>
  <rect x="452" y="302" width="506" height="58" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="470" cy="318" r="9" fill="#1A7A5E"/><text x="470" y="322" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="486" y="322" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="462" y="342" font-size="11" fill="#555">①学生入力ニーズ ＋ ②全学の支援情報 を突合</text>
  <text x="462" y="356" font-size="11" fill="#888">→ 必要な個人へダイレクト投下</text>
  <rect x="452" y="366" width="506" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="470" cy="384" r="9" fill="#1A7A5E"/><text x="470" y="388" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="486" y="388" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力削減・効率化</text>
  <text x="462" y="408" font-size="11" fill="#555">基盤上でデータ接続→AI分析／反復・窓口業務をRAGで省力化</text>
  <text x="462" y="422" font-size="11" fill="#888">→ IR・成果・回答を自動収集・統合分析</text>
  <path d="M974 270 L990 270 L1002 285 L990 300 L974 300 L986 285 Z" fill="#1A7A5E"/>
  <circle cx="1126" cy="285" r="150" fill="url(#burst)"/>
  <g stroke="#ec9554" stroke-width="2.5" opacity="0.55"><path d="M1008 165 L1024 181"/><path d="M1244 165 L1228 181"/><path d="M1008 405 L1024 389"/><path d="M1244 405 L1228 389"/></g>
  <rect x="1008" y="132" width="232" height="306" rx="14" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="1032" cy="158" r="13" fill="#ffffff"/>
  <g transform="translate(1032,158)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="1054" y="163" font-size="14" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1024" y="206" font-size="17" font-weight="700" fill="#ffffff">接続が生む</text>
  <text x="1024" y="230" font-size="17" font-weight="700" fill="#ffffff">好循環</text>
  <text x="1024" y="266" font-size="12" fill="#DCEEE5">情報がリンクするほど、</text>
  <text x="1024" y="284" font-size="12" fill="#DCEEE5">学内の成果が連鎖的に伸びる</text>
  <text x="1024" y="318" font-size="12" fill="#DCEEE5">→ 研究力↑・修了率↑・中退率↓</text>
  <text x="1024" y="336" font-size="12" fill="#DCEEE5">→ 自ら考える学生が育つ</text>
  <rect x="1022" y="352" width="204" height="72" rx="9" fill="#0d4636" opacity="0.55"/>
  <text x="1034" y="372" font-size="11.5" font-weight="700" fill="#ffffff">副次価値</text>
  <text x="1034" y="390" font-size="10.5" fill="#cfe7dd">許諾済データの共同研究／</text>
  <text x="1034" y="404" font-size="10.5" fill="#cfe7dd">統合分析で経営判断を迅速化／</text>
  <text x="1034" y="418" font-size="10.5" fill="#cfe7dd">アプリの外販</text>
  <rect x="40" y="450" width="1200" height="56" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="450" width="148" height="56" rx="12" fill="url(#gAccH)"/>
  <text x="62" y="474" font-size="13" font-weight="700" fill="#ffffff">想定KPI</text>
  <text x="62" y="494" font-size="10.5" fill="#cfe7dd">（試算・効果イメージ）</text>
  <text x="232" y="476" font-size="26" font-weight="700" fill="#1A7A5E">＋3h</text>
  <text x="232" y="496" font-size="11" fill="#666">教員の研究時間／週</text>
  <line x1="372" y1="462" x2="372" y2="494" stroke="#e0e0e0" stroke-width="1"/>
  <text x="404" y="476" font-size="26" font-weight="700" fill="#E07B39">−50%</text>
  <text x="404" y="496" font-size="11" fill="#666">定型問い合わせ</text>
  <line x1="560" y1="462" x2="560" y2="494" stroke="#e0e0e0" stroke-width="1"/>
  <text x="592" y="476" font-size="26" font-weight="700" fill="#1A7A5E">＋20pt</text>
  <text x="592" y="496" font-size="11" fill="#666">院生の研究力</text>
  <line x1="760" y1="462" x2="760" y2="494" stroke="#e0e0e0" stroke-width="1"/>
  <text x="792" y="476" font-size="26" font-weight="700" fill="#1A7A5E">＋5pt</text>
  <text x="792" y="496" font-size="11" fill="#666">修了率（中退率↓）</text>
  <text x="952" y="472" font-size="11" font-weight="700" fill="#c4632a">※すべて想定／試算値</text>
  <text x="952" y="490" font-size="10.5" fill="#999">導入効果のイメージであり実測値ではない</text>
  <text x="40" y="528" font-size="12.5" font-weight="700" fill="#9aa3a0">受益者：ニーズ → 導入後</text>
  <rect x="40" y="536" width="291" height="80" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="62" cy="560" r="13" fill="#E4F2EC"/>
  <g transform="translate(62,561)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><circle cx="0" cy="-3" r="3.4"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g>
  <text x="84" y="558" font-size="14" font-weight="700" fill="#1A7A5E">学生</text>
  <text x="84" y="576" font-size="10.5" fill="#888">個別最適な学びがほしい</text>
  <text x="52" y="600" font-size="11.5" font-weight="700" fill="#16624b">→ 専用AIが伴走・研究力↑</text>
  <rect x="343" y="536" width="291" height="80" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="365" cy="560" r="13" fill="#E4F2EC"/>
  <g transform="translate(365,561)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><circle cx="-4" cy="-3" r="2.8"/><circle cx="4" cy="-3" r="2.8"/><path d="M-9 7 A5 5 0 0 1 0 6"/><path d="M0 6 A5 5 0 0 1 9 7"/></g>
  <text x="387" y="558" font-size="14" font-weight="700" fill="#1A7A5E">教員</text>
  <text x="387" y="576" font-size="10.5" fill="#888">定型支援に時間を奪われる</text>
  <text x="355" y="600" font-size="11.5" font-weight="700" fill="#16624b">→ AIが肩代わり・研究時間↑</text>
  <rect x="646" y="536" width="291" height="80" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="668" cy="560" r="13" fill="#E4F2EC"/>
  <g transform="translate(668,560)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><circle cx="0" cy="0" r="3.4"/><path d="M0 -7 V-4 M0 7 V4 M-7 0 H-4 M7 0 H4 M-5 -5 L-3.5 -3.5 M5 5 L3.5 3.5 M5 -5 L3.5 -3.5 M-5 5 L-3.5 3.5"/></g>
  <text x="690" y="558" font-size="14" font-weight="700" fill="#1A7A5E">職員</text>
  <text x="690" y="576" font-size="10.5" fill="#888">問い合わせ対応が多い</text>
  <text x="658" y="600" font-size="11.5" font-weight="700" fill="#16624b">→ 窓口DXで省力化</text>
  <rect x="949" y="536" width="291" height="80" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="971" cy="560" r="13" fill="#E4F2EC"/>
  <g transform="translate(971,561)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><path d="M-8 -2 L0 -7 L8 -2"/><path d="M-6 -2 V6 M-1.5 -2 V6 M3 -2 V6 M7 -2 V6 M-8 7 H8"/></g>
  <text x="993" y="558" font-size="14" font-weight="700" fill="#1A7A5E">大学</text>
  <text x="993" y="576" font-size="10.5" fill="#888">データが分散している</text>
  <text x="983" y="600" font-size="11.5" font-weight="700" fill="#16624b">→ 統合しIR・経営に活用</text>
  <text x="40" y="638" font-size="12" font-weight="700" fill="#9aa3a0">ロードマップ：段階的に提供価値を拡大（Level 1 → 3）</text>
  <path d="M120 686 C360 686 420 668 620 662 S980 646 1120 642" stroke="#9bbcb1" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="150" y="668" width="256" height="38" rx="9" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="194" y="684" font-size="12.5" font-weight="700" fill="#16624b">学びのアプリ</text>
  <text x="194" y="699" font-size="10.5" fill="#555">情報・資源を一つに集約</text>
  <rect x="496" y="662" width="256" height="38" rx="9" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="540" y="678" font-size="12.5" font-weight="700" fill="#16624b">AIエージェント基盤</text>
  <text x="540" y="693" font-size="10.5" fill="#555">伴走支援・負担軽減・実践知展開</text>
  <rect x="842" y="650" width="256" height="38" rx="9" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="886" y="666" font-size="12.5" font-weight="700" fill="#16624b">全学へ展開</text>
  <text x="886" y="681" font-size="10.5" fill="#555">教育・研究・事務の支援に拡大</text>
  <circle cx="120" cy="686" r="20" fill="url(#gAcc)" filter="url(#sh)"/><text x="120" y="693" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="496" cy="680" r="20" fill="url(#gAcc)" filter="url(#sh)"/><text x="496" y="687" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="842" cy="668" r="20" fill="url(#gAcc)" filter="url(#sh)"/><text x="842" y="675" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <path d="M1118 654 L1240 654 L1240 700 L1118 700 L1140 677 Z" fill="url(#gAccH)"/>
  <text x="1185" y="681" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">躍動する大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー（①課題A-D→②2本柱の打ち手A-D 1:1→③GOAL+goalBurst）。地=左下→右上へ昇る半透明tealシェブロン/リボン（前進エネルギー）。配色=teal＋warn橙＋ニュートラルの3色制限。kpiBand（全KPIに想定/試算を明示）＋beneficiaryRow（学生/教員/職員/大学：ニーズ→導入後）＋下段ロードマップLevel1-3。密度=packed。 -->
