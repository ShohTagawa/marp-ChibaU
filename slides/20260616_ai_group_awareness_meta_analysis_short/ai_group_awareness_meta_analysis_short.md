---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">教室の協働学習にAIを活かす</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    --accent:#A6192E; --accent-dark:#7d1322; --accent-soft:#F8E5EA;
    --section-bg:#FAF5F6; --hdr-left-w:30%; --hdr-slant:14px;
  }
  section { font-size:26px; padding-top:66px; padding-bottom:56px; }
  section h2 { font-size:37px; margin:0 0 10px; color:var(--accent-dark); }
  section h3 { font-size:27px; }
  section .page-title { left:29%; width:37%; }
  section > header .hdr-left { padding:0 12px 0 32px; }
  section svg { max-width:100%; height:auto; }
  .important { display:inline-block; background:var(--accent-soft); color:var(--accent-dark); font-weight:700; font-size:20px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.12em; vertical-align:middle; border:1px solid #E6B8C0; }
  .cbox { border-radius:10px; overflow:hidden; background:#F5F6F7; margin:8px 0; border:1px solid #e6e7e9; }
  .cbox > .h { color:#fff; font-weight:700; font-size:23px; padding:8px 20px; }
  .cbox > .b { padding:12px 20px 14px; font-size:23px; line-height:1.6; color:var(--text); }
  .cbox > .b .red, .cbox > .b .hl { color:var(--accent); }
  .cbox > .b .hl-dark { color:var(--accent-dark); }
  .cbox.deep > .h { background:#7d1322; } .cbox.mid > .h { background:#A6192E; } .cbox.soft > .h { background:#C77E89; color:#3a0a10; } .cbox.gray > .h { background:#5B6068; } .cbox.blue > .h { background:#1A6BB0; }
  .cbox.red > .h { background:var(--accent); }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:6px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:25px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:30px; margin-top:8px; color:var(--accent-dark); }
  .red { color:var(--accent); font-weight:700; } .blu { color:#1A6BB0; font-weight:700; } .gry { color:#5B6068; font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:17px; color:#6e7378; margin-top:6px; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .dtbl { border-collapse:collapse; font-size:22px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #cdcdcd; padding:9px 16px; text-align:center; }
  .dtbl th { background:var(--accent-soft); color:var(--accent-dark); } .dtbl td.l { text-align:left; }
  .dtbl tr.hot td { background:#FCEDEF; font-weight:700; }
  .caption { font-size:21px !important; line-height:1.5; }
  .takeaway { font-size:29px; }
  section.summary .sec-box h3 { font-size:25px; } section.summary .sec-box ul { font-size:24px; }
  section.fig .fig-area { min-height:360px; }
  section.split .split-body { min-height:400px; align-items:center; }
  section.summary .sections { flex:1 1 auto; justify-content:center; }
  section.wrap ul { margin-top:auto; margin-bottom:auto; }
  section:has(.takeaway) { padding-bottom:122px !important; }
  section > .band:last-child, section > .takeaway:last-child { margin-top:auto !important; }
  section:has(.band) { padding-bottom:60px; }
---

<!-- _class: cover -->

# 教室の協働学習に<br>生成AIを活かす

## Bloom (1984) から最新メタ分析へ ── 20分で読み解く効果量

### 田川　翔
### 千葉大学 国際未来教育基幹 / アカデミック・リンク・センター

<div class="meta">2026年5月19日 / 教育学部 研究会　｜　完全版を凝縮した20分の要約版</div>

<!-- 完全版を20スライドに凝縮した要約版。効果量という1つの物差しで、協調学習とAIをつなぐ。 -->

---

<!-- _class: split -->

<div class="page-title">Bloomの2シグマ問題（1984）</div>

## 1対1指導は、集団授業を2標準偏差うわまわる

<div class="split-body">
<div class="left">

<svg viewBox="0 0 440 320" width="100%" style="max-height:330px">
  <line x1="28" y1="252" x2="424" y2="252" stroke="#5B6068" stroke-width="2"/>
  <path d="M36,252 C120,252 150,86 226,86 C302,86 332,252 416,252" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
  <line x1="226" y1="252" x2="226" y2="120" stroke="#5B6068" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="300" y1="252" x2="300" y2="150" stroke="#A6192E" stroke-width="2.2" stroke-dasharray="5 4"/>
  <line x1="372" y1="252" x2="372" y2="186" stroke="#7d1322" stroke-width="3"/>
  <g text-anchor="middle" font-weight="800">
    <text x="226" y="112" font-size="16" fill="#5B6068">50%ile</text>
    <text x="226" y="278" font-size="16" fill="#5B6068">一斉授業</text>
    <text x="300" y="142" font-size="16" fill="#A6192E">84%ile</text>
    <text x="300" y="278" font-size="16" fill="#A6192E">習得学習</text>
    <text x="372" y="178" font-size="16" fill="#7d1322">98%ile</text>
    <text x="372" y="298" font-size="16" fill="#7d1322">1対1</text>
  </g>
  <g stroke="#7d1322" stroke-width="2.5" marker-end="url(#arB)"><line x1="232" y1="64" x2="366" y2="64"/></g>
  <defs><marker id="arB" markerWidth="10" markerHeight="10" refX="7" refY="3.2" orient="auto"><path d="M0,0 L9,3.2 L0,6.4 Z" fill="#7d1322"/></marker></defs>
  <text x="300" y="54" text-anchor="middle" font-size="17" font-weight="800" fill="#7d1322">＋2σ ＝ 偏差値+20</text>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">3つの学習条件と効果量 g</div><div class="b">

- 通常の一斉授業（1対30）＝ <span class="red">基準 g = 0</span>（50%ile）
- 完全習得学習（1対30）＝ <span class="red">g ≈ 1.0</span>（84%ile）
- <span class="red">1対1チュータリング ＝ g ≈ 2.0</span>（98%ile）

</div></div>

<div class="band">この「2シグマ・ギャップ」を、集団授業で実現する方法はあるか？</div>

</div>
</div>

<div class="caption">Bloom (1984) Fig.1 &amp; Table I ── Anania (1982,1983), Burke (1984) の3条件比較</div>

<!-- Bloomは「家庭教師並みの効果を集団で出せる手法を探せ」と問題提起した。本日のテーマの出発点。 -->

---

<!-- _class: fig -->

<div class="page-title">2シグマを埋める変数</div>

## Bloom Table I ── 効果量の高い「変えられる変数」

<div class="fig-area">
<table class="dtbl" style="font-size:23px;">
<tr><th class="l">介入変数</th><th>g</th><th class="l">介入変数</th><th>g</th></tr>
<tr><td class="l">Tutorial instruction（1対1）</td><td><strong>2.00</strong></td><td class="l"><span class="red">Cooperative learning（協調学習）</span></td><td><span class="red"><strong>0.80</strong></span></td></tr>
<tr><td class="l">Reinforcement</td><td>1.20</td><td class="l">Classroom morale</td><td>0.60</td></tr>
<tr><td class="l"><span class="red">Feedback-corrective（習得）</span></td><td><span class="red"><strong>1.00</strong></span></td><td class="l">Home environment</td><td>0.50</td></tr>
<tr><td class="l">Cues / Student participation</td><td>1.00</td><td class="l">Peer tutoring</td><td>0.40</td></tr>
<tr><td class="l">Time on task</td><td>1.00</td><td class="l">Higher order questions</td><td>0.30</td></tr>
</table>
</div>

<div class="caption">Bloom (1984) Table I ── Walberg (1984) を元に再構成</div>

<div class="takeaway">協調学習はすでに g = 0.80。本日の GA × AI支援は、この延長線上にある。</div>

<!-- 「協調学習」がすでに高い効果量。これに気づき支援を加えると何が起きるか。 -->

---

<!-- _class: message -->

# 2シグマ問題は<br>生成AIで解けるか？

## グループの「気づきまとめ」をAIが担うと、効果はどう変わるか

<!-- 2025年代、AIで集団授業の効果量を押し上げる現実的シナリオを描く。 -->

---

<!-- _class: refs -->

<div class="page-title">本日の主要文献</div>

## エビデンスの出典 ── この5本で議論の99%をカバー

- **①Chen, D., Zhang, Y., Luo, H., Zhu, Z., Ma, J., &amp; Lin, Y. (2024).** Effects of group awareness support in CSCL on students' learning performance: A three-level meta-analysis. *International Journal of Computer-Supported Collaborative Learning*, 19, 97–129.
- **②Liu, J., Mbowe, A. E., Tahri, D., &amp; Aziku, M. (2026).** Meta-analysis on the influence of AI agents on K-12 student cognitive performance. *Computers in Human Behavior Reports*, 21, 100973.
- **③Bloom, B. S. (1984).** The 2 sigma problem. *Educational Researcher*, 13(6), 4–16.
- **④Cohen, J. (1992).** A power primer. *Psychological Bulletin*, 112(1), 155–159.
- **⑤Dourish, P., &amp; Bellotti, V. (1992).** Awareness and coordination in shared workspaces. *CSCW '92*, 107–114.

<!-- 5本で本日の議論の99%をカバーする。①②が2つのメタ分析、③が出発点。 -->

---

<!-- _class: summary -->

<div class="page-title">用語・略語の定義</div>

## 本日使用する略語 ── 出てきたら、ここに戻れる

<div class="sections">

<div class="sec-box">

### 学習理論・設計

- <span class="hl">CSCL</span>：Computer-Supported Collaborative Learning（コンピュータ支援協調学習）
- <span class="hl">GA</span>：Group Awareness（メンバー活動への気づき）
- <span class="hl">ZPD</span>：発達の最近接領域（Vygotsky）

</div>

<div class="sec-box">

### AI・教育技術

- <span class="hl">GenAI</span>：生成AI（ChatGPT 等）
- <span class="hl">ITS</span>：Intelligent Tutoring System（知的チュータリング）
- <span class="hl">K-12</span>：幼稚園〜高校3年（初中等教育）

</div>

<div class="sec-box">

### 統計

- <span class="hl">SMD / Hedges' g</span>：標準化平均差（効果量指標）
- <span class="hl">CI / SE / I²</span>：信頼区間／標準誤差／異質性
- <span class="hl">PRISMA</span>：系統的レビュー報告基準

</div>

</div>

<!-- 略語は出てきた時点で確認できるよう先に一覧化。 -->

---

<!-- _class: split -->

<div class="page-title">メタ分析とHedges' g</div>

## 効果量の「物差し」── g はいくつから意味があるか

<div class="split-body">
<div class="left">

<div class="cbox mid"><div class="h">Hedges' g ＝ 標準化された差</div><div class="b">

$$g = J \times \frac{\bar{X}_{実験群} - \bar{X}_{統制群}}{SD_{pooled}}$$

- 2群の差を「ばらつき何個分か」で表した値
- 単位によらず<span class="red">研究どうしを比べられる</span>

</div></div>

</div>
<div class="right">

<table class="dtbl" style="font-size:23px;">
<tr><th>g</th><th>効果</th><th class="l">本日の主要値</th></tr>
<tr><td>0.2</td><td>小</td><td class="l">—</td></tr>
<tr class="hot"><td>0.5</td><td>中</td><td class="l">研究① 0.46 / 研究② 0.404</td></tr>
<tr><td>0.8</td><td>大</td><td class="l">研究② 小学高学年 0.877</td></tr>
<tr><td>2.0</td><td>極大</td><td class="l">Bloom 1対1指導</td></tr>
</table>

<div class="band" style="font-size:23px;">g = 0.5 は偏差値+5点。両研究の全体効果は「中程度」。</div>

</div>
</div>

<div class="caption">Cohen (1992) の基準 ＋ 本研究で扱う効果量の位置づけ</div>

<!-- 教育研究では g = 0.4 でも十分に実用的な効果。 -->

---

<!-- _class: divider -->

<div class="chapter-num">研究 ①</div>

# GA支援のメタ分析

## Chen et al. (2024) ── 仲間の活動に「気づく」と学びは深まるか

---

<!-- _class: split -->

<div class="page-title">研究①の概要</div>

## Chen et al. (2024) IJCSCL ── CSCL初の三水準メタ分析

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:22px;">
<tr><th class="l">項目</th><th class="l">内容</th></tr>
<tr><td class="l">対象期間</td><td class="l">2000〜2022年</td></tr>
<tr><td class="l">検索DB</td><td class="l">WoS, ScienceDirect, Wiley, Springer, ERIC</td></tr>
<tr class="hot"><td class="l">最終採択</td><td class="l">46研究 / 96効果量 / 58独立研究</td></tr>
<tr><td class="l">統計手法</td><td class="l">三水準メタ分析（metafor, R）</td></tr>
<tr><td class="l">GA支援</td><td class="l">行動的・認知的・社会的の3タイプ</td></tr>
</table>

<div class="caption">Chen et al. (2024) ── 採択一致 Cohen's κ = 0.90</div>

</div>
<div class="right">

<div class="cbox deep"><div class="h">GA支援（Group Awareness）とは</div><div class="b">

- 「<span class="red">誰が・何を・どう感じているか</span>」をグループに<span class="red">見える化</span>する仕組み
- 本日の「<span class="red">気づきまとめ</span>」は、認知的GA ＋ 複合型に位置づく

</div></div>

<div class="band">CSCL分野で初の三水準メタ分析。効果を「効く条件」まで切り分けられる。</div>

</div>
</div>

<!-- CSCL分野で初の三水準メタ分析。効果の「効く条件」まで踏み込める。 -->

---

<!-- _class: summary -->

<div class="page-title">どんなGA支援か（具体例）</div>

## 3タイプ ── 画面に何が出て、学習者は何に気づくか

<div class="sections">

<div class="sec-box">

### 行動的GA：「誰がどれだけ貢献したか」

- **画面**：投稿数バー・発言時間メーター・編集回数
- **Janssen et al.**：投稿数を全員に可視化 → <span class="hl">行動参加 g = 0.53</span>
- **気づき**：「自分の発言が少ない」「Aさんが頑張っている」

</div>

<div class="sec-box">

### 認知的GA：「仲間が何を知っている／気づいたか」

- **画面**：事前テストのヒートマップ・気づき一覧
- **Engelmann &amp; Hesse (2010,2011)**：知識項目をマトリクス化 → <span class="hl">認知発達 g = 0.32〜0.45</span>
- **気づき**：「Bさんはここを知らない」「私が説明すべき」

</div>

<div class="sec-box">

### 社会的GA／複合型：「グループの雰囲気・信頼」

- **画面**：ピア評価レーダー・感情タグ・満足度バー
- **Phielix et al. (2010,2011)**：複合型で統合可視化 → <span class="hl">複合型全体 g = 0.65</span>
- **気づき**：「まだ温まっていない」「聴く役に回ろう」

</div>

</div>

<!-- 抽象的なGAではなく「画面に何が出るか・学習者が何に気づくか」で説明。 -->

---

<!-- _class: split -->

<div class="page-title">認知的GAはどう効くか</div>

## 「仲間の知識を知る」が、学力に変換される連鎖

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 330" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="50" y="14" width="260" height="58" rx="11" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/>
    <text x="180" y="40" font-size="18" font-weight="800" fill="#7d1322">① 気づく</text>
    <text x="180" y="62" font-size="15" fill="#5B6068">知識ギャップ・共通基盤の自覚</text>
    <text x="180" y="94" font-size="24" fill="#A6192E" font-weight="800">↓</text>
    <rect x="50" y="106" width="260" height="58" rx="11" fill="#fff" stroke="#A6192E" stroke-width="2"/>
    <text x="180" y="132" font-size="18" font-weight="800" fill="#7d1322">② 教える・学ぶ</text>
    <text x="180" y="154" font-size="15" fill="#5B6068">相互教授／認知的葛藤と統合</text>
    <text x="180" y="186" font-size="24" fill="#A6192E" font-weight="800">↓</text>
    <rect x="50" y="198" width="260" height="58" rx="11" fill="#fff" stroke="#A6192E" stroke-width="2"/>
    <text x="180" y="224" font-size="18" font-weight="800" fill="#7d1322">③ 理解が深まる</text>
    <text x="180" y="246" font-size="15" fill="#5B6068">自分の説明で自分も深化</text>
    <text x="180" y="278" font-size="24" fill="#A6192E" font-weight="800">↓</text>
    <rect x="50" y="290" width="260" height="34" rx="9" fill="#7d1322"/>
    <text x="180" y="313" font-size="18" font-weight="800" fill="#fff">成績の向上</text>
  </g>
</svg>

</div>
<div class="right">

<table class="dtbl" style="font-size:21px;">
<tr><th class="l">認知メカニズム</th><th class="l">寄与</th></tr>
<tr><td class="l">①知識ギャップの自覚</td><td class="l"><span class="red">認知的GA→発達 0.32</span></td></tr>
<tr><td class="l">②相互教授（learn by teaching）</td><td class="l"><span class="red">行動的GA→発達 0.45</span></td></tr>
<tr><td class="l">③認知的葛藤と統合</td><td class="l"><span class="red">複合型全体 0.65</span></td></tr>
<tr><td class="l">④共通基盤の形成</td><td class="l"><span class="red">認知発達全体 0.49</span></td></tr>
</table>

<div class="caption">Sangin et al. (2011), Engelmann &amp; Hesse (2010)</div>

</div>
</div>

<div class="takeaway">「気づく→教える/学ぶ→深まる」の連鎖が、成績を押し上げる。</div>

<!-- 認知的GAは知識ギャップの可視化が起点。そこから4経路で学力に変換される。 -->

---

<!-- _class: split -->

<div class="page-title">研究①の主要結果</div>

## GA支援は学習を約 0.46 SD 押し上げる ── 中程度・有意

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:23px;">
<tr><th class="l">分析</th><th>g (SE)</th><th>95%CI</th></tr>
<tr class="hot"><td class="l">全体効果量</td><td><strong>0.46</strong> (.06)</td><td>[.34, .58]</td></tr>
<tr><td class="l">認知的発達</td><td>0.49 (.08)</td><td>[.33, .65]</td></tr>
<tr><td class="l">行動的参加</td><td>0.47 (.11)</td><td>[.24, .69]</td></tr>
<tr><td class="l">社会的感情</td><td>0.38 (.07)</td><td>[.23, .53]</td></tr>
</table>

<div class="caption">Table 3 of Chen et al. (2024) ── すべて p &lt; 0.001</div>

</div>
<div class="right">

<div class="cbox mid"><div class="h">この結果が示すこと</div><div class="b">

- 3アウトカム<span class="red">いずれも有意な正の効果</span>
- とりわけ<span class="red">認知的発達 g = 0.49</span>が高い
- 「気づきまとめ」が狙う認知面は、最も効きやすい

</div></div>

<div class="band">GA支援は、偏差値で約+5点ぶんの底上げに相当する。</div>

</div>
</div>

<!-- 3アウトカムいずれも有意な正の効果。狙う認知面が一番効く。 -->

---

<!-- _class: fig -->

<div class="page-title">研究①のモデレーター</div>

## 「効く条件」の特定 ── 複合型 × 大グループ × 長期

<div class="fig-area">
<table class="dtbl" style="font-size:25px; width:88%;">
<tr><th class="l">モデレーター</th><th class="l">高効果の条件</th><th class="l">低効果の条件</th></tr>
<tr class="hot"><td class="l">GAタイプ</td><td class="l">複合型 g = 0.65</td><td class="l">単一型 g = 0.34</td></tr>
<tr class="hot"><td class="l">グループサイズ</td><td class="l">5人以上 g = 0.71</td><td class="l">2〜4人 g = 0.38</td></tr>
<tr class="hot"><td class="l">介入期間</td><td class="l">8週超 g = 0.75</td><td class="l">短〜中期 g = 0.41</td></tr>
<tr><td class="l">教育段階</td><td class="l">中等教育 g = 0.54</td><td class="l">初等教育 −0.07（1件）</td></tr>
</table>
</div>

<div class="caption">Tables 4–7 of Chen et al. (2024)</div>

<div class="takeaway">複合型 × 大グループ × 長期継続 ＝ 最大効果。設計の3つの鍵。</div>

<!-- 「気づきまとめ」を設計する上での3つの鍵。 -->

---

<!-- _class: divider -->

<div class="chapter-num">研究 ②</div>

# K-12 × AIエージェント

## Liu et al. (2026) ── 小中高で、AIは学力をどう動かすか

---

<!-- _class: split -->

<div class="page-title">研究②の概要</div>

## Liu et al. (2026) CHBR ── K-12でのAIは中程度の効果

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:22px;">
<tr><th class="l">項目</th><th class="l">内容</th></tr>
<tr><td class="l">対象期間</td><td class="l">2020〜2025年</td></tr>
<tr class="hot"><td class="l">最終採択</td><td class="l">34研究 / 73効果量 / 3,042名</td></tr>
<tr><td class="l">統計手法</td><td class="l">ランダム効果モデル（STATA 18）</td></tr>
<tr class="hot"><td class="l">全体効果量</td><td class="l"><strong>g = 0.404</strong>　[.242, .567]</td></tr>
<tr><td class="l">異質性</td><td class="l">I² = 91.2%（高い）</td></tr>
<tr><td class="l">AIタイプ</td><td class="l">会話型 / 生成AI / ロボット / ITS</td></tr>
</table>

<div class="caption">Liu et al. (2026) ── Z = 4.87, p &lt; 0.001</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">高い異質性が意味すること</div><div class="b">

- 全体は中程度（<span class="blu">g = 0.404</span>）だが、<span class="blu">I² = 91%</span>と研究間のばらつきが大きい
- ＝「効くか否か」は<span class="blu">設計しだいで大きく変わる</span>
- だから<span class="blu">モデレーター分析が決定的</span>に重要

</div></div>

<div class="band">平均だけ見ても足りない。「どこで効くか」を次ページから読む。</div>

</div>
</div>

<!-- 高異質性 = モデレーター分析が決定的に重要。 -->

---

<!-- _class: split -->

<div class="page-title">学習者レベル別の効果</div>

## 小学校高学年で最大 ── g = 0.877（全体平均の2倍）

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:23px;">
<tr><th class="l">学習者レベル</th><th>k</th><th>g</th></tr>
<tr class="hot"><td class="l">小学校高学年（4〜6年）</td><td>28</td><td><strong>0.877</strong></td></tr>
<tr><td class="l">小学校低学年（1〜3年）</td><td>8</td><td>0.237</td></tr>
<tr><td class="l">中学校（7〜9年）</td><td>17</td><td>0.195</td></tr>
<tr><td class="l">高校（10〜12年）</td><td>19</td><td>0.037 n.s.</td></tr>
</table>

<div class="caption">Table 5 of Liu et al. (2026) ── QB = 12.97, p = 0.005</div>

</div>
<div class="right">

<div class="cbox deep"><div class="h">なぜ小学校高学年か</div><div class="b">

- 具体的操作 → <span class="red">形式的操作への移行期</span>
- 足場かけが効きやすく、<span class="red">Vygotsky の ZPD</span>と整合
- <span class="red">本発表の主要ターゲット</span>層

</div></div>

<div class="band">小学高学年は全体平均の約2倍。ここに設計を寄せる価値がある。</div>

</div>
</div>

<!-- 形式的操作への移行期（Vygotsky ZPDと整合）。 -->

---

<!-- _class: fig -->

<div class="page-title">教科別・認知別の効果</div>

## 言語系で最大、自然科学では効果なし

<div class="fig-area">
<table class="dtbl" style="font-size:24px; width:90%;">
<tr><th class="l">教科</th><th>g</th><th class="l">認知カテゴリ</th><th>g</th></tr>
<tr class="hot"><td class="l">言語・リテラシー</td><td>0.830***</td><td class="l">スキルベース</td><td>0.391***</td></tr>
<tr><td class="l">芸術・創造性</td><td>0.755*</td><td class="l">知識ベース</td><td>0.344*</td></tr>
<tr><td class="l">数学・情報技術</td><td>0.230**</td><td class="l">高次思考</td><td>0.540 n.s.</td></tr>
<tr><td class="l">自然科学</td><td>−0.065 n.s.</td><td class="l">—</td><td>—</td></tr>
</table>
</div>

<div class="caption">Table 4 &amp; Table 5 of Liu et al. (2026)</div>

<div class="takeaway">国語・道徳・総合 ＋ スキル習得で最大効果。自然科学はAIと相性が悪い。</div>

<!-- 自然科学（探究・実験）はAIとの相性が悪い。 -->

---

<!-- _class: split -->

<div class="page-title">AIタイプ別の効果</div>

## 生成AIも、ITSと同等の効果（タイプ間に有意差なし）

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:23px;">
<tr><th class="l">AIタイプ</th><th>k</th><th>g</th></tr>
<tr><td class="l">ITS</td><td>10</td><td><strong>0.540</strong></td></tr>
<tr><td class="l">AIロボット</td><td>16</td><td>0.474</td></tr>
<tr><td class="l">会話型AI</td><td>30</td><td>0.468</td></tr>
<tr class="hot"><td class="l">生成AI</td><td>17</td><td><strong>0.421</strong></td></tr>
</table>

<div class="caption">Table 5 of Liu et al. (2026) ── QB = 0.069, p = 0.793</div>

</div>
<div class="right">

<div class="cbox mid"><div class="h">「ツール選び」より「使い方」</div><div class="b">

- 4タイプの差は<span class="red">統計的に有意でない</span>（p = 0.79）
- 新参の生成AIも、既存AIと<span class="red">同等の効果</span>を出す
- 決め手は機種ではなく、<span class="red">教科・学年・運用の設計</span>

</div></div>

<div class="band">生成AIは「効くツール」。問題は、どう授業に組み込むか。</div>

</div>
</div>

<!-- 「ツール選び」より「使い方」が決め手。 -->

---

<!-- _class: summary -->

<div class="page-title">研究②の代表例</div>

## 成功例と失敗例 ── どちらも「設計しだい」を示す

<div class="sections">

<div class="sec-box">

### 成功例：言語 × 継続 × 小学高学年

- **Feng &amp; Wang (2023)**：中国語/英語・24週・小学高学年85名 → <span class="hl">g = 0.76</span>
- **Chen et al. (2024)**：中国語の詩・4週・小学高学年80名 → <span class="hl">g = 1.15</span>
- **Pei et al. (2025)**：EFLライティング・高校99名 → g = 0.45

</div>

<div class="sec-box">

### 失敗例：STEM教科

- **Tong et al. (2025)**：物理 × 会話型AI・中国115名 → <span class="hl">g = −0.73</span>
- **Rücker &amp; Becker (2025)**：中学数学・ドイツ195名 → g = −0.27
- **Yang et al. (2025)**：高校プログラミング・153名 → g = −0.13

</div>

<div class="sec-box">

### 教訓

- 言語 × 小学高学年 × 継続 ＝ <span class="hl">大効果</span>
- 物理・数学・プログラミングは<span class="hl">別アプローチ</span>が必要
- 設計と教科特性の見極めが鍵

</div>

</div>

<!-- 成功も失敗も「設計次第」を示している。 -->

---

<!-- _class: fig -->

<div class="page-title">2研究の比較</div>

## 方法の異なる2つのメタ分析が、同じ方向を指す

<div class="fig-area">
<table class="dtbl" style="font-size:25px; width:88%;">
<tr><th class="l">観点</th><th class="l">研究① GA支援</th><th class="l">研究② AI</th></tr>
<tr class="hot"><td class="l">全体効果量</td><td class="l">g = 0.46</td><td class="l">g = 0.404</td></tr>
<tr><td class="l">手法</td><td class="l">三水準（R, metafor）</td><td class="l">ランダム効果（STATA）</td></tr>
<tr><td class="l">最大効果</td><td class="l">複合型×大G 0.71</td><td class="l">小学高学年 0.877</td></tr>
<tr><td class="l">長期介入</td><td class="l">&gt;8週で 0.75</td><td class="l">1〜3ヶ月で 0.39</td></tr>
<tr><td class="l">出版バイアス</td><td class="l">fail-safe N = 9,955</td><td class="l">fail-safe N = 378</td></tr>
</table>
</div>

<div class="caption">両研究とも「中程度・有意・設計依存」で一致</div>

<div class="takeaway">方法論が異なる2研究が同方向 ＝ 結論は頑健。GA × AI に勝算がある。</div>

<!-- 偶然の一致ではない。GA×AIの組合せに勝算がある。 -->

---

<!-- _class: divider -->

<div class="chapter-num">実装</div>

# エビデンスを授業設計へ

## 2研究が指す「最大効果」の組合せを、教室の45分に落とす

---

<!-- _class: split -->

<div class="page-title">教室実装のビジョン</div>

## 生成AIによる「気づきまとめ」授業

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 360" width="100%" style="max-height:360px">
  <g text-anchor="middle">
    <rect x="30" y="10" width="320" height="40" rx="9" fill="#fff" stroke="#A6192E" stroke-width="1.8"/>
    <text x="190" y="35" font-size="17" font-weight="800" fill="#7d1322">① グループワーク開始</text>
    <rect x="30" y="58" width="320" height="40" rx="9" fill="#fff" stroke="#A6192E" stroke-width="1.8"/>
    <text x="190" y="83" font-size="17" font-weight="800" fill="#7d1322">② 各自が気づきをワーク記入</text>
    <rect x="30" y="106" width="320" height="44" rx="9" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
    <text x="190" y="133" font-size="17" font-weight="800" fill="#A6192E">③ 生成AIが収集・統合</text>
    <rect x="30" y="158" width="320" height="44" rx="9" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
    <text x="190" y="185" font-size="17" font-weight="800" fill="#A6192E">④ ダッシュボードに可視化</text>
    <rect x="30" y="210" width="320" height="40" rx="9" fill="#fff" stroke="#A6192E" stroke-width="1.8"/>
    <text x="190" y="235" font-size="17" font-weight="800" fill="#7d1322">⑤ 振り返り・修正</text>
    <rect x="30" y="258" width="320" height="40" rx="9" fill="#7d1322"/>
    <text x="190" y="283" font-size="17" font-weight="800" fill="#fff">⑥ 全体共有・教師フィードバック</text>
    <text x="190" y="328" font-size="16" fill="#5B6068">想定授業フロー（45〜50分）</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">なぜこの形か（エビデンスの裏づけ）</div><div class="b">

- 行動・認知・社会の3GAを束ねる ＝ <span class="red">複合型 g = 0.65</span>
- 大グループ運用 ＝ <span class="red">g = 0.71</span>
- 小学高学年・言語系 ＝ <span class="red">g = 0.83〜0.877</span>

</div></div>

<div class="band">③④をAIが担うことで、複合型GAを現実的な手間で実装できる。</div>

</div>
</div>

<div class="takeaway">エビデンスが指す「最大効果」の条件を、すべて満たす設計。</div>

<!-- 3つの最大効果条件を全て満たすシナリオ。③④がAIの担当領域。 -->

---

<!-- _class: summary -->

<div class="page-title">デザイン原則</div>

## エビデンスに基づく6つの実装指針

<div class="sections">

<div class="sec-box">

### ① 複合型GA × ② 小学高学年・言語系から

行動・認知・社会の3情報を組合せて可視化（<span class="hl">複合型 g = 0.65</span>）。<span class="hl">国語・道徳・社会・総合</span>から開始（言語 g = 0.83／小学高学年 g = 0.877）。

</div>

<div class="sec-box">

### ③ 大グループ × ④ 長期継続

5人以上のグループで <span class="hl">g = 0.71</span>。<span class="hl">8週超で g = 0.75</span>。単発授業ではなく、学期単位での継続が鍵。

</div>

<div class="sec-box">

### ⑤ 足場かけ × ⑥ 授業設計との統合

低学年は教師の補助でダッシュボードを読み解く。<span class="hl">AIは授業計画・評価規準・教師FBと統合</span>して初めて効果を発揮。

</div>

</div>

<!-- 6原則を3つの軸に統合：誰に・どう設計・どう運用。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめと今後</div>

## まとめ ── エビデンスが示すこと

- Bloomの2シグマ問題（1対1指導 g = 2.0）が出発点
- 研究① GA支援の全体効果は <span class="hl">g = 0.46</span>（中程度）
- 研究② K-12 AIの全体効果は <span class="hl">g = 0.404</span>（中程度）
- 小学校高学年で最大効果 <span class="hl">g = 0.877</span>（言語 g = 0.830）
- 生成AI単独でも <span class="hl">g = 0.421</span>（ITS並み）
- <span class="hl">複合型GA × 大グループ × 長期 × 言語系</span>が最適解
- 今後：日本の小中での実証、生成AIによる「気づきまとめ」単独効果の測定

<!-- 適切な設計で2シグマギャップを縮めうる可能性がある。 -->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.s@faculty.gs.chiba-u.jp
