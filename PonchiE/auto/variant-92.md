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
    <linearGradient id="gNavH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#14324f"/><stop offset="1" stop-color="#0c2238"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#15a6a0"/><stop offset="1" stop-color="#0e6f78"/></linearGradient>
    <linearGradient id="gTealH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#17b0a8"/><stop offset="1" stop-color="#0d6b73"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0e6f78"/><stop offset="1" stop-color="#14324f"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#17b0a8" stop-opacity="0.45"/><stop offset="1" stop-color="#17b0a8" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0c2238" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0c2238" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gNavH)"/>
  <text x="40" y="38" font-size="23" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="58" width="1280" height="34" fill="#e3f2f1"/>
  <text x="40" y="81" font-size="15" font-weight="700" fill="#0e6f78">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="40" y="102" width="372" height="26" rx="7" fill="#eef0f3"/>
  <text x="56" y="120" font-size="13" font-weight="700" fill="#14324f">BEFORE ― 大学が抱える課題</text>
  <rect x="424" y="102" width="120" height="26" rx="7" fill="#0e6f78"/>
  <text x="484" y="120" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">AI 変換</text>
  <rect x="556" y="102" width="684" height="26" rx="7" fill="#e3f2f1"/>
  <text x="572" y="120" font-size="13" font-weight="700" fill="#0e6f78">AFTER ― AI×接続基盤で変わること（A–D を1対1で解決）</text>
  <rect x="40" y="136" width="372" height="50" rx="9" fill="#eef0f3" filter="url(#shSoft)"/>
  <rect x="40" y="136" width="5" height="50" rx="2.5" fill="#14324f"/>
  <circle cx="66" cy="161" r="11" fill="#14324f"/>
  <text x="66" y="166" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">A</text>
  <text x="86" y="155" font-size="12.5" font-weight="700" fill="#14324f">教員の業務負荷が急増</text>
  <text x="86" y="176" font-size="10.5" fill="#56616e">院生の多様化・研究費申請・評価資料・学振添削・全員留学で限界</text>
  <circle cx="490" cy="161" r="17" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="490" y="166" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 161 L450 161 M513 156 L525 161 L513 166" stroke="#0e6f78" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="556" y="136" width="684" height="50" rx="9" fill="#f1faf9" filter="url(#shSoft)"/>
  <rect x="556" y="136" width="5" height="50" rx="2.5" fill="url(#gTealH)"/>
  <text x="576" y="155" font-size="12.5" font-weight="700" fill="#0e6f78">指導負担を軽減し、研究時間を確保</text>
  <text x="576" y="176" font-size="10.5" fill="#37565a">AIの多言語支援・ラボへの共通支援・支援者への接続で、研究そのものに時間を回せる</text>
  <rect x="40" y="190" width="372" height="50" rx="9" fill="#eef0f3" filter="url(#shSoft)"/>
  <rect x="40" y="190" width="5" height="50" rx="2.5" fill="#14324f"/>
  <circle cx="66" cy="215" r="11" fill="#14324f"/>
  <text x="66" y="220" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">B</text>
  <text x="86" y="209" font-size="12.5" font-weight="700" fill="#14324f">研究人材の育成が多様化・高度化</text>
  <text x="86" y="230" font-size="10.5" fill="#56616e">成功モデルが多様化し求める水準も上昇。個別の能力育成と資源最適投下が必須</text>
  <circle cx="490" cy="215" r="17" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="490" y="220" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 215 L450 215 M513 210 L525 215 L513 220" stroke="#0e6f78" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="556" y="190" width="684" height="50" rx="9" fill="#f1faf9" filter="url(#shSoft)"/>
  <rect x="556" y="190" width="5" height="50" rx="2.5" fill="url(#gTealH)"/>
  <text x="576" y="209" font-size="12.5" font-weight="700" fill="#0e6f78">院生一人ひとりの研究力を向上</text>
  <text x="576" y="230" font-size="10.5" fill="#37565a">CVデータベース＋AI伴走で段階別に個別支援、留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="244" width="372" height="50" rx="9" fill="#eef0f3" filter="url(#shSoft)"/>
  <rect x="40" y="244" width="5" height="50" rx="2.5" fill="#14324f"/>
  <circle cx="66" cy="269" r="11" fill="#14324f"/>
  <text x="66" y="274" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
  <text x="86" y="263" font-size="12.5" font-weight="700" fill="#14324f">大学→個人のミッシングリンク</text>
  <text x="86" y="284" font-size="10.5" fill="#56616e">学内のサポートが乱立・重複・分散し、真に必要とする個人へ届かない</text>
  <circle cx="490" cy="269" r="17" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="490" y="274" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 269 L450 269 M513 264 L525 269 L513 274" stroke="#0e6f78" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="556" y="244" width="684" height="50" rx="9" fill="#f1faf9" filter="url(#shSoft)"/>
  <rect x="556" y="244" width="5" height="50" rx="2.5" fill="url(#gTealH)"/>
  <text x="576" y="263" font-size="12.5" font-weight="700" fill="#0e6f78">個別最適な情報・支援を直に届ける</text>
  <text x="576" y="284" font-size="10.5" fill="#37565a">①学生が入力したニーズ ＋ ②全学の支援情報 を突合し、必要な個人へダイレクトに投下</text>
  <rect x="40" y="298" width="372" height="50" rx="9" fill="#eef0f3" filter="url(#shSoft)"/>
  <rect x="40" y="298" width="5" height="50" rx="2.5" fill="#14324f"/>
  <circle cx="66" cy="323" r="11" fill="#14324f"/>
  <text x="66" y="328" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
  <text x="86" y="317" font-size="12.5" font-weight="700" fill="#14324f">支援者の実践知が活用されない</text>
  <text x="86" y="338" font-size="10.5" fill="#56616e">同じ手続きの反復・システム乱立・データ分散・異動でゼロリセット</text>
  <circle cx="490" cy="323" r="17" fill="url(#gTeal)" filter="url(#sh)"/>
  <text x="490" y="328" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">AI</text>
  <path d="M455 323 L450 323 M513 318 L525 323 L513 328" stroke="#0e6f78" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="556" y="298" width="684" height="50" rx="9" fill="#f1faf9" filter="url(#shSoft)"/>
  <rect x="556" y="298" width="5" height="50" rx="2.5" fill="url(#gTealH)"/>
  <text x="576" y="317" font-size="12.5" font-weight="700" fill="#0e6f78">支援者の労力を削減し、業務を効率化</text>
  <text x="576" y="338" font-size="10.5" fill="#37565a">データを基盤上で接続しAIで分析、反復・窓口業務をRAGで省力化、成果を自動収集・統合分析</text>
  <rect x="40" y="360" width="1200" height="74" rx="10" fill="#f6f8fa" filter="url(#shSoft)"/>
  <rect x="40" y="360" width="180" height="74" rx="10" fill="url(#gNavH)"/>
  <text x="130" y="392" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">受益者の</text>
  <text x="130" y="411" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">ニーズ→導入後</text>
  <circle cx="262" cy="386" r="13" fill="#e3f2f1"/>
  <text x="262" y="391" font-size="13" font-weight="700" fill="#0e6f78" text-anchor="middle">学</text>
  <text x="284" y="383" font-size="11.5" font-weight="700" fill="#14324f">学生</text>
  <text x="284" y="402" font-size="10" fill="#56616e">機会が届かない</text>
  <text x="284" y="418" font-size="10" fill="#0e6f78">→ 個別最適に直届</text>
  <circle cx="510" cy="386" r="13" fill="#e3f2f1"/>
  <text x="510" y="391" font-size="13" font-weight="700" fill="#0e6f78" text-anchor="middle">教</text>
  <text x="532" y="383" font-size="11.5" font-weight="700" fill="#14324f">教員</text>
  <text x="532" y="402" font-size="10" fill="#56616e">指導・事務に忙殺</text>
  <text x="532" y="418" font-size="10" fill="#0e6f78">→ 研究時間を確保</text>
  <circle cx="760" cy="386" r="13" fill="#e3f2f1"/>
  <text x="760" y="391" font-size="13" font-weight="700" fill="#0e6f78" text-anchor="middle">職</text>
  <text x="782" y="383" font-size="11.5" font-weight="700" fill="#14324f">職員</text>
  <text x="782" y="402" font-size="10" fill="#56616e">反復・分散で疲弊</text>
  <text x="782" y="418" font-size="10" fill="#0e6f78">→ 実践知を蓄積活用</text>
  <circle cx="1010" cy="386" r="13" fill="#e3f2f1"/>
  <text x="1010" y="391" font-size="13" font-weight="700" fill="#0e6f78" text-anchor="middle">大</text>
  <text x="1032" y="383" font-size="11.5" font-weight="700" fill="#14324f">大学</text>
  <text x="1032" y="402" font-size="10" fill="#56616e">判断が遅い・分散</text>
  <text x="1032" y="418" font-size="10" fill="#0e6f78">→ 統合分析で迅速化</text>
  <rect x="40" y="444" width="1200" height="66" rx="10" fill="url(#gNavH)" filter="url(#sh)"/>
  <text x="62" y="473" font-size="13" font-weight="700" fill="#7fe3da">想定KPI</text>
  <text x="62" y="492" font-size="10" fill="#bcd0db">（試算・目標値）</text>
  <text x="270" y="478" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">+3h</text>
  <text x="270" y="498" font-size="10" fill="#bcd0db" text-anchor="middle">教員の研究時間／週</text>
  <text x="520" y="478" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">−50%</text>
  <text x="520" y="498" font-size="10" fill="#bcd0db" text-anchor="middle">定型問い合わせ</text>
  <text x="770" y="478" font-size="30" font-weight="700" fill="#7fe3da" text-anchor="middle">+20pt</text>
  <text x="770" y="498" font-size="10" fill="#bcd0db" text-anchor="middle">院生の研究力</text>
  <text x="1020" y="478" font-size="30" font-weight="700" fill="#7fe3da" text-anchor="middle">+5pt</text>
  <text x="1020" y="498" font-size="10" fill="#bcd0db" text-anchor="middle">修了率（中退率↓）</text>
  <line x1="395" y1="458" x2="395" y2="496" stroke="#34536b" stroke-width="1"/>
  <line x1="645" y1="458" x2="645" y2="496" stroke="#34536b" stroke-width="1"/>
  <line x1="895" y1="458" x2="895" y2="496" stroke="#34536b" stroke-width="1"/>
  <text x="40" y="528" font-size="10.5" fill="#7a8694">副次：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <ellipse cx="640" cy="676" rx="430" ry="60" fill="url(#gBurst)"/>
  <path d="M640 540 L668 568 L708 562 L700 602 L734 626 L696 640 L700 680 L668 660 L640 690 L612 660 L580 680 L584 640 L546 626 L580 602 L572 562 L612 568 Z" fill="url(#gTealH)" opacity="0.16"/>
  <path d="M120 624 L1146 624 L1180 654 L1146 684 L120 684 Z" fill="url(#gGoal)"/>
  <text x="630" y="662" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">研究×学びがつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-92: Before→After対応表（navy+teal寒色クール / packed）。左=課題A-D・中央=AI変換・右=打ち手A-D を1対1。kpiBand/beneficiaryRow/goalBurst入り。KPIは想定/試算明示。 -->
