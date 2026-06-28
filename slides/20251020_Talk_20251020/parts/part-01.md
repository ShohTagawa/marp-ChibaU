<div class="page-title">深層学習</div>

# 深層学習

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.25;">

<div class="box-info" style="margin:4px 0;"><b>機械学習：</b>データから、「機械」（コンピューター）が自動で「学習」し、データの背景にあるルールやパターンを発見する方法。(NRI用語解説より)</div>

<img src="./src/fig13a-neuralnet.png" alt="ニューラルネットワーク" style="width:100%; margin:10px 0 4px;">

<div class="box-accent" style="margin:4px 0;"><b>深層学習：</b>多数の層から成るニューラルネットワークを用いて行う機械学習</div>

</div>
<div style="width:230px; text-align:center;">
<div class="tag tag-accent" style="font-size:22px; padding:6px 14px;">2024年ノーベル物理学賞</div>
</div>
</div>

<div style="display:flex; gap:40px; margin-top:14px;">

<div style="flex:1;">
<div style="font-weight:800; font-size:26px; margin-bottom:6px;">学習</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="display:flex; flex-direction:column; gap:6px; font-weight:800; font-size:22px;"><span>入力</span></div>
<div style="border:2.5px solid var(--accent); border-radius:8px; padding:8px 16px; text-align:center; background:var(--accent-soft);"><b style="color:var(--accent-dark);">パラメーター<br>の函</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div style="display:flex; flex-direction:column; gap:6px; font-weight:800; font-size:22px;"><span>出力</span><span style="color:#555;">評価</span></div>
</div>
<div style="font-size:20px; color:var(--accent); margin-top:4px;">↻ 更新</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; font-size:26px; margin-bottom:6px;">利用 (推論・生成)</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="font-weight:800; font-size:22px;">入力</div>
<div style="border:2.5px solid var(--accent); border-radius:8px; padding:8px 16px; text-align:center; background:var(--accent-soft);"><b style="color:var(--accent-dark);">パラメーター<br>の函</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div style="font-weight:800; font-size:22px;">出力</div>
</div>
</div>

</div>

<div class="cite pip-safe">『R1 総務省 情報通信白書』総務省 (2019)</div>

<!--
- 深層学習を解説。機械学習はデータから自動でルールを学ぶ方法、深層学習は多層ニューラルネットワークを用いる機械学習。2024年のノーベル物理学賞でも話題に。
- パラメーターの函（＝数字の羅列）に、学習では入力→出力→評価→更新を繰り返す。利用（推論・生成）では入力→出力する。
-->

---

<div class="page-title">深層学習</div>

# 大規模言語モデルの中身

<div class="subhead"><span>→ <span style="color:var(--accent-dark)">◯ 巨大な数字の塊</span></span><span class="tag tag-soft">✗ 知識集・ルール集</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<div class="box-info" style="margin:6px 0;">日本の首都__ → 日本の首都は__ → 日本の首都は東京__</div>

<div style="font-size:30px; font-weight:800; color:var(--accent-dark); margin:14px 0 4px;">ネクストワードプレディクション</div>
<div style="font-size:25px; font-weight:700;">次の言葉(トークン)の確率を予想する問題</div>

<div class="box-accent" style="margin:16px 0 6px;">GPT 4：アメリカ議会図書館の<b>全蔵書の約22倍</b>相当?<br><span style="font-size:19px;">※書籍、記事、ウェブサイト、コードなど 幅広いテキストソースを元に学習している</span></div>

</div>
<div style="width:300px; text-align:center;">
<img src="./src/fig14-nanogpt.png" alt="LLMの内部可視化" style="height:430px;">
<div class="cite" style="text-align:center;">LLM Visualization ©Bycroft 2023</div>
</div>
</div>

<!--
- 大規模言語モデルの中身は、知識集やルール集ではなく「巨大な数字の塊」。
- やっていることはネクストワードプレディクション＝次のトークンの確率を予想する問題。GPT-4はアメリカ議会図書館の全蔵書の約22倍相当のテキストで学習しているとも言われる。
-->

---

<div class="page-title">生成AIの中でしていること</div>

# 利用 (推論・生成)

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1.7;">
<img src="./src/fig15a-decoder.png" alt="デコーダによる逐次生成（計算1〜3回目）" style="width:100%;">
</div>

<div style="width:300px;">
<img src="./src/fig15b-bars.png" alt="上位5トークンの確率分布" style="width:100%;">
<div class="cite" style="text-align:center;">モデル：cyberagent/open-calm-7b</div>
</div>

</div>

<!--
- 生成AIが利用（推論・生成）でしていることを「吾輩は猫である」を例に図解。
- 計算1回目→2回目→3回目と、前処理→AI処理（デコーダ）→出力を繰り返し、出力したトークンを次の入力に足して逐次生成する。右は各時点で上位5トークンの確率分布（cyberagent/open-calm-7b）。
-->

---

<div class="page-title">ハルシネーション</div>

# ハルシネーション

<div class="box-warn" style="margin:6px 0;"><b>ハルシネーション：</b>推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">

<div style="width:320px;">
<img src="./src/fig16-halluc.png" alt="思考あり/なしの正答率比較" style="width:100%;">
<div class="cite">OpenAI https://openai.com/ja-JP/index/introducing-gpt-5/</div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin:0 0 12px;"><b>例：</b><br><b>千葉大のサークルの〇〇について教えて。</b><br><b>千葉大学の生成AI活用講座の担当教員は？</b></div>
<div class="box-accent pip-safe" style="text-align:center; font-size:26px;"><b>ハルシネーションは<br>仕組み上、起こる</b></div>
</div>

</div>

<!--
- ハルシネーション＝推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと。
- 「千葉大のサークルの〇〇について教えて」「生成AI活用講座の担当教員は？」のような、AIが知らないことを聞くと起こりやすい。仕組み上、避けられない点に注意。
-->

---

<div class="page-title">生成AIのレイヤー</div>

# 生成AIのレイヤー

<div style="display:flex; align-items:stretch; gap:14px;">

<div style="display:flex; flex-direction:column; justify-content:space-between; font-weight:800; padding:6px 0;">
<div class="tag tag-soft" style="writing-mode:vertical-rl;">応用</div>
<div class="tag tag-soft" style="writing-mode:vertical-rl;">基盤</div>
</div>

<table style="flex:1; border-collapse:collapse; font-size:21px; line-height:1.4;">
<tr><td style="background:var(--accent); color:#fff; font-weight:800; width:240px; padding:8px 12px; border:1px solid #fff;">生成AI アプリケーション</td><td style="padding:8px 12px; border:1px solid #e3e8f0;">Chat GPT, Gemini etc… インターフェースを通じて AI 機能をユーザーに提供する</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; padding:8px 12px; border:1px solid #fff;">エージェント</td><td style="padding:8px 12px; border:1px solid #e3e8f0;">DeepResearch, web検索 etc… 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; padding:8px 12px; border:1px solid #fff;">プラットフォーム</td><td style="padding:8px 12px; border:1px solid #e3e8f0;">Dify, Google AI studio etc… AI モデルの構築とデプロイに役立つツールとサービス、データマネジメントツールで構成</td></tr>
<tr><td style="background:var(--accent-dark); color:#fff; font-weight:800; padding:8px 12px; border:1px solid #fff;">大規模言語モデル</td><td style="padding:8px 12px; border:1px solid #e3e8f0;">説明の通り</td></tr>
<tr><td style="background:var(--accent-dark); color:#fff; font-weight:800; padding:8px 12px; border:1px solid #fff;">インフラストラクチャー</td><td style="padding:8px 12px; border:1px solid #e3e8f0;">コンピューターリソース、GPUなど</td></tr>
</table>

</div>

<div class="cite pip-safe">改変：Google Cloud Skills Boost</div>

<!--
- 生成AIのサービスは層（レイヤー）で整理できる。下から、インフラストラクチャー（GPU等）→大規模言語モデル→プラットフォーム→エージェント→生成AIアプリケーション。
- 下が基盤、上が応用。普段触るChatGPTやGeminiは一番上のアプリ層。
-->

---

<div class="page-title">AI agentのふるまい</div>

# AI agentのふるまい

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="width:340px;">
<img src="./src/fig18-agent.png" alt="エージェントがweb検索でエラー解決を進める様子" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1;">
<div class="box-info" style="margin:0 0 16px;"><b>グラウンディング：</b>AIが生成する回答を、特定の信頼できる情報源（ソース）にしっかりと結びつける技術</div>

<div style="display:flex; gap:30px; align-items:flex-start;">
<div>
<div style="font-weight:800; margin-bottom:6px;">昔：</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="background:#1f5e7a; color:#fff; border-radius:8px; padding:14px 18px; font-weight:800;">AI</div>
<div style="font-size:28px;">→</div>
<div style="font-weight:700;">回答</div>
</div>
</div>
<div>
<div style="font-weight:800; margin-bottom:6px;">今：</div>
<div style="display:flex; align-items:center; gap:10px;">
<div style="background:#1f5e7a; color:#fff; border-radius:8px; padding:14px 18px; font-weight:800;">データ</div>
<div style="font-size:28px; color:var(--accent);">→</div>
<div style="background:#1f5e7a; color:#fff; border-radius:8px; padding:14px 18px; font-weight:800;">AI</div>
<div style="font-size:28px;">→</div>
<div style="font-weight:700;">回答</div>
</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:18px; text-align:center;"><b>「因果推論」「思考ツール」</b>になりつつある</div>
</div>

</div>

<!--
- AI agentは、自分でweb検索などをして情報を集め、エラーの解決まで進められる。
- グラウンディング＝AIの回答を信頼できる情報源に結びつける技術。昔はAI→回答だったが、今はデータ→AI→回答と、根拠データに紐づけて答える。AIは「因果推論」「思考ツール」になりつつある。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="width:120px; padding-top:10px;">
<div style="font-weight:800; font-size:26px; margin-bottom:120px;">目的</div>
<div style="font-weight:800; font-size:26px;">目標<br>＋<br>まとめ</div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin:0 0 16px;"><b>Session 1：</b><br>AIの正体を解剖する</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st">・<b>利活用の前提知識</b>を知る</div>
<div class="st" style="font-size:22px; margin-left:1.2em;">決めるのはあなた！</div>
<div class="st" style="font-size:22px; margin-left:1.2em;">千葉大学の中でのポリシー「生成AIの指針」</div>
<div class="st" style="font-size:22px; margin-left:1.2em;">オプトアウトと大学の契約で使える生成AIサービス</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st">・<b>大規模言語モデル(LLM)</b>の中身をイメージできる</div>
<div class="st" style="font-size:22px; margin-left:1.2em;">Transformerによる「次の単語の予測」作業</div>
</div>

<div class="stepbox pip-safe" style="margin:8px 0;">
<div class="st">・<b>生成AIサービスのレイヤー</b>がわかる</div>
<div class="st" style="font-size:22px; margin-left:1.2em;">インフラ→LLM→プラットフォーム→エージェント→アプリ</div>
</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は「AIの正体を解剖する」。
- 目標は3点：利活用の前提知識（決めるのはあなた／生成AIの指針／オプトアウト）、大規模言語モデルの中身（Transformerの次単語予測）、生成AIサービスのレイヤー（インフラ→LLM→プラットフォーム→エージェント→アプリ）。
-->

---

<!-- _class: divider -->

<div class="page-title">Session 2</div>

# AIを学習と研究の<br>相棒にしてみよう

<div class="sub" style="font-size:26px; color:var(--accent); font-weight:700; margin:10px 0 18px;">大学における生成AIとの関わり方を考える 15-min × 5 sessions</div>

<div class="box-info" style="display:inline-block; font-size:28px;"><b>Session 2：</b><br>学びのためのプロンプト作成のスキル</div>

<div style="margin-top:36px; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2に入ります。「AIを学習と研究の相棒にしてみよう」。
- このセッションでは、学びのためのプロンプト作成のスキルを扱います。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# Session 2の目的・到達目標

<div style="display:flex; gap:28px; align-items:center; margin-top:30px;">
<div style="font-weight:800; font-size:30px; width:90px;">目的</div>
<div class="box-info" style="flex:1; font-size:28px;"><b>Session 2：</b><br>学びのためのプロンプト作成のスキルを知る</div>
</div>

<div style="display:flex; gap:28px; align-items:center; margin-top:50px;">
<div style="font-weight:800; font-size:30px; width:90px;">目標</div>
<div class="box-accent pip-safe" style="flex:1; font-size:27px;">
・<b>システムプロンプトが何か</b>を理解する<br>
・<b>プロンプトの型</b>を理解する<br>
・<b>作成の3つのコツを説明できる</b>
</div>
</div>

<!--
- Session 2の目的は「学びのためのプロンプト作成のスキルを知る」こと。
- 目標は3つ：システムプロンプトが何かを理解する、プロンプトの型を理解する、作成の3つのコツを説明できる。
-->

---

<div class="page-title">プロンプトとは</div>

# プロンプトとは

<div class="box-info" style="margin:6px 0;"><b>プロンプト：</b><br>生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</div>

<div style="display:flex; align-items:center; gap:24px; margin:14px 0;">
<div style="font-size:30px; font-weight:700; margin-left:40px;">吾輩は＿＿＿???</div>
<img src="./src/fig22-robot.png" alt="考えるロボット" style="height:130px;">
</div>

<div class="box-accent" style="margin:8px 0;"><b>プロンプトエンジニアリング：</b><br>生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること</div>

<div class="box-accent pip-safe" style="margin:8px 0;"><b>コンテキスト内学習：</b><br>プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</div>

<!--
- プロンプトとは、生成AIに実行すべきタスクの生成を促す、自然言語による文章のこと。「吾輩は＿＿＿」の続きを予想させるイメージ。
- プロンプトエンジニアリング＝望ましい出力を得るために指示を設計・最適化すること。コンテキスト内学習＝プロンプトに与えた文章からタスクの結果を生成できるようになること。
-->

---

<div class="page-title">AIの創発</div>

# AIの創発

<div class="box-accent" style="font-size:30px; margin:30px 0; text-align:center; padding:24px 30px;">具体的に教えていないのに、<b>モデルを大規模化するとタスクを解けるようになる</b>こと</div>

<img src="./src/fig23-emergence.png" alt="モデル規模と各タスク精度の創発的な立ち上がり（8タスク）" style="width:92%; display:block; margin:10px auto 0;">

<!--
- AIの創発（emergence）。具体的に教えていないのに、モデルを大規模化するとタスクを解けるようになる現象のこと。
- 図は各タスクで、モデル規模がある閾値を超えると精度が急に立ち上がる様子を示している。
-->

---

<div class="page-title">Few-shotやスキーマ</div>

# Few-shotやスキーマ

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1.1;">
<div class="box-info" style="margin:0 0 10px;"><b>Few-shot：</b>プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法。コンテキスト内学習をGPTが出来るので、実現する</div>
<div class="box-accent pip-safe" style="margin:0;"><b>スキーマ：</b>回答してほしいことをすべて構造化し、回答形式として指定する。<br><b>※Few-shotを組み合わせ、回答を例示する</b></div>
</div>

<div style="flex:1;">
<div style="background:#EAF2FB; border:2px solid var(--tag-blue); border-radius:10px; padding:8px 14px; font-size:20px; margin-bottom:8px;"><b>Google検索的 (単語)</b><br>これは素晴らしい! 感情?</div>
<div style="background:#EFEFEF; border:2px solid #888; border-radius:10px; padding:8px 14px; font-size:20px; margin-bottom:8px;"><b>Zero-shot</b><br>「これは素晴らしい!」と書いた書き手の感情を教えて下さい</div>
<div style="background:var(--accent-soft); border:2px solid var(--accent); border-radius:10px; padding:8px 14px; font-size:20px;"><b>Few-shot</b><br>あの映画は最高だった! ＞ポジティブ<br>これは酷い! ＞ネガティブ<br>「これは素晴らしい!」＞?</div>
<div style="font-size:20px; margin-top:8px;"><b>例)</b> 授業のタイトル：／目的：／到達目標：／宿題の案：</div>
</div>

</div>

<div class="cite pip-safe">Prompt Engineering Guide https://www.promptingguide.ai/jp/techniques/fewshot</div>

<!--
- Few-shot＝プロンプト内に入力例と出力例のデモを提供して、より高性能な結果を得る技法。コンテキスト内学習をGPTが行えるので実現する。
- 右は感情分析を例にした比較：Google検索的な単語、Zero-shot、Few-shot。スキーマは回答してほしいことをすべて構造化して回答形式として指定する手法で、Few-shotと組み合わせて回答を例示する。
-->
