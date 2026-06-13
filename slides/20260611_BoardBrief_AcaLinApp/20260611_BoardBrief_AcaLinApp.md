---
marp: true
theme: academic
paginate: true
size: 16:9
html: true
header: '<div class="hdr-left">AcaLinApp開発プロジェクト</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    --hdr-left-w: 30%;
  }
---

<!-- _class: cover -->

# AcaLinApp 開発プロジェクト(案)

## 「研究×学び」を支える全学AI基盤への投資

### 田川 翔
### 国際未来教育基幹／高等教育センター／アカデミック・リンク・センター

<div class="meta">
2026年6月 / 理事会 説明資料
</div>

<!-- 理事会向け説明。ゴールは①ビジョンへの賛同、②推進のGo判断、③シード予算と全学連携の承認。5/25内部委員会版をベースに改訂。 -->

---

<!-- _class: message -->

# 「研究 × 教育」を結ぶ伴走AI

## 学生・教員・職員をひとつのアプリでつなぐ

<!-- ビジョンを一言で。ここで一拍置いて、理事の皆様を全体像に引き込む。 -->

---

<!-- _class: summary -->

<div class="page-title">プロジェクト概要</div>

## AcaLinApp が目指すもの

<div class="sections">

<div class="sec-box">

### ビジョン

- 大学院生を支援する「研究×学び」アプリ
- 全学レベルで個人と大学リソースをリンク
- 生成AI（Google Gemini）が伴走する接続基盤

</div>

<div class="sec-box">

### スコープ

- 学生：学修・キャリア・研究を一気通貫支援
- 教員：指導ログと申請書作成を自動化
- 職員：窓口・申請業務をAIエージェント化

</div>

</div>

<!-- 「ポータルの追加」ではなく「全学の伴走AI基盤への投資」だという点を強調する。 -->

---

<!-- _class: summary -->

<div class="page-title">背景・課題</div>

## なぜ今このアプリか

<div class="sections">

<div class="sec-box">

### 外部環境

- 生成AIの急進化（Gemini・Claude等）
- 文科省の教育・業務DX推進要請
- AI活用が大学の競争力を左右する局面

</div>

<div class="sec-box">

### 他大学の動向

- 東大・東北大・海外有力大がAI×アプリへ移行中
- データ中心の基盤整備で先行する好機
- 機を逃すほど先行投資の価値が低下

</div>

<div class="sec-box">

### 学内の課題

- 学生：学修ロードマップが見えない
- 教員：指導・申請業務で研究時間が圧迫
- 職員：窓口問い合わせ・申請処理が非効率

</div>

</div>

<!-- 理事会向けに「他大学の動向」を独立させた。機を逃すと先行優位を失う、という経営判断の文脈で導入する。 -->

---

<!-- _class: summary -->

<div class="page-title">3つの価値</div>

## 誰に・何を届けるか

<div class="sections">

<div class="sec-box">

### 学生・院生

- 自分専用の伴走AI
- 学修到達度（DP等）の可視化
- 興味に応じた情報プッシュ

</div>

<div class="sec-box">

### 教員

- 指導ログ自動集約
- 申請書ドラフトをAIが生成
- 「研究の思索時間」の捻出

</div>

<div class="sec-box">

### 職員・本部

- 窓口AI検索で定型対応を自動化
- 申請手続きのAIエージェント処理
- IR集約・意思決定支援

</div>

</div>

<!-- 3つの受益者に1スライドずつ深掘りせず、ここで一気に示す。研究力向上＝教員の時間確保が本丸であることを口頭で補う。 -->

---

<!-- _class: fig -->

<div class="page-title">財務効果</div>

## 年間 約2,300万円規模の削減見込み

<div class="fig-area">

| 施策 | 年間削減額 |
|---|---|
| IR・情報集約の自動化（将来） | 1,000万円 |
| 申請手続きの AIエージェント化 | 500万円 |
| 電子学生証・入館連携 | 300万円 |
| 窓口AI検索（教務・事務QA） | 200万円 |
| 支援接続AI検索 | 100万円 |
| 授業アンケートのデジタル化 | 100万円 |
| 学内ポータル一本化（将来） | 100万円 |

</div>

<div class="caption">※ 各施策の削減額は学内試算（導入後に検証）</div>

<div class="takeaway">短期 約1,200万円＋将来 約1,100万円、年間 約2,300万円規模</div>

<!-- 数字は学内ポンチ絵と整合（短期=申請500+入館300+窓口200+支援100+アンケート100、将来=IR1,000+ポータル100）。注意：5/29役員ブリーフは「400万→1,800万円/年」と別基準のため、理事会前にどちらかへ統一すること。 -->

---

<!-- _class: split -->

<div class="page-title">ロードマップ</div>

## R8 〜 R10年度末の4ステップ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="rmA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- milestone callout -->
  <rect x="150" y="30" width="250" height="40" rx="8" fill="#fff" stroke="#A6192E" stroke-width="2"/>
  <text x="275" y="56" font-size="16" fill="#A6192E" text-anchor="middle" font-weight="700">2028年4月 総カットオーバー</text>
  <path d="M300 70 L313 144" stroke="#999" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
  <!-- ascending steps -->
  <rect x="20" y="260" width="110" height="70" fill="#F2D7DC"/>
  <text x="75" y="300" font-size="14" fill="#8A1526" text-anchor="middle" font-weight="700">構想・MVP</text>
  <rect x="140" y="210" width="110" height="120" fill="#E3A8B2"/>
  <text x="195" y="274" font-size="14" fill="#6E1021" text-anchor="middle" font-weight="700">コア開発・β</text>
  <rect x="260" y="150" width="110" height="180" fill="#C9657A"/>
  <text x="315" y="244" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="700">全学運用開始</text>
  <rect x="380" y="90" width="110" height="240" fill="#A6192E"/>
  <text x="435" y="206" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="700">自走・展開</text>
  <text x="435" y="228" font-size="12" fill="#F2D7DC" text-anchor="middle">他大学・収益化</text>
  <!-- growth arrow -->
  <line x1="35" y1="230" x2="372" y2="95" stroke="#A6192E" stroke-width="3" marker-end="url(#rmA)"/>
  <!-- baseline + year labels -->
  <line x1="10" y1="330" x2="510" y2="330" stroke="#999" stroke-width="2"/>
  <text x="75" y="354" font-size="14" fill="#666" text-anchor="middle">R8</text>
  <text x="195" y="354" font-size="14" fill="#666" text-anchor="middle">R9</text>
  <text x="315" y="354" font-size="14" fill="#666" text-anchor="middle">R10前期</text>
  <text x="435" y="354" font-size="14" fill="#666" text-anchor="middle">R10末〜</text>
</svg>

<div class="caption">図1. 開発ライフサイクル（4段フェーズ）</div>

</div>
<div class="right">

### 各フェーズの要点

- **R8**：要件定義＋技術検証＋MVP
- **R9**：コア機能実装と学内βテスト
- **R10前期**：総カットオーバー・安定運用
- **R10末**：エコシステム自走・他大学展開

</div>
</div>

<div class="takeaway">2028年4月の総カットオーバーを最初のマイルストーンに設定</div>

<!-- フェーズごとに「動くソフトウェアの実績」を積み、次の予算判断を仰ぐ段階投資型であることを補足。 -->

---

<!-- _class: summary -->

<div class="page-title">開発アプローチ</div>

## 3つの柱で「最小コスト × 最速」

<div class="sections">

<div class="sec-box">

### アジャイル

- 2週間スプリントで動くものを提示
- 仕様書ではなく動くもので合意
- 変化を前提に計画を適応

</div>

<div class="sec-box">

### サーバーレス活用

- Google Cloudの従量課金で初期投資を最小化
- サーバー資産を持たず運用・保守を委譲
- 利用量に応じて費用が増減する構造

</div>

<div class="sec-box">

### AI主導開発

- AIがコードを書き、人が承認
- 開発工数を大幅に圧縮
- セキュリティ監査に人の力を集中

</div>

</div>

<!-- 「人月積み上げの大規模受託」を発注しない、という調達方針の判断であることを明示する。 -->

---

<!-- _class: split -->

<div class="page-title">技術構成</div>

## Google Cloud × Gemini で構築

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="tcA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- flow boxes -->
  <rect x="120" y="22" width="270" height="56" rx="10" fill="#F2D7DC" stroke="#A6192E" stroke-width="1.5"/>
  <text x="255" y="46" font-size="16" fill="#8A1526" text-anchor="middle" font-weight="700">学生のスマホ</text>
  <text x="255" y="68" font-size="13" fill="#333" text-anchor="middle">時間割の写真をアップするだけ</text>
  <line x1="255" y1="78" x2="255" y2="100" stroke="#A6192E" stroke-width="3" marker-end="url(#tcA)"/>
  <rect x="120" y="104" width="270" height="56" rx="10" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="255" y="128" font-size="16" fill="#A6192E" text-anchor="middle" font-weight="700">Google Cloud 基盤</text>
  <text x="255" y="150" font-size="13" fill="#333" text-anchor="middle">Firebase／Cloud Run（従量課金）</text>
  <line x1="255" y1="160" x2="255" y2="182" stroke="#A6192E" stroke-width="3" marker-end="url(#tcA)"/>
  <rect x="120" y="186" width="270" height="56" rx="10" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="255" y="210" font-size="16" fill="#A6192E" text-anchor="middle" font-weight="700">生成AI Gemini</text>
  <text x="255" y="232" font-size="13" fill="#333" text-anchor="middle">画像から時間割を自動で読み取り</text>
  <line x1="255" y1="242" x2="255" y2="264" stroke="#A6192E" stroke-width="3" marker-end="url(#tcA)"/>
  <rect x="120" y="268" width="270" height="64" rx="10" fill="#A6192E"/>
  <text x="255" y="294" font-size="16" fill="#fff" text-anchor="middle" font-weight="700">学生ごとの個人データベース</text>
  <text x="255" y="318" font-size="13" fill="#F2D7DC" text-anchor="middle">履修・関心に合わせた伴走支援へ</text>
  <!-- side: campus systems -->
  <rect x="400" y="104" width="112" height="138" rx="10" fill="#F7F7F7" stroke="#999" stroke-dasharray="5 4"/>
  <text x="456" y="130" font-size="13" fill="#555" text-anchor="middle" font-weight="700">学内連携</text>
  <text x="456" y="156" font-size="13" fill="#555" text-anchor="middle">統一認証</text>
  <text x="456" y="178" font-size="13" fill="#555" text-anchor="middle">シラバスDB</text>
  <text x="456" y="200" font-size="13" fill="#555" text-anchor="middle">教務システム</text>
  <line x1="390" y1="173" x2="400" y2="173" stroke="#999" stroke-width="2" stroke-dasharray="4 3"/>
</svg>

<div class="caption">図2. 「写メ→時間割」PoC のデータの流れ</div>

</div>
<div class="right">

### 主要コンポーネント

- 認証・データ基盤：Firebase（Google）
- AI処理：Cloud Run × Gemini API
- 学内SSO・シラバスDBとAPI連携
- GCP上にテスト環境を構築し段階検証

</div>
</div>

<div class="takeaway">Sprint 1 で「写メ→時間割」PoC を行い技術リスクを早期に潰す</div>

<!-- 技術詳細には踏み込まず「世界標準のクラウドの上に、薄く速く作る」ことを伝える。テスト環境・テストパターンは別紙（GCPテスト構成書）を参照。 -->

---

<!-- _class: summary -->

<div class="page-title">チーム体制</div>

## 機能横断・少人数・自律型

<div class="sections">

<div class="sec-box">

### 大学側の役割

- **PO**：アカデミック・リンク・センター長
- **PM**：IT推進課マネージャー
- **SM**：学術情報部 専門職員

</div>

<div class="sec-box">

### 開発チーム

- 学生エンジニア（フロント/バック）
- 民間協力エンジニア（監査・実装）
- 学内 UI/UX デザイナー

</div>

</div>

<!-- 6〜8人のフルスタックチーム。多重兼務を排除し、責任の所在を明確にする。 -->

---

<!-- _class: summary -->

<div class="page-title">実現性の裏付け</div>

## 「絵に描いた餅」にしない体制

<div class="sections">

<div class="sec-box">

### 技術力の確保

- Google Cloud 認定資格を保有
- クラウド・生成AI基盤を自走で構築・運用
- 学内に技術ノウハウを蓄積

</div>

<div class="sec-box">

### 第一線の助言

- 橋口剛 氏（元 Google Cloud Japan 生成AI本部長）
- NDAの下で設計・調達の相談が可能
- 最新のクラウド・AI動向を直接反映

</div>

<div class="sec-box">

### 開発リソース

- ソフトバンクのエンジニアと連携し実装力を担保
- 学生・民間エンジニア参画の内製エコシステム
- 低コストでの継続開発が可能

</div>

</div>

<!-- 5/29役員ブリーフの「推進体制・実現性」を理事会向けに転載。属人化リスクへの質問には、内製エコシステムと外部監査の二重化で答える。 -->

---

<!-- _class: split -->

<div class="page-title">データガバナンス</div>

## 3レベルの機密情報コントロール

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="dgA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- L1 -->
  <rect x="20" y="36" width="355" height="92" rx="10" fill="#F5F5F5" stroke="#bbb"/>
  <rect x="32" y="50" width="52" height="28" rx="6" fill="#999"/>
  <text x="58" y="70" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">L1</text>
  <text x="98" y="71" font-size="16" fill="#333" font-weight="700">公開情報</text>
  <text x="98" y="95" font-size="13" fill="#555">シラバス・お知らせ・公開資料</text>
  <text x="98" y="116" font-size="13" fill="#8A1526">→ AIが自由に参照できる</text>
  <!-- L2 -->
  <rect x="20" y="144" width="355" height="92" rx="10" fill="#F2D7DC" stroke="#C9657A"/>
  <rect x="32" y="158" width="52" height="28" rx="6" fill="#C9657A"/>
  <text x="58" y="178" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">L2</text>
  <text x="98" y="179" font-size="16" fill="#6E1021" font-weight="700">学内秘</text>
  <text x="98" y="203" font-size="13" fill="#555">個人成績・指導記録・研究進捗</text>
  <text x="98" y="224" font-size="13" fill="#8A1526">→ 学内認証・暗号化の枠内で利用</text>
  <!-- L3 -->
  <rect x="20" y="252" width="355" height="92" rx="10" fill="#3D3D3D"/>
  <rect x="32" y="266" width="52" height="28" rx="6" fill="#A6192E"/>
  <text x="58" y="286" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">L3</text>
  <text x="98" y="287" font-size="16" fill="#fff" font-weight="700">極秘情報</text>
  <text x="98" y="311" font-size="13" fill="#ddd">未公開特許・契約上の機密</text>
  <text x="98" y="332" font-size="13" fill="#F2B5C0">→ アプリへの入力を完全禁止</text>
  <!-- safety flow -->
  <text x="451" y="142" font-size="12" fill="#888" text-anchor="middle">誤入力セーフティ</text>
  <rect x="392" y="150" width="118" height="86" rx="8" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="451" y="176" font-size="13" fill="#333" text-anchor="middle">誤入力時は</text>
  <text x="451" y="198" font-size="13" fill="#333" text-anchor="middle">自動検知・除去</text>
  <text x="451" y="220" font-size="13" fill="#A6192E" text-anchor="middle" font-weight="700">→ L2へ隔離</text>
  <path d="M378 298 C 460 298 462 262 452 240" stroke="#A6192E" stroke-width="2.5" fill="none" marker-end="url(#dgA)"/>
</svg>

<div class="caption">図3. 3層ガバナンスと誤入力時の隔離経路</div>

</div>
<div class="right">

### レベル定義

- **L1 公開**：シラバス・お知らせ等
- **L2 学内秘**：個人成績・研究進捗
- **L3 極秘**：未公開特許・国家機密
- L3 はアプリへの入力を**完全禁止**
- 誤入力時は自動サニタイズ＋L2隔離

</div>
</div>

<div class="takeaway">免責とオプトインを利用規約で明文化し、法的リスクを初日からヘッジ</div>

<!-- 理事会の最大関心事のひとつ。規程整備（データ取扱・利用規約）は理事会の指示事項として最終スライドで依頼する。 -->

---

<!-- _class: summary -->

<div class="page-title">外部パートナー戦略</div>

## 責任分界と契約方式

<div class="sections">

<div class="sec-box">

### 大学が担う領域

- 機能仕様・UI/UX の最終決定
- AIプロンプト・学習価値の設計
- ステークホルダー調整

</div>

<div class="sec-box">

### 業者が担う領域

- インフラ可用性（SLA保証）
- セキュリティ脆弱性監査
- 運用・CI/CD・バックアップ

</div>

<div class="sec-box">

### 契約方式

- 基本契約＋短期SOWの多層構造
- スプリント単位の準委任で柔軟性
- 早期キャンセル条項で予算リスク制御

</div>

</div>

<!-- 丸投げ一括請負を避け、価値（仕様・プロンプト・データ）の所在を大学側にキープする調達方針。 -->

---

<!-- _class: split -->

<div class="page-title">予算戦略</div>

## シード予算をテコに外部資金を獲得

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="bgA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
  <!-- seed -->
  <rect x="16" y="158" width="120" height="64" rx="10" fill="#F2D7DC" stroke="#A6192E" stroke-width="1.5"/>
  <text x="76" y="184" font-size="15" fill="#8A1526" text-anchor="middle" font-weight="700">シード予算</text>
  <text x="76" y="206" font-size="12" fill="#555" text-anchor="middle">センター・学内措置</text>
  <line x1="136" y1="190" x2="172" y2="190" stroke="#A6192E" stroke-width="3" marker-end="url(#bgA)"/>
  <!-- MVP -->
  <rect x="180" y="148" width="140" height="84" rx="12" fill="#A6192E"/>
  <text x="250" y="184" font-size="17" fill="#fff" text-anchor="middle" font-weight="700">動くMVP</text>
  <text x="250" y="208" font-size="12" fill="#F2D7DC" text-anchor="middle">3ヶ月で実証</text>
  <!-- fan arrows -->
  <path d="M320 178 C 350 160 352 92 370 78" stroke="#A6192E" stroke-width="3" fill="none" marker-end="url(#bgA)"/>
  <line x1="320" y1="190" x2="370" y2="190" stroke="#A6192E" stroke-width="3" marker-end="url(#bgA)"/>
  <path d="M320 202 C 350 220 352 288 370 302" stroke="#A6192E" stroke-width="3" fill="none" marker-end="url(#bgA)"/>
  <!-- targets -->
  <rect x="376" y="40" width="130" height="64" rx="10" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="441" y="66" font-size="15" fill="#A6192E" text-anchor="middle" font-weight="700">文科省AI予算</text>
  <text x="441" y="88" font-size="12" fill="#555" text-anchor="middle">学務系AI関連</text>
  <rect x="376" y="158" width="130" height="64" rx="10" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="441" y="184" font-size="15" fill="#A6192E" text-anchor="middle" font-weight="700">概算要求</text>
  <text x="441" y="206" font-size="12" fill="#555" text-anchor="middle">業務改革・教育DX</text>
  <rect x="376" y="276" width="130" height="64" rx="10" fill="#fff" stroke="#A6192E" stroke-width="1.5"/>
  <text x="441" y="302" font-size="15" fill="#A6192E" text-anchor="middle" font-weight="700">ライセンス展開</text>
  <text x="441" y="324" font-size="12" fill="#555" text-anchor="middle">他大学へ提供</text>
</svg>

<div class="caption">図4. マルチバジェット戦略（3方向レバレッジ）</div>

</div>
<div class="right">

### 資金ステップ

- **シード**：センター・学内措置予算
- **拡大①**：学務系AI関連予算（文科省）
- **拡大②**：概算要求（業務改革・教育DX）
- **拡大③**：他大学へのライセンス・売却

</div>
</div>

<div class="takeaway">最初の「動くソフトウェア」が次の予算を引き寄せる構造</div>

<!-- 理事会へのメッセージは「シードを承認いただければ、外部資金で拡大する」。学内負担を最小に保つ設計であることを強調。 -->

---

<!-- _class: fig -->

<div class="page-title">初期3ヶ月計画</div>

## 2週間 × 6スプリント

<div class="fig-area">

| Sprint | ゴール | 主要成果物 |
|---|---|---|
| S1 | 要件定義＋技術検証 | ユーザーストーリーマップ／Gemini PoC |
| S2 | UI/UXデザイン | Figmaプロトタイプ／Firebase環境 |
| S3 | 認証・アップロード | スマートログイン／ストレージ連携 |
| S4 | Gemini 画像パース結合 | 写メ→時間割反映の動作版 |
| S5 | 学生モニターテスト | ユーザビリティ報告／改修バックログ |
| S6 | 適応的再計画 | リファイン済リリース計画書 |

</div>

<div class="takeaway">3ヶ月後に「学生10名に触ってもらえる動くもの」をデモ可能に</div>

<!-- 「3ヶ月後にもう一度、動くものをお見せします」と約束するスライド。理事会の次回報告タイミングと紐づける。 -->

---

<!-- _class: summary -->

<div class="page-title">リスクと対応</div>

## 想定されるリスクと緩和策

<div class="sections">

<div class="sec-box">

### 技術リスク

- Gemini精度のばらつき
- → S1の技術検証で早期に確認
- → スキーマ補正＋ヒトの確認導線

</div>

<div class="sec-box">

### 個人情報リスク

- データ漏洩・誤入力
- → 3層ガバナンス＋自動サニタイズ
- → 利用規約で免責・オプトイン

</div>

<div class="sec-box">

### 組織リスク

- 部局調整・規程変更の遅延
- → PO/SM が学内交渉を担当
- → 動くデモで合意形成を加速

</div>

</div>

<!-- 撤退基準にも触れる：スプリント単位の準委任＋早期キャンセル条項により、効果が見えなければ低コストで止められる。 -->

---

<!-- _class: wrap -->

<div class="page-title">本日のお願い</div>

## 理事会への承認・依頼事項

- ビジョン「研究×教育を結ぶ伴走AI」への賛同
- R10年4月の総カットオーバー方針の承認
- シード予算（センター・学内措置）の確保
- 教務部・IT推進課・図書館との全学連携の承認
- データ取扱規程・利用規約整備の指示

<!-- 理事会としての意思決定ポイントを明確化。判断を持ち帰らせない。予算規模は口頭またはAppendixで補足。 -->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.s@faculty.gs.chiba-u.jp
