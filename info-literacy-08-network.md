---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ-08</div><img class="hdr-logo" src="./assets/logo-info-literacy.svg">'
footer: ''
style: |
  /* ページ番号を左下へ（前回スライドに合わせる） */
  section::after { left: 28px; right: auto; }
  /* 「重要」タグ（暗記マスト） */
  .important { display:inline-block; background:#FBE0E0; color:#B11C1C; font-weight:700;
    font-size:19px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.14em;
    vertical-align:middle; border:1px solid #f0c4c4; }
  /* 色付きヘッダーのボックス */
  .cbox { border-radius:10px; overflow:hidden; background:#F6F7F9; margin:8px 0; border:1px solid #e7e7ea; }
  .cbox > .h { color:#fff; font-weight:700; padding:6px 18px; font-size:21px; }
  .cbox > .b { padding:9px 18px 11px; font-size:20px; }
  .cbox.blue   > .h { background:#3E78B2; }
  .cbox.green  > .h { background:#3C8A57; }
  .cbox.orange > .h { background:#D98A2B; }
  .cbox.gray   > .h { background:#6B6F76; }
  .cbox.red    > .h { background:var(--accent); }
  .cbox .b ul { margin:4px 0 4px 1.1em; }
  .cbox .b li { margin:3px 0; }
  /* 強調 */
  .hi-pink   { background:#FAE1E2; padding:0 4px; }
  .hi-yellow { background:#FBEFC8; padding:0 4px; }
  .hi-green  { background:#DDEBC8; padding:0 4px; }
  .red { color:var(--accent); font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .closing { text-align:center; font-weight:700; font-size:25px; margin-top:12px; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
  /* IPオクテット図 */
  .ipgrid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; max-width:760px; margin:10px auto; }
  .oct { border:2px solid var(--accent); border-radius:8px; text-align:center; overflow:hidden; }
  .oct .dec { font-size:30px; font-weight:800; padding:6px 0; }
  .oct .bin { font-family:"Menlo",monospace; font-size:18px; background:var(--accent-soft); padding:5px 0; letter-spacing:1px; }
  /* ビットバー（/24） */
  .bitbar { display:flex; height:54px; border-radius:8px; overflow:hidden; margin:14px 0; font-weight:700; color:#fff; }
  .bitbar .net  { background:#3E78B2; display:flex; align-items:center; justify-content:center; }
  .bitbar .host { background:#D98A2B; display:flex; align-items:center; justify-content:center; }
  /* ポート（建物と部屋） */
  .hostbox { border:2px solid #6B6F76; border-radius:10px; padding:8px 12px 12px; max-width:560px; margin:8px auto; }
  .hostbox .ip { font-weight:700; font-family:"Menlo",monospace; margin-bottom:8px; }
  .rooms { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
  .room { background:var(--accent-soft); border-radius:8px; text-align:center; padding:8px 4px; font-weight:700; font-family:"Menlo",monospace; }
  /* 層マップ */
  .layer { border-radius:7px; padding:7px 12px; margin:5px 0; font-weight:700; color:#fff; font-size:19px; }
  /* フロー */
  .flow { display:flex; align-items:center; justify-content:center; gap:6px; flex-wrap:wrap; margin:14px 0; }
  .node { background:#fff; border:2px solid var(--accent); border-radius:10px; padding:10px 14px; font-weight:700; text-align:center; font-size:18px; }
  .arrow { color:var(--accent); font-weight:800; font-size:24px; }
  /* URL分解 */
  .urlbar { font-family:"Menlo",monospace; font-size:22px; text-align:center; margin:10px 0; }
  .u-sch { color:#3C8A57; font-weight:700; }
  .u-host{ color:#3E78B2; font-weight:700; }
  .u-path{ color:#D98A2B; font-weight:700; }
  /* JOIN表 */
  .jtbl { font-size:17px; border-collapse:collapse; }
  .jtbl th, .jtbl td { border:1px solid #bbb; padding:3px 9px; }
  .jtbl th { background:var(--accent-soft); }
  /* IaaS/PaaS/SaaS */
  .stk { border:1px solid #ddd; border-radius:8px; overflow:hidden; }
  .stk .t { background:#6B6F76; color:#fff; font-weight:700; text-align:center; padding:6px; }
  .stk .you { background:#FAE1E2; padding:4px; text-align:center; font-size:16px; }
  .stk .prov{ background:#DDEBC8; padding:4px; text-align:center; font-size:16px; }
---

<!-- _class: cover -->

# ネットワークの仕組みと<br>インターネット

## 情報リテラシ 第8回 ／ オンデマンド講義（全10本）

### 千葉大学 情報リテラシー

<div class="meta">第2ターム ・ 1本 約8〜18分（合計 約130分）／ 視聴期限内に全本を視聴してください</div>

<!-- 第8回は教室実施のないオンデマンド回。1日数本ずつ公開。第8回分の小テストは別途Moodleで。 -->

---

<!-- _class: summary -->

<div class="page-title">この回の地図</div>

## 自分の端末から世界のサーバーへ「1つの通信」を追う

<div class="sections">

<div class="sec-box">

### Part 1：ネットワークの旅（動画1〜7）

- 基礎 → <span class="red">IPアドレス</span> → 階層モデル → 配送（ルーティング）→ 名前(DNS)→ 安全（暗号・Wi-Fi）
- キーワードは「URLを入れてからページが出るまで」

</div>

<div class="sec-box">

### Part 2：データを扱う（動画8〜9）

- データベースとSQL／情報システムの応用とデータ分析入門

</div>

<div class="sec-box">

### Part 3：クラウドへ（動画10）

- クラウドの基礎と、GCP（Google Cloud）で自分で学び続ける方法

</div>

</div>

<!-- 暗記してほしい厳選項目には <重要> タグを付けています。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 1 ／ CHAPTER 1</div>

# 学び方と、この講義の地図

## 学びの「モード」を増やす（約8分）

---

<!-- _class: summary -->

<div class="page-title">学び方</div>

## 情報の集め方は、1つじゃない

<div class="sections">

<div class="sec-box">

### 5つの学びのモード

- ① <span class="red">実験する</span>（自分の手で試す）／② インターネットで調べる
- ③ AI（Gemini・NotebookLM）に聞く／④ <span class="red">人に聞く</span>（友人・先生・図書館のLS）
- ⑤ <span class="red">本・論文</span>（信頼できる情報の貯蔵庫／最先端の知）

</div>

<div class="sec-box">

### 大学という「場」の価値

- 安全に失敗でき、人の経験・実践知を聞ける
- 「教科書とAIだけで完結」はもったいない

</div>

</div>

<div class="takeaway">全部を一人で分かる必要はない。複数のモードを行き来する。</div>

---

<!-- _class: split -->

<div class="page-title">AIとの付き合い方</div>

## AIは「軸」ではなく「1モード」

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">良い使い方（前回の自由記述より）</div><div class="b">

- 丸投げせず、<span class="red">主体的・補助的</span>に使う
- 課題の最短化でなく、学びを<span class="red">深く・広く</span>するために
- 誤情報・ハルシネーションは必ず確認

</div></div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">浅い答えしか出ない時は？</div><div class="b">

- 表面的に聞けば、浅い答えしか返らない
- 自分が深く理解し、論文などで<span class="red">文脈（コンテキスト）</span>を与えると、同じAIでも遥かに充実した答えになる

</div></div>

</div>
</div>

<div class="takeaway">AIを軸に学習を組み立てない。自分を鍛える複数の方法の1つとして使う。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 2 ／ CHAPTER 2</div>

# ネットワークの基礎

## LAN・WAN・Wi-Fi（約14分）

---

<!-- _class: summary -->

<div class="page-title">ネットワークとは</div>

## インターネット＝相互に接続されたネットワーク

<div class="sections">

<div class="sec-box">

### インターネット（Inter-network） <span class="important">重要</span>

- 「いろいろなネットワークを繋ぎ、互いに通信できる環境」
- ネットワーク自体は人の繋がり・交通網など様々。ここでは<span class="red">コンピュータの網</span>を扱う

</div>

<div class="sec-box">

### ネットワークの大きさ：LAN と WAN <span class="important">重要</span>

- <span class="red">LAN</span>（Local Area Network）：家・学校・企業など限られた範囲
- <span class="red">WAN</span>（Wide Area Network）：広域。通信事業者が提供。LAN同士を繋ぐ
- LAN を WAN に繋ぐ装置が <span class="red">ルーター</span>

</div>

</div>

---

<!-- _class: split -->

<div class="page-title">サーバとクライアント</div>

## 役割は「相対的」── 提供すればサーバ、利用すればクライアント

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">クライアントサーバシステム <span class="important" style="margin-left:6px">重要</span></div><div class="b">

- <span class="red">サーバ</span>：サービスを提供する側
- <span class="red">クライアント</span>：サービスを利用する側
- ネットに繋がる全てのコンピュータ＝<span class="red">ホスト</span>

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">「相対的」とはどういうこと？</div><div class="b">

- 自分のノートPCを<span class="red">サーバ</span>にして相手に提供することもできる
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

<div class="cbox blue"><div class="h">有線LAN（イーサネット）</div><div class="b">

- 規格＝<span class="red">Ethernet</span>。配線は「より対線」
- <span class="red">ハブ</span>（集線装置）に機器をケーブル接続
- 速度：100Mbps 〜 10Gbps

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">無線LAN（Wi-Fi）</div><div class="b">

- 規格＝<span class="red">IEEE 802.11</span>。11ax＝<span class="red">Wi-Fi 6</span>で最大9.6Gbps
- 互換が保証された機器の名称が <span class="red">Wi-Fi</span>
- <span class="red">アクセスポイント（親機）</span>に電波で接続

</div></div>

</div>
</div>

<div class="takeaway">同じ「LAN」でも、ケーブルか電波かで規格・装置が変わる。</div>

---

<!-- _class: fig -->

<div class="page-title">WAN・モバイル通信</div>

## スマホもWANに繋がり、IPアドレスを持つ

<div class="fig-area">

| 世代 | 開始 | 最大速度 | ひとこと |
|---|---|---|---|
| 5G | 2020年〜 | 約 20Gbps | 超高速・大容量（約2.5GB/秒相当） |
| 4G | — | 50Mbps〜1Gbps | 5Gの前世代 |
| LTE | 2012年頃〜 | 100Mbps以上 | 4Gの一歩手前（3.9G） |

</div>

<div class="caption">基幹回線には光ファイバーなどの高速回線。電話会社・ケーブルTVなど様々な回線を経由。</div>

<div class="takeaway">WANに繋がる＝固有のIPアドレスを持ち、世界中と通信できる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 3 ／ CHAPTER 3 ★核</div>

# IPアドレスとサブネット・ポート

## 「住所」のしくみ（約18分）

---

<!-- _class: fig -->

<div class="page-title">IPアドレスの基礎</div>

## IPアドレス＝ネット上の「住所」 <span class="important">重要</span>

<div class="ipgrid">
<div class="oct"><div class="dec">192</div><div class="bin">11000000</div></div>
<div class="oct"><div class="dec">168</div><div class="bin">10101000</div></div>
<div class="oct"><div class="dec">100</div><div class="bin">01100100</div></div>
<div class="oct"><div class="dec">10</div><div class="bin">00001010</div></div>
</div>

<div class="caption">32ビットを 8ビット ずつ 4つに区切り、10進法で表記（各オクテットは <span class="red">0〜255</span>）</div>

<div class="takeaway">接続する全コンピュータに固有のIPを割り当て、相手を識別する。</div>

---

<!-- _class: split -->

<div class="page-title">サブネットとCIDR</div>

## IPは「ネットワーク部」＋「ホスト部」に分かれる <span class="important">重要</span>

<div class="split-body">
<div class="left">

<div class="bitbar"><div class="net" style="flex:3">ネットワーク部（24ビット）</div><div class="host" style="flex:1">ホスト部（8）</div></div>

<div class="cbox blue"><div class="h">192.168.100.0 / 24</div><div class="b">

- <span class="red">/24</span>＝上位<span class="red">24ビット</span>がネットワーク部
- 残り8ビット（=256個）がホスト用

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">サブネットマスク</div><div class="b">

- どこまでがネットワーク部かを示すビット列
- <span class="red">ネットワーク部が同じ＝同一ネットワーク</span>
- 例：192.168.100.10 と .20 は同じLAN内

</div></div>

</div>
</div>

<div class="takeaway">「同じネットワークにいるか？」はネットワーク部が一致するかで決まる。</div>

---

<!-- _class: summary -->

<div class="page-title">グローバルとプライベート</div>

## 足りないIPを、賢く使い回す ── NAT と IPv6

<div class="sections">

<div class="sec-box">

### グローバルIP と プライベートIP <span class="important">重要</span>

- <span class="red">グローバルIP</span>：世界で重複しない。<span class="red">ICANN</span>が管理・割当
- <span class="red">プライベートIP</span>：LAN内だけで使う（例：192.168.x.x）
- <span class="red">NAT</span>：LAN内はプライベート、ルーターだけグローバルを持ち変換

</div>

<div class="sec-box">

### IPv4の枯渇 → IPv6 <span class="important">重要</span>

- IPv4＝32ビット＝約43億個。足りなくなってきた
- <span class="red">IPv6＝128ビット</span>＝2の128乗（事実上いくらでも）

</div>

</div>

---

<!-- _class: split -->

<div class="page-title">ポート番号</div>

## IPは「建物の住所」、ポートは「部屋番号」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<div class="hostbox">
<div class="ip">203.0.113.5（このサーバの住所）</div>
<div class="rooms">
<div class="room">:80<br>HTTP</div>
<div class="room">:443<br>HTTPS</div>
<div class="room">:8000<br>自作アプリ</div>
</div>
</div>

</div>
<div class="right">

<div class="cbox green"><div class="h">IP:port の形で「サービス」を指定</div><div class="b">

- 1台のホストで複数のサービスを動かせる
- well-known：<span class="red">80=HTTP</span> / <span class="red">443=HTTPS</span>
- 自分のPC内は <span class="mono">localhost:8000</span>（=127.0.0.1）

</div></div>

</div>
</div>

<div class="takeaway"><span class="mono">192.0.2.1:443</span> ＝「この住所の、443号室（HTTPS）に届けて」という意味。</div>

---

<div class="page-title">ワーク③</div>

## ワーク：自分のIPアドレスを考えてみよう

<div class="cbox blue"><div class="h">🔧 紙とペアで考える（コマンドは使わなくてOK）</div><div class="b">

- ① いま使っているスマホ／PCは、どのネットワークに属している？<br>　自宅Wi-Fi？ 大学Wi-Fi？ モバイル回線？
- ② その端末のIPは <span class="red">グローバル</span>？ それとも <span class="red">プライベート（192.168.x.x など）</span>？
- ③ 自宅のルーターが世界に見せている<span class="red">グローバルIPは何個</span>？（ヒント：NAT）
- ④ 同じWi-Fiに繋いだ友人と、自分の<span class="red">ネットワーク部</span>は同じになる？

</div></div>

<div class="closing">「住所のしくみ」を自分の環境に当てはめて考えるのが、いちばんの理解。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 4 ／ CHAPTER 4</div>

# プロトコルと階層モデル

## TCP/IP と OSI参照モデル（約12分）

---

<!-- _class: summary -->

<div class="page-title">プロトコルとは</div>

## 通信プロトコル＝あらかじめ定めた「規約・手順」 <span class="important">重要</span>

<div class="sections">

<div class="sec-box">

### 身近なプロトコルの例

- 固定電話のモデム：どう回線を開き通信を始めるかの取り決め
- 野球のサイン交換：「OKなら頷く／ダメなら首を振る」も一種のプロトコル
- 語源は「外交儀礼」。IT では「規約・手順」の意味

</div>

<div class="sec-box">

### 世界共通だから、機種が違っても繋がる

- スマホから送ったメールをPCで受信できる
- ハード・ソフトが異なっても通信できるのは、<span class="red">プロトコルが世界共通</span>だから

</div>

</div>

---

<!-- _class: fig -->

<div class="page-title">TCP/IP と OSI</div>

## TCP/IP「4階層」 ↔ OSI参照モデル「7階層」 <span class="important">重要</span>

<div class="fig-area">
<div class="grid2" style="width:92%;align-items:start">
<div>
<div style="text-align:center;font-weight:700;margin-bottom:6px">TCP/IP（4階層）</div>
<div class="layer" style="background:#3E78B2">アプリケーション層　HTTP / SMTP / POP / IMAP</div>
<div class="layer" style="background:#3C8A57">トランスポート層　TCP（ポート番号・信頼性）</div>
<div class="layer" style="background:#D98A2B">インターネット層　IP（IPアドレス）</div>
<div class="layer" style="background:#6B6F76">ネットワークインターフェース層　Ethernet</div>
</div>
<div>
<div style="text-align:center;font-weight:700;margin-bottom:6px">OSI参照モデル（7階層・ISO策定）</div>
<div class="layer" style="background:#3E78B2;font-size:17px">7 アプリ／6 プレゼン／5 セッション</div>
<div class="layer" style="background:#3C8A57;font-size:17px">4 トランスポート</div>
<div class="layer" style="background:#D98A2B;font-size:17px">3 ネットワーク</div>
<div class="layer" style="background:#6B6F76;font-size:17px">2 データリンク／1 物理</div>
</div>
</div>
</div>

<div class="takeaway">IPを知った今、各層は「やることの整理棚」として読める。</div>

---

<!-- _class: split -->

<div class="page-title">カプセル化</div>

## 送る時、各層が「宛名（ヘッダ）」を足していく

<div class="split-body">
<div class="left">

<div style="margin:10px 0">
<div class="layer" style="background:#6B6F76">Ethernet [
<div class="layer" style="background:#D98A2B;margin-left:0">IP [
<div class="layer" style="background:#3C8A57">TCP [
<div class="layer" style="background:#3E78B2">HTTP データ本体 </div>
] </div>
] </div>
] </div>
</div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">パケットができるまで</div><div class="b">

- 上位（アプリ）→下位（物理）へ、各層が<span class="red">ヘッダ</span>を付与
- まとめて小包（<span class="red">パケット</span>）にして送出
- 受信側は逆順にヘッダを外して中身を取り出す

</div></div>

</div>
</div>

<div class="takeaway">郵便で言えば「便箋→封筒→宛名→区分け袋」と包んでいくイメージ。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 5 ／ CHAPTER 5</div>

# パケット交換・ルーティング・信頼性

## どうやって届くのか（約15分）

---

<!-- _class: split -->

<div class="page-title">2つの通信方式</div>

## 回線交換 vs パケット交換 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<div class="cbox gray"><div class="h">回線交換方式（電話）</div><div class="b">

- 2者間で回線を<span class="red">占有</span>して接続
- 安定するが、その間ほかは使えない

</div></div>

<div class="cbox green"><div class="h">パケット交換方式（インターネット）</div><div class="b">

- データを<span class="red">パケット</span>に細かく分割して送る
- ヘッダ＝宛先・差出人・何番目の分割か

</div></div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">引っ越しのたとえ</div><div class="b">

- 家1軒の荷物を一度に運べない
- → 段ボールに小分けし、送り状を貼って個別に発送
- → 現地で全部揃えば元通りに復元

</div></div>

<div class="cbox orange"><div class="h">利点 / 弱点</div><div class="b">

- 利点：回線を共有／一部だけ再送すれば済む／混雑に強い
- 弱点：分割・ヘッダ処理の手間／速度は完全保証されない

</div></div>

</div>
</div>

<div class="takeaway">インターネットは「小包に分けて送る」パケット交換でできている。</div>

---

<!-- _class: fig -->

<div class="page-title">ルーティング</div>

## ルーターが「次の一歩」を選ぶバケツリレー

<div class="fig-area">
<div class="flow">
<div class="node">あなたのPC</div>
<div class="arrow">→</div>
<div class="node">ルーターA</div>
<div class="arrow">→</div>
<div class="node">ルーターB</div>
<div class="arrow">→</div>
<div class="node">ルーターC</div>
<div class="arrow">→</div>
<div class="node">目的のサーバ</div>
</div>
</div>

<div class="caption">各ルーターは「<span class="red">経路制御表（ルーティングテーブル）</span>」を持ち、宛先IPを見て「次にどのルーターへ渡せば最短か」を判断する。</div>

<div class="takeaway">宛先IPを見て次へ渡す——この繰り返しで世界中に届く。</div>

---

<!-- _class: summary -->

<div class="page-title">通信の信頼性</div>

## 誤りを「見つける」「送り直す」 <span class="important">重要</span>

<div class="sections">

<div class="sec-box">

### 誤り検出：パリティ検査

- 余分なビット（<span class="red">冗長ビット</span>）を足して誤りを検出
- 例：8ビット中の「1」が奇数なら パリティ=1、偶数なら 0
- 受信時に1の個数が合わなければ「誤りあり」と分かる（※偶数個の誤りは見逃す）

</div>

<div class="sec-box">

### 再送：TCPの仕組み

- 受信側はパケットを受けると<span class="red">確認応答（ACK）</span>を返す
- <span class="red">順序番号</span>で抜けを検出 → 足りなければ<span class="red">再送</span>
- ノイズや混雑で捨てられても、届くまでやり直せる

</div>

</div>

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
<div class="flow">
<div class="node">ブラウザ<br><span style="font-weight:400;font-size:15px">www.example.go.jp ？</span></div>
<div class="arrow">→</div>
<div class="node">DNSサーバ<br><span style="font-weight:400;font-size:15px">名前→IPの対応表</span></div>
<div class="arrow">→</div>
<div class="node">IP＝203.0.113.10<br><span style="font-weight:400;font-size:15px">を返す</span></div>
<div class="arrow">→</div>
<div class="node">そのIPの<br>Webサーバへ接続</div>
</div>
</div>

<div class="caption">ドメイン名は後ろから読む：<span class="red">jp</span>（国）→ <span class="red">go</span>（種別）→ 組織 → サーバ名。古くからの米国系は <span class="mono">.com</span> など。</div>

<div class="takeaway">人間は覚えやすい名前、機械はIP。その橋渡しが DNS。</div>

---

<!-- _class: split -->

<div class="page-title">URLの分解</div>

## URL ＝ Webページの「住所」 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<div class="urlbar">
<span class="u-sch">https://</span><span class="u-host">www.example.go.jp</span><span class="u-path">/news/index.html</span>
</div>

<div class="cbox blue"><div class="h">3つの部分</div><div class="b">

- <span class="u-sch">プロトコル</span>：http / https / ftp など
- <span class="u-host">ホスト（ドメイン名）</span>：IP直指定も可
- <span class="u-path">パス</span>：サーバ内のどのファイルか

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">省略したら？</div><div class="b">

- パスを省略 → サーバの<span class="red">最上位ページ</span>へ
- <span class="red">https</span> は通信が暗号化されている（後の動画7）

</div></div>

</div>
</div>

<div class="takeaway">アドレス欄の文字列は、実は「プロトコル＋住所＋道順」。</div>

---

<!-- _class: summary -->

<div class="page-title">WWWとHTML</div>

## Webは「リンクで繋がった文書」でできている <span class="important">重要</span>

<div class="sections">

<div class="sec-box">

### WWW と HTTP / HTTPS

- 不特定多数へ情報を発信するサービス＝<span class="red">ワールドワイドウェブ（Web）</span>
- 使うプロトコルは <span class="red">HTTP</span>。暗号化した <span class="red">HTTPS</span> が今は一般的
- リンクで関連付けた文書＝<span class="red">ハイパーテキスト</span>／繋ぐ機能＝ハイパーリンク

</div>

<div class="sec-box">

### HTML と CSS

- <span class="red">HTML</span>：文章・リンク・表・画像を「タグ」で指定する言語
- <span class="red">CSS</span>：装飾やレイアウトを指定
- ブラウザが HTML/CSS を解釈してページを表示する

</div>

</div>

---

<div class="page-title">ワーク⑥</div>

## ワーク：最小のHTMLを書いて、名前を引く

<div class="cbox green"><div class="h">🔧 Moodle から Colab を開いて試す（個人 or 2人）</div><div class="b">

- ① メモ帳や Colab で最小の HTML を書く：<br>
<span class="mono">&lt;h1&gt;はじめてのWeb&lt;/h1&gt;&lt;p&gt;&lt;a href="https://www.chiba-u.jp"&gt;千葉大&lt;/a&gt;&lt;/p&gt;</span>
- ② ブラウザで開き、<span class="red">右クリック → ページのソースを表示</span>で中身を確認
- ③ 名前解決を体験：<span class="mono">!nslookup www.chiba-u.jp</span> または <span class="mono">!dig www.chiba-u.jp</span>
- ④ 返ってきた<span class="red">IPアドレス</span>をブラウザに直接入れたらどうなる？

</div></div>

<div class="closing">「名前 → IP → ページ」の流れを、自分の手で1往復してみる。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 7 ／ CHAPTER 7 ★核</div>

# 安全に通信する

## 暗号・認証・Wi-Fiセキュリティ（約16分）

---

<!-- _class: summary -->

<div class="page-title">暗号の基礎</div>

## 特定の人にしか読めない形にする＝暗号

<div class="sections">

<div class="sec-box">

### 用語

- <span class="red">平文</span>（元の情報）→ <span class="red">暗号化</span> → <span class="red">暗号文</span>
- 暗号文を元に戻す手順＝<span class="red">復号</span>／そのためのデータ＝<span class="red">鍵</span>

</div>

<div class="sec-box">

### 古典暗号と、共通鍵の弱点

- <span class="red">シーザー暗号</span>：文字を一定数ずらす／<span class="red">転置法</span>（例：エニグマ）
- <span class="red">共通鍵暗号</span>：送り手と受け手が同じ鍵 → 鍵が盗まれると全て開く・相手ごとに鍵が必要で面倒

</div>

</div>

---

<!-- _class: fig -->

<div class="page-title">公開鍵暗号</div>

## 公開鍵で「暗号化」、秘密鍵で「復号」 <span class="important">重要</span>

<div class="fig-area">
<div class="flow">
<div class="node">送り手<br><span style="font-weight:400;font-size:15px">平文</span></div>
<div class="arrow">→</div>
<div class="node" style="border-color:#3C8A57">🔒 公開鍵で<br>暗号化</div>
<div class="arrow">→</div>
<div class="node">インターネット<br><span style="font-weight:400;font-size:15px">暗号文</span></div>
<div class="arrow">→</div>
<div class="node" style="border-color:#3E78B2">🔑 秘密鍵で<br>復号（受け手だけ）</div>
</div>
</div>

<div class="caption">公開鍵は誰に渡してもよい。復号できるのは、対になった<span class="red">秘密鍵を持つ受け手だけ</span>。相手ごとに鍵を配る必要がない。</div>

<div class="takeaway">「鍵を安全に渡す」問題を、公開鍵暗号は鮮やかに解決した。</div>

---

<!-- _class: split -->

<div class="page-title">署名・認証・SSL</div>

## 本人確認と、安全な通信路 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">デジタル署名（鍵が“逆”）</div><div class="b">

- 送り手が<span class="red">秘密鍵で署名</span> → 受け手が<span class="red">公開鍵で検証</span>
- 発信者が本人であることを証明＝なりすまし防止
- <span class="red">認証局</span>が「その公開鍵は本人のもの」と第三者保証（電子証明書）

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">SSL/TLS と VPN</div><div class="b">

- <span class="red">SSL/TLS</span>：暗号化の決まり。使うページは <span class="red">HTTPS</span>
- 銀行・カード情報など多くのサイトで利用
- <span class="red">VPN</span>：拠点間を暗号化し、専用線のように安全に繋ぐ

</div></div>

</div>
</div>

<div class="takeaway">暗号化（盗み見防止）＋ 署名・認証（なりすまし防止）の両輪で守る。</div>

---

<!-- _class: summary -->

<div class="page-title">Wi-Fiセキュリティ</div>

## 「お家のネット」を、自分で守れるように <span class="important">重要</span>

<div class="sections">

<div class="sec-box">

### 暗号方式を確認する

- 無線は電波 → そのままだと傍受されうる
- <span class="red">WPA2 / WPA3</span> で暗号化されているか確認（古いWEPは危険）
- ルーターの管理画面（例：<span class="mono">192.168.x.1</span>）の<span class="red">初期パスワードは必ず変更</span>

</div>

<div class="sec-box">

### 公衆Wi-Fiの注意

- 偽アクセスポイント・盗聴（中間者攻撃）のリスク
- 鍵マーク＝<span class="red">HTTPS</span> を確認／重要なログインは避ける
- 不安な回線では <span class="red">VPN</span> を使う

</div>

</div>

---

<div class="page-title">ワーク⑦</div>

## ワーク：お家のWebセキュリティを考えよう

<div class="cbox red"><div class="h">🔧 自宅・自分のデジタル環境を点検する</div><div class="b">

- ① 自宅Wi-Fiの暗号方式は <span class="red">WPA2/WPA3</span>？（スマホのWi-Fi詳細で確認できる）
- ② ルーターの管理画面のパスワードは、<span class="red">初期値のまま</span>になっていない？
- ③ スマートスピーカー・防犯カメラなど<span class="red">IoT機器</span>のパスワードは変えた？
- ④ よく使うサイトは <span class="red">https（鍵マーク）</span>になっている？
- ⑤ 公衆Wi-Fiで、ID/パスワードを入力していないか振り返る

</div></div>

<div class="closing">習った暗号・認証・Wi-Fiの知識は、まず「自分の家」を守るために使う。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 8 ／ CHAPTER 8</div>

# データベースとSQL

## 構造化したデータを扱う（約12分）

---

<!-- _class: summary -->

<div class="page-title">DBとDBMS</div>

## 目的に合わせて「構造化」して、ためる

<div class="sections">

<div class="sec-box">

### データベースの考え方

- 一定の形式で表したデータ＝<span class="red">構造化データ</span>（例：書名・著者・出版社）
- 集めて蓄積したもの＝<span class="red">データベース</span>／整理の決まり＝データモデル
- 必要な情報を取り出す＝<span class="red">検索</span>

</div>

<div class="sec-box">

### DBMS の4つの機能

- ① データ資源の管理／② <span class="red">整合性制約</span>（変な値を弾く）
- ③ <span class="red">セキュリティ</span>（利用者ごとに見える範囲を制御）
- ④ <span class="red">トランザクション管理</span>（同時アクセスでの二重登録を防ぐ。例：座席予約）

</div>

</div>

---

<!-- _class: split -->

<div class="page-title">リレーショナルDBとSQL</div>

## 表（テーブル）を関係づけて柔軟に検索 <span class="important">重要</span>

<div class="split-body">
<div class="left">

<table class="jtbl">
<tr><th>書籍ID</th><th>書名</th><th>著者ID</th></tr>
<tr><td>B1</td><td>情報の科学</td><td>A2</td></tr>
<tr><td>B2</td><td>ネット入門</td><td>A1</td></tr>
</table>
<table class="jtbl" style="margin-top:8px">
<tr><th>著者ID</th><th>著者名</th></tr>
<tr><td>A1</td><td>千葉太郎</td></tr>
<tr><td>A2</td><td>海浜花子</td></tr>
</table>
<div class="caption">著者ID で2表を<span class="red">結合（JOIN）</span>＝「書名と著者名」の表を新たに作れる</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">用語と操作</div><div class="b">

- 表＝<span class="red">テーブル</span>／列＝<span class="red">カラム</span>／行＝<span class="red">レコード</span>／マス＝フィールド
- <span class="red">SQL</span>の基本操作：<span class="red">選択</span>（行を絞る）・<span class="red">射影</span>（列を選ぶ）・<span class="red">結合</span>（表をつなぐ）
- 小さな表に分けて持ち、必要な時に結合する

</div></div>

</div>
</div>

<div class="takeaway">巨大な1表より、小さな表＋結合のほうが効率よく管理できる。</div>

---

<div class="page-title">ワーク⑧</div>

## ワーク：Colab で pandas × SQL を動かす

<div class="cbox green"><div class="h">🔧 表計算ではなく「コード」でデータを触る（Moodle → Colab）</div><div class="b">

- ① Colab で <span class="mono">import pandas as pd</span>、小さな DataFrame を2つ作る（書籍・著者）
- ② <span class="mono">pandasql</span> もしくは <span class="mono">sqlite3</span> を使い、<span class="red">SQL</span> をそのまま実行：<br>
<span class="mono">SELECT 書名, 著者名 FROM 書籍 JOIN 著者 USING(著者ID) WHERE …</span>
- ③ <span class="red">選択(WHERE)・射影(SELECT列)・結合(JOIN)</span> がそれぞれ結果をどう変えるか見る
- ④ 同じ操作を <span class="mono">df.merge()</span> でも書いて、SQL と pandas を見比べる

</div></div>

<div class="closing">SQL は「英語っぽい問い合わせ言語」。ラボのデータ処理でそのまま役立つ。</div>

---

<!-- _class: divider -->

<div class="chapter-num">動画 9 ／ CHAPTER 9</div>

# 情報システムの応用とデータ分析入門

## 暮らしを支える仕組みと、データの読み方（約14分）

---

<!-- _class: summary -->

<div class="page-title">暮らしを支える仕組み</div>

## 身の回りは「データベース＋ネットワーク」で動く

<div class="sections">

<div class="sec-box">

### POSシステム（マーケティングの代表例）

- レジのバーコードで会計＋<span class="red">受発注管理</span>
- 「何が・いつ売れたか」を本部に集約 → 最適な発注・配送

</div>

<div class="sec-box">

### 位置情報・予約・ビッグデータ

- <span class="red">GPS</span>：カーナビ・渋滞情報（Googleマップ）／<span class="red">予約システム</span>：座席など限られた資源をリアルタイム管理
- 日々たまる膨大なデータ＝<span class="red">ビッグデータ</span> → 分析する専門家が<span class="red">データサイエンティスト</span>

</div>

</div>

---

<!-- _class: summary -->

<div class="page-title">データの見方</div>

## データの「種類」と「代表値」 <span class="important">重要</span>

<div class="sections">

<div class="sec-box">

### 質的データ・量的データと尺度水準

- 質的：<span class="red">名義尺度</span>（血液型・国名）／<span class="red">順序尺度</span>（震度・順位）
- 量的：<span class="red">間隔尺度</span>（差に意味）／<span class="red">比例尺度</span>（0が原点・比に意味：身長・金額）

</div>

<div class="sec-box">

### 代表値とばらつき

- 代表値：<span class="red">平均値・中央値・最頻値</span>（年収は中央値が向くことも）
- ばらつき：<span class="red">分散・標準偏差</span>／<span class="red">偏差値</span>＝集団内での相対位置
- 分布の比較には<span class="red">箱ひげ図</span>が便利

</div>

</div>

---

<!-- _class: split -->

<div class="page-title">関係を読む</div>

## 相関は因果ではない／予測する／検定する <span class="important">重要</span>

<div class="split-body">
<div class="left">

<svg viewBox="0 0 300 200" width="100%" height="210">
  <line x1="40" y1="170" x2="280" y2="170" stroke="#888" stroke-width="2"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#888" stroke-width="2"/>
  <g fill="#A6192E">
    <circle cx="70" cy="150" r="5"/><circle cx="95" cy="140" r="5"/><circle cx="110" cy="130" r="5"/>
    <circle cx="135" cy="118" r="5"/><circle cx="155" cy="108" r="5"/><circle cx="180" cy="92" r="5"/>
    <circle cx="205" cy="80" r="5"/><circle cx="230" cy="60" r="5"/><circle cx="255" cy="46" r="5"/>
  </g>
  <line x1="60" y1="158" x2="262" y2="42" stroke="#3E78B2" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="150" y="195" font-size="14" fill="#555" text-anchor="middle">正の相関の散布図</text>
</svg>

</div>
<div class="right">

<div class="cbox orange"><div class="h">相関 ≠ 因果</div><div class="b">

- 一方が増えると他方も増える＝<span class="red">正の相関</span>（逆は負の相関）
- 相関があっても<span class="red">因果とは限らない</span>
- 例：アイスと水難事故 → 真因は「暑さ」＝<span class="red">交絡因子</span>

</div></div>

<div class="cbox blue"><div class="h">回帰と仮説検定</div><div class="b">

- <span class="red">回帰</span>：Y=aX+b で予測（説明変数X・目的変数Y）
- <span class="red">仮説検定</span>：帰無仮説を立て、有意水準5%で棄却するか判断

</div></div>

</div>
</div>

<div class="takeaway">グラフが似ていても「原因」とは限らない——疑う目を持つ。</div>

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
<div class="grid3" style="width:94%">
<div class="stk"><div class="t">IaaS</div><div class="prov">提供：物理・仮想マシン</div><div class="you">自分：OS・アプリ</div><div style="text-align:center;font-size:14px;padding:4px">例：Compute Engine（VM）</div></div>
<div class="stk"><div class="t">PaaS</div><div class="prov">提供：OS・実行環境</div><div class="you">自分：アプリだけ</div><div style="text-align:center;font-size:14px;padding:4px">例：Cloud Run</div></div>
<div class="stk"><div class="t">SaaS</div><div class="prov">提供：ほぼ全部</div><div class="you">自分：使うだけ</div><div style="text-align:center;font-size:14px;padding:4px">例：Gmail・Docs</div></div>
</div>
</div>

<div class="caption">なぜクラウド？ → <span class="red">従量課金</span>・必要な分だけ<span class="red">スケール</span>・障害に強い。代表：GCP / AWS / Azure</div>

<div class="takeaway">「自分で何を管理し、何を任せるか」の境界が IaaS→SaaS で変わる。</div>

---

<!-- _class: summary -->

<div class="page-title">GCPで学び続ける</div>

## Google Cloud で「実験する」── これがこの講義の締め

<div class="sections">

<div class="sec-box">

### Google Cloud Skills Boost（無料で始められる）

- 実環境の<span class="red">ハンズオンラボ</span>（安全な砂場で本物のクラウドを操作）
- 達成すると<span class="red">スキルバッジ</span>。積み上げれば<span class="red">認定資格（ACE 等）</span>へ
- <span class="red">無料枠</span>（$300クレジット・Always Free）で実験できる

</div>

<div class="sec-box">

### 学び方の回収（動画1とつながる）

- クラウドは「<span class="red">安全に失敗して学べる</span>」最高の実験場
- 分からなければ人に聞く・公式ドキュメント・ラボの解説を読む
- 目標：ラボ配属を見据えて、<span class="red">自分でVMを1つ立ててみる</span>

</div>

</div>

<!-- ワーク⑩：GCP無料アカウント → Skills Boost の入門ラボを1本完了し、スキルバッジを1つ取る。 -->

---

<!-- _class: message -->

# 手を動かして、学び続けよう

## 教科書とAIの「外」に、実験と・人と・本がある

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## この回のまとめ

- インターネット＝ネットワークの相互接続。<span class="red">IPアドレス</span>という住所で相手を識別する
- <span class="red">TCP/IP（4層）</span>に沿って、データはパケットに分けられ、ルーターのリレーで届く
- 名前は<span class="red">DNS</span>でIPに変換され、<span class="red">HTTP/HTTPS</span>でWebページが届く
- <span class="red">公開鍵暗号・署名・WPA2/3</span>で、盗み見となりすましから身を守る
- データは<span class="red">DB・SQL</span>で構造化して扱い、分析では「相関≠因果」に注意する
- クラウド（<span class="red">IaaS/PaaS/SaaS</span>）と GCP で、自分で手を動かして学び続ける

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 質問は Moodle / Slido へ ・ 視聴期限内に全10本の視聴を
