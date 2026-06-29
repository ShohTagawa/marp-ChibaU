<div class="page-title">生成AIでできること</div>

# 生成AIの<span style="color:var(--accent-dark)">活用領域</span>

<div class="subhead"><span>Anthropic (2025 ArXiv) <a href="https://www.anthropic.com/research/anthropic-economic-index" style="color:var(--tag-blue); text-decoration:none;">リンク</a></span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">

<div class="box-info" style="margin-bottom:8px;">プライバシーの保護を保った状態で、<br>400万以上のClaude.aiの会話を分析</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">何をしたか</div>
<div style="font-size:22px; line-height:1.45; margin:2px 0 8px;">→どの経済的タスクにAIが利用されているか把握<br>米国労働省のO*NET実会話DBから類似性分類</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">全体として分かったこと</div>
<div class="stepbox" style="margin:4px 0;">
<div class="st" style="line-height:1.4;">① Software 開発とWritingで半分</div>
<div class="st" style="line-height:1.4;">② 36%の職業にAIが利用されている</div>
<div class="st" style="line-height:1.4;">③ スキル増強：自動化 = 57 : 43</div>
</div>

<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">教育での利用</div>
<div style="font-size:22px;">チュータリングタスクが多い</div>

</div>
<img src="./src/fig13-anthropic-chart.png" alt="Anthropic Economic Index：職業カテゴリ別のAI利用割合" style="width:46%; align-self:flex-start; border:1px solid #ddd;">
</div>

<!--
- AnthropicのEconomic Index。プライバシーを保ったまま400万以上のClaude会話を分析し、どの経済的タスクにAIが使われているかを把握した研究。SoftwareとWritingで半分、36%の職業で利用、スキル増強と自動化が57:43、教育ではチュータリングが多い。
-->

---

<div class="page-title">AIは仕事のどこに影響するか</div>

# 参考： <span style="color:var(--accent-dark)">職業への影響</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig14-naikakufu-scatter.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:42%; align-self:flex-start;">
<div style="flex:1;">

<div class="box-warn" style="margin-bottom:10px;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>

<div class="box-info" style="margin-bottom:10px;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>

<div class="box-accent" style="margin-bottom:10px;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>

<div style="font-size:22px; color:#444;">※ 教員・研究者(自然科学系)は、青の領域</div>

</div>
</div>

<div class="cite pip-safe">内閣府(2024)『世界経済の潮流』第1章 p.13</div>

<!--
- 内閣府の世界経済の潮流より。職業をAIの影響(横)と補完性(縦)でプロット。事務系で代替性が高いとAIに置き換わり、補完性が高いとAIを使いこなす職業になる。物理タスク中心は影響が小さい。教員・研究者(自然科学系)は青の領域。
-->

---

<div class="page-title">Difyを用いた演習</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:center; margin-top:18px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:30px; font-weight:800; margin-bottom:6px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:26px; margin-left:1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

</div>
</div>

<!--
- まず大規模言語モデル(model)単体では動けない。入力・出力、そしてmcp・他のAI・ツール・参考書などとの接続が必要になる、という話の出発点。
-->

---

<div class="page-title">Difyを用いた演習</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:18px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:30px; font-weight:800; margin-bottom:4px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:26px; margin:0 0 22px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:30px; font-weight:800; margin-bottom:4px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:26px; margin-left:1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

</div>
</div>

<!--
- AIを組み合わせると、入力の分類・出力の分析・音声処理・画像処理など、複雑な処理ができるようになる。
-->

---

<div class="page-title">Difyを用いた演習</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:14px;">
<img src="./src/fig19-robots.png" alt="model" style="width:23%;">
<div style="flex:1;">

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:24px; margin:0 0 16px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:24px; margin:0 0 16px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:28px; font-weight:800; margin-bottom:2px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:24px; margin-left:1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

</div>
</div>

<!--
- さらにAIに道具(RAG・データベース・書籍・時計・天気予報など)をもたせると、現実的な処理ができるようになる。
-->

---

<div class="page-title">Difyを用いた演習</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:12px;">
<img src="./src/fig19-robots.png" alt="model" style="width:21%;">
<div style="flex:1;">

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:23px; margin:0 0 12px 1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

<div style="font-size:27px; font-weight:800; margin-bottom:2px;">- 開発には、メタな視点が必要です</div>
<div style="font-size:23px; margin-left:1.1em;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</div>

</div>
</div>

<!--
- 実際に開発するとなると、CI/CD・ログ管理・出力評価・MLOps・DB・セキュリティといったメタな視点も必要になってくる。
-->

---

<div class="page-title">Difyを用いた演習</div>

# AIモデルだけでは、<span style="color:var(--accent-dark)">動けない</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:8px;">
<img src="./src/fig19-robots.png" alt="model" style="width:20%;">
<div style="flex:1;">

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- <b>Model</b>だけでは、動くことが出来ません</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">入力、出力、他との接続（mcp、AI、ツール、参考書 etc…）</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- AIを組合せることで、様々な複雑な処理が可能になります</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">入力の分類、出力の分析、音声処理、画像処理…</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- AIに道具をもたせて、現実的な処理ができるようになります</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">RAG、データベース、書籍、時計、天気予報…</div>

<div style="font-size:25px; font-weight:800; margin-bottom:1px;">- 開発には、メタな視点が必要です</div>
<div style="font-size:22px; margin:0 0 9px 1.1em;">CI/CD、ログ管理、出力評価、MLOps、DB、セキュリティ…</div>

</div>
</div>

<div class="box-accent pip-safe" style="margin-top:6px;"><b>Dify</b> <span style="color:#444; font-weight:700;">Define &amp; Modify / Do It For You</span> ── この全部がある程度（=モックアップ稼働まで）できるのが、<b>AIプラットフォーム"Dify"</b></div>

<!--
- これらを一通り面倒みてくれる、つまりモックアップ稼働まで持っていけるのがAIプラットフォーム"Dify"。Define & Modify / Do It For You の略。今回の演習でこれを使う。
-->

---

<div class="page-title">Difyを用いた演習</div>

# Difyの<span style="color:var(--accent-dark)">3つの提供形態</span>
<style scoped>section h1 { margin-bottom: 2px; }</style>

<table style="width:100%; border-collapse:collapse; font-size:18px; margin-top:4px; line-height:1.3;">
<colgroup><col style="width:16%;"><col style="width:28%;"><col style="width:28%;"><col style="width:28%;"></colgroup>
<thead>
<tr>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#f3f5f8;"></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#DDEAF6; text-align:left;">Web SaaS 版<br><span style="font-size:16px; font-weight:400;">https://cloud.dify.ai/</span></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#DCEFE0; text-align:left;">AWS (/GCP) 版<br><span style="font-size:16px; font-weight:400;">例：https://dify.alc-test.net/</span></th>
<th style="border:1px solid #cdd5e0; padding:2px 9px; background:#FBE7DA; text-align:left;">Local＋イントラ版<br><span style="font-size:16px; font-weight:400;">例：http://localhost/</span></th>
</tr>
</thead>
<tbody>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">管理者</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">Langgenius</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">田川</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">自分</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">LLM稼働箇所</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">各社APIサーバー</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">AWS（=各社APIサーバー）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">LCL（＋AWS＝各社APIサーバー）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">使用目的</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">個人的なPoC、企業業務</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">大学業務</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">（制限なさそう…）個人情報処理、採点 etc…</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">データの学習</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">原則されない <span style="font-size:16px;">(API次第)</span></td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">されない</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">されなさそう</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">費用</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">安い（大学はAPI代実費のみ）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">中くらい（月2万円/10人）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">Mac mini(20,30)/studio(60)</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">機能</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">最高（何でもできる）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">高い（結構できる）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">中くらい（テキスト処理？）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">速さ</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">最速（ChatGPTレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">普通（我慢できるレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">遅い（APIを使うと…）</td>
</tr>
<tr>
<td style="border:1px solid #cdd5e0; padding:2px 9px; font-weight:700;">セキュリティ</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#EFF5FB;">普通（ChatGPTレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#F0F8F2;">高い（企業向AWSレベル）</td>
<td style="border:1px solid #cdd5e0; padding:2px 9px; background:#FDF2EB;">最高（普通のPCと同じ）</td>
</tr>
</tbody>
</table>

<div class="cite pip-safe">AWS版/GCP版でクラウドチェックリストで、機密まで扱える要件を取りたい（但し、コミュニティ版は、複数WS／マルチアカウントが出来ない）</div>

<!--
- Difyの提供形態は3つ。Web SaaS版(手軽・個人PoC向け)、AWS/GCP版(田川管理・大学業務向け)、Local+イントラ版(自分管理・最高セキュリティ)。用途とセキュリティ要件で選ぶ。
-->

---

<div class="page-title">Difyを用いた演習</div>

# どちらが<span style="color:var(--accent-dark)">やりたいですか</span>

<div style="font-size:22px; color:#666; margin-bottom:6px;">▣ Active poll　　86人</div>

<div style="display:grid; grid-template-columns:1fr 72px; gap:8px 12px; align-items:center; font-size:25px; margin-top:6px;">
<div>自分の専門・研究に近いことを行いたい<div style="height:22px; background:var(--tag-green); border-radius:11px; width:88%; margin-top:4px;"></div></div><div style="font-weight:800;">30%</div>
<div>音声や画像などに興味がある<div style="height:22px; background:var(--tag-green); border-radius:11px; width:88%; margin-top:4px;"></div></div><div style="font-weight:800;">30%</div>
<div>面白い学び方を提案したい<div style="height:22px; background:#9aa0a6; border-radius:11px; width:82%; margin-top:4px;"></div></div><div style="font-weight:800;">28%</div>
<div>安全性・倫理<div style="height:22px; background:#9aa0a6; border-radius:11px; width:30%; margin-top:4px;"></div></div><div style="font-weight:800;">10%</div>
<div class="pip-safe">千葉大の課題を解決したい<div style="height:22px; background:#9aa0a6; border-radius:11px; width:8%; margin-top:4px;"></div></div><div style="font-weight:800;">1%</div>
</div>

<!--
- Slidoでクラスに「どちらがやりたいか」を聞いた結果。専門・研究と音声画像が各30%、面白い学び方28%、安全性倫理10%、千葉大の課題1%。この分布をもとにグループを分けていく。
-->

---

<div class="page-title">Difyを用いた演習</div>

# テーマごとの<span style="color:var(--accent-dark)">グループで分かれて下さい</span>

<div class="stepbox" style="margin-top:16px;">
<div class="st">①<b>それぞれの島で5 - 6人集めて下さい。</b><br><span style="display:inline-block; margin-left:1.4em;">グループの中に知り合いは3人まで (できるだけバラけて)</span><br><span style="display:inline-block; margin-left:1.4em;">→グループを何らかの方法で決めて下さい</span></div>
</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st">②決まったら、<b>それぞれの班に分かれ、</b> <b>PCを立ち上げ、自分のグループを書いて下さい。</b><br><span style="display:inline-block; margin-left:1.4em;">→クラスルーム内の以下のファイルです。</span></div>
</div>

<div class="box-accent pip-safe" style="margin-top:16px; display:flex; align-items:center; gap:14px;"><img src="./src/fig22-classroom-icon.png" alt="グループ分けファイル" style="height:30px;"><span><b>グループ分け</b>　<span style="font-size:20px; color:#666; font-weight:400;">投稿日時 10:49</span></span></div>

<!--
- グループ分けの指示。①各島で5〜6人、知り合いは3人まででバラけて決める。②決まったら班に分かれてPCを立ち上げ、クラスルーム内のファイルに自分のグループを記入する。
-->

---

<div class="page-title">グループ分け結果 (2025/10/01時点 ※ 順次更新します)</div>

# グループ分け<span style="color:var(--accent-dark)">結果</span>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:10px;">

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">専門特化グループ</div>
サーバー：gen_ai25_g1　専門1、2、3 (計17名)<br>
サーバー：gen_ai25_g2　専門4 (計6名)<br>
<span style="font-weight:800;">(合計23名)</span>
</div>

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">倫理グループ</div>
サーバー：gen_ai25_g2　倫理8 (計8名)<br>
<span style="font-weight:800;">(合計8名)</span>
</div>

<div class="box-info">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">学び方グループ</div>
サーバー：gen_ai25_g3　学び方1、2、3 (計18名)<br>
サーバー：gen_ai25_g4　学び方4、5 (計8名)<br>
<span style="font-weight:800;">(合計26名)</span>
</div>

<div class="box-info pip-safe">
<div style="font-weight:800; font-size:25px; margin-bottom:4px;">絵・音声グループ</div>
サーバー：gen_ai25_g5　絵・音声1、2 (計14名)<br>
サーバー：gen_ai25_g6　絵・音声3、4 (計12名)<br>
<span style="font-weight:800;">(合計26名)</span>
</div>

</div>

<!--
- グループ分け結果(2025/10/01時点)。専門特化23名(g1/g2)、倫理8名(g2)、学び方26名(g3/g4)、絵・音声26名(g5/g6)。各グループに割り当てたDifyサーバーを示す。順次更新。
-->

---

<div class="page-title">AIを教育で利活用する上で、必ず知ってほしいこと</div>

# 必ず<span style="color:var(--accent-dark)">知ってほしいこと</span>

<div class="goal-box" style="margin:10px 0;">日常の活用において、知っていてほしいこと<br>
<span class="ind"><b>① 大学の生成AI利用に関するポリシー</b></span><br>
<span class="ind"><b>② AI自体の学習・セキュリティに関する状況</b></span><br>
<span class="ind"><b>③ 大学で提供しているAI</b></span></div>

<div class="box-warn pip-safe" style="margin-top:14px;">ChatGPT(特に無料版)の場合、<b>ユーザーの入力は原則、学習に使われる</b>(と思っておいた方が良い)。<br><b>機微を含む場合、オプトアウト(自分のデータの使用停止)をしておく</b><br><span style="font-weight:400; font-size:20px;">→ https://help.openai.com/en/articles/7730893-data-controls-faq</span></div>

<!--
- 日常でAIを使う上で必ず知ってほしい3点：①大学のポリシー、②AIの学習・セキュリティの状況、③大学で提供しているAI。特にChatGPT無料版は入力が原則学習に使われると思った方がよく、機微情報を含む場合はオプトアウトしておく。
-->
