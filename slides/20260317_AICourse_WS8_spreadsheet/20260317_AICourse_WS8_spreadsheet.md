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

<div class="box-info" style="margin-top:8px;">
<b>① PCを立ち上げ、お持ちの<br>　 千葉大学Google Workspaceにログインして下さい</b><br>
<span class="ind">→ 学校のGmailが立ち上がる状況ならOKです。</span>
</div>

<div class="box-info" style="margin-top:8px;">
<b>② インタラクションツール Slidoにアクセスして下さい</b><br>
URLを配布したり、質問やアンケートをとったりします<br>
<span style="font-size:21px;">※お名前などの個人情報の入力は禁止です</span><br>
<span style="font-size:21px;">※R8年度からは、Slidoの回答から組織名等の機微情報を除き、研究・外部発表にて使います。使用を許諾頂ける方だけ回答下さい。</span>
</div>

<div class="cardrow pip-safe" style="margin-top:8px;">
<div class="pcard" style="padding:8px 14px;"><div class="pc-h">スマホから</div>
<div style="text-align:center; font-size:21px;">QRコードを読み取り<br><b>ALC-AI1-08</b></div></div>
<div class="pcard" style="padding:8px 14px;"><div class="pc-h">PCから</div>
<ul style="font-size:20px; margin:4px 0 0 1em;">
<li><b>方法1</b> Google検索「Slido」→コード入力</li>
<li><b>方法2</b> 直接リンク</li>
</ul></div>
</div>

<div class="cite pip-safe" style="margin-top:6px;">https://app.sli.do/event/wrZh94BdtzvqDsboZrp5hh</div>

<!--
- 始める前に。まずPCを立ち上げて千葉大Google Workspaceにログイン。次にインタラクションツールSlidoにアクセス。個人情報は入れないでください。
-->

---

<!-- _class: intro -->

<div class="intro-head">講師紹介</div>

<div class="intro-name"><span class="ruby">たがわ　しょう</span>田川　翔</div>

<div class="intro-affil">
<span class="role">所属：</span>千葉大学 高等教育センター/アカデミックリンクセンター<br>
<b>大学教育を企画し、学生と教員を支援する仕事</b><br>
オープンバッジ
</div>

<div class="two-col" style="margin-top:10px; display:grid; grid-template-columns:0.85fr 1fr 1.1fr; gap:24px; align-items:start;">
<div class="col">
<h3>①元々は理学の人</h3>
<img src="./src/fig02a-science.png" alt="地球誕生の再現研究" style="width:100%; max-width:160px; border-radius:8px;">
<div style="font-size:17px; color:#666; margin-top:4px;">Tagawa et al. (2021) <i>Nat. Commun.</i></div>
</div>
<div class="col">
<h3>②色々な経験</h3>
<ul style="font-size:21px; line-height:1.6;">
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="col">
<h3>③大学を学びやすく!</h3>
<div style="font-size:20px;">大学での教え方</div>
<img src="./src/fig02b-teaching.png" alt="大学で教える FFP" style="width:100%; max-width:140px; border-radius:6px;">
<div style="font-size:20px; margin-top:4px;">生成AIの教育利活用<br>現在、<i>Teaching with AI</i>を翻訳・出版準備中</div>
</div>
</div>

<!--
- 自己紹介。元々は理学（地球科学）出身で、Nature Communicationsの論文も。今は大学のICT支援や大規模オンライン授業、AI×大学に取り組んでいます。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:8px;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:700;">2025年度 第8回： Google SpreadsheetからAIで分析する</div>
<div style="font-size:24px; color:#555; margin-top:6px;">15-min × 3 sessions</div>
<div style="font-size:24px; margin-top:24px;">国際未来教育基幹 田川 翔</div>
</div>

<!--
- 第8回のタイトルコール。Google SpreadsheetからAIで分析する、を15分×3セッションでやっていきます。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<div style="display:grid; grid-template-columns:160px 1fr; gap:14px 22px; align-items:center; margin-top:18px;">

<div style="text-align:center;"><div style="font-size:20px; color:#666;">最初の15分</div><div class="fbox gray" style="font-size:30px; padding:10px 0; margin-top:4px;">講義</div></div>
<div class="stepbox" style="margin:0;">
<div class="st" style="font-size:23px; margin:2px 0;">- AIが様々な分析に活用されていることを知る</div>
<div class="st" style="font-size:23px; margin:2px 0;">- いくつかの分析フローを知る</div>
<div class="st" style="font-size:23px; margin:2px 0;">- 道具を作るマインドを持つ</div>
</div>

<div style="text-align:center;"><div style="font-size:20px; color:#666;">真ん中の15分</div><div class="fbox gray" style="font-size:30px; padding:10px 0; margin-top:4px;">体験</div></div>
<div class="stepbox" style="margin:0;">
<div class="st" style="font-size:23px; margin:2px 0;">- Google spreadsheetで情報を分析する<br>　　　(実践 / 体験)</div>
</div>

<div style="text-align:center;"><div style="font-size:20px; color:#666;">最後の15分</div><div class="fbox gray" style="font-size:26px; padding:10px 0; margin-top:4px;">議論・座談会</div></div>
<div class="stepbox pip-safe" style="margin:0;">
<div class="st" style="font-size:23px; margin:2px 0;">- 使用してみて気がついたこと (利点と限界)</div>
<div class="st" style="font-size:23px; margin:2px 0;">- 今日面白かったこと、気付きは何でしたか。</div>
<div class="st" style="font-size:23px; margin:2px 0;">- 来年度はどのようなことを学びたいですか。</div>
</div>

</div>

<!--
- 今日は3部構成。最初の15分は講義、真ん中の15分は実際にスプレッドシートで分析する体験、最後の15分は議論・座談会です。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:27px; color:var(--accent-dark); font-weight:700;">2025年度 第8回：Google SpreadsheetからAIで分析する</div>
<div style="font-size:22px; color:#555; margin-top:4px;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:880px; margin:22px auto 0; font-size:28px;">
<b>Session 1：</b><br>
<span class="ind">AIが様々な分析に活用されていることを知る</span>
</div>

<div style="text-align:center; font-size:22px; margin-top:18px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 1。AIが様々な分析に活用されていることを知る、がテーマです。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div style="display:grid; grid-template-columns:120px 1fr; gap:20px; align-items:center; margin-top:26px;">

<div style="font-size:36px; font-weight:800;">目的</div>
<div class="box-accent" style="font-size:28px;">
<b>Session 1：</b><br>
<span class="ind">AIが様々な分析に活用されていることを知る</span>
</div>

<div style="font-size:36px; font-weight:800;">目標</div>
<div class="stepbox pip-safe" style="margin:0;">
<div class="st">・ AIが様々な分析に活用されていることを知る</div>
<div class="st">・ データへの分析応用例を知る</div>
<div class="st">・ 道具を作るマインドを持つ</div>
</div>

</div>

<!--
- Session 1の目的と目標。AIが分析に使われていることを知り、応用例を知り、道具を作るマインドを持つ、という3点です。
-->

---

<div class="page-title">データの種類</div>

# データの種類

<div class="lead-note">データには、<b>大きく3つの種類</b>がある</div>

<div class="cardrow" style="margin-top:6px;">

<div class="pcard">
<div class="pc-h">① 構造化データ</div>
<svg viewBox="0 0 200 90" style="width:100%; height:74px;">
<rect x="10" y="10" width="180" height="70" fill="#fff" stroke="#bbb"/>
<line x1="10" y1="30" x2="190" y2="30" stroke="#bbb"/>
<line x1="10" y1="50" x2="190" y2="50" stroke="#bbb"/>
<line x1="70" y1="10" x2="70" y2="80" stroke="#bbb"/>
<line x1="130" y1="10" x2="130" y2="80" stroke="#bbb"/>
<rect x="10" y="10" width="180" height="20" fill="var(--accent-soft)"/>
</svg>
<p style="font-size:21px;">列と行で規則的に整理され、検索や集計が容易なデータ<br><b>→ 顧客DB、POS売上等</b></p>
</div>

<div class="pcard">
<div class="pc-h">② 半構造化データ</div>
<svg viewBox="0 0 200 90" style="width:100%; height:74px;">
<rect x="20" y="12" width="120" height="22" rx="4" fill="var(--accent-soft)" stroke="#bbb"/>
<rect x="40" y="40" width="130" height="18" rx="4" fill="#fff" stroke="#bbb"/>
<rect x="55" y="62" width="115" height="16" rx="4" fill="#fff" stroke="#bbb"/>
</svg>
<p style="font-size:21px;">一定の階層・タグ規則はあるが、表形式ではないデータ<br><b>→ Webログ、JSON等</b></p>
</div>

<div class="pcard">
<div class="pc-h">③ 非構造化データ</div>
<svg viewBox="0 0 200 90" style="width:100%; height:74px;">
<rect x="14" y="16" width="50" height="50" rx="4" fill="#fff" stroke="#bbb"/>
<circle cx="39" cy="36" r="8" fill="#ddd"/>
<rect x="78" y="16" width="50" height="50" rx="4" fill="#fff" stroke="#bbb"/>
<path d="M88 60 L98 38 L108 52 L118 30 L128 60" fill="none" stroke="#bbb" stroke-width="2"/>
<rect x="142" y="16" width="44" height="50" rx="4" fill="#fff" stroke="#bbb"/>
<line x1="150" y1="28" x2="178" y2="28" stroke="#ccc"/>
<line x1="150" y1="40" x2="178" y2="40" stroke="#ccc"/>
<line x1="150" y1="52" x2="170" y2="52" stroke="#ccc"/>
</svg>
<p style="font-size:21px;">規則的な構造を持たない、そのままの形式のデータ<br><b>→ 画像、音声、動画、文章等</b></p>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center;">それぞれに対して、<b>グッドプラクティスと良い分析方法</b>がある</div>

<div class="cite pip-safe" style="position:absolute; top:64px; right:40px;">※第7回のプロンプトでこの絵も作ってます</div>

<!--
- データには大きく3種類。表形式の構造化データ、JSONのような半構造化データ、画像や音声のような非構造化データ。それぞれに合った分析方法があります。
-->

---

<div class="page-title">AIの日常化</div>

# AIの日常化

<div class="lead-note">学内の理系・民間のデータ部門では、<b>AIは当たり前</b>になっている</div>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:8px;">

<div style="flex:0 0 360px;">
<svg viewBox="0 0 360 300" style="width:100%;">
<rect x="0" y="0" width="360" height="300" rx="10" fill="#EAF2FB" stroke="var(--tag-blue)" stroke-width="2"/>
<text x="18" y="34" font-size="20" font-weight="700" fill="#15436e">人工知能 (AI)</text>
<rect x="28" y="56" width="304" height="226" rx="8" fill="#fff" stroke="#9bbfe0"/>
<text x="44" y="84" font-size="19" font-weight="700" fill="#1A6BB0">機械学習</text>
<rect x="56" y="100" width="248" height="172" rx="8" fill="#EAF2FB" stroke="#9bbfe0"/>
<text x="72" y="128" font-size="19" font-weight="700" fill="#1A6BB0">深層学習</text>
<rect x="84" y="144" width="192" height="120" rx="8" fill="var(--accent-soft)" stroke="var(--accent)"/>
<text x="118" y="210" font-size="22" font-weight="800" fill="var(--accent-dark)">生成AI</text>
</svg>
<div style="font-size:20px; color:#555; margin-top:4px;">数理・統計・DS</div>
</div>

<div style="flex:1;">
<div style="font-size:22px; color:#555; margin-bottom:6px;">分類したり、予想したり、処理したり…</div>
<div class="box-info" style="font-size:22px;">
生成AIを使っていなくても、<br>
<b>YouTubeのおすすめ</b>や、<br>
<b>運転支援・お掃除ロボット</b>や、<br>
<b>今日のスーパーの仕入れ管理</b>など、<br>
様々なところで利用されている
</div>
<div style="display:flex; gap:10px; margin-top:10px;">
<span class="tag tag-soft" style="font-size:20px;">機械学習</span>
<span class="tag tag-soft" style="font-size:20px;">深層学習</span>
</div>
<div style="font-size:20px; color:#666; margin-top:6px;">信頼性・再現性・速度/費用・適合性…</div>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:10px;">日常はすでに、<b>AIアルゴリズムに囲まれて、便利になっている</b></div>

<!--
- 理系や民間のデータ部門ではAIはもう当たり前。YouTubeのおすすめや運転支援、スーパーの仕入れ管理など、生成AIを使っていなくても私たちはAIアルゴリズムに囲まれています。
-->

---

<div class="page-title">深層学習・機械学習</div>

# <span style="color:var(--accent-dark)">機械学習/深層学習</span>で実現すること

<div class="cardrow" style="margin-top:6px;">
<div class="pcard">
<div class="pc-h">① 売上・需要予測</div>
<p style="font-size:21px;">既存データから将来の数値を予測<br>→ 在庫最適化やリソース配置の変更</p>
</div>
<div class="pcard">
<div class="pc-h">② 異常・故障検知</div>
<p style="font-size:21px;">リアルタイムで異常パターンを検知<br>→ 重大なトラブルを未然に防止</p>
</div>
</div>

<div class="cardrow" style="margin-top:10px;">
<div class="pcard">
<div class="pc-h">③ データの可視化・分類</div>
<p style="font-size:21px;">複雑なデータをグループ化・可視化<br>→ 新たな知見の発見を支援</p>
</div>
<div class="pcard">
<div class="pc-h">④ 強化学習と自動化</div>
<p style="font-size:21px;">試行錯誤から最適な行動パターンを学習<br>→ 複雑な制御や判断を自動化</p>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px;">統計や機械学習は、<b>未来</b>や<b>全体</b>を知ることができない人間が、<b>世界を理解したり、作業を実行するために</b>編み出した技術</div>

<div class="cite pip-safe" style="position:absolute; top:64px; right:40px;">※第7回のプロンプトでこの絵は作ってます</div>

<!--
- 機械学習・深層学習で実現できること。売上予測、異常検知、可視化・分類、強化学習による自動化。これらは未来や全体を見通せない人間が世界を理解するために編み出した技術です。
-->

---

<div class="page-title">これからの考え方の一例</div>

# これからの考え方の一例

<div class="lead-note"><b>データの流れを整理し、即時的・探索的に結果を出す (例：セブンイレブン)</b></div>

<div class="flowrow" style="gap:14px; margin-top:6px;">
<div style="font-size:21px; text-align:center; border:2px solid #aaa; border-radius:10px; padding:10px 14px;"><b>日常的な</b><br><b>システムの出力</b></div>
<div class="farrow">→</div>
<div style="font-size:21px; text-align:center; border:2px solid var(--tag-blue); border-radius:10px; padding:10px 14px; background:#EAF2FB;"><b>機械学習・深層学習・可視化</b>に<br>向いたデータウェアハウス</div>
<div class="farrow">→</div>
<div style="font-size:21px; text-align:center; border:2px solid var(--accent); border-radius:10px; padding:10px 14px; background:var(--accent-soft);"><b>生成AIと対話的に</b><br><b>分析 (AI×BI)</b></div>
</div>

<div style="display:flex; gap:14px; align-items:center; margin-top:6px;">
<div style="flex:0 0 auto; font-size:20px; text-align:center; color:#555;">↓<br><b>ダッシュボードで可視化</b></div>
<div class="box-info" style="flex:1; font-size:21px;">生成AI自体は<b>生データを分析しない</b><br><b>信頼できるアルゴリズムを個別に生成し、実行し、</b>出てきた結果を<b>解析する</b></div>
</div>

<div class="lead-note" style="margin-top:8px;"><b>表にできないようなデータの分析も出来るかも…？</b></div>
<div class="flowrow" style="gap:14px; margin-top:2px;">
<div style="font-size:20px; text-align:center; border:2px solid #888; border-radius:10px; padding:8px 14px;"><b>研究データの入力</b></div>
<div class="farrow">→</div>
<div style="font-size:20px; text-align:center; border:2px solid #888; border-radius:10px; padding:8px 14px;"><b>データレイク (Box)</b></div>
<div class="farrow">→</div>
<div style="font-size:20px; text-align:center; border:2px solid var(--accent); border-radius:10px; padding:8px 14px; background:var(--accent-soft);"><b>生成AIで知見を発掘</b></div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px;">生成AIは、<b>分析を日常化する</b>手段の一つである<br>= あなたの知りたいことを<b>探索する際の味方</b>になる</div>

<!--
- セブンイレブンのように、日常のシステム出力をデータウェアハウスに整理し、生成AIと対話的に分析する流れ。生成AI自体は生データを分析せず、信頼できるアルゴリズムを生成・実行して結果を解析します。
-->

---

<div class="page-title">今、起きつつある変化</div>

# 今、起きつつある変化

<div class="box-warn" style="margin-top:8px;">これまでは、<b>分析のスキル</b>が必須だった<br>= プロがいないと手足も出なかった</div>

<div style="display:grid; grid-template-columns:auto 1fr; gap:12px 18px; align-items:center; margin-top:12px;">

<span class="tag tag-soft" style="font-size:22px;">生成AIによる<b>伴走</b></span>
<div class="box-info" style="font-size:22px; margin:0;">AIが<b>分析を提案</b>したり、<b>手法と背景</b>を教えてくれたりする</div>

<span class="tag tag-soft" style="font-size:22px;">生成AIによる分析の<b>自動化</b></span>
<div class="box-info" style="font-size:22px; margin:0;"><b>Google Colab</b>や<b>Spreadsheet</b>で<b>分析が自動的</b>に進む (AI agent化)</div>

<span class="tag tag-soft" style="font-size:22px;">分析の<b>道具の広がり</b></span>
<div class="box-info" style="font-size:22px; margin:0;"><b>SpreadsheetにAI関数</b>がついたり、<b>個人でもPaaS/API</b>を読み出せる</div>

</div>

<div class="box-accent pip-safe" style="margin-top:12px;">一方、日常的な部分・仕事のレベル感では、<b>出来ることが増えた</b><br><b>(基礎の理解と結果を判断出来る力がますます必要に…)</b></div>

<!--
- 今起きている変化。これまでは分析スキルが必須でプロがいないと何もできなかった。今は生成AIが伴走し、分析を自動化し、道具も広がっている。一方で基礎の理解と結果を判断する力はますます必要になります。
-->

---

<div class="page-title">今日紹介する手法 ①</div>

# 今日紹介する手法 ①

<div class="subhead"><b>SpreadsheetのAI関数</b>を用いる<span class="tag tag-soft" style="font-size:20px;">非構造化</span><span class="tag tag-soft" style="font-size:20px;">半構造化</span></div>

<div style="font-size:26px; font-weight:800; color:var(--accent-dark); margin:6px 0;">= AI(“プロンプト”, “AIが参照するデータ範囲”)</div>

<div style="display:grid; grid-template-columns:auto auto 1fr; gap:8px 14px; align-items:center; font-size:22px; margin:8px 0;">
<div style="border:1.5px solid #bbb; border-radius:6px; padding:4px 16px; background:#fff;">まいど</div>
<div style="color:var(--accent); font-weight:800;">→ AI("関西弁に翻訳して下さい", B5)</div>
<div style="color:#555;">→ <b>こんにちは</b></div>
</div>

<div class="lead-note">プロンプトによって、セルの処理を変える事ができる</div>

<div class="cite">cf. GOOGLETRANSLATE(テキスト, [ソース言語, ターゲット言語])</div>

<div class="box-warn pip-safe" style="margin-top:12px;">
<div style="font-weight:800; color:#C0182B; margin-bottom:2px;">注意点</div>
<b>研究などでデータを合成したり、分析しないこと</b><br>
<b>信頼性にはまだ難あり (結果の確認を行うこと)</b><br>
<b>普通に関数を優先</b>(例：乱数発生、COUNTA、XLOOKUP等)
</div>

<!--
- 今日紹介する手法の1つ目、SpreadsheetのAI関数。プロンプトと参照データ範囲を渡すと、セルごとに処理を変えられます。ただし信頼性にはまだ難があるので、研究データの合成には使わず、普通の関数を優先してください。
-->

---

<div class="page-title">今日紹介する手法 ①</div>

# <span style="color:var(--accent-dark)">SpreadsheetのAI関数</span>を活用する

<table style="width:100%; border-collapse:collapse; font-size:19px; margin-top:6px;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:28%;">用途</th>
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:48%;">プロンプト例</th>
<th style="padding:6px 10px; text-align:left; border:1px solid #fff; width:24%;">結果の例</th>
</tr>
</thead>
<tbody>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">① 翻訳・トーン変換</td><td style="padding:5px 10px; border:1px solid #d8dde6;">英語に翻訳して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">Hi</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">② 逐語訳</td><td style="padding:5px 10px; border:1px solid #d8dde6;">省略なく翻訳を行って下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">(全文出てくる)</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">③ 情報の抽出(固有表現)</td><td style="padding:5px 10px; border:1px solid #d8dde6;">個人名があれば抜き出し、なければ◯</td><td style="padding:5px 10px; border:1px solid #d8dde6;">山田 太郎/◯</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">④ 情報の抽出(条件付)</td><td style="padding:5px 10px; border:1px solid #d8dde6;">難しい単語があり、かつ前に出ていなければ抜き出し、なければ◯</td><td style="padding:5px 10px; border:1px solid #d8dde6;">Transformer</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">⑤ 分類・感情分析</td><td style="padding:5px 10px; border:1px solid #d8dde6;">問い合わせ内容を【要望、質問、クレーム】に分類して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">質問</td></tr>
<tr><td style="padding:5px 10px; border:1px solid #d8dde6;">⑥ データの整形</td><td style="padding:5px 10px; border:1px solid #d8dde6;">住所から都道府県名だけを抜き出して / フリガナに変換して</td><td style="padding:5px 10px; border:1px solid #d8dde6;">東京都</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:5px 10px; border:1px solid #d8dde6;">⑦ 複数セルの処理</td><td style="padding:5px 10px; border:1px solid #d8dde6;">与えた範囲を一言で要約して下さい</td><td style="padding:5px 10px; border:1px solid #d8dde6;">(複数セル出力)</td></tr>
</tbody>
</table>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center;"><b>表を処理する・表で戻す・一覧に対応する</b>場合にとても便利</div>

<!--
- AI関数の用途を7パターンで一覧。翻訳・抽出・分類・整形・複数セル処理まで、表を相手にする作業がとても便利になる。
-->

---

<div class="page-title">今日紹介する手法 ②</div>

# <span style="color:var(--accent-dark)">SpreadsheetのGemini機能</span>を用いる

<div class="subhead"><span class="tag tag-soft">構造化</span><span class="tag tag-soft">半構造化</span></div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:4px;">
<img src="./src/fig14b-gemini.png" alt="Geminiへのプロンプト" style="height:250px; border:1px solid #e3e8f0; border-radius:8px;">
<img src="./src/fig14c-chart.png" alt="Geminiが生成した棒グラフ" style="height:250px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-accent" style="align-self:center; text-align:center; font-weight:800; flex:0 0 150px;">グラフや表を<br>対話的に作れる！</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px;"><b>研究などでデータを合成したり、分析しないこと</b>／<b>信頼性にはまだ難あり (結果の確認を行うこと)</b>／<b>関数/スライサー/ピボットテーブルが優先</b></div>

<!--
- ②はSheetsのGemini機能。自然言語で頼むとグラフや表を対話的に作ってくれる。ただし合成・分析の依存は避け、結果確認と従来関数の優先を。
-->

---

<div class="page-title">その他</div>

# <span style="color:var(--accent-dark)">Colabの機能</span>を用いて分析する

<div class="subhead"><span class="tag tag-soft">構造化</span></div>

<div style="display:flex; gap:16px; align-items:flex-start; margin-top:2px;">
<img src="./src/fig15a-colab-prompt.png" alt="Colabへの指示" style="height:300px; border:1px solid #e3e8f0; border-radius:8px;">
<img src="./src/fig15b-colab-code.png" alt="Colabが生成したコード" style="height:300px; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="display:flex; gap:24px; margin-top:10px; font-size:26px; font-weight:800;">
<span style="color:var(--accent-dark);">グラフや表を対話的に作れる！</span>
<span style="color:var(--accent);">機械学習なども試せる！</span>
</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><b>AIまかせに、絶対にしないこと → 結構間違う</b><br>自分で探索的に仮説を立てて、モデルを試して、考える経験は必要</div>

<!--
- その他としてColab。グラフ・表だけでなく機械学習まで試せる。ただしAI任せは禁物で、自分で仮説を立て試し考える経験が必要。
-->

---

<div class="page-title">今後の予定</div>

# 今後の予定

<div class="box-warn" style="margin-bottom:12px;">すみません、実は、<b>現時点ではまだ機能が開放されていません</b>…<br>今年1年間で機能強化が行われ、学校では利用可能に [出典]</div>

<div class="goal-box" style="font-size:23px; padding:14px 26px; margin:6px 0;">
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Sheets:</b> データの整理や分析をAIがサポート</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Gmail:</b> メールの下書き作成、スレッド/メールの要約、AIによる返信案の提示</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Google Workspace Studio：</b> 「誰でも数分でAIエージェント・フローを作れる」開発</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Docs:</b> テンプレに沿った文章を作成</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Slides:</b> テキストからスライド用のオリジナル画像を生成</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Forms:</b> 質問項目の提案や回答のAI要約</div>
<div style="margin:5px 0;"><b style="color:var(--accent-dark);">Gemini in Vids:</b> テキスト指示や既存スライドから、洗練された動画を自動生成</div>
</div>

<div class="lead-note pip-safe" style="text-align:right; color:var(--accent-dark);">→ <b>千葉大でも使えるようになるかも？</b></div>

<!--
- 今後の予定。Sheets/Gmail/Docs/Slides/Forms/Vids等にGeminiが入り、Workspace Studioでエージェントも作れる。今は未開放だが今年強化され学校で使えるように。
-->

---

<div class="page-title">だったら、作ればよい！</div>

# だったら、作ればよい！

<div class="lead-note"><b>AI駆動型開発： AIでコードを作り、動くものを作れる</b> 例</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="stepbox" style="margin:4px 0;">
<div class="st" style="font-size:23px; margin:3px 0;">① AIの必要性を検討する</div>
<div class="st" style="font-size:23px; margin:3px 0;">② フローを描き、入力を決める</div>
<div class="st" style="font-size:23px; margin:3px 0;">③ 評価し、出力の精度を理解する</div>
<div class="st" style="font-size:23px; margin:3px 0;">④ 実際にAIでプロトタイピングする</div>
<div class="st" style="font-size:23px; margin:3px 0;">⑤ 機能するコードを出力し、使う形に変換する</div>
</div>

</div>
<img src="./src/fig17-genai-dialog.png" alt="作成したアプリの例" style="width:300px; border:1px solid #e3e8f0; border-radius:8px; margin-top:6px;">
</div>

<div class="box-accent" style="margin-top:10px;"><b>今回作成したもの：”ジェネリックAI関数” = GenAI関数</b><br>① Google App Scriptのコード (GAS)を書く　② APIを取得する (AIに指示をだす命令文)　③ 関数を実装して動かす　※Excel マクロの強化版</div>

<div class="takeaway pip-safe" style="margin-top:10px;">生成AI = 創造性を磨く道具：作るマインドをぜひ！</div>

<!--
- 機能が無いなら作ればよい。AI駆動開発の5ステップで、今回はGAS+APIで"GenAI関数"を自作。生成AIは創造性を磨く道具、作るマインドを。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px 24px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="margin:0;"><b>Session 1：</b><br><span style="margin-left:1.2em;">AIが様々な分析に活用されていることを知る</span></div>

<div style="font-size:30px; font-weight:800; padding-top:8px;">目標<br>＋<br>まとめ</div>
<div class="goal-box" style="margin:0; font-size:23px; padding:14px 26px;">
<div style="margin:4px 0;"><b style="color:var(--accent-dark);">AIが様々な分析に活用されていることを知る</b></div>
<div style="margin:2px 0 2px 1.3em;">・機械学習 × 生成AI　・技術の民主化が起こりつつある</div>
<div style="margin:8px 0 4px;"><b style="color:var(--accent-dark);">データへの分析応用例を知る</b></div>
<div style="margin:2px 0 2px 1.3em;">・構造化データ：Colabo ・ Gemini for WS　・その他：AI関数(Gemini/Copilot)</div>
<div style="margin:8px 0 4px;"><b style="color:var(--accent-dark);">道具を作るマインドを持つ</b></div>
<div style="margin:2px 0 2px 1.3em;">・機能を定義することでプログラムを創れる</div>
</div>

</div>

<!--
- Session 1の振り返り。目的＝AIが分析に活用されていることを知る。3つの目標（応用を知る／応用例を知る／作るマインド）を確認。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="text-align:center; font-size:26px; line-height:1.7;">
<div style="color:var(--accent-dark); font-weight:700;">第8回： Google SpreadsheetからAIで分析する</div>
<div style="color:var(--muted);">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:22px auto 12px; font-size:28px;"><b>Session 2：</b><br><span style="margin-left:1.2em;">Google spreadsheetで情報を分析する</span></div>

<div style="text-align:center; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2に入ります。Google spreadsheetで情報を実際に分析する体験パートです。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# <span style="color:var(--accent-dark)">GENAI (ジェネリックAI関数)</span>で分析を体験してみよう

<div class="stepbox" style="margin-top:6px;">
<div class="st" style="font-size:23px; margin:4px 0;">① こちらのスプレッドシートに1人1シート作成し、Spreadsheetに分析したいデータを入力してみましょう。<br><span style="margin-left:1.2em; color:#8a4b00;">注意：機密情報/著作物を含むデータは使用しないこと　※著作物の一部の場合は引用</span></div>
<div class="st" style="font-size:23px; margin:4px 0;">② GENAI関数を読み出して分析を試して下さい。</div>
<div class="st" style="font-size:23px; margin:4px 0;">③ 便利な方法をぜひ、見つけて下さい。ダミーデータには、Geminiを！</div>
</div>

<div style="display:flex; gap:16px; align-items:center; margin-top:8px;">
<img src="./src/fig20-genai-cell.png" alt="GENAI関数のセル例" style="height:150px; border:1px solid #e3e8f0; border-radius:8px;">
<div style="font-family:monospace; font-size:22px;">= GENAI(“プロンプト”, “AIが参照するデータ範囲”)</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px;">オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

<!--
- ワーク。各自シートを作りデータを入れ、GENAI関数で分析を試す。機密・著作物は使わない。困ったらSlidoや手を挙げて。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px 24px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="margin:0;"><b>Session 2：</b><br><span style="margin-left:1.2em;">Google spreadsheetで情報を分析する</span></div>

<div style="font-size:30px; font-weight:800; padding-top:8px;">目標<br>＋<br>まとめ</div>
<div class="goal-box" style="margin:0; font-size:25px; padding:18px 28px;">
<div style="margin:8px 0;">・半構造化データから役立つ情報を引き出せた</div>
<div style="margin:8px 0;">・<u>構造化データ</u>の近未来の分析を体験できた</div>
</div>

</div>

<!--
- Session 2の振り返り。目的＝spreadsheetで情報を分析する。半構造化データから情報を引き出し、構造化データの近未来の分析を体験できた。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="text-align:center; font-size:26px; line-height:1.7;">
<div style="color:var(--accent-dark); font-weight:700;">2025年度 第8回： Google SpreadsheetからAIで分析する</div>
<div style="color:var(--muted);">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:22px auto 12px; font-size:28px;"><b>Session 3：</b><br><span style="margin-left:1.2em;">議論：気づきのシェア & 振り返り</span></div>

<div style="text-align:center; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- 最後のSession 3。議論・座談会で、気づきをシェアし全体を振り返ります。
-->

---

<div class="page-title">Session 3の進め方</div>

# 議論・座談会　<span class="tag tag-accent" style="font-size:22px;">Slidoで進めます</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">

<div style="flex:1.4;">
<div class="goal-box" style="font-size:23px; padding:14px 24px; margin:4px 0;">
<div style="margin:8px 0;">- <b>実際に分析をしてみた印象</b>を教えてください。上手くいった点と間違っていた点はどこでしたか。</div>
<div style="margin:8px 0;">- <b>今日面白かったこと、気付き</b>は何でしたか。</div>
<div style="margin:8px 0;">- <b>来年度、生成AIに関してどんな話</b>を聞きたいですか。また、<b>各回の構成の希望</b>などあれば、お知らせ下さい。</div>
</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; font-size:22px; margin-bottom:4px;">スマホから</div>
<img src="./src/fig23a-qr-sp.png" alt="SlidoのQRコード" style="width:150px; border:1px solid #e3e8f0; border-radius:8px;">
<div style="font-size:19px; margin-top:6px;">方法1 Google検索「Slido」→コード入力<br>方法2 直接リンク</div>
<div style="font-size:20px; font-weight:800; color:var(--accent-dark); margin-top:6px;">ALC-AI1-08</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:8px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br><span style="margin-left:1.2em;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span></div>

<!--
- Session 3は座談会。Slidoで「分析の印象」「今日の気づき」「来年度に聞きたい話・構成の希望」を共有。協力的で建設的な場作りを。
- ※R8年度からは、Slidoの回答から組織名等の機微情報を除き、研究・外部発表にて使います。使用を許諾頂ける方だけ回答下さい。
-->
