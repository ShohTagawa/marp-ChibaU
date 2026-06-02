---
marp: false
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
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#43be74"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3f7fc4"/><stop offset="1" stop-color="#2a5d96"/></linearGradient>
    <linearGradient id="gBackbone" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="0.42" stop-color="#27a07c"/><stop offset="0.78" stop-color="#1f8f6e"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#43be74" stop-opacity="0.5"/><stop offset="1" stop-color="#43be74" stop-opacity="0"/></radialGradient>
    <radialGradient id="nexusGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#27a07c" stop-opacity="0.42"/><stop offset="1" stop-color="#27a07c" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1c6e44"/></marker>
    <marker id="mL" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#7fd0b0"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f6fafe"/>
  <rect x="0" y="88" width="1280" height="540" fill="#eef5fb" opacity="0.6"/>
  <g opacity="0.13" fill="#3f7fc4"><circle cx="150" cy="150" r="3"/><circle cx="230" cy="200" r="2.6"/><circle cx="120" cy="320" r="2.6"/><circle cx="360" cy="135" r="2.6"/><circle cx="520" cy="170" r="3"/><circle cx="660" cy="130" r="2.6"/><circle cx="780" cy="180" r="2.6"/><circle cx="920" cy="150" r="3"/><circle cx="1060" cy="200" r="2.6"/><circle cx="1180" cy="160" r="2.6"/><circle cx="980" cy="320" r="2.6"/><circle cx="1140" cy="300" r="2.6"/><circle cx="700" cy="540" r="2.6"/><circle cx="430" cy="540" r="2.6"/><circle cx="240" cy="470" r="2.6"/><circle cx="1080" cy="490" r="2.6"/><circle cx="560" cy="320" r="2.6"/></g>
  <g opacity="0.10" stroke="#3f7fc4" stroke-width="1" fill="none"><path d="M150 150 L230 200"/><path d="M230 200 L360 135"/><path d="M360 135 L520 170"/><path d="M520 170 L660 130"/><path d="M660 130 L780 180"/><path d="M780 180 L920 150"/><path d="M920 150 L1060 200"/><path d="M1060 200 L1180 160"/><path d="M120 320 L240 470"/><path d="M980 320 L1140 300"/><path d="M560 320 L700 540"/><path d="M430 540 L700 540"/></g>
  <circle cx="495" cy="342" r="190" fill="url(#nexusGlow)"/>
  <circle cx="1140" cy="320" r="170" fill="url(#goalGlow)"/>
  <path d="M40 560 L1240 560 L1240 596 L40 596 Z" fill="url(#gBackbone)" opacity="0.16"/>
  <path d="M300 300 C340 300 340 300 348 300" stroke="url(#gBackbone)" stroke-width="18" fill="none" opacity="0.22"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="38" font-size="26" font-weight="700" fill="#ffffff">大学院生の〈研究×学び〉を支援する全学基盤 ― Nexus University を目指して</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="79" font-size="17" font-weight="700" fill="#16624b">限られたリソース（人手・労力・時間）を最大限に活かし、分散する〈情報・データ・サポート・機会〉を「接続」</text>
  <text x="42" y="110" font-size="12" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="116" width="256" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="107" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="140" r="11" fill="#FBEDE2"/>
  <text x="66" y="145" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="145" font-size="12.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="170" font-size="10" fill="#666">・院生の多様化で教育負担が増加</text>
  <text x="56" y="189" font-size="10" fill="#666">　（社会人・留学生・他分野から流入）</text>
  <text x="56" y="208" font-size="10" fill="#666">・研究費申請・評価資料など付随業務も増加</text>
  <rect x="40" y="231" width="256" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="231" width="6" height="107" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="255" r="11" fill="#FBEDE2"/>
  <text x="66" y="260" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="260" font-size="12.5" font-weight="700" fill="#1f2937">学際化・国際化への人材育成が急務</text>
  <text x="56" y="285" font-size="10" fill="#666">・育成モデルが多様化、国際競争に対応</text>
  <text x="56" y="304" font-size="10" fill="#666">・個々人に異なる能力育成と資源の最適投下</text>
  <text x="56" y="323" font-size="10" fill="#666">・能力育成の個別最適化が必須に</text>
  <rect x="40" y="346" width="256" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="346" width="6" height="107" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="370" r="11" fill="#FBEDE2"/>
  <text x="66" y="375" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="375" font-size="12.5" font-weight="700" fill="#1f2937">大学→ラボ→個人のミッシングリンク</text>
  <text x="56" y="400" font-size="10" fill="#666">・学内の各種サポートが分散している</text>
  <text x="56" y="419" font-size="10" fill="#666">・支援部署から真に必要とする個人へ</text>
  <text x="56" y="438" font-size="10" fill="#666">　ダイレクトに情報が届かない</text>
  <rect x="40" y="461" width="256" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="461" width="6" height="107" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="485" r="11" fill="#FBEDE2"/>
  <text x="66" y="490" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="490" font-size="12.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積・活用されない</text>
  <text x="56" y="515" font-size="10" fill="#666">・手続き・説明・問合せ等の定型業務の反復</text>
  <text x="56" y="534" font-size="10" fill="#666">・システムとデータが分散</text>
  <text x="56" y="553" font-size="10" fill="#666">・異動・引継ぎでノウハウがリセット</text>
  <path d="M300 318 L344 342 L300 366 Z" fill="url(#gWarn)" filter="url(#sh)"/>
  <rect x="348" y="116" width="298" height="452" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="497" cy="342" rx="140" ry="140"/><ellipse cx="497" cy="342" rx="55" ry="140"/><ellipse cx="497" cy="342" rx="140" ry="55"/></g>
  <circle cx="378" cy="148" r="13" fill="#ffffff"/>
  <g transform="translate(378,148)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="400" y="145" font-size="13" font-weight="700" fill="#bfe9da">Nexus基盤 ＝ アプリ ＋ DB ＋ AI</text>
  <text x="400" y="166" font-size="11" fill="#eaf6f0">〈情報・データ・サポート・機会〉を統合</text>
  <text x="400" y="184" font-size="11.5" font-weight="700" fill="#bfe9da">＝ Research Journey ＋ AI伴走 ＋ RAG</text>
  <line x1="362" y1="196" x2="632" y2="196" stroke="#bfe9da" stroke-width="1" opacity="0.3"/>
  <circle cx="497" cy="380" r="50" fill="url(#nexusGlow)"/>
  <path d="M478 335 Q439 369 444 404" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M467 442 Q497 474 527 442" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M550 404 Q555 369 516 335" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <text x="448" y="347" font-size="9.5" font-weight="700" fill="#dff3ea" text-anchor="middle">記録</text>
  <text x="497" y="472" font-size="9.5" font-weight="700" fill="#dff3ea" text-anchor="middle">分析</text>
  <text x="548" y="347" font-size="9.5" font-weight="700" fill="#dff3ea" text-anchor="middle">提案</text>
  <circle cx="497" cy="297" r="42" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="497" cy="297" r="42" fill="none" stroke="#1A7A5E" stroke-width="3"/>
  <g transform="translate(497,281)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-7" y="-10" width="14" height="20" rx="3"/><line x1="-3" y1="6" x2="3" y2="6"/></g>
  <text x="497" y="304" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">アプリ</text>
  <text x="497" y="319" font-size="8.5" fill="#4b8f78" text-anchor="middle">情報を接続</text>
  <circle cx="425" cy="442" r="42" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="425" cy="442" r="42" fill="none" stroke="#1c6e44" stroke-width="3"/>
  <g transform="translate(425,426)" stroke="#1c6e44" stroke-width="2" fill="none"><ellipse cx="0" cy="-8" rx="10" ry="3.5"/><path d="M-10 -8 V6 A10 3.5 0 0 0 10 6 V-8"/><path d="M-10 -1 A10 3.5 0 0 0 10 -1"/></g>
  <text x="425" y="449" font-size="12" font-weight="700" fill="#16624b" text-anchor="middle">DB</text>
  <text x="425" y="463" font-size="8.5" fill="#4b8f78" text-anchor="middle">データを記録</text>
  <circle cx="569" cy="442" r="42" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="569" cy="442" r="42" fill="none" stroke="#1f2937" stroke-width="3"/>
  <g transform="translate(569,425)" stroke="#1f2937" stroke-width="2" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-11 M-7 3 H-11 M7 -3 H11 M7 3 H11 M-3 -7 V-11 M3 -7 V-11 M-3 7 V11 M3 7 V11"/></g>
  <text x="569" y="449" font-size="12" font-weight="700" fill="#1f2937" text-anchor="middle">AI</text>
  <text x="569" y="463" font-size="8.5" fill="#555" text-anchor="middle">実践知を敷衍</text>
  <rect x="360" y="540" width="274" height="22" rx="6" fill="#ffffff" opacity="0.12"/>
  <text x="497" y="555" font-size="11" font-weight="700" fill="#bfe9da" text-anchor="middle">ナラティブなデータを記録・接続・分析する基盤</text>
  <text x="668" y="110" font-size="12" font-weight="700" fill="#16624b">AI活用で変わること（A–D）― 業務効率化＋教育効果の向上</text>
  <rect x="664" y="116" width="346" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="116" width="6" height="107" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="140" r="11" fill="#E4F2EC"/>
  <text x="690" y="145" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">A</text>
  <text x="710" y="145" font-size="12.5" font-weight="700" fill="#16624b">教員の業務負荷を軽減し研究時間を確保</text>
  <text x="680" y="170" font-size="10" fill="#444">・AI多言語支援・ラボ共通支援・支援者への橋渡し</text>
  <text x="680" y="189" font-size="10" fill="#444">・教員は研究そのものに時間を回せる</text>
  <text x="680" y="208" font-size="10" fill="#1A7A5E">［課題A：業務負荷の急増に対応］</text>
  <rect x="664" y="231" width="346" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="231" width="6" height="107" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="255" r="11" fill="#E4F2EC"/>
  <text x="690" y="260" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">B</text>
  <text x="710" y="260" font-size="12.5" font-weight="700" fill="#16624b">多彩な研究課題に対応し研究力を向上</text>
  <text x="680" y="285" font-size="10" fill="#444">・Research Journeyログ＋段階別AI伴走で個別支援</text>
  <text x="680" y="304" font-size="10" fill="#444">・留学先・ラボ・企業（国際共同研究）のマッチング</text>
  <text x="680" y="323" font-size="10" fill="#1A7A5E">［課題B：多様化・高度化に対応］</text>
  <rect x="664" y="346" width="346" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="346" width="6" height="107" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="370" r="11" fill="#E4F2EC"/>
  <text x="690" y="375" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">C</text>
  <text x="710" y="375" font-size="12.5" font-weight="700" fill="#16624b">個人ニーズ収集＋個別最適な情報提供</text>
  <text x="680" y="400" font-size="10" fill="#444">・①学生が入力したニーズ＋②全学の支援情報を突合</text>
  <text x="680" y="419" font-size="10" fill="#444">・真に必要な個人へ情報・支援・機会を直に投下</text>
  <text x="680" y="438" font-size="10" fill="#1A7A5E">［課題C：ミッシングリンクを解消］</text>
  <rect x="664" y="461" width="346" height="107" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="664" y="461" width="6" height="107" rx="3" fill="url(#gAccH)"/>
  <circle cx="690" cy="485" r="11" fill="#E4F2EC"/>
  <text x="690" y="490" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">D</text>
  <text x="710" y="490" font-size="12.5" font-weight="700" fill="#16624b">労力を削減し業務を高度化（実践知の敷衍）</text>
  <text x="680" y="515" font-size="10" fill="#444">・システムでなく「データ」を接続しAIで分析</text>
  <text x="680" y="534" font-size="10" fill="#444">・反復・窓口業務をRAGで省力化／IR等を統合分析</text>
  <text x="680" y="553" font-size="10" fill="#1A7A5E">［課題D：実践知の死蔵を解消］</text>
  <path d="M633 318 L677 342 L633 366 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <path d="M1009 318 L1053 342 L1009 366 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <rect x="1052" y="116" width="188" height="452" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2"><path d="M1146 150 L1150 138 L1154 150 L1166 154 L1154 158 L1150 170 L1146 158 L1134 154 Z"/></g>
  <circle cx="1078" cy="150" r="14" fill="#ffffff"/>
  <g transform="translate(1078,150)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1102" y="164" font-size="34" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1068" y="196" font-size="13.5" fill="#dff1e7">研究×学びがつながり</text>
  <text x="1068" y="217" font-size="13.5" font-weight="700" fill="#ffffff">学生と教職員が躍動する</text>
  <text x="1068" y="238" font-size="13.5" font-weight="700" fill="#ffffff">大学へ</text>
  <line x1="1068" y1="256" x2="1224" y2="256" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
  <circle cx="1076" cy="278" r="4" fill="#bff0d6"/>
  <text x="1088" y="282" font-size="12.5" font-weight="700" fill="#ffffff">教職員の生産性が上がる</text>
  <circle cx="1076" cy="302" r="4" fill="#bff0d6"/>
  <text x="1088" y="306" font-size="12.5" font-weight="700" fill="#ffffff">次の予算に繋がる</text>
  <rect x="1068" y="326" width="156" height="118" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1146" y="349" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">横手ビジョンの実現</text>
  <circle cx="1082" cy="374" r="3.5" fill="#bff0d6"/>
  <text x="1092" y="378" font-size="9.5" fill="#eafaf1">全員が一丸となり共創</text>
  <circle cx="1082" cy="398" r="3.5" fill="#bff0d6"/>
  <text x="1092" y="402" font-size="9.5" fill="#eafaf1">個々の可能性を最大化</text>
  <circle cx="1082" cy="422" r="3.5" fill="#bff0d6"/>
  <text x="1092" y="426" font-size="9.5" fill="#eafaf1">知の共鳴で未来を拓く</text>
  <rect x="1068" y="460" width="156" height="96" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1146" y="486" font-size="12.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="1146" y="505" font-size="12.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1146" y="530" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="42" y="586" font-size="11" font-weight="700" fill="#9a9a9a">想定する効果</text>
  <rect x="40" y="592" width="285" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="592" width="5" height="54" rx="2.5" fill="url(#gAccH)"/>
  <text x="58" y="630" font-size="28" font-weight="700" fill="#16624b">＋3<tspan font-size="13" font-weight="400">h/週</tspan></text>
  <text x="155" y="612" font-size="10.5" fill="#555">教員1人あたりの</text>
  <text x="155" y="628" font-size="10.5" fill="#555">研究時間を確保</text>
  <rect x="345" y="592" width="285" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="345" y="592" width="5" height="54" rx="2.5" fill="url(#gWarn)"/>
  <text x="363" y="630" font-size="28" font-weight="700" fill="#c4632a">+30<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="470" y="612" font-size="10.5" fill="#555">高度化に使える時間の増加</text>
  <text x="470" y="628" font-size="10.5" fill="#555">定型問合せ・窓口業務の削減</text>
  <rect x="650" y="592" width="285" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="650" y="592" width="5" height="54" rx="2.5" fill="url(#gAccH)"/>
  <text x="668" y="630" font-size="28" font-weight="700" fill="#16624b">＋10<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="778" y="612" font-size="10.5" fill="#555">院生の研究力</text>
  <text x="778" y="628" font-size="10.5" fill="#555">（自己効力感） ※期待値</text>
  <rect x="955" y="592" width="285" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="955" y="592" width="5" height="54" rx="2.5" fill="url(#gGoal)"/>
  <text x="973" y="630" font-size="28" font-weight="700" fill="#1c6e44">＋5<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="1080" y="612" font-size="10.5" fill="#555">大学のレピュテーションの向上</text>
  <text x="1080" y="628" font-size="10.5" fill="#555">大学UXの変革</text>
  <rect x="40" y="652" width="1200" height="52" rx="12" fill="#eaf1fb"/>
  <rect x="40" y="652" width="6" height="52" rx="3" fill="url(#gBlue)"/>
  <circle cx="70" cy="691" r="8" fill="#dceaf8"/>
  <text x="70" y="694" font-size="10" font-weight="700" fill="#2a5d96" text-anchor="middle">1</text>
  <text x="84" y="687" font-size="9.5" font-weight="700" fill="#1f2937">許諾済データの共有・利活用</text>
  <text x="84" y="700" font-size="8.5" fill="#555">個人情報を削除し、学内・行政・企業の共同研究で</text>
  <circle cx="476" cy="691" r="8" fill="#dceaf8"/>
  <text x="476" y="694" font-size="10" font-weight="700" fill="#2a5d96" text-anchor="middle">2</text>
  <text x="490" y="687" font-size="9.5" font-weight="700" fill="#1f2937">AI企業と組んでノウハウ・アプリを販売</text>
  <text x="490" y="700" font-size="8.5" fill="#555">蓄積した実践知・基盤を外部へ展開</text>
  <circle cx="836" cy="691" r="8" fill="#dceaf8"/>
  <text x="836" y="694" font-size="10" font-weight="700" fill="#2a5d96" text-anchor="middle">3</text>
  <text x="850" y="687" font-size="9.5" font-weight="700" fill="#1f2937">経営判断に資する情報提供が迅速化</text>
  <text x="850" y="700" font-size="8.5" fill="#555">データの統合・分析が容易に</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-28：骨格=バックボーン＋中央ヒーロー結節点(Nexus)。左=課題A-D流入(橙)→中央=接続基盤Nexus(グロー・アプリ画像)→右=AI打ち手A-D(緑、課題1:1明示)→右端GOALバースト(緑・goalBurst)。0層=世界地図風ドット＆都市結線(青)。多色リッチ(teal＋橙＋緑GOAL＋青背景)。viewBox 1280x720・空行なし。課題/AI/Nexus/GOALの3列を116-568へ縦長化(カード高107)／GOAL枠内テキスト拡大／想定する効果の行を592-646・収益化バンドを652-704へコンパクト配置。 -->
