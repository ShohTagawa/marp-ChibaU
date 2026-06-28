<div class="page-title">生成AIの仕組み</div>

# <span style="color:var(--accent-dark)">注意点を活かそう</span>

<div class="cardrow" style="margin-top:8px;">

<div class="pcard">
<div class="pc-h">情報の正確性</div>
<ul>
<li>無意識のうちに合理的ではない行動、偏った判断をすることがあるという意識を持つ</li>
<li>チェックリストを用い真偽を判断する</li>
<li>安易に拡散しない / 拡散したいときはひと呼吸おく</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h">情報流出</div>
<ul>
<li>生成AIサービスの規約を確認する(商用利用可否、損害発生時の責任所在等)</li>
<li>個人情報や機密情報の入力は必要最小限にする</li>
<li>生成AIに入力したデータを学習に使わせないように設定する</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h">知的財産権の侵害</div>
<ul>
<li>既存のものや実在の人物に似たものを生成するような指示入力を避ける</li>
<li>生成物が既存のものや実在の人物に類似している場合、利用をやめる/権利者から許諾を取得後に利用する/既存のものと類似しないよう大幅に加工する</li>
</ul>
</div>

<div class="pcard">
<div class="pc-h">活用者としてのモラル</div>
<ul>
<li>本来自分が行うべきことまで生成AI任せにしない</li>
<li>生成AIが作った偏見のある回答を使用しない</li>
<li>生成AIを非倫理的な行為や犯罪に悪用しない</li>
</ul>
</div>

</div>

<div class="cite pip-safe" style="margin-top:10px;"><b>総務省　生成AIはじめの一歩 ～生成AIの入門的な使い方と注意点～</b></div>

<!--
- 生成AIの注意点を4つの観点で活かそう。情報の正確性：無意識のうちに合理的でない判断をしうると自覚し、チェックリストで真偽を判断、安易に拡散しない。情報流出：規約を確認、機密情報の入力は最小限、学習に使わせない設定。知的財産権の侵害：実在のものに似せる指示を避け、類似したら利用をやめる/許諾を取る/大幅加工。活用者としてのモラル：自分でやるべきことを任せきりにしない、偏見ある回答を使わない、犯罪に悪用しない。出典は総務省「生成AIはじめの一歩」。
-->

---

<div class="page-title">生成AIの仕組み</div>

# <span style="color:var(--accent-dark)">大規模言語モデルの中身</span> → ◯ 巨大な数字の塊 <span style="font-size:22px; color:#999;">✗知識集・ルール集</span>

<div style="display:grid; grid-template-columns: 1fr 290px; gap:20px; align-items:start; margin-top:6px;">

<div>

<div class="subhead"><b>ネクストワードプレディクション</b></div>

<div style="display:flex; align-items:center; gap:14px; font-size:24px; margin:6px 0 10px;">
<div style="border:2px solid #888; border-radius:6px; padding:6px 14px; background:#fff;">日本の首都__</div>
<span class="farrow">→</span>
<div style="border:2px solid #888; border-radius:6px; padding:6px 14px; background:#fff;">日本の首都は__</div>
<span class="farrow">→</span>
<div style="border:2px solid #888; border-radius:6px; padding:6px 14px; background:#fff;">日本の首都は東京__</div>
</div>

<div class="box-accent"><b>次の言葉(トークン)の確率を予想する問題</b></div>

<div style="display:flex; align-items:center; gap:18px; margin-top:20px;">
<div style="display:grid; grid-template-rows:auto auto; gap:10px;">
<div style="display:flex; gap:14px;">
<div class="fbox" style="font-size:24px; padding:8px 22px;">学習</div>
<div class="fbox" style="font-size:24px; padding:8px 22px;">入力</div>
</div>
</div>
<div style="border:2.5px solid var(--accent); border-radius:12px; padding:14px 22px; background:var(--accent-soft); text-align:center; font-weight:800; color:var(--accent-dark);">
パラメーター<br>の函<br><span style="font-size:20px; font-weight:400;">数字の羅列</span>
</div>
<div style="display:flex; flex-direction:column; gap:10px;">
<div class="fbox" style="font-size:24px; padding:8px 22px;">出力</div>
<div style="font-size:22px; text-align:center;">↑更新</div>
<div class="fbox" style="font-size:24px; padding:8px 22px;">評価</div>
</div>
</div>

<div class="box-info" style="margin-top:18px;">GPT 4：アメリカ議会図書館の<b>全蔵書の約22倍</b>相当?<br><span style="font-size:20px;">※書籍、記事、ウェブサイト、コードなど 幅広いテキストソースを元に学習している</span></div>

</div>

<div style="text-align:center;">
<img src="./src/fig38-llmviz-crop.png" alt="大規模言語モデルの内部構造（LLM Visualization）" style="height:520px;">
<div class="cite" style="text-align:center;">LLM Visualization ©Bycroft 2023</div>
</div>

</div>

<!--
- 大規模言語モデルの中身は、知識集・ルール集ではなく「巨大な数字の塊」。ネクストワードプレディクションとは、「日本の首都__」→「日本の首都は__」→「日本の首都は東京__」のように、次の言葉(トークン)の確率を予想する問題。学習は、入力→パラメーターの函(数字の羅列)→出力→評価→更新のループ。GPT-4はアメリカ議会図書館の全蔵書の約22倍相当のテキスト(書籍・記事・ウェブ・コード等)から学習している。右図はLLM Visualization(Bycroft 2023)。
-->

---

<div class="page-title">生成AIの仕組み</div>

# <span style="color:var(--accent-dark)">利用 (推論・生成)</span>　<span style="font-size:22px;">“吾輩は猫で”</span>

<div style="display:grid; grid-template-columns: 1fr 300px; gap:20px; align-items:start; margin-top:4px;">

<div style="display:flex; gap:16px; justify-content:space-between;">

<div style="flex:1;">
<div style="text-align:center; font-weight:800; font-size:24px; margin-bottom:6px;">計算1回目</div>
<div style="border:2px solid #555; border-radius:6px; padding:8px; text-align:center; font-size:21px;">出力 “吾輩は”</div>
<div style="text-align:center;">↑</div>
<div style="background:#7B2D8E; color:#fff; border-radius:10px; padding:10px; text-align:center; font-size:20px;">AI処理<br>(デコーダ)</div>
<div style="text-align:center;">↑</div>
<div style="border:2px solid #555; border-radius:6px; padding:7px; text-align:center; font-size:21px;">前処理</div>
<div style="text-align:center;">↑</div>
<div style="background:#3F9C5A; color:#fff; border-radius:6px; padding:8px; text-align:center; font-size:21px;">入力 “吾輩”</div>
</div>

<div style="align-self:center; font-size:30px; color:#5a5f66;">→</div>

<div style="flex:1;">
<div style="text-align:center; font-weight:800; font-size:24px; margin-bottom:6px;">計算2回目</div>
<div style="border:2px solid #555; border-radius:6px; padding:8px; text-align:center; font-size:21px;">出力 “吾輩は猫”</div>
<div style="text-align:center;">↑</div>
<div style="background:#7B2D8E; color:#fff; border-radius:10px; padding:10px; text-align:center; font-size:20px;">AI処理<br>(デコーダ)</div>
<div style="text-align:center;">↑</div>
<div style="border:2px solid #555; border-radius:6px; padding:7px; text-align:center; font-size:21px;">前処理</div>
<div style="text-align:center;">↑</div>
<div style="background:#3F9C5A; color:#fff; border-radius:6px; padding:8px; text-align:center; font-size:21px;">入力 “吾輩は”</div>
</div>

<div style="align-self:center; font-size:30px; color:#5a5f66;">→</div>

<div style="flex:1;">
<div style="text-align:center; font-weight:800; font-size:24px; margin-bottom:6px;">計算3回目</div>
<div style="border:2px solid #555; border-radius:6px; padding:8px; text-align:center; font-size:21px;">出力 “吾輩は猫で”</div>
<div style="text-align:center;">↑</div>
<div style="background:#7B2D8E; color:#fff; border-radius:10px; padding:10px; text-align:center; font-size:20px;">AI処理<br>(デコーダ)</div>
<div style="text-align:center;">↑</div>
<div style="border:2px solid #555; border-radius:6px; padding:7px; text-align:center; font-size:21px;">前処理</div>
<div style="text-align:center;">↑</div>
<div style="background:#3F9C5A; color:#fff; border-radius:6px; padding:8px; text-align:center; font-size:21px;">入力 “吾輩は猫”</div>
</div>

</div>

<div style="text-align:center;">
<img src="./src/fig39-tokenbars-crop.png" alt="各ステップの上位5トークンの確率分布" style="height:560px;">
</div>

</div>

<!--
- 利用(推論・生成)の流れ。入力「吾輩」→前処理→AI処理(デコーダ)→出力「吾輩は」が計算1回目。その出力を入力に戻して計算2回目で「吾輩は猫」、計算3回目で「吾輩は猫で」と、1トークンずつ生成を繰り返す。右のグラフは各ステップで予測された上位5トークンの確率分布(モデルはcyberagent/open-calm-7b)。たとえば「吾輩は_」の次は「、」「猫」「犬」などが候補に挙がる。
-->

---

<div class="page-title">生成AIの仕組み</div>

# <span style="color:var(--accent-dark)">まずは、この3つだけ</span>

<div class="stepbox" style="margin-top:16px;">
<div class="st">① 大規模言語モデルがしていることとは<br><span style="margin-left:1.4em; color:var(--accent-dark);"><b>次のもっともらしい単語(Token)を予測する作業</b></span></div>
</div>

<div class="stepbox">
<div class="st">② 大規模言語モデルの中身とは<br><span style="margin-left:1.4em; color:var(--accent-dark);"><b>ルール集ではなく、数字(統計的な重み)の塊</b></span></div>
</div>

<div class="stepbox">
<div class="st">③ なぜ精度が上がったり、複雑なことも出来るのか<br><span style="margin-left:1.4em; color:var(--accent-dark);"><b>分割して推論したり、ツール/情報を接続できるから</b></span></div>
</div>

<div style="text-align:center; font-size:30px; font-weight:800; margin-top:24px;">まずは、この<span style="color:var(--accent);">3つ</span>だけ、覚えましょう</div>

<!--
- まずはこの3つだけ覚えましょう。①大規模言語モデルがしていることは、次のもっともらしい単語(Token)を予測する作業。②中身はルール集ではなく、数字(統計的な重み)の塊。③なぜ精度が上がり複雑なこともできるかというと、分割して推論したり、ツールや情報を接続できるから。
-->

---

<div class="page-title">プロンプトとは？</div>

# <span style="color:var(--accent-dark)">プロンプトとは？</span>

<div class="box-info" style="margin-top:10px;">
<div style="margin:6px 0;"><b>プロンプト：</b><br><span style="margin-left:1.2em;">生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</span></div>
<div style="margin:6px 0;"><b>プロンプトエンジニアリング：</b><br><span style="margin-left:1.2em;">生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること</span></div>
<div style="margin:6px 0;"><b>コンテキストエンジニアリング：</b><br><span style="margin-left:1.2em;">生成AIに読み込ませる中身を選択し、正確で関連性の高い出力を生成できるよう、タスクに必要な背景情報や前提条件（コンテキスト）を整理・最適化すること</span></div>
<div style="margin:6px 0;"><b>コンテキスト内学習：</b><br><span style="margin-left:1.2em;">プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</span></div>
</div>

<div class="takeaway pip-safe"><b>良いプロンプト・コンテキスト</b>を入れれば、AIがより精度の高い情報を戻すようになる</div>

<!--
- プロンプトとは、生成AIに実行すべきタスクの生成を促す自然言語による文章のこと。プロンプトエンジニアリングは、望ましい出力を得るために指示や命令を設計・最適化すること。コンテキストエンジニアリングは、読み込ませる中身を選び、タスクに必要な背景情報や前提条件を整理・最適化すること。コンテキスト内学習は、プロンプトに与えた文章から生成AIがタスクの結果を生成できるようになること。良いプロンプト・コンテキストを入れれば、AIはより精度の高い情報を返す。
-->

---

<div class="page-title">プロンプトのコツ</div>

# <span style="color:var(--accent-dark)">プロンプトのコツ</span>

<div class="box-accent" style="margin-top:6px;"><b>簡潔に</b>、<b>十分に</b>、<b>具体的に</b>、4要素 (ペルソナ・タスク・背景情報・形式)を記入<br><span style="font-size:21px;">▶ <b>Google プロンプト初級ガイド を修正</b> (参照日：2026/04/23)</span></div>

<div style="display:grid; grid-template-columns: 1.15fr 1fr; gap:18px; align-items:start; margin-top:10px;">

<div>
<div class="box-info" style="font-size:21px;">あなたは初めての短期留学をアドバイスするチューターです。留学を準備する上でのアドバイスをインターネット上の大学生の経験談を参照し説明してください。2文程度で挨拶のあと、箇条書きで出力してください。</div>

<div style="font-size:22px; line-height:1.6; margin-top:8px;">
<div><b>自然な表現を使い、話すような完全な文章で</b></div>
<div><b>具体的かつ反復的に (多くの背景情報)</b></div>
<div><b>簡潔に記述して、複雑にならない (矛盾注意)</b></div>
<div><b>会話しながらプロンプトを改善する</b></div>
<div><b>Geminiとプロンプトを作る</b></div>
<div><b>自分でつくったドキュメントをソースにする</b></div>
</div>
</div>

<div>
<div class="box-warn" style="font-size:21px;"><b>追加： Few-shotを利用する</b><br><span style="color:#8a4b00; font-weight:400;">プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法</span></div>

<div class="cardrow" style="margin-top:8px; gap:8px;">
<div class="pcard" style="padding:8px 10px;">
<div style="font-weight:800; font-size:19px; margin-bottom:4px;">Google検索的 (単語)</div>
<div style="font-size:18px;">これは素晴らしい! 感情?</div>
</div>
<div class="pcard" style="padding:8px 10px;">
<div style="font-weight:800; font-size:19px; margin-bottom:4px;">Zero-shot</div>
<div style="font-size:18px;">「これは素晴らしい!」と書いた書き手の感情を教えて下さい</div>
</div>
<div class="pcard" style="padding:8px 10px;">
<div style="font-weight:800; font-size:19px; margin-bottom:4px;">Few-shot</div>
<div style="font-size:18px;">あの映画は最高だった! &gt;ポジティブ<br>これは酷い! &gt;ネガティブ<br>「これは素晴らしい!」&gt;?</div>
</div>
</div>
</div>

</div>

<!--
- プロンプトのコツ。簡潔に・十分に・具体的に、そして4要素(ペルソナ・タスク・背景情報・形式)を記入する。Googleプロンプト初級ガイドを修正(参照日2026/04/23)。例：「あなたは初めての短期留学をアドバイスするチューターです…2文の挨拶のあと箇条書きで」。コツは、自然な完全文で書く、具体的かつ反復的に、簡潔に(矛盾に注意)、会話しながら改善、Geminiと一緒に作る、自作ドキュメントをソースにする。追加でFew-shotの利用：入力例と出力例のデモを与えると高性能に。Google検索的(単語)→Zero-shot→Few-shotと、与える例が増えるほど意図が伝わりやすい。
-->

---

<div class="page-title">大学版のGeminiのメリット</div>

# <span style="color:var(--accent-dark)">大学版のGeminiのメリット</span>

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; align-items:start; margin-top:6px;">

<div>
<div class="stepbox">
<div class="st">① <b>入力が学習されない！</b><br><span style="font-size:21px; margin-left:1.2em;">(オプトアウト済)<br>※大学版のCopilotも同様</span></div>
</div>

<div class="stepbox">
<div class="st">② <b>学習向けのチューニング</b><br><span style="font-size:21px; margin-left:1.2em;">(商用版よりは依存しにくい)<br>※名前を呼んだり馴れ馴れしくない</span></div>
</div>

<div class="stepbox">
<div class="st">③ <b>Google WSと連携できる</b><br><span style="font-size:21px; margin-left:1.2em;">(@マークで読み込み簡単)</span></div>
</div>
</div>

<div>
<div style="border:1px solid #d8dee8; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.18); overflow:hidden; background:#fff;"><img src="./src/fig43-geminiui-crop.png" alt="千葉大Geminiの設定とヘルプ／アクティビティ画面" style="width:100%; display:block;"></div>

<div class="box-warn" style="margin-top:10px; font-size:21px;">以下に対処する意図でチューニングされている<br><span style="color:#8a4b00; font-weight:400;">AIへの過依存（答えを全部もらう）<br>認知的オフロード（自分で考えなくなる）<br>受動的学習（情報を受け取るだけ）</span></div>
</div>

</div>

<div class="takeaway pip-safe">大学版は、個人購入版よりも安心が大きいのと連携がウリ</div>

<!--
- 大学版Geminiのメリット。①入力が学習されない(オプトアウト済。大学版Copilotも同様)。②学習向けのチューニング(商用版より依存しにくい。名前を呼んだり馴れ馴れしくしない)。③Google Workspaceと連携できる(@マークで読み込み簡単)。AIへの過依存、認知的オフロード、受動的学習に対処する意図でチューニングされている。大学版は個人購入版より安心が大きく、連携がウリ。
-->

---

<div class="page-title">Geminiで出来る色々</div>

# <span style="color:var(--accent-dark)">Geminiで出来る色々</span>

<div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:18px; align-items:start; margin-top:4px;">

<div>
<div style="display:flex; gap:12px; align-items:flex-start;">
<img src="./src/fig83-img.png" alt="北極の空を飛ぶ旅客機とオーロラの生成画像" style="width:200px; border-radius:8px;">
<img src="./src/fig82-img.png" alt="化学実験で驚く生徒の白黒漫画" style="width:200px; border-radius:8px;">
</div>

<div class="box-info" style="margin-top:8px; font-size:19px;">圧巻の風景写真を作成したいです。北極の空を静かに飛ぶ旅客機を横から眺め、後ろにはオーロラが見えるような、景色を写実感のある写真として出して下さい。高度は高く、地上は小さく、暗闇の中を光るのは飛行機の窓とオーロラだけ、という雄大な構図にして下さい。飛行機の窓は一部は閉じられています。飛行機を横からみた構図にして下さい。写真は正方形にして下さい。</div>

<div class="box-info" style="margin-top:6px; font-size:19px;">高校の化学の実験を生徒がモチベーションがあがるような、楽しそうな絵を生成して下さい。化学実験室の机にフラスコがあって、反応が進んで生徒2-3人驚いている感じで。但し、現実的な実験の様子にして下さい。漫画な感じで、効果音も文字で書いてほしい。吹き出しは使ってはだめです。白黒の線画にして下さい。図は正方形で、明るい感じ。</div>
</div>

<div style="font-size:22px; line-height:1.75;">
<div>・スライドの作成・修正</div>
<div>・絵/漫画の出力 ・ 図の修正</div>
<div>・曲/動画の作成</div>
<div>・プログラムの対話的作成</div>
<div>・授業の解説や問題の作成</div>
<div>・暗記の支援</div>
<div>・検索(DeepResearch)</div>
<div>・スプレッドシートの分析</div>
<div>・絵・音声の文字起こし</div>
<div>・カレンダー/ToDo書込</div>
<div>・業務支援ワークフロー</div>
</div>

</div>

<div class="takeaway pip-safe">授業や職務で活用しやすい / 研修も実施</div>

<!--
- Geminiで出来る色々。スライドの作成・修正、絵/漫画の出力・図の修正、曲/動画の作成、プログラムの対話的作成、授業の解説や問題の作成、暗記の支援、検索(DeepResearch)、スプレッドシートの分析、絵・音声の文字起こし、カレンダー/ToDo書込、業務支援ワークフローなど。左の作例は、北極の空を飛ぶ旅客機とオーロラの写実的な画像、化学実験で驚く生徒の白黒漫画で、いずれもプロンプトで細かく構図や様式を指定している。授業や職務で活用しやすく、研修も実施。
-->

---

<div class="page-title">第5回について</div>

# <span style="color:var(--accent-dark)">第5回について</span>

<div class="box-accent" style="text-align:center; font-size:30px; font-weight:800; margin-top:14px;">5/12 教室講義 (G3-12で対面実施)となります。<br>以下を持参してください。</div>

<div style="font-size:32px; font-weight:800; margin:20px 0; padding-left:0.4em; border-left:8px solid var(--accent);">① PCまたはタブレット、②スマホ、③メモを取るもの</div>

<div class="box-warn pip-safe" style="margin-top:16px;">
<div>第4回の内容について、簡単なミニテストをします。</div>
<div style="font-weight:400; color:#8a4b00;">10分程度で実施、最終の成績への影響は<b>10点以下</b>です。<br>※今後も、オンデマンド回の次はミニテストがあります。<br>基本的に、<span class="tag tag-soft" style="font-size:18px; padding:0 8px;">重要</span> と書かれた周辺を学んでください。</div>
</div>

<!--
- 第5回について。5/12は教室講義(G3-12で対面実施)。①PCまたはタブレット、②スマホ、③メモを取るものを持参してください。第4回の内容について簡単なミニテストをします。10分程度で実施し、最終成績への影響は10点以下です。今後もオンデマンド回の次はミニテストがあります。基本的に「重要」と書かれた周辺を学んでください。
-->
