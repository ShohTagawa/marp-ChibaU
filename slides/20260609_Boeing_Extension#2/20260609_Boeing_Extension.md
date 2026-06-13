---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">Boeing Externship</div><img class="hdr-logo" src="./src/chiba-logo.png" alt="CHIBA UNIVERSITY">'
footer: ''
html: true
style: |
  /* Boeing ブルーを基調に */
  :root {
    --accent: #0033A0;
    --accent-dark: #002266;
    --accent-soft: #E6ECF6;
    --hdr-left-w: 28%;          /* 左タブを長めに（タイトル切れ対策） */
  }
  /* 中央帯：濃赤→薄い水色。文字は Boeing ブルー。左タブとスラントで噛み合わせる */
  section .page-title {
    left: 23%; width: 38%;
    background: #CFE2F3;
    color: #0033A0;
  }
  /* ヘッダー下の青ライン：header を page-title より前面(z-index 13)に上げ、
     header::after を全幅で引く。これで帯・ロゴの前面を同じ高さ・同じ太さで貫く。
     （pseudo より確実に描画される標準的な方式） */
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  h2 { color: #0033A0; }
  .split .right h3 { color: #0033A0; margin-bottom: 2px; }
  .split .right ul { margin-top: 2px; margin-bottom: 12px; }
  .split .right li { font-size: 21px; line-height: 1.5; }
  .caption { font-size: 18px; color: #666; text-align: center; margin-top: 2px; }

  /* 全11回スケジュール（compact） */
  section.planlist .pl-wrap { display: grid; grid-template-columns: 1fr 250px; gap: 22px; align-items: start; margin-top: 6px; }
  section.planlist .pl-aside { align-self: center; background: #FFF6E6; border: 2px solid #F0A500; border-radius: 10px; padding: 12px 15px; }
  section.planlist .pl-aside .at { font-size: 19px; font-weight: 700; color: #C0182B; margin-bottom: 8px; }
  section.planlist .pl-aside ol { margin: 0; padding-left: 1.25em; font-size: 18px; line-height: 1.45; color: #222; }
  section.planlist .pl-aside li { margin: 8px 0; }
  section.planlist .pl-aside b { color: #C0182B; }
  section.planlist .pl-list { margin-top: 0; }
  section.planlist .pl-row { display: grid; grid-template-columns: 110px 64px 1fr; gap: 14px; align-items: center; padding: 3px 0; border-bottom: 1px solid #e3e8f0; }
  section.planlist .pl-when { font-size: 20px; font-weight: 700; color: #0033A0; text-align: center; line-height: 1.2; }
  section.planlist .pl-tag { font-size: 15px; font-weight: 700; text-align: center; border-radius: 11px; padding: 2px 0; }
  section.planlist .pl-req { background: #0033A0; color: #fff; }
  section.planlist .pl-opt { background: #E6ECF6; color: #0033A0; border: 1px solid #b9c8e6; }
  section.planlist .pl-what { font-size: 23px; line-height: 1.3; }
  section.planlist .pl-no { color: #0033A0; font-weight: 700; margin-right: 6px; }
  /* 9/7 本番（発表）行：他行と同じ配置のまま赤で強調 */
  section.planlist .pl-row.final .pl-when { color: #C0182B; }
  section.planlist .pl-row.final .pl-what { color: #C0182B; font-weight: 700; }
  section.planlist .pl-fin { background: #C0182B; color: #fff; }

  /* デザイン思考（定義＋5ステップ図） */
  section.dt { padding-top: calc(var(--header-h) + 14px); }
  section.dt .dt-def { font-size: 23px; line-height: 1.5; background: #F7F9FC; border-left: 6px solid #0033A0; border-radius: 0 8px 8px 0; padding: 10px 18px; margin: 4px 0 6px; }
  section.dt .dt-def b { color: #0033A0; }
  section.dt .dt-svg { width: 100%; }
  section.dt .dt-svg svg { width: 100%; height: auto; display: block; }
  section.dt .dt-do { margin-top: 4px; background: #EAF1FF; border: 1.5px solid #b9c8e6; border-radius: 10px; padding: 8px 20px; }
  section.dt .dt-do .dh { font-size: 23px; font-weight: 700; color: #0033A0; margin-bottom: 6px; }
  section.dt .dt-do ul { columns: 2; column-gap: 36px; margin: 0; padding-left: 1.2em; font-size: 23px; line-height: 1.55; }
  section.dt .dt-do li { margin: 2px 0; }
  section.dt .dt-do b { color: #C0182B; }
  section.dt .dt-do .dt-note { margin-top: 10px; padding-top: 8px; border-top: 1px dashed #b9c8e6; text-align: center; font-size: 21px; font-weight: 700; color: #0033A0; }
  section.dt .dt-do .dt-note b { color: #C0182B; }

  /* summary を大きめにする修飾（.big） */
  section.summary.big .sec-box h3 { font-size: 27px; }
  section.summary.big .sec-box li { font-size: 25px; line-height: 1.7; }

  /* フェーズマップ（全体像） */
  section.phasemap .pm-grid { display: grid; grid-template-columns: 110px 1fr; row-gap: 8px; column-gap: 14px; margin-top: 8px; }
  section.phasemap .pm-when { font-size: 18px; font-weight: 700; color: #0033A0; background: #E6ECF6; border-radius: 6px; padding: 8px 10px; display: flex; align-items: center; justify-content: center; text-align: center; }
  section.phasemap .pm-what { font-size: 19px; line-height: 1.45; border-left: 4px solid #0033A0; padding: 6px 14px; background: #F7F9FC; border-radius: 0 6px 6px 0; }
  section.phasemap .pm-what b { color: #0033A0; }

  /* 本日のゴール：左に3ボックス＋右に挿絵。余白を詰めてtakeawayと被らせない */
  section.summary.goal .goal-grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 26px; align-items: start; margin-top: 6px; }
  section.summary.goal h2 { margin: 0 0 6px; }
  section.summary.goal .sections { gap: 8px; }
  section.summary.goal .sec-box { padding: 7px 16px; }
  section.summary.goal .sec-box h3 { font-size: 23px; margin: 0 0 4px; }
  section.summary.goal .sec-box ul { margin: 0 0 0 1.1em; }
  section.summary.goal .sec-box li { font-size: 23px; line-height: 1.35; margin: 2px 0; }
  section.summary.goal .goal-art { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding-top: 2px; }
  section.summary.goal .goal-art figure { margin: 0; text-align: center; }
  section.summary.goal .goal-art svg { width: 112px; height: auto; }
  section.summary.goal .goal-art figcaption { font-size: 14px; color: #0033A0; font-weight: 700; margin-top: 0; }

  /* 教員紹介（1人1枚） */
  section.prof .prof-grid { display: grid; grid-template-columns: 210px 1fr; gap: 44px; align-items: start; margin-top: 18px; padding: 0 24px; }
  section.prof .prof-photo { width: 210px; height: 210px; border-radius: 50%; overflow: hidden; background: #E6ECF6; border: 3px solid #cfd6e4; display: flex; align-items: center; justify-content: center; color: #7a8aa0; font-size: 18px; }
  section.prof .prof-photo img { width: 100%; height: 100%; object-fit: cover; }
  section.prof .prof-name { font-size: 48px; font-weight: 800; color: #0033A0; line-height: 1.15; }
  section.prof .prof-role { font-size: 23px; color: #555; margin: 10px 0 4px; border-left: 5px solid #0033A0; padding-left: 12px; }
  section.prof .prof-field { font-size: 22px; color: #222; margin: 0 0 10px; padding-left: 12px; }
  section.prof .prof-field b { color: #0033A0; }
  section.prof .prof-bio { margin: 0 0 12px; padding-left: 12px; }
  section.prof .prof-bio .bl { font-size: 16px; font-weight: 700; color: #0033A0; margin-bottom: 3px; }
  section.prof .prof-bio ul { margin: 0 0 0 1.1em; font-size: 17px; color: #333; line-height: 1.4; }
  section.prof .prof-bio li { margin: 1px 0; }
  section.prof .prof-desc { font-size: 22px; line-height: 1.55; color: #222; background: #F7F9FC; border-radius: 8px; padding: 9px 14px; }

  /* 事務局・教員カード */
  section.cards .card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 22px; margin-top: 8px; }
  section.cards .card { border: 1.5px solid #cfd6e4; border-left: 6px solid #0033A0; border-radius: 8px; padding: 10px 16px; background: #F7F9FC; }
  section.cards .card .cn { font-size: 21px; font-weight: 700; color: #0033A0; margin-bottom: 2px; }
  section.cards .card .cr { font-size: 17px; color: #555; margin-bottom: 4px; }
  section.cards .card .cd { font-size: 18px; line-height: 1.45; color: #222; }

  /* タイムテーブル */
  section.timetable table { width: 100%; border-collapse: collapse; font-size: 21px; margin-top: 6px; }
  section.timetable th { background: #0033A0; color: #fff; padding: 8px 12px; text-align: left; }
  section.timetable td { padding: 8px 12px; border-bottom: 1px solid #ddd; }
  section.timetable td:first-child { width: 130px; color: #0033A0; font-weight: 700; }

  /* フォーム手順 */
  section.howto .steps, section.work .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 10px; }
  section.work .steps { margin-top: 20px; }
  section.howto .step, section.work .step { border: 1.5px solid #cfd6e4; border-radius: 8px; padding: 12px 14px; background: #F7F9FC; position: relative; }
  section.howto .step .num, section.work .step .num { position: absolute; top: -12px; left: 12px; background: #0033A0; color: #fff; font-weight: 700; font-size: 16px; padding: 2px 10px; border-radius: 10px; }
  section.howto .step .st, section.work .step .st { font-size: 23px; font-weight: 700; color: #0033A0; margin: 4px 0 4px; }
  section.howto .step .sd, section.work .step .sd { font-size: 20px; line-height: 1.5; color: #222; }
  /* 4パネル（2×2）+ Tipsパネル */
  section.howto .steps.s4 { grid-template-columns: repeat(2, 1fr); gap: 16px 22px; margin-top: 18px; }
  section.howto .steps.s4 .step { padding: 14px 18px; }
  section.howto .steps.s4 .st { font-size: 24px; }
  section.howto .steps.s4 .sd { font-size: 21px; }
  section.howto .step.tip { border-color: #F0A500; border-left: 6px solid #F0A500; background: #FFF7E6; }
  section.howto .step.tip .num { background: #F0A500; }
  section.howto .step.tip .st { color: #B8780A; }

  /* slido 確認 */
  section.slido .slido-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 18px; margin-top: 10px; align-items: start; }
  section.slido .slido-left { border-left: 6px solid #0033A0; padding: 6px 16px; background: #F7F9FC; border-radius: 0 8px 8px 0; }
  section.slido .slido-left h3 { color: #0033A0; margin: 0 0 4px; }
  section.slido .placeholder { border: 2px dashed #0033A0; border-radius: 10px; padding: 28px 14px; text-align: center; color: #0033A0; font-weight: 700; font-size: 19px; background: #fff; }

  /* グループ分けWS */
  section.ws .ws-flow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px; }
  section.ws .wstep { border-top: 4px solid #0033A0; padding: 10px 12px; background: #F7F9FC; border-radius: 0 0 8px 8px; }
  section.ws .wstep .wt { font-size: 17px; color: #0033A0; font-weight: 700; }
  section.ws .wstep .wm { font-size: 16px; line-height: 1.4; color: #222; margin-top: 4px; }
  section.ws .wstep .min { display: inline-block; background: #0033A0; color: #fff; font-size: 14px; padding: 1px 8px; border-radius: 10px; margin-bottom: 4px; }

  /* 動画ヒーロー：高さ基準で収める（見切れ防止） */
  .video-hero { flex: 1; min-height: 0; width: 100%; margin-top: 4px; margin-bottom: 34px; display: flex; align-items: center; justify-content: center; }
  .video-hero video {
    height: 100%; max-height: 100%; width: auto; max-width: 100%;
    aspect-ratio: 16 / 9; object-fit: contain; background: #000;
    border-radius: 8px; box-shadow: 0 4px 18px rgba(0,0,0,.25);
    transform: translateY(25px) scale(1.18); transform-origin: center;  /* 全体拡大＋25px下へ */
  }
  /* キャプションをページ最下部へ固定（動画と被らないよう流し込みから外す） */
  .video-hero + center { position: absolute; left: 0; right: 0; bottom: 14px; margin: 0; padding: 0 70px; }

  /* 写真ヒーロー：高さ基準で収める（横幅は auto、上限まで縦に合わせる） */
  .photo-hero { flex: 1; min-height: 0; width: 100%; margin-top: 6px; display: flex; align-items: center; justify-content: center; }
  .photo-hero img {
    height: 100%; max-height: 100%; width: auto; max-width: 100%;
    object-fit: contain;
    border-radius: 8px; box-shadow: 0 4px 18px rgba(0,0,0,.25);
  }

  /* 自己紹介スライド：NCAネームプレートを隅にちょこっと */
  section.summary .badge-inset { position: absolute; right: 30px; bottom: 52px; width: 176px; z-index: 6; text-align: center; }
  section.summary .badge-inset img { width: 100%; border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,.4); transform: rotate(-4deg); border: 3px solid #fff; }
  section.summary .badge-inset .bl { font-size: 12px; color: #666; margin-top: 5px; line-height: 1.3; }

  /* divider 用に Boeing カラー */
  section.divider { background: #0033A0; }

  /* ========== 表紙レイアウト（cover-hero） ========== */
  section.cover-hero {
    padding-top: calc(var(--header-h) + 60px);
    --hdr-left-w: 25%;
  }
  section.cover-hero > header::after { left: 0; right: 0; }
  section.cover-hero .title-hero { text-align: center; margin-bottom: 60px; }
  section.cover-hero .title-small { font-size: 40px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
  section.cover-hero .title-big { font-size: 72px; font-weight: 800; line-height: 1.2; letter-spacing: 0.02em; }
  section.cover-hero .title-foot { display: grid; grid-template-columns: 360px 1fr; gap: 40px; align-items: center; padding: 0 60px; }
  section.cover-hero .title-photo {
    width: 320px; height: 320px; border-radius: 50%; overflow: hidden;
    background: #ffffff; border: 3px solid #E6ECF6;
    display: flex; align-items: center; justify-content: center; color: #777; font-size: 16px;
    align-self: start; margin-top: -38px;   /* 円をスライド内で上方向へ */
  }
  /* 写真は円いっぱいに敷き詰める。上寄りに見せる */
  section.cover-hero .title-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; }
  section.cover-hero .title-meta { font-size: 26px; line-height: 1.7; text-align: center; }
  section.cover-hero .title-event { color: #0033A0; font-weight: 700; margin-bottom: 16px; }
  section.cover-hero .title-affil { margin-top: 8px; }

  /* QRカード（slido等）：小さめQR＋下にクリック可能リンク */
  .qr-card { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; }
  .qr-card img { width: 208px; height: 208px; border: 1px solid #e3e8f0; border-radius: 10px; padding: 8px; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,.08); }
  .qr-card .qr-link { font-size: 19px; font-weight: 700; color: #0033A0; text-decoration: underline; word-break: break-all; text-align: center; }
  .qr-card .qr-cap { font-size: 16px; color: #666; text-align: center; margin-top: -4px; }

  /* 連絡系統ハブ（Drive / Classroom / フォーム）：行ごとに 説明＋小さめQR */
  section.toolhub { padding-top: calc(var(--header-h) + 14px); }
  section.toolhub h2 { color: #0033A0; margin: 0 0 6px; }
  section.toolhub .hub-list { display: grid; row-gap: 12px; margin-top: 8px; }
  section.toolhub .hub-row { display: grid; grid-template-columns: 58px 1fr 94px; gap: 16px; align-items: center; border: 1.5px solid #cfd6e4; border-left: 6px solid #0033A0; border-radius: 10px; background: #F7F9FC; padding: 11px 18px; }
  section.toolhub .hub-ic { font-size: 32px; text-align: center; line-height: 1; }
  section.toolhub .hub-main .ht { font-size: 23px; font-weight: 700; color: #0033A0; margin-bottom: 3px; }
  section.toolhub .hub-main .hd { font-size: 18px; line-height: 1.45; color: #222; }
  section.toolhub .hub-main .hd b { color: #C0182B; }
  section.toolhub .hub-main a { color: #0033A0; font-weight: 700; text-decoration: underline; }
  section.toolhub .hub-main .hu { font-size: 15px; line-height: 1.3; color: #5b6577; margin-top: 4px; word-break: break-all; font-family: "SFMono-Regular", Consolas, "Courier New", monospace; }
  section.toolhub .hub-qr { width: 90px; height: 90px; border: 1px solid #e3e8f0; border-radius: 6px; background: #fff; padding: 4px; justify-self: center; }
  section.toolhub .hub-qr img { width: 100%; height: 100%; display: block; }
  section.toolhub .hub-row.form { border-left-color: #F0A500; }
  section.toolhub .hub-row.form .hub-main .ht { color: #B8780A; }
  section.toolhub .hub-row.form .hub-qr-none { width: 90px; text-align: center; font-size: 14px; color: #B8780A; font-weight: 700; line-height: 1.3; justify-self: center; }

  /* 千葉の産業としての成田空港（旅客・貨物） */
  section.narita { padding-top: calc(var(--header-h) + 12px); }
  section.narita h2 { color: #0033A0; margin: 0 0 6px; }
  section.narita .nr-grid { display: grid; grid-template-columns: 1fr 1.18fr; gap: 20px; align-items: start; margin-top: 4px; }
  section.narita .nr-grid > div { min-width: 0; }
  section.narita .nr-photo { border: 2px dashed #0033A0; border-radius: 10px; background: #F2F6FC; min-height: 196px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #0033A0; font-weight: 700; font-size: 17px; line-height: 1.4; padding: 14px; overflow: hidden; }
  section.narita .nr-photo img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
  section.narita .nr-photo.has-media { border: none; padding: 0; background: #000; height: 215px; min-height: 0; box-shadow: 0 2px 10px rgba(0,0,0,.18); }
  section.narita .nr-photo.has-media video { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; display: block; }
  section.narita .nr-cap { font-size: 14px; color: #888; font-weight: 400; margin-top: 6px; text-align: center; }
  section.narita .nr-effect { margin-top: 14px; background: #EAF1FF; border: 1.5px solid #b9c8e6; border-left: 6px solid #0033A0; border-radius: 0 10px 10px 0; padding: 11px 16px; }
  section.narita .nr-effect .et { font-size: 19px; font-weight: 800; color: #0033A0; margin-bottom: 5px; }
  section.narita .nr-effect ul { margin: 0; padding-left: 1.15em; font-size: 19px; line-height: 1.5; color: #222; }
  section.narita .nr-effect b { color: #C0182B; }
  section.narita .nr-chart { width: 100%; }
  section.narita .nr-chart svg { width: 100%; height: auto; max-height: 300px; display: block; }
  section.narita .nr-chart .ct { font-size: 20px; font-weight: 800; color: #0033A0; margin-bottom: 2px; }
  /* 貨物スライド：円グラフ＋ファクト */
  section.narita .nr-cargo { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 22px; align-items: center; margin-top: 2px; }
  section.narita .nr-cargo > div { min-width: 0; }
  section.narita .nr-pie .ct { font-size: 18px; }
  section.narita .nr-pie svg { width: 100%; height: auto; max-height: 320px; display: block; }
  section.narita .nr-facts { display: grid; row-gap: 9px; }
  section.narita .nr-fact { background: #F7F9FC; border: 1.5px solid #cfd6e4; border-left: 6px solid #0033A0; border-radius: 0 10px 10px 0; padding: 8px 16px; }
  section.narita .nr-fact .fn { font-size: 30px; font-weight: 800; color: #0033A0; line-height: 1.1; }
  section.narita .nr-fact .fn small { font-size: 17px; font-weight: 700; }
  section.narita .nr-fact .fl { font-size: 16px; color: #333; line-height: 1.4; margin-top: 2px; }
  section.narita .nr-src { font-size: 13px; color: #888; margin-top: 8px; line-height: 1.45; }
  section.narita .nr-src a { color: #888; }
  /* 貨物スライド：夕景エプロン写真をウォッシュアウト背景に */
  section.narita.cargo-bg {
    background-image:
      linear-gradient(to bottom, rgba(245,249,253,.74) 0%, rgba(245,249,253,.6) 50%, rgba(245,249,253,.28) 80%, rgba(245,249,253,.08) 100%);
    background-size: cover;
    background-position: center 60%;
  }
  section.narita.cargo-bg .nr-frame {
    background: rgba(255,255,255,.88);
    border: 1px solid rgba(255,255,255,.96);
    border-radius: 14px;
    box-shadow: 0 8px 30px rgba(0,20,60,.22);
    padding: 12px 22px 16px;
    margin-top: 2px;
  }
  section.narita.cargo-bg .nr-frame h2 { color: #0033A0; margin: 0 0 6px; }
  section.narita.cargo-bg .nr-fact { background: rgba(247,249,252,.92); }
  section.narita.cargo-bg .nr-src { color: #555; }

  /* ========== 第2回 デザインWS 用 追加クラス ========== */

  /* 90分アジェンダ（タイムライン1枚） */
  section.agenda { padding-top: calc(var(--header-h) + 12px); }
  section.agenda h2 { color: #0033A0; margin: 0 0 8px; }
  section.agenda .ag-list { display: grid; row-gap: 7px; margin-top: 6px; }
  section.agenda .ag-row { display: grid; grid-template-columns: 132px 92px 1fr; gap: 14px; align-items: center; border-bottom: 1px solid #e3e8f0; padding: 4px 0; }
  section.agenda .ag-time { font-size: 19px; font-weight: 700; color: #0033A0; text-align: center; line-height: 1.2; }
  section.agenda .ag-tag { font-size: 14px; font-weight: 700; text-align: center; border-radius: 11px; padding: 3px 0; }
  section.agenda .ag-exp { background: #0033A0; color: #fff; }
  section.agenda .ag-team { background: #F0A500; color: #fff; }
  section.agenda .ag-ice { background: #E6ECF6; color: #0033A0; border: 1px solid #b9c8e6; }
  section.agenda .ag-what { font-size: 21px; line-height: 1.3; }
  section.agenda .ag-what b { color: #0033A0; }
  section.agenda .ag-row.now { background: #FFF6E6; border-radius: 6px; }

  /* WORK タイトルスライド（番号バッジ＋お題＋メタ3枠） */
  section.work { padding-top: calc(var(--header-h) + 14px); }
  section.work h2 { color: #0033A0; margin: 0 0 4px; }
  section.work .wk-head { display: grid; grid-template-columns: 100px 1fr; gap: 22px; align-items: center; margin: 8px 0 16px; }
  section.work .wk-badge { width: 100px; height: 100px; border-radius: 18px; background: #0033A0; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.05; }
  section.work .wk-badge .wb-l { font-size: 15px; font-weight: 700; letter-spacing: .1em; }
  section.work .wk-badge .wb-n { font-size: 48px; font-weight: 800; }
  section.work .wk-title { font-size: 30px; font-weight: 800; color: #0033A0; line-height: 1.25; }
  section.work .wk-title .wk-sub { display: block; font-size: 20px; font-weight: 700; color: #555; margin-top: 6px; }
  section.work .wk-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 4px; }
  section.work .wk-cell { border: 1.5px solid #cfd6e4; border-top: 5px solid #0033A0; border-radius: 0 0 10px 10px; background: #F7F9FC; padding: 11px 15px; }
  section.work .wk-cell .wc-l { font-size: 15px; font-weight: 700; color: #0033A0; margin-bottom: 5px; }
  section.work .wk-cell .wc-v { font-size: 21px; line-height: 1.4; color: #222; }
  section.work .wk-cell .wc-v b { color: #C0182B; }
  section.work .wk-cell.time { border-top-color: #F0A500; }
  section.work .wk-cell.time .wc-l { color: #B8780A; }
  /* WORK① 視点メニュー（サービス／工学の2軸） */
  section.work .wk-lens { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 2px; }
  section.work .wk-lens .wl-col { border: 1.5px solid #cfd6e4; border-left: 6px solid #0033A0; border-radius: 0 10px 10px 0; background: #F7F9FC; padding: 9px 16px; }
  section.work .wk-lens .wl-col.eng { border-left-color: #19B36B; }
  section.work .wk-lens .wl-h { font-size: 19px; font-weight: 800; color: #0033A0; margin-bottom: 4px; }
  section.work .wk-lens .wl-col.eng .wl-h { color: #149A5B; }
  section.work .wk-lens .wl-d { font-size: 17px; line-height: 1.55; color: #222; }
  section.work .wk-lens .wl-d b { color: #C0182B; }

  /* AI Gem 2枚カード */
  section.gem { padding-top: calc(var(--header-h) + 12px); }
  section.gem h2 { color: #0033A0; margin: 0 0 8px; }
  section.gem .gem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 6px; }
  section.gem .gem-card { border: 1.5px solid #cfd6e4; border-top: 6px solid #0033A0; border-radius: 0 0 12px 12px; background: #F7F9FC; padding: 14px 18px; }
  section.gem .gem-card.persona { border-top-color: #E8467C; }
  section.gem .gem-ic { font-size: 30px; line-height: 1; }
  section.gem .gem-name { font-size: 24px; font-weight: 800; color: #0033A0; margin: 2px 0; }
  section.gem .gem-card.persona .gem-name { color: #C2356B; }
  section.gem .gem-role { font-size: 17px; color: #555; margin-bottom: 8px; }
  section.gem .gem-card ul { margin: 0; padding-left: 1.15em; font-size: 19px; line-height: 1.5; color: #222; }
  section.gem .gem-card li { margin: 3px 0; }
  section.gem .gem-card b { color: #C0182B; }
  section.gem .gem-note { margin-top: 8px; font-size: 15px; color: #5b6577; border-top: 1px dashed #b9c8e6; padding-top: 6px; }
  section.gem .gem-foot { margin-top: 8px; font-size: 17px; color: #0033A0; font-weight: 700; text-align: center; }

  /* 椅子取り：テーマ島レイアウト（左SVG＋右ルール） */
  section.islands { padding-top: calc(var(--header-h) + 12px); }
  section.islands h2 { color: #0033A0; margin: 0 0 6px; }
  section.islands .is-grid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 22px; align-items: center; margin-top: 4px; }
  section.islands .is-svg svg { width: 100%; height: auto; display: block; }
  section.islands .is-rules { display: grid; row-gap: 9px; }
  section.islands .is-rule { background: #F7F9FC; border: 1.5px solid #cfd6e4; border-left: 6px solid #0033A0; border-radius: 0 10px 10px 0; padding: 9px 15px; display: flex; align-items: flex-start; gap: 10px; }
  section.islands .is-rule .ir-n { flex: 0 0 auto; font-size: 15px; font-weight: 800; color: #fff; background: #0033A0; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; }
  section.islands .is-rule .ir-t { font-size: 20px; line-height: 1.4; color: #222; }
  section.islands .is-rule .ir-t b { color: #C0182B; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">Boeing Externship ／ 第2回</div>
<div class="title-big">デザインWS・<br>チームビルディング</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/fig01-cover.jpg" alt="表紙写真">
</div>
<div class="title-meta">
<div class="title-event">第2回 デザインワークショップ<br>2026年6月9日（火）／ 総合校舎 G1-101</div>
<div class="title-affil">本日の進行担当：千葉大学 国際未来教育基幹<br>田川 翔（プログラム進行）</div>
</div>
</div>

<!-- 第2回へようこそ。今日は座学ではなく、90分まるごと手を動かしてデザイン思考を体験し、最後に発表テーマで集まってチームを作ります。サークルのように自由に、全員で楽しくいきましょう。場所はG1-101、進行は田川が務めます。 -->

---

<!-- _class: summary goal -->
<div class="page-title">本日のゴール</div>

## 本日のゴールは、2つ

<div class="goal-grid">
<div class="sections">
<div class="sec-box">

### ① 体験する

- デザイン思考を<b>手を動かして</b>体感する
- 座学ではなく、議論で進める
- ソリューションより、<b>試して気づく</b>を大切に

</div>
<div class="sec-box">

### ② チームを作る

- 発表テーマで集まり<b>仲間を見つける</b>
- 今日その場で<b>正式チームを確定</b>する
- 学年・学科を越えて、仲間を見つける

</div>
<div class="sec-box">

### 🎈 注意点

- グラウンドルールを確認して、楽しく進めましょう

</div>
</div>
<div class="goal-art">
<figure>
<svg viewBox="0 0 120 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="付箋に書き出す">
  <rect x="14" y="34" width="50" height="50" rx="5" fill="#CFE2F3" transform="rotate(-9 39 59)"/>
  <rect x="30" y="22" width="50" height="50" rx="5" fill="#FFE680" transform="rotate(7 55 47)"/>
  <rect x="44" y="42" width="50" height="50" rx="5" fill="#F8C8DC" transform="rotate(-3 69 67)"/>
  <g stroke="#0033A0" stroke-width="3" stroke-linecap="round" opacity="0.55">
    <line x1="54" y1="59" x2="86" y2="59"/>
    <line x1="54" y1="69" x2="86" y2="69"/>
    <line x1="54" y1="79" x2="76" y2="79"/>
  </g>
</svg>
<figcaption>① 手を動かす</figcaption>
</figure>

<figure>
<svg viewBox="0 0 120 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3人のチーム">
  <circle cx="28" cy="46" r="14" fill="#5B7FC7"/>
  <path d="M6 98 q22 -30 44 0 z" fill="#5B7FC7"/>
  <circle cx="92" cy="46" r="14" fill="#19B36B"/>
  <path d="M70 98 q22 -30 44 0 z" fill="#19B36B"/>
  <circle cx="60" cy="38" r="17" fill="#0033A0"/>
  <path d="M30 100 q30 -36 60 0 z" fill="#0033A0"/>
</svg>
<figcaption>② チームを作る</figcaption>
</figure>

<figure>
<svg viewBox="0 0 120 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="楽しく動く">
  <circle cx="60" cy="52" r="34" fill="#FFE680" stroke="#F0A500" stroke-width="4"/>
  <circle cx="48" cy="46" r="4.5" fill="#0033A0"/>
  <circle cx="72" cy="46" r="4.5" fill="#0033A0"/>
  <path d="M44 62 q16 16 32 0" fill="none" stroke="#0033A0" stroke-width="4" stroke-linecap="round"/>
  <path d="M16 22 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" fill="#E8467C"/>
  <path d="M101 74 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" fill="#19B36B"/>
</svg>
<figcaption>🎈 楽しく</figcaption>
</figure>
</div>
</div>

<div class="takeaway">今日のゴール＝「暫定テーマ1つ」と「チーム」</div>

<!-- ゴールは欲張らず2つだけ。①デザイン思考を体験すること、②テーマで集まってチームを作ることです。難しく考えず、手を動かしながら仲間を見つけてください。90分後にはチームと暫定テーマを1つ持って帰る、それがゴールです。 -->

---

<!-- _class: summary -->

<div class="page-title">グラウンドルール (再掲)</div>

## 協力して挑める「場」をみんなで作る

<div class="sections">

<div class="sec-box">

### 😊 場づくりの基本

- 協力的な場づくりと<b>言い合える文化</b>を大切に
- コミュニケーションは、<b>敬意</b>を持って、<b>忌憚なく</b>、<b>建設的に</b>
- 自ら動こう（各チームでプロジェクトを管理・推進）
- <b>困ったら相談しよう</b>：「手を差し伸べる」より <b>「助けを相談する」</b>

</div>

<div class="sec-box">

### ✈ 航空の文化に学ぶ

- 学年や立場に関係なく <b>気づきを声に出す</b>
- 質問をすることも大切 (分からないことは徹底してなくす)
- 多様な視点が大切(→分野の多様性を活かそう)、価値を考える

</div>

</div>

<div class="takeaway">チーム一丸で、面白い価値を創造しよう</div>

<!-- 航空会社の安全文化（CRM・Just Culture・定時性）をチーム運営に応用。立場を超えて声を出し、失敗を学びに変え、無理せず時間を守る。 -->

---

<!-- _class: agenda -->
<div class="page-title">本日の流れ</div>

## 90分の流れ ― 手を動かして、チームを作る

<div class="ag-list">

<div class="ag-row">
<div class="ag-time">0:00–0:05</div>
<div class="ag-tag ag-ice">導入</div>
<div class="ag-what">オープニング・<b>本日の2つのゴール</b></div>
</div>

<div class="ag-row">
<div class="ag-time">0:05–0:12</div>
<div class="ag-tag ag-ice">導入</div>
<div class="ag-what">デザイン思考リキャップ＋道具・<b>2つのGem</b>紹介＋1分アイスブレイク</div>
</div>

<div class="ag-row">
<div class="ag-time">0:12–0:30</div>
<div class="ag-tag ag-exp">体験</div>
<div class="ag-what"><b>WORK①</b> 飛行機の体験リデザイン（共感）／運営が決めた班（18分）</div>
</div>

<div class="ag-row">
<div class="ag-time">0:30–0:50</div>
<div class="ag-tag ag-exp">体験</div>
<div class="ag-what"><b>WORK②</b> HMW問い作り（定義）／運営が決めた班（20分）</div>
</div>

<div class="ag-row">
<div class="ag-time">0:50–1:15</div>
<div class="ag-tag ag-exp">体験</div>
<div class="ag-what"><b>WORK③</b> テーマ集約→多様な4班づくり＋クレイジー2（発散→<b>正式チーム確定</b>）（25分）</div>
</div>

<div class="ag-row">
<div class="ag-time">1:15–1:25</div>
<div class="ag-tag ag-team">チーム</div>
<div class="ag-what">チーム名・リーダー・連絡手段・役割（10分）</div>
</div>

<div class="ag-row">
<div class="ag-time">1:25–1:30</div>
<div class="ag-tag ag-ice">まとめ</div>
<div class="ag-what">成果物・宿題・Q&amp;A（5分）</div>
</div>

</div>

<div class="takeaway">体験7：チーム3、手を動かしながら仲間を見つける</div>

<!-- 90分の全体像です。前半はWORK①②③で手を動かす体験パート、後半でチームを固めます。WORK①②は運営があらかじめ決めた班で進め、WORK③で全員でテーマを出し合い、自分が選んだテーマの島がそのまま正式チームになります。配分は体験7：チーム3。動きながら仲間を見つけていきましょう。 -->

---

<!-- _class: dt -->
<div class="page-title">デザイン思考</div>

<div class="dt-def">
<b>デザイン思考</b>とは、つくる側の都合ではなく<b>使う人の視点</b>から出発し、<br>観察・試作・検証を繰り返して課題と解を磨いていく進め方です。
</div>

<div class="dt-svg">
<svg viewBox="0 0 1180 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="デザイン思考の5ステップ">
  <g fill="none" stroke="#C2C9D6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M231 54 l13 12 -13 12"/><path d="M481 54 l13 12 -13 12"/><path d="M731 54 l13 12 -13 12"/><path d="M981 54 l13 12 -13 12"/>
  </g>
  <circle cx="110" cy="66" r="44" fill="#E8467C"/>
  <path d="M110 88 C86 70 92 48 110 60 C128 48 134 70 110 88 Z" fill="#fff"/>
  <circle cx="140" cy="40" r="12" fill="#fff"/><text x="140" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#E8467C">1</text>
  <text x="110" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#E8467C">共感</text>
  <text x="110" y="164" text-anchor="middle" font-size="14" fill="#888">Empathize</text>
  <text x="110" y="190" text-anchor="middle" font-size="16" fill="#333">当事者を観察・理解</text>
  <circle cx="360" cy="66" r="44" fill="#0033A0"/>
  <circle cx="360" cy="66" r="20" fill="none" stroke="#fff" stroke-width="3"/><circle cx="360" cy="66" r="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="360" cy="66" r="3.5" fill="#fff"/>
  <circle cx="390" cy="40" r="12" fill="#fff"/><text x="390" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#0033A0">2</text>
  <text x="360" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#0033A0">定義</text>
  <text x="360" y="164" text-anchor="middle" font-size="14" fill="#888">Define</text>
  <text x="360" y="190" text-anchor="middle" font-size="16" fill="#333">本当の課題を定める</text>
  <circle cx="610" cy="66" r="44" fill="#F0A500"/>
  <circle cx="610" cy="60" r="15" fill="none" stroke="#fff" stroke-width="3"/><path d="M610 50 v12 M603 56 h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><rect x="603" y="78" width="14" height="7" rx="2" fill="#fff"/>
  <circle cx="640" cy="40" r="12" fill="#fff"/><text x="640" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#F0A500">3</text>
  <text x="610" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#E08F00">アイデア</text>
  <text x="610" y="164" text-anchor="middle" font-size="14" fill="#888">Ideate</text>
  <text x="610" y="190" text-anchor="middle" font-size="16" fill="#333">量を出す（質より量）</text>
  <circle cx="860" cy="66" r="44" fill="#19B36B"/>
  <rect x="842" y="50" width="22" height="22" rx="3" fill="none" stroke="#fff" stroke-width="3"/><rect x="858" y="64" width="22" height="22" rx="3" fill="#fff"/>
  <circle cx="890" cy="40" r="12" fill="#fff"/><text x="890" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#19B36B">4</text>
  <text x="860" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#149A5B">試作</text>
  <text x="860" y="164" text-anchor="middle" font-size="14" fill="#888">Prototype</text>
  <text x="860" y="190" text-anchor="middle" font-size="16" fill="#333">素早く形にする</text>
  <circle cx="1110" cy="66" r="44" fill="#7A5BD0"/>
  <circle cx="1104" cy="60" r="14" fill="none" stroke="#fff" stroke-width="3"/><line x1="1114" y1="70" x2="1124" y2="80" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M1098 60 l4 4 7 -8" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="1140" cy="40" r="12" fill="#fff"/><text x="1140" y="45" text-anchor="middle" font-size="15" font-weight="700" fill="#7A5BD0">5</text>
  <text x="1110" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#6A4BC0">検証</text>
  <text x="1110" y="164" text-anchor="middle" font-size="14" fill="#888">Test</text>
  <text x="1110" y="190" text-anchor="middle" font-size="16" fill="#333">試して学び直す</text>
</svg>
</div>

<div class="dt-do">
<div class="dh">📋 今日体験するのはこの3つ</div>
<ul>
<li><b>共感</b>：体験を持ち寄り“困った”を知る（WORK①・飛行機の体験）</li>
<li><b>定義</b>：観察から<b>「良い問い」</b>を立てる（WORK②）</li>
<li><b>発散</b>：テーマ案＋クレイジー2で量を出す（WORK③）</li>
</ul>
<div class="dt-note">今日は特に<b>「共感」と「定義」</b>＝“良い問い”作りに時間をかけます。</div>
</div>

<div class="takeaway">5ステップのうち、今日は前半「共感・定義」を体験</div>

<!-- デザイン思考は使う人から出発する5ステップです。全部を一度にやるのではなく、今日は入口の共感と定義に時間をかけ、最後に発散を少しだけ味わいます。良い解より先に良い問いを立てる、ここが今日の肝です。3つのWORKがそれぞれこのステップに対応しています。 -->

---

<!-- _class: summary -->
<div class="page-title">なぜデザイン思考？</div>

## “共感”から始めると、うまくいく

<div class="sections">
<div class="sec-box">

### ✨ 共感が生んだ成功例

- <b>GE：子ども向けMRI</b>を“冒険”に → 怖がる子が激減、鎮静が減った <a href="https://toyokeizai.net/articles/-/424228">（東洋経済の記事）</a>
- <b>OriHime</b>：外出が難しい人の「その場にいたい」から生まれた分身ロボット <a href="https://orihime.orylab.com/">（オリィ研究所 公式）</a>
- <b>Airbnb</b>：創業者が利用者宅を訪問 → 写真を撮り直し予約が伸びた <a href="https://toyokeizai.net/articles/-/190626">（東洋経済の記事）</a>

</div>
<div class="sec-box">

### 💡 なぜ大切にされるのか

- 正解のない問いに、<b>利用者起点</b>で挑める
- 作る前に“外し”を減らせる（<b>手戻りが少ない</b>）
- 小さく試し、<b>失敗を早く・安く</b>学べる（<b>FAIL</b>＝First Attempt In Learning）
- 立場・分野を越えて<b>チームで協働</b>できる

</div>
</div>

<div class="caption">出典：Doug Dietz「GE Adventure Series」(TEDx)／オリィ研究所 OriHime／Airbnb 各社公開情報より（共感起点の代表例）</div>

<div class="takeaway">秘訣は“答えを見つける”より、まず“相手をよく見る”こと</div>

<!-- page4の補足。デザイン思考が「大切にされる理由」を、共感起点で成功した有名3例で腹落ちさせます。GEの子ども向けMRIは怖くて鎮静が必要だった検査を海賊船などの冒険世界に変えて子どもの不安を激減させた話、OriHimeは外出が困難な人の「その場にいたい・参加したい」という思いから生まれた分身ロボットで、入院・介護・障害などで動けない人が遠隔操作で職場や学校に参加できる話、Airbnbは創業者が利用者の家を訪ね写真を撮り直して予約を伸ばした話。いずれも「賢い解」より「相手をよく見た」ことが転機。だから今日のWSも共感から始める、と接続します。 -->

---

<!-- _class: summary -->
<div class="page-title">道具と心構え</div>

## WSの心構え

<div class="sections">
<div class="sec-box">

### 🧠 WSの心構え

- <b>発散</b>（広げる）と<b>収束</b>（絞る）を分ける
- 質より量、まず手を動かす
- 判断はあとで＝人のアイデアを否定しない
- 全員が声と手を出す（聞き役で終わらない）

</div>
<div class="sec-box">

### ✋ 進め方の約束

- 各WORK冒頭の<b>1分アイスブレイク</b>から
- タイマーが鳴ったら手を止め、時間を守る
- 完璧でなくOK、下手な絵でも伝われば勝ち

</div>
</div>

<div class="takeaway">考え込む前に、書く・貼る・動く</div>

<!-- ここでギアを「授業モード」から「手を動かすモード」へ切り替えます。道具はわざとアナログ中心。付箋とペンを配り、ドットシールとタイマーの存在を実物で見せてください。心構えは口頭で強調：「今日いちばん大事なのは、考え込まずまず書くこと」「人のアイデアを否定しない」。約束は軽く流す程度でOK。30秒〜1分で。 -->

---

<!-- _class: gem -->
<div class="page-title">2つのAI相棒（任意）</div>

## 必要であれば、2つの Gemini Gem を相棒に

<div class="gem-grid">

<div class="gem-card">
<div class="gem-ic">💬</div>
<div class="gem-name">壁打ちGem</div>
<div class="gem-role">問い・アイデアの相棒</div>
<ul>
<li>投げた考えに<b>別の視点・切り口</b>を返す</li>
<li>反例や「逆に言うと？」で発想を広げる</li>
<li>決めつけず、次の一手を質問で促す</li>
<li>使い方：問いやアイデアを一言投げるだけ</li>
</ul>
<div class="gem-note">使いどころ：WORK②③</div>
</div>

<div class="gem-card persona">
<div class="gem-ic">🎭</div>
<div class="gem-name">ペルソナGem</div>
<div class="gem-role">利用者になりきる共感の相棒</div>
<ul>
<li>指定した<b>利用者になりきり</b>一人称で答える</li>
<li>背景・感情・困りごとまで語ってくれる</li>
<li>本人がいなくても<b>インタビュー練習</b>できる</li>
<li>使い方：人物像を伝え、質問を投げる</li>
</ul>
<div class="gem-note">使いどころ：WORK①</div>
</div>

</div>

<div class="gem-foot">使いたい人だけでOK／設定プロンプトはClassroom掲示・このスライドのノート参照</div>

<!--
2つのGemは「答えをくれる先生」ではなく「壁打ち相手」だと強調してください。壁打ちGemはWORK②③で問いやアイデアを広げる時、ペルソナGemはWORK①で利用者の気持ちを掘る時に使います。設定プロンプトは下記をClassroomにも掲示済み。学生はGeminiの「Gem」に貼って使います。

■壁打ちGem設定プロンプト：
あなたは私の「壁打ち相手」です。アイデアや問いを断定・評価せず、思考を広げる手伝いをしてください。私が考えを投げたら、(1)別の視点や切り口を2〜3個、(2)あえての反例や「逆に言うと？」、(3)次に考えるとよい問いを1つ、の順で返してください。答えを決めつけず、最後は必ず私への質問で終えること。口調はフランクで前向き、各項目1〜2文で簡潔に。専門用語は避けてください。

■ペルソナGem設定プロンプト：
あなたはこれから、私が指定する利用者になりきってインタビューに答えます。設定された人物の年齢・職業・生活背景になりきり、必ず一人称（「私」）で話してください。質問には、その人の具体的な行動・感情・困りごと・本音を交えて答えること。分からない部分は人物像に沿って自然に想像で補ってOK。評価や解説はせず、あくまで本人として語ること。口調はその人物らしく、1回の返答は3〜5文で。まず「どんな人になりきればいい？」と私に確認してから始めてください。
-->

---

<!-- _class: divider -->

<div class="chapter-num">WORKSHOP</div>

# 手を動かして、体験する

## 3つのWORKで「良い問い」と「仲間」を見つける

<!-- ここから前半の山場。座学はおしまい、ここから先は手を動かす時間です。3つのWORKを通して、デザイン思考のやり方を体で覚えながら、同時に一緒に走る仲間も見つけていきます。肩の力を抜いて、サークルのノリで楽しくいきましょう。 -->

---

<!-- _class: message -->

# 失敗してOK。<br>アイデアは、何度でも変えていい。

## 学生ならではの“自由な発想”が、ときに専門家も驚く視点を生む

<div class="takeaway">FAIL ＝ First Attempt In Learning（失敗は、学びの第一歩）</div>

<!-- 手を動かす直前のペップトーク。3つだけ伝えます。①失敗してOK＝うまくいかない案こそ学び（FAIL＝First Attempt In Learning）。②今日決めるテーマもアイデアも、あとから何度でも変えていい＝仮でいい。③専門家ではない学生だからこそ、しがらみのない自由な発想が、ときに現場のプロも驚く視点になる。だから恥ずかしがらず、大胆に出してみよう、と背中を押してからWORK①へ。 -->

---

<!-- _class: work -->
<div class="page-title">WORK①</div>

<div class="wk-head">
<div class="wk-badge"><div class="wb-l">WORK</div><div class="wb-n">1</div></div>
<div class="wk-title">飛行機の体験を、リデザインしよう<span class="wk-sub">― 「共感」から始めるデザイン思考</span></div>
</div>

<div class="wk-meta">
<div class="wk-cell"><div class="wc-l">🎯 お題</div><div class="wc-v"><b>空港・機内・その他サービス</b>から場面を1つ選び、“困った・不便”から<b>理想の体験／しくみ</b>を考える</div></div>
<div class="wk-cell"><div class="wc-l">👥 編成</div><div class="wc-v"><b>運営が決めた班</b>（4人組）<br>学科・学年が混ざる編成</div></div>
<div class="wk-cell time"><div class="wc-l">⏱ 時間</div><div class="wc-v">18分</div></div>
</div>

<div class="wk-lens">
<div class="wl-col">
<div class="wl-h">🛎 サービス・体験の視点</div>
<div class="wl-d">待ち時間・行列／案内・動線／不安・ストレス／手続きの手間</div>
</div>
<div class="wl-col eng">
<div class="wl-h">🔧 工学・技術の視点</div>
<div class="wl-d">座席・機内設備／<b>騒音・揺れ・空調</b>／整備・点検・センサー／環境（CO₂・SAF）／構造・素材・軽量化</div>
</div>
</div>

<div class="takeaway">サービスでも工学でも。解決策の前に、まず“体験”をよく知る</div>

<!-- 最初のWORKは「飛行機の体験」がテーマ。班は運営があらかじめ決めています（学科・学年が混ざる4人組）。最初に自己紹介でほぐし、空港・機内・その他サービスから場面を1つ選びます。大事なのは、いきなり便利な解決策に飛びつかないこと。4人それぞれの「困った・不便だった体験」をよく知るところから始め、最後に各班が会場全体へ簡単に共有します。視点メニューの2軸は強調してください：左の「サービス・体験」だけでなく、右の「工学・技術」（座席・機内設備、騒音・揺れ・空調、整備・点検・センサー、環境＝CO₂やSAF、構造・素材・軽量化）も立派なお題だと明言します。工学部の学生なので、ビジネス寄りの体験改善に偏らず、自分の専門に引きつけて構わない、と一言添えると発想が一気に広がります。 -->

---

<!-- _class: howto -->
<div class="page-title">WORK①の進め方</div>

## 18分で“共感→定義→アイデア→共有”

<div class="steps">

<div class="step">
<div class="num">STEP 1</div>
<div class="st">自己紹介＆体験を共有（共感・8分）</div>
<div class="sd">まず<b>自己紹介（1人30秒）</b>でチームをほぐす（挨拶を決めてもOK）。<b>空港／機内／その他サービス</b>から場面を1つ選び、<b>4人それぞれ</b>が「飛行機の体験で困った・不便だった場面」を話す。広げたい時は<b>壁打ちGem</b>に視点を足してもらう。</div>
</div>

<div class="step">
<div class="num">STEP 2</div>
<div class="st">本音→理想を描く（定義・アイデア・6分）</div>
<div class="sd">出た話から<b>「本当は〜したい」</b>を1文で言い切り、それに効く<b>理想の体験・しくみを1枚スケッチ</b>（<b>サービスの工夫でも、技術・工学のアイデアでもOK</b>）。きれいさより案の数と勢い。利用者像を深めたい時は<b>ペルソナGem</b>に「なぜ？」を返してもらう。</div>
</div>

<div class="step">
<div class="num">STEP 3</div>
<div class="st">会場全体へ共有（一言で・4分）</div>
<div class="sd">各班が「<b>選んだ場面</b>・<b>困りごと</b>・<b>理想</b>」を<b>ひと言で</b>会場全体に共有。<b>結果は<a href="https://docs.google.com/spreadsheets/d/1FQ-Iz2YK0XHXXeYYEEkIx0owqIWF6EfFDIDE82bAi3I/edit?usp=sharing">共有シート</a>に記入しよう。</b></div>
</div>

</div>

<div class="takeaway">“解決策”より“みんなの本音（＝イシュー）”を掘り当て、全体で共有する</div>

<!-- 18分の流れ。最初の自己紹介でチームをほぐし（挨拶を決めると一気に距離が縮まります）、空港・機内・その他サービスから1場面を選んで4人それぞれが困った体験を共有（8分）。次に本音を1文にしてから理想の体験・しくみを1枚スケッチ（6分）。ここで「サービスの工夫でも、技術・工学のアイデアでもOK」と明言してください＝機内の騒音を抑える、座席や収納を作り変える、整備をセンサーで楽にする、軽量化でCO₂を減らす…といった工学寄りの解も歓迎、と例示すると工学部の学生が乗ってきます。最後に各班が選んだ場面・困りごと・理想を会場全体へ1〜2分で発表します（4分）。狙いはうまい解決策より、みんなの本音を掘り当てること。タイマーを画面に出すので残り時間を見ながら進めましょう。 -->

---

<!-- _class: summary -->
<div class="page-title">WORK②｜HMWとは</div>

## HMW ― 解く価値のある「問い」を選ぶ

<div class="sections">
<div class="sec-box">

### 📐 HMWの型

- <b>How Might We</b>＝「私たちはどうすれば〜できるか？」
- 型：<b>[利用者]が[望む状態]を実現するには？</b>
- 決めつけず・狭すぎず・広すぎず、ちょうど良く
- 語尾はいつも<b>「〜には？」</b>で開いておく

</div>
<div class="sec-box">

### 🎯 良い問いの条件

- <b>利用者が主語</b>になっている
- <b>解決策を含めない</b>（手段は後で考える）
- 狭すぎ・広すぎず、<b>ちょうど良い</b>大きさ
- ワクワクする・<b>複数の案</b>が浮かぶ

</div>
</div>

<div class="takeaway">“解”の前に、解く価値のある“問い”を選ぶ</div>

<!-- HMWは「私たちはどうすれば〜できるか？」という問いの型です。ポイントは利用者を主語にし、解決策を答えに含めないこと。語尾を「〜には？」で開くと案が広がります。良い問いは答えやすさより“解く価値”で選びましょう。次のスライドで航空の具体例を見ます。 -->

---

<!-- _class: summary -->
<div class="page-title">WORK②｜HMWを作る</div>

## 穴埋めで「良い問い（HMW）」を作ろう

<div style="margin:8px 0 14px; background:#EAF1FF; border:2px solid #b9c8e6; border-radius:12px; padding:16px 24px; text-align:center;">
<div style="font-size:17px; color:#0033A0; font-weight:700; letter-spacing:.04em;">How Might We ― 私たちは、どうすれば…</div>
<div style="font-size:26px; font-weight:800; color:#222; line-height:2.0; margin-top:8px;">
「<span style="display:inline-block; min-width:210px; border-bottom:3px dashed #C0182B; color:#C0182B; font-size:19px;">①  だれが（利用者）</span> が、<span style="display:inline-block; min-width:250px; border-bottom:3px dashed #C0182B; color:#C0182B; font-size:19px;">②  どんな状態になりたい</span> には？」
</div>
</div>

<div class="sections">
<div class="sec-box">

### ① だれが（利用者）の例

- 初海外の人 ／ 子連れの親 ／ 従業員が
- 高齢の旅行者 ／ 乗り継ぎ客 ／ 外国人観光客

</div>
<div class="sec-box">

### ② どんな状態（望み）の例

- 迷わない ／ 安心できる ／ 待たずに済む
- スムーズに移動 ／ 困らず手続きできる

</div>
</div>

<div style="margin-top:10px; background:#F7F9FC; border-left:6px solid #19B36B; border-radius:0 8px 8px 0; padding:8px 18px; font-size:19px; line-height:1.5;">
<b style="color:#149A5B;">✅ 完成例</b>　「<b>初海外の人</b>」が、「<b>保安検査で迷わない</b>」には？　　<b style="color:#C0182B;">✕ NG</b>「アプリを作る」＝<b>解決策</b>を決めつけている
</div>

<div class="takeaway">空欄を埋めるだけ。主語＝利用者、解決策は入れない。</div>

<!-- 前ページのHMWを、ここでは穴埋めで実際に作ってみます。型は「①だれが、が、②どんな状態になりたい、には？」。①には利用者（初海外の人・子連れの親・車椅子の人など）、②には望む状態（迷わない・安心・スムーズなど）を入れます。WORK②ではこの穴埋めで各自どんどん問いを量産します。解決策（アプリを作る等）を入れないこと、主語を利用者にすることだけ守れば良い問いになります。 -->

---

<!-- _class: work -->
<div class="page-title">WORK②</div>

<div class="wk-head">
<div class="wk-badge"><div class="wb-l">WORK</div><div class="wb-n">2</div></div>
<div class="wk-title">“良い問い”を量産して、1つ選ぶ<span class="wk-sub">― HMWで「解く価値のある問い」へ</span></div>
</div>

<div class="wk-meta">
<div class="wk-cell"><div class="wc-l">🎯 お題</div><div class="wc-v">前回slidoの関心領域から、航空の課題を<b>HMWの問い</b>に書き換える</div></div>
<div class="wk-cell"><div class="wc-l">👥 編成</div><div class="wc-v"><b>運営が決めた班</b>で進める<br>（WORK①から組み替え）</div></div>
<div class="wk-cell time"><div class="wc-l">⏱ 時間</div><div class="wc-v">20分</div></div>
</div>

<div class="steps">

<div class="step">
<div class="num">STEP 1</div>
<div class="st">自己紹介→問いを量産（8分）</div>
<div class="sd">まず<b>自己紹介（1人30秒）</b>。次に付箋でHMWの問いを<b>各自○枚</b>書き出す。<b>壁打ちGem</b>で視点を足し、問いを広げる。</div>
</div>

<div class="step">
<div class="num">STEP 2</div>
<div class="st">分類する（5分）</div>
<div class="sd">チームで付箋を持ち寄り、<b>似た問いをグループ化</b>。重なりや抜けを見つける。</div>
</div>

<div class="step">
<div class="num">STEP 3</div>
<div class="st">1つに絞る（7分）</div>
<div class="sd"><b>ドット投票シール</b>で“今いちばん解きたい問い”を<b>1つ</b>に決める。</div>
</div>

</div>

<div style="margin-top:10px; text-align:center; font-size:19px; color:#0033A0; font-weight:700;">📝 結果は <a href="https://docs.google.com/spreadsheets/d/1FQ-Iz2YK0XHXXeYYEEkIx0owqIWF6EfFDIDE82bAi3I/edit?usp=sharing">共有シート</a> に記入しよう</div>

<div class="takeaway">問いが変われば、答えが変わる</div>

<!-- ここからWORK②、20分です。前回slidoで気になった航空テーマを、HMWの問いに書き換えていきます。班は運営があらかじめ決めています（WORK①から組み替え）。STEP1で各自たくさん問いを量産（壁打ちGemで広げる）、STEP2で分類、STEP3はドット投票シールで一番解きたい問いを1つに絞ります。良い問いを選べば、出てくる答えも変わります。 -->

---

<!-- _class: work -->
<div class="page-title">WORK③</div>

<div class="wk-head">
<div class="wk-badge"><div class="wb-l">WORK</div><div class="wb-n">3</div></div>
<div class="wk-title">グループ決め ＆ クレイジー2<span class="wk-sub">テーマで集まり、多様な最終チームへ</span></div>
</div>

<div class="wk-meta">
<div class="wk-cell"><div class="wc-l">🎯 お題</div><div class="wc-v">会場でテーマ案を集めて集約し、<b>多様性を意識して4つの班</b>に分かれる。</div></div>
<div class="wk-cell"><div class="wc-l">👥 編成</div><div class="wc-v">移動して<b>4班</b>を作る＝正式チーム（3回目）<br><b>6/21(日)23:59まで変更OK</b></div></div>
<div class="wk-cell time"><div class="wc-l">⏱ 時間</div><div class="wc-v">25分</div></div>
</div>

<div class="steps">

<div class="step">
<div class="num">STEP 1</div>
<div class="st">テーマ案を集める（会場・5分）</div>
<div class="sd">全員が1人で「取り組みたい航空テーマ」を出し、<b>会場全体で共有</b>する。広げたい時は<b>壁打ちGem</b>。</div>
</div>

<div class="step">
<div class="num">STEP 2</div>
<div class="st">集約する（全体・3分）</div>
<div class="sd">全員で、似た案をまとめ、班の核になる<b>4つのテーマ</b>に整理する。</div>
</div>

<div class="step">
<div class="num">STEP 3</div>
<div class="st">何回か繰り返しつつ、4班に分かれ自己紹介（移動5分＋3分）</div>
<div class="sd"><b>多様性を意識して4班</b>に分かれる→班で<b>自己紹介（1人30秒）</b>。時間があれば<b>クレイジー2</b>へ。</div>
</div>

</div>

<div class="takeaway">多様な4人で1チーム。違う視点が強さになる</div>

<!-- WORK③は本日のクライマックス、グループ決めとクレイジー2です。まず会場全体でテーマ案を5分出し合い、3分で似た案を集約して4つのテーマに整理します。次に、そのテーマをきっかけに移動して4つの班を作ります（多様性を最優先＝学科・学年・視点が偏らないよう、教員も調整）。班ができたら自己紹介、そして時間があればクレイジー2（解決アイデアを2案、一気に速描き）まで進みます。配分はテーマ5分＋集約3分＋移動・班づくり5分＋自己紹介3分＋クレイジー2は残り時間で。 -->

---

<!-- _class: islands -->
<div class="page-title">WORK③ STEP 4</div>

## STEP 4：テーマの「島」へ移動 ＝ 多様な4班を作る

<div class="is-grid">
<div class="is-svg">
<svg viewBox="0 0 540 360" style="max-height:250px; width:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="テーマ別の島へ人が移動する図">
  <g font-family="sans-serif">
  <!-- 島A -->
  <circle cx="140" cy="110" r="46" fill="#EAF3FF" stroke="#0033A0" stroke-width="3"/>
  <text x="140" y="105" text-anchor="middle" font-size="17" font-weight="800" fill="#0033A0">島A</text>
  <text x="140" y="126" text-anchor="middle" font-size="12" fill="#555">整備・安全</text>
  <g fill="#0033A0"><circle cx="140" cy="56" r="9"/><circle cx="194" cy="110" r="9"/><circle cx="140" cy="164" r="9"/><circle cx="86" cy="110" r="9"/></g>
  <!-- 島B -->
  <circle cx="400" cy="110" r="46" fill="#FFF6E6" stroke="#F0A500" stroke-width="3"/>
  <text x="400" y="105" text-anchor="middle" font-size="17" font-weight="800" fill="#B8780A">島B</text>
  <text x="400" y="126" text-anchor="middle" font-size="12" fill="#555">客室・サービス</text>
  <g fill="#F0A500"><circle cx="400" cy="56" r="9"/><circle cx="454" cy="110" r="9"/><circle cx="400" cy="164" r="9"/><circle cx="346" cy="110" r="9"/></g>
  <!-- 島C -->
  <circle cx="140" cy="270" r="46" fill="#FDEBF2" stroke="#E8467C" stroke-width="3"/>
  <text x="140" y="265" text-anchor="middle" font-size="17" font-weight="800" fill="#C2356B">島C</text>
  <text x="140" y="286" text-anchor="middle" font-size="12" fill="#555">環境・SAF</text>
  <g fill="#E8467C"><circle cx="140" cy="216" r="9"/><circle cx="194" cy="270" r="9"/><circle cx="140" cy="324" r="9"/><circle cx="86" cy="270" r="9"/></g>
  <!-- 島D -->
  <circle cx="400" cy="270" r="46" fill="#EAF7F0" stroke="#19B36B" stroke-width="3"/>
  <text x="400" y="265" text-anchor="middle" font-size="17" font-weight="800" fill="#149A5B">島D</text>
  <text x="400" y="286" text-anchor="middle" font-size="12" fill="#555">IT・データ</text>
  <g fill="#19B36B"><circle cx="400" cy="216" r="9"/><circle cx="454" cy="270" r="9"/><circle cx="400" cy="324" r="9"/><circle cx="346" cy="270" r="9"/></g>
  <!-- 移動する人＋矢印（中央から各島へ） -->
  <g stroke="#888" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round" fill="none">
    <path d="M270 180 L196 130"/><path d="M270 180 L344 130"/><path d="M270 180 L210 250"/>
  </g>
  <circle cx="270" cy="186" r="11" fill="#C0182B"/>
  <text x="270" y="214" text-anchor="middle" font-size="12" fill="#C0182B" font-weight="700">あなた</text>
  </g>
</svg>
<div class="caption">※島＝会場で集約した4テーマ（下は例）</div>
</div>
<div class="is-rules">

<div class="is-rule"><div class="ir-n">1</div><div class="ir-t">集約した<b>4テーマ</b>の島へ移動して座る</div></div>
<div class="is-rule"><div class="ir-n">2</div><div class="ir-t"><b>多様性を最優先</b>：学科・学年・視点が偏らないよう分かれる</div></div>
<div class="is-rule"><div class="ir-n">3</div><div class="ir-t">1班は<b>3〜5名</b>。偏りや過少は<b>教員が調整</b></div></div>
<div class="is-rule"><div class="ir-n">4</div><div class="ir-t">座った島が<b>そのまま正式チーム</b>。ただし<b>班は6/21(日)23:59まで変更OK</b></div></div>
<div class="is-rule"><div class="ir-n">5</div><div class="ir-t">班で<b>自己紹介（1人30秒）</b>→時間があれば<b>クレイジー2</b>（解決アイデアを2案、速描き）</div></div>

</div>
</div>

<div style="margin-top:8px; border:1.5px solid #cfd6e4; border-radius:8px; background:#FFF7E6; padding:8px 18px 9px; position:relative;">
<div style="position:absolute; top:-12px; left:14px; background:#F0A500; color:#fff; font-weight:700; font-size:15px; padding:2px 12px; border-radius:10px;">クレイジー2 とは（時間があれば）</div>
<div style="font-size:18px; line-height:1.55; color:#222; margin-top:6px;">紙を半分に折り、<b>左右に1案ずつ＝2案</b>を数分で一気に<b>速描き</b>。上手さは不要、<b>質より量・スピード</b>。描けたらチームで見せ合い、面白い案に印をつける。</div>
</div>

<div class="takeaway">多様な4人で集まれたら、夏に向けて走り出す</div>

<!-- ここが本日のクライマックス。会場で集約した4テーマの島へ、実際に立ち上がって歩かせ、4つの班を作ります。多様性を最優先＝学科・学年・視点が偏らないよう、教員も積極的に交通整理してください（同じ顔ぶれ・同じ学科で固まらせない）。1班3〜5名。班ができたら自己紹介、時間があればクレイジー2＝解決アイデアを紙半分ずつに2案、数分で一気に速描き（質より量・下手でOK）。座った瞬間に「これが正式チームです」と宣言します。ただし、ここで固まりきらなくてOK＝班は6/21(日)23:59まで変更できると必ず添えてください。今日は気軽に動いて、合わなければあとで組み替えられる、という安心感を持たせると移動がスムーズになります。 -->

---

<!-- _class: summary -->
<div class="page-title">WORK④ STEP 5</div>

## STEP 5：チームが決まったら、まず動き出す

<div class="sections">
<div class="sec-box">

### 🏷 チームの初期設定

- <b>チーム名</b>を決める（仮でOK・あとで変更可）
- <b>リーダーを1人</b>立てる（進行の旗振り役）
- 連絡手段（Google Workspace）を<b>決定</b>

</div>
<div class="sec-box">

### 🗂 今日中に
- <b>暫定テーマ</b>（HMWの問い1つ）をメモして残す
- 次回までに各班で問いを温めておく

</div>
<div class="sec-box">

### 🤝 役割の目安

- 進行・記録・調べ・発表など<b>緩く分担</b>
- 1人が複数を兼ねてOK・動きながら得意・好きで調整していく

</div>
</div>

<div class="takeaway">動き出そう体制を</div>

<!-- 残り10分の運用パートです。3つのボックスを上から順に。チーム名とリーダーは2分で即決させ、連絡手段の交換をその場で完了させます。Driveフォルダへの写真アップと暫定テーマのメモは今日中の宿題として明示。役割は固定せず緩く、を強調して終えてください。 -->

---

<!-- _class: slido -->
<div class="page-title">チーム管理シート</div>

## <span style="color:#C0182B">6/12(金)締切</span> ― チームのシートを埋める

<div class="slido-grid">
<div class="slido-left">

### 締切までに記入する6項目

- ① <b>リーダー</b>を決める
- ② <b>仮テーマ</b>（関心トピック）
- ③ <b>全員の顔合わせ</b>（実施したら記入）
- ④ <b>チャットの確立</b>（Workspace）
- ⑤ <b>フォルダの確立</b>（Google Drive）
- ⑥ <b>終了時こうなりたい</b>（チームの目標）

</div>

<div class="qr-card">
<img src="./src/fig-sheet-qr.png" alt="チーム管理シート QR">
<a class="qr-link" href="https://docs.google.com/spreadsheets/d/1CBvZoz-d295JrPNpK6UsOloEL-r8JYZeAnhmpc86A0A/edit?usp=sharing">共有スプレッドシートを開く</a>
<div class="qr-cap">この1枚に、各チームが追記していく</div>
</div>

</div>

<div class="takeaway">椅子取りで決まったら、6/12(金)までにシートへ記入</div>

<!-- 椅子取りでチームが確定したら、Drive上の共有スプレッドシート（このスライドのリンク／Classroomにも掲示）に、6/12(金)までに6項目を各チームで記入してもらいます。①リーダー②仮テーマ③全員の顔合わせ④チャット確立⑤フォルダ確立⑥終了時の目標。これが本日以降の最初のタスクで、チームが動き出せているかの自己点検にもなります。締切は今週金曜と口頭でも強調してください。 -->

---

<!-- _class: summary -->
<div class="page-title">成果物と宿題</div>

## 今日の成果物と、次回までの宿題

<div class="sections">
<div class="sec-box">

### ✅ 今日の出口（成果物）

- チーム結成（島＝チーム・チーム名・リーダー）
- 暫定テーマ＝HMWの問いを1つ
- 連絡手段（LINE等）を決めた
- <b>班は6/21(日)23:59まで変更OK</b>

</div>
<div class="sec-box">

### 📝 宿題・締切

- <b>6/12(金)</b>：チーム管理シートを記入（前ページの6項目）
- 暫定テーマを各チームで深掘り（壁打ちGem活用）
- 6/19目安で“最初の発表テーマ案”を提出

</div>
</div>

<div class="takeaway">テーマも班も“仮”でOK。班は6/21(日)23:59まで変えられる。</div>

<!-- 5分のまとめパート。今日の成果物（チーム・暫定テーマ・連絡手段）を確認し、宿題を伝えます。テーマはあくまで仮で、6/19の発表テーマ案も以後変更可・最終fixは8/10と強調してください。班についても同様で、今日組んだチームは6/21(日)23:59まで変更できると明言してください＝合わなければ組み替えられるので、今日は気軽に動いてOK。 -->

---

<!-- _class: planlist -->
<div class="page-title">全体の現在地</div>

## 全11回スケジュール ― 今日は第2回

<div class="pl-wrap">
<div class="pl-list">

<div class="pl-row"><div class="pl-when">6/5</div><div class="pl-tag pl-req">必須</div><div class="pl-what">第1回 ガイダンス（済）</div></div>
<div class="pl-row"><div class="pl-when">6/9</div><div class="pl-tag pl-req">必須</div><div class="pl-what"><b>第2回 デザインWS・チームビルディング／仮説形成（今回）</b></div></div>
<div class="pl-row"><div class="pl-when">TBD</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第3回 整備士インタビュー</div></div>
<div class="pl-row"><div class="pl-when">TBD</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第4回 安全担当・管制経験者インタビュー</div></div>
<div class="pl-row"><div class="pl-when">TBD</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第5回 航空貨物事務系インタビュー</div></div>
<div class="pl-row"><div class="pl-when">TBD</div><div class="pl-tag pl-req">必須</div><div class="pl-what">第6回 中間発表・困りごと共有／プレゼンのコツ</div></div>
<div class="pl-row"><div class="pl-when">8/5 or 7</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第7回 成田空港見学（半日）</div></div>
<div class="pl-row"><div class="pl-when">TBD</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第8回 プレゼンテーション・クリニック</div></div>
<div class="pl-row"><div class="pl-when">8月後半</div><div class="pl-tag pl-req">必須</div><div class="pl-what">第9回 進出グループ審査・相互フィードバック</div></div>
<div class="pl-row"><div class="pl-when">8月末</div><div class="pl-tag pl-opt">任意</div><div class="pl-what">第10回 代表チームをみんなで支援する回</div></div>
<div class="pl-row final"><div class="pl-when">9/7(月)</div><div class="pl-tag pl-fin">本番</div><div class="pl-what">サマーセミナーで英語発表（大阪公立大学・全国合同）</div></div>
<div class="pl-row"><div class="pl-when">9月中旬</div><div class="pl-tag pl-req">必須</div><div class="pl-what">第11回 リフレクション・フェアウェル</div></div>

</div>
<div class="pl-aside">
<div class="at">📌 次回までに</div>
<ol>
<li>暫定テーマ案を1つ持参（6/19目安）</li>
<li>成田見学 8/5 or 8/7 の希望日</li>
</ol>
</div>
</div>

<div class="takeaway">内部セッションは“支援”。調査・準備は各チームで自走。</div>

<!-- 全11回の現在地を示します。今日は第2回でちょうど入口。任意セッションやインタビューは「支援」であって、調査や準備はあくまで各チームで自走してもらうことを伝えてください。次回までの宿題2点も右で再確認します。 -->

---

<!-- _class: toolhub -->
<div class="page-title">連絡系統</div>

## ファイル・連絡・相談は、この3つに集約

<div class="hub-list">

<div class="hub-row">
<div class="hub-ic">📁</div>
<div class="hub-main">
<div class="ht">Google Drive</div>
<div class="hd">資料・成果物の置き場／今日の成果物は各チームのフォルダへ</div>
<div class="hu">https://drive.google.com/drive/folders/1eYAriwBMlX6ZsySBhsSRjQSCVi470Edz?usp=drive_link</div>
</div>
<div class="hub-qr"><img src="./src/fig-drive-qr.png" alt="Drive QR"></div>
</div>

<div class="hub-row">
<div class="hub-ic">📣</div>
<div class="hub-main">
<div class="ht">Google Classroom</div>
<div class="hd">連絡・お知らせ・フォーラムでの質問はこちら</div>
<div class="hu">https://classroom.google.com/c/ODU0ODczMzk3MjA0</div>
</div>
<div class="hub-qr"><img src="./src/fig-classroom-qr.png" alt="Classroom QR"></div>
</div>

<div class="hub-row form">
<div class="hub-ic">✉️</div>
<div class="hub-main">
<div class="ht">相談フォーム</div>
<div class="hd">個別の相談・困りごとはこちらから（匿名可）</div>
<div class="hu">https://forms.gle/XfBcwbZcLKLX5b5o6</div>
</div>
<div class="hub-qr-none"></div>
</div>

</div>

<div class="takeaway">迷ったら、まずClassroom。困ったら相談フォーム。</div>

<!-- 連絡系統の確認です。ファイルはDrive、お知らせと質問はClassroom、個別相談はフォーム、と役割を分けています。今日作った成果物は各チームのDriveフォルダに入れておくよう促してください。 -->

---

<!-- _class: dt -->
<div class="page-title">この先の道のり</div>

<div class="dt-def" style="font-size:19px; padding:7px 16px; margin:2px 0 4px;">
今日のWSは、デザイン思考の<b>前半（共感・定義・発散）</b>。<b>後半（試作・検証）</b>は、ここからプロジェクト全体で、<b>9/7の発表</b>に向けて何度も回していきます。
</div>

<div class="dt-svg" style="text-align:center;">
<svg viewBox="0 0 1180 252" style="height:215px; width:auto; margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="デザイン思考の5ステップと今日／これからの対応">
  <g fill="none" stroke="#C2C9D6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M231 54 l13 12 -13 12"/><path d="M481 54 l13 12 -13 12"/><path d="M731 54 l13 12 -13 12"/><path d="M981 54 l13 12 -13 12"/>
  </g>
  <circle cx="110" cy="66" r="44" fill="#E8467C"/>
  <path d="M110 88 C86 70 92 48 110 60 C128 48 134 70 110 88 Z" fill="#fff"/>
  <text x="110" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#E8467C">共感</text>
  <text x="110" y="164" text-anchor="middle" font-size="14" fill="#888">Empathize</text>
  <circle cx="360" cy="66" r="44" fill="#0033A0"/>
  <circle cx="360" cy="66" r="20" fill="none" stroke="#fff" stroke-width="3"/><circle cx="360" cy="66" r="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="360" cy="66" r="3.5" fill="#fff"/>
  <text x="360" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#0033A0">定義</text>
  <text x="360" y="164" text-anchor="middle" font-size="14" fill="#888">Define</text>
  <circle cx="610" cy="66" r="44" fill="#F0A500"/>
  <circle cx="610" cy="60" r="15" fill="none" stroke="#fff" stroke-width="3"/><path d="M610 50 v12 M603 56 h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><rect x="603" y="78" width="14" height="7" rx="2" fill="#fff"/>
  <text x="610" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#E08F00">アイデア</text>
  <text x="610" y="164" text-anchor="middle" font-size="14" fill="#888">Ideate</text>
  <circle cx="860" cy="66" r="44" fill="#19B36B"/>
  <rect x="842" y="50" width="22" height="22" rx="3" fill="none" stroke="#fff" stroke-width="3"/><rect x="858" y="64" width="22" height="22" rx="3" fill="#fff"/>
  <text x="860" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#149A5B">試作</text>
  <text x="860" y="164" text-anchor="middle" font-size="14" fill="#888">Prototype</text>
  <circle cx="1110" cy="66" r="44" fill="#7A5BD0"/>
  <circle cx="1104" cy="60" r="14" fill="none" stroke="#fff" stroke-width="3"/><line x1="1114" y1="70" x2="1124" y2="80" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M1098 60 l4 4 7 -8" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="1110" y="142" text-anchor="middle" font-size="27" font-weight="800" fill="#6A4BC0">検証</text>
  <text x="1110" y="164" text-anchor="middle" font-size="14" fill="#888">Test</text>
  <!-- 前半／後半ブラケット -->
  <path d="M66 188 v8 H654 v-8" fill="none" stroke="#0033A0" stroke-width="3" stroke-linejoin="round"/>
  <text x="360" y="222" text-anchor="middle" font-size="19" font-weight="800" fill="#0033A0">今日のWSで体験（前半）</text>
  <path d="M816 188 v8 H1154 v-8" fill="none" stroke="#C0182B" stroke-width="3" stroke-linejoin="round"/>
  <text x="985" y="222" text-anchor="middle" font-size="19" font-weight="800" fill="#C0182B">プロジェクト後半 → 9/7 発表へ</text>
</svg>
</div>

<div class="dt-do" style="padding:6px 18px; margin-top:4px;">
<div class="dh" style="font-size:20px; margin-bottom:3px;">📌 後半（これから）＝発表までの道のり</div>
<ul style="font-size:19px; line-height:1.45;">
<li><b>試作</b>：解決策を形にする（調査・インタビュー・研究／7〜8月）</li>
<li><b>検証</b>：中間発表・学内選考でフィードバックを受け磨く</li>
<li>必要なら<b>共感・定義へ戻る</b>（何度でも回してよい）</li>
<li>そして<b>本選（9/7・大阪）</b>で英語発表</li>
</ul>
<div class="dt-note" style="margin-top:6px; padding-top:6px; font-size:19px;">今日の“仮テーマ”は出発点。<b>走りながら、何度も磨いていく</b></div>
</div>

<div class="takeaway">今日は“入口”。試作・検証は発表まで続いていく</div>

<!-- page4では入り切らなかった「後半」を、ここで回収します。今日のWSはデザイン思考の前半（共感・定義・発散）まで。試作・検証はこれからプロジェクト全体で、7〜8月の調査・インタビュー、中間発表・学内選考でのフィードバックを通じて、9/7の本選発表に向けて何度も回していくと伝えてください。だから今日決めた仮テーマはゴールではなく出発点、という締めにします。 -->

---

<!-- _class: wrap -->
<div class="page-title">まとめ</div>

## まとめ

- デザイン思考を手で体験した
- 3回の組み替えでチームが決まった
- 暫定テーマ（HMWの問い）を持てた
- 次は6/19までに発表テーマ案

<!-- 90分のまとめです。手を動かしてデザイン思考を体験し、3回のシャッフルでチームが決まり、暫定テーマまで持てました。次の一歩は6/19までの発表テーマ案。短く力強く締めてください。 -->

---

<!-- _class: qa -->
<div class="page-title">Q&amp;A</div>

# Q&A

## 質問はこの場で／Classroomフォーラムでも

<!-- 質疑応答です。その場で出なくてもOK、後からClassroomのフォーラムでも受け付けると伝えてください。今日はおつかれさまでした、と温かく締めましょう。 -->

---

<!-- _class: message -->

# 引き続き、<br>楽しんでいきましょう！

## チームで、夏の発表（9/7）まで走り抜けよう

<div class="takeaway">今日はおつかれさまでした 🎉 またチームで会いましょう</div>

<!-- 最後の締めです。肩の力を抜いて、これからもサークルのノリで楽しく進めましょう、と温かく送り出してください。夏の発表まで、チームで一緒に走り抜けましょう。 -->
