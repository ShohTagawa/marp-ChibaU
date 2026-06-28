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
<div class="title-photo"><img src="./src/fig01-img.png" alt="講師の似顔絵"></div>
<div class="title-meta">
<div class="title-date">2025/10/1　講師：田川 翔</div>
<div>千葉大学 国際未来教育基幹 助教</div>
</div>
</div>

<!--
- 生成AI活用講座、第1回の後半を始めます。講師の田川です。
-->

---

<div class="page-title">自己紹介</div>

# 自己紹介

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:0 0 340px;">

<div class="box-info" style="margin-bottom:12px;">
仕事：<b>大学教育の企画</b><br>
　　　　<b>学生と教員を支援</b>
</div>

<div style="font-size:24px; line-height:1.6; margin-bottom:10px;">
専門：<b>地球の起源、AI</b><br>
地球惑星科学　博士(理学) 2020年
</div>

<div style="display:flex; gap:12px; align-items:center;">
<img src="./src/fig08-img.png" alt="Teaching with AI" style="height:150px;">
<div style="font-size:22px; line-height:1.5;"><b>翻訳：</b><br><b>来年、発売予定！</b><br><span style="color:var(--accent-dark); font-weight:800;">大学の教え方の授業</span></div>
</div>

</div>
<div style="flex:1;">

<div class="box-accent" style="margin-bottom:10px; text-align:center; font-weight:800;">海の起源の仮説検証　<span style="font-weight:400; font-size:20px;">Tagawa et al. (2021) Nat. Com.</span></div>

<div style="display:flex; gap:14px; align-items:flex-start;">
<img src="./src/fig03-img.png" alt="地球誕生と海の起源" style="height:230px;">
<div style="display:flex; flex-direction:column; gap:10px;">
<img src="./src/fig04-img.png" alt="ダイヤモンドアンビルセル" style="height:108px;">
<img src="./src/fig07-img.png" alt="高圧実験の分析結果" style="height:108px;">
</div>
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

<div class="page-title">本日使用するツール</div>

# 授業・セミナー インタラクティブ化ツール

<div class="subhead" style="font-size:24px;">✓匿名 / もしよければ、ぜひご参加下さい</div>

<div style="display:flex; gap:36px; align-items:flex-start;">
<img src="./src/fig11-img.png" alt="slido参加用QRコード" style="width:300px;">
<div style="flex:1;">

<div style="font-size:46px; font-weight:800; color:#5a5f66; line-height:1.25; margin:8px 0 22px;">Join at slido.com<br>#6732809</div>

<div class="box-accent">
<b>PCから参加の方へ</b><br>
slidoのwebページを開き、<br>
アクセスコード(7桁)を入力して下さい
</div>

</div>
</div>

<!--
- 本日はslidoという、授業やセミナーをインタラクティブにするツールを使います。匿名なので、もしよければぜひご参加ください。QRコードを読み取るか、slidoのwebページでアクセスコードを入力してください。
-->

---

<div class="page-title">今日の結論</div>

# <span style="color:var(--accent-dark)">原則</span>

<div class="goal-box" style="font-size:30px; line-height:1.7;">
<div>－　AIを試す/情報収集することは、<b>重要</b></div>
<div>－　AIは利活用が進んでいる</div>
<div>－　学生が直接使う場合や扱えるデータには、<b>制限がある</b>ので、「注意点」を理解</div>
<div style="color:var(--accent); font-weight:800;">－　自分を支援する”助手”と考える</div>
</div>

<!--
- 今日の結論、原則です。AIを試したり情報収集することは重要で、利活用も進んでいます。ただ、学生が直接使う場合や扱えるデータには制限があるので、注意点を理解しておく。そして、自分を支援する”助手”と考える、ということです。
-->

---

<div class="page-title">まずは現状を知ろう</div>

# まずは現状を知ろう　<span style="font-size:24px; color:#666;">使ったことはありますか？</span>

<div class="poll">
<div class="prow"><div class="plabel">時々</div><div class="ptrack"><div class="pbar on" style="width:86%;"></div></div><div class="pval">65%</div></div>
<div class="prow"><div class="plabel">ほぼ毎日</div><div class="ptrack"><div class="pbar" style="width:32%;"></div></div><div class="pval">24%</div></div>
<div class="prow"><div class="plabel">毎日数回以上</div><div class="ptrack"><div class="pbar" style="width:10%;"></div></div><div class="pval">7%</div></div>
<div class="prow"><div class="plabel">使わない・使うのをやめた</div><div class="ptrack"><div class="pbar" style="width:6%;"></div></div><div class="pval">4%</div></div>
</div>

<style scoped>
.poll { background:#f5f5f5; border-radius:10px; padding:22px 30px; margin-top:14px; margin-right:calc(var(--pip-w) + 8px); }
.poll .prow { display:grid; grid-template-columns:1fr; margin:14px 0; }
.poll .plabel { font-size:24px; color:#333; margin-bottom:6px; }
.poll .ptrack { display:flex; align-items:center; gap:12px; }
.poll .pbar { height:22px; border-radius:11px; background:#9aa0a6; }
.poll .pbar.on { background:#1e7d3c; }
.poll .pval { font-size:24px; color:#333; font-weight:700; }
</style>

<!--
- まずは現状を知りましょう。生成AIを使ったことはありますか、という質問です。時々が65%、ほぼ毎日が24%。多くの方がすでに使っていますね。
-->

---

<div class="page-title">まずは現状を知ろう</div>

# まずは現状を知ろう　<span style="font-size:24px; color:#666;">どんなことに使いますか？</span>

<div class="poll">
<div class="prow"><div class="plabel">課題・勉強</div><div class="ptrack"><div class="pbar on" style="width:90%;"></div></div><div class="pval">79%</div></div>
<div class="prow"><div class="plabel">相談</div><div class="ptrack"><div class="pbar" style="width:35%;"></div></div><div class="pval">31%</div></div>
<div class="prow"><div class="plabel">趣味</div><div class="ptrack"><div class="pbar" style="width:23%;"></div></div><div class="pval">20%</div></div>
<div class="prow"><div class="plabel">コーディング</div><div class="ptrack"><div class="pbar" style="width:10%;"></div></div><div class="pval">8%</div></div>
</div>

<style scoped>
.poll { background:#f5f5f5; border-radius:10px; padding:22px 30px; margin-top:14px; margin-right:calc(var(--pip-w) + 8px); }
.poll .prow { display:grid; grid-template-columns:1fr; margin:14px 0; }
.poll .plabel { font-size:24px; color:#333; margin-bottom:6px; }
.poll .ptrack { display:flex; align-items:center; gap:12px; }
.poll .pbar { height:22px; border-radius:11px; background:#9aa0a6; }
.poll .pbar.on { background:#1e7d3c; }
.poll .pval { font-size:24px; color:#333; font-weight:700; }
</style>

<!--
- どんなことに使いますか、という質問。課題・勉強が79%でトップ。相談、趣味、コーディングと続きます。
-->

---

<div class="page-title">まずは現状を知ろう</div>

# まずは現状を知ろう

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

<div class="poll" style="margin-right:0;">
<div class="ptitle">使っているのは？</div>
<div class="prow"><div class="plabel">ChatGPT(無料版)</div><div class="ptrack"><div class="pbar on" style="width:92%;"></div></div><div class="pval">85%</div></div>
<div class="prow"><div class="plabel">Gemini(大学版)</div><div class="ptrack"><div class="pbar" style="width:18%;"></div></div><div class="pval">15%</div></div>
<div class="prow"><div class="plabel">その他</div><div class="ptrack"><div class="pbar" style="width:16%;"></div></div><div class="pval">13%</div></div>
<div class="prow"><div class="plabel">Copilot(無料版)</div><div class="ptrack"><div class="pbar" style="width:14%;"></div></div><div class="pval">11%</div></div>
<div class="prow"><div class="plabel">Gemini(有料版)</div><div class="ptrack"><div class="pbar" style="width:8%;"></div></div><div class="pval">5%</div></div>
<div class="prow"><div class="plabel">ChatGPT(有料版)</div><div class="ptrack"><div class="pbar" style="width:7%;"></div></div><div class="pval">4%</div></div>
<div class="prow"><div class="plabel">Copilot(大学版)</div><div class="ptrack"><div class="pbar" style="width:7%;"></div></div><div class="pval">4%</div></div>
</div>

</div>
<div style="flex:0 0 340px; font-size:26px; line-height:1.55; padding-top:10px;">

意外にも<br>チャットGPT一強…<br><br>
後で出ますが、<br><b>オプトアウト</b>に注意<br>
<b>(自分のデータをAIの</b><br><b>学習に使わせない設計)</b>

</div>
</div>

<style scoped>
.poll { background:#f5f5f5; border-radius:10px; padding:18px 26px; }
.poll .ptitle { font-size:24px; font-weight:800; color:#333; margin-bottom:6px; padding-bottom:8px; border-bottom:1px solid #ddd; }
.poll .prow { display:grid; grid-template-columns:1fr; margin:9px 0; }
.poll .plabel { font-size:21px; color:#333; margin-bottom:3px; }
.poll .ptrack { display:flex; align-items:center; gap:10px; }
.poll .pbar { height:18px; border-radius:9px; background:#9aa0a6; }
.poll .pbar.on { background:#1e7d3c; }
.poll .pval { font-size:21px; color:#333; font-weight:700; }
</style>

<!--
- 使っているのは何ですか、という質問。意外にもチャットGPT一強でした。後で出ますが、自分のデータをAIの学習に使わせない設計＝オプトアウトには注意してください。
-->

---

<div class="page-title">まずは現状を知ろう</div>

# まずは現状を知ろう

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

<div class="poll" style="margin-right:0;">
<div class="ptitle">コーディング・開発経験 (当てはまるもの全部)</div>
<div class="prow"><div class="plabel">特に何も…</div><div class="ptrack"><div class="pbar on" style="width:92%;"></div></div><div class="pval">85%</div></div>
<div class="prow"><div class="plabel">Pythonかける</div><div class="ptrack"><div class="pbar" style="width:15%;"></div></div><div class="pval">12%</div></div>
<div class="prow"><div class="plabel">Colabo使える</div><div class="ptrack"><div class="pbar" style="width:11%;"></div></div><div class="pval">8%</div></div>
<div class="prow"><div class="plabel">深層学習の開発</div><div class="ptrack"><div class="pbar" style="width:8%;"></div></div><div class="pval">5%</div></div>
<div class="prow"><div class="plabel">機械学習の開発</div><div class="ptrack"><div class="pbar" style="width:7%;"></div></div><div class="pval">4%</div></div>
<div class="prow"><div class="plabel">AI開発の開発</div><div class="ptrack"><div class="pbar" style="width:4%;"></div></div><div class="pval">1%</div></div>
</div>

</div>
<div style="flex:0 0 340px; font-size:26px; line-height:1.55; padding-top:10px;">

承知しました。<br><b>第二回の内容を</b><br>少し簡単に修正します。<br><br>
それと、<b>開発経験の</b><br><b>ある皆様、ぜひ、他の</b><br><b>学生の支援に回って</b><br><b>下さい。</b>

</div>
</div>

<style scoped>
.poll { background:#f5f5f5; border-radius:10px; padding:18px 26px; }
.poll .ptitle { font-size:24px; font-weight:800; color:#333; margin-bottom:6px; padding-bottom:8px; border-bottom:1px solid #ddd; }
.poll .prow { display:grid; grid-template-columns:1fr; margin:9px 0; }
.poll .plabel { font-size:21px; color:#333; margin-bottom:3px; }
.poll .ptrack { display:flex; align-items:center; gap:10px; }
.poll .pbar { height:18px; border-radius:9px; background:#9aa0a6; }
.poll .pbar.on { background:#1e7d3c; }
.poll .pval { font-size:21px; color:#333; font-weight:700; }
</style>

<!--
- コーディング・開発経験の質問。特に何もという方が85%でした。承知しました、第二回の内容を少し簡単に修正します。それと、開発経験のある皆様、ぜひ、他の学生の支援に回ってください。
-->

---

<div class="page-title">AIの種類</div>

# AIの種類　<span style="font-size:24px; color:var(--accent-dark); font-weight:800;">AIはいろいろなところにすでにある</span>

<div class="box-info" style="font-size:22px;">
<b>AIの定義 (例)</b>　人間の思考プロセスと同じような形で動作するプログラム／人間が知的と感じる情報処理やそれを行う科学・技術
<div style="font-size:18px; color:#888; margin-top:2px;">『R6 科学技術イノベーション白書 (第一章)』文部科学省 (2024)</div>
</div>

<div style="display:flex; align-items:center; gap:18px; margin-top:6px;">
<img src="./src/fig16-img.png" alt="AIアプリケーションの例（製品推薦・画像分析・音声アシスタント・自動運転）" style="height:300px;">
</div>

<div class="box-warn pip-safe" style="font-size:19px; margin-top:2px;">
<b>注：目的関数が、エンゲージや売上をあげるなど、「サービス提供側 (≠あなた)」にしか利益を与えない場合もある</b>
<div class="cite" style="margin-top:2px;">cf. 『マインドハッキング: あなたの感情を支配し行動を操るソーシャルメディア』　ワイリー (2020)</div>
</div>

<!--
- AIの種類です。AIの定義はいろいろありますが、例えば「人間の思考プロセスと同じような形で動作するプログラム」など。AIはすでに製品推薦、画像分析、音声アシスタント、自動運転など、いろいろなところにあります。
- ただし注意点として、目的関数がエンゲージや売上を上げることで、サービス提供側にしか利益を与えない場合もある、ということは知っておいてください。
-->

---

<div class="page-title">生成AIってなんだ？</div>

# 生成AIってなんだ？

<div class="box-accent" style="text-align:center; font-weight:800; font-size:26px;">
大規模なデータから学習し、<br>新たなコンテンツやアイデアを生成するAIの一種
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">マルチモーダル</div>
<div style="font-size:20px; line-height:1.45;">テキスト、画像、音声、動画など、異なるデータ形式（モーダル）を同時に扱い、統合するAIシステム</div>
<div style="margin-top:8px; font-weight:800; color:var(--accent-dark);">Chat GPT　Gemini</div>
</div>
<div class="pcard">
<div class="pc-h">分野特化</div>
<div style="font-size:20px; line-height:1.45;">特定の機能を持っているAI</div>
<div style="margin-top:8px; font-weight:800; color:var(--accent-dark);">Veo　DALL·E 2　Whisper</div>
</div>
<div class="pcard">
<div class="pc-h">ツール</div>
<div style="font-size:20px; line-height:1.45;">AIを組合せて、特定の問題解決に役立つAI</div>
<div style="margin-top:8px; font-weight:800; color:var(--accent-dark);">NotebookLM　napkin ai</div>
</div>
</div>

<div class="box-info pip-safe" style="font-size:21px; margin-top:12px;">
<b>近年、AIエージェント化</b>　AIエージェントとは、ユーザーの目標達成のために最適な手段を、自律的に選択してタスクを遂行するAIの技術。<b>deep research</b>などが有名
</div>

<div class="cite pip-safe" style="text-align:right; margin-top:4px;">生成AIずかん</div>

<!--
- 生成AIってなんだ、という話。大規模なデータから学習し、新たなコンテンツやアイデアを生成するAIの一種です。
- マルチモーダルなものはChatGPTやGemini。分野特化のものはVeo、DALL·E、Whisperなど。ツールとしてはNotebookLMやnapkin aiがあります。これは生成AIずかんとしてまとめています。
- 近年はAIエージェント化が進んでいて、deep researchなどが有名です。
-->

---

<div class="page-title">最も性能がよいAI 9/30</div>

# 最も性能がよいAI　<span style="font-size:28px;">9/30</span>

<div style="text-align:center; margin-top:6px;">
<img src="./src/fig17-img.png" alt="LMArena リーダーボード（モデル別性能ランキング）" style="height:380px; border:1px solid #ccc;">
</div>

<div style="display:flex; justify-content:space-between; align-items:baseline; margin-top:8px; margin-right:calc(var(--pip-w) + 8px);">
<div style="font-size:24px; font-weight:700;">現時点では、Gemini がよい? (Claude opusは高い…)</div>
<div class="cite">https://lmarena.ai/leaderboard</div>
</div>

<!--
- 最も性能がよいAIはどれか。これは9月30日時点のLMArenaのリーダーボードです。現時点ではGeminiがよさそうですね。Claude opusは性能は高いんですが、値段も高いです。
-->

---

<div class="page-title">生成AIでできること</div>

# 生成AIでできること

<div style="text-align:center; margin-top:6px;">
<img src="./src/fig12b-can-do-grid.png" alt="生成AIでできること：テキスト生成・画像映像生成・音声生成・その他" style="height:420px;">
</div>

<div class="cite pip-safe" style="text-align:center;">総務省 生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</div>

<!--
- 生成AIでできることをまとめた図です。テキスト生成では文章の作成・要約、情報検索、翻訳、議論のパートナー。画像・映像生成、音声生成、その他では3Dモデルの作成などができます。総務省の資料を参考にしています。
-->

---

<div class="page-title">生成AIでできること</div>

# 生成AIの<span style="color:var(--accent-dark)">活用領域</span>

<div class="subhead"><span class="tag tag-accent">2 使ってみる</span><span>Anthropic (2025 ArXiv) <a href="#" style="color:var(--tag-blue); text-decoration:none;">リンク</a></span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-info" style="margin:6px 0 12px;">プライバシーの保護を保った状態で、<br>400万以上のClaude.aiの会話を分析</div>

<div class="lead-note" style="color:var(--accent-dark);">何をしたか</div>
<div style="font-size:23px; line-height:1.55; margin-left:6px;">
→どの経済的タスクにAIが利用されているか把握<br>
米国労働省のO*NET実会話DBから類似性分類
</div>

<div class="lead-note" style="color:var(--accent-dark); margin-top:14px;">全体として分かったこと</div>
<div style="font-size:23px; line-height:1.6; margin-left:6px;">
① Software 開発とWritingで半分<br>
② 36%の職業にAIが利用されている<br>
③ スキル増強：自動化 = 57 : 43
</div>

<div class="box-accent" style="margin-top:14px;"><b>教育での利用</b>　チュータリングタスクが多い</div>

</div>
<img src="./src/fig13-anthropic-chart.png" alt="職業大分類ごとのAI利用量" style="width:540px; align-self:flex-start;">
</div>

<!--
- Anthropicが400万件以上のClaude.aiの会話を、プライバシーを守った状態で分析した研究。どの経済的タスクにAIが使われているかを、米国労働省のO*NET職業データベースと突き合わせて分類した。
- 分かったこと：①ソフトウェア開発とライティングで全体の半分、②36%の職業でAIが使われている、③スキルの増強（補助）と自動化は57対43。
- 教育分野ではチュータリング（個別指導）タスクが多い。
-->

---

<div class="page-title">AIは仕事のどこに影響するか</div>

# 参考：<span style="color:var(--accent-dark)">職業への影響</span>

<div class="subhead"><span class="tag tag-accent">2 使ってみる</span><span><b>内閣府(2024)</b> 世界経済の潮流 ＞第1章＞p.13</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig14-scatter.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:430px; align-self:flex-start;">
<div style="flex:1;">

<div class="box-warn" style="margin:2px 0 10px;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>

<div class="box-info" style="margin:10px 0;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>

<div class="box-accent" style="margin:10px 0;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

</div>
</div>

<div class="lead-note pip-safe" style="color:var(--accent-dark); margin-top:6px;">※ 教員・研究者(自然科学系)は、青の領域</div>

<!--
- 内閣府の「世界経済の潮流」より、職業へのAIの影響を整理した図。
- 代替性が高い職業＝事務的タスクが多く、AIに置き換わってしまう。補完性が高い職業＝事務的だが意思決定が重要で、AIを使いこなす必要がある。影響が小さい職業＝物理的タスクが多い。
- 教員・研究者（自然科学系）は補完性の高い「青の領域」に入る。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:34px; align-items:center; margin-top:30px;">
<img src="./src/fig15-model.png" alt="modelのイラスト" style="width:280px;">
<div style="flex:1;">
<div style="font-size:30px; line-height:1.6;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
</div>
</div>

<!--
- ここからDifyを使った演習。まず大前提として、AIの「モデル」だけでは何もできない。
- 入力・出力・他システムとの接続（mcp、別のAI、ツール、参考書など）があって初めて動く。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:34px; align-items:center; margin-top:24px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:250px;">
<div style="flex:1;">
<div style="font-size:28px; line-height:1.55;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:28px; line-height:1.55; margin-top:22px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
</div>
</div>

<!--
- モデルを組み合わせることで、複雑な処理ができるようになる。
- 例：入力の分類、出力の分析、音声処理、画像処理など。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:30px; align-items:center; margin-top:18px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:230px;">
<div style="flex:1;">
<div style="font-size:25px; line-height:1.5;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:25px; line-height:1.5; margin-top:16px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:25px; line-height:1.5; margin-top:16px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
</div>
</div>

<!--
- さらにAIに「道具」を持たせると、現実的な処理ができる。
- RAG（検索拡張生成）、データベース、書籍、時計、天気予報など。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:30px; align-items:center; margin-top:14px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:210px;">
<div style="flex:1;">
<div style="font-size:24px; line-height:1.45;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>開発には、メタな視点が必要です</b><br>
<span style="margin-left:1.4em; font-weight:500;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</span>
</div>
</div>
</div>

<!--
- そして実際に開発するには、メタな視点（運用・管理の視点）も必要になる。
- CI/CD、ログ管理、出力評価、MLOps、データベース、セキュリティなど。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:26px; align-items:flex-start; margin-top:10px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:185px;">
<div style="flex:1;">
<div style="font-size:23px; line-height:1.4;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>開発には、メタな視点が必要です</b><br>
<span style="margin-left:1.4em; font-weight:500;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</span>
</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px;"><b>Dify</b>（Define &amp; Modify / Do It For You）＝この全部がある程度（モックアップ稼働まで）できるのが、<b>AIプラットフォーム"Dify"</b></div>

<!--
- これらをある程度まとめて、モックアップが動くところまでできるのが、AIプラットフォームの「Dify」。
- DifyはDefine & Modify / Do It For You の略。今日はこれを使う。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<table style="width:100%; border-collapse:collapse; font-size:21px; line-height:1.4; margin-top:6px;">
<tr style="background:var(--section-bg);">
<th style="border:1px solid #cfd6df; padding:5px 8px; width:13%;"></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">Web SaaS 版<br><span style="font-weight:500; font-size:18px;">https://cloud.dify.ai/</span></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">AWS (/GCP) 版<br><span style="font-weight:500; font-size:18px;">例 https://dify.alc-test.net/</span></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">Local＋イントラ版<br><span style="font-weight:500; font-size:18px;">例 http://localhost/</span></th>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">管理者</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">Langgenius</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">田川</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">あなた</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">LLM稼働箇所</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">各社APIサーバー</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">AWS<br><span style="font-size:18px;">(各社APIサーバー)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">LCL (＋AWS＋各社APIサーバー)</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">使用目的</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">個人的なPoCや、企業業務</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">大学業務</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">(制限なくきちんと)</span> 個人的な開発、操作、…</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">データの学習</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">原則されない<span style="font-size:18px;">(API注意)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">されない</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">されない</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">費用</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">安い<span style="font-size:18px;">(大学はAPI代実費のみ)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">中くらい<span style="font-size:18px;">(月2万円/10人)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">Mac<br><span style="font-size:18px;">mini(20.3万)studio(60万)</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">機能</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最高<span style="font-size:18px;">(何でもできる)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最高<span style="font-size:18px;">(結構できる)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">テキスト処理？</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">速度</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最速<span style="font-size:18px;">(ChatGPTレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">普通<span style="font-size:18px;">(独賃でき るレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">遅 (APIを使うと…速い)</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">セキュリティ</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最低<span style="font-size:18px;">(ChatGPTレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">普通<span style="font-size:18px;">(企業向AWSレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">最高(自分のPCと同じ)</span></td>
</tr>
</table>

<div class="box-info pip-safe" style="margin-top:8px; font-size:21px;">AWS/GCP版でクラウドチェックリストで、機密どまで扱える要件を取りたい<br><span style="font-size:18px;">(但し、コミュニティ版は、複数WS / マルチアカウントが出来ない)</span></div>

<!--
- Difyには3つの動かし方がある。Web SaaS版（クラウド）、AWS/GCP版（大学が管理）、ローカル+イントラ版（自分のPC）。
- 管理者・LLMの稼働箇所・使用目的・データの学習・費用・機能・速度・セキュリティで一長一短。今日はこの中から選んで使う。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="background:#f4f4f4; border:1px solid #e0e0e0; border-radius:10px; padding:18px 28px; margin-top:18px; margin-right:calc(var(--pip-w) + 24px);">
<div style="display:flex; justify-content:space-between; align-items:center; color:#555; font-size:21px; border-bottom:1px solid #ddd; padding-bottom:8px; margin-bottom:14px;"><span>▦ Active poll</span><span>86 ⚇</span></div>
<div style="font-size:26px; font-weight:800; margin-bottom:18px;">どちらがやりたいですか</div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">自分の専門・研究に近いことを行いたい</div><div style="height:20px; width:90%; background:var(--tag-green); border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">30%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">音声や画像などに興味がある</div><div style="height:20px; width:90%; background:var(--tag-green); border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">30%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">面白い学び方を提案したい</div><div style="height:20px; width:84%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">28%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">安全性・倫理</div><div style="height:20px; width:30%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">10%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">千葉大の課題を解決したい</div><div style="height:20px; width:6%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">1%</div></div>
</div>

<!--
- では、どのテーマで演習したいかをライブ投票（slido）で聞いてみましょう。
- 自分の専門・研究に近いこと、音声や画像、面白い学び方、安全性・倫理、千葉大の課題、の5つから選ぶ。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div class="box-accent" style="font-size:28px; text-align:center; margin:14px auto 18px; max-width:760px;"><b>テーマごとのグループで分かれて下さい</b></div>

<div class="stepbox">
<div class="st">① <b>それぞれの島で5 - 6人集めて下さい。</b><br><span style="font-size:23px;">　 グループの中に知り合いは3人まで (できるだけバラけて)<br>　 →グループを何らかの方法で決めて下さい</span></div>
</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st">② 決まったら、<b>それぞれの班に分かれ、</b> <b>PCを立ち上げ、自分のグループを書いて下さい。</b><br><span style="font-size:23px;">　 →クラスルーム内の以下のファイルです。</span></div>
</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:21px;">▣ グループ分け　<span style="color:#888;">投稿日: 10:49</span></div>

<!--
- ではグループ分けをします。テーマごとのグループに分かれてください。
- ①各島で5〜6人集める（知り合いは3人まで、できるだけバラけて）。②決まったら班に分かれてPCを立ち上げ、Classroom内のファイルに自分のグループを書く。
-->

---

<div class="page-title">グループ分け結果 (2025/10/01時点 ※ 順次更新します)</div>

# グループ分け結果<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">専門特化グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g1</b><br>　専門1、2、3 (計17名)<br>サーバー：<b>gen_ai25_g2</b><br>　専門4 (計6名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計23名)</div>
</div>
<div class="pcard">
<div class="pc-h">倫理グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g2</b><br>　倫理8 (計8名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計8名)</div>
</div>
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">学び方グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g3</b><br>　学び方1、2、3 (計18名)<br>サーバー：<b>gen_ai25_g4</b><br>　学び方4、5 (計8名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計26名)</div>
</div>
<div class="pcard">
<div class="pc-h">絵・音声グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g5</b><br>　絵・音声1、2 (計14名)<br>サーバー：<b>gen_ai25_g6</b><br>　絵・音声3、4 (計12名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計26名)</div>
</div>
</div>

<!--
- これが現時点のグループ分けの結果。専門特化、倫理、学び方、絵・音声の4テーマで、それぞれサーバー（Dify環境）を割り当てている。順次更新します。
-->

---

<div class="page-title">AIを教育で利活用する上で、必ず知ってほしいこと</div>

# AI利活用で<span style="color:var(--accent-dark)">知ってほしいこと</span><span class="tag tag-accent" style="font-size:24px;">4 AI利活用</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">
<div style="flex:1;">

<div class="goal-box" style="font-size:23px; padding:14px 22px;">
日常の活用において、知っていてほしいこと<br>
　<b>① 大学の生成AI利用に関するポリシー</b><br>
　<b>② AI自体の学習・セキュリティに関する状況</b><br>
　<b>③ 大学で提供しているAI</b>
</div>

<div class="box-warn" style="margin-top:16px;">ChatGPT(特に無料版)の場合、<br><b>ユーザーの入力は原則、学習に使われる</b><br><span style="font-size:21px; font-weight:500; color:#8a4b00;">(と思っておいた方が良い)。</span></div>

<div class="box-info" style="margin-top:12px; font-size:21px;"><b>機微を含む場合、オプトアウト(自分のデータの使用停止)をしておく</b><br>→ https://help.openai.com/en/articles/7730893-data-controls-faq</div>

</div>
<img src="./src/fig24-policy.png" alt="OpenAIの個人情報の利用目的に関する記載" style="width:560px; align-self:flex-start;">
</div>

<!--
- AIを教育で使う上で、必ず知ってほしいことが3つ。①大学のポリシー、②AIの学習・セキュリティの状況、③大学が提供しているAI。
- 特にChatGPTの無料版は、入力が原則として学習に使われると思っておいた方がよい。機微な情報を含む場合は、オプトアウト（データの使用停止）を設定しておくこと。
-->

---

<div class="page-title">AIを教育で利活用する上で、必ず知ってほしいこと</div>

# 千葉大学における生成AIの指針<span style="font-size:26px; font-weight:600; color:#555;">（令和5年10月13日）</span>

<div class="bgroup" style="margin-top:14px;">
<div class="bg-label">指針</div>
<div class="bg-items">
<div>①「生成AIについての学び」「生成AIを用いた学び」<br>　「生成AIによらない学び」を<b>それぞれ推進</b></div>
<div>②授業での利用は、授業の目的に合致することが前提であり、合致するかは、各授業の担当教員が<b>判断</b><br>　禁止の場合はシラバスに明記<span style="color:var(--accent-dark); font-weight:800;">（気になったら先生に聞きましょう！）</span></div>
<div>③<b>リスクや懸念に伴う禁止事項</b>あり</div>
</div>
</div>

<div class="cite">https://drive.google.com/file/d/1ZuItuLWXNLJ53M43ExrYG8clfwqcCnCO/view</div>

<div class="box-warn pip-safe" style="margin-top:14px;">特に、<b>機微情報や個人情報の入力禁止</b>、生成AIにより出力された情報の<b>著作権</b>（表現への類似性・依拠性）には留意が必要。</div>

<!--
- 千葉大の生成AI指針。①AIについて学ぶ・AIを使って学ぶ・AIを使わずに学ぶの3つをそれぞれ推進。②授業で使うかは担当教員が判断、禁止ならシラバスに明記。気になったら先生に聞いてください。③リスクに応じた禁止事項あり。
- とくに、機微情報・個人情報は入力しない。出力物の著作権（類似性・依拠性）にも注意。
-->

---

<div class="page-title">学内で使えるツール</div>

# Gemini <span class="tag tag-accent" style="font-size:26px;">とGem</span> <span style="font-size:22px; font-weight:600; color:#666;">https://gemini.google.com/gems/view</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">

<div style="flex:1.2;">
<img src="./src/fig26-gemini-chat.png" alt="Gemini チャット画面" style="width:100%; border:1px solid #ccc; border-radius:8px;">
<div class="box-info" style="margin-top:12px;">一般的なチャットボット<br><b>gemで用途に特化した道具</b>も作れて便利<br>ただ、現在、表現と思考がちょっと硬い</div>
</div>

<div style="flex:0.8;">
<div class="subhead" style="justify-content:center;"><span style="color:var(--accent-dark);">セキュリティの確認</span></div>
<div style="font-size:21px; color:#555; text-align:center; margin-bottom:6px;">画面左下</div>
<div class="stepbox" style="text-align:center;"><div class="st">⚙ 設定とヘルプ</div></div>
<div style="text-align:center; font-size:30px; color:var(--accent);">↓</div>
<div class="stepbox" style="text-align:center;"><div class="st">アクティビティ</div></div>
<div style="text-align:center; font-size:30px; color:var(--accent);">↓</div>
<div class="stepbox" style="text-align:center;"><div class="st">Gemini アプリ アクティビティ</div></div>
</div>

</div>

<!--
- 学内で使えるツールその1、Gemini。一般的なチャットボットで、Gemで用途に特化した道具も作れて便利。ただ現状、表現と思考が少し硬い。
- セキュリティの確認は画面左下から。設定とヘルプ → アクティビティ → Geminiアプリアクティビティ、で学習に使われるかを確認できる。
-->

---

<div class="page-title">学内で使えるツール</div>

# Copilot <span style="font-size:22px; font-weight:600; color:#666;">https://copilot.microsoft.com/</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">

<div style="flex:1.2;">
<img src="./src/fig27-copilot-chat.png" alt="Copilot チャット画面" style="width:100%; border:1px solid #ccc; border-radius:8px;">
<div class="box-info" style="margin-top:12px;">一般的なチャットボット<br>Geminiと同じ事ができる。<br>(無料版は色々と出来るけど、大学版は機能少なめ)</div>
</div>

<div style="flex:0.8;">
<div class="subhead" style="justify-content:center;"><span style="color:var(--accent-dark);">セキュリティの確認</span></div>
<div class="box-accent">このチャットには<br><b>エンタープライズ データ保護</b> が適用されます。<br>と書いてあればOK</div>
</div>

</div>

<!--
- 学内で使えるツールその2、Copilot。これも一般的なチャットボットで、Geminiと同じことができる。無料版はいろいろできるが、大学版は機能少なめ。
- セキュリティの確認は、「このチャットにはエンタープライズ データ保護が適用されます」と書いてあればOK。
-->

---

<div class="page-title">学内で使えるツール</div>

# NotebookLM <span style="font-size:24px; font-weight:700; color:var(--accent-dark);">理解を助けるツール</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">

<div style="flex:1.3;">
<img src="./src/fig28-notebooklm.png" alt="NotebookLM 画面" style="width:100%; border:1px solid #ccc; border-radius:8px;">
</div>

<div style="flex:0.7;">
<div class="subhead" style="justify-content:center;"><span style="color:var(--accent-dark);">セキュリティの確認</span></div>
<div class="box-accent">大量の文章内を検索したり、音声・動画解説を使ったり、問題や暗記事項を書き出したりするのに便利</div>
</div>

</div>

<!--
- 学内で使えるツールその3、NotebookLM。理解を助けるツール。大量の文章の中を検索したり、音声・動画での解説を使ったり、問題や暗記事項を書き出したりするのに便利。
-->

---

<div class="page-title">生成AIの学び方 (資料のみ)</div>

# 生成AIの学び方<span class="tag tag-accent" style="font-size:24px;">5 学び方</span>

<table style="width:100%; border-collapse:collapse; font-size:18px; line-height:1.35; margin-top:4px;">
<colgroup><col style="width:16%"><col style="width:42%"><col style="width:42%"></colgroup>
<tbody>
<tr>
<td style="border:1px solid #bbb; padding:5px 10px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">本を読む</td>
<td style="border:1px solid #bbb; padding:5px 10px;">◯ 生成AIを実際に自分の手で動かしてみるときに便利<br>◯ 情報が信頼できる<br>✕ １人だと難しいこともある</td>
<td style="border:1px solid #bbb; padding:5px 10px;">(推薦はシラバスの参考書に)</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 10px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">YouTubeや記事を読む</td>
<td style="border:1px solid #bbb; padding:5px 10px;">◯ 最新の情報の把握に便利<br>✕ 体系がない<br>✕ ガセがある</td>
<td style="border:1px solid #bbb; padding:5px 10px;">メカニズムから分かる映像<br><span style="color:var(--tag-blue);">https://www.youtube.com/@3Blue1BrownJapan</span><br>サービスが分かるAI図鑑<br><span style="color:var(--tag-blue);">https://weel.co.jp/media/tech-category/ai-dictionary/</span></td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 10px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">授業を受ける</td>
<td style="border:1px solid #bbb; padding:5px 10px;">◯ 体系的な力が身につく<br>✕ しかし、大変</td>
<td style="border:1px solid #bbb; padding:5px 10px;">東大松尾研究室講座 (現在募集中、学生無料)<br>LLM基礎・データサイエンス</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 10px; font-weight:800; background:var(--accent-soft); color:var(--accent-dark);">資格を受ける</td>
<td style="border:1px solid #bbb; padding:5px 10px;">◯ 就活に有利<br>◯ 学習資料が充実<br>✕ １つあたり5000円くらいかかる</td>
<td style="border:1px solid #bbb; padding:5px 10px;">JDLA G検定、<br>Google Generative AI Leader、<br>生成AIパスポートなど</td>
</tr>
</tbody>
</table>

<div class="box-accent pip-safe" style="margin-top:8px;">自分は、本、授業、資格で学びました。特に<b>松尾研究室の授業</b>と<b>Google Skillup boost</b>はおすすめ。</div>

<!--
- 生成AIの学び方は資料のみ。本を読む、YouTubeや記事、授業を受ける、資格を受ける、の4ルート。それぞれ長所短所がある。
- 自分は本・授業・資格で学んだ。特に松尾研究室の授業と Google Skillup boost がおすすめ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">6　まとめ</div>

# 今日達成出来たこと

<!--
- それでは、最後にまとめです。今日達成できたことを振り返りましょう。
-->
