---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI体験WS</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<div class="page-title">開始の前に</div>

<div class="goal-box" style="font-size:25px; padding:14px 26px; margin:6px 0 14px;">
① <b>PCを立ち上げ、お持ちの<br><span class="ind">千葉大学Google Workspaceにログインして下さい</span></b><br>
<span class="ind"> 　→ 学校のGmailが立ち上がる状況ならOKです。</span><br>
② <b>インタラクションツール Slidoにアクセスして下さい</b><br>
<span class="ind">　URLを配布したり、質問やアンケートをとったりします</span><br>
<span class="ind">　 ※お名前などの個人情報の入力は禁止です</span>
</div>

<div style="display:flex; gap:24px; align-items:stretch; margin-top:6px;">
<div class="pcard" style="flex:0 0 240px;">
<div class="pc-h">スマホから</div>
<div style="text-align:center; font-size:21px; color:#555;">Slido QRコード<br>または右の方法でアクセス</div>
</div>
<div class="pcard pip-safe" style="flex:1;">
<div class="pc-h">PCから</div>
<ul>
<li>方法1　Google検索「Slido」→コード入力　<b style="color:var(--accent)">ALC-AI1-03</b></li>
<li>方法2　直接リンク<br><span style="font-size:18px; color:var(--tag-blue);">https://app.sli.do/event/hPooGJ6GrBvQg9DBwuuzk9</span></li>
</ul>
</div>
</div>

<!--
- 始める前に。PCで千葉大Workspaceにログイン、Slidoにアクセスしておいてください。個人情報の入力は禁止です。
-->

---

<div class="page-title">講師紹介</div>

# <span style="color:var(--accent-dark)">田川　翔</span><span style="font-size:24px; margin-left:14px;">たがわ　しょう</span>

<div class="box-info" style="margin:4px 0 12px;"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター　<b>大学教育を設計し、学生と教員を支援する仕事</b></div>

<div class="cardrow" style="margin-right:calc(var(--pip-w) + 8px);">
<div class="pcard">
<div class="pc-h">① 元々は理学の人</div>
<ul>
<li>Tagawa et al. (2021) <i>Nat. Com.</i></li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">② 色々な経験</div>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">③ 大学を学びやすく!</div>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
<li>オープンバッジ</li>
</ul>
</div>
</div>

<div class="cite pip-safe">現在、<i>Teaching with AI</i> を翻訳・出版準備中</div>

<!--
- 講師の田川です。元々は理学出身で、Nature Communicationsに論文。大学のICT支援やオンライン授業作成、民間経験などを経て、今は大学の教え方や生成AIの教育利活用を扱っています。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; font-weight:700; color:var(--accent-dark);">2025年度 第3回： 生成AI利用、どこまではOKで、どこからはアウト？</div>
<div style="font-size:24px; color:var(--muted); margin-top:6px;">15-min × 3 sessions</div>
<div style="font-size:26px; margin-top:30px;">国際未来教育基幹 田川 翔</div>
</div>

<!--
- 第3回は「生成AI利用、どこまではOKで、どこからはアウト？」。15分×3セッションで進めます。
-->

---

<div class="page-title">ワークショップの全体構成</div>

# ワークショップの全体構成

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

<div class="flowrow" style="margin:8px 0;">
<div class="fbox blue" style="font-size:30px; padding:8px 30px;">講義</div>
</div>
<div class="lead-note" style="margin:0 0 14px 6px; color:#555;">最初の15分 (今日短め)</div>

<div class="flowrow" style="margin:8px 0;">
<div class="fbox red" style="font-size:30px; padding:8px 30px;">体験</div>
</div>
<div class="lead-note" style="margin:0 0 14px 6px; color:#555;">真ん中の15分</div>

<div class="flowrow" style="margin:8px 0;">
<div class="fbox gray" style="font-size:30px; padding:8px 30px;">議論・座談会</div>
</div>
<div class="lead-note" style="margin:0 0 0 6px; color:#555;">最後の15分</div>

</div>
<div style="flex:0 0 360px;">
<div class="box-accent" style="text-align:center;">演習・議論付き (オンラインの皆様もぜひ！)<br>詳細は<b>moodle</b>で！</div>
</div>
</div>

<!--
- 全体は「講義 → 体験 → 議論・座談会」の3部、各15分。今日は最初の講義を短めにします。演習や議論もあるので、オンラインの方もぜひ。詳細はmoodleで。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<div class="stepbox" style="margin:8px 0;">
<div class="st"><span style="display:inline-block; min-width:6.5em;"><span class="tag tag-analyze" style="color:var(--tag-blue);">講義</span></span><b>最初の15分</b>　- 研究・学習でのAIの利用の原則を知る。</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st"><span style="display:inline-block; min-width:6.5em;"><span class="tag tag-design">体験</span></span><b>真ん中の15分</b>　- ポリシーを読み、気がついた点を共有し、自分の活動でAIとどう関わるか言語化する。</div>
</div>

<div class="stepbox pip-safe" style="margin:8px 0;">
<div class="st"><span style="display:inline-block; min-width:6.5em;"><span class="tag tag-ref">議論・座談会</span></span><b>最後の15分</b>　- 討論：生成AI利用、どこまではOKで、どこからはアウト？<br><span style="display:inline-block; margin-left:7em;">- 今日面白かったこと、気付きは何でしたか。</span></div>
</div>

<!--
- 今回の3部の中身。講義＝AI利用の原則を知る、体験＝ポリシーを読んで気づきを共有・言語化、議論＝どこまでOKでどこからアウトか討論し、今日の気づきを話します。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; font-weight:700; color:var(--accent-dark);">2025年度 第3回： 生成AI利用、どこまではOKで、どこからはアウト？</div>
<div style="font-size:24px; color:var(--muted); margin-top:6px;">15-min × 3 sessions</div>
</div>

<div class="goal-box" style="max-width:880px; margin:24px auto 0; font-size:26px;">
<b>Session 1：</b><br>
<span class="ind">講義： 研究・学習でのAIの利用の原則を知る</span>
</div>

<!--
- ここからSession 1。講義パートで、研究・学習でのAIの利用の原則を知っていきます。
-->

---

<div class="page-title">最初に質問です</div>

# 最初に質問です

<div class="lead-note">想像してみて下さい。</div>

<div class="box-info" style="margin:10px 0 18px;">
中高生の塾講師をしているとします。英語を教えているときに、こう言われました。<br>
「先生、この問題はAIが解けるのに、なぜ勉強しないといけないの？」
</div>

<div class="stepbox pip-safe">
<div class="st"><b>質問1:</b>　あなたは、この生徒になんと言い返しますか？</div>
<div class="st"><b>質問2:</b>　ところで、あなたが学んでいるときに、<br><span style="display:inline-block; margin-left:3.2em;">同じ疑問を持ったことはないですか？</span></div>
</div>

<!--
- 最初の問い。塾講師として「AIが解けるのに、なぜ勉強するの？」と聞かれたら、どう返しますか。そして、自分自身が学ぶときに同じ疑問を持ったことはありませんか。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div style="display:grid; grid-template-columns:5em 1fr; gap:18px 24px; align-items:center; margin-top:20px;">

<div style="font-size:36px; font-weight:800;">目的</div>
<div class="goal-box" style="margin:0; font-size:26px;"><b>Session 1：</b><br><span class="ind">講義： 研究・学習でのAIの利用の原則を知る</span></div>

<div style="font-size:36px; font-weight:800;">目標</div>
<div class="goal-box pip-safe" style="margin:0; font-size:26px;">
・ 学びにおける生成AIとの関わり方を考える<br>
・ ポリシーの重要性を説明できる
</div>

</div>

<!--
- Session 1の目的は、研究・学習でのAI利用の原則を知ること。目標は、学びにおける生成AIとの関わり方を考えられること、そしてポリシーの重要性を説明できることです。
-->

---

<div class="page-title">学びの建付け</div>

# <span style="color:var(--accent-dark)">まずは、発達段階を考えてみる</span><span class="tag tag-soft" style="font-size:22px; margin-left:14px;">復習</span>

<div class="box-info" style="margin:6px 0 10px; font-size:22px;">教育心理学者Bloomらにより作られた教育における目標の分類　▶ 熟達者になるには、総合的な力が必要</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<table style="font-size:19px; border-collapse:collapse; width:100%;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:5px 8px; border:1px solid #fff;"></th>
<th style="padding:5px 8px; border:1px solid #fff;">知識や思考</th>
<th style="padding:5px 8px; border:1px solid #fff;">技能やスキル</th>
<th style="padding:5px 8px; border:1px solid #fff;">態度</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:4px 6px; border:1px solid #ccc; font-weight:800;">高次</td><td style="padding:4px 6px; border:1px solid #ccc;"><b>創造</b> 学習を応用し、新しい価値を作れる</td><td style="padding:4px 6px; border:1px solid #ccc;" rowspan="1"></td><td style="padding:4px 6px; border:1px solid #ccc;" rowspan="1"></td></tr>
<tr><td style="padding:4px 6px; border:1px solid #ccc;"></td><td style="padding:4px 6px; border:1px solid #ccc;"><b>評価</b> 事物・判断等を比較し、評価できる</td><td style="padding:4px 6px; border:1px solid #ccc;">自然化</td><td style="padding:4px 6px; border:1px solid #ccc;">個性化</td></tr>
<tr><td style="padding:4px 6px; border:1px solid #ccc;"></td><td style="padding:4px 6px; border:1px solid #ccc;"><b>分析</b> 要素に分け関係性を指摘できる</td><td style="padding:4px 6px; border:1px solid #ccc;">分節化</td><td style="padding:4px 6px; border:1px solid #ccc;">組織化</td></tr>
<tr><td style="padding:4px 6px; border:1px solid #ccc;"></td><td style="padding:4px 6px; border:1px solid #ccc;"><b>応用</b> 他の場面や状況に使用できる</td><td style="padding:4px 6px; border:1px solid #ccc;">精密化</td><td style="padding:4px 6px; border:1px solid #ccc;">価値づけ</td></tr>
<tr><td style="padding:4px 6px; border:1px solid #ccc;"></td><td style="padding:4px 6px; border:1px solid #ccc;"><b>理解</b> 学習内容を説明できる</td><td style="padding:4px 6px; border:1px solid #ccc;">巧妙化</td><td style="padding:4px 6px; border:1px solid #ccc;">反応</td></tr>
<tr><td style="padding:4px 6px; border:1px solid #ccc; font-weight:800;">低次</td><td style="padding:4px 6px; border:1px solid #ccc;"><b>記憶</b> 事実や概念を暗記している</td><td style="padding:4px 6px; border:1px solid #ccc;">模倣</td><td style="padding:4px 6px; border:1px solid #ccc;">受け入れ</td></tr>
</tbody>
</table>

</div>
<img src="./src/fig09-crop.png" alt="棟梁・大工・見習い" style="height:340px;">
</div>

<!--
- 復習。発達段階から考えます。Bloomらの教育目標の分類で、記憶などの低次から、創造などの高次まで。建築でいう見習い・大工・棟梁のように、熟達者になるには知識・技能・態度の総合的な力が要ります。
- 1956年に認知的領域、1964年に情意的領域。精神運動領域は1972年の別のグループの仕事。認知的領域はAndersonらの改訂版を使用。
-->

---

<div class="page-title">AIとの関わり方の"視点"</div>

# AIとの関わり方の"視点"

<div class="subhead"><b>では、AIを全く使わない方がよいのですか？</b></div>

<div class="box-accent" style="margin:6px 0 18px;">
A. たぶん、良い関わり方がある。<br>
<span style="margin-left:1.6em;"><b>▶</b>　先週は、<b>学びの道具作り/情報の分析</b>を考えた</span><br>
<span style="margin-left:1.6em;">　今週は、<b>もっと広い視点</b>から考えてみる</span>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>① 仕事・業務の視点</b></div>
<div class="st"><b>② 授業と学びの視点</b></div>
<div class="st"><b>③ 研究・査読の視点</b></div>
</div>

<!--
- では、AIを全く使わない方がいいのか？　たぶん良い関わり方がある。先週は学びの道具作りや情報の分析を考えました。今週は、もっと広い視点から——①仕事・業務、②授業と学び、③研究・査読——の3視点で考えます。
-->

---

<div class="page-title">① 仕事・業務の視点</div>

# <span style="color:var(--accent-dark)">生成AIの活用領域</span>

<div class="cite" style="margin:-4px 0 8px;">Anthropic (2025 ArXiv) リンク</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="font-size:21px; margin:0 0 10px;">
プライバシーの保護を保った状態で、400万以上のClaude.aiの会話を分析<br>
→どの経済的タスクにAIが利用されているか把握<br>
米国労働省のO*NET実会話DBから類似性分類
</div>
<div style="font-size:21px; font-weight:800; color:var(--accent-dark); margin:2px 0;">何をしたか ↑</div>

<div class="stepbox" style="margin:6px 0;">
<div class="st" style="font-size:22px; margin:3px 0;"><b>全体として分かったこと</b></div>
<div class="st" style="font-size:21px; margin:3px 0;">① Software 開発とWritingで半分</div>
<div class="st" style="font-size:21px; margin:3px 0;">② 36%の職業にAIが利用されている</div>
<div class="st" style="font-size:21px; margin:3px 0;">③ スキル増強：自動化 = 57 : 43</div>
</div>

</div>
<img src="./src/fig11-crop.png" alt="Anthropic経済指標の図" style="width:330px; align-self:flex-start;">
</div>

<div class="box-warn pip-safe" style="font-size:21px; margin-top:8px;"><b>AIとデータ</b>を中心に、<b>人がすべき仕事を見分け、</b>DXや業務フロー変更することが始まっている　／　<b>最低限、出力の確認を →正しいか判断ができないことに使わない</b></div>

<!--
- まず①仕事・業務の視点。Anthropicが400万以上のClaude.aiの会話を、プライバシーを保ったまま分析し、O*NETのタスクと照らしました。ソフト開発とライティングで半分、36%の職業で利用、自動化と増強は57対43。人がすべき仕事を見分け、最低限、出力の確認をすることが大事です。
-->

---

<div class="page-title">① 仕事・業務の視点</div>

# <span style="color:var(--accent-dark)">仕事別の影響</span>

<div class="cite" style="margin:-4px 0 8px;"><b>内閣府(2024) 世界経済の潮流</b>＞第1章＞p.13　リンク</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:0 0 360px;">
<img src="./src/fig12-crop.png" alt="内閣府 仕事別影響の散布図" style="width:100%;">
<div style="font-size:18px; color:#666; margin-top:4px;">※ 現状のままだと考えた場合<br>※ 実際には、文化依存性があるなどして、不明</div>
</div>
<div style="flex:1;">

<div class="box-warn" style="font-size:20px; margin:0 0 8px;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わりうる職業</div>
<div class="box-info" style="font-size:20px; margin:0 0 8px;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>
<div class="box-accent" style="font-size:20px; margin:0;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

</div>
</div>

<div class="box-warn pip-safe" style="font-size:20px; margin-top:8px;">AIの出力は、次の時代の<b>仕事の平均値</b>かも　<b>「AIができることをただ出力するのは、AIで事足りるので採用する必要はない」ということ</b>　<b>AIができない「高次」の価値を作るために、引き続き学ぶ必要はある</b><br><span style="font-size:18px; color:#666;">Teaching with AI (Bowen &amp; Watson, AAC&amp;U 2024)</span></div>

<!--
- 内閣府の資料。仕事別に、代替性が高い職業（事務中心でAIに置き換わりうる）、補完性が高い職業（AIを使いこなす必要）、影響の小さい職業（物理タスク中心）に分かれます。AIの出力は次の時代の仕事の平均値かも。AIができることをただ出力するだけなら採用の必要はない、という話。だからAIにできない高次の価値を作るために、引き続き学ぶ必要があります。
-->

---

<div class="page-title">② 授業と学びの視点</div>

# 学習目標分類に生成AIの影響を当てはめてみる

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">

<table style="font-size:18px; border-collapse:collapse; width:100%;">
<tr>
<th style="border:1px solid #bbb; padding:5px;"></th>
<th style="border:1px solid #bbb; padding:5px; background:var(--accent-soft);">認知的領域 (知識や思考)</th>
<th style="border:1px solid #bbb; padding:5px; background:var(--accent-soft);">学びへの生成AIの影響</th>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px; font-weight:800; text-align:center;">高次</td>
<td style="border:1px solid #bbb; padding:5px;"><b>創造</b> (学習を応用し、新しい価値を作れる)</td>
<td style="border:1px solid #bbb; padding:5px;">人の創造性こそが大切 アイデア出しで活用</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px;"></td>
<td style="border:1px solid #bbb; padding:5px;"><b>評価</b> (事物・判断等を比較し評価出来る)</td>
<td style="border:1px solid #bbb; padding:5px;">評価軸/価値/判断は人が設定する (AIで支援は可)</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px;"></td>
<td style="border:1px solid #bbb; padding:5px;"><b>分析</b> (要素に分け、関係性を指摘できる)</td>
<td style="border:1px solid #bbb; padding:5px;">AIもある程度できる(例：要約・構造化)</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px;"></td>
<td style="border:1px solid #bbb; padding:5px;"><b>応用</b> (他の場面や状況に使用できる)</td>
<td style="border:1px solid #bbb; padding:5px;">単なる問題では、 AIが解いてしまう…</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px;"></td>
<td style="border:1px solid #bbb; padding:5px;"><b>理解</b> (学習内容を説明出来る)</td>
<td style="border:1px solid #bbb; padding:5px;">AIで支援することで、 より理解しやすくなる?</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px; font-weight:800; text-align:center;">低次</td>
<td style="border:1px solid #bbb; padding:5px;"><b>記憶</b> (事実や概念を暗記している)</td>
<td style="border:1px solid #bbb; padding:5px;">AIで支援可能だが、 学修者の記憶必須</td>
</tr>
</table>

<div class="cite">左は栗田&amp;中村 (2023)を元に作成 / 原著 Bloom (1956/1964)、改訂版(2001)を記載</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:10px;">

<div class="box-info" style="font-size:20px;">問題は、<b>AIで学びを代替したときに</b>、<b>できなくなること</b>があること。<br>① <b>低次 ~ 高次まで</b>身に付けないと使えない<br>② <b>長期的な悪影響</b>は不明</div>

<div class="box-accent" style="font-size:19px;"><b>例：手計算 vs 計算機</b><br><b>手計算を人より早く出来るスキルは不要</b>かもしれない、でも手計算の感覚を持たず代替すると、<b>「大きな何か」を実現しようとしたとき、(長期的に？)困ること</b>があるのでは？</div>

<div class="box-warn" style="font-size:18px;"><b>教員の皆様へ</b><br>評価方法の種別によって、計測可能な到達目標が変わります。持ち込み不可の筆記テストでは、応用までしか計測できないとされています。逆にその点は、AIが最も得意とする範囲にも重なります。評価の設定は、授業での到達範囲にもなりうるので、AIによって評価設定が難しくなったなぁ、と思っています。</div>

</div>
</div>

<!--
- 学習目標分類（ブルームのタキソノミー）に生成AIの影響を当てはめてみる。低次から高次まで身につけないと使えない、長期的な悪影響は不明、という2点が問題。手計算 vs 計算機の例で説明。
-->

---

<div class="page-title">② 授業と学びの視点</div>

# 授業と成績とはなにか？

<div style="position:relative; border:2.5px dashed var(--accent); border-radius:10px; padding:20px 28px; height:360px;">

<div style="font-weight:800; font-size:24px;">授業での考え方の例</div>

<div style="position:absolute; left:36px; bottom:60px; border:2.5px solid #333; border-radius:6px; padding:14px 30px; font-size:26px; font-weight:800;">学生の現状</div>

<div style="position:absolute; right:48px; top:50px; border:2.5px solid #333; border-radius:6px; padding:14px 30px; font-size:26px; font-weight:800;">学修後の状態</div>

<div style="position:absolute; left:330px; top:36px;"><span style="font-size:30px; font-weight:800;">目的：</span><br><span style="font-size:21px;">どこに向かうのか<br>(授業の存在価値)</span></div>

<div style="position:absolute; left:60px; top:150px;"><span style="font-size:30px; font-weight:800;">達成目標：</span><br><span style="font-size:21px;">何が出来るようになるのか</span></div>

<div style="position:absolute; right:60px; top:150px;"><span style="font-size:30px; font-weight:800;">評価：</span><br><span style="font-size:21px;">どのように測るのか</span></div>

<svg viewBox="0 0 900 360" style="position:absolute; left:0; top:0; width:100%; height:100%; pointer-events:none;">
<line x1="190" y1="300" x2="640" y2="120" stroke="var(--accent)" stroke-width="2.5"/>
<line x1="640" y1="120" x2="640" y2="300" stroke="#888" stroke-width="1.5" stroke-dasharray="5,5"/>
</svg>

</div>

<div style="text-align:center; font-size:34px; font-weight:800; margin-top:20px;" class="pip-safe">プラクティカルには生成AIの使用可否は授業教員の指示に従って下さい。</div>

<!--
- 授業と成績とはなにか。学生の現状から学修後の状態へ。目的（どこに向かうか）、達成目標（何ができるか）、評価（どう測るか）の3点で考える。プラクティカルには、生成AIの使用可否は授業教員の指示に従ってください。
-->

---

<div class="page-title">② 授業と学びの視点</div>

# 授業と成績とはなにか？

<div style="position:relative; border:2.5px dashed var(--accent); border-radius:10px; padding:20px 28px; height:330px;">

<div style="font-weight:800; font-size:24px;">授業での考え方の例</div>

<div style="position:absolute; left:36px; bottom:50px; border:2.5px solid #333; border-radius:6px; padding:12px 26px; font-size:24px; font-weight:800;">学生の現状</div>

<div style="position:absolute; right:48px; top:46px; border:2.5px solid #333; border-radius:6px; padding:12px 26px; font-size:24px; font-weight:800;">学修後の状態</div>

<div style="position:absolute; left:300px; top:32px;"><span style="font-size:28px; font-weight:800;">目的：</span> <span style="font-size:19px;">どこに向かうのか (授業の存在価値)</span></div>

<div style="position:absolute; left:50px; top:128px;"><span style="font-size:28px; font-weight:800;">達成目標：</span><br><span style="font-size:19px;">何が出来るようになるのか</span></div>

<div style="position:absolute; right:55px; top:128px;"><span style="font-size:28px; font-weight:800;">評価：</span><br><span style="font-size:19px;">どのように測るのか</span></div>

<div style="position:absolute; left:300px; top:130px; font-size:24px;"><b>設計(課題など)：</b><br><span style="font-size:20px;"><b>どのように教えるのか</b></span></div>

<svg viewBox="0 0 900 330" style="position:absolute; left:0; top:0; width:100%; height:100%; pointer-events:none;">
<line x1="180" y1="270" x2="640" y2="110" stroke="var(--accent)" stroke-width="2.5"/>
<line x1="640" y1="110" x2="640" y2="270" stroke="#888" stroke-width="1.5" stroke-dasharray="5,5"/>
</svg>

</div>

<div style="display:flex; gap:18px; margin-top:14px;" class="pip-safe">
<div class="box-warn" style="flex:1; font-size:20px;"><b>設計を損なう形で、AIを使わない！</b><br>→ 教員が身につけて欲しいと考えるから、意図的に学生の努力を期待している点</div>
<div class="box-accent" style="flex:1; font-size:20px;"><b>AI = RPGの場所ジャンプ機能にもなる</b><br>単にジャンプし続けると経験値がたまらずに、自分が使いこなせなくなってしまう</div>
</div>

<!--
- 前のスライドに「設計（課題など）：どのように教えるのか」を加えた図。設計を損なう形でAIを使わない。AIはRPGの場所ジャンプ機能にもなり、ジャンプし続けると経験値がたまらず使いこなせなくなる。
-->

---

<div class="page-title">② 授業と学びの視点</div>

# <span style="color:var(--accent-dark)">なぜ学ぶのか、どうすれば身につくのか、</span>本質に立ち返りましょう

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:10px;">

<img src="./src/fig16-rpg-left.png" alt="RPGの学習の道のりとAIテレポート" style="height:300px; border:1px solid #ccc;">
<img src="./src/fig16-rpg-right.png" alt="RPGのラスボス戦 ERROR CANNOT HANDLE" style="height:300px; border:1px solid #ccc;">

<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<div style="font-size:22px; font-weight:800;">◀ Gemini作成</div>
<div class="box-accent" style="font-size:22px; text-align:center;"><b>Jump連打は<br>やばい時が<br>あるかも。</b></div>
<div class="box-info" style="font-size:22px; text-align:center;"><b>逆に、jump<br>しても良い時<br>もあるかも?</b></div>
</div>
</div>

<!--
- Geminiが作成したRPGの比喩イラスト。左は本来の学習の道のりとAIテレポート、右はラスボス戦でERROR CANNOT HANDLE。Jump連打はやばい時があるかも、逆にjumpしても良い時もあるかも。なぜ学ぶのか、どうすれば身につくのか、本質に立ち返りましょう。
-->

---

<div class="page-title">② 授業と学びの視点</div>

# AI = RPGの場所ジャンプ機能?

<div class="box-info" style="font-size:20px; margin-bottom:8px;">①ジャンプし続けると成長の段階が欠けて学べずに、自分が使いこなせなくなってしまう<br>②目標以外の部分や既に身につけたところはジャンプすれば、もっと遠くまで、学ぶことができる</div>

<div style="display:flex; gap:14px; align-items:flex-start; margin:6px 0;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); white-space:nowrap;">アイデア①</div>
<div class="box-accent" style="flex:1; font-size:20px;"><b>自分が内発的にできるようになりたいことに　学生の皆さんは、AIを使わないのでは？</b><br><b>課題で時間がない時や、価値を感じない時に使うかも</b><br>→<b>価値や経験</b>をしっかり伝える</div>
</div>

<div style="display:flex; gap:14px; align-items:flex-start; margin:6px 0;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); white-space:nowrap;">アイデア②</div>
<div style="flex:1; display:flex; flex-direction:column; gap:6px;">
<div class="box-accent" style="font-size:20px;"><b>RPGの比喩</b><br><b>「途中のストーリーをしらないのに楽しめる？」</b><br><b>「経験値が無いのに、ラスボス戦にジャンプして戦える？」</b><br>→<b>自分の手を動かす必要性</b>をゴールから伝える</div>
<div class="box-warn" style="font-size:19px;"><b>注意！： </b>現在は、見習い経験を<b>意図しないと磨けない時代</b>　見習い部分の発注が業務がAIに代替されつつある</div>
</div>
</div>

<div class="cite pip-safe">AI = RPGのチュートリアル/伴走機能? という点は、前回(第2回) 参照</div>

<!--
- AIはRPGの場所ジャンプ機能。ジャンプし続けると成長段階が欠ける、目標以外や既習部分はジャンプすればもっと遠くまで学べる。アイデア①価値や経験を伝える、②RPGの比喩で自分の手を動かす必要性をゴールから伝える。見習い経験を意図しないと磨けない時代。
-->

---

<div class="page-title">参考資料：課題・評価改善</div>

# MIT式、AI時代の課題改善フロー <span style="font-size:26px;">for 先生方へ</span>

<div style="display:flex; gap:20px; align-items:flex-start;">

<img src="./src/fig18-mit-flow.png" alt="MIT式 AI時代の課題改善フロー" style="height:380px; border:1px solid #ccc;">

<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<div class="box-info" style="font-size:19px;"><b>類似の情報は阪大HPにも</b><br><a href="https://www.tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html">https://www.tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html</a></div>
</div>
</div>

<div style="display:flex; gap:18px; margin-top:12px;" class="pip-safe">
<div class="box-warn" style="font-size:20px;">必須：シラバスへの明記</div>
<div class="box-accent" style="font-size:20px;">他大学事例：課題ごとの使用範囲の申告</div>
</div>

<!--
- MIT式、AI時代の課題改善フロー（先生方へ）。授業計画の開始から、既存問題をAIに入力し回答を生成、AIとの対話により深堀り、AIと課題の限界を踏まえ改善という流れ。必須はシラバスへの明記。類似情報は阪大HPにも。
-->

---

<div class="page-title">③ 研究と査読の視点</div>

# <span style="color:var(--accent-dark)">まずは、投稿する論文誌や所管する学会のAIポリシーを確認する</span>

<div style="display:flex; gap:14px; margin-top:6px;">

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="box-accent" style="font-size:18px;"><b>Nature 投稿方針 リンク</b><br>① オーサーシップ付与は禁止<br>② LLM使用はMethods sectionで明示が必要※「AI assisted copy editing」(文法・読みやすさの改善)は開示不要<br>③ 画像生成AIは例外を除き禁止</div>
<div class="box-accent" style="font-size:18px;"><b>Nature 査読方針</b><br>① アップロードは原則禁止<br>② 主張の評価の判断に使用する場合は、宣言必要</div>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="box-info" style="font-size:18px;"><b>Science 投稿方針 </b>リンク<br>① オーサーシップ付与は付与は禁止<br>② 使用した場合は開示が必須　原稿作成補助でAIを使用した場合もカバーレターなどに明記<br>③ 画像は使用禁止</div>
<div class="box-info" style="font-size:18px;"><b>アメリカ地球物理学会 投稿・査読方針</b><br>①出版社Wileyの方針による<br>②言語編集のためのAI使用は原則可　だが、機密保持違反に注意</div>
</div>
</div>

<div class="box-warn pip-safe" style="font-size:19px; margin-top:10px;"><b>人間の責任（Human Oversight）:</b> AIは「執筆のパートナー」であり内容の正確性、引用、分析、倫理的基準については、<b>著者が全責任を負う。</b> <b>透明性と開示(disclosure)</b>:AIを使用した場合に明記する必要性。 <b>著者権(Authorship)</b>: 著者の資格。</div>

<div class="cite pip-safe">研究手法、投稿、査読とも、分野差があり、変わっていくので注意を　／　※使用を前提にした例：NeurIPS 2025のポリシー例</div>

<!--
- まずは投稿する論文誌や所管する学会のAIポリシーを確認する。Nature・Science・アメリカ地球物理学会の投稿/査読方針を比較。人間の責任、透明性と開示、著者権が共通の論点。研究手法・投稿・査読とも分野差があり変わっていくので注意を。
-->

---

<div class="page-title">前提</div>

# 研究倫理／アカデミック・インテグリティの遵守

<div class="box-accent" style="font-size:23px;">前提として、<b>研究倫理/アカデミック・インテグリティの遵守</b>を<br>(<b>特定不正行為</b>に該当することを<b>AIの利用の有無によらず</b>しない)</div>

<div style="font-size:21px; margin:12px 0 6px;">故意又は研究者として<b>わきまえるべき基本的な注意義務</b>を著しく怠ったことによる、<b>以下の不正行為</b></div>

<table style="font-size:20px; border-collapse:collapse; width:100%;">
<tr>
<td style="border:1px solid #bbb; padding:8px; font-weight:800; color:var(--accent-dark); white-space:nowrap; background:var(--accent-soft);">fabrication(捏造)</td>
<td style="border:1px solid #bbb; padding:8px;">存在しないデータ，研究結果等を作成すること。</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:8px; font-weight:800; color:var(--accent-dark); white-space:nowrap; background:var(--accent-soft);">falsification(改ざん)</td>
<td style="border:1px solid #bbb; padding:8px;">研究資料・機器・過程を変更する操作を行い、データ、研究活動によって得られた結果等を真正でないものに加工すること。</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:8px; font-weight:800; color:var(--accent-dark); white-space:nowrap; background:var(--accent-soft);">plagiarism(盗用)</td>
<td style="border:1px solid #bbb; padding:8px;">他の研究者のアイデア、分析・解析方法、データ、研究結果、論文又は用語を当該研究者の了解又は適切な表示なく流用すること。</td>
</tr>
</table>

<div class="cite pip-safe">日本学術振興会「科学の健全な発展のために」-誠実な科学者の心得 (2015) リンク　／　普遍ガイダンス (2025) https://www.cphe.chiba-u.jp/ge/for_student/guidance/pdf/guidance2025.pdf</div>

<!--
- 前提として研究倫理・アカデミックインテグリティの遵守。特定不正行為に該当することはAIの利用の有無によらずしない。捏造・改ざん・盗用（FFP）の定義を確認。日本学術振興会「科学の健全な発展のために」より。
-->

---

<div class="page-title">ポリシーとはなにか？</div>

# ポリシーとはなにか？

<div class="box-accent" style="font-size:22px;"><b>ポリシー</b>：合意形成された「なぜ」と「方向性」 ≠ ルール 「何をする/禁止する」</div>

<div class="cite" style="font-size:18px;">a way of doing something that has been officially agreed and chosen by a political party, a business, or another organization - LDOCE ver6</div>

<div style="display:flex; gap:16px; margin-top:8px; align-items:flex-start;">

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div class="box-info" style="font-size:19px;">① <b>階層性：</b> 研究倫理 (FFP)、論文投稿/査読、所属組織、授業 etc…</div>
<div class="box-info" style="font-size:19px;">② <b>基準の例 </b>(Bowen and Watson, 2025)<b>：</b></div>
<div class="box-info" style="font-size:19px;"><b>③ より高い目的や価値</b> (平等さ、倫理、生涯生きる学びなど) <b>の実現</b></div>
</div>

<div class="box-warn" style="flex:1; font-size:18px;">AIの使用はいつ許可され、いつ禁止されるのか？ なぜか？ 　→AIはこの授業での学びをどう強化し、阻害する可能性があるか？<br>AIが許可される場合、どのように、使用を開示するべきか？<br>AIの限界に関する理解。<br>AI検知ツールの使用計画とその情報の使用方法に関する透明性。<br>自分の成果・作品に対する最終的な説明責任についての明確な方針。</div>
</div>

<div style="text-align:center; font-size:28px; font-weight:800; margin-top:10px;" class="pip-safe"><span style="color:var(--accent-dark)">AIを利用する際には、まず、ポリシーを参照</span></div>

<!--
- ポリシーとは合意形成された「なぜ」と「方向性」で、ルール（何をする/禁止する）とは異なる。階層性、基準の例（Bowen and Watson 2025）、より高い目的や価値の実現。AIを利用する際には、まず、ポリシーを参照。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div class="box-accent" style="font-size:23px; margin-bottom:14px;"><b>Session 1：</b><br><span style="margin-left:1.5em;">講義： 研究・学習でのAIの利用の原則を知る</span></div>

<div style="display:grid; grid-template-columns:6em 1fr; gap:14px 18px; align-items:start;">

<div style="font-size:26px; font-weight:800; color:var(--accent-dark);">目的</div>
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:23px;">学びにおける生成AIとの関わり方を考える</div><div class="st" style="font-size:23px;">ポリシーの重要性を説明できる</div></div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">目標<br>＋<br>まとめ</div>
<div style="font-size:21px; line-height:1.6;" class="pip-safe">
・学びにおける生成AIとの関わり方を考える<br>
　・発達段階の途中は結局短時間化できても、省略不可？<br>
　・イノベーションの実現には結局、学習必須では？<br>
　・授業の場合、努力を求められている点では使わず頑張る<br>
・ポリシーの重要性を説明できる<br>
　・合意形成された「なぜ」と「方向性」<br>
　・ポリシーがある場合には、確認する
</div>

</div>

<!--
- Session 1の振り返り。目的は「学びにおける生成AIとの関わり方を考える」「ポリシーの重要性を説明できる」。目標とまとめでは、発達段階の省略可否、イノベーション実現には学習必須、授業では努力を求められる点では使わず頑張る、ポリシーは合意形成された「なぜ」と「方向性」で確認する、といった点を振り返る。
-->

---

<!-- _class: divider -->

<div class="title-hero">
<div class="title-small">生成AI体験ワークショップ</div>
<div class="title-big">Session 2</div>
</div>

<div style="font-size:23px; color:var(--muted); text-align:center; margin-top:6px;">2025年度 第3回： 生成AI利用、どこまではOKで、どこからはアウト？<br>15-min × 3 sessions</div>

<div class="box-accent" style="max-width:760px; margin:18px auto 0; font-size:23px;"><b>Session 2：</b><br><span style="margin-left:1.5em;">ポリシーを読み、気がついた点を共有し、自分の活動でAIとどう関わるか言語化する。</span></div>

<div style="text-align:center; font-size:20px; color:var(--muted); margin-top:16px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2の扉。ポリシーを読み、気がついた点を共有し、自分の活動でAIとどう関わるか言語化する。
-->

---

<div class="page-title">いざ、実践</div>

# 何をするか？

<div class="stepbox" style="margin-top:6px;">
<div class="st" style="font-size:22px;">① 自分に関係するAI利用ポリシーを探しましょう(3分)。</div>
<div class="st" style="font-size:22px;">② 5分で読んで以下の形式でまとめることを考えて下さい。<span style="color:var(--accent);">(AI使用可)</span><br><span style="margin-left:1.4em;"><b>何を読んだか、内容のまとめ、感想 </b>/ 他の人が読んだものと同じものも可能</span></div>
<div class="st" style="font-size:22px;">③ 3分で<span style="color:var(--accent);">スプレッドシートで共有して下さい</span>。<span style="color:var(--accent);">(名前・機密情報不可)</span></div>
</div>

<div style="display:flex; gap:16px; margin-top:10px;">

<div class="box-accent" style="flex:1.2; font-size:18px;"><b>おすすめ</b><br><b>学部生：</b>　千葉大学の教育・学習における生成AIの利用についての指針<br><b>修士/博士前期：</b> 自分が所属する学会の<b>研究利用における</b>AIポリシー<br><b>博士後期以上：</b> ご自身が出される論文誌や有名誌(N/Sなど)の<b>査読</b>AIポリシー<br><b>先生方:</b> ご自身の授業で学生に提示されている、課題でのAI利用ポリシー<br><b>職員の方：</b>ご担当の部署でのAI利用指針など、もしあれば</div>

<div class="box-info" style="flex:1; font-size:18px;">オンラインの方：困ったらSlidoに質問を送って下さい！<br>余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>
</div>

<!--
- いざ実践。何をするか。①自分に関係するAI利用ポリシーを探す(3分)、②5分で読んでまとめを考える（AI使用可）、③3分でスプレッドシートで共有（名前・機密情報不可）。おすすめは立場別に、学部生・修士・博士・先生方・職員の方それぞれのポリシー。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div class="box-accent" style="margin:6px 0 0;"><b>Session 2：</b><br><span class="ind">ポリシーを読み、気がついた点を共有し、<br><span style="margin-left:1.4em;"></span>自分の活動でAIとどう関わるか言語化する。</span></div>

<div style="display:grid; grid-template-columns:120px 1fr; column-gap:24px; align-items:start; margin-top:8px;">
<div style="font-size:28px; font-weight:800; line-height:1.35;">目的</div>
<div></div>
</div>

<div style="display:grid; grid-template-columns:120px 1fr; column-gap:24px; align-items:center; margin-top:18px;">
<div style="font-size:28px; font-weight:800; line-height:1.4;">目標<br>＋<br>まとめ</div>
<div class="stepbox" style="margin:0;">
<div class="st">それぞれが、自分に関わるポリシーを確認する</div>
<div class="st">気付いた点を言葉にし、共有する</div>
<div class="st">なぜ、ポリシーが重要か考える</div>
</div>
</div>

<!--
- Session 2の振り返り。目的＝ポリシーを読み、気付きを共有し、自分の活動でAIとどう関わるか言語化する。
- 目標＋まとめとして、①自分に関わるポリシーを確認、②気付いた点を言葉にし共有、③なぜポリシーが重要かを考える。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 3</div>

# 生成AI体験ワークショップ

<h2>2025年度 第3回： 生成AI利用、どこまではOKで、どこからはアウト？　／　15-min × 3 sessions</h2>

<div style="margin-top:28px; font-size:30px; font-weight:800; line-height:1.4;">Session 3：<br><span style="margin-left:1.2em; font-weight:600;">議論：討論 &amp; 振り返り</span></div>

<div style="margin-top:auto; font-size:22px; opacity:.9;">国際未来教育基幹　田川 翔</div>

<!--
- ここからSession 3。議論パートとして、討論と振り返りを行う。
-->

---

<div class="page-title">Session 3の進め方</div>

# <span style="color:var(--accent-dark)">議論・座談会</span>　<span style="font-size:26px; color:#666;">(最後の15分)</span>

<div class="box-accent" style="margin:4px 0 10px;">
<div>　- 討論：生成AI利用、どこまではOKで、どこからはアウト？</div>
<div>　- 今日面白かったこと、気付きは何でしたか。</div>
</div>

<div class="lead-note" style="font-size:27px;"><b>Slidoで進めます</b>　▶　<span class="hl-dark">モデレーションするので、Q&amp;Aタブから使って下さい</span></div>

<div style="display:grid; grid-template-columns:1fr 1.35fr; gap:18px; margin-top:8px;">

<div style="background:var(--section-bg); border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:16px;">
<div style="font-size:26px; font-weight:800;">スマホから</div>
<img src="./src/fig27-qr.png" alt="Slido QRコード" style="height:120px;">
</div>

<div style="background:var(--section-bg); border-radius:10px; padding:14px 20px;">
<div style="font-size:23px;"><b>PCから</b>　方法1　Google検索「Slido」→コード入力</div>
<div style="margin:8px 0; display:inline-block; background:#2a4d6e; color:#fff; border-radius:20px; padding:6px 18px; font-size:20px; font-weight:700;">Joining as a participant?　<span style="background:#fff; color:#2a4d6e; border-radius:14px; padding:2px 12px;"># ALC-AI1-03 ▸</span></div>
<div style="font-size:23px; margin-top:6px;">方法2　直接リンク</div>
<div style="font-size:19px; color:var(--tag-blue);">https://app.sli.do/event/hPooGJ6GrBvQg9DBwuuzk9</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<!--
- 最後の15分は議論・座談会。論点は「生成AI利用、どこまではOKで、どこからはアウト？」と「今日面白かったこと・気付き」。
- SlidoのQ&Aタブから参加（コード ALC-AI1-03）。協力的で敬意ある場作りをお願いします。
-->

---

<div class="page-title">参考：教員むけ資料</div>

# <span style="color:var(--accent-dark)">課題中心型</span>の授業設計

<div style="display:grid; grid-template-columns:0.92fr 0.72fr 1fr; gap:16px; align-items:start;">

<div>
<div class="subhead" style="font-size:21px;"><span class="tag tag-soft" style="font-size:19px;">ブランチ・メリル (2013)</span></div>
<div class="stepbox" style="margin:5px 0;">
<div class="st" style="font-size:18px; margin:3px 0;">①新しい全体的なタスクを見せる</div>
<div class="st" style="font-size:18px; margin:3px 0;">②タスクに必要な構成要素を提示する</div>
<div class="st" style="font-size:18px; margin:3px 0;">③タスクに関する構成要素を演示する</div>
<div class="st" style="font-size:18px; margin:3px 0;">④もう一つ新しい全体タスクを見せる</div>
<div class="st" style="font-size:18px; margin:3px 0;">⑤学修者に、既習の構成要素を新タスクに応用させる</div>
<div class="st" style="font-size:18px; margin:3px 0;">⑥この新タスクに必要となる追加的な構成要素を提示する</div>
<div class="st" style="font-size:18px; margin:3px 0;">⑦これらの追加的な構成要素を演示する</div>
<div class="st" style="font-size:18px; margin:3px 0;">⑧ステップ④ - ⑦を続くステップにも繰り返す</div>
</div>
<div style="font-size:18px; color:#555;">補足：⑥の追加部分は、AIに支援させるなども可能</div>
</div>

<div>
<table style="font-size:18px; border-collapse:collapse; width:100%;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:4px 5px; border:1px solid #fff;"></th>
<th style="padding:4px 5px; border:1px solid #fff;">知識</th>
<th style="padding:4px 5px; border:1px solid #fff;">技能</th>
<th style="padding:4px 5px; border:1px solid #fff;">態度</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">客観試験</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯(低次)</td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc;"></td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">論述試験</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯(高次)</td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc;"></td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">レポート</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯(高次)</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">発表</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯(高次)</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">口述/面接</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">観察評価</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">実演・制作</td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
<tr><td style="padding:4px 5px; border:1px solid #ccc;">心理テスト</td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc;"></td><td style="padding:4px 5px; border:1px solid #ccc; text-align:center;">◯</td></tr>
</tbody>
</table>
<div style="font-size:16px; color:#777; margin-top:3px;">中島 (2016)  p.36を参考</div>
</div>

<div>
<div class="box-accent" style="font-size:20px; margin:0 0 6px;">情報の伝達方法に<b>座学講義”だけ”を選ばなくても</b>、学生は学ぶ事ができる</div>
<img src="./src/fig28b-eval-map.png" alt="評価方法の二次元マップ（筆記/実演 × 単純/複雑）" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

</div>

<div class="cite pip-safe">cf. 養老孟司さんと考える これからの時代に必要な学びとは？（特に57:20 - ）　／　田中 (2010)『よくわかる教育評価』を改変</div>

<!--
- 課題中心型の授業設計（ブランチ・メリル 2013）の8ステップ。⑥の追加部分はAIに支援させることも可能。
- 座学講義”だけ”を選ばなくても学生は学べる。右の二次元マップ（筆記↔実演 × 単純↔複雑）で、パフォーマンス課題ほど高次の目標を測りやすい。田中(2010)を改変。
-->

---

<div class="page-title">参考：教員むけ資料</div>

# <span style="color:var(--accent-dark)">授業における生成AI利用のポリシーの例</span>

<div class="box-info" style="font-size:20px; line-height:1.5; margin:4px 0;">

このライティングコースの目標の一つは、効果的に書き、コミュニケーションをとる方法を学ぶことです。これができるようになるには練習が必要です。AIを使って迅速に文章を生産することも期待されるものの、<b>そもそも質の高い文章を自分で作成、編集し、認識する能力も必要</b>です。AIが自分を介さずに作業を行うことができる場合、それは雇用されるに値するスキルを持っていない、いうことです。だから、一緒に練習しましょう。

目標を達成するために、<b>コースの前半では</b>、AIのサポートは一切禁止する。この過程の苦労やもどかしさは、レベル上げ訓練のようなものと捉えてほしい。自分で作業を行う人が利益を得ることができる。

一方、<b>コースの後半</b>では、特定の状況下でAIを使用することが許可される場合がある。AIの使用を認める必要がある。使用したプロンプトとその応答を提出するよう求める場合がある。

AIリテラシーは重要な新しいスキルである。AIは「ハルシネーション：事実のように見えるものを生成する可能性」があることに注意が必要である。この技術の利点と潜在的な危険性の両方について批判的に考える必要がある。

最終的な成果物およびAIからの制限やバイアスの可能性について責任を負う。教員はこのポリシーを必要に応じて変更する権利を留保する。

</div>

<div class="cite pip-safe">(Bowen &amp; Watson, AAC&amp;U 2024 ※僅かに講演者が改変)</div>

<!--
- 授業における生成AI利用ポリシーの実例（Bowen & Watson, AAC&U 2024を僅かに改変）。
- 前半はAI一切禁止＝レベル上げ訓練、後半は条件付きで許可しプロンプトと応答の提出を求める。AIリテラシーとハルシネーション注意、最終成果物の責任は学生。
-->

---

<div class="page-title">参考：教員むけ資料</div>

# <span style="color:var(--accent-dark)">課題での努力における透明性と開示の選択肢</span>

<div class="box-accent" style="font-size:21px; line-height:1.5; margin:4px 0 12px;">
<div class="num-loose" style="margin:4px 0 4px 1.6em; font-size:21px;">1. 私は友人、ツール、テクノロジー、AI の助けを一切借りずに、この作業を完全に自力で行った。</div>
<div class="num-loose" style="margin:4px 0 4px 1.6em; font-size:21px;">2. 最初のドラフトは自分で書いたが、その後、友人/ 家族/AI/ パラフレーズ/文法/剽窃ソフトウェアに読んでもらい、提案をもらった。この助けを受けた後、以下の変更を行った：<br><span style="display:inline-block; margin-left:1.4em;">- スペルと文法の修正　　- 構成や順序の変更</span></div>
<div class="num-loose" style="margin:4px 0 4px 1.6em; font-size:21px;">3. 自分で作成した後、テクノロジーを使用して文全体や段落全体を書き直した。</div>
<div class="num-loose" style="margin:4px 0 4px 1.6em; font-size:21px;">4. 元となるアイデアを生成するためにAI/友人/チューターを使用した。</div>
<div class="num-loose" style="margin:4px 0 4px 1.6em; font-size:21px;">5. アウトライン/最初のドラフトを作成するためにAIを使用し、その後編集した。</div>
</div>

<h2 style="font-size:25px; color:var(--accent-dark); margin:6px 0 4px;">授業における生成AI利用のポリシーの内容例</h2>

<div class="box-info pip-safe" style="font-size:19px; line-height:1.45; margin:0;">
AI の使用が許可または禁止されるのはいつか？なぜか？　／　AI とのブレインストーミングはカンニングにあたるのか？　／　AI がこのクラスで学習をどのように強化または妨げる可能性があるのか？　／　AI が許可されている場合、学生は課題提出の一環として AI プロンプトを共有する必要があるのか？　／　AI の使用はどのようにクレジットされるべきか？　／　AI の限界に関する警告　／　AI 検出ツールの使用計画とその情報の使用方法に関する説明
</div>

<div class="cite pip-safe">(Bowen &amp; Watson, AAC&amp;U 2024)</div>

<!--
- 課題での「透明性と開示」の5段階選択肢：1=完全自力 〜 5=AIでアウトライン/初稿を作り編集、と開示レベルを学生が宣言する仕組み。
- ポリシーに盛り込む論点例：いつ許可/禁止か、ブレストはカンニングか、学習への影響、プロンプト共有の要否、クレジットの仕方、AIの限界、検出ツールの扱い。
-->

---

<div class="page-title">参考：教員むけ資料</div>

# <span style="color:var(--accent-dark)">英国におけるAI利用の不正行為の発見比率</span>

<div style="display:flex; justify-content:center; margin-top:2px;">
<img src="./src/fig28-img.png" alt="盗用は減り、AI関連の不正が増加（学生1,000人あたりの確定件数）" style="width:62%; max-width:760px; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div class="cite pip-safe" style="margin-top:8px; line-height:1.45;">
<b>Thousands of UK university students caught cheating using AI</b> - Guardian (2025.6.15)<br>
<span style="color:var(--tag-blue);">https://www.theguardian.com/education/2025/jun/15/thousands-of-uk-university-students-caught-cheating-using-ai-artificial-intelligence-survey</span>
</div>

<!--
- 英国の大学での不正行為の傾向：盗用（plagiarism）は減り、AI関連の不正が急増している（学生1,000人あたりの確定件数）。
- 出典：Guardian (2025.6.15) "Thousands of UK university students caught cheating using AI"。
-->
