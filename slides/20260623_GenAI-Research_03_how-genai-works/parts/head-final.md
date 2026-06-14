---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×研究</div><img class="hdr-logo" src="./src/research-genai-logo.svg" alt="研究における生成AIの活用法">'
footer: ''
style: |
  :root { --accent:#C2410C; --accent-dark:#9A3412; --accent-soft:#FBE7D6; --section-bg:#FBF4EF; --hdr-left-w:24%; }
  section .page-title { left:22%; width:36%; }
  h2 { color: var(--accent-dark); }
  section svg { max-width:100%; height:auto; }
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
  .code { font-family:"Menlo","Consolas",monospace; background:#2b2b2b; color:#eee; border-radius:8px; padding:12px 16px; font-size:20px; line-height:1.5; white-space:pre; display:block; text-align:left; }
  .attr { font-size:17px; color:#6e7378; margin-top:6px; }
  .src { font-size:15px; color:#7a7f86; white-space:nowrap; }
  .src a, a.src { color:#1A6BB0; text-decoration:none; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c2b1a3; border-radius:8px; background:#f7f3ef; color:#8a7a6a; display:flex; align-items:center; justify-content:center; text-align:center; font-size:16px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:22px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #cdcdcd; padding:9px 16px; text-align:center; }
  .dtbl th { background:var(--accent-soft); } .dtbl td.l { text-align:left; }
  .figwrap { text-align:center; } .figwrap img { max-height:430px; }
  section { font-size:26px; padding-top:66px; padding-bottom:56px; }
  section h2 { font-size:38px; margin:0 0 8px; }
  section h3 { font-size:27px; }
  .caption { font-size:22px !important; line-height:1.5; }
  .takeaway { font-size:30px; }
  section.summary .sec-box h3 { font-size:25px; } section.summary .sec-box ul { font-size:24px; }
  section.fig .fig-area { min-height:380px; }
  section.split .split-body { min-height:400px; align-items:center; }
  section.summary .sections { flex:1 1 auto; justify-content:center; }
  section.wrap ul { margin-top:auto; margin-bottom:auto; }
  section:has(.takeaway) { padding-bottom:126px !important; }
  section > .band:last-child, section > .takeaway:last-child { margin-top:auto !important; }
  section > .band:has(+ .attr:last-child) { margin-top:auto !important; }
  section:has(.band) { padding-bottom:64px; }
  section.cover-hero .title-affil { font-size:23px; color:#333; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">第3回（オンデマンド）</div>
<div class="title-big">研究における<br>生成AIの活用法</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">生成AIの仕組みを、Colabで小さなGPT（min-GPT→ichimo-GPT）を作って体感する<br><span style="font-size:18px; color:#888;">ナレッジ③</span></div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

---

<!-- _class: summary -->

<div class="page-title">この回の学び方</div>

## この回で、やってほしい3つのこと

<div class="sections">

<div class="sec-box">

### ① 仕組みを学ぶ（特に「学習」）

- 生成AIが<span class="red">どう“学習”して賢くなるのか</span>を、中身から理解する

</div>

<div class="sec-box">

### ② 実際に手を動かす

- Colabで2つの小さなGPTを<span class="red">自分で動かす</span>：①<span class="red">min-GPT</span>（文字の並び替え版）→ ②<span class="red">ichimo-GPT</span>（1文字ずつ予測する版）

</div>

<div class="sec-box">

### ③ ichimo-GPTを提出（任意・ボーナス）

- 最後の演習（ichimo-GPT）の<span class="red">結果やコード改善</span>を出すと<span class="red">ボーナス点</span>（任意・<span class="red">視聴後</span>6/21(日)まで）

</div>

</div>

<div class="band">完璧な理解より“体感”。動かして、つまずいて、AIに聞きながら進めましょう。</div>

---

<!-- _class: fig -->

<div class="page-title">この科目の全8回（＝授業回）</div>

## 今回は第3回 ── 「仕組み」を“手を動かして”理解する回

<div class="fig-area">
<table class="dtbl" style="font-size:20px; width:92%;">
<tr><th>回</th><th class="l">テーマ</th><th>形式</th></tr>
<tr><td>1</td><td class="l">ナレッジ①：生成AIと倫理とリテラシー</td><td>オンデマンド</td></tr>
<tr><td>2</td><td class="l">ナレッジ②：学術情報流通（成果公表・査読）の仕組み</td><td>オンデマンド</td></tr>
<tr style="background:#FBE7D6;"><td><strong>3</strong></td><td class="l"><strong>ナレッジ③：生成AIの仕組み（ミニチュアを作るColab演習）　← 今回</strong></td><td>オンデマンド</td></tr>
<tr><td>4</td><td class="l">研究・論文①：アカデミック・インテグリティと生成AI</td><td>オンデマンド</td></tr>
<tr><td>5</td><td class="l">研究・論文②：各分野での受容状況を共有</td><td>同時双方向</td></tr>
<tr><td>6</td><td class="l">研究手法①：AIを研究で用いる</td><td>オンデマンド</td></tr>
<tr><td>7</td><td class="l">研究手法②：AIの研究利用の調査と情報交換</td><td>ハイブリッド</td></tr>
<tr><td>8</td><td class="l">議論とリフレクション（最終レポートへ）</td><td>ハイブリッド</td></tr>
</table>
</div>

<div class="takeaway">第1回で扱った「AIは<span class="red">次にくる語を確率で予測している</span>」を、今回は自分の手で動かして確かめる回です。</div>

---

<!-- _class: summary -->

<div class="page-title">この回のねらい</div>

## 生成AIの“超ミニチュア”を作り、仕組みに「勘」を持つ

<div class="sections" style="justify-content:flex-start; margin-top:18px; gap:22px;">

<div class="sec-box">

### 何をするか

- Colabのノートを順に実行し、<span class="red">AIの中で何が起きているか</span>を自分の目で確かめる
- 小さなGPTを2つ動かす：<span class="red">min-GPT</span>（min＝最小／文字を並び替える版）→ <span class="red">ichimo-GPT</span>（ichimo＝一文字／1文字ずつ予測する版）
- <span class="gry" style="font-size:21px;">※この2つの呼び名で、表紙からこの先まで統一して進めます</span>

</div>

<div class="sec-box">

### なぜやるか

- 仕組みを知ると、<span class="red">得意・不得意を見抜く「勘」</span>が持てる
- 研究で道具として使うとき、その勘が<span class="red">判断の足場</span>になる

</div>

</div>

<div class="band">「魔法の箱」を開けて中を見る回。完璧な理解より“体感”を大切に。</div>

---

<!-- _class: fig -->

<div class="page-title">今回（第3回）の流れ</div>

## Colabを動かして中身を確かめる

<div class="fig-area">
<svg viewBox="0 0 1000 300" width="100%" style="max-height:360px">
  <g text-anchor="start" font-size="16">
    <rect x="12" y="8" width="20" height="14" rx="3" fill="#fff" stroke="#C2410C" stroke-width="1.8"/><text x="40" y="20" font-weight="700" fill="#5B6068">必須</text>
    <rect x="120" y="8" width="20" height="14" rx="3" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5" stroke-dasharray="3 2"/><text x="148" y="20" font-weight="700" fill="#5B6068">参考（任意）</text>
    <rect x="300" y="8" width="20" height="14" rx="3" fill="#FBE7D6" stroke="#9A3412" stroke-width="2"/><text x="328" y="20" font-weight="700" fill="#9A3412">★提出（ボーナス）</text>
  </g>
  <g text-anchor="middle">
    <g><rect x="12" y="66" width="124" height="104" rx="10" fill="#F3DCC8" stroke="#9A3412" stroke-width="2"/><text x="74" y="88" font-size="16" font-weight="700" fill="#9A3412">この動画</text><text x="74" y="120" font-size="24" font-weight="800" fill="#9A3412">①</text><text x="74" y="150" font-size="18" font-weight="700" fill="#9A3412">学び方</text></g>
    <g><rect x="156" y="66" width="124" height="104" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.8" stroke-dasharray="5 3"/><text x="218" y="92" font-size="24" font-weight="800" fill="#5B6068">②</text><text x="218" y="124" font-size="18" font-weight="700">Colab操作</text><text x="218" y="152" font-size="16" fill="#5B6068">（参考）</text></g>
    <g><rect x="300" y="66" width="124" height="104" rx="10" fill="#fff" stroke="#C2410C" stroke-width="2"/><text x="362" y="92" font-size="24" font-weight="800" fill="#C2410C">③</text><text x="362" y="128" font-size="18" font-weight="700">中身を可視化</text></g>
    <g><rect x="444" y="66" width="124" height="104" rx="10" fill="#fff" stroke="#C2410C" stroke-width="2"/><text x="506" y="92" font-size="24" font-weight="800" fill="#C2410C">④</text><text x="506" y="124" font-size="18" font-weight="700">min-GPT</text><text x="506" y="150" font-size="18" font-weight="700">を作る</text></g>
    <g><rect x="588" y="66" width="124" height="104" rx="10" fill="#fff" stroke="#C2410C" stroke-width="2"/><text x="650" y="92" font-size="24" font-weight="800" fill="#C2410C">⑤</text><text x="650" y="128" font-size="18" font-weight="700">トーカナイザ</text></g>
    <g><rect x="732" y="66" width="124" height="104" rx="10" fill="#FBE7D6" stroke="#9A3412" stroke-width="2.5"/><text x="794" y="88" font-size="16" font-weight="800" fill="#C2410C">★提出</text><text x="794" y="118" font-size="24" font-weight="800" fill="#9A3412">⑥</text><text x="794" y="150" font-size="17" font-weight="700" fill="#9A3412">ichimo-GPT</text></g>
    <g><rect x="876" y="66" width="112" height="104" rx="10" fill="#fff" stroke="#C2410C" stroke-width="2"/><text x="932" y="92" font-size="24" font-weight="800" fill="#C2410C">⑦</text><text x="932" y="128" font-size="18" font-weight="700">推論と</text><text x="932" y="150" font-size="18" font-weight="700">まとめ</text></g>
    <g fill="#C2410C" font-size="24" font-weight="800">
      <text x="146" y="124">→</text><text x="290" y="124">→</text><text x="434" y="124">→</text><text x="578" y="124">→</text><text x="722" y="124">→</text><text x="866" y="124">→</text>
    </g>
  </g>
  <rect x="120" y="222" width="760" height="50" rx="10" fill="#C2410C"/>
  <text x="500" y="246" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">ノートを順に実行して中身を体感</text>
  <text x="500" y="266" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">⑥ichimo-GPT（＝最後の演習）は任意でボーナス提出（視聴後6/21まで）</text>
</svg>
</div>

<div class="takeaway">手を動かすのが主役。スライドは“地図”、本番はColabです。</div>

---

<!-- _class: split -->

<div class="page-title">この回の学び方</div>

## コードは書かない ── 実行して、見て、分からなければAIに聞く

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="55" y="24" width="250" height="58" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="50" font-size="18" font-weight="800" fill="#C2410C">① ノートをコピー</text>
    <text x="180" y="72" font-size="16" fill="#5B6068">自分のドライブに保存</text>
    <text x="180" y="100" font-size="24" fill="#C2410C" font-weight="800">↓</text>
    <rect x="55" y="110" width="250" height="58" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
    <text x="180" y="136" font-size="18" font-weight="800" fill="#1A6BB0">② セルを順に実行 ▶</text>
    <text x="180" y="158" font-size="16" fill="#5B6068">出力を見て中身を確かめる</text>
    <text x="180" y="186" font-size="24" fill="#1A6BB0" font-weight="800">↓</text>
    <rect x="55" y="196" width="250" height="58" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="222" font-size="18" font-weight="800" fill="#5B6068">③ 分からない所はAIに</text>
    <text x="180" y="244" font-size="16" fill="#5B6068">コードを貼って「何してる？」</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">進め方の要点</div><div class="b">

- <span class="red">プログラムは書きません</span>。実行して理解すればOK
- 最初に計算を速くする<span class="red">GPUに切り替え</span>（やり方は動画②／p.010で説明）。<span class="red">90分でタイムアウト</span>＝1ノートは一気に
- <span class="red">提出は任意（ボーナス）</span>：ichimo-GPT（1文字予測GPT・動画6）の結果・コード改善を出すと加点（視聴後6/21まで）

</div></div>

<div class="band">訳の分からない所こそ、生成AIに聞く好機。使いながら学ぶ。</div>

</div>
</div>
