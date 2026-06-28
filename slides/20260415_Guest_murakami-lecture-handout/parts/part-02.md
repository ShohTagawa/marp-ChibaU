<div class="page-title">ワーク：ハルシネーションの例</div>

# <span style="color:var(--accent-dark)">3　背景を知る</span>

<div class="subhead"><span>【問題】aを実数の定数とする。xについての方程式 <span style="font-style:italic;">|x² − 2x − 3| = a(x − 2)</span> の、異なる実数解の個数を求めよ。</span></div>

<div class="box-info" style="margin-top:6px;">思考プロセスをステップバイステップで詳細に記述しながら、結論を導き出してください。</div>

<div class="lead-note" style="margin-top:12px;"><b>この問題を直接貼り付けて、AIに解かせてみて下さい。</b></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">
<div style="flex:0 0 auto;">
<div style="font-weight:800; color:var(--accent-dark); margin-bottom:6px;">誤った回答の例</div>
<img src="./src/fig25-wrong-answer.png" alt="Gemini 2.5 flash の誤った回答例" style="height:240px; border:1px solid #e3e8f0; border-radius:6px;">
</div>
<div style="flex:1; align-self:center;">
<div style="font-size:30px;">Gemini 2.5 flash</div>
<div style="font-size:26px; margin-top:10px;">出力例：6/12</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><b>なんで、こんなトンチンカンなことになるのか？</b><br>そのためには、機械学習を考えることになります<b>…</b></div>

<!-- ワーク：ハルシネーションの例。Gemini 2.5 flash にこの数学の問題を解かせると、出力例6/12で誤答する。なぜこんなトンチンカンなことになるのか？それを理解するには、機械学習を考えることになる。 -->

---

<div class="page-title">①生成AIとは、なにか</div>

# <span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<div style="display:flex; justify-content:center; margin-top:36px;">
<table style="border-collapse:collapse; width:760px; text-align:center; font-size:40px;">
<thead>
<tr style="background:#4C9A3A; color:#fff;"><th style="padding:14px 0;">x</th><th style="padding:14px 0;">f(x)</th></tr>
</thead>
<tbody>
<tr style="background:#D7E8CE;"><td style="padding:12px 0;">1</td><td style="padding:12px 0;">3</td></tr>
<tr style="background:#EAF3E4;"><td style="padding:12px 0;">2</td><td style="padding:12px 0;">5</td></tr>
<tr style="background:#D7E8CE;"><td style="padding:12px 0;">3</td><td style="padding:12px 0;">7</td></tr>
<tr style="background:#EAF3E4;"><td style="padding:12px 0;">4</td><td style="padding:12px 0;">?</td></tr>
</tbody>
</table>
</div>

<!-- ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。f(1)=3、f(2)=5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？ -->

---

<div class="page-title">①生成AIとは、なにか</div>

# <span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 230px;">
<table style="border-collapse:collapse; width:100%; text-align:center; font-size:26px;">
<thead><tr style="background:#4C9A3A; color:#fff;"><th style="padding:6px 0;">x</th><th style="padding:6px 0;">f(x)</th></tr></thead>
<tbody>
<tr style="background:#D7E8CE;"><td style="padding:5px 0;">1</td><td style="padding:5px 0;">3</td></tr>
<tr style="background:#EAF3E4;"><td style="padding:5px 0;">2</td><td style="padding:5px 0;">5</td></tr>
<tr style="background:#D7E8CE;"><td style="padding:5px 0;">3</td><td style="padding:5px 0;">7</td></tr>
<tr style="background:#EAF3E4;"><td style="padding:5px 0;">4</td><td style="padding:5px 0;">?</td></tr>
</tbody>
</table>
</div>

<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark);">変換する「<ruby>函<rt style="font-size:.5em;">ブラックボックス</rt></ruby>」</div>
<div style="display:flex; gap:10px; margin-top:4px; flex-wrap:wrap;">
<span style="font-weight:800;">確率・統計的に処理</span>
<span class="hl" style="color:var(--accent); font-weight:800;">正解が出てくるとは限らない</span>
</div>
</div>

<div class="box-accent" style="flex:0 0 300px; font-size:21px; text-align:center; padding:10px 16px;"><b>ブラックボックス内を理解する手法は開発中</b><br>e.g. Anthropic (2025)<br>AI顕微鏡</div>

</div>

<div style="display:flex; gap:24px; margin-top:10px;">

<div style="flex:1;">
<div style="font-weight:800; margin-bottom:4px;">ルールベースの世界観 <span style="font-weight:700;">(設計者が教えておく)</span></div>
<div class="stepbox" style="margin:0; padding:8px 18px;">
<div class="st" style="font-size:22px; margin:2px 0;">- 解析的に解くよ</div>
<div class="st" style="font-size:22px; margin:2px 0;">　- 等差数列っぽい？ <b style="color:var(--tag-blue);">→ Yes</b></div>
<div class="st" style="font-size:22px; margin:2px 0;">　　- f(x) = 2x+1？</div>
<div class="st" style="font-size:22px; margin:2px 0;">　　　- ならば9と予想</div>
</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; margin-bottom:4px;">機械学習の世界観 <span style="font-weight:700;">(もっとたくさん学習！)</span></div>
<div class="stepbox" style="margin:0; padding:8px 18px;">
<div class="st" style="font-size:22px; margin:2px 0;">- 入力されたデータからパターンをコンピュータが探索・発見</div>
<div class="st" style="font-size:22px; margin:2px 0;">　- <b>f(x)自体は気にしない</b></div>
<div class="st" style="font-size:22px; margin:2px 0;">　　- 9とか11？</div>
</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px; text-align:center;">データの関係性の捉え方が<b>根本的に違う</b></div>

<!-- ルールベースの世界に生きるAIは、解析的な解き方を教えられている。たとえば一次式を試して、f(x)=2x+1なのでx=4で9だぞ、と。でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良い。xとf(x)の関係性を学習し、次を予測するだけ。f(x)の式そのものはブラックボックスで全然構わない。9以外にも11とかも言ってくるかもしれない。データの関係性の捉え方が根本的に違う。ブラックボックス内を理解する手法は開発中（e.g. Anthropic 2025のAI顕微鏡）。 -->

---

<div class="page-title">①生成AIとは、なにか</div>

# <span style="color:var(--accent-dark)">深層学習 (ディープラーニング)</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<img src="./src/fig28-nn-diagram.png" alt="入力層・中間層（隠れ層）・出力層からなるニューラルネットワーク" style="width:100%; max-width:640px;">

<div class="box-warn" style="margin-top:8px; font-size:20px; font-weight:600; color:#8a4b00;">- 人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク<br>- 中間層（隠れ層）が複数の層となっているものを用いるものが深層学習</div>

<div style="font-size:21px; margin-top:8px; line-height:1.5;">
<b>2012年</b>、Googleの キャットペーパー<br>
<span style="margin-left:2em;">（「猫」を教えていなかったのに、写真から猫の特徴を抽出）</span><br>
<span style="margin-left:2em;">ヒントンらによる画像認識のブレークスルー</span><br>
<b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)
</div>
</div>

<div style="flex:0 0 360px;">
<div style="display:flex; align-items:center; gap:14px;">
<div><div style="font-weight:800; font-size:24px;">ノーベル賞</div><div style="font-weight:800; font-size:24px;">2024年</div></div>
<img src="./src/fig28-nobel-portrait.png" alt="ノーベル賞 (PD)" style="width:96px; height:96px; border-radius:50%; object-fit:cover;">
</div>
<div style="font-size:18px; text-align:right; color:#666;">(PD)</div>

<div class="box-info" style="font-size:19px; padding:8px 16px; margin-top:4px;"><b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明<br><b>ジョン・ホップフィールド</b>　物理学者・分子生物学者<br><b>ジェフリー・ヒントン</b>　生理学・哲学→実験心理学→コンピューター科学</div>

<div class="box-accent" style="font-size:19px; padding:8px 16px; margin-top:6px;"><b>化学 (一部)：</b>タンパク質プログラムの開発<br><b>デミス・ハサビス</b>　人工知能研究者、神経科学者<br><b>ジョン・M・ジャンパー</b>　固体物理学→理論化学→計算生物学</div>
</div>

</div>

<div class="cite">『R1 総務省 情報通信白書』総務省 (2019)</div>

<!-- このブラックボックス部分をどんな形にするか、という設計はある。人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)。今年のノーベル賞でもある。複数のパラメータを配置することで、学習したデータとは異なるものを確率的につくることができる。意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法が、いまのAIの背景にある。 -->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# <span style="color:var(--accent-dark)">3　背景を知る</span>

<div class="subhead"><span style="color:var(--accent-dark);">言語型の大規模言語モデル (生成AIの中身) の本質</span></div>

<div class="box-accent" style="text-align:center;">
<div style="font-size:34px; font-weight:800; color:var(--accent-dark);">ネクストワードプレディクション</div>
<div class="goal-box" style="background:#fff; font-size:24px; margin:10px auto; max-width:760px; padding:8px 20px;">日本の首都__　→　日本の首都は__　→　日本の首都は東京__</div>
<div style="font-weight:800; font-size:23px;">これまでのコンテキストから、次の言葉（トークン）の確率を予想する問題</div>
</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:12px;">

<div class="box-warn" style="flex:0 0 auto; background:#FDEFD7; border-color:#E8B96B; color:#6b4a16; padding:14px 18px;">
<div style="font-weight:800; font-size:21px;">学習</div>
<div style="display:flex; align-items:center; gap:14px; margin-top:8px;">
<div style="font-weight:800; font-size:26px; line-height:1.2;">入力<br>文字</div>
<div style="border:2.5px solid #4a5568; border-radius:8px; padding:12px 20px; text-align:center; background:#fff;"><div style="font-size:26px; font-weight:800; color:#1a1a1a;">パラメーター<br>の函</div><div style="font-size:18px; color:#444;">数字の羅列</div></div>
<div style="text-align:center;"><div style="font-weight:800; font-size:24px;">出力</div><div style="color:var(--accent); font-size:18px;">更新 ↺</div><div style="font-weight:800; font-size:24px;">評価</div></div>
</div>
</div>

<div class="box-info pip-safe" style="flex:1; align-self:center; font-size:22px;">GPT 4の場合、アメリカ議会図書館の<b>全蔵書の約22倍</b>に相当?<br>※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</div>

</div>

<!-- 生成AIでよく想像されるのは、ChatGPTのような言語を扱うAI。これもニューラルネットワークモデルで、インプットされたデータが複数の層を通って出力される。言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測を行うAI。さっき言っていた「函」はこれ全部にあたる。学習のフローは、入力テキストの準備→トークン化→モデルの予測→正解トークンとの比較で誤差を計算→誤差逆伝播→パラメータの更新、を繰り返す。GPT4の学習データはアメリカ議会図書館の全蔵書の約22倍に相当するとも言われる。 -->

---

<div class="page-title">ハルシネーション</div>

# <span style="color:var(--accent-dark)">ChatGPTの現状</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:0 0 560px;">
<img src="./src/fig30-simpleqa-chart.png" alt="SimpleQA：correct / not attempted / incorrect のベンチマーク結果" style="width:100%;">
</div>

<div style="flex:1;">
<div class="cite" style="margin-top:0; font-size:21px; color:#333;">SimpleQA：回答の事実的正確性のベンチマーク<br>Wei et al. (2024) <i>Arxiv</i></div>

<div class="box-accent" style="margin-top:10px; font-size:21px;"><u>知識のエッジ(=学習回数小)にある内容も含めてある</u><br>例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?<br><span style="margin-left:1.4em;">A. Michio Sugeno</span></div>

<div style="font-size:21px; margin-top:8px; line-height:1.5;">問題を解かせたり、論文を探させた場合等、無料版である<b>4o mini</b>は、「分からない」ということもなく、ハルシネーションする可能性が高い</div>

<div class="box-warn pip-safe" style="margin-top:10px;">特定の専門知識は、回答が誤りうるので<b>注意する！</b><br>特に、研究の専門的知識。</div>
</div>

</div>

<!-- SimpleQAは回答の事実的正確性のベンチマーク（Wei et al. 2024 Arxiv）。知識のエッジ、つまり学習回数の小さい内容も含めてある。例えばQ. Who received the IEEE Frank Rosenblatt Award in 2010? に対しA. Michio Sugeno など。問題を解かせたり論文を探させた場合、無料版の4o miniは「分からない」と言うこともなくハルシネーションする可能性が高い。特定の専門知識、特に研究の専門的知識は回答が誤りうるので注意する。 -->

---

<div class="page-title">AIの社会的影響</div>

# <span style="color:var(--accent-dark)">参考：</span> 職業への影響

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:0 0 460px;">
<img src="./src/fig31-job-scatter.png" alt="第1-1-9図 各職業に対するAIの影響と補完性（アメリカ）" style="width:100%;">
</div>

<div style="flex:1;">
<div class="box-accent" style="font-size:21px; background:#FBE7F1; border-color:#D97AAE;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>

<div class="box-info" style="font-size:21px; margin-top:8px;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>

<div class="box-warn" style="font-size:21px; margin-top:8px; background:#FBF6DD; border-color:#D4C04A; color:#6b5a00;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

<div style="font-size:21px; margin-top:8px;">※ 教員・研究者(自然科学系)は、青の領域</div>
</div>

</div>

<div class="cite pip-safe"><b>内閣府 (2024)</b> <i>世界経済の潮流</i>＞第1章＞p.13</div>

<!-- ハンプサイクル。AIの影響が大きく代替性が高い職業（事務的タスク中心）はAIがとって変わってしまう。AIの影響が大きく補完性が高い職業はAIを使いこなす必要がある。AIの影響が小さいのは物理的タスク中心の職業。教員・研究者（自然科学系）は青の領域にある。 -->

---

<!-- _class: message -->

<div style="text-align:center;">
<div style="font-size:60px; font-weight:800; margin-top:120px;">英語論文書くのは<br>思ったよりもできそう</div>
</div>

<!-- 英語論文を書くのは、思ったよりもできそう。 -->

---

<div class="page-title">講師の思い</div>

# <span style="color:var(--accent-dark)">生成AIは、英語学習や論文執筆に役立つのでは？</span>

<div style="text-align:center; font-size:24px; margin:-4px 0 8px;">(多分そう)</div>

<div style="display:flex; gap:18px; align-items:center; justify-content:center;">
<img src="./src/fig33-stairs-left.png" alt="積み上げて受動的に学ぶ：学校的学び方" style="height:230px;">
<img src="./src/fig33-stairs-right.png" alt="最終到達点から探究的に学ぶ：職人的芸術家の学び方" style="height:230px;">
<img src="./src/fig33-book-cover.png" alt="#100日チャレンジ" style="height:230px;">
</div>

<div class="box-accent pip-safe" style="margin-top:14px; text-align:center; font-size:24px;">生成AIを使いこなせるようになれば、<b>研究で頑張りたいこと、興味あること、学びたいことに、もっと取組みやすくなり、夢を叶えやすくなる</b>のではないか？</div>

<!-- 生成AIは、英語学習や論文執筆に役立つのではないか（多分そう）。積み上げて受動的に学ぶ学校的な学び方と、最終到達点から探究的に学ぶ職人的・芸術家の学び方がある。生成AIを使いこなせるようになれば、研究で頑張りたいこと、興味あること、学びたいことに、もっと取組みやすくなり、夢を叶えやすくなるのではないか。 -->

---

<div class="page-title">重要なこと</div>

# <span style="color:var(--accent-dark)">重要なこと</span>

<div class="stepbox" style="margin-top:6px;">
<div style="display:flex; align-items:center; gap:18px;">
<div style="flex:0 0 130px; font-weight:800; font-size:23px;">重要な力1</div>
<div style="flex:1;"><span class="hl" style="color:var(--accent); font-weight:800; font-size:27px;">AIと対話の文脈を作る</span><br><b style="font-size:25px;">= 思考錯誤し、自分が必要な支援を引き出す</b></div>
</div>
</div>
<div style="font-size:21px; margin:6px 0 0 150px; line-height:1.5;">自分が積極的にAIに問いかけてみる / 適切な情報一覧を与えてあげる<br>自分が動かないと、AIは良い回答を出してくれない。能動的に。</div>

<div class="stepbox" style="margin-top:12px;">
<div style="display:flex; align-items:center; gap:18px;">
<div style="flex:0 0 130px; font-weight:800; font-size:23px;">重要な力2</div>
<div style="flex:1;"><b style="font-size:27px;">ハルシネーションの発生を念頭に、信頼できる情報を見極める。</b></div>
</div>
</div>
<div style="font-size:21px; margin:6px 0 0 150px; line-height:1.5;">多分、ハルシネーションしたり、社会・概念のフレームを理解しない回答をしたりしている<br>“Notebook LMは、高校生でもつかえるんですか?”　正解：いいえ。年齢制限のため、使えません。</div>

<div style="display:flex; gap:16px; align-items:center; margin-top:8px;">
<img src="./src/fig34-notebooklm.png" alt="NotebookLM が利用可能な地域" style="height:74px; border:1px solid #e3e8f0; border-radius:6px;">
<div class="box-warn pip-safe" style="flex:1; font-size:21px;">AIも、生徒と同じで、正しい判断ができるためには、<b>正しい事前知識をプロンプトに入れてあげる</b>と良い</div>
</div>

<!-- AIと対話の文脈を作る、つまり試行錯誤し自分が必要な支援を引き出すことが重要な力1。自分が積極的にAIに問いかけ、適切な情報一覧を与えてあげる。自分が動かないとAIは良い回答を出してくれない。能動的に。重要な力2は、ハルシネーションの発生を念頭に、信頼できる情報を見極めること。例えば“Notebook LMは、高校生でもつかえるんですか?”の正解は、いいえ、年齢制限のため使えません。AIも生徒と同じで、正しい判断ができるためには、正しい事前知識をプロンプトに入れてあげると良い。 -->

---

<div class="page-title">次回までの課題</div>

# <span style="color:var(--accent-dark)">次回までの課題</span>

<div class="goal-box pip-safe" style="margin-top:40px; font-size:30px; line-height:1.9; text-align:center;">
来週まで、チューターAIを開放しています。<br>
来週、アップデートした完成版を持ってきて下さい。<br><br>
<b>4段階モデルには従った内容にして下さい</b><br><br>
<b style="color:var(--accent-dark);">お疲れ様でした</b>
</div>

<!-- 来週まで、チューターAIを開放しています。来週、アップデートした完成版を持ってきて下さい。4段階モデルには従った内容にして下さい。お疲れ様でした。 -->

---

<div class="page-title">皆で試す、チャットボット</div>

<div style="text-align:center; margin-top:40px;">
<div style="font-size:72px; font-weight:800;">皆で試す、チャットボット</div>
<div style="font-size:24px; font-weight:800; margin-top:4px;">生成AIを活用した英語論文執筆支援ツールの教育的効果および心理的な影響の検証についての研究</div>
<div style="font-size:38px; font-weight:800; color:var(--accent); margin-top:24px;">生成AIは、大学の学びをどう変えるのか？</div>
<div style="font-size:32px; font-weight:800; margin-top:56px;">後半</div>
</div>

<!-- 皆で試す、チャットボット。生成AIを活用した英語論文執筆支援ツールの教育的効果および心理的な影響の検証についての研究。生成AIは、大学の学びをどう変えるのか？ 後半。 -->
