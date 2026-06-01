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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ee9a4d"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#dceee7"/><stop offset="1" stop-color="#9fd0bd"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cae6a"/><stop offset="1" stop-color="#1c6e44"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3cae6a" stop-opacity="0.5"/><stop offset="1" stop-color="#3cae6a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.14"/></filter>
    <marker id="mClimb" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#16624b"/></marker>
    <marker id="mW" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <rect x="64" y="104" width="1152" height="478" rx="16" fill="#ffffff" opacity="0.9" filter="url(#shSoft)"/>
  <rect x="64" y="104" width="1152" height="34" rx="16" fill="#eef5f2" opacity="0.95"/>
  <rect x="64" y="122" width="1152" height="16" fill="#eef5f2" opacity="0.95"/>
  <circle cx="84" cy="121" r="4" fill="#cde0d8" opacity="0.9"/>
  <circle cx="98" cy="121" r="4" fill="#cde0d8" opacity="0.9"/>
  <circle cx="112" cy="121" r="4" fill="#cde0d8" opacity="0.9"/>
  <rect x="132" y="113" width="980" height="16" rx="8" fill="#ffffff" opacity="0.85"/>
  <text x="146" y="125" font-size="10" fill="#9bbdb1" opacity="0.7">https://nexus.chiba-u.ac.jp  —  研究×学び 接続アプリ</text>
  <rect x="92" y="166" width="300" height="22" rx="6" fill="#e0eee8" opacity="0.55"/>
  <rect x="92" y="200" width="1096" height="9" rx="4" fill="#e9f2ee" opacity="0.5"/>
  <rect x="92" y="220" width="1040" height="9" rx="4" fill="#e9f2ee" opacity="0.5"/>
  <rect x="780" y="166" width="408" height="180" rx="10" fill="#e6f1ec" opacity="0.4"/>
  <rect x="92" y="400" width="320" height="9" rx="4" fill="#e9f2ee" opacity="0.5"/>
  <rect x="92" y="420" width="260" height="9" rx="4" fill="#e9f2ee" opacity="0.5"/>
  <rect x="92" y="470" width="1096" height="9" rx="4" fill="#e9f2ee" opacity="0.45"/>
  <rect x="92" y="490" width="900" height="9" rx="4" fill="#e9f2ee" opacity="0.45"/>
  <path d="M64 582 L64 470 L1216 200 L1216 582 Z" fill="url(#gSlope)" opacity="0.5"/>
  <path d="M64 582 L1216 582 L1216 540 L64 545 Z" fill="#c9772f" opacity="0.12"/>
  <circle cx="1150" cy="178" r="140" fill="url(#goalGlow)"/>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gAccH)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（昇る道のり）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#E4F2EC"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <path d="M150 530 C430 502 770 360 1086 224" stroke="#16624b" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85" marker-end="url(#mClimb)"/>
  <path d="M150 530 C430 502 770 360 1086 224" stroke="#bfe6d6" stroke-width="1.4" fill="none" stroke-dasharray="2 7" stroke-linecap="round"/>
  <text x="96" y="170" font-size="13" font-weight="700" fill="#c4632a">低地 ＝ いま大学が抱える課題（A–D）</text>
  <rect x="96" y="566" width="240" height="58" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="96" y="566" width="6" height="58" rx="3" fill="url(#gWarn)"/>
  <circle cx="122" cy="588" r="10" fill="#FBEDE2"/>
  <text x="122" y="592" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="140" y="585" font-size="11.5" font-weight="700" fill="#1f2937">教員の業務負荷が急増</text>
  <text x="112" y="603" font-size="9.5" fill="#666">院生の多様化・申請/評価/学振</text>
  <text x="112" y="616" font-size="9.5" fill="#666">添削・全員留学で指導が限界</text>
  <rect x="346" y="566" width="240" height="58" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="346" y="566" width="6" height="58" rx="3" fill="url(#gWarn)"/>
  <circle cx="372" cy="588" r="10" fill="#FBEDE2"/>
  <text x="372" y="592" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="390" y="585" font-size="11.5" font-weight="700" fill="#1f2937">育成が多様化・高度化</text>
  <text x="362" y="603" font-size="9.5" fill="#666">求める水準が上昇・成功モデル多様</text>
  <text x="362" y="616" font-size="9.5" fill="#666">個別育成と資源の最適投下が必須</text>
  <rect x="596" y="566" width="240" height="58" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="596" y="566" width="6" height="58" rx="3" fill="url(#gWarn)"/>
  <circle cx="622" cy="588" r="10" fill="#FBEDE2"/>
  <text x="622" y="592" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="640" y="585" font-size="11.5" font-weight="700" fill="#1f2937">大学→個人のミッシングリンク</text>
  <text x="612" y="603" font-size="9.5" fill="#666">支援が乱立・重複・分散し</text>
  <text x="612" y="616" font-size="9.5" fill="#666">必要な個人に直接届かない</text>
  <rect x="846" y="566" width="240" height="58" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="846" y="566" width="6" height="58" rx="3" fill="url(#gWarn)"/>
  <circle cx="872" cy="588" r="10" fill="#FBEDE2"/>
  <text x="872" y="592" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="890" y="585" font-size="11.5" font-weight="700" fill="#1f2937">実践知が共有・蓄積されない</text>
  <text x="862" y="603" font-size="9.5" fill="#666">同じ手続きの反復・システム乱立</text>
  <text x="862" y="616" font-size="9.5" fill="#666">データ分散・異動でゼロリセット</text>
  <path d="M216 566 C232 540 250 524 268 508" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M466 566 C482 524 500 484 518 446" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M716 566 C732 510 750 442 768 392" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <path d="M966 566 C982 500 1000 410 1014 348" stroke="#d2772f" stroke-width="2" fill="none" opacity="0.7" marker-end="url(#mW)"/>
  <text x="96" y="540" font-size="13" font-weight="700" fill="#16624b">昇る斜面 ＝ AI×接続基盤の打ち手（取組1→4・課題と1:1）</text>
  <rect x="158" y="430" width="216" height="78" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="182" cy="454" r="13" fill="#ffffff"/>
  <text x="182" y="459" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">1</text>
  <text x="202" y="450" font-size="11.5" font-weight="700" fill="#ffffff">A 指導負担を軽減</text>
  <text x="202" y="464" font-size="10.5" font-weight="700" fill="#bfe9da">研究時間を確保</text>
  <text x="172" y="482" font-size="9.5" fill="#e7f4ee">AI多言語支援・ラボ共通支援</text>
  <text x="172" y="496" font-size="9.5" fill="#e7f4ee">支援者どうしを接続</text>
  <rect x="408" y="368" width="216" height="78" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="432" cy="392" r="13" fill="#ffffff"/>
  <text x="432" y="397" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">2</text>
  <text x="452" y="388" font-size="11.5" font-weight="700" fill="#ffffff">B 研究力を向上</text>
  <text x="452" y="402" font-size="10.5" font-weight="700" fill="#bfe9da">CV-DB＋AI伴走</text>
  <text x="422" y="420" font-size="9.5" fill="#e7f4ee">学内外の学習/スキル/資格を記録</text>
  <text x="422" y="434" font-size="9.5" fill="#e7f4ee">留学・ラボ・企業マッチング</text>
  <rect x="658" y="314" width="216" height="78" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="682" cy="338" r="13" fill="#ffffff"/>
  <text x="682" y="343" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">3</text>
  <text x="702" y="334" font-size="11.5" font-weight="700" fill="#ffffff">C 個別最適を直送</text>
  <text x="702" y="348" font-size="10.5" font-weight="700" fill="#bfe9da">必要な個人へ投下</text>
  <text x="672" y="366" font-size="9.5" fill="#e7f4ee">①学生入力ニーズ ＋ ②全学支援</text>
  <text x="672" y="380" font-size="9.5" fill="#e7f4ee">情報を突合しダイレクト配信</text>
  <rect x="900" y="262" width="216" height="78" rx="12" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="924" cy="286" r="13" fill="#ffffff"/>
  <text x="924" y="291" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">4</text>
  <text x="944" y="282" font-size="11.5" font-weight="700" fill="#ffffff">D 支援者を効率化</text>
  <text x="944" y="296" font-size="10.5" font-weight="700" fill="#bfe9da">労力を削減</text>
  <text x="914" y="314" font-size="9.5" fill="#e7f4ee">反復・窓口業務をRAGで省力化</text>
  <text x="914" y="328" font-size="9.5" fill="#e7f4ee">IR・成果・回答を自動収集/分析</text>
  <circle cx="1150" cy="178" r="72" fill="url(#gGoal)" filter="url(#sh)"/>
  <g transform="translate(1124,128)"><path d="M0 0 L30 0 L25 7 L30 14 L0 14 Z" fill="#ffffff"/><path d="M1.6 1 L1.6 36" stroke="#ffffff" stroke-width="2.2"/></g>
  <text x="1150" y="172" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL</text>
  <text x="1150" y="190" font-size="9.5" fill="#dff1e7" text-anchor="middle">研究者と支援者が</text>
  <text x="1150" y="203" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">躍動する大学へ</text>
  <text x="1150" y="221" font-size="9" fill="#dff1e7" text-anchor="middle">Nexus University 実現</text>
  <rect x="780" y="172" width="288" height="58" rx="10" fill="#ffffff" opacity="0.92" filter="url(#shSoft)"/>
  <rect x="780" y="172" width="5" height="58" rx="2.5" fill="url(#gAccH)"/>
  <text x="796" y="190" font-size="10.5" font-weight="700" fill="#16624b">副次効果（接続が生む波及）</text>
  <text x="796" y="206" font-size="9.5" fill="#555">許諾済データを学内・行政・企業で共同研究に活用</text>
  <text x="796" y="220" font-size="9.5" fill="#555">統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M40 632 L1206 632 L1240 651 L1206 670 L40 670 Z" fill="url(#gWarn)"/>
  <text x="56" y="657" font-size="13" font-weight="700" fill="#ffffff">段階展開：Lv1 アプリ運用 → Lv2 全学データ接続基盤 → Lv3 学外連携（行政・企業）　／　つなぐのはシステムでなく〈データ〉</text>
  <text x="466" y="470" font-size="10.5" font-weight="700" fill="#9a9a9a">想定KPI（導入後の試算イメージ・確定値ではない）</text>
  <rect x="466" y="478" width="172" height="52" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="466" y="478" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="484" y="514" font-size="22" font-weight="700" fill="#16624b">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text>
  <text x="556" y="500" font-size="9.5" fill="#555">教員1人の</text>
  <text x="556" y="514" font-size="9.5" fill="#555">研究時間確保</text>
  <rect x="648" y="478" width="172" height="52" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="648" y="478" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="666" y="514" font-size="22" font-weight="700" fill="#16624b">−50<tspan font-size="11" font-weight="400">%</tspan></text>
  <text x="744" y="500" font-size="9.5" fill="#555">定型問い</text>
  <text x="744" y="514" font-size="9.5" fill="#555">合わせ削減</text>
  <rect x="830" y="478" width="172" height="52" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="830" y="478" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="848" y="514" font-size="22" font-weight="700" fill="#16624b">＋20<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="930" y="500" font-size="9.5" fill="#555">院生の</text>
  <text x="930" y="514" font-size="9.5" fill="#555">研究力↑</text>
  <rect x="1012" y="478" width="172" height="52" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="1012" y="478" width="5" height="52" rx="2.5" fill="url(#gAccH)"/>
  <text x="1030" y="514" font-size="22" font-weight="700" fill="#16624b">＋5<tspan font-size="11" font-weight="400">pt</tspan></text>
  <text x="1108" y="500" font-size="9.5" fill="#555">修了率↑</text>
  <text x="1108" y="514" font-size="9.5" fill="#555">中退率↓</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-13。骨格=ロードマップ旅(対角クライム)：低地に課題A-D／左下→右上の昇る斜面に打ち手取組1-4(課題と1:1)／右上GOALバースト。0層=アプリ画面を巨大テキストボックスに見立てた薄色ブラウザ枠＋薄UI行＋見出しボックス。配色=teal＋warn橙＋ニュートラルの3色。stageBand(Lv1→Lv3 橙帯)・appMockup・goalBurst・想定KPI(試算)入り。 -->
