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
    <linearGradient id="gBone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d7ece4"/><stop offset="0.5" stop-color="#bfe3d6"/><stop offset="1" stop-color="#cfeee0"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2bbf93" stop-opacity="0.55"/><stop offset="1" stop-color="#2bbf93" stop-opacity="0"/></radialGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd9a0" stop-opacity="0.9"/><stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mG" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <g opacity="0.07" stroke="#1A7A5E" stroke-width="1.2" fill="none"><ellipse cx="640" cy="330" rx="430" ry="430"/><ellipse cx="640" cy="330" rx="150" ry="430"/><ellipse cx="640" cy="330" rx="300" ry="430"/><ellipse cx="640" cy="330" rx="430" ry="150"/><ellipse cx="640" cy="330" rx="430" ry="300"/></g>
  <g opacity="0.08" fill="#1A7A5E"><circle cx="210" cy="150" r="3"/><circle cx="430" cy="120" r="3"/><circle cx="700" cy="180" r="3"/><circle cx="920" cy="140" r="3"/><circle cx="1080" cy="220" r="3"/><circle cx="320" cy="470" r="3"/><circle cx="980" cy="470" r="3"/></g>
  <g opacity="0.08" stroke="#1A7A5E" stroke-width="1" fill="none"><path d="M210 150 L430 120"/><path d="M430 120 L700 180"/><path d="M700 180 L920 140"/><path d="M920 140 L1080 220"/><path d="M320 470 L210 150"/><path d="M980 470 L1080 220"/></g>
  <path d="M40 248 L1240 248 L1240 412 L40 412 Z" fill="url(#gBone)" opacity="0.55"/>
  <path d="M40 412 L1240 412 L1216 330 Z" fill="#bfe3d6" opacity="0.30"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（役員ブリーフ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#E4F2EC"/>
  <text x="40" y="77" font-size="14" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <text x="42" y="108" font-size="12" font-weight="700" fill="#c4632a">流入する課題（A–D）</text>
  <rect x="40" y="114" width="252" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="114" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="134" r="10" fill="#FBEDE2"/>
  <text x="64" y="138" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="82" y="134" font-size="12" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="54" y="153" font-size="10" fill="#666">院生の多様化（社会人・留学生・他分野）</text>
  <text x="54" y="169" font-size="10" fill="#666">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="190" width="252" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="190" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="210" r="10" fill="#FBEDE2"/>
  <text x="64" y="214" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="82" y="210" font-size="12" font-weight="700" fill="#1f2937">人材育成が多様化・高度化</text>
  <text x="54" y="229" font-size="10" fill="#666">求める水準が上昇・成功モデルも多様</text>
  <text x="54" y="245" font-size="10" fill="#666">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="266" width="252" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="266" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="286" r="10" fill="#FBEDE2"/>
  <text x="64" y="290" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="82" y="286" font-size="12" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="54" y="305" font-size="10" fill="#666">支援が乱立・重複・分散している</text>
  <text x="54" y="321" font-size="10" fill="#666">必要とする個人へ情報が直接届かない</text>
  <rect x="40" y="342" width="252" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="342" width="6" height="64" rx="3" fill="url(#gWarn)"/>
  <circle cx="64" cy="362" r="10" fill="#FBEDE2"/>
  <text x="64" y="366" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="82" y="362" font-size="12" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="54" y="381" font-size="10" fill="#666">同じ手続き・説明・問い合わせの反復</text>
  <text x="54" y="397" font-size="10" fill="#666">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M294 146 C320 146 322 290 360 318" stroke="#d2772f" stroke-width="5" fill="none" opacity="0.45" marker-end="url(#mW)"/>
  <path d="M294 222 C322 222 326 300 360 322" stroke="#d2772f" stroke-width="5" fill="none" opacity="0.45" marker-end="url(#mW)"/>
  <path d="M294 298 C326 298 332 322 360 330" stroke="#d2772f" stroke-width="5" fill="none" opacity="0.45" marker-end="url(#mW)"/>
  <path d="M294 374 C326 374 336 350 360 342" stroke="#d2772f" stroke-width="5" fill="none" opacity="0.45" marker-end="url(#mW)"/>
  <circle cx="500" cy="330" r="92" fill="url(#hubGlow)"/>
  <path d="M500 246 L573 288 L573 372 L500 414 L427 372 L427 288 Z" fill="url(#gAcc)" filter="url(#sh)"/>
  <g opacity="0.14" stroke="#ffffff" stroke-width="1.1" fill="none"><ellipse cx="500" cy="330" rx="58" ry="58"/><ellipse cx="500" cy="330" rx="24" ry="58"/><ellipse cx="500" cy="330" rx="58" ry="24"/></g>
  <circle cx="500" cy="278" r="13" fill="#ffffff"/>
  <g transform="translate(500,278)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="500" y="312" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="500" y="330" font-size="15" font-weight="700" fill="#bfe9da" text-anchor="middle">Nexus</text>
  <text x="500" y="352" font-size="9.5" fill="#dceee7" text-anchor="middle">CVデータベース</text>
  <text x="500" y="366" font-size="9.5" fill="#dceee7" text-anchor="middle">＋ AI伴走 ＋ RAG</text>
  <text x="500" y="386" font-size="9" fill="#cfe5dc" text-anchor="middle">〈情報・データ・</text>
  <text x="500" y="398" font-size="9" fill="#cfe5dc" text-anchor="middle">支援・機会〉を統合</text>
  <rect x="600" y="252" width="148" height="156" rx="12" fill="#ffffff" filter="url(#shSoft)" opacity="0.96"/>
  <circle cx="674" cy="290" r="38" fill="url(#goalGlow)"/>
  <text x="674" y="280" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">真に必要な</text>
  <text x="674" y="296" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">個人へ直送</text>
  <text x="674" y="320" font-size="10" fill="#555" text-anchor="middle">①学生の入力ニーズ ＋</text>
  <text x="674" y="334" font-size="10" fill="#555" text-anchor="middle">②全学の支援情報を突合</text>
  <rect x="612" y="346" width="124" height="20" rx="10" fill="#1A7A5E"/>
  <text x="674" y="360" font-size="10" fill="#ffffff" text-anchor="middle">→ ダイレクト投下</text>
  <text x="674" y="384" font-size="9.5" fill="#666" text-anchor="middle">許諾済データを学内・行政・</text>
  <text x="674" y="397" font-size="9.5" fill="#666" text-anchor="middle">企業の共同研究へ利活用</text>
  <path d="M573 330 C586 330 588 330 600 330" stroke="#1A7A5E" stroke-width="6" fill="none" opacity="0.6"/>
  <text x="942" y="108" font-size="12" font-weight="700" fill="#16624b">AI×接続で変わること（A–D）</text>
  <rect x="940" y="114" width="300" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="940" y="114" width="6" height="64" rx="3" fill="url(#gAccH)"/>
  <circle cx="964" cy="134" r="10" fill="#E4F2EC"/>
  <text x="964" y="138" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="982" y="134" font-size="12" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="954" y="153" font-size="10" fill="#444">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="954" y="169" font-size="10" fill="#444">→ 教員は研究そのものに時間を回せる</text>
  <rect x="940" y="190" width="300" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="940" y="190" width="6" height="64" rx="3" fill="url(#gAccH)"/>
  <circle cx="964" cy="210" r="10" fill="#E4F2EC"/>
  <text x="964" y="214" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="982" y="210" font-size="12" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="954" y="229" font-size="10" fill="#444">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="954" y="245" font-size="10" fill="#444">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="940" y="266" width="300" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="940" y="266" width="6" height="64" rx="3" fill="url(#gAccH)"/>
  <circle cx="964" cy="286" r="10" fill="#E4F2EC"/>
  <text x="964" y="290" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="982" y="286" font-size="12" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="954" y="305" font-size="10" fill="#444">学生ニーズ×全学支援情報を突合し</text>
  <text x="954" y="321" font-size="10" fill="#444">必要な個人へダイレクト投下</text>
  <rect x="940" y="342" width="300" height="64" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="940" y="342" width="6" height="64" rx="3" fill="url(#gAccH)"/>
  <circle cx="964" cy="362" r="10" fill="#E4F2EC"/>
  <text x="964" y="366" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="982" y="362" font-size="12" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
  <text x="954" y="381" font-size="10" fill="#444">反復・窓口業務をRAGで省力化</text>
  <text x="954" y="397" font-size="10" fill="#444">IR・成果・回答を自動収集し統合分析</text>
  <path d="M748 300 C880 300 820 146 934 146" stroke="#1c6e44" stroke-width="5" fill="none" opacity="0.42" marker-end="url(#mG)"/>
  <path d="M748 318 C870 318 830 222 934 222" stroke="#1c6e44" stroke-width="5" fill="none" opacity="0.42" marker-end="url(#mG)"/>
  <path d="M748 342 C860 342 860 298 934 298" stroke="#1c6e44" stroke-width="5" fill="none" opacity="0.42" marker-end="url(#mG)"/>
  <path d="M748 360 C850 360 870 374 934 374" stroke="#1c6e44" stroke-width="5" fill="none" opacity="0.42" marker-end="url(#mG)"/>
  <path d="M40 422 L1206 422 L1240 442 L1206 462 L40 462 Z" fill="url(#gWarn)"/>
  <text x="56" y="448" font-size="13" font-weight="700" fill="#ffffff">システムでなく〈データ〉を接続基盤でつなぐ ― 段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）／統合分析で経営判断を迅速化</text>
  <text x="42" y="482" font-size="10.5" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ）</text>
  <rect x="40" y="488" width="285" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="488" width="5" height="44" rx="2.5" fill="url(#gAccH)"/>
  <text x="56" y="519" font-size="20" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="128" y="506" font-size="10" fill="#555">教員1人あたりの</text>
  <text x="128" y="520" font-size="10" fill="#555">研究時間を確保</text>
  <rect x="333" y="488" width="285" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="333" y="488" width="5" height="44" rx="2.5" fill="url(#gAccH)"/>
  <text x="349" y="519" font-size="20" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="421" y="506" font-size="10" fill="#555">定型問い合わせ・</text>
  <text x="421" y="520" font-size="10" fill="#555">窓口業務（RAG）</text>
  <rect x="626" y="488" width="285" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="626" y="488" width="5" height="44" rx="2.5" fill="url(#gAccH)"/>
  <text x="642" y="519" font-size="20" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="722" y="506" font-size="10" fill="#555">院生の研究力</text>
  <text x="722" y="520" font-size="10" fill="#555">（自己効力感）</text>
  <rect x="919" y="488" width="285" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="919" y="488" width="5" height="44" rx="2.5" fill="url(#gAccH)"/>
  <text x="935" y="519" font-size="20" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1015" y="506" font-size="10" fill="#555">標準年限の修了率</text>
  <text x="1015" y="520" font-size="10" fill="#555">（中退率↓）</text>
  <text x="42" y="556" font-size="10.5" font-weight="700" fill="#9a9a9a">受益者：4者すべての「困りごと」が「導入後」に変わる</text>
  <rect x="40" y="562" width="380" height="48" rx="9" fill="#FBEDE2" filter="url(#shSoft)"/>
  <text x="58" y="582" font-size="11" font-weight="700" fill="#c4632a">学生／院生</text>
  <text x="58" y="600" font-size="9.5" fill="#7a5132">支援が届かない → AI伴走で個別最適に直送</text>
  <rect x="430" y="562" width="380" height="48" rx="9" fill="#FBEDE2" filter="url(#shSoft)"/>
  <text x="448" y="582" font-size="11" font-weight="700" fill="#c4632a">教員</text>
  <text x="448" y="600" font-size="9.5" fill="#7a5132">指導負荷で限界 → 研究時間を確保し本務へ</text>
  <rect x="820" y="562" width="180" height="48" rx="9" fill="#E4F2EC" filter="url(#shSoft)"/>
  <text x="836" y="582" font-size="11" font-weight="700" fill="#16624b">職員</text>
  <text x="836" y="600" font-size="9.5" fill="#3f6b5b">反復業務 → RAGで省力化</text>
  <rect x="1010" y="562" width="194" height="48" rx="9" fill="#E4F2EC" filter="url(#shSoft)"/>
  <text x="1026" y="582" font-size="11" font-weight="700" fill="#16624b">大学（経営）</text>
  <text x="1026" y="600" font-size="9.5" fill="#3f6b5b">分散で判断遅延 → 統合分析で迅速化</text>
  <path d="M40 622 L1206 622 L1240 656 L1206 690 L40 690 Z" fill="url(#gAccH)"/>
  <text x="640" y="661" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵 variant-98。骨格=バックボーン＋中央ヒーロー結節点(六角Nexus)。左=課題A-D流入→塊矢印→中央Nexus→塊矢印→右=打ち手A-D。0層=薄いグローブ(経緯線楕円)＋ネットワーク点線。3色制限(teal＋warn橙＋ニュートラル)。packed密度。kpiBand(4枚,想定/試算明示)＋beneficiaryRow(学生/教員/職員/大学のbefore→after)＋goalBurst(中央右の直送パネルにgoalGlow)。 -->
