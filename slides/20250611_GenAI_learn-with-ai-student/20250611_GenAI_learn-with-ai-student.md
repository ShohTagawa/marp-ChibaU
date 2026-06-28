---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIで学ぶ</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 20%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AIで学ぶ</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig01-img.png" alt="講師似顔絵"></div>
<div class="title-meta">
<div class="title-event">2025/06/11 宮崎東高校講演会</div>
<div class="title-event">講師：田川 翔</div>
<div class="title-date">千葉大学 国際未来教育基幹 助教</div>
</div>
</div>

<!--
0-1
-->

---

<div class="page-title">自己紹介</div>

# <span style="color:var(--accent-dark)">自己紹介</span>

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-accent" style="margin-top:6px;">
仕事：<b>大学教育の企画</b>／<b>学生と教員を支援</b>
</div>

<div style="font-size:24px; line-height:1.6; margin-top:14px;">
専門：<b>地球の起源、AI</b><br>
地球惑星科学　博士(理学) 2020年
</div>

<div class="box-info" style="margin-top:14px;">
海の起源の仮説検証<br>
<span style="font-size:21px;">Tagawa et al. (2021) <i>Nat. Com.</i></span>
</div>

<div style="font-size:23px; margin-top:14px;"><b>翻訳：</b>大学の教え方の授業　<b>来年、発売予定！</b></div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<img src="./src/fig03-img.png" alt="海の起源・マグマオーシャン" style="width:100%; border:1px solid #ddd; border-radius:8px;">
<div style="display:flex; gap:10px;">
<img src="./src/fig06-img.png" alt="ケイ酸塩メルトの実験" style="width:50%; border:1px solid #ddd; border-radius:8px;">
<img src="./src/fig09-img.png" alt="大学の教え方の授業" style="width:50%; border:1px solid #ddd; border-radius:8px;">
</div>
</div>
</div>

<!--
1-3 / 始める前に、簡単に僕の自己紹介をしときましょう。名前は、田川翔といいます。現在は千葉大学の教育をより良くするために、教育企画の仕事を行っている教員です。最近の研究テーマは大学教育と生成AIの関係なので、ここに立っています。 / これ似顔絵ですね。ポスターを真似て、チャットGPTにかいてもらいました。似てますかね？(会場の反応を見る) / さて、そんな私ですが、もともと研究テーマは地球の起源の解明なんですね。この惑星は、どのようにできたのか。そして、海の量はなぜきまったのか。 / そんなテーマで、博士課程まで実験していました。これですね(岩石みせる)、皆様の足元深い所にあるかんらん岩という岩石なんですけどもこの宝石みたいな岩石が地球のマントルの成分だと考えられています。 / で、こっちの方が隕鉄ですね。特徴的な結晶構造があるので、宇宙から降ってきたってわかるんですけど、この2つの化学反応を、実際に地球ができた温度、圧力で実験していました。 / それは、超高圧・高温の世界で、手のひらに東京タワー10本分ぐらいをのっけたような圧力を作り出し、そこにレーザーをあててドロドロに融かすわけです。
-->

---

<div class="page-title">本日使用するツール</div>

# 授業・セミナー <span style="color:var(--accent-dark)">インタラクティブ化ツール</span>

<div class="subhead" style="font-weight:700;">✓匿名 / もしよければ、ぜひご参加下さい</div>

<div style="display:flex; gap:40px; align-items:center; margin-top:10px;">
<div style="flex:1; text-align:center;">
<div style="font-size:30px; color:#666;">Join at</div>
<div style="font-size:58px; font-weight:800; color:#1a1a1a; line-height:1.1;">slido.com</div>
<div style="font-size:52px; font-weight:800; color:#1a1a1a;">#8912 651</div>
</div>
<img src="./src/fig11-img.png" alt="slido参加用QRコード" style="height:300px; object-fit:contain;">
</div>

<div class="box-info pip-safe" style="margin-top:16px;">
<b>PCから参加の方へ</b><br>
slidoのwebページを開き、アクセスコード(7桁)を入力して下さい
</div>

<!--
3-6
-->

---

<div class="page-title">今日の目的</div>

# <span style="color:var(--accent-dark)">今日の目的</span>

<div style="font-size:30px; line-height:1.5; margin-top:18px;">
<b>第1講</b> AIって何か知ろう
</div>

<div style="font-size:30px; line-height:1.5; margin-top:22px;">
<b>第2講</b> AIを使う上での注意点とその背景を知ろう
</div>

<div class="box-accent" style="margin:14px 0 14px 36px; font-size:28px; font-weight:800; text-align:center;">
コンペ：AIを探求、読書、普段の学びに活かすには
</div>

<div style="font-size:30px; line-height:1.5;">
<b>第3講</b> AIとの付き合い方を考えよう
</div>

<div class="takeaway" style="margin-top:24px;">今後、AIとどう向き合うか、自分の考えを持てれば成功です</div>

<!--
6-7
-->

---

<div class="page-title">アンケート (slido)</div>

# <span style="color:var(--accent-dark)">AIを使ったことはある？</span>

<div class="box-accent" style="margin-top:40px; text-align:center; font-size:30px;">
スマホ・PCから <b>slido</b> でご回答ください　<span style="white-space:nowrap;">(#8912 651)</span>
</div>

<div class="lead-note pip-safe" style="margin-top:24px; color:#666;">※ slido のライブ投票画面を表示</div>

<!--
7-8
-->

---

<div class="page-title">アンケート (slido)</div>

# <span style="color:var(--accent-dark)">どんな使い方をする？</span>

<div class="box-accent" style="margin-top:40px; text-align:center; font-size:30px;">
スマホ・PCから <b>slido</b> でご回答ください　<span style="white-space:nowrap;">(#8912 651)</span>
</div>

<div class="lead-note pip-safe" style="margin-top:24px; color:#666;">※ slido のワードクラウド画面を表示</div>

<!--
8-11
-->

---

<div class="page-title">アンケート (slido)</div>

# <span style="color:var(--accent-dark)">AIってどう思う？</span>

<div class="box-accent" style="margin-top:40px; text-align:center; font-size:30px;">
スマホ・PCから <b>slido</b> でご回答ください　<span style="white-space:nowrap;">(#8912 651)</span>
</div>

<div class="lead-note pip-safe" style="margin-top:24px; color:#666;">※ slido のワードクラウド画面を表示</div>

<!--
11-13
-->

---

<div class="page-title">今日の目的</div>

# <span style="color:var(--accent-dark)">今日の目的</span>

<div style="font-size:30px; line-height:1.5; margin-top:18px;">
<b style="color:var(--accent);">第1講 AIって何か知ろう</b>
</div>

<div style="font-size:30px; line-height:1.5; margin-top:22px; color:#888;">
<b>第2講</b> AIを使う上での注意点を知ろう
</div>

<div class="box-accent" style="margin:14px 0 14px 36px; font-size:28px; font-weight:800; text-align:center; color:#888; border-color:#bbb; background:#f1e3ef;">
コンペ：AIを探求、読書、普段の学びに活かすには
</div>

<div style="font-size:30px; line-height:1.5; color:#888;">
<b>第3講</b> AIとの付き合い方を考えよう
</div>

<div class="takeaway" style="margin-top:24px; color:#666;">今後、AIとどう向き合うか、自分の考えを持てれば成功です</div>

<!--
13-15
-->

---

<div class="page-title" style="left:18%; width:auto; padding-right:24px;">AIを使ってみる</div>

# Step 1) <span style="color:var(--accent-dark)">Gemini</span> か、マイクロソフト<span style="color:var(--accent-dark)">copilot</span>を開いて下さい。

<div style="margin:14px 0 0 36px;">
<div style="color:var(--accent); font-size:25px; font-weight:700;">注意：ChatGPTは保護者の許可がいります</div>
<div style="font-size:24px; margin-top:6px;">※ アカウントが必要な際は、作っても大丈夫です</div>
</div>

<div class="box-accent" style="margin:48px auto 0; max-width:680px; text-align:center; font-size:32px; font-weight:800;">
皆さんがあけるまで、3分、お待ちします
</div>

<!--
16-18
-->

---

<div class="page-title" style="left:18%; width:auto; padding-right:24px;">ワーク：AIを使ってみる</div>

# Step 2) <span style="color:var(--accent-dark)">以下のプロンプトをそれぞれ流してみて下さい。</span>

<div class="stepbox" style="margin-top:10px;">
<div class="st">生成AIとはなにか、説明して下さい。</div>
<div class="st"><span style="color:#666; font-size:21px;">(わかりにくい場合)</span>　わかりにくいので、高校生にも分かるよう、説明して下さい</div>
<div class="st"><span style="color:#666; font-size:21px;">(わかりにくい場合)</span>　わかりにくいので、3文で説明して下さい</div>
<div class="st"><span style="color:#666; font-size:21px;">(遊んでみる場合)</span>　関西弁や宮崎弁で説明して下さい</div>
</div>

## Step 3) <span style="color:var(--accent-dark)">意図的に間違わせてみましょう (例)</span>

<div class="box-warn pip-safe" style="margin-top:8px;">
宮崎東高の校長先生は誰ですか？<br>
5 cmの綿に、10 cmのレンがを乗せると、高さ何cm?
</div>

<div class="lead-note pip-safe" style="font-size:21px; color:#666; margin-top:8px;">※余裕がある場合、「自信なかったら答えないように」頼んだ質問もやってみて下さい。</div>

<!--
18-21
-->

---

<div class="page-title" style="left:18%; width:auto; padding-right:24px;">ワーク：AIを使ってみる</div>

# Step 4) <span style="color:var(--accent-dark)">YouTubeまたはPDF</span>を開き、動画の書き起こしを開き、コピー、AIに<u>日本語で</u>要約させて下さい。

<div style="display:flex; gap:28px; align-items:center; margin-top:12px;">
<div style="flex:1.5;">
<div style="font-size:24px; margin-bottom:6px;">例：</div>
<img src="./src/fig11-yt-transcript.png" alt="動画の書き起こし例" style="width:100%; border:1px solid #ddd; border-radius:8px;">
</div>
<div style="flex:0.9; font-size:30px; font-weight:800; color:var(--accent-dark);">
→AIにコピペ
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px; font-size:24px;">
“以下は、動画を添付したものです。その内容を要約して下さい”
</div>

<!--
21-13
-->

---

<div class="page-title">アンケート (slido)</div>

# <span style="color:var(--accent-dark)">AIの説明はわかりやすくなりましたか？</span>

<div class="box-accent" style="margin-top:40px; text-align:center; font-size:30px;">
スマホ・PCから <b>slido</b> でご回答ください　<span style="white-space:nowrap;">(#8912 651)</span>
</div>

<div class="lead-note pip-safe" style="margin-top:24px; color:#666;">※ slido のライブ投票画面を表示</div>

<!--
23-25
-->

---

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

---

<div class="page-title">第1講 イントロ</div>

# <span style="color:var(--accent-dark)">どんなときに使う</span>と、勉強に役立ちそう？

<div style="display:flex; align-items:center; gap:40px; margin-top:48px;">
<div style="font-size:120px; line-height:1; color:var(--accent);">💬</div>
<div style="font-size:40px; font-weight:800; line-height:1.4;">どんなときに使うと、<br>勉強に役立ちそう？</div>
</div>

<div class="box-info pip-safe" style="margin-top:48px;">スマホ・PCから <b>Slido</b> にアクセスして、思いついた場面を投稿してください</div>

<!--
- ここでSlido。「どんなときに使うと勉強に役立ちそうか」を、思いついた場面を出し合ってもらう。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# <span style="color:var(--accent-dark)">生成AI活用</span>の注意点　<span class="tag tag-soft">2 注意点</span>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:14px;">

<div class="box-accent" style="width:360px; text-align:center; font-size:30px; font-weight:800; padding:36px 20px;">生成AI活用にあたって<br>注意すべきポイントは？</div>

<div style="flex:1; font-size:30px; line-height:1.2; padding-top:6px;">
<div style="background:var(--accent); color:#fff; font-weight:800; border-radius:8px; padding:8px 18px; margin:6px 0;">情報の正確性</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">情報流出</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">知的財産権の侵害</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">活用者としてのモラル</div>
</div>

</div>

<div style="margin-top:22px; font-size:23px; line-height:1.5;">
<b>総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</b><br>
<span style="color:var(--tag-blue);">https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</span><br>
<span style="color:var(--accent); font-weight:800;">コンパクトに纏まっているので、ぜひ、ご活用ください</span>
</div>

<img src="./src/fig30b-robot.png" alt="スマホとロボット" style="position:absolute; right:40px; bottom:140px; height:200px;">

<!--
- ここからは、生成AIを使う上で注意すべき4つのポイントを学習します。
- まずは、情報の正確性に関することです。
-->

---

<div class="page-title">偽・誤情報に騙されない・拡散しないため、3つのポイントを常に意識する</div>

# <span style="color:var(--accent-dark)">3つのポイント</span>を常に意識　<span class="tag tag-soft">2 注意点</span>

<div class="cardrow" style="margin-top:18px;">

<div class="pcard">
<div class="pc-h">ポイント１</div>
<p>人は信じたいものを選ぶ（認知バイアス）ので、無意識のうちに合理的ではない行動、偏った判断をすることがあるという<b>意識をもつ</b></p>
</div>

<div class="pcard">
<div class="pc-h">ポイント２</div>
<p><b>チェックリスト</b>を用いて真偽を判断する</p>
</div>

<div class="pcard">
<div class="pc-h">ポイント３</div>
<p>チェックリストを用いて判断しても騙されるので、<b>安易に拡散しない</b> / 拡散したいときは ひと呼吸おく</p>
</div>

</div>

<div class="cite pip-safe">Source: 総務省「インターネットとの向き合い方～ニセ・誤情報に騙されないために～」</div>

<!--
- 生成AIの技術は急速に進展しており、人間が情報の真偽を判断することは難しくなることが予想されます。
- 自分が被害者、加害者にならないため、3つのポイントを常に意識しましょう。
- 1つ目は、人は信じたいものを選ぶので、無意識のうちに合理的ではない行動、偏った判断をすることがあるという意識をもつこと、
- 2つ目は、チェックリストを用いて真偽を判断すること、
- 3つ目は、チェックリストを用いて判断しても騙されるので、安易に拡散しない、また拡散したいときはひと呼吸おくことです。
- これから、それぞれのポイントについてご説明します。
-->

---

<div class="page-title">チェックシートを用いて判断する</div>

# <span style="color:var(--accent-dark)">チェックシート</span>を用いて判断する　<span class="tag tag-soft">2 注意点</span>

<div class="cardrow" style="margin-top:14px;">

<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">基 本</div>
<ul style="font-size:24px;">
<li>☑ <b>情報源</b>はある？</li>
<li>☑ その分野の<b>専門家</b>？</li>
<li>☑ <b>他では</b>どう言われている？</li>
<li>☑ その画像は<b>本物</b>？</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h" style="background:#222;">応 用</div>
<ul style="font-size:24px;">
<li>☑ 「<b>知り合いだから</b>」 という理由だけで信じていないか？</li>
<li>☑ <b>表やグラフ</b>も疑ってみた？</li>
<li>☑ その情報に<b>動機</b>はある？</li>
<li>☑ <b>ファクトチェック</b>結果は？ <span style="font-size:16px;">※1</span></li>
</ul>
</div>

</div>

<div class="cite pip-safe">Source: 総務省「インターネットとの向き合い方～ニセ・誤情報に騙されないために～」</div>

<!--
- 2つ目に意識すべきポイントは、チェックリストを用いて真偽を判断することです。
- 情報源は信用できるか、他のメディアではどういわれているか、その画像/表/グラフは本物か、ファクトチェックの結果はどうかなど、1つ1つ確認することが大切です。
-->

---

<div class="page-title">生成AIにより偽・誤情報が生成される可能性</div>

# <span style="color:var(--accent-dark)">偽・誤情報</span>が生成される可能性　<span class="tag tag-soft">事例</span>

<div style="display:flex; gap:24px; align-items:stretch; margin-top:14px;">

<div class="pcard" style="flex:1.1;">
<div class="pc-h">偽・誤情報の事例 ❶</div>
<p style="font-size:21px;">ある生成AIサービスに以下の指示を入力すると、問題のあるリストが生成された。</p>
<div class="box-accent" style="font-size:20px; padding:8px 14px;">西日本で最も高い山のTOP10を教えてください</div>
<p style="font-size:21px; margin-top:8px;"><b>生成されたリストの課題</b><br>・実在しない山の名前が含まれる<br>・標高が不正確</p>
</div>

<div class="pcard" style="flex:1;">
<div class="pc-h">偽・誤情報の事例 ❷</div>
<p style="font-size:21px;">2022年9月、台風15号による水害被害が発生している静岡県の画像がSNS上で拡散。その後投稿者は、画像生成AIで作成した偽画像だったと公表。</p>
<img src="./src/fig29b-flood.png" alt="拡散した偽の水害画像" style="width:100%; border-radius:8px; margin-top:6px;">
</div>

</div>

<div class="cite pip-safe">Source: 生成AIサービスを用いて回答を作成、NHK「SNSで拡散 “AI生成の偽の災害画像” ファクトチェックはどうする」</div>

<!--
- 生成AIによりもっともらしい偽・誤情報が生成される可能性に注意が必要です。
- 例えば、生成AIサービスに指示を入力すると、実在しない内容が含まれていたり、数字が不正確だったりすることがあります。
- また、水害被害の画像がSNSで拡散されたところ、実は画像生成AIで作成した偽画像だったという事例があります。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# <span style="color:var(--accent-dark)">生成AI活用</span>の注意点　<span class="tag tag-soft">2 注意点</span>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:14px;">

<div class="box-accent" style="width:360px; text-align:center; font-size:30px; font-weight:800; padding:36px 20px;">生成AI活用にあたって<br>注意すべきポイントは？</div>

<div style="flex:1; font-size:30px; line-height:1.2; padding-top:6px;">
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">情報の正確性</div>
<div style="background:var(--accent); color:#fff; font-weight:800; border-radius:8px; padding:8px 18px; margin:6px 0;">情報流出</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">知的財産権の侵害</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">活用者としてのモラル</div>
</div>

</div>

<div style="margin-top:22px; font-size:23px; line-height:1.5;">
<b>総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～<br>から考える</b><br>
<span style="color:var(--tag-blue);">https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</span>
</div>

<img src="./src/fig30b-robot.png" alt="スマホとロボット" style="position:absolute; right:40px; bottom:140px; height:200px;">

<!--
- 次に、情報流出に関することについて学習します。
-->

---

<div class="page-title">情報流出を防ぐため、3つの行動を心がける</div>

# <span style="color:var(--accent-dark)">3つの行動</span>を心がける　<span class="tag tag-soft">2 注意点</span>

<div class="cardrow" style="margin-top:18px;">

<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動１</div>
<div style="font-size:46px; text-align:center; margin:8px 0;">🔍</div>
<p>生成AIサービスの<b>規約を確認</b>（データの利用目的や範囲等）また利用規約の変更時には<b>変更箇所をチェック</b></p>
</div>

<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動２</div>
<div style="font-size:46px; text-align:center; margin:8px 0;">🔒</div>
<p>個人情報や機密情報の<br>入力は<b>必要最小限</b></p>
</div>

<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動３</div>
<div style="font-size:46px; text-align:center; margin:8px 0;">🚫</div>
<p>生成AIに入力したデータを<b>学習に使わせないように設定</b>（オプトアウト設定）<span style="font-size:16px;">※1</span></p>
</div>

</div>

<!--
- 情報流出を防ぐため、3つの行動を心がけることが大切です。
- まずは、生成AIサービスの規約で、データの利用目的や範囲等を確認し、利用規約の変更時には変更箇所をチェックするようにしましょう。
- その上で、個人情報や機密情報の入力を必要最小限にするよう注意しましょう。
- また、利用する生成AIサービスで設定が可能であれば、入力したデータを学習に使わせないように設定しましょう。
-->

---

<div class="page-title">教育として必要なこと</div>

# <span style="color:var(--accent-dark)">教育として</span>必要なこと　<span class="tag tag-soft">2 注意点</span>

<div class="box-accent" style="margin-top:8px; font-weight:800;">Terms of use (利用規約) を読む / AIに読み込ませる</div>

<table style="width:100%; border-collapse:collapse; margin-top:14px; font-size:23px;">
<tr>
<th style="width:160px; background:var(--accent-soft); border:1px solid #ccc; padding:8px 12px; text-align:center;">サービス</th>
<th style="background:var(--accent-soft); border:1px solid #ccc; padding:8px 12px; text-align:left;">年齢・利用条件</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; text-align:center; font-weight:800;">ChatGPT</td>
<td style="border:1px solid #ccc; padding:8px 12px;">13才以上は可だが、<b>18才未満は保護者同意必須</b></td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; text-align:center; font-weight:800;">Gemini</td>
<td style="border:1px solid #ccc; padding:8px 12px;">13才以上可　<b>但し学校版は管理者の許可必須</b><br><span style="font-size:19px;">※ APIの利用/Studio/gem/NotebookLMの利用は不可</span></td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; text-align:center; font-weight:800;">Claude</td>
<td style="border:1px solid #ccc; padding:8px 12px;">18才以上可</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 12px; text-align:center; font-weight:800;">Copilot</td>
<td style="border:1px solid #ccc; padding:8px 12px;">13才以上可<br><span style="font-size:19px;">(MS365 Copilotは 2025夏に13才以上に変更)</span></td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:20px;">※K-12向けAIは「みんなのコード」や「Khanmigo (米国向け)」など限られる<br>(安全性を考え、順次拡大中ではある)</div>

---

<div class="page-title">ある海外企業では、生成AIに機密情報を入力し情報が流出</div>

# <span style="color:var(--accent-dark)">機密情報</span>を入力し情報が流出　<span class="tag tag-soft">事例</span>

<div class="lead-note">2023年3月、海外の電子機器メーカーで生成AIの使用による、<span style="color:var(--accent); font-weight:800;">社内情報流出</span>が立て続けに発生</div>

<div class="cardrow" style="margin-top:14px;">

<div class="pcard">
<div class="pc-h">情報流出の内容 ❶</div>
<p><b>社内機密のソースコード</b>を生成AIに入力し、修正を依頼 (2件)</p>
<div class="flowrow" style="justify-content:center; gap:14px; margin:8px 0 0;">
<div style="font-size:40px;">💻</div>
<div class="farrow">➡</div>
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">生成AI</div>
</div>
</div>

<div class="pcard">
<div class="pc-h">情報流出の内容 ❷</div>
<p><b>社内会議の録音データ</b>を音声認識アプリで文章に変換して生成AIに入力し、議事録を作成 (1件)</p>
<div class="flowrow" style="justify-content:center; gap:14px; margin:8px 0 0;">
<div style="font-size:40px;">🎙</div>
<div class="farrow">➡</div>
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">生成AI</div>
</div>
</div>

</div>

<!--
- ある海外企業では、社員が生成AIの仕組みへの理解が不十分であったため、生成AIに機密情報を入力してしまい、情報が流出するトラブルが発生しました。
- ビジネスで利用する場合は、自社の機密情報の取扱いについて十分留意する必要があります。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# <span style="color:var(--accent-dark)">生成AI活用</span>の注意点　<span class="tag tag-soft">2 注意点</span>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:14px;">

<div class="box-accent" style="width:360px; text-align:center; font-size:30px; font-weight:800; padding:36px 20px;">生成AI活用にあたって<br>注意すべきポイントは？</div>

<div style="flex:1; font-size:30px; line-height:1.2; padding-top:6px;">
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">情報の正確性</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">情報流出</div>
<div style="background:var(--accent); color:#fff; font-weight:800; border-radius:8px; padding:8px 18px; margin:6px 0;">知的財産権の侵害</div>
<div style="padding:8px 18px; margin:6px 0; font-weight:700;">活用者としてのモラル</div>
</div>

</div>

<div style="margin-top:22px; font-size:23px; line-height:1.5;">
<b>総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～<br>から考える</b><br>
<span style="color:var(--tag-blue);">https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</span>
</div>

<img src="./src/fig30b-robot.png" alt="スマホとロボット" style="position:absolute; right:40px; bottom:140px; height:200px;">

<!--
- 次に、知的財産権の侵害に関することについて学習します。
-->

---

<div class="page-title">配慮すべき知的財産権</div>

# <span style="color:var(--accent-dark)">配慮</span>すべき知的財産権　<span class="tag tag-soft">2 注意点</span>

<div class="cardrow" style="margin-top:14px;">

<div style="flex:1;">
<div class="pcard">
<div class="pc-h" style="background:#222;">利用例１</div>
<p>既存の<b style="color:var(--accent-dark);">著作物</b>と類似している生成物を、アップロードして公表/複製物を販売</p>
</div>
<div style="text-align:center; font-size:30px; color:#222; margin:4px 0;">⬇</div>
<div style="background:var(--accent); color:#fff; font-weight:800; text-align:center; border-radius:10px; padding:10px; font-size:26px;">⚠ 著作権</div>
</div>

<div style="flex:1;">
<div class="pcard">
<div class="pc-h" style="background:#222;">利用例２</div>
<p>商標や意匠として登録されている<b style="color:var(--accent-dark);">ロゴ・デザイン等</b>と同一または類似している生成物を商用利用</p>
</div>
<div style="text-align:center; font-size:30px; color:#222; margin:4px 0;">⬇</div>
<div style="background:var(--accent); color:#fff; font-weight:800; text-align:center; border-radius:10px; padding:10px; font-size:26px;">⚠ 商標権・意匠権</div>
</div>

<div style="flex:1;">
<div class="pcard">
<div class="pc-h" style="background:#222;">利用例３</div>
<p>生成AIを利用して生成された<b style="color:var(--accent-dark);">著名人の氏名、肖像等</b>を商用利用</p>
</div>
<div style="text-align:center; font-size:30px; color:#222; margin:4px 0;">⬇</div>
<div style="background:var(--accent); color:#fff; font-weight:800; text-align:center; border-radius:10px; padding:10px; font-size:26px;">⚠ パブリシティ権</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:12px; text-align:center; font-size:26px;"><b>差止請求・損害賠償請求等の民事訴訟や、刑事罰の対象となることも</b></div>

<div class="cite pip-safe">Source: 総務省「インターネットとの向き合い方～ニセ・誤情報に騙されないために～」</div>

<!--
- 生成AIで生成したものが、既存の著作物・商標・意匠・著名人の肖像等と類似していると、知的財産権の侵害になりうる。
- 差止請求・損害賠償請求等の民事訴訟や、刑事罰の対象となることもある点に注意。
-->

---

<div class="page-title">そもそも、なんで？</div>

# <span style="color:var(--accent-dark)">そもそも、なんで？</span>　<span class="tag tag-soft">2 背景</span>

<div style="display:flex; gap:24px; align-items:center; margin-top:8px;">
<div style="font-size:30px; font-weight:800; color:var(--accent); white-space:nowrap;">疑問点</div>
<div class="box-accent" style="flex:1;">
<div style="margin:6px 0;"><b>AIの中身は、どうなっているのだろう？</b></div>
<div style="margin:6px 0;"><b>そもそもなんで、間違えるのか？</b></div>
<div style="margin:6px 0;"><b>間違えることはなくならないのか</b></div>
</div>
</div>

<div style="margin-top:34px; font-size:34px; font-weight:800; line-height:1.4;">AIを使いこなすためには、メカニズムをある程度、知る必要がある</div>

<div class="box-warn pip-safe" style="margin-top:18px;">→ <b>AIをただ、使うだけでは、わからない！！！</b><br>　　実際、大学でも教員にAIのメカニズムを教えることが増加</div>

<!--
- AIを使いこなすには、メカニズムをある程度知る必要がある。
- ただ使うだけではわからない。大学でも教員にAIのメカニズムを教えることが増えている。
-->

---

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

---

<div class="page-title">解答/解説</div>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:0 0 33%; position:relative; min-height:600px;">

<div style="display:flex; align-items:center; gap:14px; margin-top:4px;">
<div style="flex:0 0 96px; height:96px; border-radius:50%; background:#2E7D46; color:#fff; font-weight:800; font-size:21px; line-height:1.15; display:flex; align-items:center; justify-content:center; text-align:center;">理解度<br>チェック</div>
<div style="flex:1; border:3px solid #111; border-radius:40px; padding:14px 0; text-align:center; font-size:34px; font-weight:800;">解答/解説</div>
</div>

<div style="display:flex; align-items:center; gap:14px; margin-top:26px;">
<div style="border:3px solid #2E7D46; border-radius:10px; padding:8px 18px; color:#2E7D46; font-weight:800; font-size:28px;">正解</div>
<div style="background:#111; color:#fff; font-weight:800; font-size:26px; border-radius:8px; padding:6px 20px;">ア</div>
<div style="background:#111; color:#fff; font-weight:800; font-size:26px; border-radius:8px; padding:6px 20px;">ウ</div>
</div>

<div class="box-info" style="margin-top:24px; font-size:22px;">
<b>ア</b>：生成物に偏見や差別が含まれていないか、人間が判断することが重要。
</div>
<div class="box-info" style="margin-top:14px; font-size:22px;">
<b>ウ</b>：偏見や差別を軽減するため、具体的な指示を与えて多様性を引き出すことが重要。
</div>

<div style="position:absolute; bottom:-40px; left:10px; font-size:240px; font-weight:800; color:#fff; line-height:1; text-shadow:0 0 1px #d8d8d8;">A</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:82px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:26px;">生成された内容に偏りがないか自分で考えてみる</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:62px; height:62px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:82px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>生成AIは大量の学習データから文脈に沿った結果を生成する単なるツールであるため、生成内容が常に中立的であるとは限らない</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:82px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:26px;">性別を限定しないで生成するよう改めて指示する</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:62px; height:62px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:82px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>再度同じ指示をしても同様の偏りがある画像が出力される可能性が高い</div>
</div>

<div class="cite pip-safe" style="margin-top:18px;">総務省　生成AIはじめの一歩 〜生成AIの入門的な使い方と注意点〜</div>

</div>
</div>

<!-- 前問（画像生成の偏り）の解答です。正解はアとウ。アは生成物に偏見や差別が含まれていないか人間が判断すること、ウは具体的な指示で多様性を引き出すことが重要です。イとエは解説のとおり適切ではありません。 -->

---

<div class="page-title">基本問題</div>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:0 0 33%; position:relative; min-height:600px;">

<div style="display:flex; align-items:center; gap:14px; margin-top:4px;">
<div style="flex:0 0 96px; height:96px; border-radius:50%; background:linear-gradient(135deg,#1A6BB0,#3FA9E0); color:#fff; font-weight:800; font-size:21px; line-height:1.15; display:flex; align-items:center; justify-content:center; text-align:center;">理解度<br>チェック</div>
<div style="flex:1; border:3px solid #111; border-radius:40px; padding:14px 0; text-align:center; font-size:34px; font-weight:800;">基本問題</div>
</div>

<div style="font-size:29px; line-height:1.6; font-weight:700; margin-top:30px;">生成AIの説明として、適切なものはどれか。<span style="color:#2E9E5B;">全て</span>選んでください。</div>

<div style="position:absolute; bottom:-40px; left:10px; font-size:240px; font-weight:800; color:#fff; line-height:1; text-shadow:0 0 1px #cfe6f3;">Q</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:88px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:27px;">生成AIは、インターネット上の文章を大量に学習し、指示に沿った回答を出力する</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:88px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:27px;">生成AIは、文章だけでなく、画像/動画/コード等も生成可能である</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:88px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:27px;">生成AIは、高度な技術をもったエンジニアでないと使うことが難しい</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:8px 0;">
<div style="flex:0 0 56px; height:88px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:27px;">生成AIは、指示入力を工夫しなくても、利用者の意図をくみ取って回答を生成してくれる</div>
</div>

</div>
</div>

<!-- では、ここまでの「生成AIの使い方」に関する理解を確認するため、問題を解いてみましょう。生成AIの説明として適切なものを、ア〜エから全て選んでください。 -->

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
<div style="background:#111; color:#fff; font-weight:800; font-size:26px; border-radius:8px; padding:6px 20px;">イ</div>
</div>

<div style="position:absolute; bottom:-40px; left:10px; font-size:240px; font-weight:800; color:#fff; line-height:1; text-shadow:0 0 1px #d8d8d8;">A</div>

</div>

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:78px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ア</div>
<div style="font-size:26px;">生成AIは、インターネット上の文章を大量に学習し、指示に沿った回答を出力する</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:60px; height:60px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:center; gap:22px; padding:6px 0; position:relative;">
<div style="flex:0 0 56px; height:78px; background:#111; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">イ</div>
<div style="font-size:26px;">生成AIは、文章だけでなく、画像/動画/コード等も生成可能である</div>
<div style="position:absolute; right:0; top:50%; transform:translateY(-50%); width:60px; height:60px; border:9px solid #9CC59F; border-radius:50%;"></div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:78px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">ウ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>生成AIは、高度な技術は必要なく、簡単に使うことができるため、日常生活・学習・仕事に大きな影響を与えると見込まれる</div>
</div>
<div style="border-top:3px dotted #bbb;"></div>

<div style="display:flex; align-items:flex-start; gap:22px; padding:6px 0;">
<div style="flex:0 0 56px; height:78px; background:#9a9a9a; color:#fff; font-size:30px; font-weight:800; border-radius:8px; display:flex; align-items:center; justify-content:center;">エ</div>
<div style="font-size:22px; color:#555; line-height:1.45;"><b style="color:#555;">【解説】</b>生成AIは、利用者の意図を自動的にくみ取るわけではないため、指示の工夫が必要である</div>
</div>

</div>
</div>

<!-- 基本問題の解答です。正解はアとイ。アは生成AIの基本的な仕組み、イは多様な生成物を扱えること。ウは高度な技術が不要で簡単に使えること、エは指示の工夫が必要であることが解説のポイントです。 -->

---

<div class="page-title">学びへの活用</div>

<div style="font-size:27px; font-weight:700; margin:2px 0 14px;"><span style="color:var(--accent-dark); font-weight:800;">2 〜 3人のグループ</span>になって下さい。</div>

<div class="box-accent" style="font-weight:800; text-align:center; font-size:30px; margin:0 0 18px;">30分のワークをします</div>

<div class="stepbox">
<div class="st"><span class="em">①</span> AIを勉強、仕事・就職や読書に活かすアイデアを選んで、探してみて下さい。どんなことがAIできると便利ですか。<br><b>AIに相談してもよいです。</b></div>
</div>

<div class="stepbox">
<div class="st"><span class="em">②</span> そのアイデアは、さっきの注意点は、解決できていますか。問題がないか、確認しましょう。</div>
</div>

<div class="stepbox pip-safe">
<div class="st"><span class="em">③</span> 実際にAIで、そのアイデアが生きるか、確認し、共有して下さい。<br><b>発表してもらえると、ちょっとした賞があります。</b></div>
</div>

<!-- ここからグループワークです。2〜3人のグループになって、30分のワークに取り組みます。①AIを学びや仕事に活かすアイデアを探し、②注意点が解決できているか確認し、③実際にAIで試して共有します。発表してくれたグループにはちょっとした賞があります。 -->

---

<div class="page-title">学びへの活用</div>

<div style="font-size:27px; font-weight:700; margin:2px 0 14px;"><span style="color:var(--accent-dark); font-weight:800;">2 〜 3人のグループ</span>になって下さい。</div>

<div class="box-accent" style="font-weight:800; text-align:center; font-size:30px; margin:0 0 18px;">30分のワークをします</div>

<div class="stepbox">
<div class="st"><span class="em">①</span> AIを勉強、仕事・就職や読書に活かすアイデアを選んで、探してみて下さい。どんなことがAIできると便利ですか。<br><b>AIに相談してもよいです。</b></div>
</div>

<div style="font-size:25px; line-height:1.7; margin:14px 0 6px;">今から<b style="color:var(--accent);">５分後</b>にシェアしてもらいます。<br>比較的短い、「質問」と「応答」をするシナリオでよいです。</div>

<div class="box-info pip-safe" style="font-size:23px; line-height:1.6;">
<b>例：</b>宿題で分からないところを解説してもらう<br>
<span style="display:inline-block; margin-left:2.5em;">エントリーシートで書くのが難しいところを質問する</span><br>
<span style="display:inline-block; margin-left:2.5em;">探究のテーマを決めるときに、他のアイデアをたくさんもらう</span>
</div>

<!-- まずは①から始めましょう。今から5分後にシェアしてもらいます。比較的短い「質問」と「応答」のシナリオで構いません。例えば、宿題の分からないところを解説してもらう、エントリーシートで書きにくいところを質問する、探究のテーマ決めで他のアイデアをもらう、などです。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 110" width="150" xmlns="http://www.w3.org/2000/svg"><path d="M14 12 h78 a14 14 0 0 1 14 14 v40 a14 14 0 0 1 -14 14 H46 l-20 18 v-18 H14 a14 14 0 0 1 -14 -14 V26 a14 14 0 0 1 14 -14 z" fill="#fff" stroke="#2E7D46" stroke-width="8"/><rect x="26" y="32" width="42" height="8" rx="4" fill="#2E7D46"/><rect x="26" y="50" width="28" height="8" rx="4" fill="#2E7D46"/></svg>
</div>

<div style="font-size:52px; font-weight:800; color:#1a1a1a; line-height:1.4;">どんなアイデアにしますか。</div>

</div>

<!-- グループで、どんなアイデアにするか考えてみましょう。Slidoで皆さんの考えを集めます。 -->

---

<div class="page-title">学びへの活用</div>

<div style="font-size:24px; font-weight:700; margin:0 0 10px;"><span style="color:var(--accent-dark);">②</span> そのアイデアは、さっきの注意点は、解決できていますか。問題がないか、確認しましょう。</div>

<div style="text-align:center; font-size:24px; font-weight:800; background:#1f3d2a; color:#fff; border-radius:8px; padding:6px 0; margin:0 0 12px;">生成AI活用に当たって注意すべきポイントは?</div>

<div class="cardrow">

<div class="pcard">
<div class="pc-h" style="background:#1A6BB0;">情報の正確性</div>
<ul>
<li>無意識のうちに合理的ではない行動、偏った判断をすることがあるという意識を持つ</li>
<li>チェックリストを用いて真偽を判断する</li>
<li>安易に拡散しない / 拡散したいときはひと呼吸おく</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h" style="background:#2E9E5B;">情報流出</div>
<ul>
<li>生成AIサービスの規約を確認する(商用利用可否、損害発生時の責任所在等)</li>
<li>個人情報や機密情報の入力は必要最小限にする</li>
<li>生成AIに入力したデータを学習に使わせないように設定する</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h" style="background:#8A6D3B;">知的財産権の侵害</div>
<ul>
<li>既存のものや実在の人物に似たものを生成するような指示入力を避ける</li>
<li>生成物が既存のものや実在の人物に類似している場合、利用をやめる/権利者から許諾を取得後に利用する/既存のものと類似しないよう大幅に加工する</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h" style="background:#C0182B;">活用者としてのモラル</div>
<ul>
<li>本来自分が行うべきことまで生成AI任せにしない</li>
<li>生成AIが作った偏見のある回答を使用しない</li>
<li>生成AIを非倫理的な行為や犯罪に悪用しない</li>
</ul>
</div>

</div>

<div class="cite pip-safe">総務省　生成AIはじめの一歩 〜生成AIの入門的な使い方と注意点〜</div>

<!-- 次に②です。考えたアイデアが、注意点を解決できているか確認しましょう。生成AI活用にあたっては、情報の正確性、情報流出、知的財産権の侵害、活用者としてのモラル、それぞれについて、今回学習した内容を心がけましょう。 -->

---

<div class="page-title">学びへの活用</div>

<div style="display:grid; grid-template-columns:0.85fr 1.15fr; gap:18px 24px; align-items:stretch; margin-top:10px;">

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; flex-direction:column; justify-content:center;">
<div style="font-size:28px; font-weight:800;">なぜ誤答だったのか、聞いてみる</div>
<div style="font-size:21px; color:#555; margin-top:6px;">※直接聞くより間違えにくい</div>
</div>
<div style="border:2.5px solid #2a2a2a; border-radius:10px; padding:16px 22px; font-size:26px; line-height:1.55; display:flex; align-items:center;">自分は、〇〇と答えたけども、答えは△だった。自分はどこで勘違いしたのか？</div>

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; flex-direction:column; justify-content:center;">
<div style="font-size:28px; font-weight:800;">精緻的質問をしてみる</div>
<div style="font-size:21px; color:#555; margin-top:6px;">※読書にも有効</div>
</div>
<div style="border:2.5px solid #2a2a2a; border-radius:10px; padding:16px 22px; font-size:26px; line-height:1.55; display:flex; align-items:center;">なぜそうなっているのか？<br>どのようになっているのか？</div>

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; flex-direction:column; justify-content:center;">
<div style="font-size:28px; font-weight:800;">他の捉え方を聞いてみる</div>
<div style="font-size:21px; color:#555; margin-top:6px;">※読書にも有効</div>
</div>
<div class="pip-safe" style="border:2.5px solid #2a2a2a; border-radius:10px; padding:16px 22px; font-size:26px; line-height:1.55; display:flex; align-items:center;">△について、自分は、〇〇と考えた。他の考え方はあるか。</div>

</div>

<!-- 学びへの活用例です。誤答だったときはなぜ間違えたのか聞いてみる、精緻的質問でなぜ・どのようにと深掘りする、他の捉え方を聞いてみる、といった使い方ができます。いずれも読書にも有効です。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 120" width="150" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="10" width="84" height="100" rx="14" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="8"/><path d="M34 40 l9 9 16 -18" fill="none" stroke="#1A6BB0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="40" width="22" height="8" rx="4" fill="#1A6BB0"/><circle cx="40" cy="80" r="11" fill="none" stroke="#1A6BB0" stroke-width="8"/><rect x="70" y="76" width="22" height="8" rx="4" fill="#1A6BB0"/></svg>
</div>

<div style="font-size:52px; font-weight:800; color:#1a1a1a; line-height:1.4;">注意点を確認しましたか</div>

</div>

<!-- アイデアについて、これまで学んだ注意点を確認できたかをSlidoでたずねます。 -->

---

<div class="page-title">学びへの活用</div>

<div style="display:grid; grid-template-columns:0.85fr 1.15fr; gap:18px 24px; align-items:stretch; margin-top:10px;">

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; align-items:center;">
<div style="font-size:30px; font-weight:800;">関連付け</div>
</div>
<div style="border:2.5px solid #2a2a2a; border-radius:10px; padding:14px 22px; font-size:25px; line-height:1.5; display:flex; align-items:center;">△について習ったことがある。□になりたい。〇はどう関係するのか？☓のいい比喩はないか？</div>

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; align-items:center;">
<div style="font-size:28px; font-weight:800;">リフレクションや言語化のシミュレーション</div>
</div>
<div style="border:2.5px solid #2a2a2a; border-radius:10px; padding:14px 22px; font-size:25px; line-height:1.5; display:flex; align-items:center;">〇〇と言葉にしたけど伝わる?復習したいからコーチして</div>

<div style="background:var(--section-bg); border-radius:10px; padding:16px 22px; display:flex; flex-direction:column; justify-content:center;">
<div style="font-size:30px; font-weight:800;">英語で話してみる</div>
<div style="font-size:21px; color:#555; margin-top:6px;">※文法は完璧</div>
</div>
<div class="pip-safe" style="border:2.5px solid #2a2a2a; border-radius:10px; padding:14px 22px; font-size:25px; line-height:1.5; display:flex; align-items:center;">I'm preparing for an upcoming presentation about AI…</div>

</div>

<!-- さらに、学んだ内容を関連付ける、リフレクションや言語化のシミュレーションをする、英語で話してみる（文法は完璧に直してくれる）といった活用もできます。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:48px; height:100%; padding:0 30px;">

<div style="flex:0 0 150px;">
<svg viewBox="0 0 120 110" width="150" xmlns="http://www.w3.org/2000/svg"><path d="M14 12 h78 a14 14 0 0 1 14 14 v40 a14 14 0 0 1 -14 14 H46 l-20 18 v-18 H14 a14 14 0 0 1 -14 -14 V26 a14 14 0 0 1 14 -14 z" fill="#fff" stroke="#2E7D46" stroke-width="8"/><rect x="26" y="32" width="42" height="8" rx="4" fill="#2E7D46"/><rect x="26" y="50" width="28" height="8" rx="4" fill="#2E7D46"/></svg>
</div>

<div style="font-size:46px; font-weight:800; color:#1a1a1a; line-height:1.45;">どのようなアイデアを作ったか、紹介してみて下さい</div>

</div>

<!-- 各グループが、どのようなアイデアを作ったかを紹介してもらいます。Slidoで共有しましょう。 -->

---

<div class="page-title">良いプロンプトを書くコツ</div>

<div class="box-accent pip-safe" style="font-size:24px; margin:2px 0 14px;">生成AIから最適な回答を得るための指示（プロンプト）の工夫を "<b>プロンプトエンジニアリング</b>" と呼ぶ</div>

<div style="display:grid; grid-template-columns:0.95fr 1.45fr; gap:6px 18px;">

<div style="font-weight:800; color:var(--accent-dark); font-size:24px; padding-left:48px;">工 夫</div>
<div style="font-weight:800; color:var(--accent-dark); font-size:24px;">指示 (プロンプト) 例</div>

<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:700;"><span style="flex:0 0 34px; height:34px; background:var(--accent); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px;">1</span>目的・詳細な設定・検討の材料を書く</div>
<div style="border:2px solid #ccc; border-radius:8px; padding:8px 16px; font-size:21px; line-height:1.5;">この質問は、XXXを作成するために聞いています<br>なお、8月の夏休みに行く旅行について検討しています<br>XXXの文脈に絞って、XXXについて教えてください</div>

<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:700;"><span style="flex:0 0 34px; height:34px; background:var(--accent); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px;">2</span>欲しい回答の例を与える</div>
<div style="border:2px solid #ccc; border-radius:8px; padding:8px 16px; font-size:21px; line-height:1.5;">XXXのような事例を探しています<br>以下の例を参考に、類似のものを調べてください</div>

<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:700;"><span style="flex:0 0 34px; height:34px; background:var(--accent); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px;">3</span>書式/回答方法を制限する</div>
<div style="border:2px solid #ccc; border-radius:8px; padding:8px 16px; font-size:21px; line-height:1.5;">横軸がAとBとCである表形式で答えてください<br>XXX文字以内で答えてください<br>要点をXXX個挙げてください</div>

<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:700;"><span style="flex:0 0 34px; height:34px; background:var(--accent); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px;">4</span>文章のテイストを指定する</div>
<div class="pip-safe" style="border:2px solid #ccc; border-radius:8px; padding:8px 16px; font-size:21px; line-height:1.5;">私は10歳の子供だと思って説明してください<br>XXX (有名な作家 等) の文体で説明してください<br>女子高生になりきって説明してください</div>

</div>

<!-- 生成AIから欲しい情報を得るために、指示入力にはいくつかのコツがあります。代表的な4つのコツをご紹介します。①目的、詳細な設定、検討の材料を書く。目的や背景を説明すると、意図に沿った回答を得やすくなります。②欲しい回答の例を与える。例をいくつか提示すると、類似の回答を得やすくなります。③書式、回答方法を制限する。回答の形式、字数、回答の個数などを具体的に指定することで、目的に沿った回答を得やすくなります。④文章のテイストを指定する。誰に対する回答かを想定して指示することで、文脈に沿った回答を得やすくなります。なお、このような指示の工夫を、「プロンプトエンジニアリング」と呼びます。 -->

---

<div class="page-title">コンペ</div>

# 良いプロンプトを書くコツ <span class="tag tag-soft" style="font-size:24px;">7R法</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 50%;">

<div class="lead-note" style="color:var(--accent-dark);">プロンプト上手になるための7つのポイント</div>

<div class="bgroup" style="grid-template-columns:1fr; margin-top:6px;">
<div class="bg-items" style="border-left:4px solid var(--accent);">
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">① 明確な質問</span>　曖昧な質問ではなく明確な質問をすることで、より良い回答が得られます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">② 具体性</span>　トピックや要求に具体的な詳細を提供することで、適切な回答を引き出すことができます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">③ プロンプトの構造</span>　質問を構造化して、抜け・漏れをなくします。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">④ 文脈の提供</span>　重要な文脈や背景情報を提供します。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑤ 複数の質問</span>　必要に応じて、複数の質問を連続して投げます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑥ ステップバイステップ指示</span>　段階的に考えさせます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑦ 校正とフィードバック</span>　得られた結果を評価し、精度向上を促します。</div>
</div>
</div>

</div>
<div style="flex:1;">

<img src="./src/fig61-flow.png" alt="簡易プロンプトと詳細プロンプトの流れ図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">

</div>
</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる｜野口 竜司</div>

<!--
- プロンプト上手になるための7つのポイント（7R法）。①明確な質問、②具体性、③プロンプトの構造、④文脈の提供、⑤複数の質問、⑥ステップバイステップ指示、⑦校正とフィードバック。
- 右図は「簡易プロンプト（Request/Role/Regulation）」と「詳細プロンプト（Request/Role/Regulation/Rule/Review&Refine/Reference）」の入力→出力の流れ。
- 出典：ChatGPT時代の文系AI人材になる｜野口竜司
-->

---

<div class="page-title">コンペ</div>

# 良いプロンプトを書くコツ

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="margin:4px 0 8px; font-size:20px; line-height:1.45;">
<b># 命令(Instruction)</b><br>
AIに実行してほしい、最も重要なタスクを明確に記述します。この点、何をしてほしいのか、しっかりと対話して明確にして下さい。<br>
例：納豆の魅力について、子供向けに解説してください。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 役割(Role)</b><br>
AIに担ってほしい専門家やキャラクターを設定します。<br>
例：小学生に教えるのが得意な、明るく優しい先生
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 文脈(Context)</b><br>
このタスクの背景や、回答を作る上で考慮してほしい状況を伝えます。<br>
例：対象読者は、食べ物の好き嫌いが多い小学校3年生です。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 参照(Reference)</b><br>
AIに読み込ませたい情報（文章、データ、ファイル名など）を指定します。<br>
例：添付のPDF「natto_data.pdf」を読んでから回答してください。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 形式(Format)</b><br>
出力してほしい形を具体的に指定します。<br>
例：表形式で、各列は「栄養素」「働き」「多く含まれる食べ物」にしてください。
</div>

<div class="box-info" style="margin:0; font-size:20px; line-height:1.45;">
<b># ルール(Rules)</b><br>
回答を作成する上での、具体的な制約や必ず守ってほしい条件を箇条書きにします。<br>
* 【含めること】：必ず「ネバネバパワー」という言葉を入れてください。<br>
* 【禁止すること】：難しい科学用語（例：ビタミンK2）は使わないで下さい。
</div>

</div>
<div style="flex:0 0 33%;">

<div class="box-accent" style="font-size:22px; line-height:1.55;">
<b>目的</b><br>
どういう意図か？<br>
　含めること<br>
　禁止すること<br><br>
<b>背景</b><br>
背景知識<br>
プロンプトのターゲット<br><br>
<b>出力スタイル</b><br>
　量<br>
　形式<br>
　抽象度/具体度<br>
　順番
</div>

</div>
</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる｜野口 竜司を改変　／　※ とても長いプロンプトになる</div>

<!--
- 良いプロンプトの構成要素を具体例つきで解説。命令(Instruction)・役割(Role)・文脈(Context)・参照(Reference)・形式(Format)・ルール(Rules)。
- 右側は要素を「目的（意図・含めること・禁止すること）」「背景（背景知識・ターゲット）」「出力スタイル（量・形式・抽象度/具体度・順番）」に整理したもの。
- ※ とても長いプロンプトになる。出典：ChatGPT時代の文系AI人材になる｜野口竜司を改変。
-->

---

<div class="page-title">第3講　AIとの関係</div>

# 今日の目的

<div style="font-size:34px; font-weight:800; color:#9aa0a6; margin:18px 0;">第1講 AIって何か知ろう</div>

<div style="font-size:34px; font-weight:800; color:#9aa0a6; margin:18px 0;">第2講 AIを使う上での注意点とその背景を知ろう</div>

<div style="background:var(--accent-soft); color:#b89aa8; font-size:32px; font-weight:800; padding:12px 28px; border-radius:6px; margin:14px 0;">コンペ：AIを探求、読書、普段の学びに活かすには</div>

<div style="font-size:34px; font-weight:800; color:#1a1a1a; margin:18px 0;">第3講 AIとの付き合い方を考えよう</div>

<div style="font-size:38px; font-weight:800; color:var(--accent); margin-top:24px;">今後、AIとどう向き合うか、自分の考えを持てれば成功です</div>

<!--
- 6-7
- 今日の目的の振り返り。第1講「AIって何か知ろう」、第2講「AIを使う上での注意点とその背景を知ろう」、コンペ「AIを探求、読書、普段の学びに活かすには」を経て、今は第3講「AIとの付き合い方を考えよう」。
- 今後、AIとどう向き合うか、自分の考えを持てれば成功です。
-->

---

<div class="page-title">第3講　AIとの関係</div>

# AIは「教える」のどこに影響するか

<div class="subhead"><span class="tag tag-soft">参考</span><span>職業への影響</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 44%;">

<img src="./src/fig64-graph.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">

</div>
<div style="flex:1;">

<div class="box-info" style="margin:2px 0 10px; font-size:21px; line-height:1.45;">
<b>(1) AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業
</div>

<div class="box-accent" style="margin:0 0 10px; font-size:21px; line-height:1.45;">
<b>(2) AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業
</div>

<div class="box-warn" style="margin:0; font-size:21px; line-height:1.45;">
<b>(3) AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。
</div>

<div style="font-size:21px; margin-top:10px;">※ 教員・研究者(自然科学系)は、青の領域</div>

</div>
</div>

<div class="cite pip-safe">内閣府(2024) 世界経済の潮流 &gt;第1章&gt;p.13</div>

<!--
- 職業へのAIの影響を、代替性／補完性の2軸で分類した図（アメリカの各職業に対するAIの影響と補完性）。
- (1)影響大・代替性高＝AIがとって変わる職業、(2)影響大・補完性高＝AIを使いこなす必要のある職業、(3)影響小＝物理的タスク中心の職業。
- ※教員・研究者(自然科学系)は青の領域。出典：内閣府(2024) 世界経済の潮流＞第1章＞p.13
-->

---

<div class="page-title">第3講　AIとの関係</div>

# (参考) AIリテラシ <span style="font-size:30px; font-weight:700;">OECD (2023)</span>

<div class="box-accent" style="margin:8px 0 14px; text-align:center; font-size:26px;">
AIの技術面を批判的に評価し、AIを効果的に活用できる能力<br>
<span style="font-size:22px;">(communicate and collaborate)</span>
</div>

<div class="bg-items" style="border-left:4px solid var(--accent); font-size:23px; line-height:1.6; margin:0 0 14px;">
<div>第１：AIの基本的な機能と日常生活におけるAIの使用方法に関する知識</div>
<div>第２：様々な場面に応用することのできる能力</div>
<div>第３：AIを実装し、評価することができる能力</div>
<div>第４：アルゴリズムの開発に必要なデータを管理する能力とAIの出力結果を批判的に考察する能力</div>
</div>

<div class="box-info" style="margin:0 0 12px; text-align:center; font-size:25px;">
AIを理解し、活用し、監視し、批判的に考察できるスキル
</div>

<div class="box-warn pip-safe" style="text-align:center;">各国でリスキリング/学校教育への取り込みが行われている</div>

<div class="cite pip-safe">内閣府(2024) 世界経済の潮流 &gt;第1章&gt;p.32</div>

<!--
- 参考：OECD(2023)のAIリテラシ。AIの技術面を批判的に評価し、効果的に活用できる能力（communicate and collaborate）。
- 第1：基本的機能と日常生活での使用法の知識、第2：様々な場面に応用する能力、第3：実装・評価できる能力、第4：データ管理能力と出力結果を批判的に考察する能力。
- AIを理解し、活用し、監視し、批判的に考察できるスキル。各国でリスキリング/学校教育への取り込みが行われている。出典：内閣府(2024) 世界経済の潮流＞第1章＞p.32
-->

---

<div class="page-title">第3講　AIとの関係</div>

# AIとどうか変わるかの例

<div class="subhead"><span style="color:var(--accent-dark);">共同知能 Co-Intelligence</span></div>

<div class="box-accent" style="margin:2px 0 10px; font-size:24px;">
<b>AIは人と異なる知能</b>である。「<b>異星人の心</b>」でありいくら人間っぽくても、性質が違う。
</div>

<div class="lead-note" style="color:var(--accent-dark); margin:2px 0;"><b>共同知能についての4つのルール</b></div>

<div class="stepbox" style="margin:2px 0 10px;">
<div class="st" style="font-size:23px;">AIを参加させる。</div>
<div class="st" style="font-size:23px;">人間参加型のデザインにする。</div>
<div class="st" style="font-size:23px;">AIにペルソナを与える。</div>
<div class="st" style="font-size:23px;">今使っているAIは、今後使用するどのAIよりも劣悪と仮定する。</div>
</div>

<div class="box-info pip-safe" style="font-size:22px; line-height:1.5;">
<b>+ でてきた情報を、批判的に考える</b><br>
<b>+ 先生は学びの文脈をAIに与えてみる</b><br>
<b>+ マイルールを作って行くことが大切</b>
</div>

<div class="cite pip-safe">『これからのAI、正しい付き合い方と使い方』 (2024) Mollick著、久保田訳</div>

<!--
- AIとどう関わるかの例として「共同知能 Co-Intelligence」を紹介。AIは人と異なる知能であり「異星人の心」。いくら人間っぽくても性質が違う。
- 共同知能についての4つのルール：①AIを参加させる、②人間参加型のデザインにする、③AIにペルソナを与える、④今使っているAIは今後のどのAIよりも劣悪と仮定する。
- 補足：でてきた情報を批判的に考える／先生は学びの文脈をAIに与えてみる／マイルールを作っていくことが大切。出典：『これからのAI、正しい付き合い方と使い方』(2024) Mollick著、久保田訳
-->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:40px; margin-top:60px;">
<div style="flex:0 0 130px; color:#2E9E5B; font-size:120px; line-height:1;">💬</div>
<div style="font-size:46px; font-weight:800; line-height:1.4;">日頃の学びの中で、AIとどのように関わっていきたいですか。</div>
</div>

<div class="box-info pip-safe" style="margin-top:48px;">スマホ・PCから <b>Slido</b> にアクセスして、書き込んでください</div>

<!-- Slidoで「日頃の学びの中で、AIとどのように関わっていきたいですか」を聴衆に書き込んでもらう。 -->

---

<!-- _class: message -->

<div style="display:flex; align-items:center; gap:40px; margin-top:60px;">
<div style="flex:0 0 130px; color:var(--accent); font-size:120px; line-height:1;">💬</div>
<div style="font-size:56px; font-weight:800; line-height:1.3;">Audience Q&amp;A</div>
</div>

<div class="box-info pip-safe" style="margin-top:48px;">スマホ・PCから <b>Slido</b> にアクセスして、質問してください</div>

<!-- Slidoで会場からの質問を受け付ける。 -->
