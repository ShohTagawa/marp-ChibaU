---
marp: true
theme: ponchie
paginate: false
size: 4:3
header: ''
footer: ''
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg" font-family="'BIZ UDPGothic', sans-serif">
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
  <rect x="0" y="0" width="960" height="720" fill="#f6fafe"/>
  <rect x="0" y="88" width="960" height="540" fill="#eef5fb" opacity="0.6"/>
  <g opacity="0.13" fill="#3f7fc4"><circle cx="113" cy="150" r="3"/><circle cx="173" cy="200" r="2.6"/><circle cx="90" cy="320" r="2.6"/><circle cx="270" cy="135" r="2.6"/><circle cx="390" cy="170" r="3"/><circle cx="495" cy="130" r="2.6"/><circle cx="585" cy="180" r="2.6"/><circle cx="690" cy="150" r="3"/><circle cx="795" cy="200" r="2.6"/><circle cx="885" cy="160" r="2.6"/><circle cx="735" cy="320" r="2.6"/><circle cx="855" cy="300" r="2.6"/><circle cx="525" cy="540" r="2.6"/><circle cx="323" cy="540" r="2.6"/><circle cx="180" cy="470" r="2.6"/><circle cx="810" cy="490" r="2.6"/><circle cx="420" cy="320" r="2.6"/></g>
  <g opacity="0.10" stroke="#3f7fc4" stroke-width="1" fill="none"><path d="M113 150 L173 200"/><path d="M173 200 L270 135"/><path d="M270 135 L390 170"/><path d="M390 170 L495 130"/><path d="M495 130 L585 180"/><path d="M585 180 L690 150"/><path d="M690 150 L795 200"/><path d="M795 200 L885 160"/><path d="M90 320 L180 470"/><path d="M735 320 L855 300"/><path d="M420 320 L525 540"/><path d="M323 540 L525 540"/></g>
  <circle cx="379" cy="365" r="130" fill="url(#nexusGlow)"/>
  <circle cx="876" cy="320" r="110" fill="url(#goalGlow)"/>
  <path d="M0 550 L960 550 L960 720 L0 720 Z" fill="url(#gBackbone)" opacity="0.16"/>
  <path d="M235 300 C250 300 250 300 259 300" stroke="url(#gBackbone)" stroke-width="18" fill="none" opacity="0.22"/>
  <rect x="0" y="0" width="960" height="56" fill="url(#gAccH)"/>
  <text x="418" y="38" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle">大学院生の「研究×学び」を支援する全学基盤 ― Nexus Uni+ を目指して</text>
  <image href="./src/logo.png" x="835.3" y="18" width="110.7" height="22.1"/>
  <rect x="0" y="56" width="960" height="32" fill="#E4F2EC"/>
  <text x="23" y="80" font-size="16.3" font-weight="700" fill="#16624b">分散する情報・データ・支援・機会をアプリ＆AIで集約！ 大学×個人のリンクを促し、限られた学内リソースを最大限に活かす！</text>
  <text x="17" y="110" font-size="13" font-weight="700" fill="#c4632a">大学が抱える課題（A–D）</text>
  <rect x="15" y="116" width="220" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="15" y="116" width="5" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="37" cy="132" r="11" fill="#FBEDE2"/>
  <text x="37" y="132" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">A</text>
  <text x="55" y="134" font-size="10.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="29" y="157" font-size="9.5" fill="#666">・院生の多様化で教育負担が増加</text>
  <text x="29" y="174.5" font-size="9.5" fill="#666">　（社会人・留学生・他分野から流入）</text>
  <text x="29" y="192" font-size="9.5" fill="#666">・研究費申請・評価資料など付随業務も増加</text>
  <rect x="15" y="226" width="220" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="15" y="226" width="5" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="37" cy="242" r="11" fill="#FBEDE2"/>
  <text x="37" y="242" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">B</text>
  <text x="55" y="244" font-size="10.5" font-weight="700" fill="#1f2937">学際化・国際化への人材育成が急務</text>
  <text x="29" y="267" font-size="9.5" fill="#666">・育成モデルが多様化、国際競争に対応</text>
  <text x="29" y="284.5" font-size="9.5" fill="#666">・個々人に異なる能力育成と資源の最適投下</text>
  <text x="29" y="302" font-size="9.5" fill="#666">・能力育成と個別最適化が必須に</text>
  <rect x="15" y="336" width="220" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="15" y="336" width="5" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="37" cy="352" r="11" fill="#FBEDE2"/>
  <text x="37" y="352" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">C</text>
  <text x="55" y="354" font-size="10.5" font-weight="700" fill="#1f2937">大学→ラボ→個人のミッシングリンク</text>
  <text x="29" y="377" font-size="9.5" fill="#666">・学内の各種サポートが分散している</text>
  <text x="29" y="394.5" font-size="9.5" fill="#666">・支援部署から真に必要とする個人へ</text>
  <text x="29" y="412" font-size="9.5" fill="#666">　ダイレクトに情報が届かない</text>
  <rect x="15" y="446" width="220" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="15" y="446" width="5" height="90" rx="3" fill="url(#gWarn)"/>
  <circle cx="37" cy="462" r="11" fill="#FBEDE2"/>
  <text x="37" y="462" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle" dominant-baseline="central">D</text>
  <text x="55" y="464" font-size="10.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積・活用されない</text>
  <text x="29" y="487" font-size="9.5" fill="#666">・手続き・説明・問合せ等の定型業務の反復</text>
  <text x="29" y="504.5" font-size="9.5" fill="#666">・システムとデータが分散</text>
  <text x="29" y="522" font-size="9.5" fill="#666">・異動・引継ぎでノウハウがリセット</text>
  <path d="M239 318 L255 342 L239 366 Z" fill="url(#gWarn)" filter="url(#sh)"/>
  <rect x="259" y="116" width="240" height="424" rx="18" fill="url(#gNexus)" filter="url(#sh)"/>
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.2" fill="none"><ellipse cx="379" cy="355" rx="140" ry="140"/><ellipse cx="379" cy="355" rx="55" ry="140"/><ellipse cx="379" cy="355" rx="140" ry="55"/></g>
  <text x="256" y="110" font-size="13" font-weight="700" fill="#16624b">Nexus基盤 ＝ アプリ ＋ DB ＋ AI</text>
  <text x="269" y="138" font-size="13.5" font-weight="700" fill="#ffffff">〈情報・データ・サポート・機会〉を統合</text>
  <text x="280" y="160" font-size="15" font-weight="700" fill="#bfe9da">＝ Research Journey</text>
  <text x="283" y="183" font-size="15" font-weight="700" fill="#bfe9da">　 ＋ AI伴走 ＋ RAG</text>
  <line x1="269" y1="196" x2="489" y2="196" stroke="#bfe9da" stroke-width="1" opacity="0.3"/>
  <g transform="translate(10, 10)">
  <circle cx="369" cy="355" r="70" fill="url(#nexusGlow)"/>
  <path d="M346 285 Q298 315 304 338" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M332 385 Q369 425 406 385" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <path d="M434 338 Q440 310 392 285" stroke="#7fd0b0" stroke-width="3.2" fill="none" marker-end="url(#mL)"/>
  <text x="296" y="292" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">記録</text>
  <text x="369" y="440" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">分析</text>
  <text x="442" y="292" font-size="19" font-weight="700" fill="#dff3ea" text-anchor="middle">提案</text>
  <circle cx="369" cy="241" r="40" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="369" cy="241" r="40" fill="none" stroke="#1A7A5E" stroke-width="3"/>
  <g transform="translate(369,222)" stroke="#1A7A5E" stroke-width="2.5" fill="none"><rect x="-9.5" y="-13.5" width="19" height="27" rx="4"/><line x1="-4" y1="8.5" x2="4" y2="8.5"/></g>
  <text x="369" y="249" font-size="12.5" font-weight="700" fill="#16624b" text-anchor="middle">アプリ</text>
  <text x="369" y="265" font-size="9.5" fill="#4b8f78" text-anchor="middle">情報を接続</text>
  <circle cx="310" cy="385" r="40" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="310" cy="385" r="40" fill="none" stroke="#1c6e44" stroke-width="3"/>
  <g transform="translate(310,366)" stroke="#1c6e44" stroke-width="2.5" fill="none"><ellipse cx="0" cy="-11" rx="13.5" ry="4.7"/><path d="M-13.5 -11 V8 A13.5 4.7 0 0 0 13.5 8 V-11"/><path d="M-13.5 -1.5 A13.5 4.7 0 0 0 13.5 -1.5"/></g>
  <text x="310" y="398" font-size="12.5" font-weight="700" fill="#16624b" text-anchor="middle">DB</text>
  <text x="310" y="410" font-size="9.5" fill="#4b8f78" text-anchor="middle">データを記録</text>
  <circle cx="428" cy="385" r="40" fill="#ffffff" filter="url(#sh)"/>
  <circle cx="428" cy="385" r="40" fill="none" stroke="#1f2937" stroke-width="3"/>
  <g transform="translate(428,365)" stroke="#1f2937" stroke-width="2.5" fill="none"><rect x="-9.5" y="-9.5" width="19" height="19" rx="2.5"/><path d="M-9.5 -4 H-15 M-9.5 4 H-15 M9.5 -4 H15 M9.5 4 H15 M-4 -9.5 V-15 M4 -9.5 V-15 M-4 9.5 V15 M4 9.5 V15"/></g>
  <text x="428" y="398" font-size="12.5" font-weight="700" fill="#1f2937" text-anchor="middle">AI</text>
  <text x="428" y="410" font-size="9.5" fill="#555" text-anchor="middle">実践知を敷衍</text>
  <rect x="255" y="455" width="228" height="53" rx="6" fill="#ffffff" opacity="0.12"/>
  <text x="369" y="478" font-size="15" font-weight="700" fill="#bfe9da" text-anchor="middle">ナラティブなデータを</text>
  <text x="369" y="496" font-size="15" font-weight="700" fill="#bfe9da" text-anchor="middle">記録・接続・分析する基盤</text>
  </g>
  <text x="525" y="110" font-size="13" font-weight="700" fill="#16624b">本提案で変わること ― 業務効率化＋教育効果の向上</text>
  <rect x="522" y="116" width="260" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="116" width="5" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="544" cy="132" r="11" fill="#E4F2EC"/>
  <text x="544" y="132" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">A</text>
  <text x="562" y="134" font-size="10.2" font-weight="700" fill="#16624b">教員の業務負荷を軽減し研究時間を確保</text>
  <text x="536" y="157" font-size="9.5" fill="#444">・AI多言語支援・ラボ共通支援・支援者への橋渡し</text>
  <text x="536" y="174.5" font-size="9.5" fill="#444">・教員は研究そのものに時間を回せる</text>
  <text x="536" y="189" font-size="8.8" fill="#1A7A5E">［課題A：業務負荷の急増に対応］</text>
  <rect x="522" y="226" width="260" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="226" width="5" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="544" cy="242" r="11" fill="#E4F2EC"/>
  <text x="544" y="242" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">B</text>
  <text x="562" y="244" font-size="10.2" font-weight="700" fill="#16624b">多彩な研究課題に対応し研究力を向上</text>
  <text x="536" y="267" font-size="9.5" fill="#444">・Research Journeyログ＋段階別AI伴走で個別支援</text>
  <text x="536" y="284.5" font-size="9.5" fill="#444">・留学先・ラボ・企業（国際共同研究）のマッチング</text>
  <text x="536" y="299" font-size="8.8" fill="#1A7A5E">［課題B：多様化・高度化に対応］</text>
  <rect x="522" y="336" width="260" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="336" width="5" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="544" cy="352" r="11" fill="#E4F2EC"/>
  <text x="544" y="352" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">C</text>
  <text x="562" y="354" font-size="10.2" font-weight="700" fill="#16624b">個人ニーズ収集＋個別最適な情報提供</text>
  <text x="536" y="377" font-size="9.5" fill="#444">・①学生が入力したニーズ＋②全学の支援情報を突合</text>
  <text x="536" y="394.5" font-size="9.5" fill="#444">・真に必要な個人へ情報・支援・機会を直に投下</text>
  <text x="536" y="409" font-size="8.8" fill="#1A7A5E">［課題C：ミッシングリンクを解消］</text>
  <rect x="522" y="446" width="260" height="90" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="522" y="446" width="5" height="90" rx="3" fill="url(#gAccH)"/>
  <circle cx="544" cy="462" r="11" fill="#E4F2EC"/>
  <text x="544" y="462" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle" dominant-baseline="central">D</text>
  <text x="562" y="464" font-size="10.2" font-weight="700" fill="#16624b">労力を削減し業務を高度化（実践知の敷衍）</text>
  <text x="536" y="487" font-size="9.5" fill="#444">・システムでなく「データ」を接続しAIで分析</text>
  <text x="536" y="504.5" font-size="9.5" fill="#444">・反復・窓口業務をRAGで省力化／IR等を統合分析</text>
  <text x="536" y="519" font-size="8.8" fill="#1A7A5E">［課題D：実践知の死蔵を解消］</text>
  <path d="M503 318 L519 342 L503 366 Z" fill="url(#gGoal)" filter="url(#sh)"/>
  <rect x="807" y="116" width="138" height="424" rx="18" fill="url(#gGoal)" filter="url(#sh)"/>
  <path d="M787 318 L803 342 L787 366 Z" fill="url(#gWarn)" filter="url(#sh)"/>
  <g opacity="0.16" fill="none" stroke="#ffffff" stroke-width="2"><path d="M862 136 L866 124 L870 136 L882 140 L870 144 L866 156 L862 144 L850 140 Z"/></g>
  <circle cx="829" cy="136" r="14" fill="#ffffff"/>
  <g transform="translate(829,136)" stroke="#1c6e44" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="853" y="150" font-size="21" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="815" y="177" font-size="9.5" fill="#dff1e7">研究×学びがつながり、</text>
  <text x="815" y="195" font-size="9.5" font-weight="700" fill="#ffffff">学生と教職員が躍動する</text>
  <text x="815" y="213" font-size="9.5" font-weight="700" fill="#ffffff">大学へ！</text>
  <line x1="813" y1="231" x2="933" y2="231" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
  <text x="813" y="251" font-size="11" font-weight="700" fill="#ffffff">→ 教職員の生産性UP！</text>
  <rect x="814" y="272" width="124" height="152" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="876" y="291" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">YOKOTE VISIONの実現</text>
  <circle cx="825" cy="312" r="9.5" fill="#bff0d6"/>
  <text x="825" y="312" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">1</text>
  <text x="837" y="315" font-size="8.8" font-weight="700" fill="#ffffff">個人の才能・独創性を</text>
  <text x="837" y="331" font-size="8.8" font-weight="700" fill="#ffffff">引き出す</text>
  <circle cx="825" cy="349" r="9.5" fill="#bff0d6"/>
  <text x="825" y="349" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">2</text>
  <text x="837" y="352" font-size="8.8" font-weight="700" fill="#ffffff">世界に冠たる独創的研究</text>
  <text x="837" y="368" font-size="8.8" font-weight="700" fill="#ffffff">の促進（国際・学際・共創）</text>
  <circle cx="825" cy="386" r="9.5" fill="#bff0d6"/>
  <text x="825" y="386" font-size="12.5" font-weight="800" fill="#1c6e44" text-anchor="middle" dominant-baseline="central">3</text>
  <text x="837" y="389" font-size="8.8" font-weight="700" fill="#ffffff">専門や職種を超えた</text>
  <text x="837" y="405" font-size="8.8" font-weight="700" fill="#ffffff">学内協働・対話の促進</text>
  <rect x="814" y="438" width="124" height="80" rx="10" fill="#ffffff" opacity="0.15"/>
  <text x="876" y="460" font-size="9.5" fill="#eafaf1" text-anchor="middle">学内すべての成果が</text>
  <text x="876" y="478" font-size="9.5" fill="#eafaf1" text-anchor="middle">連鎖的に伸びる</text>
  <text x="876" y="501" font-size="11.5" font-weight="700" fill="#ffffff" text-anchor="middle">好循環へ</text>
  <text x="17" y="570" font-size="13" font-weight="700" fill="#6b6b6b">想定する効果</text>
  <rect x="15" y="575" width="223" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="15" y="575" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="27" y="601" font-size="16" fill="#16624b" dominant-baseline="central">＋3<tspan font-size="8" font-weight="400">h/週</tspan></text>
  <text x="96" y="599" font-size="10.2" font-weight="700" fill="#1f2937">教員1人あたりの</text>
  <text x="96" y="615" font-size="10.2" font-weight="700" fill="#1f2937">研究時間を確保</text>
  <rect x="250" y="575" width="223" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="250" y="575" width="5" height="52" rx="2.5" fill="url(#gWarn)"/>
  <text x="262" y="601" font-size="16" fill="#c4632a" dominant-baseline="central">+30<tspan font-size="8" font-weight="400">%</tspan></text>
  <text x="328" y="599" font-size="10.2" font-weight="700" fill="#1f2937">高度化に使える時間の増加</text>
  <text x="328" y="615" font-size="10.2" font-weight="700" fill="#1f2937">定型問合せ・窓口業務の削減</text>
  <rect x="485" y="575" width="223" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="485" y="575" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="497" y="601" font-size="16" fill="#16624b" dominant-baseline="central">＋5<tspan font-size="8" font-weight="400">point</tspan></text>
  <text x="562" y="599" font-size="10.2" font-weight="700" fill="#1f2937">院生の研究力</text>
  <text x="562" y="615" font-size="10.2" font-weight="700" fill="#1f2937">(自己効力感・成長実感へ)</text>
  <rect x="720" y="575" width="223" height="52" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="720" y="575" width="5" height="52" rx="2.5" fill="url(#gGoal)"/>
  <text x="732" y="601" font-size="16" fill="#1c6e44" dominant-baseline="central">＋3<tspan font-size="8" font-weight="400">point</tspan></text>
  <text x="794" y="599" font-size="10.2" font-weight="700" fill="#1f2937">レピュテーション向上</text>
  <text x="794" y="615" font-size="10.2" font-weight="700" fill="#1f2937">大学UXの変革</text>
  <rect x="15" y="632" width="223" height="22" rx="5" fill="#1b6ca8"/>
  <text x="126" y="643" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">大学全体の研究高度化</text>
  <rect x="250" y="632" width="223" height="22" rx="5" fill="#b84d5b"/>
  <text x="361" y="643" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">Cut by DXの支援</text>
  <rect x="485" y="632" width="223" height="22" rx="5" fill="#2e9684"/>
  <text x="596" y="643" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="central">AI時代の創造的人材の育成</text>
  <rect x="15" y="659" width="930" height="46" rx="10" fill="#eaf1fb"/>
  <rect x="15" y="659" width="5" height="46" rx="3" fill="url(#gBlue)"/>
  <circle cx="39" cy="682" r="9.5" fill="#dceaf8"/>
  <text x="39" y="682" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">1</text>
  <text x="61" y="676" font-size="11.5" font-weight="700" fill="#1f2937">許諾済データの共有・利活用</text>
  <text x="61" y="692" font-size="9.2" fill="#555">個人情報を削除し、学内・行政・企業の共同研究にも活用</text>
  <circle cx="349" cy="682" r="9.5" fill="#dceaf8"/>
  <text x="349" y="682" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">2</text>
  <text x="371" y="676" font-size="11.5" font-weight="700" fill="#1f2937">AI企業と組んでノウハウ・アプリを販売</text>
  <text x="371" y="692" font-size="9.2" fill="#555">蓄積した実践知・基盤を外部へ展開</text>
  <circle cx="659" cy="682" r="9.5" fill="#dceaf8"/>
  <text x="659" y="682" font-size="12.5" font-weight="700" fill="#2a5d96" text-anchor="middle" dominant-baseline="central">3</text>
  <text x="681" y="676" font-size="11.5" font-weight="700" fill="#1f2937">経営判断に資する情報提供が迅速化</text>
  <text x="681" y="692" font-size="9.2" fill="#555">データの統合・分析が容易に</text>
</svg>
