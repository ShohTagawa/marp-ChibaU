---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">授業評価アンケート</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  /* デック固有：配色＝navy（千葉大）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 学生・教員の「声」フキダシ（前後ページで同じ見た目に揃える） */
  .bubble { display: inline-block; border-radius: 18px; padding: 8px 18px; font-weight: 800;
            line-height: 1.35; text-align: center; font-size: 21px; }
  .bubble.pink  { background: #FBE2E6; color: #B23A4B; border: 2px solid #E8A6B0; }
  .bubble.green { background: #E4F0D4; color: #4B7A26; border: 2px solid #B5D38C; }
  .bubble.blue  { background: #E7EAF2; color: var(--accent-dark); border: 2px solid #9FB0CE; }
  /* グッドプラクティス見出し帯 */
  .gp-band { background: var(--accent); color: #fff; border-radius: 10px; padding: 10px 22px;
             font-weight: 800; line-height: 1.45; font-size: 25px; }
  .gp-band .gp-no { font-size: 21px; opacity: .9; display: block; }
  .photo-round { border-radius: 50%; object-fit: cover; box-shadow: 0 2px 8px rgba(0,0,0,.18); }
  .mark-o { color: #C0182B; font-weight: 800; }
  .mark-x { color: #333; font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">授業評価アンケートの活用に向けて</div>
<div class="title-big">② 効果的なアンケートの実施・活用方法</div>
</div>

<div class="goal-box" style="max-width:840px; margin:6px auto 18px;"><b>到達目標：</b><br><span class="ind">アンケートの効果的な実施方法が分かる。</span><br><span class="ind">各項目を授業改善に活用できる。</span></div>

<div style="text-align:center; font-size:23px; line-height:1.6;">
<b>高等教育センター 助教</b>　田川　翔<br>
<b>高等教育センター 質保証・FD部長　医学研究院 教授</b>　伊藤　彰一
</div>

<!--
こんにちは 高等教育センター 助教の田川 と申します / 2本目の動画も開いていただき、ありがとうございます。 / この動画は、千葉大学全学FD、授業評価アンケートの活用に向けて、の2本目、効果的なアンケートの実施 活用方法です この動画を通して アンケートの効果的な実施方法や結果の活用方法についてお知りおきいただけますと幸いです
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 後半の解説動画です

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:10px;">
<div style="flex:1.05;">

<div class="box-accent" style="font-size:23px;"><b>毎タームの終わりに行っている授業評価アンケート</b>、後半の解説動画です。</div>

<div style="display:flex; flex-wrap:wrap; gap:10px 12px; margin-top:18px; max-width:560px;">
<span class="bubble pink">嬉しい結果で<br>やる気でた</span>
<span class="bubble pink">時間、かかって<br>大変そう…</span>
<span class="bubble pink">不満の記入<br>で心が痛い</span>
<span class="bubble pink">意味あるの？<br>妥当な意見なの？</span>
<span class="bubble pink">使い方が、<br>分からない…</span>
<span class="bubble pink">なぜ、<br>必要？</span>
</div>

</div>
<div style="width:300px;">
<img src="./src/fig01-img.png" alt="学生ポータル" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="bubble blue" style="display:block; margin-top:14px;">色々な声、疑問、お考えも<br>あると想像します</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:14px; text-align:center;">この動画では、上記の点をご説明します</div>

<!--
この動画で取り扱う声や意見はこちらです。それは、 アンケートの使い方、取得にかかる時間、 そして学生の不満の声への心づもり、という観点です。 / 一本目の動画に比べて、よりプラクティカルで役立つ内容をお伝えできればと思います。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 授業評価アンケートの流れ

<div class="flow-grid">
<div class="flow-step"><b>Step.1</b> 回答期間開始</div>
<div class="flow-cell"><div class="box-accent">学生への案内メール</div></div>

<div class="flow-step"><b>Step.2</b> 回答期間中</div>
<div class="flow-cell"><div class="box-accent">学生による回答</div></div>

<div class="flow-step"><b>Step.3</b> 回答期間終了</div>
<div class="flow-cell"><div class="box-accent">アンケート集計</div></div>

<div class="flow-step"><b>Step.4</b> 集計完了</div>
<div class="flow-cell"><div class="box-accent">教員へ結果通知・<br>教員がコメント記入</div></div>

<div class="flow-step"><b>Step.5</b> 学生へ教員の<br>コメントが戻る</div>
<div class="flow-cell"><div class="box-accent">学生へ通知メール／<br>学生がコメントを確認</div></div>
</div>

<style scoped>
.flow-grid { display:grid; grid-template-columns: 320px 1fr; gap:10px 26px; align-items:center; margin-top:8px; margin-right: calc(var(--pip-w) + 8px); }
.flow-step { font-size:24px; font-weight:700; border-bottom:2px solid var(--accent); padding-bottom:3px; }
.flow-step b { color: var(--accent-dark); }
.flow-cell .box-accent { text-align:center; font-weight:700; padding:9px 18px; font-size:23px; }
</style>

<!--
まず、簡単に授業評価アンケートの流れをご説明します。 / 最初に、アンケートへの回答期間が始まると、学生への案内メールが流れます。そして、回答期間中に学生による回答が行われ、回答期間終了後に集計作業が行われます。その後、教員へ結果が通知され、学生へのフィードバック・コメントの入力が依頼されます。最後、学生へ、アンケート結果と教員からのコメントが公開されます。 / 教員・学生間の双方向のコミュニケーションであることを目指して、このようなデザインになっています。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 授業評価アンケートの流れ <span style="font-size:26px;">— お力添え頂きたい点</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:6px;">
<div style="flex:1;">

<div class="flow-grid2">
<div class="flow-step2"><b>Step.1</b> 回答期間開始</div>
<div class="box-accent fc">学生への案内メール</div>

<div class="flow-step2 mk"><b>Step.2</b> 回答期間中</div>
<div class="box-accent fc mk">学生による回答</div>

<div class="flow-step2"><b>Step.3</b> 回答期間終了</div>
<div class="box-accent fc">アンケート集計</div>

<div class="flow-step2 mk"><b>Step.4</b> 集計完了</div>
<div class="box-accent fc mk">教員へ結果通知・<br>教員がコメント記入</div>

<div class="flow-step2"><b>Step.5</b> 学生へ教員の<br>コメントが戻る</div>
<div class="box-accent fc">学生へ通知メール／<br>学生がコメントを確認</div>
</div>

</div>
<div style="width:330px;">
<div class="gp-band" style="text-align:center; margin-bottom:14px;">お力添え頂きたい点</div>
<div class="box-warn" style="margin-bottom:14px;"><b>①</b> 回答を促して頂きたい</div>
<div class="box-warn"><b>②</b> できれば、コメントを学生に戻して頂きたい</div>
</div>
</div>

<style scoped>
.flow-grid2 { display:grid; grid-template-columns: 250px 280px; gap:7px 18px; align-items:center; }
.flow-step2 { font-size:20px; font-weight:700; border-bottom:2px solid var(--accent); padding-bottom:2px; }
.flow-step2 b { color: var(--accent-dark); }
.flow-grid2 .fc { text-align:center; font-weight:700; padding:6px 14px; font-size:20px; }
.flow-grid2 .mk { outline:3px solid #C0182B; outline-offset:2px; border-radius:8px; }
.flow-step2.mk { outline:none; border:2px solid #C0182B; border-radius:6px; padding:2px 6px; }
</style>

<!--
その中で先生方にお願いしたいのは二点です。①学生に回答を促していただくこと、②できれば学生にフィードバック・コメントを戻して頂きたい、という点です。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 授業評価アンケートの回答に何分かかるでしょう

<div style="background:#ECECEC; border-radius:12px; padding:30px 60px; margin:28px auto 0; max-width:760px; font-size:34px; line-height:2.0;">
A. 1分<br>
B. 5分<br>
C. 10分<br>
D. 15分
</div>

<!--
まずは、アンケートの回答が集まらないことには、始まりません。 / 一つの目のお願いである、学生に回答を促していただくことについて、説明致します。 / 簡単な問題を出させて下さい。 授業評価アンケートの実施にかかる時間は、 何分ぐらいでしょうか (10秒待つ)。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 授業評価アンケートの回答に何分かかるでしょう

<div style="background:#ECECEC; border-radius:12px; padding:24px 60px; margin:18px auto 0; max-width:760px; font-size:32px; line-height:2.0;">
<span class="mark-x">×</span>　A. 1分<br>
<span class="mark-o">◯</span>　B. 5分<br>
<span class="mark-o">◯</span>　C. 10分<br>
<span class="mark-x">×</span>　D. 15分
</div>

<div class="box-accent pip-safe" style="margin-top:20px; text-align:center; font-size:26px;">ご想像より、かなり短い時間で取れるのではないでしょうか</div>

<!--
千葉大の授業評価アンケートの場合、実は5分もあれば、十分に学生が回答するところまで終わらせることができます。10分だと、少し長め、という印象です。 / 先生のご想像より、かなり短い時間で取れるのではないでしょうか。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:left; margin:0 16px 6px 0;">時間、かかって<br>大変そう…</span>

# 実は<span style="color:var(--accent-dark)">5分間</span>でも、十分な回答が得られます

<div class="gp-band" style="margin-top:10px;"><span class="gp-no">見えてきたグッドプラクティス ①</span>授業中に5~10分ほど時間をとって実施する</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:18px;">
<img src="./src/fig03-img.png" alt="八木澤先生" class="photo-round" style="width:140px; height:140px;">
<div style="flex:1;">
<div class="box-info" style="margin-top:0;">最終回の<b>最初か最後のたった5分</b>で行っています。<br>昨年は10分の時間を取りましたが、5分でも質は同じでした。</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:14px; font-size:21px; font-weight:600; color:#7a4b00;">※<b>補足</b>：1単位の授業科目の場合、7.5回分で1単位分の授業に到達していることとなります。<br>　　　　5分のアンケートを授業内に実施するのは、問題ありません。</div>

<!--
先ほどご紹介した結果は、教育学部の八木澤先生の取り組みの中で、見えてきたことです。 / 先生は最終回の授業の最初か最後にアンケートを取得されています。 / 2023年度は10分間、2024年は5分間でアンケートを取得され、回答の質はどちらもほぼ変わらなかったそうです。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:left; margin:0 16px 6px 0;">時間、かかって<br>大変そう…</span>

# 実は<span style="color:var(--accent-dark)">QR</span>でも、十分な回答が得られます

<div class="gp-band" style="margin-top:10px;"><span class="gp-no">見えてきたグッドプラクティス ②</span>複雑な説明は不要、”QR + 授業改善のために答えてほしい”でOK</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:18px;">
<img src="./src/fig04-img.png" alt="八木澤先生" class="photo-round" style="width:130px; height:130px;">
<div class="box-info pip-safe" style="flex:1; margin-top:0; font-size:22px;">多くの学生はスマホで答えているようです。アンケートの価値とか重要性とか、説明したこともあるのですが、あまり聞いている様子ではありませんでした。今年はシンプルに、<b>「授業評価アンケートです。皆さんからのフィードバックは参考になりますので、よろしくお願いします」</b>とだけ伝えました。それでも回答数や内容(の質)は変わりませんでした。</div>
</div>

<!--
では、授業中に実施する場合、教員側の準備は大変なのでしょうか。いえ、実は、そうではありません。 / 八木澤先生の実践では、QRコードを示し、授業改善のために答えてほしい、だけで十分、学生は答えられるとのことです。 / 以前は十分な説明をされていたようですが、シンプルに回答をお願いするだけでも、回答数や質は変わらないようです。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

# 実施例

<div style="display:flex; gap:26px; align-items:flex-start; margin-top:6px;">
<div style="flex:1.4;">

<div class="box-accent" style="text-align:center;"><b>千葉大学授業評価アンケート</b><br><span style="font-size:21px;">授業を良くするために、皆様の感想・意見を教えて下さい</span></div>

<div style="margin:14px 0; font-size:26px; line-height:1.9;">
<b>所要時間</b>：5分間<br>
<b>方法</b>：スマホで回答可<br>
<b>教員氏名</b>：田川
</div>

</div>
<img src="./src/fig05-img.png" alt="QRコード" style="width:170px; height:170px; align-self:center;">
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">①詳細に書きたい方は、メールで届いたアンケートの案内、以下のURLからも記入できます。 https://portal.gs.chiba-u.jp/ceval　②あとから、結果の修正も可能です。　③結果は匿名化され、この授業と大学の教育を良くする目的で使用されます。後ほど、教員からもフィードバック致します。</div>

<!--
私の方でも、学生に説明する際に使えそうなスライドのモックアップを作ってみました。アンケートシステムであるイーキュスへのログインリンク、時間、講師名。これで十分学生は答えることができるようです。ぜひ、ご活用してみて下さい。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:left; margin:0 16px 6px 0;">時間、かかって<br>大変そう…</span>

# 日頃より教員に相談できる雰囲気も重要です

<div class="gp-band" style="margin-top:10px;"><span class="gp-no">見えてきたグッドプラクティス ③</span>協力的な学びの場作りで、日頃から教員に伝えられる教室を</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:18px;">
<img src="./src/fig06-img.png" alt="モリス先生" class="photo-round" style="width:120px; height:120px;">
<div class="box-info" style="flex:1; margin-top:0; font-size:22px;">.. honestly it's more helpful to get that feedback <b>before </b>the end of the course, and <b>I try to create a classroom where that's possible.</b></div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px; font-size:21px;">cf. 授業の雰囲気に最も影響する要素は、<b>「教員の学生志向性※」</b>であり、学生の主体的な学びにポジティブな影響をもつ 。 <i>Astin (1993)</i><br><span style="font-size:18px;">　※ 学生の学業面の課題への関心、授業外への親しみやすさ、学生への認識など</span></div>

<!--
そして、もう一つ重要な点は、協力的な学びの場作りです。 / モリス先生は、協力的な場作りで、日頃から学生が教員に課題感を伝えられるようにしているとのことです。 / 「協力的な学びの場作り」は、学生のモチベーションを上げる方法の一つとして知られています。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:right; margin:0 0 6px 16px;">使い方が、<br>分からない…</span>

# 各項目が関連しうる改善可能項目について、必要に応じてご確認ください

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">
<div style="flex:1.5;">

<div class="qrow"><div class="qq">(1) シラバスは授業の履修・学習に役に立つよう適切に記載されていた。</div><div class="qa">→ シラバスのFDやシラバスチェックをご参照下さい。大学設置基準 (第25条)に依拠するのみならず、<b>学生の主体的な学びを支援する</b>ものです。</div></div>

<div class="qrow"><div class="qq">(2) 授業は適切に実施された（授業回数不足、教員の遅刻、メディア授業の公開遅延はなかった）。</div><div class="qa">→ <b>授業成立の前提条件</b>となるため、この点は、ぜひ満点に向け、お願い致します。</div></div>

<div class="qrow"><div class="qq">(3) 授業における教科書や配布資料の利用は適切だった。</div><div class="qa">→ 学修者レベルに合っていない、アクセスできない、スライドに過不足がある、指定した教科書を使わない、学び方の学びを説明していない、など</div></div>

</div>
<div style="flex:1.5;">

<div class="qrow"><div class="qq">(4) 教員は意見や質問に適切に対応し、課題やレポートについて効果的なフィードバックをしていた。</div><div class="qa">→ 特に、オンデマンド授業の場合にご注意下さい。</div></div>

<div class="qrow"><div class="qq">(10) １回の授業にあたり、授業時間以外の学習・活動に費やした平均時間はどの程度でしたか。</div><div class="qa">→ 1単位<b>45時間</b>の学修が必要です。 (主に授業内で15時間、予習・復習で30時間)</div></div>

<div style="font-size:18px; color:#666; margin-top:6px;">※ 専門法務研究科を除く授業評価アンケート</div>

</div>
</div>

<style scoped>
.qrow { margin: 5px 0; }
.qrow .qq { font-size:19px; font-weight:700; color:#1a1a1a; line-height:1.4; }
.qrow .qa { font-size:18px; line-height:1.4; color:#333; margin:2px 0 0 0; padding-left:4px; }
.qrow .qa b { color: var(--accent-dark); }
</style>

<!--
こちらのスライドに、各項目についての改善のヒントを記載しております。必要に応じてご確認頂けますと幸いです。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:right; margin:0 0 6px 16px;">使い方が、<br>分からない…</span>

# 学生とのコミュニケーションとして、必要に応じ、フィードバックして下さい

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:6px;">
<div style="flex:1;">
<div class="box-info" style="margin-top:0; font-size:21px;">「皆さんの声・アイデアを踏まえて、今後の授業内容を検討したいと思います」</div>

<ul style="font-size:19px; line-height:1.45; margin-top:12px; padding-left:1.1em;">
<li>Moodleでの質問数は、前年度と比べて今年度はほとんど無かった。講義時に質問しにくい場合にMoodle等で質問できることをアナウンスしているが、より周知したい。</li>
<li>オムニバス形式の授業のため、フィードバックの部分で課題が残ってしまった。Moodleをうまく活用しフィードバックするように改善します。</li>
<li>授業時間外に予習復習をすることが求められていることを周知する必要があることがわかった。</li>
</ul>
</div>
<div style="flex:1;">
<div class="box-accent" style="margin-top:0; text-align:center; font-size:23px;"><b>2024年前期、350件</b>を超える授業で、教員から学生へのフィードバックを頂けました</div>

<ul class="pip-safe" style="font-size:19px; line-height:1.45; margin-top:12px; padding-left:1.1em;">
<li>概ね好評のようであった。回答率が数パーセントなので、できればもっと多くの学生にコメントをして欲しかった。</li>
<li>スライドの文字が多いことや話が多かったことについて、今後改善をしていきたいと思います。</li>
<li>もっと多くの受講者に答えてほしかった</li>
<li>視覚的な教材が良かったという声もありましたので、今後の使い方を考えたいと思います。</li>
</ul>
</div>
</div>

<!--
先生方にご協力頂きたい点の2つ目、学生へのフィードバックコメントについてです。2024年度前期の授業では、350件を超えるフィードバックが教員から学生に届いています。匿名でその記載事項をまとめ、気になるものを抜き出してみました。教員も学生の回答を受けるだけではなく、教員の意図を伝える、双方向のコミュニケーションの道具となっています。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:right; margin:0 0 6px 16px;">使い方が、<br>分からない…</span>

# 学生とのコミュニケーションとして、必要に応じ、フィードバックして下さい

<div style="display:flex; gap:14px; align-items:flex-start; margin-top:8px;">
<div style="flex:1;">
<div class="box-info" style="margin-top:0; text-align:center; font-size:24px;">「ありがとう。」</div>
<div class="box-info" style="margin-top:10px; text-align:center; font-size:24px;">「期待しています。」</div>
<div class="box-info" style="margin-top:10px; text-align:center; font-size:22px;">「素敵な教員になって下さい、応援しています。」</div>
</div>
<div style="flex:1.4; position:relative;">
<img src="./src/fig07-img.png" alt="好循環の矢印" style="position:absolute; left:-4px; top:6px; width:150px; opacity:.9;">
<div style="position:absolute; left:8px; top:54px; font-weight:800; color:#C0182B; font-size:22px; text-align:center; line-height:1.3;">好循環を<br>回しましょう</div>
<ul style="font-size:21px; line-height:1.55; margin:0 0 0 165px; padding:0; list-style:none;">
<li>- アンケート結果への教員のフィードバック</li>
<li>- 学生の<b>「自分は授業に良い影響を与えている」</b>という感覚</li>
<li>- 学生の回答のモチベーションになる</li>
<li>- <b>授業がよりよくなる</b></li>
<li>- 学生の<b>学びのモチベーション</b>になる</li>
</ul>
</div>
</div>

<style scoped>
section li b { color: var(--accent-dark); }
</style>

<!--
読んでいくと、ちょっと心が動くようなコメントを記載されている先生もいらっしゃいます。 / 教員のフィードバックは、学生が自分の授業に良い影響を与えているという感覚に繋がり、回答を増加させ、学修者本位の授業に繋がります。それは未来の学生の学びのモチベーションになります。そうしたポジティブな循環が生まれると嬉しいです。
-->

---

<div class="page-title">②効果的なアンケートの実施・活用方法</div>

<span class="bubble pink" style="float:left; margin:0 16px 6px 0;">不満の記入<br>で心が痛い</span>

# フィードバックという意味以上に、気にしすぎる必要はありません

<div class="box-info" style="margin-top:12px;">私自身、FDで<b>結構ズタボロに書かれたこと</b>があります。教員相手なので凹みましたが、気づきもありました。</div>

<div style="margin-top:14px;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">重要なのは、</div>
<div class="box-accent pip-safe" style="margin-top:6px;">コメントに左右されず、<b>改善のサイクルを回す、フィードバックとして捉える</b>ことです。</div>
</div>

<div class="box-warn pip-safe" style="margin-top:14px; font-weight:600; color:#7a4b00; font-size:22px;">そして、<b>良いことや建設的なこと</b>が書かれている方が多く、教えるモチベーションになったこともあります。</div>

<div style="margin-top:12px; font-size:23px; font-weight:800; color:var(--accent-dark);">▶ 裏話など、ぜひダイアログをご視聴下さい！</div>

<!--
最後に、不満の記入への心持ちです。ほとんどの教員が辛いコメントを書かれたことがあると思います。自分もそうです。 / 重要なのは、コメントに左右されるのではなく、改善のサイクルを回す、フィードバックとなる点を見出すことです。実はかなりの場合、良いことや建設的なことが書かれている場合も多いのです。あまり構えずにご活用頂けますと幸いです。
-->

---

<div class="page-title">まとめ</div>

# まとめ — 授業評価アンケートをぜひご活用下さい

<div class="sum-row">
<span class="bubble pink">時間、かかって<br>大変そう…</span>
<div class="box-accent sum-b">実は5分間でも、十分な回答が得られます<br>QRを提示し、スマホで答える、でOKです</div>
</div>

<div class="sum-row">
<span class="bubble pink">使い方が、<br>分からない…</span>
<div class="box-accent sum-b">各項目が関連しうる改善可能項目について、必要に応じてご確認ください<br><b>学生とのコミュニケーション</b>として、必要に応じ、フィードバックして下さい</div>
</div>

<div class="sum-row">
<span class="bubble pink">不満の記入<br>で心が痛い</span>
<div class="box-accent sum-b">フィードバックという意味以上に、気にしすぎる必要はありません</div>
</div>

<style scoped>
.sum-row { display:grid; grid-template-columns: 150px 1fr; gap:18px; align-items:center; margin:12px 0; margin-right: calc(var(--pip-w) + 8px); }
.sum-row .sum-b { font-size:21px; margin:0; }
</style>

<!--
この映像では、効果的なアンケートの実施・活用方法についてご説明致しました。実は5分、スマホで答える形式でも十分な回答があること、学生との双方向的なコミュニケーションとしてご活用頂きたいこと、フィードバックという以上に気にする必要はないこと、この三点がお伝えしたかったことです。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">おわりに</div>
</div>

<div style="text-align:center; margin:10px auto 28px;">
<span class="bubble green" style="font-size:30px; padding:16px 34px;">嬉しい結果で<br>やる気でた</span>
</div>

<div style="text-align:center; font-size:30px; line-height:1.7;">
授業アンケートを活用する文化を作り、<br>
学生にも、教員にも幸せな、より良い千葉大の教育を<br>
作って行きましょう
</div>

<!--
アンケートを実施していくことで、良かった、伝わった、嬉しかった、ということも出てくると思います。授業評価アンケートをぜひ先生の授業でもご活用頂き、よりよい千葉大の教育へと繋がっていけばと思います。以上で本FDを終了致します。ご視聴頂き、ありがとうございました。
-->
