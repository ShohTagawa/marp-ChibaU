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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e07b39"/><stop offset="1" stop-color="#c4632a"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#f6c96b"/><stop offset="1" stop-color="#ee9a4d"/></linearGradient>
    <linearGradient id="gStep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4a64d"/><stop offset="1" stop-color="#e07b39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb43d"/><stop offset="1" stop-color="#e07b39"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffcf66" stop-opacity="0.75"/><stop offset="1" stop-color="#ffcf66" stop-opacity="0"/></radialGradient>
    <radialGradient id="sun" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9a8" stop-opacity="0.9"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#9a5a1f" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#9a5a1f" flood-opacity="0.16"/></filter>
    <marker id="mUp" markerWidth="11" markerHeight="11" refX="6" refY="3.5" orient="auto"><path d="M0 0 L8 3.5 L0 7 Z" fill="#c4632a"/></marker>
    <marker id="mLink" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#b87333"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fffaf2"/>
  <circle cx="1130" cy="170" r="220" fill="url(#sun)"/>
  <path d="M-40 720 L1320 720 L1320 250 C1040 320 760 470 480 560 C300 618 120 660 -40 672 Z" fill="#ffe6c2" opacity="0.30"/>
  <path d="M-40 720 L1320 720 L1320 360 C1060 430 800 560 540 628 C340 680 160 700 -40 706 Z" fill="#ffd79b" opacity="0.30"/>
  <g opacity="0.07" stroke="#c4632a" stroke-width="1.2" fill="none"><path d="M60 600 L420 520 L760 360 L1080 200"/><path d="M60 640 L420 560 L760 400 L1080 240"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（昇るロードマップ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#fde0c4"/>
  <text x="40" y="77" font-size="14" font-weight="700" fill="#9a4d18">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="500" width="500" height="178" rx="18" fill="#ffe3df" filter="url(#shSoft)"/>
  <text x="60" y="528" font-size="14" font-weight="700" fill="#b23a2e">低地 ― 大学が抱える4つの課題（A–D）</text>
  <rect x="58" y="540" width="222" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="80" cy="562" r="11" fill="#fbded9"/>
  <text x="80" y="567" font-size="13" font-weight="700" fill="#b23a2e" text-anchor="middle">A</text>
  <text x="99" y="560" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="99" y="588" font-size="10" fill="#7a6a64">院生多様化・申請/評価/全員留学で限界</text>
  <rect x="292" y="540" width="222" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="314" cy="562" r="11" fill="#fbded9"/>
  <text x="314" y="567" font-size="13" font-weight="700" fill="#b23a2e" text-anchor="middle">B</text>
  <text x="333" y="560" font-size="11.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="333" y="588" font-size="10" fill="#7a6a64">水準上昇・個別育成と資源最適化が必須</text>
  <rect x="58" y="608" width="222" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="80" cy="630" r="11" fill="#fbded9"/>
  <text x="80" y="635" font-size="13" font-weight="700" fill="#b23a2e" text-anchor="middle">C</text>
  <text x="99" y="628" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のリンク欠落</text>
  <text x="99" y="656" font-size="10" fill="#7a6a64">支援が乱立・重複し個人に届かない</text>
  <rect x="292" y="608" width="222" height="60" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="314" cy="630" r="11" fill="#fbded9"/>
  <text x="314" y="635" font-size="13" font-weight="700" fill="#b23a2e" text-anchor="middle">D</text>
  <text x="333" y="628" font-size="11.5" font-weight="700" fill="#1f2937">実践知が蓄積されない</text>
  <text x="333" y="656" font-size="10" fill="#7a6a64">反復・データ分散・異動でゼロ化</text>
  <path d="M120 540 L210 360 L520 196 L980 132" stroke="url(#gSlope)" stroke-width="58" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M120 540 L210 360 L520 196 L980 132" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-dasharray="2 14" stroke-linecap="round" opacity="0.7"/>
  <g transform="translate(190,440)">
    <rect x="-118" y="-44" width="236" height="86" rx="13" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-118" y="-44" width="236" height="22" rx="13" fill="url(#gStep)"/>
    <rect x="-118" y="-33" width="236" height="11" fill="url(#gStep)"/>
    <text x="-104" y="-28" font-size="11.5" font-weight="700" fill="#ffffff">取組1 ／ 課題A</text>
    <circle cx="-98" cy="14" r="14" fill="#fde8d4"/>
    <text x="-98" y="19" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">1</text>
    <text x="-74" y="6" font-size="12" font-weight="700" fill="#1f2937">指導負担を軽減し研究時間を確保</text>
    <text x="-74" y="26" font-size="10" fill="#7a6a64">AI多言語支援・ラボ共通支援・支援者接続</text>
  </g>
  <g transform="translate(420,316)">
    <rect x="-118" y="-44" width="236" height="86" rx="13" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-118" y="-44" width="236" height="22" rx="13" fill="url(#gStep)"/>
    <rect x="-118" y="-33" width="236" height="11" fill="url(#gStep)"/>
    <text x="-104" y="-28" font-size="11.5" font-weight="700" fill="#ffffff">取組2 ／ 課題B</text>
    <circle cx="-98" cy="14" r="14" fill="#fde8d4"/>
    <text x="-98" y="19" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">2</text>
    <text x="-74" y="6" font-size="12" font-weight="700" fill="#1f2937">院生一人ひとりの研究力を向上</text>
    <text x="-74" y="26" font-size="10" fill="#7a6a64">CV-DB＋AI伴走で段階別・留学/企業マッチング</text>
  </g>
  <g transform="translate(650,236)">
    <rect x="-118" y="-44" width="236" height="86" rx="13" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-118" y="-44" width="236" height="22" rx="13" fill="url(#gStep)"/>
    <rect x="-118" y="-33" width="236" height="11" fill="url(#gStep)"/>
    <text x="-104" y="-28" font-size="11.5" font-weight="700" fill="#ffffff">取組3 ／ 課題C</text>
    <circle cx="-98" cy="14" r="14" fill="#fde8d4"/>
    <text x="-98" y="19" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">3</text>
    <text x="-74" y="6" font-size="12" font-weight="700" fill="#1f2937">個別最適な情報を直に届ける</text>
    <text x="-74" y="26" font-size="10" fill="#7a6a64">学生ニーズ×全学支援情報を突合し投下</text>
  </g>
  <g transform="translate(852,178)">
    <rect x="-118" y="-44" width="236" height="86" rx="13" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-118" y="-44" width="236" height="22" rx="13" fill="url(#gStep)"/>
    <rect x="-118" y="-33" width="236" height="11" fill="url(#gStep)"/>
    <text x="-104" y="-28" font-size="11.5" font-weight="700" fill="#ffffff">取組4 ／ 課題D</text>
    <circle cx="-98" cy="14" r="14" fill="#fde8d4"/>
    <text x="-98" y="19" font-size="14" font-weight="700" fill="#c4632a" text-anchor="middle">4</text>
    <text x="-74" y="6" font-size="12" font-weight="700" fill="#1f2937">支援者の労力を削減し効率化</text>
    <text x="-74" y="26" font-size="10" fill="#7a6a64">RAGで反復省力化・IR/成果を自動統合分析</text>
  </g>
  <circle cx="1095" cy="155" r="120" fill="url(#goalGlow)"/>
  <g opacity="0.55" stroke="#ffb43d" stroke-width="3" stroke-linecap="round"><path d="M1095 30 L1095 8"/><path d="M1005 60 L988 44"/><path d="M1185 60 L1202 44"/><path d="M970 150 L948 150"/><path d="M1220 150 L1242 150"/></g>
  <rect x="990" y="106" width="210" height="98" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1022" cy="138" r="15" fill="#ffffff"/>
  <g transform="translate(1022,138)" stroke="#c4632a" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="1048" y="144" font-size="20" font-weight="700" fill="#ffffff">GOAL</text>
  <text x="1010" y="178" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">研究者と支援者が躍動する</text>
  <text x="1095" y="196" font-size="13" font-weight="700" fill="#fff4e0" text-anchor="middle">Nexus University の実現</text>
  <g transform="translate(820,520)">
    <rect x="0" y="0" width="156" height="158" rx="20" fill="#ffffff" filter="url(#sh)"/>
    <rect x="0" y="0" width="156" height="26" rx="20" fill="url(#gStep)"/>
    <rect x="0" y="13" width="156" height="13" fill="url(#gStep)"/>
    <text x="14" y="18" font-size="10.5" font-weight="700" fill="#ffffff">研究×学び アプリ</text>
    <rect x="16" y="36" width="124" height="46" rx="7" fill="#fdeede"/>
    <rect x="26" y="46" width="62" height="8" rx="4" fill="#e07b39"/>
    <rect x="26" y="60" width="86" height="6" rx="3" fill="#f3cba0"/>
    <rect x="26" y="71" width="74" height="6" rx="3" fill="#f3cba0"/>
    <text x="20" y="100" font-size="10.5" font-weight="700" fill="#9a4d18">CVデータベース</text>
    <circle cx="26" cy="113" r="3.2" fill="#e07b39"/>
    <rect x="34" y="109" width="104" height="6" rx="3" fill="#fbe6cf"/>
    <circle cx="26" cy="126" r="3.2" fill="#f0b173"/>
    <rect x="34" y="122" width="86" height="6" rx="3" fill="#fbe6cf"/>
    <rect x="16" y="134" width="124" height="16" rx="8" fill="#e07b39"/>
    <text x="24" y="146" font-size="9" fill="#ffffff">AI伴走：次の一手を個別提案</text>
  </g>
  <path d="M790 500 C770 470 690 430 580 410" stroke="#b87333" stroke-width="2" fill="none" stroke-dasharray="4 5" opacity="0.6"/>
  <text x="606" y="560" font-size="12" font-weight="700" fill="#9a4d18">接続基盤（Nexus）＝ アプリ</text>
  <text x="606" y="582" font-size="10.5" fill="#7a6a64">システムでなく〈データ〉を接続</text>
  <text x="606" y="600" font-size="10.5" fill="#7a6a64">＝ CVデータベース ＋ AI伴走 ＋ RAG</text>
  <rect x="606" y="612" width="194" height="22" rx="11" fill="#fde0c4"/>
  <text x="616" y="627" font-size="10" font-weight="700" fill="#9a4d18">課題A–D と打ち手1–4 が 1:1 対応</text>
  <rect x="606" y="642" width="194" height="34" rx="9" fill="#fff3e0" filter="url(#shSoft)"/>
  <text x="616" y="657" font-size="9.5" font-weight="700" fill="#9a4d18">副次効果</text>
  <text x="616" y="671" font-size="9" fill="#7a6a64">許諾済データ共有／経営判断の迅速化／アプリ外販</text>
  <rect x="990" y="226" width="252" height="452" rx="18" fill="#fff3e0" filter="url(#shSoft)"/>
  <text x="1010" y="252" font-size="13" font-weight="700" fill="#9a4d18">想定KPI（導入後の試算イメージ）</text>
  <rect x="1010" y="262" width="212" height="86" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1010" y="262" width="6" height="86" rx="3" fill="url(#gStep)"/>
  <text x="1030" y="312" font-size="34" font-weight="700" fill="#c4632a">＋3<tspan font-size="15" font-weight="400">h/週</tspan></text>
  <text x="1030" y="333" font-size="11" fill="#7a6a64">教員1人あたりの研究時間を確保</text>
  <rect x="1010" y="356" width="212" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1010" y="356" width="6" height="74" rx="3" fill="url(#gStep)"/>
  <text x="1030" y="402" font-size="32" font-weight="700" fill="#c4632a">−50<tspan font-size="14" font-weight="400">%</tspan></text>
  <text x="1030" y="421" font-size="11" fill="#7a6a64">定型問い合わせ・窓口（RAG）</text>
  <rect x="1010" y="438" width="212" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1010" y="438" width="6" height="74" rx="3" fill="url(#gStep)"/>
  <text x="1030" y="484" font-size="32" font-weight="700" fill="#c4632a">＋20<tspan font-size="14" font-weight="400">pt</tspan></text>
  <text x="1030" y="503" font-size="11" fill="#7a6a64">院生の研究力（自己効力感）</text>
  <rect x="1010" y="520" width="212" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1010" y="520" width="6" height="74" rx="3" fill="url(#gStep)"/>
  <text x="1030" y="566" font-size="32" font-weight="700" fill="#c4632a">＋5<tspan font-size="14" font-weight="400">pt</tspan></text>
  <text x="1030" y="585" font-size="11" fill="#7a6a64">修了率の改善（中退率↓）</text>
  <rect x="1010" y="602" width="212" height="64" rx="11" fill="#fde0c4"/>
  <text x="1116" y="624" font-size="10" fill="#9a4d18" text-anchor="middle">段階展開：Lv1 アプリ →</text>
  <text x="1116" y="640" font-size="10" fill="#9a4d18" text-anchor="middle">Lv2 全学基盤 → Lv3 学外連携</text>
  <text x="1116" y="658" font-size="10.5" font-weight="700" fill="#c4632a" text-anchor="middle">数値はすべて「想定／試算」</text>
</svg>

<!-- variant-69：ロードマップ旅(対角クライム)。低地=課題A-D(薄warm面)→左下から右上へ昇る橙黄スロープに取組1-4(課題と1:1)→右上GOALバースト。中央下にアプリmockup+Nexus説明+副次効果、右側にKPI試算バンド(想定/試算明示)。橙黄の温かみ・airy密度。 -->
