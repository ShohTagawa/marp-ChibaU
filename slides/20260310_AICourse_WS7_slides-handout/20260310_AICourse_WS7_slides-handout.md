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

<div class="stepbox" style="margin-top:8px;">
<div class="st">①<b> PCを立ち上げ、お持ちの千葉大学Google Workspaceにログインして下さい</b></div>
<div class="st" style="margin-left:1.5em;">→ 学校のGmailが立ち上がる状況ならOKです。</div>
<div class="st">②<b> インタラクションツール Slidoにアクセスして下さい</b></div>
<div class="st" style="margin-left:1.5em;">URLを配布したり、質問やアンケートをとったりします</div>
<div class="st" style="margin-left:1.5em; color:#C0182B;">※お名前などの個人情報の入力は禁止です</div>
</div>

<div class="cardrow pip-safe" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">スマホから</div>
<p style="text-align:center; font-size:21px; margin:6px 0;">QRコードを読み取り</p>
</div>
<div class="pcard" style="flex:2;">
<div class="pc-h">PCから</div>
<p style="margin:4px 0; font-size:21px;"><b>方法1</b> Google検索「Slido」→コード入力 <span class="tag tag-soft" style="font-size:20px;">ALC-AI1-07</span></p>
<p style="margin:4px 0; font-size:21px;"><b>方法2</b> 直接リンク <span style="font-size:18px; color:var(--tag-blue);">https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</span></p>
</div>
</div>

<!--
- 始める前に。①千葉大Google Workspaceにログイン、②Slidoにアクセス。個人情報は入力しないこと。
-->

---

<!-- _class: intro -->

<div class="page-title">講師紹介</div>

<div class="intro-head">
<div>
<div class="intro-name"><span class="ruby">たがわ　しょう</span>田川　翔</div>
<div class="intro-affil"><span class="role">所属：</span>千葉大学 高等教育センター/アカデミックリンクセンター<br><b>大学教育を企画し、学生と教員を支援する仕事</b></div>
</div>
<img src="./src/fig-s2-b.png" alt="大学で教える・FFP・Teaching with AI" style="height:180px;">
</div>

<div class="two-col" style="margin-top:10px; grid-template-columns:1fr 1fr 1fr;">
<div class="col">
<h3>① 元々は理学の人</h3>
<img src="./src/fig-s2-a.png" alt="地球磁場の研究" style="height:150px; display:block; margin:6px auto;">
<div class="cite">Tagawa et al. (2021) <i>Nat. Commun.</i></div>
</div>
<div class="col">
<h3>② 色々な経験</h3>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="col">
<h3>③ 大学を学びやすく!</h3>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
<li>オープンバッジ</li>
</ul>
<p style="font-size:19px; margin-top:6px;">現在、<b>Teaching with AI</b>を翻訳・出版準備中</p>
</div>
</div>

<!--
- 講師紹介。田川翔。高等教育センター／アカデミックリンクセンター所属。理学出身で、ICT支援・オンライン授業・民間経験を経て、いま大学を学びやすくする仕事をしている。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="line-height:1.15;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:18px;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:700;">2025年度 第7回： 生成AIを使ってスライドを作ってみる</div>
<div style="font-size:25px; color:var(--accent-dark); margin-top:6px;">15-min × 3 sessions</div>
</div>

<div style="text-align:center; margin-top:36px; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- 第7回「生成AIを使ってスライドを作ってみる」。15分×3セッションで進めます。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<table style="width:100%; border-collapse:separate; border-spacing:0 10px; font-size:24px;">
<tr>
<td style="width:140px; color:#666; font-size:21px;">最初の15分</td>
<td style="width:200px;"><span class="tag tag-soft" style="font-size:26px; padding:6px 28px;">講義</span></td>
<td>- プレゼンテーションの様々な準備に生成AIを使う実践的方法を理解できる。</td>
</tr>
<tr>
<td style="color:#666; font-size:21px;">真ん中の15分</td>
<td><span class="tag" style="color:#C0182B; border:2.5px solid #C0182B; background:#FCEAEC; font-size:26px; padding:6px 28px;">体験</span></td>
<td>- Canvas機能を応用し、プレゼンテーションを作成してみる。</td>
</tr>
<tr>
<td style="color:#666; font-size:21px;">最後の15分</td>
<td><span class="tag" style="color:#2E7D46; border:2.5px solid #6FBF73; background:#EAF7EE; font-size:26px; padding:6px 18px;">議論・座談会</span></td>
<td>- 使用してみて気がついたこと (利点と限界)<br>- CanvasやGemをどう活用したいですか。<br>- 今日面白かったこと、気付きは何でしたか。</td>
</tr>
</table>

<!--
- 今回は3部構成。最初の15分が講義、真ん中が体験、最後が議論・座談会です。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero" style="margin-bottom:24px;">
<div class="title-big" style="line-height:1.15; font-size:60px;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center;">
<div style="font-size:25px; color:var(--accent-dark); font-weight:700;">2025年度 第7回：生成AIを使ってスライドを作ってみる</div>
<div style="font-size:22px; color:var(--accent-dark); margin-top:4px;">15-min × 3 sessions</div>
</div>

<div class="callout-gray" style="max-width:860px; margin:24px auto 0; text-align:left; font-size:26px;"><b>Session 1：</b><br><span style="margin-left:1em;">講義：生成AIを発表準備に使う際のアイデアを知る</span></div>

<div style="text-align:center; margin-top:20px; font-size:23px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 1。講義：生成AIを発表準備に使う際のアイデアを知る、を扱います。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div style="display:grid; grid-template-columns:120px 1fr; gap:18px 24px; align-items:center; margin-top:20px;">

<div style="font-size:36px; font-weight:800;">目的</div>
<div class="callout-gray" style="font-size:26px; margin:0;"><b>Session 1：</b><br><span style="margin-left:1em;">講義：生成AIを発表準備に使う際のアイデアを知る</span></div>

<div style="font-size:36px; font-weight:800;">目標</div>
<div class="callout-gray" style="font-size:26px; margin:0;">
・ 作業フローにAIを活用する考え方を知る<br>
・ スライド作成に利用できる道具を知る<br>
・ 発表準備に使えそうな範囲 (現時点)
</div>

</div>

<!--
- Session 1の目的は「発表準備に使う際のアイデアを知る」。目標は、作業フローへのAI活用の考え方、利用できる道具、使えそうな範囲を知ること。
-->

---

<div class="page-title">今の最先端は？</div>

# 今の最先端は？

<div class="lead-note">スライド作成の自動化は、<b style="color:var(--accent);">1つのトレンド</b>になっている</div>

<table style="width:100%; border-collapse:collapse; font-size:20px; line-height:1.45; margin-top:6px;">
<tr>
<td style="width:80px;"></td>
<td style="text-align:center; background:#444; color:#fff; font-weight:800; padding:5px; border-radius:6px 6px 0 0;">Chatパラダイム</td>
<td style="text-align:center; background:#444; color:#fff; font-weight:800; padding:5px; border-radius:6px 6px 0 0;">Toolパラダイム</td>
<td style="text-align:center; background:var(--accent); color:#fff; font-weight:800; padding:5px; border-radius:6px 6px 0 0; position:relative;"><span style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); color:var(--accent); font-size:16px; background:#fff; padding:0 4px;">なう</span>Agentパラダイム</td>
</tr>
<tr>
<td style="font-weight:700;">変化</td>
<td style="text-align:center; padding:6px;">AIと対話</td>
<td style="text-align:center; padding:6px;">AIが案・部品を作成</td>
<td style="text-align:center; padding:6px;">AIが作成を実行</td>
</tr>
<tr>
<td style="font-weight:700;">使い方</td>
<td style="background:#EAF2FB; padding:8px; text-align:center;">情報収集 DeepResearch<br>発表表現のアイデア出し<br>発表・資料作成のコツ<br>誤字・分かりにくい点の確認</td>
<td style="background:#EAF7EE; padding:8px; text-align:center;">スライドの案の作成<br>発表資料の図の生成<br>構成・原稿の作成支援</td>
<td style="background:var(--accent-soft); padding:8px; text-align:center;">対話によるスライドの完成<br>スライド自体の作り込み<br>デザイン・表現の一貫性担保<br>作成ワークフローの実現</td>
</tr>
<tr>
<td style="font-weight:700;">例</td>
<td style="padding:6px;">こうしたらどうですか？<br>→ 人は作成者</td>
<td style="padding:6px;">スライド案/図を作成する<br>→ 人は編集者 (“ガチャ”)</td>
<td style="padding:6px;">スライドを自然言語で指示する<br><b style="color:var(--accent);">→人とAIで協働作成</b></td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:21px; font-weight:600;"><b style="color:#8a4b00;">トレンド：</b> 2026年に入り、AIによる「補助」から<b>「自律的・協働的な生成」</b>へ<br><b style="color:#8a4b00;">限界：</b> 細かい修正や作成(例：スライドレベルの作成)はまだ難しい</div>

<!--
- 最先端の整理。Chat（対話）→Tool（部品作成）→Agent（作成を実行）とパラダイムが移り、いまはAgentが「なう」。補助から自律的・協働的生成へ。ただし細かい作成はまだ難しい。
-->

---

<div class="page-title">今の最先端は？</div>

# 今の最先端は？

<table style="width:100%; border-collapse:collapse; font-size:19px; line-height:1.3; margin-top:2px;">
<tr>
<td style="width:90px;"></td>
<td></td>
<td style="text-align:center; background:#EAF7EE; font-weight:800; padding:3px; width:280px;">利点</td>
<td style="text-align:center; background:#FCEAEC; font-weight:800; padding:3px; width:280px;">欠点</td>
</tr>
<tr>
<td style="font-weight:700; color:#666;">外部<br>ツール</td>
<td style="background:#FFF6E6; padding:5px; text-align:center; font-weight:800; font-size:22px;">Gammaを用いたデモ<br><span style="font-size:17px; font-weight:600;">(当日、動画にて実演予定)</span></td>
<td style="padding:5px;">情報の質が高い<br>細かく作り込める<br>その場で作れる<br>対話的に作れる</td>
<td style="padding:5px;">値段が高い<br>機密情報の取扱い<br>100%は難しい<br>学問使用が難しいかも</td>
</tr>
<tr>
<td></td>
<td style="background:#FFF3D6; padding:5px; text-align:center; font-weight:800; font-size:21px;">Canva / Genspark etc</td>
<td colspan="2" style="padding:5px; color:#888;">説明の質が高い ／ 編集できない</td>
</tr>
<tr>
<td style="font-weight:700; color:#666;">プロンプト</td>
<td style="background:var(--accent-soft); padding:5px; text-align:center; font-weight:800; font-size:21px;">まじん式</td>
<td style="padding:5px;">コード固定・データ可変<br>GASで完結・安全</td>
<td style="padding:5px;">図・グラフの挙動に癖</td>
</tr>
<tr>
<td style="font-weight:700; color:#666;">Coding</td>
<td style="background:#EAF7EE; padding:5px; text-align:center; font-weight:800; font-size:20px;">Marp + Antigravity/Copilot<br>Calude Code/Gemini CLI<br><span style="font-size:16px; font-weight:600;">+ ライブラリ (python-pptxなど)</span></td>
<td style="padding:5px;">文字で済む時早い<br>再現性高く効率的<br>幻覚が少ない</td>
<td style="padding:5px;">IDEや環境が必要<br>コーディング知識<br>機密情報の扱い</td>
</tr>
<tr>
<td style="font-weight:700; color:#666;">利用可能</td>
<td style="background:#EAF7EE; padding:5px; text-align:center; font-weight:800; font-size:20px;">NotebookLM + プロンプト</td>
<td colspan="2" style="padding:5px; color:#888;">説明の質が高い ／ 編集できない</td>
</tr>
</table>

<div class="box-accent pip-safe" style="margin-top:6px; font-size:21px;">大学は機密情報・コストの問題から、外部の生成AIプロダクトを使うのは難しい<br>→ <b>では、学校契約のGeminiでどこまでプレゼン支援が、できるのか</b></div>

<!--
- 道具を利点／欠点で比較。Gamma等の外部ツールは強力だが機密・コストが難点。Coding系やNotebookLMは学内で使いやすい。だから「学校契約のGeminiでどこまでできるか」を問う。
-->

---

<div class="page-title">今日、伝えたいこと</div>

# 今日、伝えたいこと

<div style="text-align:center; font-size:30px; margin:6px 0 18px;">学校契約のGeminiでどこまでプレゼン支援が、できるのか</div>

<div style="display:grid; grid-template-columns:360px 1fr; gap:18px 28px; align-items:center;">

<div style="background:#FFF3D6; border-radius:14px; padding:18px; text-align:center; font-size:26px; font-weight:700;">Human Orchestration</div>
<div style="font-size:25px;">AIと協働する<b>ワークフロー</b>を組み立て、<br>AIを道具に作業できる。</div>

<div style="background:var(--accent-soft); border-radius:14px; padding:18px; text-align:center; font-size:26px; font-weight:700;">Canvas</div>
<div style="font-size:25px;">Geminiの機能である、<b>Canvas</b>を<br>使いこなす事ができる。</div>

<div style="background:#EAF7EE; border-radius:14px; padding:18px; text-align:center; font-size:25px; font-weight:700;">Gemを使用したトライアル</div>
<div style="font-size:25px;">Gemを用いてスライドとプロンプトを<br>作成し、結果を評価できる。</div>

</div>

<!--
- 今日伝えたいことは3つ。①Human Orchestrationでワークフローを組む、②Canvasを使いこなす、③Gemで作って評価する。すべて学校契約のGeminiで。
-->

---

<div class="page-title">Human Orchestration</div>

# Human Orchestration

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div style="margin:8px 0;"><b style="font-size:25px;">AI エージェント</b><br><span style="font-size:21px; color:#555;">目的をもって行動する存在</span><br><span style="font-size:22px;">設定された目標に対して、自動的にタスクを決定しツールを用いて動作するAIシステム</span></div>

<div style="margin:8px 0;"><b style="font-size:25px;">オーケストレーション</b><br><span style="font-size:22px;">タスクを組み合わせ統括する仕組み</span></div>

<div style="margin:8px 0;"><b style="font-size:25px;">ヒューマン・イン・ザ・ループ(HITL)</b><br><span style="font-size:22px;">AIに人が介入し精度を上げる仕組み</span></div>

<div style="margin:8px 0;"><b style="font-size:25px; color:var(--accent);">ヒューマン・”オン”・ザ・ループ</b></div>

</div>
<div style="flex:0 0 360px; text-align:center;">
<img src="./src/fig-s10-hitl.png" alt="ヒューマン・オン・ザ・ループ（指揮者と楽団）" style="width:100%; border-radius:8px;">
<div class="cite" style="margin-top:2px;">Geminiで作成 2026/3/5</div>
</div>
</div>

<!--
- Human Orchestration の用語整理。AIエージェント＝目的をもって自律的に動くAI、オーケストレーション＝タスクを統括する仕組み、HITL＝人が介入する。理想は人が指揮者として全体を見る「オン・ザ・ループ」。
-->

---

<div class="page-title">どこにAIは役立ちそう？</div>

# どこにAIは役立ちそう？

<div class="lead-note" style="margin:0 0 0;"><b>スライド先行</b> <span style="font-size:21px; color:#666;">(探索的)</span></div>
<div style="display:flex; align-items:center; gap:4px; font-size:18px; margin:2px 0; white-space:nowrap;">
<div style="display:flex; flex-direction:column; align-items:center;">
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center;">最も伝えたいこと/<br>終了後の状態を決める</div>
<div style="background:#FCEAEC; border-radius:6px; padding:2px 12px; margin-top:4px; font-size:17px; text-align:center;">アイデア出し<br>言語化</div>
</div>
<span class="farrow" style="font-size:20px;">→</span>
<div style="display:flex; flex-direction:column; gap:6px; align-items:center;">
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center;">スライドの流れを<br>設定する</div>
<div style="display:flex; flex-direction:column; align-items:center;">
<div style="background:#D6E9D6; border-radius:8px; padding:4px 12px; text-align:center;">コンテキストを<br>設定する (絵・グラフ)</div>
<div style="display:flex; gap:6px; margin-top:4px;"><span style="background:#FCEAEC; border-radius:6px; padding:2px 10px; font-size:17px;">資料検索</span><span style="background:#FCEAEC; border-radius:6px; padding:2px 10px; font-size:17px;">作図</span></div>
</div>
</div>
<span class="farrow" style="font-size:20px;">→</span>
<div style="display:flex; flex-direction:column; align-items:center;">
<div style="background:#D6E9D6; border-radius:6px; padding:2px 12px; margin-bottom:4px; font-size:17px; text-align:center;">デザイン確認</div>
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center;">スライドを作り、<br>内容を整える</div>
</div>
<span class="farrow" style="font-size:20px;">→</span>
<div style="border:2.5px solid var(--accent); border-radius:8px; padding:4px 12px; text-align:center; font-weight:700;">一回音読し、<br>原稿を作る</div>
</div>

<div class="lead-note" style="margin-top:6px;"><b>テキスト先行</b> <span style="font-size:21px; color:#666;">(よく知っている)</span></div>
<div style="display:flex; align-items:flex-start; gap:4px; font-size:18px; margin:2px 0; white-space:nowrap;">
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center; margin-top:0;">最も伝えたいこと/<br>終了後の状態を決める</div>
<span class="farrow" style="font-size:20px; margin-top:8px;">→</span>
<div style="display:flex; flex-direction:column; gap:6px;">
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center;">箇条書きでシナリオを<br>立てる</div>
<div style="display:flex; flex-direction:column; align-items:center;">
<div style="background:#D6E9D6; border-radius:8px; padding:4px 12px; text-align:center;">コンテキストの資料を<br>集める</div>
<div style="display:flex; gap:6px; margin-top:4px;"><span style="background:#FCEAEC; border-radius:6px; padding:2px 10px; font-size:17px;">資料検索</span><span style="background:#FCEAEC; border-radius:6px; padding:2px 10px; font-size:17px;">作図</span></div>
</div>
</div>
<span class="farrow" style="font-size:20px; margin-top:8px;">→</span>
<div style="display:flex; flex-direction:column; gap:6px;">
<div style="border:2.5px solid var(--accent); border-radius:8px; padding:4px 12px; text-align:center; font-weight:700;">スライドを作る</div>
<div style="background:#D6E9D6; border-radius:8px; padding:4px 12px; text-align:center;">原稿を作る</div>
</div>
<span class="farrow" style="font-size:20px; margin-top:8px;">→</span>
<div style="background:#E2E2E2; border-radius:8px; padding:4px 12px; text-align:center; margin-top:8px;">内容を時間まで<br>膨らませる</div>
</div>

<div class="pip-safe" style="margin-top:4px; font-size:19px; display:flex; gap:14px; align-items:center; flex-wrap:wrap;">
<b>凡例</b>
<span style="background:#E2E2E2; padding:3px 12px; border-radius:6px;">メイン作業</span>
<span style="background:#D6E9D6; padding:3px 12px; border-radius:6px;">追加作業</span>
<span style="background:#FCEAEC; padding:3px 12px; border-radius:6px;">使っている</span>
<span style="color:#888; font-weight:700;">多分できる</span>
<span style="color:#666;">資料検索 / 作図 / アイデア出し / デザイン確認 など</span>
</div>

<!--
- AIが役立つ場所。スライド先行（探索的）とテキスト先行（よく知っている）で作業フローが違う。赤枠が、AIで効率化しやすいメインの作業ポイント。
-->

---

<div class="page-title">音読し、原稿を作る</div>

# 音読し、原稿を作る

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>手順①</b>　スライドを完成させて、PDFなどで出力</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>手順②</b>　とりあえず、<b>録音しながら</b>、音読してみる</div>
<div class="st" style="margin-left:1.5em; font-size:23px;">- 言い淀みOK!、止まってもOK!<br>- あまり考えずに、最初から最後まで説明する</div>
</div>

<div class="stepbox" style="margin:8px 0;">
<div class="st"><b>手順③</b>　スライド・録音を添付し Canvas on でGeminiに入れる</div>
<div class="box-info pip-safe" style="margin-top:8px; font-size:18px; line-height:1.4;">音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。DXの重要性について、10分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。聞き手は、大学事務職員と教授のようなマネジメント層です。真面目だが、比喩を全体で2個まぜて聞きやすくして下さい。分かりやすく、失礼無く、重複無く、スムーズな原稿にし、対話的に変更できるよう、Canvasに出力して下さい。スライドの番号を表示後、その原稿を記入して下さい。スライドの順番を変更したり、スライドを省略してはいけません。また、スライドを変えるべき点や誤字があれば、末尾にその内容を箇条書きで示して下さい。</div>
<div class="st" style="text-align:right; font-size:21px; color:var(--accent-dark); margin-top:4px;">目的、時間、聞き手、トーン、出力形式</div>
</div>

<div class="box-warn pip-safe" style="margin-top:6px; font-size:21px;">語彙のブレが減り聞きやすくなるので、講師の方でも実施 (例：先週の全学FD)</div>

<!--
- 原稿の作り方。①スライドをPDFで出力、②録音しながら音読、③スライドと録音をCanvas onでGeminiに入れる。プロンプトには目的・時間・聞き手・トーン・出力形式を盛り込む。音読は語彙のブレが減るので講師でも有効。
-->

---

<div class="page-title">Gem：カスタマイズしたAI</div>

# Gem：<span style="color:var(--accent-dark)">カスタマイズしたAI</span>

<div style="font-size:25px; margin:2px 0 8px;">Geminiで<b>手順の決まった処理</b>を指示したい時は、<b>Gem</b>を使おう</div>

<div class="box-accent" style="margin:0 0 12px;"><b>Gem = </b>誰でも作れるGeminiを用いたカスタムAIエキスパート</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1.05;">

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-bottom:4px;">千葉大Google Workspaceの標準機能</div>

<div style="font-size:22px; line-height:1.55;">
<b>予め指示した振舞い・プロンプトで生成AIが動く</b><br>
‐ 学内にリンクで作ったエキスパートを共有出来る<br>
‐ 例：経費精算の記入の質問、プロンプトの作成<br>
　　　採点・フィードバックの下書きの作成<br>
‐ 業務の属人化回避や反復に便利
</div>

<div class="box-info" style="margin-top:10px; font-size:21px;"><b>Gemini同様の情報の扱い</b><br>学習されず、Gemの作成者にも共有されない</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:6px;">
<div style="position:relative;">
<img src="./src/fig15-img.png" alt="GemのカスタムAI作成画面。システムプロンプトとユーザープロンプトの入力欄" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
<div style="display:flex; gap:10px; font-size:20px;">
<div style="flex:1; border:2px solid var(--accent); border-radius:6px; padding:3px 8px; text-align:center; color:var(--accent-dark); font-weight:800;">システムプロンプト</div>
<div style="flex:1; border:2px solid var(--tag-blue); border-radius:6px; padding:3px 8px; text-align:center; color:var(--tag-blue); font-weight:800;">ユーザープロンプト<br><span style="font-size:17px; font-weight:600;">(コンテキストの一部)</span></div>
</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:21px;">業務を生成AIでより良くする上での一番初歩的な道具<br>今回は、スライドを”構造化”し、Canvasでのスライド化までを伴走</div>

<!--
- Geminiで手順の決まった処理を指示したいときは、Gemを使う。GemとはGeminiを用いたカスタムAIエキスパートで、誰でも作れる。
- 千葉大Google Workspaceの標準機能。予め指示した振舞い・プロンプトで生成AIが動く。学内にリンクで共有でき、経費精算の質問やプロンプト作成、採点・フィードバックの下書き作成などに使える。業務の属人化回避や反復に便利。
- 情報の扱いはGemini同様で、学習されず、Gemの作成者にも共有されない。業務を生成AIでより良くする一番初歩的な道具。今回はスライドを構造化し、Canvasでのスライド化まで伴走する。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Canvas：<span style="color:var(--accent-dark)">伴走する道具</span>

<div style="font-size:25px; margin:2px 0 8px;">Geminiで作成を伴走してほしい時は、<b>Canvas</b>を使おう</div>

<div class="box-accent" style="margin:0 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="font-size:27px; font-weight:800; margin-bottom:8px;">使用例1　文章の作成</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1; display:flex; flex-direction:column; gap:12px; padding-top:10px;">
<div class="box-info"><b>文章を自分で編集</b>しつつ、<br>Geminiに指示を出して<br>書き換えが可能</div>
<div class="box-accent">Documentに書き出せる</div>
</div>
<div style="flex:1.5;">
<img src="./src/fig16-img.png" alt="Canvasで文章を編集している画面。テキストを選択しGeminiに書き換えを指示" style="width:100%; border:1px solid #ccc; border-radius:6px;">
</div>
</div>

<!--
- Geminiで作成を伴走してほしいときはCanvasを使う。CanvasはAIとの協働作成が可能な作業用・出力用の画面。
- 使用例1は文章の作成。文章を自分で編集しつつ、Geminiに指示を出して書き換えができる。Documentに書き出すこともできる。
-->

---

<div class="page-title">Canvas：伴走する道具</div>

# Canvas：<span style="color:var(--accent-dark)">伴走する道具</span>

<div style="font-size:25px; margin:2px 0 8px;">Geminiで作成を伴走してほしい時は、<b>Canvas</b>を使おう</div>

<div class="box-accent" style="margin:0 0 14px;"><b>Canvas = </b>AIとの協働作成可能な作業用・出力用画面</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">
<div style="font-size:26px; font-weight:800; margin-bottom:8px;">使用例2　スライドの作成</div>
<img src="./src/fig17-img.png" alt="Canvasで作成したスライドの例。編集可能なスライドとして書き出せる" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent" style="margin-top:10px;"><b>編集可能なスライドを</b>書き出せる</div>
</div>
<div style="flex:1;">
<div style="font-size:26px; font-weight:800; margin-bottom:8px;">使用例3　インタラクティブ出力</div>
<img src="./src/fig18-img.png" alt="Canvasのインタラクティブ出力の例。問題集やコードの結果を動作する形で表現" style="width:100%; border:1px solid #ccc; border-radius:6px;">
<div class="box-accent pip-safe" style="margin-top:10px;">問題集やコードの結果を<br>動作する形で表現できる</div>
</div>
</div>

<!--
- 使用例2はスライドの作成。編集可能なスライドとして書き出せる。
- 使用例3はインタラクティブ出力。問題集やコードの結果を、実際に動作する形で表現できる。
-->

---

<div class="page-title">手作業で作成する上で</div>

# 手作業で作成する上で

<div style="font-size:25px; margin:2px 0 10px;">スライド作成には、<b>いくつかの原則</b>がある</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1.7;">

<div class="exrow" style="grid-template-columns:7em 1fr; align-items:start;">
<div><span class="tag tag-soft" style="font-size:22px;">デザイン</span></div>
<div><b>伝わるデザイン</b>に準拠してみよう<br><span style="font-size:20px; color:#555;">髙橋 佑磨 先生 （理学研究院）／EYRJ資料 → <a>https://alc.chiba-u.jp/eyr/2023/06/16/01design.html</a></span></div>
</div>

<div class="exrow" style="grid-template-columns:7em 1fr; align-items:start;">
<div><span class="tag tag-soft" style="font-size:22px;">配置</span></div>
<div><b>配置機能</b>で揃えよう<br><span style="font-size:20px; color:#555;">配置：ラインに並べる、整列：均等に置く、ページ中央に配置<br>※ あと、順序でレイヤーをイメージできると良い</span></div>
</div>

<div class="exrow" style="grid-template-columns:7em 1fr; align-items:start;">
<div><span class="tag tag-soft" style="font-size:22px;">シンプル</span></div>
<div><b>なるべくシンプルに</b><br><span style="font-size:20px; color:#555;">左上から右下へ、末尾に一言でまとめて、文字数は最小化<br>アニメーションは使わない、1枚1分で話す</span></div>
</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:10px; align-items:center;">
<img src="./src/fig19-img.png" alt="「伝わるプレゼン資料のデザイン」学会発表ポスター編のポスター" style="height:236px; border:1px solid #ccc;">
<div style="border:2px solid #888; border-radius:8px; padding:10px 16px; width:80%; text-align:left; background:#fff;">
<div style="font-size:20px; font-weight:800; border-bottom:1px solid #ccc; padding-bottom:3px; margin-bottom:8px;">タイトル</div>
<div style="display:flex; align-items:center; justify-content:center; height:60px; border:1px dashed #aaa; color:#888; font-size:24px;">図</div>
<div style="font-size:18px; margin-top:6px; color:#555;">言いたいことを1行で</div>
</div>
</div>
</div>

<div style="text-align:center; font-size:27px; font-weight:800; color:var(--accent-dark); margin-top:8px;">事前に知っておくだけで、<span style="color:var(--accent)">劇的に</span>変わる</div>

<!--
- 手作業でスライドを作成する上での原則。デザインは「伝わるデザイン」に準拠してみる。理学研究院の髙橋佑磨先生のEYRJ資料が参考になる。
- 配置は配置機能で揃える。ラインに並べる、均等に置く、ページ中央に配置。順序でレイヤーをイメージできると良い。
- シンプルになるべくする。左上から右下へ、末尾に一言でまとめ、文字数は最小化。アニメーションは使わず、1枚1分で話す。事前に知っておくだけで、劇的に変わる。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標　<span style="font-size:26px; color:#666;">振り返り</span>

<div class="box-info" style="margin:6px 0 14px; margin-right:calc(var(--pip-w) + 24px);"><b>Session 1：</b>講義：生成AIを発表準備に使う際のアイデアを知る</div>

<div class="bgroup">
<div class="bg-label">目的</div>
<div class="bg-items">
<div>講義：生成AIを発表準備に使う際のアイデアを知る</div>
</div>
</div>

<div class="bgroup" style="margin-top:12px;">
<div class="bg-label">目標<br>+<br>まとめ</div>
<div class="bg-items">
<div><b>作業フローにAIを活用する考え方を知る</b>　<span style="font-size:21px; color:#555;">Human Orchestration (HOTL)／フローの書き出しと考え方</span></div>
<div><b>スライド作成に利用できる道具を知る</b>　<span style="font-size:21px; color:#555;">Gem = 誰でも作れるカスタムAIエキスパート／Canvas = AIとの協働作成可能な作業用・出力用画面</span></div>
<div><b>発表準備に使えそうな範囲 (現時点)</b>　<span style="font-size:21px; color:#555;">原稿の作成、スライド案の作成</span></div>
</div>
</div>

<!--
- セッション1の振り返り。目的は、生成AIを発表準備に使う際のアイデアを知ること。
- 目標：作業フローにAIを活用する考え方を知る（Human Orchestration、HOTL、フローの書き出しと考え方）。スライド作成に利用できる道具を知る（Gemは誰でも作れるカスタムAIエキスパート、CanvasはAIとの協働作成可能な作業用・出力用画面）。発表準備に使えそうな範囲は、現時点で原稿の作成とスライド案の作成。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="margin-top:8px;">
<div style="color:var(--accent-dark); font-weight:700;">2025年度 第7回：生成AIを使ってスライドを作ってみる</div>
<div style="color:#666;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="margin:24px auto 0; max-width:760px; text-align:left; font-size:27px;"><b>Session 2：</b><br>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div class="title-meta" style="margin-top:22px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 2です。Canvas機能で、原稿とスライドを実際に作成してみましょう。
-->

---

<div class="page-title">ワーク① 読み原稿を作る</div>

# ワーク① <span style="color:var(--accent-dark)">読み原稿を作る</span>

<div class="box-warn" style="margin:2px 0 10px;"><b> 5分：　Canvasを用いて、読み原稿を作ってみましょう。</b></div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.55;">

<div class="stepbox" style="margin:6px 0;">
<div class="st">① 今回の発表の講師の<b>練習音声</b>と<b>PDF</b>で、<b>読み原稿</b>を作成しましょう。</div>
</div>
<div class="stepbox" style="margin:6px 0;">
<div class="st">② 出力された内容を選択して、<b>Geminiと協働編集</b>してみましょう。</div>
</div>

<div style="border:2px solid #aaa; border-radius:10px; padding:10px 16px; margin-top:10px; font-size:20px; line-height:1.5; background:#fafafa;">
<div style="font-size:18px; color:#888; font-weight:800; margin-bottom:4px;">プロンプト</div>
音声データを書き起こし、スライドの読み原稿を作成して下さい。音声は、添付のPDFのスライドの読み上げ資料です。<br>
AIを用いたスライド作成支援について、15分間で伝えるよう、「用語の一貫性」と「口語としての自然な短さ」に注意した原稿にして下さい。<br>
聞き手は、大学生と大学事務職員と教員です。初心者にも分かりやすいようフレンドリーで聞きやすくして下さい。<br>
分かりやすく、失礼無く、重複無く、スムーズな原稿にし、対話的に変更できるよう、Canvasに出力して下さい。<br>
スライドの番号を表示後、その原稿を記入して下さい。スライドの順番を変更したり、スライドを省略してはいけません。<br>
また、スライドを変えるべき点や誤字があれば、末尾にその内容を箇条書きで示して下さい。
</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:12px;">
<div class="box-accent" style="text-align:center;"><b>思考モード</b><br><b>Canvas</b>を選ぶ</div>
<div class="box-info pip-safe" style="font-size:20px;">オンラインの方：困ったらSlidoに質問を送って下さい！<br>余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>
</div>
</div>

<!--
- ワーク①。5分間で、Canvasを用いて読み原稿を作ってみましょう。
- ①今回の発表の講師の練習音声とPDFで読み原稿を作成。②出力された内容を選択して、Geminiと協働編集してみる。モードは「思考モード」でCanvasを選びます。
- プロンプト例を右に示します。音声を書き起こし、用語の一貫性と口語としての自然な短さに注意した15分の原稿を、聞き手に合わせてCanvasに出力してもらう、というものです。困ったらSlidoや、会場ではTA・ペアに聞いてください。
-->

---

<div class="page-title">ワーク② スライドを作る</div>

# ワーク② <span style="color:var(--accent-dark)">スライドを作る</span>

<div class="box-warn" style="margin:2px 0 10px;"><b> 10分： Gemを用いてスライドを作ってみましょう。</b></div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.55;">

<div class="stepbox" style="margin:6px 0;">
<div class="st">① Gemにスライドにしてほしい内容をアップロードし、実行して下さい。<br><span style="font-size:21px; color:var(--accent);">注意：機密情報を含むデータは使用しないこと</span></div>
</div>
<div class="stepbox" style="margin:6px 0;">
<div class="st">② 対話しつつ、作成を進めて下さい(5枚くらいが良いでしょう)。<br><span style="font-size:21px; color:#555;">※ デザインで、元にしたいスライドがない場合は、Gemで決めてよいと伝えて下さい。</span></div>
</div>
<div class="stepbox" style="margin:6px 0;">
<div class="st">③ 可能であれば<b>保存しSpreadsheet</b>にリンクを貼って共有して下さい。　<span style="font-size:21px;"><b>(名前・顔写真・機密情報不可)　※右上の共有から、リンクを選択 / 共有範囲は千葉大</b></span></div>
</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:12px;">
<div class="box-accent" style="text-align:center;"><b>Proモード</b><br><b>Canvas</b>を選ぶ (事前選択済み)</div>
<div class="box-info pip-safe" style="font-size:20px;">オンラインの方：困ったらSlidoに質問を送って下さい！<br>余裕がある方： Slidoに返信してあげてください。<br>会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>
</div>
</div>

<!--
- ワーク②。10分間で、Gemを用いてスライドを作ってみましょう。
- ①Gemにスライドにしてほしい内容をアップロードし実行。機密情報を含むデータは使わないこと。②対話しつつ作成を進める。5枚くらいが目安。デザインの元にしたいスライドがなければ、Gemで決めてよいと伝える。③可能であれば保存し、Spreadsheetにリンクを貼って共有。名前・顔写真・機密情報は不可。右上の共有からリンクを選び、共有範囲は千葉大に。モードはProモードでCanvasを選びます（事前選択済み）。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# Session 2の目的・到達目標　<span style="font-size:26px; color:#666;">振り返り</span>

<div class="box-info" style="margin:6px 0 16px; margin-right:calc(var(--pip-w) + 24px);"><b>Session 2：</b>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>

<div class="bgroup">
<div class="bg-label">目的</div>
<div class="bg-items">
<div>Canvas機能で<b>原稿とスライド</b>を作成してみる</div>
</div>
</div>

<div class="bgroup" style="margin-top:14px;">
<div class="bg-label">目標<br>+<br>まとめ</div>
<div class="bg-items">
<div>Canvasで協働編集をすることができた</div>
<div>Gemでスライド案を作成することができた</div>
</div>
</div>

<!--
- セッション2の振り返り。目的はCanvas機能で原稿とスライドを作成してみること。
- 目標：Canvasで協働編集ができた、Gemでスライド案を作成できた。これらができていれば十分です。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="margin-top:8px;">
<div style="color:var(--accent-dark); font-weight:700;">2025年度 第7回：生成AIを使ってスライドを作ってみる</div>
<div style="color:#666;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="margin:24px auto 0; max-width:760px; text-align:left; font-size:27px;"><b>Session 3：</b><br>議論：気づきのシェア &amp; 振り返り</div>

<div class="title-meta" style="margin-top:22px;">国際未来教育基幹 田川 翔</div>

<!--
- 最後のSession 3です。議論として、気づきのシェアと振り返りを行いましょう。
-->

---

<div class="page-title">Session 3の進め方</div>

# Session 3の進め方　<span style="font-size:26px; color:#666;">議論・座談会</span>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.45;">

<div class="box-accent" style="margin:4px 0 10px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br><span style="font-size:21px;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span></div>

<div class="stepbox" style="margin:8px 0;">
<div class="st" style="font-size:23px;">‐ 実際に使ってみて<b>「上手くいった点」「イマイチな点」</b>を教えて下さい。<span style="font-size:20px; color:#555;">(どのくらい時間減りそうですか?)</span></div>
</div>
<div class="stepbox" style="margin:8px 0;">
<div class="st" style="font-size:23px;">‐ <b>大学の中で諸活動の中で、Gem/Canvasが便利そうなユースケースとワークフロー</b>を簡単に提案して下さい。</div>
</div>
<div class="stepbox" style="margin:8px 0;">
<div class="st" style="font-size:23px;">‐ 今日面白かったこと、気付きは何でしたか。</div>
</div>

</div>
<div style="flex:1;">
<div style="border:2.5px solid var(--accent); border-radius:12px; padding:12px 16px; background:#fff;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); text-align:center; margin-bottom:8px;">Slidoで進めます</div>
<div style="display:flex; gap:14px; font-size:21px;">
<div style="flex:1;">
<div style="font-weight:800;">スマホから</div>
<div style="border:1px dashed #aaa; border-radius:6px; padding:14px 6px; text-align:center; color:#888; font-size:18px; margin:4px 0;">QRコード</div>
</div>
<div style="flex:1.2;">
<div style="font-weight:800;">PCから</div>
<div style="font-size:19px; line-height:1.5; margin-top:4px;">方法1 Google検索「Slido」→コード入力<br><b style="color:var(--accent-dark);">ALC-AI1-07</b><br>方法2 直接リンク</div>
</div>
</div>
<div style="font-size:17px; color:#777; margin-top:6px; word-break:break-all;"><a>https://app.sli.do/event/wcsBZoniBRtjFkCdhb1C4F</a></div>
</div>
</div>
</div>

<!--
- Session 3の進め方。議論・座談会です。協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に話し合いましょう。
- 論点は3つ。実際に使ってみて上手くいった点・イマイチな点（どのくらい時間が減りそうか）。大学の諸活動の中でGem/Canvasが便利そうなユースケースとワークフローの提案。今日面白かったこと・気付き。進行はSlidoで行います。スマホはQRから、PCはGoogle検索「Slido」でコードALC-AI1-07を入力、または直接リンクからアクセスしてください。
-->
