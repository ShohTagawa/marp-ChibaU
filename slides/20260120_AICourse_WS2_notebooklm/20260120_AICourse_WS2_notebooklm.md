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

# 開始の前に

<div class="stepbox" style="margin-top:14px;">
<div class="st">① <b>PCを立ち上げ、お持ちの<br>　 千葉大学Google Workspaceにログインして下さい</b><br><span style="font-size:22px;">　 → 学校のGmailが立ち上がる状況ならOKです。</span></div>
<div class="st">② <b>インタラクションツール Slidoにアクセスして下さい</b><br><span style="font-size:22px;">　 URLを配布したり、質問やアンケートをとったりします<br>　 ※お名前などの個人情報の入力は禁止です</span></div>
</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:14px;">
<div style="flex:0 0 200px; text-align:center;">
<div style="font-weight:800; font-size:24px; margin-bottom:6px;">スマホから</div>
<img src="./src/fig02-img.png" alt="Slido QRコード" style="width:170px; height:170px;">
</div>
<div style="flex:1;">
<div style="font-weight:800; font-size:24px; margin-bottom:6px;">PCから</div>
<div class="box-info pip-safe" style="font-size:22px;">
方法1　Google検索「Slido」→コード入力<br>
<span style="display:inline-block; margin:6px 0;"><img src="./src/fig01-img.png" alt="Joining as a participant?" style="height:46px; vertical-align:middle;"> <b class="tag tag-accent" style="font-size:22px;">ALC-AI1-02</b></span><br>
方法2　直接リンク<br>
<span style="font-size:19px; color:#1A6BB0;">https://app.sli.do/event/mxTwE7NxRLgMqVFg482TuT</span>
</div>
</div>
</div>

<!-- [NOTE] 開始前に。千葉大Workspaceにログインし、Slidoにアクセスしてもらう。個人情報の入力は禁止。 -->

---

<div class="page-title">講師紹介</div>

# <ruby>田川<rt>たがわ</rt></ruby> <ruby>翔<rt>しょう</rt></ruby><span class="tag tag-soft" style="font-size:20px;">オープンバッジ</span>

<div class="subhead"><b>所属：</b>千葉大学 高等教育センター／アカデミックリンクセンター</div>

<div class="box-accent" style="margin:6px 0 12px;"><b>大学教育を企画し、学生と教員を支援する仕事</b></div>

<div class="cardrow">
<div class="pcard">
<div class="pc-h">① 元々は理学の人</div>
<img src="./src/fig02a-career.png" alt="地球誕生・海の起源研究" style="width:100%; border-radius:8px;">
<div class="cite" style="margin-top:6px;">Tagawa et al. (2021) <i>Nat. Com.</i></div>
</div>
<div class="pcard">
<div class="pc-h">② 色々な経験</div>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
<img src="./src/fig02b-icons.png" alt="民間企業での経験" style="width:100%; border-radius:8px; margin-top:6px;">
</div>
<div class="pcard">
<div class="pc-h">③ 大学を学びやすく!</div>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
</ul>
<img src="./src/fig02c-books.png" alt="大学で教えるFFP" style="width:100%; border-radius:8px; margin-top:4px;">
<div style="font-size:20px; margin-top:4px;">現在、Teaching with AIを翻訳・出版準備中</div>
</div>
</div>

<!-- [NOTE] 自己紹介。理学出身→ICT支援・オンライン授業・民間経験→現在は大学を学びやすくする仕事。Teaching with AI翻訳中。 -->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta">
<div class="title-event">2025年度 第2回： NotebookLMで情報を理解する</div>
<div>15-min × 3 sessions</div>
<div style="margin-top:24px;">国際未来教育基幹 田川 翔</div>
</div>

<!-- [NOTE] タイトルコール。第2回「NotebookLMで情報を理解する」。15分×3セッション構成。 -->

---

<div class="page-title">ワークショップの全体構成</div>

# ワークショップの全体構成

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="flowrow" style="gap:14px;">
<div style="flex:0 0 120px; text-align:right; font-size:22px; color:#555;">最初の15分<br>(今日短め)</div>
<div class="fbox blue" style="font-size:30px; padding:8px 28px;">講義</div>
</div>
<div class="flowrow" style="gap:14px;">
<div style="flex:0 0 120px; text-align:right; font-size:22px; color:#555;">真ん中の15分</div>
<div class="fbox red" style="font-size:30px; padding:8px 28px;">体験</div>
</div>
<div class="flowrow" style="gap:14px;">
<div style="flex:0 0 120px; text-align:right; font-size:22px; color:#555;">最後の15分</div>
<div class="fbox gray" style="font-size:30px; padding:8px 28px;">議論・座談会</div>
</div>

</div>
<div style="flex:0 0 420px;">
<div class="box-info" style="font-size:18px; line-height:1.55;">
生成AIの仕組みを体験する<br>
<b>Noetebook LMで情報を理解する</b><br>
生成AI利用、どこまではOKで、どこからがアウト？<br>
AIで絵・グラフを書いてみる<br>
特別回1(外部講師登壇予定)<br>
特別回2(本学学生登壇予定)<br>
AIを使ってスライドを作ってみる<br>
Google SpreadsheetからAIで分析する
</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px;">
演習・議論付き (オンラインの皆様もぜひ！)　詳細は<b>moodle</b>で！
</div>

<!-- [NOTE] 全体構成。最初・真ん中・最後の15分で講義／体験／議論。演習・議論付きで、詳細はmoodle。 -->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<table style="width:100%; border-collapse:collapse; font-size:24px; margin-top:8px;">
<tr>
<td style="width:130px; padding:10px; color:#555; text-align:center;">最初の15分</td>
<td style="width:160px; padding:10px;"><span class="fbox blue" style="font-size:26px; padding:6px 24px;">講義</span></td>
<td style="padding:10px;">- AIで学びに役立つ情報を作れることに気づく<br>- Gemini/NotebookLMの機能を理解する</td>
</tr>
<tr>
<td style="padding:10px; color:#555; text-align:center;">真ん中の15分</td>
<td style="padding:10px;"><span class="fbox red" style="font-size:26px; padding:6px 24px;">体験</span></td>
<td style="padding:10px;">- NotebookLMを使ってみる</td>
</tr>
<tr>
<td style="padding:10px; color:#555; text-align:center;">最後の15分</td>
<td style="padding:10px;"><span class="fbox gray" style="font-size:26px; padding:6px 24px;">議論・座談会</span></td>
<td style="padding:10px;">- 今日面白かったこと、気付きは何でしたか。<br>- NotebookLMを使うことへの、　懸念と利点はなんですか？</td>
</tr>
</table>

<!-- [NOTE] 今回の3パートの中身。講義＝気づき＋機能理解、体験＝使ってみる、議論＝気づきと懸念・利点。 -->

---

<div class="page-title">いざ、実践</div>

# いざ、実践

<div class="box-accent" style="margin:6px 0 12px;"><b>今回は、時間の関係上、まず、体験(Session2)の準備をしましょう！</b></div>

<div class="stepbox">
<div class="st">① 千葉大のアカウントにログインしたブラウザで、<br>　 ”NotebookLM”とGoogle検索し開きましょう。</div>
<div class="st">② ソースに、<b>個人利用で複製しても権利上問題ない資料</b>を1-2個アップロードしてみましょう。<br><span style="font-size:22px;">　 例：前回の自分の講義資料も可</span></div>
<div class="st">③ <b>動画解説・マインドマップ・インフォグラフ・スライド</b>　資料を押して見ましょう。</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:22px; font-weight:400; color:#8a4b00;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!-- [NOTE] まず体験Session2の準備。NotebookLMを開き、権利上問題ない資料を1-2個アップロード、各機能を押してみる。 -->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta">
<div class="title-event">2025年度 第2回： NotebookLMで情報を理解する</div>
<div>15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:24px auto 0; text-align:left;">
<b style="font-size:30px;">Session 1：</b><br>
<span style="display:inline-block; margin-left:1.6em; font-size:28px;">講義：AIで学びに役立つ情報を作る</span>
</div>

<div class="title-meta" style="margin-top:18px;">国際未来教育基幹 田川 翔</div>

<!-- [NOTE] Session 1の扉。講義：AIで学びに役立つ情報を作る。 -->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div class="box-accent" style="margin:6px 0 18px;">
<b style="font-size:28px;">Session 1：</b>　講義：AIで学びに役立つ情報を作る
</div>

<div style="display:grid; grid-template-columns:120px 1fr; gap:18px; align-items:center;">
<div style="font-size:30px; font-weight:800; text-align:center;">目的</div>
<div class="stepbox" style="margin:0;"><div class="st">AIで学びに役立つ情報を作れることに気づく<br>Gemini/NotebookLMの学習用機能を理解する</div></div>
</div>

<div style="display:grid; grid-template-columns:120px 1fr; gap:18px; align-items:center; margin-top:14px;">
<div style="font-size:30px; font-weight:800; text-align:center;">目標</div>
<div class="stepbox" style="margin:0;"><div class="st">・ AIで学びに役立つ情報を作れることに気づく<br>・ Gemini/NotebookLMの学習用機能を理解する</div></div>
</div>

<!-- [NOTE] Session 1の目的と目標。AIで学習用情報を作れると気づき、Gemini/NotebookLMの学習用機能を理解する。 -->

---

<div class="page-title">最初に質問です</div>

# 最初に質問です

<div class="lead-note">想像してみて下さい。</div>

<div class="box-accent" style="margin:6px 0 14px; font-weight:700;">
初めて学ぶことを<b>”授業1コマ”分、自習</b>をするとします。
</div>

<div class="stepbox">
<div class="st"><b>質問1:</b>　学んだことを実践出来るようになるために、<br>　　　　　 <b>どのような目標</b>に分けて、学びをデザインしますか？</div>
</div>

<div class="stepbox">
<div class="st"><b>質問2:</b>　何が、<b>「勉強自体はしていないのに、時間がかかること」</b>ですか。<br>　　　　　 あなたが不便に感じることや他者にしてほしいことは何ですか？</div>
</div>

<div class="lead-note pip-safe" style="margin-top:10px; color:#555;">1分間、時間を取ります…</div>

<!-- [NOTE] 受講者への問い。①どんな目標に分けて学びをデザインするか、②勉強以外で時間がかかること・不便なことは何か。1分考えてもらう。 -->

---

<div class="page-title">質問①の例：学習目標分類</div>

# 質問①の例：学習目標分類

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<table style="border-collapse:collapse; font-size:18px; width:100%;">
<tr style="background:var(--accent); color:#fff;">
<th style="padding:4px;"></th><th style="padding:4px;">知識や思考</th><th style="padding:4px;">技能やスキル</th><th style="padding:4px;">態度</th>
</tr>
<tr><td style="padding:4px; color:var(--accent-dark); font-weight:800;">高次<br>↑</td><td style="padding:4px; border:1px solid #ddd;"><b>創造</b> 学習を応用し、新しい価値を作れる</td><td style="padding:4px; border:1px solid #ddd;"></td><td style="padding:4px; border:1px solid #ddd;"></td></tr>
<tr><td style="padding:4px;"></td><td style="padding:4px; border:1px solid #ddd;"><b>評価</b> 事物・判断等を比較し、評価できる</td><td style="padding:4px; border:1px solid #ddd;">自然化</td><td style="padding:4px; border:1px solid #ddd;">個性化</td></tr>
<tr><td style="padding:4px;"></td><td style="padding:4px; border:1px solid #ddd;"><b>分析</b> 要素に分け関係性を指摘できる</td><td style="padding:4px; border:1px solid #ddd;">分節化</td><td style="padding:4px; border:1px solid #ddd;">組織化</td></tr>
<tr><td style="padding:4px;"></td><td style="padding:4px; border:1px solid #ddd;"><b>応用</b> 他の場面や状況に使用できる</td><td style="padding:4px; border:1px solid #ddd;">精密化</td><td style="padding:4px; border:1px solid #ddd;">価値づけ</td></tr>
<tr><td style="padding:4px;"></td><td style="padding:4px; border:1px solid #ddd;"><b>理解</b> 学習内容を説明できる</td><td style="padding:4px; border:1px solid #ddd;">巧妙化</td><td style="padding:4px; border:1px solid #ddd;">反応</td></tr>
<tr><td style="padding:4px; color:var(--accent-dark); font-weight:800;">低次</td><td style="padding:4px; border:1px solid #ddd;"><b>記憶</b> 事実や概念を暗記している</td><td style="padding:4px; border:1px solid #ddd;">模倣</td><td style="padding:4px; border:1px solid #ddd;">受け入れ</td></tr>
</table>

</div>
<div style="flex:0 0 150px; text-align:center; font-size:22px; line-height:2;">
<div><b>師匠</b></div>
<div>↑</div>
<div><b>一人前</b></div>
<div>↑</div>
<div><b>見習い</b></div>
</div>
</div>

<div class="box-accent" style="margin-top:8px; font-size:21px;">
<b>学習目標分類に沿って発達している</b>と考えると、腑に落ちませんか？
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">
教育心理学者Bloomらにより作られた教育における目標の分類<br>
　<b>注意：</b>下から順番に完璧にせよ、という意味ではない。
</div>

<!-- [NOTE] 学習目標分類（Bloom）。認知・精神運動・情意の3領域。見習い→一人前→師匠と発達。1956年認知/1964年情意、認知はAndersonらの改訂版。下から順に完璧にする意味ではない。 -->

---

<div class="page-title">質問②の例：学習方略</div>

# 質問②の例：学習方略

<div class="box-info" style="margin:4px 0 8px; font-size:21px;">
<b>学習方略</b> - Dunlosky et al. (2013) PSPI　教育心理学による、「生徒がどう勉強すべきか」のレビュー論文
</div>

<table style="border-collapse:collapse; font-size:17px; width:100%;">
<tr style="background:var(--accent); color:#fff;">
<th style="padding:4px; width:120px;">テクニック</th><th style="padding:4px;">内容・方法</th><th style="padding:4px; width:48px;">効果</th><th style="padding:4px;">主な理由</th>
</tr>
<tr><td style="padding:4px; border:1px solid #ddd;">実力テスト</td><td style="padding:4px; border:1px solid #ddd;">フラッシュカードや練習問題などを使い、自分の記憶から情報を引き出すテストを行う。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:var(--accent-dark); font-weight:800;">高</td><td style="padding:4px; border:1px solid #ddd;">学習効果が高く、幅広い教材・年齢層に有効。フィードバックがあると効果的。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">分散学習</td><td style="padding:4px; border:1px solid #ddd;">一気に学習せず、学習スケジュールを分散させる。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:var(--accent-dark); font-weight:800;">高</td><td style="padding:4px; border:1px solid #ddd;">長期的な記憶保持に有効。一夜漬けよりも遥かに効率が良い。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">精緻化的質問</td><td style="padding:4px; border:1px solid #ddd;">「なぜその事実が成り立つのか？」という質問を自分に投げかけ、説明を考える。</td><td style="padding:4px; border:1px solid #ddd; text-align:center;">中</td><td style="padding:4px; border:1px solid #ddd;">事実の学習に有効だが、ある程度の予備知識が必要。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">自己説明</td><td style="padding:4px; border:1px solid #ddd;">学習のプロセスや、新しい情報が既知の情報とどう関連するかを自分自身に説明する。</td><td style="padding:4px; border:1px solid #ddd; text-align:center;">中</td><td style="padding:4px; border:1px solid #ddd;">数学や論理的思考を要する問題解決に有効だが、時間がかかる。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">交互練習</td><td style="padding:4px; border:1px solid #ddd;">1つの種類の問題をまとめて解くのではなく、異なる種類の問題を混ぜて練習する。</td><td style="padding:4px; border:1px solid #ddd; text-align:center;">中</td><td style="padding:4px; border:1px solid #ddd;">数学などで劇的な効果がある（区別がつかなくなるのを防ぐ）。 ※ 全ての教科での効果は未検証。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">要約</td><td style="padding:4px; border:1px solid #ddd;">学習したテキストの要点をまとめ短い文章にする。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:#999;">低</td><td style="padding:4px; border:1px solid #ddd;">時間がかかるわりに、要約スキルの形成を除き効果が薄い。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">ハイライト</td><td style="padding:4px; border:1px solid #ddd;">重要な部分に線を引いたり、色を塗ったりする。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:#999;">低</td><td style="padding:4px; border:1px solid #ddd;">読むだけより効果が薄くなりがちで、推論能力を阻害しうる。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">キーワード法</td><td style="padding:4px; border:1px solid #ddd;">発音が似たキーワードにイメージを結びつける。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:#999;">低</td><td style="padding:4px; border:1px solid #ddd;">適用できる教材が限られ（語呂合わせなど）、長期記憶しにくい。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">テキストのイメージ化</td><td style="padding:4px; border:1px solid #ddd;">読んでいる内容を頭の中で映像化する。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:#999;">低</td><td style="padding:4px; border:1px solid #ddd;">視覚化しやすい教材に限られ、効果が一貫しない。</td></tr>
<tr><td style="padding:4px; border:1px solid #ddd;">再読</td><td style="padding:4px; border:1px solid #ddd;">テキストやノートを繰り返し読む。</td><td style="padding:4px; border:1px solid #ddd; text-align:center; color:#999;">低</td><td style="padding:4px; border:1px solid #ddd;">最も一般的だが、時間対効果が低く、深い理解につながらない。</td></tr>
</table>

<div style="font-size:18px; margin:4px 0;">※個人差はあります。</div>

<div class="box-warn pip-safe" style="font-size:19px; font-weight:400; color:#8a4b00;">
再読やハイライト、写し直すなど、準備コストの低いが効果も低い、方略を選びがち<br>
<b>一方で、学習効果の高い方法は、準備コストが高い一方、一人では難しい</b>
</div>

<!-- [NOTE] Dunloskyらのレビュー。実力テスト・分散学習は高効果、再読・ハイライトは低効果。効果の高い方略ほど準備コストが高く一人では難しい。 -->

---

<div class="page-title">質問②の例：学習方略</div>

# 質問②の例：学習方略

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1.1;">

<div class="box-accent" style="margin:0 0 8px;"><b>学習方略上の課題</b></div>

<div class="stepbox" style="margin:5px 0; padding:7px 12px;"><div class="st" style="font-size:19px;">単語帳の作成、問題作成、リフレクション、問答する、質問する等は時間がかかる→ 学習効果は高いものの、<b>作業的になりがちなので、AIで支援できる？</b></div></div>

<div class="stepbox" style="margin:5px 0; padding:7px 12px;"><div class="st" style="font-size:19px;">リフレクションなど、自分の学習をメタ的に見ることが重要なこともある<br>→ 言葉にすることが重要だが、一人では結構難しい。</div></div>

<div class="stepbox" style="margin:5px 0; padding:7px 12px;"><div class="st" style="font-size:19px;"><b>Unknown Unknowns</b> (知らないことを知らないこと) もあって、一人では難しい<br><span class="em"><b>→ 探索や俯瞰・構造化の伴走</b></span></div></div>

</div>
<div style="flex:0.9;">

<div style="display:grid; grid-template-columns:1fr 1fr; gap:7px;">
<div class="box-info" style="font-size:18px; padding:7px 11px;"><b>Known Knowns</b><br>知っていると知っていること<br><b>意識し、理解していること</b></div>
<div class="box-warn" style="font-size:17px; font-weight:400; color:#8a4b00; padding:8px 12px;"><b>Unknown Unknowns</b><br>知らないことを知らないこと<br><b>意識も理解もしていないこと</b></div>
<div class="box-accent" style="font-size:18px; padding:7px 11px;"><b>Unknown Knowns</b><br>知っていると知らないこと<br><b>理解はしているが意識していないこと</b></div>
<div class="box-accent" style="font-size:18px; padding:7px 11px;"><b>Known Unknowns</b><br>知らないと知っていること<br><b>意識はしているが理解していないこと</b></div>
</div>

</div>
</div>

<div class="box-accent" style="margin-top:6px; padding:8px 16px; text-align:center; font-weight:800;">
自分の学びの準備・伴走・深化をAIでできないか？
</div>

<div class="box-warn pip-safe" style="margin-top:5px; padding:7px 14px; font-size:18px; line-height:1.4; font-weight:400; color:#8a4b00;">
注意①： <b>人に聞く</b>、<b>白紙にかきおこす、人に教えるなど</b>、AIを使わない良い方法はある<br>
注意②: AIを最終出力にするのではない。学習と改善のループを回すことが必要
</div>

<!-- [NOTE] 学習方略上の課題。時間のかかる作業的な学習はAIで支援できるか。メタ認知やUnknown Unknownsは一人では難しい→探索・俯瞰・構造化の伴走。ただしAIを使わない良い方法もあり、AIは最終出力でなく学習ループを回す道具。 -->

---

<div class="page-title">Google Geminiの機能</div>

# ① <span style="color:var(--accent-dark)">Gemini</span>で学習の道具を作ってみる

<div style="display:flex; gap:18px; align-items:flex-start;">
<div class="box-info" style="flex:1;">
<b>クイズ:</b> 「～についてのクイズを作成して」<br>
<b>フラッシュカード:</b> 「～についてのフラッシュカードを作成して」<br>
<b>学習ガイド:</b> 「～についての学習ガイドを作成して」
</div>
</div>

<div class="cite">Googleの公式ヘルプ：https://support.google.com/gemini/answer/16275879?hl=ja&amp;co=GENIE.Platform%3DAndroid<br>当日デモ用(アクセス不可)：https://gemini.google.com/app/393fab2b95fcedf1?hl=ja</div>

# ② <span style="color:var(--accent-dark)">Gemini</span>でDeepResearchしてみる

<div class="box-warn" style="margin-right:calc(var(--pip-w) + 8px);">注意: ハルシネーションや出典元が怪しい場合もあるので、要注意</div>

<div class="cite pip-safe">出力例：https://docs.google.com/document/d/18hBvszUUQL1T1vgUqUH2Q2ThnideGveOxOl9diCfuY4/edit?usp=sharing<br>当日デモ用 (アクセス不可)：https://gemini.google.com/app/42b5918693ba87ca?hl=ja</div>

# ③ <span style="color:var(--accent-dark)">Google NotebookLM</span>を使ってみる<span class="tag tag-accent" style="font-size:22px; margin-left:12px;">今日のテーマ</span>

<div class="takeaway"><b>まずは試してみて、クリティカルに考えてみよう</b></div>

<!--
- Geminiの学習向け機能を3つ。①クイズ/フラッシュカード/学習ガイドを作らせる、②DeepResearchで調べる（ただしハルシネーションや出典に注意）、③そして今日のテーマであるNotebookLM。まずは試して、批判的に考えよう。
-->

---

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">コンテキスト</span>をもとに、情報を変換・深堀りする道具

<div style="display:flex; gap:16px; align-items:stretch; margin-top:24px;">
<div style="flex:1; text-align:center;">
<img src="./src/fig14-notebooklm-crop.png" alt="NotebookLMの画面" style="width:100%; max-height:280px; object-fit:contain; border:1px solid #ddd; border-radius:8px;">
</div>
<div style="width:300px; text-align:center;">
<img src="./src/fig14-ukiyoe-crop.png" alt="変換された情報の例" style="height:280px; border-radius:8px;">
</div>
</div>

<div style="display:flex; margin-top:8px; font-size:26px; font-weight:800; color:var(--accent-dark);">
<div style="flex:1; text-align:center;">コンテキスト</div>
<div style="flex:1; text-align:center;">質問</div>
<div style="width:300px; text-align:center;">変換</div>
</div>

<!--
- NotebookLMは「コンテキスト（与えた資料）をもとに、情報を変換・深堀りする道具」。左が与えたコンテキスト、中央で質問し、右のように学びやすい形へ変換していく。
-->

---

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">学びやすい形</span>に情報を変換

<div style="display:flex; gap:18px; align-items:center;">
<img src="./src/fig15-transform-crop.png" alt="情報変換の例（絵・クイズ・スライド・動画など）" style="height:430px; border-radius:8px;">
<div style="flex:1; display:flex; flex-direction:column; gap:12px;">
<div class="box-accent"><b>絵1枚で要約</b></div>
<div class="box-accent"><b>クイズで時間確認</b></div>
<div class="box-accent"><b>スライド作成</b></div>
<div class="box-accent"><b>動画・podキャスト</b><br>(ソクラテスメソッド)</div>
<div class="box-accent"><b>質問・応答</b></div>
</div>
</div>

<!--
- NotebookLMは情報を「学びやすい形」に変換する。絵1枚で要約、クイズで理解確認、スライド作成、動画やポッドキャスト（ソクラテスメソッド）、質問・応答など、多様なモードがある。
-->

---

<div class="page-title">NotebookLMの授業活用</div>

# <span style="color:var(--accent-dark)">クラスルーム</span>での活用事例

<div style="display:flex; gap:20px; align-items:flex-start;">
<img src="./src/fig16-classroom-crop.png" alt="Google Classroomでの配布画面" style="width:360px; border:1px solid #ddd; border-radius:8px;">
<div style="flex:1; display:flex; flex-direction:column; gap:10px;">

<div class="box-info">授業全体の内容を質問し、思考・学びのパートナーとして提供</div>

<div class="box-accent"><b>作成したスライドやドキュメントをソースにアップロード</b></div>

<div style="font-size:24px; line-height:1.5;">
・<b>使い方について10分ほどの動画を受講学生に配布</b><br>
・<b>クイズや精緻的質問で能動的に学び、様々な情報モードでの理解促進を狙う</b>
</div>

<div class="box-warn" style="margin-right:calc(var(--pip-w) + 8px);"><b>知識との関わり方</b>を転換</div>

</div>
</div>

<!--
- クラスルームでの活用事例。授業全体の内容を質問できる学びのパートナーとして提供し、作成したスライド/ドキュメントをソースにアップロード。使い方の10分動画を配布し、クイズや精緻化質問で能動的に学ばせる。知識との関わり方そのものを転換する。
- 自分は、禁止することを諦めました。だったら、AIを使って、もっと遠くまで学ばせた方が良い。逆に公式に提供し、課題とテストの難易度を上げました。
-->

---

<div class="page-title">学習スタイルの複線化</div>

# <span style="color:var(--accent-dark)">学び方の道具</span>としてAIを位置づける

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1;">
<div class="box-info" style="text-align:center; margin-bottom:6px;"><b>積み上げて受動的に学ぶ</b><br>：順問題/演繹的学び方</div>
<img src="./src/fig17-left-crop.png" alt="積み上げ型の階段図" style="width:100%; max-height:255px; object-fit:contain;">
<div style="text-align:center; font-weight:800; color:#555; margin-top:2px;">どこかで頭打ちする可能性</div>
</div>

<div style="flex:1;">
<div class="box-accent" style="text-align:center; margin-bottom:6px;"><b>最終到達点から探究的に学ぶ</b><br>：逆問題/アブダクション的学び方</div>
<img src="./src/fig17-right-crop.png" alt="高みから降りる階段図" style="width:100%; max-height:255px; object-fit:contain;">
<div style="text-align:center; font-weight:800; color:var(--accent-dark); margin-top:2px;">高みから中間地点を学ぶ</div>
</div>

</div>

<div class="box-warn" style="margin-top:8px; margin-right:calc(var(--pip-w) + 8px);">既存の学びを効率化する<b>コスパ/タイパの道具</b>ではない／より深く・広く学びやすくするための道具とてAIを考えてみる</div>

<!--
- 学び方の道具としてAIを位置づける。左は積み上げて受動的に学ぶ順問題・演繹型（どこかで頭打ちの可能性）。右は最終到達点から探究的に学ぶ逆問題・アブダクション型（高みから中間地点を学ぶ）。学びを良くするサイクルに含める。AIはコスパ/タイパの道具ではなく、より深く・広く学ぶための道具と考える。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# <span style="color:var(--accent-dark)">振り返り</span>

<div style="display:grid; grid-template-columns:130px 1fr; gap:16px 20px; align-items:start; margin-top:8px;">

<div style="font-size:28px; font-weight:800; align-self:center;">目的</div>
<div class="box-accent"><b>Session 1：</b>　講義：AIで学びに役立つ情報を作る</div>

<div style="font-size:28px; font-weight:800; line-height:1.4;">目標<br>＋<br>まとめ</div>
<div style="background:var(--section-bg); border-radius:12px; padding:14px 24px; font-size:24px; line-height:1.55;">
・<b>AIで学びに役立つ情報を作れることに気づく</b><br>
　・学びの方略・準備に活用できるところがある<br>
　・コスパ/タイパの道具ではなく、深く学ぶために<br>
・<b>Gemini/NotebookLMの機能を理解する</b><br>
　・情報を学びに使える形に変換出来る！<br>
　・Gemini/DeepResearchも使える
</div>

</div>

<!--
- Session 1の振り返り。目的は「AIで学びに役立つ情報を作る」講義。目標は、①AIで学びに役立つ情報を作れることに気づく（方略・準備に活用、コスパ/タイパでなく深く学ぶため）、②Gemini/NotebookLMの機能を理解する（学びに使える形に変換、DeepResearchも）。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="color:#1a1a1a;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:700;">2025年度 第2回：　NotebookLMで情報を理解する</div>
<div style="font-size:22px; color:#666; margin-top:6px;">15-min × 3 sessions</div>
</div>

<div style="background:var(--section-bg); border-radius:12px; padding:16px 32px; max-width:680px; margin:24px auto 0; font-size:30px; font-weight:800;">
Session 2：<br><span style="font-weight:700; margin-left:1.4em;">実践：NotebookLMを使ってみる</span>
</div>

<div style="text-align:center; font-size:24px; margin-top:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2に入ります。ここからは実践：NotebookLMを実際に使ってみます。
-->

---

<div class="page-title">いざ、実践</div>

# <span style="color:var(--accent-dark)">何をするか？</span>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:6px;">

<div style="flex:1; display:flex; flex-direction:column; gap:6px;">
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:21px;">① 会場はペアを作って下さい。オンラインはslidoを繋いでください。</div></div>
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:21px;">② 千葉大のアカウントにログインしたブラウザで、”NotebookLM”とGoogle検索し開きましょう。</div></div>
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:21px;">③ ソースに、<b>個人利用で複製しても権利上問題ない資料</b>を1-2個アップロードしてみましょう。</div></div>
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:21px;">④ <b>動画解説・マインドマップ・インフォグラフ・スライド</b>　資料を押して見ましょう。</div></div>
<div class="stepbox" style="margin:0;"><div class="st" style="font-size:21px;">⑤ 質問をしたり、マインドマップを触ってみましょう。</div></div>
</div>

<img src="./src/fig20-studio-crop.png" alt="NotebookLMのStudio画面" style="width:280px; max-height:330px; object-fit:contain; border:1px solid #ddd; border-radius:8px;">

</div>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:20px; font-weight:400; color:#8a4b00;">オンラインの方：困ったらSlidoに質問を送って下さい！／余裕がある方：Slidoに返信してあげてください。／会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

<!--
- いざ実践。①会場はペア、オンラインはSlido。②NotebookLMを開く。③権利上問題ない資料を1-2個アップロード。④動画解説・マインドマップ・インフォグラフ・スライドを押してみる。⑤質問やマインドマップ操作。困ったらSlido/TA/ペアへ。
-->

---

<div class="page-title">コンテキストの重要性</div>

# 昨今のAIは、<span style="color:var(--accent-dark)">何をコンテキストに入れるか勝負</span>になっている

<div style="display:flex; align-items:center; gap:18px; margin:10px 0;">
<div style="display:flex; flex-direction:column; gap:8px;">
<div style="border:2.5px solid var(--tag-blue); background:#EAF2FB; color:#15436e; border-radius:10px; padding:8px 20px; font-weight:700;">前提情報A</div>
<div style="border:2.5px solid var(--tag-blue); background:#EAF2FB; color:#15436e; border-radius:10px; padding:8px 20px; font-weight:700;">前提情報B</div>
</div>
<div class="farrow">⇒</div>
<div style="border:2.5px solid #888; background:#fff; border-radius:10px; padding:8px 22px; font-weight:700;">詳細なプロンプト</div>
<div class="farrow">⇒</div>
<div style="background:var(--accent-dark); color:#fff; border-radius:10px; padding:8px 22px; font-weight:800;">良い結果</div>
<div style="margin-left:8px; color:var(--accent); font-weight:800;">↺ 改善LOOP</div>
</div>

<div class="box-info">
<b>※ 矛盾する前提情報が多くなると雑な回答になりがち</b><br>
<b>※ ベストなコンテキストのデザインを行う方法は、コンテキストエンジニアリングと言われている</b>
</div>

<div class="cite pip-safe"><b>参考：</b>AIに適切な情報を渡す手法には検索拡張生成（Retrieval-Augmented Generation）がある。ベストなコンテキストになるようなRAGアルゴリズムが必要 (RAGは断片を持ってきがち)。RAGは断片的で難しく、整った形でコンテキストに入れられる場合に限り、精度があがる。</div>

<div class="takeaway"><b>→ 情報が繋がって、新しい価値ある情報を生む価値を作る</b></div>

<!--
- コンテキストの重要性。昨今のAIは「何をコンテキストに入れるか」が勝負。前提情報A/Bと詳細なプロンプトから良い結果を出し、改善LOOPを回す。矛盾する前提が多いと雑になる。ベストなコンテキスト設計＝コンテキストエンジニアリング。参考：RAGは断片的で難しく、整った形で渡せた時だけ精度が上がる。情報が繋がって新しい価値を生む。
-->

---

<div class="page-title">応用問題を解こう！</div>

# <span style="color:var(--accent-dark)">応用問題</span> <span style="font-size:30px;">(時間が余った方向け)</span>

<div class="stepbox"><div class="st">① <b>ハルシネーションしないか、確かめてみましょう。</b>また、与えたソースには含まれないであろう、常識的な内容を質問してみましょう → 例：日本の首都の議論など</div></div>

<div class="stepbox"><div class="st">② <b>スライド作成等の指示は、プロンプトで指示を与えられます。</b>やってみましょう。</div></div>

<div class="stepbox"><div class="st">③ <b>ソースの組み合わせを変更してみましょう。</b></div></div>

<div class="takeaway">とても面白い結果が出た方は、教えて下さい。</div>

<!--
- 時間が余った方向けの応用問題。①ハルシネーションを確認（ソースに無さそうな常識を質問、例：日本の首都の議論）。②スライド作成などをプロンプトで指示。③ソースの組み合わせを変更。面白い結果が出たら教えてください。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# <span style="color:var(--accent-dark)">振り返り</span>

<div style="display:grid; grid-template-columns:130px 1fr; gap:16px 20px; align-items:start; margin-top:8px;">

<div style="font-size:28px; font-weight:800; align-self:center;">目的</div>
<div class="box-accent"><b>Session 2：</b>　実践：NotebookLMを使ってみる</div>

<div style="font-size:28px; font-weight:800; line-height:1.4;">目標<br>＋<br>まとめ</div>
<div style="background:var(--section-bg); border-radius:12px; padding:16px 24px; font-size:25px; line-height:1.6;">
・<b>NotebookLMの使い方がわかる</b><br>
　・ソースへの登録<br>
　・自分の学びに活用できる内容での変換<br>
・<b>利点と欠点を批判的に理解する</b><br>
　・Session 3で議論する
</div>

</div>

<!--
- Session 2の振り返り。目的は「NotebookLMを使ってみる」実践。目標は、①使い方がわかる（ソースへの登録、自分の学びに活用できる内容への変換）、②利点と欠点を批判的に理解する（Session 3で議論）。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="color:#1a1a1a;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:700;">2025年度 第2回： NotebookLMで情報を理解する</div>
<div style="font-size:22px; color:#666; margin-top:6px;">15-min × 3 sessions</div>
</div>

<div style="background:var(--section-bg); border-radius:12px; padding:16px 32px; max-width:720px; margin:24px auto 0; font-size:30px; font-weight:800;">
Session 3：<br><span style="font-weight:700; margin-left:1.4em;">議論：振り返り &amp; 使用の利点/欠点を語ろう</span>
</div>

<div style="text-align:center; font-size:24px; margin-top:24px;">国際未来教育基幹 田川 翔</div>

<!--
- 最後のSession 3。議論：振り返りと、使ってみた利点・欠点を語り合います。
-->

---

<div class="page-title">Session 3の進め方</div>

<div class="subhead"><span class="tag tag-soft">議論・座談会</span><span style="color:var(--accent-dark)">最後の15分</span></div>

<div class="box-info" style="margin-top:6px;">
　- 今日面白かったこと、気付きは何でしたか。<br>
　- NotebookLMを学びに使うことへの、　　懸念と利点はなんですか？
</div>

<div style="font-size:30px; font-weight:800; margin:14px 0 8px;"><span class="hl">Slido</span>で進めます</div>

<div style="display:flex; gap:18px; align-items:stretch;">

<div style="flex:0 0 360px; background:var(--section-bg); border-radius:14px; padding:14px 20px; display:flex; align-items:center; gap:14px;">
<div style="font-size:30px; font-weight:800;">スマホから</div>
<img src="./src/fig36-slido-qr.png" alt="Slido QRコード" style="height:150px;">
</div>

<div style="flex:1; background:var(--section-bg); border-radius:14px; padding:14px 22px;">
<div style="font-size:25px;"><b style="font-size:30px;">PCから</b>　方法1　Google検索「Slido」→コード入力</div>
<div style="display:inline-flex; align-items:center; background:#235A82; border-radius:24px; padding:6px 8px 6px 22px; margin:10px 0; gap:12px;">
<span style="color:#fff; font-weight:800; font-size:22px;">Joining as a participant?</span>
<span style="background:#fff; color:#235A82; border-radius:20px; padding:5px 16px; font-weight:800; font-size:22px;"># ALC-AI1-02 →</span>
</div>
<div style="font-size:25px; margin-top:4px;">方法2　直接リンク</div>
<div class="cite" style="margin-top:2px;"><a href="https://app.sli.do/event/mxTwE7NxRLgMqVFg482TuT">https://app.sli.do/event/mxTwE7NxRLgMqVFg482TuT</a></div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:14px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>　　　　　敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<!--
- 最後の15分はSession 3、議論・座談会。スマホはQRから、PCはSlido検索＋コード ALC-AI1-02、または直接リンクで参加してください。
- 今日面白かったこと・気付き、NotebookLMを学びに使うことへの懸念と利点を話し合いましょう。協力的な場作りが学びの秘訣です。敬意をもって、忌憚なく、建設的に。
-->

---

<div class="page-title">参考資料：課題・評価改善</div>

# 阪大の評価改善フロー <span style="font-size:26px;">(AIで答えが出ない問題作成)</span>

<div class="cite" style="position:absolute; top:96px; right:48px; margin:0;">浦田・長岡・村上 (2024) <i>情報処理</i></div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:18px; line-height:1.4;">

<div style="border:2px solid var(--tag-green); border-radius:10px; padding:8px 14px;">
<div style="font-weight:800; font-size:21px;">問題作成と試験の形式：</div>
<div><b>最新の出来事</b>や資料を扱うテーマを設定する</div>
<div style="background:var(--accent-soft);">事前に生成AIで試験問題を解いてみて、解けた場合は別の問題を検討する</div>
<div><b>授業内で</b>ディスカッションした内容を書かせる</div>
<div>短いライティング課題を頻繁に課す</div>
<div>口頭試験にする</div>
<div style="background:var(--accent-soft);">長い文章を要約させる</div>
<div>インタビュー、コンセプトマップ、動画、ディベートなど、レポート形式以外の課題にする</div>
<div style="background:var(--accent-soft);">オンライン試験では、問題文は（コピペしにくいように）画像にする</div>
<div style="color:var(--tag-blue);">音声と映像を組み合わせた動画で出題する</div>
<div>モラルに反する質問やプログラミングに反する質問への回答を求める</div>
</div>

<div style="border:2px solid var(--tag-green); border-radius:10px; padding:8px 14px;">
<div style="font-weight:800; font-size:21px;">評価とフィードバック：</div>
<div>ピアや教員との対面ミーティングを組み合わせて段階的に評価する</div>
<div style="background:var(--accent-soft);">生成AIで作成した成果物ではないという内容に署名させる</div>
<div>生成AIを利用していない時に学生が書いた文章と提出されたものを比較する</div>
<div style="background:var(--accent-soft);">引用を多用する課題を課す</div>
<div>学生が引用した文献を抜き打ちで実在するかチェックする（ことを伝える）</div>
<div style="color:var(--tag-blue);">対面または同期型で指導する成果についてのプレゼン課題でQ&Aも行う</div>
<div>手書きか口頭で、学んだことのリフレクションを提出させる</div>
<div>ピア評価を取り入れて建設的なフィードバックができる能力を評価する</div>
<div style="background:var(--accent-soft);">生成AIに書かせた文章を批評させる引用文献には文献データベースへのリンクを付けさせる</div>
</div>

<div style="border:2px solid var(--tag-green); border-radius:10px; padding:8px 14px;">
<div style="font-weight:800; font-size:21px;">課題の提出：</div>
<div>注釈を付けることを課す</div>
<div style="background:var(--accent-soft);">課題を作成する過程についての考察を課す</div>
<div style="color:var(--tag-blue);">手書きのレポート課題にする</div>
<div>レポートのテーマと自分の個人的な経験を統合する課題にする</div>
<div style="background:var(--accent-soft);">レポートの執筆プロセス（下書きや参考文献、編集履歴等）も提出させて評価対象にする</div>
<div style="color:var(--tag-blue);">引用文献のスクリーンショットの提出を課す</div>
</div>

<div style="border:2px solid var(--tag-green); border-radius:10px; padding:8px 14px;">
<div style="font-weight:800; font-size:21px;">方針の明示と周知：</div>
<div>試験で使用を許可する・許可しないツールを明記する</div>
<div style="background:var(--accent-soft);">出力の不正確さ、偏り、論理や文体の問題の例を学生に示して注意を促す</div>
<div>剽窃チェックツールが存在し、進化していることを学生に伝える</div>
<div style="background:var(--accent-soft);">AIの利用に関する方針をシラバスに明記する</div>
<div style="color:var(--tag-blue);">学問的誠実性を強調し、不正行為の結果を理解させる</div>
<div>書くプロセスが学びになぜ大切かを伝える</div>
<div>内発的動機づけを促す</div>
</div>

</div>

<div style="display:flex; gap:24px; align-items:baseline; font-size:20px; margin-top:8px;">
<div>すでに、<span style="background:var(--accent-soft);"><i>有料版AIで答えられる点</i></span></div>
<div style="color:var(--tag-blue);">(科目によっては、あまり意味がない場合があると考えられる点)</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:21px;">学習者主体から設計する／ゴールをイメージする<br>→ <b>学生がよりできるようになるための評価</b>であり、授業の厳密性ための評価ではない</div>

<!--
- 阪大の浦田ら(2024)による、AIで答えが出ない問題作成・評価改善フローの一覧。問題形式・評価・課題提出・方針周知の4観点。
- ピンク網掛けはすでに有料版AIで答えられてしまう点、青字は科目によってはあまり意味がない場合がある点。
- 大事なのは学習者主体・ゴールから設計すること。学生がよりできるようになるための評価であり、授業の厳密性のための評価ではない。
-->

---

<div class="page-title">補足：アップデート可能な資料</div>

# 補足：アップロードの判断フロー

<div class="box-info" style="margin-top:8px; font-size:21px; line-height:1.5;">
<b>AIの学習に使用されるか：</b> 大学版アカウントでは、使用されません。<br>
<b>ソースへの資料アップデート可否：</b> ご自身でご判断をお願いします。<span style="color:var(--tag-blue);">参考</span>(文化庁)<br>
　学習(AIを<b>作る</b>時)、生成(<b>AIを使う</b>時)、生成物利用(<b>出力</b>を使う時)の各段階があります
</div>

<div class="lead-note" style="margin-top:12px;"><b>考え方:</b> <span style="color:var(--tag-blue);">以下のフローでご確認下さい。</span></div>

<div class="stepbox" style="margin:8px 0;">
<div class="st" style="font-size:23px;">① <b>資料自体のアップロードが個々の理由で禁止されている。</b>→ <b>アップロード不可</b></div>
<div style="font-size:20px; margin-left:1.5em; line-height:1.45;">
例： 査読中論文や守秘義務の観点でアップロードを禁止されている。<br>
例： 購入したPDF資料の約款で、アップロードが禁止と明言されている。<br>
例： 購入した本で、個人利用の場合もアップロード不可と書かれている。
</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st" style="font-size:23px;">② <b>資料をNotebookLMの共有機能で他者に共有する。 → 著作物アップロード不可</b></div>
<div style="font-size:20px; margin-left:1.5em; line-height:1.45;">
例： 教科書・本自体をソースにして他者に配布することは権利者の許可が必要です。<br>
　　　※ 授業利用の場合に限り、利用可能な場合もありえます
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:8px; font-size:22px;">③ 上記①/②でない場合：<b>著作権法第30条の「私的使用」の範囲内</b>で<b>可</b></div>

<!--
- 補足。大学版アカウントではアップロードした資料はAIの学習に使われません。ただしソースへの資料アップロードの可否はご自身でご判断を。文化庁の整理では学習・生成・生成物利用の各段階があります。
- フロー：①資料自体のアップロードが禁止（査読中論文、約款、個人利用不可の本など）→不可、②NotebookLMの共有機能で他者に共有する→著作物は不可（授業利用に限り可の場合も）、③それ以外は著作権法第30条「私的使用」の範囲内で可。
-->
