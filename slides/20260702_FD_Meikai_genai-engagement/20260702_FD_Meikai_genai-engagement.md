---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIとの向き合い方</div><img class="hdr-logo" src="./src/meikai-logo.png" alt="明海大学">'
footer: ''
style: |
  :root {
    --accent: #00736B;          /* 明海大学カラー（ティール／グリーン） */
    --accent-dark: #004D45;
    --accent-soft: #E3F1EF;
    --section-bg: #F1F8F7;
    --hdr-left-w: 25%;
  }
  /* 中央ページタイトル帯：左帯に噛み合わせて左寄せ */
  section .page-title { left: 21%; width: 36%; }
  /* ヘッダー下の線を全幅で（帯・ロゴの前面を貫く） */
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  h2 { color: var(--accent-dark); }
  /* 本文を縦中央寄せ（message/cover と同じ"フルセット再宣言"方式。place-content は使わない） */
  section.summary, section.split, section.wrap {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: stretch !important;
  }
  section.summary > h2, section.split > h2 { margin-bottom: 20px; }

  /* ===== 表紙（cover-hero｜15min第4回スタイル＋Google写真） ===== */
  section.cover-hero { padding-top: calc(var(--header-h) + 26px); --hdr-left-w: 25%; }
  section.cover-hero > header::after { left: 0; right: 0; }
  .cover-grid { display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 42px; align-items: center; height: 100%; }
  .cv-kicker { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 19px; padding: 6px 16px; border-radius: 7px; margin-bottom: 18px; }
  .cv-kicker img { height: 22px; background: #fff; border-radius: 3px; padding: 1px 3px; }
  .cv-title { font-size: 58px; font-weight: 800; line-height: 1.16; letter-spacing: 0.02em; color: var(--accent-dark); margin: 0 0 12px; }
  .cv-title .accent { color: var(--accent); }
  .cv-sub { font-size: 23px; color: #2a2d33; font-weight: 600; line-height: 1.45; margin-bottom: 30px; }
  .cv-foot { display: flex; align-items: center; gap: 18px; }
  .cv-photo { width: 92px; height: 92px; border-radius: 50%; overflow: hidden; flex: none; box-shadow: 0 2px 9px rgba(0,0,0,.2); }
  .cv-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 60% 33%; }
  .cv-meta { font-size: 18px; line-height: 1.55; }
  .cv-meta .ev { color: var(--accent); font-weight: 700; }
  .cv-meta .nm { font-weight: 700; font-size: 20px; }
  .cover-right img.hero { width: 100%; border-radius: 14px; box-shadow: 0 7px 24px rgba(0,0,0,.17); border: 1px solid #e0e7e6; }
  .cover-right .cap { font-size: 14px; color: #8a9290; text-align: center; margin-top: 9px; }

  /* ===== 出典ライン（小さな根拠表示） ===== */
  .srcline { font-size: 15px; color: #7a8581; margin-top: 8px; line-height: 1.4; }
  .srcline a { color: var(--accent); text-decoration: none; word-break: break-all; }
  .srcline b { color: #5a6764; font-weight: 700; }
  .caption .srcline, figure .srcline { text-align: center; }

  /* ===== アジェンダ（3行：時間ラベル＋色ピル＋箇条書き） ===== */
  .agenda { display: flex; flex-direction: column; gap: 12px; margin-top: 2px; }
  .agenda-row { display: flex; align-items: center; gap: 22px; border: 1.5px solid #dde6e4; border-radius: 16px; padding: 11px 24px; background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .agenda-left { flex: 0 0 232px; }
  .agenda-time { font-size: 17px; color: #5a6764; font-weight: 700; margin-bottom: 6px; }
  .agenda-time .min { color: var(--accent); }
  .agenda-pill { font-size: 27px; font-weight: 800; text-align: center; border-radius: 12px; padding: 8px 0; line-height: 1.15; }
  .pill-1 { background: #E3F1EF; color: var(--accent-dark); }
  .pill-2 { background: #FBEAD9; color: #9a4a12; }
  .pill-3 { background: #E7EAF3; color: #34406b; }
  .agenda-list { flex: 1; font-size: 20px; line-height: 1.45; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 4px 0; position: relative; padding-left: 1.1em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #9aa5a2; font-weight: 700; }

  /* ===== Slido アクセス（QR行） ===== */
  .sec-qr-row { display: flex; align-items: center; gap: 16px; }
  .sec-qr-row .sq-text { flex: 1; min-width: 0; }
  .sec-qr-row .sq-qr { flex: 0 0 auto; text-align: center; }
  .sec-qr-row .sq-qr img { width: 120px; height: 120px; display: block; background: #fff; border: 1px solid #dfe3e8; border-radius: 8px; padding: 4px; }
  .sec-qr-row .sq-url { flex: 0 0 170px; text-align: right; font-size: 17px; font-weight: 700; line-height: 1.3; overflow-wrap: anywhere; word-break: break-all; }
  .sec-qr-row .sq-url a { color: var(--accent); text-decoration: none; }
  .slido-note { font-size: 16px; line-height: 1.5; color: #6b7470; background: #F2F5F4; border-radius: 8px; padding: 9px 16px; margin-top: 10px; }
  .slido-note strong { color: var(--accent-dark); }

  /* ===== 3カード（リスク等） ===== */
  .cards3 { display: flex; gap: 14px; margin-top: 8px; }
  .card3 { flex: 1; border-radius: 14px; padding: 14px 18px; background: #fff; border: 1.5px solid #e3e8e7; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .card3 .c3-h { font-size: 20px; font-weight: 800; margin-bottom: 7px; display: flex; align-items: center; gap: 8px; }
  .card3 .c3-h .ic { font-size: 24px; }
  .card3 .c3-b { font-size: 18px; line-height: 1.5; color: #333; }
  .card3 .c3-b strong { color: var(--accent-dark); }
  .card-risk1 { border-top: 5px solid #C0392B; } .card-risk1 .c3-h { color: #C0392B; }
  .card-risk2 { border-top: 5px solid #B7791F; } .card-risk2 .c3-h { color: #9a6314; }
  .card-risk3 { border-top: 5px solid #1A6BB0; } .card-risk3 .c3-h { color: #1A6BB0; }

  /* ===== 2列比較（放置 vs 禁止 など） ===== */
  .cmp { display: flex; gap: 16px; margin-top: 8px; align-items: stretch; }
  .cmp-col { flex: 1; border-radius: 14px; padding: 14px 20px; background: #FBF3F1; border: 1.5px solid #f0d9d3; }
  .cmp-col.good { background: var(--accent-soft); border-color: #c2e0db; }
  .cmp-col .cmp-h { font-size: 22px; font-weight: 800; color: #B23B2E; margin-bottom: 8px; }
  .cmp-col.good .cmp-h { color: var(--accent-dark); }
  .cmp-col ul { margin: 0 0 0 1.1em; font-size: 19px; line-height: 1.5; }
  .cmp-col li { margin: 5px 0; }

  /* ===== 大きな数字スタット ===== */
  .stat-row { display: flex; gap: 16px; margin: 10px 0; }
  .stat { flex: 1; text-align: center; background: var(--accent-soft); border-radius: 12px; padding: 12px 8px; }
  .stat .num { font-size: 44px; font-weight: 800; color: var(--accent); line-height: 1; }
  .stat .lbl { font-size: 17px; color: #44504d; margin-top: 7px; line-height: 1.35; }

  /* ===== 評価6軸グリッド ===== */
  .axis-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 11px; margin-top: 6px; }
  .axis { background: #fff; border: 1.5px solid #dde6e4; border-left: 5px solid var(--accent); border-radius: 10px; padding: 9px 14px; }
  .axis .ax-h { font-size: 18px; font-weight: 800; color: var(--accent-dark); margin-bottom: 3px; }
  .axis .ax-b { font-size: 15.5px; line-height: 1.4; color: #444; }

  /* ===== フロー（課題リデザインの手順） ===== */
  .flow { display: flex; align-items: stretch; gap: 8px; margin: 10px 0; }
  .flow .arrow { align-self: center; font-size: 24px; font-weight: 800; color: var(--accent); }
  .fstep { flex: 1; border-radius: 12px; padding: 11px 13px; background: #fff; border: 1.5px solid #dde6e4; }
  .fstep .fs-n { display: inline-block; font-size: 14px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 999px; width: 24px; height: 24px; line-height: 24px; text-align: center; margin-bottom: 6px; }
  .fstep .fs-b { font-size: 16px; line-height: 1.4; color: #333; }
  .fstep .fs-b strong { color: var(--accent-dark); }

  /* ===== 進化フロー（人手→iPaaS→AIエージェント） ===== */
  .evo { display: flex; align-items: stretch; gap: 10px; margin: 8px 0; }
  .evo .arrow { flex: 0 0 32px; align-self: center; text-align: center; font-size: 28px; font-weight: 800; color: #9aa5a2; }
  .evo-box { flex: 1; border-radius: 12px; padding: 11px 16px; border: 2px solid #ccc; background: #fff; }
  .evo-box .evo-tag { font-size: 15px; font-weight: 700; display: inline-block; padding: 2px 11px; border-radius: 11px; color: #fff; margin-bottom: 6px; }
  .evo-box .evo-body { font-size: 18px; line-height: 1.4; }
  .evo-past { border-color: #b9bec5; background: #f4f5f7; } .evo-past .evo-tag { background: #6b7280; }
  .evo-ipaas { border-color: #1A6BB0; background: #EAF2FB; } .evo-ipaas .evo-tag { background: #1A6BB0; }
  .evo-studio { border-color: var(--accent); background: var(--accent-soft); } .evo-studio .evo-tag { background: var(--accent); }

  /* ===== レシピ・フロー（きっかけ→処理→出力） ===== */
  .recipe-flow { display: flex; align-items: stretch; gap: 10px; margin: 10px 0; }
  .recipe-flow .arrow { align-self: center; font-size: 28px; font-weight: 800; color: var(--accent); }
  .rf-box { flex: 1; border-radius: 12px; padding: 11px 16px; border: 2px solid #ccc; }
  .rf-box .rf-tag { font-size: 15px; font-weight: 700; display: inline-block; padding: 2px 12px; border-radius: 11px; color: #fff; margin-bottom: 7px; }
  .rf-box .rf-body { font-size: 19px; line-height: 1.4; }
  .rf-trigger { border-color: #1A6BB0; background: #EAF2FB; } .rf-trigger .rf-tag { background: #1A6BB0; }
  .rf-ai { border-color: var(--accent); background: var(--accent-soft); } .rf-ai .rf-tag { background: var(--accent); }
  .rf-out { border-color: #B7791F; background: #FBF1DF; } .rf-out .rf-tag { background: #B7791F; }

  /* ===== プロンプト例 ===== */
  .prompt { background: #EAF2FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; font-size: 18px; line-height: 1.5; }
  .prompt .lab { font-weight: 700; color: #1A6BB0; margin-right: 6px; }

  /* ===== できあがりカード ===== */
  .demo-card { max-width: 96%; margin: 12px auto 0; border: 1px solid #d3d7dd; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 7px rgba(0,0,0,.08); }
  .demo-card .dc-bar { background: #eef1f4; font-size: 15px; font-weight: 700; color: #3a3f45; padding: 6px 16px; border-bottom: 1px solid #e0e4e9; }
  .demo-card .dc-body { font-size: 17px; line-height: 1.55; padding: 11px 18px; background: #fff; color: #2a2d33; }

  /* ===== 引用ブロック（公式定義など） ===== */
  .gquote { font-size: 19px; line-height: 1.5; background: #F2F7F6; border-left: 6px solid var(--accent); border-radius: 8px; padding: 11px 18px; margin: 8px 0; color: #2a2d33; }
  .gquote strong { color: var(--accent-dark); }
  .gquote .src { display: block; margin-top: 6px; font-size: 14px; color: #7a8581; }
  .gquote .src a { color: var(--accent); text-decoration: none; word-break: break-all; }

  /* ===== 千葉大3実践カード ===== */
  .prac { display: flex; gap: 13px; margin-top: 8px; }
  .prac-col { flex: 1; background: #fff; border: 1.5px solid #e0e7e6; border-radius: 12px; padding: 12px 16px; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
  .prac-col .pc-h { font-size: 18px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 6px 0; text-align: center; margin-bottom: 9px; }
  .prac-col ul { margin: 0; padding-left: 1.1em; list-style: disc; }
  .prac-col li { font-size: 17px; line-height: 1.4; margin: 7px 0; }
  .prac-col li strong { color: var(--accent-dark); }

  /* ===== 学生の声（引用） ===== */
  .voice { background: var(--accent-soft); border-radius: 12px; padding: 14px 22px; margin: 10px 0; font-size: 21px; line-height: 1.55; color: #234; position: relative; }
  .voice::before { content: "“"; font-size: 54px; color: var(--accent); opacity: .4; position: absolute; top: -6px; left: 10px; }
  .voice .who { display: block; font-size: 16px; color: #5a6764; margin-top: 6px; text-align: right; }

  /* ===== ツール3枚 ===== */
  .tools { display: flex; gap: 14px; margin-top: 8px; }
  .tool { flex: 1; background: #fff; border: 1.5px solid #e0e7e6; border-radius: 14px; padding: 14px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .tool .t-h { font-size: 21px; font-weight: 800; color: var(--accent-dark); margin-bottom: 6px; }
  .tool .t-b { font-size: 17px; line-height: 1.5; color: #333; }
  .tool .t-b strong { color: var(--accent); }

  /* ===== 不動産教育 文献テーブル ===== */
  section.refs-sm ul { font-size: 16px; line-height: 1.5; }
  .lit { width: 100%; border-collapse: collapse; margin: 6px 0; font-size: 16px; }
  .lit th { text-align: left; color: var(--accent-dark); border-bottom: 2px solid var(--accent); padding: 6px 10px; }
  .lit td { border-bottom: 1px solid #e2e8e6; padding: 6px 10px; vertical-align: top; line-height: 1.4; }
  .lit td.tag { white-space: nowrap; font-weight: 700; color: var(--accent); }

  /* ===== 動画 ===== */
  section.fig .fig-area video { max-height: 410px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.16); }
  section.fig .fig-area img { max-height: 410px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.12); }

  /* ===== 右上の小さな誘導ノート ===== */
  .tr-note { position: absolute; top: 74px; right: 40px; width: 290px; background: #FFF6E6; border: 1.5px solid #E0A93B; border-radius: 10px; padding: 7px 14px; font-size: 15px; line-height: 1.4; color: #7a5510; z-index: 6; }
  .tr-note b { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="cover-grid">
<div class="cover-left">

<div class="cv-kicker"><img src="./src/meikai-realestate-logo.png" alt="不動産学部">明海大学 不動産学部 FD講習会</div>

<div class="cv-title">生成AIとの<br><span class="accent">向き合い方</span></div>

<div class="cv-sub">学生の学びを守り、教育をもっと面白くするために</div>

<div class="cv-foot">
<div class="cv-photo"><img src="./src/profile.jpg" alt="田川 翔"></div>
<div class="cv-meta">
<div class="ev">2026/7/2（木）13:00–14:30 ・ 浦安キャンパス</div>
<div><span class="nm">田川 翔</span>（タガワ ショウ）</div>
<div>千葉大学 国際未来教育基幹 助教<br>博士（理学）・専門：高等教育論／地球惑星科学</div>
</div>
</div>

</div>
<div class="cover-right">

<img class="hero" src="./src/google-gemini-chrome.png" alt="Gemini in Chrome（Google for Education）">
<div class="cap">Gemini in Chrome ─ 大学アカウントで使える生成AI（Google for Education）</div>

</div>
</div>

<!--
- 本日はお招きいただきありがとうございます。千葉大学の田川と申します。専門は高等教育論と地球科学です。
- テーマは「生成AIとの向き合い方」。禁止か容認かという二択ではなく、先生方ご自身がどう"向き合う文脈"を作るか、を一緒に考える90分にしたいと思います。
- 不動産学部の先生方に向けて、不動産分野の事例も交えながらお話しします。
-->

---

<!-- _class: split -->

<div class="page-title">自己紹介</div>

## 理学 → 民間 → 教育、その先に見た「AIの可能性」

<div class="split-body">
<div class="left">

### これまでの歩み

- **理学**：東京大学で博士（理学）。地球の中心核の組成を高圧実験で研究
- **民間**：航空貨物物流の現場でデータと意思決定に向き合う
- **教育**：現在は千葉大学で高等教育・FD/SD・AI教育工学

<div class="voice">
分野を移るたびに「学び直し」を迫られました。その経験から、<strong>生成AIは"学び直しを支える最強の伴走者"</strong>になりうると感じています。
<span class="who">― 自己紹介に代えて</span>
</div>

</div>
<div class="right">

### いま取り組んでいること

- 教科書 **『Teaching with AI』（Bowen & Watson）の翻訳**
- 千葉大学 **全学の生成AI教育・支援**の設計
  - 学生向け「生成AI活用講座」
  - 教職員向け **15分セッション**（ランチタイム研修）
  - 学生参画による大学の価値の議論
- AIと学術ライティング自己効力感の研究（JSET）

<div class="srcline"><b>翻訳中:</b> J. A. Bowen &amp; C. E. Watson, <i>Teaching with AI</i>, 2nd ed., Johns Hopkins Univ. Press (2026)／田川 訳・近刊</div>

</div>
</div>

<!--
- 私自身、理学→民間→教育とキャリアを変えてきました。そのたびに「ゼロから学び直す」必要があり、苦労しました。
- だからこそ、生成AIが"学び直しの伴走者"になりうる可能性に強く惹かれています。
- いまは Bowen & Watson の『Teaching with AI』翻訳と、千葉大全体のAI教育の設計をしています。今日の内容もその実践から来ています。
-->

---

<!-- _class: summary -->

<div class="page-title">本日の目標</div>

## 90分・3つのテーマ（各約20分＋体験・質問）

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 1 ・ <span class="min">13:10–13:35</span></div>
<div class="agenda-pill pill-1">関わり方</div>
</div>
<div class="agenda-list">

- 学生に生成AIと**どう関わってほしいか**を言葉にする
- → 匿名アンケートに記入し、会場で共有します

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 2 ・ <span class="min">13:35–14:00</span></div>
<div class="agenda-pill pill-2">業務活用</div>
</div>
<div class="agenda-list">

- 生成AIを**教務・業務の効率化**に活かす方法がわかる
- → 実際に会場で **Gemini** を触ってみます

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 3 ・ <span class="min">14:00–14:25</span></div>
<div class="agenda-pill pill-3">授業設計</div>
</div>
<div class="agenda-list">

- AI時代の**授業・評価設計**の考え方がわかる
- → 学びを損なわず、教育をもっと面白くする方法

</div>
</div>

</div>

<div class="takeaway">ゴール：先生方ご自身の「生成AIとの向き合い方」を、ひとつ言葉にして持ち帰る</div>

<!--
- 今日は講義回で、3つのテーマを各20分ずつ。間に体験・質問・休憩を5〜10分はさみます。
- Session 1は「関わり方」、2は「業務活用」、3は「授業・評価設計」。それぞれ手を動かす時間を必ず入れます。
- 完璧に覚えるのではなく、ご自身の向き合い方をひとつ言葉にして帰っていただくのがゴールです。
-->

---

<!-- _class: split -->

<div class="page-title">全体の位置づけ</div>

## 今回は、実は「3回シリーズ」の第1回です

<div class="split-body">
<div class="left">

### 3回の構成

<div class="callout-green"><strong>第1回（本日）</strong> 講義｜向き合い方・業務活用・授業設計</div>
<div class="callout-orange"><strong>第2回</strong> ワーク｜AIの使い方と、授業を面白くするアイデア形成</div>
<div class="callout-blue"><strong>第3回</strong> ワーク｜第2回のフォローアップとマインド形成</div>

- 第2回以降は**自由参加**。実際に手を動かして試します

</div>
<div class="right">

### 今日の進め方のお願い

- **Slido** で皆さまの考えを集め、その場で共有します
- **PCでのアクセス**を推奨します
- 体験パートでは、隣の方と話しながら進めます

<div class="callout-yellow">Google for Education から、ステッカー等のノベルティもご用意しています</div>

</div>
</div>

<div class="takeaway">「聞いて終わり」ではなく、考え・手を動かし・持ち帰る90分にしましょう</div>

<!--
- 実は今日は3回シリーズの1回目です。今日は講義中心、第2回・第3回はワーク中心で、自由参加です。
- 今日はSlidoで皆さんの考えをその場で集めて共有します。PCでのアクセスをおすすめします。
- Google for Educationからステッカーなどもお配りします。気軽に参加してください。
-->

---

<!-- _class: summary -->

<div class="page-title">準備：Slido</div>

## はじめに ─ Slido にアクセスしてください

<div class="sections">

<div class="sec-box">

### アクセス方法

<div class="sec-qr-row">
<div class="sq-text">

- 中央のQR、または右のURLから入れます
- **PCでのアクセス**を推奨します
- 質問・アンケート・意見共有に使います

</div>
<div class="sq-qr">
<img src="./src/slido-qr.png" alt="Slido QRコード">
</div>
<div class="sq-url"><a href="https://app.sli.do/event/u7cfG5AciHocySQDbc4pJ7">app.sli.do/event/<br>u7cfG5AciHocySQDbc4pJ7</a></div>
</div>

</div>

</div>

<div class="slido-note">【データ利用のお願い】Slido・ワークへの入力情報のうち、<strong>個人情報・機微情報を除いた</strong>内容を、本研修の改善・調査研究・外部発表等に利用させていただく場合があります。特定される情報・知られたくない情報は入力なさらないようご注意ください。</div>

<div class="takeaway">最初のアンケート（0-1〜0-2）に、いまのお考えで結構ですのでご回答ください</div>

<!--
- まずSlidoに入ってください。QRかURLから。PCのほうが入力しやすいです。
- 入力データは個人情報を除き、研修改善や調査研究に使わせていただくことがあります。機微な情報は入れないでください。
- では最初のアンケート、肩の力を抜いて答えてみてください。【ここで Slido 0-1, 0-2, Pre を実施】
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 1 ・ 13:10–13:35 ・ 関わり方</div>

# 学生に、生成AIと<br>どう関わってほしいか

## 禁止でも放置でもなく、「文脈」を一緒に考える

<!--
- ここからSession 1です。問いは「先生方は、ご自身の授業で、学生に生成AIとどう関わってほしいか」。
- 結論を出す前に、まず生成AIの仕組みと、そこから来るリスクを正確に押さえます。
-->

---

<!-- _class: message -->

# 先生方の授業で、学生には<br>生成AIと「どう」関わってほしいですか？

## ── まずは、この問いを頭の片隅に置いてください

<!--
- いきなり結論は出さなくて結構です。この問いを頭の片隅に置きながら、これからの話を聞いてください。
- 最後にこの問いに戻ってきます。今日の研修の"たいのオカシラ"です。
-->

---

<!-- _class: fig -->

<div class="page-title">そもそも生成AIとは</div>

## 正体は「次の一語」を当て続けるしくみ

<div class="fig-area">
<img src="./src/nexttoken-c.png" alt="次のトークン予測の進行イメージ">
</div>

<div class="caption">「吾輩は」の次に来そうな語を確率で選ぶ ── これを繰り返して文章が生まれる
<div class="srcline"><b>仕組みの出典:</b> Vaswani et al. (2017) <i>Attention Is All You Need</i> ／ 図は千葉大「生成AIの倫理とリテラシー」教材より</div>
</div>

<div class="takeaway">「考えて答える」のではなく「もっとも"ありそう"な続きを出す」装置です</div>

<!--
- 生成AIの正体は、ものすごく大きな「次の一語あてゲーム」です。「吾輩は」と来たら、次は「猫」が来やすい、と確率で選んでいるだけです。
- 中身はTransformerという仕組みで、文中の語と語の関係を見て、次に来やすい語を選びます。出典はVaswaniらの2017年の論文です。
- ここが今日いちばん大事です。AIは"意味を理解して考えている"のではなく、"ありそうな続き"を出している。だからこそ、次に話すリスクが構造的に生まれます。
-->

---

<!-- _class: summary -->

<div class="page-title">仕組みから来る懸念</div>

## 「ありそうな続きを出す」装置だからこそのリスク

<div class="cards3">

<div class="card3 card-risk1">
<div class="c3-h"><span class="ic">⚠️</span>① 利用上の危険</div>
<div class="c3-b"><strong>ハルシネーション</strong>：もっともらしい嘘を堂々と出す<br><strong>知識のカットオフ</strong>：学習時点より新しいことは知らない</div>
</div>

<div class="card3 card-risk2">
<div class="c3-h"><span class="ic">⚖️</span>② 倫理的な危険</div>
<div class="c3-b"><strong>バイアス</strong>：学習データの偏りが出力に表れる。"平均的・典型的"な像に寄り、少数派が出にくい</div>
</div>

<div class="card3 card-risk3">
<div class="c3-h"><span class="ic">🔒</span>③ 無料AIの危険</div>
<div class="c3-b"><strong>個人情報の流出</strong>：入力が保存・学習に使われうる。一度入れた情報は取り戻せない</div>
</div>

</div>

<div class="srcline"><b>出典:</b> ハルシネーション = Kalai et al. <i>Why Language Models Hallucinate</i> (Nature, 2026)／バイアス = 総務省「上手にネットと付き合おう」生成AI特集／個人情報 = 個人情報保護法（個人情報保護委員会 ppc.go.jp）</div>

<div class="takeaway">どれも「直せる不具合」ではなく、仕組みに由来する"性質"です</div>

<!--
- 仕組みから3つのリスクが出てきます。
- ①利用上：ハルシネーション。"確からしさ"を確かめる仕組みが最初から無いので、流暢なまま堂々と間違える。さらに知識のカットオフで、学習時点より新しいことは知りません。
- ②倫理的：バイアス。学習データの偏りがそのまま出ます。"いちばんありそう"を選ぶので、典型から外れた人ほど出力に現れにくい。
- ③無料AIの危険：入力が保存・学習に使われることがあります。一度入れた個人情報は取り戻せません。これは後で安全な使い方として詳しくお話しします。
-->

---

<!-- _class: split -->

<div class="page-title">不動産・専門職の現場で</div>

## ③「無料AIに入れてはいけないもの」を具体的に

<div class="split-body">
<div class="left">

### 起こりがちな事故

- 顧客の**氏名・住所・取引条件**をそのまま入力
- 物件の**未公開情報**や契約書ドラフトを貼り付け
- （医療現場では）患者情報、（研究では）未公開データ・査読原稿

<div class="callout-pink">入力＝外部サーバーへ送信。<strong>「外」に出た情報は取り戻せません</strong></div>

</div>
<div class="right">

### 守るための3つの手立て

- **オプトアウト設定**：学習に使わせない設定にする
- **組織が契約したAIを使う**：個人の無料版を業務に使わない
- **規程・ポリシーを定める**：「何を入れてよいか」を組織で言語化

<div class="srcline"><b>根拠:</b> 個人情報保護法（個人情報保護委員会）<a href="https://www.ppc.go.jp/">ppc.go.jp</a></div>

</div>
</div>

<div class="takeaway">不動産は個人情報の塊。「安全なAI」と「規程」の整備が、活用の前提になります</div>

<!--
- 不動産分野は個人情報の宝庫です。顧客情報や取引条件、未公開物件、契約書。これらを無料のAIに入れると、保存・学習に使われるおそれがあります。
- 医療なら患者情報、研究なら未公開データや査読原稿も同じです。入力した瞬間、外部サーバーに送られ、取り戻せません。
- 対策は3つ。オプトアウト設定、組織が契約した安全なAIを使う、そして「何を入れてよいか」の規程を作ること。Session 2で安全なGeminiを具体的に紹介します。
-->

---

<!-- _class: split -->

<div class="page-title">学問の誠実さ</div>

## アカデミック・インテグリティと、研究での制限

<div class="split-body">
<div class="left">

### 学問的誠実性 ─ 6つの価値

正直 ・ 信頼 ・ 公正 ・ 敬意 ・ 責任 ・ 勇気

- 生成物を**そのまま自分の成果**として出すのは誠実さに反する
- AIの役割は**情報収集・整理まで**。どう使うかは人間の技

<div class="srcline"><b>出典:</b> ICAI, <i>The Fundamental Values of Academic Integrity</i>／日本学術振興会『誠実な科学者の心得［第2版］』(2025)</div>

</div>
<div class="right">

### 研究では、媒体ごとにルールが違う

- まず**投稿先・所属学会のAIポリシー**を確認する
- 文献検索・校正は概ね可。**本文執筆・翻訳・要約は要開示**
- **図のAI生成・査読原稿の入力・引用の捏造**は原則不可

<div class="srcline"><b>出典:</b> Science Journals「Guidelines for AI use」(science.org)</div>

</div>
</div>

<div class="takeaway">「使ったかどうか」より「誠実に、説明できる形で使ったか」が問われます</div>

<!--
- 学問の誠実さには6つの価値があります。正直・信頼・公正・敬意・責任・勇気。AIの生成物をそのまま自分の成果にするのは、この誠実さに反します。
- AIの役割は情報収集や整理まで。それをどう使うかは人間の技だ、というのは、実は明海大学の先生方が既に共有されている考え方でもあります。
- 研究では媒体ごとにルールが違います。まず投稿先や学会のポリシーを確認する。校正は概ね可、本文執筆や翻訳は要開示、図のAI生成や査読原稿の入力は原則不可。一律の正解はありません。
-->

---

<!-- _class: split -->

<div class="page-title">明海大学の現在地</div>

## 先生方は、すでに正しく理解されています

<div class="split-body">
<div class="left">

### 学内で共有されている考え方

- 個人に関する情報は**入れない**（入れたら取り戻せない）
- 企業は**セキュアな環境の中だけ**で使っている
- 生成物の**丸ごと引用は不可**（著作権・レポートとして不適）
- AIは**情報収集まで**、使い方は人間の技

</div>
<div class="right">

### さらに一歩、踏み込むなら

- ハルシネーションを**完全に防ぐ手段は、今のところ無い**
- だからこそ「**安全な環境**」と「**人の最終確認**」が要
- そして本題 ── **学生に何を求めるか**を言葉にする

<div class="callout-green">今日は、この土台の上に「教育としてどう向き合うか」を重ねます</div>

</div>
</div>

<div class="takeaway">既にお持ちの理解は、すべて正しい。本日はその先を一緒に考えます</div>

<!--
- ここで一度、明海大学の先生方が既に共有されている理解を確認させてください。個人情報は入れない、企業はセキュアな環境で使う、生成物の丸ごと引用は不可、AIは情報収集まで。すべて正しい理解です。
- さらに一歩踏み込むと、ハルシネーションを完全に防ぐ手段は今のところありません。だから「安全な環境」と「人の最終確認」が要になります。
- その正しい土台の上に、今日は「教育としてどう向き合うか」を重ねていきます。
-->

---

<!-- _class: split -->

<div class="page-title">問題提起</div>

## 学生に、どんな「関わり方の文脈」を持ってほしいか

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">関わり方①｜タイパ・コスパの道具</div>

- とにかく**早く・楽に**課題を終わらせる
- 答えをもらって**提出する**
- → 短期的には得。だが**学ぶ機会を明け渡す**

</div>
<div class="cmp-col good">
<div class="cmp-h">関わり方②｜創造性・社会貢献の道具</div>

- 自分の考えを**広げ・鍛える**相棒として使う
- たたき台を作り、**自分で吟味して超える**
- → **学び続ける力**そのものが育つ

</div>
</div>

<div class="takeaway">どちらの"文脈"を学生が持つか ── それを作れるのは、教員です</div>

<!--
- 学生のAILの関わり方は、大きく2つに分かれます。
- ①タイパ・コスパの道具として、早く楽に終わらせ、答えを提出する。短期的には得ですが、学ぶ機会を自ら明け渡しています。
- ②創造性や社会貢献のための道具として、考えを広げ鍛える相棒にする。たたき台を作って、自分で吟味して超えていく。こちらは学び続ける力が育ちます。
- どちらの文脈を学生が持つか。それを左右できるのは、ほかでもない教員です。
-->

---

<!-- _class: split -->

<div class="page-title">放置か、禁止か</div>

## どちらも「正しい」とは言い切れない

<div class="split-body">
<div class="left">

<div class="cmp-col" style="margin-bottom:12px">
<div class="cmp-h">「放置」は正しい？</div>

- 学習目標をAIに**代替**させてしまう危険
- 力がつかないまま卒業 ＝ **長期的な"負債"**

</div>
<div class="cmp-col">
<div class="cmp-h">「禁止」は正しい？</div>

- 社会に出れば、AIは**使う前提**になる
- 使えないまま送り出すことの**不利益**

</div>
</div>
<div class="right">

### 社会の現実 ── 多くの職種が影響を受ける

<div class="stat-row">
<div class="stat"><div class="num">36%</div><div class="lbl">何らかの形でAIが使われる職業タスクの割合</div></div>
<div class="stat"><div class="num">57:43</div><div class="lbl">スキル増強：自動化 のおおよその比率</div></div>
</div>

不動産・事務・専門職も例外ではありません。

<div class="srcline"><b>出典:</b> Anthropic Economic Index ／ Handa et al. (2025) arXiv:2503.04761／Massenkoff &amp; McCrory (2026) "Labor market impacts of AI"</div>

</div>
</div>

<div class="takeaway">問いは「放置か禁止か」ではなく「どう正しくマネジメントするか」</div>

<!--
- では放置すればよいかというと、それも危うい。学習目標そのものをAIに肩代わりさせ、力がつかないまま卒業する。これは長期的な"負債"です。
- 逆に全面禁止も難しい。社会に出ればAtは使う前提です。Anthropicの分析では、すでに36%の職業タスクで何らかの形でAIが使われ、用途はスキル増強と自動化がおよそ6対4。不動産も事務も専門職も例外ではありません。
- だから問いは「放置か禁止か」ではなく、「どう正しくマネジメントするか」に変わります。
-->

---

<!-- _class: summary -->

<div class="page-title">正しいマネジメント</div>

## 「禁止/容認」を超える、3つの実践

<div class="sections">

<div class="sec-box">

### ① ポリシー ─ 言葉にする

- **学校レベル・授業レベル**で、どう活用してよいかを明文化する
- 「この課題ではここまで可／ここからは不可」を**事前に伝える**

</div>

<div class="sec-box">

### ② 透明性 ─ どこで使ったかを示す

- 学生に**使用箇所の明示**を求める（隠さない文化）
- 教員も、自分がどう使ったかを**率直に共有する**

</div>

<div class="sec-box">

### ③ 自分で考える価値を伝える ─ 経験で語る

- 「なぜ自分で考えるのか」を、**実感を伴って**伝える
- そうでなければ、学生は"見習いの機会"を静かに奪われる

</div>

</div>

<div class="takeaway">ルールだけでは動かない。「なぜ」を語れる教員が、良い文脈を作ります</div>

<!--
- 正しいマネジメントは3つ。
- ①ポリシー。学校レベルと授業レベルで、どこまで使ってよいかを言葉にし、課題を出すときに事前に伝える。
- ②透明性。学生には使った箇所を明示してもらう。隠さない文化です。教員も自分の使い方を率直に共有する。
- ③自分で考える価値を、経験を伴って伝える。これが無いと、学生は知らないうちに"見習いとして育つ機会"を奪われてしまいます。
- 【ここで Slido 1-1, 1-2, 1-3 を実施】先生方ご自身の考えを入れてみてください。
-->

---

<!-- _class: summary -->

<div class="page-title">千葉大での実践</div>

## 「文脈づくり」を、現場で試しています

<div class="prac">

<div class="prac-col">
<div class="pc-h">① 学生向け講座</div>

- 学生が**AIエージェントを自作**し、その**限界を体感**
- 「できること／できないこと」を知り、**自分の文脈**を形成

</div>

<div class="prac-col">
<div class="pc-h">② 15分セッション</div>

- 教職員向けの**ランチタイム研修**
- 短く・気軽に、**理解と前向きな文脈**を広げる

</div>

<div class="prac-col">
<div class="pc-h">③ 学生参画会議</div>

- 学生と**大学の価値**を語り合う場
- 「大学は**失敗できる場所**」という学生の声

</div>

</div>

<div class="voice">
大学は、安心して失敗できる場所であってほしい。AIに答えをもらうより、<strong>失敗から学べることのほうが価値がある</strong>。
<span class="who">― 学生参画会議での学生の声</span>
</div>

<div class="takeaway">「正解の伝達」より「失敗できる場」── ここに大学の価値が残ります</div>

<!--
- 千葉大では、文脈づくりを3つの形で試しています。
- ①学生向けの活用講座。学生自身にAIエージェントを作らせ、その限界を体感させる。できること・できないことを知って初めて、自分なりの関わり方の文脈ができます。
- ②教職員向けの15分セッション。短く気軽に、理解と前向きな文脈を広げる。
- ③学生参画会議。学生と大学の価値を語り合う。ある学生が「大学は失敗できる場所であってほしい」と言いました。AIに答えをもらうより、失敗から学べることのほうが価値がある、と。この言葉に、AI時代の大学の価値が凝縮されていると感じています。
-->

---

<!-- _class: split -->

<div class="page-title">ワーク①</div>

## 先生の授業で、学生にどう関わってほしいですか？

<div class="split-body">
<div class="left">

### 進め方（Think-Pair-Share）

- **Think**：まず自分で考える（1分）
- **Pair**：隣の方と話してみる（2分）
- **Share**：スプレッドシートに記入し、会場で共有

<div class="callout-green">「正解」を探すワークではありません。<strong>言葉にすること</strong>が目的です</div>

</div>
<div class="right">

### スプレッドシートに3列で記入

| 列 | 記入すること |
|---|---|
| 科目名 | 担当されている授業 |
| 関わり方 | どう関わってほしいか |
| なぜ？ | その理由・ねらい |

<div class="srcline">→ 記入用シート（会場で共有するURL／Slidoからもアクセス可）</div>

</div>
</div>

<div class="takeaway">隣の方と話したうえで、3列を埋めてみましょう（科目名・関わり方・なぜ）</div>

<!--
- ではワークです。Think-Pair-Share。まず自分で1分考え、隣の方と2分話し、最後にスプレッドシートに記入して会場で共有します。
- 記入は3列。科目名、どう関わってほしいか、そしてなぜ。理由まで言葉にするのがポイントです。
- 正解探しではありません。言葉にすること自体が目的です。では、まず隣の方とどうぞ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 2 ・ 13:35–14:00 ・ 業務活用</div>

# 生成AIを、自分の<br>教務・学務に活かす

## 「安全に」「具体的に」使うための勘どころ

<!--
- Session 2は業務活用です。時間が短いので、要点を絞ってテンポよくいきます。
- まず「安全なAI」の話、次に「使える3つの道具」、最後に実際に触ってみます。
- 【冒頭で Slido 2-1, 2-2, 2-3 を実施】皆さんの今の使用状況を教えてください。
-->

---

<!-- _class: split -->

<div class="page-title">安全なAIとは</div>

## 「学校版／組織版」だから安心できる理由

<div class="split-body">
<div class="left">

### 個人の無料版との決定的な違い

- 入力が**モデルの学習に使われない**
- **組織の中に閉じる**（人間レビューなし）
- 教育機関向けの保護（**FERPA／COPPA準拠**）

<div class="callout-green">成績・個人情報のような機微情報も、<strong>契約とポリシーの範囲内</strong>で安全に扱えます</div>

</div>
<div class="right">

### その場で確認する習慣を

- Gemini の画面**左下からプライバシーポリシー**を開いてみる
- 「私の情報はどう使われる？」と**AI自身に尋ねる**のも有効
- 同じログインでも、**サービスごとに規約は違う**

<div class="srcline"><b>出典:</b> Google for Education (BETT 2026)／Google Workspace 管理者ヘルプ <a href="https://support.google.com/a/users/answer/16430812">support.google.com</a></div>

</div>
</div>

<div class="takeaway">「安全なAI」を選ぶこと自体が、最大のリスク対策です</div>

<!--
- まず安全なAIの話です。学校版・組織版のGeminiは、個人の無料版と決定的に違います。入力がモデル学習に使われず、組織の中に閉じ、人間のレビューもありません。教育機関向けにFERPAやCOPPAにも準拠しています。
- だから成績や個人情報のような機微情報も、契約とポリシーの範囲内であれば安全に扱えます。
- 習慣にしてほしいのは「確認」です。Geminiの左下からプライバシーポリシーを開く。分からなければ規約を貼って「私の情報はどう使われる?」とAI自身に聞くのも有効です。
-->

---

<!-- _class: summary -->

<div class="page-title">使える3つの道具</div>

## 明海大学で、今日から使えるもの（無料プラン）

<div class="tools">

<div class="tool">
<div class="t-h">Gemini app</div>
<div class="t-b"><strong>対話型のAI</strong>。文章・要約・翻訳・アイデア出し。<strong>Chromeに統合</strong>され、論文や資料を開いたまま質問できる</div>
</div>

<div class="tool">
<div class="t-h">NotebookLM</div>
<div class="t-b"><strong>自分の資料を読ませて使う</strong>。論文・配布資料を要約・クイズ・音声解説に変換。出典つきで答える</div>
</div>

<div class="tool">
<div class="t-h">Workspace Studio</div>
<div class="t-b"><strong>定型作業の自動化</strong>。Gmail・Drive・Sheetsの中で、AIが読む・分類・下書きまで（ノーコード）</div>
</div>

</div>

<div class="srcline"><b>年齢・対象:</b> Gemini 13歳以上／NotebookLM 18歳以上（大学生は対象）。表示されない場合は管理者設定を確認</div>

<div class="takeaway">「対話」「自分の資料」「自動化」── 用途で3つを使い分けます</div>

<!--
- 明海大学で今日から使えるのは、無料プランで3つ。
- Gemini appは対話型。文章、要約、翻訳、アイデア出し。Chromeにも統合されていて、論文や資料を開いたまま横で質問できます。
- NotebookLMは、自分の資料を読み込ませて使う道具。論文や配布資料を要約・クイズ・音声解説に変換し、必ず出典つきで答えます。
- Workspace Studioは定型作業の自動化。これは時間の都合で概要だけにします。用途で使い分けてください。
-->

---

<!-- _class: fig -->

<div class="page-title">Gemini app ①</div>

## Chromeに統合 ─ 論文・資料を「開いたまま」読む

<div class="tr-note">💡 不動産研究にも：<br>英語論文や物件資料を<b>開いたまま</b>要約・翻訳・質問</div>

<div class="fig-area">
<img src="./src/google-gemini-chrome.png" alt="Gemini in Chrome">
</div>

<div class="caption">Chromeの中でAIに質問できる ── 英語論文を開いたまま「この章の要点は？」と聞ける
<div class="srcline"><b>出典:</b> Google for Education「Gemini in Chrome 日本および日本語で利用可能に」</div>
</div>

<div class="takeaway">論文・市場レポート・契約資料の"読み込み"を、その場で支援できます</div>

<!--
- まずGemini in Chrome。ブラウザに直接組み込まれていて、今開いているページについてその場で質問できます。
- 特に研究で便利です。英語の論文や海外の市場レポートを開いたまま、「この章の要点は?」「この表は何を示している?」と聞ける。読み込みのスピードが変わります。
- 不動産分野でも、英語論文や物件資料、長い契約書類の読み込みに使えます。日本語にも対応しました。
-->

---

<!-- _class: fig -->

<div class="page-title">Gemini app ②</div>

## 学習・試験対策まで ─ 例：TOEIC 対策

<div class="fig-area">
<img src="./src/google-toeic.png" alt="Gemini の試験準備機能（TOEIC対策）">
</div>

<div class="caption">模擬クイズ・弱点分析・フラッシュカードまで自動生成 ── 学生の自学を支える道具にもなる
<div class="srcline"><b>出典:</b> Google for Education「Gemini の試験準備機能が TOEIC 対策に利用可能に」／教育設計 = LearnLM (arXiv:2412.16429)</div>
</div>

<div class="takeaway">「教える」だけでなく「問い返す」AI ── 学生の伴走者になりつつあります</div>

<!--
- もうひとつ。Geminiには試験準備の機能があり、たとえばTOEIC対策の模擬クイズや弱点分析、フラッシュカードまで作れます。
- 背景にはLearnLMという教育用に調整されたモデルがあります。答えを教えるのではなく、問い返して考えさせる設計です。
- これは学生の自学を支える道具になります。先生の授業の外側で、学生が一人で学ぶ時間の質を上げられるわけです。
-->

---

<!-- _class: fig -->

<div class="page-title">NotebookLM</div>

## 自分の資料を「読ませて」使う ─ 教材づくりの相棒

<div class="fig-area">
<video controls src="./src/demo-gem.mov" poster="./src/demo-gem.png" width="640"></video>
</div>

<div class="caption">配布資料・論文・シラバスを読み込ませ、要約・クイズ・音声解説・下書きへ変換（出典つき）
<div class="srcline">デモ：千葉大での Gem／NotebookLM 活用（教務支援）</div>
</div>

<div class="takeaway">「ネット上の知識」ではなく「先生の資料」に基づいて答えるのが強みです</div>

<!--
- NotebookLMは、自分の資料を読ませて使う道具です。配布資料、論文、シラバスを入れると、それだけに基づいて要約・クイズ・音声解説・下書きを作ってくれます。
- 普通のAIと違い、ネット上のあやふやな知識ではなく「先生がアップした資料」に基づいて、しかも出典つきで答えます。だからハルシネーションを抑えられます。
- 教材づくりやFAQ対応の相棒になります。動画は千葉大での活用例です。
-->

---

<!-- _class: summary -->

<div class="page-title">Workspace Studio</div>

## 定型作業の自動化 ＝「つなぐ自動化」＋AIの判断

<div class="evo">
<div class="evo-box evo-past">
<span class="evo-tag">これまで</span>
<div class="evo-body"><strong>人が手作業</strong><br>コピペ・転記・確認・通知</div>
</div>
<div class="arrow">→</div>
<div class="evo-box evo-ipaas">
<span class="evo-tag">iPaaS</span>
<div class="evo-body"><strong>連携を自動化</strong><br>アプリ同士をノーコードで繋ぐ</div>
</div>
<div class="arrow">→</div>
<div class="evo-box evo-studio">
<span class="evo-tag">Workspace Studio</span>
<div class="evo-body"><strong>AIエージェント</strong><br>連携＋Geminiの判断</div>
</div>
</div>

<div class="recipe-flow">
<div class="rf-box rf-trigger"><span class="rf-tag">きっかけ</span><div class="rf-body">フォームに回答が届いたら</div></div>
<div class="arrow">→</div>
<div class="rf-box rf-ai"><span class="rf-tag">処理（AI）</span><div class="rf-body">内容を読み、分類・要約・下書き</div></div>
<div class="arrow">→</div>
<div class="rf-box rf-out"><span class="rf-tag">出力</span><div class="rf-body">下書き保存・通知・記録</div></div>
</div>

<div class="srcline"><b>定義の出典:</b> 「Gemini を使用して Workspace 全体で定型タスクを自動化（プログラミング不要）」Google Workspace 管理者ヘルプ</div>

<div class="takeaway">「きっかけ→処理→出力」を言葉で並べるだけ。コードは書きません</div>

<!--
- Workspace Studioは時間の都合で概要だけ。要は「定型作業の自動化」です。
- これまで人が手作業でやっていたコピペや転記を、まずアプリ連携で自動化したのがiPaaS。そこにGeminiの判断を足したのがWorkspace Studioです。
- 作り方は「きっかけ→処理→出力」を言葉で並べるだけ。たとえば「フォームに回答が来たら→内容を分類して→下書きを作る」。コードは書きません。詳しくは第2回のワークで扱います。
-->

---

<!-- _class: fig -->

<div class="page-title">使いこなしの型</div>

## AIの使い方は「OODAループ」で回す

<div class="fig-area">
<img src="./src/fig-ooda-loop.svg" alt="OODAループ（AI活用版）" width="470">
</div>

<div class="caption">Observe（出力を観る）→ Orient（自分の知識と照らす）→ Decide（採用・修正・棄却）→ Act（使う／再依頼）
<div class="srcline">主語は常に「人間」。AIの出力を評価できる範囲で活用する</div>
</div>

<div class="takeaway">積み上げ式ではなく「まず使い、評価し、回す」── 評価できる範囲が活用の範囲</div>

<!--
- AIの使い方には型があります。OODAループです。元は意思決定のモデルですが、AI活用版にするとこうなります。
- Observe、AIの出力を観る。Orient、自分の知識と照らす。Decide、採用するか・直すか・捨てるかを決める。Act、使うか、もう一度頼む。
- 大事なのは、主語が常に人間だということ。そして「自分が評価できる範囲」でだけ活用する。評価できないものをそのまま使うのが、いちばん危険です。
-->

---

<!-- _class: split -->

<div class="page-title">体験ワーク</div>

## 実際に、Gemini と NotebookLM を触ってみましょう

<div class="split-body">
<div class="left">

### やってみること（提出物なし・約10分）

- 隣の方と一緒に、**Gemini** に1つ質問してみる
- できれば **NotebookLM** に資料を1つ読ませてみる
- 「**これは便利／これは怪しい**」を口に出してみる

</div>
<div class="right">

### おすすめの最初の一手

- 「この英語論文の要点を3つに」
- 「来週の授業のミニクイズを5問」
- 「この問い合わせメールへの返信案を」

<div class="callout-yellow">うまくいかなくて当然。<strong>OODAで「直して再依頼」</strong>を体感してください</div>

</div>
</div>

<div class="takeaway">完璧を狙わず、まず触る。「評価しながら使う」感覚をつかみましょう</div>

<!--
- では体験です。提出物はありません。10分ほど、隣の方と一緒にGeminiに質問してみてください。できればNotebookLMに資料を読ませるところまで。
- 最初の一手のおすすめはここに出した3つ。論文の要点、ミニクイズ、返信案。
- うまくいかなくて当然です。さっきのOODAで「直して再依頼」を体感してください。では、どうぞ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 3 ・ 14:00–14:25 ・ 授業設計</div>

# AI時代の<br>授業・評価設計の工夫

## 学びを損なわず、教育をもっと面白くする

<!--
- 最後のSession 3。授業と評価の設計です。ここがいちばん教員の腕の見せ所です。
- 「学びを損なわない守りの設計」と「もっと面白くする攻めの設計」の両方をお話しします。
-->

---

<!-- _class: message -->

# AIが答えを出せる時代に、<br>「大学の価値」とは何でしょうか？

## ── 知識の伝達だけなら、AIで代替できてしまう

<!--
- AIが答えを出せる時代に、大学の価値とは何か。知識を伝達するだけなら、もうAIで代替できてしまいます。
- では何が残るのか。次のスライドで、その答えのひとつを示します。
-->

---

<!-- _class: split -->

<div class="page-title">教員の役割の変化</div>

## 「知識の専門家」から「学びのファシリテーター」へ

<div class="split-body">
<div class="left">

### 残る価値・高まる価値

- **問いを立てる**力、議論を**深める**力
- 学生が**安心して失敗できる「場」**をつくる力
- 一人ひとりに**寄り添う**コーチング

<div class="callout-green">知識の"配達"はAIに任せ、教員は<strong>学びの設計と伴走</strong>へ</div>

</div>
<div class="right">

### 場づくりが、これまで以上に効く

- 工業時代＝標準化・競争 → 情報化時代＝**協働・主体性**
- 「弱い教育」＝ともに、内側から知る学び
- 1対1指導の知見を、**AI＋教員**で実装できる

<div class="srcline"><b>出典:</b> Bowen &amp; Watson <i>Teaching with AI</i> (2026)／Aoun <i>Robot-Proof</i> (MIT Press)／インゴルド『教育とは何か』(2025)</div>

</div>
</div>

<div class="takeaway">Teaching に加え、Coaching へ ── 教員にしかできない部分が、むしろ際立ちます</div>

<!--
- 答えのひとつが、教員の役割の変化です。知識の専門家から、学びのファシリテーターへ。
- 残る価値、むしろ高まる価値は、問いを立てる力、議論を深める力、安心して失敗できる場をつくる力、一人ひとりに寄り添うコーチングです。
- 知識の"配達"はAtに任せて、教員は学びの設計と伴走へ。AounのRobot-Proofやインゴルドの「弱い教育」も、同じ方向を指しています。教えることに加えて、コーチすること。教員にしかできない部分が、むしろ際立つ時代です。
-->

---

<!-- _class: fig -->

<div class="page-title">なぜ「場」が効くのか</div>

## ブルームの「2シグマ問題」── 個別指導の威力

<div class="fig-area">
<img src="./src/fig-capability-overhang.png" alt="能力と活用のギャップ" style="max-height:300px">
</div>

<div class="caption">1対1指導の平均は、一斉授業の上位2%に届く（＝2標準偏差ぶん上）。これを AI＋教員で近づけられる
<div class="srcline"><b>出典:</b> Bloom, B. S. (1984) "The 2 Sigma Problem", <i>Educational Researcher</i> 13(6), 4–16.／能力ギャップ図 = Anthropic</div>
</div>

<div class="takeaway">かつて「実現不可能」だった個別最適が、AIで現実味を帯びてきました</div>

<!--
- なぜ場づくりや個別の伴走が効くのか。教育学の有名な発見、ブルームの2シグマ問題です。
- 1対1の個別指導を受けた生徒の平均は、普通の一斉授業の上位2%、つまり2標準偏差ぶん上に来る。偏差値でいえばプラス20です。効果は絶大なのに、全員に家庭教師はつけられない。これがずっと「実現不可能な理想」でした。
- ところがAIと教員を組み合わせれば、この個別最適に近づける可能性が出てきました。ここにAI時代の教育の希望があります。なお図は、AIの能力と現場の活用のギャップを示したものです。
-->

---

<!-- _class: split -->

<div class="page-title">守りの設計</div>

## 学びを損なわないために ─ 授業の目標は守る

<div class="split-body">
<div class="left">

### 原則

- **科目の到達目標は、絶対に動かさない**
- 目標を達成する"過程"を、AIに肩代わりさせない
- 「どこまでAIを使ってよいか」を**課題ごとに明示**する

<div class="callout-green">守るべきは目標。手段（AI可否）は目標から逆算して決める</div>

</div>
<div class="right">

### 足場かけ・足場はずし

- 序盤は**足場かけ**（AIで理解を支える）
- 終盤は**足場はずし**（AIなしで到達を確認）
- 「いつ・どこで使うか」を**学習段階で変える**

<div class="srcline">学部生か大学院生か、最初からか後半か ── 文脈で判断は変わる</div>

</div>
</div>

<div class="takeaway">目標を守れば、AIは「敵」ではなく「足場」になります</div>

<!--
- まず守りの設計です。大原則は、科目の到達目標を絶対に動かさないこと。目標を達成する過程そのものをAIに肩代わりさせてはいけません。
- そのうえで「どこまで使ってよいか」を課題ごとに明示する。守るべきは目標で、AIの可否は目標から逆算して決めます。
- 使い方の工夫が足場かけ・足場はずしです。序盤はAIで理解を支え、終盤はAIなしで到達を確認する。学部生か院生か、最初からか後半か。文脈で判断は変わります。
-->

---

<!-- _class: summary -->

<div class="page-title">評価の判断軸</div>

## 「AIを使ったか」ではなく、6つの軸で考える

<div class="axis-grid">
<div class="axis"><div class="ax-h">① 学習目標の達成</div><div class="ax-b">育てたい力が、その利用で損なわれていないか</div></div>
<div class="axis"><div class="ax-h">② 思考の主体性</div><div class="ax-b">考える過程を学生自身が担っているか</div></div>
<div class="axis"><div class="ax-h">③ 評価の妥当性</div><div class="ax-b">提出物が到達度を正しく反映しているか</div></div>
<div class="axis"><div class="ax-h">④ 学問的誠実性</div><div class="ax-b">作成過程を説明でき、欺瞞を含まないか</div></div>
<div class="axis"><div class="ax-h">⑤ 文脈依存性</div><div class="ax-b">科目特性・到達段階・目的で判断は変わる</div></div>
<div class="axis"><div class="ax-h">⑥ 評価の公平性</div><div class="ax-b">使う学生・使わない学生に同じ基準は妥当か</div></div>
</div>

<div class="srcline">大学教育学会での議論より（田口先生まとめ）。④以外は、教員自身が考えないと判断が難しい軸です</div>

<div class="takeaway">「使用の有無」で線を引かず、学びが起きたかで評価する</div>

<!--
- 評価です。「AIを使ったかどうか」で線を引くのは、もう限界です。代わりに6つの軸で考えます。
- 学習目標の達成、思考の主体性、評価の妥当性、学問的誠実性、文脈依存性、評価の公平性。これは大学教育学会での議論、田口先生のまとめです。
- 注目してほしいのは、4番の学問的誠実性以外は、教員自身が考えないと判断できない軸だということ。だからこそ、評価設計は教員の専門性そのものなのです。
-->

---

<!-- _class: split -->

<div class="page-title">評価対象を広げる</div>

## 完成物「だけ」では、学びの質は測れない

<div class="split-body">
<div class="left">

### 何を評価対象にするか

<div class="recipe-flow" style="margin-top:4px">
<div class="rf-box rf-trigger" style="flex:1"><span class="rf-tag">成果物</span><div class="rf-body" style="font-size:17px">最終レポート</div></div>
<div class="arrow">＋</div>
<div class="rf-box rf-ai" style="flex:1"><span class="rf-tag">対話記録</span><div class="rf-body" style="font-size:17px">AIとのやりとり</div></div>
<div class="arrow">＋</div>
<div class="rf-box rf-out" style="flex:1"><span class="rf-tag">振り返り</span><div class="rf-body" style="font-size:17px">学びの自己説明</div></div>
</div>

完成物に、**過程**と**省察**を加えて評価する。

</div>
<div class="right">

### 理論的な背骨

- 評価軸は「使ったか」ではなく、**本人の中に学びが起きたか**
- 学び＝**つながりの形成・維持**（コネクティビズム）

<div class="srcline"><b>出典:</b> 大学教育学会・中島先生の発表より／コネクティビズム = G. Siemens</div>

</div>
</div>

<div class="takeaway">「成果物＋AIとの対話記録＋振り返り」を、ひとそろいで評価する</div>

<!--
- 評価対象も広げます。完成物だけを見ても、学びの質は測れません。
- そこで「成果物＋AIとの対話記録＋振り返り」をひとそろいで評価します。最終レポートに、AIとどうやりとりしたかの記録と、何を学んだかの自己説明を加えるわけです。
- 背骨にあるのは、評価軸は「使ったか」ではなく「本人の中に学びが起きたか」だという考え方。学びとは、つながりの形成と維持だ、というコネクティビズムです。大学教育学会の中島先生の発表に基づいています。
-->

---

<!-- _class: split -->

<div class="page-title">攻めの設計</div>

## 課題を「作り変える」── 想像力が要る課題へ

<div class="flow">
<div class="fstep"><span class="fs-n">1</span><div class="fs-b"><strong>到達目標</strong>を確認する</div></div>
<div class="arrow">→</div>
<div class="fstep"><span class="fs-n">2</span><div class="fs-b">課題を<strong>AIに解かせて</strong>みる</div></div>
<div class="arrow">→</div>
<div class="fstep"><span class="fs-n">3</span><div class="fs-b">AIが<strong>代替する部分</strong>を特定</div></div>
<div class="arrow">→</div>
<div class="fstep"><span class="fs-n">4</span><div class="fs-b"><strong>人にしかできない</strong>所を中心に</div></div>
<div class="arrow">→</div>
<div class="fstep"><span class="fs-n">5</span><div class="fs-b"><strong>過程と省察</strong>を評価に入れる</div></div>
</div>

<div class="callout-green">AIに解かせて満点が出る課題は、作り変えのサイン。<strong>現場・対話・判断・創造</strong>を課題の中心へ</div>

<div class="srcline"><b>参考:</b> 課題リデザインの考え方（MIT 等の実践／Bowen &amp; Watson <i>Teaching with AI</i>）。Session 3 ワークで実際に試します</div>

<div class="takeaway">「AIで解けない課題」より「AIを使ってこそ深まる課題」を目指す</div>

<!--
- 守りの次は攻めです。課題そのものを作り変えます。フローはこの5ステップ。
- 到達目標を確認し、まず課題をAIに解かせてみる。AIが代替できる部分を特定し、人にしかできない部分を課題の中心に据える。そして過程と省察を評価に入れる。
- AIに解かせて満点が出るなら、それは作り変えのサインです。現場の観察、対話、判断、創造を課題の中心に。「AIで解けない課題」を探すより、「AIを使ってこそ深まる課題」を目指すのが、前向きで現実的です。これはこのあとのワークで実際に試します。
-->

---

<!-- _class: split refs-sm -->

<div class="page-title">不動産教育×生成AI</div>

## 周辺分野では、実践研究が始まっています

<div class="split-body">
<div class="left">

### 何がわかっているか

- **都市計画・参加型設計**では、理解の深化・議論の活性化・批判的思考の促進が報告
- 不動産教育そのものでは、**シナリオ分析・利害関係者対話**が有望
- ただし**定量的な学習効果の実証はまだ薄い**

<div class="callout-yellow">＝ 都市計画・参加型設計の知見を、<strong>不動産教育に応用できる段階</strong></div>

</div>
<div class="right">

### 代表的な事例

<table class="lit">
<tr><th>事例</th><th>効果</th></tr>
<tr><td class="tag">利害関係者対話のLLMシミュレーション</td><td>都市空間の批判的解釈を促す</td></tr>
<tr><td class="tag">シリアスゲーム（AI支援）</td><td>理解深化・批判的思考の向上（実証）</td></tr>
<tr><td class="tag">参加型ワークショップ×GenAI</td><td>技能差をならし議論を活性化</td></tr>
</table>

<div class="srcline">Lozano-Paredes (2026)／Ahmed et al. (2023)／von Brackel-Schmidt et al. (2024) ほか（Scopus）</div>

</div>
</div>

<div class="takeaway">不動産分野は「これから」。先生方の実践が、研究の最前線になりえます</div>

<!--
- 不動産教育に引きつけます。文献を調べると、隣接する都市計画や参加型設計では、AIを使った教育の実践研究が始まっています。
- 利害関係者の対話をAIでシミュレーションして批判的解釈を促す。AI支援のシリアスゲームで理解と批判的思考を高める。参加型ワークショップで技能差をならし議論を活性化する。こうした効果が報告されています。
- ただし不動産教育そのものでの定量的な実証はまだ薄い。逆に言えば、先生方の実践が、この分野の研究の最前線になりえます。
-->

---

<!-- _class: summary -->

<div class="page-title">未来の可能性</div>

## 生成AIで、教育は「もっと面白く」できる

<div class="sections">

<div class="sec-box">

### ① 2シグマ問題の解消へ

- AI＋教員で、**一人ひとりに合った学び**を現実に近づける

</div>

<div class="sec-box">

### ② 協働的な学びの高度化

- 個別作業はAIが支え、**人は対話・協働・創造**に時間を使える

</div>

<div class="sec-box">

### ③ 真正な課題による深い学びへ

- 現場・社会とつながる**本物の課題**に挑戦できる

</div>

</div>

<div class="takeaway">守るべき学びは守り、空いた時間で「もっと深く・面白く」へ</div>

<!--
- まとめると、生成AIは教育をもっと面白くできます。
- ①2シグマ問題の解消へ。一人ひとりに合った学びを現実に近づける。
- ②協働的な学びの高度化。個別作業はAIが支え、人は対話・協働・創造に時間を使える。
- ③真正な課題による深い学びへ。現場や社会とつながる本物の課題に挑戦できる。守るべき学びは守り、空いた時間で「もっと深く、もっと面白く」を目指しましょう。
-->

---

<!-- _class: split -->

<div class="page-title">ワーク③</div>

## 普段の課題を、AIの視点で「作り変えて」みよう

<div class="split-body">
<div class="left">

### やってみること

- ご自身の**普段の課題**を1つ思い浮かべる
- それを **Gemini に解かせて**みる（シナリオ問題でも可）
- 先ほどの**5ステップ**で、どう作り変えるか考える

</div>
<div class="right">

### 問い

- AIはどこまで解けましたか？
- **人にしかできない部分**はどこでしたか？
- どうすれば、**もっと良い課題**になりますか？

<div class="callout-green">気づきや結果を、Slido で会場全体に共有してください</div>

</div>
</div>

<div class="takeaway">「AIに解かせてみる」が、課題を磨く最短の方法です</div>

<!--
- 最後のワークです。普段出している課題を1つ思い浮かべて、実際にGeminiに解かせてみてください。シナリオ問題でも構いません。
- そして問うてください。AIはどこまで解けたか。人にしかできない部分はどこか。どうすればもっと良い課題になるか。さっきの5ステップで考えます。
- 気づきや結果はSlidoで会場全体に共有してください。【ここで Slido 3-1, 3-2, 3-3 を実施】
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ①</div>

## 今日の3つのテーマを振り返る

- **関わり方**：禁止でも放置でもなく、「文脈」を作る ── ①ポリシー ②透明性 ③価値を語る
- **業務活用**：「安全なAI」を選び、OODAで「評価しながら使う」
- **授業設計**：目標は守り、評価は6軸で。完成物＋対話記録＋振り返りを見る
- **未来**：2シグマ問題の解消、協働の高度化、真正な課題による深い学びへ
- いちばんの要点 ── **学生に良い"文脈"を作れるのは、教員です**

<!--
- 振り返ります。関わり方は、禁止でも放置でもなく文脈を作る。ポリシー、透明性、価値を語る、の3つ。
- 業務活用は、安全なAIを選び、OODAで評価しながら使う。
- 授業設計は、目標を守り、評価は6軸で。完成物だけでなく対話記録と振り返りも見る。
- そして未来は、2シグマ問題の解消、協働の高度化、真正な課題へ。いちばんの要点は、学生に良い文脈を作れるのは教員だ、ということです。
-->

---

<!-- _class: message -->

# 最初の問いに戻ります ──<br>学生に、どう関わってほしいですか？

## 今日いちばん持ち帰ってほしい、ひとつの言葉

<!--
- 最初の問いに戻ります。先生方は、ご自身の授業で、学生に生成AIとどう関わってほしいですか。
- 今日の話を踏まえて、ご自身の言葉でひとつ、答えを持ち帰ってください。それが今日いちばんのお土産です。
- "たいのオカシラ"、最初の問題提起をここで回収しました。一本の研修として、つながったでしょうか。
-->

---

<!-- _class: split -->

<div class="page-title">次回のご案内</div>

## 第2回・第3回（ワーク・自由参加）

<div class="split-body">
<div class="left">

### 第2回｜つくってみる

<div class="callout-orange">生成AIの使い方レクチャー＋<strong>授業を面白くするアイデア形成</strong>。実際に手を動かします</div>

### 第3回｜続ける

<div class="callout-blue">第2回のフォローアップと<strong>マインド形成</strong>。様々なアイデアを試します</div>

</div>
<div class="right">

### お持ち帰り

- Google for Education の**ステッカー等**をどうぞ
- 本日のスライド・参考リンクは**後日共有**します
- 学内での相談・実践に、いつでもお声がけください

<div class="callout-green">「まず1つ、試してみる」── そこから始まります</div>

</div>
</div>

<div class="takeaway">第2回・第3回は自由参加。気になる回だけのご参加で結構です</div>

<!--
- 次回のご案内です。第2回は実際に手を動かして、授業を面白くするアイデアを形にします。第3回はそのフォローアップとマインド形成です。どちらも自由参加です。
- Google for Educationのステッカーもお持ち帰りください。今日のスライドと参考リンクは後日共有します。
- まず1つ試してみる。そこからすべて始まります。今日はありがとうございました。
-->

---

<!-- _class: qa -->

# ありがとうございました

## ご質問・ご相談を、どうぞ

<!--
- ありがとうございました。残りの時間で、ご質問やご相談を受けます。どんな小さなことでも結構です。
-->

---

<!-- _class: refs -->

<div class="page-title">参考文献・出典 ①</div>

## 参考文献・出典 ①（仕組み・リスク・影響）

- Vaswani, A. et al. (2017). *Attention Is All You Need*. NeurIPS.
- Kalai, A. et al. (2026). *Why Language Models Hallucinate*. Nature. https://www.nature.com/articles/s41586-026-10549-w
- 総務省「上手にネットと付き合おう」生成AI特集. https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/
- 個人情報保護委員会. https://www.ppc.go.jp/
- ICAI (2021). *The Fundamental Values of Academic Integrity* (3rd ed.). academicintegrity.org
- 日本学術振興会 (2025).『科学の健全な発展のために ─ 誠実な科学者の心得［第2版］』. https://www.jsps.go.jp/j-kousei/rinri.html
- Science Journals. *Guidelines for AI use*. science.org
- Handa, K. et al. (2025). *Which Economic Tasks are Performed with AI?* (Anthropic Economic Index). arXiv:2503.04761
- Massenkoff, M. & McCrory, J. (2026). *Labor market impacts of AI*. Anthropic. https://www.anthropic.com/research/labor-market-impacts

<!--
- 参考文献は配布資料にも載せます。気になるものは後で辿ってください。
-->

---

<!-- _class: refs -->

<div class="page-title">参考文献・出典 ②</div>

## 参考文献・出典 ②（教育・授業設計・ツール）

- Bloom, B. S. (1984). The 2 Sigma Problem. *Educational Researcher*, 13(6), 4–16. https://doi.org/10.3102/0013189X013006004
- Bowen, J. A. & Watson, C. E. (2026). *Teaching with AI* (2nd ed.). Johns Hopkins Univ. Press.（田川 翔 訳・近刊）
- Aoun, J. E. (2017/2024). *Robot-Proof: Higher Education in the Age of AI*. MIT Press.
- T. インゴルド (2025).『教育とは何か』古川不可知 訳. 亜紀書房.（原題 *Anthropology and/as Education*, 2018）
- レイヴ & ウェンガー (1993).『状況に埋め込まれた学習 ─ 正統的周辺参加』産業図書.
- Wiley (2025). *ExplanAItions* 研究者調査. wiley.com
- Google for Education (BETT 2026). https://blog.google/products-and-platforms/products/education/bett26-premium-ai/
- Google Workspace 管理者ヘルプ（Workspace Studio）. https://support.google.com/a/users/answer/16430812
- LearnLM. arXiv:2412.16429
- 不動産教育×生成AI：Lozano-Paredes (2026); Boyce et al. (2026); Ahmed et al. (2023); von Brackel-Schmidt et al. (2024) ほか（Scopus）

<!--
- こちらは教育と授業設計、ツール関連の出典です。Teaching with AIは私が翻訳中の本です。
- 不動産教育の文献は、ご関心があれば個別にPDFをお送りします。本日はありがとうございました。
-->
