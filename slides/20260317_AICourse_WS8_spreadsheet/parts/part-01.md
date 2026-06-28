<div class="page-title">今日紹介する手法 ①</div>

# <span style="color:var(--accent-dark)">SpreadsheetのAI関数</span>を活用する

<table style="width:100%; border-collapse:collapse; font-size:19px; margin-top:6px;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:28%;">用途</th>
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:48%;">プロンプト例</th>
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:24%;">結果の例</th>
</tr>
</thead>
<tbody>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">① 翻訳・トーン変換</td><td style="padding:5px 10px; border:1px solid #d8dde6;">英語に翻訳して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">Hi</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">② 逐語訳</td><td style="padding:5px 10px; border:1px solid #d8dde6;">省略なく翻訳を行って下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">(全文出てくる)</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">③ 情報の抽出(固有表現)</td><td style="padding:5px 10px; border:1px solid #d8dde6;">個人名があれば抜き出し、なければ◯</td><td style="padding:5px 10px; border:1px solid #d8dde6;">山田 太郎/◯</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">④ 情報の抽出(条件付)</td><td style="padding:5px 10px; border:1px solid #d8dde6;">難しい単語があり、かつ前に出ていなければ抜き出し、なければ◯</td><td style="padding:5px 10px; border:1px solid #d8dde6;">Transformer</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">⑤ 分類・感情分析</td><td style="padding:5px 10px; border:1px solid #d8dde6;">問い合わせ内容を【要望、質問、クレーム】に分類して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">質問</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">⑥ データの整形</td><td style="padding:5px 10px; border:1px solid #d8dde6;">住所から都道府県名だけを抜き出して / フリガナに変換して</td><td style="padding:5px 10px; border:1px solid #d8dde6;">東京都</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">⑦ 複数セルの処理</td><td style="padding:5px 10px; border:1px solid #d8dde6;">与えた範囲を一言で要約して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">(複数セル出力)</td></tr>
</tbody>
</table>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center;"><b>表を処理する・表で戻す・一覧に対応する</b>場合にとても便利</div>

<!--
- AI関数の用途を7パターンで一覧。翻訳・抽出・分類・整形・複数セル処理まで、表を相手にする作業がとても便利になる。
-->

---

<div class="page-title">今日紹介する手法 ②</div>

# <span style="color:var(--accent-dark)">SpreadsheetのGemini機能</span>を用いる

<div class="subhead"><span class="tag tag-soft">構造化</span><span class="tag tag-soft">半構造化</span></div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:4px;">
<img src="./src/fig14b-gemini.png" alt="Geminiへのプロンプト" style="height:330px; border:1px solid #e3e8f0; border-radius:8px;">
<div style="flex:1;">
<img src="./src/fig14c-chart.png" alt="Geminiが生成した棒グラフ" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-accent" style="margin-top:12px; text-align:center; font-weight:800;">グラフや表を<br>対話的に作れる！</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px;"><b>研究などでデータを合成したり、分析しないこと</b>／<b>信頼性にはまだ難あり (結果の確認を行うこと)</b>／<b>関数/スライサー/ピボットテーブルが優先</b></div>

<!--
- ②はSheetsのGemini機能。自然言語で頼むとグラフや表を対話的に作ってくれる。ただし合成・分析の依存は避け、結果確認と従来関数の優先を。
-->

---

<div class="page-title">その他</div>

# <span style="color:var(--accent-dark)">Colabの機能</span>を用いて分析する

<div class="subhead"><span class="tag tag-soft">構造化</span></div>

<div style="display:flex; gap:16px; align-items:flex-start; margin-top:2px;">
<img src="./src/fig15a-colab-prompt.png" alt="Colabへの指示" style="height:300px; border:1px solid #e3e8f0; border-radius:8px;">
<img src="./src/fig15b-colab-code.png" alt="Colabが生成したコード" style="height:300px; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="display:flex; gap:24px; margin-top:10px; font-size:26px; font-weight:800;">
<span style="color:var(--accent-dark);">グラフや表を対話的に作れる！</span>
<span style="color:var(--accent);">機械学習なども試せる！</span>
</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><b>AIまかせに、絶対にしないこと → 結構間違う</b><br>自分で探索的に仮説を立てて、モデルを試して、考える経験は必要</div>

<!--
- その他としてColab。グラフ・表だけでなく機械学習まで試せる。ただしAI任せは禁物で、自分で仮説を立て試し考える経験が必要。
-->

---

<div class="page-title">今後の予定</div>

# 今後の予定

<div class="box-warn" style="margin-bottom:12px;">すみません、実は、<b>現時点ではまだ機能が開放されていません</b>…<br>今年1年間で機能強化が行われ、学校では利用可能に [出典]</div>

<div class="goal-box" style="font-size:23px; padding:14px 26px; margin:6px 0;">
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Sheets:</b> データの整理や分析をAIがサポート</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Gmail:</b> メールの下書き作成、スレッド/メールの要約、AIによる返信案の提示</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Google Workspace Studio：</b> 「誰でも数分でAIエージェント・フローを作れる」開発</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Docs:</b> テンプレに沿った文章を作成</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Slides:</b> テキストからスライド用のオリジナル画像を生成</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Forms:</b> 質問項目の提案や回答のAI要約</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Vids:</b> テキスト指示や既存スライドから、洗練された動画を自動生成</div>
</div>

<div class="lead-note pip-safe" style="text-align:right; color:var(--accent-dark);">→ <b>千葉大でも使えるようになるかも？</b></div>

<!--
- 今後の予定。Sheets/Gmail/Docs/Slides/Forms/Vids等にGeminiが入り、Workspace Studioでエージェントも作れる。今は未開放だが今年強化され学校で使えるように。
-->

---

<div class="page-title">だったら、作ればよい！</div>

# だったら、作ればよい！

<div class="lead-note"><b>AI駆動型開発： AIでコードを作り、動くものを作れる</b> 例</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="stepbox" style="margin:4px 0;">
<div class="st" style="font-size:23px; margin:3px 0;">① AIの必要性を検討する</div>
<div class="st" style="font-size:23px; margin:3px 0;">② フローを描き、入力を決める</div>
<div class="st" style="font-size:23px; margin:3px 0;">③ 評価し、出力の精度を理解する</div>
<div class="st" style="font-size:23px; margin:3px 0;">④ 実際にAIでプロトタイピングする</div>
<div class="st" style="font-size:23px; margin:3px 0;">⑤ 機能するコードを出力し、使う形に変換する</div>
</div>

</div>
<img src="./src/fig17-genai-dialog.png" alt="作成したアプリの例" style="width:300px; border:1px solid #e3e8f0; border-radius:8px; margin-top:6px;">
</div>

<div class="box-accent" style="margin-top:10px;"><b>今回作成したもの："ジェネリックAI関数" = GenAI関数</b><br>① Google App Scriptのコード (GAS)を書く　② APIを取得する (AIに指示をだす命令文)　③ 関数を実装して動かす　※Excel マクロの強化版</div>

<div class="takeaway pip-safe" style="margin-top:10px;">生成AI = 創造性を磨く道具：作るマインドをぜひ！</div>

<!--
- 機能が無いなら作ればよい。AI駆動開発の5ステップで、今回はGAS+APIで"GenAI関数"を自作。生成AIは創造性を磨く道具、作るマインドを。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px 24px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="margin:0;"><b>Session 1：</b><br><span style="margin-left:1.2em;">AIが様々な分析に活用されていることを知る</span></div>

<div style="font-size:30px; font-weight:800; padding-top:8px;">目標<br>＋<br>まとめ</div>
<div class="goal-box" style="margin:0; font-size:23px; padding:14px 26px;">
<div style="margin:4px 0;"><b style="color:var(--accent-dark);">AIが様々な分析に活用されていることを知る</b></div>
<div style="margin:2px 0 2px 1.3em;">・機械学習 × 生成AI　・技術の民主化が起こりつつある</div>
<div style="margin:8px 0 4px;"><b style="color:var(--accent-dark);">データへの分析応用例を知る</b></div>
<div style="margin:2px 0 2px 1.3em;">・構造化データ：Colabo ・ Gemini for WS　・その他：AI関数(Gemini/Copilot)</div>
<div style="margin:8px 0 4px;"><b style="color:var(--accent-dark);">道具を作るマインドを持つ</b></div>
<div style="margin:2px 0 2px 1.3em;">・機能を定義することでプログラムを創れる</div>
</div>

</div>

<!--
- Session 1の振り返り。目的＝AIが分析に活用されていることを知る。3つの目標（応用を知る／応用例を知る／作るマインド）を確認。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="text-align:center; font-size:26px; line-height:1.7;">
<div style="color:var(--accent-dark); font-weight:700;">第8回： Google SpreadsheetからAIで分析する</div>
<div style="color:var(--muted);">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:22px auto 12px; font-size:28px;"><b>Session 2：</b><br><span style="margin-left:1.2em;">Google spreadsheetで情報を分析する</span></div>

<div style="text-align:center; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2に入ります。Google spreadsheetで情報を実際に分析する体験パートです。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# <span style="color:var(--accent-dark)">GENAI (ジェネリックAI関数)</span>で分析を体験してみよう

<div class="stepbox" style="margin-top:6px;">
<div class="st" style="font-size:23px; margin:4px 0;">① こちらのスプレッドシートに1人1シート作成し、Spreadsheetに分析したいデータを入力してみましょう。<br><span style="margin-left:1.2em; color:#8a4b00;">注意：機密情報/著作物を含むデータは使用しないこと　※著作物の一部の場合は引用</span></div>
<div class="st" style="font-size:23px; margin:4px 0;">② GENAI関数を読み出して分析を試して下さい。</div>
<div class="st" style="font-size:23px; margin:4px 0;">③ 便利な方法をぜひ、見つけて下さい。ダミーデータには、Geminiを！</div>
</div>

<div style="display:flex; gap:16px; align-items:center; margin-top:8px;">
<img src="./src/fig20-genai-cell.png" alt="GENAI関数のセル例" style="height:150px; border:1px solid #e3e8f0; border-radius:8px;">
<div style="font-family:monospace; font-size:22px;">= GENAI("プロンプト", "AIが参照するデータ範囲")</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px;">オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

<!--
- ワーク。各自シートを作りデータを入れ、GENAI関数で分析を試す。機密・著作物は使わない。困ったらSlidoや手を挙げて。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px 24px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="margin:0;"><b>Session 2：</b><br><span style="margin-left:1.2em;">Google spreadsheetで情報を分析する</span></div>

<div style="font-size:30px; font-weight:800; padding-top:8px;">目標<br>＋<br>まとめ</div>
<div class="goal-box" style="margin:0; font-size:25px; padding:18px 28px;">
<div style="margin:8px 0;">・半構造化データから役立つ情報を引き出せた</div>
<div style="margin:8px 0;">・<u>構造化データ</u>の近未来の分析を体験できた</div>
</div>

</div>

<!--
- Session 2の振り返り。目的＝spreadsheetで情報を分析する。半構造化データから情報を引き出し、構造化データの近未来の分析を体験できた。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="text-align:center; font-size:26px; line-height:1.7;">
<div style="color:var(--accent-dark); font-weight:700;">2025年度 第8回： Google SpreadsheetからAIで分析する</div>
<div style="color:var(--muted);">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:22px auto 12px; font-size:28px;"><b>Session 3：</b><br><span style="margin-left:1.2em;">議論：気づきのシェア & 振り返り</span></div>

<div style="text-align:center; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- 最後のSession 3。議論・座談会で、気づきをシェアし全体を振り返ります。
-->

---

<div class="page-title">Session 3の進め方</div>

# 議論・座談会　<span class="tag tag-accent" style="font-size:22px;">Slidoで進めます</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">

<div style="flex:1.4;">
<div class="goal-box" style="font-size:23px; padding:14px 24px; margin:4px 0;">
<div style="margin:8px 0;">- <b>実際に分析をしてみた印象</b>を教えてください。上手くいった点と間違っていた点はどこでしたか。</div>
<div style="margin:8px 0;">- <b>今日面白かったこと、気付き</b>は何でしたか。</div>
<div style="margin:8px 0;">- <b>来年度、生成AIに関してどんな話</b>を聞きたいですか。また、<b>各回の構成の希望</b>などあれば、お知らせ下さい。</div>
</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; font-size:22px; margin-bottom:4px;">スマホから</div>
<img src="./src/fig23a-qr-sp.png" alt="SlidoのQRコード" style="width:150px; border:1px solid #e3e8f0; border-radius:8px;">
<div style="font-size:19px; margin-top:6px;">方法1 Google検索「Slido」→コード入力<br>方法2 直接リンク</div>
<div style="font-size:20px; font-weight:800; color:var(--accent-dark); margin-top:6px;">ALC-AI1-08</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:8px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br><span style="margin-left:1.2em;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span></div>

<!--
- Session 3は座談会。Slidoで「分析の印象」「今日の気づき」「来年度に聞きたい話・構成の希望」を共有。協力的で建設的な場作りを。
- ※R8年度からは、Slidoの回答から組織名等の機微情報を除き、研究・外部発表にて使います。使用を許諾頂ける方だけ回答下さい。
-->
