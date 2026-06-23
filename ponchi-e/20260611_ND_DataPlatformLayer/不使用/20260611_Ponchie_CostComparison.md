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
  </defs>
  <rect x="0" y="0" width="1280" height="66" fill="url(#gAccH)"/>
  <text x="40" y="43" font-size="26" font-weight="700" fill="#fff">全学データ活用AI 構成案の費用比較（検討案）</text>
  <rect x="1112" y="16" width="130" height="34" rx="8" fill="#fff"/>
  <image href="../assets/chiba-logo.png" x="1122" y="24" width="110" height="18"/>
  <text x="40" y="90" font-size="12.5" fill="#6b7280">前提：全教職員3,000人に配布・$1=160円・税抜定価（2026年6月時点）。Gemini Enterprise SDKはベンダー見積価格（¥7,200/人/年）</text>
  <rect x="40" y="112" width="770" height="448" rx="18" fill="#F3F7F5" filter="url(#shSoft)"/>
  <text x="60" y="144" font-size="15" font-weight="700" fill="#125642">全学3,000人導入時の年額（AIライセンス）</text>
  <line x1="457" y1="166" x2="457" y2="488" stroke="#d5ded9" stroke-width="1" stroke-dasharray="3 5"/>
  <line x1="584" y1="166" x2="584" y2="488" stroke="#d5ded9" stroke-width="1" stroke-dasharray="3 5"/>
  <line x1="711" y1="166" x2="711" y2="488" stroke="#d5ded9" stroke-width="1" stroke-dasharray="3 5"/>
  <text x="457" y="160" font-size="11" fill="#9ca3af" text-anchor="middle">0.5億円</text>
  <text x="584" y="160" font-size="11" fill="#9ca3af" text-anchor="middle">1.0億円</text>
  <text x="711" y="160" font-size="11" fill="#9ca3af" text-anchor="middle">1.5億円</text>
  <text x="60" y="191" font-size="13" font-weight="700" fill="#1f2937">Gemini Enterprise Standard</text>
  <text x="60" y="207" font-size="10.5" fill="#6b7280">$30/人/月・フルUI込・要交渉</text>
  <rect x="330" y="176" width="440" height="36" rx="6" fill="#C8D2CE"/>
  <text x="760" y="199" font-size="14" font-weight="700" fill="#374151" text-anchor="end">約1.73億円</text>
  <text x="60" y="255" font-size="13" font-weight="700" fill="#1f2937">M365 Copilot Enterprise</text>
  <text x="60" y="271" font-size="10.5" fill="#6b7280">¥4,497/人/月・M365ライセンス別途</text>
  <rect x="330" y="240" width="412" height="36" rx="6" fill="#C8D2CE"/>
  <text x="732" y="263" font-size="14" font-weight="700" fill="#374151" text-anchor="end">約1.62億円</text>
  <text x="60" y="319" font-size="13" font-weight="700" fill="#1f2937">Google AI Pro for Education</text>
  <text x="60" y="335" font-size="10.5" fill="#6b7280">$132/人/年(1,000+)・GWE+前提</text>
  <rect x="330" y="304" width="160" height="36" rx="6" fill="#C8D2CE"/>
  <text x="500" y="327" font-size="14" font-weight="700" fill="#374151">約6,300万円</text>
  <text x="60" y="383" font-size="13" font-weight="700" fill="#1f2937">Claude API（Sonnet・中利用）</text>
  <text x="60" y="399" font-size="10.5" fill="#6b7280">約¥860/人/月・従量制・UI開発要</text>
  <rect x="330" y="368" width="79" height="36" rx="6" fill="#C8D2CE"/>
  <text x="419" y="391" font-size="14" font-weight="700" fill="#374151">約3,100万円</text>
  <circle cx="420" cy="450" r="120" fill="url(#glow)"/>
  <text x="60" y="447" font-size="13" font-weight="700" fill="#125642">Gemini Enterprise SDK</text>
  <text x="60" y="463" font-size="10.5" fill="#6b7280">¥7,200/人/年・UI開発要（見積価格）</text>
  <rect x="330" y="432" width="55" height="36" rx="6" fill="url(#gAccH)" filter="url(#sh)"/>
  <text x="395" y="455" font-size="15" font-weight="700" fill="#125642">約2,160万円</text>
  <rect x="492" y="436" width="92" height="28" rx="14" fill="url(#gAccH)"/>
  <text x="538" y="455" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">本命候補</text>
  <line x1="60" y1="488" x2="790" y2="488" stroke="#dfe7e3" stroke-width="1"/>
  <text x="60" y="516" font-size="12" font-weight="700" fill="#6b7280">（参考）データベース基盤：Azure Fabric等</text>
  <rect x="330" y="503" width="4" height="16" rx="2" fill="#9bb7ab"/>
  <text x="344" y="516" font-size="11.5" fill="#6b7280">年約100万円 ― どの案でも総額の1〜2%（誤差レベル）</text>
  <text x="60" y="546" font-size="10.5" fill="#9ca3af">出典：Microsoft/Google公開価格・米国リセラー価格・ベンダー見積（Gemini SDK）／Claude APIは月400問（入2,000/出500tok）の従量試算</text>
  <rect x="830" y="112" width="410" height="212" rx="18" fill="#E4F2EC" filter="url(#shSoft)"/>
  <circle cx="858" cy="142" r="14" fill="#1A7A5E"/>
  <g transform="translate(858,142)"><g stroke="#fff" stroke-width="2" fill="none"><circle cx="0" cy="-2" r="6"/><path d="M-3 6 H3 M-2 9 H2"/></g></g>
  <text x="880" y="148" font-size="15" font-weight="700" fill="#125642">Gemini SDKを本命とする理由</text>
  <circle cx="848" cy="181" r="3" fill="#1A7A5E"/>
  <text x="860" y="186" font-size="12" fill="#1f2937">本学はGoogle Workspace運用のため</text>
  <text x="860" y="204" font-size="12" fill="#1f2937">既存基盤にそのまま乗せられる</text>
  <circle cx="848" cy="229" r="3" fill="#1A7A5E"/>
  <text x="860" y="234" font-size="12" fill="#1f2937">定額で全員配布でき、年2,160万円 ―</text>
  <text x="860" y="252" font-size="12" fill="#1f2937">全員Copilot案（1.62億円）の約1/8</text>
  <circle cx="848" cy="277" r="3" fill="#1A7A5E"/>
  <text x="860" y="282" font-size="12" fill="#1f2937">フロントは独自開発 ―</text>
  <text x="860" y="300" font-size="12" fill="#1f2937">ManabiyaAI等の学内知見を活用できる</text>
  <rect x="830" y="348" width="410" height="212" rx="18" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="858" cy="378" r="14" fill="#E07B39"/>
  <text x="858" y="384" font-size="16" font-weight="700" fill="#fff" text-anchor="middle">!</text>
  <text x="880" y="384" font-size="15" font-weight="700" fill="#9a5224">発注前の確認事項（SDK価格）</text>
  <text x="848" y="420" font-size="12" fill="#1f2937">① 推論（トークン）課金が込みか別建てか</text>
  <text x="848" y="450" font-size="12" fill="#1f2937">② クエリ上限・利用できるモデルの範囲</text>
  <text x="848" y="480" font-size="12" fill="#1f2937">③ “ユーザー”の定義とライセンスの数え方</text>
  <text x="848" y="510" font-size="12" fill="#1f2937">④ UI・学内SSO連携の開発費は別途必要</text>
  <text x="848" y="540" font-size="11" fill="#9a5224" font-weight="700">→ 確認のうえ役員説明の根拠資料とする</text>
  <path d="M40 620 L1210 620 L1240 651 L1210 682 L40 682 Z" fill="url(#gAccH)" filter="url(#shSoft)"/>
  <text x="630" y="658" font-size="19" font-weight="700" fill="#fff" text-anchor="middle">統合DB（年約100万円）＋ Gemini Enterprise SDK ＋ 独自フロント ＝ 年約2,300万円 ― 全員Copilot案の約1/8</text>
</svg>
