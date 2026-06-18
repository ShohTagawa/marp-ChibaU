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
    <linearGradient id="gNavyH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16335c"/><stop offset="1" stop-color="#0d2342"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa0a8"/><stop offset="1" stop-color="#0e5e76"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f4f7a"/><stop offset="1" stop-color="#0c2746"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#19a7a0"/><stop offset="1" stop-color="#0d6a6f"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f5f86"/><stop offset="1" stop-color="#12a0a0"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1ec8c0" stop-opacity="0.42"/><stop offset="1" stop-color="#1ec8c0" stop-opacity="0"/></radialGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2aa6c8" stop-opacity="0.5"/><stop offset="1" stop-color="#2aa6c8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2746" flood-opacity="0.24"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2746" flood-opacity="0.15"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#3a6ea0"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0e5e76"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f3f7fb"/>
  <rect x="0" y="98" width="1280" height="495" rx="0" fill="#e9f1f8"/>
  <rect x="36" y="108" width="1208" height="476" rx="16" fill="#ffffff" opacity="0.55"/>
  <rect x="36" y="108" width="1208" height="34" rx="16" fill="#dbe7f2" opacity="0.7"/>
  <rect x="36" y="126" width="1208" height="16" fill="#dbe7f2" opacity="0.7"/>
  <circle cx="58" cy="125" r="4.5" fill="#c2d4e6" opacity="0.8"/>
  <circle cx="74" cy="125" r="4.5" fill="#c2d4e6" opacity="0.8"/>
  <circle cx="90" cy="125" r="4.5" fill="#c2d4e6" opacity="0.8"/>
  <rect x="120" y="118" width="700" height="14" rx="7" fill="#ffffff" opacity="0.7"/>
  <rect x="150" y="170" width="320" height="20" rx="6" fill="#dde9f3" opacity="0.55"/>
  <rect x="150" y="210" width="540" height="11" rx="5" fill="#e4eef6" opacity="0.6"/>
  <rect x="150" y="232" width="500" height="11" rx="5" fill="#e4eef6" opacity="0.6"/>
  <rect x="780" y="200" width="420" height="240" rx="12" fill="#e4eef6" opacity="0.5"/>
  <rect x="150" y="470" width="900" height="11" rx="5" fill="#e4eef6" opacity="0.55"/>
  <rect x="0" y="98" width="1280" height="495" fill="#ffffff" opacity="0.46"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gNavyH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想の全体像</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#d6e6f3"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#14375e">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="510" cy="270" r="180" fill="url(#hubGlow)"/>
  <circle cx="1148" cy="250" r="150" fill="url(#goalGlow)"/>
  <text x="42" y="108" font-size="12" font-weight="700" fill="#3a6ea0">大学が抱える課題（A–D）の流入</text>
  <rect x="40" y="114" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="114" width="6" height="78" rx="3" fill="#3a6ea0"/>
  <circle cx="65" cy="135" r="11" fill="#e2ecf6"/>
  <text x="65" y="140" font-size="13" font-weight="700" fill="#2a5688" text-anchor="middle">A</text>
  <text x="85" y="140" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="55" y="162" font-size="10" fill="#5a6b7e">院生の多様化（社会人・留学生・他分野）</text>
  <text x="55" y="178" font-size="10" fill="#5a6b7e">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="200" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="200" width="6" height="78" rx="3" fill="#3a6ea0"/>
  <circle cx="65" cy="221" r="11" fill="#e2ecf6"/>
  <text x="65" y="226" font-size="13" font-weight="700" fill="#2a5688" text-anchor="middle">B</text>
  <text x="85" y="226" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="55" y="248" font-size="10" fill="#5a6b7e">求める水準が上昇、成功モデルも多様化</text>
  <text x="55" y="264" font-size="10" fill="#5a6b7e">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="286" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="286" width="6" height="78" rx="3" fill="#3a6ea0"/>
  <circle cx="65" cy="307" r="11" fill="#e2ecf6"/>
  <text x="65" y="312" font-size="13" font-weight="700" fill="#2a5688" text-anchor="middle">C</text>
  <text x="85" y="312" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="55" y="334" font-size="10" fill="#5a6b7e">支援が乱立・重複・分散している</text>
  <text x="55" y="350" font-size="10" fill="#5a6b7e">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="372" width="244" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="372" width="6" height="78" rx="3" fill="#3a6ea0"/>
  <circle cx="65" cy="393" r="11" fill="#e2ecf6"/>
  <text x="65" y="398" font-size="13" font-weight="700" fill="#2a5688" text-anchor="middle">D</text>
  <text x="85" y="398" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="55" y="420" font-size="10" fill="#5a6b7e">同じ手続き・説明・問い合わせの反復</text>
  <text x="55" y="436" font-size="10" fill="#5a6b7e">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M286 153 C310 153 312 250 348 256" stroke="#3a6ea0" stroke-width="9" fill="none" opacity="0.28"/>
  <path d="M286 239 C310 239 318 262 348 268" stroke="#3a6ea0" stroke-width="9" fill="none" opacity="0.28"/>
  <path d="M286 325 C310 325 318 286 348 282" stroke="#3a6ea0" stroke-width="9" fill="none" opacity="0.28"/>
  <path d="M286 411 C310 411 320 300 348 294" stroke="#3a6ea0" stroke-width="9" fill="none" opacity="0.28"/>
  <path d="M286 153 C310 153 312 250 348 256" stroke="#3a6ea0" stroke-width="2" fill="none" marker-end="url(#mW)"/>
  <path d="M286 411 C310 411 320 300 348 294" stroke="#3a6ea0" stroke-width="2" fill="none" marker-end="url(#mW)"/>
  <rect x="350" y="110" width="320" height="340" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#7fd6e0" stroke-width="1.2" fill="none"><ellipse cx="510" cy="280" rx="146" ry="146"/><ellipse cx="510" cy="280" rx="58" ry="146"/><ellipse cx="510" cy="280" rx="146" ry="58"/></g>
  <circle cx="380" cy="142" r="13" fill="#ffffff"/>
  <g transform="translate(380,142)" stroke="#16335c" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="402" y="139" font-size="13" font-weight="700" fill="#9fe3ea">接続基盤（Nexus）</text>
  <text x="402" y="157" font-size="11" fill="#cde9ee">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="368" y="172" width="284" height="112" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="368" y="172" width="284" height="19" rx="10" fill="#0d2342"/>
  <rect x="368" y="182" width="284" height="9" fill="#0d2342"/>
  <circle cx="382" cy="182" r="2.3" fill="#5f8bb6"/>
  <circle cx="390" cy="182" r="2.3" fill="#5f8bb6"/>
  <circle cx="398" cy="182" r="2.3" fill="#5f8bb6"/>
  <text x="412" y="186" font-size="9.5" fill="#cfe0f0">研究×学び アプリ</text>
  <rect x="368" y="191" width="54" height="93" fill="#edf4fa"/>
  <rect x="376" y="203" width="38" height="8" rx="3" fill="#1aa0a8"/>
  <rect x="376" y="217" width="38" height="8" rx="3" fill="#cdddea"/>
  <rect x="376" y="231" width="38" height="8" rx="3" fill="#cdddea"/>
  <circle cx="395" cy="260" r="8" fill="#bfe0ea"/>
  <path d="M389 272 A8 8 0 0 1 401 272" fill="#bfe0ea"/>
  <text x="434" y="210" font-size="10" font-weight="700" fill="#14537a">CVデータベース</text>
  <circle cx="440" cy="224" r="3.5" fill="#1aa0a8"/>
  <rect x="449" y="220" width="108" height="7" rx="3" fill="#e0eef5"/>
  <circle cx="440" cy="238" r="3.5" fill="#9cc4d4"/>
  <rect x="449" y="234" width="138" height="7" rx="3" fill="#e0eef5"/>
  <circle cx="440" cy="252" r="3.5" fill="#9cc4d4"/>
  <rect x="449" y="248" width="90" height="7" rx="3" fill="#e0eef5"/>
  <rect x="434" y="263" width="200" height="17" rx="8" fill="#1aa0a8"/>
  <text x="443" y="275" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="510" y="306" font-size="11" fill="#dff1f4" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="510" y="325" font-size="12" font-weight="700" fill="#9fe3ea" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="368" y="338" width="284" height="56" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="510" y="358" font-size="11" fill="#dff1f4" text-anchor="middle">学生入力ニーズ × 全学の支援情報を突合し</text>
  <text x="510" y="375" font-size="11" fill="#dff1f4" text-anchor="middle">真に必要な個人へダイレクトに投下する</text>
  <text x="510" y="392" font-size="11" font-weight="700" fill="#9fe3ea" text-anchor="middle">→ 研究×学びが「つながる」</text>
  <text x="510" y="426" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する基盤</text>
  <path d="M670 200 C700 200 700 150 722 150" stroke="#0e5e76" stroke-width="9" fill="none" opacity="0.26"/>
  <path d="M670 240 C700 240 700 238 722 238" stroke="#0e5e76" stroke-width="9" fill="none" opacity="0.26"/>
  <path d="M670 300 C700 300 700 326 722 326" stroke="#0e5e76" stroke-width="9" fill="none" opacity="0.26"/>
  <path d="M670 360 C700 360 700 414 722 414" stroke="#0e5e76" stroke-width="9" fill="none" opacity="0.26"/>
  <path d="M670 200 C700 200 700 150 722 150" stroke="#0e5e76" stroke-width="2" fill="none" marker-end="url(#mG)"/>
  <path d="M670 360 C700 360 700 414 722 414" stroke="#0e5e76" stroke-width="2" fill="none" marker-end="url(#mG)"/>
  <text x="726" y="108" font-size="12" font-weight="700" fill="#0e5e76">AI×接続基盤による打ち手（A–D）</text>
  <rect x="724" y="114" width="278" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="724" y="114" width="6" height="78" rx="3" fill="url(#gTeal)"/>
  <circle cx="749" cy="135" r="11" fill="#dbf0f2"/>
  <text x="749" y="140" font-size="13" font-weight="700" fill="#0e5e76" text-anchor="middle">A</text>
  <text x="769" y="140" font-size="12" font-weight="700" fill="#0e5e76">指導負担を軽減し研究時間を確保</text>
  <text x="739" y="162" font-size="10" fill="#3f5563">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="739" y="178" font-size="10" fill="#3f5563">→ 教員は研究そのものに時間を回せる</text>
  <rect x="724" y="200" width="278" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="724" y="200" width="6" height="78" rx="3" fill="url(#gTeal)"/>
  <circle cx="749" cy="221" r="11" fill="#dbf0f2"/>
  <text x="749" y="226" font-size="13" font-weight="700" fill="#0e5e76" text-anchor="middle">B</text>
  <text x="769" y="226" font-size="12" font-weight="700" fill="#0e5e76">院生一人ひとりの研究力を向上</text>
  <text x="739" y="248" font-size="10" fill="#3f5563">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="739" y="264" font-size="10" fill="#3f5563">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="724" y="286" width="278" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="724" y="286" width="6" height="78" rx="3" fill="url(#gTeal)"/>
  <circle cx="749" cy="307" r="11" fill="#dbf0f2"/>
  <text x="749" y="312" font-size="13" font-weight="700" fill="#0e5e76" text-anchor="middle">C</text>
  <text x="769" y="312" font-size="12" font-weight="700" fill="#0e5e76">個別最適な情報を直に届ける</text>
  <text x="739" y="334" font-size="10" fill="#3f5563">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="739" y="350" font-size="10" fill="#3f5563">突合し、必要な個人へダイレクト投下</text>
  <rect x="724" y="372" width="278" height="78" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="724" y="372" width="6" height="78" rx="3" fill="url(#gTeal)"/>
  <circle cx="749" cy="393" r="11" fill="#dbf0f2"/>
  <text x="749" y="398" font-size="13" font-weight="700" fill="#0e5e76" text-anchor="middle">D</text>
  <text x="769" y="398" font-size="12" font-weight="700" fill="#0e5e76">支援者の労力を削減し効率化</text>
  <text x="739" y="420" font-size="10" fill="#3f5563">反復・窓口業務をRAGで省力化</text>
  <text x="739" y="436" font-size="10" fill="#3f5563">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1002 150 C1024 150 1030 220 1052 224" stroke="#0d6a6f" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <path d="M1002 414 C1024 414 1030 290 1052 286" stroke="#0d6a6f" stroke-width="2.4" fill="none" marker-end="url(#mG)"/>
  <rect x="1054" y="110" width="186" height="340" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1149" cy="156" r="26" fill="#ffffff" opacity="0.16"/>
  <circle cx="1149" cy="156" r="16" fill="#ffffff"/>
  <g transform="translate(1149,156)" stroke="#0d6a6f" stroke-width="2" fill="none"><circle cx="0" cy="0" r="9"/><circle cx="0" cy="0" r="4"/></g>
  <text x="1149" y="198" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1149" y="218" font-size="11" fill="#d8f3f1" text-anchor="middle">Nexus University の実現</text>
  <circle cx="1072" cy="244" r="3" fill="#bdf2ec"/>
  <text x="1084" y="248" font-size="11.5" fill="#ffffff">中退率 ↓ / 修了率 ↑</text>
  <circle cx="1072" cy="270" r="3" fill="#bdf2ec"/>
  <text x="1084" y="274" font-size="11.5" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1072" cy="296" r="3" fill="#bdf2ec"/>
  <text x="1084" y="300" font-size="11.5" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1072" cy="322" r="3" fill="#bdf2ec"/>
  <text x="1084" y="326" font-size="11.5" fill="#ffffff">経営判断の高度化</text>
  <rect x="1070" y="342" width="154" height="62" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1147" y="364" font-size="10" fill="#eafcfa" text-anchor="middle">許諾済データを学外連携／</text>
  <text x="1147" y="379" font-size="10" fill="#eafcfa" text-anchor="middle">統合分析・アプリ外販へ</text>
  <text x="1147" y="396" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <rect x="40" y="464" width="1200" height="52" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="464" width="160" height="52" rx="11" fill="#16335c"/>
  <text x="120" y="486" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">受益者の</text>
  <text x="120" y="502" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">ニーズ→導入後</text>
  <circle cx="226" cy="490" r="9" fill="#e2ecf6"/>
  <text x="226" y="494" font-size="10" font-weight="700" fill="#2a5688" text-anchor="middle">学</text>
  <text x="244" y="484" font-size="11" font-weight="700" fill="#1f2937">学生</text>
  <text x="244" y="500" font-size="10" fill="#5a6b7e">機会が届かない → 個別最適に直達</text>
  <circle cx="486" cy="490" r="9" fill="#e2ecf6"/>
  <text x="486" y="494" font-size="10" font-weight="700" fill="#2a5688" text-anchor="middle">教</text>
  <text x="504" y="484" font-size="11" font-weight="700" fill="#1f2937">教員</text>
  <text x="504" y="500" font-size="10" fill="#5a6b7e">負荷過多 → 研究時間を確保</text>
  <circle cx="722" cy="490" r="9" fill="#dbf0f2"/>
  <text x="722" y="494" font-size="10" font-weight="700" fill="#0e5e76" text-anchor="middle">職</text>
  <text x="740" y="484" font-size="11" font-weight="700" fill="#1f2937">職員</text>
  <text x="740" y="500" font-size="10" fill="#5a6b7e">反復業務 → RAGで省力化</text>
  <circle cx="966" cy="490" r="9" fill="#dbf0f2"/>
  <text x="966" y="494" font-size="10" font-weight="700" fill="#0e5e76" text-anchor="middle">大</text>
  <text x="984" y="484" font-size="11" font-weight="700" fill="#1f2937">大学</text>
  <text x="984" y="500" font-size="10" fill="#5a6b7e">判断が遅い → 統合分析で迅速化</text>
  <text x="42" y="538" font-size="11" font-weight="700" fill="#7d8a98">想定KPI（導入後の試算イメージ）</text>
  <rect x="40" y="544" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="544" width="5" height="48" rx="2.5" fill="url(#gTeal)"/>
  <text x="58" y="578" font-size="22" font-weight="700" fill="#0e5e76">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="132" y="564" font-size="10.5" fill="#5a6b7e">教員1人あたりの</text>
  <text x="132" y="579" font-size="10.5" fill="#5a6b7e">研究時間を確保</text>
  <rect x="345" y="544" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="544" width="5" height="48" rx="2.5" fill="url(#gTeal)"/>
  <text x="363" y="578" font-size="22" font-weight="700" fill="#0e5e76">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="437" y="564" font-size="10.5" fill="#5a6b7e">定型問い合わせ・</text>
  <text x="437" y="579" font-size="10.5" fill="#5a6b7e">窓口業務（RAG）</text>
  <rect x="650" y="544" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="544" width="5" height="48" rx="2.5" fill="url(#gTeal)"/>
  <text x="668" y="578" font-size="22" font-weight="700" fill="#0e5e76">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="748" y="564" font-size="10.5" fill="#5a6b7e">院生の研究力</text>
  <text x="748" y="579" font-size="10.5" fill="#5a6b7e">（自己効力感）</text>
  <rect x="955" y="544" width="285" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="544" width="5" height="48" rx="2.5" fill="url(#gTeal)"/>
  <text x="973" y="578" font-size="22" font-weight="700" fill="#0e5e76">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1047" y="564" font-size="10.5" fill="#5a6b7e">修了率の改善</text>
  <text x="1047" y="579" font-size="10.5" fill="#5a6b7e">（中退率↓）</text>
  <path d="M40 602 L1206 602 L1240 636 L1206 670 L40 670 Z" fill="url(#gNavyH)"/>
  <text x="623" y="641" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-56。骨格=バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D流入→中央=接続基盤→右=打ち手A-D→GOALバースト。0層=アプリ画面を巨大テキストボックスに見立てた薄色パネル(ブラウザ枠/薄UI行)＋白スクリム。配色=ネイビー＋tealの寒色クール。密度packed。追加=beneficiaryRow(学生/教員/職員/大学のニーズ→導入後)・想定KPI試算・goalBurst。A-D課題↔打ち手1:1対応。 -->
