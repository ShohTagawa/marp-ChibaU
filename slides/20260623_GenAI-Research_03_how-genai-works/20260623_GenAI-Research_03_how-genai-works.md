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

---

<!-- _class: divider -->

<div class="chapter-num">②</div>

# Colab の使い方

## ブラウザだけで動く、クラウドのPython実行環境

---

<!-- _class: split -->

<div class="page-title">Colabとは</div>

## ブラウザの中の「ノートブック」── インストール不要で動く

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <rect x="30" y="22" width="300" height="256" rx="12" fill="#fff" stroke="#C2410C" stroke-width="2"/>
  <rect x="30" y="22" width="300" height="34" rx="12" fill="#FBE7D6"/>
  <rect x="30" y="44" width="300" height="12" fill="#FBE7D6"/>
  <circle cx="50" cy="39" r="6" fill="#E08A4F"/>
  <circle cx="68" cy="39" r="6" fill="#E08A4F"/>
  <text x="200" y="45" text-anchor="middle" font-size="16" font-weight="700" fill="#9A3412">Google Colab（ブラウザ）</text>
  <rect x="48" y="74" width="264" height="56" rx="8" fill="#2b2b2b"/>
  <text x="62" y="98" font-size="16" font-family="monospace" fill="#9CDCFE">print("hello")</text>
  <text x="62" y="120" font-size="16" font-family="monospace" fill="#888">▶ 実行する</text>
  <circle cx="62" cy="158" r="11" fill="#C2410C"/>
  <path d="M58 153 L58 163 L67 158 Z" fill="#fff"/>
  <text x="200" y="163" text-anchor="middle" font-size="16" fill="#5B6068">セルを ▶ で実行</text>
  <rect x="48" y="186" width="264" height="60" rx="8" fill="#F5F6F7" stroke="#cdd0d4"/>
  <text x="62" y="210" font-size="16" font-family="monospace" fill="#333">hello</text>
  <text x="62" y="234" font-size="16" fill="#5B6068">↑ すぐ下に結果が出る</text>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">Colab ＝ ブラウザで動くPythonノート</div><div class="b">

- Googleが提供する<span class="red">クラウドのPython実行環境</span>。ブラウザだけで動く
- 「<span class="red">セル</span>」という小さな枠にコードを書き、<span class="red">▶ で1つずつ実行</span>
- 環境構築なし。自分のPCに何もインストールしなくてよい
- 多くの研究室で使う標準ツール。<span class="red">Colabが使えれば応用が効く</span>

</div></div>

<div class="band">この回のノートは全部Colab製。まずは「セルを順に押す」だけで動きます。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">セルの中身を読む</div>

## コードセルの「# と !」── 2つの記号だけ覚える

<div class="split-body">
<div class="left">

<div class="code"># これはコメント（実行されない）
# torch＝AIの計算ライブラリ（気にしなくてOK）
import torch
# ! はシェル命令
!pip install janome</div>

<div class="attr">「#」はメモ書き、「!」はColabのマシンへの命令。</div>

</div>
<div class="right">

<div class="cbox mid"><div class="h">この2つだけ押さえる</div><div class="b">

- <span class="red">#</span> … その行は<span class="red">コメント</span>。人間向けのメモで実行されない
- <span class="red">!</span> … 行頭に付けると<span class="red">シェル命令</span>。`!pip install` でライブラリ導入

</div></div>

<div class="band">中身が分からなくてOK。気になる行はコピーして生成AIに「これ何してる？」</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">GPUを使う</div>

## ランタイム → T4 GPU ── 機械学習がぐっと速くなる

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 290" width="100%" style="max-height:290px">
  <rect x="20" y="26" width="320" height="48" rx="9" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
  <text x="180" y="48" text-anchor="middle" font-size="17" font-weight="800" fill="#9A3412">メニュー：ランタイム</text>
  <text x="180" y="67" text-anchor="middle" font-size="16" fill="#5B6068">→ ランタイムのタイプを変更</text>
  <text x="180" y="100" text-anchor="middle" font-size="24" fill="#C2410C" font-weight="800">↓</text>
  <rect x="20" y="114" width="320" height="62" rx="9" fill="#fff" stroke="#C2410C" stroke-width="3"/>
  <text x="180" y="140" text-anchor="middle" font-size="19" font-weight="800" fill="#C2410C">T4 GPU を選ぶ</text>
  <text x="180" y="163" text-anchor="middle" font-size="16" fill="#9A3412" font-weight="700">無料枠で使える定番（今回はこれだけ）</text>
  <text x="180" y="226" text-anchor="middle" font-size="16" fill="#a8acb2">（上位GPUは有料・今回は使いません）</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">速さの正体はGPU</div><div class="b">

- <span class="red">今回はすべて無料枠のT4で完結。課金は不要です</span>
- <span class="blu">GPU＝並列計算が得意なチップ</span>。機械学習の大量の掛け算を一気にこなせるので速い
- 既定はCPU。最初に<span class="blu">ランタイム → T4 GPU</span>へ切り替えておく

</div></div>

<div class="band">最初の一手は「ランタイムをT4 GPUに」。これで待ち時間が短くなります。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">大事な注意</div>

## 90分“放置”で切れる ── 1つのノートはまとまった時間に一気に

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 290" width="100%" style="max-height:290px">
  <circle cx="120" cy="120" r="70" fill="#fff" stroke="#C2410C" stroke-width="3"/>
  <line x1="120" y1="120" x2="120" y2="68" stroke="#9A3412" stroke-width="5" stroke-linecap="round"/>
  <line x1="120" y1="120" x2="158" y2="120" stroke="#9A3412" stroke-width="5" stroke-linecap="round"/>
  <circle cx="120" cy="120" r="6" fill="#9A3412"/>
  <text x="120" y="210" text-anchor="middle" font-size="18" font-weight="800" fill="#9A3412">90分 無操作で放置</text>
  <text x="240" y="110" text-anchor="middle" font-size="40" fill="#C2410C" font-weight="800">→</text>
  <rect x="248" y="78" width="96" height="84" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="296" y="118" text-anchor="middle" font-size="34" fill="#5B6068" font-weight="800">×</text>
  <text x="296" y="150" text-anchor="middle" font-size="16" fill="#5B6068" font-weight="700">接続が切れ消える</text>
  <text x="180" y="258" text-anchor="middle" font-size="17" fill="#5B6068">1ノートの目安は20〜30分。一気に</text>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">だから、こう進める</div><div class="b">

- <span class="red">90分“放置（無操作）”</span>するとセッションが切れ、計算結果が消える
- 1ノートの目安は<span class="red">20〜30分</span>。<span class="red">まとまった時間に一気に</span>最後まで実行する
- 結果を残したいときは<span class="red">Googleドライブに保存</span>する

</div></div>

<div class="band">90分放置で消えます。1ノートは目安20〜30分、座って一気に回しましょう。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">配布ノートの使い方</div>

## まず「自分のドライブにコピー」── 原本は閲覧専用

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 290" width="100%" style="max-height:290px">
  <rect x="36" y="22" width="288" height="66" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
  <text x="180" y="50" text-anchor="middle" font-size="17" font-weight="800" fill="#5B6068">配布ノート（原本）</text>
  <text x="180" y="72" text-anchor="middle" font-size="16" fill="#C2410C" font-weight="700">Moodleのリンクから開く</text>
  <text x="180" y="106" text-anchor="middle" font-size="16" fill="#5B6068">閲覧専用 = 書き込めない</text>
  <text x="180" y="132" text-anchor="middle" font-size="24" fill="#C2410C" font-weight="800">↓</text>
  <text x="180" y="152" text-anchor="middle" font-size="16" fill="#C2410C" font-weight="700">「ドライブにコピー」</text>
  <rect x="36" y="166" width="288" height="64" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
  <text x="180" y="194" text-anchor="middle" font-size="17" font-weight="800" fill="#9A3412">自分のコピー</text>
  <text x="180" y="216" text-anchor="middle" font-size="16" fill="#9A3412">ここに自由に実行・保存</text>
</svg>

</div>
<div class="right">

<div class="cbox soft"><div class="h">最初にやること</div><div class="b">

- 配布ノートは<span class="red">Moodleのリンク</span>から開く（原本はここにあります）
- 原本は<span class="red">閲覧専用</span>。<span class="red">「ドライブにコピー」</span>して、自分のコピーで実行する
- 肩慣らしに、数値を書き換えて<span class="red">▶ をもう一度</span>。「自分で動かせる」感覚をつかむ

</div></div>

<div class="band">「Moodleから開く → コピー → T4 → 一気に実行」。これが押さえられれば準備完了です。</div>

</div>
</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 3</div>

# 大規模言語モデルの中を可視化する

## 今のAIの基本部品を、おもちゃサイズで1つずつ見る

---

<!-- _class: split -->

<div class="page-title">まず、何を解かせるか</div>

## おもちゃのタスク ── 文字を並び替えるだけ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 280" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <rect x="40" y="36" width="300" height="64" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="64" font-size="18" font-weight="700" fill="#5B6068">入力（バラバラの並び）</text>
    <text x="190" y="90" font-size="26" font-weight="800" fill="#9A3412" class="mono">B  A  C  A  B</text>
    <text x="190" y="128" font-size="30" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="146" width="300" height="64" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
    <text x="190" y="174" font-size="18" font-weight="700" fill="#5B6068">出力（昇順に並べる）</text>
    <text x="190" y="200" font-size="26" font-weight="800" fill="#1A6BB0" class="mono">A  A  B  B  C</text>
    <text x="190" y="252" font-size="16" fill="#5B6068">文字は A=0, B=1, C=2 … と数字に変換</text>
    <text x="190" y="272" font-size="16" fill="#5B6068">（モデルは数字でしか計算できないから）</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">なぜ並び替えなのか</div><div class="b">

- 答えが一意で<span class="red">正解・不正解がはっきり</span>する
- 文法も意味もいらない、<span class="red">極小のモデル</span>で解ける
- それでも中身は<span class="red">本物のTransformer</span>と同じ部品

<div style="font-size:18px;color:#6e7378;margin-top:4px;">Transformer＝今のChatGPT等の基本設計。部品はこの後1枚ずつ見ます</div>

</div></div>

<div class="band">まず「中身が全部見える大きさ」まで縮める。それがこの回の出発点です。</div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">このミニチュアの設計</div>

## 部品はたった3種類×3層の超ミニチュア

<div class="fig-area">
<table class="dtbl" style="font-size:23px;">
<tr><th>設定項目</th><th>値</th><th class="l">意味（用語はあとで1枚ずつ説明します）</th></tr>
<tr><td>埋め込み次元</td><td><strong>48</strong></td><td class="l">1文字を表す数字の列（ベクトル）の長さ</td></tr>
<tr><td>ヘッド数</td><td><strong>3</strong></td><td class="l">どの文字を見るかを決める担当。正体は後の heatmap で</td></tr>
<tr><td>層の数</td><td><strong>3</strong></td><td class="l">同じ処理の固まり（ブロック）を何段重ねるか</td></tr>
<tr style="background:#FBE7D6;"><td><strong>総パラメータ</strong></td><td><strong>85,584</strong></td><td class="l"><strong>学習で調整される数値の総数</strong></td></tr>
</table>
<div style="text-align:center;font-size:18px;color:#6e7378;margin-top:8px;">用語の意味は後で1枚ずつ説明します。今は「設定を3つ決めるだけで小さなAIができる」とだけ掴めばOK</div>
</div>

<div class="band">本物のLLMは数百億〜兆。ここではその約100万分の1の 85,584 個。だから全部追えます。</div>

<div class="attr">教材：Andrej Karpathy の min-GPT / nano-GPT（MIT）。解説・教材生成に生成AIを活用。</div>

---

<!-- _class: fig -->

<div class="page-title">中身の全体像</div>

## 1文字が「次の確率」になるまでの一本道

<div style="text-align:center;font-size:20px;color:#5B6068;margin:-2px 0 6px;">今は中身の名前を覚えなくてOK。<span class="red">入口 → たくさんの処理 → 出口（確率）の一本道</span>だと掴むだけ</div>

<div class="fig-area">
<svg viewBox="0 0 980 320" width="100%" style="max-height:420px">
  <g text-anchor="middle">
    <rect x="20" y="118" width="150" height="84" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="95" y="152" font-size="20" font-weight="800" fill="#9A3412">入口</text>
    <text x="95" y="180" font-size="18" fill="#5B6068">1文字</text>
    <text x="200" y="166" font-size="34" fill="#C2410C" font-weight="800">→</text>
    <rect x="240" y="60" width="500" height="200" rx="16" fill="#FBF4EF" stroke="#C2410C" stroke-width="2.5"/>
    <text x="490" y="92" font-size="21" font-weight="800" fill="#9A3412">たくさんの処理（3層を順に通す）</text>
    <rect x="280" y="118" width="130" height="84" rx="12" fill="#fff" stroke="#E08A4F" stroke-width="2"/>
    <text x="345" y="152" font-size="18" font-weight="700" fill="#5B6068">どこを</text>
    <text x="345" y="178" font-size="18" font-weight="700" fill="#5B6068">見るか</text>
    <text x="430" y="166" font-size="26" fill="#E08A4F" font-weight="800">→</text>
    <rect x="460" y="118" width="130" height="84" rx="12" fill="#fff" stroke="#E08A4F" stroke-width="2"/>
    <text x="525" y="152" font-size="18" font-weight="700" fill="#5B6068">考えを</text>
    <text x="525" y="178" font-size="18" font-weight="700" fill="#5B6068">深める</text>
    <text x="610" y="166" font-size="26" fill="#E08A4F" font-weight="800">→</text>
    <rect x="640" y="118" width="80" height="84" rx="12" fill="#fff" stroke="#E08A4F" stroke-width="2"/>
    <text x="680" y="158" font-size="18" font-weight="700" fill="#5B6068">×3</text>
    <text x="680" y="184" font-size="16" fill="#5B6068">層</text>
    <text x="770" y="166" font-size="34" fill="#C2410C" font-weight="800">→</text>
    <rect x="810" y="118" width="150" height="84" rx="14" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2.5"/>
    <text x="885" y="150" font-size="20" font-weight="800" fill="#1A6BB0">出口</text>
    <text x="885" y="178" font-size="17" fill="#5B6068">次の文字の確率</text>
    <text x="490" y="300" font-size="18" fill="#5B6068">各部品（注意・GELU など）の名前は、この後1枚ずつ説明します</text>
  </g>
</svg>
</div>

<div class="band">入口（文字）→ 処理を何層も通す → 出口（次の文字の確率）。まずはこの一本道だけ掴めばOK。</div>

<div class="attr">図：このミニチュアGPTの処理の流れ（簡略版・総パラメータ 85,584）。出典 min-GPT（MIT）＋生成AIで作図。</div>

---

<!-- _class: split -->

<div class="page-title">学習で何が起きるか</div>

## ロス（正解との差）が下がり、ほぼ100%正解に

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 300" width="100%" style="max-height:360px">
  <g>
    <line x1="64" y1="24" x2="64" y2="250" stroke="#5B6068" stroke-width="2.5"/>
    <line x1="64" y1="250" x2="360" y2="250" stroke="#5B6068" stroke-width="2.5"/>
    <text x="36" y="50" font-size="18" fill="#5B6068" font-weight="700" text-anchor="middle">ロス</text>
    <text x="38" y="70" font-size="16" fill="#9A3412" font-weight="700" text-anchor="middle">大=下手</text>
    <text x="38" y="244" font-size="16" fill="#1A6BB0" font-weight="700" text-anchor="middle">小=上手</text>
    <text x="290" y="282" font-size="18" fill="#5B6068" font-weight="700" text-anchor="middle">学習回数（予測を繰り返した数）→</text>
    <path d="M70,44 C130,70 160,170 220,210 C280,236 330,240 358,242" fill="none" stroke="#C2410C" stroke-width="4.5"/>
    <circle cx="70" cy="44" r="6" fill="#9A3412"/>
    <text x="104" y="40" font-size="17" fill="#9A3412" font-weight="700">学習前＝出力バラバラ</text>
    <circle cx="358" cy="242" r="6" fill="#1A6BB0"/>
    <text x="300" y="232" font-size="17" fill="#1A6BB0" font-weight="700">下げ止まり</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">ロスとは</div><div class="b">

- モデルの予測と<span class="red">正解との「ズレ」</span>を数値化したもの
- ズレを見て<span class="red">減る向きに数値を少し動かす</span>→また予測…を<span class="red">何千回も繰り返す</span>（＝学習のループ）
- 学習が進むと並び替えは<span class="red">ほぼ100%正解</span>に

</div></div>

<div class="band">「賢くなる」とは、85,584個の数値が正解に合うよう微調整されること。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">未来を見ないという制約</div>

## 未来を隠す＝カンニング防止（Causal mask）

<div style="font-size:19px;color:#5B6068;margin:-2px 0 6px;">注意（attention）＝<span class="red">各文字が他のどの文字を見るかを決める仕組み</span>（次ページの heatmap で見える化）</div>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <g text-anchor="middle" font-size="16">
    <text x="180" y="24" font-size="17" font-weight="700" fill="#5B6068">注意の許可表（行＝今の文字）</text>
    <g font-weight="800">
      <text x="120" y="58" fill="#9A3412">B</text><text x="170" y="58" fill="#9A3412">A</text><text x="220" y="58" fill="#9A3412">C</text>
    </g>
    <!-- row1 -->
    <rect x="100" y="68" width="40" height="40" fill="#E08A4F" stroke="#fff"/><rect x="150" y="68" width="40" height="40" fill="#EDEEF0" stroke="#fff"/><rect x="200" y="68" width="40" height="40" fill="#EDEEF0" stroke="#fff"/>
    <text x="80" y="94" fill="#9A3412" font-weight="800">B</text>
    <!-- row2 -->
    <rect x="100" y="110" width="40" height="40" fill="#E08A4F" stroke="#fff"/><rect x="150" y="110" width="40" height="40" fill="#E08A4F" stroke="#fff"/><rect x="200" y="110" width="40" height="40" fill="#EDEEF0" stroke="#fff"/>
    <text x="80" y="136" fill="#9A3412" font-weight="800">A</text>
    <!-- row3 -->
    <rect x="100" y="152" width="40" height="40" fill="#E08A4F" stroke="#fff"/><rect x="150" y="152" width="40" height="40" fill="#E08A4F" stroke="#fff"/><rect x="200" y="152" width="40" height="40" fill="#E08A4F" stroke="#fff"/>
    <text x="80" y="178" fill="#9A3412" font-weight="800">C</text>
    <text x="180" y="226" font-size="16" fill="#C2410C" font-weight="700">塗り＝見てよい／白＝未来なので0</text>
    <text x="180" y="252" font-size="16" fill="#5B6068">右上が必ず空く（三角形）</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">なぜ隠すと予測が学べるか</div><div class="b">

- 先（答え）が見えると<span class="blu">カンニング</span>になり予測の練習にならない
- だから各文字は<span class="blu">自分より前だけ</span>を見て次を当てる
- 予測 → 入力に戻す → また予測。これが<span class="blu">「1語ずつ生成」</span>の正体

</div></div>

<div class="band">未来を隠すから、本番でも「まだ無い続き」を予測する力が身につきます。</div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">どこに注目しているか</div>

## Attention heatmap ── どの文字を見て答えを決めたか

<div class="fig-area">
<svg viewBox="0 0 900 440" width="100%" style="max-height:430px">
  <g text-anchor="middle">
    <text x="200" y="28" font-size="20" font-weight="800" fill="#9A3412">層1・ヘッド1</text>
    <text x="480" y="28" font-size="20" font-weight="800" fill="#C2410C">層2・ヘッド2</text>
    <text x="760" y="28" font-size="20" font-weight="800" fill="#E08A4F">層3・ヘッド3</text>
    <text x="200" y="52" font-size="17" fill="#5B6068">近くを見る</text>
    <text x="480" y="52" font-size="17" fill="#5B6068">離れた同じ文字を見る</text>
    <text x="760" y="52" font-size="17" fill="#5B6068">全体をならす</text>
  </g>
  <!-- 縦軸ラベル -->
  <text x="22" y="160" font-size="16" font-weight="700" fill="#5B6068" text-anchor="middle" transform="rotate(-90 22 160)">縦＝出力する位置</text>
  <!-- 列見出し（見ている文字） / 行見出し（出力する位置）。例として A B C の3文字 -->
  <!-- heatmap 1 -->
  <g>
    <text x="170" y="74" font-size="18" font-weight="800" fill="#5B6068">A</text><text x="230" y="74" font-size="18" font-weight="800" fill="#5B6068">B</text><text x="290" y="74" font-size="18" font-weight="800" fill="#5B6068">C</text>
    <text x="118" y="126" font-size="18" font-weight="800" fill="#9A3412">A</text><text x="118" y="186" font-size="18" font-weight="800" fill="#9A3412">B</text><text x="118" y="246" font-size="18" font-weight="800" fill="#9A3412">C</text>
    <rect x="140" y="82" width="180" height="180" fill="#FBE7D6"/>
    <rect x="140" y="82" width="60" height="60" fill="#9A3412"/><rect x="200" y="142" width="60" height="60" fill="#C2410C"/><rect x="260" y="202" width="60" height="60" fill="#9A3412"/>
    <rect x="140" y="82" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- heatmap 2 -->
  <g>
    <text x="450" y="74" font-size="18" font-weight="800" fill="#5B6068">A</text><text x="510" y="74" font-size="18" font-weight="800" fill="#5B6068">B</text><text x="570" y="74" font-size="18" font-weight="800" fill="#5B6068">C</text>
    <text x="398" y="126" font-size="18" font-weight="800" fill="#9A3412">A</text><text x="398" y="186" font-size="18" font-weight="800" fill="#9A3412">B</text><text x="398" y="246" font-size="18" font-weight="800" fill="#9A3412">C</text>
    <rect x="420" y="82" width="180" height="180" fill="#FBE7D6"/>
    <rect x="480" y="82" width="60" height="60" fill="#C2410C"/><rect x="420" y="142" width="60" height="60" fill="#9A3412"/><rect x="540" y="202" width="60" height="60" fill="#E8B488"/>
    <rect x="420" y="82" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- heatmap 3 -->
  <g>
    <text x="730" y="74" font-size="18" font-weight="800" fill="#5B6068">A</text><text x="790" y="74" font-size="18" font-weight="800" fill="#5B6068">B</text><text x="850" y="74" font-size="18" font-weight="800" fill="#5B6068">C</text>
    <text x="678" y="126" font-size="18" font-weight="800" fill="#9A3412">A</text><text x="678" y="186" font-size="18" font-weight="800" fill="#9A3412">B</text><text x="678" y="246" font-size="18" font-weight="800" fill="#9A3412">C</text>
    <rect x="700" y="82" width="180" height="180" fill="#FBE7D6"/>
    <rect x="760" y="142" width="60" height="60" fill="#C2410C"/><rect x="700" y="202" width="60" height="60" fill="#9A3412"/><rect x="820" y="82" width="60" height="60" fill="#E8B488"/>
    <rect x="700" y="82" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- 横軸ラベル -->
  <g text-anchor="middle" font-size="16" font-weight="700" fill="#5B6068">
    <text x="230" y="290">横＝見ている文字</text>
    <text x="510" y="290">横＝見ている文字</text>
    <text x="790" y="290">横＝見ている文字</text>
  </g>
  <!-- 凡例バー（参照の強さ） -->
  <g>
    <rect x="350" y="318" width="40" height="20" fill="#9A3412"/><rect x="390" y="318" width="40" height="20" fill="#C2410C"/><rect x="430" y="318" width="40" height="20" fill="#E8B488"/><rect x="470" y="318" width="40" height="20" fill="#FBE7D6"/>
    <rect x="350" y="318" width="160" height="20" fill="none" stroke="#5B6068" stroke-width="1.5"/>
    <text x="344" y="334" font-size="16" fill="#9A3412" text-anchor="end" font-weight="700">強く見る</text>
    <text x="516" y="334" font-size="16" fill="#5B6068" font-weight="700">見ない</text>
  </g>
  <g text-anchor="middle" font-size="18" fill="#5B6068">
    <text x="450" y="378">濃いマスほど、その文字を強く参照している</text>
    <text x="450" y="408" font-size="19" font-weight="700" fill="#C2410C">層・ヘッドごとに役割が分かれ、再学習すると注目の仕方も変わる</text>
  </g>
</svg>
</div>

<div class="takeaway">「どこを見て答えを決めたか」が、色の濃淡として目に見えます。</div>

---

<!-- _class: fig -->

<div class="page-title">部品を抜くと何が壊れるか</div>

## Ablation実験 ── 部品を1つずつ抜いて正解率を比べる

<div style="text-align:center;font-size:20px;color:#5B6068;margin:-2px 0 6px;">部品を1つ外して<span class="red">性能の落ち方を見れば、その部品の役割が分かる</span>（＝対照実験）</div>

<div class="fig-area">
<table class="dtbl" style="font-size:26px;">
<tr><th class="l">抜いた部品</th><th>正解率</th><th class="l">わかること</th></tr>
<tr><td class="l">位置エンコーディング<br><span style="font-size:20px;color:#5B6068;">＝各文字が何番目かを教える情報</span></td><td><span class="red">激減</span></td><td class="l">順番が命の並び替えで「何番目か」が消える</td></tr>
<tr style="background:#FBE7D6;"><td class="l"><strong>Attention</strong></td><td><span class="red"><strong>全問不正解</strong></span></td><td class="l"><strong>他の文字を見られず破綻</strong></td></tr>
<tr><td class="l">層を 3 → 1 に減らす</td><td><span class="blu">なお正解</span></td><td class="l">このタスクは簡単で1層で足りる</td></tr>
</table>
</div>

<div class="band">Attentionを抜くと完全に壊れる ── これがTransformerの心臓だと体感できます。</div>

---

<!-- _class: split -->

<div class="page-title">なぜ非線形が要るのか</div>

## GELUが無いと、全層が「1つの掛け算」に潰れる

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <text x="190" y="26" font-size="17" font-weight="700" fill="#5B6068">まっすぐ（線形）な処理だけだと</text>
    <rect x="60" y="38" width="72" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="96" y="64" font-size="16">層1</text>
    <rect x="154" y="38" width="72" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="190" y="64" font-size="16">層2</text>
    <rect x="248" y="38" width="72" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="284" y="64" font-size="16">層3</text>
    <text x="190" y="100" font-size="20" fill="#5B6068" font-weight="800">↓ 潰れる</text>
    <rect x="100" y="110" width="180" height="40" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/><text x="190" y="136" font-size="16" font-weight="700" fill="#5B6068">結局まっすぐ1本（1回の変換）</text>
    <line x1="120" y1="186" x2="260" y2="186" stroke="#5B6068" stroke-width="3.5"/>
    <text x="190" y="210" font-size="16" fill="#5B6068" font-weight="700">何層重ねても直線のまま</text>
    <text x="190" y="246" font-size="17" font-weight="800" fill="#9A3412">GELUで「曲げる」と</text>
    <path d="M120,300 C150,300 165,262 190,262 C215,262 230,300 260,300" fill="none" stroke="#C2410C" stroke-width="3.5"/>
    <text x="190" y="318" font-size="16" fill="#C2410C" font-weight="700">層ごとに違う仕事ができる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">2つの仕掛け</div><div class="b">

- <span class="red">GELU</span>（非線形）：まっすぐな処理は何回重ねても<span class="red">結局まっすぐ1本</span>＝層を増やす意味がない。GELUで「曲げる」と層ごとに違う仕事ができる
- <span class="red">softmax</span>：たくさんの数値を「合計100%の確率」に変換する仕組み

</div></div>

<div class="band">非線形が「深さ」を、softmaxが「次の文字の確率」を生む。これで一本道が完成。</div>

</div>
</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 4</div>

# min-GPT 実装ウォークスルー

## 可視化で見た中身を、コードでワンステップずつ作る

---

<!-- _class: split -->

<div class="page-title">この動画ですること</div>

## 同じ部品を、今度は“コードで”組み立てて確かめる

<div class="split-body">
<div class="left">

<div class="figwrap">
<img src="./src/fig01-transformer-architecture.png" alt="トランスフォーマーの全体構造（min-GPT）" style="max-height:440px;">
</div>
<div class="caption">図：コードで組み上がる全体構造（細部はColabで拡大して確認）</div>

</div>
<div class="right">

<div class="cbox deep"><div class="h">ねらい</div><div class="b">

- 左が<span class="red">完成形の全体図</span>。コードはこの図を1段ずつ作っていく
- 動画3で<span class="red">絵として見た部品</span>を、コードで一段ずつ生成して確認
- 埋め込み → 自己注意 → MLP(GELU) → … が関数の中で<span class="red">自動的に組み上がる</span>

</div></div>

<div class="band">学生はコードを書きません。<strong>実行して確かめる</strong>だけ。</div>

</div>
</div>

<div class="attr">教材：Andrej Karpathy「min-GPT / nano-GPT」（MITライセンス）。解説・教材生成に生成AIを活用。 <span class="src">01_min_GPT.ipynb</span></div>

---

<!-- _class: wrap -->

<div class="page-title">「トランスフォーマー構築」関数</div>

## 1行の呼び出しで、部品がまとめて生成される

<div class="code" style="font-size:19px;">model = build_transformer(
    n_embd = 48,   # 埋め込み次元
    n_head = 3,    # 注意ヘッド数
    n_layer = 3,   # 層の数
    dropout = 0.1, # 過学習よけ（任意）
)</div>

<div class="cbox mid"><div class="h">この一行が裏でやっていること</div><div class="b" style="font-size:22px; line-height:1.5;">

- <span class="red">埋め込み</span>（文字 → 48次元ベクトル）＋位置エンコーディング
- <span class="red">自己注意</span>（ヘッド3個）→ 層正規化 → <span class="red">MLP（GELUの非線形）</span>
- これを<span class="red">3層ぶん</span>積み重ね、最後に linear（数値を語彙数ぶんのスコアに変換）→ softmax

</div></div>

<div class="band">設定（次元・ヘッド・層）を渡すと、構造が自動で組まれます。</div>

---

<!-- _class: split -->

<div class="page-title">パラメータの内訳を確かめる</div>

## 部品ごとの“重みの数”を、足し算で追える

<div class="split-body">
<div class="left">

<table class="dtbl" style="font-size:22px;">
<tr><th class="l">部品</th><th>個数</th><th>パラメータ数</th></tr>
<tr><td class="l">層（ブロック）<span style="font-size:18px;">※ヘッド3個を含む</span></td><td>3層</td><td>28,272 × 3 ＝ 84,816</td></tr>
<tr><td class="l">埋め込み・出力ほか</td><td>—</td><td>＋ 768</td></tr>
<tr style="background:#FBE7D6;"><td class="l"><strong>モデル全体</strong></td><td></td><td><strong>85,584</strong></td></tr>
</table>

<div class="caption">数字は実行結果の一例（設定 48/3/3 のとき）。ヘッド1個＝2,352 はブロックの内訳。</div>

</div>
<div class="right">

<div class="cbox deep"><div class="h">ここが“腹落ち”ポイント</div><div class="b">

- 抽象的な「モデル」が、<span class="red">数えられる重みの集まり</span>だと分かる
- 28,272×3層 ＋ 768 ＝ <span class="red">85,584</span> と、足し算で追える
- 動画3で見た<span class="red">全体図と同じ規模</span>のモデル

</div></div>

</div>
</div>

<div class="attr">パラメータ＝学習で調整される数値。出力時に `print` で内訳が表示されます。 <span class="src">01_min_GPT.ipynb</span></div>

---

<!-- _class: summary -->

<div class="page-title">この動画のまとめ</div>

## 「魔法の箱」は、足し算で説明できる部品の集まり

<div class="statement">埋め込み → 自己注意 → MLP(GELU) → … を積み上げ、重みを数えると <span class="red">85,584</span> ── 中身は全部、追える。</div>

<svg viewBox="0 0 760 86" width="74%" style="max-width:760px; margin:22px auto 0; display:block;">
  <g text-anchor="middle" font-weight="800">
    <rect x="6" y="22" width="150" height="46" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="81" y="51" font-size="20" fill="#9A3412">埋め込み</text>
    <text x="178" y="52" font-size="24" fill="#C2410C">→</text>
    <rect x="200" y="22" width="150" height="46" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="275" y="51" font-size="20" fill="#9A3412">自己注意</text>
    <text x="372" y="52" font-size="24" fill="#C2410C">→</text>
    <rect x="394" y="22" width="172" height="46" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="480" y="51" font-size="20" fill="#9A3412">MLP（GELU）</text>
    <text x="588" y="52" font-size="24" fill="#C2410C">→</text>
    <rect x="610" y="22" width="144" height="46" rx="10" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
    <text x="682" y="51" font-size="20" fill="#1A6BB0">softmax</text>
  </g>
</svg>

<div class="band">コードを書けなくても大丈夫。<strong>実行して「確かに組み上がった」</strong>と確かめられれば十分です。次は、文字をどう数値に変えるか＝トーカナイザー（文字→数値変換の係）の回へ。</div>

<div class="attr">教材：Andrej Karpathy「min-GPT / nano-GPT」（MIT）／解説・教材生成に生成AIを活用。 <span class="src">01_min_GPT.ipynb</span></div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 5</div>

# 自然言語処理とトーカナイザー

## ことばを「数のベクトル」に変える ── 意味の地図をつくる

---

<!-- _class: split -->

<div class="page-title">文章はそのままでは計算できない</div>

## まず「単語に分け」、次に「数のベクトルに変える」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect x="40" y="16" width="300" height="48" rx="10" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="190" y="46" font-size="18" font-weight="700" fill="#9A3412">「猫が好き」</text>
    <text x="190" y="92" font-size="20" fill="#C2410C" font-weight="800">↓ 単語に分ける（分かち書き）</text>
    <rect x="40" y="110" width="300" height="48" rx="10" fill="#fff" stroke="#C2410C" stroke-width="1.8"/>
    <text x="190" y="140" font-size="18" font-weight="700">「猫」「が」「好き」</text>
    <text x="190" y="186" font-size="20" fill="#C2410C" font-weight="800">↓ 数のベクトルに変える</text>
    <rect x="40" y="204" width="300" height="78" rx="10" fill="#FBF4EF" stroke="#9A3412" stroke-width="2"/>
    <text x="190" y="236" font-size="16" font-weight="700" fill="#9A3412">猫 → [0.21, -0.83, 0.05, …]</text>
    <text x="190" y="264" font-size="16" font-weight="700" fill="#9A3412">好き → [0.44, 0.12, -0.30, …]</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">2段階の前処理</div><div class="b">

- <span class="red">分かち書き</span>（形態素解析）：文を意味のまとまり（単語）に分ける
- <span class="red">埋め込み</span>（＝ことばを数のベクトルにすること）で、各単語を数の並びに変換する
- ベクトルにすれば、距離や足し算など<span class="red">計算ができる</span>

</div></div>

<div class="band">「ことばを数にする」── ここがAIが言語を扱う出発点です。</div>

<div class="attr">ベクトルの長さ（次元数）はモデル次第で数十〜数百。</div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">word2vec ── 単語の「意味の地図」</div>

## 似た意味の語は近くに、関係が同じ語は同じ向きに並ぶ

<div class="fig-area">
<svg viewBox="0 0 1000 420" width="100%" style="max-height:400px">
  <rect x="30" y="30" width="940" height="360" rx="14" fill="#FBF4EF" stroke="#E6C4A8" stroke-width="1.5"/>
  <text x="500" y="60" text-anchor="middle" font-size="18" fill="#5B6068">意味空間（イメージ：本当は数百次元を2次元に投影）</text>
  <g font-size="19" font-weight="700">
    <circle cx="200" cy="150" r="7" fill="#9A3412"/><text x="158" y="143" fill="#9A3412">王様</text>
    <circle cx="520" cy="150" r="7" fill="#C2410C"/><text x="540" y="143" fill="#C2410C">女王</text>
    <circle cx="200" cy="300" r="7" fill="#9A3412"/><text x="158" y="293" fill="#9A3412">男性</text>
    <circle cx="520" cy="300" r="7" fill="#C2410C"/><text x="540" y="293" fill="#C2410C">女性</text>
  </g>
  <g stroke="#5B6068" stroke-width="3" marker-end="url(#ar5)">
    <line x1="210" y1="150" x2="510" y2="150"/>
    <line x1="210" y1="300" x2="510" y2="300"/>
  </g>
  <defs><marker id="ar5" markerWidth="11" markerHeight="11" refX="7" refY="3.2" orient="auto"><path d="M0,0 L9,3.2 L0,6.4 Z" fill="#5B6068"/></marker></defs>
  <text x="360" y="136" text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">王様→女王＝＋（女性−男性）</text>
  <text x="360" y="328" text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">男性→女性＝＋（女性−男性）</text>
  <line x1="700" y1="60" x2="700" y2="360" stroke="#E6C4A8" stroke-width="1.5"/>
  <text x="835" y="118" text-anchor="middle" font-size="20" font-weight="800" fill="#9A3412">同じ「差」を足す</text>
  <text x="835" y="165" text-anchor="middle" font-size="20" font-weight="700" fill="#C2410C">王様 に</text>
  <text x="835" y="198" text-anchor="middle" font-size="20" font-weight="700" fill="#C2410C">（女性 − 男性）を足すと</text>
  <line x1="760" y1="216" x2="910" y2="216" stroke="#9A3412" stroke-width="2"/>
  <text x="835" y="254" text-anchor="middle" font-size="24" font-weight="800" fill="#9A3412">≈ 女王</text>
</svg>
</div>

<div class="takeaway">単語の意味が「位置」として表され、引き算・足し算で関係をたどれます。</div>

---

<!-- _class: fig -->

<div class="page-title">関係は「平行な矢印」になる</div>

## 「首都の方向」がどの国でも同じ向きに揃う

<div class="fig-area">
<svg viewBox="0 0 1000 400" width="100%" style="max-height:380px">
  <rect x="30" y="24" width="940" height="350" rx="14" fill="#FBF4EF" stroke="#E6C4A8" stroke-width="1.5"/>
  <g font-size="19" font-weight="700">
    <circle cx="200" cy="120" r="7" fill="#9A3412"/><text x="160" y="112" fill="#9A3412">フランス</text>
    <circle cx="520" cy="120" r="7" fill="#C2410C"/><text x="540" y="112" fill="#C2410C">パリ</text>
    <circle cx="200" cy="280" r="7" fill="#9A3412"/><text x="170" y="272" fill="#9A3412">日本</text>
    <circle cx="520" cy="280" r="7" fill="#C2410C"/><text x="540" y="272" fill="#C2410C">東京</text>
  </g>
  <g stroke="#1A6BB0" stroke-width="3" marker-end="url(#ar5b)">
    <line x1="210" y1="120" x2="510" y2="120"/>
    <line x1="210" y1="280" x2="510" y2="280"/>
  </g>
  <defs><marker id="ar5b" markerWidth="11" markerHeight="11" refX="7" refY="3.2" orient="auto"><path d="M0,0 L9,3.2 L0,6.4 Z" fill="#1A6BB0"/></marker></defs>
  <text x="360" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#1A6BB0">「首都」ベクトル</text>
  <text x="360" y="306" text-anchor="middle" font-size="18" font-weight="700" fill="#1A6BB0">「首都」ベクトル</text>
  <rect x="640" y="150" width="300" height="100" rx="12" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="790" y="190" text-anchor="middle" font-size="20" font-weight="800" fill="#1A6BB0">パリ − フランス</text>
  <text x="790" y="222" text-anchor="middle" font-size="20" font-weight="800" fill="#1A6BB0">≈ 東京 − 日本</text>
</svg>
</div>

<div class="band">前ページは「差を足すと別の語になる」、ここは「その差がどの組でも同じ向きに揃う」という別の発見です。</div>

---

<!-- _class: split -->

<div class="page-title">BERT ── 文の意味を768次元で測る</div>

## 「猫が好き」と「犬が好き」は近い／「天気」は遠い

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 300" width="100%" style="max-height:300px">
  <rect x="20" y="20" width="340" height="260" rx="14" fill="#FBF4EF" stroke="#E6C4A8" stroke-width="1.5"/>
  <g font-size="17" font-weight="700">
    <circle cx="130" cy="110" r="8" fill="#9A3412"/><text x="146" y="116" fill="#9A3412">猫が好き</text>
    <circle cx="180" cy="150" r="8" fill="#C2410C"/><text x="196" y="156" fill="#C2410C">犬が好き</text>
    <circle cx="300" cy="240" r="8" fill="#5B6068"/><text x="210" y="246" fill="#5B6068">今日の天気</text>
  </g>
  <line x1="130" y1="110" x2="180" y2="150" stroke="#C2410C" stroke-width="2.5"/>
  <text x="120" y="146" font-size="16" fill="#C2410C" font-weight="700">近い</text>
  <line x1="180" y1="150" x2="300" y2="240" stroke="#5B6068" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="262" y="196" font-size="16" fill="#5B6068" font-weight="700">遠い</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">文の類似度が測れる</div><div class="b">

- <span class="blu">BERT</span>＝「文の意味を測る系」の代表（word2vec は単語単位、BERT は文単位）
- 文を<span class="blu">768次元</span>（次元数の一例）のベクトルにし、近い文どうしは<span class="blu">距離が小さく</span>なる
- 研究の<span class="blu">分類・検索</span>で使う参考。今日作る生成系（GPT）とは別系統で、ミニチュア演習には直接使わない

</div></div>

<div class="band">単語だけでなく、文の意味も「位置」として比べられます。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">トーカナイザー ── 文字列の刻み方</div>

## LLMは形態素ではなく BPE で刻み、未知語も扱える

<div class="split-body">
<div class="left">

<div class="cbox mid"><div class="h">トークン＝モデルが扱う最小単位</div><div class="b">

- <span class="red">トークン</span>＝モデルが扱う文字列の最小単位（単語より細かいことが多い）
- <span class="red">BPE</span>＝よく出る並びをかたまりに育てる方式。それが1トークンになる
- 未知語も<span class="red">断片に分けて</span>表現可（例：<span class="mono">tokenization → token / ization</span>）

</div></div>

<div class="band">このあとの ichimo-GPT は割り切って「1文字＝1トークン」で刻みます。</div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">日本語と効率（tiktoken）</div><div class="b">

- <span class="gry">tiktoken</span>（＝OpenAIのトーカナイザー）は英語は得意、<span class="gry">日本語は細切れ</span>に
- 細切れ＝<span class="gry">トークン数が増える</span>＝処理・課金が重い
- 日本語は刻みが多くなりがち＝<span class="gry">コストが増えやすい</span>（日本語特化のトーカナイザーで軽くできる）

</div></div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">word2vec と LLM の違い</div>

## 先に地図を作るか、生成を学ぶ中で同時に作るか

<div class="fig-area">
<svg viewBox="0 0 1000 320" width="100%" style="max-height:330px">
  <rect x="30" y="24" width="445" height="270" rx="14" fill="#FBF4EF" stroke="#9A3412" stroke-width="2"/>
  <text x="252" y="62" text-anchor="middle" font-size="22" font-weight="800" fill="#9A3412">word2vec</text>
  <text x="252" y="120" text-anchor="middle" font-size="19" font-weight="700" fill="#C2410C">① まず「意味の地図」を作る</text>
  <text x="252" y="160" text-anchor="middle" font-size="18" fill="#5B6068">大量の文から単語の共起を学習</text>
  <text x="252" y="208" text-anchor="middle" font-size="19" font-weight="700" fill="#C2410C">② 出来た地図を使う</text>
  <text x="252" y="248" text-anchor="middle" font-size="18" fill="#5B6068">埋め込みは固定して再利用</text>
  <rect x="525" y="24" width="445" height="270" rx="14" fill="#E2EDF6" stroke="#1A6BB0" stroke-width="2"/>
  <text x="747" y="62" text-anchor="middle" font-size="22" font-weight="800" fill="#1A6BB0">大規模言語モデル（LLM）</text>
  <text x="747" y="120" text-anchor="middle" font-size="19" font-weight="700" fill="#1A6BB0">「次の語を予測」を学習する</text>
  <text x="747" y="160" text-anchor="middle" font-size="18" fill="#5B6068">生成タスクを解く中で…</text>
  <text x="747" y="208" text-anchor="middle" font-size="19" font-weight="700" fill="#1A6BB0">埋め込みも同時並行に育つ</text>
  <text x="747" y="248" text-anchor="middle" font-size="18" fill="#5B6068">意味地図は学習の副産物</text>
</svg>
</div>

<div class="takeaway">どちらも「意味の地図」を持つ点は同じ。違うのは“いつ・どう作るか”です。</div>

---

<!-- _class: summary -->

<div class="page-title">動画5のまとめ</div>

## ことばを数にすると、意味が計算できる

<div class="sections">

<div class="sec-box">

### 仕組みのポイント

- 分割（トークンに刻む）→ <span class="red">埋め込み（ことば→数のベクトル）</span>に
- <span class="red">word2vec</span>＝単語の意味の地図、<span class="red">BERT</span>＝文の類似度
- <span class="red">BPE</span>（細かい区切り方）なら未知語も扱える（日本語は刻みに注意）

</div>

<div class="sec-box">

### 研究への活かし方

- 文学：語の意味の<span class="red">変化や近さ</span>を定量化する
- 教育：自由記述レビューの<span class="red">良し悪し分類</span>に使う
- 「距離・方向で意味を扱える」感覚が<span class="red">分析の足場</span>に

</div>

</div>

<div class="band"><strong>この回の1点＝ことばは「位置（ベクトル）」になり、距離・方向で扱える。</strong>この上で、次は1文字ずつ文章を立ち上げます。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 6</div>

# ichimo-GPT ── 1文字ずつ予測する小さなGPT

## 単語も文法も教えずに、文章はどこまで立ち上がるか

---

<!-- _class: split -->

<div class="page-title">何を作るのか</div>

## 「次の1文字」だけを当てる、超ミニチュアのGPT

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 280" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <rect x="30" y="30" width="300" height="60" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="56" font-size="18" font-weight="800" fill="#9A3412">入力：これまでの文字列</text>
    <text x="180" y="80" font-size="20" font-weight="800" fill="#C2410C">「吾輩は猫であ」</text>
    <text x="180" y="118" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="80" y="130" width="200" height="46" rx="10" fill="#9A3412"/>
    <text x="180" y="159" font-size="18" font-weight="800" fill="#fff">ichimo-GPT</text>
    <text x="180" y="200" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="30" y="212" width="300" height="56" rx="12" fill="#fff" stroke="#9A3412" stroke-width="2"/>
    <text x="180" y="236" font-size="17" font-weight="700" fill="#5B6068">出力：次の1文字の確率</text>
    <text x="180" y="259" font-size="18" font-weight="800" fill="#9A3412">「る」が一番ありそう</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">ポイント</div><div class="b">

- 単語や文法は<span class="red">一切教えない</span>。教えるのは「次の1文字」だけ
- それを<span class="red">1文字ずつ繰り返す</span>と、文章が生まれる
- Karpathy の <span class="mono">nano-GPT</span> をそのまま使う小さなモデル

</div></div>

<div class="band">「文字の並びやすさ」だけから、言葉が立ち上がる過程を見ます。</div>

</div>
</div>

<div class="attr">教材：Andrej Karpathy, nano-GPT（MIT License）／解説・教材生成に生成AIを活用</div>

---

<!-- _class: split -->

<div class="page-title">中身は本物の積み重ね</div>

## 小さくても“本物の層”がそのまま積まれている

<div class="split-body">
<div class="left">

<svg viewBox="0 0 320 360" width="100%" style="max-height:420px">
  <g text-anchor="middle">
    <rect x="60" y="14" width="200" height="34" rx="8" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="160" y="36" font-size="17" font-weight="800" fill="#9A3412">1文字を 256次元 に</text>
    <text x="160" y="62" font-size="18" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="70" width="240" height="48" rx="9" fill="#fff" stroke="#9A3412" stroke-width="2"/>
    <text x="160" y="92" font-size="16" font-weight="800" fill="#9A3412">自己注意 → 正規化 → MLP</text>
    <text x="160" y="111" font-size="16" font-weight="700" fill="#5B6068">＝ これで「1段（1層）」</text>
    <rect x="40" y="126" width="240" height="32" rx="8" fill="#F7EAE2" stroke="#9A3412" stroke-width="1.5"/>
    <text x="160" y="147" font-size="16" font-weight="700" fill="#9A3412">同じ段 …（くりかえし）</text>
    <rect x="40" y="166" width="240" height="32" rx="8" fill="#F3DCC8" stroke="#9A3412" stroke-width="1.5"/>
    <text x="160" y="187" font-size="16" font-weight="700" fill="#9A3412">同じ段</text>
    <rect x="40" y="202" width="240" height="40" rx="9" fill="#9A3412"/>
    <text x="160" y="226" font-size="17" font-weight="800" fill="#fff">縦に 8 段 ＝ 8 層</text>
    <text x="160" y="258" font-size="18" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="268" width="240" height="34" rx="8" fill="#fff" stroke="#9A3412" stroke-width="2"/>
    <text x="160" y="290" font-size="16" font-weight="800" fill="#9A3412">次の1文字の確率</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">このモデルの設定</div><div class="b">

- 部品は<span class="red">自己注意→正規化→MLP</span>。これが「1層」
- それを<span class="red">縦に8段</span>重ねただけ（左図の積み重ね）
- 埋め込み <span class="red">256次元</span>／ヘッド <span class="red">8</span>／層 <span class="red">8</span>
- 重み（パラメータ）は<span class="red">約630万（6.3M）</span>。動画4の並び替えGPT（85,584）より<span class="red">ずっと大きい</span>

</div></div>

<div class="band" style="font-size:23px;">部品は同じ。数を増やすだけで「文字を覚える」力が出てきます。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">学習データと前処理</div>

## シェイクスピアと夏目漱石を、文字<span class="red">⟷</span>IDに変換して読ませる

<div class="split-body">
<div class="left">

<div class="cbox soft"><div class="h">データ</div><div class="b">

- 英語：<span class="red">シェイクスピア</span>全文
- 日本語：<span class="red">夏目漱石</span>（青空文庫由来）
- ここでは一番単純に<span class="red">「1文字＝1トークン」</span>（動画4のBPEより素朴。だから ichimo＝一文字）

</div></div>

<div class="src" style="white-space:normal; line-height:1.7; margin-top:10px;">配布データ（②から試すのがおすすめ）：<a href="https://drive.google.com/file/d/1NSy2x0QM3EqpO2W1wBfQ8XlcqxBLpOIw/view">①シェイクスピア＝英語</a>／<a href="https://drive.google.com/file/d/1sZB6n_8HcuCdKm9sUQu8OxIi1AkUFLyN/view">②漱石・濁点分離＝やさしめ</a>／<a href="https://drive.google.com/file/d/1OL6KbbmWfRbTBDBvuRZcFGgTYlo72w37/view">③漱石・濁点あり＝難しめ</a></div>

</div>
<div class="right">

<div class="code" style="font-size:18px;">chars = sorted(set(text))
# 文字ごとに番号をふる
stoi = {c: i for i, c in enumerate(chars)}
# "吾"→12  "輩"→87  "は"→5
encode("吾輩は")   # → [12, 87, 5]</div>

<div class="band" style="font-size:23px;">文字を番号（ID）に直すだけ。意味は教えず、並びだけをモデルに渡します。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">過学習を「見る」</div>

## 訓練/検証に分け、検証ロスが底を打って上がる前に止める

<div class="split-body">
<div class="left">

<svg viewBox="0 0 560 340" width="100%" style="max-height:360px">
  <line x1="70" y1="30" x2="70" y2="280" stroke="#5B6068" stroke-width="2"/>
  <line x1="70" y1="280" x2="540" y2="280" stroke="#5B6068" stroke-width="2"/>
  <text x="20" y="48" font-size="17" font-weight="700" fill="#5B6068">ロス</text>
  <text x="430" y="306" font-size="17" font-weight="700" fill="#5B6068">学習の回数 →</text>
  <path d="M70,72 C180,150 280,210 320,250 C420,255 480,258 540,262" fill="none" stroke="#9A3412" stroke-width="4"/>
  <path d="M70,92 C180,158 270,215 320,220 C410,224 470,180 540,118" fill="none" stroke="#1A6BB0" stroke-width="4"/>
  <line x1="320" y1="44" x2="320" y2="280" stroke="#C2410C" stroke-width="2.5" stroke-dasharray="6 5"/>
  <circle cx="320" cy="220" r="8" fill="#C2410C"/>
  <text x="320" y="40" font-size="16" font-weight="800" fill="#C2410C" text-anchor="middle">検証ロスの底＝止めどき</text>
  <rect x="338" y="92" width="196" height="26" rx="6" fill="#EAF2F9"/>
  <text x="346" y="111" font-size="16" font-weight="800" fill="#1A6BB0">検証＝初見の問題</text>
  <rect x="338" y="244" width="196" height="26" rx="6" fill="#F7EAE2"/>
  <text x="346" y="263" font-size="16" font-weight="800" fill="#9A3412">訓練＝覚えた問題</text>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">2本の線の読み方</div><div class="b">

- <span class="red">訓練＝覚えた問題</span>／<span class="blu">検証＝初見の問題</span>のロス（小さいほど良い）
- 訓練だけ丸暗記すると、<span class="red">見たことのない文では当てられず</span>検証ロスが悪化
- <span class="red">検証ロスが底</span>を打って上がり始めたら、そこが止めどき
- <span class="red">early stopping</span>＝一番賢い時点で学習を止めること

</div></div>

<div class="band" style="font-size:23px;">訓練だけ良くなり検証が悪化＝丸暗記（過学習）。止めどきは検証ロスが示す。</div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">生成の正体①</div>

## 「次の1文字」を、確率の高い候補から1つ選ぶ

<div class="fig-area" style="display:flex; align-items:center; justify-content:center;">
<div class="figwrap" style="flex:0 0 auto;">
<img src="./src/fig03a-nexttoken-wagahai.png" alt="吾輩は_ の次の1文字の確率（上位5）" style="max-height:400px;">
</div>
</div>

<div class="band">「吾輩は」の次の<span class="red">1文字</span>（＝この演習では1トークン）は <span class="red">「、」「猫」</span> が高い。これが“もっともらしさ”の中身です。</div>

<div class="attr">図：漱石データで学習した ichimo-GPT が予測する「次の1文字」の確率。softmax（動画4で既出）で出した全候補のうち上位5だけなので合計は100%にならない。実行結果の一例</div>

---

<!-- _class: split -->

<div class="page-title">生成の正体②</div>

## 1文字選んでは入力に戻す ── これを繰り返すだけ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 250" width="100%" style="max-height:280px">
  <g text-anchor="middle" font-size="17" font-weight="700">
    <rect x="40" y="20" width="280" height="44" rx="9" fill="#fff" stroke="#9A3412" stroke-width="2"/>
    <text x="180" y="48" fill="#9A3412">「吾輩は」→ 次は「猫」</text>
    <text x="180" y="84" font-size="22" fill="#C2410C" font-weight="800">↓ 戻す</text>
    <rect x="40" y="96" width="280" height="44" rx="9" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="124" fill="#9A3412">「吾輩は猫」→ 次は「で」</text>
    <text x="180" y="160" font-size="22" fill="#C2410C" font-weight="800">↓ 戻す</text>
    <rect x="40" y="172" width="280" height="44" rx="9" fill="#F3DCC8" stroke="#9A3412" stroke-width="2"/>
    <text x="180" y="200" fill="#9A3412">「吾輩は猫で」→ …</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">自己回帰（くりかえし）</div><div class="b">

- 出した1文字を<span class="red">入力の末尾に足す</span>
- 伸びた文字列を読み、また<span class="red">次の1文字</span>を予測
- 確率が上位に集まるほど、文として<span class="red">自然</span>になる

</div></div>

<div class="band" style="font-size:23px;">私たちが使うAIも、規模が違うだけで原理は同じ仕組みです。</div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">どこまで賢くなるか</div>

## 学習が進むほど、生成文が「言葉」へ育っていく

<div class="fig-area" style="display:flex; flex-direction:column; justify-content:center;">
<table class="dtbl" style="font-size:24px; width:90%;">
<tr><th>学習回数（ステップ）</th><th class="l">生成される文字列のようす</th></tr>
<tr><td style="padding:16px;"><strong>1回目</strong></td><td class="l">ほぼ<span class="red">ランダム</span>な記号の羅列</td></tr>
<tr><td style="padding:16px;"><strong>100回</strong></td><td class="l">区切りや<span class="red">人名っぽい</span>かたまりが現れる</td></tr>
<tr><td style="padding:16px;"><strong>400回</strong></td><td class="l"><span class="red">実在する単語</span>が混じり始める</td></tr>
<tr style="background:#FBE7D6;"><td style="padding:16px;"><strong>さらに先</strong></td><td class="l"><strong>英語／日本語“っぽい”文</strong>になる（意味は不確か）</td></tr>
</table>
<div class="caption" style="text-align:center; margin-top:8px;">回数＝学習のステップ数の目安。漱石データでの実行結果の一例（環境で変わる）</div>
</div>

<div class="takeaway">1文字ずつでも、回数を重ねると文章が立ち上がる ── これが体感のクライマックスです。</div>

---

<!-- _class: split -->

<div class="page-title">ボーナス課題 <span class="important">任意</span></div>

## 結果やコード改善を提出すると“ボーナス点”（任意・6/21まで）

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 270" width="100%" style="max-height:290px">
  <g text-anchor="middle">
    <rect x="40" y="14" width="280" height="50" rx="11" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="36" font-size="17" font-weight="800" fill="#9A3412">① ノートを最後まで実行</text>
    <text x="180" y="56" font-size="16" fill="#5B6068">学習・生成が全部走る</text>
    <text x="180" y="84" font-size="22" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="94" width="280" height="74" rx="11" fill="#fff" stroke="#9A3412" stroke-width="2"/>
    <text x="180" y="118" font-size="16" font-weight="800" fill="#9A3412">② 末尾のセルを実行すると</text>
    <text x="180" y="140" font-size="16" font-weight="800" fill="#C2410C">(学籍番号)_名前_ichimo-GPT.md</text>
    <text x="180" y="160" font-size="16" font-weight="800" fill="#9A3412">が自動で生成・ダウンロード</text>
    <text x="180" y="188" font-size="22" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="198" width="280" height="50" rx="11" fill="#9A3412"/>
    <text x="180" y="228" font-size="17" font-weight="800" fill="#fff">③ その .md を提出</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">提出のしかた（任意）</div><div class="b">

- 提出ファイル名（末尾セルの実行で自動DL）：<br><span class="mono">(学籍番号)_名前_ichimo-GPT.md</span>
- <span class="red">.md</span> または改善コード(<span class="red">.py/.ipynb/.txt</span>)を提出
- 「読み込みエラー」の<span class="red">まま出さない</span>
- 締切 <span class="red">6/21(日)</span>。必須ではなく<span class="red">ボーナス点</span>の参考

</div></div>

<div class="band" style="font-size:23px;">分からない箇所は、コードを貼って生成AIに「これ何してる？」と聞いてOK。</div>

</div>
</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 7</div>

# 推論を見る、そしてまとめ

## 学習を終えたモデルが、文章を生み出す瞬間

---

<!-- _class: split -->

<div class="page-title">推論（inference）とは</div>

## 学習は終わっている ── 重みは固定のまま、答えを生む

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:330px">
  <g text-anchor="middle">
    <rect x="40" y="20" width="300" height="120" rx="12" fill="#FBF4EF" stroke="#5B6068" stroke-width="1.8"/>
    <text x="190" y="46" font-size="18" font-weight="800" fill="#5B6068">学習（training）</text>
    <text x="190" y="76" font-size="16" fill="#5B6068">正解との差（ロス）を見て</text>
    <text x="190" y="100" font-size="16" fill="#5B6068">重みを少しずつ更新する</text>
    <text x="190" y="126" font-size="16" fill="#9A3412">＝もう終わった工程</text>
    <text x="190" y="168" font-size="26" fill="#C2410C" font-weight="800">↓</text>
    <rect x="40" y="186" width="300" height="120" rx="12" fill="#FBE7D6" stroke="#C2410C" stroke-width="2.5"/>
    <text x="190" y="214" font-size="18" font-weight="800" fill="#9A3412">推論（inference）</text>
    <text x="190" y="244" font-size="16" fill="#9A3412">重みは固定したまま</text>
    <text x="190" y="268" font-size="16" fill="#9A3412">入力（プロンプト）を入れて</text>
    <text x="190" y="292" font-size="16" fill="#C2410C" font-weight="800">1語ずつ生成する</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">使うときに起きていること</div><div class="b">

- 学習で決まった重みは<span class="red">もう変わらない</span>
- プロンプトを入力 → 続きの1語を<span class="red">確率で予測</span>
- 出した語を入力に戻し、また次を予測（<span class="red">自己回帰</span>）

</div></div>

</div>
</div>

<div class="takeaway">学習は「重みを育てる」、推論は「育った重みで1語ずつ続きを書く」。別の工程です。</div>

---

<!-- _class: fig -->

<div class="page-title">温度とサンプリング</div>

## 確率の「山」から、どの語を選ぶか

<div class="fig-area" style="min-height:0; margin-bottom:6px;">
<svg viewBox="0 0 1000 300" width="100%" style="max-height:280px">
  <g text-anchor="middle">
    <text x="250" y="28" font-size="20" font-weight="800" fill="#1A6BB0">温度ひくめ（≈0）── 山がとがる</text>
    <text x="250" y="52" font-size="17" fill="#5B6068">一番ありそうな語に集中・堅実</text>
    <text x="78" y="150" font-size="16" font-weight="700" fill="#5B6068" transform="rotate(-90 78 150)">選ばれやすさ（確率）</text>
    <rect x="120" y="195" width="40" height="35" fill="#9FC0DE"/>
    <rect x="180" y="125" width="40" height="105" fill="#1A6BB0"/>
    <rect x="240" y="85" width="40" height="145" fill="#1A6BB0"/>
    <rect x="300" y="160" width="40" height="70" fill="#9FC0DE"/>
    <rect x="360" y="205" width="40" height="25" fill="#9FC0DE"/>
    <polyline points="140,195 200,125 260,85 320,160 380,205" fill="none" stroke="#1A6BB0" stroke-width="2.5" opacity="0.55"/>
    <line x1="105" y1="230" x2="415" y2="230" stroke="#5B6068" stroke-width="1.5"/>
    <text x="140" y="252" font-size="17" font-weight="700" fill="#5B6068">A</text>
    <text x="200" y="252" font-size="17" font-weight="700" fill="#5B6068">B</text>
    <text x="260" y="252" font-size="17" font-weight="700" fill="#5B6068">C</text>
    <text x="320" y="252" font-size="17" font-weight="700" fill="#5B6068">D</text>
    <text x="380" y="252" font-size="17" font-weight="700" fill="#5B6068">E</text>
    <text x="260" y="280" font-size="16" fill="#5B6068">候補の語 A〜E（両方とも同じ並び）</text>
    <text x="750" y="28" font-size="20" font-weight="800" fill="#C2410C">温度たかめ（&gt;1）── 山がなだらか</text>
    <text x="750" y="52" font-size="17" fill="#5B6068">候補が横並びに・意外性も増える</text>
    <rect x="620" y="180" width="40" height="50" fill="#E08A4F"/>
    <rect x="680" y="150" width="40" height="80" fill="#E08A4F"/>
    <rect x="740" y="120" width="40" height="110" fill="#C2410C"/>
    <rect x="800" y="160" width="40" height="70" fill="#E08A4F"/>
    <rect x="860" y="185" width="40" height="45" fill="#E08A4F"/>
    <polyline points="640,180 700,150 760,120 820,160 880,185" fill="none" stroke="#C2410C" stroke-width="2.5" opacity="0.55"/>
    <line x1="605" y1="230" x2="915" y2="230" stroke="#5B6068" stroke-width="1.5"/>
    <text x="640" y="252" font-size="17" font-weight="700" fill="#5B6068">A</text>
    <text x="700" y="252" font-size="17" font-weight="700" fill="#5B6068">B</text>
    <text x="760" y="252" font-size="17" font-weight="700" fill="#5B6068">C</text>
    <text x="820" y="252" font-size="17" font-weight="700" fill="#5B6068">D</text>
    <text x="880" y="252" font-size="17" font-weight="700" fill="#5B6068">E</text>
    <text x="760" y="280" font-size="16" fill="#5B6068">候補の語 A〜E（両方とも同じ並び）</text>
    <text x="500" y="150" font-size="17" font-weight="700" fill="#9A3412">縦軸（確率）の</text>
    <text x="500" y="174" font-size="17" font-weight="700" fill="#9A3412">目盛りは左右で同じ</text>
    <text x="500" y="208" font-size="16" fill="#5B6068">→ 右は山が低く</text>
    <text x="500" y="228" font-size="16" fill="#5B6068">ならされている</text>
  </g>
</svg>
</div>

<div class="cbox gray"><div class="h">温度とサンプリング ── 2つのことば</div><div class="b">

- <span class="red">温度＝確率の山のとがり具合を変えるつまみ</span>。低いほど一番ありそうな語に集中、高いほど候補が横並びに（山をならす）
- <span class="blu">サンプリング＝この確率分布からサイコロを振って1語を選ぶこと</span>。だから同じプロンプトでも答えは毎回ゆれる

</div></div>

---

<!-- _class: summary -->

<div class="page-title">仕組みから「勘」を持つ</div>

## 中身を見たから、得意・不得意が読める

<div class="grid2" style="margin:auto 0; line-height:2.0; row-gap:24px">

<div>

**得意なこと（パターンの再構成）**

- 大量の文から学んだ<span class="red">型を組み合わせる</span>（要約・言い換え・たたき台）
- 学んだ範囲に近いほど<span class="red">安定して上手い</span>

</div>

<div>

**不得意なこと（事実の保証はない）**

- <span class="blu">確率で次の語を選んでいるだけ＝事実かどうかは保証していない</span>
- だから<span class="red">もっともらしい誤り（＝ハルシネーション）</span>が出うる

</div>

</div>

<div class="band">ハルシネーション＝事実でない内容を、もっともらしい文として出すこと。<span class="red">どこで疑い、どこで頼るか</span>の勘が要ります。</div>

---

<!-- _class: wrap -->

<div class="page-title">この回のまとめ</div>

## 手を動かして確かめた要点を、畳む

<div class="grid2">

<div>

**中身を見た**

- 中核は<span class="red">Transformer</span>（生成AIの土台になっている仕組み）
- <span class="red">自己注意</span>＝文脈を見る仕組み（ablation＝部品を抜く実験で重要性を確認）
- 言葉は<span class="red">トークン</span>（処理の単位）に分け、意味は<span class="red">ベクトル</span>（数の並び）で扱う

</div>

<div>

**動かして体感した**

- 1文字GPTでも、学習が進むと<span class="red">文章が立ち上がる</span>
- 推論＝重み固定のまま<span class="red">1語ずつ自己回帰</span>（出した語を入力に戻す）で生成
- <span class="red">温度</span>（山のとがり具合）と<span class="red">サンプリング</span>（確率から1語選ぶ）で語を決める

</div>

</div>

<div class="band">中身は<span class="red">確率予測の積み重ね</span>。この体感が、研究で使うときの判断の足場になる。</div>

---

<!-- _class: refs -->

<div class="page-title">参考・出典</div>

## 参考・出典（教材と、その作り方）

**教材コード（MITライセンス）**

- Andrej Karpathy. *nanoGPT*. https://github.com/karpathy/nanoGPT
- Andrej Karpathy. *minGPT*. https://github.com/karpathy/minGPT
- LLM Visualization（モデル内部の可視化）. https://bbycroft.net/llm

**技術の原典**

- Vaswani et al. (2017). *Attention Is All You Need*. https://arxiv.org/abs/1706.03762
- Mikolov et al. (2013). *Efficient Estimation of Word Representations (word2vec)*. https://arxiv.org/abs/1301.3781

<div class="attr">本演習のColabノート・解説スライド・本講義の教材は、上記コードをもとに生成AIを活用して作成・整備しています。</div>

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問・振り返りは Moodle へ ／ ⑥のノートを最後まで実行し、「(学籍番号)_名前_ichimo-GPT.md」のレポート提出を忘れずに
