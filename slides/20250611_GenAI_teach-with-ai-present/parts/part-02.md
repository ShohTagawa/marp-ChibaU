<div class="page-title">教員の仕事とAIの親和性</div>

# 教員の仕事と<span style="color:var(--accent-dark)">AIの親和性</span>

<div class="box-info" style="margin-top:6px;">AIにおしえてあげる ＝ AIも生徒と同じで、<b>正しい判断ができるためには正しい事前知識をプロンプトに入れてあげる</b>と良い</div>

<div class="box-accent" style="margin-top:14px;">AIを、何でも知っている先生としてとらえるの<b>ではなく</b>、<br><b>「読み書き・推論は賢く、常識もあり、疲れずないけど専門性はないので教えて上げるべき助手」</b>として捉えてみる</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st">「<b>与えた情報の変換</b>」や「<b>一般性のある回答</b>」には使える</div>
<div class="st">昨今は、AI自体もwebページを参照していることがある</div>
</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">良い質問をするには、「評価」をあらかじめ、イメージする</div>
<div class="st"><b>逆向き設計の授業設計のように、メタいところから</b>考える</div>
</div>

<div class="box-warn pip-safe" style="margin-top:14px; text-align:center;"><b>教えることに近い</b>ので、<b>学校の先生はAIを使いこなせる</b></div>

---

<!-- _class: divider -->

<div class="chapter-num">Slido</div>

# Audience Q&amp;A

<div style="margin-top:18px; font-size:26px; opacity:.92;">参加者からの質問に答える時間です</div>

---

<div class="page-title">そもそも、なんで？</div>

# そもそも、<span style="color:var(--accent-dark)">なんで？</span>

<div class="subhead"><span class="tag tag-soft">疑問点</span></div>

<div class="box-accent" style="margin-top:6px;">
<div style="margin:6px 0;"><b>AIの中身は、どうなっているのだろう？</b></div>
<div style="margin:6px 0;"><b>そもそもなんで、間違えるのか？</b></div>
<div style="margin:6px 0;"><b>間違えることはなくならないのか</b></div>
</div>

<div class="goal-box" style="margin-top:26px;">
<b>AIを使いこなすためには、メカニズムをある程度、知る必要がある</b>
</div>

<div class="box-warn pip-safe" style="margin-top:16px;">
→ AIをただ、使うだけでは、わからない！！！<br>
　実際、大学でも教員にAIのメカニズムを教えることが増加
</div>

---

<div class="page-title">ワーク：ハルシネーションの例</div>

# ワーク：<span style="color:var(--accent-dark)">ハルシネーションの例</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.3;">
<div class="box-info" style="font-size:21px;"><b>[問題]</b> aを実数の定数とする。xについての方程式<br>　　　　|x² − 2x − 3| = a(x − 2)<br>の、異なる実数解の個数を求めよ。<br>思考プロセスをステップバイステップで詳細に記述しながら、結論を導き出してください。</div>
<img src="./src/fig43-img.png" alt="AIで作成したツール" style="width:100%; margin-top:12px; border:1px solid #ddd;">
</div>

<div style="flex:1;">
<div class="subhead"><span class="tag tag-soft">AIで作成したツール</span></div>
<div class="cite" style="font-size:18px;">https://claude.ai/public/artifacts/<br>22fda9cd-0688-4887-a74b-53867fab0945</div>

<div class="subhead" style="margin-top:18px;"><span class="tag tag-soft">AIで回答した例</span></div>
<div class="box-warn" style="font-size:21px;">若干不自然だが(記述式では減点？)、合格</div>
<div class="cite" style="font-size:18px;">https://chatgpt.com/share/684a0bd1-b198-<br>8004-81ce-807f626ed962</div>
</div>

</div>

<div class="cite pip-safe" style="text-align:right;">出力例：6/12</div>

---

<div class="page-title">ワーク：ハルシネーションの例</div>

# ワーク：<span style="color:var(--accent-dark)">ハルシネーションの例</span>

<div class="box-accent" style="margin-top:6px;"><b>この問題を直接貼り付けて、AIに解かせてみて下さい。</b></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:14px;">

<div style="flex:1;">
<div class="subhead"><span class="tag tag-soft">誤った回答の例</span>　<span style="font-size:22px;">Gemini 2.5 flash</span></div>
<img src="./src/fig45-img.png" alt="誤った回答の例" style="width:100%; border:1px solid #ddd;">
<div class="cite">https://claude.ai/share/8e82983f-275b-427e-8ea3-aef898cd0bd7</div>
</div>

<div style="flex:.85; align-self:center;">
<div class="box-warn pip-safe"><b>なんで、こんなトンチンカンなことになるのか？</b><br><b>そのためには、機械学習を考えることになります…</b></div>
</div>

</div>

<div class="cite pip-safe" style="text-align:right;">出力例：6/12</div>

---

<div class="page-title">機会学習で、データの関係性をどう考えるか</div>

# 機会学習で、<span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<table style="width:560px; margin:40px auto 0; border-collapse:collapse; font-size:34px; text-align:center;">
<thead>
<tr style="background:#5BA838; color:#fff;"><th style="padding:14px 0;">x</th><th style="padding:14px 0;">f(x)</th></tr>
</thead>
<tbody>
<tr style="background:#D8E9CC;"><td style="padding:10px 0;">1</td><td>3</td></tr>
<tr style="background:#ECF4E4;"><td style="padding:10px 0;">2</td><td>5</td></tr>
<tr style="background:#D8E9CC;"><td style="padding:10px 0;">3</td><td>7</td></tr>
<tr style="background:#ECF4E4;"><td style="padding:10px 0;">4</td><td>?</td></tr>
</tbody>
</table>

<!--
ちょっと問題をだしてみましょう。正解も何もないので、頭の体操としてきいて下さい。 / f(1) = 3、f(2)= 5、f(3)=7と数が並んでいた時、f(4)はなんだと思いますか？
-->

---

<div class="page-title">機会学習で、データの関係性をどう考えるか</div>

# 機会学習で、<span style="color:var(--accent-dark)">データの関係性をどう考えるか</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">

<table style="width:230px; border-collapse:collapse; font-size:24px; text-align:center;">
<thead>
<tr style="background:#5BA838; color:#fff;"><th style="padding:7px 0;">x</th><th style="padding:7px 0;">f(x)</th></tr>
</thead>
<tbody>
<tr style="background:#D8E9CC;"><td style="padding:5px 0;">1</td><td>3</td></tr>
<tr style="background:#ECF4E4;"><td>2</td><td>5</td></tr>
<tr style="background:#D8E9CC;"><td>3</td><td>7</td></tr>
<tr style="background:#ECF4E4;"><td>4</td><td>?</td></tr>
</tbody>
</table>

<div style="flex:1; text-align:center;">
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">変換する「函」</div>
<svg viewBox="0 0 220 90" style="width:200px;"><rect x="40" y="20" width="140" height="50" rx="8" fill="#fff" stroke="#333" stroke-width="2.5"/><text x="110" y="42" font-size="15" text-anchor="middle" fill="#111">ブラックボックス</text><text x="110" y="60" font-size="12" text-anchor="middle" fill="#555">確率・統計的に処理</text></svg>
<div class="cite" style="text-align:center;">正解が出てくるとは限らない</div>
<div class="box-warn" style="font-size:18px; margin-top:6px; text-align:left;"><b>ブラックボックス内を理解する手法は開発中</b><br>e.g. Anthropic (2025) AI顕微鏡</div>
</div>
</div>

<div style="display:flex; gap:18px; margin-top:12px;">
<div style="flex:1;">
<div class="subhead" style="font-size:22px;"><span class="tag tag-soft">ルールベースの世界観</span></div>
<div class="cite" style="font-size:18px; color:#333;">(設計者が教えておく)</div>
<div class="box-info" style="font-size:20px;">解析的に解くよ／等差数列っぽい？ <b>→ Yes</b><br>f(x) = 2x+1？　ならば9と予想</div>
</div>
<div style="flex:1;">
<div class="subhead" style="font-size:22px;"><span class="tag tag-soft">機械学習の世界観</span></div>
<div class="cite" style="font-size:18px; color:#333;">(もっとたくさん学習！)</div>
<div class="box-info" style="font-size:20px;">入力されたデータからパターンをコンピュータが探索・発見<br><b>f(x)自体は気にしない</b>／9とか11？</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; text-align:center; font-size:22px;"><b>データの関係性の捉え方が根本的に違う</b></div>

<!--
ルールベースの世界に生きるAIは、きっと僕から、解析的な解き方を教えられているんですね。たとえば、この場合には、一次式を試してみて、f(x) = 2*x+1っていう風なので、x=4で9だぞって。 / 結構高校までの数学の授業って、こういう考え方しませんか。 / でも、機械学習的な世界では、このf(x)がどうなっているかはどうでも良いのですね。xとf(x)の関係性を学習し、次を予測するだけ。 / データの関係性について、f(x)自体がルールを明示的でない形でも構わないが、コンピューターが自ら学習した結果を予想できる、この考え方がミソなんですね。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<img src="./src/fig46-img.png" alt="ニューラルネットワーク" style="display:block; width:760px; margin:8px auto 0;">

<div style="display:flex; gap:40px; margin-top:14px;">

<div style="flex:1;">
<div style="font-size:24px; font-weight:800;">学習</div>
<svg viewBox="0 0 320 130" style="width:100%;"><text x="22" y="60" font-size="20" font-weight="800" fill="#111">入力</text><rect x="68" y="28" width="150" height="74" rx="6" fill="#fff" stroke="#333" stroke-width="2.5"/><text x="143" y="58" font-size="20" font-weight="800" text-anchor="middle" fill="#111">パラメーター</text><text x="143" y="80" font-size="20" font-weight="800" text-anchor="middle" fill="#111">の函</text><text x="143" y="98" font-size="13" text-anchor="middle" fill="#555">数字の羅列</text><text x="262" y="50" font-size="20" font-weight="800" fill="#111">出力</text><text x="262" y="98" font-size="20" font-weight="800" fill="#111">評価</text><path d="M250 60 q24 18 0 36" fill="none" stroke="#888" stroke-width="9" marker-end="url(#a32)"/><defs><marker id="a32" markerWidth="7" markerHeight="7" refX="3" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#888"/></marker></defs><text x="234" y="86" font-size="12" fill="var(--accent)">更新</text></svg>
</div>

<div style="flex:1;">
<div style="font-size:24px; font-weight:800;">利用</div>
<svg viewBox="0 0 300 130" style="width:100%;"><text x="14" y="68" font-size="20" font-weight="800" fill="#111">入力</text><rect x="60" y="28" width="150" height="74" rx="6" fill="#fff" stroke="#333" stroke-width="2.5"/><text x="135" y="58" font-size="20" font-weight="800" text-anchor="middle" fill="#111">パラメーター</text><text x="135" y="80" font-size="20" font-weight="800" text-anchor="middle" fill="#111">の函</text><text x="135" y="98" font-size="13" text-anchor="middle" fill="#555">数字の羅列</text><text x="232" y="68" font-size="20" font-weight="800" fill="#111">出力</text></svg>
</div>

</div>

<div class="cite pip-safe">『R1 総務省 情報通信白書』総務省 (2019)</div>

<!--
このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 機械的に膨大なパラメータから意味を生成する方法がいまのAIの背景にあるのです。
-->

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1.15;">
<img src="./src/fig47-img.png" alt="ニューラルネットワーク" style="width:100%;">
<div style="font-size:20px; margin-top:6px;">- 人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク</div>
<div style="font-size:20px;">- 中間層（隠れ層）が複数の層となっているものを用いるものが深層学習</div>
<div class="box-info" style="font-size:19px; margin-top:8px;"><b>2012年</b>、Googleの キャットペーパー (「猫」を教えていなかったのに、写真から猫の特徴を抽出) ヒントンらによる画像認識のブレークスルー<br><b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)</div>
</div>

<div style="flex:.9;">
<div class="callout-yellow" style="font-size:22px; font-weight:800; text-align:center;">ノーベル賞 2024年 <span style="font-weight:400;">(PD)</span></div>
<div class="box-accent" style="font-size:19px; margin-top:8px;"><b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明</div>
<div style="font-size:19px; margin:6px 0 0 6px;"><b>ジョン・ホップフィールド</b>　物理学者・分子生物学者<br><b>ジェフリー・ヒントン</b>　生理学・哲学→実験心理学→コンピューター科学</div>
<div class="box-accent" style="font-size:19px; margin-top:8px;"><b>化学 (一部)：</b>タンパク質プログラムの開発</div>
<div style="font-size:19px; margin:6px 0 0 6px;"><b>デミス・ハサビス</b>　人工知能研究者、神経科学者<br><b>ジョン・M・ジャンパー</b>　固体物理学→理論化学→計算生物学</div>
</div>

</div>

<div class="box-warn pip-safe" style="font-size:19px; margin-top:8px;"><b>※高校生/高校教諭向けには、東大松尾研のGCIなど、無料でおすすめ</b></div>

<div class="cite">『R1 総務省 情報通信白書』総務省 (2019)</div>

---

<div class="page-title">箱としての、ディープラーニング (深層学習)</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div class="goal-box" style="margin-top:6px; text-align:center; padding:10px 24px;">
<div style="font-size:23px; color:#555;">言語型の大規模言語モデル (生成AIの中身) の本質</div>
<div style="font-size:34px; font-weight:800; color:var(--accent-dark); margin:6px 0;">ネクストワードプレディクション</div>
<div style="border:2px solid var(--accent); border-radius:30px; padding:8px 18px; display:inline-block; font-size:24px;">日本の首都__ → 日本の首都は__ → 日本の首都は東京__</div>
<div style="font-size:22px; font-weight:700; margin-top:8px;">これまでのコンテキストから、次の言葉(トークン)の確率を予想する問題</div>
</div>

<div style="display:flex; gap:30px; margin-top:14px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-size:24px; font-weight:800;">学習</div>
<svg viewBox="0 0 340 130" style="width:100%;"><text x="14" y="58" font-size="18" font-weight="800" fill="#111">入力</text><text x="14" y="80" font-size="18" font-weight="800" fill="#111">文字</text><rect x="72" y="28" width="150" height="74" rx="6" fill="#fff" stroke="#333" stroke-width="2.5"/><text x="147" y="58" font-size="20" font-weight="800" text-anchor="middle" fill="#111">パラメーター</text><text x="147" y="80" font-size="20" font-weight="800" text-anchor="middle" fill="#111">の函</text><text x="147" y="98" font-size="13" text-anchor="middle" fill="#555">数字の羅列</text><text x="266" y="50" font-size="18" font-weight="800" fill="#111">出力</text><text x="266" y="98" font-size="18" font-weight="800" fill="#111">評価</text><path d="M252 60 q24 18 0 36" fill="none" stroke="#888" stroke-width="9" marker-end="url(#a34)"/><defs><marker id="a34" markerWidth="7" markerHeight="7" refX="3" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 z" fill="#888"/></marker></defs><text x="236" y="86" font-size="12" fill="var(--accent)">更新</text></svg>
</div>

<div style="flex:1;" class="pip-safe">
<div class="box-info" style="font-size:21px;">GPT 4の場合、アメリカ議会図書館の<b>全蔵書の約22倍</b>に相当?<br><span style="font-size:18px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</span></div>
</div>

</div>

<!--
生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。 / 言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 / さっき言ってた函ってのはこれ全部にあたります。
-->

---

<!-- _class: divider -->

<div class="chapter-num">Slido</div>

# 春は<span style="color:#fff;">___</span>

<div style="margin-top:18px; font-size:26px; opacity:.92;">次の言葉を予測してみましょう</div>

---

<!-- _class: divider -->

<div class="chapter-num">Slido</div>

# 地球に存在する水の総量はおおよそ海の<span style="color:#fff;">_</span>

<div style="margin-top:18px; font-size:26px; opacity:.92;">次の言葉を予測してみましょう</div>
