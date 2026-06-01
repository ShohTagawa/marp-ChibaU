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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#12345f"/><stop offset="1" stop-color="#0b2440"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#127a86"/><stop offset="1" stop-color="#0c2f54"/></linearGradient>
    <linearGradient id="gBack" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e5e8a" stop-opacity="0.0"/><stop offset="0.5" stop-color="#127a86" stop-opacity="0.85"/><stop offset="1" stop-color="#0e5e8a" stop-opacity="0.0"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d97a3"/><stop offset="1" stop-color="#0c4a55"/></linearGradient>
    <linearGradient id="gStage" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c5a86"/><stop offset="1" stop-color="#137c88"/></linearGradient>
    <linearGradient id="gFoot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0b2440"/><stop offset="1" stop-color="#12606e"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1d97a3" stop-opacity="0.5"/><stop offset="1" stop-color="#1d97a3" stop-opacity="0"/></radialGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2bc2cf" stop-opacity="0.55"/><stop offset="1" stop-color="#2bc2cf" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0b2440" flood-opacity="0.28"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0b2440" flood-opacity="0.16"/></filter>
    <marker id="mIn" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c5a86"/></marker>
    <marker id="mOut" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#137c88"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f5f9fb"/>
  <rect x="42" y="100" width="1196" height="492" rx="20" fill="#eaf2f6" opacity="0.9"/>
  <rect x="42" y="100" width="1196" height="40" rx="20" fill="#d6e4ec" opacity="0.85"/>
  <rect x="42" y="120" width="1196" height="22" fill="#d6e4ec" opacity="0.85"/>
  <circle cx="70" cy="120" r="5" fill="#c2d6e0"/>
  <circle cx="88" cy="120" r="5" fill="#c2d6e0"/>
  <circle cx="106" cy="120" r="5" fill="#c2d6e0"/>
  <rect x="150" y="112" width="700" height="16" rx="8" fill="#ffffff" opacity="0.7"/>
  <rect x="40" y="150" width="220" height="14" rx="7" fill="#cfdfe8" opacity="0.55"/>
  <rect x="40" y="180" width="1196" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="40" y="210" width="1100" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="40" y="240" width="1196" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="40" y="430" width="980" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="40" y="460" width="1196" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="40" y="540" width="760" height="9" rx="4" fill="#d8e6ee" opacity="0.5"/>
  <rect x="42" y="100" width="1196" height="492" rx="20" fill="#ffffff" opacity="0.45"/>
  <path d="M40 350 L1240 350 L1240 430 L40 430 Z" fill="url(#gBack)" opacity="0.12"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想の全体像</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#dceaf0"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#10384f">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <circle cx="525" cy="300" r="210" fill="url(#hubGlow)"/>
  <text x="42" y="112" font-size="12" font-weight="700" fill="#1c5a86">大学が抱える課題（A–D）</text>
  <rect x="40" y="118" width="246" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="118" width="6" height="72" rx="3" fill="#1c5a86"/>
  <circle cx="66" cy="138" r="11" fill="#e4eef5"/>
  <text x="66" y="143" font-size="13" font-weight="700" fill="#1c5a86" text-anchor="middle">A</text>
  <text x="86" y="143" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="164" font-size="10" fill="#5a6b78">院生の多様化（社会人・留学生・他分野）</text>
  <text x="56" y="180" font-size="10" fill="#5a6b78">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="198" width="246" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="198" width="6" height="72" rx="3" fill="#1c5a86"/>
  <circle cx="66" cy="218" r="11" fill="#e4eef5"/>
  <text x="66" y="223" font-size="13" font-weight="700" fill="#1c5a86" text-anchor="middle">B</text>
  <text x="86" y="223" font-size="12.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="56" y="244" font-size="10" fill="#5a6b78">求める水準が上昇、成功モデルも多様化</text>
  <text x="56" y="260" font-size="10" fill="#5a6b78">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="278" width="246" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="278" width="6" height="72" rx="3" fill="#1c5a86"/>
  <circle cx="66" cy="298" r="11" fill="#e4eef5"/>
  <text x="66" y="303" font-size="13" font-weight="700" fill="#1c5a86" text-anchor="middle">C</text>
  <text x="86" y="303" font-size="12.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="56" y="324" font-size="10" fill="#5a6b78">支援が乱立・重複・分散している</text>
  <text x="56" y="340" font-size="10" fill="#5a6b78">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="358" width="246" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="358" width="6" height="72" rx="3" fill="#1c5a86"/>
  <circle cx="66" cy="378" r="11" fill="#e4eef5"/>
  <text x="66" y="383" font-size="13" font-weight="700" fill="#1c5a86" text-anchor="middle">D</text>
  <text x="86" y="383" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="56" y="404" font-size="10" fill="#5a6b78">同じ手続き・説明・問い合わせの反復</text>
  <text x="56" y="420" font-size="10" fill="#5a6b78">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M286 154 C312 154 322 280 360 290" stroke="#1c5a86" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mIn)"/>
  <path d="M286 234 C312 234 326 286 360 296" stroke="#1c5a86" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mIn)"/>
  <path d="M286 314 C312 314 326 308 360 304" stroke="#1c5a86" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mIn)"/>
  <path d="M286 394 C312 394 326 320 360 312" stroke="#1c5a86" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mIn)"/>
  <rect x="362" y="118" width="320" height="312" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.14" stroke="#9fe6ee" stroke-width="1.2" fill="none"><ellipse cx="522" cy="274" rx="150" ry="150"/><ellipse cx="522" cy="274" rx="58" ry="150"/><ellipse cx="522" cy="274" rx="150" ry="58"/></g>
  <circle cx="392" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(392,148)" stroke="#127a86" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="414" y="145" font-size="12.5" font-weight="700" fill="#aef0f6">接続基盤（Nexus）</text>
  <text x="414" y="162" font-size="11" fill="#d3eef2">分散を「接続」する基盤 ＋ アプリ</text>
  <rect x="378" y="176" width="288" height="110" rx="10" fill="#ffffff" filter="url(#sh)"/>
  <rect x="378" y="176" width="288" height="20" rx="10" fill="#0b2440"/>
  <rect x="378" y="186" width="288" height="10" fill="#0b2440"/>
  <circle cx="392" cy="186" r="2.4" fill="#6fa9c4"/>
  <circle cx="400" cy="186" r="2.4" fill="#6fa9c4"/>
  <circle cx="408" cy="186" r="2.4" fill="#6fa9c4"/>
  <text x="424" y="190" font-size="9.5" fill="#cfe4ee">研究×学び アプリ</text>
  <rect x="378" y="196" width="58" height="90" fill="#eaf2f6"/>
  <rect x="386" y="208" width="42" height="8" rx="3" fill="#127a86"/>
  <rect x="386" y="222" width="42" height="8" rx="3" fill="#cdddE6"/>
  <rect x="386" y="236" width="42" height="8" rx="3" fill="#cdddE6"/>
  <circle cx="407" cy="262" r="8" fill="#b6dde4"/>
  <path d="M401 274 A8 8 0 0 1 413 274" fill="#b6dde4"/>
  <text x="448" y="216" font-size="10" font-weight="700" fill="#10384f">CVデータベース</text>
  <circle cx="454" cy="230" r="3.5" fill="#127a86"/>
  <rect x="463" y="226" width="118" height="7" rx="3" fill="#dceaf0"/>
  <circle cx="454" cy="244" r="3.5" fill="#9bbfca"/>
  <rect x="463" y="240" width="150" height="7" rx="3" fill="#dceaf0"/>
  <circle cx="454" cy="258" r="3.5" fill="#9bbfca"/>
  <rect x="463" y="254" width="98" height="7" rx="3" fill="#dceaf0"/>
  <rect x="448" y="270" width="206" height="18" rx="8" fill="#127a86"/>
  <text x="457" y="283" font-size="9" fill="#ffffff">AI伴走：次の一手を個別に提案</text>
  <text x="522" y="310" font-size="11" fill="#e6f6f9" text-anchor="middle">〈情報・データ・サポート・機会〉を統合</text>
  <text x="522" y="329" font-size="12" font-weight="700" fill="#aef0f6" text-anchor="middle">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="378" y="342" width="288" height="74" rx="10" fill="#ffffff" opacity="0.12"/>
  <text x="522" y="364" font-size="11" fill="#e6f6f9" text-anchor="middle">「真に必要とする個人」へ、情報・支援・</text>
  <text x="522" y="381" font-size="11" fill="#e6f6f9" text-anchor="middle">機会をダイレクトに投下し、研究×学びを「つなぐ」</text>
  <text x="522" y="402" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">→ 研究者と支援者が躍動する基盤</text>
  <path d="M682 154 C708 154 718 196 756 196" stroke="#137c88" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mOut)"/>
  <path d="M682 264 C708 264 718 244 756 240" stroke="#137c88" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mOut)"/>
  <path d="M682 300 C708 300 718 316 756 320" stroke="#137c88" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mOut)"/>
  <path d="M682 340 C708 340 728 388 756 398" stroke="#137c88" stroke-width="6" fill="none" opacity="0.55" marker-end="url(#mOut)"/>
  <text x="758" y="112" font-size="12" font-weight="700" fill="#10384f">AI×接続基盤で変わること（A–D）</text>
  <rect x="756" y="118" width="276" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="756" y="118" width="6" height="72" rx="3" fill="#137c88"/>
  <circle cx="782" cy="138" r="11" fill="#dcefF1"/>
  <text x="782" y="143" font-size="13" font-weight="700" fill="#0e6a74" text-anchor="middle">A</text>
  <text x="802" y="143" font-size="12.5" font-weight="700" fill="#0e6a74">指導負担を軽減し研究時間を確保</text>
  <text x="772" y="164" font-size="10" fill="#3f5560">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="772" y="180" font-size="10" fill="#3f5560">→ 教員は研究そのものに時間を回せる</text>
  <rect x="756" y="198" width="276" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="756" y="198" width="6" height="72" rx="3" fill="#137c88"/>
  <circle cx="782" cy="218" r="11" fill="#dcefF1"/>
  <text x="782" y="223" font-size="13" font-weight="700" fill="#0e6a74" text-anchor="middle">B</text>
  <text x="802" y="223" font-size="12.5" font-weight="700" fill="#0e6a74">院生一人ひとりの研究力を向上</text>
  <text x="772" y="244" font-size="10" fill="#3f5560">CV-DB＋AI伴走で段階別に個別支援</text>
  <text x="772" y="260" font-size="10" fill="#3f5560">留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="756" y="278" width="276" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="756" y="278" width="6" height="72" rx="3" fill="#137c88"/>
  <circle cx="782" cy="298" r="11" fill="#dcefF1"/>
  <text x="782" y="303" font-size="13" font-weight="700" fill="#0e6a74" text-anchor="middle">C</text>
  <text x="802" y="303" font-size="12.5" font-weight="700" fill="#0e6a74">個別最適な情報を直に届ける</text>
  <text x="772" y="324" font-size="10" fill="#3f5560">①学生の入力ニーズ ＋ ②全学の支援情報を</text>
  <text x="772" y="340" font-size="10" fill="#3f5560">突合し、必要な個人へダイレクト投下</text>
  <rect x="756" y="358" width="276" height="72" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="756" y="358" width="6" height="72" rx="3" fill="#137c88"/>
  <circle cx="782" cy="378" r="11" fill="#dcefF1"/>
  <text x="782" y="383" font-size="13" font-weight="700" fill="#0e6a74" text-anchor="middle">D</text>
  <text x="802" y="383" font-size="12.5" font-weight="700" fill="#0e6a74">支援者の労力を削減し効率化</text>
  <text x="772" y="404" font-size="10" fill="#3f5560">反復・窓口業務をRAGで省力化</text>
  <text x="772" y="420" font-size="10" fill="#3f5560">IR・成果・回答を自動収集し統合分析</text>
  <path d="M1032 154 C1048 154 1052 230 1070 244" stroke="#0e6a74" stroke-width="6" fill="none" opacity="0.6" marker-end="url(#mOut)"/>
  <path d="M1032 234 C1048 234 1052 256 1070 262" stroke="#0e6a74" stroke-width="6" fill="none" opacity="0.6" marker-end="url(#mOut)"/>
  <path d="M1032 314 C1048 314 1052 290 1070 280" stroke="#0e6a74" stroke-width="6" fill="none" opacity="0.6" marker-end="url(#mOut)"/>
  <path d="M1032 394 C1048 394 1052 320 1070 308" stroke="#0e6a74" stroke-width="6" fill="none" opacity="0.6" marker-end="url(#mOut)"/>
  <circle cx="1150" cy="200" r="150" fill="url(#goalGlow)"/>
  <rect x="1072" y="118" width="166" height="312" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1100" cy="150" r="14" fill="#ffffff"/>
  <g transform="translate(1100,150)" stroke="#0c4a55" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1124" y="156" font-size="19" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1090" y="188" font-size="11" fill="#d6f3f6">研究者と支援者が躍動する</text>
  <text x="1090" y="204" font-size="11" font-weight="700" fill="#ffffff">Nexus University の実現</text>
  <circle cx="1094" cy="232" r="3" fill="#aef0f6"/>
  <text x="1106" y="236" font-size="11.5" fill="#ffffff">中退率 ↓ ／ 修了率 ↑</text>
  <circle cx="1094" cy="258" r="3" fill="#aef0f6"/>
  <text x="1106" y="262" font-size="11.5" fill="#ffffff">院生の研究力 ↑</text>
  <circle cx="1094" cy="284" r="3" fill="#aef0f6"/>
  <text x="1106" y="288" font-size="11.5" fill="#ffffff">海外留学・国際性 ↑</text>
  <circle cx="1094" cy="310" r="3" fill="#aef0f6"/>
  <text x="1106" y="314" font-size="11.5" fill="#ffffff">経営判断の高度化</text>
  <rect x="1090" y="332" width="132" height="84" rx="10" fill="#ffffff" opacity="0.14"/>
  <text x="1156" y="354" font-size="10" fill="#e9fbfd" text-anchor="middle">副次：許諾済データの共有</text>
  <text x="1156" y="370" font-size="10" fill="#e9fbfd" text-anchor="middle">学内・行政・企業の共同研究</text>
  <text x="1156" y="386" font-size="10" fill="#e9fbfd" text-anchor="middle">統合分析で経営判断を迅速化</text>
  <text x="1156" y="406" font-size="10.5" font-weight="700" fill="#ffffff" text-anchor="middle">アプリ外販も視野</text>
  <path d="M40 446 L1206 446 L1240 467 L1206 488 L40 488 Z" fill="url(#gStage)"/>
  <text x="56" y="465" font-size="11.5" font-weight="700" fill="#ffffff">段階展開：</text>
  <rect x="142" y="453" width="86" height="22" rx="11" fill="#ffffff" opacity="0.2"/>
  <text x="185" y="468" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1 アプリ</text>
  <text x="240" y="468" font-size="12" font-weight="700" fill="#cfeef2">→</text>
  <rect x="262" y="453" width="108" height="22" rx="11" fill="#ffffff" opacity="0.2"/>
  <text x="316" y="468" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv2 全学基盤</text>
  <text x="382" y="468" font-size="12" font-weight="700" fill="#cfeef2">→</text>
  <rect x="404" y="453" width="170" height="22" rx="11" fill="#ffffff" opacity="0.2"/>
  <text x="489" y="468" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Lv3 学外連携（行政・企業）</text>
  <text x="600" y="466" font-size="11" fill="#dff2f5">システムでなく〈データ〉を接続基盤でつなぐ</text>
  <text x="42" y="510" font-size="11" font-weight="700" fill="#7a8a94">想定KPI（導入後の試算イメージ）</text>
  <rect x="40" y="516" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="516" width="5" height="50" rx="2.5" fill="#1c5a86"/>
  <text x="58" y="550" font-size="22" font-weight="700" fill="#10384f">＋3<tspan font-size="12" font-weight="400">h/週</tspan></text>
  <text x="132" y="537" font-size="10.5" fill="#5a6b78">教員1人あたりの</text>
  <text x="132" y="552" font-size="10.5" fill="#5a6b78">研究時間を確保</text>
  <rect x="345" y="516" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="516" width="5" height="50" rx="2.5" fill="#137c88"/>
  <text x="363" y="550" font-size="22" font-weight="700" fill="#0e6a74">−50<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="437" y="537" font-size="10.5" fill="#5a6b78">定型問い合わせ・</text>
  <text x="437" y="552" font-size="10.5" fill="#5a6b78">窓口業務（RAG）</text>
  <rect x="650" y="516" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="516" width="5" height="50" rx="2.5" fill="#137c88"/>
  <text x="668" y="550" font-size="22" font-weight="700" fill="#0e6a74">＋20<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="748" y="537" font-size="10.5" fill="#5a6b78">院生の研究力</text>
  <text x="748" y="552" font-size="10.5" fill="#5a6b78">（自己効力感）</text>
  <rect x="955" y="516" width="285" height="50" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="516" width="5" height="50" rx="2.5" fill="#1d97a3"/>
  <text x="973" y="550" font-size="22" font-weight="700" fill="#0c4a55">＋5<tspan font-size="12" font-weight="400">pt</tspan></text>
  <text x="1047" y="537" font-size="10.5" fill="#5a6b78">修了率の改善</text>
  <text x="1047" y="552" font-size="10.5" fill="#5a6b78">（中退率↓）</text>
  <path d="M40 580 L1206 580 L1240 614 L1206 648 L40 648 Z" fill="url(#gFoot)"/>
  <text x="623" y="619" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">限られた人手・時間を最大化し、研究×学びがつながり躍動する Nexus University へ</text>
</svg>

<!-- variant-7：骨格=バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D流入(塊矢印)→中央=接続基盤Nexus(アプリmockup入り)→右=AI打ち手A-D→GOALバースト。0層背景=アプリ画面を巨大テキストボックスに見立てた薄色UIパネル(ブラウザ枠・薄UI行・白スクリム)。配色=ネイビー+tealの寒色クール。stageBand=Lv1→Lv2→Lv3の段階展開帯。KPIは全て「想定/試算」明示。A-D課題↔打ち手1:1対応。 -->
