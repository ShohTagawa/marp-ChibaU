<div class="page-title">プロンプトとは</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-accent" style="margin-top:6px;"><b>プロンプト：</b><br>生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</div>

<div style="text-align:center; font-size:40px; font-weight:800; color:#444; margin:26px 0;">吾輩は___???</div>

</div>
<img src="./src/fig37-img.png" alt="ロボットのイラスト" style="flex:0 0 240px; width:240px; align-self:center;">
</div>

<div class="box-info" style="margin-top:8px;"><b>プロンプトエンジニアリング：</b><br>生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること (NRI 用語集)</div>

<div class="box-info pip-safe" style="margin-top:14px;"><b>コンテキスト内学習：</b><br>プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</div>

<!--
- プロンプトとは、生成AIに実行すべきタスクの生成を促す、自然言語による文章のこと。「吾輩は」と入れると、次に来る言葉を予測してくれます。
- 望ましい出力を得るために指示を設計・最適化するのがプロンプトエンジニアリング。プロンプトに与えた文章からタスクの結果を生成できるようになることをコンテキスト内学習と呼びます。
-->

---

<div class="page-title">創発とコンテキスト内学習</div>

<div class="box-accent" style="margin-top:4px;">具体的に教えていないのに、<b>モデルを大規模化すると</b><b>プロンプトの指示でタスクを解けるようになる</b>こと</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:12px;">

<div style="flex:0 0 56%;">
<img src="./src/fig38-emergence.png" alt="モデルサイズと正確性の創発グラフ" style="width:100%; border:1px solid #ddd;">
<div class="cite" style="text-align:center;">横軸：モデルサイズ　／　縦軸：正確性</div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin-top:0;">大規模言語モデルは、指示された問題の解き方は予め知らない</div>
<div class="box-warn pip-safe" style="margin-top:16px;"><b>しかし大きいLLMほど、プロンプトをもとに解決できる！</b></div>
</div>

</div>

<!--
- 創発とコンテキスト内学習。具体的に教えていないのに、モデルを大規模化するとプロンプトの指示でタスクを解けるようになる現象です。
- 大規模言語モデルは、指示された問題の解き方を予め知りません。しかし大きいLLMほど、プロンプトをもとに解決できるようになります。
-->

---

<div class="page-title">コンテキストウィンドウ</div>

<div class="box-info" style="margin-top:10px;"><b>AIには、同時に参照できる文字数・データ量の上限がある</b><br>コンテキストウィンドウ（記憶力）</div>

<div class="box-accent" style="margin-top:16px;"><b>この記憶力が大きいと、長いプロンプトを前提にAIと話せる</b><br>　→　「本1冊読み込んだ上で答えて」<br>　　　 「45分の動画を見たうえで答えて」</div>

<div class="box-warn pip-safe" style="margin-top:16px;"><b>場の空気を読みこんだAIを対話できる</b><br><b>読み込んだ資料を参考にするので、間違えにくい</b><br><b>「スライドに何をいれるか」で考えていることと同じ</b></div>

<!--
- コンテキストウィンドウ。AIには、同時に参照できる文字数・データ量の上限があります。これを記憶力と呼びます。
- この記憶力が大きいと、長いプロンプトを前提にAIと話せます。本1冊読み込んだ上で答えて、45分の動画を見たうえで答えて、といったことが可能になります。
- 場の空気を読みこんだAIと対話できる。読み込んだ資料を参考にするので間違えにくい。スライドに何を入れるかで考えていることと同じです。
-->

---

<div class="page-title">コンテキストの重要性</div>

# 昨今のAIは、<span style="color:var(--accent-dark)">何をコンテキストに入れるか勝負</span>になっている

<div class="flowrow" style="justify-content:center; gap:14px; margin-top:6px;">
<div style="display:flex; flex-direction:column; gap:6px;">
<div class="fbox blue" style="font-size:24px; padding:6px 22px;">前提情報A</div>
<div class="fbox blue" style="font-size:24px; padding:6px 22px;">前提情報B</div>
</div>
<div class="farrow">✕</div>
<div class="fbox gray" style="font-size:24px; padding:8px 22px;">詳細なプロンプト</div>
<div class="farrow">➡</div>
<div class="fbox red" style="font-size:24px; padding:8px 22px;">良い結果</div>
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">改善LOOP ↺</div>
</div>

<div class="box-warn" style="margin-top:12px; font-size:21px;"><b>※ 矛盾する前提情報が多くなると雑な回答になりがち</b><br><b>※ ベストなコンテキスト一覧のデザインを行う方法は、コンテキストエンジニアリングと言われている</b></div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:20px;"><b>参考：</b>AIに適切な情報を渡す手法には検索拡張生成（Retrieval-Augmented Generation）がある。ベストなコンテキストになるようなRAGアルゴリズムが必要 (RAGは断片を持ってきがち)。RAGを使用せずに、すべて本1冊コンテキストに入れれる情報では、後者の方の精度がとてもよい。</div>

<div class="takeaway pip-safe"><b>情報が繋がって、新しい価値ある情報を生む価値を作る</b></div>

<!--
- コンテキストの重要性。昨今のAIは、何をコンテキストに入れるか勝負になっています。前提情報A・Bと詳細なプロンプトを組み合わせ、改善LOOPを回して良い結果を出します。
- 矛盾する前提情報が多くなると雑な回答になりがち。ベストなコンテキスト一覧のデザインを行う方法は、コンテキストエンジニアリングと言われています。
- 参考として、検索拡張生成（RAG）という手法もありますが、本1冊すべてコンテキストに入れられる場合は後者の方が精度がとても良いです。
-->

---

<div class="page-title">コンテキストの重要性</div>

<img src="./src/fig41-context.png" alt="AIにとってコンテキストが重要な理由の図解" style="display:block; margin:6px auto 0; width:94%; max-height:600px; border:1px solid #ddd;">

<div style="text-align:center; font-size:26px; font-weight:800; color:var(--accent-dark); margin-top:8px;">小さいコンテキストでも、AIの回答の精度が上がる</div>

<!--
- 図解です。コンテキストなしだと曖昧さとエラーが生じますが、コンテキストを与えると周囲の状況や背景を踏まえ、理解と正確性が高まります。
- 小さいコンテキストでも、AIの回答の精度が上がります。
-->

---

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">コンテキストをもとに、情報を変換・深堀りする道具</span>

<img src="./src/fig42-notebooklm.png" alt="NotebookLMの画面（コンテキスト・質問・変換）" style="display:block; margin:10px auto 0; width:96%; max-height:520px; border:1px solid #ddd;">

<div style="display:flex; justify-content:space-around; margin-top:8px; font-size:26px; font-weight:800; color:#444;">
<div>コンテキスト</div>
<div>質問</div>
<div>変換</div>
</div>

<!--
- Google NotebookLMです。コンテキストをもとに、情報を変換・深堀りする道具です。
- 左にソース（コンテキスト）を入れ、中央で質問し、右で様々な形式に変換できます。
-->

---

<div class="page-title">Google NotebookLM</div>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<div class="subhead" style="font-size:24px;"><b>絵1枚で要約</b></div>
<img src="./src/fig43-timeline.png" alt="日本史早わかり年表" style="width:100%; border:1px solid #ddd;">
<div class="subhead" style="font-size:24px; margin-top:10px;"><b>クイズで時間確認</b></div>
<img src="./src/fig43-quiz.png" alt="クイズ画面" style="width:100%; border:1px solid #ddd;">
</div>

<div style="flex:1;">
<div class="subhead" style="font-size:24px;"><b>スライド作成</b></div>
<img src="./src/fig43-slide.png" alt="作成されたスライド" style="width:100%; border:1px solid #ddd;">
<div class="box-info" style="margin-top:12px; text-align:center;"><b>動画・podキャスト</b><br><b>(ソクラテスメソッド)</b></div>
<div style="font-size:26px; font-weight:800; color:#444; margin-top:10px;">質問・応答</div>
</div>

<div style="flex:0 0 200px; text-align:center;">
<img src="./src/fig43-pagoda.png" alt="五重塔の写真" style="width:100%; border:1px solid #ddd;">
</div>

</div>

<!--
- NotebookLMでできることです。絵1枚で要約、スライド作成、クイズで時間確認、動画・ポッドキャスト（ソクラテスメソッド）、そして質問・応答。
- ソースを入れるだけで、様々な情報モードに変換してくれます。
-->

---

<div class="page-title">NotebookLMの授業活用</div>

<div style="display:flex; gap:20px; align-items:flex-start;">

<img src="./src/fig44-classroom.png" alt="Google Classroomの画面" style="flex:0 0 36%; width:36%; border:1px solid #ddd;">

<div style="flex:1;">

<div class="box-accent" style="margin-top:0;"><b>クラスルームでの活用事例</b><br>授業全体の内容を質問し、思考・学びのパートナーとして提供</div>

<div class="box-info" style="margin-top:12px;"><b>作成したスライドやドキュメントをソースにアップロード</b></div>

<div class="stepbox" style="margin-top:12px;">
<div class="st">・使い方について10分ほどの動画を<b>受講学生に配布</b></div>
<div class="st">・クイズや精緻的質問で能動的に学び、様々な情報モードでの理解促進を狙う</div>
</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-top:10px;">▶ <b>知識との関わり方</b>を転換</div>

</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:21px;">自分は、禁止することを諦めました。<b>だったら、AIを使って、もっと遠くまで学ばせた方が良い。逆に公式に提供し、課題とテストの難易度を上げました。</b></div>

<!--
- NotebookLMの授業活用です。クラスルームでの活用事例として、授業全体の内容を質問し、思考・学びのパートナーとして提供しています。
- 作成したスライドやドキュメントをソースにアップロードし、使い方の10分ほどの動画を受講学生に配布。クイズや精緻的質問で能動的に学ばせ、知識との関わり方を転換します。
- 自分は禁止することを諦めました。だったら、AIを使ってもっと遠くまで学ばせた方が良い。逆に公式に提供し、課題とテストの難易度を上げました。
-->

---

<div class="page-title">プロンプト作成のコツ</div>

# プロンプトを作成する上での<span style="color:var(--accent-dark)">3つのコツ</span>

<div class="stepbox" style="margin-top:14px;">
<div class="st" style="font-size:30px;"><b>①十分なコンテキストを与える (ワーク1)</b></div>
<div class="st" style="font-size:30px;"><span class="em">②試行錯誤/サイクルの重要性を知る</span></div>
<div class="st" style="font-size:30px;"><b>③型を知る</b></div>
</div>

<div class="box-info" style="margin-top:16px;">特に、人に頼むときの<b>マニュアルをイメージ</b><br>　→ 頭から手順通りに説明する / 必要な情報を渡す</div>

<div class="box-info pip-safe" style="margin-top:12px;">プログラム経験がある人は、コードをイメージ<br>　→ 分岐や定義を作成していくイメージ</div>

<!--
- プロンプト作成のコツは3つ。①十分なコンテキストを与える、②試行錯誤・サイクルの重要性を知る、③型を知る。
- 特に、人に頼むときのマニュアルをイメージしてください。頭から手順通りに説明し、必要な情報を渡す。プログラム経験がある人は、分岐や定義を作るコードのイメージです。
-->

---

<div class="page-title">Few-shots・スキーマ</div>

<div class="box-accent" style="margin-top:4px; font-size:22px;"><b>Few-shot：例を渡す</b><br>プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法。コンテキスト内学習をGPTが出来るので、この処理が実現する</div>

<div style="display:flex; gap:14px; margin-top:12px; align-items:stretch;">

<div style="flex:1;">
<div style="font-size:22px; font-weight:800; margin-bottom:4px;">Google検索的 (単語)</div>
<div style="background:#EAF2FB; border:2px solid var(--tag-blue); border-radius:8px; padding:8px 12px; font-size:20px;">これは素晴らしい! 感情?</div>

<div style="font-size:22px; font-weight:800; margin:10px 0 4px;">Zero-shot</div>
<div style="background:#FBE4EA; border:2px solid var(--accent); border-radius:8px; padding:8px 12px; font-size:20px;">「これは素晴らしい!」と 書いた書き手の感情を教えて下さい</div>
</div>

<div style="flex:1;">
<div style="font-size:22px; font-weight:800; margin-bottom:4px;">Few-shot</div>
<div style="background:#FCEFDD; border:2px solid #E08A2B; border-radius:8px; padding:8px 12px; font-size:20px;">あの映画は最高だった!<br>　&gt;ポジティブ<br>これは酷い! &gt;ネガティブ<br>「これは素晴らしい!」&gt;?</div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin:0; font-size:20px;"><b>応用編スキーマ：回答の構造を渡す</b><br>回答してほしいことをすべて構造化し、回答形式として指定する。<br><b>※Few-shotを組み合わせ、回答を例示する</b></div>
<div style="background:var(--section-bg); border-radius:8px; padding:8px 12px; font-size:19px; margin-top:8px;"><b>例)</b> <b>授業のタイトル：</b><br>　目的：<br>　到達目標：<br>　宿題の案：</div>
</div>

</div>

<div class="cite pip-safe">Prompt Engineering Guide　https://www.promptingguide.ai/jp/techniques/fewshot</div>

<!--
- Few-shotは例を渡す技法です。プロンプト内に入力例と出力例のデモを提供し、より高性能な結果を得ます。GPTがコンテキスト内学習をできるので実現します。
- Google検索的な単語、Zero-shot、Few-shotと進めていくと精度が上がります。応用編のスキーマは回答の構造を渡す方法で、Few-shotと組み合わせて回答を例示します。
-->

---

<div class="page-title">　参考：もっと高度な出力</div>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1;">
<div class="callout-pink" style="font-size:24px;"><b>Structured Output（構造化出力）</b></div>
<div style="font-size:21px; margin-top:6px;"><b>定義:</b> LLMの出力を、事前に定義されたJSONスキーマなどの構造に沿って生成する技術。</div>
<div style="font-size:21px; margin-top:4px;"><b>利点:</b></div>
<ul style="font-size:20px; margin:2px 0 0 1.1em; line-height:1.5;">
<li>予測可能な出力形式で後続処理を容易に</li>
<li>スキーマに合致しない誤ったデータを自動で拒否</li>
<li>プロンプトを簡潔にし、LLMへの指示を削減</li>
</ul>
<div style="font-size:20px; margin-top:6px;"><b>簡単な例:</b> ユーザー情報抽出のためのJSONスキーマ</div>
<pre style="font-size:15px; background:#f4f6f9; border:1px solid #ddd; border-radius:6px; padding:8px; line-height:1.35; overflow:hidden;">{ "type": "object", "properties": {
  "name":  { "type": "string" },
  "email": { "type": "string", "format": "email" },
  "age":   { "type": "integer" } },
  "required": ["name", "email"] }</pre>
</div>

<div style="flex:1;">
<div class="callout-pink" style="font-size:24px;"><b>Function Calling（関数呼び出し）</b></div>
<div style="font-size:21px; margin-top:6px;"><b>定義:</b> LLMがユーザーの意図を解釈し、外部ツール（API）を呼び出し特定のアクションを実行する機能。</div>
<div style="font-size:21px; margin-top:4px;"><b>用途:</b></div>
<ul style="font-size:20px; margin:2px 0 0 1.1em; line-height:1.5;">
<li>レストラン予約やオンラインショッピングの注文処理</li>
<li>カレンダー管理など外部アプリとの連携</li>
<li>データ検索やアクション実行の自動化</li>
</ul>
<div style="font-size:20px; margin-top:6px;"><b>簡単な例:</b> レストラン予約のための関数呼び出し</div>
<pre style="font-size:15px; background:#f4f6f9; border:1px solid #ddd; border-radius:6px; padding:8px; line-height:1.35; overflow:hidden;">bookRestaurant(
  restaurant_name: string, date: string,
  time: string, party_size: integer,
  special_requests: string)</pre>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">AIの応答をより予測可能かつ信頼性の高いものに出来る。データの正確な処理と外部連携により、AI活用の幅が大きく広がる。</div>

<div class="cite pip-safe">https://platform.openai.com/docs/guides/structured-outputs</div>

<!--
- 参考として、もっと高度な出力を紹介します。Structured Outputは、LLMの出力を事前に定義したJSONスキーマなどの構造に沿って生成する技術です。予測可能な出力形式で後続処理を容易にし、誤ったデータを自動で拒否できます。
- Function Callingは、LLMがユーザーの意図を解釈し、外部ツールを呼び出して特定のアクションを実行する機能です。レストラン予約やカレンダー管理など外部アプリとの連携に使えます。
- これらにより、AIの応答をより予測可能かつ信頼性の高いものにでき、AI活用の幅が大きく広がります。
-->

---

<div class="page-title">メタプロンプト</div>

<div class="box-info" style="margin-top:14px;">タスクや課題の具体的な内容ではなく、その構造的および構文的な側面に焦点を当てるプロンプティング技術のこと。</div>

<div class="box-accent" style="margin-top:18px; text-align:center; font-size:26px;"><b>Structural template for how to think<br>rather than specific examples of what to think.</b><br><span class="cite" style="display:block; margin-top:4px;">Zhang et al. (2023) arXiv</span></div>

<div class="box-warn pip-safe" style="margin-top:18px;">こうなってくると、自分自身で一人でプロンプトを書くよりも、<b>生成AIとともにプロンプトを作成</b>した方がよくなりうる。</div>

<!--
- メタプロンプトです。タスクや課題の具体的な内容ではなく、その構造的および構文的な側面に焦点を当てるプロンプティング技術のこと。
- 「何を考えるかの具体例ではなく、どう考えるかの構造的なテンプレートを与える」ということです。
- こうなってくると、自分一人でプロンプトを書くよりも、生成AIとともにプロンプトを作成した方がよくなりうる、という段階に入っていきます。
-->
