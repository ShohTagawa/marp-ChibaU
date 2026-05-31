---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ-08</div><img class="hdr-logo" src="./assets/logo-info-literacy.svg">'
footer: ''
style: |
  section::after { left: 28px; right: auto; }
  section svg { max-width: 100%; height: auto; }
  .important { display:inline-block; background:#FBE0E0; color:#B11C1C; font-weight:700; font-size:19px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.14em; vertical-align:middle; border:1px solid #f0c4c4; }
  .cbox { border-radius:10px; overflow:hidden; background:#F6F7F9; margin:8px 0; border:1px solid #e7e7ea; }
  .cbox > .h { color:#fff; font-weight:700; padding:6px 18px; font-size:20px; }
  .cbox > .b { padding:8px 18px 10px; font-size:19px; }
  .cbox.blue   > .h { background:#3E78B2; }
  .cbox.green  > .h { background:#3C8A57; }
  .cbox.orange > .h { background:#D98A2B; }
  .cbox.gray   > .h { background:#6B6F76; }
  .cbox.red    > .h { background:var(--accent); }
  .cbox .b ul { margin:3px 0 3px 1.1em; }
  .cbox .b li { margin:2px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:22px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:25px; margin-top:10px; }
  .ask { background:#FBEFC8; border:1px solid #ecd98f; border-radius:10px; padding:9px 18px 9px 52px; margin:9px 0; font-weight:700; font-size:20px; position:relative; }
  .ask::before { content:"？"; position:absolute; left:13px; top:50%; transform:translateY(-50%); width:28px; height:28px; line-height:28px; text-align:center; border-radius:50%; background:var(--accent); color:#fff; font-size:18px; }
  .ask.hand::before { content:"\270B"; background:#D98A2B; }
  .hl-pink { background:#FAE1E2; padding:0 4px; border-radius:3px; }
  .hl-yellow { background:#FBEFC8; padding:0 4px; border-radius:3px; }
  .hl-green { background:#DDEBC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:14px; color:#999; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c4a0a8; border-radius:8px; background:#fdf6f7; color:#a86b76; display:flex; align-items:center; justify-content:center; text-align:center; font-size:16px; font-weight:700; padding:10px; }
---

<!-- _class: cover -->

# ネットワークの仕組みと<br>インターネット

## 情報リテラシ 第8回 ／ オンデマンド講義（全10本）

### 千葉大学 情報リテラシー

<div class="meta">第2ターム ・ 1本 約8〜18分（合計 約130分）／ 視聴期限内に全本を視聴してください</div>

---

<!-- _class: fig -->

<div class="page-title">この回の地図</div>

## 「URLを入れてからページが出るまで」を最後まで追う

<div class="fig-area">
<svg viewBox="0 0 980 250" width="100%" style="max-height:300px">
  <line x1="40" y1="80" x2="940" y2="80" stroke="#ddd" stroke-width="3"/>
  <g font-size="14" text-anchor="middle">
    <g><rect x="30" y="50" width="110" height="60" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="85" y="76" font-weight="700">あなたの端末</text><text x="85" y="95" fill="#777">スマホ/PC</text></g>
    <text x="160" y="85" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect x="180" y="50" width="110" height="60" rx="10" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="235" y="76" font-weight="700">Wi-Fi / LAN</text><text x="235" y="95" fill="#777">ルータ</text></g>
    <text x="310" y="85" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect x="330" y="50" width="110" height="60" rx="10" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="385" y="76" font-weight="700">DNS</text><text x="385" y="95" fill="#777">名前→IP</text></g>
    <text x="460" y="85" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect x="480" y="50" width="150" height="60" rx="10" fill="#fff" stroke="#D98A2B" stroke-width="2"/><text x="555" y="76" font-weight="700">インターネット</text><text x="555" y="95" fill="#777">ルータのリレー</text></g>
    <text x="650" y="85" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect x="670" y="50" width="110" height="60" rx="10" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="725" y="76" font-weight="700">Webサーバ</text><text x="725" y="95" fill="#777">HTML</text></g>
    <text x="800" y="85" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <g><rect x="820" y="50" width="120" height="60" rx="10" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="880" y="83" font-weight="700">ページ表示</text></g>
  </g>
  <g font-size="14" text-anchor="middle" fill="#333">
    <rect x="120" y="160" width="300" height="56" rx="8" fill="#eef4fa"/><text x="270" y="185" font-weight="700">Part 1 ネットワークの旅（動画1〜7）</text><text x="270" y="205" fill="#666">基礎→IP→階層→配送→名前→安全</text>
    <rect x="440" y="160" width="240" height="56" rx="8" fill="#eef7ef"/><text x="560" y="185" font-weight="700">Part 2 データ（動画8〜9）</text><text x="560" y="205" fill="#666">DB・SQL / データ分析</text>
    <rect x="700" y="160" width="200" height="56" rx="8" fill="#fdf3e8"/><text x="800" y="185" font-weight="700">Part 3 クラウド（動画10）</text><text x="800" y="205" fill="#666">GCPで学び続ける</text>
  </g>
</svg>
</div>

<div class="caption">暗記してほしい厳選項目には <span class="important">重要</span> を付けています。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 1 ／ CHAPTER 1</div>

# 学び方と、この講義の地図

## 学びの「モード」を増やす（約8分）

---

<!-- _class: split -->

<div class="page-title">学び方</div>

## 情報の集め方は、1つじゃない

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 320" width="100%" style="max-height:330px">
  <circle cx="180" cy="160" r="58" fill="#A6192E"/>
  <text x="180" y="155" fill="#fff" font-size="22" font-weight="800" text-anchor="middle">学び</text>
  <text x="180" y="180" fill="#fff" font-size="14" text-anchor="middle">5つのモード</text>
  <g font-size="15" font-weight="700" text-anchor="middle">
    <line x1="180" y1="102" x2="180" y2="55" stroke="#bbb" stroke-width="2"/>
    <rect x="120" y="20" width="120" height="38" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="180" y="44">① 実験する</text>
    <line x1="234" y1="128" x2="300" y2="92" stroke="#bbb" stroke-width="2"/>
    <rect x="250" y="70" width="105" height="38" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="302" y="94">② ネット</text>
    <line x1="238" y1="190" x2="305" y2="225" stroke="#bbb" stroke-width="2"/>
    <rect x="255" y="208" width="100" height="38" rx="8" fill="#fff" stroke="#D98A2B" stroke-width="2"/><text x="305" y="232">③ AI</text>
    <line x1="180" y1="218" x2="180" y2="262" stroke="#bbb" stroke-width="2"/>
    <rect x="118" y="262" width="124" height="38" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="180" y="286">④ 人に聞く</text>
    <line x1="122" y1="190" x2="55" y2="225" stroke="#bbb" stroke-width="2"/>
    <rect x="5" y="208" width="110" height="38" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="60" y="232">⑤ 本・論文</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">大学という「場」の価値</div><div class="b">

- <span class="red">安全に失敗</span>でき、人の経験・実践知を聞ける
- 図書館では大学院生（LS）が質問に対応
- 「教科書とAIだけで完結」はもったいない

</div></div>

<div class="ask">あなたが「分からないこと」に出会ったとき、最初にやるのはどのモード？</div>

</div>
</div>

<div class="takeaway">全部を一人で分かる必要はない。複数のモードを行き来する。</div>

---

<!-- _class: split -->

<div class="page-title">AIとの付き合い方</div>

## 浅く聞けば浅い／文脈を与えれば深い

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 300" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <text x="95" y="28" font-size="15" font-weight="700">浅い質問</text>
    <rect x="60" y="40" width="70" height="40" rx="6" fill="#ECECEC"/><text x="95" y="65" font-size="13">ひとこと</text>
    <text x="95" y="100" font-size="20" fill="#A6192E" font-weight="800">↓</text>
    <rect x="55" y="110" width="80" height="46" rx="6" fill="#f3d6d6"/><text x="95" y="132" font-size="13">浅い答え</text><text x="95" y="148" font-size="11" fill="#888">表面的</text>
    <text x="265" y="28" font-size="15" font-weight="700">文脈を与える</text>
    <rect x="210" y="40" width="120" height="40" rx="6" fill="#DDEBC8"/><text x="270" y="58" font-size="12">自分の理解＋</text><text x="270" y="73" font-size="12">論文・資料</text>
    <text x="270" y="100" font-size="20" fill="#3C8A57" font-weight="800">↓</text>
    <rect x="205" y="110" width="130" height="80" rx="6" fill="#cfe6b8"/><text x="270" y="138" font-size="13" font-weight="700">深く充実した</text><text x="270" y="156" font-size="13" font-weight="700">答え</text><text x="270" y="176" font-size="11" fill="#567a3a">同じAIでも別物</text>
    <text x="180" y="250" font-size="14" fill="#555">入力の質が、出力の質を決める</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">良い使い方（前回の自由記述より）</div><div class="b">

- 丸投げせず<span class="red">主体的・補助的</span>に使う
- 学びを<span class="red">深く・広く</span>するために
- 誤情報・<span class="red">ハルシネーション</span>は必ず確認

</div></div>

<div class="cbox gray"><div class="h">学び方</div><div class="b">

- 実践で習得／中身を理解／<span class="red">外部リソース</span>で裏取り

</div></div>

</div>
</div>

<div class="takeaway">AIは「軸」ではなく、自分を鍛える複数の方法の「1モード」。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 2 ／ CHAPTER 2</div>

# ネットワークの基礎

## LAN・WAN・Wi-Fi（約14分）

---

<!-- _class: fig -->

<div class="page-title">ネットワークとは</div>

## インターネット＝ネットワーク同士を繋いだ「網の網」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 960 250" width="100%" style="max-height:280px">
  <ellipse cx="160" cy="130" rx="130" ry="90" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="160" y="55" font-size="15" font-weight="700" text-anchor="middle" fill="#3E78B2">家のLAN</text>
  <g fill="#3E78B2"><circle cx="110" cy="120" r="12"/><circle cx="160" cy="150" r="12"/><circle cx="210" cy="120" r="12"/></g>
  <ellipse cx="800" cy="130" rx="130" ry="90" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
  <text x="800" y="55" font-size="15" font-weight="700" text-anchor="middle" fill="#3C8A57">大学のLAN</text>
  <g fill="#3C8A57"><circle cx="750" cy="120" r="12"/><circle cx="800" cy="150" r="12"/><circle cx="850" cy="120" r="12"/></g>
  <ellipse cx="480" cy="130" rx="150" ry="70" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="480" y="135" font-size="18" font-weight="800" text-anchor="middle" fill="#D98A2B">WAN（広域網）</text>
  <text x="480" y="160" font-size="13" text-anchor="middle" fill="#a06a1d">通信事業者の回線</text>
  <line x1="285" y1="130" x2="335" y2="130" stroke="#A6192E" stroke-width="3"/>
  <rect x="290" y="115" width="34" height="30" rx="5" fill="#A6192E"/><text x="307" y="135" font-size="11" fill="#fff" text-anchor="middle">R</text>
  <line x1="625" y1="130" x2="675" y2="130" stroke="#A6192E" stroke-width="3"/>
  <rect x="636" y="115" width="34" height="30" rx="5" fill="#A6192E"/><text x="653" y="135" font-size="11" fill="#fff" text-anchor="middle">R</text>
</svg>
</div>

<div class="caption"><span class="red">LAN</span>＝家・学校など限られた範囲／<span class="red">WAN</span>＝広域。LANをWANに繋ぐ装置が<span class="red">ルーター(R)</span>。</div>

<div class="takeaway">「相互に接続されたネットワーク（inter-network）」＝インターネット。</div>

---

<!-- _class: split -->

<div class="page-title">サーバとクライアント</div>

## 役割は「相対的」── 提供すればサーバ、利用すればクライアント

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 240" width="100%" style="max-height:250px">
  <rect x="20" y="90" width="120" height="70" rx="10" fill="#fff" stroke="#3E78B2" stroke-width="2"/>
  <text x="80" y="120" font-size="15" font-weight="700" text-anchor="middle">クライアント</text>
  <text x="80" y="142" font-size="12" fill="#777" text-anchor="middle">利用する側</text>
  <rect x="220" y="90" width="120" height="70" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2"/>
  <text x="280" y="120" font-size="15" font-weight="700" text-anchor="middle">サーバ</text>
  <text x="280" y="142" font-size="12" fill="#777" text-anchor="middle">提供する側</text>
  <line x1="140" y1="110" x2="220" y2="110" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#a1)"/>
  <text x="180" y="103" font-size="12" text-anchor="middle" fill="#3C8A57">リクエスト</text>
  <line x1="220" y1="140" x2="140" y2="140" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#a2)"/>
  <text x="180" y="135" font-size="12" text-anchor="middle" fill="#D98A2B">レスポンス</text>
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
  </defs>
  <text x="180" y="200" font-size="13" fill="#555" text-anchor="middle">ネットに繋がる全機器＝「ホスト」</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">クライアントサーバシステム <span class="important" style="margin-left:6px">重要</span></div><div class="b">

- <span class="red">サーバ</span>＝提供／<span class="red">クライアント</span>＝利用
- 全コンピュータ＝<span class="red">ホスト</span>

</div></div>

<div class="cbox gray"><div class="h">「相対的」とは</div><div class="b">

- 自分のノートPCを<span class="red">サーバ</span>にもできる
- 役割は固定ではなく、その時の関係で決まる

</div></div>

</div>
</div>

<div class="takeaway">「サーバ／クライアント」は機械の種類ではなく“役割”の名前。</div>

---

<!-- _class: split -->

<div class="page-title">有線LANと無線LAN</div>

## つなぎ方：ケーブル（有線）か、電波（無線）か

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 250" width="100%" style="max-height:255px">
  <text x="90" y="20" font-size="14" font-weight="700" text-anchor="middle">有線（ハブ）</text>
  <rect x="55" y="100" width="70" height="26" rx="5" fill="#3E78B2"/><text x="90" y="118" font-size="12" fill="#fff" text-anchor="middle">ハブ</text>
  <g stroke="#3E78B2" stroke-width="2"><line x1="70" y1="100" x2="40" y2="60"/><line x1="90" y1="100" x2="90" y2="55"/><line x1="110" y1="100" x2="140" y2="60"/></g>
  <g fill="#fff" stroke="#3E78B2" stroke-width="2"><rect x="22" y="40" width="36" height="24" rx="4"/><rect x="72" y="35" width="36" height="24" rx="4"/><rect x="122" y="40" width="36" height="24" rx="4"/></g>
  <text x="270" y="20" font-size="14" font-weight="700" text-anchor="middle">無線（AP）</text>
  <rect x="250" y="100" width="40" height="28" rx="5" fill="#3C8A57"/><text x="270" y="119" font-size="11" fill="#fff" text-anchor="middle">AP</text>
  <g fill="none" stroke="#3C8A57" stroke-width="2"><path d="M295 110 q18 -6 18 14"/><path d="M295 118 q26 -8 26 22"/><path d="M245 110 q-18 -6 -18 14"/><path d="M245 118 q-26 -8 -26 22"/></g>
  <g fill="#fff" stroke="#3C8A57" stroke-width="2"><rect x="318" y="120" width="30" height="22" rx="4"/><rect x="195" y="120" width="30" height="22" rx="4"/></g>
  <text x="180" y="180" font-size="13" fill="#555" text-anchor="middle">速度：有線 100Mbps〜10Gbps</text>
  <text x="180" y="205" font-size="13" fill="#555" text-anchor="middle">Wi-Fi 6（11ax）最大 9.6Gbps</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">有線LAN（イーサネット）</div><div class="b">

- 規格＝<span class="red">Ethernet</span>。配線は「より対線」
- <span class="red">ハブ</span>に機器をケーブル接続

</div></div>

<div class="cbox green"><div class="h">無線LAN（Wi-Fi）</div><div class="b">

- 規格＝<span class="red">IEEE 802.11</span>（11ax＝Wi-Fi 6）
- <span class="red">アクセスポイント（親機）</span>に電波で接続
- 互換が保証された機器の名称が <span class="red">Wi-Fi</span>

</div></div>

</div>
</div>

<div class="takeaway">同じ「LAN」でも、ケーブルか電波かで規格・装置が変わる。</div>

---

<!-- _class: fig -->

<div class="page-title">WAN・モバイル通信</div>

## スマホもWANに繋がり、IPアドレスを持つ

<div class="fig-area">
<div class="grid2" style="width:96%;align-items:center">
<div>
<svg viewBox="0 0 460 180" width="100%" style="max-height:200px">
  <rect x="10" y="80" width="50" height="34" rx="5" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="35" y="102" font-size="11" text-anchor="middle">スマホ</text>
  <g fill="none" stroke="#D98A2B" stroke-width="2"><path d="M65 90 q14 -6 14 12"/><path d="M65 98 q22 -8 22 20"/></g>
  <path d="M120 110 L105 60 L135 60 Z" fill="#D98A2B"/><line x1="120" y1="60" x2="120" y2="40" stroke="#D98A2B" stroke-width="3"/><text x="120" y="128" font-size="11" text-anchor="middle">基地局</text>
  <line x1="135" y1="95" x2="200" y2="95" stroke="#3C8A57" stroke-width="3"/><text x="167" y="86" font-size="11" text-anchor="middle" fill="#3C8A57">光ファイバ</text>
  <rect x="200" y="78" width="90" height="36" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="245" y="100" font-size="12" text-anchor="middle">基幹網</text>
  <line x1="290" y1="95" x2="350" y2="95" stroke="#A6192E" stroke-width="3"/>
  <ellipse cx="400" cy="95" rx="50" ry="34" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="400" y="100" font-size="13" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
</svg>
</div>
<div>

| 世代 | 開始 | 最大速度 |
|---|---|---|
| <span class="red">5G</span> | 2020〜 | 約 20Gbps |
| 4G | — | 50M〜1Gbps |
| LTE | 2012頃〜 | 100Mbps以上 |

</div>
</div>
</div>

<div class="ask hand">挙手：自分のスマホが今「Wi-Fi」と「モバイル通信」どちらで繋がっているか分かる人？</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 3 ／ CHAPTER 3 ★核</div>

# IPアドレスとサブネット・ポート

## 「住所」のしくみ（約18分）

---

<!-- _class: fig -->

<div class="page-title">IPアドレスの基礎</div>

## IPアドレス＝ネット上の「住所」（32ビット） <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 920 210" width="100%" style="max-height:240px">
  <g text-anchor="middle">
    <g><rect x="30" y="40" width="190" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="125" y="78" font-size="34" font-weight="800">192</text></g>
    <text x="240" y="78" font-size="28" font-weight="800">.</text>
    <g><rect x="260" y="40" width="190" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="355" y="78" font-size="34" font-weight="800">168</text></g>
    <text x="470" y="78" font-size="28" font-weight="800">.</text>
    <g><rect x="490" y="40" width="190" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="585" y="78" font-size="34" font-weight="800">100</text></g>
    <text x="700" y="78" font-size="28" font-weight="800">.</text>
    <g><rect x="720" y="40" width="170" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="805" y="78" font-size="34" font-weight="800">10</text></g>
    <g font-family="Menlo,monospace" font-size="18" fill="#7d1322">
      <rect x="30" y="115" width="190" height="34" rx="5" fill="#F8E5EA"/><text x="125" y="138">11000000</text>
      <rect x="260" y="115" width="190" height="34" rx="5" fill="#F8E5EA"/><text x="355" y="138">10101000</text>
      <rect x="490" y="115" width="190" height="34" rx="5" fill="#F8E5EA"/><text x="585" y="138">01100100</text>
      <rect x="720" y="115" width="170" height="34" rx="5" fill="#F8E5EA"/><text x="805" y="138">00001010</text>
    </g>
    <text x="125" y="180" font-size="14" fill="#777">8ビット</text><text x="355" y="180" font-size="14" fill="#777">8ビット</text><text x="585" y="180" font-size="14" fill="#777">8ビット</text><text x="805" y="180" font-size="14" fill="#777">8ビット</text>
  </g>
</svg>
</div>

<div class="caption">32ビットを 8ビット ずつ 4つに区切り、10進法で表記（各オクテットは <span class="red">0〜255</span>）</div>

<div class="takeaway">接続する全コンピュータに固有のIPを割り当て、相手を識別する。</div>

---

<!-- _class: split -->

<div class="page-title">サブネットとCIDR</div>

## IPは「ネットワーク部」＋「ホスト部」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 270" width="100%" style="max-height:280px">
  <text x="190" y="20" font-size="14" font-weight="700" text-anchor="middle">/24 ＝ 上位24ビットがネットワーク部</text>
  <g>
    <rect x="10" y="35" width="270" height="40" rx="5" fill="#3E78B2"/><text x="145" y="60" font-size="14" fill="#fff" font-weight="700" text-anchor="middle">ネットワーク部（24）</text>
    <rect x="282" y="35" width="88" height="40" rx="5" fill="#D98A2B"/><text x="326" y="60" font-size="13" fill="#fff" font-weight="700" text-anchor="middle">ホスト(8)</text>
  </g>
  <g font-family="Menlo,monospace" font-size="15" text-anchor="middle">
    <text x="120" y="120" font-weight="700">192.168.100.</text><text x="250" y="120" fill="#D98A2B" font-weight="700">10</text>
    <text x="120" y="150" font-weight="700">192.168.100.</text><text x="250" y="150" fill="#D98A2B" font-weight="700">20</text>
  </g>
  <rect x="40" y="100" width="200" height="58" rx="8" fill="none" stroke="#3E78B2" stroke-width="2"/>
  <text x="140" y="178" font-size="13" fill="#3E78B2" text-anchor="middle">ネットワーク部が同じ</text>
  <text x="140" y="196" font-size="13" fill="#3E78B2" font-weight="700" text-anchor="middle">＝ 同じネットワーク</text>
  <g font-family="Menlo,monospace" font-size="15" text-anchor="middle">
    <text x="190" y="235" font-weight="700">10.0.0.</text><text x="250" y="235" fill="#D98A2B" font-weight="700">5</text>
  </g>
  <text x="190" y="258" font-size="12" fill="#A6192E" text-anchor="middle">↑ ネットワーク部が違う＝別ネットワーク</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">サブネットマスク</div><div class="b">

- どこまでがネットワーク部かを示すビット列
- <span class="red">/24</span> ＝ 上位24ビット
- 残り8ビット（256個）がホスト用

</div></div>

<div class="ask">同じWi-Fiに繋いだ友だちと、あなたの「ネットワーク部」は同じになる？</div>

</div>
</div>

<div class="takeaway">「同じネットワークにいるか？」はネットワーク部が一致するかで決まる。</div>

---

<!-- _class: fig -->

<div class="page-title">NATとIPの節約</div>

## LAN内はプライベート、世界に出る時だけグローバル <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 940 230" width="100%" style="max-height:260px">
  <rect x="20" y="40" width="300" height="160" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="170" y="65" font-size="15" font-weight="700" text-anchor="middle" fill="#3E78B2">家のLAN（プライベートIP）</text>
  <g font-family="Menlo,monospace" font-size="13" text-anchor="middle">
    <rect x="45" y="90" width="120" height="34" rx="5" fill="#fff" stroke="#3E78B2"/><text x="105" y="112">192.168.0.2</text>
    <rect x="45" y="140" width="120" height="34" rx="5" fill="#fff" stroke="#3E78B2"/><text x="105" y="162">192.168.0.3</text>
    <rect x="185" y="115" width="120" height="34" rx="5" fill="#fff" stroke="#3E78B2"/><text x="245" y="137">192.168.0.4</text>
  </g>
  <rect x="360" y="95" width="120" height="60" rx="8" fill="#A6192E"/><text x="420" y="120" font-size="15" fill="#fff" font-weight="700" text-anchor="middle">ルータ</text><text x="420" y="140" font-size="13" fill="#fff" text-anchor="middle">NAT</text>
  <line x1="320" y1="125" x2="360" y2="125" stroke="#888" stroke-width="3"/>
  <line x1="480" y1="125" x2="560" y2="125" stroke="#888" stroke-width="3"/>
  <g font-family="Menlo,monospace" font-size="14" text-anchor="middle"><rect x="560" y="105" width="160" height="40" rx="6" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/><text x="640" y="130" font-weight="700" fill="#a06a1d">203.0.113.7</text></g>
  <text x="640" y="165" font-size="12" text-anchor="middle" fill="#a06a1d">グローバルIP（1つ）</text>
  <line x1="720" y1="125" x2="780" y2="125" stroke="#888" stroke-width="3"/>
  <ellipse cx="860" cy="125" rx="65" ry="45" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="860" y="130" font-size="15" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
</svg>
</div>

<div class="caption">グローバルIPは<span class="red">ICANN</span>が管理。IPv4＝32ビット＝約43億個 → 枯渇 → <span class="red">IPv6＝128ビット</span>で事実上無限。</div>

<div class="takeaway">多数の機器を、ルータの1つのグローバルIPで使い回す仕組み＝NAT。</div>

---

<!-- _class: split -->

<div class="page-title">ポート番号</div>

## IPは「建物の住所」、ポートは「部屋番号」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 320 260" width="100%" style="max-height:265px">
  <rect x="60" y="40" width="200" height="200" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2.5"/>
  <rect x="60" y="40" width="200" height="40" rx="8" fill="#6B6F76"/>
  <text x="160" y="66" font-size="15" fill="#fff" font-weight="700" text-anchor="middle" font-family="Menlo,monospace">203.0.113.5</text>
  <g text-anchor="middle" font-family="Menlo,monospace">
    <rect x="80" y="95" width="160" height="38" rx="6" fill="#F8E5EA"/><text x="160" y="120" font-size="16" font-weight="700">:80　HTTP</text>
    <rect x="80" y="143" width="160" height="38" rx="6" fill="#F8E5EA"/><text x="160" y="168" font-size="16" font-weight="700">:443　HTTPS</text>
    <rect x="80" y="191" width="160" height="38" rx="6" fill="#F8E5EA"/><text x="160" y="216" font-size="16" font-weight="700">:8000　自作</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">IP:port で「サービス」を指定</div><div class="b">

- 1台のホストで<span class="red">複数のサービス</span>を運用できる
- well-known：<span class="red">80=HTTP</span> / <span class="red">443=HTTPS</span>
- 自分のPC内は <span class="mono">localhost:8000</span>（=127.0.0.1）

</div></div>

<div class="band"><span class="mono">192.0.2.1:443</span> ＝「この住所の 443号室（HTTPS）へ届けて」</div>

</div>
</div>

---

<div class="page-title">ワーク③</div>

## ワーク：自分のIPアドレスを考えてみよう

<div class="grid2">
<div>

<div class="cbox blue"><div class="h">🔧 紙とペアで考える</div><div class="b">

- ① 今の端末は <span class="red">自宅Wi-Fi / 大学Wi-Fi / モバイル</span> のどれ？
- ② そのIPは <span class="red">グローバル</span>？ <span class="red">プライベート</span>？
- ③ 自宅ルータの<span class="red">グローバルIPは何個</span>？（ヒント：NAT）
- ④ 友だちと<span class="red">ネットワーク部</span>は同じ？

</div></div>

</div>
<div>

<div class="ph" style="height:220px">［ここに自分のIP確認画面のスクショを貼る］<br>例：スマホのWi-Fi詳細 / 端末のIP表示<br>（画像はこちらで差し込みます）</div>

</div>
</div>

<div class="statement">「住所のしくみ」を自分の環境に当てはめると、いちばん腹落ちする。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 4 ／ CHAPTER 4</div>

# プロトコルと階層モデル

## TCP/IP と OSI参照モデル（約12分）

---

<!-- _class: split -->

<div class="page-title">プロトコルとは</div>

## 通信プロトコル＝あらかじめ定めた「規約・手順」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <circle cx="80" cy="90" r="34" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="80" y="95" font-size="13" text-anchor="middle">ピッチャー</text>
  <circle cx="280" cy="90" r="34" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="280" y="95" font-size="13" text-anchor="middle">キャッチャー</text>
  <line x1="246" y1="78" x2="114" y2="78" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#pa)"/>
  <text x="180" y="70" font-size="12" text-anchor="middle" fill="#3C8A57">サイン</text>
  <line x1="114" y1="102" x2="246" y2="102" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#pb)"/>
  <text x="180" y="120" font-size="12" text-anchor="middle" fill="#D98A2B">頷く／首を振る</text>
  <defs>
    <marker id="pa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="pb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
  </defs>
  <text x="180" y="175" font-size="13" fill="#555" text-anchor="middle">「事前に取り決めた合図」があるから</text>
  <text x="180" y="197" font-size="13" fill="#555" text-anchor="middle">意思疎通できる ＝ プロトコル</text>
</svg>

</div>
<div class="right">

<div class="cbox gray"><div class="h">身近な例</div><div class="b">

- 固定電話のモデム／野球のサイン交換
- 語源は「<span class="red">外交儀礼</span>」→ ITでは「規約・手順」

</div></div>

<div class="cbox green"><div class="h">世界共通だから繋がる</div><div class="b">

- スマホで送ったメールをPCで受信できる
- ハード・ソフトが違っても通信できるのは<span class="red">プロトコルが世界共通</span>だから

</div></div>

</div>
</div>

<div class="ask">「同じ言葉・同じ手順」を決めておかないと、何が困ると思う？</div>

---

<!-- _class: fig -->

<div class="page-title">TCP/IP と OSI</div>

## TCP/IP「4階層」 ↔ OSI参照モデル「7階層」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 250" width="100%" style="max-height:270px">
  <text x="230" y="22" font-size="15" font-weight="700" text-anchor="middle">TCP/IP（4階層）</text>
  <text x="670" y="22" font-size="15" font-weight="700" text-anchor="middle">OSI参照モデル（7階層・ISO）</text>
  <g font-size="14" fill="#fff" text-anchor="middle">
    <rect x="40" y="35" width="380" height="44" rx="6" fill="#3E78B2"/><text x="230" y="62">アプリケーション層　HTTP / SMTP / POP / IMAP</text>
    <rect x="40" y="85" width="380" height="44" rx="6" fill="#3C8A57"/><text x="230" y="112">トランスポート層　TCP（ポート・信頼性）</text>
    <rect x="40" y="135" width="380" height="44" rx="6" fill="#D98A2B"/><text x="230" y="162">インターネット層　IP（IPアドレス）</text>
    <rect x="40" y="185" width="380" height="44" rx="6" fill="#6B6F76"/><text x="230" y="212">ネットワークIF層　Ethernet</text>
    <rect x="500" y="35" width="360" height="44" rx="6" fill="#3E78B2"/><text x="680" y="62">7 アプリ / 6 プレゼン / 5 セッション</text>
    <rect x="500" y="85" width="360" height="44" rx="6" fill="#3C8A57"/><text x="680" y="112">4 トランスポート</text>
    <rect x="500" y="135" width="360" height="44" rx="6" fill="#D98A2B"/><text x="680" y="162">3 ネットワーク</text>
    <rect x="500" y="185" width="360" height="44" rx="6" fill="#6B6F76"/><text x="680" y="212">2 データリンク / 1 物理</text>
  </g>
  <g stroke="#bbb" stroke-width="1.5" stroke-dasharray="4 3">
    <line x1="420" y1="57" x2="500" y2="57"/><line x1="420" y1="107" x2="500" y2="107"/><line x1="420" y1="157" x2="500" y2="157"/><line x1="420" y1="207" x2="500" y2="207"/>
  </g>
</svg>
</div>

<div class="caption">IPを知った今、各層は「やることの整理棚」として読める。</div>

---

<!-- _class: split -->

<div class="page-title">カプセル化</div>

## 各層が「宛名（ヘッダ）」を足して包んでいく

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <rect x="10" y="40" width="340" height="150" rx="8" fill="#6B6F76"/><text x="30" y="60" font-size="13" fill="#fff" font-weight="700">Ethernet</text>
  <rect x="45" y="68" width="270" height="112" rx="8" fill="#D98A2B"/><text x="62" y="88" font-size="13" fill="#fff" font-weight="700">IP</text>
  <rect x="80" y="96" width="200" height="76" rx="8" fill="#3C8A57"/><text x="96" y="116" font-size="13" fill="#fff" font-weight="700">TCP</text>
  <rect x="112" y="124" width="136" height="40" rx="8" fill="#3E78B2"/><text x="180" y="149" font-size="13" fill="#fff" font-weight="700" text-anchor="middle">HTTP データ</text>
  <text x="180" y="215" font-size="13" fill="#555" text-anchor="middle">受信側は逆順にヘッダを外す</text>
</svg>

</div>
<div class="right">

<div class="cbox gray"><div class="h">パケットができるまで</div><div class="b">

- 上位（アプリ）→下位（物理）へ、各層が<span class="red">ヘッダ</span>を付与
- まとめて小包（<span class="red">パケット</span>）にして送出
- 受信側は逆順にヘッダを外して中身を取り出す

</div></div>

<div class="band">郵便でいう「便箋 → 封筒 → 宛名 → 区分け袋」</div>

</div>
</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 5 ／ CHAPTER 5</div>

# パケット交換・ルーティング・信頼性

## どうやって届くのか（約15分）

---

<!-- _class: fig -->

<div class="page-title">2つの通信方式</div>

## 回線交換 vs パケット交換 <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<svg viewBox="0 0 400 170" width="100%" style="max-height:185px">
  <text x="200" y="18" font-size="14" font-weight="700" text-anchor="middle">回線交換（電話）</text>
  <circle cx="40" cy="90" r="22" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="40" y="95" font-size="13" text-anchor="middle">A</text>
  <circle cx="360" cy="90" r="22" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="360" y="95" font-size="13" text-anchor="middle">B</text>
  <line x1="62" y1="90" x2="338" y2="90" stroke="#A6192E" stroke-width="6"/>
  <text x="200" y="125" font-size="13" fill="#A6192E" text-anchor="middle">回線を占有（他は使えない）</text>
</svg>
</div>
<div>
<svg viewBox="0 0 400 170" width="100%" style="max-height:185px">
  <text x="200" y="18" font-size="14" font-weight="700" text-anchor="middle">パケット交換（インターネット）</text>
  <circle cx="40" cy="90" r="22" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="40" y="95" font-size="13" text-anchor="middle">A</text>
  <circle cx="360" cy="90" r="22" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="360" y="95" font-size="13" text-anchor="middle">B</text>
  <g font-size="11" fill="#fff" text-anchor="middle">
    <rect x="90" y="50" width="34" height="22" rx="4" fill="#3E78B2"/><text x="107" y="66">1</text>
    <rect x="150" y="95" width="34" height="22" rx="4" fill="#D98A2B"/><text x="167" y="111">2</text>
    <rect x="210" y="55" width="34" height="22" rx="4" fill="#3C8A57"/><text x="227" y="71">3</text>
    <rect x="265" y="100" width="34" height="22" rx="4" fill="#A6192E"/><text x="282" y="116">4</text>
  </g>
  <text x="200" y="150" font-size="13" fill="#3C8A57" text-anchor="middle">小分け＋送り状で個別に発送</text>
</svg>
</div>
</div>
</div>

<div class="ask">電話は「話し中」になるのに、ネットはみんなで同時に使える。なぜ？</div>

---

<!-- _class: fig -->

<div class="page-title">ルーティング</div>

## ルーターが宛先IPを見て「次の一歩」を選ぶ

<div class="fig-area">
<svg viewBox="0 0 900 230" width="100%" style="max-height:250px">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="95" width="90" height="44" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="65" y="122" font-weight="700">あなたのPC</text>
    <circle cx="230" cy="70" r="26" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="230" y="75">R1</text>
    <circle cx="230" cy="170" r="26" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="230" y="175">R2</text>
    <circle cx="450" cy="120" r="26" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="450" y="125">R3</text>
    <circle cx="650" cy="70" r="26" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="650" y="75">R4</text>
    <circle cx="650" cy="170" r="26" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="650" y="175">R5</text>
    <rect x="790" y="95" width="90" height="44" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="835" y="122" font-weight="700">サーバ</text>
  </g>
  <g stroke="#ccc" stroke-width="2"><line x1="110" y1="117" x2="208" y2="170"/><line x1="256" y1="170" x2="430" y2="135"/><line x1="256" y1="70" x2="624" y2="70"/><line x1="450" y1="146" x2="630" y2="160"/><line x1="676" y1="170" x2="790" y2="125"/></g>
  <g stroke="#A6192E" stroke-width="4"><line x1="110" y1="113" x2="206" y2="78"/><line x1="256" y1="70" x2="430" y2="110"/><line x1="470" y1="135" x2="632" y2="165"/><line x1="676" y1="165" x2="790" y2="123"/></g>
  <text x="450" y="218" font-size="13" fill="#A6192E" text-anchor="middle">赤＝今回たどった最短経路（経路制御表で判断）</text>
</svg>
</div>

<div class="caption">各ルーターは<span class="red">経路制御表（ルーティングテーブル）</span>を持ち、宛先IPから「次にどこへ渡すか」を決める。</div>

<div class="takeaway">宛先IPを見て次へ渡す——このバケツリレーで世界中に届く。</div>

---

<!-- _class: fig -->

<div class="page-title">通信の信頼性</div>

## 誤りを「見つける（パリティ）」「送り直す（再送）」 <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<svg viewBox="0 0 420 180" width="100%" style="max-height:190px">
  <text x="210" y="20" font-size="14" font-weight="700" text-anchor="middle">パリティ検査</text>
  <g font-family="Menlo,monospace" font-size="18" text-anchor="middle">
    <rect x="20" y="40" width="280" height="40" rx="5" fill="#eef4fa"/><text x="160" y="67">0110 1001</text>
    <rect x="310" y="40" width="90" height="40" rx="5" fill="#F8E5EA"/><text x="355" y="67" font-weight="700" fill="#A6192E">P=0</text>
  </g>
  <text x="160" y="105" font-size="12" fill="#555" text-anchor="middle">1の個数を数える</text>
  <text x="355" y="105" font-size="12" fill="#A6192E" text-anchor="middle">偶数なら0</text>
  <text x="210" y="150" font-size="13" fill="#555" text-anchor="middle">受信時に1の数が合わなければ「誤りあり」</text>
</svg>
</div>
<div>
<svg viewBox="0 0 420 180" width="100%" style="max-height:190px">
  <text x="210" y="20" font-size="14" font-weight="700" text-anchor="middle">TCPの再送（ACK）</text>
  <line x1="80" y1="35" x2="80" y2="160" stroke="#ccc" stroke-width="2"/><line x1="340" y1="35" x2="340" y2="160" stroke="#ccc" stroke-width="2"/>
  <text x="80" y="33" font-size="12" text-anchor="middle">送信</text><text x="340" y="33" font-size="12" text-anchor="middle">受信</text>
  <line x1="80" y1="55" x2="340" y2="70" stroke="#3C8A57" stroke-width="2" marker-end="url(#r1)"/><text x="210" y="56" font-size="11" fill="#3C8A57" text-anchor="middle">パケット1</text>
  <line x1="340" y1="80" x2="80" y2="95" stroke="#3E78B2" stroke-width="2" marker-end="url(#r2)"/><text x="210" y="82" font-size="11" fill="#3E78B2" text-anchor="middle">ACK</text>
  <line x1="80" y1="105" x2="250" y2="118" stroke="#A6192E" stroke-width="2" stroke-dasharray="5 3"/><text x="200" y="108" font-size="11" fill="#A6192E" text-anchor="middle">2 (消失)</text>
  <text x="265" y="124" font-size="14" fill="#A6192E">✕</text>
  <line x1="80" y1="138" x2="340" y2="150" stroke="#3C8A57" stroke-width="2" marker-end="url(#r1)"/><text x="210" y="139" font-size="11" fill="#3C8A57" text-anchor="middle">2 再送</text>
  <defs>
    <marker id="r1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker>
    <marker id="r2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
  </defs>
</svg>
</div>
</div>
</div>

<div class="caption">受信側はパケットを受けると<span class="red">ACK</span>を返す。<span class="red">順序番号</span>で抜けを検出し、足りなければ<span class="red">再送</span>。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 6 ／ CHAPTER 6</div>

# 名前からページへ

## DNS・WWW・URL・HTML（約13分）

---

<!-- _class: fig -->

<div class="page-title">DNS</div>

## ドメイン名を IPアドレスに変換する <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 220" width="100%" style="max-height:240px">
  <g font-size="13" text-anchor="middle">
    <rect x="30" y="40" width="160" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="110" y="66" font-weight="700">ブラウザ</text><text x="110" y="86" fill="#777">www.example.jp ?</text>
    <rect x="370" y="40" width="160" height="60" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="450" y="66" font-weight="700">DNSサーバ</text><text x="450" y="86" fill="#777">名前→IPの対応表</text>
    <rect x="710" y="40" width="160" height="60" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="790" y="66" font-weight="700">Webサーバ</text><text x="790" y="86" fill="#777">203.0.113.10</text>
  </g>
  <line x1="190" y1="58" x2="370" y2="58" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#d1)"/><text x="280" y="50" font-size="12" fill="#3E78B2" text-anchor="middle">①「IP教えて」</text>
  <line x1="370" y1="84" x2="190" y2="84" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#d2)"/><text x="280" y="100" font-size="12" fill="#D98A2B" text-anchor="middle">②「203.0.113.10」</text>
  <line x1="190" y1="130" x2="710" y2="130" stroke="#A6192E" stroke-width="2.5" marker-end="url(#d3)"/><text x="450" y="122" font-size="12" fill="#A6192E" text-anchor="middle">③ そのIPへ接続してページ取得</text>
  <defs>
    <marker id="d1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
    <marker id="d2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
    <marker id="d3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
  <text x="450" y="180" font-size="13" fill="#555" text-anchor="middle">ドメインは後ろから読む： <tspan font-weight="700">jp</tspan>(国) → <tspan font-weight="700">go</tspan>(種別) → 組織 → サーバ名</text>
</svg>
</div>

<div class="ask">もし世界中のDNSが全部止まったら、インターネットはどうなる？</div>

---

<!-- _class: fig -->

<div class="page-title">URLの分解</div>

## URL ＝ Webページの「住所」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 880 200" width="100%" style="max-height:220px">
  <g font-family="Menlo,monospace" font-size="30" font-weight="700">
    <text x="60" y="80" fill="#3C8A57">https://</text>
    <text x="240" y="80" fill="#3E78B2">www.example.go.jp</text>
    <text x="620" y="80" fill="#D98A2B">/news/index.html</text>
  </g>
  <g font-size="15" text-anchor="middle">
    <line x1="130" y1="95" x2="130" y2="120" stroke="#3C8A57" stroke-width="2"/><text x="130" y="145" fill="#3C8A57" font-weight="700">プロトコル</text><text x="130" y="165" fill="#777">http / https</text>
    <line x1="420" y1="95" x2="420" y2="120" stroke="#3E78B2" stroke-width="2"/><text x="420" y="145" fill="#3E78B2" font-weight="700">ホスト（ドメイン）</text><text x="420" y="165" fill="#777">IP直指定も可</text>
    <line x1="720" y1="95" x2="720" y2="120" stroke="#D98A2B" stroke-width="2"/><text x="720" y="145" fill="#D98A2B" font-weight="700">パス</text><text x="720" y="165" fill="#777">どのファイルか</text>
  </g>
</svg>
</div>

<div class="caption">パスを省略すると<span class="red">最上位ページ</span>へ。<span class="red">https</span> は通信が暗号化されている（動画7）。</div>

---

<!-- _class: fig -->

<div class="page-title">WWWとHTML</div>

## ページが表示されるまで（全部つながる） <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 920 150" width="100%" style="max-height:190px">
  <g font-size="13" text-anchor="middle">
    <rect x="10" y="50" width="130" height="50" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="75" y="80" font-weight="700">URL入力</text>
    <rect x="190" y="50" width="130" height="50" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="255" y="73" font-weight="700">DNS</text><text x="255" y="91" fill="#777">→ IP</text>
    <rect x="370" y="50" width="170" height="50" rx="8" fill="#fff" stroke="#D98A2B" stroke-width="2"/><text x="455" y="73" font-weight="700">HTTP/HTTPS</text><text x="455" y="91" fill="#777">サーバへ要求</text>
    <rect x="590" y="50" width="150" height="50" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="665" y="73" font-weight="700">HTML/CSS</text><text x="665" y="91" fill="#777">が返る</text>
    <rect x="790" y="50" width="120" height="50" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="850" y="80" font-weight="700">描画</text>
  </g>
  <g fill="#A6192E" font-size="22" font-weight="800"><text x="162" y="82">→</text><text x="342" y="82">→</text><text x="562" y="82">→</text><text x="762" y="82">→</text></g>
</svg>
</div>

<div class="caption"><span class="red">HTML</span>＝構造（タグ）、<span class="red">CSS</span>＝装飾。ブラウザが両方を解釈して表示。リンクで繋いだ文書＝<span class="red">ハイパーテキスト</span>。</div>

---

<div class="page-title">ワーク⑥</div>

## ワーク：最小のHTMLを書いて、名前を引く

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 Moodle → Colab（個人 or 2人）</div><div class="b">

- ① 最小HTMLを書く：<br><span class="mono">&lt;h1&gt;はじめてのWeb&lt;/h1&gt;</span>
- ② ブラウザで開き<span class="red">ソースを表示</span>
- ③ <span class="mono">!dig www.chiba-u.jp</span> で名前解決
- ④ 返ったIPをブラウザに直接入れるとどうなる？

</div></div>

</div>
<div>

<div class="ph" style="height:215px">［ここに dig / ソース表示 の実行スクショを貼る］<br>（画像はこちらで差し込みます）</div>

</div>
</div>

<div class="statement">「名前 → IP → ページ」を、自分の手で1往復してみる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 7 ／ CHAPTER 7 ★核</div>

# 安全に通信する

## 暗号・認証・Wi-Fiセキュリティ（約16分）

---

<!-- _class: fig -->

<div class="page-title">暗号の基礎</div>

## 平文 →（暗号化）→ 暗号文 →（復号）→ 平文

<div class="fig-area">
<svg viewBox="0 0 900 170" width="100%" style="max-height:200px">
  <g font-size="14" text-anchor="middle">
    <rect x="20" y="55" width="140" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="90" y="80" font-weight="700">平文</text><text x="90" y="100" fill="#777">「会議は3時」</text>
    <rect x="350" y="55" width="200" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="450" y="80" font-weight="700">暗号文</text><text x="450" y="100" fill="#777" font-family="Menlo,monospace">Xz9!q@…</text>
    <rect x="740" y="55" width="140" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="810" y="80" font-weight="700">平文</text><text x="810" y="100" fill="#777">「会議は3時」</text>
  </g>
  <line x1="160" y1="83" x2="350" y2="83" stroke="#A6192E" stroke-width="2.5" marker-end="url(#e1)"/><text x="255" y="74" font-size="13" text-anchor="middle">暗号化🔒</text>
  <line x1="550" y1="83" x2="740" y2="83" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#e2)"/><text x="645" y="74" font-size="13" text-anchor="middle">復号🔑</text>
  <defs>
    <marker id="e1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
    <marker id="e2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
  </defs>
</svg>
</div>

<div class="caption">古典：<span class="red">シーザー暗号</span>（ずらす）・<span class="red">転置法</span>（エニグマ）。<span class="red">共通鍵</span>は「盗まれたら全滅・相手ごとに鍵が要る」のが弱点。</div>

<div class="ask">送り手と受け手が「同じ鍵」を持つ方式。鍵はどうやって安全に渡す？</div>

---

<!-- _class: fig -->

<div class="page-title">公開鍵暗号</div>

## 公開鍵で「暗号化」、秘密鍵で「復号」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 190" width="100%" style="max-height:210px">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="70" width="120" height="56" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="80" y="95" font-weight="700">送り手A</text><text x="80" y="114" fill="#777">平文</text>
    <rect x="250" y="60" width="160" height="76" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="330" y="88" font-size="22">🔒</text><text x="330" y="112" font-weight="700">Bの公開鍵で暗号化</text>
    <rect x="490" y="70" width="150" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="565" y="95" font-weight="700">暗号文</text><text x="565" y="114" fill="#777">ネット上を流れる</text>
    <rect x="720" y="60" width="160" height="76" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="800" y="88" font-size="22">🔑</text><text x="800" y="112" font-weight="700">Bの秘密鍵で復号</text>
  </g>
  <g fill="#A6192E" font-size="24" font-weight="800"><text x="160" y="105">→</text><text x="420" y="105">→</text><text x="660" y="105">→</text></g>
</svg>
</div>

<div class="caption">公開鍵は誰に渡してもよい。復号できるのは、対になった<span class="red">秘密鍵を持つ受け手B だけ</span>。</div>

<div class="takeaway">「鍵を安全に渡す」問題を、公開鍵暗号は鮮やかに解決した。</div>

---

<!-- _class: split -->

<div class="page-title">署名・認証・SSL</div>

## 本人確認（署名）と、安全な通信路（SSL/VPN） <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <text x="180" y="20" font-size="14" font-weight="700" text-anchor="middle">デジタル署名（鍵が“逆”）</text>
  <rect x="20" y="50" width="120" height="56" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="80" y="75" font-size="13" text-anchor="middle">送り手A</text><text x="80" y="94" font-size="11" fill="#777" text-anchor="middle">🔑秘密鍵で署名</text>
  <rect x="220" y="50" width="120" height="56" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="280" y="75" font-size="13" text-anchor="middle">受け手B</text><text x="280" y="94" font-size="11" fill="#777" text-anchor="middle">公開鍵で検証</text>
  <line x1="140" y1="78" x2="220" y2="78" stroke="#3C8A57" stroke-width="2.5" marker-end="url(#s1)"/>
  <defs><marker id="s1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
  <rect x="100" y="140" width="160" height="50" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="180" y="162" font-size="12" font-weight="700" text-anchor="middle">認証局（CA）</text><text x="180" y="180" font-size="11" fill="#777" text-anchor="middle">「本人の公開鍵」を保証</text>
  <line x1="180" y1="106" x2="180" y2="140" stroke="#bbb" stroke-width="2"/>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">なりすまし防止</div><div class="b">

- 送り手が<span class="red">秘密鍵で署名</span>→受け手が<span class="red">公開鍵で検証</span>
- <span class="red">認証局</span>が公開鍵の持ち主を第三者保証（電子証明書）

</div></div>

<div class="cbox green"><div class="h">SSL/TLS と VPN</div><div class="b">

- <span class="red">SSL/TLS</span>＝暗号化の決まり。ページは <span class="red">HTTPS</span>
- <span class="red">VPN</span>＝拠点間を暗号化し専用線のように繋ぐ

</div></div>

</div>
</div>

<div class="takeaway">暗号化（盗み見防止）＋ 署名・認証（なりすまし防止）の両輪。</div>

---

<!-- _class: split -->

<div class="page-title">Wi-Fiセキュリティ</div>

## 「お家のネット」を、自分で守れるように <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 220" width="100%" style="max-height:230px">
  <rect x="20" y="90" width="60" height="40" rx="6" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="50" y="115" font-size="12" text-anchor="middle">あなた</text>
  <path d="M150 110 L135 70 L165 70 Z" fill="#A6192E"/><line x1="150" y1="70" x2="150" y2="52" stroke="#A6192E" stroke-width="3"/><text x="150" y="128" font-size="11" text-anchor="middle" fill="#A6192E">偽のAP</text>
  <ellipse cx="300" cy="105" rx="48" ry="32" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="300" y="110" font-size="12" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
  <line x1="80" y1="100" x2="135" y2="90" stroke="#888" stroke-width="2"/>
  <line x1="165" y1="90" x2="252" y2="100" stroke="#888" stroke-width="2"/>
  <text x="150" y="165" font-size="12" fill="#A6192E" text-anchor="middle">中間者攻撃（盗聴）のリスク</text>
  <text x="180" y="195" font-size="12" fill="#3C8A57" text-anchor="middle">対策：WPA2/3・HTTPS・VPN</text>
</svg>

<div class="ph" style="height:70px;margin-top:6px">［スマホのWi-Fi詳細（WPA3表示）のスクショ］</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">暗号方式を確認</div><div class="b">

- <span class="red">WPA2 / WPA3</span>か確認（古いWEPは危険）
- ルータ管理画面（<span class="mono">192.168.x.1</span>）の<span class="red">初期PWは必ず変更</span>

</div></div>

<div class="ask hand">挙手：公衆Wi-Fiでネットバンキングのログイン、していい？</div>

</div>
</div>

---

<div class="page-title">ワーク⑦</div>

## ワーク：お家のWebセキュリティを考えよう

<div class="cbox red"><div class="h">🔧 自分のデジタル環境を点検する</div><div class="b">

- ① 自宅Wi-Fiの暗号方式は <span class="red">WPA2/WPA3</span>？
- ② ルータ管理画面のパスワードは<span class="red">初期値のまま</span>になっていない？
- ③ スマートスピーカー・防犯カメラなど<span class="red">IoT機器</span>のPWは変えた？
- ④ よく使うサイトは <span class="red">https（鍵マーク）</span>？　⑤ 公衆Wi-Fiで重要ログインをしていないか？

</div></div>

<div class="statement">習った暗号・認証・Wi-Fiの知識は、まず「自分の家」を守るために使う。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 8 ／ CHAPTER 8</div>

# データベースとSQL

## 構造化したデータを扱う（約12分）

---

<!-- _class: split -->

<div class="page-title">DBとDBMS</div>

## 多人数で安全に使える「データの倉庫」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <g font-size="12" text-anchor="middle">
    <rect x="20" y="40" width="70" height="32" rx="5" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="55" y="61">利用者A</text>
    <rect x="20" y="100" width="70" height="32" rx="5" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="55" y="121">利用者B</text>
    <rect x="20" y="160" width="70" height="32" rx="5" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="55" y="181">利用者C</text>
  </g>
  <rect x="140" y="70" width="110" height="90" rx="8" fill="#A6192E"/><text x="195" y="105" font-size="14" fill="#fff" font-weight="700" text-anchor="middle">DBMS</text><text x="195" y="128" font-size="11" fill="#fff" text-anchor="middle">問い合わせを</text><text x="195" y="143" font-size="11" fill="#fff" text-anchor="middle">仲介・制御</text>
  <g stroke="#bbb" stroke-width="2"><line x1="90" y1="56" x2="140" y2="95"/><line x1="90" y1="116" x2="140" y2="116"/><line x1="90" y1="176" x2="140" y2="138"/></g>
  <path d="M295 80 a45 12 0 0 0 0 0 m-45 0 v70 a45 12 0 0 0 90 0 v-70" fill="#eef4fa" stroke="#6B6F76" stroke-width="2"/>
  <ellipse cx="295" cy="80" rx="45" ry="12" fill="#dce8f5" stroke="#6B6F76" stroke-width="2"/>
  <text x="295" y="135" font-size="12" text-anchor="middle">DB</text>
  <line x1="250" y1="115" x2="270" y2="115" stroke="#bbb" stroke-width="2"/>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">データベースの考え方</div><div class="b">

- 一定の形式＝<span class="red">構造化データ</span>（書名・著者…）
- 集めて蓄積＝<span class="red">データベース</span>／取り出す＝検索

</div></div>

<div class="cbox gray"><div class="h">DBMS の4機能</div><div class="b">

- 資源管理／<span class="red">整合性</span>（変な値を弾く）
- <span class="red">セキュリティ</span>／<span class="red">トランザクション</span>（二重登録防止・座席予約）

</div></div>

</div>
</div>

<div class="ask">図書館の蔵書検索、スマホの連絡先 ── これらもデータベース？</div>

---

<!-- _class: fig -->

<div class="page-title">リレーショナルDBとSQL</div>

## 小さな表を「結合（JOIN）」して柔軟に検索 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 920 210" width="100%" style="max-height:230px">
  <g font-size="13" text-anchor="middle">
    <text x="120" y="25" font-weight="700">書籍テーブル</text>
    <rect x="20" y="35" width="200" height="90" fill="#fff" stroke="#888"/>
    <line x1="20" y1="63" x2="220" y2="63" stroke="#888"/><line x1="100" y1="35" x2="100" y2="125" stroke="#888"/><line x1="20" y1="94" x2="220" y2="94" stroke="#888"/>
    <text x="60" y="54" fill="#A6192E" font-weight="700">書名</text><text x="160" y="54" fill="#3E78B2" font-weight="700">著者ID</text>
    <text x="60" y="83">ネット入門</text><text x="160" y="83">A1</text>
    <text x="60" y="114">情報の科学</text><text x="160" y="114">A2</text>
    <text x="120" y="160" font-weight="700">著者テーブル</text>
    <rect x="20" y="168" width="200" height="34" fill="#fff" stroke="#888"/><line x1="100" y1="168" x2="100" y2="202" stroke="#888"/>
    <text x="60" y="190" fill="#3E78B2" font-weight="700">著者ID</text><text x="160" y="190">著者名</text>
  </g>
  <text x="300" y="120" font-size="40" fill="#A6192E" font-weight="800">→</text>
  <g font-size="13" text-anchor="middle">
    <text x="560" y="35" font-weight="700">結合した結果（書名＋著者名）</text>
    <rect x="400" y="48" width="320" height="100" fill="#F8E5EA" stroke="#A6192E"/>
    <line x1="400" y1="78" x2="720" y2="78" stroke="#A6192E"/><line x1="560" y1="48" x2="560" y2="148" stroke="#A6192E"/><line x1="400" y1="113" x2="720" y2="113" stroke="#A6192E"/>
    <text x="480" y="68" font-weight="700">書名</text><text x="640" y="68" font-weight="700">著者名</text>
    <text x="480" y="100">ネット入門</text><text x="640" y="100">千葉太郎</text>
    <text x="480" y="135">情報の科学</text><text x="640" y="135">海浜花子</text>
  </g>
  <text x="780" y="120" font-size="12" fill="#555" text-anchor="middle" transform="rotate(0 780 120)"></text>
  <text x="820" y="95" font-size="13" fill="#555" text-anchor="middle">選択(行)</text>
  <text x="820" y="118" font-size="13" fill="#555" text-anchor="middle">射影(列)</text>
  <text x="820" y="141" font-size="13" fill="#555" text-anchor="middle">結合(JOIN)</text>
</svg>
</div>

<div class="caption">表＝<span class="red">テーブル</span>／列＝カラム／行＝レコード。SQLの基本操作＝<span class="red">選択・射影・結合</span>。</div>

---

<div class="page-title">ワーク⑧</div>

## ワーク：Colab で pandas × SQL を動かす

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 表計算ではなく「コード」で（Moodle → Colab）</div><div class="b">

- ① <span class="mono">import pandas as pd</span> で表を2つ作る
- ② <span class="mono">pandasql</span> / <span class="mono">sqlite3</span> で SQL を実行：<br><span class="mono">SELECT 書名,著者名 FROM 書籍<br>JOIN 著者 USING(著者ID)</span>
- ③ <span class="red">WHERE・列指定・JOIN</span>で結果がどう変わる？
- ④ 同じ操作を <span class="mono">df.merge()</span> でも書く

</div></div>

</div>
<div>

<div class="ph" style="height:215px">［ここに Colab で pandas＋SQL を実行した画面のスクショを貼る］<br>（画像はこちらで差し込みます）</div>

</div>
</div>

<div class="statement">SQL は「英語っぽい問い合わせ言語」。ラボのデータ処理でそのまま役立つ。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 9 ／ CHAPTER 9</div>

# 情報システムの応用とデータ分析入門

## 暮らしを支える仕組みと、データの読み方（約14分）

---

<!-- _class: fig -->

<div class="page-title">暮らしを支える仕組み</div>

## 身の回りは「データベース＋ネットワーク」で動く

<div class="fig-area">
<svg viewBox="0 0 920 200" width="100%" style="max-height:220px">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="60" width="120" height="56" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="2"/><text x="80" y="84" font-weight="700">店舗レジ</text><text x="80" y="103" fill="#777">バーコード</text>
    <rect x="240" y="60" width="160" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="320" y="84" font-weight="700">本部センター</text><text x="320" y="103" fill="#777">販売データ集約</text>
    <rect x="500" y="60" width="150" height="56" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="575" y="84" font-weight="700">発注・配送</text><text x="575" y="103" fill="#777">最適化</text>
  </g>
  <g fill="#A6192E" font-size="22" font-weight="800"><text x="160" y="93">→</text><text x="420" y="93">→</text></g>
  <text x="335" y="150" font-size="13" fill="#555" text-anchor="middle">POSシステム：何が・いつ売れたか → 発注に活用</text>
  <g font-size="13" text-anchor="middle">
    <text x="800" y="40">🛰 GPS</text>
    <rect x="730" y="55" width="140" height="36" rx="6" fill="#eef7ef" stroke="#3C8A57"/><text x="800" y="78">カーナビ・渋滞</text>
    <rect x="730" y="100" width="140" height="36" rx="6" fill="#eef4fa" stroke="#3E78B2"/><text x="800" y="123">予約システム</text>
  </g>
</svg>
</div>

<div class="caption">日々たまる膨大なデータ＝<span class="red">ビッグデータ</span>。分析して洞察を引き出す専門家＝<span class="red">データサイエンティスト</span>。</div>

---

<!-- _class: split -->

<div class="page-title">データの見方</div>

## データの「種類（尺度）」と「代表値」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <g font-size="13">
    <rect x="20" y="170" width="320" height="40" rx="6" fill="#cfe0f0"/><text x="30" y="195" font-weight="700">名義尺度</text><text x="220" y="195" fill="#555">血液型・国名</text>
    <rect x="40" y="125" width="300" height="40" rx="6" fill="#a9c6e6"/><text x="50" y="150" font-weight="700">順序尺度</text><text x="230" y="150" fill="#333">震度・順位</text>
    <rect x="60" y="80" width="280" height="40" rx="6" fill="#7faedb"/><text x="70" y="105" font-weight="700">間隔尺度</text><text x="250" y="105" fill="#fff">差に意味</text>
    <rect x="80" y="35" width="260" height="40" rx="6" fill="#3E78B2"/><text x="90" y="60" font-weight="700" fill="#fff">比例尺度</text><text x="265" y="60" fill="#fff">身長・金額</text>
  </g>
  <text x="180" y="228" font-size="12" fill="#777" text-anchor="middle">下ほど「できる計算」が増える</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">質的 / 量的</div><div class="b">

- 質的＝<span class="red">名義・順序</span>／量的＝<span class="red">間隔・比例</span>

</div></div>

<div class="cbox gray"><div class="h">代表値とばらつき</div><div class="b">

- <span class="red">平均・中央値・最頻値</span>（年収は中央値が向くことも）
- <span class="red">分散・標準偏差</span>／<span class="red">偏差値</span>＝集団内の相対位置／比較は<span class="red">箱ひげ図</span>

</div></div>

</div>
</div>

<div class="ask">アルバイトの「時給」と「満足度の5段階」── それぞれ何尺度？</div>

---

<!-- _class: fig -->

<div class="page-title">関係を読む</div>

## 相関は因果ではない／予測する／検定する <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<svg viewBox="0 0 360 200" width="100%" style="max-height:200px">
  <text x="180" y="16" font-size="13" font-weight="700" text-anchor="middle">散布図と回帰直線</text>
  <line x1="40" y1="170" x2="340" y2="170" stroke="#888" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="25" stroke="#888" stroke-width="2"/>
  <g fill="#A6192E"><circle cx="70" cy="150" r="4"/><circle cx="100" cy="138" r="4"/><circle cx="125" cy="128" r="4"/><circle cx="155" cy="115" r="4"/><circle cx="185" cy="100" r="4"/><circle cx="215" cy="85" r="4"/><circle cx="250" cy="70" r="4"/><circle cx="285" cy="52" r="4"/></g>
  <line x1="60" y1="155" x2="305" y2="48" stroke="#3E78B2" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="200" y="192" font-size="12" fill="#3E78B2" text-anchor="middle">Y = aX + b で予測</text>
</svg>
</div>
<div>
<svg viewBox="0 0 360 200" width="100%" style="max-height:200px">
  <text x="180" y="16" font-size="13" font-weight="700" text-anchor="middle">見かけの相関（交絡）</text>
  <rect x="130" y="35" width="100" height="40" rx="8" fill="#D98A2B"/><text x="180" y="60" font-size="13" fill="#fff" font-weight="700" text-anchor="middle">暑さ</text>
  <rect x="20" y="130" width="120" height="40" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="80" y="155" font-size="13" text-anchor="middle">アイス消費</text>
  <rect x="220" y="130" width="120" height="40" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="280" y="155" font-size="13" text-anchor="middle">水難事故</text>
  <line x1="160" y1="75" x2="90" y2="130" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#c1)"/>
  <line x1="200" y1="75" x2="270" y2="130" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#c2)"/>
  <line x1="140" y1="150" x2="220" y2="150" stroke="#A6192E" stroke-width="2" stroke-dasharray="5 3"/><text x="180" y="143" font-size="11" fill="#A6192E" text-anchor="middle">相関あり…でも</text>
  <defs><marker id="c1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker><marker id="c2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker></defs>
</svg>
</div>
</div>
</div>

<div class="caption">真因は「暑さ」＝<span class="red">交絡因子</span>。<span class="red">仮説検定</span>：帰無仮説を立て、有意水準5%で棄却するか判断。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 10 ／ CHAPTER 10</div>

# クラウドの基礎とGCPの学び方

## 手を動かして、学び続ける（約12分／後半8分が本題）

---

<!-- _class: fig -->

<div class="page-title">クラウドとは</div>

## 「所有」から「利用」へ ── IaaS / PaaS / SaaS <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 230" width="100%" style="max-height:250px">
  <g font-size="13" text-anchor="middle">
    <text x="160" y="24" font-size="15" font-weight="700">IaaS</text>
    <text x="450" y="24" font-size="15" font-weight="700">PaaS</text>
    <text x="740" y="24" font-size="15" font-weight="700">SaaS</text>
  </g>
  <g font-size="12" text-anchor="middle">
    <!-- IaaS -->
    <rect x="60" y="35" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="160" y="56">アプリ（自分）</text>
    <rect x="60" y="69" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="160" y="90">OS（自分）</text>
    <rect x="60" y="103" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="160" y="124">仮想マシン（事業者）</text>
    <rect x="60" y="137" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="160" y="158">物理・電源（事業者）</text>
    <text x="160" y="190" font-size="12" fill="#555">例：Compute Engine</text>
    <!-- PaaS -->
    <rect x="350" y="35" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="450" y="56">アプリ（自分）</text>
    <rect x="350" y="69" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="90">実行環境（事業者）</text>
    <rect x="350" y="103" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="124">OS（事業者）</text>
    <rect x="350" y="137" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="158">基盤（事業者）</text>
    <text x="450" y="190" font-size="12" fill="#555">例：Cloud Run</text>
    <!-- SaaS -->
    <rect x="640" y="35" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="740" y="56">アプリ（事業者）</text>
    <rect x="640" y="69" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="740" y="90">実行環境（事業者）</text>
    <rect x="640" y="103" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="740" y="124">OS（事業者）</text>
    <rect x="640" y="137" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="740" y="158">基盤（事業者）</text>
    <text x="740" y="190" font-size="12" fill="#555">例：Gmail・Docs（使うだけ）</text>
  </g>
  <text x="450" y="218" font-size="13" fill="#A6192E" text-anchor="middle">ピンク＝自分が管理／緑＝事業者が管理。上へ行くほど“おまかせ”が増える</text>
</svg>
</div>

<div class="ask">「自分のPCが壊れても、写真もメールも消えない」のはなぜ？</div>

---

<!-- _class: split -->

<div class="page-title">GCPで学び続ける</div>

## Google Cloud で「実験する」── この講義の締め

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 240" width="100%" style="max-height:250px">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="185" width="220" height="38" rx="6" fill="#cfe0f0"/><text x="130" y="209" font-weight="700">無料枠（$300）で始める</text>
    <rect x="55" y="140" width="220" height="38" rx="6" fill="#a9c6e6"/><text x="165" y="164" font-weight="700">ハンズオンラボで操作</text>
    <rect x="90" y="95" width="220" height="38" rx="6" fill="#7faedb"/><text x="200" y="119" font-weight="700" fill="#fff">スキルバッジを取る</text>
    <rect x="125" y="50" width="220" height="38" rx="6" fill="#3E78B2"/><text x="235" y="74" font-weight="700" fill="#fff">認定資格（ACE…）へ</text>
  </g>
  <text x="180" y="240" font-size="12" fill="#777" text-anchor="middle">↑ 積み上げて学ぶ</text>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">Google Cloud Skills Boost</div><div class="b">

- 実環境の<span class="red">ハンズオンラボ</span>（安全な砂場）
- <span class="red">スキルバッジ</span>→<span class="red">認定資格</span>へ
- 目標：<span class="red">自分でVMを1つ立てる</span>

</div></div>

<div class="ph" style="height:80px">［Skills Boost / GCPコンソールのスクショ］</div>

</div>
</div>

<div class="band">クラウドは「安全に失敗して学べる」最高の実験場 ── 動画1の「実験する」に戻る。</div>

---

<!-- _class: message -->

# 手を動かして、学び続けよう

## 教科書とAIの「外」に、実験と・人と・本がある

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## この回のまとめ

- インターネット＝ネットワークの相互接続。<span class="red">IPアドレス</span>という住所で相手を識別
- <span class="red">TCP/IP（4層）</span>に沿い、データはパケットに分かれ、ルーターのリレーで届く
- 名前は<span class="red">DNS</span>でIPに変換され、<span class="red">HTTP/HTTPS</span>でWebページが届く
- <span class="red">公開鍵暗号・署名・WPA2/3</span>で、盗み見となりすましから身を守る
- データは<span class="red">DB・SQL</span>で構造化して扱い、分析では「相関≠因果」に注意
- クラウド（<span class="red">IaaS/PaaS/SaaS</span>）と GCP で、自分で手を動かして学び続ける

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問は Moodle へ ・ 視聴期限内に全10本の視聴を
