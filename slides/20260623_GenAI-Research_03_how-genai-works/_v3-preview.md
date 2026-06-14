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


---

<!-- _class: divider -->

<div class="chapter-num">動画 3</div>

# 大規模言語モデルの中を可視化する

## 超ミニチュアGPTで Transformer（＝今のLLMの基本設計）の部品を順にのぞく

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
<tr><td>ヘッド数</td><td><strong>3</strong></td><td class="l">文字どうしの関係を見る係。複数で別々の視点</td></tr>
<tr><td>層の数</td><td><strong>3</strong></td><td class="l">同じ処理の固まり（ブロック）を何段重ねるか</td></tr>
<tr style="background:#FBE7D6;"><td><strong>総パラメータ</strong></td><td><strong>85,584</strong></td><td class="l"><strong>学習で調整される数値の総数</strong></td></tr>
</table>
</div>

<div class="band">本物のLLMは数百億〜兆。ここではその約100万分の1の 85,584 個。だから全部追えます。</div>

<div class="attr">教材：Andrej Karpathy の min-GPT / nano-GPT（MIT）。解説・教材生成に生成AIを活用。</div>

---

<!-- _class: fig -->

<div class="page-title">中身の全体像</div>

## 1文字が「次の確率」になるまでの一本道

<div class="figwrap">
<img src="./src/fig01-transformer-architecture.png" alt="埋め込みから自己注意・層正規化・MLP/GELU・linear・softmaxまでのTransformer全体構造（総パラメータ85584）" style="max-height:520px;">
</div>

<div class="band">入口（文字）→ 処理を何層も通す → 出口（次の文字の確率）。各部品はこの後1枚ずつ説明します。</div>

<div class="attr">図：このミニチュアGPTの全体構造（総パラメータ 85,584）。出典 min-GPT（MIT）＋生成AIで作図。</div>

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
    <text x="300" y="282" font-size="18" fill="#5B6068" font-weight="700" text-anchor="middle">学習回数 →</text>
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
- このズレが小さくなる向きに<span class="red">パラメータを少しずつ調整</span>
- 学習が進むと並び替えは<span class="red">ほぼ100%正解</span>に

</div></div>

<div class="band">「賢くなる」とは、85,584個の数値が正解に合うよう微調整されること。</div>

</div>
</div>

---

<!-- _class: split -->

<div class="page-title">未来を見ないという制約</div>

## 未来を隠す＝カンニング防止（Causal mask）

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
    <text x="180" y="226" font-size="15" fill="#C2410C" font-weight="700">塗り＝見てよい／白＝未来なので0</text>
    <text x="180" y="252" font-size="15" fill="#5B6068">右上が必ず空く（三角形）</text>
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
<svg viewBox="0 0 900 420" width="100%" style="max-height:430px">
  <g text-anchor="middle">
    <text x="170" y="30" font-size="20" font-weight="800" fill="#9A3412">層1・ヘッド1</text>
    <text x="450" y="30" font-size="20" font-weight="800" fill="#C2410C">層2・ヘッド2</text>
    <text x="730" y="30" font-size="20" font-weight="800" fill="#E08A4F">層3・ヘッド3</text>
    <text x="170" y="54" font-size="17" fill="#5B6068">近くを見る</text>
    <text x="450" y="54" font-size="17" fill="#5B6068">離れた同じ文字を見る</text>
    <text x="730" y="54" font-size="17" fill="#5B6068">全体をならす</text>
  </g>
  <!-- 縦軸ラベル -->
  <text x="34" y="195" font-size="17" font-weight="700" fill="#5B6068" text-anchor="middle" transform="rotate(-90 34 195)">縦＝出力する位置</text>
  <!-- heatmap 1 -->
  <g>
    <rect x="110" y="74" width="180" height="180" fill="#FBE7D6"/>
    <rect x="110" y="74" width="60" height="60" fill="#9A3412"/><rect x="170" y="134" width="60" height="60" fill="#C2410C"/><rect x="230" y="194" width="60" height="60" fill="#9A3412"/>
    <rect x="110" y="74" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- heatmap 2 -->
  <g>
    <rect x="360" y="74" width="180" height="180" fill="#FBE7D6"/>
    <rect x="420" y="74" width="60" height="60" fill="#C2410C"/><rect x="360" y="134" width="60" height="60" fill="#9A3412"/><rect x="480" y="194" width="60" height="60" fill="#E08A4F"/>
    <rect x="360" y="74" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- heatmap 3 -->
  <g>
    <rect x="610" y="74" width="180" height="180" fill="#FBE7D6"/>
    <rect x="670" y="134" width="60" height="60" fill="#9A3412"/><rect x="610" y="194" width="60" height="60" fill="#C2410C"/><rect x="730" y="74" width="60" height="60" fill="#E08A4F"/>
    <rect x="610" y="74" width="180" height="180" fill="none" stroke="#5B6068" stroke-width="2"/>
  </g>
  <!-- 横軸ラベル -->
  <g text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">
    <text x="200" y="282">横＝見ている文字</text>
    <text x="450" y="282">横＝見ている文字</text>
    <text x="700" y="282">横＝見ている文字</text>
  </g>
  <g text-anchor="middle" font-size="19" fill="#5B6068">
    <text x="450" y="338">濃いマス＝そこを強く参照している</text>
    <text x="450" y="372" font-weight="700" fill="#C2410C">層・ヘッドごとに役割が分かれ、再学習すると注目の仕方も変わる</text>
  </g>
</svg>
</div>

<div class="takeaway">「どこを見て答えを決めたか」が、色の濃淡として目に見えます。</div>

---

<!-- _class: fig -->

<div class="page-title">部品を抜くと何が壊れるか</div>

## Ablation実験 ── 部品を1つずつ抜いて正解率を比べる

<div class="fig-area">
<table class="dtbl" style="font-size:26px;">
<tr><th class="l">抜いた部品</th><th>正解率</th><th class="l">わかること</th></tr>
<tr><td class="l">位置エンコーディング<br><span style="font-size:18px;color:#6e7378;">＝各文字が何番目かを教える情報</span></td><td><span class="red">激減</span></td><td class="l">順番が命の並び替えで「何番目か」が消える</td></tr>
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

<svg viewBox="0 0 360 280" width="100%" style="max-height:290px">
  <g text-anchor="middle">
    <text x="180" y="28" font-size="16" font-weight="700" fill="#5B6068">非線形が無い世界</text>
    <rect x="70" y="40" width="60" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="100" y="65" font-size="15">層1</text>
    <rect x="150" y="40" width="60" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="180" y="65" font-size="15">層2</text>
    <rect x="230" y="40" width="60" height="40" rx="6" fill="#EDEEF0" stroke="#5B6068"/><text x="260" y="65" font-size="15">層3</text>
    <text x="180" y="104" font-size="22" fill="#5B6068" font-weight="800">↓ 潰れる</text>
    <rect x="110" y="116" width="140" height="44" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/><text x="180" y="143" font-size="16" font-weight="700" fill="#5B6068">ただの1回の線形変換</text>
    <text x="180" y="196" font-size="16" font-weight="700" fill="#9A3412">GELUを挟むと</text>
    <rect x="70" y="208" width="60" height="40" rx="6" fill="#FBE7D6" stroke="#C2410C"/><text x="100" y="227" font-size="13">層1</text><text x="100" y="242" font-size="11" fill="#C2410C">GELU</text>
    <rect x="150" y="208" width="60" height="40" rx="6" fill="#FBE7D6" stroke="#C2410C"/><text x="180" y="227" font-size="13">層2</text><text x="180" y="242" font-size="11" fill="#C2410C">GELU</text>
    <rect x="230" y="208" width="60" height="40" rx="6" fill="#FBE7D6" stroke="#C2410C"/><text x="260" y="227" font-size="13">層3</text><text x="260" y="242" font-size="11" fill="#C2410C">GELU</text>
    <text x="180" y="270" font-size="14" fill="#C2410C" font-weight="700">→ 層を重ねた表現力が生きる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox deep"><div class="h">2つの仕掛け</div><div class="b">

- <span class="red">GELU</span>：これが無いと層を重ねても賢くならない「ひと工夫」（非線形）
- <span class="red">softmax</span>：たくさんの数値を「合計100%の確率」に変換する仕組み

</div></div>

<div class="band">非線形が「深さ」を、softmaxが「次の文字の確率」を生む。これで一本道が完成。</div>

</div>
</div>
