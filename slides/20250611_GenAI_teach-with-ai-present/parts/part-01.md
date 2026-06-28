<div class="page-title">2　使ってみる</div>

# 最も性能がよいAI <span style="font-size:34px;">6/12</span>

<div style="display:flex; justify-content:center; margin-top:6px;">
<img src="./src/fig13-leaderboard.png" alt="Chatbot Arena リーダーボード" style="height:540px; border:1px solid #e3e8f0; border-radius:8px; box-shadow:0 2px 7px rgba(0,0,0,.08);">
</div>

<div class="cite pip-safe" style="text-align:center;">https://huggingface.co/spaces/lmarena-ai/chatbot-arena-leaderboard</div>

<!--
- 性能のよいAIは、Chatbot Arena のリーダーボードで日々ランキングが変わる。6/12時点ではこの順位。
-->

---

<div class="page-title">2　使ってみる</div>

# 生成AIでできること

<div style="border:2.5px solid #B0419B; border-radius:14px; padding:14px 22px 18px; background:#fafafa;">

<div style="text-align:center;"><span class="tag tag-accent" style="font-size:24px;">テキスト生成</span></div>

<div class="cardrow" style="margin:10px 0 0;">
<div class="pcard" style="text-align:center;"><div style="font-size:30px;">📝</div>文章の作成・要約</div>
<div class="pcard" style="text-align:center;"><div style="font-size:30px;">🔍</div>情報検索</div>
<div class="pcard" style="text-align:center;"><div style="font-size:30px;">🅰️</div>翻 訳</div>
<div class="pcard" style="text-align:center;"><div style="font-size:30px;">💬</div>議論のパートナー</div>
</div>
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard" style="text-align:center; border-color:#B0419B;"><span class="tag tag-accent" style="font-size:21px;">画像・映像生成</span><div style="font-size:28px; margin-top:6px;">📷 ▶️</div>写真・イラスト、<br>アニメ等の作成</div>
<div class="pcard" style="text-align:center; border-color:#B0419B;"><span class="tag tag-accent" style="font-size:21px;">音声生成</span><div style="font-size:28px; margin-top:6px;">🎵</div>音声・音楽の作成</div>
<div class="pcard pip-safe" style="text-align:center; border-color:#B0419B;"><span class="tag tag-accent" style="font-size:21px;">その他</span><div style="font-size:28px; margin-top:6px;">🧊</div>3Dモデルの作成</div>
</div>

<div class="cite pip-safe" style="text-align:right;">総務省 生成AIはじめの一歩～生成AIの入門的な使い方と注意点～</div>

<!--
- 生成AIでできることを「テキスト生成／画像・映像生成／音声生成／その他」で整理。テキストは文章作成・要約、情報検索、翻訳、議論のパートナーなど。
-->

---

<div class="page-title">2　使ってみる</div>

# 生成AIでできること

<div class="subhead"><span style="color:var(--accent-dark)">生成AIの活用領域</span><span class="cite" style="margin:0;">Anthropic (2025 ArXiv) リンク</span></div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-info" style="margin:6px 0;"><b>何をしたか</b><br>プライバシーの保護を保った状態で、400万以上のClaude.aiの会話を分析<br>→どの経済的タスクにAIが利用されているか把握<br><span style="font-size:21px;">米国労働省のO*NET実会話DBから類似性分類</span></div>

<div class="stepbox" style="margin:10px 0;">
<div class="st" style="font-weight:800; color:var(--accent-dark); font-size:24px; margin:0 0 4px;">全体として分かったこと</div>
<div class="st" style="font-size:23px; margin:2px 0;">① Software 開発とWritingで半分</div>
<div class="st" style="font-size:23px; margin:2px 0;">② 36%の職業にAIが利用されている</div>
<div class="st" style="font-size:23px; margin:2px 0;">③ スキル増強：自動化 = 57 : 43</div>
</div>

<div class="box-accent" style="margin:6px 0;"><b>教育での利用</b>　チュータリングタスクが多い</div>

</div>
<img src="./src/fig15-anthropic-tasks.png" alt="経済タスクの階層的内訳" style="width:380px; align-self:center;">
</div>

<!--
- Anthropic の研究。プライバシーを守った状態で400万以上のClaude会話を分析し、O*NETの職業タスクと照合。SW開発とWritingで半分、36%の職業で利用、スキル増強と自動化が57:43。教育ではチュータリングが多い。
-->

---

<div class="page-title">2　使ってみる</div>

# ワーク：AIを使ってみる

<div class="stepbox" style="margin:10px 0;">
<div class="st"><b>Step 1)</b>　<b>Gemini</b> か、<b>MS copilot</b>など、<b>学校で使われているAI</b>を開いて下さい。</div>
</div>

<div class="stepbox" style="margin:10px 0;">
<div class="st"><b>Step 2)　以下のプロンプトをそれぞれ流してみて下さい。</b></div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・生成AIとはなにか、説明して下さい。</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・わかりにくいので、高校生にも分かるよう、説明して下さい</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・(わかりにくい場合) わかりにくいので、3文で説明して下さい</div>
</div>

<div class="stepbox" style="margin:10px 0;">
<div class="st"><b>Step 3)　意図的にハルシネーションさせてみましょう (例)</b></div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・宮崎東高の校長先生は誰ですか？</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・地球の核に水はどのくらいありますか</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">・5 cmの綿に、10 cmのレンがを乗せると、高さ何cm?</div>
</div>

<div class="cite pip-safe">※余裕がある場合、「自信なかったら答えないように」頼んだ質問もやってみて下さい。</div>

<!--
- 実際にAIを開いて、生成AIの説明をさせる。高校生向け・3文へと言い換えさせる。さらに意図的にハルシネーションを誘発する質問もやってみる。
-->

---

<!-- _class: intro -->

<div class="page-title">1　イントロ</div>

<div style="display:flex; align-items:center; gap:40px; height:100%; justify-content:center;">
<div style="font-size:120px; color:var(--accent);">📋</div>
<div style="font-size:46px; font-weight:800; line-height:1.4;">AIの説明はわかりやすく<br>なりましたか？</div>
</div>

<div class="takeaway pip-safe" style="background:#1F7A4D; color:#fff; border:none;">slido で回答を共有しましょう</div>

<!--
- slido ポーリング。AIに高校生向け・3文と頼んで、説明はわかりやすくなったかを共有する。
-->

---

<div class="page-title">2　使ってみる</div>

# ワーク：AIを使ってみる

<div class="stepbox" style="margin:14px 0;">
<div class="st"><b>Step 4)</b>　<b>YouTubeまたはPDFを開き、動画の書き起こしを開き、コピー、AIに日本語で要約させて下さい。</b></div>
</div>

<div style="display:flex; gap:24px; align-items:center; margin-top:10px;">
<div style="flex:1;">
<div class="cite" style="font-size:22px; margin:0 0 8px;">例：https://www.youtube.com/watch?v=6dHmu1GALmA</div>
<img src="./src/fig18-yt-transcript.png" alt="YouTube文字起こし画面" style="width:100%; max-width:520px; border:1px solid #e3e8f0; border-radius:8px;">
</div>
<div style="font-size:30px; font-weight:800; color:var(--accent-dark); white-space:nowrap;">→AIにコピペ</div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px;">"以下は、動画の書き起こしを添付したものです。その内容を200文字で要約して下さい"</div>

<!--
- YouTubeやPDFの書き起こしをコピーして、AIに日本語で要約させる。プロンプト例「以下は動画の書き起こし…200文字で要約して下さい」。
-->

---

<div class="page-title">2　使ってみる</div>

# ワーク：AIを使ってみる

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>Step 5)　与えた情報(コンテキスト)内を情報を検索してみましょう</b></div>
<div class="st" style="font-size:22px; color:#555; margin-left:1.2em;">"与えた情報によれば、Notebook LMでは、どのようなファイルを使えるんですか"</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>Step 6)　議論のパートナーにする</b></div>
<div class="st" style="font-size:22px; color:#555; margin-left:1.2em;">"私は科目〇〇の高校の先生です。NotebookLMは、自分の担当する科目でどう使えそうですか？"</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>Step 7) 理解を確かめる</b></div>
<div class="st" style="font-size:22px; color:#555; margin-left:1.2em;">"与えた情報から、Notebook LMを自分が理解したかを確かめる、三択問題を2問、この動画から作成して下さい。"</div>
</div>

<div class="stepbox pip-safe" style="margin:8px 0;">
<div class="st"><b>Step 8) 情報検索をしてみる</b></div>
<div class="st" style="font-size:22px; color:#555; margin-left:1.2em;">"Notebook LMは、高校生でもつかえるんですか?"</div>
</div>

<!--
- 与えた情報内の検索、議論のパートナー、理解の確認(三択問題作成)、情報検索と、AIの使い方を段階的に体験する。
-->

---

<!-- _class: intro -->

<div class="page-title">1　イントロ</div>

<div style="display:flex; align-items:center; gap:40px; height:100%; justify-content:center;">
<div style="font-size:120px; color:#1F7A4D;">💬</div>
<div style="font-size:46px; font-weight:800; line-height:1.4;">ハルシネーションは<br>どんな問でおきましたか。</div>
</div>

<div class="takeaway pip-safe" style="background:#1F7A4D; color:#fff; border:none;">slido で回答を共有しましょう</div>

<!--
- slido ポーリング。どんな問いでハルシネーションが起きたかを共有する。
-->

---

<div class="page-title">2　使ってみる</div>

# 生成AIを使う上で

<div class="box-accent" style="text-align:center; margin:6px auto; max-width:900px;"><b>AIと対話の文脈を作る</b>　= <b>思考錯誤し、自分が必要な支援を引き出す</b></div>

<div style="display:flex; gap:18px; margin-top:10px;">
<div style="flex:1;">

<div class="subhead" style="margin:2px 0;"><span class="tag tag-soft">重要な力1</span></div>
<div style="font-size:22px; line-height:1.5;">多分、ハルシネーションしたり、社会・概念のフレームを理解しない回答をしたりしている</div>
<div class="cite" style="font-size:20px;">"Notebook LMは、高校生でもつかえるんですか?"</div>
<div class="box-warn" style="margin:8px 0; font-size:22px;">ハルシネーションの発生を念頭に、<br>信頼できる情報を見極める。</div>

</div>
<div style="flex:1;">

<div class="subhead" style="margin:2px 0;"><span class="tag tag-soft">重要な力2</span></div>
<div style="font-size:22px; line-height:1.5;">正解：いいえ。年齢制限のため、使えません。</div>
<div class="box-info" style="margin:8px 0; font-size:22px;">自分が積極的にAIに問いかけてみる / 適切な情報一覧を与えてあげる<br>自分が動かないと、AIは良い回答を出してくれない。能動的に。</div>

</div>
</div>

<div class="takeaway pip-safe">AIも、生徒と同じで、正しい判断ができるためには、<span class="hl">正しい事前知識をプロンプトに入れてあげる</span>と良い</div>

<!--
- 生成AIを使う上で2つの力。重要な力1=ハルシネーションを念頭に信頼できる情報を見極める。重要な力2=能動的に問いかけ、適切な情報を与える。AIも生徒と同じで、正しい事前知識を入れると良い。
-->

---

<div class="page-title">2　使ってみる</div>

# 生成AIとハルシネーション

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:0.95;">

<div class="box-info" style="margin:4px 0; font-size:22px;"><b>SimpleQA</b>：回答の事実的正確性のベンチマーク<br><span class="cite" style="margin:0;">Wei et al. (2024) Arxiv</span></div>

<img src="./src/fig22-simpleqa-chart.png" alt="SimpleQA 正答率の棒グラフ" style="width:100%; max-width:430px; margin:6px 0;">

<div style="font-size:20px; color:#555;">知識のエッジ(=学習回数小)にある内容も含めてある</div>
<div class="box-accent" style="margin:6px 0; font-size:21px;"><b>学習している知識が少ない場合の例</b><br>例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?　　A. Michio Sugeno</div>

</div>
<div style="flex:1.05;">

<div class="box-warn" style="margin:4px 0; font-size:21px;">問題を解かせたり、論文を探させた場合等、無料版である<b>AI</b>は、「分からない」ということもなく、ハルシネーション(誤情報を出す)する可能性が高い</div>

<div style="font-size:22px; font-weight:800; color:var(--accent-dark); margin:8px 0 2px;">その他の例</div>
<div class="stepbox" style="margin:4px 0; padding:10px 20px;">
<div class="st" style="font-size:21px; margin:2px 0;">・古い情報だった・誤った情報を学習していた</div>
<div class="st" style="font-size:21px; margin:2px 0;">・AIが考えるべきことを誤解し、なんか変だ</div>
<div class="st" style="font-size:21px; margin:2px 0;">・別の分野の文脈に引きずられていた/偏っていた</div>
<div class="st" style="font-size:21px; margin:2px 0;">・差別やバイアスが含まれていた</div>
<div class="st" style="font-size:21px; margin:2px 0;">・推論ミス、別のところを参照 etc…</div>
</div>

<div class="box-accent pip-safe" style="margin:6px 0; font-size:21px;"><b>誤っている可能性を知り、信頼の高い情報を参照し正確性を確認</b>　<b>※ 相当ある</b></div>

</div>
</div>

<div class="takeaway pip-safe">ハルシネーションは結構頻繁に起こる <b>(特に無料版の場合)</b></div>

<!--
- SimpleQA で測ると、無料版AIは「分からない」と言わずにハルシネーションする可能性が高い。古い情報・誤解・文脈の引きずられ・バイアス・推論ミス等。信頼の高い情報で正確性を確認すること。
-->

---

<div class="page-title">2　使ってみる</div>

# 現在の生成AIの変化 ①

<div class="box-warn" style="margin:8px 0;"><b>△ 生成AIにただ聞いて回答させる</b></div>

<div style="display:flex; gap:16px; align-items:center; margin-bottom:10px;">
<div style="flex:1; font-size:23px;">内部の学習データから回答を出す</div>
<div class="box-info" style="flex:1.1; font-size:21px; padding:8px 18px;"><b>間違うことがある</b><br>　例：宮崎県の観光地を教えて → ○<br>　例：日本のAI基本法を教えて → ☓</div>
</div>

<div class="box-accent" style="margin:8px 0;"><b>○ 生成AIに、情報を与え、自分がほしい情報に変換してもらう</b></div>

<div style="display:flex; gap:16px; align-items:center; margin-bottom:10px;">
<div style="flex:1; font-size:23px;">与えたデータから回答を出す</div>
<div style="flex:1.1; font-size:24px; font-weight:800; color:var(--accent-dark);">間違いは、だいぶ減る</div>
</div>

<div class="takeaway pip-safe"><b>現在：生成AIはツール・エージェント(助手みたいなもの)になっている</b><br><span style="font-size:22px; font-weight:400;">AIの回答を確認するAI、webを検索するAIなどが繋がる</span></div>

<!--
- △ただ聞くと内部データから回答し間違うことがある。○情報を与えて変換してもらうと間違いはだいぶ減る。現在のAIはツール・エージェント(助手)になりつつある。
-->

---

<div class="page-title">2　使ってみる</div>

# AI agentの動きの例

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.1;">

<div class="box-info" style="margin:4px 0; font-size:21px;"><b>グラウンディング：</b><br>　AIが生成する回答を、特定の信頼できる情報源（ソース）にしっかりと結びつける技術</div>

<div style="margin:14px 0;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-bottom:6px;">昔：</div>
<div class="flowrow" style="gap:14px; margin:6px 0;">
<div class="fbox gray" style="font-size:26px; padding:6px 26px;">AI</div>
<div class="farrow">→</div>
<div style="font-size:24px;">回答</div>
</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin:14px 0 6px;">今：</div>
<div class="flowrow" style="gap:14px; margin:6px 0;">
<div class="fbox blue" style="font-size:24px; padding:6px 22px;">データ</div>
<div class="farrow">→</div>
<div class="fbox red" style="font-size:26px; padding:6px 26px;">AI</div>
<div class="farrow">→</div>
<div style="font-size:24px;">回答</div>
</div>
</div>

</div>
<div style="flex:0.9;">
<div class="box-accent" style="margin:4px 0; font-size:22px;"><b>「因果推論」「思考ツール」</b>になりつつある</div>
<div class="box-warn pip-safe" style="margin:10px 0; font-size:22px;"><b>"ガチャ"状態：</b>当たりまで何回もデータ・指示を変え試す</div>
</div>
</div>

<!--
- グラウンディング=回答を信頼できるソースに結びつける技術。昔はAI→回答だけ。今はデータ→AI→回答。「因果推論」「思考ツール」になりつつあり、当たりまで何回も試す"ガチャ"状態。
-->
