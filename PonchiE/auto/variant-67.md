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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15324f"/><stop offset="1" stop-color="#0c2138"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f4f6b"/><stop offset="1" stop-color="#12354a"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c9c8e"/><stop offset="1" stop-color="#0f6e62"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2bbfa9"/><stop offset="1" stop-color="#0e4a7a"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#7fe6d4" stop-opacity="0.85"/><stop offset="1" stop-color="#7fe6d4" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2138" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2138" flood-opacity="0.15"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#16a394"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gHdr)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#e3eef4"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#15324f">学内に分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="34" y="108" width="640" height="452" rx="18" fill="#eef4f3" filter="url(#shS)"/>
  <rect x="690" y="108" width="556" height="452" rx="18" fill="#fbf3ec" filter="url(#shS)"/>
  <rect x="50" y="120" width="200" height="26" rx="13" fill="#15324f"/>
  <text x="150" y="138" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">課題 A–D（現状）</text>
  <rect x="706" y="120" width="200" height="26" rx="13" fill="#0f6e62"/>
  <text x="806" y="138" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI打ち手 A–D（1:1対応）</text>
  <rect x="50" y="156" width="624" height="92" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="74" cy="180" r="13" fill="#15324f"/><text x="74" y="185" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="96" y="178" font-size="13" font-weight="700" fill="#15324f">教員の業務負荷が急増</text>
  <text x="96" y="197" font-size="10.5" fill="#475569">院生が多様化（社会人・留学生・他分野）。申請・評価・</text>
  <text x="96" y="211" font-size="10.5" fill="#475569">学振添削・全員留学で指導が限界に。</text>
  <line x1="400" y1="166" x2="400" y2="238" stroke="#cbd5e1" stroke-width="1"/>
  <path d="M408 202 L430 202" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <text x="446" y="180" font-size="12" font-weight="700" fill="#0f6e62">指導負担↓・研究時間確保</text>
  <text x="446" y="197" font-size="10.3" fill="#475569">AI多言語支援／ラボ共通支援／</text>
  <text x="446" y="211" font-size="10.3" fill="#475569">支援者どうしを接続</text>
  <rect x="50" y="254" width="624" height="92" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="74" cy="278" r="13" fill="#15324f"/><text x="74" y="283" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="96" y="276" font-size="13" font-weight="700" fill="#15324f">研究人材の育成が多様化・高度化</text>
  <text x="96" y="295" font-size="10.5" fill="#475569">成功モデルが多様化し求める水準も上昇。個別の</text>
  <text x="96" y="309" font-size="10.5" fill="#475569">能力育成と資源の最適投下が必須。</text>
  <line x1="400" y1="264" x2="400" y2="336" stroke="#cbd5e1" stroke-width="1"/>
  <path d="M408 300 L430 300" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <text x="446" y="278" font-size="12" font-weight="700" fill="#0f6e62">院生の研究力を向上</text>
  <text x="446" y="295" font-size="10.3" fill="#475569">CV-DB（学習/スキル/資格記録）＋</text>
  <text x="446" y="309" font-size="10.3" fill="#475569">AI伴走の段階別支援・各種マッチング</text>
  <rect x="50" y="352" width="624" height="92" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="74" cy="376" r="13" fill="#15324f"/><text x="74" y="381" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="96" y="374" font-size="13" font-weight="700" fill="#15324f">大学→個人のミッシングリンク</text>
  <text x="96" y="393" font-size="10.5" fill="#475569">支援が乱立・重複・分散し、真に必要な個人に</text>
  <text x="96" y="407" font-size="10.5" fill="#475569">届いていない。</text>
  <line x1="400" y1="362" x2="400" y2="434" stroke="#cbd5e1" stroke-width="1"/>
  <path d="M408 398 L430 398" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <text x="446" y="376" font-size="12" font-weight="700" fill="#0f6e62">個別最適な情報を直に届ける</text>
  <text x="446" y="393" font-size="10.3" fill="#475569">①学生入力ニーズ × ②全学の支援情報</text>
  <text x="446" y="407" font-size="10.3" fill="#475569">を突合 → 必要な個人へダイレクト投下</text>
  <rect x="50" y="450" width="624" height="98" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="74" cy="476" r="13" fill="#15324f"/><text x="74" y="481" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="96" y="474" font-size="13" font-weight="700" fill="#15324f">支援者の実践知が活かされない</text>
  <text x="96" y="493" font-size="10.5" fill="#475569">同じ手続きの反復。システム乱立・データ分散・</text>
  <text x="96" y="507" font-size="10.5" fill="#475569">異動でゼロリセット。</text>
  <line x1="400" y1="460" x2="400" y2="538" stroke="#cbd5e1" stroke-width="1"/>
  <path d="M408 498 L430 498" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <text x="446" y="476" font-size="12" font-weight="700" fill="#0f6e62">支援者の労力削減・効率化</text>
  <text x="446" y="493" font-size="10.3" fill="#475569">基盤上でデータ接続しAIで分析／窓口を</text>
  <text x="446" y="507" font-size="10.3" fill="#475569">RAGで省力化／IR・成果を自動統合分析</text>
  <text x="450" y="535" font-size="10" fill="#94a3b8" text-anchor="middle">副次：許諾済データ共有（学内・行政・企業の共同研究）／統合分析で経営判断迅速化／アプリ外販</text>
  <text x="968" y="170" font-size="13.5" font-weight="700" fill="#15324f" text-anchor="middle">基盤の上にAI機能を積み、Nexus へ</text>
  <circle cx="968" cy="232" r="60" fill="url(#gBurst)"/>
  <polygon points="888,210 1048,210 1078,256 858,256" fill="url(#gTop)" filter="url(#sh)"/>
  <circle cx="908" cy="233" r="13" fill="#ffffff"/><g transform="translate(908,233)" stroke="#0e4a7a" stroke-width="2" fill="none"><path d="M-8 4 L0 -8 L8 4"/><path d="M-5 4 V7 M0 4 V7 M5 4 V7 M-8 7 H8"/></g>
  <text x="978" y="238" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University</text>
  <polygon points="838,262 1098,262 1128,318 808,318" fill="url(#gMid)" filter="url(#sh)"/>
  <text x="968" y="285" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI機能：伴走支援・分析・マッチング</text>
  <text x="968" y="304" font-size="10.5" fill="#d6f3ee" text-anchor="middle">教員・院生・支援者を文脈に応じて接続</text>
  <polygon points="788,324 1148,324 1178,386 758,386" fill="url(#gBase)" filter="url(#sh)"/>
  <text x="968" y="349" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">データ接続基盤</text>
  <text x="968" y="368" font-size="10.5" fill="#cfe0ec" text-anchor="middle">人・データ・支援・実践知を1つに集約</text>
  <rect x="744" y="404" width="448" height="84" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <text x="760" y="424" font-size="11.5" font-weight="700" fill="#0f6e62">段階展開　Lv1 → Lv3</text>
  <rect x="760" y="434" width="132" height="44" rx="8" fill="#dff0ed"/>
  <text x="826" y="452" font-size="11" font-weight="700" fill="#0f6e62" text-anchor="middle">Lv1 集約</text>
  <text x="826" y="469" font-size="9.5" fill="#475569" text-anchor="middle">データ接続基盤</text>
  <path d="M894 456 L908 456" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <rect x="912" y="434" width="132" height="44" rx="8" fill="#9fd9cf"/>
  <text x="978" y="452" font-size="11" font-weight="700" fill="#0c4b42" text-anchor="middle">Lv2 伴走</text>
  <text x="978" y="469" font-size="9.5" fill="#0c4b42" text-anchor="middle">AI個別支援</text>
  <path d="M1046 456 L1060 456" stroke="#16a394" stroke-width="2.5" marker-end="url(#mT)"/>
  <rect x="1064" y="434" width="112" height="44" rx="8" fill="#15324f"/>
  <text x="1120" y="452" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 自走</text>
  <text x="1120" y="469" font-size="9.5" fill="#cfe0ec" text-anchor="middle">Nexus 全学運用</text>
  <rect x="1108" y="500" width="84" height="48" rx="8" fill="#15324f"/>
  <rect x="1115" y="507" width="70" height="34" rx="4" fill="#ffffff"/>
  <rect x="1119" y="511" width="62" height="6" rx="3" fill="#16a394"/>
  <circle cx="1124" cy="525" r="3" fill="#9fd9cf"/><rect x="1131" y="523" width="50" height="3" rx="1.5" fill="#cbd5e1"/>
  <circle cx="1124" cy="533" r="3" fill="#9fd9cf"/><rect x="1131" y="531" width="42" height="3" rx="1.5" fill="#cbd5e1"/>
  <text x="744" y="514" font-size="11" font-weight="700" fill="#15324f">学生・支援者がアプリで直接つながる</text>
  <text x="744" y="532" font-size="10" fill="#475569">必要な人に、必要な支援を、必要なときに。</text>
  <path d="M34 576 L1212 576 L1246 632 L1212 688 L34 688 Z" fill="url(#gHdr)"/>
  <rect x="34" y="576" width="240" height="112" fill="#0f6e62" opacity="0.5"/>
  <text x="154" y="624" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">想定/試算 KPI</text>
  <text x="154" y="646" font-size="10.5" fill="#d6f3ee" text-anchor="middle">※効果は試算であり確定値ではない</text>
  <text x="300" y="616" font-size="22" font-weight="700" fill="#7fe6d4">＋3h/週</text>
  <text x="300" y="638" font-size="11" fill="#cfe0ec">教員の研究時間</text>
  <text x="300" y="656" font-size="9.5" fill="#9bb4c9">（想定）</text>
  <text x="500" y="616" font-size="22" font-weight="700" fill="#7fe6d4">−50%</text>
  <text x="500" y="638" font-size="11" fill="#cfe0ec">定型問い合わせ</text>
  <text x="500" y="656" font-size="9.5" fill="#9bb4c9">（試算）</text>
  <text x="700" y="616" font-size="22" font-weight="700" fill="#7fe6d4">＋20pt</text>
  <text x="700" y="638" font-size="11" fill="#cfe0ec">院生の研究力</text>
  <text x="700" y="656" font-size="9.5" fill="#9bb4c9">（想定）</text>
  <text x="900" y="616" font-size="22" font-weight="700" fill="#7fe6d4">＋5pt</text>
  <text x="900" y="638" font-size="11" fill="#cfe0ec">修了率（中退率↓）</text>
  <text x="900" y="656" font-size="9.5" fill="#9bb4c9">（試算）</text>
  <text x="1130" y="628" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">接続が、躍動を生む。</text>
</svg>

<!-- variant-67：階層ピラミッド骨格（土台=データ接続基盤→中=AI機能→頂=Nexus University）。navy+tealの寒色クール。0層はゾーンを薄teal/薄warmの面塗りテキストボックス（角丸・影）で区切り太枠なし。左=課題A–D／右=AI打ち手A–Dを1:1で水平対応。追加要素：appMockup（右下スマホUI）・goalBurst（頂点の放射グロー）・stageBand（Lv1集約→Lv2伴走→Lv3自走）。下帯KPIは全て想定/試算と明示。 -->
