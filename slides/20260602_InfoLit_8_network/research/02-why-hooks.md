# 第8回 ネットワーク「なぜ学ぶのか」フック集（02）

> 用途: 各章扉(divider)・章頭の `ask`(黄) / `important`(赤タグ) / `callout-*` に差し込む「学生に刺さる動機づけ」。
> 対象: 工学部1年（医工学 / 都市環境システム=都市工 / 応用化学=プロセス・生化学）。
> ルール: 各事実に出典URL。値は2023–2026の実例を優先。検証不能/伝聞は「要確認」明記。
> 専門タグ: 【医工】病院・医療IoT・遠隔医療 / 【都市】スマートシティ・上下水道/電力ICS / 【化学】プラント制御系・ラボ機器・配列DB / 【共通】全学。
> 章番号は 00-lecture-transcript.md / 01-textbook-ground-truth.md の章立てに対応（章1=学び方 … 章10=クラウド）。

---

## 章1 学び方（メタ）— なぜ「仕組み」を学ぶのか

**フック（共通）**: 2025年11月18日、Cloudflareというネットインフラのたった1つのソフト不具合で、X(旧Twitter)・ChatGPT・多数のサービスが世界規模で同時にダウンし、開始20分で全世界トラフィックの約15%が落ちた。原因はサイバー攻撃ではなく「設定ファイルの肥大化」という地味なバグ。AIに「なぜ繋がらないの?」と聞いても、仕組みを知らなければ答えの正否を判断できない——だから中身を学ぶ。
- 専門タグ: 【共通】
- 出典: https://gigazine.net/gsc_news/en/20251119-cloudflare-outage-cdn/ , https://blog.cloudflare.com/cloudflare-outage-february-20-2026/

---

## 章2 ネットワーク基礎（LAN/WAN/Wi-Fi）— 身近な無線がそのまま入口になる

**フック（共通・医工）**: 街中の「無料Wi-Fi」の約4台に1台で、本物そっくりの偽AP（Evil Twin／悪魔の双子）に化ける危険が確認されている。2024年7月にはオーストラリアで、旅客機内に偽Wi-Fiを立てて乗客のメール・SNSログイン情報を盗んだ人物が連邦警察に逮捕された。LAN/Wi-Fiは「便利な入口」であると同時に「最も狙われる入口」——学会・実習先・病院で安易に繋ぐ前に仕組みを知る。
- 専門タグ: 【共通】（医療実習中の私物端末→【医工】）
- 出典: https://www.kaspersky.co.jp/resource-center/preemptive-safety/evil-twin-attacks , https://act1.co.jp/column/0214-2/
- 注: 「約25%でリスク」は二次情報のため数値は要確認（一次=各社調査）。逮捕事案はメディア報道ベース。

---

## 章3 IP・サブネット・NAT・IPv6 — 「住所がない/丸見え」機器が即標的

**フック（都市・化学）**: 2023年11月〜2024年、イラン系グループ「CyberAv3ngers」が、インターネットに直接つながり初期パスワードのまま放置されたUnitronics製PLC（産業用制御装置）を世界で75台以上侵入。うち米国の上下水道施設だけで34台が被害を受けた。ペンシルベニア州アリキッパの水道公社では給水を手動運転に切り替える事態に。グローバルIPで「住所を持って世界に露出する」とは、こういうこと。
- 専門タグ: 【都市】（上下水道・SCADA）/ 【化学】（PLC=プラント制御の最小単位）
- 出典: https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-335a , https://www.nbcnews.com/tech/security/iran-cyber-hack-unitronics-sanction-israel-rcna137012
- 補足フック（医工）: 2024年の調査で、暗号化なしにネットへ露出したPACS/DICOMサーバ経由で世界4,500万枚超の医療画像が無防備に閲覧可能、米国だけで約500万人分・医療画像3億枚超。「IPで繋ぐ＝放置すれば誰でも見られる」の生々しい実例。
  - 出典: https://www.scworld.com/news/millions-of-medical-images-patient-data-remain-exposed-via-pacs-flaws , https://www.rapid7.com/blog/post/2023/10/11/the-risks-of-exposing-dicom-data-to-the-internet/

---

## 章4 プロトコルとTCP/IP・OSI — 「共通の約束」が破れると都市が止まる

**フック（都市）**: スマート信号機の一部は「暗号化されていないオープンなプロトコル」で動くため、青のまま固定するよう改ざんできる事例が報告されている。プロトコル＝野球のサイン／外交儀礼が「世界共通で正しく守られる」ことが、交通・通信を成り立たせている前提。約束（プロトコル）の設計が甘いと、都市インフラごと操作されうる。
- 専門タグ: 【都市】（交通システム・コネクテッドカー）
- 出典: https://www.trendmicro.com/jp/iot-security/news/3222 , https://www.soumu.go.jp/main_content/000955126.pdf （総務省スマートシティセキュリティガイドライン第3.0版, 2024年6月）
- 注: 信号機改ざんは研究者による実証/報告レベル。実被害規模は要確認。

---

## 章5 パケット・ルーティング・信頼性 — 「経路の案内ミス」で半日ネットが死ぬ

**フック（共通）**: 2026年2月20日、CloudflareがBGP（インターネットの“経路案内”プロトコル）の設定変更をしくじり、自社が預かるIPアドレス帯の25%への経路が誤って取り消された。Uber Eats・Steam・AWS・Microsoft 365など数十サービスが最大6時間以上停止。ルーティングは「世界中のルータのバケツリレー」——案内地図(経路制御表)を1か所間違えると、荷物(パケット)が一斉に行方不明になる。
- 専門タグ: 【共通】
- 出典: https://innovatopia.jp/cyber-security/cyber-security-news/81070/ , https://blog.cloudflare.com/cloudflare-outage-february-20-2026/

---

## 章6 ルーター・経路制御の補強フック（章5と連結可）

**フック（共通）**: 2025年10月のAWS北バージニア大規模障害は、DynamoDBの「DNS自動管理」がDNSレコードを空に誤更新したのが発端で、EC2・Lambda等へ連鎖。多数の日本のサービスも止まった。経路とDNSという“地味な裏方”が、現代サービスの可用性をまるごと握っている。
- 専門タグ: 【共通】
- 出典: https://rocket-boys.co.jp/security-measures-lab/aws-northern-virginia-outage-caused-by-dynamodb-dns-automation-failure-affecting-ec2-and-nlb/
- 注: この章は講義書き起こしではルーティング独立章。章9 DNS と連結して使うと「裏方インフラの脆さ」が一本で通る。

---

## 章7 信頼性（パリティ・再送・ACK）— 1ビットの誤りが命に関わる現場

**フック（医工・化学）**: 学生証や航空運送状のチェックデジットと同じ理屈のパリティ／誤り検出は、医療機器の計測値・プラントの制御信号でも「1ビットの化け」を捕まえる最後の砦。一方でパリティは2ビット同時誤りを見逃す“甘い”方式——だからTCPは順序番号＋ACK＋再送で二重に守る。「正しく届いたか」を保証する仕組みが、患者の検査値や反応炉の温度指令の信頼性を支える。
- 専門タグ: 【医工】（生体計測・医療IoT）/ 【化学】（制御信号・計装）
- 出典: 教科書事実台帳 01（章5/章7）に依拠。一般確立事実のため新規Web出典不要。
- 補足: 制御信号が誤動作すると物理被害に直結する実例は章4/章7扉で Triton（章7末）に接続可。

---

## 章8 IPアドレス・NAT・IPv6（再掲拡張）— 「閉域網だから安全」の神話崩壊

**フック（医工）**: 2022年10月31日、大阪急性期・総合医療センターがランサムウェア感染。侵入口は本体ではなく、外部の給食委託先のVPN機器の脆弱性。そこから病院の認証情報を盗み内部へ拡大し、電子カルテが止まって外来全面再開まで約2か月。報告書は「誤った“閉域網神話”によるセキュリティ意識の薄れ」を指弾。府は2025年に計10億円の解決金で和解。「LAN内＝プライベートIPだから安全」は通用しない。
- 専門タグ: 【医工】（病院情報システム・サプライチェーン）
- 出典: https://www.itmedia.co.jp/news/articles/2303/28/news179.html , https://xtech.nikkei.com/atcl/nxt/news/24/02754/ , https://scan.netsecurity.ne.jp/article/2023/04/21/49249.html
- 注: 章3とテーマ重複。章3=露出/章8=NAT・閉域神話、と役割分担して両方で別事例を使うと濃くなる。

---

## 章9 ドメイン名・DNS・dig — 名前の「翻訳」を止められると全部繋がらない

**フック（共通）**: digで実際に名前→IPを引いて見せた直後に効くフック。2025年10月のAWS障害も2026年2月のCloudflare障害も、根っこはDNS/経路という「名前と住所の翻訳・案内」の失敗だった。ドメインは“後ろから読む住所のラベル”で、DNSはその電話帳。電話帳が壊れると、サーバが生きていても誰もたどり着けない。
- 専門タグ: 【共通】
- 出典: https://rocket-boys.co.jp/security-measures-lab/aws-northern-virginia-outage-caused-by-dynamodb-dns-automation-failure-affecting-ec2-and-nlb/
- 補足（用語の正確化／監査03連動）: `.com/.net` は国に属さない一般トップレベルドメイン(gTLD)であり「米国発」ではない。`.or.jp` は財団に限らず協同組合・NPO等の法人組織向け。フック内で誤用しないこと。

---

## 章10 WWW・HTTP/HTTPS・URL・HTML — 鍵マークが「何を」守っているのか

**フック（共通）**: 公衆Wi-Fiの偽AP（章2）に繋がれても、サイトがHTTPS（鍵マーク）なら通信は暗号化され、ログインや学籍情報の盗み見を防げる。逆にHTTPのままなら丸見え。日本のフィッシング報告は2024年に過去最多171万件超、12月だけで23万件、その約75%が実在サービスを名乗る“なりすまし”。HTMLの中身とURLの構造（プロトコル/ドメイン/パス）を読めることが、偽サイトを見破る最初の武器になる。
- 専門タグ: 【共通】（大学アカウント・学認・キャッシュレス）
- 出典: https://scan.netsecurity.ne.jp/article/2025/06/12/53031.html , https://www.nikkei.com/article/DGXZQOUE110FG0R10C25A1000000/

---

## 章11 暗号化・公開鍵・署名・VPN・パスキー — 「誰でも施錠／受け手だけ開錠」が金とDNAを守る

**フック（共通・医工）**: 2023年、遺伝子検査の23andMeが、他サイトから漏れたパスワードを使い回した“クレデンシャルスタッフィング”で約690万人分の祖先・健康・人種情報を流出（直接侵入は約1.4万アカウントだが、DNA Relatives機能経由で550万人に拡大）。パスワード使い回しの破滅と、公開鍵ベースの**パスキー**（フィッシング不能・サイトのドメインに紐づき秘密鍵は端末から出ない）の必要性を同時に語れる。2024年にパスキー対応アカウントは世界150億超へ。
- 専門タグ: 【医工】（遺伝・健康データ）/ 【共通】（パスワード/パスキー）
- 出典: https://www.hipaajournal.com/6-9-million-23andme-users-affected-by-data-breach/ , https://www.priv.gc.ca/en/opc-news/news-and-announcements/2025/bg_23andme_250617/ , https://fidoalliance.org/passkeys-2/?lang=ja
- 補足フック（化学・物理被害の極北）: 2017年、サウジの石油化学プラントでマルウェア「Triton/TRISIS」が、Schneider Electric製の**安全計装システム(SIS)**そのものを標的化——爆発を防ぐ最後の安全装置を無効化しようとした“人を殺しかねない”初のマルウェア。暗号化・署名による「正しい指令か」の検証が、なぜ制御系で死活的かを象徴。
  - 出典: https://en.wikipedia.org/wiki/Triton_(malware) , https://cyberscoop.com/trisis-investigator-saudi-aramco-schneider-electric-s4x19/
  - 注: 帰属(ロシア説)は調査会社の分析。プラント名は非公表でサウジと「されている」=要確認。

---

## 章12 データベース・SQL — 蓄えた個人情報が漏れる/使い回しで全滅する

**フック（共通・国内身近）**: 2024年6月、KADOKAWA/ニコニコがランサムウェア(BlackSuit)被害。発端は従業員アカウントがフィッシングで窃取されたこと。約25万人分の個人情報が漏洩し、特別損失36億円。DBは「便利に検索・蓄積する箱」であると同時に「漏れたら全件まとめて流出する箱」。トランザクション管理・セキュリティ管理(ユーザーごとの権限)・バックアップが、なぜDBMSの必須機能なのかを実感させる。
- 専門タグ: 【共通】（身近な国内大企業の例で“自分ごと”化）
- 出典: https://group.kadokawa.co.jp/information/media-download/1356/d3f77b589c58d083/ , https://xtech.nikkei.com/atcl/nxt/column/18/01157/070400114/
- 補足（化学・医工/配列DB）: 23andMe事案（章11）はそのまま「生体・配列データのDB」の流出例として化学・バイオ系に直結。配列/健康DBは一度漏れると本人が“変更できない”情報という点で、パスワード漏洩より深刻と語れる。

---

## 章13 情報システム応用・ビッグデータ・クラウド — 巨大データは「集約」が便利さと弱点の両方

**フック（都市・共通）**: スマートシティは交通・電力・上下水道・カメラを束ねて最適化する一方、2016年Miraiに始まり2024年末も大規模に観測されたIoTボットネット（初期パスワード/脆弱性で乗っ取った監視カメラ・ルータ群）が、その集約された都市インフラをDDoSの“弾”に変える。総務省は2024年6月にスマートシティセキュリティガイドライン第3.0版を公開し、認証強度・暗号化・ログ収集を強調。ビッグデータ／クラウドの恩恵は、集約点を守れて初めて成り立つ。
- 専門タグ: 【都市】（スマートシティ・IoT集約）/ 【共通】（クラウド集中リスク=章1 Cloudflare/AWSに回収）
- 出典: https://www.trendmicro.com/ja_jp/research/24/l/iot-botnet-activity-ddos-attacks.html , https://www.soumu.go.jp/main_content/000955126.pdf

---

# 強いフック上位10件（返り値サマリ｜章番号・要旨・URL）

1. 章8【医工】大阪急性期センター2022:給食委託先VPNから侵入→電カル2か月停止・解決金10億円「閉域網神話」崩壊 https://www.itmedia.co.jp/news/articles/2303/28/news179.html
2. 章3【都市/化学】イランCyberAv3ngers 2023-24:初期PWのままネット露出したPLCで米水道34施設侵入(CISA) https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-335a
3. 章11【化学】Triton/TRISIS 2017:プラントの安全計装システムを無効化狙う“人を殺しかねない”初マルウェア https://en.wikipedia.org/wiki/Triton_(malware)
4. 章11【医工/共通】23andMe 2023:PW使い回しで690万人の遺伝・健康データ流出→パスキー必要性 https://www.hipaajournal.com/6-9-million-23andme-users-affected-by-data-breach/
5. 章1/章5/章13【共通】Cloudflare障害2025.11/2026.2:1つの設定/BGPミスでX・ChatGPT等が世界規模停止 https://gigazine.net/gsc_news/en/20251119-cloudflare-outage-cdn/
6. 章3【医工】PACS/DICOM露出:暗号化なしで世界4500万枚超・米500万人分の医療画像が閲覧可能 https://www.scworld.com/news/millions-of-medical-images-patient-data-remain-exposed-via-pacs-flaws
7. 章12【共通】KADOKAWA/ニコニコ2024:フィッシング起点ランサムで25万人漏洩・特損36億円 https://xtech.nikkei.com/atcl/nxt/column/18/01157/070400114/
8. 章10【共通】2024フィッシング過去最多171万件超・約75%が実在サービスなりすまし→HTTPS/URL読解 https://scan.netsecurity.ne.jp/article/2025/06/12/53031.html
9. 章2【共通/医工】偽Wi-Fi(Evil Twin):2024年機内偽Wi-Fiで認証情報窃取し豪連邦警察が逮捕 https://www.kaspersky.co.jp/resource-center/preemptive-safety/evil-twin-attacks
10. 章13【都市】IoTボットネット(Mirai系)2024末も大規模観測:乗っ取り監視カメラ/ルータが都市インフラ攻撃の弾に+総務省ガイドライン3.0 https://www.trendmicro.com/ja_jp/research/24/l/iot-botnet-activity-ddos-attacks.html
