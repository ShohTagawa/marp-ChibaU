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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e2a4d"/><stop offset="1" stop-color="#123a63"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1fb6a6"/><stop offset="1" stop-color="#0c7d72"/></linearGradient>
    <linearGradient id="gNavy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c4a7e"/><stop offset="1" stop-color="#0d2c50"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e2a4d"/><stop offset="0.55" stop-color="#0c7d72"/><stop offset="1" stop-color="#1fb6a6"/></linearGradient>
    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1fb6a6" stop-opacity="0.30"/><stop offset="1" stop-color="#1fb6a6" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0d2c50" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0d2c50" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#f3f7fb"/>
  <g fill="#1c4a7e" opacity="0.10"><circle cx="170" cy="200" r="4"/><circle cx="230" cy="240" r="3"/><circle cx="300" cy="195" r="3.5"/><circle cx="360" cy="250" r="3"/><circle cx="430" cy="210" r="4"/><circle cx="540" cy="180" r="3"/><circle cx="620" cy="230" r="3.5"/><circle cx="720" cy="195" r="3"/><circle cx="810" cy="240" r="4"/><circle cx="900" cy="200" r="3"/><circle cx="980" cy="250" r="3.5"/><circle cx="1060" cy="205" r="3"/><circle cx="1130" cy="245" r="4"/><circle cx="200" cy="430" r="3.5"/><circle cx="280" cy="470" r="3"/><circle cx="380" cy="440" r="4"/><circle cx="470" cy="480" r="3"/><circle cx="560" cy="445" r="3.5"/><circle cx="700" cy="475" r="3"/><circle cx="800" cy="440" r="4"/><circle cx="890" cy="480" r="3"/><circle cx="990" cy="445" r="3.5"/><circle cx="1080" cy="475" r="3"/></g>
  <g stroke="#1c4a7e" stroke-width="1.1" opacity="0.07" fill="none"><path d="M170 200 L300 195 L430 210 L540 180"/><path d="M620 230 L720 195 L810 240 L900 200 L1060 205"/><path d="M200 430 L380 440 L560 445 L800 440 L990 445"/><path d="M430 210 L620 230 L800 440"/><path d="M540 180 L700 475"/></g>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#dff0ee"/>
  <text x="40" y="81" font-size="15" font-weight="700" fill="#0c5a52">学内に分散する〈情報・データ・支援・機会〉を一つの基盤で接続し、研究者と支援者が躍動する大学へ</text>
  <circle cx="510" cy="305" r="172" fill="url(#hubGlow)"/>
  <rect x="36" y="108" width="448" height="186" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="108" width="448" height="36" rx="16" fill="url(#gNavy)"/>
  <rect x="36" y="126" width="448" height="18" fill="url(#gNavy)"/>
  <circle cx="64" cy="135" r="13" fill="#ffffff"/>
  <g transform="translate(64,136)" stroke="#1c4a7e" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="86" y="140" font-size="14.5" font-weight="700" fill="#ffffff">A 教員 ― 研究時間を取り戻す</text>
  <text x="54" y="170" font-size="11.5" font-weight="700" fill="#0c7d72">課題：業務負荷の急増（院生の多様化・申請・評価・学振添削・全員留学で限界）</text>
  <text x="54" y="200" font-size="12" fill="#26384a">→ AIの多言語支援とラボ共通支援で指導を肩代わり</text>
  <text x="54" y="224" font-size="12" fill="#26384a">→ 必要な支援者へ容易に接続し、指導負担を軽減</text>
  <text x="54" y="252" font-size="12.5" font-weight="700" fill="#0c5a52">⇒ 教員は研究そのものに時間を回せる</text>
  <rect x="796" y="108" width="448" height="186" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="796" y="108" width="448" height="36" rx="16" fill="url(#gNavy)"/>
  <rect x="796" y="126" width="448" height="18" fill="url(#gNavy)"/>
  <circle cx="824" cy="135" r="13" fill="#ffffff"/>
  <g transform="translate(824,135)" stroke="#1c4a7e" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="846" y="140" font-size="14.5" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <text x="814" y="170" font-size="11.5" font-weight="700" fill="#0c7d72">課題：育成の多様化・高度化（個別の能力育成と資源の最適投下が必須）</text>
  <text x="814" y="200" font-size="12" fill="#26384a">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="814" y="224" font-size="12" fill="#26384a">→ 段階に応じたAI伴走の個別研究支援</text>
  <text x="814" y="252" font-size="12.5" font-weight="700" fill="#0c5a52">⇒ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="36" y="326" width="448" height="186" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="326" width="448" height="36" rx="16" fill="url(#gTeal)"/>
  <rect x="36" y="344" width="448" height="18" fill="url(#gTeal)"/>
  <circle cx="64" cy="353" r="13" fill="#ffffff"/>
  <g transform="translate(64,354)" stroke="#0c7d72" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="86" y="358" font-size="14.5" font-weight="700" fill="#ffffff">C 個人 ― 必要な機会を直に届ける</text>
  <text x="54" y="388" font-size="11.5" font-weight="700" fill="#0c7d72">課題：大学→個人のミッシングリンク（支援が乱立・重複・分散し届かない）</text>
  <text x="54" y="418" font-size="12" fill="#26384a">→ ①学生入力のニーズ ＋ ②全学の支援情報を突合</text>
  <text x="54" y="442" font-size="12" fill="#26384a">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="54" y="470" font-size="12.5" font-weight="700" fill="#0c5a52">⇒ 個別最適化した学び・訓練機会を提供</text>
  <rect x="796" y="326" width="448" height="186" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="796" y="326" width="448" height="36" rx="16" fill="url(#gTeal)"/>
  <rect x="796" y="344" width="448" height="18" fill="url(#gTeal)"/>
  <circle cx="824" cy="353" r="13" fill="#ffffff"/>
  <g transform="translate(824,353)" stroke="#0c7d72" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="846" y="358" font-size="14.5" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし効率化</text>
  <text x="814" y="388" font-size="11.5" font-weight="700" fill="#0c7d72">課題：実践知が散逸（反復業務・システム乱立・データ分散・異動でゼロリセット）</text>
  <text x="814" y="418" font-size="12" fill="#26384a">→ システムでなく〈データ〉を基盤上で接続しAI分析</text>
  <text x="814" y="442" font-size="12" fill="#26384a">→ 反復・窓口業務をRAGで省力化</text>
  <text x="814" y="470" font-size="12.5" font-weight="700" fill="#0c5a52">⇒ IR・成果・回答を自動収集し統合分析</text>
  <line x1="478" y1="201" x2="566" y2="270" stroke="#1c4a7e" stroke-width="2" opacity="0.30"/>
  <line x1="802" y1="201" x2="640" y2="270" stroke="#1c4a7e" stroke-width="2" opacity="0.30"/>
  <line x1="478" y1="419" x2="566" y2="340" stroke="#0c7d72" stroke-width="2" opacity="0.30"/>
  <line x1="802" y1="419" x2="640" y2="340" stroke="#0c7d72" stroke-width="2" opacity="0.30"/>
  <circle cx="603" cy="305" r="58" fill="url(#gNavy)" filter="url(#sh)"/>
  <circle cx="603" cy="305" r="58" fill="none" stroke="#1fb6a6" stroke-width="2.5" opacity="0.8"/>
  <text x="603" y="298" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="603" y="316" font-size="10.5" fill="#9fe6dd" text-anchor="middle">接続ハブ</text>
  <text x="603" y="332" font-size="9.5" fill="#cfeeea" text-anchor="middle">情報・データ・機会</text>
  <rect x="524" y="540" width="350" height="120" rx="14" fill="#ffffff" filter="url(#shS)"/>
  <rect x="524" y="540" width="14" height="120" rx="7" fill="url(#gTeal)"/>
  <text x="556" y="562" font-size="12.5" font-weight="700" fill="#0c5a52">アプリ像（学生・教員・支援者の単一窓口）</text>
  <rect x="556" y="572" width="92" height="74" rx="8" fill="#eef5fb" stroke="#1c4a7e" stroke-opacity="0.25"/>
  <rect x="563" y="578" width="78" height="9" rx="3" fill="#1c4a7e" opacity="0.7"/>
  <rect x="563" y="592" width="78" height="5" rx="2" fill="#9fb6cf"/>
  <rect x="563" y="601" width="60" height="5" rx="2" fill="#9fb6cf"/>
  <rect x="563" y="612" width="36" height="14" rx="4" fill="url(#gTeal)"/>
  <rect x="603" y="612" width="36" height="14" rx="4" fill="#cfe5e2"/>
  <rect x="563" y="631" width="78" height="9" rx="3" fill="#dde8f2"/>
  <text x="662" y="592" font-size="11.5" fill="#26384a">・ニーズ入力 → AIが最適支援をレコメンド</text>
  <text x="662" y="612" font-size="11.5" fill="#26384a">・CVと支援情報を突合し直投下</text>
  <text x="662" y="632" font-size="11.5" fill="#26384a">・多言語AI伴走／RAG窓口を内蔵</text>
  <rect x="36" y="540" width="468" height="120" rx="14" fill="#ffffff" filter="url(#shS)"/>
  <rect x="36" y="540" width="468" height="26" rx="14" fill="url(#gNavy)"/>
  <rect x="36" y="553" width="468" height="13" fill="url(#gNavy)"/>
  <text x="52" y="558" font-size="12.5" font-weight="700" fill="#ffffff">想定KPI（試算・導入後イメージ）</text>
  <text x="64" y="592" font-size="26" font-weight="700" fill="#0c7d72">+3h</text>
  <text x="64" y="608" font-size="10.5" fill="#5a6b7c">教員の研究時間/週</text>
  <text x="184" y="592" font-size="26" font-weight="700" fill="#0c7d72">−50%</text>
  <text x="184" y="608" font-size="10.5" fill="#5a6b7c">定型問い合わせ</text>
  <text x="312" y="592" font-size="26" font-weight="700" fill="#1c4a7e">+20pt</text>
  <text x="312" y="608" font-size="10.5" fill="#5a6b7c">院生の研究力</text>
  <text x="424" y="592" font-size="26" font-weight="700" fill="#1c4a7e">+5pt</text>
  <text x="424" y="608" font-size="10.5" fill="#5a6b7c">修了率（中退↓）</text>
  <text x="52" y="640" font-size="10" fill="#8a97a6">※数値はいずれも想定・試算であり、実測値ではありません</text>
  <rect x="894" y="540" width="350" height="120" rx="14" fill="#0d2c50"/>
  <text x="912" y="562" font-size="12.5" font-weight="700" fill="#1fb6a6">GOAL ― 接続が生む成果</text>
  <g fill="#dff0ee" font-size="11.5"><text x="912" y="588">◆ 4つの立場が一基盤でつながり躍動</text><text x="912" y="608">◆ 許諾済データで学内・行政・企業の共同研究</text><text x="912" y="628">◆ 統合分析で経営判断を迅速化／アプリ外販も視野</text></g>
  <path d="M36 678 L1244 678" stroke="#1c4a7e" stroke-width="0" opacity="0"/>
</svg>

<!-- variant-30: 2×2マトリクス＋中心Nexusハブ。背景=世界地図風ドット結線、配色=ネイビー＋teal寒色クール、密度=airy。追加要素=appMockup/kpiBand/goalBurst。A-D課題↔打ち手1:1、KPIは想定/試算明示。 -->
