<div class="page-title">参考：より高度な利用</div>

# <span style="color:var(--accent-dark)">参考：より高度な利用</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:1;">

<div class="subhead"><span style="color:var(--accent-dark)">Structured Output（構造化出力）</span></div>

<div style="font-size:21px; line-height:1.45;"><b>定義:</b> LLMの出力を、事前に定義されたJSONスキーマなどの構造に沿って生成する技術。</div>

<div style="font-size:21px; margin-top:6px;"><b>利点:</b></div>
<ul style="font-size:20px; margin:2px 0 0 1.1em; line-height:1.4;">
<li>予測可能な出力形式で後続処理を容易に</li>
<li>スキーマに合致しない誤ったデータを自動で拒否</li>
<li>プロンプトを簡潔にし、LLMへの指示を削減</li>
</ul>

<div style="font-size:20px; margin-top:6px;"><b>簡単な例:</b> ユーザー情報抽出のためのJSONスキーマ</div>

<pre style="background:#1e2430; color:#d6e2f0; border-radius:8px; padding:8px 12px; font-size:14px; line-height:1.35; margin:4px 0 0; overflow:hidden;">{ "type": "object", "properties": {
  "name":  { "type": "string" },
  "email": { "type": "string", "format": "email" },
  "age":   { "type": "integer" } },
  "required": ["name", "email"] }</pre>

</div>

<div style="flex:1;">

<div class="subhead"><span style="color:var(--accent-dark)">Function Calling（関数呼び出し）</span></div>

<div style="font-size:21px; line-height:1.45;"><b>定義:</b> LLMがユーザーの意図を解釈し、外部ツール（API）を呼び出し特定のアクションを実行する機能。</div>

<div style="font-size:21px; margin-top:6px;"><b>用途:</b></div>
<ul style="font-size:20px; margin:2px 0 0 1.1em; line-height:1.4;">
<li>レストラン予約やオンラインショッピングの注文処理</li>
<li>カレンダー管理など外部アプリとの連携</li>
<li>データ検索やアクション実行の自動化</li>
</ul>

<div style="font-size:20px; margin-top:6px;"><b>簡単な例:</b> レストラン予約のための関数呼び出し</div>

<pre style="background:#1e2430; color:#d6e2f0; border-radius:8px; padding:8px 12px; font-size:13px; line-height:1.35; margin:4px 0 0; overflow:hidden;">tool_name: レストラン予約
tool_description: 指定されたレストランの予約を行います。
bookRestaurant(restaurant_name, date, time,
               party_size, special_requests)
  date: 予約希望日 (YYYY-MM-DD)
  time: 予約希望時刻 (HH:MM)
  party_size: 予約人数（整数）</pre>

</div>

</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:20px;">AIの応答をより予測可能かつ信頼性の高いものに出来る。<br>データの正確な処理と外部連携により、AI活用の幅が大きく広がる。</div>

<div class="cite" style="margin-top:4px;">https://platform.openai.com/docs/guides/structured-outputs</div>

<!--
- 参考トピック。Structured Output＝出力をJSONスキーマに沿わせる技術。後続処理が楽になり、誤データを弾ける。
- Function Calling＝LLMが外部ツール（API）を呼び出して実際のアクションを行う機能。予約や検索の自動化。
- どちらもAIの応答を予測可能・信頼性高くし、活用の幅を広げる。[NOTE]
-->

---

<div class="page-title">システムプロンプト</div>

# <span style="color:var(--accent-dark)">システムプロンプト</span>

<div class="lead-note" style="font-size:27px; margin-bottom:10px;">生成AIの振る舞いや応答方針を制御するための指示　→　<span style="color:var(--accent);">練習や道具として便利</span></div>

<div style="display:flex; align-items:flex-start; gap:18px;">
<div style="font-size:30px; font-weight:800; padding-top:4px;">Gem</div>
<img src="./src/fig26-crop.png" alt="GemのシステムプロンプトとユーザープロンプトのUI" style="width:1000px; border:1px solid #d6dbe4; border-radius:8px;">
</div>

<!--
- システムプロンプト＝生成AIの振る舞いや応答方針を制御するための指示。練習や道具づくりに便利。
- 例えばGemでは「カスタム指示」に書くのがシステムプロンプト（コンテキストの一部）。チャット欄に入力するのがユーザープロンプト。[NOTE]
-->

---

<div class="page-title">良いプロンプトの書き方</div>

# <span style="color:var(--accent-dark)">良いプロンプトの書き方</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:1.05;">

<div class="lead-note" style="color:var(--accent-dark);">図表5-4　簡易プロンプト</div>
<div class="flowrow" style="gap:10px; margin:6px 0 16px;">
<div class="fbox gray" style="font-size:22px; padding:18px 10px;">入力</div>
<div class="farrow" style="color:var(--accent);">▶</div>
<div style="flex:1;">
<div style="border:2px solid var(--accent); border-radius:18px; padding:3px 14px; margin:4px 0; font-size:19px;"><b>Request</b>（依頼）を出す</div>
<div style="border:2px solid var(--accent); border-radius:18px; padding:3px 14px; margin:4px 0; font-size:19px;"><b>Role</b>（役割）を決める</div>
<div style="border:2px solid var(--accent); border-radius:18px; padding:3px 14px; margin:4px 0; font-size:19px;"><b>Regulation</b>（形式）を指定する</div>
</div>
<div class="farrow" style="color:var(--accent);">▶</div>
<div class="fbox gray" style="font-size:22px; padding:18px 10px;">出力</div>
</div>

<div class="lead-note" style="color:var(--accent-dark);">図表5-5　詳細プロンプト</div>
<div class="flowrow" style="gap:10px; margin:6px 0;">
<div class="fbox gray" style="font-size:22px; padding:30px 10px;">入力</div>
<div class="farrow" style="color:var(--accent);">▶</div>
<div style="flex:1;">
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Request</b>（依頼）を出す</div>
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Role</b>（役割）を決める</div>
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Regulation</b>（形式）を指定する</div>
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Rule</b>（ルール）を定める</div>
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Review &amp; Refine</b>（評価・改善）を求める</div>
<div style="border:2px solid var(--accent); border-radius:16px; padding:2px 12px; margin:3px 0; font-size:18px;"><b>Reference</b>（参照知識・例）を与える</div>
</div>
<div class="farrow" style="color:var(--accent);">▶</div>
<div class="fbox gray" style="font-size:22px; padding:30px 10px;">出力</div>
</div>

</div>

<div style="flex:1;">
<div class="lead-note" style="color:var(--accent-dark);">図表5-1　プロンプト上手になるための7つのポイント</div>
<table style="border-collapse:collapse; font-size:17px; line-height:1.35; width:100%;">
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">①明確な質問</td><td style="padding:3px 8px;">曖昧な質問ではなく明確な質問をすることで、より良い回答が得られます。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">②具体性</td><td style="padding:3px 8px;">トピックや要求に具体的な詳細を提供することで、適切な回答を引き出すことができます。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">③プロンプトの構造</td><td style="padding:3px 8px;">質問を構造化して、抜け・漏れをなくします。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">④文脈の提供</td><td style="padding:3px 8px;">重要な文脈や背景情報を提供します。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">⑤複数の質問</td><td style="padding:3px 8px;">必要に応じて、複数の質問を連続して投げます。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">⑥ステップバイステップ指示</td><td style="padding:3px 8px;">段階的に考えさせます。</td></tr>
<tr><td style="background:var(--accent); color:#fff; font-weight:800; border-radius:14px; padding:3px 10px; white-space:nowrap;">⑦校正とフィードバック</td><td style="padding:3px 8px;">得られた結果を評価し、精度向上を促します。</td></tr>
</table>
</div>

</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる | 野口 竜司 (東洋経済新報社 2023)</div>

<!--
- 野口竜司さんの本から。プロンプトの「型」。簡易版はRequest/Role/Regulationの3R、詳細版はそこにRule/Review&Refine/Referenceを足す。
- 右の表は「7つのポイント」。明確な質問・具体性・構造・文脈・複数質問・ステップバイステップ・校正とフィードバック。[NOTE]
-->

---

<div class="page-title">プロンプト作成のコツ</div>

# <span style="color:var(--accent-dark)">プロンプト作成のコツ</span>

<div class="subhead">プロンプトを作成する上での3つのコツ</div>

<div class="box-accent" style="font-size:30px; font-weight:800; line-height:1.7;">
①試行錯誤の重要性を知る<br>
②十分なコンテキストを与える<br>
③型を知る
</div>

<div class="stepbox" style="margin-top:18px;">
<div class="st">特に、<b>人に頼むときのマニュアルをイメージ</b><br><span style="margin-left:1em;"><span class="em">→ 頭から手順通りに説明する / 必要な情報を渡す</span></span></div>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>プログラム経験がある人は、コードをイメージ</b><br><span style="margin-left:1em;">→ 分岐や定義を作成していくイメージ</span></div>
</div>

<!--
- プロンプト作成の3つのコツ。①試行錯誤が大事、②十分なコンテキストを与える、③型を知る。
- イメージとしては「人に頼むときのマニュアル」＝頭から手順通りに説明し必要情報を渡す。プログラム経験者は「コード」＝分岐や定義を作るイメージで。[NOTE]
-->

---

<div class="page-title">AIツールの「逆向き設計」</div>

# <span style="color:var(--accent-dark)">AIツールの「逆向き設計」</span>

<div class="subhead">AIツールを設計し、評価する際の起点となる3つの設計</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st">① <b>求める結果を明確にする（目的）</b></div>
<div class="st">② <b>正しく回答した証拠を考える（評価）</b></div>
<div class="st">③ <b>動作を計画する（内容）</b></div>
</div>

<div class="box-warn pip-safe" style="margin-top:20px;">
通常は、<b>内容だけ</b>を考えそうだが、それでは、ツールをうまく作ることは出来ない。<br>
<span style="font-weight:400; color:#555;">※機械学習の設計にも通じる</span>
</div>

<!--
- AIツールづくりも「逆向き設計」。①求める結果（目的）→②正しく回答した証拠（評価）→③動作（内容）の順で考える。
- ふつうは内容だけ考えがちだが、それではうまく作れない。機械学習の設計にも通じる考え方。[NOTE]
-->

---

<div class="page-title">プロンプティングの学習方法</div>

# <span style="color:var(--accent-dark)">プロンプティングの学習方法</span>

<div class="wrap3" style="font-size:27px; line-height:1.5; margin-top:14px;">
<div style="margin:14px 0;"><span class="no" style="color:var(--accent);">①</span> <b>使い込んでいる人の使い方</b>を見る</div>
<div style="margin:14px 0;"><span class="no" style="color:var(--accent);">②</span> <b>模範例のプロンプトを書き換えてみる</b><br><span class="cite" style="margin-left:1.6em;">https://www.promptingguide.ai/</span></div>
<div style="margin:14px 0;"><span class="no" style="color:var(--accent);">③</span> <b>しっくりくる回答が出力されるまで、　何度も試行錯誤する</b></div>
<div style="margin:14px 0;"><span class="no" style="color:var(--accent);">④</span> <b>他の人と話し、質問力を向上させる</b></div>
</div>

<div class="box-accent pip-safe" style="margin-top:6px;">
<span style="color:var(--accent); font-weight:800;">⑤</span> <b>めんどうとなったら、AIに外注できないか</b>、考えてみる
</div>

<!--
- プロンプティングの学び方。①使い込んでいる人の使い方を見る、②模範例を書き換える、③しっくりくるまで試行錯誤、④他の人と話して質問力を上げる。
- そして⑤面倒になったら「AIに外注できないか」を考える＝次のメタプロンプトの話につながる。[NOTE]
-->

---

<div class="page-title">メタプロンプト</div>

# <span style="color:var(--accent-dark)">メタプロンプト</span>

<div class="box-info" style="margin-top:8px; font-size:25px;">
タスクや課題の具体的な内容ではなく、その構造的および構文的な側面に焦点を当てるプロンプティング技術のこと。
</div>

<div class="box-accent" style="margin-top:12px; font-size:23px;">
<b>Structural template for <span style="color:var(--accent);">how to think</span> rather than specific examples of what to think.</b>
<div class="cite" style="margin-top:2px;">Zhang et al. (2023) arXiv</div>
</div>

<div class="lead-note" style="margin-top:14px; font-size:25px;">
こうなってくると、自分自身で一人でプロンプトを書くよりも、<br>
<span style="margin-left:2em;"><span style="color:var(--accent); font-weight:800;">生成AIとともにプロンプトを作成</span>しても質がよくなりうる。</span>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:21px;">
Gem用のスペシフィックなプロンプトを作成することを支援するGemを作っていますので必要であれば、活用下さい。<br>
<span style="font-weight:400;">https://gemini.google.com/gem/1aeUIrc7SISkL1nS8jxXT8zZP5vOBA5Iz?usp=sharing</span>
</div>

<!--
- メタプロンプト＝課題の中身ではなく「どう考えるか」の構造・構文に焦点を当てる技術。Zhangらの言葉で言えば how to think のテンプレート。
- ここまでくると、一人で書くより「生成AIと一緒にプロンプトを作る」方が質が良くなる。Gem作成を支援するGemも用意したので活用を。[NOTE]
-->

---

<!-- _class: summary -->

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:5.5em 1fr; gap:14px 18px; align-items:start;">

<div style="font-size:30px; font-weight:800; padding-top:6px;">目的</div>
<div class="sec-box" style="background:var(--section-bg); border-radius:12px; padding:14px 24px;">
<h3 style="margin:0;">Session 2：</h3>
<div style="font-size:24px; margin-left:1em;">学びのためのプロンプト作成のスキルを知る</div>
</div>

<div style="font-size:28px; font-weight:800; padding-top:6px;">目標<br>＋<br>まとめ</div>
<div class="sec-box" style="background:var(--section-bg); border-radius:12px; padding:12px 24px;">
<ul style="margin:0; padding-left:1.1em; font-size:22px; line-height:1.4;">
<li><b>システムプロンプトが何かを理解する</b>
<ul style="font-size:20px; color:#444;"><li>生成AIの振る舞いや応答方針を制御するための指示</li><li>プロンプトの練習や試行錯誤に向いている</li><li>チャットボットで入力するのは「ユーザープロンプト」</li></ul></li>
<li><b>プロンプトの型</b>をイメージできる
<ul style="font-size:20px; color:#444;"><li>R法：Request、Role、Regulation、Rule、Reference</li></ul></li>
<li><b>作成の3つのコツを説明できる</b>
<ul style="font-size:20px; color:#444;"><li>①<b>試行錯誤</b>は重要 ②十分な<b>コンテキスト</b>を ③<b>型</b>を知る</li></ul></li>
</ul>
</div>

</div>

<!--
- Session 2の振り返り。目的は「学びのためのプロンプト作成のスキルを知る」。
- 目標とまとめ：①システムプロンプトの理解（振る舞いを制御する指示／練習向き／チャット欄はユーザープロンプト）、②プロンプトの型＝R法、③作成の3つのコツ（試行錯誤・コンテキスト・型）。[NOTE]
-->

---

<!-- _class: divider -->

<div class="page-title">　</div>

<div class="title-hero" style="text-align:left;">
<div class="title-big" style="color:var(--accent-dark);">AIを学習と研究の<br>相棒にしてみよう</div>
</div>

<div style="color:var(--accent); font-size:27px; font-weight:700; margin:14px 0 22px;">大学における生成AIとの関わり方を考える　15-min × 5 sessions</div>

<div class="goal-box" style="background:var(--section-bg); border:none; max-width:760px;">
<b>Session 3 ハンズオン：</b><br><span class="ind">Gemに困りごとを解決してもらおう</span>
</div>

<div style="text-align:center; font-size:26px; margin-top:26px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 3。ハンズオンで「Gemに困りごとを解決してもらおう」。実際に手を動かしていきます。[NOTE]
-->

---

<!-- _class: divider -->

<div class="page-title">　</div>

<div class="title-hero" style="text-align:left;">
<div class="title-big" style="color:var(--accent-dark);">AIを学習と研究の<br>相棒にしてみよう</div>
</div>

<div style="color:var(--accent); font-size:27px; font-weight:700; margin:14px 0 22px;">大学における生成AIとの関わり方を考える　15-min × 5 sessions</div>

<div class="goal-box" style="background:var(--section-bg); border:none; max-width:760px;">
<b>Session 4：</b><br><span class="ind">学ぶための生成AI活用法</span>
</div>

<div style="text-align:center; font-size:26px; margin-top:26px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 4は「学ぶための生成AI活用法」。学習と研究それぞれでどう使えるかを見ていきます。[NOTE]
-->

---

<div class="page-title">Session 4の目的・到達目標</div>

<div style="display:grid; grid-template-columns:5em 1fr; gap:38px 22px; align-items:center; margin-top:30px;">

<div style="font-size:34px; font-weight:800;">目的</div>
<div class="goal-box" style="background:var(--section-bg); border:none; margin:0;">
<b>Session 4：</b><span class="ind">学びのためのAI活用法のアイデアを知る</span>
</div>

<div style="font-size:34px; font-weight:800;">目標</div>
<div class="goal-box" style="background:var(--section-bg); border:none; margin:0; font-size:26px;">
・そもそも論として、AIとの付き合い方を考える<br>
・学習に利用する際のアイデアを見つける<br>
・研究に利用する際の活用例を知る
</div>

</div>

<!--
- Session 4の目的は「学びのためのAI活用法のアイデアを知る」。
- 目標は3つ：①そもそもAIとの付き合い方を考える、②学習で使うアイデアを見つける、③研究で使う活用例を知る。[NOTE]
-->

---

<div class="page-title">学習におけるAI利用の考え方</div>

# <span style="color:var(--accent-dark)">学習におけるAI利用の考え方</span>

<div class="box-warn" style="margin-top:6px; font-size:23px;">
<b>NG:</b> AIに答えを聞く、正解を聞く、コスパ/タイパ至上主義<br>
→ <span style="color:var(--accent-dark);">考えたり、研究を深めたりするため</span>にAIを活用する
</div>

<div style="display:flex; gap:16px; align-items:stretch; margin-top:12px;">

<div style="flex:1.5; border:2px dashed var(--accent); border-radius:12px; padding:12px 16px; position:relative;">
<div style="position:absolute; top:-14px; left:14px; background:#fff; padding:0 8px; font-size:18px; font-weight:800; color:var(--accent-dark);">授業利用における活用の考え方の例</div>
<div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:6px;">
<div style="border:2px solid var(--accent); border-radius:8px; padding:6px 14px; font-weight:800; font-size:20px;">学生の現状</div>
<div class="farrow" style="color:var(--accent);">➡</div>
<div style="text-align:center; font-size:19px;">
<div style="font-weight:800; color:var(--accent-dark);">ねらい：</div>どこに向かうのか<br><span style="font-size:16px;">(授業の存在価値)</span>
</div>
<div class="farrow" style="color:var(--accent);">➡</div>
<div style="border:2px solid var(--accent); border-radius:8px; padding:6px 14px; font-weight:800; font-size:20px;">学修後の状態</div>
</div>
<div style="display:flex; gap:10px; margin-top:12px; font-size:18px;">
<div style="flex:1; background:#f0f0f0; border-radius:6px; padding:6px 10px;"><b>達成目標：</b><br>何が出来るようになるのか</div>
<div style="flex:1; background:#f0f0f0; border-radius:6px; padding:6px 10px;"><b>評価：</b><br>どのように測るのか</div>
<div style="flex:1; background:#f0f0f0; border-radius:6px; padding:6px 10px;"><b>設計：</b><br>どのように教えるのか</div>
</div>
</div>

</div>

<div class="box-accent" style="margin-top:14px; font-size:21px;">
目標や設計を損なう形で使ってはいけない<br>
<b>「AIができることをただ出力するのは、AIで事足りるので採用する必要はない」ということ</b><br>
<b>AIができない「高次」の価値を作るために、引き続き学ぶ必要はある</b>
</div>

<div class="cite pip-safe">Teaching with AI (Bowen &amp; Watson, AAC&amp;U 2024)</div>

<!--
- 学習でのAI利用の考え方。NGは「答え・正解を聞く」「コスパ/タイパ至上主義」。AIは考えたり研究を深めたりするために使う。
- 授業設計の枠組み（学生の現状→ねらい→学修後の状態、達成目標・評価・設計）を損なう形で使ってはいけない。
- 「AIができることをただ出力するなら、AIで事足りる」。AIができない高次の価値を作るために、人は引き続き学ぶ必要がある。Teaching with AIより。[NOTE]
-->
