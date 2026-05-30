---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">Google Innovator × 大学</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  section.cover .meta {
    font-size: 23px;
  }
  section > header {
    --hdr-left-w: 33%;
  }
  section > header::after {
    left: 30%;
  }
  section .page-title {
    left: 30%;
    width: 33%;
  }
  section.intro .intro-head {
    background: #ececec;
    border-radius: 10px;
  }
  section.fig.wide {
    padding-left: 40px;
    padding-right: 40px;
  }
  section.fig.wide .fig-area {
    min-height: 380px;
  }
  section.fig.wide .fig-area img {
    max-height: 440px;
    max-width: 100%;
    width: auto;
    height: auto;
  }
  /* ========== サポーター（応援）スライド（supporter） ========== */
  section.supporter {
    padding: 60px 80px;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    background: linear-gradient(135deg, #fff 0%, #f7f9fa 100%);
  }
  section.supporter > header {
    display: none;
  }
  section.supporter::after {
    display: none !important;
  }
  section.supporter .supporter-title {
    font-size: 32px;
    font-weight: 800;
    color: var(--accent);
    margin-bottom: 30px;
    text-align: center;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 10px;
    display: inline-block;
    align-self: center;
  }
  section.supporter .supporter-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    align-items: center;
    width: 100%;
  }
  section.supporter .supporter-photo-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  section.supporter .supporter-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background: #ddd;
    border: 4px solid #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    margin-bottom: 15px;
  }
  section.supporter .supporter-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section.supporter .supporter-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: var(--text);
  }
  section.supporter .supporter-title-sub {
    font-size: 18px;
    color: #666;
    margin-top: 4px;
  }
  section.supporter .supporter-message-box {
    background: #fff;
    border-radius: 16px;
    padding: 30px 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-left: 6px solid var(--accent);
    position: relative;
  }
  section.supporter .supporter-message-box::before {
    content: "“";
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 80px;
    font-family: Georgia, serif;
    color: var(--accent-soft);
    opacity: 0.3;
    line-height: 1;
  }
  section.supporter .quote-text {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.6;
    color: var(--accent);
    margin-bottom: 20px;
  }
  section.supporter .context-text {
    font-size: 19px;
    line-height: 1.7;
    color: #444;
  }
  /* ========== 学内実績スライド（activity-achievement） ========== */
  section.activity-achievement {
    padding-top: calc(var(--header-h) + 25px);
    padding-bottom: 75px;
  }
  section.activity-achievement .split-body {
    gap: 40px;
  }
  section.activity-achievement .left,
  section.activity-achievement .right {
    font-size: 18.5px;
    line-height: 1.4;
  }
  section.activity-achievement h3 {
    font-size: 24px;
    color: var(--accent);
    margin-bottom: 10px;
    border-bottom: 2px solid var(--accent-soft);
    padding-bottom: 4px;
  }
  section.activity-achievement ul {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  section.activity-achievement li {
    margin-bottom: 6px;
  }
  section.activity-achievement .right-grid {
    display: grid;
    grid-template-columns: 1fr 140px;
    gap: 15px;
    align-items: center;
    margin-top: 10px;
  }
  section.activity-achievement .poster-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section.activity-achievement .poster-box img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  /* ========== 表紙レイアウト（cover-hero） ========== */
  section.cover-hero {
    padding-top: calc(var(--header-h) + 60px);
    --hdr-left-w: 26%; /* 1枚目だけ赤い枠の横幅を短く（デフォルト34%から28%に） */
  }
  /* 表紙はpage-titleトラペゾイドが無いので、赤線を左端から右端まで伸ばす */
  section.cover-hero > header::after {
    left: 0;
    right: 0;
  }
  section.cover-hero .title-hero {
    text-align: center;
    margin-bottom: 60px;
  }
  section.cover-hero .title-small {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 8px;
  }
  section.cover-hero .title-big {
    font-size: 58px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.02em;
  }
  section.cover-hero .title-foot {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    align-items: center;
    padding: 0 60px;
  }
  section.cover-hero .title-photo {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    overflow: hidden;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    font-size: 16px;
  }
  section.cover-hero .title-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 60% 35%;  /* 顔が右上寄りなので焦点を移動 */
  }
  section.cover-hero .title-meta {
    font-size: 26px;
    line-height: 1.7;
    text-align: center;
  }
  section.cover-hero .title-event {
    color: #e65100;
    font-weight: 700;
    margin-bottom: 16px;
  }
  section.cover-hero .title-date {
    margin-bottom: 16px;
  }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">AI 活用と本学で挑戦したいアイデア</div>
<div class="title-big">Google for Eduと拓く教育のこれから</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">伊藤先生打ち合わせ</div>
<div class="title-date">2026年5月21日 09:00 〜</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（Google Certified Innovator JPN26）</div>
</div>
</div>

<!-- スピーカーノート：Google Innovator 体験談、Google の支援、本学で挑戦したいこと、の3本立てで話す -->

---

<!-- _class: summary -->

<div class="page-title">本日のテーマ</div>

## 本日お話しする 3 つのこと

<div class="sections">

<div class="sec-box">

### ① 体験談

- Google Innovator になった話　→ Google for Edu Champion プログラムとそのメリット
- 申請・3日間の研修で何を学んだか → "ソリューションではなく、ユーザーのニーズ"、"FAILする"
</div>

<div class="sec-box">

### ② Google for Eduによる大学支援の全体像
- Google I/O 2026 が示す次の 10 年
- 教育機関向けの取組み ：  教職員認定・大学認定 / Cloud / AI Pro
</div>

<div class="sec-box">

### ③ 本学で挑戦したいこと
- AIとクラウドを学べるエコシステムの構築
- AI agentによる全学 DXとUX変革
</div>

</div>
<div class="takeaway">AIリテラシー・Agent設計・Cloud構築の3つの力を学べる環境</div>

<!-- ゴールはを作ること -->

---
<!-- _class: fig wide -->

<div class="page-title">進行中の科研費</div>

<div class="fig-area">

![AI クロス型教育の研究構想図](./src/fig19-ai-cross-research.png)

</div>

<div class="caption">図1. 専門知・実践知 × AI を融合したカリキュラムの実現方法を明らかにする</div>

<div class="takeaway">AI を情報工学として積上げ式に学ぶのではなく、専門性から AI を使いこなし学ぶ</div>

<!-- KAKENHI AI-Cross の研究構想を背景に、本学で挑戦したいことに繋ぐ -->

---
<!-- _class: fig wide -->

<div class="page-title">翻訳中の本</div>

<div class="fig-area">

![alt text](image-2.png)

</div>

<div class="takeaway">大学AIのFD/SDの担当者として、他校研修を実施中<br>
<small style="color: black;">
生成AIを活用することで、授業設計の変化やアクティブラーニングは可能か？<br>
そもそも、AIをどう教えるのか。AIと人のベストミックスで教えることも可能か？
</small></div>

---

<!-- _class: split activity-achievement -->

<div class="page-title">学内の活動実績</div>

## アカデミック・リンクとAIリテラシー教育の実績

<div class="split-body">
<div class="left">

### 研修活動と図書館DX

- <strong>体験型 15mins セッション</strong>（学生・教職員対象）
  - 講義・実践・振返りを各15分で行う体験型構成
  - <strong>2025年度の課題と挑戦</strong>：Geminiにチャットで尋ねる以上のことが普及しない状況を打破すべく、実践的活用を体験する機会を設けるミッションを担い、15分構成のセミナーを企画・実施。
  - <strong>実績</strong>：延べ約700名を集客し、受講者の約97%から「役立つ」と高い評価を獲得。
- <strong>図書館業務のDX</strong>
  - 4月より <strong>Google AI Pro</strong> を一部職員に付与
  - 既に <strong>18業務</strong> の自動化を達成

</div>
<div class="right">

### 担当授業（2026年度 AI教育）

<div class="right-grid">
<div>

- <strong>情報リテラシー</strong> <small>(1年・前 200名)</small>
- <strong>生成AI活用講座</strong> <small>(混・後 100名)</small>
  - Workspace Studio, Opal, AI StudioでAIリテラシーを学ぶ
- <strong>研究での生成AIの活用法</strong> <small>(院・前 50名)</small>
  - Career Launchpad経由のアサイン
- <strong>Preparing Future Faculty</strong> <small>(院・前 10名)</small>
  - 大学教員を目指す院生向け

</div>
<div class="poster-box">
  <img src="./src/fig21-poster-15min.png" alt="15分セッション 2026年度版ポスター">
</div>
</div>

</div>
</div>

<div class="takeaway">体験型研修で約700名を集客（満足度97%）、図書館DXや授業でのAIリテラシー教育を先導</div>

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# GfEのInnovatorになった話

## GoogleのAIとSaaSで世界の教育コミュニティにインパクトを与える

<!-- まず自分の体験から、Innovatorプログラムの中身に踏み込む -->

---

<!-- _class: summary -->

<div class="page-title">きっかけ</div>

## なぜ Innovator に挑戦したのか

<div class="sections">

<div class="sec-box">

### 出発点の問い

- AI を「使わせる」だけでなく、教員と学生の体験を変えたい
- **教員の採点・FB**という最も時間を奪う業務に切り込みたい
- 学内活動の枠を超えて、教育を変える人と繋がりたい

</div>

<div class="sec-box">

### 気づき #0

- ICT を教えるレベルでは弱い
- 「AI 時代の医療者をどう育てるか」の問いを一人で抱えるのは限界
- **仲間とフレームワーク**が必要だった

</div>

</div>

<!-- 個人研究と組織活動の両方が頭打ち感があり、外部コミュニティを探していた -->

---

<!-- _class: supporter -->

<div class="supporter-title">学外コミュニティからの強力な応援</div>

<div class="supporter-grid">
<div class="supporter-photo-area">
<div class="supporter-photo">
<img src="./src/fig20-hashiguchi.jpg" alt="橋口 剛">
</div>
<div class="supporter-name">橋口 剛 氏</div>
<div class="supporter-title-sub">Google Cloud 元AI本部長</div>
</div>

<div class="supporter-message-box">
<div class="quote-text">
「コミュニティへの所属は重要：<br>
学内活動の枠を超えて、教育を変える人と繋がりたい」
</div>
<div class="context-text">
Google Cloud 元AI本部長の<strong>橋口剛さん</strong>、そしてソフトウェア協会教育担当理事の<strong>原山さん</strong>ら、個人的な研究コミュニティのリーダーたちから強力な応援をいただいています。
<br><br>
学内だけに閉じこもるのではない。同じパッションを持って「教育を根本から変えたい」と願う外部のチェンジメーカーと繋がり並走することこそが、本質的なイノベーションへの第一歩です。
</div>
</div>
</div>

<!-- 学外のチェンジメーカーとの繋がりが、イノベーションを起こす最大の推進力になる -->

---

<!-- _class: fig -->

<div class="page-title">認定の4ステップ</div>

## Google for Education 認定の構造

<div class="fig-area">

![Google for Education 認定者コミュニティの4つの型](./src/fig01-cert-types.png)

</div>

<div class="caption">図1. 認定イノベーター / トレーナー / コーチ / GEG リーダー</div>

<div class="takeaway">個人 → 学校 → 世界へ広がるピラミッド型エコシステム</div>

<!-- L1/L2 は受験者個人、Trainer 以上は人を巻き込む役割 -->

---

<!-- _class: split -->

<div class="page-title">自分の現在地</div>

## Trainer → Innovator JPN26 認定

<div class="split-body">
<div class="left">

![Innovator 認定式](./src/fig03-cert-innovator.jpg)

<div class="caption">図2. Innovator JPN26 Tokyo 認定式</div>

</div>
<div class="right">

### 2026 年の歩み

- **3/1**：Certified Trainer 取得
- **5/5-7**：JPN26 Tokyo 認定研修参加
- **以降**：1 年間のプロジェクト走行
- メンター × コホート × Google で並走

</div>
</div>

<div class="takeaway">Trainer から Innovator へ、約 2 か月で世界の輪に</div>

---

<!-- _class: fig -->

<div class="page-title">コホート</div>

## JPN26 全コホート集合

<div class="fig-area">

![JPN26 全コホート集合写真](./src/fig04-cohort-all.jpg)

</div>

<div class="caption">図4. Certified Innovator 20 周年 / JPN26 全員集合</div>

<div class="takeaway">研修後も Slack で 1 年間並走する仲間になる</div>

<!-- 国内+海外メンバーが混ざる。多様性が思考を広げる -->

---

<!-- _class: fig -->

<div class="page-title">Innovator 3 原則</div>

## Focus on user / Think 10x / Prototype

<div class="fig-area">

![Innovator が掲げる3原則のフレーム](./src/fig14-three-principles.jpg)

</div>

<div class="caption">図. Why/Who/What → 3 つの原則 → Operationalize/Measure/Pilot/Launch</div>

<div class="takeaway">解より問い、改善より変革、議論より試作</div>

<!-- 研修全体がこの3原則で貫かれている。 -->

---

<!-- _class: split -->

<div class="page-title">研修の構造</div>

## 3日間×デザイン思考の流れ

<div class="split-body">
<div class="left">

![Design Thinking @ JPN26 の3日間プログラム](./src/fig05-design-thinking.jpg)

<div class="caption">図5. Day1=Define / Day2=Ideation / Day3=Pitch</div>

</div>
<div class="right">

### 設計思想

- **Day 1 まるごと "Define"**
- **Ideation は Day 2 から**
- Day 3 で User Testing → Pitch
- <span class="hl">解より痛みを先に</span>研ぐ

</div>
</div>

<div class="takeaway">ソリューションではなく、ニーズから始まる</div>

---

<!-- _class: split -->

<div class="page-title">Day 2 の中身</div>

## Google エンジニアと双方向の場

<div class="split-body">
<div class="left">

![Day 2 のスケジュール](./src/fig06-day2.jpg)

<div class="caption">図6. Design Sprint × 3 + In-Depth AI Session × 2</div>

</div>
<div class="right">

### 製品共創パートナーの立場

- Gemini の仕様・制約を中の人から聞ける
- 現場の声を**製品に直接届ける**ルート
- 単なる利用者ではなく**共創者**
- 学校現場の課題が Google に届く

</div>
</div>

<div class="takeaway">Google に意見できる関係性が手に入る</div>

---

<!-- _class: fig -->

<div class="page-title">Day 3</div>

## User Testing から Pitch 卒業まで

<div class="fig-area">

![Day 3 のスケジュール](./src/fig18-day3.jpg)

</div>

<div class="caption">図. Day 3 はテスト → Pitch 準備 → 卒業 Pitch で締める</div>

<div class="takeaway">作って終わりではなく、人に試して言語化する</div>

<!-- 3日目のクライマックスは卒業Pitch。準備→本番でストーリーを磨く -->

---

<!-- _class: split -->

<div class="page-title">私の提案</div>

## Wisdom Engine 構想

<div class="split-body">
<div class="left">

![Wisdom Engine 発表中](./src/fig07-wisdom-engine.jpg)

<div class="caption">図7. Human-Centric Feedback via Collaborative AI</div>

</div>
<div class="right">

### 教員の採点 FB を AI で支援

- 仮採点 → 教員が修正
- 修正を**コンテキストとして接続**
- ルーブリック・想定解が**回ごとに育つ**
- 教員は**判断と承認**に時間を使える

</div>
</div>

<div class="takeaway">AI が完成形を出すのではなく、教員と一緒に育つ</div>

---

<!-- _class: summary -->

<div class="page-title">1年間の研究</div>

## Innovator は 3 日で終わらない

<div class="sections">

<div class="sec-box">

### 認定後 1 年間の伴走

- メンター × コホートで継続並走
- 自プロジェクトを **1 年で検証・実装**
- 中間 Pitch / Showcase で進捗共有
- Google から継続的リソース支援

</div>

<div class="sec-box">

### 何が変わるか

- 「思いつき」が**1年計画のプロジェクト**に
- 学内で孤独だった構想が世界と動く
- **失敗を含めた実装サイクル**が回る
- Wisdom Engine を本気で実装できる

</div>

</div>

<!-- 単なる資格ではなく、1年間の研究プログラムとして設計されている -->

---

<!-- _class: split -->

<div class="page-title">時間設計</div>

## Parkinson's Law と 1 年スパン

<div class="split-body">
<div class="left">

![Parkinson's Law のチャート](./src/fig16-parkinsons.jpg)

<div class="caption">図. 与えた時間に仕事は膨張する (Parkinson, 1955)</div>

</div>
<div class="right">

### 短く区切る設計

- 仕事は与えた時間で膨張する
- 1 年プロジェクトを**短い Sprint**に分解
- Day 2 Sprint × 3 が**型**になる
- 中間 Pitch で**強制的に区切る**
- だから 1 年でも進む

</div>
</div>

<div class="takeaway">締切を意図的に置く設計が、長期実装を進める</div>

<!-- 1年研究を機能させるには、短い区切りを設計に組み込む必要がある -->

---

<!-- _class: summary -->

<div class="page-title">気づき①②</div>

## 視座と文化の転換

<div class="sections">

<div class="sec-box">

### ① ツール思考 → Why 思考

- Before：「Gemini を**どう使うか**」（ツール起点）
- After：「目の前の**どんな痛みを解くか**」
- ツールは**選ばれる側**に変わる
- 医学教育の問いも同じ構造

</div>

<div class="sec-box">

### ② "Yes, and..." の文化

- アイデアを否定せず**膨らませる**
- 完璧でなくていい、**まずプロトタイプ**
- 失敗の共有を称賛
- 学内で**準備不足の案も出せる**ように

</div>

</div>

<!-- 個人の体験：以前は「準備が足りないから出さない」だったのが、出してから直す前提に -->

---

<!-- _class: summary -->

<div class="page-title">気づき③④</div>

## 思考のスケールと役割の再定義

<div class="sections">

<div class="sec-box">

### ③ 10x Thinking

- 1.1 倍ではなく**10 倍**を考える
- ❌ 採点を AI で速く
- ✅ 学生が**臨床推論を言語化し続ける**学習体験
- 既存業務の効率化と新体験設計を分ける

</div>

<div class="sec-box">

### ④ チェンジメーカーへ

- 「教室の良い実践者」から脱却
- **学内・国内・国際の AI 教育ハブ**へ
- Innovator は資格ではなく**振る舞う覚悟**
- 次の挑戦者へメンタリングする側に

</div>

</div>

<!-- 役割が個人実践者からネットワークノードに変わる -->

---

<!-- _class: fig -->

<div class="page-title">現実</div>

## What really happens

<div class="fig-area">

![What really happens のマインドマップ](./src/fig17-what-really-happens.jpg)

</div>

<div class="caption">図. 失敗・ピボット・気持ちの波が絡まり合うのが現実</div>

<div class="takeaway">きれいな線形ではない。だからこそ伴走者が要る</div>

<!-- 直線的に進むことはない。乱反射する経路を許容する設計が大切 -->

---

<!-- _class: message -->

# Change is not hard, it's uncomfortable

## 変化は難しいのではなく、居心地が悪い

<!-- 研修中もっとも刺さった一言。挑戦のハードルは技術ではなく心理 -->

---

<!-- _class: split -->

<div class="page-title">コミュニティ文化</div>

## "BRINGS US TOGETHER" の意味

<div class="split-body">
<div class="left">

![Google オフィスの食事スペース](./src/fig09-together.jpg)

<div class="caption">図8. Spark Camp と Dinner の場</div>

</div>
<div class="right">

### 設計された "余白"

- Spark Camp / Dinner / Excursion
- セッション**外の対話**が種になる
- 国・分野・年齢を超えた**心理的安全**
- 学内・学会では得られない場
- <span class="hl">医学教育に持ち帰りたい</span>

</div>
</div>

<div class="takeaway">フラットで多様な対話の場が、革新を生む</div>

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# Google が学校に提供しているもの

## 認定 / Cloud / AI Pro / I/O 2026 の方向性

<!-- 整理してお見せします。むっちゃ分かりにくいので -->

---

<!-- _class: summary -->

<div class="page-title">3つの柱</div>

## Google の学校支援の全体像

<div class="sections">

<div class="sec-box">

### 教職員認定

- Educator L1 / L2
- Trainer / Coach
- **Innovator**
- Cloud Champion

</div>

<div class="sec-box">

### Google Cloud

- Cloud 認定資格
- Career Launchpad（無料）
- 研究補助金 $5,000
- 公的機関枠 $1,000+ 人的支援

</div>

<div class="sec-box">

### 機関パートナー

- Reference Institution
- 寄付講座
- 個別協働
- 招待制プログラム

</div>

</div>

<!-- 全体像を把握してから個別の話に入る -->

---

<!-- _class: split -->

<div class="page-title">Cloud 認定資格</div>

## 基礎から専門までの 3 階層

<div class="split-body">
<div class="left">

![Google Cloud 認定資格の3階層](./src/fig11-cloud-certs.png)

<div class="caption">図9. 基礎 / アソシエイト / プロフェッショナル</div>

</div>
<div class="right">

### Generative AI Leader

![Generative AI Leader バッジ](./src/fig10-genai-leader.png)

- 最も今っぽい**入口**
- 経営・教育リーダー向け
- 試験 1 回で取得可能
- **学生にも勧めやすい**

</div>
</div>

<div class="takeaway">学生のキャリア接続にも有効な入口資格</div>

---

<!-- _class: summary -->

<div class="page-title">Launchpad</div>

## Google Career Launchpad（無料）

<div class="sections">

<div class="sec-box">

### 学べるコース

- Generative AI Leader
- AI Research Foundations (DeepMind)
- Cybersecurity / Data Analytics
- Cloud Engineering / Digital Leader

</div>

<div class="sec-box">

### 特典と単位

- **認定試験 半額**
- **クラウド無料券**（教育用クレジット）
- 応募単位は**個々の教員**
- FD/SD・課程外学習に親和的

</div>

</div>

<!-- 学生にも勧めやすい無料リソース -->

---

<!-- _class: split -->

<div class="page-title">研究補助金</div>

## 個人・組織で使える Cloud 補助

<div class="split-body">
<div class="left">

![Google Cloud 公的機関向け補助](./src/fig12-cloud-grant.png)

<div class="caption">図10. AI 活用に最大 $1,000 + 人的支援</div>

</div>
<div class="right">

### 2 つの枠

- **学術研究用 個人**：GCP $5,000
  - 1 年間無料、簡単な Proposal
- **公的機関 AI 活用 組織**：$1,000
  - **Google から人的支援**あり
- アプリ実装の起点に

</div>
</div>

<div class="takeaway">自己負担ほぼゼロで PoC を回せる枠が存在</div>

---

<!-- _class: fig -->

<div class="page-title">Enterprise SKU</div>

## Gemini Enterprise の SKU 比較

<div class="fig-area">

| SKU | 対象 | 価格 | 主な機能 |
|---|---|---|---|
| Gemini Business | 中小企業 | **$21**/月 | 汎用 AI ＋ Agent ＋ 検索強化 |
| Enterprise Standard | 大企業 | **$30**/月 | コア AI ＋ 高度セキュリティ |
| **Enterprise EDU** | 教育機関 | **$5**/月 | 学生主導でエージェント作成・共有 |
| **Enterprise EDU Pro** | 教育機関 | **$20**/月 | キャンパス全体で Agent を展開・管理 |

</div>

<div class="caption">表1. Education 向けは一般 Enterprise の 1/6 価格</div>

<div class="takeaway">EDU Pro $20 で全学 Agent 展開が現実コストに</div>

---

<!-- _class: summary -->

<div class="page-title">I/O 2026</div>

## Google I/O 2026 が示した次の 10 年

<div class="sections">

<div class="sec-box">

### Agentic 時代へ完全移行

- 月間 **3.2 千兆**トークン処理
- 設備投資 **約 $1,900 億/年**
- 第 8 世代 TPU（学習 / 推論）
- 自律エージェント Gemini Spark

</div>

<div class="sec-box">

### World Models へ

- **Gemini Omni**：物理法則をシミュレート
- 動画を自然言語で編集
- **Gemini 3.5 Flash**：速度 4 倍 / 半額
- Antigravity 2.0 で 93 Agent 並行

</div>

</div>

<!-- AIが生成するだけでなく、世界を理解し行動する段階に -->

---

<!-- _class: summary -->

<div class="page-title">AI for Science</div>

## 教育・研究に直撃する新ツール群

<div class="sections">

<div class="sec-box">

### Gemini for Science

- 論文要約・**仮説生成**を支援
- 研究プロセスに AI が入り込む
- CodeMender：脆弱性自動修正
- WeatherNext：気象高精度予測

</div>

<div class="sec-box">

### Isomorphic Labs

- **創薬プロセス**を劇的に加速
- 免疫疾患・がん候補が前臨床に
- 医学教育の射程内
- 学生が触れるフロンティアが変わる

</div>

</div>

<!-- 「何を教えるか」より「変化に追従する力」を教える時代へ -->

---

<!-- _class: message -->

# Agent が "前提" になる教育へ

## 問いは「使っていいか」から「設計できるか」へ

<!-- ここで一拍。聴衆の認識を切り替えるスライド -->

---

<!-- _class: summary -->

<div class="page-title">マルチ AI</div>

## Google × Anthropic を併用する理由

<div class="sections">

<div class="sec-box">

### Google の強み

- 教育機関向け破格価格（$5-20）
- **Workspace 統合**（学内に浸透済み）
- 無料クラウドクレジット
- World Models / Science 系

</div>

<div class="sec-box">

### Anthropic（Claude）の強み

- 長文の倫理的推論・コード生成
- **Claude Code / Agent SDK**
- 学術アカデミック割引
- 安全性研究の透明性

</div>

</div>

<!-- 両社の補助金を使い倒すことで自己負担ほぼゼロでPoCが回せる -->

---

<!-- _class: summary -->

<div class="page-title">大学 DX の本質</div>

## 3 つの転換

<div class="sections">

<div class="sec-box">

### ① データ中心

- データを**真ん中**に置く
- AI が**横断参照・更新**できる状態
- 紙 / Excel / 分断 SaaS から脱却
- 業務を AI で再設計する

</div>

<div class="sec-box">

### ② Agent が教え評価する

- 教員の代わりではなく**判断を拡張**
- 採点・対話・伴走に**常駐**
- 教員は判断と承認に集中
- 教育プロセスに Agent が組み込まれる

</div>

<div class="sec-box">

### ③ 学生 UX の根本変革

- 学内リソースを**学生ごとに結ぶ**
- 学習履歴 × 個別化 × 文脈
- 体験そのものを変える
- 個人最適化された伴走

</div>

</div>

<!-- "AIを入れる" のではなく "AI前提に大学を再設計する" -->

---

<!-- _class: summary -->

<div class="page-title">ユースケース固定</div>

## 5 つのユースケース × データ層

<div class="sections">

<div class="sec-box">

### 固定する 5 つ

- 採点 × FB（Wisdom Engine）
- 学生質問対応（半歩先 Agent）
- 会議録・議事録自動化
- 学務問い合わせ一次対応
- 研究助成・規定の自動解釈

</div>

<div class="sec-box">

### 共有データ層

- 授業データ・学習履歴
- 規定・FAQ・議事録
- 研究助成・学内ルール
- 複数 Agent が**同じ層**に接続

</div>

</div>

<!-- EDU Pro × Workspace × Cloud で全学Agent基盤が現実に -->

---

<!-- _class: summary -->

<div class="page-title">医学教育で必須</div>

## なぜ AI リテラシーが不可欠か

<div class="sections">

<div class="sec-box">

### 安全と説明責任

- AI の限界・バイアスを見抜けないと**患者安全リスク**
- 自動化バイアスを避ける臨床判断
- 患者へ説明できる責任能力
- (Liu 2025, Yüksel 2024)

</div>

<div class="sec-box">

### 倫理と規制

- 医療系学生で**倫理領域が最も不足**
- 学習の質低下・思考力低下リスク
- **EU AI Act** が利用者の AI リテラシー義務化
- (Lan 2026, Rodger 2025, Ben Hmido 2026)

</div>

</div>

<!-- 関心はあるが理解は不十分という共通課題 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# 本学で挑戦したいこと

## 医学教育 × Google × AI Agent の実装案

<!-- 具体的な施策一覧へ -->

---

<!-- _class: fig -->

<div class="page-title">施策一覧</div>

## 千葉大で試したい 8 つの施策

<div class="fig-area">

| # | 施策 | 学べる力 | リソース |
|---|---|---|---|
| 1 | Launchpad 医学生向け導入 | リテラシー | 無料・試験半額 |
| 2 | AI Agent ハッカソン | Agent 設計 | $5,000 クレジット |
| 3 | AI 倫理ワークショップ | 倫理 | Innovator NW |
| 4 | Studio 教員 Agent 講座 | Agent 設計 | Plus 契約内 |
| 5 | AI Pro 50 名スモール試行 | UX 改革 | 約 76 万円/年 |
| 6 | 図書館 LibraryTech PoC | Cloud | 公的 $1,000 |
| 7 | 教員 AI 採点 FB 支援 | Agent × UX | 1 年伴走 |
| 8 | パートナーシップ申請 | — | 招待制枠 |

</div>

<div class="caption">表2. 個人施策と組織施策のミックス</div>

<div class="takeaway">教員 × $5,000 クレジットで今すぐ始められる</div>

---

<!-- _class: summary -->

<div class="page-title">優先順位</div>

## 段階的な実装とエコシステム

<div class="sections">

<div class="sec-box">

### 今すぐ（個人単位）

- ② AI Agent ハッカソン構想
- ④ Studio 教員講座
- ① Launchpad 試行
- 教員 × $5,000 クレジット起点

</div>

<div class="sec-box">

### 半年〜1 年（組織）

- ⑤ AI Pro 50 名試行
- ⑥ 図書館 PoC
- ⑧ パートナーシップ申請
- 実績で Google の目を引く

</div>

<div class="sec-box">

### 目指す姿

- 学んで → 作って → 実装
- **学生 × 教員**の共創
- 人材プール × 研究支援
- 大学 UX 改革のハブ

</div>

</div>

<!-- アカリンのコンセプトと親和的なエコシステム -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- Innovator は到達点ではなく**1 年間の出発点**である
- ソリューションより**ニーズ**から、Google に意見できる立場
- 教育機関向け**Gemini Enterprise EDU $5** で前提が変わった
- 大学 DX の本質は**データ中心 × Agent × 学生 UX**の 3 転換
- 教員の負担を下げ、学生の学びを深める PoC を今年から

<!-- 千葉大で試したい施策を具体的に持ち帰っていただきたい -->

---

<!-- _class: refs -->

<div class="page-title">参考文献</div>

## 参考文献

- Alfahl, S. O. A. (2025). Knowledge, attitudes and ethical concerns about AI among medical students at Taibah University. *Advances in Medical Education and Practice*. https://doi.org/10.2147/AMEP.S528281
- Laupichler, M. C., et al. (2024). Medical students' AI literacy and attitudes towards AI. *BMC Medical Education*. https://doi.org/10.1186/s12909-024-05400-7
- Lan, X., et al. (2026). Characteristics and determinants of AI literacy in Chinese nursing students. *International Journal of Nursing Studies Advances*. https://doi.org/10.1016/j.ijnsa.2026.100482
- Liu, F., et al. (2025). A foundational architecture for AI agents in healthcare. *Cell Reports Medicine*. https://doi.org/10.1016/j.xcrm.2025.102374
- Rodger, D., et al. (2025). Generative AI in healthcare education. *Nurse Education in Practice*. https://doi.org/10.1016/j.nepr.2025.104461
- Ben Hmido, S., et al. (2026). Smart use of AI in healthcare: the growing role of AI literacy. *Nederlands tijdschrift voor geneeskunde*.
- Weidener, L., & Fischer, M. (2023). Teaching AI ethics in medical education. *Perspectives on Medical Education*. https://doi.org/10.5334/pme.954

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.s@faculty.gs.chiba-u.jp
