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
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16324f"/><stop offset="1" stop-color="#0c5f63"/></linearGradient>
    <linearGradient id="gSlope" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1a4a6e"/><stop offset="1" stop-color="#138a86"/></linearGradient>
    <linearGradient id="gNode" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f9ea0"/><stop offset="1" stop-color="#13627f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1fb5a2"/><stop offset="1" stop-color="#0e6f78"/></linearGradient>
    <linearGradient id="gApp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#173a57"/><stop offset="1" stop-color="#0e5a66"/></linearGradient>
    <radialGradient id="goalGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2bd3b6" stop-opacity="0.5"/><stop offset="1" stop-color="#2bd3b6" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2c44" flood-opacity="0.24"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2c44" flood-opacity="0.16"/></filter>
    <marker id="mClimb" markerWidth="11" markerHeight="11" refX="6" refY="3" orient="auto"><path d="M0 0 L8 3 L0 6 Z" fill="#13627f"/></marker>
    <marker id="mLink" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#3a6f8c"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f6fafc"/>
  <g opacity="0.07" stroke="#16324f" stroke-width="1.2" fill="none"><ellipse cx="700" cy="400" rx="430" ry="300"/><ellipse cx="700" cy="400" rx="150" ry="300"/><ellipse cx="700" cy="400" rx="300" ry="300"/><ellipse cx="700" cy="400" rx="430" ry="120"/><ellipse cx="700" cy="400" rx="430" ry="210"/></g>
  <g opacity="0.08" fill="#0c5f63"><circle cx="240" cy="180" r="3"/><circle cx="470" cy="140" r="3"/><circle cx="760" cy="200" r="3"/><circle cx="980" cy="160" r="3"/><circle cx="1120" cy="320" r="3"/><circle cx="330" cy="430" r="3"/></g>
  <g opacity="0.07" stroke="#0c5f63" stroke-width="1" fill="none"><path d="M240 180 L470 140"/><path d="M470 140 L760 200"/><path d="M760 200 L980 160"/><path d="M980 160 L1120 320"/><path d="M240 180 L330 430"/></g>
  <rect x="0" y="0" width="1280" height="56" fill="url(#gHdr)"/>
  <text x="40" y="37" font-size="22" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想（旅のロードマップ）</text>
  <rect x="1106" y="12" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="20"/>
  <rect x="0" y="56" width="1280" height="32" fill="#dcf0f0"/>
  <text x="40" y="78" font-size="14.5" font-weight="700" fill="#0c5f63">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ ― 低地の課題から GOAL へ登る</text>
  <path d="M40 612 L120 612 L1180 196 L1240 196 L1240 612 Z" fill="url(#gSlope)" opacity="0.18"/>
  <path d="M40 612 L140 612 L1130 250 L1230 250 L1230 612 Z" fill="url(#gSlope)" opacity="0.14"/>
  <path d="M70 588 C420 472 740 360 1110 252" stroke="#13627f" stroke-width="3" stroke-dasharray="2 9" fill="none" opacity="0.55"/>
  <circle cx="1148" cy="172" r="150" fill="url(#goalGlow)"/>
  <text x="42" y="118" font-size="12.5" font-weight="700" fill="#9aa3ab">低地＝大学が抱える課題（A–D）</text>
  <rect x="40" y="126" width="246" height="70" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="126" width="6" height="70" rx="3" fill="#7d8893"/>
  <circle cx="65" cy="146" r="11" fill="#eef1f3"/>
  <text x="65" y="151" font-size="13" font-weight="700" fill="#566069" text-anchor="middle">A</text>
  <text x="84" y="151" font-size="12.5" font-weight="700" fill="#2b343c">教員の業務負荷が急増</text>
  <text x="54" y="173" font-size="10" fill="#6b7480">院生の多様化（社会人・留学生・他分野）</text>
  <text x="54" y="188" font-size="10" fill="#6b7480">申請・評価・学振添削・全員留学で限界</text>
  <rect x="40" y="204" width="246" height="70" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="204" width="6" height="70" rx="3" fill="#7d8893"/>
  <circle cx="65" cy="224" r="11" fill="#eef1f3"/>
  <text x="65" y="229" font-size="13" font-weight="700" fill="#566069" text-anchor="middle">B</text>
  <text x="84" y="229" font-size="12.5" font-weight="700" fill="#2b343c">育成が多様化・高度化</text>
  <text x="54" y="251" font-size="10" fill="#6b7480">求める水準が上昇・成功モデルも多様</text>
  <text x="54" y="266" font-size="10" fill="#6b7480">個別の能力育成と資源の最適投下が必須</text>
  <rect x="40" y="282" width="246" height="70" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="282" width="6" height="70" rx="3" fill="#7d8893"/>
  <circle cx="65" cy="302" r="11" fill="#eef1f3"/>
  <text x="65" y="307" font-size="13" font-weight="700" fill="#566069" text-anchor="middle">C</text>
  <text x="84" y="307" font-size="12.5" font-weight="700" fill="#2b343c">大学→個人のミッシングリンク</text>
  <text x="54" y="329" font-size="10" fill="#6b7480">支援が乱立・重複・分散している</text>
  <text x="54" y="344" font-size="10" fill="#6b7480">必要とする個人に情報が直接届かない</text>
  <rect x="40" y="360" width="246" height="70" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="40" y="360" width="6" height="70" rx="3" fill="#7d8893"/>
  <circle cx="65" cy="380" r="11" fill="#eef1f3"/>
  <text x="65" y="385" font-size="13" font-weight="700" fill="#566069" text-anchor="middle">D</text>
  <text x="84" y="385" font-size="12.5" font-weight="700" fill="#2b343c">実践知が共有・蓄積されない</text>
  <text x="54" y="407" font-size="10" fill="#6b7480">同じ手続き・説明・問い合わせの反復</text>
  <text x="54" y="422" font-size="10" fill="#6b7480">システム乱立・データ分散・異動でゼロ化</text>
  <path d="M286 161 C306 161 312 470 332 466" stroke="#3a6f8c" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.7" marker-end="url(#mLink)"/>
  <path d="M286 239 C300 239 308 410 320 402" stroke="#3a6f8c" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.7" marker-end="url(#mLink)"/>
  <path d="M286 317 C440 317 540 330 612 322" stroke="#3a6f8c" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.7" marker-end="url(#mLink)"/>
  <path d="M286 395 C520 395 700 250 808 244" stroke="#3a6f8c" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity="0.7" marker-end="url(#mLink)"/>
  <text x="318" y="510" font-size="12.5" font-weight="700" fill="#0c5f63">打ち手（取組1–4）＝AI×接続基盤で課題を登る</text>
  <path d="M310 466 L470 410" stroke="#13627f" stroke-width="3.5" fill="none" opacity="0.5" marker-end="url(#mClimb)"/>
  <path d="M610 380 L770 320" stroke="#13627f" stroke-width="3.5" fill="none" opacity="0.5" marker-end="url(#mClimb)"/>
  <path d="M912 278 L1062 222" stroke="#13627f" stroke-width="3.5" fill="none" opacity="0.5" marker-end="url(#mClimb)"/>
  <g transform="translate(318,400)" filter="url(#sh)"><rect x="0" y="0" width="266" height="118" rx="14" fill="#ffffff"/><rect x="0" y="0" width="266" height="26" rx="14" fill="url(#gNode)"/><rect x="0" y="13" width="266" height="13" fill="#13627f"/><circle cx="26" cy="13" r="13" fill="#ffffff"/><text x="26" y="18" font-size="13" font-weight="700" fill="#13627f" text-anchor="middle">1</text><text x="46" y="18" font-size="12.5" font-weight="700" fill="#ffffff">A 指導負担を軽減し研究時間を確保</text><text x="14" y="50" font-size="10.5" fill="#3a4750">AI多言語支援・ラボ共通支援・支援者接続</text><text x="14" y="68" font-size="10.5" fill="#3a4750">→ 教員は研究そのものに時間を回せる</text><text x="14" y="92" font-size="10.5" font-weight="700" fill="#0c5f63">対応課題 A：教員の業務負荷が急増</text><rect x="14" y="100" width="238" height="6" rx="3" fill="#dcf0f0"/></g>
  <g transform="translate(458,312)" filter="url(#sh)"><rect x="0" y="0" width="266" height="118" rx="14" fill="#ffffff"/><rect x="0" y="0" width="266" height="26" rx="14" fill="url(#gNode)"/><rect x="0" y="13" width="266" height="13" fill="#13627f"/><circle cx="26" cy="13" r="13" fill="#ffffff"/><text x="26" y="18" font-size="13" font-weight="700" fill="#13627f" text-anchor="middle">2</text><text x="46" y="18" font-size="12.5" font-weight="700" fill="#ffffff">B 院生一人ひとりの研究力を向上</text><text x="14" y="50" font-size="10.5" fill="#3a4750">CV-DB＋AI伴走で段階別に個別支援</text><text x="14" y="68" font-size="10.5" fill="#3a4750">留学先・ラボ・企業のマッチングも可能に</text><text x="14" y="92" font-size="10.5" font-weight="700" fill="#0c5f63">対応課題 B：育成が多様化・高度化</text><rect x="14" y="100" width="238" height="6" rx="3" fill="#dcf0f0"/></g>
  <g transform="translate(598,224)" filter="url(#sh)"><rect x="0" y="0" width="266" height="118" rx="14" fill="#ffffff"/><rect x="0" y="0" width="266" height="26" rx="14" fill="url(#gNode)"/><rect x="0" y="13" width="266" height="13" fill="#13627f"/><circle cx="26" cy="13" r="13" fill="#ffffff"/><text x="26" y="18" font-size="13" font-weight="700" fill="#13627f" text-anchor="middle">3</text><text x="46" y="18" font-size="12.5" font-weight="700" fill="#ffffff">C 個別最適な情報を直に届ける</text><text x="14" y="50" font-size="10.5" fill="#3a4750">①学生の入力ニーズ ＋ ②全学の支援情報を</text><text x="14" y="68" font-size="10.5" fill="#3a4750">突合し、必要な個人へダイレクト投下</text><text x="14" y="92" font-size="10.5" font-weight="700" fill="#0c5f63">対応課題 C：大学→個人のミッシングリンク</text><rect x="14" y="100" width="238" height="6" rx="3" fill="#dcf0f0"/></g>
  <g transform="translate(738,136)" filter="url(#sh)"><rect x="0" y="0" width="266" height="118" rx="14" fill="#ffffff"/><rect x="0" y="0" width="266" height="26" rx="14" fill="url(#gNode)"/><rect x="0" y="13" width="266" height="13" fill="#13627f"/><circle cx="26" cy="13" r="13" fill="#ffffff"/><text x="26" y="18" font-size="13" font-weight="700" fill="#13627f" text-anchor="middle">4</text><text x="46" y="18" font-size="12.5" font-weight="700" fill="#ffffff">D 支援者の労力を削減し効率化</text><text x="14" y="50" font-size="10.5" fill="#3a4750">反復・窓口業務をRAGで省力化</text><text x="14" y="68" font-size="10.5" fill="#3a4750">IR・成果・回答を自動収集し統合分析</text><text x="14" y="92" font-size="10.5" font-weight="700" fill="#0c5f63">対応課題 D：実践知が共有・蓄積されない</text><rect x="14" y="100" width="238" height="6" rx="3" fill="#dcf0f0"/></g>
  <g transform="translate(312,536)" filter="url(#sh)"><rect x="0" y="0" width="200" height="70" rx="12" fill="url(#gApp)"/><rect x="14" y="12" width="172" height="46" rx="7" fill="#ffffff"/><rect x="14" y="12" width="172" height="13" rx="7" fill="#0e5a66"/><rect x="14" y="19" width="172" height="6" fill="#0e5a66"/><circle cx="24" cy="18" r="2" fill="#7fcfd0"/><circle cx="31" cy="18" r="2" fill="#7fcfd0"/><text x="100" y="22" font-size="7" fill="#cdeeee" text-anchor="middle">研究×学び アプリ</text><rect x="14" y="25" width="38" height="33" fill="#e6f4f4"/><rect x="20" y="32" width="26" height="6" rx="2" fill="#1f9ea0"/><rect x="20" y="42" width="26" height="5" rx="2" fill="#cfe4e4"/><rect x="20" y="50" width="26" height="5" rx="2" fill="#cfe4e4"/><circle cx="62" cy="36" r="3" fill="#1f9ea0"/><rect x="70" y="33" width="56" height="5" rx="2" fill="#e6f4f4"/><circle cx="62" cy="48" r="3" fill="#9cc7c7"/><rect x="70" y="45" width="72" height="5" rx="2" fill="#e6f4f4"/></g>
  <text x="412" y="624" font-size="9.5" fill="#0c5f63" text-anchor="middle">CVデータベース＋AI伴走</text>
  <g transform="translate(1024,116)" filter="url(#sh)"><rect x="0" y="0" width="216" height="158" rx="18" fill="url(#gGoal)"/><g opacity="0.14" stroke="#ffffff" stroke-width="1.1" fill="none"><ellipse cx="108" cy="80" rx="78" ry="78"/><ellipse cx="108" cy="80" rx="32" ry="78"/><ellipse cx="108" cy="80" rx="78" ry="32"/></g><circle cx="30" cy="30" r="14" fill="#ffffff"/><g transform="translate(30,30)" stroke="#0e6f78" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g><text x="54" y="36" font-size="20" font-weight="700" fill="#ffffff">GOAL</text><text x="16" y="62" font-size="10.5" fill="#dffaf4">研究者と支援者が躍動する</text><text x="16" y="78" font-size="11" font-weight="700" fill="#ffffff">Nexus University の実現</text><circle cx="22" cy="98" r="2.6" fill="#bff6e9"/><text x="32" y="102" font-size="10.5" fill="#ffffff">院生の研究力 ↑ / 修了率 ↑</text><circle cx="22" cy="118" r="2.6" fill="#bff6e9"/><text x="32" y="122" font-size="10.5" fill="#ffffff">海外留学・国際性 ↑</text><circle cx="22" cy="138" r="2.6" fill="#bff6e9"/><text x="32" y="142" font-size="10.5" fill="#ffffff">経営判断の高度化（統合分析）</text></g>
  <g opacity="0.85"><path d="M1132 80 L1140 100 L1162 100 L1144 113 L1151 134 L1132 121 L1113 134 L1120 113 L1102 100 L1124 100 Z" fill="#2bd3b6"/></g>
  <text x="318" y="538" font-size="9" fill="#6b7480">許諾済データ＝学内・行政・企業の共同研究／統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M40 632 L1206 632 L1240 651 L1206 670 L40 670 Z" fill="url(#gHdr)"/>
  <text x="56" y="657" font-size="12.5" font-weight="700" fill="#ffffff">段階展開：Lv1 アプリ（研究×学び）  →  Lv2 全学の接続基盤  →  Lv3 学外連携（行政・企業）　― システムでなく〈データ〉をつなぐ</text>
  <circle cx="362" cy="651" r="3" fill="#2bd3b6"/>
  <circle cx="690" cy="651" r="3" fill="#2bd3b6"/>
  <circle cx="980" cy="651" r="3" fill="#2bd3b6"/>
  <text x="42" y="546" font-size="10.5" font-weight="700" fill="#9aa3ab">想定KPI（導入後の試算イメージ／確定値ではない）</text>
  <g transform="translate(1024,288)"><rect x="0" y="0" width="216" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="54" rx="2.5" fill="url(#gHdr)"/><text x="16" y="36" font-size="21" font-weight="700" fill="#0c5f63">＋3<tspan font-size="11" font-weight="400">h/週</tspan></text><text x="86" y="24" font-size="10" fill="#5a636b">教員1人あたりの</text><text x="86" y="38" font-size="10" fill="#5a636b">研究時間を確保</text><text x="86" y="50" font-size="8" fill="#9aa3ab">※想定/試算</text></g>
  <g transform="translate(1024,348)"><rect x="0" y="0" width="216" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="54" rx="2.5" fill="url(#gHdr)"/><text x="16" y="36" font-size="21" font-weight="700" fill="#0c5f63">−50<tspan font-size="11" font-weight="400">%</tspan></text><text x="92" y="24" font-size="10" fill="#5a636b">定型問い合わせ・</text><text x="92" y="38" font-size="10" fill="#5a636b">窓口業務（RAG）</text><text x="92" y="50" font-size="8" fill="#9aa3ab">※想定/試算</text></g>
  <g transform="translate(1024,408)"><rect x="0" y="0" width="216" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="54" rx="2.5" fill="url(#gHdr)"/><text x="16" y="36" font-size="21" font-weight="700" fill="#0c5f63">＋20<tspan font-size="11" font-weight="400">pt</tspan></text><text x="96" y="24" font-size="10" fill="#5a636b">院生の研究力</text><text x="96" y="38" font-size="10" fill="#5a636b">（自己効力感）</text><text x="96" y="50" font-size="8" fill="#9aa3ab">※想定/試算</text></g>
  <g transform="translate(1024,468)"><rect x="0" y="0" width="216" height="54" rx="10" fill="#ffffff" filter="url(#shSoft)"/><rect x="0" y="0" width="5" height="54" rx="2.5" fill="url(#gHdr)"/><text x="16" y="36" font-size="21" font-weight="700" fill="#0c5f63">＋5<tspan font-size="11" font-weight="400">pt</tspan></text><text x="86" y="24" font-size="10" fill="#5a636b">修了率の改善</text><text x="86" y="38" font-size="10" fill="#5a636b">（中退率↓）</text><text x="86" y="50" font-size="8" fill="#9aa3ab">※想定/試算</text></g>
</svg>

<!-- variant-55: ロードマップ旅(対角クライム)。低地=課題A-D→昇る斜面に取組1-4(打ち手A-D, 1:1対応)→右上GOALバースト。背景=グローブ+ネットワーク点線(0層)。ネイビー+tealの寒色クール。stageBand(Lv1→Lv3)/appMockup/goalBurst入り。KPIは全て「※想定/試算」明示。 -->
