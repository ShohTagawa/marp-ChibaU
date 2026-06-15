---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ第10回</div><img class="hdr-logo" src="../assets/logo-info-literacy.png">'
footer: ''
style: |
  :root {
    --hdr-left-w: 23%;
    --pt-width:   50%;
    --hdr-gap:   -4px;
    --pt-left: calc(var(--hdr-left-w) - var(--hdr-slant, 22px) + var(--hdr-gap));
  }
  section .page-title { left: var(--pt-left); width: var(--pt-width); }
  section > header .hdr-logo { height: 48px; margin-right: 12px; }
  section::after { left: 23px; right: auto; }
  section svg { max-width: 100%; height: auto; }
  .important { display:inline-block; background:#FBE0E0; color:#B11C1C; font-weight:700; font-size:19px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.14em; vertical-align:middle; border:1px solid #f0c4c4; }
  .cbox { border-radius:10px; overflow:hidden; background:#F6F7F9; margin:8px 0; border:1px solid #e7e7ea; }
  .cbox > .h { color:#3a3a3a; font-weight:700; padding:5px 16px; font-size:19px; background:#f1ecee; border-left:4px solid #b9b9b9; }
  .cbox > .b { padding:8px 16px 9px; font-size:18px; }
  .cbox.blue > .h { border-left-color:#3E78B2; } .cbox.green > .h { border-left-color:#3C8A57; } .cbox.orange > .h { border-left-color:#D98A2B; } .cbox.gray > .h { border-left-color:#6B6F76; } .cbox.red > .h { border-left-color:var(--accent); }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:2px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:21px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:24px; margin-top:8px; }
  .ask { background:#FAF3F4; border:1px solid #e6d2d6; border-radius:10px; padding:8px 16px 8px 50px; margin:8px 0; font-weight:700; font-size:19px; position:relative; }
  .ask::before { content:"？"; position:absolute; left:12px; top:50%; transform:translateY(-50%); width:26px; height:26px; line-height:26px; text-align:center; border-radius:50%; background:var(--accent); color:#fff; font-size:17px; }
  .ask.hand::before { content:"\270B"; background:#D98A2B; }
  .hl-pink { background:#FAE1E2; padding:0 4px; border-radius:3px; } .hl-yellow { background:#FBEFC8; padding:0 4px; border-radius:3px; } .hl-green { background:#DDEBC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:14px; color:#999; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .dtbl { border-collapse:collapse; font-size:17px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #c8c8c8; padding:4px 12px; text-align:center; }
  .dtbl th { background:var(--accent-soft); }
  .dtbl td.l { text-align:left; }
  svg .card { filter: drop-shadow(0 2px 3px rgba(0,0,0,.12)); }
  .src { font-size:13px; color:#9a9a9a; } .src a { color:#9a9a9a; }
  .episode { background:#FCEEF0; border-left:6px solid var(--accent); border-radius:8px; padding:8px 16px; margin:8px 0; font-size:19px; }
  .episode .h { font-weight:700; color:var(--accent); font-size:16px; letter-spacing:.04em; }
  /* ライブ授業用：Slido投票・体験デモ・安全注意 */
  .slido { background:#EAF3FB; border:2px solid #3E78B2; border-radius:10px; padding:6px 16px; margin:8px 0; font-size:18px; }
  .slido::before { content:"📊 Slido "; color:#3E78B2; font-weight:800; }
  .slido .q { font-weight:700; color:#23527a; }
  .live { background:#FFF6E5; border:2px solid #D98A2B; border-radius:10px; padding:6px 16px; margin:8px 0; font-size:18px; }
  .live::before { content:"🔬 体験 "; color:#D98A2B; font-weight:800; }
  .live .u { font-family:"Menlo","Consolas",monospace; font-size:15px; color:#23527a; }
  .safe { background:#FDECEC; border-left:6px solid #B11C1C; border-radius:6px; padding:5px 14px; margin:6px 0; font-size:15px; color:#7a1a1a; }
  .safe::before { content:"⚠ 安全 "; font-weight:800; }
  section.wrap ul { font-size:20px; }
  section.wrap ul li { margin:6px 0; line-height:1.4; padding-left:28px; }
  section.wrap .grid2 { gap:24px; }
  section.wrap .episode { font-size:18px; margin:6px 0; }
  /* 表紙レイアウト（cover-hero） */
  section.cover-hero { padding-top: calc(var(--header-h) + 50px); --hdr-left-w: 23%; }
  section.cover-hero > header::after { left: 0; right: 0; }
  section.cover-hero .title-hero { text-align: center; margin-bottom: 50px; }
  section.cover-hero .title-small { font-size: 38px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
  section.cover-hero .title-big { font-size: 70px; font-weight: 800; line-height: 1.2; letter-spacing: 0.02em; }
  section.cover-hero .title-foot { display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center; padding: 0 60px; }
  section.cover-hero .title-photo { width: 220px; height: 220px; border-radius: 50%; overflow: hidden; background: #ffffff; border: 3px solid #D9EAD3; display: flex; align-items: center; justify-content: center; color: #777; font-size: 16px; }
  section.cover-hero .title-photo img { width: 84%; height: 84%; object-fit: contain; }
  section.cover-hero .title-meta { font-size: 25px; line-height: 1.7; text-align: center; }
  section.cover-hero .title-event { color: #e65100; font-weight: 700; margin-bottom: 14px; }
  section.cover-hero .title-affil { margin-top: 8px; }
---


<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">情報リテラシ 第10回 ／ 対面（小テストの回）</div>
<div class="title-big">情報倫理と<br>セキュリティ</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/logo-info-literacy-icon.svg" alt="情報リテラシー">
</div>
<div class="title-meta">
<div class="title-event">23 & 24クラス<br>（医工学 ／ 都市環境システム ／ 応用化学）</div>
<div class="title-affil">担当：千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）<br><span style="font-size:18px;color:#888">2026-06-16（火4）</span></div>
</div>
</div>

<!-- 対面回。第8回(ネットワーク)・第9回(応用)に続く最終対面。前半=他者の権利を守る「倫理」、後半=自分の身を守る「認証・セキュリティ」。スマホを使う活動が多いので、最初の数分でSlido接続を全員に試させる。 -->

---

<!-- _class: split -->

<div class="page-title">今日の進め方</div>

## 90分の設計 ── テスト → 倫理 → 守る、を一本で

<div class="split-body">
<div class="left">

<table class="dtbl" style="width:100%; font-size:16px; line-height:1.3">
<tr><th>時間</th><th>内容</th></tr>
<tr><td class="mono">0–15</td><td class="l"><span class="red">小テスト</span>（第8回・記名）</td></tr>
<tr><td class="mono">15–45</td><td class="l"><strong>第1部 情報倫理</strong><br>中傷／プライバシー／広告／著作権／炎上</td></tr>
<tr><td class="mono">45–73</td><td class="l"><strong>第2部 認証＝本人確認</strong><br>パスワード／フィッシング／2要素認証</td></tr>
<tr><td class="mono">73–75</td><td class="l">まとめ・今夜やること</td></tr>
<tr><td class="mono">予備</td><td class="l">認証の図解・体験クイズ</td></tr>
</table>

</div>
<div class="right">

<div class="callout-blue">📱 今日はみんなに参加してもらいます</div>

- <span class="hl">Slido</span> で匿名投票・経験シェア（右上のQR・コードはずっと表示）
- 「<span class="hl">挙手</span>」「<span class="hl">隣と1分</span>」も時々します
- スマホが無い／繋がらない人は<span class="hl">隣と1台でOK</span>

<div class="ask hand">まず練習。Slidoに繋いで、最初の投票に答えてみましょう。</div>

</div>
</div>

<div class="takeaway">前半は「他人を傷つけない」、後半は「自分を守る」。テストは最初に。</div>

<!-- 全体地図。小テストは冒頭固定（採点の裏でSlido起動＝死に時間ゼロ）。QRは入室時から最後まで右隅に常時表示。回答は7割で締めて結果を一気に開くと盛り上がる。 -->

---

<!-- _class: split -->

<div class="page-title">最初に小テスト</div>

## まず15分、第8回（ネットワーク）の小テスト

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">範囲・形式</div><div class="b">

- 範囲は<span class="hl">第8回だけ</span>（TCP/IP・IPアドレス・DNS・暗号・Wi-Fi 等）
- オンデマンド回の<span class="hl">理解確認</span>＋期末の練習
- <span class="hl">記名</span>・個人で・15分
- 提出は Moodle（または配布のマークシート）

</div></div>

<div class="band" style="font-size:18px">終わった人から見直し。回収後すぐ第1部に入ります。</div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">心がまえ</div><div class="b">

- 用語の<span class="red">丸暗記</span>でなく「<span class="hl">URL→表示の旅</span>」で思い出す
- 分からない問題は飛ばして先へ
- スマホ・資料は<span class="red">closed</span>（本物の力試し）

</div></div>

<div class="statement" style="font-size:20px">この小テストが成績。<br>後半のSlidoクイズは「遊び」で成績無関係。</div>

</div>
</div>

<!-- 小テスト本体はMoodle/マークシートで配布（問題と解答は本デック末尾の教員用付録に8問用意）。第8回はオンデマンドだったので、対面のこの回で定着を確認する位置づけ。採点の裏でSlido(あるある投票)を起動しておく。 -->

---

<!-- _class: split -->

<div class="page-title">安心して話せる場に</div>

## 今日の「安全の約束」── 失敗談、歓迎します

<div class="split-body">
<div class="left">

<div class="episode"><div class="h">先に私の失敗から</div>正直に言うと、私も学生の頃「アカウント停止のお知らせ」メールを信じて、ID・パスワードを<span class="hl">入れかけた</span>ことがあります。あと一歩で乗っ取られるところでした。</div>

<div class="statement" style="font-size:21px">「うっかり」は誰にでもある。<br>だから安心して出し合いましょう。</div>

</div>
<div class="right">

<div class="cbox red"><div class="h">安全の約束（4つ）</div><div class="b">

1. 自分の話でも<span class="hl">友だち・家族から聞いた話でもOK</span>
2. 個人が特定できる情報・実名・<span class="red">本物のパスワードは書かない／言わない</span>
3. 話したくないことは<span class="hl">話さなくていい</span>（聞き役歓迎）
4. ここの話は<span class="hl">この教室限り・成績に無関係</span>

</div></div>

<div class="safe">深刻な被害の相談は授業後でも。窓口＝情報部門／学生相談／警察 #9110。</div>

</div>
</div>

<!-- 経験シェアの心理的安全性をつくる土台スライド。教員の自己開示→ハードルを下げてから、すぐ次のあるある投票へ。失敗談は「被害が小さく・落ちがあり・誰も傷つけない」もので。 -->

---

<!-- _class: split -->

<div class="page-title">あなたはどう？</div>

## いままで「ヒヤッ」とした経験は？（匿名投票）

<div class="split-body">
<div class="left">

<div class="slido"><span class="q">あてはまるもの、ぜんぶ選んで（匿名・複数OK）</span></div>

<div class="cbox gray"><div class="b" style="font-size:17px">

- 迷惑メール・SMSが届いた
- そのリンクを<span class="hl">開いた</span>
- フィッシングに<span class="red">騙されかけた／入力しかけた</span>
- パスワードを<span class="red">使い回している</span>
- 乗っ取り・不正ログイン通知が来た
- ワンクリック／架空請求の画面が出た
- SNSの炎上・トラブルを間近で見た
- ── どれも経験なし

</div></div>

</div>
<div class="right">

<div class="band">結果のバーを見せて一言：<br>「<span class="hl">“被害ゼロ”はむしろ少数派</span>」。</div>

<div class="cbox blue"><div class="h">受け方</div><div class="b">

- 「誰が押したかは出ません」と<span class="hl">先に保証</span>
- いちばん多い項目を<span class="hl">本編の入口</span>に（多くはフィッシング系→第2部へ橋渡し）
- 責めるためでなく、リスクが<span class="hl">“普通”</span>だと知るための調査

</div></div>

<div class="ask hand">いちばん多かった経験、心当たりある人？</div>

</div>
</div>

<!-- 90秒で全員参加。複数選択で「自分も」が連鎖し当事者意識が立ち上がる。「どれも経験なし」を必ず入れ未経験者を疎外しない。割合のみ表示。最多項目を宣言して構成に接続。 -->

---

<div class="page-title">いまの社会</div>

## 私たちの生活は「ネットの上」に乗っている

<div class="grid3">
<div class="cbox blue"><div class="h">大学・家庭</div><div class="b">

- Moodle・学生ポータル・図書館
- スマホ／IP電話／ビデオ会議
- ネット通販・ネットバンキング・電子マネー
- SNS・ライブ配信

</div></div>
<div class="cbox green"><div class="h">職場・行政</div><div class="b">

- POS・オフィス／工場の自動化
- 在宅勤務（SOHO）
- 電子政府・マイナンバー
- <span class="hl">マイナ保険証</span>（紙の保険証は2025/12失効）

</div></div>
<div class="cbox orange"><div class="h">クラウド任せ</div><div class="b">

- 写真・文書はクラウド保存が当たり前
- でも<span class="red">突然消える／漏れる</span>ことも
- <span class="hl">重要データはバックアップ</span>

</div></div>
</div>

<div class="band">便利さの裏に、今日学ぶ「<span class="red">倫理</span>（他人を傷つけない）」と「<span class="red">セキュリティ</span>（自分を守る）」が全部ぶら下がっている。</div>

<div class="takeaway">この1つが今日止まったら？ ── 依存しているからこそ、守り方を知る。</div>

<!-- 範囲A(社会で使われる情報技術)を独立章にせず1枚で圧縮。あるある投票の「クラウド依存」を受けて、便利さ→裏側へ橋渡し。マイナ保険証は身近な「デジタル化×個人情報」の例として軽く。 -->

---

<!-- _class: divider -->

<div class="chapter-num">PART 1 ／ 情報倫理</div>

# 第1部　情報倫理

## 他人の権利を傷つけない ── 中傷・プライバシー・著作権

<!-- 前半は「他者の権利」。匿名性が倫理を抜けさせやすいこと、そして2025-2026に法律が大きく動いたことを軸に。 -->

---

<!-- _class: split -->

<div class="page-title">2つの「リテラシ」</div>

## 情報リテラシ と 情報倫理 は別もの

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">情報リテラシ＝活用する力</div><div class="b">情報機器やネットワークを<span class="hl">使いこなす</span>基本的な能力。第8・9回で学んだ「しくみ」もこれ。</div></div>

<div class="cbox red"><div class="h">情報倫理＝守るべきモラル</div><div class="b">情報社会で必要な<span class="hl">道徳・モラル</span>。<br>① 誹謗中傷をしない ② プライバシーを侵さない ③ 著作権を侵さない</div></div>

</div>
<div class="right">

<div class="band">ネットの<span class="red">匿名性</span>は、倫理観を<span class="red">抜けさせやすい</span>。<br>「画面の向こうにも人がいる」。</div>

<div class="ask">「使える」だけでは足りない。<strong>使い方の作法</strong>を、一人ひとりが自覚して行動する。</div>

<div class="statement" style="font-size:20px">技術は中立。<br>善くも悪くも「使う人」しだい。</div>

</div>
</div>

<div class="takeaway">リテラシ（使う力）＋ 倫理（傷つけない作法）＝ 両輪。</div>

<!-- 定義の対比。原版スライド9の核。匿名性ゆえに倫理が抜けやすい→各自の自覚、という流れで第1部全体の前提を置く。 -->

---

<!-- _class: split -->

<div class="page-title">中傷と法律</div>

## 軽い1行が罪になる ── 侮辱罪・名誉毀損

<div class="split-body">
<div class="left">

<div class="slido"><span class="q">法的に“アウト”になりうるのはどれ？（複数OK）まず1人→隣と1分</span></div>

<table class="dtbl" style="width:100%; font-size:16px; line-height:1.3">
<tr><th>　</th><th>投稿</th></tr>
<tr><td class="red">A</td><td class="l">この店、二度と行かない。最悪</td></tr>
<tr><td class="red">B</td><td class="l">店長◯◯は客をだます詐欺師だ</td></tr>
<tr><td class="red">C</td><td class="l">◯◯（個人名）はキモいから消えろ</td></tr>
<tr><td class="red">D</td><td class="l">△△の意見には賛成できない</td></tr>
</table>

<div class="band" style="font-size:17px">A・D＝<span class="hl">感想・意見</span>は原則セーフ。<br>B・C＝特定個人への<span class="red">摘示・侮辱</span>がアウト。</div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">侮辱罪（刑法231条）</div><div class="b"><span class="hl">事実を示さず</span>公然と人を侮辱。<br>2022.7.7<span class="red">厳罰化</span>：拘留・科料 → <span class="red">1年以下の拘禁刑／30万円以下の罰金</span>、時効1年→<span class="red">3年</span>。</div></div>

<div class="cbox blue"><div class="h">名誉毀損罪（刑法230条）</div><div class="b"><span class="hl">事実を示して</span>評価を下げる。3年以下の拘禁刑／50万円以下の罰金。</div></div>

<div class="band" style="font-size:17px">2025.6.1〜「懲役・禁錮」は<span class="red">拘禁刑</span>に一本化（刑法制定以来初）。</div>

</div>
</div>

<div class="takeaway">「みんな言ってる」「1リプだけ」でも当事者。前科になりうる。</div>

<!-- 原版スライド9-10を2026年版に更新。Slido線引きクイズ→法令へ。拘禁刑への一本化(2025.6.1)は原版に無い重要更新。B・Cが集まり、Aを誤ってアウト視しがち。 -->

---

<!-- _class: split -->

<div class="page-title">中傷への対処</div>

## 「消して」「誰が書いた？」が、法で動くようになった

<div class="split-body">
<div class="left">

<svg viewBox="0 0 460 300" width="100%" style="max-height:300px">
  <defs><marker id="ar1" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#A6192E"/></marker></defs>
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="20" y="30" width="130" height="56" rx="9" fill="#FDECEC" stroke="#A6192E" stroke-width="2.5"/><text x="85" y="54" font-weight="700" fill="#7d1322">中傷の投稿</text><text x="85" y="74" fill="#555" font-size="13">被害が発生</text>
    <path d="M150,58 L195,58" stroke="#A6192E" stroke-width="2.5" marker-end="url(#ar1)"/>
    <rect class="card" x="198" y="22" width="150" height="72" rx="9" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="273" y="46" font-weight="700">大手SNS事業者</text><text x="273" y="66" fill="#555" font-size="13">Google / LINEヤフー</text><text x="273" y="82" fill="#555" font-size="13">Meta / TikTok 等</text>
    <path d="M273,94 L273,140" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#ar1)"/>
    <rect class="card" x="150" y="144" width="250" height="50" rx="9" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="275" y="166" font-weight="700" fill="#2d6a44">削除対応の迅速化・運用の透明化</text><text x="275" y="184" fill="#555" font-size="13">情プラ法で「義務」に（2025.4施行）</text>
    <path d="M85,86 L85,218" stroke="#A6192E" stroke-width="2.5" marker-end="url(#ar1)"/>
    <rect class="card" x="18" y="222" width="200" height="56" rx="9" fill="#FDECEC" stroke="#A6192E" stroke-width="2"/><text x="118" y="246" font-weight="700" fill="#7d1322">発信者情報開示命令</text><text x="118" y="266" fill="#555" font-size="13">「誰が書いたか」を特定できる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">情プラ法（2025.4.1施行）</div><div class="b">旧「<span class="hl">プロバイダ責任制限法</span>」を改称・強化。大手SNSに<span class="hl">削除の迅速化・運用の透明化</span>を義務付け。<br><span class="attr">正式名：情報流通プラットフォーム対処法</span></div></div>

<div class="cbox orange"><div class="h">発信者情報開示命令</div><div class="b">被害者は手続きで<span class="red">投稿者を特定</span>できる。「匿名だからバレない」は<span class="red">通用しない</span>。</div></div>

<div class="ask">「軽い気持ち」の1投稿が、開示請求で<strong>実名にたどり着く</strong>。</div>

</div>
</div>

<div class="takeaway">いまや中傷は「消す・特定する」が法律で後押しされている。</div>

<!-- 2026年の最重要アップデート。原版は「プロバイダ責任制限法」だが、2025.4.1に情プラ法へ改称・強化。発信者情報開示命令(2022新設)とセットで「匿名でも特定される」を伝える。 -->

---

<!-- _class: split -->

<div class="page-title">プライバシー</div>

## バラバラの情報が「組み合わさって」個人を指す

<div class="split-body">
<div class="left">

<div class="live">写真をドロップ → 地図に撮影地点ピン<br><span class="u">onlineexifviewer.com</span>（教員PCで・先生の無害なサンプル写真）</div>

<div class="cbox gray"><div class="h">なぜ場所が割れる？</div><div class="b">写真には<span class="hl">EXIF</span>（GPS座標・日時・機種）が埋め込まれる。文字情報ゼロの1枚から、<span class="red">自宅・学校が特定</span>される。</div></div>

<div class="safe">学生に“自分の”位置情報付き自撮りはアップさせない。先生のサンプルでデモ。</div>

</div>
<div class="right">

<div class="slido"><span class="q">ネットに出してもいい順に並べて（上＝OK）</span><br>ニックネーム／顔写真／本名／大学／位置情報／サークル</div>

<div class="cbox red"><div class="h">組み合わせると特定できる</div><div class="b">

- 大学＋サークル＋顔写真＝<span class="red">もう割れる</span>
- 研究室HPの実名・写真は<span class="hl">慎重に</span>
- 私的SNSのニックネームを公的Webで使うと<span class="hl">本名と紐づく</span>

</div></div>

<div class="ask hand">自分が写った集合写真、友だちが勝手に投稿…OK？</div>

</div>
</div>

<div class="takeaway">投稿前の合言葉＝「これ、写ってる全員OK？」責任は他人の分まで及ぶ。</div>

<!-- 原版スライド11(参加と責任)＋目玉デモEXIF(wow10)。「個人情報の結合で特定される」の山場を実演が担う。Slidoランキングで顔写真の票割れ(SNS慣れ層と慎重層)を可視化。 -->

---

<!-- _class: split -->

<div class="page-title">追いかける広告</div>

## 追いかけてくる広告の正体 ── Cookieと外部送信

<div class="split-body">
<div class="left">

<svg viewBox="0 0 460 250" width="100%" style="max-height:250px">
  <defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#D98A2B"/></marker></defs>
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="20" y="30" width="120" height="60" rx="9" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="80" y="54" font-weight="700">あるサイト</text><text x="80" y="74" fill="#555" font-size="13">商品を見る</text>
    <path d="M140,60 L185,60" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#ar2)"/><text x="162" y="48" font-size="12" fill="#a86b1e">閲覧履歴</text>
    <rect class="card" x="188" y="26" width="130" height="68" rx="9" fill="#FCE3C7" stroke="#D98A2B" stroke-width="2.5"/><text x="253" y="50" font-weight="700" fill="#8a5a14">広告会社</text><text x="253" y="70" fill="#555" font-size="13">あなたを記憶</text><text x="253" y="86" fill="#555" font-size="12">（Cookie）</text>
    <path d="M318,60 L363,60" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#ar2)"/>
    <rect class="card" x="340" y="30" width="110" height="60" rx="9" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="395" y="54" font-weight="700">別サイト</text><text x="395" y="74" fill="#A6192E" font-size="13">同じ広告が表示</text>
    <rect class="card" x="120" y="150" width="260" height="64" rx="10" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="250" y="176" font-weight="800" font-size="16" fill="#7d1322">Cookie＝「同じ人」を覚える合言葉</text><text x="250" y="200" fill="#555" font-size="14">閲覧履歴が外部に送られ、追ってくる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="slido"><span class="q">Cookie同意バナー、いつもどうしてる？</span><br>A:読んで選ぶ／B:とりあえず全部同意／C:拒否や×を探す／D:気にしない</div>

<div class="cbox orange"><div class="h">外部送信規律（電気通信事業法・2023.6.16）</div><div class="b">Cookieや閲覧履歴を外部に送る時、<span class="hl">内容・送信先・目的を通知または公表</span>する義務。<br><span class="red">※EUと違い「事前同意（オプトイン）必須」ではない</span>。</div></div>

<div class="band" style="font-size:17px">「すべて同意」が目立ち「拒否」が探しにくい＝<span class="red">ダークパターン</span>。押す前に一拍。</div>

</div>
</div>

<div class="takeaway">これは倫理（勝手に渡る）と技術（追跡）の接点。次は「だから守る」。</div>

<!-- 原版★重点。同意疲れ(consent fatigue)を言語化し、外部送信規律を正しく「通知・公表義務」と伝える(同意必須ではない)。挙手で「直前に見た商品が別サイト広告で追ってきた経験」→正体がこれ→後半=身を守る話へ折り返す。 -->

---

<!-- _class: split -->

<div class="page-title">著作とAI</div>

## レポートで ── 引用？ 剽窃？ AI丸写し？

<div class="split-body">
<div class="left">

<div class="slido"><span class="q">“絶対アウト”を1つ選んで（理由も一言）</span></div>

<table class="dtbl" style="width:100%; font-size:15px; line-height:1.3">
<tr><th>　</th><th>やったこと</th><th>判定</th></tr>
<tr><td>A</td><td class="l">本の一文を「」と出典付きで引用</td><td class="hl-green">OK</td></tr>
<tr><td>B</td><td class="l">Webをコピペし語尾だけ変える</td><td class="red">剽窃</td></tr>
<tr><td>C</td><td class="l">AIの文をそのまま自分の文として提出</td><td class="red">不正</td></tr>
<tr><td>D</td><td class="l">AIに構成を相談し自分で書く</td><td class="hl-green">多くは可</td></tr>
</table>

<div class="band" style="font-size:17px">D＝壁打ちは多くの授業でOK。<br><span class="red">ただし各授業のAI利用ルールは担当教員の指示が最優先</span>。</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">引用の要件（著作権法32・48条）</div><div class="b">① 引用は<span class="hl">「従」</span>（自分の文が主） ② <span class="hl">正当な範囲</span>・本文と明瞭に区別 ③ <span class="hl">出所明示</span></div></div>

<div class="cbox orange"><div class="h">生成AIは「相棒」で「代筆屋」でない</div><div class="b"><span class="red">ハルシネーション</span>あり。出典は必ず自分で確認。<br><span class="attr">文化庁『AIと著作権に関する考え方』(2024)</span></div></div>

<div class="cbox gray"><div class="h">DRM・ソフトの利用</div><div class="b">ダビング10・CPRM、配信はWidevine等。<span class="red">不正なソフト／ツールは使わない</span>（多額の損害賠償）。</div></div>

</div>
</div>

<div class="takeaway">「使う」と「奪う」は別。引用は従・出所明示、AIは相棒。</div>

<!-- 原版スライド13-14(著作と利用・DRM)＋生成AI時代の論点。Slidoの“絶対アウト”でCに票が割れる(「バレなきゃいい」)→丸写しは不正と確認。DRMは軽く触れて詳細は発展へ。 -->

---

<!-- _class: split -->

<div class="page-title">炎上のしくみ</div>

## 消したつもりは、消えていない

<div class="split-body">
<div class="left">

<svg viewBox="0 0 440 280" width="100%" style="max-height:280px">
  <defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#999"/></marker></defs>
  <g font-size="14" text-anchor="middle">
    <circle class="card" cx="70" cy="60" r="34" fill="#fff" stroke="#3E78B2" stroke-width="2.5"/><text x="70" y="56" font-weight="700" font-size="13">あなた</text><text x="70" y="74" fill="#555" font-size="12">50人</text>
    <line x1="104" y1="55" x2="150" y2="35" stroke="#999" stroke-width="1.5" marker-end="url(#ar3)"/>
    <line x1="104" y1="62" x2="150" y2="80" stroke="#999" stroke-width="1.5" marker-end="url(#ar3)"/>
    <line x1="104" y1="70" x2="150" y2="125" stroke="#999" stroke-width="1.5" marker-end="url(#ar3)"/>
    <circle cx="172" cy="32" r="16" fill="#FCE3C7" stroke="#D98A2B" stroke-width="1.8"/><text x="172" y="37" font-size="12">RP</text>
    <circle cx="172" cy="82" r="16" fill="#FCE3C7" stroke="#D98A2B" stroke-width="1.8"/><text x="172" y="87" font-size="12">RP</text>
    <circle cx="172" cy="130" r="16" fill="#FCE3C7" stroke="#D98A2B" stroke-width="1.8"/><text x="172" y="135" font-size="12">RP</text>
    <line x1="188" y1="32" x2="230" y2="24" stroke="#999" stroke-width="1.2" marker-end="url(#ar3)"/>
    <line x1="188" y1="82" x2="230" y2="70" stroke="#999" stroke-width="1.2" marker-end="url(#ar3)"/>
    <line x1="188" y1="130" x2="230" y2="150" stroke="#999" stroke-width="1.2" marker-end="url(#ar3)"/>
    <ellipse class="card" cx="300" cy="90" rx="90" ry="46" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="300" y="84" font-weight="800" font-size="18" fill="#7d1322">数万人へ</text><text x="300" y="108" fill="#555" font-size="13">上限は理論上「全世界」</text>
    <rect class="card" x="120" y="200" width="280" height="58" rx="10" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="260" y="224" font-weight="700" font-size="15">スクショで永久保存</text><text x="260" y="244" fill="#A6192E" font-size="13">削除・鍵アカも無関係に残る＝デジタルタトゥー</text>
  </g>
</svg>

</div>
<div class="right">

<div class="slido"><span class="q">フォロワー50人・鍵なしで軽い冗談を1回。最大で何人に届く？</span><br>A:〜50／B:〜500／C:〜5,000／D:数万以上</div>

<div class="cbox red"><div class="h">SNSの心得</div><div class="b">

- 誤解を招かない<span class="hl">十分な情報</span>を添える
- 私的なやりとりの<span class="red">暴露はNG</span>
- スクショは“証拠”に見えて<span class="hl">切り取りのバイアス</span>

</div></div>

<div class="ask">予想で投票→拡散の図を見せて→<strong>もう一度同じ投票</strong>（Dが増える＝理解の可視化）。</div>

</div>
</div>

<div class="takeaway">投稿前に「知らない数万人に・スクショされても大丈夫？」</div>

<!-- 原版スライド15(SNSの心得)。予想→検証で「自分のフォロワーまででしょ」を裏切る。デジタルタトゥー＋情プラ法で「消す・特定する」が法制化された現在地を示す。 -->

---

<!-- _class: split -->

<div class="page-title">なりすまし</div>

## その「顔写真」、本物とは限らない時代

<div class="split-body">
<div class="left">

<div class="live">2枚の顔「どっちが本物？」を当てる<br><span class="u">whichfaceisreal.com</span>（教員PC投影＋挙手 or Slido投票）</div>

<div class="cbox gray"><div class="h">やり方</div><div class="b">

- 2枚を見せて「左が本物？右が本物？」で投票
- 割れたところで<span class="red">正解開示</span>を3〜4問
- 見分け：背景の歪み・耳/イヤリングの非対称・髪の溶け込み

</div></div>

</div>
<div class="right">

<div class="band">人間の正答率は<span class="red">約48％＝ほぼ偶然並み</span>。<br>「見た＝本物」の直感は、もう崩れている。</div>

<div class="cbox red"><div class="h">だから注意</div><div class="b">

- なりすましアカウントの<span class="hl">プロフィール画像</span>
- SNSの<span class="hl">著名人なりすまし投資広告</span>
- AI生成の<span class="hl">フェイク画像・動画</span>

</div></div>

<div class="ask">「写真があるから本当」ではない。<strong>出どころ</strong>を確かめる。</div>

</div>
</div>

<div class="takeaway">顔も声も作れる時代。情報は「内容」でなく「出どころ」で確かめる。</div>

<!-- 目玉デモ(wow9)。ディープフェイク・なりすまし・ファクトチェックの導入。学生自身や身近な人の顔写真は使わせない（匿名データセットのサイトのみ）。第1部のオチとして「出どころ確認」を置き、第2部「本人確認＝認証」へ橋渡し。 -->

---

<!-- _class: divider -->

<div class="chapter-num">PART 2 ／ セキュリティ</div>

# 第2部　認証 ＝ 本人確認

## ここからは「自分を守る」── パスワード・フィッシング・2要素認証

<!-- 後半は「自分の身を守る」。第1部の「出どころを確かめる」から「あなたを“あなた”と確かめる＝認証」へ自然に接続。 -->

---

<!-- _class: split -->

<div class="page-title">パスワード</div>

## パスワード＝合言葉。盗む手口は4つ

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">パスワードはダイヤル錠と同じ</div><div class="b">

- <span class="red">工場出荷時のまま</span>＝最初から開いている
- <span class="red">覚えやすい番号</span>（誕生日）＝推測される
- <span class="red">メモを貼る</span>＝鍵の在りかを教えている

</div></div>

<div class="ask">便利さと安全はトレードオフ。<strong>「覚えやすい」は「破られやすい」</strong>。</div>

</div>
<div class="right">

<div class="cbox red"><div class="h">パスワードを盗む4つの手口</div><div class="b">

1. <span class="hl">推測・辞書攻撃</span>（よくある語を片端から）
2. <span class="hl">ソーシャルエンジニアリング</span>（人をだます）
3. <span class="hl">スニッフィング</span>（通信盗聴・画面/メモリ覗き見）
4. <span class="hl">フィッシング</span>（偽ログイン画面に入力させる）

</div></div>

<div class="band" style="font-size:17px"><span class="red">③と④は別もの</span>。盗聴（スニッフィング）と偽サイト誘導（フィッシング）を混同しない。</div>

</div>
</div>

<div class="takeaway">「銀行員でも暗証番号は聞きません」── 人もだまされる。</div>

<!-- 原版スライド17-18。ダイヤル錠の比喩(原版踏襲)。重要な正確性ルール：スニッフィング≠フィッシングを並列の別手口として書く（原版の分類どおり）。次スライドでフィッシングを体験させる。 -->

---

<!-- _class: split -->

<div class="page-title">フィッシング体験</div>

## 本物？ 偽物？ ── 自分の目を試す

<div class="split-body">
<div class="left">

<div class="live">メールが本物か偽物かを見分けるクイズ<br><span class="u">phishingquiz.withgoogle.com</span>（ログイン不要・QR配布）</div>

<div class="cbox gray"><div class="h">進め方</div><div class="b">

1. 名前・メールは<span class="red">ダミーで</span>（例 <span class="mono">test@example.com</span>）
2. 最初の1〜2問はみんなで投票
3. <span class="hl">送信元・URL・ボタンの飛び先</span>を矢印で種明かし
4. 残りは各自→「何問正解？」を挙手

</div></div>

<div class="safe">入力欄に本物の名前・メール・パスワードは絶対に入れない。本番のメールはリンクを踏まない。</div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">サポート詐欺も体験（IPA公式）</div><div class="b">偽の警告画面（全画面・ビープ音）→ <span class="hl">ESC長押しで閉じる</span>。<br><span class="u" style="font-family:monospace;font-size:14px">ipa.go.jp/security/anshin/…/fakealert.html</span></div></div>

<div class="band">「電話して」と<span class="red">焦らせる</span>のが手口。本物のOS/メーカーは警告画面に電話番号を出さない。</div>

<div class="ask">生成AIで“自然な日本語”の偽メールが量産される今、<strong>「日本語が変だから偽物」はもう通用しない</strong>。</div>

</div>
</div>

<div class="takeaway">見分け力は過信しがち。だから「2要素認証」で多重に守る（次へ）。</div>

<!-- ★看板1：フィッシング体験。Jigsawクイズ(実在・ログイン不要)＋IPA偽警告(日本語公式・約2分自動終了・PC専用)。当日朝に言語切替の実機確認。「正規だと思ったのに偽物」で驚き→認証の多重化へ。 -->

---

<!-- _class: split -->

<div class="page-title">強いパスワード</div>

## 複雑さより「長さ」── そして使い回さない

<div class="split-body">
<div class="left">

<div class="live">解読にかかる時間を実演<br><span class="u">security.org/how-secure-is-my-password</span>（教員PC・ダミー値のみ）</div>

<table class="dtbl" style="width:100%; font-size:16px">
<tr><th>例</th><th>解読時間</th></tr>
<tr><td class="mono l">password</td><td class="red">数秒</td></tr>
<tr><td class="mono l">P@ssw0rd</td><td>数時間</td></tr>
<tr><td class="mono l">correct-horse-…</td><td class="hl-green">数兆年</td></tr>
</table>

<div class="safe">学生に本物のパスワードは打たせない。教員PCでダミー値のみ、終わったらタブを閉じる。</div>

</div>
<div class="right">

<div class="cbox green"><div class="h">推測しにくいパスワードの作り方</div><div class="b">

- 文字種を多く＋<span class="hl">10文字以上</span>（長さが効く）
- <span class="hl">コアパスワード</span>＝日本語フレーズを変換<br>「リンゴが好き」→ <span class="mono">ringogasuki</span>
- サービスごとに識別子を付加<br>A銀行→ <span class="mono">ringogasukiA-GIN</span>

</div></div>

<div class="band" style="font-size:18px">1か所漏れると他も次々試される＝<span class="red">パスワードリスト攻撃</span>。<span class="hl">使い回さない</span>。</div>

</div>
</div>

<div class="takeaway">覚えるのは1個でいい ── パスワードマネージャーに任せる。</div>

<!-- 原版スライド19＋目玉デモ(解読時間,wow9)。前方投影だけで完結する保険デモ。「複雑な記号より長さ」を桁違いの数字で体感。コアパスワード＋サービス識別子はIPA読本。 -->

---

<!-- _class: fig -->

<div class="page-title">認証の3要素</div>

## 「あなた」を確かめる3つの手がかり

<div class="fig-area" style="min-height:0">

<div class="grid3" style="width:100%">
<div class="cbox blue"><div class="h">① 知識（知っている）</div><div class="b">パスワード・PIN・暗証番号<br><span class="attr">○安く実装／✕漏れる・忘れる</span></div></div>
<div class="cbox green"><div class="h">② 所持（持っている）</div><div class="b">スマホ・確認コード・トークン・ICカード<br><span class="attr">○複製が難しい／✕紛失リスク</span></div></div>
<div class="cbox orange"><div class="h">③ 生体（その人自身）</div><div class="b">指紋・顔(Face ID)・虹彩・声紋<br><span class="attr">○持ち運び不要／✕本人拒否・偽造(リプレイ)</span></div></div>
</div>

</div>

<div class="band">この<span class="red">異なる2つ</span>を組み合わせる＝<span class="red">2要素認証（2FA）</span>。パスワードが漏れても、もう1つの壁で止まる。</div>

<div class="takeaway">知識＋所持＋生体。2つ重ねれば、1つ破られても入られない。</div>

<!-- 原版スライド20-22(認証ファクタ・バイオメトリック)をgrid3で1枚に集約。生体の弱点(本人拒否・リプレイ攻撃)も明記。トークン/OTP/チャレンジレスポンスの図解は発展(予備)へ退避。 -->

---

<!-- _class: split -->

<div class="page-title">今夜やること</div>

## 帰ったら、5分でできる最強の自衛

<div class="split-body">
<div class="left">

<div class="slido"><span class="q">正直に。あなたのパスワード、当てはまるのは？（匿名・複数OK）</span><br>A:使い回している／B:誕生日・名前入り／C:<span class="mono">password</span>等を使ったことがある／D:サービスごとに違う＆長い</div>

<div class="band" style="font-size:18px">匿名だから言うと、たぶん<span class="red">Aがいちばん多い</span>。気持ちは分かる、覚えられないから。</div>

</div>
<div class="right">

<div class="cbox red"><div class="h">今夜の宿題（無料・5分）</div><div class="b">

1. 大学ポータルとSNSの<span class="hl">2要素認証をON</span>
2. 使い回しのパスワードを<span class="hl">1つだけ</span>直す<br>（パスフレーズ＋サービス識別子）

</div></div>

<div class="ask hand">パスワードマネージャーを使っている人？（使えば覚えるのは1個）</div>

<div class="statement" style="font-size:20px">パスワード＝部屋の鍵。<br>初期値・使い回しは「鍵の在りか」を教えるのと同じ。</div>

</div>
</div>

<div class="takeaway">今夜、2要素認証をON。無料で・5分で・いますぐできる。</div>

<!-- ★Slido(匿名必須)。「これは完全匿名」と毎回口頭保証。開票でAが圧倒→パスワードリスト攻撃→対策3点。第2問(今日使った認証)はSlidoでなく挙手で「指紋・顔を使った人？確認コードを使った人？」と振り分け、3要素・2FAの定義へ。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## 今日の5つの判断ポイント

<div class="grid2">
<div>

<ul>
<li><span class="hl">匿名でも当事者</span> ── 侮辱罪は厳罰化（拘禁刑・時効3年）、情プラ法＋開示命令で特定される</li>
<li><span class="hl">情報は組み合わさる</span> ── 投稿前に「写ってる全員OK？」EXIFで場所も割れる</li>
<li><span class="hl">追跡される</span> ── Cookieは外部送信（通知・公表）。押す前に一拍</li>
</ul>

</div>
<div>

<ul>
<li><span class="hl">AIは相棒で代筆屋でない</span> ── 引用は従・出所明示、出どころを確かめる</li>
<li><span class="hl">消えない／守れる</span> ── デジタルタトゥー、そして<span class="red">認証は2要素</span>に</li>
</ul>

</div>
</div>

<div class="episode"><div class="h">なぜ学ぶか</div>鍵マークとURLを見る・Fromを疑う・パスワードを使い回さない ── <span class="hl">この3つだけで、多くの被害は防げる</span>。今日から「押す前に一拍・出す前に一拍・送る前に一拍」。</div>

<!-- 第1部(倫理)＋第2部(認証)を5点に圧縮。行動コミット(2FA ON)で終える。 -->

---

<!-- _class: qa -->

<div class="page-title">課題・次回</div>

# おつかれさまでした

## 今日の「裏側」が見えると、毎日のネットが少し安全になる

<table class="dtbl">
<tr><th>項目</th><th>内容</th><th>期限</th></tr>
<tr><td class="l">リフレクション</td><td class="l">分かったこと3つ／曖昧なこと1つ</td><td>Moodle ／ 6/23</td></tr>
<tr><td class="l">行動報告</td><td class="l">ポータル／SNSの<strong>2要素認証ON</strong>を報告</td><td>Moodle ／ 6/23</td></tr>
<tr><td class="l">任意の発展</td><td class="l">フィッシングクイズ全8問／IPAの教材</td><td>なし（希望者）</td></tr>
</table>

<div class="band" style="text-align:center;background:#FBEFC8;border-color:#D98A2B">今夜、2要素認証をONに。それが今日いちばんの宿題です。</div>

<!-- 締め。宿題＝Moodleリフレクション＋2FA ON報告。次回が(2)＝認証の図解編なら口頭で予告。 -->

---

<!-- _class: divider -->

<div class="chapter-num">APPENDIX ／ 予備・発展</div>

# 予備・発展

## 早く進んだとき／興味のある人へ

<!-- ここからは予備(本編75分が早く終わったとき用)。各2-3分・独立開閉可能。押した時の補填には使わない。 -->

---

<!-- _class: fig -->

<div class="page-title">発展：認証の図解</div>

## パスワードを「送らない」しくみ

<div class="fig-area">

<svg viewBox="0 0 940 300" width="100%" style="max-height:330px">
  <defs><marker id="arA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#A6192E"/></marker></defs>
  <g font-size="14" text-anchor="middle">
    <rect class="card" x="20" y="20" width="290" height="260" rx="12" fill="#FDECEC" stroke="#A6192E" stroke-width="2"/><text x="165" y="44" font-weight="800" font-size="16" fill="#7d1322">① スニッフィング</text>
    <rect class="card" x="40" y="60" width="90" height="44" rx="7" fill="#fff" stroke="#3E78B2" stroke-width="1.8"/><text x="85" y="80" font-size="13">本人</text><text x="85" y="96" font-size="11" fill="#555">PW送信</text>
    <path d="M130,82 L200,82" stroke="#999" stroke-width="2" marker-end="url(#arA)"/>
    <rect class="card" x="200" y="60" width="90" height="44" rx="7" fill="#fff" stroke="#6B6F76" stroke-width="1.8"/><text x="245" y="84" font-size="13">サーバ</text>
    <rect class="card" x="120" y="140" width="100" height="44" rx="7" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="170" y="160" font-size="13" fill="#7d1322">攻撃者</text><text x="170" y="176" font-size="11" fill="#555">盗聴</text>
    <path d="M165,120 L168,138" stroke="#A6192E" stroke-width="1.8" marker-end="url(#arA)"/>
    <text x="165" y="220" font-size="13" fill="#A6192E" font-weight="700">同じPWで後から成り済まし</text><text x="165" y="244" font-size="12" fill="#555">＝固定パスワードの弱点</text>
    <rect class="card" x="325" y="20" width="290" height="260" rx="12" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="470" y="44" font-weight="800" font-size="16" fill="#2d6a44">② ワンタイムPW</text>
    <rect class="card" x="345" y="70" width="100" height="44" rx="7" fill="#fff" stroke="#3C8A57" stroke-width="1.8"/><text x="395" y="90" font-size="13">トークン</text><text x="395" y="106" font-size="11" fill="#555">毎回違う番号</text>
    <path d="M445,92 L525,92" stroke="#3C8A57" stroke-width="2" marker-end="url(#arA)"/>
    <rect class="card" x="525" y="70" width="80" height="44" rx="7" fill="#fff" stroke="#6B6F76" stroke-width="1.8"/><text x="565" y="94" font-size="13">サーバ</text>
    <text x="470" y="160" font-size="13" fill="#2d6a44" font-weight="700">盗まれても、次は別の番号</text><text x="470" y="184" font-size="12" fill="#555">＝1回きりなので無効</text>
    <rect class="card" x="400" y="205" width="140" height="40" rx="7" fill="#F8E5EA" stroke="#A6192E" stroke-width="1.5"/><text x="470" y="230" font-size="12" fill="#7d1322">攻撃者が再利用→失敗</text>
    <rect class="card" x="630" y="20" width="290" height="260" rx="12" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="775" y="44" font-weight="800" font-size="16" fill="#23527a">③ チャレンジレスポンス</text>
    <rect class="card" x="650" y="70" width="90" height="44" rx="7" fill="#fff" stroke="#3E78B2" stroke-width="1.8"/><text x="695" y="94" font-size="13">本人</text>
    <rect class="card" x="830" y="70" width="80" height="44" rx="7" fill="#fff" stroke="#6B6F76" stroke-width="1.8"/><text x="870" y="94" font-size="13">サーバ</text>
    <path d="M830,84 L742,84" stroke="#3E78B2" stroke-width="1.8" marker-end="url(#arA)"/><text x="786" y="78" font-size="11" fill="#23527a">お題</text>
    <path d="M742,104 L830,104" stroke="#3E78B2" stroke-width="1.8" marker-end="url(#arA)"/><text x="786" y="120" font-size="11" fill="#23527a">計算した答え</text>
    <text x="775" y="170" font-size="13" fill="#23527a" font-weight="700">PWそのものは送らない</text><text x="775" y="194" font-size="12" fill="#555">お題から計算した答えだけ送る</text>
  </g>
</svg>

</div>

<div class="takeaway">固定PWは盗まれると弱い → 毎回変える・そもそも送らない、へ。</div>

<!-- 原版スライド26-28(スニッフィング/ワンタイムPW/チャレンジレスポンス)の図解を1枚に。第2部「2要素認証」の自然な続き。次回(2)の本丸でもある。 -->

---

<!-- _class: split -->

<div class="page-title">発展：トークンと最新事例</div>

## 「持ち物」での認証 と、いま起きている被害

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">トークン＝持っているもの</div><div class="b">

- <span class="hl">パッシブ</span>：鍵・磁気カード・RFID（複製されやすい）
- <span class="hl">アクティブ</span>：毎分番号が変わる（RSA SecurID 等）
- 紛失リスクはあるが、<span class="hl">こまめに管理すれば盗難に気づける</span>

</div></div>

</div>
<div class="right">

<div class="cbox red"><div class="h">いま身近で起きている（つかみ）</div><div class="b">

- <span class="hl">SMS型フィッシング（スミッシング）</span>の急増
- 著名人<span class="hl">なりすまし投資広告</span>・ロマンス詐欺
- SNSの<span class="hl">「闇バイト」</span>募集 → 特殊詐欺の入口
- パスワードリスト攻撃による不正ログイン

</div></div>

<div class="attr">出典：警察庁／フィッシング対策協議会／IPA（数値は当日最新を確認）</div>

</div>
</div>

<div class="takeaway">手口は新しくなる。だから「型」で守る ── 疑う・確かめる・多重化。</div>

<!-- 予備：トークン(原版23-25)＋2024-2026の身近な事例(スミッシング/投資詐欺/闇バイト)。最新数値は当日に警察庁・IPAで確認。各ブロック冒頭の「つかみ弾薬」としても使える。 -->

---

<!-- _class: refs -->

<div class="page-title">参考文献・教材</div>

## 参考文献・体験ツール

- Richard E. Smith（稲村雄 監訳）(2003). *認証技術 ── パスワードから公開鍵まで*. オーム社.
- 浦昭二 ほか (2008). *情報システム学へのいざない［改訂版］*. 培風館.
- 法務省「侮辱罪の法定刑の引上げ Q&amp;A」 https://www.moj.go.jp/keiji1/keiji12_00194.html
- 総務省「情報流通プラットフォーム対処法（情プラ法）」／「外部送信規律」
- 文化庁 (2024).「AIと著作権に関する考え方について」
- IPA「情報セキュリティ読本」／「偽セキュリティ警告 体験サイト」 https://www.ipa.go.jp/security/anshin/measures/fakealert.html
- Google／Jigsaw「フィッシング クイズ」 https://phishingquiz.withgoogle.com/
- EXIF位置情報ビューア https://onlineexifviewer.com/ ／ Which Face Is Real? https://www.whichfaceisreal.com/ ／ How Secure Is My Password? https://www.security.org/how-secure-is-my-password/

<!-- 一次情報中心。法令は2026年6月時点で確認済み。 -->

---

<!-- _class: divider -->

<div class="chapter-num">FOR INSTRUCTOR ／ 教員用</div>

# 小テスト（第8回）

## 教員用・別紙 ── 投影せず、Moodle／マークシートで配布

<!-- ここから教員用。本番では投影しない（Moodleの自動採点クイズ、または紙のマークシートで配布）。範囲は第8回(ネットワーク)のみ。 -->

---

<!-- _class: summary -->

<div class="page-title">小テスト 問題</div>

## 第8回 確認テスト（8問・記名・15分）

<div class="sections">
<div class="sec-box">

### ネットワークの基礎

- (1) インターネットの本質は？〔ア 1本の巨大ケーブル／イ ネットワークのネットワーク／ウ 1社が管理する回線〕
- (2) IPアドレスが「住所」なら、DNSは何にあたる？〔電話帳／郵便番号／暗証番号〕
- (3) TCP/IPの4層を上（アプリ側）から順に並べよ
- (4) データを小分けして送る単位を何という？

</div>
<div class="sec-box">

### 安全・データ

- (5) 公衆Wi-Fiで「HTTPの通信」が危ない理由を1行で
- (6) 🔒鍵マーク(HTTPS)が「意味すること」と「意味しないこと」を1つずつ
- (7) 公開鍵暗号：誰でも〇〇でき、受け手だけが△△できる。〇〇／△△は？
- (8) 表からデータを取り出す問い合わせ言語は？

</div>
</div>

<!-- 第8回のみ。やさしめ・選択＋短答。配点は均等。次スライドに解答。 -->

---

<!-- _class: summary -->

<div class="page-title">小テスト 解答</div>

## 第8回 確認テスト ── 解答

<div class="sections">
<div class="sec-box">

### 解答（1〜4）

- (1) **イ：ネットワークのネットワーク**
- (2) **電話帳**（名前→IPアドレスに翻訳）
- (3) **アプリ層 → 輸送層 → ネット層 → リンク層**
- (4) **パケット**

</div>
<div class="sec-box">

### 解答（5〜8）

- (5) **暗号化されず、同じ電波の他人に丸見え**になるから
- (6) 意味する＝**通信が暗号化**／意味しない＝**サイトが本物・絶対安全**
- (7) 誰でも**公開鍵で施錠**／受け手だけ**秘密鍵で開錠**
- (8) **SQL**

</div>
</div>

<!-- 教員用解答。Moodle自動採点に流用可。 -->
