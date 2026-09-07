---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI 体験ワークショップ</div><span class="hdr-event">明海大学 不動産学部 FD講習会 #2</span><img class="hdr-logo" src="./src/meikai-logo.png" alt="明海大学">'
footer: ''
style: |
  :root {
    --accent: #00736B;          /* 明海大学カラー（ティール／グリーン）第1回準拠 */
    --accent-dark: #004D45;
    --accent-soft: #E3F1EF;
    --section-bg: #F1F8F7;
    --hdr-left-w: 25%;
    /* ── ヘッダー幅の調整つまみ（使うときにコメントを外して数値を調整） ──
    --pt-width: 32%;     中央page-title帯の幅（折り返すなら広く）
    --hdr-gap: 4px;      帯間の白い隙間。0=密着 / -4px=重ねる
    */
  }
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
  section.vtop { justify-content: flex-start !important; }

  /* ワーク（参加型）スライド：本文を四角の枠で囲い WORK タブを出す（第1回と同じ） */
  section.work .split-body, section.work .body {
    border: 2.5px solid var(--accent); border-radius: 18px; padding: 24px 26px 22px;
    background: #fff; box-shadow: 0 3px 13px rgba(0,0,0,.07); position: relative; margin-top: 14px;
  }
  section.work .split-body::before, section.work .body::before {
    content: "🖐 WORK"; position: absolute; top: -15px; left: 24px;
    background: var(--accent); color: #fff; font-size: 15px; font-weight: 800; letter-spacing: .05em;
    padding: 4px 16px; border-radius: 999px; box-shadow: 0 2px 6px rgba(0,0,0,.13);
  }

  /* 表紙（cover-hero）：第1回と同じ kicker */
  section.cover-hero { --hdr-left-w: 25%; }
  section.cover-hero .title-small { color: #2a2d33; }
  section.cover-hero .title-affil { font-size: 22px; color: #44504d; }
  section.cover-hero .cv-kicker { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 20px; padding: 7px 18px; border-radius: 8px; margin-bottom: 22px; }
  section.cover-hero .cv-kicker img { height: 24px; background: #fff; border-radius: 3px; padding: 1px 3px; }
  section.cover-hero .cv-kicker .cv-sep { opacity: .7; margin: 0 4px; }

  /* 出典ライン */
  .srcline { font-size: 15px; color: #7a8581; margin-top: 8px; line-height: 1.4; }
  .srcline a { color: var(--accent); text-decoration: none; word-break: break-all; }
  .srcline b { color: #5a6764; font-weight: 700; }

  /* Slido アクセス（QR行）第1回と同じ */
  .sec-qr-row { display: flex; align-items: center; gap: 16px; }
  .sec-qr-row .sq-text { flex: 1; min-width: 0; }
  .sec-qr-row .sq-qr { flex: 0 0 auto; text-align: center; }
  .sec-qr-row .sq-qr img { width: 120px; height: 120px; display: block; background: #fff; border: 1px solid #dfe3e8; border-radius: 8px; padding: 4px; }
  .sec-qr-row .sq-url { flex: 0 0 170px; text-align: right; font-size: 17px; font-weight: 700; line-height: 1.3; overflow-wrap: anywhere; word-break: break-all; }
  .sec-qr-row .sq-url a { color: var(--accent); text-decoration: none; }

  /* Slido 設問スライド（植草の型をティールで） */
  section.slido { font-size: 24px; }
  section.slido h2 { font-size: 34px; }
  section.slido ul > li { margin: 0 0 1.1em; list-style: none; padding-left: 0; }
  section.slido ul > li::before { content: none; }
  section.slido ul > li > strong:first-child { display: block; font-size: 29px; color: var(--accent-dark); line-height: 1.45; margin: 0 0 .18em; }
  section.slido ul > li > strong:first-child + br { display: none; }
  section.slido .qtag { display: inline-block; vertical-align: .14em; background: var(--accent-dark); color: #fff;
    font-size: .58em; font-weight: 700; line-height: 1; padding: .40em .95em .44em; border-radius: 999px; margin-left: .55em; letter-spacing: .06em; }

  /* 2列（左図／右文）。fig-left = 左が広い */
  .tcols { display: flex; gap: 26px; align-items: flex-start; }
  .tcols > div { flex: 1; min-width: 0; }
  .tcols.fig-left > div:first-child { flex: 0 0 58%; }
  .tcols.fig-right > div:last-child { flex: 0 0 46%; }

  /* 具体例・補足の囲み（グレー地） */
  .ex { background: #F4F4F2; border-radius: 6px; padding: .55em .95em; margin: .5em 0 0; font-size: 20px; color: #4a4a4a; line-height: 1.6; }
  .ex b { color: #2a2d33; }

  /* プレースホルダー（当日差し替え） */
  .ph { border: 2px dashed #b9c6c3; border-radius: 12px; background: #f7faf9; color: #6c7a77;
    display: flex; align-items: center; justify-content: center; text-align: center; font-size: 19px; line-height: 1.5; padding: 16px; }
  .cap { font-size: 16px; color: #6c7a77; text-align: center; margin-top: 8px; }

  /* 3回シリーズの現在地（帯） */
  .series { display: flex; gap: 14px; margin: 6px 0 12px; }
  .series .sp { flex: 1; border-radius: 14px; padding: 12px 16px; border: 1.5px solid #dde6e4; background: #fff; font-size: 19px; line-height: 1.45; }
  .series .sp .spn { display: block; font-size: 16px; font-weight: 800; color: #5a6764; letter-spacing: .04em; }
  .series .sp .sph { display: block; font-size: 22px; font-weight: 800; color: var(--accent-dark); margin: 2px 0 4px; }
  .series .sp.now { background: var(--accent-soft); border: 2.5px solid var(--accent); }
  .series .sp.done { color: #6c7a77; }
  .series .sp.done .sph { color: #6c7a77; }

  /* 到達点パネル（植草「シナリオと到達点」の型） */
  .panels { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: .1em 0 .4em; }
  .pnl { border-radius: 8px; border-left: 7px solid; padding: 10px 13px; font-size: 19px; line-height: 1.4; background: #fff; }
  .pnl b { display: block; font-size: 21px; margin-bottom: .1em; }
  .pnl .g { display: block; margin-top: .28em; font-weight: 700; }
  .goalstrip { border-radius: 8px; background: var(--accent-soft); border-left: 7px solid var(--accent); padding: 12px 18px; font-size: 21px; line-height: 1.45; }
  .goalstrip b { color: var(--accent-dark); }

  /* ワーク中に出しっぱなしにする大きめの表 */
  section.bigtable { font-size: 28px; }
  section.bigtable table { font-size: 26px; width: 100%; }
  section.bigtable table th, section.bigtable table td { padding: .45em .8em; }
  section.bigtable .takeaway { font-size: 28px; }

  /* 手順ステップ（番号付きカード） */
  .steps { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
  .step { display: flex; align-items: center; gap: 14px; background: #fff; border: 1.5px solid #dde6e4; border-radius: 12px; padding: 9px 16px; font-size: 21px; line-height: 1.45; }
  .step .sn { flex: none; width: 34px; height: 34px; border-radius: 50%; background: var(--accent); color: #fff; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 18px; }
  .step b { color: var(--accent-dark); }

  /* 3K グランドルール（第1回と同じ3列） */
  .prac { display: flex; gap: 16px; }
  .prac-col { flex: 1; background: #fff; border: 1.5px solid #dde6e4; border-radius: 14px; padding: 14px 18px; }
  .prac-col .pc-h { font-size: 21px; font-weight: 800; color: var(--accent-dark); border-bottom: 2px solid var(--accent); padding: 4px 0 8px; margin-bottom: 10px; }
  .prac-col li { font-size: 19px; margin: 8px 0; line-height: 1.5; }

  /* 道具カード */
  .tools { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 16px; margin-top: 4px; }
  .tool { background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 10px; padding: 9px 14px; font-size: 19px; line-height: 1.45; }
  .tool .t-h { font-weight: 800; color: var(--accent-dark); font-size: 21px; }
  .tool .t-b strong { color: #2a2d33; }

  /* ホワイトボードの見本 */
  .wb { border: 3px solid #8a9b98; border-radius: 10px; background: #fbfdfc; padding: 10px 14px; font-size: 19px; line-height: 1.5; box-shadow: inset 0 0 0 6px #fff, 0 3px 10px rgba(0,0,0,.08); }
  .wb .wbh { font-weight: 800; color: var(--accent-dark); font-size: 20px; }
  .wb .wbl { border-bottom: 1.5px dashed #b9c6c3; padding: 4px 0; }
  .wb .wbl:last-child { border-bottom: 0; }
  .wb .hand { color: #2b577d; font-family: "Yu Gothic", "BIZ UDPGothic", sans-serif; font-style: italic; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="cv-kicker"><img src="./src/meikai-realestate-logo.png" alt="不動産学部">明海大学 不動産学部 FD講習会 #2<span class="cv-sep">｜</span>体験ワークショップ</div>
<div class="title-small">自分の授業で1回使える「現物」を、班でつくって持ち帰る</div>
<div class="title-big">生成AIの使い方と、<br>授業を面白くするアイデア形成</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">明海大学 不動産学部 FD講習会 #2　｜　浦安キャンパス</div>
<div class="title-date">2026/10/1（木）13:00–14:30　＋　14:30–17:00 個別相談（会場に残ります）</div>
<div class="title-affil">千葉大学 国際未来教育基幹 助教　田川 翔（タガワ ショウ）<br>博士（理学）・専門：高等教育論／地球惑星科学</div>
</div>
</div>

<!--
【原稿｜開場】
（開場中は表紙のまま。12:55になったら次のSlido案内へ切り替える）

【メモ】第2回は「体験ワークショップ」。形式（2〜3名の班・45分ワーク）は次の「全体の位置づけ」で示す。
-->

---

<!-- _class: summary -->

<div class="page-title">準備：Slido</div>

## はじめに ─ Slido にアクセスしてください（方法は、2通り）

<style scoped>
  section .sections .sec-box:first-child { padding-top: 6px; padding-bottom: 8px; }
  section .astep { font-size: 19px; line-height: 1.55; margin: 4px 0 0 1.15em; padding: 0; }
  section .slido-join { display: flex; align-items: center; gap: 16px; background: #2b577d; border-radius: 999px; padding: 10px 14px; margin: 10px auto 0; max-width: 700px; }
  section .sj-label { color: #fff; font-size: 21px; font-weight: 800; padding-left: 12px; white-space: nowrap; }
  section .sj-field { flex: 1; display: flex; align-items: center; gap: 10px; background: #fff; border: 3px solid #cfe0ef; border-radius: 999px; padding: 7px 8px 7px 18px; }
  section .sj-hash { color: #2b577d; font-weight: 800; font-size: 22px; }
  section .sj-code { flex: 1; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 23px; font-weight: 800; color: #16324a; letter-spacing: 1px; background: #FFF1A8; border-radius: 5px; padding: 1px 10px; }
  section .sj-go { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; background: #2b577d; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 21px; font-weight: 800; }
  section .slido-note { font-size: 16px; color: #5a6764; margin-top: 10px; line-height: 1.5; }
</style>

<div class="sections">

<div class="sec-box">

### ① QR・URL から

<div class="sec-qr-row">
<div class="sq-text">

- **QR**、または隣の **URL** から入れます
- **PC** からのアクセスを推奨（ワークでも PC を使います）
- 質問・アンケート・意見共有に使います

</div>
<div class="sq-qr">
<img src="./src/slido-qr.png" alt="Slido QRコード">
</div>
<div class="sq-url"><a href="https://app.sli.do/event/u7cfG5AciHocySQDbc4pJ7">app.sli.do/event/<br>u7cfG5AciHocySQDbc4pJ7</a></div>
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
<span class="sj-code">make-ai1</span>
<span class="sj-go">→</span>
</div>
</div>

</div>

</div>

<div class="slido-note">【データ利用のお願い】Slido・ワークへの入力情報のうち、<strong>個人情報・機微情報を除いた</strong>内容を、本研修の改善や報告に用いる可能性があります。</div>

<div class="takeaway">最初の1問（0-1）に、いまのお考えで結構ですのでご回答ください</div>

<!--
【原稿｜1分】
まずSlidoに入ってください。QRかURLから。今日はワークでもPCを使うので、PCからが便利です。
入力データは個人情報を除き、研修の改善や報告に使わせていただくことがあります。機微な情報は入れないでください。

【メモ】第1回と同じイベント（make-ai1）を使う前提。第2回用に新しいイベントを作るなら QR（src/slido-qr.png）・URL・コードの3か所を差し替える。
-->

---

<!-- _class: split -->

<div class="page-title">全体の位置づけ</div>

## 3回シリーズの2回目 ── 今日は「体験ワークショップ」です

<div class="series">
<div class="sp done"><span class="spn">第1回　7/2　済</span><span class="sph">講義</span>向き合い方・業務活用・授業設計</div>
<div class="sp now"><span class="spn">第2回　本日 10/1</span><span class="sph">体験ワークショップ</span>AIの使い方と、授業を面白くするアイデア形成</div>
<div class="sp"><span class="spn">第3回　12/3</span><span class="sph">持ち寄り</span>今日つくったものを授業で使ってみた結果と、マインド形成</div>
</div>

<div class="split-body">
<div class="left">

### 今日の形式

- **2〜3名の班**に、その場で分かれます
- 手順書の①〜⑤から、**班で好きなシナリオを選び**ます
- **45分**、手を動かします。講師は各班を回って伴走します
- 最後に**ホワイトボードの前で**、班ごとに結果を伺います

</div>
<div class="right">

### 終わったあと

- **14:30–17:00** は講師が会場に残ります。個別の質問・相談にいつでも
- 第3回は「使ってみた結果」の持ち寄り → 今日の成果物を**1回、授業で使って**みてください
- Google for Education からの**ノベルティ**もご用意しています

</div>
</div>

<div class="takeaway">今日は「聞く」ではなく「つくる」回。作りかけでも持ち帰れば成功です</div>

<!--
【原稿｜1分半】
今日は3回シリーズの2回目です。1回目は講義でしたが、今日は体験ワークショップ。2〜3名の班に分かれて、手順書から好きなシナリオを選び、45分手を動かしていただきます。私は各班を回ります。
終わったあと、14時半から17時まで会場に残ります。授業設計の相談でも、作りかけの手直しでも、どうぞ。
そして12月の第3回は、今日つくったものを授業で使ってみた結果の持ち寄りです。ですから今日は、1回使える現物を持ち帰ることを目標にします。
-->

---

<!-- _class: summary -->

<div class="page-title">今日のゴール</div>

## 自分の授業（または業務）で「1回使える現物」を、1つ持ち帰る

<div class="sections">

<div class="sec-box">

### ゴール

- 完璧でなくてよい。**作りかけでも提出**する
- 現物＝課題文・方針文・Gem・Gemini Notebook・フロー など
- 第3回（12/3）で「使ってみた結果」を持ち寄る

</div>

<div class="sec-box">

### 提出物（2点）

- **① 成果物**：Gem は指示文の全文、Notebook は共有リンク、文書はそのもの
- **② インフォグラフィック**：班名・題材・道具・作ったもの・分かったこと の5つを1枚に

</div>

<div class="sec-box">

### いちばん大事なルール

- **困ったら、手順書をそのままAIに貼って聞く**（ずるくない。今日いちばん練習してほしいこと）
- 相談の順番：**隣の人 → AI → 手を挙げる**

</div>

</div>

<div class="takeaway">「試した」ことが今日の成果。うまくいかなかった記録も、立派な成果物です</div>

<!--
【原稿｜1分】
今日のゴールは1つ。自分の授業か業務で1回使える現物を、1つ持ち帰ることです。完璧でなくて構いません。作りかけでも提出してください。
提出は2点。成果物の現物と、やったことを1枚にしたインフォグラフィックです。
そして今日いちばん大事なルール。困ったら、手順書をそのままAIに貼って聞いてください。これはずるい方法ではなく、今日いちばん練習してほしいことです。
-->

---

<!-- _class: summary -->

<div class="page-title">グランド・ルール</div>

## 第1回と同じ「3K」で ── 安心して試せる場を、全員でつくる

<div class="prac">

<div class="prac-col">
<div class="pc-h">K①　敬意を持って</div>

- 相手の**意見・経験**を尊重し傾聴
- 否定から入らず、まず**受けとめる**
- 隣の班の画面を**のぞいてよい**

</div>

<div class="prac-col">
<div class="pc-h">K②　忌憚なく</div>

- 気がねせず、**率直に**出し合う
- **職位に関係なく**、ざっくばらんに
- 「できない」「分からない」を**先に言う**

</div>

<div class="prac-col">
<div class="pc-h">K③　建設的に</div>

- 否定で終わらせず、**提案・改善**を
- AIの出力も**「では、どう直す」**で受ける
- 失敗の記録も、成果として共有する

</div>

</div>

<div class="srcline"><b>出典:</b> 東京大学・プレFD講座 グランド・ルール（3K）。第1回で共有したものに、ワーク用の3行を足しています</div>

<div class="takeaway">今日は「安心して失敗できる場」が成果を決めます。教え合いながら、ゲーム感覚で</div>

<!--
【原稿｜45秒】
グランドルールは第1回と同じ3Kです。敬意を持って、忌憚なく、建設的に。今日はワークなので3行足しました。隣の班の画面をのぞいてよい。できない・分からないは先に言う。AIの出力も、否定で終わらせず「ではどう直す」で受ける。
安心して失敗できる場が、今日の成果を決めます。
-->

---

<!-- _class: slido -->

<div class="page-title">Slido 0-1</div>

## まず1問、皆さんの「現在地」を伺います

- **第1回（7/2）から今日までに、生成AIで「試してみたこと」を、一言で教えてください** <span class="qtag">word cloud</span>
  例：授業資料の要約／小テストの作問／メールの下書き／まだ何も（これも正直に）

<div class="ex"><b>ねらい：</b>この3か月の「試した量」を可視化します。「まだ何も」が多くても大丈夫。今日がその1回目になります。</div>

<div class="takeaway">回答を眺めながら、今日のワークでどこから手をつけるかを決めましょう</div>

<!--
【原稿｜2分】
最初の1問です。第1回から今日までに、生成AIで試してみたことを一言で。まだ何も、でも正直に入れてください。
（回答を眺めて）便利そうなことと、まだこれからのことが両方ありますね。今日はこの続きを、班で実際にやってみます。

【メモ】Slido 0-1 を開く。word cloud を2分眺めて2〜3件拾う。
-->

---

<!-- _class: divider -->

# 第1回のおさらい

## 10分で3枚。仕組み・守りと攻め・使える道具

<!--
【原稿｜15秒】
ワークの前に、第1回のおさらいを10分だけ。3枚です。
-->

---

<!-- _class: summary -->

<div class="page-title">おさらい①　仕組み由来の性質</div>

## 「ありそうな続きを出す」装置だからこその、3つの性質

<div class="sections">

<div class="sec-box">

### ① ハルシネーション

- 知らないことも、**それらしく**答える
- 実在しない文献を、**書式まで完璧に**作る
- → 出典・数字は**必ず自分で確かめる**

</div>

<div class="sec-box">

### ② バイアス

- 「平均」を当てにいく性質が、そのまま**偏り**になる
- 画像でも文章でも起きる
- → 出力を**複数の視点で**見直す

</div>

<div class="sec-box">

### ③ 機密の保持

- 入力が守られるかは、料金ではなく**アカウントの契約**で決まる
- 大学の Google アカウントで使う限り、入力は**学習に使われない**
- → 今日は**個人情報・未公開資料を入れない**

</div>

</div>

<div class="takeaway">流暢に書けることと、中身が正しいことは別物 ── 直しながら使う（ループ）が基本</div>

<!--
【原稿｜1分半】
おさらい1枚目。言語型の生成AIは、次に来そうな言葉を選び続ける装置でした。だから3つの性質があります。
ハルシネーション。知らないことも、それらしく答える。実在しない文献を書式まで完璧に作ります。出典と数字は必ず自分で確かめてください。
バイアス。平均を当てにいく性質が、そのまま偏りになります。
機密。入力が守られるかは、料金ではなくアカウントの契約で決まります。大学のGoogleアカウントで使う限り、入力は学習に使われません。それでも今日は、個人情報と未公開資料は入れないでください。
一発で正解を求めず、直しながら使う。これが基本です。
-->

---

<!-- _class: summary -->

<div class="page-title">おさらい②　守りと攻め</div>

## 禁止でも放置でもなく、「文脈」を一緒に考える ── 守りと攻めの実践

<div class="sections">

<div class="sec-box">

### 守り（学びを損なわない）

- **ポリシーを決める**：「うちのルール」と「その理由」を学生に見せる（7つの問い・文例）
- **不正の対応を想定する**：疑わしい提出物は、断定せず**手順で**確かめる
- **既存の課題を見直す**：まず自分の課題を**AIに解かせて**みる（MIT のフロー）

</div>

<div class="sec-box">

### 攻め（教育をもっと面白く）

- **学生が自ら学ぶのを支援する**：手持ちの資料を「質問できる教材」に変える
- **課題の到達点を変える**：学生が自分で学ぶ力を課題に組み込み、AIで下支えする
- **評価を広げる**：「使ったかどうか」ではなく、成果物＋過程＋振り返りを見る

</div>

</div>

<div class="takeaway">今日の手順書①〜⑤は、この「守り」と「攻め」をそのまま作業に落としたものです</div>

<!--
【原稿｜1分半】
2枚目。第1回で、禁止か放置かの二択ではなく、文脈を一緒に考えましょう、とお話ししました。
守りが3つ。ポリシーを決めて学生に見せる。不正が疑われたら断定せず手順で確かめる。既存の課題は、まず自分でAIに解かせてみる。
攻めが3つ。手持ちの資料を質問できる教材に変える。課題の到達点そのものを変える。評価を、成果物だけでなく過程と振り返りまで広げる。
今日の手順書の①から⑤は、この守りと攻めをそのまま作業に落としたものです。
-->

---

<!-- _class: fig -->

<div class="page-title">おさらい③　第1回の Slido から</div>

## 第1回に先生方が書いてくださったこと ── 今日の題材はここにあります

<style scoped>
  section .sl3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 4px; }
  section .sl3 .ph { height: 300px; flex-direction: column; gap: 8px; }
  section .sl3 .ph b { color: var(--accent-dark); font-size: 20px; }
  section .sl3 .ph small { font-size: 16px; }
</style>

<div class="sl3">
<div class="ph"><b>1-2　理想の関わり方</b>学生に、生成AIと「どんな関わり方」をしてほしいか<small>［第1回 Slido の word cloud を貼る：src/fig05a-slido-1-2.png］</small></div>
<div class="ph"><b>2-3　AIで簡単になってほしい仕事</b>教務・学務でのニーズ<small>［第1回 Slido の word cloud を貼る：src/fig05b-slido-2-3.png］</small></div>
<div class="ph"><b>3-2　課題を作り変えるアイデア</b>ワーク③で出た実例<small>［第1回 Slido の自由記述を貼る：src/fig05c-slido-3-2.png］</small></div>
</div>

<div class="takeaway">「学生にこう関わってほしい」「この作業を楽にしたい」── 今日はそれを現物にします</div>

<!--
【原稿｜1分半】
3枚目は復習を兼ねて、第1回に先生方が Slido に書いてくださったことです。
左は、学生にどんな関わり方をしてほしいか。真ん中は、どんな仕事がAIで簡単になってほしいか。右は、課題を作り変えるアイデア。
今日の題材は、ここにあります。ご自身が書いた言葉を、今日は現物にしてください。

【メモ】第1回の Slido 管理画面から3問の結果をスクリーンショットで src/ に入れ、.ph を <img style="height:300px"> に差し替える。取得できなければこの枚は飛ばす。
-->

---

<!-- _class: summary -->

<div class="page-title">おさらい④　使える道具</div>

## 貴学の Google アカウントで、今日使う5つの道具

<div class="tools">
<div class="tool"><div class="t-h">Gemini アプリ</div><div class="t-b">対話・要約・作文・画像生成・<strong>Canvas</strong>（共同編集）。ファイル（PDF・画像・音声）を入れて読ませる</div></div>
<div class="tool"><div class="t-h">Gem</div><div class="t-b">よく使う頼み方を仕込んだ<strong>自分専用の Gemini</strong>。作って、組織内に共有して、リンクで配れる</div></div>
<div class="tool"><div class="t-h">Gemini Notebook（旧 NotebookLM）</div><div class="t-b">渡した資料の中だけで答える。<strong>学習ガイド・クイズ・音声解説（日本語）</strong>。学生に共有できる</div></div>
<div class="tool"><div class="t-h">Chrome の〈Gemini に相談〉</div><div class="t-b">いま開いているページ（他大学の方針・規程）について、<strong>ページを離れず</strong>その場で聞く</div></div>
<div class="tool"><div class="t-h">Workspace Studio</div><div class="t-b">定型作業の自動化（ノーコード）。<strong>テスト実行は本物が動く</strong>ので、自分宛て・テスト用文書で試す</div></div>
<div class="tool" style="border-left-color:#B23B2E;"><div class="t-h" style="color:#B23B2E;">最初に確かめる（手順書 Step 1）</div><div class="t-b">Gemini の設定 →「アクティビティ」→ <strong>学習に使われない</strong>表示を確認。ドキュメント横に Gemini のサイドパネルが<strong>出ない方は</strong>、Gemini アプリにファイルを入れて進める</div></div>
</div>

<div class="takeaway">「対話・自分専用・資料読解・ページ相談・自動化」── 5つとも、大学アカウントで安全に使えます</div>

<!--
【原稿｜1分半】
道具のおさらいです。今日使うのは5つ。Geminiアプリ、Gem、Gemini Notebook（以前のNotebookLM）、ChromeのGeminiに相談、そしてWorkspace Studio。
1つだけ注意。Workspace Studioのテスト実行は本物が動きます。メールが実際に送られ、予定が実際に作られる。必ず自分宛て、テスト用の文書で試してください。
そして手順書のStep 1。Geminiの設定でアクティビティを開き、学習に使われないという表示を確認してから始めてください。契約のエディションによって、Googleドキュメントの横にGeminiのサイドパネルが出る方と出ない方がいます。出ない方は、Geminiアプリにファイルを入れて進めれば同じことができます。
-->

---

<!-- _class: divider -->

# ワーク

## 13:15 説明 → 13:20 開始 → 14:00 提出締切 → 14:05 共有

<!--
【原稿｜15秒】
ここからワークです。5分で進め方を説明して、13時20分に始めます。
-->

---

<!-- _class: bigtable -->

<div class="page-title">ワークの進め方</div>

## 手順書のシナリオを班で選び、45分で「現物」を1つ作ります

<div class="body">

| 時刻 | すること |
|---|---|
| 13:20 | **2〜3名の班**に分かれ、手順書の①〜⑤から**シナリオを選ぶ** |
| 13:25 | 手順書の Step 1（安全性の確認）→ シナリオを進める |
| 13:55 | 成果物とインフォグラフィックをまとめ、**共有の権限**を設定して提出 |
| **14:00** | **提出締切。手を止めてください** |
| 14:05 | ホワイトボードの前で、各班から結果を伺います |

- 説明は意図的に不親切です → <span style="color:#B23B2E; font-weight:800;">困ったら手順書をAIに貼って聞いてください</span>
- **隣の人に聞く → AIに聞く → 手を挙げる**、の順で。講師は各班を回ります

</div>

<!--
【原稿｜1分】
進め方です。13時20分に2〜3名の班に分かれ、手順書の①から⑤の中からシナリオを選びます。13時25分から、手順書のStep 1で安全性を確認してから、シナリオを進めてください。13時55分に成果物とインフォグラフィックをまとめて、共有の権限を設定して提出。14時が締切です。14時5分から、ホワイトボードの前で結果を伺います。
説明は意図的に不親切にしてあります。困ったら、手順書をそのままAIに貼って聞いてください。隣の人、AI、それでもだめなら手を挙げる。この順でどうぞ。

【メモ】ワーク中はこの画面に戻れるようにしておく（p13・p14・p16 の3枚を行き来）。
-->

---

<!-- _class: vcenter -->

<div class="page-title">シナリオと到達点</div>

## 手順書の5つの章 ── 班で1つ選び、その中のシナリオを1本進めます

<div class="body">

<div class="panels">
<div class="pnl" style="background:#EAF3EA; border-color:#2F6B3A;"><b style="color:#2F6B3A;">① 既存の課題をAIから守る</b>自分の課題をAIに解かせて判定し、AIを使わない形に直す。方針文・違反時の対応手順も<span class="g" style="color:#1E4A27;">→ 学生に見せる方針文／直した課題文</span></div>
<div class="pnl" style="background:#E8F0F7; border-color:#2E5E8A;"><b style="color:#2E5E8A;">② 既存の課題をAIで変える</b>MIT のフローで作り替えのサインを見つけ、「自分で書く→AIに解かせる→差を論じる」型へ<span class="g" style="color:#24486A;">→ 改訂した課題文と点検 Gem</span></div>
<div class="pnl" style="background:#F5EDF7; border-color:#7A4A8C;"><b style="color:#7A4A8C;">③ 全く新しい授業課題を作る</b>買主・借主・自治体担当を演じる Gem で演習を組む。少し遠くまで行ける課題を<span class="g" style="color:#5E3A6D;">→ 課題文・授業案・ルーブリック</span></div>
<div class="pnl" style="background:#FDF1E6; border-color:#B4682A;"><b style="color:#B4682A;">④ 自習・個別最適な学びのAI</b>講義資料を Gemini Notebook に入れて学生に共有。答えを教えず問い返す Gem を作る<span class="g" style="color:#8A4F20;">→ 学生に配れるリンク（教材・Gem）</span></div>
<div class="pnl" style="background:#E9F2F1; border-color:#2E7D74;"><b style="color:#2E7D74;">⑤ 業務で便利なツールを作る</b>想定問答・規程 Notebook・シラバス点検 Gem・Workspace Studio のフロー<span class="g" style="color:#22605A;">→ 同僚に配れる Gem かフロー1本</span></div>
<div class="pnl" style="background:#F4F4F2; border-color:#8a9b98;"><b style="color:#5a6764;">迷ったら</b>「自分が出している課題文」を持っている方は ①か②、講義資料を持っている方は ④、業務を楽にしたい方は ⑤ から<span class="g" style="color:#5a6764;">→ 途中で章を変えてもよい</span></div>
</div>

<div class="goalstrip"><b>到達点は難しく考えないでください。</b>AIをさわって、その回答を自分で修正できればOK。個人情報・未公開資料は使わないでください。</div>

</div>

<!--
【原稿｜2分】
手順書の5つの章です。班で1つ選んで、その中のシナリオを1本進めてください。
①は、既存の課題をAIから守る。自分の課題をAIに解かせてどこまで解けるかを見て、AIを使わない形に直します。方針文や、違反が疑われたときの対応手順もここです。
②は、既存の課題をAIで変える。MITのフローで作り替えのサインを見つけ、まず自分で書いて、AIに解かせて、差を論じる型に作り替えます。
③は、全く新しい課題を作る。買主や借主、自治体の担当者を演じるGemで演習を組みます。
④は、自習と個別最適な学び。講義資料をGemini Notebookに入れて学生に共有する。答えを教えずに問い返すGemを作る。
⑤は業務。想定問答、規程のNotebook、シラバス点検のGem、Workspace Studioのフローです。
迷ったら、課題文を持っている方は①か②、講義資料なら④、業務なら⑤から。途中で章を変えても構いません。
到達点は難しく考えないでください。AIをさわって、回答を自分で直せればOKです。

【メモ】色は区別のためで優劣はない、と一言。班に「自分の枠」を指で押さえてもらう。
-->

---

<!-- _class: split -->

<div class="page-title">班とホワイトボード</div>

## 近くの2〜3名で班を作り、ホワイトボードに「途中経過」を書きながら進めます

<div class="split-body">
<div class="left">

### 班の作り方

- **近くの2〜3名**で。科目系統（経済・法・工・語学）で組んでも、混ぜてもよい
- 1人1台でも、**数人で1台**を見ながらでもよい
- **班名**を決める（例：②-A、④-B）
- ホワイトボードは**2班で1台**を共有することがあります

### ホワイトボードの使い方

- 上段に班名とシナリオ、中段に**決めたこと**、下段に**困っていること**
- 下段が埋まっている班から、講師が回ります
- 共有はこのボードの前で。**写真を撮って提出物に添えて**ください

</div>
<div class="right">

<div class="wb">
<div class="wbh">ホワイトボードの見本</div>
<div class="wbl">班名／シナリオ：<span class="hand">②-A　シナリオ2「自分で書く→AIに解かせる→差を論じる」</span></div>
<div class="wbl">決めたこと：<span class="hand">「借地借家法の改正と賃貸市場」のレポートを、事前400字→AI比較→振り返り の3段に</span></div>
<div class="wbl">困っていること：<span class="hand">AIの答案と学生の答案の「差」をどう採点するか</span></div>
<div class="wbl">第3回までにやってみたい：<span class="hand">後期第8回の課題で試す</span></div>
</div>
<div class="cap">手書きでOK。きれいでなくてよい</div>

</div>
</div>

<div class="takeaway">ホワイトボードは「班の思考の途中経過」。講師が回る目印にもなります</div>

<!--
【原稿｜1分】
班は近くの2〜3名で。科目が近い方同士でも、混ぜても構いません。数人で1台を見ながらでもいいです。班名を決めてください。
ホワイトボードには、上に班名とシナリオ、真ん中に決めたこと、下に困っていることを書いてください。下が埋まっている班から回ります。最後の共有はボードの前で行いますので、写真を撮って提出物に添えてください。
-->

---

<!-- _class: bigtable -->

<div class="page-title">提出と共有</div>

## 成果物とインフォグラフィックの2点を、班ごとに提出します

<div class="tcols fig-right">
<div>

- **① 成果物**：今日つくった現物
  Gem は**指示文の全文**、Gemini Notebook は**共有リンク**、文書はそのもの
- **② インフォグラフィック**：やったことを1枚の図に
  AIに作らせる。紙に書いて写真でも可
- **共有の権限を正しく設定するところまでがワーク**
  組織内（明海大学）＋講師のアドレス宛に［閲覧者］で

**締切は 14:00 です。**

</div>
<div>

<div class="ph" style="height:230px;">［提出先の QR コード］<br>Google スライド（インフォグラフィック貼付）<br>＋ Drive フォルダ（成果物）<br><small>確定後に差し替え</small></div>
<div class="cap">提出先 URL：（確定後に差し替え）</div>

</div>
</div>

<div class="takeaway">うまくいかなかった記録も、立派な成果です</div>

<!--
【原稿｜45秒】
提出は2点。成果物の現物と、インフォグラフィックです。Gemは指示文の全文、Gemini Notebookは共有リンク、文書はそのものを。
共有の権限を正しく設定するところまでがワークです。組織内と、私のアドレス宛に閲覧者で共有してください。締切は14時。
うまくいかなかった記録も、立派な成果です。

【メモ】提出先（Googleスライド＋Driveフォルダ）は明海の Google アカウントから開ける権限にする。植草では学外アカウントで詰まった。QR は src/fig16-submit-qr.png として差し替え。
-->

---

<div class="page-title">インフォグラフィック</div>

## こんな1枚を、AIに作ってもらいます（見本は架空の班）

<div class="tcols fig-left">
<div>

<svg viewBox="0 0 640 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="インフォグラフィックの見本">
<rect x="0" y="0" width="640" height="360" rx="14" fill="#FFFFFF" stroke="#DDE6E4" stroke-width="2"/>
<rect x="0" y="0" width="640" height="78" rx="14" fill="#00736B"/>
<rect x="0" y="40" width="640" height="38" fill="#00736B"/>
<text x="20" y="34" font-size="24" font-weight="700" fill="#FFFFFF">④-B班</text>
<text x="20" y="64" font-size="19" fill="#E3F1EF">講義資料を「質問できる教材」にしました</text>
<text x="20" y="112" font-size="16" fill="#5F5F5F">選んだ題材</text>
<text x="20" y="140" font-size="18" fill="#262626">都市計画（第3〜5回）</text>
<text x="20" y="164" font-size="18" fill="#262626">の配布資料</text>
<text x="230" y="112" font-size="16" fill="#5F5F5F">使った道具</text>
<text x="230" y="146" font-size="21" font-weight="700" fill="#004D45">Gemini Notebook</text>
<text x="230" y="170" font-size="16" fill="#5F5F5F">＋ 問い返す Gem</text>
<text x="440" y="112" font-size="16" fill="#5F5F5F">作ったもの</text>
<text x="440" y="140" font-size="18" fill="#262626">学生に共有した</text>
<text x="440" y="164" font-size="18" fill="#262626">ノートと Gem のリンク</text>
<line x1="20" y1="190" x2="620" y2="190" stroke="#DDE6E4" stroke-width="1.5"/>
<text x="20" y="222" font-size="18" font-weight="700" fill="#004D45">やってみて分かったこと</text>
<text x="20" y="254" font-size="17" fill="#262626">・クイズの選択肢に「用途地域」の誤りが1問あり、専門の目で直した</text>
<text x="20" y="282" font-size="17" fill="#262626">・共有は「組織内・閲覧者」にしないと、学生が開けなかった</text>
<text x="20" y="322" font-size="18" font-weight="700" fill="#004D45">第3回までにやってみたい</text>
<text x="300" y="322" font-size="17" fill="#262626">第8回の復習課題で、学生に1週間使ってもらう</text>
</svg>

</div>
<div>

- **5つを入れるだけです**
  班名／選んだ題材／使った道具／作ったもの／分かったこと
- **「第3回までにやってみたい」**を1行足すと、12月の持ち寄りにつながります
- 作り方は次のスライドと手順書に
- 見た目より、**やったことが伝わる**ことを優先

</div>
</div>

<div class="takeaway">うまく出なければ、ホワイトボードの写真でもOKです</div>

<!--
【原稿｜45秒】
提出物のひとつ、インフォグラフィックの見本です。架空の④-B班。入れるのは5つだけ。班名、題材、道具、作ったもの、分かったこと。それに「第3回までにやってみたい」を1行足してください。12月の持ち寄りにつながります。
見た目より、やったことが伝わるほうを優先してください。うまく出なければ、ホワイトボードの写真でも構いません。
-->

---

<!-- _class: bigtable -->

<div class="page-title">インフォグラフィックの作り方</div>

## いま使っている道具で、作れます

<div class="body">

| 道具 | 作り方 |
|---|---|
| **Gemini アプリ** | 画面下の〈Canvas〉を押して頼む → 右上の〈作成〉→〈インフォグラフィック〉 |
| **Gemini Notebook** | Studio の〈インフォグラフィック〉で作る |
| **紙** | ホワイトボードか紙に手書きして、写真を撮る |

<div class="ex" style="font-size:22px;">頼み方の例：「今日のワークのまとめを1枚のインフォグラフィックに。班名・題材・道具・作ったもの・分かったこと・第3回までにやってみたいことを入れて」</div>

</div>

<div class="takeaway">Ctrl＋P →「PDF に保存」か、スクリーンショットで提出</div>

<!--
【原稿｜30秒】
作り方です。GeminiアプリならCanvasを押して頼み、右上の作成からインフォグラフィック。Gemini NotebookならStudioのインフォグラフィック。紙に手書きして写真でもいいです。
頼み方の例を下に書きました。そのまま貼ってください。

【メモ】ワーク中はこのページを出しっぱなしにできる。
-->

---

<!-- _class: message -->

# ワーク中（13:20 – 14:00）

## 困ったら、手順書をAIに貼る　｜　隣の人 → AI → 手を挙げる　｜　締切 14:00

<!--
【原稿】
（ワーク中はこの画面か、進め方・到達点・提出の3枚を出しておく）
残り15分（13:45）と残り5分（13:55）で声をかける。13:55「提出の準備を。共有の権限を確認してください」。

【メモ】講師は全班を1周（15〜20名＝6〜8班。1班5〜6分）。ホワイトボード下段「困っていること」が埋まっている班を優先。回りながら「第3回までにやってみたいこと」を1つずつ聞いておく（共有の指名に使う）。
-->

---

<!-- _class: message -->

# お疲れさまでした ── 手を止めてください

## 提出がまだの班は、リンクから2分でお願いします。そのあとホワイトボードの前で共有します

<!--
【原稿｜1分】
お疲れさまでした。手を止めてください。提出がまだの班は、リンクから2分でお願いします。そのあと、ホワイトボードの前で共有します。
-->

---

<!-- _class: split work -->

<div class="page-title">共有</div>

## ホワイトボードの前で、班ごとに2分 ── 「何をして、何が分かったか」

<div class="split-body">
<div class="left">

### 話すこと（2分・3点だけ）

<div class="steps">
<div class="step"><span class="sn">1</span><span><b>何をしたか</b>：選んだシナリオと、使った道具</span></div>
<div class="step"><span class="sn">2</span><span><b>何が分かったか</b>：うまくいった点・詰まった点を1つずつ</span></div>
<div class="step"><span class="sn">3</span><span><b>第3回までにやってみたいこと</b>：授業で1回試すなら、いつ・何を</span></div>
</div>

</div>
<div class="right">

### 聞く側のお願い

- 「自分の科目なら、どう使えるか」を考えながら聞く
- 質問は**共有のあと**にまとめて（14:30 以降の個別相談でも）
- 詰まった点は、**他の班が答えを持っている**ことが多い

<div class="ex"><b>時間が押したら：</b>講師が面白そうな班を3〜4班指名し、残りはインフォグラフィックで共有します。</div>

</div>
</div>

<div class="takeaway">狙いは「解決策」より「本音」の共有。詰まった点こそ、全体の学びになります</div>

<!--
【原稿｜12分】
ホワイトボードの前で、班ごとに2分ずつ伺います。3点だけ。何をしたか。何が分かったか。そして、第3回までにやってみたいこと。
聞く側は、自分の科目ならどう使えるかを考えながら聞いてください。質問は共有のあとにまとめて。詰まった点は、他の班が答えを持っていることが多いです。

【メモ】6〜8班×2分＝12〜16分。押したら3〜4班に絞る。回りながら聞いた「やってみたいこと」が面白い班を指名。
-->

---

<!-- _class: divider -->

# まとめ

## 第3回（12/3）までに、やってみたいことを決めて帰る

<!--
【原稿｜15秒】
まとめです。第3回までにやってみたいことを、決めて帰りましょう。
-->

---

<!-- _class: summary -->

<div class="page-title">関わり方</div>

## AIは「よく分からないもの」ですが、試す習慣があれば怖くありません

<div class="sections">

<div class="sec-box">

### 今日、体で分かったこと

- **一発で正解は出ない**。直しながら使う（ループ）が基本
- 手順書をAIに貼れば、**使い方もAIに聞ける**
- 出力の**判断は自分**がする。専門の目が最後の砦

</div>

<div class="sec-box">

### 授業に持ち帰るとき

- 学生に見せるのは「ルール」と**「その理由」**
- 「使ったかどうか」ではなく、**過程と振り返り**を見る
- 完成品でなくてよい。**1回試して、第3回に結果を持ち寄る**

</div>

<div class="sec-box">

### 仕事の本質は変わらない

- AIは仕事の**仕方**を変えるが、教える・学ぶの**本質**は変わらない
- 1人の工夫を、**学部の仕組み**に育てる（Gem・Notebook は共有できる）
- 迷ったら、まず試して、AIを味方にする

</div>

</div>

<div class="takeaway">知らないと怖い。知れば、そんなに怖くない ── 今日の一歩を、授業で1回使ってみてください</div>

<!--
【原稿｜2分】
今日、体で分かったことが3つあると思います。一発で正解は出ない。直しながら使う。手順書をAIに貼れば、使い方もAIに聞ける。そして、出力の判断は自分がする。専門の目が最後の砦です。
授業に持ち帰るときは、学生にルールと、その理由を見せる。使ったかどうかではなく、過程と振り返りを見る。完成品でなくていい。1回試して、第3回に結果を持ち寄ってください。
AIは仕事の仕方を変えますが、教える・学ぶの本質は変わりません。1人の工夫を学部の仕組みに育てる。GemもNotebookも共有できます。
知らないと怖い。知れば、そんなに怖くない。今日の一歩を、授業で1回使ってみてください。
-->

---

<!-- _class: split work -->

<div class="page-title">第3回までに</div>

## 「第3回（12/3）までに、こんなことをやってみたい」を、各班一言で

<div class="split-body">
<div class="left">

### 穴埋めで宣言（1班 30秒〜1分）

<div class="ex" style="font-size:22px; line-height:1.8;">
「<b>［科目名］</b>の<b>［第N回／課題名］</b>で、<br>今日つくった<b>［現物］</b>を、<br><b>［いつまでに］</b>使ってみます。」
</div>

- 大きくなくてよい。**1回・1科目・1課題**
- 「使う前に直したいこと」があれば、それも一言
- 業務なら「［作業名］を［Gem／フロー］で」

</div>
<div class="right">

### 同じ内容を Slido にも

- **4-2**「第3回までにやってみたいこと」に、いま宣言した一言を入れてください
- 第3回の冒頭で、この一覧を映して**振り返り**から始めます
- 途中で相談したくなったら、**14:30–17:00** に。日をまたぐ場合はメールでも

</div>
</div>

<div class="takeaway">宣言は「約束」ではなく「目印」。第3回は、できた話もできなかった話も歓迎です</div>

<!--
【原稿｜5分】
最後に、各班一言で宣言をお願いします。穴埋めです。何の科目の、第何回か課題名で、今日つくった何を、いつまでに使ってみるか。大きくなくていい。1回、1科目、1課題です。
同じ内容をSlidoの4-2にも入れてください。第3回の冒頭で、この一覧を映して振り返りから始めます。
宣言は約束ではなく目印です。できた話も、できなかった話も歓迎です。

【メモ】6〜8班×30〜45秒。Slido 4-2 を開いておく。
-->

---

<!-- _class: slido -->

<div class="page-title">Slido 4-1・4-3</div>

## 最後の2問です。率直にお答えください

- **4-1　今日の気づきを、一言で教えてください** <span class="qtag">自由記述</span>
- **4-3　今日をとおして、AIの「教育への可能性」を感じましたか** <span class="qtag">5段階</span>
  第1回の同じ問い（3-3）と並べて映します

<div class="ex"><b>お願い：</b>4-2「第3回までにやってみたいこと」も、まだの方は入れてください。第3回の冒頭で振り返ります。</div>

<div class="takeaway">投稿をいくつか読み上げてから、おわりにします</div>

<!--
【原稿｜3分】
最後の2問です。今日の気づきを一言。そして、教育への可能性を感じたかを5段階で。第1回の同じ問いと並べて映します。
（投稿を2〜3件読み上げる）

【メモ】4-3 は第1回 3-3 との前後比較。スクショを撮る。
-->

---

<!-- _class: summary -->

<div class="page-title">おわりに</div>

## ありがとうございました ── 14:30 から 17:00 まで、会場に残ります

<div class="sections">

<div class="sec-box">

### 個別相談（14:30–17:00・予約不要）

- 今日の**作りかけの手直し**（Gem の指示文・共有設定）
- **授業設計・課題設計・ポリシー文**の相談
- 「うちの科目ならどう使う」の壁打ち。**お一人でも、班でも**

</div>

<div class="sec-box">

### 第3回（12/3 木 13:00–14:30）

- 今日つくったものを**授業で使ってみた結果**の持ち寄り
- できた話も、できなかった話も歓迎
- Slido 4-2 の一覧から振り返りを始めます

</div>

<div class="sec-box">

### 持ち帰り

- 手順書（今日の冊子）は**そのまま同僚に渡せます**
- Google for Education の**ノベルティ**をお受け取りください
- 提出物は後日、事例集として共有します

</div>

</div>

<div class="takeaway">今日の一歩を、授業で1回。12月に、結果を聞かせてください</div>

<!--
【原稿｜1分】
ありがとうございました。14時半から17時まで会場に残ります。作りかけの手直しでも、授業設計の相談でも、予約不要でどうぞ。
第3回は12月3日。今日つくったものを授業で使ってみた結果を持ち寄ってください。できた話もできなかった話も歓迎です。
手順書はそのまま同僚に渡せます。ノベルティもお受け取りください。12月に、結果を聞かせてください。
-->

---

<!-- _class: divider -->

# 参考｜個別相談用

## 第1回の「授業設計」から。聞かれたら開く

<!--
【メモ】以下は Appendix。本編では使わない。個別相談（14:30–17:00）や共有中の質問で開く。第1回デックのスライドを、文言を変えずに再掲。
-->

---

<!-- _class: split -->

<div class="page-title">守りの設計：課題と評価を考える</div>

## 学びを損なわないために ─ 授業の目標について、学生が思考することを担保する

<div class="callout-orange" style="margin:4px 0 12px;">🤔 <b>中学生に聞かれたらどうします？</b>　「AIの方が英語を書くのが上手いのに、英語を学ぶ必要があるの？」</div>

<div class="split-body">
<div class="left">

### 考え方の例

- **到達目標までの思考/試行の"過程"** を、<br>AIに肩代わりさせない
  - 学生が自ら思考する部分をAIが代替するのはNG
  - 非本質・既習の部分に、道具として使うのは許容
  - 課題をより面白くする上で使うのは許容

<div class="callout-green">守るべきは目標に至るまでの思考。<br>手段（AI可否）は目標から逆算して決める。</div>

</div>
<div class="right">

### 足場かけ・足場はずし

- 序盤は**足場かけ**（AIで理解を支える）
- 終盤は**足場はずし**（AIなしで到達を確認）
- 「いつ・どこで使うか」を**学習段階で変える**
  - どこまでAIを使ってよいかを**授業・課題毎に明示**

### 目標達成

- 到達目標や評価を再考すべき場合もある
  - より遠くまで行ける可能性

<div class="srcline">学部生か大学院生か、最初からか後半か ── 文脈で判断は変わる</div>

</div>
</div>

<div class="takeaway">AIは良いか悪いか、では無く、デザインの問題</div>

<!--
【メモ】第1回 Session 3「守りの設計」の再掲。①守る／②変える の相談で開く。
-->

---

<!-- _class: fig -->

<div class="page-title">MITの科目改善フロー</div>

## MIT式、AIの課題改善フロー ── 課題を「AI対応に」作り変える

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:8px;">
<div style="flex:1; min-width:0; text-align:center;">
<img src="./src/fig08-mit-flow.png" alt="MIT式 AIの課題改善フロー：授業計画の開始→①既存課題をAIに入力し回答を生成→②AIの回答を分析・評価→③AIとの対話で深掘り→④課題の限界と必要性を把握" style="height: 380px; width: auto; max-width: 100%;">
</div>
<div style="flex:0 0 30%; background:var(--accent-soft); border:1.5px solid #c2e0db; border-left:5px solid var(--accent); border-radius:10px; padding:14px 17px; font-size:18px; line-height:1.62; color:#234;">
<strong style="color:var(--accent-dark);">重要な原則</strong><br>
・AI利用ポリシーと根拠を<strong>事前に</strong>学生へ明確に伝える<br>
・全学生への<strong>公平なAIアクセス</strong>とプライバシー配慮を担保する<br><br>
<span style="font-size:15px; color:#5a6764;">類似の情報は阪大HPにも：<br><a href="https://www.tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html" style="color:var(--accent); word-break:break-all;">tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html</a></span>
</div>
</div>

<div class="takeaway">「AIで解けない課題」探しより、「AIを使ってこそ深まる課題」へ作り変える</div>

<!--
【メモ】第1回の再掲。手順書②のシナリオ1はこのフローをそのまま手順にしている。
-->

---

<!-- _class: summary -->

<div class="page-title">AI利用ポリシーの共有</div>

## 課題に「AIをどこまで使ってよいか」を書く ── 学生と事前に共有する7つの問い

<style scoped>
  section .qlist { display:grid; grid-template-columns:1fr 1fr; gap:10px 22px; margin-top:12px; }
  section .qlist .qi { display:flex; gap:11px; align-items:flex-start; font-size:19px; line-height:1.45; background:#fff; border:1.5px solid #dde6e4; border-left:5px solid var(--accent); border-radius:10px; padding:11px 16px; }
  section .qlist .qi .qn { flex:none; font-weight:800; color:#fff; background:var(--accent); border-radius:999px; width:25px; height:25px; line-height:25px; text-align:center; font-size:15px; }
  section .qlist .qi > span.qtxt { flex:1; min-width:0; }
  section .qlist .qi.full { grid-column:1 / -1; }
</style>

<div class="callout-green">事前に、授業での<strong>生成AI利用ポリシー</strong>を学生と共有しておく</div>

<div class="qlist">
<div class="qi"><span class="qn">1</span><span class="qtxt">AIの使用が<strong>許可／禁止されるのはいつ・なぜ</strong>か？</span></div>
<div class="qi"><span class="qn">2</span><span class="qtxt">AIとの<strong>ブレインストーミング</strong>はカンニングにあたるのか？</span></div>
<div class="qi"><span class="qn">3</span><span class="qtxt">AIはこの授業で学習を<strong>強化／妨げ</strong>うるのか？</span></div>
<div class="qi"><span class="qn">4</span><span class="qtxt">許可する場合、学生は<strong>使ったプロンプトを提出</strong>すべきか？</span></div>
<div class="qi"><span class="qn">5</span><span class="qtxt">AIの使用は、どのように<strong>クレジット（明記）</strong>すべきか？</span></div>
<div class="qi"><span class="qn">6</span><span class="qtxt">AIの<strong>限界</strong>についての注意喚起</span></div>
<div class="qi full"><span class="qn">7</span><span class="qtxt"><strong>AI検出ツール</strong>の使用方針 ── <strong>検出率は100%ではない</strong>ため、結果を盲信せず参考にとどめる</span></div>
</div>

<div class="srcline"><b>出典:</b> Bowen &amp; Watson, AAC&amp;U 2024 ／訳書『AI時代の大学教育（Teaching with AI）』</div>

<div class="takeaway">「禁止／許可」を曖昧にしない ── 課題ごとに、AIの使い方を言葉にして示す</div>

<!--
【メモ】第1回の再掲。手順書①のシナリオ4（方針文）はこの7つを観点にしている。
-->

---

<!-- _class: summary -->

<div class="page-title">ポリシーの文例</div>

## そのまま使える ── シラバスに載せる「生成AIポリシー」の例

<style scoped>
  section .policy { font-size:18px; line-height:1.6; background:#F2F7F6; border-left:6px solid var(--accent); border-radius:8px; padding:13px 22px; margin:8px 0; color:#2a2d33; }
  section .policy p { margin:0 0 10px; }
  section .policy p:last-child { margin-bottom:0; }
  section .policy strong { color:var(--accent-dark); }
</style>

<div class="policy">
<p>このコースの目標の一つは、<strong>効果的に書き、伝える力</strong>を学ぶことです。これは練習が要ります。AIで素早く生産することも期待しますが、<strong>そもそも質の高い文章を判断できる力</strong>が要ります。</p>
<p>そのため<strong>コースの前半は、AIのサポートを一切禁止</strong>します。この苦労やもどかしさは、ゲームのレベル上げの訓練のようなもの。自分の手で取り組む人が、力を得ます。</p>
<p>一方<strong>後半は、特定の状況下でAIの使用を認める</strong>ことがあります。その際は、使ったプロンプトと応答の提出を求める場合があります。</p>
<p>AIリテラシーは重要な新しいスキルです。ただしAIは<strong>「幻覚」── 事実のように見えるものを生成</strong>することに注意。利点と危険の両方を、批判的に考える必要があります。最終的な責任は、提出する学生本人にあります。</p>
</div>

<div class="srcline"><b>出典:</b> Bowen &amp; Watson, AAC&amp;U 2024（課題における記載例）</div>

<div class="takeaway">前半は「足場」を外して鍛え、後半は使い方を学ぶ 、など── 設計段階で線を引く</div>

<!--
【メモ】第1回の再掲。①守る の相談で開く。
-->

---

<!-- _class: summary -->

<div class="page-title">Gem を配る</div>

## つくった Gem・Notebook を「同僚や学生に配れる状態」にする手順

<div class="sections">

<div class="sec-box">

### Gem（自分専用の Gemini）

<div class="steps">
<div class="step"><span class="sn">1</span><span>Gemini で［Gem を表示］→［Gem を作成］（直接URL：gemini.google.com/gems/create）</span></div>
<div class="step"><span class="sn">2</span><span>「名前」「指示」を書き、知識に<b>PC かドライブのファイル</b>を添付 →［保存］</span></div>
<div class="step"><span class="sn">3</span><span>［共有］→「組織内」＋「閲覧者／編集者」→［リンクをコピー］</span></div>
</div>

</div>

<div class="sec-box">

### Gemini Notebook

- ドライブのドキュメント／スライドを**直接ソース**にできる（1ノートブック 50 まで）
- 組織内の共有は**人数無制限**。学生には「閲覧者」で
- 提出は**共有リンク**。Gem は**指示文の全文**も添える（受け取った人が同じものを作れる）

</div>

</div>

<div class="takeaway">「共有の権限まで」が現物。リンクが学生のアカウントで開けるかを、必ず1回確かめる</div>

<!--
【メモ】③④⑤の共有設定の相談で開く。Gem の導線は植草 FACTS（講師が実機確認済み）どおり。
-->

---

<!-- _class: summary -->

<div class="page-title">Workspace Studio の要点</div>

## テスト実行は「本物」が動く ── 自分宛て・テスト用文書で試してから、オンにする

<div class="sections">

<div class="sec-box">

### 手順

<div class="steps">
<div class="step"><span class="sn">1</span><span>studio.workspace.google.com でフローを作る（開始条件 → Gemini の処理 → 出力先）</span></div>
<div class="step"><span class="sn">2</span><span>［テスト実行］は<b>保存前でも</b>できる。スケジュール型は［起動］、手動型はデータを入れて［実行］</span></div>
<div class="step"><span class="sn">3</span><span>通ったらエディタ下部の［オンにする］。止めるときはフロー横の［その他］→［オフにする］</span></div>
</div>

</div>

<div class="sec-box">

### 注意

- **テスト実行は本物の動作**：メールを実際に送り、予定を実際に作り、文書を実際に書き換える
- 失敗の見分け：**赤**「テスト完了」＝設定の不足／**黄**「完了できませんでした」＝データ側の問題
- 実行履歴は左メニューの［アクティビティ］。問題があると赤い点が出る

</div>

</div>

<div class="srcline"><b>出典:</b> Google Workspace Studio ヘルプ（テスト実行／オンにする／アクティビティ）。植草SD研修の調査メモ FACTS_ADD より</div>

<div class="takeaway">「毎回やっている作業」を1本だけ。同僚に渡せる手順書まで作れば、部署の仕組みになります</div>

<!--
【メモ】⑤業務 の相談で開く。日本語UIのボタン表記は揺れがあるので「にあたるボタン」で案内する。
-->
