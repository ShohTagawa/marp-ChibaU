<div class="page-title">生成AIの仕組み</div>

# 利用 <span style="font-weight:800;">(推論・生成)</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:8px;">

<div style="flex:1.55; background:#FBF1DA; border-radius:12px; padding:14px 16px 10px;">
<table style="width:100%; border-collapse:collapse; table-layout:fixed; font-size:21px; text-align:center;">
<tr style="font-weight:800; font-size:23px;">
<td style="padding-bottom:6px;">計算1回目</td>
<td style="padding-bottom:6px;">計算2回目</td>
<td style="padding-bottom:6px;">計算3回目</td>
</tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩は”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩は猫”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩は猫で”</div></td>
</tr>
<tr><td colspan="3" style="font-size:22px; color:#5a5f66; padding:2px 0;">▲ 出力</td></tr>
<tr>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">出力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">出力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">出力</div></td>
</tr>
<tr><td colspan="3" style="font-size:22px; color:#5a5f66; padding:2px 0;">▲</td></tr>
<tr>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:8px 2px; line-height:1.3;">AI処理<br>(デコーダ)</div></td>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:8px 2px; line-height:1.3;">AI処理<br>(デコーダ)</div></td>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:8px 2px; line-height:1.3;">AI処理<br>(デコーダ)</div></td>
</tr>
<tr><td colspan="3" style="font-size:22px; color:#5a5f66; padding:2px 0;">▲</td></tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:5px 2px;">前処理</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:5px 2px;">前処理</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:5px 2px;">前処理</div></td>
</tr>
<tr><td colspan="3" style="font-size:22px; color:#5a5f66; padding:2px 0;">▲</td></tr>
<tr>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">入力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">入力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:6px 2px;">入力</div></td>
</tr>
<tr><td colspan="3" style="height:6px;"></td></tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩は”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:6px 2px;">“吾輩は猫”</div></td>
</tr>
</table>
</div>

<div style="flex:1; text-align:center;">
<img src="./src/fig13a-tokens-crop.png" alt="上位5トークンの確率分布（モデル: cyberagent/open-calm-7b）" style="height:430px;">
<div class="cite" style="margin-top:2px;">モデル： cyberagent/open-calm-7b</div>
</div>

</div>

<!--
- 推論・生成のしくみ。「吾輩」→「吾輩は」→「吾輩は猫」と、前の出力を入力に戻しながら1トークンずつ計算を繰り返す（自己回帰）。
- 右は実モデル open-calm-7b で次トークンの上位5候補と確率を示したもの。文脈（コンテキスト）を足すと確率分布が変わる。
-->

---

<div class="page-title">生成AIの仕組み</div>

# まとめ — この<span style="color:var(--accent-dark)">3つ</span>だけ

<div class="stepbox" style="margin-top:10px;">
<div class="st">① 大規模言語モデルがしていることとは<br><span style="margin-left:1.4em;"></span><b>次のもっともらしい単語(Token)を予測する作業</b></div>
</div>

<div class="stepbox">
<div class="st">② 大規模言語モデルの中身とは<br><span style="margin-left:1.4em;"></span><b>ルール集ではなく、数字(統計的な重み)の塊</b></div>
</div>

<div class="stepbox">
<div class="st">③ なぜ精度が上がったり、複雑なことも出来るのか<br><span style="margin-left:1.4em;"></span><b>繰り返し推論したり、ツール/情報を接続できるから</b></div>
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 56px);">まずは、この<b>3つ</b>だけ、覚えましょう　→詳細・体験・倫理は第4回へ</div>

<!--
- 仕組みパートのまとめ。①次トークン予測、②中身は数字の塊、③繰り返し推論・ツール接続で高度化。まずこの3つだけ覚えればよい。
-->

---

<div class="page-title">プロンプトとは？</div>

# プロンプトとは？

<div class="box-info" style="margin-top:6px; line-height:1.6;">
<div><b>プロンプト：</b>　生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</div>
<div style="margin-top:8px;"><b>プロンプトエンジニアリング：</b>　生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること</div>
<div style="margin-top:8px;"><b>コンテキストエンジニアリング：</b>　生成AIに読み込ませる中身を選択し、正確で関連性の高い出力を生成できるよう、タスクに必要な背景情報や前提条件（コンテキスト）を整理・最適化すること</div>
<div style="margin-top:8px;"><b>コンテキスト内学習：</b>　プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</div>
</div>

<div class="box-accent" style="margin-top:14px; margin-right:calc(var(--pip-w) + 56px); font-weight:800;"><b>良いプロンプト・コンテキスト</b>を入れれば、AIがより精度の高い情報を戻すようになる</div>

<!--
- プロンプト＝AIにタスクを促す自然言語の文章。それを設計・最適化するのがプロンプトエンジニアリング、背景情報まで整えるのがコンテキストエンジニアリング。
- 与えた文章からその場でタスクを覚えるのがコンテキスト内学習。良いプロンプト・コンテキストほど精度が上がる。
-->

---

<div class="page-title">プロンプトのコツ</div>

# プロンプトのコツ

<div class="box-info" style="margin-top:4px;">
<b>Few-shot：</b> プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法。コンテキスト内学習をGPTが出来るので、実現する
<div class="cite" style="margin-top:4px;">Prompt Engineering Guide　https://www.promptingguide.ai/jp/techniques/fewshot</div>
</div>

<div class="cardrow" style="margin-top:10px;">
<div class="pcard" style="background:#EAF2FB; border-color:#bcd4ee;">
<div style="font-weight:800; margin-bottom:6px;">Google検索的 (単語)</div>
これは素晴らしい! 感情?
</div>
<div class="pcard" style="background:#E9F5EC; border-color:#bfe0c8;">
<div style="font-weight:800; margin-bottom:6px;">Zero-shot</div>
「これは素晴らしい!」と 書いた書き手の感情を教えて下さい
</div>
<div class="pcard" style="background:#FBE9EC; border-color:#eecad1;">
<div style="font-weight:800; margin-bottom:6px;">Few-shot</div>
あの映画は最高だった!<br>&gt;ポジティブ<br>これは酷い! &gt;ネガティブ<br>「これは素晴らしい!」&gt;?
</div>
</div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:10px;">
<div style="flex:1.4;">
<div style="font-weight:800;">スキーマ ：</div>
回答してほしいことをすべて構造化し、回答形式として指定する。<br><b>※Few-shotを組み合わせ、回答を例示する</b>
</div>
<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark);">例)</div>
<div class="pcard" style="background:#FCF6E3; border-color:#ecdfae; margin-top:4px;">
<b>授業のタイトル：</b><br>　目的：<br>　到達目標：<br>　宿題の案：
</div>
</div>
</div>

<!--
- Few-shotは入力例と出力例のデモを与える技法。Google検索的な単語、Zero-shot（例なし指示）、Few-shot（例つき）の3段階で精度が上がる。
- スキーマは回答形式を構造化して指定する。Few-shotと組み合わせて回答例まで示すと安定する。
-->

---

<div class="page-title">複雑な処理を行う時のコツ</div>

# 複雑な処理を行う時のコツ

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:4px;">

<div style="flex:1;">
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-3　簡易プロンプト</div>
<div class="stepbox" style="margin:0 0 14px; padding:8px 18px;">
<div class="st" style="font-size:22px; margin:4px 0;"><b>Request</b> (依頼) を出す</div>
<div class="st" style="font-size:22px; margin:4px 0;"><b>Role</b> (役割) を決める</div>
<div class="st" style="font-size:22px; margin:4px 0;"><b>Regulation</b> (形式) を指定する</div>
</div>
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-5　詳細プロンプト</div>
<div class="stepbox" style="margin:0; padding:8px 18px;">
<div class="st" style="font-size:21px; margin:3px 0;"><b>Request</b> (依頼) を出す</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Role</b> (役割) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Regulation</b> (形式) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Rule</b> (ルール) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Review &amp; Refine</b> (詳細・改善) を求める</div>
</div>
</div>

<div style="flex:1.15;">
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-1　プロンプト上手になるための7つのポイント</div>
<table style="width:100%; border-collapse:collapse; font-size:20px; line-height:1.4;">
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">① 明確な質問</td><td style="padding:3px 0;">曖昧な質問でなく明確な質問をすることで、より良い回答が得られます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">② 具体性</td><td style="padding:3px 0;">トピックや要求に具体的な詳細を提供することで、適切な回答を引き出すことができます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">③ プロンプトの構造</td><td style="padding:3px 0;">質問を構造化して、抜け・漏れをなくします。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">④ 文脈の提供</td><td style="padding:3px 0;">重要な文脈や背景情報を提供します。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑤ 複数の質問</td><td style="padding:3px 0;">必要に応じて、複数の質問を連続して投げます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑥ ステップバイステップ指示</td><td style="padding:3px 0;">段階的に考えさせます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑦ 校正とフィードバック</td><td style="padding:3px 0;">得られた結果を評価し、精度向上を促します。</td></tr>
</table>
</div>

</div>

<div class="cite">『ChatGPT時代の文系AI人材になる』| 野口 竜司（東洋経済新報社 2023）</div>

<div class="box-accent" style="margin-top:6px; text-align:center; font-weight:800; margin-right:calc(var(--pip-w) + 56px);">困ったら、生成AIと一緒にプロンプトを作ろう</div>

<!--
- 複雑な処理は、依頼(Request)・役割(Role)・形式(Regulation)を基本に、ルールやReview & Refineを足して詳細化する。
- 7つのポイント（明確さ・具体性・構造・文脈・複数質問・段階指示・校正）も意識。困ったら生成AIにプロンプト自体を作らせるのが早い。
-->

---

<div class="page-title">大学のGeminiのメリット</div>

# 大学のGeminiのメリット

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.05;">
<div class="box-accent" style="font-weight:800;">① 入力が学習されない！<br><span style="font-weight:400; font-size:21px;">(オプトアウト済)　※大学版のCopilotも同様</span></div>
<div class="box-accent" style="font-weight:800; margin-top:10px;">② 学習向けのチューニング<br><span style="font-weight:400; font-size:21px;">(商用版よりは依存しにくい)　※名前を呼んだり馴れ馴れしくない</span></div>
<div class="box-accent" style="font-weight:800; margin-top:10px;">③ Google WSと連携できる<br><span style="font-weight:400; font-size:21px;">(@マークで読み込み簡単)</span></div>
</div>

<div style="flex:1;">
<div class="box-info" style="line-height:1.55;">以下に対処する意図でチューニングされている
<div style="margin-top:4px;">・AIへの過依存（答えを全部もらう）</div>
<div>・認知的オフロード（自分で考えなくなる）</div>
<div>・受動的学習（情報を受け取るだけ）</div>
</div>
<div style="margin-top:12px; display:flex; gap:14px; font-size:22px;">
<div style="flex:1; text-align:center;"><div style="font-weight:800;">作業自動化</div></div>
<div style="flex:1; text-align:center;"><div style="font-weight:800;">返信案の作成</div></div>
</div>
</div>

</div>

<div class="box-accent" style="margin-top:10px; text-align:center; margin-right:calc(var(--pip-w) + 56px);">大学版は、個人購入版よりも安心が大きいのと連携がウリ</div>

<!--
- 大学版Geminiの3つのメリット。①入力が学習されない（オプトアウト済）、②学習向けにチューニング（過依存しにくい）、③Google Workspaceと@で簡単連携。
- AIへの過依存・認知的オフロード・受動的学習に対処する設計。個人購入版より安心と連携が強み。
-->

---

<div class="page-title">Geminiで出来る色々</div>

# Geminiで出来る色々

<div style="display:flex; gap:16px; align-items:flex-start; margin-top:4px;">

<div style="flex:1;">
<div class="callout-blue" style="font-weight:800;">スライドの作成・修正</div>
<div class="callout-blue" style="font-weight:800; margin-top:8px;">プログラムの対話的作成</div>
<div class="callout-blue" style="font-weight:800; margin-top:8px;">絵・音声の文字起こし</div>
</div>

<div style="flex:1.5; text-align:center;">
<div style="font-weight:800; margin-bottom:6px;">絵/漫画の出力 ・ 図の修正</div>
<div style="display:flex; gap:10px; justify-content:center;">
<img src="./src/fig19a-aurora-crop.png" alt="生成画像：オーロラと旅客機" style="height:175px; border-radius:6px;">
<img src="./src/fig19b-chem-crop.png" alt="生成画像：化学実験の漫画" style="height:175px; border-radius:6px;">
</div>
<div style="margin-top:8px; display:flex; gap:10px; justify-content:center;">
<div class="callout-pink" style="font-weight:800; flex:1;">授業の解説や問題の作成</div>
<div class="callout-pink" style="font-weight:800; flex:1;">暗記の支援</div>
</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; text-align:center; margin-bottom:6px;">曲/動画の作成</div>
<div class="box-accent" style="padding:8px 16px; font-size:21px; line-height:1.7;">
検索(DeepResearch)<br>スプレッドシートの分析<br>カレンダー/ToDo書込<br>業務支援ワークフロー
</div>
</div>

</div>

<div class="box-accent" style="margin-top:12px; text-align:center; font-weight:800; margin-right:calc(var(--pip-w) + 56px);">大学全体で共有 → 授業や職務で活用しやすい / 研修も実施</div>

<!--
- Geminiでできることは幅広い。スライド作成・修正、対話的なプログラム作成、絵/漫画の出力や図の修正、曲/動画の作成、文字起こし。
- 授業の解説・問題作成、暗記支援、DeepResearch検索、スプレッドシート分析、カレンダー/ToDo書込、業務ワークフローまで。大学全体で共有し研修も実施。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns: 130px 1fr; gap:14px 20px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:6px;">目的</div>
<div class="box-accent" style="font-weight:800;">Session 1：<br><span style="margin-left:1.2em;">プロンプティングのコツと生成AIの基礎を知る！</span></div>

<div style="font-size:30px; font-weight:800; line-height:1.3; padding-top:6px;">目標<br><span style="font-size:24px;">＋まとめ</span></div>
<div class="box-info" style="line-height:1.5;">
<div style="font-weight:800;">AI/生成AIとは何かを理解する</div>
<div style="margin-left:1em;">次のトークンを予測する仕組み</div>
<div style="margin-left:1em;">繰り返しの推論やツール/情報を接続して性能向上</div>
<div style="font-weight:800; margin-top:6px;">プロンプティングのコツを知る</div>
<div style="margin-left:1em;">7R法/Few shot/スキーマ利用</div>
<div style="margin-left:1em;">困ったら生成AIに書かせる</div>
<div style="font-weight:800; margin-top:6px;">千葉大学のGeminiの機能と利点を知る</div>
<div style="margin-left:1em;">オプトアウト、学習にむけた最適化、WSとの連携</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は「プロンプティングのコツと生成AIの基礎を知る」。
- 目標とまとめ：①AI/生成AIの仕組み（次トークン予測・繰り返し推論・ツール接続）、②プロンプトのコツ（7R法・Few shot・スキーマ・困ったらAIに書かせる）、③千葉大Geminiの機能と利点（オプトアウト・最適化・WS連携）。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:24px;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:22px; margin:4px 0 14px;">30-min sessions</div>

<div class="box-accent" style="max-width:880px; margin:0 auto; font-weight:800; font-size:28px;">Session 2：<br><span style="margin-left:1.2em;">Geminiの機能を最大限使いこなしてみる</span></div>

<div style="text-align:center; font-size:24px; margin-top:20px;">国際未来教育基幹 田川 翔</div>

<!--
- セッション区切り（中扉）。ここから Session 2：Geminiの機能を最大限使いこなしてみる。30分のハンズオンに入る。
-->

---

<div class="page-title">本日のワークの中身</div>

# 本日のワークの中身

<div style="font-size:21px; margin-bottom:4px;">まずは、Geminiに詳しくなりたい人向け　<span class="tag tag-soft" style="font-size:20px;">初級編：Geminiを使い倒す</span>　／　定型作業・マニュアルを自動化したい人向け　<span class="tag tag-accent" style="font-size:20px;">中級編：Gemsを作ってみる</span></div>

<div style="display:grid; grid-template-columns: 150px 1fr; gap:10px 14px; align-items:stretch; margin-top:6px;">

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 1<br>仲間を作る！</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">
<div><b>会場：</b> まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に<b>自己紹介</b>を(チーム内で別々を選んでもOK)</div>
<div style="margin-top:4px;"><b>zoom：</b> <b>原則1人</b>でAIと実施です。但し、Breakoutを作ります。関心があれば、2-3人で散らばってみて下さい。</div>
</div>

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 2<br>手順書で実践</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">各自、<b>実践してみる</b>。困ったら自己紹介した人に聞いてみて下さい。進行は、<b>一人も協力もOKです。</b>講師/スタッフへの質問もOKです。進行すると共に、Spreadsheetを順次、埋めて下さい。</div>

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 3<br>評価・反省</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">気づいたことを、グループまたは個人でまとめて、<b>slido</b>に記入する。※グループになったところは、まずはメンバーで話してみましょう。※他の人の作品を試してみて、気付きを得るのも良い。</div>

</div>

<div class="cite pip-safe" style="margin-top:6px;">※slido/ワークへの入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<!--
- ワークは3フェーズ。Phase 1で仲間づくり（会場はペア/3人で自己紹介、zoomは原則1人）。
- Phase 2は手順書で実践しSpreadsheetを埋める。Phase 3で気づきをまとめてslidoに記入。初級＝Geminiを使い倒す、中級＝Gemsを作る。
-->

---

<div class="page-title">ワーク① Geminiの機能を使う</div>

# ワーク① Geminiの機能を使う

<div class="box-warn" style="margin-top:4px;"><b>手順書にしたがって、Geminiの機能を使ってみよう (標準 20分)</b></div>

<div style="font-size:22px; margin:8px 0 4px;">手順書内にプロンプトがあるので、それぞれやってみましょう。</div>

<div style="display:grid; grid-template-columns: 1fr 200px; gap:6px 16px; align-items:center; margin-top:4px; font-size:23px;">
<div><b>① Google カレンダーに予定を立てる。読み込む。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">アプリ連携</div>
<div><b>② 概念を暗記するための4択問題を5個作ってみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">ガイド付き学習</div>
<div><b>③ AIリテラシーの歌(30秒)を作ってみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Lyria 3</div>
<div><b>④ Webを検索してみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Ground機能</div>
<div><b>⑤ 文章を翻訳させたり、Geminiと共同編集してみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Canvas機能</div>
<div><b>⑥ 問題の解説をさせてみる</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">マルチモーダル機能</div>
<div><b>⑦ 英語と日本語まじりで会話してみる(スマホアプリ版必要)</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Live機能</div>
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:21px;">やったことある分は、～(使ってる！)と書いてとばしましょう。1項目終わるごとに、ここに◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。完了した人は、応用のワーク2に取り組んでみましょう。</div>

<!--
- ワーク①は手順書に沿って20分でGeminiの機能を一通り試す。①カレンダー連携、②4択問題作成、③AIリテラシーの歌(Lyria 3)、④Web検索(Ground)。
- ⑤翻訳・共同編集(Canvas)、⑥問題解説(マルチモーダル)、⑦英日まじり会話(Live)。済みは飛ばし、各項目を◯△✗で評価。終わったらワーク2へ。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns: 130px 1fr; gap:24px 20px; align-items:start; margin-top:14px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="font-weight:800; font-size:27px;">Session 2：<br><span style="margin-left:1.2em;">Geminiの機能を最大限使いこなしてみる</span></div>

<div style="font-size:30px; font-weight:800; line-height:1.3; padding-top:8px;">目標<br><span style="font-size:24px;">＋まとめ</span></div>
<div class="box-info" style="font-size:26px; line-height:1.7;">
<div>・半構造化データから役立つ情報を引き出せた</div>
<div>・構造化データの近未来の分析を体験できた</div>
</div>

</div>

<!--
- Session 2の振り返り。目的は「Geminiの機能を最大限使いこなしてみる」。
- 目標とまとめ：半構造化データから役立つ情報を引き出せた／構造化データの近未来の分析を体験できた。
-->
