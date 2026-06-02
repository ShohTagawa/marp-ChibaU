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
  section.planlist .pl-list { margin-top: 6px; }
  section.planlist .pl-row { display: grid; grid-template-columns: 96px 58px 1fr; gap: 12px; align-items: center; padding: 4px 0; border-bottom: 1px solid #e3e8f0; }
  section.planlist .pl-when { font-size: 16px; font-weight: 700; color: #0033A0; text-align: center; line-height: 1.2; }
  section.planlist .pl-tag { font-size: 13px; font-weight: 700; text-align: center; border-radius: 11px; padding: 2px 0; }
  section.planlist .pl-req { background: #0033A0; color: #fff; }
  section.planlist .pl-opt { background: #E6ECF6; color: #0033A0; border: 1px solid #b9c8e6; }
  section.planlist .pl-what { font-size: 18px; line-height: 1.3; }
  section.planlist .pl-no { color: #0033A0; font-weight: 700; margin-right: 6px; }

  /* フェーズマップ（全体像） */
  section.phasemap .pm-grid { display: grid; grid-template-columns: 110px 1fr; row-gap: 8px; column-gap: 14px; margin-top: 8px; }
  section.phasemap .pm-when { font-size: 18px; font-weight: 700; color: #0033A0; background: #E6ECF6; border-radius: 6px; padding: 8px 10px; display: flex; align-items: center; justify-content: center; text-align: center; }
  section.phasemap .pm-what { font-size: 19px; line-height: 1.45; border-left: 4px solid #0033A0; padding: 6px 14px; background: #F7F9FC; border-radius: 0 6px 6px 0; }
  section.phasemap .pm-what b { color: #0033A0; }

  /* 本日のゴール：左に3ボックス＋右に挿絵。余白を詰めてtakeawayと被らせない */
  section.summary.goal .goal-grid { display: grid; grid-template-columns: 1.35fr 0.65fr; gap: 26px; align-items: start; margin-top: 6px; }
  section.summary.goal h2 { margin: 0 0 10px; }
  section.summary.goal .sections { gap: 12px; }
  section.summary.goal .sec-box { padding: 11px 18px; }
  section.summary.goal .sec-box h3 { font-size: 23px; margin: 0 0 4px; }
  section.summary.goal .sec-box ul { margin: 0 0 0 1.1em; }
  section.summary.goal .sec-box li { font-size: 22px; line-height: 1.45; margin: 2px 0; }
  section.summary.goal .goal-art { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding-top: 6px; }
  section.summary.goal .goal-art figure { margin: 0; text-align: center; }
  section.summary.goal .goal-art svg { width: 132px; height: auto; }
  section.summary.goal .goal-art figcaption { font-size: 15px; color: #0033A0; font-weight: 700; margin-top: 1px; }

  /* 教員紹介（1人1枚） */
  section.prof .prof-grid { display: grid; grid-template-columns: 300px 1fr; gap: 48px; align-items: start; margin-top: 18px; padding: 0 24px; }
  section.prof .prof-photo { width: 300px; height: 300px; border-radius: 50%; overflow: hidden; background: #E6ECF6; border: 3px solid #cfd6e4; display: flex; align-items: center; justify-content: center; color: #7a8aa0; font-size: 18px; }
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
  section.howto .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 10px; }
  section.howto .step { border: 1.5px solid #cfd6e4; border-radius: 8px; padding: 12px 14px; background: #F7F9FC; position: relative; }
  section.howto .step .num { position: absolute; top: -12px; left: 12px; background: #0033A0; color: #fff; font-weight: 700; font-size: 16px; padding: 2px 10px; border-radius: 10px; }
  section.howto .step .st { font-size: 20px; font-weight: 700; color: #0033A0; margin: 4px 0 4px; }
  section.howto .step .sd { font-size: 17px; line-height: 1.45; color: #222; }

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
  .video-hero { flex: 1; min-height: 0; width: 100%; margin-top: 6px; display: flex; align-items: center; justify-content: center; }
  .video-hero video {
    height: 100%; max-height: 100%; width: auto; max-width: 100%;
    aspect-ratio: 16 / 9; object-fit: contain; background: #000;
    border-radius: 8px; box-shadow: 0 4px 18px rgba(0,0,0,.25);
  }

  /* 写真ヒーロー：高さ基準で収める（横幅は auto、上限まで縦に合わせる） */
  .photo-hero { flex: 1; min-height: 0; width: 100%; margin-top: 6px; display: flex; align-items: center; justify-content: center; }
  .photo-hero img {
    height: 100%; max-height: 100%; width: auto; max-width: 100%;
    object-fit: contain;
    border-radius: 8px; box-shadow: 0 4px 18px rgba(0,0,0,.25);
  }

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
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">Boeing Externship ／ 第1回キックオフ</div>
<div class="title-big">初回顔合わせ・<br>グループ決め</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/IMG_2752.jpg" alt="表紙写真">
</div>
<div class="title-meta">
<div class="title-event">キックオフミーティング<br>2026年6月5日（金）</div>
<div class="title-affil">本日の進行担当：千葉大学 国際未来教育基幹<br>田川 翔（プログラム進行）</div>
</div>
</div>

<!-- 90分セッションの開始。歓迎の挨拶と本日のゴール（教員紹介・全体像理解・グループ仮決め）を共有する。 -->

---
<!-- _class: summary -->

<div class="page-title">皆さん、飛行機、好きですか？</div>

<div class="photo-hero">
<img src="./src/IMG_2752_full.jpg" alt="冬の千歳">
</div>
<center>冬の千歳、うつっているのは、JALの777</center>

---
<!-- _class: summary -->

<div class="page-title">皆さん、飛行機、好きですか？</div>

<div class="photo-hero">
<img src="./src/fig03-nca-sunpillar.jpg" alt="日本貨物航空 747 とサンピラー">
</div>
<center>アンカレッジに集まった、NCAの747-8F (友人撮影)</center>

---

<!-- _class: summary -->

<div class="page-title">Externshipのゴール</div>

## Boeing Externship とは — 目的と狙い

<div class="sections">

<div class="sec-box">

### 目的 （なぜこの活動やるのか）

- 航空・宇宙分野の知識を、**実社会の課題**を通じて深める
- **英語**でのプレゼン・議論を実践し、世界で通用する力を養う
- 世界の航空宇宙企業 **Boeing** と異文化に直接触れる

</div>

<div class="sec-box">

### 狙い （終わったあとにどうなっているのか）

- **ガクチカ**： 正解のない問いに、チームで **仮説→検証** で挑む、PBL型の学び
- **社会体験**： 整備士・航空会社社員等 **現場の声**を聞き、「机上の空論」を超える
- **語学力**： 9月のサマーセミナーで **全国の大学と英語発表・交流**、人と出会い、英語力も向上

</div>

</div>
<div class="takeaway">今年は、サークル的に実施、授業ではないので、自由に進めましょう</div>

<!-- 日本版Boeing Externshipは「航空×英語×実課題」の産学連携PBL。9月のサマーセミナーで全国の参加大学が英語発表・議論する。千葉大は今回が初参加。 -->

---

<!-- _class: summary -->

<div class="page-title">過去にどんなテーマがあった？</div>

## 他大学では、こんな課題に取り組んできました

<div class="sections">

<div class="sec-box">

### 環境・運航オペレーション

- **持続可能な航空燃料（SAF）** と全国インフラ構想（2024・東北大）
- バイオ燃料で地球を救う（2014・金沢工大）
- 搭乗時の **混雑緩和**：荷物・トイレ予約制（2024・大阪公立大）
- 乗降を快適にする **座席配置**（2023・大阪公立大）

</div>

<div class="sec-box">

### テクノロジー・ものづくり

- 機体 **洗浄ロボット** の開発（2024・金沢工大）
- 航空機の **車椅子スペース** 改善（2021・金沢工大）
- 手荷物受取所の **混雑解消**（2020・金沢工大）

</div>

</div>

<div class="caption">出典：東北大学・金沢工業大学・大阪公立大学 Boeing Externship 公開情報より（他大学の実施例）</div>

<div class="takeaway">

「身近な不便」×「航空」で十分テーマになる
自由に発想してOKだが、実際に簡単な実現可能性も検討 (調べ学習だけでは終わらない)
</div>

<!-- これらは他大学の過去テーマ例。SAF・混雑緩和・ロボット・ユニバーサルデザインなど領域は幅広い。千葉大は初参加なので、これらを参考にしつつ自分たちの関心からテーマを立てる。 -->

---

<!-- _class: summary goal -->

<div class="page-title">本日のゴール</div>

## 60分でここまで進めます

<div class="goal-grid">

<div class="sections">

<div class="sec-box">

### 全体を知る

- プログラムの目的を把握する
- 教員4名 (授業担当というより部顧問？)・事務局と連絡先を知る
- グラウンドルールを知る

</div>

<div class="sec-box">

### 進め方を確認する
- 今後の流れを理解する
- 選考方法を把握する
- 困ったときやスケジュール管理に使う道具を確認する
</div>

<div class="sec-box">

### テーマ案を考えてみる
- 何に関心があるか、表明しよう
- ほかの人の関心も知ってみよう
</div>

</div>

<div class="goal-art">

<figure>
<svg viewBox="0 0 150 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="全体像">
  <rect x="6" y="8" width="138" height="92" rx="13" fill="#EAF3FF" stroke="#0033A0" stroke-width="2.5"/>
  <g stroke="#FFC93C" stroke-width="2.5" stroke-linecap="round">
    <line x1="123" y1="14" x2="123" y2="7"/><line x1="135" y1="26" x2="142" y2="26"/>
    <line x1="132" y1="17" x2="137" y2="12"/><line x1="132" y1="35" x2="137" y2="40"/>
  </g>
  <circle cx="123" cy="26" r="9" fill="#FFC93C"/>
  <g fill="#ffffff">
    <ellipse cx="34" cy="28" rx="14" ry="8"/><ellipse cx="47" cy="30" rx="10" ry="7"/><ellipse cx="24" cy="31" rx="9" ry="6"/>
  </g>
  <path d="M18 86 Q70 42 124 58" fill="none" stroke="#FF8C42" stroke-width="3" stroke-dasharray="1.5 8" stroke-linecap="round"/>
  <circle cx="18" cy="86" r="5.5" fill="#E8467C"/>
  <g transform="translate(96 44) rotate(-22)">
    <path d="M0 0 L28 9 L9 16 L11 9 Z" fill="#0033A0"/>
    <path d="M9 16 L11 9 L18 12 Z" fill="#244a9c"/>
  </g>
</svg>
<figcaption>全体像</figcaption>
</figure>

<figure>
<svg viewBox="0 0 150 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="進め方">
  <rect x="6" y="8" width="138" height="92" rx="13" fill="#F4F8FF" stroke="#0033A0" stroke-width="2.5"/>
  <rect x="20" y="74" width="32" height="20" rx="3" fill="#9DB8E8"/>
  <rect x="54" y="58" width="32" height="36" rx="3" fill="#6f8fce"/>
  <rect x="88" y="40" width="32" height="54" rx="3" fill="#0033A0"/>
  <circle cx="36" cy="68" r="4" fill="#fff"/><circle cx="70" cy="52" r="4" fill="#fff"/>
  <line x1="104" y1="40" x2="104" y2="18" stroke="#0033A0" stroke-width="3" stroke-linecap="round"/>
  <path d="M104 19 l20 6 -20 7 z" fill="#19B36B"/>
  <g fill="#FFC93C"><path d="M126 14 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z"/></g>
</svg>
<figcaption>進め方</figcaption>
</figure>

<figure>
<svg viewBox="0 0 150 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="テーマ案">
  <rect x="6" y="8" width="138" height="92" rx="13" fill="#FFF8E6" stroke="#0033A0" stroke-width="2.5"/>
  <g fill="#FF8C42"><path d="M30 30 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z"/></g>
  <g fill="#E8467C"><path d="M118 64 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z"/></g>
  <circle cx="75" cy="46" r="25" fill="#FFE680" stroke="#FFB000" stroke-width="2.5"/>
  <circle cx="67" cy="43" r="2.6" fill="#0033A0"/><circle cx="83" cy="43" r="2.6" fill="#0033A0"/>
  <path d="M66 52 q9 8 18 0" fill="none" stroke="#0033A0" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="65" y="71" width="20" height="9" rx="2.5" fill="#0033A0"/>
  <line x1="68" y1="84" x2="82" y2="84" stroke="#0033A0" stroke-width="3" stroke-linecap="round"/>
</svg>
<figcaption>テーマ案</figcaption>
</figure>

</div>

</div>

<div class="takeaway">
次回(6/9)は、チーム編成です
</div>
<!-- 「知る」→「決める」の順で進める。終わりにグループ単位で簡単な連絡手段（LINE/Slack等）を確立してもらう。 -->

---

<!-- _class: prof -->

<div class="page-title">教員紹介（1 / 4）</div>

<div class="prof-grid">
<div class="prof-photo"><img src="./src/fig-prof-namiki.jpg" alt="並木 明夫 教授"></div>
<div class="prof-body">
<div class="prof-name">並木 明夫 先生</div>
<div class="prof-role">千葉大学 大学院工学研究科 教授／学長特別補佐（研究）</div>
<div class="prof-field"><b>ご専門</b>：知能ロボティクス／メカトロニクス</div>
<div class="prof-bio">
<div class="prof-desc">関わり方： 全体の統括</div>
</div>
</div>

<!-- 1人目。お一人ずつ1分程度で自己紹介してもらう。 -->

---

<!-- _class: prof -->

<div class="page-title">教員紹介（2 / 4）</div>

<div class="prof-grid">
<div class="prof-photo"><img src="./src/fig-prof-ota.jpg" alt="太田 匡則 准教授"></div>
<div class="prof-body">
<div class="prof-name">太田 匡則 先生</div>
<div class="prof-role">千葉大学 大学院工学研究科 准教授（航空宇宙熱流体工学研究室）</div>
<div class="prof-field"><b>専門</b>：航空宇宙工学／高速・圧縮性流体（衝撃波、可視化計測）</div>
<div class="prof-bio">
<div class="prof-desc">関わり方： 航空・宇宙工学の観点からの支援、Boeingとのやり取り</div>
</div>
</div>

<!-- 2人目。 -->

---

<!-- _class: prof -->

<div class="page-title">教員紹介（3 / 4）</div>

<div class="prof-grid">
<div class="prof-photo"><img src="./src/fig-prof-matsumoto.jpg" alt="松本 暢平 助教"></div>
<div class="prof-body">
<div class="prof-name">松本 暢平</div>
<div class="prof-role">千葉大学 国際未来教育基幹 助教</div>
<div class="prof-field"><b>専門</b>：教育社会学／医学教育（IR・FD・国際バカロレアまで幅広く）</div>
<div class="prof-bio">
<div class="prof-desc">関わり方：スライド作成・発表実施支援</div>
</div>
</div>

<!-- 3人目。 -->

---

<!-- _class: prof -->

<div class="page-title">教員紹介（4 / 4）</div>

<div class="prof-grid">
<div class="prof-photo"><img src="./src/fig-prof-tagawa.jpg" alt="田川 翔 助教"></div>
<div class="prof-body">
<div class="prof-name">田川 翔</div>
<div class="prof-role">千葉大学 国際未来教育基幹 助教</div>
<div class="prof-field"><b>専門</b>：高等教育論／地球深部科学／国際航空貨物</div>
<div class="prof-bio">
<div class="bl">略歴</div>
<ul>
<li>博士（理学, 2020）</li>
<li>東京大学・東工大WPIの特任助教を経て、航空貨物の総合職事務系へ</li>
<li>2024年から千葉大に着任、生成AIの活用(下流側)に従事</li>
</ul>
</div>
<div class="prof-desc">関わり方：航空ビジネスの観点からの支援、ファシリテーション</div>
</div>
</div>

<!-- 4人目（本日の進行担当）。 -->

---

<!-- _class: cards -->

<div class="page-title">事務局紹介</div>

## サポート体制

<div class="card-grid">

<div class="card">
<div class="cn">事務局（十見さん）</div>
<div class="cr">運営事務局</div>
<div class="cd">スケジュール調整・施設予約・連絡窓口。困ったらまず事務局へ。</div>
</div>

<div class="card">
<div class="cn">Boeing 連絡担当</div>
<div class="cr">プログラムパートナー</div>
<div class="cd">本選・課題テーマに関する企業側との連絡を仲介。</div>
</div>

<div class="card">
<div class="cn">学内サポート</div>
<div class="cr">教務・学生支援</div>
<div class="cd">単位認定・旅費・履修関連は学内窓口を経由して対応。</div>
</div>

<div class="card">
<div class="cn">外部協力者</div>
<div class="cr">航空業界の現場の方々</div>
<div class="cd">整備士・パイロット等。インタビュー機会は事務局経由で調整。</div>
</div>

</div>

<!-- 事務局がハブになって、教員・学生・企業の3者をつなぐ。連絡は基本Slack＋緊急時はメール。 -->

---

<!-- _class: divider -->

<div class="chapter-num">SECTION 1</div>

# プログラム全体像

## 6月〜9月の流れを把握する

<!-- ここから全体スケジュール。各フェーズの「いつ／何を／誰が」を5分で説明する。 -->

---

<!-- _class: planlist -->

<div class="page-title">全体スケジュール</div>

## 内部セッション 全11回（6月〜9月）

<div class="pl-list">

<div class="pl-row">
<div class="pl-when">6/5</div>
<div class="pl-tag pl-req">必須</div>
<div class="pl-what"><span class="pl-no">第1回</span>ガイダンス</div>
</div>

<div class="pl-row">
<div class="pl-when">6/9</div>
<div class="pl-tag pl-req">必須</div>
<div class="pl-what"><span class="pl-no">第2回</span>グループ分け・チームビルディング／仮説形成</div>
</div>

<div class="pl-row">
<div class="pl-when">TBD</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第3回</span>整備士インタビュー</div>
</div>

<div class="pl-row">
<div class="pl-when">TBD</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第4回</span>安全担当・管制経験者インタビュー</div>
</div>

<div class="pl-row">
<div class="pl-when">TBD</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第5回</span>航空貨物インタビュー</div>
</div>

<div class="pl-row">
<div class="pl-when">TBD</div>
<div class="pl-tag pl-req">必須</div>
<div class="pl-what"><span class="pl-no">第6回</span>中間発表・困りごと共有／プレゼンのコツ</div>
</div>

<div class="pl-row">
<div class="pl-when">8/5 or 8/7</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第7回</span>成田空港見学（2コマ分）</div>
</div>

<div class="pl-row">
<div class="pl-when">TBD</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第8回</span>プレゼンテーション・クリニック</div>
</div>

<div class="pl-row">
<div class="pl-when">8月後半</div>
<div class="pl-tag pl-req">必須</div>
<div class="pl-what"><span class="pl-no">第9回</span>進出グループ審査・相互フィードバック</div>
</div>

<div class="pl-row">
<div class="pl-when">8月末</div>
<div class="pl-tag pl-opt">任意</div>
<div class="pl-what"><span class="pl-no">第10回</span>代表チームをみんなで支援する回</div>
</div>

<div class="pl-row">
<div class="pl-when">9月中旬</div>
<div class="pl-tag pl-req">必須</div>
<div class="pl-what"><span class="pl-no">第11回</span>リフレクション・フェアウェル</div>
</div>

</div>

<!-- 必須5回・任意6回。日程TBDは順次確定し連絡。本日は第1回。任意回も検証には実質ほぼ必須。 -->

---

<!-- _class: split -->

<div class="page-title">デザインWS＋グループ分け</div>

## 6/9：解くべき問いを立てる

<div class="split-body">
<div class="left">

<div class="placeholder" style="border:2px dashed #0033A0;border-radius:10px;padding:48px 18px;text-align:center;color:#0033A0;font-weight:700;font-size:19px;background:#fff;">
[デザイン思考プロセス図<br>共感→定義→アイデア→試作→検証]
</div>

<div class="caption">図1. デザイン思考の5ステップ</div>

</div>
<div class="right">

### このフェーズで行うこと

- デザイン思考の基礎を短時間で体感する
- 航空業界のどんな課題を解くかをチームで議論
- 発表テーマ案を **暫定で1つ** 決める
- 関心領域に応じてグループ分けを最終調整

</div>
</div>

<div class="takeaway">「正解」ではなく「良い問い」を一緒に作る回</div>

<!-- 6/9のWSで暫定テーマを出す。以降のフェーズで何度でも修正可。 -->

---

<!-- _class: summary -->

<div class="page-title">課題案 検証・リバイズ</div>

## 7月〜8月上旬：現場に聞く・行く

<div class="sections">

<div class="sec-box">

### 自由参加のインタビュー（夕方）

- 7月上旬：航空整備士に尋ねてみよう
- 7月中旬：パイロットに尋ねてみよう
- 7月下旬：TBD（管制・客室・地上等）

</div>

<div class="sec-box">

### 成田空港フィールドワーク

- 8/5（水） または 8/7（金）
- 複数社の場合は両日開催の可能性あり
- 事前申込制／事務局が調整

</div>

</div>

<!-- 裏では各チームが自走で準備を進める。インタビュー機会は任意参加だが、検証にはほぼ必須。 -->

---

<!-- _class: summary -->

<div class="page-title">発表準備〜本選</div>

## 8月〜9月：仕上げ・選考・派遣

<div class="sections">

<div class="sec-box">

### 発表準備フェーズ（8月上旬〜）

- 松本先生によるスライドの作り方講義
- お盆明け直後：発表リハーサル・提出
- フィードバックを反映して仕上げ

</div>

<div class="sec-box">

### 学内選考・本選（8/20頃 → 9月上旬）

- 全員参加の学内選考＋相互フィードバック
- 本選派遣グループの確定（旅費要確認）
- 派遣後は **全員で派遣チームを支援**

</div>

</div>

<!-- 選考の採点基準・採点者・言語（日英）は別途決定。詳細は後日アナウンス。 -->

---

<!-- _class: message -->

# 詳細は田川先生から個別に説明します

## 各フェーズの運用・連絡・記録は順次共有

<!-- 全体像は以上。各フェーズの詳細手順（インタビューの申込方法、フィールドワーク当日の流れ等）は、その都度詳しく説明する。 -->

---

<!-- _class: divider -->

<div class="chapter-num">SECTION 2</div>

# 運用ツールの使い方

## 困ったとき・気づいたときの動線

<!-- 連絡フォームとslidoの2点を実際に開いて見せる。 -->

---

<!-- _class: howto -->

<div class="page-title">困ったときのフォーム</div>

## 連絡・相談はこの3ステップ

<div class="steps">

<div class="step">
<div class="num">STEP 1</div>
<div class="st">QRを読む</div>
<div class="sd">本日配布のQRコード／Slack固定メッセージのリンクからフォームを開く。</div>
</div>

<div class="step">
<div class="num">STEP 2</div>
<div class="st">種別を選ぶ</div>
<div class="sd">「相談」「日程変更」「グループ変更」「その他」から1つ選択。</div>
</div>

<div class="step">
<div class="num">STEP 3</div>
<div class="st">送信→24h内に返答</div>
<div class="sd">事務局が受付→担当教員にエスカレーション。原則24時間以内に返信。</div>
</div>

</div>

<div class="takeaway">「迷ったらまずフォーム」。後から判断OK。</div>

<!-- 実際にスマホでQRを読んで開いてもらう。送信テストは任意。 -->

---

<!-- _class: slido -->

<div class="page-title">関心テーマの確認</div>

## slidoで「気になる領域」を投票

<div class="slido-grid">

<div class="slido-left">

### slidoでこれから投票します

- コード／QRは画面に表示
- スマホで参加（匿名でOK）
- 複数選択可・自由記述あり
- 結果はその場でグループ分けに活用

</div>

<div class="placeholder">
[slido 投票画面<br>QRコードを掲示]
</div>

</div>

<!-- 関心領域：整備／運航／安全・管制／客室・サービス／地上・空港運営／IT・データ／その他（自由記述）。 -->

---

<!-- _class: divider -->

<div class="chapter-num">SECTION 3</div>

# グループ分けワークショップ

## 残り40分で仮グループを決める

<!-- ここから実際のWS。タイマー表示しながら進行。 -->

---

<!-- _class: timetable -->

<div class="page-title">本ワークショップの進行</div>

## タイムテーブル（40分）

| 時間 | 内容 |
|---|---|
| 0–10分 | 全員で自己紹介（1人1分以内） |
| 10–20分 | 全員で「行ってみたいこと」を共有 |
| 20–25分 | 関心領域を1つ決める（slido結果を確認） |
| 25–28分 | 班分け候補を確認（フォーム回答ベース） |
| 28–38分 | 各グループに分かれて顔合わせ |
| 38–40分 | リーダー決定・連絡手段の確立 |

<!-- 進行は田川先生。タイマーは画面共有で全員に見えるようにする。 -->

---

<!-- _class: ws -->

<div class="page-title">グループ分けの方針</div>

## 4ステップで仮決め

<div class="ws-flow">

<div class="wstep">
<span class="min">10分</span>
<div class="wt">① 自己紹介</div>
<div class="wm">名前・学部・「Boeing Extensionで何を得たいか」を1分で。</div>
</div>

<div class="wstep">
<span class="min">10分</span>
<div class="wt">② やってみたいこと</div>
<div class="wm">全員で行きたい場所・聞きたい職種・触れたい技術を共有。</div>
</div>

<div class="wstep">
<span class="min">5分</span>
<div class="wt">③ 関心領域を決める</div>
<div class="wm">slido結果＋フォームを見て、自分の優先1領域を選ぶ。</div>
</div>

<div class="wstep">
<span class="min">15分</span>
<div class="wt">④ グループ顔合わせ</div>
<div class="wm">仮グループに分かれてリーダー決定・連絡手段の合意。</div>
</div>

</div>

<div class="takeaway">グループは <b>将来的に変更可能</b>。まず動き出すことを優先。</div>

<!-- 検討：関心ベース or バックグラウンド別。今回はまず関心ベースで仮決め。 -->

---

<!-- _class: summary -->

<div class="page-title">グループの初動チェックリスト</div>

## 今日のうちに揃えること

<div class="sections">

<div class="sec-box">

### グループ運営

- リーダー1名を決める
- グループ名（仮）をつける
- 全員の連絡手段を交換（Slack / LINE 等）

</div>

<div class="sec-box">

### 次回までの宿題

- 自分が興味のある「問い」を3つ書き出す
- 6/9のデザインWSに **全員出席** で参加
- 困ったらフォームから事務局へ連絡

</div>

</div>

<!-- 「リーダー＝決定者」ではなく「連絡のハブ」。重荷にしないよう全員でサポート。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- 6月〜9月の全体像と各フェーズの目的を共有した
- 教員4名・事務局・外部協力者の役割を把握した
- 困ったときの連絡フォームとslidoの使い方を確認した
- 関心領域を選び、仮グループの顔合わせまで完了した
- 次回 **6/9 デザインWS** で課題テーマ案を出すのがゴール

<!-- 終わりに事務局から連絡事項。お疲れさまでした。 -->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問はこの場で／後からフォーム送信もOK
