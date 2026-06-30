---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIとの向き合い方</div><span class="hdr-event">生成AIに関するFD講習会</span><img class="hdr-logo" src="./src/meikai-logo.png" alt="明海大学">'
footer: ''
style: |
  :root {
    --accent: #00736B;          /* 明海大学カラー（ティール／グリーン） */
    --accent-dark: #004D45;
    --accent-soft: #E3F1EF;
    --section-bg: #F1F8F7;
    --hdr-left-w: 25%;
  }
  /* ワーク（参加型）スライドは“四角の枠”で示す（色はティールのまま）。_class に work を追加。
     本文(.split-body)をカードで囲い、左上に「WORK」タブを出す */
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
  /* ヘッダー右：イベント名ラベル＋主催校ロゴ（ロゴの左隣に小さく） */
  section > header .hdr-event { margin-left: auto; align-self: center; margin-right: 14px;
    font-size: 16px; font-weight: 700; color: #5a6764; white-space: nowrap; line-height: 1.15; }
  section > header .hdr-logo { margin-left: 0; }
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

  /* ===== 表紙（cover-hero｜15min第4回スタイルに統一）=====
     レイアウト本体（.title-hero / .title-foot / .title-photo / .title-meta）は
     theme/academic.css で定義。色は --accent（明海ティール）が自動で効くので上書き不要。 */
  section.cover-hero { --hdr-left-w: 25%; }
  section.cover-hero .title-small { color: #2a2d33; }
  section.cover-hero .title-affil { font-size: 22px; color: #44504d; }
  /* 明海FDシリーズの帯（パネル）：タイトル上に中央寄せ */
  section.cover-hero .cv-kicker { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 20px; padding: 7px 18px; border-radius: 8px; margin-bottom: 22px; }
  section.cover-hero .cv-kicker img { height: 24px; background: #fff; border-radius: 3px; padding: 1px 3px; }

  /* ===== 自己紹介：理学→民間→教育 の写真ジャーニー ===== */
  .journey { display: flex; align-items: stretch; gap: 12px; margin: 8px 0 14px; }
  .journey .jarrow { align-self: center; flex: none; font-size: 30px; font-weight: 800; color: var(--accent); }
  .jcard { flex: 1; display: flex; flex-direction: column; background: #fff; border: 1.5px solid #dde6e4; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.09); }
  .jcard .jframe { height: 226px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .jcard .jframe.cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
  /* 横長の図版（地球断面・FFP掲示）は淡い背景に全体表示して文字が切れないように */
  .jcard .jframe.pad { background: #eef1f4; }
  .jcard .jframe.pad img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .jcard .jbody { padding: 10px 16px 13px; }
  .jcard .jtag { display: inline-block; font-size: 15px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 999px; padding: 3px 14px; margin-bottom: 7px; }
  .jcard .jh { font-size: 19px; font-weight: 800; color: var(--accent-dark); line-height: 1.3; margin-bottom: 4px; }
  .jcard .jt { font-size: 16.5px; line-height: 1.45; color: #3c4043; }
  .jcard .jt strong { color: var(--accent-dark); }
  /* 写真ジャーニーは縦が高いので、この回だけ上揃え（見出しをヘッダー直下に固定） */
  section.split.jtop { justify-content: flex-start !important; }
  /* ===== 訳書カバー（右カラム） ===== */
  .bookwrap { text-align: center; }
  .bookwrap img { height: 372px; border-radius: 6px; box-shadow: 0 7px 22px rgba(0,0,0,.24); border: 1px solid #e0e7e6; }
  .bookwrap .bcap { font-size: 15px; color: #7a8581; margin-top: 11px; line-height: 1.45; }

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
  .agenda-list { flex: 1; font-size: 22px; line-height: 1.5; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 5px 0; position: relative; padding-left: 1.1em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #9aa5a2; font-weight: 700; }
  /* 「→ 会場でやること」を色付きcalloutチップに */
  .agenda-list .act { display: flex; align-items: baseline; justify-content: center; gap: 8px;
    width: 92%; max-width: 540px; margin: 10px auto 0; box-sizing: border-box;
    font-size: 20px; font-weight: 700; line-height: 1.4; border-radius: 9px; padding: 7px 18px; }
  .agenda-list .act .ai { font-size: 18px; transform: translateY(1px); }
  .act-1 { background: #E3F1EF; color: var(--accent-dark); }
  .act-2 { background: #FBEAD9; color: #9a4a12; }
  .act-3 { background: #E7EAF3; color: #34406b; }

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
  .voice { background: var(--accent-soft); border-radius: 12px; padding: 14px 22px 14px 56px; margin: 10px 0; font-size: 21px; line-height: 1.55; color: #234; position: relative; }
  .voice::before { content: "“"; font-size: 54px; color: var(--accent); opacity: .4; position: absolute; top: 6px; left: 16px; line-height: 1; }
  .voice .who { display: block; font-size: 16px; color: #5a6764; margin-top: 6px; text-align: right; }
  /* callout 2行目（説明）を細字に */
  .cl-sub { font-weight: 400; }

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

  /* ===== 第1回(倫理リテラシー)デックから移植した図解クラス（ティール配色に変換） ===== */
  .red { color: var(--accent); font-weight: 700; }
  .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 6px; }
  .cbox { border-radius: 10px; overflow: hidden; background: #F5F7F6; margin: 8px 0; border: 1px solid #e2e8e6; }
  .cbox > .h { color: #fff; font-weight: 700; font-size: 20px; padding: 8px 18px; }
  .cbox > .b { padding: 11px 18px 13px; font-size: 18px; line-height: 1.55; color: #2a2d33; }
  .cbox > .b .red, .cbox > .b .hl { color: var(--accent); }
  .cbox > .b .hl-dark { color: var(--accent-dark); }
  .cbox > .b ul { margin: 3px 0 3px 1.1em; } .cbox > .b li { margin: 6px 0; }
  .cbox.mid > .h { background: var(--accent); }
  .cbox.deep > .h { background: var(--accent-dark); }
  .band { background: var(--accent-soft); border-left: 8px solid var(--accent); border-radius: 6px; padding: 10px 20px; margin: 10px 0; font-size: 21px; font-weight: 700; }
  section:has(.band) { padding-bottom: 60px; }
  section > .band:last-child { margin-top: auto; }
  .lyr { display: flex; align-items: flex-start; gap: 12px; margin: 11px 0; font-size: 21px; line-height: 1.4; }
  .lyr .sw { flex: none; width: 22px; height: 22px; border-radius: 5px; margin-top: 4px; border: 1px solid rgba(0,0,0,.18); }
  .lyr b { font-weight: 800; color: var(--accent-dark); }
  .lyrnote { font-size: 18px; color: #6e7378; margin-top: 12px; line-height: 1.5; }
  .ss-tune { font-size: 19px !important; }
  .attr { font-size: 16px; color: #6e7378; margin-top: 6px; }
  .attr a { color: var(--accent); text-decoration: none; word-break: break-all; }
  .figwrap { text-align: center; } .figwrap img { max-height: 400px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.12); }
  /* 16+17統合：推論(Inference)の囲み */
  .infer-box { border: 2px solid var(--accent); border-radius: 14px; margin: 6px 0; overflow: hidden; }
  .infer-box .infer-h { background: var(--accent); color: #fff; font-size: 17px; font-weight: 800; padding: 7px 18px; line-height: 1.35; }
  .infer-box .infer-body { display: flex; align-items: center; gap: 16px; padding: 12px 18px; }
  .infer-box .infer-l { flex: 0 0 37%; text-align: left; }
  .infer-box .infer-l .infer-fig { justify-content: flex-start; }
  .infer-box .infer-r { flex: 1; min-width: 0; }
  .infer-box .infer-step { font-size: 17px; font-weight: 700; color: var(--accent-dark); margin-bottom: 7px; }
  .infer-box .infer-step b { color: var(--accent); }
  .infer-box .infer-fig { height: 280px; display: flex; align-items: center; justify-content: center; }
  .infer-box .infer-fig img, .infer-box .infer-fig svg { max-height: 100%; max-width: 100%; width: auto; height: auto; }
  .infer-box .infer-fig img { border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,.1); }
  /* slide34: 縦並びツール＋右に写真（Google for Edu Champion） */
  .t34 { display: flex; gap: 22px; align-items: stretch; margin-top: 6px; }
  .t34-left { flex: 1; min-width: 0; }
  .t34-right { flex: 0 0 352px; display: flex; flex-direction: column; }
  .tools-v { flex-direction: column; gap: 10px; margin-top: 0; }
  .tools-v .tool { flex: 1; padding: 11px 18px; }
  .t34-right img { width: 100%; border-radius: 10px; box-shadow: 0 3px 14px rgba(0,0,0,.18); object-fit: cover; max-height: 300px; }
  .champ { background: var(--accent-soft); border: 1.5px solid #c2e0db; border-left: 5px solid var(--accent); border-radius: 10px; padding: 10px 14px; margin-top: 10px; font-size: 16px; line-height: 1.5; color: #234; }
  .champ strong { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="cv-kicker"><img src="./src/meikai-realestate-logo.png" alt="不動産学部">明海大学 不動産学部 FD講習会</div>
<div class="title-small">学生の学びを守り、教育をもっと面白くするために</div>
<div class="title-big">生成AIとの向き合い方</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">明海大学 不動産学部 FD講習会 #1　｜　浦安キャンパス</div>
<div class="title-date">2026/7/2（木）13:00–14:30</div>
<div class="title-affil">千葉大学 国際未来教育基幹 助教　田川 翔（タガワ ショウ）<br>博士（理学）・専門：高等教育論／地球惑星科学</div>
</div>
</div>

<!--
- 本日はお招きいただきありがとうございます。千葉大学の田川と申します。専門は高等教育論と地球科学です。
- テーマは「生成AIとの向き合い方」。禁止か容認かという二択ではなく、先生方ご自身がどう"向き合う文脈"を作るか、を一緒に考える90分にしたいと思います。
- 不動産学部の先生方に向けて、不動産分野の事例も交えながらお話しします。
-->

---

<!-- _class: split jtop -->

<div class="page-title">自己紹介</div>

## 理学 → 民間 → 教育 ── 分野を越えて実感している「生成AIの可能性」

<div class="journey">
<div class="jcard">
<div class="jframe pad"><img src="./src/fig-intro-earth.png" alt="地球の断面図とダイヤモンドアンビル（超高圧高温実験）"></div>
<div class="jbody">
<span class="jtag">理学</span>
<div class="jh">地球の中心を、実験で再現</div>
<div class="jt">博士（理学）。45万気圧・3500Kの超高圧高温で<strong>地球の核から海の起源</strong>に挑む。</div>
</div>
</div>
<div class="jarrow">→</div>
<div class="jcard">
<div class="jframe cover"><img src="./src/fig-intro-cargo.jpg" alt="早朝の貨物便（Nippon Cargo）"></div>
<div class="jbody">
<span class="jtag">民間</span>
<div class="jh">航空貨物物流の最前線へ</div>
<div class="jt">世界を結ぶ貨物便の現場で、<strong>データと意思決定</strong>に世界と向き合う。</div>
</div>
</div>
<div class="jarrow">→</div>
<div class="jcard">
<div class="jframe pad"><img src="./src/fig-intro-ffp.png" alt="東京大学FFP（大学で教えることを学ぶ）"></div>
<div class="jbody">
<span class="jtag">教育</span>
<div class="jh">千葉大学で高等教育・AI教育工学</div>
<div class="jt">東大FFPで「PreFD」を学んだことで、いまは<strong>高等教育論・生成AI教育</strong>に従事。</div>
</div>
</div>
</div>

<div class="voice">
分野を移るたびに「学び直し」を迫られました。その経験から、<strong>生成AIは"学びや仕事を支える道具・伴走者"</strong>になりうると感じています。学生・教職員にとって、生成AIとの良い文脈を作るのが自分の仕事です。
<span class="who">― 自己紹介に代えて</span>
</div>

<!--
- 私自身、理学→民間→教育とキャリアを変えてきました。地球の中心核を高圧実験で再現する研究から、航空貨物物流の現場、そして大学教育へ。
- そのたびに「ゼロから学び直す」必要があり、苦労しました。だからこそ、生成AIが"学び直しの伴走者"になりうる可能性に強く惹かれています。
-->

---

<!-- _class: split -->

<div class="page-title">いま取り組んでいること</div>

## 大学で「教える・学ぶ」を、生成AIでアップデートする

<div class="split-body">
<div class="left">

### 千葉大学での実践

- アメリカ・カレッジ大学協会の教科書の翻訳
 **『Teaching with AI』（Bowen & Watson）**
- 千葉大学 **全学の生成AI教育・支援**の設計
  - 学生向け「生成AI活用講座」
  - 教職員向け **15分セッション**（1回60分、体験型）
  - 学生参画による大学の価値の議論
- 教育における研究
  - 大学のUXをアプリと大学基盤
  - AIクロス型の教育カリキュラムの比較
  
<div class="voice">
  今日お話しすることは、<strong>現場の実践</strong>から来ています。
</div>

</div>
<div class="right">

<div class="bookwrap">
<img src="./src/fig-intro-book.png" alt="訳書『AI時代の大学教育（Teaching with AI）』">
<div class="bcap">翻訳中：J. A. Bowen &amp; C. E. Watson<br><i>Teaching with AI</i>（原著 2nd ed.）／<br>邦題『AI時代の大学教育』技術評論社・近刊（田川 訳）</div>
</div>

</div>
</div>

<!--
- いまは Bowen & Watson の『Teaching with AI』翻訳（邦題『AI時代の大学教育』）と、千葉大全体のAI教育の設計をしています。
- 右が訳書のカバー。「学生がAIを使ってレポートを書いてきたら?」という問いは、まさに今日の本題です。今日の内容もこの実践から来ています。
-->

---

<!-- _class: summary -->

<div class="page-title">本日の目標</div>

## 90分・3つのテーマ（各約20分＋体験・質問）

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 1 ・ <span class="min"><br>13:10–13:35</span></div>
<div class="agenda-pill pill-1">文脈づくり</div>
</div>
<div class="agenda-list">

- 学生が生成AIと**どう関わってほしいか**を言葉にする

<div class="act act-1"><span class="ai">✍️</span>匿名アンケートに記入し、会場で共有します</div>

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 2 ・ <span class="min"><br>13:35–14:00</span></div>
<div class="agenda-pill pill-2">業務活用</div>
</div>
<div class="agenda-list">

- 教職員の皆様が、生成AIを**教務・業務の効率化**に活かす方法がわかる

<div class="act act-2"><span class="ai">🖐️</span>実際に会場で <strong>Gemini</strong> を触ってみます</div>

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">Session 3 ・ <span class="min"><br>14:00–14:25</span></div>
<div class="agenda-pill pill-3">授業設計</div>
</div>
<div class="agenda-list">

- AI時代の**授業・評価設計**の考え方がわかる

<div class="act act-3"><span class="ai">💡</span>学びを損なわず、教育をもっと面白くする方法</div>

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

<div class="callout-green"><strong>第1回（本日）</strong> 講義<br><span class="cl-sub">向き合い方・業務活用・授業設計</span></div>
<div class="callout-orange"><strong>第2回</strong> ワーク<br><span class="cl-sub">AIの使い方と、授業を面白くするアイデア形成</span></div>
<div class="callout-blue"><strong>第3回</strong> ワーク<br><span class="cl-sub">第2回のフォローアップとマインド形成</span></div>

- 第2回以降は**任意参加ワークショップ**。

</div>
<div class="right">

### 今日の進め方のお願い

- **Slido** で皆さまの考えを集め、その場で共有します
- **PCでのアクセス**を推奨します
- 体験パートでは、隣の方と話しながら進めます

<div class="callout-yellow"><span class="ss-tune" style="color:#A6192E !important">第二回目ご参加の先生へ</span><br>Google for Education から、ステッカー等のノベルティもご用意しています</div>

</div>
</div>

<div class="takeaway">「聞いて終わり」ではなく、考え・手を動かし・持ち帰る90分にできると嬉しいです</div>

<!--
- 実は今日は3回シリーズの1回目です。今日は講義中心、第2回・第3回はワーク中心で、自由参加です。
- 今日はSlidoで皆さんの考えをその場で集めて共有します。PCでのアクセスをおすすめします。
- Google for Educationからステッカーなどもお配りします。気軽に参加してください。
-->

---

<!-- _class: summary -->

<div class="page-title">グランド・ルール</div>

<style scoped>
  section .prac { margin-top: 26px; gap: 18px; }
  section .prac-col { padding: 20px 24px; }
  section .prac-col .pc-h { font-size: 22px; padding: 10px 0; margin-bottom: 14px; }
  section .prac-col li { font-size: 20px; margin: 12px 0; line-height: 1.55; }
  section .callout-green { font-size: 22px; margin-top: 24px; padding: 14px 22px; }
</style>

## 双方向で実施：互いに学び合う、協力的な「学びの場」を一緒につくる

<div class="prac">

<div class="prac-col">
<div class="pc-h">K①　敬意を持って</div>

- 相手の**意見・経験**を尊重し傾聴
- 否定から入らず、まず**受けとめる**

</div>

<div class="prac-col">
<div class="pc-h">K②　忌憚なく</div>

- 気がねせず、**率直に**出し合う
- **職位に関係なく**、ざっくばらんに
- 呼び方は「さん付け」で

</div>

<div class="prac-col">
<div class="pc-h">K③　建設的に</div>

- 否定で終わらせず、**提案・改善**を
- 「では、どうする」を一緒に考える

</div>

</div>

<div class="callout-green">合言葉は <strong>3K</strong> ──「敬意を持って」「忌憚なく」「建設的に」。どうぞ<strong>積極的に</strong>ご参加ください</div>

<div class="srcline"><b>出典:</b> 東京大学・プレFD講座 グランド・ルール</div>

<div class="takeaway">今日は、安心して発言でき、気づきのある、楽しい場を全員でつくっていきましょう</div>

<!--
- ここで一つだけ、今日の「学びの場」のグランドルールをお願いします。東京大学のプレFD講座から拝借した「3K」です。
- K①敬意を持って。相手の意見や経験、立場を尊重して聴く。K②忌憚なく。職位に関係なく、遠慮せず率直に。K③建設的に。否定で終わらせず、提案や改善につなげる。
- 今日は聞くだけでなく手を動かし、話し合う場です。安心して発言でき、失敗できる場をつくるのは、ここにいる私たち全員です。どうぞ積極的にご参加ください。
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
  section .sections .sec-qr-row .sq-qr { position: relative; top: -6px; }
  section .sections .sec-qr-row .sq-url { flex: 0 0 168px; font-size: 13px; line-height: 1.4; word-break: normal; overflow-wrap: anywhere; }
  section .astep { font-size: 19px; line-height: 1.55; margin: 4px 0 0 1.15em; padding: 0; }
  section .astep li { margin: 7px 0; }
  section .astep b { color: var(--accent-dark); }
  /* slido「イベントに参加する？」バーの再現（入力欄に make-ai1 を明示） */
  section .slido-join { display: flex; align-items: center; gap: 16px; background: #2b577d; border-radius: 999px; padding: 10px 14px; margin: 10px auto 0; max-width: 700px; }
  section .sj-label { color: #fff; font-size: 21px; font-weight: 800; padding-left: 12px; white-space: nowrap; }
  section .sj-field { flex: 1; display: flex; align-items: center; gap: 10px; background: #fff; border: 3px solid #cfe0ef; border-radius: 999px; padding: 7px 8px 7px 18px; }
  section .sj-hash { color: #2b577d; font-weight: 800; font-size: 22px; }
  section .sj-code { flex: 1; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 23px; font-weight: 800; color: #16324a; letter-spacing: 1px; background: #FFF1A8; border-radius: 5px; padding: 1px 10px; }
  section .sj-go { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; background: #2b577d; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 21px; font-weight: 800; }
  section .sj-cap { font-size: 16px; color: #5a6764; margin-top: 8px; text-align: center; }
  section .sj-cap b { color: var(--accent-dark); }
</style>

<div class="sections">

<div class="sec-box">

### ① QR・URL から

<div class="sec-qr-row">
<div class="sq-text">

- **QR**、または隣の **URL** から入れます
- **PC** からのアクセスを推奨
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

- <b>slido</b>」で検索 →　<b>slido.com/jp</b> を開き、下の青いバーの欄にコードを入力

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

<div class="slido-note">【データ利用のお願い】Slido・ワークへの入力情報のうち、<strong>個人情報・機微情報を除いた</strong>内容を、本研修の改善や報告に用いる可能性があります。機密情報・特定される情報・知られたくない情報は入力なさらないようご注意ください。</div>

<div class="takeaway">最初のアンケート（0-1〜0-2）に、いまのお考えで結構ですのでご回答ください</div>

<!--
- まずSlidoに入ってください。QRかURLから。PCのほうが入力しやすいです。
- 入力データは個人情報を除き、研修改善や調査研究に使わせていただくことがあります。機微な情報は入れないでください。
- では最初のアンケート、肩の力を抜いて答えてみてください。【ここで Slido 0-1, 0-2, Pre を実施】
-->

---

<!-- _class: summary -->

<div class="page-title">最初のアンケート</div>

<style scoped>
  section .polls { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
  section .poll { display: flex; gap: 16px; background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 12px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  section .poll .pno { flex: 0 0 auto; align-self: flex-start; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 5px 12px; white-space: nowrap; }
  section .poll .pbody { flex: 1; min-width: 0; }
  section .poll .pq { font-size: 21px; font-weight: 700; color: var(--accent-dark); line-height: 1.4; margin-bottom: 9px; }
  section .poll .ptype { font-size: 14px; font-weight: 800; color: #fff; border-radius: 999px; padding: 2px 11px; margin-left: 8px; white-space: nowrap; }
  section .ptype.multi { background: #1A6BB0; } section .ptype.single { background: #0F766E; } section .ptype.free { background: #9a5a00; }
  section .poll .popts { display: flex; flex-wrap: wrap; gap: 7px; }
  section .poll .popt { font-size: 16.5px; line-height: 1.3; background: var(--accent-soft); border: 1px solid #c2e0db; border-radius: 999px; padding: 4px 13px; color: #21413c; }
  section .poll .pfree { font-size: 16.5px; line-height: 1.45; color: #5a6764; }
</style>

## 始める前に、3つだけ Slido でうかがいます

<div class="polls">

<div class="poll">
<div class="pno">0-1</div>
<div class="pbody">
<div class="pq">いま、生成AIで「ある程度」なら、どこまで出来ると思いますか？<span class="ptype multi">複数選択</span></div>
<div class="popts">
<span class="popt">① シラバスの確認・作成支援</span>
<span class="popt">② 問題の作成支援</span>
<span class="popt">③ 学生の質問対応</span>
<span class="popt">④ スライド作成</span>
<span class="popt">⑤ 演習課題の作成</span>
<span class="popt">⑥ メール返信案・ToDoリストへの書き込み</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">0-2</div>
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
<div class="pno">0-3</div>
<div class="pbody">
<div class="pq">今日の研修が終わったとき、どうなっていたい・何を持ち帰りたいですか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「ひとつ使えそうな使い方を持ち帰りたい」「学生への伝え方のヒントがほしい」など、いまのお気持ちで結構です。</div>
</div>
</div>

</div>

<div class="takeaway">正解を当てるものではありません。いまのお考えのまま、お気軽にご回答ください</div>

<!--
- ここで最初のSlido。0-1は「ある程度ならどこまで出来そうか」、当てはまると思うものを複数選んでください。あとで実際にいくつか触ります。
- 0-2は大学教育への影響を3択で。今日の終わりに同じ質問にもう一度答えてもらい、変化を見ます。
- Preは自由記述。今日のゴール・期待を一言で。終了時のPostと対にします。肩の力を抜いてどうぞ。
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

<div class="page-title">AIとは／AIの分類</div>

## AI＝人が知的だと感じる処理を実現するシステム

<div class="fig-area">
<svg viewBox="0 0 990 400" width="100%" style="max-height:430px">
  <g text-anchor="middle">
    <rect x="95" y="14" width="235" height="82" rx="14" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="212" y="50" font-size="25" font-weight="800" fill="#004D45">Artificial</text>
    <text x="212" y="80" font-size="22" fill="#5B6068">人工的な</text>
    <text x="362" y="68" font-size="36" font-weight="800" fill="#5B6068">＋</text>
    <rect x="395" y="14" width="235" height="82" rx="14" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="512" y="50" font-size="25" font-weight="800" fill="#004D45">Intelligence</text>
    <text x="512" y="80" font-size="22" fill="#5B6068">知能</text>
    <text x="662" y="64" font-size="34" font-weight="800" fill="#5B6068">→</text>
    <rect x="695" y="17" width="200" height="76" rx="12" fill="#00736B" stroke="#004D45" stroke-width="2.5"/>
    <text x="795" y="51" font-size="26" font-weight="800" fill="#fff">AI</text>
    <text x="795" y="79" font-size="21" fill="#E3F1EF">人工知能</text>
    <text x="495" y="143" font-size="23" font-weight="700" fill="#5B6068">AIの実現方法は、大きく2つ</text>
    <line x1="495" y1="158" x2="285" y2="186" stroke="#9aa5a2" stroke-width="2"/>
    <line x1="495" y1="158" x2="705" y2="186" stroke="#9aa5a2" stroke-width="2"/>
    <rect x="95" y="188" width="380" height="150" rx="14" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="285" y="238" font-size="25" font-weight="800" fill="#5B6068">ルールベース</text>
    <text x="285" y="277" font-size="21" fill="#5B6068">人がルール・知識を書く</text>
    <text x="285" y="312" font-size="20" fill="#7a8085">例：エキスパートシステム</text>
    <rect x="515" y="188" width="380" height="150" rx="14" fill="#E3F1EF" stroke="#00736B" stroke-width="2.5"/>
    <text x="705" y="238" font-size="25" font-weight="800" fill="#004D45">機械学習</text>
    <text x="705" y="277" font-size="21" fill="#5B6068">データから自分で学ぶ</text>
    <text x="705" y="312" font-size="21" font-weight="800" fill="#00736B">★ 現在の主流</text>
    <text x="495" y="382" font-size="18" fill="#8a8f96">※「AI」は1956年のダートマス会議で命名。AIは“知能”を指し、ロボット（“体”）とは別物。</text>
  </g>
</svg>
</div>

<div class="takeaway">「猫を見分けるルール」を完璧に書くのは不可能。だからデータから学ばせる。</div>

---

<!-- _class: fig -->

<div class="page-title">AI技術の全体像</div>

## AI概念の全体像 ── 「生成AI」は、AIの全体のごく一部

<div class="fig-area">
<div style="display:flex; gap:30px; align-items:center; width:100%;">
<svg viewBox="0 0 560 470" width="100%" style="flex:0 0 43%; max-height:430px" text-anchor="middle">
  <rect x="10" y="20" width="540" height="432" rx="22" fill="#ECEDEF" stroke="#C7CACE" stroke-width="2"/>
  <text x="280" y="56" font-size="25" font-weight="800" fill="#5B6068">数理・統計・DS</text>
  <rect x="54" y="80" width="452" height="364" rx="20" fill="#E3F1EF" stroke="#2E8A80" stroke-width="2"/>
  <text x="280" y="116" font-size="25" font-weight="800" fill="#004D45">人工知能（AI）</text>
  <rect x="98" y="140" width="364" height="296" rx="18" fill="#CDE7E2" stroke="#00736B" stroke-width="2"/>
  <text x="280" y="176" font-size="24" font-weight="800" fill="#004D45">機械学習</text>
  <rect x="142" y="200" width="276" height="228" rx="16" fill="#A9D4CD" stroke="#004D45" stroke-width="2"/>
  <text x="280" y="236" font-size="24" font-weight="800" fill="#00413A">深層学習</text>
  <rect x="186" y="262" width="188" height="158" rx="14" fill="#00736B" stroke="#00413A" stroke-width="2.5"/>
  <text x="280" y="350" font-size="28" font-weight="800" fill="#fff">生成AI</text>
</svg>
<div style="flex:1; min-width:0;">
<div class="lyr"><span class="sw" style="background:#ECEDEF"></span><span><b>数理・統計・DS</b>：データを扱う数学・統計</span></div>
<div class="lyr"><span class="sw" style="background:#E3F1EF"></span><span><b>AI</b>：人が知的だと感じる処理を実現するシステム<br><span style="font-size:18px; color:#7a6a5c;"><span class="ss-tune" style="font-size:20px !important">機械学習のほか、ルールベース・探索・推論 なども含む</span></span></span></div>
<div class="lyr"><span class="sw" style="background:#CDE7E2"></span><span><b>機械学習</b>：データから自動でパターンを学ぶAI</span></div>
<div class="lyr"><span class="sw" style="background:#A9D4CD"></span><span><b>深層学習</b>：多層ネットワークで学ぶ。生成AIの土台<span style="font-size:18px; color:#7a6a5c;"><span class="ss-tune" style="font-size:20px !important"><br>リコメンデーション・自動運転なども含む</span></span></span></div>
<div class="lyr"><span class="sw" style="background:#00736B"></span><span><b>生成AI</b>：文章・画像などを“つくる”AI（この講義の主役）</span></div>
<div class="lyrnote"><span class="ss-tune" style="font-size:20px !important">※ 生成AIの手法は Transformer・GAN・拡散モデル など複数。</span></div>
</div>
</div>
</div>

<div class="takeaway">AIの範囲はきわめて広く、生成AIがその一部でしかない。AIは既に環境になった。</div>

---

<!-- _class: summary -->

<div class="page-title">機械学習</div>

## 機械学習型のAIの学び方(Training方法)は3種類

<div class="grid3">

<div class="cbox mid"><div class="h">① 教師あり学習</div><div class="b">

- <span class="red">正解（教師データ）</span>付きで学ぶ
- 例：分類・予測・回帰
- 「この画像は猫」と教える

<svg viewBox="0 0 320 124" width="100%" style="max-height:132px">
  <text x="151" y="9" font-size="9" font-weight="800" fill="#5B6068" text-anchor="middle">① 学習（正解つきで覚える）</text>
  <rect x="92" y="14" width="56" height="24" rx="4" fill="#fff" stroke="#00736B" stroke-width="1.2"/>
  <text x="106" y="31" font-size="15" text-anchor="middle">🐱</text>
  <rect x="120" y="20" width="22" height="12" rx="2.5" fill="#00736B"/>
  <text x="131" y="29" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle">ネコ</text>
  <rect x="152" y="14" width="56" height="24" rx="4" fill="#fff" stroke="#00736B" stroke-width="1.2"/>
  <text x="166" y="31" font-size="15" text-anchor="middle">🐶</text>
  <rect x="180" y="20" width="22" height="12" rx="2.5" fill="#00736B"/>
  <text x="191" y="29" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle">イヌ</text>
  <line x1="120" y1="38" x2="142" y2="54" stroke="#00736B" stroke-width="2"/>
  <line x1="180" y1="38" x2="160" y2="54" stroke="#00736B" stroke-width="2"/>
  <rect x="120" y="56" width="62" height="40" rx="10" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
  <text x="151" y="80" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">モデル</text>
  <text x="50" y="58" font-size="9" font-weight="800" fill="#5B6068" text-anchor="middle">② 予測する画像</text>
  <rect x="16" y="62" width="64" height="50" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
  <text x="48" y="99" font-size="34" text-anchor="middle">🐱</text>
  <text x="100" y="86" font-size="20" fill="#00736B" text-anchor="middle">→</text>
  <text x="198" y="86" font-size="20" fill="#00736B" text-anchor="middle">→</text>
  <rect x="214" y="62" width="96" height="46" rx="8" fill="#fff" stroke="#00736B" stroke-width="1.5"/>
  <text x="262" y="84" font-size="12" fill="#333" text-anchor="middle">これは猫</text>
  <text x="262" y="102" font-size="14" font-weight="800" fill="#00736B" text-anchor="middle">80%</text>
</svg>

</div></div>

<div class="cbox mid"><div class="h">② 教師なし学習</div><div class="b">

- <span class="red">正解なし</span>で構造を見つける
- 例：クラスタリング・次元削減
- 似たもの同士をまとめる

<svg viewBox="0 0 320 116" width="100%" style="max-height:116px">
  <rect x="6" y="12" width="96" height="92" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
  <circle cx="28" cy="34" r="7" fill="#00736B"/><circle cx="72" cy="30" r="7" fill="#1A6BB0"/>
  <circle cx="52" cy="56" r="7" fill="#E0A53F"/><circle cx="30" cy="78" r="7" fill="#1A6BB0"/>
  <circle cx="80" cy="72" r="7" fill="#00736B"/><circle cx="58" cy="90" r="7" fill="#E0A53F"/>
  <text x="120" y="62" font-size="20" fill="#00736B" text-anchor="middle">→</text>
  <ellipse cx="178" cy="40" rx="28" ry="22" fill="none" stroke="#00736B" stroke-dasharray="3 3"/>
  <circle cx="170" cy="36" r="7" fill="#00736B"/><circle cx="186" cy="42" r="7" fill="#00736B"/><circle cx="172" cy="50" r="7" fill="#00736B"/>
  <ellipse cx="244" cy="40" rx="28" ry="22" fill="none" stroke="#1A6BB0" stroke-dasharray="3 3"/>
  <circle cx="236" cy="36" r="7" fill="#1A6BB0"/><circle cx="252" cy="42" r="7" fill="#1A6BB0"/><circle cx="238" cy="50" r="7" fill="#1A6BB0"/>
  <ellipse cx="210" cy="90" rx="28" ry="20" fill="none" stroke="#E0A53F" stroke-dasharray="3 3"/>
  <circle cx="202" cy="86" r="7" fill="#E0A53F"/><circle cx="218" cy="92" r="7" fill="#E0A53F"/><circle cx="204" cy="99" r="7" fill="#E0A53F"/>
</svg>

</div></div>

<div class="cbox mid"><div class="h">③ 強化学習</div><div class="b">

- <span class="red">報酬</span>を最大化する試行錯誤
- 例：ゲームAI・自動運転
- 良い行動に“ほうび”を与える

<svg viewBox="0 0 320 116" width="100%" style="max-height:116px">
  <polygon points="10,48 10,64 24,56" fill="#00736B"/>
  <polyline points="26,56 66,56 66,30 116,30 116,84 172,84 172,46 214,46" fill="none" stroke="#1A6BB0" stroke-width="4"/>
  <circle cx="66" cy="30" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <circle cx="116" cy="84" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <circle cx="172" cy="46" r="6" fill="#E0A53F" stroke="#B97E1E"/>
  <g stroke="#aab0b6" stroke-width="2"><line x1="92" y1="52" x2="100" y2="60"/><line x1="100" y1="52" x2="92" y2="60"/><line x1="146" y1="28" x2="154" y2="36"/><line x1="154" y1="28" x2="146" y2="36"/></g>
  <circle cx="214" cy="46" r="10" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
  <polygon points="266,28 272,43 288,43 275,53 280,69 266,59 252,69 257,53 244,43 260,43" fill="#E0A53F" stroke="#B97E1E" stroke-width="1.5"/>
  <text x="266" y="88" font-size="11" font-weight="700" fill="#5B6068" text-anchor="middle">報酬（ゴール）</text>
</svg>

</div></div>

</div>

<div class="band">正解の一部だけを使う「半教師あり学習」も。実務ではこれらを組み合わせます。</div>

---

<!-- _class: split -->

<div class="page-title">ニューラルネット</div>

## 脳のニューロンを真似た“層”の重ね合わせ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 330" width="100%" style="max-height:380px">
  <g>
    <text x="60" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#00736B">入力層</text>
    <text x="190" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#5B6068">隠れ層</text>
    <text x="320" y="35" text-anchor="middle" font-size="16" font-weight="800" fill="#004D45">出力層</text>
    <g stroke="#BBDAD4" stroke-width="1">
      <line x1="60" y1="90" x2="190" y2="80"/><line x1="60" y1="90" x2="190" y2="150"/><line x1="60" y1="90" x2="190" y2="220"/>
      <line x1="60" y1="160" x2="190" y2="80"/><line x1="60" y1="160" x2="190" y2="150"/><line x1="60" y1="160" x2="190" y2="220"/>
      <line x1="60" y1="230" x2="190" y2="80"/><line x1="60" y1="230" x2="190" y2="150"/><line x1="60" y1="230" x2="190" y2="220"/>
      <line x1="190" y1="80" x2="320" y2="120"/><line x1="190" y1="80" x2="320" y2="190"/>
      <line x1="190" y1="150" x2="320" y2="120"/><line x1="190" y1="150" x2="320" y2="190"/>
      <line x1="190" y1="220" x2="320" y2="120"/><line x1="190" y1="220" x2="320" y2="190"/>
    </g>
    <g>
      <circle cx="60" cy="90" r="16" fill="#E3F1EF" stroke="#3E988E" stroke-width="2"/>
      <circle cx="60" cy="160" r="16" fill="#E3F1EF" stroke="#3E988E" stroke-width="2"/>
      <circle cx="60" cy="230" r="16" fill="#E3F1EF" stroke="#3E988E" stroke-width="2"/>
      <circle cx="190" cy="80" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="190" cy="150" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="190" cy="220" r="16" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
      <circle cx="320" cy="120" r="16" fill="#00736B" stroke="#004D45" stroke-width="2.5"/>
      <circle cx="320" cy="190" r="16" fill="#00736B" stroke="#004D45" stroke-width="2.5"/>
    </g>
    <text x="190" y="300" text-anchor="middle" font-size="16" fill="#00736B" font-weight="700">結線の“重み”を学習で調整</text>
  </g>
</svg>

</div>
<div class="right">

<div class="callout-blue">学習(Training) と 推論(Inference) 

- <span class="hl">学習</span>：データで<b>重みを調整<br>＝育てる</b>（計算が重い・1回）
- <span class="hl">推論</span>：育てた<b>重みで答えを出す<br>＝使う</b>（重みは固定・軽い）
</div>

- 隠れ層を<span class="red">深く</span>重ねたものが深層学習
- 画像・音声・言語の処理に強い

<div class="callout-green">生成AIの“中核”も、この<strong>ニューラルネット</strong>

- ✕ <span class="hl-dark">厳密なルール集</span>でも、<span class="hl-dark">回答例集</span>でもない
- ◯ 正体は学習で調整した<span class="hl">数字（重み）の塊</span>

</div>
</div>
</div>

<div class="takeaway">学習 (Training)＝“重みという数字を調整し、回答を当てにいく”地道な作業です。</div>

---

<!-- _class: split jtop -->

<div class="page-title">生成AIとは</div>

## “認識・分類”から“生成”へ

<style scoped>
  section.split.jtop .split-body { min-height: 300px; }   /* 既定360pxを圧縮（SVGは収め、calloutを押し出さない） */
  section .callout-blue, section .callout-green { margin-top: 9px; padding: 9px 18px; }
  section .callout-blue li { margin: 3px 0; }
</style>

<div class="split-body">
<div class="left">

<svg viewBox="0 20 380 285" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <text x="190" y="35" font-size="16" font-weight="800" fill="#5B6068">従来のAI</text>
    <rect x="35" y="55" width="100" height="46" rx="8" fill="#fff" stroke="#5B6068" stroke-width="1.8"/>
    <text x="85" y="83" font-size="16" font-weight="700" fill="#5B6068">入力</text>
    <text x="155" y="84" font-size="20" font-weight="800" fill="#5B6068">→</text>
    <rect x="185" y="55" width="160" height="46" rx="8" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.8"/>
    <text x="265" y="83" font-size="16" font-weight="700" fill="#5B6068">分類ラベル</text>
    <line x1="30" y1="135" x2="350" y2="135" stroke="#BBDAD4" stroke-width="1.5"/>
    <text x="190" y="175" font-size="16" font-weight="800" fill="#00736B">生成AI</text>
    <rect x="35" y="195" width="100" height="46" rx="8" fill="#fff" stroke="#00736B" stroke-width="2"/>
    <text x="85" y="223" font-size="16" font-weight="700" fill="#004D45">入力</text>
    <text x="155" y="224" font-size="20" font-weight="800" fill="#00736B">→</text>
    <rect x="185" y="185" width="160" height="66" rx="8" fill="#E3F1EF" stroke="#00736B" stroke-width="2.5"/>
    <text x="265" y="212" font-size="16" font-weight="700" fill="#004D45">新しい文章</text>
    <text x="265" y="234" font-size="16" font-weight="700" fill="#004D45">・画像を生成</text>
    <text x="190" y="295" font-size="16" fill="#5B6068">識別する → 作り出す へ</text>
  </g>
</svg>

</div>
<div class="right">

- 従来のAIは<span class="red">識別・予測</span>が中心
- 生成AIは<span class="red">尤もらしい続き</span>（＝それらしい続き）を作る
- <span class="red">次に来る語</span>を一つ選び、入力に戻して繰り返す
- 文章を扱うものが<span class="red">LLM</span>（大規模言語モデル）

</div>
</div>

<div class="callout-blue">推論モデル（reasoning model）

- Transformerの<span class="hl">一度の生成だけでは十分に賢くならない</span>
- 答える前に<span class="hl">考える過程を生成</span>し、<span class="hl">繰り返し考える</span>ことで精度が上がる
</div>

<div class="callout-green">AI agent（エージェント）：<br>目標を与えると<span class="hl">計画→ツール実行→確認</span>を自分で繰り返し、タスクを最後までやり遂げるAI</div>

---

<!-- _class: fig -->

<div class="page-title">学習（Training）</div>

## 重みを「育てる」── 膨大な「次の一語あて」の練習

<div class="infer-box">
<div class="infer-h">学習（Training）── 大量の文で「次の一語」を予測し、外すたびに重み（数字）を少しずつ直す</div>
<div class="infer-body" style="display:block;">
<svg viewBox="0 0 980 240" width="100%" style="max-height:250px">
  <defs>
    <marker id="tah" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#00736B"/></marker>
  </defs>
  <g font-family="sans-serif" text-anchor="middle">
    <rect x="20" y="36" width="278" height="120" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="159" y="64" font-size="20" font-weight="800" fill="#004D45">① 次の一語を予測</text>
    <rect x="40" y="84" width="100" height="44" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="90" y="112" font-size="18" font-weight="700" fill="#33373b">吾輩は…</text>
    <text x="160" y="113" font-size="22" fill="#00736B">→</text>
    <rect x="184" y="84" width="94" height="44" rx="6" fill="#fff" stroke="#00736B" stroke-width="1.8"/>
    <text x="231" y="112" font-size="18" font-weight="800" fill="#00736B">「犬」？</text>
    <line x1="298" y1="96" x2="352" y2="96" stroke="#00736B" stroke-width="2.5" marker-end="url(#tah)"/>
    <rect x="355" y="36" width="278" height="120" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="494" y="64" font-size="20" font-weight="800" fill="#33373b">② 正解と比べる</text>
    <text x="446" y="104" font-size="18" fill="#5B6068">予測「犬」</text>
    <text x="446" y="132" font-size="18" font-weight="800" fill="#00736B">正解「猫」</text>
    <text x="568" y="119" font-size="18" font-weight="800" fill="#C0392B">→ ズレ</text>
    <line x1="633" y1="96" x2="687" y2="96" stroke="#00736B" stroke-width="2.5" marker-end="url(#tah)"/>
    <rect x="690" y="36" width="270" height="120" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="825" y="64" font-size="20" font-weight="800" fill="#004D45">③ 重みを少し直す</text>
    <text x="825" y="100" font-size="17" fill="#33373b">つなぎ目の「重み」</text>
    <text x="825" y="128" font-size="17" font-weight="800" fill="#00736B">＝数字を微調整</text>
    <path d="M825 156 L825 200 Q825 214 811 214 L173 214 Q159 214 159 200 L159 156" fill="none" stroke="#00736B" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#tah)"/>
    <rect x="402" y="198" width="176" height="32" rx="16" fill="#00736B"/>
    <text x="490" y="220" font-size="17" font-weight="800" fill="#fff">膨大に反復</text>
  </g>
</svg>
</div>
</div>

<div class="caption" style="text-align:center;">この「予測 → ずれを直す」を“膨大なテキスト × 何百万回”繰り返して、重みが定まる
<div class="srcline">重みは数百億個におよぶ。学習が終わると重みは固定され、以降の生成（推論）では変化しない</div>
</div>

<div class="takeaway">学習＝データから「重み」という無数の数字を、少しずつ調整して決めること</div>

---

<!-- _class: fig -->

<div class="page-title">言語モデルの正体</div>

## 「次の一語」を選び、足し直す ＝ 生成AIの「推論（Inference）」

<div class="infer-box">
<div class="infer-h">推論（Inference）── 学習済みの重みは固定のまま、「次の一語を選んで足す」をひたすら反復</div>
<div class="infer-body">
<div class="infer-l">
<div class="infer-step">① 次の一語を<b>確率からサンプリング</b></div>
<div class="infer-fig"><img src="./src/nexttoken-a.png" alt="「吾輩は」の次に来るトークンの確率（上位5）"></div>
</div>
<div class="infer-r">
<div class="infer-step">② 出力を入力に足して<b>繰り返す</b>（自己回帰）</div>
<div class="infer-fig">
<svg viewBox="0 0 990 430" width="100%" style="max-height:380px">
  <defs>
    <marker id="arh" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#00736B"/></marker>
  </defs>
  <g font-family="sans-serif" text-anchor="middle">
    <text x="165" y="22" font-size="17" font-weight="800" fill="#5B6068">計算1回目</text>
    <text x="495" y="22" font-size="17" font-weight="800" fill="#5B6068">計算2回目</text>
    <text x="825" y="22" font-size="17" font-weight="800" fill="#5B6068">計算3回目</text>
    <rect x="75" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#004D45" stroke-width="1.5"/>
    <text x="165" y="58" font-size="18" font-weight="700" fill="#004D45">“吾輩は”</text>
    <rect x="405" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#004D45" stroke-width="1.5"/>
    <text x="495" y="58" font-size="18" font-weight="700" fill="#004D45">“吾輩は猫”</text>
    <rect x="735" y="32" width="180" height="40" rx="6" fill="#fff" stroke="#004D45" stroke-width="1.5"/>
    <text x="825" y="58" font-size="18" font-weight="700" fill="#004D45">“吾輩は猫で”</text>
    <rect x="90" y="90" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="165" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="420" y="90" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="495" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="750" y="90" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="825" y="116" font-size="18" font-weight="800" fill="#fff">出力</text>
    <rect x="90" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="165" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="165" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="420" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="495" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="495" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="750" y="148" width="150" height="58" rx="7" fill="#1F9488" stroke="#14655B" stroke-width="1.5"/>
    <text x="825" y="174" font-size="17" font-weight="800" fill="#fff">AI処理</text>
    <text x="825" y="195" font-size="14" fill="#fff" opacity="0.95">（デコーダ）</text>
    <rect x="90" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="165" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="420" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="495" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="750" y="224" width="150" height="38" rx="7" fill="#EDEEF0" stroke="#5B6068" stroke-width="1.5"/>
    <text x="825" y="248" font-size="16" font-weight="700" fill="#33373b">前処理</text>
    <rect x="90" y="280" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="165" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="420" y="280" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="495" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="750" y="280" width="150" height="40" rx="7" fill="#00736B" stroke="#004D45" stroke-width="1.5"/>
    <text x="825" y="306" font-size="18" font-weight="800" fill="#fff">入力</text>
    <rect x="75" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="165" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩”</text>
    <rect x="405" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="495" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩は”</text>
    <rect x="735" y="338" width="180" height="40" rx="6" fill="#fff" stroke="#5B6068" stroke-width="1.5"/>
    <text x="825" y="364" font-size="18" font-weight="700" fill="#33373b">“吾輩は猫”</text>
    <path d="M165 338 L165 322" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 280 L165 264" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 224 L165 208" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 148 L165 132" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M165 90 L165 74" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 338 L495 322" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 280 L495 264" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 224 L495 208" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 148 L495 132" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M495 90 L495 74" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 338 L825 322" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 280 L825 264" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 224 L825 208" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 148 L825 132" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M825 90 L825 74" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M240 110 L335 110 L335 300 L416 300" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <path d="M570 110 L665 110 L665 300 L746 300" fill="none" stroke="#00736B" stroke-width="2" marker-end="url(#arh)"/>
    <text x="375" y="200" font-size="13" font-weight="700" fill="#00736B">出力を</text>
    <text x="375" y="218" font-size="13" font-weight="700" fill="#00736B">次の入力へ</text>
    <text x="705" y="200" font-size="13" font-weight="700" fill="#00736B">出力を</text>
    <text x="705" y="218" font-size="13" font-weight="700" fill="#00736B">次の入力へ</text>
  </g>
</svg>
</div>
</div>
</div>
</div>

<div class="srcline" style="text-align:center;"><b>仕組みの出典:</b> Vaswani et al. (2017) <i>Attention Is All You Need</i> ／ 　※線形代数的には毎回すべてを計算せず、洗練された式で高速に出せる</div>

<div class="takeaway">「考えて答える」のではなく「もっとも"ありそう"な続きを反復する」装置です</div>

---

<!-- _class: split -->

<div class="page-title">だから“それっぽい”</div>

## 流暢に書けることと、中身が正しいことは別物

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <text x="180" y="28" font-size="17" fill="#004D45" font-weight="700">左から1トークンずつ確定していく</text>
    <rect x="30" y="46" width="74" height="46" rx="8" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="67" y="76" font-size="22" font-weight="800" fill="#00736B">吾輩</text>
    <text x="124" y="76" font-size="22" fill="#bbb">は…？</text>
    <rect x="30" y="108" width="74" height="46" rx="8" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="67" y="138" font-size="22" font-weight="800" fill="#00736B">吾輩</text>
    <rect x="108" y="108" width="120" height="46" rx="8" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="168" y="138" font-size="22" font-weight="800" fill="#00736B">は猫で</text>
    <text x="248" y="138" font-size="22" fill="#bbb">…？</text>
    <text x="180" y="186" font-size="26" fill="#00736B" font-weight="800">↓</text>
    <rect x="20" y="200" width="320" height="80" rx="10" fill="#fff" stroke="#5B6068" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="180" y="232" font-size="18" font-weight="700" fill="#333">流暢な文は必ず完成する</text>
    <text x="180" y="260" font-size="18" fill="#004D45" font-weight="700">— だが中身が正しい保証はない</text>
  </g>
</svg>

</div>
<div class="right">

- 言語系の生成AIは、ルール集や、正しいデータ集ではなく、流暢さを鍛えたモデルである。
- 文法的に滑らかでも、<span class="red">事実かどうかは別問題</span>。断定口調で堂々と誤りうる

<div class="cbox deep"><div class="h" style="font-size:26px">ハルシネーションは構造上の帰結</div><div class="b">

- <span class="red">なぜ起きる</span>：「尤もらしさ」を最大化する仕組みは<span class="red">真偽を直接は照合しない</span>から
- <span class="red">なぜ“原理的に”残る</span>：訓練も評価も<b>“当てずっぽう”を褒めてしまう</b>から（正直な「分かりません」より、当てにいく方が得!）

</div></div>

</div>
</div>

<div class="takeaway">流暢さが指標。中身が正しいかは、最後に人が必ず確かめることで、騙されない。</div>

---

<!-- _class: summary -->

<div class="page-title">仕組みから来る懸念：3点</div>

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

<div class="takeaway">どれも「直せる不具合」ではなく、仕組みに由来する"性質"</div>

<!--
- 仕組みから3つのリスクが出てきます。
- ①利用上：ハルシネーション。"確からしさ"を確かめる仕組みが最初から無いので、流暢なまま堂々と間違える。さらに知識のカットオフで、学習時点より新しいことは知りません。
- ②倫理的：バイアス。学習データの偏りがそのまま出ます。"いちばんありそう"を選ぶので、典型から外れた人ほど出力に現れにくい。
- ③無料AIの危険：入力が保存・学習に使われることがあります。一度入れた個人情報は取り戻せません。これは後で安全な使い方として詳しくお話しします。
- 進め方：この後はまず①を実演で体感→②をAIの画像で確認→③は次章で不動産の個人情報として詳しく。原理的に残る理由は前の「だから“それっぽい”」と巻末の参考スライドで。
-->

---

<!-- _class: split -->

<div class="page-title">① ハルシネーション</div>

## 例えば、実在しない文献を、書式まで完璧に“作って”しまう

<div class="split-body">
<div class="left">

<svg viewBox="0 0 420 290" width="100%" style="max-height:290px">
  <rect x="6" y="6" width="408" height="278" rx="10" fill="#fff" stroke="#cdd1d6" stroke-width="1.5"/>
  <rect x="6" y="6" width="408" height="34" rx="10" fill="#EDEEF0"/>
  <circle cx="24" cy="23" r="5" fill="#3E988E"/><circle cx="40" cy="23" r="5" fill="#d7dbe0"/><circle cx="56" cy="23" r="5" fill="#d7dbe0"/>
  <text x="210" y="28" text-anchor="middle" font-size="16" fill="#5B6068" font-weight="700">「重要論文を、著者・年・DOI付きで」</text>
  <g font-family="Menlo,Consolas,monospace">
    <text x="24" y="74" font-size="18" fill="#1c2733">K. Smith (2018)</text>
    <text x="24" y="100" font-size="16" fill="#5B6068">DOI: 10.1007/s00521-…</text>
  </g>
  <rect x="18" y="128" width="384" height="120" rx="9" fill="#E3F1EF" stroke="#00736B" stroke-width="3"/>
  <text x="36" y="166" font-size="20" fill="#004D45" font-weight="800">この論文もDOIも</text>
  <text x="36" y="196" font-size="20" fill="#004D45" font-weight="800">存在しない（架空）</text>
  <text x="36" y="228" font-size="16" fill="#00736B" font-weight="700">→ DBで検索しても見つからない</text>
  <text x="210" y="272" text-anchor="middle" font-size="16" fill="#5B6068">書式は完璧。中身は裏取りしないと分からない</text>
</svg>

</div>
<div class="right">

<div class="cbox mid"><div class="h">何が起きているか</div><div class="b">

- 架空の<b>著者・年・DOI</b>を、書式まで完璧に出力（DOI＝論文ごとの識別番号）
- 専門的な話題ほど“それっぽさ”が増し、<span class="red">詳しくない分野ほど見抜けない</span>
- 引用・数値・固有名は、原典やDB（一次情報）で<span class="red">一件ずつ裏取り</span>

</div></div>

<div class="callout-gray">なぜ消えない？＝AIは“正しさ”を直接照合しないから。<strong>「不確実なら『わかりません』、確信度も添えて」</strong>と頼むと多少減る（完全には消えない／最後は人が確認）</div>

</div>
</div>

<div class="takeaway">引用・数値・固有名は、出典を自分で確認してから使う。</div>

<!--
- ①利用上の危険＝ハルシネーションを、まず実物で。「重要論文を著者・年・DOI付きで」と頼むと、実在しない論文を書式まで完璧に作ってしまいます。
- 専門的な話題ほど“それっぽく”なり、詳しくない分野ほど見抜けません。だから引用・数値・固有名は一次情報で一件ずつ裏取りを。
- なぜ消えないか：AIは“正しさ”を直接照合する仕組みを持たないから。「不確実なら『わかりません』、確信度も添えて」と頼むと多少減りますが、完全には消えません。最後は人が確認。
- 仕組み（訓練・評価が推測を優遇する理由）に関心がある方は、巻末の〔参考・質疑用〕スライドで詳しく。
- 次は②、AIの画像で同じ“平均を当てにいく”性質を見ます。
-->

---

<!-- _class: fig -->

<div class="page-title">② バイアス</div>

## “平均”を当てにいく性質は、画像でもバイアスを生む

<style scoped>
  section .fig-area { display: flex; flex-direction: row; align-items: center; gap: 36px; }
  section .figwrap { flex: 0 0 auto; }
  section .figwrap img { height: 392px; width: auto; border-radius: 10px; }
  section .bias-panels { flex: 1; display: flex; flex-direction: column; gap: 13px; }
  section .bpanel { background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 11px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  section .bpanel.warn { border-left-color: #C0392B; background: #FBF3F1; }
  section .bpanel .bp-h { display: flex; align-items: center; gap: 9px; font-size: 20px; font-weight: 800; color: var(--accent-dark); margin-bottom: 5px; }
  section .bpanel.warn .bp-h { color: #B23B2E; }
  section .bpanel .bp-ic { font-size: 22px; }
  section .bpanel .bp-b { font-size: 18.5px; line-height: 1.5; color: #333; }
  section .bpanel .bp-b b { color: var(--accent-dark); }
  section .bpanel.warn .bp-b b { color: #B23B2E; }
  section .bias-arrow { text-align: center; color: #9aa5a2; font-size: 20px; font-weight: 800; margin: -4px 0; }
</style>

<div class="fig-area">
<div class="figwrap"><img src="./src/fig-ai-bias.jpg" alt="生成AIが作った医療従事者の顔画像。多くが似た年齢・髪型・雰囲気に偏り、多様性が乏しい均質バイアスの例"></div>
<div class="bias-panels">
<div class="bpanel">
<div class="bp-h"><span class="bp-ic">🎯</span>仕組み</div>
<div class="bp-b">いちばん<b>“ありそう”な像</b>を出す ＝ 学習データの<b>「典型」</b>に寄る</div>
</div>
<div class="bias-arrow">↓</div>
<div class="bpanel">
<div class="bp-h"><span class="bp-ic">👥</span>結果</div>
<div class="bp-b">典型から外れた人ほど<b>出にくい</b>（年齢・体型・装い・背景…）＝<b>多様性が痩せる</b></div>
</div>
<div class="bias-arrow">↓</div>
<div class="bpanel warn">
<div class="bp-h"><span class="bp-ic">⚠️</span>だから注意</div>
<div class="bp-b">教材・広報に使う画像が、知らぬ間に<b>ステレオタイプを強化</b>しうる</div>
</div>
</div>
</div>

<div class="attr">出典: <a href="https://www.soumu.go.jp/use_the_internet_wisely/special/generativeai/">総務省「上手にネットと付き合おう」生成AI特集</a></div>

<div class="takeaway">「もっともらしさ」の最大化は、多様性・少数事例・外れ値を取りこぼす。</div>

---

<!-- _class: split jtop -->

<div class="page-title">③ 機密の保持</div>

## 「無料AIに入れてはいけないもの」

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">⚠ 入れてはいけない情報（ありそうな例）</div>

- 顧客の**氏名・住所・取引条件**をそのまま入力
- 物件の**未公開情報**・契約書ドラフトを貼り付け
- （医療）**患者情報** ／（研究）**未公開データ・査読原稿**
- （学校）名簿、成績、レポート

</div>
<div class="cmp-col good">
<div class="cmp-h">✓ 守るための3つの手立て</div>

- **オプトアウト設定**：学習に使わせない
- **組織が契約したAI**を使う（個人の無料版を業務に使わない）
- **規程・ポリシー**を定める：「何を入れてよいか」を組織で言語化

</div>
</div>

<div class="callout-pink">入力＝外部サーバーへ送信。<strong>「外」に出た情報は取り戻せません</strong></div>

<div class="srcline"><b>根拠:</b> 個人情報保護委員会「生成AIサービスの利用に関する注意喚起等について」（令和5年6月2日）<br><a href="https://www.ppc.go.jp/news/careful_information/230602_AI_utilize_alert/">ppc.go.jp/news/careful_information/230602_AI_utilize_alert</a></div>

<div class="takeaway">実務は、個人情報の塊。「安全なAI」と「規程」の整備が、活用の前提になります</div>

<!--
- 不動産分野は個人情報の宝庫です。顧客情報や取引条件、未公開物件、契約書。これらを無料のAIに入れると、保存・学習に使われるおそれがあります。
- 医療なら患者情報、研究なら未公開データや査読原稿も同じです。入力した瞬間、外部サーバーに送られ、取り戻せません。
- 対策は3つ。オプトアウト設定、組織が契約した安全なAIを使う、そして「何を入れてよいか」の規程を作ること。Session 2で安全なGeminiを具体的に紹介します。
-->

---

<!-- _class: split -->

<div class="page-title">学生の自己判断を創る</div>

## 「なぜ今は、AIを使わないか」を学生は言葉にできるか

<div class="split-body">
<div class="left">

<div class="figwrap"><img src="./src/fig06-rpg-fasttravel.jpg" alt="RPGの比喩。AI利用＝ファストトラベルで学習の道のりを飛ばすと、経験値ゼロのまま強敵に直面する" style="max-height:330px; max-width:100%; border-radius:8px; box-shadow:0 3px 12px rgba(0,0,0,.14);"></div>
<div class="caption">AIで“場所ジャンプ”すると、経験値ゼロのまま強敵に直面 ── <br>力がつかない</div>

</div>
<div class="right">

<div class="callout-green"><strong>学習目標を損なう形では、AIを使わない</strong></div>

- 身につけたい力は、<span class="hl">あえて自分で</span>やる
- AIは「到達を**速める**道具」と割り切る
- 使う／使わない場面を<span class="hl">先に決める</span>

<div class="voice">「ここでAIを使わないのは、<strong>〇〇する力</strong>を自分で育てたいから」<span class="who">― と説明できる学生を育てたい</span></div>

- 学びで、基礎から積み上げる点は今も必要
  - 高次の仕事や創造で発想できない
- 仕事でも、「見習い」部分のAIによる代替が課題
 
</div>
</div>

<div class="takeaway">実際に自分が社会に出てからをイメージ → 成績よりも社会での実力を優先</div>

<!--
- リスクを並べてきましたが、ゴールは「AIを禁止する」ことではありません。学生が「なぜ今この場面ではAIを使わないのか」を、自分の言葉で説明できるようになることです。
- 比喩で言うと、AIはRPGの"場所ジャンプ"。便利ですが、ジャンプし続けると経験値がたまらず、いざ自分の足で進もうとしても動けない。
- 持ってほしい判断軸はシンプルです。「学習目標を損なう形ではAIを使わない」。身につけたい力はあえて自分でやる、AIは到達を速める道具と割り切る、使う・使わない場面を先に決める。
- 「ここで使わないのは、〇〇する力を育てたいから」と言える学生こそ、AIを正しく使いこなせる学生です。
-->

---

<!-- _class: fig -->

<div class="page-title">学問の誠実さ</div>

## アカデミック・インテグリティ ── AIの有無によらない、普遍的な倫理

<div class="fig-area">
<svg viewBox="0 0 990 330" width="100%" style="max-height:340px">
  <!-- definition band -->
  <rect x="120" y="6" width="750" height="46" rx="10" fill="#004D45"/>
  <text x="495" y="38" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">学問における誠実さ（Academic Integrity）── 6つの価値</text>
  <line x1="495" y1="52" x2="495" y2="68" stroke="#004D45" stroke-width="2"/>
  <polygon points="495,72 489,62 501,62" fill="#004D45"/>
  <!-- six pillars (ICAI fundamental values) — 3×2 grid, JP/EN on separate lines -->
  <g text-anchor="middle">
    <!-- row 1 -->
    <rect x="60"  y="82" width="282" height="98" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="100" y="120" font-size="30">🔍</text>
    <text x="201" y="118" font-size="22" font-weight="800" fill="#004D45">① 正直</text>
    <text x="201" y="142" font-size="18" font-weight="700" fill="#00736B">Honesty</text>
    <text x="201" y="166" font-size="16" fill="#5B6068">事実を曲げず負も隠さない</text>
    <rect x="354" y="82" width="282" height="98" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="394" y="120" font-size="30">🤝</text>
    <text x="495" y="118" font-size="22" font-weight="800" fill="#004D45">② 信頼</text>
    <text x="495" y="142" font-size="18" font-weight="700" fill="#00736B">Trust</text>
    <text x="495" y="166" font-size="16" fill="#5B6068">手順を開示し検証できる</text>
    <rect x="648" y="82" width="282" height="98" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="688" y="120" font-size="30">⚖️</text>
    <text x="789" y="118" font-size="22" font-weight="800" fill="#004D45">③ 公正</text>
    <text x="789" y="142" font-size="18" font-weight="700" fill="#00736B">Fairness</text>
    <text x="789" y="166" font-size="16" fill="#5B6068">貢献を正しく配分する</text>
    <!-- row 2 -->
    <rect x="60"  y="190" width="282" height="98" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="100" y="228" font-size="30">🙇</text>
    <text x="201" y="226" font-size="22" font-weight="800" fill="#004D45">④ 敬意</text>
    <text x="201" y="250" font-size="18" font-weight="700" fill="#00736B">Respect</text>
    <text x="201" y="274" font-size="16" fill="#5B6068">引用で先人に謝意を示す</text>
    <rect x="354" y="190" width="282" height="98" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/>
    <text x="394" y="228" font-size="30">📌</text>
    <text x="495" y="226" font-size="22" font-weight="800" fill="#004D45">⑤ 責任</text>
    <text x="495" y="250" font-size="18" font-weight="700" fill="#00736B">Responsibility</text>
    <text x="495" y="274" font-size="16" fill="#5B6068">道具任せにせず引き受ける</text>
    <rect x="648" y="190" width="282" height="98" rx="12" fill="#CFE6E1" stroke="#004D45" stroke-width="2"/>
    <text x="688" y="228" font-size="30">💪</text>
    <text x="789" y="226" font-size="22" font-weight="800" fill="#004D45">⑥ 勇気</text>
    <text x="789" y="250" font-size="18" font-weight="700" fill="#00736B">Courage</text>
    <text x="789" y="274" font-size="16" fill="#5B6068">声を上げ誤りを正す</text>
  </g>
  <text x="495" y="316" text-anchor="middle" font-size="17" font-weight="700" fill="#5B6068">行動の原則 ── ⑥勇気は後の版で追加</text>
</svg>
</div>

<div class="caption">生成物を<b>そのまま自分の成果</b>として出すのは、この誠実さに反する ── 成績・成果は、学生自身の力でないと公正ではない
<div class="srcline"><b>出典:</b> ICAI, <i>The Fundamental Values of Academic Integrity</i> (3rd ed.)／日本学術振興会『誠実な科学者の心得［第2版］』(2025)</div>
</div>

<div class="takeaway">この6つの価値は、AIの有無によらず不変。土台が崩れば高等教育は成り立たない</div>

<!--
- 学問の誠実さには6つの価値があります。正直・信頼・公正・敬意・責任・勇気。これはAIがあろうとなかろうと変わらない、研究と教育の土台です。
- 生成物をそのまま自分の成果として出すのは、この誠実さに反します。AIの役割は情報収集や整理まで。それをどう使うかは人間の技だ、というのは、実は明海大学の先生方が既に共有されている考え方でもあります。
- この土台が崩れれば、そもそも研究も教育も成り立ちません。だからAIの議論の前に、まずここを確認しておきたいのです。
-->

---

<!-- _class: split -->

<div class="page-title">[参考]卒論・研究での制限</div>

## 研究では、媒体ごとに「AIの使ってよい範囲」が違う

<div class="split-body">
<div class="left">

### まず確認 ── 投稿先・学会のポリシー

- 媒体ごとにルールが違い、**一律の正解はない**
- **文献検索・校正**は概ね可
- **本文執筆・翻訳・要約は要開示**（使ったら明記）

<div class="srcline"><b>出典:</b> Science Journals「Guidelines for AI use」(PDF) <a href="https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf">science.org</a></div>

</div>
<div class="right">

### 越えてはならない一線

- **図のAI生成・査読原稿の入力・引用の捏造**は原則不可
- 研究不正の三類型＝<b>捏造・改ざん・盗用（FFP）</b>はAIでも同じ
- 生成物を**そのまま自分の成果**にしない

<div class="callout-pink">AIを使ったか否かより、<strong>誠実に・説明できる形で</strong>使ったかが問われる</div>

</div>
</div>

<div class="takeaway">「使ったかどうか」より「誠実に、説明できる形で使ったか」が問われます</div>

<!--
- 研究では、媒体ごとにルールが違います。まず投稿先や学会のAIポリシーを確認する。これが出発点です。
- 大まかには、文献検索や英文校正は概ね可。一方で本文執筆・翻訳・要約は「使ったら開示」が原則です。
- 越えてはならない一線もあります。図のAI生成、査読原稿の入力、引用の捏造は原則不可。捏造・改ざん・盗用というFFPは、AIを使ったかどうかに関係なく研究不正です。
- 問われるのは「使ったか否か」ではなく、「誠実に、説明できる形で使ったか」です。
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

<style scoped>
  section .split-body { grid-template-columns: 0.80fr 1.20fr; }
  section .radarbox svg { width: 100%; height: auto; max-height: 484px; display: block; margin-top: -34px; }
  section .avgbox { margin-top: 16px; background: var(--accent-soft); border: 1.5px solid #c2e0db; border-left: 6px solid var(--accent); border-radius: 12px; padding: 11px 18px; }
  section .avgbox .ab-h { font-size: 19px; font-weight: 800; color: var(--accent-dark); margin-bottom: 5px; }
  section .avgbox ul { margin: 0 0 0 1.05em; padding: 0; font-size: 17px; line-height: 1.5; }
  section .avgbox li { margin: 5px 0; }
  section .avgbox li strong { color: var(--accent-dark); }
</style>

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

<div class="avgbox">
<div class="ab-h">「平均」の先に、人の仕事がある</div>

- AIだけの出力は、昔の<strong>「C評価」</strong>＝<strong>平均点の仕事</strong>
- <strong>平均の先</strong>にこそ、人にしかできない仕事がある
- <strong>学びを積み上げ</strong>ないと、平均の先へは行けない

</div>
</div>
<div class="right">

<div class="radarbox">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 880 680"><rect width="880" height="680" x="0" y="0" fill="none"></rect><path d="M440 292.4L426.6 294.3L414.3 300L404 308.8L396.7 320.2L392.9 333.2L392.9 346.8L396.7 359.8L404 371.2L414.3 380L426.6 385.7L440 387.6L453.4 385.7L465.7 380L476 371.2L483.3 359.8L487.1 346.8L487.1 333.2L483.3 320.2L476 308.8L465.7 300L453.4 294.3L440 292.4L440 340ZM440 197.2L399.8 203L362.8 219.9L332.1 246.5L310.1 280.7L298.7 319.7L298.7 360.3L310.1 399.3L332.1 433.5L362.8 460.1L399.8 477L440 482.8L480.2 477L517.2 460.1L547.9 433.5L569.9 399.3L581.3 360.3L581.3 319.7L569.9 280.7L547.9 246.5L517.2 219.9L480.2 203L440 197.2L440 244.8L466.8 248.7L491.5 259.9L511.9 277.7L526.6 300.5L534.2 326.5L534.2 353.5L526.6 379.5L511.9 402.3L491.5 420.1L466.8 431.3L440 435.2L413.2 431.3L388.5 420.1L368.1 402.3L353.4 379.5L345.8 353.5L345.8 326.5L353.4 300.5L368.1 277.7L388.5 259.9L413.2 248.7L440 244.8ZM440 102L372.9 111.6L311.3 139.8L260.1 184.1L223.5 241.1L204.4 306.1L204.4 373.9L223.5 438.9L260.1 495.9L311.3 540.2L372.9 568.4L440 578L507.1 568.4L568.7 540.2L619.9 495.9L656.5 438.9L675.6 373.9L675.6 306.1L656.5 241.1L619.9 184.1L568.7 139.8L507.1 111.6L440 102L440 149.6L493.6 157.3L542.9 179.8L583.9 215.3L613.2 260.9L628.5 312.9L628.5 367.1L613.2 419.1L583.9 464.7L542.9 500.2L493.6 522.7L440 530.4L386.4 522.7L337.1 500.2L296.1 464.7L266.8 419.1L251.5 367.1L251.5 312.9L266.8 260.9L296.1 215.3L337.1 179.8L386.4 157.3L440 149.6Z" fill="#fbfbfa" class="zr0-cls-0"></path><path d="M440 244.8L413.2 248.7L388.5 259.9L368.1 277.7L353.4 300.5L345.8 326.5L345.8 353.5L353.4 379.5L368.1 402.3L388.5 420.1L413.2 431.3L440 435.2L466.8 431.3L491.5 420.1L511.9 402.3L526.6 379.5L534.2 353.5L534.2 326.5L526.6 300.5L511.9 277.7L491.5 259.9L466.8 248.7L440 244.8L440 292.4L453.4 294.3L465.7 300L476 308.8L483.3 320.2L487.1 333.2L487.1 346.8L483.3 359.8L476 371.2L465.7 380L453.4 385.7L440 387.6L426.6 385.7L414.3 380L404 371.2L396.7 359.8L392.9 346.8L392.9 333.2L396.7 320.2L404 308.8L414.3 300L426.6 294.3L440 292.4ZM440 149.6L386.4 157.3L337.1 179.8L296.1 215.3L266.8 260.9L251.5 312.9L251.5 367.1L266.8 419.1L296.1 464.7L337.1 500.2L386.4 522.7L440 530.4L493.6 522.7L542.9 500.2L583.9 464.7L613.2 419.1L628.5 367.1L628.5 312.9L613.2 260.9L583.9 215.3L542.9 179.8L493.6 157.3L440 149.6L440 197.2L480.2 203L517.2 219.9L547.9 246.5L569.9 280.7L581.3 319.7L581.3 360.3L569.9 399.3L547.9 433.5L517.2 460.1L480.2 477L440 482.8L399.8 477L362.8 460.1L332.1 433.5L310.1 399.3L298.7 360.3L298.7 319.7L310.1 280.7L332.1 246.5L362.8 219.9L399.8 203L440 197.2Z" fill="#f4f4f2" class="zr0-cls-0"></path><path d="M440 340M440 292.4L426.6 294.3L414.3 300L404 308.8L396.7 320.2L392.9 333.2L392.9 346.8L396.7 359.8L404 371.2L414.3 380L426.6 385.7L440 387.6L453.4 385.7L465.7 380L476 371.2L483.3 359.8L487.1 346.8L487.1 333.2L483.3 320.2L476 308.8L465.7 300L453.4 294.3L440 292.4M440 244.8L413.2 248.7L388.5 259.9L368.1 277.7L353.4 300.5L345.8 326.5L345.8 353.5L353.4 379.5L368.1 402.3L388.5 420.1L413.2 431.3L440 435.2L466.8 431.3L491.5 420.1L511.9 402.3L526.6 379.5L534.2 353.5L534.2 326.5L526.6 300.5L511.9 277.7L491.5 259.9L466.8 248.7L440 244.8M440 197.2L399.8 203L362.8 219.9L332.1 246.5L310.1 280.7L298.7 319.7L298.7 360.3L310.1 399.3L332.1 433.5L362.8 460.1L399.8 477L440 482.8L480.2 477L517.2 460.1L547.9 433.5L569.9 399.3L581.3 360.3L581.3 319.7L569.9 280.7L547.9 246.5L517.2 219.9L480.2 203L440 197.2M440 149.6L386.4 157.3L337.1 179.8L296.1 215.3L266.8 260.9L251.5 312.9L251.5 367.1L266.8 419.1L296.1 464.7L337.1 500.2L386.4 522.7L440 530.4L493.6 522.7L542.9 500.2L583.9 464.7L613.2 419.1L628.5 367.1L628.5 312.9L613.2 260.9L583.9 215.3L542.9 179.8L493.6 157.3L440 149.6M440 102L372.9 111.6L311.3 139.8L260.1 184.1L223.5 241.1L204.4 306.1L204.4 373.9L223.5 438.9L260.1 495.9L311.3 540.2L372.9 568.4L440 578L507.1 568.4L568.7 540.2L619.9 495.9L656.5 438.9L675.6 373.9L675.6 306.1L656.5 241.1L619.9 184.1L568.7 139.8L507.1 111.6L440 102" fill="none" pointer-events="visible" stroke="#e3e6ea" class="zr0-cls-0"></path><path d="M440.5 340L440.5 102" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-41 -15l82 0l0 14l-82 0Z" transform="translate(440 87)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:sans-serif;font-weight:bold;" y="-8" transform="translate(440 87)" fill="#E0483A">Management</text><path d="M440 340L372.9 111.6" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-90.6 -7l90.6 0l0 14l-90.6 0Z" transform="translate(368.7217 97.2483)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" transform="translate(368.7217 97.2483)" fill="#6b7177">Transportation</text><path d="M440 340L311.3 139.8" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-67.2 -7l67.2 0l0 14l-67.2 0Z" transform="translate(303.2179 127.1629)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" transform="translate(303.2179 127.1629)" fill="#6b7177">Production</text><path d="M440 340L260.1 184.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-120.3 -7l120.3 0l0 14l-120.3 0Z" transform="translate(248.7954 174.3202)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(248.7954 174.3202)" fill="#6b7177">Installation &amp; repair</text><path d="M440 340L223.5 241.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-78.8 -7l78.8 0l0 14l-78.8 0Z" transform="translate(209.8631 234.9)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" transform="translate(209.8631 234.9)" fill="#6b7177">Construction</text><path d="M440 340L204.4 306.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-67.1 -7l67.1 0l0 14l-67.1 0Z" transform="translate(189.5752 303.9943)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" transform="translate(189.5752 303.9943)" fill="#6b7177">Agriculture</text><path d="M440 340L204.4 373.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-92.1 -7l92.1 0l0 14l-92.1 0Z" transform="translate(189.5752 376.0057)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(189.5752 376.0057)" fill="#E0483A">Office &amp; admin</text><path d="M440 340L223.5 438.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-35.1 -7l35.1 0l0 14l-35.1 0Z" transform="translate(209.8631 445.1)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;font-weight:bold;" transform="translate(209.8631 445.1)" fill="#E0483A">Sales</text><path d="M440 340L260.1 495.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-86.7 -7l86.7 0l0 14l-86.7 0Z" transform="translate(248.7954 505.6798)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(248.7954 505.6798)" fill="#6b7177">Personal care</text><path d="M440 340L311.3 540.2" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-138.3 -7l138.3 0l0 14l-138.3 0Z" transform="translate(303.2179 552.8371)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(303.2179 552.8371)" fill="#6b7177">Grounds maintenance</text><path d="M440 340L372.9 568.4" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-94.5 -7l94.5 0l0 14l-94.5 0Z" transform="translate(368.7217 582.7517)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(368.7217 582.7517)" fill="#6b7177">Food &amp; serving</text><path d="M440.5 340L440.5 578" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M-55.4 1l110.7 0l0 14l-110.7 0Z" transform="translate(440 593)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" y="8" transform="translate(440 593)" fill="#6b7177">Protective service</text><path d="M440 340L507.1 568.4" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l118.7 0l0 14l-118.7 0Z" transform="translate(511.2783 582.7517)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(511.2783 582.7517)" fill="#6b7177">Healthcare support</text><path d="M440 340L568.7 540.2" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l148.3 0l0 14l-148.3 0Z" transform="translate(576.7821 552.8371)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(576.7821 552.8371)" fill="#6b7177">Healthcare practitioners</text><path d="M440 340L619.9 495.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l80.4 0l0 14l-80.4 0Z" transform="translate(631.2046 505.6798)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(631.2046 505.6798)" fill="#6b7177">Arts &amp; media</text><path d="M440 340L656.5 438.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l117.9 0l0 14l-117.9 0Z" transform="translate(670.1369 445.1)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(670.1369 445.1)" fill="#6b7177">Education &amp; library</text><path d="M440 340L675.6 373.9" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l34.4 0l0 14l-34.4 0Z" transform="translate(690.4248 376.0057)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" transform="translate(690.4248 376.0057)" fill="#6b7177">Legal</text><path d="M440 340L675.6 306.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l93.5 0l0 14l-93.5 0Z" transform="translate(690.4248 303.9943)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(690.4248 303.9943)" fill="#6b7177">Social services</text><path d="M440 340L656.5 241.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l134.3 0l0 14l-134.3 0Z" transform="translate(670.1369 234.9)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(670.1369 234.9)" fill="#6b7177">Life &amp; social sciences</text><path d="M440 340L619.9 184.1" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l165.6 0l0 14l-165.6 0Z" transform="translate(631.2046 174.3202)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(631.2046 174.3202)" fill="#6b7177">Architecture &amp; engineering</text><path d="M440 340L568.7 139.8" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l110 0l0 14l-110 0Z" transform="translate(576.7821 127.1629)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;" xml:space="preserve" transform="translate(576.7821 127.1629)" fill="#6b7177">Computer &amp; math</text><path d="M440 340L507.1 111.6" fill="none" pointer-events="visible" stroke="#d6d9dd" stroke-linecap="round" class="zr0-cls-0"></path><path d="M0 -7l119.6 0l0 14l-119.6 0Z" transform="translate(511.2783 97.2483)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(511.2783 97.2483)" fill="#E0483A">Business &amp; finance</text><polyline points="440 121 429.3 303.5 416.8 304 416.6 319.7 424.8 333.1 416.4 336.6 239.8 368.8 349.1 381.5 423.8 354 432.3 352 432 367.4 440 387.6 458.1 401.7 510.8 450.1 583.9 464.7 552.6 391.4 663.8 372.2 553.1 323.7 574.2 278.7 562.3 234 542.9 179.8 500.3 134.5 440 121" fill="none" pointer-events="visible" stroke="#3B7DD8" stroke-width="2.5" stroke-linejoin="round" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></polyline><polygon points="440 121 429.3 303.5 416.8 304 416.6 319.7 424.8 333.1 416.4 336.6 239.8 368.8 349.1 381.5 423.8 354 432.3 352 432 367.4 440 387.6 458.1 401.7 510.8 450.1 583.9 464.7 552.6 391.4 663.8 372.2 553.1 323.7 574.2 278.7 562.3 234 542.9 179.8 500.3 134.5 440 121" fill="rgb(59,125,216)" fill-opacity="0.154" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-2"></polygon><polyline points="440 275.7 436 326.3 433.6 330 431 332.2 435.7 338 432.9 339 352.8 352.5 390.2 362.7 434.6 344.7 437.4 344 438 346.9 440 356.7 448.7 369.7 454.2 362 468.8 364.9 455.2 346.9 470.6 344.4 451.8 338.3 455.2 333.1 461.6 321.3 497.9 249.9 466.8 248.7 440 275.7" fill="none" pointer-events="visible" stroke="#E0483A" stroke-width="2.5" stroke-linejoin="round" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></polyline><polygon points="440 275.7 436 326.3 433.6 330 431 332.2 435.7 338 432.9 339 352.8 352.5 390.2 362.7 434.6 344.7 437.4 344 438 346.9 440 356.7 448.7 369.7 454.2 362 468.8 364.9 455.2 346.9 470.6 344.4 451.8 338.3 455.2 333.1 461.6 321.3 497.9 249.9 466.8 248.7 440 275.7" fill="rgb(224,72,58)" fill-opacity="0.21" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-3"></polygon><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,440,121.04)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,429.2716,303.4625)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,416.8389,303.9607)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,416.6171,319.7386)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,424.8455,333.0792)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,416.4422,336.6129)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,239.7591,368.7903)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,349.0732,381.5249)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,423.8118,354.0271)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,432.2796,352.0131)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,431.9537,367.4031)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,440,387.6)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,458.1041,401.657)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,510.7699,450.1201)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,583.8947,464.6855)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,552.5761,391.4118)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,663.7986,372.1774)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,553.0772,323.742)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,574.2253,278.7014)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,562.3105,234.0173)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,542.938,179.8253)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M1 0A1 1 0 1 1 1 -0.1A1 1 0 0 1 1 0" transform="matrix(2.5,0,0,2.5,500.3471,134.4766)" fill="#3B7DD8" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,440,275.74)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,435.9769,326.2984)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,433.5664,329.9891)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,431.0066,332.2072)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,435.6702,338.0226)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,432.9327,338.9839)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,352.8363,352.5322)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,390.2067,362.7398)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,434.6039,344.6757)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,437.4265,344.0044)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,437.9884,346.8508)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,440,356.66)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,448.7168,369.6867)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,454.154,362.024)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,468.7789,364.9371)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,455.1545,346.9208)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,470.6251,344.4032)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,451.7789,338.3065)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,455.1545,333.0792)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,461.5842,321.2972)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,497.9026,249.9017)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><path d="M-1 -1l2 0l0 2l-2 0Z" transform="matrix(3,0,0,3,466.8209,248.6563)" fill="#E0483A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-5"></path><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;}.zr0-cls-2:hover {cursor:pointer;fill:rgba(64,137,237,0.22);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(246,79,63,0.3);}.zr0-cls-4:hover {cursor:pointer;fill:rgba(64,137,237,1);}.zr0-cls-5:hover {cursor:pointer;fill:rgba(246,79,63,1);}]]></style></svg>
</div>

<div class="srcline" style="margin-top:-46px;"><b style="color:#3B7DD8;">青＝理論上「できる」範囲</b>（管理・事務・専門職まで広く届く）／<b style="color:#E0483A;">赤＝実際に「している」範囲</b>（今は一部に集中だが急拡大中）。<b style="color:#E0483A;">赤ラベルの4軸＝不動産に関わる職種</b>（管理・財務／鑑定・営業・事務）＝<b>影響大</b>。<br>出典: Anthropic「Labor market impacts of AI」（<a href="https://www.anthropic.com/research/labor-market-impacts">Massenkoff &amp; McCrory, 2026</a>）</div>

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

<div class="page-title">活用を正しくマネジメント</div>

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

<div class="takeaway">ルールだけでは動かない。「なぜ」を教員が語るコミュニケーションが大切</div>

<!--
- 正しいマネジメントは3つ。
- ①ポリシー。学校レベルと授業レベルで、どこまで使ってよいかを言葉にし、課題を出すときに事前に伝える。
- ②透明性。学生には使った箇所を明示してもらう。隠さない文化です。教員も自分の使い方を率直に共有する。
- ③自分で考える価値を、経験を伴って伝える。これが無いと、学生は知らないうちに"見習いとして育つ機会"を奪われてしまいます。
- 【ここで Slido 1-1, 1-2, 1-3 を実施】先生方ご自身の考えを入れてみてください。
-->

---

<!-- _class: summary -->

<div class="page-title">千葉大での自分の実践</div>

## 「文脈づくり」を、現場で試しています

<div class="prac">

<div class="prac-col">
<div class="pc-h">① 学生向け「生成AI活用講座」</div>

- 学生が**AIエージェントを自作**し**限界を体感**
- 「できること／できないこと」を知り、AIとの関わり方について**自分の文脈**を形成
- 生成AIを学ぶ道具に活用する

</div>

<div class="prac-col">
<div class="pc-h">② 15分セッション</div>

- 大学院生・教職員向けの**ランチタイム研修**
- 短く・気軽に**理解と前向きな文脈**を広げる

</div>

<div class="prac-col">
<div class="pc-h">③ 学生参画会議</div>

- 学生と**大学の価値**を語り合う場
- 学長を含む教員と学生の対話
- 「大学は**失敗できる場所**」という学生の声

</div>

</div>

<div class="voice">
大学は、安心して失敗できる場所であってほしい。AIに答えをもらうより、<strong>失敗から学べることのほうが価値がある</strong>。
<span class="who">― 学生参画会議での学生の声</span>
</div>
<div class="voice">
私はAIを、思考をブラッシュアップするためのツールだと考える。なので、私自身が主体的に「意図」を考え、その意図をアウトプットする手助けをしてもらう道具としてAIと関わっていきたい。</strong>
<span class="who">― 生成AI活用講座を受講した学生の声</span>
</div>


<div class="takeaway">「正解の伝達」より「一緒に考えて、失敗できる場」── ここに大学の価値が残るかも</div>

<!--
- 千葉大では、文脈づくりを3つの形で試しています。
- ①学生向けの活用講座。学生自身にAIエージェントを作らせ、その限界を体感させる。できること・できないことを知って初めて、自分なりの関わり方の文脈ができます。
- ②教職員向けの15分セッション。短く気軽に、理解と前向きな文脈を広げる。
- ③学生参画会議。学生と大学の価値を語り合う。ある学生が「大学は失敗できる場所であってほしい」と言いました。AIに答えをもらうより、失敗から学べることのほうが価値がある、と。この言葉に、AI時代の大学の価値が凝縮されていると感じています。
-->

---

<!-- _class: summary -->

<div class="page-title">Slido：文脈づくり</div>

<style scoped>
  section .polls { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
  section .poll { display: flex; gap: 16px; background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 12px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  section .poll .pno { flex: 0 0 auto; align-self: flex-start; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 5px 12px; white-space: nowrap; }
  section .poll .pbody { flex: 1; min-width: 0; }
  section .poll .pq { font-size: 21px; font-weight: 700; color: var(--accent-dark); line-height: 1.4; margin-bottom: 9px; }
  section .poll .ptype { font-size: 14px; font-weight: 800; color: #fff; border-radius: 999px; padding: 2px 11px; margin-left: 8px; white-space: nowrap; }
  section .ptype.multi { background: #1A6BB0; } section .ptype.single { background: #0F766E; } section .ptype.free { background: #9a5a00; }
  section .poll .popts { display: flex; flex-wrap: wrap; gap: 7px; }
  section .poll .popt { font-size: 16.5px; line-height: 1.3; background: var(--accent-soft); border: 1px solid #c2e0db; border-radius: 999px; padding: 4px 13px; color: #21413c; }
  section .poll .pfree { font-size: 16.5px; line-height: 1.45; color: #5a6764; }
</style>

## 「文脈づくり」について、3つ Slido でうかがいます

<div class="polls">

<div class="poll">
<div class="pno">1-1</div>
<div class="pbody">
<div class="pq">学生は、生成AIを“学び”に使えている気がしますか？<span class="ptype single">3択</span></div>
<div class="popts">
<span class="popt">① 使えている気がする</span>
<span class="popt">② あまり使えていない気がする</span>
<span class="popt">③ わからない・場合による</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">1-2</div>
<div class="pbody">
<div class="pq">どんな“文脈”を、学生自身に築いてほしいですか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「AIを“考える相棒”として使ってほしい」「答えより“問い”を大事にしてほしい」など。</div>
</div>
</div>

<div class="poll">
<div class="pno">1-3</div>
<div class="pbody">
<div class="pq">どうすれば、学生に“良い文脈”を作れると思いますか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「最初に方針を共有する」「AIと一緒に考える課題を出す」など、アイデアを一言で。</div>
</div>
</div>

</div>

<div class="takeaway">正解はありません。ここで出た言葉を、次のワーク①で“自分の言葉”にしていきましょう</div>

<!--
- 千葉大の実践を踏まえて、ここで一度 Slido で先生方の実感をうかがいます。
- 1-1は3択。学生がAIを“学び”に使えている実感があるか。1-2・1-3は自由記述で、どんな文脈を築いてほしいか／どうすればそれを作れるか。
- 正解はありません。ここで出た言葉を、次のワーク①で深めます。【ここで Slido 1-1, 1-2, 1-3 を実施】
-->

---

<!-- _class: split work -->

<div class="page-title">ワーク①</div>

## 先生の授業で、学生にどう関わってほしいですか？

<style scoped>
  /* Think · Pair · Share をかわいく囲む */
  section .tps { border: 2px solid var(--accent); border-radius: 16px; background: var(--accent-soft); padding: 11px 15px 13px; box-shadow: 0 2px 9px rgba(0,0,0,.08); }
  section .tps-h { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: 19px; font-weight: 800; color: var(--accent-dark); margin-bottom: 9px; }
  section .tps-h .tps-time { font-size: 16px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 999px; padding: 3px 13px; white-space: nowrap; }
  section .tps-steps { display: flex; flex-direction: column; gap: 8px; }
  section .tps-step { display: flex; align-items: center; gap: 11px; background: #fff; border: 1.5px solid #cfe0db; border-radius: 12px; padding: 7px 13px; }
  section .tps-badge { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; background: var(--accent); color: #fff; font-weight: 800; font-size: 15px; display: flex; align-items: center; justify-content: center; }
  section .tps-body { flex: 1; font-size: 18px; line-height: 1.35; color: #2a2d33; }
  section .tps-body b { color: var(--accent-dark); }
  section .tps-min { flex: 0 0 auto; font-size: 16px; font-weight: 800; color: var(--accent-dark); background: var(--accent-soft); border-radius: 8px; padding: 3px 11px; white-space: nowrap; }
  /* 記入シート（事例＝行）のテーブル */
  section .right table { width: 100%; font-size: 17px; }
  section .right table th { background: var(--accent); color: #fff; text-align: center; }
  section .right table td { height: 32px; }
  section .right table th:first-child, section .right table td:first-child { white-space: nowrap; font-weight: 800; color: var(--accent-dark); background: var(--accent-soft); text-align: center; }
  section .sheet-legend { font-size: 15px; color: #6e7378; margin-top: 7px; line-height: 1.45; }
</style>

<div class="split-body">
<div class="left">

<div class="tps">
<div class="tps-h"><span>💭 進め方　Think · Pair · Share</span><span class="tps-time">⏱ 計 約7分</span></div>
<div class="tps-steps">
<div class="tps-step"><span class="tps-badge">T</span><span class="tps-body"><b>Think</b>：まず自分で考える</span><span class="tps-min">2分</span></div>
<div class="tps-step"><span class="tps-badge">P</span><span class="tps-body"><b>Pair</b>：隣の方と話してみる</span><span class="tps-min">3分</span></div>
<div class="tps-step"><span class="tps-badge">S</span><span class="tps-body"><b>Share</b>：シートに記入し会場で共有</span><span class="tps-min">2分</span></div>
</div>
</div>

<div class="callout-green">「正解」を探すワークではありません。<strong>言葉にすること</strong>が目的です</div>

</div>
<div class="right">

### 記入シート（行＝事例ごとに1行）

| 　 | 科目名 | 関わり方 | なぜ？ |
|:--:|:--|:--|:--|
| **事例1** |  |  |  |
| **事例2** |  |  |  |
| **事例3** |  |  |  |

<div class="sheet-legend">科目名＝担当の授業／関わり方＝どう関わってほしいか／なぜ？＝理由・ねらい</div>

<div class="srcline">→ 記入用シート（Slidoからもアクセス可）：<a href="https://docs.google.com/spreadsheets/d/1FNMAe3nQoXdk0sFN6Cb2u1fASufPK0S-64WBcqvk_t4/edit?usp=sharing">Googleスプレッドシートを開く</a></div>

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
  - 企業内に閉じたAIと同様に厳しい契約

<div class="callout-green">成績・個人情報のような機微情報も、<strong>契約とポリシーがあれば</strong>、安全に扱えます</div>

</div>
<div class="right">

### その場で確認する習慣を

- Gemini の**左下からプライバシーポリシー**を開く
- 同じGmailでも、**サービスごとに規約は違う**
  - 個人有料版は学習される
- ChatGPTはオプトアウト必須(デフォルトで学習)

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

<!-- _class: fig -->

<div class="page-title">オプトアウト確認の習慣</div>

## 「私のデータはどう扱われる？」を確かめる

<div class="fig-area">
<img src="./src/gemini-privacy.png" alt="組織版Geminiのホーム画面と、データの取り扱いに関する公式の回答パネル">
</div>

<div class="caption">組織版では「入力は<strong>モデルの学習に使われない</strong>／Gmail 等と同等に保護」と明記

</div>

<div class="takeaway">「組織版を使う」＋「その場で確認する」── これが安全活用の二本柱です</div>

<!--
- 安全なAIを、実際の画面で確かめてみましょう。これは千葉大の契約環境のGeminiですが、明海大学の組織版でも考え方は同じです。
- ホーム画面の左下「設定とヘルプ」から、データの取り扱いを開けます。そこには「組織のデータを含むタスクで使っても、入力がモデルの学習や改善に使われることはない」「GmailやGoogleドキュメントと同等に保護される」と明記されています。
- 分からなければ、AI自身に「私のデータはどう扱われる?」と聞くのも有効です。組織版を選ぶことと、その場で確認すること。この二つが、安全活用の柱です。
-->

---

<!-- _class: summary -->

<div class="page-title">使える3つの道具</div>

## 貴学で、既に使えるもの（Google for eduの無料プラン）

<div class="t34">
<div class="t34-left">
<div class="tools tools-v">

<div class="tool">
<div class="t-h">Gemini app</div>
<div class="t-b"><strong>対話型のAI</strong>。文章・要約・翻訳・アイデア出し。<strong>Chromeに統合</strong>され、webも質問できる</div>
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
</div>
<div class="t34-right">
<img src="./src/google-champion.jpg" alt="講師の田川翔：Google for Education Certified Innovator バッジと Champion メダル、Gemini ピン">
<div class="champ">💡 <strong>実は…</strong> 講師は <strong>Google for Edu｜Champion</strong>＋<strong>Certified Innovator</strong>・JPN26）。現場で実践しています。</div>
</div>
</div>

<div class="srcline"><b>年齢・対象:</b> Gemini 13歳以上／NotebookLM 18歳以上（大学生は対象）。表示されない場合は管理者設定を確認</div>

<div class="takeaway">「対話・タスク」「資料読解」「自動化」──3つの機能が安全に使えます </div>

<!--
- 明海大学で今日から使えるのは、無料プランで3つ。
- Gemini appは対話型。文章、要約、翻訳、アイデア出し。Chromeにも統合されていて、論文や資料を開いたまま横で質問できます。
- NotebookLMは、自分の資料を読み込ませて使う道具。論文や配布資料を要約・クイズ・音声解説に変換し、必ず出典つきで答えます。
- Workspace Studioは定型作業の自動化。これは時間の都合で概要だけにします。用途で使い分けてください。
-->

---

<!-- _class: split -->

<div class="page-title">より良いプロンプトの書き方</div>

## Google検索の「キーワード」ではなく、人に教える文体で

<div class="split-body">
<div class="left">

![alt text](src/fig03-prompt-template.png)
<div class="caption">図. おすすめな簡易プロンプト</div>

</div>
<div class="right">

### 良いプロンプトの型（Google 4要素）

- **ペルソナ**：AIに何者として振る舞ってほしいか
- **タスク**：何をしてほしいか
- **背景情報**：判断に必要な前提・参考資料
- **形式**：文字数・構造・語調

<small>出所：[Google プロンプト初級ガイド](https://support.google.com/a/users/answer/14200040)</small>

</div>
</div>

<div class="takeaway">「マニュアルで人に教えるように」プロンプトを打つと、回答品質が一段上がる</div>

<!--
- 多くの人がGoogle検索の延長でAIに「○○ ○○ ○○」とキーワードを投げている。これだとAIは推測で動くので、品質が落ちる。
- ファイル（PDF、画像、スプレッドシート）をそのまま添付できるので、文脈を渡すのが容易。
- 「人にマニュアルを書く」感覚を意識すると、自然と背景・タスク・制約が揃う。
-->

---

<!-- _class: split -->

<div class="page-title">ケース①：Chrome連携</div>

## Chromeに統合 ─ 論文・規程を「開いたまま」読む

<div class="split-body">
<div class="left">

<video controls src="./src/fig13-browser-extension.mov" poster="./src/fig13-browser-extension.png" title="Gemini ブラウザ拡張：開いているページに質問" style="width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,.18)"></video>

<div class="caption">図. ブラウザ拡張：いま開いているページに質問（千葉大環境の例）</div>

</div>
<div class="right">

### こんな読み込みを“その場で”

- ブラウザ右上から**今開いているページ／PDF**に質問
  -  複数ページ選択すると、論文間比較も可能
- 長い**文章**から該当箇所を**引用付き**で抽出
- 様々なユースケース
  - 英語論文・市場レポートを**開いたまま**「要点は？」
  - 法律などからの該当箇所の検索

<div class="srcline"><b>出典:</b> Google for Education「Gemini in Chrome 日本および日本語で利用可能に」（デモは千葉大環境の例）</div>

</div>
</div>

<div class="takeaway">論文・市場レポート・契約資料・学内規程の“読み込み”を、その場で支援できます</div>

<!--
- まずGemini in Chrome。ブラウザに組み込まれ、今開いているページについてその場で質問できます。これは千葉大の画面ですが、明海の皆さんのGoogleアカウントでも同じことができます。
- 研究では英語論文や市場レポートを開いたまま「この章の要点は?」、事務でも長い学内規程やマニュアルを開いて「この場合の手続きは?」と聞くと、該当箇所を引用付きで返してくれます。
- 動画は30秒ほど、規程ページで実演します。
-->
---
<!-- _class: split -->

<div class="page-title">ケース②：Canvas編集</div>

## 「キャッチーに」「短く」「論理的に」を即時反映、AIと"協働"編集

<div class="split-body">
<div class="left">

<video controls src="src/fig11-canvas-editing.mov" poster="src/fig11-canvas-editing.png" style="max-height:386px;max-width:100%;border-radius:8px;display:block;margin:0 auto" title="Title"></video>
<div class="caption">図. AIと協働で編集する</div>

</div>
<div class="right">

### 使い方

- 草稿をCanvasに出す
- 「**もっとキャッチーに**」「**論理を強化**」と指示
- Geminiがその指示に従って書き換える
- 人間側も同じ文章を編集可能
  - 差分が見えるので**苦手な点に気づける**
- 更に、**スライド作成**、インフォグラフ作成も可能
  - 配置のアイデア出しに便利
  - 簡単な説明ならそのまま利用可能

</div>
</div>

<div class="takeaway">「編集プロセス」を伴走することが生成AIで可能</div>

<!--
- これは「文章を書く」のではなく「文章を磨く」AIの使い方。
- Canvasは差分が見えるので、添削の理由が学べる。指導の補助として有用。
- 学生に「自分で書き、AIに磨いてもらう」習慣をつけてもらうのに最適。
-->

---

<!-- _class: split -->

<div class="page-title">ケース②：マルチメディア生成</div>

## テキストから、画像も音楽も ── 教材づくりの幅が広がる

<style scoped>
  section .nbimg { width: 100%; max-height: 388px; border-radius: 10px; border: 1px solid #e3e8f0; box-shadow: 0 2px 10px rgba(0,0,0,.13); display: block; }
  section .mm-video { width: 180px; height: 180px; object-fit: cover; border-radius: 8px; display: block; margin: 6px auto 4px; background: #000; }
  section .src-note { font-size: 14px; color: #7a8581; line-height: 1.4; }
  section .right h3 { margin: 9px 0 4px; }
  section .right ul { margin: 3px 0; }
  section .right li { line-height: 1.4; }
</style>

<div class="split-body">
<div class="left">

<img class="nbimg" src="./src/fig07-nanobanana.png" alt="Geminiの画像生成（Nano Banana）で作った『AIクロス型』教育モデルの概念図">
<div class="caption">図. Gemini 画像生成（通称 Nano Banana）で作成した概念図</div>

</div>
<div class="right">

### 画像生成 （Nanobanana）

- 図解・ポンチ絵・スライド挿絵を**テキスト指示で一発**
- スライドや配布資料の**挿絵づくりが速くなる**

### 音楽生成

- **30秒の短曲**（暗記ソング・授業BGM）も作れる
  - マニュアルを歌っている大学もあるとか…

<video controls class="mm-video" src="./src/fig06-music-generation.mp4" poster="./src/fig06-music-generation.png" title="30秒の音楽生成（学校アカウント）"></video>
<div class="src-note">※ 類似曲がある場合、著作権・商用利用は要確認</div>

</div>
</div>

<div class="takeaway">文章だけでなく、音・画像まで ── 教材づくりの「小ネタ」が一気に増える</div>

<!--
- 生成AIはテキストだけでなく、画像も音楽も作れる。
- 画像：Geminiの画像生成（通称Nano Banana）。手描き風の概念図・ポンチ絵もテキスト指示で出せるので、スライドや配布資料の挿絵づくりが速い。左の図もその一例。
- 音楽：学校アカウントなら30秒の短曲。暗記ソングや授業BGMの小ネタに。公開・商用は著作権に注意。
-->

---

<!-- _class: split -->

<div class="page-title">ケース④：マルチメディア分析</div>

## 音声・OCRの処理 → m4aもJPEGも、そのまま投げ込むだけ

<div class="split-body">
<div class="left">

<video controls src="src/fig12-audio-ocr.mov" poster="src/fig12-audio-ocr.png" style="max-height:386px;max-width:100%;border-radius:8px;display:block;margin:0 auto" title="Title"></video>

<div class="caption">図. 音声・画像をテキスト化</div>

</div>
<div class="right">

### できること

- **議事録**：会議録音→構造化要約
- **手書きノート**：撮影→OCR→検索可能化
- **板書**：写真→学生配布用テキスト
  - 課題の添削理由を理解するのに、学生も使える

### 注意

- 動画処理は、以下の点で微妙
  - 秒数がずれる、要約される
  - 動画の画面の認識と合わない

</div>
</div>

<div class="takeaway">「アナログ素材を一気にデジタル化」する入口としても機能する</div>

<!--
- 音声・画像から構造化テキストを出せる。研究のインタビュー文字起こしに非常に強い。
- 板書の写真をOCRして配布資料化、研究室の手書きノートをアーカイブ化、など応用が広い。
- 個人情報を含む場合は、必ずコアサービス内で完結させ、外部に出さないこと。
-->
---

<!-- _class: split -->

<div class="page-title">ケース⑤：アプリ連携</div>

## ＠でClassroom・Drive・Gmailを呼び出し、書き込む

<div class="split-body">
<div class="left">

![alt text](src/fig04a-at-mention-calendar.png)

<div class="caption">図. ＠で呼び出せるGoogleカレンダー</div>

</div>
<div class="right">

### 事前にONにする2つのスイッチ

- Gemini設定の**外側＋内側の連携ボタン** 
- Gmailの**スマート機能をON**
<img src="src/fig04b-gmail-smart-features.png" alt="alt text" width="300">
### できること

- 授業日程を**Classroomに一括投入**/予定確認
- Driveから「○○のスライド/ファイルある？」で検索
- **件名・本文を過去返信例から学習**して下書き

</div>
</div>

<div class="takeaway">連携を一度ONにすれば、Geminiが「執事」のように振る舞い始める</div>

<!--
- ＠マークを押すと、Google Workspaceの全アプリが呼び出せる。これが連携の入口。
- Classroom投入：シラバスから抽出した日程を一括登録できる。出てきた灰色の枠が「成功」のサイン。
- Drive検索：ファイル名を覚えていなくても、内容から見つけてくれる。
- Gmail下書き：これまでの返信スタイル（署名・文字数・敬語レベル）を学習して、自分らしい返信案を出してくれる。これだけで業務時間がかなり減る。
-->
---
<!-- _class: split -->

<div class="page-title">ケース⑥：範囲指定検索</div>

## URLスコープを指定して、信頼できる範囲だけ読ませる

<div class="split-body">
<div class="left">
<video controls src="src/fig08-domain-scoped-search.mov" poster="src/fig08-domain-scoped-search.png" style="max-height:386px;max-width:100%;border-radius:8px;display:block;margin:0 auto" title="Title"></video>
<div class="caption">図. ドメイン指定で根拠の出所を縛る</div>

</div>
<div class="right">

### 使い方

- **ドメインを指定**して情報源を縛る
  - 例：千葉大の各学科のDP本文を取得
- 参照可能なGoogle doc/slideなども引用できる。
  - URLを貼るだけ
  - PDFなどで出力して再アップデートするのは不要
- コンテキストを充実でき、性能を引き出しやすい
  - クロール不可などで一部参照できない場合がある

</div>
</div>

<div class="takeaway">「どこから取ったか」を制御できれば、AIの出力が利用しやすくなる</div>

<!--
- URLやドメインを指定すると、AIはそこだけを読みに行く。出所が分かるので、引用としても使える。
- Claudeの例：千葉大全学科のディプロマポリシーをURLスコープで指定し、各学科の文字数を一気に比較したらすぐ表になって出てきた。これは衝撃。
- 「あの情報、どこから？」が分かるだけで、AI出力の信頼度が変わる。
-->

---

<!-- _class: split -->

<div class="page-title">ケース⑦：LearnLMで学習</div>

## 答えを「教えず」「学びを支援する」ようにチューニングされたAI

<div class="split-body">
<div class="left">

<video controls src="src/fig05-learnlm-demo.mov" poster="src/fig05-learnlm-demo.png" style="max-height:386px;max-width:100%;border-radius:8px;display:block;margin:0 auto" title="Title"></video>

<div class="caption">図. LearnLM：教えるのではなく問い返す</div>

</div>
<div class="right">

### LearnLMの5原則

- **能動学習**を促す
- **認知負荷**を管理する
- **学習者に適応**する
- **好奇心を刺激**する
- **メタ認知**を深める

Arizona State Univ.等で**教育効果を実証** 
<small>※[Google DeepMindによるLearnLM論文 (arXiv:2412.16429)](https://arxiv.org/abs/2412.16429)</small>

</div>
</div>

<div class="takeaway">「答え」ではなく「考え方」を引き出すモード</div>

<!--
- LearnLMはGoogleが教育向けに開発した特殊AI。教育研究者が5つの原則に基づいてチューニング。
- アリゾナ州立大などで効果検証され、実際に論文が出ている。
- 普通のAIに「答え教えて」と言うと答える。LearnLMは「まず何が分からない？」と返してくる。
- 学生に「依存しない使い方」を覚えてもらうための入口として最適。
-->

---

<!-- _class: split -->

<div class="page-title">試験対策（LearnLMの応用）</div>

## 学習・試験対策まで ─ 例：TOEIC 対策

<div class="split-body">
<div class="left">

<img src="./src/google-toeic.png" alt="Gemini の試験準備機能（TOEIC対策）" style="width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,.18)">

<div class="caption">図. Geminiの試験準備機能（TOEIC対策）</div>

</div>
<div class="right">

### 例：TOEIC 対策まで自動で

- 模擬クイズ・弱点分析・**フラッシュカード**を自動生成
  - PDFを導入後、問題作成依頼でインタラクティブな問題・回答パネルになる

<div class="prompt" style="margin-top:10px;">
<span class="lab">TOEIC問題のプロンプトの書き方</span><br>
「TOEICの練習問題を作成して下さい。<strong>大問◯</strong>を中心に。」
<div style="font-size:14px;color:#5a6764;margin-top:7px;line-height:1.5;">※ 章の指定や機能の指定は不要　／　リスニングはまだ対応していないらしい</div>
</div>

<div class="srcline"><b>出典:</b> Google for Education「Gemini の試験準備機能が TOEIC 対策に利用可能に」</div>

</div>
</div>

<div class="takeaway">「教える」だけでなく「問い返す」AI ── 学生の自学の伴走者になりつつあります</div>

<!--
- ケース③ LearnLM の応用です。Geminiの試験準備機能では、たとえばTOEIC対策の模擬クイズ・弱点分析・フラッシュカードまで自動で作れます。
- 背景にあるのがLearnLM。答えを教えるのではなく、問い返して考えさせる設計です。
- 学生が授業の外側で一人で学ぶ時間＝自学・学び直しを支えます。これは千葉大の例ですが、明海でも同じです。
-->

---

<!-- _class: split -->

<div class="page-title">ケース⑧:Gems（教務の実演）</div>

## よく使うプロンプトを「Gem」にして固定化 ── シラバス点検

<div class="split-body">
<div class="left">

<video controls src="./src/fig20-gem-syllabus.mov" poster="./src/fig20-gem-syllabus.png" title="シラバスチェッカーGemのデモ" style="width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,.18)"></video>

<div class="caption">図. シラバスチェッカーGem（千葉大の記入規則の例）</div>

</div>
<div class="right">

### 役割を固定した“自分専用AI”

- シラバスをアップ→**記入規則に照らして解析・評価**
- 学内で**共有**でき、使うほど精度が育つ
- 同じ要領で様々なGemも作成可能
  - 授業ワーク伴走Gem
  - スライド作成Gem
  - Gemを創るGem

<div class="callout-gray">Gem＝Geminiの機能の一つ。役割を固定した“自分専用AI”エキスパート<br>組織内で共有・配布可能</div>

</div>
</div>

<div class="takeaway">毎回打つ指示はGem化して固定 ── 教務の定型作業がチームの資産になります</div>

<!--
- 最後に教務の実演です。Geminiには「Gem」という、役割を固定した自分専用AIを作る機能があります。シラバスをアップすると記入規則に照らして解析・評価してくれるシラバスチェッカー。
- これは千葉大の記入規則で作った例ですが、明海の記入規則に読み替えれば同じように使えます。学内で共有すればチームの資産に。
- 同じ要領で4択問題を出すGem、授業ワークの伴走Gemも作れます。動画は30秒ほど。
-->

---
<!-- _class: fig -->

<div class="page-title">NotebookLM</div>

## 自分の資料を「読ませて」使う ─ 教材づくりの相棒

<div class="fig-area">
<img src="./src/notebooklm-ui.png" alt="NotebookLMの画面：左に読み込ませた資料、中央に出典つきの回答、右のStudioで音声解説・マインドマップ・クイズ等へ変換">
</div>

<div class="caption">左＝読み込ませた資料、中央＝<strong>出典つき</strong>の回答、右＝要約・クイズ・音声解説・マインドマップ等への変換
</div>

<div class="takeaway">「AI/ネット上の知識」ではなく「与えた資料」に基づいて答えるのが強み</div>

<!--
- NotebookLMは、自分の資料を読ませて使う道具です。配布資料、論文、シラバスを入れると、それだけに基づいて要約・クイズ・音声解説・下書きを作ってくれます。
- 普通のAIと違い、ネット上のあやふやな知識ではなく「先生がアップした資料」に基づいて、しかも出典つきで答えます。だからハルシネーションを抑えられます。
- 教材づくりやFAQ対応の相棒になります。画面は千葉大での活用例で、左に資料・中央に出典つき回答・右に変換メニューが並びます。
-->

---

<!-- _class: split -->

<div class="page-title">NotebookLM 応用</div>

## 事務マニュアルを「対話で引ける」状態に ── マニュアル参照Bot

<div class="split-body">
<div class="left">

<video controls src="./src/fig16-manual-bot.mov" poster="./src/fig16-manual-bot.png" title="NotebookLMで事務マニュアルをFAQ Bot化" style="width:100%;border-radius:10px;box-shadow:0 3px 12px rgba(0,0,0,.18)"></video>

<div class="caption">図. マニュアルBot（千葉大の事務マニュアルの例）</div>

</div>
<div class="right">

### 作り方は3ステップ

- ① マニュアルPDF/Webを**ソース登録**
- ② テスト質問で精度確認
- ③ **共有リンク**で部署内に配布
- 回答は**引用付き**で根拠ページを表示／更新はソース差し替えだけ

<div class="srcline">💡 研究なら：公募要領＋審査基準＋自分の論文を入れ「審査委員視点の質問10個」（科研費）</div>

</div>
</div>

<div class="takeaway">「マニュアルを読む」から「マニュアルに訊く」へ ── 引用付きで根拠も示せます</div>

<!--
- NotebookLMの実演です。事務マニュアルのPDFを読み込ませると「この場合の手続きは?」と対話で引ける状態になります。しかも引用付きで、どのページが根拠かを示すので学内利用の信頼性を担保できます。
- これは千葉大の事務マニュアルの例ですが、明海でも同じです。新人の問い合わせが減り、更新はソースを差し替えるだけ。
- 研究者なら、公募要領と審査基準と自分の論文を入れて「審査委員視点の質問を10個」という科研費の使い方も。動画は30秒ほど。
-->

---

<!-- _class: split -->

<div class="page-title">NotebookLMの教材利用</div>

## 「先生のスライド」が、学生の自学教材になる ── リメディアルにも

<div class="split-body">
<div class="left">

<svg viewBox="0 0 430 330" width="100%" style="max-height:330px" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrN" markerWidth="11" markerHeight="11" refX="4" refY="5" orient="auto"><path d="M1,1 L1,9 L9,5 Z" fill="#00736B"/></marker></defs><rect x="65" y="14" width="300" height="68" rx="12" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/><text x="215" y="44" font-size="19" font-weight="800" fill="#5B6068" text-anchor="middle">先生のスライド・配布資料</text><text x="215" y="68" font-size="16" fill="#5B6068" text-anchor="middle">講義資料・シラバス・過去問</text><line x1="215" y1="84" x2="215" y2="120" stroke="#00736B" stroke-width="3" marker-end="url(#arrN)"/><rect x="65" y="124" width="300" height="64" rx="12" fill="#00736B" stroke="#004D45" stroke-width="2.5"/><text x="215" y="153" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">NotebookLM</text><text x="215" y="177" font-size="16" fill="#E3F1EF" text-anchor="middle">資料に基づき・出典つきで答える</text><line x1="215" y1="190" x2="215" y2="226" stroke="#00736B" stroke-width="3" marker-end="url(#arrN)"/><rect x="35" y="230" width="360" height="86" rx="12" fill="#E3F1EF" stroke="#00736B" stroke-width="2"/><text x="215" y="258" font-size="19" font-weight="800" fill="#004D45" text-anchor="middle">学生が自分のペースで復習</text><text x="215" y="284" font-size="16" fill="#3a4744" text-anchor="middle">要約・クイズ・音声解説・質問</text><text x="215" y="306" font-size="15" fill="#3a4744" text-anchor="middle">＝ 高校範囲の学び直し（リメディアル）にも</text></svg>

<div class="caption">図. 先生の資料 → NotebookLM → 学生の自学</div>

</div>
<div class="right">

### こんな広がり方も

- 大学によっては、**高校範囲の学び直し（リメディアル）** にNotebookLMを提供
- 先生の**講義スライド・配布資料**を読ませれば、**出典つきで答える自学教材**に
  - マインドマップで構造化できるのが秀逸
- 学生は**要約・クイズ・音声解説・質問**で、自分のペースで復習できる

<div class="callout-green"><strong>既存の資料</strong>が、そのまま「問いかけられる教材」に</div>

</div>
</div>

<div class="takeaway">先生の資料が、学生が“対話して個別最適に学べる教材”に変わります</div>

<!--
- NotebookLMの広がり方をもう一つ。大学によっては、入学後の学び直し＝リメディアル、高校範囲の復習にNotebookLMを提供しているところもあります。
- ポイントは、特別な教材を新しく作り込まなくていいこと。先生がいま持っている講義スライドや配布資料を読ませるだけで、出典つきで答える自学教材になります。
- 学生はそれを使って、要約・クイズ・音声解説・質問で、自分のペースで復習できる。先生の資料が、学生が対話して学べる教材に変わります。
-->

---

<!-- _class: summary -->

<div class="page-title">Workspace Studioの概要</div>

## 定型作業の自動化 ＝「つなぐ自動化(iPaaS)」＋ Geminiの判断

<style scoped>
  section .ws-label { font-size: 18px; font-weight: 800; color: var(--accent-dark); margin: 8px 0 2px; }
  section .ws-label .n { display:inline-block; background:var(--accent); color:#fff; border-radius:50%; width:22px; height:22px; line-height:22px; text-align:center; font-size:14px; margin-right:7px; }
  section .evo { margin: 2px 0 2px; }
  section .catalog { display:flex; flex-direction:column; gap:9px; margin-top:5px; }
  section .cat-row { display:flex; align-items:center; flex-wrap:wrap; gap:8px; }
  section .cat-lead { flex:0 0 168px; font-size:17px; font-weight:800; color:#fff; border-radius:8px; padding:6px 12px; text-align:center; white-space:nowrap; }
  section .cat-lead.st { background:#1A6BB0; } section .cat-lead.ai { background:var(--accent); } section .cat-lead.out { background:#B7791F; }
  section .cat-chip { font-size:17px; line-height:1.2; border-radius:999px; padding:5px 14px; border:1px solid; }
  section .cat-chip.st { background:#EAF2FB; border-color:#cfe0f2; color:#1f3a52; }
  section .cat-chip.ai { background:#E3F1EF; border-color:#c2e0db; color:#1f4540; }
  section .cat-chip.out { background:#FBF1DF; border-color:#e8d4a8; color:#6b521f; }
</style>

<div class="ws-label"><span class="n">1</span>自動化方法の変化</div>

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

<div class="ws-label"><span class="n">2</span>設定すること（部品を選んで並べるだけ）</div>

<div class="catalog">
<div class="cat-row"><span class="cat-lead st">きっかけ（スターター）</span><span class="cat-chip st">メール受信</span><span class="cat-chip st">フォーム回答</span><span class="cat-chip st">予定・時刻</span><span class="cat-chip st">チャット／ファイル追加</span></div>
<div class="cat-row"><span class="cat-lead ai">処理（AI）</span><span class="cat-chip ai">要約・抽出</span><span class="cat-chip ai">分類（決定）</span><span class="cat-chip ai">条件分岐</span><span class="cat-chip ai">Gemini／Gem に相談</span></div>
<div class="cat-row"><span class="cat-lead out">出力</span><span class="cat-chip out">メール下書き・ラベル</span><span class="cat-chip out">Chat 通知</span><span class="cat-chip out">Sheets 行追加</span><span class="cat-chip out">Drive 保存／タスク</span></div>
</div>

<div class="srcline"><b>定義の出典:</b> 「Gemini を使用して Workspace 全体で定型タスクを自動化（プログラミング不要）」Google Workspace 管理者ヘルプ <a href="https://support.google.com/a/users/answer/16430812">support.google.com/a/users/answer/16430812</a></div>

<div class="takeaway">ノーコード、Geminiで分岐・自動抽出、WSと連携</div>

<!--
- Workspace Studioは、Workspaceの中の定型作業をAIに肩代わりさせる道具です。
- 位置づけは、手作業 → アプリ連携の自動化(iPaaS) → そこにGeminiの判断が加わったAIエージェント、という進化形。
- 部品は「きっかけ（スターター）→処理→出力」を言葉で並べるだけ。ノーコードで、Gmail・Drive・Sheets・Chatの中で完結し、頭脳はGeminiです。
-->

---

<!-- _class: summary -->

<div class="page-title">Workspace Studioの利用例</div>

## 立場別の「これ、自動化したい」── 例

<div class="prac">

<div class="prac-col">
<div class="pc-h">🏢 事務・教務</div>

- 問い合わせに**回答ドラフト**＋対応表に記録
- 会議記録から**ToDo（担当・期限）を抽出**→Chat通知・ToDoに追加
- 授業評価の自由記述を**分類＋感情分析**→サマリー
- 打合せ候補日を**Calendarに反映**

</div>

<div class="prac-col">
<div class="pc-h">🔬 研究</div>

- 論文PDFを**目的・手法・結果に要約**→管理表に追記
- 音声メモを**実験記録・アイデアに清書**→ノート
- ゼミ・会議で学生が進捗を報告すると、**学びのログ**を書き出し

</div>

<div class="prac-col">
<div class="pc-h">🎓 学生（参考）</div>

- 課題・締切を**Tasks登録＋リマインド**
- 長文メールを**3点に要約**→Chat
- 目上への**メール下書き**を自動生成

</div>

</div>

<div class="callout-green">作り方は<strong>「言葉でたのむ」</strong>だけ。良い自動化は<strong>"コピー用リンク"</strong>で学内に共有できます</div>

<style scoped>
  section .fav-h { font-size: 17px; font-weight: 800; color: var(--accent-dark); margin: 12px 0 6px; }
  section .fav { display: flex; gap: 10px; }
  section .fav .fchip { flex: 1; background: #fff; border: 1.5px solid #c2e0db; border-left: 5px solid var(--accent); border-radius: 12px; padding: 8px 12px; font-size: 16px; line-height: 1.34; color: #21413c; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
  section .fav .fchip b { color: var(--accent-dark); display: block; font-size: 16.5px; margin-bottom: 2px; }
</style>

<div class="fav-h">💡 特に便利だった自動化（おすすめ）</div>
<div class="fav">
<div class="fchip"><b>✅ ToDoの自動作成</b>会議メモなどから課題を抽出</div>
<div class="fchip"><b>📰 毎朝のAIニュース</b>要約して Chat に自動配信</div>
<div class="fchip"><b>📅 カレンダー自動作成</b>予定・日程を自動で登録</div>
<div class="fchip"><b>📚 論文の書誌情報</b>フォルダに入れると自動抽出</div>
</div>

<div class="takeaway">毎週くり返す「ちょっと面倒」を、ひとつずつ自動化</div>

<!--
- ユースケースを立場別に。事務・教務では、問い合わせの回答ドラフト、会議記録からのToDo抽出、授業評価の自由記述の分類・感情分析、日程のCalendar仮反映。
- 研究では、論文PDFの要約を管理表に追記、音声メモの清書、Meetログから学びのログ。
- 学生も参考に。締切リマインド、長文メールの3点要約、メール下書き。どれも「きっかけ→処理→出力」で書け、最終判断・送信は人が行います。
-->

---


<!-- _class: split -->

<div class="page-title">使いこなし方・学び方の型</div>

## AI活用は、「OODAループ」で回すのはどうでしょう

<div class="split-body">
<div class="left">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 0 730 620" preserveAspectRatio="xMidYMid meet" style="max-height:382px;max-width:100%;height:auto;display:block;margin:0 auto" font-family="'Helvetica Neue', 'Hiragino Sans', sans-serif"><defs><marker id="ooda-arrow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#00736B"/></marker></defs><rect x="215" y="235" width="170" height="130" rx="6" ry="6" fill="#fff" stroke="#00736B" stroke-width="3"/><text x="300" y="283" text-anchor="middle" font-size="28" font-weight="700" fill="#00736B">OODA</text><text x="300" y="313" text-anchor="middle" font-size="20" fill="#333">Loop</text><text x="300" y="345" text-anchor="middle" font-size="16" fill="#666">(主語：人間)</text><path d="M 380 130 A 240 240 0 0 1 470 220" fill="none" stroke="#00736B" stroke-width="4" marker-end="url(#ooda-arrow)"/><path d="M 470 380 A 240 240 0 0 1 380 470" fill="none" stroke="#00736B" stroke-width="4" marker-end="url(#ooda-arrow)"/><path d="M 220 470 A 240 240 0 0 1 130 380" fill="none" stroke="#00736B" stroke-width="4" stroke-dasharray="8,6" marker-end="url(#ooda-arrow)"/><path d="M 130 220 A 240 240 0 0 1 220 130" fill="none" stroke="#00736B" stroke-width="4" marker-end="url(#ooda-arrow)"/><circle cx="300" cy="80" r="60" fill="#E2F1EF" stroke="#00736B" stroke-width="3"/><text x="300" y="73" text-anchor="middle" font-size="26" font-weight="700" fill="#00736B">Observe</text><text x="300" y="103" text-anchor="middle" font-size="17" fill="#333">観る</text><text x="230" y="45" text-anchor="end" font-size="18" font-weight="600" fill="#333">AIの出力を見る</text><text x="230" y="68" text-anchor="end" font-size="15" fill="#666">（HITLで確認）</text><circle cx="520" cy="300" r="60" fill="#E2F1EF" stroke="#00736B" stroke-width="3"/><text x="520" y="293" text-anchor="middle" font-size="26" font-weight="700" fill="#00736B">Orient</text><text x="520" y="323" text-anchor="middle" font-size="17" fill="#333">状況判断</text><text x="560" y="400" text-anchor="middle" font-size="18" font-weight="600" fill="#333">自分の知識と照らす</text><circle cx="300" cy="520" r="60" fill="#E2F1EF" stroke="#00736B" stroke-width="3"/><text x="300" y="513" text-anchor="middle" font-size="26" font-weight="700" fill="#00736B">Decide</text><text x="300" y="543" text-anchor="middle" font-size="17" fill="#333">意思決定</text><text x="370" y="555" text-anchor="start" font-size="18" font-weight="600" fill="#333">採用 / 修正 / 棄却</text><text x="370" y="578" text-anchor="start" font-size="15" fill="#666">（使うかどうか決める）</text><circle cx="80" cy="300" r="60" fill="#E2F1EF" stroke="#00736B" stroke-width="3"/><text x="80" y="293" text-anchor="middle" font-size="26" font-weight="700" fill="#00736B">Act</text><text x="80" y="323" text-anchor="middle" font-size="17" fill="#333">実行</text><text x="40" y="400" text-anchor="middle" font-size="18" font-weight="600" fill="#333">再プロンプト／実装</text><g><rect x="425" y="40" width="190" height="110" rx="8" ry="8" fill="#fff8e1" stroke="#e65100" stroke-width="2.5"/><text x="520" y="76" text-anchor="middle" font-size="24" font-weight="700" fill="#e65100">Pause（確認）</text><text x="520" y="106" text-anchor="middle" font-size="17" fill="#333">私はこの出力を</text><text x="520" y="130" text-anchor="middle" font-size="17" fill="#333"><tspan font-weight="700">評価できる</tspan>か？</text><line x1="520" y1="150" x2="520" y2="240" stroke="#e65100" stroke-width="2.5"/></g></svg>

<div class="caption">OODAループを“AI活用版”に修正。主語は常に「人間（先生ご自身）」</div>

</div>
<div class="right">

### 先生のAI活用サイクル

- **Observe**：AIの出力を、まず観る
- **Orient**：ご自身の**専門知識**と照らす
- **Decide**：採用／修正／棄却を決める
- **Act**：授業準備・業務に使う、または再依頼

### 「積み上げ式」より「回す」

- 完璧に理解してから、ではなく**まず使う**
- 活用は**自分が評価できる範囲**で
- 出力は一歩**立ち止まって確認**（幻覚・偏りは残る）
- この姿勢こそ、学生に見せたい<b>“良い文脈”</b>

</div>
</div>

<div class="takeaway">「まず使う → 評価する → 工夫する」サイクルが、先生自身のAI活用力を高める鍵</div>

<!--
- AIの使い方には型があります。OODAループ。主語は常に人間、ここでは先生ご自身です。
- Observe観る、Orient専門知識と照らす、Decide採用か修正か棄却か、Act使うか再依頼か。
- 完璧に理解してからではなく、まず使って評価する。評価できる範囲で活用する。そしてこの姿勢こそ、学生に見せたい“良い文脈”そのものです。
-->

---

<!-- _class: split work -->

<div class="page-title">体験ワーク</div>

## 実際に、Gemini と NotebookLM を触ってみましょう

<div class="split-body">
<div class="left">

### やってみること（10分ほど）

- 先ほど**紹介した機能**をもとに、Geminiを**横の先生**と一緒に試してみましょう
- **Gemini** に1つ質問する／できれば **NotebookLM** に資料を1つ読ませる
- 「**これは便利／これは怪しい**」を確認

<div class="srcline">→ <a href="https://gemini.google.com/">Gemini（gemini.google.com）</a> ／ <br><a href="https://notebooklm.google.com/">NotebookLM（notebooklm.google.com）</a></div>

</div>
<div class="right">

### おすすめの最初の一手

- 「◯◯のワークを実施するGemを作って」
- 来週の授業のPDFを与え、「ミニクイズを5問」
- Canvasをonにして「この内容のスライド案を」

<div class="callout-yellow">一発目は高い精度の回答は出ません<br><strong>OODAで「直して再依頼」</strong>を体感してください</div>

</div>

<div class="callout-green" style="grid-column:1/-1; margin-top:2px;">💬 終わったら、<strong>感想を全体で共有</strong>いただけますと幸いです（可能性を感じた点・引っかかった点など）</div>

</div>

<div class="takeaway">完璧を狙わず、まず触る。「評価しながら使う」感覚をつかみましょう</div>

<!--
- では体験です。提出物はありません。10分ほど、隣の方と一緒にGeminiに質問してみてください。できればNotebookLMに資料を読ませるところまで。
- 最初の一手のおすすめはここに出した3つ。論文の要点、ミニクイズ、返信案。
- うまくいかなくて当然です。さっきのOODAで「直して再依頼」を体感してください。では、どうぞ。
-->

---

<!-- _class: summary -->

<div class="page-title">Slido：業務活用</div>

<style scoped>
  section .polls { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
  section .poll { display: flex; gap: 16px; background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 12px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  section .poll .pno { flex: 0 0 auto; align-self: flex-start; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 5px 12px; white-space: nowrap; }
  section .poll .pbody { flex: 1; min-width: 0; }
  section .poll .pq { font-size: 21px; font-weight: 700; color: var(--accent-dark); line-height: 1.4; margin-bottom: 9px; }
  section .poll .ptype { font-size: 14px; font-weight: 800; color: #fff; border-radius: 999px; padding: 2px 11px; margin-left: 8px; white-space: nowrap; }
  section .ptype.multi { background: #1A6BB0; } section .ptype.single { background: #0F766E; } section .ptype.free { background: #9a5a00; }
  section .poll .popts { display: flex; flex-wrap: wrap; gap: 7px; }
  section .poll .popt { font-size: 16.5px; line-height: 1.3; background: var(--accent-soft); border: 1px solid #c2e0db; border-radius: 999px; padding: 4px 13px; color: #21413c; }
  section .poll .pfree { font-size: 16.5px; line-height: 1.45; color: #5a6764; }
</style>

## 使ってみた実感を、3つ Slido でうかがいます

<div class="polls">

<div class="poll">
<div class="pno">2-1</div>
<div class="pbody">
<div class="pq">AIを、日頃どのくらい活用されていますか？<span class="ptype single">5択</span></div>
<div class="popts">
<span class="popt">① ほぼ毎日</span>
<span class="popt">② 週に数回</span>
<span class="popt">③ 月に数回</span>
<span class="popt">④ ほとんど使わない</span>
<span class="popt">⑤ 使ったことがない</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">2-2</div>
<div class="pbody">
<div class="pq">教務・雑務でどのような内容が、AIで“簡単になってほしい”ですか？<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「テスト・小テストの作成」「メール返信」「議事録の要約」「英文の校正」など、一言で。</div>
</div>
</div>

<div class="poll">
<div class="pno">2-3</div>
<div class="pbody">
<div class="pq">今日、ワークで実際に使ってみてどうでしたか？<span class="ptype single">3択</span></div>
<div class="popts">
<span class="popt">① 期待が持てそう</span>
<span class="popt">② まだ何とも言えない・分からない</span>
<span class="popt">③ 自分の業務には難しそう</span>
</div>
</div>
</div>

</div>

<div class="takeaway">実感はいかがでしたか。AIが先生の支援ツールなると嬉しいです。</div>

<!--
- 体験のあと、Session 2のまとめとして3つ Slido でうかがいます。
- 2-1は5択で、日頃のAI活用頻度。2-2は自由記述で、何が簡単になってほしいか。2-3は3択で、今日触ってみた手応え。
- ここでの実感を踏まえて、最後のSession 3、授業・評価の設計に進みます。【ここで Slido 2-1, 2-2, 2-3 を実施】
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

<!-- _class: fig -->

<div class="page-title">枠組み：学習目標とAIの関係</div>

## Bloomの学習目標分類から考える ──  学びを再デザインする指標

<div class="fig-area">
<svg viewBox="0 36 880 310" style="width:100%;height:auto;max-width:1160px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrB" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#5B6068"/></marker></defs><line x1="20" y1="44" x2="860" y2="44" stroke="#5B6068" stroke-width="2" marker-end="url(#arrB)"/><g><rect x="20" y="70" width="135" height="220" rx="6" fill="#E4E6E9"/><text x="87" y="100" font-size="18" fill="#222" font-weight="bold" text-anchor="middle">記憶</text><text x="87" y="176" font-size="15" fill="#5B6068" text-anchor="middle">事実や概念を</text><text x="87" y="198" font-size="15" fill="#5B6068" text-anchor="middle">暗記している</text><text x="87" y="244" font-size="13" fill="#8a3f12" text-anchor="middle">例：用語・法令</text></g><g><rect x="160" y="70" width="135" height="220" rx="6" fill="#C9D6E3"/><text x="227" y="100" font-size="18" fill="#222" font-weight="bold" text-anchor="middle">理解</text><text x="227" y="176" font-size="15" fill="#5B6068" text-anchor="middle">学習内容を</text><text x="227" y="198" font-size="15" fill="#5B6068" text-anchor="middle">説明できる</text><text x="227" y="244" font-size="13" fill="#8a3f12" text-anchor="middle">例：制度の説明</text></g><g><rect x="300" y="70" width="135" height="220" rx="6" fill="#9FBDD8"/><text x="367" y="100" font-size="18" fill="#222" font-weight="bold" text-anchor="middle">応用</text><text x="367" y="176" font-size="15" fill="#1A6BB0" text-anchor="middle">他の場面・状況に</text><text x="367" y="198" font-size="15" fill="#1A6BB0" text-anchor="middle">使用できる</text><text x="367" y="244" font-size="13" fill="#1A6BB0" text-anchor="middle">例：他物件へ適用</text></g><g><rect x="440" y="70" width="135" height="220" rx="6" fill="#1A6BB0"/><text x="507" y="100" font-size="18" fill="#fff" font-weight="bold" text-anchor="middle">分析</text><text x="507" y="176" font-size="15" fill="#fff" text-anchor="middle">要素に分け</text><text x="507" y="198" font-size="15" fill="#fff" text-anchor="middle">関係性を指摘</text><text x="507" y="244" font-size="13" fill="#dbe7f3" text-anchor="middle">例：市場要因の分解</text></g><g><rect x="580" y="70" width="135" height="220" rx="6" fill="#C0344A"/><text x="647" y="100" font-size="18" fill="#fff" font-weight="bold" text-anchor="middle">評価</text><text x="647" y="176" font-size="15" fill="#fff" text-anchor="middle">事物・判断を</text><text x="647" y="198" font-size="15" fill="#fff" text-anchor="middle">比較し評価する</text><text x="647" y="244" font-size="13" fill="#f5d6db" text-anchor="middle">例：物件比較の良否</text></g><g><rect x="720" y="70" width="140" height="220" rx="6" fill="#C8611C"/><text x="790" y="100" font-size="18" fill="#fff" font-weight="bold" text-anchor="middle">創造</text><text x="790" y="176" font-size="15" fill="#fff" text-anchor="middle">学習を応用し</text><text x="790" y="198" font-size="15" fill="#fff" text-anchor="middle">新しい価値を作る</text><text x="790" y="244" font-size="13" fill="#f6ddca" text-anchor="middle">例：新しい活用提案</text></g><text x="440" y="330" font-size="17" fill="#222" text-anchor="middle">左から全部ないと、右に到達しない/AIが得意・悪影響を与えるレイヤーがある/授業の到達点はどこ？</text></svg>
</div>

<div class="attr">※改訂版ブルーム・タキソノミー（Anderson &amp; Krathwohl, 2001／原著 Bloom 1956）。左の整理は栗田&amp;中村(2023)を参考</div>

<div class="takeaway">出口から考える → 評価・創造は人×AIで出来ることが必要</div>

<!--
- 役割の変化を、学びの「目標」の側から裏づけます。さきほどの2シグマとは別の、同じブルームによる『学習目標分類』、1956年の原著・2001年の改訂版です。
- 記憶・理解・応用・分析・評価・創造の6段階を横一本に並べました。端の記憶・理解はAIに聞けば一瞬で、人が抱え込む意味は薄れます。逆に評価・創造はAIに丸投げできない。
- 誤解しないでほしいのは、思いつきをポンとAIに投げて出力させる、あれは本当の創造ではありません。深く考え抜いた人がいて、その先で人とAIが練り上げる共創こそが創造です。真ん中の応用・分析は、人とAIが分担する『あいだの領域』。
- 不動産でいえば、評価＝複数物件を比べて良否を判断、創造＝新しい活用や再生のプランを提案。ここが人の領域です。気をつけたいのは、効率化それ自体が目的になること。空いた時間を右側＝人にしかできない所へ回せて、はじめて意味があります。
- ※直前の『2シグマ問題』は Bloom (1984) の別研究です。混同しないように。
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
- まず守りの設計です。大原則は、科目の到達目標を絶対に動かさないこと。目標を達成する過程そのものをAIに肩代わりさせてはいけません。
- そのうえで「どこまで使ってよいか」を課題ごとに明示する。守るべきは目標で、AIの可否は目標から逆算して決めます。
- 使い方の工夫が足場かけ・足場はずしです。序盤はAIで理解を支え、終盤はAIなしで到達を確認する。学部生か院生か、最初からか後半か。文脈で判断は変わります。
-->
---

<!-- _class: summary -->

<div class="page-title">既存評価への影響</div>

<style scoped>
  section table.ev2 { border-collapse: collapse; font-size: 17px; margin: 0; }
  section table.ev2 th { background: var(--accent); color:#fff; font-weight:800; padding:3px 12px; text-align:center; line-height:1.12; }
  section table.ev2 th.lbl { text-align:left; }
  section table.ev2 td { border:1px solid #d8dde6; padding:1px 12px; text-align:center; }
  section table.ev2 td.m { text-align:left; font-weight:700; color:#2a3a3a; background:#f4f8f7; white-space:nowrap; }
  section table.ev2 .dbl { color:#0F766E; font-weight:800; font-size:19px; }
  section table.ev2 .sng { color:#9aa5a2; font-size:18px; }
  section table.ev2 td.hot { background:#FCEAEA; }
  section table.ev2 td.bt { border-top:2.5px solid #C0392B; }
  section table.ev2 td.bb { border-bottom:2.5px solid #C0392B; }
  section table.ev2 td.bl { border-left:2.5px solid #C0392B; }
  section table.ev2 td.br { border-right:2.5px solid #C0392B; }
  section .redcap { color:#B23B2E; font-weight:800; font-size:15px; text-align:left; margin:8px 0 0; }
  section .ev-row { display:flex; gap:48px; align-items:center; margin-top:10px; }
  section .ev-left { flex:0 0 auto; min-width:0; }
  section .ev-right { flex:1 1 auto; display:flex; flex-direction:column; gap:16px; justify-content:center; }
  section .ev-right .m-hot, section .ev-right .m-cool { border-radius:12px; padding:16px 20px; font-size:20px; line-height:1.55; }
  section .ev-right .m-hot { background:#FBF1F0; border:1.5px solid #f0d3cf; }
  section .ev-right .m-cool { background:var(--accent-soft); border:1.5px solid #c2e0db; }
  section .ev-right .mh { font-weight:800; display:block; margin-bottom:6px; font-size:22px; }
  section .ev-right .m-hot .mh { color:#B23B2E; }
  section .ev-right .m-cool .mh { color:var(--accent-dark); }
  section .ev-right b { color:#2a3a3a; }
</style>

## テキストで完結する既存評価ほど、生成AIの影響が大きい

<div class="ev-row">
<div class="ev-left">

<table class="ev2">
<tr><th class="lbl"></th><th>知識・<br>理解</th><th>思考・<br>判断</th><th>技能</th><th>関心・<br>意欲</th><th>態度</th></tr>
<tr><td class="m">筆記試験</td><td class="hot bt bl"><span class="dbl">◎</span></td><td class="hot bt br"><span class="sng">○</span></td><td></td><td></td><td></td></tr>
<tr><td class="m">論述課題</td><td class="hot bl"><span class="sng">○</span></td><td class="hot br"><span class="dbl">◎</span></td><td></td><td></td><td></td></tr>
<tr><td class="m">レポート課題</td><td class="hot bb bl"><span class="sng">○</span></td><td class="hot bb br"><span class="dbl">◎</span></td><td><span class="sng">○</span></td><td><span class="sng">○</span></td><td><span class="dbl">◎</span></td></tr>
<tr><td class="m">観察法</td><td><span class="sng">○</span></td><td><span class="sng">○</span></td><td><span class="dbl">◎</span></td><td><span class="dbl">◎</span></td><td><span class="sng">○</span></td></tr>
<tr><td class="m">口述（面接）試験</td><td><span class="dbl">◎</span></td><td><span class="dbl">◎</span></td><td></td><td><span class="dbl">◎</span></td><td><span class="sng">○</span></td></tr>
<tr><td class="m">実技・実演</td><td></td><td><span class="sng">○</span></td><td><span class="dbl">◎</span></td><td><span class="sng">○</span></td><td><span class="sng">○</span></td></tr>
<tr><td class="m">ポートフォリオ</td><td></td><td></td><td><span class="sng">○</span></td><td><span class="sng">○</span></td><td><span class="sng">○</span></td></tr>
<tr><td class="m">自己評価</td><td></td><td></td><td></td><td><span class="dbl">◎</span></td><td><span class="sng">○</span></td></tr>
</table>

<div class="redcap">🟥 赤枠＝生成AIのインパクト大</div>

</div>
<div class="ev-right">
<div class="m-hot"><span class="mh">⚠ 既存評価ほど“まずい”</span>テキストで完結する <b>筆記・論述・レポート</b>（知識・思考）は、生成AIが最も得意な領域＝<b>そのままでは代替されやすい</b></div>
<div class="m-cool"><span class="mh">✓ だから評価を広げる</span>AIの影響が小さい <b>観察・口述・実技・ポートフォリオ・自己評価</b>（技能・関心・態度）を組み合わせる</div>
</div>
</div>

<div class="srcline" style="text-align:right; margin-top:6px;">中島 (2016) を 吉田 (2023) が生成AIの影響を加えて更新</div>

<div class="takeaway">テキストで完結する既存評価はAIの影響大 ── 課題と評価の再設計が必要</div>

<!--
- 守りの設計に続けて、評価方法の地図を一枚。評価は「目標の性質」に合わせて選ぶのが基本です（中島2016）。
- 知識は客観試験・論述で測れますが、技能や態度はレポート・発表・口述・観察・実演でこそ測れる。
- AIで「完成物」だけを見ると知識（高次）に偏りがち。発表・口述・観察を足すと、AIに任せにくい技能・態度まで評価でき、これが次の「評価対象を広げる」につながります。
-->
---

<!-- _class: fig -->

<div class="page-title">MITの科目改善フロー</div>

## MIT式、AIの課題改善フロー ── 課題を「AI対応に」作り変える

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:8px;">

<div style="flex:1; min-width:0; text-align:center;">
<img src="./src/fig70-mit-flow.png" alt="MIT式 AIの課題改善フロー：授業計画の開始→①既存課題をAIに入力し回答を生成→②AIの回答を分析・評価→③AIとの対話で深掘り→④課題の限界と必要性を把握し課題を見直す。継続的な見直しのオプションは ①課題へのAI組み込み・②小テストで補完・③反転授業" style="max-width:100%; max-height:440px; border:1px solid #ddd; border-radius:8px; box-shadow:0 3px 12px rgba(0,0,0,.12);">
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
- 守りの次は攻めです。課題そのものを作り変えます。これがMITの『科目改善フロー』。
- 上の4ステップ：授業計画の開始から、①まず既存の課題をAIに入力して解かせる、②その回答を分析・評価する、③AIと対話してさらに深掘り、④課題の限界と必要性を把握して、課題を見直す。
- 見直しの選択肢が下の3つ。①課題自体にAIをどう組み込むか（事前はAIなし・本課題は可否と引用を明確化・事後はリフレクション）、②週1の低負荷な小テストで補う、③反転授業にする。
- AIに解かせて満点が出るなら作り変えのサインです。さきほどのBloomでいう評価・創造＝人の領域へ寄せる。不動産なら、利害関係者の対話、現場の判断、新しい活用提案。これを次のワークで実際に試します。
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
- 守りの設計を具体化します。Bowen & Watsonが挙げる「課題に書いておくべき7つの問い」です。
- いつ・なぜ許可/禁止するのか、ブレストはカンニングか、プロンプトの提出を求めるか、どうクレジットするか、AIの限界、検出ツールの扱い。
- 大事なのは、これを事前に・課題ごとに、言葉にして学生と共有しておくことです。
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
  section .policy .resp { display:block; margin-top:4px; font-size:15.5px; color:#5a6764; }
</style>

<div class="policy">
<p>このコースの目標の一つは、<strong>効果的に書き、伝える力</strong>を学ぶことです。これは練習が要ります。AIで素早く生産することも期待しますが、<strong>そもそも質の高い文章を自分で作り、直し、見分ける力</strong>も必要です。AIが自分を介さずに仕上げられるなら、それは「雇われるに値するスキルを持っていない」ということ。だから、練習しよう。</p>
<p>そのため<strong>コースの前半は、AIのサポートを一切禁止</strong>します。この苦労やもどかしさは、ゲームのレベル上げの訓練のようなもの。自分の手で取り組む人が、力を得ます。</p>
<p>一方<strong>後半は、特定の状況下でAIの使用を認める</strong>ことがあります。その際は、使ったプロンプトと応答の提出を求める場合があります。</p>
<p>AIリテラシーは重要な新しいスキルです。ただしAIは<strong>「幻覚」── 事実のように見えるものを生成</strong>することに注意。利点と危険の両方を、批判的に考える必要があります。<span class="resp">※ 最終的な成果物、およびAIの制限・バイアスの可能性については、学生本人が責任を負う。このポリシーは必要に応じて変更する。</span></p>
</div>

<div class="srcline"><b>出典:</b> Bowen &amp; Watson, AAC&amp;U 2024（課題における記載例）</div>

<div class="takeaway">前半は「足場」を外して鍛え、後半は使い方を学ぶ 、など── 設計段階で線を引く</div>

<!--
- これは、そのままシラバスに載せられるポリシーの文例です。Bowen & Watsonの例を訳したもの。
- 前半はAIを一切禁止して、自分の手で書く力を鍛える。後半は状況次第で許可し、使ったプロンプトの提出を求める。
- AIの幻覚に注意し、最終的な責任は学生本人が負う。先生方の科目に合わせて、文言を調整して使ってください。
-->

---

<!-- _class: summary -->

<div class="page-title">[参考] 評価のアップデート</div>

<style scoped>
  section .axis-grid { grid-template-columns: 1fr 1fr; gap: 13px; margin-top: 8px; }
  section .axis { padding: 12px 17px; border-left-width: 6px; }
  section .axis .ax-h { font-size: 20px; margin-bottom: 4px; }
  section .axis .ax-b { font-size: 16.5px; line-height: 1.4; }
  section .ev-col { display: flex; gap: 26px; align-items: stretch; margin-top: 10px; }
  section .ev-h { font-size: 22px; font-weight: 800; color: var(--accent-dark); margin: 0 0 11px; }
  section .evf { display: flex; flex-direction: column; gap: 11px; }
  section .evf .ch { border-radius: 10px; padding: 12px 17px; font-size: 18.5px; line-height: 1.4; }
  section .evf .c1 { background: #EAF2FB; border-left: 4px solid #1A6BB0; } section .evf .c1 b { color: #1A6BB0; }
  section .evf .c2 { background: var(--accent-soft); border-left: 4px solid var(--accent); } section .evf .c2 b { color: var(--accent-dark); }
  section .evf .c3 { background: #FBF1DF; border-left: 4px solid #B7791F; } section .evf .c3 b { color: #9a6314; }
</style>

## 「使ったかどうか」で線を引かない ── 大学教育学会 2026.6 の議論から

<div class="ev-col">
<div style="flex:0 0 54%;">
<div class="ev-h">① 判断は「6つの軸」で</div>
<div class="axis-grid">
<div class="axis"><div class="ax-h">① 学習目標の達成</div><div class="ax-b">育てたい力が損なわれていないか</div></div>
<div class="axis"><div class="ax-h">② 思考の主体性</div><div class="ax-b">考える過程を学生が担っているか</div></div>
<div class="axis"><div class="ax-h">③ 評価の妥当性</div><div class="ax-b">提出物が到達度を反映するか</div></div>
<div class="axis"><div class="ax-h">④ 学問的誠実性</div><div class="ax-b">過程を説明でき、欺瞞がないか</div></div>
<div class="axis"><div class="ax-h">⑤ 文脈依存性</div><div class="ax-b">科目・到達段階・目的で変わる</div></div>
<div class="axis"><div class="ax-h">⑥ 評価の公平性</div><div class="ax-b">使う/使わない学生に同じ基準か</div></div>
</div>
</div>
<div style="flex:1;">
<div class="ev-h">② 評価対象を広げる</div>
<div class="evf">
<div class="ch c1"><b>成果物</b>：最終レポート</div>
<div class="ch c2"><b>＋ 対話記録</b>：AIとのやりとり</div>
<div class="ch c3"><b>＋ 振り返り</b>：学びの自己説明</div>
</div>
<div style="font-size:17.5px;line-height:1.5;margin-top:13px;color:#333;">完成物だけでなく<strong>過程と省察</strong>も。評価軸は「使ったか」でなく<strong>本人の中に学びが起きたか</strong>＝つながりの形成（コネクティビズム）</div>
</div>
</div>

<div class="srcline">大学教育学会 2026.6 の議論より（田口先生・中島先生 ほか）／コネクティビズム = G. Siemens</div>

<div class="takeaway">「使用の有無」で線を引かず、"成果物＋過程＋省察"で「学びが起きたか」を評価する</div>

---
<!-- _class: split -->

<div class="page-title">攻めの設計：真正な課題を創る</div>

## 現実の「真正な課題」を中心に ── AIで高次の学びへ

<style scoped>
  section .princ { display:flex; flex-direction:column; gap:7px; margin-top:4px; }
  section .princ .pr { display:flex; align-items:baseline; gap:10px; background:#fff; border:1.5px solid #dde6e4; border-left:5px solid var(--accent); border-radius:9px; padding:7px 14px; }
  section .princ .pn { flex:0 0 auto; font-weight:800; color:#fff; background:var(--accent); border-radius:6px; padding:1px 9px; font-size:15px; }
  section .princ .pt { font-size:17px; line-height:1.35; }
  section .princ .pt b { color:var(--accent-dark); }
</style>

<div class="split-body">
<div class="left">

### 真正な課題が満たす5原理（メリル）

<div class="princ">
<div class="pr"><span class="pn">①</span><span class="pt"><b>問題</b>：現実に起こりそうな問題に挑む</span></div>
<div class="pr"><span class="pn">②</span><span class="pt"><b>活性化</b>：すでに知っている知識を動員する</span></div>
<div class="pr"><span class="pn">③</span><span class="pt"><b>例示</b>：Tell me でなく <b>Show me</b></span></div>
<div class="pr"><span class="pn">④</span><span class="pt"><b>応用</b>：やってみる機会がある（<b>Let me</b>）</span></div>
<div class="pr"><span class="pn">⑤</span><span class="pt"><b>統合</b>：現場で活かし、振り返る</span></div>
</div>

</div>
<div class="right">

### 課題中心型の授業設計

- 現実社会の課題を**学習の中心**に据える（課題中心型）
  - 真正な課題とも言われる
  - 通常は、手間がかかりすぎて実施が難しい
- **「指令書」**を渡せば、教科書＋AIで**自習**できる
  - （RPGの設計者の発想）
- **AIの伴走やシナリオ提示**があるからこそ、これまで難しかった**本質的な課題**が成立 → **早期に高次目標**へ
- 講義が「知識を伝授する」から「学びを実践する」に


</div>
</div>

<div class="srcline">出典: メリルの第一原理（鈴木克明 2015『研修設計マニュアル』北大路書房）／課題中心型インストラクション（ライゲルース 他／ブランチ＝メリル 2013）</div>

<div class="takeaway">「解ける課題」より、現実的な“真正な課題”を ── AIは課題を創り・支える側に</div>

<!--
- 攻めの設計の核心。学びの中心に「真正な課題（現実に起こりそうな問題）」を置く課題中心型の設計です。
- 良い課題はメリルの第一原理を満たす：問題・活性化・例示(Show me)・応用(Let me)・統合。
- ここでAIが効く。指令書（手順）を渡せば学生は教科書＋AIで自習でき、追加の知識もAIが補う。だから講義しなくても、早期に高次の目標へ到達できる。教員の仕事は「教える」から「真正な課題を設計する」へ。
-->

---

<!-- _class: split refs-sm -->

<div class="page-title">不動産教育×生成AI</div>

## 調べたところ、実践研究が始まっています

<style scoped>
  section.refs-sm .left ul { font-size: 22px; line-height: 1.6; }
  section.refs-sm .left h3 { font-size: 24px; }
  section.refs-sm .right h3 { font-size: 22px; }
  section.refs-sm .callout-yellow { font-size: 22px; line-height: 1.5; }
  section.refs-sm table.lit, section.refs-sm .lit { font-size: 19px; }
  section.refs-sm .lit th { font-size: 18px; }
  section.refs-sm .lit td { padding: 8px 11px; }
  section.refs-sm .srcline { font-size: 16px; }
  section.refs-sm .callout-green { font-size: 18px; line-height: 1.45; padding: 9px 16px; margin-top: 6px; }
</style>

<div class="split-body">
<div class="left">

### 既存研究

- **都市計画・参加型設計**では、<br>理解の深化・議論の活性化・批判的思考の促進が報告
- 不動産教育そのものでは、<br>**シナリオ分析・利害関係者対話**が有望
- ただし**定量的な学習効果の実証はまだ薄い**

<div class="callout-yellow"> 経済・都市計画などの知見を、<strong>不動産教育に応用できる段階</strong></div>

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

<div class="callout-green">この後の <strong>第2回・第3回のFD</strong> では、これらの事例を題材に <strong>実際に皆さんで作って、試してみます</strong></div>

<div class="takeaway">不動産分野は「これから」。先生方の実践が、研究の最前線になります</div>

<!--
- 不動産教育に引きつけます。文献を調べると、隣接する都市計画や参加型設計では、AIを使った教育の実践研究が始まっています。
- 利害関係者の対話をAIでシミュレーションして批判的解釈を促す。AI支援のシリアスゲームで理解と批判的思考を高める。参加型ワークショップで技能差をならし議論を活性化する。こうした効果が報告されています。
- ただし不動産教育そのものでの定量的な実証はまだ薄い。逆に言えば、先生方の実践が、この分野の研究の最前線になりえます。
-->
---

<!-- _class: summary -->

<div class="page-title">学生が自ら学ぶを支援する</div>

<style scoped>
  section table.lit { width: 100%; border-collapse: collapse; margin-top: 2px; font-size: 17.5px; }
  section table.lit th { background: var(--accent); color: #fff; font-weight: 800; padding: 5px 10px; text-align: left; font-size: 16px; }
  section table.lit td { border-bottom: 1px solid #e2e7e6; padding: 6px 10px; vertical-align: top; line-height: 1.4; }
  section table.lit td.eff { text-align: center; white-space: nowrap; font-weight: 800; }
  section .eb { display: inline-block; border-radius: 999px; padding: 2px 12px; font-size: 15.5px; font-weight: 800; color: #fff; }
  section .eb.hi { background: #0F766E; } section .eb.mid { background: #9a5a00; } section .eb.lo { background: #7c8488; }
  section.summary > h2 { margin-bottom: 8px; }
  section.summary .callout-green { font-size: 18px; padding: 9px 16px; margin-top: 8px; }
  section.summary .srcline { margin-top: 6px; }
</style>

## 効果のある学習方法 ── 「効果が高い」ほど一人では難しい <span style="font-size:18px;font-weight:600;color:#5B6068">※個人差はあります</span>

<table class="lit">
<tr><th style="width:14%">テクニック</th><th style="width:34%">内容・方法</th><th style="width:9%">効果</th><th style="width:43%">主な理由</th></tr>
<tr><td>実力テスト</td><td>記憶から情報を引き出すテストを行う（練習問題等）</td><td class="eff"><span class="eb hi">高</span></td><td>学習効果が高く幅広い教材・年齢層に有効。<strong>フィードバックがあると効果的</strong>。</td></tr>
<tr><td>分散学習</td><td>一気に学習せず、スケジュールを分散させる</td><td class="eff"><span class="eb hi">高</span></td><td>長期的な記憶保持に有効。一夜漬けより遥かに効率が良い。</td></tr>
<tr><td>精緻化的質問</td><td>「なぜ成り立つか」を自問し、説明を考える</td><td class="eff"><span class="eb mid">中</span></td><td>事実の学習に有効だが、ある程度の予備知識が必要。</td></tr>
<tr><td>自己説明</td><td>新情報が既知の情報とどう関連するかを自分に説明</td><td class="eff"><span class="eb mid">中</span></td><td>論理的思考を要する問題解決に有効だが、時間がかかる。</td></tr>
<tr><td>交互練習</td><td>異なる種類の問題を混ぜて練習する</td><td class="eff"><span class="eb mid">中</span></td><td>数学などで劇的な効果（区別がつかなくなるのを防ぐ）。</td></tr>
<tr><td>要約・再読・<br>ハイライト</td><td>要点をまとめる／繰り返し読む／線を引く</td><td class="eff"><span class="eb lo">低</span></td><td>最も一般的だが、時間対効果が低く、深い理解につながりにくい。</td></tr>
</table>

<div class="callout-green">効果の高い方法は、<strong>準備コストが高く一人では難しい</strong> → だからこそ AIが伴走できる（＝学生が「自分で学ぶ」リメディアルを後押し）</div>

<div class="srcline"><b>出典:</b> Dunlosky, J. et al. (2013). <i>Improving Students' Learning With Effective Learning Techniques</i>. Psychological Science in the Public Interest (PSPI).</div>

<div class="takeaway">効果の高い学び方ほど一人では続かない ── AIが「自分で学ぶ」を支える</div>

<!--
- 個別最適の話を、もう一段。教育心理学の有名なレビュー、Dunloskyたちの2013年の論文が、『生徒はどう勉強すべきか』を効果の高低で整理しています。
- 効果が高いのは、自分の記憶から引き出す実力テスト、特にフィードバック付き。そして学習を分散させること。中くらいが精緻化的質問・自己説明・交互練習。逆に、みんながやりがちな要約・再読・ハイライトは、時間のわりに効果が低い。
- ここが肝心です。効果の高い方法ほど、準備の手間がかかって、一人では続きにくい。テストを作る、フィードバックを返す、スケジュールを分散させて管理する——ここをAIが伴走できる。学生が一人で学ぶ局面こそ、AIが効果の高い学び方を支えられます。
- なお効果量は元の論文では標準化効果量で報告されますが、ここでは高・中・低の3段階で示しています。
-->

---


<!-- _class: fig -->

<div class="page-title">個別最適な学びの実現</div>

## ブルームの「2シグマ問題」── 個別指導の威力

<div class="fig-area">
<svg viewBox="0 0 760 340" style="height:330px;width:auto;max-width:96%" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E8772A" stop-opacity="0.9"/><stop offset="1" stop-color="#E8772A" stop-opacity="0.05"/></linearGradient><linearGradient id="gM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C0344A" stop-opacity="0.85"/><stop offset="1" stop-color="#C0344A" stop-opacity="0.05"/></linearGradient><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1FA89C" stop-opacity="0.9"/><stop offset="1" stop-color="#1FA89C" stop-opacity="0.06"/></linearGradient><marker id="a1" markerWidth="10" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#5B6068"/></marker><marker id="a2" markerWidth="10" markerHeight="9" refX="2" refY="3" orient="auto"><path d="M9,0 L0,3 L9,6 Z" fill="#5B6068"/></marker></defs><text x="14" y="26" font-size="18" fill="#8a8f96">達成度スコア</text><line x1="30" y1="300" x2="615" y2="300" stroke="#d6d9dd" stroke-width="1.5"/><line x1="235" y1="74" x2="235" y2="300" stroke="#cfd2d6" stroke-width="1.4" stroke-dasharray="5 5"/><path d="M45,300 C149.5,300 149.5,185 235,185 C374.5,185 374.5,300 545,300 Z" fill="url(#gL)" stroke="#E8772A" stroke-width="2.5"/><path d="M165,300 C255.75,300 255.75,140 330,140 C426.75,140 426.75,300 545,300 Z" fill="url(#gM)" stroke="#C0344A" stroke-width="2.5"/><path d="M290,300 C364.25,300 364.25,72 425,72 C485.75,72 485.75,300 560,300 Z" fill="url(#gT)" stroke="#1FA89C" stroke-width="3"/><line x1="235" y1="50" x2="425" y2="50" stroke="#5B6068" stroke-width="2" marker-start="url(#a2)" marker-end="url(#a1)"/><text x="330" y="42" text-anchor="middle" font-size="17" font-weight="800" fill="#8f3f12">＋2σ ＝ 偏差値+20</text><g text-anchor="middle" font-weight="800" font-size="15"><text x="175" y="320" fill="#B0651F">一斉 (50%ile)</text><text x="350" y="320" fill="#C0344A">完全習得 (84%ile)</text><text x="500" y="320" fill="#157F76">1対1 (98%ile)</text></g></svg>
</div>

<div class="caption">1対1指導（緑）の平均は、一斉授業（橙）の上位2%に届く ── 2標準偏差＝偏差値+20。これを AI＋教員で近づけられる
<div class="srcline"><b>出典:</b> Bloom, B. S. (1984) "The 2 Sigma Problem", <i>Educational Researcher</i> 13(6), 4–16.／図は千葉大「大学のAI変革」教材より</div>
</div>

<div class="takeaway">しかし、かつて「実現不可能」だった教育の個別最適が、AIで現実味を帯びてきました</div>

<!--
- なぜ場づくりや個別の伴走が効くのか。教育学の有名な発見、ブルームの2シグマ問題です。
- 1対1の個別指導を受けた生徒の平均は、普通の一斉授業の上位2%、つまり2標準偏差ぶん上に来る。偏差値でいえばプラス20です。効果は絶大なのに、全員に家庭教師はつけられない。これがずっと「実現不可能な理想」でした。
- ところがAIと教員を組み合わせれば、この個別最適に近づける可能性が出てきました。ここにAI時代の教育の希望があります。図の橙が一斉授業、緑が1対1指導。緑が橙より2σ＝偏差値20ぶん右にずれているのが見えます。
-->


---

<!-- _class: summary -->

<div class="page-title">未来の可能性</div>

## 生成AIで、教育を「もっと面白く」できる

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

<div class="page-title">教員の役割の変化</div>

## 「知識の専門家」から「学びのファシリテーター」へ

<div class="split-body">
<div class="left">

### 残る価値・高まる価値

- **問いを立てる**力、議論を**深める**力
- 学生が **安心して失敗できる「場」** をつくる力
- 経験から語る、学ぶ価値や成長の方法

<div class="callout-green">教えなくても、学びは作れる<br>教員は<strong>学びの設計と伴走</strong>へ</div>


</div>
<div class="right">

### 場づくりが、これまで以上に効く

- 工業時代＝標準化・競争 → 
情報化時代＝**協働・主体性**
- 「弱い教育」＝学生と教員が、同じ方向から学びを創造し、ともに、内側から知る学び
  - cf. 「強い教育」= 絶対的な真理の伝授
- **AI＋教員**で、より面白い学びを創る

<div class="srcline"><b>出典:</b> ライゲルース &amp; カノップ『情報時代の学校をデザインする ── 学習者中心の教育に変える6つのアイデア』(稲垣忠ほか訳)／Bowen &amp; Watson <i>Teaching with AI</i> (2026)／Aoun <i>Robot-Proof</i>／インゴルド『教育とは何か』(2025)</div>

</div>
</div>

<div class="takeaway">Teaching に加え、Coaching へ ── 教員にしかできない部分が、むしろ際立ちます</div>

<!--
- 答えのひとつが、教員の役割の変化です。知識の専門家から、学びのファシリテーターへ。
- 残る価値、むしろ高まる価値は、問いを立てる力、議論を深める力、安心して失敗できる場をつくる力、一人ひとりに寄り添うコーチングです。
- 知識の"配達"はAtに任せて、教員は学びの設計と伴走へ。AounのRobot-Proofやインゴルドの「弱い教育」も、同じ方向を指しています。教えることに加えて、コーチすること。教員にしかできない部分が、むしろ際立つ時代です。
-->



---

<!-- _class: split work -->

<div class="page-title">時間が余った場合：ワーク③</div>

## 普段の課題を、MITの科目改善フローで「作り変えて」みよう

<div class="split-body">
<div class="left">

### やってみること（手順）

- **手順1（1人・3分）** ご自身の普段の課題を1つ（AIで影響を受けた／変えたいもの）
- **手順2（1人・10分）** それを **Gemini に解かせて**、**MITの科目改善フロー**で修正点を考える（不動産のシナリオ問題でも可）
- **手順3（全員・3分）** 気づきを **Slido** で共有

<div class="srcline">例：「新駅開業に伴う沿線物件の価値変化を、複数の利害関係者の立場でシミュレーションせよ」／「駅前空き店舗の活用提案」</div>

</div>
<div class="right">

### 問い

- AIはどこまで解けましたか？
- **人にしかできない部分**はどこでしたか？
- どうすれば、**もっと良い課題**になりますか？

<div class="callout-green">案外、簡単に変えられます。<strong>目的と成果</strong>から考えるのがコツ ── 気づきを Slido で共有を</div>

</div>
</div>

<div class="takeaway">「AIに解かせてみる」から始める→時間がない場合、次回に実施</div>

<!--
- 最後のワークです。手順1、普段出している課題を1つ思い浮かべる。手順2、それをGeminiに実際に解かせて、さきほどのMITの科目改善フローで、どう作り変えるか修正点を考える。不動産のシナリオ問題でも構いません。たとえば、新駅開業で沿線物件の価値がどう動くか、複数の立場でシミュレーションさせてみる、とか。手順3、気づきをSlidoで共有。
- 問うてください。AIはどこまで解けたか。人にしかできない部分はどこか。どうすればもっと良い課題になるか。
- ポイントは、案外簡単に変えられること、そして目的と成果から考えること。【ここで Slido 3-1, 3-2, 3-3 を実施】
-->

---

<!-- _class: summary -->

<div class="page-title">Slido：授業設計</div>

<style scoped>
  section .polls { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
  section .poll { display: flex; gap: 16px; background: #fff; border: 1.5px solid #dde6e4; border-left: 6px solid var(--accent); border-radius: 12px; padding: 12px 18px; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  section .poll .pno { flex: 0 0 auto; align-self: flex-start; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 5px 12px; white-space: nowrap; }
  section .poll .pbody { flex: 1; min-width: 0; }
  section .poll .pq { font-size: 21px; font-weight: 700; color: var(--accent-dark); line-height: 1.4; margin-bottom: 9px; }
  section .poll .ptype { font-size: 14px; font-weight: 800; color: #fff; border-radius: 999px; padding: 2px 11px; margin-left: 8px; white-space: nowrap; }
  section .ptype.multi { background: #1A6BB0; } section .ptype.single { background: #0F766E; } section .ptype.free { background: #9a5a00; }
  section .poll .popts { display: flex; flex-wrap: wrap; gap: 7px; }
  section .poll .popt { font-size: 16.5px; line-height: 1.3; background: var(--accent-soft); border: 1px solid #c2e0db; border-radius: 999px; padding: 4px 13px; color: #21413c; }
  section .poll .pfree { font-size: 16.5px; line-height: 1.45; color: #5a6764; }
</style>

## 締めくくりに、3つ Slido でうかがいます

<div class="polls">

<div class="poll">
<div class="pno">3-1</div>
<div class="pbody">
<div class="pq">レポートなどの“苦労”を減らすためのアイデア、いかがでしたか？<span class="ptype single">3択</span></div>
<div class="popts">
<span class="popt">① ぜひ取り入れたい</span>
<span class="popt">② 一部は使えそう</span>
<span class="popt">③ 難しそう・ピンとこない</span>
</div>
</div>
</div>

<div class="poll">
<div class="pno">3-2</div>
<div class="pbody">
<div class="pq">AIに解かせた気づきや結果を、会場全体へ簡単に共有してください<span class="ptype free">自由記述</span></div>
<div class="pfree">例：「AIに解かせたら〇〇だった」「人がやるべきは〇〇だと気づいた」など、一言で。</div>
</div>
</div>

<div class="poll">
<div class="pno">3-3</div>
<div class="pbody">
<div class="pq">AIの“教育への可能性”を感じましたか？<span class="ptype single">3択</span></div>
<div class="popts">
<span class="popt">① 強く感じた</span>
<span class="popt">② 少し感じた</span>
<span class="popt">③ あまり感じなかった</span>
</div>
</div>
</div>

</div>

<div class="takeaway">ご回答ありがとうございました。</div>

<!--
- 最後のワークのあと、Session 3のまとめとして3つ Slido でうかがいます。
- 3-1は3択で、課題リデザインのアイデアの手応え。3-2は自由記述で、気づきや結果の共有。3-3は3択で、AIの教育への可能性を感じたか。
- ご回答ありがとうございます。では、今日いちばん持ち帰ってほしいことに進みます。【ここで Slido 3-1, 3-2, 3-3 を実施】
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ①</div>

## 今日の3つのテーマを振り返る

- **関わり方**：禁止でも放置でもなく、「文脈」を作る ── ①ポリシー ②透明性 ③価値を語る
- **業務活用**：「安全なAI」を選び、OODAで「評価しながら使う」
- **授業設計**：目標は守り、評価は6軸で。完成物＋対話記録＋振り返りを見る
- **未来**：2シグマ問題の解消、協働の高度化、真正な課題による深い学びへ
- **教員像**：今以上に、ファシリテーターへ
- **学生に良い"文脈"を作れるのは、教職員と環境(大学の場)** だと思います

<!--
- 振り返ります。関わり方は、禁止でも放置でもなく文脈を作る。ポリシー、透明性、価値を語る、の3つ。
- 業務活用は、安全なAIを選び、OODAで評価しながら使う。
- 授業設計は、目標を守り、評価は6軸で。完成物だけでなく対話記録と振り返りも見る。
- そして未来は、2シグマ問題の解消、協働の高度化、真正な課題へ。いちばんの要点は、学生に良い文脈を作れるのは教員だ、ということです。
-->

---

<!-- _class: message -->

# 最初の問いに戻ります ──学生に、<br>生成AIとどう関わってほしいですか？

## 今日いちばん持ち帰って頂きたい点

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

### お持ち帰り頂きたいもの

- 今日の気づき(ぜひ、メモや写真でまとめて下さい)
  - 次回伺わせて頂きます。
- 質問は、ぜひお声がけください

<div class="callout-green">「まず1つ、試してみる」── そこから始まります</div>

</div>
</div>

<div class="takeaway">第2回・第3回は自由参加です。ぜひご参加下さい。</div>

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
- Science Journals (AAAS). *Guidelines for AI use* (PDF). https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf
- Handa, K. et al. (2025). *Which Economic Tasks are Performed with AI?* (Anthropic Economic Index). arXiv:2503.04761
- Massenkoff, M. & McCrory, P. (2026). *Labor market impacts of AI: A new measure and early evidence*. Anthropic. https://www.anthropic.com/research/labor-market-impacts

<!--
- 参考文献は配布資料にも載せます。気になるものは後で辿ってください。
-->

---

<!-- _class: refs -->

<div class="page-title">参考文献・出典 ②</div>

## 参考文献・出典 ②（教育・授業設計・ツール）

- Bloom, B. S. (1984). The 2 Sigma Problem. *Educational Researcher*, 13(6), 4–16. https://doi.org/10.3102/0013189X013006004
- Anderson, L. W. & Krathwohl, D. R. (2001). *A Taxonomy for Learning, Teaching, and Assessing*.（改訂版ブルーム・タキソノミー／原著 Bloom 1956。学習目標分類とAIの関係は 栗田&中村 2023 を参考）
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). *Improving Students' Learning With Effective Learning Techniques*. Psychological Science in the Public Interest, 14(1), 4–58.
- MIT 科目改善フロー（図の文言は阪大解説等を参照して再構成）／大阪大学 教育学習支援センター「生成AIと評価」 https://www.tlsc.osaka-u.ac.jp/project/generative_ai/assessment_ai.html
- Bowen, J. A. & Watson, C. E. (2026). *Teaching with AI* (2nd ed.). Johns Hopkins Univ. Press.（田川 翔 訳・近刊）
- Aoun, J. E. (2017/2024). *Robot-Proof: Higher Education in the Age of AI*. MIT Press.
- T. インゴルド (2025).『教育とは何か』古川不可知 訳. 亜紀書房.（原題 *Anthropology and/as Education*, 2018）
- Wiley (2025). *ExplanAItions* 研究者調査. wiley.com
- Google for Education (BETT 2026). https://blog.google/products-and-platforms/products/education/bett26-premium-ai/
- Google Workspace 管理者ヘルプ（Workspace Studio）. https://support.google.com/a/users/answer/16430812
- LearnLM. arXiv:2412.16429
- 不動産教育×生成AI：Lozano-Paredes (2026); Boyce et al. (2026); Ahmed et al. (2023); von Brackel-Schmidt et al. (2024) ほか（Scopus）

<!--
- こちらは教育と授業設計、ツール関連の出典です。Teaching with AIは私が翻訳中の本です。
- 不動産教育の文献は、ご関心があれば個別にPDFをお送りします。本日はありがとうございました。
-->
