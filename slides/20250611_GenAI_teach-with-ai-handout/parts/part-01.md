<div class="page-title">生成AIを使う上で</div>

# <span style="color:var(--accent-dark)">生成AI</span>を使う上で

<div class="subhead"><span class="tag tag-soft">重要な力1</span><span><b>AIと対話の文脈を作る</b></span></div>

<div class="box-accent" style="margin:6px 0 4px;"><b>AIと対話の文脈を作る</b><br>　<b>= 思考錯誤し、自分が必要な支援を引き出す</b></div>

<div style="font-size:22px; margin:2px 0 10px;">自分が積極的にAIに問いかけてみる ／ 適切な情報一覧を与えてあげる<br>自分が動かないと、AIは良い回答を出してくれない。能動的に。</div>

<div class="subhead"><span class="tag tag-soft">重要な力2</span><span><b>ハルシネーションの発生を念頭に、信頼できる情報を見極める。</b></span></div>

<div style="font-size:22px; margin:2px 0 6px;">多分、ハルシネーションしたり、社会・概念のフレームを理解しない回答をしたりしている</div>

<div style="font-size:22px; margin:2px 0;">“Notebook LMは、高校生でもつかえるんですか?”　<b style="color:var(--accent-dark)">正解：いいえ。年齢制限のため、使えません。</b></div>

<div class="box-warn takeaway" style="margin-top:8px;">AIも、生徒と同じで、正しい判断ができるためには、<b>正しい事前知識をプロンプトに入れてあげる</b>と良い</div>

<!--
- 生成AIを使う上で大事なのは2つの力。1つ目は「AIと対話の文脈を作る」＝試行錯誤して自分が必要な支援を引き出すこと。能動的に問いかけ、適切な情報一覧を与えないと、AIは良い回答を出してくれません。
- 2つ目は、ハルシネーションを念頭に、信頼できる情報を見極めること。AIも生徒と同じで、正しい判断には正しい事前知識をプロンプトに入れてあげるのが良い。
-->

---

<div class="page-title">生成AIとハルシネーション</div>

# 生成AIと<span style="color:var(--accent-dark)">ハルシネーション</span>

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:0 0 360px;">
<img src="./src/fig71-simpleqa-chart.png" alt="SimpleQAベンチマークの結果" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite" style="margin-top:4px;"><b>SimpleQA</b>：回答の事実的正確性のベンチマーク<br>Wei et al. (2024) <i>Arxiv</i></div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin:2px 0 8px;"><b>学習している知識が少ない場合の例</b><br>知識のエッジ(=学習回数小)にある内容も含めてある<br>例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?　A. Michio Sugeno</div>

<div style="font-weight:800; color:var(--accent-dark); font-size:22px; margin:6px 0 2px;">その他の例</div>
<div style="font-size:21px; line-height:1.45;">古い情報だった・誤った情報を学習していた／AIが考えるべきことを誤解し、なんか変だ／別の分野の文脈に引きずられていた・偏っていた／差別やバイアスが含まれていた／推論ミス、別のところを参照 etc…</div>

<div class="box-warn" style="margin-top:8px; font-size:22px;">問題を解かせたり、論文を探させた場合等、無料版である<b>AI</b>は、「分からない」ということもなく、ハルシネーション(誤情報を出す)する可能性が高い<br><b>誤っている可能性を知り、信頼の高い情報を参照し正確性を確認</b>　※ 相当ある</div>
</div>

</div>

<div class="box-warn takeaway" style="margin-top:6px;">ハルシネーションは結構頻繁に起こる <b>(特に無料版の場合)</b></div>

<!--
- SimpleQAは回答の事実的正確性を測るベンチマーク。学習回数の少ない「知識のエッジ」にある内容も含むので、無料版のAIは「分からない」と言わずにハルシネーション（誤情報を出す）する可能性が高い。
- 原因は、古い情報、別分野への引きずられ、バイアス、推論ミスなどさまざま。誤っている可能性を前提に、信頼の高い情報を参照して正確性を確認しましょう。
-->

---

<div class="page-title">現在の生成AIの変化 ①</div>

# 現在の<span style="color:var(--accent-dark)">生成AIの変化</span> ①

<div class="box-warn" style="margin:6px 0 4px;"><b>△ 生成AIにただ聞いて回答させる</b></div>

<div style="display:flex; gap:20px; align-items:center; margin:4px 0 14px;">
<div style="font-size:24px;">内部の学習データから回答を出す</div>
<div class="box-info" style="font-size:21px; padding:8px 18px;"><b>間違うことがある</b>　例：宮崎県の観光地を教えて → ○　／　例：日本のAI基本法を教えて → ☓</div>
</div>

<div class="box-accent" style="margin:6px 0 4px;"><b>○ 生成AIに、情報を与え、自分がほしい情報に変換してもらう</b></div>

<div style="display:flex; gap:20px; align-items:center; margin:4px 0 16px;">
<div style="font-size:24px;">与えたデータから回答を出す</div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">間違いは、だいぶ減る</div>
</div>

<div style="font-size:26px; font-weight:800;">現在：生成AIは<span style="color:var(--accent-dark)">ツール・エージェント</span>(助手みたいなもの)になっている</div>
<div style="font-size:23px; margin-top:4px;">AIの回答を確認するAI、webを検索するAIなどが繋がる</div>

<!--
- 生成AIにただ聞いて内部の学習データから答えさせると間違うことがある。たとえば「宮崎県の観光地」は答えられても「日本のAI基本法」は外す。
- 一方、情報を与えて「自分がほしい情報に変換してもらう」使い方なら間違いはだいぶ減る。今の生成AIはツール・エージェント＝助手のような存在で、回答を確認するAIやwebを検索するAIなどが繋がって動いています。
-->

---

<div class="page-title">AI agentの動きの例</div>

# AI agentの動きの例

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:0 0 470px;">
<img src="./src/fig75-agent-screen.png" alt="AIエージェントが環境変数を調べる例" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1;">
<div class="box-info" style="margin:2px 0 12px;"><b>グラウンディング：</b><br>　AIが生成する回答を、特定の信頼できる情報源（ソース）にしっかりと結びつける技術</div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div>
<div style="font-weight:800; font-size:22px; margin-bottom:4px;">昔：</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="border:2.5px solid #555; border-radius:8px; padding:8px 18px; font-weight:800;">AI</div>
<div class="farrow" style="font-size:26px;">→</div>
<div style="border:2.5px solid #555; border-radius:8px; padding:8px 14px;">回答</div>
</div>
</div>
<div>
<div style="font-weight:800; font-size:22px; margin-bottom:4px;">今：</div>
<div style="display:flex; align-items:center; gap:8px;">
<div style="border:2.5px solid #555; border-radius:8px; padding:8px 12px;">データ</div>
<div class="farrow" style="font-size:24px;">→</div>
<div style="border:2.5px solid var(--accent); border-radius:8px; padding:8px 14px; font-weight:800; color:var(--accent-dark);">AI</div>
<div class="farrow" style="font-size:24px;">→</div>
<div style="border:2.5px solid #555; border-radius:8px; padding:8px 14px;">回答</div>
</div>
</div>
</div>

<div style="font-size:23px; margin-top:14px;"><b>「因果推論」「思考ツール」</b>になりつつある</div>
</div>

</div>

<div class="box-accent takeaway" style="margin-top:8px;"><b>“ガチャ”状態：</b> 当たりまで何回もデータ・指示を変え試す</div>

<!--
- グラウンディングとは、AIの回答を信頼できる情報源（ソース）に結びつける技術。
- 昔は「AI→回答」と直接答えていたが、今は「データ→AI→回答」のようにソースを参照して答える。AIは因果推論・思考ツールになりつつある。当たりが出るまで何度もデータや指示を変えて試す“ガチャ”状態でもあります。
-->

---

<div class="page-title">教員の仕事とAIの親和性</div>

# 教員の仕事と<span style="color:var(--accent-dark)">AIの親和性</span>

<div style="font-size:23px; margin:4px 0 8px;">AIにおしえてあげる ＝ AIも生徒と同じで、<b>正しい判断ができるためには正しい事前知識をプロンプトに入れてあげる</b>と良い</div>

<div class="box-info" style="margin:6px 0;">AIを、何でも知っている先生としてとらえるの<b>ではなく</b>、<br><b>「読み書き・推論は賢く、常識もあり、疲れずないけど専門性はないので教えて上げるべき助手」</b>として捉えてみる</div>

<div class="box-accent" style="margin:6px 0;">「<b>与えた情報の変換</b>」や「<b>一般性のある回答</b>」には使える<br>昨今は、AI自体もwebページを参照していることがある</div>

<div class="box-warn" style="margin:6px 0;">良い質問をするには、「評価」をあらかじめ、イメージする<br><b>逆向き設計の授業設計のように、メタいところから</b>考える</div>

<div class="box-accent takeaway" style="margin-top:6px;"><b>教えることに近い</b>ので、<b>学校の先生はAIを使いこなせる</b></div>

<!--
- AIに教えてあげる＝AIも生徒と同じで、正しい判断のためには正しい事前知識をプロンプトに入れると良い。
- AIを「何でも知っている先生」ではなく、「読み書き・推論は賢く常識もあり疲れないが、専門性はないので教えるべき助手」と捉える。良い質問には、逆向き設計のように「評価」をあらかじめイメージしてメタな視点から考える。教えることに近いので、学校の先生はAIを使いこなせます。
-->

---

<div class="page-title">そもそも、なんで？</div>

# そもそも、なんで？

<div class="subhead"><span class="tag tag-soft">疑問点</span></div>

<div class="box-accent" style="font-size:28px; margin:10px 0;"><b>AIの中身は、どうなっているのだろう？</b><br><br><b>そもそもなんで、間違えるのか？</b><br><br><b>間違えることはなくならないのか</b></div>

<div style="font-size:32px; font-weight:800; text-align:center; margin-top:24px;">AIを使いこなすためには、メカニズムをある程度、知る必要がある</div>

<div style="font-size:27px; color:var(--accent-dark); font-weight:800; margin-top:14px;">→ AIをただ、使うだけでは、わからない！！！<br>　　実際、大学でも教員にAIのメカニズムを教えることが増加</div>

<!--
- ここからは「3 背景を知る」。AIの中身はどうなっているのか、なぜ間違えるのか、間違いはなくならないのか、という疑問に向き合います。
- AIを使いこなすにはメカニズムをある程度知る必要がある。ただ使うだけでは分からない。実際、大学でも教員にAIのメカニズムを教えることが増えています。
-->

---

<div class="page-title">ワーク：ハルシネーションの例</div>

# ワーク：<span style="color:var(--accent-dark)">ハルシネーション</span>の例

<div class="box-info" style="margin:4px 0 8px;"><b>この問題を直接貼り付けて、AIに解かせてみて下さい。</b><br><span style="font-size:21px;">【問題】aを実数の定数とする。xについての方程式 |x² − 2x − 3| = a(x − 2) の、異なる実数解の個数を求めよ。思考プロセスをステップバイステップで詳細に記述しながら、結論を導き出してください。</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-size:23px; font-weight:800; margin-bottom:4px;"><span style="color:var(--accent-dark)">誤った回答の例</span>　Gemini 2.5 flash</div>
<img src="./src/fig76-gemini-wrong.png" alt="Geminiの誤った回答例" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite" style="margin-top:2px;">出力例：6/12　https://claude.ai/share/8e82983f-275b-427e-8ea3-aef898cd0bd7</div>
</div>

<div style="flex:0 0 360px;">
<div class="box-warn"><b>なんで、こんなトンチンカンなことになるのか？</b><br><b>そのためには、機械学習を考えることになります…</b></div>
</div>

</div>

<!--
- ワークです。絶対値を含む方程式の実数解の個数を求める問題をAIに直接貼り付けて解かせてみてください。
- Gemini 2.5 flashの出力では、誤った回答になりました。なんでこんなトンチンカンなことになるのか。それを理解するには、機械学習を考えることになります。
-->

---

<div class="page-title">機械学習で、データの関係性をどう考えるか</div>

# 機械学習で、<span style="color:var(--accent-dark)">データの関係性</span>をどう考えるか

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:0 0 300px;">
<table style="border-collapse:collapse; width:100%; font-size:24px;">
<thead><tr style="background:var(--accent); color:#fff;"><th style="padding:8px 0; width:50%;">x</th><th style="padding:8px 0;">f(x)</th></tr></thead>
<tbody>
<tr><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">1</td><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">3</td></tr>
<tr><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">2</td><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">5</td></tr>
<tr><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">3</td><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">7</td></tr>
<tr><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">4</td><td style="border:1px solid #cdd5e0; text-align:center; padding:6px;">?</td></tr>
</tbody>
</table>
<div style="font-size:21px; margin-top:8px;"><b>変換する「函」</b><br><b>確率・統計的に処理</b></div>
</div>

<div style="flex:1;">
<div style="display:flex; gap:16px;">

<div style="flex:1;">
<div style="font-weight:800; color:var(--tag-blue); font-size:22px; margin-bottom:4px;">ルールベースの世界観 (設計者が教えておく)</div>
<div class="box-info" style="font-size:21px;">解析的に解くよ<br>等差数列っぽい？ <b>→ Yes</b><br>f(x) = 2x+1？<br>ならば9と予想</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark); font-size:22px; margin-bottom:4px;">機械学習の世界観 (もっとたくさん学習！)</div>
<div class="box-accent" style="font-size:21px;">入力されたデータからパターンをコンピュータが探索・発見<br><b>f(x)自体は気にしない</b><br>9とか11？</div>
</div>

</div>

<div class="box-warn" style="margin-top:8px; font-size:21px;"><b>正解が出てくるとは限らない／ブラックボックス</b><br><b>ブラックボックス内を理解する手法は開発中</b>　e.g. Anthropic (2025) AI顕微鏡</div>
</div>

</div>

<div class="box-accent takeaway" style="margin-top:8px;"><b>データの関係性の捉え方が根本的に違う</b></div>

<!--
- ルールベースの世界に生きるAIは、解析的な解き方を教えられている。たとえば一次式を試してf(x)=2x+1だから x=4で9だぞ、と。高校までの数学はこういう考え方をしますね。
- でも機械学習の世界では、f(x)がどうなっているかはどうでもよく、xとf(x)の関係性を学習して次を予測するだけ。f(x)の式そのものはブラックボックスで構わない。だから9以外に11と言うかもしれない。データの関係性の捉え方が根本的に違うのです。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング</span> (深層学習)

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1;">
<img src="./src/fig72-neural-net.png" alt="人工ニューラルネットワークの模式図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">『R1 総務省 情報通信白書』総務省(2019)</div>

<div style="display:flex; gap:24px; margin-top:10px;">
<div style="flex:1;">
<div style="font-weight:800; font-size:22px;">学習</div>
<div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:8px; margin-top:4px;">
<div style="font-weight:800;">入力</div>
<div class="box-info" style="text-align:center; font-size:20px; padding:8px;"><b>パラメーター<br>の函</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div style="font-weight:800;">出力</div>
</div>
<div style="text-align:center; font-size:20px; margin-top:2px;">更新 ↺ 評価</div>
</div>
<div style="flex:1;">
<div style="font-weight:800; font-size:22px;">利用</div>
<div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:8px; margin-top:4px;">
<div style="font-weight:800;">入力</div>
<div class="box-accent" style="text-align:center; font-size:20px; padding:8px;"><b>パラメーター<br>の函</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div style="font-weight:800;">出力</div>
</div>
</div>
</div>
</div>

<div style="flex:0 0 380px;">
<img src="./src/fig73-nobel.png" alt="ノーベル賞2024年" style="width:100%;">
</div>

</div>

<!--
- このブラックボックス部分をどんな形にするか、という設計はあります。人工ニューラルネットワーク、その発展型である深層学習（Deep Learning）です。今年のノーベル賞でもありますね。
- 物理学賞は人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明、化学賞の一部はタンパク質プログラムの開発。複数のパラメータを配置し、学習データとは異なるものを確率的につくる。意味を直接設計するのではなく、膨大なパラメータから機械的に意味を生成する方法が、いまのAIの背景にあります。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング</span> (深層学習)

<div style="font-size:25px; font-weight:800; margin:2px 0 8px;">言語型の大規模言語モデル (生成AIの中身) の本質</div>

<div class="box-accent" style="text-align:center; margin:4px 0;">日本の首都__ →日本の首都は__ →日本の首都は東京__</div>

<div style="font-size:25px; font-weight:800; margin:8px 0 2px;"><span style="color:var(--accent-dark)">ネクストワードプレディクション</span></div>
<div style="font-size:23px;"><b>これまでのコンテキストから、次の言葉(トークン)の確率を予想する問題</b></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:12px;">

<div style="flex:1;">
<div style="font-weight:800; font-size:22px;">学習</div>
<div style="display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:10px; margin-top:4px;">
<div style="font-weight:800;">入力<br>文字</div>
<div class="box-warn" style="text-align:center; font-size:21px; padding:10px;"><b>パラメーターの函</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div style="font-weight:800;">出力</div>
</div>
<div style="text-align:center; font-size:20px; margin-top:4px;">更新 ↺ 評価</div>
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:21px;">GPT 4の場合、アメリカ議会図書館の<b>全蔵書の約22倍</b>に相当?<br>※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</div>
</div>

</div>

<!--
- 生成AIの時代に来ます。よく想像されるのはChatGPTのような言語を扱うAIでしょう。これもニューラルネットワークモデルで、入力データが複数の層を通って出力されます。
- 言葉を操る生成AIはネクストワードプレディクション、つまり次に出てくる言葉（トークン）の確率を予測するAI。「日本の首都__」から次の語を予測していく。GPT-4の学習データは、アメリカ議会図書館の全蔵書の約22倍に相当するとも言われます。
-->

---

<div class="page-title">大規模言語モデルを生成AIにする</div>

# 大規模言語モデルを<span style="color:var(--accent-dark)">生成AI</span>にする

<table style="border-collapse:collapse; width:100%; font-size:23px;">
<tbody>
<tr>
<td style="border:1px solid #cdd5e0; padding:10px 16px; width:24%; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">チューニング<br>・RLHF</td>
<td style="border:1px solid #cdd5e0; padding:10px 16px;">人間にとって自然な回答をするよう、トレーニングする (good/bad)</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:10px 16px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">ガードレールの作成</td>
<td style="border:1px solid #cdd5e0; padding:10px 16px;"><b style="color:var(--accent-dark)">AIの安全性を向上させる</b>　(AIに危険/不適切なことを言わせない)</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:10px 16px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">倫理的課題の解決<br>バイアスの低減</td>
<td style="border:1px solid #cdd5e0; padding:10px 16px;">トレーニングデータ上のバイアスを減らす</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:10px 16px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">ツールの接続</td>
<td style="border:1px solid #cdd5e0; padding:10px 16px;">計算やweb検索など、モジュールを接続する</td>
</tr>
</tbody>
</table>

<div class="box-accent takeaway" style="margin-top:14px;">市販のAIは、<b>人間中心の原則</b>に従い、かなりの注意して作成されている</div>

<!--
- 大規模言語モデルを生成AIにするには、いくつかの工程があります。チューニング・RLHFで人間にとって自然な回答をするようトレーニングし、ガードレールでAIの安全性を向上させ、倫理的課題やバイアスを低減し、計算やweb検索などのツールを接続する。
- 市販のAIは、人間のニーズ・能力・制約を最優先に考慮する「人間中心の原則」に従い、かなりの注意をして作成されています。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# <span style="color:var(--accent-dark)">生成AI活用</span>にあたって注意すべきポイントは？

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">

<div style="flex:0 0 360px;">
<div style="background:#1F6E8C; color:#fff; border-radius:12px; padding:24px 22px; font-size:27px; font-weight:800; text-align:center;">生成AI活用にあたって<br>注意すべきポイントは？</div>
</div>

<div style="flex:1;">
<div class="box-accent" style="margin:0 0 10px; font-weight:800;">情報の正確性</div>
<div class="box-accent" style="margin:0 0 10px; font-weight:800;">情報流出</div>
<div class="box-accent" style="margin:0 0 10px; font-weight:800;">知的財産権の侵害</div>
<div class="box-accent" style="margin:0; font-weight:800;">活用者としてのモラル</div>
</div>

</div>

<div style="display:flex; gap:24px; align-items:flex-end; margin-top:18px;">
<div style="flex:1;">
<div class="cite" style="font-size:21px; color:#333;"><b>総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</b><br>https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-top:8px;">コンパクトに纏まっているので、ぜひ、ご活用ください</div>
</div>
<div style="flex:0 0 260px;">
<img src="./src/fig74-robot.png" alt="生成AIのイラスト" style="width:100%;">
</div>
</div>

<!--
- ここからは「4 注意点」。生成AIを使う上で注意すべき4つのポイントを学習します。情報の正確性、情報流出、知的財産権の侵害、活用者としてのモラルです。
- まずは情報の正確性に関すること。総務省の「生成AIはじめの一歩」はコンパクトに纏まっているので、ぜひご活用ください。
-->
