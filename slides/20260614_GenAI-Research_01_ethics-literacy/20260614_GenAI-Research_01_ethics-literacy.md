---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×研究</div><img class="hdr-logo" src="./src/research-genai-logo.svg" alt="研究における生成AIの活用法">'
footer: ''
style: |
  :root { --accent:#A33818; --accent-dark:#832D18; --accent-soft:#FBE7D6; --section-bg:#FBF4EF; --hdr-left-w:19%; }
  /* ヘッダー帯：左帯とページタイトル帯の幅を調整（崩れ防止） */
  section .page-title { left:17%; width:36%; }
  section.cover-hero { --hdr-left-w:19%; }
  h2 { color: var(--accent-dark); }
  section svg { max-width:100%; height:auto; }
  /* ---- components (deck-local) ---- */
  .important { display:inline-block; background:#FBE7D6; color:#832D18; font-weight:700; font-size:20px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.12em; vertical-align:middle; border:1px solid #E6C4A8; }
  .cbox { border-radius:10px; overflow:hidden; background:#F5F6F7; margin:8px 0; border:1px solid #e6e7e9; }
  .cbox > .h { color:#fff; font-weight:700; font-size:23px; padding:8px 20px; }
  .cbox > .b { padding:12px 20px 14px; font-size:23px; line-height:1.6; color:var(--text); }
  /* cbox本文は常に黒（箱に red 等が付いても全文が赤くならない）。インライン強調だけ色を残す */
  .cbox > .b .red, .cbox > .b .hl { color:var(--accent); }
  .cbox > .b .hl-dark { color:var(--accent-dark); }
  .cbox.deep > .h { background:#832D18; } .cbox.mid > .h { background:#A33818; } .cbox.soft > .h { background:#E08A4F; color:#3a1d0a; } .cbox.gray > .h { background:#5B6068; } .cbox.blue > .h { background:#1A6BB0; }
  .cbox.red > .h { background:var(--accent); } .cbox.orange > .h { background:#A33818; } .cbox.green > .h { background:#1A6BB0; }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:6px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:25px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:30px; margin-top:8px; color:var(--accent-dark); }
  .qbox { background:#FBF4EF; border:2px solid #A33818; border-radius:10px; padding:10px 18px; margin:8px 0; font-weight:700; font-size:24px; }
  .qbox .ans { display:block; margin-top:8px; font-weight:400; font-size:22px; color:#444; border-top:1px dashed #d8b48f; padding-top:8px; }
  .hl-1 { background:#FBE7D6; padding:0 4px; border-radius:3px; } .hl-2 { background:#F3DCC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; } .blu { color:#1A6BB0; font-weight:700; } .gry { color:#5B6068; font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:19px; color:#6e7378; margin-top:6px; }
  .src { font-size:17px; color:#7a7f86; white-space:nowrap; }
  .src a, a.src { color:#1A6BB0; text-decoration:none; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c2b1a3; border-radius:8px; background:#f7f3ef; color:#8a7a6a; display:flex; align-items:center; justify-content:center; text-align:center; font-size:16px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:22px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #cdcdcd; padding:9px 16px; text-align:center; }
  .dtbl th { background:var(--accent-soft); } .dtbl td.l { text-align:left; }
  .figwrap { text-align:center; } .figwrap img { max-height:430px; }
  .goals { list-style:none; margin:6px 0 0; padding:0; counter-reset:g; }
  .goals > li { position:relative; padding:6px 0 10px 56px; margin:0; min-height:44px; }
  .goals > li .gt { font-weight:700; font-size:24px; } .goals > li .gs { font-size:21px; color:#5B6068; }
  .goals > li::before { counter-increment:g; content:counter(g); position:absolute; left:0; top:6px; width:40px; height:40px; line-height:40px; text-align:center; border-radius:8px; background:var(--accent); color:#fff; font-weight:800; font-size:22px; }
  /* ---- density: larger fonts ---- */
  section { font-size:26px; padding-top:66px; padding-bottom:56px; }
  section h2 { font-size:38px; margin:0 0 8px; }
  section h3 { font-size:27px; }
  .caption { font-size:22px !important; line-height:1.5; }
  .takeaway { font-size:30px; }
  section.summary .sec-box h3 { font-size:25px; } section.summary .sec-box ul { font-size:24px; }
  section.fig .fig-area { min-height:380px; }
  section.split .split-body { min-height:400px; align-items:center; }
  /* タイトル(h2)は上端固定のまま、本文(.sections)だけを縦中央に置く（タイトルを拡大縮小の外へ分離） */
  section.summary .sections { flex:1 1 auto; justify-content:center; }
  section.wrap ul { margin-top:auto; margin-bottom:auto; }
  section:has(.takeaway) { padding-bottom:var(--takeaway-bottom) !important; }
  /* 下端の band/takeaway（＋直後の出典）を最下部に固定して高さを揃える */
  section > .band:last-child, section > .takeaway:last-child { margin-top:auto !important; }
  section > .band:has(+ .attr:last-child) { margin-top:auto !important; }
  section:has(.band) { padding-bottom:64px; }
  /* tk-low: 旧パッチ。現在は全パターン共通で下端固定（var(--takeaway-bottom)）するため default と同値。class が残っていても無害 */
  section.tk-low:has(.takeaway) { padding-bottom:var(--takeaway-bottom) !important; }
  section.cover-hero .title-event { font-size:34px; }
  section.cover-hero .title-affil { font-size:27px; color:#333; }
  /* 自己紹介：右上の所属・専門ブロックを少し大きく */
  section.intro .intro-affil { font-size:24px; }
  section.intro .intro-affil .role { font-size:22px; }
  /* 説明文をやわらかいパネルに */
  .qpanel { background:#FBF4EF; border:1px solid #E6C4A8; border-radius:10px; padding:12px 18px; margin-top:4px; }
  .qpanel p:last-child { margin-bottom:0; }
  /* 入れ子図の右側凡例 */
  .lyr { display:flex; align-items:flex-start; gap:12px; margin:13px 0; font-size:24px; line-height:1.4; }
  .lyr .sw { flex:none; width:23px; height:23px; border-radius:5px; margin-top:4px; border:1px solid rgba(0,0,0,.18); }
  .lyr b { font-weight:800; color:#832D18; }
  .lyrnote { font-size:18px; color:#6e7378; margin-top:14px; line-height:1.5; }
  /* DIKWモデル（情報とは）の黄色ボックス */
  .lead-q { text-align:center; font-size:25px; color:#6e7378; margin:2px 0 8px; }
  .dikw { background:#FBF1CC; border:1px solid #E6CE7C; border-radius:12px; padding:16px 30px 14px; }
  .dikw .d { margin:8px 0; }
  .dikw .t { font-weight:800; font-size:26px; color:#333; }
  .dikw .s { display:block; font-size:23px; color:#454545; margin:2px 0 0 1.5em; }
  .dikw .imp .t { color:#832D18; }
  .dikw .imp .s { font-weight:700; color:#222; }
  .dikw .tag { display:inline-block; font-size:18px; font-weight:700; color:#832D18; background:#F6DCC2; border-radius:6px; padding:1px 11px; margin-left:12px; vertical-align:middle; }
  .dikw .src2 { text-align:right; font-size:18px; color:#7a7f86; margin-top:8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">第1回（オンデマンド）</div>
<div class="title-big">研究における<br>生成AIの活用法</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">ナレッジ①：生成AIと倫理とリテラシー</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

---

<!-- _class: summary -->

<div class="page-title">この授業の狙い</div>

## 研究で生成AIを「倫理的かつ適切に」使えるようになる

今後、生成AIは<span class="red">研究においても無視できない</span>。ほぼすべての学問分野が、何らかの形で影響を受ける ── <span class="red">だからこそ</span>、研究での「使い方の作法」を今のうちに持っておく。

<div class="sections">

<div class="sec-box">

### 目的

- 研究活動で、生成AIを<span class="red">倫理的かつ適切に</span>利活用できるようになる
- 多くの院生は<span class="red">研究者を目指す</span>。その第一歩として“使い方の作法”を持つ

</div>

<div class="sec-box">

### 鍵になる問い

- 「AIを研究で使おう」と思ったとき、<span class="red">判断の基準（クライテリア）</span>は何か
- それを<span class="red">他者に言葉で説明</span>できるか ── 分野差・個人差を前提に考える

</div>

</div>

<div class="band">迷ったときに立ち返れる普遍的な「考え方の基準」を持つ。これがこの授業の中核です。</div>

---

<!-- _class: summary -->

<div class="page-title">この授業の目標（到達点）</div>

## 視聴後に、こうなっていることを目指す

<div class="sections">

<div class="sec-box">

### 知識・理解

- 研究における倫理・学術情報流通・生成AIの利活用リテラシーと仕組みを概観し、<span class="red">説明できる</span>

</div>

<div class="sec-box">

### 応用・分析

- 各分野・学会の生成AI受容状況を調べ、利活用で<span class="red">気をつける観点</span>を指摘できる
- 各分野の事例・手法を調査・比較し、<span class="red">自分の分野への影響</span>を分析できる

</div>

<div class="sec-box">

### 評価・受容

- 異分野の学生との協働で、生成AIが関わる手法・論点の<span class="red">学び方</span>を説明できる
- 研究の文脈で生成AIにどう関わるか、<span class="red">自分の意見を持ち判断できる</span>

</div>

</div>

---

<!-- _class: fig -->

<div class="page-title">この科目の全8回（＝授業回）</div>

## この講義の全体像

<div class="fig-area">
<table class="dtbl" style="font-size:20px;">
<tr><th>回</th><th class="l">テーマ</th><th>形式</th></tr>
<tr style="background:#F1D4DA;"><td><strong>1</strong></td><td class="l"><strong>ナレッジ①：生成AIと倫理とリテラシー　← 今回</strong></td><td>オンデマンド</td></tr>
<tr><td>2</td><td class="l">ナレッジ②：学術情報流通（成果公表・査読）の仕組み</td><td>オンデマンド</td></tr>
<tr><td>3</td><td class="l">ナレッジ③：生成AIの仕組み（ミニチュアを作るColab演習）</td><td>オンデマンド</td></tr>
<tr><td>4</td><td class="l">研究・論文①：アカデミック・インテグリティと生成AI</td><td>オンデマンド&グループワーク</td></tr>
<tr><td>5</td><td class="l">研究・論文②：各分野での受容状況を共有</td><td>同時双方向</td></tr>
<tr><td>6</td><td class="l">研究手法①：AIを研究で用いる</td><td>オンデマンド&グループワーク</td></tr>
<tr><td>7</td><td class="l">研究手法②：AIの研究利用の調査と情報交換</td><td>対面＋オンデマンド</td></tr>
<tr><td>8</td><td class="l">議論とリフレクション（最終レポートへ）</td><td>対面＋オンデマンド</td></tr>
</table>
</div>

<div class="takeaway">第1回は「考えるための前提」。ここから研究倫理・仕組み・手法へと積み上げます。</div>

---

<!-- _class: split tk-low -->

<div class="page-title">この講義の受け方</div>

## オンデマンドで“前提”を理解し、対面で“学び合う”ことで身につける

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:380px">
  <g text-anchor="middle">
    <rect x="60" y="30" width="240" height="70" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="180" y="60" font-size="18" font-weight="800" fill="#A33818">① オンデマンド講義</text>
    <text x="180" y="86" font-size="16" fill="#5B6068">倫理・情報流通・AI技術</text>
    <text x="180" y="120" font-size="26" fill="#A33818" font-weight="800">↓</text>
    <rect x="60" y="135" width="240" height="70" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
    <text x="180" y="165" font-size="18" font-weight="800" fill="#1A6BB0">② 同時双方向・対面</text>
    <text x="180" y="191" font-size="16" fill="#5B6068">分野を越えたグループワーク</text>
    <text x="180" y="225" font-size="26" fill="#1A6BB0" font-weight="800">↓</text>
    <rect x="60" y="240" width="240" height="56" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="265" font-size="18" font-weight="800" fill="#5B6068">③ 調査・議論・レポート</text>
    <text x="180" y="287" font-size="16" fill="#5B6068">自分の分野への影響を判断</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">視聴のしかた</div><div class="b">

- ナレッジ回を<span class="red">視聴期限内</span>に視聴（順番推奨）
- 視聴後に<span class="red">対面・同時双方向</span>で議論する

</div></div>

<div class="cbox gray"><div class="h">予習・復習でのAI利用</div><div class="b">

- 予習復習では<span class="red">大いに活用OK</span>。課題ごとに使える範囲を明示
- 使い方は<span class="red">必ず申告</span>（申告と乖離は0点）
- AIの回答を<span class="red">そのまま提出は C評価</span>（自分の考え・検証の跡が見えない）

</div></div>

</div>
</div>

<div class="takeaway">この講義は「考えるための前提」。答えは対面の議論で一緒に作る。</div>

---

<!-- _class: summary -->

<div class="page-title">授業の3つの課題</div>

## 3つの課題で、“自分はどう関わるか”を言葉にする

<svg viewBox="0 0 960 150" width="100%" style="max-height:230px">
  <g text-anchor="middle">
    <rect x="20" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="155" y="62" font-size="26" font-weight="800" fill="#A33818">① 近接分野 GW</text>
    <text x="155" y="98" font-size="20" fill="#832D18">研究倫理の観点で調査</text>
    <rect x="345" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="480" y="62" font-size="26" font-weight="800" fill="#A33818">② 分野横断 GW</text>
    <text x="480" y="98" font-size="20" fill="#832D18">手法の観点で比べる</text>
    <rect x="670" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="805" y="62" font-size="26" font-weight="800" fill="#A33818">③ 個人レポート</text>
    <text x="805" y="98" font-size="20" fill="#832D18">今後どう関わるかを書く</text>
    <text x="318" y="84" font-size="34" fill="#A33818">→</text>
    <text x="643" y="84" font-size="34" fill="#A33818">→</text>
  </g>
</svg>

- ① 近接分野GW：倫理的観点で<span class="red">指針を調査</span>（グループワーク）
- ② 分野横断GW：研究手法の観点で<span class="red">他分野と比較</span>（グループワーク）
- ③ 個人レポート：今後<span class="red">どうAIと関わるか</span>を明文化
- <span class="blu">①②のグループワークは第4〜7回</span>で行います

<div class="band">第1回の課題：まず<span class="red">研究分野・授業への関心を含む自己紹介</span>をMoodleに記入。</div>

---

<!-- _class: fig -->

<div class="page-title">今回（第1回）の流れ</div>

## 第1回は、この10本の動画で構成します

<div class="fig-area">
<svg viewBox="0 0 1000 300" width="100%" style="max-height:360px">
  <rect x="14" y="40" width="92" height="190" rx="12" fill="#F3DCC8" stroke="#832D18" stroke-width="1.5"/>
  <text x="60" y="128" text-anchor="middle" font-size="20" font-weight="800" fill="#832D18">①</text>
  <text x="60" y="156" text-anchor="middle" font-size="16" font-weight="700" fill="#832D18">学び方</text>
  <rect x="118" y="40" width="430" height="190" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="1.6"/>
  <text x="333" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#A33818">PART A　AIを知る</text>
  <rect x="560" y="40" width="220" height="190" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="1.6"/>
  <text x="670" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#1A6BB0">PART B　研究倫理</text>
  <rect x="792" y="40" width="194" height="190" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.6"/>
  <text x="889" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">PART C　これから</text>
  <g text-anchor="middle">
    <g><rect x="130" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#A33818" stroke-width="1.6"/><text x="178" y="128" font-size="22" font-weight="800" fill="#A33818">②</text><text x="178" y="162" font-size="18" font-weight="700">俯瞰</text></g>
    <g><rect x="234" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#A33818" stroke-width="1.6"/><text x="282" y="128" font-size="22" font-weight="800" fill="#A33818">③</text><text x="282" y="162" font-size="18" font-weight="700">倫理</text></g>
    <g><rect x="338" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#A33818" stroke-width="1.6"/><text x="386" y="128" font-size="22" font-weight="800" fill="#A33818">④</text><text x="386" y="162" font-size="18" font-weight="700">仕組み</text></g>
    <g><rect x="442" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#A33818" stroke-width="1.6"/><text x="490" y="128" font-size="22" font-weight="800" fill="#A33818">⑤</text><text x="490" y="162" font-size="18" font-weight="700">限界</text></g>
    <g><rect x="572" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.6"/><text x="620" y="128" font-size="22" font-weight="800" fill="#1A6BB0">⑥</text><text x="620" y="162" font-size="18" font-weight="700">研究倫理</text></g>
    <g><rect x="676" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.6"/><text x="724" y="128" font-size="22" font-weight="800" fill="#1A6BB0">⑦</text><text x="724" y="162" font-size="18" font-weight="700">倫理×AI</text></g>
    <g><rect x="804" y="88" width="80" height="116" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.6"/><text x="844" y="128" font-size="22" font-weight="800" fill="#5B6068">⑧</text><text x="844" y="162" font-size="18" font-weight="700">分野差</text></g>
    <g><rect x="892" y="88" width="80" height="116" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.6"/><text x="932" y="128" font-size="22" font-weight="800" fill="#5B6068">⑨</text><text x="932" y="162" font-size="18" font-weight="700">影響</text></g>
  </g>
  <rect x="118" y="244" width="868" height="44" rx="10" fill="#A33818"/>
  <text x="552" y="271" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">⑩ 自分の設計・まとめ ── 「判断の基準」を持ち、言葉で説明できる</text>
</svg>
</div>

<div class="takeaway">第1回=授業の前提を知る10動画。</div>

---

<!-- _class: intro tk-low -->

<div class="page-title">担当講師の自己紹介</div>

<div class="intro-head">
<div class="intro-name" style="display:flex; align-items:center; gap:20px;">
<img src="./src/profile.jpg" alt="田川 翔" style="width:120px; height:120px; border-radius:50%; object-fit:cover; flex:none;">
<span><span class="ruby">たがわ　しょう</span>田川　翔</span>
</div>
<div class="intro-affil">
<strong>所属：</strong>千葉大学 国際未来教育基幹<br>
専門：高等教育論・地球惑星科学
<div class="role">大学の学びを設計し、学生と教員を支援する</div>
</div>
</div>

<div class="two-col">
<div class="col">

### ①この講義をする理由

- 生成AIは研究に役立つし、影響するはず
- でも、研究でのAIの“作法”は<span class="red" style="white-space:nowrap">分野ごとにバラバラ</span>
- “自分の物差し”を手に入れて欲しい
</div>
<div class="col">

### ②問いの原点

<div class="qpanel">

自分は、地球惑星科学の研究者です。
分野横断的な学際領域だったので、他の分野の研究手法の習得に、大変苦労したのを覚えています。特に博論で金属工学やプログラミングまで学習したのは大変骨が折れました。
今はAIでもっと先にいける可能性があります。

</div>

</div>
</div>

<div class="takeaway">一緒に、AI×研究を考え、切り開きましょう。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 2</div>

# AIとはなにか、俯瞰する

## 情報からトランスフォーマーまで、辿る

---

<!-- _class: fig -->

<div class="page-title">全体像</div>

## 入れ子の関係 ── 大きな枠の中に「生成AI」がある

<div class="fig-area">
<div style="display:flex; gap:30px; align-items:center; width:100%;">
<svg viewBox="0 0 560 470" width="100%" style="flex:0 0 43%; max-height:430px" text-anchor="middle">
  <rect x="10" y="20" width="540" height="432" rx="22" fill="#ECEDEF" stroke="#C7CACE" stroke-width="2"/>
  <text x="280" y="56" font-size="25" font-weight="800" fill="#5B6068">数理・統計・DS</text>
  <rect x="54" y="80" width="452" height="364" rx="20" fill="#FBE7D6" stroke="#D2762E" stroke-width="2"/>
  <text x="280" y="116" font-size="25" font-weight="800" fill="#832D18">人工知能（AI）</text>
  <rect x="98" y="140" width="364" height="296" rx="18" fill="#F4D9C0" stroke="#A33818" stroke-width="2"/>
  <text x="280" y="176" font-size="24" font-weight="800" fill="#832D18">機械学習</text>
  <rect x="142" y="200" width="276" height="228" rx="16" fill="#EBC09A" stroke="#832D18" stroke-width="2"/>
  <text x="280" y="236" font-size="24" font-weight="800" fill="#7d1322">深層学習</text>
  <rect x="186" y="262" width="188" height="158" rx="14" fill="#A33818" stroke="#7d1322" stroke-width="2.5"/>
  <text x="280" y="350" font-size="28" font-weight="800" fill="#fff">生成AI</text>
</svg>
<div style="flex:1; min-width:0;">
<div class="lyr"><span class="sw" style="background:#ECEDEF"></span><span><b>数理・統計・DS</b>：データを扱う数学・統計</span></div>
<div class="lyr"><span class="sw" style="background:#FBE7D6"></span><span><b>AI</b>：人が知的だと感じる処理を実現するシステム<br><span style="font-size:18px; color:#7a6a5c;"><span class="ss-tune" style="font-size:20px !important">機械学習のほか、ルールベース・探索・推論 なども含む</span></span></span></div>
<div class="lyr"><span class="sw" style="background:#F4D9C0"></span><span><b>機械学習</b>：データから自動でパターンを学ぶAI</span></div>
<div class="lyr"><span class="sw" style="background:#EBC09A"></span><span><b>深層学習</b>：多層ネットワークで学ぶ。生成AIの土台</span></div>
<div class="lyr"><span class="sw" style="background:#A33818"></span><span><b>生成AI</b>：文章・画像などを“つくる”AI（この講義の主役）</span></div>
<div class="lyrnote"><span class="ss-tune" style="font-size:20px !important">※ 生成AIの手法は Transformer・GAN・拡散モデル など複数。</span></div>
</div>
</div>
</div>

<div class="takeaway">AIの範囲はきわめて広く、生成AIがその一部でしかない。AIは既に環境になった。</div>

---

<!-- _class: summary tk-low -->

<div class="page-title">情報とは</div>

## 情報のDIKWモデル

<div class="dikw">
<div class="d"><span class="t">・データ（Data）</span><span class="s">客観的な事実など、整理されていない状態。</span></div>
<div class="d imp"><span class="t">・情報（Information）</span><span class="tag">重要</span><span class="s">データを何らかの基準で整理・分析し、解釈できるようにした状態。</span></div>
<div class="d"><span class="t">・知識（Knowledge）</span><span class="s">情報をまとめて体系化・構造化した状態。</span></div>
<div class="d"><span class="t">・知恵（Wisdom）</span><span class="s">知識を正しく認識し、価値観やモラルにまで高めた状態。</span></div>
<div class="src2">出典: 高等学校 情報Ⅰ（数研出版）</div>
</div>

<div class="takeaway">データを情報・知識へ変換する力。研究は、この往還を行き来する。</div>

---

<!-- _class: fig -->

<div class="page-title">AIとは／AIの分類</div>

## AI＝人が知的だと感じる処理を実現するシステム

<div class="fig-area">
<svg viewBox="0 0 990 470" width="100%" style="max-height:440px">
  <g text-anchor="middle">
    <rect x="90" y="5" width="250" height="86" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="215" y="41" font-size="24" font-weight="800" fill="#832D18">Artificial</text>
    <text x="215" y="71" font-size="23" fill="#5B6068">人工的な</text>
    <text x="400" y="59" font-size="36" font-weight="800" fill="#5B6068">＋</text>
    <rect x="460" y="5" width="250" height="86" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="585" y="41" font-size="24" font-weight="800" fill="#832D18">Intelligence</text>
    <text x="585" y="71" font-size="23" fill="#5B6068">知能</text>
    <text x="800" y="59" font-size="32" font-weight="800" fill="#5B6068">→</text>
    <rect x="845" y="9" width="120" height="78" rx="12" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
    <text x="905" y="45" font-size="24" font-weight="800" fill="#fff">AI</text>
    <text x="905" y="73" font-size="23" fill="#FBE7D6">人工知能</text>
    <text x="495" y="128" font-size="33" fill="#5B6068">定義 = 人が知的だと感じる処理を実現するシステム</text>
    <rect x="395" y="175" width="200" height="58" rx="12" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
    <text x="495" y="211" font-size="22" font-weight="800" fill="#fff">AI（人工知能）</text>
    <path d="M639 158 L941 158 Q955 158 955 172 L955 232 Q955 246 941 246 L639 246 Q625 246 625 232 L625 216 L597 204 L625 192 L625 172 Q625 158 639 158 Z" fill="#FFF7EC" stroke="#A33818" stroke-width="2"/>
    <text x="790" y="193" font-size="20" font-weight="800" fill="#832D18">ロボットとは別物</text>
    <text x="790" y="223" font-size="18" fill="#5B6068">AIは“知能”、ロボットは“体”</text>
    <line x1="495" y1="233" x2="245" y2="285" stroke="#5B6068" stroke-width="2"/>
    <line x1="495" y1="233" x2="745" y2="285" stroke="#5B6068" stroke-width="2"/>
    <rect x="100" y="290" width="290" height="150" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="245" y="330" font-size="22" font-weight="800" fill="#5B6068">ルールベース</text>
    <text x="245" y="368" font-size="23" fill="#5B6068">人がルール・知識を記述</text>
    <text x="245" y="402" font-size="23" fill="#5B6068">書ききれる問題に強い</text>
    <rect x="600" y="290" width="290" height="150" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="745" y="330" font-size="22" font-weight="800" fill="#832D18">機械学習</text>
    <text x="745" y="368" font-size="23" fill="#5B6068">データから自分で学ぶ</text>
    <text x="745" y="402" font-size="23" fill="#A33818" font-weight="700">現在の主流</text>
    <path d="M44 150 H356 Q370 150 370 164 V190 L394 204 L370 218 V242 Q370 256 356 256 H44 Q30 256 30 242 V164 Q30 150 44 150 Z" fill="#FFF7EC" stroke="#A33818" stroke-width="2"/>
    <text x="200" y="174" font-size="17" font-weight="800" fill="#832D18">「AI」という用語は1956年に誕生</text>
    <text x="200" y="197" font-size="16" fill="#5B6068">ダートマス会議で4名が提唱し命名</text>
    <text x="200" y="220" font-size="16" fill="#5B6068">マッカーシー・ミンスキー</text>
    <text x="200" y="243" font-size="16" fill="#5B6068">シャノン・ロチェスター</text>
  </g>
</svg>
</div>

<div class="takeaway">「猫を見分けるルール」を完璧に書くのは不可能。だからデータから学ばせる。</div>

---

<!-- _class: summary -->

<div class="page-title">機械学習</div>

## 機械学習型のAIの学び方(Training方法)は3種類

<div class="grid3">

<div class="cbox mid"><div class="h">① 教師あり学習</div><div class="b">

- <span class="red">正解（教師データ）</span>付きで学ぶ
- 例：分類・予測・回帰
- 「この画像は猫」と教える

<svg viewBox="0 0 320 124" width="100%" style="max-height:132px">
  <text x="151" y="9" font-size="9" font-weight="800" fill="#5B6068" text-anchor="middle">① 学習（正解つきで覚える）</text>
  <rect x="92" y="14" width="56" height="24" rx="4" fill="#fff" stroke="#A33818" stroke-width="1.2"/>
  <text x="106" y="31" font-size="15" text-anchor="middle">🐱</text>
  <rect x="120" y="20" width="22" height="12" rx="2.5" fill="#A33818"/>
  <text x="131" y="29" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle">ネコ</text>
  <rect x="152" y="14" width="56" height="24" rx="4" fill="#fff" stroke="#A33818" stroke-width="1.2"/>
  <text x="166" y="31" font-size="15" text-anchor="middle">🐶</text>
  <rect x="180" y="20" width="22" height="12" rx="2.5" fill="#A33818"/>
  <text x="191" y="29" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle">イヌ</text>
  <line x1="120" y1="38" x2="142" y2="54" stroke="#A33818" stroke-width="2"/>
  <line x1="180" y1="38" x2="160" y2="54" stroke="#A33818" stroke-width="2"/>
  <rect x="120" y="56" width="62" height="40" rx="10" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
  <text x="151" y="80" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">モデル</text>
  <text x="50" y="58" font-size="9" font-weight="800" fill="#5B6068" text-anchor="middle">② 予測する画像</text>
  <rect x="16" y="62" width="64" height="50" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
  <text x="48" y="99" font-size="34" text-anchor="middle">🐱</text>
  <text x="100" y="86" font-size="20" fill="#A33818" text-anchor="middle">→</text>
  <text x="198" y="86" font-size="20" fill="#A33818" text-anchor="middle">→</text>
  <rect x="214" y="62" width="96" height="46" rx="8" fill="#fff" stroke="#A33818" stroke-width="1.5"/>
  <text x="262" y="84" font-size="12" fill="#333" text-anchor="middle">これは猫</text>
  <text x="262" y="102" font-size="14" font-weight="800" fill="#A33818" text-anchor="middle">80%</text>
</svg>

</div></div>

<div class="cbox mid"><div class="h">② 教師なし学習</div><div class="b">

- <span class="red">正解なし</span>で構造を見つける
- 例：クラスタリング・次元削減
- 似たもの同士をまとめる

<svg viewBox="0 0 320 116" width="100%" style="max-height:116px">
  <rect x="6" y="12" width="96" height="92" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
  <circle cx="28" cy="34" r="7" fill="#A33818"/><circle cx="72" cy="30" r="7" fill="#1A6BB0"/>
  <circle cx="52" cy="56" r="7" fill="#E0A53F"/><circle cx="30" cy="78" r="7" fill="#1A6BB0"/>
  <circle cx="80" cy="72" r="7" fill="#A33818"/><circle cx="58" cy="90" r="7" fill="#E0A53F"/>
  <text x="120" y="62" font-size="20" fill="#A33818" text-anchor="middle">→</text>
  <ellipse cx="178" cy="40" rx="28" ry="22" fill="none" stroke="#A33818" stroke-dasharray="3 3"/>
  <circle cx="170" cy="36" r="7" fill="#A33818"/><circle cx="186" cy="42" r="7" fill="#A33818"/><circle cx="172" cy="50" r="7" fill="#A33818"/>
  <ellipse cx="244" cy="40" rx="28" ry="22" fill="none" stroke="#1A6BB0" stroke-dasharray="3 3"/>
  <circle cx="236" cy="36" r="7" fill="#1A6BB0"/><circle cx="252" cy="42" r="7" fill="#1A6BB0"/><circle cx="238" cy="50" r="7" fill="#1A6BB0"/>
  <ellipse cx="210" cy="90" rx="28" ry="20" fill="none" stroke="#E0A53F" stroke-dasharray="3 3"/>
  <circle cx="202" cy="86" r="7" fill="#E0A53F"/><circle cx="218" cy="92" r="7" fill="#E0A53F"/><circle cx="204" cy="99" r="7" fill="#E0A53F"/>
</svg>

</div></div>

<div class="cbox mid"><div class="h">③ 強化学習</div><div class="b">

- <span class="red">報酬</span>を最大化する試行錯誤
- 例：ゲームAI・自動運転
- 良い行動に“ほうび”を与える

<svg viewBox="0 0 320 116" width="100%" style="max-height:116px">
  <polygon points="10,48 10,64 24,56" fill="#A33818"/>
  <polyline points="26,56 66,56 66,30 116,30 116,84 172,84 172,46 214,46" fill="none" stroke="#1A6BB0" stroke-width="4"/>
  <circle cx="66" cy="30" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <circle cx="116" cy="84" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <circle cx="172" cy="46" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <g stroke="#aab0b6" stroke-width="2"><line x1="92" y1="52" x2="100" y2="60"/><line x1="100" y1="52" x2="92" y2="60"/><line x1="146" y1="28" x2="154" y2="36"/><line x1="154" y1="28" x2="146" y2="36"/></g>
  <circle cx="214" cy="46" r="10" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
  <polygon points="266,28 272,43 288,43 275,53 280,69 266,59 252,69 257,53 244,43 260,43" fill="#E0A53F" stroke="#B97E1E" stroke-width="1.5"/>
  <text x="266" y="88" font-size="11" font-weight="700" fill="#5B6068" text-anchor="middle">報酬（ゴール）</text>
</svg>

</div></div>

</div>

<div class="band">正解の一部だけを使う「半教師あり学習」も。実務ではこれらを組み合わせます。</div>

---

<!-- _class: split -->

<div class="page-title">ニューラルネット</div>

## 脳のニューロンを真似た“層”の重ね合わせ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:380px">
  <g>
    <text x="60" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#A33818">入力層</text>
    <text x="190" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#5B6068">隠れ層</text>
    <text x="320" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#832D18">出力層</text>
    <g stroke="#e6c4a8" stroke-width="1">
      <line x1="60" y1="90" x2="190" y2="80"/><line x1="60" y1="90" x2="190" y2="150"/><line x1="60" y1="90" x2="190" y2="220"/>
      <line x1="60" y1="160" x2="190" y2="80"/><line x1="60" y1="160" x2="190" y2="150"/><line x1="60" y1="160" x2="190" y2="220"/>
      <line x1="60" y1="230" x2="190" y2="80"/><line x1="60" y1="230" x2="190" y2="150"/><line x1="60" y1="230" x2="190" y2="220"/>
      <line x1="190" y1="80" x2="320" y2="120"/><line x1="190" y1="80" x2="320" y2="190"/>
      <line x1="190" y1="150" x2="320" y2="120"/><line x1="190" y1="150" x2="320" y2="190"/>
      <line x1="190" y1="220" x2="320" y2="120"/><line x1="190" y1="220" x2="320" y2="190"/>
    </g>
    <g>
      <circle cx="60" cy="90" r="16" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
      <circle cx="60" cy="160" r="16" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
      <circle cx="60" cy="230" r="16" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
      <circle cx="190" cy="80" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="190" cy="150" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="190" cy="220" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="320" cy="120" r="16" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
      <circle cx="320" cy="190" r="16" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
    </g>
    <text x="190" y="300" text-anchor="middle" font-size="16" fill="#A33818" font-weight="700">結線の“重み”を学習で調整</text>
  </g>
</svg>

</div>
<div class="right">

<div class="callout-blue">学習(Training) と 推論(Inference) 

- <span class="hl">学習</span>：データで<b>重みを調整<br>＝育てる</b>（計算が重い・1回）
- <span class="hl">推論</span>：育てた<b>重みで答えを出す<br>＝使う</b>（重みは固定・軽い）
</div>

- 隠れ層を<span class="red">深く</span>重ねたものが深層学習
- 画像・音声・言語の処理に強い

</div>
</div>

<div class="takeaway">学習 (Training)＝“重みという数字を調整して当てにいく”地道な作業です。</div>

---

<!-- _class: split -->

<div class="page-title">トランスフォーマー</div>

## 系列を“並列に”扱う新しい仕組み

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="90" y="14" width="200" height="46" rx="9" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="190" y="43" font-size="17" font-weight="800" fill="#832D18">入力の語の並び</text>
    <text x="190" y="78" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="65" y="90" width="250" height="50" rx="9" fill="#F1C9A8" stroke="#A33818" stroke-width="2"/>
    <text x="190" y="113" font-size="16" font-weight="800" fill="#832D18">自己注意 Self-attention</text>
    <text x="190" y="132" font-size="16" fill="#5B6068">語どうしの関係を見る</text>
    <text x="190" y="160" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="65" y="172" width="250" height="50" rx="9" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="190" y="195" font-size="16" font-weight="800" fill="#5B6068">MLP（変換）</text>
    <text x="190" y="214" font-size="16" fill="#5B6068">情報をまとめ直す</text>
    <text x="190" y="242" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="65" y="254" width="250" height="58" rx="9" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
    <text x="190" y="280" font-size="16" font-weight="800" fill="#fff">次の語を予測</text>
    <text x="190" y="300" font-size="16" fill="#FBE7D6">候補ごとの確率を出す</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">いまは“次の語を予測”だけでOK</div><div class="b">

- 今回は「<span class="red">次の語を予測している</span>」と掴めればOK
- 2017年登場。文を<span class="red">並列に</span>扱えて大規模化しやすい

</div></div>

<div class="attr">出典: Vaswani et al., 2017「Attention Is All You Need」</div>

</div>
</div>

<div class="takeaway">今回は「次の語を当てている」の一点だけ。細部は第3回で手を動かして試します。</div>

---

<!-- _class: split -->

<div class="page-title">生成AIとは</div>

## “認識・分類”から“生成”へ

<div class="split-body">
<div class="left">

<svg viewBox="0 20 380 285" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <text x="190" y="35" font-size="16" font-weight="800" fill="#5B6068">従来のAI</text>
    <rect x="35" y="55" width="100" height="46" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.8"/>
    <text x="85" y="83" font-size="16" font-weight="700" fill="#5B6068">入力</text>
    <text x="155" y="84" font-size="20" font-weight="800" fill="#5B6068">→</text>
    <rect x="185" y="55" width="160" height="46" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.8"/>
    <text x="265" y="83" font-size="16" font-weight="700" fill="#5B6068">分類ラベル</text>
    <line x1="30" y1="135" x2="350" y2="135" stroke="#e6c4a8" stroke-width="1.5"/>
    <text x="190" y="175" font-size="16" font-weight="800" fill="#A33818">生成AI</text>
    <rect x="35" y="195" width="100" height="46" rx="8" fill="#fff" stroke="#A33818" stroke-width="2"/>
    <text x="85" y="223" font-size="16" font-weight="700" fill="#832D18">入力</text>
    <text x="155" y="224" font-size="20" font-weight="800" fill="#A33818">→</text>
    <rect x="185" y="185" width="160" height="66" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="265" y="212" font-size="16" font-weight="700" fill="#832D18">新しい文章</text>
    <text x="265" y="234" font-size="16" font-weight="700" fill="#832D18">・画像を生成</text>
    <text x="190" y="295" font-size="16" fill="#5B6068">識別する → 作り出す へ</text>
  </g>
</svg>

</div>
<div class="right">

- 従来のAIは<span class="red">識別・予測</span>が中心
- 生成AIは<span class="red">尤もらしい続き</span>（＝それらしい続き）を作る
- <span class="red">次に来る語</span>を一つ選び、入力に戻して繰り返す
- 文章を扱うものが<span class="red">LLM</span>（大規模言語モデル）

</div>
</div>

<div class="callout-blue">推論モデル（reasoning model）

- Transformerの<span class="hl">一度の生成だけでは十分に賢くならない</span>
- 答える前に<span class="hl">考える過程を生成</span>し、<span class="hl">繰り返し考える</span>ことで精度が上がる
</div>

<div class="callout-green">AI agent（エージェント）：目標を与えると<span class="hl">計画→ツール実行→確認</span>を自分で繰り返し、タスクを最後までやり遂げるAI</div>

---

<!-- _class: summary -->

<div class="page-title">この動画のまとめ</div>

## AIの概念の全体像

<div class="grid3">

<div class="cbox mid"><div class="h">① AIの主流</div><div class="b">

- AIは<span class="red">機械学習</span>が現在の主流
- データから自分で学ぶ方式
- ルールで書けない問題に強い

</div></div>

<div class="cbox mid"><div class="h">② 学習の正体</div><div class="b">

- ニューラルネット／ディープで
- 結線の<span class="red">重みを学習</span>して当てる
- 学習＝地道な数値調整

</div></div>

<div class="cbox deep"><div class="h">③ 生成AIへ</div><div class="b">

- <span class="red">トランスフォーマー</span><br>＝系列を並列に扱う
- “<span class="red">次の語を予測</span>”し続きを作る
- 数理は<span class="red">第3回（Colab演習）</span>で

</div></div>

</div>

<div class="band">次の動画では、使う前に知っておくべき「原則・倫理・リスク」を見ていきます。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 3</div>

# 原則・倫理・リスク

## 「使ってよい／だめ」を判断する物差しをつくる

---

<!-- _class: fig -->

<div class="page-title">なぜ「原則」から入るか</div>

## 研究から見るピラミッド： だから「理念」に遡って考える

<div class="fig-area">
<svg viewBox="0 0 960 380" width="100%" style="max-height:430px">
  <polygon points="480,24 406,114 554,114" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
  <text x="480" y="82" text-anchor="middle" font-size="19" font-weight="800" fill="#A33818">理念</text>
  <text x="480" y="103" text-anchor="middle" font-size="12" fill="#832D18">例：人間の尊厳</text>
  <polygon points="401,120 559,120 621,196 339,196" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2.5"/>
  <text x="480" y="152" text-anchor="middle" font-size="19" font-weight="800" fill="#832D18">社会的な指針</text>
  <text x="480" y="178" text-anchor="middle" font-size="14" fill="#832D18">例：透明性</text>
  <polygon points="334,202 626,202 688,278 272,278" fill="#FDF0E2" stroke="#E08A4F" stroke-width="2.5"/>
  <text x="480" y="234" text-anchor="middle" font-size="19" font-weight="800" fill="#832D18">学会・組織の指針</text>
  <text x="480" y="262" text-anchor="middle" font-size="14" fill="#832D18">例：各学会・各社の倫理指針</text>
  <polygon points="267,284 693,284 755,360 205,360" fill="#EDEEF0" stroke="#5B6068" stroke-width="2.5"/>
  <text x="480" y="316" text-anchor="middle" font-size="19" font-weight="800" fill="#5B6068">技術的な指針・利用規約</text>
  <text x="480" y="344" text-anchor="middle" font-size="14" fill="#5B6068">例：各社の利用規約</text>
  <line x1="836" y1="350" x2="836" y2="92" stroke="#A33818" stroke-width="2.5"/>
  <polygon points="836,76 827,96 845,96" fill="#A33818"/>
  <line x1="747" y1="350" x2="836" y2="350" stroke="#5B6068" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="530" y1="88" x2="836" y2="88" stroke="#A33818" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="868" y="220" text-anchor="middle" font-size="18" font-weight="800" fill="#A33818" transform="rotate(90 868 220)">迷ったら上位へ遡る</text>
  <line x1="213" y1="350" x2="120" y2="350" stroke="#5B6068" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="72" y="344" text-anchor="middle" font-size="15" fill="#5B6068">具体策は</text>
  <text x="72" y="366" text-anchor="middle" font-size="15" fill="#5B6068">技術で変わる</text>
</svg>
</div>

<div class="takeaway">技術先行で変わり続ける。迷う場面ほど、上位の「理念」に遡ると見通しが良い。</div>

---

<!-- _class: summary -->

<div class="page-title">理念と指針</div>

## 人間中心の AI 社会原則: 3つの理念が土台

理念（最上位の価値）── そもそも何のためにAIを使うのか。
<span class="hl">「以下の３つの価値を理念として尊重し、その実現を追求する社会を構築していくべき」</span>とする

<div class="grid3">

<div class="cbox mid"><div class="h">人間の尊厳 <span style="font-size:16px;font-weight:600;color:#832D18;">Dignity</span></div><div class="b">

人がAIに振り回されず、<span class="red">人<br>間が中心</span>であり続ける

<div style="font-size:18px;color:#5B6068;line-height:1.45;margin-top:6px;">原文：「人間がAIを道具として使いこなす…<b>人間の尊厳が尊重される社会</b>を構築する必要がある」</div>

</div></div>

<div class="cbox mid"><div class="h">多様性・包摂 <span style="font-size:16px;font-weight:600;color:#832D18;">Diversity &amp; Inclusion</span></div><div class="b">

さまざまな背景の人が<span class="red"><br>誰も取り残されない</span>

<div style="font-size:18px;color:#5B6068;line-height:1.45;margin-top:6px;">原文：「多様な幸せを追求し、それらを<b>柔軟に包摂</b>した上で新たな価値を創造できる社会」</div>

</div></div>

<div class="cbox mid"><div class="h">持続可能な社会 <span style="font-size:16px;font-weight:600;color:#832D18;">Sustainability</span></div><div class="b">

恩恵を<span class="red">将来世代まで</span>届ける
<br>
<div style="font-size:18px;color:#5B6068;line-height:1.45;margin-top:6px;">原文：「格差を解消し、地球規模の環境問題や気候変動などにも対応が可能な<b>持続性のある社会</b>」</div>

</div></div>

</div>

<div class="band">この理念から、 <span class="red">人間中心・透明性・公平性</span> といった指針が出てくる。</div>

<div class="attr">出典: 人間中心のAI社会原則（内閣府 統合イノベーション戦略推進会議, 2019） <a href="https://www8.cao.go.jp/cstp/ai/aigensoku.pdf#page=6">リンク</a></div>

---

<!-- _class: summary -->

<div class="page-title">AI社会原則</div>

## 3つの理念から導く、国の「7つのAI社会原則」

先ほどの3理念を社会全体で実現するための原則。<span class="hl">
研究で使う私たちに効くのは ①人間中心・②教育リテラシー・⑥公平性／説明責任／透明性</span>

<style scoped>
.grid7{display:grid;grid-template-columns:1fr 1fr;gap:9px 24px;margin-top:8px;font-size:20px;line-height:1.32;}
.grid7 .it{display:flex;align-items:flex-start;gap:9px;}
.grid7 .n{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:#9aa0a6;color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.grid7 .it.key .n{background:#A33818;}
.grid7 .ttl{color:#7d1322;font-weight:800;}
.grid7 .it.key .ttl{color:#A33818;}
</style>

<div class="grid7">
<div class="it key"><span class="n">1</span><span><span class="ttl">人間中心</span> ── 基本的人権を侵さない。AIは人を補助し能力を拡げる道具で、最終判断と責任は人</span></div>
<div class="it key"><span class="n">2</span><span><span class="ttl">教育・リテラシー</span> ── 誰もが正しく理解し使える素養を。格差や「情報弱者」を生まない</span></div>
<div class="it"><span class="n">3</span><span><span class="ttl">プライバシー確保</span> ── 個人データで自由・尊厳・平等を侵さず、本人が関与できる仕組み</span></div>
<div class="it"><span class="n">4</span><span><span class="ttl">セキュリティ確保</span> ── 便益とリスクの均衡。単一AIに依存せずリスク管理を進める</span></div>
<div class="it"><span class="n">5</span><span><span class="ttl">公正競争確保</span> ── データや力が特定に偏らない、公正な競争環境を保つ</span></div>
<div class="it key"><span class="n">6</span><span><span class="ttl">公平性・説明責任・透明性</span> ── 不当な差別を防ぎ、決定の透明性と説明責任・信頼性</span></div>
<div class="it"><span class="n">7</span><span><span class="ttl">イノベーション</span> ── 産学官民・国際連携と規制改革でAI活用を促進</span></div>
</div>

<div class="band">国が定めるこの「価値」は、<span class="red">学会・組織の倫理指針ともほぼ共通</span>する。</div>

<div class="attr">出典: 人間中心のAI社会原則（内閣府 統合イノベーション戦略推進会議, 2019）§4.1 AI社会原則 <a href="https://www8.cao.go.jp/cstp/ai/aigensoku.pdf#page=10">リンク</a></div>

---

<!-- _class: summary -->

<div class="page-title">理念と倫理</div>

## 学会・組織の倫理指針は「価値」の指針が共通化してきた

<div style="font-size:19px; margin-top:4px; text-align:center;">
<table style="border-collapse:collapse; text-align:center; display:inline-table;">
<thead>
<tr style="background:#f6b79e; color:#fff;">
<th style="text-align:left; padding:7px 12px; border:1px solid #A33818;">尊重すべき価値</th>
<th style="padding:7px; border:1px solid #A33818;">総務省<br><span style="font-weight:400; font-size:14px;">AI利活用原則</span></th>
<th style="padding:7px; border:1px solid #A33818;">内閣府<br><span style="font-weight:400; font-size:14px;">AI社会原則</span></th>
<th style="padding:7px; border:1px solid #A33818;">人工知能学会<br><span style="font-weight:400; font-size:14px;">倫理指針</span></th>
<th style="padding:7px; border:1px solid #A33818;">EU<br><span style="font-weight:400; font-size:14px;">信頼できるAI</span></th>
<th style="padding:7px; border:1px solid #A33818;">FLI<br><span style="font-weight:400; font-size:14px;">Asilomar</span></th>
</tr>
</thead>
<tbody>
<tr><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">人間中心・尊厳</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td></tr>
<tr style="background:#FBF4EC;"><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">透明性</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#c2c6cc;">—</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td></tr>
<tr><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">説明責任（アカウンタビリティ）</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td></tr>
<tr style="background:#FBF4EC;"><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">公平性（無差別）</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#c2c6cc;">—</td></tr>
<tr><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">プライバシー</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td></tr>
<tr style="background:#FBF4EC;"><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">安全・セキュリティ</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td></tr>
<tr><td style="text-align:left; padding:6px 12px; border:1px solid #e6c4a8; font-weight:700; color:#832D18;">多様性・包摂</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#c2c6cc;">—</td><td style="border:1px solid #e6c4a8; color:#A33818; font-weight:800;">✓</td><td style="border:1px solid #e6c4a8; color:#c2c6cc;">—</td></tr>
</tbody>
</table>
</div>

<div class="band"><span class="red">人間中心・説明責任・プライバシー・安全</span> は共通。軸は揃ってきた。</div>

<div class="attr">出典: 総務省「AIガイドライン比較表」（別紙2, 2019）。✓＝当該指針に明示／空欄＝明示なし（簡略化した整理）。 <a href="https://www.soumu.go.jp/main_content/000646187.pdf">リンク</a></div>

---

<!-- _class: split -->

<div class="page-title">研究者に効く3指針</div>

## 人間中心・透明性・公平性

<div class="split-body">
<div class="left">

<style scoped>
.panels{display:flex;flex-direction:column;gap:11px;margin-top:6px;}
.panel{background:#FBF4EE;border-radius:8px;padding:10px 14px;}
.panel .pt{font-weight:800;font-size:21px;margin-bottom:3px;}
.panel .pb{font-size:19px;line-height:1.4;color:#333;}
.panel.b{border-color:#1A6BB0;} .panel.b .pt{color:#1A6BB0;}
.panel.o{border-color:#A33818;} .panel.o .pt{color:#A33818;}
.panel.p{border-color:#B23A6B;} .panel.p .pt{color:#B23A6B;}
</style>

<div class="panels">
<div class="panel b"><div class="pt">透明性 ── 使ったら開示する</div><div class="pb">どこで・どう使ったかを記録orログで自動保存し、投稿先や指導教員に<span class="red">開示</span>できる状態に。</div></div>
<div class="panel o"><div class="pt">人間中心 ── 最終責任は人</div><div class="pb">判断と責任は人が負う。「AIがそう言った」は<span class="red">弁明にならない</span>。
つまり、生成AIにはオーサーシップはない。</div></div>
<div class="panel p"><div class="pt">公平性 ── バイアスに注意</div><div class="pb">学習データの偏りが出力に表れる（右図）。<span class="red">確かめてから</span>使う。
人間も生成AIも双方がバイアスを気づかぬ内にもつので注意。</div></div>
</div>

</div>
<div class="right">

<div class="figwrap"><img src="./src/fig03-ai-bias-faces.jpg" alt="AIが生成した職業別の顔画像。特定の職業に特定の性別・人種が偏って現れる例" style="max-height:330px"></div>
<div class="caption">公平性の例：職業の生成画像に性別・人種の偏りが出る<br>
総務省資料にあげられた例</div>
<div class="attr">出典: <a href="https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/">総務省「上手にネットと付き合おう」生成AI特集</a></div>

</div>
</div>

<div class="takeaway">この3つは、研究での生成AI利用の際には、常に確認する。</div>

---

<!-- _class: split -->

<div class="page-title">リスク① 権利侵害・知的財産権</div>

## 他者の権利を侵さない／著作権は「学習」と「生成」で分ける

<div class="split-body">
<div class="left">

<style scoped>
section h2{margin-bottom:2px;}
section.split .split-body{margin-top:0;min-height:0;}
.panels{display:flex;flex-direction:column;gap:10px;margin-top:0;}
.panel{background:#FBF4EE;border-radius:8px;padding:9px 14px;}
.panel .pt{font-weight:800;font-size:20px;margin-bottom:3px;}
.panel .pb{font-size:18px;line-height:1.4;color:#333;}
.panel.o .pt{color:#A33818;}
.panel.p .pt{color:#B23A6B;}
.panel.t .pt{color:#1A6BB0;}
</style>

<div class="panels">
<div class="panel o"><div class="pt">権利侵害（肖像・名誉・人格）</div><div class="pb">• <span class="red">ディープフェイク</span>に注意<br>• 他者の画像や音声を<span class="red">無断で素材化しない</span></div></div>
<div class="panel p"><div class="pt">著作権 ── 「学習」と「生成」で分ける</div><div class="pb">• 著作権者の権利を不当に侵害する場合には、例外がない。<br>
• 権利を不当に侵害しない場合、著作権者の権利を制限できる「例外」が幾つかある。(教育利用、引用など)<br>
• 学習に使うのは<span class="red">OK</span>（情報解析）<span class="src">（出典: 著作権法第30条の4）</span><br>• 生成物が既存作品に<span class="red">似て参照していたらNG</span><span class="src">（出典: 文化庁2024）</span></div></div>
<div class="panel t"><div class="pt">その他の知財 ── 特許・商標・営業秘密</div><div class="pb">• <span class="red">特許</span>：AIは発明者になれず<b>発明者は人</b><span class="src">（東京地裁2024）</span><br>• 生成物の<b>権利帰属</b>は「人の創作的寄与」＋<span class="red">利用規約</span>次第（商標・営業秘密にも注意）</div></div>
</div>
</div>
<div class="right">

<svg viewBox="0 0 460 398" width="100%" style="max-height:410px">
  <defs>
    <marker id="cah" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#5B6068"/></marker>
  </defs>
  <g font-family="sans-serif" text-anchor="middle">
    <rect x="24" y="8" width="210" height="40" rx="8" fill="#A33818"/>
    <text x="129" y="34" font-size="16" font-weight="800" fill="#fff">著作権侵害か？</text>
    <rect x="24" y="86" width="210" height="42" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.6"/>
    <text x="129" y="112" font-size="14" font-weight="700" fill="#33373b">既存の著作物に依拠している</text>
    <rect x="24" y="166" width="210" height="42" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.6"/>
    <text x="129" y="192" font-size="14" font-weight="700" fill="#33373b">既存の著作物に類似している</text>
    <rect x="24" y="246" width="210" height="54" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.6"/>
    <text x="129" y="270" font-size="13.5" font-weight="700" fill="#33373b">表現上の本質的特徴を</text>
    <text x="129" y="289" font-size="13.5" font-weight="700" fill="#33373b">直接感得できる</text>
    <rect x="36" y="330" width="86" height="58" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="79" y="366" font-size="20" font-weight="800" fill="#A33818">複製</text>
    <rect x="136" y="330" width="86" height="58" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="179" y="366" font-size="20" font-weight="800" fill="#A33818">翻案</text>
    <rect x="300" y="14" width="152" height="34" rx="9" fill="#E3F0E4" stroke="#3a9d63" stroke-width="1.5"/>
    <text x="376" y="36" font-size="12.5" font-weight="800" fill="#2E7D4F">著作権侵害ではない</text>
    <rect x="300" y="96" width="152" height="34" rx="9" fill="#E3F0E4" stroke="#3a9d63" stroke-width="1.5"/>
    <text x="376" y="118" font-size="12.5" font-weight="800" fill="#2E7D4F">著作権侵害ではない</text>
    <rect x="300" y="176" width="152" height="34" rx="9" fill="#E3F0E4" stroke="#3a9d63" stroke-width="1.5"/>
    <text x="376" y="198" font-size="12.5" font-weight="800" fill="#2E7D4F">著作権侵害ではない</text>
    <rect x="300" y="240" width="152" height="86" rx="10" fill="#FCEFC7" stroke="#E0B84F" stroke-width="1.5"/>
    <text x="376" y="268" font-size="12" fill="#6b5a1e">裁判で争われる際は、</text>
    <text x="376" y="287" font-size="12" fill="#6b5a1e">概ねこのプロセスで</text>
    <text x="376" y="306" font-size="12" fill="#6b5a1e">検討されることが多い</text>
    <path d="M129 48 L129 84" fill="none" stroke="#5B6068" stroke-width="1.8" marker-end="url(#cah)"/>
    <text x="166" y="71" font-size="11" font-weight="700" fill="#1A6BB0">依拠あり</text>
    <path d="M129 128 L129 164" fill="none" stroke="#5B6068" stroke-width="1.8" marker-end="url(#cah)"/>
    <text x="166" y="151" font-size="11" font-weight="700" fill="#1A6BB0">類似あり</text>
    <path d="M129 208 L129 244" fill="none" stroke="#5B6068" stroke-width="1.8" marker-end="url(#cah)"/>
    <text x="176" y="231" font-size="11" font-weight="700" fill="#1A6BB0">感得できる</text>
    <path d="M122 300 L83 327" fill="none" stroke="#5B6068" stroke-width="1.8" marker-end="url(#cah)"/>
    <text x="40" y="322" font-size="10.5" fill="#5B6068">創作性なし</text>
    <path d="M136 300 L175 327" fill="none" stroke="#5B6068" stroke-width="1.8" marker-end="url(#cah)"/>
    <text x="218" y="322" font-size="10.5" fill="#5B6068">創作性あり</text>
    <path d="M234 28 L298 28" fill="none" stroke="#5B6068" stroke-width="1.5" marker-end="url(#cah)"/>
    <text x="267" y="20" font-size="10" fill="#7a7f85">依拠なし</text>
    <path d="M234 107 L298 107" fill="none" stroke="#5B6068" stroke-width="1.5" marker-end="url(#cah)"/>
    <text x="267" y="99" font-size="10" fill="#7a7f85">類似なし</text>
    <path d="M234 187 L298 187" fill="none" stroke="#5B6068" stroke-width="1.5" marker-end="url(#cah)"/>
    <text x="258" y="150" font-size="12" fill="#7a7f85">アイディア部分の類似</text>
    <text x="258" y="164" font-size="12" fill="#7a7f85">ありふれた表現の類似</text>
  </g>
</svg>
<div class="caption">著作権侵害の判定プロセス（ALC大和先生から）</div>

</div>
</div>

<div class="band">「学習に使う」と「作って使う」は別問題。詳しくは動画4で扱う。</div>

---

<!-- _class: split -->

<div class="page-title">リスク② 入力</div>

## 入力する側の落とし穴：個人情報と「研究上の秘密」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 400 340" width="100%" style="max-height:380px">
  <g text-anchor="middle">
    <rect x="56" y="18" width="248" height="60" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="46" font-size="18" font-weight="800" fill="#5B6068">あなたが入力</text>
    <text x="180" y="68" font-size="16" fill="#5B6068">氏名・連絡先・回答 など</text>
    <text x="180" y="102" font-size="26" fill="#A33818" font-weight="800">↓</text>
    <rect x="56" y="118" width="248" height="60" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="180" y="146" font-size="18" font-weight="800" fill="#A33818">外部サーバへ送信</text>
    <text x="180" y="168" font-size="16" fill="#832D18">多くは事業者の管理下</text>
    <circle cx="304" cy="118" r="16" fill="#A33818"/>
    <text x="304" y="125" font-size="22" font-weight="900" fill="#fff">!</text>
    <text x="180" y="202" font-size="26" fill="#A33818" font-weight="800">↓</text>
    <rect x="56" y="218" width="248" height="60" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
    <text x="180" y="246" font-size="18" font-weight="800" fill="#A33818">保存・学習に利用?</text>
    <text x="180" y="268" font-size="16" fill="#832D18">入力が手元を離れる</text>
    <circle cx="304" cy="218" r="16" fill="#A33818"/>
    <text x="304" y="225" font-size="22" font-weight="900" fill="#fff">!</text>
    <text x="180" y="312" font-size="17" font-weight="800" fill="#A33818">送信・保存の段階で「外」に出る</text>
  </g>
</svg>

</div>
<div class="right">

**個人情報・プライバシー**

- 入力が<span class="red">外部に渡る</span>／保存・学習に使われうる
- 既存の<span class="red">個人情報保護法</span>がそのまま適用される

<span class="ss-tune" style="font-size:18px !important"><div class="callout-green"><span class="hl">オプトアウト設定</span>・<span class="hl">所属組織が契約したAI</span>の利用</div></span>

**研究上の秘密・機密**

- <span class="red">未公開データ・査読情報</span>を外部AIへ入れない
- 入れると“公表扱い”になり<span class="red">秘密性を失う</span>恐れ
- 機密保持や先取権に注意

</div>
</div>

<div class="band">機微情報・未公開データを、外部サービスに「そのまま入力しない」。研究での基本動作。</div>

<div class="attr">出典: 個人情報保護法（個人情報保護委員会） </div>

---

<!-- _class: fig -->

<div class="page-title">AI関連の法整備</div>

## ルールは段階的に整備中。「最新版」を確認する癖を

<div class="fig-area">
<svg viewBox="0 0 960 300" width="100%" style="max-height:330px">
  <line x1="46" y1="150" x2="892" y2="150" stroke="#bbb" stroke-width="3"/>
  <polygon points="916,150 890,137 890,163" fill="#A33818"/>
  <text x="905" y="182" text-anchor="middle" font-size="13" font-weight="700" fill="#A33818">継続</text>
  <!-- 2017 above -->
  <circle cx="110" cy="150" r="8" fill="#E8A06A"/>
  <line x1="110" y1="104" x2="110" y2="150" stroke="#E8A06A" stroke-width="2"/>
  <rect x="20" y="44" width="180" height="60" rx="10" fill="#FFF7EC" stroke="#E8A06A" stroke-width="2"/>
  <text x="110" y="70" text-anchor="middle" font-size="14.5" font-weight="800" fill="#9A5A2A">総務省 AI開発GL案</text>
  <text x="110" y="91" text-anchor="middle" font-size="12.5" fill="#9b7a5c">（国際議論のための）</text>
  <text x="110" y="34" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2017年</text>
  <!-- 2019 below -->
  <circle cx="290" cy="150" r="8" fill="#E08A4F"/>
  <line x1="290" y1="150" x2="290" y2="196" stroke="#E08A4F" stroke-width="2"/>
  <rect x="200" y="196" width="180" height="60" rx="10" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
  <text x="290" y="222" text-anchor="middle" font-size="14.5" font-weight="800" fill="#A8540F">総務省 AI利活用GL</text>
  <text x="290" y="243" text-anchor="middle" font-size="12.5" fill="#9b7a5c">＝AI利活用原則</text>
  <text x="290" y="278" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2019年</text>
  <!-- 2024 above -->
  <circle cx="470" cy="150" r="8" fill="#C2410C"/>
  <line x1="470" y1="104" x2="470" y2="150" stroke="#C2410C" stroke-width="2"/>
  <rect x="380" y="44" width="180" height="60" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="470" y="70" text-anchor="middle" font-size="14.5" font-weight="800" fill="#C2410C">AI事業者GL 統合</text>
  <text x="470" y="91" text-anchor="middle" font-size="12.5" fill="#b07a52">第1.0版</text>
  <text x="470" y="34" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2024年</text>
  <!-- 2025 below -->
  <circle cx="650" cy="150" r="8" fill="#A33818"/>
  <line x1="650" y1="150" x2="650" y2="196" stroke="#A33818" stroke-width="2"/>
  <rect x="560" y="196" width="180" height="60" rx="10" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
  <text x="650" y="222" text-anchor="middle" font-size="14.5" font-weight="800" fill="#A33818">AI推進法（基本法）</text>
  <text x="650" y="243" text-anchor="middle" font-size="12.5" fill="#9b7a5c">罰則なし・活用推進</text>
  <text x="650" y="278" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2025年</text>
  <!-- 2026 above -->
  <circle cx="830" cy="150" r="8" fill="#832D18"/>
  <line x1="830" y1="104" x2="830" y2="150" stroke="#832D18" stroke-width="2"/>
  <rect x="740" y="44" width="180" height="60" rx="10" fill="#FBE7D6" stroke="#832D18" stroke-width="2"/>
  <text x="830" y="70" text-anchor="middle" font-size="14.5" font-weight="800" fill="#832D18">ガイドライン改定</text>
  <text x="830" y="91" text-anchor="middle" font-size="11.5" fill="#9b7a5c">第1.2版・エージェント対応</text>
  <text x="830" y="34" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2026年</text>
</svg>
</div>

<div style="font-size:18px; color:#5B6068; margin-top:6px;">最新版の確認先 → <b>総務省 AIネットワーク社会推進会議</b> のページや<b>内閣府</b>など (開発の場合には、経産省の事業者ガイドラインも)
<span class="src">　出典: 第1.2版・令和8年3月31日 ／ AI推進法・令和7年法律第53号</span></div>

<div class="takeaway">どこに更新されるかを知り、「今どうなっているか」を確認する習慣を。</div>

---

<!-- _class: summary -->

<div class="page-title">動画3のまとめ</div>

## 理念、指針、リスクで覚えてほしい重要な点

<div style="font-weight:800; color:#832D18; font-size:23px; margin:2px 0 -4px;">注意点 ── 判断の物差し</div>

<div class="grid3">

<div class="cbox gray"><div class="h">理念に遡る</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">⛰️</div>
迷ったら上位の<span class="red">理念</span>へ

</div></div>

<div class="cbox gray"><div class="h">指針の3軸</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">🎯</div>
<span class="red">人間中心・透明性・公平性</span>

</div></div>

<div class="cbox gray"><div class="h">主なリスク</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">⚠️</div>
<span class="red">権利侵害・著作権・入力</span>

</div></div>

</div>

<div style="font-weight:800; color:#832D18; font-size:23px; margin:6px 0 -4px;">行動指針 ── 研究での実践</div>

<div class="grid3">

<div class="cbox mid"><div class="h">① 入れない</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">🔒</div>
機微情報・未公開データは<span class="red">外部AIに入れない</span>

</div></div>

<div class="cbox mid"><div class="h">② 開示する</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">📣</div>
使ったら、どう使ったかを<span class="red">開示する</span>

</div></div>

<div class="cbox mid"><div class="h">③ 責任は人</div><div class="b" style="font-size:22px;">

<div style="font-size:36px;text-align:center;line-height:1;">🧑</div>
最終的な判断と<span class="red">責任は人</span>が負う

</div></div>

</div>

<div class="band">次は、その生成AIが「中身でどう動くのか」（動画4・仕組みの超初歩）へ。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 4</div>

# 仕組みの超初歩

## LLMは「次のトークン」を予測し続けているだけ

---

<!-- _class: fig -->

<div class="page-title">LLMの正体</div>

## 大規模言語モデル＝「次トークン予測」器<span class="important">核</span>

<div class="figwrap"><img src="./src/fig04c-nexttoken-progression.png" alt="入力『吾輩は猫である。』に続く次トークンの確率上位5件。改行・猫・文末トークン・空白・そして が並ぶ棒グラフ"></div>

- 入力「吾輩は猫である。」の次のトークンの確率。図はサイバーエージェントのモデルの実出力。
- <span class="red">トークン</span>＝最小単位。単語やその一部のこともある（図の「猫」「ネコ」）
- 図の<span class="mono">&lt;|endoftext|&gt;</span>＝「ここで文章終わり」の特別な印、<span class="mono">\n</span>＝改行記号。終端も<span class="red">確率的に</span>決まる。

<div class="attr">出典: Vaswani et al., "Attention Is All You Need" (2017) </div>

---

<!-- _class: fig -->

<div class="page-title">自己回帰生成</div>

## 1トークン出すたびに、自分の出力を入力に足し直す

<div class="fig-area">
<svg viewBox="0 0 990 430" width="100%" style="max-height:380px">
  <defs>
    <marker id="arh" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#A33818"/></marker>
  </defs>
  <g font-family="sans-serif" text-anchor="middle">
    <text x="165" y="22" font-size="17" font-weight="800" fill="#5B6068">計算1回目</text>
    <text x="495" y="22" font-size="17" font-weight="800" fill="#5B6068">計算2回目</text>
    <text x="825" y="22" font-size="17" font-weight="800" fill="#5B6068">計算3回目</text>
    <rect x="75" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#832D18" stroke-width="1.5"/>
    <text x="165" y="58" font-size="18" font-weight="700" fill="#832D18">“吾輩は”</text>
    <rect x="405" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#832D18" stroke-width="1.5"/>
    <text x="495" y="58" font-size="18" font-weight="700" fill="#832D18">“吾輩は猫”</text>
    <rect x="735" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#832D18" stroke-width="1.5"/>
    <text x="825" y="58" font-size="18" font-weight="700" fill="#832D18">“吾輩は猫で”</text>
    <rect x="90" y="90" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="165" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="420" y="90" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="495" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="750" y="90" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="825" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="90" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="165" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="165" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="420" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="495" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="495" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="750" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="825" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="825" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="90" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="165" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="420" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="495" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="750" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="825" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="90" y="280" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="165" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="420" y="280" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="495" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="750" y="280" width="150" height="40" rx="7" fill="#A33818" stroke="#832D18" stroke-width="1.5"/>
    <text x="825" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="75" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="165" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩”</text>
    <rect x="405" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="495" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩は”</text>
    <rect x="735" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="825" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩は猫”</text>
    <path d="M165 338 L165 322" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 280 L165 264" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 224 L165 208" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 148 L165 132" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 90 L165 74" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 338 L495 322" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 280 L495 264" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 224 L495 208" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 148 L495 132" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 90 L495 74" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 338 L825 322" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 280 L825 264" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 224 L825 208" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 148 L825 132" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 90 L825 74" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M240 110 L335 110 L335 300 L416 300" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M570 110 L665 110 L665 300 L746 300" fill="none" stroke="#A33818" stroke-width="2" marker-end="url(#arh)"/>
    <text x="375" y="200" font-size="13" font-weight="700" fill="#A33818">出力を</text>
    <text x="375" y="218" font-size="13" font-weight="700" fill="#A33818">次の入力へ</text>
    <text x="705" y="200" font-size="13" font-weight="700" fill="#A33818">出力を</text>
    <text x="705" y="218" font-size="13" font-weight="700" fill="#A33818">次の入力へ</text>
  </g>
</svg>
</div>

- 生成は<span class="red">自己回帰</span>：①分布を出す→②1つ選ぶ→③末尾に連結→①へ、をひたすら反復
- 入力が「吾輩は猫である。」まで伸びると分布は様変わりし、<span class="red">文末トークン</span>が上位に出る
  - 但し、線形代数的には全部を都度、毎回計算するのでなく、洗練された式で出せる。 



---

<!-- _class: fig -->

<div class="page-title">サンプリング</div>

## 「分布から1つ選ぶ」やり方が、出力の個性を決める

<div class="figwrap"><img src="./src/fig04b-nexttoken-context.png" alt="コンテキストを与えた場合の次トークン確率上位5件。空白・名前・改行・不等号・猫 が並ぶ棒グラフ"></div>

- 常に最大確率を選ぶ<span class="red">貪欲法</span>は無難だが単調。実際は確率に応じて<span class="red">サンプリング</span>する。
- 抽選だから同じ入力でも出力は毎回変わる。その振れ幅を決めるつまみが<span class="red">温度(temperature)</span>
- <span class="red">温度（出力のばらつきを決めるつまみ）</span>＝低いほど堅実・反復的、高いほど多様だが脱線しやすい<div style="font-size:18px; color:#5B6068; margin-top:6px;">cf. 気になる人は、pythonのTransformerの引数を調べてみて下さい。</div><div class="takeaway">毎回違うのはバグではない。分布からの「抽選」を設定で揺らがせているだけ。</div>

---

<!-- _class: split -->

<div class="page-title">だから“それっぽい”</div>

## 流暢に書けることと、中身が正しいことは別物

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <text x="180" y="28" font-size="17" fill="#832D18" font-weight="700">左から1トークンずつ確定していく</text>
    <rect x="30" y="46" width="74" height="46" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="67" y="76" font-size="22" font-weight="800" fill="#A33818">吾輩</text>
    <text x="124" y="76" font-size="22" fill="#bbb">は…？</text>
    <rect x="30" y="108" width="74" height="46" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="67" y="138" font-size="22" font-weight="800" fill="#A33818">吾輩</text>
    <rect x="108" y="108" width="120" height="46" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="168" y="138" font-size="22" font-weight="800" fill="#A33818">は猫で</text>
    <text x="248" y="138" font-size="22" fill="#bbb">…？</text>
    <text x="180" y="186" font-size="26" fill="#A33818" font-weight="800">↓</text>
    <rect x="20" y="200" width="320" height="80" rx="10" fill="#fff" stroke="#5B6068" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="180" y="232" font-size="18" font-weight="700" fill="#333">流暢な文は必ず完成する</text>
    <text x="180" y="260" font-size="18" fill="#832D18" font-weight="700">— だが中身が正しい保証はない</text>
  </g>
</svg>

</div>
<div class="right">

- 言語系の生成AIは、ルール集や、正しいデータ集ではなく、流暢さを鍛えたモデルである。
- 文法的に滑らかでも、<span class="red">事実かどうかは別問題</span>。断定口調で堂々と誤りうる

<div class="cbox deep"><div class="h" style="font-size:26px">ハルシネーションは構造上の帰結</div><div class="b">

- <span class="red">今回</span>：起きる理由＝「尤もらしさ」を最大化する仕組みは<span class="red">真偽を直接は照合しない</span>から
- <span class="red">動画5</span>：どう対処するか（原因と対策の詳細）

</div></div>

</div>
</div>

<div class="takeaway">流暢さに騙されない。中身が正しいかは、最後に人が必ず確かめる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 5</div>

# 現在の生成AIの限界

## 仕組みから導かれる「できない・苦手」を、原理で理解する

---

<!-- _class: fig -->

<div class="page-title">なぜ限界を学ぶのか</div>

## 「使わない理由」ではなく、「どこが人がすべきか」を決めるために

<div class="fig-area">
<svg viewBox="0 0 990 320" width="100%" style="max-height:340px">
  <rect x="40" y="30" width="420" height="110" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="250" y="66" text-anchor="middle" font-size="19" font-weight="800" fill="#5B6068">よくある誤解</text>
  <text x="250" y="98" text-anchor="middle" font-size="16" fill="#555">限界がある＝信用できない</text>
  <text x="250" y="120" text-anchor="middle" font-size="16" fill="#555">＝だから研究では使わない</text>
  <text x="490" y="92" text-anchor="middle" font-size="34" font-weight="800" fill="#A33818">→</text>
  <rect x="530" y="30" width="420" height="110" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
  <text x="740" y="66" text-anchor="middle" font-size="19" font-weight="800" fill="#A33818">この動画の立場</text>
  <text x="740" y="98" text-anchor="middle" font-size="16" fill="#555">限界を原理で知る + 倫理の考え方を知る</text>
  <text x="740" y="120" text-anchor="middle" font-size="16" fill="#555">=適切に研究へのAIの影響を知り、活用する</text>
</svg>
</div>

---

<!-- _class: fig -->

<div class="page-title">ハルシネーション</div>

## なぜ“もっともらしい嘘”が、自信満々で出てくるのか

<div class="fig-area">
<svg viewBox="0 0 990 366" width="100%" style="max-height:380px">
  <rect x="20" y="55" width="200" height="100" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
  <text x="120" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#A33818">① 次の語を予測</text>
  <text x="120" y="120" text-anchor="middle" font-size="16" fill="#555">直前の文から、各候補に</text>
  <text x="120" y="140" text-anchor="middle" font-size="16" fill="#555">確率を割り当てる</text>
  <text x="240" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#A33818">→</text>
  <rect x="260" y="55" width="200" height="100" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
  <text x="360" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#A33818">② ありそうな語を選ぶ</text>
  <text x="360" y="120" text-anchor="middle" font-size="16" fill="#555">“もっともらしい”語を</text>
  <text x="360" y="140" text-anchor="middle" font-size="16" fill="#555">次々につなげる</text>
  <text x="480" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#A33818">→</text>
  <rect x="500" y="55" width="220" height="100" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="610" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">③ 事実と照合しない</text>
  <text x="610" y="120" text-anchor="middle" font-size="16" fill="#555">出力内容が本当か</text>
  <text x="610" y="140" text-anchor="middle" font-size="16" fill="#555">確認しない/スルーされる</text>
  <text x="740" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#A33818">→</text>
  <rect x="760" y="55" width="210" height="100" rx="12" fill="#832D18"/>
  <text x="865" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">④ 誤りも“断言”</text>
  <text x="865" y="120" text-anchor="middle" font-size="16" fill="#fff" opacity="0.92">流暢なまま、堂々と</text>
  <text x="865" y="140" text-anchor="middle" font-size="16" fill="#fff" opacity="0.92">間違える</text>
  <rect x="120" y="210" width="750" height="70" rx="12" fill="#A33818"/>
  <text x="495" y="244" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">＝ ハルシネーション（もっともらしい捏造）</text>
  <text x="495" y="268" text-anchor="middle" font-size="16" fill="#fff" opacity="0.94">「正しさ」を確かめる役割が最初からいない</text>
  <line x1="495" y1="150" x2="495" y2="208" stroke="#A33818" stroke-width="2"/>
  <polygon points="495,210 489,200 501,200" fill="#A33818"/>
  <rect x="120" y="296" width="750" height="58" rx="12" fill="#FFF7EC" stroke="#E08A4F" stroke-width="2"/>
  <text x="495" y="320" text-anchor="middle" font-size="16" font-weight="800" fill="#832D18">＋ もう一つの要因：知識のカットオフ</text>
  <text x="495" y="343" text-anchor="middle" font-size="14" fill="#7a5a3a">学習した時点より新しいことは知らない。最新の話題も“それらしく”答えてしまう</text>
</svg>
</div>

<div class="band">ハルシネーションは“バグ”ではなく、次トークン予測という<span class="red">仕組みの帰結</span>。</div>

<div class="attr">出典: Vaswani et al., Attention Is All You Need (2017) </div>

---

<!-- _class: split -->

<div class="page-title">なぜ原理的に残るのか〔発展〕</div>

## 訓練も評価も、“当てずっぽう”を褒めてしまうから

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <rect x="20" y="40" width="340" height="120" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
  <text x="40" y="80" font-size="19" font-weight="800" fill="#A33818">① 訓練が“ありそう”を報いる</text>
  <text x="40" y="112" font-size="17" fill="#555">真偽は最適化の対象外。</text>
  <text x="40" y="138" font-size="17" fill="#555">“もっともらしさ”だけを学ぶ</text>
  <rect x="20" y="180" width="340" height="120" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="40" y="220" font-size="19" font-weight="800" fill="#5B6068">② 評価が“推測”を優遇する</text>
  <text x="40" y="252" font-size="17" fill="#555">「分からない」を減点する採点</text>
  <text x="40" y="278" font-size="17" fill="#555">では、推測した方が高得点</text>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">試験にたとえると</div><div class="b">

- 空欄は<b>0点</b>、勘で埋めて当たれば<b>加点</b>。だから勘でも埋めた方が得
- 同じ理由でモデルも、不確実でも<b>自信ありげに断言</b>する方へ寄っていく
- 技術で頻度は下げられても、評価の設計を変えない限り<b>原理的に残る</b>

</div></div>

</div>
</div>

<div class="takeaway">「たまに間違う」ではなく「正しさを判定する仕組みが最初から無い」と捉える。</div>

<div class="attr">出典: Kalai et al., Why Language Models Hallucinate (OpenAI, 2025／Nature, 2026) </div>

---

<!-- _class: split -->

<div class="page-title">対策：プロンプトで「棄権」を許す</div>

## 参考： 採点ルールを書くだけで、知ったかぶりが減る、らしい

<div class="split-body">
<div class="left">

<div class="cbox mid"><div class="h">なぜ効くのか</div><div class="b">

- 既定は「空欄＝0点／勘で当たれば加点」だから<span class="red">推測した方が得</span>
- 採点を変える：<span class="red">不正解にマイナス</span>・棄権は0点
- 「わからない」が安全になり、<span class="red">無理な断言が減る</span>

</div></div>

<div class="callout-gray">「自信度（確信の度合い）も添えて」と書くのも有効</div>

</div>
<div class="right">

<div style="background:#F5F6F7; border:1px solid #d9dbdf; border-left:5px solid #5B6068; border-radius:10px; padding:14px 18px; font-size:18px; line-height:1.7;"><b style="color:#5B6068;">プロンプト例</b><br>以下の質問に答えてください。<br>・正解：<b style="color:#1A6BB0;">＋1点</b><br>・不正解（知ったかぶり）：<b style="color:#A33818;">−1点</b><br>・「わかりません」と棄権：<b>0点</b><br><span style="color:#7a6a5c; font-size:15px;">※不確実なときは、無理に答えず「わかりません」と。</span><br><br>[質問]　○○の誕生日はいつですか？</div>

</div>
</div>

<div class="takeaway">「間違いを避け、棄権を許す」基準を追加で減少、しかし完璧ではない。</div>

<div class="attr">出典: Kalai et al., Why Language Models Hallucinate (Nature, 2026) <a href="https://www.nature.com/articles/s41586-026-10549-w">s41586-026-10549-w</a></div>

---

<!-- _class: split -->

<div class="page-title">実演してみる</div>

## 実在しない文献を、書式まで完璧に“作って”しまう

<div class="split-body">
<div class="left">

<svg viewBox="0 0 420 290" width="100%" style="max-height:290px">
  <rect x="6" y="6" width="408" height="278" rx="10" fill="#fff" stroke="#cdd1d6" stroke-width="1.5"/>
  <rect x="6" y="6" width="408" height="34" rx="10" fill="#EDEEF0"/>
  <circle cx="24" cy="23" r="5" fill="#E08A4F"/><circle cx="40" cy="23" r="5" fill="#d7dbe0"/><circle cx="56" cy="23" r="5" fill="#d7dbe0"/>
  <text x="210" y="28" text-anchor="middle" font-size="16" fill="#5B6068" font-weight="700">「重要論文を、著者・年・DOI付きで」</text>
  <g font-family="Menlo,Consolas,monospace">
    <text x="24" y="74" font-size="18" fill="#1c2733">K. Smith (2018)</text>
    <text x="24" y="100" font-size="16" fill="#5B6068">DOI: 10.1007/s00521-…</text>
  </g>
  <rect x="18" y="128" width="384" height="120" rx="9" fill="#FBE7D6" stroke="#A33818" stroke-width="3"/>
  <text x="36" y="166" font-size="20" fill="#832D18" font-weight="800">この論文もDOIも</text>
  <text x="36" y="196" font-size="20" fill="#832D18" font-weight="800">存在しない（架空）</text>
  <text x="36" y="228" font-size="16" fill="#A33818" font-weight="700">→ DBで検索しても見つからない</text>
  <text x="210" y="272" text-anchor="middle" font-size="16" fill="#5B6068">書式は完璧。中身は裏取りしないと分からない</text>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">何が起きているか</div><div class="b">

- 架空の<b>著者・年・DOI</b>を、書式まで完璧に出力（DOI＝論文ごとの識別番号）
- 専門的な話題ほど“それっぽさ”が増し、<span class="red">詳しくない分野ほど見抜けない</span>
- 引用・数値・固有名は、原典やDB（一次情報）で<span class="red">一件ずつ裏取り</span>

</div></div>

</div>
</div>

<div class="takeaway">引用・数値・固有名は、出典を自分で確認してから使う。</div>

---

<!-- _class: fig -->

<div class="page-title">生成画像の均質バイアス</div>

## “平均”を当てにいく性質は、画像でもバイアスを生む

<div class="fig-area">
<div class="figwrap"><img src="./src/fig03-ai-bias-faces.jpg" alt="生成AIが作った医療従事者の顔画像。多くが似た年齢・髪型・雰囲気に偏り、多様性が乏しい均質バイアスの例"></div>
<div class="caption" style="margin-left:48px;">いちばん“ありそう”な像を選ぶ仕組みなので、<br>AIが学習時に触れた「典型」から外れた人ほど出にくい。</div>
</div>

<div class="attr">出典: <a href="https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/">総務省「上手にネットと付き合おう」生成AI特集</a></div>

<div class="takeaway">「もっともらしさ」の最大化は、多様性・少数事例・外れ値を取りこぼす。</div>

---

<!-- _class: split -->

<div class="page-title">研究現場に効く三つの限界</div>

## 前提・検証・統合──ここは人が重要であり続ける領域

<div class="split-body">
<div class="left">

<div class="cbox mid"><div class="h">④ フレーム問題</div><div class="b" style="min-height:200px">

- 人は<span class="red">関係ない事</span>を捨てて、考える範囲を切れる
- 例：論文に「地球の自転」までは持ち込まない
- AIは言葉にされない<span class="red">暗黙の前提</span>に弱い。前提(コンテキスト)と範囲(フレーム)を与えるのは人

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">⑤ コードの完全性</div><div class="b" style="min-height:200px">

- <span class="red">動く≠正しい</span>。空配列・欠損(NaN)などの境界条件を黙って外す
- エラーが出なくても誤った数値のまま結論へ進む
- だから<span class="red">テスト・検証は人</span>が担保する

</div></div>

</div>
</div>

<div class="band">⑥ 全体最適の壁：部分は最適でも全体は<span class="red">平均的</span>に寄る。<span class="red">問いの設定と統合</span>こそ人の付加価値。<br><span style="font-size:17px; font-weight:400; color:#7a5a3a;">出典: Doshi &amp; Hauser「個の創造性は上がるが集団の多様性は下がる」<a href="https://www.science.org/doi/10.1126/sciadv.adn5290" style="color:#1A6BB0;">Science Advances, 2024</a></span></div>

---

<!-- _class: summary -->

<div class="page-title">限界の地図とまとめ</div>

## 限界の裏返しが、“人がやるべきこと”

<div class="grid2">

<div class="cbox mid"><div class="h">出力は必ず人が検証する</div><div class="b">

- ①ハルシネーション・②フェイク・③均質バイアス＝AIの出力そのものを疑う
- 引用・数値・固有名・コードは<span class="red">一次情報で裏取り</span>
- 「本物らしい」を真正性の根拠にせず<span class="red">発信源</span>を辿る

</div></div>

<div class="cbox blue"><div class="h">問い・前提・統合は人の役割!?</div><div class="b">

- ④前提と範囲の設定・⑤テストと検証・⑥問いと統合＝人が握る
- 平均へ寄る出力を<span class="red">束ね</span>、外れ値を補い、面白い問いを立てる
- 共通項：AIは「正しさ」も「文脈」も<span class="red">内蔵していない</span>

</div></div>

</div>

<div class="takeaway">限界を知るほど、AIは“怖い道具”から“使える道具”に変わる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 6</div>

# 研究倫理の概観

## AIの前に、まず「研究の誠実さ」という土台

---

<!-- _class: summary -->

<div class="page-title">なぜ倫理が必要か</div>

## 科学は「信頼」を基盤に成り立っている

<div class="qbox">
科学は、信頼を基盤として成り立っています。科学者はお互いの研究について、注意深くデータを集め、適切な解析手法を使い、その結果を正しく報告しているものと<span class="red">信じています</span>。また、社会の人たちは「科学研究によって得られた結果は研究者の誠実で正しい考察によるもの」と信じています。
<span class="ans">もし、こうした信頼が薄れたり失われたりすれば、<span class="red">科学そのものがよって立つ基盤が崩れる</span>ことになります。</span>
</div>

<div class="band">科学者自らが<span class="red">誠実な研究のあるべき姿</span>を考え・行動し、さらに<span class="red">次の世代を担う後進を育てる</span>ことにより、科学を健全に発展させることができる。</div>

<div class="attr">出典: 日本学術振興会『科学の健全な発展のために ― 誠実な科学者の心得』（2015）</div>

---

<!-- _class: fig -->

<div class="page-title">インテグリティ</div>

## アカデミック・インテグリティ (学問の誠実性)

<div class="fig-area">
<svg viewBox="0 0 990 330" width="100%" style="max-height:340px">
  <!-- definition band -->
  <rect x="120" y="6" width="750" height="46" rx="10" fill="#832D18"/>
  <text x="495" y="38" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">学問における誠実さ（Academic Integrity）── 6つの価値</text>
  <line x1="495" y1="52" x2="495" y2="68" stroke="#832D18" stroke-width="2"/>
  <polygon points="495,72 489,62 501,62" fill="#832D18"/>
  <!-- six pillars (ICAI fundamental values) — 3×2 grid, JP/EN on separate lines -->
  <g text-anchor="middle">
    <!-- row 1 -->
    <rect x="60"  y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="100" y="120" font-size="30">🔍</text>
    <text x="201" y="118" font-size="22" font-weight="800" fill="#832D18">① 正直</text>
    <text x="201" y="142" font-size="18" font-weight="700" fill="#A33818">Honesty</text>
    <text x="201" y="166" font-size="16" fill="#5B6068">事実を曲げず負も隠さない</text>
    <rect x="354" y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="394" y="120" font-size="30">🤝</text>
    <text x="495" y="118" font-size="22" font-weight="800" fill="#832D18">② 信頼</text>
    <text x="495" y="142" font-size="18" font-weight="700" fill="#A33818">Trust</text>
    <text x="495" y="166" font-size="16" fill="#5B6068">手順を開示し検証できる</text>
    <rect x="648" y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="688" y="120" font-size="30">⚖️</text>
    <text x="789" y="118" font-size="22" font-weight="800" fill="#832D18">③ 公正</text>
    <text x="789" y="142" font-size="18" font-weight="700" fill="#A33818">Fairness</text>
    <text x="789" y="166" font-size="16" fill="#5B6068">貢献を正しく配分する</text>
    <!-- row 2 -->
    <rect x="60"  y="190" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="100" y="228" font-size="30">🙇</text>
    <text x="201" y="226" font-size="22" font-weight="800" fill="#832D18">④ 敬意</text>
    <text x="201" y="250" font-size="18" font-weight="700" fill="#A33818">Respect</text>
    <text x="201" y="274" font-size="16" fill="#5B6068">引用で先人に謝意を示す</text>
    <rect x="354" y="190" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="394" y="228" font-size="30">📌</text>
    <text x="495" y="226" font-size="22" font-weight="800" fill="#832D18">⑤ 責任</text>
    <text x="495" y="250" font-size="18" font-weight="700" fill="#A33818">Responsibility</text>
    <text x="495" y="274" font-size="16" fill="#5B6068">道具任せにせず引き受ける</text>
    <rect x="648" y="190" width="282" height="98" rx="12" fill="#F3DCC8" stroke="#832D18" stroke-width="2"/>
    <text x="688" y="228" font-size="30">💪</text>
    <text x="789" y="226" font-size="22" font-weight="800" fill="#832D18">⑥ 勇気</text>
    <text x="789" y="250" font-size="18" font-weight="700" fill="#A33818">Courage</text>
    <text x="789" y="274" font-size="16" fill="#5B6068">声を上げ誤りを正す</text>
  </g>
  <text x="495" y="316" text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">行動の原則 ── ⑥勇気は後の版で追加</text>
</svg>
</div>

<div class="attr">出典: ICAI, The Fundamental Values of Academic Integrity (3rd ed.) <a href="https://www.academicintegrity.org/aws/ICAI/asset_manager/get_file/911282?ver=1">academicintegrity.org（PDF）</a></div>

<div class="takeaway">この6価値はAIの有無によらず不変。土台が崩れれば研究は成り立たない。</div>

---

<!-- _class: summary -->

<div class="page-title">予防倫理と志向倫理</div>

## 「してはならない」を守り、その上で「よりよい研究」へ

<div class="grid2" style="margin-top:10px">

<div class="cbox mid"><div class="h">予防倫理（preventive ethics）</div><div class="b">

- 「<span class="red">してはならないこと</span>」を守る ─ 不正・被害を防ぐ
- FFP・QRPの回避、規範・規則の遵守
- 多くの人が「倫理」と聞いて最初に思う領域

</div></div>

<div class="cbox blue"><div class="h">志向倫理（aspirational ethics）</div><div class="b">

- 規則を超え、<span class="red">社会のwell-being</span>に活かす
- 研究が社会にどう貢献できるかを考え行動<br>＝<span class="red">「善き科学者」</span>
- <span class="red">第2版で新たに重視</span>された視点

</div></div>

</div>

<div class="band">両者は<span class="red">相互補完</span> ── 不正を避けるだけでなく、「何のために研究するか」を主体的に考える。</div>

<div class="attr">出典: 日本学術振興会『科学の健全な発展のために─誠実な科学者の心得［第2版］』（2025） <a href="https://www.jsps.go.jp/j-kousei/rinri.html">jsps.go.jp</a></div>

---

<!-- _class: summary -->

<div class="page-title">研究不正とQRP</div>

## 「越えてはならない一線(FFP)」と、その手前の「グレー(QRP)」

<div class="fig-area" style="margin:2px 0 6px">
<svg viewBox="0 0 980 64" width="100%" style="max-height:70px">
  <defs><linearGradient id="ffpspec" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2E8B57"/><stop offset="0.5" stop-color="#E0A53F"/><stop offset="1" stop-color="#832D18"/></linearGradient></defs>
  <rect x="20" y="28" width="940" height="20" rx="10" fill="url(#ffpspec)"/>
  <text x="24" y="20" font-size="15" font-weight="800" fill="#2E8B57">誠実な研究（理想）</text>
  <text x="490" y="20" font-size="15" font-weight="800" fill="#9A6800" text-anchor="middle">QRP ＝ 好ましくない研究行為</text>
  <text x="956" y="20" font-size="15" font-weight="800" fill="#832D18" text-anchor="end">研究不正＝FFP（最悪）</text>
</svg>
</div>

<div class="grid2">

<div class="cbox deep"><div class="h">FFP ── 越えてはならない一線（特定不正行為）</div><div class="b">

- <span class="red">捏造</span>(Fabrication)／<span class="red">改ざん</span>(Falsification)／<span class="red">盗用</span>(Plagiarism)
- 世界共通の研究不正。日本では国が定義する<span class="red">特定不正行為</span> <span class="src">（文科省2014）</span>

</div></div>

<div class="cbox mid"><div class="h">QRP ── 信頼を侵すアウトゾーン</div><div class="b">

- オーサーシップ問題／研究記録の不適切な管理／データ未保管・提供拒絶
- 不十分な指導・学生の搾取／成果の不誠実な発表／申請での誇張
- <span class="red">蘭2020調査：約半数</span>が過去3年でQRPを経験

</div></div>

</div>

<div class="band">FFP、QRPも研究の信頼を侵す。 <span class="src">（出典: 日本学術振興会『…［第2版］』2025 ／ 文科省ガイドライン2014）</span></div>

---

<!-- _class: summary -->

<div class="page-title">この章のまとめ</div>

## AIと研究倫理 ── この2点を覚える

<div class="grid2" style="margin-top:14px">

<div class="cbox mid"><div class="h">① 誠実性はAIと無関係に必須</div><div class="b">

正直・信頼・公正・敬意・責任・勇気の<span class="red">6つの価値</span>が土台。AIを使っても、ここは<span class="red">変わらない</span>。

</div></div>

<div class="cbox deep"><div class="h">②「AIがやった」は言い訳にならない</div><div class="b">

不正かは<span class="red">行為そのもの</span>で判定。責任は<span class="red">利用した研究者本人</span>が負う。

</div></div>

</div>

<div class="band">守る（<span class="red">予防倫理</span>）だけでなく、社会のwell-beingに貢献する（<span class="red">志向倫理</span>）。</div>

<div class="statement" style="margin-top:18px;">道具は変わっても、誠実さの基準は、変わらない。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 7</div>

# 研究倫理 × 生成AI

## 投稿先のポリシーを起点に、研究の段階ごとに判断する

---

<!-- _class: summary -->

<div class="page-title">本日の見取り図</div>

## ポリシーを「研究ライフサイクルの<span class="red">4つのステージ</span>」で読む

- <span class="red">(A) 研究の実施</span> ── コード・データ生成・分析・文献検索など、中身をつくる段階
- <span class="red">(B) 原稿の作成</span> ── 推敲・草稿・翻訳・図表など、原稿に仕上げる段階
- <span class="red">(C) 査読</span> ── 投稿された原稿を評価する側に立つ段階
- <span class="red">(D) 査読への対応・改訂</span> ── 受け取った査読に応答し改訂する段階

<div class="band">同じ「AIを使う」でも、どの次元にいるかで可否が逆転する。まず「自分は今どこか」を意識する。</div>

<div class="attr">出典: Science Journals「Guidelines for AI use」をもとに研究ライフサイクルで整理 <a href="https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf">science.org（PDF）</a></div>

---

<!-- _class: fig -->

<div class="page-title">Science 公式ガイドライン</div>

## ステージで可否が変わる ── <span class="red">生成は開示／査読は原稿を入れない</span> 

<table class="dtbl" style="font-size:22px">
<tr><th>次元</th><th>代表的な作業と可否</th></tr>
<tr><td class="l">(A) 研究の実施</td><td class="l">文献検索は可／コード・データ生成は<span class="red">条件付き可</span></td></tr>
<tr><td class="l">(B) 原稿の作成</td><td class="l">校正は可／執筆・翻訳は<span class="red">条件付き可</span>／<span class="hl-dark" style="color:#832D18;font-weight:800">図の生成は不可</span></td></tr>
<tr><td class="l">(C) 査読</td><td class="l"><span class="hl-dark" style="color:#832D18;font-weight:800">原稿をLLMに入れて査読生成は不可</span>／言語推敲のみ条件付き可</td></tr>
<tr><td class="l">(D) 対応・改訂</td><td class="l"><span class="hl-dark" style="color:#832D18;font-weight:800">原稿をLLMに入れて改訂は不可</span>／言語推敲のみ件付き可</td></tr>
</table>

<div style="font-size:20px; margin:6px 0;">大前提：AI生成物を自分の研究のように見せるのは、全段階で<span class="hl-dark" style="color:#832D18;font-weight:800">不可</span>。「条件付き可」はすべて<span class="red">開示が条件</span></div>

<div class="attr">出典: Science Journals「Guidelines for AI use」 <a href="https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf">science.org（PDF）</a>（投稿時に最新版を確認）</div>

<div class="takeaway">中身の生成は開示すれば可、図生成は不可。<br>査読・改訂は「原稿をLLMに入れる」こと自体が不可。</div>

---

<!-- _class: split -->

<div class="page-title">Nature / NeurIPS と査読の理由</div>

## 他媒体も同様 ── <span class="red">著者性・開示・図、そして査読は特に厳しい</span>

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:19px">
<tr><th></th><th>Nature<br><span class="src" style="white-space:normal;">（出典: Nature 編集方針）</span></th><th>NeurIPS 2025<br><span class="src" style="white-space:normal;">（出典: NeurIPS 2025<br> LLMポリシー）</span></th></tr>
<tr><td class="l">著者性</td><td>AIは著者に<br>できない</td><td>責任は著者</td></tr>
<tr><td class="l">開示</td><td>Methodsに記載<br></td><td>AI利用を開示</td></tr>
<tr><td class="l">図の<br>生成</td><td>原則不可<br>(例外あり)</td><td>—</td></tr>
</table>

</div>
<div class="right">

<div class="cbox deep"><div class="h">査読・改訂が特に厳しい2つの理由</div><div class="b">

- <span class="red">機密保持</span>：未公開の原稿・査読を外部LLMに入れると第三者に渡る・学習に使われる。
- <span class="red">評価の主体</span>：査読は専門家の判断そのもの。外注すれば査読の意味が崩れる。

</div></div>

- だから許されるのは<span class="red">自分の言葉の推敲だけ</span>（入力が学習に使われない／ツール明記）

</div>
</div>

<div class="takeaway">「著者はAIにしない・使ったら開示・図は慎重」は共通。査読は原稿を入れない。</div>

---

<!-- _class: summary -->

<div class="page-title">この章のまとめ</div>

## 迷えば安全を取る <span class="important">核心</span>

- <span class="red">① 人間の責任</span> ── 正確性・引用・分析は著者が全責任。「AIが出した」は免責にならず人が検証。
- <span class="red">② 透明性（開示）</span> ── どの段階で・何に・どのモデルかを記録し、媒体の指定する場所に書く。
- <span class="red">③ 著者性</span> ── AIは著者になれない。著者は人間、AIは「使った道具」として記述。

<div class="band">上記の3軸は変わらないと思われる。迷ったら安全を取る。</div>

<div class="qbox">あなたの研究で、AIの使用を「開示する／しない」を分ける境目はどこですか？<br><span style="font-weight:400; font-size:21px;">ヒント：単なる誤字校正＝不要／文章・コード・図の生成＝開示、が目安。</span> <span class="ans">（第4回などで、各自、答えを見つけます）</span></div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 8</div>

# 生成AI時代の研究はどこへ／分野差

## “使い方”はまだ分かれている ─ RAG・エージェントと、加速と注意の両面

---

<!-- _class: split -->

<div class="page-title">RAG</div>

## 検索拡張生成＝“外部知識を引いてから答える”

<div class="band">RAG＝検索拡張生成。答える前に外部資料を<span class="red">検索（Retrieval）</span>し、それを<span class="red">根拠に生成（Generation）</span>する仕組み。例：NotebookLM</div>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="40" y="14" width="300" height="44" rx="10" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="190" y="41" font-size="16" font-weight="800" fill="#A33818">質問・調べたい</text>
    <text x="190" y="74" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="40" y="86" width="300" height="50" rx="10" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="190" y="108" font-size="16" font-weight="800" fill="#832D18">① 検索する（Retrieval）</text>
    <text x="190" y="127" font-size="16" fill="#5B6068">論文DB・社内資料・Web</text>
    <text x="190" y="152" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="40" y="164" width="300" height="48" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="190" y="185" font-size="16" font-weight="800" fill="#5B6068">② 関連文書を取得</text>
    <text x="190" y="203" font-size="16" fill="#5B6068">根拠になりそうな箇所を抜粋</text>
    <text x="190" y="228" font-size="22" font-weight="800" fill="#A33818">↓</text>
    <rect x="40" y="240" width="300" height="64" rx="12" fill="#A33818" stroke="#832D18" stroke-width="2.5"/>
    <text x="190" y="264" font-size="16" font-weight="800" fill="#fff">③ 根拠付きで生成（Generation）</text>
    <text x="190" y="286" font-size="16" fill="#FBE7D6">「○○によると…」＋出典を提示</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">RAGの要点</div><div class="b">

- 丸暗記でなく<span class="red">引いて答える</span>仕組み
- <span class="red">出典を提示</span>でき裏取りしやすい
- 自分の資料に<span class="red">紐づけて</span>応答

</div></div>

引いた資料の正しさは人が判断。出典の<span class="red">捏造（偽の引用）やニュアンスが合わないこと</span>も起こる。

</div>
</div>


---

<!-- _class: split -->

<div class="page-title">コーディング/エージェント</div>

## 指示→生成→検証→修正を、自律的に回す

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:380px">
  <g text-anchor="middle">
    <rect x="70" y="16" width="240" height="46" rx="10" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
    <text x="190" y="38" font-size="16" font-weight="800" fill="#832D18">自然言語の指示</text>
    <text x="190" y="55" font-size="16" fill="#5B6068">「○○を解析するコードを書いて」</text>
    <!-- loop -->
    <rect x="50" y="92" width="280" height="156" rx="14" fill="#FBF4EF" stroke="#A33818" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="190" y="86" font-size="16" font-weight="800" fill="#832D18">自律ループ</text>
    <rect x="80" y="106" width="220" height="40" rx="9" fill="#E08A4F"/>
    <text x="190" y="131" font-size="16" font-weight="800" fill="#3a1d0a">① コード生成</text>
    <text x="190" y="160" font-size="18" font-weight="800" fill="#A33818">↓</text>
    <rect x="80" y="168" width="220" height="40" rx="9" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="190" y="193" font-size="16" font-weight="800" fill="#5B6068">② テスト実行・エラー検知</text>
    <text x="150" y="232" font-size="18" font-weight="800" fill="#A33818">↺</text>
    <text x="232" y="232" font-size="16" fill="#832D18">③ 通るまで修正</text>
    <!-- human gate -->
    <rect x="60" y="268" width="260" height="46" rx="10" fill="#A33818"/>
    <text x="190" y="290" font-size="16" font-weight="800" fill="#fff">設計・最終検証は人が握る</text>
    <text x="190" y="307" font-size="16" fill="#FBE7D6">「動く」≠「要件を満たす」</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">いま起きていること</div><div class="b">

- <span class="red">自然言語</span>からコードを生成
- テストが通るまで<span class="red">自律的に改善</span>
- 整形・可視化など“作業”が高速化

</div></div>

研究で要注意：動くこと≠<span class="red">結果が正しい</span>こと。

<div class="callout-blue">人が要所を握るこの形が<span class="hl">ヒューマン・イン・ザ・ループ（HITL）</span>。監視中心で必要時だけ介入する形は<span class="hl">ヒューマン・オン・ザ・ループ</span>。</div>

</div>
</div>

<div class="takeaway">“作業”は加速。だが設計と最終検証の責任は、人が握り続ける。</div>

<div class="attr">出典: OpenAI, Introducing Codex </div>

---

<!-- _class: summary -->

<div class="page-title">研究へのインパクト</div>

## AIで研究は加速する、は本当か？

<div class="figwrap" style="margin:2px auto 0;"><img src="./src/fig07-wiley-ai-impact.png" alt="Wiley調査：AIが研究の各側面に与える影響。効率85%・量77%・質73%・ブレスト70%・集中61%が役立つ、批判的思考は48%にとどまる" style="max-height:278px; border-radius:8px;"></div>

<div class="grid2" style="margin-top:8px; font-size:21px;">

<div class="b">

**使う範囲も成果も拡大**（Wiley 2025）

- 研究・出版での利用が<span class="red">45%→62%</span>
- <span class="red">85%</span>が効率向上を実感（質73%・量77%）

</div>

<div class="b">

**同時に懸念も上昇**

- 不正確・ハルシネーション懸念 <span class="red">64%</span>（+13pt）
- 情報セキュリティ・プライバシー <span class="red">58%</span>。何らか懸念は<span class="red">87%</span>

</div>

</div>

<div class="band">2年内の普及を<span class="red">83%</span>が予想。一方で懸念は上昇し、<span class="red">ガイドライン整備</span>（57%が不足を指摘）が鍵。</div>

<div class="attr">出典: Wiley「ExplanAItions」研究者調査 <a href="https://www.wiley.com/content/wiley-com/na/us/en/about-us/ai-resources/ai-study.html">wiley.com</a></div>

---

<!-- _class: summary -->

<div class="page-title">利用の具体事例</div>

## 自然科学は“計算・解析の高速化”、社会科学は“質的データ処理”

<div class="grid2">

<div class="cbox mid"><div class="h">自然科学 ── 計算・解析を高速化</div><div class="b">

- AlphaFold＝<span class="red">300万人以上</span>の研究者を支援 <span class="src">（出典: <a href="https://blog.google/intl/ja-jp/company-news/technology/gemini-for-science-io-2026/">Google / DeepMind</a>）</span>
- Gemini for Science＝数時間の構造・ゲノム解析を<span class="red">数分</span>に短縮 <span class="src">（出典: <a href="https://blog.google/intl/ja-jp/company-news/technology/gemini-for-science-io-2026/">Google</a>）</span>
- 推論モデル（o系）が<span class="red">STEM推論</span>を支援 <span class="src">（出典: <a href="https://openai.com/index/scaling-social-science-research/">OpenAI</a>）</span>

</div></div>

<div class="cbox blue"><div class="h">社会科学 ── 非構造化データ分析とコーディング</div><div class="b">

- GABRIEL＝質的データから<span class="blu">数字を取り出す</span>する社会科学向けAI <span class="src">（出典: <a href="https://openai.com/index/scaling-social-science-research/">OpenAI</a>）</span>
- 社会科学者の<span class="blu">81%</span>がAIチャットボットを研究利用 <span class="src">（出典: <a href="https://www.anthropic.com/research/coding-agents-social-sciences">Anthropic</a>）</span>
  - 自律エージェント（Claude Code等）は<span class="blu">20%</span>にとどまる <span class="src">（出典: <a href="https://www.anthropic.com/research/coding-agents-social-sciences">Anthropic</a>）</span>

</div></div>

</div>

<div class="band">AIの普及の差が<span class="red">研究格差</span>を生むリスクも <span class="src"></span></div>

---

<!-- _class: summary -->

<div class="page-title">調査：社会科学者のAI利用</div>

## 広がる利用、格差は？

<div style="font-size:18px; color:#5B6068; margin-bottom:4px;">定量社会科学者 1,260名 調査（2026年2–3月／経済学・政治学・社会学が各約2割）</div>

<div class="grid2">

<div class="cbox blue"><div class="h">利用の実態</div><div class="b">

- AIチャットボット利用 <span class="blu">81%</span>
- 週1回以上のコーディングエージェント <span class="blu">20%</span><br>（うち Claude Code <span class="blu">86%</span>）
- 最多用途は<span class="red">分析コード生成</span><br>（エージェント利用者の97%）
- 文章作成に使うのは<span class="red">約1/3</span>

</div></div>

<div class="cbox mid"><div class="h">格差・生産性・懸念</div><div class="b">

- Coding agentは、トップ25大学は利用率が <span class="red">1.4倍</span>
- Coding agentについて、生産性の変化：研究の着手時点 <span class="blu">+10ポイント</span>・ワーキングペーパー <span class="blu">+75ポイント</span>、ジャーナル投稿は<span class="red">有意差なし</span>
- <span class="blu">88%</span>が生産性向上を実感、一方<span class="red">70%</span>が「個人よりも分野全体への悪影響がある」と表明

</div></div>

</div>

<div class="band">便利さは実感されつつも、<span class="red">普及格差・活用リテラシが研究格差に</span>繋がりうる。<br>
一方で、使わないという選択を意図的に行うこともまた、正しそう。</div>

<div class="attr">出典: Anthropic 調査「社会科学者のAIコーディングエージェント利用」（2026） <a href="https://www.anthropic.com/research/coding-agents-social-sciences">リンク</a></div>

---

<!-- _class: summary -->

<div class="page-title">分野差・個人差</div>

## 一律の正解はない ─ “自分の分野の作法”を調べて決める

<div class="grid2">

<div class="b" style="padding-top:4px">

**分野で違う／個人で違う**

- 実験系・理論系・人文社会で<span class="red">受容度</span>が別
- データの扱い・再現性の重みも分野で別
- 習熟度で使い方が変わり<span class="red">格差</span>の懸念

</div>

<div class="cbox mid"><div class="h">だから課題は</div><div class="b">

- まず<span class="red">自分の分野の作法</span>を調べる
- 学会・論文誌・指導教員の<span class="red">方針</span>を確認する。
- 自分の関わり方を<span class="red">言葉にする</span>

</div></div>

</div>

<div class="grid3" style="margin-top:10px">
<div class="cbox soft"><div class="h">実験系</div><div class="b">データ整形・解析コードで活用<br>生データの扱いに厳格<br>膨大なデータの分析や検証</div></div>
<div class="cbox soft"><div class="h">理論系</div><div class="b">導出の補助などに使用<br>
AIによる発見の報告例も増加<br>人が検証するのは必須</div></div>
<div class="cbox soft"><div class="h">人文社会</div><div class="b">解釈・文章化が核<br>AI生成への懸念も多く、AIを使うことが意味をなさない場合も。</div></div>
</div>

<div class="band">分野差・個人差を前提に、「自分はどう関わるか」を自分の言葉で説明できることが授業のゴール。</div>

---

<!-- _class: fig -->

<div class="page-title">第8章のまとめ</div>

## “加速”＋"懸念点"+“分野差"を押さえる
<svg viewBox="0 0 760 300" width="100%" style="max-height:330px">
  <rect x="196" y="12" width="368" height="52" rx="12" fill="#A33818"/>
  <text x="380" y="45" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">研究にインパクトを与える2事例</text>
  <line x1="380" y1="64" x2="190" y2="98" stroke="#A33818" stroke-width="2.5"/>
  <line x1="380" y1="64" x2="570" y2="98" stroke="#A33818" stroke-width="2.5"/>
  <rect x="24" y="98" width="332" height="92" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
  <text x="190" y="132" text-anchor="middle" font-size="23" font-weight="800" fill="#832D18">① RAG（裏取り生成）</text>
  <text x="190" y="166" text-anchor="middle" font-size="20" fill="#5B6068">検索して根拠付きで答える</text>
  <rect x="404" y="98" width="332" height="92" rx="14" fill="#FBE7D6" stroke="#A33818" stroke-width="2.5"/>
  <text x="570" y="132" text-anchor="middle" font-size="23" font-weight="800" fill="#832D18">② エージェント</text>
  <text x="570" y="166" text-anchor="middle" font-size="20" fill="#5B6068">作業を自律的に回す</text>
</svg>

- 多くの分野で影響を受けている → 加速か、懸念か
- “使い方”は分野・個人で異なる → 一律の正解はない：自分の分野の作法で判断

<div class="takeaway">自分の関わり方を言葉にできることが重要。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 9</div>

# 研究へのインパクトと、不正・グレー事例

## 加速の恩恵と、新しい落とし穴を同時に見る

---

<!-- _class: split -->

<div class="page-title">研究へのインパクト</div>

## 研究を加速する一方で、新しい落とし穴も生まれた

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 268" width="100%" style="max-height:380px">
  <line x1="190" y1="40" x2="190" y2="258" stroke="#5B6068" stroke-width="2" stroke-dasharray="4 4"/>
  <rect x="20" y="50" width="150" height="36" rx="8" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="95" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#1A6BB0">AIが加速</text>
  <g font-size="16" text-anchor="middle">
    <rect x="20" y="98" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="119" font-weight="700">探索・下調べ</text>
    <rect x="20" y="138" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="159" font-weight="700">要約・作文</text>
    <rect x="20" y="178" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="199" font-weight="700">コード・仮説検証</text>
  </g>
  <text x="95" y="244" text-anchor="middle" font-size="30" fill="#1A6BB0" font-weight="800">↑速い</text>
  <rect x="210" y="50" width="150" height="36" rx="8" fill="#FBE7D6" stroke="#A33818" stroke-width="2"/>
  <text x="285" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#A33818">人が握る</text>
  <g font-size="16" text-anchor="middle">
    <rect x="210" y="98" width="150" height="32" rx="7" fill="#fff" stroke="#A33818" stroke-width="1.5"/><text x="285" y="119" font-weight="700">問いを立てる</text>
    <rect x="210" y="138" width="150" height="32" rx="7" fill="#fff" stroke="#A33818" stroke-width="1.5"/><text x="285" y="159" font-weight="700">検証する</text>
    <rect x="210" y="178" width="150" height="32" rx="7" fill="#fff" stroke="#A33818" stroke-width="1.5"/><text x="285" y="199" font-weight="700">責任を負う</text>
  </g>
  <text x="285" y="244" text-anchor="middle" font-size="18" fill="#A33818" font-weight="800">手放さない</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">速くなること（恩恵）</div><div class="b">

- 探索・要約・コード試作が短時間に圧縮される
- 言語の壁が下がる
- 一人でもできる範囲が増えうる

</div></div>

**同時に増えるリスク**

- ハルシネーション（もっともらしい誤り）の混入
- 速さに<span class="red">検証コストが追いつかない</span>危険
- 学術の信頼性の問題
- 人間が本質的に考えるべき点があるのでは？

</div>
</div>

<div class="takeaway">分野によって、AIをどう考えるかは、大きな差がある。</div>

---

<!-- _class: split -->

<div class="page-title">AIの痕跡は“語彙”に出る</div>

## 英単語 「delve」などの急増が、論文へのAI浸透を映す

<div class="split-body">
<div class="left">

<div class="figwrap"><img src="./src/fig07-excess-vocabulary.png" alt="PubMed抄録に出る単語の年次出現頻度。delves・crucial・potential・significantはChatGPT後の2022年以降に急増。pandemic・ebola・convolutionalは話題driven（上昇後に下降や分野特有）で対照的" style="max-height:330px"></div>
<div class="caption">delves等のLLM痕跡語は2022年以降に急増（上段）／pandemic等の話題語は対照的 (Fig.1)</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">調べ方（過剰語彙法）</div><div class="b">

- PubMed抄録<span class="red">1,500万件超</span>（2010–2024）の語彙を分析
- 2024年以降に<span class="red">急増した語</span>＝AI処理の痕跡

</div></div>

- 2024年の抄録の<span class="red">少なくとも13.5%</span>がLLM処理。分野により<span class="red">最大40%</span>
- 影響の大きさは<span class="red">コロナ禍の語彙を上回る</span>


</div>
</div>

<div class="takeaway">生成AIは研究領域に急速に浸透。今一度、考えてみよう。</div>

<div class="attr">出典: Kobak et al., Delving into LLM-assisted writing in biomedical publications through excess vocabulary（arXiv:2406.07016, 2024） <a href="https://arxiv.org/abs/2406.07016">arxiv.org/abs/2406.07016</a></div>

---

<!-- _class: summary -->

<div class="page-title">不正・グレー事例</div>

## 再確認：Science の線引き ── <span class="red">不可／要開示で可／可</span>

<svg viewBox="0 0 960 150" width="100%" style="max-height:170px">
  <defs>
    <linearGradient id="grayband" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#832D18"/>
      <stop offset="50%" stop-color="#C99A78"/>
      <stop offset="100%" stop-color="#1A6BB0"/>
    </linearGradient>
  </defs>
  <rect x="20" y="10" width="300" height="64" rx="10" fill="#FBE7D6" stroke="#832D18" stroke-width="2"/>
  <text x="170" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#832D18">① 不可（Scienceが禁止）</text>
  <text x="170" y="60" text-anchor="middle" font-size="15" fill="#832D18">図の生成・査読改訂・捏造・著者化</text>
  <rect x="335" y="10" width="290" height="64" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="480" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">② 要開示で可</text>
  <text x="480" y="60" text-anchor="middle" font-size="15" fill="#5B6068">執筆・翻訳・要約・コード生成</text>
  <rect x="640" y="10" width="300" height="64" rx="10" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="790" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#1A6BB0">③ 問題が小さい</text>
  <text x="790" y="60" text-anchor="middle" font-size="15" fill="#1A6BB0">文献の下調べ・純粋な言語校正</text>
  <rect x="20" y="98" width="920" height="18" rx="9" fill="url(#grayband)"/>
  <text x="60" y="138" text-anchor="start" font-size="18" font-weight="700" fill="#832D18">不可</text>
  <text x="900" y="138" text-anchor="end" font-size="18" font-weight="700" fill="#1A6BB0">可</text>
</svg>

<div class="grid2">

<div>

**不正行為扱い（Scienceが明確に禁止）**

- AI生成の<span class="red">図・画像</span>（編集部の許可なく）、原稿をLLMに入れる<span class="red">査読・改訂</span>
- データの<span class="red">捏造・改ざん</span>、AIを<span class="red">著者</span>にすること

</div>

<div>

**要開示で可（条件付き）→書かなかったら不正**

- 本文の<span class="red">執筆・翻訳・要約</span>、コード・データの生成
- <span class="red">cover letter＋謝辞</span>に明記し、methodsに<span class="red">プロンプト・モデル名・版</span>

</div>

</div>

<div class="band">大前提＝AI生成物を自分の研究のように見せない。「条件付き可」はすべて<span class="red">開示が条件</span>。</div>

<div class="attr">出典: Science Journals「Guidelines for AI use」 <a href="https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf">science.org（PDF）</a></div>

---

<!-- _class: summary -->

<div class="page-title">グレーをどう見分けるか</div>

## 迷ったら、この「4つの問い」に通す

<div class="grid2">
<div>

<div class="cbox mid"><div class="h">① 開示を前提にする</div><div class="b">その使い方を、投稿先や指導教員に<span class="red">堂々と書けるか</span></div></div>

<div class="cbox mid"><div class="h">③ ルールとあっているか検証する</div><div class="b">共著者・投稿先の<span class="red">ルールに合っているか</span></div></div>

</div>
<div>

<div class="cbox mid"><div class="h">② 記録をとっておく</div><div class="b">プロンプト・生成物・版を<span class="red">後から示せるか</span></div></div>

<div class="cbox mid"><div class="h">④ 責任の所在を考える</div><div class="b">最終的な内容に、<span class="red">人が責任を負えるか</span></div></div>

</div>
</div>

<div class="callout-gray">一つでも「いいえ」があれば、使い方を変えるか、その使用は見送る。</div>

<div class="takeaway">“禁止”ではなく“研究設計”の問題。開示・合意・記録・責任で、安全な活用を。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 10</div>

# まとめ

## “どう関わるか”を、自分の言葉で決める

---

<!-- _class: split -->

<div class="page-title">自分の学び・成長を設計する</div>

## AIは、RPGの“場所ジャンプ”に似ている

<div class="split-body">
<div class="left">

<div class="figwrap"><img src="./src/fig06-rpg-fasttravel.jpg" alt="RPGの比喩。左：AI利用＝ファストトラベルで学習の道のりを飛ばす。右：その結果、経験値0のまま強敵に直面しERROR/CANNOT HANDLEとなる" style="max-height:370px"></div>
<div class="caption">AIで“場所ジャンプ”すると、経験値ゼロのまま強敵に直面</div>

</div>
<div class="right">

**“場所ジャンプ”の落とし穴**

- ジャンプし続けると<span class="red">経験値が貯まらない</span>
- いざ自分の足で進もうとしても動けない

<div class="cbox blue"><div class="h">だから、こう考えてみる</div><div class="b">

- 身につけたい力は<span class="red">意図的に自分で</span>やる
- AIは“到達を速める道具”と割り切る
- 使う／使わない場面を<span class="red">先に決める</span>

</div></div>

</div>
</div>

<div class="takeaway">自分の成長を明け渡さない→AIを“成長"・”思考”の「道具」として組み込む。</div>

---

<!-- _class: split -->

<div class="page-title">OODAループと生成AI</div>

## OODAループでAI agentと関わってみるのはどうか

<div class="split-body">
<div class="left">

<div class="figwrap"><svg style="width:100%;max-height:380px" xmlns="http://www.w3.org/2000/svg" viewBox="-70 0 730 620" preserveAspectRatio="xMidYMid meet" font-family="'Helvetica Neue', 'Hiragino Sans', sans-serif"> <defs> <marker id="ooda-arrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"> <path d="M0,0 L0,8 L11,4 z" fill="#b30000"/> </marker> </defs> <!-- Center label --> <rect x="215" y="235" width="170" height="130" rx="6" ry="6" fill="#fff" stroke="#b30000" stroke-width="3"/> <text x="300" y="283" text-anchor="middle" font-size="28" font-weight="700" fill="#b30000">OODA</text> <text x="300" y="313" text-anchor="middle" font-size="20" fill="#333">Loop</text> <text x="300" y="345" text-anchor="middle" font-size="16" fill="#666">(主語：人間)</text> <!-- Four arcs --> <path d="M 380 130 A 240 240 0 0 1 470 220" fill="none" stroke="#b30000" stroke-width="4" marker-end="url(#ooda-arrow)"/> <path d="M 470 380 A 240 240 0 0 1 380 470" fill="none" stroke="#b30000" stroke-width="4" marker-end="url(#ooda-arrow)"/> <path d="M 220 470 A 240 240 0 0 1 130 380" fill="none" stroke="#b30000" stroke-width="4" stroke-dasharray="8,6" marker-end="url(#ooda-arrow)"/> <path d="M 130 220 A 240 240 0 0 1 220 130" fill="none" stroke="#b30000" stroke-width="4" marker-end="url(#ooda-arrow)"/> <!-- Nodes --> <!-- Observe (top) --> <circle cx="300" cy="80" r="60" fill="#fff5f5" stroke="#b30000" stroke-width="3"/> <text x="300" y="73" text-anchor="middle" font-size="26" font-weight="700" fill="#b30000">Observe</text> <text x="300" y="103" text-anchor="middle" font-size="17" fill="#333">観る</text> <text x="230" y="45" text-anchor="end" font-size="18" font-weight="600" fill="#333">AIの出力を見る</text> <text x="230" y="68" text-anchor="end" font-size="15" fill="#666">（HILTで確認）</text> <!-- Orient (right) --> <circle cx="520" cy="300" r="60" fill="#fff5f5" stroke="#b30000" stroke-width="3"/> <text x="520" y="293" text-anchor="middle" font-size="26" font-weight="700" fill="#b30000">Orient</text> <text x="520" y="323" text-anchor="middle" font-size="17" fill="#333">状況判断</text> <text x="560" y="400" text-anchor="middle" font-size="18" font-weight="600" fill="#333">自分の知識と照らす</text> <!-- Decide (bottom) --> <circle cx="300" cy="520" r="60" fill="#fff5f5" stroke="#b30000" stroke-width="3"/> <text x="300" y="513" text-anchor="middle" font-size="26" font-weight="700" fill="#b30000">Decide</text> <text x="300" y="543" text-anchor="middle" font-size="17" fill="#333">意思決定</text> <text x="370" y="555" text-anchor="start" font-size="18" font-weight="600" fill="#333">採用 / 修正 / 棄却</text> <text x="370" y="578" text-anchor="start" font-size="15" fill="#666">（使うかどうか決める）</text> <!-- Act (left) --> <circle cx="80" cy="300" r="60" fill="#fff5f5" stroke="#b30000" stroke-width="3"/> <text x="80" y="293" text-anchor="middle" font-size="26" font-weight="700" fill="#b30000">Act</text> <text x="80" y="323" text-anchor="middle" font-size="17" fill="#333">実行</text> <text x="40" y="400" text-anchor="middle" font-size="18" font-weight="600" fill="#333">再プロンプト／実装</text> <!-- Pause badge (directly above Orient) --> <g> <rect x="425" y="40" width="190" height="110" rx="8" ry="8" fill="#fff8e1" stroke="#e65100" stroke-width="2.5"/> <text x="520" y="76" text-anchor="middle" font-size="24" font-weight="700" fill="#e65100">Pause（確認）</text> <text x="520" y="106" text-anchor="middle" font-size="17" fill="#333">私はこの出力を</text> <text x="520" y="130" text-anchor="middle" font-size="17" fill="#333"><tspan font-weight="700">評価できる</tspan>か？</text> <!-- straight vertical line to Orient node --> <line x1="520" y1="150" x2="520" y2="240" stroke="#e65100" stroke-width="2.5"/> </g> </svg></div>
<div class="caption">OODAループをAI活用の観点で修正したもの</div>

</div>
<div class="right">

### AI学習のサイクル

- **Observe**：AIが何を出してきたか観る
- **Orient**：自分の知識と照らす
- **Decide**：採用／修正／棄却を決める
- **Act**：使う、または再プロンプト

### AI agentの学習の仕方
- まずは使って、使えるか判断する
- 自分が評価できるようになることが大切
- 出力は、一歩立ち止まって考えてみる
  - ハルシネーションやバイアスはいまだある

</div>
</div>

<div class="takeaway">「使ってみる → 評価する → 工夫する」サイクルを持つことが、AI活用力を高める鍵</div>

---

<!-- _class: summary -->

<div class="page-title">研究での活用に、自分で線を引く</div>

## 事例) どの工程を“自分で”やり、どこを“AIに任せる”か

<div class="grid3">

<div>

**自分でやる（コア能力）**

- <span class="red">問い</span>・仮説・<span class="red">解釈</span>
- 検証と結論への<span class="red">責任</span>

</div>

<div>

**AIと協働（必ず確かめる）**

- 下調べ・<span class="red">たたき台</span>づくり
- 出力は<span class="red">原典で裏取り</span>

</div>

<div>

**AIに任せやすい（低リスク）**

- 体裁の整形・<span class="red">英文校正</span>
- ※規約と開示の範囲内で

</div>

</div>

<div class="band">自分の線引きの考え方の例 → <br>① その力を<span class="red">自分が育てたい</span>か  <br>② 誤りの<span class="red">リスク</span>は大きいか <br>③ 媒体の<span class="red">規約・開示</span>を満たすか <br>④ 自分一人でも同じ結果にたどりつけるか <br>⑤ 結果を評価できるか<br>⑥ 論文の主張・着眼点は、自分で考えているか</div>


---

<!-- _class: wrap -->

<div class="page-title">この講義のまとめ</div>

## 10本で共有した“前提”を、要点に畳む

<div class="grid2">

<div>

**技術と限界を「知って使う」**

- 生成AIの主流は<span class="red">機械学習</span>（動画3）
- LLMは<span class="red">次の語を確率で予測</span>するだけ（動画3）
- 幻覚は不具合でなく<span class="red">仕組み上の帰結</span>（動画4）

</div>

<div>

**原則・リスク・倫理を「外さない」**

- 原則＝<span class="red">3つの理念＋10の指針</span>（動画6）
- リスク＝<span class="red">著作権・個人情報・営業秘密</span>を入力しない（動画7）
- FFP＝<span class="red">捏造・改ざん・盗用</span>。AIの有無を問わず不正（動画8）

</div>

</div>

<div class="band">技術→限界→原則→リスク→倫理→研究の設計。<span class="red">考える“土台”</span>を説明できていれば嬉しいです。</div>

<div class="attr">出典: AI事業者ガイドライン（総務省・経済産業省, 第1.2版/令和8年3月31日）。HITL＝人間が関与する仕組み。</div>

---

<!-- _class: summary -->

<div class="page-title">（参考）12の国際指針</div>

## 参考：広島AIプロセス国際指針（全11項目）── 本編の原則の国際版

<style scoped>
.grid12{display:grid;grid-template-columns:1fr 1fr;gap:7px 24px;margin-top:8px;font-size:19px;line-height:1.3;}
.grid12 .it{display:flex;align-items:flex-start;gap:9px;}
.grid12 .n{flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:#A33818;color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.grid12 .it.user .n{background:#1A6BB0;}
.grid12 b{color:#7d1322;}
</style>

<div class="grid12">
<div class="it"><span class="n">1</span><span>開発の前後で<b>リスクを特定・評価・低減</b>する</span></div>
<div class="it"><span class="n">2</span><span>市場投入後も<b>脆弱性・悪用を監視</b>し対処する</span></div>
<div class="it"><span class="n">3</span><span>能力・限界・適切な<b>利用領域を公表</b>（透明性）</span></div>
<div class="it"><span class="n">4</span><span>組織間で<b>情報共有・インシデント報告</b>に努める</span></div>
<div class="it"><span class="n">5</span><span><b>AIガバナンス・リスク管理方針</b>を策定・開示</span></div>
<div class="it"><span class="n">6</span><span><b>強固なセキュリティ</b>（物理・サイバー・内部脅威）</span></div>
<div class="it"><span class="n">7</span><span><b>電子透かし等でAI生成物を識別</b>できるように</span></div>
<div class="it"><span class="n">8</span><span>社会・安全リスクの<b>低減研究を優先・投資</b></span></div>
<div class="it"><span class="n">9</span><span>気候・健康・教育など<b>世界的課題に貢献</b></span></div>
<div class="it"><span class="n">10</span><span><b>国際的な技術標準</b>の開発・採用を推進</span></div>
<div class="it"><span class="n">11</span><span><b>データ入力対策・個人情報／知財の保護</b></span></div>
<div class="it user"><span class="n"></span><span>信頼でき責任ある利用＝<b>デジタルリテラシー向上</b>（利用者）</span></div>
</div>

<div class="band"><span class="red">①〜⑪は開発者向け</span>、<span class="red">教育は「全ての関係者＝使う私たち利用者」</span>に。</div>

<div class="attr">出典: 広島AIプロセス「全てのAI関係者向け国際指針」（全12項目, 2023） <a href="https://www.soumu.go.jp/hiroshimaaiprocess/">リンク</a></div>

---

<!-- _class: refs -->

<div class="page-title">参考文献・リンク</div>

## 参考文献・リンク

**法令・ガイドライン**

- 総務省・経済産業省 (2026). *AI事業者ガイドライン（第1.2版）*. https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/
- 内閣府 (2025). *AI推進法（令和7年法律第53号）*. https://laws.e-gov.go.jp/law/507AC0000000053
- 文化庁 (2024). *AIと著作権に関する考え方について*. https://www.bunka.go.jp/seisaku/chosakuken/pdf/93903601_01.pdf
- 個人情報保護委員会. *個人情報の保護に関する法律*. https://www.ppc.go.jp/

**学術倫理**

- 日本学術振興会 (2025). *科学の健全な発展のために─誠実な科学者の心得［第2版］*. https://www.jsps.go.jp/j-kousei/rinri.html
- ICAI (2021). *The Fundamental Values of Academic Integrity*. https://academicintegrity.org/resources/fundamental-values

**技術論文／媒体ポリシー**

- Vaswani et al. (2017). *Attention Is All You Need*. https://arxiv.org/abs/1706.03762
- Lewis et al. (2020). *Retrieval-Augmented Generation*. https://arxiv.org/abs/2005.11401

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問・振り返りは Moodle へ
## 自己紹介をよろしくお願い致します

<div class="attr" style="margin-top:28px; font-size:20px;">本スライドは <b>Claude Opus 4.8</b> で作成後、1日かけて田川が監修・修正しました。内容の<b>責任は田川</b>にあります。</div>
