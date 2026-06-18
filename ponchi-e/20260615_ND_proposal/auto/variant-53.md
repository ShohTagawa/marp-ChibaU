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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e4a6e"/><stop offset="0.55" stop-color="#137a8f"/><stop offset="1" stop-color="#1f8f6e"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2fa3a8"/><stop offset="1" stop-color="#0f6d73"/></linearGradient>
    <linearGradient id="gAI" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3aa37d"/><stop offset="1" stop-color="#147a55"/></linearGradient>
    <linearGradient id="gTop" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0e6b86"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4f"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd166"/><stop offset="1" stop-color="#f6a121"/></linearGradient>
    <linearGradient id="gFoot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e4a6e"/><stop offset="1" stop-color="#1f8f6e"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.95"/><stop offset="0.6" stop-color="#ffd166" stop-opacity="0.55"/><stop offset="1" stop-color="#ffd166" stop-opacity="0"/></radialGradient>
    <radialGradient id="gSky" cx="0.5" cy="0.2" r="0.9"><stop offset="0" stop-color="#eef6fb"/><stop offset="1" stop-color="#dceaf3"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0e3f57" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e3f57" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0f6d73"/></marker>
    <marker id="mO" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gSky)"/>
  <g opacity="0.09" stroke="#0e4a6e" fill="none" stroke-width="1.2"><circle cx="640" cy="400" r="232"/><ellipse cx="640" cy="400" rx="232" ry="78"/><ellipse cx="640" cy="400" rx="232" ry="150"/><ellipse cx="640" cy="400" rx="92" ry="232"/><ellipse cx="640" cy="400" rx="172" ry="232"/><path d="M408 400 H872"/><path d="M640 168 V632"/></g>
  <g opacity="0.08" stroke="#137a8f" fill="#137a8f"><path d="M150 150 L360 250 L300 430 L120 360 Z" stroke-width="1" fill="none"/><path d="M980 170 L1160 260 L1100 440 L920 380 Z" stroke-width="1" fill="none"/><circle cx="150" cy="150" r="3"/><circle cx="360" cy="250" r="3"/><circle cx="300" cy="430" r="3"/><circle cx="120" cy="360" r="3"/><circle cx="980" cy="170" r="3"/><circle cx="1160" cy="260" r="3"/><circle cx="1100" cy="440" r="3"/><circle cx="920" cy="380" r="3"/><path d="M360 250 L980 170 M300 430 L920 380" stroke-dasharray="5 6" stroke-width="1"/></g>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="60" width="1280" height="34" fill="#0e4a6e" opacity="0.92"/>
  <text x="40" y="83" font-size="15" font-weight="700" fill="#d9eef7">分散する〈情報・データ・支援・機会〉を「接続」し、研究者と支援者が躍動する大学へ ─ 千葉大学・役員ブリーフ</text>
  <text x="40" y="120" font-size="13" font-weight="700" fill="#9aa7b0">課題 A–D</text>
  <g filter="url(#shS)"><rect x="40" y="128" width="248" height="118" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="128" width="248" height="26" rx="13" fill="url(#gWarn)"/><rect x="40" y="141" width="248" height="13" fill="url(#gWarn)"/>
  <text x="56" y="146" font-size="13" font-weight="700" fill="#ffffff">A 教員の業務負荷が急増</text>
  <text x="56" y="174" font-size="11.5" fill="#444">院生の多様化（社会人・留学生・</text>
  <text x="56" y="190" font-size="11.5" fill="#444">他分野）＋研究費申請・評価資料・</text>
  <text x="56" y="206" font-size="11.5" fill="#444">学振添削・全員留学で限界</text>
  <text x="56" y="232" font-size="11.5" font-weight="700" fill="#c4632a">→ 従来手法では回らない</text>
  <g filter="url(#shS)"><rect x="40" y="256" width="248" height="118" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="256" width="248" height="26" rx="13" fill="url(#gWarn)"/><rect x="40" y="269" width="248" height="13" fill="url(#gWarn)"/>
  <text x="56" y="274" font-size="13" font-weight="700" fill="#ffffff">B 育成が多様化・高度化</text>
  <text x="56" y="302" font-size="11.5" fill="#444">成功モデルが多様化し、求める</text>
  <text x="56" y="318" font-size="11.5" fill="#444">水準も上昇</text>
  <text x="56" y="344" font-size="11.5" font-weight="700" fill="#c4632a">→ 個別の能力育成と</text>
  <text x="56" y="360" font-size="11.5" font-weight="700" fill="#c4632a">　 資源の最適投下が必須</text>
  <g filter="url(#shS)"><rect x="40" y="384" width="248" height="118" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="384" width="248" height="26" rx="13" fill="url(#gWarn)"/><rect x="40" y="397" width="248" height="13" fill="url(#gWarn)"/>
  <text x="56" y="402" font-size="13" font-weight="700" fill="#ffffff">C 大学→個人のミッシングリンク</text>
  <text x="56" y="430" font-size="11.5" fill="#444">支援が乱立・重複・分散し、</text>
  <text x="56" y="446" font-size="11.5" fill="#444">真に必要な個人に届かない</text>
  <text x="56" y="472" font-size="11.5" font-weight="700" fill="#c4632a">→ 機会と人がつながらない</text>
  <g filter="url(#shS)"><rect x="40" y="512" width="248" height="118" rx="13" fill="#ffffff"/></g>
  <rect x="40" y="512" width="248" height="26" rx="13" fill="url(#gWarn)"/><rect x="40" y="525" width="248" height="13" fill="url(#gWarn)"/>
  <text x="56" y="530" font-size="13" font-weight="700" fill="#ffffff">D 実践知が活かされない</text>
  <text x="56" y="558" font-size="11.5" fill="#444">同じ手続きの反復／システム乱立・</text>
  <text x="56" y="574" font-size="11.5" fill="#444">データ分散・異動でゼロリセット</text>
  <text x="56" y="600" font-size="11.5" font-weight="700" fill="#c4632a">→ 支援者の知が蓄積されない</text>
  <path d="M296 187 L334 187" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mO)"/>
  <path d="M296 315 L334 315" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mO)"/>
  <path d="M296 443 L334 443" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mO)"/>
  <path d="M296 571 L334 571" stroke="#d2772f" stroke-width="3" fill="none" marker-end="url(#mO)"/>
  <text x="700" y="120" font-size="13" font-weight="700" fill="#9aa7b0">AI打ち手 A–D ＝ Nexus University（基盤→機能→価値の積層）</text>
  <polygon points="364,612 1034,612 1100,634 298,634" fill="#1c7585" filter="url(#sh)"/>
  <text x="699" y="628" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">D 支援者の労力削減 ─ 基盤上でデータ接続＋RAGで反復・窓口を省力化、IR/成果/回答を自動収集</text>
  <polygon points="354,500 1044,500 1092,608 306,608" fill="url(#gTeal)" filter="url(#sh)"/>
  <circle cx="365" cy="554" r="16" fill="#ffffff"/><g transform="translate(365,554)" stroke="#0f6d73" stroke-width="2" fill="none"><rect x="-7" y="-6" width="14" height="12" rx="2"/><path d="M-3 -2 H3 M-3 2 H3 M0 -8 V-6 M-9 0 H-7 M9 0 H7"/></g>
  <text x="704" y="540" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">土台：データ接続基盤 ─ 学内外の人・データ・支援・実践知を1つに接続</text>
  <text x="704" y="562" font-size="11.5" fill="#dff5f0" text-anchor="middle">許諾済データを学内・行政・企業の共同研究で利活用／統合分析で経営判断を迅速化／アプリ外販</text>
  <polygon points="404,388 994,388 1042,496 356,496" fill="url(#gAI)" filter="url(#sh)"/>
  <circle cx="430" cy="442" r="15" fill="#ffffff"/><g transform="translate(430,442)" stroke="#147a55" stroke-width="2" fill="none"><circle cx="0" cy="0" r="6"/><path d="M0 -9 V-6 M0 9 V6 M-9 0 H-6 M9 0 H6"/><circle cx="0" cy="0" r="1.6" fill="#147a55"/></g>
  <text x="710" y="412" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">中段：AI機能 ─ 課題に1:1で効く打ち手</text>
  <text x="466" y="436" font-size="11" fill="#eafaf3">A 多言語支援・ラボ共通支援・</text>
  <text x="466" y="451" font-size="11" fill="#eafaf3">　支援者接続で指導負担↓</text>
  <text x="722" y="436" font-size="11" fill="#eafaf3">B CVデータベース＋AI伴走の</text>
  <text x="722" y="451" font-size="11" fill="#eafaf3">　段階別個別支援・マッチング</text>
  <text x="466" y="476" font-size="11" fill="#eafaf3" text-anchor="start">C 学生入力ニーズ × 全学の支援情報を突合 → 必要な個人へダイレクト投下</text>
  <polygon points="470,300 928,300 976,384 422,384" fill="url(#gTop)" filter="url(#sh)"/>
  <text x="699" y="332" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">頂：Nexus University</text>
  <text x="699" y="356" font-size="11.5" fill="#dff0ed" text-anchor="middle">研究者と支援者が躍動する大学 ─ 機会と人が常時つながる</text>
  <circle cx="699" cy="258" r="46" fill="url(#gBurst)"/>
  <g stroke="#f6a121" stroke-width="2.5"><path d="M699 196 V210 M699 306 V320"/><path d="M637 258 H651 M747 258 H761"/><path d="M656 215 L666 225 M732 291 L742 301 M742 215 L732 225 M666 291 L656 301"/></g>
  <polygon points="588,278 810,278 854,238 832,300 760,236 699,294 638,236 566,300 544,238" fill="none"/>
  <polygon points="699,224 712,250 740,250 718,268 726,294 699,278 672,294 680,268 658,250 686,250" fill="url(#gGoal)" filter="url(#shS)"/>
  <text x="699" y="263" font-size="12" font-weight="700" fill="#7a4e0a" text-anchor="middle">GOAL</text>
  <text x="1062" y="318" font-size="13" font-weight="700" fill="#9aa7b0">想定KPI（想定/試算）</text>
  <g filter="url(#shS)"><rect x="1052" y="328" width="188" height="58" rx="11" fill="#ffffff"/></g>
  <text x="1066" y="352" font-size="22" font-weight="700" fill="#0f6d73">+3h<tspan font-size="12" fill="#6b7280">/週</tspan></text>
  <text x="1066" y="372" font-size="11.5" fill="#555">教員の研究時間（想定）</text>
  <g filter="url(#shS)"><rect x="1052" y="394" width="188" height="58" rx="11" fill="#ffffff"/></g>
  <text x="1066" y="418" font-size="22" font-weight="700" fill="#d2772f">−50<tspan font-size="12" fill="#6b7280">%</tspan></text>
  <text x="1066" y="438" font-size="11.5" fill="#555">定型問い合わせ（試算）</text>
  <g filter="url(#shS)"><rect x="1052" y="460" width="188" height="58" rx="11" fill="#ffffff"/></g>
  <text x="1066" y="484" font-size="22" font-weight="700" fill="#1f8f6e">+20<tspan font-size="12" fill="#6b7280">pt</tspan></text>
  <text x="1066" y="504" font-size="11.5" fill="#555">院生の研究力（想定）</text>
  <g filter="url(#shS)"><rect x="1052" y="526" width="188" height="58" rx="11" fill="#ffffff"/></g>
  <text x="1066" y="550" font-size="22" font-weight="700" fill="#137a8f">+5<tspan font-size="12" fill="#6b7280">pt</tspan></text>
  <text x="1066" y="570" font-size="11.5" fill="#555">修了率（中退率↓・試算）</text>
  <g filter="url(#sh)"><rect x="1052" y="128" width="188" height="166" rx="14" fill="#ffffff"/></g>
  <rect x="1052" y="128" width="188" height="26" rx="14" fill="url(#gTeal)"/><rect x="1052" y="141" width="188" height="13" fill="url(#gTeal)"/>
  <text x="1066" y="146" font-size="12.5" font-weight="700" fill="#ffffff">接続アプリ（イメージ）</text>
  <rect x="1118" y="166" width="56" height="116" rx="10" fill="#0e4a6e"/>
  <rect x="1124" y="174" width="44" height="100" rx="5" fill="#eef6fb"/>
  <rect x="1128" y="180" width="36" height="14" rx="3" fill="url(#gAI)"/>
  <text x="1146" y="190" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">AI伴走</text>
  <rect x="1128" y="198" width="36" height="9" rx="2" fill="#d9eef7"/><rect x="1128" y="210" width="36" height="9" rx="2" fill="#d9eef7"/>
  <rect x="1128" y="222" width="17" height="20" rx="3" fill="#fce4cf"/><rect x="1147" y="222" width="17" height="20" rx="3" fill="#dff5f0"/>
  <rect x="1128" y="246" width="36" height="9" rx="2" fill="#ffe9a8"/>
  <rect x="1128" y="258" width="36" height="9" rx="2" fill="#d9eef7"/>
  <text x="1100" y="180" font-size="9.5" fill="#444" text-anchor="end">CV/学習</text>
  <text x="1100" y="196" font-size="9.5" fill="#444" text-anchor="end">記録</text>
  <text x="1100" y="218" font-size="9.5" fill="#444" text-anchor="end">ニーズ</text>
  <text x="1100" y="234" font-size="9.5" fill="#444" text-anchor="end">×支援</text>
  <text x="1100" y="256" font-size="9.5" fill="#444" text-anchor="end">突合</text>
  <text x="1100" y="272" font-size="9.5" fill="#444" text-anchor="end">→投下</text>
  <path d="M40 656 L1206 656 L1240 688 L1206 720 L40 720 Z" fill="url(#gFoot)"/>
  <g transform="translate(70,688)" fill="#ffffff" opacity="0.95"><circle cx="0" cy="-3" r="6"/><path d="M-10 12 A10 11 0 0 1 10 12" stroke="#ffffff" stroke-width="2.4" fill="none"/></g>
  <text x="92" y="687" font-size="11.5" fill="#cfe9f2">院生</text><text x="92" y="701" font-size="10.5" fill="#9fc8d8">研究力↑</text>
  <g transform="translate(176,688)" fill="#ffffff" opacity="0.95"><circle cx="-5" cy="-3" r="5"/><circle cx="6" cy="-3" r="5"/><path d="M-15 12 A9 10 0 0 1 -3 11" stroke="#ffffff" stroke-width="2.2" fill="none"/><path d="M-3 11 A9 10 0 0 1 16 12" stroke="#ffffff" stroke-width="2.2" fill="none"/></g>
  <text x="198" y="687" font-size="11.5" fill="#cfe9f2">教員</text><text x="198" y="701" font-size="10.5" fill="#9fc8d8">研究時間↑</text>
  <g transform="translate(300,688)" stroke="#ffffff" stroke-width="2.4" fill="none" opacity="0.95"><circle cx="0" cy="0" r="6"/><path d="M0 -10 V-7 M0 10 V7 M-10 0 H-7 M10 0 H7 M-7 -7 L-5 -5 M7 7 L5 5 M7 -7 L5 -5 M-7 7 L-5 5"/></g>
  <text x="318" y="687" font-size="11.5" fill="#cfe9f2">支援者</text><text x="318" y="701" font-size="10.5" fill="#9fc8d8">省力化</text>
  <g transform="translate(424,684)" stroke="#ffffff" stroke-width="2.4" fill="none" opacity="0.95"><path d="M-10 -2 L0 -8 L10 -2"/><path d="M-8 -2 V8 M-3 -2 V8 M3 -2 V8 M8 -2 V8 M-11 9 H11"/></g>
  <text x="446" y="687" font-size="11.5" fill="#cfe9f2">大学</text><text x="446" y="701" font-size="10.5" fill="#9fc8d8">選ばれる</text>
  <text x="760" y="694" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">分散を「接続」し、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-53：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University）。0層に薄いグローブ(経緯線楕円)＋ネットワーク点線で国際×接続を地表現。多色リッチ(teal＋橙課題＋緑GOAL＋青背景)。左=課題A-D 4枚→中央ピラミッドへ橙矢印で1:1対応。頂上にgoalBurst(放射光＋星)。右上=appMockup、右下=想定KPI 4枚(全て想定/試算明示)。下帯=登場人物アイコン群(院生/教員/支援者/大学)＋タグライン。 -->
