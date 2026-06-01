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
    <linearGradient id="gH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f7fc4"/><stop offset="1" stop-color="#28547f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3aa86b"/><stop offset="1" stop-color="#1f7a4a"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.22"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd27a" stop-opacity="0.95"/><stop offset="0.6" stop-color="#f6b94e" stop-opacity="0.45"/><stop offset="1" stop-color="#f6b94e" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mA" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#27a07c"/></marker>
    <marker id="mW" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="85" font-size="15.5" font-weight="700" fill="#16624b">学内に散在する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="28" y="106" width="372" height="492" rx="18" fill="#FBEDE2"/>
  <rect x="880" y="106" width="372" height="492" rx="18" fill="#E4F2EC"/>
  <text x="44" y="130" font-size="14.5" font-weight="700" fill="#c4632a">課題ゾーン ― 散在・分断・限界</text>
  <text x="1236" y="130" font-size="14.5" font-weight="700" fill="#16624b" text-anchor="end">AI打ち手ゾーン ― 接続・伴走・省力</text>
  <g>
    <rect x="42" y="142" width="344" height="104" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="42" y="142" width="30" height="104" rx="12" fill="url(#gWarn)"/><rect x="56" y="142" width="16" height="104" fill="url(#gWarn)"/>
    <text x="57" y="172" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="84" y="165" font-size="13.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text>
    <text x="84" y="186" font-size="11.5" fill="#444">院生が多様化（社会人・留学生・他分野）</text>
    <text x="84" y="203" font-size="11.5" fill="#444">研究費申請・評価資料・学振添削・全員留学</text>
    <text x="84" y="220" font-size="11.5" fill="#444">＝ 個別対応が限界に到達</text>
    <text x="84" y="238" font-size="11" fill="#c4632a" font-weight="700">指導時間が研究時間を侵食</text>
  </g>
  <g>
    <rect x="42" y="254" width="344" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="42" y="254" width="30" height="80" rx="12" fill="url(#gWarn)"/><rect x="56" y="254" width="16" height="80" fill="url(#gWarn)"/>
    <text x="57" y="290" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="84" y="278" font-size="13.5" font-weight="700" fill="#c4632a">育成が多様化・高度化</text>
    <text x="84" y="299" font-size="11.5" fill="#444">成功モデルが多様化、求める水準は上昇</text>
    <text x="84" y="318" font-size="11.5" fill="#444">個別の能力育成と資源の最適投下が必須</text>
  </g>
  <g>
    <rect x="42" y="342" width="344" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="42" y="342" width="30" height="80" rx="12" fill="url(#gWarn)"/><rect x="56" y="342" width="16" height="80" fill="url(#gWarn)"/>
    <text x="57" y="378" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="84" y="366" font-size="13.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text>
    <text x="84" y="387" font-size="11.5" fill="#444">支援が乱立・重複・分散している</text>
    <text x="84" y="406" font-size="11.5" fill="#444">真に必要な個人に届かない</text>
  </g>
  <g>
    <rect x="42" y="430" width="344" height="96" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="42" y="430" width="30" height="96" rx="12" fill="url(#gWarn)"/><rect x="56" y="430" width="16" height="96" fill="url(#gWarn)"/>
    <text x="57" y="482" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="84" y="454" font-size="13.5" font-weight="700" fill="#c4632a">実践知が共有・蓄積されない</text>
    <text x="84" y="475" font-size="11.5" fill="#444">同じ手続きの反復／システム乱立・分散</text>
    <text x="84" y="494" font-size="11.5" fill="#444">異動でゼロリセット</text>
    <text x="84" y="514" font-size="11" fill="#c4632a" font-weight="700">支援者の労力が積み上がらない</text>
  </g>
  <g stroke="#e0a878" stroke-width="2" fill="none">
    <path d="M386 194 C470 194 480 280 540 290" marker-end="url(#mW)"/>
    <path d="M386 294 C460 294 480 296 540 298" marker-end="url(#mW)"/>
    <path d="M386 382 C460 382 480 312 540 306" marker-end="url(#mW)"/>
    <path d="M386 478 C470 478 480 330 540 318" marker-end="url(#mW)"/>
  </g>
  <circle cx="640" cy="300" r="116" fill="url(#burst)"/>
  <circle cx="640" cy="300" r="150" fill="url(#glow)"/>
  <circle cx="640" cy="300" r="84" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="640" y="288" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="312" font-size="14.5" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="640" y="332" font-size="10.5" fill="#DCEEE5" text-anchor="middle">研究×学びをつなぐ</text>
  <g>
    <rect x="554" y="150" width="68" height="92" rx="9" fill="#ffffff" filter="url(#shS)"/>
    <rect x="554" y="150" width="68" height="20" rx="9" fill="url(#gBlue)"/><rect x="554" y="160" width="68" height="10" fill="url(#gBlue)"/>
    <text x="588" y="164" font-size="9.5" font-weight="700" fill="#ffffff" text-anchor="middle">My App</text>
    <rect x="562" y="176" width="52" height="9" rx="2" fill="#E4F2EC"/>
    <rect x="562" y="189" width="52" height="9" rx="2" fill="#FBEDE2"/>
    <rect x="562" y="202" width="36" height="9" rx="2" fill="#E4F2EC"/>
    <rect x="562" y="218" width="52" height="16" rx="4" fill="url(#gGoal)"/>
    <text x="588" y="230" font-size="8.5" font-weight="700" fill="#ffffff" text-anchor="middle">伴走AI</text>
  </g>
  <text x="690" y="170" font-size="10.5" font-weight="700" fill="#16624b">CVデータベース</text>
  <text x="690" y="186" font-size="10.5" font-weight="700" fill="#16624b">＋ RAG実践知</text>
  <text x="690" y="208" font-size="10" fill="#3f7fc4" font-weight="700">学内・行政・企業</text>
  <text x="690" y="222" font-size="10" fill="#3f7fc4">共同研究の許諾済データ</text>
  <g stroke="#27a07c" stroke-width="3" fill="none">
    <path d="M724 268 C800 248 810 200 866 196" marker-end="url(#mA)"/>
    <path d="M724 290 C810 290 820 288 866 288" marker-end="url(#mA)"/>
    <path d="M724 312 C810 312 820 380 866 380" marker-end="url(#mA)"/>
    <path d="M724 332 C800 352 810 470 866 474" marker-end="url(#mA)"/>
  </g>
  <g>
    <rect x="896" y="148" width="344" height="96" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="896" y="148" width="30" height="96" rx="12" fill="url(#gAcc)"/><rect x="910" y="148" width="16" height="96" fill="url(#gAcc)"/>
    <text x="911" y="200" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
    <text x="938" y="172" font-size="13.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
    <text x="938" y="193" font-size="11.5" fill="#444">AI多言語支援でコミュニケーション肩代わり</text>
    <text x="938" y="212" font-size="11.5" fill="#444">ラボ共通支援・支援者どうしを接続</text>
    <text x="938" y="232" font-size="11" fill="#16624b" font-weight="700">教員は研究に集中できる</text>
  </g>
  <g>
    <rect x="896" y="252" width="344" height="120" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="896" y="252" width="30" height="120" rx="12" fill="url(#gAcc)"/><rect x="910" y="252" width="16" height="120" fill="url(#gAcc)"/>
    <text x="911" y="316" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
    <text x="938" y="274" font-size="13.5" font-weight="700" fill="#16624b">院生の研究力を向上</text>
    <text x="938" y="295" font-size="11.5" fill="#444">CVデータベース（学習・スキル・資格記録）</text>
    <text x="938" y="314" font-size="11.5" fill="#444">AI伴走の段階別個別支援</text>
    <text x="938" y="333" font-size="11.5" fill="#444">留学・ラボ・企業マッチング</text>
    <text x="938" y="354" font-size="11" fill="#16624b" font-weight="700">一人ひとりに最適な成長経路</text>
  </g>
  <g>
    <rect x="896" y="380" width="344" height="80" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="896" y="380" width="30" height="80" rx="12" fill="url(#gAcc)"/><rect x="910" y="380" width="16" height="80" fill="url(#gAcc)"/>
    <text x="911" y="416" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
    <text x="938" y="404" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
    <text x="938" y="425" font-size="11.5" fill="#444">①学生の入力ニーズ × ②全学の支援情報を突合</text>
    <text x="938" y="444" font-size="11.5" fill="#444">→ 必要な個人へダイレクト投下</text>
  </g>
  <g>
    <rect x="896" y="468" width="344" height="100" rx="12" fill="#ffffff" filter="url(#shS)"/>
    <rect x="896" y="468" width="30" height="100" rx="12" fill="url(#gAcc)"/><rect x="910" y="468" width="16" height="100" fill="url(#gAcc)"/>
    <text x="911" y="524" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
    <text x="938" y="492" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力を削減・効率化</text>
    <text x="938" y="513" font-size="11.5" fill="#444">データを基盤上で接続しAIで分析</text>
    <text x="938" y="532" font-size="11.5" fill="#444">反復・窓口業務をRAGで省力化</text>
    <text x="938" y="551" font-size="11.5" fill="#444">IR・成果・回答を自動収集・統合分析</text>
  </g>
  <rect x="416" y="368" width="448" height="100" rx="14" fill="#ffffff" filter="url(#shS)"/>
  <text x="640" y="392" font-size="12.5" font-weight="700" fill="#16624b" text-anchor="middle">基盤に集う人々 ― 研究者と支援者が躍動する</text>
  <g transform="translate(458,432)"><circle cx="0" cy="0" r="20" fill="#E4F2EC"/><g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-5" r="5"/><path d="M-9 11 A9 9 0 0 1 9 11"/></g></g>
  <text x="458" y="464" font-size="10.5" font-weight="700" fill="#333" text-anchor="middle">院生</text>
  <g transform="translate(534,432)"><circle cx="0" cy="0" r="20" fill="#FBEDE2"/><g stroke="#d2772f" stroke-width="2" fill="none"><circle cx="-4" cy="-4" r="4"/><circle cx="6" cy="-4" r="4"/><path d="M-11 11 A7 7 0 0 1 0 9"/><path d="M0 9 A7 7 0 0 1 12 11"/></g></g>
  <text x="534" y="464" font-size="10.5" font-weight="700" fill="#333" text-anchor="middle">教員</text>
  <g transform="translate(610,432)"><circle cx="0" cy="0" r="20" fill="#E4F2EC"/><g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-5" r="5"/><path d="M-9 11 A9 9 0 0 1 9 11"/><path d="M7 -8 L11 -11"/></g></g>
  <text x="610" y="464" font-size="10.5" font-weight="700" fill="#333" text-anchor="middle">支援者</text>
  <g transform="translate(686,432)"><circle cx="0" cy="0" r="20" fill="#E4F0FA"/><g stroke="#3f7fc4" stroke-width="2" fill="none"><circle cx="0" cy="-5" r="5"/><path d="M-9 11 A9 9 0 0 1 9 11"/></g></g>
  <text x="686" y="464" font-size="10.5" font-weight="700" fill="#333" text-anchor="middle">企業</text>
  <g transform="translate(762,432)"><circle cx="0" cy="0" r="20" fill="#E4F0FA"/><g stroke="#3f7fc4" stroke-width="2" fill="none"><path d="M-9 -2 L0 -8 L9 -2"/><path d="M-7 -2 V8 M-2 -2 V8 M3 -2 V8 M8 -2 V8 M-9 8 H9"/></g></g>
  <text x="762" y="464" font-size="10.5" font-weight="700" fill="#333" text-anchor="middle">大学IR</text>
  <g transform="translate(820,432)"><text x="0" y="-2" font-size="11" font-weight="700" fill="#16624b" text-anchor="middle">＋</text><text x="0" y="14" font-size="9.5" fill="#3f7fc4" text-anchor="middle">行政</text></g>
  <path d="M28 614 L1206 614 L1240 654 L1206 694 L28 694 Z" fill="url(#gGoal)"/>
  <text x="44" y="640" font-size="12.5" font-weight="700" fill="#ffffff">想定KPI（試算）</text>
  <g font-size="12" fill="#ffffff" font-weight="700">
    <rect x="150" y="624" width="178" height="44" rx="9" fill="#ffffff" opacity="0.14"/>
    <text x="239" y="643" text-anchor="middle">研究時間 ＋3h/週</text>
    <text x="239" y="660" font-size="9.5" fill="#dff3e6" text-anchor="middle">教員・想定/試算</text>
    <rect x="338" y="624" width="178" height="44" rx="9" fill="#ffffff" opacity="0.14"/>
    <text x="427" y="643" text-anchor="middle">定型問い合わせ −50%</text>
    <text x="427" y="660" font-size="9.5" fill="#dff3e6" text-anchor="middle">想定/試算</text>
    <rect x="526" y="624" width="178" height="44" rx="9" fill="#ffffff" opacity="0.14"/>
    <text x="615" y="643" text-anchor="middle">院生の研究力 ＋20pt</text>
    <text x="615" y="660" font-size="9.5" fill="#dff3e6" text-anchor="middle">想定/試算</text>
    <rect x="714" y="624" width="178" height="44" rx="9" fill="#ffffff" opacity="0.14"/>
    <text x="803" y="643" text-anchor="middle">修了率 ＋5pt（中退率↓）</text>
    <text x="803" y="660" font-size="9.5" fill="#dff3e6" text-anchor="middle">想定/試算</text>
  </g>
  <text x="1058" y="640" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">許諾済データを共同研究・経営判断に活用</text>
  <text x="1058" y="660" font-size="11" fill="#dff3e6" text-anchor="middle">統合分析で意思決定を迅速化／アプリ外販も視野</text>
  <text x="640" y="710" font-size="11" fill="#8a8f8d" text-anchor="middle">A〜D の課題と打ち手は1:1で対応／KPIはいずれも想定・試算値（実測ではない）</text>
</svg>

<!-- variant-17：ハブ&スポーク。中央=接続基盤Nexus（appMockup＋goalBurst）。左=課題A-D（warmゾーン面塗り）、右=打ち手A-D（tealゾーン面塗り）、課題→Nexus→打ち手を曲線合流。中央下に登場人物アイコン群、底にgoalBurst色のGOAL帯＋想定/試算KPI。多色リッチ(teal/橙/緑GOAL/青)・packed密度。 -->
