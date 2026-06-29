<div class="page-title">生成AIでできること</div>

# 生成AIの<span style="color:var(--accent-dark)">活用領域</span>

<div class="subhead"><span class="tag tag-accent">2 使ってみる</span><span>Anthropic (2025 ArXiv) <a href="#" style="color:var(--tag-blue); text-decoration:none;">リンク</a></span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-info" style="margin:6px 0 12px;">プライバシーの保護を保った状態で、<br>400万以上のClaude.aiの会話を分析</div>

<div class="lead-note" style="color:var(--accent-dark);">何をしたか</div>
<div style="font-size:23px; line-height:1.55; margin-left:6px;">
→どの経済的タスクにAIが利用されているか把握<br>
米国労働省のO*NET実会話DBから類似性分類
</div>

<div class="lead-note" style="color:var(--accent-dark); margin-top:14px;">全体として分かったこと</div>
<div style="font-size:23px; line-height:1.6; margin-left:6px;">
① Software 開発とWritingで半分<br>
② 36%の職業にAIが利用されている<br>
③ スキル増強：自動化 = 57 : 43
</div>

<div class="box-accent" style="margin-top:14px;"><b>教育での利用</b>　チュータリングタスクが多い</div>

</div>
<img src="./src/fig13-anthropic-chart.png" alt="職業大分類ごとのAI利用量" style="width:540px; align-self:flex-start;">
</div>

<!--
- Anthropicが400万件以上のClaude.aiの会話を、プライバシーを守った状態で分析した研究。どの経済的タスクにAIが使われているかを、米国労働省のO*NET職業データベースと突き合わせて分類した。
- 分かったこと：①ソフトウェア開発とライティングで全体の半分、②36%の職業でAIが使われている、③スキルの増強（補助）と自動化は57対43。
- 教育分野ではチュータリング（個別指導）タスクが多い。
-->

---

<div class="page-title">AIは仕事のどこに影響するか</div>

# 参考：<span style="color:var(--accent-dark)">職業への影響</span>

<div class="subhead"><span class="tag tag-accent">2 使ってみる</span><span><b>内閣府(2024)</b> 世界経済の潮流 ＞第1章＞p.13</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig14-scatter.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:430px; align-self:flex-start;">
<div style="flex:1;">

<div class="box-warn" style="margin:2px 0 10px;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>

<div class="box-info" style="margin:10px 0;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>

<div class="box-accent" style="margin:10px 0;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

</div>
</div>

<div class="lead-note pip-safe" style="color:var(--accent-dark); margin-top:6px;">※ 教員・研究者(自然科学系)は、青の領域</div>

<!--
- 内閣府の「世界経済の潮流」より、職業へのAIの影響を整理した図。
- 代替性が高い職業＝事務的タスクが多く、AIに置き換わってしまう。補完性が高い職業＝事務的だが意思決定が重要で、AIを使いこなす必要がある。影響が小さい職業＝物理的タスクが多い。
- 教員・研究者（自然科学系）は補完性の高い「青の領域」に入る。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:34px; align-items:center; margin-top:30px;">
<img src="./src/fig15-model.png" alt="modelのイラスト" style="width:280px;">
<div style="flex:1;">
<div style="font-size:30px; line-height:1.6;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
</div>
</div>

<!--
- ここからDifyを使った演習。まず大前提として、AIの「モデル」だけでは何もできない。
- 入力・出力・他システムとの接続（mcp、別のAI、ツール、参考書など）があって初めて動く。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:34px; align-items:center; margin-top:24px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:250px;">
<div style="flex:1;">
<div style="font-size:28px; line-height:1.55;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:28px; line-height:1.55; margin-top:22px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
</div>
</div>

<!--
- モデルを組み合わせることで、複雑な処理ができるようになる。
- 例：入力の分類、出力の分析、音声処理、画像処理など。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:30px; align-items:center; margin-top:18px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:230px;">
<div style="flex:1;">
<div style="font-size:25px; line-height:1.5;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:25px; line-height:1.5; margin-top:16px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:25px; line-height:1.5; margin-top:16px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
</div>
</div>

<!--
- さらにAIに「道具」を持たせると、現実的な処理ができる。
- RAG（検索拡張生成）、データベース、書籍、時計、天気予報など。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:30px; align-items:center; margin-top:14px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:210px;">
<div style="flex:1;">
<div style="font-size:24px; line-height:1.45;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
<div style="font-size:24px; line-height:1.45; margin-top:13px;">
－ <b>開発には、メタな視点が必要です</b><br>
<span style="margin-left:1.4em; font-weight:500;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</span>
</div>
</div>
</div>

<!--
- そして実際に開発するには、メタな視点（運用・管理の視点）も必要になる。
- CI/CD、ログ管理、出力評価、MLOps、データベース、セキュリティなど。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="display:flex; gap:26px; align-items:flex-start; margin-top:10px;">
<img src="./src/fig19-model.png" alt="複数のmodelのイラスト" style="width:185px;">
<div style="flex:1;">
<div style="font-size:23px; line-height:1.4;">
－ <b>Model</b>だけでは、動くことが出来ません<br>
<span style="margin-left:1.4em; font-weight:500;">入力、出力、他との接続 (mcp、AI、ツール、参考書 etc…)</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>AIを組合せることで、様々な複雑な処理が可能になります</b><br>
<span style="margin-left:1.4em; font-weight:500;">入力の分類、出力の分析、音声処理、画像処理…</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>AIに道具をもたせて、現実的な処理ができるようになります</b><br>
<span style="margin-left:1.4em; font-weight:500;">RAG、データベース、書籍、時計、天気予報…</span>
</div>
<div style="font-size:23px; line-height:1.4; margin-top:11px;">
－ <b>開発には、メタな視点が必要です</b><br>
<span style="margin-left:1.4em; font-weight:500;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</span>
</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px;"><b>Dify</b>（Define &amp; Modify / Do It For You）＝この全部がある程度（モックアップ稼働まで）できるのが、<b>AIプラットフォーム"Dify"</b></div>

<!--
- これらをある程度まとめて、モックアップが動くところまでできるのが、AIプラットフォームの「Dify」。
- DifyはDefine & Modify / Do It For You の略。今日はこれを使う。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<table style="width:100%; border-collapse:collapse; font-size:21px; line-height:1.4; margin-top:6px;">
<tr style="background:var(--section-bg);">
<th style="border:1px solid #cfd6df; padding:5px 8px; width:13%;"></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">Web SaaS 版<br><span style="font-weight:500; font-size:18px;">https://cloud.dify.ai/</span></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">AWS (/GCP) 版<br><span style="font-weight:500; font-size:18px;">例 https://dify.alc-test.net/</span></th>
<th style="border:1px solid #cfd6df; padding:5px 8px; color:var(--accent-dark);">Local＋イントラ版<br><span style="font-weight:500; font-size:18px;">例 http://localhost/</span></th>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">管理者</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">Langgenius</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">田川</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">あなた</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">LLM稼働箇所</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">各社APIサーバー</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">AWS<br><span style="font-size:18px;">(各社APIサーバー)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">LCL (＋AWS＋各社APIサーバー)</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">使用目的</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">個人的なPoCや、企業業務</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">大学業務</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">(制限なくきちんと)</span> 個人的な開発、操作、…</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">データの学習</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">原則されない<span style="font-size:18px;">(API注意)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">されない</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">されない</td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">費用</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">安い<span style="font-size:18px;">(大学はAPI代実費のみ)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">中くらい<span style="font-size:18px;">(月2万円/10人)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">Mac<br><span style="font-size:18px;">mini(20.3万)studio(60万)</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">機能</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最高<span style="font-size:18px;">(何でもできる)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最高<span style="font-size:18px;">(結構できる)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">テキスト処理？</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">速度</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最速<span style="font-size:18px;">(ChatGPTレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">普通<span style="font-size:18px;">(独賃でき るレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">遅 (APIを使うと…速い)</span></td>
</tr>
<tr>
<td style="border:1px solid #cfd6df; padding:5px 8px; font-weight:700; background:var(--section-bg);">セキュリティ</td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">最低<span style="font-size:18px;">(ChatGPTレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;">普通<span style="font-size:18px;">(企業向AWSレベル)</span></td>
<td style="border:1px solid #cfd6df; padding:5px 8px;"><span style="font-size:18px;">最高(自分のPCと同じ)</span></td>
</tr>
</table>

<div class="box-info pip-safe" style="margin-top:8px; font-size:21px;">AWS/GCP版でクラウドチェックリストで、機密どまで扱える要件を取りたい<br><span style="font-size:18px;">(但し、コミュニティ版は、複数WS / マルチアカウントが出来ない)</span></div>

<!--
- Difyには3つの動かし方がある。Web SaaS版（クラウド）、AWS/GCP版（大学が管理）、ローカル+イントラ版（自分のPC）。
- 管理者・LLMの稼働箇所・使用目的・データの学習・費用・機能・速度・セキュリティで一長一短。今日はこの中から選んで使う。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div style="background:#f4f4f4; border:1px solid #e0e0e0; border-radius:10px; padding:18px 28px; margin-top:18px; margin-right:calc(var(--pip-w) + 24px);">
<div style="display:flex; justify-content:space-between; align-items:center; color:#555; font-size:21px; border-bottom:1px solid #ddd; padding-bottom:8px; margin-bottom:14px;"><span>▦ Active poll</span><span>86 ⚇</span></div>
<div style="font-size:26px; font-weight:800; margin-bottom:18px;">どちらがやりたいですか</div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">自分の専門・研究に近いことを行いたい</div><div style="height:20px; width:90%; background:var(--tag-green); border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">30%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">音声や画像などに興味がある</div><div style="height:20px; width:90%; background:var(--tag-green); border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">30%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">面白い学び方を提案したい</div><div style="height:20px; width:84%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">28%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">安全性・倫理</div><div style="height:20px; width:30%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">10%</div></div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 0;"><div style="flex:1;"><div style="font-size:22px; margin-bottom:5px;">千葉大の課題を解決したい</div><div style="height:20px; width:6%; background:#9aa0a6; border-radius:10px;"></div></div><div style="font-weight:700; width:54px;">1%</div></div>
</div>

<!--
- では、どのテーマで演習したいかをライブ投票（slido）で聞いてみましょう。
- 自分の専門・研究に近いこと、音声や画像、面白い学び方、安全性・倫理、千葉大の課題、の5つから選ぶ。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyを用いた演習<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div class="box-accent" style="font-size:28px; text-align:center; margin:14px auto 18px; max-width:760px;"><b>テーマごとのグループで分かれて下さい</b></div>

<div class="stepbox">
<div class="st">① <b>それぞれの島で5 - 6人集めて下さい。</b><br><span style="font-size:23px;">　 グループの中に知り合いは3人まで (できるだけバラけて)<br>　 →グループを何らかの方法で決めて下さい</span></div>
</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st">② 決まったら、<b>それぞれの班に分かれ、</b> <b>PCを立ち上げ、自分のグループを書いて下さい。</b><br><span style="font-size:23px;">　 →クラスルーム内の以下のファイルです。</span></div>
</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:21px;">▣ グループ分け　<span style="color:#888;">投稿日: 10:49</span></div>

<!--
- ではグループ分けをします。テーマごとのグループに分かれてください。
- ①各島で5〜6人集める（知り合いは3人まで、できるだけバラけて）。②決まったら班に分かれてPCを立ち上げ、Classroom内のファイルに自分のグループを書く。
-->

---

<div class="page-title">グループ分け結果 (2025/10/01時点 ※ 順次更新します)</div>

# グループ分け結果<span class="tag tag-accent" style="font-size:24px;">3 グループ分け</span>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">専門特化グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g1</b><br>　専門1、2、3 (計17名)<br>サーバー：<b>gen_ai25_g2</b><br>　専門4 (計6名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計23名)</div>
</div>
<div class="pcard">
<div class="pc-h">倫理グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g2</b><br>　倫理8 (計8名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計8名)</div>
</div>
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">学び方グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g3</b><br>　学び方1、2、3 (計18名)<br>サーバー：<b>gen_ai25_g4</b><br>　学び方4、5 (計8名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計26名)</div>
</div>
<div class="pcard">
<div class="pc-h">絵・音声グループ</div>
<div style="font-size:21px; line-height:1.55;">サーバー：<b>gen_ai25_g5</b><br>　絵・音声1、2 (計14名)<br>サーバー：<b>gen_ai25_g6</b><br>　絵・音声3、4 (計12名)</div>
<div style="text-align:right; font-weight:800; color:var(--accent-dark); margin-top:6px;">(合計26名)</div>
</div>
</div>

<!--
- これが現時点のグループ分けの結果。専門特化、倫理、学び方、絵・音声の4テーマで、それぞれサーバー（Dify環境）を割り当てている。順次更新します。
-->

---

<div class="page-title">AIを教育で利活用する上で、必ず知ってほしいこと</div>

# AI利活用で<span style="color:var(--accent-dark)">知ってほしいこと</span><span class="tag tag-accent" style="font-size:24px;">4 AI利活用</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">
<div style="flex:1;">

<div class="goal-box" style="font-size:23px; padding:14px 22px;">
日常の活用において、知っていてほしいこと<br>
　<b>① 大学の生成AI利用に関するポリシー</b><br>
　<b>② AI自体の学習・セキュリティに関する状況</b><br>
　<b>③ 大学で提供しているAI</b>
</div>

<div class="box-warn" style="margin-top:16px;">ChatGPT(特に無料版)の場合、<br><b>ユーザーの入力は原則、学習に使われる</b><br><span style="font-size:21px; font-weight:500; color:#8a4b00;">(と思っておいた方が良い)。</span></div>

<div class="box-info" style="margin-top:12px; font-size:21px;"><b>機微を含む場合、オプトアウト(自分のデータの使用停止)をしておく</b><br>→ https://help.openai.com/en/articles/7730893-data-controls-faq</div>

</div>
<img src="./src/fig24-policy.png" alt="OpenAIの個人情報の利用目的に関する記載" style="width:560px; align-self:flex-start;">
</div>

<!--
- AIを教育で使う上で、必ず知ってほしいことが3つ。①大学のポリシー、②AIの学習・セキュリティの状況、③大学が提供しているAI。
- 特にChatGPTの無料版は、入力が原則として学習に使われると思っておいた方がよい。機微な情報を含む場合は、オプトアウト（データの使用停止）を設定しておくこと。
-->
