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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d2772f"/><stop offset="0.46" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <radialGradient id="goalBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe7c2" stop-opacity="0.95"/><stop offset="0.5" stop-color="#f6b86a" stop-opacity="0.5"/><stop offset="1" stop-color="#f6b86a" stop-opacity="0"/></radialGradient>
    <radialGradient id="nexGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.40"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <g opacity="0.08" stroke="#1A7A5E" stroke-width="1.2" fill="none"><ellipse cx="640" cy="372" rx="430" ry="240"/><ellipse cx="640" cy="372" rx="430" ry="92"/><ellipse cx="640" cy="372" rx="430" ry="166"/><ellipse cx="640" cy="372" rx="150" ry="240"/><ellipse cx="640" cy="372" rx="295" ry="240"/></g>
  <g opacity="0.07" fill="#1A7A5E"><circle cx="240" cy="180" r="3"/><circle cx="430" cy="140" r="3"/><circle cx="690" cy="170" r="3"/><circle cx="940" cy="200" r="3"/><circle cx="1080" cy="540" r="3"/><circle cx="330" cy="560" r="3"/><circle cx="780" cy="600" r="3"/><circle cx="560" cy="120" r="3"/></g>
  <g opacity="0.07" stroke="#1A7A5E" stroke-width="1" fill="none"><path d="M240 180 L430 140"/><path d="M430 140 L560 120"/><path d="M560 120 L690 170"/><path d="M690 170 L940 200"/><path d="M330 560 L780 600"/><path d="M780 600 L1080 540"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#E4F2EC"/>
  <text x="40" y="77" font-size="14" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="44" y="108" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="114" width="262" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="114" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="135" r="11" fill="#FBEDE2"/>
  <text x="66" y="140" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="140" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="162" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="178" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="200" width="262" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="200" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="221" r="11" fill="#FBEDE2"/>
  <text x="66" y="226" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="226" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="248" font-size="10" fill="#666">求める水準が上昇、成功モデルも多様化</text>
  <text x="56" y="264" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="286" width="262" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="286" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="307" r="11" fill="#FBEDE2"/>
  <text x="66" y="312" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="312" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="334" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="56" y="350" font-size="10" fill="#666">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="372" width="262" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="372" width="6" height="78" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="393" r="11" fill="#FBEDE2"/>
  <text x="66" y="398" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="398" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="420" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="436" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M306 153 L352 153 L352 270 L368 270" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M306 239 L344 239 L344 282 L368 282" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M306 325 L344 325 L344 300 L368 300" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M306 411 L352 411 L352 312 L368 312" stroke="#d2772f" stroke-width="2.2" fill="none" opacity="0.55" marker-end="url(#mW)"/>
  <path d="M40 268 L300 268 L300 296 L40 296 Z" fill="url(#gWarn)" opacity="0.0"/>
  <path d="M372 200 L908 200 L908 364 L372 364 Z" fill="none"/>
  <rect x="372" y="120" width="296" height="40" rx="0" fill="none"/>
  <path d="M372 222 C500 222 760 222 908 222 L948 282 L908 342 C760 342 500 342 372 342 Z" fill="url(#gBack)" opacity="0.0"/>
  <circle cx="540" cy="282" r="150" fill="url(#nexGlow)"/>
  <rect x="378" y="148" width="324" height="270" rx="18" fill="url(#gAcc)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="540" cy="283" rx="138" ry="124"/><ellipse cx="540" cy="283" rx="52" ry="124"/><ellipse cx="540" cy="283" rx="138" ry="48"/></g>
  <circle cx="408" cy="178" r="13" fill="#ffffff"/>
  <g transform="translate(408,178)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="430" y="175" font-size="13" font-weight="700" fill="#ffffff">接続基盤（Nexus）</text>
  <text x="430" y="192" font-size="10.5" fill="#d8efe6">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="394" y="206" width="178" height="158" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="394" y="206" width="178" height="18" rx="10" fill="#125642"/>
  <rect x="394" y="215" width="178" height="9" fill="#125642"/>
  <circle cx="406" cy="215" r="2.2" fill="#7fb8a6"/>
  <circle cx="413" cy="215" r="2.2" fill="#7fb8a6"/>
  <circle cx="420" cy="215" r="2.2" fill="#7fb8a6"/>
  <text x="436" y="219" font-size="8.5" fill="#cdeae0">研究×学び アプリ</text>
  <text x="404" y="240" font-size="9.5" font-weight="700" fill="#16624b">CVデータベース</text>
  <circle cx="408" cy="254" r="3" fill="#1A7A5E"/>
  <rect x="416" y="251" width="86" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="408" cy="267" r="3" fill="#9bc3b5"/>
  <rect x="416" y="264" width="120" height="6" rx="3" fill="#E4F2EC"/>
  <circle cx="408" cy="280" r="3" fill="#9bc3b5"/>
  <rect x="416" y="277" width="70" height="6" rx="3" fill="#E4F2EC"/>
  <text x="404" y="300" font-size="9" fill="#666">学内外の学習・スキル・資格記録</text>
  <rect x="404" y="308" width="158" height="18" rx="8" fill="#1A7A5E"/>
  <text x="413" y="321" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <rect x="404" y="332" width="76" height="24" rx="7" fill="#E4F2EC"/>
  <text x="442" y="348" font-size="8.5" fill="#16624b" text-anchor="middle">突合・分析</text>
  <rect x="486" y="332" width="76" height="24" rx="7" fill="#E4F2EC"/>
  <text x="524" y="348" font-size="8.5" fill="#16624b" text-anchor="middle">RAG省力化</text>
  <text x="640" y="240" font-size="11.5" font-weight="700" fill="#16624b">〈情報・データ・サポート</text>
  <text x="640" y="257" font-size="11.5" font-weight="700" fill="#16624b">・機会〉を統合し「接続」</text>
  <text x="640" y="284" font-size="10.5" fill="#444">真に必要とする個人へ、情報・</text>
  <text x="640" y="300" font-size="10.5" fill="#444">支援・機会をダイレクト投下</text>
  <text x="640" y="326" font-size="11" font-weight="700" fill="#c4632a">→ 研究×学びがつながる</text>
  <text x="640" y="343" font-size="10.5" fill="#444">研究者と支援者が躍動する基盤</text>
  <text x="722" y="108" font-size="12" font-weight="700" fill="#16624b">AI×接続基盤で変わること（A–D）</text>
  <rect x="718" y="114" width="362" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="718" y="114" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="135" r="11" fill="#E4F2EC"/>
  <text x="744" y="140" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="764" y="140" font-size="12.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="734" y="162" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="734" y="178" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="718" y="200" width="362" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="718" y="200" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="221" r="11" fill="#E4F2EC"/>
  <text x="744" y="226" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="764" y="226" font-size="12.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="734" y="248" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="734" y="264" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="718" y="286" width="362" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="718" y="286" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="307" r="11" fill="#E4F2EC"/>
  <text x="744" y="312" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="764" y="312" font-size="12.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="734" y="334" font-size="10" fill="#444">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="734" y="350" font-size="10" fill="#444">突合し、必要な個人へダイレクト投下</text>
  <rect x="718" y="372" width="362" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="718" y="372" width="6" height="78" rx="3" fill="url(#gAccH)"/>
  <circle cx="744" cy="393" r="11" fill="#E4F2EC"/>
  <text x="744" y="398" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="764" y="398" font-size="12.5" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="734" y="420" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="734" y="436" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M702 270 L716 270 L716 153 L712 153" stroke="#1c6e44" stroke-width="2.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <path d="M702 282 L710 282 L710 239 L712 239" stroke="#1c6e44" stroke-width="2.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <path d="M702 300 L710 300 L710 325 L712 325" stroke="#1c6e44" stroke-width="2.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <path d="M702 312 L716 312 L716 411 L712 411" stroke="#1c6e44" stroke-width="2.4" fill="none" opacity="0.6" marker-end="url(#mG)"/>
  <circle cx="1146" cy="282" r="98" fill="url(#goalBurst)"/>
  <g transform="translate(1146,282)"><path d="M0 -16 L4 -5 L16 -5 L6 3 L10 15 L0 7 L-10 15 L-6 3 L-16 -5 L-4 -5 Z" fill="#d2772f" opacity="0.18"/></g>
  <rect x="1094" y="208" width="106" height="148" rx="14" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="1120" cy="234" r="13" fill="#ffffff"/>
  <g transform="translate(1120,234)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1140" y="240" font-size="16" font-weight="700" fill="#ffffff">GOAL</text>
  <circle cx="1106" cy="266" r="2.6" fill="#bff0d3"/>
  <text x="1116" y="270" font-size="10" fill="#ffffff">研究者・支援者が躍動</text>
  <circle cx="1106" cy="288" r="2.6" fill="#bff0d3"/>
  <text x="1116" y="292" font-size="10" fill="#ffffff">許諾済データの共同利活用</text>
  <circle cx="1106" cy="310" r="2.6" fill="#bff0d3"/>
  <text x="1116" y="314" font-size="10" fill="#ffffff">統合分析で経営判断を迅速化</text>
  <circle cx="1106" cy="332" r="2.6" fill="#bff0d3"/>
  <text x="1116" y="336" font-size="10" fill="#ffffff">アプリ外販・学外連携</text>
  <text x="44" y="478" font-size="11.5" font-weight="700" fill="#9a9a9a">段階展開（システムでなく〈データ〉を接続でつなぐ）</text>
  <path d="M40 486 L1206 486 L1240 510 L1206 534 L40 534 Z" fill="url(#gBack)"/>
  <circle cx="232" cy="510" r="13" fill="#ffffff"/>
  <text x="232" y="514" font-size="11" font-weight="700" fill="#c4632a" text-anchor="middle">Lv1</text>
  <text x="254" y="514" font-size="12.5" font-weight="700" fill="#ffffff">アプリ（CV-DB＋AI伴走）</text>
  <circle cx="540" cy="510" r="13" fill="#ffffff"/>
  <text x="540" y="514" font-size="11" font-weight="700" fill="#1f8f6e" text-anchor="middle">Lv2</text>
  <text x="562" y="514" font-size="12.5" font-weight="700" fill="#ffffff">全学の接続基盤（データ統合）</text>
  <circle cx="900" cy="510" r="13" fill="#ffffff"/>
  <text x="900" y="514" font-size="11" font-weight="700" fill="#125642" text-anchor="middle">Lv3</text>
  <text x="922" y="514" font-size="12.5" font-weight="700" fill="#ffffff">学外連携（行政・企業の共同研究）</text>
  <text x="42" y="558" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ／確定値ではない）</text>
  <rect x="40" y="564" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="564" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="58" y="597" font-size="21" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="130" y="584" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="130" y="599" font-size="10" fill="#555">研究時間を確保（想定）</text>
  <rect x="345" y="564" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="564" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="363" y="597" font-size="21" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="435" y="584" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="435" y="599" font-size="10" fill="#555">窓口業務（試算）</text>
  <rect x="650" y="564" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="564" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="668" y="597" font-size="21" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="740" y="584" font-size="10" fill="#555">院生の研究力</text>
  <text x="740" y="599" font-size="10" fill="#555">（想定／自己効力感）</text>
  <rect x="955" y="564" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="564" width="5" height="48" rx="2.5" fill="url(#gAccH)"/>
  <text x="973" y="597" font-size="21" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1045" y="584" font-size="10" fill="#555">修了率の改善（試算）</text>
  <text x="1045" y="599" font-size="10" fill="#555">中退率↓</text>
  <path d="M40 624 L1206 624 L1240 656 L1206 688 L40 688 Z" fill="url(#gAccH)"/>
  <text x="623" y="661" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-49: バックボーン＋中央ヒーロー結節点。左=課題A-D→中央=接続基盤Nexus(appMockup)→右=打ち手A-D→GOALバースト。0層=薄いグローブ(経緯線楕円)＋ネットワーク点線。teal＋warn橙＋ニュートラルの3色。stageBand(Lv1→Lv3)＋想定/試算明示KPI。A-D 1:1対応。 -->
