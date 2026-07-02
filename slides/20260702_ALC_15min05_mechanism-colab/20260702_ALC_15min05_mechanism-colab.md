---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用術 05</div><img class="hdr-logo" src="../assets/15min.png" alt="ALC 15 mins セッション">'
footer: ''
style: |
  :root { --hdr-left-w: 23%; --accent: #C8611C; --accent-dark: #8f3f12; --accent-soft: #FBEAD9; }
  /* 中央帯：左タブよりleftを小さくして左寄せ */
  section .page-title { left: 20%; width: 40%; }
  /* ヘッダー下の線：header を前面(z-index 13)に上げ、全幅で引く */
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  section.cover-hero { --hdr-left-w: 23%; }
  section.cover-hero .title-event { color: #C8611C; }
  /* ===== 「次の1語を予測」フロー（入力→予測→つなげる） ===== */
  .recipe-flow { display: flex; align-items: stretch; gap: 10px; margin: 16px 0 12px; }
  .recipe-flow.big { margin: 22px 0; }
  .recipe-flow .arrow { align-self: center; font-size: 30px; font-weight: 800; color: #C8611C; }
  .rf-box { flex: 1; border-radius: 12px; padding: 12px 16px; border: 2px solid #ccc; }
  .rf-box .rf-tag { font-size: 16px; font-weight: 700; display: inline-block; padding: 2px 12px; border-radius: 11px; color: #fff; margin-bottom: 8px; }
  .rf-box .rf-body { font-size: 19px; line-height: 1.4; }
  .recipe-flow.big .rf-box .rf-body { font-size: 21px; }
  .rf-trigger { border-color: #1A6BB0; background: #EAF2FB; } .rf-trigger .rf-tag { background: #1A6BB0; }
  .rf-ai { border-color: #C8611C; background: #FBEEE6; } .rf-ai .rf-tag { background: #C8611C; }
  .rf-out { border-color: #0F766E; background: #E7F3F0; } .rf-out .rf-tag { background: #0F766E; }
  .rf-loop { border-color: #6b7280; background: #F4F5F7; } .rf-loop .rf-tag { background: #6b7280; }
  /* ===== プロンプト（言葉でたのむ）枠 ===== */
  .prompt { background: #EAF2FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; font-size: 19px; line-height: 1.5; }
  .prompt .lab { font-weight: 700; color: #1A6BB0; margin-right: 6px; }
  /* ===== できあがりイメージ（結果モック） ===== */
  .demo-card { max-width: 720px; margin: 16px auto 0; border: 1px solid #d3d7dd; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 7px rgba(0,0,0,.09); }
  .demo-card .dc-bar { background: #eef1f4; font-size: 16px; font-weight: 700; color: #3a3f45; padding: 6px 16px; border-bottom: 1px solid #e0e4e9; }
  .demo-card .dc-body { font-size: 18px; line-height: 1.6; padding: 12px 18px; background: #fff; color: #2a2d33; text-align: left; }
  .demo-card .dc-note { font-size: 16px; color: #8a4b00; }
  /* ===== 今回の構成（4ステップアジェンダ：時間ラベル＋色ピル＋箇条書き） ===== */
  .agenda { display: flex; flex-direction: column; gap: 9px; margin-top: 2px; }
  .agenda-row { display: flex; align-items: center; gap: 20px; border: 1.5px solid #dfe3e8; border-radius: 14px; padding: 8px 22px; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
  .agenda-left { flex: 0 0 210px; display: flex; align-items: center; gap: 14px; }
  .agenda-step { font-size: 30px; font-weight: 800; color: var(--accent); flex: 0 0 auto; }
  .agenda-tl { flex: 1; }
  .agenda-time { font-size: 16px; color: #5a5f66; font-weight: 700; margin-bottom: 4px; }
  .agenda-time .min { color: #A6192E; }
  .agenda-pill { font-size: 22px; font-weight: 800; text-align: center; border-radius: 10px; padding: 5px 0; line-height: 1.1; }
  .pill-lecture { background: #D9EAD3; color: #38761D; }
  .pill-hands { background: #FBE0E5; color: #A6192E; }
  .pill-talk { background: #E7E9ED; color: #3a3f45; }
  .agenda-list { flex: 1; font-size: 19px; line-height: 1.45; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 3px 0; position: relative; padding-left: 1.1em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #8a8f96; font-weight: 700; }
  /* ===== sec-box 内に QR を右寄せ ===== */
  .sec-qr-row { display: flex; align-items: center; gap: 16px; }
  .sec-qr-row .sq-text { flex: 1; min-width: 0; }
  .sec-qr-row .sq-qr { flex: 0 0 auto; text-align: center; }
  .sec-qr-row .sq-qr img { width: 104px; height: 104px; display: block; background: #fff; border: 1px solid #dfe3e8; border-radius: 8px; padding: 4px; }
  .sec-qr-row .sq-url { flex: 0 0 150px; text-align: right; font-size: 17px; font-weight: 700; line-height: 1.3; overflow-wrap: anywhere; word-break: break-all; }
  .sec-qr-row .sq-url a { color: #1A6BB0; text-decoration: none; }
  /* ===== 公式定義の引用ブロック（出典リンク付き） ===== */
  .gquote { font-size: 19px; line-height: 1.5; background: #F4F7FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; margin: 8px 0 6px; color: #2a2d33; }
  .gquote strong { color: #1A6BB0; }
  .gquote .src { display: block; margin-top: 6px; font-size: 15px; color: #5a5f66; }
  .gquote .src a { color: #1A6BB0; text-decoration: none; word-break: break-all; }
  /* ===== 右上の小さな誘導ノート ===== */
  .tr-note { position: absolute; top: 74px; right: 40px; width: 300px; background: #FFF6E6; border: 1.5px solid #F0A500; border-radius: 10px; padding: 7px 14px; font-size: 15px; line-height: 1.4; color: #7a4a00; z-index: 6; }
  .tr-note b { color: #C0182B; }
  /* ===== データ利用の【お願い】注記 ===== */
  .use-note { font-size: 16px; line-height: 1.5; color: #6b6f76; background: #F4F5F7; border-radius: 8px; padding: 9px 16px; margin-top: 14px; }
  .use-note strong { color: #8f3f12; }
  /* ===== 2×2 グリッド（sec-box を縦積みでなく2列に・見切れ防止） ===== */
  section.grid2 .sections { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  section.grid2 .sec-box { padding: 9px 20px; }
  section.grid2 .sec-box h3 { margin-bottom: 4px; }
  section.grid2 .sec-box li { margin: 1px 0; }
  /* ===== 流暢さ≠正しさ・ハルシネーション ===== */
  .red { color: #C0392B; font-weight: 700; }
  /* ===== 立場別ユースケース：学部生／大学院生／教職員の3列一覧 ===== */
  .uc-grid { display: flex; gap: 14px; margin-top: 12px; align-items: stretch; }
  .uc-col { flex: 1; background: #fff; border: 1.5px solid #e3e8f0; border-radius: 12px; padding: 11px 16px 6px; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
  .uc-col .uc-h { font-size: 19px; font-weight: 800; color: #fff; border-radius: 8px; padding: 5px 0; text-align: center; margin-bottom: 9px; }
  .uc-col.col-ug .uc-h { background: #1A6BB0; }
  .uc-col.col-grad .uc-h { background: #C8611C; }
  .uc-col.col-staff .uc-h { background: #0F766E; }
  .uc-col ul { margin: 0; padding-left: 1.1em; list-style: disc; }
  .uc-col li { font-size: 18px; line-height: 1.4; margin: 9px 0; }
  .uc-col li strong { color: #8f3f12; }
  /* ===== トークン・チップ（文字→かけら→数） ===== */
  .tokrow { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: center; margin: 12px 0; }
  .tok { font-size: 22px; font-weight: 700; background: #EAF2FB; border: 1px solid #cfe0f2; border-radius: 8px; padding: 6px 14px; color: #1f3a52; }
  .tok.num { background: #FBEEE6; border-color: #f0d3bf; color: #6b3a1a; font-family: monospace; }
  .tokarrow { font-size: 24px; font-weight: 800; color: #9aa0a6; }
  /* ===== Attention チップ（注目の可視化） ===== */
  .attn { display: flex; flex-wrap: wrap; gap: 9px; align-items: center; justify-content: center; margin: 14px 0 6px; }
  .wchip { font-size: 24px; font-weight: 700; border-radius: 9px; padding: 7px 16px; background: #f1f3f4; color: #3a3f45; border: 2px solid #e0e4e9; }
  .wchip.focus { background: #C8611C; color: #fff; border-color: #8f3f12; }
  .wchip.hot { background: #FBEEE6; color: #8f3f12; border-color: #C8611C; }
  /* ===== 成長ステージ（チェックポイントごとの生成例） ===== */
  .growth { max-width: 880px; margin: 12px auto 0; display: flex; flex-direction: column; gap: 8px; }
  .grow-row { display: flex; align-items: center; gap: 12px; }
  .grow-badge { flex: 0 0 188px; font-size: 17px; font-weight: 800; color: #fff; border-radius: 9px; padding: 8px 12px; text-align: center; line-height: 1.25; }
  .grow-text { flex: 1; background: #fff; border: 1px solid #e0e4e9; border-radius: 9px; padding: 9px 15px; font-size: 19px; line-height: 1.45; color: #2a2d33; font-family: "Hiragino Mincho ProN", "YuMincho", serif; }
  .gb0 { background: #9aa0a6; } .gb1 { background: #d98a3a; } .gb2 { background: #C8611C; } .gb3 { background: #8f3f12; }
  /* ===== メニュー（今日のノート3つ）カード ===== */
  .menu { display: flex; gap: 14px; margin-top: 12px; }
  .mcard { flex: 1; background: #fff; border: 1.5px solid #e3e8f0; border-radius: 14px; padding: 13px 16px; box-shadow: 0 1px 5px rgba(0,0,0,.07); display: flex; flex-direction: column; }
  .mcard .mc-tag { font-size: 15px; font-weight: 800; color: #fff; border-radius: 8px; padding: 3px 12px; align-self: flex-start; margin-bottom: 8px; }
  .mc-a .mc-tag { background: #1A6BB0; } .mc-b .mc-tag { background: #C8611C; } .mc-c .mc-tag { background: #0F766E; }
  .mcard .mc-h { font-size: 21px; font-weight: 800; color: #202124; line-height: 1.3; margin-bottom: 6px; }
  .mcard .mc-b { font-size: 17px; line-height: 1.45; color: #3c4043; flex: 1; }
  .mcard .mc-l { font-size: 16px; margin-top: 8px; }
  .mcard .mc-l a { color: #1A6BB0; font-weight: 700; text-decoration: none; }
  /* ===== ステップ枠（番号つき） ===== */
  .stepcol { display: flex; flex-direction: column; gap: 9px; }
  .stepc { display: flex; align-items: flex-start; gap: 12px; background: #fff; border: 1.5px solid #e3e8f0; border-radius: 10px; padding: 9px 14px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .stepc .sn { flex: 0 0 30px; height: 30px; border-radius: 50%; background: var(--accent); color: #fff; font-weight: 800; font-size: 18px; display: flex; align-items: center; justify-content: center; }
  .stepc .sb { font-size: 19px; line-height: 1.4; color: #2a2d33; }
  .stepc .sb b { color: #8f3f12; }
  .stepc code { background: #f4f5f7; border-radius: 5px; padding: 1px 7px; font-size: 17px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">AIの“なかみ”を、<span class="ss-tune" style="color:#A6192E !important">自分の手で</span>動かしてみる</div>
<div class="title-big">生成AIの仕組み<small>と</small><br> Google Colab</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">ALC 15-min sessions ・ 第5回　｜　15-min × 3<br>学びを変える！研究を深める！生成AI活用術</div>
<div class="title-date">2026/7/2（木）　難易度 ★★☆</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!--
- ALC 15 minsセッション第5回、最終回へようこそ。今日のテーマは「生成AIの仕組み」と「Google Colab」。
- これまでは"AIを使う"回でした。最終回は一歩中に踏み込んで、"AIの中身"を自分の手で動かして体感します。
- 進め方は、まず動かす(いちもじGPT)→なぜ動くかを15分で解説→Colabで色々作ってみる→気づきを共有、の4ステップ。
- 受講者はAIもColabも初心者でOK。コードが書けなくても、上から順に実行するだけで体験できます。
-->

---

<!-- _class: summary -->

<div class="page-title">開始の前に</div>

## 今日の研修をはじめる準備（3つ）

<div class="sections">

<div class="sec-box">

### ① Google WSにログイン出来るか＆Colabを開けるかご確認下さい

- PCで千葉大学 **Google Workspace** にログイン
- ブラウザで **<code><a href="https://colab.research.google.com/">colab.research.google.com</a></code>** を開ける状態に
- 今日のノートは **この大学アカウント**で動かします

</div>

<div class="sec-box">

### ② slido

<div class="sec-qr-row">
<div class="sq-text">

- **slido** にアクセス（QR・右にURL）
- コード入力なら **<code>ALC-AI2-05</code>**
- オンラインの方も同じ slido へ

</div>
<div class="sq-qr">
<img src="./src/slido-qr.png" alt="slido QRコード">
</div>
<div class="sq-url"><a href="https://app.sli.do/event/ov6zxx76xpTBm8wTrAFRZB">app.sli.do/event/ov6zxx76xpTBm8wTrAFRZB</a></div>
</div>

</div>

</div>

<div class="takeaway"><small>※ slido/ワーク教材への入力情報のうち【個人情報や機微情報を除いた】情報を、アカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。<br>個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</small></div>

<!--
- 開始前の準備3つ。①千葉大Workspaceにログインし、ブラウザでColab(colab.research.google.com)を開ける状態に。②slidoにアクセス(質問・議論・アンケート用)。
- 今日のノートブックは大学アカウントでも個人のGoogleアカウントでも動きます。ColabのGemini機能の一部は年齢・地域・組織設定に依存するので、表示されない場合は声をかけてください。
- slido等の入力データの取り扱い(個人情報を除き業務改善・調査研究に利用)を明示。第1回と同じ運用。
-->

---

<!-- _class: summary -->

<div class="page-title">今回の構成</div>

## いつもと違います： まず動かす → 仕組み → つくる → 共有（4ステップ）

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-step">①</div>
<div class="agenda-tl">
<div class="agenda-time">最初の<span class="min">約10</span>分</div>
<div class="agenda-pill pill-hands">体験</div>
</div>
</div>
<div class="agenda-list">

- Colab を開いて、**「いちもじGPT」をまずは、何も考えずに実行**
- とても小さな(生成?)AIを、一からつくってみる体験

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-step">②</div>
<div class="agenda-tl">
<div class="agenda-time">つぎの<span class="min">15</span>分</div>
<div class="agenda-pill pill-lecture">講義</div>
</div>
</div>
<div class="agenda-list">

- **Google Colab** とは何か／使い方の勘所
- **生成AIの仕組み**＝「次の1語を予測してつなげる」を解説

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-step">③</div>
<div class="agenda-tl">
<div class="agenda-time">つぎの<span class="min">15</span>分</div>
<div class="agenda-pill pill-hands">体験</div>
</div>
</div>
<div class="agenda-list">

- 大学の**学習・研究・業務**に合う形で、Colab で色々つくる
- **教育オープンデータ**で可視化・分析・機械学習を体験

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-step">④</div>
<div class="agenda-tl">
<div class="agenda-time">最後の<span class="min">15</span>分</div>
<div class="agenda-pill pill-talk">議論</div>
</div>
</div>
<div class="agenda-list">

- AIが出した結果を**どう解釈するか**を考える
- 気づき・使えそうなことを slido で共有

</div>
</div>

</div>

<div class="takeaway">今日のゴール：生成AIの“なかみ”を体で理解し、同時に、Colab も使える道具にしましょう</div>

<!--
- 60分の流れ。①最初の約10分は手を動かす(いちもじGPTを実行)。②次の15分が座学(ColabとAIの仕組み)。③次の15分でColabで色々作る(教育データ分析)。④最後15分で結果の解釈と気づきの共有。
- 今日は「全部理解する」より「まず動かして体感する」が目的。コードが分からなくても、上から順に▶を押すだけでOK。
- Zoom参加者も反応(👍やってる／♥️やってみたい)で参加を。
-->

---

<!-- _class: divider -->

<div class="chapter-num">STEP ① ・ 約10分 ・ 体験</div>

# まず動かしてみましょう：いちもじGPT

## 学びを変える！研究を深める！生成AI活用術

<!--
- STEP①。説明の前に、まず手を動かす。ChatGPTと同じ仕組み(Transformer)のミニAIを、Colabで一から動かしてみる。
- 「いちもじGPT」は、文字を1つずつ予測して文章を作る最小の生成AI。今は意味が分からなくてOK。あとで解説します。
-->

---

<!-- _class: message -->

# 仕組みを知ると、リスクも利点も分かるかも。<br>まず “AIを一から” 作ってみる

## ChatGPT の超ミニverを、自分の Colab で

<!--
- いきなり仕組みの話をする前に、まず動かす。体験してから解説した方が、断然わかりやすい。
- これから開くのは「いちもじGPT」。ChatGPTの心臓部と同じTransformerを、100行ほどのコードで再現したもの。
-->

---

<!-- _class: fig -->

<div class="page-title">いちもじGPTとは</div>

## 文字を1つずつ予測して、文章を作る最小のAI

<div class="recipe-flow big">
<div class="rf-box rf-trigger">
<span class="rf-tag">読む</span>
<div class="rf-body"><strong>ここまでの文章</strong><br>「猫がマットの上で」</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-ai">
<span class="rf-tag">予測する</span>
<div class="rf-body"><strong>次の1文字</strong>を当てる<br>「寝」(35%)…</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-out">
<span class="rf-tag">つなげる</span>
<div class="rf-body">選んで末尾に足す<br>→ また予測…の<strong>くりかえし</strong></div>
</div>
</div>

<div class="caption">教材：アンドレイ・カーパシー氏の nanoGPT を土台に作成（学習データ＝夏目漱石『こころ』）</div>

<div class="takeaway">たった100行ほどのコードに、生成AIの考え方のエッセンシャルが入っている</div>

<!--
- いちもじGPTの正体。やっていることは「ここまでの文章を読んで、次に来る1文字を予測し、つなげる」。これを延々と繰り返すだけ。
- 学習データは夏目漱石『こころ』をひらがなにしたもの。ChatGPTのDecoder-Only Transformerと同じ仕組みを最小化してある。
- これがそのまま、あとで解説する「生成AIの仕組み」の実物になります。
-->

---

<!-- _class: summary -->

<div class="page-title">手順（ハンズオン）</div>

## いちもじGPTを動かす（上から順に▶）

<div class="stepcol">
<div class="stepc"><span class="sn">1</span><span class="sb"><b>Colabのリンク</b>を開く（slidoで配布）</span></div>
<div class="stepc"><span class="sn">2</span><span class="sb">メニュー <code>ランタイム → ランタイムのタイプを変更</code> で <b>GPU</b> を選ぶ(T4)</span></div>
<div class="stepc"><span class="sn">3</span><span class="sb">セルを<b>上から順に</b> ▶を押して実行（または <code>Shift+Enter</code>）</span></div>
<div class="stepc"><span class="sn">4</span><span class="sb">途中の<b>データ選択</b>で、AIに覚えさせる文章を選び <b><code>input.txt</code> をアップロード</b>（しなければサンプルで進む）</span></div>
<div class="stepc"><span class="sn">5</span><span class="sb">学習が終わったら、<b>文章を生成</b>して触ってみる</span></div>
</div>

<div class="callout-yellow" style="margin-top:14px;">
分からない用語があっても <strong>止まらないで</strong>。まずは最後まで動かすのが目的。
</div>

<div class="takeaway">迷ったら「ランタイムを再起動して、もう一度上から▶」。失敗してOK</div>

<!--
- 手順は5つ。①slidoで配るColabリンクを開く。②ランタイムのタイプをGPUに(学習が速くなる)。③上から順に▶で実行。
- ④途中に「学習させる文章を選ぶ」セルが出る。シェイクスピア/夏目漱石などから選び、自分のテキストで試したい人は input.txt をアップロード。何もアップロードしなければ、選んだサンプルデータでそのまま進む。ここで“AIに何を覚えさせるか”を決めているのがポイント。
- ⑤学習後に文章を生成して遊ぶ。
- 中身の理解は不要。"言われるがまま"最後まで動かすことが目的。エラーが出たら「ランタイム→ランタイムを再起動」して、もう一度上から実行。実演は当日Colabの実画面で行う(録画は使わない)。
-->

---

<!-- _class: summary -->

<div class="page-title">できあがり</div>

## 学習が進むほど、AIは“ことば”を覚えていく

<div class="growth">
<div class="grow-row"><div class="grow-badge gb0">学習0回（まっさら）</div><div class="grow-text">。 」ゝ く ｜ ぁゔ ヽ — でたらめな文字の羅列</div></div>
<div class="grow-row"><div class="grow-badge gb1">500回ごろ</div><div class="grow-text">の して のに きた わたし の とき — ひらがなは並ぶが意味は不明</div></div>
<div class="grow-row"><div class="grow-badge gb2">2000回ごろ</div><div class="grow-text">わたし は その ひと の こと を かんがえて いた — 単語・文らしくなる</div></div>
<div class="grow-row"><div class="grow-badge gb3">学習後</div><div class="grow-text">わたし は その とき はじめて せんせい の かお を みた の である — 漱石“っぽく”なる</div></div>
</div>

<div class="caption">学習データは「シェイクスピアの全集」か、夏目漱石の『こころ』を<strong>ひらがなの分かち書き</strong>にしたもの。<br>だから出力も英語だけか、漢字なし・かな主体（出力例のイメージ）</div>
<div class="caption">最初にエンコードしており、そこで知らない文字は出てきません。 
<br>(なお、通常は、1文字ずつではなく、token単位で行われています。)</div>


<div class="takeaway">「予測のくりかえし」だけで、ことばが立ち上がってくる — これが生成AIの正体</div>

<!--
- いちもじGPTの面白さ。最初はでたらめな記号の羅列。学習を重ねると、ひらがなの羅列→単語→文と、だんだん日本語を獲得していく。
- ノートブックでは、各学習段階(チェックポイント)の生成を比較できます。AIが"賢くなっていく"様子をその場で見られる。
- ここで体験した「予測のくりかえしで文章ができる」が、次の解説の核心です。
-->

---

<!-- _class: divider -->

<div class="chapter-num">STEP ② ・ 15-min ・ 講義</div>

# Google Colab と AIの仕組み

## いま動かしたものは、何だったのか？

<!--
- STEP②。ここから15分は座学。まず「Google Colabとは何か」、続いて「生成AIの仕組み」を、いま動かした体験に結びつけて解説します。
-->

---

<!-- _class: summary feat3 -->

<div class="page-title">Google Colab とは</div>

## ブラウザだけで Python が動く、無料の実験室(lab)

<div class="gquote">
「Colab（正式名称 Colaboratory）では、<strong>ブラウザ上で Python を記述、実行できます</strong>。<br>環境構築が不要・GPU に料金なしでアクセス・簡単に共有。」
<span class="src">出典：Google Colab 公式（よくある質問）<a href="https://research.google.com/colaboratory/faq.html">research.google.com/colaboratory/faq.html</a></span>
</div>

<div class="sections">

<div class="sec-box">

### ① 準備いらず

- 自分のPCに**何もインストールせず**、**Googleの環境を借りて**ブラウザで動かす

</div>

<div class="sec-box">

### ② 無料でGPU

- 機械学習に必要な**GPUを無料で**使えて、手元のPCの性能に**関係ない**

</div>

<div class="sec-box">

### ③ 1つにまとまる

- **コード＋説明＋結果**を1冊に→**Driveに保存**・Googleドキュメント感覚で**共有**

</div>

</div>

<div class="takeaway">今は、Geminiによる分析支援も利用可能</div>

<!--
- Google Colabとは、一言で「ブラウザの中でPythonを書いて動かせる、Googleの無料クラウド環境」。自分のPCに何も入れず、ネットの先のGoogleのマシンを借りて計算する。
- 強みは3つ。①環境構築不要、②GPUが無料(さっきの学習もこれが効いた)、③コード+説明文+結果を1つのノートにまとめてDriveに保存・共有できる。
- 出典はColab公式FAQ。学生・データサイエンティスト・研究者の作業を効率化、と公式が明記。
-->

---

<!-- _class: summary grid2 -->

<div class="page-title">Colabの使い方</div>

## 使う上で覚えるのは、この4つだけ

<div class="sections">

<div class="sec-box">

### 実行する

- セル左の **▶** か **<code>Shift+Enter</code>**
- **上から順に**実行するのが基本
- 結果（グラフ・エラー）はセルの下に出る

</div>

<div class="sec-box">

### つまずいたら

- メニュー **<code>ランタイム → ランタイムを再起動</code>** <br>→ もう一度上から▶
- 速くしたい計算は **GPU** に切り替え

</div>

<div class="sec-box">

### データを入れる

- 左の **📁（ファイル）** にドラッグ、または <code>files.upload()</code>
- ※ 入れたファイルは**セッション終了で消える**

</div>

<div class="sec-box">

### 残す・共有する

- **Google Drive に自動保存**（コピーを保存）
- リンクで**共有**（コメント・共同編集も）

</div>

</div>

<div class="takeaway">無料枠は最長12時間・放置すると切断。こまめに ▶ と保存を</div>

<!--
- Colab操作の勘所。①実行は▶かShift+Enter、上から順に。②動かなくなったら「ランタイムを再起動」して上から実行。重い計算はGPUに。
- ③データは左のファイルパネルにドラッグかfiles.upload()。ただしアップロードしたファイルはセッションが切れると消えるので、大事なものはDriveに。④ノートはDriveに保存、リンクで共有できる。
- 無料枠の注意:最長12時間、操作しないと切断される(具体的分数は非公開)。リソース上限も変動する。長時間放置しないこと。
-->

---

<!-- _class: message -->

# 生成AIの正体は<br>「次の1語の、予想ゲーム」

## さっき動かした、いちもじGPTそのもの

<!--
- ここから生成AIの仕組み。難しそうに見えるが、芯はとてもシンプル。「次に来る1語(トークン)を予測する」を繰り返しているだけ。
- これは、さっき動かしたいちもじGPTそのもの。体験を思い出しながら聞いてください。
-->

---

<!-- _class: fig -->

<div class="page-title">仕組み①　次の語を予測</div>

## 1語ずつ予測して、つなげていく（自己回帰）

<div class="recipe-flow big">
<div class="rf-box rf-trigger">
<span class="rf-tag">入力</span>
<div class="rf-body">ここまでの文章を読む<br>「今日は良い」</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-ai">
<span class="rf-tag">予測</span>
<div class="rf-body">次の語の<strong>確率</strong>を出す<br>天気60% / 日20% …</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-out">
<span class="rf-tag">出力</span>
<div class="rf-body">1語選んで足す<br>「今日は良い<strong>天気</strong>」</div>
</div>
<div class="arrow">↩</div>
<div class="rf-box rf-loop">
<span class="rf-tag">くりかえし</span>
<div class="rf-body">新しい文を入力に<br>また次の語を予測</div>
</div>
</div>

<div class="takeaway">一度に全部書くのではなく「1語ずつの予測」を積み重ねている＝だから毎回少し変わる</div>

<!--
- 生成AIの中核(1)。「ここまでの文章」を入力に、「次に来る語」の確率を計算し、1語選んで末尾に足す。その新しい文をまた入力にして、次の語を予測…の繰り返し。これを自己回帰という。
- 重要:一度の計算で文章全体ができるのではなく、1語ずつの予測の積み重ね。だから同じ問いでも毎回少し違う答えになる(確率で選ぶため)。
- いちもじGPTは「次の1文字」、ChatGPTは「次のトークン(語のかけら)」を予測。粒度が違うだけで仕組みは同じ。
-->

---

<!-- _class: summary -->

<div class="page-title">仕組み②　言葉を数に</div>

## コンピュータは「数」しか分からない

<div class="tokrow">
<span class="tok">今日は</span>
<span class="tok">良い</span>
<span class="tok">天気</span>
<span class="tokarrow">→</span>
<span class="tok num">[5183]</span>
<span class="tok num">[402]</span>
<span class="tok num">[1290]</span>
<span class="tokarrow">→</span>
<span class="tok num">ベクトル(意味の数列)</span>
</div>

<div class="sections">

<div class="sec-box">

### トークン化

- 文章を<strong>処理の単位（トークン）</strong>に区切る
- 本物は<strong>サブワード</strong>＝「単語のかけら」単位<br>（文字単位でも完全な単語単位でもない）

</div>

<div class="sec-box">

### 埋め込み（ベクトル）

- 各トークンを**意味を表す数のベクトル**へ
- **似た意味の語ほど近い数**になるよう学習
- さらに「何番目の語か」（位置）も足す

</div>

</div>

<div class="takeaway">言葉を「数」に翻訳して、はじめてAIは計算できる（いちもじGPTのエンコードがこれ）</div>

<!--
- 仕組み(2)。コンピュータは数しか扱えない。だから、まず文章をトークンに区切り、各トークンを数のベクトル(埋め込み)に変換する。
- トークン化:いちもじGPTは1文字=1トークンだったが、本物のGPTは「サブワード(BPE)」という、よく出る語のかたまりを単位にする。"林檎"はひとかたまり、珍しい長い語は複数のかけらに分かれる。
- 埋め込み:似た意味・似た使われ方の語ほど、数の空間で近くに配置されるよう大量テキストから学習。さらにTransformerは語順を直接見ないので、位置情報も足す。
-->

---

<!-- _class: fig -->

<div class="page-title">仕組み③　Transformer</div>

## 心臓部は「Attention（どの語に注目するか）」

<div class="attn">
<span class="wchip hot">魚</span>
<span class="wchip">を</span>
<span class="wchip hot">猫</span>
<span class="wchip">が</span>
<span class="wchip focus">食べた</span>
<span style="font-size:19px;color:#5a5f66;margin-left:10px;">← 「食べた」は、関係の強い<b style="color:#8f3f12;">魚・猫</b>に注目して意味を決める</span>
</div>

<div class="gquote">
Self-Attention＝各語が、文中の<strong>他のすべての語との関連の強さ</strong>を見て意味をつかむ仕組み。離れた語どうしも直接結びつけられる。Transformer は 2017年の論文 <strong>「Attention Is All You Need」</strong>（Vaswani et al., Google）で登場。
<span class="src">出典：Vaswani et al. 2017, arXiv:1706.03762 ／ Google Research Blog（2017）</span>
</div>

<div class="takeaway">GPT＝<strong>G</strong>enerative <strong>P</strong>re-trained <strong>T</strong>ransformer、「次の語の生成」に特化させた応用</div>

<!--
- 仕組み(3)。Transformerの心臓部がSelf-Attention(自己注意)。ある語を処理するとき、文中の他のすべての語と比べて「どの語とどれくらい関係が強いか」を計算し、関係の強い語に注目して意味を決める。
- 例:「魚を猫が食べた」の"食べた"は、"魚"(何を)と"猫"(誰が)に強く注目する。離れた語どうしも直接つなげられるのが革新点。
- Transformerは2017年Googleの論文「Attention Is All You Need」で登場。GPT(Generative Pre-trained Transformer)は、そのTransformerの「デコーダ部分だけ」を使い、次の語の生成に特化させた応用(2018, OpenAI)。
- 用語の入れ子に注意:Transformer=汎用の仕組み、生成AI(GPT)=その一用途。「Transformer=生成AI」ではない。
-->

---

<!-- _class: split -->

<div class="page-title">Transformerの中身</div>

## 「注目 → 考える」を、重ねる

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 362" width="100%" style="max-height:360px">
<g text-anchor="middle" font-family="sans-serif">
<rect x="78" y="10" width="224" height="42" rx="9" fill="#fff" stroke="#5B6068" stroke-width="1.8"/>
<text x="190" y="36" font-size="17" font-weight="700" fill="#33373b">語の並び「猫 が 魚 を」</text>
<text x="190" y="70" font-size="22" font-weight="800" fill="#C8611C">↓</text>
<rect x="52" y="80" width="276" height="48" rx="9" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="2"/>
<text x="190" y="101" font-size="16" font-weight="800" fill="#1A6BB0">① 埋め込み（数のベクトルに）</text>
<text x="190" y="120" font-size="14" fill="#5B6068">＋ 位置情報を足す</text>
<text x="190" y="146" font-size="22" font-weight="800" fill="#C8611C">↓</text>
<rect x="38" y="156" width="304" height="120" rx="11" fill="#FBEEE6" stroke="#C8611C" stroke-width="2.5"/>
<text x="190" y="178" font-size="15" font-weight="800" fill="#8f3f12">思考ブロック（× N 層 くりかえし）</text>
<rect x="56" y="188" width="268" height="36" rx="7" fill="#fff" stroke="#C8611C" stroke-width="1.6"/>
<text x="190" y="211" font-size="15" font-weight="800" fill="#8f3f12">② 自己注意：語どうしの関係を見る</text>
<rect x="56" y="230" width="268" height="36" rx="7" fill="#fff" stroke="#9aa0a6" stroke-width="1.6"/>
<text x="190" y="253" font-size="15" font-weight="700" fill="#3a3f45">③ 変換：情報をまとめ直す</text>
<text x="190" y="294" font-size="22" font-weight="800" fill="#C8611C">↓</text>
<rect x="52" y="304" width="276" height="50" rx="9" fill="#0F766E" stroke="#0b5a54" stroke-width="2"/>
<text x="190" y="326" font-size="16" font-weight="800" fill="#fff">④ 次の1語を予測</text>
<text x="190" y="345" font-size="14" fill="#E7F3F0">候補ごとの確率を出す</text>
</g>
</svg>

</div>
<div class="right">

### いちもじGPTの中身も、これ

- **①埋め込み**で言葉を数に
- **②自己注意**で語どうしの関係を見る
- **③変換**でまとめ直す（②③で1ブロック）
- この**ブロックを何層も重ねる**ほど深く読める
- 最後に**次の1語の確率**を出して選ぶ

<div class="callout-gray">層を重ね、規模を大きくするほど賢くなる </div>

</div>
</div>

<div class="takeaway">埋め込み →〔注意 → 変換〕× N層 → 次の語予測。これが Transformer＝GPT の中身</div>

<!--
- Transformerの中身。やっていることは4段。①埋め込みで言葉を数のベクトルに(前ページ)。②自己注意で語どうしの関係を見る。③変換(フィードフォワード)で情報をまとめ直す。②③のセットが「思考ブロック」で、これを何層も重ねる。④最後に次の1語の確率を出して選ぶ。
- いちもじGPTのコードもまさにこの構造(Embedding→Block×n層→出力)。100行で書ける。層を重ね規模を大きくするほど深く読めるようになる→次の「規模と創発」へ。
- 出典:Vaswani et al. 2017。細部はいちもじGPTのノートで手を動かして確認できます。
-->

---

<!-- _class: split -->

<div class="page-title">仕組み④　学習</div>

## 「中身」はAIが学び、「学び方」は人が決める

<div class="split-body">
<div class="left">

### パラメータ と ハイパーパラメータ

<div class="callout-orange">
<strong>パラメータ</strong>＝AIが学習で決める<strong>無数の数字</strong>（脳の中身・重み）。人は直接いじらない。
</div>
<div class="callout-blue">
<strong>ハイパーパラメータ</strong>＝学習の<strong>進め方の設定</strong>（層の数・学習率など）。<strong>人が決める</strong>。
</div>

<div class="caption">いちもじGPTで触ったダイヤルが、ハイパーパラメータ</div>

</div>
<div class="right">

### 学習＝「次の一語あて」の猛特訓

<div class="callout-gray">
① 次の1語を<strong>予測</strong>する（順伝播）<br>
② 正解とのズレ＝<strong>損失</strong>を測る<br>
③ ズレが減る向きに<strong>重み</strong>を微調整（逆伝播）
</div>

“大量のテキスト × 何百万回”繰り返すのが<strong>事前学習</strong>。

<div class="callout-green">
<strong>学習</strong>は重い“1回”／<strong>推論（生成）</strong>は固定の重みで軽く“反復”
</div>

</div>
</div>

<div class="takeaway">人間が決めるのは「学び方」、AIが学ぶのは「中身」。両者は別物</div>

<!--
- 仕組み(4)。2つの数字を区別。パラメータ=AIが学習で自動調整する無数の数字(脳の中身・重み)。ハイパーパラメータ=層の数・学習率など「学習の進め方の設定」で、人間が学習前に決める。いちもじGPTで触ったダイヤルが後者。
- 学習の正体:①予測(順伝播)→②正解とのズレ=損失を計算→③ズレが減る向きにパラメータを少し更新(逆伝播)。これを大量のテキストで延々繰り返す=事前学習。次の語を当てる練習を通じて賢くなる。
- さっきのいちもじGPTの学習曲線(損失が下がっていくグラフ)が、まさにこれ。
-->

---

<!-- _class: split -->

<div class="page-title">流暢さ ≠ 正しさ</div>

## なぜ、堂々と間違える？（ハルシネーション）

<div class="split-body">
<div class="left">

- 生成AIは「正しさのデータベース」ではなく、<strong>「流暢さ」を鍛えた</strong>モデル
- 文法的に滑らかでも、<span class="red">中身が事実とは限らない</span>。断定口調で堂々と誤る

<div class="callout-yellow">
仕組みに戻ると：AIは「ありそうな続き」を出すだけで、<strong>真偽を直接は照合しない</strong>。だから、それらしく誤る（＝ハルシネーション）。
</div>

</div>
<div class="right">

<div class="gquote">
なぜ“原理的に”残る？──学習も評価も、正直な「分かりません」より <strong>“当てにいく”方が高得点</strong>になりやすいから。推測が報われ、棄権が損をする。
<span class="src">出典：Kalai et al. 2025「Why Language Models Hallucinate」(OpenAI / arXiv)</span>
</div>

<div class="callout-gray">
「<strong>不確実なら『分かりません』、確信度も添えて</strong>」と頼むと多少減る（完全には消えない・最後は人が確認）
</div>

</div>
</div>

<div class="takeaway">「流暢さ」は正しさの保証ではない。引用・数値・固有名は、自分で裏取りして使う</div>

<!--
- 仕組みから来る一番大事な帰結:なぜ堂々と間違えるか(ハルシネーション)。生成AIは「正しさのDB」でなく「流暢さ」を鍛えたモデル。文法的に滑らかでも中身が事実とは限らない。
- 仕組みに戻ると腑に落ちる:AIは「ありそうな続き」を出すだけで、真偽を直接は照合しない。だからそれらしく誤る。
- なぜ原理的に残るか:学習も評価も、正直な「分かりません」より"当てにいく"方が高得点になりやすいから(推測が報われ、棄権が損)。出典 Kalai et al. 2025「Why Language Models Hallucinate」。
- 対策:「不確実なら分かりませんと言って、確信度も添えて」と頼むと多少減るが完全には消えない。引用・数値・固有名は自分で裏取り。STEP④の「結果の解釈」につながる。
-->

---

<!-- _class: summary -->

<div class="page-title">仕組み⑤　規模と創発</div>

## 大きくすると、新しいことが“できる”

<div class="sections">

<div class="sec-box">

### 規模を上げると賢くなる

- データとパラメータを増やすほど、多くの課題で**性能がなめらかに向上**
- 例を見せるだけで解ける（少数例学習）等も現れる

</div>

<div class="sec-box">

### 創発（emergent abilities）

- 小さいモデルには無かった能力が、ある規模で**急に現れる**例が報告
- ＝シンプルな予測のくりかえしが、規模を得て**知的にふるまう**
- コンテキスト内学習が出来るようになる

</div>

</div>

<div class="callout-yellow">
ただし「創発」は<strong>評価の測り方による“見かけ”</strong>という慎重な指摘もある（議論中）。「規模を上げると質的に新しいことができるように見える」と、控えめに理解しておく。
</div>

<div class="takeaway">いちもじGPTは最小版。中身の芯は同じで、違いは「規模」と「仕上げ」だけ</div>

<!--
- 仕組み(5)。データとパラメータの規模を上げるほど、多くのタスクで性能がなめらかに向上する(GPT-3論文)。プロンプトに例を入れるだけで解く"少数例学習"なども現れる。
- 創発(emergent abilities):小さいモデルには無かった能力が、ある規模を超えると急に現れる、という報告(Wei et al. 2022)。シンプルな仕組みの繰り返しが、規模を得て知的にふるまう。
- 注意:「創発」は評価指標の取り方による見かけ上のもの、という反論(Schaeffer et al. 2023)もあり学術的に議論中。授業では「規模を上げると質的に新しいことができるように"見える"」と慎重に。
- まとめ:いちもじGPTとChatGPT/Geminiは、中身の芯(次の語予測+Transformer)は同じ。違いは規模と、この後の"仕上げ"。
-->

---

<!-- _class: summary -->

<div class="page-title">本物との違い</div>

## ChatGPT・Gemini は、ここが“足されている”

<div class="sections">

<div class="sec-box">

### ① 桁違いの規模

- 学習データもパラメータも**けた違いに大きい**
- 文字でなく**サブワード**でトークン化
- 複数のエキスパート部分で構成される

</div>

<div class="sec-box">

### ② 仕上げの追加学習と推論

- 事前学習の後、**人間の好みに合わせる学習**（指示への従順さ・安全性）を追加
- 推論やAI agent的に動いてツールを使えるようになっている。

</div>

<div class="sec-box">

### ③ マルチモーダル

- 文字だけでなく**画像・音声・コード**も扱える

</div>

</div>

<div class="takeaway">芯は「次の語の予測」。そこに規模・仕上げ・多様な入力が足されている</div>

<!--
- 本物との違いを3点。①規模が桁違い(データ・パラメータ)、トークン化はサブワード。②事前学習の後に「人間の好みに合わせる追加学習(指示チューニング/RLHF)」がある。これがあるから、ただの続き予測でなく"対話として役立つ応答"になる。
- ③Gemini=Googleのマルチモーダル基盤モデルで、文字だけでなく画像・音声・コードも扱える。
- でも芯は同じ「次の語を予測してつなげる」。いちもじGPTで掴んだ感覚は、本物の理解にそのまま効きます。
-->

---

<!-- _class: wrap -->

<div class="page-title">STEP② まとめ</div>

## 仕組みは、これだけ覚えて帰る

- 生成AIは「**次の1語**」を予測して、つなげているだけ（自己回帰）
- その心臓部が **Transformer / Attention**（各語が他の語との関係を見る）
- **学習＝損失を下げる**トレーニング。
- 規模を上げると賢くなって、できることが増える（創発）
- **流暢さ ≠ 正しさ**。だから“それらしく”間違えるので、ハルシネーションは仕方ない（→ 検証して使う）
- Colab＝**ブラウザで・無料GPUで・Python**を動かせる実験室

<div class="takeaway">“魔法”ではなく“予測の積み重ね”。だから得意・不得意も説明できる</div>

<!--
- STEP②のまとめ。3つだけ。①生成AIは次の1語を予測してつなげている。②心臓部はTransformer/Attention(語と語の関係)。③学習は損失を下げる作業で、規模を上げると賢くなる。
- そしてColabは、それを自分の手で動かせる無料の実験室。
- 仕組みが分かると、AIが「もっともらしく間違える」理由や、得意・不得意も腑に落ちる。次はColabで自分のデータを動かしてみます。
-->

---

<!-- _class: divider -->

<div class="chapter-num">STEP ③ ・ 15-min ・ 体験</div>

# Colab で、つくってみる

## 大学の 学習・研究・業務 に活かす

<!--
- STEP③。仕組みが分かったところで、今度はColabを"道具"として使う。大学の学習・研究・業務に役立つ形で、データを動かしてみます。
- コードが書けなくても大丈夫。Geminiに頼む方法と、自分で少し書く方法、両方を用意しました。
-->

---

<!-- _class: summary -->

<div class="page-title">Colabでできること</div>

## 動かして、結果から学べる

<div class="sections">

<div class="sec-box">

### データを“見える化”する

- 表を**グラフ**に（分布・推移・相関）
- **EDA（探索的データ分析）**＝まずデータを眺めて問いを立てる

</div>

<div class="sec-box">

### 予測・分類してみる

- **機械学習入門**：成績から成績を予測、種類を分類…
- **Gemini に頼む**：言葉で指示すれば分析ノートを自動生成

</div>

</div>

<div class="callout-blue">
今日は身近な題材として <strong>教育のオープンデータ</strong>（学校・学力・進学などの公開データ）を使います。「環境は学力にどう効く？」「成績から成績を予測できる？」を、手を動かして確かめます。
</div>

<div class="takeaway">今や、コードを書けなくても読めれば使える。実行→結果を見る→問いを深める、で学べる</div>

<!--
- Colabでできることは幅広い。データの可視化(グラフ化)、EDA(探索的データ分析=まずデータを眺めて問いを立てる)、機械学習入門(予測・分類)、そしてGeminiにデータ分析を丸ごと頼む。
- 今日の題材は「教育のオープンデータ」。学校・学力・進学などの公開データで、大学の学び・研究に近いテーマを扱う。
- ポイント:完璧に理解してから動かすのでなく、まず動かして結果を見て、そこから問いを深める。
-->

---

<!-- _class: summary -->

<div class="page-title">今日のノート（メニュー）</div>

## 気になる1つを開いて、上から▶

<div class="menu">

<div class="mcard mc-a">
<span class="mc-tag">A ・ 超入門</span>
<div class="mc-h">はじめての Colab</div>
<div class="mc-b">ランタイム接続・セル実行・GPU・ファイル・Driveに保存まで。<b>Colabが初めての人はここから</b>。</div>
<div class="mc-l">▶ <a href="https://colab.research.google.com/">Colabリンク（当日 slido で配布）</a></div>
</div>

<div class="mcard mc-b">
<span class="mc-tag">B ・ 分析＋Gemini</span>
<div class="mc-h">自分で分析→後半でGemini</div>
<div class="mc-b">教育データを<b>まず自分で可視化・相関</b>。後半は <b>Gemini に「分析して」</b>と依頼（使える環境なら）。</div>
<div class="mc-l">▶ <a href="https://colab.research.google.com/">Colabリンク（当日 slido で配布）</a></div>
</div>

<div class="mcard mc-c">
<span class="mc-tag">C ・ 自分で書く</span>
<div class="mc-h">EDA ＋ 機械学習 入門</div>
<div class="mc-b">教育データを<b>可視化→相関→予測（回帰）</b>まで、1セルずつ手を動かす。</div>
<div class="mc-l">▶ <a href="https://colab.research.google.com/">Colabリンク（当日 slido で配布）</a></div>
</div>

</div>

<div class="caption" style="margin-top:8px;">🧭 これらのノートブックの<strong>コードは生成AI（Claude Opus）で作成</strong>し、Claude Fable で検証しています（最終責任は作成者）。</div>

<div class="takeaway">まずは1つでOK。AからでもBからでも、自分の興味で選んで動かそう</div>

<!--
- 今日のノートは3つ。A「はじめてのColab」=超入門(Colabが初めての人向け)。B「Geminiにデータ分析を頼む」=言葉で頼んで分析ノートを自動生成。C「EDA+機械学習入門」=教育データを自分で可視化→予測まで。
- まず1つでOK。Colabが不安ならA、AIに任せてみたいならB、手を動かしたいならC。リンクは当日slidoで配布(各自Driveにコピーして使う)。
- ノートのコードはClaude Opusで生成しFableで検証している点も一言触れる（"AIでコードを書く"こと自体が今日のテーマの実例）。
- このあと、BとCの中身を1枚ずつ見ます。
-->

---

<!-- _class: split -->

<div class="page-title">ノートB</div>

## まず自分で分析 → 後半で Gemini に頼む

<div class="split-body">
<div class="left">

<div class="stepcol">
<div class="stepc"><span class="sn">1</span><span class="sb"><b>前半：自分で分析</b>。CASchools を読み込み、<b>相関・散布図</b>で「学力に効く要因」を可視化（全員できる）</span></div>
<div class="stepc"><span class="sn">2</span><span class="sb"><b>後半：Gemini に頼む</b>（発展）。同じ分析を<b>言葉で依頼</b>して自動生成</span></div>
</div>

<div class="prompt">
<span class="lab">Geminiに頼む例：</span>「CASchools.csv の傾向を可視化して。<strong>学力に効く要因</strong>を相関・散布図で調べ、日本語で要約して。」
</div>

<div class="callout-yellow">
⚠️ Gemini パネルは<strong>アカウント・地域・組織の設定で表示されないことがある</strong>。出なければ前半だけでOK。
</div>

</div>
<div class="right">

<div class="demo-card">
<div class="dc-bar">後半 ｜ Geminiが自動生成する分析ノート（使える環境なら）</div>
<div class="dc-body">
① データを読み込み・要約<br>
② 欠損やばらつきを確認<br>
③ <strong>相関ヒートマップ／散布図</strong>を作図<br>
④ 「<strong>貧困層の割合が高い学区ほど点が低い傾向</strong>」等を日本語で要約<br>
<span class="dc-note">※ 前半で自分が出した結果と見くらべる。出力は必ず検証。</span>
</div>
</div>

</div>
</div>

<div class="takeaway">まず自分で分析 → 後半でGeminiに丸投げ。使えなくても学びは完結、検証は自分の仕事</div>

<!--
- ノートB。構成を変更：まず全員が「自分で分析」(CASchoolsを読み込み→相関→散布図)を体験し、後半で(発展として)Geminiに同じ分析を言葉で頼む。
- 重要：Geminiのデータサイエンスエージェントはアカウント・地域・組織設定で表示されないことがある。出ない場合は前半だけで今日の目標は達成、と伝える。
- Geminiが使える人は、前半で自分が出した相関・散布図と、Geminiの結果を見くらべる。同じ結論か？違いはどこか？＝最後の解釈は人間の仕事。
- 注意:出力はもっともらしく間違える→必ず検証。機密データは入れない。アップしたファイルはセッション終了で消える。UIは更新が速いので当日の画面で確認。
-->

---

<!-- _class: split -->

<div class="page-title">ノートC</div>

## 教育データで EDA → 機械学習（自分で書く）

<div class="split-body">
<div class="left">

### 今日の問い

<div class="callout-orange">
「<strong>高校の成績や SAT から、大学1年の成績（GPA）を予測できる？</strong>」<br>
<span style="font-size:18px;">データ：<code>satgpa</code>（高校GPA・SAT・大学GPA / 1000人）</span>
</div>

### 4ステップで進む

<div class="stepcol">
<div class="stepc"><span class="sn">1</span><span class="sb"><b>眺める</b>：<code>df.describe()</code> で全体像</span></div>
<div class="stepc"><span class="sn">2</span><span class="sb"><b>可視化</b>：ヒストグラム・相関・散布図</span></div>
<div class="stepc"><span class="sn">3</span><span class="sb"><b>予測</b>：回帰モデルで GPA を当てる</span></div>
<div class="stepc"><span class="sn">4</span><span class="sb"><b>評価</b>：どれくらい当たったか確認</span></div>
</div>

</div>
<div class="right">

<div class="demo-card">
<div class="dc-bar">できあがり ｜ 散布図＋予測の直線</div>
<div class="dc-body">
高校GPA が高い人ほど、大学GPA も高い<strong>右上がりの関係</strong>。<br>
→ 直線（回帰）を引くと、<strong>高校成績から大学成績をある程度予測できる</strong>。<br>
<span class="dc-note">※ 「ある程度」がポイント。外れる人も多い＝予測の限界も体感する。</span>
</div>
</div>

<div class="caption">EDA＝まず「眺めて問いを立てる」。機械学習はその先の一歩</div>

</div>
</div>

<div class="takeaway">データを見る→問いを立てる→予測する→確かめる、の一周を体験する</div>

<!--
- ノートC。自分で1セルずつ手を動かす版。データはsatgpa(高校GPA・SAT・大学GPA、約1000人)。問いは「高校の成績やSATから大学1年のGPAを予測できるか」。
- 4ステップ。①df.describe()で全体像を眺める。②ヒストグラム・相関・散布図で可視化。③回帰モデル(train/test分割+sklearn)で大学GPAを予測。④予測の当たり具合(誤差・決定係数)を評価。
- できあがり:高校GPAが高い人ほど大学GPAも高い右上がりの関係。直線を引くと、ある程度予測できる。ただし外れる人も多く、「ある程度」しか当たらない=予測の限界も体感する。これが機械学習の現実的な感覚。
- 発展として、学校データ(CASchools)で「支出や貧困率は学力に効くか」も同じ流れで試せます。
-->

---

<!-- _class: summary -->

<div class="page-title">立場別の使いどころ</div>

## あなたの 学び・研究・仕事 だと？

<div class="uc-grid">

<div class="uc-col col-ug">
<div class="uc-h">🎓 学部生</div>

- 「**高校成績やSATで大学GPAを予測**」を体験（satgpa）
- アンケート結果を**その場でグラフ化**
- オープンデータを**APIで取得**して分析
- Gemini に**コードの意味を質問**しながら学ぶ

</div>

<div class="uc-col col-grad">
<div class="uc-h">🔬 大学院生</div>

- 「**予算は学力を上げる？**」支出×学力の相関（CASchools）
- **クラスサイズと学力**の関係を散布図で
- **機械学習**を小さく試す（分類・回帰・予測）
- 研究データの前処理・作図を**再現可能**に・重い計算は**無料GPU**

</div>

<div class="uc-col col-staff">
<div class="uc-h">🏢 教職員</div>

- 大規模データを**可視化**して傾向把握
- 「**教育水準と経済水準**(国際)や「国内統計」データを可視化
- 定型の集計処理を**自動化**（1度書けば毎回使える）

</div>

</div>

<div class="takeaway">「機密ではないデータ」を、Colab に載せて試してみるのが第一歩</div>

<!--
- 立場別の使いどころ。学部生:授業データ・アンケートの可視化、レポート図表、公開データ取得、Geminiにコードを質問しながら学ぶ。
- 大学院生:研究データの前処理・統計・作図を再現可能な形で、機械学習の試作、論文手法の再現、重い計算は無料GPUで。
- 教職員:授業評価の集計・分類、成績/出席の可視化、定型集計の自動化(1度書けば毎回使える)、Geminiに分析を下書きさせて時短。
- 一番の第一歩は「自分の手元のデータを1つColabに載せてみる」こと。
-->

---

<!-- _class: summary -->

<div class="page-title">うまくやるコツ</div>

## Colab上のGemini に頼むコツ ＆ 注意点

<div class="sections">

<div class="sec-box">

### うまく頼むコツ

- **具体的に**書く（目的・対象の列・出力の形）
- **小さく試す**→グラフを見て次を頼む
- 出てきたコードは**意味を1つずつ確認**
- 分からない用語は **Gemini に質問**

</div>

<div class="sec-box">

### 注意すること

- 出力は**必ず検証**（もっともらしく間違える）
- **個人情報・機微データは入れない**
- アップしたファイルは**セッション終了で消える**
- 大事な結果は **Drive に保存**

</div>

</div>

<div class="takeaway">AIに任せても、最後に「正しいか」を判断するのは自分</div>

<!--
- コツと注意。うまく頼むコツ:①具体的に(目的・対象列・出力形式)。②小さく試してグラフを見て次を頼む。③出てきたコードは意味を1つずつ確認。④分からない用語はGeminiにその場で質問。
- 注意:①出力は必ず検証(もっともらしく間違える=ハルシネーション)。②個人情報・機微データは入れない。③アップロードしたファイルはセッション終了で消える。④大事な結果はDriveに保存。
- 黄金ルール:AIに任せても、最後に正しいかを判断するのは人間。
-->

---

<!-- _class: divider -->

<div class="chapter-num">STEP ④ ・ 15-min ・ 議論・座談会</div>

# 結果を解釈し、気づきを共有する

## 学びを変える！研究を深める！生成AI活用術

<!--
- STEP④、最後の15分。AIが出した結果をどう読むか考え、気づきをみんなで共有します。
-->

---

<!-- _class: summary -->

<div class="page-title">結果の解釈</div>

## AIの答えは「下書き」。鵜呑みにしない

<div class="sections">

<div class="sec-box">

### 生成AIの“クセ”

- **確率で選ぶ**から、同じ問いでも**毎回ちがう**
- **もっともらしく間違える**（ハルシネーション）
- 学習データの**偏り**が結果に出る

</div>

<div class="sec-box">

### だから確認する

- **出典・根拠**はあるか
- **再現**できるか（もう一度・別の方法で）
- データに**偏り・欠損**はないか

</div>

</div>

<div class="callout-yellow">
仕組みを思い出す：AIは「次の語の予測」をしているだけで、<strong>事実を“知っている”わけではない</strong>。だから、それらしくても誤ることがある。
</div>

<div class="takeaway">AIの結果は出発点。検証して、自分の判断で使う</div>

<!--
- 結果の解釈。生成AIのクセ:①確率で語を選ぶので同じ問いでも毎回違う。②もっともらしく間違える(ハルシネーション)。③学習データの偏りが結果に出る。
- だから確認する:出典・根拠はあるか、再現できるか、データに偏り・欠損はないか。
- 仕組みに戻ると腑に落ちる:AIは「次の語の予測」をしているだけで、事実を知っているわけではない。だからそれらしくても誤る。今日いちもじGPTで見た通り。
-->

---

<!-- _class: summary -->

<div class="page-title">議論・座談会</div>

## slido で、気づきを共有して下さい

<div class="sections">

<div class="sec-box">

### ① 一番の発見

- 仕組みを知って／動かしてみて、いちばん「へぇ」と思った点は？

</div>

<div class="sec-box">

### ② 便利／難しかった点

- Colab・Gemini を触ってみて、便利だった点・つまずいた点は？

</div>

<div class="sec-box">

### ③ 使えそうなこと

- 自分の**学び・研究・仕事**で使えそうなことは？

</div>

</div>

<div class="use-note">【お願い】slido・ワークへの入力は、<strong>個人情報・機微情報を除き</strong>、アカデミック・リンク・センター／附属図書館の業務改善・調査研究・外部発表等に利用します。特定される情報・知られたくない情報は入力しないでください。</div>

<div class="takeaway">敬意をもって、忌憚なく、建設的に — 協力的な場づくりが学びの秘訣です</div>

<!--
- STEP④の中心。slidoで全員から3点を集める。①仕組みを知って/動かして一番の発見、②Colab・Geminiの便利だった点・つまずいた点、③自分の学び・研究・仕事で使えそうなこと。
- 場づくりの一言(敬意・忌憚なく・建設的に)も踏襲。データ利用の注記も明示。
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## 今日のまとめ

- 生成AI＝「**次の1語**」を予測してつなげる仕組み（いちもじGPTで体験）
- 心臓部は **Transformer / Attention**。学習＝損失を下げる。規模で創発
- **Colab**＝ブラウザで・無料GPUで・Python を動かせる実験室
- 分析は **Gemini に頼む** も **自分で書く** も、どちらも Colab でできる
- AIの結果は **検証して使う** — 判断するのは自分

<div class="takeaway">“なかみ”が分かれば、AIはもっと安心して・賢く使える道具になる</div>

<!--
- 全5回の締め。今日の5点。①生成AIは次の1語を予測してつなげる(いちもじGPTで体験)。②心臓部はTransformer/Attention、学習は損失を下げる、規模で創発。③Colabはブラウザ・無料GPUでPythonを動かせる実験室。④分析はGeminiに頼むも自分で書くもColabでできる。⑤AIの結果は検証して使う。
- 中身が分かると、AIはもっと安心して・賢く使える道具になる。これがシリーズ全体のゴールでした。
-->

---

<!-- _class: split -->

<div class="page-title">アンケート・ご案内</div>

## 前期の全5回、ありがとうございました

<div class="split-body">
<div class="left">

### 次回予告

<div class="callout-green">
<strong>夏も開催予定です</strong>

- 案①：超初心者歓迎、今までの内容の実演会？
- 案②：AI駆動型開発…？

</div>

<div class="callout-blue" style="margin-top:10px;">
さらに学びたい学部生の皆様へ：<br><strong><a href="https://syllabus.gs.chiba-u.jp/2026/401001000000000/G122151001/ja_JP">「生成AI活用講座」</a></strong>（全8回ワークショップ）も第4タームにあります。
</div>

</div>
<div class="right">

### 終了時アンケート

<div class="callout-orange">
よりよい企画のため、ご協力ください<br>
<strong><a href="https://forms.gle/5sXy6f5yZkoJ8XJZ7">forms.gle/5sXy6f5yZkoJ8XJZ7</a></strong>
</div>

- 今日のノートブック・録画・スライドは**後日公開**


<div class="caption">今日触ったノートは、Drive にコピーすれば自分用に残せます</div>

</div>
</div>

<div class="takeaway">※ 入力情報は個人情報等を除き、ALC／図書館の業務改善・調査研究に利用します</div>

<!--
- 最終回なので、全5回のお礼。次の学びの導線として、特別回(東山昂平氏)と第4ターム「生成AI活用講座」(全8回)を案内。
- 終了時アンケートのお願い。今日のノートブック・録画・スライドは後日公開。困ったらALC(図書館本館N棟1F)へ。
- 今日触ったノートはDriveにコピーすれば自分用に残せる、と一言。
-->

---

<!-- _class: refs -->

<div class="page-title">参考リンク</div>

## 参考・出典

- Google Colab（公式 / よくある質問）. https://research.google.com/colaboratory/faq.html
- Colab のデータサイエンス・エージェント（Gemini）. https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/
- 全Colabユーザーへ Gemini/Gemma 提供（公式, 2025-11）. https://medium.com/google-colab/all-colab-users-now-get-access-to-gemini-and-gemma-models-via-colab-python-library-at-no-cost-a392599977c4
- Transformer 原論文「Attention Is All You Need」(Vaswani et al., 2017). https://arxiv.org/abs/1706.03762
- GPT「Improving Language Understanding by Generative Pre-Training」(Radford et al., 2018). https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
- 創発「Emergent Abilities of Large Language Models」(Wei et al., 2022). https://arxiv.org/abs/2206.07682
- Gemini（Google DeepMind, 技術レポート 2023）. https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf
- nanoGPT（A. Karpathy, MIT License）. https://github.com/karpathy/nanoGPT
- 教育オープンデータ（Rdatasets：CASchools / satgpa）. https://vincentarelbundock.github.io/Rdatasets/
- 本シリーズ案内（千葉大ALC）. https://alc.chiba-u.jp/eyr/2026/04/03/2026ai.html

<div class="caption" style="margin-top:10px;">🧭 ハンズオンのノートブックは <strong>Claude Opus で作成し、検証</strong>しました。本資料はデザインと一部の表現をAIに任せました。ノートブック内の誤りにご注意ください。コンテンツの責任は作成者（田川 翔）が負います。生成AIの出力には誤りが含まれることがあるため、重要な引用はご自身で裏取りのうえご利用ください。</div>

<!--
- 出典。Colab公式FAQ・データサイエンスエージェント・Gemini提供発表、生成AIの仕組み(Transformer原論文・GPT・創発・Gemini)、いちもじGPTの土台nanoGPT、教育データ(Rdatasets)、シリーズ案内。
- 制作クレジット：Opusで作成・Fableで検証・最終責任は作成者、を明示（ドキュメントとノートブック末尾に共通で記載）。
- スライド配布時にここから辿れるようにしてある。原論文URLは移設されることがあるのでarXiv版を併記。
-->

---

<!-- _class: summary -->

<div class="page-title">（参考）Colab 早見表</div>

## 困ったときの早見表

<div class="sections">

<div class="sec-box">

### よく使う操作

- セル実行：**▶** ／ **<code>Shift+Enter</code>**
- 全部消えた？：<code>ランタイム→ランタイムを再起動</code>
- GPUにする：<code>ランタイム→ランタイムのタイプを変更→GPU</code>
- ファイル：左の **📁** にドラッグ
- 保存：<code>ファイル→ドライブにコピーを保存</code>

</div>

<div class="sec-box">

### つまずきと対処

- **赤いエラー**：最後の行を読む→上から再実行
- **遅い・止まる**：GPUか・接続が切れていないか
- **データが無い**：再アップロード（セッションで消える）
- **意味が不明**：そのコードを **Gemini に質問**

</div>

</div>

<div class="takeaway">迷ったら「再起動して、上から▶」。たいていこれで直る</div>

<!--
- 参考。Colabの早見表。よく使う操作(実行▶/Shift+Enter、再起動、GPU切替、ファイル、保存)と、つまずきの対処(赤いエラーは最後の行、遅い時はGPU/接続、データが消えたら再アップ、意味不明はGeminiに質問)。
- 配布資料として手元に残してもらう用。困ったらまず「再起動して上から▶」。
-->
