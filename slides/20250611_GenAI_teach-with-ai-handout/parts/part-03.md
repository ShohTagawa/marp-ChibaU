<div class="page-title">良いプロンプトを書くコツ</div>

# <span style="color:var(--accent-dark)">良いプロンプト</span>を書くコツ

<div class="box-accent" style="margin:6px 0 12px;">生成AIから最適な回答を得るための指示（プロンプト）の工夫を "<b>プロンプトエンジニアリング</b>" と呼ぶ</div>

<div style="display:grid; grid-template-columns:auto 1fr; gap:10px 18px; align-items:stretch;">

<div style="display:flex; align-items:center; gap:12px; background:var(--accent-soft); border-radius:10px; padding:8px 16px;">
<span class="tag-accent" style="display:inline-flex; width:38px; height:38px; border-radius:50%; align-items:center; justify-content:center; font-weight:800; font-size:24px;">1</span>
<b style="font-size:22px;">目的・詳細な設定・<br>検討の材料を書く</b>
</div>
<div style="border:2px solid #bbb; border-radius:10px; padding:8px 16px; font-size:19px; line-height:1.45;">この質問は、XXXを作成するために聞いています<br>なお、8月の夏休みに行く旅行について検討しています<br>XXXの文脈に絞って、XXXについて教えてください</div>

<div style="display:flex; align-items:center; gap:12px; background:var(--accent-soft); border-radius:10px; padding:8px 16px;">
<span class="tag-accent" style="display:inline-flex; width:38px; height:38px; border-radius:50%; align-items:center; justify-content:center; font-weight:800; font-size:24px;">2</span>
<b style="font-size:22px;">欲しい回答の例を与える</b>
</div>
<div style="border:2px solid #bbb; border-radius:10px; padding:8px 16px; font-size:19px; line-height:1.45;">XXXのような事例を探しています<br>以下の例を参考に、類似のものを調べてください</div>

<div style="display:flex; align-items:center; gap:12px; background:var(--accent-soft); border-radius:10px; padding:8px 16px;">
<span class="tag-accent" style="display:inline-flex; width:38px; height:38px; border-radius:50%; align-items:center; justify-content:center; font-weight:800; font-size:24px;">3</span>
<b style="font-size:22px;">書式/回答方法を制限する</b>
</div>
<div style="border:2px solid #bbb; border-radius:10px; padding:8px 16px; font-size:19px; line-height:1.45;">横軸がAとBとCである表形式で答えてください<br>XXX文字以内で答えてください／要点をXXX個挙げてください</div>

<div style="display:flex; align-items:center; gap:12px; background:var(--accent-soft); border-radius:10px; padding:8px 16px;">
<span class="tag-accent" style="display:inline-flex; width:38px; height:38px; border-radius:50%; align-items:center; justify-content:center; font-weight:800; font-size:24px;">4</span>
<b style="font-size:22px;">文章のテイストを指定する</b>
</div>
<div style="border:2px solid #bbb; border-radius:10px; padding:8px 16px; font-size:19px; line-height:1.45;">私は10歳の子供だと思って説明してください<br>XXX (有名な作家 等) の文体で説明してください<br>女子高生になりきって説明してください</div>

</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;">今のAIは、幾分、簡単な質問でも答えるようになった ／ <b>複雑なことをさせるには必要</b></div>

<!--
- 生成AIから欲しい情報を得るために、指示入力にはいくつかのコツがあります。
- 代表的な4つのコツをご紹介します。
- ①目的、詳細な設定、検討の材料を書く
- 　目的や背景を説明すると、意図に沿った回答を得やすくなります。
- ②欲しい回答の例を与える
- 　例をいくつか提示すると、類似の回答を得やすくなります。
- ③書式、回答方法を制限する
- 　回答の形式、字数、回答の個数などを具体的に指定することで、目的に沿った回答を得やすくなります。
- ④文章のテイストを指定する
- 　誰に対する回答かを想定して指示することで、文脈に沿った回答を得やすくなります。
- なお、このような指示の工夫を、「プロンプトエンジニアリング」と呼びます。
-->

---

<div class="page-title">良いプロンプトを書くコツ (7R法)</div>

# 良いプロンプトを書くコツ　<span class="tag tag-soft" style="font-size:24px;">7R法</span>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:0.95;">
<div class="lead-note" style="color:var(--accent-dark);">図表5-1　プロンプト上手になるための7つのポイント</div>
<img src="./src/fig54-img.jpg" alt="プロンプト上手になるための7つのポイント" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1.05; display:flex; flex-direction:column; gap:4px;">
<div class="lead-note" style="color:var(--accent-dark); margin:0;">簡易プロンプト</div>
<img src="./src/fig55b-kani.png" alt="簡易プロンプト" style="width:100%; max-height:175px; object-fit:contain;">
<div class="lead-note" style="color:var(--accent-dark); margin:4px 0 0;">詳細プロンプト</div>
<img src="./src/fig56b-shosai.png" alt="詳細プロンプト" style="width:100%; max-height:215px; object-fit:contain;">
</div>

</div>

<div class="cite pip-safe">野口 竜司 (2023). 『ChatGPT時代の文系AI人材になる』東洋経済新報社.</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">良いプロンプトを書くコツ (gem デモ)</div>

# 良いプロンプトを書くコツ　<span class="tag tag-soft" style="font-size:24px;">gem デモ</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.55; border:2px solid #bbb; border-radius:10px; padding:10px 18px; font-size:18px; line-height:1.4;">
<b style="color:var(--accent-dark);"># 役割 (Role)</b><br>AIに担ってほしい専門家やキャラクターを設定します。<br>例：小学生に教えるのが得意な、明るく優しい先生<br>
<b style="color:var(--accent-dark);"># 命令 (Instruction)</b><br>AIに実行してほしい、最も重要なタスクを明確に記述します。<br>例：納豆の魅力について、子供向けに解説してください。<br>
<b style="color:var(--accent-dark);"># 文脈 (Context)</b><br>このタスクの背景や、回答を作る上で考慮してほしい状況を伝えます。<br>例：対象読者は、食べ物の好き嫌いが多い小学校3年生です。<br>
<b style="color:var(--accent-dark);"># 参照 (Reference)</b><br>AIに読み込ませたい情報（文章、データ、ファイル名など）を指定します。<br>例：添付のPDF「natto_data.pdf」を読んでから回答してください。<br>
<b style="color:var(--accent-dark);"># 形式 (Format)</b><br>出力してほしい形を具体的に指定します。<br>例：表形式で、各列は「栄養素」「働き」「多く含まれる食べ物」にしてください。<br>
<b style="color:var(--accent-dark);"># ルール (Rules)</b><br>回答を作成する上での、具体的な制約や必ず守ってほしい条件を箇条書きにします。<br>・【含めること】：必ず「ネバネバパワー」という言葉を入れてください。<br>・【禁止すること】：難しい科学用語（例：ビタミンK2）は使わないで下さい。
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="box-accent" style="font-size:20px; line-height:1.45;">
<b>目的</b><br>どういう意図か？／含めること／禁止すること
</div>
<div class="box-accent" style="font-size:20px; line-height:1.45;">
<b>背景</b><br>背景知識／プロンプトのターゲット
</div>
<div class="box-accent" style="font-size:20px; line-height:1.45;">
<b>出力スタイル</b><br>量／形式／抽象度・具体度／順番
</div>
<div style="border:2px dashed #888; border-radius:10px; padding:8px 14px; font-size:18px; line-height:1.4;">
メタプロンプトを作る (予め、ロールプレイする方法を伝えておく、等)<br>AIにプロンプトを作らせるプロンプトを作る
</div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">探究プロンプトも似た構造 → 上手いプロンプトの構造を持ってきて書き換える／AIに書かせる</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">AIに関する勉強方法</div>

# <span style="color:var(--accent-dark)">AIに関する勉強方法</span>

<div style="display:flex; flex-direction:column; gap:14px; margin-top:18px; font-size:30px;">

<div style="display:flex; align-items:baseline; gap:14px;"><span style="font-weight:800; color:var(--accent);">①</span><span><b>使い込んでいる人の使い方</b>を見る</span></div>

<div style="display:flex; align-items:baseline; gap:14px;"><span style="font-weight:800; color:var(--accent);">②</span><span><b>模範例のプロンプトを書き換えてみる</b></span></div>

<div style="display:flex; align-items:baseline; gap:14px;"><span style="font-weight:800; color:var(--accent);">③</span><span style="color:var(--accent);"><b>めんどう・よだきいとなったら、<br>　AIに外注できないか</b>、考えてみる</span></div>

<div style="display:flex; align-items:baseline; gap:14px;"><span style="font-weight:800; color:var(--accent);">④</span><span><b>しっくりくる回答が来るまで、試行錯誤する</b></span></div>

<div style="display:flex; align-items:baseline; gap:14px;"><span style="font-weight:800; color:var(--accent);">⑤</span><span>webにある無料講座などを履修する</span></div>

</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">プロンプトの小技</div>

# プロンプトの小技　<span class="tag tag-soft" style="font-size:22px;">1. 画像からの文字起こし</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.1;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark); margin-bottom:6px;">OCRの代用</div>
<div style="font-size:30px; font-weight:800; margin-bottom:14px;">意味を考えるので間違え<span style="color:var(--accent);">にくい</span></div>
<div style="display:inline-block; border:2.5px solid var(--accent); border-radius:50%; padding:10px 26px; font-size:24px; line-height:1.4; text-align:center;">
○ a lot of<br><span style="color:#888;">☓ a 1ot of</span>
</div>
</div>

<div style="flex:1;">
<img src="./src/fig57-img.png" alt="画像の書き起こし例（チャット）" style="width:100%; border:1px solid #e3e8f0; border-radius:10px; box-shadow:0 2px 7px rgba(0,0,0,.08);">
</div>

</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">プロンプトの小技</div>

# プロンプトの小技　<span class="tag tag-soft" style="font-size:20px;">2. (デモのみ) 動画からの文字起こし</span>

<div class="box-accent" style="margin:6px 0 12px; font-size:22px;">
<b>田川の講義動画をアップロードし、いろいろと聞いてみましょう</b><br>
<span style="font-size:20px;">－ 問題を作ってみる　－ 教え方を工夫するうえで、何をすべきか聞いてみる<br>－ 要約を作ってみる　－ 精緻的質問を行ってみる</span>
</div>

<div class="box-warn" style="font-size:21px; line-height:1.45;">
注意点：<br>
Google AI studioは、オプトアウトできません(AIが学習に使ってしまう) 。<br>
今回の動画は、公開されているので、webに使用できる状態です。
</div>

<div class="lead-note pip-safe" style="margin-top:14px; color:var(--accent-dark);">3. (デモのみ) napkin AIによる図表化</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">授業の流れと使い所</div>

# <span style="color:var(--accent-dark)">授業の流れ</span>と使い所

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">先進活用事例</div>
<div style="display:flex; align-items:center; gap:14px; margin:4px 0 12px;">
<span class="tag-soft tag" style="font-size:21px;">授業での活用事例</span>
<span style="font-size:18px; color:var(--tag-blue);">https://leadingdxschool.mext.go.jp/achieve/ai/</span>
</div>

<div style="font-size:22px; font-weight:800; color:var(--accent-dark); margin-bottom:6px;">日常での活用事例</div>
<div class="cardrow" style="gap:10px;">
<div class="pcard" style="padding:10px 12px;"><div class="pc-h" style="font-size:20px;">授業準備</div><div style="font-size:18px; line-height:1.5;">学習指導要領参照<br>関係資料の検索<br>レジュメ作成支援<br>授業案作成支援</div></div>
<div class="pcard" style="padding:10px 12px;"><div class="pc-h" style="font-size:20px;">授業</div><div style="font-size:18px; line-height:1.5;">教材<br>(調べ学習)<br>(不明点の理解)</div></div>
<div class="pcard" style="padding:10px 12px;"><div class="pc-h" style="font-size:20px;">小テスト</div><div style="font-size:18px; line-height:1.5;">問題案作成<br>回答・解説案作成<br>誤答案作成</div></div>
<div class="pcard" style="padding:10px 12px;"><div class="pc-h" style="font-size:20px;">評価</div><div style="font-size:18px; line-height:1.5;">評価基準作成</div></div>
<div class="pcard" style="padding:10px 12px;"><div class="pc-h" style="font-size:20px;">(分析)</div><div style="font-size:18px; line-height:1.5; color:#888;">※個人情報上<br>難しい</div></div>
</div>
</div>

</div>

<div style="display:flex; gap:14px; margin-top:10px;">
<div class="box-info" style="flex:1; font-size:19px; line-height:1.45;">校務：絵を作る、機密にかからない文案作成/添削<br>公開された省庁資料の分析や生徒指導提要の例を作成等</div>
<div class="box-accent pip-safe" style="flex:0.7; font-size:19px;">生徒の受け取り方<br>壁打ち</div>
</div>

<div class="lead-note pip-safe" style="text-align:right; color:var(--accent-dark); margin-top:4px;">その他、無限の可能性がありそうです！</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">ハンズオン：実際の教育活用の技を体験する</div>

# ハンズオン　<span style="color:var(--accent-dark);">問題の解説を考えましょう</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st"><span class="em">①</span> AIに解かせたい、入試・定期試験などの問題を一つ選んでください。<br>　　回答があることが望ましいです。記述式のほうが良いかもしれません。</div>
</div>

<div class="stepbox" style="margin-top:24px;">
<div class="st"><span class="em">②</span> 問題文だけをAIに投げて、解説させてください。<br>　　ハルシネーションはおきましたか？</div>
</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">ハンズオン：実際の教育活用の技を体験する</div>

# ハンズオン　<span style="color:var(--accent-dark);">問題の解説を考えましょう</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st"><span class="em">③</span> 今度は、問題といっしょに、解説と答えを含めて、送付してみましょう。<br>　　次に、AIに解説を詳しくするよう、頼んで下さい。</div>
</div>

<div class="stepbox" style="margin-top:24px;">
<div class="st"><span class="em">④</span> AIに意図を説明しましょう。<br>　　何を学生に学び取ってほしいのか、等。</div>
</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">ハンズオン：実際の教育活用の技を体験する</div>

# ハンズオン　<span style="color:var(--accent-dark);">問題の解説を考えましょう</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st"><span class="em">⑤</span> 学生は、どんな誤答をしがちか、聞いてみましょう。<br>　　その理由はなにか、表形式でまとめるよう、AIに聞いてみて下さい。</div>
</div>

<div class="stepbox" style="margin-top:24px;">
<div class="st"><span class="em">⑥</span> 類題を作ってみましょう。問題の形式、回答の有無、<br>　　難易度などは、指定しましょう</div>
</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">ハンズオン：評価のための補足</div>

# ハンズオン：評価のための補足　<span class="tag tag-soft" style="font-size:22px;">ルーブリック</span>

<div class="box-info" style="margin:2px 0 8px; font-size:20px; line-height:1.4; padding:9px 20px;">
<b>✔</b> 採点道具の一つで、課題を構成要素に分け、<b>要素ごとに評価基準を満たすレベル</b>を説明した表<br>
✔ パフォーマンス課題・レポート・実技等の評価の可視化
</div>

<div style="font-size:19px; font-weight:800; color:var(--accent-dark); margin:4px 0 3px;">「<b>課題内容</b>：6分模擬授業」を評価するためのルーブリック</div>

<table style="border-collapse:collapse; width:100%; font-size:18px;">
<tr style="background:var(--accent); color:#fff;">
<th style="padding:6px 8px; border:1px solid #ccc;">評価観点</th>
<th style="padding:6px 8px; border:1px solid #ccc;">素晴らしい(2)</th>
<th style="padding:6px 8px; border:1px solid #ccc;">合格(1)</th>
<th style="padding:6px 8px; border:1px solid #ccc;">不十分(0)</th>
</tr>
<tr><td style="padding:4px 8px; border:1px solid #ccc; font-weight:800; background:var(--accent-soft);">分量</td><td style="padding:4px 8px; border:1px solid #ccc;"></td><td style="padding:4px 8px; border:1px solid #ccc;">6分間で丁度</td><td style="padding:4px 8px; border:1px solid #ccc;">過剰か少ない</td></tr>
<tr><td style="padding:4px 8px; border:1px solid #ccc; font-weight:800; background:var(--accent-soft);">目標</td><td style="padding:4px 8px; border:1px solid #ccc;">明確かつ内容が一致していた</td><td style="padding:4px 8px; border:1px solid #ccc;">明確さか内容の何れかに改善点</td><td style="padding:4px 8px; border:1px solid #ccc;">明確さ・内容の何れも不十分</td></tr>
<tr><td style="padding:4px 8px; border:1px solid #ccc; font-weight:800; background:var(--accent-soft);">レベル設定</td><td style="padding:4px 8px; border:1px solid #ccc;">手を伸ばせば届くレベルだった</td><td style="padding:4px 8px; border:1px solid #ccc;">一部高度・容易な箇所があった</td><td style="padding:4px 8px; border:1px solid #ccc;">極端に高度・容易であった</td></tr>
</table>

<div style="display:flex; gap:14px; margin-top:3px; font-size:18px; color:var(--accent-dark); font-weight:800;">
<span>← 評価尺度</span><span>↑ 評価基準</span>
</div>

<div class="box-accent pip-safe" style="margin-top:6px; font-size:20px;">ルーブリックにより、安定・充実した評価が可能に → AIは上手　<span class="tag tag-ref">参照</span></div>

<div class="cite pip-safe">栗田 &amp; 中村（2024）「インタラクティブ・ティーチング 実践編３」／スティーブンス＆レビ (2014)</div>

<!--
[NOTE なし]
-->

---

<div class="page-title">ハンズオン：実際の教育活用の技を体験する</div>

# ハンズオン　<span style="color:var(--accent-dark);">問題の解説を考えましょう</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st"><span class="em">⑦</span> 問題が記述式の場合、採点する際のルーブリックと採点基準について、<br>　　作ってもらいましょう。(ルーブリックの場合、観点数と尺度数も与える)</div>
</div>

<div class="stepbox" style="margin-top:24px;">
<div class="st"><span class="em">⑧</span> (有料版の場合　※デモ)<br>　　それを体験してもらうツール・コードを作りましょう</div>
</div>

<!--
[NOTE なし]
-->
