<div class="page-title">①生成AIとは、なにか</div>

# データの関係性をどう考えるか

<table style="width:80%; border-collapse:collapse; margin-top:20px; font-size:34px; text-align:center;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:12px 0; border:1px solid #fff;">x</th>
<th style="padding:12px 0; border:1px solid #fff;">f(x)</th>
</tr>
</thead>
<tbody>
<tr style="background:var(--accent-soft);"><td style="padding:10px 0;">1</td><td style="padding:10px 0;">3</td></tr>
<tr><td style="padding:10px 0;">2</td><td style="padding:10px 0;">5</td></tr>
<tr style="background:var(--accent-soft);"><td style="padding:10px 0;">3</td><td style="padding:10px 0;">7</td></tr>
<tr><td style="padding:10px 0;">4</td><td style="padding:10px 0;">?</td></tr>
</tbody>
</table>

<!--
- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。
- f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？
- ルールベースの世界に生きるAIは、きっと僕から、解析的な解き方を教えられているんですね。たとえば、この場合には、一次式を試してみて、f(x) = 2*x+1っていう風なので、x=4で9だぞって。
- 結構高校までの数学の授業って、こういう考え方しませんか。f(x)ときたら、f(x)の式の形を求めることから初めてみようかな、と思う。
- でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良いのですね。xとf(x)の関係性を学習し、次を予測するだけ。f(x)の式そのものは、ブラックボックスで全然構わない。
- データの関係性について、f(x)自体がルールを明示的、つまり人が読んでもわからない形でも構わないが、コンピューターが自ら学習した結果を予想できる、この考え方がミソなんですね。
-->

---

<div class="page-title">①生成AIとは、なにか</div>

# データの関係性をどう考えるか

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 230px;">
<table style="width:100%; border-collapse:collapse; font-size:26px; text-align:center;">
<thead>
<tr style="background:var(--accent); color:#fff;"><th style="padding:6px 0; border:1px solid #fff;">x</th><th style="padding:6px 0; border:1px solid #fff;">f(x)</th></tr>
</thead>
<tbody>
<tr style="background:var(--accent-soft);"><td style="padding:4px 0;">1</td><td>3</td></tr>
<tr><td style="padding:4px 0;">2</td><td>5</td></tr>
<tr style="background:var(--accent-soft);"><td style="padding:4px 0;">3</td><td>7</td></tr>
<tr><td style="padding:4px 0;">4</td><td>?</td></tr>
</tbody>
</table>
<div style="margin-top:14px; text-align:center; font-weight:800; color:var(--accent-dark);">変換する「函」</div>
</div>

<div style="flex:1;">

<div class="box-info" style="font-size:21px; padding:10px 18px;"><b>ルールベースの世界観</b> (設計者が教えておく)<br>解析的に解くよ／等差数列っぽい？ <b>→ Yes</b><br>f(x) = 2x+1？　ならば9と予想</div>

<div class="box-accent" style="font-size:21px; padding:10px 18px; margin-top:12px;"><b>機械学習の世界観</b> (もっとたくさん学習！)<br>入力されたデータからパターンをコンピュータが探索・発見<br><b>f(x)自体は気にしない</b>　9とか11？</div>

</div>

<div style="flex:0 0 250px;">
<div class="box-warn" style="font-size:20px; padding:10px 16px;"><b>ブラックボックス</b><br>ブラックボックス内を理解する手法は開発中<br>e.g. Anthropic (2025)　AI顕微鏡</div>
</div>
</div>

<div style="display:flex; gap:14px; margin-top:14px; font-size:22px; flex-wrap:wrap;">
<span class="tag tag-soft">データの関係性の捉え方が根本的に違う</span>
<span class="tag tag-soft">確率・統計的に処理</span>
<span class="tag tag-soft">正解が出てくるとは限らない</span>
</div>

<!--
- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。
- f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？
- ルールベースの世界に生きるAIは、きっと僕から、解析的な解き方を教えられているんですね。たとえば、この場合には、一次式を試してみて、f(x) = 2*x+1っていう風なので、x=4で9だぞって。
- でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良いのですね。xとf(x)の関係性を学習し、次を予測するだけ。f(x)の式そのものは、ブラックボックスで全然構わない。
- データの関係性について、f(x)自体がルールを明示的、つまり人が読んでもわからない形でも構わないが、コンピューターが自ら学習した結果を予想できる、この考え方がミソなんですね。
-->

---

<div class="page-title">①生成AIとは、なにか</div>

# 深層学習<span style="font-size:30px;">(ディープラーニング)</span>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<img src="./src/fig15-nn-crop.png" alt="ニューラルネットワークの図" style="width:100%; max-width:680px;">

<div style="font-size:22px; line-height:1.55; margin-top:8px;">
- 人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク<br>
- 中間層（隠れ層）が複数の層となっているものを用いるものが深層学習
</div>

<div class="box-info" style="font-size:21px; padding:10px 18px; margin-top:8px;"><b>2012年</b>、Googleの キャットペーパー　(「猫」を教えていなかったのに、写真から猫の特徴を抽出)　ヒントンらによる画像認識のブレークスルー<br><b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)</div>

</div>

<div style="flex:0 0 280px;">
<div class="box-accent" style="font-size:22px; padding:12px 18px; text-align:center;"><b>ノーベル賞　2024年</b></div>

<div style="font-size:20px; line-height:1.5; margin-top:10px;">
<b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明<br>
　<b>ジョン・ホップフィールド</b>（物理学者・分子生物学者）<br>
　<b>ジェフリー・ヒントン</b>（生理学・哲学→実験心理学→コンピューター科学）
</div>

<div style="font-size:20px; line-height:1.5; margin-top:8px;">
<b>化学 (一部)：</b>タンパク質プログラムの開発<br>
　<b>デミス・ハサビス</b>（人工知能研究者、神経科学者）<br>
　<b>ジョン・M・ジャンパー</b>（固体物理学→理論化学→計算生物学）
</div>
</div>
</div>

<div class="cite pip-safe">『R1 総務省 情報通信白書』総務省 (2019)</div>

<!--
- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。
- 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。
- 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。
-->

---

<div class="page-title">①生成AIとは、なにか</div>

# 生成AI<span style="font-size:28px;">：与えられたデータから、新たなデータを生成する技術</span>

<div style="display:flex; gap:24px; margin-top:14px;">
<div class="box-accent" style="flex:1; padding:14px 22px;"><b>ネクストワードプレディクション</b><br><span style="font-size:21px;">日本の首都__ → 日本の首都は__ → 日本の首都は東京__</span></div>
<div class="box-accent" style="flex:1; padding:14px 22px;"><b>トランスフォーマー（自己注意機構）</b><br><span style="font-size:21px;">ニューラルネットワークの「形」のこと</span></div>
</div>

<div class="subhead" style="margin-top:18px;"><b>GPT：</b></div>

<div style="height:260px; margin:8px auto; max-width:760px; border:2.5px solid var(--accent); border-radius:14px; background:var(--section-bg); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">▶ デモ：LLM Visualization</div>
<div style="font-size:22px; color:#555;">トランスフォーマー(nano-gpt)のパラメタ構造をのぞく</div>
<div><b><a href="https://www.youtube.com/watch?v=-P28LKWTzrI" style="color:var(--tag-blue);">LLM Visualization</a></b></div>
</div>

<div class="cite pip-safe">cf. NVIDIA "Mythbusters Demo GPU versus CPU"　https://www.youtube.com/watch?v=-P28LKWTzrI</div>

<!--
- そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。
- その構成について、トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。
- これも、ニューラルネットワークモデルです。インプットされたデータが、複数の層を通って出力されます。なんか宇宙ステーションみたいですね。
- ここでは「nano-gpt」という非常に小さなモデル（パラメータ数わずか85,000）を使って、モデルの仕組みを探っていきます。
- こんな感じで、言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。さっき言ってた函ってのはこれ全部にあたります。
-->

---

<!-- _class: divider -->

<div style="text-align:center;">
<div style="display:inline-block; background:var(--accent-soft); color:var(--accent-dark); font-weight:800; font-size:24px; border-radius:999px; padding:6px 28px; margin-bottom:24px;">slido　設問</div>

# Q4. 日本の首都は、____

</div>

<!--
- では、ちょっとみんなで実験してみましょうか。
- 次の単語を予想して下さい。日本の首都は、____
- これは簡単でしたね。東京、または、定めている法律はない、みたいな文章に連なりそうです。
-->

---

<!-- _class: divider -->

<div style="text-align:center;">
<div style="display:inline-block; background:var(--accent-soft); color:var(--accent-dark); font-weight:800; font-size:24px; border-radius:999px; padding:6px 28px; margin-bottom:24px;">slido　設問</div>

# Q5. 春は、 ____

</div>

<!--
- これはどうでしょうか。
- なるほど、どれでも正しそうですね。こんな感じで、正解は一つでは無いときも、確率分布は生成されるので、何か戻ってくるわけです。
-->

---

<!-- _class: divider -->

<div style="text-align:center;">
<div style="display:inline-block; background:var(--accent-soft); color:var(--accent-dark); font-weight:800; font-size:24px; border-radius:999px; padding:6px 28px; margin-bottom:24px;">slido　設問</div>

# Q6. 地球に存在する水の総量はおおよそ海の ____

</div>

<!--
- 最後はこれ。
- ChatGPTに昨日きいたら、「地球に存在する水の総量はおおよそ海の水で約97%を占めています。」と言われました。もしかしたら、皆さんは、私が海の量を調べてたといったので、10倍とか50倍とかを選んだかもしれません。これは、私が皆さんにコンテキストを与えたので、結果が変わったのかもしれません。
-->

---

<div class="page-title">①生成AIとは、なにか</div>

# AIは、間違えうる

<div class="box-warn" style="font-size:22px; padding:10px 20px;"><b>原則</b>として、<b>次にくるもっともらしいもの</b>を生成AIは確率的に予想しているだけ</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:12px;">
<div style="flex:0 0 430px;">
<div style="font-weight:800; margin-bottom:4px;">学習している知識が少ない場合の例</div>
<img src="./src/fig20-bars-crop.png" alt="SimpleQAでのハルシネーション比較" style="width:100%;">
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:20px; padding:10px 18px;"><b>SimpleQA</b>：回答の事実的正確性のベンチマーク　Wei et al. (2024) Arxiv<br>例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?　A. Michio Sugeno</div>

<div style="font-size:21px; line-height:1.5; margin-top:8px;">知識のエッジ(=学習回数小)にある内容も含めてある。問題を解かせたり、論文を探させた場合等、無料版である<b>AI</b>は、「分からない」ということもなく、<b>ハルシネーション</b>(誤情報を出す)する可能性が高い</div>

<div style="font-weight:800; margin-top:8px;">その他の例</div>
<div class="box-accent" style="font-size:20px; padding:10px 18px;">古い情報だった・誤った情報を学習していた／AIが誤解していた、なんか変だ／別の分野の文脈に引きずられていた・偏っていた／差別やバイアスが含まれていた／推論ミス、別のところを参照 etc…</div>
</div>
</div>

<div class="box-warn pip-safe" style="font-size:21px; padding:10px 18px; margin-top:10px;"><b>誤っている可能性を知り、信頼の高い情報を参照し正確性を確認</b>　※ 相当ある</div>

<!--
- つまり、確率的に処理しているので、誤ったことを言う可能性もありますし、間違ったことを言う可能性もあるというのが重要です。
- 知識のエッジの話をしましょう。例外的な知識だけででもありません。AIが誤解していたり、別の分野の文脈に引きずられて、何ら変な回答が出てきたりはするわけです。
- 生成AIが、いかにもありそうなことをでっち上げること、これをハルシネーションといいます。
- 生成AIは間違う可能性もあるから気をつけろ。これは原理的にそうなのです。なので、AIの回答については、客観的に評価し、判断するようにしましょう。
-->

---

<div class="page-title">①生成AIとは、なにか</div>

# まとめ<span class="tag tag-soft" style="font-size:24px;">Take home message!</span>

<div style="display:flex; gap:24px; align-items:center; margin-top:10px;">
<div style="flex:0 0 380px;">
<img src="./src/fig21-venn-crop.png" alt="AIの包含関係の図" style="width:100%;">
<div class="cite">改変：『R1 総務省 情報通信白書』総務省 (2019)</div>
</div>

<div style="flex:1;">
<div class="box-warn" style="font-size:23px; padding:12px 20px;"><b>原則</b>として、<b>次にくるもっともらしいもの</b>を生成AIは確率的に予想しているだけ</div>

<div class="box-warn" style="font-size:23px; padding:12px 20px; margin-top:14px;"><b>ハルシネーション</b>する<b>(幻覚：AIが誤った情報を出す)</b> のは、仕組み上仕方ない</div>

<div class="box-info" style="font-size:22px; padding:12px 20px; margin-top:14px;"><b>※社会や人に与える影響はまだ未知数</b></div>
</div>
</div>

<!--
- これまでの情報をまとめるとこの図になります。
- 最後に、AIのリスクについてひとこと。AIはネクストワードプレディクション以外でも、生成結果を修正する処理を行っています。これは、バイアスや倫理上の問題の回避にもつながっているのですが、人が心地よい回答を生成する側面もあるのですね。
- AI中毒や、AIに過度に依存する事によって、私たちの関係性や社会への影響、学びへの影響がどうなるかは、まだわかっていないわけです。もはや、巨大な社会実験に乗り出してしまったような可能性があります。
- AIが出力したものを信じるかどうか、という以上に、もう一歩引いてメタな視点からAIとの関わりを情報収集し、リスクを見つめ、考えることが重要だと思っています。
-->

---

<div class="page-title">②学びにおける付き合い方</div>

<div class="box-info" style="font-size:23px; padding:12px 22px;">文科省通知『大学・高専における生成 AI の教学面の取扱いについて』 (2023年7月)<br><a href="https://www.mext.go.jp/b_menu/houdou/2023/mext_01260.html" style="color:var(--tag-blue);">https://www.mext.go.jp/b_menu/houdou/2023/mext_01260.html</a></div>

<div class="goal-box pip-safe" style="font-size:26px; margin-top:28px;">
大学・高専における学修は学生が主体的に学ぶことが本質であり、生成 AI の出力をそのまま用いるなど学生自らの手によらずにレポート等の成果物を作成することは、学生自身の学びを深めることに繋がらないため、<b>一般に不適切</b>と考えられる。
</div>

<!--
- ということで、AIとの付き合い方の話にいきましょう。ここまでは、少しひろい話でしたが、大学の話にしぼってすすめて行こうと思います。
- まず、文部科学省のポリシーがあるのでご紹介しておきます。これは、生成AIに関して利活用が想定される場面例や留意すべき観点について、各大学などに周知されたものです。
- 冒頭から、結構ぶっこんできてますね。「学修効果が上がり、また教職員の業務効率化を図ることができるなどの効果が期待される反面、レポート等の作成に生成 AI のみが使われること等に対する懸念が指摘されている」。
- ここに書いてありますけど、「大学・高専における学修は学生が主体的に学ぶことが本質であり、生成 AI の出力をそのまま用いるなど学生自らの手によらずにレポート等の成果物を作成することは、学生自身の学びを深めることに繋がらないため、一般に不適切と考えられる」ということですね。
-->

---

<div class="page-title">②学びにおける付き合い方</div>

<div class="callout-gray" style="font-size:27px; font-weight:800; padding:10px 22px;">学習・学修の過程で絶対に使うな、という意味<span class="hl">ではない</span></div>

<div style="position:relative; border:2.5px dashed var(--accent); border-radius:14px; padding:22px 28px; margin-top:18px; min-height:340px;">

<div style="position:absolute; left:28px; top:14px;"><span class="tag tag-soft" style="font-size:22px;">逆向き設計</span></div>

<div style="position:absolute; left:180px; top:30px; font-size:24px;"><b style="font-size:30px;">目的：</b><br>どこに向かうのか<br> (授業の存在価値)</div>

<div style="position:absolute; right:60px; top:24px; border:2.5px solid var(--accent); border-radius:8px; padding:18px 40px; font-weight:800; font-size:30px;">学修後の状態</div>

<div style="position:absolute; left:180px; top:170px; font-size:24px;"><b style="font-size:30px;">目標：</b><br>何が出来るようになるのか</div>

<div style="position:absolute; left:520px; top:170px; background:#e9ecef; border-radius:6px; padding:6px 16px; font-size:24px;"><b style="font-size:30px;">設計：</b><br>どのように教えるのか</div>

<div style="position:absolute; right:90px; top:170px; font-size:24px;"><b style="font-size:30px;">評価：</b><br>どのように測るのか</div>

<div style="position:absolute; left:90px; top:250px; border:2.5px solid var(--accent); border-radius:8px; padding:18px 50px; font-weight:800; font-size:30px;">学生の現状</div>

<div style="position:absolute; right:120px; bottom:18px; background:var(--accent-soft); border-radius:10px; padding:10px 22px; font-size:23px;">目標や設計を損なう形で使ってはいけない</div>

</div>

<!--
- 図で書くとこういうことです。
- ちょっとここで、成績とはなにかという話をしておきます。成績とは、目標と評価によって結ばれる、この過程の皆さんの努力を評価しているわけですね。AIを用いて再現する能力を聞いているわけではないです。
- 授業の到達目標(これはシラバスに書いてありますが)、つまり身につけてほしいこと、というのは、教員が考えて、AI時代も必要だと思って、きめているわけですね。例えば、学部4年生の論文作成の授業で、到達目標がAIを利用して自分が伝えたいことをきちんと英語で書く、とかであれば利用は問題ない場合が多いでしょう。でも、学部1年生の授業で、一緒使える英語を学ぶ、とかの目標なのに、AIが回答していたら、良くないということです。
-->

---

<!-- _class: divider -->

<div style="text-align:center;">
<div style="display:inline-block; background:var(--accent-soft); color:var(--accent-dark); font-weight:800; font-size:24px; border-radius:999px; padding:6px 28px; margin-bottom:24px;">slido　設問</div>

# Q7 AIで英語の学習はどう変わる？

</div>

<!--
- AIで英語の学習はどう変わるか、皆さんに聞いてみましょう。
-->
