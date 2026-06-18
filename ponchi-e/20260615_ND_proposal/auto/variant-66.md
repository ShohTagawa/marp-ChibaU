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
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15315c"/><stop offset="1" stop-color="#0f223f"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1aa6a0"/><stop offset="1" stop-color="#0e6f80"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f7fa6"/><stop offset="1" stop-color="#12345e"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#12345e"/><stop offset="1" stop-color="#0e6f80"/></linearGradient>
    <radialGradient id="gGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#1aa6a0" stop-opacity="0.30"/><stop offset="1" stop-color="#1aa6a0" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0f223f" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#0f223f" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#0e6f80"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gHead)"/>
  <text x="40" y="38" font-size="25" font-weight="700" fill="#ffffff">Nexus University 構想 ― 「研究×学び」接続基盤</text>
  <rect x="1106" y="13" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="19" width="112" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#e7f3f3"/>
  <text x="40" y="80" font-size="15.5" font-weight="700" fill="#0e6f80">学内に分散する〈情報・データ・サポート・機会〉を1つの基盤で「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="32" y="104" width="300" height="316" rx="18" fill="#eef6f9"/>
  <rect x="32" y="104" width="300" height="316" rx="18" fill="none"/>
  <text x="52" y="132" font-size="14" font-weight="700" fill="#12345e">研究×学びアプリ（学生・支援者の窓口）</text>
  <rect x="92" y="146" width="180" height="256" rx="20" fill="#ffffff" filter="url(#sh)"/>
  <rect x="92" y="146" width="180" height="44" rx="20" fill="url(#gNexus)"/>
  <rect x="92" y="170" width="180" height="20" fill="url(#gNexus)"/>
  <text x="182" y="174" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">My Research Compass</text>
  <circle cx="116" cy="168" r="5" fill="#ffffff" opacity="0.7"/>
  <rect x="108" y="204" width="148" height="40" rx="9" fill="#e7f3f3"/>
  <circle cx="128" cy="224" r="11" fill="#1aa6a0"/><text x="128" y="228" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">CV</text>
  <text x="148" y="220" font-size="11" font-weight="700" fill="#12345e">CVデータベース</text>
  <text x="148" y="234" font-size="10" fill="#5a6b7a">学習・スキル・資格</text>
  <rect x="108" y="252" width="148" height="40" rx="9" fill="#e7f3f3"/>
  <circle cx="128" cy="272" r="11" fill="#1aa6a0"/><path d="M124 272 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M128 268 v8 M124 272 h8" stroke="#ffffff" stroke-width="1.4" fill="none"/>
  <text x="148" y="268" font-size="11" font-weight="700" fill="#12345e">AI伴走チャット</text>
  <text x="148" y="282" font-size="10" fill="#5a6b7a">段階別の個別支援</text>
  <rect x="108" y="300" width="148" height="40" rx="9" fill="#e7f3f3"/>
  <circle cx="128" cy="320" r="11" fill="#1aa6a0"/><path d="M124 320 l3 3 l5 -6" stroke="#ffffff" stroke-width="1.6" fill="none"/>
  <text x="148" y="316" font-size="11" font-weight="700" fill="#12345e">ニーズに届く通知</text>
  <text x="148" y="330" font-size="10" fill="#5a6b7a">必要な支援を直送</text>
  <text x="182" y="370" font-size="11" fill="#5a6b7a" text-anchor="middle">留学・ラボ・企業</text>
  <text x="182" y="386" font-size="11" fill="#5a6b7a" text-anchor="middle">マッチングへ</text>
  <circle cx="640" cy="282" r="150" fill="url(#gGlow)"/>
  <path d="M332 262 C440 262 470 282 522 282" stroke="#0e6f80" stroke-width="3" fill="none" marker-end="url(#mT)"/>
  <circle cx="640" cy="282" r="92" fill="url(#gNexus)" filter="url(#sh)"/>
  <circle cx="640" cy="282" r="92" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.25"/>
  <text x="640" y="270" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="296" font-size="13" fill="#cfeef0" text-anchor="middle">接続基盤</text>
  <text x="640" y="316" font-size="10.5" fill="#a9d8dc" text-anchor="middle">データ／AI／実践知</text>
  <g font-size="14" font-weight="700">
    <path d="M548 250 C500 200 660 150 712 142" stroke="#1aa6a0" stroke-width="3" fill="none" marker-end="url(#mT)"/>
    <path d="M732 250 C790 200 800 168 854 168" stroke="#1aa6a0" stroke-width="3" fill="none" marker-end="url(#mT)"/>
    <path d="M732 314 C790 360 800 392 854 392" stroke="#1aa6a0" stroke-width="3" fill="none" marker-end="url(#mT)"/>
    <path d="M548 314 C500 364 660 414 712 422" stroke="#1aa6a0" stroke-width="3" fill="none" marker-end="url(#mT)"/>
  </g>
  <g>
    <rect x="372" y="108" width="248" height="58" rx="12" fill="#fbf0e8"/>
    <text x="386" y="128" font-size="11" font-weight="700" fill="#c4632a">課題A ― 教員の業務負荷が急増</text>
    <text x="386" y="146" font-size="10.5" fill="#5a6b7a">院生の多様化・申請/評価/添削・全員留学で限界</text>
    <text x="386" y="160" font-size="10" fill="#8a98a6">＝指導に手が回らない</text>
  </g>
  <g>
    <rect x="712" y="108" width="262" height="68" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="712" y="108" width="6" height="68" rx="3" fill="#1aa6a0"/>
    <circle cx="740" cy="134" r="13" fill="#e7f3f3"/><path d="M734 134 h12 M740 128 v12" stroke="#0e6f80" stroke-width="2"/>
    <text x="762" y="130" font-size="13" font-weight="700" fill="#12345e">打ち手A：研究時間を確保</text>
    <text x="762" y="148" font-size="10.5" fill="#5a6b7a">AI多言語支援・ラボ共通支援・</text>
    <text x="762" y="162" font-size="10.5" fill="#5a6b7a">支援者接続で指導負担を軽減</text>
  </g>
  <g>
    <rect x="372" y="394" width="248" height="58" rx="12" fill="#fbf0e8"/>
    <text x="386" y="414" font-size="11" font-weight="700" fill="#c4632a">課題C ― 大学→個人のミッシングリンク</text>
    <text x="386" y="432" font-size="10.5" fill="#5a6b7a">支援が乱立・重複・分散し届かない</text>
    <text x="386" y="446" font-size="10" fill="#8a98a6">＝必要な人に支援が届かない</text>
  </g>
  <g>
    <rect x="712" y="386" width="262" height="68" rx="12" fill="#ffffff" filter="url(#shSoft)"/>
    <rect x="712" y="386" width="6" height="68" rx="3" fill="#1aa6a0"/>
    <circle cx="740" cy="412" r="13" fill="#e7f3f3"/><path d="M734 412 l4 4 l6 -8" stroke="#0e6f80" stroke-width="2" fill="none"/>
    <text x="762" y="408" font-size="13" font-weight="700" fill="#12345e">打ち手C：個別最適を直送</text>
    <text x="762" y="426" font-size="10.5" fill="#5a6b7a">学生入力ニーズ×全学支援情報を</text>
    <text x="762" y="440" font-size="10.5" fill="#5a6b7a">突合し、必要な個人へダイレクト投下</text>
  </g>
  <rect x="990" y="104" width="258" height="172" rx="16" fill="#eef6f9"/>
  <text x="1008" y="130" font-size="13" font-weight="700" fill="#12345e">打ち手B：院生の研究力を向上</text>
  <text x="1008" y="150" font-size="10.5" fill="#5a6b7a">CVデータベース＋AI伴走の段階別個別</text>
  <text x="1008" y="165" font-size="10.5" fill="#5a6b7a">支援。留学・ラボ・企業マッチングまで</text>
  <rect x="1008" y="176" width="222" height="42" rx="10" fill="#fbf0e8"/>
  <text x="1022" y="196" font-size="11" font-weight="700" fill="#c4632a">課題B：育成の多様化・高度化</text>
  <text x="1022" y="211" font-size="10" fill="#8a98a6">求める水準上昇／資源の最適投下が必須</text>
  <rect x="1008" y="226" width="222" height="40" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="1030" cy="246" r="12" fill="#1aa6a0"/><path d="M1030 240 v12 M1024 246 h12" stroke="#ffffff" stroke-width="1.6"/>
  <text x="1050" y="243" font-size="10.5" font-weight="700" fill="#12345e">個別能力育成 × 最適投下</text>
  <text x="1050" y="258" font-size="10" fill="#5a6b7a">成功モデルの多様化に対応</text>
  <rect x="990" y="288" width="258" height="166" rx="16" fill="#eef6f9"/>
  <text x="1008" y="314" font-size="13" font-weight="700" fill="#12345e">打ち手D：支援者の労力を削減</text>
  <text x="1008" y="334" font-size="10.5" fill="#5a6b7a">データを基盤上で接続しAIで分析。反復・</text>
  <text x="1008" y="349" font-size="10.5" fill="#5a6b7a">窓口業務をRAGで省力化</text>
  <rect x="1008" y="360" width="222" height="40" rx="10" fill="#fbf0e8"/>
  <text x="1022" y="378" font-size="11" font-weight="700" fill="#c4632a">課題D：実践知が共有されない</text>
  <text x="1022" y="392" font-size="10" fill="#8a98a6">システム乱立・データ分散・異動でゼロに</text>
  <rect x="1008" y="408" width="222" height="36" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="1030" cy="426" r="12" fill="#1aa6a0"/><path d="M1024 426 a6 6 0 1 1 12 0" stroke="#ffffff" stroke-width="1.6" fill="none"/>
  <text x="1050" y="423" font-size="10.5" font-weight="700" fill="#12345e">IR・成果・回答を自動統合分析</text>
  <text x="1050" y="438" font-size="10" fill="#5a6b7a">許諾済データを共同研究・経営に活用</text>
  <path d="M854 168 C880 168 970 178 990 184" stroke="#cdd9e0" stroke-width="1.3" fill="none"/>
  <path d="M854 392 C880 392 970 380 990 374" stroke="#cdd9e0" stroke-width="1.3" fill="none"/>
  <rect x="32" y="470" width="1216" height="64" rx="14" fill="#eef6f9"/>
  <text x="52" y="492" font-size="13" font-weight="700" fill="#12345e">想定KPI（試算）</text>
  <text x="52" y="510" font-size="10.5" fill="#8a98a6">接続が進むほど成果が連鎖的に伸びる見込み</text>
  <g text-anchor="middle">
    <rect x="232" y="478" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="276" y="510" font-size="26" font-weight="700" fill="#0e6f80">+3h</text>
    <text x="380" y="498" font-size="11" font-weight="700" fill="#12345e">教員の研究時間/週</text>
    <text x="380" y="514" font-size="10" fill="#8a98a6">想定/試算</text>
    <rect x="480" y="478" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="524" y="510" font-size="26" font-weight="700" fill="#0e6f80">-50%</text>
    <text x="630" y="498" font-size="11" font-weight="700" fill="#12345e">定型問い合わせ</text>
    <text x="630" y="514" font-size="10" fill="#8a98a6">想定/試算</text>
    <rect x="728" y="478" width="232" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="772" y="510" font-size="26" font-weight="700" fill="#0e6f80">+20pt</text>
    <text x="876" y="498" font-size="11" font-weight="700" fill="#12345e">院生の研究力</text>
    <text x="876" y="514" font-size="10" fill="#8a98a6">想定/試算</text>
    <rect x="976" y="478" width="252" height="48" rx="10" fill="#ffffff" filter="url(#shSoft)"/>
    <text x="1022" y="510" font-size="26" font-weight="700" fill="#0e6f80">+5pt</text>
    <text x="1130" y="498" font-size="11" font-weight="700" fill="#12345e">修了率（中退率↓）</text>
    <text x="1130" y="514" font-size="10" fill="#8a98a6">想定/試算</text>
  </g>
  <path d="M32 548 L1206 548 L1248 588 L1206 628 L32 628 Z" fill="url(#gGoal)"/>
  <text x="56" y="582" font-size="16" font-weight="700" fill="#ffffff">GOAL</text>
  <g font-size="11.5" fill="#dff1f2">
    <circle cx="172" cy="572" r="4" fill="#7fe3d8"/><text x="184" y="576">教員の手間↓・研究時間↑</text>
    <circle cx="392" cy="572" r="4" fill="#7fe3d8"/><text x="404" y="576">院生の研究力・修了率↑</text>
    <circle cx="612" cy="572" r="4" fill="#7fe3d8"/><text x="624" y="576">支援が必要な個人へ直送</text>
    <circle cx="172" cy="600" r="4" fill="#7fe3d8"/><text x="184" y="604">支援者の実践知を蓄積・再利用</text>
    <circle cx="448" cy="600" r="4" fill="#7fe3d8"/><text x="460" y="604">統合分析で経営判断を迅速化</text>
    <circle cx="724" cy="600" r="4" fill="#7fe3d8"/><text x="736" y="604">許諾済データの共同研究・外販</text>
  </g>
  <text x="612" y="660" font-size="12.5" fill="#6b7c8a" text-anchor="middle">分散した資源を Nexus が接続 → 研究者と支援者が躍動し、千葉大学全体の成果が連鎖的に伸びる</text>
</svg>

<!-- パターン：ハブ&スポーク（airy / navy+teal）。中央 Nexus 接続基盤に左のアプリ(モックアップ)と周囲のA-D課題↔打ち手(1:1)を曲線で合流。下段に想定KPI帯(全て"想定/試算"明示)＋GOALバースト。 -->
