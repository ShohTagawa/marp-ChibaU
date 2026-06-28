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

<div class="goal-box" style="margin-top:6px;">
① <b>PCを立ち上げ、お持ちの<br><span class="ind">千葉大学Google Workspaceにログインして下さい</span></b><br>
<span class="ind" style="font-weight:400;">→ 学校のGmailが立ち上がる状況ならOKです。</span><br>
② <b>インタラクションツール Slidoにアクセスして下さい</b><br>
<span class="ind" style="font-weight:400;">URLを配布したり、質問やアンケートをとったりします</span><br>
<span class="ind" style="font-weight:400;">※お名前などの個人情報の入力は禁止です</span>
</div>

<div class="cardrow pip-safe" style="margin-top:14px;">
<div class="pcard" style="flex:0 0 240px;"><div class="pc-h">スマホから</div><img src="./src/fig01-qr.png" alt="Slido QRコード" style="display:block; height:140px; margin:0 auto;"></div>
<div class="pcard"><div class="pc-h">PCから</div>
<div style="font-size:21px; line-height:1.5;">方法1 Google検索「Slido」→コード入力<br>
<span style="display:inline-block; background:#2C5E86; color:#fff; border-radius:20px; padding:5px 18px; margin:6px 0; font-weight:700;">Joining as a participant?　<span style="background:#fff; color:#2C5E86; border-radius:14px; padding:2px 12px;">#ALC-AI1-01</span></span><br>
方法2 直接リンク<br><span style="font-size:18px; color:var(--tag-blue);">https://app.sli.do/event/f4KwDbRWMXavabFGjMTR4B</span></div></div>
</div>

<!--
- 開始前に。①千葉大Google Workspaceにログイン、②Slidoにアクセス。個人情報の入力は禁止。
-->

---

<div class="page-title">講師紹介</div>

# <ruby>田川<rt>たがわ</rt></ruby> <ruby>翔<rt>しょう</rt></ruby><span class="tag tag-soft" style="font-size:20px;">オープンバッジ</span>

<div class="subhead"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター</div>

<div class="box-accent" style="margin:6px 0 12px;"><b>大学教育を企画し、学生と教員を支援する仕事</b></div>

<div class="cardrow">
<div class="pcard"><div class="pc-h">①元々は理学の人</div>
<img src="./src/fig02-aibook.png" alt="研究関連" style="display:block; width:100%; border-radius:8px;">
<p style="font-size:18px; margin:6px 0 0;">Tagawa et al. (2021) <i>Nat. Com.</i></p></div>
<div class="pcard"><div class="pc-h">②色々な経験</div>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul></div>
<div class="pcard"><div class="pc-h">③大学を学びやすく!</div>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
</ul>
<p style="font-size:19px; margin:8px 0 0;">現在、<i>Teaching with AI</i>を翻訳・出版準備中</p></div>
</div>

<!--
- 講師紹介。田川 翔。高等教育センター/アカデミックリンクセンター所属。大学教育を企画し、学生と教員を支援する仕事。
-->

---

<div class="page-title">宣伝：生成AI活用講座</div>

# <span style="font-size:34px;">生成AI活用講座 / Hands-on Generative AI Workshop</span><span class="tag tag-soft" style="font-size:20px;">普遍教育 GD117 4T</span>

<div class="cardrow">
<div class="pcard"><div class="pc-h">生成AIアプリを作ってみる</div>
<p style="font-size:21px;"><b>グループワーク</b></p></div>
<div class="pcard"><div class="pc-h">大規模言語モデルを知る</div>
<p style="font-size:21px;"><b>テスト</b></p></div>
<div class="pcard"><div class="pc-h">AIとの関わり方を考える</div>
<p style="font-size:20px; margin:2px 0;"><b>AIリテラシ/倫理</b></p>
<div style="font-size:18px; color:#555; line-height:1.45;">・人間中心のAI社会原則 ・安全性 ・プライシー ・透明性 ・公平性 ・説明可能性</div></div>
</div>

<div class="box-info pip-safe" style="margin-top:10px;"><b>レポート</b>　・<b>AIの活用例</b> →企業での活用例を調査　・生成AIの自分なりの説明　<b>・AIとの関わり方レポート</b></div>

<!--
- 宣伝。普遍教育「生成AI活用講座」GD117 4T。アプリ制作・LLM理解・AIとの関わり方の3本柱。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-size:30px; font-weight:700; margin-bottom:4px;">2025年度 第1回： 生成AIの仕組みを体験する</div>
<div style="text-align:center; color:var(--accent-dark); font-size:23px; margin-bottom:28px;">15-min × 3 sessions</div>

<div style="text-align:center; font-size:26px;">国際未来教育基幹 田川 翔</div>

<!--
- 本日のワークショップ。2025年度第1回「生成AIの仕組みを体験する」。15分×3セッション。
-->

---

<div class="page-title">ワークショップの全体構成</div>

# ワークショップの全体構成

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 300px;">
<img src="./src/fig05-books.png" alt="講義イメージ" style="width:100%; border-radius:10px;">
</div>
<div style="flex:1;">
<div class="box-info" style="font-size:19px; line-height:1.45;">
第1回 生成AIの仕組みを体験する<br>
第2回 NotebookLMで情報を理解する<br>
第3回 AIを利用、どこまでOKか？、どこからアウト？<br>
第4回 AIで絵・グラフを書いてみる<br>
第5回 AIで議論 (外部講師招聘予定)<br>
第6回 統計分析 (本学学生支援を題材に)<br>
第7回 AIを使ってスライドを作ってみる<br>
Google Spreadsheetが「AIで分析する
</div>
</div>
</div>

<div class="flowrow pip-safe" style="margin-top:14px;">
<div class="pcard" style="flex:1; text-align:center;"><div style="font-size:18px; color:#555;">最初の15分 (今日短め)</div><div class="fbox gray" style="font-size:28px; margin:6px auto 0; display:inline-block;">講義</div></div>
<div class="pcard" style="flex:1; text-align:center;"><div style="font-size:18px; color:#555;">真ん中の15分</div><div class="fbox gray" style="font-size:28px; margin:6px auto 0; display:inline-block;">体験</div></div>
<div class="pcard" style="flex:1; text-align:center;"><div style="font-size:18px; color:#555;">最後の15分</div><div class="fbox gray" style="font-size:28px; margin:6px auto 0; display:inline-block;">議論・座談会</div></div>
</div>

<div class="box-warn" style="margin-top:8px; text-align:center;">演習・議論付き (オンラインの皆様もぜひ！)　詳細は<b>moodle</b>で！</div>

<!--
- 全12回シリーズの全体像。各回は「最初の15分＝講義／真ん中＝体験／最後＝議論・座談会」の3部構成。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<div class="stepbox" style="margin-top:14px;">
<div class="st"><b>最初の15分</b>　<span class="tag tag-soft" style="font-size:20px;">講義</span></div>
<div class="st">- 大規模言語モデル<br>- 生成AIを構成するレイヤー</div>
</div>

<div class="stepbox">
<div class="st"><b>真ん中の15分</b>　<span class="tag tag-soft" style="font-size:20px;">体験</span></div>
<div class="st">- Google Colabでやってみる<br>　次にくる単語の確率を予測してみよう</div>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>最後の15分</b>　<span class="tag tag-soft" style="font-size:20px;">議論・座談会</span></div>
<div class="st">- 今日面白かったこと、気付きは何でしたか。<br>- AIの学び方ってどうすればよいと思いますか。<br>- 今後、どのような点を特に学んでみたいですか。</div>
</div>

<!--
- 今回の3部構成。講義＝LLMとレイヤー、体験＝Colabで次単語予測、議論＝学びの振り返り。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="font-size:62px;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-size:26px; font-weight:700; margin-bottom:2px;">2025年度 第1回： 生成AIの仕組みを体験する</div>
<div style="text-align:center; color:var(--accent-dark); font-size:20px; margin-bottom:18px;">15-min × 3 sessions</div>

<div class="goal-box" style="max-width:760px; margin:0 auto 18px;"><b>Session 1：</b><br><span class="ind">講義：生成AIの中身を知る</span></div>

<div style="text-align:center; font-size:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 1 の開始。テーマは「講義：生成AIの中身を知る」。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div style="display:grid; grid-template-columns:120px 1fr; gap:18px 24px; align-items:center; margin-top:18px;">

<div style="font-size:36px; font-weight:800;">目的</div>
<div class="goal-box" style="margin:0;"><b>Session 1：</b><br><span class="ind">AIの正体を解剖する</span></div>

<div style="font-size:36px; font-weight:800;">目標</div>
<div class="box-accent pip-safe" style="font-size:27px;">
・<b>利活用の前提知識</b>を知る<br>
・<b>大規模言語モデル</b>の中身をイメージできる<br>
・生成AIサービスの<b>レイヤー</b>がわかる
</div>

</div>

<!--
- Session 1の目的＝AIの正体を解剖する。目標＝前提知識・LLMの中身・サービスのレイヤーの3点。
-->

---

<div class="page-title">前提：千葉大学の指針</div>

# 千葉大学における生成AIの指針<span style="font-size:22px; color:#666;">(令和5年10月13日)</span>

<div class="stepbox" style="margin-top:14px;">
<div class="st">① 「生成AIについての学び」「生成AIを用いた学び」「生成AIによらない学び」を<b>それぞれ推進</b></div>
</div>
<div class="stepbox">
<div class="st">② 授業での利用は、授業の目的に合致することが前提であり、合致するかは、各授業の担当教員が<b>判断</b>。<br><span style="color:var(--accent-dark); font-weight:800;">禁止の場合はシラバスなどに明記（気になったら先生に聞きましょう！）</span></div>
</div>
<div class="stepbox pip-safe">
<div class="st">③ <b>リスクや懸念</b>から<b>禁止事項あり</b></div>
</div>

<div style="display:flex; align-items:center; gap:16px; margin-top:8px;">
<img src="./src/fig09-qr.png" alt="指針QRコード" style="height:90px;">
<div style="font-size:18px; color:var(--tag-blue); word-break:break-all;">https://drive.google.com/file/u/2/d/1ZultuLWXNLJ53M43ExrYG8cIfwqcCnCO/view?pli=1</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; text-align:center; font-size:26px;"><b>まずは、千葉大のポリシーを確認しましょう！</b></div>

<!--
- 前提となる千葉大の指針。3種の学びを推進。授業利用は目的合致が前提で担当教員が判断。リスクから禁止事項もある。
-->

---

<div class="page-title">前提：オプトアウト</div>

# 千葉大学の契約の中で<span style="color:var(--accent-dark)">安全に</span>使えるAIサービス

<div class="cardrow">
<div class="pcard"><div class="pc-h">Google</div>
<p style="text-align:center; font-size:24px; margin:6px 0;"><b>Gemini / NotebookLM</b></p>
<img src="./src/fig10-gemini.png" alt="Geminiの画面" style="width:100%; border-radius:8px;"></div>
<div class="pcard"><div class="pc-h">Microsoft</div>
<p style="text-align:center; font-size:24px; margin:6px 0;"><b>Copilot</b></p>
<img src="./src/fig10-copilot.png" alt="Copilotの画面" style="width:100%; border-radius:8px;"></div>
</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><b>プライバシーについて</b>　他の生成AIを個人使用する場合、自分のデータがモデルの学習に使われたり、誰かが見ないよう、必要ならオプトアウトを。</div>

<!--
- 大学契約で安全に使えるのはGoogle Gemini/NotebookLMとMicrosoft Copilot。個人利用の他サービスは必要ならオプトアウトを。
-->

---

<div class="page-title">AIについての言葉の定義</div>

# AIについての言葉の定義

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>AI：</b>一般的に人間が知的だと感じるタスクをこなすことができるコンピュータ・プログラム。</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>機械学習：</b>データから、「機械」（コンピューター）が自動で「学習」し、データの背景にあるルールやパターンを発見する方法。</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>深層学習：</b>多数の層から成るニューラルネットワークを用いて行う機械学習のこと。大規模言語モデルで使用されている。</div></div>

</div>
<div style="flex:0 0 380px;">
<img src="./src/fig11-nn.png" alt="ニューラルネットワーク（重み）" style="width:100%;">
<div class="box-accent" style="margin-top:6px; padding:8px 14px; font-size:19px;"><b>2024年ノーベル物理学賞</b><br>
<span style="display:inline-flex; align-items:center; gap:8px; margin-top:4px;"><img src="./src/fig11-nobel.png" alt="ノーベル賞メダル" style="height:42px;"> AI ⊃ 機械学習 ⊃ <span style="background:var(--accent-soft); padding:1px 8px; border-radius:6px;">深層学習</span></span></div>
<div class="callout-yellow" style="margin-top:8px; font-size:18px;">今回は、Moodle内に用語集を設置しています。ご参照下さい。</div>
</div>
</div>

<div class="cite pip-safe">総務省令和元年生成AI白書 (2019) https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r01/html/nd113210.html</div>

<!--
- 用語の整理。AI⊃機械学習⊃深層学習の包含関係。深層学習は2024年ノーベル物理学賞。今回はMoodle内に用語集を設置。
-->

---

<div class="page-title">機械学習のイメージ</div>

# 機械学習のイメージ

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">
<img src="./src/fig12-mllearn.png" alt="学習(トレーニング)と推論(予測)のプロセス" style="width:100%;">
<div class="box-warn" style="margin-top:8px; font-size:21px;">注意：ルールそのものを教えずに、出力と正解の比較をする</div>
</div>
<div style="flex:1;">
<div class="lead-note" style="text-align:center; font-size:26px; margin-bottom:6px;">自動販売機 (関数) の基本構造</div>
<img src="./src/fig12-vending.png" alt="自動販売機（関数）の基本構造" style="width:100%;">
</div>
</div>

<div class="cite pip-safe">Geminiで生成</div>

<!--
- 機械学習のイメージ。学習＝出力と正解を比較して内部を調整、推論＝学習済みで予測。関数（自動販売機）に例えて説明。
-->

---

<div class="page-title">深層学習の学習と推論</div>

# 深層学習の<span style="color:var(--accent-dark)">学習</span>と<span style="color:var(--accent-dark)">推論</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">

<div class="lead-note" style="font-size:27px;">学習 (トレーニング)</div>
<div class="flowrow" style="gap:14px; margin:8px 0;">
<div style="font-size:24px; font-weight:800; text-align:center;">入力</div>
<div class="farrow">→</div>
<div class="box-accent" style="text-align:center; padding:10px 18px;"><b>重みの函<br>(鍛える)</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div class="farrow">→</div>
<div style="font-size:24px; font-weight:800; text-align:center;">出力<br>評価</div>
</div>
<div style="font-size:20px; color:#555; margin:0 0 14px 64px;">↑ 更新 ↺</div>

<div class="lead-note" style="font-size:27px;">利用 (推論・生成)</div>
<div class="flowrow" style="gap:14px; margin:8px 0;">
<div style="font-size:22px; font-weight:800; text-align:center;">未知の<br>入力</div>
<div class="farrow">→</div>
<div class="box-info" style="text-align:center; padding:10px 18px;"><b>重みの函<br>(固定)</b><br><span style="font-size:18px;">数字の羅列</span></div>
<div class="farrow">→</div>
<div style="font-size:24px; font-weight:800; text-align:center;">出力</div>
</div>

<div class="box-warn" style="margin-top:14px; font-size:21px;">学習済みの重みを利用して、出力を得る</div>

</div>
<div style="flex:1;">

<div class="box-info" style="font-size:19px;">GPT 4：アメリカ議会図書館の全蔵書の約20倍?<br>※書籍、記事、ウェブサイト、コードなど幅広いテキストソースを元に学習している</div>

<div class="why-callout pip-safe" style="margin-top:10px; font-size:18px; line-height:1.45;">
<div class="wh" style="font-size:20px;">「今日は良い天...」の続きを予測する場合を考えてみましょう。</div>
<b>正解データが「気」だとします（「天気」）。</b><br>
<b>ケースA：AIが賢い場合</b><br>
AIの予測：「気」である確率 95%、「丼」である確率 1%...<br>
結果： 正解を当てたので、Lossは非常に小さくなります。<br>
<b>ケースB：AIがポンコツな場合</b><br>
AIの予測：「丼」である確率 80%、「気」である確率 5%...<br>
結果： <b>「今日は良い天丼</b>」と予測しそうになっています。正解への確信度が低いので、Lossは大きくなります。
</div>

</div>
</div>

<!--
- 深層学習は「学習」と「推論」の二段。学習では入力→重みの函→出力評価を回して重みを更新し、推論では固定した重みで未知の入力から出力を得る。
- 「今日は良い天…」の続きを予測する例で、賢いAIはLossが小さく、ポンコツなAIは「天丼」と予測しそうになりLossが大きい。
-->

---

<div class="page-title">大規模言語モデルとは</div>

# <span style="color:var(--accent-dark)">大規模言語モデル</span> (LLM)

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2;">

<div class="box-accent" style="font-size:23px;">大量のテキストで学習され、単語、概念、フレーズ間のパターンを識別し、プロンプトに対する応答を生成できるようにしたAIモデル。</div>

<div class="subhead" style="margin-top:22px;"><span class="tag tag-soft">ネクストワードプレディクション</span></div>

<div class="stepbox" style="font-size:23px;">
日本の首都<u>　　</u> → 日本の首都は<u>　　</u> → 日本の首都は東京<u>　　</u>
</div>

<div class="lead-note" style="margin-top:14px; color:var(--accent-dark);">次の言葉(トークン)の確率を予想する問題</div>

</div>
<div style="flex:0.85; text-align:center;">
<img src="./src/fig14-transformer.png" alt="Transformerの構造" style="height:430px;">
</div>
</div>

<!--
- 大規模言語モデル(LLM)は大量のテキストで学習し、単語・概念・フレーズ間のパターンを識別して応答を生成するAIモデル。
- 本質は「ネクストワードプレディクション」。次の言葉(トークン)の確率を予想する問題を、Transformerで解いている。
-->

---

<div class="page-title">LLMの中身ってなんだ？</div>

# LLMの中身ってなんだ？

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1; text-align:center;">
<img src="./src/fig15-llmviz.png" alt="LLM Visualization (Bycroft)" style="height:380px; border:1px solid #ddd; border-radius:8px;">
<div class="cite" style="text-align:center;">LLM Visualization ©Bycroft 2023　<a>https://bbycroft.net/llm</a></div>
</div>
<div style="flex:1;">

<div class="box-warn" style="font-size:22px; text-align:center;">✗ 知識集・ルール集</div>

<div class="box-info" style="margin-top:12px; font-size:20px;"><b>nano-GPT</b><br>OpenAI共同設立者の一人、アンドレイ・カーパシーさんが公開している学習用モデル<br>(超小さい”大規模”言語モデル)</div>

<div style="font-size:19px; margin-top:10px; line-height:1.45;">
<b>レポジトリ</b><br>
<span style="color:var(--tag-blue);">https://github.com/karpathy/nanoGPT</span><br>
<span style="color:var(--tag-blue);">https://github.com/karpathy/minGPT</span><br>
<b>本人による解説動画</b><br>
<span style="color:var(--tag-blue);">https://www.youtube.com/watch?v=kCc8FmEb1nY</span>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:19px;"><b>cf. nanochat (後継プロジェクト)</b><br>The best ChatGPT that $100 can buy.</div>

<div class="pip-safe" style="margin-top:10px; font-size:19px; color:var(--accent-dark); font-weight:700;">実際にアルファベット並べたい人<br>→Moodle参考コードあります</div>

</div>
</div>

<!--
- LLMの中身は「知識集・ルール集」ではない。Bycroftの可視化サイトで、Transformerが層を重ねて計算している様子を見る。
- 学習用には超小さい"大規模"言語モデルnano-GPT (Karpathy) が便利。実際にアルファベットを並べたい人はMoodleの参考コードあり。
-->

---

<div class="page-title">学習の例：シェイクスピア</div>

# 学習：nano-GPTで<span style="color:var(--accent-dark)">シェイクスピア</span>を学習した例 (1moGPT)

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">学習データのサンプル（最初の300文字）</div>
<pre style="font-size:16px; line-height:1.4; margin:0; white-space:pre-wrap; font-family:monospace;">First Citizen:
Before we proceed any further, hear me speak.
All:
Speak, speak.</pre>
</div>
<div class="pcard">
<div class="pc-h">チェックポイント 1/27：1回学習後</div>
<pre style="font-size:15px; line-height:1.35; margin:0; white-space:pre-wrap; font-family:monospace;">pNjxD-$fWcYM?QwipOBgPXxHOZygTHhHvxHMg,i
X-S-ss? FKhhE-SThoZIaqcpGLYkghBmQiFdi
oInZdGZs$hzFhN?h&amp;Awo.DWv'3TfQmRs'&amp;KJp?b'x</pre>
</div>
</div>

<div class="cardrow pip-safe">
<div class="pcard">
<div class="pc-h">チェックポイント 3/27：100回学習後</div>
<div style="font-size:18px;">Loss: Train=2.5006, Val=2.5120</div>
<pre style="font-size:15px; line-height:1.35; margin:6px 0 0; white-space:pre-wrap; font-family:monospace;">ye our Beo
KCEBDWamad od wxt sofPr.
tars torerming bkn.dove gre t lo3'sitind</pre>
</div>
<div class="pcard">
<div class="pc-h">チェックポイント 11/27：2000回学習後</div>
<div style="font-size:18px;">Loss: Train=1.3011, Val=1.5272</div>
<pre style="font-size:15px; line-height:1.35; margin:6px 0 0; white-space:pre-wrap; font-family:monospace;">And thou ciest the which they suffer want,
Her father, being less, here shall be unby,
A senservant and heart their treas' devoted</pre>
</div>
</div>

<!--
- nano-GPTでシェイクスピアを学習した例(1moGPT)。最初はランダムな記号列だが、学習回数を重ねるとLossが下がり、だんだん英文らしくなる。
-->

---

<div class="page-title">生成AIの中でしていること</div>

# 利用 (推論・生成)

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.5;">

<div style="display:flex; gap:30px; justify-content:space-around;">

<div style="text-align:center;">
<div class="lead-note">計算1回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩”</div>
</div>

<div style="text-align:center;">
<div class="lead-note">計算2回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は猫” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩は”</div>
</div>

<div style="text-align:center;">
<div class="lead-note">計算3回目</div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">“吾輩は猫で” <span style="color:#888;">出力</span></div>
<div style="font-size:30px;">↑</div>
<div class="box-accent" style="padding:8px 16px;"><b>AI処理<br>(デコーダ)</b></div>
<div style="font-size:30px;">↑</div>
<div style="font-size:20px;">前処理</div>
<div style="font-size:30px;">↑</div>
<div style="font-size:22px; font-weight:800;">入力 “吾輩は猫”</div>
</div>

</div>
</div>
<div style="flex:1;">

<img src="./src/fig17-chart.png" alt="次トークンの確率分布" style="width:100%; max-width:320px;">

<div class="box-info pip-safe" style="margin-top:8px; font-size:17px; line-height:1.4;"><b>デコード：</b><b>事前学習済みLLMを使って, テキストを出力プロセス。</b>なお、一番確率の高いところだけとる”Greedy Decoding”ではない方法が用いられやすい (Random Sampling)</div>

</div>
</div>

<!--
- 生成AIは「次の一文字」を1回ずつ計算して継ぎ足す。計算1回目「吾輩」→「は」、2回目「吾輩は」→「猫」…と自己回帰的に伸ばしていく。
- デコードは事前学習済みLLMでテキストを出力するプロセス。一番確率が高いものだけ選ぶGreedy Decodingではなく、Random Samplingが使われやすい。
-->

---

<div class="page-title">ハルシネーション</div>

# ハルシネーション

<div class="box-warn" style="font-size:22px;"><b>ハルシネーション：</b>推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:14px;">
<div style="flex:1.1; text-align:center;">
<img src="./src/fig18-chart.png" alt="Expert-level questions across subjects" style="width:100%; max-width:520px;">
<div class="cite" style="text-align:center;">OpenAI <a>https://openai.com/ja-JP/index/introducing-gpt-5/</a></div>
</div>
<div style="flex:0.9;">

<div class="box-info" style="font-size:20px;"><b>例：</b><br><b>千葉大のサークルの〇〇について教えて。</b><br><br><b>千葉大学の生成AI活用講座の担当教員は？</b></div>

<div class="box-accent pip-safe" style="margin-top:14px; font-size:23px; text-align:center;"><b>ハルシネーションは<br>仕組み上、起こる</b></div>

</div>
</div>

<!--
- ハルシネーション＝推論過程でAIが、誤っているがもっともらしい情報を出力してしまうこと。次の単語の確率予測である以上、仕組み上起こる。
- 「千葉大のサークルの〇〇」「この講座の担当教員は？」のようなニッチな問いで顕在化しやすい。
-->

---

<div class="page-title">生成AIのレイヤー</div>

# 生成AIのレイヤー

<div class="subhead"><span class="tag tag-soft">応用</span><span style="color:#888;">　↑　ユーザーに近い</span></div>

<table style="width:100%; border-collapse:collapse; font-size:21px; margin-top:4px;">
<tr style="background:var(--accent-soft);">
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; width:30%; color:var(--accent-dark);">生成AI アプリケーション</td>
<td style="border:1px solid #ccc; padding:8px 14px;">Chat GPT, Gemini etc… インターフェースを通じて AI 機能をユーザーに提供するソフトウェア</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">エージェント</td>
<td style="border:1px solid #ccc; padding:8px 14px;">DeepResearch, web検索 etc… 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">プラットフォーム</td>
<td style="border:1px solid #ccc; padding:8px 14px;">Dify, Google AI studio etc… AI モデルの構築に役立つツールとサービス、データマネジメントツールで構成</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">大規模言語モデル</td>
<td style="border:1px solid #ccc; padding:8px 14px;">説明の通り</td>
</tr>
<tr style="background:#f4f6fa;">
<td style="border:1px solid #ccc; padding:8px 14px; font-weight:800; color:var(--accent-dark);">インフラストラクチャー</td>
<td style="border:1px solid #ccc; padding:8px 14px;">コンピューターリソース、GPUなど</td>
</tr>
</table>

<div class="subhead pip-safe" style="margin-top:6px;"><span class="tag tag-soft">基盤</span><span class="cite" style="margin:0;">改変：Google Cloud Skills Boost</span></div>

<!--
- 生成AIは5層構造。下から、インフラ→LLM→プラットフォーム→エージェント→アプリケーション。下が基盤、上が応用(ユーザーに近い)。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0.28;">
<div class="tag tag-accent" style="font-size:24px; margin-bottom:14px;">目的</div>
<br>
<div class="tag tag-soft" style="font-size:22px;">目標 ＋ まとめ</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:24px;"><b>Session 1：</b><br>　生成AIの中身を知る</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st" style="font-size:23px;"><b>利活用の前提知識</b>を知る</div>
<div style="font-size:21px; margin-left:1.4em;">千葉大学の中でのポリシー「生成AIの指針」</div>
<div style="font-size:21px; margin-left:1.4em;">オプトアウトと大学の契約で使える生成AIサービス</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>大規模言語モデル(LLM)</b>の中身をイメージできる</div>
<div style="font-size:21px; margin-left:1.4em;">Transformerによる「次の単語の予測」作業</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>生成AIサービスのレイヤー</b>がわかる</div>
<div style="font-size:21px; margin-left:1.4em;">インフラ→LLM→プラットフォーム→エージェント→アプリ</div>
</div>

</div>
</div>

<!--
- Session 1の振り返り。目的＝生成AIの中身を知る。目標＋まとめとして、前提知識・LLMの中身・レイヤーの3点を確認。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI体験ワークショップ</div>
<div class="title-big" style="font-size:64px;">Session 2</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:26px; color:var(--accent-dark); font-weight:700;">2025年度 第1回： 生成AIの仕組みを体験する</div>
<div style="font-size:22px; color:#666;">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:820px; margin:18px auto 0; font-size:25px;"><b>Session 2：</b><br>　実践：学習済みモデルで推論(デコード)してみる</div>

<div style="text-align:center; margin-top:14px; font-size:22px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2へ。学習済みモデルを実際に動かして、推論(デコード)を体験する実践パート。
-->

---

<div class="page-title">いざ、実践</div>

# 何をするか？

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">

<div class="stepbox">
<div class="st" style="font-size:22px;">① 会場はペアを作って下さい。オンラインはslidoを繋いでください。</div>
<div class="st" style="font-size:22px;">② MoodleにあるGoogle Colabファイルを立ち上げ、<b>Transformers</b>で遊びます。僕がデモをするので、一緒に、上からポチポチと実行しましょう。</div>
<div class="st" style="font-size:22px;">③ 文字列を入力し結果を出力してみましょう。</div>
</div>

<div class="box-warn" style="margin-top:12px; font-size:20px;">オンラインの方：困ったら<b>Slido</b>に質問を送って下さい！　余裕がある方： <b>Slidoに返信して</b>ください。会場の方：困ったら、手を上げてTAやペアに聞いて下さい。</div>

</div>
<div style="flex:0.85;">

<img src="./src/fig22-chart.png" alt="吾輩は_ 次トークンの確率" style="width:100%; max-width:360px;">

<div class="box-info pip-safe" style="margin-top:10px; font-size:18px;">そんなん秒だわ、という方 →　会場で困っているかたのサポート or moodleで、nano-GPTのトライアルをどうぞ。</div>

</div>
</div>

<!--
- いざ実践。会場はペア、オンラインはslido。MoodleのColabファイルを開いてTransformersで一緒に動かし、文字列を入れて出力を見る。
- 困ったらSlidoや手を上げて。すぐ終わった人はサポートやnano-GPTトライアルへ。
-->

---

<div class="page-title">応用問題を解こう！</div>

# 応用問題 (時間が余った方向け)

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.2; min-width:0;">
<div class="exrow"><div class="exn">①</div><div>「吾輩は猫である。」<b>の「次」</b>を予想してみましょう。<br>「名前」(はまだない)。。。と出ますか？</div></div>
<div class="exrow"><div class="exn">②</div><div><b>では、「名前」と出す方法を考えてみましょう。</b><br>うまくいったらコンテキストやプロンプトの重要性を言語化しましょう。<br>なぜ、「ロール(あなたは〇〇です)」を与えるとうまく行くのでしょうか？</div></div>
<div class="exrow"><div class="exn">③</div><div><b>色々と条件を変えて遊んでみましょう。</b><br>例1: 他の文字列で試してみる　例2: 温度設定を変える　例3: モデルを変える</div></div>
</div>
<div style="flex:0.85;">

<img src="./src/fig23-chart.png" alt="次トークンの確率分布" style="width:100%; max-width:360px;">

<div class="box-accent pip-safe" style="margin-top:10px; font-size:19px; line-height:1.45;"><b>ランダムサンプリングの時</b><br><b> 温度 (テンパラチャー)：</b>単語選択のランダム性を変える<br><b> Top-P： </b>上位p％のトークンから選択する<br><b> Top-K： </b>上位k個のトークンから選択する</div>

</div>
</div>

<!--
- 応用問題。①「吾輩は猫である。」の次を予想、②「名前」と出す方法（ロールやコンテキストの効果）を言語化、③温度・モデルなど条件を変えて遊ぶ。
- ランダムサンプリングのパラメータ：温度・Top-P・Top-Kでトークン選択のランダム性を制御する。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0.28;">
<div class="tag tag-accent" style="font-size:24px; margin-bottom:14px;">目的</div>
<br>
<div class="tag tag-soft" style="font-size:22px;">目標 ＋ まとめ</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:24px;"><b>Session 2：</b><br>　実践：学習済みモデルで推論(デコード)してみる</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st" style="font-size:23px;"><b>LLMは次を予想しているだけ</b>を体感する</div>
<div style="font-size:21px; margin-left:1.4em;">ルールベースではない！</div>
<div style="font-size:21px; margin-left:1.4em;">ネクスト・ワード・プレディクションをする</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>LLM</b>の中身と処理をイメージできる</div>
<div style="font-size:21px; margin-left:1.4em;">数字の塊、学習で重みを決定、推論でトークン生成</div>
<div class="st" style="font-size:23px; margin-top:8px;"><b>コンテキストやプロンプトの重要性</b>がわかる</div>
<div style="font-size:21px; margin-left:1.4em;">確率を上げるガチャゲームなイメージ</div>
</div>

</div>
</div>

<!--
- Session 2の振り返り。目的＝学習済みモデルで推論(デコード)してみる。LLMは次を予想しているだけ、中身と処理のイメージ、コンテキスト/プロンプトの重要性を確認。
-->

---

<!-- _class: sec-open -->

<div class="sub">2025年度 第1回： 生成AIの仕組みを体験する　<span style="color:var(--muted)">15-min × 3 sessions</span></div>

# 生成AI体験<br>ワークショップ

<div class="box-accent" style="font-size:28px; margin-top:20px;"><b>Session 3：</b><br>議論：振り返り &amp; AIの学び方 &amp; 期待を語ろう</div>

<div class="foot">国際未来教育基幹　田川 翔</div>

---

<div class="page-title">Session 3の進め方</div>

## 議論・座談会

<div class="subhead">最後の15分</div>

<div class="box-info" style="font-size:26px;">
　- 今日面白かったこと、気付きは何でしたか。<br>
　- AIの学び方ってどうすればよいと思いますか。<br>
　- 今後、どのような点を特に学んでみたいですか。
</div>

<div class="lead-note" style="margin-top:18px;"><b>Slidoで進めます</b></div>

<div class="cardrow">
<div class="pcard" style="flex:0 0 230px;">
<div class="pc-h">スマホから</div>
<img src="./src/fig43-img.png" alt="Slido QRコード" style="display:block; width:150px; margin:6px auto 0;">
</div>
<div class="pcard">
<div class="pc-h">PCから</div>
<p style="margin:0 0 8px;"><b>方法1</b>　Google検索「Slido」→コード入力</p>
<img src="./src/fig42-img.png" alt="Joining as a participant?" style="display:block; width:100%; max-width:380px; margin:0 0 10px;">
<p style="margin:0; font-weight:800; color:var(--accent-dark);">・ALC-AI1-01</p>
<p style="margin:8px 0 0;"><b>方法2</b>　直接リンク<br><span style="font-size:20px; word-break:break-all;">https://app.sli.do/event/f4KwDbRWMXavabFGjMTR4B</span></p>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>　　　　　敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

---

<div class="page-title">今日のアンケート</div>

<div class="cardrow" style="align-items:center;">
<div class="tag-soft" style="flex:0 0 240px; font-size:34px; text-align:center; padding:22px 0; border-radius:14px;">アンケート</div>
<div class="box-info" style="flex:1; font-size:26px;">
　- 次回以降の参考にするので、<br>
　　アンケートの回答をお願いします。<br>
- 時間は<b>あまりかかりません (5分以下)</b><br>
- 連続開講の時には、尚更重要です！
</div>
</div>

<div class="cardrow" style="align-items:center; margin-top:24px;">
<img src="./src/fig44-img.png" alt="アンケートQRコード" style="flex:0 0 240px; width:240px; height:240px;">
<div style="flex:1; text-align:center;"><a href="https://forms.gle/1omwbaXrnCgN1QRc9" style="color:var(--tag-blue); font-size:28px; word-break:break-all;">https://forms.gle/1omwbaXrnCgN1QRc9</a></div>
</div>

---

<div class="page-title">Further study</div>

<div class="cite" style="margin:0 0 8px;">//参考文献は各スライド下部をご参照下さい//</div>

<div class="subhead">Further study</div>

<div class="stepbox">
<div class="st"><b>1. つくりながら学ぶ！LLM 自作入門 - マイナビ出版 (2025)</b><br>
<span style="font-size:22px;">Sebastian Raschka (著), 巣籠悠輔 (監修, 翻訳), 株式会社クイープ (翻訳)　実際に、コードを書きながらAIを学べる本</span></div>
</div>

<div class="stepbox">
<div class="st"><b>2. Let's build GPT: from scratch, in code, spelled out.</b><br>
<span style="font-size:22px;">Andrej Karpathy　https://www.youtube.com/watch?v=kCc8FmEb1nY</span></div>
</div>

<div class="box-info pip-safe" style="font-size:21px; margin-top:14px;">
<b>個人的に行ってた学習 (ただし、正しい方法かは、わかりません)</b><br>
<span style="font-size:19px;">※ 理系なものの、元々は実験系メインで、AIっぽい話はしてませんでした。　　プログラミングは、PythonではなくFORTRANだった世代です。博論のためにPythonをかじりました。<br>
※ とはいえ、民間時代に業務で”叩き上げ”的にシステム開発を学び、レディネスはありました。</span><br>
・生成AIパスポート試験のテキストを読み、問題を解いて、受験 (追ってG検定も取得)<br>
・東大松尾研の講座 (機械学習など)の履修や技術本を使って自習<br>
・外部エンジニアとの個人的に協働し、クラウドや手元PC、AIをもちいた構築主義的な学習<br>
・Google SkillsやUdemyでの学習 (Google Cloud 認定資格の取得を進行中)<br>
　→ 生成AIを活用して学びをすすめています
</div>
