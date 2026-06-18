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
    <linearGradient id="gNavyH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15315c"/><stop offset="1" stop-color="#0c2244"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1bb6a6"/><stop offset="1" stop-color="#0e6f73"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#1f4d86"/><stop offset="1" stop-color="#0c2a4f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#13335f"/><stop offset="0.55" stop-color="#0e6f73"/><stop offset="1" stop-color="#1bb6a6"/></linearGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#34d6c4" stop-opacity="0.55"/><stop offset="0.6" stop-color="#1bb6a6" stop-opacity="0.18"/><stop offset="1" stop-color="#1bb6a6" stop-opacity="0"/></radialGradient>
    <radialGradient id="glowN" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2fd3c0" stop-opacity="0.28"/><stop offset="1" stop-color="#2fd3c0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2244" flood-opacity="0.28"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2244" flood-opacity="0.18"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0e6f73"/></marker>
    <marker id="mN" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1bb6a6"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f3f7fb"/>
  <g opacity="0.5">
    <g fill="#9db8d4"><circle cx="120" cy="180" r="3"/><circle cx="210" cy="150" r="2.4"/><circle cx="300" cy="210" r="2.6"/><circle cx="180" cy="260" r="2.2"/><circle cx="980" cy="160" r="3"/><circle cx="1070" cy="200" r="2.6"/><circle cx="1150" cy="150" r="2.4"/><circle cx="1040" cy="260" r="2.2"/><circle cx="150" cy="470" r="2.6"/><circle cx="260" cy="520" r="2.4"/><circle cx="1090" cy="470" r="2.6"/><circle cx="1170" cy="520" r="2.4"/><circle cx="620" cy="640" r="2.6"/><circle cx="520" cy="610" r="2.2"/><circle cx="740" cy="620" r="2.2"/><circle cx="430" cy="560" r="2"/><circle cx="850" cy="560" r="2"/></g>
    <g stroke="#bcd0e6" stroke-width="1" fill="none"><path d="M120 180 L210 150 L300 210"/><path d="M210 150 L180 260"/><path d="M980 160 L1070 200 L1150 150"/><path d="M1070 200 L1040 260"/><path d="M150 470 L260 520"/><path d="M1090 470 L1170 520"/><path d="M520 610 L620 640 L740 620"/><path d="M300 210 L520 610" opacity="0.5"/><path d="M1040 260 L850 560" opacity="0.5"/></g>
  </g>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gNavyH)"/>
  <rect x="0" y="58" width="1280" height="4" fill="#1bb6a6"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#e3f2f0"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#0e6f73">学内に散る〈情報・データ・サポート・機会〉を1つの接続基盤に ― 研究者と支援者が躍動する大学へ</text>
  <text x="58" y="124" font-size="13.5" font-weight="700" fill="#c2683a">課題：分散・重複・属人化</text>
  <g>
    <rect x="40" y="134" width="252" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="40" y="134" width="6" height="80" rx="3" fill="#e08a4d"/>
    <text x="58" y="156" font-size="13.5" font-weight="700" fill="#13315a">A 教員の業務負荷が急増</text>
    <text x="58" y="176" font-size="11.5" fill="#475569">院生の多様化(社会人・留学生・他分野)</text>
    <text x="58" y="194" font-size="11.5" fill="#475569">申請・評価・添削・全員留学で限界</text>
    <rect x="40" y="222" width="252" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="40" y="222" width="6" height="80" rx="3" fill="#e08a4d"/>
    <text x="58" y="244" font-size="13.5" font-weight="700" fill="#13315a">B 人材育成が多様化・高度化</text>
    <text x="58" y="264" font-size="11.5" fill="#475569">成功モデルが多様化・水準は上昇</text>
    <text x="58" y="282" font-size="11.5" fill="#475569">個別の能力育成と資源最適化が必須</text>
    <rect x="40" y="310" width="252" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="40" y="310" width="6" height="80" rx="3" fill="#e08a4d"/>
    <text x="58" y="332" font-size="13.5" font-weight="700" fill="#13315a">C 大学→個人のミッシングリンク</text>
    <text x="58" y="352" font-size="11.5" fill="#475569">支援が乱立・重複・分散</text>
    <text x="58" y="370" font-size="11.5" fill="#475569">真に必要な個人へ届かない</text>
    <rect x="40" y="398" width="252" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="40" y="398" width="6" height="80" rx="3" fill="#e08a4d"/>
    <text x="58" y="420" font-size="13.5" font-weight="700" fill="#13315a">D 実践知が活かされない</text>
    <text x="58" y="440" font-size="11.5" fill="#475569">同じ手続きの反復・データ分散</text>
    <text x="58" y="458" font-size="11.5" fill="#475569">異動でゼロリセット</text>
  </g>
  <g stroke="#9bb6cf" stroke-width="1.5" fill="none" opacity="0.85">
    <path d="M292 174 C360 174 392 250 456 286"/>
    <path d="M292 262 C360 262 400 286 456 300"/>
    <path d="M292 350 C360 350 400 326 456 314"/>
    <path d="M292 438 C360 438 392 360 456 330"/>
  </g>
  <circle cx="528" cy="308" r="180" fill="url(#glowN)"/>
  <circle cx="528" cy="308" r="100" fill="url(#gNexus)" filter="url(#sh)"/>
  <circle cx="528" cy="308" r="100" fill="none" stroke="#1bb6a6" stroke-width="2"/>
  <text x="528" y="290" font-size="14" font-weight="700" fill="#7fe6da" text-anchor="middle">NEXUS</text>
  <text x="528" y="316" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="528" y="340" font-size="11.5" fill="#cfe6f5" text-anchor="middle">許諾済データを安全に統合</text>
  <g>
    <circle cx="470" cy="232" r="22" fill="#ffffff" filter="url(#shS)"/>
    <g transform="translate(470,232)" stroke="#0e6f73" stroke-width="1.7" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-11 M-7 3 H-11 M7 -3 H11 M7 3 H11 M-3 -7 V-11 M3 -7 V-11 M-3 7 V11 M3 7 V11"/></g>
    <text x="470" y="206" font-size="10.5" font-weight="700" fill="#0e6f73" text-anchor="middle">AI分析</text>
    <circle cx="586" cy="232" r="22" fill="#ffffff" filter="url(#shS)"/>
    <g transform="translate(586,232)" stroke="#0e6f73" stroke-width="1.7" fill="none"><path d="M-8 6 V-2 M-3 6 V-6 M2 6 V-9 M7 6 V-4"/></g>
    <text x="586" y="206" font-size="10.5" font-weight="700" fill="#0e6f73" text-anchor="middle">IR統合</text>
  </g>
  <g>
    <rect x="476" y="420" width="104" height="62" rx="9" fill="#ffffff" filter="url(#shS)"/>
    <rect x="476" y="420" width="104" height="62" rx="9" fill="none" stroke="#cdd9e6" stroke-width="1"/>
    <rect x="484" y="428" width="44" height="46" rx="5" fill="url(#gTeal)"/>
    <rect x="490" y="435" width="32" height="7" rx="2" fill="#ffffff" opacity="0.9"/>
    <rect x="490" y="446" width="22" height="5" rx="2" fill="#ffffff" opacity="0.6"/>
    <rect x="490" y="455" width="32" height="5" rx="2" fill="#ffffff" opacity="0.5"/>
    <rect x="490" y="464" width="18" height="5" rx="2" fill="#ffffff" opacity="0.5"/>
    <text x="538" y="442" font-size="11" font-weight="700" fill="#13315a">学生アプリ</text>
    <text x="538" y="460" font-size="10" fill="#475569">CVを記録</text>
    <text x="538" y="474" font-size="10" fill="#475569">AIが伴走</text>
  </g>
  <g stroke="#1bb6a6" stroke-width="2.6" fill="none">
    <path d="M600 286 C672 250 700 192 760 178" marker-end="url(#mN)"/>
    <path d="M620 300 C690 290 720 270 760 266" marker-end="url(#mN)"/>
    <path d="M620 316 C690 326 720 346 760 354" marker-end="url(#mN)"/>
    <path d="M600 330 C672 366 700 424 760 442" marker-end="url(#mN)"/>
  </g>
  <g>
    <rect x="766" y="138" width="478" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="766" y="138" width="6" height="80" rx="3" fill="#1bb6a6"/>
    <circle cx="796" cy="178" r="15" fill="#dff3f0"/><g transform="translate(796,179)" stroke="#0e6f73" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-10 8 A6 6 0 0 1 0 7"/><path d="M0 7 A6 6 0 0 1 11 8"/></g>
    <text x="822" y="162" font-size="13.5" font-weight="700" fill="#0e6f73">A 教員の指導負担を軽減し研究時間を確保</text>
    <text x="822" y="184" font-size="11.5" fill="#475569">AI多言語支援・ラボ共通支援・支援者を接続</text>
    <text x="822" y="204" font-size="11.5" fill="#13315a" font-weight="700">→ 定型を肩代わりし研究に集中</text>
    <rect x="766" y="226" width="478" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="766" y="226" width="6" height="80" rx="3" fill="#1bb6a6"/>
    <circle cx="796" cy="266" r="15" fill="#dff3f0"/><g transform="translate(796,267)" stroke="#0e6f73" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
    <text x="822" y="250" font-size="13.5" font-weight="700" fill="#0e6f73">B 院生の研究力を向上</text>
    <text x="822" y="272" font-size="11.5" fill="#475569">CVデータベース＋AI伴走で段階別の個別支援</text>
    <text x="822" y="292" font-size="11.5" fill="#13315a" font-weight="700">→ 留学・ラボ・企業マッチング</text>
    <rect x="766" y="314" width="478" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="766" y="314" width="6" height="80" rx="3" fill="#1bb6a6"/>
    <circle cx="796" cy="354" r="15" fill="#dff3f0"/><g transform="translate(796,354)" stroke="#0e6f73" stroke-width="2" fill="none"><circle cx="0" cy="0" r="3.5"/><path d="M0 -8 V-4 M0 8 V4 M-8 0 H-4 M8 0 H4"/></g>
    <text x="822" y="338" font-size="13.5" font-weight="700" fill="#0e6f73">C 個別最適な情報を直に届ける</text>
    <text x="822" y="360" font-size="11.5" fill="#475569">①学生のニーズ ＋ ②全学の支援情報を突合</text>
    <text x="822" y="380" font-size="11.5" fill="#13315a" font-weight="700">→ 必要な個人へダイレクト投下</text>
    <rect x="766" y="402" width="478" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/><rect x="766" y="402" width="6" height="80" rx="3" fill="#1bb6a6"/>
    <circle cx="796" cy="442" r="15" fill="#dff3f0"/><g transform="translate(796,442)" stroke="#0e6f73" stroke-width="2" fill="none"><path d="M-8 6 V0 M-3 6 V-4 M2 6 V-7 M7 6 V-2"/></g>
    <text x="822" y="426" font-size="13.5" font-weight="700" fill="#0e6f73">D 支援者の労力削減・効率化</text>
    <text x="822" y="448" font-size="11.5" fill="#475569">基盤でデータを接続・AI分析、窓口をRAGで省力化</text>
    <text x="822" y="468" font-size="11.5" fill="#13315a" font-weight="700">→ 成果・回答を自動収集し統合分析</text>
  </g>
  <g>
    <rect x="40" y="494" width="704" height="58" rx="12" fill="#eef4fa" stroke="#cfdcea" stroke-width="1"/>
    <text x="60" y="516" font-size="12" font-weight="700" fill="#13315a">段階展開</text>
    <text x="60" y="534" font-size="10.5" fill="#64748b">小さく実証 → 全学へ</text>
    <rect x="150" y="506" width="172" height="34" rx="17" fill="#dff3f0" stroke="#1bb6a6" stroke-width="1.2"/>
    <text x="170" y="528" font-size="11.5" font-weight="700" fill="#0e6f73">Lv1 ラボで実証</text>
    <path d="M324 523 L344 523" stroke="#0e6f73" stroke-width="3" fill="none" marker-end="url(#mT)"/>
    <rect x="350" y="506" width="172" height="34" rx="17" fill="#c9ece7" stroke="#0e6f73" stroke-width="1.2"/>
    <text x="370" y="528" font-size="11.5" font-weight="700" fill="#0e6f73">Lv2 専攻へ展開</text>
    <path d="M524 523 L544 523" stroke="#0e6f73" stroke-width="3" fill="none" marker-end="url(#mT)"/>
    <rect x="550" y="506" width="180" height="34" rx="17" fill="url(#gTeal)"/>
    <text x="640" y="528" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 全学・外販</text>
  </g>
  <circle cx="900" cy="600" r="120" fill="url(#gBurst)"/>
  <path d="M40 568 L1206 568 L1240 606 L1206 644 L40 644 Z" fill="url(#gGoal)"/>
  <text x="58" y="592" font-size="13.5" font-weight="700" fill="#ffffff">想定KPI（試算）</text>
  <g>
    <rect x="180" y="576" width="172" height="32" rx="8" fill="#ffffff" opacity="0.16"/>
    <text x="266" y="597" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">研究時間 ＋3h／週</text>
    <rect x="362" y="576" width="172" height="32" rx="8" fill="#ffffff" opacity="0.16"/>
    <text x="448" y="597" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">定型問い合わせ −50%</text>
    <rect x="544" y="576" width="160" height="32" rx="8" fill="#ffffff" opacity="0.16"/>
    <text x="624" y="597" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">研究力 ＋20pt</text>
    <rect x="714" y="576" width="172" height="32" rx="8" fill="#ffffff" opacity="0.16"/>
    <text x="800" y="597" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">修了率 ＋5pt（中退↓）</text>
  </g>
  <text x="623" y="630" font-size="16.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexusが学内資源を接続し、研究者・支援者が躍動する大学へ</text>
  <text x="640" y="678" font-size="11.5" fill="#7a8aa0" text-anchor="middle">副次効果：許諾済データの共同研究活用（学内・行政・企業）／統合分析で経営判断を迅速化／アプリ外販　※KPIは想定・試算値</text>
</svg>

<!-- variant-31：ハブ&スポーク(寒色ネイビー×teal)。0層に世界地図風ドット＆結線。左=課題A-D、中央=接続基盤Nexus(AIチップ/IR/appMockup)、右=AI打ち手A-D(1:1対応)。下=stageBand(Lv1→Lv3)＋goalBurst(GOAL帯)。KPIは想定/試算と明示。 -->
