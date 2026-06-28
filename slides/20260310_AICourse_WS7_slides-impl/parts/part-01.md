<div class="page-title">Gem：カスタマイズしたAI</div>

# Geminiで<span style="color:var(--accent-dark)">手順の決まった処理</span>を指示したい時は、<span style="color:var(--accent-dark)">Gem</span>を使おう

<div class="box-accent" style="margin:6px 0 12px;"><b>Gem = </b>誰でも作れるGeminiを用いたカスタムAIエキスパート</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">
<div class="lead-note" style="color:var(--accent-dark);">千葉大Google Workspaceの標準機能</div>
<div style="font-size:21px; line-height:1.5;">
<div>予め指示した振舞い・プロンプトで<b>生成AIが動く</b></div>
<div>学内にリンクで作ったエキスパートを共有出来る</div>
<div style="margin-left:1em; color:#444;">例：経費精算の記入の質問、プロンプトの作成</div>
<div style="margin-left:1em; color:#444;">　　採点・フィードバックの下書きの作成</div>
<div>業務の属人化回避や反復に便利</div>
<div style="margin-top:6px; color:var(--accent-dark); font-weight:800;">Gemini同様の情報の扱い</div>
<div>学習されず、Gemの作成者にも共有されない</div>
</div>
</div>
<div style="flex:1; position:relative;">
<img src="./src/fig15-img.png" alt="Gemの設定画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div style="position:absolute; left:6px; top:42%; font-size:17px; color:#fff; background:rgba(15,118,110,.9); padding:2px 8px; border-radius:6px;">システムプロンプト</div>
<div style="position:absolute; right:6px; bottom:18%; font-size:17px; color:#fff; background:rgba(15,118,110,.9); padding:2px 8px; border-radius:6px;">ユーザープロンプト</div>
<div style="position:absolute; left:50%; bottom:2%; transform:translateX(-50%); font-size:16px; color:#555;">(コンテキストの一部)</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;">業務を生成AIでより良くする上での一番初歩的な道具<br>今回は、スライドを”構造化”し、Canvasでのスライド化までを伴走</div>

<!--
- Gemは、手順の決まった処理を指示したいときに使う、誰でも作れるカスタムAIエキスパート。千葉大Workspaceの標準機能で、振る舞いやプロンプトを予め仕込んでおける。
- 情報の扱いはGeminiと同じで、学習されず作成者にも共有されない。業務の属人化回避や反復に便利。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Geminiで作成を伴走してほしい時は、<span style="color:var(--accent-dark)">Canvas</span>を使おう

<div class="box-accent" style="margin:6px 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div class="lead-note">使用例1　文章の作成</div>

<div style="display:flex; gap:28px; align-items:center; margin-top:8px;">
<div class="box-info" style="flex:0 0 360px; font-size:24px; font-weight:700;">
<b>文章を自分で編集</b>しつつ、<br>
Geminiに指示を出して<br>
書き換えが可能<br>
Documentに書き出せる
</div>
<img src="./src/fig16-img.png" alt="Canvasで文章を協働編集する画面" style="flex:1; max-width:560px; border:1px solid #ccc; border-radius:6px;">
</div>

<!--
- Canvasは、Geminiに作成を伴走してほしいときに使う、協働作成用の画面。
- 使用例1は文章の作成。自分で編集しながらGeminiに指示を出して書き換えでき、Documentに書き出せる。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Geminiで作成を伴走してほしい時は、<span style="color:var(--accent-dark)">Canvas</span>を使おう

<div class="box-accent" style="margin:6px 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1;">
<div class="lead-note">使用例2　スライドの作成</div>
<img src="./src/fig17-img.png" alt="Canvasで作成したスライド" style="width:100%; border:1px solid #ccc; border-radius:6px; margin:6px 0;">
<div class="box-info" style="font-size:23px; font-weight:700;"><b>編集可能なスライドを</b>書き出せる</div>
</div>
<div style="flex:1;">
<div class="lead-note">使用例3　インタラクティブ出力</div>
<img src="./src/fig18-img.png" alt="Canvasのインタラクティブ出力（問題集）" style="width:100%; border:1px solid #ccc; border-radius:6px; margin:6px 0;">
<div class="box-info pip-safe" style="font-size:23px;">問題集やコードの結果を<br>動作する形で表現できる</div>
</div>
</div>

<!--
- 使用例2はスライドの作成。編集可能なスライドを書き出せる。
- 使用例3はインタラクティブ出力。問題集やコードの結果を、動作する形で表現できる。
-->

---

<div class="page-title">手作業で作成する上で</div>

# スライド作成には、<span style="color:var(--accent-dark)">いくつかの原則</span>がある

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.5;">

<div style="display:grid; grid-template-columns:auto 1fr; gap:10px 16px; align-items:center;">
<div class="tag tag-soft">デザイン</div>
<div>
<div style="font-size:24px;"><b>伝わるデザイン</b>に準拠してみよう</div>
<div style="font-size:19px; color:#555;">髙橋 佑磨 先生（理学研究院）／ EYRJ資料 → <span style="color:var(--tag-blue);">https://alc.chiba-u.jp/eyr/2023/06/16/01design.html</span></div>
</div>

<div class="tag tag-soft">配置</div>
<div>
<div style="font-size:24px;"><b>配置機能</b>で揃えよう</div>
<div style="font-size:19px; color:#555;">配置：ラインに並べる、整列：均等に置く、ページ中央に配置<br>※ あと、順序でレイヤーをイメージできると良い</div>
</div>

<div class="tag tag-soft">シンプル</div>
<div>
<div style="font-size:24px;"><b>なるべくシンプルに</b></div>
<div style="font-size:19px; color:#555;">左上から右下へ、末尾に一言でまとめて、文字数は最小化<br>アニメーションは使わない、1枚1分で話す</div>
</div>
</div>

</div>
<div style="flex:0 0 230px; display:flex; flex-direction:column; gap:10px; align-items:center;">
<img src="./src/fig19-img.png" alt="伝わるプレゼン資料のデザイン" style="width:140px; border:1px solid #ccc;">
<div style="border:2px solid #888; border-radius:8px; width:180px; padding:6px 0; text-align:center; font-size:18px;">
タイトル<br>
<div style="border:1.5px dashed #aaa; margin:6px 14px; padding:18px 0; font-weight:800;">図</div>
言いたいことを1行で
</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; text-align:center;">事前に知っておくだけで、<b>劇的に</b>変わる</div>

<!--
- 手作業でスライドを作るときの原則。デザイン（伝わるデザインに準拠）、配置（配置機能で揃える）、シンプル（左上から右下へ、末尾に一言、文字数最小化、1枚1分）。
- 事前に知っておくだけで劇的に変わる。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# <span style="font-weight:800;">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:18px 22px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; align-self:center;">目的</div>
<div class="box-accent" style="font-size:25px;"><b>Session 1：</b><br>講義：生成AIを発表準備に使う際のアイデアを知る</div>

<div style="font-size:30px; font-weight:800; line-height:1.3; align-self:center;">目標<br>＋<br>まとめ</div>
<div style="font-size:23px; line-height:1.55;">
<div>・ 作業フローにAIを活用する考え方を知る</div>
<div style="margin-left:1.3em; color:#444;">・ Human Orchestration (HOTL)</div>
<div style="margin-left:1.3em; color:#444;">・ フローの書き出しと考え方</div>
<div>・ スライド作成に利用できる道具を知る</div>
<div style="margin-left:1.3em; color:#444;">・ Gem = 誰でも作れるカスタムAIエキスパート</div>
<div style="margin-left:1.3em; color:#444;">・ Canvas = AIとの協働作成可能な作業用・出力用画面</div>
<div>・ 発表準備に使えそうな範囲 (現時点)</div>
<div style="margin-left:1.3em; color:#444;">・ 原稿の作成、スライド案の作成</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は「生成AIを発表準備に使う際のアイデアを知る」。
- 目標とまとめ：作業フローにAIを活用する考え方（HOTL、フローの書き出し）、道具（Gem・Canvas）、発表準備に使えそうな範囲（原稿の作成・スライド案の作成）。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第7回：生成AIを使ってスライドを作ってみる ／ 15-min × 3 sessions</div>

# 生成AI体験<br>ワークショップ

<div class="box-accent" style="font-size:26px; margin-top:10px; max-width:760px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div class="foot">国際未来教育基幹　<b>田川 翔</b></div>

<!--
- ここからSession 2。Canvas機能で、原稿とスライドを実際に作成してみる。
-->

---

<div class="page-title">ワーク① 読み原稿を作る</div>

# <span style="color:var(--accent-dark)">5分</span>：　Canvasを用いて、読み原稿を作ってみましょう。

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">
<div class="stepbox"><div class="st">① 今回の発表の講師の<b>練習音声</b>と<b>PDF</b>で、<b>読み原稿</b>を作成しましょう。</div></div>
<div class="stepbox"><div class="st">② 出力された内容を選択して、<b>Geminiと協働編集</b>してみましょう。</div></div>
</div>
<div style="flex:0 0 300px;">
<img src="./src/fig23-img.png" alt="Geminiのツールメニューでthinking/Canvasを選ぶ" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="text-align:center; font-size:22px; margin-top:8px;"><b>思考モード</b>＋<b>Canvas</b>を選ぶ</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方：Slidoに返信してあげてください。<br>
会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- ワーク①。5分で、Canvasを用いて読み原稿を作ってみる。①練習音声とPDFで読み原稿を作成、②出力をGeminiと協働編集。
- ツールメニューで思考モード＋Canvasを選ぶ。困ったらSlidoや手を上げてTA・ペアへ。
- プロンプト例：音声データを書き起こし、スライドの読み原稿を作成。15分間で、用語の一貫性と口語としての自然な短さに注意。聞き手は大学生・事務職員・教員。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# <span style="color:var(--accent-dark)">10分</span>： Gemを用いてスライドを作ってみましょう。

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.35;">
<div class="stepbox"><div class="st">① Gemにスライドにしてほしい内容をアップロードし、実行して下さい。<br><span style="font-size:21px; color:#8a4b00;">注意：機密情報を含むデータは使用しないこと</span></div></div>
<div class="stepbox"><div class="st">② 対話しつつ、作成を進めて下さい(5枚くらいが良いでしょう)。<br><span style="font-size:21px; color:#555;">※ デザインで、元にしたいスライドがない場合は、Gemで決めてよいと伝えて下さい。</span></div></div>
<div class="stepbox"><div class="st">③ 可能であれば<b>保存しSpreadsheet</b>にリンクを貼って共有して下さい。<br><span style="font-size:21px; color:#555;"><b>(名前・顔写真・機密情報不可)</b>　※右上の共有から、リンクを選択 / 共有範囲は千葉大</span></div></div>
</div>
<div style="flex:0 0 270px;">
<img src="./src/fig24-img.png" alt="GeminiのツールメニューでProモード+Canvas" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="text-align:center; font-size:22px; margin-top:8px;"><b>Proモード</b>＋<b>Canvas</b>を選ぶ (事前選択済み)</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方：Slidoに返信してあげてください。／ 会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- ワーク②。10分で、Gemを用いてスライドを作ってみる。①内容をアップロードして実行（機密情報は使わない）、②対話しつつ5枚くらい、③可能ならSpreadsheetにリンクを貼って共有（名前・顔写真・機密情報不可、共有範囲は千葉大）。
- ProモードでCanvasを選ぶ（事前選択済み）。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# <span style="font-weight:800;">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:40px 22px; align-items:center; margin-top:18px;">

<div style="font-size:30px; font-weight:800;">目的</div>
<div class="box-accent" style="font-size:26px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div style="font-size:30px; font-weight:800; line-height:1.3;">目標<br>＋<br>まとめ</div>
<div class="box-info pip-safe" style="font-size:25px;">
・ Canvasで協働編集をすることができた<br>
・ Gemでスライド案を作成することができた
</div>

</div>

<!--
- Session 2の振り返り。目的は「Canvas機能で原稿とスライドを作成してみる」。
- まとめ：Canvasで協働編集ができた、Gemでスライド案を作成できた。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第7回：生成AIを使ってスライドを作ってみる ／ 15-min × 3 sessions</div>

# 生成AI体験<br>ワークショップ

<div class="box-accent" style="font-size:26px; margin-top:10px; max-width:760px;"><b>Session 3：</b><br>議論：気づきのシェア & 振り返り</div>

<div class="foot">国際未来教育基幹　<b>田川 翔</b></div>

<!--
- ここからSession 3。議論：気づきのシェアと振り返り。
-->

---

<div class="page-title">Session 3の進め方</div>

# 議論・座談会　<span class="tag tag-accent" style="font-size:24px;">Slidoで進めます</span>

<div class="box-warn" style="margin:6px 0 12px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">
<div style="font-size:23px; line-height:1.6;">
<div>・ 実際に使ってみて<b>「上手くいった点」「イマイチな点」</b>を教えて下さい。</div>
<div>・ <b>大学の中で諸活動の中で、Gem/Canvasが便利そうなユースケースとワークフロー</b>を簡単に提案して下さい。</div>
<div>・ 今日面白かったこと、気付きは何でしたか。</div>
</div>
</div>
<div class="box-info pip-safe" style="flex:0 0 320px; font-size:20px;">
<div style="font-weight:800;">スマホから</div>
<div>方法2　直接リンク</div>
<div style="word-break:break-all; color:var(--tag-blue);">https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</div>
<div style="font-weight:800; margin-top:6px;">PCから</div>
<div>方法1　Google検索「Slido」→コード入力</div>
<div><b>＃ ALC-AI1-07</b></div>
</div>
</div>

<!--
- Session 3の進め方。議論・座談会をSlidoで進める。協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に。
- 問い：実際に使って上手くいった点・イマイチな点、Gem/Canvasが便利そうなユースケースとワークフロー、今日面白かったこと・気づき。
- Slidoはスマホは直接リンク、PCはGoogle検索「Slido」→コード ALC-AI1-07。
-->
