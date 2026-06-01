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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2b8f9e" stop-opacity="0.18"/><stop offset="1" stop-color="#2b8f9e" stop-opacity="0.05"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.20"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ec9554" stop-opacity="0.30"/><stop offset="1" stop-color="#ec9554" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <g opacity="0.9"><path d="M-40 720 L300 720 L620 380 L280 380 Z" fill="url(#gRibbon)"/><path d="M240 720 L580 720 L900 380 L560 380 Z" fill="url(#gRibbon)"/><path d="M520 720 L860 720 L1180 380 L840 380 Z" fill="url(#gRibbon)"/><path d="M-40 560 L1320 80" stroke="#2b8f9e" stroke-width="2" stroke-opacity="0.10" fill="none"/><path d="M-40 640 L1320 160" stroke="#2b8f9e" stroke-width="2" stroke-opacity="0.10" fill="none"/></g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・支援・機会〉を接続 ― 研究者と支援者が躍動する大学へ</text>
  <text x="56" y="124" font-size="13" font-weight="700" fill="#c4632a">課題（A〜D）</text>
  <g font-size="11.5" fill="#333">
    <rect x="40" y="132" width="262" height="78" rx="11" fill="#FBEDE2" stroke="#eccdb4" filter="url(#shSoft)"/>
    <circle cx="64" cy="156" r="13" fill="url(#gWarn)"/><text x="64" y="161" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="86" y="153" font-size="13" font-weight="700" fill="#b85f27">教員の業務負荷が急増</text>
    <text x="56" y="180" font-size="11.5">院生の多様化（社会人・留学生・他分野）</text>
    <text x="56" y="198" font-size="11.5">研究費申請・評価・学振添削・全員留学で限界</text>
    <rect x="40" y="220" width="262" height="78" rx="11" fill="#FBEDE2" stroke="#eccdb4" filter="url(#shSoft)"/>
    <circle cx="64" cy="244" r="13" fill="url(#gWarn)"/><text x="64" y="249" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="86" y="241" font-size="13" font-weight="700" fill="#b85f27">人材育成が多様化・高度化</text>
    <text x="56" y="268" font-size="11.5">成功モデルが多様化／求める水準は上昇</text>
    <text x="56" y="286" font-size="11.5">個別の能力育成と資源の最適投下が必須</text>
    <rect x="40" y="308" width="262" height="78" rx="11" fill="#FBEDE2" stroke="#eccdb4" filter="url(#shSoft)"/>
    <circle cx="64" cy="332" r="13" fill="url(#gWarn)"/><text x="64" y="337" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="86" y="329" font-size="13" font-weight="700" fill="#b85f27">大学→個人のミッシングリンク</text>
    <text x="56" y="356" font-size="11.5">支援が乱立・重複・分散している</text>
    <text x="56" y="374" font-size="11.5">真に必要な個人に届かない</text>
    <rect x="40" y="396" width="262" height="78" rx="11" fill="#FBEDE2" stroke="#eccdb4" filter="url(#shSoft)"/>
    <circle cx="64" cy="420" r="13" fill="url(#gWarn)"/><text x="64" y="425" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="86" y="417" font-size="13" font-weight="700" fill="#b85f27">実践知が共有・蓄積されない</text>
    <text x="56" y="444" font-size="11.5">同じ手続きの反復／システム乱立・分散</text>
    <text x="56" y="462" font-size="11.5">異動でゼロリセットされる</text>
  </g>
  <g stroke="#d2772f" stroke-width="2.4" fill="none" opacity="0.85">
    <path d="M302 171 C400 171 420 280 498 296" marker-end="url(#mW)"/>
    <path d="M302 259 C400 259 430 290 498 304" marker-end="url(#mW)"/>
    <path d="M302 347 C400 347 430 322 498 312" marker-end="url(#mW)"/>
    <path d="M302 435 C400 435 420 330 498 320" marker-end="url(#mW)"/>
  </g>
  <circle cx="600" cy="308" r="150" fill="url(#glow)"/>
  <circle cx="600" cy="308" r="92" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="600" y="296" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="600" y="320" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="600" y="340" font-size="11" fill="#DCEEE5" text-anchor="middle">AI×データを束ねる</text>
  <g transform="translate(600,235)"><circle cx="0" cy="0" r="20" fill="#ffffff" filter="url(#shSoft)"/><g stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-8" y="-8" width="16" height="16" rx="2"/><path d="M-8 -3 H-12 M-8 3 H-12 M8 -3 H12 M8 3 H12 M-3 -8 V-12 M3 -8 V-12 M-3 8 V12 M3 8 V12"/></g></g>
  <g transform="translate(692,374)"><rect x="-22" y="-32" width="44" height="64" rx="7" fill="#ffffff" filter="url(#shSoft)" stroke="#cfe3da"/><rect x="-22" y="-32" width="44" height="14" rx="7" fill="url(#gAccH)"/><rect x="-22" y="-25" width="44" height="7" fill="url(#gAccH)"/><rect x="-15" y="-12" width="30" height="6" rx="2" fill="#cfe3da"/><rect x="-15" y="-1" width="30" height="6" rx="2" fill="#E4F2EC"/><rect x="-15" y="10" width="18" height="6" rx="2" fill="#FBEDE2"/><circle cx="0" cy="25" r="3" fill="#1A7A5E"/></g>
  <text x="692" y="420" font-size="10.5" font-weight="700" fill="#16624b" text-anchor="middle">専用アプリで個人に届く</text>
  <g stroke="#1A7A5E" stroke-width="3" fill="none">
    <path d="M692 264 C800 264 820 178 936 178" marker-end="url(#mA)"/>
    <path d="M692 286 C810 286 830 266 936 266" marker-end="url(#mA)"/>
    <path d="M692 330 C810 330 830 354 936 354" marker-end="url(#mA)"/>
    <path d="M692 352 C800 352 820 442 936 442" marker-end="url(#mA)"/>
  </g>
  <text x="1110" y="124" font-size="13" font-weight="700" fill="#16624b">AI打ち手（A〜Dと1:1対応）</text>
  <g>
    <rect x="936" y="140" width="308" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)" stroke="#cfe3da"/>
    <circle cx="960" cy="164" r="13" fill="url(#gAcc)"/><text x="960" y="169" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="982" y="161" font-size="13" font-weight="700" fill="#1A7A5E">指導負担を軽減し研究時間を確保</text>
    <text x="952" y="188" font-size="11.5" fill="#333">AI多言語支援・ラボ共通支援</text>
    <text x="952" y="206" font-size="11.5" fill="#333">支援者どうしを接続</text>
    <rect x="936" y="228" width="308" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)" stroke="#cfe3da"/>
    <circle cx="960" cy="252" r="13" fill="url(#gAcc)"/><text x="960" y="257" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="982" y="249" font-size="13" font-weight="700" fill="#1A7A5E">院生の研究力を向上</text>
    <text x="952" y="276" font-size="11.5" fill="#333">CVデータベース＋AI伴走で段階別支援</text>
    <text x="952" y="294" font-size="11.5" fill="#333">留学・ラボ・企業マッチング</text>
    <rect x="936" y="316" width="308" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)" stroke="#cfe3da"/>
    <circle cx="960" cy="340" r="13" fill="url(#gAcc)"/><text x="960" y="345" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="982" y="337" font-size="13" font-weight="700" fill="#1A7A5E">個別最適な情報を直に届ける</text>
    <text x="952" y="364" font-size="11.5" fill="#333">学生のニーズ × 全学の支援情報を突合</text>
    <text x="952" y="382" font-size="11.5" fill="#333">必要な個人へダイレクト投下</text>
    <rect x="936" y="404" width="308" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)" stroke="#cfe3da"/>
    <circle cx="960" cy="428" r="13" fill="url(#gAcc)"/><text x="960" y="433" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="982" y="425" font-size="13" font-weight="700" fill="#1A7A5E">支援者の労力を削減・効率化</text>
    <text x="952" y="452" font-size="11.5" fill="#333">データを接続しAI分析／RAGで窓口省力化</text>
    <text x="952" y="470" font-size="11.5" fill="#333">IR・成果・回答を自動収集し統合分析</text>
  </g>
  <rect x="40" y="496" width="660" height="62" rx="12" fill="#E4F2EC" stroke="#bfe0d3"/>
  <text x="56" y="518" font-size="12.5" font-weight="700" fill="#16624b">段階展開</text>
  <g font-size="11" fill="#155a45">
    <rect x="56" y="528" width="196" height="22" rx="11" fill="#ffffff" stroke="#9fd1bd"/><text x="68" y="543" font-size="10.5" font-weight="700" fill="#1A7A5E">Lv1</text><text x="98" y="543" font-size="10.5">接続：データ統合・窓口RAG</text>
    <path d="M252 539 L268 539" stroke="#1A7A5E" stroke-width="2.4" marker-end="url(#mA)" fill="none"/>
    <rect x="270" y="528" width="170" height="22" rx="11" fill="#ffffff" stroke="#9fd1bd"/><text x="282" y="543" font-size="10.5" font-weight="700" fill="#1A7A5E">Lv2</text><text x="312" y="543" font-size="10.5">伴走：個別最適な投下</text>
    <path d="M440 539 L456 539" stroke="#1A7A5E" stroke-width="2.4" marker-end="url(#mA)" fill="none"/>
    <rect x="458" y="528" width="226" height="22" rx="11" fill="url(#gAccH)"/><text x="470" y="543" font-size="10.5" font-weight="700" fill="#ffffff">Lv3</text><text x="500" y="543" font-size="10.5" fill="#ffffff">躍動：共同研究・経営判断・外販</text>
  </g>
  <circle cx="980" cy="527" r="80" fill="url(#gBurst)"/>
  <path d="M716 504 L1206 504 L1240 530 L1206 556 L716 556 Z" fill="url(#gAccH)"/>
  <text x="724" y="524" font-size="12.5" fill="#DCEEE5">副次効果</text>
  <text x="724" y="544" font-size="13" font-weight="700" fill="#ffffff">許諾済データを学内・行政・企業で利活用 ／ 統合分析で経営判断を迅速化 ／ アプリ外販</text>
  <rect x="716" y="568" width="528" height="118" rx="12" fill="#ffffff" filter="url(#sh)" stroke="#cfe3da"/>
  <rect x="716" y="568" width="528" height="26" rx="12" fill="url(#gAcc)"/><rect x="716" y="582" width="528" height="12" fill="url(#gAcc)"/>
  <text x="736" y="586" font-size="13" font-weight="700" fill="#ffffff">想定KPI（想定／試算 ― 効果目標）</text>
  <g>
    <text x="788" y="628" font-size="30" font-weight="700" fill="#1A7A5E" text-anchor="middle">+3h</text><text x="788" y="648" font-size="10.5" fill="#555" text-anchor="middle">教員の研究時間/週</text><text x="788" y="664" font-size="9.5" fill="#999" text-anchor="middle">※想定</text>
    <text x="918" y="628" font-size="30" font-weight="700" fill="#d2772f" text-anchor="middle">−50%</text><text x="918" y="648" font-size="10.5" fill="#555" text-anchor="middle">定型問い合わせ</text><text x="918" y="664" font-size="9.5" fill="#999" text-anchor="middle">※試算</text>
    <text x="1052" y="628" font-size="30" font-weight="700" fill="#1A7A5E" text-anchor="middle">+20pt</text><text x="1052" y="648" font-size="10.5" fill="#555" text-anchor="middle">院生の研究力</text><text x="1052" y="664" font-size="9.5" fill="#999" text-anchor="middle">※想定</text>
    <text x="1182" y="628" font-size="30" font-weight="700" fill="#1A7A5E" text-anchor="middle">+5pt</text><text x="1182" y="648" font-size="10.5" fill="#555" text-anchor="middle">修了率（中退率↓）</text><text x="1182" y="664" font-size="9.5" fill="#999" text-anchor="middle">※試算</text>
  </g>
  <rect x="40" y="568" width="660" height="118" rx="12" fill="#155a45"/>
  <text x="370" y="606" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">分散した学内資源をNexusで接続し、</text>
  <text x="370" y="634" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する大学へ</text>
  <text x="370" y="664" font-size="11.5" fill="#bfe0d3" text-anchor="middle">A〜Dの課題に1:1で打ち手 ／ Lv1→Lv3で段階展開</text>
</svg>

<!-- variant-73：ハブ&スポーク。中央Nexus接続基盤に左の課題A-Dが橙曲線で合流→右へ打ち手A-D(1:1)をteal曲線で放射。背景は左下→右上の青リボン/シェブロン。appMockup(中央下)・goalBurst(橙放射)・stageBand(Lv1→Lv3)・KPIは想定/試算明示。3色制限(teal+warn橙+ニュートラル)。 -->
