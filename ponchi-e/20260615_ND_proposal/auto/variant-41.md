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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#46bd76"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gRoad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#cfa15f"/><stop offset="0.5" stop-color="#3f8f96"/><stop offset="1" stop-color="#2f9e62"/></linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcebf7"/><stop offset="1" stop-color="#eef5fb"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.55"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <radialGradient id="sunBurst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff3d6" stop-opacity="0.9"/><stop offset="1" stop-color="#fff3d6" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.16"/></filter>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="url(#gSky)"/>
  <g opacity="0.10" stroke="#3f7fb5" stroke-width="1" fill="none"><path d="M0 120 H1280"/><path d="M0 160 H1280"/><path d="M0 200 H1280"/><path d="M0 240 H1280"/><path d="M0 280 H1280"/><path d="M0 320 H1280"/><path d="M0 360 H1280"/><path d="M0 400 H1280"/><path d="M0 440 H1280"/><path d="M0 480 H1280"/><path d="M40 90 V720"/><path d="M120 90 V720"/><path d="M200 90 V720"/><path d="M280 90 V720"/><path d="M360 90 V720"/><path d="M440 90 V720"/><path d="M520 90 V720"/><path d="M600 90 V720"/><path d="M680 90 V720"/><path d="M760 90 V720"/><path d="M840 90 V720"/><path d="M920 90 V720"/><path d="M1000 90 V720"/><path d="M1080 90 V720"/><path d="M1160 90 V720"/><path d="M1240 90 V720"/></g>
  <g opacity="0.16" stroke="#2f6f9e" stroke-width="1" fill="none"><path d="M40 100 H1240" stroke-dasharray="2 4"/><path d="M40 96 V104"/><path d="M1240 96 V104"/><path d="M50 512 V108"/><path d="M46 108 H54"/><path d="M46 512 H54"/></g>
  <text x="640" y="98" font-size="10" fill="#5b86ab" text-anchor="middle" opacity="0.6">設計図：分散した〈情報・データ・サポート・機会〉を「接続」する基盤</text>
  <circle cx="1170" cy="195" r="150" fill="url(#sunBurst)"/>
  <circle cx="1150" cy="205" r="150" fill="url(#goalGlow)"/>
  <path d="M-20 700 L300 700 L560 470 L420 470 Z" fill="#cfe0d8" opacity="0.45"/>
  <path d="M380 470 L1180 270 L1280 270 L1280 700 L300 700 Z" fill="#e7f0e9" opacity="0.55"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想ロードマップ</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="30" fill="#E4F2EC"/>
  <text x="40" y="76" font-size="14" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ ― 課題（低地）から打ち手で昇りGOALへ</text>
  <path d="M70 540 C300 540 360 470 520 430 C700 385 840 360 1010 300 L1100 270" stroke="#1c6e44" stroke-width="30" fill="none" opacity="0.18" stroke-linecap="round"/>
  <path d="M70 540 C300 540 360 470 520 430 C700 385 840 360 1010 300 L1100 270" stroke="url(#gRoad)" stroke-width="20" fill="none" stroke-linecap="round"/>
  <path d="M70 540 C300 540 360 470 520 430 C700 385 840 360 1010 300 L1100 270" stroke="#ffffff" stroke-width="2.4" stroke-dasharray="3 16" fill="none" opacity="0.85"/>
  <text x="40" y="608" font-size="12" font-weight="700" fill="#c4632a">［ 低地 ］大学が抱える課題（A–D）</text>
  <g transform="translate(40,616)">
    <rect x="0" y="0" width="252" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="0" y="0" width="6" height="44" rx="3" fill="url(#gWarn)"/>
    <circle cx="24" cy="15" r="10" fill="#FBEDE2"/><text x="24" y="19" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
    <text x="40" y="18" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
    <text x="40" y="35" font-size="10" fill="#666">院生の多様化・申請・評価・全員留学で限界</text>
  </g>
  <g transform="translate(302,616)">
    <rect x="0" y="0" width="252" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="0" y="0" width="6" height="44" rx="3" fill="url(#gWarn)"/>
    <circle cx="24" cy="15" r="10" fill="#FBEDE2"/><text x="24" y="19" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
    <text x="40" y="18" font-size="11.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
    <text x="40" y="35" font-size="10" fill="#666">水準上昇・個別育成と資源の最適投下が必須</text>
  </g>
  <g transform="translate(564,616)">
    <rect x="0" y="0" width="252" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="0" y="0" width="6" height="44" rx="3" fill="url(#gWarn)"/>
    <circle cx="24" cy="15" r="10" fill="#FBEDE2"/><text x="24" y="19" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
    <text x="40" y="18" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
    <text x="40" y="35" font-size="10" fill="#666">支援が乱立・重複・分散し個人に届かない</text>
  </g>
  <g transform="translate(826,616)">
    <rect x="0" y="0" width="252" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="0" y="0" width="6" height="44" rx="3" fill="url(#gWarn)"/>
    <circle cx="24" cy="15" r="10" fill="#FBEDE2"/><text x="24" y="19" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
    <text x="40" y="18" font-size="11.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
    <text x="40" y="35" font-size="10" fill="#666">反復・システム乱立・異動でゼロリセット</text>
  </g>
  <path d="M70 614 C70 580 70 562 70 548" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <text x="44" y="572" font-size="10" fill="#c4632a" opacity="0.9">A–Dの課題を</text>
  <text x="44" y="583" font-size="10" fill="#c4632a" opacity="0.9">打ち手で昇る↑</text>
  <g transform="translate(120,494)">
    <rect x="-58" y="-52" width="232" height="96" rx="12" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-58" y="-52" width="232" height="22" rx="12" fill="url(#gAcc)"/>
    <rect x="-58" y="-41" width="232" height="11" fill="#1f8f6e"/>
    <circle cx="-36" cy="-41" r="13" fill="#ffffff"/><text x="-36" y="-37" font-size="13" font-weight="700" fill="#125642" text-anchor="middle">1</text>
    <text x="-16" y="-37" font-size="11.5" font-weight="700" fill="#ffffff">取組1 ＝ 課題A</text>
    <circle cx="-38" cy="8" r="13" fill="#E4F2EC"/>
    <g transform="translate(-38,8)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><circle cx="0" cy="-4" r="3.2"/><path d="M-5 7 A5 6 0 0 1 5 7"/><path d="M7 -3 l4 2 M7 1 l4 -2"/></g>
    <text x="-18" y="-2" font-size="11" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
    <text x="-18" y="13" font-size="10" fill="#555">AI多言語支援・ラボ共通支援</text>
    <text x="-18" y="26" font-size="10" fill="#555">支援者を接続 → 研究に時間を回す</text>
  </g>
  <g transform="translate(378,440)">
    <rect x="-58" y="-52" width="232" height="96" rx="12" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-58" y="-52" width="232" height="22" rx="12" fill="url(#gAcc)"/>
    <rect x="-58" y="-41" width="232" height="11" fill="#1f8f6e"/>
    <circle cx="-36" cy="-41" r="13" fill="#ffffff"/><text x="-36" y="-37" font-size="13" font-weight="700" fill="#125642" text-anchor="middle">2</text>
    <text x="-16" y="-37" font-size="11.5" font-weight="700" fill="#ffffff">取組2 ＝ 課題B</text>
    <circle cx="-38" cy="8" r="13" fill="#E4F2EC"/>
    <g transform="translate(-38,8)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><path d="M-6 6 V-2 l6 -5 l6 5 V6"/><path d="M-3 6 V0 h6 v6"/></g>
    <text x="-18" y="-2" font-size="11" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
    <text x="-18" y="13" font-size="10" fill="#555">CV-DB（学内外の学習・資格記録）</text>
    <text x="-18" y="26" font-size="10" fill="#555">＋AI伴走で段階別の個別支援・マッチ</text>
  </g>
  <g transform="translate(636,398)">
    <rect x="-58" y="-52" width="232" height="96" rx="12" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-58" y="-52" width="232" height="22" rx="12" fill="url(#gAcc)"/>
    <rect x="-58" y="-41" width="232" height="11" fill="#1f8f6e"/>
    <circle cx="-36" cy="-41" r="13" fill="#ffffff"/><text x="-36" y="-37" font-size="13" font-weight="700" fill="#125642" text-anchor="middle">3</text>
    <text x="-16" y="-37" font-size="11.5" font-weight="700" fill="#ffffff">取組3 ＝ 課題C</text>
    <circle cx="-38" cy="8" r="13" fill="#E4F2EC"/>
    <g transform="translate(-38,8)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><circle cx="0" cy="0" r="6"/><circle cx="0" cy="0" r="2"/><path d="M0 -9 V-6 M0 6 V9 M-9 0 H-6 M6 0 H9"/></g>
    <text x="-18" y="-2" font-size="11" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
    <text x="-18" y="13" font-size="10" fill="#555">①学生の入力ニーズ＋②全学の支援を</text>
    <text x="-18" y="26" font-size="10" fill="#555">突合 → 必要な個人へダイレクト投下</text>
  </g>
  <g transform="translate(880,340)">
    <rect x="-58" y="-52" width="232" height="96" rx="12" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-58" y="-52" width="232" height="22" rx="12" fill="url(#gAcc)"/>
    <rect x="-58" y="-41" width="232" height="11" fill="#1f8f6e"/>
    <circle cx="-36" cy="-41" r="13" fill="#ffffff"/><text x="-36" y="-37" font-size="13" font-weight="700" fill="#125642" text-anchor="middle">4</text>
    <text x="-16" y="-37" font-size="11.5" font-weight="700" fill="#ffffff">取組4 ＝ 課題D</text>
    <circle cx="-38" cy="8" r="13" fill="#E4F2EC"/>
    <g transform="translate(-38,8)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><circle cx="0" cy="0" r="5"/><path d="M0 -8 V-5 M0 5 V8 M-8 0 H-5 M5 0 H8 M-6 -6 l2 2 M6 6 l-2 -2"/></g>
    <text x="-18" y="-2" font-size="11" font-weight="700" fill="#16624b">支援者の労力を削減し効率化</text>
    <text x="-18" y="13" font-size="10" fill="#555">データを接続しAIで分析・RAGで省力</text>
    <text x="-18" y="26" font-size="10" fill="#555">IR・成果・回答を自動収集し統合分析</text>
  </g>
  <g transform="translate(470,520)">
    <rect x="-66" y="-58" width="132" height="116" rx="10" fill="#ffffff" filter="url(#sh)"/>
    <rect x="-66" y="-58" width="132" height="18" rx="10" fill="#125642"/><rect x="-66" y="-49" width="132" height="9" fill="#125642"/>
    <circle cx="-56" cy="-49" r="2.2" fill="#7fb8a6"/><circle cx="-49" cy="-49" r="2.2" fill="#7fb8a6"/><circle cx="-42" cy="-49" r="2.2" fill="#7fb8a6"/>
    <text x="-32" y="-46" font-size="10" fill="#cdeae0">研究×学び アプリ</text>
    <rect x="-58" y="-34" width="48" height="84" fill="#eaf4ef"/>
    <rect x="-52" y="-24" width="34" height="7" rx="3" fill="#1A7A5E"/><rect x="-52" y="-12" width="34" height="7" rx="3" fill="#cfe0d8"/><rect x="-52" y="0" width="34" height="7" rx="3" fill="#cfe0d8"/>
    <circle cx="-34" cy="26" r="7" fill="#bfe0d4"/><path d="M-40 38 A7 7 0 0 1 -28 38" fill="#bfe0d4"/>
    <text x="-2" y="-22" font-size="10" font-weight="700" fill="#16624b">CVデータベース</text>
    <circle cx="2" cy="-9" r="3" fill="#1A7A5E"/><rect x="9" y="-12" width="48" height="6" rx="3" fill="#E4F2EC"/>
    <circle cx="2" cy="3" r="3" fill="#9bc3b5"/><rect x="9" y="0" width="56" height="6" rx="3" fill="#E4F2EC"/>
    <circle cx="2" cy="15" r="3" fill="#9bc3b5"/><rect x="9" y="12" width="40" height="6" rx="3" fill="#E4F2EC"/>
    <rect x="-2" y="26" width="62" height="16" rx="7" fill="#1A7A5E"/>
    <text x="29" y="38" font-size="10" fill="#ffffff" text-anchor="middle">AI伴走：次の一手</text>
  </g>
  <g stroke="#1A7A5E" stroke-width="1.6" fill="#E4F2EC">
    <g transform="translate(230,540)"><circle cx="0" cy="-3" r="5"/><path d="M-7 9 A7 8 0 0 1 7 9" fill="#E4F2EC"/></g>
    <g transform="translate(560,452)"><circle cx="0" cy="-3" r="5"/><path d="M-7 9 A7 8 0 0 1 7 9" fill="#FBEDE2"/></g>
    <g transform="translate(770,372)"><circle cx="0" cy="-3" r="5"/><path d="M-7 9 A7 8 0 0 1 7 9" fill="#E4F2EC"/></g>
  </g>
  <text x="222" y="566" font-size="10" fill="#16624b">研究者</text>
  <text x="548" y="478" font-size="10" fill="#c4632a">院生</text>
  <text x="756" y="398" font-size="10" fill="#16624b">支援者</text>
  <g transform="translate(355,512)"><rect x="-58" y="-14" width="120" height="28" rx="8" fill="#ffffff" filter="url(#shSoft)"/><circle cx="-44" cy="0" r="9" fill="#E4F2EC"/><g transform="translate(-44,0)" stroke="#1A7A5E" stroke-width="1.6" fill="none"><path d="M-4 4 V-3 l4 -4 l4 4 V4"/></g><text x="-30" y="-1" font-size="10" font-weight="700" fill="#16624b">＝ 接続基盤 Nexus</text><text x="-30" y="11" font-size="10" fill="#555">データを接続＋AI＋RAG</text></g>
  <circle cx="1145" cy="205" r="118" fill="url(#gGoal)" filter="url(#sh)"/>
  <g stroke="#bff0d3" stroke-width="3" opacity="0.7"><path d="M1145 60 V30"/><path d="M1145 380 V350"/><path d="M1000 205 H970"/><path d="M1320 205 H1290"/><path d="M1042 102 l-20 -20"/><path d="M1248 102 l20 -20"/><path d="M1042 308 l-20 20"/><path d="M1248 308 l20 20"/></g>
  <g transform="translate(1145,118)" stroke="#ffffff" stroke-width="2.4" fill="none"><circle cx="0" cy="0" r="11"/><circle cx="0" cy="0" r="5"/></g>
  <text x="1145" y="162" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1145" y="185" font-size="11" fill="#dff1e7" text-anchor="middle">研究者と支援者が躍動する</text>
  <text x="1145" y="201" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus University の実現</text>
  <text x="1145" y="226" font-size="10" fill="#eafaf1" text-anchor="middle">研究力↑・修了率↑・中退率↓</text>
  <text x="1145" y="242" font-size="10" fill="#eafaf1" text-anchor="middle">国際性↑・経営判断の高度化</text>
  <text x="1145" y="265" font-size="10" font-weight="700" fill="#bff0d3" text-anchor="middle">学内すべての成果が連鎖し好循環へ</text>
  <text x="1066" y="358" font-size="10" fill="#1c6e44" opacity="0.85" text-anchor="middle">副次：許諾済データの共同研究／統合分析で経営判断迅速化／アプリ外販</text>
  <text x="42" y="488" font-size="11" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ ※確定値ではない）</text>
  <g transform="translate(40,494)">
    <rect x="0" y="0" width="250" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="44" rx="2.5" fill="url(#gAccH)"/>
    <text x="16" y="32" font-size="20" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
    <text x="84" y="20" font-size="10" fill="#555">教員1人あたりの</text><text x="84" y="34" font-size="10" fill="#555">研究時間を確保（想定）</text>
  </g>
  <g transform="translate(300,494)">
    <rect x="0" y="0" width="250" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="44" rx="2.5" fill="url(#gWarn)"/>
    <text x="16" y="32" font-size="20" font-weight="700" fill="#c4632a">−50<tspan font-size="11" font-weight="400">%</tspan></text>
    <text x="84" y="20" font-size="10" fill="#555">定型問い合わせ・</text><text x="84" y="34" font-size="10" fill="#555">窓口業務（試算）</text>
  </g>
  <g transform="translate(560,494)">
    <rect x="0" y="0" width="250" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="44" rx="2.5" fill="url(#gGoal)"/>
    <text x="16" y="32" font-size="20" font-weight="700" fill="#1c6e44">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
    <text x="84" y="20" font-size="10" fill="#555">院生の研究力</text><text x="84" y="34" font-size="10" fill="#555">（自己効力感・想定）</text>
  </g>
  <g transform="translate(820,494)">
    <rect x="0" y="0" width="250" height="44" rx="9" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="44" rx="2.5" fill="url(#gGoal)"/>
    <text x="16" y="32" font-size="20" font-weight="700" fill="#1c6e44">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
    <text x="84" y="20" font-size="10" fill="#555">修了率の改善（試算）</text><text x="84" y="34" font-size="10" fill="#555">中退率↓ ※想定値</text>
  </g>
  <rect x="1086" y="494" width="154" height="44" rx="9" fill="url(#gAccH)" filter="url(#shSoft)"/>
  <text x="1163" y="514" font-size="10" fill="#dff1e7" text-anchor="middle">段階展開</text>
  <text x="1163" y="529" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Lv1→Lv2→Lv3</text>
  <path d="M40 666 L1206 666 L1240 690 L1206 700 L40 700 Z" fill="url(#gAccH)" opacity="0"/>
  <text x="640" y="700" font-size="10" fill="#8aa6c0" text-anchor="middle" opacity="0.6">システムでなく〈データ〉を接続基盤でつなぐ ― Lv1 アプリ → Lv2 全学基盤 → Lv3 学外連携（行政・企業）｜KPIはすべて想定・試算</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-41。骨格=ロードマップ旅(対角クライム)。背景=極薄ブループリント方眼＋寸法線(0層・設計図トーン)。低地に課題A-D、左下→右上の昇る道沿いに取組1-4(=A-Dと1:1)を配置、appMockup(CV-DB)＋登場人物アイコン群(研究者/院生/支援者)を道上に、右上にGOALバースト(サンバースト＋緑グロー)。多色リッチ(teal＋橙＋緑GOAL＋青背景)・packed密度。KPIは全て「想定/試算」明示。千葉大ALC構想図の動きに寄せた。 -->
