---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ第9回</div><img class="hdr-logo" src="../assets/logo-info-literacy.png">'
footer: ''
style: |
  /* ╔══════════════════════════════════════════════════════════╗
     ║  ヘッダー帯の見た目つまみ ─ ここの数値だけ変えればOK       ║
     ╚══════════════════════════════════════════════════════════╝ */
  :root {
    --hdr-left-w: 23%;   /* 左の赤帯(デックタイトル)の幅 */
    --pt-width:   50%;   /* 中央ページタイトル帯の幅 */
    --hdr-gap:   -4px;   /* 左帯と中央帯の白い隙間つまみ(-4pxで完全に消す) */
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
  .codebox { background:#1f2430; color:#e6e6e6; border-radius:8px; padding:8px 14px; margin:6px 0; font-family:"Menlo","Consolas",monospace; font-size:15px; line-height:1.5; }
  .codebox .c { color:#7fd1b9; } .codebox .k { color:#f0c674; } .codebox .m { color:#8ab4f8; }
  .attr { font-size:14px; color:#999; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c4a0a8; border-radius:8px; background:#fdf6f7; color:#a86b76; display:flex; align-items:center; justify-content:center; text-align:center; font-size:15px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:17px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #c8c8c8; padding:4px 12px; text-align:center; }
  .dtbl th { background:var(--accent-soft); }
  .dtbl td.l { text-align:left; }
  svg .card { filter: drop-shadow(0 2px 3px rgba(0,0,0,.12)); }
  .src { font-size:13px; color:#9a9a9a; } .src a { color:#9a9a9a; }
  .episode { background:#FCEEF0; border-left:6px solid var(--accent); border-radius:8px; padding:8px 16px; margin:8px 0; font-size:19px; }
  .episode .h { font-weight:700; color:var(--accent); font-size:16px; letter-spacing:.04em; }
  /* ── ワーク(アクティブラーニング)スライド：8-20-90のモード切替が一目で分かる暖色トーン＋WORKバッジ ── */
  section.work { background:#FFFDF5; }
  section.work::before { content:"WORK"; position:absolute; top:66px; right:24px; background:#D98A2B; color:#fff; font-weight:800; font-size:14px; letter-spacing:.16em; padding:3px 12px; border-radius:6px; z-index:5; box-shadow:0 1px 3px rgba(0,0,0,.2); }
  .timechip { display:inline-block; background:#FFF1DC; color:#9a5a14; border:1px solid #e8c596; font-weight:800; font-size:18px; padding:3px 16px; border-radius:20px; margin:0 0 4px; letter-spacing:.02em; }
  .promptcard { background:#1f2430; border-radius:10px; padding:9px 15px; margin:8px 0; }
  .promptcard > .h { color:#f0c674; font-weight:700; font-size:16px; margin-bottom:5px; }
  .promptcard > .b { color:#e8e8e8; font-size:16px; line-height:1.55; }
  .promptcard > .b .red { color:#ff9a9a; }
  /* 90分タイムライン(進め方スライド) */
  .tl { display:flex; flex-direction:column; gap:5px; margin:6px 0; }
  .tl .row { display:grid; grid-template-columns:62px 1fr; align-items:stretch; gap:8px; }
  .tl .t { font-weight:800; font-size:15px; color:#7d1322; text-align:right; padding-top:6px; }
  .tl .bar { border-radius:7px; padding:5px 12px; font-size:16px; font-weight:700; }
  .tl .lec { background:#eef4fa; border-left:6px solid #3E78B2; }
  .tl .wk  { background:#fdf3e8; border-left:6px solid #D98A2B; }
  .tl .sm  { font-size:13px; font-weight:500; color:#666; }
  section.fig.packtop { display:flex !important; flex-direction:column; justify-content:flex-start; gap:6px; padding-bottom:32px !important; }
  section.fig.packtop .fig-area { min-height:0; flex:0 0 auto; padding:2px 0; }
  section.wrap ul { font-size:20px; }
  section.wrap ul li { margin:6px 0; line-height:1.4; padding-left:28px; }
  section.wrap .grid2 { gap:24px; }
  section.wrap .episode { font-size:18px; margin:6px 0; }
  /* ========== 表紙レイアウト（cover-hero） ========== */
  section.cover-hero {
    padding-top: calc(var(--header-h) + 60px);
    --hdr-left-w: 23%;
  }
  section.cover-hero > header::after { left: 0; right: 0; }
  section.cover-hero .title-hero { text-align: center; margin-bottom: 50px; }
  section.cover-hero .title-small { font-size: 40px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
  section.cover-hero .title-big { font-size: 64px; font-weight: 800; line-height: 1.2; letter-spacing: 0.02em; }
  section.cover-hero .title-foot { display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center; padding: 0 60px; }
  section.cover-hero .title-photo {
    width: 240px; height: 240px; border-radius: 50%; overflow: hidden;
    background: #ffffff; border: 3px solid #D9EAD3;
    display: flex; align-items: center; justify-content: center; color: #777; font-size: 16px;
  }
  section.cover-hero .title-photo img { width: 84%; height: 84%; object-fit: contain; }
  section.cover-hero .title-meta { font-size: 26px; line-height: 1.7; text-align: center; }
  section.cover-hero .title-event { color: #e65100; font-weight: 700; margin-bottom: 16px; }
  section.cover-hero .title-affil { margin-top: 8px; }
---


<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">情報リテラシ 第9回 ／ 対面（火4）</div>
<div class="title-big">アプリケーション<br>プロトコル</div>
<div class="title-small" style="font-size:26px; color:#555; font-weight:600; margin-top:14px">— Web とメールの「会話のルール」</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/logo-info-literacy-icon.svg" alt="情報リテラシー">
</div>
<div class="title-meta">
<div class="title-event">23 & 24クラス<br>（医工学 ／ 都市環境システム ／ 応用化学）</div>
<div class="title-affil">担当：千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!-- 対面回。前回オンデマンド(第8回)の続き。今日は「着いた先の会話」を扱うと予告。 -->

---

<!-- _class: fig -->

<div class="page-title">本日の進め方</div>

<style scoped>
.tl .bar { font-size: 18px; }
.tl .t { font-size: 17px; }
.tl .sm { font-size: 14px; }
</style>

## 今日の90分の設計

<div class="fig-area" style="margin-top:-10px">
<div class="grid2" style="gap:24px; align-items:start">
<div>

<div class="tl">
<div class="row"><div class="t">2分</div><div class="bar lec">① 第1タームお疲れ様＋お詫び</div></div>
<div class="row"><div class="t">8分</div><div class="bar lec">② 第8回の復習（地図／TCP-IP）</div></div>
<div class="row"><div class="t">10分</div><div class="bar wk">③ ワーク①：NotebookLM＋ペア <span class="sm">アナロジー・質問・学び方</span></div></div>
<div class="row"><div class="t">12分</div><div class="bar lec">④ メールのしくみ</div></div>
<div class="row"><div class="t">8分</div><div class="bar wk">⑤ ワーク②：自分のメールヘッダを読む</div></div>
<div class="row"><div class="t">10分</div><div class="bar lec">⑥ SSH・HTML・JavaScript</div></div>
</div>

</div>
<div>

<div class="tl">
<div class="row"><div class="t">10分</div><div class="bar wk">⑦ ワーク③：DevTools＋HTML作成</div></div>
<div class="row"><div class="t">体験</div><div class="bar wk">⑧ 体験①netlab1（旅の総復習）</div></div>
<div class="row"><div class="t">解説</div><div class="bar lec">⑨ TLS／SSL／HTTPS</div></div>
<div class="row"><div class="t">体験</div><div class="bar wk">⑩ 体験②netlab2（暗号・安全）</div></div>
<div class="row"><div class="t">予備</div><div class="bar lec">⑪ 残った話（時間があれば）</div></div>
<div class="row"><div class="t">締め</div><div class="bar lec">⑫ 次回予告（小テスト）・連絡</div></div>
</div>

</div>
</div>
</div>

<div class="takeaway"><span class="worktag">WORK</span> の回は手を動かす番。受け身にならず、隣の人と進めよう。</div>

<!-- 8-20-90の設計意図を最初に共有。講義(青)とワーク(橙)が交互に来ることを見せ、受講姿勢を作る。 -->

---

<!-- _class: summary -->

<div class="page-title">第8回ふりかえり①</div>

<style scoped>
.cbox > .h { font-size: 22px; }
.cbox > .b, .cbox .b li { font-size: 22px; }
.band { font-size: 22px; }
</style>

## URLを入れてからページが出るまでの「旅」

<div class="fig-area" style="margin:6px 0 10px">
<svg viewBox="20 44 920 74" width="100%" style="max-height:120px">
  <g font-size="16" text-anchor="middle">
    <g><rect class="card" x="30" y="48" width="115" height="62" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="87" y="74" font-weight="700" fill="#7d1322">あなたの端末</text><text x="87" y="96" fill="#555" font-size="15">スマホ / PC</text></g>
    <text x="158" y="84" fill="#A6192E" font-size="24" font-weight="800">→</text>
    <g><rect class="card" x="172" y="48" width="115" height="62" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="229" y="74" font-weight="700">Wi-Fi / LAN</text><text x="229" y="96" fill="#555" font-size="15">ルータ</text></g>
    <text x="300" y="84" fill="#A6192E" font-size="24" font-weight="800">→</text>
    <g><rect class="card" x="314" y="48" width="110" height="62" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="369" y="74" font-weight="700">DNS</text><text x="369" y="96" fill="#555" font-size="15">名前 → IP</text></g>
    <text x="436" y="84" fill="#A6192E" font-size="24" font-weight="800">→</text>
    <g><ellipse class="card" cx="565" cy="79" rx="78" ry="33" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="565" y="74" font-weight="700" fill="#7d1322">インターネット</text><text x="565" y="96" fill="#555" font-size="15">ルータのリレー</text></g>
    <text x="660" y="84" fill="#A6192E" font-size="24" font-weight="800">→</text>
    <g><rect class="card" x="674" y="48" width="110" height="62" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="729" y="74" font-weight="700">Web サーバ</text><text x="729" y="96" fill="#555" font-size="15">HTML を返す</text></g>
    <text x="796" y="84" fill="#A6192E" font-size="24" font-weight="800">→</text>
    <g><rect class="card" x="810" y="48" width="120" height="62" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="870" y="82" font-weight="700" fill="#7d1322">ページ表示</text></g>
  </g>
</svg>
</div>

<div class="cbox blue"><div class="h">道を思い出そう</div><div class="b">

- まず<span class="hl">あなたの端末</span>が「このページが見たい」と要求を出す
- 要求は<span class="hl">ルータ</span>を抜け、<span class="hl">DNS</span>で「名前→住所(IP)」に変換される
- そこから<span class="hl">インターネット</span>という大きな網を通り、目的の<span class="hl">Webサーバ</span>に届く
- サーバが中身を返し、戻ってきたデータが<span class="red">あなたの画面に表示</span>される

</div></div>

<div class="takeaway">端末→ルータ→DNS→ネット→サーバ→表示。これが前回の「道」の全体像。</div>

<!-- 前回の主役=経路の全体像を言葉で再生。今回の「着いた先の会話」への助走。 -->

---

<!-- _class: summary -->

<div class="page-title">第8回ふりかえり②</div>

<style scoped>
.cbox > .h { font-size: 21px; }
.cbox > .b, .cbox .b li { font-size: 21px; }
</style>

## TCP/IP 4層 ── データは「宛名シール」を貼って包まれる

<div class="grid2">
<div>

<div class="cbox red"><div class="h">送る側：上から包んでいく</div><div class="b">

- <span class="hl">アプリ層</span>(アプリケーション層)：何を要求するか(HTTP・メール等)
- <span class="hl">輸送(TCP)層</span>(トランスポート層)：抜け・順番を直し確実に届ける
- <span class="hl">ネット(IP)層</span>(インターネット層)：住所を書き経路を選ぶ
- <span class="hl">リンク層</span>(ネットワークインターフェース層)：ケーブル/Wi-Fiへ流す

</div></div>

</div>
<div>

<div class="cbox green"><div class="h">受け取る側：逆順に開封</div><div class="b">

- 届いた荷物は各層の<span class="red">宛名シール(ヘッダ)</span>で包まれている
- <span class="hl">下(リンク層)から順に開封</span>し、最後にアプリ層の中身を取り出す
- まるで「箱の中に箱」=入れ子のしくみ

</div></div>

</div>
</div>

<div class="fig-area" style="margin-top:8px">
<svg viewBox="0 0 920 100" width="100%" style="max-height:120px">
  <g text-anchor="middle">
    <text x="20" y="14" text-anchor="start" font-size="14" fill="#7d1322" font-weight="700">送る側：上から順に「包む」→　／　受け取る側：←「開封」逆順</text>
    <rect class="card" x="20" y="28" width="200" height="50" rx="8" fill="#3E78B2"/><text x="120" y="50" fill="#fff" font-size="16" font-weight="700">① アプリ層</text><text x="120" y="69" fill="#fff" font-size="13">HTTP・メール</text>
    <text x="232" y="58" font-size="22" fill="#888" font-weight="800">→</text>
    <rect class="card" x="250" y="28" width="200" height="50" rx="8" fill="#3C8A57"/><text x="350" y="50" fill="#fff" font-size="16" font-weight="700">② 輸送(TCP)層</text><text x="350" y="69" fill="#fff" font-size="13">確実に届ける</text>
    <text x="462" y="58" font-size="22" fill="#888" font-weight="800">→</text>
    <rect class="card" x="480" y="28" width="200" height="50" rx="8" fill="#D98A2B"/><text x="580" y="50" fill="#fff" font-size="16" font-weight="700">③ ネット(IP)層</text><text x="580" y="69" fill="#fff" font-size="13">住所・経路</text>
    <text x="692" y="58" font-size="22" fill="#888" font-weight="800">→</text>
    <rect class="card" x="710" y="28" width="200" height="50" rx="8" fill="#6B6F76"/><text x="810" y="50" fill="#fff" font-size="16" font-weight="700">④ リンク層</text><text x="810" y="69" fill="#fff" font-size="13">ケーブル/Wi-Fi</text>
  </g>
</svg>
</div>

<div class="takeaway">各層が宛名を貼って包み、受け取り側が逆順に開ける=カプセル化。</div>

<!-- 4層の役割とカプセル化を「包む/開封」のイメージで圧縮再生。 -->

---

<!-- _class: summary -->

<div class="page-title">第8回ふりかえり③</div>

<style scoped>
.cbox > .h { font-size: 22px; }
.cbox > .b, .cbox .b li { font-size: 22px; }
.band { font-size: 22px; }
</style>

## 「住所・電話帳・町内」で復習し、今日の本題へ

<div class="cbox blue"><div class="h">3つのキーワードで思い出す</div><div class="b">

- <span class="hl">IP ＝ 住所</span>：世界中の機器を一意に指す番号。これがないと届け先が決まらない
- <span class="hl">DNS ＝ 電話帳</span>：人が読める名前(例 chiba-u.ac.jp)を住所(IP)に引き直す
- <span class="hl">サブネット ＝ 同じ町内か</span>：相手が近所(同じネットワーク)か外かの<span class="red">区分</span>。同じ町内かは<span class="hl">サブネットマスク</span>で見分ける

</div></div>

<div class="band" style="text-align:center">ここまでが「相手にたどり着く」話。<span class="hl">今日はその“着いた先での会話”</span>をやります</div>

<div class="takeaway">IP=住所・DNS=電話帳・サブネット=町内。今日は着いた先の会話へ。</div>

<!-- 前回を3語で締め、今回(アプリ層=会話のルール)へ橋渡しする要のスライド。 -->

---

<!-- _class: split work -->

<div class="page-title">ワーク① 教え合いで復習</div>

<style scoped>
.cbox > .h { font-size: 21px; }
.cbox > .b, .cbox .b li { font-size: 21px; }
.promptcard > .b { font-size: 18px; }
</style>

<div class="timechip">⏱ 10分 ／ 個人 → ペア</div>

## 第8回を「自分の言葉」で説明できるか試す

<div class="split-body">
<div class="left">

<div class="promptcard"><div class="h">📋 NotebookLM に貼る</div><div class="b">

第8回のスライドをソースに追加しました。私は情報リテラシを学ぶ大学1年生です。TCP/IPの4層とカプセル化を、宅配便にたとえて、中学生にもわかるように300字以内で説明してください。

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">準備(2分)</div><div class="b">

- 第8回スライドを<span class="hl">NotebookLM に投入</span>する
- 隣の人と<span class="hl">ペア</span >になる(席が遠ければ近くへ)
- 上のプロンプトを貼り、出てきた説明を読む

</div></div>

<div class="band" style="font-size:20px">AIの説明を<span class="hl">そのまま信じず</span>、アナロジーを尋ねるなど、自分の理解と照らし合わせるのがコツ</div>

</div>
</div>

<!-- ワーク導入。NotebookLMに前回資料を入れ、ペア体制を作る段取りまで。 -->

---

<!-- _class: summary work -->

<div class="page-title">ワーク① タスク</div>

<style scoped>
.cbox > .h { font-size: 21px; }
.cbox > .b, .cbox .b li { font-size: 21px; }
.ask { font-size: 21px; }
</style>

## ペアで「説明 → 質問 → 学び方」の3ステップ

<div class="cbox blue"><div class="h">やること</div><div class="b">

- ① <span class="hl">TCP/IPを宅配便にたとえて</span>相手に口頭で説明する(交代で)
- ② 第8回で<span class="hl">気になった/分からなかった点</span>を相手に質問してみる
- ③ 二人で「<span class="red">情報を学ぶときの“良い学び方”</span>」を3つ挙げる

</div></div>

<div class="cbox orange"><div class="h">なぜ「たとえ(アナロジー)」が効くの？</div><div class="b">

- 新しい知識を<span class="hl">既に知っていること(宅配便)に結びつける</span>と、記憶に定着しやすい
- 「どこが似て・どこが違うか」を考える過程で、理解の<span class="red">あいまいな所が見える</span>

</div></div>

<div class="ask">説明してみて「ここ、うまく言えない」と感じた所は？ そこがあなたの伸びしろです</div>

<!-- 説明=最強の復習。アナロジーが学習に効く理由を一言で添え、メタ認知も促す。 -->

---

<!-- _class: fig -->

<div class="page-title">今回の地図</div>

## 前回は「道」、今回は着いた先で交わす「会話のルール」

<div class="fig-area" style="margin-top:-12px">
<svg viewBox="0 0 920 320" width="100%" style="max-height:330px">
  <defs>
    <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <g font-size="14" text-anchor="middle">
    <text x="40" y="34" font-size="15" font-weight="700" fill="#888" text-anchor="start">前回(第8回)：URLを入れてからページが出るまでの「道」</text>
    <g opacity="0.55">
      <rect class="card" x="30" y="46" width="120" height="44" rx="8" fill="#fff" stroke="#888" stroke-width="2"/><text x="90" y="73" font-weight="700">あなたの端末</text>
      <text x="160" y="73" fill="#888" font-size="20" font-weight="800">→</text>
      <rect class="card" x="178" y="46" width="120" height="44" rx="8" fill="#fff" stroke="#888" stroke-width="2"/><text x="238" y="73" font-weight="700">ルータ / DNS</text>
      <text x="308" y="73" fill="#888" font-size="20" font-weight="800">→</text>
      <ellipse class="card" cx="400" cy="68" rx="78" ry="24" fill="#f0f0f0" stroke="#888" stroke-width="2"/><text x="400" y="73" font-weight="700">インターネット</text>
      <text x="490" y="73" fill="#888" font-size="20" font-weight="800">→</text>
    </g>
    <rect class="card" x="510" y="46" width="130" height="44" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="575" y="73" font-weight="800" fill="#7d1322">Web サーバ着</text>
  </g>
  <path d="M575,94 L575,128" stroke="#A6192E" stroke-width="3" fill="none" marker-end="url(#ar)"/>
  <text x="600" y="118" font-size="15" font-weight="700" fill="#7d1322" text-anchor="start">ここで何の「会話」？</text>
  <rect x="40" y="134" width="840" height="38" rx="8" fill="#A6192E"/>
  <text x="460" y="159" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">第9回：着いた先で交わされる「会話のルール」＝ アプリケーションプロトコル</text>
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="40" y="196" width="158" height="100" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="119" y="222" font-weight="800" fill="#3E78B2">① アプリ層とは</text><text x="119" y="248" fill="#555" font-size="14">人が使うサービスの</text><text x="119" y="268" fill="#555" font-size="14">「会話」の取り決め</text>
    <rect class="card" x="208" y="196" width="158" height="100" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="287" y="222" font-weight="800" fill="#3C8A57">② Web / HTTP</text><text x="287" y="248" fill="#555" font-size="14">URL・GET/POST</text><text x="287" y="268" fill="#555" font-size="14">Cookie</text>
    <rect class="card" x="376" y="196" width="158" height="100" rx="10" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="455" y="222" font-weight="800" fill="#D98A2B">③ メール</text><text x="455" y="248" fill="#555" font-size="14">SMTP/POP/IMAP</text><text x="455" y="268" fill="#555" font-size="14">なりすまし注意</text>
    <rect class="card" x="544" y="196" width="158" height="100" rx="10" fill="#f3d6d6" stroke="#A6192E" stroke-width="2.5"/><text x="623" y="222" font-weight="800" fill="#A6192E">④ 安全な通信</text><text x="623" y="248" fill="#555" font-size="14">TLS/SSL・HTTPS</text><text x="623" y="268" fill="#555" font-size="14">鍵マーク・証明書</text>
    <rect class="card" x="712" y="196" width="168" height="100" rx="10" fill="#ede9f5" stroke="#4F5BA6" stroke-width="2"/><text x="796" y="222" font-weight="800" fill="#4F5BA6">⑤ Webアプリ</text><text x="796" y="248" fill="#555" font-size="14">その場で作るページ</text><text x="796" y="268" fill="#555" font-size="14">足あと(ログ)・動画配信</text>
  </g>
</svg>
</div>

<div class="takeaway">今日のゴール：身近なWeb・メールの「裏側の会話」を説明できる。</div>

<!-- 前回の旅バーを思い出させ、今回は最上層=アプリ層の話だと位置づける。5章の地図を最初に共有。 -->

---

<!-- _class: fig -->

<div class="page-title">主なプロトコル</div>

## 身の回りのサービスは、それぞれ専用の作法で動く

<div class="fig-area">

<table class="dtbl" style="font-size:18px">
<tr><th>プロトコル</th><th>用途（何の会話か）</th><th>身近な場面</th></tr>
<tr><td class="l"><span class="red">HTTP / HTTPS</span></td><td class="l">Webページをやり取り</td><td class="l">ブラウザで閲覧・Moodle</td></tr>
<tr><td class="l"><span class="red">SMTP</span></td><td class="l">メールを<strong>送る</strong></td><td class="l">メール送信</td></tr>
<tr><td class="l"><span class="red">POP / IMAP</span></td><td class="l">届いたメールを<strong>取り出す</strong></td><td class="l">受信トレイの表示</td></tr>
<tr><td class="l">DNS</td><td class="l">名前 → IP の翻訳</td><td class="l">URLを入れた瞬間（前回）</td></tr>
<tr><td class="l">FTP</td><td class="l">ファイルの転送</td><td class="l">Webサイトの公開</td></tr>
<tr><td class="l">SSH</td><td class="l">安全な遠隔ログイン</td><td class="l">サーバの遠隔操作</td></tr>
</table>

<div class="band" style="margin-top:10px">多くは<span class="hl">「相手に要求 → 相手が応答」</span>が基本（メールは送信側から送り出す形）。違うのは<strong>会話の中身と作法</strong>。</div>

</div>

<div class="takeaway">サービスごとに専用プロトコル。今日は HTTP・メール・TLS を中心に見る。</div>

<!-- 全体像の一覧。SSH/FTPは名前だけ紹介し、HTTP・メール・TLSに絞ると宣言。 -->

---

<!-- _class: divider -->

<div class="chapter-num">STEP 4 ／ 解説</div>

# メールの仕組み

## 「送る」と「取り出す」は別のプロトコル

<!-- 毎日使うメール。送信と受信で別の作法を使っていることを明かす。 -->

---

<!-- _class: fig -->

<div class="page-title">メールが届くまで</div>

## 手紙と同じ ── 郵便局（メールサーバ）を経由して届く

<div class="fig-area">
<svg viewBox="0 0 920 300" width="100%" style="max-height:330px">
  <g text-anchor="middle" font-size="14">
    <rect class="card" x="30" y="60" width="130" height="64" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="95" y="88" font-weight="800" fill="#7d1322">送信者</text><text x="95" y="110" fill="#555" font-size="13">kyoko</text>
    <rect class="card" x="230" y="60" width="150" height="64" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="305" y="84" font-weight="700" fill="#3E78B2">送信サーバ</text><text x="305" y="106" fill="#555" font-size="13">chiba-u 側の郵便局</text>
    <rect class="card" x="540" y="60" width="150" height="64" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="615" y="84" font-weight="700" fill="#3C8A57">受信サーバ</text><text x="615" y="106" fill="#555" font-size="13">相手側の郵便局</text>
    <rect class="card" x="760" y="60" width="130" height="64" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="825" y="88" font-weight="800" fill="#7d1322">受信者</text><text x="825" y="110" fill="#555" font-size="13">satoru</text>
    <path d="M162,92 L226,92" stroke="#A6192E" stroke-width="2.5" fill="none" marker-end="url(#ar)"/><text x="194" y="48" fill="#A6192E" font-weight="700" font-size="13">SMTP</text>
    <path d="M382,92 L536,92" stroke="#A6192E" stroke-width="2.5" fill="none" marker-end="url(#ar)"/><text x="459" y="48" fill="#A6192E" font-weight="700" font-size="13">SMTP（サーバ間）</text>
    <path d="M692,92 L756,92" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar2r)"/><text x="724" y="48" fill="#3C8A57" font-weight="700" font-size="13">POP / IMAP</text>
    <rect x="380" y="150" width="270" height="44" rx="6" fill="#FBEFC8" stroke="#D98A2B"/><text x="515" y="170" fill="#7a5410" font-size="13" font-weight="700">どの受信サーバ宛て？ を</text><text x="515" y="188" fill="#7a5410" font-size="13" font-weight="700">DNS（MXレコード）で調べる（前回のDNS！）</text>
    <path d="M460,124 L500,148" stroke="#D98A2B" stroke-width="2" fill="none" marker-end="url(#ar)"/>
    <text x="270" y="232" text-anchor="start" font-size="15" fill="#333"><tspan font-weight="800" fill="#A6192E">SMTP</tspan> ＝ 送る作法　／　<tspan font-weight="800" fill="#3C8A57">POP・IMAP</tspan> ＝ 取り出す作法</text>
  </g>
</svg>
</div>

<div class="band">送るのは<span class="hl">SMTP</span>、受信トレイに取り出すのは<span class="hl">POP / IMAP</span>。間で<span class="red">DNS</span>が宛先サーバを特定（DNSのメール用の項目＝<span class="hl">MXレコード</span>）。</div>

<div class="src" style="text-align:center; font-size:15px; margin-top:6px;">🔗 参考：千葉大学のメールシステム（公式）　<a href="https://www.cudtec.chiba-u.jp/services/mail/mail_system.html">cudtec.chiba-u.jp/services/mail/mail_system.html</a></div>

<div class="takeaway">メールは郵便局（サーバ）経由。送る＝SMTP、取り出す＝POP/IMAP。</div>

<!-- 手紙のアナロジー。前回のDNS(MXレコード)がここで効く=知識が繋がる体験。 -->

---

<!-- _class: split -->

<div class="page-title">POP と IMAP</div>

## 受信の2方式 ── 「持ち帰る」か「サーバに置いたまま」か

<div class="split-body">
<div class="left">

<div class="cbox gray"><div class="h">POP ＝ 端末に持ち帰る</div><div class="b">

- メールを<span class="red">自分の端末にダウンロード</span>して保管
- サーバからは消えることが多い（古い方式）
- スマホとPCで<span class="hl">バラバラ</span>になりがち

</div></div>

<div class="cbox green"><div class="h">IMAP ＝ サーバに置いたまま見る</div><div class="b">

- メールは<span class="red">サーバ側に保管</span>、端末は表示するだけ
- スマホ・PC・タブレットで<span class="hl">同じ状態</span>が見える
- 今の主流。千葉大も <strong>IMAPS（安全なIMAP）</strong> 推奨

</div></div>

</div>
<div class="right">

<table class="dtbl" style="width:100%; font-size:16px">
<tr><th></th><th>POP</th><th>IMAP</th></tr>
<tr><td class="l">保管場所</td><td>端末</td><td><span class="red">サーバ</span></td></tr>
<tr><td class="l">複数端末</td><td>ズレる</td><td><span class="red">同期</span></td></tr>
<tr><td class="l">今の主流</td><td>△</td><td><span class="red">◎</span></td></tr>
</table>

<div class="cbox blue"><div class="h">Webメールという形もある</div><div class="b">

- Gmail等はブラウザだけで読み書きできる
- アプリを入れずどの端末でも使える

</div></div>

<div class="ask">スマホで読んだメールがPCでも「既読」になる ＝ どっちの方式？</div>

</div>
</div>

<div class="takeaway">POP＝持ち帰り、IMAP＝サーバに置いたまま同期。今はIMAPが主流。</div>

<!-- 「複数端末で同じ状態」を体験から問う。千葉大メール=IMAPS推奨に接続。 -->

---

<!-- _class: split -->

<div class="page-title">メールの中身</div>

## 中身は「ヘッダ（宛名）＋本文＋添付」でできている

<div class="split-body">
<div class="left">

<div class="codebox" style="font-size:14px">
<span class="c">From: 京子 &lt;kyoko@chiba-u.jp&gt;</span><br>
<span class="c">To: 智 &lt;satoru@dendai.jp&gt;</span><br>
<span class="c">Subject: 明日の予定</span><br>
<span class="k">Content-Type: multipart/mixed</span><br>
<span style="color:#888">――――――――――</span><br>
あしたは9時からです。<br>
<span style="color:#888">――――――――――</span><br>
<span class="m">[image: face.jpg]</span><br>
<span style="color:#888">R0lGODlhPAESk...（base64）</span>
</div>

<div class="band" style="font-size:15px">ヘッダ＝封筒の宛名。<span class="hl">MIME</span>という仕組みで、画像やPDFを<span class="hl">文字に変換</span>して本文と一緒に運ぶ。</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">ヘッダ ＝ 配送に必要な情報</div><div class="b">

- From / To / Subject / 日時など
- 郵便でいう<span class="red">封筒の宛名書き</span>

</div></div>

<div class="cbox green"><div class="h">MIME ＝ 添付ファイルの仕組み</div><div class="b">

- 画像・PDF・動画を<span class="red">文字列に変換(base64)</span>して同梱
- 「Content-Type」で中身の種類を示す
- 大きすぎる添付・HTMLメールは<span class="hl">マナー</span>に注意

</div></div>

<div class="ask">添付の写真が本文の何倍も重いのは、文字に変換して送っているから。</div>

</div>
</div>

<div class="takeaway">メール＝ヘッダ＋本文＋（MIMEで文字化した）添付。中身は意外と素朴。</div>

<!-- 添付がbase64で文字化される=サイズが膨らむ理由。生のbase64は概念だけ示す(要点版)。 -->

---

<!-- _class: split -->

<div class="page-title">メールの落とし穴</div>

## 差出人(From)は「自己申告」── 簡単に詐称できる

<div class="split-body">
<div class="left">

<svg viewBox="-6 -6 372 312" width="100%" style="max-height:380px">
  <g text-anchor="middle">
    <rect class="card" x="30" y="20" width="300" height="86" rx="10" fill="#f3d6d6" stroke="#A6192E" stroke-width="2.5"/>
    <text x="180" y="48" font-size="16" font-weight="800" fill="#A6192E">① From は名乗るだけ</text>
    <text x="180" y="74" font-size="14" fill="#555">封筒の差出人を手書きするのと同じ。</text>
    <text x="180" y="94" font-size="14" fill="#555">本物の銀行になりすませてしまう</text>
    <rect class="card" x="30" y="122" width="300" height="74" rx="10" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="180" y="150" font-size="16" font-weight="800" fill="#D98A2B">② 中身は盗み見られうる</text>
    <text x="180" y="176" font-size="14" fill="#555">暗号化しない経路では、はがき同然</text>
    <rect class="card" x="30" y="212" width="300" height="80" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="180" y="240" font-size="16" font-weight="800" fill="#3C8A57">→ だから「確認」と「暗号化」</text>
    <text x="180" y="266" font-size="14" fill="#555">リンクは押す前にURLを確認、</text>
    <text x="180" y="284" font-size="14" fill="#555">通信はTLSで守る（後半で学ぶ）</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">なりすまし・フィッシング</div><div class="b">

- 「○○銀行」「大学事務」を<span class="red">名乗る</span>偽メール
- 本物そっくりの偽サイトへ誘導しパスワードを盗む
- <span class="hl">From を信用しない</span>。リンクのURLを必ず確認

</div></div>

<div class="episode"><div class="h">なぜ学ぶか</div>学生・新社会人を狙う<span class="hl">フィッシング</span>は年々巧妙化。<span class="red">仕組みを知っていれば</span>「Fromは詐称できる」「鍵マークとURLを見る」で多くを防げる。</div>

<div class="ask">「アカウントが凍結されました」と急かすメール。まず何を確認する？</div>

</div>
</div>

<div class="takeaway">メールのFromは自己申告。急かすメール・リンクはまずURLを疑う。</div>

<!-- 防犯回。Fromが信用できない=フィッシングの土台。次章の暗号化へ繋ぐ。 -->

---

<!-- _class: split work -->

<div class="page-title">ワーク② メールの“正体”を見る</div>

<div class="timechip">⏱ 8分 ／ 個人</div>

## 自分のメールのヘッダを開いて、AIに読ませる

<div class="split-body">
<div class="left">

<div class="promptcard"><div class="h">📋 Gem(メールヘッダ解説)に貼る</div><div class="b">

これは私が受け取ったメールのヘッダ全文です。From・Received・Authentication-Resultsに注目し、誰がどの経路で送ったか、なりすましの疑いがないかを初心者向けに説明してください。

(この下にヘッダを貼り付け)

</div></div>

<div class="cbox green" style="margin-top:6px"><div class="h">ヘッダのこの3つに注目</div><div class="b" style="font-size:15px">

- <span class="hl">Received</span>：通った<span class="red">中継の記録</span>（下＝古い→上＝新しい）
- <span class="hl">From</span>：差出人。ただし<span class="red">自己申告</span>＝書き換えできる
- <span class="hl">Authentication-Results</span>：なりすまし判定。<span class="hl">SPF</span>(送信元サーバ照合)・<span class="hl">DKIM</span>(電子署名)・<span class="hl">DMARC</span>(その方針)が <span class="red">pass/fail</span> で残る

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">手順</div><div class="b">

- 自分の<span class="hl">Gmail</span>で1通開く
- メニュー → 「<span class="hl">メッセージのソースを表示</span>」
- 出てきた<span class="hl">ヘッダ全文をコピー</span>
- Gem に貼って解説してもらう

</div></div>

<div class="band" style="font-size:18px">メールの <span class="red">From は“自己申告”</span>。だから簡単になりすませる=フィッシングの入口</div>

</div>
</div>

<!-- 自分のメール実物でヘッダ体験。Fromは詐称可→なりすまし注意へ自然に接続。 -->

---

<!-- _class: split -->

<div class="page-title">SSH</div>

## SSH ＝ 遠くのコンピュータに「安全に」ログインする作法

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 260" width="100%" style="max-height:300px">
  <defs><marker id="ar-ssh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
  <g text-anchor="middle" font-size="14">
    <rect class="card" x="20" y="60" width="120" height="70" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="80" y="92" font-weight="800" fill="#7d1322">手元のPC</text><text x="80" y="114" fill="#555" font-size="13">あなた</text>
    <rect class="card" x="240" y="60" width="120" height="70" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="300" y="92" font-weight="700" fill="#3C8A57">遠くのサーバ</text><text x="300" y="114" fill="#555" font-size="13">研究室・クラウド</text>
    <rect x="120" y="150" width="140" height="30" rx="15" fill="#DDEBC8" stroke="#3C8A57"/><text x="190" y="170" font-size="13" font-weight="800" fill="#2f6b43">🔒 暗号化された通路</text>
    <path d="M142,86 L238,86" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar-ssh)"/>
    <text x="190" y="50" font-size="13" fill="#3C8A57" font-weight="700">コマンドで遠隔操作</text>
    <text x="190" y="210" font-size="13" fill="#555">画面が無くても、文字命令で動かせる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">遠隔ログインを暗号化したもの</div><div class="b">

- 目の前に無いサーバを<span class="red">手元から操作</span>できる
- 昔の TELNET は<span class="hl">平文</span>＝盗み見られた → 今は SSH
- 通信を<span class="red">暗号化</span>するので、合言葉も中身も守られる

</div></div>

<div class="cbox blue"><div class="h">どんな時に使う？</div><div class="b">

- 研究室・クラウドのサーバにログインして計算
- Web サイトの中身を更新（公開作業）
- 大きなデータの転送（SFTP／SCP）

</div></div>

<div class="band" style="font-size:18px">考え方は HTTPS と同じ ── <span class="hl">「遠隔操作＋暗号化」</span></div>

</div>
</div>

<div class="takeaway">SSH＝遠くのサーバに安全にログインする作法。HTTPSと同じ「暗号化」の発想。</div>

<!-- 工学部は研究室サーバ/クラウドで実際に使う。TELNET→SSHの歴史で「平文の危険」を再強調。 -->

---

<!-- _class: divider -->

<div class="chapter-num">STEP 6 ／ 解説</div>

# Web を見る ― HTTP と WWW

## ブラウザとサーバの「ページください」会話

<!-- 一番身近なWeb。毎日使っている裏側を分解する。 -->

---

<!-- _class: fig -->

<div class="page-title">WWWの仕組み</div>

## Web ＝ 世界中のサーバを「リンク」で辿れる仕組み

<div class="fig-area">
<svg viewBox="0 0 920 300" width="100%" style="max-height:330px">
  <defs>
    <marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#3E78B2"/></marker>
    <marker id="ar2r" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#3C8A57"/></marker>
  </defs>
  <g text-anchor="middle" font-size="15">
    <rect class="card" x="40" y="90" width="180" height="120" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="130" y="124" font-size="18" font-weight="800" fill="#7d1322">Webブラウザ</text><text x="130" y="150" fill="#555">あなたのPC/スマホ</text><text x="130" y="184" fill="#555" font-size="14">Chrome / Edge / Safari</text>
    <ellipse class="card" cx="460" cy="150" rx="120" ry="64" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="460" y="155" font-size="18" font-weight="800" fill="#7d1322">インターネット</text>
    <rect class="card" x="700" y="50" width="180" height="86" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="790" y="84" font-size="17" font-weight="700" fill="#3C8A57">Webサーバ A</text><text x="790" y="110" fill="#555" font-size="14">HTMLや画像を保管</text>
    <rect class="card" x="700" y="164" width="180" height="86" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="790" y="198" font-size="17" font-weight="700" fill="#3E78B2">Webサーバ B</text><text x="790" y="224" fill="#555" font-size="14">別の組織のページ</text>
    <path d="M222,120 C340,110 360,120 350,135" stroke="#3E78B2" stroke-width="2.5" fill="none" marker-end="url(#ar2)"/>
    <text x="300" y="100" font-size="14" fill="#3E78B2" font-weight="700">① ページをください</text>
    <path d="M580,160 C660,180 660,190 695,195" stroke="#3E78B2" stroke-width="2.5" fill="none" marker-end="url(#ar2)"/>
    <path d="M695,100 C640,120 600,130 575,140" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar2r)"/>
    <text x="660" y="80" font-size="14" fill="#3C8A57" font-weight="700">② HTMLを返す</text>
    <path d="M350,170 C360,185 340,195 222,185" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar2r)"/>
    <text x="300" y="210" font-size="14" fill="#3C8A57" font-weight="700">③ ブラウザが表示</text>
  </g>
</svg>
</div>

<div class="band">ページ内のリンクをクリックすると、<span class="hl">別のサーバのファイル</span>へ自動でジャンプ＝Web（World Wide Web）。</div>

<div class="takeaway">Webは「要求→応答」を、リンクで世界中のサーバへ繋いだ巨大な網。</div>

<!-- リンクで辿れることがWebの本質。次でその要求/応答(HTTP)の中身を見る。 -->

---

<!-- _class: split -->

<div class="page-title">HTML / CSS</div>

## ページの中身は「構造(HTML)」と「見た目(CSS)」に分かれる

<div class="split-body">
<div class="left">

<div class="codebox">
<span class="m">&lt;html&gt;</span><br>
&nbsp;&nbsp;<span class="m">&lt;body&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">&lt;h1&gt;</span>千葉大学<span class="k">&lt;/h1&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;教育学部は<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c">&lt;a href="https://..."&gt;</span>ここ<span class="c">&lt;/a&gt;</span><br>
&nbsp;&nbsp;<span class="m">&lt;/body&gt;</span><br>
<span class="m">&lt;/html&gt;</span>
</div>

<div class="band" style="font-size:16px"><span class="hl">&lt;a href="…"&gt;</span> がハイパーリンク。クリックでそのURLへジャンプ。</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">HTML ＝ 文書の「構造」</div><div class="b">

- 見出し・段落・リンク・画像などの<span class="red">役割</span>を記述
- タグ `<...>` で囲んで意味づけする
- リンク（ハイパーリンク）でページ同士を繋ぐ

</div></div>

<div class="cbox green"><div class="h">CSS ＝ 文書の「見た目」</div><div class="b">

- 色・大きさ・配置などの<span class="red">デザイン</span>を指定
- 構造（HTML）と見た目（CSS）を<span class="hl">分けて</span>管理
- このスライドも Marp＋CSS で作っている

</div></div>

<div class="ask">右クリック→「ページのソースを表示」で、今見ているページのHTMLが読める。</div>

</div>
</div>

<div class="takeaway">中身＝HTML（構造）、デザイン＝CSS（見た目）。役割を分けるのが基本。</div>

<!-- 「ソースを表示」を実演すると盛り上がる。構造と見た目の分離はレポートにも通じる発想。 -->

---

<!-- _class: split -->

<div class="page-title">2つの居場所</div>

## プログラムが動く場所は「ブラウザ側」と「サーバ側」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 270" width="100%" style="max-height:310px">
  <g text-anchor="middle" font-size="14">
    <rect class="card" x="20" y="30" width="160" height="200" rx="10" fill="#fdeee0" stroke="#D98A2B" stroke-width="2"/>
    <text x="100" y="56" font-size="15" font-weight="800" fill="#D98A2B">ブラウザ側</text>
    <rect x="40" y="72" width="120" height="44" rx="6" fill="#fff" stroke="#D98A2B"/><text x="100" y="92" font-size="14" font-weight="700">JavaScript</text><text x="100" y="108" font-size="11" fill="#555">あなたのPCで動く</text>
    <text x="100" y="146" font-size="12" fill="#555">入力チェック・</text><text x="100" y="164" font-size="12" fill="#555">アニメ・地図操作</text>
    <text x="100" y="200" font-size="12" fill="#A6192E" font-weight="700">手元で即反応</text>
    <rect class="card" x="200" y="30" width="160" height="200" rx="10" fill="#e8eef7" stroke="#3E78B2" stroke-width="2"/>
    <text x="280" y="56" font-size="15" font-weight="800" fill="#3E78B2">サーバ側</text>
    <rect x="220" y="72" width="120" height="44" rx="6" fill="#fff" stroke="#3E78B2"/><text x="280" y="92" font-size="14" font-weight="700">php / perl 等</text><text x="280" y="108" font-size="11" fill="#555">サーバで動く</text>
    <text x="280" y="146" font-size="12" fill="#555">DB処理・認証・</text><text x="280" y="164" font-size="12" fill="#555">決済の本処理</text>
    <text x="280" y="200" font-size="12" fill="#A6192E" font-weight="700">大事な処理はこちら</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox orange"><div class="h">JavaScript ＝ ブラウザ側</div><div class="b">

- あなたの端末上で動く（手元で即反応）
- 入力チェック・地図のスクロール・アニメ
- <span class="red">JavaScript と Java は別物</span>

</div></div>

<div class="cbox blue"><div class="h">サーバ用の言語（php・perl 等）＝ サーバ側</div><div class="b">

- サーバの上で動く（利用者からは見えない）
- 認証・決済・DB操作など<span class="hl">大事な処理</span>
- 結果だけを HTML にして返す

</div></div>

<div class="ask">パスワード照合を「ブラウザ側」でやってはいけない理由は？</div>

</div>
</div>

<div class="takeaway">見た目の反応はブラウザ側、大事な処理はサーバ側で動かす。</div>

<!-- 「どこで動くか」の感覚。なぜ認証はサーバ側か=改ざんできるから、を問いで引き出す。 -->

---

<!-- _class: split work -->

<div class="page-title">ワーク③ Webの中身を覗く</div>

<div class="timechip">⏱ 10分 ／ ペア</div>

## デベロッパーツールを開き、HTMLを少しずつ育てる

<div class="split-body">
<div class="left">

<div class="promptcard"><div class="h">📋 Gem(Web制作コーチ)に貼る</div><div class="b">

私は初心者です。「Hello」と表示するだけの最小HTMLを書いてください。次にCSSで色と中央寄せ、最後にボタンを押すと文字が変わるJavaScriptを、段階ごとに1つずつ追加で教えてください。

</div></div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">デベロッパーツールの開き方</div><div class="b">

- <span class="hl">F12</span>、または右クリック →「<span class="hl">検証</span>」
- <span class="hl">Elements</span>＝今のページの中身(HTML)
- <span class="hl">Console</span>＝命令を打ち込める対話窓

</div></div>

<div class="cbox green"><div class="h">ペアで挑戦 ── 作って・保存して・開く</div><div class="b">

- ① Gemに上のプロンプトを貼り、<span class="hl">最小HTML</span>をもらう
- ② メモ帳／テキストエディタに貼り、<span class="hl">「test.html」</span>の名前で保存（文字コードUTF-8）
- ③ 保存したファイルを<span class="hl">ダブルクリック</span>＝ブラウザで表示される
- ④ Gemに続きを聞き、<span class="red">CSS→JS</span>を1つずつ足して育てる
- ペアで<span class="hl">画面を見せ合い</span>ながら進める（交代で操作）

</div></div>

</div>
</div>

<!-- 開発者ツールの最低限+段階的なWeb制作体験。HTML/CSS/JSの役割を手で実感。 -->

---

<!-- _class: summary -->

<div class="page-title">体験ワーク① 案内</div>

## netlab1「あなたのパケットの旅」── 第8回の総復習

<div class="grid2">
<div>

<div class="cbox blue"><div class="h">Colabで手を動かす内容</div><div class="b">

- IPアドレスを<span class="hl">2進数</span>で見てみる
- 自分の<span class="hl">グローバルIP</span>を確認
- <span class="hl">DNS</span>を dig で引いて住所に変換
- <span class="hl">サブネット</span>の計算を体験

</div></div>

</div>
<div>

<div class="cbox green"><div class="h">さらに踏み込む</div><div class="b">

- データが包まれる<span class="hl">カプセル化</span>を可視化
- IP:443 へ<span class="red">直接リクエスト</span>を送ってみる

</div></div>

<div class="band" style="font-size:18px">前回の「道」を、<span class="hl">コードで一気通貫</span>にたどり直す回</div>

</div>
</div>

<div class="ask">Colabのリンクは <span class="hl">Moodle を参照</span>。開いて上から順に実行するだけでOK</div>

<div class="takeaway">netlab1はIP・DNS・サブネット・カプセル化を手で確かめる総復習。</div>

<!-- 体験ワーク1=前回内容のハンズオン総復習。リンクはMoodle案内。 -->

---

<!-- _class: divider -->

<div class="chapter-num">STEP 9 ／ 解説</div>

# 安全な通信 ― TLS/SSL と HTTPS

## 鍵マークの正体と、暗号化の仕組み

<!-- ここが今日の防犯のヤマ。鍵マークの意味を正しく理解させる。 -->

---

<!-- _class: split -->

<div class="page-title">そのままだと丸見え</div>

## HTTP のままだと、通信は「はがき」── 途中で読める

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 280" width="100%" style="max-height:330px">
  <g text-anchor="middle" font-size="14">
    <rect class="card" x="20" y="50" width="100" height="56" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="70" y="82" font-weight="700" fill="#7d1322">あなた</text>
    <rect class="card" x="260" y="50" width="100" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="310" y="82" font-weight="700" fill="#3C8A57">サーバ</text>
    <path d="M122,78 L256,78" stroke="#888" stroke-width="2" fill="none" marker-end="url(#ar)"/>
    <rect x="120" y="92" width="140" height="26" rx="4" fill="#fff" stroke="#A6192E"/><text x="190" y="110" font-size="13" font-family="monospace" fill="#7d1322">pass=abc123</text>
    <g><rect class="card" x="135" y="160" width="110" height="60" rx="8" fill="#f3d6d6" stroke="#A6192E" stroke-width="2.5"/><text x="190" y="186" font-size="14" font-weight="800" fill="#A6192E">盗聴者</text><text x="190" y="206" font-size="12" fill="#7d1322">中身が読める</text></g>
    <path d="M190,120 L190,156" stroke="#A6192E" stroke-width="2" stroke-dasharray="4 3" fill="none" marker-end="url(#ar)"/>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">平文（暗号化なし）の危険</div><div class="b">

- POST（入力をURLに出さず本文で送る方法）でも<span class="red">経路上では平文で読める</span>
- 公衆Wi-Fiなどでは<span class="hl">第三者が覗ける</span>
- パスワード・カード番号がそのまま流れる

</div></div>

<div class="band">隠す（POST）と暗号化（TLS）は<span class="hl">別物</span>。本当に守るには通信そのものを暗号化する必要がある。</div>

<div class="ask">URLが「http://」だけのログイン画面、入力していい？</div>

</div>
</div>

<div class="takeaway">HTTPだけは「はがき」。POSTでも経路上は平文で読まれうる。</div>

<!-- 前章のPOST≠暗号化を回収。次でHTTPSが解決すると示す。 -->

---

<!-- _class: fig -->

<div class="page-title">HTTPS</div>

## HTTPS ＝ HTTP ＋ TLS ── 「はがき」を「封筒」に変える

<div class="fig-area">
<svg viewBox="0 0 920 280" width="100%" style="max-height:300px">
  <g text-anchor="middle" font-size="15">
    <rect class="card" x="60" y="70" width="160" height="100" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="140" y="104" font-size="17" font-weight="800" fill="#7d1322">ブラウザ</text><text x="140" y="130" fill="#555">🔒 鍵マーク</text><text x="140" y="152" fill="#555" font-size="13">https://…</text>
    <rect class="card" x="700" y="70" width="160" height="100" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="780" y="104" font-size="17" font-weight="700" fill="#3C8A57">Webサーバ</text><text x="780" y="130" fill="#555">証明書を提示</text>
    <rect x="250" y="92" width="420" height="56" rx="28" fill="#DDEBC8" stroke="#3C8A57" stroke-width="2"/><text x="460" y="118" font-size="16" font-weight="800" fill="#2f6b43">🔒 暗号化された通信路（TLS）</text><text x="460" y="138" font-size="13" fill="#3C8A57">中身を読まれない・書き換えられない</text>
    <path d="M222,120 L248,120" stroke="#3C8A57" stroke-width="2.5" fill="none"/>
    <path d="M672,120 L698,120" stroke="#3C8A57" stroke-width="2.5" fill="none"/>
    <g><rect x="405" y="186" width="110" height="56" rx="8" fill="#f0f0f0" stroke="#888" stroke-width="2"/><text x="460" y="212" font-size="14" font-weight="700" fill="#666">盗聴者</text><text x="460" y="230" font-size="12" fill="#888">読めない…</text></g>
    <path d="M460,150 L460,184" stroke="#888" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
  </g>
</svg>
</div>

<div class="band">アドレスバーの<span class="hl">🔒鍵マーク</span>と「<span class="hl">https://</span>」が、暗号化されている合図。ログインや決済は必ずこれを確認。</div>

<div class="takeaway">HTTPS＝HTTPを暗号化したもの。鍵マークが「封筒で守られている」印。</div>

<!-- 鍵マークの意味を正面から。ただし「鍵=絶対安全」ではない(次の証明書へ)。 -->

---

<!-- _class: split -->

<div class="page-title">TLSの仕組み</div>

## どうやって鍵を共有する？ ── 「公開鍵」で安全に渡す

<div class="split-body">
<div class="left">

<svg viewBox="-6 -6 372 332" width="100%" style="max-height:400px">
  <g font-size="14">
    <rect class="card" x="20" y="10" width="150" height="44" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2" /><text x="95" y="38" text-anchor="middle" font-weight="800" fill="#7d1322">あなた</text>
    <rect class="card" x="190" y="10" width="150" height="44" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="265" y="38" text-anchor="middle" font-weight="700" fill="#3C8A57">サーバ</text>
    <text x="30" y="86" font-size="13" fill="#333">① 接続。サーバが「公開鍵＋</text><text x="30" y="104" font-size="13" fill="#333">　証明書」を渡す</text>
    <path d="M265,56 L110,80" stroke="#3C8A57" stroke-width="2" fill="none" marker-end="url(#ar2r)"/>
    <text x="30" y="140" font-size="13" fill="#333">② 証明書を確認（本物の</text><text x="30" y="158" font-size="13" fill="#333">　サーバか？）</text>
    <text x="30" y="194" font-size="13" fill="#333">③ 共通鍵を作り、公開鍵で</text><text x="30" y="212" font-size="13" fill="#333">　<tspan fill="#A6192E" font-weight="700">施錠して</tspan>送る（誰も開けない）</text>
    <path d="M110,228 L265,205" stroke="#A6192E" stroke-width="2" fill="none" marker-end="url(#ar)"/>
    <text x="30" y="248" font-size="13" fill="#333">④ サーバだけが開錠 → 二人</text><text x="30" y="266" font-size="13" fill="#333">　だけが共通鍵を持つ</text>
    <rect x="20" y="282" width="320" height="38" rx="8" fill="#DDEBC8" stroke="#3C8A57"/><text x="180" y="306" text-anchor="middle" font-size="14" font-weight="800" fill="#2f6b43">⑤ 以降は共通鍵で高速に暗号通信</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">公開鍵暗号（前回の応用）</div><div class="b">

- <span class="red">公開鍵で施錠</span>、対応する<span class="red">秘密鍵だけで開錠</span>
- 鍵を盗み見られても、開けられるのは受け手だけ
- これで「最初の共通鍵」を安全に渡せる

</div></div>

<div class="cbox green"><div class="h">なぜ2段階？</div><div class="b">

- 公開鍵方式は安全だが<span class="hl">遅い</span>
- 最初だけ公開鍵で共通鍵を配り、<span class="red">本番は速い共通鍵</span>で

</div></div>

<div class="band" style="font-size:17px">＝ 安全さ（公開鍵）と速さ（共通鍵）の<span class="hl">いいとこ取り</span></div>

<div class="src" style="margin-top:4px">※仕組みを簡単にした説明。最新方式(TLS1.3)では二人が公開情報を交換し<strong>同じ共通鍵を計算</strong>する。</div>

</div>
</div>

<div class="takeaway">最初だけ公開鍵で共通鍵を安全に配り、本番は速い共通鍵で暗号化。

</div>

<!-- 前回の公開鍵暗号を応用。ハイブリッド方式の理由(速さ)まで触れる。要点版なので数式は出さない。 -->

---

<!-- _class: split -->

<div class="page-title">証明書を見る</div>

## 鍵マークの隣 ── 「誰のサイトか」を証明書で確かめる

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">証明書 ＝ 身分証明書</div><div class="b">

- 「このサーバは確かに <span class="red">portal.gs.chiba-u.jp</span> 本人」
- 信頼できる第三者（<span class="hl">認証局 CA</span>）が発行・保証
- 鍵マークをクリックすると <span class="hl">発行先・有効期限</span>が見える

</div></div>

<div class="cbox red"><div class="h">鍵マーク＝「絶対安全」ではない</div><div class="b">

- 鍵マークは「<span class="red">通信が暗号化されている</span>」印
- 偽サイトでも鍵マークは付けられる
- だから<span class="hl">URL（サーバ名）も自分の目で確認</span>

</div></div>

</div>
<div class="right">

<svg viewBox="-6 -6 372 302" width="100%" style="max-height:360px">
  <g font-size="14">
    <rect class="card" x="20" y="14" width="320" height="40" rx="8" fill="#f7f7f7" stroke="#ccc"/><text x="40" y="40" font-size="15">🔒</text><text x="66" y="40" font-family="monospace" font-size="14" fill="#2f6b43">https://portal.gs.chiba-u.jp</text>
    <path d="M70,56 L150,84" stroke="#A6192E" stroke-width="2" fill="none" marker-end="url(#ar)"/>
    <rect class="card" x="60" y="86" width="280" height="186" rx="10" fill="#fff" stroke="#3E78B2" stroke-width="2"/>
    <text x="200" y="114" text-anchor="middle" font-size="16" font-weight="800" fill="#3E78B2">証明書の情報</text>
    <line x1="80" y1="126" x2="320" y2="126" stroke="#ddd"/>
    <text x="80" y="152" font-size="14" fill="#555">発行先：</text><text x="150" y="152" font-size="14" font-weight="700" fill="#333">portal.gs.chiba-u.jp</text>
    <text x="80" y="186" font-size="14" fill="#555">発行者：</text><text x="150" y="186" font-size="14" font-weight="700" fill="#333">（認証局 CA）</text>
    <text x="80" y="220" font-size="14" fill="#555">有効期限：</text><text x="160" y="220" font-size="14" font-weight="700" fill="#333">2026-03 〜 2027-03</text>
    <text x="80" y="254" font-size="13" fill="#A6192E" font-weight="700">期限切れ・発行先違いは要注意！</text>
  </g>
</svg>

</div>
</div>

<div class="takeaway">鍵マーク＝暗号化の印。本物かは「発行先＝URL」で必ず自分の目で確認。</div>

<!-- 鍵マーク神話を崩す重要スライド。証明書の発行先とURLを見る習慣を強調。 -->

---

<!-- _class: summary -->

<div class="page-title">体験ワーク② 案内</div>

## netlab2「安全に使うしくみ」── TLS解説の直後に実施

<div class="grid2">
<div>

<div class="cbox orange"><div class="h">暗号の基本を体験</div><div class="b">

- <span class="hl">シーザー暗号</span>と、その<span class="red">総当たり解読</span>
- <span class="hl">ハッシュ</span>でパスワードを守るしくみ
- <span class="hl">公開鍵</span>のミニ体験(鍵が2つ)

</div></div>

</div>
<div>

<div class="cbox red"><div class="h">本物・安全を確かめる</div><div class="b">

- サーバの<span class="hl">証明書</span>を覗いてみる
- <span class="hl">平文 vs HTTPS</span>で、見え方の違いを比較

</div></div>

<div class="band" style="font-size:18px">「鍵マーク」の中で<span class="hl">何が起きているか</span>を自分の手で確認</div>

</div>
</div>

<div class="ask">Colabのリンクは <span class="hl">Moodle を参照</span>。TLSの解説のあと、みんなで一緒に進めます</div>

<div class="takeaway">netlab2は暗号・ハッシュ・公開鍵・証明書を体験する安全のしくみ編。</div>

<!-- 体験ワーク2=暗号/TLS関連のハンズオン。TLS解説直後に全員で実施と位置づけ。 -->

---

<!-- _class: divider -->

<div class="chapter-num">STEP 11 ／ 予備</div>

# 授業で残った話

## 時間があれば ── Webの「動く裏側」と足あと

<!-- 時間調整用。HTTPの会話・GET/POST・Cookie・動的ページ・ログ・ストリーミングをここに集約。 -->

---

<!-- _class: fig -->

<div class="page-title">HTTPの会話</div>

## 「ページをください → はい、どうぞ」だけの単純な往復

<div class="fig-area">
<svg viewBox="0 0 920 300" width="100%" style="max-height:330px">
  <g font-size="15">
    <rect class="card" x="40" y="40" width="150" height="56" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="115" y="66" font-weight="800" fill="#7d1322" text-anchor="middle">ブラウザ</text><text x="115" y="86" fill="#555" font-size="13" text-anchor="middle">あなた</text>
    <rect class="card" x="730" y="40" width="150" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="805" y="66" font-weight="800" fill="#3C8A57" text-anchor="middle">Webサーバ</text><text x="805" y="86" fill="#555" font-size="13" text-anchor="middle">www.chiba-u.ac.jp</text>
    <rect x="120" y="120" width="380" height="48" rx="6" fill="#1f2430"/><text x="138" y="140" fill="#f0c674" font-size="15" font-family="monospace">GET /index.html HTTP/1.1</text><text x="138" y="158" fill="#9fd0ff" font-size="14" font-family="monospace">Host: www.chiba-u.ac.jp</text>
    <text x="310" y="186" fill="#A6192E" font-size="14" font-weight="700" text-anchor="middle">① 要求（リクエスト）＝「このページくれ」</text>
    <path d="M195,144 L720,144" stroke="#A6192E" stroke-width="2" fill="none" marker-end="url(#ar)"/>
    <rect x="420" y="208" width="430" height="66" rx="6" fill="#1f2430"/><text x="438" y="228" fill="#8ab4f8" font-size="15" font-family="monospace">HTTP/1.1 200 OK</text><text x="438" y="246" fill="#7fd1b9" font-size="14" font-family="monospace">Content-Type: text/html</text><text x="438" y="264" fill="#e6e6e6" font-size="14" font-family="monospace">&lt;html&gt; … ページの中身 … &lt;/html&gt;</text>
    <text x="635" y="200" fill="#3C8A57" font-size="14" font-weight="700" text-anchor="middle">② 応答（レスポンス）＝「はい、200 OK」</text>
    <path d="M725,236 L200,236" stroke="#3C8A57" stroke-width="2" fill="none" marker-end="url(#ar2r)"/>
  </g>
</svg>
</div>

<div class="band">毎回1往復で完結。「<span class="hl">200 OK</span>」が成功の合図。状態を覚えない（＝<span class="hl">ステートレス</span>＝毎回“はじめまして”、後述のCookieへ）。</div>

<div class="takeaway">HTTP＝「ページください（GET）→ 200 OK で返す」のシンプルな往復。</div>

<!-- 生のリクエスト/レスポンスを1枚で。200 OKという数字に注目させる。次でステータスコード一覧。 -->

---

<!-- _class: split -->

<div class="page-title">メソッドと番号</div>

## 「動詞」と「3桁の番号」── 実は毎日見ている

<div class="split-body">
<div class="left">

<table class="dtbl" style="width:100%; font-size:16px">
<tr><th>メソッド</th><th>意味</th></tr>
<tr><td class="l"><span class="red">GET</span></td><td class="l">ページ・データを<strong>もらう</strong></td></tr>
<tr><td class="l"><span class="red">POST</span></td><td class="l">フォーム等を<strong>送る</strong></td></tr>
<tr><td class="l">PUT</td><td class="l">データを保存・更新</td></tr>
<tr><td class="l">DELETE</td><td class="l">データを削除</td></tr>
</table>

<div class="band" style="font-size:16px; margin-top:8px">サーバへの「<span class="hl">動詞</span>」。普段は GET と POST が大半。</div>

</div>
<div class="right">

<table class="dtbl" style="width:100%; font-size:16px">
<tr><th>番号</th><th>意味（見たことある？）</th></tr>
<tr><td><span class="hl-green">200</span></td><td class="l">OK：成功</td></tr>
<tr><td><span class="hl-yellow">301/302</span></td><td class="l">転送（引っ越し）</td></tr>
<tr><td><span class="red">403</span></td><td class="l">Forbidden：閲覧禁止</td></tr>
<tr><td><span class="red">404</span></td><td class="l">Not Found：ページ無し</td></tr>
<tr><td><span class="red">500</span></td><td class="l">サーバ側のエラー</td></tr>
</table>

<div class="ask">「404」を見たことある人？ あれはサーバが「そのページ無いよ」と<span class="hl">番号で答えている</span>合図。</div>

</div>
</div>

<div class="takeaway">「404」「403」は故障ではなく、HTTPの正式な返事（ステータスコード）。</div>

<!-- 404/403を実体験として聞く。エラー画面が「会話の返事」だと分かると怖くなくなる。 -->

---

<!-- _class: fig -->

<div class="page-title">URLの構造</div>

## URL は「住所」── 4つの部品でできている

<div class="fig-area">
<svg viewBox="0 0 920 250" width="100%" style="max-height:280px">
  <g font-size="20" font-family="monospace" text-anchor="middle">
    <rect x="40" y="40" width="120" height="46" rx="6" fill="#f3d6d6" stroke="#A6192E"/><text x="100" y="70" fill="#7d1322" font-weight="700">https</text>
    <text x="172" y="70" fill="#666">://</text>
    <rect x="196" y="40" width="250" height="46" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="321" y="70" fill="#2a5680" font-weight="700">www.chiba-u.ac.jp</text>
    <rect x="446" y="40" width="190" height="46" rx="6" fill="#eef7ef" stroke="#3C8A57"/><text x="541" y="70" fill="#2f6b43" font-weight="700">/section/faculty</text>
    <rect x="636" y="40" width="244" height="46" rx="6" fill="#fdf3e8" stroke="#D98A2B"/><text x="758" y="70" fill="#9a5a14" font-weight="700">/education.html</text>
  </g>
  <g font-size="15" text-anchor="start">
    <text x="40" y="128" font-weight="800" fill="#A6192E">① プロトコル</text><text x="40" y="150" fill="#555">https＝暗号化されたWeb通信（他に http, file）</text>
    <text x="40" y="180" font-weight="800" fill="#3E78B2">② サーバ名（FQDN）</text><text x="40" y="202" fill="#555">Webサーバの正式な名前。DNSで住所(IP)に変換（前回）</text>
    <text x="480" y="128" font-weight="800" fill="#3C8A57">③ パス</text><text x="480" y="150" fill="#555">サーバ内のフォルダの場所</text>
    <text x="480" y="180" font-weight="800" fill="#D98A2B">④ ファイル名</text><text x="480" y="202" fill="#555">欲しいページ。省略時は index.html と解釈</text>
  </g>
</svg>
</div>

<div class="band"><span class="hl">「/」より左がサーバ名、右が中身の場所</span>。怪しいURLは②のサーバ名をまず確認（後述のフィッシング対策）。</div>

<div class="takeaway">URL＝「どの作法で・どのサーバの・どこの・何を」を表す住所。</div>

<!-- URLを部品に分解。②サーバ名を見る習慣がフィッシング対策に効くと前振り。 -->

---

<!-- _class: split -->

<div class="page-title">GET と POST</div>

## 検索は GET、ログインは POST ── 違いは「どこに乗せるか」

<div class="split-body">
<div class="left">

<svg viewBox="-6 -6 372 322" width="100%" style="max-height:390px">
  <g text-anchor="middle">
    <rect class="card" x="20" y="14" width="320" height="128" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="180" y="40" font-size="17" font-weight="800" fill="#3C8A57">GET</text>
    <text x="180" y="64" font-size="14" fill="#555">データを「URLの末尾」に付けて送る</text>
    <rect x="40" y="78" width="280" height="30" rx="5" fill="#fff" stroke="#3C8A57"/><text x="180" y="98" font-size="13" font-family="monospace" fill="#2f6b43">/search?q=千葉大学</text>
    <text x="180" y="128" font-size="13" fill="#A6192E" font-weight="700">URL・履歴に残る → 検索向き</text>
    <rect class="card" x="20" y="162" width="320" height="138" rx="10" fill="#f3d6d6" stroke="#A6192E" stroke-width="2.5"/>
    <text x="180" y="188" font-size="17" font-weight="800" fill="#A6192E">POST</text>
    <text x="180" y="212" font-size="14" fill="#555">データを「本文」に入れて送る</text>
    <rect x="40" y="226" width="280" height="44" rx="5" fill="#fff" stroke="#A6192E"/><text x="180" y="244" font-size="13" font-family="monospace" fill="#7d1322">本文: user=kyoko</text><text x="180" y="262" font-size="13" font-family="monospace" fill="#7d1322">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass=abc123</text>
    <text x="180" y="290" font-size="13" fill="#A6192E" font-weight="700">URL・履歴に残らない（中身は平文）</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">GET（もらう・検索）</div><div class="b">

- 内容が<span class="red">URLに丸見え</span>・履歴やブックマークに残る
- 検索キーワードや「ページ番号」などに使う

</div></div>

<div class="cbox red"><div class="h">POST（送る・登録）</div><div class="b">

- 内容は本文に入り<span class="red">URLには出ない</span>
- パスワード・問い合わせフォームなどに使う

</div></div>

<div class="band" style="font-size:18px"><span class="hl">注意</span>：POSTでも、HTTPのままなら途中で<span class="red">盗み見られる</span>。隠す＝暗号化ではない（→ 後半のTLS）。</div>

</div>
</div>

<div class="takeaway">GETはURLに乗る／POSTは本文に隠す。ただし隠す≠暗号化。</div>

<!-- GET/POSTの実用差。POSTでもHTTPなら平文という重要な前振りをここで打つ。 -->

---

<!-- _class: fig -->

<div class="page-title">Cookie</div>

## HTTPは「忘れっぽい」── だから Cookie で覚えさせる

<div class="fig-area">
<svg viewBox="0 0 920 290" width="100%" style="max-height:310px">
  <g text-anchor="middle" font-size="15">
    <rect class="card" x="60" y="100" width="160" height="90" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="140" y="134" font-size="17" font-weight="800" fill="#7d1322">ブラウザ</text><text x="140" y="160" fill="#555" font-size="14">Cookieを保管</text>
    <rect class="card" x="700" y="100" width="160" height="90" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="780" y="134" font-size="17" font-weight="700" fill="#3C8A57">Webサーバ</text>
    <path d="M222,128 L695,128" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar2r)"/>
    <text x="460" y="112" font-size="15" fill="#3C8A57" font-weight="700">① 初回：Set-Cookie: id=abc123（合言葉を渡す）</text>
    <path d="M695,168 L225,168" stroke="#A6192E" stroke-width="2.5" fill="none" marker-end="url(#ar)"/>
    <text x="460" y="190" font-size="15" fill="#A6192E" font-weight="700">② 次回から：Cookie: id=abc123（合言葉を見せる）</text>
    <rect x="60" y="214" width="800" height="56" rx="8" fill="#FBEFC8" stroke="#D98A2B"/><text x="460" y="238" font-size="15" fill="#7a5410" font-weight="700">サーバは合言葉で「さっきの人だ」と分かる → ログイン状態・買い物カゴを維持できる</text><text x="460" y="258" font-size="13" fill="#7a5410">一方で、広告会社のCookieは閲覧行動の追跡（トラッキング）にも使われる</text>
  </g>
</svg>
</div>

<div class="band">HTTPは毎回相手を忘れる（ステートレス）。Cookie＝<span class="hl">サーバが渡す合言葉</span>で「同じ人」を覚える仕組み。</div>

<div class="takeaway">Cookieは便利（ログイン維持）でもあり、追跡（プライバシー）でもある。</div>

<!-- 「Cookieを許可しますか」の正体。便利さと追跡の両面を1枚で示す。プライバシーに接続。 -->

---

<!-- _class: split -->

<div class="page-title">静的と動的</div>

## 決まった文書を返すか、その場で作って返すか

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 280" width="100%" style="max-height:320px">
  <g text-anchor="middle" font-size="14">
    <text x="190" y="24" font-size="15" font-weight="800" fill="#3E78B2">動的ページ（CGI／サーバサイド）</text>
    <rect class="card" x="20" y="44" width="100" height="54" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="70" y="70" font-weight="700" fill="#7d1322">ブラウザ</text><text x="70" y="88" font-size="12" fill="#555">「千葉県で検索」</text>
    <rect class="card" x="140" y="44" width="100" height="54" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="190" y="64" font-weight="700" fill="#3C8A57" font-size="13">Webサーバ</text><text x="190" y="84" font-size="11" fill="#555">＋プログラム</text>
    <rect class="card" x="260" y="44" width="100" height="54" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="310" y="64" font-weight="700" fill="#D98A2B" font-size="13">データベース</text><text x="310" y="84" font-size="11" fill="#555">名簿・商品…</text>
    <path d="M122,71 L138,71" stroke="#888" stroke-width="2" marker-end="url(#ar)"/>
    <path d="M242,71 L258,71" stroke="#888" stroke-width="2" marker-end="url(#ar)"/>
    <rect x="40" y="124" width="300" height="40" rx="6" fill="#1f2430"/><text x="190" y="149" font-size="13" font-family="monospace" fill="#f0c674">SELECT 氏名 FROM 名簿 WHERE 住所='千葉'</text>
    <text x="190" y="186" font-size="13" fill="#555">DBに“千葉の人を出して”と頼む（SQL）</text>
    <text x="190" y="206" font-size="13" fill="#555">→ 結果をその場で HTML にして返す</text>
    <rect x="40" y="224" width="300" height="40" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="190" y="249" font-size="13" font-weight="700" fill="#2f6b43">検索結果・マイページ・SNSの投稿一覧</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox gray"><div class="h">静的ページ</div><div class="b">

- あらかじめ用意した<span class="red">同じHTML</span>を返すだけ
- 例：お知らせ・固定の説明ページ

</div></div>

<div class="cbox blue"><div class="h">動的ページ（CGI・サーバサイド）</div><div class="b">

- リクエストに応じ<span class="red">その場でページを生成</span>
- サーバ上のプログラム（php等）が<span class="hl">DBに問い合わせ</span>
- 検索結果・マイページ・SNSなど、人ごとに違う表示

</div></div>

<div class="band" style="font-size:17px">前回の <span class="hl">DB・SQL</span> が、ここで Web と繋がる</div>

</div>
</div>

<div class="takeaway">人ごとに違うページは、サーバがDBに問い合わせ、その場で作っている。</div>

<!-- 前回のDB/SQLとの接続。CGI=サーバ側で生成、を概念図で(perlコードは出さない)。 -->

---

<!-- _class: fig -->

<div class="page-title">アクセスログ</div>

## サーバは「誰がいつ何を見たか」を記録している

<div class="fig-area">
<svg viewBox="0 0 920 240" width="100%" style="max-height:260px">
  <rect x="40" y="30" width="840" height="92" rx="8" fill="#1f2430"/>
  <g font-family="monospace" font-size="15" fill="#e6e6e6">
    <text x="60" y="58"><tspan fill="#8ab4f8">133.82.xx.xx</tspan> - - [09/Jun/2026:14:23:01] <tspan fill="#f0c674">"GET /index.html"</tspan> <tspan fill="#7fd1b9">200</tspan> 7251</text>
    <text x="60" y="86">　 <tspan fill="#cfcfcf">"https://moodle.chiba-u.jp/"</tspan></text>
    <text x="60" y="110">　 <tspan fill="#cfcfcf">"Mozilla/5.0 (Windows; …) Chrome/…"</tspan></text>
  </g>
  <g font-size="14" fill="#333">
    <text x="60" y="158">記録される例：</text>
    <text x="80" y="184">・<tspan font-weight="700" fill="#3E78B2">IPアドレス</tspan>（どこから）　・<tspan font-weight="700" fill="#3C8A57">日時</tspan>　・<tspan font-weight="700" fill="#D98A2B">見たページ</tspan>　・<tspan font-weight="700" fill="#A6192E">結果(200/404)</tspan></text>
    <text x="80" y="210">・直前のページ（どこから来たか）　・ブラウザ/OSの種類（User-Agent）</text>
  </g>
</svg>
</div>

<div class="band">あなたのアクセスは<span class="hl">必ず足跡を残す</span>。匿名のつもりでも、IPや時刻から特定されうる。</div>

<div class="takeaway">Web閲覧は記録される。「ネットに完全な匿名はない」と意識する。</div>

<!-- プライバシー・情報倫理の核。ログに残る=軽率な書き込みの危うさへ繋ぐ。 -->

---

<!-- _class: split -->

<div class="page-title">動画ストリーミング</div>

## 動画が「すぐ」始まるのは、全部待たずに少しずつ送るから

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 250" width="100%" style="max-height:280px">
  <g font-size="13">
    <text x="20" y="40" font-size="14" font-weight="800" fill="#A6192E">① ダウンロード</text>
    <rect x="20" y="52" width="240" height="26" rx="4" fill="#f3d6d6" stroke="#A6192E"/><text x="140" y="70" text-anchor="middle" font-size="12" fill="#7d1322">全部届くまで待つ → 再生</text>
    <text x="20" y="110" font-size="14" font-weight="800" fill="#3C8A57">② ストリーミング</text>
    <g fill="#DDEBC8" stroke="#3C8A57">
      <rect x="20" y="122" width="40" height="26" rx="3"/><rect x="66" y="122" width="40" height="26" rx="3"/><rect x="112" y="122" width="40" height="26" rx="3"/><rect x="158" y="122" width="40" height="26" rx="3"/>
    </g>
    <text x="210" y="140" font-size="12" fill="#2f6b43">少しずつ届く</text>
    <path d="M40,158 L40,178" stroke="#3C8A57" stroke-width="2" marker-end="url(#ar2r)"/>
    <text x="20" y="200" font-size="13" fill="#2f6b43" font-weight="700">最初のかたまりが届いた瞬間に再生開始</text>
    <text x="20" y="224" font-size="12" fill="#555">YouTube・Netflix・Moodleの動画</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">ストリーミングの考え方</div><div class="b">

- データを<span class="red">小さく分けて少しずつ</span>送る
- 最初のかたまりが届いた時点で<span class="hl">すぐ再生</span>
- 全体を保存せず「流しながら見る」

</div></div>

<div class="cbox gray"><div class="h">前回の「パケット」と同じ発想</div><div class="b">

- 大きなデータを小分けにして運ぶ（パケット）
- 通信が混んでも、止まらず流し続けられる

</div></div>

<div class="band" style="font-size:17px">この授業のオンデマンド動画も同じ仕組みで届いている</div>

</div>
</div>

<div class="takeaway">ストリーミング＝全部待たず、届いた先から再生。身近な分割配信。</div>

<!-- 締めの身近な応用。前回のパケット概念と繋がる。オンデマンド動画も同じと実感。 -->

---

<!-- _class: summary -->

<div class="page-title">次回予告・連絡</div>

## 来週は小テスト、対面はあと1回です

<div class="cbox blue"><div class="h">第10回(来週)について</div><div class="b">

- 第8回(<span class="hl">TCP/IP</span>)の範囲で<span class="hl">小テスト</span>を行います
- 難易度は<span class="red">やさしめ</span>。<span class="hl">期末試験の練習</span>として位置づけます
- 対面授業は<span class="red">残り1回のみ</span>。落ち着いて復習しておきましょう

</div></div>

<div class="cbox green"><div class="h">今日の宿題</div><div class="b">

- 今日の<span class="hl">リフレクション</span>を <span class="hl">Moodle</span> に提出してください
- 「分かったこと・まだ曖昧なこと」を一言ずつでOK

</div></div>

<div class="band" style="text-align:center;background:#FBEFC8;border-color:#D98A2B">おつかれさまでした。来週の小テストで、前回の理解をいっしょに固めましょう</div>

<div class="takeaway">来週は第8回範囲の小テスト(やさしめ)。リフレクションをMoodleへ。</div>

<!-- 締め。小テスト=期末の練習と安心させ、リフレクション提出を依頼。対面残1回も明示。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## この回の要点 ── 5つのポイントを振り返る

<div class="grid2">
<div>

<ul>
<li><span class="hl">アプリ層</span>＝人が使うサービスごとの「会話のルール」。下の層(IP/TCP)が運び、上の層が話す</li>
<li><span class="hl">HTTP</span>＝「ページください(GET)→200 OKで返す」往復。<span class="hl">URL</span>は住所、<span class="hl">404/403</span>は正式な返事。HTTPは忘れっぽいので<span class="hl">Cookie</span>で覚える</li>
<li>メールは郵便局(サーバ)経由。<span class="hl">送る＝SMTP／取り出す＝POP・IMAP</span>。Fromは詐称でき、フィッシングに注意</li>
</ul>

</div>
<div>

<ul>
<li><span class="hl">HTTPS＝HTTP＋TLS</span>。🔒鍵マークは暗号化の印。最初だけ公開鍵で共通鍵を配り本番は共通鍵。本物かは<span class="hl">URL・証明書</span>で確認</li>
<li>動的ページは<span class="hl">サーバ側プログラム＋DB(SQL)</span>がその場で生成。JavaScriptはブラウザ側。アクセスは<span class="hl">ログに残る</span></li>
</ul>

</div>
</div>

<div class="episode"><div class="h">なぜ「しくみ」を学ぶのか</div>仕組みを知っていれば、<span class="hl">鍵マークとURLを見る・Fromを疑う</span>だけでフィッシングの多くを防げる。<span class="red">安全に使えるとき</span>が自分で判断できるようになる。</div>

<!-- 5章を2列で凝縮。最後にフィッシング防御=しくみ理解の実利で締める。 -->

---

<!-- _class: summary -->

<div class="page-title">本日のプロンプト集</div>

## コピペで使える ── NotebookLM と Gem への指示

<div class="sections">

<div class="sec-box">

### ① NotebookLM（ワーク①）

<div class="promptcard"><div class="h">📋 第8回スライドを入れて貼る</div><div class="b">TCP/IPの4層を「宅配便」の比喩で説明して。専門用語は1つずつ日常語に言い換えて。最後に理解度チェックを3問つくって。</div></div>

</div>

<div class="sec-box">

### ② Gem：メールヘッダ解説（ワーク②）

<div class="promptcard"><div class="h">📋 ヘッダ全文を貼る</div><div class="b">次のメールヘッダを初学者にやさしく解説して。誰から誰へ／中継経路／<span class="red">From詐称の有無</span>／注意点。</div></div>

</div>

<div class="sec-box">

### ③ Gem：Web制作コーチ（ワーク③）

<div class="promptcard"><div class="h">📋 手書きHTMLを貼る</div><div class="b">このHTMLを STEP1=構造 → STEP2=CSSで装飾 → STEP3=JavaScriptで動き の順に、各コード全文と変更点を説明して。</div></div>

</div>

</div>

<div class="takeaway">プロンプトは「役割・入力・出してほしい形」を書くと精度が上がる。</div>

<!-- 当日スクリーンに出してコピペさせる用。詳細台本は script/lesson-plan-90min.md。 -->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A・次回</div>

# 質問・課題

## 今日の内容で、毎日のWeb・メールの「裏側」が見えるように

<table class="dtbl">
<tr><th>項目</th><th>内容</th><th>場所・期限</th></tr>
<tr><td class="l">質問</td><td class="l">この場で／Moodleフォーラムでも可</td><td>教室 ／ Moodle</td></tr>
<tr><td class="l">課題</td><td class="l">確認課題＋リフレクションシート</td><td>Moodle ／ <span class="hl">6/23（火）〆切</span></td></tr>
<tr><td class="l">やってみる</td><td class="l">「ページのソースを表示」「🔒鍵マークの証明書を見る」</td><td>各自のブラウザ</td></tr>
</table>

<div class="band" style="text-align:center;background:#FBEFC8;border-color:#D98A2B">おつかれさまでした。今日から、鍵マークとURLを「見る」習慣を。</div>

<div class="takeaway">第10回は、前回・今回をまとめた小テスト（期末の練習）を授業内で行います。</div>

<!-- 対面なのでその場でQ&A。実習(ソース表示・証明書確認)を宿題的に促す。次回小テスト予告。 -->
