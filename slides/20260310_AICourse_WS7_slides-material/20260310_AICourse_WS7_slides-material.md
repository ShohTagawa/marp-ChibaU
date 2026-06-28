---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI体験WS</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 22%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<div class="page-title">開始の前に</div>

<div class="stepbox" style="margin-top:6px;">
<div class="st">① <b>PCを立ち上げ、お持ちの<br>　千葉大学Google Workspaceにログインして下さい</b><br><span style="margin-left:1.4em; color:var(--accent-dark);">→ 学校のGmailが立ち上がる状況ならOKです。</span></div>
<div class="st">② <b>インタラクションツール Slidoにアクセスして下さい</b><br><span style="margin-left:1.4em;">URLを配布したり、質問やアンケートをとったりします</span><br><span style="margin-left:1.4em; color:var(--accent);">※お名前などの個人情報の入力は禁止です</span></div>
</div>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:18px;">
<div style="text-align:center;">
<div style="font-weight:800; font-size:24px; margin-bottom:8px;">スマホから</div>
<img src="./src/fig01-qr.png" alt="Slido QRコード" style="height:130px;">
</div>
<div style="flex:1;">
<div style="font-weight:800; font-size:24px;">PCから</div>
<div style="margin:6px 0;">方法1　Google検索「Slido」→コード入力　<span class="tag tag-accent" style="font-size:20px;">ALC-AI1-07</span></div>
<div style="margin:6px 0;">方法2　直接リンク</div>
<div class="cite" style="margin-top:2px;"><a href="https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F">https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</a></div>
</div>
</div>

<!-- 開始の前に。①各自のPCを立ち上げ、千葉大Google Workspaceにログイン。②インタラクションツールSlidoにアクセス。個人情報の入力は禁止です。 -->

---

<div class="page-title">講師紹介</div>

# <span style="color:var(--accent-dark)">田川　翔</span><span style="font-size:24px; margin-left:14px; color:var(--muted);">たがわ　しょう</span><span class="tag tag-soft" style="font-size:20px; margin-left:14px;">オープンバッジ</span>

<div style="font-size:24px; margin:2px 0 6px;"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター</div>

<div class="box-accent" style="display:inline-block; padding:6px 22px; font-weight:800;">大学教育を企画し、学生と教員を支援する仕事</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">①元々は理学の人</div>
<div style="text-align:center;"><img src="./src/fig02a-magma.png" alt="マグマオーシャン研究" style="height:150px;"></div>
<div class="cite" style="margin-top:6px;">Tagawa et al. (2021) <i>Nat. Commun.</i></div>
</div>
<div class="pcard">
<div class="pc-h">②色々な経験</div>
<div style="text-align:center;"><img src="./src/fig02b-plane.png" alt="民間企業での経験" style="height:78px;"></div>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">③大学を学びやすく!</div>
<div style="text-align:center;"><img src="./src/fig02c-teach.png" alt="大学で教える" style="height:115px;"></div>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
<li>現在、<i>Teaching with AI</i>を翻訳・出版準備中</li>
</ul>
</div>
</div>

<!-- 講師紹介。田川翔です。元々は理学（マグマオーシャン研究、Nat. Commun.）出身で、ICT支援や大規模オンライン授業、民間企業など色々な経験を経て、今は大学を学びやすくする仕事をしています。 -->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:14px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">2025年度 第7回： 生成AIを使ってスライドを作ってみる</div>
<div style="font-size:25px; color:var(--accent); margin-top:4px;">15-min × 3 sessions</div>
<div style="font-size:24px; margin-top:22px;">国際未来教育基幹 田川 翔</div>
</div>

<!-- タイトルです。2025年度第7回、生成AIを使ってスライドを作ってみる。15分×3セッションで進めます。 -->

---

<div class="page-title">ワークショップの全体構成</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig04-brain.png" alt="連続WSのイメージ" style="height:230px;">
<div class="box-info" style="flex:1; font-size:21px; line-height:1.6;">
第1回　生成AIの仕組みを体験する<br>
第2回　Noetebook LMで情報を理解する<br>
第3回　生成AI利用、どこまではOKで、どこからがアウト？<br>
第4回　AIで絵・グラフを書いてみる<br>
第5回　特別回1 (外部講師登壇予定)<br>
第6回　特別回2 (本学学生登壇予定)<br>
第7回　AIを使ってスライドを作ってみる<br>
第8回　Google SpreadsheetからAIで分析する<br>
<span style="color:#15436e;">内容については若干の変更が生じる可能性があります。最新の情報は以下の二次元コードをご参照ください。</span>
</div>
</div>

<div class="flowrow" style="margin-top:18px; justify-content:center;">
<div style="text-align:center;"><div style="font-size:20px; color:var(--muted);">最初の15分</div><div class="fbox" style="color:var(--accent); border:3px solid var(--accent); font-size:30px;">講義</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div style="font-size:20px; color:var(--muted);">真ん中の15分</div><div class="fbox" style="color:var(--accent); border:3px solid var(--accent); background:var(--accent-soft); font-size:30px;">体験</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div style="font-size:20px; color:var(--muted);">最後の15分</div><div class="fbox" style="color:var(--accent); border:3px solid var(--accent); font-size:30px;">議論・座談会</div></div>
</div>

<div class="box-warn pip-safe" style="text-align:center; margin-top:14px;">演習・議論付き  (オンラインの皆様もぜひ！)　詳細は<b>moodle</b>で！</div>

<!-- ワークショップの全体構成です。連続WSの第7回。各回は「講義→体験→議論・座談会」の3部15分ずつ。演習・議論付きで、オンラインの皆様もぜひご参加ください。詳細はmoodleで。 -->

---

<div class="page-title">今回の構成</div>

<table style="width:100%; border-collapse:separate; border-spacing:0 12px; font-size:23px;">
<tr>
<td style="width:200px; vertical-align:top;">
<div style="font-size:19px; color:var(--muted);">最初の15分</div>
<div class="fbox" style="color:var(--accent); border:3px solid var(--accent); font-size:28px; display:block; text-align:center; padding:8px 0;">講義</div>
</td>
<td style="vertical-align:middle; padding-left:18px;">- プレゼンテーションの様々な準備に生成AIを使う実践的方法を理解できる。</td>
</tr>
<tr>
<td style="vertical-align:top;">
<div style="font-size:19px; color:var(--muted);">真ん中の15分</div>
<div class="fbox" style="color:var(--accent); border:3px solid var(--accent); background:var(--accent-soft); font-size:28px; display:block; text-align:center; padding:8px 0;">体験</div>
</td>
<td style="vertical-align:middle; padding-left:18px;">- Canvas機能を応用し、プレゼンテーションを作成してみる。</td>
</tr>
<tr>
<td style="vertical-align:top;">
<div style="font-size:19px; color:var(--muted);">最後の15分</div>
<div class="fbox" style="color:var(--accent); border:3px solid var(--accent); font-size:28px; display:block; text-align:center; padding:8px 0;">議論・座談会</div>
</td>
<td style="vertical-align:middle; padding-left:18px;">
- 使用してみて気がついたこと (利点と限界)<br>
- CanvasやGemをどう活用したいですか。<br>
- 今日面白かったこと、気付きは何でしたか。
</td>
</tr>
</table>

<!-- 今回の構成です。講義ではプレゼン準備への生成AI活用法を理解、体験ではCanvasでプレゼンを作成、議論ではCanvasやGemの活用について振り返ります。 -->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:10px;">
<div style="font-size:28px; font-weight:800; color:var(--accent-dark);">2025年度 第7回：生成AIを使ってスライドを作ってみる</div>
<div style="font-size:24px; color:var(--accent); margin-top:2px;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:880px; margin:18px auto 0; font-size:26px;">
<b>Session 1：</b><br>
<span style="margin-left:1.2em;">講義：生成AIを発表準備に使う際のアイデアを知る</span>
</div>

<div style="text-align:center; font-size:24px; margin-top:18px;">国際未来教育基幹 田川 翔</div>

<!-- ここからSession 1。講義「生成AIを発表準備に使う際のアイデアを知る」です。 -->

---

<div class="page-title">Session 1の目的・到達目標</div>

<div class="box-accent" style="font-size:26px; margin-top:8px;">
<b>Session 1：</b><br>
<span style="margin-left:1.2em;">講義：生成AIを発表準備に使う際のアイデアを知る</span>
</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:24px;">
<div style="font-size:34px; font-weight:800; color:var(--accent-dark); width:110px;">目的</div>
<div class="box-info" style="flex:1; font-size:26px;">講義：生成AIを発表準備に使う際のアイデアを知る</div>
</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:18px;">
<div style="font-size:34px; font-weight:800; color:var(--accent-dark); width:110px;">目標</div>
<div class="stepbox" style="flex:1; margin:0;">
<div class="st">・ 作業フローにAIを活用する考え方を知る</div>
<div class="st">・ スライド作成に利用できる道具を知る</div>
<div class="st">・ 発表準備に使えそうな範囲 (現時点)</div>
</div>
</div>

<!-- Session 1の目的・到達目標です。目的は発表準備への生成AI活用アイデアを知ること。目標は、作業フローへのAI活用の考え方、利用できる道具、そして現時点で使えそうな範囲を知ることです。 -->

---

<div class="page-title">今の最先端は？</div>

<div style="font-size:27px; margin:2px 0 10px;">スライド作成の自動化は、<b style="color:var(--accent);">1つのトレンド</b>になっている</div>

<table style="width:100%; border-collapse:collapse; font-size:20px; line-height:1.45;">
<tr>
<td style="width:80px;"></td>
<td style="text-align:center; padding:6px; background:#EEF2F7; font-weight:800; border-radius:8px 8px 0 0;">Chatパラダイム</td>
<td style="text-align:center; padding:6px; background:#FDF6E3; font-weight:800;">Toolパラダイム</td>
<td style="text-align:center; padding:6px; background:#FBE4EA; font-weight:800; position:relative;">Agentパラダイム<span class="tag tag-accent" style="position:absolute; top:-16px; right:30px; font-size:16px; padding:1px 10px;">なう</span></td>
</tr>
<tr>
<td style="font-weight:800; color:var(--muted);">変化</td>
<td style="text-align:center; padding:6px;">AIと対話</td>
<td style="text-align:center; padding:6px;">AIが案・部品を作成</td>
<td style="text-align:center; padding:6px;">AIが作成を実行</td>
</tr>
<tr>
<td style="font-weight:800; color:var(--muted);">使い方</td>
<td style="padding:8px; background:#EEF2F7; text-align:center;">情報収集 DeepResearch<br>発表表現のアイデア出し<br>発表・資料作成のコツ<br>誤字・分かりにくい点の確認</td>
<td style="padding:8px; background:#FDF6E3; text-align:center;">スライドの案の作成<br>発表資料の図の生成<br>構成・原稿の作成支援</td>
<td style="padding:8px; background:#FBE4EA; text-align:center;">対話によるスライドの完成<br>スライド自体の作り込み<br>デザイン・表現の一貫性担保<br>作成ワークフローの実現</td>
</tr>
<tr>
<td style="font-weight:800; color:var(--muted);">例</td>
<td style="padding:8px; background:#EEF2F7; text-align:center;">こうしたらどうですか？<br>→ 人は作成者</td>
<td style="padding:8px; background:#FDF6E3; text-align:center;">スライド案/図を作成する<br>→ 人は編集者 (“ガチャ”)</td>
<td style="padding:8px; background:#FBE4EA; text-align:center;">スライドを自然言語で指示する<br><b style="color:var(--accent);">→人とAIで協働作成</b></td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:21px;"><b>トレンド：</b> 2026年に入り、AIによる「補助」から<b>「自律的・協働的な生成」</b>へ　／　<b>限界：</b>細かい修正や作成(例：スライドレベルの作成)はまだ難しい</div>

<!-- 今の最先端です。スライド作成の自動化は1つのトレンドになっています。Chatパラダイム（AIと対話）→Toolパラダイム（AIが部品を作成）→Agentパラダイム（AIが作成を実行）と移り変わり、今はAgentパラダイムへ。2026年に入り「補助」から「自律的・協働的な生成」へ。ただし細かい修正はまだ難しい。 -->

---

<div class="page-title">今の最先端は？</div>

<table style="width:100%; border-collapse:collapse; font-size:19px; line-height:1.3;">
<tr>
<td style="width:96px;"></td>
<td style="width:38%;"></td>
<td style="text-align:center; font-weight:800; background:#EAF2FB; padding:5px; border-radius:8px 8px 0 0;">利点</td>
<td style="text-align:center; font-weight:800; background:#FCEAEC; padding:5px;">欠点</td>
</tr>
<tr>
<td rowspan="2" style="font-weight:800; color:var(--muted); writing-mode:vertical-rl; text-align:center;">外部ツール</td>
<td style="padding:6px;"><div class="fbox" style="font-size:23px; padding:4px 16px; border:none; background:#FDF6E3; display:block; text-align:center;"><b>Gamma</b>を用いたデモ<br><span style="font-size:17px; font-weight:400;">(当日、実演予定 / プロンプト)</span></div></td>
<td rowspan="2" style="padding:5px 8px; background:#EAF2FB;">情報の質が高い<br>細かく作り込める<br>その場で作れる<br>対話的に作れる</td>
<td rowspan="2" style="padding:5px 8px; background:#FCEAEC;">値段が高い<br>機密情報の取扱い<br>100%は難しい<br>学問使用が難しいかも</td>
</tr>
<tr><td style="padding:6px;"><div class="fbox" style="font-size:21px; padding:4px 16px; border:none; background:#FDF6E3; display:block; text-align:center;"><b>Canva / Genspark etc</b></div></td></tr>
<tr>
<td style="font-weight:800; color:var(--muted);">プロンプト</td>
<td style="padding:6px;"><div class="fbox" style="font-size:21px; padding:4px 16px; border:none; background:#FBE4EA; display:block; text-align:center;"><b>まじん式</b></div></td>
<td style="padding:5px 8px; background:#EAF2FB;">コード固定・データ可変<br>GASで完結・安全</td>
<td style="padding:5px 8px; background:#FCEAEC;">図・グラフの挙動に癖</td>
</tr>
<tr>
<td rowspan="2" style="font-weight:800; color:var(--muted); writing-mode:vertical-rl; text-align:center;">Coding</td>
<td style="padding:6px;"><div class="fbox" style="font-size:21px; padding:4px 16px; border:none; background:#E6F4EA; display:block; text-align:center;"><b>Marp + Antigravity/Copilot</b></div></td>
<td rowspan="2" style="padding:5px 8px; background:#EAF2FB;">文字で済む時早い<br>再現性高く効率的<br>幻覚が少ない</td>
<td rowspan="2" style="padding:5px 8px; background:#FCEAEC;">IDEや環境が必要<br>コーディング知識<br>機密情報の扱い</td>
</tr>
<tr><td style="padding:6px;"><div class="fbox" style="font-size:20px; padding:4px 16px; border:none; background:#E6F4EA; display:block; text-align:center;"><b>Calude Code/Gemini CLI</b><br><b>＋ ライブラリ</b> <span style="font-size:16px; font-weight:400;">(python-pptxなど)</span></div></td></tr>
<tr>
<td style="font-weight:800; color:var(--muted);">利用可能</td>
<td style="padding:6px;"><div class="fbox" style="font-size:21px; padding:4px 16px; border:none; background:#E6F4EA; display:block; text-align:center;"><b>NotebookLM + プロンプト</b></div></td>
<td style="padding:5px 8px; background:#EAF2FB;">説明の質が高い</td>
<td style="padding:5px 8px; background:#FCEAEC;">編集できない</td>
</tr>
</table>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:21px;">大学は機密情報・コストの問題から、外部の生成AIプロダクトを使うのは難しい<br><b>→ では、学校契約のGeminiでどこまでプレゼン支援が、できるのか</b></div>

<!-- 道具の比較です。外部ツール（Gamma、Canva等）は質が高いが値段や機密情報に難。プロンプト（まじん式）はコード固定・データ可変で安全。Coding（Marp+Antigravity、Claude Code/Gemini CLI）は再現性高く幻覚が少ない。NotebookLMは説明の質が高いが編集できない。大学は機密情報・コストから外部プロダクトが難しい。では学校契約のGeminiでどこまでできるか。 -->

---

<div class="page-title">今日、伝えたいこと</div>

<div style="text-align:center; font-size:30px; margin:6px 0 18px;">学校契約のGeminiでどこまでプレゼン支援が、できるのか</div>

<div style="display:flex; flex-direction:column; gap:16px;">
<div style="display:flex; align-items:center; gap:28px;">
<div style="width:360px; text-align:center; font-size:26px; font-weight:800; background:#FCEFC7; border-radius:14px; padding:16px 0;">Human Orchestration</div>
<div style="flex:1; font-size:24px;">AIと協働する<b>ワークフロー</b>を組み立て、AIを道具に作業できる。</div>
</div>
<div style="display:flex; align-items:center; gap:28px;">
<div style="width:360px; text-align:center; font-size:26px; font-weight:800; background:#FBE4EA; border-radius:14px; padding:16px 0;">Canvas</div>
<div style="flex:1; font-size:24px;">Geminiの機能である、<b>Canvas</b>を使いこなす事ができる。</div>
</div>
<div style="display:flex; align-items:center; gap:28px;">
<div style="width:360px; text-align:center; font-size:26px; font-weight:800; background:#D7EBD9; border-radius:14px; padding:16px 0;">Gemを使用したトライアル</div>
<div style="flex:1; font-size:24px;">Gemを用いてスライドとプロンプトを作成し、結果を評価できる。</div>
</div>
</div>

<!-- 今日伝えたいことです。学校契約のGeminiでどこまでプレゼン支援ができるのか。1つ目はHuman Orchestration、AIと協働するワークフローを組み立てること。2つ目はGeminiの機能Canvasを使いこなすこと。3つ目はGemを使ってスライドとプロンプトを作り評価することです。 -->

---

<div class="page-title">Human Orchestration</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div style="margin:6px 0;"><b style="font-size:25px;">エージェント</b><br><span style="color:var(--muted);">目的をもって行動する存在</span></div>

<div style="margin:14px 0;"><b style="font-size:25px; color:var(--accent-dark);">AI エージェント</b><br><span class="box-info" style="display:block; margin-top:4px; font-size:21px;">設定された目標に対して、自動的にタスクを決定しツールを用いて動作するAIシステム</span></div>

<div style="margin:14px 0;"><b style="font-size:25px; color:var(--accent-dark);">オーケストレーション</b><br><span style="color:var(--muted);">タスクを組み合わせ統括する仕組み</span></div>

<div style="margin:14px 0;"><b style="font-size:25px; color:var(--accent-dark);">ヒューマン・イン・ザ・ループ(HITL)</b><br><span style="color:var(--muted);">AIに人が介入し精度を上げる仕組み</span></div>

</div>
<div style="flex:0 0 540px; text-align:center;">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark); margin-bottom:4px;">ヒューマン・”オン”・ザ・ループ</div>
<img src="./src/fig11-orchestra.png" alt="オーケストラの比喩" style="height:300px;">
</div>
</div>

<div class="cite" style="position:absolute; bottom:18px; left:30px;">Geminiで作成 2026/3/5</div>

<!-- Human Orchestrationについて。エージェントとは目的をもって行動する存在。AIエージェントは目標に対し自動でタスクを決定しツールを使うAIシステム。それらを組み合わせ統括するのがオーケストレーション。人が介入し精度を上げるのがHITL。人がループの上に立って指揮する、ヒューマン・オン・ザ・ループのイメージです。 -->

---

<div class="page-title">どこにAIは役立ちそう？</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin:2px 0 6px;">スライド先行 <span style="font-size:20px; font-weight:400; color:var(--muted);">(探索的)</span></div>

<div class="flowrow" style="gap:10px; margin:6px 0; font-size:18px;">
<div style="background:#EEF2F7; border-radius:8px; padding:8px 12px; width:160px; text-align:center;">最も伝えたいこと/終了後の状態を決める</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="display:flex; flex-direction:column; gap:6px;">
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:170px; text-align:center;">スライドの流れを設定する</div>
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:170px; text-align:center;">コンテキストを設定する (絵・グラフ)</div>
</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="background:#EEF2F7; border-radius:8px; padding:8px 12px; width:140px; text-align:center;">スライドを整える</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="background:#EEF2F7; border-radius:8px; padding:8px 12px; width:150px; text-align:center;">一回音読し、原稿を作る</div>
</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin:14px 0 6px;">テキスト先行 <span style="font-size:20px; font-weight:400; color:var(--muted);">(よく知っている)</span></div>

<div class="flowrow" style="gap:10px; margin:6px 0; font-size:18px;">
<div style="background:#EEF2F7; border-radius:8px; padding:8px 12px; width:160px; text-align:center;">最も伝えたいこと/終了後の状態を決める</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="display:flex; flex-direction:column; gap:6px;">
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:170px; text-align:center;">箇条書きでシナリオを立てる</div>
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:170px; text-align:center;">コンテキストの資料を集める</div>
</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="display:flex; flex-direction:column; gap:6px;">
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:140px; text-align:center;">スライドを作る</div>
<div style="background:#EEF2F7; border-radius:8px; padding:6px 12px; width:140px; text-align:center;">原稿を作る</div>
</div>
<div class="farrow" style="font-size:24px;">▶</div>
<div style="background:#EEF2F7; border-radius:8px; padding:8px 12px; width:150px; text-align:center;">内容を時間まで膨らませる</div>
</div>

<div style="display:flex; align-items:center; gap:16px; margin-top:10px;">
<div style="border:1px solid #ccc; border-radius:8px; padding:6px 14px; font-size:18px;"><b>凡例</b>　<span style="background:#EEF2F7; border-radius:4px; padding:2px 10px;">メイン作業</span></div>
<div class="box-accent pip-safe" style="flex:1; text-align:center; font-size:22px;">どの業務は、人(あなた)が行う価値があるか？</div>
</div>

<!-- どこにAIは役立ちそうか。スライド先行（探索的）の場合、伝えたいことを決め、流れとコンテキストを設定し、整えて、最後に音読して原稿を作る。テキスト先行（よく知っている）の場合は、シナリオを立て資料を集め、スライドと原稿を作り、内容を膨らませる。どの業務を人が行う価値があるかを考えましょう。 -->

---

<div class="page-title">どこにAIは役立ちそう？</div>

# どの業務は、人(あなた)が行う<span style="color:var(--accent-dark)">価値</span>があるか？

<div style="font-size:27px; font-weight:800; margin:2px 0 4px;">スライド先行 <span style="font-size:22px; font-weight:600; color:#555;">(探索的)</span></div>

<svg width="1180" height="300" viewBox="0 0 1180 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
<defs><marker id="ar13" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1E3A6E"/></marker></defs>
<rect x="48" y="60" width="220" height="74" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="158" y="90" text-anchor="middle" font-size="23">最も伝えたいこと/</text>
<text x="158" y="118" text-anchor="middle" font-size="23">終了後の状態を決める</text>
<rect x="370" y="58" width="190" height="44" rx="14" fill="#FBE4EA"/>
<text x="465" y="86" text-anchor="middle" font-size="22">アイデア出し</text>
<rect x="370" y="118" width="220" height="74" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="480" y="148" text-anchor="middle" font-size="23">スライドの流れを</text>
<text x="480" y="176" text-anchor="middle" font-size="23">設定する</text>
<rect x="48" y="150" width="190" height="60" rx="12" fill="#FBE4EA"/>
<text x="143" y="176" text-anchor="middle" font-size="22">アイデア出し</text>
<text x="143" y="200" text-anchor="middle" font-size="22">言語化</text>
<rect x="370" y="196" width="220" height="64" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="480" y="222" text-anchor="middle" font-size="22">コンテキストを設定</text>
<text x="480" y="248" text-anchor="middle" font-size="22">する (絵・グラフ)</text>
<rect x="372" y="270" width="92" height="26" rx="8" fill="#FBE4EA"/>
<text x="418" y="288" text-anchor="middle" font-size="18">資料検索</text>
<rect x="476" y="270" width="68" height="26" rx="8" fill="#FBE4EA"/>
<text x="510" y="288" text-anchor="middle" font-size="18">作図</text>
<rect x="690" y="58" width="190" height="44" rx="14" fill="#E4F1E0"/>
<text x="785" y="86" text-anchor="middle" font-size="22">デザイン確認</text>
<rect x="690" y="118" width="200" height="74" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="790" y="148" text-anchor="middle" font-size="23">スライドを作り、</text>
<text x="790" y="176" text-anchor="middle" font-size="23">内容を整える</text>
<rect x="990" y="118" width="180" height="74" rx="12" fill="#fff" stroke="var(--accent-dark)" stroke-width="4"/>
<text x="1080" y="148" text-anchor="middle" font-size="23">一回音読し、</text>
<text x="1080" y="176" text-anchor="middle" font-size="23">原稿を作る</text>
<path d="M268 97 L300 97 L300 155 L366 155" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13)"/>
<path d="M300 155 L300 230 L366 230" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13)"/>
<path d="M590 155 L640 155 L640 155 L686 155" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13)"/>
<path d="M590 230 L640 230 L640 155" fill="none" stroke="#1E3A6E" stroke-width="2"/>
<path d="M890 155 L986 155" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13)"/>
</svg>

<div style="font-size:27px; font-weight:800; margin:6px 0 4px;">テキスト先行 <span style="font-size:22px; font-weight:600; color:#555;">(よく知っている)</span></div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="background:#F2F2F2; border-radius:10px; padding:10px 16px; flex:0 0 auto;">
<div style="font-weight:800; margin-bottom:6px;">凡例</div>
<div style="display:flex; gap:10px; margin:5px 0;"><span style="background:#E9E9E9; border:1.5px solid #9aa; border-radius:8px; padding:2px 12px; font-size:20px;">メイン作業</span><span style="background:#FBE4EA; border-radius:8px; padding:2px 12px; font-size:20px;">追加作業</span></div>
<div style="display:flex; gap:10px; margin:5px 0;"><span style="background:#FBE4EA; border-radius:8px; padding:2px 12px; font-size:20px;">使っている</span><span style="background:#E4F1E0; border-radius:8px; padding:2px 12px; font-size:20px;">多分できる</span></div>
</div>
<svg width="900" height="200" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
<defs><marker id="ar13b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1E3A6E"/></marker></defs>
<rect x="0" y="14" width="190" height="64" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="95" y="40" text-anchor="middle" font-size="21">最も伝えたいこと/</text>
<text x="95" y="64" text-anchor="middle" font-size="21">終了後の状態を決める</text>
<rect x="290" y="6" width="190" height="64" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="385" y="32" text-anchor="middle" font-size="21">箇条書きでシナリオを</text>
<text x="385" y="56" text-anchor="middle" font-size="21">立てる</text>
<rect x="290" y="92" width="190" height="64" rx="12" fill="#E4F1E0"/>
<text x="385" y="118" text-anchor="middle" font-size="21">コンテキストの資料を</text>
<text x="385" y="142" text-anchor="middle" font-size="21">集める</text>
<rect x="292" y="166" width="86" height="26" rx="8" fill="#FBE4EA"/>
<text x="335" y="184" text-anchor="middle" font-size="18">資料検索</text>
<rect x="390" y="166" width="64" height="26" rx="8" fill="#FBE4EA"/>
<text x="422" y="184" text-anchor="middle" font-size="18">作図</text>
<rect x="560" y="6" width="160" height="64" rx="12" fill="#FBE4EA" stroke="var(--accent-dark)" stroke-width="4"/>
<text x="640" y="44" text-anchor="middle" font-size="21">スライドを作る</text>
<rect x="560" y="92" width="160" height="64" rx="12" fill="#E4F1E0"/>
<text x="640" y="130" text-anchor="middle" font-size="21">原稿を作る</text>
<rect x="770" y="92" width="130" height="64" rx="12" fill="#E9E9E9" stroke="#9aa" stroke-width="1.5"/>
<text x="835" y="118" text-anchor="middle" font-size="21">内容を時間まで</text>
<text x="835" y="142" text-anchor="middle" font-size="21">膨らませる</text>
<path d="M190 46 L240 46 L240 38 L286 38" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13b)"/>
<path d="M240 46 L240 124 L286 124" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13b)"/>
<path d="M480 38 L520 38 L520 38 L556 38" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13b)"/>
<path d="M520 38 L520 124 L556 124" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13b)"/>
<path d="M720 124 L766 124" fill="none" stroke="#1E3A6E" stroke-width="2" marker-end="url(#ar13b)"/>
</svg>
</div>

<!--
- 前のスライドと同じフローだが、AIが「使っている」「多分できる」業務を色分けし、人が価値を出すべき業務を浮かび上がらせる。スライド先行では原稿づくり、テキスト先行ではスライド作成を人の作業として残している。
-->

---

<div class="page-title">音読し、原稿を作る</div>

# 音読し、原稿を作る

<div style="display:grid; grid-template-columns:auto 1fr; gap:10px 16px; align-items:start; margin-top:6px;">

<div class="tag tag-soft" style="white-space:nowrap;">手順①</div>
<div style="align-self:center; font-size:25px;">スライドを完成させて、PDFなどで出力</div>

<div class="tag tag-soft" style="white-space:nowrap;">手順②</div>
<div class="box-info">とりあえず、<b>録音しながら</b>、音読してみる<br>言い淀みOK!、止まってもOK!<br>あまり考えずに、最初から最後まで説明する</div>

<div class="tag tag-soft" style="white-space:nowrap;">手順③</div>
<div>
<div style="font-size:25px; margin-bottom:4px;">スライド・録音を添付し Canvas on で Gemini に入れる</div>
<div class="box-accent" style="font-size:20px; line-height:1.45;">音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。<br>DXの重要性について、10分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。<br>聞き手は、大学事務職員と教授のようなマネジメント層です。真面目だが、比喩を全体で2個まぜて聞きやすくして下さい。<br>分かりやすく、失礼無く、重複無く、スムーズな原稿にし、対話的に変更できるよう、Canvasに出力して下さい。<br>スライドの番号を表示後、その原稿を記入して下さい。スライドの順番を変更したり、スライドを省略してはいけません。<br>また、スライドを変えるべき点や誤字があれば、末尾にその内容を箇条書きで示して下さい。</div>
<div style="text-align:right; font-size:21px; color:var(--accent-dark); font-weight:800; margin-top:4px;">目的、時間、聞き手、トーン、出力形式</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:8px;">語彙のブレが減り聞きやすいので、講師の方でも実施 (例：先週の全学FD)</div>

<!--
- スライドを完成させてPDF化し、録音しながら一度音読してみる。その音声とスライドをGeminiに入れて読み原稿を作らせる。プロンプトには目的・時間・聞き手・トーン・出力形式を必ず入れるのがコツ。語彙のブレが減って聞きやすくなるので、講師でも実施している。
-->

---

<div class="page-title">スライドを作る</div>

# スライドを作る

<div style="text-align:center; margin-top:30px;">
<div style="font-size:40px; font-weight:800; line-height:1.35;"><span style="color:var(--accent-dark)">Gemで作成するフロー</span>を作りました<br><span style="color:#1a1a1a;">体験セッションで実施予定</span></div>
</div>

<div style="text-align:center; font-size:28px; margin:36px 0 24px;">ぜひ、各自で応用・アップデートしてみて下さい</div>

<div class="box-accent pip-safe" style="font-size:25px;">但し、講師は、今日時点で最終版はまだ、<b>手作業で</b>組んでます<br>作ったスライドは、<b>「部品取り」「構成・表現のアイデア」</b>としてのみ、活用しています</div>

<!--
- Gemで作成するフローを作りました。体験セッションで実際にやってみます。ぜひ各自で応用・アップデートしてみてください。ただし、講師自身は今日時点で最終版はまだ手作業で組んでいます。AIで作ったスライドは部品取りや構成・表現のアイデアとしてのみ活用しています。
-->

---

<div class="page-title">Gem：カスタマイズしたAI</div>

# Gem：カスタマイズしたAI

<div style="font-size:26px; margin:2px 0 5px;">Geminiで<b>手順の決まった処理</b>を指示したい時は、<b style="color:var(--accent-dark)">Gem</b>を使おう</div>

<div class="box-accent" style="font-size:25px; margin-bottom:8px;"><b>Gem = </b>誰でも作れるGeminiを用いたカスタムAIエキスパート</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:0 0 46%;">
<div style="font-weight:800; color:var(--accent-dark); font-size:24px; margin-bottom:3px;">千葉大Google Workspaceの標準機能</div>
<ul style="margin:0 0 0 1.0em; padding:0; font-size:21px; line-height:1.4;">
<li><b>予め指示した振舞い・プロンプトで生成AIが動く</b></li>
<li>学内にリンクで作ったエキスパートを共有出来る</li>
<li>例：経費精算の記入の質問、プロンプトの作成<br>　　　採点・フィードバックの下書きの作成</li>
<li>業務の属人化回避や反復に便利</li>
</ul>
<div style="font-weight:800; color:var(--accent-dark); font-size:24px; margin:6px 0 3px;">Gemini同様の情報の扱い</div>
<ul style="margin:0 0 0 1.0em; padding:0; font-size:21px; line-height:1.4;">
<li>学習されず、Gemの作成者にも共有されない</li>
</ul>
</div>
<div style="flex:1; position:relative; text-align:center;">
<img src="./src/fig16-gem-ui.png" alt="Gemの設定画面" style="max-width:100%; max-height:258px; border:1px solid #ccc; border-radius:6px;">
</div>
</div>

<div class="box-warn pip-safe" style="font-size:22px; margin-top:6px;">業務を生成AIでより良くする上での一番初歩的な道具<br>今回は、スライドを”構造化”し、Canvasでのスライド化までを伴走</div>

<!--
- Geminiで手順の決まった処理を指示したいときはGemを使う。Gemは誰でも作れるカスタムAIエキスパートで、千葉大Google Workspaceの標準機能。予め指示した振る舞い・プロンプトで動き、学内にリンクで共有できる。情報の扱いはGeminiと同じで、学習されず作成者にも共有されない。業務改善の一番初歩的な道具で、今回はスライドの構造化からCanvasでのスライド化まで伴走させる。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Canvas：伴走する道具

<div style="font-size:26px; margin:2px 0 6px;">Geminiで作成を伴走してほしい時は、<b style="color:var(--accent-dark)">Canvas</b>を使おう</div>

<div class="box-accent" style="font-size:25px; margin-bottom:12px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="font-weight:800; font-size:25px; margin-bottom:8px;">使用例1　文章の作成</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:0 0 34%;">
<div class="box-info" style="font-size:25px;"><b>文章を自分で編集</b>しつつ、Geminiに指示を出して書き換えが可能<br>Documentに書き出せる</div>
</div>
<div style="flex:1;">
<img src="./src/fig17-canvas-doc.png" alt="Canvasでの文章編集画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
</div>

<!--
- Geminiで作成を伴走してほしいときはCanvasを使う。CanvasはAIとの協働作成が可能な作業用・出力用の画面。使用例1は文章の作成で、文章を自分で編集しつつGeminiに指示を出して書き換えができ、Documentにも書き出せる。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Canvas：伴走する道具

<div style="font-size:26px; margin:2px 0 6px;">Geminiで作成を伴走してほしい時は、<b style="color:var(--accent-dark)">Canvas</b>を使おう</div>

<div class="box-accent" style="font-size:25px; margin-bottom:12px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1; text-align:center;">
<div style="font-weight:800; font-size:25px; margin-bottom:8px; text-align:left;">使用例2　スライドの作成</div>
<img src="./src/fig18a-slide.png" alt="スライドの作成例" style="max-width:100%; max-height:258px; border:1px solid #ccc; border-radius:6px;">
<div style="font-size:24px; margin-top:8px; text-align:left;"><b style="color:var(--accent-dark)">編集可能なスライドを</b>書き出せる</div>
</div>
<div style="flex:1; text-align:center;">
<div style="font-weight:800; font-size:25px; margin-bottom:8px; text-align:left;">使用例3　インタラクティブ出力</div>
<img src="./src/fig18b-interactive.png" alt="インタラクティブ出力例" style="max-width:100%; max-height:258px; border:1px solid #ccc; border-radius:6px;">
<div class="box-info pip-safe" style="font-size:22px; margin-top:8px; text-align:left;">問題集やコードの結果を動作する形で表現できる</div>
</div>
</div>

<!--
- 使用例2はスライドの作成で、編集可能なスライドを書き出せる。使用例3はインタラクティブ出力で、問題集やコードの結果を実際に動作する形で表現できる。
-->

---

<div class="page-title">手作業で作成する上で</div>

# 手作業で作成する上で

<div style="font-size:26px; margin:2px 0 8px;">スライド作成には、<b style="color:var(--accent-dark)">いくつかの原則</b>がある</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div style="display:grid; grid-template-columns:auto 1fr; gap:10px 14px; align-items:center;">
<div class="tag tag-soft" style="white-space:nowrap;">デザイン</div>
<div>
<div style="font-size:24px;"><b>伝わるデザイン</b>に準拠してみよう</div>
<div class="box-info" style="font-size:20px; margin-top:4px;">髙橋 佑磨 先生 （理学研究院）<br>EYRJ資料 → <span style="color:var(--tag-blue);">https://alc.chiba-u.jp/eyr/2023/06/16/01design.html</span></div>
</div>

<div class="tag tag-soft" style="white-space:nowrap;">配置</div>
<div>
<div style="font-size:24px;"><b>配置機能</b>で揃えよう</div>
<div class="box-info" style="font-size:20px; margin-top:4px;">配置：ラインに並べる、整列：均等に置く、ページ中央に配置<br>※ あと、順序でレイヤーをイメージできると良い</div>
</div>

<div class="tag tag-soft" style="white-space:nowrap;">シンプル</div>
<div>
<div style="font-size:24px;"><b>なるべくシンプルに</b></div>
<div class="box-info" style="font-size:20px; margin-top:4px;">左上から右下へ、末尾に一言でまとめて、文字数は最小化<br>アニメーションは使わない、1枚1分で話す</div>
</div>
</div>

</div>
<div style="flex:0 0 230px; display:flex; flex-direction:column; gap:10px; align-items:center;">
<img src="./src/fig19a-eyr.png" alt="伝わるデザイン資料" style="width:200px; border:1px solid #ccc; border-radius:6px;">
<div style="border:2px solid #888; border-radius:8px; width:200px; padding:8px; box-sizing:border-box;">
<div style="font-weight:800; font-size:20px;">タイトル</div>
<div style="background:#eee; height:80px; display:flex; align-items:center; justify-content:center; font-size:24px; margin:6px 0; border-radius:4px;">図</div>
<div style="font-size:18px;">言いたいことを1行で</div>
</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px;">事前に知っておくだけで、<b>劇的に</b>変わる</div>

<!--
- 手作業で作るときにもスライド作成の原則がある。デザインは高橋佑磨先生の「伝わるデザイン」に準拠。配置は配置機能で揃え、順序でレイヤーをイメージする。なるべくシンプルに、左上から右下へ、末尾に一言、文字数は最小化、アニメーションは使わず1枚1分で話す。事前に知っておくだけで劇的に変わる。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# <span style="color:var(--accent-dark)">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:14px 18px; align-items:start; margin-top:8px;">

<div class="tag tag-soft" style="white-space:nowrap; align-self:start;">目的</div>
<div class="box-accent" style="font-size:25px;"><b>Session 1：</b><br>講義：生成AIを発表準備に使う際のアイデアを知る</div>

<div class="tag tag-soft" style="white-space:nowrap; align-self:start;">目標<br>＋<br>まとめ</div>
<div class="stepbox" style="margin:0;">
<div class="st" style="margin:2px 0;"><b>作業フローにAIを活用する考え方を知る</b></div>
<div style="font-size:22px; margin-left:1.2em;">・Human Orchestration (HOTL)　・フローの書き出しと考え方</div>
<div class="st" style="margin:6px 0 2px;"><b>スライド作成に利用できる道具を知る</b></div>
<div style="font-size:22px; margin-left:1.2em;">・Gem = 誰でも作れるカスタムAIエキスパート<br>・Canvas = AIとの協働作成可能な作業用・出力用画面</div>
<div class="st" style="margin:6px 0 2px;"><b>発表準備に使えそうな範囲 (現時点)</b></div>
<div style="font-size:22px; margin-left:1.2em;">・原稿の作成、スライド案の作成</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は生成AIを発表準備に使う際のアイデアを知ること。目標は、作業フローにAIを活用する考え方（Human OrchestrationやHOTL、フローの書き出し）を知ること、スライド作成に使える道具（GemとCanvas）を知ること、そして発表準備に使えそうな範囲（原稿やスライド案の作成）を現時点で押さえること。
-->

---

<!-- _class: divider -->

<div style="text-align:center;">
<div style="font-size:58px; font-weight:900; line-height:1.15; letter-spacing:.02em; color:#fff;">生成AI体験<br>ワークショップ</div>
<div style="font-size:24px; color:#DCE3F0; font-weight:800; margin-top:20px;">2025年度 第7回：生成AIを使ってスライドを作ってみる</div>
<div style="font-size:22px; color:#AEB9D2; margin-top:4px;">15-min × 3 sessions</div>
</div>

<div style="background:rgba(255,255,255,.12); border:1.5px solid rgba(255,255,255,.35); border-radius:12px; padding:14px 26px; margin:22px auto 0; max-width:760px; font-size:27px; color:#fff;"><b style="color:#fff;">Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div style="text-align:center; font-size:23px; margin-top:18px; color:#fff;">国際未来教育基幹　田川 翔</div>

<!--
- ここからSession 2。Canvas機能を使って、実際に原稿とスライドを作成してみます。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# ワーク② スライドを作る

<div class="callout-orange" style="font-size:27px; font-weight:800;">5分： Gemを用いてスライド原稿を作ってみましょう。</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:10px;">
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;">
<div class="st" style="margin:2px 0;"><b>Gem①にスライドにしてほしい内容をアップロードし、実行して下さい。</b></div>
<div style="font-size:21px; margin-left:0.4em;">例：Wikipedia など　　　注意：機密情報を含むデータは使用しないこと</div>
</div>

<div class="stepbox" style="margin:6px 0;">
<div class="st" style="margin:2px 0;"><b>対話しつつ作成を進めて下さい</b>(5枚くらい)。</div>
<div style="font-size:21px; margin-left:0.4em;">スライド原稿が出力されたら、<b>編集したり、Geminiでアップデート</b>しましょう。</div>
</div>

<div class="box-info pip-safe" style="font-size:21px; margin-top:10px;">オンラインの方：困ったらSlidoに質問を送って下さい！<br>余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

</div>
<div style="flex:0 0 300px;">
<div class="box-accent" style="font-size:23px; text-align:center; margin-bottom:8px;"><b>Proモード</b><br>＋<br><b>Canvas</b>を選ぶ (事前選択済み)</div>
<img src="./src/fig22-gemui.png" alt="Gemのモード選択画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
</div>

<!--
- ワーク②、5分。Gem①にスライドにしてほしい内容、例えばWikipediaの記事などをアップロードして実行します。機密情報は使わないこと。対話しながら5枚くらい作り、原稿が出たら編集したりGeminiでアップデートしましょう。モードはProモードでCanvasを選びます。困ったらSlidoや手を上げて聞いてください。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# ワーク② スライドを作る

<div class="callout-orange" style="font-size:27px; font-weight:800;">10分： 応用編　Gemを用いてスライドを完成させましょう。</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st" style="margin:4px 0;">先ほど作ったプロンプトをコピーしましょう。<b>Gem②を開き、プロンプトを貼り付けましょう。</b>次に模範となるスライド (これや自分のデザイン)をスクショしましょう。<br><span style="font-size:22px;">(絵を入れる場合には)図やPDFなども追加しましょう。</span></div>
<div class="st" style="margin:8px 0 4px;"><b>デザインシートが出力されます。確認し、変更する点は指示して下さい。</b><br><span style="font-size:22px;">上手く行かない場合には、再度Gem②を開きましょう。</span></div>
<div class="st" style="margin:8px 0 4px;"><b>プレゼンテーションを作成するよう指示してください。</b>完成後、差し支えなければ、ここに<span style="color:var(--tag-blue);">リンク</span>で共有下さい。</div>
</div>

<div class="box-info pip-safe" style="font-size:22px; margin-top:12px;">オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

<!--
- 10分の応用編。先ほどのプロンプトをコピーしてGem②に貼り付け、模範となるスライドをスクショして渡します。図やPDFも追加可。デザインシートが出力されるので確認し、変更点を指示。うまくいかない場合は再度Gem②を開く。最後にプレゼンテーションを作成するよう指示し、完成したらリンクで共有してください。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# 参考：このプロンプト、どうやって作り込んだのか

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">
<div style="flex:1;">
<div style="font-weight:800; font-size:24px; margin-bottom:6px;">Anthropic Claude</div>
<img src="./src/fig24a-claude.png" alt="Claudeでのプロンプト作成画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
<div style="flex:1;">
<div style="font-weight:800; font-size:24px; margin-bottom:6px;">Google Antigravity</div>
<img src="./src/fig24b-antigravity.png" alt="Antigravityでの共同編集画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
</div>

<div class="box-accent" style="font-size:23px; margin-top:10px;">Claude Opus 4.6でのAgenticなプロンプト作成と<br>AntigravityでのAIとの共同編集を行い、Gemを修正<br><b>→ 6時間ほどで完成</b> <span style="font-size:20px;">(まじんさんなどがやっていて、出来るとわかっていた。感謝。)</span></div>

<div class="box-warn pip-safe" style="font-size:23px; margin-top:8px;"><b>「コード固定・データ可変」の設計思想</b> (かなりギチギチにスライド構造を書いた)<br><span style="font-size:20px;">反復 ／ HOLP</span></div>

<!--
- 参考までに、このプロンプトの作り込み方。Anthropic ClaudeのOpus 4.6でAgenticにプロンプトを作成し、Google AntigravityでAIと共同編集してGemを修正しました。6時間ほどで完成。まじんさんなどが先にやっていて、できるとわかっていたので感謝です。設計思想は「コード固定・データ可変」で、かなりギチギチにスライド構造を書き込んでいます。反復とHOLPの考え方です。
-->

---

<div class="page-title">ワーク予備 読み原稿を作る</div>

# <span style="color:var(--accent-dark)">15分</span>：　Canvasを用いて、読み原稿を作ってみましょう。

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">
<div class="stepbox"><div class="st">① 過去の<b>15minsの音声</b>と<b>PDF</b>で、<b>読み原稿</b>を作成しましょう。</div></div>
<div class="stepbox"><div class="st">② 出力された内容を選択して、<b>Geminiと協働編集</b>してみましょう。</div></div>

<div style="font-size:18px; font-weight:800; color:#555; margin:10px 0 2px;">プロンプト</div>
<div style="border:1px solid #cbd2dc; border-radius:8px; background:#f6f8fb; padding:8px 14px; font-size:18px; line-height:1.45; color:#333;">
音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。<br>
AIを用いたスライド作成支援について、17分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。<br>
聞き手は、大学生/院生と大学事務職員と教員です。初心者にも分かりやすいようフレンドリーで聞きやすくして下さい。<br>
分かりやすく、失礼無く、重複無く、スムーズな原稿にし、対話的に変更できるよう、Canvasに出力して下さい。<br>
スライドの番号を表示後、その原稿を記入して下さい。スライドの順番を変更したり、スライドを省略してはいけません。<br>
また、スライドを変えるべき点や誤字があれば、末尾にその内容を箇条書きで示して下さい。
</div>
</div>
<div style="flex:0 0 300px;">
<img src="./src/fig25-crop.png" alt="Geminiのツールメニューで思考モード+Canvasを選ぶ" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="text-align:center; font-size:22px; margin-top:8px;"><b>思考モード</b>＋<b>Canvas</b>を選ぶ</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:20px;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方： Slidoに返信してあげてください。<br>
会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- ワーク予備。15分で、Canvasを用いて読み原稿を作ってみる。①過去の15minsの音声とPDFで読み原稿を作成、②出力をGeminiと協働編集。
- ツールメニューで思考モード＋Canvasを選ぶ。困ったらSlidoや手を上げてTA・ペアへ。
- プロンプト例：音声データを書き起こし、スライドの読み原稿を作成。17分間で、用語の一貫性と口語としての自然な短さに注意。聞き手は大学生・院生・事務職員・教員。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# <span style="font-weight:800;">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:40px 22px; align-items:center; margin-top:18px;">

<div style="font-size:30px; font-weight:800;">目的</div>
<div class="box-accent" style="font-size:26px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div style="font-size:30px; font-weight:800; line-height:1.3;">目標<br>　＋<br>まとめ</div>
<div class="box-info pip-safe" style="font-size:25px;">
・ Canvasで協働編集をすることができた<br>
・ Gemでスライド案を作成することができた
</div>

</div>

<!--
- Session 2の振り返り。目的は「Canvas機能で原稿とスライドを作成してみる」。
- まとめ：Canvasで協働編集ができた、Gemでスライド案を作成できた。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第7回：生成AIを使ってスライドを作ってみる ／ 15-min × 3 sessions</div>

# 生成AI体験<br>ワークショップ

<div class="box-accent" style="font-size:26px; margin-top:10px; max-width:760px;"><b>Session 3：</b><br>議論：気づきのシェア & 振り返り</div>

<div class="foot">国際未来教育基幹　<b>田川 翔</b></div>

<!--
- ここからSession 3。議論：気づきのシェアと振り返り。
-->

---

<div class="page-title">Session 3の進め方</div>

# 議論・座談会　<span class="tag tag-accent" style="font-size:24px;">Slidoで進めます</span>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin:2px 0 8px;">最後の15分</div>

<div class="box-warn" style="margin:6px 0 12px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>　　　　　敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">
<div style="font-size:23px; line-height:1.65;">
<div>・ 実際に使ってみて<b>「上手くいった点」「イマイチな点」</b>　を教えて下さい。</div>
<div>・ <b>大学の中で諸活動の中で、Gem/Canvasが便利そうなユースケースとワークフロー</b>を簡単に提案して下さい。</div>
<div>・ 今日面白かったこと、気付きは何でしたか。</div>
</div>
</div>
<div class="box-info pip-safe" style="flex:0 0 320px; font-size:20px;">
<div style="font-weight:800;">スマホから</div>
<div>方法2　直接リンク</div>
<div style="word-break:break-all; color:var(--tag-blue);">https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</div>
<div style="font-weight:800; margin-top:6px;">PCから</div>
<div>方法1　Google検索「Slido」→コード入力</div>
<div><b>＃ ALC-AI1-07</b></div>
</div>
</div>

<!--
- Session 3の進め方。最後の15分、議論・座談会をSlidoで進める。協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に。
- 問い：実際に使って上手くいった点・イマイチな点、Gem/Canvasが便利そうなユースケースとワークフロー、今日面白かったこと・気づき。
- Slidoはスマホは直接リンク、PCはGoogle検索「Slido」→コード ALC-AI1-07。
-->
