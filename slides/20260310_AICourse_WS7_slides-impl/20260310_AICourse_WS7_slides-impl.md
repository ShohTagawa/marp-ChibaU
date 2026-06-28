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

<div class="goal-box" style="margin-top:10px;">
①<b>PCを立ち上げ、お持ちの<br><span class="ind" style="margin-left:1.6em;">千葉大学Google Workspaceにログインして下さい</span></b><br>
<span style="font-size:24px; margin-left:1.6em;">→ 学校のGmailが立ち上がる状況ならOKです。</span><br>
②<b>インタラクションツール Slidoにアクセスして下さい</b><br>
<span style="font-size:24px; margin-left:1.6em;">URLを配布したり、質問やアンケートをとったりします</span><br>
<span style="font-size:22px; margin-left:1.6em; color:var(--accent-dark);">※お名前などの個人情報の入力は禁止です</span>
</div>

<div class="cardrow pip-safe" style="margin-top:18px;">
<div class="pcard"><div class="pc-h">スマホから</div>
<p style="font-size:21px;">QRコードまたは下記URLから直接アクセス</p>
<p style="font-size:18px; word-break:break-all;">https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</p>
</div>
<div class="pcard"><div class="pc-h">PCから</div>
<ul><li><b>方法1</b> Google検索「Slido」→コード入力 <span class="tag tag-accent" style="font-size:19px; padding:1px 12px;">ALC-AI1-07</span></li>
<li><b>方法2</b> 直接リンク</li></ul>
</div>
</div>

<!--
- 始める前に、まず千葉大のGoogle Workspaceにログイン。学校のGmailが開けばOK。
- 次にインタラクションツールSlidoへ。質問やアンケートに使います。個人情報は入力しないでください。
-->

---

<div class="page-title">講師紹介</div>

# <span style="color:var(--accent-dark)">田川　翔</span><span style="font-size:22px; margin-left:14px; color:var(--muted);">たがわ　しょう</span>

<div class="box-info" style="margin-top:6px;"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター<br><span style="font-weight:800; color:var(--tag-blue);">大学教育を企画し、学生と教員を支援する仕事</span></div>

<div class="cardrow pip-safe" style="margin-top:16px;">
<div class="pcard"><div class="pc-h">①元々は理学の人</div>
<ul><li>Tagawa et al. (2021) <i>Nat. Com.</i></li></ul>
</div>
<div class="pcard"><div class="pc-h">②色々な経験</div>
<ul><li>大学のICT支援 (コロナ禍)</li><li>大規模オンライン授業の作成</li><li>民間企業での経験</li><li>AI×大学</li></ul>
</div>
<div class="pcard"><div class="pc-h">③大学を学びやすく!</div>
<ul><li>大学での教え方</li><li>生成AIの教育利活用</li><li>オープンバッジ</li></ul>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px; font-size:22px;">現在、<i>Teaching with AI</i> を翻訳・出版準備中</div>

<!--
- 講師の田川です。元々は理学の研究者で、Tagawa et al. (2021) Nat. Com. などの仕事をしていました。
- その後、大学のICT支援やオンライン授業作成、民間企業など色々な経験を経て、今は大学を学びやすくする仕事をしています。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:18px;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:800;">2025年度 第7回： 生成AIを使ってスライドを作ってみる</div>
<div style="font-size:26px; color:var(--accent); margin-top:6px;">15-min × 3 sessions</div>
<div style="font-size:26px; margin-top:28px;">国際未来教育基幹 田川 翔</div>
</div>

<!--
- 今日のテーマは「生成AIを使ってスライドを作ってみる」。15分×3セッションで進めます。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<table style="width:100%; border-collapse:collapse; font-size:24px; margin-top:14px;">
<tr>
<td style="width:140px; padding:8px; vertical-align:middle;"><div style="font-size:20px; color:var(--muted);">最初の15分</div><div class="tag tag-soft" style="font-size:28px; display:block; text-align:center; margin-top:4px;">講義</div></td>
<td style="padding:10px 18px; vertical-align:middle;">- プレゼンテーションの様々な準備に生成AIを使う実践的方法を理解できる。</td>
</tr>
<tr>
<td style="padding:8px; vertical-align:middle;"><div style="font-size:20px; color:var(--muted);">真ん中の15分</div><div class="tag tag-soft" style="font-size:28px; display:block; text-align:center; margin-top:4px;">体験</div></td>
<td style="padding:10px 18px; vertical-align:middle;">- Canvas機能を応用し、プレゼンテーションを作成してみる。</td>
</tr>
<tr>
<td style="padding:8px; vertical-align:middle;"><div style="font-size:20px; color:var(--muted);">最後の15分</div><div class="tag tag-soft" style="font-size:26px; display:block; text-align:center; margin-top:4px;">議論・座談会</div></td>
<td style="padding:10px 18px; vertical-align:middle;">- 使用してみて気がついたこと (利点と限界)<br>- CanvasやGemをどう活用したいですか。<br>- 今日面白かったこと、気付きは何でしたか。</td>
</tr>
</table>

<!--
- 構成は3部。最初の15分は講義、真ん中の15分は体験、最後の15分は議論・座談会です。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第7回： 生成AIを使ってスライドを作ってみる　/　15-min × 3 sessions</div>

# 生成AI体験<br>ワークショップ

<div class="box-info" style="margin-top:18px; font-size:28px;"><b>Session 1：</b><br><span style="margin-left:1.2em;">講義：生成AIを発表準備に使う際のアイデアを知る</span></div>

<div class="foot">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 1。講義として、生成AIを発表準備に使う際のアイデアを知っていきます。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div class="bgroup" style="grid-template-columns:3em 1fr; margin-top:18px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="box-info" style="border-color:var(--accent); background:var(--accent-soft); color:var(--accent-dark);"><b>Session 1：</b><br><span style="margin-left:1.2em;">講義：生成AIを発表準備に使う際のアイデアを知る</span></div>
</div>

<div class="bgroup pip-safe" style="grid-template-columns:3em 1fr; margin-top:22px;">
<div class="bg-label" style="color:var(--accent-dark);">目標</div>
<div class="stepbox">
<div class="st">・作業フローにAIを活用する考え方を知る</div>
<div class="st">・スライド作成に利用できる道具を知る</div>
<div class="st">・発表準備に使えそうな範囲 (現時点)</div>
</div>
</div>

<!--
- Session 1の目的は、生成AIを発表準備に使うアイデアを知ること。
- 目標は3つ。作業フローにAIを活用する考え方、利用できる道具、そして使えそうな範囲を現時点で知ることです。
-->

---

<div class="page-title">今の最先端は？</div>

# 今の最先端は？

<div class="lead-note">スライド作成の自動化は、<span style="color:var(--accent);">1つのトレンド</span>になっている</div>

<table style="width:100%; border-collapse:collapse; font-size:19px; margin-top:8px;">
<tr style="background:#3a3a3a; color:#fff;">
<th style="width:80px; padding:6px;"></th>
<th style="padding:6px;">Chatパラダイム</th>
<th style="padding:6px;">Toolパラダイム</th>
<th style="padding:6px; position:relative;">Agentパラダイム <span class="tag tag-accent" style="font-size:15px; padding:0 8px; position:absolute; top:-8px; right:24px;">なう</span></th>
</tr>
<tr>
<td style="background:#eee; font-weight:800; padding:6px; text-align:center;">変化</td>
<td style="border:1px solid #ddd; padding:6px; text-align:center;">AIと対話</td>
<td style="border:1px solid #ddd; padding:6px; text-align:center;">AIが案・部品を作成</td>
<td style="border:1px solid #ddd; padding:6px; text-align:center; background:var(--accent-soft);">AIが作成を実行</td>
</tr>
<tr>
<td style="background:#eee; font-weight:800; padding:6px; text-align:center;">使い方</td>
<td style="border:1px solid #ddd; padding:6px; background:#FBF7E8;">情報収集 DeepResearch<br>発表表現のアイデア出し<br>発表・資料作成のコツ<br>誤字・分かりにくい点の確認</td>
<td style="border:1px solid #ddd; padding:6px;">スライドの案の作成<br>発表資料の図の生成<br>構成・原稿の作成支援</td>
<td style="border:1px solid #ddd; padding:6px; background:var(--accent-soft);">対話によるスライドの完成<br>スライド自体の作り込み<br>デザイン・表現の一貫性担保<br>作成ワークフローの実現</td>
</tr>
<tr>
<td style="background:#eee; font-weight:800; padding:6px; text-align:center;">例</td>
<td style="border:1px solid #ddd; padding:6px;">こうしたらどうですか？<br>→ 人は作成者</td>
<td style="border:1px solid #ddd; padding:6px;">スライド案/図を作成する<br>→ 人は編集者 (“ガチャ”)</td>
<td style="border:1px solid #ddd; padding:6px; background:var(--accent-soft);">スライドを自然言語で指示する<br><b style="color:var(--accent);">→人とAIで協働作成</b></td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:20px;"><b>トレンド：</b> 2026年に入り、AIによる「補助」から<b>「自律的・協働的な生成」</b>へ　／　<b>限界：</b> 細かい修正や作成(例：スライドレベルの作成)はまだ難しい</div>

<!--
- スライド作成の自動化は1つのトレンドになっています。
- Chat→Tool→Agentと進化し、今はAgentパラダイム。人とAIで協働作成する段階に入ってきました。
- ただし限界もあり、細かい修正やスライドレベルの作成はまだ難しいです。
-->

---

<div class="page-title">今の最先端は？</div>

# 今の最先端は？

<table style="width:100%; border-collapse:collapse; font-size:20px; margin-top:8px;">
<tr style="background:#eee;">
<th style="width:130px; padding:6px;"></th>
<th style="padding:6px;"></th>
<th style="padding:6px; background:#dfeede;">利点</th>
<th style="padding:6px; background:#f6dede;">欠点</th>
</tr>
<tr>
<td style="background:#FBF7E8; font-weight:800; padding:8px; text-align:center;">外部<br>ツール</td>
<td style="border:1px solid #ddd; padding:8px; text-align:center;"><b style="font-size:24px;">Gamma</b>を用いたデモ<br><span style="font-size:17px;">(当日、動画にて実演予定)</span><br><b>Canva / Genspark etc</b></td>
<td style="border:1px solid #ddd; padding:8px; background:#eef7ee;">情報の質が高い<br>細かく作り込める<br>その場で作れる<br>対話的に作れる</td>
<td style="border:1px solid #ddd; padding:8px; background:#fceeee;">値段が高い<br>機密情報の取扱い<br>100%は難しい<br>学問使用が難しいかも</td>
</tr>
<tr>
<td style="background:#EAF2FB; font-weight:800; padding:8px; text-align:center;">プロンプト</td>
<td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>まじん式</b></td>
<td style="border:1px solid #ddd; padding:8px; background:#eef7ee;">コード固定・データ可変<br>GASで完結・安全</td>
<td style="border:1px solid #ddd; padding:8px; background:#fceeee;">図・グラフの挙動に癖</td>
</tr>
<tr>
<td style="background:#E8F0E8; font-weight:800; padding:8px; text-align:center;">Coding</td>
<td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>Marp + Antigravity/Copilot</b><br><b>Calude Code/Gemini CLI</b><br><b>＋ライブラリ</b> <span style="font-size:16px;">(python-pptxなど)</span></td>
<td style="border:1px solid #ddd; padding:8px; background:#eef7ee;">文字で済む時早い<br>再現性高く効率的<br>幻覚が少ない</td>
<td style="border:1px solid #ddd; padding:8px; background:#fceeee;">IDEや環境が必要<br>コーディング知識<br>機密情報の扱い</td>
</tr>
<tr>
<td style="background:#E8F0F0; font-weight:800; padding:8px; text-align:center;">利用可能</td>
<td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>NotebookLM + プロンプト</b></td>
<td style="border:1px solid #ddd; padding:8px; background:#eef7ee;">説明の質が高い</td>
<td style="border:1px solid #ddd; padding:8px; background:#fceeee;">編集できない</td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:20px;">大学は機密情報・コストの問題から、外部の生成AIプロダクトを使うのは難しい<br>→ <b>では、学校契約のGeminiでどこまでプレゼン支援が、できるのか</b></div>

<!--
- 道具を整理すると、外部ツール・プロンプト・Coding・利用可能なものに分かれ、それぞれ利点と欠点があります。
- 大学は機密情報やコストの問題で外部プロダクトを使いにくい。では学校契約のGeminiでどこまでできるか、を見ていきます。
-->

---

<div class="page-title">今日、伝えたいこと</div>

# 今日、伝えたいこと

<div style="text-align:center; font-size:30px; font-weight:800; margin:8px 0 18px;">学校契約のGeminiでどこまでプレゼン支援が、できるのか</div>

<div style="display:grid; grid-template-columns:340px 1fr; gap:20px 26px; align-items:center;">

<div class="tag tag-soft" style="font-size:26px; text-align:center; padding:18px; background:#FBEFCF; border-color:#E0B84B; color:#5a4500;">Human Orchestration</div>
<div style="font-size:25px;">AIと協働する<b>ワークフロー</b>を組み立て、<br>AIを道具に作業できる。</div>

<div class="tag tag-soft" style="font-size:26px; text-align:center; padding:18px; background:var(--accent-soft); border-color:var(--accent); color:var(--accent-dark);">Canvas</div>
<div style="font-size:25px;">Geminiの機能である、<b>Canvas</b>を<br>使いこなす事ができる。</div>

<div class="tag tag-soft" style="font-size:25px; text-align:center; padding:18px; background:#E3F0E0; border-color:#6FBF73; color:#2E6B34;">Gemを使用したトライアル</div>
<div class="pip-safe" style="font-size:25px;">Gemを用いてスライドとプロンプトを<br>作成し、結果を評価できる。</div>

</div>

<!--
- 今日伝えたいことは、学校契約のGeminiでどこまでプレゼン支援ができるか。
- 鍵は3つ。Human Orchestrationでワークフローを組み立てること、Canvasを使いこなすこと、Gemでトライアルして評価すること。
-->

---

<div class="page-title">Human Orchestration</div>

# Human Orchestration

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="stepbox" style="margin:8px 0;"><div class="st" style="margin:0;"><b>エージェント</b><br><span style="font-size:21px;">目的をもって行動する存在</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st" style="margin:0;"><b>AI エージェント</b><br><span style="font-size:21px;">設定された目標に対して、自動的にタスクを決定しツールを用いて動作するAIシステム</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st" style="margin:0;"><b>オーケストレーション</b><br><span style="font-size:21px;">タスクを組み合わせ統括する仕組み</span></div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st" style="margin:0;"><b>ヒューマン・イン・ザ・ループ(HITL)</b><br><span style="font-size:21px;">AIに人が介入し精度を上げる仕組み</span><br><b>ヒューマン・”オン”・ザ・ループ</b></div></div>

</div>
<div style="flex:0 0 360px;">
<img src="./src/fig-orchestra-crop.png" alt="ヒューマン・オン・ザ・ループ（指揮プロセス）" style="width:100%; border-radius:8px;">
<div class="cite" style="text-align:right;">Geminiで作成 2026/3/5</div>
</div>
</div>

<!--
- Human Orchestrationのキーワードを整理します。
- エージェントは目的をもって行動する存在。AIエージェントは目標に対して自動でタスクを決め、ツールを使って動くAIシステム。
- オーケストレーションはタスクを束ねて統括する仕組み。オーケストラの指揮者のように、人がAIをオン・ザ・ループで統括します。
-->

---

<div class="page-title">どこにAIは役立ちそう？</div>

# どこにAIは役立ちそう？

<div class="subhead" style="margin-bottom:4px;"><span class="tag tag-soft">スライド先行</span><span style="font-size:22px; color:var(--muted);">(探索的)</span></div>

<div class="flowrow" style="gap:10px; margin:6px 0;">
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">最も伝えたいこと/<br>終了後の状態を決める</div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">スライドの流れを<br>設定する<br><span style="font-size:15px; color:#999;">＋ コンテキストを設定 (絵・グラフ)</span></div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">スライドを作り、<br>内容を整える</div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox red" style="font-size:20px; padding:8px 14px;">一回音読し、<br>原稿を作る</div>
</div>
<div style="font-size:18px; color:var(--muted); margin:2px 0 10px;">アイデア出し・言語化　／　資料検索・作図　／　デザイン確認</div>

<div class="subhead" style="margin-bottom:4px;"><span class="tag tag-soft">テキスト先行</span><span style="font-size:22px; color:var(--muted);">(よく知っている)</span></div>

<div class="flowrow" style="gap:10px; margin:6px 0;">
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">最も伝えたいこと/<br>終了後の状態を決める</div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">箇条書きでシナリオを<br>立てる<br><span style="font-size:15px; color:#5a8a5a;">＋ コンテキストの資料を集める</span></div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox red" style="font-size:20px; padding:8px 14px;">スライドを作る</div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">原稿を作る</div>
<div class="farrow" style="font-size:24px;">→</div>
<div class="fbox gray" style="font-size:20px; padding:8px 14px;">内容を時間まで<br>膨らませる</div>
</div>

<div class="box-info pip-safe" style="font-size:18px; margin-top:6px;"><b>凡例</b>：<span class="tag" style="background:#eee; color:#333; font-size:16px;">メイン作業</span>=使っている　／　<span class="tag" style="background:var(--accent-soft); color:var(--accent-dark); font-size:16px;">追加作業</span>=多分できる</div>

<!--
- AIがどこで役立つかを、2つの進め方で見ます。
- 探索的に進める「スライド先行」と、よく知っている内容の「テキスト先行」。
- それぞれのフローの中で、すでに使っているメイン作業と、これから使えそうな追加作業を整理しました。
-->

---

<div class="page-title">音読し、原稿を作る</div>

# 音読し、原稿を作る

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>手順①</b>　スライドを完成させて、PDFなどで出力</div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st" style="margin:0;"><b>手順②</b>　とりあえず、<b>録音しながら</b>、音読してみる</div>
<div style="font-size:21px; margin:4px 0 0 3.2em;">- 言い淀みOK!、止まってもOK!<br>- あまり考えずに、最初から最後まで説明する</div></div>

<div class="stepbox" style="margin:8px 0;"><div class="st"><b>手順③</b>　スライド・録音を添付し<b>Canvas on</b> でGeminiに入れる</div></div>

<div class="box-info pip-safe" style="font-size:18px; margin-top:8px; line-height:1.5;">
音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。DXの重要性について、10分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。聞き手は、大学事務職員と教授のようなマネジメント層です。真面目だが、比喩を全体で2個まぜて聞きやすくして下さい。分かりやすく、失礼無く、重複無く、スムーズな原稿にし、対話的に変更できるよう、Canvasに出力して下さい。スライドの番号を表示後、その原稿を記入して下さい。スライドの順番を変更したり、スライドを省略してはいけません。また、スライドを変えるべき点や誤字があれば、末尾にその内容を箇条書きで示して下さい。
<div style="margin-top:6px; color:var(--accent-dark); font-weight:800;">目的、時間、聞き手、トーン、出力形式</div>
</div>

<div class="lead-note pip-safe" style="font-size:21px;">語彙のブレが減り聞きやすいので、講師の方でも実施 (例：先週の全学FD)</div>

<!--
- 原稿を作る手順です。①スライドを完成させてPDF出力、②録音しながら音読、③スライドと録音を添付してCanvas onでGeminiに入れる。
- プロンプトには目的・時間・聞き手・トーン・出力形式を盛り込みます。
- 講師自身でやっても語彙のブレが減って聞きやすくなります。
-->

---

<div class="page-title">Gem：カスタマイズしたAI</div>

# Geminiで<span style="color:var(--accent-dark)">手順の決まった処理</span>を指示したい時は、<span style="color:var(--accent-dark)">Gem</span>を使おう

<div class="box-accent" style="margin:6px 0 12px;"><b>Gem = </b>誰でも作れるGeminiを用いたカスタムAIエキスパート</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">
<div class="lead-note" style="color:var(--accent-dark);">千葉大Google Workspaceの標準機能</div>
<div style="font-size:21px; line-height:1.5;">
<div>予め指示した振舞い・プロンプトで<b>生成AIが動く</b></div>
<div>学内にリンクで作ったエキスパートを共有出来る</div>
<div style="margin-left:1em; color:#444;">例：経費精算の記入の質問、プロンプトの作成</div>
<div style="margin-left:1em; color:#444;">　　採点・フィードバックの下書きの作成</div>
<div>業務の属人化回避や反復に便利</div>
<div style="margin-top:6px; color:var(--accent-dark); font-weight:800;">Gemini同様の情報の扱い</div>
<div>学習されず、Gemの作成者にも共有されない</div>
</div>
</div>
<div style="flex:1; position:relative;">
<img src="./src/fig15-img.png" alt="Gemの設定画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div style="position:absolute; left:6px; top:42%; font-size:17px; color:#fff; background:rgba(15,118,110,.9); padding:2px 8px; border-radius:6px;">システムプロンプト</div>
<div style="position:absolute; right:6px; bottom:18%; font-size:17px; color:#fff; background:rgba(15,118,110,.9); padding:2px 8px; border-radius:6px;">ユーザープロンプト</div>
<div style="position:absolute; left:50%; bottom:2%; transform:translateX(-50%); font-size:16px; color:#555;">(コンテキストの一部)</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;">業務を生成AIでより良くする上での一番初歩的な道具<br>今回は、スライドを”構造化”し、Canvasでのスライド化までを伴走</div>

<!--
- Gemは、手順の決まった処理を指示したいときに使う、誰でも作れるカスタムAIエキスパート。千葉大Workspaceの標準機能で、振る舞いやプロンプトを予め仕込んでおける。
- 情報の扱いはGeminiと同じで、学習されず作成者にも共有されない。業務の属人化回避や反復に便利。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Geminiで作成を伴走してほしい時は、<span style="color:var(--accent-dark)">Canvas</span>を使おう

<div class="box-accent" style="margin:6px 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div class="lead-note">使用例1　文章の作成</div>

<div style="display:flex; gap:28px; align-items:center; margin-top:8px;">
<div class="box-info" style="flex:0 0 360px; font-size:24px; font-weight:700;">
<b>文章を自分で編集</b>しつつ、<br>
Geminiに指示を出して<br>
書き換えが可能<br>
Documentに書き出せる
</div>
<img src="./src/fig16-img.png" alt="Canvasで文章を協働編集する画面" style="flex:1; max-width:560px; border:1px solid #ccc; border-radius:6px;">
</div>

<!--
- Canvasは、Geminiに作成を伴走してほしいときに使う、協働作成用の画面。
- 使用例1は文章の作成。自分で編集しながらGeminiに指示を出して書き換えでき、Documentに書き出せる。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Geminiで作成を伴走してほしい時は、<span style="color:var(--accent-dark)">Canvas</span>を使おう

<div class="box-accent" style="margin:6px 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1;">
<div class="lead-note">使用例2　スライドの作成</div>
<img src="./src/fig17-img.png" alt="Canvasで作成したスライド" style="width:100%; border:1px solid #ccc; border-radius:6px; margin:6px 0;">
<div class="box-info" style="font-size:23px; font-weight:700;"><b>編集可能なスライドを</b>書き出せる</div>
</div>
<div style="flex:1;">
<div class="lead-note">使用例3　インタラクティブ出力</div>
<img src="./src/fig18-img.png" alt="Canvasのインタラクティブ出力（問題集）" style="width:100%; border:1px solid #ccc; border-radius:6px; margin:6px 0;">
<div class="box-info pip-safe" style="font-size:23px;">問題集やコードの結果を<br>動作する形で表現できる</div>
</div>
</div>

<!--
- 使用例2はスライドの作成。編集可能なスライドを書き出せる。
- 使用例3はインタラクティブ出力。問題集やコードの結果を、動作する形で表現できる。
-->

---

<div class="page-title">手作業で作成する上で</div>

# スライド作成には、<span style="color:var(--accent-dark)">いくつかの原則</span>がある

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.5;">

<div style="display:grid; grid-template-columns:auto 1fr; gap:10px 16px; align-items:center;">
<div class="tag tag-soft">デザイン</div>
<div>
<div style="font-size:24px;"><b>伝わるデザイン</b>に準拠してみよう</div>
<div style="font-size:19px; color:#555;">髙橋 佑磨 先生（理学研究院）／ EYRJ資料 → <span style="color:var(--tag-blue);">https://alc.chiba-u.jp/eyr/2023/06/16/01design.html</span></div>
</div>

<div class="tag tag-soft">配置</div>
<div>
<div style="font-size:24px;"><b>配置機能</b>で揃えよう</div>
<div style="font-size:19px; color:#555;">配置：ラインに並べる、整列：均等に置く、ページ中央に配置<br>※ あと、順序でレイヤーをイメージできると良い</div>
</div>

<div class="tag tag-soft">シンプル</div>
<div>
<div style="font-size:24px;"><b>なるべくシンプルに</b></div>
<div style="font-size:19px; color:#555;">左上から右下へ、末尾に一言でまとめて、文字数は最小化<br>アニメーションは使わない、1枚1分で話す</div>
</div>
</div>

</div>
<div style="flex:0 0 230px; display:flex; flex-direction:column; gap:10px; align-items:center;">
<img src="./src/fig19-img.png" alt="伝わるプレゼン資料のデザイン" style="width:140px; border:1px solid #ccc;">
<div style="border:2px solid #888; border-radius:8px; width:180px; padding:6px 0; text-align:center; font-size:18px;">
タイトル<br>
<div style="border:1.5px dashed #aaa; margin:6px 14px; padding:18px 0; font-weight:800;">図</div>
言いたいことを1行で
</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; text-align:center;">事前に知っておくだけで、<b>劇的に</b>変わる</div>

<!--
- 手作業でスライドを作るときの原則。デザイン（伝わるデザインに準拠）、配置（配置機能で揃える）、シンプル（左上から右下へ、末尾に一言、文字数最小化、1枚1分）。
- 事前に知っておくだけで劇的に変わる。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# <span style="font-weight:800;">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:18px 22px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; align-self:center;">目的</div>
<div class="box-accent" style="font-size:25px;"><b>Session 1：</b><br>講義：生成AIを発表準備に使う際のアイデアを知る</div>

<div style="font-size:30px; font-weight:800; line-height:1.3; align-self:center;">目標<br>＋<br>まとめ</div>
<div style="font-size:23px; line-height:1.55;">
<div>・ 作業フローにAIを活用する考え方を知る</div>
<div style="margin-left:1.3em; color:#444;">・ Human Orchestration (HOTL)</div>
<div style="margin-left:1.3em; color:#444;">・ フローの書き出しと考え方</div>
<div>・ スライド作成に利用できる道具を知る</div>
<div style="margin-left:1.3em; color:#444;">・ Gem = 誰でも作れるカスタムAIエキスパート</div>
<div style="margin-left:1.3em; color:#444;">・ Canvas = AIとの協働作成可能な作業用・出力用画面</div>
<div>・ 発表準備に使えそうな範囲 (現時点)</div>
<div style="margin-left:1.3em; color:#444;">・ 原稿の作成、スライド案の作成</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は「生成AIを発表準備に使う際のアイデアを知る」。
- 目標とまとめ：作業フローにAIを活用する考え方（HOTL、フローの書き出し）、道具（Gem・Canvas）、発表準備に使えそうな範囲（原稿の作成・スライド案の作成）。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第7回：生成AIを使ってスライドを作ってみる ／ 15-min × 3 sessions</div>

# 生成AI体験<br>ワークショップ

<div class="box-accent" style="font-size:26px; margin-top:10px; max-width:760px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div class="foot">国際未来教育基幹　<b>田川 翔</b></div>

<!--
- ここからSession 2。Canvas機能で、原稿とスライドを実際に作成してみる。
-->

---

<div class="page-title">ワーク① 読み原稿を作る</div>

# <span style="color:var(--accent-dark)">5分</span>：　Canvasを用いて、読み原稿を作ってみましょう。

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">
<div class="stepbox"><div class="st">① 今回の発表の講師の<b>練習音声</b>と<b>PDF</b>で、<b>読み原稿</b>を作成しましょう。</div></div>
<div class="stepbox"><div class="st">② 出力された内容を選択して、<b>Geminiと協働編集</b>してみましょう。</div></div>
</div>
<div style="flex:0 0 300px;">
<img src="./src/fig23-img.png" alt="Geminiのツールメニューでthinking/Canvasを選ぶ" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="text-align:center; font-size:22px; margin-top:8px;"><b>思考モード</b>＋<b>Canvas</b>を選ぶ</div>
</div>
</div>

<div class="callout-blue" style="margin-top:10px;">プロンプト例</div>
<div class="box-info" style="margin-top:0; font-size:18px; line-height:1.45;">
音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。AIを用いたスライド作成支援について、15分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。聞き手は、大学生と大学事務職員と教員です。初心者にも分かりやすいようフレンドリーで聞きやすくして下さい。分かりやすく、失礼無く、重複無く、スムーズな原稿
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方：Slidoに返信してあげてください。<br>
会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- ワーク①。5分で、Canvasを用いて読み原稿を作ってみる。①練習音声とPDFで読み原稿を作成、②出力をGeminiと協働編集。
- ツールメニューで思考モード＋Canvasを選ぶ。困ったらSlidoや手を上げてTA・ペアへ。
- プロンプト例：音声データを書き起こし、スライドの読み原稿を作成。15分間で、用語の一貫性と口語としての自然な短さに注意。聞き手は大学生・事務職員・教員。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# <span style="color:var(--accent-dark)">10分</span>： Gemを用いてスライドを作ってみましょう。

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.35;">
<div class="stepbox"><div class="st">① Gemにスライドにしてほしい内容をアップロードし、実行して下さい。<br><span style="font-size:21px; color:#8a4b00;">注意：機密情報を含むデータは使用しないこと</span></div></div>
<div class="stepbox"><div class="st">② 対話しつつ、作成を進めて下さい(5枚くらいが良いでしょう)。<br><span style="font-size:21px; color:#555;">※ デザインで、元にしたいスライドがない場合は、Gemで決めてよいと伝えて下さい。</span></div></div>
<div class="stepbox"><div class="st">③ 可能であれば<b>保存しSpreadsheet</b>にリンクを貼って共有して下さい。<br><span style="font-size:21px; color:#555;"><b>(名前・顔写真・機密情報不可)</b>　※右上の共有から、リンクを選択 / 共有範囲は千葉大</span></div></div>
</div>
<div style="flex:0 0 270px;">
<img src="./src/fig24-img.png" alt="GeminiのツールメニューでProモード+Canvas" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="text-align:center; font-size:22px; margin-top:8px;"><b>Proモード</b>＋<b>Canvas</b>を選ぶ (事前選択済み)</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:20px;">
オンラインの方：困ったらSlidoに質問を送って下さい！　余裕がある方：Slidoに返信してあげてください。／ 会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- ワーク②。10分で、Gemを用いてスライドを作ってみる。①内容をアップロードして実行（機密情報は使わない）、②対話しつつ5枚くらい、③可能ならSpreadsheetにリンクを貼って共有（名前・顔写真・機密情報不可、共有範囲は千葉大）。
- ProモードでCanvasを選ぶ（事前選択済み）。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# <span style="font-weight:800;">振り返り</span>

<div style="display:grid; grid-template-columns:auto 1fr; gap:40px 22px; align-items:center; margin-top:18px;">

<div style="font-size:30px; font-weight:800;">目的</div>
<div class="box-accent" style="font-size:26px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div style="font-size:30px; font-weight:800; line-height:1.3;">目標<br>＋<br>まとめ</div>
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

<div class="box-warn" style="margin:6px 0 12px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">
<div style="font-size:23px; line-height:1.6;">
<div>・ 実際に使ってみて<b>「上手くいった点」「イマイチな点」</b>を教えて下さい。</div>
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
- Session 3の進め方。議論・座談会をSlidoで進める。協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に。
- 問い：実際に使って上手くいった点・イマイチな点、Gem/Canvasが便利そうなユースケースとワークフロー、今日面白かったこと・気づき。
- Slidoはスマホは直接リンク、PCはGoogle検索「Slido」→コード ALC-AI1-07。
-->
