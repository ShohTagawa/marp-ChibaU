---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用術</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール（生成AI活用講座）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 20%; }
  section .page-title { left: 18%; width: 36%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  .session-pill { display:inline-flex; align-items:center; gap:8px; font-weight:800; color:var(--accent-dark); border:2px solid var(--accent); background:var(--accent-soft); border-radius:999px; padding:4px 18px; font-size:22px; }
  .access-grid { display:grid; grid-template-columns: 1fr 1.7fr; gap:16px; align-items:stretch; margin-top:8px; }
  .access-card { border:2.5px solid var(--accent); border-radius:14px; padding:8px 16px; background:#fff; }
  .access-card .ah { font-weight:800; color:#fff; background:var(--accent); border-radius:8px; padding:3px 0; text-align:center; margin-bottom:6px; font-size:21px; }
  .qrwrap { text-align:center; }
  .qrwrap img { height:130px; }
  .qrwrap .qcap { font-size:18px; color:#555; margin-top:2px; }
  .privacy { font-size:18px; color:#555; line-height:1.45; border-left:4px solid #bbb; padding:6px 14px; margin-top:10px; }
  .privacy b { color:var(--accent-dark); }
  .construct-row { display:grid; grid-template-columns: 200px 150px 1fr; gap:20px; align-items:center; margin:14px 0; }
  .ctime { font-size:21px; color:#444; font-weight:700; }
  .cbadge { font-weight:800; color:#fff; background:var(--accent); border-radius:10px; padding:12px 0; text-align:center; font-size:28px; }
  .cdesc { font-size:24px; line-height:1.55; }
  .session3-box { border:2.5px solid #cfcfcf; background:#f2f2f2; border-radius:16px; padding:18px 30px; font-size:30px; line-height:1.5; max-width:980px; margin:20px auto 0; }
  .session3-box b { color:var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:30px; color:var(--accent-dark); font-weight:800;">2026年度 第2回： <span style="color:var(--accent-dark)">生成AIを利用した学び方</span></div>
<div style="font-size:26px; color:#666; margin-top:6px;">15-min or 30-min × 3 sessions</div>
<div style="font-size:26px; margin-top:20px;">国際未来教育基幹 田川 翔</div>
</div>

<div class="box-warn" style="position:absolute; top:120px; right:60px; width:240px; border-radius:18px; text-align:center; transform:rotate(-3deg);"><b>学部1年生にも<br>おすすめ</b></div>

<!--
- タイトルコール。第2回「生成AIを利用した学び方」。15分／30分×3セッション。学部1年生にもおすすめ。
-->

---

<div class="page-title">開始の前に</div>

# <span style="font-size:38px;">開始の前に</span>

<div class="stepbox" style="margin:4px 0; padding:7px 24px;">
<div class="st" style="font-size:23px; line-height:1.4;">① <b>PCを立ち上げ、お持ちの</b> <b>千葉大学Google Workspaceにログインして下さい</b><br><span style="margin-left:1.6em;">→ 学校のGmailが立ち上がる状況ならOKです。</span></div>
</div>

<div class="stepbox" style="margin:4px 0; padding:7px 24px;">
<div class="st" style="font-size:23px; line-height:1.4;">② <b>インタラクションツール</b> <span class="tag tag-accent">slido</span> <b>にアクセスして下さい</b><br><span style="margin-left:1.6em;">URLを配布したり、質問やアンケートをとったりします</span></div>
</div>

<div class="access-grid" style="margin-right:calc(var(--pip-w) + 8px); align-items:start;">
<div class="access-card"><div class="ah">スマホから</div>
<div class="qrwrap"><img src="./src/fig02-img.png" alt="slido QRコード" style="height:110px;"><div class="qcap">QRコードを読み取り</div></div>
</div>
<div class="access-card"><div class="ah">PCから</div>
<div style="font-size:20px; line-height:1.45;">
<div>方法1　Google検索「<b>slido</b>」→コード入力</div>
<img src="./src/fig01-img.png" alt="slido参加バッジ" style="width:100%; margin:4px 0;">
<div><span class="tag tag-soft" style="font-size:18px;">ALC-AI2-02</span>　方法2　直接リンク</div>
<div style="font-size:17px; color:var(--tag-blue); word-break:break-all;">https://app.sli.do/event/t4nDVcb6pV8MTiWFcMG5gB</div>
</div>
</div>
</div>

<div class="privacy" style="margin-right:calc(var(--pip-w) + 8px); font-size:17px;">※<b>slido/ワーク教材への入力情報</b>のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</div>

<!--
- 開始前の準備。①千葉大Google Workspaceにログイン、②slidoにアクセス（スマホはQR、PCは検索orリンク）。入力情報の取り扱いに関する注意も案内。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<div class="construct-row">
<div class="ctime">最初の15分</div>
<div class="cbadge">講義</div>
<div class="cdesc">- GemとNotebookLMを理解する<br>- 学びに使えるアイデアを知る</div>
</div>

<div class="construct-row">
<div class="ctime">真ん中<b style="color:var(--accent);">30</b>分 (前半だけも可)</div>
<div class="cbadge">体験</div>
<div class="cdesc">- Gem &amp; NotebookLMを使いこなしてみる<br>- 気づきを共有してみる</div>
</div>

<div class="construct-row" style="margin-right:calc(var(--pip-w) + 8px);">
<div class="ctime">最後の15分</div>
<div class="cbadge">議論・座談会</div>
<div class="cdesc" style="font-size:22px;">- 今日学んで面白かったことは何でしたか。<br>- Gemはどのような点に使えそうですか？<br>- NotebookLMはどう使えそうですか？</div>
</div>

<!--
- 今回の構成は3部。最初の15分=講義、真ん中30分=体験、最後の15分=議論・座談会。
-->

---

<div class="page-title">Session 3の進め方</div>

# <span style="color:var(--accent-dark)">学びを変える！研究を深める！</span><br>生成AI活用術

<div style="font-size:26px; color:var(--accent-dark); font-weight:800; margin-top:6px;">2026年度 第2回： 生成AIを利用した学び方　<span style="font-weight:400; color:#666;">15-min sessions</span></div>

<div class="session3-box"><b>Session 3：</b><br><span style="margin-left:1.4em;">今日の気づきをみんなで共有してみる。</span></div>

<div style="text-align:center; font-size:24px; margin-top:24px;">国際未来教育基幹 田川 翔</div>

<!--
- Session 3の章扉。「今日の気づきをみんなで共有してみる」がこのセッションのテーマ。
-->

---

<div class="page-title">OODAループでAIと関わる</div>

# <span style="font-size:34px;">OODAループでAIと関わってみるのはどうか</span>

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:6px;">
<div style="flex:0 0 auto;">
<img src="./src/fig10-ooda-loop.png" alt="OODAループをAI活用の観点で修正したもの" style="height:400px;">
<div class="cite">図24. OODAループをAI活用の観点で修正したもの</div>
</div>
<div style="flex:1; margin-right:calc(var(--pip-w) - 60px);">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">AI学習のサイクル</div>
<ul style="font-size:22px; line-height:1.5; margin:4px 0 8px 1em;">
<li><b>Observe</b>：AIが何を出してきたか観る</li>
<li><b>Orient</b>：自分の知識と照らす</li>
<li><b>Decide</b>：採用／修正／棄却を決める</li>
<li><b>Act</b>：使う、または再プロンプト</li>
</ul>
<div style="font-size:25px; font-weight:800; color:var(--accent-dark);">積上げ式はAI agentの学習にたぶん合わない</div>
<ul style="font-size:21px; line-height:1.45; margin:4px 0 0 1em;">
<li>まずは使って、使えるか判断する</li>
<li>自分が評価できるようにしることが大切
<ul style="margin-left:0.8em;"><li>活用は、評価できる範囲で行う</li></ul></li>
<li>出力は、一歩立ち止まって考えてみる
<ul style="margin-left:0.8em;"><li>ハルシネーションやバイアスはいまだにある</li></ul></li>
</ul>
</div>
</div>

<div class="box-accent" style="margin-top:8px; margin-right:calc(var(--pip-w) + 8px); text-align:center; font-size:24px;">「<b>使ってみる → 評価する → 工夫する</b>」サイクルを持つことが、AI活用力を高める鍵</div>

<!--
- OODAループ（Observe→Orient→Decide→Act）をAI活用の観点で読み替える。使ってみる→評価する→工夫する、のサイクルがAI活用力を高める鍵。
-->

---

<div class="page-title">Session 3の進め方</div>

# <span style="font-size:38px;">Session 3の進め方</span>　<span class="session-pill" style="font-size:20px;">議論・座談会 / 最後の15分</span>　<span style="font-size:24px; font-weight:800;"><span style="color:var(--tag-blue);">slido</span>で進めます</span>

<div style="display:flex; gap:18px; align-items:stretch; margin-top:6px; margin-right:calc(var(--pip-w) + 8px);">
<div style="flex:1.05;">

<div class="box-info" style="font-size:21px; padding:8px 18px;">
- 今日学んで面白かったことは何でしたか。<br>
- Gemはどのような点に使えそうですか？<br>
- NotebookLMはどう使えそうですか？
</div>

<div class="box-warn" style="margin-top:8px; font-size:21px; padding:8px 18px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br><span style="margin-left:1.2em; font-weight:400;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span></div>

</div>

<div class="access-grid" style="flex:1.2; margin-top:0;">
<div class="access-card"><div class="ah">スマホから</div>
<div class="qrwrap"><img src="./src/fig06-img.png" alt="slido QRコード" style="height:118px;"></div>
</div>
<div class="access-card"><div class="ah">PCから</div>
<div style="font-size:19px; line-height:1.5;">
<div>方法1　Google検索「<b>slido</b>」→コード入力</div>
<img src="./src/fig04-img.png" alt="slido参加バッジ" style="width:100%; margin:4px 0;">
<div><span class="tag tag-soft" style="font-size:18px;">ALC-AI2-02</span></div>
<div style="margin-top:3px;">方法2　直接リンク</div>
<div style="font-size:16px; color:var(--tag-blue); word-break:break-all;">https://app.sli.do/event/t4nDVcb6pV8MTiWFcMG5gB</div>
</div>
</div>
</div>
</div>

<div class="privacy" style="margin-right:calc(var(--pip-w) + 8px); margin-top:8px;">※slidoへの入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<!--
- Session 3はslidoで進行。3つの問い（面白かったこと／Gemの使いどころ／NotebookLMの使いどころ）について、敬意をもって建設的に話し合う。
-->

---

<div class="page-title">終了時アンケート・次回予告</div>

# 終了時アンケート・次回予告

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.15;">
<div class="box-accent">次回以降も「さらにみなさんのニーズにあわせた」企画を実施するため、<br><b>終了時アンケート</b>へのご協力をお願いいたします。<br><span style="font-size:20px; color:var(--tag-blue); word-break:break-all;">https://forms.gle/5sXy6f5yZkoJ8XJZ7</span></div>

<div class="privacy" style="margin-top:8px;">【お願い】アンケートへの入力情報のうち【個人情報や機微情報を除いた】情報を、アカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>
</div>

<div style="flex:0 0 200px; text-align:center;">
<div style="border:2.5px solid var(--accent); border-radius:12px; background:var(--accent-soft); padding:10px 14px;">
<div style="font-size:21px; font-weight:800; color:var(--accent-dark);">学びを変える！</div>
<div style="font-size:21px; font-weight:800; color:var(--accent-dark);">研究を深める！</div>
<div style="font-size:30px; font-weight:800; color:var(--accent); margin:4px 0;">生成AI活用術</div>
<div style="font-size:18px; color:#555;">2026年度 第3回：<br><b>NotebookLM (ゲスト講師回)</b></div>
<div style="font-size:16px; color:#777;">15-min or 30-min × 3 sessions</div>
</div>
</div>
</div>

<div style="display:flex; gap:18px; align-items:stretch; margin-top:14px; margin-right:calc(var(--pip-w) + 8px);">
<div style="flex:0 0 auto;"><span class="tag tag-accent" style="font-size:24px;">次回予告</span></div>
<div class="box-warn" style="flex:1;">情報・データサイエンス学部 3年の先輩と自分で進めます。学生目線の意見にも注目です！</div>
<div class="box-accent" style="flex:0 0 auto; font-weight:800; text-align:center;"><b>6/11 (木) 16:10 - 17:10</b><br><span style="font-weight:400; font-size:20px;">会場(ここ)・オンライン併用</span></div>
</div>

<!--
- 終了時アンケートへの協力依頼。次回（第3回）はNotebookLM・ゲスト講師回。6/11(木)16:10-17:10、会場とオンライン併用。
-->
