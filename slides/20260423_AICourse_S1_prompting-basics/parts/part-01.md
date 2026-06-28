<div class="page-title">プロンプトとは？</div>

# プロンプトとは？

<div class="box-accent" style="margin-top:6px;">
<b>プロンプト：</b> 生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと
</div>

<div style="display:flex; gap:16px; margin-top:12px;">
<div class="box-info" style="flex:1;"><b>ユーザープロンプト：</b><br>一般的に想像されるプロンプト</div>
<div class="box-info" style="flex:1;"><b>システムプロンプト：</b><br>AI/Agentの振る舞いを決めるプロンプト</div>
</div>

<div style="margin-top:14px; font-size:23px; line-height:1.55;">
<b>プロンプトエンジニアリング：</b>生成AIから望ましい出力を確実に生み出すプロンプトを発見する過程のこと<br>
<b>コンテキスト：</b>プロンプトの意図を正確に理解し、適切な返答を返すために利用する付加情報<br>
<b>コンテキストエンジニアリング：</b>生成AIに読み込ませる中身を選択し、正確で関連性の高い出力を生成できるよう、タスクに必要な背景情報や前提条件（コンテキスト）を整理・最適化すること
</div>

<div class="box-accent pip-safe" style="margin-top:14px;"><b>良いプロンプト・コンテキスト</b>を入れれば、AIがより精度の高い情報を戻すようになる<br><span style="font-size:20px;">※一昔前のCoT指示・誘導などは不要。</span></div>

<div class="cite pip-safe">Phoenix &amp; Tayler／田村・大野監訳『生成AIのプロンプトエンジニアリング』O'REILLY 2025</div>

<!-- プロンプトは、AIにタスク生成を促す自然言語の文章。ユーザープロンプトとシステムプロンプトがある。良いプロンプト・コンテキストを入れれば精度が上がる。一昔前のCoT指示・誘導はもう不要。 -->

---

<div class="page-title">プロンプトの構成例</div>

# プロンプトの構成例

<div class="box-accent" style="margin-top:4px;"><b>テンプレと注意点を覚えたあとは、試行錯誤が一番大切</b></div>

<div class="box-info" style="margin-top:10px;"><b>簡潔に</b>、<b>十分に</b>、<b>具体的に</b>、4要素（ペルソナ・タスク・背景情報・形式）を記入<br>▶ <b>Google プロンプト初級ガイド を修正</b>（参照日：2026/04/23）</div>

<div style="display:flex; gap:16px; margin-top:12px; align-items:flex-start;">

<div style="flex:1.15;">
<div class="exrow"><div class="exn"></div><div>ディレクションを示す</div></div>
<div class="exrow"><div class="exn"></div><div>出力形式を指定する</div></div>
<div class="exrow"><div class="exn"></div><div>例を示す</div></div>
<div class="exrow"><div class="exn"></div><div>品質を評価する</div></div>
<div class="exrow"><div class="exn"></div><div>タスクを分割する</div></div>
</div>

<div style="flex:1.6;">

<div class="pcard"><div class="pc-h">システムプロンプト</div>
<ul>
<li><b>自然な表現を使い、話すような完全な文章で</b></li>
<li><b>具体的かつ反復的に（多くの背景情報）</b></li>
<li><b>簡潔に記述して、複雑にならない（矛盾注意）</b></li>
</ul>
</div>

<div class="pcard" style="margin-top:10px;"><div class="pc-h">ユーザープロンプト</div>
<ul>
<li><b>会話しながらプロンプトを改善する</b></li>
<li><b>Geminiとプロンプトを作る</b></li>
<li><b>自分でつくったドキュメントをソースにする</b></li>
</ul>
</div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:10px;"><b>例）</b>あなたは大学院生のグラントを読んでアドバイスするチューターです。学振のDCの書類を書く上でのアドバイスをインターネット上の採択者の経験談を参照し説明してください。2文程度で挨拶のあと、箇条書きで出力してください。</div>

<div class="cite pip-safe">Phoenix &amp; Tayler／田村・大野監訳『生成AIのプロンプトエンジニアリング』O'REILLY 2025</div>

<!-- 4要素（ペルソナ・タスク・背景情報・形式）を簡潔に十分に具体的に。Googleの初級ガイドを修正したもの。システム／ユーザープロンプトそれぞれにコツがある。テンプレを覚えたら試行錯誤が一番大切。 -->

---

<div class="page-title">プロンプトのコツ</div>

# プロンプトのコツ

<div class="stepbox"><div class="st"><b>① 例：Few-shotを利用する</b></div>
<div style="font-size:22px; line-height:1.5;">プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法<br>※ コンテキスト内学習（与えた文章から、生成AIがタスクの結果を生成できる能力）に由来</div></div>

<div style="display:flex; gap:14px; margin-top:8px; align-items:stretch;">
<div class="pcard"><div class="pc-h">Zero-shot</div>
<p style="font-size:21px;">Google検索的（単語）<br>これは素晴らしい! 感情?</p>
<p style="font-size:21px;">「これは素晴らしい!」と書いた書き手の感情を教えて下さい</p></div>
<div class="pcard"><div class="pc-h">Few-shot</div>
<p style="font-size:21px;">あの映画は最高だった! ＞ポジティブ<br>これは酷い! ＞ネガティブ<br>「これは素晴らしい!」＞?</p></div>
</div>

<div class="stepbox" style="margin-top:10px;"><div class="st"><b>② 出力形式：回答をスキーマに沿って出力させる</b></div>
<div style="font-size:22px;">回答してほしいことをすべて構造化し、回答形式として指定する。<b>※Few-shotを組み合わせ、回答を例示する</b></div></div>

<div class="box-info" style="position:absolute; right:48px; top:430px; width:300px;"><b>例)</b><br>授業のタイトル：<br>　目的：<br>　到達目標：<br>　宿題の案：</div>

<div class="stepbox pip-safe" style="margin-top:10px;"><div class="st"><b>③ コンテキストを十分に与える</b></div></div>

<div class="box-accent pip-safe" style="margin-top:8px;"><b>slido</b>　さらに学びたい方へ：Google プロンプト設計戦略 など</div>

<!-- コツ3つ。①Few-shotで入力例・出力例を見せる（コンテキスト内学習に由来）。②回答をスキーマに沿って構造化して出させる。③コンテキストを十分に与える。さらに学びたい人はGoogleのプロンプト設計戦略を。 -->

---

<div class="page-title">大学のGeminiのメリット</div>

# 大学のGeminiのメリット

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.1;">

<div class="box-accent"><b>① 入力が学習されない！</b><br>（オプトアウト済）<br><span style="font-size:20px;">※大学版のCopilotも同様</span></div>

<div class="box-accent" style="margin-top:10px;"><b>② 学習向けのチューニング</b><br>（商用版よりは依存しにくい）<br><span style="font-size:20px;">※名前を呼んだり馴れ馴れしくない</span></div>

<div class="box-accent" style="margin-top:10px;"><b>③ Google WSと連携できる</b><br>（@マークで読み込み簡単）</div>

</div>

<div style="flex:1.2;">

<img src="./src/fig16a-gemini-privacy.png" alt="Geminiのデータ取り扱い説明" style="width:100%; border:1px solid #ddd; border-radius:6px;">

<div class="box-info" style="margin-top:12px;">以下に対処する意図でチューニングされている<br>・AIへの過依存（答えを全部もらう）<br>・認知的オフロード（自分で考えなくなる）<br>・受動的学習（情報を受け取るだけ）</div>

</div>

</div>

<div class="box-accent pip-safe" style="margin-top:12px;">大学版は、個人購入版よりも安心が大きいのと連携がウリ</div>

<!-- 大学版Geminiの3つのメリット。①入力が学習されない（オプトアウト済、Copilotも同様）。②学習向けチューニング（過依存・認知的オフロード・受動的学習に対処）。③Google Workspaceと連携できる（@で簡単読み込み）。 -->

---

<div class="page-title">Geminiで出来る色々</div>

# Geminiで出来る色々

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">スライドの作成・修正</div>
<img src="./src/fig17a-slides.png" alt="スライド作成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:8px; font-size:22px; text-align:left;">プログラムの対話的作成</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">絵/漫画の出力・図の修正</div>
<img src="./src/fig17b-aurora.png" alt="風景写真生成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:8px; font-size:22px; text-align:left;">授業の解説や問題の作成<br>暗記の支援</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">曲/動画の作成</div>
<img src="./src/fig17c-manga.png" alt="漫画生成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:8px; font-size:22px; text-align:left;">検索(DeepResearch)<br>スプレッドシートの分析</div>
</div>

</div>

<div style="display:flex; gap:30px; margin-top:10px; font-size:22px;">
<div>絵・音声の文字起こし</div>
<div>カレンダー/ToDo書込</div>
<div>業務支援ワークフロー</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px;">大学全体で共有 → 授業や職務で活用しやすい / 研修も実施</div>

<!-- Geminiで出来ること多数。スライド作成・修正、絵/漫画の出力・図の修正、曲/動画の作成、検索(DeepResearch)、スプレッドシート分析、絵・音声の文字起こし、カレンダー/ToDo書込、業務支援ワークフローなど。大学全体で共有して活用しやすい。 -->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 110px; padding-top:14px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">目的</div>
<div style="font-size:28px; font-weight:800; color:var(--accent-dark); margin-top:140px; line-height:1.3;">目標<br>＋<br>まとめ</div>
</div>

<div style="flex:1;">

<div class="box-accent"><b>Session 1：</b><br>プロンプティングのコツと生成AIの基礎を知る！</div>

<div style="margin-top:14px; font-size:24px; line-height:1.55;">
<b>・AI/生成AIとは何かを理解する</b>
<div style="margin-left:1.3em; font-size:22px;">次のトークンを予測する仕組み<br>繰り返しの推論やツール/情報を接続して性能向上</div>

<b>・プロンプティングのコツを知る</b>
<div style="margin-left:1.3em; font-size:22px;">7R法/Few shot/スキーマ利用<br>困ったら生成AIに書かせる</div>

<b>・千葉大学のGeminiの機能と利点を知る</b>
<div style="margin-left:1.3em; font-size:22px;">オプトアウト、学習にむけた最適化、WSとの連携</div>
</div>

</div>

</div>

<!-- Session 1の振り返り。目的はプロンプティングのコツと生成AIの基礎を知ること。目標とまとめ：①AI/生成AIの仕組み（次トークン予測・推論やツール接続）、②プロンプティングのコツ（7R法・Few shot・スキーマ・困ったらAIに書かせる）、③千葉大Geminiの利点（オプトアウト・最適化・WS連携）。 -->

---

<!-- _class: divider -->

<div class="title-hero" style="text-align:center;">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-size:26px; margin-top:8px;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="text-align:center; color:var(--accent-dark); font-size:23px; margin-top:4px;">30-min sessions</div>

<div class="box-accent" style="max-width:760px; margin:18px auto 0;"><b>Session 2：</b><br>　　Geminiの機能を最大限使いこなしてみる</div>

<div style="text-align:center; font-size:22px; margin-top:22px;">国際未来教育基幹 田川 翔</div>

<!-- セッション2へ。30分構成。Session 2のテーマは「Geminiの機能を最大限使いこなしてみる」。 -->

---

<div class="page-title">本日のワークの中身</div>

# 本日のワークの中身

<div style="display:flex; gap:14px; align-items:flex-start;">

<div style="flex:0 0 150px;">
<div class="stepbox" style="background:var(--accent-soft);"><b>Phase 1</b><br>仲間を作る！</div>
<div class="stepbox" style="margin-top:60px; background:var(--accent-soft);"><b>Phase 2</b><br>手順書で実践</div>
<div class="stepbox" style="margin-top:60px; background:var(--accent-soft);"><b>Phase 3</b><br>評価・反省</div>
</div>

<div style="flex:1;">

<div style="font-size:22px; line-height:1.5;">まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に<b>自己紹介</b>を（チーム内で別々を選んでもOK）</div>

<div class="box-info" style="margin-top:6px;"><b>会場：</b>まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に自己紹介を（チーム内で別々を選んでもOK）<br><b>zoom：</b>原則1人でAIと実施です。但し、Breakoutを作ります。関心があれば、2-3人で散らばってみて下さい。</div>

<div class="box-accent" style="margin-top:8px;"><b>どっちか：</b>　初級編：Geminiを使い倒す（まずは、Geminiに詳しくなりたい人向け）　／　中級編：学びでの使用を考える（ちょっと踏み込んでみたい人むけ）</div>

<div class="box-info" style="margin-top:8px;">各自、<b>実践してみる</b>。<b>一人も協力もOKです。</b>困ったら仲間・講師へ質問を。進行すると共に、Spreadsheetのワークを順次、埋めて下さい。全員でどこが使えるか書き出してみましょう！</div>

<div class="box-info" style="margin-top:8px;">気づいたことを、グループまたは個人でまとめて、<b>slido</b>に記入する。<br>※グループになったところは、まずはメンバーで話してみましょう。</div>

</div>

</div>

<div class="cite pip-safe">※ slido/ワーク教材への入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</div>

<!-- 本日のワークは3フェーズ。Phase1：仲間を作る（自己紹介3分。会場はペア・3人、zoomは原則1人だがBreakoutあり）。Phase2：手順書で実践（初級＝Geminiを使い倒す／中級＝学びでの使用を考える、どちらか）。Phase3：評価・反省（Spreadsheetを埋め、気づきをslidoに記入）。 -->

---

<div class="page-title">ワーク Geminiの機能を使う</div>

# ワーク　Geminiの機能を使う　<span class="tag tag-soft" style="font-size:22px;">初級編</span>

<div class="box-accent" style="margin-top:4px;"><b>手順書に従って、Geminiの機能を使ってみよう（標準 20分）</b></div>

<div style="display:flex; gap:18px; margin-top:10px; align-items:flex-start;">

<div style="flex:1.5; font-size:23px; line-height:1.7;">
<b>① Google カレンダーに予定を立てる。読み込む。</b><br>
<b>② 概念を暗記するための4択問題を5個作ってみる。</b><br>
<b>③ AIリテラシーの歌(30秒)を作ってみる。</b><br>
<b>④ Webを検索してみる。</b><br>
<b>⑤ 文章を翻訳させる。</b><br>
<b>⑥ 文章を一緒に編集してみる。</b><br>
<b>⑦ 音声を書き起こさせる。</b><br>
<b>⑧ 文字を書き起こさせる。</b>
</div>

<div style="flex:0 0 230px; font-size:22px; line-height:1.9; color:var(--accent-dark);">
アプリ連携<br>
ガイド付き学習<br>
Lyria 3<br>
Ground機能<br>
Canvas機能<br>
マルチモーダル機能
</div>

</div>

<div style="margin-top:6px; font-size:22px;">手順書内にプロンプト・資料があります。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info pip-safe" style="margin-top:8px;">終わったらここに<b>評価・感想</b>を記入してください。使っている場合は、〜と書いてとばしましょう。1項目終わるごとに、◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。精度が悪い時には、モードをProに上げてみましょう。動かない場合は、教えて下さい。</div>

<!-- 初級編ワーク（標準20分）。手順書に従い①カレンダー②4択問題③AIリテラシーの歌④Web検索⑤翻訳⑥文章編集⑦音声書き起こし⑧文字書き起こし。アプリ連携・ガイド付き学習・Lyria 3・Ground・Canvas・マルチモーダルなどの機能。どこからでもOK。終わったら評価・感想を記入。 -->

---

<div class="page-title">ワーク Geminiの機能を使う</div>

# ワーク　Geminiの機能を使う　<span class="tag tag-soft" style="font-size:22px;">中級編</span>

<div class="box-accent" style="margin-top:4px;"><b>学びでの使用をためしてみよう（標準 20分）</b></div>

<div style="display:flex; gap:18px; margin-top:12px; align-items:flex-start;">

<div style="flex:1.6;">

<div class="stepbox"><div class="st"><b>① 問題の解説をさせてみる</b></div></div>

<div class="stepbox" style="margin-top:10px;"><div class="st"><b>② Geminiアプリで外国語を練習してみる</b></div>
<div style="font-size:21px;">※ロールプレイなどもぜひ。 ※スマホでのインストール必須</div></div>

<div class="stepbox" style="margin-top:10px;"><div class="st"><b>③ 自分の分野について学べる学習ゲームをつくってみる</b></div>
<div style="font-size:21px;">※アイデア出しもぜひ ※Proモードでの実施必須</div></div>

</div>

<div style="flex:0 0 220px; font-size:22px; line-height:1.9; color:var(--accent-dark);">
マルチモーダル機能<br>
Live機能<br>
Canvas機能
</div>

</div>

<div style="margin-top:8px; font-size:22px;">中級編は、ご自身で1テーマです（手順書なし）。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info pip-safe" style="margin-top:8px;">終わったらここに<b>評価・感想・実施したシナリオ</b>を記入してください。使っている場合は、〜と書いてとばしましょう。1項目終わるごとに、◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。精度が悪い時には、モードをProに上げてみましょう。動かない場合は、教えて下さい。</div>

<!-- 中級編ワーク（標準20分）。学びでの使用を試す。①問題の解説②Geminiアプリで外国語練習（ロールプレイも、スマホ必須）③自分の分野の学習ゲーム作成（Proモード必須）。マルチモーダル・Live・Canvas機能。手順書なしで1テーマ。終わったら評価・感想・シナリオを記入。 -->

---

<div class="page-title">ワークで行うこと</div>

# ワークで行うこと

<div class="box-accent" style="margin-top:6px; font-size:26px;"><b>ワークテーマ：みんなでGeminiを使い倒して、どこが使えるか把握しよう！</b></div>

<div style="font-size:24px; margin-top:12px;"><b>手順書内にプロンプト・資料があります</b>。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info" style="margin-top:12px;"><b>進め方：</b><br><b>一人も協力もOKです。</b>困ったら仲間・講師へ質問を。<br>終わったら、Spreadsheetのワークを順次、埋めて下さい。<br>全員でどこが使えるか書き出してみましょう！</div>

<div class="box-warn" style="margin-top:12px;"><b>Zoomでいま来た方へ：</b>もしグループで進行されたい場合は<b>ブレークアウト</b>でどこかに参加してみてください。ルーム選択を解放しています。<br><span style="font-size:21px;">※グループは自由参加・自由解散・移動も自由</span></div>

<div class="box-accent pip-safe" style="margin-top:12px;"><b>質問がある場合：会場・オンラインとも → slidoのQ&amp;Aに投稿してください</b></div>

<!-- ワークで行うこと。テーマは「みんなでGeminiを使い倒して、どこが使えるか把握しよう」。手順書のプロンプト・資料を使い、どこからでも。一人でも協力でもOK、困ったら質問を。Spreadsheetを埋める。Zoomで遅れて来た人はブレークアウトへ。質問はslidoのQ&Aへ。 -->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 110px; padding-top:14px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">目的</div>
<div style="font-size:28px; font-weight:800; color:var(--accent-dark); margin-top:130px; line-height:1.3;">目標<br>＋<br>まとめ</div>
</div>

<div style="flex:1;">

<div class="box-accent"><b>Session 2：</b><br>　Geminiの機能を最大限使いこなしてみる</div>

<div style="margin-top:90px;">
<div class="box-info" style="font-size:26px;">
・半構造化データから役立つ情報を引き出せた<br>
・<u>構造化データ</u>の近未来の分析を体験できた
</div>
</div>

</div>

</div>

<!-- Session 2の振り返り。目的はGeminiの機能を最大限使いこなしてみること。目標とまとめ：半構造化データから役立つ情報を引き出せた、構造化データの近未来の分析を体験できた。 -->
