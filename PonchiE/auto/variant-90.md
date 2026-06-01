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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#13314f"/><stop offset="1" stop-color="#0c2238"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#cfe0ea"/><stop offset="1" stop-color="#9fc0d4"/></linearGradient>
    <linearGradient id="gStep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f7e8c"/><stop offset="1" stop-color="#12455a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1aa0a0"/><stop offset="1" stop-color="#0d5d62"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16486b"/><stop offset="1" stop-color="#0f3552"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1aa0a0" stop-opacity="0.55"/><stop offset="1" stop-color="#1aa0a0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2238" flood-opacity="0.28"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2238" flood-opacity="0.18"/></filter>
    <marker id="mC" markerWidth="11" markerHeight="11" refX="6" refY="3.2" orient="auto"><path d="M0 0 L7.5 3.2 L0 6.4 Z" fill="#0d5d62"/></marker>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#1f7e8c" stroke-width="0.7" opacity="0.16"/></pattern>
    <pattern id="gridF" width="160" height="160" patternUnits="userSpaceOnUse"><path d="M160 0 L0 0 0 160" fill="none" stroke="#13314f" stroke-width="1" opacity="0.14"/></pattern>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f4f8fb"/>
  <rect x="0" y="88" width="1280" height="632" fill="url(#grid)"/>
  <rect x="0" y="88" width="1280" height="632" fill="url(#gridF)"/>
  <g stroke="#16486b" stroke-width="0.9" opacity="0.30" fill="none"><path d="M64 660 L64 612"/><path d="M64 636 L1216 636" stroke-dasharray="2 5"/><path d="M1216 660 L1216 612"/><path d="M68 636 L80 632"/><path d="M68 636 L80 640"/><path d="M1212 636 L1200 632"/><path d="M1212 636 L1200 640"/></g>
  <text x="632" y="630" font-size="10" fill="#16486b" opacity="0.5" text-anchor="middle">段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）</text>
  <path d="M0 640 L360 640 L820 300 L1280 300 L1280 720 L0 720 Z" fill="url(#gSlope)" opacity="0.45"/>
  <path d="M0 640 L360 640 L820 300 L1280 300" fill="none" stroke="#16486b" stroke-width="1.6" opacity="0.4" stroke-dasharray="7 6"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（ロードマップ）</text>
  <rect x="1100" y="12" width="144" height="32" rx="8" fill="#ffffff"/>
  <image href="../src/chiba-logo.png" x="1116" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#dce9f1"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#13314f">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="1130" cy="248" r="190" fill="url(#burst)"/>
  <g transform="translate(40,108)">
    <rect x="0" y="0" width="300" height="38" rx="10" fill="#13314f" filter="url(#shS)"/>
    <circle cx="26" cy="19" r="11" fill="#1f7e8c"/>
    <path d="M21 19 L24.5 23 L31 15" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="46" y="24" font-size="13.5" font-weight="700" fill="#ffffff">いま大学が抱える4つの課題（低地）</text>
  </g>
  <g transform="translate(40,162)">
    <rect x="0" y="0" width="300" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
    <rect x="0" y="0" width="6" height="86" rx="3" fill="#16486b"/>
    <circle cx="28" cy="24" r="12" fill="#e2edf4"/>
    <text x="28" y="29" font-size="13" font-weight="700" fill="#16486b" text-anchor="middle">A</text>
    <text x="48" y="29" font-size="12.5" font-weight="700" fill="#13314f">教員の業務負荷が急増</text>
    <text x="20" y="52" font-size="10" fill="#5a6b78">院生の多様化（社会人・留学生・他分野）</text>
    <text x="20" y="68" font-size="10" fill="#5a6b78">申請・評価・学振添削・全員留学で限界</text>
  </g>
  <g transform="translate(40,260)">
    <rect x="0" y="0" width="300" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
    <rect x="0" y="0" width="6" height="86" rx="3" fill="#16486b"/>
    <circle cx="28" cy="24" r="12" fill="#e2edf4"/>
    <text x="28" y="29" font-size="13" font-weight="700" fill="#16486b" text-anchor="middle">B</text>
    <text x="48" y="29" font-size="12.5" font-weight="700" fill="#13314f">研究人材育成が多様化・高度化</text>
    <text x="20" y="52" font-size="10" fill="#5a6b78">成功モデルが多様化し求める水準も上昇</text>
    <text x="20" y="68" font-size="10" fill="#5a6b78">個別の能力育成と資源の最適投下が必須</text>
  </g>
  <g transform="translate(40,358)">
    <rect x="0" y="0" width="300" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
    <rect x="0" y="0" width="6" height="86" rx="3" fill="#16486b"/>
    <circle cx="28" cy="24" r="12" fill="#e2edf4"/>
    <text x="28" y="29" font-size="13" font-weight="700" fill="#16486b" text-anchor="middle">C</text>
    <text x="48" y="29" font-size="12.5" font-weight="700" fill="#13314f">大学→個人のミッシングリンク</text>
    <text x="20" y="52" font-size="10" fill="#5a6b78">支援が乱立・重複・分散している</text>
    <text x="20" y="68" font-size="10" fill="#5a6b78">必要とする個人に情報が直接届かない</text>
  </g>
  <g transform="translate(40,456)">
    <rect x="0" y="0" width="300" height="86" rx="11" fill="#ffffff" filter="url(#shS)"/>
    <rect x="0" y="0" width="6" height="86" rx="3" fill="#16486b"/>
    <circle cx="28" cy="24" r="12" fill="#e2edf4"/>
    <text x="28" y="29" font-size="13" font-weight="700" fill="#16486b" text-anchor="middle">D</text>
    <text x="48" y="29" font-size="12.5" font-weight="700" fill="#13314f">支援者の実践知が活用されない</text>
    <text x="20" y="52" font-size="10" fill="#5a6b78">同じ手続き・説明・問い合わせの反復</text>
    <text x="20" y="68" font-size="10" fill="#5a6b78">システム乱立・データ分散・異動でゼロ化</text>
  </g>
  <text x="356" y="556" font-size="12" font-weight="700" fill="#0d5d62">課題A–Dに1:1で対応するAI打ち手を、低地→高地へ昇りながら実装する</text>
  <path d="M360 540 L1060 196" fill="none" stroke="#0d5d62" stroke-width="3" opacity="0.5" stroke-linecap="round" stroke-dasharray="1 9"/>
  <g transform="translate(372,488)">
    <rect x="0" y="0" width="252" height="76" rx="12" fill="url(#gStep)" filter="url(#sh)"/>
    <rect x="0" y="0" width="252" height="22" rx="12" fill="#0e3d4a"/>
    <rect x="0" y="11" width="252" height="11" fill="#0e3d4a"/>
    <text x="14" y="16" font-size="11" font-weight="700" fill="#bfe6ea">取組1 ／ 課題A</text>
    <circle cx="232" cy="11" r="8" fill="#1aa0a0"/>
    <text x="232" y="15" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">1</text>
    <text x="14" y="42" font-size="12.5" font-weight="700" fill="#ffffff">教員の指導負担を軽減</text>
    <text x="14" y="59" font-size="10" fill="#d4eef0">AI多言語支援・ラボ共通支援・支援者接続</text>
    <text x="14" y="72" font-size="9.5" fill="#9fd4d8">→ 研究時間を確保</text>
  </g>
  <g transform="translate(560,392)">
    <rect x="0" y="0" width="252" height="76" rx="12" fill="url(#gStep)" filter="url(#sh)"/>
    <rect x="0" y="0" width="252" height="22" rx="12" fill="#0e3d4a"/>
    <rect x="0" y="11" width="252" height="11" fill="#0e3d4a"/>
    <text x="14" y="16" font-size="11" font-weight="700" fill="#bfe6ea">取組2 ／ 課題B</text>
    <circle cx="232" cy="11" r="8" fill="#1aa0a0"/>
    <text x="232" y="15" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">2</text>
    <text x="14" y="42" font-size="12.5" font-weight="700" fill="#ffffff">院生の研究力を向上</text>
    <text x="14" y="59" font-size="10" fill="#d4eef0">CV-DB＋AI伴走で段階別の個別支援</text>
    <text x="14" y="72" font-size="9.5" fill="#9fd4d8">→ 留学・ラボ・企業マッチング</text>
  </g>
  <g transform="translate(700,296)">
    <rect x="0" y="0" width="252" height="76" rx="12" fill="url(#gStep)" filter="url(#sh)"/>
    <rect x="0" y="0" width="252" height="22" rx="12" fill="#0e3d4a"/>
    <rect x="0" y="11" width="252" height="11" fill="#0e3d4a"/>
    <text x="14" y="16" font-size="11" font-weight="700" fill="#bfe6ea">取組3 ／ 課題C</text>
    <circle cx="232" cy="11" r="8" fill="#1aa0a0"/>
    <text x="232" y="15" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">3</text>
    <text x="14" y="42" font-size="12.5" font-weight="700" fill="#ffffff">個別最適な情報を直に届ける</text>
    <text x="14" y="59" font-size="10" fill="#d4eef0">①学生ニーズ ＋ ②全学の支援情報を突合</text>
    <text x="14" y="72" font-size="9.5" fill="#9fd4d8">→ 必要な個人へダイレクト投下</text>
  </g>
  <g transform="translate(792,200)">
    <rect x="0" y="0" width="252" height="76" rx="12" fill="url(#gStep)" filter="url(#sh)"/>
    <rect x="0" y="0" width="252" height="22" rx="12" fill="#0e3d4a"/>
    <rect x="0" y="11" width="252" height="11" fill="#0e3d4a"/>
    <text x="14" y="16" font-size="11" font-weight="700" fill="#bfe6ea">取組4 ／ 課題D</text>
    <circle cx="232" cy="11" r="8" fill="#1aa0a0"/>
    <text x="232" y="15" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">4</text>
    <text x="14" y="42" font-size="12.5" font-weight="700" fill="#ffffff">支援者の労力を削減・効率化</text>
    <text x="14" y="59" font-size="10" fill="#d4eef0">反復・窓口業務をRAGで省力化</text>
    <text x="14" y="72" font-size="9.5" fill="#9fd4d8">→ IR・成果・回答を自動収集し統合分析</text>
  </g>
  <g transform="translate(372,128)">
    <rect x="0" y="0" width="150" height="64" rx="10" fill="#ffffff" filter="url(#shS)"/>
    <rect x="0" y="0" width="150" height="16" rx="10" fill="#13314f"/>
    <rect x="0" y="8" width="150" height="8" fill="#13314f"/>
    <circle cx="9" cy="8" r="1.8" fill="#7fb0c8"/>
    <circle cx="15" cy="8" r="1.8" fill="#7fb0c8"/>
    <text x="75" y="11.5" font-size="7.5" fill="#cfe0ea" text-anchor="middle">研究×学び アプリ</text>
    <rect x="8" y="24" width="44" height="32" rx="4" fill="#e7f1f6"/>
    <rect x="13" y="29" width="34" height="5" rx="2" fill="#1f7e8c"/>
    <rect x="13" y="38" width="34" height="4" rx="2" fill="#c4d8e3"/>
    <rect x="13" y="46" width="24" height="4" rx="2" fill="#c4d8e3"/>
    <text x="60" y="32" font-size="9" font-weight="700" fill="#13314f">CVデータベース</text>
    <text x="60" y="44" font-size="8" fill="#5a6b78">学内外の学習・スキル・</text>
    <text x="60" y="53" font-size="8" fill="#5a6b78">資格を記録 ＋ AI伴走</text>
  </g>
  <text x="538" y="150" font-size="11.5" font-weight="700" fill="#13314f">接続基盤（Nexus）</text>
  <text x="538" y="168" font-size="10" fill="#5a6b78">システムでなく〈データ〉を接続し、</text>
  <text x="538" y="182" font-size="10" fill="#5a6b78">AIで分析。許諾済データは学内・行政・</text>
  <text x="538" y="196" font-size="10" fill="#5a6b78">企業の共同研究にも活用（アプリ外販も）</text>
  <circle cx="1130" cy="158" r="190" fill="url(#burst)"/>
  <g transform="translate(1010,108)">
    <rect x="0" y="0" width="230" height="300" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
    <g opacity="0.14" stroke="#ffffff" stroke-width="1.1" fill="none"><circle cx="115" cy="150" r="100"/><circle cx="115" cy="150" r="62"/><circle cx="115" cy="150" r="26"/></g>
    <g><path d="M40 34 L52 18 L48 32 L60 30 L46 44 Z" fill="#bdeef0"/><path d="M180 30 L192 16 L188 30 L200 28 L186 42 Z" fill="#bdeef0"/></g>
    <circle cx="40" cy="42" r="14" fill="#ffffff"/>
    <g transform="translate(40,42)" stroke="#0d5d62" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
    <text x="66" y="48" font-size="22" font-weight="700" fill="#ffffff">GOAL</text>
    <text x="20" y="78" font-size="11" fill="#dff4f4">研究者と支援者が躍動する</text>
    <text x="20" y="94" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
    <circle cx="26" cy="120" r="3.2" fill="#bff0f0"/>
    <text x="38" y="124" font-size="12" fill="#ffffff">院生の研究力 ↑</text>
    <circle cx="26" cy="146" r="3.2" fill="#bff0f0"/>
    <text x="38" y="150" font-size="12" fill="#ffffff">標準年限内の修了率 ↑</text>
    <circle cx="26" cy="172" r="3.2" fill="#bff0f0"/>
    <text x="38" y="176" font-size="12" fill="#ffffff">中退率 ↓</text>
    <circle cx="26" cy="198" r="3.2" fill="#bff0f0"/>
    <text x="38" y="202" font-size="12" fill="#ffffff">海外留学・国際性 ↑</text>
    <circle cx="26" cy="224" r="3.2" fill="#bff0f0"/>
    <text x="38" y="228" font-size="12" fill="#ffffff">経営判断の高度化・迅速化</text>
    <rect x="20" y="244" width="190" height="44" rx="9" fill="#ffffff" opacity="0.14"/>
    <text x="115" y="263" font-size="10" fill="#eafafa" text-anchor="middle">学内すべての成果が連鎖的に伸びる</text>
    <text x="115" y="280" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  </g>
  <path d="M1010 220 C988 220 968 252 952 252" fill="none" stroke="#0d5d62" stroke-width="2.6" marker-end="url(#mC)"/>
  <text x="42" y="592" font-size="11" font-weight="700" fill="#16486b">想定KPI（導入後の試算イメージ ／ 確定値ではない）</text>
  <g transform="translate(40,598)">
    <rect x="0" y="0" width="290" height="48" rx="10" fill="url(#gKpi)" filter="url(#shS)"/>
    <text x="16" y="34" font-size="22" font-weight="700" fill="#ffffff">＋3<tspan font-size="11" font-weight="400" fill="#bcd6ea">h/週</tspan></text>
    <text x="92" y="22" font-size="10" fill="#cfe0ea">教員1人あたりの</text>
    <text x="92" y="37" font-size="10" fill="#cfe0ea">研究時間を確保</text>
  </g>
  <g transform="translate(346,598)">
    <rect x="0" y="0" width="290" height="48" rx="10" fill="url(#gKpi)" filter="url(#shS)"/>
    <text x="16" y="34" font-size="22" font-weight="700" fill="#ffffff">−50<tspan font-size="11" font-weight="400" fill="#bcd6ea">%</tspan></text>
    <text x="98" y="22" font-size="10" fill="#cfe0ea">定型問い合わせ・</text>
    <text x="98" y="37" font-size="10" fill="#cfe0ea">窓口業務（RAG）</text>
  </g>
  <g transform="translate(652,598)">
    <rect x="0" y="0" width="290" height="48" rx="10" fill="url(#gKpi)" filter="url(#shS)"/>
    <text x="16" y="34" font-size="22" font-weight="700" fill="#ffffff">＋20<tspan font-size="11" font-weight="400" fill="#bcd6ea">pt</tspan></text>
    <text x="104" y="22" font-size="10" fill="#cfe0ea">院生の研究力</text>
    <text x="104" y="37" font-size="10" fill="#cfe0ea">（自己効力感）</text>
  </g>
  <g transform="translate(958,598)">
    <rect x="0" y="0" width="282" height="48" rx="10" fill="url(#gKpi)" filter="url(#shS)"/>
    <text x="16" y="34" font-size="22" font-weight="700" fill="#ffffff">＋5<tspan font-size="11" font-weight="400" fill="#bcd6ea">pt</tspan></text>
    <text x="92" y="22" font-size="10" fill="#cfe0ea">修了率の改善</text>
    <text x="92" y="37" font-size="10" fill="#cfe0ea">（中退率↓）</text>
  </g>
  <path d="M40 662 L1206 662 L1240 689 L1206 716 L40 716 Z" fill="url(#gHdr)"/>
  <text x="623" y="694" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ駆け上がる</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-90：骨格=ロードマップ旅(対角クライム)。左下=課題A-D(低地)→左下から右上へ昇る斜面に取組1-4(課題A-Dと1:1)→右上GOALバースト(成果列挙)。背景=ブループリント方眼+寸法線(設計図トーン)。配色=ネイビー#13314f+teal#1f7e8c/#1aa0a0の寒色クール。密度=airy。appMockup(CV-DBアプリ)/kpiBand(想定KPI4枚, 試算明示)/goalBurst入り。 -->
