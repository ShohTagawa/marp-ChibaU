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
    <linearGradient id="vHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8821f"/><stop offset="1" stop-color="#c25e12"/></linearGradient>
    <linearGradient id="vHero" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7a93b"/><stop offset="1" stop-color="#d2691a"/></linearGradient>
    <linearGradient id="vWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f3b14a"/><stop offset="1" stop-color="#e08a2c"/></linearGradient>
    <linearGradient id="vAct" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a8fb0"/><stop offset="1" stop-color="#2a6f8c"/></linearGradient>
    <linearGradient id="vRibbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#7fb3d5"/><stop offset="1" stop-color="#bcd9ec"/></linearGradient>
    <radialGradient id="vGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f9c049" stop-opacity="0.55"/><stop offset="1" stop-color="#f9c049" stop-opacity="0"/></radialGradient>
    <filter id="vSh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#9a5a14" flood-opacity="0.22"/></filter>
    <filter id="vShSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#9a5a14" flood-opacity="0.16"/></filter>
    <marker id="vmW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2691a"/></marker>
    <marker id="vmA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2a6f8c"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffdf8"/>
  <path d="M-60 760 L380 760 L1020 220 L640 220 Z" fill="url(#vRibbon)" opacity="0.20"/>
  <path d="M-60 760 L240 760 L880 220 L640 220 Z" fill="url(#vRibbon)" opacity="0.16"/>
  <path d="M-60 760 L120 760 L760 220 L640 220 Z" fill="url(#vRibbon)" opacity="0.12"/>
  <g opacity="0.10" stroke="#3a8fb0" stroke-width="1" fill="none"><path d="M40 660 L300 540"/><path d="M300 540 L560 420"/><path d="M560 420 L820 360"/><path d="M820 360 L1160 260"/></g>
  <g opacity="0.10" fill="#3a8fb0"><circle cx="300" cy="540" r="3"/><circle cx="560" cy="420" r="3"/><circle cx="820" cy="360" r="3"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#vHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="34" fill="#FCEFD9"/>
  <text x="40" y="79" font-size="15" font-weight="700" fill="#a9560f">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="640" cy="320" r="220" fill="url(#vGlow)"/>
  <path d="M120 320 L1160 320" stroke="#e7c79a" stroke-width="46" fill="none" opacity="0.35" stroke-linecap="round"/>
  <text x="44" y="118" font-size="13" font-weight="700" fill="#c25e12">大学が抱える課題（A–D）</text>
  <rect x="40" y="126" width="262" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="40" y="126" width="7" height="64" rx="3.5" fill="url(#vWarn)"/>
  <circle cx="70" cy="148" r="12" fill="#FCEFD9"/>
  <text x="70" y="153" font-size="13" font-weight="700" fill="#c25e12" text-anchor="middle">A</text>
  <text x="90" y="150" font-size="13" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="60" y="176" font-size="10.5" fill="#6b6b6b">院生の多様化＋申請・添削・全員留学で限界</text>
  <rect x="40" y="200" width="262" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="40" y="200" width="7" height="64" rx="3.5" fill="url(#vWarn)"/>
  <circle cx="70" cy="222" r="12" fill="#FCEFD9"/>
  <text x="70" y="227" font-size="13" font-weight="700" fill="#c25e12" text-anchor="middle">B</text>
  <text x="90" y="224" font-size="13" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="60" y="250" font-size="10.5" fill="#6b6b6b">水準上昇、個別育成と資源の最適投下が必須</text>
  <rect x="40" y="274" width="262" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="40" y="274" width="7" height="64" rx="3.5" fill="url(#vWarn)"/>
  <circle cx="70" cy="296" r="12" fill="#FCEFD9"/>
  <text x="70" y="301" font-size="13" font-weight="700" fill="#c25e12" text-anchor="middle">C</text>
  <text x="90" y="298" font-size="13" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="60" y="324" font-size="10.5" fill="#6b6b6b">支援が乱立・分散し必要な個人に届かない</text>
  <rect x="40" y="348" width="262" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="40" y="348" width="7" height="64" rx="3.5" fill="url(#vWarn)"/>
  <circle cx="70" cy="370" r="12" fill="#FCEFD9"/>
  <text x="70" y="375" font-size="13" font-weight="700" fill="#c25e12" text-anchor="middle">D</text>
  <text x="90" y="372" font-size="13" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="60" y="398" font-size="10.5" fill="#6b6b6b">手続き反復・システム乱立・異動でゼロ化</text>
  <path d="M306 158 C360 158 380 268 432 280" stroke="#d2691a" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmW)"/>
  <path d="M306 232 C360 232 380 290 432 296" stroke="#d2691a" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmW)"/>
  <path d="M306 306 C360 306 380 318 432 320" stroke="#d2691a" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmW)"/>
  <path d="M306 380 C360 380 380 350 432 340" stroke="#d2691a" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmW)"/>
  <rect x="440" y="138" width="320" height="288" rx="20" fill="url(#vHero)" filter="url(#vSh)"/>
  <g opacity="0.14" stroke="#ffffff" stroke-width="1.3" fill="none"><ellipse cx="600" cy="282" rx="130" ry="130"/><ellipse cx="600" cy="282" rx="52" ry="130"/><ellipse cx="600" cy="282" rx="130" ry="52"/></g>
  <circle cx="472" cy="170" r="13" fill="#ffffff"/>
  <g transform="translate(472,170)" stroke="#c25e12" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="494" y="167" font-size="13" font-weight="700" fill="#fff3e0">接続基盤（Nexus）</text>
  <text x="494" y="184" font-size="11" fill="#ffe6c7">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="458" y="198" width="138" height="112" rx="10" fill="#ffffff" filter="url(#vSh)"/>
  <rect x="458" y="198" width="138" height="18" rx="10" fill="#b5530f"/>
  <rect x="458" y="207" width="138" height="9" fill="#b5530f"/>
  <circle cx="470" cy="207" r="2.2" fill="#f3c089"/>
  <circle cx="478" cy="207" r="2.2" fill="#f3c089"/>
  <text x="492" y="211" font-size="8.5" fill="#ffe6c7">研究×学び アプリ</text>
  <rect x="466" y="224" width="122" height="14" rx="4" fill="#FCEFD9"/>
  <text x="472" y="234" font-size="8.5" fill="#a9560f">CVデータベース：学内外の記録</text>
  <circle cx="472" cy="252" r="3.2" fill="#d2691a"/>
  <rect x="480" y="248" width="100" height="7" rx="3" fill="#FCEFD9"/>
  <circle cx="472" cy="266" r="3.2" fill="#e6a85a"/>
  <rect x="480" y="262" width="76" height="7" rx="3" fill="#FCEFD9"/>
  <rect x="466" y="280" width="122" height="20" rx="9" fill="#d2691a"/>
  <text x="476" y="293" font-size="8.5" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="678" y="226" font-size="12" font-weight="700" fill="#fff3e0" text-anchor="middle">情報・データ・</text>
  <text x="678" y="244" font-size="12" font-weight="700" fill="#fff3e0" text-anchor="middle">サポート・機会を</text>
  <text x="678" y="262" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">1つに「接続」</text>
  <rect x="612" y="280" width="132" height="62" rx="10" fill="#ffffff" opacity="0.16"/>
  <text x="678" y="301" font-size="10.5" fill="#fff3e0" text-anchor="middle">真に必要な個人へ</text>
  <text x="678" y="317" font-size="10.5" fill="#fff3e0" text-anchor="middle">ダイレクト投下</text>
  <text x="678" y="334" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">→ つながる</text>
  <text x="600" y="408" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する基盤</text>
  <text x="916" y="118" font-size="13" font-weight="700" fill="#2a6f8c">AI×接続基盤で変わること（A–D）</text>
  <rect x="912" y="126" width="328" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="912" y="126" width="7" height="64" rx="3.5" fill="url(#vAct)"/>
  <circle cx="942" cy="148" r="12" fill="#E2EFF5"/>
  <text x="942" y="153" font-size="13" font-weight="700" fill="#2a6f8c" text-anchor="middle">A</text>
  <text x="962" y="150" font-size="12.5" font-weight="700" fill="#1f4a5c">指導負担を軽減し研究時間を確保</text>
  <text x="932" y="176" font-size="10.5" fill="#555">AI多言語支援・ラボ共通支援・支援者接続</text>
  <rect x="912" y="200" width="328" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="912" y="200" width="7" height="64" rx="3.5" fill="url(#vAct)"/>
  <circle cx="942" cy="222" r="12" fill="#E2EFF5"/>
  <text x="942" y="227" font-size="13" font-weight="700" fill="#2a6f8c" text-anchor="middle">B</text>
  <text x="962" y="224" font-size="12.5" font-weight="700" fill="#1f4a5c">院生の研究力を向上</text>
  <text x="932" y="250" font-size="10.5" fill="#555">CV-DB＋AI伴走で段階別に個別支援・マッチング</text>
  <rect x="912" y="274" width="328" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="912" y="274" width="7" height="64" rx="3.5" fill="url(#vAct)"/>
  <circle cx="942" cy="296" r="12" fill="#E2EFF5"/>
  <text x="942" y="301" font-size="13" font-weight="700" fill="#2a6f8c" text-anchor="middle">C</text>
  <text x="962" y="298" font-size="12.5" font-weight="700" fill="#1f4a5c">個別最適な情報を直に届ける</text>
  <text x="932" y="324" font-size="10.5" fill="#555">学生ニーズ×全学の支援情報を突合→投下</text>
  <rect x="912" y="348" width="328" height="64" rx="12" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="912" y="348" width="7" height="64" rx="3.5" fill="url(#vAct)"/>
  <circle cx="942" cy="370" r="12" fill="#E2EFF5"/>
  <text x="942" y="375" font-size="13" font-weight="700" fill="#2a6f8c" text-anchor="middle">D</text>
  <text x="962" y="372" font-size="12.5" font-weight="700" fill="#1f4a5c">支援者の労力を削減し効率化</text>
  <text x="932" y="398" font-size="10.5" fill="#555">反復・窓口をRAGで省力化／成果を統合分析</text>
  <path d="M762 158 C840 158 860 268 906 158" stroke="#2a6f8c" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmA)"/>
  <path d="M762 268 C840 268 860 232 906 232" stroke="#2a6f8c" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmA)"/>
  <path d="M762 296 C840 296 860 306 906 306" stroke="#2a6f8c" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmA)"/>
  <path d="M762 360 C840 360 860 380 906 380" stroke="#2a6f8c" stroke-width="3" fill="none" opacity="0.85" marker-end="url(#vmA)"/>
  <rect x="40" y="430" width="1200" height="30" rx="8" fill="#E2EFF5"/>
  <text x="56" y="450" font-size="11.5" font-weight="700" fill="#2a6f8c">副次効果</text>
  <text x="150" y="450" font-size="11" fill="#1f4a5c">許諾済データの共有・利活用（学内・行政・企業の共同研究）　／　統合分析で経営判断を迅速化　／　アプリ外販</text>
  <text x="42" y="486" font-size="11" font-weight="700" fill="#a9560f">想定KPI（導入後の試算イメージ・あくまで想定値）</text>
  <rect x="40" y="494" width="288" height="58" rx="11" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="40" y="494" width="6" height="58" rx="3" fill="url(#vWarn)"/>
  <text x="60" y="534" font-size="26" font-weight="700" fill="#c25e12">＋3<tspan font-size="13" font-weight="400">h/週</tspan></text>
  <text x="150" y="518" font-size="11" fill="#555">教員1人あたりの</text>
  <text x="150" y="534" font-size="11" fill="#555">研究時間を確保</text>
  <rect x="338" y="494" width="288" height="58" rx="11" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="338" y="494" width="6" height="58" rx="3" fill="url(#vWarn)"/>
  <text x="358" y="534" font-size="26" font-weight="700" fill="#c25e12">−50<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="450" y="518" font-size="11" fill="#555">定型問い合わせ・</text>
  <text x="450" y="534" font-size="11" fill="#555">窓口業務（RAG）</text>
  <rect x="636" y="494" width="288" height="58" rx="11" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="636" y="494" width="6" height="58" rx="3" fill="url(#vWarn)"/>
  <text x="656" y="534" font-size="26" font-weight="700" fill="#c25e12">＋20<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="748" y="518" font-size="11" fill="#555">院生の研究力</text>
  <text x="748" y="534" font-size="11" fill="#555">（自己効力感）</text>
  <rect x="934" y="494" width="306" height="58" rx="11" fill="#ffffff" filter="url(#vShSoft)"/>
  <rect x="934" y="494" width="6" height="58" rx="3" fill="url(#vWarn)"/>
  <text x="954" y="534" font-size="26" font-weight="700" fill="#c25e12">＋5<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="1046" y="518" font-size="11" fill="#555">修了率の改善</text>
  <text x="1046" y="534" font-size="11" fill="#555">（中退率↓）</text>
  <path d="M40 572 L1206 572 L1240 606 L1206 640 L40 640 Z" fill="url(#vWarn)"/>
  <text x="56" y="600" font-size="11.5" font-weight="700" fill="#ffffff">段階展開：Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）　― システムでなく〈データ〉を接続基盤でつなぐ</text>
  <path d="M40 648 L1206 648 L1240 682 L1206 716 L40 716 Z" fill="url(#vHdr)"/>
  <text x="623" y="687" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-21：バックボーン＋中央ヒーロー結節点。左下→右上へ昇る青リボン/シェブロンを地に敷き、橙/黄の温かみ配色＋青を打ち手アクセントに。airy密度。appMockup(CVデータベース)・kpiBand(想定/試算明示)・stageBand・副次効果バンドを追加。課題A-D↔打ち手A-D 1:1対応。 -->
