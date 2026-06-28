<div class="page-title">生成AIを構成するレイヤー</div>

# 生成AIを構成する<span style="color:var(--accent-dark)">レイヤー</span>

<div style="display:flex; align-items:stretch; gap:18px;">

<div style="display:flex; flex-direction:column; justify-content:space-between; align-items:center; padding:8px 0;">
<div class="tag tag-accent" style="font-size:24px;">応用</div>
<div style="flex:1; border-left:4px solid var(--accent); margin:8px 0;"></div>
<div class="tag tag-accent" style="font-size:24px;">基盤</div>
</div>

<table style="flex:1; font-size:20px;">
<tr><td style="width:30%; font-weight:800; color:var(--accent-dark);">生成AI アプリケーション</td><td>Gemini、ChatGPT、Claude etc…</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">エージェント</td><td>DeepResearch, web検索 etc… 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">プラットフォーム</td><td>Dify, Google AI studio etc… AI モデルの構築とデプロイに役立つツールとサービス、データマネジメントツールで構成</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">大規模言語モデル(LLM)</td><td>Section2での説明の通り</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">インフラストラクチャー</td><td>コンピューターリソース、GPUなど</td></tr>
</table>

</div>

<div class="cite" style="text-align:right;">改変：Google Cloud Skills Boost</div>

<!--
- 生成AIは5つのレイヤーで構成される。下の「基盤」から、インフラ→LLM→プラットフォーム→エージェント→アプリの順に積み上がっている。
-->

---

<div class="page-title">インフラストラクチャー</div>

# <span style="color:var(--accent-dark)">インフラストラクチャー</span>

<div style="text-align:center; margin-top:10px;">
<img src="./src/fig26-tpu.png" alt="nVidia presentation デモ" style="height:430px; box-shadow:0 3px 10px rgba(0,0,0,.2);">
</div>

<div class="lead-note" style="text-align:center; color:#444;">nVidia presentation デモ (いま非公開…)</div>

<div class="cite pip-safe">もっと詳しく：https://cloud.google.com/tpu/docs/system-architecture-tpu-vm?hl=ja</div>

<!--
- 一番下のレイヤーがインフラ。GPUやTPUといった計算資源。これがLLMを動かす土台になっている。
-->

---

<div class="page-title">LLMの中でしていること</div>

# LLMの中でしていること

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">

<div style="flex:0 0 360px; text-align:center;">
<div class="subhead" style="justify-content:center;"><b style="color:var(--accent-dark);">LLMの概観</b></div>
<img src="./src/fig27-nanogpt.png" alt="LLMの概観 nano-gpt" style="height:420px;">
</div>

<div style="flex:1;">
<div class="subhead"><b style="color:var(--accent-dark);">学習と推論のデモ</b></div>
<img src="./src/fig27-colab.png" alt="colabでの学習デモ" style="width:100%; max-width:540px; border:1px solid #ddd;">
<div class="box-accent" style="margin-top:14px; text-align:center;"><b>Google colab</b>　実際に学習を体験できる!</div>
</div>

</div>

<!--
- LLMの中身を概観したうえで、Google colabで学習と推論のデモを行う。実際に手を動かして学習を体験できる。
- ぐじゃぐじゃ…（最初の出力はめちゃくちゃ）の状態から学習が進む様子を見せる。
-->

---

<div class="page-title">LLMの中でしていること</div>

# <span style="color:var(--accent-dark)">利用 (推論・生成)</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.55;">
<img src="./src/fig28-flow.png" alt="計算1〜3回目：入力→前処理→AI処理(デコーダ)→出力 のループ" style="width:100%;">
</div>

<div style="flex:1;">
<img src="./src/fig28-tokens.png" alt="各ステップの上位5トークンの確率（棒グラフ）" style="width:100%;">
</div>

</div>

<!--
- 推論は1トークンずつ。「吾輩」→「吾輩は」→「吾輩は猫」…と、出力を入力に戻しながら次の語を予測していく。
- 右は各時点での上位5トークンの確率。モデルは cyberagent/open-calm-7b。
-->

---

<div class="page-title">プラットフォーム</div>

# AIのアプリの中身を<span style="color:var(--accent-dark)">ご相談ください</span>

<div class="box-info" style="margin-top:18px; font-size:25px; line-height:1.7;">
<b>標準時間：</b>自己紹介3分、実習2分 (会場は隣の人とペアで実施します) ＋ 全体共有：2分<br>
<b>ワーク：</b> あなたが今日の夜に雨にふられずに、帰宅する時間を知りたいとします。<br>
<b>その時間を教えてくれる生成AIアプリには、どんな情報を与えてあげればよいですか。</b>箇条書きで3つ考えて下さい。
</div>

<!--
- ワークの時間。隣の人とペアで、自己紹介3分・実習2分・共有2分。
- 「夜に雨にふられず帰宅する時間を知りたい」。それを教えてくれるAIアプリに必要な情報を3つ考える。
-->

---

<!-- _class: divider -->

<h1 style="color:#fff;">必要と思われる情報を<br>記入して下さい。</h1>

<div class="sub" style="color:rgba(255,255,255,.85); font-size:26px; margin-top:12px;">Slido で投票</div>

<!--
- Slido のインタラクションスライド。参加者に必要な情報を入力してもらう。
- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide.
-->

---

<div class="page-title">Session 2のワーク例</div>

# Session 2の<span style="color:var(--accent-dark)">ワーク例</span>

<div class="subhead"><b style="color:var(--accent-dark);">ワークの回答例：</b><span>場所、現在の時刻、今日の24時間の天気、プロンプト</span></div>

<div class="subhead" style="margin-top:14px;"><b style="color:var(--accent-dark);">実装例：</b></div>

<div class="box-accent" style="margin-top:14px;"><b>AIを、与えた情報を整理したり、深堀りする道具として見てみる</b></div>

<div class="box-warn" style="margin-top:14px;">
大規模言語モデルだけでは、ハルシネーションの根絶は難しい<br>
しかし、<b>①AIに正しい情報を与え、②様々な処理と組み合わせる</b><br>
ことで、間違えにくく、有効なツールができる
</div>

<!--
- 回答例：場所、現在の時刻、今日の24時間の天気、プロンプト。これらを与えればAIが答えられる。
- LLM単体ではハルシネーションは無くせないが、正しい情報を与え、処理と組み合わせれば有効な道具になる。
-->

---

<div class="page-title">プラットフォームの必要性</div>

# プラットフォームの<span style="color:var(--accent-dark)">必要性</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<img src="./src/fig32-robots.png" alt="model：複数の処理を束ねるイメージ" style="flex:0 0 230px; width:230px; align-self:center;">

<div style="flex:1;">

<div class="box-accent" style="margin-bottom:12px;"><b>GemやDify、n8n、Google Opalで仕事・研究に役立つ道具を作れるようになる</b></div>

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>Model</b>だけでは、動くことが出来ません<br><span style="font-size:22px;">入力、出力、他との接続 (mcp, AI, ツール、参考資料 etc…)</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>AIを組み合わせる</b>と、様々な複雑な処理が可能になります<br><span style="font-size:22px;">入力の分類、出力の分析、音声処理、画像処理…</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>AIに道具をもたせ</b>、現実的な処理ができるようになります<br><span style="font-size:22px;">RAG、データベース、書籍、時計、天気予報…</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>開発</b>には、メタな視点が必要です<br><span style="font-size:22px;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</span></div></div>

</div>

</div>

<div class="cite pip-safe">Difyのロゴは「モックアップ稼働まで」できるAIプラットフォーム"Dify"より</div>

<!--
- Modelだけでは動かない。入力・出力・他との接続が要る。それを束ねるのがプラットフォーム。
- Gem、Dify、n8n、Google Opal などで、仕事・研究に役立つ道具を作れるようになる。
-->

---

<div class="page-title">Agent/リーズニング</div>

# Agent / <span style="color:var(--accent-dark)">リーズニング</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<img src="./src/fig33-agent1.png" alt="エージェントがweb検索で自ら調べる様子" style="width:100%; border:1px solid #ddd; margin-bottom:8px;">
<img src="./src/fig33-code.png" alt="環境変数を調べて設定するエージェントの動作ログ" style="width:100%; border:1px solid #ddd;">
</div>

<div style="flex:1;">

<div class="box-accent"><b>グラウンディング：</b><br>　AIが生成する回答を、特定の信頼できる情報源（ソース）にしっかりと結びつける技術</div>

<div style="margin-top:18px; display:flex; gap:30px; align-items:center; justify-content:center;">

<div style="text-align:center;">
<div class="lead-note"><b>昔：</b></div>
<div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
<div class="fbox blue" style="font-size:24px; padding:4px 24px;">AI</div>
<div class="farrow">↓</div>
<div style="font-size:22px;">回答</div>
</div>
</div>

<div style="text-align:center;">
<div class="lead-note"><b>今：</b></div>
<div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
<div style="font-size:22px;">データ</div>
<div class="farrow">→</div>
<div class="fbox red" style="font-size:24px; padding:4px 24px;">AI</div>
<div class="farrow">↓</div>
<div style="font-size:22px;">回答</div>
</div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:18px;"><b>「推論ツール」「情報の深堀りツール」</b>　になりつつある</div>

</div>

</div>

<!--
- エージェントは、自分で web 検索し、環境変数を調べて設定する、といった「行動」ができる。
- グラウンディングで、回答を信頼できるソースに結びつける。昔は AI→回答だったが、今はデータ→AI→回答。AIは「推論ツール」「情報の深堀りツール」になりつつある。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# Session 2の目的・到達目標 <span style="font-size:26px; color:#666;">／ 振り返り</span>

<div style="display:grid; grid-template-columns:7em 1fr; gap:14px 18px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; align-self:center;">目的</div>
<div class="goal-box" style="margin:0; padding:12px 24px;"><b>Session 2：</b>　生成AIの仕組みを体験する</div>

<div style="font-size:30px; font-weight:800; align-self:center;">目標<br>＋<br>まとめ</div>
<div class="box-accent" style="font-size:23px; line-height:1.55;">
・<b>大規模言語モデル(LLM)</b>の中身をイメージできる<br>
　- Transformerによる「次の単語の予測」作業<br>
　- ハルシネーションや誤った出力がでるのは当たり前<br>
・<b>AI agentやツール</b>イメージできる<br>
　- AIに正しい情報を渡すことで、誤りが減る<br>
　- AIは、自分の出力をもとに、「推論」を深められる（リーズニング）<br>
・<b>LLMの上のレイヤーでAIは進化している</b>
</div>

</div>

<!--
- Session 2の振り返り。目的は「生成AIの仕組みを体験する」。
- 目標：LLMの中身（次の単語の予測、ハルシネーションは当たり前）、AI agent やツール（正しい情報で誤りが減る、推論を深める＝リーズニング）、そしてLLMの上のレイヤーでAIは進化している。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">AI時代の教え方</div>
<div class="title-big">大学教育への事例をもとに</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:26px; margin-bottom:14px;">大学における生成AIとの関わり方を考える 15 - min × 6 sessions</div>

<div class="goal-box" style="max-width:820px; margin:0 auto;"><b>Session 3：</b><span class="ind">プロンプトを書くコツ</span></div>

<div style="text-align:center; margin-top:24px; font-size:24px;">千葉大学 国際未来教育基幹 田川 翔</div>

<!--
- Session 3。プロンプトを書くコツ。
-->

---

<div class="page-title">Session 3の目的・到達目標</div>

# Session 3の目的・到達目標

<div style="display:grid; grid-template-columns:6em 1fr; gap:24px 18px; align-items:center; margin-top:18px;">

<div style="font-size:32px; font-weight:800;">目的</div>
<div class="goal-box" style="margin:0;"><b>Session 3：</b><span class="ind">学びのためのプロンプト作成のスキルを知る</span></div>

<div style="font-size:32px; font-weight:800;">目標</div>
<div class="box-accent" style="font-size:27px; line-height:1.8;">
・<b>システムプロンプトが何か</b>を理解する<br>
・<b>プロンプトの型</b>を理解する<br>
・<b>作成の3つのコツを説明できる</b>
</div>

</div>

<!--
- Session 3の目的は「学びのためのプロンプト作成のスキルを知る」。
- 目標：システムプロンプトとは何か、プロンプトの型、作成の3つのコツを説明できること。
-->
