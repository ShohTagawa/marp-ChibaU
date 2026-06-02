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
    --pt-width:   50%;   /* 中央ページタイトル帯の幅(文字が折り返すなら広く) */
    /* 左帯と中央帯の白い隙間つまみ：
         4px  → 元のデザイン：間に白い隙間が出る(これはこれでカッコいい)
         0    → 隙間ゼロでピタッと接する
         -4px → 4px重ねて完全に白を消す(現在)                          */
    --hdr-gap:   -4px;
    /* ↓この式は触らなくてOK(左帯の右スラントに中央帯を噛み合わせる)。--hdr-slantは22px */
    --pt-left: calc(var(--hdr-left-w) - var(--hdr-slant, 22px) + var(--hdr-gap));
  }
  /* ↓ deck内で page-title の位置・幅を直接指定(テーマ版違いに依存せず確実に噛み合う) */
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
    --hdr-left-w: 23%; /* 表紙のタイトルした赤枠 */
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
<tr><td class="l">動画の<strong>視聴期限</strong></td><td><span class="hl-dark mono">6/9（火）</span></td></tr>
<tr><td class="l"><strong>課題</strong>の提出</td><td><span class="hl-dark mono">6/16（火）</span></td></tr>
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
<svg viewBox="20 40 920 268" width="100%" style="max-height:330px">
  <defs>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 旅プログレスバー（このデック共通の背骨）：端末→Wi-Fi→DNS→Internet→サーバ→表示 -->
  <line x1="70" y1="78" x2="910" y2="78" stroke="#cccccc" stroke-width="2"/>
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
  <!-- 3つの山（Part1/2/3）：旅の全体を色帯で対応づけ -->
  <g font-size="16" text-anchor="middle">
    <rect class="card" x="60" y="180" width="430" height="120" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="275" y="208" font-weight="800" font-size="18" fill="#1a1a1a">Part 1 ── インターネットの仕組み</text>
    <text x="275" y="232" fill="#555">動画 1〜7 ／ 肝は TCP/IP と OSI 参照モデル</text>
    <text x="275" y="262" font-weight="700" fill="#3E78B2">基礎 → IP → 階層 → 配送 → 名前(DNS) → 安全</text>
    <text x="275" y="286" fill="#555" font-size="15">＝ いま上の旅で通る道すじそのもの</text>
    <rect class="card" x="510" y="180" width="210" height="120" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="615" y="208" font-weight="800" font-size="18" fill="#1a1a1a">Part 2 ── データ</text>
    <text x="615" y="232" fill="#555">動画 8〜9</text>
    <text x="615" y="262" font-weight="700" fill="#3C8A57">DB・SQL</text>
    <text x="615" y="286" fill="#555" font-size="15">届いた先で何を蓄え・取り出す？</text>
    <rect class="card" x="740" y="180" width="200" height="120" rx="10" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="840" y="208" font-weight="800" font-size="18" fill="#1a1a1a">Part 3 ── クラウド</text>
    <text x="840" y="232" fill="#555">動画 10</text>
    <text x="840" y="262" font-weight="700" fill="#D98A2B">それを置く場所</text>
    <text x="840" y="286" fill="#555" font-size="15">学び続けるための土台へ</text>
  </g>
  <!-- 旅→Part1 をつなぐ案内矢印 -->
  <path d="M275,118 L275,176" stroke="#A6192E" stroke-width="2.5" fill="none" marker-end="url(#arrow-red)"/>
  <text x="335" y="150" font-size="15" fill="#7d1322" font-weight="700">この旅の全体が Part 1</text>
</svg>
</div>

<div class="band">各動画のページ上部に同じ <strong>旅バー</strong> を小さく置き、<span class="hl">いま旅のどこの話か</span>を赤で点灯します。</div>

<div class="episode" style="margin-top:6px"><span class="h">なぜ学ぶか</span> 2025年11月18日、Cloudflare で<strong>設定ファイルが想定の倍以上に肥大化</strong>し処理停止、X・ChatGPT 等が世界規模でダウン。攻撃ではなく地味なバグ。仕組みを知れば「なぜ落ちたか」を自分で読み解ける。<span class="src">（出典: Cloudflare 公式ブログ 2025-11-18）</span></div>

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
<svg viewBox="0 0 940 250" width="100%" style="max-height:380px">
  <defs>
    <marker id="u01-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <g text-anchor="middle">
    <text x="470" y="26" font-size="20" font-weight="700">アナログ（連続）の音・画像 → デジタル（0と1）へ</text>
    <rect class="card" x="20" y="44" width="180" height="92" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="110" y="78" font-size="19" font-weight="700">① 標本化</text>
    <text x="110" y="104" font-size="16" fill="#555">一定間隔で</text>
    <text x="110" y="125" font-size="16" fill="#555">値を読み取る</text>
    <line x1="200" y1="90" x2="240" y2="90" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u01-arr)"/>
    <rect class="card" x="246" y="44" width="180" height="92" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="336" y="78" font-size="19" font-weight="700">② 量子化</text>
    <text x="336" y="104" font-size="16" fill="#555">段階値に</text>
    <text x="336" y="125" font-size="16" fill="#555">丸める</text>
    <line x1="426" y1="90" x2="466" y2="90" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u01-arr)"/>
    <rect class="card" x="472" y="44" width="180" height="92" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="562" y="78" font-size="19" font-weight="700">③ 符号化</text>
    <text x="562" y="104" font-size="16" fill="#555">段階値に</text>
    <text x="562" y="125" font-size="16" fill="#555">番号を割当</text>
    <line x1="652" y1="90" x2="692" y2="90" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u01-arr)"/>
    <rect class="card" x="698" y="44" width="222" height="92" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
    <text x="809" y="78" font-size="19" font-weight="700">④ 2進法で表現</text>
    <text x="809" y="108" font-size="22" font-weight="800" fill="#7d1322" font-family="Menlo,Consolas,monospace">0 1 0 0 1 1 …</text>
    <text x="470" y="166" font-size="16" fill="#555">標本化の細かさ＝サンプリング周波数／量子化の段階数＝ビット数。細かいほど忠実だが容量は増える。</text>
    <rect x="200" y="186" width="540" height="44" rx="8" fill="#FBEFC8" stroke="#ecd98f"/>
    <text x="470" y="214" font-size="16" font-weight="700">前回はこの流れに加え、NotebookLM を実際に試すテストも実施しました</text>
  </g>
</svg>
</div>

<div class="caption">第7回：標本化 → 量子化 → 符号化 → 2進法。連続した現実を、機械が扱える離散の数列に変換する。</div>

<div class="takeaway">第8回は逆向き — その「0と1の数列」が、世界中をどう旅して届くかを追う。</div>

---

<!-- _class: split -->

<div class="page-title">学び方</div>

## 情報の集め方は、1つじゃない — 「5つのモード」

<div class="split-body">
<div class="left">

<svg viewBox="-6 -6 372 352" width="100%" style="max-height:340px">
  <circle class="card" cx="180" cy="170" r="56" fill="#A6192E"/>
  <text x="180" y="164" fill="#fff" font-size="20" font-weight="800" text-anchor="middle">学び</text>
  <text x="180" y="188" fill="#fff" font-size="14" text-anchor="middle">5つのモード</text>
  <g text-anchor="middle">
    <line x1="180" y1="114" x2="180" y2="62" stroke="#bbb" stroke-width="2"/>
    <rect class="card" x="112" y="20" width="136" height="42" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="180" y="46" font-size="15" font-weight="700">① 実験する</text>
    <line x1="232" y1="138" x2="300" y2="98" stroke="#bbb" stroke-width="2"/>
    <rect class="card" x="246" y="74" width="112" height="42" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="302" y="100" font-size="15" font-weight="700">② ネット</text>
    <line x1="236" y1="202" x2="305" y2="240" stroke="#bbb" stroke-width="2"/>
    <rect class="card" x="252" y="218" width="106" height="42" rx="8" fill="#fff" stroke="#D98A2B" stroke-width="2"/><text x="305" y="244" font-size="15" font-weight="700">③ AI</text>
    <line x1="180" y1="226" x2="180" y2="278" stroke="#bbb" stroke-width="2"/>
    <rect class="card" x="110" y="278" width="140" height="42" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="180" y="304" font-size="15" font-weight="700">④ 人に聞く</text>
    <line x1="124" y1="202" x2="55" y2="240" stroke="#bbb" stroke-width="2"/>
    <rect class="card" x="2" y="218" width="116" height="42" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="60" y="244" font-size="15" font-weight="700">⑤ 本・論文</text>
  </g>
</svg>

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

<svg viewBox="0 0 360 320" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <rect class="card" x="40" y="34" width="110" height="40" rx="8" fill="#ECECEC" stroke="#6B6F76" stroke-width="1.5"/><text x="95" y="52" font-size="15" font-weight="700">浅い質問</text><text x="95" y="68" font-size="14" fill="#555">ひとこと</text>
    <text x="95" y="104" font-size="22" fill="#6B6F76" font-weight="800">↓</text>
    <rect class="card" x="40" y="116" width="110" height="62" rx="8" fill="#f3d6d6" stroke="#A6192E" stroke-width="1.5"/><text x="95" y="142" font-size="15" font-weight="700">浅い答え</text><text x="95" y="162" font-size="14" fill="#7d1322">表面的</text>
    <rect class="card" x="200" y="34" width="130" height="56" rx="8" fill="#DDEBC8" stroke="#3C8A57" stroke-width="2"/><text x="265" y="56" font-size="14" font-weight="700">自分の理解＋</text><text x="265" y="76" font-size="14" font-weight="700">論文・資料で文脈</text>
    <text x="265" y="116" font-size="22" fill="#3C8A57" font-weight="800">↓</text>
    <rect class="card" x="196" y="128" width="138" height="84" rx="8" fill="#cfe6b8" stroke="#3C8A57" stroke-width="2"/><text x="265" y="158" font-size="16" font-weight="700">深く充実した答え</text><text x="265" y="184" font-size="14" fill="#3C8A57">同じ性能の AI でも別物</text>
    <text x="180" y="262" font-size="17" font-weight="700" fill="#A6192E">入力の質が、出力の質を決める</text>
    <text x="180" y="290" font-size="15" fill="#555">＝ 自分が深く理解しているほど、AI は深く返す</text>
  </g>
</svg>

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
<svg viewBox="0 0 920 300" width="100%" style="max-height:320px">
  <g text-anchor="middle">
    <text x="460" y="34" font-size="20" font-weight="700">学習法の効果は「やり方」で大きく変わる（Dunlosky ら 2013）</text>
    <rect class="card" x="40" y="60" width="410" height="200" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="245" y="90" font-size="18" font-weight="700" fill="#3C8A57">効果が高い（実践向き）</text>
    <text x="245" y="124" font-size="16">・<tspan font-weight="700">想起練習</tspan>（思い出してテストする）</text>
    <text x="245" y="154" font-size="16">・<tspan font-weight="700">分散学習</tspan>（間隔をあけて繰り返す）</text>
    <text x="245" y="190" font-size="15" fill="#555">＝ ① 実験する・dig で試す・自分で説明し直す</text>
    <text x="245" y="214" font-size="15" fill="#555">　 ＝「手を動かして思い出す」学び方</text>
    <rect class="card" x="470" y="60" width="410" height="200" rx="10" fill="#ECECEC" stroke="#6B6F76" stroke-width="2"/>
    <text x="675" y="90" font-size="18" font-weight="700" fill="#6B6F76">効果が低め（やった気だけ）</text>
    <text x="675" y="124" font-size="16">・<tspan font-weight="700">読み返し</tspan>だけ</text>
    <text x="675" y="154" font-size="16">・<tspan font-weight="700">マーカーを引く</tspan>だけ</text>
    <text x="675" y="190" font-size="15" fill="#555">＝ AI の答えを「眺めて満足」も、これに近い</text>
    <text x="675" y="214" font-size="15" fill="#555">　 受け身では定着しにくい</text>
  </g>
</svg>
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
<svg viewBox="0 0 980 300" width="100%" style="max-height:340px">
  <defs>
    <marker id="u2arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 旅プログレスバー（端末→Wi-Fi/LAN 点灯） -->
  <g font-size="16" text-anchor="middle">
    <line x1="60" y1="32" x2="920" y2="32" stroke="#ddd" stroke-width="2"/>
    <circle cx="80"  cy="32" r="7" fill="#A6192E"/><text x="80"  y="18" fill="#A6192E" font-weight="700">端末</text>
    <circle cx="260" cy="32" r="7" fill="#A6192E"/><text x="260" y="18" fill="#A6192E" font-weight="700">Wi-Fi/LAN</text>
    <circle cx="440" cy="32" r="6" fill="#ccc"/><text x="440" y="18" fill="#999">DNS</text>
    <circle cx="620" cy="32" r="6" fill="#ccc"/><text x="620" y="18" fill="#999">Internet</text>
    <circle cx="800" cy="32" r="6" fill="#ccc"/><text x="800" y="18" fill="#999">サーバ</text>
    <circle cx="920" cy="32" r="6" fill="#ccc"/><text x="920" y="18" fill="#999">表示</text>
  </g>
  <!-- 家のLAN -->
  <ellipse class="card" cx="165" cy="180" rx="140" ry="92" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="165" y="108" font-size="18" font-weight="700" text-anchor="middle" fill="#3E78B2">家庭の LAN</text>
  <g fill="#3E78B2"><circle cx="110" cy="170" r="13"/><circle cx="165" cy="205" r="13"/><circle cx="220" cy="170" r="13"/></g>
  <text x="165" y="252" font-size="16" text-anchor="middle" fill="#3E78B2">PC・スマホ・TV</text>
  <!-- 大学のLAN -->
  <ellipse class="card" cx="815" cy="180" rx="140" ry="92" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
  <text x="815" y="108" font-size="18" font-weight="700" text-anchor="middle" fill="#3C8A57">大学の LAN（別のネットワーク）</text>
  <g fill="#3C8A57"><circle cx="760" cy="170" r="13"/><circle cx="815" cy="205" r="13"/><circle cx="870" cy="170" r="13"/></g>
  <text x="815" y="252" font-size="16" text-anchor="middle" fill="#3C8A57">研究室・図書館の機器</text>
  <!-- WAN（中央） -->
  <ellipse class="card" cx="490" cy="180" rx="158" ry="74" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2.5" stroke-dasharray="7 5"/>
  <text x="490" y="172" font-size="20" font-weight="800" text-anchor="middle" fill="#D98A2B">WAN（広域網）</text>
  <text x="490" y="200" font-size="16" text-anchor="middle" fill="#a06a1d">通信事業者の回線でLAN同士を繋ぐ</text>
  <!-- ルータ -->
  <line x1="305" y1="180" x2="332" y2="180" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u2arr-red)"/>
  <rect class="card" x="295" y="162" width="40" height="36" rx="8" fill="#A6192E"/><text x="315" y="185" font-size="17" fill="#fff" text-anchor="middle" font-weight="700">R</text>
  <line x1="648" y1="180" x2="675" y2="180" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u2arr-red)"/>
  <rect class="card" x="665" y="162" width="40" height="36" rx="8" fill="#A6192E"/><text x="685" y="185" font-size="17" fill="#fff" text-anchor="middle" font-weight="700">R</text>
</svg>
</div>

<div class="band">「相互に接続されたネットワーク（inter-network）」＝<span class="red">インターネット</span>。LAN＝限られた範囲／WAN＝広域、繋ぐ装置が<span class="red">ルーター(R)</span>。</div>

<div class="takeaway">小さな網（LAN）を、広い網（WAN）でいくつも繋いだものが「網の網」。</div>

---

<!-- _class: split -->

<div class="page-title">ネットワークの種類</div>

## LAN と WAN ── 「範囲」と「持ち主」で区別する

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <!-- LAN -->
  <rect class="card" x="20" y="20" width="320" height="118" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="40" y="48" font-size="17" font-weight="700" fill="#3E78B2">LAN（Local Area Network）</text>
  <text x="40" y="74" font-size="15" fill="#333">範囲＝家・学校・企業など限定</text>
  <text x="40" y="98" font-size="15" fill="#333">持ち主＝自分／組織が占有・管理</text>
  <text x="40" y="122" font-size="15" fill="#333">例：自宅Wi-Fi・研究室の有線</text>
  <!-- WAN -->
  <rect class="card" x="20" y="160" width="320" height="118" rx="10" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
  <text x="40" y="188" font-size="17" font-weight="700" fill="#D98A2B">WAN（Wide Area Network）</text>
  <text x="40" y="214" font-size="15" fill="#333">範囲＝都市・国をまたぐ広域</text>
  <text x="40" y="238" font-size="15" fill="#333">持ち主＝通信事業者が提供</text>
  <text x="40" y="262" font-size="15" fill="#333">例：光回線・モバイル網</text>
</svg>

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

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <defs>
    <marker id="u2sc-grn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="u2sc-org" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
  </defs>
  <rect class="card" x="6" y="104" width="104" height="80" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/>
  <text x="58" y="139" font-size="16" font-weight="700" text-anchor="middle">クライアント</text>
  <text x="58" y="164" font-size="14" fill="#777" text-anchor="middle">利用する側</text>
  <rect class="card" x="250" y="104" width="104" height="80" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/>
  <text x="302" y="139" font-size="16" font-weight="700" text-anchor="middle">サーバ</text>
  <text x="302" y="164" font-size="14" fill="#777" text-anchor="middle">提供する側</text>
  <text x="180" y="119" font-size="14" text-anchor="middle" fill="#3C8A57" font-weight="700">リクエスト</text>
  <line x1="112" y1="134" x2="248" y2="134" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u2sc-grn)"/>
  <line x1="250" y1="156" x2="114" y2="156" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u2sc-org)"/>
  <text x="180" y="178" font-size="14" text-anchor="middle" fill="#D98A2B" font-weight="700">レスポンス</text>
  <rect x="40" y="225" width="280" height="46" rx="8" fill="#F6F7F9" stroke="#ccc" stroke-width="1.5"/>
  <text x="180" y="244" font-size="16" fill="#555" text-anchor="middle">ネットに繋がる全機器</text>
  <text x="180" y="264" font-size="16" font-weight="700" fill="#333" text-anchor="middle">＝「ホスト」</text>
</svg>

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

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <!-- 有線 -->
  <text x="95" y="24" font-size="16" font-weight="700" text-anchor="middle" fill="#3E78B2">有線：ハブで集線</text>
  <rect class="card" x="58" y="120" width="74" height="30" rx="6" fill="#3E78B2"/><text x="95" y="141" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">ハブ</text>
  <g stroke="#3E78B2" stroke-width="2"><line x1="72" y1="120" x2="42" y2="76"/><line x1="95" y1="120" x2="95" y2="70"/><line x1="118" y1="120" x2="148" y2="76"/></g>
  <g class="card" fill="#fff" stroke="#3E78B2" stroke-width="2"><rect x="20" y="50" width="40" height="28" rx="5"/><rect x="74" y="44" width="40" height="28" rx="5"/><rect x="128" y="50" width="40" height="28" rx="5"/></g>
  <text x="95" y="178" font-size="15" fill="#555" text-anchor="middle">より対線＋ハブ</text>
  <!-- 無線 -->
  <text x="270" y="24" font-size="16" font-weight="700" text-anchor="middle" fill="#3C8A57">無線：APに電波で</text>
  <rect class="card" x="248" y="120" width="46" height="32" rx="6" fill="#3C8A57"/><text x="271" y="141" font-size="14" fill="#fff" text-anchor="middle" font-weight="700">AP</text>
  <g fill="none" stroke="#3C8A57" stroke-width="2"><path d="M298 128 q20 -7 20 16"/><path d="M298 137 q30 -10 30 26"/><path d="M244 128 q-20 -7 -20 16"/><path d="M244 137 q-30 -10 -30 26"/></g>
  <g class="card" fill="#fff" stroke="#3C8A57" stroke-width="2"><rect x="320" y="150" width="34" height="26" rx="5"/><rect x="188" y="150" width="34" height="26" rx="5"/></g>
  <text x="270" y="200" font-size="15" fill="#555" text-anchor="middle">アクセスポイント(親機)</text>
  <!-- ルータへ -->
  <line x1="20" y1="240" x2="340" y2="240" stroke="#ccc" stroke-width="2"/>
  <rect class="card" x="148" y="252" width="64" height="34" rx="8" fill="#A6192E"/><text x="180" y="274" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">ルータ</text>
  <text x="180" y="234" font-size="14" fill="#888" text-anchor="middle">どちらも最後はルータでWANへ</text>
</svg>

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
2024年7月、豪州で<span class="red">旅客機内に偽Wi-Fiを立て</span>乗客のログイン情報を盗んだ人物が連邦警察に逮捕。便利な入口は、最も狙われる入口でもある。<span class="src">（出典: Kaspersky / Evil Twin）</span>
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
<svg viewBox="-6 -6 492 242" width="100%" style="max-height:240px">
  <defs>
    <marker id="u2w-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 旅バー -->
  <g font-size="14" text-anchor="middle">
    <line x1="40" y1="26" x2="440" y2="26" stroke="#ddd" stroke-width="2"/>
    <circle cx="55"  cy="26" r="6" fill="#A6192E"/><text x="55"  y="14" fill="#A6192E" font-weight="700">端末</text>
    <circle cx="170" cy="26" r="6" fill="#A6192E"/><text x="170" y="14" fill="#A6192E" font-weight="700">モバイル網</text>
    <circle cx="300" cy="26" r="5" fill="#ccc"/><text x="300" y="14" fill="#999">Internet</text>
    <circle cx="425" cy="26" r="5" fill="#ccc"/><text x="425" y="14" fill="#999">サーバ</text>
  </g>
  <rect class="card" x="14" y="110" width="56" height="40" rx="6" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="42" y="135" font-size="14" text-anchor="middle">スマホ</text>
  <g fill="none" stroke="#D98A2B" stroke-width="2"><path d="M74 118 q16 -7 16 14"/><path d="M74 128 q26 -10 26 24"/></g>
  <path d="M150 148 L132 88 L168 88 Z" fill="#D98A2B"/><line x1="150" y1="88" x2="150" y2="62" stroke="#D98A2B" stroke-width="3"/><text x="150" y="170" font-size="14" text-anchor="middle">基地局</text>
  <line x1="170" y1="128" x2="232" y2="128" stroke="#3C8A57" stroke-width="3"/><text x="201" y="118" font-size="14" text-anchor="middle" fill="#3C8A57">光ファイバ</text>
  <rect class="card" x="232" y="108" width="96" height="40" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="280" y="133" font-size="15" text-anchor="middle">基幹網</text>
  <line x1="328" y1="128" x2="378" y2="128" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u2w-red)"/>
  <ellipse class="card" cx="430" cy="128" rx="48" ry="34" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="430" y="133" font-size="15" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
</svg>
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
<svg viewBox="0 0 920 280" width="100%" style="max-height:300px">
  <!-- 旅プログレスバー：宛先住所を決める段 -->
  <g font-size="16" text-anchor="middle">
    <text x="60" y="22" fill="#888">端末</text><text x="118" y="22" fill="#bbb">›</text>
    <text x="185" y="22" fill="#888">Wi-Fi</text><text x="250" y="22" fill="#bbb">›</text>
    <text x="320" y="22" fill="#888">DNS</text><text x="378" y="22" fill="#bbb">›</text>
    <text x="470" y="22" fill="#A6192E" font-weight="800">Internet（宛先住所）</text><text x="600" y="22" fill="#bbb">›</text>
    <text x="690" y="22" fill="#888">サーバ</text><text x="760" y="22" fill="#bbb">›</text>
    <text x="845" y="22" fill="#888">表示</text>
  </g>
  <line x1="30" y1="34" x2="890" y2="34" stroke="#eee" stroke-width="2"/>
  <g text-anchor="middle">
    <g><rect class="card" x="30" y="78" width="190" height="62" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="125" y="118" font-size="34" font-weight="800">192</text></g>
    <text x="240" y="118" font-size="28" font-weight="800">.</text>
    <g><rect class="card" x="260" y="78" width="190" height="62" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="355" y="118" font-size="34" font-weight="800">168</text></g>
    <text x="470" y="118" font-size="28" font-weight="800">.</text>
    <g><rect class="card" x="490" y="78" width="190" height="62" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="585" y="118" font-size="34" font-weight="800">100</text></g>
    <text x="700" y="118" font-size="28" font-weight="800">.</text>
    <g><rect class="card" x="720" y="78" width="170" height="62" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="805" y="118" font-size="34" font-weight="800">10</text></g>
    <g font-family="Menlo,monospace" font-size="18" fill="#7d1322" font-weight="700">
      <rect x="30" y="158" width="190" height="36" rx="6" fill="#F8E5EA"/><text x="125" y="183">11000000</text>
      <rect x="260" y="158" width="190" height="36" rx="6" fill="#F8E5EA"/><text x="355" y="183">10101000</text>
      <rect x="490" y="158" width="190" height="36" rx="6" fill="#F8E5EA"/><text x="585" y="183">01100100</text>
      <rect x="720" y="158" width="170" height="36" rx="6" fill="#F8E5EA"/><text x="805" y="183">00001010</text>
    </g>
    <text x="125" y="222" font-size="16" fill="#777">8ビット</text><text x="355" y="222" font-size="16" fill="#777">8ビット</text><text x="585" y="222" font-size="16" fill="#777">8ビット</text><text x="805" y="222" font-size="16" fill="#777">8ビット</text>
    <line x1="30" y1="240" x2="890" y2="240" stroke="#A6192E" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="460" y="266" font-size="17" fill="#A6192E" font-weight="700">8 × 4 ＝ 32ビット（だから IPv4 ＝ 2³² ≈ 約43億通り）</text>
  </g>
</svg>
</div>

<div class="caption">32ビットを 8ビットずつ 4つ（オクテット）に区切り、10進法で表記。各オクテットは <span class="red">0〜255</span>（256個＝2⁸）。</div>

<div class="takeaway">パケットを届けるには宛先が要る → 全機器に固有のIP（住所）を割り当てる。</div>

---

<!-- _class: fig -->

<div class="page-title">2進⇔10進の手計算</div>

## なぜ <span class="mono">11000000</span> ＝ 192 なのか（桁の重み）

<div class="fig-area">
<svg viewBox="0 0 900 300" width="100%" style="max-height:320px">
  <!-- 桁重みヘッダ -->
  <g text-anchor="middle" font-family="Menlo,monospace">
    <text x="450" y="30" font-size="18" font-weight="700" font-family="var(--font-jp)">8ビットの各桁には「重み」がある（左が大きい）</text>
    <g font-size="17" fill="#6B6F76">
      <text x="80" y="66">128</text><text x="180" y="66">64</text><text x="280" y="66">32</text><text x="380" y="66">16</text><text x="480" y="66">8</text><text x="580" y="66">4</text><text x="680" y="66">2</text><text x="780" y="66">1</text>
      <text x="80" y="86" font-size="14">2⁷</text><text x="180" y="86" font-size="14">2⁶</text><text x="280" y="86" font-size="14">2⁵</text><text x="380" y="86" font-size="14">2⁴</text><text x="480" y="86" font-size="14">2³</text><text x="580" y="86" font-size="14">2²</text><text x="680" y="86" font-size="14">2¹</text><text x="780" y="86" font-size="14">2⁰</text>
    </g>
    <!-- ビットセル -->
    <g font-family="Menlo,monospace" font-size="30" font-weight="800">
      <rect class="card" x="42" y="100" width="76" height="58" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="80" y="140" fill="#7d1322">1</text>
      <rect class="card" x="142" y="100" width="76" height="58" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="180" y="140" fill="#7d1322">1</text>
      <rect x="242" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="280" y="140" fill="#999">0</text>
      <rect x="342" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="380" y="140" fill="#999">0</text>
      <rect x="442" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="480" y="140" fill="#999">0</text>
      <rect x="542" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="580" y="140" fill="#999">0</text>
      <rect x="642" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="680" y="140" fill="#999">0</text>
      <rect x="742" y="100" width="76" height="58" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/><text x="780" y="140" fill="#999">0</text>
    </g>
    <!-- 計算結果 -->
    <text x="80" y="186" font-size="16" fill="#A6192E" font-weight="700">128</text>
    <text x="180" y="186" font-size="16" fill="#A6192E" font-weight="700">64</text>
    <text x="450" y="232" font-size="22" font-weight="800" font-family="var(--font-jp)">1×128 ＋ 1×64 ＝ <tspan fill="#A6192E">192</tspan></text>
  </g>
  <rect x="120" y="252" width="660" height="36" rx="6" fill="#eef7ef"/>
  <text x="450" y="276" font-size="16" text-anchor="middle" fill="#3C8A57" font-weight="700" font-family="var(--font-jp)">同じ手順で 11111111 ＝ 128+64+…+1 ＝ 255（オクテットの最大値）</text>
</svg>
</div>

<div class="caption">「1が立っている桁の重みを足す」だけ。これが2進→10進の正体で、サブネットの計算にもそのまま効く。</div>

<div class="ask">指でやってみよう：<span class="mono">10101000</span> はいくつ？（ヒント：128＋32＋8）</div>

---

<!-- _class: split -->

<div class="page-title">サブネットとCIDR</div>

## IPは「ネットワーク部」＋「ホスト部」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 400 320" width="100%" style="max-height:330px">
  <text x="200" y="20" font-size="15" font-weight="700" text-anchor="middle">サブネットマスク 255.255.255.0 ＝ <tspan fill="#A6192E">/24</tspan></text>
  <!-- 帯：ネット部=blue / ホスト部=orange -->
  <rect class="card" x="14" y="34" width="282" height="40" rx="6" fill="#3E78B2"/><text x="155" y="60" font-size="15" fill="#fff" font-weight="700" text-anchor="middle">ネットワーク部（24ビット）</text>
  <rect class="card" x="300" y="34" width="86" height="40" rx="6" fill="#D98A2B"/><text x="343" y="60" font-size="14" fill="#fff" font-weight="700" text-anchor="middle">ホスト(8)</text>
  <g font-family="Menlo,monospace" font-size="16" text-anchor="start" font-weight="700">
    <text x="60" y="116">192.168.100.<tspan fill="#D98A2B">10</tspan></text>
    <text x="60" y="146">192.168.100.<tspan fill="#D98A2B">20</tspan></text>
  </g>
  <rect x="40" y="96" width="260" height="62" rx="8" fill="none" stroke="#3E78B2" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="156" y="180" font-size="14" fill="#3E78B2" font-weight="700" text-anchor="middle">ネットワーク部が同じ → 同じLAN</text>
  <line x1="20" y1="198" x2="380" y2="198" stroke="#eee" stroke-width="2"/>
  <g font-family="Menlo,monospace" font-size="16" text-anchor="middle" font-weight="700">
    <text x="180" y="232">10.0.0.</text><text x="242" y="232" fill="#D98A2B">5</text>
  </g>
  <text x="200" y="262" font-size="14" fill="#A6192E" text-anchor="middle" font-weight="700">↑ ネットワーク部が違う → 別ネットワーク</text>
  <rect x="30" y="278" width="340" height="34" rx="6" fill="#fdf3e8"/>
  <text x="200" y="300" font-size="14" fill="#a06a1d" text-anchor="middle" font-weight="700">ホスト部のビット数 → 入れられる機器の数</text>
</svg>

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
<svg viewBox="0 0 940 280" width="100%" style="max-height:285px">
  <!-- 旅バー -->
  <g font-size="16" text-anchor="middle">
    <text x="60" y="22" fill="#888">端末</text><text x="118" y="22" fill="#bbb">›</text>
    <text x="190" y="22" fill="#A6192E" font-weight="800">Wi-Fi/ルータ（住所変換）</text><text x="335" y="22" fill="#bbb">›</text>
    <text x="430" y="22" fill="#888">DNS</text><text x="490" y="22" fill="#bbb">›</text>
    <text x="585" y="22" fill="#A6192E" font-weight="800">Internet</text><text x="680" y="22" fill="#bbb">›</text>
    <text x="770" y="22" fill="#888">サーバ</text><text x="845" y="22" fill="#bbb">›</text><text x="900" y="22" fill="#888">表示</text>
  </g>
  <line x1="30" y1="34" x2="910" y2="34" stroke="#eee" stroke-width="2"/>
  <!-- 家のLAN -->
  <rect class="card" x="20" y="56" width="300" height="178" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="170" y="80" font-size="17" font-weight="700" text-anchor="middle" fill="#3E78B2">家のLAN（プライベートIP）</text>
  <g font-family="Menlo,monospace" font-size="16" text-anchor="middle" font-weight="700">
    <rect class="card" x="42" y="98" width="130" height="34" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="107" y="121" fill="#2a5680">192.168.0.2</text>
    <rect class="card" x="42" y="146" width="130" height="34" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="107" y="169" fill="#2a5680">192.168.0.3</text>
    <rect class="card" x="186" y="122" width="130" height="34" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="251" y="145" fill="#2a5680">192.168.0.4</text>
  </g>
  <text x="170" y="214" font-size="15" text-anchor="middle" fill="#3E78B2">外には出られない／家庭内で何度でも再利用OK</text>
  <!-- ルータ NAT -->
  <rect class="card" x="356" y="120" width="130" height="74" rx="8" fill="#A6192E"/><text x="421" y="152" font-size="18" fill="#fff" font-weight="700" text-anchor="middle">ルータ</text><text x="421" y="176" font-size="16" fill="#fff" text-anchor="middle">NAT変換</text>
  <line x1="320" y1="157" x2="356" y2="157" stroke="#888" stroke-width="3"/>
  <line x1="486" y1="157" x2="556" y2="157" stroke="#888" stroke-width="3"/>
  <!-- グローバルIP -->
  <g font-family="Menlo,monospace" font-size="17" text-anchor="middle" font-weight="700"><rect class="card" x="556" y="135" width="170" height="44" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="641" y="163" fill="#a06a1d">203.0.113.7</text></g>
  <text x="641" y="200" font-size="16" text-anchor="middle" fill="#a06a1d" font-weight="700">グローバルIP（世界に1つ）</text>
  <line x1="726" y1="157" x2="786" y2="157" stroke="#888" stroke-width="3"/>
  <ellipse cx="868" cy="157" rx="58" ry="46" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="868" y="163" font-size="17" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
  <text x="600" y="262" font-size="16" text-anchor="middle" fill="#7d1322" font-weight="700">多数のプライベートIP → 1つのグローバルIPに付け替え</text>
</svg>
</div>

<div class="episode"><span class="h">なぜ学ぶか｜「閉域網だから安全」の崩壊</span> 2022年、大阪の総合医療センターがランサムウェアで電子カルテ停止、外来全面再開まで約2か月。侵入口は外部委託先のVPN機器。<span class="hl">「LAN内＝プライベートIPだから安全」は通用しない。</span><span class="src">出典: ITmedia（2023-03-28）</span></div>

<div class="caption">グローバルIPは<span class="red">ICANN</span>が管理。IPv4＝32ビット＝約43億個 → 枯渇 → <span class="red">IPv6＝128ビット＝2¹²⁸（1兆×1兆×1兆級）</span>で枯渇しない。</div>

<div class="takeaway">多数の機器を、ルータの1つのグローバルIPで使い回す仕組み＝NAT。</div>

---

<!-- _class: split -->

<div class="page-title">ポート番号</div>

## IPは「建物の住所」、ポートは「部屋番号」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 320" width="100%" style="max-height:330px">
  <rect class="card" x="70" y="34" width="220" height="270" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2.5"/>
  <rect x="70" y="34" width="220" height="44" rx="8" fill="#6B6F76"/>
  <text x="180" y="63" font-size="16" fill="#fff" font-weight="700" text-anchor="middle" font-family="Menlo,monospace">203.0.113.5</text>
  <text x="180" y="98" font-size="15" fill="#6B6F76" text-anchor="middle">この1台の中の「部屋」を番号で指定</text>
  <g text-anchor="middle" font-family="Menlo,monospace">
    <rect class="card" x="92" y="112" width="176" height="44" rx="8" fill="#F8E5EA"/><text x="180" y="140" font-size="17" font-weight="700" fill="#7d1322">:80　HTTP</text>
    <rect class="card" x="92" y="166" width="176" height="44" rx="8" fill="#F8E5EA"/><text x="180" y="194" font-size="17" font-weight="700" fill="#7d1322">:443　HTTPS</text>
    <rect class="card" x="92" y="220" width="176" height="44" rx="8" fill="#fdf3e8"/><text x="180" y="248" font-size="17" font-weight="700" fill="#a06a1d">:8000　自作</text>
  </g>
  <text x="180" y="288" font-size="15" fill="#6B6F76" text-anchor="middle" font-family="var(--font-jp)">同じ住所でも部屋ごとに別サービス</text>
</svg>

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

<svg viewBox="0 0 360 240" width="100%" style="max-height:250px">
  <circle cx="78" cy="92" r="36" fill="#fff" stroke="#3E78B2" stroke-width="2.5" class="card"/>
  <text x="78" y="88" font-size="15" font-weight="700" text-anchor="middle">ピッチャー</text>
  <text x="78" y="106" font-size="14" fill="#555" text-anchor="middle">送り手</text>
  <circle cx="282" cy="92" r="36" fill="#fff" stroke="#A6192E" stroke-width="2.5" class="card"/>
  <text x="282" y="88" font-size="15" font-weight="700" text-anchor="middle">キャッチャー</text>
  <text x="282" y="106" font-size="14" fill="#555" text-anchor="middle">受け手</text>
  <line x1="244" y1="76" x2="116" y2="76" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u4pa)"/>
  <text x="180" y="68" font-size="15" text-anchor="middle" fill="#3C8A57" font-weight="700">サインを出す</text>
  <line x1="116" y1="108" x2="244" y2="108" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u4pb)"/>
  <text x="180" y="126" font-size="15" text-anchor="middle" fill="#D98A2B" font-weight="700">頷く／首を振る</text>
  <defs>
    <marker id="u4pa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="u4pb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
  </defs>
  <rect x="40" y="158" width="280" height="58" rx="8" fill="#F8E5EA" class="card"/>
  <text x="180" y="182" font-size="16" fill="#7d1322" text-anchor="middle" font-weight="700">「事前に取り決めた合図」があるから</text>
  <text x="180" y="204" font-size="16" fill="#7d1322" text-anchor="middle" font-weight="700">意思疎通できる ＝ プロトコル</text>
</svg>

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
<svg viewBox="0 0 900 330" width="100%" style="max-height:340px">
  <!-- 旅プログレスバー -->
  <g font-size="15" text-anchor="middle">
    <line x1="70" y1="22" x2="830" y2="22" stroke="#ddd" stroke-width="3"/>
    <circle cx="70" cy="22" r="6" fill="#6B6F76"/><text x="70" y="44" fill="#777">端末</text>
    <circle cx="222" cy="22" r="6" fill="#6B6F76"/><text x="222" y="44" fill="#777">Wi-Fi</text>
    <circle cx="374" cy="22" r="6" fill="#6B6F76"/><text x="374" y="44" fill="#777">DNS</text>
    <circle cx="526" cy="22" r="9" fill="#A6192E"/><text x="526" y="44" fill="#A6192E" font-weight="700">階層(今ここ)</text>
    <circle cx="678" cy="22" r="6" fill="#6B6F76"/><text x="678" y="44" fill="#777">Internet</text>
    <circle cx="830" cy="22" r="6" fill="#6B6F76"/><text x="830" y="44" fill="#777">表示</text>
  </g>
  <g font-size="17" text-anchor="start">
    <rect x="40" y="68" width="300" height="56" rx="8" fill="#3E78B2" class="card"/>
    <text x="58" y="92" fill="#fff" font-weight="700">① アプリケーション層</text>
    <text x="58" y="114" fill="#fff" font-size="15">HTTP / DNS / FTP（サービスの中身）</text>
    <rect x="40" y="130" width="300" height="56" rx="8" fill="#3C8A57" class="card"/>
    <text x="58" y="154" fill="#fff" font-weight="700">② トランスポート層</text>
    <text x="58" y="176" fill="#fff" font-size="15">TCP（ポート番号・到達確認・再送）</text>
    <rect x="40" y="192" width="300" height="56" rx="8" fill="#D98A2B" class="card"/>
    <text x="58" y="216" fill="#fff" font-weight="700">③ インターネット層</text>
    <text x="58" y="238" fill="#fff" font-size="15">IP（IPアドレスで目的地まで届ける）</text>
    <rect x="40" y="254" width="300" height="56" rx="8" fill="#6B6F76" class="card"/>
    <text x="58" y="278" fill="#fff" font-weight="700">④ ネットワークIF層</text>
    <text x="58" y="300" fill="#fff" font-size="15">Ethernet / Wi-Fi（電気・電波の信号へ）</text>
  </g>
  <!-- 右の役割説明 -->
  <g font-size="15">
    <line x1="380" y1="96" x2="430" y2="96" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#u4r)"/>
    <text x="440" y="92" font-weight="700" fill="#3E78B2">何を伝えるか</text><text x="440" y="112" fill="#555">アプリが扱うデータそのもの</text>
    <line x1="380" y1="158" x2="430" y2="158" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u4r2)"/>
    <text x="440" y="154" font-weight="700" fill="#3C8A57">確実に届けるか</text><text x="440" y="174" fill="#555">どのアプリ宛か＋抜けを再送</text>
    <line x1="380" y1="220" x2="430" y2="220" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u4r3)"/>
    <text x="440" y="216" font-weight="700" fill="#D98A2B">どこへ届けるか</text><text x="440" y="236" fill="#555">世界中の住所＝IPで宛先指定</text>
    <line x1="380" y1="282" x2="430" y2="282" stroke="#6B6F76" stroke-width="2.5" marker-end="url(#u4r4)"/>
    <text x="440" y="278" font-weight="700" fill="#6B6F76">どう運ぶか</text><text x="440" y="298" fill="#555">隣の機器へ物理的に送る</text>
  </g>
  <defs>
    <marker id="u4r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
    <marker id="u4r2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="u4r3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
    <marker id="u4r4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6B6F76"/></marker>
  </defs>
</svg>
</div>

<div class="caption">色は講義を通じて固定 ── 青＝アプリ／緑＝トランスポート／橙＝IP／灰＝物理。前回学んだIPは③に座る。</div>

---

<!-- _class: fig -->

<div class="page-title">4層 ↔ 7層</div>

## TCP/IP「4階層」 ↔ OSI参照モデル「7階層」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 320" width="100%" style="max-height:330px">
  <text x="200" y="24" font-size="18" font-weight="700" text-anchor="middle">TCP/IP（4階層）</text>
  <text x="680" y="24" font-size="18" font-weight="700" text-anchor="middle">OSI参照モデル（7階層・ISO策定）</text>
  <!-- TCP/IP 4層 -->
  <g font-size="16" fill="#fff" text-anchor="middle">
    <rect x="40" y="40" width="320" height="58" rx="8" fill="#3E78B2" class="card"/><text x="200" y="65" font-weight="700">アプリケーション層</text><text x="200" y="86" font-size="15">HTTP / DNS / FTP</text>
    <rect x="40" y="106" width="320" height="50" rx="8" fill="#3C8A57" class="card"/><text x="200" y="136" font-weight="700">トランスポート層　TCP / UDP</text>
    <rect x="40" y="164" width="320" height="50" rx="8" fill="#D98A2B" class="card"/><text x="200" y="194" font-weight="700">インターネット層　IP</text>
    <rect x="40" y="222" width="320" height="58" rx="8" fill="#6B6F76" class="card"/><text x="200" y="247" font-weight="700">ネットワークIF層</text><text x="200" y="268" font-size="15">Ethernet / Wi-Fi</text>
  </g>
  <!-- OSI 7層 -->
  <g font-size="16" fill="#fff" text-anchor="middle">
    <rect x="540" y="40" width="320" height="20" rx="5" fill="#3E78B2" class="card"/><text x="700" y="55" font-size="15">7 アプリケーション層</text>
    <rect x="540" y="63" width="320" height="20" rx="5" fill="#3E78B2"/><text x="700" y="78" font-size="15">6 プレゼンテーション層</text>
    <rect x="540" y="86" width="320" height="20" rx="5" fill="#3E78B2"/><text x="700" y="101" font-size="15">5 セッション層</text>
    <rect x="540" y="112" width="320" height="44" rx="6" fill="#3C8A57" class="card"/><text x="700" y="140" font-weight="700">4 トランスポート層</text>
    <rect x="540" y="164" width="320" height="50" rx="8" fill="#D98A2B" class="card"/><text x="700" y="194" font-weight="700">3 ネットワーク層</text>
    <rect x="540" y="222" width="320" height="26" rx="5" fill="#6B6F76" class="card"/><text x="700" y="240" font-size="15">2 データリンク層</text>
    <rect x="540" y="252" width="320" height="28" rx="5" fill="#6B6F76"/><text x="700" y="271" font-size="15">1 物理層</text>
  </g>
  <!-- 対応線 -->
  <g stroke="#A6192E" stroke-width="2.5" stroke-dasharray="5 3">
    <line x1="360" y1="69" x2="540" y2="73"/>
    <line x1="360" y1="131" x2="540" y2="134"/>
    <line x1="360" y1="189" x2="540" y2="189"/>
    <line x1="360" y1="251" x2="540" y2="251"/>
  </g>
  <text x="450" y="300" font-size="15" fill="#7d1322" text-anchor="middle" font-weight="700">OSIの7層をまとめると、ちょうどTCP/IPの4層になる</text>
</svg>
</div>

<div class="caption">⚠ 取り違え注意 ── <span class="red">TCP/IP＝4階層</span>／<span class="red">OSI＝7階層</span>。OSIの上3層がTCP/IPのアプリ層に、下2層がIF層に対応する。</div>

---

<!-- _class: split -->

<div class="page-title">カプセル化</div>

## 各層が「宛名（ヘッダ）」を足して、入れ子に包んでいく <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <text x="180" y="20" font-size="15" text-anchor="middle" font-weight="700">送信側：上から下へ包む ↓</text>
  <rect x="8" y="34" width="344" height="206" rx="8" fill="#6B6F76" class="card"/>
  <text x="22" y="54" font-size="15" fill="#fff" font-weight="700">④ Ethernetヘッダ</text>
  <rect x="44" y="64" width="272" height="146" rx="8" fill="#D98A2B"/>
  <text x="58" y="84" font-size="15" fill="#fff" font-weight="700">③ IPヘッダ（宛先IP）</text>
  <rect x="80" y="94" width="200" height="106" rx="8" fill="#3C8A57"/>
  <text x="94" y="114" font-size="15" fill="#fff" font-weight="700">② TCPヘッダ（ポート）</text>
  <rect x="112" y="124" width="136" height="64" rx="8" fill="#3E78B2"/>
  <text x="180" y="150" font-size="15" fill="#fff" font-weight="700" text-anchor="middle">① HTTP</text>
  <text x="180" y="172" font-size="14" fill="#fff" text-anchor="middle">データ本体</text>
  <text x="180" y="262" font-size="15" fill="#7d1322" text-anchor="middle" font-weight="700">受信側は逆順に</text>
  <text x="180" y="284" font-size="15" fill="#7d1322" text-anchor="middle" font-weight="700">外側からヘッダを外す ↑</text>
</svg>

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

<svg viewBox="0 0 900 46" width="92%" style="height:42px;max-height:46px;flex-shrink:0;margin:0 auto 2px;display:block">
  <g font-size="15" text-anchor="middle">
    <line x1="60" y1="34" x2="840" y2="34" stroke="#ccc" stroke-width="2"/>
    <g fill="#999"><circle cx="60" cy="34" r="6"/><circle cx="216" cy="34" r="6"/><circle cx="372" cy="34" r="6"/><circle cx="684" cy="34" r="6"/><circle cx="840" cy="34" r="6"/></g>
    <circle cx="528" cy="34" r="9" fill="#A6192E"/>
    <text x="60" y="16" fill="#888">端末</text><text x="216" y="16" fill="#888">Wi-Fi</text><text x="372" y="16" fill="#888">DNS</text><text x="528" y="16" fill="#A6192E" font-weight="700">配送(いまここ)</text><text x="684" y="16" fill="#888">サーバ</text><text x="840" y="16" fill="#888">表示</text>
  </g>
</svg>

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<svg viewBox="0 0 420 200" width="100%" style="max-height:215px">
  <text x="210" y="22" font-size="17" font-weight="700" text-anchor="middle">回線交換（電話）</text>
  <circle cx="48" cy="100" r="26" fill="#fff" stroke="#6B6F76" stroke-width="2" class="card"/><text x="48" y="106" font-size="16" text-anchor="middle">A</text>
  <circle cx="372" cy="100" r="26" fill="#fff" stroke="#6B6F76" stroke-width="2" class="card"/><text x="372" y="106" font-size="16" text-anchor="middle">B</text>
  <line x1="76" y1="100" x2="344" y2="100" stroke="#A6192E" stroke-width="9"/>
  <text x="210" y="92" font-size="15" fill="#A6192E" text-anchor="middle" font-weight="700">2者で1本を占有</text>
  <text x="210" y="150" font-size="15" fill="#555" text-anchor="middle">つなぐ間ずっと専有</text>
  <text x="210" y="172" font-size="15" fill="#D98A2B" text-anchor="middle">→ 他の人は「話し中」</text>
</svg>
</div>
<div>
<svg viewBox="0 0 420 200" width="100%" style="max-height:215px">
  <text x="210" y="22" font-size="17" font-weight="700" text-anchor="middle">パケット交換（インターネット）</text>
  <circle cx="48" cy="100" r="26" fill="#fff" stroke="#3C8A57" stroke-width="2.5" class="card"/><text x="48" y="106" font-size="16" text-anchor="middle">A</text>
  <circle cx="372" cy="100" r="26" fill="#fff" stroke="#3C8A57" stroke-width="2.5" class="card"/><text x="372" y="106" font-size="16" text-anchor="middle">B</text>
  <g font-size="15" fill="#fff" text-anchor="middle" font-weight="700">
    <rect x="100" y="58" width="40" height="26" rx="6" fill="#3E78B2"/><text x="120" y="76">1</text>
    <rect x="170" y="110" width="40" height="26" rx="6" fill="#D98A2B"/><text x="190" y="128">2</text>
    <rect x="235" y="62" width="40" height="26" rx="6" fill="#3C8A57"/><text x="255" y="80">3</text>
    <rect x="300" y="112" width="40" height="26" rx="6" fill="#A6192E"/><text x="320" y="130">4</text>
  </g>
  <text x="210" y="172" font-size="15" fill="#3C8A57" text-anchor="middle" font-weight="700">小分けして各自バラバラに発送 → 共有できる</text>
</svg>
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

<svg viewBox="0 0 900 46" width="92%" style="height:42px;max-height:46px;flex-shrink:0;margin:0 auto 2px;display:block">
  <g font-size="15" text-anchor="middle">
    <line x1="60" y1="34" x2="840" y2="34" stroke="#ccc" stroke-width="2"/>
    <g fill="#999"><circle cx="60" cy="34" r="6"/><circle cx="216" cy="34" r="6"/><circle cx="372" cy="34" r="6"/><circle cx="684" cy="34" r="6"/><circle cx="840" cy="34" r="6"/></g>
    <circle cx="528" cy="34" r="9" fill="#A6192E"/>
    <text x="60" y="16" fill="#888">端末</text><text x="216" y="16" fill="#888">Wi-Fi</text><text x="372" y="16" fill="#888">DNS</text><text x="528" y="16" fill="#A6192E" font-weight="700">配送(いまここ)</text><text x="684" y="16" fill="#888">サーバ</text><text x="840" y="16" fill="#888">表示</text>
  </g>
</svg>

<div class="fig-area">
<svg viewBox="0 0 900 250" width="100%" style="max-height:270px">
  <!-- 元データ -->
  <rect x="20" y="95" width="150" height="64" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2" class="card"/>
  <text x="95" y="122" font-size="17" text-anchor="middle" font-weight="700">送りたい</text>
  <text x="95" y="144" font-size="17" text-anchor="middle" font-weight="700">データ</text>
  <text x="95" y="180" font-size="15" text-anchor="middle" fill="#777">全体 384バイト</text>
  <text x="200" y="135" font-size="30" fill="#A6192E" font-weight="800">→</text>
  <!-- 主役：1個のパケット（段ボール）拡大 -->
  <text x="510" y="40" font-size="18" font-weight="700" text-anchor="middle">パケット1個＝引っ越しの段ボール</text>
  <rect x="250" y="60" width="520" height="118" rx="10" fill="#fff" stroke="#6B6F76" stroke-width="2.5" class="card"/>
  <!-- ヘッダ部（送り状＝黄） -->
  <rect x="262" y="74" width="270" height="90" rx="8" fill="#FBEFC8" stroke="#D98A2B" stroke-width="2"/>
  <text x="397" y="98" font-size="18" text-anchor="middle" font-weight="700" fill="#8a5a12">ヘッダ（送り状）</text>
  <text x="278" y="124" font-size="16" fill="#1a1a1a">宛先IP ／ 送信元IP</text>
  <text x="278" y="148" font-size="16" fill="#1a1a1a">分割番号（何番目／全何個）</text>
  <!-- データ部（荷物＝青） -->
  <rect x="546" y="74" width="210" height="90" rx="8" fill="#D9E7F2" stroke="#3E78B2" stroke-width="2"/>
  <text x="651" y="116" font-size="18" text-anchor="middle" font-weight="700" fill="#1f4d77">データ（荷物の中身）</text>
  <text x="651" y="140" font-size="15" text-anchor="middle" fill="#555">本体の一部分</text>
  <!-- 小分け列 -->
  <g text-anchor="middle">
    <rect x="300" y="200" width="80" height="36" rx="6" fill="#3E78B2"/><text x="340" y="224" font-size="17" fill="#fff" font-weight="700">1/3</text>
    <rect x="410" y="200" width="80" height="36" rx="6" fill="#3C8A57"/><text x="450" y="224" font-size="17" fill="#fff" font-weight="700">2/3</text>
    <rect x="520" y="200" width="80" height="36" rx="6" fill="#D98A2B"/><text x="560" y="224" font-size="17" fill="#fff" font-weight="700">3/3</text>
    <text x="700" y="224" font-size="16" fill="#555">→ 受信側で番号順に組立て</text>
  </g>
</svg>
</div>

<div class="band">ヘッダ＝段ボールの「送り状」。宛先・差出人・何番目かを書いておけば、バラバラに届いても現地で復元できる。</div>

<div class="caption">データを丸ごと1本で送らず小包に分けるから、一部が消えてもその1個だけ送り直せる。</div>

---

<!-- _class: fig -->

<div class="page-title">ルーティング</div>

## ルーターが宛先IPを見て「次の一歩」を選ぶ <span class="important">重要</span>

<svg viewBox="0 0 900 46" width="92%" style="height:42px;max-height:46px;flex-shrink:0;margin:0 auto 2px;display:block">
  <g font-size="15" text-anchor="middle">
    <line x1="60" y1="34" x2="840" y2="34" stroke="#ccc" stroke-width="2"/>
    <g fill="#999"><circle cx="60" cy="34" r="6"/><circle cx="216" cy="34" r="6"/><circle cx="372" cy="34" r="6"/><circle cx="684" cy="34" r="6"/><circle cx="840" cy="34" r="6"/></g>
    <circle cx="528" cy="34" r="9" fill="#A6192E"/>
    <text x="60" y="16" fill="#888">端末</text><text x="216" y="16" fill="#888">Wi-Fi</text><text x="372" y="16" fill="#888">DNS</text><text x="528" y="16" fill="#A6192E" font-weight="700">配送(いまここ)</text><text x="684" y="16" fill="#888">サーバ</text><text x="840" y="16" fill="#888">表示</text>
  </g>
</svg>

<div class="fig-area">
<div class="grid2" style="width:97%;grid-template-columns:1.5fr 1fr;align-items:center">
<div>
<svg viewBox="-6 -6 572 262" width="100%" style="max-height:265px">
  <g font-size="16" text-anchor="middle">
    <rect x="10" y="100" width="96" height="48" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5" class="card"/><text x="58" y="129" font-weight="700">あなたのPC</text>
    <circle cx="190" cy="62" r="28" fill="#eef4fa" stroke="#3E78B2" stroke-width="2" class="card"/><text x="190" y="68">R1</text>
    <circle cx="190" cy="186" r="28" fill="#eef4fa" stroke="#3E78B2" stroke-width="2" class="card"/><text x="190" y="192">R2</text>
    <circle cx="330" cy="124" r="28" fill="#eef4fa" stroke="#3E78B2" stroke-width="2" class="card"/><text x="330" y="130">R3</text>
    <circle cx="455" cy="62" r="28" fill="#eef4fa" stroke="#3E78B2" stroke-width="2" class="card"/><text x="455" y="68">R4</text>
    <circle cx="455" cy="186" r="28" fill="#eef4fa" stroke="#3E78B2" stroke-width="2" class="card"/><text x="455" y="192">R5</text>
    <rect x="500" y="100" width="60" height="48" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2" class="card"/><text x="530" y="129" font-weight="700">サーバ</text>
  </g>
  <!-- 中立配線 -->
  <g stroke="#ccc" stroke-width="2" fill="none">
    <line x1="106" y1="120" x2="166" y2="180"/><line x1="216" y1="180" x2="306" y2="140"/>
    <line x1="216" y1="62" x2="427" y2="62"/><line x1="352" y1="146" x2="430" y2="180"/><line x1="481" y1="186" x2="500" y2="135"/>
  </g>
  <!-- 最短経路 赤 3.5 -->
  <g stroke="#A6192E" stroke-width="3.5" fill="none" stroke-linecap="round">
    <line x1="106" y1="116" x2="164" y2="72"/>
    <line x1="216" y1="62" x2="427" y2="62"/>
    <line x1="479" y1="78" x2="505" y2="100"/>
  </g>
  <text x="285" y="240" font-size="16" fill="#A6192E" text-anchor="middle" font-weight="700">赤＝今回の最短経路（PC→R1→R4→サーバ）</text>
</svg>
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

<svg viewBox="0 0 900 46" width="92%" style="height:42px;max-height:46px;flex-shrink:0;margin:0 auto 2px;display:block">
  <g font-size="15" text-anchor="middle">
    <line x1="60" y1="34" x2="840" y2="34" stroke="#ccc" stroke-width="2"/>
    <g fill="#999"><circle cx="60" cy="34" r="6"/><circle cx="216" cy="34" r="6"/><circle cx="372" cy="34" r="6"/><circle cx="684" cy="34" r="6"/><circle cx="840" cy="34" r="6"/></g>
    <circle cx="528" cy="34" r="9" fill="#A6192E"/>
    <text x="60" y="16" fill="#888">端末</text><text x="216" y="16" fill="#888">Wi-Fi</text><text x="372" y="16" fill="#888">DNS</text><text x="528" y="16" fill="#A6192E" font-weight="700">配送(いまここ)</text><text x="684" y="16" fill="#888">サーバ</text><text x="840" y="16" fill="#888">表示</text>
  </g>
</svg>

<div class="fig-area">
<div class="grid2" style="width:97%">
<div>
<div class="cbox green"><div class="h">① 誤りを見つける：パリティ検査</div><div class="b">
<svg viewBox="0 0 420 120" width="100%" style="max-height:130px">
  <g font-family="Menlo,monospace" font-size="20" text-anchor="middle">
    <rect x="14" y="30" width="270" height="44" rx="6" fill="#eef4fa"/><text x="149" y="59">0110 1001</text>
    <rect x="296" y="30" width="110" height="44" rx="6" fill="#F8E5EA"/><text x="351" y="59" font-weight="700" fill="#A6192E">P=0</text>
  </g>
  <text x="149" y="98" font-size="15" fill="#555" text-anchor="middle">1の個数を数える（偶数）</text>
  <text x="351" y="98" font-size="15" fill="#A6192E" text-anchor="middle" font-weight="700">→ 1ビット付加</text>
</svg>
<ul>
<li>受信時に1が<span class="red">奇数</span>なら「誤りあり」と分かる</li>
<li>チェックデジット（学生証・航空運送状）と同じ理屈</li>
</ul>
</div></div>
</div>
<div>
<div class="cbox blue"><div class="h">② 送り直す：TCPの再送（ACK）</div><div class="b">
<svg viewBox="0 0 420 130" width="100%" style="max-height:140px">
  <line x1="80" y1="14" x2="80" y2="120" stroke="#ccc" stroke-width="2"/><line x1="340" y1="14" x2="340" y2="120" stroke="#ccc" stroke-width="2"/>
  <text x="80" y="12" font-size="15" text-anchor="middle">送信</text><text x="340" y="12" font-size="15" text-anchor="middle">受信</text>
  <defs>
    <marker id="u5grn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="u5blu" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
  </defs>
  <line x1="80" y1="30" x2="340" y2="44" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u5grn)"/><text x="210" y="30" font-size="14" fill="#3C8A57" text-anchor="middle">パケット1</text>
  <line x1="340" y1="52" x2="80" y2="66" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#u5blu)"/><text x="210" y="52" font-size="14" fill="#3E78B2" text-anchor="middle">ACK（届いたよ）</text>
  <line x1="80" y1="78" x2="250" y2="90" stroke="#A6192E" stroke-width="2.5" stroke-dasharray="5 3"/><text x="180" y="78" font-size="14" fill="#A6192E" text-anchor="middle">2（消失）</text>
  <text x="266" y="96" font-size="16" fill="#A6192E">✕</text>
  <line x1="80" y1="108" x2="340" y2="120" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u5grn)"/><text x="210" y="108" font-size="14" fill="#3C8A57" text-anchor="middle">2 を再送</text>
</svg>
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
<svg viewBox="0 0 900 130" width="100%" style="max-height:140px">
  <g font-family="Menlo,monospace" text-anchor="middle">
    <!-- 7ビットを1セルずつ -->
    <g font-size="26" font-weight="700">
      <rect x="40" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="64" y="57">1</text>
      <rect x="96" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="120" y="57">0</text>
      <rect x="152" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="176" y="57">1</text>
      <rect x="208" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="232" y="57">1</text>
      <rect x="264" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="288" y="57">0</text>
      <rect x="320" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="344" y="57">0</text>
      <rect x="376" y="24" width="48" height="48" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="400" y="57">1</text>
    </g>
    <text x="470" y="56" font-size="30" fill="#A6192E" font-weight="800">+</text>
    <g font-size="26" font-weight="700">
      <rect x="500" y="24" width="48" height="48" rx="6" fill="#DDEBC8" stroke="#3C8A57" stroke-width="2.5"/><text x="524" y="57" fill="#3C8A57">0</text>
    </g>
    <text x="700" y="56" font-size="20" fill="#A6192E" font-weight="800" font-family="var(--font-jp)">→ 送信 10110010</text>
  </g>
  <text x="232" y="105" font-size="16" fill="#555" text-anchor="middle" font-family="var(--font-jp)">1の個数 = <tspan font-weight="700">4個（偶数）</tspan></text>
  <text x="524" y="105" font-size="16" fill="#3C8A57" text-anchor="middle" font-weight="700" font-family="var(--font-jp)">P=0（偶数だから足すのは0）</text>
  <text x="524" y="20" font-size="15" fill="#777" text-anchor="middle" font-family="var(--font-jp)">パリティ</text>
</svg>

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
<svg viewBox="0 0 900 320" width="100%" style="max-height:340px">
  <!-- 旅プログレスバー（現在地=DNS） -->
  <g font-size="14" text-anchor="middle">
    <line x1="70" y1="26" x2="830" y2="26" stroke="#ccc" stroke-width="2"/>
    <g fill="#aaa"><circle cx="70" cy="26" r="6"/><circle cx="222" cy="26" r="6"/></g>
    <circle cx="374" cy="26" r="9" fill="#A6192E"/>
    <g fill="#aaa"><circle cx="526" cy="26" r="6"/><circle cx="678" cy="26" r="6"/><circle cx="830" cy="26" r="6"/></g>
    <g fill="#999"><text x="70" y="14">端末</text><text x="222" y="14">Wi-Fi</text><text x="526" y="14">Internet</text><text x="678" y="14">サーバ</text><text x="830" y="14">表示</text></g>
    <text x="374" y="14" fill="#A6192E" font-weight="700">DNS ◀ いまここ</text>
  </g>
  <!-- 本体：ブラウザ→DNS→Webサーバ -->
  <g font-size="16" text-anchor="middle">
    <rect class="card" x="30" y="120" width="190" height="74" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="125" y="150" font-weight="700">あなたの端末</text><text x="125" y="174" fill="#777" font-family="Menlo,monospace" font-size="15">example.jp ?</text>
    <rect class="card" x="360" y="120" width="180" height="74" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2.5"/><text x="450" y="150" font-weight="700">DNSサーバ</text><text x="450" y="174" fill="#777" font-size="15">名前↔IP の電話帳</text>
    <rect class="card" x="690" y="120" width="180" height="74" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2.5"/><text x="780" y="150" font-weight="700">Webサーバ</text><text x="780" y="174" fill="#777" font-family="Menlo,monospace" font-size="15">203.0.113.10</text>
  </g>
  <!-- ①②③ 丸数字フロー -->
  <line x1="220" y1="143" x2="358" y2="143" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#u6d1)"/>
  <circle cx="234" cy="112" r="13" fill="#3E78B2"/><text x="234" y="117" fill="#fff" font-size="16" font-weight="700" text-anchor="middle">1</text>
  <text x="290" y="112" font-size="15" fill="#3E78B2" text-anchor="middle">「IP教えて」</text>
  <line x1="360" y1="178" x2="222" y2="178" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u6d2)"/>
  <circle cx="408" cy="206" r="13" fill="#D98A2B"/><text x="408" y="211" fill="#fff" font-size="16" font-weight="700" text-anchor="middle">2</text>
  <text x="291" y="208" font-size="15" fill="#D98A2B" text-anchor="middle" font-family="Menlo,monospace">203.0.113.10</text>
  <line x1="220" y1="240" x2="688" y2="240" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u6d3)"/>
  <circle cx="234" cy="270" r="13" fill="#A6192E"/><text x="234" y="275" fill="#fff" font-size="16" font-weight="700" text-anchor="middle">3</text>
  <text x="470" y="270" font-size="15" fill="#A6192E" text-anchor="middle">そのIPへ直接つないでページを取得</text>
  <defs>
    <marker id="u6d1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
    <marker id="u6d2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
    <marker id="u6d3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
</svg>
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

<svg viewBox="0 0 360 250" width="100%" style="max-height:230px">
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="115" y="14" width="130" height="40" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="180" y="33" font-weight="700">ルート（ . ）</text><text x="180" y="48" font-size="13" fill="#777">世界に13系統</text>
    <line x1="180" y1="54" x2="180" y2="86" stroke="#ccc" stroke-width="2" marker-end="url(#u6t)"/>
    <text x="250" y="76" font-size="14" fill="#777">「.jpはあっち」</text>
    <rect class="card" x="115" y="90" width="130" height="40" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="180" y="109" font-weight="700">TLD（ .jp ）</text><text x="180" y="124" font-size="13" fill="#777">JPRSが管理</text>
    <line x1="180" y1="130" x2="180" y2="162" stroke="#ccc" stroke-width="2" marker-end="url(#u6t)"/>
    <text x="252" y="152" font-size="14" fill="#777">「権威はあっち」</text>
    <rect class="card" x="92" y="166" width="176" height="44" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="180" y="186" font-weight="700">権威DNS</text><text x="180" y="202" font-size="12" fill="#777">example.jp の正解</text>
    <text x="180" y="236" font-size="15" fill="#A6192E" font-weight="700">→ ここでIPが確定</text>
  </g>
  <defs><marker id="u6t" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#bbb"/></marker></defs>
</svg>

</div>
</div>

<div class="takeaway">DNSは1台ではない。ルート→TLD→権威の「委任のリレー」で答えにたどり着く。</div>

---

<!-- _class: fig -->

<div class="page-title">ドメインの構造</div>

## ドメインは「後ろから」読む ── www.kantei.go.jp <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 130" width="100%" style="max-height:130px">
  <g font-family="Menlo,monospace" font-size="34" font-weight="700" text-anchor="middle">
    <text x="120" y="58" fill="#6B6F76">www</text><text x="212" y="58">.</text>
    <text x="330" y="58" fill="#3C8A57">kantei</text><text x="438" y="58">.</text>
    <text x="520" y="58" fill="#D98A2B">go</text><text x="575" y="58">.</text>
    <text x="660" y="58" fill="#3E78B2">jp</text>
  </g>
  <line x1="730" y1="46" x2="850" y2="46" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u6dom)"/>
  <text x="790" y="90" font-size="16" fill="#A6192E" font-weight="700" text-anchor="middle">大きい区分へ</text>
  <g font-size="16" text-anchor="middle">
    <text x="120" y="92" fill="#6B6F76" font-weight="700">サーバ名</text>
    <text x="330" y="92" fill="#3C8A57" font-weight="700">組織名</text>
    <text x="520" y="92" fill="#D98A2B" font-weight="700">組織の種類</text>
    <text x="660" y="92" fill="#3E78B2" font-weight="700">国名</text>
  </g>
  <defs><marker id="u6dom" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker></defs>
</svg>
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

<svg viewBox="0 0 360 200" width="100%" style="max-height:180px">
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="14" y="70" width="100" height="56" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="64" y="94" font-weight="700">ブラウザ</text><text x="64" y="113" font-size="13" fill="#777">あなた</text>
    <rect class="card" x="246" y="70" width="100" height="56" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="296" y="94" font-weight="700">Webサーバ</text>
    <line x1="114" y1="86" x2="244" y2="86" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#u6h1)"/><text x="180" y="76" font-size="14" fill="#3E78B2">GET（要求）</text>
    <line x1="246" y1="112" x2="116" y2="112" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#u6h2)"/><text x="180" y="128" font-size="14" fill="#3C8A57">HTML（応答）</text>
    <rect x="120" y="150" width="120" height="34" rx="6" fill="#eef7ef" stroke="#3C8A57"/><text x="180" y="172" font-size="14" fill="#3C8A57">🔒 HTTPS＝暗号化</text>
  </g>
  <defs>
    <marker id="u6h1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
    <marker id="u6h2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
  </defs>
</svg>

<div class="episode"><span class="h">なぜ学ぶか｜偽サイトを見破る</span><br>日本のフィッシング報告は2024年に過去最多 <span class="red">171万件超</span>、約75%が実在サービスの“なりすまし”。鍵マーク（HTTPS）とURLの構造を読めることが、最初の防具になる。
<div class="src">出典: フィッシング対策協議会／日経（2025）<br>https://scan.netsecurity.ne.jp/article/2025/06/12/53031.html</div></div>

</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">URLの分解</div>

## URL ＝ Webページの「住所」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 210" width="100%" style="max-height:230px">
  <g font-family="Menlo,monospace" font-size="30" font-weight="700">
    <text x="40" y="80" fill="#3C8A57">https://</text>
    <text x="220" y="80" fill="#3E78B2">www.example.jp</text>
    <text x="540" y="80" fill="#D98A2B">/joho/</text><text x="680" y="80" fill="#A6192E">index.html</text>
  </g>
  <g font-size="16" text-anchor="middle">
    <line x1="110" y1="96" x2="110" y2="122" stroke="#3C8A57" stroke-width="2"/><text x="110" y="146" fill="#3C8A57" font-weight="700">① プロトコル</text><text x="110" y="168" fill="#777" font-size="15">http / https / ftp</text>
    <line x1="380" y1="96" x2="380" y2="122" stroke="#3E78B2" stroke-width="2"/><text x="380" y="146" fill="#3E78B2" font-weight="700">② ドメイン名</text><text x="380" y="168" fill="#777" font-size="15">IP直指定も可</text>
    <line x1="595" y1="96" x2="595" y2="122" stroke="#D98A2B" stroke-width="2"/><text x="595" y="146" fill="#D98A2B" font-weight="700">③ パス</text><text x="595" y="168" fill="#777" font-size="15">どのフォルダか</text>
    <line x1="775" y1="96" x2="775" y2="122" stroke="#A6192E" stroke-width="2"/><text x="775" y="146" fill="#A6192E" font-weight="700">④ ファイル名</text><text x="775" y="168" fill="#777" font-size="15">省略でトップへ</text>
  </g>
</svg>
</div>

<div class="band">教科書の編末問題も <span class="mono">http://www.example.jp/index.html</span> を ①〜④ に分解させる定番。<span class="hl">パスを省くと最上位ページ</span>へ。</div>

---

<!-- _class: fig -->

<div class="page-title">HTML・CSS・ブラウザ</div>

## HTML＝構造、CSS＝装飾。ブラウザが解釈して表示する <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 320" width="100%" style="max-height:340px">
  <!-- 旅プログレスバー（現在地=表示） -->
  <g font-size="14" text-anchor="middle">
    <line x1="70" y1="24" x2="830" y2="24" stroke="#ccc" stroke-width="2"/>
    <g fill="#aaa"><circle cx="70" cy="24" r="6"/><circle cx="222" cy="24" r="6"/><circle cx="374" cy="24" r="6"/><circle cx="526" cy="24" r="6"/><circle cx="678" cy="24" r="6"/></g>
    <circle cx="830" cy="24" r="9" fill="#A6192E"/>
    <g fill="#999"><text x="70" y="12">端末</text><text x="222" y="12">Wi-Fi</text><text x="374" y="12">DNS</text><text x="526" y="12">Internet</text><text x="678" y="12">サーバ</text></g>
    <text x="830" y="12" fill="#A6192E" font-weight="700">表示 ◀ いまここ</text>
  </g>
  <!-- 表示までの5ステップ -->
  <g font-size="16" text-anchor="middle">
    <rect class="card" x="20" y="70" width="150" height="86" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="95" y="100" font-weight="700">① URL入力</text><text x="95" y="124" font-size="15" fill="#777">https://example.jp</text>
    <rect class="card" x="200" y="70" width="150" height="86" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="275" y="100" font-weight="700">② DNS</text><text x="275" y="124" font-size="15" fill="#777">名前→IP</text>
    <rect class="card" x="380" y="70" width="150" height="86" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="455" y="100" font-weight="700">③ サーバ接続</text><text x="455" y="124" font-size="15" fill="#777">そのIPへHTTP</text>
    <rect class="card" x="560" y="70" width="150" height="86" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="635" y="100" font-weight="700">④ ファイル送信</text><text x="635" y="124" font-size="15" fill="#777">HTML/CSSを受信</text>
    <rect class="card" x="740" y="70" width="150" height="86" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="815" y="100" font-weight="700">⑤ 表示</text><text x="815" y="124" font-size="15" fill="#777">ブラウザが描画</text>
    <g stroke="#A6192E" stroke-width="2.5" marker-end="url(#u6flow)">
      <line x1="170" y1="113" x2="198" y2="113"/><line x1="350" y1="113" x2="378" y2="113"/><line x1="530" y1="113" x2="558" y2="113"/><line x1="710" y1="113" x2="738" y2="113"/>
    </g>
  </g>
  <!-- HTML+CSS→ブラウザ描画 の補足 -->
  <g font-size="16" text-anchor="middle">
    <rect x="120" y="200" width="170" height="44" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="205" y="220" font-weight="700">HTML</text><text x="205" y="238" font-size="14" fill="#777">タグで構造</text>
    <rect x="320" y="200" width="170" height="44" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="405" y="220" font-weight="700">CSS</text><text x="405" y="238" font-size="14" fill="#777">色・配置の装飾</text>
    <line x1="490" y1="222" x2="586" y2="222" stroke="#6B6F76" stroke-width="2.5" marker-end="url(#u6flow2)"/>
    <rect class="card" x="590" y="196" width="200" height="52" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2.5"/><text x="690" y="218" font-weight="700">ブラウザが解釈</text><text x="690" y="238" font-size="14" fill="#777">見えるページに組み立てる</text>
  </g>
  <defs>
    <marker id="u6flow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
    <marker id="u6flow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6B6F76"/></marker>
  </defs>
</svg>
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
<svg viewBox="0 0 920 300" width="100%" style="max-height:340px">
  <!-- 旅プログレスバー：現在地=安全 -->
  <g font-size="14" text-anchor="middle">
    <line x1="60" y1="26" x2="860" y2="26" stroke="#ddd" stroke-width="3"/>
    <g fill="#888"><circle cx="60" cy="26" r="6"/><circle cx="220" cy="26" r="6"/><circle cx="380" cy="26" r="6"/><circle cx="540" cy="26" r="6"/></g>
    <circle cx="700" cy="26" r="9" fill="#A6192E"/>
    <circle cx="860" cy="26" r="6" fill="#888"/>
    <g fill="#999" font-size="13"><text x="60" y="50">端末</text><text x="220" y="50">Wi-Fi</text><text x="380" y="50">DNS</text><text x="540" y="50">Internet</text></g>
    <text x="700" y="50" fill="#A6192E" font-size="14" font-weight="700">安全(暗号)</text>
    <text x="860" y="50" fill="#999" font-size="13">表示</text>
  </g>
  <!-- 暗号フロー -->
  <g font-size="17" text-anchor="middle">
    <rect class="card" x="40" y="110" width="190" height="70" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="135" y="142" font-weight="700" fill="#3C8A57">平文（ひらぶん）</text><text x="135" y="166" font-size="16" fill="#555">「こんにちは」</text>
    <rect class="card" x="365" y="110" width="190" height="70" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="460" y="142" font-weight="700" fill="#A6192E">暗号文</text><text x="460" y="166" font-size="16" fill="#7d1322" font-family="Menlo,monospace">&amp;SAKHXC$E</text>
    <rect class="card" x="690" y="110" width="190" height="70" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="785" y="142" font-weight="700" fill="#3C8A57">平文</text><text x="785" y="166" font-size="16" fill="#555">「こんにちは」</text>
  </g>
  <line x1="230" y1="145" x2="360" y2="145" stroke="#A6192E" stroke-width="2.5" marker-end="url(#e1)"/><text x="295" y="132" font-size="16" text-anchor="middle" fill="#A6192E">🔒 暗号化</text>
  <line x1="555" y1="145" x2="685" y2="145" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#e2)"/><text x="620" y="132" font-size="16" text-anchor="middle" fill="#3E78B2">🔑 復号</text>
  <!-- 用語の対応 -->
  <g font-size="15" text-anchor="middle" fill="#555">
    <text x="135" y="220" font-weight="700" fill="#3C8A57">元の情報</text>
    <text x="295" y="220">手順・データ＝<tspan fill="#A6192E" font-weight="700">鍵</tspan></text>
    <text x="460" y="220" font-weight="700" fill="#A6192E">読めない情報</text>
    <text x="620" y="220">対の<tspan fill="#3E78B2" font-weight="700">鍵</tspan>で戻す</text>
    <text x="785" y="220" font-weight="700" fill="#3C8A57">元に戻った</text>
  </g>
  <rect x="40" y="245" width="840" height="34" rx="6" fill="#F8E5EA"/><text x="460" y="267" font-size="16" text-anchor="middle" font-weight="700" fill="#7d1322">平文＝green ／ 暗号文＝赤 で色を固定（この講義を通して同じ意味）</text>
  <defs>
    <marker id="e1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
    <marker id="e2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
  </defs>
</svg>
</div>

<div class="band">暗号化／復号のための手順・データを <span class="red">鍵</span> という。コンピュータでは、人手では解けない強い暗号を使う。</div>

<div class="ask">送り手と受け手が「同じ鍵」を使う方式（共通鍵）。その鍵は、どうやって安全に相手へ渡す？</div>

---

<!-- _class: fig -->

<div class="page-title">古典暗号</div>

## シーザー暗号 ── 文字を一定数ずらす「換字式」を手で解く

<div class="fig-area">
<svg viewBox="0 0 920 320" width="100%" style="max-height:350px">
  <!-- A-Z 目盛り（換字の対応） -->
  <g font-family="Menlo,monospace" font-size="16" text-anchor="middle">
    <text x="460" y="30" font-family="var(--font-jp)" font-size="16" fill="#555">アルファベットを3つずらす（鍵＝3）：A→D, B→E, …</text>
    <g fill="#3C8A57" font-weight="700"><text x="60" y="62">A</text><text x="93" y="62">B</text><text x="126" y="62">C</text><text x="159" y="62">D</text><text x="192" y="62">E</text><text x="225" y="62">F</text><text x="258" y="62">G</text><text x="291" y="62">…</text></g>
    <g stroke="#A6192E" stroke-width="2"><line x1="60" y1="70" x2="159" y2="86" marker-end="url(#cz)"/><line x1="93" y1="70" x2="192" y2="86" marker-end="url(#cz)"/><line x1="126" y1="70" x2="225" y2="86" marker-end="url(#cz)"/></g>
    <g fill="#A6192E" font-weight="700"><text x="60" y="104">D</text><text x="93" y="104">E</text><text x="126" y="104">F</text><text x="159" y="104">G</text><text x="192" y="104">H</text><text x="225" y="104">I</text><text x="258" y="104">J</text><text x="291" y="104">…</text></g>
  </g>
  <!-- 平文→暗号文（手計算の見せ場） -->
  <g font-family="Menlo,monospace" font-size="30" font-weight="700" text-anchor="middle">
    <text x="460" y="175" fill="#3C8A57">H E L L O</text>
  </g>
  <g stroke="#A6192E" stroke-width="2">
    <line x1="350" y1="190" x2="350" y2="218" marker-end="url(#cz)"/><line x1="405" y1="190" x2="405" y2="218" marker-end="url(#cz)"/><line x1="460" y1="190" x2="460" y2="218" marker-end="url(#cz)"/><line x1="515" y1="190" x2="515" y2="218" marker-end="url(#cz)"/><line x1="570" y1="190" x2="570" y2="218" marker-end="url(#cz)"/>
  </g>
  <text x="460" y="210" font-size="15" fill="#A6192E" text-anchor="middle" font-family="var(--font-jp)">＋3</text>
  <g font-family="Menlo,monospace" font-size="30" font-weight="700" text-anchor="middle">
    <text x="460" y="252" fill="#A6192E">K H O O R</text>
  </g>
  <defs><marker id="cz" markerWidth="9" markerHeight="9" refX="4" refY="7" orient="auto"><path d="M0,0 L4,7 L8,0 Z" fill="#A6192E"/></marker></defs>
  <!-- 2方式の対比 -->
  <g font-size="15">
    <rect class="card" x="60" y="280" width="380" height="34" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.5"/><text x="78" y="302" fill="#3C8A57" font-weight="700">換字式</text><text x="150" y="302" fill="#555">：文字を別の文字に置き換える（シーザー）</text>
    <rect class="card" x="480" y="280" width="380" height="34" rx="6" fill="#fdf3e8" stroke="#D98A2B" stroke-width="1.5"/><text x="498" y="302" fill="#D98A2B" font-weight="700">転置式</text><text x="570" y="302" fill="#555">：文字の並び順を入れ替える</text>
  </g>
</svg>
</div>

<div class="band">いずれも規則が分かれば人手で解けてしまう。だから現代はコンピュータで <span class="red">膨大な計算</span> が要る暗号を使う。</div>

<div class="caption">※ 古典暗号の例。エニグマは「ローター式の複雑な換字暗号」で、単純な転置法ではない。</div>

---

<!-- _class: split -->

<div class="page-title">共通鍵 と 公開鍵</div>

## 「同じ鍵」の弱点を、公開鍵が解決する <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:320px">
  <!-- 共通鍵 -->
  <text x="190" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#D98A2B">共通鍵暗号（同じ鍵）</text>
  <rect class="card" x="20" y="36" width="90" height="46" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="65" y="64" font-size="15" text-anchor="middle" fill="#3C8A57">Aさん</text>
  <rect class="card" x="270" y="36" width="90" height="46" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="315" y="64" font-size="15" text-anchor="middle" fill="#3E78B2">Bさん</text>
  <line x1="110" y1="59" x2="270" y2="59" stroke="#bbb" stroke-width="2"/>
  <text x="190" y="52" font-size="22" text-anchor="middle">🔑</text>
  <text x="190" y="100" font-size="12" text-anchor="middle" fill="#A6192E" font-weight="700">同じ鍵を共有 → 配送中に盗まれたら全開放</text>
  <!-- 公開鍵 -->
  <text x="190" y="120" font-size="16" font-weight="700" text-anchor="middle" fill="#3C8A57">公開鍵暗号（鍵がペア）</text>
  <rect class="card" x="20" y="136" width="90" height="46" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="65" y="164" font-size="15" text-anchor="middle" fill="#3C8A57">Aさん</text>
  <rect class="card" x="270" y="136" width="90" height="46" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="315" y="164" font-size="15" text-anchor="middle" fill="#3E78B2">Bさん</text>
  <line x1="110" y1="159" x2="270" y2="159" stroke="#A6192E" stroke-width="2.5" marker-end="url(#k1)"/>
  <text x="170" y="150" font-size="22" text-anchor="middle">🔒</text>
  <text x="170" y="200" font-size="13" text-anchor="middle" fill="#555">Bの公開鍵で施錠</text>
  <text x="315" y="200" font-size="22" text-anchor="middle">🔑</text>
  <text x="315" y="218" font-size="13" text-anchor="middle" fill="#3E78B2">Bの秘密鍵で開錠</text>
  <rect x="20" y="240" width="340" height="64" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.5"/>
  <text x="190" y="262" font-size="14" text-anchor="middle" fill="#3C8A57" font-weight="700">公開鍵は誰に配ってもよい</text>
  <text x="190" y="284" font-size="14" text-anchor="middle" fill="#555">鍵を安全に渡す問題が消える</text>
  <defs><marker id="k1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker></defs>
</svg>

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
<svg viewBox="0 0 920 300" width="100%" style="max-height:340px">
  <g text-anchor="middle">
    <rect class="card" x="20" y="90" width="150" height="74" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="95" y="122" font-size="17" font-weight="700" fill="#3C8A57">送り手 A</text><text x="95" y="146" font-size="15" fill="#555">平文を持つ</text>
    <rect class="card" x="270" y="80" width="180" height="94" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="360" y="116" font-size="30">🔒</text><text x="360" y="146" font-size="16" font-weight="700" fill="#3C8A57">Bの公開鍵で</text><text x="360" y="165" font-size="16" font-weight="700" fill="#3C8A57">暗号化（施錠）</text>
    <rect class="card" x="540" y="90" width="160" height="74" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="620" y="122" font-size="17" font-weight="700" fill="#A6192E">暗号文</text><text x="620" y="146" font-size="15" fill="#7d1322">ネットを流れる</text>
    <rect class="card" x="760" y="80" width="140" height="94" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="830" y="116" font-size="30">🔑</text><text x="830" y="146" font-size="16" font-weight="700" fill="#3E78B2">Bの秘密鍵で</text><text x="830" y="165" font-size="16" font-weight="700" fill="#3E78B2">復号（開錠）</text>
  </g>
  <g fill="#A6192E" font-size="30" font-weight="800"><text x="220" y="135">→</text><text x="495" y="135">→</text><text x="730" y="135">→</text></g>
  <!-- 鍵ペアの説明 -->
  <rect x="270" y="200" width="180" height="40" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.5"/><text x="360" y="225" font-size="15" text-anchor="middle" fill="#3C8A57" font-weight="700">🔒 公開鍵：誰でも入手可</text>
  <rect x="760" y="200" width="140" height="40" rx="6" fill="#eef4fa" stroke="#3E78B2" stroke-width="1.5"/><text x="830" y="225" font-size="15" text-anchor="middle" fill="#3E78B2" font-weight="700">🔑 秘密鍵：Bだけ</text>
  <!-- 攻撃者は開けない -->
  <rect x="500" y="200" width="200" height="40" rx="6" fill="#F8E5EA" stroke="#A6192E" stroke-width="1.5"/><text x="600" y="225" font-size="15" text-anchor="middle" fill="#A6192E" font-weight="700">✕ 第三者は公開鍵では開けない</text>
  <rect x="20" y="262" width="880" height="32" rx="6" fill="#DDEBC8"/><text x="460" y="284" font-size="16" text-anchor="middle" font-weight="700" fill="#1a1a1a">南京錠の比喩：誰でも「カチッと閉める」ことはできるが、開けられるのは鍵を持つ受け手だけ</text>
</svg>
</div>

<div class="caption">公開鍵は誰に渡してもよい。復号できるのは、対になった<span class="red">秘密鍵を持つ受け手 B だけ</span>。相手ごとの鍵配布が不要になる。</div>

---

<!-- _class: split -->

<div class="page-title">署名・認証局</div>

## 「本人が送った」を証明する ── 署名は鍵が“逆向き” <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 320" width="100%" style="max-height:250px">
  <text x="190" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#A6192E">デジタル署名（暗号化と鍵が逆）</text>
  <rect class="card" x="20" y="44" width="130" height="66" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="85" y="72" font-size="15" text-anchor="middle" fill="#3C8A57" font-weight="700">送り手 A</text><text x="85" y="94" font-size="13" text-anchor="middle" fill="#555">🔑 秘密鍵で署名</text>
  <rect class="card" x="230" y="44" width="130" height="66" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="295" y="72" font-size="15" text-anchor="middle" fill="#3E78B2" font-weight="700">受け手 B</text><text x="295" y="94" font-size="13" text-anchor="middle" fill="#555">🔓 Aの公開鍵で検証</text>
  <line x1="150" y1="77" x2="230" y2="77" stroke="#A6192E" stroke-width="2.5" marker-end="url(#s1)"/>
  <text x="190" y="68" font-size="13" text-anchor="middle" fill="#A6192E">署名つき</text>
  <!-- なりすまし問題 → CA -->
  <rect x="20" y="140" width="340" height="44" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="1.5"/><text x="190" y="158" font-size="13" text-anchor="middle" fill="#A6192E" font-weight="700">なりすまし：XがAを名乗り公開鍵を公開？</text><text x="190" y="176" font-size="13" text-anchor="middle" fill="#555">→ その公開鍵が本物かを誰が保証する？</text>
  <line x1="190" y1="184" x2="190" y2="214" stroke="#bbb" stroke-width="2" marker-end="url(#s2)"/>
  <rect class="card" x="60" y="216" width="260" height="84" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="190" y="244" font-size="16" text-anchor="middle" font-weight="700" fill="#3E78B2">認証局（CA）</text><text x="190" y="268" font-size="14" text-anchor="middle" fill="#555">第三者として「これはAの公開鍵」を保証</text><text x="190" y="288" font-size="14" text-anchor="middle" fill="#555">＝ 電子証明書を発行</text>
  <defs><marker id="s1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker><marker id="s2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#bbb"/></marker></defs>
</svg>

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
<svg viewBox="0 0 920 320" width="100%" style="max-height:350px">
  <!-- カフェ/公衆AP -->
  <text x="460" y="24" font-size="16" text-anchor="middle" fill="#555" font-weight="700">同じアクセスポイント（公衆Wi-Fi）に繋ぐ全員が、電波を受信できる</text>
  <ellipse cx="460" cy="120" rx="70" ry="44" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="460" y="116" font-size="16" text-anchor="middle" fill="#D98A2B" font-weight="700">公衆AP</text><text x="460" y="138" font-size="14" text-anchor="middle" fill="#555">無料Wi-Fi</text>
  <!-- あなた -->
  <rect class="card" x="40" y="92" width="120" height="56" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="100" y="116" font-size="15" text-anchor="middle" font-weight="700">あなた</text><text x="100" y="136" font-size="13" text-anchor="middle" fill="#555">ログイン送信</text>
  <line x1="160" y1="120" x2="388" y2="120" stroke="#888" stroke-width="2" stroke-dasharray="5 4"/>
  <!-- 盗聴者 -->
  <rect class="card" x="40" y="220" width="150" height="64" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="115" y="246" font-size="15" text-anchor="middle" fill="#A6192E" font-weight="700">悪意の他人</text><text x="115" y="268" font-size="13" text-anchor="middle" fill="#7d1322">パケットを傍受</text>
  <line x1="190" y1="230" x2="395" y2="150" stroke="#A6192E" stroke-width="2.5" marker-end="url(#w1)"/><text x="300" y="210" font-size="14" fill="#A6192E" font-weight="700" text-anchor="middle">盗聴(キャプチャ)</text>
  <!-- 偽AP -->
  <rect class="card" x="730" y="220" width="150" height="64" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="805" y="246" font-size="15" text-anchor="middle" fill="#A6192E" font-weight="700">偽AP(Evil Twin)</text><text x="805" y="268" font-size="13" text-anchor="middle" fill="#7d1322">中間者になりすまし</text>
  <line x1="730" y1="240" x2="528" y2="150" stroke="#A6192E" stroke-width="2.5" marker-end="url(#w1)"/>
  <!-- インターネット -->
  <rect class="card" x="760" y="92" width="120" height="56" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="820" y="124" font-size="15" text-anchor="middle" font-weight="700">サーバ</text>
  <line x1="532" y1="120" x2="758" y2="120" stroke="#888" stroke-width="2" stroke-dasharray="5 4"/>
  <!-- ハガキ vs 封筒 メタファ -->
  <rect x="40" y="294" width="420" height="24" rx="5" fill="#F8E5EA"/><text x="250" y="311" font-size="14" text-anchor="middle" fill="#A6192E" font-weight="700">HTTP＝ハガキ：途中の誰でも内容が読める</text>
  <rect x="480" y="294" width="400" height="24" rx="5" fill="#DDEBC8"/><text x="680" y="311" font-size="14" text-anchor="middle" fill="#1a1a1a" font-weight="700">HTTPS＝封筒：中身が暗号化され読めない</text>
  <defs><marker id="w1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker></defs>
</svg>
</div>

<div class="episode"><span class="h">なぜ学ぶか</span>　2024年、旅客機内に<span class="red">偽Wi-Fi（Evil Twin）</span>を立て、乗客のメール・SNSのログイン情報を盗んだ人物が豪連邦警察に逮捕。「無料Wi-Fi」は最も狙われる入口でもある。<span class="src">出典: Kaspersky「Evil Twin攻撃」（2024）</span></div>

---

<!-- _class: fig -->

<div class="page-title">HTTP → HTTPS</div>

## 鍵マーク🔒は「通信路がTLSで暗号化済み」のしるし

<div class="fig-area">
<svg viewBox="0 0 920 290" width="100%" style="max-height:330px">
  <!-- HTTP -->
  <text x="230" y="28" font-size="17" text-anchor="middle" fill="#A6192E" font-weight="700">http:// （暗号化なし）</text>
  <rect class="card" x="40" y="44" width="120" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="100" y="74" font-size="15" text-anchor="middle">あなた</text>
  <rect class="card" x="300" y="44" width="120" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="360" y="74" font-size="15" text-anchor="middle">サーバ</text>
  <line x1="160" y1="69" x2="298" y2="69" stroke="#A6192E" stroke-width="2.5" marker-end="url(#h1)"/>
  <text x="230" y="60" font-size="15" text-anchor="middle" fill="#A6192E" font-weight="700">平文：盗聴・改ざん可</text>
  <rect x="40" y="108" width="380" height="26" rx="5" fill="#F8E5EA"/><text x="230" y="126" font-size="14" text-anchor="middle" fill="#A6192E" font-weight="700">パスワードもそのまま流れる ＝ 危険</text>
  <!-- 区切り -->
  <line x1="460" y1="40" x2="460" y2="140" stroke="#ddd" stroke-width="2"/>
  <!-- HTTPS -->
  <text x="690" y="28" font-size="17" text-anchor="middle" fill="#3C8A57" font-weight="700">🔒 https:// （TLSで暗号化）</text>
  <rect class="card" x="500" y="44" width="120" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="560" y="74" font-size="15" text-anchor="middle">あなた</text>
  <rect class="card" x="760" y="44" width="120" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="820" y="74" font-size="15" text-anchor="middle">サーバ</text>
  <line x1="620" y1="69" x2="758" y2="69" stroke="#3C8A57" stroke-width="3.5" marker-end="url(#h2)"/>
  <text x="690" y="60" font-size="15" text-anchor="middle" fill="#3C8A57" font-weight="700">🔒 暗号トンネル</text>
  <rect x="500" y="108" width="380" height="26" rx="5" fill="#DDEBC8"/><text x="690" y="126" font-size="14" text-anchor="middle" fill="#1a1a1a" font-weight="700">盗み見ても暗号文 ＝ 中身は読めない</text>
  <!-- SSL/TLS と VPN -->
  <rect class="card" x="40" y="162" width="400" height="110" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.5"/>
  <text x="240" y="186" font-size="16" text-anchor="middle" fill="#3C8A57" font-weight="700">SSL / TLS</text>
  <text x="60" y="212" font-size="14" fill="#555">・公開鍵で「共通鍵」を安全に交換する決まり</text>
  <text x="60" y="234" font-size="14" fill="#555">・利用ページのURLは https、ブラウザに 🔒</text>
  <text x="60" y="256" font-size="14" fill="#555">・銀行・クレカ・ログインで必須</text>
  <rect class="card" x="480" y="162" width="400" height="110" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="1.5"/>
  <text x="680" y="186" font-size="16" text-anchor="middle" fill="#3E78B2" font-weight="700">VPN</text>
  <text x="500" y="212" font-size="14" fill="#555">・通信全体を暗号化して専用線のように使う</text>
  <text x="500" y="234" font-size="14" fill="#555">・拠点間だけでなく「個人端末→社内」も</text>
  <text x="500" y="256" font-size="14" fill="#555">・公衆Wi-Fiでの保険として有効</text>
  <defs><marker id="h1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker><marker id="h2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
</svg>
</div>

<div class="band">公衆Wi-Fiでは、<span class="red">URLの 🔒（https）を必ず確認</span>。不安なら <span class="red">VPN</span> を使う。HTTP のサイトで重要情報は送らない。</div>

---

<!-- _class: split -->

<div class="page-title">家庭Wi-Fiの守り方</div>

## 「お家のネット」は、自分で守れる <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 300" width="100%" style="max-height:300px">
  <text x="190" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#3C8A57">家庭の無線LANルータ</text>
  <rect class="card" x="20" y="120" width="80" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="60" y="150" font-size="14" text-anchor="middle">スマホ/PC</text>
  <!-- ルータ -->
  <rect class="card" x="150" y="110" width="90" height="70" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2.5"/><text x="195" y="138" font-size="15" text-anchor="middle" fill="#3C8A57" font-weight="700">ルータ</text><text x="195" y="160" font-size="13" text-anchor="middle" fill="#555">192.168.x.1</text>
  <!-- 電波（green=Wi-Fi） -->
  <g stroke="#3C8A57" stroke-width="2" fill="none"><path d="M110 145 q14 0 14 -14"/><path d="M110 152 q22 0 22 -22"/><path d="M110 159 q30 0 30 -30"/></g>
  <ellipse cx="320" cy="145" rx="40" ry="26" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="320" y="150" font-size="14" text-anchor="middle" fill="#A6192E" font-weight="700">Internet</text>
  <line x1="240" y1="145" x2="280" y2="145" stroke="#888" stroke-width="2"/>
  <!-- 守りの2点 -->
  <rect x="20" y="200" width="340" height="40" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.5"/><text x="190" y="225" font-size="14" text-anchor="middle" fill="#3C8A57" font-weight="700">① 暗号方式 = WPA2 / WPA3（WEPは×）</text>
  <rect x="20" y="248" width="340" height="40" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="1.5"/><text x="190" y="273" font-size="14" text-anchor="middle" fill="#3E78B2" font-weight="700">② 管理画面の初期パスワードを変更</text>
</svg>

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
<svg viewBox="0 0 940 320" width="100%" style="max-height:340px">
  <defs>
    <marker id="u08-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 旅プログレスバー（端末→Wi-Fi→DNS→Internet→サーバ→表示／現在地=届いた先のデータ＝赤） -->
  <g font-size="14" text-anchor="middle">
    <rect x="20" y="8" width="100" height="26" rx="6" fill="#fff" stroke="#cccccc"/><text x="70" y="26" fill="#555">端末</text>
    <rect x="148" y="8" width="100" height="26" rx="6" fill="#fff" stroke="#cccccc"/><text x="198" y="26" fill="#555">Wi-Fi</text>
    <rect x="276" y="8" width="100" height="26" rx="6" fill="#fff" stroke="#cccccc"/><text x="326" y="26" fill="#555">DNS</text>
    <rect x="404" y="8" width="120" height="26" rx="6" fill="#fff" stroke="#cccccc"/><text x="464" y="26" fill="#555">Internet</text>
    <rect x="552" y="8" width="120" height="26" rx="6" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="612" y="26" font-weight="700" fill="#7d1322">サーバのDB</text>
    <text x="700" y="26" fill="#999">→ 表示</text>
  </g>
  <g text-anchor="middle">
    <rect class="card" x="30" y="76" width="230" height="170" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="145" y="104" font-size="18" font-weight="700" fill="#3E78B2">① 構造化データ</text>
    <text x="145" y="132" font-size="15" fill="#555">一定の形式で表現</text>
    <rect x="55" y="146" width="180" height="84" rx="6" fill="#fff" stroke="#888"/>
    <line x1="55" y1="170" x2="235" y2="170" stroke="#888"/>
    <line x1="145" y1="146" x2="145" y2="230" stroke="#888"/>
    <text x="100" y="163" font-size="14" font-weight="700" fill="#3E78B2">書名</text><text x="190" y="163" font-size="14" font-weight="700" fill="#A6192E">著者</text>
    <text x="100" y="190" font-size="14">情報の科学</text><text x="190" y="190" font-size="14">海浜</text>
    <text x="100" y="216" font-size="14">ネット入門</text><text x="190" y="216" font-size="14">千葉</text>
    <line x1="262" y1="161" x2="312" y2="161" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u08-arr)"/>
    <rect class="card" x="318" y="76" width="230" height="170" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="433" y="104" font-size="18" font-weight="700" fill="#3C8A57">② データベース</text>
    <text x="433" y="132" font-size="15" fill="#555">集めて蓄積する</text>
    <ellipse cx="433" cy="166" rx="62" ry="14" fill="#DDEBC8" stroke="#3C8A57" stroke-width="2"/>
    <path d="M371 166 v52 a62 14 0 0 0 124 0 v-52" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="433" y="206" font-size="16" font-weight="700" fill="#3C8A57">蓄積</text>
    <line x1="550" y1="161" x2="600" y2="161" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u08-arr)"/>
    <rect class="card" x="606" y="76" width="304" height="170" rx="10" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
    <text x="758" y="104" font-size="18" font-weight="700" fill="#7d1322">③ 検索（取り出す）</text>
    <text x="758" y="134" font-size="15" fill="#555">目的に応じて整理し、必要な分だけ引き出す</text>
    <rect x="636" y="150" width="244" height="78" rx="6" fill="#fff" stroke="#A6192E"/>
    <text x="758" y="178" font-size="15" font-weight="700">「著者＝海浜」の本は？</text>
    <text x="758" y="208" font-size="16" font-weight="800" fill="#7d1322">→ 情報の科学</text>
    <text x="470" y="282" font-size="15" fill="#555">整理の決まり＝<tspan font-weight="700">データモデル</tspan>。身近な非コンピュータDB＝辞書・紙の名簿。非構造データはサーチエンジンの<tspan font-weight="700">全文検索</tspan>で探す。</text>
  </g>
</svg>
</div>

<div class="caption">登録には必ず「目的」がある（連絡したい・サービスしたい）。だから<span class="red">一定形式（構造化）</span>で貯め、<span class="red">検索</span>で取り出せるようにする。</div>

<div class="takeaway">DB＝「構造化して貯め、目的に応じて取り出す」箱。旅の荷物が着いた先の保管庫。</div>

---

<!-- _class: split -->

<div class="page-title">DBとDBMS</div>

## 多人数で安全に使うための「管理システム」＝DBMS

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 280" width="100%" style="max-height:280px">
  <defs>
    <marker id="u08-arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6B6F76"/></marker>
  </defs>
  <g text-anchor="middle">
    <rect class="card" x="14" y="24" width="90" height="42" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="59" y="51" font-size="16" font-weight="700">利用者A</text>
    <rect class="card" x="14" y="118" width="90" height="42" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="59" y="145" font-size="16" font-weight="700">利用者B</text>
    <rect class="card" x="14" y="212" width="90" height="42" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="59" y="239" font-size="16" font-weight="700">利用者C</text>
    <line x1="104" y1="46" x2="142" y2="120" stroke="#6B6F76" stroke-width="2" marker-end="url(#u08-arr2)"/>
    <line x1="104" y1="139" x2="140" y2="139" stroke="#6B6F76" stroke-width="2" marker-end="url(#u08-arr2)"/>
    <line x1="104" y1="232" x2="142" y2="158" stroke="#6B6F76" stroke-width="2" marker-end="url(#u08-arr2)"/>
    <rect class="card" x="146" y="92" width="120" height="96" rx="10" fill="#A6192E"/>
    <text x="206" y="128" font-size="21" font-weight="800" fill="#fff">DBMS</text>
    <text x="206" y="154" font-size="15" fill="#fff">問い合わせを</text>
    <text x="206" y="174" font-size="15" fill="#fff">仲介・制御する</text>
    <line x1="266" y1="139" x2="296" y2="139" stroke="#6B6F76" stroke-width="2" marker-end="url(#u08-arr2)"/>
    <ellipse cx="318" cy="112" rx="38" ry="13" fill="#DDEBC8" stroke="#3C8A57" stroke-width="2"/>
    <path d="M280 112 v56 a38 13 0 0 0 76 0 v-56" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="318" y="150" font-size="16" font-weight="700" fill="#3C8A57">DB</text>
  </g>
</svg>

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

<svg viewBox="0 0 360 360" width="100%" style="max-height:360px">
  <g text-anchor="middle">
    <text x="180" y="22" font-size="17" font-weight="700">DB の 3 分類</text>
    <!-- 階層型 -->
    <rect class="card" x="10" y="34" width="340" height="92" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="64" y="58" font-size="15" font-weight="700" fill="#D98A2B">階層型</text>
    <circle cx="160" cy="56" r="9" fill="#D98A2B"/>
    <line x1="160" y1="65" x2="130" y2="92" stroke="#D98A2B" stroke-width="2"/><line x1="160" y1="65" x2="190" y2="92" stroke="#D98A2B" stroke-width="2"/>
    <circle cx="130" cy="98" r="8" fill="#fff" stroke="#D98A2B" stroke-width="2"/><circle cx="190" cy="98" r="8" fill="#fff" stroke="#D98A2B" stroke-width="2"/>
    <text x="280" y="56" font-size="14" fill="#555">木構造(1対多)</text>
    <text x="280" y="110" font-size="13" fill="#555">検索◎ 追加削除△</text>
    <!-- ネットワーク型 -->
    <rect class="card" x="10" y="134" width="340" height="92" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="70" y="158" font-size="15" font-weight="700" fill="#3E78B2">ネットワーク型</text>
    <circle cx="150" cy="180" r="8" fill="#3E78B2"/><circle cx="200" cy="160" r="8" fill="#3E78B2"/><circle cx="200" cy="205" r="8" fill="#3E78B2"/>
    <line x1="150" y1="180" x2="200" y2="160" stroke="#3E78B2" stroke-width="2"/><line x1="150" y1="180" x2="200" y2="205" stroke="#3E78B2" stroke-width="2"/><line x1="200" y1="160" x2="200" y2="205" stroke="#3E78B2" stroke-width="2"/>
    <text x="285" y="190" font-size="14" fill="#555">網目(多対多)</text>
    <!-- リレーショナル型 -->
    <rect class="card" x="10" y="234" width="340" height="114" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
    <text x="80" y="258" font-size="15" font-weight="800" fill="#7d1322">リレーショナル型</text>
    <rect x="140" y="248" width="90" height="56" rx="4" fill="#fff" stroke="#A6192E"/>
    <line x1="140" y1="266" x2="230" y2="266" stroke="#A6192E"/><line x1="185" y1="248" x2="185" y2="304" stroke="#A6192E"/>
    <rect x="248" y="270" width="90" height="56" rx="4" fill="#fff" stroke="#A6192E"/>
    <line x1="248" y1="288" x2="338" y2="288" stroke="#A6192E"/><line x1="293" y1="270" x2="293" y2="326" stroke="#A6192E"/>
    <line x1="230" y1="290" x2="248" y2="290" stroke="#A6192E" stroke-width="2" stroke-dasharray="3 2"/>
    <text x="105" y="330" font-size="13" fill="#7d1322" font-weight="700">表と表の関係で柔軟検索</text>
  </g>
</svg>

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
<svg viewBox="0 0 940 340" width="100%" style="max-height:350px">
  <defs>
    <marker id="u08-arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 元テーブル -->
  <g text-anchor="middle">
    <text x="160" y="28" font-size="17" font-weight="700">蔵書テーブル</text>
    <rect class="card" x="24" y="40" width="300" height="150" fill="#fff" stroke="#888"/>
    <line x1="24" y1="70" x2="324" y2="70" stroke="#888"/>
    <line x1="124" y1="40" x2="124" y2="190" stroke="#888"/><line x1="224" y1="40" x2="224" y2="190" stroke="#888"/>
    <text x="74" y="62" font-size="15" font-weight="700" fill="#3E78B2">タイトル</text><text x="174" y="62" font-size="15" font-weight="700" fill="#A6192E">著者</text><text x="274" y="62" font-size="15" font-weight="700">出版社</text>
    <text x="74" y="98" font-size="15">情報の科学</text><text x="174" y="98" font-size="15">海浜</text><text x="274" y="98" font-size="15">A社</text>
    <text x="74" y="134" font-size="15">ネット入門</text><text x="174" y="134" font-size="15">千葉</text><text x="274" y="134" font-size="15">B社</text>
    <text x="74" y="170" font-size="15">データ論</text><text x="174" y="170" font-size="15">海浜</text><text x="274" y="170" font-size="15">C社</text>
  </g>
  <!-- 3操作 -->
  <g text-anchor="middle">
    <rect class="card" x="356" y="44" width="200" height="42" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="416" y="63" font-size="16" font-weight="700" fill="#3E78B2">選択</text><text x="416" y="80" font-size="14" fill="#555">条件に合う<tspan font-weight="700" fill="#3E78B2">行</tspan>を取り出す</text>
    <rect class="card" x="356" y="96" width="200" height="42" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="416" y="115" font-size="16" font-weight="700" fill="#D98A2B">射影</text><text x="416" y="132" font-size="14" fill="#555">特定の<tspan font-weight="700" fill="#D98A2B">列</tspan>を取り出す</text>
    <rect class="card" x="356" y="148" width="200" height="42" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="416" y="167" font-size="16" font-weight="700" fill="#3C8A57">結合</text><text x="416" y="184" font-size="14" fill="#555">複数の表をつなぐ(JOIN)</text>
  </g>
  <line x1="566" y1="116" x2="606" y2="116" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u08-arr3)"/>
  <!-- SQL文と結果 -->
  <g>
    <rect class="card" x="614" y="40" width="306" height="74" rx="6" fill="#F8E5EA" stroke="#A6192E"/>
    <text x="630" y="68" font-size="16" font-weight="700" fill="#7d1322" font-family="Menlo,Consolas,monospace">SELECT タイトル FROM 蔵書</text>
    <text x="630" y="98" font-size="16" font-weight="700" fill="#7d1322" font-family="Menlo,Consolas,monospace">WHERE 著者='海浜';</text>
    <text x="767" y="138" font-size="15" fill="#555" text-anchor="middle">射影＝SELECT で列を選ぶ／選択＝WHERE で行を絞る</text>
  </g>
  <g text-anchor="middle">
    <text x="767" y="168" font-size="15" font-weight="700">→ 結果（射影された1列＋選択された2行）</text>
    <rect class="card" x="657" y="178" width="220" height="92" fill="#fff" stroke="#888"/>
    <line x1="657" y1="206" x2="877" y2="206" stroke="#888"/>
    <text x="767" y="198" font-size="15" font-weight="700" fill="#3E78B2">タイトル</text>
    <text x="767" y="232" font-size="15">情報の科学</text>
    <text x="767" y="258" font-size="15">データ論</text>
  </g>
  <!-- 手計算的キャプション帯 -->
  <text x="470" y="300" font-size="15" fill="#555" text-anchor="middle">結合してできた新しい表に、さらに選択・射影をかけられる。だから種類ごとに小さい表＋結合が効率的。</text>
  <rect x="150" y="312" width="640" height="22" rx="6" fill="#FBEFC8" stroke="#ecd98f"/>
  <text x="470" y="328" font-size="14" font-weight="700" text-anchor="middle">取り違え注意：選択＝行（レコード）／ 射影＝列（フィールド）</text>
</svg>
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

<svg viewBox="0 0 980 60" width="100%" style="max-height:42px">
  <g font-size="15" text-anchor="middle">
    <line x1="60" y1="30" x2="920" y2="30" stroke="#ddd" stroke-width="3"/>
    <g fill="#bbb"><circle cx="60" cy="30" r="7"/><circle cx="232" cy="30" r="7"/><circle cx="404" cy="30" r="7"/><circle cx="576" cy="30" r="7"/></g>
    <circle cx="748" cy="30" r="9" fill="#A6192E"/><circle cx="920" cy="30" r="9" fill="#A6192E"/>
    <g fill="#888"><text x="60" y="54">端末</text><text x="232" y="54">Wi-Fi</text><text x="404" y="54">DNS</text><text x="576" y="54">Internet</text></g>
    <g fill="#A6192E" font-weight="700"><text x="748" y="54">サーバ</text><text x="920" y="54">表示</text></g>
  </g>
</svg>

<svg viewBox="0 0 980 250" width="100%" style="max-height:300px">
  <defs>
    <marker id="u9a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- POS chain -->
  <text x="270" y="28" font-size="18" font-weight="700" text-anchor="middle" fill="#1a1a1a">① POSシステム（販売時点情報管理）</text>
  <rect class="card" x="20" y="50" width="150" height="74" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/>
  <text x="95" y="82" font-size="17" font-weight="700" text-anchor="middle">店舗レジ</text>
  <text x="95" y="106" font-size="15" fill="#555" text-anchor="middle">バーコード読取</text>
  <rect class="card" x="210" y="50" width="170" height="74" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
  <text x="295" y="82" font-size="17" font-weight="700" text-anchor="middle" fill="#A6192E">本部センター</text>
  <text x="295" y="106" font-size="15" fill="#555" text-anchor="middle">販売データを集約</text>
  <rect class="card" x="420" y="50" width="160" height="74" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
  <text x="500" y="82" font-size="17" font-weight="700" text-anchor="middle">発注・配送</text>
  <text x="500" y="106" font-size="15" fill="#555" text-anchor="middle">在庫・最適配送</text>
  <line x1="172" y1="87" x2="206" y2="87" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u9a)"/>
  <line x1="382" y1="87" x2="416" y2="87" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u9a)"/>
  <text x="300" y="150" font-size="15" fill="#555" text-anchor="middle">何が・いつ・いくつ売れたか → 代金精算と同時に受発注・在庫・本部集約</text>
  <!-- other systems -->
  <text x="800" y="28" font-size="18" font-weight="700" text-anchor="middle" fill="#1a1a1a">② 位置・予約のシステム</text>
  <rect class="card" x="650" y="46" width="300" height="40" rx="6" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
  <text x="800" y="71" font-size="16" font-weight="700" text-anchor="middle">🛰 GPS／道路交通システム（カーナビ・渋滞）</text>
  <rect class="card" x="650" y="96" width="300" height="40" rx="6" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="800" y="121" font-size="16" font-weight="700" text-anchor="middle">予約システム（座席・蔵書をリアルタイム）</text>
  <text x="800" y="160" font-size="15" fill="#555" text-anchor="middle">限られた資源を、自宅から検索・予約できる</text>
  <!-- big data funnel -->
  <rect class="card" x="20" y="180" width="930" height="56" rx="10" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/>
  <text x="485" y="205" font-size="18" font-weight="700" text-anchor="middle" fill="#A6192E">POS ＋ SNSの書き込み ＋ GPS … 日々たまる膨大なデータ ＝ ビッグデータ</text>
  <text x="485" y="226" font-size="15" fill="#555" text-anchor="middle">分析して洞察を引き出す専門家 ＝ データサイエンティスト（新製品・販売戦略のヒント）</text>
</svg>

</div>
</div>

<div class="band">情報システムの正体は<span class="hl">「ネットワークで集めたデータを、データベースに蓄えて活かす」</span>こと。残りはその“読み方”を学ぶ。</div>

---

<!-- _class: split -->

<div class="page-title">マーケティングとPOS</div>

## なぜ1本のバーコードが「経営」を動かすのか

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 300" width="100%" style="max-height:300px">
  <defs>
    <marker id="u9b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <text x="190" y="22" font-size="17" font-weight="700" text-anchor="middle">バーコード1スキャンの波及</text>
  <!-- barcode -->
  <g stroke="#1a1a1a">
    <line x1="60" y1="45" x2="60" y2="80" stroke-width="3"/><line x1="68" y1="45" x2="68" y2="80" stroke-width="1.5"/>
    <line x1="76" y1="45" x2="76" y2="80" stroke-width="4"/><line x1="86" y1="45" x2="86" y2="80" stroke-width="1.5"/>
    <line x1="94" y1="45" x2="94" y2="80" stroke-width="3"/><line x1="104" y1="45" x2="104" y2="80" stroke-width="2"/>
  </g>
  <text x="160" y="68" font-size="16" font-weight="700" fill="#A6192E">スキャン</text>
  <line x1="190" y1="90" x2="190" y2="118" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u9b)"/>
  <g font-size="16">
    <rect class="card" x="40" y="124" width="300" height="34" rx="6" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="190" y="146" font-weight="700" text-anchor="middle" fill="#A6192E">① 代金の精算（その場）</text>
    <rect class="card" x="40" y="166" width="300" height="34" rx="6" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="190" y="188" text-anchor="middle">② 受発注・在庫の更新</text>
    <rect class="card" x="40" y="208" width="300" height="34" rx="6" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="190" y="230" text-anchor="middle">③ 本部に集約 → 最適配送</text>
    <rect class="card" x="40" y="250" width="300" height="34" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="190" y="272" text-anchor="middle">④ きめ細かい発注・品揃え</text>
  </g>
</svg>

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

<svg viewBox="0 0 420 270" width="100%" style="max-height:280px">
  <text x="210" y="20" font-size="17" font-weight="700" text-anchor="middle">下へ行くほど「できる計算」が増える</text>
  <g font-size="16">
    <rect class="card" x="20" y="205" width="380" height="46" rx="6" fill="#cfe0f0" stroke="#3E78B2"/><text x="34" y="225" font-weight="700">名義尺度</text><text x="34" y="244" font-size="14" fill="#555">分類のみ ／ 血液型・氏名</text><text x="392" y="234" font-size="14" fill="#3E78B2" text-anchor="end">頻度・最頻値</text>
    <rect class="card" x="44" y="153" width="356" height="46" rx="6" fill="#a9c6e6" stroke="#3E78B2"/><text x="58" y="173" font-weight="700">順序尺度</text><text x="58" y="192" font-size="14" fill="#333">順序に意味 ／ 順位・震度</text><text x="392" y="182" font-size="14" fill="#1a3a5c" text-anchor="end">＋中央値</text>
    <rect class="card" x="68" y="101" width="332" height="46" rx="6" fill="#7faedb" stroke="#3E78B2"/><text x="82" y="121" font-weight="700" fill="#fff">間隔尺度</text><text x="82" y="140" font-size="14" fill="#eaf2fb">差に意味・原点は便宜 ／ 気温℃・西暦</text><text x="392" y="130" font-size="14" fill="#fff" text-anchor="end">＋平均</text>
    <rect class="card" x="92" y="49" width="308" height="46" rx="6" fill="#3E78B2" stroke="#2c5680"/><text x="106" y="69" font-weight="700" fill="#fff">比例尺度</text><text x="106" y="88" font-size="14" fill="#eaf2fb">原点0・比に意味 ／ 身長・金額</text><text x="392" y="78" font-size="14" fill="#fff" text-anchor="end">＋四則すべて</text>
  </g>
</svg>

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
<svg viewBox="0 0 420 250" width="100%" style="max-height:250px">
  <text x="220" y="20" font-size="17" font-weight="700" text-anchor="middle">ヒストグラム</text>
  <line x1="55" y1="210" x2="405" y2="210" stroke="#888" stroke-width="2"/>
  <line x1="55" y1="210" x2="55" y2="40" stroke="#888" stroke-width="2"/>
  <g class="card" fill="#3E78B2">
    <rect x="68" y="178" width="58" height="32"/>
    <rect x="130" y="135" width="58" height="75"/>
    <rect x="192" y="75" width="58" height="135"/>
    <rect x="254" y="60" width="58" height="150"/>
    <rect x="316" y="150" width="58" height="60"/>
  </g>
  <g font-size="15" text-anchor="middle" fill="#fff" font-weight="700"><text x="97" y="200">2</text><text x="159" y="180">5</text><text x="221" y="120">9</text><text x="283" y="105">10</text><text x="345" y="195">4</text></g>
  <g font-size="14" text-anchor="middle" fill="#555"><text x="97" y="228">24-26</text><text x="159" y="228">26-28</text><text x="221" y="228">28-30</text><text x="283" y="228">30-32</text><text x="345" y="228">32-34</text></g>
</svg>
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
<svg viewBox="0 0 380 240" width="100%" style="max-height:240px;margin-top:28px">
  <text x="190" y="20" font-size="16" font-weight="700" text-anchor="middle">B町の6店（数直線）</text>
  <line x1="30" y1="140" x2="355" y2="140" stroke="#888" stroke-width="2"/>
  <g font-size="14" fill="#555" text-anchor="middle"><text x="44" y="162">100</text><text x="262" y="162">260</text><text x="330" y="162">300</text></g>
  <g fill="#D98A2B"><circle cx="44" cy="140" r="7"/><circle cx="262" cy="140" r="7"/><circle cx="277" cy="140" r="7"/><circle cx="292" cy="126" r="7"/><circle cx="292" cy="140" r="7"/><circle cx="292" cy="154" r="7"/></g>
  <text x="44" y="118" font-size="15" font-weight="700" fill="#A6192E" text-anchor="middle">外れ値</text>
  <line x1="206" y1="60" x2="206" y2="140" stroke="#A6192E" stroke-width="2.5" stroke-dasharray="5 3"/><text x="206" y="50" font-size="15" font-weight="700" fill="#A6192E" text-anchor="middle">平均 245</text>
  <line x1="285" y1="200" x2="285" y2="140" stroke="#3C8A57" stroke-width="2.5" stroke-dasharray="5 3"/><text x="285" y="220" font-size="15" font-weight="700" fill="#3C8A57" text-anchor="middle">中央値 275</text>
  <text x="125" y="200" font-size="14" fill="#555" text-anchor="middle">たった1店の100円が</text>
  <text x="125" y="218" font-size="14" fill="#555" text-anchor="middle">平均を35円も引き下げる</text>
</svg>

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

<svg viewBox="0 0 380 300" width="100%" style="max-height:300px">
  <text x="190" y="22" font-size="17" font-weight="700" text-anchor="middle">箱ひげ図（5数要約）</text>
  <line x1="40" y1="90" x2="360" y2="90" stroke="#888" stroke-width="2"/>
  <line x1="70" y1="90" x2="130" y2="90" stroke="#3E78B2" stroke-width="2"/>
  <line x1="270" y1="90" x2="330" y2="90" stroke="#3E78B2" stroke-width="2"/>
  <rect class="card" x="130" y="62" width="140" height="56" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <line x1="195" y1="62" x2="195" y2="118" stroke="#A6192E" stroke-width="3"/>
  <g stroke="#3E78B2" stroke-width="2"><line x1="70" y1="74" x2="70" y2="106"/><line x1="330" y1="74" x2="330" y2="106"/></g>
  <g font-size="14" text-anchor="middle" fill="#555">
    <text x="70" y="140">最小値</text><text x="130" y="140">第1四分位</text>
    <text x="195" y="52" font-size="15" fill="#A6192E" font-weight="700">中央値</text>
    <text x="270" y="140">第3四分位</text><text x="330" y="140">最大値</text>
  </g>
  <line x1="130" y1="160" x2="270" y2="160" stroke="#D98A2B" stroke-width="2"/>
  <g stroke="#D98A2B" stroke-width="2"><line x1="130" y1="153" x2="130" y2="167"/><line x1="270" y1="153" x2="270" y2="167"/></g>
  <text x="200" y="184" font-size="14" fill="#D98A2B" text-anchor="middle" font-weight="700">四分位範囲（箱の幅）＝散らばり</text>
  <rect class="card" x="40" y="205" width="320" height="78" rx="8" fill="#fbfbfb" stroke="#ccc"/>
  <text x="200" y="228" font-size="15" font-weight="700" text-anchor="middle">外れ値の目安</text>
  <text x="200" y="250" font-size="14" fill="#555" text-anchor="middle">第1四分位 − 1.5×四分位範囲 より小</text>
  <text x="200" y="270" font-size="14" fill="#555" text-anchor="middle">第3四分位 ＋ 1.5×四分位範囲 より大</text>
</svg>

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
<svg viewBox="0 0 280 200" width="100%" style="max-height:200px">
  <text x="140" y="18" font-size="14" font-weight="700" text-anchor="middle">正の相関＋回帰直線</text>
  <line x1="34" y1="165" x2="262" y2="165" stroke="#888"/><line x1="34" y1="165" x2="34" y2="30" stroke="#888"/>
  <g fill="#A6192E"><circle cx="58" cy="148" r="4"/><circle cx="84" cy="135" r="4"/><circle cx="110" cy="124" r="4"/><circle cx="138" cy="104" r="4"/><circle cx="164" cy="92" r="4"/><circle cx="190" cy="72" r="4"/><circle cx="222" cy="52" r="4"/></g>
  <line x1="48" y1="155" x2="232" y2="48" stroke="#3E78B2" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="150" y="190" font-size="14" fill="#3E78B2" text-anchor="middle">y ＝ ax＋b で予測</text>
</svg>
</div>
<div>
<svg viewBox="0 0 280 200" width="100%" style="max-height:200px">
  <text x="140" y="18" font-size="14" font-weight="700" text-anchor="middle">負の相関 ／ 相関なし</text>
  <line x1="34" y1="165" x2="262" y2="165" stroke="#888"/><line x1="34" y1="165" x2="34" y2="30" stroke="#888"/>
  <g fill="#3C8A57"><circle cx="58" cy="55" r="4"/><circle cx="86" cy="74" r="4"/><circle cx="112" cy="90" r="4"/><circle cx="140" cy="106" r="4"/><circle cx="172" cy="128" r="4"/><circle cx="208" cy="146" r="4"/></g>
  <g fill="#999"><circle cx="74" cy="116" r="3.5"/><circle cx="118" cy="62" r="3.5"/><circle cx="160" cy="138" r="3.5"/><circle cx="202" cy="74" r="3.5"/><circle cx="224" cy="120" r="3.5"/></g>
  <text x="140" y="190" font-size="14" text-anchor="middle"><tspan fill="#3C8A57">緑＝負</tspan><tspan fill="#555"> ／ 灰＝なし</tspan></text>
</svg>
</div>
<div>
<svg viewBox="0 0 280 200" width="100%" style="max-height:200px">
  <defs><marker id="u9c" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#D98A2B"/></marker></defs>
  <text x="140" y="18" font-size="14" font-weight="700" text-anchor="middle">見かけの相関（交絡）</text>
  <rect class="card" x="95" y="34" width="90" height="38" rx="8" fill="#D98A2B"/><text x="140" y="59" font-size="15" fill="#fff" font-weight="700" text-anchor="middle">暑さ（真因）</text>
  <rect class="card" x="8" y="128" width="110" height="40" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="63" y="153" font-size="14" text-anchor="middle">アイス消費</text>
  <rect class="card" x="162" y="128" width="110" height="40" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="217" y="153" font-size="14" text-anchor="middle">水難事故</text>
  <line x1="118" y1="72" x2="72" y2="126" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u9c)"/>
  <line x1="162" y1="72" x2="208" y2="126" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#u9c)"/>
  <line x1="120" y1="148" x2="160" y2="148" stroke="#A6192E" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="140" y="192" font-size="14" fill="#A6192E" text-anchor="middle">見かけの相関（因果なし）</text>
</svg>
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
<svg viewBox="0 0 940 340" width="100%" style="max-height:360px">
  <defs>
    <marker id="u10arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
    <marker id="u10arr-gray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6B6F76"/></marker>
  </defs>
  <!-- 旅プログレスバー：終点（サーバ・表示）を赤で点灯 -->
  <g font-size="16" text-anchor="middle">
    <line x1="60" y1="30" x2="900" y2="30" stroke="#ddd" stroke-width="2"/>
    <circle cx="80"  cy="30" r="6" fill="#ccc"/><text x="80"  y="16" fill="#999">端末</text>
    <circle cx="244" cy="30" r="6" fill="#ccc"/><text x="244" y="16" fill="#999">Wi-Fi</text>
    <circle cx="408" cy="30" r="6" fill="#ccc"/><text x="408" y="16" fill="#999">DNS</text>
    <circle cx="572" cy="30" r="6" fill="#ccc"/><text x="572" y="16" fill="#999">Internet</text>
    <circle cx="736" cy="30" r="7" fill="#A6192E"/><text x="736" y="16" fill="#A6192E" font-weight="700">サーバ</text>
    <circle cx="900" cy="30" r="7" fill="#A6192E"/><text x="900" y="16" fill="#A6192E" font-weight="700">表示</text>
  </g>
  <!-- 左：自前で「所有」 -->
  <text x="225" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#6B6F76">これまで：自前で所有（オンプレミス）</text>
  <rect class="card" x="70" y="92" width="310" height="210" rx="10" fill="#fff" stroke="#6B6F76" stroke-width="2"/>
  <g fill="#6B6F76"><rect x="120" y="118" width="210" height="26" rx="4"/><rect x="120" y="150" width="210" height="26" rx="4"/><rect x="120" y="182" width="210" height="26" rx="4"/></g>
  <g font-size="15" fill="#fff" text-anchor="middle"><text x="225" y="136">サーバを買う</text><text x="225" y="168">設置・電源・空調</text><text x="225" y="200">保守・故障対応</text></g>
  <text x="225" y="236" font-size="16" text-anchor="middle" fill="#555">初期費用が大・ピークに合わせ過剰に用意</text>
  <text x="225" y="262" font-size="16" text-anchor="middle" fill="#555">余れば無駄／足りなければ即増設できない</text>
  <text x="225" y="290" font-size="16" font-weight="700" text-anchor="middle" fill="#6B6F76">＝ 機械を「持つ」</text>
  <!-- 矢印 -->
  <line x1="392" y1="200" x2="448" y2="200" stroke="#A6192E" stroke-width="3.5" marker-end="url(#u10arr-red)"/>
  <text x="420" y="186" font-size="16" font-weight="700" text-anchor="middle" fill="#A6192E">利用へ</text>
  <!-- 右：クラウド＝インターネットの雲から借りる -->
  <text x="700" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="#A6192E">クラウド：ネット越しに利用</text>
  <ellipse class="card" cx="700" cy="180" rx="180" ry="86" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
  <text x="700" y="150" font-size="20" font-weight="800" text-anchor="middle" fill="#A6192E">事業者の巨大データセンター</text>
  <text x="700" y="178" font-size="16" text-anchor="middle" fill="#7d1322">サーバ・電源・保守は事業者がまとめて運用</text>
  <text x="700" y="204" font-size="16" text-anchor="middle" fill="#7d1322">使った分だけ課金／一瞬で増減できる</text>
  <!-- 利用者端末 -->
  <rect class="card" x="610" y="288" width="60" height="40" rx="6" fill="#3E78B2"/><text x="640" y="313" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">PC</text>
  <rect class="card" x="730" y="288" width="60" height="40" rx="6" fill="#3E78B2"/><text x="760" y="313" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">スマホ</text>
  <line x1="640" y1="288" x2="675" y2="256" stroke="#6B6F76" stroke-width="2" marker-end="url(#u10arr-gray)"/>
  <line x1="760" y1="288" x2="725" y2="256" stroke="#6B6F76" stroke-width="2" marker-end="url(#u10arr-gray)"/>
  <text x="700" y="338" font-size="16" font-weight="700" text-anchor="middle" fill="#A6192E">＝ 機能を「使う」</text>
</svg>
</div>

<div class="band">教科書のいう<span class="red">クラウドコンピューティング</span>＝高性能なサーバを自前で持たず、<span class="red">インターネット経由で必要なときにサービスとして利用</span>する形態（教科書 図9）。</div>

<div class="ask">「自分のPCが壊れても、写真もメール（ Google フォト等）も消えない」のはなぜ？ ── データが手元でなく雲の中にあるから。</div>

---

<!-- _class: fig -->

<div class="page-title">所有→利用</div>

## 何を「自分」で、何を「事業者」に任せるか ── IaaS / PaaS / SaaS

<div class="fig-area">
<svg viewBox="0 0 940 320" width="100%" style="max-height:340px">
  <!-- 凡例（色＝役割を図内に固定） -->
  <g font-size="16">
    <rect x="250" y="8" width="22" height="16" rx="3" fill="#FAE1E2" stroke="#A6192E"/><text x="280" y="21" fill="#7d1322">自分が管理</text>
    <rect x="430" y="8" width="22" height="16" rx="3" fill="#DDEBC8" stroke="#3C8A57"/><text x="460" y="21" fill="#2f6b43">事業者が管理（おまかせ）</text>
  </g>
  <!-- 列見出し -->
  <g font-size="18" font-weight="700" text-anchor="middle">
    <text x="170" y="56">IaaS</text>
    <text x="470" y="56">PaaS</text>
    <text x="770" y="56">SaaS</text>
  </g>
  <g font-size="15" text-anchor="middle" fill="#555">
    <text x="170" y="76">基盤を借りる</text>
    <text x="470" y="76">土台＋実行環境を借りる</text>
    <text x="770" y="76">完成品を使うだけ</text>
  </g>
  <!-- 4層の行ラベル -->
  <g font-size="15" text-anchor="end" fill="#555">
    <text x="56" y="108">アプリ</text>
    <text x="56" y="150">OS</text>
    <text x="56" y="192">仮想マシン</text>
    <text x="56" y="234">物理・電源</text>
  </g>
  <!-- IaaS 列：上2層=自分、下2層=事業者 -->
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="64" y="90" width="212" height="34" rx="6" fill="#FAE1E2" stroke="#A6192E"/><text x="170" y="112">アプリ（自分）</text>
    <rect class="card" x="64" y="132" width="212" height="34" rx="6" fill="#FAE1E2" stroke="#A6192E"/><text x="170" y="154">OS（自分）</text>
    <rect class="card" x="64" y="174" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="170" y="196">仮想マシン（事業者）</text>
    <rect class="card" x="64" y="216" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="170" y="238">物理・電源（事業者）</text>
    <text x="170" y="276" font-size="15" fill="#555">例：仮想サーバ（VM）を借りる</text>
  </g>
  <!-- PaaS 列：上1層=自分、下3層=事業者 -->
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="364" y="90" width="212" height="34" rx="6" fill="#FAE1E2" stroke="#A6192E"/><text x="470" y="112">アプリ（自分）</text>
    <rect class="card" x="364" y="132" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="470" y="154">実行環境（事業者）</text>
    <rect class="card" x="364" y="174" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="470" y="196">OS（事業者）</text>
    <rect class="card" x="364" y="216" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="470" y="238">基盤（事業者）</text>
    <text x="470" y="276" font-size="15" fill="#555">例：コードだけ置けば動く土台</text>
  </g>
  <!-- SaaS 列：全層=事業者 -->
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="664" y="90" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="770" y="112">アプリ（事業者）</text>
    <rect class="card" x="664" y="132" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="770" y="154">実行環境（事業者）</text>
    <rect class="card" x="664" y="174" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="770" y="196">OS（事業者）</text>
    <rect class="card" x="664" y="216" width="212" height="34" rx="6" fill="#DDEBC8" stroke="#3C8A57"/><text x="770" y="238">基盤（事業者）</text>
    <text x="770" y="276" font-size="15" fill="#555">例：Gmail・Google ドキュメント</text>
  </g>
  <!-- 右向き「おまかせが増える」矢印 -->
  <text x="470" y="306" font-size="16" font-weight="700" text-anchor="middle" fill="#A6192E">→ 右へ行くほど赤（自分の管理）が減り、緑（おまかせ）が増える</text>
</svg>
</div>

<div class="band">同じ<span class="red">層スタック</span>＝動画4の TCP/IP 4階層と同じ「上に積む」考え方。<span class="red">下の層ほど事業者に任せられる</span>のがクラウド。</div>

---

<!-- _class: split -->

<div class="page-title">なぜ学ぶか</div>

## 集約は「便利」と「弱点」の両方 ── 雲が落ちると世界が止まる

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 280" width="100%" style="max-height:300px">
  <defs>
    <marker id="u10arr-d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- 巨大クラウド -->
  <ellipse class="card" cx="180" cy="70" rx="150" ry="52" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/>
  <text x="180" y="60" font-size="17" font-weight="800" text-anchor="middle" fill="#A6192E">巨大クラウド基盤</text>
  <text x="180" y="84" font-size="14" text-anchor="middle" fill="#7d1322">DNS・経路・設定を1か所で集中管理</text>
  <!-- 依存する多数サービス -->
  <g font-size="14" text-anchor="middle">
    <rect class="card" x="20"  y="170" width="92" height="40" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="66"  y="194">SNS・配信</text>
    <rect class="card" x="134" y="170" width="92" height="40" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="180" y="194">決済・予約</text>
    <rect class="card" x="248" y="170" width="92" height="40" rx="6" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="294" y="194">業務・行政</text>
  </g>
  <line x1="120" y1="118" x2="70"  y2="166" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u10arr-d)"/>
  <line x1="180" y1="122" x2="180" y2="166" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u10arr-d)"/>
  <line x1="240" y1="118" x2="290" y2="166" stroke="#A6192E" stroke-width="2.5" marker-end="url(#u10arr-d)"/>
  <text x="180" y="248" font-size="15" font-weight="700" text-anchor="middle" fill="#A6192E">1か所の設定ミス → 一斉に停止</text>
  <text x="180" y="270" font-size="14" text-anchor="middle" fill="#555">便利な集約は、同時に「単一障害点」</text>
</svg>

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
2021年12月、AWS us-east-1 の大規模障害で、<span class="red">相乗りする Netflix・Disney+ など多数が一斉に同時停止</span>した。
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

<svg viewBox="0 0 360 260" width="100%" style="max-height:280px">
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="20"  y="200" width="240" height="40" rx="6" fill="#cfe0f0"/><text x="140" y="225" font-weight="700">無料枠・無料ツールで始める</text>
    <rect class="card" x="55"  y="150" width="240" height="40" rx="6" fill="#a9c6e6"/><text x="175" y="175" font-weight="700">ハンズオンで操作してみる</text>
    <rect class="card" x="90"  y="100" width="240" height="40" rx="6" fill="#7faedb"/><text x="210" y="125" font-weight="700" fill="#fff">作って・壊して・直す</text>
    <rect class="card" x="125" y="50"  width="225" height="40" rx="6" fill="#3E78B2"/><text x="237" y="75"  font-weight="700" fill="#fff">中身を理解した使い手へ</text>
  </g>
  <text x="180" y="34" font-size="15" font-weight="700" fill="#A6192E" text-anchor="middle">↑ 積み上げて学び続ける</text>
</svg>

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
<svg viewBox="0 0 980 300" width="100%" style="max-height:340px">
  <defs>
    <marker id="arrow-grn-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
  </defs>
  <!-- 旅プログレスバー：全6点が点灯（緑＝到着済み）、最終地点だけ赤で強調 -->
  <text x="490" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#3C8A57">旅プログレスバー：全行程クリア</text>
  <line x1="60" y1="78" x2="920" y2="78" stroke="#3C8A57" stroke-width="3"/>
  <g font-size="16" text-anchor="middle">
    <g><rect class="card" x="40" y="50" width="120" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="100" y="74" font-weight="700">端末</text><text x="100" y="95" font-size="15" fill="#555">スマホ/PC</text></g>
    <text x="178" y="84" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <g><rect class="card" x="196" y="50" width="120" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="256" y="74" font-weight="700">Wi-Fi / LAN</text><text x="256" y="95" font-size="15" fill="#555">ルータ</text></g>
    <text x="334" y="84" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <g><rect class="card" x="352" y="50" width="120" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="412" y="74" font-weight="700">DNS</text><text x="412" y="95" font-size="15" fill="#555">名前→IP</text></g>
    <text x="490" y="84" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <g><rect class="card" x="508" y="50" width="140" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="578" y="74" font-weight="700">インターネット</text><text x="578" y="95" font-size="15" fill="#555">ルータのリレー</text></g>
    <text x="666" y="84" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <g><rect class="card" x="684" y="50" width="120" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="744" y="74" font-weight="700">Webサーバ</text><text x="744" y="95" font-size="15" fill="#555">HTML/HTTPS</text></g>
    <text x="822" y="84" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect class="card" x="840" y="50" width="100" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2.5"/><text x="890" y="83" font-weight="700" fill="#A6192E">表示</text></g>
  </g>
  <!-- 3つのPartで回収 -->
  <g font-size="16" text-anchor="middle" fill="#333">
    <rect class="card" x="60" y="150" width="420" height="92" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="270" y="176" font-weight="700" font-size="17">Part 1 ネットワークの旅（動画1〜7）</text>
    <text x="270" y="200" fill="#555">基礎 → IP・ポート → TCP/IP・OSI → パケット配送</text>
    <text x="270" y="222" fill="#555">→ DNS・URL・HTML → 暗号・公開鍵・署名で安全に</text>
    <rect class="card" x="500" y="150" width="220" height="92" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="610" y="176" font-weight="700" font-size="17">Part 2 データ（動画8〜9）</text>
    <text x="610" y="200" fill="#555">DB・SQLで構造化</text>
    <text x="610" y="222" fill="#555">分析＝相関≠因果</text>
    <rect class="card" x="740" y="150" width="180" height="92" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="830" y="176" font-weight="700" font-size="17">Part 3 クラウド</text>
    <text x="830" y="200" fill="#555">IaaS/PaaS/SaaS</text>
    <text x="830" y="222" fill="#555">GCPで実験（動画10）</text>
  </g>
  <text x="490" y="268" text-anchor="middle" font-size="16" fill="#A6192E" font-weight="700">バラバラに見えた10本の動画が、1本の「旅」でつながった</text>
</svg>
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
