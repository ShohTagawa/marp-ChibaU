<div class="page-title">深層学習の学習と推論</div>

# 深層学習の<span style="color:var(--accent-dark)">学習</span>と<span style="color:var(--accent-dark)">推論</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">

<div class="lead-note" style="font-size:27px;">学習 (トレーニング)</div>
<div class="flowrow" style="gap:14px; margin:8px 0;">
<div style="font-size:24px; font-weight:800; text-align:center;">入力</div>
<div class="farrow">→</div>
<div class="box-accent" style="text-align:center; padding:10px 18px;"><b>重みの函<br>(鍛える)</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div class="farrow">→</div>
<div style="font-size:24px; font-weight:800; text-align:center;">出力<br>評価</div>
</div>
<div style="font-size:20px; color:#555; margin:0 0 14px 64px;">↑ 更新 ↺</div>

<div class="lead-note" style="font-size:27px;">利用 (推論・生成)</div>
<div class="flowrow" style="gap:14px; margin:8px 0;">
<div style="font-size:22px; font-weight:800; text-align:center;">未知の<br>入力</div>
<div class="farrow">→</div>
<div class="box-info" style="text-align:center; padding:10px 18px;"><b>重みの函<br>(固定)</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div class="farrow">→</div>
<div style="font-size:24px; font-weight:800; text-align:center;">出力</div>
</div>

<div class="box-warn" style="margin-top:14px; font-size:21px;">学習済みの重みを利用して、出力を得る</div>

</div>
<div style="flex:1;">

<div class="box-info" style="font-size:19px;">GPT 4：アメリカ議会図書館の全蔵書の約20倍?<br>※書籍、記事、ウェブサイト、コードなど幅広いテキストソースを元に学習している</div>

<div class="why-callout pip-safe" style="margin-top:10px; font-size:18px; line-height:1.45;">
<div class="wh" style="font-size:20px;">「今日は良い天...」の続きを予測する場合を考えてみましょう。</div>
<b>正解データが「気」だとします（「天気」）。</b><br>
<b>ケースA：AIが賢い場合</b><br>
AIの予測：「気」である確率 95%、「丼」である確率 1%...<br>
結果： 正解を当てたので、Lossは非常に小さくなります。<br>
<b>ケースB：AIがポンコツな場合</b><br>
AIの予測：「丼」である確率 80%、「気」である確率 5%...<br>
結果： <b>「今日は良い天丼</b>」と予測しそうになっています。正解への確信度が低いので、Lossは大きくなります。
</div>

</div>
</div>

<!--
- 深層学習は「学習」と「推論」の二段。学習では入力→重みの函→出力評価を回して重みを更新し、推論では固定した重みで未知の入力から出力を得る。
- 「今日は良い天…」の続きを予測する例で、賢いAIはLossが小さく、ポンコツなAIは「天丼」と予測しそうになりLossが大きい。
-->

---

<div class="page-title">大規模言語モデルとは</div>

# <span style="color:var(--accent-dark)">大規模言語モデル</span> (LLM)

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">

<div class="box-accent" style="font-size:23px;">大量のテキストで学習され、単語、概念、フレーズ間のパターンを識別し、プロンプトに対する応答を生成できるようにしたAIモデル。</div>

<div class="subhead" style="margin-top:22px;"><span class="tag tag-soft">ネクストワードプレディクション</span></div>

<div class="stepbox" style="font-size:23px;">
日本の首都<u>　　</u> → 日本の首都は<u>　　</u> → 日本の首都は東京<u>　　</u>
</div>

<div class="lead-note" style="margin-top:14px; color:var(--accent-dark);">次の言葉(トークン)の確率を予想する問題</div>

</div>
<div style="flex:0.85; text-align:center;">
<img src="./src/fig14-transformer.png" alt="Transformerの構造" style="height:430px;">
</div>
</div>

<!--
- 大規模言語モデル(LLM)は大量のテキストで学習し、単語・概念・フレーズ間のパターンを識別して応答を生成するAIモデル。
- 本質は「ネクストワードプレディクション」。次の言葉(トークン)の確率を予想する問題を、Transformerで解いている。
-->

---

<div class="page-title">LLMの中身ってなんだ？</div>

# LLMの中身ってなんだ？

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1; text-align:center;">
<img src="./src/fig15-llmviz.png" alt="LLM Visualization (Bycroft)" style="height:380px; border:1px solid #ddd; border-radius:8px;">
<div class="cite" style="text-align:center;">LLM Visualization ©Bycroft 2023　<a>https://bbycroft.net/llm</a></div>
</div>
<div style="flex:1;">

<div class="box-warn" style="font-size:22px; text-align:center;">✗ 知識集・ルール集</div>

<div class="box-info" style="margin-top:12px; font-size:20px;"><b>nano-GPT</b><br>OpenAI共同設立者の一人、アンドレイ・カーパシーさんが公開している学習用モデル<br>(超小さい”大規模”言語モデル)</div>

<div style="font-size:19px; margin-top:10px; line-height:1.45;">
<b>レポジトリ</b><br>
<span style="color:var(--tag-blue);">https://github.com/karpathy/nanoGPT</span><br>
<span style="color:var(--tag-blue);">https://github.com/karpathy/minGPT</span><br>
<b>本人による解説動画</b><br>
<span style="color:var(--tag-blue);">https://www.youtube.com/watch?v=kCc8FmEb1nY</span>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:19px;"><b>cf. nanochat (後継プロジェクト)</b><br>The best ChatGPT that $100 can buy.</div>

</div>
</div>

<!--
- LLMの中身は「知識集・ルール集」ではない。Bycroftの可視化サイトで、Transformerが層を重ねて計算している様子を見る。
- 学習用には超小さい"大規模"言語モデルnano-GPT (Karpathy) が便利。実際にアルファベットを並べたい人はMoodleの参考コードあり。
-->

---

<div class="page-title">学習の例：シェイクスピア</div>

# 学習：nano-GPTで<span style="color:var(--accent-dark)">シェイクスピア</span>を学習した例 (1moGPT)

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">学習データのサンプル（最初の300文字）</div>
<pre style="font-size:16px; line-height:1.4; margin:0; white-space:pre-wrap; font-family:monospace;">First Citizen:
Before we proceed any further, hear me speak.
All:
Speak, speak.</pre>
</div>
<div class="pcard">
<div class="pc-h">チェックポイント 1/27：1回学習後</div>
<pre style="font-size:15px; line-height:1.35; margin:0; white-space:pre-wrap; font-family:monospace;">pNjxD-$fWcYM?QwipOBgPXxHOZygTHhHvxHMg,i
X-S-ss? FKhhE-SThoZIaqcpGLYkghBmQiFdi
oInZdGZs$hzFhN?h&amp;Awo.DWv'3TfQmRs'&amp;KJp?b'x</pre>
</div>
</div>

<div class="cardrow pip-safe">
<div class="pcard">
<div class="pc-h">チェックポイント 3/27：100回学習後</div>
<div style="font-size:18px;">Loss: Train=2.5006, Val=2.5120</div>
<pre style="font-size:15px; line-height:1.35; margin:6px 0 0; white-space:pre-wrap; font-family:monospace;">ye our Beo
KCEBDWamad od wxt sofPr.
tars torerming bkn.dove gre t lo3'sitind</pre>
</div>
<div class="pcard">
<div class="pc-h">チェックポイント 11/27：2000回学習後</div>
<div style="font-size:18px;">Loss: Train=1.3011, Val=1.5272</div>
<pre style="font-size:15px; line-height:1.35; margin:6px 0 0; white-space:pre-wrap; font-family:monospace;">And thou ciest the which they suffer want,
Her father, being less, here shall be unby,
A senservant and heart their treas' devoted</pre>
</div>
</div>

<!--
- nano-GPTでシェイクスピアを学習した例(1moGPT)。最初はランダムな記号列だが、学習回数を重ねるとLossが下がり、だんだん英文らしくなる。
-->

---

<div class="page-title">生成AIの中でしていること</div>

# 利用 (推論・生成)

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.5;">

<div style="display:flex; gap:30px; justify-content:space-around;">

<div style="text-align:center;">
<div class="lead-note">計算1回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩”</div>
</div>

<div style="text-align:center;">
<div class="lead-note">計算2回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は猫” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩は”</div>
</div>

<div style="text-align:center;">
<div class="lead-note">計算3回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は猫で” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩は猫”</div>
</div>

</div>
</div>
<div style="flex:1;">

<img src="./src/fig17-chart.png" alt="次トークンの確率分布" style="width:100%; max-width:380px;">

<div class="box-info pip-safe" style="margin-top:10px; font-size:18px; line-height:1.45;"><b>デコード：</b><b>事前学習済みLLMを使って, テキストを出力プロセス。</b>なお、一番確率の高いところだけとる”Greedy Decoding”ではない方法が用いられやすい (Random Sampling)</div>

</div>
</div>

<!--
- 生成AIは「次の一文字」を1回ずつ計算して継ぎ足す。計算1回目「吾輩」→「は」、2回目「吾輩は」→「猫」…と自己回帰的に伸ばしていく。
- デコードは事前学習済みLLMでテキストを出力するプロセス。一番確率が高いものだけ選ぶGreedy Decodingではなく、Random Samplingが使われやすい。
-->

---

<div class="page-title">ハルシネーション</div>

# ハルシネーション

<div class="box-warn" style="font-size:22px;"><b>ハルシネーション：</b>推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:14px;">
<div style="flex:1.1; text-align:center;">
<img src="./src/fig18-chart.png" alt="Expert-level questions across subjects" style="width:100%; max-width:520px;">
<div class="cite" style="text-align:center;">OpenAI <a>https://openai.com/ja-JP/index/introducing-gpt-5/</a></div>
</div>
<div style="flex:0.9;">

<div class="box-info" style="font-size:20px;"><b>例：</b><br><b>千葉大のサークルの〇〇について教えて。</b><br><br><b>千葉大学の生成AI活用講座の担当教員は？</b></div>

<div class="box-accent pip-safe" style="margin-top:14px; font-size:23px; text-align:center;"><b>ハルシネーションは<br>仕組み上、起こる</b></div>

</div>
</div>

<!--
- ハルシネーション＝推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと。次の単語の確率予測である以上、仕組み上起こる。
- 「千葉大のサークルの〇〇」「この講座の担当教員は？」のようなニッチな問いで顕在化しやすい。
-->

---

<div class="page-title">生成AIのレイヤー</div>

# 生成AIのレイヤー

<div class="subhead"><span class="tag tag-soft">応用</span><span style="color:#888;">　↑　ユーザーに近い</span></div>

<table style="width:100%; border-collapse:collapse; font-size:21px; margin-top:4px;">
<tr style="background:var(--accent-soft);">
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; width:30%; color:var(--accent-dark);">生成AI アプリケーション</td>
<td style="border:1px solid #ccc; padding:8px 14px;">Chat GPT, Gemini etc… インターフェースを通じて AI 機能をユーザーに提供するソフトウェア</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">エージェント</td>
<td style="border:1px solid #ccc; padding:8px 14px;">DeepResearch, web検索 etc… 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">プラットフォーム</td>
<td style="border:1px solid #ccc; padding:8px 14px;">Dify, Google AI studio etc… AI モデルの構築に役立つツールとサービス、データマネジメントツールで構成</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">大規模言語モデル</td>
<td style="border:1px solid #ccc; padding:8px 14px;">説明の通り</td>
</tr>
<tr style="background:#f4f6fa;">
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">インフラストラクチャー</td>
<td style="border:1px solid #ccc; padding:8px 14px;">コンピューターリソース、GPUなど</td>
</tr>
</table>

<div class="subhead pip-safe" style="margin-top:6px;"><span class="tag tag-soft">基盤</span><span class="cite" style="margin:0;">改変：Google Cloud Skills Boost</span></div>

<!--
- 生成AIは5層構造。下から、インフラ→LLM→プラットフォーム→エージェント→アプリケーション。下が基盤、上が応用(ユーザーに近い)。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0.28;">
<div class="tag tag-accent" style="font-size:24px; margin-bottom:14px;">目的</div>
<br>
<div class="tag tag-soft" style="font-size:22px;">目標 ＋ まとめ</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:24px;"><b>Session 1：</b><br>　生成AIの中身を知る</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st" style="font-size:23px;"><b>利活用の前提知識</b>を知る</div>
<div style="font-size:21px; margin-left:1.4em;">千葉大学の中でのポリシー「生成AIの指針」</div>
<div style="font-size:21px; margin-left:1.4em;">オプトアウトと大学の契約で使える生成AIサービス</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>大規模言語モデル(LLM)</b>の中身をイメージできる</div>
<div style="font-size:21px; margin-left:1.4em;">Transformerによる「次の単語の予測」作業</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>生成AIサービスのレイヤー</b>がわかる</div>
<div style="font-size:21px; margin-left:1.4em;">インフラ→LLM→プラットフォーム→エージェント→アプリ</div>
</div>

</div>
</div>

<!--
- Session 1の振り返り。目的＝生成AIの中身を知る。目標＋まとめとして、前提知識・LLMの中身・レイヤーの3点を確認。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI体験ワークショップ</div>
<div class="title-big" style="font-size:64px;">Session 2</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:26px; color:var(--accent-dark); font-weight:700;">2025年度 第1回： 生成AIの仕組みを体験する</div>
<div style="font-size:22px; color:#666;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:820px; margin:18px auto 0; font-size:25px;"><b>Session 2：</b><br>　実践：学習済みモデルで推論(デコード)してみる</div>

<div style="text-align:center; margin-top:14px; font-size:22px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2へ。学習済みモデルを実際に動かして、推論(デコード)を体験する実践パート。
-->

---

<div class="page-title">いざ、実践</div>

# 何をするか？

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">

<div class="stepbox">
<div class="st" style="font-size:22px;">① 会場はペアを作って下さい。オンラインはslidoを繋いでください。</div>
<div class="st" style="font-size:22px;">② MoodleにあるGoogle Colabファイルを立ち上げ、<b>Transformers</b>で遊びます。僕がデモをするので、一緒に、上からポチポチと実行しましょう。</div>
<div class="st" style="font-size:22px;">③ 文字列を入力し結果を出力してみましょう。</div>
</div>

<div class="box-warn" style="margin-top:12px; font-size:20px;">オンラインの方：困ったら<b>Slido</b>に質問を送って下さい！　余裕がある方： <b>Slidoに返信して</b>ください。会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

</div>
<div style="flex:0.85;">

<img src="./src/fig22-chart.png" alt="吾輩は_ 次トークンの確率" style="width:100%; max-width:360px;">

<div class="box-info pip-safe" style="margin-top:10px; font-size:18px;">そんなん秒だわ、という方 →　会場で困っているかたのサポート or moodleで、nano-GPTのトライアルをどうぞ。</div>

</div>
</div>

<!--
- いざ実践。会場はペア、オンラインはslido。MoodleのColabファイルを開いてTransformersで一緒に動かし、文字列を入れて出力を見る。
- 困ったらSlidoや手を上げて。すぐ終わった人はサポートやnano-GPTトライアルへ。
-->

---

<div class="page-title">応用問題を解こう！</div>

# 応用問題 (時間が余った方向け)

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">

<div class="exrow"><div class="exn">①</div><div>「吾輩は猫である。」<b>の「次」</b>を予想してみましょう。<br>「名前」(はまだない)。。。と出ますか？</div></div>

<div class="exrow"><div class="exn">②</div><div><b>では、「名前」と出す方法を考えてみましょう。</b><br>うまくいったらコンテキストやプロンプトの重要性を言語化しましょう。<br>なぜ、「ロール(あなたは〇〇です)」を与えるとうまく行くのでしょうか？</div></div>

<div class="exrow"><div class="exn">③</div><div><b>色々と条件を変えて遊んでみましょう。</b><br>例1: 他の文字列で試してみる　例2: 温度設定を変える　例3: モデルを変える</div></div>

</div>
<div style="flex:0.85;">

<img src="./src/fig23-chart.png" alt="次トークンの確率分布" style="width:100%; max-width:360px;">

<div class="box-accent pip-safe" style="margin-top:10px; font-size:19px; line-height:1.45;"><b>ランダムサンプリングの時</b><br><b> 温度 (テンパラチャー)：</b>単語選択のランダム性を変える<br><b> Top-P： </b>上位p％のトークンから選択する<br><b> Top-K： </b>上位k個のトークンから選択する</div>

</div>
</div>

<!--
- 応用問題。①「吾輩は猫である。」の次を予想、②「名前」と出す方法（ロールやコンテキストの効果）を言語化、③温度・モデルなど条件を変えて遊ぶ。
- ランダムサンプリングのパラメータ：温度・Top-P・Top-Kでトークン選択のランダム性を制御する。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0.28;">
<div class="tag tag-accent" style="font-size:24px; margin-bottom:14px;">目的</div>
<br>
<div class="tag tag-soft" style="font-size:22px;">目標 ＋ まとめ</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:24px;"><b>Session 2：</b><br>　実践：学習済みモデルで推論(デコード)してみる</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st" style="font-size:23px;"><b>LLMは次を予想しているだけ</b>を体感する</div>
<div style="font-size:21px; margin-left:1.4em;">ルールベースではない！</div>
<div style="font-size:21px; margin-left:1.4em;">ネクスト・ワード・プレディクションをする</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>LLM</b>の中身と処理をイメージできる</div>
<div style="font-size:21px; margin-left:1.4em;">数字の塊、学習で重みを決定、推論でトークン生成</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>コンテキストやプロンプトの重要性</b>がわかる</div>
<div style="font-size:21px; margin-left:1.4em;">確率を上げるガチャゲームなイメージ</div>
</div>

</div>
</div>

<!--
- Session 2の振り返り。目的＝学習済みモデルで推論(デコード)してみる。LLMは次を予想しているだけ、中身と処理のイメージ、コンテキスト/プロンプトの重要性を確認。
-->