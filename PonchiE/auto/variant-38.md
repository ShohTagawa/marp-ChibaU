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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.20"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ec9554" stop-opacity="0.30"/><stop offset="1" stop-color="#ec9554" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 H0 V32" fill="none" stroke="#1A7A5E" stroke-width="0.6" stroke-opacity="0.10"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="98" width="1280" height="566" fill="url(#grid)"/>
  <g stroke="#1A7A5E" stroke-opacity="0.16" stroke-width="0.8" fill="none"><path d="M40 112 H1240" stroke-dasharray="2 4"/><path d="M40 116 L52 112 M40 116 L52 120"/><path d="M1240 112 L1228 112 M40 112 L52 112"/><path d="M48 130 V650" stroke-dasharray="2 4"/></g>
  <text x="46" y="125" font-size="9" fill="#1A7A5E" fill-opacity="0.40" font-family="monospace">design blueprint · v38</text>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・支援・機会〉を1つの基盤に「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="36" y="112" width="244" height="424" rx="14" fill="#FBEDE2" filter="url(#shSoft)"/>
  <rect x="36" y="112" width="244" height="34" rx="14" fill="url(#gWarn)"/>
  <rect x="36" y="128" width="244" height="18" fill="url(#gWarn)"/>
  <text x="54" y="135" font-size="13" font-weight="700" fill="#ffffff">現状の課題（A〜D）</text>
  <g>
    <rect x="50" y="156" width="216" height="84" rx="9" fill="#ffffff" stroke="#efd9c8"/><circle cx="68" cy="174" r="10" fill="url(#gWarn)"/><text x="68" y="178" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">A</text><text x="86" y="178" font-size="12.5" font-weight="700" fill="#c4632a">教員の業務負荷が急増</text><text x="58" y="198" font-size="10.5" fill="#5a5147">院生の多様化（社会人・留学生・他分野）</text><text x="58" y="214" font-size="10.5" fill="#5a5147">研究費申請・評価資料・学振添削が集中</text><text x="58" y="230" font-size="10.5" fill="#5a5147">全員留学対応で時間が限界</text>
    <rect x="50" y="248" width="216" height="68" rx="9" fill="#ffffff" stroke="#efd9c8"/><circle cx="68" cy="266" r="10" fill="url(#gWarn)"/><text x="68" y="270" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">B</text><text x="86" y="270" font-size="12.5" font-weight="700" fill="#c4632a">育成が多様化・高度化</text><text x="58" y="290" font-size="10.5" fill="#5a5147">成功モデルが多様化・水準が上昇</text><text x="58" y="306" font-size="10.5" fill="#5a5147">個別の能力育成と資源の最適投下が必須</text>
    <rect x="50" y="324" width="216" height="68" rx="9" fill="#ffffff" stroke="#efd9c8"/><circle cx="68" cy="342" r="10" fill="url(#gWarn)"/><text x="68" y="346" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">C</text><text x="86" y="346" font-size="12.5" font-weight="700" fill="#c4632a">大学→個人のミッシングリンク</text><text x="58" y="366" font-size="10.5" fill="#5a5147">支援が乱立・重複・分散</text><text x="58" y="382" font-size="10.5" fill="#5a5147">真に必要な個人に届かない</text>
    <rect x="50" y="400" width="216" height="80" rx="9" fill="#ffffff" stroke="#efd9c8"/><circle cx="68" cy="418" r="10" fill="url(#gWarn)"/><text x="68" y="422" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">D</text><text x="86" y="422" font-size="12.5" font-weight="700" fill="#c4632a">実践知が共有・蓄積されない</text><text x="58" y="442" font-size="10.5" fill="#5a5147">同じ手続きの反復・システム乱立</text><text x="58" y="458" font-size="10.5" fill="#5a5147">データ分散・異動でゼロリセット</text>
  </g>
  <text x="158" y="502" font-size="10.5" font-weight="700" fill="#c4632a" text-anchor="middle">繋ぐだけでは解決しない</text>
  <text x="158" y="518" font-size="10.5" font-weight="700" fill="#c4632a" text-anchor="middle">→ 接続 × 実践知 × AIで個別に支える</text>
  <g stroke="#d2772f" stroke-width="1.6" fill="none" opacity="0.85"><path d="M280 198 C360 198 360 300 444 304" marker-end="url(#mW)"/><path d="M280 282 C360 282 360 304 444 308" marker-end="url(#mW)"/><path d="M280 358 C360 358 360 320 444 314" marker-end="url(#mW)"/><path d="M280 440 C360 440 360 332 444 320" marker-end="url(#mW)"/></g>
  <circle cx="558" cy="312" r="186" fill="url(#glow)"/>
  <circle cx="558" cy="312" r="92" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="558" cy="312" r="92" fill="none" stroke="#ffffff" stroke-opacity="0.30" stroke-width="1.2" stroke-dasharray="3 5"/>
  <text x="558" y="300" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤</text>
  <text x="558" y="324" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="558" y="346" font-size="11" fill="#DCEEE5" text-anchor="middle">情報×データ×AIのハブ</text>
  <text x="558" y="206" font-size="11" font-weight="700" fill="#16624b" text-anchor="middle">CVデータベース</text>
  <circle cx="558" cy="230" r="22" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(558,230)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-8" y="-10" width="16" height="20" rx="2"/><path d="M-8 -4 H8 M-8 2 H8"/><circle cx="0" cy="6" r="1.6" fill="#1A7A5E"/></g>
  <text x="448" y="430" font-size="11" font-weight="700" fill="#16624b" text-anchor="middle">RAG / IR</text>
  <circle cx="448" cy="406" r="20" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(448,406)" stroke="#1A7A5E" stroke-width="1.7" fill="none"><rect x="-8" y="-8" width="16" height="16" rx="2"/><path d="M-8 -3 H-12 M-8 3 H-12 M8 -3 H12 M8 3 H12 M-3 -8 V-12 M3 -8 V-12 M-3 8 V12 M3 8 V12"/></g>
  <text x="668" y="430" font-size="11" font-weight="700" fill="#16624b" text-anchor="middle">AI伴走</text>
  <circle cx="668" cy="406" r="20" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(668,406)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><circle cx="0" cy="-3" r="4"/><path d="M-7 9 A7 7 0 0 1 7 9"/></g>
  <g stroke="#1A7A5E" stroke-width="3" fill="none"><path d="M650 312 C720 312 720 168 786 168" marker-end="url(#mA)"/><path d="M650 312 C720 312 720 256 786 256" marker-end="url(#mA)"/><path d="M650 312 C720 312 720 344 786 344" marker-end="url(#mA)"/><path d="M650 312 C720 312 720 432 786 432" marker-end="url(#mA)"/></g>
  <g>
    <rect x="792" y="130" width="452" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/><rect x="792" y="130" width="6" height="74" rx="3" fill="url(#gAccH)"/><circle cx="824" cy="167" r="11" fill="url(#gAccH)"/><text x="824" y="171" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">A</text><text x="846" y="156" font-size="14.5" font-weight="700" fill="#1A7A5E">教員の指導負担を軽減 → 研究時間を確保</text><text x="846" y="178" font-size="11.5" fill="#444">AI多言語支援・ラボ共通支援・支援者を相互接続</text><text x="846" y="196" font-size="10.5" fill="#888">課題A：業務負荷が急増 に対応</text>
    <rect x="792" y="212" width="452" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/><rect x="792" y="212" width="6" height="74" rx="3" fill="url(#gAccH)"/><circle cx="824" cy="249" r="11" fill="url(#gAccH)"/><text x="824" y="253" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">B</text><text x="846" y="238" font-size="14.5" font-weight="700" fill="#1A7A5E">院生の研究力を向上</text><text x="846" y="260" font-size="11.5" fill="#444">CV-DB（学習・スキル・資格記録）＋AI段階別個別支援</text><text x="846" y="278" font-size="10.5" fill="#888">留学・ラボ・企業マッチング ／ 課題B に対応</text>
    <rect x="792" y="294" width="452" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/><rect x="792" y="294" width="6" height="74" rx="3" fill="url(#gAccH)"/><circle cx="824" cy="331" r="11" fill="url(#gAccH)"/><text x="824" y="335" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">C</text><text x="846" y="320" font-size="14.5" font-weight="700" fill="#1A7A5E">個別最適な情報を直に届ける</text><text x="846" y="342" font-size="11.5" fill="#444">①学生入力ニーズ × ②全学の支援情報 を突合</text><text x="846" y="360" font-size="10.5" fill="#888">→ 必要な個人へダイレクト投下 ／ 課題C に対応</text>
    <rect x="792" y="376" width="452" height="74" rx="11" fill="#ffffff" filter="url(#shSoft)"/><rect x="792" y="376" width="6" height="74" rx="3" fill="url(#gAccH)"/><circle cx="824" cy="413" r="11" fill="url(#gAccH)"/><text x="824" y="417" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">D</text><text x="846" y="402" font-size="14.5" font-weight="700" fill="#1A7A5E">支援者の労力削減・効率化</text><text x="846" y="424" font-size="11.5" fill="#444">基盤上でデータ接続→AI分析／窓口業務をRAGで省力化</text><text x="846" y="442" font-size="10.5" fill="#888">IR・成果・回答を自動収集・統合分析 ／ 課題D に対応</text>
  </g>
  <rect x="36" y="548" width="730" height="64" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <rect x="36" y="548" width="730" height="22" rx="11" fill="url(#gAccH)"/>
  <rect x="36" y="558" width="730" height="12" fill="url(#gAccH)"/>
  <text x="50" y="564" font-size="11.5" font-weight="700" fill="#ffffff">想定KPI（試算・目標値）</text>
  <text x="744" y="564" font-size="9.5" fill="#DCEEE5" text-anchor="end">※すべて導入効果の想定／試算であり確定値ではない</text>
  <g><text x="100" y="595" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+3h</text><text x="100" y="608" font-size="9.5" fill="#666" text-anchor="middle">教員の研究時間／週</text><line x1="190" y1="580" x2="190" y2="604" stroke="#e3e3e3"/><text x="282" y="595" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">−50%</text><text x="282" y="608" font-size="9.5" fill="#666" text-anchor="middle">定型問い合わせ</text><line x1="382" y1="580" x2="382" y2="604" stroke="#e3e3e3"/><text x="476" y="595" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+20pt</text><text x="476" y="608" font-size="9.5" fill="#666" text-anchor="middle">院生の研究力</text><line x1="572" y1="580" x2="572" y2="604" stroke="#e3e3e3"/><text x="668" y="595" font-size="26" font-weight="700" fill="#1A7A5E" text-anchor="middle">+5pt</text><text x="668" y="608" font-size="9.5" fill="#666" text-anchor="middle">修了率（中退率↓）</text></g>
  <rect x="792" y="462" width="452" height="58" rx="11" fill="#E4F2EC" filter="url(#shSoft)"/>
  <text x="810" y="482" font-size="11.5" font-weight="700" fill="#16624b">副次効果</text>
  <text x="810" y="500" font-size="10.5" fill="#3f6b5c">許諾済データを学内・行政・企業の共同研究で利活用</text>
  <text x="810" y="514" font-size="10.5" fill="#3f6b5c">統合分析で経営判断を迅速化 ／ アプリ外販で収益化</text>
  <circle cx="1090" cy="592" r="86" fill="url(#burst)"/>
  <g stroke="#ec9554" stroke-width="2" stroke-linecap="round" opacity="0.7"><path d="M1090 524 V512"/><path d="M1090 660 V672"/><path d="M1022 592 H1010"/><path d="M1158 592 H1170"/><path d="M1042 544 L1033 535"/><path d="M1138 640 L1147 649"/><path d="M1138 544 L1147 535"/><path d="M1042 640 L1033 649"/></g>
  <path d="M792 534 L1240 534 L1268 568 L1240 602 L792 602 Z" fill="none"/>
  <path d="M792 548 L1180 548 L1206 575 L1180 602 L792 602 Z" fill="url(#gAccH)" filter="url(#sh)"/>
  <text x="970" y="572" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">受益者：学生・教員・職員・大学</text>
  <text x="970" y="590" font-size="10.5" fill="#DCEEE5" text-anchor="middle">バラバラのニーズ → 接続後は1つの基盤で躍動</text>
  <text x="1090" y="640" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">研究者と支援者が</text>
  <text x="1090" y="658" font-size="12" font-weight="700" fill="#c4632a" text-anchor="middle">躍動する大学へ</text>
</svg>

<!-- variant-38：ハブ&スポーク（中央=接続基盤Nexus）。地=ブループリント方眼＋寸法線で設計図トーン。配色=teal＋warn橙＋ニュートラルの3色。密度=packed。左=課題A〜D（橙曲線でNexusへ合流）、中央=Nexusハブ（CV-DB/RAG-IR/AI伴走のサブノード）、右=打ち手A〜D（課題と1:1対応・各カードに対応課題を明記）＋副次効果。下=想定KPIバンド（試算と明示）＋受益者row＋goalBurst（橙の放射）。 -->
