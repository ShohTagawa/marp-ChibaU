<div class="page-title">AI時代の教え方</div>

# AI時代の教え方

<div style="font-size:40px; font-weight:800; text-align:center; margin-top:-6px;">大学教育への事例をもとに</div>

<div class="lead-note" style="color:var(--accent); text-align:center; margin-top:22px;">大学における生成AIとの関わり方を考える 15 - min × 6 sessions</div>

<div class="goal-box" style="max-width:880px; margin:14px auto 0; background:var(--section-bg); border:none;"><b>Session 3：</b><br><span class="ind">プロンプトを書くコツ</span></div>

<div style="text-align:center; font-size:27px; margin-top:30px;">千葉大学 国際未来教育基幹 田川 翔</div>

<!--
- Session 3「プロンプトを書くコツ」に入ります。
-->

---

<div class="page-title">Session 3の目的・到達目標</div>

# <span style="color:var(--accent-dark)">Session 3</span>の目的・到達目標

<div style="display:grid; grid-template-columns:6em 1fr; gap:18px 20px; align-items:center; margin-top:24px;">

<div style="font-size:34px; font-weight:800;">目的</div>
<div class="goal-box" style="margin:0; background:var(--section-bg); border:none;"><b>Session 3：</b><br><span class="ind">学びのためのプロンプト作成のスキルを知る</span></div>

<div style="font-size:34px; font-weight:800;">目標</div>
<div class="box-accent"><b>システムプロンプトが何か</b>を理解する<br><b>プロンプトの型</b>を理解する<br><b>作成の3つのコツを説明できる</b></div>

</div>

<!--
- Session 3の目的と目標。システムプロンプト・プロンプトの型・3つのコツを押さえます。
-->

---

<div class="page-title">プロンプトとは</div>

# プロンプトとは

<div class="box-accent" style="margin-top:8px;"><b>プロンプト：</b><br>生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</div>

<div style="display:flex; align-items:center; gap:30px; margin:10px 0;">
<div style="font-size:30px; font-weight:700; flex:1; text-align:center;">吾輩は＿＿＿???</div>
<img src="./src/fig39-robot-crop.png" alt="ロボット" style="height:160px;">
</div>

<div class="box-info" style="margin-top:4px;"><b>プロンプトエンジニアリング：</b><br>生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること (NRI 用語集)</div>

<div class="box-info" style="margin-top:10px;"><b>コンテキスト内学習：</b><br>プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</div>

<!--
- プロンプトとは何か、プロンプトエンジニアリング、コンテキスト内学習の3用語を整理します。
-->

---

<div class="page-title">AIの創発</div>

# AIの<span style="color:var(--accent-dark)">創発</span>

<div class="box-accent" style="margin-top:6px;">具体的に教えていないのに、<b>モデルを大規模化するとタスクを解けるようになる</b>こと</div>

<div style="text-align:center; margin-top:14px;">
<img src="./src/fig40-emergence-crop.png" alt="モデル規模と精度の関係（創発）" style="height:380px; box-shadow:0 2px 8px rgba(0,0,0,.15); border-radius:6px;">
</div>

<!--
- 創発：大規模化すると、教えていないタスクをある規模を超えて急に解けるようになる現象です。
-->

---

<div class="page-title">Few-shotやスキーマ</div>

# Few-shotやスキーマ

<div style="display:flex; gap:18px;">
<div style="flex:1.05;">

<div class="box-info"><b>Few-shot：</b><br>プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法<br>コンテキスト内学習をGPTが出来るので、実現する</div>

<div class="cite">Prompt Engineering Guide <a>https://www.promptingguide.ai/jp/techniques/fewshot</a></div>

<div class="box-accent" style="margin-top:8px;"><b>スキーマ ：</b><br>回答してほしいことをすべて構造化し、回答形式として指定する。<br><b>※Few-shotを組み合わせ、回答を例示する</b></div>

</div>
<div style="flex:1;">

<div style="display:flex; gap:10px;">
<div style="flex:1;">
<div style="font-weight:800; font-size:20px;">Google検索的 (単語)</div>
<div style="background:#E8EEF7; border-radius:8px; padding:8px 10px; font-size:18px; margin-top:4px;">これは素晴らしい! 感情?</div>
</div>
<div style="flex:1.1;">
<div style="font-weight:800; font-size:20px;">Zero-shot</div>
<div style="background:#E6F1E8; border-radius:8px; padding:8px 10px; font-size:18px; margin-top:4px;">「これは素晴らしい!」と 書いた書き手の感情を教えて下さい</div>
</div>
</div>

<div style="margin-top:8px;">
<div style="font-weight:800; font-size:20px;">Few-shot</div>
<div style="background:#FBE4E9; border-radius:8px; padding:8px 10px; font-size:18px; margin-top:4px;">あの映画は最高だった!<br>&gt;ポジティブ<br>これは酷い! &gt;ネガティブ<br>「これは素晴らしい!」&gt;?</div>
</div>

<div style="margin-top:8px;">
<div style="font-weight:800; font-size:20px;">例) <span style="font-weight:600;">スキーマ</span></div>
<div style="background:#FCF3DA; border-radius:8px; padding:8px 10px; font-size:18px; margin-top:4px;"><b>授業のタイトル：</b><br>　目的：<br>　到達目標：<br>　宿題の案：</div>
</div>

</div>
</div>

<!--
- Zero-shot / Few-shot / スキーマの違いを、感情分析の例で並べて示します。
-->

---

<div class="page-title">参考：より高度な利用</div>

# 　参考：より高度な利用

<div style="display:flex; gap:18px;">
<div style="flex:1;">

<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">Structured Output（構造化出力）</div>
<div style="font-size:20px; margin:4px 0;"><b>定義:</b> LLMの出力を、事前に定義されたJSONスキーマなどの構造に沿って生成する技術。</div>
<div style="font-size:20px;"><b>利点:</b></div>
<ul style="font-size:19px; margin:2px 0 6px 1.1em; line-height:1.4;">
<li>予測可能な出力形式で後続処理を容易に</li>
<li>スキーマに合致しない誤ったデータを自動で拒否</li>
<li>プロンプトを簡潔にし、LLMへの指示を削減</li>
</ul>
<div style="font-size:19px;"><b>簡単な例:</b> ユーザー情報抽出のためのJSONスキーマ</div>
<pre style="font-size:14px; background:#F4F6F9; border-radius:6px; padding:8px; line-height:1.3; white-space:pre-wrap;">{ "type": "object", "properties": {
  "name": { "type": "string" },
  "email": { "type": "string", "format": "email" },
  "age": { "type": "integer" } },
  "required": ["name", "email"]}</pre>

</div>
<div style="flex:1;">

<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">Function Calling（関数呼び出し）</div>
<div style="font-size:20px; margin:4px 0;"><b>定義:</b> LLMがユーザーの意図を解釈し、外部ツール（API）を呼び出し特定のアクションを実行する機能。</div>
<div style="font-size:20px;"><b>用途:</b></div>
<ul style="font-size:19px; margin:2px 0 6px 1.1em; line-height:1.4;">
<li>レストラン予約やオンラインショッピングの注文処理</li>
<li>カレンダー管理など外部アプリとの連携</li>
<li>データ検索やアクション実行の自動化</li>
</ul>
<div style="font-size:19px;"><b>簡単な例:</b> レストラン予約のための関数呼び出し</div>
<pre style="font-size:14px; background:#F4F6F9; border-radius:6px; padding:8px; line-height:1.3; white-space:pre-wrap;">bookRestaurant(restaurant_name, date, time,
  party_size, special_requests)
tool_name: レストラン予約
tool_description: 指定されたレストランの予約を行います。</pre>

</div>
</div>

<div class="box-accent pip-safe" style="margin-top:6px; padding:8px 20px; font-size:21px;">AIの応答をより予測可能かつ信頼性の高いものに出来る。データの正確な処理と外部連携により、AI活用の幅が大きく広がる。</div>

<div class="cite pip-safe"><a>https://platform.openai.com/docs/guides/structured-outputs</a></div>

<!--
- 参考として、Structured OutputとFunction Callingという高度な利用を紹介します。
-->

---

<div class="page-title">プロンプト作成のコツ</div>

# プロンプト作成のコツ

<div class="lead-note" style="font-size:30px;">プロンプトを作成する上での3つのコツ</div>

<div class="box-accent" style="font-size:30px; padding:16px 28px;">①<b>試行錯誤の重要性を知る</b><br>②<b>十分なコンテキストを与える</b><br>③<b>型を知る</b></div>

<div class="box-info" style="margin-top:14px;">特に、<b>人に頼むときのマニュアルをイメージ</b><br><b> → 頭から手順通りに説明する / 必要な情報を渡す</b></div>

<div class="box-info" style="margin-top:10px;"><b>プログラム経験がある人は、コードをイメージ</b><br><b> → 分岐や定義を作成していくイメージ</b></div>

<!--
- プロンプト作成の3つのコツ。試行錯誤・コンテキスト・型。人に頼むマニュアル、あるいはコードをイメージすると分かりやすいです。
-->

---

<div class="page-title">良いプロンプトの書き方</div>

# 良いプロンプトの書き方

<div class="lead-note">次の要素を含める</div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info"><b>簡単な 3R法</b><br>Request（依頼）を出す<br>Role（役割）を決める<br>Regulation（形式）を指定する</div>

<div class="box-info" style="margin-top:10px;"><b>フルモデル 7R法</b><br>Request（依頼）を出す<br>Role（役割）を決める<br>Regulation（形式）を指定する<br>Rule（ルール）を定める<br>Review &amp; Refine（評価・改善）を求める<br>Reference（参照知識・例）を与える</div>

</div>
<div style="flex:1;">

<div class="box-warn"><b>注意点(再掲)</b><br>最初から完璧を目指さない<br>　a. <b>試行錯誤(改善サイクルを回す)が重要</b><br>　b. 出てきた回答がイマイチなら、出てきた結果と元のプロンプトをセットで再度AIにいれ、「プロンプトの書き換え」を頼む<br><b>十分なコンテキストを与える</b></div>

</div>
</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる | 野口 竜司 (東洋経済新報社 2023)</div>

<!--
- 良いプロンプトの書き方。3R法・7R法と注意点。最初から完璧を目指さず、試行錯誤と十分なコンテキストが鍵です。
-->

---

<div class="page-title">プロンプティングの学習方法</div>

# プロンプティングの学習方法

<div class="stepbox" style="margin-top:14px;">
<div class="st">① <b>使い込んでいる人の使い方</b>を見る</div>
</div>

<div class="stepbox">
<div class="st">② <b>模範例のプロンプトを書き換えてみる</b></div>
</div>

<div class="stepbox">
<div class="st">③ <b>しっくりくる回答が出力されるまで、何度も試行錯誤する</b></div>
</div>

<div class="stepbox">
<div class="st">④ <b>他の人と話し、質問力を向上させる</b></div>
</div>

<div class="stepbox pip-safe">
<div class="st">⑤ <b>めんどうとなったら、AIに外注できないか</b>、考えてみる</div>
</div>

<div class="cite pip-safe"><a>https://www.promptingguide.ai/</a></div>

<!--
- プロンプティングの学習方法を5段階で。最後は、めんどうならAIに外注できないか考える、という発想です。
-->

---

<div class="page-title">Session 3の目的・到達目標</div>

# <span style="color:var(--accent-dark)">Session 3</span>の目的・到達目標　<span style="font-size:26px;">振り返り</span>

<div style="display:grid; grid-template-columns:6em 1fr; gap:14px 18px; align-items:start; margin-top:14px;">

<div style="font-size:30px; font-weight:800; align-self:center;">目的</div>
<div class="goal-box" style="margin:0; padding:10px 24px; background:var(--section-bg); border:none;"><b>Session 3：</b><span class="ind">学びのためのプロンプト作成のスキルを知る</span></div>

<div style="font-size:28px; font-weight:800;">目標<br>＋<br>まとめ</div>
<div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">・システムプロンプトが何かを理解する</div>
<div style="font-size:21px; margin:2px 0 8px 1.3em;">生成AIの振る舞いや応答方針を制御するための指示<br>プロンプトの練習や試行錯誤に向いている<br>チャットボットで入力するのは「ユーザープロンプト」</div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">・プロンプトの型をイメージできる</div>
<div style="font-size:21px; margin:2px 0 8px 1.3em;">R法：Request、Role、Regulation、Rule、Reference</div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">・作成の3つのコツを説明できる</div>
<div style="font-size:21px; margin:2px 0 0 1.3em;">①<b>試行錯誤</b>は重要 ②十分な<b>コンテキスト</b>を ③<b>型</b>を知る</div>
</div>

</div>

<!--
- Session 3の振り返り。システムプロンプト・型（R法）・3つのコツを再確認します。
-->

---

<div class="page-title">AI時代の教え方</div>

# AI時代の教え方

<div style="font-size:40px; font-weight:800; text-align:center; margin-top:-6px;">大学教育への事例をもとに</div>

<div class="lead-note" style="color:var(--accent); text-align:center; margin-top:22px;">大学における生成AIとの関わり方を考える 15 - min × 6 sessions</div>

<div class="goal-box" style="max-width:880px; margin:14px auto 0; background:var(--section-bg); border:none;"><b>Session 4 ハンズオン：</b><br><span class="ind">自作Gemアプリを作ってみる</span></div>

<div style="text-align:center; font-size:27px; margin-top:30px;">千葉大学 国際未来教育基幹 田川 翔</div>

<!--
- Session 4は、自作Gemアプリを作るハンズオンです。
-->

---

<div class="page-title">システムプロンプト</div>

# システムプロンプト

<div class="box-accent" style="margin-top:4px;">生成AIの振る舞いや応答方針を制御するための指示 →　<b>練習や道具として便利</b></div>

<div style="display:flex; align-items:flex-start; gap:18px; margin-top:14px;">
<div style="font-size:30px; font-weight:800; padding-top:8px;">Gem</div>
<div style="flex:1; text-align:center;">
<img src="./src/fig48-gem-crop.png" alt="GemのシステムプロンプトとユーザープロンプトのUI" style="height:380px; box-shadow:0 2px 8px rgba(0,0,0,.2); border-radius:8px;">
<div style="font-size:22px; margin-top:6px;"><b>システムプロンプト</b> <span style="color:#666;">(コンテキストの一部)</span> ／ <b>ユーザープロンプト</b></div>
</div>
</div>

<!--
- システムプロンプトは、生成AIの振る舞いを制御する指示。Gemでは、これを設定して練習や道具にできます。
-->
