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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e5a73"/><stop offset="1" stop-color="#0a3d4f"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f9bb8"/><stop offset="1" stop-color="#0e5a73"/></linearGradient>
    <linearGradient id="gTealMid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2bb3c9"/><stop offset="1" stop-color="#178aa3"/></linearGradient>
    <linearGradient id="gOrange" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f0a04b"/><stop offset="1" stop-color="#dd7a26"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3bb273"/><stop offset="1" stop-color="#1f8f55"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.95"/><stop offset="0.6" stop-color="#fbd06a" stop-opacity="0.5"/><stop offset="1" stop-color="#fbd06a" stop-opacity="0"/></radialGradient>
    <radialGradient id="gBg" cx="0.5" cy="0.42" r="0.62"><stop offset="0" stop-color="#0b4358" stop-opacity="0.10"/><stop offset="1" stop-color="#0b4358" stop-opacity="0.03"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0a3d4f" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0a3d4f" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#dd7a26"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f3f8fa"/>
  <rect x="0" y="98" width="1280" height="492" fill="url(#gBg)"/>
  <g stroke="#0e5a73" stroke-width="1" fill="none" opacity="0.08"><ellipse cx="640" cy="350" rx="300" ry="300"/><ellipse cx="640" cy="350" rx="300" ry="110"/><ellipse cx="640" cy="350" rx="300" ry="200"/><ellipse cx="640" cy="350" rx="200" ry="300"/><ellipse cx="640" cy="350" rx="100" ry="300"/><line x1="340" y1="350" x2="940" y2="350"/><line x1="640" y1="50" x2="640" y2="650"/></g>
  <g stroke="#1f9bb8" stroke-width="1" stroke-dasharray="2 7" fill="none" opacity="0.10"><path d="M180 200 L420 300 L300 470 L560 540"/><path d="M1100 220 L880 330 L1010 480 L760 560"/><path d="M420 300 L880 330"/><path d="M300 470 L1010 480"/></g>
  <g fill="#1f9bb8" opacity="0.12"><circle cx="180" cy="200" r="3"/><circle cx="420" cy="300" r="3"/><circle cx="300" cy="470" r="3"/><circle cx="560" cy="540" r="3"/><circle cx="1100" cy="220" r="3"/><circle cx="880" cy="330" r="3"/><circle cx="1010" cy="480" r="3"/><circle cx="760" cy="560" r="3"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#d8eef3"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#0a3d4f">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="60" y="128" font-size="13" font-weight="700" fill="#9aa6ab">課題 A–D</text>
  <rect x="40" y="138" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="138" width="6" height="106" rx="3" fill="#dd7a26"/>
  <circle cx="72" cy="166" r="13" fill="#fbeede"/><text x="72" y="171" font-size="14" font-weight="700" fill="#dd7a26" text-anchor="middle">A</text>
  <text x="94" y="164" font-size="13.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
  <text x="58" y="190" font-size="11.5" fill="#444">院生の多様化（社会人・留学生・</text>
  <text x="58" y="208" font-size="11.5" fill="#444">他分野）＋申請・評価・添削・全員</text>
  <text x="58" y="226" font-size="11.5" font-weight="700" fill="#c4632a">留学対応で指導が限界</text>
  <rect x="40" y="252" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="252" width="6" height="106" rx="3" fill="#dd7a26"/>
  <circle cx="72" cy="280" r="13" fill="#fbeede"/><text x="72" y="285" font-size="14" font-weight="700" fill="#dd7a26" text-anchor="middle">B</text>
  <text x="94" y="278" font-size="13.5" font-weight="700" fill="#c4632a">人材育成が多様化・高度化</text>
  <text x="58" y="304" font-size="11.5" fill="#444">成功モデルが多様化し求める水準</text>
  <text x="58" y="322" font-size="11.5" fill="#444">も上昇。個別の能力育成と</text>
  <text x="58" y="340" font-size="11.5" font-weight="700" fill="#c4632a">資源の最適投下が必須</text>
  <rect x="40" y="366" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="366" width="6" height="106" rx="3" fill="#dd7a26"/>
  <circle cx="72" cy="394" r="13" fill="#fbeede"/><text x="72" y="399" font-size="14" font-weight="700" fill="#dd7a26" text-anchor="middle">C</text>
  <text x="94" y="392" font-size="13.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
  <text x="58" y="418" font-size="11.5" fill="#444">支援が乱立・重複・分散し、</text>
  <text x="58" y="436" font-size="11.5" fill="#444">真に必要な個人に</text>
  <text x="58" y="454" font-size="11.5" font-weight="700" fill="#c4632a">届いていない</text>
  <rect x="40" y="480" width="300" height="106" rx="13" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="480" width="6" height="106" rx="3" fill="#dd7a26"/>
  <circle cx="72" cy="508" r="13" fill="#fbeede"/><text x="72" y="513" font-size="14" font-weight="700" fill="#dd7a26" text-anchor="middle">D</text>
  <text x="94" y="506" font-size="13.5" font-weight="700" fill="#c4632a">支援者の実践知が死蔵</text>
  <text x="58" y="532" font-size="11.5" fill="#444">同じ手続きの反復／システム乱立</text>
  <text x="58" y="550" font-size="11.5" fill="#444">・データ分散・異動で</text>
  <text x="58" y="568" font-size="11.5" font-weight="700" fill="#c4632a">実践知がゼロリセット</text>
  <g opacity="0.9"><path d="M348 191 L386 191" stroke="#dd7a26" stroke-width="2.5" marker-end="url(#mW)"/><path d="M348 305 L386 305" stroke="#dd7a26" stroke-width="2.5" marker-end="url(#mW)"/><path d="M348 419 L386 419" stroke="#dd7a26" stroke-width="2.5" marker-end="url(#mW)"/><path d="M348 533 L386 533" stroke="#dd7a26" stroke-width="2.5" marker-end="url(#mW)"/></g>
  <polygon points="408,500 836,500 866,586 378,586" fill="url(#gTeal)" filter="url(#sh)"/>
  <circle cx="430" cy="528" r="13" fill="#ffffff"/><g transform="translate(430,528)" stroke="#0e5a73" stroke-width="2" fill="none"><path d="M-7 0 H7 M-7 -5 H7 M-7 5 H7"/></g>
  <text x="630" y="533" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">土台：データ接続基盤</text>
  <text x="630" y="557" font-size="11.5" fill="#d8eef3" text-anchor="middle">D 支援者の労力削減・効率化 ＝ 学内データを基盤で接続し、反復・窓口業務を</text>
  <text x="630" y="575" font-size="11.5" fill="#d8eef3" text-anchor="middle">RAGで省力化／IR・成果・回答を自動収集・統合分析</text>
  <polygon points="448,406 796,406 826,492 418,492" fill="url(#gTealMid)" filter="url(#sh)"/>
  <circle cx="470" cy="434" r="13" fill="#ffffff"/><g transform="translate(470,434)" stroke="#178aa3" stroke-width="2" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><circle cx="0" cy="0" r="2.2"/></g>
  <text x="626" y="439" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">中核：AI機能</text>
  <text x="626" y="462" font-size="11.5" fill="#eaf7fa" text-anchor="middle">A 多言語AI支援・ラボ共通支援で指導負担↓ ／ B CVデータベース＋AI伴走の</text>
  <text x="626" y="480" font-size="11.5" fill="#eaf7fa" text-anchor="middle">段階別個別支援（留学・ラボ・企業マッチング）で研究力↑</text>
  <polygon points="496,330 766,330 796,398 466,398" fill="#178aa3" filter="url(#shSoft)"/>
  <circle cx="518" cy="356" r="12" fill="#ffffff"/><g transform="translate(518,356)" stroke="#0e5a73" stroke-width="2" fill="none"><circle cx="0" cy="0" r="5"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5"/></g>
  <text x="640" y="360" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">C 個別最適を直に届ける</text>
  <text x="640" y="384" font-size="11" fill="#dff0f4" text-anchor="middle">①学生入力ニーズ ＋ ②全学の支援情報を突合 → 必要な個人へ投下</text>
  <ellipse cx="640" cy="270" rx="150" ry="80" fill="url(#gBurst)"/>
  <g stroke="#f5c451" stroke-width="2.5" opacity="0.85"><line x1="640" y1="196" x2="640" y2="182"/><line x1="724" y1="226" x2="740" y2="216"/><line x1="556" y1="226" x2="540" y2="216"/><line x1="700" y1="200" x2="712" y2="188"/><line x1="580" y1="200" x2="568" y2="188"/></g>
  <polygon points="560,250 720,250 750,322 530,322" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="640" cy="274" r="14" fill="#ffffff"/><g transform="translate(640,274)" stroke="#1f8f55" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="640" y="310" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL：Nexus University</text>
  <text x="908" y="138" font-size="13" font-weight="700" fill="#9aa6ab">想定KPI（試算）</text>
  <rect x="908" y="150" width="332" height="232" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="908" y="150" width="332" height="34" rx="14" fill="url(#gGoal)"/><rect x="908" y="167" width="332" height="17" fill="url(#gGoal)"/>
  <text x="1074" y="172" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">いずれも導入効果の想定／試算値</text>
  <text x="932" y="232" font-size="40" font-weight="700" fill="#1f8f55">+3<tspan font-size="18">h/週</tspan></text>
  <text x="932" y="250" font-size="11.5" fill="#555">教員の研究時間</text>
  <text x="1232" y="232" font-size="40" font-weight="700" fill="#dd7a26" text-anchor="end">-50<tspan font-size="18">%</tspan></text>
  <text x="1232" y="250" font-size="11.5" fill="#555" text-anchor="end">定型問い合わせ</text>
  <line x1="932" y1="270" x2="1216" y2="270" stroke="#e3edf0" stroke-width="1.5"/>
  <text x="932" y="324" font-size="40" font-weight="700" fill="#0e5a73">+20<tspan font-size="18">pt</tspan></text>
  <text x="932" y="342" font-size="11.5" fill="#555">院生の研究力</text>
  <text x="1232" y="324" font-size="40" font-weight="700" fill="#178aa3" text-anchor="end">+5<tspan font-size="18">pt</tspan></text>
  <text x="1232" y="342" font-size="11.5" fill="#555" text-anchor="end">修了率（中退率↓）</text>
  <rect x="908" y="402" width="332" height="184" rx="14" fill="#eaf7fa" filter="url(#shSoft)"/>
  <circle cx="936" cy="430" r="13" fill="#ffffff"/><g transform="translate(936,430)" stroke="#178aa3" stroke-width="2" fill="none"><path d="M-7 4 L0 -6 L7 4 Z"/></g>
  <text x="960" y="435" font-size="14" font-weight="700" fill="#0e5a73">副次効果</text>
  <text x="930" y="462" font-size="11.5" fill="#333">・許諾済データの共有・利活用</text>
  <text x="942" y="480" font-size="11.5" fill="#666">（学内・行政・企業の共同研究）</text>
  <text x="930" y="504" font-size="11.5" fill="#333">・統合分析で経営判断を迅速化</text>
  <text x="930" y="526" font-size="11.5" fill="#333">・アプリ外販による収益化</text>
  <text x="930" y="558" font-size="11.5" font-weight="700" fill="#0a3d4f">接続が進むほど成果が連鎖的に</text>
  <text x="930" y="576" font-size="11.5" font-weight="700" fill="#0a3d4f">伸び、選ばれる大学へ</text>
  <path d="M40 602 L1206 602 L1240 638 L1206 674 L40 674 Z" fill="url(#gHdr)"/>
  <text x="623" y="645" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続するハブとなり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-4：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University GOAL）。地に薄いグローブ＋ネットワーク点線で国際×接続を表現。多色リッチ（teal＋橙＋緑GOAL＋青背景）。左=課題A-D、中央=ピラミッド（D→A/B→Cを各層に1:1対応で格納＋goalBurst）、右=巨大数字KPI（必ず想定/試算明示）＋副次効果。 -->
