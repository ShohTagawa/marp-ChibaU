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
    <linearGradient id="gUp" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#bfe0d4"/><stop offset="1" stop-color="#1A7A5E"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#E07B39"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」AIエージェント基盤 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">ディレクション：基盤の上に価値を積み上げ、教員を増やさず院生の研究力を引き上げる</text>
  <rect x="40" y="112" width="212" height="338" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="112" width="212" height="40" rx="16" fill="url(#gWarn)"/>
  <rect x="40" y="130" width="212" height="22" fill="url(#gWarn)"/>
  <circle cx="66" cy="132" r="14" fill="#ffffff"/>
  <g transform="translate(66,133)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="66" cy="135" r="1.1" fill="#d2772f"/>
  <text x="90" y="138" font-size="14" font-weight="700" fill="#ffffff">なぜ必要か</text>
  <text x="60" y="240" font-size="10.5" fill="#888">教員数 一定</text>
  <path d="M58 246 L232 246" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="4" fill="none"/>
  <polygon points="132,246 232,246 232,196" fill="#E07B39" opacity="0.13"/>
  <path d="M58 250 L232 194" stroke="#E07B39" stroke-width="2.5" fill="none" marker-end="url(#mW)"/>
  <text x="232" y="188" font-size="11" font-weight="700" fill="#c4632a" text-anchor="end">院生↑</text>
  <text x="60" y="288" font-size="12" fill="#555">教員は増えず、院生は</text>
  <text x="60" y="306" font-size="12" fill="#555">増え・多様化する</text>
  <text x="60" y="332" font-size="12.5" font-weight="700" fill="#c4632a">→ 従来手法は限界</text>
  <text x="60" y="358" font-size="12.5" font-weight="700" fill="#16624b">だから積み上げ型の</text>
  <text x="60" y="376" font-size="12.5" font-weight="700" fill="#16624b">統合基盤が要る</text>
  <path d="M278 432 L278 150" stroke="url(#gUp)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M278 150 L268 168 L288 168 Z" fill="#1A7A5E"/>
  <text x="296" y="300" font-size="12" font-weight="700" fill="#16624b" transform="rotate(-90 296 300)" text-anchor="middle">価値が積み上がる</text>
  <polygon points="355,362 965,362 1025,434 295,434" fill="#bfe0d4" filter="url(#shSoft)"/>
  <text x="660" y="403" font-size="13.5" font-weight="700" fill="#16624b" text-anchor="middle">基盤：図書館アプリ ＝ 散らばる 人・データ・支援・実践知 を集約</text>
  <polygon points="420,284 900,284 960,356 360,356" fill="#4f9f85" filter="url(#shSoft)"/>
  <text x="660" y="325" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">AIエージェント ＝ 実践知＋情報を統合し、文脈に応じ個別支援</text>
  <polygon points="485,206 835,206 895,278 425,278" fill="#1A7A5E" filter="url(#shSoft)"/>
  <text x="660" y="247" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">提供価値 ＝ 学習支援・教員の負担軽減・実践知を全学へ</text>
  <polygon points="550,128 770,128 830,200 490,200" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="660" cy="150" r="13" fill="#ffffff"/>
  <g transform="translate(660,150)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g>
  <text x="660" y="186" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">GOAL：教員の手間↓ × 研究力↑</text>
  <text x="1045" y="150" font-size="12.5" fill="#6b7280">情報がリンクするほど</text>
  <text x="1045" y="170" font-size="12.5" fill="#6b7280">学内すべての成果が</text>
  <text x="1045" y="190" font-size="12.5" font-weight="700" fill="#16624b">連鎖的に伸びる</text>
  <text x="1045" y="222" font-size="12.5" fill="#6b7280">→ 中退率↓・修了率↑</text>
  <text x="1045" y="242" font-size="12.5" fill="#6b7280">→ 自ら考える学生が</text>
  <text x="1045" y="262" font-size="12.5" font-weight="700" fill="#16624b">　育つ大学へ</text>
  <text x="40" y="462" font-size="13" font-weight="700" fill="#999999">誰に、どう効くか</text>
  <rect x="40" y="470" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="64" cy="498" r="15" fill="#E4F2EC"/><g transform="translate(64,499)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="90" y="504" font-size="16" font-weight="700" fill="#1A7A5E">学生</text>
  <text x="58" y="532" font-size="12.5" fill="#333">専用AIが学びに伴走し</text>
  <text x="58" y="552" font-size="12.5" font-weight="700" fill="#16624b">研究レベルが上がる</text>
  <rect x="345" y="470" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="369" cy="498" r="15" fill="#E4F2EC"/><g transform="translate(369,499)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 8 A6 6 0 0 1 0 7"/><path d="M0 7 A6 6 0 0 1 11 8"/></g>
  <text x="395" y="504" font-size="16" font-weight="700" fill="#1A7A5E">教員</text>
  <text x="363" y="532" font-size="12.5" fill="#333">定型支援をAIが肩代わり</text>
  <text x="363" y="552" font-size="12.5" font-weight="700" fill="#16624b">手間↓で研究時間↑</text>
  <rect x="650" y="470" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="674" cy="498" r="15" fill="#E4F2EC"/><g transform="translate(674,498)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
  <text x="700" y="504" font-size="16" font-weight="700" fill="#1A7A5E">職員</text>
  <text x="668" y="532" font-size="12.5" fill="#333">窓口DXで問い合わせ・</text>
  <text x="668" y="552" font-size="12.5" font-weight="700" fill="#16624b">手続きを省力化</text>
  <rect x="955" y="470" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="979" cy="498" r="15" fill="#E4F2EC"/><g transform="translate(979,499)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
  <text x="1005" y="504" font-size="16" font-weight="700" fill="#1A7A5E">大学</text>
  <text x="973" y="532" font-size="12.5" fill="#333">データを統合しIR/経営に</text>
  <text x="973" y="552" font-size="12.5" font-weight="700" fill="#16624b">活用、選ばれる大学へ</text>
  <path d="M40 580 L1206 580 L1240 618 L1206 656 L40 656 Z" fill="url(#gAccH)"/>
  <text x="623" y="624" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">現状の課題を解決するハブとなり、「自ら考える学生が育つ大学」へ</text>
</svg>

<!-- パターンC：積み上げピラミッド。左＝なぜ必要(教員一定×院生増)、中央＝基盤(図書館アプリ)→AIエージェント→提供価値→GOALの4層が上昇、右上＝情報リンクの夢、下＝受益者4枚＋タグライン。価値が積み上がる構造を強調。 -->
