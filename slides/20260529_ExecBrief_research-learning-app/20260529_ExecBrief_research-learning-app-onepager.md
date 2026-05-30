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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.10"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#E07B39"/></marker>
  </defs>
  <circle cx="612" cy="232" r="240" fill="url(#glow)"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」アプリ ＆ AIエージェント基盤 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">教員を増やさずに、増え・多様化する大学院生の研究力を引き上げる ― 千葉大学の構想</text>
  <rect x="40" y="110" width="300" height="218" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="110" width="300" height="40" rx="16" fill="url(#gWarn)"/>
  <rect x="40" y="128" width="300" height="22" fill="url(#gWarn)"/>
  <circle cx="66" cy="130" r="14" fill="#ffffff"/>
  <g transform="translate(66,131)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="66" cy="133" r="1.1" fill="#d2772f"/>
  <text x="90" y="136" font-size="15" font-weight="700" fill="#ffffff">① なぜ必要か</text>
  <text x="58" y="174" font-size="13.5" font-weight="700" fill="#c4632a">このままでは立ち行かない</text>
  <text x="74" y="241" font-size="11" fill="#888">教員数 一定</text>
  <path d="M68 246 L298 246" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="4" fill="none"/>
  <polygon points="83,246 298,246 298,190" fill="#E07B39" opacity="0.14"/>
  <path d="M68 250 L298 190" stroke="#E07B39" stroke-width="2.5" fill="none" marker-end="url(#mW)"/>
  <text x="298" y="184" font-size="11.5" font-weight="700" fill="#c4632a" text-anchor="end">院生↑ 増・多様化</text>
  <text x="232" y="240" font-size="11.5" font-weight="700" fill="#c4632a" text-anchor="middle">広がる支援ギャップ</text>
  <text x="58" y="296" font-size="12" fill="#555">院生：留学生・社会人・分野横断で増加</text>
  <text x="58" y="314" font-size="12" fill="#555">教員：人数は増えず1人の負担が限界</text>
  <path d="M346 198 L366 198 L380 219 L366 240 L346 240 L360 219 Z" fill="#1A7A5E"/>
  <rect x="378" y="110" width="470" height="218" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="378" y="110" width="470" height="40" rx="16" fill="url(#gAccH)"/>
  <rect x="378" y="128" width="470" height="22" fill="url(#gAccH)"/>
  <circle cx="404" cy="130" r="14" fill="#ffffff"/>
  <g transform="translate(404,130)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="428" y="136" font-size="14" font-weight="700" fill="#ffffff">② なぜできるか ― アプリ × AIエージェント</text>
  <rect x="392" y="156" width="214" height="114" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="402" y="176" font-size="12" font-weight="700" fill="#1A7A5E">柱① アプリ（フロント）</text>
  <g opacity="0.16" stroke="#1A7A5E" stroke-width="1.3" fill="none"><path d="M448 192 C470 192 470 224 452 224"/><path d="M452 236 C474 236 474 226 456 226"/><path d="M448 258 C468 258 468 232 452 232"/></g>
  <g opacity="0.5" fill="#1A7A5E"><circle cx="470" cy="192" r="2.6"/><circle cx="476" cy="236" r="2.6"/><circle cx="470" cy="258" r="2.6"/></g>
  <rect x="400" y="186" width="56" height="80" rx="9" fill="#E4F2EC" opacity="0.6"/>
  <rect x="404" y="190" width="48" height="72" rx="7" fill="#ffffff" stroke="#1A7A5E" stroke-width="1.3"/>
  <rect x="404" y="190" width="48" height="14" rx="7" fill="#1A7A5E"/>
  <rect x="404" y="197" width="48" height="7" fill="#1A7A5E"/>
  <rect x="410" y="210" width="36" height="7" rx="3" fill="#E4F2EC" stroke="#cfe0d8" stroke-width="0.6"/>
  <circle cx="415" cy="227" r="3.6" fill="#cfe0d8"/><rect x="421" y="224" width="25" height="5" rx="2" fill="#cfe0d8"/>
  <circle cx="415" cy="240" r="3.6" fill="#cfe0d8"/><rect x="421" y="237" width="25" height="5" rx="2" fill="#cfe0d8"/>
  <circle cx="415" cy="253" r="3.6" fill="#cfe0d8"/><rect x="421" y="250" width="25" height="5" rx="2" fill="#cfe0d8"/>
  <text x="490" y="212" font-size="12.5" font-weight="700" fill="#16624b">図書館アプリ</text>
  <text x="490" y="231" font-size="11.5" fill="#555">情報が集約される</text>
  <text x="490" y="249" font-size="11.5" fill="#555">学びの入口・フロント</text>
  <text x="613" y="222" font-size="22" font-weight="700" fill="#1A7A5E" text-anchor="middle">＋</text>
  <rect x="628" y="156" width="206" height="114" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="638" y="176" font-size="12" font-weight="700" fill="#1A7A5E">柱② AIエージェント（裏側）</text>
  <text x="638" y="200" font-size="11.5" fill="#333">・みんなの実践知を統合</text>
  <text x="650" y="216" font-size="10.5" fill="#888">（指導・添削・申請の暗黙知）</text>
  <text x="638" y="236" font-size="11.5" fill="#333">・情報を統合（学修履歴・データ）</text>
  <text x="638" y="260" font-size="12.5" font-weight="700" fill="#16624b">→ 文脈に応じて個別支援</text>
  <rect x="392" y="280" width="442" height="36" rx="8" fill="#E4F2EC"/>
  <text x="613" y="303" font-size="13.5" font-weight="700" fill="#16624b" text-anchor="middle">2本柱で 教員の手間を増やさず個別伴走 ＝ だから不可欠</text>
  <path d="M854 198 L874 198 L888 219 L874 240 L854 240 L868 219 Z" fill="#1A7A5E"/>
  <rect x="886" y="110" width="354" height="218" rx="16" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="912" cy="138" r="15" fill="#ffffff"/>
  <g transform="translate(912,138)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="938" y="144" font-size="15" font-weight="700" fill="#ffffff">③ 向かう先（GOAL）</text>
  <text x="906" y="190" font-size="19" font-weight="700" fill="#ffffff">教員の手間↓ × 研究力↑</text>
  <text x="906" y="222" font-size="14" fill="#DCEEE5">情報がリンクするほど、</text>
  <text x="906" y="242" font-size="14" fill="#DCEEE5">学内すべての成果が連鎖的に伸びる</text>
  <text x="906" y="274" font-size="12.5" fill="#DCEEE5">→ 中退率↓・修了率↑・研究力↑ の好循環</text>
  <text x="906" y="298" font-size="12.5" fill="#DCEEE5">→ 自ら考える学生が育つ大学へ</text>
  <text x="40" y="356" font-size="13" font-weight="700" fill="#999999">段階的に提供価値を拡大（Level 1 → 3）</text>
  <path d="M150 438 C340 438 380 414 560 410 S900 388 1000 384" stroke="#9bbcb1" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="186" y="412" width="252" height="54" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="206" y="434" font-size="14" font-weight="700" fill="#16624b">図書館アプリ</text>
  <text x="206" y="454" font-size="12" fill="#444">学内の情報・資源が一つに集約</text>
  <rect x="596" y="386" width="252" height="54" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="616" y="408" font-size="14" font-weight="700" fill="#16624b">AIエージェント基盤</text>
  <text x="616" y="428" font-size="12" fill="#444">学習支援・教員の負担軽減・実践知展開</text>
  <rect x="982" y="358" width="258" height="54" rx="10" fill="#F7FBF9" filter="url(#shSoft)"/>
  <text x="1002" y="380" font-size="14" font-weight="700" fill="#16624b">教員・事務へ展開</text>
  <text x="1002" y="400" font-size="12" fill="#444">教育・研究・事務の支援に拡大</text>
  <circle cx="150" cy="438" r="23" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="150" y="446" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="560" cy="410" r="23" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="560" y="418" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="946" cy="384" r="23" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="946" y="392" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <text x="40" y="486" font-size="13" font-weight="700" fill="#999999">ニーズ → 導入後</text>
  <rect x="40" y="494" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="64" cy="520" r="15" fill="#E4F2EC"/>
  <g transform="translate(64,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="90" y="526" font-size="16" font-weight="700" fill="#1A7A5E">学生</text>
  <text x="58" y="552" font-size="12" fill="#888">ニーズ：個別最適な学びがほしい</text>
  <text x="58" y="574" font-size="12.5" font-weight="700" fill="#16624b">導入後：専用AIが伴走、研究力↑</text>
  <rect x="345" y="494" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="369" cy="520" r="15" fill="#E4F2EC"/>
  <g transform="translate(369,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 8 A6 6 0 0 1 0 7"/><path d="M0 7 A6 6 0 0 1 11 8"/></g>
  <text x="395" y="526" font-size="16" font-weight="700" fill="#1A7A5E">教員</text>
  <text x="363" y="552" font-size="12" fill="#888">ニーズ：定型支援に時間を奪われる</text>
  <text x="363" y="574" font-size="12.5" font-weight="700" fill="#16624b">導入後：AIが肩代わり、研究時間↑</text>
  <rect x="650" y="494" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="674" cy="520" r="15" fill="#E4F2EC"/>
  <g transform="translate(674,520)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
  <text x="700" y="526" font-size="16" font-weight="700" fill="#1A7A5E">職員</text>
  <text x="668" y="552" font-size="12" fill="#888">ニーズ：問い合わせ対応が多い</text>
  <text x="668" y="574" font-size="12.5" font-weight="700" fill="#16624b">導入後：窓口DXで省力化</text>
  <rect x="955" y="494" width="285" height="92" rx="14" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="979" cy="520" r="15" fill="#E4F2EC"/>
  <g transform="translate(979,521)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
  <text x="1005" y="526" font-size="16" font-weight="700" fill="#1A7A5E">大学</text>
  <text x="973" y="552" font-size="12" fill="#888">ニーズ：データが分散している</text>
  <text x="973" y="574" font-size="12.5" font-weight="700" fill="#16624b">導入後：統合しIR/経営に活用</text>
  <path d="M40 600 L1206 600 L1240 638 L1206 676 L40 676 Z" fill="url(#gAccH)"/>
  <text x="623" y="644" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">現状の課題を解決するハブとなり、院生の研究力が伸び続ける大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。横3幕フロー(①課題→②2本柱エンジン→③GOAL)＋ロードマップ旅(Level1-3の昇るパス)＋受益者(ニーズ→導入後)の3骨格。グラデ帯・ドロップシャドウ・アイコンバッジ・シェブロン矢印・番号ノードで立体的に。 -->
