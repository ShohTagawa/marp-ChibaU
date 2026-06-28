---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座</div>
<div class="title-big">第1回 (後半)</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig-cover-portrait.png" alt="講師似顔絵"></div>
<div class="title-meta">
<div class="title-date">2025/10/1　講師：田川 翔</div>
<div>千葉大学 国際未来教育基幹 助教</div>
</div>
</div>

<!--
- タイトルコール。生成AI活用講座 第1回の後半を始めます。講師の田川です。
-->

---

<div class="page-title">1　イントロ</div>

# 自己紹介

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-accent" style="margin-top:6px;">
仕事：<b>大学教育の企画</b>／<b>学生と教員を支援</b>
</div>

<div style="font-size:25px; line-height:1.6; margin:14px 0 6px;">
専門：<b>地球の起源、AI</b><br>
地球惑星科学　博士(理学) 2020年
</div>

<div style="display:flex; gap:14px; align-items:flex-start; margin-top:8px;">
<img src="./src/fig-s2-press.png" alt="超高圧高温実験" style="height:200px;">
<img src="./src/fig-s2-hsi.png" alt="H/Si マップ" style="height:160px; align-self:flex-end;">
</div>
<div style="font-size:20px; color:#555; margin-top:6px;">海の起源の仮説検証　Tagawa et al. (2021) <i>Nat. Com.</i></div>

</div>
<div style="flex:0.95; display:flex; flex-direction:column; gap:10px; align-items:center;">
<img src="./src/fig-s2-magma.png" alt="マグマオーシャンと海の起源" style="height:330px;">
<div style="display:flex; gap:12px; align-items:center;">
<img src="./src/fig-s2-poster.png" alt="大学の教え方の授業ポスター" style="height:150px;">
<div style="font-size:21px; line-height:1.4;"><b>翻訳：</b><br>来年、発売予定！<br><span style="color:var(--accent-dark);">大学の教え方の授業</span></div>
</div>
</div>
</div>

<!--
- 始める前に、簡単に僕の自己紹介をしときましょう。名前は、田川翔といいます。現在は千葉大学の教育をより良くするために、教育企画の仕事を行っている教員です。最近の研究テーマは大学教育と生成AIの関係なので、ここに立っています。
- これ似顔絵ですね。ポスターを真似て、チャットGPTにかいてもらいました。似てますかね？(会場の反応を見る)
- さて、そんな私ですが、もともと研究テーマは地球の起源の解明なんですね。この惑星は、どのようにできたのか。そして、海の量はなぜきまったのか。
- そんなテーマで、博士課程まで実験していました。これですね(岩石みせる)、皆様の足元深い所にあるかんらん岩という岩石なんですけどもこの宝石みたいな岩石が地球のマントルの成分だと考えられています。
- で、こっちの方が隕鉄ですね。特徴的な結晶構造があるので、宇宙から降ってきたってわかるんですけど、この2つの化学反応を、実際に地球ができた温度、圧力で実験していました。
- それは、超高圧・高温の世界で、手のひらに東京タワー10本分ぐらいをのっけたような圧力を作り出し、そこにレーザーをあててドロドロに融かすわけです。
-->

---

<div class="page-title">1　イントロ</div>

# 授業・セミナー インタラクティブ化ツール

<div class="subhead" style="font-size:25px; margin-top:2px;">✓匿名 / もしよければ、ぜひご参加下さい</div>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:10px;">
<img src="./src/fig-s3-qr.png" alt="slido QRコード" style="width:300px;">
<div style="flex:1;">
<div style="font-size:48px; font-weight:800; color:#5a5f66; line-height:1.25; margin-top:18px;">Join at slido.com<br>#6732809</div>
</div>
</div>

<div style="display:flex; gap:24px; align-items:center; margin-top:18px;">
<div class="box-accent" style="flex:1;">
<b>PCから参加の方へ</b><br>
<b>slidoのwebページを開き、アクセスコード(7桁)を入力して下さい</b>
</div>
<img src="./src/fig-s3-slido.png" alt="slido アクセスコード入力画面" style="width:360px;" class="pip-safe">
</div>

<!--
- 今日は slido という匿名参加ツールを使います。QRコードか slido.com にアクセスし、アクセスコード #6732809 を入力して下さい。
-->

---

<div class="page-title">1　イントロ</div>

# 使ったことはありますか？

<div style="display:flex; justify-content:center; margin-top:10px;">
<img src="./src/fig-s4-poll.png" alt="slido投票：生成AIを使ったことはありますか" style="height:430px;" class="pip-safe">
</div>

<!--
- まず、現状を知りましょう。生成AIを使ったことはありますか、という投票です。時々が65%、ほぼ毎日が24%でした。
-->

---

<div class="page-title">1　イントロ</div>

# どんなことに使いますか？

<div style="display:flex; justify-content:center; margin-top:10px;">
<img src="./src/fig-s5-poll.png" alt="slido投票：どんなことに使いますか" style="height:430px;" class="pip-safe">
</div>

<!--
- 何に使いますか、という投票。課題・勉強が79%、相談が31%、趣味が20%でした。
-->

---

<div class="page-title">1　イントロ</div>

# 使っているのは？

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:6px;">
<img src="./src/fig-s6-poll.png" alt="slido投票：使っている生成AIは" style="height:470px;">
<div style="flex:1; font-size:30px; line-height:1.5; margin-top:30px;">
意外にも<br>チャットGPT一強…
<div class="box-warn" style="margin-top:24px;">
後で出ますが、<b>オプトアウト</b>に注意<br>
<span style="font-size:24px;">(自分のデータをAIの学習に使わせない設計)</span>
</div>
</div>
</div>

<!--
- 使っている生成AIは何か。意外にもチャットGPT無料版が85%と一強でした。後で出ますが、オプトアウト(自分のデータをAIの学習に使わせない設計)に注意して下さい。
-->

---

<div class="page-title">1　イントロ</div>

# コーディング・開発経験

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:6px;">
<img src="./src/fig-s7-poll.png" alt="slido投票：コーディング・開発経験" style="height:470px;">
<div style="flex:1; font-size:30px; line-height:1.55; margin-top:24px;">
承知しました。<br>
<b>第二回の内容を</b>少し簡単に修正します。
<div style="margin-top:24px;">
それと、<b>開発経験のある皆様、ぜひ、他の学生の支援に回って下さい。</b>
</div>
</div>
</div>

<!--
- コーディング・開発経験について。特に何もない方が多いので、第二回の内容を少し簡単に修正します。開発経験のある皆様は、ぜひ他の学生の支援に回って下さい。
-->

---

<div class="page-title">1　イントロ</div>

<div class="callout-yellow" style="text-align:center; font-size:40px; font-weight:800; max-width:1040px; margin:6px auto 0;">原則</div>

<div class="goal-box" style="font-size:30px; line-height:1.7; max-width:1040px; margin:18px auto 0;">
<div style="margin:6px 0;">- AIを試す/情報収集することは、<b>重要</b></div>
<div style="margin:6px 0;">- AIは利活用が進んでいる</div>
<div style="margin:6px 0;">- 学生が直接使う場合や扱えるデータには、<b>制限がある</b>ので、「注意点」を理解</div>
<div style="margin:6px 0; color:var(--accent);">- 自分を支援する”助手”と考える</div>
</div>

<!--
- 今日の結論、原則です。AIを試す・情報収集することは重要。AIは利活用が進んでいる。学生が直接使う場合や扱えるデータには制限があるので「注意点」を理解する。そして、自分を支援する“助手”と考える、ということです。
-->

---

<div class="page-title">2　使ってみる</div>

<div class="subhead" style="margin-top:2px;"><span class="tag tag-accent">AIの定義 (例)</span></div>

<div class="box-info" style="margin-top:2px;">
人間の思考プロセスと同じような形で動作するプログラム<br>
人間が知的と感じる情報処理やそれを行う科学・技術
</div>
<div class="cite">『R6 科学技術イノベーション白書 (第一章)』文部科学省 (2024)</div>

<div class="lead-note" style="margin-top:8px;">AIはいろいろなところにすでにある</div>

<div style="display:flex; justify-content:center;">
<img src="./src/fig-s9-napkin.png" alt="AIはすでにいろいろなところにある（製品推薦・画像分析・音声アシスタント・自動運転）" style="height:300px;" class="pip-safe">
</div>

<div class="box-warn" style="margin-top:6px; font-size:21px;" class="pip-safe"><b>注：</b>目的関数が、エンゲージや売上をあげるなど、「サービス提供側 (≠あなた)」にしか利益を与えない場合もある</div>

<div class="cite" style="margin-top:2px;">cf. 『マインドハッキング: あなたの感情を支配し行動を操るソーシャルメディア』　ワイリー (2020)</div>

<!--
- AIの種類の前に、AIの定義の例を確認します。人間の思考プロセスと同じような形で動作するプログラム、あるいは人間が知的と感じる情報処理やそれを行う科学・技術、とされています。
- AIは、製品推薦や画像分析、音声アシスタント、自動運転など、もういろいろなところにすでにあります。
- ただし注意点として、目的関数がエンゲージや売上をあげるなど、サービス提供側にしか利益を与えない場合もある、という点は覚えておいて下さい。
-->

---

<div class="page-title">2　使ってみる</div>

<div class="box-accent" style="text-align:center; font-size:28px; font-weight:800; margin-top:2px;">
大規模なデータから学習し、<br>新たなコンテンツやアイデアを生成するAIの一種
</div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:12px;">
<div style="flex:1.4;">

<div class="stepbox" style="margin:6px 0;">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">マルチモーダル</div>
<div style="font-size:22px; line-height:1.45;">テキスト、画像、音声、動画など、異なるデータ形式（モーダル）を同時に扱い、統合するAIシステム</div>
<div style="font-size:25px; margin-top:6px;">Chat GPT　　Gemini　　Claude</div>
</div>

<div style="display:flex; gap:14px;">
<div class="stepbox" style="flex:1; margin:6px 0;">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">分野特化</div>
<div style="font-size:22px;">特定の機能を持っているAI</div>
<div style="font-size:24px; margin-top:6px;">DALL·E 2　Veo　Whisper</div>
</div>
<div class="stepbox" style="flex:1; margin:6px 0;">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">ツール</div>
<div style="font-size:22px;">AIを組合せて、特定の問題解決に役立つAI</div>
<div style="font-size:24px; margin-top:6px;">napkin ai　NotebookLM</div>
</div>
</div>
<div style="font-size:20px; color:#555; text-align:right; margin-top:4px;"><b>生成AIずかん</b></div>

</div>
<div class="box-info" style="flex:1; align-self:flex-start;" >
<div style="font-weight:800;">近年、AIエージェント化</div>
<div style="font-size:22px; line-height:1.45; margin-top:4px;">AIエージェントとは、ユーザーの目標達成のために最適な手段を、自律的に選択してタスクを遂行するAIの技術</div>
<div style="font-size:22px; margin-top:6px;"><b>deep research</b>などが有名</div>
</div>
</div>

<!--
- 生成AIとは、大規模なデータから学習し、新たなコンテンツやアイデアを生成するAIの一種です。
- 種類としては、テキスト・画像・音声・動画など異なるモーダルを同時に扱うマルチモーダル(ChatGPT, Gemini, Claude)、特定の機能を持つ分野特化(DALL·E 2, Veo, Whisper)、AIを組合せて問題解決に役立つツール(napkin ai, NotebookLM)があります。
- そして近年はAIエージェント化が進んでいます。AIエージェントとは、ユーザーの目標達成のために最適な手段を自律的に選択してタスクを遂行するAIの技術で、deep researchなどが有名です。
-->

---

<div class="page-title">2　使ってみる</div>

<div style="display:flex; justify-content:center; margin-top:6px;">
<img src="./src/fig-s11-leaderboard.png" alt="LMArena リーダーボード" style="height:430px;" class="pip-safe">
</div>

<div style="display:flex; justify-content:space-between; align-items:baseline; margin-top:6px;" class="pip-safe">
<div style="font-size:26px; font-weight:700;">現時点では、Gemini がよい? (Claude opusは高い…)</div>
<div class="cite" style="margin:0;"><a href="https://lmarena.ai/leaderboard">https://lmarena.ai/leaderboard</a></div>
</div>

<!--
- 9月30日時点で最も性能がよいAIを、LMArena のリーダーボードで見てみます。現時点では Gemini がよさそうですね。Claude opus は高いですが…。
-->

---

<div class="page-title">2　使ってみる</div>

<div style="display:flex; justify-content:center; margin-top:8px;">
<img src="./src/fig-s12-capabilities.png" alt="生成AIでできること（テキスト生成・画像映像生成・音声生成・その他）" style="height:400px;" class="pip-safe">
</div>

<div class="cite" style="text-align:center;">総務省 生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</div>

<!--
- 生成AIでできることを整理します。テキスト生成では文章の作成・要約、情報検索、翻訳、議論のパートナー。画像・映像生成では写真・イラスト、アニメ等の作成。音声生成では音声・音楽の作成。その他に3Dモデルの作成などがあります。出典は総務省の「生成AIはじめの一歩」です。
-->

---

<div class="page-title">2　使ってみる</div>

# 生成AIの<span style="color:var(--accent-dark)">活用領域</span>

<div class="subhead"><span>Anthropic (2025 ArXiv) <a href="https://www.anthropic.com/research/anthropic-economic-index" style="color:var(--tag-blue); text-decoration:none;">リンク</a></span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-info" style="margin-bottom:8px;">プライバシーの保護を保った状態で、<br>400万以上のClaude.aiの会話を分析</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">何をしたか</div>
<div style="font-size:22px; line-height:1.45; margin:2px 0 8px;">→どの経済的タスクにAIが利用されているか把握<br>米国労働省のO*NET実会話DBから類似性分類</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">全体として分かったこと</div>
<div class="stepbox" style="margin:4px 0;">
<div class="st" style="line-height:1.4;">① Software 開発とWritingで半分</div>
<div class="st" style="line-height:1.4;">② 36%の職業にAIが利用されている</div>
<div class="st" style="line-height:1.4;">③ スキル増強：自動化 = 57 : 43</div>
</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">教育での利用</div>
<div style="font-size:22px;">チュータリングタスクが多い</div>

</div>
<img src="./src/fig13-anthropic-chart.png" alt="Anthropic Economic Index：職業カテゴリ別のAI利用割合" style="width:46%; align-self:flex-start; border:1px solid #ddd;">
</div>

<!--
- AnthropicのEconomic Index。プライバシーを保ったまま400万以上のClaude会話を分析し、どの経済的タスクにAIが使われているかを把握した研究。SoftwareとWritingで半分、36%の職業で利用、スキル増強と自動化が57:43、教育ではチュータリングが多い。
-->

---

<div class="page-title">2　使ってみる</div>

# 参考： <span style="color:var(--accent-dark)">職業への影響</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig14-naikakufu-scatter.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:42%; align-self:flex-start;">
<div style="flex:1;">

<div class="box-warn" style="margin-bottom:10px;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>

<div class="box-info" style="margin-bottom:10px;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>

<div class="box-accent" style="margin-bottom:10px;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

<div style="font-size:22px; color:#444;">※ 教員・研究者(自然科学系)は、青の領域</div>

</div>
</div>

<div class="cite pip-safe">内閣府(2024) 世界経済の潮流＞第1章＞p.13</div>

<!--
- 内閣府の世界経済の潮流より。職業をAIの影響(横)と補完性(縦)でプロット。事務系で代替性が高いとAIに置き換わり、補完性が高いとAIを使いこなす職業になる。物理タスク中心は影響が小さい。教員・研究者(自然科学系)は青の領域。
-->

---

<div class="page-title">3　グループ分け</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:center; margin-top:18px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:30px; font-weight:800; margin-bottom:6px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:26px; margin-left:1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

</div>
</div>

<!--
- まず大規模言語モデル(model)単体では動けない。入力・出力、そしてmcp・他のAI・ツール・参考書などとの接続が必要になる、という話の出発点。
-->

---

<div class="page-title">3　グループ分け</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:18px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:30px; font-weight:800; margin-bottom:4px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:26px; margin:0 0 22px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:30px; font-weight:800; margin-bottom:4px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:26px; margin-left:1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

</div>
</div>

<!--
- AIを組み合わせると、入力の分類・出力の分析・音声処理・画像処理など、複雑な処理ができるようになる。
-->

---

<div class="page-title">3　グループ分け</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:14px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:24px; margin:0 0 16px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:24px; margin:0 0 16px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:24px; margin-left:1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

</div>
</div>

<!--
- さらにAIに道具(RAG・データベース・書籍・時計・天気予報など)をもたせると、現実的な処理ができるようになる。
-->

---

<div class="page-title">3　グループ分け</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:12px;">
<img src="./src/fig19-robots.png" alt="model" style="width:21%;">
<div style="flex:1;">

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- 開発には、メタな視点が必要です</div>
<div style="font-size:23px; margin-left:1.1em;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</div>

</div>
</div>

<!--
- 実際に開発するとなると、CI/CD・ログ管理・出力評価・MLOps・DB・セキュリティといったメタな視点も必要になってくる。
-->

---

<div class="page-title">3　グループ分け</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:8px;">
<img src="./src/fig19-robots.png" alt="model" style="width:20%;">
<div style="flex:1;">

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- 開発には、メタな視点が必要です</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</div>

</div>
</div>

<div class="box-accent pip-safe" style="margin-top:6px;"><b>Dify</b> <span style="color:#444; font-weight:700;">Define &amp; Modify / Do It For You</span> ── この全部がある程度（=モックアップ稼働まで）できるのが、<b>AIプラットフォーム"Dify"</b></div>

<!--
- これらを一通り面倒みてくれる、つまりモックアップ稼働まで持っていけるのがAIプラットフォーム"Dify"。Define & Modify / Do It For You の略。今回の演習でこれを使う。
-->

---

<div class="page-title">3　グループ分け</div>

# Difyの<span style="color:var(--accent-dark)">3つの提供形態</span>
<style scoped>section h1 { margin-bottom: 2px; }</style>

<table style="width:100%; border-collapse:collapse; font-size:18px; margin-top:4px; line-height:1.3;">
<colgroup><col style="width:16%;"><col style="width:28%;"><col style="width:28%;"><col style="width:28%;"></colgroup>
<thead>
<tr>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#f3f5f8;"></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#DDEAF6; text-align:left;">Web SaaS 版<br><span style="font-size:16px; font-weight:400;">https://cloud.dify.ai/</span></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#DCEFE0; text-align:left;">AWS (/GCP) 版<br><span style="font-size:16px; font-weight:400;">例：https://dify.alc-test.net/</span></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#FBE7DA; text-align:left;">Local＋イントラ版<br><span style="font-size:16px; font-weight:400;">例：http://localhost/</span></th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">管理者</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">Langgenius</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">田川</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">自分</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">LLM稼働箇所</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">各社APIサーバー</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">AWS（=各社APIサーバー）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">LCL（＋AWS＝各社APIサーバー）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">使用目的</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">個人的なPoC、企業業務</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">大学業務</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">（制限なさそう…）個人情報処理、採点 etc…</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">データの学習</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">原則されない <span style="font-size:16px;">(API次第)</span></td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">されない</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">されなさそう</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">費用</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">安い（大学はAPI代実費のみ）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">中くらい（月2万円/10人）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">Mac mini(20,30)/studio(60)</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">機能</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">最高（何でもできる）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">高い（結構できる）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">中くらい（テキスト処理？）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">速さ</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">最速（ChatGPTレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">普通（我慢できるレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">遅い（APIを使うと…）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">セキュリティ</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">普通（ChatGPTレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">高い（企業向AWSレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">最高（普通のPCと同じ）</td>
</tr>
</tbody>
</table>

<div class="cite pip-safe">AWS版/GCP版でクラウドチェックリストで、機密まで扱える要件を取りたい（但し、コミュニティ版は、複数WS／マルチアカウントが出来ない）</div>

<!--
- Difyの提供形態は3つ。Web SaaS版(手軽・個人PoC向け)、AWS/GCP版(田川管理・大学業務向け)、Local+イントラ版(自分管理・最高セキュリティ)。用途とセキュリティ要件で選ぶ。
-->

---

<div class="page-title">3　グループ分け</div>

# どちらが<span style="color:var(--accent-dark)">やりたいですか</span>

<div style="font-size:22px; color:#666; margin-bottom:6px;">▣ Active poll　　86人</div>

<div style="display:grid; grid-template-columns:1fr 72px; gap:8px 12px; align-items:center; font-size:25px; margin-top:6px;">
<div>自分の専門・研究に近いことを行いたい<div style="height:22px; background:var(--tag-green); border-radius:11px; width:88%; margin-top:4px;"></div></div><div style="font-weight:800;">30%</div>
<div>音声や画像などに興味がある<div style="height:22px; background:var(--tag-green); border-radius:11px; width:88%; margin-top:4px;"></div></div><div style="font-weight:800;">30%</div>
<div>面白い学び方を提案したい<div style="height:22px; background:#9aa0a6; border-radius:11px; width:82%; margin-top:4px;"></div></div><div style="font-weight:800;">28%</div>
<div>安全性・倫理<div style="height:22px; background:#9aa0a6; border-radius:11px; width:30%; margin-top:4px;"></div></div><div style="font-weight:800;">10%</div>
<div class="pip-safe">千葉大の課題を解決したい<div style="height:22px; background:#9aa0a6; border-radius:11px; width:8%; margin-top:4px;"></div></div><div style="font-weight:800;">1%</div>
</div>

<!--
- Slidoでクラスに「どちらがやりたいか」を聞いた結果。専門・研究と音声画像が各30%、面白い学び方28%、安全性倫理10%、千葉大の課題1%。この分布をもとにグループを分けていく。
-->

---

<div class="page-title">3　グループ分け</div>

# テーマごとの<span style="color:var(--accent-dark)">グループで分かれて下さい</span>

<div class="stepbox" style="margin-top:16px;">
<div class="st">①<b>それぞれの島で5 - 6人集めて下さい。</b><br><span style="display:inline-block; margin-left:1.4em;">グループの中に知り合いは3人まで (できるだけバラけて)</span><br><span style="display:inline-block; margin-left:1.4em;">→グループを何らかの方法で決めて下さい</span></div>
</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st">②決まったら、<b>それぞれの班に分かれ、</b> <b>PCを立ち上げ、自分のグループを書いて下さい。</b><br><span style="display:inline-block; margin-left:1.4em;">→クラスルーム内の以下のファイルです。</span></div>
</div>

<div class="box-accent pip-safe" style="margin-top:16px; display:flex; align-items:center; gap:14px;"><img src="./src/fig22-classroom-icon.png" alt="グループ分けファイル" style="height:30px;"><span><b>グループ分け</b>　<span style="font-size:20px; color:#666; font-weight:400;">投稿日時 10:49</span></span></div>

<!--
- グループ分けの指示。①各島で5〜6人、知り合いは3人まででバラけて決める。②決まったら班に分かれてPCを立ち上げ、クラスルーム内のファイルに自分のグループを記入する。
-->

---

<div class="page-title">3　グループ分け</div>

# グループ分け<span style="color:var(--accent-dark)">結果</span>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:10px;">

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">専門特化グループ</div>
サーバー：gen_ai25_g1　専門1、2、3 (計17名)<br>
サーバー：gen_ai25_g2　専門4 (計6名)<br>
<span style="font-weight:800;">(合計23名)</span>
</div>

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">倫理グループ</div>
サーバー：gen_ai25_g2　倫理8 (計8名)<br>
<span style="font-weight:800;">(合計8名)</span>
</div>

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">学び方グループ</div>
サーバー：gen_ai25_g3　学び方1、2、3 (計18名)<br>
サーバー：gen_ai25_g4　学び方4、5 (計8名)<br>
<span style="font-weight:800;">(合計26名)</span>
</div>

<div class="box-info pip-safe">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">絵・音声グループ</div>
サーバー：gen_ai25_g5　絵・音声1、2 (計14名)<br>
サーバー：gen_ai25_g6　絵・音声3、4 (計12名)<br>
<span style="font-weight:800;">(合計26名)</span>
</div>

</div>

<!--
- グループ分け結果(2025/10/01時点)。専門特化23名(g1/g2)、倫理8名(g2)、学び方26名(g3/g4)、絵・音声26名(g5/g6)。各グループに割り当てたDifyサーバーを示す。順次更新。
-->

---

<div class="page-title">4　AI利活用</div>

# 必ず<span style="color:var(--accent-dark)">知ってほしいこと</span>

<div class="goal-box" style="margin:10px 0;">日常の活用において、知っていてほしいこと<br>
<span class="ind"><b>① 大学の生成AI利用に関するポリシー</b></span><br>
<span class="ind"><b>② AI自体の学習・セキュリティに関する状況</b></span><br>
<span class="ind"><b>③ 大学で提供しているAI</b></span></div>

<div class="box-warn pip-safe" style="margin-top:14px;">ChatGPT(特に無料版)の場合、<b>ユーザーの入力は原則、学習に使われる</b>(と思っておいた方が良い)。<br><b>機微を含む場合、オプトアウト(自分のデータの使用停止)をしておく</b><br><span style="font-weight:400; font-size:20px;">→ https://help.openai.com/en/articles/7730893-data-controls-faq</span></div>

<!--
- 日常でAIを使う上で必ず知ってほしい3点：①大学のポリシー、②AIの学習・セキュリティの状況、③大学で提供しているAI。特にChatGPT無料版は入力が原則学習に使われると思った方がよく、機微情報を含む場合はオプトアウトしておく。
-->

---

<div class="page-title">4　AI利活用</div>

# AIを教育で利活用する上で、必ず知ってほしいこと

<div class="subhead"><span style="color:var(--accent-dark)">千葉大学における生成AIの指針</span> <span style="font-size:22px; color:#555;">(令和5年10月13日)</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div style="font-size:23px; line-height:1.5;">
<div style="margin:6px 0;">①「生成 AI についての学び」「生成 AI を用いた学び」「生成 AI によらない学び」を<b>それぞれ推進</b></div>
<div style="margin:6px 0;">②授業での利用は、授業の目的に合致することが前提であり、合致するかは、各授業の担当教員が<b>判断</b>。<b>禁止の場合はシラバスなどに明記</b><br><span style="color:var(--accent-dark); font-weight:800;">(気になったら先生に聞きましょう！)</span></div>
<div style="margin:6px 0;">③<b>リスクや懸念に伴う禁止事項あり</b></div>
</div>

</div>
<img src="./src/fig25-qr-crop.png" alt="QRコード" style="height:190px; align-self:flex-start;">
</div>

<div class="cite" style="margin-top:2px;">https://drive.google.com/file/d/1ZultuLWXNLJ53M43ExrYG8cIfwqcCnCO/view</div>

<div class="box-accent pip-safe" style="margin-top:10px;">特に、<b>機密情報や個人情報の入力禁止</b>、生成AIにより出力された情報の<b>著作権（表現への類似性・依拠性）</b>には留意が必要です。</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead">Gemini <span style="font-weight:800;">(とGem)</span> <span style="font-size:20px; color:#555;">https://gemini.google.com/gems/view</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig26-gemini-crop.png" alt="Gemini 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;">一般的なチャットボット<br><b>gemで用途に特化した道具</b>も作れて便利<br>ただ、現在、表現と思考がちょっと硬い</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="stepbox"><div class="st"><b>画面左下</b></div></div>
<div style="text-align:center; font-size:30px; color:#888; margin:4px 0;">↓</div>
<div class="stepbox"><div class="st">⚙ 設定とヘルプ</div></div>
<div style="text-align:center; font-size:30px; color:#888; margin:4px 0;">↓</div>
<div class="stepbox"><div class="st">アクティビティ</div></div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:20px;"><b>Gemini アプリ アクティビティの仕組み</b><br>「Gemini では私のデータはどのように扱われますか？」<br>組織のデータが含まれているタスクに Gemini を使用する場合、お客様のデータが、トレーニングや改善に使用されることはありません。</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead"><b>Copilot</b> <span style="font-size:20px; color:#555;">https://copilot.microsoft.com/</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig27-copilot-crop.png" alt="Copilot 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;">一般的なチャットボット<br>Geminiと同じ事ができる。<br>(無料版は色々と出来るけど、大学版は機能少なめ)</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="box-accent pip-safe">このチャットには <b>エンタープライズ データ保護</b> が適用されます。<br>と書いてあればOK</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead">NotebookLM</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig28-notebooklm-crop.png" alt="NotebookLM 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;"><b>理解を助けるツール</b><br>大量の文章内を検索したり、音声・動画解説を使ったり、問題や暗記事項を書き出したりするのに便利</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="box-accent pip-safe" style="font-size:20px;"><b>エンタープライズ級のセキュリティとプライバシー</b><br>アップロードされたファイル、チャット、モデル出力は、人間のレビューアーが確認することも、生成 AI モデルの改善に使用されることもありません。</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# <span style="color:var(--accent-dark)">安全性の配慮：</span>大規模言語モデルを「生成AIサービス」にする
<style scoped>section h1 { font-size: 33px; margin-bottom: 2px; }</style>

<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:23px;">
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:9px 22px; font-weight:800; width:34%;">チューニング<br>・RLHF</td>
<td style="padding:9px 22px;">人間にとって自然な回答をするよう、トレーニングする (good/bad)</td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:9px 22px; font-weight:800;">ガードレールの作成</td>
<td style="padding:9px 22px;"><b style="color:var(--accent);">AIの安全性を向上させる</b><br><span style="font-size:21px;">(AIに危険/不適切なことを言わせない)</span></td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:9px 22px; font-weight:800;">倫理的課題の解決<br>バイアスの低減</td>
<td style="padding:9px 22px;">トレーニングデータ上のバイアスを減らす</td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:9px 22px; font-weight:800;">ツールの接続</td>
<td style="padding:9px 22px;">計算やweb検索など、モジュールを接続する</td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:12px;">市販のAIは、<b>人間中心の原則</b>に従い、かなりの注意して作成されている</div>

<!-- 人間のニーズ、能力、制約を最優先に考慮する -->

---

<div class="page-title">5 学び方</div>

# 生成AIの学び方 <span style="font-size:28px; color:#555;">(資料のみ)</span>

<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:20px; line-height:1.45;">
<tr style="color:#fff; background:var(--accent);">
<th style="padding:6px 12px; text-align:left; width:20%;">方法</th>
<th style="padding:6px 12px; text-align:left; width:48%;">特徴</th>
<th style="padding:6px 12px; text-align:left;">参考</th>
</tr>
<tr style="border-bottom:1px solid #e0e0e0;">
<td style="padding:8px 12px; font-weight:800;">本を読む</td>
<td style="padding:8px 12px;">◯ 自分の手で動かしてみるときに便利　◯ 情報が信頼できる　✕ １人だと難しいこともある</td>
<td style="padding:8px 12px;">(推薦はシラバスの参考書に)</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0; background:var(--section-bg);">
<td style="padding:8px 12px; font-weight:800;">YouTubeや記事を読む</td>
<td style="padding:8px 12px;">◯ 最新の情報の把握に便利　✕ 体系がない　✕ ガセがある　✕ 教育的効果がない…</td>
<td style="padding:8px 12px;">メカニズムから分かる映像　サービスが分かるAI図鑑</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0;">
<td style="padding:8px 12px; font-weight:800;">授業を受ける</td>
<td style="padding:8px 12px;">◯ 体系的な力が身につく　✕ しかし、大変</td>
<td style="padding:8px 12px;">東大松尾研究室講座/MOOC等 (現在募集中、学生無料) LLM基礎・データサイエンス</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0; background:var(--section-bg);">
<td style="padding:8px 12px; font-weight:800;">資格を取る・資格勉強する</td>
<td style="padding:8px 12px;">◯ 就活に有利　◯ 学習資料が充実しており、体系的　✕ １つあたり5000円くらいかかる</td>
<td style="padding:8px 12px;">JDLA G検定、 Google Generative AI Leader、 生成AIパスポートなど</td>
</tr>
<tr>
<td style="padding:8px 12px; font-weight:800;">上手い人の操作を見る</td>
<td style="padding:8px 12px;">◯ 自分でも使い方が分かる</td>
<td style="padding:8px 12px;">この授業の参考動画</td>
</tr>
</table>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:21px;">自分は、<b>本、授業、資格</b>で学びました。特に<b>松尾研究室の授業</b>と<b>Google Skillup boost</b>はおすすめです。</div>

---

<div class="page-title">6 まとめ</div>

# 今日達成出来たこと

<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>授業の説明</b>　gammaを使ったスライドとシラバスをご参照下さい</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>グループ分け・自己紹介</b>　無事、dify配布まで完了しました ありがとう!</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>生成AIについての認識の確認</b>　Slidoでクラスの現状を把握しました</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>DX事例の把握 /安全性など社会的な議論等の紹介</b>　宿題になっています (後者は別途説明します)</div>
</div>
<div class="stepbox pip-safe" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>千葉大で活用できる生成AI</b>　Gemini, Copilot, NotebookLMを紹介しました</div>
</div>
<div class="stepbox pip-safe" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>この授業の学び方の紹介</b>　スライド p.29をご参照下さい</div>
</div>
