<div class="page-title">機会学習で、データの関係性をどう考えるか</div>

# <span style="color:var(--accent-dark)">データの関係性</span>をどう考えるか　<span class="tag tag-soft">2 背景</span>

<table style="width:62%; border-collapse:collapse; margin:40px auto 0; font-size:40px; text-align:center;">
<tr>
<th style="background:#3FA535; color:#fff; border:2px solid #fff; padding:14px 0; font-weight:800;">x</th>
<th style="background:#3FA535; color:#fff; border:2px solid #fff; padding:14px 0; font-weight:800;">f(x)</th>
</tr>
<tr><td style="background:#CFE3C8; border:2px solid #fff; padding:12px 0;">1</td><td style="background:#CFE3C8; border:2px solid #fff; padding:12px 0;">3</td></tr>
<tr><td style="background:#E9F2E4; border:2px solid #fff; padding:12px 0;">2</td><td style="background:#E9F2E4; border:2px solid #fff; padding:12px 0;">5</td></tr>
<tr><td style="background:#CFE3C8; border:2px solid #fff; padding:12px 0;">3</td><td style="background:#CFE3C8; border:2px solid #fff; padding:12px 0;">7</td></tr>
<tr><td style="background:#E9F2E4; border:2px solid #fff; padding:12px 0;">4</td><td style="background:#E9F2E4; border:2px solid #fff; padding:12px 0;">?</td></tr>
</table>

<!--
- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。
- f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？
-->

---

<div class="page-title">機会学習で、データの関係性をどう考えるか</div>

# <span style="color:var(--accent-dark)">データの関係性</span>をどう考えるか　<span class="tag tag-soft">2 背景</span>

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:6px;">

<table style="flex:0 0 auto; border-collapse:collapse; font-size:24px; text-align:center;">
<tr>
<th style="background:#3FA535; color:#fff; border:2px solid #fff; padding:6px 24px; font-weight:800;">x</th>
<th style="background:#3FA535; color:#fff; border:2px solid #fff; padding:6px 24px; font-weight:800;">f(x)</th>
</tr>
<tr><td style="background:#CFE3C8; border:2px solid #fff; padding:5px 0;">1</td><td style="background:#CFE3C8; border:2px solid #fff; padding:5px 0;">3</td></tr>
<tr><td style="background:#E9F2E4; border:2px solid #fff; padding:5px 0;">2</td><td style="background:#E9F2E4; border:2px solid #fff; padding:5px 0;">5</td></tr>
<tr><td style="background:#CFE3C8; border:2px solid #fff; padding:5px 0;">3</td><td style="background:#CFE3C8; border:2px solid #fff; padding:5px 0;">7</td></tr>
<tr><td style="background:#E9F2E4; border:2px solid #fff; padding:5px 0;">4</td><td style="background:#E9F2E4; border:2px solid #fff; padding:5px 0;">?</td></tr>
</table>

<div style="flex:1;">

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark); font-size:23px; margin-bottom:4px;">ルールベースの世界観 <span style="font-weight:700; color:#555;">(設計者が教えておく)</span></div>
<div style="border:2px solid #999; border-radius:8px; padding:8px 14px; font-size:21px; line-height:1.5;">
解析的に解くよ<br>
等差数列っぽい？ <b style="color:var(--accent);">→ Yes</b><br>
f(x) = 2x+1？<br>
ならば9と予想
</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark); font-size:23px; margin-bottom:4px;">機械学習の世界観 <span style="font-weight:700; color:#555;">(もっとたくさん学習！)</span></div>
<div style="border:2px solid #999; border-radius:8px; padding:8px 14px; font-size:21px; line-height:1.5;">
入力されたデータからパターンをコンピュータが探索・発見<br>
<b>f(x)自体は気にしない</b><br>
9とか11？
</div>
</div>

</div>

<div class="flowrow" style="gap:14px; margin:12px 0 0; justify-content:center;">
<div style="border:2px solid #555; border-radius:8px; padding:6px 16px; font-size:21px; font-weight:800;">変換する「函」</div>
<div style="font-size:20px; line-height:1.35;">確率・統計的に処理<br><b style="color:var(--accent);">正解が出てくるとは限らない</b></div>
</div>

</div>

<div style="flex:0 0 188px;">
<div class="box-info" style="font-size:18px; padding:8px 12px; line-height:1.45;">
<b>ブラックボックス内を理解する手法は開発中</b><br>
e.g. Anthropic (2025)<br>
　　AI顕微鏡
</div>
</div>

</div>

<div style="text-align:center; font-size:26px; font-weight:800; color:var(--accent-dark); margin-top:14px;">データの関係性の捉え方が根本的に違う</div>

<!--
- ルールベースの世界に生きるAIは、きっと僕から、解析的な解き方を教えられているんですね。たとえば、この場合には、一次式を試してみて、f(x) = 2*x+1っていう風なので、x=4で9だぞって。
- 結構高校までの数学の授業って、こういう考え方しませんか。f(x)ときたら、f(x)の式の形を求めることから初めてみようかな、と思う。
- でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良いのですね。xとf(x)の関係性を学習し、次を予測するだけ。f(x)の式そのものは、ブラックボックスで全然構わない。まぁ、たったこんだけの数字で機械学習することなんてまぁ、無理なんですけど。ただ、この数字から次を予測するとしたら、9以外にも11とかも言ってくるかもしれないんですね。
- データの関係性について、f(x)自体がルールを明示的、つまり人が読んでもわからない形でも構わないが、コンピューターが自ら学習した結果を予想できる、この考え方がミソなんですね。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング</span>　<span class="tag tag-soft">2 背景</span>

<img src="./src/fig39-nn-crop.png" alt="ニューラルネットワークの模式図（入力層・中間層・出力層）" style="display:block; width:74%; margin:6px auto 0;">

<div class="cite" style="text-align:right; margin:2px 40px 0 0;">『R1 総務省 情報通信白書』総務省(2019)</div>

<div style="display:flex; gap:60px; margin-top:14px; padding-left:30px;">

<div style="flex:1;">
<div style="font-size:26px; font-weight:800; margin-bottom:4px;">学習</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="font-weight:800; font-size:22px;">入力</div>
<div style="border:2.5px solid #2a2a2a; border-radius:8px; padding:8px 16px; text-align:center; background:#fff;">
<div style="font-weight:800; font-size:22px; line-height:1.2;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#555;">数字の羅列</div>
</div>
<div style="font-size:22px; line-height:1.3;"><b>出力</b><br><span style="color:var(--accent);">↻更新</span><br><b>評価</b></div>
</div>
</div>

<div style="flex:1;">
<div style="font-size:26px; font-weight:800; margin-bottom:4px;">利用</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="font-weight:800; font-size:22px;">入力</div>
<div style="border:2.5px solid #2a2a2a; border-radius:8px; padding:8px 16px; text-align:center; background:#fff;">
<div style="font-weight:800; font-size:22px; line-height:1.2;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#555;">数字の羅列</div>
</div>
<div style="font-weight:800; font-size:22px;">出力</div>
</div>
</div>

</div>

<!--
- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。
- 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。
- 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング</span>　<span class="tag tag-soft">2 背景</span>

<div style="display:flex; gap:22px; margin-top:6px;">

<div style="flex:1.15;">

<img src="./src/fig39-nn-crop.png" alt="ニューラルネットワークの模式図" style="display:block; width:100%;">

<div style="font-size:21px; line-height:1.5; margin-top:10px;">
・人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク<br>
・中間層（隠れ層）が複数の層となっているものを用いるものが深層学習
</div>

<div class="box-info" style="margin-top:10px; font-size:19px; line-height:1.5;">
<b>2012年</b>、Googleの キャットペーパー<br>
<span style="display:inline-block; margin-left:1em;">(「猫」を教えていなかったのに、写真から猫の特徴を抽出)</span><br>
<span style="display:inline-block; margin-left:1em;">ヒントンらによる画像認識のブレークスルー</span><br>
<b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)
</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:14px;">
<img src="./src/fig40-medal-crop.png" alt="ノーベル賞メダル" style="width:88px; height:88px; border-radius:50%; object-fit:cover;">
<div style="font-weight:800; font-size:24px; line-height:1.2;">ノーベル賞<br>2024年 <span style="font-size:18px; color:#555;">(PD)</span></div>
</div>

<div class="box-accent" style="margin-top:10px; font-size:19px; line-height:1.45; padding:9px 14px;">
<b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明<br>
<b>ジョン・ホップフィールド</b> <span style="color:#555;">物理学者・分子生物学者</span><br>
<b>ジェフリー・ヒントン</b> <span style="color:#555;">生理学・哲学→実験心理学→コンピューター科学</span>
</div>

<div class="box-accent" style="margin-top:8px; font-size:19px; line-height:1.45; padding:9px 14px;">
<b>化学 (一部)：</b>タンパク質プログラムの開発<br>
<b>デミス・ハサビス</b> <span style="color:#555;">人工知能研究者、神経科学者</span><br>
<b>ジョン・M・ジャンパー</b> <span style="color:#555;">固体物理学→理論化学→計算生物学</span>
</div>

</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:19px;">※高校生/高校教諭向けには、東大松尾研のGCIなど、無料でおすすめ</div>

<div class="cite" style="position:absolute; right:40px; top:78px;">『R1 総務省 情報通信白書』総務省(2019)</div>

<!--
- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。
- 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。
- 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング</span>　<span class="tag tag-soft">2 背景</span>

<div style="font-size:30px; font-weight:800; margin:8px 0 12px;">言語型の大規模言語モデル <span style="color:var(--accent);">(生成AIの中核)</span> の本質</div>

<div style="background:var(--section-bg); border-radius:10px; padding:18px 24px;">
<div style="font-size:34px; font-weight:800;">ネクストワードプレディクション</div>
<div style="border:2px solid var(--accent); border-radius:30px; padding:12px 24px; text-align:center; font-size:24px; margin:12px 40px;">日本の首都__ →日本の首都は__ →日本の首都は東京__</div>
<div style="font-weight:800; font-size:23px;">これまでのコンテキストから、次の言葉(トークン)の確率を予想する問題</div>
</div>

<div style="display:flex; align-items:center; gap:30px; margin-top:18px; padding-left:20px;">

<div>
<div style="font-size:26px; font-weight:800; margin-bottom:4px;">学習</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="font-weight:800; font-size:21px; line-height:1.2;">入力<br>文字</div>
<div style="border:2.5px solid #2a2a2a; border-radius:8px; padding:8px 16px; text-align:center; background:#fff;">
<div style="font-weight:800; font-size:22px; line-height:1.2;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#555;">数字の羅列</div>
</div>
<div style="font-size:22px; line-height:1.3;"><b>出力</b><br><span style="color:var(--accent);">↻更新</span><br><b>評価</b></div>
</div>
</div>

<div class="box-info pip-safe" style="flex:1; font-size:20px; line-height:1.5;">
GPT 4の場合、アメリカ議会図書館の全蔵書の約22倍に相当?<br>
<span style="font-size:18px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</span>
</div>

</div>

<!--
- そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。
- その構成について、トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。
- これも、ニューラルネットワークモデルです。インプットされたデータが、複数の層を通って出力されます。
- なんか宇宙ステーションみたいですね。
- ここでは「nano-gpt」という非常に小さなモデル（パラメータ数わずか85,000）を使って、モデルの仕組みを探っていきます。
- このモデルの目的はシンプルです。次にくるアルファベットを予想するタスクをしているわけですね。
- こんな感じで、言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。さっき言ってた函ってのはこれ全部にあたります。
-->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 120" width="150" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="14" width="76" height="92" rx="12" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="8"/><path d="M36 42 l9 9 16 -18" fill="none" stroke="#1A6BB0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="42" width="20" height="8" rx="4" fill="#1A6BB0"/><circle cx="42" cy="80" r="10" fill="none" stroke="#1A6BB0" stroke-width="8"/><rect x="70" y="76" width="20" height="8" rx="4" fill="#1A6BB0"/></svg>
</div>

<div style="font-size:60px; font-weight:800; color:#1a1a1a; line-height:1.4;">日本の首都は<span style="color:var(--accent);">___</span></div>

</div>

<!-- Slidoで「日本の首都は___」の次に来る言葉を予想してもらいます。ネクストワードプレディクションの体験です。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 120" width="150" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="14" width="76" height="92" rx="12" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="8"/><path d="M36 42 l9 9 16 -18" fill="none" stroke="#1A6BB0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="42" width="20" height="8" rx="4" fill="#1A6BB0"/><circle cx="42" cy="80" r="10" fill="none" stroke="#1A6BB0" stroke-width="8"/><rect x="70" y="76" width="20" height="8" rx="4" fill="#1A6BB0"/></svg>
</div>

<div style="font-size:60px; font-weight:800; color:#1a1a1a; line-height:1.4;">春は<span style="color:var(--accent);">___</span></div>

</div>

<!-- 次に「春は___」の続きを予想してもらいます。文脈によって候補が広がることを体験します。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 120" width="150" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="14" width="76" height="92" rx="12" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="8"/><path d="M36 42 l9 9 16 -18" fill="none" stroke="#1A6BB0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="42" width="20" height="8" rx="4" fill="#1A6BB0"/><circle cx="42" cy="80" r="10" fill="none" stroke="#1A6BB0" stroke-width="8"/><rect x="70" y="76" width="20" height="8" rx="4" fill="#1A6BB0"/></svg>
</div>

<div style="font-size:46px; font-weight:800; color:#1a1a1a; line-height:1.45;">地球に存在する水の総量はおおよそ海の<span style="color:var(--accent);">_</span></div>

</div>

<!-- 最後に「地球に存在する水の総量はおおよそ海の_」を予想してもらいます。専門的な文脈では予測が難しくなることを体験します。 -->

---

<div class="page-title">パラメーターの箱(函)としての、ディープラーニング (深層学習)</div>

# パラメーターの箱(函)としての、<span style="color:var(--accent-dark)">DL</span>　<span class="tag tag-soft">2 背景</span>

<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:62%; gap:40px;">

<div style="font-size:40px; font-weight:800; color:var(--tag-blue); text-decoration:underline; text-underline-offset:8px;">LLM Visualization</div>

<div class="box-info pip-safe" style="font-size:22px;">クリックで <b>LLM Visualization</b> のデモを開き、GPTのパラメータ構造を実際にのぞいてみる</div>

</div>

<div class="cite pip-safe">cf. NVIDIA "Mythbusters Demo GPU versus CPU"</div>

<!--
- LLM Visualizationのデモを開いて、GPTのパラメータ構造を実際にのぞいてみましょう。
- 入力されたデータが、複数の層を通って出力される様子が見えます。なんか宇宙ステーションみたいですね。
- 緑のセルは現在処理されている数値を、青のセルは重みを表しています。
- cf. NVIDIAの「Mythbusters Demo GPU versus CPU」も、並列処理のイメージとしておすすめです。
-->

---

<div class="page-title">基本問題</div>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:0 0 33%; position:relative; min-height:600px;">

<div style="display:flex; align-items:center; gap:14px; margin-top:4px;">
<div style="flex:0 0 96px; height:96px; border-radius:50%; background:linear-gradient(135deg,#1A6BB0,#3FA9E0); color:#fff; font-weight:800; font-size:21px; line-height:1.15; display:flex; align-items:center; justify-content:center; text-align:center;">理解度<br>チェック</div>
<div style="flex:1; border:3px solid #111; border-radius:40px; padding:14px 0; text-align:center; font-size:34px; font-weight:800;">基本問題</div>
</div>

<div style="font-size:27px; line-height:1.6; font-weight:700; margin-top:30px;">生成AIを活用するときの倫理に関する説明として、適切なものはどれか。<span style="color:#2E9E5B;">全て</span>選んでください。</div>

<div style="position:absolute; bottom:-40px; left:10px; font-size:240px; font-weight:800; color:#fff; line-height:1; text-shadow:0 0 1px #cfe6f3;">Q</div>

<div style="position:absolute; bottom:10px; left:10px; font-size:21px; font-weight:800; line-height:1.4;">総務省　生成AIはじめの一歩<br>～生成AIの入門的な使い方と注意点～</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:26px;">本来自分が行うべきことまで生成AI任せにしない</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:26px;">自分の考えと異なる専門家を攻撃するためのSNS文案を生成AIで作成する</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:26px;">生成AIを仕事や勉強には決して使うべきではない</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:26px;">生成AIを非倫理的な行為や犯罪に悪用しない</div>
</div>

</div>
</div>

<!-- では、ここまでの注意すべきポイント（活用者としてのモラル）に関する理解を確認するため、問題を解いてみましょう。生成AIを活用するときの倫理に関する説明として適切なものを、ア〜エから全て選んでください。 -->

---

<div class="page-title">解答/解説</div>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:0 0 33%; position:relative; min-height:600px;">

<div style="display:flex; align-items:center; gap:14px; margin-top:4px;">
<div style="flex:0 0 96px; height:96px; border-radius:50%; background:#2E7D46; color:#fff; font-weight:800; font-size:21px; line-height:1.15; display:flex; align-items:center; justify-content:center; text-align:center;">理解度<br>チェック</div>
<div style="flex:1; border:3px solid #111; border-radius:40px; padding:14px 0; text-align:center; font-size:34px; font-weight:800;">解答/解説</div>
</div>

<div style="display:flex; align-items:center; gap:14px; margin-top:30px;">
<div style="border:3px solid #2E7D46; border-radius:10px; padding:8px 18px; color:#2E7D46; font-weight:800; font-size:28px;">正解</div>
<div style="background:#111; color:#fff; font-weight:800; font-size:26px; border-radius:8px; padding:6px 20px;">ア</div>
<div style="background:#111; color:#fff; font-weight:800; font-size:26px; border-radius:8px; padding:6px 20px;">エ</div>
</div>

<div style="position:absolute; bottom:-40px; left:10px; font-size:240px; font-weight:800; color:#fff; line-height:1; text-shadow:0 0 1px #d8d8d8;">A</div>

<div style="position:absolute; bottom:10px; left:10px; font-size:21px; font-weight:800; line-height:1.4;">総務省　生成AIはじめの一歩<br>～生成AIの入門的な使い方と注意点～</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:76px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:26px;">本来自分が行うべきことまで生成AI任せにしない</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:60px; height:60px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:76px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>生成AIを使って他人を誹謗中傷することはモラルに反する</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:76px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>仕事や勉強において生成AIを一切使用してはいけない訳ではない。目的に沿って適切に活用することが重要。</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:76px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:26px;">生成AIを非倫理的な行為や犯罪に悪用しない</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:60px; height:60px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>

</div>
</div>

<!-- 解答です。正解はアとエ。アは本来自分が行うべきことまで生成AI任せにしないこと、エは非倫理的な行為や犯罪に悪用しないこと。イは他人の誹謗中傷でモラルに反し、ウは生成AIを一切使ってはいけない訳ではなく、目的に沿って適切に活用することが重要です。 -->

---

<div class="page-title">応用問題</div>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:0 0 33%; position:relative; min-height:600px;">

<div style="display:flex; align-items:center; gap:14px; margin-top:4px;">
<div style="flex:0 0 96px; height:96px; border-radius:50%; background:linear-gradient(135deg,#1A6BB0,#3FA9E0); color:#fff; font-weight:800; font-size:21px; line-height:1.15; display:flex; align-items:center; justify-content:center; text-align:center;">理解度<br>チェック</div>
<div style="flex:1; border:3px solid #111; border-radius:40px; padding:14px 0; text-align:center; font-size:32px; font-weight:800;">応用問題</div>
</div>

<div style="font-size:24px; line-height:1.55; font-weight:700; margin-top:22px;">画像生成AIで「料理をしている人」の画像を生成したところ、全て女性のイラストや写真であったときの対応として適切なものはどれか。<span style="color:#2E9E5B;">全て</span>選んでください。</div>

<img src="./src/fig48-cooking-crop.png" alt="料理をしている人として生成された画像（全て女性）" style="width:90%; border-radius:8px; margin-top:14px;">

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:26px;">生成された内容に偏りがないか自分で考えてみる</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:26px;">生成された内容は常に中立的なものであるため、そのまま活用する</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:26px;">性別を限定しないで生成するよう改めて指示する</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:84px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:26px;">再度同じ指示をして、1回目と2回目で生成された画像を混ぜて使う</div>
</div>

</div>
</div>

<!-- 続いて応用問題です。画像生成AIで「料理をしている人」の画像を生成したところ、全て女性のイラストや写真であったときの対応として適切なものを、ア〜エから全て選んでください。 -->
