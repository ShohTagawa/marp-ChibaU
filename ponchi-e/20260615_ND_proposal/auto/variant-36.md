---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#16624b"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <pattern id="blue" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 L0 32" fill="none" stroke="#1f8f6e" stroke-width="0.6" opacity="0.16"/></pattern>
    <pattern id="blueFine" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M8 0 L0 0 L0 8" fill="none" stroke="#1f8f6e" stroke-width="0.4" opacity="0.07"/></pattern>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.16"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.10"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <rect x="0" y="98" width="1280" height="540" fill="url(#blueFine)"/>
  <rect x="0" y="98" width="1280" height="540" fill="url(#blue)"/>
  <line x1="40" y1="112" x2="40" y2="624" stroke="#1f8f6e" stroke-width="0.8" opacity="0.30"/>
  <path d="M37 116 L40 110 L43 116" fill="none" stroke="#1f8f6e" stroke-width="0.8" opacity="0.30"/>
  <path d="M37 620 L40 626 L43 620" fill="none" stroke="#1f8f6e" stroke-width="0.8" opacity="0.30"/>
  <text x="30" y="372" font-size="10" fill="#5b8f7e" text-anchor="middle" transform="rotate(-90 30 372)" opacity="0.6">DESIGN SPEC ― A–D 1:1</text>
  <line x1="48" y1="640" x2="1232" y2="640" stroke="#1f8f6e" stroke-width="0.8" opacity="0.28"/>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gAccH)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="12" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="18" width="112" height="22"/>
  <rect x="0" y="58" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="80" font-size="14.5" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="108" width="380" height="26" rx="7" fill="#FBEDE2"/>
  <text x="56" y="126" font-size="13" font-weight="700" fill="#c4632a">BEFORE ― 課題</text>
  <rect x="436" y="108" width="120" height="26" rx="7" fill="#E4F2EC"/>
  <text x="496" y="126" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">AI 変換</text>
  <rect x="572" y="108" width="380" height="26" rx="7" fill="#E4F2EC"/>
  <text x="588" y="126" font-size="13" font-weight="700" fill="#16624b">AFTER ― 打ち手</text>
  <rect x="40" y="142" width="380" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="68" cy="168" r="13" fill="#ffffff"/>
  <text x="68" y="173" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="90" y="173" font-size="13.5" font-weight="700" fill="#9a4a1e">教員の業務負荷が急増</text>
  <text x="58" y="198" font-size="11" fill="#7a5a45">院生の多様化（社会人・留学生・他分野）</text>
  <text x="58" y="216" font-size="11" fill="#7a5a45">研究費申請・評価資料・学振添削・全員留学で限界</text>
  <circle cx="496" cy="192" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="496" y="197" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M460 192 L450 192 M522 186 L536 192 L522 198" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="572" y="142" width="380" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="572" y="142" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="594" y="173" font-size="13.5" font-weight="700" fill="#16624b">指導負担を軽減し研究時間を確保</text>
  <text x="594" y="198" font-size="11" fill="#3c5b50">AI多言語支援・ラボ共通支援・支援者への接続で</text>
  <text x="594" y="216" font-size="11" fill="#3c5b50">教員は研究そのものに時間を回せる</text>
  <rect x="40" y="252" width="380" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="68" cy="278" r="13" fill="#ffffff"/>
  <text x="68" y="283" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="90" y="283" font-size="13.5" font-weight="700" fill="#9a4a1e">研究人材の育成が多様化・高度化</text>
  <text x="58" y="308" font-size="11" fill="#7a5a45">成功モデルが多様化し、求める水準も上昇</text>
  <text x="58" y="326" font-size="11" fill="#7a5a45">個別の能力育成と資源の最適投下が必須に</text>
  <circle cx="496" cy="302" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="496" y="307" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M460 302 L450 302 M522 296 L536 302 L522 308" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="572" y="252" width="380" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="572" y="252" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="594" y="283" font-size="13.5" font-weight="700" fill="#16624b">院生一人ひとりの研究力を向上</text>
  <text x="594" y="308" font-size="11" fill="#3c5b50">CVデータベース＋AI伴走で段階別に個別支援</text>
  <text x="594" y="326" font-size="11" fill="#3c5b50">留学・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="362" width="380" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="68" cy="388" r="13" fill="#ffffff"/>
  <text x="68" y="393" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="90" y="393" font-size="13.5" font-weight="700" fill="#9a4a1e">大学→個人のミッシングリンク</text>
  <text x="58" y="418" font-size="11" fill="#7a5a45">支援が乱立・重複・分散している</text>
  <text x="58" y="436" font-size="11" fill="#7a5a45">真に必要とする個人へ届かない</text>
  <circle cx="496" cy="412" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="496" y="417" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M460 412 L450 412 M522 406 L536 412 L522 418" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="572" y="362" width="380" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="572" y="362" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="594" y="393" font-size="13.5" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="594" y="418" font-size="11" fill="#3c5b50">①学生入力ニーズ ＋ ②全学の支援情報を突合し</text>
  <text x="594" y="436" font-size="11" fill="#3c5b50">必要とする個人へダイレクトに投下</text>
  <rect x="40" y="472" width="380" height="100" rx="11" fill="#FBEDE2" filter="url(#shSoft)"/>
  <circle cx="68" cy="498" r="13" fill="#ffffff"/>
  <text x="68" y="503" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="90" y="503" font-size="13.5" font-weight="700" fill="#9a4a1e">支援者の実践知が活用されない</text>
  <text x="58" y="528" font-size="11" fill="#7a5a45">同じ手続き・問い合わせの反復</text>
  <text x="58" y="546" font-size="11" fill="#7a5a45">システム乱立・データ分散・異動でゼロリセット</text>
  <circle cx="496" cy="522" r="19" fill="url(#gAcc)" filter="url(#sh)"/>
  <text x="496" y="527" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M460 522 L450 522 M522 516 L536 522 L522 528" stroke="#1A7A5E" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="572" y="472" width="380" height="100" rx="11" fill="#F2FBF8" filter="url(#shSoft)"/>
  <rect x="572" y="472" width="6" height="100" rx="3" fill="url(#gAccH)"/>
  <text x="594" y="503" font-size="13.5" font-weight="700" fill="#16624b">支援者の労力を削減・効率化</text>
  <text x="594" y="528" font-size="11" fill="#3c5b50">データを基盤上で接続しAIで分析・RAGで省力化</text>
  <text x="594" y="546" font-size="11" fill="#3c5b50">IR・成果・回答を自動収集し統合分析</text>
  <rect x="980" y="142" width="260" height="430" rx="16" fill="#0f4a39" filter="url(#sh)"/>
  <rect x="994" y="160" width="232" height="394" rx="8" fill="#F2FBF8"/>
  <rect x="994" y="160" width="232" height="40" rx="8" fill="url(#gAcc)"/>
  <text x="1110" y="185" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus App</text>
  <text x="1010" y="226" font-size="11.5" font-weight="700" fill="#16624b">あなたへの今日の機会</text>
  <rect x="1010" y="236" width="200" height="48" rx="8" fill="#ffffff" stroke="#cfe6dd" stroke-width="1"/>
  <circle cx="1030" cy="260" r="11" fill="url(#gAcc)"/>
  <text x="1030" y="264" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="1048" y="256" font-size="10.5" font-weight="700" fill="#1f2937">国際共同研究ラボ募集</text>
  <text x="1048" y="272" font-size="9.5" fill="#6b7280">CVと適合度92% ・締切6/20</text>
  <rect x="1010" y="292" width="200" height="48" rx="8" fill="#ffffff" stroke="#cfe6dd" stroke-width="1"/>
  <circle cx="1030" cy="316" r="11" fill="url(#gAcc)"/>
  <text x="1030" y="320" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="1048" y="312" font-size="10.5" font-weight="700" fill="#1f2937">学振添削サポート受付</text>
  <text x="1048" y="328" font-size="9.5" fill="#6b7280">あなた向けに自動マッチ</text>
  <rect x="1010" y="348" width="200" height="48" rx="8" fill="#ffffff" stroke="#cfe6dd" stroke-width="1"/>
  <circle cx="1030" cy="372" r="11" fill="url(#gWarn)"/>
  <text x="1030" y="376" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="1048" y="368" font-size="10.5" font-weight="700" fill="#1f2937">多言語ラボ支援チャット</text>
  <text x="1048" y="384" font-size="9.5" fill="#6b7280">24時間・AI伴走</text>
  <rect x="1010" y="408" width="200" height="60" rx="8" fill="#E4F2EC"/>
  <text x="1110" y="430" font-size="10.5" font-weight="700" fill="#16624b" text-anchor="middle">AI伴走チャット</text>
  <rect x="1018" y="440" width="120" height="18" rx="9" fill="#ffffff"/>
  <text x="1024" y="453" font-size="9" fill="#6b7280">次の一手を提案して…</text>
  <rect x="1146" y="440" width="56" height="18" rx="9" fill="url(#gAcc)"/>
  <text x="1174" y="453" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">送信</text>
  <text x="1010" y="492" font-size="9.5" fill="#8a8a8a">大学→個人へ「必要な機会」を</text>
  <text x="1010" y="507" font-size="9.5" fill="#8a8a8a">ダイレクトに投下するUI</text>
  <rect x="1010" y="520" width="200" height="22" rx="7" fill="#FBEDE2"/>
  <text x="1110" y="535" font-size="10" font-weight="700" fill="#c4632a" text-anchor="middle">A–D を一画面に集約</text>
  <rect x="40" y="582" width="912" height="44" rx="10" fill="#ffffff" stroke="#cfe6dd" stroke-width="1" filter="url(#shSoft)"/>
  <rect x="40" y="582" width="150" height="44" rx="10" fill="url(#gWarn)"/>
  <text x="115" y="601" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI（試算）</text>
  <text x="115" y="617" font-size="9.5" fill="#ffffff" text-anchor="middle">中期目標イメージ</text>
  <text x="262" y="601" font-size="20" font-weight="700" fill="#16624b" text-anchor="middle">+3h</text>
  <text x="262" y="618" font-size="9.5" fill="#6b7280" text-anchor="middle">教員の研究時間/週</text>
  <line x1="338" y1="592" x2="338" y2="616" stroke="#e0ede8" stroke-width="1"/>
  <text x="420" y="601" font-size="20" font-weight="700" fill="#16624b" text-anchor="middle">−50%</text>
  <text x="420" y="618" font-size="9.5" fill="#6b7280" text-anchor="middle">定型問い合わせ</text>
  <line x1="500" y1="592" x2="500" y2="616" stroke="#e0ede8" stroke-width="1"/>
  <text x="586" y="601" font-size="20" font-weight="700" fill="#16624b" text-anchor="middle">+20pt</text>
  <text x="586" y="618" font-size="9.5" fill="#6b7280" text-anchor="middle">院生の研究力</text>
  <line x1="668" y1="592" x2="668" y2="616" stroke="#e0ede8" stroke-width="1"/>
  <text x="758" y="601" font-size="20" font-weight="700" fill="#16624b" text-anchor="middle">+5pt</text>
  <text x="758" y="618" font-size="9.5" fill="#6b7280" text-anchor="middle">修了率（中退率↓）</text>
  <line x1="844" y1="592" x2="844" y2="616" stroke="#e0ede8" stroke-width="1"/>
  <text x="898" y="601" font-size="10" fill="#9a4a1e" text-anchor="middle">数値は</text>
  <text x="898" y="617" font-size="10" font-weight="700" fill="#c4632a" text-anchor="middle">想定/試算</text>
  <path d="M40 640 L1206 640 L1240 676 L1206 712 L40 712 Z" fill="url(#gGoal)"/>
  <text x="64" y="668" font-size="13" font-weight="700" fill="#ffd9a0">GOAL</text>
  <text x="64" y="690" font-size="11" font-weight="700" fill="#ffffff">A–D を1対1で解決</text>
  <circle cx="300" cy="676" r="3.5" fill="#ffd9a0"/>
  <text x="316" y="680" font-size="12" font-weight="700" fill="#ffffff">研究時間を取り戻す</text>
  <circle cx="500" cy="676" r="3.5" fill="#ffd9a0"/>
  <text x="516" y="680" font-size="12" font-weight="700" fill="#ffffff">人材育成を個別最適化</text>
  <circle cx="730" cy="676" r="3.5" fill="#ffd9a0"/>
  <text x="746" y="680" font-size="12" font-weight="700" fill="#ffffff">機会を個人へ直送</text>
  <circle cx="930" cy="676" r="3.5" fill="#ffd9a0"/>
  <text x="946" y="680" font-size="12" font-weight="700" fill="#ffffff">支援知を蓄積・再利用</text>
  <text x="623" y="700" font-size="10" fill="#bfe3d6">許諾済データの共有・利活用／統合分析で経営判断を迅速化／アプリ外販も視野</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-36 ― Before→Afterレシピ強化版。骨格=Before→After対応表(A-D 1:1)／0層=ブループリント方眼+寸法線で設計図トーン／配色=teal中心3色制限／密度=airy。追加要素：appMockup(右Nexus App画面)・kpiBand(想定KPI帯/試算明示)・goalBurst(GOALバースト4成果)。 -->
