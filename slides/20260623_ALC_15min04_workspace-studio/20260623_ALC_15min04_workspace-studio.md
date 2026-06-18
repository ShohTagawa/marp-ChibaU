---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用術 04</div><img class="hdr-logo" src="../assets/15min.png" alt="ALC 15 mins セッション">'
footer: ''
style: |
  :root { --hdr-left-w: 23%; --accent: #C8611C; --accent-dark: #8f3f12; --accent-soft: #FBEAD9; }
  /* 中央帯：左タブ(30%)よりleftを小さく(25%)してスラントで噛み合わせ、左寄せにする */
  section .page-title { left: 20%; width: 38%; }
  /* ヘッダー下の線：header を page-title より前面(z-index 13)に上げ、全幅で引く。
     帯・ロゴの前面を同じ高さ・同じ太さで貫く（Boeingデックと同方式） */
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  section.cover-hero { --hdr-left-w: 23%; }
  section.cover-hero .title-event { color: #C8611C; }
  /* ===== レシピ・フロー（スターター→AI→結果）の共通部品 ===== */
  .recipe-flow { display: flex; align-items: stretch; gap: 10px; margin: 16px 0 12px; }
  .recipe-flow.big { margin: 24px 0; }
  .recipe-flow .arrow { align-self: center; font-size: 30px; font-weight: 800; color: #C8611C; }
  .rf-box { flex: 1; border-radius: 12px; padding: 12px 16px; border: 2px solid #ccc; }
  .rf-box .rf-tag { font-size: 16px; font-weight: 700; display: inline-block; padding: 2px 12px; border-radius: 11px; color: #fff; margin-bottom: 8px; }
  .rf-box .rf-body { font-size: 19px; line-height: 1.4; }
  .recipe-flow.big .rf-box .rf-body { font-size: 22px; }
  .rf-trigger { border-color: #1A6BB0; background: #EAF2FB; } .rf-trigger .rf-tag { background: #1A6BB0; }
  .rf-ai { border-color: #C8611C; background: #FBEEE6; } .rf-ai .rf-tag { background: #C8611C; }
  .rf-out { border-color: #0F766E; background: #E7F3F0; } .rf-out .rf-tag { background: #0F766E; }
  .prompt { background: #EAF2FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; font-size: 19px; line-height: 1.5; }
  .prompt .lab { font-weight: 700; color: #1A6BB0; margin-right: 6px; }
  .for-tag { display: inline-block; font-size: 16px; font-weight: 700; color: #fff; background: #5B6068; border-radius: 11px; padding: 2px 12px; margin-bottom: 6px; }
  .for-student { background: #1A6BB0; } .for-staff { background: #C8611C; }
  /* ===== できあがりイメージ（結果のモック） ===== */
  .demo-card { max-width: 680px; margin: 18px auto 0; border: 1px solid #d3d7dd; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 7px rgba(0,0,0,.09); }
  .demo-card .dc-bar { background: #eef1f4; font-size: 16px; font-weight: 700; color: #3a3f45; padding: 6px 16px; border-bottom: 1px solid #e0e4e9; }
  .demo-card .dc-body { font-size: 18px; line-height: 1.6; padding: 12px 18px; background: #fff; color: #2a2d33; text-align: left; }
  .demo-card .dc-note { font-size: 16px; color: #8a4b00; }
  /* ===== 動画プレースホルダー（設定の録画を後日挿入｜横幅のみ指定で差し替え） ===== */
  .video-ph { width: 470px; max-width: 100%; aspect-ratio: 16 / 9; margin: 2px auto; border: 3px dashed #C8611C; border-radius: 12px; background: #FBEEE6; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; color: #9a3412; box-sizing: border-box; }
  .video-ph.full { width: 700px; }
  .video-ph .vp-play { width: 0; height: 0; border-style: solid; border-width: 17px 0 17px 29px; border-color: transparent transparent transparent #C8611C; }
  .video-ph .vp-label { font-size: 19px; font-weight: 700; }
  .video-ph .vp-file { font-size: 14px; color: #b06a3a; font-family: monospace; }
  /* ===== 今回の構成（3行アジェンダ：時間ラベル＋色ピル＋箇条書き） ===== */
  .agenda { display: flex; flex-direction: column; gap: 14px; margin-top: 4px; }
  .agenda-row { display: flex; align-items: center; gap: 24px; border: 1.5px solid #dfe3e8; border-radius: 16px; padding: 12px 26px; background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,.07); }
  .agenda-left { flex: 0 0 236px; }
  .agenda-time { font-size: 18px; color: #5a5f66; font-weight: 700; margin-bottom: 7px; }
  .agenda-time .min { color: #A6192E; }
  .agenda-pill { font-size: 30px; font-weight: 800; text-align: center; border-radius: 12px; padding: 9px 0; line-height: 1.15; }
  .pill-lecture { background: #D9EAD3; color: #38761D; }
  .pill-hands { background: #FBE0E5; color: #A6192E; }
  .pill-talk { background: #E7E9ED; color: #3a3f45; }
  .agenda-list { flex: 1; font-size: 21px; line-height: 1.5; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 5px 0; position: relative; padding-left: 1.1em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #8a8f96; font-weight: 700; }
  /* ===== sec-box 内に QR を右寄せで並べる ===== */
  .sec-qr-row { display: flex; align-items: center; gap: 16px; }
  .sec-qr-row .sq-text { flex: 1; min-width: 0; }
  .sec-qr-row .sq-qr { flex: 0 0 auto; text-align: center; }
  .sec-qr-row .sq-qr img { width: 112px; height: 112px; display: block; background: #fff; border: 1px solid #dfe3e8; border-radius: 8px; padding: 4px; }
  .sec-qr-row .sq-url { flex: 0 0 160px; text-align: right; font-size: 18px; font-weight: 700; line-height: 1.3; overflow-wrap: anywhere; word-break: break-all; }
  .sec-qr-row .sq-url a { color: #1A6BB0; text-decoration: none; }
  /* ===== iPaaS 位置づけ：3段の進化フロー＋「なぜ重要か」帯 ===== */
  .evo { display: flex; align-items: stretch; gap: 10px; margin: 8px 0 6px; }
  .evo .arrow { flex: 0 0 36px; align-self: center; text-align: center; font-size: 30px; font-weight: 800; color: #9aa0a6; }
  .evo-box { flex: 1; border-radius: 12px; padding: 10px 16px; border: 2px solid #ccc; background: #fff; }
  .evo-box .evo-tag { font-size: 16px; font-weight: 700; display: inline-block; padding: 2px 12px; border-radius: 11px; color: #fff; margin-bottom: 6px; }
  .evo-box .evo-body { font-size: 19px; line-height: 1.45; }
  .evo-past { border-color: #b9bec5; background: #f4f5f7; } .evo-past .evo-tag { background: #6b7280; }
  .evo-ipaas { border-color: #1A6BB0; background: #EAF2FB; } .evo-ipaas .evo-tag { background: #1A6BB0; }
  .evo-studio { border-color: #C8611C; background: #FBEEE6; } .evo-studio .evo-tag { background: #C8611C; }
  .lead { font-size: 19px; line-height: 1.45; background: #EEF1F4; border-left: 6px solid #6b7280; border-radius: 8px; padding: 8px 16px; margin: 8px 0 2px; }
  .lead strong { color: #2a2d33; }
  .why-grid { display: flex; gap: 10px; margin-top: 10px; }
  .why-card { flex: 1; background: #FBEAD9; border-radius: 10px; padding: 9px 16px; font-size: 18px; line-height: 1.4; }
  .why-gap { flex: 0 0 36px; }   /* 上段の矢印と同じ幅。カラムを上下で揃える */
  .why-card .why-h { font-size: 19px; font-weight: 800; color: #8f3f12; margin-bottom: 4px; }
  /* レゴブロック比喩：入力・処理・出力のチップを並べて「選んで組むだけ」を視覚化 */
  .lego { display: flex; align-items: center; flex-wrap: wrap; gap: 9px; background: #FFF7EE; border: 1.5px dashed #C8611C; border-radius: 10px; padding: 9px 18px; margin-top: 10px; font-size: 20px; }
  .lego-h { font-weight: 800; color: #8f3f12; margin-right: 4px; }
  .lego-chip { font-weight: 700; color: #fff; border-radius: 8px; padding: 4px 14px; }
  .lego-plus { font-weight: 800; color: #9aa0a6; }
  .chip-in { background: #1A6BB0; } .chip-proc { background: #C8611C; } .chip-out { background: #0F766E; }
  .lego-note { color: #5a5f66; }
  /* 公式定義の引用ブロック（出典リンク付き） */
  .gquote { font-size: 19px; line-height: 1.5; background: #F4F7FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; margin: 8px 0 6px; color: #2a2d33; }
  .gquote strong { color: #1A6BB0; }
  .gquote .src { display: block; margin-top: 6px; font-size: 15px; color: #5a5f66; }
  .gquote .src a { color: #1A6BB0; text-decoration: none; word-break: break-all; }
  /* スライド右上の小さな誘導ノート（H2見出し横の空きに固定） */
  .tr-note { position: absolute; top: 74px; right: 40px; width: 300px; background: #FFF6E6; border: 1.5px solid #F0A500; border-radius: 10px; padding: 7px 14px; font-size: 15px; line-height: 1.4; color: #7a4a00; z-index: 6; }
  .tr-note b { color: #C0182B; }
  /* 作成済みFlowの配布リンク（例スライド用） */
  .flow-link { display: inline-block; margin-top: 8px; font-size: 17px; font-weight: 700; background: #E7F3F0; border: 1px solid #bfe0d8; border-radius: 8px; padding: 5px 14px; }
  .flow-link a { color: #0F766E; text-decoration: none; }
  /* データ利用の【お願い】簡易注記（議論スライド用） */
  .use-note { font-size: 16px; line-height: 1.5; color: #6b6f76; background: #F4F5F7; border-radius: 8px; padding: 9px 16px; margin-top: 14px; }
  .use-note strong { color: #8f3f12; }
  /* ページ8（引用＋3つの特徴）を少し詰めて要点帯との重なりを防ぐ */
  section.feat3 .sections { gap: 8px; }
  section.feat3 .sec-box { padding: 8px 22px; }
  section.feat3 .sec-box h3 { margin-bottom: 4px; }
  /* ===== ユースケース集：学部生／大学院生／教職員の3列一覧 ===== */
  .uc-grid { display: flex; gap: 14px; margin-top: 12px; align-items: stretch; }
  .uc-col { flex: 1; background: #fff; border: 1.5px solid #e3e8f0; border-radius: 12px; padding: 11px 16px 6px; box-shadow: 0 1px 4px rgba(0,0,0,.06); }
  .uc-col .uc-h { font-size: 19px; font-weight: 800; color: #fff; border-radius: 8px; padding: 5px 0; text-align: center; margin-bottom: 9px; }
  .uc-col.col-ug .uc-h { background: #1A6BB0; }
  .uc-col.col-grad .uc-h { background: #C8611C; }
  .uc-col.col-staff .uc-h { background: #0F766E; }
  .uc-col ul { margin: 0; padding-left: 1.1em; list-style: disc; }
  .uc-col li { font-size: 18px; line-height: 1.4; margin: 9px 0; }
  .uc-col li strong { color: #8f3f12; }
  /* ===== p9 スターター（フローの開始方法）チップ一覧 ===== */
  .starters { margin-top: 10px; }
  .starters .st-lead { font-size: 17px; font-weight: 700; color: #1A6BB0; margin-bottom: 8px; }
  .starter-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .st-chip { font-size: 18px; line-height: 1.3; background: #EAF2FB; border: 1px solid #cfe0f2; border-radius: 999px; padding: 6px 14px; color: #1f3a52; }
  .st-chip b { color: #1A6BB0; font-weight: 700; }
  /* ===== シナリオ・ショーケース（2カラム） ===== */
  .scn { display: flex; gap: 16px; margin-top: 12px; }
  .scn-col { flex: 1; background: var(--section-bg); border-radius: 10px; padding: 12px 22px; }
  .scn-col h3 { font-size: 21px; color: var(--accent); margin: 0 0 8px; }
  .scn-col ul { margin: 0 0 0 1.1em; font-size: 19px; line-height: 1.5; }
  .scn-col li { margin: 5px 0; }
  /* ===== p9 部品カタログ（スターター/処理/出力を色分けチップで一覧） ===== */
  .catalog { margin-top: 10px; display: flex; flex-direction: column; gap: 7px; }
  .cat-row { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; }
  .cat-lead { font-size: 16px; font-weight: 800; color: #fff; border-radius: 6px; padding: 4px 11px; white-space: nowrap; }
  .cat-lead.st { background: #1A6BB0; } .cat-lead.ai { background: #C8611C; } .cat-lead.out { background: #0F766E; }
  .cat-chip { font-size: 17px; line-height: 1.2; border-radius: 999px; padding: 4px 12px; border: 1px solid; }
  .cat-chip.st { background: #EAF2FB; border-color: #cfe0f2; color: #1f3a52; }
  .cat-chip.ai { background: #FBEEE6; border-color: #f0d3bf; color: #6b3a1a; }
  .cat-chip.out { background: #E7F3F0; border-color: #c4e2db; color: #1f4540; }
  .cat-chip b { font-weight: 700; }
  /* ===== Workspace Studio 風テンプレートカード ===== */
  .cards { display: flex; flex-direction: column; gap: 16px; margin-top: 12px; flex: 1; justify-content: center; }
  .card-row { display: flex; gap: 14px; }
  .wcard { flex: 1; background: #EEF1F8; border-radius: 16px; padding: 15px 18px; display: flex; flex-direction: column; min-height: 150px; }
  .wcard .wc-label { font-size: 15px; font-weight: 700; color: #1A6BB0; margin-bottom: 6px; }
  .wcard .wc-title { font-size: 19px; line-height: 1.3; color: #202124; font-weight: 600; flex: 1; }
  .wcard .wc-apps { display: flex; gap: 7px; margin-top: 12px; }
  .wc-app { width: 30px; height: 30px; border-radius: 8px; background: #fff center / 20px no-repeat; box-shadow: 0 1px 2px rgba(0,0,0,.16); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; line-height: 1; overflow: hidden; }
  .wc-app.gmail, .wc-app.gemini, .wc-app.chat, .wc-app.drive, .wc-app.sheets, .wc-app.tasks, .wc-app.meet, .wc-app.cal { font-size: 0; color: transparent; }
  .wc-app.gmail { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%234caf50' d='M45 16.2l-5 2.75-5 4.75L35 40h7c1.66 0 3-1.34 3-3V16.2z'/><path fill='%231e88e5' d='M3 16.2l3.6 1.71L13 23.7V40H6c-1.66 0-3-1.34-3-3V16.2z'/><path fill='%23e53935' d='M35 11.2L24 19.45 13 11.2 12 17l1 6.7 11 8.25 11-8.25 1-6.7z'/><path fill='%23c62828' d='M3 12.3V16.2l10 7.5V11.2L9.9 8.86C9.1 8.3 8.2 8 7.3 8 4.9 8 3 9.9 3 12.3z'/><path fill='%23fbc02d' d='M45 12.3V16.2l-10 7.5V11.2l3.1-2.34C38.9 8.3 39.8 8 40.7 8 43.1 8 45 9.9 45 12.3z'/></svg>"); }
  .wc-app.gemini { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%234285F4'/><stop offset='.5' stop-color='%239b72cb'/><stop offset='1' stop-color='%23d96570'/></linearGradient></defs><path fill='url(%23g)' d='M12 2c.6 5.2 4.2 8.8 9.4 9.4C16.2 12 12.6 15.6 12 20.8 11.4 15.6 7.8 12 2.6 11.4 7.8 10.8 11.4 7.2 12 2z'/></svg>"); }
  .wc-app.chat { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%2300AC47' d='M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v3.5L11.5 18H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z'/></svg>"); }
  .wc-app.drive { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%230066da' d='M1.85 19.3 3 21.3a2.4 2.4 0 0 0 .88.88L7.5 16H0a2.4 2.4 0 0 0 .32 1.2z'/><path fill='%2300ac47' d='M12 8 8.43 1.82a2.4 2.4 0 0 0-.88.88L.32 14.8A2.4 2.4 0 0 0 0 16h7.5z'/><path fill='%23ea4335' d='M19.62 21.18a2.4 2.4 0 0 0 .88-.88l.46-.79 2.72-4.71A2.4 2.4 0 0 0 24 14h-7.5l1.6 3.14z'/><path fill='%2300832d' d='M12 8 15.57 1.82A2.4 2.4 0 0 0 14.4 1.5H9.6a2.4 2.4 0 0 0-1.17.32z'/><path fill='%232684fc' d='M16.5 16h-9l-3.62 6.18a2.4 2.4 0 0 0 1.17.32h13.9a2.4 2.4 0 0 0 1.17-.32z'/><path fill='%23ffba00' d='M19.58 8.5 16.02 2.7a2.4 2.4 0 0 0-.88-.88L12 8l4.5 8H24a2.4 2.4 0 0 0-.32-1.2z'/></svg>"); }
  .wc-app.sheets { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%230f9d58' d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><path fill='%23fff' fill-opacity='.35' d='M14 2v6h6z'/><rect x='7.5' y='11' width='9' height='7.5' fill='%23fff'/><path stroke='%230f9d58' stroke-width='.9' d='M7.5 13.5h9M7.5 16h9M11 11v7.5'/></svg>"); }
  .wc-app.tasks { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='9.5' fill='%231a73e8'/><path d='M7.8 12.3l2.7 2.7 5.4-5.8' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"); }
  .wc-app.meet { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%2300832d' d='M3 8a1.5 1.5 0 0 1 1.5-1.5H13a1 1 0 0 1 1 1V16a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 15.5z'/><path fill='%2300ac47' d='M14 10.5l5-3.2V16.7l-5-3.2z'/></svg>"); }
  .wc-app.cal { background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='2.5' fill='%23fff' stroke='%23dadce0'/><path fill='%234285f4' d='M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V8H4z'/><text x='12' y='17.6' font-family='Arial,sans-serif' font-size='9' font-weight='700' text-anchor='middle' fill='%231a73e8'>31</text></svg>"); background-size: 22px; }
  .wc-app.clock { color: #1A73E8; }
  .wc-app.more { color: #5f6368; font-size: 13px; font-weight: 700; }
  /* ===== アクティビティ（実行ログ）モック ===== */
  .actlog { max-width: 960px; margin: 14px auto 0; border: 1px solid #dadce0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 5px rgba(0,0,0,.08); }
  .actlog .al-bar { background: #f1f3f4; font-weight: 700; color: #3c4043; font-size: 16px; padding: 8px 18px; border-bottom: 1px solid #e4e7eb; }
  .al-row { display: flex; align-items: center; gap: 14px; padding: 11px 18px; background: #fff; border-bottom: 1px solid #eef0f2; }
  .al-name { flex: 1; font-size: 19px; color: #202124; }
  .al-time { font-size: 16px; color: #5f6368; white-space: nowrap; }
  .al-badge { font-size: 15px; font-weight: 700; border-radius: 999px; padding: 3px 13px; white-space: nowrap; }
  .al-ok { background: #E6F4EA; color: #137333; }
  .al-err { background: #FCE8E6; color: #C5221F; }
  .al-detail { font-size: 16px; color: #C5221F; background: #fff; padding: 0 18px 12px; border-bottom: 1px solid #eef0f2; }
  .al-detail b { font-weight: 700; }
  /* ===== 各自のワーク：記録カード ===== */
  .deliv { background: #f3f6f9; border: 1px solid #e4e8ee; border-radius: 10px; padding: 11px 16px; margin-bottom: 12px; }
  .deliv .dv-h { font-size: 20px; font-weight: 700; color: #202124; margin-bottom: 5px; }
  .deliv .dv-b { font-size: 18px; line-height: 1.45; color: #3c4043; }
  .deliv .dv-l { font-size: 18px; margin-top: 6px; }
  .deliv .dv-l a { color: #1A6BB0; font-weight: 700; text-decoration: none; }
  /* ===== 記入例（見本）：4セクション ===== */
  .exg { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 8px; }
  .exg .col { display: flex; flex-direction: column; gap: 14px; }
  .exbox { border-radius: 12px; padding: 11px 15px; font-size: 16px; line-height: 1.45; color: #2a2d33; }
  .exbox .exh { font-size: 18px; font-weight: 800; margin-bottom: 5px; }
  .ex-trouble { background: #FCEEF0; } .ex-trouble .exh { color: #B23B4E; }
  .ex-flow { background: #EEF2FB; } .ex-flow .exh { color: #1A6BB0; }
  .ex-tweak { background: #F4ECFB; } .ex-tweak .exh { color: #7B3FA0; }
  .ex-test { background: #EAF5EC; } .ex-test .exh { color: #2E7D46; }
  .exsteps { margin: 6px 0 0; }
  .exsteps .es { display: flex; align-items: center; gap: 9px; background: #fff; border: 1px solid #dde2e8; border-radius: 7px; padding: 5px 10px; margin: 5px 0; font-size: 15px; color: #3c4043; }
  .exsteps .es .wc-app { width: 22px; height: 22px; background-size: 15px; box-shadow: none; border: 1px solid #eee; flex: none; }
  .excap { font-size: 14px; color: #5f6368; margin-top: 7px; }
  .exprompt { background: #fff; border: 1px solid #e2d5f0; border-radius: 7px; padding: 7px 11px; font-size: 13px; line-height: 1.45; color: #4a3a5a; margin-top: 7px; }
  .exout { background: #fff; border: 1px solid #cfe2d4; border-radius: 7px; padding: 7px 11px; font-size: 13px; line-height: 1.45; color: #2a3a2e; margin-top: 7px; }
  .wc-app.forms { font-size: 0; color: transparent; background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23673AB7' d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><path fill='%23fff' fill-opacity='.35' d='M14 2v6h6z'/><path stroke='%23fff' stroke-width='1.4' stroke-linecap='round' d='M8.5 12h7M8.5 15h7M8.5 18h4'/></svg>"); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学のアカウントで、<span class="ss-tune" style="color:#A6192E !important">ちょっと</span>めんどうな作業をAIに任せる</div>
<div class="title-big">Google Workspace Studio</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">ALC 15-min sessions ・ 第4回　｜　15-min × 3<br>学びを変える！研究を深める！生成AI活用術</div>
<div class="title-date">2026/6/18（木）</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!--
- ALC 15 minsセッション第4回へようこそ。今日のテーマは Google Workspace Studio。
- 一言でいうと「Workspaceの中の“定型作業”をAIに肩代わりさせる」道具。Gmail/Drive/Docs/Sheets/Chatの中で動く。
- 構成は15分で概要→30分で一緒に作る→15分で質疑と自分の業務への当てはめ。
- ゴールは「毎日のちょっと面倒」を1つ自動化して帰ること。
-->

---

<!-- _class: summary -->

<div class="page-title">開始の前に</div>

## 今日の研修をはじめる準備（2つ）

<div class="sections">

<div class="sec-box">

### ① ログイン

- PCで千葉大学 **Google Workspace** にログインしてください
- Workspace Studio も**この大学アカウント**で使えます
- 今日のワークでは、この[スプレッドシート](https://docs.google.com/spreadsheets/d/1sZv2id2urfwDByIgpF9D6C4Xtg-NLFHL6_NVctx2Y2U/edit?usp=sharing)を使います

</div>

<div class="sec-box">

### ② slido

<div class="sec-qr-row">
<div class="sq-text">

- **slido** にアクセス（中央のQR・右にURL）
- 質問・アンケート・議論に使う
- オンラインの方も同じ slido へ

</div>
<div class="sq-qr">
<img src="./src/slido-qr.png" alt="slido QRコード">
</div>
<div class="sq-url"><a href="https://app.sli.do/event/jY1JcvDvgH3c69oc5CZhQn">app.sli.do/event/jY1JcvDvgH3c69oc5CZhQn</a></div>
</div>

</div>

</div>

<div class="takeaway">※ slido/ワーク教材への入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</div>

<!--
- 開始前の準備。①千葉大Workspaceにログイン（このアカウントでStudioを使う）。②slidoにアクセス（質問・議論・アンケート用）。
- slido等の入力データの取り扱い（個人情報を除き業務改善・調査研究に利用）を明示。第1回と同じ運用。
-->

---

<!-- _class: summary -->

<div class="page-title">今回の構成</div>

## 15 → 30 → 15 分（3 sessions）

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">最初の15分</div>
<div class="agenda-pill pill-lecture">講義</div>
</div>
<div class="agenda-list">

- Workspace Studio とは何かを理解する
- 「スターター＋ステップ」のしくみを知る
- 大学アカウントで安全に使える理由を知る

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">真ん中<span class="min">30</span>分（前半だけも可）</div>
<div class="agenda-pill pill-hands">体験</div>
</div>
<div class="agenda-list">

- 学生・教職員の自動化（Flow）を一緒に作る
- うまく動きそうなアイデアを共有してみる
- 実際にテストを行ってみる

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">最後の15分</div>
<div class="agenda-pill pill-talk">議論・座談会</div>
</div>
<div class="agenda-list">

- 今日いちばん「便利そう」と思った点は？
- 気付いた注意点・設定のコツを共有する
- 使えそうな作業のアイデアを考えて、提案してみる

</div>
</div>

</div>

<div class="takeaway">今日のゴール：毎日の「ちょっと面倒」を、ひとつ自動化してみる</div>

<!--
- 60分の流れ。最初の15分は座学（Studioとは／しくみ／安全に）、真ん中30分が本番のハンズオン、最後15分で気づきの共有と質疑。30分は前半だけの参加でもOK。
- 今日は「全部覚える」ではなく、自分の手で1つ作って動かす体験を持ち帰ってほしい。千葉大の学生・教職員アカウントでそのまま試せる。
- ゴールは下の帯のとおり「毎日のちょっと面倒を1つ自動化して帰る」。完璧主義にならない。Zoom参加者も反応（👍使ってる／♥️使ってみたい）で参加を。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 1 ・ 15-min ・ 講義</div>

# Workspace Studio とは

## 学びを変える！研究を深める！生成AI活用術

<!--
- まず概要。何ができて、しくみはどうなっていて、大学アカウントで安全に使えるのか、を15分で押さえる。
-->

---

<!-- _class: message -->

# その「毎回おなじ作業」、<br>AIに任せませんか？

## メールの仕分け・要約・リマインド・下書き…

<!--
- 学生も教職員も、毎日「同じ手順」を繰り返している。締切のチェック、問い合わせへの定型返信、議事録の整理。
- こういう“判断は要るけど頭は使わない”作業こそ、AIエージェントの出番。
-->

---

<!-- _class: summary -->

<div class="page-title">こんな「面倒」</div>

## 学生も教職員も、毎日くり返している

<div class="sections">

<div class="sec-box">

### 学生のあるある

- 課題やレポートの**締切を見落とす**
- 教員からのメールに**気づくのが遅れる**
- 連絡が多すぎて、**chatに内容ごと**にまとめたい
- 毎朝**気になるニュース**をまとめたい
- 就活でメールを「結論」「自分のアクション」「期限」に要約したい

</div>

<div class="sec-box">

### 教職員のあるある

- 学生から**同じ質問**が届く場合は、定型化したい
- **議事録づくり**に時間がとられる
- アンケートの**集計・とりまとめ**が手作業
- formに登録があれば、下書き案が欲しい

</div>

</div>

<div class="takeaway">作業が「きっかけ→処理→通知」の形に書ける = 自動化できる</div>

<!--
- 左右に学生・教職員の“あるある”を並べた。今日はこの両方の例を実際に作る。
- ポイントは、どれも「あるきっかけで→決まった処理をして→誰かに知らせる」という共通の形をしていること。だから自動化できる。
-->

---

<!-- _class: summary -->

<div class="page-title">位置づけ</div>

## アプリ連携の自動化（iPaaS）と、その進化形

<div class="tr-note">🎓 もっと学びたい人へ<br><b>第4ターム「生成AI活用講座」</b>もチェック</div>

<div class="lead">
<strong>iPaaS（Integration Platform as a Service）</strong>＝ アプリ同士を<strong>つなぎ</strong>、またぐ作業を<strong>ノーコードで自動化</strong>するクラウドサービス。
</div>

<div class="evo">
<div class="evo-box evo-past">
<span class="evo-tag">これまで</span>
<div class="evo-body"><strong>人が手作業</strong><br>アプリ間をコピペ・<br>転記・確認・通知</div>
</div>
<div class="arrow">→</div>
<div class="evo-box evo-ipaas">
<span class="evo-tag">iPaaS</span>
<div class="evo-body"><strong>連携を自動化</strong><br>アプリ同士をノーコードで<br>つなぐ（例：Zapier / Make）</div>
</div>
<div class="arrow">→</div>
<div class="evo-box evo-studio">
<span class="evo-tag">Workspace Studio</span>
<div class="evo-body"><strong>AIエージェント</strong><br>連携に Gemini の判断が加わる<br>読む・要約・分類・下書きまで</div>
</div>
</div>

<div class="why-grid">
<div class="why-card"><div class="why-h">アプリが増えた</div>Gmail・Drive・フォーム…<br>アプリ間の「手作業」が増加</div>
<div class="why-gap"></div>
<div class="why-card"><div class="why-h">誰でも作れる</div>専門家でなくても気づきさえあれば、<br>自分で自分の業務を自動化できる</div>
<div class="why-gap"></div>
<div class="why-card"><div class="why-h">AIが分岐や自動生成</div>ルールを明確にプログラム化せずとも<br>こうしてほしい、だけでAIがやってくれる。</div>
</div>

<div class="lego">
<span class="lego-h">🧩 組み方はレゴブロック</span>
<span class="lego-chip chip-in">入力（きっかけ）</span>
<span class="lego-plus">＋</span>
<span class="lego-chip chip-proc">処理</span>
<span class="lego-plus">＋</span>
<span class="lego-chip chip-out">出力</span>
<span class="lego-note">の3種類を選んで並べるだけ。コードは書かない。</span>
</div>

<div class="takeaway">「つなぐ自動化（iPaaS）」＋ AIの判断 ＝ Workspace Studio</div>

<!--
- ここで一段引いて「位置づけ」を示す。Workspace Studio は突然出た魔法ではなく、iPaaS（アプリ連携自動化）という流れの“AI入り・新世代”。
- iPaaS＝Integration Platform as a Service。Gmail/Drive や外部SaaS（Salesforce/Slack/Asana等）をつなぎ、またぐ手作業をノーコードで自動化するクラウド。代表例 Zapier / Make / Power Automate / Workato。
- なぜ重要か：使うアプリが増えるほど「橋渡しの手作業」が増える。iPaaSはそれを“誰でも”作れるようにした。現場主導の業務改善が広がる。
- Studio の新しさは頭脳に Gemini が入ったこと。単なるルール連携でなく「読む・要約・分類・判断」まで任せられる＝AIエージェント。だから次の「3つの特徴」につながる。
-->

---

<!-- _class: summary feat3 -->

<div class="page-title">3つの特徴</div>

## Workspace Studio とは何か

<div class="gquote">
「Google Workspace Studio は、<strong>Gemini を使用して Google Workspace サービス全体で日常の定型的なタスクを自動化できるオンライン アプリ</strong>です。プログラミングは必要ありません。」
<span class="src">出典：Google Workspace 管理者ヘルプ <a href="https://support.google.com/a/users/answer/16430812?hl=ja&ref_topic=16431193">support.google.com/a/users/answer/16430812</a></span>
</div>

<div class="sections">

<div class="sec-box">

### ① ノーコード

- **やりたいことを言葉で書くだけ**
- プログラミング・専門用語は不要

</div>

<div class="sec-box">

### ② Workspace と一体

- Gmail / Drive / Docs / Sheets / **Chat** / Meet の中で動く
- いつも使う道具の延長で完結

</div>

<div class="sec-box">

### ③ Gemini が頭脳

- **Gemini** が読む・要約する・判断するので、添付ファイルの中身まで理解できる

</div>

</div>

<div class="takeaway">「AIエージェント」を、ふだんの作業でつかえる→便利</div>

<!--
- Workspace Studio = 自分専用の小さなAIアシスタント（エージェント）を、コードなしで作れる仕組み。2025年12月発表、Business / Enterprise / Education で一般提供。
- 強みは3つ。言葉で作れる／Workspaceの中で完結する／頭脳がGemini 3で“判断”ができる。
- 出典は最後の参考リンクに。studio.workspace.google.com から使う。
-->

---

<!-- _class: fig -->

<div class="page-title">しくみ＝Flow</div>

## 「スターター」＋「ステップ」でできている

<div class="recipe-flow">
<div class="rf-box rf-trigger">
<span class="rf-tag">スターター</span>
<div class="rf-body"><strong>きっかけ</strong><br>いつ・何が起きたら</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-ai">
<span class="rf-tag">ステップ（AI）</span>
<div class="rf-body"><strong>処理する</strong><br>読む・考える</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-out">
<span class="rf-tag">ステップ（出力）</span>
<div class="rf-body"><strong>結果を出す</strong><br>どこかに届ける</div>
</div>
</div>

<div class="catalog">
<div class="cat-row">
<span class="cat-lead st">スターター</span>
<span class="cat-chip st"><b>スケジュール</b></span>
<span class="cat-chip st"><b>メール受信</b></span>
<span class="cat-chip st"><b>チャット</b>（投稿・メンション・参加）</span>
<span class="cat-chip st"><b>ファイル / フォルダ</b>（追加・編集）</span>
<span class="cat-chip st"><b>シートの変更</b></span>
<span class="cat-chip st"><b>フォームの回答</b></span>
<span class="cat-chip st"><b>会議</b>（予定・録画）</span>
</div>
<div class="cat-row">
<span class="cat-lead ai">ステップ・処理</span>
<span class="cat-chip ai"><b>Gemini に相談</b></span>
<span class="cat-chip ai"><b>Gem に質問</b></span>
<span class="cat-chip ai"><b>要約</b></span>
<span class="cat-chip ai"><b>抽出</b></span>
<span class="cat-chip ai"><b>決定</b>（分類）</span>
<span class="cat-chip ai"><b>条件分岐</b></span>
<span class="cat-chip ai"><b>フィルタ</b></span>
<span class="cat-chip ai"><b>繰り返し</b></span>
<span class="cat-chip ai"><b>NotebookLM に質問</b></span>
</div>
<div class="cat-row">
<span class="cat-lead out">ステップ・出力</span>
<span class="cat-chip out"><b>メール</b>（通知・下書き・ラベル・スター）</span>
<span class="cat-chip out"><b>Chat で通知</b></span>
<span class="cat-chip out"><b>Sheets</b>（行を追加・更新）</span>
<span class="cat-chip out"><b>Drive</b>（添付保存・フォルダ作成）</span>
<span class="cat-chip out"><b>カレンダー</b>（時間のブロック）</span>
</div>
</div>

<div class="takeaway">1つの Flow = スターター1つ ＋ ステップ（処理→出力）を並べるだけ</div>

<!--
- Flow（フロー）が自動化の単位。部品は2種類だけ。
- スターター＝引き金。下の一覧から1つ選ぶ：スケジュール／メール受信／チャット（投稿・メンション・参加・リアクション）／ファイル・フォルダ（追加・編集）／シート変更／フォーム回答／会議（予定・録画準備）。1つのFlowにスターターは1つ。
- ステップ＝起きたあとの処理。【処理】Geminiに相談／要約・抽出／決定（分類）／条件分岐・フィルタ・繰り返し／NotebookLMに質問。【出力】メール（通知・下書き・ラベル・スター）／Chat通知／Sheets（行追加・更新）／Drive（添付保存・フォルダ作成）／カレンダー（時間ブロック）。これらをいくつでも並べられる。
- この後のハンズオンは全部この形。「何をきっかけに、何をして、どう知らせるか」を埋めるだけ。
-->

---

<!-- _class: summary -->

<div class="page-title">テンプレ：できること①</div>

## こんなことが、ぜんぶ自動で

<div class="cards">
<div class="card-row">
<div class="wcard">
<div class="wc-label">迅速に対応する</div>
<div class="wc-title">重要な人からのメールを通知</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span><span class="wc-app chat">C</span></div>
</div>
<div class="wcard">
<div class="wc-label">メールを常に把握する</div>
<div class="wc-title">未読メールを毎朝まとめて要約</div>
<div class="wc-apps"><span class="wc-app clock"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><span class="wc-app gemini">✦</span><span class="wc-app chat">C</span></div>
</div>
<div class="wcard">
<div class="wc-label">新しいリクエストを追跡する</div>
<div class="wc-title">アクション項目のメールにラベル</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span><span class="wc-app gmail">M</span></div>
</div>
</div>
<div class="card-row">
<div class="wcard">
<div class="wc-label">整理された状態を維持する</div>
<div class="wc-title">添付ファイルをドライブに自動保存</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app drive">▲</span></div>
</div>
<div class="wcard">
<div class="wc-label">すぐにレビューする</div>
<div class="wc-title">緊急メールの通知を受け取る</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span><span class="wc-app chat">C</span></div>
</div>
<div class="wcard">
<div class="wc-label">重要なメールを確認する</div>
<div class="wc-title">フォローが必要なメールにスター</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span></div>
</div>
</div>
</div>

<div class="takeaway">これ、出来たら便利だと思いませんか？</div>

<!--
- 実テンプレを「カード」で見せて breadth を体感させる。すべて Workspace Studio の実テンプレ（受信トレイ／会議）。
- アイコンは Gmail/Gemini/Chat/Drive 等の意匠を簡略再現。詳細な一覧は末尾「（参考）できること」に。
-->

---

<!-- _class: summary -->

<div class="page-title">テンプレ：できること②</div>

## あなたの仕事だと、どれが効く？

<div class="cards">
<div class="card-row">
<div class="wcard">
<div class="wc-label">フォローアップを効率化する</div>
<div class="wc-title">会議後に要約とアクションを自分へ</div>
<div class="wc-apps"><span class="wc-app meet">▶</span><span class="wc-app gemini">✦</span><span class="wc-app tasks">✓</span><span class="wc-app chat">C</span></div>
</div>
<div class="wcard">
<div class="wc-label">フォローアップをトラッキング</div>
<div class="wc-title">文字起こしからタスクを自動作成</div>
<div class="wc-apps"><span class="wc-app meet">▶</span><span class="wc-app gemini">✦</span><span class="wc-app tasks">✓</span><span class="wc-app more">+1</span></div>
</div>
<div class="wcard">
<div class="wc-label">準備する</div>
<div class="wc-title">会議前の説明を Chat で受け取る</div>
<div class="wc-apps"><span class="wc-app cal">31</span><span class="wc-app chat">C</span></div>
</div>
</div>
<div class="card-row">
<div class="wcard">
<div class="wc-label">メール リクエストを追跡する</div>
<div class="wc-title">アクション項目が来たらタスク作成</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span><span class="wc-app tasks">✓</span><span class="wc-app more">+1</span></div>
</div>
<div class="wcard">
<div class="wc-label">タスク全体を把握する</div>
<div class="wc-title">アクション項目メールを通知</div>
<div class="wc-apps"><span class="wc-app gmail">M</span><span class="wc-app gemini">✦</span><span class="wc-app chat">C</span></div>
</div>
<div class="wcard">
<div class="wc-label">ニュースをチェックする</div>
<div class="wc-title">ニュースの見出しを毎日要約</div>
<div class="wc-apps"><span class="wc-app clock"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><span class="wc-app gemini">✦</span><span class="wc-app chat">C</span></div>
</div>
</div>
</div>

<div class="takeaway">自分の「これ自動化したい」を1つ思い浮かべてみよう</div>

<!--
- カード続き（会議／タスク／毎日）。ここで「自分の場合はどれが効く？」を各自考える。Session 2 の題材に直結。
- 詳しい一覧は末尾「（参考）できること②」に回した。
-->

---

<!-- _class: summary -->

<div class="page-title">作り方</div>

## 作り方は3通り（迷ったら①）

<div class="sections">

<div class="sec-box">

### ① 言葉でたのむ（最速）

- やりたいことを**そのまま文章で**書く
- Gemini が Flow を組み立ててくれる
- 例：「毎週金曜に、進捗シートの更新をリマインドして」

</div>

<div class="sec-box">

### ② テンプレートから選ぶ

- よくある自動化が**ひな型**で用意されている
- 選んで、少し直すだけ

</div>

<div class="sec-box">

### ③ 自分で組む

- スターターとステップを**手で並べる**
- 細かく作り込みたいとき

</div>

</div>

<div class="takeaway">まずは①「言葉でたのむ」。動かしてから直せばよい</div>

<!--
- 3通りある。初めてなら①でいい。日本語でやりたいことを書けば、Geminiが下書きのFlowを作ってくれる。
- ②テンプレートは「メール要約」「リマインド」など定番の型。③は細かく自作したい人向け。
- 大事なのは、完璧に作ろうとしないこと。まず①で作って、テスト実行して、直す。
-->

---

<!-- _class: summary -->

<div class="page-title">作り方のコツ</div>

## うまく作る3つのコツ

<div class="sections">

<div class="sec-box">

### ① 入出力をイメージ

- 「**入力 → 処理 → 出力**」を先に思い描く
- 必要な**パラメータ**（対象・条件・出力先）を取り出す

</div>

<div class="sec-box">

### ② テストランで確認

- 登録（有効化）の前に必ず **Test run**
- テスト用データ（メール／フォルダ）で安全に試す

</div>

<div class="sec-box">

### ③ 少しずつ直す（育てる）

- **出力やログ**を見て、思い通りに近づける
- プロンプトや条件を**小さく修正**して再実行
- 最初は精度が低く<strong>「おもちゃ?」</strong>と感じても、直すほど<strong>どんどん賢くなる</strong>

</div>

</div>

<div class="takeaway">いきなり完璧を狙わず「イメージ→テスト→修正」を回す</div>

<!--
- 作り方（3通り）の次に、うまく作るための実践的なコツ。iPaaS／Flow共通の勘どころ。
- ①作る前に頭の中で「入力→処理→出力」を描き、必要なパラメータ（対象・条件・出力先）を言語化する。これが「言葉でたのむ」文の骨格になる。
- ②いきなり有効化せず Test run。最初はテスト用のメール/フォルダで、誤送信・誤操作を防ぐ。
- ③一発で完成は狙わない。出力やログを見て、プロンプトや条件を少しずつ直して再実行。「作る→試す→直す」の反復。
-->

---

<!-- _class: summary -->

<div class="page-title">アクティビティ</div>

## 動いた？失敗した？は「アクティビティ」で

<div class="actlog">
<div class="al-bar">アクティビティ ・ 最終更新 今日 11:00（直近40日のログ）</div>
<div class="al-row">
<span class="al-name">チャットの参加依頼から カレンダー予定を作成</span>
<span class="al-badge al-err">✕ エラー</span>
<span class="al-time">6/17 20:25</span>
</div>
<div class="al-detail"><b>ステップ5 エラー：</b>開始時刻（タイムスタンプ）が空 → 予定を作成できませんでした（The start time wasn't set）</div>
<div class="al-row">
<span class="al-name">メンションを分析してタスク化し、予算リストに追加</span>
<span class="al-badge al-ok">✓ 完了</span>
<span class="al-time">6/17 20:25</span>
</div>
<div class="al-row">
<span class="al-name">チャットの参加依頼から カレンダー予定を作成</span>
<span class="al-badge al-ok">✓ 完了</span>
<span class="al-time">6/17 19:38</span>
</div>
</div>

<div class="caption">アクティビティ＝各フローの実行履歴。成功・失敗とエラー内容が確認できる</div>

<div class="takeaway">失敗は当たり前。ログのエラーを見て直せばいい（コツ③）</div>

<!--
- 「アクティビティ」タブ＝作ったフローの実行履歴。いつ動いて、成功（完了）したか・失敗（エラー）したかが一覧で見える。直近40日分。
- 例：1件目はエラー。「ステップ5：開始時刻が未設定 → 予定を作れなかった」。失敗は珍しくない。原因がログに出るので、そこを直す。
- これが作り方のコツ③「出力やログを見て、少しずつ修正」の実物。失敗してOK、エラーメッセージが次の一手を教えてくれる。
-->

---

<!-- _class: split -->

<div class="page-title">安全に使う</div>

## 大学アカウントだから安心なこと

<div class="split-body">
<div class="left">

<div class="callout-gray">
Workspace Studio は、あなたの<strong>大学アカウントの権限の中</strong>だけで動きます。<br>
自分が見られないデータには、エージェントも触れません。
</div>

<div class="caption">図. 自分の権限を超えて動くことはない</div>

<div class="callout-green">
<strong>Human in the loop</strong>：送信・公開などの最終判断は<strong>人</strong>が行います。AIは下書きまで。勝手に「暴走」しません。
</div>

</div>
<div class="right">

### 確認しておく3点

- **教育機関向けの保護**：Education のデータは**人間レビューなし・学習に不使用**（FERPA／COPPA準拠）
- **権限の範囲内**：自分がアクセスできる範囲のデータだけを扱う
- **共有は明示的**：作った Flow は自分のもの。共有して初めて他人が使える

<div class="callout-yellow">
Workspace for Education の<strong>コアサービス</strong>
</div>

</div>
</div>

<div class="callout-blue">
<strong>Workspace Intelligence</strong>：Gmail・Drive・Docs・Calendar・Chat の文脈を Gemini に与え、あなたの書き方に合わせて回答を最適化＝<strong>エージェント（Flow）が賢くなる土台</strong>。Education Plus 等が対象・管理者設定で制御（2026/4 発表）。
</div>

<!--
- 「業務メールや学生情報を入れて大丈夫？」という不安に先に答えておく。
- Workspace Intelligence＝Gmail/Drive/Docs/Calendar/Chatの文脈をGeminiに与え、ユーザーの書き方・形式に適応して回答を最適化する意味層（引用付き）。これがWorkspace Studioのエージェントが「文脈を踏まえて賢く」動く土台。Cloud Next '26（2026/4/22）発表。対象はEducation Plus等（Education Fundamentals/Standardは非対応）、管理コンソールで制御・各データ源は既定ON・ユーザーもオプトアウト可。
- ※「Personal Intelligence」は別機能で個人アカウント限定（Education/Business/Enterprise非対応）。混同しないこと。
- Workspace Studioはあなたのアカウントの権限の範囲でしか動かない。あなたが見られない他人のメールやドライブには、作ったエージェントも触れられない。
- Education向けのデータは人間レビューされず、モデル学習にも使われない（FERPA/COPPA準拠）。個人版の無料AIとはここが違う。出典：Google for Education（BETT 2026）／Google管理者ヘルプ。
- Workspace for Educationのコアサービスで、高等教育は既定ON（管理者で変更可）。年齢要件：Geminiアプリ13歳+／NotebookLM18歳+（大学生は満たす）。表示されない場合はALC/情報の窓口へ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 2 ・ 30-min ・ 体験</div>

# つくってみる（ハンズオン）

## 学びを変える！研究を深める！生成AI活用術

<!--
- ここからが本番。実際に画面を開いて、4つの例を一緒に作る。学生向け2つ、教職員向け2つ。
- 全部「スターター→AI→結果」を埋めるだけ。難しくない。
-->

---

<!-- _class: split -->

<div class="page-title">進め方</div>

## ハンズオンの3ステップ

<div class="split-body">
<div class="left">

<div class="callout-blue">
<strong>① 開く</strong><br>
<code>studio.workspace.google.com</code><br>
（大学アカウントでログイン）
</div>

<div class="callout-orange">
<strong>② 作る</strong><br>
「言葉でたのむ」でやりたいことを入力
</div>

<div class="callout-green">
<strong>③ 試す → 有効化</strong><br>
<strong>Test run</strong> で動作確認 → <strong>Turn on</strong>
</div>

</div>
<div class="right">

### 今日のワーク

<div class="callout-orange">
<strong>① まず一緒に1つ</strong> 作る<br>
<strong>② あとは各自で1つ</strong> 作って記録する
</div>

このあとの**4つの例**（学生2・教職員2）を見本に、自分の「めんどう」を1つ自動化。<br>記録のしかたは後のページで。

</div>
</div>

<div class="takeaway">必ず Test run で確認してから Turn on。いきなり本番にしない</div>

<!--
- 手順は3つ。studio.workspace.google.com を開く→「言葉でたのむ」で作る→必ずTest runで試してからTurn onで有効化。
- Test runは実際の操作を伴うので、最初はテスト用のメール/フォルダで確認するのが安全。
- まず1つを一緒に作って見せ、あとは各自で自分の1つを作って記録（スライド＋シート）。この後の4つは「見本」。
-->

---

<!-- _class: fig -->

<div class="page-title">設定の基本</div>

## まずは「開く → 言葉でたのむ → 試す」

<div class="fig-area">
<div class="video-ph full">
<div class="vp-play"></div>
<div class="vp-label">設定の基本操作（録画予定）</div>
<div class="vp-file">./src/fig01-setup-basics.mov</div>
</div>
</div>

<div class="caption">studio.workspace.google.com を開き、Flow を1つ作って Test run するまでを実演</div>

<div class="takeaway">最初の1本で操作感をつかむ。あとは同じ手順のくり返し</div>

<!--
- ハンズオン導入。実際の画面録画で「Studioを開く→言葉でたのむ→Test run→Turn on」の基本操作を見せる。
- 後日、画面収録に差し替え（横幅だけ指定で挿入）。差し替え用タグ：
  <video controls src="./src/fig01-setup-basics.mov" poster="./src/fig01-setup-basics.png" width="700"></video>
-->

---

<!-- _class: split -->

<div class="page-title">例（学生）</div>

## 学生向けの2つの自動化

<div class="split-body">
<div class="left">

### ① 授業の連絡メールを見落とさない

<div class="prompt">
<span class="lab">言葉でたのむ：</span>送付元 = ChibaUnivMoodle <noreply@moodle.gs.chiba-u.jp>から授業の連絡に関するメールが来たら、"要確認" のラベルを付けたあと、Chatで私に知らせて。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり ｜ Google Chat（通知）</div>
<div class="dc-body">授業〇〇から<strong>連絡メール</strong>。→ ラベル<strong>「要確認」</strong>を付けました。</div>
</div>

<div class="flow-link">▶ <a href="https://studio.workspace.google.com/workflow/z5906a88286dd3deb6ea42241f07c7437?fromSource=6">この Flow を使う（コピー）</a></div>

</div>
<div class="right">

### ② 論文PDFを書誌台帳に自動記入

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「ドライブの論文フォルダにPDFを入れたら、今日の日付・タイトル・abstractの翻訳・著者・雑誌名・出版社をSpreadsheetの各列に記入して。新しいPDFをアップしたら新しい行を足して。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり ｜ Spreadsheet（論文台帳）</div>
<div class="dc-body">日付｜タイトル｜要旨（和訳）｜著者｜誌名｜出版社<br>PDFを入れるたびに <strong>1行ずつ自動追記</strong>。</div>
</div>

<div class="flow-link">▶ <a href="https://studio.workspace.google.com/workflow/cafa0a9795771f2a844bdf69b5c5f99f5">この Flow を使う（コピー）</a></div>

</div>
</div>

<div class="takeaway">設定済みの Flow を配布。リンクから自分の環境にコピーして、すぐ試せる</div>

<!--
- 学生向けの2例をまとめて提示。例①メール見落とし防止（受信→「自分宛の質問か」を判断→ラベル＋Chat通知）。例②締切まとめ（毎朝7時→カレンダー/メールから今日締切を収集→Chatに短いリスト）。
- 設定動画は載せず、作成済みFlowの配布リンクから各自コピーして使う運用に。リンクは後日差し替え。
-->

---

<!-- _class: split -->

<div class="page-title">例（教職員）</div>

## 教職員向けの2つの自動化

<div class="split-body">
<div class="left">

### ① 返信が必要なメールに下書きを用意

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「届いたメールが返信を要するか（質問・依頼・要確認か）を判定。必要なら日本語で返信の下書きを作成。ニュース配信や一般的なDMは対象外。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり ｜ Gmail（下書き）</div>
<div class="dc-body">差出人の<strong>質問・依頼</strong>を判定 → <strong>日本語の返信下書き</strong>を保存。<br><span class="dc-note">※ 配信メール・一般DMはスルー。送信は人が確認。</span></div>
</div>

<div class="flow-link">▶ <a href="https://studio.workspace.google.com/workflow/z28547b5c023d63aa7558a24c7e6d75ff">この Flow を使う（コピー）</a></div>

</div>
<div class="right">

### ② メンションされた依頼を自動でタスク化

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「Chatで私がメンションされたら内容を読み、"自分への依頼・指示"かを判定（報告・挨拶・相槌は除く）。依頼ならその核心を20字以内のタスク名にまとめ、元メッセージのリンク付き(中身も分かる)でタスクを作成して。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり ｜ タスク（自動作成）</div>
<div class="dc-body">✓ タスク<strong>「会議資料を金曜までに作成」</strong>を作成しました。<br><span class="dc-note">元メッセージへのリンク付き。報告・相槌はスルー。</span></div>
</div>

<div class="flow-link">▶ <a href="https://studio.workspace.google.com/workflow/n15c0973293e17a6e3fd7a05a9eb4bba6">この Flow を使う（コピー）</a></div>

</div>
</div>

<div class="takeaway">送信・投稿の前に人が確認（Human in the loop）。配布リンクからコピー可</div>

<!--
- 教職員向けの2例。例①問い合わせ分類＆下書き（受信→履修/施設/その他に分類→定型は返信下書き、送信は人）。例②議事録ToDo抽出（フォルダに議事録追加→決定事項とToDoを担当・期限つきで抽出→委員会Chatに表で投稿）。
- 設定動画は載せず、作成済みFlowの配布リンクで各自コピー。リンクは後日差し替え。AIは下書き・提案まで、最終判断は人。
-->

---

<!-- _class: summary -->

<div class="page-title">記入例（見本）</div>

## このような形で、作成したシナリオを記載

<div class="exg">
<div class="col">

<div class="exbox ex-trouble">
<div class="exh">困りごと</div>
情報リテラシで「マナーに合ったメールを書く宿題」を出したが、フィードバックが大変。自動化したい。
</div>

<div class="exbox ex-flow">
<div class="exh">フロー</div>
<div class="exsteps">
<div class="es"><span class="wc-app forms"></span>ステップ1：フォームの回答が届いたとき</div>
<div class="es"><span class="wc-app gemini"></span>ステップ2：Gemini に相談（採点基準で評価）</div>
<div class="es"><span class="wc-app gmail"></span>ステップ3：メールの下書きを作成</div>
<div class="es"><span class="wc-app chat"></span>ステップ4：Chat で通知</div>
<div class="es"><span class="wc-app sheets"></span>ステップ5：行を追加（記録）</div>
</div>
<div class="excap">フォームに回答がきたら、フィードバックをメールで返す</div>
</div>

</div>
<div class="col">

<div class="exbox ex-tweak">
<div class="exh">工夫した点</div>
・Gemini に相談のところに<strong>採点基準をがっつり</strong>入れた<br>・採点基準は Gemini app で作成
<div class="exprompt"># 情報リテラシ課題フィードバック作成<br>あなたは講義の優れた支援者。評価基準（件名／宛名／挨拶と名乗り…）に従い、提出物へ丁寧なフィードバックを作成。</div>
</div>

<div class="exbox ex-test">
<div class="exh">テストランの出力例 / 感想</div>
思ったより丁寧な回答。もっと<strong>端的な指示</strong>に書き換えたい。
<div class="exout">言い回し：「お詫びさせてください」→「申し訳ございません」。署名：自宅住所は不要、所属・氏名・学籍番号で十分。</div>
</div>

</div>
</div>

<!--
- 各自のワークの「記入例（見本）」。情報リテラシ講義のメール課題フィードバックを自動化した実例。
- 4ブロックで記載：困りごと／フロー（5ステップ）／工夫した点（プロンプト）／テストランの出力例・感想。
- 工夫＝Gemini相談に採点基準をがっつり入れる。基準づくりは Gemini app を使った。テスト結果を見て「もっと端的に」と改善余地を書く＝コツ③の反復。
- 参加者はこの形で、自分のシナリオをスライド1枚に書く。ひな型リンクは各自のワークのページから。
-->

---

<!-- _class: split -->

<div class="page-title">各自のワーク</div>

## 自分のフローを1つ作って記録する

<div class="split-body">
<div class="left">

### 進め方

<div class="callout-blue">
<strong>① まず一緒に1つ</strong><br>講師と同じ手順で Flow を作る
</div>
<div class="callout-orange">
<strong>② 各自で1つ</strong><br>自分の「めんどう」を自動化してみる
</div>
<div class="callout-green">
<strong>③ 共有もできる</strong><br>共有ボタンの「<strong>コピー用リンク</strong>」で他の人に渡せる
</div>

</div>
<div class="right">

### 記録は2つ書く

<div class="deliv">
<div class="dv-h">① スプレッドシート（1行）</div>
<div class="dv-b">番号／タイトル／設定スクショのリンク／Flow共有リンク／便利さ自己評価</div>
<div class="dv-l">→ <a href="https://docs.google.com/spreadsheets/d/1sZv2id2urfwDByIgpF9D6C4Xtg-NLFHL6_NVctx2Y2U/edit?usp=sharing">ワークシートを開く</a></div>
</div>

<div class="deliv">
<div class="dv-h">② スライド（1枚）</div>
<div class="dv-b">困りごと／フロー／工夫した点（プロンプト）／テストランの感想</div>
<div class="dv-l">→ <a href="https://docs.google.com/presentation/d/10n0wh3xURtgsfwvG8-aa52QRK-gUeXpUtDaGLjbAXZs/edit?usp=sharing">スライドのひな型を開く</a></div>
</div>

</div>
</div>

<div class="takeaway">自分のフローを1つ作り、スライド1枚＋シート1行に記録しよう</div>

<!--
- ワークの形を変更：4つ全部を一緒に作るのではなく、まず1つを一緒に作り、あとは各自で自分の1つを作って記録する。
- 記録は2つ。①スプレッドシートに1行（番号・タイトル・設定スクショのリンク・可能ならFlow共有リンク・便利さ自己評価）。②スライド1枚（困りごと／フロー／工夫した点＝プロンプト／テストランの感想）。ひな型あり。
- 共有：Studioの共有ボタンから「コピー用リンク」を取得すると、作ったFlowを他の人がコピーして使える。良い自動化を横展開できる。
- リンク2つ（ワークシート／スライドのひな型）はこのスライドからクリックで開ける。
-->

---

<!-- _class: summary -->

<div class="page-title">講師が考えたユースケース集</div>

## 立場別ユースケース（例）

<div class="uc-grid">

<div class="uc-col col-ug">
<div class="uc-h">🎓 学部生</div>

- 課題・締切を抽出して**Tasks登録＋リマインド**（教員/LMSメールがきっかけ）
- 就活・サークルの**長文メールを3点に要約**→Chatへ
- 目上への**メール下書きを自動生成**
- 全学掲示板で留学関連のお知らせが来たら、chatへ

</div>

<div class="uc-col col-grad">
<div class="uc-h">🔬 大学院生</div>

- 論文PDFを**目的・手法・結果に要約**→管理表に追記
- 音声メモを**実験記録・アイデアに清書**→ノートへ
- ラボのセミナーのmeetのログから、勉強ログを作成

</div>

<div class="uc-col col-staff">
<div class="uc-h">🏢 教職員</div>

- 問い合わせに**回答ドラフト自動生成**＋対応表に記録
- 会議記録から**ToDo（担当・期限）を抽出**→Chat通知
- 授業評価の自由記述を**分類＋感情分析**→サマリー出力
- 打合せの候補の日程がきたら、"Meeting仮"としてCalendarに枠を反映

</div>

</div>

<div class="takeaway">便利な使い方は続けてシートに共有 — みんなで仕事を楽に、大学生活の不便を解消しよう</div>

<!--
- ハンズオンの4例に加え、立場別の発展例を一覧に。学部生＝情報の見落とし防止・初めてのビジネスメール、院生＝研究/TA業務の情報整理、教職員＝定型事務の自動化が効果を実感しやすい。
- 学部生：①教員/LMSメールから提出物・締切・形式を抽出→Tasks登録＋自分宛Chatリマインド。②就活・企業・サークルの長文を「結論／Next Step／期限」の3点に要約→Chat「就活メモ」へ転送。③要件をForm/Sheetに短く入力→敬語・構成を整えたメール本文を生成→Gmail下書き保存（確認して送信）。
- 大学院生：①Driveの特定フォルダに論文PDF追加→目的・提案手法・主な結果を日本語要約→「論文管理表」にタイトル・著者・要約を追記。②音声入力した雑多なメモを自分宛て送信→構造化した実験記録/アイデアに成形→「研究ノート」に日付付き追記。③担当授業の定型質問メール→シラバス/過去FAQを参照し回答案作成→Gmail下書き（TAが確認して送信）。
- 教職員：①問い合わせフォーム送信→学籍番号・カテゴリ・内容を読みFAQ検索で個別回答生成→Gmail下書き＋対応管理表に「未対応」レコード追加。②Meetの録画・文字起こし生成→決定事項とアクションアイテム（誰が・いつまでに・何を）を抽出→関係者Chatに通知＋タスク登録。③授業評価アンケートの回答期間終了→自由記述を要望/肯定/質問に分類＋ポジ/ネガ判定→分類結果とサマリーを新シートに出力。
- これらは“宿題”。毎週やっている定型作業を1つ選んで、帰ってから作ってみてほしい。すべて「きっかけ→AI処理→出力」に当てはまる。
- ハンズオン（30分）は心理的ハードルを下げるため、シンプルな「Gmail受信→AI要約→Chat通知/下書き」（学部生①や教職員①）を一緒に作るのがおすすめ。
-->

---

<!-- _class: summary -->

<div class="page-title">仕上げの作法</div>

## 作ったあと、知っておくと得

<div class="sections">

<div class="sec-box">

### 試す・直す

- 具体例でテスト可能！**Test run** で必ず動作確認してから有効化
- うまくいかなければ**プロンプトを少し直す**

</div>

<div class="sec-box">

### 共有する

- 各Flow は **Googleドキュメントのようにリンクで共有**できる
- 研究室・部署で**良い自動化を横展開**

</div>

<div class="sec-box">

### つなげる

- Salesforce / Jira / Asana など**外部サービス**とも連携
- 込み入った処理は **Apps Script** も呼べる

</div>

</div>

<div class="takeaway">良い Flow は1人で抱えず、チームで共有して使う</div>

<!--
- 作った後の3つの作法。①Test runで確認してから有効化、ダメならプロンプト修正。②作ったFlowはGoogle Docのように共有でき、研究室や部署で横展開できる。③外部サービス連携やApps Scriptで高度化も可能。
- 共有が効くと、誰か1人が作った良い自動化が組織全体に広がる。ここがチームでの価値。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 3 ・ 15-min ・ 議論・座談会</div>

# 気づきをみんなで共有する

## 学びを変える！研究を深める！生成AI活用術

<!--
- 最後の15分。今日のまとめと、自分の業務への落とし込み、質疑。
-->

---

<!-- _class: summary -->

<div class="page-title">議論・座談会</div>

## slido で、気づきを共有して下さい

<div class="sections">

<div class="sec-box">

### ① 便利そうと思った点

- 今日つくって／見て、いちばん「便利そう」と思った点は、どこでしたか。

</div>

<div class="sec-box">

### ② 気付いた注意点・コツ

- 注意点や設定のコツなど、気付かれた点があれば、お知らせください。

</div>

<div class="sec-box">

### ③ 使えそうなアイデア

- 自分の学び・仕事で、使えそうな作業のアイデアを考えて、提案してみよう。

</div>

</div>

<div class="use-note">【お願い】slido・ワークへの入力は、<strong>個人情報・機微情報を除き</strong>、アカデミック・リンク・センター／附属図書館の業務改善・調査研究・外部発表等に利用します。特定される情報・知られたくない情報は入力しないでください。</div>

<div class="takeaway">敬意をもって、忌憚なく、建設的に — 協力的な場づくりが学びの秘訣です</div>

<!--
- Session 3 の中心。slidoで全員から集める。今回は3テーマ。
- 「便利そうと思った点」「気付いた注意点・設定のコツ」「使えそうな作業のアイデア（提案）」。
- 場づくりの一言（敬意・忌憚なく・建設的に）も第1回を踏襲。
-->
---

<!-- _class: summary -->

<div class="page-title">コツと注意</div>

## ② 注意点・つまずきポイントと対処

<div class="sections">

<div class="sec-box">

### うまくいくコツ

- **小さく始める**（1スターター＋数ステップ）
- プロンプトは**具体的に**（対象・条件・出力先）
- まず**テスト用データ**で Test run

</div>

<div class="sec-box">

### 注意すること

- 送信・公開は**人が最終確認**（自動送信は基本できない）
- 個人情報は**権限と用途**を意識
- 表示されない時は**管理者設定**を確認

</div>

</div>

<div class="takeaway">「下書きまではAI、送信は人」を基本ルールに</div>

<!--
- よくあるつまずきと対処。コツ＝小さく始める・具体的に書く・テストデータで試す。
- 注意＝送信や公開は人が確認（自動送信は事故のもと）、個人情報は権限と用途に注意、組織で表示されないのは管理者設定の問題。
- 黄金ルール「下書きまではAI、最終判断は人」。
-->

---

<!-- _class: summary -->

<div class="page-title">振り返りワーク</div>

## 使えそうなアイデア→自分の「めんどう」を1つ選ぶことから

<div class="sections">

<div class="sec-box">

### ① きっかけは？

- いつ・何が起きたら始めたい？
- 例：毎朝／メール受信／ファイル追加

</div>

<div class="sec-box">

### ② AIに何をさせる？

- 読む・要約・分類・下書き…
- 例：「要返信か判断して」

</div>

<div class="sec-box">

### ③ どうまとめる？

- Chat通知／ラベル／Sheets記録
- 例：「Chatで私に教えて」

</div>

</div>

<div class="takeaway">違和感を感じたら、この3つで実装</div>

<!--
- 振り返りワーク。隣の人と、または各自で、自分の定型作業を1つ選んで、3つの欄を埋めてみる。
- 3欄が埋まれば、それをつなげるだけで「言葉でたのむ」プロンプトになる。これを持ち帰ってもらう。
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- Workspace Studio＝<strong>コードなし</strong>でAI自動化（Flow）を作る道具
- Flow＝<strong>スターター（きっかけ）＋ステップ（処理）</strong>だけ
- 作り方は3通り、迷ったら<strong>「言葉でたのむ」</strong>
- 大学アカウントの<strong>権限の範囲内</strong>・学習に不使用で安全に
- まず<strong>1つ作って Test run</strong>。良い Flow はチームで共有

<!--
- 5点で締める。今日の要点を一気に振り返る。
- 一番のメッセージは「まず1つ作って動かす」。完璧主義にならない。
-->

---

<!-- _class: split -->

<div class="page-title">アンケート・次回</div>

## 終了時アンケートのお願い

<div class="split-body">
<div class="left">

### 特別回のご案内

<div class="callout-green">
<strong>生成 AI を味方につける 大学での学び方・働き方</strong>

- <strong>超初心者歓迎</strong>：Gemini・NotebookLM の使い方から、学び・業務での活用まで
- 講師：<strong>東山 昂平 氏</strong>（Google for Education 認定トレーナー）
- 事前申込不要・実習付き

</div>

</div>
<div class="right">

### 次回予告

<div class="callout-orange">
<strong>第5回（7/2）</strong> AIの仕組みと Google Colab<br>
<strong>「いちもじGPT」</strong>— ChatGPTと同じ Transformer を一から作る実習<br>
<a href="https://colab.research.google.com/drive/1Uj9Bvs6l_3FAL2QWAyoqPUwSlrFhLQLr">Colab ノートブックを開く</a>
</div>

### 終了時アンケート

<div class="callout-blue">
よりよい企画のため、ご協力ください<br>
<strong><a href="https://forms.gle/5sXy6f5yZkoJ8XJZ7">forms.gle/5sXy6f5yZkoJ8XJZ7</a></strong>
</div>

- 録画・スライドは後日公開

</div>
</div>

<div class="takeaway">※ 入力情報は個人情報等を除き、ALC／図書館の業務改善・調査研究に利用します</div>

<!--
- 次回は7/2、AIの仕組みとGoogle Colab。今日の「使う」から、一歩中身に踏み込む回。
- このシリーズは1回ごとに完結。気になる回だけの参加でOK。
- 学内の相談窓口はALC。録画とスライドは後日公開。
-->

---

<!-- _class: summary -->

<div class="page-title">（参考）できること①</div>

## 実テンプレートの例（受信・会議）

<div class="scn">
<div class="scn-col">

### 受信トレイの管理

- 未読メールを毎朝まとめて要約
- 重要な人からのメールを Chat で通知
- 要対応メールにラベル／スターを付与
- 添付ファイルを Drive に自動保存
- 緊急メールはすぐ Chat で通知
- キーワードを含むメールを通知

</div>
<div class="scn-col">

### 会議の質を向上

- 会議後に要約＋ToDoを自分へ送信
- 文字起こしからタスクを自動作成
- 参加者へ要約とアクションを共有
- クライアントへのフォロー下書きを作成
- 会議前の説明を Chat で受け取る
- 会議のリマインダーを Chat で

</div>
</div>

<div class="takeaway">Workspace Studio の実テンプレートから（網羅リスト）</div>

<!--
- ピンとこない人向けに「実際こんなにテンプレがある」を見せて自分ごと化させる。すべて Workspace Studio の実テンプレ（受信トレイの管理／会議の質を向上）。
- ここは速く流してよい。「自分の受信トレイ・会議でこれが効きそう、はどれ？」と問いかける。
-->

---

<!-- _class: summary -->

<div class="page-title">（参考）できること②</div>

## 実テンプレートの例（タスク・毎日）

<div class="scn">
<div class="scn-col">

### タスク・アクション

- メールのアクション項目をタスク化
- 学生・顧客のリクエストをタスク化
- フォルダにファイルが増えたら通知
- スペースでメンションされたら通知
- フォルダ追加でタスクを自動作成
- アクション項目メールを通知

</div>
<div class="scn-col">

### 毎日の情報収集

- ニュースの見出しを毎日要約
- AIトレンドの概要を毎朝受け取る
- 論文PDFを入れたら要約を Docs に
- Form の回答を緊急度で分類して集計

</div>
</div>

<div class="takeaway">Workspace Studio の実テンプレートから（網羅リスト）</div>

<!--
- 続き（タスクとアクション アイテム／毎日使用）の実テンプレ。ここで「自分の場合はどう便利か」を各自考えてもらう。
- この後 Session 2 で実際に作る。ここで思い浮かべた1つが、そのまま題材になる。Session 3 の振り返りワークにもつながる。
0-->

---

<!-- _class: refs -->

<div class="page-title">参考リンク</div>

## 参考リンク

- Google Workspace Studio（公式）. https://workspace.google.com/studio/
- 使ってみる（ログイン）. https://studio.workspace.google.com/
- はじめ方／スターターとステップ（ヘルプ）. https://support.google.com/workspace-studio/answer/16765661
- Workspace Studio 発表（Google Workspace Blog, 2025年12月）. https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work
- 教育向けの発表（Google for Education, BETT 2026）. https://blog.google/products-and-platforms/products/education/bett26-premium-ai/
- 大学導入の事例：Case Western Reserve University. https://case.edu/utech/about/utech-news/google-launches-workspace-studio
- 大学の活用ガイド：UW–Madison KB. https://kb.wisc.edu/noncredit/160150
- 本シリーズ案内（千葉大ALC）. https://alc.chiba-u.jp/eyr/2026/04/03/2026ai.html

<!--
- 出典。公式サイト・利用URL・はじめ方ヘルプ・発表ブログ・海外大学の導入事例・本シリーズ案内。
- スライド配布時にここから辿れるようにしてある。
-->
