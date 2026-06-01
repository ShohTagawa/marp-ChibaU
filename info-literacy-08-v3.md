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
  .cbox > .h { color:#fff; font-weight:700; padding:5px 16px; font-size:19px; }
  .cbox > .b { padding:8px 16px 9px; font-size:18px; }
  .cbox.blue > .h { background:#3E78B2; } .cbox.green > .h { background:#3C8A57; } .cbox.orange > .h { background:#D98A2B; } .cbox.gray > .h { background:#6B6F76; } .cbox.red > .h { background:var(--accent); }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:2px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:21px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:24px; margin-top:8px; }
  .ask { background:#FBEFC8; border:1px solid #ecd98f; border-radius:10px; padding:8px 16px 8px 50px; margin:8px 0; font-weight:700; font-size:19px; position:relative; }
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
- 役割は固定でなく、その時の関係で決まる

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
  <text x="180" y="185" font-size="13" fill="#555" text-anchor="middle">ケーブル＝より対線／集線装置＝ハブ</text>
  <text x="180" y="208" font-size="13" fill="#555" text-anchor="middle">無線の親機＝アクセスポイント(AP)</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">有線LAN（イーサネット）</div><div class="b">

- 規格＝<span class="red">Ethernet</span>。速度 100Mbps〜10Gbps
- <span class="red">ハブ</span>に機器をケーブル接続

</div></div>

<div class="cbox green"><div class="h">無線LAN（Wi-Fi）</div><div class="b">

- 規格＝<span class="red">IEEE 802.11</span>。互換保証された機器名が <span class="red">Wi-Fi</span>
- 有線/ルータに繋いだ<span class="red">アクセスポイント</span>に電波で接続

</div></div>

</div>
</div>

<div class="takeaway">同じ「LAN」でも、ケーブルか電波かで規格・装置が変わる。</div>

---

<!-- _class: fig -->

<div class="page-title">Wi-Fiの規格</div>

## 世代が進むほど高速に（IEEE 802.11）

<div class="fig-area">

<table class="dtbl">
<tr><th>名称</th><th>世代の呼称</th><th>電波の周波数</th><th>通信速度（最大）</th></tr>
<tr><td>IEEE 802.11b</td><td>—</td><td>2.4GHz</td><td>11Mbps</td></tr>
<tr><td>IEEE 802.11g</td><td>—</td><td>2.4GHz</td><td>54Mbps</td></tr>
<tr><td>IEEE 802.11a</td><td>—</td><td>5GHz</td><td>54Mbps</td></tr>
<tr><td>IEEE 802.11n</td><td><span class="red">Wi-Fi 4</span></td><td>2.4 / 5GHz</td><td>600Mbps</td></tr>
<tr><td>IEEE 802.11ac</td><td><span class="red">Wi-Fi 5</span></td><td>5GHz</td><td>6.9Gbps</td></tr>
<tr><td>IEEE 802.11ax</td><td><span class="red">Wi-Fi 6</span></td><td>2.4 / 5GHz</td><td><span class="red">9.6Gbps</span></td></tr>
</table>

</div>

<div class="caption">「Wi-Fi 6」のような呼称は、規格 IEEE 802.11ax の世代を分かりやすく言い換えたもの。</div>

<div class="ask">自宅のルーターは Wi-Fi 何？　2.4GHz と 5GHz、電子レンジに弱いのはどっち？</div>

---

<!-- _class: fig -->

<div class="page-title">WAN・モバイル通信</div>

## スマホはモバイル網を通じてWANに繋がる

<div class="fig-area">
<div class="grid2" style="width:97%;align-items:center">
<div>
<svg viewBox="0 0 460 170" width="100%" style="max-height:185px">
  <rect x="10" y="78" width="50" height="34" rx="5" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="35" y="100" font-size="11" text-anchor="middle">スマホ</text>
  <g fill="none" stroke="#D98A2B" stroke-width="2"><path d="M65 88 q14 -6 14 12"/><path d="M65 96 q22 -8 22 20"/></g>
  <path d="M120 108 L105 58 L135 58 Z" fill="#D98A2B"/><line x1="120" y1="58" x2="120" y2="40" stroke="#D98A2B" stroke-width="3"/><text x="120" y="126" font-size="11" text-anchor="middle">基地局</text>
  <line x1="135" y1="93" x2="200" y2="93" stroke="#3C8A57" stroke-width="3"/><text x="167" y="84" font-size="11" text-anchor="middle" fill="#3C8A57">光ファイバ</text>
  <rect x="200" y="76" width="90" height="36" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="245" y="98" font-size="12" text-anchor="middle">基幹網</text>
  <line x1="290" y1="93" x2="350" y2="93" stroke="#A6192E" stroke-width="3"/>
  <ellipse cx="400" cy="93" rx="50" ry="34" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="400" y="98" font-size="13" font-weight="700" text-anchor="middle" fill="#A6192E">Internet</text>
</svg>
</div>
<div>

<table class="dtbl">
<tr><th>世代</th><th>開始</th><th>最大速度</th></tr>
<tr><td>1G</td><td>1979</td><td>アナログ</td></tr>
<tr><td>2G</td><td>1993</td><td>28.8kbps</td></tr>
<tr><td>3G</td><td>2001</td><td>14Mbps</td></tr>
<tr><td>LTE</td><td>2010</td><td>100Mbps</td></tr>
<tr><td>4G</td><td>2012</td><td>1Gbps</td></tr>
<tr><td><span class="red">5G</span></td><td>2020</td><td><span class="red">20Gbps</span></td></tr>
</table>

</div>
</div>
</div>

<div class="caption">WANに繋がる＝固有の<span class="red">IPアドレス</span>を持ち、世界中と通信できるということ。</div>

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

<div class="caption">32ビットを 8ビット ずつ 4つに区切り、10進法で表記（各オクテットは <span class="red">0〜255</span>）。</div>

<div class="takeaway">接続する全コンピュータに固有のIPを割り当て、相手を識別する。</div>

---

<!-- _class: split -->

<div class="page-title">サブネットとCIDR</div>

## IPは「ネットワーク部」＋「ホスト部」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 280" width="100%" style="max-height:285px">
  <text x="190" y="18" font-size="13" font-weight="700" text-anchor="middle">サブネットマスク 255.255.255.0 ＝ /24</text>
  <rect x="10" y="30" width="270" height="36" rx="5" fill="#3E78B2"/><text x="145" y="53" font-size="13" fill="#fff" font-weight="700" text-anchor="middle">ネットワーク部（24）</text>
  <rect x="282" y="30" width="88" height="36" rx="5" fill="#D98A2B"/><text x="326" y="53" font-size="12" fill="#fff" font-weight="700" text-anchor="middle">ホスト(8)</text>
  <g font-family="Menlo,monospace" font-size="15" text-anchor="start">
    <text x="60" y="105" font-weight="700">192.168.100.</text><text x="168" y="105" fill="#D98A2B" font-weight="700">10</text>
    <text x="60" y="132" font-weight="700">192.168.100.</text><text x="168" y="132" fill="#D98A2B" font-weight="700">20</text>
  </g>
  <rect x="35" y="86" width="205" height="56" rx="8" fill="none" stroke="#3E78B2" stroke-width="2"/>
  <text x="137" y="162" font-size="13" fill="#3E78B2" font-weight="700" text-anchor="middle">ネットワーク部が同じ → 同じLAN</text>
  <g font-family="Menlo,monospace" font-size="15" text-anchor="start">
    <text x="120" y="210" font-weight="700">10.0.0.</text><text x="183" y="210" fill="#D98A2B" font-weight="700">5</text>
  </g>
  <text x="190" y="240" font-size="12" fill="#A6192E" text-anchor="middle">↑ ネットワーク部が違う → 別ネットワーク</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">サブネットマスク</div><div class="b">

- どこまでがネットワーク部かを示すビット列
- <span class="red">/24</span> ＝ 上位24ビット（＝255.255.255.0）
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
<svg viewBox="0 0 940 230" width="100%" style="max-height:255px">
  <rect x="20" y="40" width="300" height="160" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <text x="170" y="63" font-size="15" font-weight="700" text-anchor="middle" fill="#3E78B2">家のLAN（プライベートIP）</text>
  <g font-family="Menlo,monospace" font-size="13" text-anchor="middle">
    <rect x="45" y="88" width="120" height="32" rx="5" fill="#fff" stroke="#3E78B2"/><text x="105" y="109">192.168.0.2</text>
    <rect x="45" y="138" width="120" height="32" rx="5" fill="#fff" stroke="#3E78B2"/><text x="105" y="159">192.168.0.3</text>
    <rect x="185" y="113" width="120" height="32" rx="5" fill="#fff" stroke="#3E78B2"/><text x="245" y="134">192.168.0.4</text>
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
- ② そのIPは <span class="red">グローバル</span>？ <span class="red">プライベート</span>（192.168.x.x）？
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
- 機種が違っても通信できるのは<span class="red">プロトコルが世界共通</span>だから

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
    <rect x="40" y="35" width="380" height="44" rx="6" fill="#3E78B2"/><text x="230" y="62">アプリケーション層　HTTP / SMTP / POP</text>
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

<div class="caption">IPを知った今、各層は「やることの整理棚」として読める。HTTPはアプリ層、IPはインターネット層。</div>

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

<div class="page-title">パケットの中身</div>

## データを小分けし、各パケットに「送り状（ヘッダ）」を貼る

<div class="fig-area">
<svg viewBox="0 0 900 220" width="100%" style="max-height:240px">
  <rect x="40" y="30" width="180" height="60" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="130" y="55" font-size="14" text-anchor="middle" font-weight="700">送りたいデータ</text><text x="130" y="76" font-size="12" text-anchor="middle" fill="#777">全体 384バイト</text>
  <text x="250" y="65" font-size="26" fill="#A6192E" font-weight="800">→</text>
  <g font-size="12" text-anchor="middle">
    <g>
      <rect x="300" y="25" width="260" height="70" rx="6" fill="#fff" stroke="#888"/>
      <rect x="300" y="25" width="170" height="70" rx="6" fill="#FBEFC8" stroke="#888"/>
      <text x="385" y="44" font-weight="700">ヘッダ</text>
      <text x="385" y="63" font-size="11">宛先IP / 送信元IP</text>
      <text x="385" y="80" font-size="11">分割番号（何番目か）</text>
      <rect x="470" y="25" width="90" height="70" rx="6" fill="#D9E7F2" stroke="#888"/><text x="515" y="64" font-weight="700">データ</text>
    </g>
    <text x="430" y="120" font-size="13" fill="#555">＝ パケット1個（ヘッダ＋データ）</text>
  </g>
  <g font-size="11" fill="#fff" text-anchor="middle">
    <rect x="610" y="35" width="60" height="26" rx="4" fill="#3E78B2"/><text x="640" y="52">1/3</text>
    <rect x="690" y="35" width="60" height="26" rx="4" fill="#3C8A57"/><text x="720" y="52">2/3</text>
    <rect x="770" y="35" width="60" height="26" rx="4" fill="#D98A2B"/><text x="800" y="52">3/3</text>
  </g>
  <text x="720" y="90" font-size="12" fill="#555" text-anchor="middle">バラバラに送られ、受信側で番号順に組み立て直す</text>
  <text x="450" y="180" font-size="14" fill="#A6192E" text-anchor="middle" font-weight="700">利点：回線を共有できる／一部が消えてもそのパケットだけ再送すればよい</text>
</svg>
</div>

<div class="caption">宛先IP・送信元IP・分割番号などをヘッダに入れる。引っ越しで段ボールに「送り状」を貼るのと同じ。</div>

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
  <line x1="80" y1="105" x2="250" y2="118" stroke="#A6192E" stroke-width="2" stroke-dasharray="5 3"/><text x="195" y="108" font-size="11" fill="#A6192E" text-anchor="middle">2 (消失)</text>
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

<!-- _class: fig -->

<div class="page-title">パリティ検査の例</div>

## 「1の個数が偶数」になるよう、パリティビットを1つ足す

<div class="fig-area">
<div class="grid2" style="width:96%">
<div>
<svg viewBox="0 0 420 170" width="100%" style="max-height:185px">
  <text x="210" y="20" font-size="13" font-weight="700" text-anchor="middle">(a) 1が偶数個のとき</text>
  <g font-family="Menlo,monospace" font-size="22" text-anchor="middle">
    <text x="150" y="70">0110 1001</text>
    <rect x="280" y="48" width="44" height="32" rx="5" fill="#DDEBC8"/><text x="302" y="72" font-weight="700">0</text>
  </g>
  <text x="150" y="110" font-size="13" fill="#555" text-anchor="middle">1が <tspan font-weight="700">4個＝偶数</tspan></text>
  <text x="302" y="110" font-size="13" fill="#3C8A57" text-anchor="middle" font-weight="700">P=0</text>
  <text x="302" y="40" font-size="11" fill="#777" text-anchor="middle">パリティ</text>
</svg>
</div>
<div>
<svg viewBox="0 0 420 170" width="100%" style="max-height:185px">
  <text x="210" y="20" font-size="13" font-weight="700" text-anchor="middle">(b) 1が奇数個のとき</text>
  <g font-family="Menlo,monospace" font-size="22" text-anchor="middle">
    <text x="150" y="70">0110 1011</text>
    <rect x="280" y="48" width="44" height="32" rx="5" fill="#FAE1E2"/><text x="302" y="72" font-weight="700" fill="#A6192E">1</text>
  </g>
  <text x="150" y="110" font-size="13" fill="#555" text-anchor="middle">1が <tspan font-weight="700">5個＝奇数</tspan></text>
  <text x="302" y="110" font-size="13" fill="#A6192E" text-anchor="middle" font-weight="700">P=1</text>
  <text x="302" y="40" font-size="11" fill="#777" text-anchor="middle">パリティ</text>
</svg>
</div>
</div>
</div>

<div class="caption">こうすると「データ＋パリティ」の1の総数は常に偶数。受信側で奇数なら誤りと分かる（※2個同時の誤りは見逃す）。</div>

<div class="ask"><span class="mono">1110 1010</span> にパリティを付けるなら、P は 0 と 1 のどっち？</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 6 ／ CHAPTER 6</div>

# 名前からページへ

## DNS・ドメイン・URL・HTML（約13分）

---

<!-- _class: fig -->

<div class="page-title">DNS</div>

## ドメイン名を IPアドレスに変換する <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 220" width="100%" style="max-height:240px">
  <g font-size="13" text-anchor="middle">
    <rect x="30" y="40" width="170" height="60" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="115" y="66" font-weight="700">ブラウザ</text><text x="115" y="86" fill="#777">www.example.go.jp ?</text>
    <rect x="370" y="40" width="160" height="60" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="450" y="66" font-weight="700">DNSサーバ</text><text x="450" y="86" fill="#777">名前→IPの対応表</text>
    <rect x="710" y="40" width="160" height="60" rx="8" fill="#fff" stroke="#6B6F76" stroke-width="2"/><text x="790" y="66" font-weight="700">Webサーバ</text><text x="790" y="86" fill="#777">203.0.113.10</text>
  </g>
  <line x1="200" y1="58" x2="370" y2="58" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#d1)"/><text x="285" y="50" font-size="12" fill="#3E78B2" text-anchor="middle">①「IP教えて」</text>
  <line x1="370" y1="84" x2="200" y2="84" stroke="#D98A2B" stroke-width="2.5" marker-end="url(#d2)"/><text x="285" y="100" font-size="12" fill="#D98A2B" text-anchor="middle">②「203.0.113.10」</text>
  <line x1="200" y1="135" x2="710" y2="135" stroke="#A6192E" stroke-width="2.5" marker-end="url(#d3)"/><text x="455" y="127" font-size="12" fill="#A6192E" text-anchor="middle">③ そのIPへ接続してページ取得</text>
  <defs>
    <marker id="d1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
    <marker id="d2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#D98A2B"/></marker>
    <marker id="d3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
  </defs>
</svg>
</div>

<div class="caption">ドメイン名は文字列で覚えやすい。実際のパケットには<span class="red">IPアドレス</span>を書くので、DNSで変換が必要。</div>

<div class="ask">もし世界中のDNSが全部止まったら、インターネットはどうなる？</div>

---

<!-- _class: fig -->

<div class="page-title">ドメイン名の構造</div>

## ドメインは「後ろから」読む ── www.kantei.go.jp <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 110" width="100%" style="max-height:120px">
  <g font-family="Menlo,monospace" font-size="30" font-weight="700" text-anchor="middle">
    <text x="120" y="55" fill="#6B6F76">www</text><text x="210" y="55">.</text>
    <text x="320" y="55" fill="#3C8A57">kantei</text><text x="420" y="55">.</text>
    <text x="500" y="55" fill="#D98A2B">go</text><text x="555" y="55">.</text>
    <text x="640" y="55" fill="#3E78B2">jp</text>
  </g>
  <g font-size="13" text-anchor="middle">
    <text x="120" y="85" fill="#6B6F76">サーバ名</text>
    <text x="320" y="85" fill="#3C8A57">組織名</text>
    <text x="500" y="85" fill="#D98A2B">組織の種類</text>
    <text x="640" y="85" fill="#3E78B2">国名</text>
    <text x="800" y="50" font-size="13" fill="#555">← こちらが</text><text x="800" y="68" font-size="13" fill="#555">大きい区分</text>
  </g>
</svg>
<div class="grid2" style="width:94%;margin-top:6px">
<div>
<table class="dtbl">
<tr><th>組織の種類</th><th>意味</th></tr>
<tr><td>ac</td><td class="l">大学・研究機関</td></tr>
<tr><td>co</td><td class="l">民間企業</td></tr>
<tr><td>go</td><td class="l">政府機関</td></tr>
<tr><td>ed / or / lg</td><td class="l">教育 / 財団 / 地方公共団体</td></tr>
</table>
</div>
<div>
<table class="dtbl">
<tr><th>国名</th><th>国</th></tr>
<tr><td>jp</td><td class="l">日本</td></tr>
<tr><td>uk / de</td><td class="l">イギリス / ドイツ</td></tr>
<tr><td>cn / kr</td><td class="l">中国 / 韓国</td></tr>
<tr><td>（.com等）</td><td class="l">米国発の一般ドメイン</td></tr>
</table>
</div>
</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">URLの分解</div>

## URL ＝ Webページの「住所」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 880 200" width="100%" style="max-height:220px">
  <g font-family="Menlo,monospace" font-size="27" font-weight="700">
    <text x="40" y="80" fill="#3C8A57">https://</text>
    <text x="210" y="80" fill="#3E78B2">www.example.or.jp</text>
    <text x="560" y="80" fill="#D98A2B">/joho/index.html</text>
  </g>
  <g font-size="15" text-anchor="middle">
    <line x1="110" y1="95" x2="110" y2="120" stroke="#3C8A57" stroke-width="2"/><text x="110" y="145" fill="#3C8A57" font-weight="700">プロトコル</text><text x="110" y="165" fill="#777">http / https</text>
    <line x1="385" y1="95" x2="385" y2="120" stroke="#3E78B2" stroke-width="2"/><text x="385" y="145" fill="#3E78B2" font-weight="700">ホスト（ドメイン）</text><text x="385" y="165" fill="#777">IP直指定も可</text>
    <line x1="680" y1="95" x2="680" y2="120" stroke="#D98A2B" stroke-width="2"/><text x="680" y="145" fill="#D98A2B" font-weight="700">パス / ファイル名</text><text x="680" y="165" fill="#777">どのファイルか</text>
  </g>
</svg>
</div>

<div class="caption">パスを省略すると<span class="red">最上位ページ</span>へ。<span class="red">https</span> は通信が暗号化されている（動画7）。</div>

---

<!-- _class: split -->

<div class="page-title">HTMLとブラウザ</div>

## HTML＝構造（タグ）、CSS＝装飾。ブラウザが解釈して表示 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<table class="dtbl">
<tr><th>タグ</th><th>意味</th></tr>
<tr><td class="l"><span class="mono">&lt;html&gt;〜&lt;/html&gt;</span></td><td class="l">文書全体</td></tr>
<tr><td class="l"><span class="mono">&lt;head&gt; &lt;body&gt;</span></td><td class="l">頭部 / 本体</td></tr>
<tr><td class="l"><span class="mono">&lt;title&gt;</span></td><td class="l">ページタイトル</td></tr>
<tr><td class="l"><span class="mono">&lt;p&gt;</span></td><td class="l">段落</td></tr>
<tr><td class="l"><span class="mono">&lt;a href&gt;</span></td><td class="l">リンク</td></tr>
<tr><td class="l"><span class="mono">&lt;img src&gt;</span></td><td class="l">画像</td></tr>
</table>

</div>
<div class="right">

<div class="cbox blue"><div class="h">ページが表示される流れ</div><div class="b">

- ① URL入力 → ② DNSでIPを問い合わせ
- ③ そのIPのサーバへHTTPで要求
- ④ <span class="red">HTML/CSS</span> が返り、ブラウザが描画

</div></div>

<div class="cbox gray"><div class="h">用語</div><div class="b">

- リンクで関連付けた文書＝<span class="red">ハイパーテキスト</span>
- 暗号化された通信＝<span class="red">HTTPS</span>

</div></div>

</div>
</div>

---

<div class="page-title">ワーク⑥</div>

## ワーク：最小のHTMLを書いて、名前を引く

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 Moodle → Colab（個人 or 2人）</div><div class="b">

- ① 最小HTMLを書く：<span class="mono">&lt;h1&gt;はじめてのWeb&lt;/h1&gt;</span>
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
    <rect x="20" y="55" width="150" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="95" y="80" font-weight="700">平文</text><text x="95" y="100" fill="#777">「こんにちは」</text>
    <rect x="360" y="55" width="200" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="460" y="80" font-weight="700">暗号文</text><text x="460" y="100" fill="#777" font-family="Menlo,monospace">&amp;SAKHXC$E</text>
    <rect x="750" y="55" width="130" height="56" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="815" y="80" font-weight="700">平文</text><text x="815" y="100" fill="#777">「こんにちは」</text>
  </g>
  <line x1="170" y1="83" x2="360" y2="83" stroke="#A6192E" stroke-width="2.5" marker-end="url(#e1)"/><text x="265" y="74" font-size="13" text-anchor="middle">暗号化🔒</text>
  <line x1="560" y1="83" x2="750" y2="83" stroke="#3E78B2" stroke-width="2.5" marker-end="url(#e2)"/><text x="655" y="74" font-size="13" text-anchor="middle">復号🔑</text>
  <defs>
    <marker id="e1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A6192E"/></marker>
    <marker id="e2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3E78B2"/></marker>
  </defs>
</svg>
</div>

<div class="caption">暗号化や復号のための手順・データを<span class="red">鍵</span>という。元の情報＝平文、暗号化した情報＝暗号文。</div>

<div class="ask">送り手と受け手が「同じ鍵」を使う方式。その鍵はどうやって安全に渡す？</div>

---

<!-- _class: fig -->

<div class="page-title">シーザー暗号の例</div>

## 文字を一定数だけ「ずらす」── 古典的な換字式暗号

<div class="fig-area">
<svg viewBox="0 0 760 160" width="100%" style="max-height:175px">
  <g font-family="Menlo,monospace" font-size="30" font-weight="700" text-anchor="middle">
    <text x="380" y="50">E N C R Y P T I O N</text>
  </g>
  <g stroke="#A6192E" stroke-width="2">
    <line x1="80" y1="62" x2="80" y2="92" marker-end="url(#cz)"/><line x1="148" y1="62" x2="148" y2="92" marker-end="url(#cz)"/><line x1="216" y1="62" x2="216" y2="92" marker-end="url(#cz)"/><line x1="284" y1="62" x2="284" y2="92" marker-end="url(#cz)"/><line x1="352" y1="62" x2="352" y2="92" marker-end="url(#cz)"/><line x1="420" y1="62" x2="420" y2="92" marker-end="url(#cz)"/><line x1="488" y1="62" x2="488" y2="92" marker-end="url(#cz)"/><line x1="556" y1="62" x2="556" y2="92" marker-end="url(#cz)"/><line x1="624" y1="62" x2="624" y2="92" marker-end="url(#cz)"/><line x1="692" y1="62" x2="692" y2="92" marker-end="url(#cz)"/>
  </g>
  <defs><marker id="cz" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 Z" fill="#A6192E"/></marker></defs>
  <text x="380" y="115" font-size="14" fill="#A6192E" text-anchor="middle">1文字ずらす（E→F, N→O, …）</text>
  <g font-family="Menlo,monospace" font-size="30" font-weight="700" text-anchor="middle">
    <text x="380" y="150" fill="#3C8A57">F O D S Z Q U J P O</text>
  </g>
</svg>
</div>

<div class="caption">他に、文字の順番を入れ替える<span class="red">転置法</span>（例：エニグマ）。コンピュータでは人の手で解けない暗号を使う。</div>

---

<!-- _class: fig -->

<div class="page-title">公開鍵暗号</div>

## 公開鍵で「暗号化」、秘密鍵で「復号」 <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 900 200" width="100%" style="max-height:220px">
  <g font-size="13" text-anchor="middle">
    <rect x="20" y="75" width="120" height="56" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="80" y="100" font-weight="700">送り手A</text><text x="80" y="119" fill="#777">平文</text>
    <rect x="220" y="65" width="150" height="76" rx="8" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="295" y="93" font-size="22">🔒</text><text x="295" y="117" font-weight="700">Bの公開鍵で暗号化</text>
    <rect x="450" y="75" width="140" height="56" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/><text x="520" y="100" font-weight="700">暗号文</text><text x="520" y="119" fill="#777">ネットを流れる</text>
    <rect x="680" y="65" width="160" height="76" rx="8" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/><text x="760" y="93" font-size="22">🔑</text><text x="760" y="117" font-weight="700">Bの秘密鍵で復号</text>
  </g>
  <g fill="#A6192E" font-size="24" font-weight="800"><text x="155" y="110">→</text><text x="385" y="110">→</text><text x="605" y="110">→</text></g>
  <text x="520" y="165" font-size="13" fill="#A6192E" text-anchor="middle">第三者は公開鍵を持っていても復号できない ✕</text>
</svg>
</div>

<div class="caption">公開鍵は誰に渡してもよい。復号できるのは、対になった<span class="red">秘密鍵を持つ受け手B だけ</span>。相手ごとの鍵配布が不要。</div>

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
  <ellipse cx="305" cy="80" rx="45" ry="12" fill="#dce8f5" stroke="#6B6F76" stroke-width="2"/>
  <path d="M260 80 v70 a45 12 0 0 0 90 0 v-70" fill="#eef4fa" stroke="#6B6F76" stroke-width="2"/>
  <text x="305" y="135" font-size="12" text-anchor="middle">DB</text>
  <line x1="250" y1="115" x2="262" y2="115" stroke="#bbb" stroke-width="2"/>
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

<div class="page-title">SQL：選択・射影・結合</div>

## 蔵書テーブルから、欲しい行・列を取り出す <span class="important">重要</span>

<div class="fig-area">
<svg viewBox="0 0 920 220" width="100%" style="max-height:235px">
  <g font-size="12" text-anchor="middle">
    <text x="150" y="22" font-weight="700">蔵書テーブル</text>
    <rect x="20" y="32" width="260" height="120" fill="#fff" stroke="#888"/>
    <line x1="20" y1="58" x2="280" y2="58" stroke="#888"/>
    <line x1="110" y1="32" x2="110" y2="152" stroke="#888"/><line x1="190" y1="32" x2="190" y2="152" stroke="#888"/>
    <text x="65" y="50" fill="#3E78B2" font-weight="700">タイトル</text><text x="150" y="50" fill="#A6192E" font-weight="700">著者</text><text x="235" y="50">出版社</text>
    <text x="65" y="80">情報の科学</text><text x="150" y="80">海浜</text><text x="235" y="80">A社</text>
    <text x="65" y="106">ネット入門</text><text x="150" y="106">千葉</text><text x="235" y="106">B社</text>
    <text x="65" y="132">データ論</text><text x="150" y="132">海浜</text><text x="235" y="132">C社</text>
  </g>
  <g font-size="13" text-anchor="middle">
    <rect x="330" y="35" width="180" height="50" rx="8" fill="#eef4fa" stroke="#3E78B2"/><text x="420" y="56" font-weight="700" fill="#3E78B2">選択</text><text x="420" y="75" font-size="11">著者=「海浜」の行</text>
    <rect x="330" y="95" width="180" height="50" rx="8" fill="#fdf3e8" stroke="#D98A2B"/><text x="420" y="116" font-weight="700" fill="#D98A2B">射影</text><text x="420" y="135" font-size="11">「タイトル」の列</text>
    <rect x="330" y="155" width="180" height="48" rx="8" fill="#eef7ef" stroke="#3C8A57"/><text x="420" y="175" font-weight="700" fill="#3C8A57">結合</text><text x="420" y="193" font-size="11">別の表とつなぐ</text>
  </g>
  <text x="540" y="120" font-size="30" fill="#A6192E" font-weight="800">→</text>
  <g font-size="12" text-anchor="middle">
    <text x="700" y="22" font-weight="700">SELECT タイトル</text>
    <rect x="585" y="40" width="320" height="60" rx="6" fill="#F8E5EA"/>
    <text x="745" y="66" font-family="Menlo,monospace" font-size="14" font-weight="700">SELECT タイトル FROM 蔵書</text>
    <text x="745" y="88" font-family="Menlo,monospace" font-size="14" font-weight="700">WHERE 著者='海浜';</text>
    <text x="700" y="130" font-size="13">→ 結果：</text>
    <rect x="620" y="142" width="250" height="62" fill="#fff" stroke="#888"/><line x1="620" y1="168" x2="870" y2="168" stroke="#888"/>
    <text x="745" y="160" fill="#3E78B2" font-weight="700">タイトル</text>
    <text x="745" y="190">情報の科学 / データ論</text>
  </g>
</svg>
</div>

<div class="caption">表＝<span class="red">テーブル</span>／列＝カラム／行＝レコード。<span class="red">選択</span>＝行を絞る、<span class="red">射影</span>＝列を選ぶ、<span class="red">結合(JOIN)</span>＝表をつなぐ。</div>

---

<div class="page-title">ワーク⑧</div>

## ワーク：Colab で pandas × SQL を動かす

<div class="grid2">
<div>

<div class="cbox green"><div class="h">🔧 表計算ではなく「コード」で（Moodle → Colab）</div><div class="b">

- ① <span class="mono">import pandas as pd</span> で表を2つ作る（書籍・著者）
- ② <span class="mono">pandasql</span> / <span class="mono">sqlite3</span> で SQL：<br><span class="mono">SELECT 書名,著者名 FROM 書籍 JOIN 著者 USING(著者ID)</span>
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

<div class="page-title">データの種類と尺度</div>

## データの「種類（尺度水準）」を見分ける <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 230" width="100%" style="max-height:240px">
  <g font-size="13">
    <rect x="20" y="170" width="320" height="40" rx="6" fill="#cfe0f0"/><text x="30" y="195" font-weight="700">名義尺度</text><text x="200" y="195" fill="#555">血液型・国名</text>
    <rect x="40" y="125" width="300" height="40" rx="6" fill="#a9c6e6"/><text x="50" y="150" font-weight="700">順序尺度</text><text x="210" y="150" fill="#333">震度・順位</text>
    <rect x="60" y="80" width="280" height="40" rx="6" fill="#7faedb"/><text x="70" y="105" font-weight="700">間隔尺度</text><text x="240" y="105" fill="#fff">差に意味・西暦</text>
    <rect x="80" y="35" width="260" height="40" rx="6" fill="#3E78B2"/><text x="90" y="60" font-weight="700" fill="#fff">比例尺度</text><text x="255" y="60" fill="#fff">身長・金額</text>
  </g>
  <text x="180" y="228" font-size="12" fill="#777" text-anchor="middle">下ほど「できる計算」が増える</text>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h">質的データ / 量的データ</div><div class="b">

- 質的＝<span class="red">名義・順序</span>（文字で表す）
- 量的＝<span class="red">間隔・比例</span>（数値で表す）

</div></div>

<div class="cbox gray"><div class="h">データの形式</div><div class="b">

- <span class="red">テキスト形式</span>（人が読める／CSV・TSV・HTML）
- <span class="red">バイナリ形式</span>（画像など／専用ソフトで編集）

</div></div>

</div>
</div>

<div class="ask">「時給（円）」と「満足度の5段階」── それぞれ何尺度？</div>

---

<!-- _class: fig -->

<div class="page-title">度数分布とヒストグラム</div>

## データを階級に分け、個数（度数）を数える

<div class="fig-area">
<div class="grid2" style="width:97%;align-items:center">
<div>
<table class="dtbl">
<tr><th>階級（℃）</th><th>度数（日）</th></tr>
<tr><td>24 〜 26</td><td>2</td></tr>
<tr><td>26 〜 28</td><td>5</td></tr>
<tr><td>28 〜 30</td><td>9</td></tr>
<tr><td>30 〜 32</td><td>10</td></tr>
<tr><td>32 〜 34</td><td>4</td></tr>
</table>
<div class="attr" style="text-align:center">東京・2022年9月の最高気温（例）</div>
</div>
<div>
<svg viewBox="0 0 360 220" width="100%" style="max-height:220px">
  <line x1="45" y1="185" x2="345" y2="185" stroke="#888" stroke-width="2"/>
  <line x1="45" y1="185" x2="45" y2="25" stroke="#888" stroke-width="2"/>
  <g fill="#3E78B2">
    <rect x="55" y="155" width="52" height="30"/>
    <rect x="111" y="110" width="52" height="75"/>
    <rect x="167" y="50" width="52" height="135"/>
    <rect x="223" y="35" width="52" height="150"/>
    <rect x="279" y="125" width="52" height="60"/>
  </g>
  <g font-size="11" text-anchor="middle" fill="#555"><text x="81" y="200">24-26</text><text x="137" y="200">26-28</text><text x="193" y="200">28-30</text><text x="249" y="200">30-32</text><text x="305" y="200">32-34</text></g>
  <text x="195" y="18" font-size="13" font-weight="700" text-anchor="middle">ヒストグラム</text>
</svg>
</div>
</div>
</div>

<div class="caption">度数分布表をグラフにしたものが<span class="red">ヒストグラム</span>。分布の形（山の位置・広がり）が一目で分かる。</div>

---

<!-- _class: fig -->

<div class="page-title">代表値の落とし穴</div>

## 平均値か、中央値か ── 外れ値に注意 <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:97%">
<div>
<div class="cbox blue"><div class="h">A町（5店舗の弁当の値段）</div><div class="b">

<span class="mono">260 270 280 290 300</span> 円<br>
平均値 ＝ <span class="red">280円</span>／中央値 ＝ 280円

</div></div>
<div class="cbox orange"><div class="h">B町（6店舗）</div><div class="b">

<span class="mono"><span class="hl-pink">100</span> 260 270 280 280 280</span> 円<br>
平均値 ＝ <span class="red">245円</span>／中央値 ＝ <span class="red">275円</span>

</div></div>
</div>
<div>
<svg viewBox="0 0 360 200" width="100%" style="max-height:200px">
  <line x1="30" y1="120" x2="345" y2="120" stroke="#888" stroke-width="2"/>
  <g font-size="11" fill="#555" text-anchor="middle"><text x="40" y="140">100</text><text x="330" y="140">300</text></g>
  <g fill="#D98A2B"><circle cx="44" cy="120" r="6"/><circle cx="262" cy="120" r="6"/><circle cx="277" cy="120" r="6"/><circle cx="292" cy="120" r="6"/><circle cx="292" cy="106" r="6"/><circle cx="292" cy="134" r="6"/></g>
  <line x1="206" y1="55" x2="206" y2="120" stroke="#A6192E" stroke-width="2" stroke-dasharray="4 3"/><text x="206" y="48" font-size="12" fill="#A6192E" text-anchor="middle">平均245</text>
  <line x1="285" y1="160" x2="285" y2="120" stroke="#3C8A57" stroke-width="2" stroke-dasharray="4 3"/><text x="285" y="178" font-size="12" fill="#3C8A57" text-anchor="middle">中央値275</text>
  <text x="44" y="100" font-size="11" fill="#A6192E" text-anchor="middle">外れ値</text>
</svg>
</div>
</div>
</div>

<div class="caption">B町は「100円」という<span class="red">外れ値</span>が平均を引き下げる。実感に近いのは中央値。最頻値（モード）は280円。</div>

---

<!-- _class: fig -->

<div class="page-title">箱ひげ図・ばらつき</div>

## 散らばりを「数値」と「図」で表す <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:97%;align-items:center">
<div>
<svg viewBox="0 0 380 170" width="100%" style="max-height:180px">
  <line x1="30" y1="80" x2="360" y2="80" stroke="#888" stroke-width="2"/>
  <line x1="60" y1="80" x2="120" y2="80" stroke="#3E78B2" stroke-width="2"/>
  <line x1="270" y1="80" x2="330" y2="80" stroke="#3E78B2" stroke-width="2"/>
  <rect x="120" y="55" width="150" height="50" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
  <line x1="190" y1="55" x2="190" y2="105" stroke="#A6192E" stroke-width="3"/>
  <g stroke="#3E78B2" stroke-width="2"><line x1="60" y1="65" x2="60" y2="95"/><line x1="330" y1="65" x2="330" y2="95"/></g>
  <g font-size="11" text-anchor="middle" fill="#555">
    <text x="60" y="130">最小値</text><text x="120" y="130">第1四分位</text><text x="190" y="45" fill="#A6192E">中央値</text><text x="270" y="130">第3四分位</text><text x="330" y="130">最大値</text>
  </g>
</svg>
</div>
<div>
<div class="cbox gray"><div class="h">分散・標準偏差・偏差値</div><div class="b">

- <span class="red">分散</span>＝偏差（平均との差）の2乗の平均
- <span class="red">標準偏差</span>＝√分散（ばらつきの大きさ）
- <span class="red">偏差値</span> ＝ (得点−平均)÷標準偏差 ×10 ＋50

</div></div>
</div>
</div>
</div>

<div class="caption">データを4等分する位置が<span class="red">四分位数</span>。複数集団の分布を比べるなら<span class="red">箱ひげ図</span>が有効。</div>

---

<!-- _class: fig -->

<div class="page-title">相関・因果・回帰</div>

## 相関は因果ではない／予測する <span class="important">重要</span>

<div class="fig-area">
<div class="grid3" style="width:98%">
<div>
<svg viewBox="0 0 260 180" width="100%" style="max-height:180px">
  <text x="130" y="15" font-size="12" font-weight="700" text-anchor="middle">正の相関＋回帰直線</text>
  <line x1="30" y1="155" x2="245" y2="155" stroke="#888"/><line x1="30" y1="155" x2="30" y2="25" stroke="#888"/>
  <g fill="#A6192E"><circle cx="55" cy="140" r="3.5"/><circle cx="80" cy="128" r="3.5"/><circle cx="105" cy="118" r="3.5"/><circle cx="130" cy="100" r="3.5"/><circle cx="155" cy="88" r="3.5"/><circle cx="180" cy="70" r="3.5"/><circle cx="210" cy="50" r="3.5"/></g>
  <line x1="45" y1="148" x2="220" y2="45" stroke="#3E78B2" stroke-width="2.5" stroke-dasharray="5 3"/>
  <text x="135" y="178" font-size="11" fill="#3E78B2" text-anchor="middle">Y = aX + b で予測</text>
</svg>
</div>
<div>
<svg viewBox="0 0 260 180" width="100%" style="max-height:180px">
  <text x="130" y="15" font-size="12" font-weight="700" text-anchor="middle">負の相関 / 相関なし</text>
  <line x1="30" y1="155" x2="245" y2="155" stroke="#888"/><line x1="30" y1="155" x2="30" y2="25" stroke="#888"/>
  <g fill="#3C8A57"><circle cx="55" cy="50" r="3.5"/><circle cx="80" cy="70" r="3.5"/><circle cx="105" cy="85" r="3.5"/><circle cx="130" cy="100" r="3.5"/><circle cx="160" cy="120" r="3.5"/><circle cx="195" cy="138" r="3.5"/></g>
  <g fill="#999"><circle cx="70" cy="110" r="3"/><circle cx="110" cy="60" r="3"/><circle cx="150" cy="130" r="3"/><circle cx="190" cy="70" r="3"/><circle cx="210" cy="115" r="3"/></g>
  <text x="135" y="178" font-size="11" fill="#555" text-anchor="middle">緑＝負／灰＝相関なし</text>
</svg>
</div>
<div>
<svg viewBox="0 0 260 180" width="100%" style="max-height:180px">
  <text x="130" y="15" font-size="12" font-weight="700" text-anchor="middle">見かけの相関（交絡）</text>
  <rect x="90" y="30" width="80" height="34" rx="8" fill="#D98A2B"/><text x="130" y="52" font-size="12" fill="#fff" font-weight="700" text-anchor="middle">暑さ</text>
  <rect x="10" y="115" width="100" height="34" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="60" y="137" font-size="11" text-anchor="middle">アイス消費</text>
  <rect x="150" y="115" width="100" height="34" rx="8" fill="#fff" stroke="#3C8A57" stroke-width="2"/><text x="200" y="137" font-size="11" text-anchor="middle">水難事故</text>
  <line x1="115" y1="64" x2="70" y2="115" stroke="#D98A2B" stroke-width="2" marker-end="url(#cc1)"/>
  <line x1="145" y1="64" x2="190" y2="115" stroke="#D98A2B" stroke-width="2" marker-end="url(#cc2)"/>
  <line x1="110" y1="132" x2="150" y2="132" stroke="#A6192E" stroke-width="2" stroke-dasharray="4 3"/>
  <defs><marker id="cc1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#D98A2B"/></marker><marker id="cc2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6 Z" fill="#D98A2B"/></marker></defs>
</svg>
</div>
</div>
</div>

<div class="caption">真因は「暑さ」＝<span class="red">交絡因子</span>。<span class="red">仮説検定</span>：帰無仮説を立て、有意水準5%で棄却するか判断する。</div>

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
    <rect x="60" y="35" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="160" y="56">アプリ（自分）</text>
    <rect x="60" y="69" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="160" y="90">OS（自分）</text>
    <rect x="60" y="103" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="160" y="124">仮想マシン（事業者）</text>
    <rect x="60" y="137" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="160" y="158">物理・電源（事業者）</text>
    <text x="160" y="190" font-size="12" fill="#555">例：Compute Engine</text>
    <rect x="350" y="35" width="200" height="32" fill="#FAE1E2" stroke="#ddd"/><text x="450" y="56">アプリ（自分）</text>
    <rect x="350" y="69" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="90">実行環境（事業者）</text>
    <rect x="350" y="103" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="124">OS（事業者）</text>
    <rect x="350" y="137" width="200" height="32" fill="#DDEBC8" stroke="#ddd"/><text x="450" y="158">基盤（事業者）</text>
    <text x="450" y="190" font-size="12" fill="#555">例：Cloud Run</text>
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
- データは<span class="red">DB・SQL</span>で構造化して扱い、分析では「相関≠因果・外れ値」に注意
- クラウド（<span class="red">IaaS/PaaS/SaaS</span>）と GCP で、自分で手を動かして学び続ける

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問は Moodle へ ・ 視聴期限内に全10本の視聴を（課題もMoodle）
