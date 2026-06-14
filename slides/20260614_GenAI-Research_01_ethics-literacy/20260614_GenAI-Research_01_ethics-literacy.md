---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×研究</div><img class="hdr-logo" src="./src/research-genai-logo.svg" alt="研究における生成AIの活用法">'
footer: ''
style: |
  :root { --accent:#C2410C; --accent-dark:#9A3412; --accent-soft:#FBE7D6; --section-bg:#FBF4EF; --hdr-left-w:19%; }
  /* ヘッダー帯：左帯とページタイトル帯の幅を調整（崩れ防止） */
  section .page-title { left:17%; width:36%; }
  section.cover-hero { --hdr-left-w:19%; }
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
  /* tk-low: このスライドだけ takeaway を下端へ寄せる（他のsplitには影響させない） */
  section.tk-low:has(.takeaway) { padding-bottom:40px !important; }
  section.cover-hero .title-event { font-size:34px; }
  section.cover-hero .title-affil { font-size:27px; color:#333; }
  /* 自己紹介：右上の所属・専門ブロックを少し大きく */
  section.intro .intro-affil { font-size:24px; }
  section.intro .intro-affil .role { font-size:22px; }
  /* 説明文をやわらかいパネルに */
  .qpanel { background:#FBF4EF; border:1px solid #E6C4A8; border-radius:10px; padding:12px 18px; margin-top:4px; }
  .qpanel p:last-child { margin-bottom:0; }
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

<div class="band">迷ったときに立ち返れる普遍的な「考え方の基準」を持つ。これがこの授業の芯です。</div>

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
<table class="dtbl" style="font-size:20px; width:92%;">
<tr><th>回</th><th class="l">テーマ</th><th>形式</th></tr>
<tr style="background:#F1D4DA;"><td><strong>1</strong></td><td class="l"><strong>ナレッジ①：生成AIと倫理とリテラシー　← 今回</strong></td><td>オンデマンド</td></tr>
<tr><td>2</td><td class="l">ナレッジ②：学術情報流通（成果公表・査読）の仕組み</td><td>オンデマンド</td></tr>
<tr><td>3</td><td class="l">ナレッジ③：生成AIの仕組み（ミニチュアを作るColab演習）</td><td>オンデマンド</td></tr>
<tr><td>4</td><td class="l">研究・論文①：アカデミック・インテグリティと生成AI</td><td>オンデマンド</td></tr>
<tr><td>5</td><td class="l">研究・論文②：各分野での受容状況を共有</td><td>同時双方向</td></tr>
<tr><td>6</td><td class="l">研究手法①：AIを研究で用いる</td><td>オンデマンド</td></tr>
<tr><td>7</td><td class="l">研究手法②：AIの研究利用の調査と情報交換</td><td>対面＋オンデマンド</td></tr>
<tr><td>8</td><td class="l">議論とリフレクション（最終レポートへ）</td><td>対面＋オンデマンド</td></tr>
</table>
</div>

<div class="takeaway">第1回は「考えるための前提」。ここから研究倫理・仕組み・手法へと積み上げます。</div>

---

<!-- _class: split tk-low -->

<div class="page-title">この講義の受け方</div>

## オンデマンドで“前提”を理解し、対面で“学び合う”ことで見につける

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:380px">
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

- ナレッジ回を<span class="red">視聴期限内</span>に視聴（順番推奨）
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
    <text x="155" y="98" font-size="20" fill="#9A3412">研究倫理の観点で調査</text>
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

<div class="takeaway">授業の前提を知る10動画。</div>

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

自分は、地球惑星科学の研究者でした。
分野横断的な学際領域だったので、他の分野の研究手法の習得に、大変苦労したのを覚えています。特に博論で金属工学やプログラミングまで学習したのは大変骨が折れました。
今はAIでもっと先にいける可能性があります。

</div>

</div>
</div>

<div class="takeaway">一緒に、AI×研究を考え、切り開きましょう。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 2</div>

# 仕組みを俯瞰する

## 情報からトランスフォーマーまで、辿る

---

<!-- _class: fig -->

<div class="page-title">全体像</div>

## 入れ子の関係 ── 広い「AI」の中に「生成AI」がある

<div class="fig-area">
<svg viewBox="0 0 1000 470" width="100%" style="max-height:430px" text-anchor="middle">
  <rect x="40" y="28" width="920" height="414" rx="18" fill="#FBF4EF" stroke="#E89A5C" stroke-width="2"/>
  <text x="500" y="55" font-size="22" font-weight="800" fill="#9A3412">AI（人工知能）</text>
  <text x="500" y="76" font-size="15.5" fill="#8a7a6c"><tspan font-weight="700" fill="#9A3412">定義：</tspan>人の知的な作業（認識・判断・推論・生成など）をコンピュータに行わせる技術</text>
  <rect x="112" y="92" width="776" height="328" rx="16" fill="#FBE7D6" stroke="#D2762E" stroke-width="2"/>
  <text x="500" y="119" font-size="21" font-weight="800" fill="#9A3412">機械学習</text>
  <text x="500" y="140" font-size="15" fill="#8a7a6c">データから自動でパターンを学ぶAI</text>
  <rect x="184" y="152" width="632" height="246" rx="14" fill="#F4D9C0" stroke="#C2410C" stroke-width="2"/>
  <text x="500" y="178" font-size="21" font-weight="800" fill="#9A3412">ニューラルネット</text>
  <text x="500" y="199" font-size="15" fill="#7c6555">脳を模した層構造。重みを調整して学習</text>
  <rect x="256" y="210" width="488" height="160" rx="12" fill="#EBC09A" stroke="#9A3412" stroke-width="2"/>
  <text x="500" y="236" font-size="21" font-weight="800" fill="#7d1322">トランスフォーマー</text>
  <text x="500" y="257" font-size="15" fill="#6e4a33">文脈をまとめて捉える仕組み（注意機構）</text>
  <rect x="328" y="282" width="344" height="74" rx="12" fill="#C2410C" stroke="#7d1322" stroke-width="2.5"/>
  <text x="500" y="312" font-size="22" font-weight="800" fill="#fff">→ 生成AI</text>
  <text x="500" y="335" font-size="15" fill="#FBE7D6">文章・画像をつくる（この講義の主役）</text>
</svg>
</div>
<div class="attr" style="text-align:center;">外側ほど広く・古い概念　／　内側ほど専門的・新しい。生成AIはトランスフォーマーから生まれた。</div>

<div class="takeaway">まず森の地図を頭に入れる。細部の仕組みはのちの動画で深掘りします。</div>

---

<!-- _class: split -->

<div class="page-title">情報とは</div>

## データから知恵へ ── 情報のDIKWモデル

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="20" y="250" width="150" height="55" rx="8" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
    <text x="95" y="278" font-size="17" font-weight="800" fill="#9A3412">Data</text>
    <text x="95" y="297" font-size="16" fill="#5B6068">未整理の事実</text>
    <rect x="90" y="185" width="150" height="55" rx="8" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
    <text x="165" y="213" font-size="17" font-weight="800" fill="#9A3412">Information</text>
    <text x="165" y="232" font-size="16" fill="#5B6068">整理・解釈</text>
    <rect x="160" y="120" width="150" height="55" rx="8" fill="#F1C9A8" stroke="#C2410C" stroke-width="2"/>
    <text x="235" y="148" font-size="17" font-weight="800" fill="#9A3412">Knowledge</text>
    <text x="235" y="167" font-size="16" fill="#5B6068">体系化</text>
    <rect x="200" y="55" width="150" height="55" rx="8" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="275" y="83" font-size="17" font-weight="800" fill="#fff">Wisdom</text>
    <text x="275" y="102" font-size="16" fill="#FBE7D6">価値観を伴う判断</text>
    <text x="55" y="45" font-size="16" fill="#5B6068">上へ行くほど“意味”が増す ↗</text>
  </g>
</svg>

</div>
<div class="right">

- <span class="red">この“下から上への変換”を機械が肩代わりする最前線が生成AI</span>
- ↑ここが本題。DIKWはそこへ繋ぐための前置きです
- データ＝未整理の事実／情報＝整理・解釈／知識＝体系化
- 知恵＝価値観を伴う判断（人間に残る領域）

<div class="attr">出典: 高等学校 情報I（数研出版）。広く使われる枠組みだが線形すぎるとの批判もある</div>

</div>
</div>

<div class="takeaway">“データ→情報→知識”の変換を、いま機械が駆け上がろうとしています。</div>

---

<!-- _class: fig -->

<div class="page-title">AIとは／AIの分類</div>

## AI＝人工的な知能。中身はルールベースと機械学習の2系統

<div class="fig-area">
<svg viewBox="0 0 990 470" width="100%" style="max-height:440px">
  <g text-anchor="middle">
    <rect x="120" y="20" width="250" height="86" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="245" y="56" font-size="24" font-weight="800" fill="#9A3412">Artificial</text>
    <text x="245" y="86" font-size="18" fill="#5B6068">人工的な</text>
    <text x="430" y="74" font-size="36" font-weight="800" fill="#5B6068">＋</text>
    <rect x="490" y="20" width="250" height="86" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="615" y="56" font-size="24" font-weight="800" fill="#9A3412">Intelligence</text>
    <text x="615" y="86" font-size="18" fill="#5B6068">知能</text>
    <text x="800" y="74" font-size="32" font-weight="800" fill="#5B6068">→</text>
    <rect x="845" y="24" width="120" height="78" rx="12" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="905" y="60" font-size="24" font-weight="800" fill="#fff">AI</text>
    <text x="905" y="86" font-size="16" fill="#FBE7D6">人工知能</text>
    <text x="495" y="150" font-size="16" fill="#5B6068">定義は論者・時代で変化する（境界は固定されていない）。では中身は？</text>
    <rect x="395" y="175" width="200" height="58" rx="12" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="495" y="211" font-size="22" font-weight="800" fill="#fff">AI（人工知能）</text>
    <line x1="495" y1="233" x2="245" y2="285" stroke="#5B6068" stroke-width="2"/>
    <line x1="495" y1="233" x2="745" y2="285" stroke="#5B6068" stroke-width="2"/>
    <rect x="100" y="290" width="290" height="150" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="245" y="330" font-size="22" font-weight="800" fill="#5B6068">ルールベース</text>
    <text x="245" y="368" font-size="17" fill="#5B6068">人がルール・知識を記述</text>
    <text x="245" y="402" font-size="16" fill="#5B6068">書ききれる問題に強い</text>
    <rect x="600" y="290" width="290" height="150" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="745" y="330" font-size="22" font-weight="800" fill="#9A3412">機械学習</text>
    <text x="745" y="368" font-size="17" fill="#5B6068">データから自分で学ぶ</text>
    <text x="745" y="402" font-size="16" fill="#C2410C" font-weight="700">現在の主流</text>
  </g>
</svg>
</div>

<div class="takeaway">「猫を見分けるルール」を完璧に書くのは不可能。だからデータから学ばせる。</div>

---

<!-- _class: summary -->

<div class="page-title">機械学習</div>

## 学び方は3種類 ＋ 半教師あり

<div class="grid3">

<div class="cbox mid"><div class="h">① 教師あり学習</div><div class="b">

- <span class="red">正解（教師データ）</span>付きで学ぶ
- 例：分類・予測・回帰
- 「この画像は猫」と教える

</div></div>

<div class="cbox mid"><div class="h">② 教師なし学習</div><div class="b">

- <span class="red">正解なし</span>で構造を見つける
- 例：クラスタリング・次元削減
- 似たもの同士を自動でまとめる

</div></div>

<div class="cbox mid"><div class="h">③ 強化学習</div><div class="b">

- <span class="red">報酬</span>を最大化するよう試行錯誤
- 例：ゲームAI・自動運転
- 良い行動に“ごほうび”を与える

</div></div>

</div>

<div class="band">正解の一部だけを使う「半教師あり学習」も。実務ではこれらを組み合わせます。</div>

---

<!-- _class: split -->

<div class="page-title">ニューラルネット</div>

## 脳のニューロンを真似た“層”の重ね合わせ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <g>
    <text x="60" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#C2410C">入力層</text>
    <text x="190" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#5B6068">隠れ層</text>
    <text x="320" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#9A3412">出力層</text>
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
      <circle cx="320" cy="120" r="16" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
      <circle cx="320" cy="190" r="16" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    </g>
    <text x="190" y="300" text-anchor="middle" font-size="16" fill="#C2410C" font-weight="700">結線の“重み”を学習で調整</text>
  </g>
</svg>

</div>
<div class="right">

- 隠れ層を<span class="red">深く</span>重ねたものが深層学習（ディープラーニング）
- 結線の<span class="red">重み（パラメータ）</span>を学習で調整して当てる
- 学習＝魔法ではなく、地道な数値調整の積み重ね
- 画像・音声・言語の処理に強い

</div>
</div>

<div class="takeaway">学習＝“重みという数字を調整して当てにいく”地道な作業です。</div>

---

<!-- _class: split -->

<div class="page-title">トランスフォーマー</div>

## 系列を“並列に”扱う新しい仕組み ── 中身は第3回で

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="90" y="14" width="200" height="46" rx="9" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="43" font-size="17" font-weight="800" fill="#9A3412">入力の語の並び</text>
    <text x="190" y="78" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="65" y="90" width="250" height="50" rx="9" fill="#F1C9A8" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="113" font-size="16" font-weight="800" fill="#9A3412">自己注意</text>
    <text x="190" y="132" font-size="16" fill="#5B6068">語どうしの関係を見る</text>
    <text x="190" y="160" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="65" y="172" width="250" height="50" rx="9" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="190" y="195" font-size="16" font-weight="800" fill="#5B6068">MLP（変換）</text>
    <text x="190" y="214" font-size="16" fill="#5B6068">情報をまとめ直す</text>
    <text x="190" y="242" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="65" y="254" width="250" height="58" rx="9" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="190" y="280" font-size="16" font-weight="800" fill="#fff">次の語を予測</text>
    <text x="190" y="300" font-size="16" fill="#FBE7D6">候補ごとの確率を出す</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">いまは“次の語を予測”だけでOK</div><div class="b">

- 今回は「<span class="red">次の語を予測している</span>」と掴めればOK
- 2017年登場。文を<span class="red">並列に</span>扱えて大規模化しやすい（→第3回）
- 中身の数理は<span class="red">第3回（Colab演習）</span>で手を動かして学ぶ

</div></div>

<div class="attr">出典: Vaswani et al., 2017「Attention Is All You Need」</div>

</div>
</div>

<div class="takeaway">今回は「次の語を当てている」の一点だけ。細部は第3回で手を動かして納得する。</div>

---

<!-- _class: split -->

<div class="page-title">生成AIとは</div>

## “認識・分類”から“生成”へ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <text x="190" y="35" font-size="16" font-weight="800" fill="#5B6068">従来のAI</text>
    <rect x="35" y="55" width="100" height="46" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.8"/>
    <text x="85" y="83" font-size="16" font-weight="700" fill="#5B6068">入力</text>
    <text x="155" y="84" font-size="20" font-weight="800" fill="#5B6068">→</text>
    <rect x="185" y="55" width="160" height="46" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.8"/>
    <text x="265" y="83" font-size="16" font-weight="700" fill="#5B6068">分類ラベル</text>
    <line x1="30" y1="135" x2="350" y2="135" stroke="#e6c4a8" stroke-width="1.5"/>
    <text x="190" y="175" font-size="16" font-weight="800" fill="#C2410C">生成AI</text>
    <rect x="35" y="195" width="100" height="46" rx="8" fill="#fff" stroke="#C2410C" stroke-width="2"/>
    <text x="85" y="223" font-size="16" font-weight="700" fill="#9A3412">入力</text>
    <text x="155" y="224" font-size="20" font-weight="800" fill="#C2410C">→</text>
    <rect x="185" y="185" width="160" height="66" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="265" y="212" font-size="16" font-weight="700" fill="#9A3412">新しい文章</text>
    <text x="265" y="234" font-size="16" font-weight="700" fill="#9A3412">・画像を生成</text>
    <text x="190" y="295" font-size="16" fill="#5B6068">識別する → 作り出す へ</text>
  </g>
</svg>

</div>
<div class="right">

- 従来のAIは<span class="red">識別・予測</span>が中心
- 生成AIは<span class="red">尤（もっと）もらしい続き</span>（＝それらしい続き）を作る
- <span class="red">次に来る語</span>を一つ選び、入力に戻して繰り返す
- 文章を扱うものが<span class="red">LLM</span>（大規模言語モデル）

</div>
</div>

<div class="takeaway">なぜ“それらしい続き”だけで賢く見えるのか ── その核心は次以降の動画で。</div>

---

<!-- _class: summary -->

<div class="page-title">この動画のまとめ</div>

## 全体像を1枚で

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

- <span class="red">トランスフォーマー</span>＝系列を並列に扱う
- “<span class="red">次の語を予測</span>”して続きを作る
- 数理は<span class="red">第3回（Colab演習）</span>で

</div></div>

</div>

<div class="band">次の動画は、使う前に知っておくべき「原則・倫理・リスク」を見ていきます。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 3</div>

# 原則・倫理・リスク

## 「使ってよい／だめ」を判断する物差しをつくる

---

<!-- _class: fig -->

<div class="page-title">なぜ「原則」から入るか</div>

## 技術が先、ルールは後追い。だから上位の「理念」に遡る

<div class="fig-area">
<svg viewBox="0 0 960 380" width="100%" style="max-height:380px">
  <polygon points="480,30 344,140 616,140" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
  <text x="480" y="98" text-anchor="middle" font-size="22" font-weight="800" fill="#C2410C">理念</text>
  <text x="480" y="126" text-anchor="middle" font-size="17" fill="#9A3412">例：人間の尊厳</text>
  <polygon points="344,150 616,150 682,254 278,254" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2.5"/>
  <text x="480" y="190" text-anchor="middle" font-size="22" font-weight="800" fill="#9A3412">社会的な指針</text>
  <text x="480" y="222" text-anchor="middle" font-size="17" fill="#9A3412">例：透明性</text>
  <polygon points="278,264 682,264 748,368 212,368" fill="#EDEEF0" stroke="#5B6068" stroke-width="2.5"/>
  <text x="480" y="306" text-anchor="middle" font-size="22" font-weight="800" fill="#5B6068">技術的な指針・利用規約</text>
  <text x="480" y="338" text-anchor="middle" font-size="17" fill="#5B6068">例：各社の利用規約</text>
  <line x1="836" y1="316" x2="836" y2="120" stroke="#C2410C" stroke-width="2.5"/>
  <polygon points="836,104 827,124 845,124" fill="#C2410C"/>
  <line x1="682" y1="316" x2="836" y2="316" stroke="#5B6068" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="616" y1="100" x2="836" y2="100" stroke="#C2410C" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="864" y="210" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C" transform="rotate(90 864 210)">迷ったら上位へ遡る</text>
  <line x1="212" y1="316" x2="124" y2="316" stroke="#5B6068" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="76" y="310" text-anchor="middle" font-size="17" fill="#5B6068">具体策は</text>
  <text x="76" y="332" text-anchor="middle" font-size="17" fill="#5B6068">技術で変わる</text>
</svg>
</div>

<div class="takeaway">細かい規約は変わり続ける。迷う場面ほど、上位の「理念」に遡ると見通しが良い。</div>

---

<!-- _class: summary -->

<div class="page-title">理念と指針</div>

## 3つの理念が土台、そこから「研究者に効く3指針」へ

理念（最上位の価値）── そもそも何のためにAIを使うのか

<div class="grid3">

<div class="cbox mid"><div class="h">人間の尊厳</div><div class="b">

人がAIに振り回されず、<span class="red">人間が中心</span>であり続ける

</div></div>

<div class="cbox mid"><div class="h">多様性・包摂</div><div class="b">

さまざまな背景の人が<span class="red">誰も取り残されない</span>

</div></div>

<div class="cbox mid"><div class="h">持続可能な社会</div><div class="b">

恩恵を<span class="red">将来世代まで</span>届ける

</div></div>

</div>

<div class="band">この理念から、研究で使う私たちに特に効く <span class="red">人間中心・透明性・公平性</span> の3指針が出てくる。</div>

<div class="attr">出典: AI事業者ガイドライン（総務省・経済産業省, 第1.2版 / 令和8年3月） </div>

---

<!-- _class: split -->

<div class="page-title">研究者に効く3指針</div>

## 人間中心・透明性・公平性 ── 研究実務に直接効く

<div class="split-body">
<div class="left">

### <span class="red">透明性</span> ── 使ったら開示する

どこで・どう使ったかを、投稿先や指導教員に<span class="red">開示</span>できる状態に。

### <span class="red">人間中心</span> ── 最終責任は人

判断と責任は人が負う。「AIがそう言った」は<span class="red">弁明にならない</span>。

### <span class="red">公平性</span> ── バイアスに注意

学習データの偏りが出力に表れる（右図）。<span class="red">確かめてから</span>使う。

</div>
<div class="right">

<div class="figwrap"><img src="./src/fig03-ai-bias-faces.jpg" alt="AIが生成した職業別の顔画像。特定の職業に特定の性別・人種が偏って現れる例" style="max-height:330px"></div>
<div class="caption">公平性の例：職業の生成画像に性別・人種の偏りが出る</div>

</div>
</div>

<div class="takeaway">この3つは、後半（動画6・7）の研究倫理にもそのまま効いてくる。</div>

---

<!-- _class: split -->

<div class="page-title">リスク① 権利侵害・著作権</div>

## 他者の権利を侵さない／著作権は「学習」と「生成」で分ける

<div class="split-body">
<div class="left">

**権利侵害（肖像・名誉・人格）**

- <span class="red">ディープフェイク</span>で実在の人物になりすまさない
- 共同研究者・被験者の画像や音声を無断で素材化しない

**著作権 ── 「学習」と「生成」で分ける**

- 学習に使うのは<span class="red">原則OK</span>（情報解析）<span class="src">（出典: 著作権法第30条の4）</span>
- 生成物が既存作品に<span class="red">似ていて参照していたらNG</span><span class="src">（出典: 文化庁「AIと著作権に関する考え方について」2024）</span>

</div>
<div class="right">

<div class="figwrap"><img src="./src/fig05a-deepfake-assembly.jpg" alt="複数の顔素材を合成してディープフェイク映像を組み立てる過程の模式図" style="max-height:320px"></div>
<div class="caption">複数の素材を合成 → 実在人物になりすまし</div>

</div>
</div>

<div class="band">「学習に使う」と「作って使う」は別問題。詳しくは動画4で扱う。</div>

---

<!-- _class: split -->

<div class="page-title">リスク② 入力</div>

## 入力する側の落とし穴：個人情報と「研究上の秘密」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 400 340" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="56" y="18" width="248" height="60" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="46" font-size="18" font-weight="800" fill="#5B6068">あなたが入力</text>
    <text x="180" y="68" font-size="16" fill="#5B6068">氏名・連絡先・回答 など</text>
    <text x="180" y="102" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="56" y="118" width="248" height="60" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="180" y="146" font-size="18" font-weight="800" fill="#C2410C">外部サーバへ送信</text>
    <text x="180" y="168" font-size="16" fill="#9A3412">多くは事業者の管理下</text>
    <circle cx="304" cy="118" r="16" fill="#C2410C"/>
    <text x="304" y="125" font-size="22" font-weight="900" fill="#fff">!</text>
    <text x="180" y="202" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="56" y="218" width="248" height="60" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="180" y="246" font-size="18" font-weight="800" fill="#C2410C">保存・学習に利用?</text>
    <text x="180" y="268" font-size="16" fill="#9A3412">入力が手元を離れる</text>
    <circle cx="304" cy="218" r="16" fill="#C2410C"/>
    <text x="304" y="225" font-size="22" font-weight="900" fill="#fff">!</text>
    <text x="180" y="312" font-size="17" font-weight="800" fill="#C2410C">送信・保存の段階で「外」に出る</text>
  </g>
</svg>

</div>
<div class="right">

**個人情報・プライバシー**

- 入力が<span class="red">外部サーバに渡る</span>／保存・学習に使われうる
- 既存の<span class="red">個人情報保護法</span>がそのまま適用される

**研究上の秘密・機密**

- <span class="red">未公開データ・査読中の情報</span>を外部AIへ入れない
- 入れると“公表扱い”になり<span class="red">秘密性を失う</span>恐れ
- 先に出した人が勝つ世界（先取権）では不利になりうる

</div>
</div>

<div class="band">機微情報・未公開データを、外部サービスに「そのまま入力しない」。研究での基本動作。</div>

<div class="attr">出典: 個人情報保護法（個人情報保護委員会） </div>

---

<!-- _class: fig -->

<div class="page-title">AI関連の法整備</div>

## ルールは段階的に整備中。「今の版」を確認する癖を

<div class="fig-area">
<svg viewBox="0 0 960 300" width="100%" style="max-height:340px">
  <line x1="60" y1="150" x2="880" y2="150" stroke="#bbb" stroke-width="3"/>
  <circle cx="200" cy="150" r="9" fill="#E08A4F"/>
  <rect x="108" y="64" width="184" height="58" rx="10" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
  <text x="200" y="90" text-anchor="middle" font-size="17" font-weight="800" fill="#9A3412">ガイドライン統合</text>
  <text x="200" y="111" text-anchor="middle" font-size="16" fill="#b89070">第1.0版</text>
  <text x="200" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2024年</text>
  <circle cx="470" cy="150" r="9" fill="#C2410C"/>
  <rect x="378" y="64" width="184" height="58" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="470" y="90" text-anchor="middle" font-size="17" font-weight="800" fill="#C2410C">活用を推す基本法</text>
  <text x="470" y="111" text-anchor="middle" font-size="16" fill="#b89070">AI推進法（罰則なし）</text>
  <text x="470" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2025年</text>
  <circle cx="740" cy="150" r="9" fill="#9A3412"/>
  <rect x="648" y="64" width="184" height="58" rx="10" fill="#FBE7D6" stroke="#9A3412" stroke-width="2"/>
  <text x="740" y="90" text-anchor="middle" font-size="17" font-weight="800" fill="#9A3412">ガイドライン改定</text>
  <text x="740" y="111" text-anchor="middle" font-size="16" fill="#b89070">第1.2版・AIエージェント対応</text>
  <text x="740" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">2026年</text>
  <line x1="832" y1="150" x2="900" y2="150" stroke="#C2410C" stroke-width="3"/>
  <polygon points="922,150 898,138 898,162" fill="#C2410C"/>
  <text x="836" y="218" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C">これからも</text>
  <text x="836" y="242" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C">更新が続く</text>
  <rect x="150" y="238" width="500" height="44" rx="22" fill="#C2410C"/>
  <text x="400" y="266" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">常に「最新版」を公式で確認する</text>
</svg>
</div>

<div style="font-size:17px; color:#6e7378; margin-top:6px;">ガイドライン統合・改定 <span class="src">（出典: AI事業者ガイドライン）</span>　／　基本法 <span class="src">（出典: AI推進法・令和7年法律第53号）</span></div>

<div class="takeaway">最新の枠組みは動き続ける。年号の暗記ではなく「今どうなっているか」を確認する習慣を。</div>

---

<!-- _class: summary -->

<div class="page-title">動画3のまとめ</div>

## 「理念 → 指針 → リスク」、持ち帰りは3つ

迷ったら上位の<span class="red">理念</span>に遡る ／ 指針の軸は<span class="red">人間中心・透明性・公平性</span> ／ リスクは<span class="red">権利侵害・著作権・入力</span>

<div class="grid3">

<div class="cbox mid"><div class="h">① 入れない</div><div class="b">

<div style="font-size:40px;text-align:center;line-height:1.1;">🔒</div>
機微情報・未公開データは<span class="red">外部AIに入れない</span>

</div></div>

<div class="cbox mid"><div class="h">② 開示する</div><div class="b">

<div style="font-size:40px;text-align:center;line-height:1.1;">📣</div>
使ったら、どう使ったかを<span class="red">開示する</span>

</div></div>

<div class="cbox mid"><div class="h">③ 責任は人</div><div class="b">

<div style="font-size:40px;text-align:center;line-height:1.1;">🧑</div>
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

<div class="fig-area">
<svg viewBox="0 0 1000 270" width="100%" style="max-height:300px" font-family="inherit">
  <text x="20" y="26" font-size="19" font-weight="700" fill="#9A3412">入力「吾輩は」に続く次トークンの確率（上位5）</text>
  <line x1="150" y1="44" x2="150" y2="232" stroke="#bbb" stroke-width="2"/>
  <rect x="150" y="52"  width="690" height="30" rx="4" fill="#9A3412"/>
  <text x="138" y="73" font-size="20" font-weight="800" fill="#9A3412" text-anchor="end">、</text>
  <text x="852" y="74" font-size="19" font-weight="800" fill="#9A3412">0.115　← 1位</text>
  <rect x="150" y="92"  width="594" height="30" rx="4" fill="#C2410C"/>
  <text x="138" y="113" font-size="20" font-weight="800" fill="#C2410C" text-anchor="end">猫</text>
  <text x="756" y="114" font-size="19" font-weight="800" fill="#C2410C">0.099　← 2位</text>
  <rect x="150" y="132" width="240" height="30" rx="4" fill="#E0B49A"/>
  <text x="138" y="153" font-size="20" fill="#5B6068" text-anchor="end">犬</text>
  <text x="402" y="154" font-size="18" fill="#5B6068">0.040</text>
  <rect x="150" y="172" width="108" height="30" rx="4" fill="#E0B49A"/>
  <text x="138" y="193" font-size="20" fill="#5B6068" text-anchor="end">ネコ</text>
  <text x="270" y="194" font-size="18" fill="#5B6068">0.018</text>
  <rect x="150" y="212" width="54"  height="30" rx="4" fill="#E0B49A"/>
  <text x="138" y="233" font-size="20" fill="#5B6068" text-anchor="end">「</text>
  <text x="216" y="234" font-size="18" fill="#5B6068">0.009</text>
  <line x1="150" y1="244" x2="900" y2="244" stroke="#bbb" stroke-width="2"/>
  <text x="150" y="263" font-size="16" fill="#777">0.00</text>
  <text x="500" y="263" font-size="16" fill="#777" text-anchor="middle">確率　0.06</text>
  <text x="900" y="263" font-size="16" fill="#777" text-anchor="end">0.12</text>
</svg>
</div>

- 入力「吾輩は」の次の1トークンを、語彙（数万語）<span class="red">すべてに確率を割り振る</span>。図はGPT系の実出力
- <span class="red">トークン</span>＝モデルの最小単位。単語の一部（サブワード）のこともある（図の「猫」「ネコ」）
- 最有力は意外にも読点「、」、2位が「猫」。だが最大でも約0.12＝<span class="red">どの続きも“確信”はしておらず薄く割れている</span>。だから次は揺らぐ（次ページ）

<div class="attr">出典: Vaswani et al., "Attention Is All You Need" (2017) </div>

---

<!-- _class: fig -->

<div class="page-title">自己回帰生成</div>

## 1トークン出すたびに、自分の出力を入力に足し直す

<div class="figwrap"><img src="./src/fig04c-nexttoken-progression.png" alt="入力『吾輩は猫である。』に続く次トークンの確率上位5件。改行・猫・文末トークン・空白・そして が並ぶ棒グラフ"></div>

- 生成は<span class="red">自己回帰</span>：①分布を出す→②1つ選ぶ→③末尾に連結→①へ、をひたすら反復
- 入力が「吾輩は猫である。」まで伸びると分布は様変わりし、<span class="red">文末トークン</span>が上位に出る
- 図の<span class="mono">&lt;|endoftext|&gt;</span>＝「ここで文章終わり」の特別な印、<span class="mono">\n</span>＝改行記号。終端も<span class="red">確率的に</span>決まる

<div class="attr">出典: Radford et al., "Language Models are Unsupervised Multitask Learners" (GPT-2, 2019) </div>

---

<!-- _class: fig -->

<div class="page-title">サンプリング</div>

## 「分布から1つ選ぶ」やり方が、出力の個性を決める

<div class="figwrap"><img src="./src/fig04b-nexttoken-context.png" alt="コンテキストを与えた場合の次トークン確率上位5件。空白・名前・改行・不等号・猫 が並ぶ棒グラフ"></div>

- 常に最大確率を選ぶ<span class="red">貪欲法</span>は無難だが単調。実際は確率に応じて<span class="red">抽選</span>する
- 抽選だから同じ入力でも出力は毎回変わる。その振れ幅を決めるつまみが<span class="red">温度</span>
- <span class="red">温度（出力のばらつきを決めるつまみ）</span>＝低いほど堅実・反復的、高いほど多様だが脱線しやすい

<div class="takeaway">毎回違うのはバグではない。分布からの「抽選」を設定で揺らがせているだけ。</div>

---

<!-- _class: split -->

<div class="page-title">だから“それっぽい”</div>

## 流暢に書けることと、中身が正しいことは別物

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <text x="180" y="28" font-size="17" fill="#9A3412" font-weight="700">左から1トークンずつ確定していく</text>
    <rect x="30" y="46" width="74" height="46" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="67" y="76" font-size="22" font-weight="800" fill="#C2410C">吾輩</text>
    <text x="124" y="76" font-size="22" fill="#bbb">は…？</text>
    <rect x="30" y="108" width="74" height="46" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="67" y="138" font-size="22" font-weight="800" fill="#C2410C">吾輩</text>
    <rect x="108" y="108" width="120" height="46" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="168" y="138" font-size="22" font-weight="800" fill="#C2410C">は猫で</text>
    <text x="248" y="138" font-size="22" fill="#bbb">…？</text>
    <text x="180" y="186" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="20" y="200" width="320" height="80" rx="10" fill="#fff" stroke="#5B6068" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="180" y="232" font-size="18" font-weight="700" fill="#333">流暢な文は必ず完成する</text>
    <text x="180" y="260" font-size="18" fill="#9A3412" font-weight="700">— だが中身が正しい保証はない</text>
  </g>
</svg>

</div>
<div class="right">

- 文法的に滑らかでも、<span class="red">事実かどうかは別問題</span>。断定口調で堂々と誤りうる

<div class="cbox deep"><div class="h" style="font-size:26px">ハルシネーションは構造上の帰結</div><div class="b">

- <span class="red">今回</span>：起きる理由＝「尤もらしさ」を最大化する仕組みは<span class="red">真偽を直接は照合しない</span>から
- <span class="red">動画5</span>：どう対処するか（原因と対策の詳細）

</div></div>

</div>
</div>

<div class="takeaway">流暢さに騙されない。中身が正しいかは、最後に人が必ず確かめる。</div>

---

<!-- _class: split -->

<div class="page-title">画像生成も同じ核</div>

## 画像生成も「学んだものから作り直す」だけ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 250" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <text x="180" y="30" font-size="18" fill="#9A3412" font-weight="700">画像生成（拡散モデル）</text>
    <rect x="60" y="48" width="240" height="64" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="88" font-size="20" fill="#5B6068" font-weight="700">ランダムなノイズ</text>
    <text x="180" y="150" font-size="30" fill="#C2410C" font-weight="800">↓</text>
    <rect x="60" y="166" width="240" height="64" rx="10" fill="#F3DCC8" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="206" font-size="20" fill="#9A3412" font-weight="800">学んだ絵に近づける</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h" style="font-size:26px">画像生成も“学んだものから作る”</div><div class="b">

- 手順は違っても、根はLLMと同じ<span class="red">学習分布からのサンプリング</span>
- ゼロからの創造ではなく、学びの<span class="red">再構成</span>。生成AIを見る共通の物差し

</div></div>

- なお<span class="red">学習（育てる）と推論（使う）は別物</span>。使う時は学ばない（詳しくは動画3・5で）

</div>
</div>

<div class="takeaway">方式が違っても「学んだ分布から作る」は共通。これが生成AIの共通の核。</div>

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

## 仕組みを2点に圧縮する

<div class="grid2">

<div class="cbox deep"><div class="h">① LLM＝確率的な次トークン予測</div><div class="b">

- <span class="red">“次の語を当て続けるだけ”</span>
- 語彙全体に確率を割り振り、1つ抽選して連結（＝自己回帰）
- 流暢でも正しさは別問題。誤りも“尤もらしさ”の帰結（ハルシネーション）

</div></div>

<div class="cbox blue"><div class="h">② 生成＝学んだものを作り直す</div><div class="b">

- <span class="red">“学んだものを作り直すだけ”</span>
- 画像（拡散モデル）も根は同じ。使う時は学ばない（学習と推論は別物）
- 出力のゆらぎは抽選と温度が生む“設計された仕様”

</div></div>

</div>

<div class="takeaway">この超初歩が、次の動画5「現在の生成AIの限界」を理解する土台になる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 5</div>

# 現在の生成AIの限界

## 仕組みから導かれる「できない・苦手」を、原理で理解する

---

<!-- _class: fig -->

<div class="page-title">なぜ限界を学ぶのか</div>

## 「使わない理由」ではなく、「どこを人が握るか」を決めるために

<div class="fig-area">
<svg viewBox="0 0 990 320" width="100%" style="max-height:340px">
  <rect x="40" y="30" width="420" height="110" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="250" y="66" text-anchor="middle" font-size="19" font-weight="800" fill="#5B6068">よくある誤解</text>
  <text x="250" y="98" text-anchor="middle" font-size="16" fill="#555">限界がある＝信用できない</text>
  <text x="250" y="120" text-anchor="middle" font-size="16" fill="#555">＝だから研究では使わない</text>
  <text x="490" y="92" text-anchor="middle" font-size="34" font-weight="800" fill="#C2410C">→</text>
  <rect x="530" y="30" width="420" height="110" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
  <text x="740" y="66" text-anchor="middle" font-size="19" font-weight="800" fill="#C2410C">この動画の立場</text>
  <text x="740" y="98" text-anchor="middle" font-size="16" fill="#555">限界を原理で知る＝役割分担の設計</text>
  <text x="740" y="120" text-anchor="middle" font-size="16" fill="#555">例：下書きはAI／事実確認と最終判断は人</text>
  <rect x="160" y="200" width="670" height="90" rx="14" fill="#C2410C"/>
  <text x="495" y="236" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">「次の語を、確率で当て続けているだけ」という一点から</text>
  <text x="495" y="266" text-anchor="middle" font-size="17" fill="#fff" opacity="0.94">これから挙げる限界は、すべて同じ根っこから導かれる</text>
  <line x1="495" y1="140" x2="495" y2="198" stroke="#C2410C" stroke-width="2"/>
  <polygon points="495,200 489,190 501,190" fill="#C2410C"/>
</svg>
</div>

<div class="takeaway">線引きが分かれば、AIへの委ね方を他者に説明できる。それが基準を持つこと。</div>

---

<!-- _class: fig -->

<div class="page-title">ハルシネーション</div>

## なぜ“もっともらしい嘘”が、自信満々で出てくるのか

<div class="fig-area">
<svg viewBox="0 0 990 360" width="100%" style="max-height:380px">
  <rect x="20" y="55" width="200" height="100" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="120" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C">① 次の語を予測</text>
  <text x="120" y="120" text-anchor="middle" font-size="16" fill="#555">直前の文から、各候補に</text>
  <text x="120" y="140" text-anchor="middle" font-size="16" fill="#555">確率を割り当てる</text>
  <text x="240" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#C2410C">→</text>
  <rect x="260" y="55" width="200" height="100" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="360" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#C2410C">② ありそうな語を選ぶ</text>
  <text x="360" y="120" text-anchor="middle" font-size="16" fill="#555">“もっともらしい”語を</text>
  <text x="360" y="140" text-anchor="middle" font-size="16" fill="#555">次々につなげる</text>
  <text x="480" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#C2410C">→</text>
  <rect x="500" y="55" width="220" height="100" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="610" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">③ 事実と照合しない</text>
  <text x="610" y="120" text-anchor="middle" font-size="16" fill="#555">書いた内容が本当か</text>
  <text x="610" y="140" text-anchor="middle" font-size="16" fill="#555">確かめる係がいない</text>
  <text x="740" y="112" text-anchor="middle" font-size="26" font-weight="800" fill="#C2410C">→</text>
  <rect x="760" y="55" width="210" height="100" rx="12" fill="#9A3412"/>
  <text x="865" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">④ 誤りも“断言”</text>
  <text x="865" y="120" text-anchor="middle" font-size="16" fill="#fff" opacity="0.92">流暢なまま、堂々と</text>
  <text x="865" y="140" text-anchor="middle" font-size="16" fill="#fff" opacity="0.92">間違える</text>
  <rect x="120" y="210" width="750" height="70" rx="12" fill="#C2410C"/>
  <text x="495" y="244" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">＝ ハルシネーション（もっともらしい捏造）</text>
  <text x="495" y="268" text-anchor="middle" font-size="16" fill="#fff" opacity="0.94">「正しさ」を確かめる係（＝接地・grounding）が最初からいない</text>
  <line x1="495" y1="150" x2="495" y2="208" stroke="#C2410C" stroke-width="2"/>
  <polygon points="495,210 489,200 501,200" fill="#C2410C"/>
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
  <rect x="20" y="40" width="340" height="120" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="40" y="80" font-size="19" font-weight="800" fill="#C2410C">① 訓練が“ありそう”を報いる</text>
  <text x="40" y="112" font-size="17" fill="#555">真偽は最適化の対象外。</text>
  <text x="40" y="138" font-size="17" fill="#555">“もっともらしさ”だけを学ぶ</text>
  <rect x="20" y="180" width="340" height="120" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="40" y="220" font-size="19" font-weight="800" fill="#5B6068">② 評価が“推測”を優遇する</text>
  <text x="40" y="252" font-size="17" fill="#555">「分からない」を減点する採点</text>
  <text x="40" y="278" font-size="17" fill="#555">では、推測した方が高得点</text>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">試験にたとえると</div><div class="b">

- 空欄は<span class="red">0点</span>、勘で埋めて当たれば<span class="red">加点</span>。だから勘でも埋めた方が得
- 同じ理由でモデルも、不確実でも<span class="red">自信ありげに断言</span>する方へ寄っていく
- 技術で頻度は下げられても、評価の設計を変えない限り<span class="red">原理的に残る</span>

</div></div>

</div>
</div>

<div class="takeaway">「たまに間違う」ではなく「正しさを判定する仕組みが最初から無い」と捉える。</div>

<div class="attr">出典: Kalai et al., Why Language Models Hallucinate (OpenAI, 2025／Nature, 2026) </div>

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
  <rect x="18" y="128" width="384" height="120" rx="9" fill="#FBE7D6" stroke="#C2410C" stroke-width="3"/>
  <text x="36" y="166" font-size="20" fill="#9A3412" font-weight="800">この論文もDOIも</text>
  <text x="36" y="196" font-size="20" fill="#9A3412" font-weight="800">存在しない（架空）</text>
  <text x="36" y="228" font-size="16" fill="#C2410C" font-weight="700">→ DBで検索しても見つからない</text>
  <text x="210" y="272" text-anchor="middle" font-size="16" fill="#5B6068">書式は完璧。中身は裏取りしないと分からない</text>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">何が起きているか</div><div class="b">

- 架空の<span class="red">著者・年・DOI</span>を、書式まで完璧に出力（DOI＝論文ごとの識別番号）
- 専門的な話題ほど“それっぽさ”が増し、<span class="red">詳しくない分野ほど見抜けない</span>
- 引用・数値・固有名は、原典やDB（一次情報）で<span class="red">一件ずつ裏取り</span>

</div></div>

</div>
</div>

<div class="takeaway">引用・数値・固有名は、出典を自分で確認してから使う。例外を作らない。</div>

---

<!-- _class: fig -->

<div class="page-title">生成画像の均質バイアス</div>

## “平均”を当てにいく性質は、画像でも「似たり寄ったり」を生む

<div class="fig-area">
<div class="figwrap"><img src="./src/fig03-ai-bias-faces.jpg" alt="生成AIが作った医療従事者の顔画像。多くが似た年齢・髪型・雰囲気に偏り、多様性が乏しい均質バイアスの例"></div>
<div class="caption">いちばん“ありそう”な像を選ぶ仕組みなので、典型から外れた人ほど出にくい。</div>
</div>

<div class="takeaway">「もっともらしさ」の最大化は、多様性・少数事例・外れ値を取りこぼす。</div>

---

<!-- _class: split -->

<div class="page-title">フェイク／ディープフェイク</div>

## 「誰でも・簡単に・精巧に」──見破る目より、出所を問う姿勢

<div class="split-body">
<div class="left">

<div class="figwrap"><img src="./src/fig05c-fake-example.jpg" alt="生成AIで作られた偽の水害ドローン映像がSNSに投稿された実例の画面"></div>

</div>
<div class="right">

<div class="cbox red"><div class="h">何が問題か</div><div class="b">

- 災害時、<span class="red">偽の被災映像</span>が拡散し救助・避難を誤らせる／顔・声を差し替える<span class="red">ディープフェイク</span>は選挙妨害にも
- 作成コストは下がる一方、<span class="red">検出は常に後追い</span>（透かしは剥がせる）
- 細部の破綻は手がかりだが、生成技術の進歩で<span class="red">痕跡は急速に消えつつある</span>

</div></div>

</div>
</div>

<div class="takeaway">「見た目が本物らしい」は真正性の根拠にならない。最後の砦は発信源を辿る姿勢。</div>

<div class="attr">出典: EU AI Act / Digital Services Act 合成コンテンツ透明性（2025） </div>

---

<!-- _class: split -->

<div class="page-title">研究現場に効く三つの限界</div>

## 前提・検証・統合──ここは人が握り続ける領域

<div class="split-body">
<div class="left">

<div class="cbox red"><div class="h">④ フレーム問題</div><div class="b">

- 人は<span class="red">関係ない事</span>を捨てて、考える範囲を切れる
- 例：論文に「地球の自転」までは持ち込まない
- AIは言葉にされない<span class="red">暗黙の前提</span>に弱い。前提と範囲を与えるのは人の仕事

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">⑤ コードの完全性</div><div class="b">

- <span class="red">動く≠正しい</span>。空配列・欠損(NaN)などの境界条件を黙って外す
- エラーが出なくても、誤った数値のまま結論へ進む
- だから<span class="red">テスト・検証は人</span>が担保する

</div></div>

</div>
</div>

<div class="band">⑥ 全体最適の壁：部分は最適でも全体は<span class="red">平均的</span>に寄る。<span class="red">問いの設定と統合</span>こそ人の付加価値。</div>

---

<!-- _class: summary -->

<div class="page-title">限界の地図とまとめ</div>

## 限界の裏返しが、“人がやるべきこと”

<div class="grid2">

<div class="cbox red"><div class="h">① 出力は必ず人が検証する</div><div class="b">

- ①ハルシネーション・②フェイク・③均質バイアス＝AIの出力そのものを疑う
- 引用・数値・固有名・コードは<span class="red">一次情報で裏取り</span>
- 「本物らしい」を真正性の根拠にせず<span class="red">発信源</span>を辿る

</div></div>

<div class="cbox blue"><div class="h">② 問い・前提・統合は人の役割</div><div class="b">

- ④前提と範囲の設定・⑤テストと検証・⑥問いと統合＝人が握る
- 平均へ寄る出力を<span class="red">束ね</span>、外れ値を補い、面白い問いを立てる
- 共通項：AIは「正しさ」も「文脈」も<span class="red">内蔵していない</span>

</div></div>

</div>

<div class="takeaway">限界を知るほど、AIは“怖い道具”から“使える道具”に変わる。次は「研究倫理」へ。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 6</div>

# 研究倫理の概観

## AIの前に、まず「研究の誠実さ」という土台

---

<!-- _class: fig -->

<div class="page-title">インテグリティ</div>

## アカデミック・インテグリティ＝学問の誠実性 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 990 330" width="100%" style="max-height:340px">
  <!-- definition band -->
  <rect x="120" y="6" width="750" height="46" rx="10" fill="#9A3412"/>
  <text x="495" y="30" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">学問における誠実さ（Academic Integrity）── 困難な状況でも貫く6つの価値</text>
  <line x1="495" y1="52" x2="495" y2="68" stroke="#9A3412" stroke-width="2"/>
  <polygon points="495,72 489,62 501,62" fill="#9A3412"/>
  <!-- six pillars (ICAI fundamental values) — 3×2 grid, JP/EN on separate lines -->
  <g text-anchor="middle">
    <!-- row 1 -->
    <rect x="60"  y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="100" y="120" font-size="30">🔍</text>
    <text x="201" y="118" font-size="22" font-weight="800" fill="#9A3412">① 正直</text>
    <text x="201" y="142" font-size="18" font-weight="700" fill="#C2410C">Honesty</text>
    <text x="201" y="166" font-size="16" fill="#5B6068">事実を曲げず負も隠さない</text>
    <rect x="354" y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="394" y="120" font-size="30">🤝</text>
    <text x="495" y="118" font-size="22" font-weight="800" fill="#9A3412">② 信頼</text>
    <text x="495" y="142" font-size="18" font-weight="700" fill="#C2410C">Trust</text>
    <text x="495" y="166" font-size="16" fill="#5B6068">手順を開示し検証できる</text>
    <rect x="648" y="82" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="688" y="120" font-size="30">⚖️</text>
    <text x="789" y="118" font-size="22" font-weight="800" fill="#9A3412">③ 公正</text>
    <text x="789" y="142" font-size="18" font-weight="700" fill="#C2410C">Fairness</text>
    <text x="789" y="166" font-size="16" fill="#5B6068">貢献を正しく配分する</text>
    <!-- row 2 -->
    <rect x="60"  y="190" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="100" y="228" font-size="30">🙇</text>
    <text x="201" y="226" font-size="22" font-weight="800" fill="#9A3412">④ 敬意</text>
    <text x="201" y="250" font-size="18" font-weight="700" fill="#C2410C">Respect</text>
    <text x="201" y="274" font-size="16" fill="#5B6068">引用で先人に謝意を示す</text>
    <rect x="354" y="190" width="282" height="98" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="394" y="228" font-size="30">📌</text>
    <text x="495" y="226" font-size="22" font-weight="800" fill="#9A3412">⑤ 責任</text>
    <text x="495" y="250" font-size="18" font-weight="700" fill="#C2410C">Responsibility</text>
    <text x="495" y="274" font-size="16" fill="#5B6068">道具任せにせず引き受ける</text>
    <rect x="648" y="190" width="282" height="98" rx="12" fill="#F3DCC8" stroke="#9A3412" stroke-width="2"/>
    <text x="688" y="228" font-size="30">💪</text>
    <text x="789" y="226" font-size="22" font-weight="800" fill="#9A3412">⑥ 勇気</text>
    <text x="789" y="250" font-size="18" font-weight="700" fill="#C2410C">Courage</text>
    <text x="789" y="274" font-size="16" fill="#5B6068">声を上げ誤りを正す</text>
  </g>
  <text x="495" y="316" text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">この6つの価値（ICAIの基本価値）が、行動の原則を導く ── ⑥勇気は後の版で追加</text>
</svg>
</div>

<div class="attr">出典: ICAI, The Fundamental Values of Academic Integrity (3rd ed.)　</div>

<div class="takeaway">この6価値はAIの有無によらず不変。土台が崩れれば研究は成り立たない。</div>

---

<!-- _class: summary -->

<div class="page-title">特定不正行為</div>

## FFP ── 越えてはならない一線

<div class="indent-md">

- **捏造（Fabrication）** ── <span class="red">存在しないデータ・結果</span>を作り出す
- **改ざん（Falsification）** ── 得た結果・過程を<span class="red">不当に加工</span>する
- **盗用（Plagiarism）** ── 他者の成果を<span class="red">適切な表示なく流用</span>（自己盗用も含む）
<div style="margin-top:6px;"><span class="src">（出典: 日本学術振興会『科学の健全な発展のために─誠実な科学者の心得』）</span></div>

</div>

<div class="band">この3つの頭文字が「FFP」。日本では国が定義する<span class="red">特定不正行為</span>です <span class="src">（出典: 文科省「研究活動における不正行為への対応等に関するガイドライン」2014）</span>。</div>

---

<!-- _class: summary -->

<div class="page-title">この章のまとめ</div>

## 研究倫理 ── この2点を持ち帰る

<div class="indent-md">

- **① 誠実性はAIと無関係に必須** ── 正直・信頼・公正・敬意・責任・勇気の6価値が土台
- **② 「AIがやった」は言い訳にならない** ── 不正かは<span class="red">行為そのもの</span>で判定し、責任は<span class="red">利用した研究者</span>本人
- 研究は<span class="red">信頼の連鎖</span>で積み上がる ── 一件の不正が分野全体の信頼を壊す

</div>

<div class="statement">道具は変わる。誠実さの基準は、変わらない。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 7</div>

# 研究倫理 × 生成AI

## 投稿先のポリシーを起点に、研究の段階ごとに判断する

---

<!-- _class: fig -->

<div class="page-title">最初の一手</div>

## まず<span class="red">投稿先・所属学会のAIポリシー</span>を確認する <span class="important">出発点</span>

<div class="fig-area">
<svg viewBox="0 0 990 260" width="100%" style="max-height:360px">
  <defs>
    <marker id="ar7a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#C2410C"/></marker>
  </defs>
  <g text-anchor="middle">
    <rect x="20" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#9A3412" stroke-width="2"/>
    <text x="125" y="78" font-size="18" font-weight="800" fill="#9A3412">① 投稿先を想定</text>
    <text x="125" y="104" font-size="16" fill="#5B6068">論文誌・所属学会・会議</text>
    <text x="125" y="122" font-size="16" fill="#5B6068">を具体的に決める</text>
    <rect x="262" y="40" width="210" height="96" rx="14" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="367" y="78" font-size="18" font-weight="800" fill="#fff">② AIポリシー確認</text>
    <text x="367" y="104" font-size="16" fill="#FBE7D6">投稿規程・著者規定</text>
    <text x="367" y="122" font-size="16" fill="#FBE7D6">査読規程の両方</text>
    <rect x="504" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="609" y="78" font-size="18" font-weight="800" fill="#C2410C">③ 段階ごとに可否</text>
    <text x="609" y="104" font-size="16" fill="#5B6068">実施／執筆／査読／</text>
    <text x="609" y="122" font-size="16" fill="#5B6068">改訂で線引きが違う</text>
    <rect x="746" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
    <text x="851" y="78" font-size="18" font-weight="800" fill="#9A3412">④ 開示し記録</text>
    <text x="851" y="104" font-size="16" fill="#5B6068">使ったら書いて</text>
    <text x="851" y="122" font-size="16" fill="#5B6068">版・履歴を残す</text>
  </g>
  <line x1="232" y1="88" x2="258" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <line x1="474" y1="88" x2="500" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <line x1="716" y1="88" x2="742" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <text x="495" y="218" text-anchor="middle" font-size="18" font-weight="800" fill="#9A3412">可否のルールは「分野・媒体・研究の段階」ごとに違う ── 一律の正解はない</text>
</svg>
</div>

<div class="takeaway">可否は媒体ごと、さらに研究の段階ごとに違う。まず規程を読むところから始める。</div>

---

<!-- _class: summary -->

<div class="page-title">本日の見取り図</div>

## ポリシーを「研究ライフサイクルの<span class="red">4つの次元</span>」で読む

- <span class="red">(A) 研究の実施</span> ── コード・データ生成・分析・文献検索など、中身をつくる段階
- <span class="red">(B) 原稿の作成</span> ── 推敲・草稿・翻訳・図表など、原稿に仕上げる段階
- <span class="red">(C) 査読</span> ── 投稿された原稿を評価する側に立つ段階
- <span class="red">(D) 査読への対応・改訂</span> ── 受け取った査読に応答し改訂する段階

<div class="band">同じ「AIを使う」でも、どの次元にいるかで可否が逆転する。まず「自分は今どこか」を意識する。</div>

---

<!-- _class: fig -->

<div class="page-title">Science 公式ガイドライン</div>

## 次元で可否が変わる ── <span class="red">生成は開示／査読は原稿を入れない</span> <span class="important">要確認</span>

<table class="dtbl" style="font-size:22px">
<tr><th>次元</th><th>代表的な作業と可否</th></tr>
<tr><td class="l">(A) 研究の実施</td><td class="l">文献検索は可／コード・データ生成は<span class="red">条件付き可</span></td></tr>
<tr><td class="l">(B) 原稿の作成</td><td class="l">校正は可／執筆・翻訳は<span class="red">条件付き可</span>／<span class="hl-dark" style="color:#9A3412;font-weight:800">図の生成は不可</span></td></tr>
<tr><td class="l">(C) 査読</td><td class="l"><span class="hl-dark" style="color:#9A3412;font-weight:800">原稿をLLMに入れて査読生成は不可</span>／言語推敲のみ可</td></tr>
<tr><td class="l">(D) 対応・改訂</td><td class="l"><span class="hl-dark" style="color:#9A3412;font-weight:800">原稿をLLMに入れて改訂は不可</span>／言語推敲のみ可</td></tr>
</table>

<div style="font-size:20px; margin:6px 0;">大前提：AI生成物を自分の研究のように見せるのは、全段階で<span class="hl-dark" style="color:#9A3412;font-weight:800">不可</span>。「条件付き可」はすべて<span class="red">開示が条件</span>（A・Bは Methods／謝辞にモデル名と版を書く）。</div>

<div class="attr">出典: Science Journals 編集方針（AIガイドライン） （投稿時に最新版を確認）</div>

<div class="takeaway">中身の生成は開示すれば可、図生成は不可。査読・改訂は「原稿をLLMに入れる」こと自体が不可。</div>

---

<!-- _class: split -->

<div class="page-title">Nature / NeurIPS と査読の理由</div>

## 他媒体も同じ骨格 ── <span class="red">著者性・開示・図、そして査読は特に厳しい</span>

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:19px">
<tr><th></th><th>Nature<br><span class="src" style="white-space:normal;">（出典: Nature 編集方針）</span></th><th>NeurIPS 2025<br><span class="src" style="white-space:normal;">（出典: NeurIPS 2025 LLMポリシー）</span></th></tr>
<tr><td class="l">著者性</td><td>AIは著者に<br>できない</td><td>責任は著者</td></tr>
<tr><td class="l">開示</td><td>Methods等に記載<br>(校正のみ不要)</td><td>AI利用を開示</td></tr>
<tr><td class="l">図の生成</td><td>原則不可<br>(例外あり)</td><td>—</td></tr>
</table>

</div>
<div class="right">

<div class="cbox deep"><div class="h">査読・改訂が特に厳しい2つの理由</div><div class="b">

- <span class="red">機密保持</span>：未公開の原稿・査読を外部LLMに入れると第三者に渡る・学習に使われる
- <span class="red">評価の主体</span>：査読は専門家の判断そのもの。外注すれば査読の意味が崩れる

</div></div>

- だから許されるのは<span class="red">自分の言葉の推敲だけ</span>（入力が学習に使われない／ツール明記）

</div>
</div>

<div class="takeaway">媒体が違っても「著者はAIにしない・使ったら開示・図は慎重」は共通。査読は原稿を入れない。</div>

---

<!-- _class: summary -->

<div class="page-title">この章のまとめ</div>

## どんなポリシーも<span class="red">3軸</span>で読み、迷えば開示に倒す <span class="important">核心</span>

- <span class="red">① 人間の責任</span> ── 正確性・引用・分析は著者が全責任。「AIが出した」は免責にならず人が検証
- <span class="red">② 透明性（開示）</span> ── どの段階で・何に・どのモデルかを、媒体の指定する場所に書く
- <span class="red">③ 著者性</span> ── AIは著者になれない。著者は人間、AIは「使った道具」として記述

<div class="band">次元が変わっても新しいAIが出ても、3軸は変わらない。迷ったら開示する側に倒し、共著者と合意し記録を残す。</div>

<div class="qbox">あなたの研究で、AIの使用を「開示する／しない」を分ける境目はどこですか？<br><span style="font-weight:400; font-size:21px;">ヒント：単なる誤字校正＝不要／文章・コード・図の生成＝開示、が目安。</span> <span class="ans">（回答を書く欄）</span></div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 8</div>

# 生成AI時代の研究はどこへ／分野差

## “使い方”はまだ分かれている ─ RAG・エージェントと、加速と注意の両面

---

<!-- _class: split -->

<div class="page-title">RAG</div>

## 検索拡張生成＝“外部知識を引いてから答える”

<div class="band">RAG＝検索拡張生成。答える前に外部資料を<span class="red">検索（Retrieval）</span>し、それを<span class="red">根拠に生成（Generation）</span>する仕組み。第1回は仕組みのイメージだけでOK（詳細は後の回で）。</div>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="120" y="14" width="140" height="44" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="41" font-size="16" font-weight="800" fill="#C2410C">質問・調べたい</text>
    <text x="190" y="74" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="60" y="86" width="260" height="50" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="108" font-size="16" font-weight="800" fill="#9A3412">① 検索する（Retrieval）</text>
    <text x="190" y="127" font-size="16" fill="#5B6068">論文DB・社内資料・Web</text>
    <text x="190" y="152" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="60" y="164" width="260" height="48" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="190" y="185" font-size="16" font-weight="800" fill="#5B6068">② 関連文書を取得</text>
    <text x="190" y="203" font-size="16" fill="#5B6068">根拠になりそうな箇所を抜粋</text>
    <text x="190" y="228" font-size="22" font-weight="800" fill="#C2410C">↓</text>
    <rect x="40" y="240" width="300" height="64" rx="12" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
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

それでも、引いた資料の正しさは人が判断。出典の<span class="red">捏造（偽の引用）</span>も起こりうる。

</div>
</div>

<div class="takeaway">RAGは“裏取りしながら生成”する枠組み。だが正しさの最終判断は人に残る。</div>

<div class="attr">出典: Lewis et al. 2020, Retrieval-Augmented Generation </div>

---

<!-- _class: split -->

<div class="page-title">コーディング/エージェント</div>

## 指示→生成→検証→修正を、自律的に回す方向へ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="70" y="16" width="240" height="46" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="38" font-size="16" font-weight="800" fill="#9A3412">自然言語の指示</text>
    <text x="190" y="55" font-size="16" fill="#5B6068">「○○を解析するコードを書いて」</text>
    <!-- loop -->
    <rect x="50" y="92" width="280" height="156" rx="14" fill="#FBF4EF" stroke="#C2410C" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="190" y="86" font-size="16" font-weight="800" fill="#9A3412">自律ループ</text>
    <rect x="80" y="106" width="220" height="40" rx="9" fill="#E08A4F"/>
    <text x="190" y="131" font-size="16" font-weight="800" fill="#3a1d0a">① コード生成</text>
    <text x="190" y="160" font-size="18" font-weight="800" fill="#C2410C">↓</text>
    <rect x="80" y="168" width="220" height="40" rx="9" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="190" y="193" font-size="16" font-weight="800" fill="#5B6068">② テスト実行・エラー検知</text>
    <text x="150" y="232" font-size="18" font-weight="800" fill="#C2410C">↺</text>
    <text x="232" y="232" font-size="16" fill="#9A3412">③ 通るまで修正</text>
    <!-- human gate -->
    <rect x="60" y="268" width="260" height="46" rx="10" fill="#C2410C"/>
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

研究で要注意：動くこと≠<span class="red">要件を満たす</span>こと。
前提・数式が一つズレれば<span class="red">結論が変わる</span>。

</div>
</div>

<div class="takeaway">“作業”は加速。だが設計と最終検証の責任は、人が握り続ける。</div>

<div class="attr">出典: OpenAI, Introducing Codex </div>

---

<!-- _class: summary -->

<div class="page-title">研究へのインパクト</div>

## 加速は本物 ─ だが“万能感”は薄れ、限界を見極めて使う段階へ

<svg viewBox="0 0 900 150" width="100%" style="max-height:150px;display:block;margin:6px auto 2px">
  <g font-family="sans-serif">
    <text x="20" y="34" font-size="22" font-weight="800" fill="#9A3412">研究でAIを使う人</text>
    <rect x="290" y="16" width="171" height="30" rx="6" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="375" y="37" font-size="18" font-weight="800" fill="#5B6068" text-anchor="middle">57%</text>
    <text x="485" y="38" font-size="26" font-weight="800" fill="#C2410C">→</text>
    <rect x="525" y="16" width="252" height="30" rx="6" fill="#C2410C"/>
    <text x="651" y="37" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">84%</text>
    <text x="800" y="37" font-size="17" fill="#6e7378">1年で急拡大</text>
    <text x="20" y="92" font-size="22" font-weight="800" fill="#5B6068">「AIは人間を超えた」</text>
    <rect x="290" y="74" width="159" height="30" rx="6" fill="#C2410C"/>
    <text x="369" y="95" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">53%</text>
    <text x="485" y="96" font-size="26" font-weight="800" fill="#5B6068">→</text>
    <rect x="525" y="74" width="90" height="30" rx="6" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="570" y="95" font-size="18" font-weight="800" fill="#5B6068" text-anchor="middle">30%未満</text>
    <text x="800" y="95" font-size="17" fill="#6e7378">万能感は後退</text>
  </g>
</svg>

<div class="grid2" style="margin-top:36px">

<div class="b">

**普及は一気に進んだ**（Wiley）

- 論文・出版での利用も<span class="red">45%→62%</span>
- 執筆・要約・翻訳・コードで効率が向上

</div>

<div class="b">

**同時に「現実点検」も**

- 不正確・ハルシネーション懸念は<span class="red">+13ポイント</span>
- 副作用は<span class="red">再現性・査読負荷・均質化</span>

</div>

</div>

<div class="band">加速は歓迎しつつ、再現性・評価の健全さ・多様性を守る設計が問われる。</div>

<div class="attr">出典: Wiley, ExplanAItions 2025（約5,000名/70か国超）ほか </div>

---

<!-- _class: summary -->

<div class="page-title">各社の具体事例</div>

## 自然科学は“計算・解析の高速化”、社会科学は“非構造化データの分析・コーディング自動化”

<div class="grid2">

<div class="cbox mid"><div class="h">自然科学 ── 計算・解析を高速化</div><div class="b">

- AlphaFold＝世界で<span class="red">300万人以上</span>の研究者を支援 <span class="src">（出典: <a href="https://blog.google/intl/ja-jp/company-news/technology/gemini-for-science-io-2026/">Google / DeepMind</a>）</span>
- Gemini for Science＝数時間の構造・ゲノム解析を<span class="red">数分</span>に短縮 <span class="src">（出典: <a href="https://blog.google/intl/ja-jp/company-news/technology/gemini-for-science-io-2026/">Google</a>）</span>
- 推論モデル（o系）が<span class="red">STEM推論</span>を支援 <span class="src">（出典: <a href="https://openai.com/index/scaling-social-science-research/">OpenAI</a>）</span>

</div></div>

<div class="cbox blue"><div class="h">社会科学 ── 非構造化データ分析とコーディング自動化</div><div class="b">

- GABRIEL＝質的データを<span class="blu">定量化</span>する社会科学向けOSS <span class="src">（出典: <a href="https://openai.com/index/scaling-social-science-research/">OpenAI</a>）</span>
- 社会科学者の<span class="blu">81%</span>がAIチャットボットを研究利用 <span class="src">（出典: <a href="https://www.anthropic.com/research/coding-agents-social-sciences">Anthropic</a>）</span>
- 自律エージェント（Claude Code等）は<span class="blu">20%</span>にとどまる <span class="src">（出典: <a href="https://www.anthropic.com/research/coding-agents-social-sciences">Anthropic</a>）</span>

</div></div>

</div>

<div class="band">トップ大学の研究者は<span class="red">40%</span>多くエージェントを使う ── 普及の差が<span class="red">研究格差</span>を生むリスクも <span class="src">（出典: <a href="https://www.anthropic.com/research/coding-agents-social-sciences">Anthropic</a>）</span></div>

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
- 学会・論文誌・指導教員の<span class="red">方針</span>を確認
- 自分の関わり方を<span class="red">言葉にする</span>

</div></div>

</div>

<div class="grid3" style="margin-top:10px">
<div class="cbox soft"><div class="h">実験系</div><div class="b">データ整形・解析コードで活用。生データの扱いに厳格</div></div>
<div class="cbox soft"><div class="h">理論系</div><div class="b">導出の補助に使うが、論理は人が検証する文化</div></div>
<div class="cbox soft"><div class="h">人文社会</div><div class="b">解釈・文章化が核。AI生成の明示を重視する声も</div></div>
</div>

<div class="band">分野差・個人差を前提に、「自分はどう関わるか」を自分の言葉で説明できることがゴール。</div>

---

<!-- _class: fig -->

<div class="page-title">第8章のまとめ</div>

## 2つの方向＋“加速と注意”＋“分野で異なる”を押さえる

<div class="fig-area">
<svg viewBox="0 0 760 430" width="100%" style="max-height:380px">
  <rect x="196" y="12" width="368" height="52" rx="12" fill="#C2410C"/>
  <text x="380" y="45" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">生成AI時代の研究は2方向へ</text>
  <line x1="380" y1="64" x2="190" y2="98" stroke="#C2410C" stroke-width="2.5"/>
  <line x1="380" y1="64" x2="570" y2="98" stroke="#C2410C" stroke-width="2.5"/>
  <rect x="24" y="98" width="332" height="92" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
  <text x="190" y="132" text-anchor="middle" font-size="23" font-weight="800" fill="#9A3412">① RAG（裏取り生成）</text>
  <text x="190" y="166" text-anchor="middle" font-size="20" fill="#5B6068">検索して根拠付きで答える</text>
  <rect x="404" y="98" width="332" height="92" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
  <text x="570" y="132" text-anchor="middle" font-size="23" font-weight="800" fill="#9A3412">② エージェント</text>
  <text x="570" y="166" text-anchor="middle" font-size="20" fill="#5B6068">作業を自律的に回す</text>
  <rect x="60" y="222" width="640" height="60" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="380" y="258" text-anchor="middle" font-size="22" font-weight="800" fill="#5B6068">加速は本物。だが設計・検証は人が握る</text>
  <rect x="60" y="312" width="640" height="92" rx="14" fill="#9A3412"/>
  <text x="380" y="350" text-anchor="middle" font-size="23" font-weight="800" fill="#fff">“使い方”は分野・個人で異なる</text>
  <text x="380" y="382" text-anchor="middle" font-size="20" fill="#FBE7D6">一律の正解はない ─ 自分の分野の作法で判断</text>
</svg>
</div>

<div class="takeaway">技術の方向、加速と注意、分野の作法。三つを見て、自分の関わり方を決める。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 9</div>

# 研究へのインパクトと、不正・グレー事例

## 加速の恩恵と、新しい落とし穴を同時に見る

---

<!-- _class: split -->

<div class="page-title">研究へのインパクト</div>

## 研究を加速する一方で、新しい落とし穴も同時に生む

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 268" width="100%" style="max-height:300px">
  <line x1="190" y1="40" x2="190" y2="258" stroke="#5B6068" stroke-width="2" stroke-dasharray="4 4"/>
  <rect x="20" y="50" width="150" height="36" rx="8" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="95" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#1A6BB0">AIが加速</text>
  <g font-size="16" text-anchor="middle">
    <rect x="20" y="98" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="119" font-weight="700">探索・下調べ</text>
    <rect x="20" y="138" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="159" font-weight="700">要約・作文</text>
    <rect x="20" y="178" width="150" height="32" rx="7" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="95" y="199" font-weight="700">コード試作</text>
  </g>
  <text x="95" y="244" text-anchor="middle" font-size="30" fill="#1A6BB0" font-weight="800">↑速い</text>
  <rect x="210" y="50" width="150" height="36" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="285" y="74" text-anchor="middle" font-size="16" font-weight="800" fill="#C2410C">人が握る</text>
  <g font-size="16" text-anchor="middle">
    <rect x="210" y="98" width="150" height="32" rx="7" fill="#fff" stroke="#C2410C" stroke-width="1.5"/><text x="285" y="119" font-weight="700">問いを立てる</text>
    <rect x="210" y="138" width="150" height="32" rx="7" fill="#fff" stroke="#C2410C" stroke-width="1.5"/><text x="285" y="159" font-weight="700">検証する</text>
    <rect x="210" y="178" width="150" height="32" rx="7" fill="#fff" stroke="#C2410C" stroke-width="1.5"/><text x="285" y="199" font-weight="700">責任を負う</text>
  </g>
  <text x="285" y="244" text-anchor="middle" font-size="18" fill="#C2410C" font-weight="800">手放さない</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">速くなること（恩恵）</div><div class="b">

- 探索・要約・コード試作が短時間に圧縮される
- 言語の壁が下がり、一人でも試作まで届く

</div></div>

**同時に増えるリスク**

- ハルシネーション（もっともらしい誤り）の混入
- 速さに<span class="red">検証コストが追いつかない</span>危険

</div>
</div>

<div class="takeaway">速さは、検証で受け止める。“加速”と“確かめる”を必ず一対で設計する。</div>

<div class="attr">出典: AI事業者ガイドライン（総務省・経済産業省, 第1.2版/2026年3月） </div>

---

<!-- _class: summary -->

<div class="page-title">不正・グレー事例</div>

## 「クロ」と「シロ」の間に、判断の割れる広い領域がある

<svg viewBox="0 0 960 150" width="100%" style="max-height:170px">
  <defs>
    <linearGradient id="grayband" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="50%" stop-color="#C99A78"/>
      <stop offset="100%" stop-color="#1A6BB0"/>
    </linearGradient>
  </defs>
  <rect x="20" y="10" width="300" height="64" rx="10" fill="#FBE7D6" stroke="#9A3412" stroke-width="2"/>
  <text x="170" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#9A3412">① 明確な不正（クロ）</text>
  <text x="170" y="60" text-anchor="middle" font-size="16" fill="#9A3412">捏造・無断流用・機微情報入力</text>
  <rect x="335" y="10" width="290" height="64" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="480" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#5B6068">② グレー（判断が割れる）</text>
  <text x="480" y="60" text-anchor="middle" font-size="16" fill="#5B6068">校正・要約・着想の“程度”</text>
  <rect x="640" y="10" width="300" height="64" rx="10" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="790" y="36" text-anchor="middle" font-size="18" font-weight="800" fill="#1A6BB0">③ 問題なし（シロ）</text>
  <text x="790" y="60" text-anchor="middle" font-size="16" fill="#1A6BB0">規約内・開示済み・人が検証</text>
  <rect x="20" y="98" width="920" height="18" rx="9" fill="url(#grayband)"/>
  <text x="60" y="138" text-anchor="start" font-size="18" font-weight="700" fill="#9A3412">クロ</text>
  <text x="900" y="138" text-anchor="end" font-size="18" font-weight="700" fill="#1A6BB0">シロ</text>
</svg>

<div class="grid2">

<div>

**クロ（明確な不正）**

- データの<span class="red">捏造・改ざん</span>、他者成果の<span class="red">無断流用</span>
- 機微情報・未公開データの不用意な入力
<div style="margin-top:4px;"><span class="src">（出典: 文化庁「AIと著作権に関する考え方について」2024）</span></div>

</div>

<div>

**グレー（判断が割れる）**

- 英文校正・要約・翻訳を使う<span class="red">範囲と明示</span>
- アイデア出しの関与が<span class="red">著者性</span>を揺らす点
<div style="margin-top:4px;"><span class="src">（出典: 日本学術振興会「科学の健全な発展のために」）</span></div>

</div>

</div>

<div class="band">グレーは“開示 ＋ 合意 ＋ 記録”で扱い、迷ったら安全側に倒すのが、いまのところ最も堅い構えとされています。</div>

---

<!-- _class: summary -->

<div class="page-title">グレーをどう見分けるか</div>

## 判断が割れたら、「3つの問い」で安全側を確かめる

<div class="grid3" style="margin:auto 0;">

<div>

**☐ 問い1：規約に反しないか**

- 投稿先・学会の<span class="red">AIポリシー</span>を確認
- 触れるなら<span class="red">クロに寄せる</span>

</div>

<div>

**☐ 問い2：開示して説明できるか**

- 用途・範囲を<span class="red">後から説明</span>できるか
- 隠したくなる使い方なら<span class="red">立ち止まる</span>

</div>

<div>

**☐ 問い3：著者性を揺るがさないか**

- 結論への<span class="red">責任</span>を自分が負えるか
- 共著者・指導教員と<span class="red">合意</span>がとれるか

</div>

</div>

<div class="band">3つの問いに迷いなく「はい」と言えないときは、グレーを安全側に倒す。これが、判断が割れる領域での堅い構えです。</div>

<div class="attr">出典: 日本学術振興会「科学の健全な発展のために」 ／ AI事業者ガイドライン（総務省・経済産業省, 第1.2版/2026年3月） </div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 10</div>

# 自分の設計と、まとめ

## “どう関わるか”を、自分の言葉で決める

---

<!-- _class: split -->

<div class="page-title">自分の学びを設計する</div>

## AIは、RPGの“場所ジャンプ”に似ている

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:330px">
  <text x="190" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#5B6068">学びを設計するループ</text>
  <g font-size="16" text-anchor="middle" font-weight="700">
    <rect x="120" y="40" width="140" height="34" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/><text x="190" y="62" fill="#C2410C">① 目的</text>
    <text x="190" y="92" font-size="20" fill="#1A6BB0">↓</text>
    <rect x="120" y="100" width="140" height="34" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="190" y="122" fill="#1A6BB0">② 達成目標</text>
    <text x="190" y="152" font-size="20" fill="#1A6BB0">↓</text>
    <rect x="120" y="160" width="140" height="34" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="190" y="182" fill="#1A6BB0">③ 現状</text>
    <text x="190" y="212" font-size="20" fill="#1A6BB0">↓</text>
    <rect x="120" y="220" width="140" height="34" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="1.5"/><text x="190" y="242" fill="#1A6BB0">④ 設計</text>
    <text x="190" y="272" font-size="20" fill="#1A6BB0">↓</text>
    <rect x="120" y="280" width="140" height="34" rx="8" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/><text x="190" y="302" fill="#1A6BB0">⑤ 評価</text>
  </g>
  <rect x="270" y="150" width="105" height="74" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="1.5"/>
  <text x="322" y="174" text-anchor="middle" font-size="16" font-weight="800" fill="#9A3412">設計を損なう</text>
  <text x="322" y="192" text-anchor="middle" font-size="16" font-weight="800" fill="#9A3412">形では</text>
  <text x="322" y="212" text-anchor="middle" font-size="16" font-weight="800" fill="#9A3412">AIを使わない</text>
  <line x1="270" y1="187" x2="262" y2="200" stroke="#C2410C" stroke-width="1.5"/>
</svg>

</div>
<div class="right">

**“場所ジャンプ”の落とし穴**

- ジャンプし続けると<span class="red">経験値が貯まらない</span>
- いざ自分の足で進もうとしても動けない

<div class="cbox blue"><div class="h">だから、こう設計する</div><div class="b">

- 身につけたい力は<span class="red">意図的に自分で</span>やる
- AIは“到達を速める道具”と割り切る
- 使う／使わない場面を<span class="red">先に決める</span>

</div></div>

</div>
</div>

<div class="takeaway">便利さに、自分の成長を明け渡さない。AIを“成長の設計図”に意図的に組み込む。</div>

---

<!-- _class: summary -->

<div class="page-title">自分の研究で線を引く</div>

## どの工程を“自分で”やり、どこを“AIに任せる”か

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

<div class="band">線引きの基準は3つ：① その力を<span class="red">自分が育てたい</span>か ② 誤りの<span class="red">リスク</span>は大きいか ③ 媒体の<span class="red">規約・開示</span>を満たすか。</div>

<div class="attr">出典: AI事業者ガイドライン（総務省・経済産業省, 第1.2版/2026年3月） ／ ICAI, Fundamental Values of Academic Integrity </div>

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

<div class="band">技術→限界→原則→リスク→倫理→設計。<span class="red">ひとつながりの“判断の土台”</span>として持ち帰る。</div>

<div class="attr">出典: AI事業者ガイドライン（総務省・経済産業省, 第1.2版/令和8年3月31日）。HITL＝人間が関与する仕組み。</div>

---

<!-- _class: refs -->

<div class="page-title">参考文献・リンク</div>

## 参考文献・リンク（一次情報を中心に）

**法令・ガイドライン**

- 総務省・経済産業省 (2026). *AI事業者ガイドライン（第1.2版）*. https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/
- 内閣府 (2025). *AI推進法（令和7年法律第53号）*. https://laws.e-gov.go.jp/law/507AC0000000053
- 文化庁 (2024). *AIと著作権に関する考え方について*. https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/aiwg/
- 個人情報保護委員会. *個人情報の保護に関する法律*. https://www.ppc.go.jp/

**学術倫理**

- 日本学術振興会 (2015). *科学の健全な発展のために*. https://www.jsps.go.jp/j-kousei/rinri.html
- ICAI (2021). *The Fundamental Values of Academic Integrity*. https://academicintegrity.org/resources/fundamental-values

**技術論文／媒体ポリシー**

- Vaswani et al. (2017). *Attention Is All You Need*. https://arxiv.org/abs/1706.03762
- Lewis et al. (2020). *Retrieval-Augmented Generation*. https://arxiv.org/abs/2005.11401
- 媒体別の生成AIポリシー（Nature・Science・AGU・NeurIPS）は<span class="red">Moodleの資料リンク</span>から（投稿前に最新版を確認）

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問・振り返りは Moodle へ ／ 視聴後は、グループワークと個人レポートで“自分の言葉”を聞かせてください
