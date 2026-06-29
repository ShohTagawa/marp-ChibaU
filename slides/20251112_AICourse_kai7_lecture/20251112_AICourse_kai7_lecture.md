---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 説明シート用の2列ワークシート表 */
  .ws { width: 100%; border-collapse: collapse; font-size: 18px; line-height: 1.28; table-layout: fixed; }
  .ws td { border: 1.5px solid #c8d2cf; padding: 4px 10px; vertical-align: top; }
  .ws .lbl { background: #eef3f1; font-weight: 800; color: var(--accent-dark); width: 17%; }
  .ws .lbl small { font-weight: 600; color: #555; font-size: .85em; }
  .ws .sec { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; font-size: 19px; padding: 2px 10px; }
  /* スライド6 用の縦並びカード行 */
  .vrow { display: grid; grid-template-columns: 230px 1fr; gap: 0; margin: 10px 0; align-items: stretch; }
  .vrow .vl { background: #eef3f1; border: 1.5px solid #c8d2cf; padding: 10px 16px; font-weight: 800; color: var(--accent-dark); display: flex; flex-direction: column; justify-content: center; }
  .vrow .vl small { font-weight: 600; color: #555; font-size: .82em; }
  .vrow .vc { border: 1.5px solid #c8d2cf; border-left: none; padding: 10px 18px; font-size: 27px; display: flex; align-items: center; }
  .vrow .vc .dot { color: var(--accent); margin-right: 8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座</div>
<div class="title-big">第7回</div>
</div>

<div style="display:flex; align-items:center; gap:40px; margin-top:18px;">
<div style="font-size:26px; line-height:1.7;">
2025/11/12　講師：田川 翔<br>
<span style="color:#555;">千葉大学 国際未来教育基幹 助教</span>
</div>
<img src="./src/fig01-img.png" alt="講師" style="height:200px; border-radius:10px;">
</div>

<!--
- 第7回。今日は各班の発表と相互評価を行います。
-->

---

<div class="page-title">発表と評価を行います</div>

# 流れ

<div class="box-info" style="margin-top:8px;">
　※ 今日は適当に座席に座って下さい。<br>
　※ 机がない人は椅子のみでお願いします。<br>
　　　→部屋の予約があるそうで、机が出せません。
</div>

<div class="stepbox" style="margin-top:18px; margin-right:calc(var(--pip-w) + 40px);">
<div class="st"><b>4:00 - 4:30で発表、次の班に30秒で交代</b></div>
<div class="st"><b>その間に、採点を完了して下さい</b></div>
<div class="st"><b>次の班の人は、前の椅子で待機すること</b></div>
<div class="st"><b>評価は自分の班には行わない事 (他の班のみ)</b></div>
</div>

<!--
- 発表4分→30秒で交代。待機中に採点を完了。自分の班は評価しない。
-->

---

<div class="page-title">採点フォーム</div>

<div style="display:flex; flex-direction:column; align-items:center; margin-top:24px;">
<img src="./src/fig02-img.png" alt="採点フォームQR" style="width:300px;">
<div style="margin-top:18px; font-size:26px;"><a href="https://forms.gle/FrXVTav92ahiwbg56" style="color:var(--tag-blue);">https://forms.gle/FrXVTav92ahiwbg56</a></div>
<div style="margin-top:8px; font-size:25px; color:#555;">全員一括で実施 / 自分のグループには<b style="color:var(--accent-dark);">答えない</b>こと</div>
</div>

<!--
- 採点フォームのQR。全員一括で。自分のグループには答えない。
-->

---

<div class="page-title">AI課題解決説明シート</div>

<div style="display:flex; gap:22px; align-items:center; margin:0 0 6px;">
<div style="font-size:29px; font-weight:800; color:var(--accent-dark);">AI課題解決説明シート</div>
<div class="tag tag-soft" style="font-size:18px;"><b>種別</b>　サービス or 実験</div>
<div style="font-size:18px;">タイトル：____</div>
<div style="font-size:18px;">グループ名：____　今日の参加者：____</div>
</div>

<table class="ws">
<tr><td class="sec" colspan="2">課題や関心を探索する</td><td class="sec" colspan="2">Difyアプリの役割を具体化する</td></tr>
<tr>
<td class="lbl">課題感・<br>関心は?</td>
<td>なにが、このアイデアの背景にあるのか (例) 〇〇が不便という声に共感/倫理的不安　　〇〇に関心があったメンバーが多かった　実際のエビデンスなども記入</td>
<td class="lbl">あなたの班が<br>今回実現する体験は？</td>
<td>Difyアプリで実現する体験を明確に描く　左側で描いた内容よりも具体的かつ絞ってOK</td>
</tr>
<tr><td class="sec" colspan="2">解決後を描く</td><td class="sec" colspan="2">Difyアプリの仕様を具体化する</td></tr>
<tr>
<td class="lbl">ユーザー<br>ペルソナ</td>
<td>だれが、このアプリの主要ユーザーか？　実験PJでは、誰が恩恵をうけるのか？</td>
<td class="lbl">利用者の状態<br>・利用方法</td>
<td>利用する際のシナリオを明確化して記入する</td>
</tr>
<tr>
<td class="lbl">AIが介入<br>した後の<br>イメージ</td>
<td>このアプリによって、人は何ができるようになるのか。それによって、どのようにユーザーは利点を得るのか？実験PJでは、どのような点が検証されるのか</td>
<td class="lbl">AI出力情報</td>
<td>AIが出力する情報を記入する (具体例or概要)</td>
</tr>
<tr>
<td class="lbl">Why<br><small>このPJの存在価値</small></td>
<td>なぜ、このプロジェクトが面白いのかやる価値があるのか、十分に夢を語る</td>
<td class="lbl">機能</td>
<td>上記の出力を実現するために、必要なDifyのブロックの種類とその機能、必要な外部情報の接続方法(ツールまたはhttp読み込みまたはナレッジ)を記載する。データベースをきれいに作るなどもここに記載する</td>
</tr>
</table>

<!--
- 発表に使う説明シートのテンプレ。左＝課題探索／解決後、右＝Difyアプリの役割・仕様。
-->

---

<div class="page-title">どんなことを実現したいと思ったか？</div>

# <span style="color:var(--accent-dark)">どんなことを実現したいと思ったか？ (一言で！)</span>

<div style="display:flex; gap:20px; align-items:center; margin:2px 0 10px;">
<div class="tag tag-soft"><b>種別</b>　サービス</div>
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">Wikipediaを問題化！</div>
</div>

<div class="vrow">
<div class="vl">課題感・関心は?<br><small>動機は？</small></div>
<div class="vc"><span class="dot">●</span>わかるけど、覚えられる気がしない！</div>
</div>

<div class="vrow">
<div class="vl">ユーザーペルソナ</div>
<div class="vc"><span class="dot">●</span><b>探究する高校生を指導する高校教師</b></div>
</div>

<div class="vrow">
<div class="vl">Why<br><small>アプリの存在価値</small></div>
<div class="vc"><span class="dot">●</span><b>調べ学習が間違えにくい</b></div>
</div>

<div class="vrow" style="margin-right:calc(var(--pip-w) + 20px);">
<div class="vl">機能<br><small>なにが出来るのか</small></div>
<div class="vc"><span class="dot">●</span><b>wikipediaの記事を問題にしてくれる</b></div>
</div>

<!--
- 田川 (30秒)。Wikipediaを問題化するサービス。覚えられる気がしない、を解決。
-->

---

<div class="page-title">デモ</div>

# デモ

<div class="box-accent" style="margin-top:28px; text-align:center; font-size:27px;">
<b>アプリの実行可能なURL：</b><br>
<a href="https://chiba-u-ai25-g3.xvps.jp/chat/NhJOWFqCfSbD9zPw" style="color:var(--tag-blue);">https://chiba-u-ai25-g3.xvps.jp/chat/NhJOWFqCfSbD9zPw</a>
</div>

<div class="box-warn" style="margin-top:22px; text-align:center; margin-right:calc(var(--pip-w) + 40px);">
<b>画面で実際に見せるので、皆さん自身でも使って見てください</b><br>
<b>or 動画や写真、出力のメモでも可能</b><br>
<b>4分に収まるように、うまくやって下さい</b>
</div>

<!--
- 田川 (30秒)。実行URLを共有。画面で実演 or 動画/写真/メモ。4分に収める。
-->

---

<div class="page-title">Dify の構成と入出力</div>

# <span style="color:var(--accent-dark)">Dify の構成と入出力</span>

<img src="./src/fig03-img.png" alt="Difyワークフロー構成" style="width:100%; margin:4px 0 8px;">

<div style="display:flex; gap:16px; align-items:stretch;">
<div class="box-info" style="flex:1.3;">
<b>使用した機能・工夫</b><br>
　① ツール (wikipediaサーチ)<br>
　② LLMを2個 (critic AI的に)<br>
③ httpリクエストで記事丸ごと落とす<br>
④ 落とした記事を探して文字にするコード実行 (自作！)<br>
⑤ 回答の中に著作権や注意を表示
</div>
<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="box-accent"><b>入力</b>　① 問題にしてほしい概念・単語　② 問題数/レベル感</div>
<div class="box-accent" style="margin-right:calc(var(--pip-w) + 8px);"><b>出力</b>　① 四択問題　② その解説　③ 記事自体</div>
</div>
</div>

<!--
- 田川 (30秒)。ツール＋LLM2個＋httpリクエスト＋自作コード実行。入力＝概念/問題数、出力＝四択問題/解説/記事。
-->

---

<div class="page-title">倫理面での対応 / 難しかった点</div>

# <span style="color:var(--accent-dark)">倫理面での対応　/ 難しかった点</span>

<div class="subhead"><span class="tag tag-accent">倫理上の課題</span></div>

<div class="box-info" style="margin-top:4px;">
著作権： wikipediaの文章を使う場合は明示必要<b>→出力に明示する</b><br>
そのまま使って、誤った問題が出る懸念<b>→教員に確認を依頼する文章を出し、AIでも一回確認</b>
</div>

<div class="subhead" style="margin-top:14px;"><span class="tag tag-accent">困った点・“ウリ”</span></div>

<div class="box-warn" style="margin-right:calc(var(--pip-w) + 40px);">
<b>wikipediaの記事をダウンロードしたデータのurlを指定するコードは自作です！(toolでは出来なかった)</b><br>
特にhttpリクエストで落とすと、dify内部のファイルに入ってしまうようで、そのurl処理が大変でした<br>
<b>問題のレベルを学年で指定してみた (案外機能した)</b>
</div>

<div class="goal-box" style="margin-top:14px; padding:10px 24px; font-size:24px; margin-right:calc(var(--pip-w) + 40px);"><b>努力時間： 1人で4時間… + スライド作成</b></div>

<!--
- 田川 (30秒)。著作権の明示・誤問対策。自作コードでurl処理が大変。学年指定が案外機能。努力4時間。
-->

---

<div class="page-title">気づいたこと・感想・まとめ</div>

# <span style="color:var(--accent-dark)">気づいたこと・感想・まとめ</span>

<div class="vrow">
<div class="vl">出力をみた<br>気づき</div>
<div class="vc" style="font-size:23px;"><span class="dot">●</span>wikipediaを読むと、わかった気になっていることがわかった (問題を答えられなかった / 結構意外！)</div>
</div>

<div class="vrow">
<div class="vl">作ってみた<br>気づき</div>
<div class="vc" style="font-size:23px; flex-direction:column; align-items:flex-start;">
<div><span class="dot">●</span>案外、ファイル処理のような細かいところが難しい…</div>
<div><span class="dot">●</span>AIを問題を作るうえでの相棒にはできそう</div>
</div>
</div>

<div class="vrow">
<div class="vl">課題</div>
<div class="vc" style="font-size:23px; flex-direction:column; align-items:flex-start;">
<div><span class="dot">●</span>AIに、良い問題を出す方法を教えたい</div>
<div style="margin-left:1.4em; color:#444; font-size:21px;">幾つか試した結果、Claudeで乗り切っている…</div>
<div style="margin-left:1.4em; color:#444; font-size:21px;">本当は、教育学的な方法論があるのでは？</div>
</div>
</div>

<div class="vrow" style="margin-right:calc(var(--pip-w) + 20px);">
<div class="vl">感想</div>
<div class="vc" style="font-size:23px;"><span class="dot">●</span><b>思ったより楽しくて、一人で満足しました</b></div>
</div>

<!--
- 田川 (30秒)。読むと分かった気になる。ファイル処理が難しいがAIは相棒に。良い問題の作り方を教えたい。楽しかった。
-->

---

<!-- _class: divider -->

<div class="page-title">課題</div>

# 課題

<div class="box-warn" style="max-width:780px; margin:20px auto 0; text-align:center; font-size:27px;">
全員一括で実施 / 自分のグループには<b style="color:var(--accent-dark);">答えない</b>こと
</div>

<!--
- まとめ。課題は全員一括で実施。自分のグループには答えない。
-->
