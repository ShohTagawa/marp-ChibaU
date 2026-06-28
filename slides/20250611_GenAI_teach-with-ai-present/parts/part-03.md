<div class="page-title">パラメーターの箱(函)としての、ディープラーニング (深層学習)</div>

# <span style="color:var(--accent-dark)">パラメーターの箱</span>(函)としての、ディープラーニング

<div class="box-accent" style="margin:48px auto 0; max-width:760px; text-align:center; font-size:30px;">
LLM の内部構造をブラウザで可視化する<br>
<a href="https://bbycroft.net/llm" style="color:var(--tag-blue); font-weight:800; font-size:34px;">LLM Visualization</a>
</div>

<div class="cite pip-safe" style="text-align:center; margin-top:36px;">cf. NVIDIA "Mythbusters Demo GPU versus CPU"</div>

<!--
そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。 / その構成について、トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。 / これも、ニューラルネットワークモデルです。インプットされたデータが、複数の層を通って出力されます。 / なんか宇宙ステーションみたいですね。 / ここでは「nano-gpt」という非常に小さなモデル（パラメータ数わずか85,000）を使って、モデルの仕組みを探っていきます。 / このモデルの目的はシンプルです。以下の6文字からなるシーケンス： / C B A B B C をアルファベット順に並べ替えること、つまり「A B B B C C」にすることです。 / 次にくるアルファベットを予想するタスクをしているわけですね。 / 緑のセルは現在処理されている数値を、青のセルは重みを表しています。 / こんな感じで、言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 / さっき言ってた函ってのはこれ全部にあたります。
-->

---

<div class="page-title">大規模言語モデルを生成AIにする</div>

# 大規模言語モデルを<span style="color:var(--accent-dark)">生成AI</span>にする

<table style="width:100%; border-collapse:separate; border-spacing:0 10px; font-size:24px; line-height:1.45;">
<tr>
<td style="width:30%; background:var(--accent-soft); border-radius:10px; padding:12px 20px; font-weight:800; color:var(--accent-dark);">チューニング<br>・RLHF</td>
<td style="padding:12px 24px;">人間にとって自然な回答をするよう、トレーニングする (good/bad)</td>
</tr>
<tr>
<td style="width:30%; background:var(--accent-soft); border-radius:10px; padding:12px 20px; font-weight:800; color:var(--accent-dark);">ガードレールの作成</td>
<td style="padding:12px 24px;"><b style="color:var(--accent);">AIの安全性を向上させる</b>（AIに危険/不適切なことを言わせない）</td>
</tr>
<tr>
<td style="width:30%; background:var(--accent-soft); border-radius:10px; padding:12px 20px; font-weight:800; color:var(--accent-dark);">倫理的課題の解決<br>バイアスの低減</td>
<td style="padding:12px 24px;">トレーニングデータ上のバイアスを減らす</td>
</tr>
<tr>
<td style="width:30%; background:var(--accent-soft); border-radius:10px; padding:12px 20px; font-weight:800; color:var(--accent-dark);">ツールの接続</td>
<td style="padding:12px 24px;">計算やweb検索など、モジュールを接続する</td>
</tr>
</table>

<div class="box-accent pip-safe" style="margin-top:18px; text-align:center;">市販のAIは、<b>人間中心の原則</b>に従い、かなりの注意して作成されている</div>

<!--
人間のニーズ、能力、制約を最優先に考慮する
-->

---

<div class="page-title">Slido：ハルシネーションを減らすには</div>

# <span style="color:var(--accent-dark)">ハルシネーション</span>を減らすには、<br>どうすればよいと思いますか

<div class="subhead" style="margin-top:8px;"><span class="tag tag-accent">複数回答可</span></div>

<div class="box-info" style="margin-top:120px; text-align:center; font-size:30px;">
🏆　Slido で回答を募集します（匿名）
</div>

<div class="takeaway pip-safe">スマホ・PC から slido にアクセスし、ご回答ください</div>

---

<div class="page-title">まとめ</div>

# <span style="color:var(--accent-dark)">まとめ</span>

<div class="box-accent" style="font-size:30px; padding:14px 28px;">
<b style="font-size:34px;">大規模言語モデル = 数字の箱</b><br>
<span style="margin-left:1.6em;">→　ルールの箱や、データの箱ではないことに注意</span>
</div>

<div class="stepbox" style="margin-top:20px;">
<div class="st" style="font-size:30px;"><b>ネクストワードプレディクション</b></div>
<div style="border:2.5px solid var(--accent); border-radius:14px; padding:8px 20px; margin:8px 0; text-align:center; font-size:24px;">日本の首都__ → 日本の首都は__ → 日本の首都は東京__</div>
<div class="st" style="font-size:24px;">これまでのコンテキストから、次の言葉(トークン)<span class="em">の生成確率</span>を予想する問題</div>
</div>

<div class="box-info" style="margin-top:18px; text-align:center; font-size:27px; font-weight:800;">生成AIは、LLMを有用化した一連のパッケージ</div>

<div class="box-warn pip-safe" style="margin-top:14px;"><b>確率的に考えるモデルなので、ハルシネーションはなくならない</b><br>しかし、工夫により問題は減り、<span style="color:var(--accent);">有用性が向上</span>しつつある</div>

<!--
そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。 / これも、ニューラルネットワークモデルです。インプットされたデータが、複数の層を通って出力されます。 / こんな感じで、言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 / さっき言ってた函ってのはこれ全部にあたります。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# 何が、利用上の<span style="color:var(--accent-dark)">注意点</span>か

<div class="cardrow" style="align-items:center;">
<div class="pcard" style="flex:1.1; background:var(--tag-blue); color:#fff; border:none;">
<div style="font-size:30px; font-weight:800; line-height:1.5; padding:18px 8px;">生成AI活用にあたって<br>注意すべきポイントは？</div>
</div>
<div style="flex:1;">
<div style="background:#C44D9B; color:#fff; font-weight:800; border-radius:8px; padding:8px 18px; margin:6px 0; font-size:26px;">情報の正確性</div>
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">情報流出</div>
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">知的財産権の侵害</div>
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">活用者としてのモラル</div>
</div>
</div>

<div style="margin-top:28px; font-size:24px; line-height:1.5;">
総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～<br>
<a href="https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/" style="color:var(--tag-blue); font-size:22px;">https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</a>
</div>

<div class="box-accent pip-safe" style="margin-top:14px; text-align:center;"><b>コンパクトに纏まっているので、ぜひ、ご活用ください</b></div>

<!--
ここからは、生成AIを使う上で注意すべき4つのポイントを学習します。 / まずは、情報の正確性に関することです。
-->

---

<div class="page-title">偽・誤情報に騙されないための3点</div>

# 偽・誤情報に騙されない・拡散しないため、<br><span style="color:var(--accent-dark)">3つのポイント</span>を常に意識する

<div class="cardrow" style="margin-top:18px;">
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">ポイント１</div>
<p style="font-size:23px; line-height:1.5;">人は信じたいものを選ぶ（認知バイアス）ので、無意識のうちに合理的ではない行動、偏った判断をすることがあるという意識をもつ</p>
</div>
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">ポイント２</div>
<p style="font-size:23px; line-height:1.5;">チェックリストを用いて真偽を判断する</p>
</div>
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">ポイント３</div>
<p style="font-size:23px; line-height:1.5;">チェックリストを用いて判断しても騙されるので、安易に拡散しない / 拡散したいときは ひと呼吸おく</p>
</div>
</div>

<div class="cite pip-safe">Source: 総務省「インターネットとの向き合い方～ニセ・誤情報に騙されないために～」</div>

<!--
生成AIの技術は急速に進展しており、人間が情報の真偽を判断することは難しくなることが予想されます。 / 自分が被害者、加害者にならないため、3つのポイントを常に意識しましょう。 / 1つ目は、人は信じたいものを選ぶので、無意識のうちに合理的ではない行動、偏った判断をすることがあるという意識をもつこと、 / 2つ目は、チェックリストを用いて真偽を判断すること、 / 3つ目は、チェックリストを用いて判断しても騙されるので、安易に拡散しない、また拡散したいときはひと呼吸おくことです。
-->

---

<div class="page-title">チェックシートを用いて判断する</div>

# <span style="color:var(--accent-dark)">チェックシート</span>を用いて判断する

<div class="cardrow" style="margin-top:14px;">
<div class="pcard" style="padding:0 0 14px;">
<div class="pc-h" style="background:var(--tag-blue); border-radius:14px 14px 0 0; font-size:26px; padding:10px 0;">基 本</div>
<div style="padding:6px 26px; font-size:25px; line-height:2.0;">
☑ <span style="background:#E8C8E0;">情報源</span>はある？<br>
☑ その分野の<span style="background:#E8C8E0;">専門家</span>？<br>
☑ <span style="background:#E8C8E0;">他</span>ではどう言われている？<br>
☑ その画像は<span style="background:#E8C8E0;">本物</span>？
</div>
</div>
<div class="pcard" style="padding:0 0 14px;">
<div class="pc-h" style="background:#1a1a1a; border-radius:14px 14px 0 0; font-size:26px; padding:10px 0;">応 用</div>
<div style="padding:6px 26px; font-size:24px; line-height:1.85;">
☑ <span style="background:#E8C8E0;">「知り合いだから」</span>という理由だけで信じていないか？<br>
☑ <span style="background:#E8C8E0;">表やグラフ</span>も疑ってみた？<br>
☑ その情報に<span style="background:#E8C8E0;">動機</span>はある？<br>
☑ <span style="background:#E8C8E0;">ファクトチェック</span>結果は？<span style="font-size:18px;">※1</span>
</div>
</div>
</div>

<div class="cite pip-safe">Source: 総務省「インターネットとの向き合い方～ニセ・誤情報に騙されないために～」</div>

<!--
2つ目に意識すべきポイントは、チェックリストを用いて真偽を判断することです。 / 情報源は信用できるか、他のメディアではどういわれているか、その画像/表/グラフは本物か、ファクトチェックの結果はどうかなど、1つ1つ確認することが大切です。
-->

---

<div class="page-title">生成AIにより偽・誤情報が生成される可能性</div>

# 生成AIにより<span style="color:var(--accent-dark)">偽・誤情報</span>が生成される可能性

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">偽・誤情報の事例 ❶</div>
<p style="font-size:21px; line-height:1.5;">ある生成AIサービスに以下の指示を入力すると、問題のあるリストが生成された。</p>
<div class="box-info" style="font-size:20px; padding:8px 14px; margin:6px 0;">西日本で最も高い山のTOP10を教えてください</div>
<p style="font-size:21px; margin:6px 0 2px;"><b>生成されたリストの課題</b></p>
<div class="box-warn" style="font-size:20px; padding:8px 14px;">実在しない山の名前が含まれる<br>標高が不正確</div>
</div>
<div class="pcard">
<div class="pc-h">偽・誤情報の事例 ❷</div>
<img src="../src/fig44-flood.png" style="width:100%; border-radius:8px; margin:4px 0;" />
<p style="font-size:20px; line-height:1.45;">2022年9月、台風15号による水害被害が発生している静岡県の画像がSNS上で拡散。その後投稿者は、画像生成AIで作成した偽画像だったと公表。</p>
</div>
</div>

<div class="cite pip-safe">Source: 生成AIサービスを用いて回答を作成、NHK「SNSで拡散 "AI生成の偽の災害画像" ファクトチェックはどうする」</div>

<!--
生成AIによりもっともらしい偽・誤情報が生成される可能性に注意が必要です。 / 例えば、生成AIサービスに指示を入力すると、実在しない内容が含まれていたり、数字が不正確だったりすることがあります。 / また、水害被害の画像がSNSで拡散されたところ、実は画像生成AIで作成した偽画像だったという事例があります。
-->

---

<div class="page-title">何が、利用上の注意点か</div>

# 何が、利用上の<span style="color:var(--accent-dark)">注意点</span>か

<div class="cardrow" style="align-items:center;">
<div class="pcard" style="flex:1.1; background:var(--tag-blue); color:#fff; border:none;">
<div style="font-size:30px; font-weight:800; line-height:1.5; padding:18px 8px;">生成AI活用にあたって<br>注意すべきポイントは？</div>
</div>
<div style="flex:1;">
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">情報の正確性</div>
<div style="background:#C44D9B; color:#fff; font-weight:800; border-radius:8px; padding:8px 18px; margin:6px 0; font-size:26px;">情報流出</div>
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">知的財産権の侵害</div>
<div style="padding:8px 18px; margin:6px 0; font-size:26px; font-weight:800;">活用者としてのモラル</div>
</div>
</div>

<div class="box-accent" style="margin-top:24px;"><b>総務省　生成AIはじめの一歩～生成AIの入門的な使い方と注意点～<br>から考える</b></div>

<div class="cite pip-safe"><a href="https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/" style="color:var(--tag-blue);">https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/</a></div>

<!--
次に、情報流出に関することについて学習します。
-->

---

<div class="page-title">情報流出を防ぐための3つの行動</div>

# 情報流出を防ぐため、<span style="color:var(--accent-dark)">3つの行動</span>を心がける

<div class="cardrow" style="margin-top:18px;">
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動１</div>
<p style="font-size:23px; line-height:1.55;">生成AIサービスの<b style="color:var(--tag-green);">規約を確認</b>（データの利用目的や範囲等）また利用規約の変更時には<b style="color:var(--tag-green);">変更箇所をチェック</b></p>
</div>
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動２</div>
<p style="font-size:23px; line-height:1.55;">個人情報や機密情報の入力は<b style="color:var(--tag-green);">必要最小限</b></p>
</div>
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">行動３</div>
<p style="font-size:23px; line-height:1.55;">生成AIに入力したデータを<b style="color:var(--tag-green);">学習に使わせないように設定</b>（オプトアウト設定）<span style="font-size:18px;">※1</span></p>
</div>
</div>

<!--
情報流出を防ぐため、3つの行動を心がけることが大切です。 / まずは、生成AIサービスの規約で、データの利用目的や範囲等を確認し、利用規約の変更時には変更箇所をチェックするようにしましょう。 / その上で、個人情報や機密情報の入力を必要最小限にするよう注意しましょう。 / また、利用する生成AIサービスで設定が可能であれば、入力したデータを学習に使わせないように設定しましょう。
-->

---

<div class="page-title">ワーク：オプトアウトを確認する</div>

# ワーク：<span style="color:var(--accent-dark)">オプトアウト</span>を確認する

<div class="box-accent" style="text-align:center; font-size:28px;"><b>先生が今お使いのAIは、学習されますか？<br>どうなっていますでしょうか</b></div>

<div class="cardrow" style="margin-top:18px;">
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">Copilot</div>
<p style="font-size:22px; line-height:1.5; color:#555;">こんにちは。「何ができますか?」と尋ねてみてください<br><span style="color:#999;">└ Copilot へメッセージを送る</span></p>
</div>
<div class="pcard">
<div class="pc-h" style="background:var(--tag-blue);">Gemini</div>
<p style="font-size:22px; line-height:1.5; color:#555;">Gemini　2.5 Flash<br><span style="color:#999;">└ Gemini へのプロンプトを入力<br>　 Deep Research / Canvas</span></p>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:16px; text-align:center;"><b>海外の第三者が見ることも…</b></div>

<!--
情報流出を防ぐため、3つの行動を心がけることが大切です。 / まずは、生成AIサービスの規約で、データの利用目的や範囲等を確認し、利用規約の変更時には変更箇所をチェックするようにしましょう。 / その上で、個人情報や機密情報の入力を必要最小限にするよう注意しましょう。 / また、利用する生成AIサービスで設定が可能であれば、入力したデータを学習に使わせないように設定しましょう。
-->

---

<div class="page-title">海外企業での情報流出事例</div>

# ある海外企業では、生成AIに<span style="color:var(--accent-dark)">機密情報</span>を入力し情報が流出

<div class="box-info" style="margin-top:6px; font-size:24px;">2023年3月、海外の電子機器メーカーで生成AIの使用による、社内情報流出が立て続けに発生</div>

<div class="cardrow" style="margin-top:18px;">
<div class="pcard">
<div class="pc-h" style="background:#1a1a1a;">情報流出の内容 ❶</div>
<p style="font-size:24px; line-height:1.6; text-align:center; padding:14px 8px;">社内機密の<b>ソースコード</b>を生成AIに入力し、修正を依頼<br><span style="font-size:21px; color:#666;">(2件)</span></p>
<div style="text-align:center; font-size:22px; color:var(--tag-blue); font-weight:800;">⌨ → 🤖 生成AI</div>
</div>
<div class="pcard">
<div class="pc-h" style="background:#1a1a1a;">情報流出の内容 ❷</div>
<p style="font-size:24px; line-height:1.6; text-align:center; padding:14px 8px;">社内会議の<b>録音データ</b>を音声認識アプリで文章に変換して生成AIに入力し、議事録を作成<br><span style="font-size:21px; color:#666;">(1件)</span></p>
<div style="text-align:center; font-size:22px; color:var(--tag-blue); font-weight:800;">🎙 → 🤖 生成AI</div>
</div>
</div>

<!--
ある海外企業では、社員が生成AIの仕組みへの理解が不十分であったため、生成AIに機密情報を入力してしまい、情報が流出するトラブルが発生しました。 / ビジネスで利用する場合は、自社の機密情報の取扱いについて十分留意する必要があります。
-->
