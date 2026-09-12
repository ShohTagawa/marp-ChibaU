---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×教育を試す！</div><span class="hdr-event">生成AIに関するFD講習会 #2</span><img class="hdr-logo" src="./src/meikai-logo.png" alt="明海大学">'
footer: ''
style: |
  :root {
    --accent: #00736B;          /* 明海大学カラー（ティール／グリーン）第1回と同じ */
    --accent-dark: #004D45;
    --accent-soft: #E3F1EF;
    --section-bg: #F1F8F7;
    --hdr-left-w: 25%;
  }
  /* ワーク（参加型）スライド：本文(.split-body)を枠で囲い、左上に「WORK」タブ */
  section.work .split-body {
    border: 2.5px solid var(--accent);
    border-radius: 18px;
    padding: 24px 26px 22px;
    background: #fff;
    box-shadow: 0 3px 13px rgba(0,0,0,.07);
    position: relative;
    margin-top: 14px;
  }
  section.work .split-body::before {
    content: "🖐 WORK";
    position: absolute; top: -15px; left: 24px;
    background: var(--accent); color: #fff;
    font-size: 15px; font-weight: 800; letter-spacing: .05em;
    padding: 4px 16px; border-radius: 999px;
    box-shadow: 0 2px 6px rgba(0,0,0,.13);
  }
  /* 全員ハンズオンは「HANDS-ON」タブ */
  section.handson .split-body::before { content: "💻 HANDS-ON（全員で）"; }
  /* ヘッダー右：イベント名ラベル＋主催校ロゴ */
  section > header .hdr-event { margin-left: auto; align-self: center; margin-right: 14px;
    font-size: 16px; font-weight: 700; color: #5a6764; white-space: nowrap; line-height: 1.15; }
  section > header .hdr-logo { margin-left: 0; }
  section .page-title { left: 21%; width: 36%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  h2 { color: var(--accent-dark); }
  section.summary, section.split, section.wrap {
    display: flex !important; flex-direction: column !important;
    justify-content: center !important; align-items: stretch !important;
  }
  section.summary > h2, section.split > h2 { margin-bottom: 20px; }
  section.split.jtop { justify-content: flex-start !important; }

  /* ===== 表紙（cover-hero） ===== */
  section.cover-hero { --hdr-left-w: 25%; }
  section.cover-hero .title-small { color: #2a2d33; }
  section.cover-hero .title-affil { font-size: 22px; color: #44504d; }
  section.cover-hero .cv-kicker { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 20px; padding: 7px 18px; border-radius: 8px; margin-bottom: 22px; }
  section.cover-hero .cv-kicker img { height: 24px; background: #fff; border-radius: 3px; padding: 1px 3px; }

  /* ===== 出典ライン ===== */
  .srcline { font-size: 15px; color: #7a8581; margin-top: 8px; line-height: 1.4; }
  .srcline a { color: var(--accent); text-decoration: none; word-break: break-all; }
  .srcline b { color: #5a6764; font-weight: 700; }

  /* ===== アジェンダ（時間ラベル＋色ピル＋箇条書き） ===== */
  .agenda { display: flex; flex-direction: column; gap: 10px; margin-top: 2px; }
  .agenda-row { display: flex; align-items: center; gap: 22px; border: 1.5px solid #dde6e4; border-radius: 16px; padding: 9px 24px; background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .agenda-left { flex: 0 0 232px; }
  .agenda-time { font-size: 17px; color: #5a6764; font-weight: 700; margin-bottom: 5px; }
  .agenda-time .min { color: var(--accent); }
  .agenda-pill { font-size: 25px; font-weight: 800; text-align: center; border-radius: 12px; padding: 7px 0; line-height: 1.15; }
  .pill-1 { background: #E3F1EF; color: var(--accent-dark); }
  .pill-2 { background: #FBEAD9; color: #9a4a12; }
  .pill-3 { background: #E7EAF3; color: #34406b; }
  .pill-4 { background: #F3E8F5; color: #5b2d6b; }
  .agenda-list { flex: 1; font-size: 21px; line-height: 1.45; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 4px 0; position: relative; padding-left: 1.1em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #9aa5a2; font-weight: 700; }
  .agenda-list li b { color: var(--accent-dark); }

  /* ===== Slido アクセス（QR行） ===== */
  .sec-qr-row { display: flex; align-items: center; gap: 16px; }
  .sec-qr-row .sq-text { flex: 1; min-width: 0; }
  .sec-qr-row .sq-qr { flex: 0 0 auto; text-align: center; }
  .sec-qr-row .sq-qr img { width: 120px; height: 120px; display: block; background: #fff; border: 1px solid #dfe3e8; border-radius: 8px; padding: 4px; }
  .sec-qr-row .sq-url { flex: 0 0 170px; text-align: right; font-size: 17px; font-weight: 700; line-height: 1.3; overflow-wrap: anywhere; word-break: break-all; }
  .sec-qr-row .sq-url a { color: var(--accent); text-decoration: none; }
  .slido-note { font-size: 16px; line-height: 1.5; color: #6b7470; background: #F2F5F4; border-radius: 8px; padding: 9px 16px; margin-top: 10px; }
  .slido-note strong { color: var(--accent-dark); }

  /* ===== Slido 設問カード ===== */
  .polls { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
  .poll { display: flex; gap: 16px; background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 12px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .poll .pno { flex: 0 0 auto; align-self: flex-start; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 5px 12px; white-space: nowrap; }
  .poll .pbody { flex: 1; min-width: 0; }
  .poll .pq { font-size: 21px; font-weight: 700; color: var(--accent-dark); line-height: 1.4; margin-bottom: 9px; }
  .poll .ptype { font-size: 14px; font-weight: 800; color: #fff; border-radius: 999px; padding: 2px 11px; margin-left: 8px; white-space: nowrap; }
  .ptype.multi { background: #1A6BB0; } .ptype.single { background: #0F766E; } .ptype.free { background: #9a5a00; }
  .poll .popts { display: flex; flex-wrap: wrap; gap: 7px; }
  .poll .popt { font-size: 16.5px; line-height: 1.3; background: var(--accent-soft); border: 1px solid #c2e0db; border-radius: 999px; padding: 4px 13px; color: #21413c; }
  .poll .pfree { font-size: 16.5px; line-height: 1.45; color: #5a6764; }

  /* ===== 3カード ===== */
  .cards3 { display: flex; gap: 14px; margin-top: 8px; }
  .card3 { flex: 1; border-radius: 14px; padding: 14px 18px; background: #fff; border: 1.5px solid #e3e8e7; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .card3 .c3-h { font-size: 20px; font-weight: 800; margin-bottom: 7px; display: flex; align-items: center; gap: 8px; }
  .card3 .c3-h .ic { font-size: 24px; }
  .card3 .c3-b { font-size: 18px; line-height: 1.5; color: #333; }
  .card3 .c3-b strong { color: var(--accent-dark); }
  .card-risk1 .c3-h { color: #C0392B; }
  .card-risk2 .c3-h { color: #9a6314; }
  .card-risk3 .c3-h { color: #1A6BB0; }
  .card-teal { border-top: 5px solid var(--accent); } .card-teal .c3-h { color: var(--accent-dark); }

  /* ===== 2列比較 ===== */
  .cmp { display: flex; gap: 16px; margin-top: 8px; align-items: stretch; }
  .cmp-col { flex: 1; border-radius: 14px; padding: 14px 20px; background: #FBF3F1; border: 1.5px solid #f0d9d3; }
  .cmp-col.good { background: var(--accent-soft); border-color: #c2e0db; }
  .cmp-col.blue { background: #EAF2FB; border-color: #bcd4e8; }
  .cmp-col .cmp-h { font-size: 22px; font-weight: 800; color: #B23B2E; margin-bottom: 8px; }
  .cmp-col.good .cmp-h { color: var(--accent-dark); }
  .cmp-col.blue .cmp-h { color: #1A5A8A; }
  .cmp-col ul { margin: 0 0 0 1.1em; font-size: 19px; line-height: 1.5; }
  .cmp-col li { margin: 5px 0; }
  .cmp-col li b { color: var(--accent-dark); }

  /* ===== 引用ブロック・プロンプト ===== */
  .gquote { font-size: 19px; line-height: 1.5; background: #F2F7F6; border-left: 6px solid var(--accent); border-radius: 8px; padding: 11px 18px; margin: 8px 0; color: #2a2d33; }
  .gquote strong { color: var(--accent-dark); }
  .prompt { background: #EAF2FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; font-size: 18px; line-height: 1.5; }
  .prompt .lab { font-weight: 700; color: #1A6BB0; margin-right: 6px; }
  .band { background: var(--accent-soft); border-left: 8px solid var(--accent); border-radius: 6px; padding: 10px 20px; margin: 10px 0; font-size: 21px; font-weight: 700; }

  /* ===== ツール ===== */
  .tools { display: flex; gap: 14px; margin-top: 8px; }
  .tool { flex: 1; background: #fff; border: 1.5px solid #e0e7e6; border-radius: 14px; padding: 14px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .tool .t-h { font-size: 21px; font-weight: 800; color: var(--accent-dark); margin-bottom: 6px; }
  .tool .t-b { font-size: 17px; line-height: 1.5; color: #333; }
  .tool .t-b strong { color: var(--accent); }
  .tool .t-url { font-size: 15px; color: #7a8581; margin-top: 6px; word-break: break-all; }
  /* ツールカード内「できること」バッジ */
  .tool .t-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .tool .t-tags .tg { font-size: 18px; font-weight: 700; line-height: 1.3; color: #1d4a45; background: var(--accent-soft); border: 1px solid #bfdcd7; border-radius: 999px; padding: 3px 12px; white-space: nowrap; }

  /* ===== 周辺ツール（名前だけ紹介する副次的な行） ===== */
  .also { margin-top: 10px; border-top: 2px solid #dbe5e3; padding-top: 8px; }
  .also .also-h { font-size: 18px; font-weight: 800; color: #5a6764; margin-bottom: 6px; }
  .also-row { display: flex; gap: 14px; align-items: stretch; }
  .also-row .al { flex: 1; background: #F6F9F8; border-radius: 10px; padding: 8px 13px; }
  .also-row .al .al-h { font-size: 19px; font-weight: 800; color: var(--accent-dark); margin-bottom: 3px; }
  .also-row .al .al-b { font-size: 18px; line-height: 1.4; color: #3a4441; }
  .also-row .al .al-b b { color: var(--accent); }

  /* ===== 手順（番号つきステップ） ===== */
  .steps { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
  .step { display: flex; align-items: flex-start; gap: 12px; background: #fff; border: 1.5px solid #cfe0db; border-radius: 12px; padding: 8px 14px; }
  .step .sn { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; background: var(--accent); color: #fff; font-weight: 800; font-size: 16px; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
  .step .sb { flex: 1; font-size: 18.5px; line-height: 1.4; color: #2a2d33; }
  .step .sb b { color: var(--accent-dark); }
  .step .sb .chk { display: block; font-size: 16px; color: #5a6764; margin-top: 2px; }

  /* ===== 5テーマ表 ===== */
  table.grp { width: 100%; border-collapse: collapse; font-size: 18px; margin-top: 4px; }
  table.grp th { background: var(--accent); color: #fff; padding: 7px 12px; text-align: left; font-size: 17px; }
  table.grp td { border-bottom: 1px solid #e2e8e6; padding: 8px 12px; vertical-align: top; line-height: 1.4; }
  table.grp td.gno { white-space: nowrap; font-weight: 800; color: #fff; text-align: center; width: 92px; border-radius: 0; }
  table.grp tr.g1 td.gno { background: #B23B2E; }
  table.grp tr.g2 td.gno { background: #B7791F; }
  table.grp tr.g3 td.gno { background: var(--accent); }
  table.grp tr.g4 td.gno { background: #1A6BB0; }
  table.grp tr.g5 td.gno { background: #5b2d6b; }
  table.grp td b { color: var(--accent-dark); }

  /* ===== 判定表 ===== */
  table.judge { width: 100%; border-collapse: collapse; font-size: 19px; }
  table.judge th { background: var(--accent-soft); color: var(--accent-dark); padding: 6px 12px; text-align: left; }
  table.judge td { border-bottom: 1px solid #e2e8e6; padding: 7px 12px; line-height: 1.4; }
  table.judge td.m { font-weight: 800; font-size: 24px; text-align: center; width: 60px; color: var(--accent); }

  /* ===== 図 ===== */
  .figwrap { text-align: center; } .figwrap img { max-height: 400px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.12); }
  section.fig .fig-area img { max-height: 410px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.12); }
  .caption { font-size: 16px; color: #6e7378; text-align: center; margin-top: 6px; }
  .cl-sub { font-weight: 400; }

  /* ===== ワーク中に出しっぱなしにする画面 ===== */
  .bigclock { display: flex; gap: 18px; align-items: stretch; margin-top: 8px; }
  .bigclock .bc { flex: 1; border-radius: 16px; padding: 16px 20px; background: #fff; border: 2px solid var(--accent); }
  .bigclock .bc .bch { font-size: 20px; font-weight: 800; color: var(--accent-dark); margin-bottom: 8px; }
  .bigclock .bc .bcb { font-size: 19px; line-height: 1.5; color: #2a2d33; }
  .bigclock .bc .bcb b { color: var(--accent); }
  .bigclock .bc.deadline { background: #FFF6E6; border-color: #E0A93B; }
  .bigclock .bc.deadline .bch { color: #9a5a00; }
  .bigclock .bc.deadline .big { font-size: 56px; font-weight: 800; color: #B23B2E; line-height: 1.1; text-align: center; margin: 6px 0; }

  /* ===== 次回カード ===== */
  .nx { display:flex; gap:26px; align-items:stretch; margin-top:12px; }
  .nx .sess { flex:1; border-radius:14px; padding:16px 22px 18px; box-shadow:0 2px 9px rgba(0,0,0,.07); }
  .nx .sess.s2 { background:#FFF6EC; border:1.5px solid #f0d3a8; }
  .nx .sess.s3 { background:#EEF4FA; border:1.5px solid #bcd4e8; }
  .nx .sess .sh { font-size:24px; font-weight:800; margin-bottom:6px; }
  .nx .sess.s2 .sh { color:#b5651d; }
  .nx .sess.s3 .sh { color:#1A5A8A; }
  .nx .sess .sth { font-size:18px; color:#5d6359; line-height:1.45; padding-bottom:10px; margin-bottom:10px; border-bottom:1.5px dashed rgba(0,0,0,.13); }
  .nx .sess ul { font-size:20px; line-height:1.5; margin:0; padding-left:1.15em; }
  .nx .sess ul li { margin:6px 0; }
  .nx .sess ul b { color:var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="cv-kicker"><img src="./src/meikai-realestate-logo.png" alt="不動産学部">明海大学 不動産学部 FD講習会</div>
<div class="title-small">12月までに、自分の授業と業務で試してみよう！</div>
<div class="title-big">生成AI×教育ワークショップ</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">明海大学 不動産学部 FD講習会 #2　｜　浦安キャンパス</div>
<div class="title-date">2026/10/1（木）13:00–14:30（〜17:00 個別相談）</div>
<div class="title-affil">千葉大学 国際未来教育基幹 助教　田川 翔（タガワ ショウ）<br>博士（理学）・専門：高等教育論／地球惑星科学</div>
</div>
</div>

<!--
- 本日もお招きいただきありがとうございます。千葉大学の田川です。7月の第1回に続く第2回です。
- 今日は「聞く回」ではなく「作る回」です。12月3日の第3回までに、ご自身の授業か業務で実際に試せる「試作品/アイデア/計画」を1つ作って持ち帰っていただきます。
- 14時半以降も17時まで会場におります。時間内に終わらなくても、続きは個別にお手伝いします。
-->

---

<!-- _class: summary -->

<div class="page-title">準備：Slido</div>

## はじめに ─ Slido にアクセスしてください（方法は、2通り）

<style scoped>
  section .sections .sec-box:first-child { padding-top: 6px; padding-bottom: 8px; }
  section .sections .sec-qr-row { align-items: center; gap: 18px; }
  section .sections .sec-qr-row .sq-text { flex: 0 1 auto; }
  section .sections .sec-qr-row .sq-qr img { width: 116px; height: 116px; }
  section .sections .sec-qr-row .sq-url { flex: 0 0 168px; font-size: 13px; line-height: 1.4; word-break: normal; overflow-wrap: anywhere; }
  section .astep { font-size: 19px; line-height: 1.55; margin: 4px 0 0 1.15em; padding: 0; }
  section .astep li { margin: 7px 0; }
  section .astep b { color: var(--accent-dark); }
  section .slido-join { display: flex; align-items: center; gap: 16px; background: #2b577d; border-radius: 999px; padding: 10px 14px; margin: 10px auto 0; max-width: 700px; }
  section .sj-label { color: #fff; font-size: 21px; font-weight: 800; padding-left: 12px; white-space: nowrap; }
  section .sj-field { flex: 1; display: flex; align-items: center; gap: 10px; background: #fff; border: 3px solid #cfe0ef; border-radius: 999px; padding: 7px 8px 7px 18px; }
  section .sj-hash { color: #2b577d; font-weight: 800; font-size: 22px; }
  section .sj-code { flex: 1; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 23px; font-weight: 800; color: #16324a; letter-spacing: 1px; background: #FFF1A8; border-radius: 5px; padding: 1px 10px; }
  section .sj-go { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; background: #2b577d; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 21px; font-weight: 800; }
</style>

<div class="sections">

<div class="sec-box">

### ① QR・URL から

<div class="sec-qr-row">
<div class="sq-text">

- **QR**、または隣の **URL** から入れます
- **PC** からのアクセスを推奨（この後のワークもPCで）
- 質問・アンケート・意見共有に使います

</div>
<div class="sq-qr">
<img src="./src/slido-qr.png" alt="Slido QRコード（make-ai2）">
</div>
<div class="sq-url"><a href="https://app.sli.do/event/m9uL4uvGPs4WrYDqBbZc8n">app.sli.do/event/<br>m9uL4uvGPs4WrYDqBbZc8n</a></div>
</div>

</div>

<div class="sec-box">

### ② 検索＋コードで入る

<ol class="astep">

- 「<b>slido</b>」で検索 →　<b>slido.com/jp</b> を開き、下の青いバーの欄にコードを入力

</ol>

<div class="slido-join">
<div class="sj-label">イベントに 参加する？</div>
<div class="sj-field">
<span class="sj-hash">#</span>
<span class="sj-code">make-ai2</span>
<span class="sj-go">→</span>
</div>
</div>

</div>

</div>

<div class="slido-note">【データ利用のお願い】Slido・ワークへの入力情報のうち、<strong>個人情報・機微情報を除いた</strong>内容を、本研修の改善や報告に用いる可能性があります。機密情報・特定される情報・知られたくない情報は入力なさらないようご注意ください。</div>

<div class="takeaway">今回もインタラクティブに進行します</div>

<!--
- まずSlidoに入ってください。QRかURLから。この後のワークもPCで行いますので、PCが便利です。
- 入力データは個人情報を除き、研修改善に使わせていただくことがあります。機微な情報は入れないでください。
- 【制作メモ】コード make-ai2・QR（src/slido-qr.png）は確定版。
-->

---

<!-- _class: summary -->

<div class="page-title">Slido ①</div>

## 前回の振返りです

<div class="polls">

<div class="poll">
<div class="pno">1-1</div>
<div class="pbody">
<div class="pq">前回（7月2日）から今日までに、生成AIで「やってみたこと」はありますか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「シラバスの点検にGeminiを使った」「学生にポリシーを口頭で伝えた」「特に何もしていない」も、そのままで結構です。</div>
</div>
</div>

<div class="poll">
<div class="pno">1-2</div>
<div class="pbody">
<div class="pq">この3か月で、ご自身や学生のまわりで「変わったと感じること」はありますか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「学生の提出物の文体が変わった」「授業中にAIを開く学生が増えた」「自分の抵抗感が減った」など。</div>
</div>
</div>

<div class="poll">
<div class="pno">1-3</div>
<div class="pbody">
<div class="pq">今日は、どのテーマで「試作」をつくりますか？<span class="ptype single">5択</span></div>
<div class="popts">
<span class="popt">① 守る：課題をAIから守る</span>
<span class="popt">② 変える：既存の課題をAIで高度化</span>
<span class="popt">③ 創る：新しい授業課題</span>
<span class="popt">④ 個別最適：自習用のAIツール</span>
<span class="popt">⑤ 業務：便利なツール</span>
</div>
</div>
</div>

</div>

<div class="takeaway">前回の研修から、ポジティブな変化が生まれていると嬉しいです</div>

<!--
- 3問です。1-1は「前回からやってみたこと」。何もしていない、も正直に書いてください。それも大事なデータです。
- 1-2は「変わったと感じること」。学生側の変化でも、ご自身の変化でも。いくつか読み上げます。
- 1-3は今日のテーマ。分布を見て、その場で班を決めます。1つのテーマに複数の班ができても、選ばれないテーマがあっても構いません。【1-3の分布を見て班を確定】
-->

---

<!-- _class: summary -->

<div class="page-title">今日の構造</div>

## 90分・4つのパート ── 前半で思い出し、後半でつくる

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">13:10–13:19 <span class="min">（9分）</span></div>
<div class="agenda-pill pill-1">リマインド</div>
</div>
<div class="agenda-list">

- 第1回の要点だけを、3枚で
- **仕組み→リスク／安全は契約で決まる／今日使う3つの道具**

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">13:19–13:31 <span class="min">（12分）</span></div>
<div class="agenda-pill pill-2">全員ハンズオン</div>
</div>
<div class="agenda-list">

- **Gemini Notebook** に第1回・第2回の資料を入れ、質問し、**スライドを作る**
- 全員で一緒に。ここでアカウントの動作も確かめます

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">13:31–14:10 <span class="min">（39分）</span></div>
<div class="agenda-pill pill-3">グループワーク</div>
</div>
<div class="agenda-list">

- **関心のあるテーマ**を選んで班に分かれ（はじめの3分）、手順書のシナリオで**試作を1つ**つくる
- **14:10 締切**：共有用のスライド／インフォグラフィックを出して提出

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">14:10–14:30 <span class="min">（20分）</span></div>
<div class="agenda-pill pill-4">共有・まとめ</div>
</div>
<div class="agenda-list">

- 14:10 共有＝**各班2分**：つくったもの＋「12/3までに試すこと」／14:24 まとめ
- 14:30以降は17:00まで、個別相談（任意）

</div>
</div>

</div>

<div class="takeaway">今日のゴール＝12月3日までに実際に試せる「試作品/アイデア/計画」を1つ作ること</div>

<!--
- 今日の構造です。前半9分でリマインド、12分で全員ハンズオン、32分でグループワーク、最後に共有とまとめ。
- ゴールはひとつ。12月3日の第3回までに、実際に試せる試作品/アイデア/計画を1つ持ち帰ること。第3回はその結果の持ち寄りから始めます。
- 14時半で一区切りですが、私は17時まで会場にいます。続きは個別にどうぞ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">PART 1 ・ 13:10–13:19 ・ リマインド</div>

# 第1回の要点の振返り

## 仕組み → 安全 → 今日使う3つの道具

<!--
- ここから9分でリマインドです。第1回で90分かけた内容を3枚に圧縮します。文脈づくりと課題の作り替えは、巻末の参考①②に置いてあります。詳しくは第1回の資料をNotebookに入れて、この後で質問できます。
-->

---

<!-- _class: summary -->

<div class="page-title">要点①：仕組みとリスク</div>

## 生成AIは「次に来そうな言葉」を選び続ける装置
### 生成AIの仕組みの復習
<style scoped>
  section h2 { margin-bottom: 10px !important; }
  section .mech { display:flex; align-items:center; gap:12px; margin:2px 0 10px; }
  section .mech .m { flex:1; background:#fff; border:1.5px solid #dde6e4; border-radius:11px; padding:9px 14px; font-size:19px; line-height:1.3; color:#2a2d33; text-align:center; }
  section .mech .m b { color:var(--accent-dark); }
  section .mech .m.neq { flex:1.15; background:var(--accent-soft); border-color:#c2e0db; font-weight:800; color:var(--accent-dark); font-size:21px; white-space:nowrap; }
  section .mech .ar { flex:none; font-size:25px; font-weight:800; color:var(--accent); }
  section .cards3 { margin-top:0; gap:14px; }
  section .card3 { padding:11px 16px 10px; }
  section .card3 .c3-h { font-size:21px; margin-bottom:6px; }
  section .card3 .c3-b { font-size:19px; line-height:1.4; }
  section .card3 .ex { display:block; margin-top:7px; padding-top:7px; border-top:1px dashed #d9e0de; font-size:17px; color:#5a6764; line-height:1.35; }
  section .note { font-size:18px; color:#5a6764; margin-top:8px; text-align:center; }
  section .note b { color:var(--accent-dark); }
  /* 国内事例バンド */
  section .case { display:flex; gap:14px; align-items:stretch; margin-top:9px; background:#FFF6E6; border:1.5px solid #E0A93B; border-left:6px solid #E0A93B; border-radius:11px; padding:8px 16px 9px; }
  section .case .cs-l { flex:1; min-width:0; }
  section .case .cs-h { font-size:18px; font-weight:800; color:#8a5510; margin-bottom:3px; }
  section .case .cs-b { font-size:18px; line-height:1.4; color:#3a3f45; }
  section .case .cs-b b { color:#8a5510; }
  section .case .cs-r { flex:0 0 252px; border-left:1.5px dashed #e0c48b; padding-left:14px; font-size:17px; line-height:1.4; color:#5a4620; }
  section .case .cs-r b { color:#8a5510; }
</style>

<div class="mech">
<div class="m">仕組み：<b>「次の一語あて」</b>で育った<br>数字の塊</div>
<div class="ar">→</div>
<div class="m">出力：<b>いちばん「ありそうな続き」</b>を選ぶ</div>
<div class="ar">→</div>
<div class="m neq">流暢に書ける ≠ 中身が正しい</div>
</div>

### 生成AIのリスクの復習
<div class="cards3">
<div class="card3 card-risk1">
<div class="c3-h"><span class="ic">①</span>ハルシネーション</div>
<div class="c3-b">知らないことも、それらしく答える<span class="ex">例：実在しない文献を、書式まで完璧に作る</span></div>
</div>
<div class="card3 card-risk2">
<div class="c3-h"><span class="ic">②</span>バイアス</div>
<div class="c3-b">典型から外れるほど出力に現れにくい<span class="ex">例：画像でも文章でも「平均」に寄る</span></div>
</div>
<div class="card3 card-risk3">
<div class="c3-h"><span class="ic">③</span>入力＝送信</div>
<div class="c3-b">入力は、外部サーバーへの送信と同じ<span class="ex">例：一度出た情報は、取り戻せない</span></div>
</div>
</div>

<div class="case">
<div class="cs-l">
<div class="cs-h">シャドーAIは今後の問題になる？ ── 国内事例（2026年9月3日 公表）</div>
<div class="cs-b">健康支援事業の従業員が、業務のデータ集計中に <b>個人で使っている外部の生成AI</b> へ顧客データをアップロード。氏名・保険証記号番号に加え、<b>疾患情報（要配慮個人情報）</b> を含んでいた。</div>
</div>
</div>

<div class="srcline" style="margin-top:5px; font-size:14px;"><b>出典:</b> RIZAP株式会社「外部生成AIサービスへのお客様情報の誤ったアップロードに関するお詫びとお知らせ」2026/9/3（<a href="https://business.rizap.jp/news/2492">business.rizap.jp/news/2492</a>）</div>

<div class="takeaway">一発で正解を求めず、リスクを理解し、使える範囲で活用する</div>

<!--
- 要点①。生成AIは「次に来そうな言葉」を選び続ける装置。流暢さと正しさは別物です。
- そこから来るリスクが3つ。ハルシネーション、バイアス、そして入力は送信であること。いずれも性質であって、不具合ではありません。
- ③が現実に起きたのが、下の事例です。9月3日公表。健康支援事業の従業員が、業務の集計作業中に「個人で使っている」生成AIに顧客データを上げてしまった。氏名や保険証記号だけでなく、疾患情報という要配慮個人情報まで含んでいました。
- ポイントは、悪意ではなく「会社が把握していないAI利用」だということ。これをシャドーAIと呼びます。同社の再発防止策も「未許諾の生成AIは業務で使わない」でした。
- もう一点。この件は、事故のあとの説明のしかたも論点になりました。何が分かっていて、何がまだ分からないのか、対象はどの程度か、次にいつ説明するのか。使わせ方だけでなく、起きたときの知らせ方まで決めておく必要があります。
- なお、報道では委託元の発表を集計した人数が出ていますが、同社自身は人数を公表していません。数字は使わずにおきます。
- 今日のワークでも、出力は必ずご自身の専門の目で確かめてください。手順書にも判定表を入れてあります。
-->

---

<!-- _class: split -->

<div class="page-title">要点②：安全は「契約」で決まる</div>

## 「どのアカウントで使うか」を組織的に決めること活用の前提

<div class="split-body">
<div class="left">

### 入力が守られるかは、料金ではなく契約で決まる

- **大学のGoogleアカウント**は守られている 
  - Gemini は、入力が学習に使われない扱い
  - 米FERPA準拠の個人情報保護が無料版にも適用
  - Microsoftの大学版も同様
- 個人の無料アカウントは、設定によって保存・学習に使われうる

<div class="callout-orange"><strong>規程がなければ、入力不可</strong><br><span class="cl-sub">個人情報保護法：学生・教職員の個人情報<br>
機密保持：未公開の学内資料</span></div>

</div>
<div class="right">

<div class="figwrap"><img src="./src/gemini-privacy.png" alt="Gemini の設定→アクティビティ画面（データの扱いの説明）"></div>
<div class="caption">図. 〈アクティビティ〉に取扱いを記載</div>

</div>
</div>

<div class="takeaway">研修では、大学アカウントの利用を前提に進めます</div>

<!--
- 要点②。入力が守られるかは、料金ではなく契約で決まります。不動産は個人情報の塊。顧客情報、取引条件、未公開物件。これは無料の個人アカウントには入れない。
- 大学のGoogleアカウントで使うGeminiは、入力が学習に使われない扱いです。この後のハンズオンで、ご自身の画面で読んでいただきます。
- 今日は架空データと公開情報だけで進めます。手順書に架空データを印刷してあります。
-->

---

<!-- _class: summary -->

<div class="page-title">要点③：今日使う3つの道具</div>

## 大学のGoogleアカウントが持っている生成AI機能

<div class="tools">

<div class="tool">
<div class="t-h">Gemini アプリ</div>
<div class="t-b"><strong>対話型のAI</strong>。書く・点検する・解かせる。<strong>その都度webから検索して答える</strong>。手順書の「貼る文」は、ここに貼ります</div>
<div class="t-tags"><span class="tg">🖼 画像をつくる</span><span class="tg">🤝 ツールと連携</span><span class="tg">📝 Canvasで文章/スライドを編集</span><span class="tg">📄 PDF/web記事をまとめる</span></div>
<div class="t-url">gemini.google.com/app</div>
</div>

<div class="tool">
<div class="t-h">Gemini Notebook</div>
<div class="t-b"><strong>自分の資料を読ませて使う</strong>（旧 NotebookLM）。<strong>渡した資料の中だけで</strong>、出典つきで答える</div>
<div class="t-tags"><span class="tg">🔊 音声解説</span><span class="tg">📑 スライド</span><span class="tg">🧩 クイズ</span><span class="tg">🖼 インフォグラフィック</span></div>
<div class="t-url">notebook.google.com</div>
</div>

<div class="tool">
<div class="t-h">Gem（ジェム）</div>
<div class="t-b"><strong>指示を仕込んだ自分専用の Gemini</strong>。一度作れば、同じ指示を打ち直さずに使えます</div>
<div class="t-tags"><span class="tg">📌 指示を固定</span><span class="tg">📎 資料を持たせる</span><span class="tg">🔗 共有リンクで配る</span></div>
<div class="t-url">gemini.google.com/gems/create</div>
</div>

</div>

<div class="also">
<div class="also-h">上級者向けツール</div>
<div class="also-row">
<div class="al"><div class="al-h">Gemini in Workspace</div><div class="al-b">Gmail・ドキュメントの<b>サイドパネル</b>。開いている文書のまま頼める</div></div>
<div class="al"><div class="al-h">Workspace Studio</div><div class="al-b"><b>きっかけで自動で動く</b>仕組みをノーコードで作る（使える方のみ）</div></div>
<div class="al"><div class="al-h">Gemini in Classroom</div><div class="al-b">Classroom の中で<b>教材・小テスト</b>を作る（教育向けアカウント）</div></div>
</div>
</div>

<div class="takeaway">今日は、これらを使いながら、進めます</div>

<!--
- 今日使う道具は3つ。Geminiアプリ、Gemini Notebook（旧NotebookLM）、そしてGem。
- バッジに書いたのが、それぞれで「できること」です。Geminiアプリは画像も作れますし、Canvasを開けば文章を横で直せます。Notebookは渡した資料の中だけで、スライドやクイズ、音声解説まで作ります。Gemは指示を固定して、リンクで配れます。
- 下の3つは名前だけ。Gmailやドキュメントの中のサイドパネル、自動で動かすWorkspace Studio、Classroomの中のGemini。使える範囲は大学の契約によりますので、今日は深入りしません。
- 3つとも、大学のGoogleアカウントで使えます。この後のハンズオンで、Notebookを全員で触ります。
-->

---

<!-- _class: divider -->

<div class="chapter-num">PART 2 ・ 13:19–13:31 ・ 全員ハンズオン</div>

# Gemini Notebook で、<br>資料を「スライド」に変える

## 全員で一緒に：入れる → 聞く → スライドにする → 確かめる

<!--
- ここから12分、全員で同じことをします。第1回と第2回の資料をGemini Notebookに入れ、質問し、スライドを作らせ、中身を確かめる。
- PCを開いてください。手順は共通ページのStep 1〜3にも書いてあります。私の画面と同じ操作をしていきます。
-->

---

<!-- _class: split work handson -->

<div class="page-title">ハンズオン①</div>

## まず、大学アカウントで入っているかを確かめる（1分）

<div class="split-body">
<div class="left">

<div class="steps">
<div class="step"><span class="sn">1</span><span class="sb"><b>gemini.google.com/app</b> を開く<span class="chk">→ 下に横長の入力欄が見えれば正しい画面</span></span></div>
<div class="step"><span class="sn">2</span><span class="sb">右上の丸いアイコンを押して、<b>大学のメールアドレス</b>か確かめる<span class="chk">→ 個人のGmailなら、ここで切り替える</span></span></div>
<div class="step"><span class="sn">3</span><span class="sb">左下の設定 ⚙️ →〈<b>アクティビティ</b>〉を開いて、データの扱いを読む<span class="chk">→ 判断に迷ったら、その文章をコピーしてGeminiに貼って聞く</span></span></div>
</div>

<div class="callout-green">サインインできない方は、隣の方の画面を一緒に見る形で進めてください</div>

</div>
<div class="right">

<div class="figwrap"><img src="./src/gemini-privacy.png" alt="Gemini の設定→アクティビティ画面" style="max-height:360px;"></div>

</div>
</div>

<div class="takeaway">「大学アカウントで入っていれば学習されません」</div>

<!--
- ハンズオン①。1分です。Geminiを開いて、右上のアイコンが大学のアドレスか確かめる。個人のGmailなら切り替える。
- 左下の設定からアクティビティを開いて、データの扱いを読んでください。判断に迷ったら、その文章をコピーしてGeminiに貼って聞く。それも今日の練習です。
- サインインできない方は隣の方と一緒に。後で個別に対応します。
-->

---

<!-- _class: split work handson -->

<div class="page-title">ハンズオン②</div>

## 第1回・第2回の資料を入れて、出典つきで質問する（4分）

<div class="split-body">
<div class="left">

<div class="steps">
<div class="step"><span class="sn">1</span><span class="sb"><b>notebook.google.com</b> を開き、［新規作成］を押す</span></div>
<div class="step"><span class="sn">2</span><span class="sb">［ソースを追加］→ <b>第1回と第2回のPDF</b>をアップロード<span class="chk">→ 左にソースが2つ並べば正しい状態（URLでも可）</span></span></div>
<div class="step"><span class="sn">3</span><span class="sb">下の文を貼って送る</span></div>
</div>

<br>
<div class="prompt"><span class="lab">貼る文（共通ページ Step 2）</span>第1回と第2回の資料をもとに、次の3つを教えてください。出典（資料名と何ページか）も添えてください。<br>1. 学生に生成AIとどう関わってほしいか　2. 入れてはいけない情報　3. 課題を作り替える手順</div>

</div>
<div class="right">

<div class="figwrap"><img src="./src/notebooklm-ui.png" alt="Gemini Notebook の画面：左にソース、中央にチャット、右にスタジオ" style="max-height:230px;"></div>
<div class="caption">図. 左＝ソース／中央＝チャット／右＝スタジオ</div>

<div class="callout-green"><strong>Gemini アプリとの違い</strong><br><span class="cl-sub"><small>Notebook は「渡した資料の中だけ」で答え、出典を示す。資料に無いことを聞くと書かれていないと返す</small></span></div>

</div>
</div>

<div class="takeaway">出典つきで返ってきたら成功 → 与えた資料範囲で作業を出来るのがNotebookの利点</div>

<!--
- ハンズオン②。Notebookを開いて新規作成、ソースに第1回と今日のPDFを入れます。ダウンロード先は〔当日案内〕。
- 貼る文は共通ページのStep 2にもあります。3つ聞きます。関わり方、入れてはいけない情報、作り替えの手順。
- 出典つきで返ってきたら成功。試しに「来年の公示地価は？」と聞いてみてください。資料に無いので「書かれていない」と返るはずです。
-->

---

<!-- _class: split work handson -->

<div class="page-title">ハンズオン③</div>

## 右の〈スタジオ〉から、学生向けの復習スライドを作らせる（4分）

<div class="split-body">
<div class="left">

<div class="steps">
<div class="step"><span class="sn">1</span><span class="sb"><b>さきほどのノートブック</b>に［ソースを追加］で授業に関係するものを足し、右側の〈<b>スタジオ</b>〉の中の［<b>スライド</b>］にあたるボタンを押す<span class="chk">→ カスタマイズの画面が開けば正しい</span></span></div>
<div class="step"><span class="sn">2</span><span class="sb">指示の欄に、下の文を貼って送る</span></div>
<div class="step"><span class="sn">3</span><span class="sb">1〜2分待つ<span class="chk">→ 右側にスライドが並べば、できている</span></span></div>
</div>

<div class="prompt"><span class="lab">貼る文</span>不動産学部の学生に配る「この授業を学ぶ理由」という価値を説明した復習用スライドを、4枚で作ってください。1枚目はタイトル、2枚目は「この授業の価値」、3枚目は「この授業の内容」、4枚目は「なぜ生成AIに頼らず自分で学ぶ必要があるか」、文字は大きくしてください。</div>

</div>
<div class="right">

### 待っている間に

- スタジオには他にも ［インフォグラフィック］［クイズ］［音声解説］[動画解説] などが並んでいます
- **今日の提出物**は、この後のワークで話した内容を**このノートブックに追加**して、スライド（またはインフォグラフィック）**1枚**で提出頂きます。
- プロンプトを「AIが作って欲しいもの」の完成形をイメージして記載頂くことで、性能が上がります。**指示しないと、AIの平均点の構成**になります

</div>
</div>

<div class="takeaway">構成を指示する＝人に資料作成を頼むのと同じだけの指示が要る、と想定して下さい</div>

<!--
- ハンズオン③。右のスタジオからスライドを押して、貼る文を入れます。1枚目から5枚目の構成を指示しています。
- 1〜2分待ちます。その間に、スタジオの他のボタンを見てください。今日の提出物もここで作ります。
- 構成を指示しないと、AIの平均点の構成になる。人に頼むのと同じだけの指示が要ります。
- 【制作メモ】スタジオのボタン名（「スライド」）とエクスポート方法は当日までに実機で確認する。
-->

---

<!-- _class: split work handson -->

<div class="page-title">ハンズオン④</div>

## できたスライドを、自分の専門の目で判定する（3分）

<div class="split-body">
<div class="left">

### 1枚ずつ、◎○△×を付ける

<table class="judge">
<tr><td class="m">◎</td><td>そのまま学生に見せてよい</td></tr>
<tr><td class="m">○</td><td>おおむね正しいが、言葉足らず</td></tr>
<tr><td class="m">△</td><td>間違ってはいないが、この分野の作法から外れている</td></tr>
<tr><td class="m">×</td><td>誤り。学生が読んだら困る</td></tr>
</table>

<div class="callout-orange">×や△があれば、指示の欄に「<<直したいこと>>を直して、作り直してください」と入れて、もう一度作依頼してみて下さい</div>

</div>
<div class="right">

### 見るところ

- **資料に無いこと**が書かれていないか（Notebook でも、要約の過程で言い過ぎることがある）
- **省きすぎ**ていないか（いちばん大事な点が落ちていないか）
- **分野の作法**に合っているか（用語・言い回し）
- できたものは〈ダウンロード〉で保存できます

</div>
</div>

<div class="takeaway">「作って」「一歩立ち止まって考えて」「修正する」ことが重要です</div>

<!--
- ハンズオン④。できたスライドを1枚ずつ判定します。◎○△×。この判定表は各テーマの手順書にも入っています。
- 見るところは3つ。資料に無いことが書かれていないか、省きすぎていないか、不動産の作法に合っているか。
- 「作る」より「確かめる」が先生の仕事です。ここまでで全員ハンズオンは終わり。ここからグループワークです。
-->

---

<!-- _class: divider -->

<div class="chapter-num">PART 3 ・ 13:31–14:10 ・ グループワーク</div>

# 5つのテーマで、<br>「試作」を1つつくる

## 手順書のシナリオから選ぶ ── 提出は 14:10 まで

<!--
- ここからグループワークです。Slido 1-3 の結果で決めたテーマの班に分かれてください。移動は3分で。
- 手順書は紙でお配りしています。共通ページと、テーマごとの手順書です。
-->

---

<!-- _class: split work -->

<div class="page-title">ワークの進め方</div>

## 手順書のシナリオを選び、今後取り組む「試作・アイデア」を1つつくる
<style scoped>
  section .submit { display:flex; align-items:center; gap:14px; margin-top:10px; background:var(--accent-soft); border:1.5px solid #c2e0db; border-radius:12px; padding:9px 14px; }
  section .submit .sb-l { flex:1; min-width:0; }
  section .submit .sb-h { font-size:19px; font-weight:800; color:var(--accent-dark); margin-bottom:2px; }
  section .submit .sb-u { font-size:18px; line-height:1.3; font-weight:700; overflow-wrap:anywhere; }
  section .submit .sb-u a { color:var(--accent-dark); text-decoration:none; }
  section .submit .sb-qr { flex:0 0 auto; }
  section .submit .sb-qr img { width:84px; height:84px; display:block; background:#fff; border:1px solid #dfe3e8; border-radius:6px; padding:3px; }
</style>

<div class="split-body">
<div class="left">

<div class="steps">
<div class="step"><span class="sn">1</span><span class="sb"><b>選んだテーマの手順書</b>を開き、シナリオ一覧から<b>気になるものを1つ</b>選ぶ<span class="chk">→ どれから始めてもよい。全部やる必要はない</span></span></div>
<div class="step"><span class="sn">2</span><span class="sb">グループで話し合って頂きながら、試行錯誤してみる</span></div>
<div class="step"><span class="sn">3</span><span class="sb">生成AIも活用して修正し、より善いものにする</span></div>
<div class="step"><span class="sn">4</span><span class="sb">14:10 になったら、Notebook で<b>共有用のスライド／インフォグラフィック</b>を出して提出</span></div>
</div>
<div class="submit">
<div class="sb-l">
<div class="sb-h">提出先（共有用スライド）</div>
<div class="sb-u"><a href="https://docs.google.com/presentation/d/1bagZ1tpZqjxRxjVeknKsLvwjS4lamCZpr7r1m2y6mW0/edit?usp=sharing"><small>https://docs.google.com/presentation/d/1bagZ1tpZqjxRxjVeknKsLvwjS4lamCZpr7r1m2y6mW0/edit</small></a></div>
</div>
</div>

</div>
<div class="right">

### いちばん大事なルール

<div class="callout-green"><strong>困ったら、この紙をAIに貼って聞く</strong><br><span class="cl-sub">手順書の該当箇所をそのままコピーして「〔　〕のところで詰まりました。次に何をすればよいか順番に教えてください」</span></div>

<div class="band" style="font-size:20px;">相談の順番：<b>隣の人 → AI → 手を挙げる</b></div>

- 数人で1台でも、全員がそれぞれ使う形でも可

</div>
</div>

<div class="takeaway">「作りかけ」でもご提出頂けますと幸いです。</div>

<!--
- 進め方です。手順書のシナリオ一覧から1つ選ぶ。全部やる必要はありません。貼る文をコピーしてAIに貼る。出てきたものを判定して1か所直す。14:00になったら共有用のスライドを作り始め、14:10に提出。
- いちばん大事なルール。困ったら手順書をAIに貼って聞く。相談の順番は、隣の人、AI、手を挙げる。
- 完璧でなくていい。作りかけでも提出してください。
-->

---

<!-- _class: summary -->

<div class="page-title">5つのテーマ</div>

## 各テーマで試して頂く内容

<table class="grp">
<tr><th></th><th>テーマ</th><th>つくる「試作」</th><th>12/3までに試すことの例</th></tr>
<tr class="g1"><td class="gno">① 守る</td><td>既存の課題を<b>AIから守る</b>／学部の企画</td><td>シラバス用ポリシー文（MIT 4類型）／課題のAI耐性判定／疑わしい提出物への対応手順／<b>学部の基本方針の骨子案</b></td><td>方針文を次回授業で配り、学生の反応を見る</td></tr>
<tr class="g2"><td class="gno">② 変える</td><td><b>既存の授業</b>を変える</td><td>改訂した課題文（AIASの段階つき）＋ルーブリック＋「AI利用の記録」様式／<b>1コマの組み替え計画</b></td><td>改訂課題を1回出す、または組み替えた1コマをやってみる</td></tr>
<tr class="g3"><td class="gno">③ 創る</td><td><b>真正な課題</b>で授業シナリオを変える</td><td>シミュレーション型の授業シナリオ1本</td><td>1コマで試し、学生の議論の深さを見る</td></tr>
<tr class="g4"><td class="gno">④ 個別最適</td><td><b>授業内容と学び直し</b>の Notebook</td><td>自分のレジュメを入れた Notebook（クイズ・音声解説）／<b>基礎の学び直しノート</b>／答えを教えない伴走 Gem</td><td>学生に配り、使われ方と質問内容を見る</td></tr>
<tr class="g5"><td class="gno">⑤ 業務</td><td><b>Gem／Workspace Studio</b> で業務ツール</td><td>毎回の作業を「係（Gem）」に＋同僚向け手順書1枚／きっかけで動く自動化（Studio）</td><td>同僚1人に使ってもらい、直す</td></tr>
</table>

<div class="srcline">シナリオは各テーマ5〜6本用意しました。一つでもOKです。</div>

<div class="takeaway">それでは、関心のあるテーマに分かれてみて下さい。</div>

<!--
- 5つのテーマです。それぞれの試作と、12月3日までに試すことの例。人数によって、1つのテーマに複数の班ができても、選ばれないテーマがあっても構いません。
- ①守る、はポリシー文と対応手順。②変える、は改訂課題とルーブリック。③創る、は不動産の真正な課題と相手役AI。④個別最適、は自分のレジュメを入れたNotebookと伴走Gem。⑤業務、は係Gemと手順書。
- 全部やる必要はありません。1本で試作ができます。
-->

---

<!-- _class: split work -->

<div class="page-title">共有用の1枚のつくり方</div>

## ワークの成果をNotebook で「発表用の1枚」にして下さい

<style scoped>
  section h2 { margin-bottom: 6px !important; }
  section .split-body { gap: 26px; padding-top: 18px !important; padding-bottom: 14px !important; }
  section .steps { gap: 6px; }
  section .step { padding: 4px 12px; }
  section .step .sb { font-size: 18px; line-height: 1.35; }
  section .wf-h { font-size: 18px; font-weight: 800; color: var(--accent-dark); margin: 7px 0 4px; }
  section .wf { display:block; width:100%; }
  section .prompt { font-size: 18px; line-height: 1.38; padding: 9px 15px 10px; }
  section .prompt .lab { display: block; margin-bottom: 3px; }
  section .prompt .ph { color: #1A6BB0; font-weight: 700; }
  section .prompt .pos { color: var(--accent-dark); font-weight: 800; }
</style>

<div class="split-body">
<div class="left">

<div class="steps">
<div class="step"><span class="sn">1</span><span class="sb">ハンズオンのノートブックに［<b>ソースを追加</b>］→〈コピーしたテキスト〉で、グループでつくった文章を貼る</span></div>
<div class="step"><span class="sn">2</span><span class="sb">〈<b>スタジオ</b>〉→［<b>インフォグラフィック</b>］（1枚の図）か［<b>スライド</b>］（数枚）を押す</span></div>
<div class="step"><span class="sn">3</span><span class="sb">指示の欄に<b>右の文</b>を貼り、<b>（　）を埋めて</b>送る（1〜2分）。良いものが出るまで指示を直して何回か</span></div>
<div class="step"><span class="sn">4</span><span class="sb"><b>◎○△×</b>で確かめて直す →〈<b>ダウンロード</b>〉で保存 → 提出先の Google スライドに貼る（無ければスクリーンショット）</span></div>
</div>

<div class="wf-h">できあがりの配置（貼る文が指定している場所）</div>
<svg class="wf" viewBox="0 0 540 134"><rect x="0.75" y="0.75" width="538.5" height="132.5" rx="7" fill="#fff" stroke="#8f9a97" stroke-width="1.5"/><rect x="7" y="6" width="124" height="28" rx="5" fill="#E3F1EF" stroke="#c2e0db"/><text x="69" y="20" dy="0.36em" text-anchor="middle" font-size="18" font-weight="700" fill="#004D45">グループ名</text><rect x="137" y="6" width="396" height="28" rx="5" fill="#F2F4F5" stroke="#dfe3e5"/><text x="335" y="20" dy="0.36em" text-anchor="middle" font-size="18" font-weight="700" fill="#004D45">取り組んだお題</text><rect x="7" y="40" width="260" height="42" rx="5" fill="#F2F4F5" stroke="#dfe3e5"/><text x="137" y="61" dy="0.36em" text-anchor="middle" font-size="18" font-weight="700" fill="#004D45">課題感・やってみたこと</text><rect x="7" y="87" width="260" height="41" rx="5" fill="#F2F4F5" stroke="#dfe3e5"/><text x="137" y="108" dy="0.36em" text-anchor="middle" font-size="18" font-weight="700" fill="#004D45">結果・使えると思ったか</text><rect x="273" y="40" width="260" height="42" rx="5" fill="#F2F4F5" stroke="#dfe3e5"/><text x="403" y="61" dy="0.36em" text-anchor="middle" font-size="18" font-weight="700" fill="#004D45">AIの出力（スクショ可）</text><rect x="273" y="87" width="260" height="41" rx="5" fill="#00736B"/><text x="403" y="108" dy="0.36em" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">12/3までに試すこと</text></svg>

</div>
<div class="right">

<div class="prompt"><span class="lab">貼る文（全文は手順書 共通ページ Step 5）</span>明海大学 不動産学部 FD講習会で、生成AIを試すワークを行いました。その結果を、同僚の先生方に共有したいです。<br>私たちのグループは<span class="ph">（　　）</span>です。<span class="pos">左上</span>に出してください。<br>取り組んだお題は<span class="ph">（　　）</span>です。<span class="pos">上部中央</span>に出してください。<br><span class="pos">左側の上</span>に、課題感とやってみたことを並べてください。<span class="ph">（やってみたこと：箇条書きで3つ）</span><br><span class="pos">左側の下</span>に、うまくいったかどうかの結果と、実際に使えると思ったかを書いてください。<span class="ph">（結果・感想：箇条書き）</span><br><span class="pos">右上</span>に、AIが出力した内容を出してください。適宜、スクリーンショットを活用してください。<br><span class="pos">右下</span>に、「12月3日までに試すこと」を1行で大きく出してください。<span class="ph">（誰が・どの科目や業務で・何をするか）</span></div>

</div>
</div>

<div class="takeaway">右側のプロンプトを用いて、箇条書きで渡すことで、きれいな資料になります</div>

<!--
- 共有用の1枚のつくり方。手順書の共通ページ Step 5 と同じです。ハンズオンで作ったノートブックに、グループでつくった文章をソースとして足し、スタジオからインフォグラフィックかスライドを出します。
- 貼る文は、配置まで指定しています。左上にグループ名、上部中央にお題、左に課題感・やったこと・結果、右上にAIの出力、右下に「12/3までに試すこと」。左の図が、できあがりのイメージです。
- 一発では出ません。指示を直して何回か作ってください。出てきたものは◎○△×で確かめて、ダウンロードして提出先のGoogleスライドへ。ボタンが見当たらなければスクリーンショットで構いません。
- 【制作メモ】〈ダウンロード〉／〈エクスポート〉のボタン名は当日までに実機で確認（進行表の準備項目）。
-->

---

<!-- _class: split -->

<div class="page-title">提出するもの</div>

## 提出は**スライド1枚** ── 試作はリンクで共有。14:10 締切

<style scoped>
  section .lk { background:var(--accent-soft); border:1.5px solid #c2e0db; border-radius:11px; padding:9px 14px; margin-top:10px; }
  section .lk .lk-h { font-size:19px; font-weight:800; color:var(--accent-dark); margin-bottom:2px; }
  section .lk .lk-u { font-size:18px; font-weight:700; line-height:1.3; overflow-wrap:anywhere; }
  section .lk .lk-u a { color:var(--accent-dark); text-decoration:none; }
  section .split-body .left h3 { margin: 10px 0 4px; }
  section .split-body .left ul { margin: 2px 0 0; padding-left: 1.25em; }
  section .split-body .left ul ul { padding-left: 1.4em; margin: 3px 0 4px; }
  section .split-body .left li { font-size: 21px; line-height: 1.45; margin: 5px 0; }
  section .split-body .left li li { font-size: 19px; margin: 3px 0; }
</style>

<div class="split-body">
<div class="left">

### ① 提出物：スライド／インフォグラフィック **1枚**

- Notebook の〈スタジオ〉で作る（前のスライド参照）
- **「12/3までに試すこと」を必ず入れる**

### ② 試作へのリンク（任意）

- 試せる形になったものは、**スライドの下部にリンクを貼って**学内に共有
  - **Gem**：一覧で［共有］→「組織内」「閲覧者」→［リンクをコピー］
  - **Notebook**：［共有］→［リンクをコピー］／**文章**：Google ドキュメントの共有リンク
- 共有リンクが出せなければ、**Driveフォルダ**にファイルを置く

</div>
<div class="right">

### 提出先

<div class="lk">
<div class="lk-h">▶ 提出（必須）：共有用のスライド</div>
<div class="lk-u"><a href="https://docs.google.com/presentation/d/1bagZ1tpZqjxRxjVeknKsLvwjS4lamCZpr7r1m2y6mW0/edit?usp=sharing">docs.google.com/presentation/d/1bagZ1tpZqjxRxjVeknKsLvwjS4lamCZpr7r1m2y6mW0/edit</a></div>
</div>

<div class="lk">
<div class="lk-h">▶ ファイル置き場（任意）：Drive フォルダ</div>
<div class="lk-u"><a href="https://drive.google.com/drive/folders/1whY8DF5977zJoFkQZ9HnQi7_-7BvpshY?usp=sharing">drive.google.com/drive/folders/1whY8DF5977zJoFkQZ9HnQi7_-7BvpshY</a></div>
</div>

</div>
</div>

<div class="takeaway">「何を見るか」だけは具体的に ── 12月3日は、ここから始めます</div>

<!--
- 提出はスライド1枚です。共有用のスライドかインフォグラフィック。14:10締切。
- 試作そのものは任意です。共有できる形になっていれば、スライドの下部にリンクを貼って学内に共有してください。リンクが出せないものは、Driveフォルダにファイルを置いてください。
- 「12/3までに試すこと」の「何を見るか」だけは具体的に。12月3日はここから始めます。
-->

---

<!-- _class: summary -->

<div class="page-title">ワーク中</div>

## グループワーク中

<div class="bigclock">
<div class="bc deadline">
<div class="bch">提出の締切</div>
<div class="big">14:10</div>
<div class="bcb">残り <b>15分</b>・<b>5分</b> で声をかけます。14:00 から共有用のスライドを作り始めてください</div>
</div>
<div class="bc">
<div class="bch">困ったら</div>
<div class="bcb"><b>①近くの先生</b> → <b>②手順書をAIに貼って聞く</b> → <b>③手を挙げる</b><br><br>貼る文：「いまこの手順に取り組んでいます。〔手順書の該当箇所〕〔　〕のところで詰まりました。次に何をすればよいか順番に教えてください。」</div>
</div>
<div class="bc">
<div class="bch">提出先</div>
<div class="bcb">▶ 提出（必須）：共有用のスライド<br><a href="https://docs.google.com/presentation/d/1bagZ1tpZqjxRxjVeknKsLvwjS4lamCZpr7r1m2y6mW0/edit?usp=sharing">Googleスライド</a><br><br>▶ ファイル置き場（任意）<br><a href="https://drive.google.com/drive/folders/1whY8DF5977zJoFkQZ9HnQi7_-7BvpshY?usp=sharing">Drive フォルダ</a></div>
</div>
</div>
<div class="takeaway">続きは14:30以降、個別にお手伝いします</div>

<!--
- ワーク中はこの画面を出しておきます。締切14:10。残り15分と5分で声をかけます。
- 机間巡視で見るところ：大学アカウントで入っているか、貼る文の〔　〕を埋めているか、出力を判定しているか。
- 押したら、共有を3班に減らす。
-->

---

<!-- _class: summary -->

<div class="page-title">共有</div>

## 提出スライドを映しながら、2点教えてください (各班2分)

<style scoped>
  section h2 { margin-bottom: 14px !important; }
  /* 中継風の Slido コメント帯 */
  section .live { display:flex; gap:18px; align-items:stretch; margin-top:16px; background:#22303a; border-radius:14px; padding:13px 18px 12px; color:#fff; }
  section .live .lv-l { flex:0 0 400px; min-width:0; }
  section .live .lv-badge { display:inline-flex; align-items:center; gap:7px; background:#D93025; color:#fff; font-weight:800; font-size:18px; letter-spacing:.08em; padding:2px 11px; border-radius:6px; }
  section .live .lv-badge::before { content:""; width:9px; height:9px; border-radius:50%; background:#fff; }
  section .live .lv-h { font-size:21px; font-weight:800; margin:7px 0 4px; }
  section .live .lv-b { font-size:18px; line-height:1.4; color:#d7e0e6; }
  section .live .lv-code { font-size:18px; margin-top:7px; color:#d7e0e6; }
  section .live .lv-code b { color:#FFD166; font-size:20px; }
  section .live .lv-stream { flex:1; min-width:0; display:flex; flex-direction:column; justify-content:flex-end; gap:6px; padding-left:16px; border-left:1px solid rgba(255,255,255,.18); }
  section .live .lv-lab { font-size:18px; color:#9fb0bb; margin-bottom:2px; }
  section .live .msg { align-self:flex-start; max-width:94%; background:rgba(255,255,255,.12); border-radius:999px; padding:4px 14px; font-size:18px; line-height:1.35; color:#fff; }
  section .live .msg.o1 { opacity:.45; }
  section .live .msg.o2 { opacity:.7; }
  section .live .lv-qr { flex:0 0 auto; align-self:center; text-align:center; }
  section .live .lv-qr img { width:112px; height:112px; display:block; background:#fff; border-radius:8px; padding:4px; }
  section .live .lv-qr div { font-size:18px; color:#d7e0e6; margin-top:4px; }
</style>

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">1. 何をつくったか</div>

- 選んだシナリオと、できた**試作**（画面で見せる）
- AIの出力で、**◎だったところ／×だったところ**を1つずつ
- うまくいかなかったことも、そのまま

</div>
<div class="cmp-col blue">
<div class="cmp-h">2. 12月3日までに、何を試すか</div>

- **誰が・どの科目や業務で・何を**
- **何を見るか**（試したあとに確かめたいこと）
- 12月3日は、この結果の持ち寄りから始めます

</div>
</div>

<div class="live">
<div class="lv-l">
<div class="lv-badge">LIVE</div>
<div class="lv-h">聞いている方は、Slido に一言</div>
<div class="lv-b">感想・質問・「自分でも試したい」を、発表ごとに投稿してください。画面に流します。発表者は気にせず続けてください</div>
<div class="lv-code">app.sli.do ／ コード <b>make-ai2</b> ／ 設問 2-1</div>
</div>
<div class="lv-stream">
<div class="lv-lab">投稿例（本番は Slido の回答がここに流れます）</div>
<div class="msg o1">👍 うちの科目でも、そのまま使えそう</div>
<div class="msg o2">❓ 学生に配るときの権限設定は、どうしましたか</div>
<div class="msg">💡 同僚向けの手順書1枚は、真似したい</div>
<div class="msg">🙋 12月3日に、この結果を聞きたい</div>
</div>
<div class="lv-qr"><img src="./src/slido-qr.png" alt="Slido QR（make-ai2）"><div>QRでも</div></div>
</div>

<!--
- 共有です。各班2分。提出されたスライドを映しながら、2つだけ。何をつくったか、12月3日までに何を試すか。
- うまくいかなかったことも、そのまま話してください。それも12月の材料です。
- 下の帯。聞いている方は、発表ごとに Slido の設問 3-1 に一言。感想でも質問でも「自分でも試したい」でも。中継のコメント欄のように画面に流します。発表者は気にしなくて大丈夫です。
- 全グループが終わったら、流れたコメントから2〜3件拾って、そのグループに一言返してもらう（時間があれば）。
- 押したら3グループに絞る。コメント拾いは省略。
-->

---

<!-- _class: divider -->

<div class="chapter-num">PART 4 ・ 14:24–14:30 ・ まとめ</div>

# 12月3日までの流れ

## 試作を、現場で動かしてみる

<!--
- まとめです。今日の試作を、作って終わりにしない。12月3日までに現場で1回動かす。
-->

---
<!-- _class: split -->

<div class="page-title">次回のご案内</div>

## 第3回（12月3日）── 試した結果を持ち寄って頂けますと幸いです

<div class="nx">

<div class="sess s2">
<div class="sh">第2回｜つくった（今日）</div>
<div class="sth">5つのテーマで試作をつくり、「12/3までに試すこと」を決めた</div>

- **守る／変える／創る／個別最適／業務** の試作
- 提出：共有用スライド1枚（試作のリンクつき）
- 14:30〜17:00 個別相談

</div>

<div class="sess s3">
<div class="sh">第3回｜続ける（12/3 13:00–14:30）</div>
<div class="sth">第2回の試作を実際に試した結果を共有し、来年度につなげる</div>

- **持ち寄り**：1人3分「試したこと・学生の反応・直したこと」
- **学部としての形**：学生向けAI利用ガイド／シラバスの方針欄 の案を検討
- 試作を**同僚に配れる形**に仕上げる

</div>

</div>

<div class="takeaway">第3回は個人 or グループで、ハンズオンでの情報共有頂けると嬉しいです</div>

<!--
- 第3回は12月3日、同じ時間。今日の試作を試した結果を持ち寄るところから始めます。1人3分。
- 学部としての形も検討します。学生向けのAI利用ガイド、シラバスの方針欄。今日の①守るテーマの成果が土台になります。
- 1回でよいので、現場で動かしてください。
-->

---

<!-- _class: summary -->

<div class="page-title">Slido ②</div>

## 締めくくりに、3つ Slido でうかがわせて下さい

<div class="polls">

<div class="poll">
<div class="pno">3-1</div>
<div class="pbody">
<div class="pq">今日つくった試作を、12月3日までに「試せそう」ですか？<span class="ptype single">4択</span></div>
<div class="popts">
<span class="popt">① このまま試せる</span>
<span class="popt">② 少し直せば試せる</span>
<span class="popt">③ 個別相談してから決めたい</span>
<span class="popt">④ 今回は難しい</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">3-2</div>
<div class="pbody">
<div class="pq">生成AIは、大学教育にどちらの影響を及ぼすと感じますか？<span class="ptype single">3択</span></div>
<div class="popts">
<span class="popt">① 良い影響のほうが大きい</span>
<span class="popt">② 悪い影響のほうが大きい</span>
<span class="popt">③ どちらとも言えない・場合による</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">3-3</div>
<div class="pbody">
<div class="pq">今日の気づきを、一言で教えてください<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「Gemは思ったより簡単だった」「出力を確かめる時間のほうが長かった」「学生に配るには共有設定の確認が要る」など。</div>
</div>
</div>

</div>

<div class="takeaway">2-2 は、第1回の結果と並べて映します。2-3 はいくつか読み上げます</div>

<!--
- 最後の3問。2-1は試せそうか。③を選んだ方は、この後の個別相談にどうぞ。
- 2-2は第1回と同じ質問。7月の結果と並べて映します。
- 2-3は今日の気づきを一言。いくつか読み上げます。
-->

---

<!-- _class: message -->

# 一緒に楽しみましょう
## 上手くいかなかった、も全く問題ないです！

<!--
- 今日いちばん持ち帰っていただきたいこと。作れたかどうかより、試したかどうか。
- うまくいかなかった話が、12月にはいちばんの教材になります。
-->

---
<!-- _class: summary -->

<div class="page-title">参考①：生成AIとの文脈をつくる</div>

## テーマ1) 禁止でも放置でもなく ── 「守り」と「攻め」の両輪で文脈をつくる

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">守り ── 学びを損なわない</div>

- <b>ポリシー</b>：「ルール」と「その理由」を決めて、学生に伝える
- <b>価値を伝える</b>：なぜそれを学ぶ必要があるか学生が理解する
- <b>不正の対応</b>：疑わしい提出物は、断定せずに手順で確かめる（検出ツールを根拠にしない）
- <b>課題の見直し</b>：課題そのものを、AIがある前提に作り替える
- <b>研究のルール</b>：投稿先・学会の方針を前提にする

</div>
<div class="cmp-col blue">
<div class="cmp-h">攻め ── 教育をもっと面白く</div>

- <b>自ら学ぶ支援</b>：手持ちの資料を「質問できる教材」に変える
- <b>到達点を変える</b>：学生が自分で学ぶ力を課題に組み込み、AIで下支えする
- <b>真正な課題</b>：現実の、答えが1つに決まらない問題を中心に据えたとしても、生成AIの伴走で学生が到達出来る
- <b>2シグマ問題</b>：個別指導の効果を、AIが高められるかもしれません

</div>
</div>

<div class="takeaway">今日のグループワークは、これらの内容に基づいています</div>

<!--
- 参考①。禁止か放置かの二択ではなく、文脈をつくる。守りが5つ、攻めが4つ。
- 守りは、ポリシー、価値を伝える、不正の対応、課題の見直し、研究のルール。攻めは、自ら学ぶ支援、到達点を変える、真正な課題、2シグマ問題。
- 今日の5つのテーマは、これをそのまま作業に落としたものです。①守る、②変える、③創る、④個別最適、⑤業務。
-->

---

<!-- _class: split -->

<div class="page-title"> 参考②：課題の作り替え</div>

## テーマ2) まずAIに課題を解かせる ── そこから、AIの使い方の「段階」を決める

<div class="split-body">
<div class="left">

<div class="figwrap"><img src="./src/fig70-mit-flow.png" alt="MIT式 AIの課題改善フロー：既存課題をAIに入力→回答を分析・評価→AIとの対話で深掘り→課題を見直す" style="max-height:330px;"></div>
<div class="caption">図. MIT式の課題改善フロー（第1回スライドより）</div>

</div>
<div class="right">

### AIの利用をどこまで認めるか：5段階（AIAS）

<table class="judge">
<tr><td class="m">1</td><td><b>AIは使用できない</b>（NO AI）</td></tr>
<tr><td class="m">2</td><td><b>AIで構想・計画する</b>（AI PLANNING）</td></tr>
<tr><td class="m">3</td><td><b>AIとコラボする</b>（AI COLLABORATION）</td></tr>
<tr><td class="m">4</td><td><b>AIを全面活用する</b>（FULL AI）</td></tr>
<tr><td class="m">5</td><td><b>AIを応用する</b>（AI EXPLORATION）</td></tr>
</table>

<div class="srcline"><b>出典:</b> Perkins, Furze, Roe &amp; MacVaugh (2024)、大阪大学 TLSC 訳／MIT Teaching + Learning Lab</div>

</div>
</div>

<div class="takeaway">課題や評価に、生成AIは影響を与える</div>

<!--
- 参考②。課題の作り替えは、まず今の課題をAIに解かせるところから。解けてしまうなら作り替えのサイン。
- そのうえで、AIの利用をどこまで認めるかを5段階で決めて、課題文に書く。1は使わない、2は構想だけ、3は直しながら使う、4は全面活用、5はAI自体を題材にする。
- テーマ①②の手順書には、この5段階と、阪大の「4つの型」を印刷してあります。
-->

---

<!-- _class: summary -->

<div class="page-title">参考③：授業をもっと面白く</div>

## テーマ3) AIの使い方で、「評価・創造」に届くかが変わる

<style scoped>
  section h2 { margin-bottom: 4px !important; }
  section .src2 { font-size:16px; color:#7a8581; margin-top:9px; line-height:1.45; }
  section .src2 b { color:#5a6764; }
</style>

<svg viewBox="0 0 1168 416" width="100%" style="display:block;margin:8px auto 0;">
<defs>
<marker id="s10a" markerWidth="10" markerHeight="10" refX="7.5" refY="3.4" orient="auto"><path d="M0,0 L7.5,3.4 L0,6.8 z" fill="#00736B"/></marker>
<marker id="s10r" markerWidth="10" markerHeight="10" refX="7.5" refY="3.4" orient="auto"><path d="M0,0 L7.5,3.4 L0,6.8 z" fill="#B23B2E"/></marker>
<marker id="s10g" markerWidth="10" markerHeight="10" refX="7.5" refY="3.4" orient="auto"><path d="M0,0 L7.5,3.4 L0,6.8 z" fill="#9aa5a2"/></marker>
</defs>
<!-- 左の時間軸ラベル -->
<rect x="0" y="16" width="34" height="146" rx="8" fill="#98A2A0"/>
<text transform="translate(17,89) rotate(-90)" text-anchor="middle" dy="0.36em" font-size="18" font-weight="800" letter-spacing="0.04em" fill="#ffffff">学びの構造</text>
<rect x="0" y="170" width="34" height="86" rx="8" fill="#B23B2E"/>
<text transform="translate(17,213) rotate(-90)" text-anchor="middle" dy="0.36em" font-size="18" font-weight="800" letter-spacing="0.04em" fill="#ffffff">これまで</text>
<rect x="0" y="276" width="34" height="136" rx="8" fill="#004D45"/>
<text transform="translate(17,344) rotate(-90)" text-anchor="middle" dy="0.36em" font-size="18" font-weight="800" letter-spacing="0.04em" fill="#ffffff">AI時代</text>
<g transform="translate(46,0)">
<rect x="0" y="16" width="396" height="146" rx="13" fill="#F2F4F5" stroke="#dfe3e5" stroke-width="1.5"/>
<text x="16" y="45" font-size="18" font-weight="800" fill="#6b7280">AIに聞けば、一瞬で出せる</text>
<rect x="12" y="60" width="87" height="50" rx="9" fill="#fff" stroke="#e3e6e8"/><text x="55" y="94" font-size="22" font-weight="700" fill="#6b7280" text-anchor="middle">記憶</text>
<rect x="107" y="60" width="87" height="50" rx="9" fill="#fff" stroke="#e3e6e8"/><text x="150" y="94" font-size="22" font-weight="700" fill="#6b7280" text-anchor="middle">理解</text>
<rect x="202" y="60" width="87" height="50" rx="9" fill="#fff" stroke="#e3e6e8"/><text x="245" y="94" font-size="22" font-weight="700" fill="#6b7280" text-anchor="middle">応用</text>
<rect x="297" y="60" width="87" height="50" rx="9" fill="#fff" stroke="#e3e6e8"/><text x="340" y="94" font-size="22" font-weight="700" fill="#6b7280" text-anchor="middle">分析</text>
<text x="16" y="145" font-size="18" fill="#5a6068">それでも、学生自身が<tspan font-weight="800" fill="#3f4550">ここを通る</tspan>必要がある</text>
<line x1="410" y1="76" x2="546" y2="76" stroke="#00736B" stroke-width="3.5" marker-end="url(#s10a)"/>
<text x="478" y="115" font-size="18" font-weight="800" fill="#004D45" text-anchor="middle">積み上げないと</text>
<text x="478" y="140" font-size="18" font-weight="800" fill="#004D45" text-anchor="middle">右には届かない</text>
<rect x="562" y="16" width="560" height="146" rx="13" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
<text x="580" y="45" font-size="18" font-weight="800" fill="#004D45">人にしか行けない ＝ 大学が残す価値</text>
<rect x="578" y="60" width="168" height="50" rx="9" fill="#00736B"/><text x="662" y="95" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">評価</text>
<rect x="762" y="60" width="168" height="50" rx="9" fill="#00736B"/><text x="846" y="95" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">創造</text>
<text x="580" y="145" font-size="18" fill="#2a2d33">例：物件を比べて<tspan font-weight="800" fill="#004D45">良否を判断する</tspan>／<tspan font-weight="800" fill="#004D45">新しい活用を提案する</tspan></text>
<line x1="198" y1="162" x2="198" y2="192" stroke="#9aa5a2" stroke-width="2.5" marker-end="url(#s10g)"/>
<line x1="842" y1="162" x2="842" y2="192" stroke="#9aa5a2" stroke-width="2.5" marker-end="url(#s10g)"/>
<rect x="0" y="198" width="396" height="58" rx="10" fill="#FBF3F1" stroke="#f0d9d3" stroke-width="1.5"/>
<text x="198" y="234" font-size="19" fill="#7a3b31" text-anchor="middle">授業時間の多くを、ここに使ってきた</text>
<text x="478" y="220" font-size="18" font-weight="800" fill="#B23B2E" text-anchor="middle">これまでの</text>
<text x="478" y="244" font-size="18" font-weight="800" fill="#B23B2E" text-anchor="middle">課題感</text>
<rect x="562" y="198" width="560" height="58" rx="10" fill="#FBF3F1" stroke="#f0d9d3" stroke-width="1.5"/>
<text x="842" y="234" font-size="19" fill="#7a3b31" text-anchor="middle">ここまで到達させる時間がとれなかった</text>
<rect x="0" y="276" width="1122" height="62" rx="11" fill="#FBF3F1" stroke="#f0d9d3" stroke-width="1.5"/>
<text x="18" y="314" font-size="21" font-weight="800" fill="#B23B2E">✗ 左をAIに肩代わりさせる（丸投げ）</text>
<line x1="392" y1="306" x2="438" y2="306" stroke="#B23B2E" stroke-width="2.5" marker-end="url(#s10r)"/>
<text x="452" y="314" font-size="21" fill="#3a3f45">左が積み上がらない</text>
<line x1="686" y1="306" x2="732" y2="306" stroke="#B23B2E" stroke-width="2.5" marker-end="url(#s10r)"/>
<text x="746" y="314" font-size="21" fill="#3a3f45">右にも行けないまま卒業する</text>
<rect x="0" y="350" width="1122" height="62" rx="11" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
<text x="18" y="388" font-size="21" font-weight="800" fill="#004D45">✓ 左をAIに下支えさせる<tspan font-size="16" fill="#00736B">（テーマ④）</tspan></text>
<line x1="392" y1="380" x2="438" y2="380" stroke="#00736B" stroke-width="2.5" marker-end="url(#s10a)"/>
<text x="452" y="388" font-size="21" fill="#2a2d33">左が固まり、時間が浮く</text>
<line x1="686" y1="380" x2="732" y2="380" stroke="#00736B" stroke-width="2.5" marker-end="url(#s10a)"/>
<text x="746" y="388" font-size="21" fill="#2a2d33">その時間を<tspan font-weight="800" fill="#004D45">真正な課題</tspan>へ<tspan font-size="16" fill="#00736B">（テーマ③）</tspan></text>
</g>
</svg>

<div class="src2"><b>出典:</b> ブルームの学習目標分類（Anderson &amp; Krathwohl, 2001 改訂版）／「下支え」の根拠 ── 1対1の個別指導は一斉授業より平均で<b>2標準偏差</b>高い到達（2シグマ問題。Bloom, 1984）</div>

<div class="takeaway">肩代わりさせると届かない。下支えさせると、はじめて届く</div>

<!--
- 参考③。今日いちばん構造の話をします。左の記憶・理解・応用・分析は、AIに聞けば一瞬で出ます。右の評価・創造は、人にしか行けない。ここが大学が残す価値です。
- ところが、この2つは切り離せません。真ん中の矢印。学生自身が左を積み上げないと、右には届かないんです。ここが厄介なところで。
- そして、これまでの制約が下の赤い帯です。授業時間の多くを左に使ってきた。だから右まで到達させる時間がとれなかった。評価・創造が大事だと分かっていても、届かせられなかったわけです。
- そこで、生成AIの使い方で結果が分かれます。上の×。左をAIに肩代わりさせる、つまり丸投げすると、左が積み上がらないので、右にも行けないまま卒業してしまう。
- 下の○。左をAIに下支えさせる。学び直しや伴走です。すると左が速く固まって、時間が浮く。その時間を真正な課題に回せる。これで、はじめて右に届きます。
- 下支えの根拠が2シグマ問題です。1対1の個別指導は一斉授業より2標準偏差高い到達になる。1984年のブルームの報告。
- そして、この下の行がそのまま今日のテーマです。下支えがテーマ④、真正な課題がテーマ③。
-->

---

<!-- _class: summary -->

<div class="page-title">参考④：個別最適な学び</div>

## テーマ4) 自分の資料や高校の教材を「いつでも質問できる教材」にする

<style scoped>
  section h2 { margin-bottom: 6px !important; }
  /* 上段：タグ付き3ボックスのフロー（ALC 15-min の recipe-flow を踏襲） */
  section .rflow { display:flex; align-items:stretch; gap:10px; margin:0 0 10px; }
  section .rflow .arrow { align-self:center; font-size:30px; font-weight:800; color:#C8611C; }
  section .rf { flex:1; border-radius:12px; padding:9px 16px 10px; border:2px solid #ccc; background:#fff; }
  section .rf .tag { font-size:18px; font-weight:700; display:inline-block; padding:1px 12px; border-radius:11px; color:#fff; margin-bottom:5px; }
  section .rf .body { font-size:20px; line-height:1.35; color:#2a2d33; }
  section .rf .body b { display:block; font-size:21px; color:#1f2a33; }
  section .rf.t1 { border-color:#1A6BB0; background:#EAF2FB; } section .rf.t1 .tag { background:#1A6BB0; }
  section .rf.t2 { border-color:#C8611C; background:#FBEEE6; } section .rf.t2 .tag { background:#C8611C; }
  section .rf.t3 { border-color:#0F766E; background:#E7F3F0; } section .rf.t3 .tag { background:#0F766E; }
  /* 下段：全幅の角丸セクション（academic の summary 型を詰めた feat3 相当） */
  section .sections { gap: 8px; }
  section .sec-box { padding: 8px 22px 9px; }
  section .sec-box h3 { margin-bottom: 3px; }
  section .sec-box ul li b { color: var(--accent-dark); }
</style>

<div class="rflow">
<div class="rf t1"><span class="tag">コンテキスト</span><div class="body"><b>自分の講義資料を入れる</b>レジュメ・配布資料・スライド<br>（自作のものだけ）</div></div>
<div class="arrow">→</div>
<div class="rf t2"><span class="tag">質問</span><div class="body"><b>Gemini Notebook が答える</b>渡した資料の中だけで、出典つきで</div></div>
<div class="arrow">→</div>
<div class="rf t3"><span class="tag">変換</span><div class="body"><b>学びやすい形にする</b>スライド・クイズ・音声解説 など</div></div>
</div>

<div class="sections">
<div class="sec-box">

### ① 質問できる教材にする（シナリオ1・2）

- 自分の資料を入れたノートブックを、**学生がいつでも質問できる教材**にする
- スタジオで復習用スライド・クイズ・音声解説を作り、**◎○△×で判定**してから配る

</div>
<div class="sec-box">

### ② 答えを教えない伴走者 Gem（シナリオ3・4）

- 答えを直接書かず、**問いを返す**プロンプトを入れる。ヒントは段階的に、1回の返答は5文以内

</div>
<div class="sec-box">

### ③ 学び直し（基礎）のノートブック（シナリオ5）

- 教員の言葉で「基礎のまとめ」を作り、ソースに入れて**クイズで確かめる**（著作物を利用されないようにご注意下さい）

</div>
</div>

<div class="takeaway">資料を読まずに済む道具ではなく、学びの「続けにくさ」を下支えする道具</div>

<!--
- 参考。テーマ4のまとめです。上の流れが仕組み。自分の講義資料をコンテキストとして入れ、Notebook が資料の中だけで出典つきで答え、スライドやクイズ、音声解説に変換する。1月の NotebookLM 回と同じ位置づけです。
- ①質問できる教材。ノートブックを配る前に、出てきた教材を◎○△×で判定する。入れてよいのは自作の資料だけ。
- ②答えを教えない伴走者 Gem。問いを返す、段階的ヒント、5文以内。指示文は LearnLM の5原則を Gemini で動く形にしたもの。使い方1枚を添えて配る。
- ③学び直し。教科書は入れられないので、教員の言葉で基礎のまとめを作ってソースにし、クイズで確かめる。
- 結論は下の帯。資料を読まずに済む道具ではなく、続けにくい学び方を下支えする道具です。
-->

---

<!-- _class: summary -->

<div class="page-title">参考⑤：業務ツールの開発</div>

## テーマ5) 毎回ゼロから書いている頼み方を、保存して配る

<style scoped>
  section h2 { margin-bottom: 6px !important; }
  /* 上段：タグ付き3ボックスのフロー（ALC 15-min の recipe-flow を踏襲） */
  section .rflow { display:flex; align-items:stretch; gap:10px; margin:0 0 10px; }
  section .rflow .arrow { align-self:center; font-size:30px; font-weight:800; color:#C8611C; }
  section .rf { flex:1; border-radius:12px; padding:9px 16px 10px; border:2px solid #ccc; background:#fff; }
  section .rf .tag { font-size:18px; font-weight:700; display:inline-block; padding:1px 12px; border-radius:11px; color:#fff; margin-bottom:5px; }
  section .rf .body { font-size:20px; line-height:1.35; color:#2a2d33; }
  section .rf .body b { display:block; font-size:21px; color:#1f2a33; }
  section .rf.t1 { border-color:#1A6BB0; background:#EAF2FB; } section .rf.t1 .tag { background:#1A6BB0; }
  section .rf.t2 { border-color:#C8611C; background:#FBEEE6; } section .rf.t2 .tag { background:#C8611C; }
  section .rf.t3 { border-color:#0F766E; background:#E7F3F0; } section .rf.t3 .tag { background:#0F766E; }
  /* 下段：全幅の角丸セクション（academic の summary 型を詰めた feat3 相当） */
  section .sections { gap: 8px; }
  section .sec-box { padding: 8px 22px 9px; }
  section .sec-box h3 { margin-bottom: 3px; }
  section .sec-box ul li b { color: var(--accent-dark); }
</style>

<div class="rflow">
<div class="rf t1"><span class="tag">材料</span><div class="body"><b>メモや文章を、そのまま貼る</b>依頼メモ・会議メモ・問い合わせ</div></div>
<div class="arrow">→</div>
<div class="rf t2"><span class="tag">Gem/WS Studio</span><div class="body"><b>仕込んだ指示で処理する</b>敬体で書く／無い事実は〔要確認〕</div></div>
<div class="arrow">→</div>
<div class="rf t3"><span class="tag">返ってくる</span><div class="body"><b>すぐ使える下書き</b>案内文・返信案＋確かめる点3つ</div></div>
</div>

<div class="sections">
<div class="sec-box">

### ① エキスパート（Gem/WS Studio）をつくって、同僚に配る（シナリオ1〜3）

- 毎回の作業を1つ選ぶ：通知文・会議メモの整形・問い合わせ返信・シラバス点検・アンケート整理
- まず1回頼んで直し、指示文を Gem に仕込んで保存。**共有リンク**（組織内・閲覧者）で配る

</div>
<div class="sec-box">

### ② 隣の人に使ってもらい、手順書を1枚つける（シナリオ4・5）

- **説明なしで使ってもらって**詰まったところを直し、その紙だけで使える手順書をA4で1枚

</div>
<div class="sec-box">

### ③ きっかけで自動で動かす：Workspace Studio（シナリオ6）

- スターター（フォーム回答・メール受信・時刻）→ Gemini が処理 → 出力（メール下書き・Chat通知・Sheets）
- **言葉でたのむ → テスト → 少しずつ直す**。権限の中だけで動き、送信の**最終判断は人**。使えない契約なら Gem で

</div>
</div>

<div class="takeaway">「開発」＝プログラムを書くことではなく、頼み方を保存して配ること</div>

<!--
- 参考。テーマ5のまとめです。上の流れが係（Gem）。材料をそのまま貼ると、仕込んだ指示で処理して、すぐ使える下書きと「確かめる点3つ」が返ってくる。
- ①毎回の作業を1つ選び、1回頼んで直し、指示文を Gem に仕込んで保存。共有リンクで同僚に配る。
- ②隣の人に説明なしで使ってもらい、詰まったところを直す。その紙だけで使える手順書を1枚。
- ③きっかけで自動で動かすのが Workspace Studio。6月の ALC 第4回で扱った、スターター→ステップ→出力の形。作り方は言葉でたのむ、テスト、少しずつ直す。権限の中だけで動き、送信の最終判断は人。契約で使えなければ同じものを Gem で。
-->

---

<!-- _class: refs -->

<div class="page-title">参考文献・出典</div>

## 参考文献・出典

<style scoped>
  section ul { line-height: 1.4 !important; }
  section li { margin: 3px 0 !important; }
  section .disc { margin-top: 14px; background: var(--accent-soft); border-left: 6px solid var(--accent); border-radius: 8px; padding: 8px 16px; font-size: 18px; line-height: 1.45; color: #2a2d33; }
  section .disc b { color: var(--accent-dark); }
</style>

- 浦田悠 (2023). 生成AIと大学教育：評価・課題の設計. 大阪大学 全学教育推進機構 教育学習支援部（TLSC）. https://www.tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html
- Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024). The Artificial Intelligence Assessment Scale (AIAS): A framework for ethical integration of generative AI in educational assessment. *Journal of University Teaching and Learning Practice*, 21(6).（大阪大学 TLSC 訳）
- Bowen, J. A., & Watson, C. E. (2024). *Teaching with AI: A Practical Guide to a New Era of Human Learning*. Johns Hopkins University Press.（訳書『AI時代の大学教育』）
- MIT Teaching + Learning Lab. Generative AI &amp; Your Course（課題改善フロー）. https://tll.mit.edu/
- Bloom, B. S. (1984). The 2 Sigma Problem. *Educational Researcher*, 13(6), 4–16.
- Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A Taxonomy for Learning, Teaching, and Assessing*. Longman.（ブルームの分類・改訂版）
- Merrill, M. D. (2002). First principles of instruction. *Educational Technology Research and Development*, 50(3), 43–59.
- Google DeepMind (2024). LearnLM: Improving Gemini for Learning. arXiv:2412.16429. https://arxiv.org/abs/2412.16429
- 田川翔 (2026). 生成AIとの向き合い方（明海大学 不動産学部 FD講習会 #1, 2026/7/2）配布資料.

<div class="disc"><b>AI使用の開示</b>：構成・文案の下書きに Claude（Anthropic）を用い、第1回デックと他大学のSD研修の手順書を参照して作成。最終的な取捨選択と文責は講師が担当。手順書は講師が過去の研修で実際に使った文案をもとに本研修向けに書き直したもの。図版は第1回デックの自作図・スクリーンショットを再利用し、外部の図には出典を付記。</div>

<!--
- AI使用の開示は下の帯。先生方にお願いしたことを、自分でもやっています。
- 出典はこの1枚にまとめてあります。第1回の資料と合わせて、Notebookに入れておくと後から引けます。
-->
