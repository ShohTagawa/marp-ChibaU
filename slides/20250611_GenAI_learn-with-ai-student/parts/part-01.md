<div class="page-title">2 使ってみる</div>

# ワーク：<span style="color:var(--accent-dark)">AIを使ってみる</span>

<div class="lead-note">AIの説明をより分かりやすくするために (実際に試してみて下さい)</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">① 箇条書きや表にしてほしい、と言ってみる</div>
<div class="st">② 回答の長さを指定する <span style="font-size:.85em;color:#555;">(AIは長くなりがちです)</span></div>
<div class="st">③ 小学生に教えるように、と付け加える</div>
<div class="st">④ わかりにくい言葉の定義を教えて、と言ってみる</div>
<div class="st">⑤ <b>分からないところを質問して、詳しく説明してもらう</b></div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px;">
学んだり、探求するなかで、とても使える道具になる<br>
<b>思考を一緒して、自分が分かっていないことを教えてくれる相手になる</b><br>
<span style="font-size:.85em;">(自分も1日30回以上は聞いている)</span>
</div>

<!-- 25-28 -->

---

<div class="page-title">1 AIって何？</div>

# AIの種類

<div class="goal-box" style="margin:10px 0; padding:12px 24px; font-size:24px;"><b>AIの定義 (例)</b>：人間の思考プロセスと同じような形で動作するプログラム ／ 人間が知的と感じる情報処理やそれを行う科学・技術
<div class="cite" style="margin-top:4px;">『R6 科学技術イノベーション白書 (第一章)』文部科学省 (2024)</div></div>

<div class="lead-note">AIはいろいろなところにすでにある</div>

<div style="display:flex; gap:20px; align-items:center;">
<img src="./src/fig22-img.png" alt="AIアプリケーションの例（製品推薦・画像分析・音声アシスタント・自動運転）" style="height:230px;">
<div style="flex:1;">
<div class="box-warn" style="font-size:21px; padding:10px 18px;">注：目的関数が、エンゲージや売上をあげるなど、「サービス提供側 (≠あなた)」にしか利益を与えない場合もある
<div class="cite" style="margin-top:3px; color:#8a4b00;">cf. 『マインドハッキング: あなたの感情を支配し行動を操るソーシャルメディア』</div></div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:22px;"><b>通常の生成AIは、安全性や透明性に、かなり注意して設計・研究されている。</b></div>

---

<div class="page-title">1 AIってなに？</div>

# 生成AIでできること

<img src="./src/fig15-can-do.png" alt="生成AIでできること：テキスト生成（文章の作成・要約／情報検索／翻訳／議論のパートナー）、画像・映像生成、音声生成、その他（3Dモデルの作成）" style="display:block; width:100%; max-width:1080px; margin:8px auto 0;">

<div class="cite pip-safe" style="text-align:right;">総務省 生成AIはじめの一歩〜生成AIの入門的な使い方と注意点〜</div>

---

<div class="page-title">1 AIって何？</div>

# ワーク：<span style="color:var(--accent-dark)">問題の解説をしてみよう</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div class="box-accent" style="flex:1; font-size:24px; line-height:1.7;">
私は砂漠の石油王で、たまたま一直線上に位置している四つの町に石油を届けることになっている。その四つの町を順番に回るのだが、次の町へ行く前に必ず石油タンクに戻らなければならない。移動距離をもっとも短くするにはどこにタンクを置けばいいだろうか？王族の友人がいて私か望めば無料でいくらでも道路を建設してくれるから、道路の心配はいらない。
</div>
<img src="./src/fig17-numberline.png" alt="一直線上に並ぶ4つの町A・B・C・Dと石油タンクの図" style="width:360px; align-self:center;">
</div>

---

<div class="page-title">第1講　イントロ</div>

# ワーク：<span style="color:var(--accent-dark)">問題の解説をしてみよう</span>

<img src="./src/fig17-numberline.png" alt="一直線上に並ぶ4つの町A・B・C・Dと石油タンク・総移動距離290kmの図" style="display:block; width:100%; max-width:1000px; margin:8px auto 6px;">

<div class="goal-box" style="margin:6px 0; padding:12px 28px; font-size:24px;">
- 端っこ2つの街の真ん中<br>
- 中央２つの街の真ん中　<span style="color:#E368B0;">★</span><br>
- 中央２つの街の上、または間ならどこでも　<span style="color:#2E9E5B;">（正解）</span>
</div>

<div class="box-warn pip-safe" style="margin-top:8px;"><b>AIが仮に答えられたとしても、AIの回答を見ても賢くはなれないので、考えてみよう</b></div>

---

<!-- _class: message -->

<div class="poll-badge" style="display:inline-flex; align-items:center; gap:10px; color:var(--accent-dark); font-weight:800; font-size:24px;">📋 ライブ投票（Slido）</div>

# AIを使わない場合、答えは？

<div class="lead-note" style="color:#555;">— その場で回答を集めます —</div>

---

<div class="page-title">1 AIって何？</div>

# <span style="color:var(--accent-dark)">答え合わせ?</span> <span style="font-size:30px;">(AIに聞いてみよう)</span>

<div class="lead-note">この[問題]の回答を教えて下さい。</div>

<div class="box-accent" style="font-size:24px; line-height:1.7;">
[私は砂漠の石油王で、たまたま一直線上に位置している四つの町に石油を届けることになっている。その四つの町を順番に回るのだが、次の町へ行く前に必ず石油タンクに戻らなければならない。移動距離をもっとも短くするにはどこにタンクを置けばいいだろうか？王族の友人がいて私か望めば無料でいくらでも道路を建設してくれるから、道路の心配はいらない。]
</div>

---

<!-- _class: message -->

<div class="poll-badge" style="display:inline-flex; align-items:center; gap:10px; color:var(--accent-dark); font-weight:800; font-size:24px;">📋 ライブ投票（Slido）</div>

# AIを使った場合、答えは？

<div class="lead-note" style="color:#555;">— その場で回答を集めます —</div>

---

<div class="page-title">1 AIって何？</div>

# <span style="color:var(--accent-dark)">答え合わせ</span>：問題の解説をしてもらおう

<div class="box-accent" style="font-size:22px; line-height:1.65;">
以下の問題があります。<b>自分は、真ん中２つの街の真ん中だと答えました。正解は、真ん中２つの街の上、または間なら、どこでも良い、になるんだそうです。</b>なぜ、そのようになるのか、高校生にもわかりやすく、教えてもらえませんか？<br>
[私は砂漠の石油王で、たまたま一直線上に位置している四つの町に石油を届けることになっている。その四つの町を順番に回るのだが、次の町へ行く前に必ず石油タンクに戻らなければならない。移動距離をもっとも短くするにはどこにタンクを置けばいいだろうか？王族の友人がいて私か望めば無料でいくらでも道路を建設してくれるから、道路の心配はいらない。]
</div>

<div class="cite pip-safe" style="margin-top:10px;">
ツール：https://claude.ai/public/artifacts/2bb7e14c-1df9-4c01-ae3e-45fe6edeb43b<br>
プロンプト：https://claude.ai/share/5c053617-2718-41f7-8319-0ed0ea2e2012
</div>

---

<!-- _class: message -->

<div class="poll-badge" style="display:inline-flex; align-items:center; gap:10px; color:var(--accent-dark); font-weight:800; font-size:24px;">📋 ライブ投票（Slido）</div>

# なんか、勉強に役立ちそう？

<div class="lead-note" style="color:#555;">— その場で回答を集めます —</div>

---

<div class="page-title">1 AIってなに</div>

# 学び方は変わる？

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1; background:#eee; border-radius:10px; padding:8px;">
<img src="./src/fig23-stairs-left.png" alt="積み上げて受動的に学ぶ：学校的学び方。どこかで頭打ちする" style="display:block; width:100%;">
</div>
<div style="flex:1; background:var(--accent-soft); border-radius:10px; padding:8px;">
<img src="./src/fig23-stairs-right.png" alt="最終到達点から探究的に学ぶ：職人的/芸術家的学び方？高みから中間地点を学ぶ" style="display:block; width:100%;">
</div>
</div>

<div style="font-size:26px; margin-top:10px;">「<span style="color:var(--accent); font-weight:800;">なぜ学ぶのか、どのように学ぶのか、何を学ぶのか</span>」の変質</div>

<div class="box-accent pip-safe" style="margin-top:8px;"><b>まずは、自分から、学び方を変えてみよう</b> ▶ できないかな、と思ったら<b>使ってみる</b></div>

---

<!-- _class: message -->

<div class="poll-badge" style="display:inline-flex; align-items:center; gap:10px; color:var(--accent-dark); font-weight:800; font-size:24px;">💬 ライブQ&A（Slido）</div>

# なんで、英語やプログラミング、数学はこれからも学ばないといけないと思う？

<div class="lead-note" style="color:#555;">— その場で回答を集めます —</div>
