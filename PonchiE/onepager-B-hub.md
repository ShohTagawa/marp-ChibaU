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
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.16"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」アプリ ＆ AIエージェント基盤 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">教員は増えないのに院生は増え・多様化 ― このままでは立ち行かない。繋ぐ×実践知で研究力を引き上げる</text>
  <rect x="36" y="110" width="266" height="366" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="36" y="110" width="266" height="40" rx="16" fill="url(#gWarn)"/>
  <rect x="36" y="128" width="266" height="22" fill="url(#gWarn)"/>
  <text x="56" y="136" font-size="14" font-weight="700" fill="#ffffff">課題：資源が散在／教員は一定</text>
  <g font-size="12.5" fill="#333">
    <rect x="52" y="158" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="180">セミナー・イベント</text>
    <rect x="52" y="200" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="222">留学・奨学金・RA</text>
    <rect x="52" y="242" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="264">論文・データ・資料</text>
    <rect x="52" y="284" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="306">研究費・指導</text>
    <rect x="52" y="326" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="348">窓口・手続き</text>
    <rect x="52" y="368" width="234" height="34" rx="8" fill="#F7F8F8" stroke="#e3e3e3"/><text x="68" y="390">相談・実践知ログ</text>
  </g>
  <text x="56" y="430" font-size="12" fill="#c4632a" font-weight="700">資源を繋ぐだけでは解決しない</text>
  <text x="56" y="450" font-size="12" fill="#c4632a" font-weight="700">→ 繋ぐ×実践知で個別に支えるしかない</text>
  <g stroke="#cbd5d0" stroke-width="1.4" fill="none">
    <path d="M286 175 L322 292"/>
    <path d="M286 217 L322 296"/>
    <path d="M286 259 L322 300"/>
    <path d="M286 301 L322 304"/>
    <path d="M286 343 L322 308"/>
    <path d="M286 385 L322 312"/>
  </g>
  <rect x="316" y="284" width="134" height="36" rx="18" fill="url(#gAccH)"/>
  <text x="383" y="307" font-size="13.5" font-weight="700" fill="#ffffff" text-anchor="middle">繋ぐ × 実践知</text>
  <path d="M452 302 L512 302" stroke="#1A7A5E" stroke-width="4" fill="none" marker-end="url(#mA)"/>
  <circle cx="612" cy="306" r="190" fill="url(#glow)"/>
  <circle cx="612" cy="306" r="94" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="612" y="298" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">研究×学び</text>
  <text x="612" y="324" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">アプリ</text>
  <text x="612" y="346" font-size="12" fill="#DCEEE5" text-anchor="middle">自分専用コンパス</text>
  <text x="560" y="200" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">アプリ</text>
  <circle cx="560" cy="224" r="26" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(560,224)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-12" width="18" height="24" rx="3"/><path d="M-9 -6 H9 M-9 6 H9"/></g>
  <text x="666" y="200" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">AIエージェント</text>
  <circle cx="666" cy="224" r="26" fill="#ffffff" filter="url(#shSoft)"/>
  <g transform="translate(666,224)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-9" y="-9" width="18" height="18" rx="2"/><path d="M-9 -4 H-13 M-9 4 H-13 M9 -4 H13 M9 4 H13 M-4 -9 V-13 M4 -9 V-13 M-4 9 V13 M4 9 V13"/></g>
  <text x="612" y="426" font-size="12.5" font-weight="700" fill="#16624b" text-anchor="middle">2本柱：アプリ（情報を集約）× AIエージェント（実践知を統合）</text>
  <text x="612" y="446" font-size="12" fill="#555" text-anchor="middle">→ 文脈に応じて一人ひとりに個別伴走</text>
  <g stroke="#1A7A5E" stroke-width="3" fill="none">
    <path d="M706 306 C800 306 800 158 866 158" marker-end="url(#mA)"/>
    <path d="M706 306 C800 306 800 246 866 246" marker-end="url(#mA)"/>
    <path d="M706 306 C800 306 800 334 866 334" marker-end="url(#mA)"/>
    <path d="M706 306 C800 306 800 422 866 422" marker-end="url(#mA)"/>
  </g>
  <g>
    <rect x="872" y="120" width="372" height="76" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="900" cy="158" r="15" fill="#E4F2EC"/><g transform="translate(900,159)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
    <text x="926" y="152" font-size="16" font-weight="700" fill="#1A7A5E">学生</text>
    <text x="926" y="176" font-size="13" fill="#333">専用AIが学びに伴走し、研究力が上がる</text>
    <rect x="872" y="208" width="372" height="76" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="900" cy="246" r="15" fill="#E4F2EC"/><g transform="translate(900,247)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 8 A6 6 0 0 1 0 7"/><path d="M0 7 A6 6 0 0 1 11 8"/></g>
    <text x="926" y="240" font-size="16" font-weight="700" fill="#1A7A5E">教員</text>
    <text x="926" y="264" font-size="13" fill="#333">定型支援をAIが肩代わり、研究時間↑</text>
    <rect x="872" y="296" width="372" height="76" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="900" cy="334" r="15" fill="#E4F2EC"/><g transform="translate(900,334)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
    <text x="926" y="328" font-size="16" font-weight="700" fill="#1A7A5E">職員</text>
    <text x="926" y="352" font-size="13" fill="#333">窓口DXで問い合わせ・手続きを省力化</text>
    <rect x="872" y="384" width="372" height="76" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <circle cx="900" cy="422" r="15" fill="#E4F2EC"/><g transform="translate(900,423)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
    <text x="926" y="416" font-size="16" font-weight="700" fill="#1A7A5E">大学</text>
    <text x="926" y="440" font-size="13" fill="#333">データ統合をIR/経営に活用、選ばれる大学へ</text>
  </g>
  <path d="M40 504 L1206 504 L1240 542 L1206 580 L40 580 Z" fill="url(#gAccH)"/>
  <text x="623" y="530" font-size="14.5" fill="#DCEEE5" text-anchor="middle">GOAL：教員の手間↓ × 研究力↑ ／ 情報がリンクするほど学内すべての成果が連鎖的に伸びる</text>
  <text x="623" y="560" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">現状の課題を解決するハブとなり、院生の研究力が伸び続ける大学へ</text>
  <text x="640" y="624" font-size="13" fill="#999999" text-anchor="middle">散らばる学内資源を1つのハブに統合 → 学生・教員・職員・大学へ価値が放射する</text>
</svg>

<!-- パターンB：ハブ&スポーク。左＝散在する学内資源＋課題、中央＝研究×学びアプリ(2本柱=アプリ×AIエージェント)のハブ、右＝学生/教員/職員/大学へ放射するスポーク。下＝GOAL＋タグライン。 -->
