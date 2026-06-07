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
  /* fig + 付随ブロックが多い回向け：図を中央に浮かせず上から詰める（下端の予約余白も縮める） */
  section.fig.packtop { display:flex !important; flex-direction:column; justify-content:flex-start; gap:6px; padding-bottom:32px !important; }
  section.fig.packtop .fig-area { min-height:0; flex:0 0 auto; padding:2px 0; }
  section.fig.packtop .callout-blue .h { display:inline; font-weight:700; color:#2a5680; }
  /* 研究の裏づけボックス(右カラム圧縮版) */
  .concept-section { background:#F6F7F9; border-left:5px solid var(--accent); border-radius:8px; padding:7px 14px; margin:8px 0; }
  .concept-title { font-weight:700; color:var(--accent); font-size:18px; margin-bottom:3px; }
  .concept-desc { font-size:18px; line-height:1.4; margin:0; }
  .paper-details { margin-top:5px; padding:5px 11px; background:#fff; border:1px solid #e7e7ea; border-radius:6px; font-size:14px; color:#555; line-height:1.55; }
  .paper-details strong { color:var(--accent); font-weight:700; }
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
<!-- _class: split -->

<div class="page-title">箱ひげ図・ばらつき</div>

## 散らばりを「数値」と「図」で表す

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
