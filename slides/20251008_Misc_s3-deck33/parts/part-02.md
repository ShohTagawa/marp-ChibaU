<div class="page-title">AIを指す言葉の定義範囲</div>

# AI<span style="color:var(--accent-dark)">を指す言葉の定義範囲</span>

<div style="display:flex; gap:24px; align-items:center; margin-top:8px;">

<div style="flex:0 0 430px; position:relative; height:430px;">
<svg viewBox="0 0 430 430" style="width:100%; height:100%;">
<circle cx="215" cy="225" r="210" fill="#F6C9A0"/>
<circle cx="215" cy="270" r="150" fill="#EDA878"/>
<circle cx="215" cy="318" r="92" fill="#E08A4E"/>
<text x="215" y="60" text-anchor="middle" font-size="20" font-weight="800" fill="#5a3a10">人工知能</text>
<text x="215" y="86" text-anchor="middle" font-size="17" font-weight="700" fill="#5a3a10">AI：Artificial Intelligence</text>
<text x="215" y="172" text-anchor="middle" font-size="19" font-weight="800" fill="#5a2a00">機械学習</text>
<text x="215" y="196" text-anchor="middle" font-size="16" font-weight="700" fill="#5a2a00">ML：Machine Learning</text>
<text x="215" y="280" text-anchor="middle" font-size="19" font-weight="800" fill="#fff">深層学習</text>
<text x="215" y="303" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">DL：Deep Learning</text>
<rect x="158" y="350" width="114" height="48" rx="8" fill="#C0182B"/>
<text x="215" y="381" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">生成AI</text>
</svg>
</div>

<div style="flex:1; font-size:19px; line-height:1.45;">
<div style="margin-bottom:14px;">
<div>● 人間の思考プロセスと同じような形で動作するプログラム全般</div>
<div>● あるいは、人間が知的と感じる情報処理・技術全般</div>
</div>
<div style="margin-bottom:14px;">
<div>● AIのうち、人間の「学習」に相当する仕組みをコンピューター等で実現するもの</div>
<div>● 入力されたデータからパターン・ルールを発見し、新たなデータに当てはめることで、その新たなデータに関する識別や予測等が可能</div>
</div>
<div>
<div>● 機械学習のうち、多数の層から成るニューラルネットワークを用いるもの</div>
<div>● パターン／ルールを発見する上で何に着目するか（「特徴量」）を自ら抽出することが可能</div>
</div>
</div>

</div>

<div class="cite pip-safe">改変：『R1 総務省 情報通信白書』総務省(2019)</div>

<!-- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。 / f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？ -->

---

<div class="page-title">機械学習で、データの関係性をどう考えるか</div>

# 機械学習で、<span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<div style="display:flex; justify-content:center; margin-top:40px;">
<table style="border-collapse:collapse; font-size:40px; width:620px;">
<tr><th style="border:2px solid #222; padding:6px 0; font-weight:400;">x</th><th style="border:2px solid #222; padding:6px 0; font-weight:400;">f(x)</th></tr>
<tr><td style="border:2px solid #222; padding:6px 0; text-align:center;">1</td><td style="border:2px solid #222; padding:6px 0; text-align:center;">3</td></tr>
<tr><td style="border:2px solid #222; padding:6px 0; text-align:center;">2</td><td style="border:2px solid #222; padding:6px 0; text-align:center;">5</td></tr>
<tr><td style="border:2px solid #222; padding:6px 0; text-align:center;">3</td><td style="border:2px solid #222; padding:6px 0; text-align:center;">7</td></tr>
<tr><td style="border:2px solid #222; padding:6px 0; text-align:center;">4</td><td style="border:2px solid #222; padding:6px 0; text-align:center;">?</td></tr>
</table>
</div>

<!-- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。 / f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？ -->

---

<div class="page-title">機械学習で、データの関係性をどう考えるか</div>

# 機械学習で、<span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:4px;">

<div style="flex:0 0 220px;">
<table style="border-collapse:collapse; font-size:24px; width:100%;">
<tr><th style="border:2px solid #222; padding:3px 0; font-weight:400;">x</th><th style="border:2px solid #222; padding:3px 0; font-weight:400;">f(x)</th></tr>
<tr><td style="border:2px solid #222; padding:3px 0; text-align:center;">1</td><td style="border:2px solid #222; padding:3px 0; text-align:center;">3</td></tr>
<tr><td style="border:2px solid #222; padding:3px 0; text-align:center;">2</td><td style="border:2px solid #222; padding:3px 0; text-align:center;">5</td></tr>
<tr><td style="border:2px solid #222; padding:3px 0; text-align:center;">3</td><td style="border:2px solid #222; padding:3px 0; text-align:center;">7</td></tr>
<tr><td style="border:2px solid #222; padding:3px 0; text-align:center;">4</td><td style="border:2px solid #222; padding:3px 0; text-align:center;">?</td></tr>
</table>
</div>

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; color:var(--tag-blue); margin-bottom:4px;">ルールベースの世界観 (設計者が教えておく)</div>
<div class="box-info" style="font-size:20px; padding:8px 16px;">
解析的に解くよ<br>
等差数列っぽい？ <b>→ Yes</b><br>
f(x) = 2x+1？<br>
ならば9と予想
</div>
</div>

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; color:var(--accent-dark); margin-bottom:4px;">機械学習の世界観 (もっとたくさん学習！)</div>
<div class="box-accent" style="font-size:20px; padding:8px 16px;">
入力されたデータからパターンをコンピュータが探索・発見<br>
<b>f(x)自体は気にしない</b><br>
9とか11？
</div>
</div>

</div>

<div style="display:flex; justify-content:center; align-items:center; gap:18px; margin:14px 0 10px;">
<div style="font-size:20px; text-align:center;"><b>変換する「函」</b><br><span style="font-size:17px;">確率・統計的に処理<br>正解が出てくるとは限らない</span></div>
<div style="border:2.5px solid #6E2477; border-radius:8px; padding:8px 22px; background:#F3E8F5; color:#6E2477; font-weight:800; font-size:21px;">ブラックボックス</div>
<div class="box-warn" style="font-size:19px; padding:8px 16px;"><b>ブラックボックス内を理解する手法は開発中</b><br>e.g. Anthropic (2025)　AI顕微鏡</div>
</div>

<div style="font-size:24px; font-weight:800; text-align:center; color:var(--accent-dark);">データの関係性の捉え方が根本的に違う</div>

<!-- ルールベースの世界に生きるAIは、きっと僕から、解析的な解き方を教えられているんですね。たとえば、この場合には、一次式を試してみて、f(x) = 2*x+1っていう風なので、x=4で9だぞって。 / 結構高校までの数学の授業って、こういう考え方しませんか。f(x)ときたら、f(x)の式の形を求めることから初めてみようかな、と思う。 / でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良いのですね。xとf(x)の関係性を学習し、次を予測するだけ。f(x)の式そのものは、ブラックボックスで全然構わない。まぁ、たったこんだけの数字で機械学習することなんてまぁ、無理なんですけど。ただ、この数字から次を予測するとしたら、9以外にも11とかも言ってくるかもしれないんですね。 / データの関係性について、f(x)自体がルールを明示的、つまり人が読んでもわからない形でも構わないが、コンピューターが自ら学習した結果を予想できる、この考え方がミソなんですね。 -->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div class="cite" style="margin:0 0 4px;">『R1 総務省 情報通信白書』総務省(2019)</div>

<div style="text-align:center; margin:6px 0;">
<svg viewBox="0 0 760 200" style="width:78%; max-width:760px;">
<!-- input labels -->
<text x="38" y="55" text-anchor="middle" font-size="13" fill="#444">入力層</text>
<text x="380" y="55" text-anchor="middle" font-size="13" fill="#6E2477">中間層 (隠れ層)</text>
<text x="722" y="55" text-anchor="middle" font-size="13" fill="#444">出力層</text>
<!-- arrows in -->
<g fill="#E0552B">
<polygon points="20,95 100,95 100,88 120,100 100,112 100,105 20,105"/>
<polygon points="20,135 100,135 100,128 120,140 100,152 100,145 20,145"/>
<polygon points="20,175 100,175 100,168 120,180 100,192 100,185 20,185"/>
</g>
<text x="70" y="80" text-anchor="middle" font-size="12" fill="#E0552B">データを入力</text>
<!-- nodes -->
<g fill="#6E2477">
<circle cx="150" cy="100" r="13"/><circle cx="150" cy="140" r="13"/><circle cx="150" cy="180" r="13"/>
<circle cx="300" cy="90" r="13"/><circle cx="300" cy="135" r="13"/><circle cx="300" cy="180" r="13"/>
<circle cx="450" cy="90" r="13"/><circle cx="450" cy="135" r="13"/><circle cx="450" cy="180" r="13"/>
<circle cx="600" cy="100" r="13"/><circle cx="600" cy="140" r="13"/><circle cx="600" cy="180" r="13"/>
</g>
<g stroke="#bbb" stroke-width="1">
<line x1="150" y1="100" x2="300" y2="90"/><line x1="150" y1="100" x2="300" y2="135"/><line x1="150" y1="100" x2="300" y2="180"/>
<line x1="150" y1="140" x2="300" y2="90"/><line x1="150" y1="140" x2="300" y2="135"/><line x1="150" y1="140" x2="300" y2="180"/>
<line x1="150" y1="180" x2="300" y2="90"/><line x1="150" y1="180" x2="300" y2="135"/><line x1="150" y1="180" x2="300" y2="180"/>
<line x1="300" y1="90" x2="450" y2="90"/><line x1="300" y1="90" x2="450" y2="135"/><line x1="300" y1="90" x2="450" y2="180"/>
<line x1="300" y1="135" x2="450" y2="90"/><line x1="300" y1="135" x2="450" y2="135"/><line x1="300" y1="135" x2="450" y2="180"/>
<line x1="300" y1="180" x2="450" y2="90"/><line x1="300" y1="180" x2="450" y2="135"/><line x1="300" y1="180" x2="450" y2="180"/>
<line x1="450" y1="90" x2="600" y2="100"/><line x1="450" y1="90" x2="600" y2="140"/><line x1="450" y1="90" x2="600" y2="180"/>
<line x1="450" y1="135" x2="600" y2="100"/><line x1="450" y1="135" x2="600" y2="140"/><line x1="450" y1="135" x2="600" y2="180"/>
<line x1="450" y1="180" x2="600" y2="100"/><line x1="450" y1="180" x2="600" y2="140"/><line x1="450" y1="180" x2="600" y2="180"/>
</g>
<!-- arrows out -->
<g fill="#E0552B">
<polygon points="640,95 720,95 720,88 740,100 720,112 720,105 640,105"/>
<polygon points="640,135 720,135 720,128 740,140 720,152 720,145 640,145"/>
<polygon points="640,175 720,175 720,168 740,180 720,192 720,185 640,185"/>
</g>
<text x="690" y="80" text-anchor="middle" font-size="12" fill="#E0552B">データを出力</text>
</svg>
</div>

<div style="display:flex; gap:40px; margin-top:6px; justify-content:center;">

<div style="flex:0 0 320px;">
<div style="font-size:24px; font-weight:800; margin-bottom:4px;">学習</div>
<div style="display:flex; align-items:center; gap:8px;">
<div style="font-weight:800;">入力</div>
<div style="border:2.5px solid #1f4e8c; background:#DDE7F4; border-radius:8px; padding:10px 14px; text-align:center;">
<div style="font-weight:800; color:#1f4e8c;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#444; font-weight:700; margin-top:4px;">数字の羅列</div>
</div>
<div style="display:flex; flex-direction:column; gap:14px;"><div style="font-weight:800;">出力</div></div>
</div>
<div style="display:flex; justify-content:space-between; font-size:20px; margin-top:4px; padding:0 6px;">
<span>更新 ↻</span><span style="font-weight:800;">評価</span>
</div>
</div>

<div style="flex:0 0 320px;">
<div style="font-size:24px; font-weight:800; margin-bottom:4px;">利用</div>
<div style="display:flex; align-items:center; gap:8px;">
<div style="font-weight:800;">入力</div>
<div style="border:2.5px solid #1f4e8c; background:#DDE7F4; border-radius:8px; padding:10px 14px; text-align:center;">
<div style="font-weight:800; color:#1f4e8c;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#444; font-weight:700; margin-top:4px;">数字の羅列</div>
</div>
<div style="font-weight:800;">出力</div>
</div>
</div>

</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。 -->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div class="cite" style="margin:0 0 6px;">『R1 総務省 情報通信白書』総務省(2019)</div>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1.15;">
<div style="font-size:21px; line-height:1.5;">
<div>‐ 人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク</div>
<div>‐ 中間層（隠れ層）が複数の層となっているものを用いるものが深層学習</div>
</div>

<div class="box-info" style="margin-top:14px; font-size:20px;">
<b>2012年</b>、Googleの キャットペーパー<br>
　（「猫」を教えていなかったのに、写真から猫の特徴を抽出）<br>
　ヒントンらによる画像認識のブレークスルー<br>
<b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:19px;">※高校生／高校教諭向けには、東大松尾研のGCIなど、無料でおすすめ</div>
</div>

<div style="flex:1; border:2px solid #C9A227; border-radius:10px; padding:10px 16px; background:#FBF6E6;">
<div style="font-size:23px; font-weight:800; color:#9a7800;">ノーベル賞 2024年 <span style="font-size:18px;">(PD)</span></div>
<div style="font-size:19px; margin-top:8px;"><b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明</div>
<div style="font-size:18px; margin-top:4px; line-height:1.4;">
<b>ジョン・ホップフィールド</b>　物理学者・分子生物学者<br>
<b>ジェフリー・ヒントン</b>　生理学・哲学→実験心理学→コンピューター科学
</div>
<div style="font-size:19px; margin-top:8px;"><b>化学 (一部)：</b>タンパク質プログラムの開発</div>
<div style="font-size:18px; margin-top:4px; line-height:1.4;">
<b>デミス・ハサビス</b>　人工知能研究者、神経科学者<br>
<b>ジョン・M・ジャンパー</b>　固体物理学→理論化学→計算生物学
</div>
</div>

</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。 -->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div style="font-size:27px; font-weight:800; margin:2px 0 8px;">言語型の大規模言語モデル (生成AIの中身) の本質</div>

<div style="text-align:center; font-size:30px; font-weight:800; margin:10px 0;">ネクストワードプレディクション</div>

<div class="flowrow" style="justify-content:center; gap:12px; margin:10px 0;">
<div style="border:1.5px solid #888; border-radius:6px; padding:8px 18px; font-size:22px;">日本の首都__</div>
<span class="farrow">→</span>
<div style="border:1.5px solid #888; border-radius:6px; padding:8px 18px; font-size:22px;">日本の首都は__</div>
<span class="farrow">→</span>
<div style="border:1.5px solid #888; border-radius:6px; padding:8px 18px; font-size:22px;">日本の首都は東京__</div>
</div>

<div class="box-accent" style="text-align:center; margin:10px 0;"><b>これまでのコンテキストから、次の言葉(トークン)の確率を予想する問題</b></div>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:10px;">

<div style="flex:0 0 360px;">
<div style="font-size:24px; font-weight:800; margin-bottom:4px;">学習</div>
<div style="display:flex; align-items:center; gap:8px;">
<div style="border:2.5px solid #2e8b3d; background:#E2F2E2; border-radius:8px; padding:8px 12px; text-align:center; font-weight:800; color:#2e8b3d;">入力<br>文字</div>
<div style="border:2.5px solid #1f4e8c; background:#DDE7F4; border-radius:8px; padding:10px 14px; text-align:center;">
<div style="font-weight:800; color:#1f4e8c;">パラメーター<br>の函</div>
<div style="font-size:18px; color:#444; font-weight:700; margin-top:4px;">数字の羅列</div>
</div>
<div style="font-weight:800;">出力</div>
</div>
<div style="display:flex; justify-content:space-between; font-size:20px; margin-top:4px; padding:0 6px;">
<span>更新 ↻</span><span style="font-weight:800;">評価</span>
</div>
</div>

<div class="box-info pip-safe" style="flex:1; font-size:20px;">
GPT 4の場合、アメリカ議会図書館の<b>全蔵書の約22倍</b>に相当?<br>
<span style="font-size:18px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</span>
</div>

</div>

<!-- そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。 / その構成について、トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。 / これも、ニューラルネットワークモデルです。インプットされたデータが、複数の層を通って出力されます。 / なんか宇宙ステーションみたいですね。 / ここでは「nano-gpt」という非常に小さなモデル（パラメータ数わずか85,000）を使って、モデルの仕組みを探っていきます。 / こんな感じで、言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 -->

---

<div class="page-title">LLM (大規模言語モデル)の仕組み</div>

# LLM <span style="color:var(--accent-dark)">(大規模言語モデル)の仕組み</span>

<div style="font-size:19px; margin:0 0 2px;">入力テキストに基づき次の単語を生成する</div>

<div style="display:grid; grid-template-columns:repeat(4,1fr); text-align:center; font-size:21px; font-weight:800; margin:2px 0; column-gap:14px;">
<div>計算1回目</div><div>計算2回目</div><div>計算3回目</div><div>計算n回目</div>
</div>

<div style="display:grid; grid-template-columns:repeat(4,1fr); column-gap:14px; row-gap:4px; text-align:center; margin-top:4px;">

<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 14px; font-size:20px;">"わが"</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 14px; font-size:20px;">"わがは"</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 14px; font-size:20px;">"わがはい"</span></div>
<div></div>

<div style="color:#aaa; font-size:16px;">↑</div><div style="color:#aaa; font-size:16px;">↑</div><div style="color:#aaa; font-size:16px;">↑</div><div></div>

<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">出力</span></div>
<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">出力</span></div>
<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">出力</span></div>
<div></div>

<div><span style="display:inline-block; background:#6E2477; color:#fff; border-radius:6px; padding:5px 14px; font-weight:800; font-size:20px;">AI処理<br><span style="font-size:16px;">（デコーダ）</span></span></div>
<div><span style="display:inline-block; background:#6E2477; color:#fff; border-radius:6px; padding:5px 14px; font-weight:800; font-size:20px;">AI処理<br><span style="font-size:16px;">（デコーダ）</span></span></div>
<div><span style="display:inline-block; background:#6E2477; color:#fff; border-radius:6px; padding:5px 14px; font-weight:800; font-size:20px;">AI処理<br><span style="font-size:16px;">（デコーダ）</span></span></div>
<div></div>

<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 16px; font-size:20px;">前処理</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 16px; font-size:20px;">前処理</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 16px; font-size:20px;">前処理</span></div>
<div></div>

<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">入力</span></div>
<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">入力</span></div>
<div><span style="display:inline-block; background:#2e8b3d; color:#fff; border-radius:6px; padding:4px 24px; font-weight:800; font-size:20px;">入力</span></div>
<div></div>

<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 16px; font-size:20px;">"わ"</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 16px; font-size:20px;">"わが"</span></div>
<div><span style="display:inline-block; border:1.5px solid #888; border-radius:5px; padding:3px 14px; font-size:20px;">"わがは"</span></div>
<div style="font-size:18px; color:#555; text-align:left; align-self:center;">前の出力が、<br>次の入力になる</div>

</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:60px; justify-content:center; height:100%;">
<div style="font-size:160px; color:var(--accent); line-height:1;">☑</div>
<div style="font-size:90px; font-weight:800; color:#444;">春は＿</div>
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:60px; justify-content:center; height:100%;">
<div style="font-size:160px; color:var(--accent); line-height:1;">☑</div>
<div style="font-size:74px; font-weight:800; color:#444;">地球に存在する水は海の量の＿</div>
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<div class="page-title">生成AIとハルシネーション</div>

# 生成AIと<span style="color:var(--accent-dark)">ハルシネーション</span>

<div style="display:flex; gap:20px; align-items:center;">

<div style="flex:1.5;">
<div style="font-size:18px; font-weight:800; margin-bottom:2px;">Humanity’s Last Exam (Full Set)*<br>Expert-level questions across subjects</div>
<div style="font-size:17px; color:#666; margin-bottom:2px;">● With thinking　○ Without thinking</div>
<img src="./src/fig34-hle-chart.png" alt="Humanity's Last Exam（Full Set）でのモデル別正答率の棒グラフ。With thinking と Without thinking の比較" style="width:100%;">
</div>

<div style="flex:1;">
<div style="font-size:20px; line-height:1.5;">モデルが全体の中で正しく予測できた割合を示す基本的な評価指標</div>
<div style="font-size:20px; line-height:1.5; margin-top:6px;"><b>算出方法は「正しく予測できた数 ÷ 全体の総サンプル数」</b></div>

<div class="box-accent" style="margin-top:24px; font-size:40px; font-weight:800; text-align:center; padding:24px 16px;">
ハルシネーションは<br>仕組み上、起こる
</div>
</div>

</div>

<div class="cite pip-safe">OpenAI https://openai.com/ja-JP/index/introducing-gpt-5/</div>

---

<div class="page-title">LLMと生成AIサービス</div>

# LLM<span style="color:var(--accent-dark)">と生成AIサービス</span>

<div style="display:flex; gap:16px; align-items:stretch; margin-top:6px;">

<div style="flex:0 0 70px; position:relative;">
<svg viewBox="0 0 70 380" style="width:100%; height:100%;" preserveAspectRatio="none">
<polygon points="35,4 70,376 0,376" fill="#E9B8D0"/>
</svg>
<div style="position:absolute; top:8px; left:0; width:100%; text-align:center; font-size:24px; font-weight:800; color:var(--accent-dark);">応用</div>
<div style="position:absolute; bottom:8px; left:0; width:100%; text-align:center; font-size:24px; font-weight:800; color:var(--accent-dark);">基盤</div>
</div>

<table style="flex:1; border-collapse:collapse; font-size:20px; width:100%;">
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; font-weight:800; width:230px; vertical-align:top;">生成AI アプリケーション</td>
<td style="border:1px solid #ccc; padding:8px 12px;"><b>Chat GPT, Gemini etc…</b> インターフェースを通じて AI 機能をユーザーに提供する</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; font-weight:800; vertical-align:top;">エージェント</td>
<td style="border:1px solid #ccc; padding:8px 12px;"><b>DeepResearch, web検索 etc…</b> 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; font-weight:800; vertical-align:top;">プラットフォーム</td>
<td style="border:1px solid #ccc; padding:8px 12px;"><b>Dify, Google AI studio etc…</b> AI モデルの構築とデプロイに役立つツールとサービス、データマネジメントツールで構成</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; font-weight:800; vertical-align:top;">大規模言語モデル</td>
<td style="border:1px solid #ccc; padding:8px 12px;">説明の通り</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; font-weight:800; vertical-align:top;">インフラストラクチャー</td>
<td style="border:1px solid #ccc; padding:8px 12px;">コンピューターリソース、GPUなど</td>
</tr>
</table>

</div>

<div class="cite pip-safe">改変：Google Cloud Skills Boost</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。 -->

---

<div class="page-title">AI agentの動きの例</div>

# AI agent<span style="color:var(--accent-dark)">の動きの例</span>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1.1;">
<img src="./src/fig36-agent-log.png" alt="AIエージェントがサーバー設定環境変数を調べ、ターミナルでコマンドを実行しているログの画面" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>

<div style="flex:1;">
<div class="box-accent" style="font-size:21px;">
<b>グラウンディング：</b><br>
　AIが生成する回答を、特定の信頼できる　情報源（ソース）にしっかりと結びつける技術
</div>

<div style="margin-top:18px;">
<div style="font-size:22px; font-weight:800; margin-bottom:6px;">昔：</div>
<div style="display:flex; align-items:center; gap:12px; font-size:20px;">
<div style="border:2px solid #1f4e8c; background:#DDE7F4; border-radius:8px; padding:8px 22px; font-weight:800; color:#1f4e8c;">AI</div>
<span class="farrow">→</span>
<div>回答</div>
</div>
</div>

<div style="margin-top:14px;">
<div style="font-size:22px; font-weight:800; margin-bottom:6px;">今：</div>
<div style="display:flex; align-items:center; gap:10px; font-size:20px;">
<div style="border:2px solid #2e8b3d; background:#E2F2E2; border-radius:8px; padding:8px 18px; font-weight:800; color:#2e8b3d;">データ</div>
<span class="farrow">→</span>
<div style="border:2px solid #1f4e8c; background:#DDE7F4; border-radius:8px; padding:8px 22px; font-weight:800; color:#1f4e8c;">AI</div>
<span class="farrow">→</span>
<div>回答</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:18px; font-size:22px;"><b>「因果推論」「思考ツール」</b>になりつつある</div>
</div>

</div>
