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
    <linearGradient id="vHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15294f"/><stop offset="1" stop-color="#0f8a86"/></linearGradient>
    <linearGradient id="vNexus" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c3a66"/><stop offset="1" stop-color="#102441"/></linearGradient>
    <linearGradient id="vTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#17a39c"/><stop offset="1" stop-color="#0c6b66"/></linearGradient>
    <linearGradient id="vNavy" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a4f86"/><stop offset="1" stop-color="#1a3461"/></linearGradient>
    <linearGradient id="vBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c3a66"/><stop offset="0.5" stop-color="#0f8a86"/><stop offset="1" stop-color="#17a39c"/></linearGradient>
    <radialGradient id="vGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#17a39c" stop-opacity="0.42"/><stop offset="1" stop-color="#17a39c" stop-opacity="0"/></radialGradient>
    <filter id="vSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#102441" flood-opacity="0.24"/></filter>
    <filter id="vShS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#102441" flood-opacity="0.13"/></filter>
    <marker id="vMb" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2a4f86"/></marker>
    <marker id="vMt" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0f8a86"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <g opacity="0.05" stroke="#1c3a66" stroke-width="1" fill="none"><circle cx="640" cy="360" r="250"/><circle cx="640" cy="360" r="170"/><circle cx="640" cy="360" r="90"/></g>
  <g opacity="0.06" fill="#0f8a86"><circle cx="210" cy="180" r="3"/><circle cx="1080" cy="180" r="3"/><circle cx="250" cy="430" r="3"/><circle cx="1040" cy="430" r="3"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#vHdr)"/>
  <text x="40" y="37" font-size="23" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#e9f4f3"/>
  <text x="40" y="76" font-size="14" font-weight="700" fill="#0c6b66">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M40 300 L1240 300 L1240 372 L40 372 Z" fill="url(#vBack)" opacity="0.14"/>
  <text x="44" y="116" font-size="13" font-weight="700" fill="#2a4f86">課題（A–D）</text>
  <rect x="40" y="124" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="124" width="6" height="74" rx="3" fill="url(#vNavy)"/>
  <circle cx="66" cy="148" r="11" fill="#e6edf8"/>
  <text x="66" y="153" font-size="13" font-weight="700" fill="#2a4f86" text-anchor="middle">A</text>
  <text x="86" y="152" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="176" font-size="10.5" fill="#5b6472">院生の多様化・申請・評価・添削で</text>
  <text x="56" y="191" font-size="10.5" fill="#5b6472">指導が限界に</text>
  <rect x="40" y="208" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="208" width="6" height="74" rx="3" fill="url(#vNavy)"/>
  <circle cx="66" cy="232" r="11" fill="#e6edf8"/>
  <text x="66" y="237" font-size="13" font-weight="700" fill="#2a4f86" text-anchor="middle">B</text>
  <text x="86" y="236" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="260" font-size="10.5" fill="#5b6472">求める水準が上昇、成功モデルも</text>
  <text x="56" y="275" font-size="10.5" fill="#5b6472">多様化。資源の最適投下が必須</text>
  <rect x="40" y="372" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="372" width="6" height="74" rx="3" fill="url(#vNavy)"/>
  <circle cx="66" cy="396" r="11" fill="#e6edf8"/>
  <text x="66" y="401" font-size="13" font-weight="700" fill="#2a4f86" text-anchor="middle">C</text>
  <text x="86" y="400" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="424" font-size="10.5" fill="#5b6472">支援が乱立・重複・分散し、</text>
  <text x="56" y="439" font-size="10.5" fill="#5b6472">必要な個人に届かない</text>
  <rect x="40" y="456" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="40" y="456" width="6" height="74" rx="3" fill="url(#vNavy)"/>
  <circle cx="66" cy="480" r="11" fill="#e6edf8"/>
  <text x="66" y="485" font-size="13" font-weight="700" fill="#2a4f86" text-anchor="middle">D</text>
  <text x="86" y="484" font-size="12.5" font-weight="700" fill="#1f2937">実践知が蓄積・活用されない</text>
  <text x="56" y="508" font-size="10.5" fill="#5b6472">手続きの反復、データ分散、</text>
  <text x="56" y="523" font-size="10.5" fill="#5b6472">異動でゼロリセット</text>
  <path d="M292 161 L420 240" stroke="#2a4f86" stroke-width="7" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M292 245 L420 285" stroke="#2a4f86" stroke-width="7" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M292 409 L420 390" stroke="#2a4f86" stroke-width="7" fill="none" opacity="0.32" stroke-linecap="round"/>
  <path d="M292 493 L420 435" stroke="#2a4f86" stroke-width="7" fill="none" opacity="0.32" stroke-linecap="round"/>
  <circle cx="640" cy="335" r="190" fill="url(#vGlow)"/>
  <rect x="430" y="124" width="420" height="406" rx="20" fill="url(#vNexus)" filter="url(#vSh)"/>
  <g opacity="0.10" stroke="#7fd6cf" stroke-width="1.2" fill="none"><circle cx="640" cy="320" r="150"/><circle cx="640" cy="320" r="80"/></g>
  <circle cx="464" cy="160" r="14" fill="#17a39c"/>
  <g transform="translate(464,160)" stroke="#ffffff" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="488" y="156" font-size="16" font-weight="700" fill="#ffffff">接続基盤（Nexus）</text>
  <text x="488" y="174" font-size="11.5" fill="#a9d9d4">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="478" y="196" width="156" height="296" rx="16" fill="#0c1f3a" filter="url(#vSh)"/>
  <rect x="488" y="206" width="136" height="276" rx="10" fill="#f3f8f8"/>
  <rect x="488" y="206" width="136" height="30" rx="10" fill="#15294f"/>
  <rect x="488" y="222" width="136" height="14" fill="#15294f"/>
  <text x="556" y="225" font-size="9.5" fill="#cfe7e5" text-anchor="middle">研究×学び アプリ</text>
  <text x="500" y="252" font-size="10" font-weight="700" fill="#15294f">CVデータベース</text>
  <circle cx="503" cy="268" r="3.5" fill="#17a39c"/>
  <rect x="512" y="264" width="100" height="7" rx="3" fill="#dceeed"/>
  <circle cx="503" cy="284" r="3.5" fill="#9cc6c2"/>
  <rect x="512" y="280" width="80" height="7" rx="3" fill="#dceeed"/>
  <circle cx="503" cy="300" r="3.5" fill="#9cc6c2"/>
  <rect x="512" y="296" width="100" height="7" rx="3" fill="#dceeed"/>
  <text x="500" y="330" font-size="9.5" fill="#5b6472">学習・スキル・資格を記録</text>
  <rect x="496" y="342" width="120" height="34" rx="9" fill="#17a39c"/>
  <text x="556" y="357" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI伴走</text>
  <text x="556" y="370" font-size="9" fill="#dff3f1" text-anchor="middle">次の一手を個別に提案</text>
  <rect x="496" y="384" width="120" height="22" rx="7" fill="#e6edf8"/>
  <text x="556" y="399" font-size="9" fill="#2a4f86" text-anchor="middle">留学・ラボ・企業マッチング</text>
  <rect x="496" y="414" width="120" height="22" rx="7" fill="#e9f4f3"/>
  <text x="556" y="429" font-size="9" fill="#0c6b66" text-anchor="middle">RAGで窓口を省力化</text>
  <text x="556" y="463" font-size="9" fill="#7fa0c8" text-anchor="middle">必要な個人へダイレクト投下</text>
  <text x="742" y="216" font-size="13" font-weight="700" fill="#a9d9d4" text-anchor="middle">統合する</text>
  <text x="742" y="240" font-size="11.5" fill="#dff3f1" text-anchor="middle">情報・データ</text>
  <text x="742" y="258" font-size="11.5" fill="#dff3f1" text-anchor="middle">サポート・機会</text>
  <line x1="678" y1="278" x2="806" y2="278" stroke="#2f4a72" stroke-width="1"/>
  <text x="742" y="300" font-size="11" font-weight="700" fill="#7fd6cf" text-anchor="middle">CV-DB ＋ AI伴走</text>
  <text x="742" y="318" font-size="11" font-weight="700" fill="#7fd6cf" text-anchor="middle">＋ RAG</text>
  <line x1="678" y1="336" x2="806" y2="336" stroke="#2f4a72" stroke-width="1"/>
  <text x="742" y="360" font-size="10.5" fill="#cfe0f0" text-anchor="middle">システムでなく</text>
  <text x="742" y="377" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">〈データ〉を接続</text>
  <rect x="678" y="396" width="128" height="60" rx="10" fill="#ffffff" opacity="0.10"/>
  <text x="742" y="418" font-size="10" fill="#cfe0f0" text-anchor="middle">許諾済データを</text>
  <text x="742" y="434" font-size="10" fill="#cfe0f0" text-anchor="middle">学内・行政・企業で</text>
  <text x="742" y="450" font-size="10.5" font-weight="700" fill="#7fd6cf" text-anchor="middle">共同研究・利活用</text>
  <text x="742" y="478" font-size="10.5" fill="#a9d9d4" text-anchor="middle">統合分析 → 経営判断を迅速化</text>
  <path d="M850 240 L988 161" stroke="#0f8a86" stroke-width="7" fill="none" opacity="0.34" stroke-linecap="round"/>
  <path d="M850 285 L988 245" stroke="#0f8a86" stroke-width="7" fill="none" opacity="0.34" stroke-linecap="round"/>
  <path d="M850 390 L988 409" stroke="#0f8a86" stroke-width="7" fill="none" opacity="0.34" stroke-linecap="round"/>
  <path d="M850 435 L988 493" stroke="#0f8a86" stroke-width="7" fill="none" opacity="0.34" stroke-linecap="round"/>
  <text x="990" y="116" font-size="13" font-weight="700" fill="#0c6b66">AI打ち手（A–D・課題と1:1）</text>
  <rect x="990" y="124" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="990" y="124" width="6" height="74" rx="3" fill="url(#vTeal)"/>
  <circle cx="1016" cy="148" r="11" fill="#e0f1f0"/>
  <text x="1016" y="153" font-size="13" font-weight="700" fill="#0c6b66" text-anchor="middle">A</text>
  <text x="1036" y="152" font-size="12.5" font-weight="700" fill="#0c6b66">指導負担を軽減し研究時間を確保</text>
  <text x="1006" y="176" font-size="10.5" fill="#46505e">AI多言語支援・ラボ共通支援・</text>
  <text x="1006" y="191" font-size="10.5" fill="#46505e">支援者の接続</text>
  <rect x="990" y="208" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="990" y="208" width="6" height="74" rx="3" fill="url(#vTeal)"/>
  <circle cx="1016" cy="232" r="11" fill="#e0f1f0"/>
  <text x="1016" y="237" font-size="13" font-weight="700" fill="#0c6b66" text-anchor="middle">B</text>
  <text x="1036" y="236" font-size="12.5" font-weight="700" fill="#0c6b66">院生の研究力を向上</text>
  <text x="1006" y="260" font-size="10.5" fill="#46505e">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="1006" y="275" font-size="10.5" fill="#46505e">留学・ラボ・企業をマッチング</text>
  <rect x="990" y="372" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="990" y="372" width="6" height="74" rx="3" fill="url(#vTeal)"/>
  <circle cx="1016" cy="396" r="11" fill="#e0f1f0"/>
  <text x="1016" y="401" font-size="13" font-weight="700" fill="#0c6b66" text-anchor="middle">C</text>
  <text x="1036" y="400" font-size="12.5" font-weight="700" fill="#0c6b66">個別最適な情報を直に届ける</text>
  <text x="1006" y="424" font-size="10.5" fill="#46505e">①学生のニーズ＋②全学の支援情報を</text>
  <text x="1006" y="439" font-size="10.5" fill="#46505e">突合し、必要な個人へ投下</text>
  <rect x="990" y="456" width="250" height="74" rx="11" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="990" y="456" width="6" height="74" rx="3" fill="url(#vTeal)"/>
  <circle cx="1016" cy="480" r="11" fill="#e0f1f0"/>
  <text x="1016" y="485" font-size="13" font-weight="700" fill="#0c6b66" text-anchor="middle">D</text>
  <text x="1036" y="484" font-size="12.5" font-weight="700" fill="#0c6b66">支援者の労力を削減・効率化</text>
  <text x="1006" y="508" font-size="10.5" fill="#46505e">反復・窓口業務をRAGで省力化</text>
  <text x="1006" y="523" font-size="10.5" fill="#46505e">IR・成果・回答を自動収集し統合分析</text>
  <rect x="40" y="548" width="700" height="56" rx="12" fill="#102441"/>
  <circle cx="74" cy="576" r="15" fill="#ffffff"/>
  <g transform="translate(74,576)" stroke="#17a39c" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="102" y="572" font-size="16" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="102" y="591" font-size="11" fill="#a9d9d4">研究者と支援者が躍動</text>
  <circle cx="300" cy="568" r="3" fill="#7fd6cf"/>
  <text x="312" y="572" font-size="11" fill="#ffffff">研究力 ↑</text>
  <circle cx="300" cy="589" r="3" fill="#7fd6cf"/>
  <text x="312" y="593" font-size="11" fill="#ffffff">国際性 ↑</text>
  <circle cx="410" cy="568" r="3" fill="#7fd6cf"/>
  <text x="422" y="572" font-size="11" fill="#ffffff">修了率 ↑</text>
  <circle cx="410" cy="589" r="3" fill="#7fd6cf"/>
  <text x="422" y="593" font-size="11" fill="#ffffff">中退率 ↓</text>
  <circle cx="520" cy="568" r="3" fill="#7fd6cf"/>
  <text x="532" y="572" font-size="11" fill="#ffffff">研究時間 ↑</text>
  <circle cx="520" cy="589" r="3" fill="#7fd6cf"/>
  <text x="532" y="593" font-size="11" fill="#ffffff">経営判断↑</text>
  <circle cx="638" cy="568" r="3" fill="#7fd6cf"/>
  <text x="650" y="572" font-size="11" fill="#ffffff">学外連携</text>
  <circle cx="638" cy="589" r="3" fill="#7fd6cf"/>
  <text x="650" y="593" font-size="11" fill="#ffffff">アプリ外販</text>
  <text x="754" y="544" font-size="10.5" font-weight="700" fill="#8a93a0">想定KPI（導入後の試算イメージ）</text>
  <rect x="754" y="550" width="116" height="54" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="754" y="550" width="5" height="54" rx="2.5" fill="url(#vTeal)"/>
  <text x="772" y="582" font-size="21" font-weight="700" fill="#0c6b66">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="772" y="597" font-size="9.5" fill="#5b6472">教員の研究時間</text>
  <rect x="878" y="550" width="116" height="54" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="878" y="550" width="5" height="54" rx="2.5" fill="url(#vTeal)"/>
  <text x="896" y="582" font-size="21" font-weight="700" fill="#0c6b66">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="896" y="597" font-size="9.5" fill="#5b6472">定型問い合わせ</text>
  <rect x="1002" y="550" width="116" height="54" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="1002" y="550" width="5" height="54" rx="2.5" fill="url(#vNavy)"/>
  <text x="1020" y="582" font-size="21" font-weight="700" fill="#2a4f86">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1020" y="597" font-size="9.5" fill="#5b6472">院生の研究力</text>
  <rect x="1126" y="550" width="114" height="54" rx="10" fill="#ffffff" filter="url(#vShS)"/>
  <rect x="1126" y="550" width="5" height="54" rx="2.5" fill="url(#vNavy)"/>
  <text x="1144" y="582" font-size="21" font-weight="700" fill="#2a4f86">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1144" y="597" font-size="9.5" fill="#5b6472">修了率（中退↓）</text>
  <path d="M40 624 L1206 624 L1240 656 L1206 688 L40 688 Z" fill="url(#vHdr)"/>
  <text x="640" y="661" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-42：バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D→中央=接続基盤(appMockup内蔵)→右=打ち手A-D、流れを塊矢印で。白基調クリーン・ネイビー×tealの寒色クール・airy密度。goalBurst帯＋想定KPI帯。A-D課題↔打ち手1:1対応。 -->
