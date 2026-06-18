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
  <circle cx="467" cy="365" r="190" fill="url(#nexusGlow)"/>
  <circle cx="1130" cy="320" r="170" fill="url(#goalGlow)"/>
  <path d="M0 534 L1280 534 L1280 720 L0 720 Z" fill="url(#gBackbone)" opacity="0.16"/>
  <path d="M300 300 C340 300 340 300 348 300" stroke="url(#gBackbone)" stroke-width="18" fill="none" opacity="0.22"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="38" font-size="26" font-weight="700" fill="#ffffff">大学院生の「研究×学び」を支援する全学基盤 ‐ Nexus Uni+ を目指して</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="79" font-size="17" font-weight="700" fill="#16624b">分散する情報・データ・支援・機会をアプリ＆AIで集約 ！ 大学×個人のリンクを促し、限られた学内リソースを最大限に活かす！</text>
  <text x="42" y="110" font-size="14" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="40" y="116" width="256" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="116" width="6" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="132" r="11" fill="#FBEDE2"/>
  <text x="66" y="132" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">A</text>
  <text x="86" y="134" font-size="12" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="56" y="154" font-size="11.2" fill="#666">・院生の多様化で教育負担が増加</text>
  <text x="56" y="171.5" font-size="11.2" fill="#666">　（社会人・留学生・他分野から流入）</text>
  <text x="56" y="189" font-size="11.2" fill="#666">・研究費申請・評価資料など付随業務も増加</text>
  <rect x="40" y="226" width="256" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="226" width="6" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="242" r="11" fill="#FBEDE2"/>
  <text x="66" y="242" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">B</text>
  <text x="86" y="244" font-size="12" font-weight="700" fill="#1f2937">学際化・国際化への人材育成が急務</text>
  <text x="56" y="264" font-size="11.2" fill="#666">・育成モデルが多様化、国際競争に対応</text>
  <text x="56" y="281.5" font-size="11.2" fill="#666">・個々人に異なる能力育成と資源の最適投下</text>
  <text x="56" y="299" font-size="11.2" fill="#666">・能力育成の個別最適化が必須に</text>
  <rect x="40" y="336" width="256" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="336" width="6" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="352" r="11" fill="#FBEDE2"/>
  <text x="66" y="352" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">C</text>
  <text x="86" y="354" font-size="12" font-weight="700" fill="#1f2937">大学→ラボ→個人のミッシングリンク</text>
  <text x="56" y="374" font-size="11.2" fill="#666">・学内の各種サポートが分散している</text>
  <text x="56" y="391.5" font-size="11.2" fill="#666">・支援部署から真に必要とする個人へ</text>
  <text x="56" y="409" font-size="11.2" fill="#666">　ダイレクトに情報が届かない</text>
  <rect x="40" y="446" width="256" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="446" width="6" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="66" cy="462" r="11" fill="#FBEDE2"/>
  <text x="66" y="462" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">D</text>
  <text x="86" y="464" font-size="12" font-weight="700" fill="#1f2937">実践知が共有・蓄積・活用されない</text>
  <text x="56" y="484" font-size="11.2" fill="#666">・手続き・説明・問合せ等の定型業務の反復</text>
  <text x="56" y="501.5" font-size="11.2" fill="#666">・システムとデータが分散</text>
  <text x="56" y="519" font-size="11.2" fill="#666">・異動・引継ぎでノウハウがリセット</text>
  <path d="M290 318 L324 342 L290 366 Z" fill="url(#gWarn)" filter="url(#sh)"/>
  <rect x="318" y="116" width="298" height="424" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="467" cy="355" rx="140" ry="140"/><ellipse cx="467" cy="355" rx="55" ry="140"/><ellipse cx="467" cy="355" rx="140" ry="55"/></g>
  <circle cx="348" cy="136" r="13" fill="#ffffff"/>
  <g transform="translate(348,136)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="366" y="133" font-size="14" font-weight="700" fill="#bfe9da">Nexus基盤 ＝ アプリ ＋ DB ＋ AI</text>
  <text x="366" y="152" font-size="12.5" font-weight="700" fill="#ffffff">〈情報・データ・サポート・機会〉を統合</text>
  <text x="340" y="170" font-size="12.5" font-weight="700" fill="#bfe9da">＝ Research Journey ＋ AI伴走 ＋ RAG</text>
  <line x1="332" y1="181" x2="602" y2="181" stroke="#bfe9da" stroke-width="1" opacity="0.3"/>
  <g transform="translate(0, 10)">
  <circle cx="467" cy="355" r="70" fill="url(#nexusGlow)"/>
  <path d="M444 285 Q396 325 402 363" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M430 412 Q467 452 494 412" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M532 363 Q538 325 490 285" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <text x="394" y="302" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">記録</text>
  <text x="467" y="460" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">分析</text>
  <text x="540" y="302" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">提案</text>
  <circle cx="467" cy="241" r="54" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="467" cy="241" r="54" fill="none" stroke="#1A7A5E" stroke-width="3"/>
  <g transform="translate(467,222)" stroke="#1A7A5E" stroke-width="2.5" fill="none"><rect x="-9.5" y="-13.5" width="19" height="27" rx="4"/><line x1="-4" y1="8.5" x2="4" y2="8.5"/></g>
  <text x="467" y="249" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">アプリ</text>
  <text x="467" y="265" font-size="10.5" fill="#4b8f78" text-anchor="middle">情報を接続</text>
  <circle cx="378" cy="412" r="54" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="378" cy="412" r="54" fill="none" stroke="#1c6e44" stroke-width="3"/>
  <g transform="translate(378,393)" stroke="#1c6e44" stroke-width="2.5" fill="none"><ellipse cx="0" cy="-11" rx="13.5" ry="4.7"/><path d="M-13.5 -11 V8 A13.5 4.7 0 0 0 13.5 8 V-11"/><path d="M-13.5 -1.5 A13.5 4.7 0 0 0 13.5 -1.5"/></g>
  <text x="378" y="420" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">DB</text>
  <text x="378" y="436" font-size="10.5" fill="#4b8f78" text-anchor="middle">データを記録</text>
  <circle cx="556" cy="412" r="54" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="556" cy="412" r="54" fill="none" stroke="#1f2937" stroke-width="3"/>
  <g transform="translate(556,392)" stroke="#1f2937" stroke-width="2.5" fill="none"><rect x="-9.5" y="-9.5" width="19" height="19" rx="2.5"/><path d="M-9.5 -4 H-15 M-9.5 4 H-15 M9.5 -4 H15 M9.5 4 H15 M-4 -9.5 V-15 M4 -9.5 V-15 M-4 9.5 V15 M4 9.5 V15"/></g>
  <text x="556" y="420" font-size="15" font-weight="700" fill="#1f2937" text-anchor="middle">AI</text>
  <text x="556" y="436" font-size="10.5" fill="#555" text-anchor="middle">実践知を敷衍</text>
  <rect x="324" y="472" width="286" height="20" rx="6" fill="#ffffff" opacity="0.12"/>
  <text x="467" y="485" font-size="11.5" font-weight="700" fill="#bfe9da" text-anchor="middle">ナラティブなデータを記録・接続・分析する基盤</text>
  </g>
  <text x="642" y="110" font-size="14" font-weight="700" fill="#16624b">本提案で変わること ― 業務効率化＋教育効果の向上</text>
  <rect x="638" y="116" width="346" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="638" y="116" width="6" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="664" cy="132" r="11" fill="#E4F2EC"/>
  <text x="664" y="132" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">A</text>
  <text x="684" y="134" font-size="12" font-weight="700" fill="#16624b">教員の業務負荷を軽減し研究時間を確保</text>
  <text x="654" y="154" font-size="11.2" fill="#444">・AI多言語支援・ラボ共通支援・支援者への橋渡し</text>
  <text x="654" y="171.5" font-size="11.2" fill="#444">・教員は研究そのものに時間を回せる</text>
  <text x="654" y="189" font-size="11.2" fill="#1A7A5E">［課題A：業務負荷の急増に対応］</text>
  <rect x="638" y="226" width="346" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="638" y="226" width="6" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="664" cy="242" r="11" fill="#E4F2EC"/>
  <text x="664" y="242" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">B</text>
  <text x="684" y="244" font-size="12" font-weight="700" fill="#16624b">多彩な研究課題に対応し研究力を向上</text>
  <text x="654" y="264" font-size="11.2" fill="#444">・Research Journeyログ＋段階別AI伴走で個別支援</text>
  <text x="654" y="281.5" font-size="11.2" fill="#444">・留学先・ラボ・企業（国際共同研究）のマッチング</text>
  <text x="654" y="299" font-size="11.2" fill="#1A7A5E">［課題B：多様化・高度化に対応］</text>
  <rect x="638" y="336" width="346" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="638" y="336" width="6" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="664" cy="352" r="11" fill="#E4F2EC"/>
  <text x="664" y="352" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">C</text>
  <text x="684" y="354" font-size="12" font-weight="700" fill="#16624b">個人ニーズ収集＋個別最適な情報提供</text>
  <text x="654" y="374" font-size="11.2" fill="#444">・①学生が入力したニーズ＋②全学の支援情報を突合</text>
  <text x="654" y="391.5" font-size="11.2" fill="#444">・真に必要な個人へ情報・支援・機会を直に投下</text>
  <text x="654" y="409" font-size="11.2" fill="#1A7A5E">［課題C：ミッシングリンクを解消］</text>
  <rect x="638" y="446" width="346" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="638" y="446" width="6" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="664" cy="462" r="11" fill="#E4F2EC"/>
  <text x="664" y="462" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">D</text>
  <text x="684" y="464" font-size="12" font-weight="700" fill="#16624b">労力を削減し業務を高度化（実践知の敷衍）</text>
  <text x="654" y="484" font-size="11.2" fill="#444">・システムでなく「データ」を接続しAIで分析</text>
  <text x="654" y="501.5" font-size="11.2" fill="#444">・反復・窓口業務をRAGで省力化／IR等を統合分析</text>
  <text x="654" y="519" font-size="11.2" fill="#1A7A5E">［課題D：実践知の死蔵を解消］</text>
  <path d="M608 318 L642 342 L608 366 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <rect x="1006" y="116" width="234" height="424" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <path d="M976 318 L1010 342 L976 366 Z" fill="url(#gWarn)" filter="url(#sh)"/>
  <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2"><path d="M1108 136 L1112 124 L1116 136 L1128 140 L1116 144 L1112 156 L1108 144 L1096 140 Z"/></g>
  <circle cx="1040" cy="136" r="14" fill="#ffffff"/>
  <g transform="translate(1040,136)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1064" y="150" font-size="34" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1035" y="177" font-size="13.5" fill="#dff1e7">研究×学びがつながり、</text>
  <text x="1035" y="195" font-size="13.5" font-weight="700" fill="#ffffff">学生と教職員が躍動する</text>
  <text x="1035" y="213" font-size="13.5" font-weight="700" fill="#ffffff">大学へ！</text>
  <line x1="1030" y1="231" x2="1216" y2="231" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
  <path d="M1032 245 L1040 245 M1037 241 L1041 245 L1037 249" stroke="#bff0d6" stroke-width="2" fill="none"/>
  <text x="1050" y="251" font-size="16.5" font-weight="700" fill="#ffffff">教職員の生産性UP！</text>
  <rect x="1030" y="272" width="186" height="152" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1123" y="291" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">YOKOTE VISIONの実現</text>
  <circle cx="1044" cy="312" r="9.5" fill="#bff0d6"/>
  <text x="1044" y="312" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">1</text>
  <text x="1058" y="315" font-size="12.5" font-weight="700" fill="#ffffff">個人の才能・独創性を</text>
  <text x="1058" y="331" font-size="12.5" font-weight="700" fill="#ffffff">引き出す</text>
  <circle cx="1044" cy="349" r="9.5" fill="#bff0d6"/>
  <text x="1044" y="349" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">2</text>
  <text x="1058" y="352" font-size="12.5" font-weight="700" fill="#ffffff">世界に冠たる「独創的研究」</text>
  <text x="1058" y="368" font-size="12.5" font-weight="700" fill="#ffffff">の促進（国際・学際・共創）</text>
  <circle cx="1044" cy="386" r="9.5" fill="#bff0d6"/>
  <text x="1044" y="386" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">3</text>
  <text x="1058" y="389" font-size="12.5" font-weight="700" fill="#ffffff">専門や職種を超えた</text>
  <text x="1058" y="405" font-size="12.5" font-weight="700" fill="#ffffff">学内協働・対話の促進</text>
  <rect x="1030" y="438" width="186" height="80" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="1123" y="460" font-size="13.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="1123" y="478" font-size="13.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="1123" y="501" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="42" y="557" font-size="15" font-weight="700" fill="#6b6b6b">想定する効果</text>
  <rect x="40" y="562" width="300" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="562" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="59" y="588" font-size="26" fill="#16624b" dominant-baseline="central">＋3<tspan font-size="13" font-weight="400">h/週</tspan></text>
  <text x="150" y="586" font-size="14.5" font-weight="700" fill="#1f2937">教員1人あたりの</text>
  <text x="150" y="602" font-size="14.5" font-weight="700" fill="#1f2937">研究時間を確保</text>
  <rect x="362" y="562" width="300" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="362" y="562" width="5" height="52" rx="2.5" fill="url(#gWarn)"/>
  <text x="372" y="588" font-size="26" fill="#c4632a" dominant-baseline="central">+30<tspan font-size="13" font-weight="400">%</tspan></text>
  <text x="466" y="586" font-size="14.5" font-weight="700" fill="#1f2937">高度化に使える時間の増加</text>
  <text x="466" y="602" font-size="14.5" font-weight="700" fill="#1f2937">定型問合せ・窓口業務の削減</text>
  <rect x="684" y="562" width="300" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="684" y="562" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="697" y="588" font-size="26" fill="#16624b" dominant-baseline="central">＋10<tspan font-size="13" font-weight="400">pt</tspan></text>
  <text x="797" y="586" font-size="14.5" font-weight="700" fill="#1f2937">院生の研究力</text>
  <text x="797" y="602" font-size="14.5" font-weight="700" fill="#1f2937">(自己効力感・成長実感へ)</text>
  <rect x="1006" y="562" width="234" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1006" y="562" width="5" height="52" rx="2.5" fill="url(#gGoal)"/>
  <text x="1023" y="588" font-size="25" fill="#1c6e44" dominant-baseline="central">＋5<tspan font-size="12" font-weight="400">%</tspan></text>
  <text x="1090" y="586" font-size="13.5" font-weight="700" fill="#1f2937">レピュテーション向上</text>
  <text x="1090" y="602" font-size="13.5" font-weight="700" fill="#1f2937">大学UXの変革</text>
  <rect x="40" y="619" width="300" height="22" rx="5" fill="#1b6ca8"/>
  <text x="190" y="630" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">大学全体の研究高度化</text>
  <rect x="362" y="619" width="300" height="22" rx="5" fill="#b84d5b"/>
  <text x="512" y="630" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">Cut by DXの支援</text>
  <rect x="684" y="619" width="300" height="22" rx="5" fill="#2e9684"/>
  <text x="834" y="630" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">AI時代の創造的人材の育成</text>
  <rect x="40" y="646" width="1200" height="46" rx="10" fill="#eaf1fb"/>
  <rect x="40" y="646" width="6" height="46" rx="3" fill="url(#gBlue)"/>
  <circle cx="74" cy="669" r="9.5" fill="#dceaf8"/>
  <text x="74" y="669" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">1</text>
  <text x="96" y="663" font-size="14.5" font-weight="700" fill="#1f2937">許諾済データの共有・利活用</text>
  <text x="96" y="679" font-size="11.2" fill="#555">個人情報を削除し、学内・行政・企業の共同研究にも活用</text>
  <circle cx="456" cy="669" r="9.5" fill="#dceaf8"/>
  <text x="456" y="669" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">2</text>
  <text x="478" y="663" font-size="14.5" font-weight="700" fill="#1f2937">AI企業と組んでノウハウ・アプリを販売</text>
  <text x="478" y="679" font-size="11.2" fill="#555">蓄積した実践知・基盤を外部へ展開</text>
  <circle cx="816" cy="669" r="9.5" fill="#dceaf8"/>
  <text x="816" y="669" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">3</text>
  <text x="838" y="663" font-size="14.5" font-weight="700" fill="#1f2937">経営判断に資する情報提供が迅速化</text>
  <text x="838" y="679" font-size="11.2" fill="#555">データの統合・分析が容易に</text>
</svg>
