---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシー 講義(5) ネットワークの仕組みとインターネット(1)</div><img class="hdr-logo" src="../assets/chiba-logo.png">'
footer: ''
---

<!-- _class: cover -->

# 情報リテラシー 講義(5)

## ネットワークの仕組みとインターネット(1)

### 檜垣 泰彦
### 千葉大学 アカデミック・リンク・センター 特任教授

<div class="meta">
2025年5月27日 / 千葉大学Moodle 情報リテラシー(23)(24)（T1-2・火4）
</div>

<!-- 教科書：竹下隆史・村山公保・荒井透・苅田幸雄『マスタリングTCP/IP 入門編 第5版』オーム社（2012年2月） -->

---

<!-- _class: fig -->

<div class="page-title">LAN（Local Area Network）</div>

## 1つの建物・キャンパスでのネットワーク

<div class="fig-area">

![LANの構成図](./src/slide02.png)

</div>

<div class="takeaway">スイッチ・ハブで端末を束ね、限られた地域内で相互接続する</div>

<!-- スタンドアロンとの対比。NAS・ネットワークプリンタ等の共有資源 -->

---

<!-- _class: fig -->

<div class="page-title">WAN（Wide Area Network）</div>

## 離れた地域のLANを接続する

<div class="fig-area">

![WANの構成図](./src/slide03.png)

</div>

<div class="takeaway">ルーターを介してLAN同士を結び、地理的に分散した通信を実現</div>

---

<!-- _class: fig -->

<div class="page-title">ネットワークの構成要素</div>

## 実環境を構成する装置群

<div class="fig-area">

![ネットワーク機器の例](./src/slide04.png)

</div>

<div class="takeaway">ルーター／レイヤ2・3スイッチ／FW／無線APなど用途別の機器が連携</div>

---

<!-- _class: split -->

<div class="page-title">インターネットの構造</div>

## ISP・IX・NOC

<div class="split-body">
<div class="left">

![インターネットの構造](./src/slide05.png)

<div class="caption">図. ISP / IX / NOC の階層</div>

</div>
<div class="right">

### 主要な略語

- **ISP**：Internet Service Provider
- **IX**：Internet Exchange
- **NOC**：Network Operation Center
- **イントラネット**：組織内ネットワーク
- **輻輳（ふくそう）**：通信が許容量を超え繋がりにくくなる現象

</div>
</div>

<div class="takeaway">TCP/IPで結ばれたネットワークの集合体 ＝ インターネット</div>

---

<!-- _class: split -->

<div class="page-title">言語層と装置層の2階層モデル</div>

## プロトコル：通信規約

<div class="split-body">
<div class="left">

![言語層と装置層モデル](./src/slide06.png)

<div class="caption">図. 言語層と装置層の独立性</div>

</div>
<div class="right">

### プロトコルとは

- ネットワークを介して通信するための **約束事の集合**
- メーカや OS が異なる機器同士でも、同じプロトコルなら通信可能
- 言語層と装置層は **独立**：片方だけ差し替え可能

</div>
</div>

<div class="takeaway">層に分けて考えることで「片方だけ変更」が可能になる</div>

---

<!-- _class: fig -->

<div class="page-title">OSI参照モデル（7階層）</div>

## 層に分けて考える

<div class="fig-area">

![OSI 7階層モデル](./src/slide07.png)

</div>

<div class="takeaway">アプリケーション層〜物理層の7層構造。ルーターはL3まで処理</div>

<!-- OSI: Open System Interconnection（開放型システム間相互接続） -->

---

<!-- _class: fig -->

<div class="page-title">データリンク層の装置【ブリッジ・ハブ】</div>

## L2機器の役割

<div class="fig-area">

![ブリッジ・ハブの動作](./src/slide08.png)

</div>

<div class="takeaway">スイッチはポートごとのブリッジ。PoE（Power over Ethernet）で給電も</div>

---

<!-- _class: fig -->

<div class="page-title">ネットワーク層の装置【ルーター】</div>

## 経路を決めてパケットを配送する配達屋

<div class="fig-area">

![ルーターの役割](./src/slide09.png)

</div>

<div class="takeaway">宛先へのルートを決定し、任意のデータリンク同士を接続できる</div>

---

<!-- _class: fig -->

<div class="page-title">各機器と該当する階層</div>

## リピーター／ブリッジ／ルーター

<div class="fig-area">

![機器と階層の対応](./src/slide10.png)

</div>

<div class="takeaway">物理層＝リピーター／L2＝ブリッジ・L2SW／L3＝ルーター・L3SW</div>

---

<!-- _class: split -->

<div class="page-title">TCP/IPプロトコル群</div>

## もっとも有名でよく使われているプロトコル

<div class="split-body">
<div class="left">

![TCP/IPプロトコル群](./src/slide11.png)

<div class="caption">図. TCP/IPの主要プロトコル</div>

</div>
<div class="right">

### 4種類のプロトコル

- **アプリケーション**：HTTP, SMTP, FTP, TELNET, SNMP
- **トランスポート**：TCP, UDP
- **インターネット**：IP, ICMP, ARP
- **経路制御**：RIP, OSPF, BGP

</div>
</div>

<div class="takeaway">TCP/IP ⇔ インターネット。事実上の標準プロトコル群</div>

---

<!-- _class: fig -->

<div class="page-title">OSI参照モデルとTCP/IPの関係</div>

## 7階層モデルと4階層モデルの対応

<div class="fig-area">

![OSIとTCP/IPの対応表](./src/slide12.png)

</div>

<div class="takeaway">OSIの5-7層 ≒ TCP/IPアプリケーション層。物理層はハードウェアが担う</div>

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# データリンク層

## MACアドレスとイーサネット／無線LAN

<!-- L2の世界：物理アドレスと媒体ごとの規格を扱う -->

---

<!-- _class: split -->

<div class="page-title">データリンクの技術</div>

## MACアドレスで宛先を判定

<div class="split-body">
<div class="left">

![MACアドレスの例](./src/slide14.png)

<div class="caption">図. MACアドレスによる宛先判定</div>

</div>
<div class="right">

### MACアドレス（Media Access Control）

- ネットワーク機器に **一意に** 割り当てられた物理アドレス
- 例：`E0:69:95:62:D5:F1`
- 確認方法（Win11）：コントロールパネル → ネットワークと共有センター → イーサネット → 詳細

</div>
</div>

<div class="takeaway">L2では IP ではなく MAC アドレスでフレームを届ける</div>

---

<!-- _class: split -->

<div class="page-title">イーサネットの種類</div>

## 速度とケーブル規格

<div class="split-body">
<div class="left">

![イーサネット規格表とスイッチ実物](./src/slide15.png)

<div class="caption">図. 規格表とケーブル敷設の様子</div>

</div>
<div class="right">

### 主な規格（最大長は概ね 100m）

- **10BASE-T**：10 Mbps / カテゴリ 3〜5
- **100BASE-TX**：100 Mbps / カテゴリ 5
- **1000BASE-T**：1 Gbps / カテゴリ 5/5e
- **10GBASE-T**：10 Gbps / カテゴリ 6a

</div>
</div>

<div class="takeaway">対応カテゴリのケーブルを使わないと速度が出ない</div>

---

<!-- _class: fig -->

<div class="page-title">IEEE802.11（無線通信）の比較</div>

## 物理層・MAC層の規格

<div class="fig-area">

![802.11の比較表と構成図](./src/slide16.png)

</div>

<div class="takeaway">11n=150Mbps、11ac=6.93Gbps、11ax=9.6Gbps と高速化が進む</div>

---

<!-- _class: fig -->

<div class="page-title">最近のWiFi規格</div>

## Wi-Fi 4 〜 Wi-Fi 7

<div class="fig-area">

![Wi-Fi世代表](./src/slide17.png)

</div>

<div class="takeaway">Wi-Fi 7（2024年, 11be）は36Gbps・6GHz帯・320MHz帯域幅に対応</div>

---

<!-- _class: fig -->

<div class="page-title">Wi-Fiにおけるチャンネルレイアウト</div>

## 2.4 / 5 / 6 GHz帯と日本での利用可能帯域

<div class="fig-area">

![チャンネルレイアウト](./src/slide18.png)

</div>

<div class="takeaway">6GHz帯（480MHz幅）まで拡張、Wi-Fi 6E/7で活用</div>

<!-- 出典: https://www.keyence.co.jp/ss/products/controls/wifi/basis/latest_standards.jsp -->

---

<!-- _class: fig -->

<div class="page-title">802.11a のチャンネル</div>

## 5GHz帯と気象レーダー干渉

<div class="fig-area">

![802.11a チャンネル変遷表](./src/slide19.png)

</div>

<div class="takeaway">W56（2007年〜）から屋外利用が解禁、ただし気象レーダー干渉あり</div>

---

<!-- _class: fig -->

<div class="page-title">学内における無線LANの電波状況</div>

## inSSIDer による観測

<div class="fig-area">

![inSSIDer 観測画面](./src/slide20.png)

</div>

<div class="takeaway">2.4GHz帯はチャネルが密集し干渉しやすい、5GHzは比較的空いている</div>

---

<!-- _class: fig -->

<div class="page-title">無線LANの用語</div>

## 識別子・暗号・認証

<div class="fig-area">

![無線LAN用語表](./src/slide21.png)

</div>

<div class="takeaway">SSID／WEP・WPA・WPA2／PSK／IEEE802.1X／EAP／WPSを押さえる</div>

---

<!-- _class: summary -->

<div class="page-title">無線LANのセキュリティ</div>

## 暗号方式と接続制御

<div class="sections">

<div class="sec-box">

### 暗号方式の優先順

- **WPA2-PSK (AES)** を使うのが一番安全
- 非対応なら **WPA-PSK (AES)**
- **WEPの解読は非常に簡単**：使ってはいけない

</div>

<div class="sec-box">

### 補助的な対策

- MACアドレスフィルタリングで登録機器のみ許可
- ESSIDステルス機能で発信を停止
- any接続拒否でPC側のESSID一覧に出さない

</div>

</div>

<!-- 補助的対策は決定打にならない。本丸は WPA2(AES) -->

---

<!-- _class: fig -->

<div class="page-title">ADSL接続</div>

## アナログ電話回線でのデジタル通信

<div class="fig-area">

![ADSL接続の構成](./src/slide23.png)

</div>

<div class="takeaway">非対称デジタル加入者線、1.5〜50Mbps。2023〜2024年にサービス終了</div>

---

<!-- _class: fig -->

<div class="page-title">FTTH接続</div>

## 光ファイバを家庭まで

<div class="fig-area">

![FTTH接続の構成](./src/slide24.png)

</div>

<div class="takeaway">ONU（光回線終端装置）と光スプリッタで各家庭まで光配信</div>

---

<!-- _class: fig -->

<div class="page-title">ケーブルテレビによるインターネット接続</div>

## ヘッドエンド経由でISPへ

<div class="fig-area">

![ケーブルTVのネット接続](./src/slide25.png)

</div>

<div class="takeaway">CATVの同軸/光網を流用、ケーブルモデムでISPへ接続</div>

---

<!-- _class: split -->

<div class="page-title">VPN（Virtual Private Network）</div>

## 公衆網上の仮想専用線

<div class="split-body">
<div class="left">

![VPNの仕組み](./src/slide26.png)

<div class="caption">図. MPLS網による IP-VPN</div>

</div>
<div class="right">

### VPNとは

- 公衆回線を**暗号化・認証**で安全化
- あたかも専用線で結んだように利用
- モバイル環境から組織内へ安全に接続する用途も
- ラベル付け（MPLS）で仮想的な独自網を構築

</div>
</div>

<div class="takeaway">公衆網を「専用線化」して安全に組織ネットワークへ接続</div>

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# IPプロトコル

## ネットワーク層のプロトコル

<!-- 複雑なネットワークの中で最終的な宛先までパケットを届ける -->

---

<!-- _class: fig -->

<div class="page-title">IPの役割</div>

## 複雑なネットワークの中の宛先まで届ける

<div class="fig-area">

![IPによるパケット配送](./src/slide28.png)

</div>

<div class="takeaway">複数ルーターを経由しても最終ホストまでパケットを届けるのがIP</div>

---

<!-- _class: fig -->

<div class="page-title">IPアドレス</div>

## インターネット上のホスト識別子

<div class="fig-area">

![IPアドレスによる配送](./src/slide29.png)

</div>

<div class="takeaway">グローバルIPはICANNにより世界で唯一の値を割当（例: 133.82.171.1）</div>

---

<!-- _class: split -->

<div class="page-title">NIC毎に1つ以上のIPアドレス</div>

## サブネットマスクでネットワーク部とホスト部を分ける

<div class="split-body">
<div class="left">

![NICとIPアドレスの関係](./src/slide30.png)

<div class="caption">図. ホスト・ルーターのIP配置</div>

</div>
<div class="right">

### ポイント

- **NIC**：Network Interface Card
- ホストには最低1つのIPアドレス
- ルーターは2つ以上（境界となるため）
- 1つのNICに複数IPも可
- **サブネットマスク**でネットワーク部とホスト部を区切る

</div>
</div>

<div class="takeaway">`192.168.200.107/24` の `/24` はネットワーク部のビット数を示す</div>

---

<!-- _class: fig -->

<div class="page-title">IPアドレスのホスト部</div>

## 同一セグメント内での約束事

<div class="fig-area">

![ホスト部の役割](./src/slide31.png)

</div>

<div class="takeaway">同一セグメント＝ネットワーク部が同じ、ホスト部は重複不可</div>

---

<!-- _class: fig -->

<div class="page-title">IPアドレスのネットワーク部</div>

## ルーターによる経路判断

<div class="fig-area">

![ネットワーク部による中継](./src/slide32.png)

</div>

<div class="takeaway">ルーターは宛先IPのネットワーク部を見て転送先を決定する</div>

---

<!-- _class: fig -->

<div class="page-title">ホスト名とIPアドレス</div>

## わかりやすい名前と覚えにくいアドレスの対応

<div class="fig-area">

![hostsファイルによる名前解決](./src/slide33.png)

</div>

<div class="takeaway">hostsファイル：ホスト名⇔IPアドレスの対応表（DNS以前の仕組み）</div>

---

<!-- _class: fig -->

<div class="page-title">ドメインの階層構造</div>

## 例：tu.chiba-u.ac.jp

<div class="fig-area">

![ドメインのツリー構造](./src/slide34.png)

</div>

<div class="takeaway">root → jp → ac → chiba-u → tu のように右から左へ階層を辿る</div>

---

<!-- _class: fig -->

<div class="page-title">ネームサーバ（DNS）</div>

## 名前情報の分散型データベース

<div class="fig-area">

![DNSの問い合わせ経路](./src/slide35.png)

</div>

<div class="takeaway">ルート → トップレベル → 各組織のDNSサーバへと再帰的に問い合わせ</div>

---

<!-- _class: fig -->

<div class="page-title">DHCP（Dynamic Host Configuration Protocol）</div>

## IPアドレスを自動配布する仕組み

<div class="fig-area">

![DHCPの動作](./src/slide36.png)

</div>

<div class="takeaway">接続するだけでIP・サブネット・GW・DNSが設定される。管理者の負担も軽い</div>

---

<!-- _class: fig -->

<div class="page-title">NAT（Network Address Translation）</div>

## プライベートIP ⇔ グローバルIP の変換

<div class="fig-area">

![NATの動作](./src/slide37.png)

</div>

<div class="takeaway">家庭ルータが備える機能。プライベート帯（10/8, 172.16/12, 192.168/16）を変換</div>

---

<!-- _class: fig -->

<div class="page-title">ファイアウォール（防火壁）</div>

## 内部と外部の境界に置く防御装置

<div class="fig-area">

![FWとDMZの構成](./src/slide38.png)

</div>

<div class="takeaway">DMZ（非武装地帯）に公開サーバ、内部への侵入は禁止する</div>

---

<!-- _class: summary -->

<div class="page-title">IPv6（IP version 6）</div>

## IPv4アドレス枯渇への対策

<div class="sections">

<div class="sec-box">

### 基本

- IPv4は **32ビット**、IPv6は **128ビット**
- インターネットから直接アクセス可能なアドレスの不足が解消
- IPv4における問題の解決を目指す

</div>

<div class="sec-box">

### IPv6の特徴

- IPアドレスの拡大と経路制御表の集約
- パフォーマンスの向上
- プラグ＆プレイ機能を必須化
- 認証機能・暗号化機能の採用

</div>

</div>

<!-- アドレス枯渇は IPv4 の根本問題、IPv6 で抜本対応 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# TCPとUDP

## トランスポート層のプロトコル

<!-- TCP=コネクション型・順序保証 / UDP=コネクションレス・軽量高速 -->

---

<!-- _class: fig -->

<div class="page-title">ポート番号によるアプリケーションの識別</div>

## 同一ホスト内で複数サービスを識別する仕組み

<div class="fig-area">

![ポート番号の役割](./src/slide41.png)

</div>

<div class="takeaway">IPで「ホスト」を識別、ポート番号で「アプリ」を識別する</div>

---

<!-- _class: fig -->

<div class="page-title">TCPのウェルノウンポート（一部）</div>

## 主要サービスの予約番号

<div class="fig-area">

![TCPウェルノウンポート表](./src/slide42.png)

</div>

<div class="takeaway">20/21=FTP、22=SSH、25=SMTP、53=DNS、80=HTTP を押さえる</div>

---

<!-- _class: fig -->

<div class="page-title">UDPのウェルノウンポート（一部）</div>

## DNS・DHCP・NTPなどはUDP

<div class="fig-area">

![UDPウェルノウンポート表](./src/slide43.png)

</div>

<div class="takeaway">53=DNS、67/68=DHCP、69=TFTP、123=NTP（時刻同期）、161=SNMP</div>

---

<!-- _class: refs -->

<div class="page-title">参考文献</div>

## 参考文献

- 竹下 隆史, 村山 公保, 荒井 透, 苅田 幸雄 (2012). 『マスタリングTCP/IP 入門編 第5版』. オーム社.
- 竹下 隆史, 村山 公保, 荒井 透, 苅田 幸雄 (2019). 『マスタリングTCP/IP 入門編 第6版』. オーム社.
- KEYENCE (2024). Wi-Fi 規格と最新動向. https://www.keyence.co.jp/ss/products/controls/wifi/basis/latest_standards.jsp
- 平成25年春期 ITパスポート試験公開問題 問68.

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## higaki.yasuhiko@faculty.chiba-u.jp
