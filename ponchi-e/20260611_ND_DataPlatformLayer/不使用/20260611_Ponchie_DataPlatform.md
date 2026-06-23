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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1A7A5E"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.12"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#125642" flood-opacity="0.18"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#125642" flood-opacity="0.12"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="66" fill="url(#gAccH)"/>
  <text x="40" y="43" font-size="26" font-weight="700" fill="#fff">全学データ統合・活用基盤 構想（検討案）</text>
  <rect x="1112" y="16" width="130" height="34" rx="8" fill="#fff"/>
  <image href="../assets/chiba-logo.png" x="1122" y="24" width="110" height="18"/>
  <text x="40" y="92" font-size="13" fill="#6b7280">学内に散在するデータを HULFT で安全に集約し、生成AI（Copilot）による“全教職員が使える”データ活用へつなげる ― 構想の全体像</text>
  <circle cx="660" cy="345" r="200" fill="url(#glow)"/>
  <rect x="130" y="109" width="130" height="28" rx="14" fill="#FBEDE2"/>
  <text x="195" y="128" font-size="12" font-weight="700" fill="#a05420" text-anchor="middle">現状：散在</text>
  <circle cx="410" cy="123" r="13" fill="url(#gAcc)"/>
  <text x="410" y="128" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">1</text>
  <text x="428" y="128" font-size="15" font-weight="700" fill="#125642">つなぐ</text>
  <circle cx="645" cy="123" r="13" fill="url(#gAcc)"/>
  <text x="645" y="128" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">2</text>
  <text x="663" y="128" font-size="15" font-weight="700" fill="#125642">ためる</text>
  <circle cx="1045" cy="123" r="13" fill="url(#gAcc)"/>
  <text x="1045" y="128" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">3</text>
  <text x="1063" y="128" font-size="15" font-weight="700" fill="#125642">活かす</text>
  <rect x="40" y="150" width="310" height="410" rx="18" fill="#FBEDE2" filter="url(#shSoft)"/>
  <rect x="880" y="150" width="360" height="410" rx="18" fill="#E4F2EC" filter="url(#shSoft)"/>
  <path d="M470 331 H800 L800 317 L868 345 L800 373 L800 359 H470 Z" fill="#BBD9CC"/>
  <text x="60" y="184" font-size="16" font-weight="700" fill="#9a5224">学内データソース</text>
  <text x="60" y="203" font-size="11.5" fill="#6b7280">システムごとに分断・連携は個別/手作業</text>
  <g filter="url(#shSoft)"><rect x="60" y="214" width="272" height="56" rx="10" fill="#fff"/></g>
  <circle cx="88" cy="242" r="16" fill="#EEF0F2"/>
  <g transform="translate(88,242)"><g stroke="#6b7280" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g></g>
  <text x="112" y="238" font-size="13.5" font-weight="700" fill="#1f2937">教務システム</text>
  <text x="112" y="257" font-size="11" fill="#6b7280">履修・成績・カリキュラム</text>
  <g filter="url(#shSoft)"><rect x="60" y="282" width="272" height="56" rx="10" fill="#fff"/></g>
  <circle cx="88" cy="310" r="16" fill="#EEF0F2"/>
  <g transform="translate(88,310)"><g stroke="#6b7280" stroke-width="2" fill="none"><rect x="-8" y="-8" width="16" height="11" rx="1.5"/><path d="M0 3 V7 M-5 7 H5"/></g></g>
  <text x="112" y="306" font-size="13.5" font-weight="700" fill="#1f2937">LMS（Moodle）</text>
  <text x="112" y="325" font-size="11" fill="#6b7280">学習ログ・課題・出席</text>
  <g filter="url(#shSoft)"><rect x="60" y="350" width="272" height="56" rx="10" fill="#fff"/></g>
  <circle cx="88" cy="378" r="16" fill="#EEF0F2"/>
  <g transform="translate(88,378)"><g stroke="#6b7280" stroke-width="2" fill="none"><path d="M-8 -7 L0 -5 L0 8 L-8 6 Z"/><path d="M8 -7 L0 -5 L0 8 L8 6 Z"/></g></g>
  <text x="112" y="374" font-size="13.5" font-weight="700" fill="#1f2937">図書館システム</text>
  <text x="112" y="393" font-size="11" fill="#6b7280">貸出・入館・電子リソース</text>
  <g filter="url(#shSoft)"><rect x="60" y="418" width="272" height="56" rx="10" fill="#fff"/></g>
  <circle cx="88" cy="446" r="16" fill="#EEF0F2"/>
  <g transform="translate(88,446)"><g stroke="#6b7280" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g></g>
  <text x="112" y="442" font-size="13.5" font-weight="700" fill="#1f2937">人事・財務システム</text>
  <text x="112" y="461" font-size="11" fill="#6b7280">教職員・予算・経理</text>
  <g filter="url(#shSoft)"><rect x="60" y="486" width="272" height="56" rx="10" fill="#fff"/></g>
  <circle cx="88" cy="514" r="16" fill="#EEF0F2"/>
  <g transform="translate(88,514)"><g stroke="#6b7280" stroke-width="2" fill="none"><path d="M-6 -8 H2 L7 -3 V8 H-6 Z"/><path d="M-2 0 H3 M-2 4 H3"/></g></g>
  <text x="112" y="510" font-size="13.5" font-weight="700" fill="#1f2937">入試・学籍データ</text>
  <text x="112" y="529" font-size="11" fill="#6b7280">志願者・入学・異動</text>
  <path d="M336 242 C366 242 362 295 390 295" stroke="#1A7A5E" stroke-width="2.5" fill="none" marker-end="url(#mA)" opacity="0.85"/>
  <path d="M336 310 C366 310 362 320 390 320" stroke="#1A7A5E" stroke-width="2.5" fill="none" marker-end="url(#mA)" opacity="0.85"/>
  <path d="M336 378 C366 378 362 345 390 345" stroke="#1A7A5E" stroke-width="2.5" fill="none" marker-end="url(#mA)" opacity="0.85"/>
  <path d="M336 446 C366 446 362 370 390 370" stroke="#1A7A5E" stroke-width="2.5" fill="none" marker-end="url(#mA)" opacity="0.85"/>
  <path d="M336 514 C366 514 362 395 390 395" stroke="#1A7A5E" stroke-width="2.5" fill="none" marker-end="url(#mA)" opacity="0.85"/>
  <g filter="url(#sh)"><rect x="392" y="252" width="96" height="186" rx="16" fill="url(#gAcc)"/></g>
  <g transform="translate(440,296)"><g stroke="#fff" stroke-width="2.2" fill="none"><rect x="-8" y="-2" width="16" height="12" rx="2"/><path d="M-5 -2 V-6 A5 5 0 0 1 5 -6 V-2"/></g></g>
  <text x="440" y="345" font-size="19" font-weight="700" fill="#fff" text-anchor="middle">HULFT</text>
  <text x="440" y="368" font-size="11.5" fill="#DFF2EA" text-anchor="middle">セキュア</text>
  <text x="440" y="384" font-size="11.5" fill="#DFF2EA" text-anchor="middle">ファイル連携</text>
  <text x="440" y="460" font-size="11" fill="#6b7280" text-anchor="middle">夜間バッチ等で</text>
  <text x="440" y="476" font-size="11" fill="#6b7280" text-anchor="middle">自動・確実に転送</text>
  <circle cx="660" cy="345" r="106" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="660" cy="345" r="96" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="1.2"/>
  <g transform="translate(660,286)"><g stroke="#fff" stroke-width="2.5" fill="none"><ellipse cx="0" cy="-12" rx="17" ry="6"/><path d="M-17 -12 V14"/><path d="M17 -12 V14"/><path d="M-17 1 A17 6 0 0 0 17 1"/><path d="M-17 14 A17 6 0 0 0 17 14"/></g></g>
  <text x="660" y="352" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">データベース基盤</text>
  <text x="660" y="376" font-size="12.5" fill="#D6EFE5" text-anchor="middle">全学統合DB / DWH</text>
  <rect x="520" y="466" width="130" height="30" rx="15" fill="#E4F2EC"/>
  <text x="585" y="486" font-size="12" font-weight="700" fill="#125642" text-anchor="middle">名寄せ・標準化</text>
  <rect x="670" y="466" width="130" height="30" rx="15" fill="#E4F2EC"/>
  <text x="735" y="486" font-size="12" font-weight="700" fill="#125642" text-anchor="middle">アクセス権統制</text>
  <circle cx="900" cy="184" r="14" fill="#1A7A5E"/>
  <g transform="translate(900,184)"><g stroke="#fff" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3"/></g></g>
  <text x="922" y="190" font-size="16" font-weight="700" fill="#125642">データ活用</text>
  <text x="900" y="212" font-size="11.5" fill="#6b7280">“誰もが使える”形で価値へ</text>
  <g filter="url(#sh)"><rect x="900" y="222" width="320" height="118" rx="14" fill="#fff"/></g>
  <rect x="900" y="222" width="320" height="32" rx="14" fill="url(#gAccH)"/>
  <rect x="900" y="240" width="320" height="14" fill="url(#gAccH)"/>
  <circle cx="924" cy="238" r="13" fill="#fff"/>
  <g transform="translate(924,238)"><g stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-6" y="-6" width="12" height="12" rx="2"/><path d="M-6 -2.5 H-10 M-6 2.5 H-10 M6 -2.5 H10 M6 2.5 H10 M-2.5 -6 V-10 M2.5 -6 V-10 M-2.5 6 V10 M2.5 6 V10"/></g></g>
  <text x="946" y="243" font-size="15" font-weight="700" fill="#fff">Microsoft Copilot</text>
  <text x="918" y="278" font-size="12.5" fill="#1f2937">自然言語で“聞くだけ”のデータ照会・分析</text>
  <text x="918" y="298" font-size="12.5" fill="#1f2937">会議資料・レポート作成までAIが支援</text>
  <text x="918" y="324" font-size="12" font-weight="700" fill="#125642">→ 全教職員がデータの使い手に</text>
  <g filter="url(#shSoft)"><rect x="900" y="354" width="320" height="88" rx="12" fill="#fff"/></g>
  <circle cx="928" cy="398" r="16" fill="#E4F2EC"/>
  <g transform="translate(928,398)"><g stroke="#1A7A5E" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M-8 8 V-2 M-2.5 8 V-7 M3 8 V-4 M8.5 8 V-8"/></g></g>
  <text x="956" y="392" font-size="13.5" font-weight="700" fill="#1f2937">経営・IRダッシュボード</text>
  <text x="956" y="412" font-size="11.5" fill="#6b7280">教学・経営指標を常時可視化し意思決定を支援</text>
  <g filter="url(#shSoft)"><rect x="900" y="454" width="320" height="88" rx="12" fill="#fff"/></g>
  <circle cx="928" cy="498" r="16" fill="#E4F2EC"/>
  <g transform="translate(928,498)"><g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g></g>
  <text x="956" y="492" font-size="13.5" font-weight="700" fill="#1f2937">教育改善・学生支援</text>
  <text x="956" y="512" font-size="11.5" fill="#6b7280">学修データに基づく授業改善・修学アラート</text>
  <text x="40" y="596" font-size="13" font-weight="700" fill="#125642">検討の論点</text>
  <rect x="150" y="574" width="350" height="34" rx="17" fill="#F3F4F6"/>
  <text x="325" y="595" font-size="12.5" fill="#374151" text-anchor="middle">① 導入・運用コスト／費用対効果</text>
  <rect x="515" y="574" width="350" height="34" rx="17" fill="#F3F4F6"/>
  <text x="690" y="595" font-size="12.5" fill="#374151" text-anchor="middle">② セキュリティ・個人情報保護</text>
  <rect x="880" y="574" width="350" height="34" rx="17" fill="#F3F4F6"/>
  <text x="1055" y="595" font-size="12.5" fill="#374151" text-anchor="middle">③ データガバナンス・運用体制</text>
  <path d="M40 620 L1210 620 L1240 651 L1210 682 L40 682 Z" fill="url(#gAccH)" filter="url(#shSoft)"/>
  <text x="630" y="658" font-size="19" font-weight="700" fill="#fff" text-anchor="middle">つなぐ（HULFT）→ ためる（統合DB）→ 活かす（Copilot）― 全学データ活用の土台を整える</text>
</svg>
