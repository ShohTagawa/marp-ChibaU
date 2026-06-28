<div class="page-title">コンペ</div>

# 良いプロンプトを書くコツ <span class="tag tag-soft" style="font-size:24px;">7R法</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 50%;">

<div class="lead-note" style="color:var(--accent-dark);">プロンプト上手になるための7つのポイント</div>

<div class="bgroup" style="grid-template-columns:1fr; margin-top:6px;">
<div class="bg-items" style="border-left:4px solid var(--accent);">
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">① 明確な質問</span>　曖昧な質問ではなく明確な質問をすることで、より良い回答が得られます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">② 具体性</span>　トピックや要求に具体的な詳細を提供することで、適切な回答を引き出すことができます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">③ プロンプトの構造</span>　質問を構造化して、抜け・漏れをなくします。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">④ 文脈の提供</span>　重要な文脈や背景情報を提供します。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑤ 複数の質問</span>　必要に応じて、複数の質問を連続して投げます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑥ ステップバイステップ指示</span>　段階的に考えさせます。</div>
<div><span class="tag tag-accent" style="font-size:20px; padding:1px 12px;">⑦ 校正とフィードバック</span>　得られた結果を評価し、精度向上を促します。</div>
</div>
</div>

</div>
<div style="flex:1;">

<img src="./src/fig61-flow.png" alt="簡易プロンプトと詳細プロンプトの流れ図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">

</div>
</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる｜野口 竜司</div>

<!--
- プロンプト上手になるための7つのポイント（7R法）。①明確な質問、②具体性、③プロンプトの構造、④文脈の提供、⑤複数の質問、⑥ステップバイステップ指示、⑦校正とフィードバック。
- 右図は「簡易プロンプト（Request/Role/Regulation）」と「詳細プロンプト（Request/Role/Regulation/Rule/Review&Refine/Reference）」の入力→出力の流れ。
- 出典：ChatGPT時代の文系AI人材になる｜野口竜司
-->

---

<div class="page-title">コンペ</div>

# 良いプロンプトを書くコツ

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="margin:4px 0 8px; font-size:20px; line-height:1.45;">
<b># 命令(Instruction)</b><br>
AIに実行してほしい、最も重要なタスクを明確に記述します。この点、何をしてほしいのか、しっかりと対話して明確にして下さい。<br>
例：納豆の魅力について、子供向けに解説してください。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 役割(Role)</b><br>
AIに担ってほしい専門家やキャラクターを設定します。<br>
例：小学生に教えるのが得意な、明るく優しい先生
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 文脈(Context)</b><br>
このタスクの背景や、回答を作る上で考慮してほしい状況を伝えます。<br>
例：対象読者は、食べ物の好き嫌いが多い小学校3年生です。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 参照(Reference)</b><br>
AIに読み込ませたい情報（文章、データ、ファイル名など）を指定します。<br>
例：添付のPDF「natto_data.pdf」を読んでから回答してください。
</div>

<div class="box-info" style="margin:0 0 8px; font-size:20px; line-height:1.45;">
<b># 形式(Format)</b><br>
出力してほしい形を具体的に指定します。<br>
例：表形式で、各列は「栄養素」「働き」「多く含まれる食べ物」にしてください。
</div>

<div class="box-info" style="margin:0; font-size:20px; line-height:1.45;">
<b># ルール(Rules)</b><br>
回答を作成する上での、具体的な制約や必ず守ってほしい条件を箇条書きにします。<br>
* 【含めること】：必ず「ネバネバパワー」という言葉を入れてください。<br>
* 【禁止すること】：難しい科学用語（例：ビタミンK2）は使わないで下さい。
</div>

</div>
<div style="flex:0 0 33%;">

<div class="box-accent" style="font-size:22px; line-height:1.55;">
<b>目的</b><br>
どういう意図か？<br>
　含めること<br>
　禁止すること<br><br>
<b>背景</b><br>
背景知識<br>
プロンプトのターゲット<br><br>
<b>出力スタイル</b><br>
　量<br>
　形式<br>
　抽象度/具体度<br>
　順番
</div>

</div>
</div>

<div class="cite pip-safe">ChatGPT時代の文系AI人材になる｜野口 竜司を改変　／　※ とても長いプロンプトになる</div>

<!--
- 良いプロンプトの構成要素を具体例つきで解説。命令(Instruction)・役割(Role)・文脈(Context)・参照(Reference)・形式(Format)・ルール(Rules)。
- 右側は要素を「目的（意図・含めること・禁止すること）」「背景（背景知識・ターゲット）」「出力スタイル（量・形式・抽象度/具体度・順番）」に整理したもの。
- ※ とても長いプロンプトになる。出典：ChatGPT時代の文系AI人材になる｜野口竜司を改変。
-->

---

<div class="page-title">第3講　AIとの関係</div>

# 今日の目的

<div style="font-size:34px; font-weight:800; color:#9aa0a6; margin:18px 0;">第1講 AIって何か知ろう</div>

<div style="font-size:34px; font-weight:800; color:#9aa0a6; margin:18px 0;">第2講 AIを使う上での注意点とその背景を知ろう</div>

<div style="background:var(--accent-soft); color:#b89aa8; font-size:32px; font-weight:800; padding:12px 28px; border-radius:6px; margin:14px 0;">コンペ：AIを探求、読書、普段の学びに活かすには</div>

<div style="font-size:34px; font-weight:800; color:#1a1a1a; margin:18px 0;">第3講 AIとの付き合い方を考えよう</div>

<div style="font-size:38px; font-weight:800; color:var(--accent); margin-top:24px;">今後、AIとどう向き合うか、自分の考えを持てれば成功です</div>

<!--
- 6-7
- 今日の目的の振り返り。第1講「AIって何か知ろう」、第2講「AIを使う上での注意点とその背景を知ろう」、コンペ「AIを探求、読書、普段の学びに活かすには」を経て、今は第3講「AIとの付き合い方を考えよう」。
- 今後、AIとどう向き合うか、自分の考えを持てれば成功です。
-->

---

<div class="page-title">第3講　AIとの関係</div>

# AIは「教える」のどこに影響するか

<div class="subhead"><span class="tag tag-soft">参考</span><span>職業への影響</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 44%;">

<img src="./src/fig64-graph.png" alt="各職業に対するAIの影響と補完性（アメリカ）" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">

</div>
<div style="flex:1;">

<div class="box-info" style="margin:2px 0 10px; font-size:21px; line-height:1.45;">
<b>(1) AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業
</div>

<div class="box-accent" style="margin:0 0 10px; font-size:21px; line-height:1.45;">
<b>(2) AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業
</div>

<div class="box-warn" style="margin:0; font-size:21px; line-height:1.45;">
<b>(3) AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。
</div>

<div style="font-size:21px; margin-top:10px;">※ 教員・研究者(自然科学系)は、青の領域</div>

</div>
</div>

<div class="cite pip-safe">内閣府(2024) 世界経済の潮流 &gt;第1章&gt;p.13</div>

<!--
- 職業へのAIの影響を、代替性／補完性の2軸で分類した図（アメリカの各職業に対するAIの影響と補完性）。
- (1)影響大・代替性高＝AIがとって変わる職業、(2)影響大・補完性高＝AIを使いこなす必要のある職業、(3)影響小＝物理的タスク中心の職業。
- ※教員・研究者(自然科学系)は青の領域。出典：内閣府(2024) 世界経済の潮流＞第1章＞p.13
-->

---

<div class="page-title">第3講　AIとの関係</div>

# (参考) AIリテラシ <span style="font-size:30px; font-weight:700;">OECD (2023)</span>

<div class="box-accent" style="margin:8px 0 14px; text-align:center; font-size:26px;">
AIの技術面を批判的に評価し、AIを効果的に活用できる能力<br>
<span style="font-size:22px;">(communicate and collaborate)</span>
</div>

<div class="bg-items" style="border-left:4px solid var(--accent); font-size:23px; line-height:1.6; margin:0 0 14px;">
<div>第１：AIの基本的な機能と日常生活におけるAIの使用方法に関する知識</div>
<div>第２：様々な場面に応用することのできる能力</div>
<div>第３：AIを実装し、評価することができる能力</div>
<div>第４：アルゴリズムの開発に必要なデータを管理する能力とAIの出力結果を批判的に考察する能力</div>
</div>

<div class="box-info" style="margin:0 0 12px; text-align:center; font-size:25px;">
AIを理解し、活用し、監視し、批判的に考察できるスキル
</div>

<div class="box-warn pip-safe" style="text-align:center;">各国でリスキリング/学校教育への取り込みが行われている</div>

<div class="cite pip-safe">内閣府(2024) 世界経済の潮流 &gt;第1章&gt;p.32</div>

<!--
- 参考：OECD(2023)のAIリテラシ。AIの技術面を批判的に評価し、効果的に活用できる能力（communicate and collaborate）。
- 第1：基本的機能と日常生活での使用法の知識、第2：様々な場面に応用する能力、第3：実装・評価できる能力、第4：データ管理能力と出力結果を批判的に考察する能力。
- AIを理解し、活用し、監視し、批判的に考察できるスキル。各国でリスキリング/学校教育への取り込みが行われている。出典：内閣府(2024) 世界経済の潮流＞第1章＞p.32
-->

---

<div class="page-title">第3講　AIとの関係</div>

# AIとどう関わるかの例

<div class="subhead"><span style="color:var(--accent-dark);">共同知能 Co-Intelligence</span></div>

<div class="box-accent" style="margin:4px 0 14px; font-size:25px;">
<b>AIは人と異なる知能</b>である。「<b>異星人の心</b>」でありいくら人間っぽくても、性質が違う。
</div>

<div class="lead-note" style="color:var(--accent-dark);"><b>共同知能についての4つのルール</b></div>

<div class="stepbox" style="margin:4px 0 14px;">
<div class="st" style="font-size:24px;">AIを参加させる。</div>
<div class="st" style="font-size:24px;">人間参加型のデザインにする。</div>
<div class="st" style="font-size:24px;">AIにペルソナを与える。</div>
<div class="st" style="font-size:24px;">今使っているAIは、今後使用するどのAIよりも劣悪と仮定する。</div>
</div>

<div class="box-info pip-safe" style="font-size:23px; line-height:1.55;">
<b>+ でてきた情報を、批判的に考える</b><br>
<b>+ 先生は学びの文脈をAIに与えてみる</b><br>
<b>+ マイルールを作って行くことが大切</b>
</div>

<div class="cite pip-safe">『これからのAI、正しい付き合い方と使い方』 (2024) Mollick著、久保田訳</div>

<!--
- AIとどう関わるかの例として「共同知能 Co-Intelligence」を紹介。AIは人と異なる知能であり「異星人の心」。いくら人間っぽくても性質が違う。
- 共同知能についての4つのルール：①AIを参加させる、②人間参加型のデザインにする、③AIにペルソナを与える、④今使っているAIは今後のどのAIよりも劣悪と仮定する。
- 補足：でてきた情報を批判的に考える／先生は学びの文脈をAIに与えてみる／マイルールを作っていくことが大切。出典：『これからのAI、正しい付き合い方と使い方』(2024) Mollick著、久保田訳
-->

---

<!-- _class: message -->

<div class="page-title">第1講　イントロ</div>

<div style="display:flex; align-items:center; gap:40px; margin-top:60px;">
<div style="flex:0 0 130px; color:#2E9E5B; font-size:120px; line-height:1;">💬</div>
<div style="font-size:46px; font-weight:800; line-height:1.4;">日頃の学びの中で、AIとどのように関わっていきたいですか。</div>
</div>

<div class="takeaway pip-safe" style="background:#2E9E5B; color:#fff; border:none;">The <u>Slido app</u> must be installed on every computer you're presenting from</div>

<!-- Slidoで「日頃の学びの中で、AIとどのように関わっていきたいですか」を聴衆に書き込んでもらう。 -->

---

<!-- _class: message -->

<div class="page-title">第1講　イントロ</div>

<div style="display:flex; align-items:center; gap:40px; margin-top:60px;">
<div style="flex:0 0 130px; color:var(--accent); font-size:120px; line-height:1;">💬</div>
<div style="font-size:56px; font-weight:800; line-height:1.3;">Audience Q&amp;A</div>
</div>

<div class="takeaway pip-safe" style="background:#2E9E5B; color:#fff; border:none;">The <u>Slido app</u> must be installed on every computer you're presenting from</div>

<!-- Slidoで会場からの質問を受け付ける。 -->
