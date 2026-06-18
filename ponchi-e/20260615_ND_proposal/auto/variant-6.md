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
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0e2a44"/><stop offset="1" stop-color="#0d7d80"/></linearGradient>
    <linearGradient id="gStep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16a0a0"/><stop offset="1" stop-color="#0d5f72"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1fb6a6"/><stop offset="1" stop-color="#0d6e74"/></linearGradient>
    <linearGradient id="gLow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1d4a6e"/><stop offset="1" stop-color="#13344f"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f7d80"/><stop offset="1" stop-color="#11537a"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#33d6bf" stop-opacity="0.55"/><stop offset="1" stop-color="#33d6bf" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0a1f33" flood-opacity="0.32"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0a1f33" flood-opacity="0.2"/></filter>
    <marker id="mUp" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#16a0a0"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f4f8fa"/>
  <g opacity="0.08" stroke="#11537a" stroke-width="1.2" fill="none"><ellipse cx="660" cy="400" rx="380" ry="380"/><ellipse cx="660" cy="400" rx="150" ry="380"/><ellipse cx="660" cy="400" rx="270" ry="380"/><ellipse cx="660" cy="400" rx="380" ry="150"/><ellipse cx="660" cy="400" rx="380" ry="270"/></g>
  <g opacity="0.07" fill="#0d7d80"><circle cx="240" cy="300" r="3.2"/><circle cx="430" cy="200" r="3.2"/><circle cx="650" cy="320" r="3.2"/><circle cx="880" cy="240" r="3.2"/><circle cx="1040" cy="380" r="3.2"/><circle cx="360" cy="470" r="3.2"/><circle cx="760" cy="520" r="3.2"/></g>
  <g opacity="0.07" stroke="#0d7d80" stroke-width="1" fill="none"><path d="M240 300 L430 200"/><path d="M430 200 L650 320"/><path d="M650 320 L880 240"/><path d="M880 240 L1040 380"/><path d="M240 300 L360 470"/><path d="M650 320 L760 520"/></g>
  <path d="M0 660 L1280 250 L1280 720 L0 720 Z" fill="url(#gSlope)" opacity="0.1"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想ロードマップ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#dceef0"/>
  <text x="40" y="77" font-size="14" font-weight="700" fill="#0d5f72">分散する〈情報・データ・サポート・機会〉を「接続」し、課題の低地から成果の高みへ登る</text>
  <text x="42" y="112" font-size="12.5" font-weight="700" fill="#1d4a6e">出発点：大学が抱える課題（低地 A–D）</text>
  <rect x="40" y="120" width="300" height="466" rx="16" fill="url(#gLow)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#7fb6d8" stroke-width="1.1" fill="none"><ellipse cx="190" cy="350" rx="120" ry="120"/><ellipse cx="190" cy="350" rx="48" ry="120"/></g>
  <rect x="58" y="138" width="264" height="100" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="162" r="12" fill="#dceef0"/>
  <text x="84" y="167" font-size="13" font-weight="700" fill="#1d4a6e" text-anchor="middle">A</text>
  <text x="106" y="167" font-size="12.5" font-weight="700" fill="#13344f">教員の業務負荷が急増</text>
  <text x="74" y="190" font-size="10" fill="#5a6b7a">院生の多様化（社会人・留学生・他分野）</text>
  <text x="74" y="206" font-size="10" fill="#5a6b7a">研究費申請・評価・学振添削・全員留学で</text>
  <text x="74" y="222" font-size="10" fill="#5a6b7a">指導が限界に近づいている</text>
  <rect x="58" y="248" width="264" height="76" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="272" r="12" fill="#dceef0"/>
  <text x="84" y="277" font-size="13" font-weight="700" fill="#1d4a6e" text-anchor="middle">B</text>
  <text x="106" y="277" font-size="12.5" font-weight="700" fill="#13344f">人材育成が多様化・高度化</text>
  <text x="74" y="300" font-size="10" fill="#5a6b7a">成功モデルが多様化し水準が上昇</text>
  <text x="74" y="316" font-size="10" fill="#5a6b7a">個別の能力育成と資源の最適投下が必須</text>
  <rect x="58" y="334" width="264" height="76" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="358" r="12" fill="#dceef0"/>
  <text x="84" y="363" font-size="13" font-weight="700" fill="#1d4a6e" text-anchor="middle">C</text>
  <text x="106" y="363" font-size="12.5" font-weight="700" fill="#13344f">大学→個人のミッシングリンク</text>
  <text x="74" y="386" font-size="10" fill="#5a6b7a">支援が乱立・重複・分散している</text>
  <text x="74" y="402" font-size="10" fill="#5a6b7a">真に必要な個人に届かない</text>
  <rect x="58" y="420" width="264" height="76" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="84" cy="444" r="12" fill="#dceef0"/>
  <text x="84" y="449" font-size="13" font-weight="700" fill="#1d4a6e" text-anchor="middle">D</text>
  <text x="106" y="449" font-size="12.5" font-weight="700" fill="#13344f">実践知が共有・蓄積されない</text>
  <text x="74" y="472" font-size="10" fill="#5a6b7a">同じ手続きの反復・システム乱立</text>
  <text x="74" y="488" font-size="10" fill="#5a6b7a">データ分散・異動でゼロリセット</text>
  <rect x="58" y="506" width="264" height="68" rx="10" fill="#ffffff" opacity="0.1"/>
  <circle cx="84" cy="540" r="14" fill="#33d6bf" opacity="0.9"/>
  <g transform="translate(84,540)" stroke="#0c2138" stroke-width="2" fill="none"><rect x="-8" y="-3" width="8" height="7" rx="3.5"/><rect x="0" y="-3" width="8" height="7" rx="3.5"/></g>
  <text x="106" y="532" font-size="11.5" font-weight="700" fill="#bfeae6">接続基盤（Nexus）が低地と</text>
  <text x="106" y="548" font-size="11.5" font-weight="700" fill="#bfeae6">高みを「データ」でつなぐ</text>
  <text x="106" y="566" font-size="10" fill="#9cc4d8">CV-DB ＋ AI伴走 ＋ RAG</text>
  <path d="M340 360 L378 360" stroke="#16a0a0" stroke-width="3" fill="none" marker-end="url(#mUp)" opacity="0.9"/>
  <text x="356" y="346" font-size="13" font-weight="700" fill="#0d5f72" text-anchor="middle">登る</text>
  <path d="M392 596 L1064 168 L1100 168 L1100 600 Z" fill="url(#gSlope)" opacity="0.18"/>
  <path d="M392 596 L1064 168" stroke="#0d7d80" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none" opacity="0.6"/>
  <text x="372" y="110" font-size="12.5" font-weight="700" fill="#0d5f72">対角クライム：AI打ち手 A–D を低地→高みへ（課題と1:1対応）</text>
  <rect x="382" y="492" width="290" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="408" cy="518" r="13" fill="#ffffff"/>
  <text x="408" y="523" font-size="13" font-weight="700" fill="#0d5f72" text-anchor="middle">A</text>
  <text x="430" y="523" font-size="12.5" font-weight="700" fill="#ffffff">指導負担を軽減し研究時間を確保</text>
  <text x="400" y="546" font-size="10" fill="#d6f3f0">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="400" y="562" font-size="10" fill="#d6f3f0">→ 教員は研究そのものに時間を回せる</text>
  <rect x="498" y="384" width="298" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="524" cy="410" r="13" fill="#ffffff"/>
  <text x="524" y="415" font-size="13" font-weight="700" fill="#0d5f72" text-anchor="middle">B</text>
  <text x="546" y="415" font-size="12.5" font-weight="700" fill="#ffffff">院生一人ひとりの研究力を向上</text>
  <text x="516" y="438" font-size="10" fill="#d6f3f0">CV-DB（学内外の学習・スキル・資格記録）</text>
  <text x="516" y="454" font-size="10" fill="#d6f3f0">＋AI伴走で段階別／留学・ラボ・企業マッチ</text>
  <rect x="614" y="276" width="306" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="640" cy="302" r="13" fill="#ffffff"/>
  <text x="640" y="307" font-size="13" font-weight="700" fill="#0d5f72" text-anchor="middle">C</text>
  <text x="662" y="307" font-size="12.5" font-weight="700" fill="#ffffff">個別最適な情報を直に届ける</text>
  <text x="632" y="330" font-size="10" fill="#d6f3f0">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="632" y="346" font-size="10" fill="#d6f3f0">突合 → 必要な個人へダイレクト投下</text>
  <rect x="730" y="168" width="312" height="86" rx="13" fill="url(#gStep)" filter="url(#sh)"/>
  <circle cx="756" cy="194" r="13" fill="#ffffff"/>
  <text x="756" y="199" font-size="13" font-weight="700" fill="#0d5f72" text-anchor="middle">D</text>
  <text x="778" y="199" font-size="12.5" font-weight="700" fill="#ffffff">支援者の労力を削減し効率化</text>
  <text x="748" y="222" font-size="10" fill="#d6f3f0">データを基盤上で接続しAIで分析／反復・</text>
  <text x="748" y="238" font-size="10" fill="#d6f3f0">窓口をRAGで省力化／IR・成果を自動統合</text>
  <rect x="844" y="384" width="196" height="124" rx="12" fill="#ffffff" filter="url(#shS)"/>
  <rect x="844" y="384" width="196" height="20" rx="12" fill="#0c2138"/>
  <rect x="844" y="394" width="196" height="10" fill="#0c2138"/>
  <circle cx="858" cy="394" r="2.4" fill="#5fa8c4"/>
  <circle cx="866" cy="394" r="2.4" fill="#5fa8c4"/>
  <text x="888" y="398" font-size="9.5" fill="#cfe6ee">研究×学び アプリ</text>
  <rect x="844" y="404" width="52" height="104" fill="#e7f3f5"/>
  <rect x="852" y="416" width="36" height="7" rx="3" fill="#16a0a0"/>
  <rect x="852" y="430" width="36" height="7" rx="3" fill="#cfe0e6"/>
  <rect x="852" y="444" width="36" height="7" rx="3" fill="#cfe0e6"/>
  <circle cx="870" cy="476" r="8" fill="#bfe2ea"/>
  <path d="M864 488 A8 8 0 0 1 876 488" fill="#bfe2ea"/>
  <text x="906" y="420" font-size="10" font-weight="700" fill="#0d5f72">CVデータベース</text>
  <circle cx="912" cy="434" r="3.4" fill="#16a0a0"/>
  <rect x="921" y="430" width="104" height="7" rx="3" fill="#dceef0"/>
  <circle cx="912" cy="448" r="3.4" fill="#9bc3cf"/>
  <rect x="921" y="444" width="84" height="7" rx="3" fill="#dceef0"/>
  <rect x="906" y="462" width="120" height="18" rx="8" fill="#16a0a0"/>
  <text x="915" y="475" font-size="9" fill="#ffffff">AI伴走：次の一手を提案</text>
  <text x="942" y="498" font-size="9.5" fill="#5a6b7a" text-anchor="middle">アプリは打ち手の入口</text>
  <circle cx="1150" cy="206" r="150" fill="url(#burst)"/>
  <rect x="1054" y="122" width="186" height="356" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.16" stroke="#ffffff" stroke-width="1.1" fill="none"><ellipse cx="1147" cy="300" rx="86" ry="86"/><ellipse cx="1147" cy="300" rx="34" ry="86"/></g>
  <circle cx="1084" cy="152" r="14" fill="#ffffff"/>
  <g transform="translate(1084,152)" stroke="#0d6e74" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1108" y="158" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1072" y="188" font-size="11" fill="#d9f5f0">研究者と支援者が躍動する</text>
  <text x="1072" y="204" font-size="11.5" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1078" cy="232" r="3" fill="#bff5ec"/>
  <text x="1090" y="236" font-size="12" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1078" cy="258" r="3" fill="#bff5ec"/>
  <text x="1090" y="262" font-size="12" fill="#ffffff">標準年限内の修了率 ↑</text>
  <circle cx="1078" cy="284" r="3" fill="#bff5ec"/>
  <text x="1090" y="288" font-size="12" fill="#ffffff">中退率 ↓</text>
  <circle cx="1078" cy="310" r="3" fill="#bff5ec"/>
  <text x="1090" y="314" font-size="12" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1078" cy="336" r="3" fill="#bff5ec"/>
  <text x="1090" y="340" font-size="12" fill="#ffffff">経営判断の高度化</text>
  <rect x="1072" y="356" width="150" height="100" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1147" y="378" font-size="10" fill="#eafcf8" text-anchor="middle">許諾済データを学内・行政・</text>
  <text x="1147" y="393" font-size="10" fill="#eafcf8" text-anchor="middle">企業の共同研究で利活用</text>
  <text x="1147" y="412" font-size="10" fill="#eafcf8" text-anchor="middle">統合分析でアプリ外販も</text>
  <text x="1147" y="436" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">成果が連鎖する</text>
  <text x="1147" y="452" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="42" y="612" font-size="11" font-weight="700" fill="#7a8896">想定KPI（導入後の試算イメージ ― あくまで想定値）</text>
  <rect x="40" y="620" width="290" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="40" y="620" width="5" height="50" rx="2.5" fill="url(#gKpi)"/>
  <text x="58" y="654" font-size="22" font-weight="700" fill="#0d5f72">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="134" y="641" font-size="10.5" fill="#5a6b7a">教員1人あたりの</text>
  <text x="134" y="656" font-size="10.5" fill="#5a6b7a">研究時間を確保</text>
  <rect x="346" y="620" width="290" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="346" y="620" width="5" height="50" rx="2.5" fill="url(#gKpi)"/>
  <text x="364" y="654" font-size="22" font-weight="700" fill="#0d5f72">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="440" y="641" font-size="10.5" fill="#5a6b7a">定型問い合わせ・</text>
  <text x="440" y="656" font-size="10.5" fill="#5a6b7a">窓口業務（RAG）</text>
  <rect x="652" y="620" width="290" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="652" y="620" width="5" height="50" rx="2.5" fill="url(#gKpi)"/>
  <text x="670" y="654" font-size="22" font-weight="700" fill="#0d5f72">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="752" y="641" font-size="10.5" fill="#5a6b7a">院生の研究力</text>
  <text x="752" y="656" font-size="10.5" fill="#5a6b7a">（自己効力感）</text>
  <rect x="958" y="620" width="282" height="50" rx="10" fill="#ffffff" filter="url(#shS)"/>
  <rect x="958" y="620" width="5" height="50" rx="2.5" fill="url(#gKpi)"/>
  <text x="976" y="654" font-size="22" font-weight="700" fill="#0d5f72">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1052" y="641" font-size="10.5" fill="#5a6b7a">修了率の改善</text>
  <text x="1052" y="656" font-size="10.5" fill="#5a6b7a">（中退率↓）</text>
</svg>

<!-- variant-6：ロードマップ旅(対角クライム)骨格。低地=課題A-D(左パネル)→対角斜面に打ち手A-D(1:1対応)を低→高へ→右上GOALバースト(寒色teal/ネイビー)。背景0層=薄いグローブ(経緯線楕円)＋ネットワーク点線で国際×接続。airy密度。appMockup(CVアプリ)・想定KPI帯(試算明示)入り。 -->
