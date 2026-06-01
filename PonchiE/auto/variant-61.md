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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd9a8" stop-opacity="0.9"/><stop offset="0.55" stop-color="#f3b070" stop-opacity="0.35"/><stop offset="1" stop-color="#f3b070" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#E07B39"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <g opacity="0.12">
    <rect x="74" y="118" width="1132" height="470" rx="20" fill="#ffffff" stroke="#1A7A5E" stroke-width="2"/>
    <rect x="74" y="118" width="1132" height="40" rx="20" fill="#1A7A5E"/>
    <rect x="74" y="140" width="1132" height="18" fill="#1A7A5E"/>
    <circle cx="100" cy="138" r="6" fill="#ffffff"/>
    <circle cx="120" cy="138" r="6" fill="#ffffff"/>
    <circle cx="140" cy="138" r="6" fill="#ffffff"/>
    <rect x="300" y="128" width="640" height="20" rx="10" fill="#ffffff"/>
    <rect x="110" y="190" width="320" height="26" rx="6" fill="#1A7A5E"/>
    <rect x="110" y="232" width="980" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="110" y="258" width="900" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="110" y="306" width="240" height="20" rx="6" fill="#1A7A5E"/>
    <rect x="110" y="340" width="500" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="110" y="366" width="560" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="850" y="300" width="180" height="120" rx="10" fill="#1A7A5E"/>
    <rect x="850" y="440" width="180" height="14" rx="7" fill="#9bbcb1"/>
    <rect x="110" y="430" width="260" height="20" rx="6" fill="#1A7A5E"/>
    <rect x="110" y="464" width="600" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="110" y="490" width="540" height="12" rx="6" fill="#9bbcb1"/>
    <rect x="110" y="528" width="380" height="14" rx="7" fill="#E07B39"/>
  </g>
  <rect x="0" y="98" width="1280" height="492" fill="#ffffff" opacity="0.62"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="112" width="300" height="232" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="112" width="300" height="38" rx="16" fill="url(#gWarn)"/>
  <rect x="36" y="130" width="300" height="20" fill="url(#gWarn)"/>
  <circle cx="62" cy="131" r="13" fill="#ffffff"/>
  <g transform="translate(62,132)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="62" cy="134" r="1.1" fill="#d2772f"/>
  <text x="84" y="136" font-size="14.5" font-weight="700" fill="#ffffff">① いまの課題（A–D）</text>
  <text x="52" y="178" font-size="12.5" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="52" y="196" font-size="11" fill="#555">院生の多様化・申請/評価/添削で限界</text>
  <text x="52" y="220" font-size="12.5" font-weight="700" fill="#c4632a">B 人材育成が多様化・高度化</text>
  <text x="52" y="238" font-size="11" fill="#555">個別の能力育成と資源の最適投下が必須</text>
  <text x="52" y="262" font-size="12.5" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="52" y="280" font-size="11" fill="#555">支援が乱立・重複・分散し届かない</text>
  <text x="52" y="304" font-size="12.5" font-weight="700" fill="#c4632a">D 支援者の実践知が死蔵</text>
  <text x="52" y="322" font-size="11" fill="#555">反復作業・データ分散・異動でリセット</text>
  <path d="M70 246 L86 246 L86 332 M86 200 L86 246" stroke="#E07B39" stroke-width="0" fill="none"/>
  <path d="M340 222 L360 222 L374 243 L360 264 L340 264 L354 243 Z" fill="#1A7A5E"/>
  <rect x="382" y="112" width="496" height="232" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="382" y="112" width="496" height="38" rx="16" fill="url(#gAccH)"/>
  <rect x="382" y="130" width="496" height="20" fill="url(#gAccH)"/>
  <circle cx="408" cy="131" r="13" fill="#ffffff"/>
  <g transform="translate(408,131)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="430" y="136" font-size="14" font-weight="700" fill="#ffffff">② 打ち手 ― アプリ × AI基盤（A–Dに1:1対応）</text>
  <rect x="394" y="158" width="234" height="172" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="406" y="178" font-size="12" font-weight="700" fill="#1A7A5E">柱① アプリ（フロント）</text>
  <text x="406" y="201" font-size="11.5" font-weight="700" fill="#16624b">A 教員の指導負担を軽減</text>
  <text x="406" y="217" font-size="10.5" fill="#666">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="406" y="240" font-size="11.5" font-weight="700" fill="#16624b">B 院生の研究力を向上</text>
  <text x="406" y="256" font-size="10.5" fill="#666">CV-DB＋AI伴走の段階別個別支援</text>
  <text x="406" y="270" font-size="10.5" fill="#666">留学・ラボ・企業マッチング</text>
  <text x="406" y="295" font-size="11.5" font-weight="700" fill="#16624b">C 個別最適な情報を直に届ける</text>
  <text x="406" y="311" font-size="10.5" fill="#666">学生ニーズ × 全学支援情報を突合し投下</text>
  <text x="632" y="245" font-size="20" font-weight="700" fill="#1A7A5E" text-anchor="middle">＋</text>
  <rect x="650" y="158" width="216" height="172" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="662" y="178" font-size="12" font-weight="700" fill="#1A7A5E">柱② AI基盤（裏側）</text>
  <text x="662" y="201" font-size="11.5" font-weight="700" fill="#16624b">D 支援者の労力削減・効率化</text>
  <text x="662" y="217" font-size="10.5" fill="#666">データを基盤上で接続しAIで分析</text>
  <text x="662" y="231" font-size="10.5" fill="#666">反復・窓口業務をRAGで省力化</text>
  <text x="662" y="245" font-size="10.5" fill="#666">IR・成果・回答を自動収集→統合分析</text>
  <rect x="662" y="258" width="194" height="1" fill="#cfe0d8"/>
  <text x="662" y="278" font-size="11" font-weight="700" fill="#a0772f">＋ 副次的に広がる価値</text>
  <text x="662" y="295" font-size="10.5" fill="#666">許諾済データの共有（学内/行政/企業）</text>
  <text x="662" y="309" font-size="10.5" fill="#666">統合分析で経営判断を迅速化</text>
  <text x="662" y="323" font-size="10.5" fill="#666">アプリ外販で展開</text>
  <path d="M880 222 L900 222 L914 243 L900 264 L880 264 L894 243 Z" fill="#1A7A5E"/>
  <circle cx="1058" cy="228" r="120" fill="url(#gBurst)"/>
  <rect x="922" y="112" width="322" height="232" rx="16" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="948" cy="140" r="14" fill="#ffffff"/>
  <g transform="translate(948,140)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="972" y="145" font-size="15" font-weight="700" fill="#ffffff">③ GOAL</text>
  <text x="942" y="186" font-size="18" font-weight="700" fill="#ffffff">分散を「接続」し</text>
  <text x="942" y="210" font-size="18" font-weight="700" fill="#ffffff">研究者・支援者が躍動</text>
  <text x="942" y="240" font-size="12.5" fill="#DCEEE5">教員は研究時間を取り戻し、</text>
  <text x="942" y="258" font-size="12.5" fill="#DCEEE5">院生は個別最適の伴走で伸びる</text>
  <text x="942" y="282" font-size="12.5" fill="#DCEEE5">支援者の実践知が蓄積・再利用され、</text>
  <text x="942" y="300" font-size="12.5" fill="#DCEEE5">統合データが経営判断を加速する</text>
  <text x="942" y="328" font-size="12.5" font-weight="700" fill="#ffffff">→ 修了率↑・中退率↓の好循環</text>
  <text x="40" y="372" font-size="13" font-weight="700" fill="#999999">段階展開（Lv1 → Lv3）― 提供価値を広げる</text>
  <path d="M150 452 C360 452 410 430 600 424 S930 402 1010 398" stroke="#9bbcb1" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="186" y="426" width="262" height="56" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="206" y="448" font-size="13.5" font-weight="700" fill="#16624b">Lv1 接続基盤アプリ</text>
  <text x="206" y="469" font-size="11.5" fill="#444">情報・データ・支援・機会を一つに集約</text>
  <rect x="610" y="400" width="262" height="56" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="630" y="422" font-size="13.5" font-weight="700" fill="#16624b">Lv2 AI個別伴走</text>
  <text x="630" y="443" font-size="11.5" fill="#444">院生支援・教員負担軽減・実践知の展開</text>
  <rect x="990" y="372" width="254" height="56" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="1010" y="394" font-size="13.5" font-weight="700" fill="#16624b">Lv3 全学IR・外販</text>
  <text x="1010" y="415" font-size="11.5" fill="#444">統合分析で経営判断、学外へ展開</text>
  <circle cx="150" cy="452" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="150" y="460" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="600" cy="424" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="600" y="432" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="990" cy="398" r="22" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="990" y="406" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <rect x="40" y="500" width="1166" height="78" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="500" width="200" height="78" rx="14" fill="#E4F2EC"/>
  <text x="140" y="532" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">想定KPI</text>
  <text x="140" y="554" font-size="11" fill="#a0772f" text-anchor="middle">※すべて想定/試算</text>
  <text x="140" y="569" font-size="10" fill="#999" text-anchor="middle">（導入後に検証）</text>
  <text x="324" y="528" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+3h</text>
  <text x="324" y="548" font-size="11.5" fill="#444" text-anchor="middle">教員の研究時間</text>
  <text x="324" y="566" font-size="10.5" fill="#999" text-anchor="middle">／週（想定）</text>
  <rect x="430" y="514" width="1" height="50" fill="#e3ebe8"/>
  <text x="540" y="528" font-size="26" font-weight="700" fill="#E07B39" text-anchor="middle">−50%</text>
  <text x="540" y="548" font-size="11.5" fill="#444" text-anchor="middle">定型問い合わせ</text>
  <text x="540" y="566" font-size="10.5" fill="#999" text-anchor="middle">（試算）</text>
  <rect x="646" y="514" width="1" height="50" fill="#e3ebe8"/>
  <text x="760" y="528" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+20pt</text>
  <text x="760" y="548" font-size="11.5" fill="#444" text-anchor="middle">院生の研究力</text>
  <text x="760" y="566" font-size="10.5" fill="#999" text-anchor="middle">（想定）</text>
  <rect x="876" y="514" width="1" height="50" fill="#e3ebe8"/>
  <text x="1000" y="528" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+5pt</text>
  <text x="1000" y="548" font-size="11.5" fill="#444" text-anchor="middle">修了率（中退率↓）</text>
  <text x="1000" y="566" font-size="10.5" fill="#999" text-anchor="middle">（試算）</text>
  <path d="M40 596 L1206 596 L1240 632 L1206 668 L40 668 Z" fill="url(#gAccH)"/>
  <text x="623" y="638" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散をつなぐ Nexus University ― 研究力が伸び続け、支援知が蓄積する大学へ</text>
</svg>

<!-- 差分レシピ：0層に〈巨大アプリ画面パネル〉(淡ブラウザ枠・薄UI行・薄見出しボックス opacity0.12＋白スクリム0.62)を地として敷き、その上に横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤→③GOAL)＋stageBand(Lv1→Lv3)＋appMockup地＋goalBurst(③背後の橙グロー放射)を重ねた。配色=teal＋warn橙＋ニュートラルの3色制限・balanced密度。A-Dは課題↔打ち手1:1対応、KPIは全て想定/試算明示。 -->
