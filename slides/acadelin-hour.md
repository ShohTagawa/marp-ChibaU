---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIを使ってみよう</div><img class="hdr-logo" src="./assets/akalin.png" alt="あかりんアワー">'
footer: ''
style: |
  /* デックタイトル左帯を広く */
  :root { --hdr-left-w: 34%; }
  /* 中央ページタイトル帯を広く（左端24% → 右端60%） */
  section .page-title {
    left: 24%;
    width: 36%;
  }
  /* ========== 表紙レイアウト（cover-hero） ========== */
  section.cover-hero {
    padding-top: calc(var(--header-h) + 60px);
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
    font-size: 72px;
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
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 16px;
  }
  section.cover-hero .title-date {
    margin-bottom: 16px;
  }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学のアカウントで使える</div>
<div class="title-big">生成AIを使ってみよう</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./assets/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">アカデミック・リンク企画<br>1210あかりんアワー</div>
<div class="title-date">2026/5/19 (火) 12:10–12:40</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!--
- あかりんアワーへようこそ、と一言。
- 普段は15ミニッツセッションでインタラクティブにやっているが、今日は30分でマシンガンに動画を見せていく形式。
- 動画は録画として後日公開されるので、手元で再現してほしい旨を伝える。
- 「AIの性能」と「使い手側の引き出し方」のギャップを、20を超える具体例で体感してもらうのがゴール。
-->

---

<!-- _class: intro -->

<div class="page-title">本日の進め方</div>

<div class="callout-gray">
<strong>形式</strong>：動画 → 解説のサイクルを繰り返します。<br>
だんだん高度になります。手は動かさず、まず全体像を掴んでください。
</div>

<div class="two-col">
<div class="col">

### 30分の流れ

1. 大学提供AIと安全性（5分）
2. 性能 vs 活用のギャップ（3分）
3. **Gemini基本編：13ユースケース**（12分）
4. **NotebookLM：4ユースケース**（4分）
5. **上級編：Gems / iPaaS / CLI**（4分）
6. まとめとOODAループ（2分）

</div>
<div class="col">

### 約束事

- すべて**千葉大アカウント**で再現可能
- すべて**学習されない・広告に使われない**領域
- 録画が出たら**手元で15ミニッツセッション**を申し込んでください
- このセッション**だけ**でできる人にはなりません。**触ること**が必要

</div>
</div>

<!--
- 30分でだいたい22〜25個のユースケースを駆け抜ける。
- 「全部覚える」のではなく、「自分のAIに対する地図」を持ち帰ってもらうのが目的。
- 後で15ミニッツセッションを案内するので、気になったものは深掘りに来てほしい。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# 大学が提供する2つのAI

## 安全に、ライセンスを理解して使う

<!--
- ここから第1章。
- まず「何が手元にあって、それが安全か」を整理する。これがないと、機密情報や著作物を打ち込めない。
-->

---

<!-- _class: summary -->

<div class="page-title">2つのAI</div>

## Gemini と Copilot — どう使い分けるか

<div class="sections">

<div class="sec-box">

### Gemini（Google）

- **Google Workspace**と一体（Gmail/Drive/Calendar）
- 日本語：ジェミニ／英語：ジェミナイ
- **アプリ連携・LearnLM・NotebookLM**が強い
- 長文・大規模コンテキストに強い

</div>

<div class="sec-box">

### Copilot（Microsoft）

- 裏側は **OpenAI（ChatGPT系）**
- **Office連携**（Word/Excel/Teams）
- 学校版は**個人版より制限あり**だが、**教育用にチューニング**
- 「答えを直接渡さない」依存性低めの設計

</div>

</div>

<!--
- 千葉大の学生・教職員アカウントで、両方ともコアサービスとして提供されている。
- 性格が違うので、片方だけ使うのはもったいない。今日はGemini中心、最後にCopilotにも触れる。
- 「裏で動いているモデル」が違うだけで、得意分野が変わることを最初に押さえる。
-->

---

<!-- _class: split -->

<div class="page-title">安全性の確認</div>

## 緑のマーク・データ保護の表示を見る

<div class="split-body">
<div class="left">

<div class="placeholder">[Geminiの「データ保護」表示と<br>Copilotの右上の緑のマークの<br>スクリーンショット2枚並べ]</div>

<div class="caption">図1. 両AIに表示される保護インジケータ</div>

</div>
<div class="right">

### 確認すべき3点

- **学習に使われない**：あなたの入力がモデル学習に転用されない
- **データ保護適用**：Gmailと同等の保護水準
- **広告に使われない**：将来のステマ的回答も発生しない

</div>
</div>

<div class="takeaway">「緑のマーク」と「データ保護」の文字を毎回確認する習慣を</div>

<!--
- Geminiでは、メニューを開くと「Gmailなどと同じデータ取扱い」と書かれている。
- Copilotでは、右上に緑のシールド（保護中）マークが出る。これが個人版との明確な違い。
- AI推論コストが高騰しているため、業界全体では「広告で稼ぐ」「回答にステマを混ぜる」可能性が懸念されている。学校アカウントはここを契約で塞いでいる。
- Copilotは特に「依存性を下げる」教育向けチューニングが入っており、馴れ馴れしく話しかけてこない。
-->

---

<!-- _class: summary -->

<div class="page-title">ライセンス</div>

## 同じGoogleアカウントでも、サービスごとに規約が違う

<div class="sections">

<div class="sec-box">

### 安全な範囲

- **Google Workspaceコアサービス**：Gmail、Drive、Gemini、NotebookLM
- **Copilot（学校版）**：Microsoft 365テナント内
- ここに打ち込む内容はGmailと**同レベルで保護**

</div>

<div class="sec-box">

### 注意が必要な範囲

- 「Googleでログイン」した**外部サービス**は別ライセンス
- **Antigravity**など、Google製でも**非コア**は学習対象になりうる
- ログインのたびに**別の規約**が適用される

</div>

</div>

<div class="takeaway">分からない時はライセンス本文をAIに貼って「私の情報はどう使われる？」と聞く</div>

<!--
- 多くの人は「学校のGmailで登録したから安全」と誤解している。が、ログイン先のサービスのライセンスが適用される。これは毎回別物。
- Google製品でも、コアサービスとそうでないものは線が引かれている。Antigravityは現時点で学習対象。
- ワンポイント：ライセンス本文をそのままAIに投げ込んで「私の情報は売られる？学習される？」と聞くと、要約してくれる。これが実用的。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# 性能と中身のギャップ

## なぜ私たちはAIを使いこなせていないのか

<!--
- ここから核心。安全性の話は「使うための前提」だった。
- なぜ皆さんがAIを「使いこなせていない」と感じるか、その構造を解説する。
-->

---

<!-- _class: fig -->

<div class="page-title">性能ギャップ</div>

## 性能はエクスポネンシャル、活用はリニア

<div class="fig-area">
<div class="placeholder">[Anthropic公開図：縦軸 capability、横軸 time。<br>AI性能カーブが指数関数的に上昇、組織の活用カーブは直線的に追従。<br>その間の三角形の隙間が「未活用ゾーン」]</div>
</div>

<div class="caption">図2. AI capability vs. organizational adoption（Anthropic）</div>

<div class="takeaway">この隙間を売るのが「コンサル」「フォワードデプロイドエンジニア」</div>

<!--
- Anthropicが公開している有名な図。AIの性能は指数関数的に伸びる一方、組織がそれを使う速度は線形にしか伸びない。
- このギャップを埋めるサービスとして、いまフォワードデプロイドエンジニアという職種が高給で取引されている。
- 結論：自分たちで機能を知っていれば、わざわざ高額なサービスを買わなくても、ある程度のことはできる。
- 今日の30分は、その「自分で埋める」ための地図を渡す時間。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# Gemini 基本編

## 13のユースケースを駆け抜ける

<!--
- ここからユースケース集。動画を1本ずつ見せながら、解説を被せていく。
- 動画ごとに「これでこういうことができる」を1メッセージで持ち帰ってもらう。
-->

---

<!-- _class: split -->

<div class="page-title">UC①：文脈質問</div>

## Google検索の「キーワード」ではなく、人に教える文体で

<div class="split-body">
<div class="left">

<div class="placeholder">[Geminiにファイルを添付し、<br>長めのプロンプトで質問する画面]</div>

<div class="caption">図3. ファイル添付＋背景＋目的の3点プロンプト</div>

</div>
<div class="right">

### 良いプロンプトの型

- **背景**：私は何者で、何のため
- **入力**：このファイル／このデータを見て
- **タスク**：何を、どんな形式で出して
- **制約**：文字数、語調、参考にする範囲

</div>
</div>

<div class="takeaway">「マニュアルで人に教えるように」打つと、回答品質が一段上がる</div>

<!--
- 多くの人がGoogle検索の延長でAIに「○○ ○○ ○○」とキーワードを投げている。これだとAIは推測で動くので、品質が落ちる。
- ファイル（PDF、画像、スプレッドシート）をそのまま添付できるので、文脈を渡すのが容易。
- 「人にマニュアルを書く」感覚を意識すると、自然と背景・タスク・制約が揃う。
-->

---

<!-- _class: split -->

<div class="page-title">UC②：アプリ連携</div>

## ＠でClassroom・Drive・Gmailを呼び出す

<div class="split-body">
<div class="left">

<div class="placeholder">[Geminiの＠メニューを開き、<br>Classroom / Drive / Gmail / Calendar が<br>並んでいるスクリーンショット]</div>

<div class="caption">図4. ＠で呼び出せるGoogleアプリ群</div>

</div>
<div class="right">

### 事前にONにする2つのスイッチ

- Gemini設定の**外側＋内側の連携ボタン**
- Gmailの**スマート機能をON**

### できること

- 授業日程を**Classroomに一括投入**
- Driveから**「○○のスライドある？」**で即検索
- **件名・本文を過去返信例から学習**して下書き

</div>
</div>

<div class="takeaway">連携を一度ONにすれば、Geminiが「執事」のように振る舞い始める</div>

<!--
- ＠マークを押すと、Google Workspaceの全アプリが呼び出せる。これが連携の入口。
- Classroom投入：シラバスから抽出した日程を一括登録できる。出てきた灰色の枠が「成功」のサイン。
- Drive検索：ファイル名を覚えていなくても、内容から見つけてくれる。
- Gmail下書き：これまでの返信スタイル（署名・文字数・敬語レベル）を学習して、自分らしい返信案を出してくれる。これだけで業務時間がかなり減る。
-->

---

<!-- _class: split -->

<div class="page-title">UC③：LearnLM</div>

## 答えを「教えない」ようにチューニングされたAI

<div class="split-body">
<div class="left">

<div class="placeholder">[ガイド付き学習ONの状態で<br>「答え教えて」と聞いて、<br>AIが質問返ししている画面]</div>

<div class="caption">図5. LearnLM：教えるのではなく問い返す</div>

</div>
<div class="right">

### LearnLMの5原則

- **能動学習**を促す
- **認知負荷**を管理する
- **学習者に適応**する
- **好奇心を刺激**する
- **メタ認知**を深める

Arizona State Univ.等で**教育効果を実証**

</div>
</div>

<div class="takeaway">「答え」ではなく「考え方」を引き出すモード</div>

<!--
- LearnLMはGoogleが教育向けに開発した特殊AI。教育研究者が5つの原則に基づいてチューニング。
- アリゾナ州立大などで効果検証され、実際に論文が出ている。
- 普通のAIに「答え教えて」と言うと答える。LearnLMは「まず何が分からない？」と返してくる。
- 学生に「依存しない使い方」を覚えてもらうための入口として最適。
-->

---

<!-- _class: summary -->

<div class="page-title">UC④〜⑥：3つの学び</div>

## 概念整理・暗記補助・問題演習を1つのAIで

<div class="sections">

<div class="sec-box">

### ④ 概念の対比

「**熱力学のエントロピー**と**情報工学のエントロピー**はどう違う？」
→ 共通の数理構造を示しつつ、適用領域の違いを段階的に開示

</div>

<div class="sec-box">

### ⑤ 暗記の工夫

「**KIDWモデル**の覚え方を考えて」「**日常の具体例**を出して」
→ 語呂・アナロジー・身近な例で記憶のフックを増やす

</div>

<div class="sec-box">

### ⑥ 演習問題の生成

「このスライドから**4択問題を5問**作って」
→ 答えだけでなく**解説と誤答の根拠**もセットで生成

</div>

</div>

<!--
- LearnLMは「概念」「暗記」「演習」の3軸で力を発揮する。
- 学生向け：「今日のスライドから暗記すべき所を抜き出して」「4択問題を毎回出すGemにしておく」と、勉強の入口が変わる。
- 教員向け：講義の理解度確認テストを5分で生成できる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑦：歌を作る</div>

## 30秒の短曲で、概念に音をつける</p>

<div class="split-body">
<div class="left">

<div class="placeholder">[Geminiの「歌を作る」ボタンと、<br>生成された波形プレイヤーの<br>スクリーンショット]</div>

<div class="caption">図6. 30秒の音楽生成（学校アカウント）</div>

</div>
<div class="right">

### 教育での使いどころ

- 用語の**ジングル**（記憶定着）
- 授業の**オープニング動画**用BGM
- 学生プロジェクトの**プロトタイプ提示**
- **多言語学習**でフレーズに節をつける

### 注意

- 著作権・商用利用は要確認
- 学内・授業内利用に留める

</div>
</div>

<div class="takeaway">「面白い」を授業に持ち込む小ネタとして強力</div>

<!--
- これは完全に余興、と思いきや、記憶定着には音が効く。
- 学校アカウントだと30秒まで。プロトタイプには十分。
- 公開や商用利用は別の話。あくまで授業内・学内のプロトタイプとして。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑧：Deep Research</div>

## カットオフを超えて、いまの情報に触る

<div class="split-body">
<div class="left">

<div class="placeholder">[Deep Researchを起動して、<br>10〜20件のソースを横断調査している<br>進行画面のスクリーンショット]</div>

<div class="caption">図7. Deep Research：自動的に複数ソースを横断</div>

</div>
<div class="right">

### 2段階で使い分ける

- **Web検索**：「裏取りしてよ」で1往復
- **Deep Research**：複数ソース横断、構造化レポート
- 「今日の天気予報」のような**リアルタイム情報**もOK
- **カットオフ後**の出来事にも対応

### Deep Researchの注意

- 月あたりの利用回数に上限あり
- 重要な調査でまとめて使う

</div>
</div>

<div class="takeaway">AIは「過去の知識」ではなく「いま検索する代理人」になった</div>

<!--
- 昔のAIには「知識のカットオフ」があった。今は四則演算的な基礎能力を持ったAIが、Web検索を呼び出して情報を加工して返してくる。
- Deep Researchは月あたりの利用回数に制限があるので、「これは重い調査だ」というときに使う。
- 天気予報のような瞬間的な情報も普通に取れる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑨：範囲指定検索</div>

## URLスコープを指定して、信頼できる範囲だけ読ませる

<div class="split-body">
<div class="left">

<div class="placeholder">[「千葉大学のディプロマポリシーを<br>www.chiba-u.ac.jp の範囲で出して」<br>と指示したプロンプト画面]</div>

<div class="caption">図8. ドメイン指定で根拠の出所を縛る</div>

</div>
<div class="right">

### 使い方

- **ドメインを指定**して情報源を縛る
- 例：千葉大の各学科のDP本文を取得
- **Claude**等では、さらに**全学科のDPを文字数比較**まで一気に可能
- 学内マニュアル調査・FD用資料作成に最適

</div>
</div>

<div class="takeaway">「どこから取ったか」を制御できれば、AI出力は引用に近づく</div>

<!--
- URLやドメインを指定すると、AIはそこだけを読みに行く。出所が分かるので、引用としても使える。
- Claudeの例：千葉大全学科のディプロマポリシーをURLスコープで指定し、各学科の文字数を一気に比較したらすぐ表になって出てきた。これは衝撃。
- 「あの情報、どこから？」が分かるだけで、AI出力の信頼度が変わる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑩：長文翻訳</div>

## CanvasとSpreadsheetで、全文を1行も落とさない

<div class="split-body">
<div class="left">

<div class="placeholder">[左：Canvasで全文翻訳<br>右：Spreadsheetに原文を貼り、<br>隣セルにAI翻訳を入れている画面]</div>

<div class="caption">図9. 省略を防ぐ2つの定石</div>

</div>
<div class="right">

### なぜ省略が起きる？

- AIは「会話文」で答えると**要約してしまう**
- 「省略するな」と言っても省略する

### 解決法

- **Canvas**で書き出し領域を分ける
- **Spreadsheet**：原文を行に貼り、**隣セルに翻訳関数**
- 1行＝1単位なので、**漏れない**

</div>
</div>

<div class="takeaway">文章の構造に合わせて「書く場所」を分けるのがコツ</div>

<!--
- AIに「省略するな」と言っても、会話モードでは省略してくる。これは仕様。
- Canvas：左がチャット、右が書き出し領域。書き出し領域に対しては丁寧に全文出してくれる。
- Spreadsheet：1行ずつ翻訳させると、構造上「行が消える」ことがないので、確実に全文翻訳できる。
- これは英語論文の精読、学生レポート添削にも応用可能。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑪：回答傾向分析</div>

## Spreadsheetを「集計AI」として使う

<div class="split-body">
<div class="left">

<div class="placeholder">[受講者の自由記述アンケートが<br>並んだスプレッドシートに、<br>Geminiで「傾向まとめ」を実行している画面]</div>

<div class="caption">図10. 自由記述の質的分析を数分で</div>

</div>
<div class="right">

### 元データの例

- 講座後のリフレクション（自由記述）
- 演習の解答パターン
- 学生からの質問ログ

### Geminiができること

- **頻出テーマ**の抽出
- **満足度の理由**分類
- **未解決の疑問**のリスト化

</div>
</div>

<div class="takeaway">「回答を読む時間」が、「解釈する時間」に置き換わる</div>

<!--
- これまで自由記述アンケートは「読むのが大変」だった。Geminiで一気に俯瞰できる。
- 「皆さん何を喜んでいたか」「次回改善すべき点」をリストで返してくれる。
- もちろん最終判断は教員。あくまで「読む→解釈する」の時間配分を変えるのが目的。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑫：Canvas編集</div>

## 「キャッチーに」「短く」「論理的に」を即時反映

<div class="split-body">
<div class="left">

<div class="placeholder">[Canvasで草稿を出し、<br>「もっとキャッチーに」「3段落に圧縮」を<br>順に適用しているUI]</div>

<div class="caption">図11. AIが横で添削役を務める</div>

</div>
<div class="right">

### 使い方

- 草稿をCanvasに出す
- 「**もっとキャッチーに**」「**論理を強化**」と指示
- 差分が見えるので**学習にもなる**
- 学生のレポート指導でも応用可

</div>
</div>

<div class="takeaway">「最終文」ではなく「編集プロセス」を共有するAI</div>

<!--
- これは「文章を書く」のではなく「文章を磨く」AIの使い方。
- Canvasは差分が見えるので、添削の理由が学べる。指導の補助として有用。
- 学生に「自分で書き、AIに磨いてもらう」習慣をつけてもらうのに最適。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑬：音声・OCR</div>

## m4aもJPEGも、そのまま投げ込む

<div class="split-body">
<div class="left">

<div class="placeholder">[Canvasに音声ファイルを添付し、<br>書き起こしテキストが出力されている画面]</div>

<div class="caption">図12. 音声・画像をテキスト化</div>

</div>
<div class="right">

### できること

- **議事録**：会議録音→構造化要約
- **インタビュー**：話者識別＋書き起こし
- **手書きノート**：撮影→OCR→検索可能化
- **板書**：写真→学生配布用テキスト

### 注意

- 個人情報を含む音声は要事前確認
- 学内コアサービス内で完結させる

</div>
</div>

<div class="takeaway">「アナログ素材を一気にデジタル化」する入口</div>

<!--
- 音声・画像から構造化テキストを出せる。研究のインタビュー文字起こしに非常に強い。
- 板書の写真をOCRして配布資料化、研究室の手書きノートをアーカイブ化、など応用が広い。
- 個人情報を含む場合は、必ずコアサービス内で完結させ、外部に出さないこと。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑭：ページ内相談</div>

## 開いているWebページ・PDFについて、その場で質問

<div class="split-body">
<div class="left">

<div class="placeholder">[Chromeの右上Geminiアイコンから<br>「このページの要点は？」と聞いている画面]</div>

<div class="caption">図13. ブラウザ拡張としてのGemini</div>

</div>
<div class="right">

### 典型シナリオ

- 長いマニュアルから**該当箇所を抽出**
- 論文ページから**要約と批評**
- 学内Webサイトの**該当規程**を即答
- 英語ニュース記事の**3行サマリ**

</div>
</div>

<div class="takeaway">「読む前にAIに聞く」が選択肢に加わる</div>

<!--
- ブラウザ右上のGeminiアイコンから、いま開いているページについて質問できる。
- 「このページのどこに○○について書かれている？」と聞くと該当段落を引用してくれる。
- 大学のWebサイトの規程・マニュアルに対して非常に強い。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 4</div>

# NotebookLM 中級編

## 「資料群」をAIに与えるとどうなるか

<!--
- ここからNotebookLM。これまでは「単発の質問」だったが、NotebookLMは「資料を束で渡してAIに読ませる」モデル。
- 研究者・教員にとって特に有用。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑮：科研費アドバイザー</div>

## 過去の採択計画書を読ませて、自分の草稿を診断

<div class="split-body">
<div class="left">

<div class="placeholder">[NotebookLMに科研費関連PDFを<br>複数投入し、図解・指摘が出ている画面]</div>

<div class="caption">図14. 自分用の研究費レビュアー</div>

</div>
<div class="right">

### 投入する資料

- 公募要領・審査基準
- 過去の自分の申請書
- 自分の研究を支える論文

### 引き出す出力

- **構造の弱点**指摘
- **概念図のイラストレーション**
- **審査委員視点**の質問リスト

</div>
</div>

<div class="takeaway">「もう一人の自分」が、夜中に査読してくれる</div>

<!--
- NotebookLMは「ソース」を起点に動く。自分の科研費草稿＋関連論文＋公募要領を入れると、AIがその範囲で議論してくれる。
- 図解（イラストレーション）も出してくれるので、申請書のポンチ絵下書きにも使える。
- 「審査委員の立場で質問を10個出して」が特に有効。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑯：教材解説</div>

## 著作権フリー素材を「俯瞰の道具」に変える

<div class="split-body">
<div class="left">

<div class="placeholder">[教材PDFを投入し、<br>左ペインにソース、中央に解説、<br>右ペインに目次が並ぶ画面]</div>

<div class="caption">図15. 教材の構造可視化</div>

</div>
<div class="right">

### できること

- 章ごとの**要点と相互関係**を抽出
- 学生向けの**質問プロンプト**生成
- 学習者の**レベル別解説**を出力
- **マインドマップ**でテーマ俯瞰

</div>
</div>

<div class="takeaway">「読む順番」と「読まなくていい所」が見える</div>

<!--
- 著作権フリー教材や、自分が著作権を持つ教材を投入する。
- 学生に渡す前に、自分でAIに「この教材の難所はどこ？」と聞いて授業設計に活かせる。
- マインドマップ機能で全体構造を視覚化できる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑰：マニュアルBot</div>

## 千葉大の事務マニュアルを「対話で引ける」状態に

<div class="split-body">
<div class="left">

<div class="placeholder">[支払マニュアルをソースに、<br>「出張の精算手順は？」と聞き、<br>該当ページ番号付き回答が出ている画面]</div>

<div class="caption">図16. 引用付き回答で根拠を担保</div>

</div>
<div class="right">

### 構築の流れ

1. マニュアルPDF/Webを**ソースに登録**
2. テスト質問で精度確認
3. **共有リンクで部署内配布**
4. 更新時はソース差し替えだけ

### 効果

- 新人の**問い合わせ激減**
- ベテランの**応答工数削減**

</div>
</div>

<div class="takeaway">「マニュアルを読む文化」を「マニュアルに聞く文化」に</div>

<!--
- これは事務作業を本当に変える。千葉大の支払マニュアル、出張マニュアル、研究費マニュアルなど、どれも投入できる。
- 重要：NotebookLMは「引用付き」で答えるので、根拠ページが明示される。これが社内利用での信頼性を担保する。
- 部署単位で1つNotebookを作ればチーム内のFAQ Botになる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑱：共有</div>

## ワンクリックで部署・授業内に展開

<div class="split-body">
<div class="left">

<div class="placeholder">[NotebookLM右上の共有ボタンと、<br>権限選択ダイアログ]</div>

<div class="caption">図17. Googleドキュメントと同じ共有モデル</div>

</div>
<div class="right">

### 共有モデル

- リンクを知っている人が閲覧
- 部署メンバーで編集
- 授業のクラスに**学習支援Bot**を配布

### 注意

- ソースの**著作権・機密性**を確認
- 公開範囲は**最小権限**で

</div>
</div>

<div class="takeaway">作ったNotebookは「資産」。1人で抱えない</div>

<!--
- 作ったNotebookLMを共有すれば、組織のナレッジ資産になる。
- 共有はGoogleドキュメントと同じ感覚で、リンク発行だけでOK。
- ただし、入れたソースの著作権・機密性は要確認。学生に渡す前に責任の所在を整理する。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 5</div>

# 上級編：Gems / iPaaS / CLI

## 「AIを自分で組み立てる」段階へ

<!--
- ここから上級編。AIを「使う」から「組み立てる」段階。
- Gems（カスタムAI）、Workspace Studio（自動化）、Gemini CLI（コード生成）の3本柱。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑲：Gems</div>

## シラバスチェッカー、暗記Bot、自分専用アシスタント

<div class="split-body">
<div class="left">

<div class="placeholder">[Gem作成画面：左に指示文、<br>右にプレビューチャットが並ぶUI]</div>

<div class="caption">図18. 役割を固定したAIインスタンス</div>

</div>
<div class="right">

### Gemの例

- **シラバスチェッカー**（教員向け）
- **4択問題出題者**（学生向け）
- **メール下書きアシスタント**
- **Gemを作るGem**（メタGem）

### コツ

- 毎回打つプロンプトを**Gem化**
- レベルを少しずつ上げて**進化**

</div>
</div>

<div class="takeaway">よく使うプロンプトは、Gemにして「固定化」する</div>

<!--
- Gemは「役割を固定したAI」。毎回同じ指示を打たなくて済む。
- 学生向け：「今日のスライドから暗記する所を抽出する」「4択問題を毎回出す」をGem化しておくと学習効率が変わる。
- 教員向け：「シラバスを千葉大の記入規則に照らしてチェックする」Gemが超便利。
- 上級ワザ：「Gemを作るGem」を作っておくと、新しいGemをAIと一緒に設計できる。
-->

---

<!-- _class: split -->

<div class="page-title">UC⑳：スライド生成</div>

## NotebookLMは画像、GemはGoogleスライド形式

<div class="split-body">
<div class="left">

<div class="placeholder">[Gemから生成された<br>Googleスライド（編集可能）の画面]</div>

<div class="caption">図19. 編集可能形式でのスライド出力</div>

</div>
<div class="right">

### 2つの出口

- **NotebookLM**：画像形式（PNG）として出力
- **Gem経由**：**Googleスライド形式**で編集可能

### 活用シナリオ

- 講演資料の**初稿**生成
- 会議資料の**叩き台**
- 学生発表の**テンプレ**配布

</div>
</div>

<div class="takeaway">「ゼロから書く」のではなく「叩き台を直す」へ</div>

<!--
- NotebookLMでもスライド生成はできるが、画像で出てくるので編集不可。
- Gemに「スライドの作り方」を仕込んでおくと、Googleスライド形式（編集可能）で吐き出してくれる。
- 重要なのは「ゼロから書く時間」を「初稿を直す時間」に置き換えること。創造性は後工程で。
-->

---

<!-- _class: split -->

<div class="page-title">UC㉑：iPaaS自動化</div>

## メール・ファイル・カレンダーをAIで自動連結

<div class="split-body">
<div class="left">

<div class="placeholder">[Workspace Studioのフロー画面：<br>「メール受信→AI判定→自動返信下書き」<br>のノードがつながっているUI]</div>

<div class="caption">図20. ノーコードでAI自動化</div>

</div>
<div class="right">

### 自動化の例

- 受信メールに**AIが返信下書き**
- ファイル保存時に**自動分類**
- カレンダー登録から**準備リマインダー**
- フォーム回答を**スプレッドシート集計＋要約**

すべて**コアサービス**内で完結

</div>
</div>

<div class="takeaway">AIが「待機する社員」のようにバックグラウンドで動く</div>

<!--
- Workspace StudioはiPaaS（Integration Platform as a Service）として機能する。
- ノードを繋いで「○○が起きたら○○する」を組める。コードは不要。
- 私のメール下書きは、いまほぼ全てAIが生成している。確認して送信ボタンを押すだけ。
- これも全部コアサービスの内側で動くので、データ保護はそのまま。
-->

---

<!-- _class: split -->

<div class="page-title">UC㉒：Gemini CLI</div>

## ターミナルから「アプリを作って」と頼む

<div class="split-body">
<div class="left">

<div class="placeholder">[Gemini CLIでアプリ生成し、<br>右側にできあがったWebアプリが<br>表示されている画面]</div>

<div class="caption">図21. プロンプト1本でWebアプリ</div>

</div>
<div class="right">

### できること

- **小ツール**：ストップウォッチ、抽選器
- **教材アプリ**：演習問題ジェネレータ
- **ダッシュボード**：データ可視化試作
- **ゲーム**：授業導入の小ネタ

### Canvas版もある

ブラウザ内で完結（**右ペインに即プレビュー**）

</div>
</div>

<div class="takeaway">「コードが書けない」が、アプリ制作の壁ではなくなった</div>

<!--
- Gemini CLIはターミナルで動くツール。学校アカウントでログインすれば学習されない。
- 「ジャンケンゲーム作って」「タイマーアプリ作って」と頼むと、コードが書かれて動くものができる。
- ブラウザ派には、GeminiのCanvas機能で同じことができる。右ペインに即プレビュー。
- 教員：授業の導入で使える小ツールが10分でできる時代。
-->

---

<!-- _class: split -->

<div class="page-title">UC㉓：Copilot教育</div>

## 指導案・教科コンテンツ・学習指導要領との接続

<div class="split-body">
<div class="left">

<div class="placeholder">[CopilotのAgents一覧、<br>「指導案の作成」「教科コンテンツ」<br>ボタンが並ぶ画面]</div>

<div class="caption">図22. Microsoft Education連携</div>

</div>
<div class="right">

### 強み

- **指導案作成**：学習指導要領と紐付け
- **小中高向け**コンテンツが豊富
- **Classroom連携**機能
- **依存性を抑える**会話設計

千葉大版Copilotは**個人版より制限あり**だが、教育設計が緻密

</div>
</div>

<div class="takeaway">小中高への展開を考えるなら、Copilotが一歩リード</div>

<!--
- Microsoft Copilotは学校版で個人版より制限はあるが、教育コンテンツの設計が非常に良くできている。
- 特に小中高向けには「学習指導要領との紐付け」がデフォルトで効くので、指導案作成が早い。
- 大学教員でも、附属学校や高大連携を考えるなら知っておくべき。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 6</div>

# AIリテラシーの本質

## 「使い方」の上にある、もう一段の話

<!--
- 最後の章。ユースケースを駆け抜けたが、本質はそこではない。
- 「自分で評価できる範囲でしかAIは仕事に使えない」というメッセージを伝える。
-->

---

<!-- _class: message -->

# AIの出力を、評価できますか？

## 詳しければ評価できる。詳しくなければブラックボックス。

<!--
- AIの答えが正しいかを「考える」のはレベル1。
- レベル2は、出力そのものを「評価できる文脈にあるかどうか」を判断できること。
- 評価できない領域で使うと、ブラックボックスのまま仕事に持ち込んでしまう。
- だから「AIを使えるか」は「自分の専門性があるか」と表裏一体。
-->

---

<!-- _class: split -->

<div class="page-title">OODAループ</div>

## OODAループでAIと付き合う

<div class="split-body">
<div class="left">

<div class="placeholder">[OODAループの図：<br>Observe → Orient → Decide → Act が<br>循環している模式図]</div>

<div class="caption">図23. 高校教科書にも載るOODAループ</div>

</div>
<div class="right">

### AI学習のサイクル

- **Observe**：AIが何を出してきたか観る
- **Orient**：自分の知識と照らす
- **Decide**：採用／修正／棄却を決める
- **Act**：使う、または再プロンプト

カリキュラムを順番に消化する発想は、AIには合わない

</div>
</div>

<div class="takeaway">「触る → 評価する → 再投入」を回す人が伸びる</div>

<!--
- AI学習にはマニュアルがない。順番に学ぶカリキュラム発想では追いつけない。
- OODAループは戦闘機パイロットの意思決定モデルだが、今は高校教科書にも載っている。
- AIとの付き合い方も同じ。「触る→評価→次の問い」のループ速度が、そのままAIリテラシーになる。
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- 千葉大はGeminiとCopilotを**コアサービス**で提供（学習されない・広告なし）
- AIの**性能は指数関数的**、**活用は線形**——ギャップを自分で埋めよう
- Gemini基本編：**13のユースケース**を駆け抜けた
- NotebookLMで**資料群を対話可能**にできる
- Gems・iPaaS・CLIで**自分専用のAI**を組み立てる
- 学び方は**OODAループ**。触ること、評価することが本質

<!--
- 30分で22以上のユースケースを見せた。これは「全部覚える」ためではない。
- 「こんなことができるんだ」という地図を持って帰り、自分の業務・学びで「これだ」と思った1つから触り始めてほしい。
- 大学アカウントは安全な環境を用意してくれている。臆せず触ること。
-->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## 連絡先：tagawa.s@faculty.gs.chiba-u.jp
## 15ミニッツセッション：アカデミック・リンク・センターまで

<!--
- 質疑応答。
- 個別の業務シナリオは15ミニッツセッションで深掘りできることを再案内する。
- 録画が公開されたら手元で試してほしい旨を最後に伝える。
-->
