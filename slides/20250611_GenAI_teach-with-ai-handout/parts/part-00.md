<!-- _class: cover -->

<div class="page-title">1　イントロ</div>

# 生成AIと教える

<div style="font-size:27px; line-height:1.6; margin-top:32px;">2025/06/11 宮崎東高校講演会<br>講師：田川 翔<br><span style="font-size:23px;">千葉大学 国際未来教育基幹 助教</span></div>

<div class="box-accent pip-safe" style="margin-top:28px; font-weight:800;">教員の皆様：途中退出・参加自由・内職OKです</div>

<!--
- 生成AIと教える、というテーマで宮崎東高校講演会を始めます。講師は千葉大学 国際未来教育基幹 助教の田川翔です。
- 教員の皆様は、途中退出・参加自由・内職OKです。
-->

---

<div class="page-title">自己紹介</div>

# 自己紹介

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-size:24px; line-height:1.6;">仕事：<b>大学教育の企画</b>　／　<b>学生と教員を支援</b></div>
<div style="font-size:24px; margin-top:8px;">専門：<b>地球の起源、AI</b><br><span style="font-size:21px;">地球惑星科学  博士(理学) 2020年</span></div>

<div class="box-info" style="margin:12px 0; font-size:22px;"><b>海の起源の仮説検証</b><br>Tagawa et al. (2021) <i>Nat. Com.</i></div>

<div style="display:flex; gap:14px; align-items:flex-start; margin-top:10px;">
<img src="./src/fig02b-capv.png" alt="Ca-Pv silicate melt の科学画像" style="width:200px; border:1px solid #e3e8f0; border-radius:6px;">
<div style="font-size:22px;"><b>翻訳：</b><br>『大学の教え方の授業』<br><span style="color:var(--accent-dark); font-weight:800;">来年、発売予定！</span></div>
</div>
</div>

<div style="flex:0 0 360px;">
<img src="./src/fig01a-portrait.png" alt="講師の似顔絵（ChatGPT作成）" style="width:170px; border-radius:8px; float:left; margin:0 12px 6px 0;">
<img src="./src/fig02a-magma.png" alt="地球誕生時を再現し、海の起源を探る模式図" style="width:170px; border:1px solid #e3e8f0; border-radius:6px;">
<div class="cite" style="margin-top:4px;">地球誕生時を再現し、海の起源を探る</div>
</div>

</div>

<!--
- 始める前に簡単に自己紹介を。田川翔といいます。現在は千葉大学で教育企画の仕事を行っている教員で、研究テーマは大学教育と生成AIの関係です。
- この似顔絵はポスターを真似てChatGPTに描いてもらいました。もともとの研究テーマは地球の起源、海の量がなぜ決まったのかです。博士課程まで超高圧・高温の実験をしていました。来年、『大学の教え方の授業』の翻訳も発売予定です。
-->

---

<div class="page-title">今日の目的</div>

# 今日の<span style="color:var(--accent-dark)">目的</span>

<div style="font-size:25px; line-height:1.85;">
<div>1.　イントロ / <b>職場が持つAIの印象を知る</b></div>
<div>2.　<b>AIを実際に使ってみる</b></div>
<div>3.　<b>AIの背景にある考え方</b>を知る</div>
<div>4.　<b>教育利用上の注意点</b>を知る <span style="font-size:21px; color:#555;">(時間がない場合省略)</span></div>
<div>5.　<b>活用例で、</b>体験する <span style="font-size:21px; color:#555;">(時間がない場合省略)</span></div>
<div>6.　<b>教育応用を考えてみる</b></div>
<div>7.　教育応用のアイデアを共有し、AIをどう使うか考える</div>
</div>

<div class="box-accent takeaway" style="margin-top:12px; font-weight:800; text-align:center;">各セッション 15分 / 途中休憩あり / 部分受講可</div>

<!--
- 今日の目的です。1イントロで職場が持つAIの印象を知り、2AIを実際に使ってみて、3AIの背景にある考え方を知る。4教育利用上の注意点、5活用例での体験は時間がなければ省略します。6教育応用を考え、7アイデアを共有してAIをどう使うか考えます。
- 各セッション15分、途中休憩あり、部分受講可です。
-->

---

<div class="page-title">今日の結論</div>

# 今日の<span style="color:var(--accent-dark)">結論</span>　<span class="tag tag-soft" style="font-size:24px;">原則</span>

<div class="goal-box" style="margin-top:18px; line-height:1.7;">
<div>－　AIを試す/情報収集することは、<b>重要</b></div>
<div>－　多くのAIは、<b>安全性に配慮されている</b></div>
<div>－　学生が直接使う場合や扱えるデータには、<b>制限がある</b>ので、<br>　　　「注意点」を理解</div>
<div style="color:var(--accent-dark); font-weight:800;">－　先生の仕事を支援する”助手”と考える</div>
</div>

<!--
- 今日の結論、原則です。AIを試す・情報収集することは重要。多くのAIは安全性に配慮されている。学生が直接使う場合や扱えるデータには制限があるので「注意点」を理解する。そして、先生の仕事を支援する“助手”と考える、ということです。
-->

---

<div class="page-title">AIの種類</div>

# AIの<span style="color:var(--accent-dark)">種類</span>

<div class="box-info" style="margin:4px 0 10px; font-size:22px;"><b>AIの定義 (例)</b>：人間の思考プロセスと同じような形で動作するプログラム／人間が知的と感じる情報処理やそれを行う科学・技術<br><span class="cite" style="display:block; margin-top:2px;">『R6 科学技術イノベーション白書 (第一章)』文部科学省 (2024)</span></div>

<div style="font-size:24px; font-weight:800; margin:6px 0 4px;">AIはいろいろなところにすでにある</div>

<img src="./src/fig05a-aihands.png" alt="製品推薦・画像分析・音声アシスタント・自動運転などにAIが使われている図" style="width:560px; display:block; margin:2px auto; border:1px solid #e3e8f0; border-radius:6px;">

<div class="box-warn pip-safe" style="margin-top:8px; font-size:21px;"><b>注：目的関数が、エンゲージや売上をあげるなど、「サービス提供側 (≠あなた)」にしか利益を与えない場合もある</b><br><span class="cite" style="color:#7a4b00;">cf. 『マインドハッキング: あなたの感情を支配し行動を操るソーシャルメディア』ワイリー (2020)</span></div>

<!--
- AIの定義の例。人間の思考プロセスと同じように動作するプログラム、人間が知的と感じる情報処理やそれを行う科学・技術です。AIはすでに製品推薦・画像分析・音声アシスタント・自動運転など、いろいろなところにあります。
- 注意として、AIの目的関数が、エンゲージや売上をあげるなど「サービス提供側(≠あなた)」にしか利益を与えない場合もあります。
-->

---

<div class="page-title">生成AIってなんだ？</div>

# <span style="color:var(--accent-dark)">生成AI</span>ってなんだ？

<div class="box-accent" style="margin:4px 0 10px; text-align:center; font-weight:800;">大規模なデータから学習し、新たなコンテンツやアイデアを生成するAIの一種</div>

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1;">
<div class="pcard">
<div class="pc-h">マルチモーダル</div>
<div style="font-size:20px;">テキスト、画像、音声、動画など、異なるデータ形式（モーダル）を同時に扱い、統合するAIシステム</div>
<div style="font-weight:800; color:var(--accent-dark); margin-top:6px;">Chat GPT　Gemini</div>
</div>
</div>

<div style="flex:1;">
<div class="pcard">
<div class="pc-h">分野特化</div>
<div style="font-size:20px;">特定の機能を持っているAI</div>
<div style="font-weight:800; color:var(--accent-dark); margin-top:6px;">DALL·E 2　Veo　Whisper</div>
</div>
</div>

<div style="flex:1;">
<div class="pcard">
<div class="pc-h">ツール</div>
<div style="font-size:20px;">AIを組合せて、特定の問題解決に役立つAI</div>
<div style="font-weight:800; color:var(--accent-dark); margin-top:6px;">NotebookLM　napkin ai</div>
</div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;"><b>近年、AIエージェント化</b>：AIエージェントとは、ユーザーの目標達成のために最適な手段を、自律的に選択してタスクを遂行するAIの技術。deep researchなどが有名</div>

<!--
- 生成AIとは、大規模なデータから学習し、新たなコンテンツやアイデアを生成するAIの一種です。テキスト・画像・音声・動画を扱うマルチモーダル（ChatGPT、Gemini）、特定機能の分野特化（DALL·E 2、Veo、Whisper）、組合せて問題解決に役立つツール（NotebookLM、napkin ai）があります。
- 近年はAIエージェント化が進んでいます。エージェントとは、ユーザーの目標達成のために最適な手段を自律的に選択してタスクを遂行する技術で、deep researchなどが有名です。
-->

---

<div class="page-title">最も性能がよいAI 2025/6/12</div>

# 最も性能がよいAI <span style="font-size:28px; color:var(--accent-dark);">2025/6/12</span>

<img src="./src/fig07a-leaderboard.png" alt="LM Arena chatbot arena leaderboard のスクリーンショット" style="width:100%; max-height:560px; object-fit:contain; border:1px solid #e3e8f0; border-radius:6px;">

<div class="cite pip-safe" style="margin-top:6px;">https://huggingface.co/spaces/lmarena-ai/chatbot-arena-leaderboard</div>

<!--
- 2025年6月12日時点で最も性能がよいAIのランキングです。LM Arenaのchatbot arena leaderboardから。総合だけでなく、難問・コーディング・数学・創作・指示追従などカテゴリ別に評価されています。日々入れ替わるので、最新を確認しましょう。
-->

---

<div class="page-title">生成AIでできること</div>

# 生成AIで<span style="color:var(--accent-dark)">できること</span>

<img src="./src/fig08a-dekiru.png" alt="テキスト生成・画像映像生成・音声生成・その他のカテゴリで生成AIでできることをまとめた図" style="width:100%; max-height:580px; object-fit:contain;">

<div class="cite pip-safe" style="margin-top:4px;"><b>総務省 生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</b></div>

<!--
- 生成AIでできることを整理した図です。テキスト生成では文章の作成・要約、情報検索、翻訳、議論のパートナー。画像・映像生成では写真・イラスト・アニメ等の作成。音声生成では音声・音楽の作成。その他に3Dモデルの作成などがあります。総務省「生成AIはじめの一歩」より。
-->

---

<div class="page-title">生成AIでできること</div>

# 生成AIの<span style="color:var(--accent-dark)">活用領域</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark); font-size:22px;">何をしたか</div>
<div class="box-info" style="font-size:21px; margin:4px 0 10px;">プライバシーの保護を保った状態で、400万以上のClaude.aiの会話を分析<br>→どの経済的タスクにAIが利用されているか把握<br>米国労働省のO*NET実会話DBから類似性分類</div>

<div style="font-weight:800; color:var(--accent-dark); font-size:22px;">全体として分かったこと</div>
<div style="font-size:22px; line-height:1.6; margin-top:4px;">
① Software 開発とWritingで半分<br>
② 36%の職業にAIが利用されている<br>
③ スキル増強：自動化 = 57 : 43
</div>

<div class="box-accent" style="margin-top:10px; font-size:22px;"><b>教育での利用</b>：チュータリングタスクが多い</div>
</div>

<div style="flex:0 0 470px;">
<img src="./src/fig09a-anthropic.png" alt="Anthropic 経済指標：職業ごとのAI利用割合の図" style="width:100%; border:1px solid #e3e8f0; border-radius:6px;">
<div class="cite" style="margin-top:4px;">Anthropic (2025 ArXiv)</div>
</div>

</div>

<!--
- 生成AIの活用領域について、Anthropicの2025年のArXiv論文から。プライバシーを保った状態で400万以上のClaude.aiの会話を分析し、どの経済的タスクにAIが使われているかを、米国労働省のO*NET実会話DBから類似性分類で把握しました。
- 全体として、①ソフトウェア開発とWritingで半分、②36%の職業にAIが利用されている、③スキル増強と自動化の比は57対43。教育での利用ではチュータリングタスクが多いことが分かりました。
-->

---

<div class="page-title">ワーク：AIを使ってみる</div>

# ワーク：<span style="color:var(--accent-dark)">AIを使ってみる</span>

<div class="stepbox" style="margin:6px 0;">
<div class="st"><b>Step 1)</b> <b>Gemini か、MS copilot</b>など、<b>学校で使われているAI</b>を開いて下さい。</div>
</div>

<div class="stepbox" style="margin:6px 0;">
<div class="st"><b>Step 2)</b> 以下のプロンプトをそれぞれ流してみて下さい。</div>
<div style="font-size:21px; margin-left:1.4em; line-height:1.5;">・生成AIとはなにか、説明して下さい。<br>・わかりにくいので、高校生にも分かるよう、説明して下さい<br>・(わかりにくい場合) わかりにくいので、3文で説明して下さい</div>
</div>

<div class="stepbox" style="margin:6px 0;">
<div class="st"><b>Step 3)</b> 意図的にハルシネーションさせてみましょう (例)</div>
<div style="font-size:21px; margin-left:1.4em; line-height:1.5;">・宮崎東高の校長先生は誰ですか？<br>・地球の核に水はどのくらいありますか<br>・5 cmの綿に、10 cmのレンがを乗せると、高さ何cm?</div>
</div>

<div class="cite pip-safe" style="margin-top:4px;">※余裕がある場合、「自信なかったら答えないように」頼んだ質問もやってみて下さい。</div>

<!--
- ワークです。Step1、GeminiかMS copilotなど学校で使われているAIを開いてください。Step2、生成AIとは何か、高校生にも分かるように、3文で、と順に説明させてみてください。
- Step3、意図的にハルシネーションさせてみましょう。宮崎東高の校長先生は誰か、地球の核に水はどのくらいあるか、5cmの綿に10cmのレンガを乗せると高さ何cmか、など。余裕があれば「自信がなかったら答えないように」と頼んだ質問もやってみてください。
-->

---

<div class="page-title">ワーク：AIを使ってみる</div>

# ワーク：<span style="color:var(--accent-dark)">AIを使ってみる</span>

<div class="stepbox" style="margin:6px 0;">
<div class="st"><b>Step 4)</b> <b>YouTubeまたはPDFを開き、動画の書き起こしを開き、コピー、AIに日本語で要約させて下さい。</b></div>
</div>

<div style="font-size:21px; margin:4px 0 2px;">例：https://www.youtube.com/watch?v=6dHmu1GALmA</div>

<div style="display:flex; gap:24px; align-items:center; margin-top:2px;">

<div style="flex:1;">
<img src="./src/fig11a-mojiokoshi.png" alt="YouTube動画の文字起こし画面のスクリーンショット" style="width:100%; max-height:380px; object-fit:contain; border:1px solid #e3e8f0; border-radius:6px;">
</div>

<div style="flex:0 0 280px;">
<div style="font-size:26px; font-weight:800; color:var(--accent-dark); margin-bottom:10px;">→AIにコピペ</div>
<div class="box-info" style="font-size:21px;">“以下は、動画の書き起こしを添付したものです。その内容を200文字で要約して下さい”</div>
</div>

</div>

<!--
- Step4、YouTubeまたはPDFを開き、動画の書き起こしを開いてコピーし、AIに日本語で要約させてください。
- 動画の文字起こし画面からテキストをコピーしてAIに貼り付け、「以下は動画の書き起こしです。その内容を200文字で要約して下さい」と頼みます。
-->

---

<div class="page-title">ワーク：AIを使ってみる</div>

# ワーク：<span style="color:var(--accent-dark)">AIを使ってみる</span>

<div class="stepbox" style="margin:7px 0;">
<div class="st"><b>Step 5)</b> 与えた情報(コンテキスト)内を情報を検索してみましょう</div>
<div style="font-size:21px; margin-left:1.4em;">“与えた情報によれば、Notebook LMでは、どのようなファイルを使えるんですか”</div>
</div>

<div class="stepbox" style="margin:7px 0;">
<div class="st"><b>Step 6)</b> 議論のパートナーにする</div>
<div style="font-size:21px; margin-left:1.4em;">“私は科目〇〇の高校の先生です。NotebookLMは、自分の担当する科目でどう使えそうですか？”</div>
</div>

<div class="stepbox" style="margin:7px 0;">
<div class="st"><b>Step 7)</b> 理解を確かめる</div>
<div style="font-size:21px; margin-left:1.4em;">“与えた情報から、Notebook LMを自分が理解したかを確かめる、三択問題を2問、この動画から作成して下さい。”</div>
</div>

<div class="stepbox pip-safe" style="margin:7px 0;">
<div class="st"><b>Step 8)</b> 情報検索をしてみる</div>
<div style="font-size:21px; margin-left:1.4em;">“Notebook LMは、高校生でもつかえるんですか?”</div>
</div>

<!--
- Step5、与えた情報（コンテキスト）内を検索させます。「与えた情報によれば、Notebook LMではどのようなファイルを使えるか」など。Step6、議論のパートナーにする。「私は科目〇〇の高校の先生です。NotebookLMは自分の担当科目でどう使えそうか」。
- Step7、理解を確かめる。「与えた情報から、Notebook LMを理解したか確かめる三択問題を2問、この動画から作成して」。Step8、情報検索をしてみる。「Notebook LMは高校生でもつかえるんですか?」これは次のスライドで答え合わせをします。
-->
