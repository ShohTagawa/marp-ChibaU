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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8902f"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gHub" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f5a623"/><stop offset="1" stop-color="#e07b1f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6b733"/><stop offset="1" stop-color="#d9791f"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f5a623" stop-opacity="0.30"/><stop offset="1" stop-color="#f5a623" stop-opacity="0"/></radialGradient>
    <radialGradient id="gBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe7b0" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe7b0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#a85a16" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#a85a16" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#e07b1f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」を繋ぐ接続基盤</text>
  <rect x="1106" y="13" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="60" width="1280" height="32" fill="#FBEDE2"/>
  <text x="40" y="81" font-size="15" font-weight="700" fill="#b85d18">分散する〈情報・データ・支援・機会〉を1つの基盤に接続し、研究者と支援者が躍動する大学へ</text>
  <text x="78" y="116" font-size="14" font-weight="700" fill="#b85d18">課題：資源が散在・支援が届かない</text>
  <text x="1202" y="116" font-size="14" font-weight="700" fill="#b85d18" text-anchor="end">AI打ち手（課題と1:1対応）</text>
  <g font-size="12.5" fill="#3a2c1c">
    <rect x="40" y="126" width="278" height="68" rx="12" fill="#FFF6EC" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="64" cy="150" r="13" fill="#e07b1f"/><text x="64" y="155" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="86" y="148" font-size="13" font-weight="700" fill="#b85d18">教員の業務負荷が急増</text>
    <text x="86" y="167" font-size="11.5" fill="#5a4736">院生の多様化・研究費申請・評価資料・</text>
    <text x="86" y="183" font-size="11.5" fill="#5a4736">学振添削・全員留学で指導が限界</text>
    <rect x="40" y="202" width="278" height="68" rx="12" fill="#FFF6EC" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="64" cy="226" r="13" fill="#e07b1f"/><text x="64" y="231" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="86" y="224" font-size="13" font-weight="700" fill="#b85d18">人材育成が多様化・高度化</text>
    <text x="86" y="243" font-size="11.5" fill="#5a4736">成功モデルが多様化し求める水準も上昇</text>
    <text x="86" y="259" font-size="11.5" fill="#5a4736">個別育成と資源の最適投下が必須</text>
    <rect x="40" y="278" width="278" height="68" rx="12" fill="#FFF6EC" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="64" cy="302" r="13" fill="#e07b1f"/><text x="64" y="307" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="86" y="300" font-size="13" font-weight="700" fill="#b85d18">大学→個人のミッシングリンク</text>
    <text x="86" y="319" font-size="11.5" fill="#5a4736">支援が乱立・重複・分散し、</text>
    <text x="86" y="335" font-size="11.5" fill="#5a4736">真に必要な個人に届かない</text>
    <rect x="40" y="354" width="278" height="68" rx="12" fill="#FFF6EC" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="64" cy="378" r="13" fill="#e07b1f"/><text x="64" y="383" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="86" y="376" font-size="13" font-weight="700" fill="#b85d18">支援者の実践知が活用されない</text>
    <text x="86" y="395" font-size="11.5" fill="#5a4736">システム乱立・データ分散・異動で</text>
    <text x="86" y="411" font-size="11.5" fill="#5a4736">手続きが反復しゼロリセット</text>
  </g>
  <g stroke="#e8b97a" stroke-width="1.6" fill="none">
    <path d="M318 160 C420 160 440 250 522 268"/>
    <path d="M318 236 C420 236 450 268 522 282"/>
    <path d="M318 312 C420 312 450 296 522 296"/>
    <path d="M318 388 C420 388 440 320 522 312"/>
  </g>
  <circle cx="624" cy="290" r="150" fill="url(#gGlow)"/>
  <circle cx="624" cy="290" r="92" fill="url(#gHub)" filter="url(#sh)"/>
  <text x="624" y="278" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="624" y="302" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="624" y="324" font-size="11" fill="#fff3df" text-anchor="middle">CVデータ × AI伴走</text>
  <g stroke="#e07b1f" stroke-width="3" fill="none">
    <path d="M716 268 C800 250 820 160 902 160" marker-end="url(#mA)"/>
    <path d="M716 282 C800 282 820 236 902 236" marker-end="url(#mA)"/>
    <path d="M716 296 C800 296 820 312 902 312" marker-end="url(#mA)"/>
    <path d="M716 312 C800 330 820 388 902 388" marker-end="url(#mA)"/>
  </g>
  <g font-size="12.5">
    <rect x="902" y="126" width="338" height="68" rx="12" fill="#ffffff" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="926" cy="150" r="13" fill="#1f8f6e"/><text x="926" y="155" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="948" y="148" font-size="13" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
    <text x="948" y="167" font-size="11.5" fill="#46534d">AI多言語支援・ラボ共通支援・</text>
    <text x="948" y="183" font-size="11.5" fill="#46534d">支援者どうしを接続</text>
    <rect x="902" y="202" width="338" height="68" rx="12" fill="#ffffff" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="926" cy="226" r="13" fill="#1f8f6e"/><text x="926" y="231" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="948" y="224" font-size="13" font-weight="700" fill="#16624b">院生の研究力を向上</text>
    <text x="948" y="243" font-size="11.5" fill="#46534d">CVデータベース＋AI伴走で段階別支援</text>
    <text x="948" y="259" font-size="11.5" fill="#46534d">留学・ラボ・企業をマッチング</text>
    <rect x="902" y="278" width="338" height="68" rx="12" fill="#ffffff" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="926" cy="302" r="13" fill="#1f8f6e"/><text x="926" y="307" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="948" y="300" font-size="13" font-weight="700" fill="#16624b">最適な情報を直に届ける</text>
    <text x="948" y="319" font-size="11.5" fill="#46534d">学生のニーズ × 全学の支援情報を</text>
    <text x="948" y="335" font-size="11.5" fill="#46534d">突合し、必要な個人へダイレクト投下</text>
    <rect x="902" y="354" width="338" height="68" rx="12" fill="#ffffff" stroke="#f0d6b6" filter="url(#shS)"/>
    <circle cx="926" cy="378" r="13" fill="#1f8f6e"/><text x="926" y="383" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="948" y="376" font-size="13" font-weight="700" fill="#16624b">支援者の労力を削減・効率化</text>
    <text x="948" y="395" font-size="11.5" fill="#46534d">基盤でデータ接続→AI分析、窓口は</text>
    <text x="948" y="411" font-size="11.5" fill="#46534d">RAGで省力化、IR・成果を自動統合</text>
  </g>
  <rect x="40" y="438" width="1200" height="106" rx="14" fill="#FFF6EC" stroke="#f0d6b6" filter="url(#shS)"/>
  <circle cx="148" cy="491" r="86" fill="url(#gBurst)"/>
  <text x="148" y="465" font-size="12" font-weight="700" fill="#b85d18" text-anchor="middle">想定／試算</text>
  <text x="148" y="510" font-size="48" font-weight="700" fill="#e07b1f" text-anchor="middle">+3h</text>
  <text x="148" y="532" font-size="12" font-weight="700" fill="#5a4736" text-anchor="middle">教員の研究時間 ／週</text>
  <line x1="262" y1="458" x2="262" y2="524" stroke="#f0d6b6" stroke-width="1.4"/>
  <text x="360" y="478" font-size="11.5" font-weight="700" fill="#b85d18" text-anchor="middle">想定／試算</text>
  <text x="360" y="510" font-size="30" font-weight="700" fill="#e07b1f" text-anchor="middle">−50%</text>
  <text x="360" y="532" font-size="11.5" fill="#5a4736" text-anchor="middle">定型問い合わせ</text>
  <line x1="466" y1="458" x2="466" y2="524" stroke="#f0d6b6" stroke-width="1.4"/>
  <text x="566" y="478" font-size="11.5" font-weight="700" fill="#b85d18" text-anchor="middle">想定／試算</text>
  <text x="566" y="510" font-size="30" font-weight="700" fill="#e07b1f" text-anchor="middle">+20pt</text>
  <text x="566" y="532" font-size="11.5" fill="#5a4736" text-anchor="middle">院生の研究力</text>
  <line x1="672" y1="458" x2="672" y2="524" stroke="#f0d6b6" stroke-width="1.4"/>
  <text x="772" y="478" font-size="11.5" font-weight="700" fill="#b85d18" text-anchor="middle">想定／試算</text>
  <text x="772" y="510" font-size="30" font-weight="700" fill="#e07b1f" text-anchor="middle">+5pt</text>
  <text x="772" y="532" font-size="11.5" fill="#5a4736" text-anchor="middle">修了率（中退率↓）</text>
  <line x1="878" y1="458" x2="878" y2="524" stroke="#f0d6b6" stroke-width="1.4"/>
  <text x="1058" y="476" font-size="12" font-weight="700" fill="#b85d18" text-anchor="middle">副次効果</text>
  <text x="1058" y="498" font-size="11.5" fill="#5a4736" text-anchor="middle">許諾済データを学内・行政・企業で利活用</text>
  <text x="1058" y="516" font-size="11.5" fill="#5a4736" text-anchor="middle">統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M40 560 L1206 560 L1240 593 L1206 626 L40 626 Z" fill="url(#gGoal)"/>
  <text x="40" y="586" font-size="13" fill="#fff3df">GOAL</text>
  <text x="623" y="586" font-size="13.5" fill="#fff3df" text-anchor="middle">分散資源をNexusへ接続 → 学生・教員・支援者・大学のすべてに価値が放射する</text>
  <text x="623" y="610" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">繋ぐほどに研究力が伸び続ける ― Nexus University へ</text>
  <text x="640" y="660" font-size="12" fill="#b0905f" text-anchor="middle">課題A–Dと打ち手A–Dは1:1対応／KPIはすべて想定・試算値</text>
</svg>

<!-- variant-94：ハブ&スポーク（白基調・橙/黄ムード）。左＝課題A–D、中央＝接続基盤Nexus（グロー付きヒーローノード）、右＝AI打ち手A–D（1:1対応）。下＝kpiBand（巨大数字+3hを主役にgoalBurst）＋GOAL帯。KPIは全て想定/試算明示。 -->
</content>
</invoke>
