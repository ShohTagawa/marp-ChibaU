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
<div>① <b>PCを立ち上げ、お持ちの千葉大学Google Workspaceにログインして下さい</b><br><span class="ind">→ 学校のGmailが立ち上がる状況ならOKです。</span></div>
<div style="margin-top:10px;">② <b>インタラクションツール Slidoにアクセスして下さい</b><br><span class="ind">URLを配布したり、質問やアンケートをとったりします</span><br><span class="ind">※お名前などの個人情報の入力は禁止です</span></div>
</div>

<div class="cardrow" style="margin-top:14px; margin-right:calc(var(--pip-w) + 8px);">
<div class="pcard"><div class="pc-h">スマホから</div>
QRコードまたは直接リンクから <b>app.sli.do</b> へアクセス
</div>
<div class="pcard"><div class="pc-h">PCから</div>
<div><b>方法1</b>　Google検索「Slido」→コード入力 <span class="tag tag-soft">ALC-AI1-04</span></div>
<div style="margin-top:6px;"><b>方法2</b>　直接リンク<br><span style="font-size:18px; color:var(--tag-blue); word-break:break-all;">https://app.sli.do/event/pwnuuMARudJHpYZPs4oQvk</span></div>
</div>
</div>

<!--
- 始める前に。まず千葉大Google Workspaceにログイン、そしてSlidoにアクセスしておいてください。個人情報の入力は禁止です。
-->

---

<div class="page-title">講師紹介</div>

# <span style="color:var(--accent-dark)">田川　翔</span><span style="font-size:24px; margin-left:14px; color:#555;">たがわ　しょう</span>

<div class="box-info" style="margin:6px 0 12px;"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター　／　<b>大学教育を企画し、学生と教員を支援する仕事</b></div>

<div class="cardrow" style="margin-right:calc(var(--pip-w) + 8px);">
<div class="pcard"><div class="pc-h">①元々は理学の人</div>
<ul>
<li>地球深部の物質を超高圧合成し研究</li>
<li><b>Tagawa et al. (2021)</b> <i>Nat. Com.</i></li>
</ul>
</div>
<div class="pcard"><div class="pc-h">②色々な経験</div>
<ul>
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="pcard"><div class="pc-h">③大学を学びやすく!</div>
<ul>
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
<li>オープンバッジ</li>
<li>現在、Teaching with AIを翻訳・出版準備中</li>
</ul>
</div>
</div>

<!--
- 講師の田川です。元々は理学、地球深部の物質を超高圧で合成する研究をしていました。今は大学教育の企画・支援、生成AIの教育利活用などをしています。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="font-size:88px; line-height:1.15;">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:700;">2025年度 第4回： AIで絵・グラフを書いてみる</div>
<div style="font-size:26px; color:var(--accent-dark); margin-top:4px;">15-min × 3 sessions</div>
<div style="font-size:26px; margin-top:18px;">国際未来教育基幹 田川 翔</div>
</div>

<!--
- 2025年度第4回、テーマは「AIで絵・グラフを書いてみる」。15分×3セッションで進めます。
-->

---

<div class="page-title">ワークショップの全体構成</div>

# ワークショップの全体構成

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1.05;">
<div class="box-info" style="font-size:21px; line-height:1.55;">
第1回　生成AIの仕組みを体験する<br>
第2回　Notebook LMで情報を理解する<br>
第3回　生成AI利用、どこまでOKか？、どこからがアウト？<br>
<b>第4回　AIで絵・グラフを書いてみる</b><br>
第5回　体験談を聞く (外部講師による生成AI事例)<br>
第6回　本学Workspaceを使ってみる<br>
第7回　AIを使ってスライドを作ってみる<br>
第8回　Google Spreadsheetが／でAIで分析する
</div>
</div>
<div style="flex:0.95;">
<div class="flowrow" style="flex-direction:column; align-items:stretch; gap:10px;">
<div><div class="lead-note" style="margin:0;">最初の15分</div><div class="fbox" style="background:#E8F2E4; color:#2E7D46; border:2px solid #6FBF73; text-align:center; padding:8px;">講義</div></div>
<div><div class="lead-note" style="margin:0;">真ん中の15分</div><div class="fbox red" style="text-align:center; padding:8px;">体験</div></div>
<div><div class="lead-note" style="margin:0;">最後の15分</div><div class="fbox gray" style="text-align:center; padding:8px;">議論・座談会</div></div>
</div>
</div>
</div>

<div class="box-warn" style="margin-top:12px; margin-right:calc(var(--pip-w) + 8px);">演習・議論付き (オンラインの皆様もぜひ！)　詳細は<b>moodle</b>で！</div>

<!--
- 全8回のうち今日は第4回。各回とも、最初の15分は講義、真ん中で体験、最後に議論・座談会という3部構成です。演習・議論付きで、詳細はmoodleにあります。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<div class="cardrow" style="flex-direction:column; gap:14px;">

<div class="pcard" style="display:flex; gap:24px; align-items:center;">
<div style="min-width:300px;"><div class="lead-note" style="margin:0;">最初の15分</div><div class="fbox" style="background:#E8F2E4; color:#2E7D46; border:2px solid #6FBF73; text-align:center;">講義</div></div>
<div style="font-size:25px;">- AIで絵やグラフを書く、実践的な方法を理解する。</div>
</div>

<div class="pcard" style="display:flex; gap:24px; align-items:center;">
<div style="min-width:300px;"><div class="lead-note" style="margin:0;">真ん中の15分</div><div class="fbox red" style="text-align:center;">体験</div></div>
<div style="font-size:25px;">- AIで絵やグラフを書いてみる。</div>
</div>

<div class="pcard" style="display:flex; gap:24px; align-items:center;">
<div style="min-width:300px;"><div class="lead-note" style="margin:0;">最後の15分</div><div class="fbox gray" style="text-align:center;">議論・座談会</div></div>
<div style="font-size:23px; line-height:1.5;">- 使用してみて気がついたこと (利点と限界)<br>- 大学のなかで使えそうな場面<br>- 今日面白かったこと、気付きは何でしたか。</div>
</div>

</div>

<!--
- 今回も同じ3部構成。最初の15分の講義では絵やグラフを書く実践的な方法を理解し、真ん中で実際に書いてみて、最後に気づきを議論します。
-->

---

<!-- _class: divider -->

<div class="chapter-num">Session 1</div>

# 講義：AIで絵・グラフを書く方法

<h2>2025年度 第4回： AIで絵・グラフを書いてみる ／ 15-min × 3 sessions</h2>

<!--
- それでは、Session 1の講義に入ります。AIで絵・グラフを書く方法についてお話しします。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# Session 1の目的・到達目標

<div style="display:grid; grid-template-columns:130px 1fr; gap:18px; align-items:center; margin-top:18px;">

<div style="font-size:30px; font-weight:800; text-align:center;">目的</div>
<div class="box-info" style="font-size:27px; padding:18px 26px;"><b>Session 1：</b>　講義： AIで絵・グラフを書く方法</div>

<div style="font-size:30px; font-weight:800; text-align:center;">目標</div>
<div class="box-accent" style="font-size:26px; line-height:1.7; padding:16px 26px; margin-right:calc(var(--pip-w) + 8px);">
・絵を書く生成系AIの仕組みを理解する<br>
・絵を書く方法と限界を把握する<br>
・グラフの書き方を知る
</div>

</div>

<!--
- Session 1の目的は、AIで絵・グラフを書く方法の講義。目標は、生成系AIの仕組みの理解、絵を書く方法と限界の把握、グラフの書き方を知ること、の3つです。
-->

---

<div class="page-title">絵を作るAIの概要</div>

# 絵を作るAIの概要<span style="font-size:28px; margin-left:14px;">端的な仕組み (text-to-image)</span>

<div class="flowrow" style="gap:10px; margin:10px 0;">
<div style="text-align:center;"><div class="lead-note" style="margin:0;">テキスト</div><div class="box-info" style="font-size:20px; padding:8px 14px;">浮遊している宇宙飛行士の画像を作成して</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div class="lead-note" style="margin:0; font-size:21px;">部品①</div><div class="fbox blue" style="font-size:20px; padding:8px 14px;">テキスト<br>エンコーディング</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div class="lead-note" style="margin:0;">ベクトル</div><div class="fbox gray" style="font-size:24px; padding:8px 14px;">[ ●●●●● ]</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div class="lead-note" style="margin:0; font-size:21px;">部品②</div><div class="fbox red" style="font-size:20px; padding:8px 14px;">画像生成器</div></div>
<div class="farrow">▶</div>
<div style="text-align:center;"><div class="lead-note" style="margin:0;">完成</div><img src="./src/fig08-astronaut.png" alt="宇宙飛行士" style="height:80px; border-radius:8px;"><div style="font-size:16px; color:#777;">Geminiで作成</div></div>
</div>

<div style="display:flex; gap:16px; margin-top:6px;">
<div class="box-info" style="flex:1; font-size:20px; line-height:1.45;"><b>中身① Transformer</b><br>　単語の関係性を読み解き、解析する。特に、絵の構造や意味を見出す<br><b>中身② CLIPなど</b>　単語をAIが絵を書くためのベクトルに翻訳</div>
<div class="box-accent" style="flex:1; font-size:20px; line-height:1.45; margin-right:calc(var(--pip-w) + 8px);"><b>中身① Diffusion model</b><br>　ノイズから画像を作る”逆”拡散過程<br><b>中身② GAN (敵対的生成ネットワーク)</b>　生成器と識別器を戦わせよりよい画像に　※ 潜在拡散モデル etc…</div>
</div>

<div class="cite" style="margin-right:calc(var(--pip-w) + 8px);"><b>参考文献:</b> 本田志温「画像生成AIのしくみ-AIに言葉を理解させる技術」<i>Software Design</i> (2023) https://gihyo.jp/article/2023/03/how-ai-image-generator-work-01</div>

<!--
- 絵を作るAIの端的な仕組み。text-to-imageでは、テキストを部品①でベクトルに変換し（TransformerやCLIP）、部品②の画像生成器（DiffusionやGAN）で画像を作ります。
-->

---

<div class="page-title">絵を作るAIの概要</div>

# 絵を作るAIの概要<span style="font-size:26px; margin-left:14px; color:#555;">要素技術になったもの</span>

<div style="display:flex; gap:22px; align-items:flex-start;">

<div style="flex:1;">
<div class="subhead" style="margin-bottom:4px;"><b>CLIP by OpenAI (2021)</b></div>
<div style="font-size:20px; color:#555; margin-bottom:6px;">Contrastive Language–Image Pre-training　／　テキストと画像をコネクトする深層学習モデル</div>
<img src="./src/fig09-clip.png" alt="CLIP" style="width:100%; max-height:180px; object-fit:contain; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-info" style="font-size:18px; line-height:1.45; margin-top:6px;"><b>一般的な視覚データセットは労働集約的で、作成費用が高額</b>　ImageNet →22,000の物体カテゴリーの1,400万点の画像に25,000人以上の作業者でアノテーション<br><b>そこで、インターネット上で得られた画像とテキストの組み合わせで学習</b></div>
<div class="cite">https://openai.com/ja-JP/index/clip/　Radford et al., 2021</div>
</div>

<div style="flex:1;">
<div class="subhead" style="margin-bottom:4px;"><b>拡散モデル (2021)</b></div>
<div style="font-size:20px; color:#555; margin-bottom:6px;">Denoising diffusion probabilistic models　／　拡散確率モデルを用いた画像合成モデル</div>
<img src="./src/fig09-diffusion.png" alt="拡散モデル" style="width:100%; max-height:150px; object-fit:contain; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-accent" style="font-size:18px; line-height:1.45; margin-top:6px; margin-right:calc(var(--pip-w) + 8px);"><b>①どのような絵になれば目的の画像に近づくか、「スコア」設定する</b><br><b>②元画像にノイズを足す拡散過程を人為的に生成する</b><br><b>③ノイズをのせた画像から、除去する過程を復元しスコアを上げる方法を学習</b></div>
</div>

</div>

<div class="cite" style="margin-right:calc(var(--pip-w) + 8px);">参考：https://ja.stateofaiguides.com/20221012-stable-diffusion/　Ho et al., 2020 ※とても難しい／その他、Stable Diffusionの中核、潜在拡散モデルなど LDM (latent diffusion model, Rombach et al., 2021)　— 様々な工夫の上で、絵ができている</div>

<!--
- 要素技術になったのがCLIPと拡散モデル。CLIPはネット上の画像とテキストの組で学習し、テキストと画像を結びつけます。拡散モデルはノイズを足して除去する過程を学ぶことで画像を合成します。
-->

---

<div class="page-title">絵/グラフを作るAIと研究倫理</div>

# 絵/グラフを作るAIと研究倫理

<div class="box-warn" style="margin-top:6px;"><b>注意：</b>今回の内容は<b>いま現在</b>、<b>研究ポリシーやレポート作成の観点ではアウトな場合</b>があります</div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:10px;">

<img src="./src/fig10-xrd.png" alt="XRD Debye-Scherrer ring" style="width:150px; border:1px solid #ccc; border-radius:8px;">

<div style="flex:1;">
<div class="exrow" style="margin:6px 0;"><div class="exn">①</div><div><b>ケース①</b>　生成AIで画像を作成・修正した <span style="color:#777;">※AIに関する研究など、例外を除く</span><br>→ <b>多くの論文誌で禁止行為or許可必要</b></div></div>
<div class="exrow" style="margin:6px 0;"><div class="exn">②</div><div><b>ケース②</b>　Canvas機能で作図した / リンクを生成しダウンロードした<br>→ <b>幾つかの論文誌で禁止行為or許可必要</b>（記載が必要な例：Science）</div></div>
<div class="exrow" style="margin:6px 0;"><div class="exn">③</div><div><b>ケース③</b>　ExcelのグラフをreplotするためPythonのコードを出力した<br>→ <b>ケースバイケース (追いついていない)</b>　明示必須もありえる</div></div>
</div>
</div>

<div class="box-info" style="font-size:19px; line-height:1.45; margin-top:6px;"><b>シナリオ例：”</b>XRDのDebye-Scherrer ringのコントラストを変えて/キャプションつけて” → <b>一発でfalsification(改ざん)</b>になる可能性がある。※ なお、左の絵は、Tagawa et al. (2022 JGR)にある、<b>きちんとした画像</b>です。／厳しい例：PNASのポリシー（AI tools for creating images or graphics may not be used unless the software is the subject of the work…）</div>

<div class="box-accent" style="font-size:20px; margin-top:6px; margin-right:calc(var(--pip-w) + 8px);"><b>学生の皆様が研究以外の仕事で使うこともあるので、知っておくことは重要かも...</b>　→ 生成AIの使用目的を考えて、つきあうことが重要 / 分野特性を確認しましょう</div>

<!--
- 絵やグラフを作るAIは、研究倫理上アウトな場合があります。生成AIで画像を作る・修正するのは多くの論文誌で禁止か要許可。改ざんに直結することもあるので、分野特性を確認することが重要です。
-->

---

<div class="page-title">絵を作るAIの概要</div>

# 絵を作るAIの概要<span style="font-size:26px; margin-left:14px;">よく知られている課題感</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<div class="bgroup">
<div class="bg-label" style="color:#1A6BB0;">使用者スキル</div>
<div class="bg-items" style="border-left-color:#1A6BB0;">
<div style="font-size:20px;">① <b>プロンプトがとても複雑 (呪文)</b>　内容・被写体・特徴・範囲+背景+画風+品質 × ポジティブ・ネガティブ × モデル選択</div>
</div>
</div>

<div class="bgroup">
<div class="bg-label" style="color:#C0182B;">技術的課題</div>
<div class="bg-items" style="border-left-color:#C0182B;">
<div style="font-size:20px;">② <b>文字が書けない</b> → よくわからない文字?になる（nano banana通常版での「落花生」の作図結果。<b>そもそも、内容もハルシネーションしているけど…</b>）</div>
<div style="font-size:20px;">③ <b>構図やアイデンティティが一貫しない</b>　例：同じキャラクターで書いて、って言ったのに…</div>
</div>
</div>

<div class="bgroup">
<div class="bg-label" style="color:#E08A2B;">倫理的課題</div>
<div class="bg-items" style="border-left-color:#E08A2B;">
<div style="font-size:20px;">④ <b>バイアスで偏る / 知識がない</b>　例：CEOとかいたら…?　「日本人」で和服?　例：最高裁判事の1980年の様子を書いて？</div>
<div style="font-size:20px;">⑤ <b>著作権の課題、画風の課題</b></div>
</div>
</div>
</div>

<div style="flex:0.5;">
<img src="./src/fig11-peanut.png" alt="落花生の作図結果" style="width:100%; border:1px solid #ccc; border-radius:8px;">
<div style="font-size:18px; color:#777; text-align:center;">通常版のnanobananaで<br>2026/1/26作図</div>
</div>

</div>

<!--
- よく知られた課題感。使用者スキルとしてプロンプトが複雑なこと、技術的には文字が書けない・構図が一貫しないこと、倫理的にはバイアスや著作権の課題があります。右は落花生の作図結果で、文字も内容もおかしくなっています。
-->

---

<div class="page-title">絵を作るAIの概要</div>

# 絵を作るAIの概要<span style="font-size:26px; margin-left:14px;">Geminiで使える絵を描くAI</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<img src="./src/fig12-gemini.png" alt="Nano Banana / Nano Banana Pro" style="width:300px; border:1px solid #e3e8f0; border-radius:8px;">

<div style="flex:1;">
<div class="exrow" style="margin:6px 0;"><div class="exn">①</div><div><b>プロンプトが比較的容易に</b><br>　※良いプロンプトを作れば、もちろん良くなる　※絵も、写真も可能</div></div>
<div class="exrow" style="margin:6px 0;"><div class="exn">②</div><div><b>Pro版では、文字がある程度正確</b><br>　※無料アカウントでは一日の回数制限があり　※思考モードを使用する</div></div>
<div class="exrow" style="margin:6px 0;"><div class="exn">③</div><div><b>構図やアイデンティティの一貫性</b><br>　部分修正も、スタイル変更も可能</div></div>
</div>
</div>

<div class="box-info" style="font-size:19px; line-height:1.45; margin-top:6px; margin-right:calc(var(--pip-w) + 8px);">※ <b>権利上は比較的安全ではある</b>　生成されたものは、Googleは権利は保証しない。学校アカウント(EduPlus)では Shared fate → <b>侵害と認められた時は、Googleが補償</b>（例外：著作物に似せる指示をした場合等）</div>

<div style="font-size:21px; margin-top:6px;"><b>Arena順位：</b>　作図部門 2位 / 図編集部門 2位 (2026/2/2)　<span style="font-size:18px; color:var(--tag-blue);">https://gemini.google/jp/overview/image-generation/?hl=ja-JP</span></div>

<!--
- Geminiで使える絵を描くAI（Nano Banana / Nano Banana Pro）。プロンプトが比較的容易になり、Pro版では文字もある程度正確、構図の一貫性も保てます。権利上も比較的安全で、Arena順位も作図・図編集とも2位です。
-->

---

<div class="page-title">作図機能の例</div>

# <span style="color:var(--accent-dark)">じゃあ、どのくらいまでかけるものなのか？</span>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:6px;">

<div style="display:flex; gap:14px;">
<div style="width:300px;"><img src="./src/s13-aurora.png" alt="北極の空を飛ぶ旅客機とオーロラ" style="width:300px; border-radius:6px;"><div style="font-size:11px; color:#888; line-height:1.3; margin-top:2px;">圧巻の風景写真を作成したいです。北極の空を静かに飛ぶ旅客機を横から眺め、後ろにはオーロラが見えるような、景色を写実感のある写真として出して下さい。高度は高く、地上は小さく、暗闇の中を光るのは飛行機の窓とオーロラだけ。飛行機を横からみた構図にして下さい。写真は正方形にして下さい。</div></div>
<div style="width:200px;"><img src="./src/s13-manga.png" alt="化学実験室の漫画" style="width:200px; border-radius:6px;"><div style="font-size:11px; color:#888; line-height:1.3; margin-top:2px;">高校の化学の実験を生徒がモチベーションがあがるような、楽しそうな絵を生成して下さい。化学実験室の机にフラスコがあって、反応が進んで生徒2-3人驚いている感じで。但し、現実的な実験の様子にして下さい。漫画な感じで、効果音も文字で書いてほしい。吹き出しは使ってはだめです。白黒の線画にして下さい。図は正方形で、明るい感じ。</div></div>
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:21px; padding:8px 16px;">
絵の目的を伝える／内容を具体化し、明示する／「ある」ものを明示する<span style="font-size:18px;">※ないものを明示するのは後</span>／図の縦横比を指定する／構図を指定する／一発で作らず、反復する
</div>
<div style="display:flex; gap:10px; align-items:flex-start; margin-top:10px;">
<img src="./src/s13-pyth.png" alt="三平方の定理の図" style="width:200px; border-radius:6px;">
<div style="font-size:19px; line-height:1.5;">
もちろん間違える時もあります。<br>
<b>三平方の定理をわかりやすく説明する図を作って。</b><br>
cf. ピタゴラス数： 3, 4, 5 / 5,12,13…
</div>
</div>
</div>

</div>

<div class="cite pip-safe">他の様々なプロンプト例は、Geminiチームの例を参照： https://note.com/google_gemini/n/nbe404b055d37　／　※全てGemini + nanobanana Proで2022.2.2に作成</div>

<!--
- どこまで描けるのか。風景写真、漫画、図解と幅広く対応できる。
- 目的を伝え、内容を具体化し、縦横比・構図を指定し、反復するのがコツ。
- 三平方の定理のように、もちろん間違える時もある。
-->

---

<div class="page-title">編集機能の例</div>

# 編集機能の例

<div style="display:flex; gap:30px; margin-top:8px;">

<div style="flex:1;">
<div class="subhead"><span class="tag tag-accent">①</span><span>写真(的なもの)を絵に変換する</span></div>
<div style="display:flex; gap:12px;">
<img src="./src/s14-a1.png" alt="桜の写真" style="width:230px; border-radius:6px;">
<img src="./src/s14-a2.png" alt="色鉛筆イラストに変換" style="width:230px; border-radius:6px;">
</div>
<div style="font-size:19px; margin-top:6px;">全く同じ構図で、色鉛筆で書いたイラストにして下さい。</div>
</div>

<div style="flex:1;">
<div class="subhead"><span class="tag tag-accent">②</span><span>消しゴムマジック/微修正する</span></div>
<div style="display:flex; gap:12px;">
<img src="./src/s14-b1.png" alt="花の写真" style="width:215px; border-radius:6px;">
<img src="./src/s14-b2.png" alt="ミツバチを追加" style="width:215px; border-radius:6px;">
</div>
<div style="font-size:18px; margin-top:6px;">下側に見切れている花の房だけを削除し、補完して下さい。／1匹のミツバチが左上から飛んできたような写真にできませんか。花のサイズは3cmほどです。</div>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:14px; text-align:center; font-size:26px;">ここらへんの修正は、非常に上手ではあります</div>

<div class="cite pip-safe">※教員は、Adobe Creative Cloud上のFireflyも使用可能です</div>

<!--
- 写真を絵に変換、消しゴムマジックや微修正など、編集機能は非常に上手。
- ミツバチを足すような対象の追加もできる。教員はFireflyも使える。
-->

---

<div class="page-title">編集機能の例</div>

# 編集機能の例

<div class="subhead"><span class="tag tag-accent">③</span><span>構図を変える</span></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<img src="./src/s15-a.png" alt="地上から撮ったヤシの木" style="width:380px; border-radius:6px;">
<img src="./src/s15-b.png" alt="空から撮ったような写真" style="width:380px; border-radius:6px;">
</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:22px;">
空から撮ったような写真にして<br>
どうやら、場所も認識したようですが、実際とは左右逆でした。<br>
(なお、Googleからは、平面図から立体を出すデモが提供されていました。)
</div>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center; font-size:26px;">ここらへんの修正は、非常に上手ではあります</div>

<!--
- 構図を変える編集。「空から撮ったような写真にして」で視点変換ができる。
- 場所も認識したが実際とは左右逆だった。平面図から立体を出すデモもあった。
-->

---

<div class="page-title">編集機能の例</div>

# 編集機能の例

<div class="subhead"><span class="tag tag-accent">④</span><span>スタイルを変える</span></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<img src="./src/s16-a.png" alt="ゴールデンゲートブリッジ" style="width:380px; border-radius:6px;">
<img src="./src/s16-b.png" alt="夕焼けにしたゴールデンゲートブリッジ" style="width:380px; border-radius:6px;">
</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:22px;">
夕焼けにして下さい<br>
その他、家具を入れて下さい、とかもできますし。
</div>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center; font-size:26px;">ここらへんの修正は、非常に上手ではあります</div>

<!--
- スタイル変更。「夕焼けにして下さい」で雰囲気を変えられる。
- 家具を入れる、といった要素追加も可能。
-->

---

<div class="page-title">文字を含む編集機能の例</div>

# 文字を含む編集機能の例

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.3;">
<div class="subhead"><span class="tag tag-accent">⑤</span><span>伝えたいことを漫画にする</span></div>
<img src="./src/s17-manga.png" alt="AI利用ポリシーの4コマ漫画" style="width:100%; border-radius:6px;">
<div style="font-size:18px; margin-top:6px;">大学院生に対して、論文作成の際に、AI利用のポリシーを知っている重要性を示す4コママンガを淡い色のカラーで作って下さい。①「AI便利だーすげー。」②「論文もAIで書かせちゃおう。ぽち。」③いかにも博士な人がでてきて、「この行為はだめじゃぞ。ポリシーを確認！」という。④学生はそうなんだ！、という。4コマ目の下に、研究倫理とAI利用ポリシーはきちんと守ろうと書く。</div>
</div>

<div style="flex:1;">
<div class="subhead"><span class="tag tag-accent">⑥</span><span>教材用に解説を書き込んでもらう</span></div>
<img src="./src/s17-orange.png" alt="みかんの断面の解説図" style="width:300px; border-radius:6px;">
<div style="font-size:17px; margin-top:6px;">みかんの断面について、生徒に分かりやすいように、写真をイラストにした上で、見やすい色の文字で、果心、さじょう、じょうのう(さじょうが入っている薄皮)、アルベド(じょうのうの外の白い筋)、フラベド(一番そとの皮)、たねを明示して下さい。二箇所に示す必要はありません。</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:21px;">※イラストまでして、絵と矢印は、自分で加筆したほうが早い。</div>

<div class="cite pip-safe">※教員は、Adobe Creative Cloud上のFireflyも使用可能です</div>

<!--
- 文字を含む編集。4コマ漫画で伝えたいことを表現できる。
- 教材用に解説を書き込んでもらうこともできるが、矢印などは自分で加筆したほうが早い。
-->

---

<div class="page-title">可視化/思考用グラフの作成</div>

# 可視化/思考用グラフの作成

<div class="box-warn" style="margin-top:6px;">
グラフの作成は、<b>絵として書かせない</b>ことがおすすめ<br>
　→ 細部まで正しいことが保証できない/論文作成でも禁止事項<br>
　→ 探索用にコードを書かせる + その出力を練習する
</div>

<div style="display:flex; gap:20px; margin-top:12px;">

<div style="flex:1;">
<div class="callout-gray" style="font-weight:800; text-align:center; padding:4px 0;">Gemini ＋ Canvas　<span class="tag" style="background:#C0182B; color:#fff;">注意！</span></div>
<div class="stepbox" style="margin:8px 0; padding:8px 16px;"><div class="st" style="font-size:20px;">① Canvas機能のChart.jsで、作成してもらう<br><span style="font-size:17px;">※インタラクティブなhtmlで書いてもらう</span></div></div>
<div class="stepbox" style="margin:8px 0; padding:8px 16px;"><div class="st" style="font-size:20px;">② Canvas機能に<b>ECchart指定</b>で、作成してもらう<br><span style="font-size:17px;">※インタラクティブな図がかける</span></div></div>
</div>

<div style="flex:1;">
<div class="callout-gray" style="font-weight:800; text-align:center; padding:4px 0;">Gemini ＋ 外部ツール</div>
<div class="stepbox" style="margin:8px 0; padding:8px 16px;"><div class="st" style="font-size:20px;">③ matplotlibで利用可能なpythonコードを書いてもらう<br><span style="font-size:17px;">→ Google colabやローカルで作図</span></div></div>
<div class="stepbox" style="margin:8px 0; padding:8px 16px;"><div class="st" style="font-size:20px;">④ Mermaid Live Editor等で使えるmarkdownを書いてもらう<br><span style="font-size:17px;">→ ※クラウドで作成する場合には、機密情報に注意</span></div></div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px;">⑤ svgを作ってもらう／⑥ その他、分析ツールやイラストツールを使用する等</div>

<!--
- グラフは絵として書かせず、コードを書かせて出力を練習するのがおすすめ。
- Gemini+Canvasでchart.jsやEChart、外部ツールでmatplotlibやMermaidも使える。
-->

---

<div class="page-title">作成フロー</div>

# <span style="color:var(--accent-dark)">生成AIでグラフを書く場合の検討フロー</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1;">
<div class="flowrow" style="gap:12px;">
<div class="fbox blue" style="font-size:24px; padding:6px 20px;">要素指定</div>
<div class="farrow">⇒</div>
<div class="fbox gray" style="font-size:24px; padding:6px 20px;">グラフのタイプ</div>
</div>
<div class="flowrow" style="gap:12px;">
<div class="fbox gray" style="font-size:22px; padding:6px 18px;">平面/立体</div>
<div class="farrow">⇒</div>
<div class="fbox red" style="font-size:22px; padding:6px 18px;">Canvas / Python / 外部</div>
</div>
<div class="cite">Mermaidで作成（この絵の作成方法）</div>
</div>

<div class="box-info" style="flex:1.2; font-size:20px;">
<b>図の要素を指定する</b> (matplotlibやExcelが使える人は、プロパティをイメージ)<br>
① Figure：グラフ全体の「キャンバス」　② Axes：実際にデータが描画される「グラフ領域」<br>
　※1つのFigureの中に、複数Axesを配置可能<br>
② Axesのタイプ：どんな形状のグラフなのか (棒グラフ、円グラフetc)<br>
③ グラフの構成要素を説明する
</div>

</div>

<table style="font-size:18px; margin-top:8px; width:calc(100% - var(--pip-w));">
<tr><th>要素名</th><th>説明</th></tr>
<tr><td>Title</td><td>グラフ上部に表示されるタイトル。</td></tr>
<tr><td>X-axis / Y-axis</td><td>横軸と縦軸。</td></tr>
<tr><td>X/Y label</td><td>各軸が何を表しているかを示す説明テキスト。</td></tr>
<tr><td>Handle / Legend</td><td>各データ系列（線や色）の状態、並びに何を意味するかを示すリスト。</td></tr>
<tr><td>Grid</td><td>背景に引かれる補助線。メモリも外向き・内向き・主/副がある</td></tr>
<tr><td>Spines</td><td>グラフ領域を囲む4本の境界線。上下左右で個別に表示を切り替えられる。</td></tr>
</table>

<!--
- グラフを書く際の検討フロー。要素を指定し、グラフのタイプを決め、ツールを選ぶ。
- Figure/Axes、Title/軸/凡例/Grid/Spinesといった構成要素を理解しておくと指示が正確になる。
-->

---

<div class="page-title">EChartでの作図例</div>

# EChartでの作図例

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:1;">
<img src="./src/s20-map.png" alt="千葉市内の車線データをEChartで可視化した図" style="width:100%; border-radius:6px; background:#111;">
<div class="cite">OpenStreetMap contributors / OObL</div>
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:22px;">
◀ 千葉市内の車線データをもとに、EC chartでGeminiが作成した図<br>
　※ODbL ライセンスで提供
</div>
<div class="box-accent" style="margin-top:10px; font-size:22px;">
かなり複雑な絵も作成可能／インタラクティブに動く (例：フィルタ機能)／Gemini機能と統合できる
</div>
<div class="box-accent" style="margin-top:10px; font-size:22px;">
AI作図 × 公開データは、結構、革命的　cf. 探索的データ分析
</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:21px;">
<b>可視化し、情報の繋がりを手元で整理できることは、大きな価値である。</b><br>
<span style="font-size:18px;">Appachで作図できるデモ一覧表 https://echarts.apache.org/examples/en/index.html　／　matplotlibで作図できる一覧表 https://matplotlib.org/stable/gallery/index.html</span>
</div>

<!--
- EChartの作図例。千葉市の車線データをGeminiがECchartで可視化した。
- 複雑でインタラクティブな図が作れ、公開データとの組み合わせは探索的データ分析として革命的。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div class="box-accent" style="margin-top:6px; font-size:24px;"><b>Session 1：</b>　講義： AIで絵・グラフを書く方法</div>

<div style="display:grid; grid-template-columns:120px 1fr; gap:14px; margin-top:14px; align-items:start;">

<div style="font-weight:800; font-size:26px; color:var(--accent-dark);">目的</div>
<div style="font-size:24px;">講義： AIで絵・グラフを書く方法</div>

<div style="font-weight:800; font-size:24px; color:var(--accent-dark);">目標<br>＋<br>まとめ</div>
<div style="font-size:22px; line-height:1.6;">
・絵を書く生成系AIの仕組みを理解する　<span style="color:var(--accent);">GAN→拡散モデル</span><br>
・絵を書く方法と限界を把握する　<span style="color:var(--accent);">nanobanana (文字が扱えるようになった !)</span><br>
　<span class="indent-md" style="font-size:20px;">構図処理、漫画、画風、絵の修正</span><br>
・グラフの書き方を知る　<span style="color:var(--accent);">Canvas + デフォルト、ECchart、Mermaid</span><br>
　<span class="indent-md" style="font-size:20px;">Matplot lib+Google Colab</span>
</div>

</div>

<!--
- Session 1の振り返り。AIで絵・グラフを書く方法を講義した。
- 仕組み(GAN→拡散モデル)、方法と限界(nanobanana)、グラフの書き方(Canvas/ECchart/Mermaid/matplotlib)。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">2025年度 第4回： AIで絵・グラフを書いてみる</div>
<div class="title-big">生成AI体験ワークショップ</div>
<div class="title-small" style="margin-top:8px; color:var(--accent-dark);">15-min × 3 sessions</div>
</div>

<div class="box-accent" style="max-width:760px; margin:6px auto 0; font-size:28px;"><b>Session 2：</b>　AIで絵やグラフを書いてみる</div>

<div style="text-align:center; font-size:24px; margin-top:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 2に入ります。実際にAIで絵やグラフを書いてみましょう。
-->

---

<div class="page-title">いざ、実践</div>

# <span style="color:var(--accent-dark)">何をするか？：みんなで絵・グラフの作品集を作ります</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.4;">
<div class="stepbox" style="margin:8px 0; padding:10px 18px;"><div class="st" style="font-size:21px;">① 絵かグラフを、<b>Geminiや関連ツール</b>を用いて書いてみましょう。<br><span class="hl" style="font-size:18px;">注意：機密情報や著作物を含むデータは使用しないこと</span></div></div>
<div class="stepbox" style="margin:8px 0; padding:10px 18px;"><div class="st" style="font-size:21px;">② <b>Google Slide</b>に貼り付け共有して下さい。<b>(名前・顔写真・機密情報不可)</b><br><span style="font-size:18px;">1枚あたり、2-4作品ずつ。新規にページを作ってもOKです！　掲示にあたり公序良俗と著作権を意識して下さい。</span></div></div>
<div class="stepbox" style="margin:8px 0; padding:10px 18px;"><div class="st" style="font-size:21px;">③ 完了後、時間が余った場合には、別の作品を作ってみて下さい。</div></div>
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:21px;">
<b>画像を作る</b>→🍌を選ぶ<br>
<b>グラフを作る</b>→Canvasを選ぶ<br>
or Pythonコードを出力する<br>
→ 必要に応じて、Google colabを使う
</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:21px;">
オンラインの方：困ったらSlidoに質問を送って下さい！／余裕がある方： Slidoに返信してあげてください。／会場の方：困ったら、手を上げてTAやペアに聞いて下さい。
</div>

<!--
- いざ実践。みんなで絵・グラフの作品集を作ります。
- Geminiで作ってGoogle Slideに共有。個人情報や著作物は使わないこと。
-->

---

<div class="page-title">ライブデモを実施します！</div>

# ライブデモを実施します！

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1;">
<div class="box-info" style="font-size:21px;">
シナリオ： <b>オープンデータの可視化</b><br>
「ECchartで作図して」と、キャンバス設定したうえで記入する。
</div>
<div class="box-accent" style="margin-top:10px; font-size:20px;">
オープンデータの例 リンク　<b>10年前のスマホ普及率</b><br>
https://www.e-stat.go.jp/
</div>
<div class="box-info" style="margin-top:10px; font-size:19px;">
シナリオ： <b>研究を理解する上での作図</b><br>
<b>①準備</b>　データ線のcsvとグラフは作成済／目的は、超高圧・高温の圧縮挙動の明示<br>
<b>②プロンプト</b>　内まち、サイズ・縦横比は元図に従う、英語／横軸は、Pressure (GPa)・0-350／縦軸は、Temperature (K) 500-7000<br>
<b>③反復作成なので、matplotlibで作成</b>　作図には、Google Colabで出力
</div>
</div>

<div style="flex:1;">
<img src="./src/s24-graph.png" alt="圧力-体積の圧縮挙動グラフ" style="width:100%; border-radius:6px;">
<div class="cite">Tagawa et al. (2022) GRL</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:20px;">先に述べたように、直接論文に使用可能かは別問題なので要注意</div>

<!--
- ライブデモ。オープンデータの可視化と、研究を理解する上での作図の2シナリオ。
- e-statのスマホ普及率や、超高圧の圧縮挙動グラフをmatplotlibで反復作成する例。
- 直接論文に使えるかは別問題なので要注意。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns:200px 1fr; row-gap:34px; column-gap:24px; align-items:center; margin-top:18px;">

<div style="font-size:36px; font-weight:800; text-align:center;">目的</div>

<div style="background:var(--section-bg); border-radius:14px; padding:22px 32px; font-size:28px; line-height:1.5;"><b style="font-size:30px;">Session 2：</b><br><span style="display:inline-block; margin-left:1.2em;">AIで絵やグラフを書いてみる</span></div>

<div style="font-size:36px; font-weight:800; text-align:center; line-height:1.35;">目標<br><span style="font-size:30px;">＋</span><br>まとめ</div>

<div style="background:var(--section-bg); border-radius:14px; padding:18px 36px; font-size:28px; line-height:1.7;">

- nanobananaで絵を書くことができた
- canvasでグラフを書くことができた
- 様々な出力が可能なことを理解した

</div>

</div>

<!--
- Session 2の振り返り。目的は「AIで絵やグラフを書いてみる」こと。
- 目標とまとめ：nanobananaで絵が書けた、canvasでグラフが書けた、様々な出力が可能なことを理解した、の3点。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="line-height:1.15;">生成AI体験<br>ワークショップ</div>
</div>

<div class="title-meta" style="text-align:center;">
<div class="title-event">2025年度 第4回： AIで絵・グラフを書いてみる</div>
<div style="color:var(--accent-dark); font-weight:700; margin-bottom:24px;">15-min × 3 sessions</div>
</div>

<div style="background:var(--section-bg); border-radius:14px; padding:20px 40px; max-width:760px; margin:0 auto 24px; font-size:28px; line-height:1.5;"><b style="font-size:30px;">Session 3：</b><br><span style="display:inline-block; margin-left:1.2em;">議論：気づきのシェア &amp; 振り返り</span></div>

<div style="text-align:center; font-size:26px;">国際未来教育基幹　田川 翔</div>

<!--
- Session 3の扉。ここからは議論・座談会で、気づきのシェアと振り返りを行います。
-->

---

<div class="page-title">Session 3の進め方</div>

# <span style="background:var(--section-bg); border-radius:10px; padding:4px 28px; font-size:34px;">議論・座談会</span>

<div style="font-size:24px; line-height:1.7; margin:10px 0 14px;">

- 実際に使ってみて、ユースケース別に<b>「上手くいった点」「イマイチな点」「上手く行かなかった点」</b>を教えて下さい。
- <b>大学の中で諸活動の中で、絵・グラフの作成が便利そうなユースケースや絶対NGの範囲</b>を提案して下さい。
- 今日面白かったこと、気付きは何でしたか。

</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 auto; text-align:center;">
<div style="font-size:26px; font-weight:800; margin-bottom:8px;">Slidoで進めます</div>
<img src="./src/fig27-qr.png" alt="Slido QRコード" style="width:150px;">
<div style="font-size:20px; margin-top:4px;">スマホから</div>
</div>

<div style="flex:1; font-size:22px; line-height:1.6;">
<div style="font-weight:800; margin-bottom:6px;">PCから</div>
<div>方法1　Google検索「Slido」→コード入力　<b>ALC-AI1-04</b></div>
<div>方法2　直接リンク</div>
<div style="font-size:19px; color:var(--tag-blue); word-break:break-all;">https://app.sli.do/event/pwnuuMARudJHpYZPs4oQvk</div>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:14px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br>敬意をもって、忌憚なく、建設的に、話し合いましょう</div>

<!--
- Session 3の進め方。Slidoで進めます。スマホはQRから、PCはコード ALC-AI1-04 か直接リンクで。
- 3つの問い：ユースケース別の上手くいった点／イマイチな点／上手く行かなかった点、便利そうなユースケースと絶対NGの範囲、今日面白かったこと・気付き。
- お願い：協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に。
-->

---

<div class="page-title">次回告知</div>

# 生成AI体験<span style="font-size:34px;">ワークショップ</span>

<div style="display:grid; grid-template-columns:280px 1fr; gap:24px; align-items:start; margin-top:8px;">

<img src="./src/fig28-hashiguchi.png" alt="ゲスト 橋口 剛 氏" style="width:240px; border-radius:10px;">

<div>

<div style="background:var(--section-bg); border-radius:12px; padding:14px 26px; margin-bottom:12px; font-size:24px; line-height:1.5;">2025年度 第5回： 外部講師特別回 2/10<br><b style="color:var(--accent-dark); font-size:27px;">AIとクラウドで起きる変化を俯瞰する</b></div>

<div style="font-size:22px; line-height:1.55;">

1) なぜ、AI(機械学習、特に生成AI)とクラウドはこれからの仕事に影響するのか。
2) 生成AIやPaaS/iPaaSは、大学にどのような利点があるのか。
3) 手元でイノベーションを作れる時代において、AI/クラウドを学び試す必要性とは？

</div>

</div>

</div>

<div class="box-info pip-safe" style="margin-top:12px; font-size:20px; line-height:1.5;"><b>ゲスト： 橋口 剛 氏　ブログ</b>　経済学部卒業後、日本IBM、ゆめみ、アクセンチュア、ウイングアークにてエンジニア、コンサル、営業職を経験。2011年Googleに技術営業として入社、執行役員営業本部長、執行役員AI事業本部長を歴任。2025年5月にArty Intelligence Lab. を設立。AIを自動化だけでなく、創造性を解き放つ道具と捉え、業務実施中。教育テック大学院大学の特任教授も務める。</div>

<!--
- 次回告知。第5回は外部講師特別回（2/10）「AIとクラウドで起きる変化を俯瞰する」。
- ゲストは橋口 剛 氏。日本IBM・Google等を経てArty Intelligence Lab.を設立。
-->
