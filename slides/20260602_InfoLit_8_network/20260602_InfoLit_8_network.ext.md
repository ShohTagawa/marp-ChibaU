---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ第8回</div><img class="hdr-logo" src="../assets/logo-info-literacy.png">'
footer: ''
style: |
  /* ╔══════════════════════════════════════════════════════════╗
     ║  ヘッダー帯の見た目つまみ ─ ここの数値だけ変えればOK       ║
     ╚══════════════════════════════════════════════════════════╝ */
  :root {
    --hdr-left-w: 23%;   /* 左の赤帯(デックタイトル)の幅。タイトルの長さに合わせる */
    --pt-width:   32%;   /* 中央ページタイトル帯の幅(文字が折り返すなら広く) */
    /* 左帯と中央帯の白い隙間つまみ：
         4px  → 元のデザイン：間に白い隙間が出る(これはこれでカッコいい)
         0    → 隙間ゼロでピタッと接する
         -4px → 4px重ねて完全に白を消す(現在)                          */
    --hdr-gap:   -4px;
    /* ↓この式は触らなくてOK(左帯の右スラントに中央帯を噛み合わせる) */
    --pt-left: calc(var(--hdr-left-w) - var(--hdr-slant) + var(--hdr-gap));
  }
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
  .ph { border:2px dashed #c4a0a8; border-radius:8px; background:#fdf6f7; color:#a86b76; display:flex; align-items:center; justify-content:center; text-align:center; font-size:15px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:17px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #c8c8c8; padding:4px 12px; text-align:center; }
  .dtbl th { background:var(--accent-soft); }
  .dtbl td.l { text-align:left; }
  svg .card { filter: drop-shadow(0 2px 3px rgba(0,0,0,.12)); }
  .src { font-size:13px; color:#9a9a9a; } .src a { color:#9a9a9a; }
  .episode { background:#FCEEF0; border-left:6px solid var(--accent); border-radius:8px; padding:8px 16px; margin:8px 0; font-size:19px; }
  .episode .h { font-weight:700; color:var(--accent); font-size:16px; letter-spacing:.04em; }
  .demo { background:#FFF6E5; border:2px solid #D98A2B; border-radius:10px; padding:6px 16px; margin:8px 0; font-size:19px; font-weight:700; }
  .demo::before { content:"🎬 録画デモ "; color:#D98A2B; }
  /* まとめ(wrap)は1枚のみ。箇条書きが多いので少し詰める（最小18px厳守） */
  section.wrap ul { font-size:20px; }
  section.wrap ul li { margin:6px 0; line-height:1.4; padding-left:28px; }
  section.wrap .grid2 { gap:24px; }
  section.wrap .episode { font-size:18px; margin:6px 0; }
  /* ========== 表紙レイアウト（cover-hero） ========== */
  section.cover-hero {
    padding-top: calc(var(--header-h) + 60px);
    --hdr-left-w: 19%; /* 表紙は中央タイトル帯が無いので、文字幅に合わせて赤帯を短くする */
  }
  /* 表紙はpage-titleトラペゾイドが無いので、赤線を左端から右端まで伸ばす */
  section.cover-hero > header::after { left: 0; right: 0; }
  section.cover-hero .title-hero { text-align: center; margin-bottom: 60px; }
  section.cover-hero .title-small { font-size: 40px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
  section.cover-hero .title-big { font-size: 72px; font-weight: 800; line-height: 1.2; letter-spacing: 0.02em; }
  section.cover-hero .title-foot { display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center; padding: 0 60px; }
  section.cover-hero .title-photo {
    width: 240px; height: 240px; border-radius: 50%; overflow: hidden;
    background: #ffffff; border: 3px solid #D9EAD3;
    display: flex; align-items: center; justify-content: center; color: #777; font-size: 16px;
  }
  section.cover-hero .title-photo img { width: 84%; height: 84%; object-fit: contain; /* 情報リテラシーのアイコンを全体表示 */ }
  section.cover-hero .title-meta { font-size: 26px; line-height: 1.7; text-align: center; }
  section.cover-hero .title-event { color: #e65100; font-weight: 700; margin-bottom: 16px; }
  section.cover-hero .title-affil { margin-top: 8px; }
---


<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">情報リテラシ 第8回 ／ オンデマンド</div>
<div class="title-big">ネットワークの仕組みと<br>インターネット</div>
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

---

<div class="page-title">この回の進め方</div>

## 第8回はオンデマンド ─ 視聴期限と課題を最初に確認

<div class="grid2">
<div>

<div class="callout-blue">📺 受講のしかた</div>

- 全 **10本** の動画を<span class="hl">順番に</span>視聴（途中で止めてOK）
- 各動画にスライド資料（この PDF）が対応
- 実演パート（<span class="red mono">dig</span> で名前解決／HTML の中身）は<span class="hl">手元でも追える</span>
- 質問は Moodle の質問フォーラムへ（slido なし）

<div class="callout-green" style="margin-top:14px">🗂 大きく3つの山だけ覚える</div>

- ① インターネットの仕組み（**TCP/IP・OSI**）
- ② データベース（**SQL**）
- ③ クラウド

</div>
<div>

<div class="callout-orange">🗓 期限（Moodle で要確認）</div>

<table class="dtbl" style="width:100%">
<tr><th>項目</th><th>期限</th></tr>
<tr><td class="l">動画の<strong>視聴期限</strong></td><td><span class="hl-dark mono">6/9（月）</span></td></tr>
<tr><td class="l"><strong>課題</strong>の提出</td><td><span class="hl-dark mono">6/16（月）</span></td></tr>
<tr><td class="l">提出先</td><td class="mono">Moodle</td></tr>
</table>

<div class="band" style="font-size:18px">視聴 → 課題の順。視聴を 6/9 までに終えれば、課題（6/16）に1週間使える。</div>

<div class="ask">「なぜ繋がらない？」を AI に聞いても、<strong>仕組みを知らなければ答えの正否を判断できない</strong>。だから中身を学ぶ。</div>

</div>
</div>

<div class="src">案内日程は Moodle の掲示が正本。差異があれば Moodle を優先してください。</div>

---

<!-- _class: fig -->

<div class="page-title">この回の地図</div>

## 「URL を入れてからページが出るまで」を1本の旅として追う

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig01.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">
</div>

<div class="band">各動画のページ上部に同じ <strong>旅バー</strong> を小さく置き、<span class="hl">いま旅のどこの話か</span>を赤で点灯します。</div>

<div class="episode" style="margin-top:8px"><span class="h">なぜ学ぶか</span> 2025年11月18日、Cloudflare で <strong>設定ファイルが想定の倍以上に肥大化</strong>して処理停止、X・ChatGPT 等が世界規模でエラーに。サイバー攻撃ではなく地味なバグ。仕組みを知ると「なぜ落ちたか」を自分で読み解ける。</div>

<div class="src">出典: Cloudflare 公式ブログ「Cloudflare outage on November 18, 2025」</div>

<div class="takeaway">ゴールは1つ ── 「URL を入れてからページが出るまで」を自分で説明できること</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 1 ／ CHAPTER 1</div>

# 学び方と、この講義の地図

## 第1タームお疲れさま — 学びの「モード」を増やす（約8分）

---

<!-- _class: fig -->

<div class="page-title">前回の振り返り</div>

## 「音や画像をどう0と1にしたか」を、まず思い出す

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig02.svg" style="width:100%;object-fit:contain;display:block;max-height:380px;margin:0 auto;">
</div>

<div class="caption">第7回：標本化 → 量子化 → 符号化 → 2進法。連続した現実を、機械が扱える離散の数列に変換する。</div>

<div class="takeaway">第8回は逆向き — その「0と1の数列」が、世界中をどう旅して届くかを追う。</div>

---

<!-- _class: split -->

<div class="page-title">学び方</div>

## 情報の集め方は、1つじゃない — 「5つのモード」

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig03.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">

</div>
<div class="right">

<table class="dtbl" style="width:100%; font-size:17px">
<tr><th>モード</th><th>手段</th><th>強み</th></tr>
<tr><td class="l"><span class="hl-green">① 実験する</span></td><td class="l">手を動かす・dig で試す</td><td class="l">体で覚わる</td></tr>
<tr><td class="l"><span class="hl-yellow">② ネットで調べる</span></td><td class="l">検索・公式ドキュメント</td><td class="l">速い・最新</td></tr>
<tr><td class="l"><span class="hl-pink">③ AI に聞く</span></td><td class="l">Gemini 等</td><td class="l">対話で整理</td></tr>
<tr><td class="l"><span class="red">④ 人に聞く</span></td><td class="l">友人・先生・図書館の院生 LS</td><td class="l">経験知・即修正</td></tr>
<tr><td class="l">⑤ 本・論文</td><td class="l">信頼できる貯蔵庫／最先端</td><td class="l">深さ・多様な見方</td></tr>
</table>

<div class="band" style="font-size:18px">「ググレカス」と言われた時代もある。でも今は <span class="hl">調べ方そのものが多様化</span>した。1つに偏らないこと。</div>

<div class="cbox gray" style="margin-top:10px"><div class="h">この講義での使い分け</div><div class="b">

- ① は <span class="red">dig 実演</span>・Colab、④ は<span class="red">附属図書館の LS（院生）</span>
- どれにも偏らず、<span class="hl">行き来して確かめる</span>のがコツ

</div></div>

</div>
</div>

<div class="takeaway">全部を一人で・1つの方法で分かる必要はない。5つを行き来する。</div>

---

<!-- _class: split -->

<div class="page-title">大学で学ぶ意味</div>

## 「全部 AI で完結」は、もったいない

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">④ 人に聞く — 大学という「場」</div><div class="b">

- <span class="red">安全に失敗</span>でき、人の経験・実践知を直接聞ける
- 友人・先生に加え、<span class="hl">附属図書館</span>では大学院生（**LS：ラーニング・サポーター**）が質問に対応
- 同じ問いでも、答える人で見える景色が変わる

</div></div>

<div class="cbox gray"><div class="h">⑤ 本・論文 — 機械より「奥」がある</div><div class="b">

- **本**＝信頼できる情報が体系立てて貯蔵された場所
- **論文**＝最先端・多様な見方に触れられる一次情報
- AI の答えの「正しさ」を確かめる土台になる

</div></div>

</div>
<div class="right">

<div class="episode"><div class="h">なぜ「中身」を学ぶのか</div>

2025年11月18日、ネットの土台 Cloudflare で <span class="hl-dark">設定ファイルが想定の倍以上に肥大化</span>して処理停止、X・ChatGPT など多数のサービスが世界規模でエラーに。サイバー攻撃ではなく地味なバグ。AI に「なぜ繋がらないの？」と聞いても、<span class="red">仕組みを知らなければ答えの正否を判断できない</span>。だから中身を学ぶ。
<div class="src">出典: Cloudflare 公式ブログ「Cloudflare outage on November 18, 2025」</div>
</div>

<div class="ask">あなたが「分からないこと」に出会ったとき、最初に動かすのはどのモード？</div>

</div>
</div>

<div class="takeaway">学び方を身につけることは、卒業後も生涯「学び続ける」力そのもの。</div>

---

<!-- _class: split -->

<div class="page-title">AIとの付き合い方</div>

## 浅く聞けば浅い／文脈を与えれば深い

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig04.svg" style="width:100%;object-fit:contain;display:block;max-height:320px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox green"><div class="h">良い使い方（前回の自由記述より）</div><div class="b">

- 思考力低下を防ぐため、<span class="red">丸投げせず主体的・補助的</span>に
- 要領よく<span class="red">「深く・広く」</span>学ぶために
- 誤情報・<span class="red">ハルシネーション</span>は必ず確認

</div></div>

<div class="cbox gray"><div class="h">学び方の核（同じく自由記述より）</div><div class="b">

- 実践による習得／中身の理解／<span class="red">外部リソース</span>での裏取り

</div></div>

<div class="band" style="font-size:18px">AI は学びの「軸」ではなく、5つのうちの <span class="hl">1モード</span> <span class="important">重要</span></div>

</div>
</div>

<div class="takeaway">同じ AI でも、与える文脈の深さで答えは段違い。鍛えるべきは「自分」。</div>

---

<!-- _class: fig -->

<div class="page-title">学び方の根拠</div>

## 「効く学び方」は研究でも示されている

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig05.svg" style="width:100%;object-fit:contain;display:block;max-height:320px;margin:0 auto;">
</div>

<div class="caption">出典: Dunlosky et al. (2013) <span class="src">Improving Students' Learning With Effective Learning Techniques. <em>Psychological Science in the Public Interest</em>, 14(1).</span></div>

<div class="takeaway">「思い出す・試す・説明する」を回す — 5モードはこの研究とも噛み合う。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 2 ／ CHAPTER 2</div>

# ネットワークの基礎

## まず「あなたの端末」と「最初の関門 Wi-Fi／LAN」を知る（約14分）

---

<!-- _class: fig -->

<div class="page-title">ネットワークとは</div>

## インターネット＝ネットワーク同士を繋いだ「網の網」 <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig06.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band">「相互に接続されたネットワーク（inter-network）」＝<span class="red">インターネット</span>。LAN＝限られた範囲／WAN＝広域、繋ぐ装置が<span class="red">ルーター(R)</span>。</div>

<div class="takeaway">小さな網（LAN）を、広い網（WAN）でいくつも繋いだものが「網の網」。</div>

---

<!-- _class: split -->

<div class="page-title">ネットワークの種類</div>

## LAN と WAN ── 「範囲」と「持ち主」で区別する

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig07.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox blue"><div class="h">LAN ＝ ローカルエリア</div><div class="b">

- <span class="red">限られた範囲</span>を自分／組織で<span class="red">占有</span>
- 有線（ケーブル）・無線（電波）の2方式
- LAN→WAN へ繋ぐ装置が<span class="red">ルーター</span>

</div></div>

<div class="cbox orange"><div class="h">WAN ＝ ワイドエリア</div><div class="b">

- LAN同士を<span class="red">広域</span>で繋いだ網
- 基幹は<span class="red">光ファイバー</span>、事業者が運用
- ネットワークは<span class="red">人や交通網</span>にもある概念

</div></div>

<div class="ask">いま自分が繋いでいるのは LAN？ WAN？ その「持ち主」は誰だろう。</div>

</div>
</div>

<div class="takeaway">違いは「広さ」だけでなく「誰が持ち管理しているか」。</div>

---

<!-- _class: split -->

<div class="page-title">サーバとクライアント</div>

## 役割は「相対的」── 提供すればサーバ、利用すればクライアント

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig08.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox blue"><div class="h">クライアントサーバシステム <span class="important" style="margin-left:6px">重要</span></div><div class="b">

- <span class="red">サーバ</span>＝サービスを提供／<span class="red">クライアント</span>＝利用
- 要求（リクエスト）→ 応答（レスポンス）でやりとり
- ネット上の全コンピュータ＝<span class="red">ホスト</span>

</div></div>

<div class="cbox gray"><div class="h">「相対的」とは</div><div class="b">

- 自分のノートPCを<span class="red">サーバ</span>にもできる
- 役割は固定でなく、その時の<span class="red">関係</span>で決まる
- 同じ機器が、時にサーバ・時にクライアント

</div></div>

</div>
</div>

<div class="takeaway">「サーバ／クライアント」は機械の種類ではなく“役割”の名前。</div>

---

<!-- _class: split -->

<div class="page-title">有線LANと無線LAN</div>

## つなぎ方は2通り ── ケーブル（有線）か、電波（無線）か

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig09.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox blue"><div class="h">有線LAN（イーサネット）</div><div class="b">

- 規格＝<span class="red">Ethernet（イーサネット）</span>
- ケーブル＝<span class="red">より対線</span>／集線装置＝<span class="red">ハブ</span>
- 速度の目安 100Mbps〜10Gbps

</div></div>

<div class="cbox green"><div class="h">無線LAN（Wi-Fi）</div><div class="b">

- 規格＝<span class="red">IEEE 802.11</span>。互換保証の機器名が <span class="red">Wi-Fi</span>
- 親機＝<span class="red">アクセスポイント(AP)</span> に電波で接続
- ケーブル不要だが、電波は届く＝<span class="red">他人にも見える</span>

</div></div>

<div class="episode"><div class="h">なぜ学ぶか｜偽Wi-Fi（Evil Twin）</div>
2024年7月、豪州で<span class="red">旅客機内に偽Wi-Fiを立て</span>乗客のログイン情報を盗んだ人物が連邦警察に逮捕。便利な入口は、最も狙われる入口でもある。
<div class="src">出典: kaspersky.co.jp / Evil Twin attacks</div>
</div>

</div>
</div>

<div class="takeaway">Wi-Fi は WAN ではなく「無線でつなぐ LAN の一形態」。</div>

---

<!-- _class: fig -->

<div class="page-title">Wi-Fiの規格</div>

## 世代が進むほど高速に（規格は IEEE 802.11 ファミリー）

<div class="fig-area">

<table class="dtbl" style="font-size:18px">
<tr><th>規格名</th><th>世代の呼称</th><th>周波数帯</th><th>通信速度（理論上の最大）</th></tr>
<tr><td>IEEE 802.11b</td><td>（公式の世代番号なし）</td><td>2.4GHz</td><td>11Mbps</td></tr>
<tr><td>IEEE 802.11g</td><td>（公式の世代番号なし）</td><td>2.4GHz</td><td>54Mbps</td></tr>
<tr><td>IEEE 802.11a</td><td>（公式の世代番号なし）</td><td>5GHz</td><td>54Mbps</td></tr>
<tr><td>IEEE 802.11n</td><td><span class="red">Wi-Fi 4</span></td><td>2.4 / 5GHz</td><td>600Mbps</td></tr>
<tr><td>IEEE 802.11ac</td><td><span class="red">Wi-Fi 5</span></td><td>5GHz</td><td>約6.9Gbps</td></tr>
<tr><td>IEEE 802.11ax</td><td><span class="red">Wi-Fi 6</span></td><td>2.4 / 5GHz</td><td><span class="red">9.6Gbps</span></td></tr>
</table>

</div>

<div class="band" style="font-size:18px"><span class="red">世代呼称の注記</span>：「Wi-Fi 4／5／6」は 11n 以降に <span class="red">あとから付けた</span>分かりやすい呼び名。a/b/g には公式番号がない（抜けではない）。表の速度はいずれも<span class="red">理論上の最大値</span>で、実効値はこれより大幅に低い。</div>

<div class="ask">自宅のルーターは Wi-Fi 何？　2.4GHz と 5GHz、電子レンジに弱いのはどっち？</div>

---

<!-- _class: fig -->

<div class="page-title">WAN・モバイル通信</div>

## スマホはモバイル網を通じて WAN に繋がる

<div class="fig-area">
<div class="grid2" style="width:98%;align-items:center">
<div>
<img class="svgfig" src="./src-ext/fig10.svg" style="width:100%;object-fit:contain;display:block;max-height:240px;margin:0 auto;">
</div>
<div>

<table class="dtbl" style="font-size:18px">
<tr><th>世代</th><th>開始</th><th>速度の目安（最大）</th></tr>
<tr><td>1G</td><td>1979</td><td>アナログ音声</td></tr>
<tr><td>2G</td><td>1993</td><td class="l">数十kbps（EDGEで最大384kbps）</td></tr>
<tr><td>3G</td><td>2001</td><td>14Mbps</td></tr>
<tr><td><span class="red">4G(LTE)</span></td><td>2010〜</td><td class="l">100Mbps〜1Gbps</td></tr>
<tr><td><span class="red">5G</span></td><td>2020</td><td><span class="red">20Gbps</span>（ITU目標ピーク）</td></tr>
</table>

<div class="cbox orange" style="margin-top:6px"><div class="h">WANに繋がる＝世界と通信できる</div><div class="b">

- 各端末が固有の<span class="red">IPアドレス</span>を持つ（→動画3）
- LTE は 4G の一部（LTE-Advanced で1Gbps級へ進化）

</div></div>

</div>
</div>
</div>

<div class="band" style="font-size:18px">スマホはかつて電話回線、今は<span class="red">モバイル通信</span>で WAN へ。世代が進むほど高速・大容量に。値はいずれも理論値で、実効速度はこれより低い。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 3 ／ CHAPTER 3 ★核</div>

# IPアドレスとサブネット・ポート

## 荷物に書く「宛先住所」を決める（約18分）

---

<!-- _class: fig -->

<div class="page-title">IPアドレスの基礎</div>

## IPアドレス＝ネット上の「住所」（32ビット） <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig11.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">
</div>

<div class="caption">32ビットを 8ビットずつ 4つ（オクテット）に区切り、10進法で表記。各オクテットは <span class="red">0〜255</span>（256個＝2⁸）。</div>

<div class="takeaway">パケットを届けるには宛先が要る → 全機器に固有のIP（住所）を割り当てる。</div>

---

<!-- _class: fig -->

<div class="page-title">2進⇔10進の手計算</div>

## なぜ <span class="mono">11000000</span> ＝ 192 なのか（桁の重み）

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig12.svg" style="width:100%;object-fit:contain;display:block;max-height:320px;margin:0 auto;">
</div>

<div class="caption">「1が立っている桁の重みを足す」だけ。これが2進→10進の正体で、サブネットの計算にもそのまま効く。</div>

<div class="ask">指でやってみよう：<span class="mono">10101000</span> はいくつ？（ヒント：128＋32＋8）</div>

---

<!-- _class: split -->

<div class="page-title">サブネットとCIDR</div>

## IPは「ネットワーク部」＋「ホスト部」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig13.svg" style="width:100%;object-fit:contain;display:block;max-height:330px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox blue"><div class="h">サブネットマスク＝区切り線</div><div class="b">

- どこまでが<span class="red">ネットワーク部</span>かを示すビット列
- <span class="red">/24</span>＝上位24ビットがネット部（＝255.255.255.0）
- 残り8ビットが<span class="red">ホスト部</span>（機器ごとの番号）

</div></div>

<div class="cbox orange"><div class="h">／24で使える台数は？（手計算）</div><div class="b">

- ホスト部8ビット → 2⁸ ＝ <span class="mono">256</span> アドレス
- うち2つは予約：<span class="mono">.0</span>＝ネットワークアドレス／<span class="mono">.255</span>＝ブロードキャスト
- 実際に機器へ割当可能＝ 2⁸−2 ＝ <span class="red">254台</span>

</div></div>

</div>
</div>

<div class="takeaway">「同じネットワークにいるか？」はネットワーク部が一致するかで決まる。</div>

---

<!-- _class: fig -->

<div class="page-title">NATとIPの節約</div>

## LAN内はプライベート、世界に出る時だけグローバル <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig14.svg" style="width:100%;object-fit:contain;display:block;max-height:285px;margin:0 auto;">
</div>

<div class="episode"><span class="h">なぜ学ぶか｜「閉域網だから安全」の崩壊</span> 2022年、大阪の総合医療センターがランサムウェアで電子カルテ停止、外来全面再開まで約2か月。侵入口は外部委託先のVPN機器。<span class="hl">「LAN内＝プライベートIPだから安全」は通用しない。</span><span class="src">出典: ITmedia（2023-03-28）</span></div>

<div class="caption">グローバルIPは<span class="red">ICANN</span>が管理。IPv4＝32ビット＝約43億個 → 枯渇 → <span class="red">IPv6＝128ビット＝2¹²⁸（約3.4×10³⁸、1兆×1兆×1兆級）</span>でほぼ枯渇しない。</div>

<div class="takeaway">多数の機器を、ルータの1つのグローバルIPで使い回す仕組み＝NAT。</div>

---

<!-- _class: split -->

<div class="page-title">ポート番号</div>

## IPは「建物の住所」、ポートは「部屋番号」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig15.svg" style="width:100%;object-fit:contain;display:block;max-height:330px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox green"><div class="h">IP:port で「サービス」を指定</div><div class="b">

- 1台のホストで<span class="red">複数のサービス</span>を同時に運用できる
- <span class="red">0〜1023＝well-known</span>（予約済み）：80=HTTP / 443=HTTPS
- 自作アプリは大きめの番号：<span class="mono">localhost:8000</span>（＝127.0.0.1）

</div></div>

<div class="band"><span class="mono">192.0.2.1:443</span> ＝「この住所の <span class="hl">443号室（HTTPS）</span>へ届けて」</div>

<div class="ask">ブラウザのURLに <span class="mono">:80</span> を書かないのに繋がるのはなぜ？（ヒント：既定の部屋番号）</div>

</div>
</div>

<div class="takeaway">住所（IP）＋部屋番号（ポート）で、初めて「どのサービスへ」が決まる。</div>

---

<div class="page-title">ワーク③</div>

## ワーク：自分のIPアドレスを調べてみよう

<div class="grid2">
<div>

<div class="cbox blue"><div class="h">🔧 手元の端末で確認する</div><div class="b">

- ① 今の接続は <span class="red">自宅Wi-Fi / 大学Wi-Fi / モバイル</span> のどれ？
- ② そのIPは <span class="red">プライベート</span>（192.168.x.x / 10.x.x.x）？
- ③ 自宅ルータの<span class="red">グローバルIPは何個</span>？（ヒント：NAT）
- ④ 友だちと<span class="red">ネットワーク部（/24）</span>は一致する？

</div></div>

<div class="band">確認手順：スマホ＝Wi-Fi設定の「詳細」、PC＝<span class="mono">ipconfig</span>（Win）/ <span class="mono">ifconfig</span>（Mac）。</div>

<div class="cbox gray"><div class="h">見るポイント</div><div class="b">

- 表示された IP の<span class="red">先頭が 192.168 / 10. なら家庭内のプライベートIP</span>
- グローバルIPは「確認くん」等のサイトで分かる（ルータに普通1個）
- 同じWi-Fi同士は<span class="red">ネットワーク部が一致</span>するはず

</div></div>

</div>
<div>

<div class="ph" style="height:330px">［自分のIP確認画面のスクショを貼る］<br>例：スマホのWi-Fi詳細 / 端末のIP表示<br>（画像はこちらで差し込みます）</div>

</div>
</div>

<div class="statement">「住所のしくみ」を自分の環境に当てはめると、いちばん腹落ちする。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 4 ／ CHAPTER 4</div>

# プロトコルと階層モデル

## 住所を書いた荷物に、各層が「宛名シール」を重ねて貼る（約12分）

---

<!-- _class: split -->

<style scoped>
  section.split { padding-bottom: 44px; }
  section.split .split-body { min-height: 300px; }
  section.split .cbox { margin: 6px 0; }
  section.split .episode { font-size: 18px; margin: 6px 0; }
  section.split .ask { margin: 6px 0; }
</style>

<div class="page-title">プロトコルとは</div>

## 通信プロトコル＝あらかじめ定めた「規約・手順」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig16.svg" style="width:100%;object-fit:contain;display:block;max-height:250px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox gray"><div class="h">身近な例・語源</div><div class="b">

- 野球のサイン交換／固定電話のモデムの「ピー音」
- 語源は「<span class="red">外交儀礼</span>」→ ITでは「規約・手順」

</div></div>

<div class="cbox green"><div class="h">世界共通だから繋がる</div><div class="b">

- 機種・OS・メーカーが違っても通信できる
- スマホで送った文書をPCで開けるのは<span class="red">プロトコルが世界共通</span>だから

</div></div>

<div class="episode"><div class="h">なぜ学ぶか ｜ 約束が破れると都市が止まる</div>
暗号化されていない<span class="red">スマート信号機</span>を「青のまま固定」に改ざんできた事例が報告。設計が甘いと交通インフラごと操作される。
<div class="src">出典: Trend Micro / 総務省ガイドライン第3.0版(2024)</div></div>

</div>
</div>

<div class="ask">「同じ言葉・同じ手順」を決めておかないと、何が困ると思う？</div>

---

<!-- _class: fig -->

<div class="page-title">TCP/IP 4層</div>

## TCP/IPは「4階層」── 各層が役割を分担する <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig17.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="caption">色は講義を通じて固定 ── 青＝アプリ／緑＝トランスポート／橙＝IP／灰＝物理。前回学んだIPは③に座る。</div>

---

<!-- _class: fig -->

<div class="page-title">4層 ↔ 7層</div>

## TCP/IP「4階層」 ↔ OSI参照モデル「7階層」 <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig18.svg" style="width:100%;object-fit:contain;display:block;max-height:330px;margin:0 auto;">
</div>

<div class="caption">⚠ 取り違え注意 ── <span class="red">TCP/IP＝4階層</span>／<span class="red">OSI＝7階層</span>。OSIの上3層がTCP/IPのアプリ層に、下2層がIF層に対応する。</div>

---

<!-- _class: split -->

<div class="page-title">カプセル化</div>

## 各層が「宛名（ヘッダ）」を足して、入れ子に包んでいく <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig19.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox gray"><div class="h">パケットができるまで</div><div class="b">

- 上位（アプリ）→下位（物理）へ、各層が順に<span class="red">ヘッダ</span>を付与
- 外側ほど後で貼られ、外側から先に読まれる
- 受信側は逆順にヘッダを外して中身を取り出す

</div></div>

<div class="cbox green"><div class="h">郵便メタファ</div><div class="b">

- 便箋（HTTPデータ）→ 封筒に部屋番号（TCPポート）
- → 宛名・住所（IP）→ 配送業者の区分け袋（Ethernet）
- <span class="red">宛名シールを一枚ずつ重ねて貼る</span>イメージ

</div></div>

<div class="band">便箋 → 封筒（部屋番号）→ 宛名（住所）→ 区分け袋</div>

</div>
</div>

<div class="takeaway">各層が宛名シールを重ねて貼り、受け手は外側から順にはがす ── これがカプセル化</div>

---

<!-- _class: fig -->

<div class="page-title">ヘッダの中身</div>

## 「宛名シール」には何が書いてあるか ── 層ごとの担当を表で

<div class="fig-area">
<table class="dtbl" style="font-size:18px">
<tr><th>層（色）</th><th>付けるヘッダ</th><th>主な中身（＝何を書く）</th><th>郵便でいうと</th></tr>
<tr><td class="l" style="color:#3E78B2;font-weight:700">① アプリ</td><td>—（データ本体）</td><td class="l">送りたい中身（Webページ要求など）</td><td>便箋の文章</td></tr>
<tr><td class="l" style="color:#3C8A57;font-weight:700">② トランスポート</td><td>TCPヘッダ</td><td class="l"><span class="red">ポート番号</span>・順序番号・確認応答</td><td>封筒の部屋番号</td></tr>
<tr><td class="l" style="color:#D98A2B;font-weight:700">③ インターネット</td><td>IPヘッダ</td><td class="l"><span class="red">宛先IP・送信元IP</span></td><td>宛名・住所</td></tr>
<tr><td class="l" style="color:#6B6F76;font-weight:700">④ ネットワークIF</td><td>Ethernet等</td><td class="l">隣の機器のMACアドレス・誤り検出</td><td>区分け袋・伝票</td></tr>
</table>
</div>

<div class="callout-blue">ポイント：下の層は「上の層が何を運んでいるか」を気にしない。中身を読まずに、自分の宛名シールだけ見て運ぶ。</div>

<div class="caption">この「各層が独立して仕事する」設計のおかげで、Wi-Fiでも光ファイバーでも同じIPパケットがそのまま流せる。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 5 ／ CHAPTER 5</div>

# パケット交換・配送・信頼性

## データはどう小分けされ、ルータのバケツリレーで届くのか（約15分）

---

<!-- _class: fig -->

<div class="page-title">2つの通信方式</div>

## 回線交換 vs パケット交換 <span class="important">重要</span>

<img class="svgfig" src="./src-ext/fig20.svg" style="width:92%;object-fit:contain;display:block;max-height:46px;margin:0 auto 2px;">

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<img class="svgfig" src="./src-ext/fig21.svg" style="width:100%;object-fit:contain;display:block;max-height:215px;margin:0 auto;">
</div>
<div>
<img class="svgfig" src="./src-ext/fig22.svg" style="width:100%;object-fit:contain;display:block;max-height:215px;margin:0 auto;">
</div>
</div>
</div>

<div class="takeaway">電話＝回線を<span class="hl">占有</span>／インターネット＝<span class="hl">パケットで共有</span>。だから1本の回線をみんなで使える。</div>

---

<!-- _class: summary -->

<div class="page-title">2つの通信方式</div>

## 同じ「つなぐ」でも、ここが違う <span class="important">重要</span>

<table class="dtbl" style="font-size:21px; width:92%">
<tr><th></th><th>回線交換（電話）</th><th>パケット交換（インターネット・主流）</th></tr>
<tr><td class="l">回線の使い方</td><td>2者が<span class="red">占有</span></td><td>みんなで<span class="red">共有</span></td></tr>
<tr><td class="l">混雑したとき</td><td>つながらない／切れる</td><td>遅くなっても<span class="red">切れにくい</span></td></tr>
<tr><td class="l">一部が壊れたら</td><td>最初からやり直し</td><td>その<span class="red">パケットだけ再送</span></td></tr>
<tr><td class="l">弱点</td><td>占有中は他者が使えない</td><td>分割・ヘッダの手間／速度保証は困難</td></tr>
</table>

<div class="ask">電話は「話し中」になるのに、ネットはみんなで同時に使える。なぜ？</div>

<div class="takeaway">パケット交換＝「小分け＋共有＋必要な所だけ再送」。だから今の主流になった。</div>

---

<!-- _class: fig -->

<div class="page-title">パケットの中身</div>

## データを小分けし、各パケットに「送り状（ヘッダ）」を貼る

<img class="svgfig" src="./src-ext/fig23.svg" style="width:92%;object-fit:contain;display:block;max-height:46px;margin:0 auto 2px;">

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig24.svg" style="width:100%;object-fit:contain;display:block;max-height:270px;margin:0 auto;">
</div>

<div class="band">ヘッダ＝段ボールの「送り状」。宛先・差出人・何番目かを書いておけば、バラバラに届いても現地で復元できる。</div>

<div class="caption">データを丸ごと1本で送らず小包に分けるから、一部が消えてもその1個だけ送り直せる。</div>

---

<!-- _class: fig -->

<div class="page-title">ルーティング</div>

## ルーターが宛先IPを見て「次の一歩」を選ぶ <span class="important">重要</span>

<img class="svgfig" src="./src-ext/fig25.svg" style="width:92%;object-fit:contain;display:block;max-height:46px;margin:0 auto 2px;">

<div class="fig-area">
<div class="grid2" style="width:97%;grid-template-columns:1.5fr 1fr;align-items:center">
<div>
<img class="svgfig" src="./src-ext/fig26.svg" style="width:100%;object-fit:contain;display:block;max-height:265px;margin:0 auto;">
</div>
<div>
<div class="cbox blue"><div class="h">R1 の経路制御表（地図）</div><div class="b">
<table class="dtbl" style="font-size:16px;margin:2px 0">
<tr><th>宛先（行き先）</th><th>次に渡す相手</th></tr>
<tr><td class="l">サーバの方面</td><td><span class="red">R4</span> へ</td></tr>
<tr><td class="l">別ネットワーク</td><td>R3 へ</td></tr>
</table>
</div></div>
<div class="band" style="font-size:18px">各ルータは<span class="red">経路制御表（ルーティングテーブル）</span>を見て、宛先IPから「次にどこへ渡すか」だけを決める。</div>
</div>
</div>
</div>

<div class="takeaway">宛先IPを見て次へ渡す——ルータのバケツリレーで世界中に届く。</div>

---

<!-- _class: fig -->

<div class="page-title">通信の信頼性</div>

## 誤りを「見つける（パリティ）」「送り直す（再送・ACK）」

<img class="svgfig" src="./src-ext/fig27.svg" style="width:92%;object-fit:contain;display:block;max-height:46px;margin:0 auto 2px;">

<div class="fig-area">
<div class="grid2" style="width:97%">
<div>
<div class="cbox green"><div class="h">① 誤りを見つける：パリティ検査</div><div class="b">
<img class="svgfig" src="./src-ext/fig28.svg" style="width:100%;object-fit:contain;display:block;max-height:130px;margin:0 auto;">
<ul>
<li>受信時に1が<span class="red">奇数</span>なら「誤りあり」と分かる</li>
<li>チェックデジット（学生証・航空運送状）と同じ理屈</li>
</ul>
</div></div>
</div>
<div>
<div class="cbox blue"><div class="h">② 送り直す：TCPの再送（ACK）</div><div class="b">
<img class="svgfig" src="./src-ext/fig29.svg" style="width:100%;object-fit:contain;display:block;max-height:140px;margin:0 auto;">
<ul>
<li><span class="red">順序番号</span>で抜けを検出、ACKが来なければ再送</li>
</ul>
</div></div>
</div>
</div>
</div>

<div class="episode"><span class="h">なぜ学ぶか</span>　2021年10月、Facebook(現Meta)が経路案内（BGP）設定をしくじり、自社への<span class="hl">経路情報をインターネットから誤って取り消した</span>。Facebook・Instagram・WhatsApp が世界規模で約6時間ダウン。<span class="hl">地図(経路制御表)を1か所間違える</span>と、荷物(パケット)が宛先を見失い行方不明になる。<span class="src">出典: Cloudflare Blog（Oct 2021 Facebook outage）</span></div>

---

<!-- _class: fig -->

<div class="page-title">パリティ検査の手計算</div>

## 「1の個数が偶数」になるよう、パリティビットを1つ足す <span class="important">重要</span>

<div class="fig-area">
<div style="width:97%">
<div class="callout-green" style="font-size:21px">手計算：データ <span class="mono" style="font-size:24px">1011001</span> に偶数パリティを付ける</div>
<img class="svgfig" src="./src-ext/fig30.svg" style="width:100%;object-fit:contain;display:block;max-height:140px;margin:0 auto;">

<div class="grid2" style="margin-top:6px">
<div class="cbox green"><div class="h">できること</div><div class="b">
<ul>
<li>「データ＋パリティ」の1の総数は<span class="red">常に偶数</span></li>
<li>受信側で1が奇数なら <span class="hl">1ビットの誤り</span>を検出できる</li>
</ul>
</div></div>
<div class="cbox red"><div class="h">できないこと（甘さ）</div><div class="b">
<ul>
<li><span class="red">2ビット同時の誤り</span>は偶数のまま → 見逃す</li>
<li>誤りの<span class="red">位置特定・訂正もできない</span>（だからTCPのACK/再送で二重に守る）</li>
</ul>
</div></div>
</div>
</div>
</div>

<div class="ask"><span class="mono">1110 1010</span> に偶数パリティを付けるなら、P は 0 と 1 のどっち？（ヒント：1の個数を数える）</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 6 ／ CHAPTER 6</div>

# 名前から、ページへ

## DNS・ドメイン・URL・HTML（約13分）

旅の現在地 ── <span style="opacity:.85">「人間が覚える<b>名前</b>」を、機械の住所<b>IP</b>に翻訳して出発する</span>

---

<!-- _class: fig -->

<div class="page-title">DNS</div>

## ドメイン名を IPアドレスに翻訳する <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig31.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band">パケットの宛先に書けるのは <span class="hl">IPアドレス</span> だけ。覚えやすい名前を住所に直す「翻訳係」が <span class="hl">DNS（Domain Name System）</span>。</div>

<div class="ask">もし世界中のDNSが全部止まったら、サーバが生きていてもページは開ける？</div>

---

<!-- _class: split -->

<div class="page-title">dig で確かめる</div>

## 名前解決を自分の手で見る ── <span class="mono">dig</span>

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">① まず名前→IP を引く（+short）</div><div class="b">

<table class="dtbl" style="width:100%">
<tr><th>入力</th><th class="l">出力（例）</th></tr>
<tr><td class="l mono">dig example.jp +short</td><td class="l mono">203.0.113.10</td></tr>
<tr><td class="l mono">dig www.chiba-u.jp +short</td><td class="l mono">133.82.xxx.xxx</td></tr>
</table>
<div class="src">※IPは説明用の例（203.0.113.0/24 は文書用の予約帯）。実際の値は環境・時刻で変わるので、自分で <span class="mono">dig</span> して確かめよう。</div>

</div></div>

<div class="cbox blue"><div class="h">② 委任を辿る（+trace）</div><div class="b">

- <span class="mono">dig example.jp +trace</span> で
- <span class="hl-dark">ルート（.）→ TLD（.jp）→ 権威DNS</span>
- と「電話帳をたらい回し」する様子が見える

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">③ 委任の階層イメージ</div><div class="b"></div></div>

<img class="svgfig" src="./src-ext/fig32.svg" style="width:100%;object-fit:contain;display:block;max-height:230px;margin:0 auto;">

</div>
</div>

<div class="takeaway">DNSは1台ではない。ルート→TLD→権威の「委任のリレー」で答えにたどり着く。</div>

---

<!-- _class: fig -->

<div class="page-title">ドメインの構造</div>

## ドメインは「後ろから」読む ── www.kantei.go.jp <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig33.svg" style="width:100%;object-fit:contain;display:block;max-height:130px;margin:0 auto;">
<div class="grid2" style="width:96%;margin-top:4px">
<div>
<table class="dtbl">
<tr><th>組織の種類（.jp）</th><th>意味</th></tr>
<tr><td>ac</td><td class="l">大学・研究機関</td></tr>
<tr><td>co</td><td class="l">民間企業（会社）</td></tr>
<tr><td>go</td><td class="l">政府機関</td></tr>
<tr><td>or</td><td class="l">協同組合・NPO等の<span class="hl">法人組織</span></td></tr>
<tr><td>ed / lg</td><td class="l">小中高など / 地方公共団体</td></tr>
</table>
</div>
<div>
<table class="dtbl">
<tr><th>末尾</th><th>意味</th></tr>
<tr><td>jp</td><td class="l">日本（国コード ccTLD）</td></tr>
<tr><td>uk / de / cn</td><td class="l">英 / 独 / 中（各国）</td></tr>
<tr><td>com / net / org</td><td class="l">国に属さない<span class="hl">一般ドメイン(gTLD)</span></td></tr>
</table>
</div>
</div>
</div>

<div class="caption">元は米国内だけで末尾の国名が不要だった名残が <span class="mono">.com</span> 等の <span class="red">gTLD</span>。国とは無関係で「米国のもの」ではない。</div>

---

<!-- _class: split -->

<div class="page-title">WWW と HTTP</div>

## Web は HTTP で運ぶ。いまは暗号化した <span class="hl">HTTPS</span> が標準

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">WWW（World Wide Web）</div><div class="b">

- 不特定多数へ情報を届けるしくみ
- 文書どうしを<span class="red">ハイパーリンク</span>で結んだ<span class="red">ハイパーテキスト</span>
- 転送のプロトコル＝<span class="mono">HTTP</span>（HyperText Transfer Protocol）

</div></div>

<div class="cbox green"><div class="h">HTTP → HTTPS</div><div class="b">

- <span class="mono">https://</span> は通信を<span class="red">暗号化</span>（鍵マーク 🔒）
- ログイン・学籍情報・決済の盗み見を防ぐ（詳細は動画7）

</div></div>

</div>
<div class="right">

<img class="svgfig" src="./src-ext/fig34.svg" style="width:100%;object-fit:contain;display:block;max-height:180px;margin:0 auto;">

<div class="episode"><span class="h">なぜ学ぶか｜偽サイトを見破る</span><br>日本のフィッシング報告は2024年に過去最多 <span class="red">171万件超</span>、約75%が実在サービスの“なりすまし”。鍵マーク（HTTPS）とURLの構造を読めることが、最初の防具になる。
<div class="src">出典: フィッシング対策協議会／日経（2025）<br>https://scan.netsecurity.ne.jp/article/2025/06/12/53031.html</div></div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">URLの分解</div>

## URL ＝ Webページの「住所」 <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig35.svg" style="width:100%;object-fit:contain;display:block;max-height:230px;margin:0 auto;">
</div>

<div class="band">教科書の編末問題も <span class="mono">http://www.example.jp/index.html</span> を ①〜④ に分解させる定番。<span class="hl">パスを省くと最上位ページ</span>へ。</div>

---

<!-- _class: fig -->

<div class="page-title">HTML・CSS・ブラウザ</div>

## HTML＝構造、CSS＝装飾。ブラウザが解釈して表示する <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig36.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band"><span class="hl">URL入力 → DNSでIP → サーバ接続 → ファイル送信 → 表示</span>。この5歩が「旅」のゴール地点。</div>

---

<!-- _class: split -->

<div class="page-title">HTMLの中身</div>

## ページの正体は「タグで囲んだテキスト」 ── 中身を見てみる

<div class="split-body">
<div class="left">

<div class="demo">ブラウザで右クリック →「ページのソースを表示」で、どんなページもこの素のHTMLが見える。</div>

<pre style="font-size:15px;line-height:1.4">&lt;!DOCTYPE html&gt;
&lt;html lang="ja"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;はじめてのWeb&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;はじめてのWeb&lt;/h1&gt;
  &lt;p&gt;これは &lt;a href="https://www.chiba-u.jp"&gt;
     千葉大学&lt;/a&gt; への<span style="color:#3C8A57">リンク</span>です。&lt;/p&gt;
  &lt;img src="cover.jpg" alt="表紙"&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

</div>
<div class="right">

<table class="dtbl" style="width:100%">
<tr><th>タグ</th><th>意味</th></tr>
<tr><td class="l mono">&lt;html&gt;〜&lt;/html&gt;</td><td class="l">文書全体</td></tr>
<tr><td class="l mono">&lt;head&gt; / &lt;body&gt;</td><td class="l">頭部（情報）/ 本体（中身）</td></tr>
<tr><td class="l mono">&lt;title&gt;</td><td class="l">タブに出るページ名</td></tr>
<tr><td class="l mono">&lt;h1&gt; / &lt;p&gt;</td><td class="l">見出し / 段落</td></tr>
<tr><td class="l mono">&lt;a href&gt;</td><td class="l">リンク（ハイパーリンク）</td></tr>
<tr><td class="l mono">&lt;img src&gt;</td><td class="l">画像</td></tr>
</table>

<div class="cbox gray"><div class="h">読み方のコツ</div><div class="b">

- 開始タグ <span class="mono">&lt;p&gt;</span> と終了タグ <span class="mono">&lt;/p&gt;</span> で<span class="red">挟む</span>
- 入れ子（箱の中に箱）になっている
- 見た目の色・配置は<span class="red">CSS</span>側の担当

</div></div>

</div>
</div>

---

<div class="page-title">ワーク⑥</div>

## ワーク：最小のHTMLを書いて、名前を引く

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 Moodle → Colab（個人 or 2人）</div><div class="b">

- ① 最小HTMLを書いて保存：<span class="mono">&lt;h1&gt;はじめてのWeb&lt;/h1&gt;</span>
- ② ブラウザで開き<span class="red">ソースを表示</span>して見比べる
- ③ <span class="mono">!dig example.jp +short</span> で名前→IP
- ④ <span class="mono">!dig www.chiba-u.jp +trace</span> で委任を辿る
- ⑤ 返ったIPをブラウザに直接入れると開く？

</div></div>

<div class="ask hand">④の <span class="mono">+trace</span> の出力に <span class="mono">.jp</span> や権威サーバの名前は出てきた？</div>

</div>
<div>

<div class="ph" style="height:235px">［ここに dig +short / +trace とソース表示の実行スクショを貼る］<br>（画像はこちらで差し込みます）</div>

</div>
</div>

<div class="statement">「名前 → IP → ページ」を、自分の手で1往復してみる。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 7 ／ CHAPTER 7 ★核</div>

# 安全に通信する

## 暗号・認証・Wi-Fiセキュリティ ── 旅の途中で「盗み見・なりすまし」を防ぐ（約16分）

---

<!-- _class: fig -->

<div class="page-title">暗号の基礎</div>

## 平文 →（暗号化）→ 暗号文 →（復号）→ 平文

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig37.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band">暗号化／復号のための手順・データを <span class="red">鍵</span> という。コンピュータでは、人手では解けない強い暗号を使う。</div>

<div class="ask">送り手と受け手が「同じ鍵」を使う方式（共通鍵）。その鍵は、どうやって安全に相手へ渡す？</div>

---

<!-- _class: fig -->

<div class="page-title">古典暗号</div>

## シーザー暗号 ── 文字を一定数ずらす「換字式」を手で解く

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig38.svg" style="width:100%;object-fit:contain;display:block;max-height:350px;margin:0 auto;">
</div>

<div class="band">いずれも規則が分かれば人手で解けてしまう。だから現代はコンピュータで <span class="red">膨大な計算</span> が要る暗号を使う。</div>

<div class="caption">※ 古典暗号の例。エニグマは「ローター式の複雑な換字暗号」で、単純な転置法ではない。</div>

---

<!-- _class: split -->

<div class="page-title">共通鍵 と 公開鍵</div>

## 「同じ鍵」の弱点を、公開鍵が解決する <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig39.svg" style="width:100%;object-fit:contain;display:block;max-height:320px;margin:0 auto;">

</div>
<div class="right">

<table class="dtbl">
<tr><th></th><th>共通鍵</th><th>公開鍵</th></tr>
<tr><td class="l">暗号化</td><td>共通の鍵</td><td>相手の<span class="red">公開鍵</span></td></tr>
<tr><td class="l">復号</td><td>同じ鍵</td><td>自分の<span class="red">秘密鍵</span></td></tr>
<tr><td class="l">鍵の配送</td><td>危険（盗難）</td><td>不要</td></tr>
<tr><td class="l">相手10人</td><td>10種の鍵</td><td>鍵1組</td></tr>
<tr><td class="l">速度</td><td>速い</td><td>遅い</td></tr>
</table>

<div class="cbox blue"><div class="h">実際は「いいとこ取り」</div><div class="b">

- 最初だけ<span class="red">公開鍵</span>で「共通鍵」を安全に渡す
- その後は速い<span class="red">共通鍵</span>で本文をやり取り（＝SSL/TLS）

</div></div>

</div>
</div>

<div class="takeaway">共通鍵の「鍵をどう渡すか」問題を、公開鍵の「誰でも施錠／受け手だけ開錠」が解く。</div>

---

<!-- _class: fig -->

<div class="page-title">公開鍵暗号</div>

## 公開鍵で「施錠」、対の秘密鍵だけが「開錠」できる <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig40.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="caption">公開鍵は誰に渡してもよい。復号できるのは、対になった<span class="red">秘密鍵を持つ受け手 B だけ</span>。相手ごとの鍵配布が不要になる。</div>

---

<!-- _class: split -->

<div class="page-title">署名・認証局</div>

## 「本人が送った」を証明する ── 署名は鍵が“逆向き” <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig41.svg" style="width:100%;object-fit:contain;display:block;max-height:250px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox green"><div class="h">暗号化 と 署名 は“鍵の向き”が逆</div><div class="b">

- 暗号化：相手の<span class="red">公開鍵</span>で施錠 → 相手の<span class="red">秘密鍵</span>で開錠
- 署名：自分の<span class="red">秘密鍵</span>で署名 → 相手は<span class="red">公開鍵</span>で検証
- 署名が通れば「<span class="red">本人</span>が送った／改ざん無し」が分かる

</div></div>

<div class="cbox blue"><div class="h">認証局（CA）と電子証明書</div><div class="b">

- 公開鍵の持ち主を<span class="red">第三者が保証</span>＝なりすまし防止
- ブラウザは証明書を自動で検証している

</div></div>

</div>
</div>

<div class="takeaway">暗号化＝盗み見防止／署名・認証＝なりすまし防止。安全な通信は、この両輪で成り立つ。</div>

---

<!-- _class: fig -->

<div class="page-title">なぜ平文は危険か</div>

## 公衆Wi-Fiで「HTTPでない通信」は、同じ電波の他人に丸見え <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig42.svg" style="width:100%;object-fit:contain;display:block;max-height:350px;margin:0 auto;">
</div>

<div class="episode"><span class="h">なぜ学ぶか</span>　2024年、旅客機内に<span class="red">偽Wi-Fi（Evil Twin）</span>を立て、乗客のメール・SNSのログイン情報を盗んだ人物が豪連邦警察に逮捕。「無料Wi-Fi」は最も狙われる入口でもある。<span class="src">出典: Kaspersky「Evil Twin攻撃」 https://www.kaspersky.co.jp/resource-center/preemptive-safety/evil-twin-attacks</span></div>

---

<!-- _class: fig -->

<div class="page-title">HTTP → HTTPS</div>

## 鍵マーク🔒は「通信路がTLSで暗号化済み」のしるし

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig43.svg" style="width:100%;object-fit:contain;display:block;max-height:330px;margin:0 auto;">
</div>

<div class="band">公衆Wi-Fiでは、<span class="red">URLの 🔒（https）を必ず確認</span>。不安なら <span class="red">VPN</span> を使う。HTTP のサイトで重要情報は送らない。</div>

---

<!-- _class: split -->

<div class="page-title">家庭Wi-Fiの守り方</div>

## 「お家のネット」は、自分で守れる <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig44.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox green"><div class="h">暗号方式と鍵を確認</div><div class="b">

- <span class="red">WPA2 / WPA3</span> か確認（古い <span class="red">WEP</span> は解読される）
- 接続パスワードは推測されにくいものに

</div></div>

<div class="cbox blue"><div class="h">機器の初期設定を変える</div><div class="b">

- ルータ管理画面（<span class="mono">192.168.x.1</span>）の<span class="red">初期PWは必ず変更</span>
- カメラ・スピーカー等の<span class="red">IoT機器</span>も同様

</div></div>

<div class="ask hand">挙手：公衆Wi-Fiで、ネットバンキングのログインをしていい？</div>

</div>
</div>

<div class="takeaway">「閉域網だから安全」は神話。暗号方式・初期PW・https の3点をまず点検。</div>

---

<div class="page-title">ワーク⑦</div>

## ワーク：お家のWebセキュリティを点検しよう

<div class="cbox red"><div class="h">🔧 自分のデジタル環境を点検する（チェックリスト）</div><div class="b">

- ① 自宅Wi-Fiの暗号方式は <span class="red">WPA2 / WPA3</span> になっている？
- ② ルータ管理画面のパスワードは、まだ<span class="red">初期値のまま</span>になっていない？
- ③ スマートスピーカー・防犯カメラなど <span class="red">IoT機器</span> のパスワードは変えた？
- ④ よく使うサイトは <span class="red">https（🔒鍵マーク）</span> になっている？
- ⑤ 公衆Wi-Fiで、<span class="red">重要なログイン</span>（銀行・大学アカウント）をしていないか？

</div></div>

<div class="episode"><span class="h">自分ごとに</span>　パスワードの使い回しは破滅的：2023年、遺伝子検査の 23andMe は使い回しPWを突かれ約690万人分の遺伝・健康データが流出した。<span class="src">出典: HIPAA Journal https://www.hipaajournal.com/6-9-million-23andme-users-affected-by-data-breach/</span></div>

<div class="statement">習った暗号・認証・Wi-Fiの知識は、まず「自分の家」を守るために使う。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 8 ／ CHAPTER 8</div>

# データベースとSQL

## 旅の目的地 — 「届いた先のデータ」を、どう貯めて取り出すか（約12分）

---

<!-- _class: fig -->

<div class="page-title">DBとは</div>

## 構造化したデータを集めて「検索しやすく」貯める

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig45.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="caption">登録には必ず「目的」がある（連絡したい・サービスしたい）。だから<span class="red">一定形式（構造化）</span>で貯め、<span class="red">検索</span>で取り出せるようにする。</div>

<div class="takeaway">DB＝「構造化して貯め、目的に応じて取り出す」箱。旅の荷物が着いた先の保管庫。</div>

---

<!-- _class: split -->

<div class="page-title">DBとDBMS</div>

## 多人数で安全に使うための「管理システム」＝DBMS

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig46.svg" style="width:100%;object-fit:contain;display:block;max-height:280px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox red"><div class="h">DBMS（データベース管理システム）の 5 機能</div><div class="b">

- ① <span class="red">データ資源管理</span>：意味・種類・記録場所を定義／管理
- ② <span class="red">整合性</span>制約：年齢に負値・文字を入れさせない
- ③ <span class="red">セキュリティ</span>：管理者は全部／A一部／B超一部
- ④ <span class="red">トランザクション</span>管理：同時更新を排他制御（予約の二重登録を防ぐ）
- ⑤ <span class="red">障害復旧</span>：破損に備えデータを保護・復旧

</div></div>

<div class="episode"><div class="h">なぜ「管理」が要るのか</div>
2024年6月、KADOKAWA／ニコニコがランサムウェア被害。約<span class="hl-dark">25万人分</span>の個人情報が漏洩し特別損失36億円。DBは「漏れたら全件まとめて流出する箱」。だから③④⑤が必須。
<div class="src">出典: KADOKAWA グループ公表資料 / 日経クロステック（2024）</div>
</div>

</div>
</div>

<div class="takeaway">DB は「貯める箱」、DBMS は「皆で安全に・矛盾なく使うための番人」。</div>

---

<!-- _class: split -->

<div class="page-title">DBの種類と用語</div>

## 主流は「表」で扱う <span class="hl">リレーショナル型</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig47.svg" style="width:100%;object-fit:contain;display:block;max-height:360px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox red"><div class="h">リレーショナルDB の用語（取り違え注意）</div><div class="b">

- 表 ＝ <span class="red">テーブル</span>／表同士の関連 ＝ リレーションシップ
- 1行（横）＝ <span class="red">レコード</span>（列の集まり＝1件分）
- 1列（縦）＝ <span class="red">フィールド</span>（属性／カラム）
- 1マス ＝ <span class="red">セル</span>

</div></div>

<table class="dtbl" style="width:100%">
<tr><th>分類</th><th>形</th><th>特徴</th></tr>
<tr><td class="l">階層型</td><td>木構造</td><td class="l">検索速い／追加削除が非効率</td></tr>
<tr><td class="l">ネットワーク型</td><td>網目</td><td class="l">多対多を表現できる</td></tr>
<tr><td class="l"><span class="hl">リレーショナル型</span></td><td>表</td><td class="l"><span class="hl">最も普及</span>・分かりやすい／処理は重め</td></tr>
</table>

<div class="band" style="font-size:18px">巨大な1表でなく、<span class="hl">種類ごとに小さい表</span>に分けて<span class="hl">結合</span>で組み合わせると、効率よく矛盾なく管理できる。<span class="important">重要</span></div>

</div>
</div>

<div class="takeaway">表（テーブル）形式が主流。行＝レコード／列＝フィールド／マス＝セルを正しく区別する。</div>

---

<!-- _class: fig -->

<div class="page-title">SQL：選択・射影・結合</div>

## 問い合わせ言語 SQL の「3つの基本操作」

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig48.svg" style="width:100%;object-fit:contain;display:block;max-height:350px;margin:0 auto;">
</div>

<div class="caption">SQL＝<span class="red">Structured Query Language</span>。検索・登録の問い合わせ＝<span class="red">クエリ</span>。<span class="hl">選択＝行</span>・<span class="hl">射影＝列</span>・結合＝表をつなぐ。</div>

<div class="takeaway">「英語っぽい1文」で、欲しい行（選択）と列（射影）を切り出せる。これが SQL の核。</div>

---

<div class="page-title">ワーク⑧</div>

## ワーク：Colab で pandas × SQL を動かす

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 表計算ではなく「コード」で（Moodle → Colab）</div><div class="b">

- ① <span class="mono">import pandas as pd</span> で表を2つ作る（<span class="hl">書籍</span>・<span class="hl">著者</span>）
- ② <span class="mono">pandasql</span> / <span class="mono">sqlite3</span> で SQL を実行：<br><span class="mono">SELECT 書名,著者名 FROM 書籍 JOIN 著者 USING(著者ID)</span>
- ③ <span class="red">WHERE（選択）・列指定（射影）・JOIN（結合）</span>で結果がどう変わるか観察
- ④ 同じ操作を <span class="mono">df.merge()</span> でも書き、SQL と pandas を見比べる

</div></div>

<div class="cbox blue"><div class="h">確認ポイント</div><div class="b">

- WHERE を外すと<span class="red">行</span>が増える？ SELECT の列名を変えると<span class="red">列</span>が変わる？
- JOIN を外すと、なぜ著者名が出ない？（表が分かれているから）

</div></div>

</div>
<div>

<div class="ph" style="height:215px">［ここに Colab で pandas＋SQL を実行した画面のスクショを貼る］<br>（画像はこちらで差し込みます）</div>

<div class="band" style="font-size:18px">ラボの実験データ・アンケート・配列情報も、<span class="hl">表に整えれば SQL/pandas で一発検索</span>できる。<span class="important">重要</span></div>

</div>
</div>

<div class="statement">SQL は「英語っぽい問い合わせ言語」。研究室のデータ処理でそのまま役立つ。</div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 9 ／ CHAPTER 9</div>

# 情報システムの応用とデータ分析入門

## 旅の終点 ― 届いたデータを「集めて・読む」仕組み（約14分）

---

<!-- _class: fig -->

<div class="page-title">暮らしを支える仕組み</div>

## 身の回りは「データベース＋ネットワーク」で動く

<div class="fig-area">
<div style="width:98%">

<img class="svgfig" src="./src-ext/fig49.svg" style="width:100%;object-fit:contain;display:block;max-height:42px;margin:0 auto;">

<img class="svgfig" src="./src-ext/fig50.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
</div>

<div class="band">情報システムの正体は<span class="hl">「ネットワークで集めたデータを、データベースに蓄えて活かす」</span>こと。残りはその“読み方”を学ぶ。</div>

---

<!-- _class: split -->

<div class="page-title">マーケティングとPOS</div>

## なぜ1本のバーコードが「経営」を動かすのか

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig51.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox red"><div class="h">マーケティングとは</div><div class="b">

- 要望調査・宣伝・広告調査を踏まえ
- <span class="red">商品・価格・販路・宣伝</span>を決めて改善
- 売れる仕組み＝市場そのものを創る活動

</div></div>

<div class="cbox blue"><div class="h">POS（Point of Sales＝販売時点情報管理）</div><div class="b">

- レジ＝<span class="red">データ入力端末</span>でもある
- 「売れた瞬間」を即データ化 → 欠品も売れ残りも減らす
- マーケティングを動かす<span class="red">手段</span>の代表例

</div></div>

</div>
</div>

<div class="takeaway">バーコード1本が、精算・在庫・発注・配送まで一気に動かす ＝ POS</div>

---

<!-- _class: fig -->

<div class="page-title">データの種類と尺度</div>

## データの「種類（尺度水準）」を見分ける <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:98%;align-items:center">
<div>

<img class="svgfig" src="./src-ext/fig52.svg" style="width:100%;object-fit:contain;display:block;max-height:280px;margin:0 auto;">

</div>
<div>

<div class="cbox blue"><div class="h">質的データ ／ 量的データ</div><div class="b">

- 質的＝<span class="red">名義・順序</span>（文字・カテゴリ）
- 量的＝<span class="red">間隔・比例</span>（数値）

</div></div>

<div class="cbox gray"><div class="h">データの形式（保存の形）</div><div class="b">

- <span class="red">テキスト</span>＝人が読める（CSV・TSV）
- <span class="red">マークアップ</span>＝タグで構造化（HTML・XML）
- <span class="red">バイナリ</span>＝そのまま記録（画像・音声）

</div></div>

</div>
</div>
</div>

<div class="ask">「時給（円）」と「満足度の5段階」── それぞれ何尺度？　使ってよい計算が変わる。</div>

---

<!-- _class: fig -->

<div class="page-title">度数分布とヒストグラム</div>

## データを階級に分け、個数（度数）を数える

<div class="fig-area">
<div class="grid2" style="width:97%;align-items:center">
<div>
<table class="dtbl">
<tr><th>階級（℃）</th><th>度数（日）</th><th>累積</th></tr>
<tr><td>24 〜 26</td><td>2</td><td>2</td></tr>
<tr><td>26 〜 28</td><td>5</td><td>7</td></tr>
<tr><td>28 〜 30</td><td>9</td><td>16</td></tr>
<tr><td class="l"><span class="red">30 〜 32</span></td><td><span class="red">10</span></td><td>26</td></tr>
<tr><td>32 〜 34</td><td>4</td><td>30</td></tr>
</table>
<div class="attr" style="text-align:center">東京・2022年9月の最高気温（例・全30日）／表計算は <span class="mono">=COUNTIFS()</span> で度数</div>
</div>
<div>
<img class="svgfig" src="./src-ext/fig53.svg" style="width:100%;object-fit:contain;display:block;max-height:250px;margin:0 auto;">
</div>
</div>
</div>

<div class="caption">度数分布表をグラフ化したものが<span class="red">ヒストグラム</span>。山の<span class="red">位置・広がり・偏り</span>が一目で分かる。</div>

---

<!-- _class: fig -->

<div class="page-title">代表値の落とし穴</div>

## 平均値か、中央値か ── 外れ値に注意 <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:97%">
<div>
<div class="cbox blue"><div class="h">A町（弁当の値段・5店舗）</div><div class="b">

<span class="mono">260　270　280　290　300</span> 円<br>
平均値 ＝ (260+…+300)/5 ＝ <span class="red">280円</span>／中央値 ＝ 280円

</div></div>
<div class="cbox orange"><div class="h">B町（6店舗）── 1店だけ激安</div><div class="b">

<span class="mono"><span class="hl-pink">100</span>　260　270　280　280　280</span> 円<br>
平均値 ＝ 1470/6 ＝ <span class="red">245円</span>／中央値 ＝ (270+280)/2 ＝ <span class="red">275円</span>

</div></div>
<div class="cbox gray"><div class="h">3つの代表値</div><div class="b">

- 平均値＝合計÷個数（<span class="red">外れ値に弱い</span>）
- 中央値＝順に並べた真ん中（外れ値に強い）
- 最頻値＝最も多い値（B町は<span class="red">280円</span>）

</div></div>
</div>
<div>
<img class="svgfig" src="./src-ext/fig54.svg" style="width:100%;object-fit:contain;display:block;max-height:240px;margin:0 auto;">

<div class="band" style="margin-top:14px">「平均280→245」は<span class="hl">外れ値1個</span>のせい。実感に近いのは<span class="hl">中央値</span>。代表値は<span class="hl">分布を見て選ぶ</span>。</div>

</div>
</div>
</div>

---

<!-- _class: split -->

<div class="page-title">箱ひげ図・ばらつき</div>

## 散らばりを「数値」と「図」で表す <span class="important">重要</span>

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig55.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox gray"><div class="h">ばらつきの数値</div><div class="b">

- <span class="red">分散</span>＝偏差（平均との差）の<span class="red">2乗</span>の平均
- <span class="red">標準偏差</span>＝√分散（散らばりの大きさ）
- 表計算：<span class="mono">=VAR.P()</span> / <span class="mono">=STDEV.P()</span>

</div></div>

<div class="cbox blue"><div class="h">偏差値の意味</div><div class="b">

- 偏差値 ＝ (得点−平均)÷標準偏差 ×10 ＋50
- 同じ点でも<span class="red">標準偏差が小さいほど</span>偏差値は大きく出る

</div></div>

</div>
</div>

<div class="takeaway">中央値だけでなく「箱の幅」で散らばりを見る ＝ 集団を正しく比べる第一歩</div>

---

<!-- _class: fig -->

<div class="page-title">相関・因果・回帰</div>

## 相関は因果ではない／回帰で予測する <span class="important">重要</span>

<div class="fig-area">
<div class="grid3" style="width:98%">
<div>
<img class="svgfig" src="./src-ext/fig56.svg" style="width:100%;object-fit:contain;display:block;max-height:200px;margin:0 auto;">
</div>
<div>
<img class="svgfig" src="./src-ext/fig57.svg" style="width:100%;object-fit:contain;display:block;max-height:200px;margin:0 auto;">
</div>
<div>
<img class="svgfig" src="./src-ext/fig58.svg" style="width:100%;object-fit:contain;display:block;max-height:200px;margin:0 auto;">
</div>
</div>
</div>

<div class="episode"><div class="h">なぜ学ぶか — 相関を因果と取り違えると判断を誤る</div>「アイスが売れる日ほど水難事故が多い」。だが真因は<span class="hl">暑さ＝交絡因子</span>で、アイスを禁じても事故は減らない。相関係数（<span class="mono">=CORREL()</span>, −1〜+1）は関係の強さを示すだけ。<span class="hl">仮説検定</span>（帰無仮説を有意水準5%で棄却）と合わせ、データから「正しい結論」を引き出すのがデータサイエンティストの仕事。<span class="src">出典：高校『情報』第4編第3章「データの分析」（相関・回帰・仮説検定）</span></div>


---

<!-- _class: divider -->

<div class="chapter-num">動画 10 ／ CHAPTER 10</div>

# クラウドコンピューティング

## 旅の終点 ── 届いたデータを「置く・動かす」場所、そして自分で実験する（約12分）

---

<!-- _class: fig -->

<div class="page-title">クラウドとは</div>

## クラウド＝「所有」から「利用」へ ── 必要なときに借りる <span class="important">重要</span>

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig59.svg" style="width:100%;object-fit:contain;display:block;max-height:360px;margin:0 auto;">
</div>

<div class="band">教科書のいう<span class="red">クラウドコンピューティング</span>＝高性能なサーバを自前で持たず、<span class="red">インターネット経由で必要なときにサービスとして利用</span>する形態（教科書 図9）。</div>

<div class="ask">「自分のPCが壊れても、写真もメール（ Google フォト等）も消えない」のはなぜ？ ── データが手元でなく雲の中にあるから。</div>

---

<!-- _class: fig -->

<div class="page-title">所有→利用</div>

## 何を「自分」で、何を「事業者」に任せるか ── IaaS / PaaS / SaaS

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig60.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band">同じ<span class="red">層スタック</span>＝動画4の TCP/IP 4階層と同じ「上に積む」考え方。<span class="red">下の層ほど事業者に任せられる</span>のがクラウド。</div>

---

<!-- _class: split -->

<div class="page-title">なぜ学ぶか</div>

## 集約は「便利」と「弱点」の両方 ── 雲が落ちると世界が止まる

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig61.svg" style="width:100%;object-fit:contain;display:block;max-height:300px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox red"><div class="h">便利さ（なぜ使うのか）</div><div class="b">

- 初期費用ゼロで<span class="red">いますぐ使える</span>
- 利用量に応じて<span class="red">瞬時に増減</span>（実験向き）
- 保守・更新・冗長化は<span class="red">事業者まかせ</span>

</div></div>

<div class="cbox gray"><div class="h">弱点（なぜ仕組みを知るのか）</div><div class="b">

- 集約点が落ちると<span class="red">広範囲が同時停止</span>
- データを<span class="red">他社に預ける</span>＝設定・権限が命

</div></div>

<div class="episode"><div class="h">EPISODE ── 雲はときどき落ちる</div>
2021年12月、AWS の主要拠点 us-east-1 が大規模障害を起こし、Netflix・Disney+ など多数のサービスが同時停止。<span class="red">少数の巨大クラウドに皆が相乗りしている</span>ため、そこが落ちると一斉に落ちる。「どこに預けているか」を知ることが大事。
</div>

<div class="src">出典：AWS us-east-1 大規模障害（2021-12-07）</div>

</div>
</div>

<div class="band">クラウドの恩恵は、<span class="red">集約点を守れて初めて成り立つ</span>。だから IP・DNS・経路・暗号という「中身」を学んだ。</div>

---

<!-- _class: split -->

<div class="page-title">学び続ける</div>

## 旅の終点 → 自分で「実験する」へ戻る ── GCP・Colab という砂場

<div class="split-body">
<div class="left">

<img class="svgfig" src="./src-ext/fig62.svg" style="width:100%;object-fit:contain;display:block;max-height:280px;margin:0 auto;">

</div>
<div class="right">

<div class="cbox blue"><div class="h">学外で「実験する」具体例</div><div class="b">

- <span class="red">Google Colab</span>：ブラウザだけで Python を実行（動画9のデータ分析をそのまま動かせる）
- <span class="red">GCP（Google Cloud）</span>：無料枠で自分の<span class="red">仮想マシン（VM）を1つ立ててみる</span>＝IaaSの体験
- 安全な「砂場」で<span class="red">壊しても本番に影響しない</span>

</div></div>

<div class="cbox green"><div class="h">学び方は1つではない（動画1）</div><div class="b">

- ①実験する ②ネットで調べる ③Geminiで調べる ④人に聞く ⑤本・論文
- <span class="red">AIは軸でなく1モード</span>。中身を理解した人ほど深い答えを引き出せる

</div></div>

<div class="ph" style="height:64px">［ Colab／GCP コンソールのスクショ ］</div>

</div>
</div>

<div class="band">クラウドは「<span class="red">安全に失敗して学べる</span>」最高の実験場 ── 旅の終点から、動画1の「<span class="red">①実験する</span>」へ戻ろう。</div>


---

<!-- _class: fig -->

<div class="page-title">旅の全行程</div>

## 「URLを入れてからページが出るまで」── 全部つながった

<div class="fig-area">
<img class="svgfig" src="./src-ext/fig63.svg" style="width:100%;object-fit:contain;display:block;max-height:340px;margin:0 auto;">
</div>

<div class="band">この回でたどった道：端末 → Wi-Fi → DNS → Internet → サーバ → ページ表示。各駅の「しくみ」が、次の駅へ荷物を渡していた。</div>

<div class="takeaway">点で覚えた用語を、URL→表示という1本の線でつなぎ直す。</div>

---

<!-- _class: message -->

# 手を動かして、学び続けよう

## 教科書とAIの「外」に、実験と・人と・本がある

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## この回の要点 ── 6つの「駅」で振り返る

<div class="grid2">
<div>

<ul>
<li><span class="hl">インターネット＝ネットワークの相互接続</span>。全ホストは<span class="hl">IPアドレス</span>（32bit / IPv6は128bit＝2<sup>128</sup>≈1兆×1兆×1兆）という住所で識別</li>
<li><span class="hl">TCP/IP（4層）</span>に沿い各層がヘッダを重ね、データは<span class="hl">パケット</span>に小分け＝引っ越しの段ボール。ルータが<span class="hl">経路制御表でバケツリレー</span></li>
<li>名前は<span class="hl">DNS</span>でIPに翻訳（dig で実演）。<span class="hl">HTTP/HTTPS</span>でWebページが届き、ブラウザがHTML/CSSを表示</li>
</ul>

</div>
<div>

<ul>
<li><span class="hl">公開鍵暗号</span>＝誰でも施錠／受け手だけ開錠、<span class="hl">署名は逆向き</span>＋CA。SSL/TLSページが<span class="hl">HTTPS</span></li>
<li>データは<span class="hl">DB・SQL（選択・射影・結合）</span>で構造化。分析は<span class="hl">相関≠因果・外れ値</span>に注意</li>
<li><span class="hl">クラウド（IaaS/PaaS/SaaS）</span>と GCP で、自分で手を動かして学び続ける</li>
</ul>

</div>
</div>

<div class="episode"><div class="h">なぜ「しくみ」を学ぶのか</div>2025年11月、Cloudflareで設定ファイルが想定の倍以上に肥大化したたった1つの不具合で、X・ChatGPTなど多数のサービスが世界規模でエラーに。AIに「なぜ繋がらないの？」と聞いても、<span class="hl">中身を知らなければ答えの正否を判断できない</span>。だから用語でなく「しくみ」を学ぶ。</div>

<div class="src">出典：Cloudflare 公式「Cloudflare outage on November 18, 2025」</div>

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A・課題</div>

# Q&A は Moodle へ

## オンデマンドなので、質問・課題はすべて Moodle で受け付けます

<table class="dtbl">
<tr><th>項目</th><th>内容</th><th>場所・期限</th></tr>
<tr><td class="l">動画視聴</td><td class="l">全10本（Part1〜3）を視聴期限内に</td><td>Moodle ／ 期限内</td></tr>
<tr><td class="l">質問</td><td class="l">Q&amp;Aフォーラムへ投稿（slido・ライブ無し）</td><td>Moodle フォーラム</td></tr>
<tr><td class="l">課題</td><td class="l">確認小テスト＋dig実演の追体験レポート</td><td>Moodle ／ 期限内提出</td></tr>
<tr><td class="l">発展</td><td class="l">GCP Skills Boost で VM を1つ立てる（任意）</td><td>動画1「実験する」に回収</td></tr>
</table>

<div class="band">締切・提出物の最新情報は必ず Moodle の本回ページで確認してください。</div>
