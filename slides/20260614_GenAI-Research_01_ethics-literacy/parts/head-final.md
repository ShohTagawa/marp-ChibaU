---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×研究</div><img class="hdr-logo" src="./src/research-genai-logo.svg" alt="研究における生成AIの活用法">'
footer: ''
style: |
  :root { --accent:#C2410C; --accent-dark:#9A3412; --accent-soft:#FBE7D6; --section-bg:#FBF4EF; --hdr-left-w:24%; }
  /* ヘッダー帯：左帯とページタイトル帯の幅を調整（崩れ防止） */
  section .page-title { left:22%; width:36%; }
  h2 { color: var(--accent-dark); }
  section svg { max-width:100%; height:auto; }
  /* ---- components (deck-local) ---- */
  .important { display:inline-block; background:#FBE7D6; color:#9A3412; font-weight:700; font-size:20px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.12em; vertical-align:middle; border:1px solid #E6C4A8; }
  .cbox { border-radius:10px; overflow:hidden; background:#F5F6F7; margin:8px 0; border:1px solid #e6e7e9; }
  .cbox > .h { color:#fff; font-weight:700; font-size:23px; padding:8px 20px; }
  .cbox > .b { padding:12px 20px 14px; font-size:23px; line-height:1.6; }
  .cbox.deep > .h { background:#9A3412; } .cbox.mid > .h { background:#C2410C; } .cbox.soft > .h { background:#E08A4F; color:#3a1d0a; } .cbox.gray > .h { background:#5B6068; } .cbox.blue > .h { background:#1A6BB0; }
  .cbox.red > .h { background:var(--accent); } .cbox.orange > .h { background:#C2410C; } .cbox.green > .h { background:#1A6BB0; }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:6px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:25px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:30px; margin-top:8px; color:var(--accent-dark); }
  .qbox { background:#FBF4EF; border:2px solid #C2410C; border-radius:10px; padding:10px 18px; margin:8px 0; font-weight:700; font-size:24px; }
  .qbox .ans { display:block; margin-top:8px; font-weight:400; font-size:22px; color:#444; border-top:1px dashed #d8b48f; padding-top:8px; }
  .hl-1 { background:#FBE7D6; padding:0 4px; border-radius:3px; } .hl-2 { background:#F3DCC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; } .blu { color:#1A6BB0; font-weight:700; } .gry { color:#5B6068; font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:17px; color:#6e7378; margin-top:6px; }
  .src { font-size:15px; color:#7a7f86; white-space:nowrap; }
  .src a, a.src { color:#1A6BB0; text-decoration:none; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c2b1a3; border-radius:8px; background:#f7f3ef; color:#8a7a6a; display:flex; align-items:center; justify-content:center; text-align:center; font-size:16px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:22px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #cdcdcd; padding:9px 16px; text-align:center; }
  .dtbl th { background:var(--accent-soft); } .dtbl td.l { text-align:left; }
  .figwrap { text-align:center; } .figwrap img { max-height:430px; }
  .goals { list-style:none; margin:6px 0 0; padding:0; counter-reset:g; }
  .goals > li { position:relative; padding:6px 0 10px 56px; margin:0; min-height:44px; }
  .goals > li .gt { font-weight:700; font-size:24px; } .goals > li .gs { font-size:19px; color:#5B6068; }
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
  section:has(.takeaway) { padding-bottom:126px !important; }
  /* 下端の band/takeaway（＋直後の出典）を最下部に固定して高さを揃える */
  section > .band:last-child, section > .takeaway:last-child { margin-top:auto !important; }
  section > .band:has(+ .attr:last-child) { margin-top:auto !important; }
  section:has(.band) { padding-bottom:64px; }
  section.cover-hero .title-affil { font-size:23px; color:#333; }
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

<div class="band">迷ったときに立ち返れる「考え方の基準」を持つ。これがこの授業の芯です。</div>

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

## まず全体像 ── 第1回はこの表の1行。その中身は次ページの10本の動画

<div class="fig-area">
<table class="dtbl" style="font-size:20px; width:92%;">
<tr><th>回</th><th class="l">テーマ</th><th>形式</th></tr>
<tr style="background:#FBE7D6;"><td><strong>1</strong></td><td class="l"><strong>ナレッジ①：生成AIと倫理とリテラシー　← 今回</strong></td><td>オンデマンド</td></tr>
<tr><td>2</td><td class="l">ナレッジ②：学術情報流通（成果公表・査読）の仕組み</td><td>オンデマンド</td></tr>
<tr><td>3</td><td class="l">ナレッジ③：生成AIの仕組み（ミニチュアを作るColab演習）</td><td>オンデマンド</td></tr>
<tr><td>4</td><td class="l">研究・論文①：アカデミック・インテグリティと生成AI</td><td>オンデマンド</td></tr>
<tr><td>5</td><td class="l">研究・論文②：各分野での受容状況を共有</td><td>同時双方向</td></tr>
<tr><td>6</td><td class="l">研究手法①：AIを研究で用いる</td><td>オンデマンド</td></tr>
<tr><td>7</td><td class="l">研究手法②：AIの研究利用の調査と情報交換</td><td>ハイブリッド</td></tr>
<tr><td>8</td><td class="l">議論とリフレクション（最終レポートへ）</td><td>ハイブリッド</td></tr>
</table>
</div>

<div class="takeaway">第1回は「考えるための前提」。ここから研究倫理・仕組み・手法へと積み上げます。</div>

---

<!-- _class: fig -->

<div class="page-title">今回（第1回）の流れ</div>

## 第1回は、この10本の動画で構成します

<div class="fig-area">
<svg viewBox="0 0 1000 300" width="100%" style="max-height:360px">
  <rect x="14" y="40" width="92" height="190" rx="12" fill="#F3DCC8" stroke="#9A3412" stroke-width="1.5"/>
  <text x="60" y="128" text-anchor="middle" font-size="20" font-weight="800" fill="#9A3412">①</text>
  <text x="60" y="156" text-anchor="middle" font-size="16" font-weight="700" fill="#9A3412">学び方</text>
  <rect x="118" y="40" width="430" height="190" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="1.6"/>
  <text x="333" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C">PART A　AIを知る</text>
  <rect x="560" y="40" width="220" height="190" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="1.6"/>
  <text x="670" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#1A6BB0">PART B　研究倫理</text>
  <rect x="792" y="40" width="194" height="190" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.6"/>
  <text x="889" y="64" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">PART C　これから</text>
  <g text-anchor="middle">
    <g><rect x="130" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#C2410C" stroke-width="1.6"/><text x="178" y="128" font-size="22" font-weight="800" fill="#C2410C">②</text><text x="178" y="162" font-size="18" font-weight="700">俯瞰</text></g>
    <g><rect x="234" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#C2410C" stroke-width="1.6"/><text x="282" y="128" font-size="22" font-weight="800" fill="#C2410C">③</text><text x="282" y="162" font-size="18" font-weight="700">倫理</text></g>
    <g><rect x="338" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#C2410C" stroke-width="1.6"/><text x="386" y="128" font-size="22" font-weight="800" fill="#C2410C">④</text><text x="386" y="162" font-size="18" font-weight="700">仕組み</text></g>
    <g><rect x="442" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#C2410C" stroke-width="1.6"/><text x="490" y="128" font-size="22" font-weight="800" fill="#C2410C">⑤</text><text x="490" y="162" font-size="18" font-weight="700">限界</text></g>
    <g><rect x="572" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.6"/><text x="620" y="128" font-size="22" font-weight="800" fill="#1A6BB0">⑥</text><text x="620" y="162" font-size="18" font-weight="700">研究倫理</text></g>
    <g><rect x="676" y="88" width="96" height="116" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.6"/><text x="724" y="128" font-size="22" font-weight="800" fill="#1A6BB0">⑦</text><text x="724" y="162" font-size="18" font-weight="700">倫理×AI</text></g>
    <g><rect x="804" y="88" width="80" height="116" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.6"/><text x="844" y="128" font-size="22" font-weight="800" fill="#5B6068">⑧</text><text x="844" y="162" font-size="18" font-weight="700">分野差</text></g>
    <g><rect x="892" y="88" width="80" height="116" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.6"/><text x="932" y="128" font-size="22" font-weight="800" fill="#5B6068">⑨</text><text x="932" y="162" font-size="18" font-weight="700">影響</text></g>
  </g>
  <rect x="118" y="244" width="868" height="44" rx="10" fill="#C2410C"/>
  <text x="552" y="271" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">⑩ 自分の設計・まとめ ── 「判断の基準」を持ち、言葉で説明できる</text>
</svg>
</div>

<div class="takeaway">この10本で「考えるための前提」を入れる。答えは対面の議論で一緒に作る。</div>

---

<!-- _class: split -->

<div class="page-title">この講義の受け方</div>

## オンデマンドで“前提”を入れ、対面で“議論”する

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="60" y="30" width="240" height="70" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="60" font-size="18" font-weight="800" fill="#C2410C">① オンデマンド講義</text>
    <text x="180" y="86" font-size="16" fill="#5B6068">倫理・情報流通・AI技術</text>
    <text x="180" y="120" font-size="26" fill="#C2410C" font-weight="800">↓</text>
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

<div class="cbox red"><div class="h">視聴のしかた</div><div class="b">

- 全10回を<span class="red">視聴期限内</span>に視聴（順番推奨）
- 視聴後に<span class="red">対面・同時双方向</span>で議論する

</div></div>

<div class="cbox gray"><div class="h">予習・復習でのAI利用</div><div class="b">

- 予習復習では<span class="red">大いに活用OK</span>。課題ごとに使える範囲を明示
- 使い方は<span class="red">必ず申告</span>（申告と乖離は0点）

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
    <rect x="20" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="155" y="62" font-size="26" font-weight="800" fill="#C2410C">① 近接分野 GW</text>
    <text x="155" y="98" font-size="20" fill="#9A3412">倫理の観点で指針を調べる</text>
    <rect x="345" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="480" y="62" font-size="26" font-weight="800" fill="#C2410C">② 分野横断 GW</text>
    <text x="480" y="98" font-size="20" fill="#9A3412">手法の観点で比べる</text>
    <rect x="670" y="20" width="270" height="110" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="805" y="62" font-size="26" font-weight="800" fill="#C2410C">③ 個人レポート</text>
    <text x="805" y="98" font-size="20" fill="#9A3412">今後どう関わるかを書く</text>
    <text x="318" y="84" font-size="34" fill="#C2410C">→</text>
    <text x="643" y="84" font-size="34" fill="#C2410C">→</text>
  </g>
</svg>

- ① 近接分野GW：倫理的観点で<span class="red">指針を調査</span>（グループワーク）
- ② 分野横断GW：研究手法の観点で<span class="red">他分野と比較</span>（グループワーク）
- ③ 個人レポート：今後<span class="red">どうAIと関わるか</span>を明文化
- <span class="blu">①②のグループワークは第4〜7回</span>で行います

<div class="band">第1回の課題：まず<span class="red">研究分野・授業への関心を含む自己紹介</span>をMoodleに記入。</div>

---

<!-- _class: intro -->

<div class="page-title">自己紹介</div>

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

- AIの“使ってよい作法”は<span class="red" style="white-space:nowrap">分野ごとにバラバラ</span>
- 院生の多くは<span class="red">研究者を目指す</span>。早い段階で“自分の物差し”を持ってほしい
- 技術・倫理・研究倫理を、分野を越えて一度そろえる

</div>
<div class="col">

### ②問いの原点

生成AIで研究は大きく変わりつつあります。けれど「使ってよいか」の<span class="red">判断の基準</span>は、分野ごとにバラバラです。

技術・倫理・研究倫理という<span class="red">前提</span>を共有し、分野を越えて「自分はどう関わるか」を考える場をつくります。M1の段階で、この“物差し”を持っておくことが、その後の研究生活で効いてきます。

</div>
</div>
