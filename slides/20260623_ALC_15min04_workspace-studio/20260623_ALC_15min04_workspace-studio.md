---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">Google Workspace Studio</div><img class="hdr-logo" src="../assets/15min.png" alt="ALC 15 mins セッション">'
footer: ''
style: |
  :root { --hdr-left-w: 34%; --accent: #C8611C; --accent-dark: #8f3f12; --accent-soft: #FBEAD9; }
  section.cover-hero { --hdr-left-w: 36%; }
  section.cover-hero .title-event { color: #C8611C; }
  /* ===== レシピ・フロー（スターター→AI→結果）の共通部品 ===== */
  .recipe-flow { display: flex; align-items: stretch; gap: 10px; margin: 16px 0 12px; }
  .recipe-flow.big { margin: 24px 0; }
  .recipe-flow .arrow { align-self: center; font-size: 30px; font-weight: 800; color: #C8611C; }
  .rf-box { flex: 1; border-radius: 12px; padding: 12px 16px; border: 2px solid #ccc; }
  .rf-box .rf-tag { font-size: 16px; font-weight: 700; display: inline-block; padding: 2px 12px; border-radius: 11px; color: #fff; margin-bottom: 8px; }
  .rf-box .rf-body { font-size: 19px; line-height: 1.4; }
  .recipe-flow.big .rf-box .rf-body { font-size: 22px; }
  .rf-trigger { border-color: #1A6BB0; background: #EAF2FB; } .rf-trigger .rf-tag { background: #1A6BB0; }
  .rf-ai { border-color: #C8611C; background: #FBEEE6; } .rf-ai .rf-tag { background: #C8611C; }
  .rf-out { border-color: #0F766E; background: #E7F3F0; } .rf-out .rf-tag { background: #0F766E; }
  .prompt { background: #EAF2FB; border-left: 6px solid #1A6BB0; border-radius: 8px; padding: 10px 18px; font-size: 19px; line-height: 1.5; }
  .prompt .lab { font-weight: 700; color: #1A6BB0; margin-right: 6px; }
  .for-tag { display: inline-block; font-size: 16px; font-weight: 700; color: #fff; background: #5B6068; border-radius: 11px; padding: 2px 12px; margin-bottom: 6px; }
  .for-student { background: #1A6BB0; } .for-staff { background: #C8611C; }
  /* ===== できあがりイメージ（結果のモック） ===== */
  .demo-card { max-width: 680px; margin: 18px auto 0; border: 1px solid #d3d7dd; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 7px rgba(0,0,0,.09); }
  .demo-card .dc-bar { background: #eef1f4; font-size: 16px; font-weight: 700; color: #3a3f45; padding: 6px 16px; border-bottom: 1px solid #e0e4e9; }
  .demo-card .dc-body { font-size: 18px; line-height: 1.6; padding: 12px 18px; background: #fff; color: #2a2d33; text-align: left; }
  .demo-card .dc-note { font-size: 16px; color: #8a4b00; }
  /* ===== 動画プレースホルダー（設定の録画を後日挿入｜横幅のみ指定で差し替え） ===== */
  .video-ph { width: 470px; max-width: 100%; aspect-ratio: 16 / 9; margin: 2px auto; border: 3px dashed #C8611C; border-radius: 12px; background: #FBEEE6; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; color: #9a3412; box-sizing: border-box; }
  .video-ph.full { width: 700px; }
  .video-ph .vp-play { width: 0; height: 0; border-style: solid; border-width: 17px 0 17px 29px; border-color: transparent transparent transparent #C8611C; }
  .video-ph .vp-label { font-size: 19px; font-weight: 700; }
  .video-ph .vp-file { font-size: 14px; color: #b06a3a; font-family: monospace; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学のアカウントで、めんどうな作業をAIに任せる</div>
<div class="title-big">Google Workspace Studio</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">ALC 15-min sessions ・ 第4回　｜　15-min × 3<br>学びを変える！研究を深める！生成AI活用術</div>
<div class="title-date">2026/6/23（火）</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!--
- ALC 15 minsセッション第4回へようこそ。今日のテーマは Google Workspace Studio。
- 一言でいうと「Workspaceの中の“定型作業”をAIに肩代わりさせる」道具。Gmail/Drive/Docs/Sheets/Chatの中で動く。
- 構成は15分で概要→30分で一緒に作る→15分で質疑と自分の業務への当てはめ。
- ゴールは「毎日のちょっと面倒」を1つ自動化して帰ること。
-->

---

<!-- _class: summary -->

<div class="page-title">開始の前に</div>

## はじめる準備（2つ）

<div class="sections">

<div class="sec-box">

### ① ログイン

- PCで千葉大学 **Google Workspace** にログイン
- 学校のGmailが開けばOK
- Workspace Studio も**この大学アカウント**で使う

</div>

<div class="sec-box">

### ② slido

- **slido** にアクセス（URLは会場で配布）
- 質問・アンケート・議論に使う
- オンラインの方も同じ slido へ

</div>

</div>

<div class="takeaway">※ slido等の入力は、個人情報等を除きALC／図書館の業務改善・調査研究に利用します</div>

<!--
- 開始前の準備。①千葉大Workspaceにログイン（このアカウントでStudioを使う）。②slidoにアクセス（質問・議論・アンケート用）。
- slido等の入力データの取り扱い（個人情報を除き業務改善・調査研究に利用）を明示。第1回と同じ運用。
-->

---

<!-- _class: intro -->

<div class="page-title">本日の進め方</div>

<div class="two-col">
<div class="col">

## 15 → 30 → 15 分（3 sessions）

<div style="padding-left: 0.5em;">

1. **Session 1【15分・講義】** — Workspace Studio とは／しくみ／安全に
2. **Session 2【30分・体験】** — 学生・教職員の例を**一緒に作る**
3. **Session 3【15分・議論】** — slido で気づきを共有する

</div>

</div>
<div class="col">

## 今日のゴール

<div class="callout-orange">
毎日の「ちょっと面倒」を、<br><strong>ひとつ自動化して帰る</strong>。
</div>

- 千葉大の**学生・教職員アカウント**でそのまま試せます
- 完璧を目指さず、**1つ動かす**ことが目標
- 録画は後日公開。手元での再現にどうぞ

</div>
</div>

<!--
- 60分。最初の15分は座学、真ん中30分が本番のハンズオン、最後15分で質疑と自分への落とし込み。
- 今日は「全部覚える」ではなく、自分の手で1つ作って動かす体験を持ち帰ってほしい。
- Zoom参加者も、反応（👍️使ってる／♥️使ってみたい）で参加してください。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 1 ・ 15-min ・ 講義</div>

# Workspace Studio とは

## 学びを変える！研究を深める！生成AI活用術

<!--
- まず概要。何ができて、しくみはどうなっていて、大学アカウントで安全に使えるのか、を15分で押さえる。
-->

---

<!-- _class: message -->

# その「毎回おなじ作業」、<br>AIに任せませんか？

## メールの仕分け・要約・リマインド・下書き…

<!--
- 学生も教職員も、毎日「同じ手順」を繰り返している。締切のチェック、問い合わせへの定型返信、議事録の整理。
- こういう“判断は要るけど頭は使わない”作業こそ、AIエージェントの出番。
-->

---

<!-- _class: summary -->

<div class="page-title">こんな「面倒」</div>

## 学生も教職員も、毎日くり返している

<div class="sections">

<div class="sec-box">

### 学生のあるある

- 課題やレポートの**締切を見落とす**
- 教員からのメールに**気づくのが遅れる**
- ゼミ論文のPDFが**読みきれず溜まる**

</div>

<div class="sec-box">

### 教職員のあるある

- 学生から**同じ質問**が何度も届く
- 会議の**議事録づくり**に時間がとられる
- アンケートの**集計・とりまとめ**が手作業

</div>

</div>

<div class="takeaway">これらは「きっかけ→処理→通知」の形に書ける = 自動化できる</div>

<!--
- 左右に学生・教職員の“あるある”を並べた。今日はこの両方の例を実際に作る。
- ポイントは、どれも「あるきっかけで→決まった処理をして→誰かに知らせる」という共通の形をしていること。だから自動化できる。
-->

---

<!-- _class: summary -->

<div class="page-title">3つの特徴</div>

## Workspace Studio とは何か

<div class="sections">

<div class="sec-box">

### ① ノーコード

- **やりたいことを言葉で書くだけ**
- プログラミング・専門用語は不要

</div>

<div class="sec-box">

### ② Workspace と一体

- Gmail / Drive / Docs / Sheets / **Chat** / Meet の中で動く
- いつも使う道具の延長で完結

</div>

<div class="sec-box">

### ③ Gemini が頭脳

- **Gemini 3** が読む・要約する・判断する
- 添付ファイルの中身まで理解できる

</div>

</div>

<div class="takeaway">「AIエージェント」を、ふだんの作業の中に自分で作って置ける</div>

<!--
- Workspace Studio = 自分専用の小さなAIアシスタント（エージェント）を、コードなしで作れる仕組み。2025年12月発表、Business / Enterprise / Education で一般提供。
- 強みは3つ。言葉で作れる／Workspaceの中で完結する／頭脳がGemini 3で“判断”ができる。
- 出典は最後の参考リンクに。studio.workspace.google.com から使う。
-->

---

<!-- _class: fig -->

<div class="page-title">しくみ＝Flow</div>

## 「スターター」＋「ステップ」でできている

<div class="recipe-flow big">
<div class="rf-box rf-trigger">
<span class="rf-tag">スターター</span>
<div class="rf-body"><strong>きっかけ</strong><br>毎朝8時／メール受信／<br>Driveにファイル追加 など</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-ai">
<span class="rf-tag">ステップ（AI）</span>
<div class="rf-body"><strong>処理する</strong><br>読む・要約する・<br>分類する・下書きする</div>
</div>
<div class="arrow">→</div>
<div class="rf-box rf-out">
<span class="rf-tag">ステップ（出力）</span>
<div class="rf-body"><strong>結果を出す</strong><br>Chatに通知／Sheetsに記録／<br>ラベルを付ける など</div>
</div>
</div>

<div class="takeaway">1つの Flow = スターター1つ ＋ ステップ複数。これだけ</div>

<!--
- Flow（フロー）が自動化の単位。部品は2種類だけ。
- スターター＝引き金。スケジュール（毎朝8時）か、イベント（メールが来た・ファイルが置かれた）。1つのFlowにスターターは1つ。
- ステップ＝起きたあとの処理。AIの処理（要約・分類・下書き）と、出力（Chat通知・Sheets記録・ラベル付け）を、いくつでも並べられる。
- この後のハンズオンは全部この形。「何をきっかけに、何をして、どう知らせるか」を埋めるだけ。
-->

---

<!-- _class: summary -->

<div class="page-title">作り方</div>

## 作り方は3通り（迷ったら①）

<div class="sections">

<div class="sec-box">

### ① 言葉でたのむ（最速）

- やりたいことを**そのまま文章で**書く
- Gemini が Flow を組み立ててくれる
- 例：「毎週金曜に、進捗シートの更新をリマインドして」

</div>

<div class="sec-box">

### ② テンプレートから選ぶ

- よくある自動化が**ひな型**で用意されている
- 選んで、少し直すだけ

</div>

<div class="sec-box">

### ③ 自分で組む

- スターターとステップを**手で並べる**
- 細かく作り込みたいとき

</div>

</div>

<div class="takeaway">まずは①「言葉でたのむ」。動かしてから直せばよい</div>

<!--
- 3通りある。初めてなら①でいい。日本語でやりたいことを書けば、Geminiが下書きのFlowを作ってくれる。
- ②テンプレートは「メール要約」「リマインド」など定番の型。③は細かく自作したい人向け。
- 大事なのは、完璧に作ろうとしないこと。まず①で作って、テスト実行して、直す。
-->

---

<!-- _class: split -->

<div class="page-title">安全に使う</div>

## 大学アカウントだから安心なこと

<div class="split-body">
<div class="left">

<div class="callout-gray">
Workspace Studio は、あなたの<strong>大学アカウントの権限の中</strong>だけで動きます。<br>
自分が見られないデータには、エージェントも触れません。
</div>

<div class="caption">図. 自分の権限を超えて動くことはない</div>

</div>
<div class="right">

### 確認しておく3点

- **教育機関向けの保護**：Education のデータは**人間レビューなし・学習に不使用**（FERPA／COPPA準拠）
- **権限の範囲内**：自分がアクセスできる範囲のデータだけを扱う
- **共有は明示的**：作った Flow は自分のもの。共有して初めて他人が使える

<div class="callout-yellow">
Workspace for Education の<strong>コアサービス</strong>。高等教育では<strong>既定でON</strong>（管理者設定で変更可）。
</div>

</div>
</div>

<!--
- 「業務メールや学生情報を入れて大丈夫？」という不安に先に答えておく。
- Workspace Studioはあなたのアカウントの権限の範囲でしか動かない。あなたが見られない他人のメールやドライブには、作ったエージェントも触れられない。
- Education向けのデータは人間レビューされず、モデル学習にも使われない（FERPA/COPPA準拠）。個人版の無料AIとはここが違う。出典：Google for Education（BETT 2026）／Google管理者ヘルプ。
- Workspace for Educationのコアサービスで、高等教育は既定ON（管理者で変更可）。年齢要件：Geminiアプリ13歳+／NotebookLM18歳+（大学生は満たす）。表示されない場合はALC/情報の窓口へ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 2 ・ 30-min ・ 体験</div>

# つくってみる（ハンズオン）

## 学びを変える！研究を深める！生成AI活用術

<!--
- ここからが本番。実際に画面を開いて、4つの例を一緒に作る。学生向け2つ、教職員向け2つ。
- 全部「スターター→AI→結果」を埋めるだけ。難しくない。
-->

---

<!-- _class: split -->

<div class="page-title">進め方</div>

## ハンズオンの3ステップ

<div class="split-body">
<div class="left">

<div class="callout-blue">
<strong>① 開く</strong><br>
<code>studio.workspace.google.com</code><br>
（大学アカウントでログイン）
</div>

<div class="callout-orange">
<strong>② 作る</strong><br>
「言葉でたのむ」でやりたいことを入力
</div>

<div class="callout-green">
<strong>③ 試す → 有効化</strong><br>
<strong>Test run</strong> で動作確認 → <strong>Turn on</strong>
</div>

</div>
<div class="right">

### 今日つくる4つ

<div class="for-tag for-student">学生</div>

1. 質問メールを見落とさない
2. 今日締切の課題を毎朝まとめる

<div class="for-tag for-staff">教職員</div>

3. 問い合わせメールを仕分け＆下書き
4. 議事録を要約してToDo抽出

</div>
</div>

<div class="takeaway">必ず Test run で確認してから Turn on。いきなり本番にしない</div>

<!--
- 手順は3つ。studio.workspace.google.com を開く→「言葉でたのむ」で作る→必ずTest runで試してからTurn onで有効化。
- Test runは実際の操作を伴うので、最初はテスト用のメール/フォルダで確認するのが安全。
- これから作る4つを予告。学生2つ・教職員2つ。
-->

---

<!-- _class: fig -->

<div class="page-title">設定の基本</div>

## まずは「開く → 言葉でたのむ → 試す」

<div class="fig-area">
<div class="video-ph full">
<div class="vp-play"></div>
<div class="vp-label">設定の基本操作（録画予定）</div>
<div class="vp-file">./src/fig01-setup-basics.mov</div>
</div>
</div>

<div class="caption">studio.workspace.google.com を開き、Flow を1つ作って Test run するまでを実演</div>

<div class="takeaway">最初の1本で操作感をつかむ。あとは同じ手順のくり返し</div>

<!--
- ハンズオン導入。実際の画面録画で「Studioを開く→言葉でたのむ→Test run→Turn on」の基本操作を見せる。
- 後日、画面収録に差し替え（横幅だけ指定で挿入）。差し替え用タグ：
  <video controls src="./src/fig01-setup-basics.mov" poster="./src/fig01-setup-basics.png" width="700"></video>
-->

---

<!-- _class: split -->

<div class="page-title">例① 学生</div>

## 質問メールを見落とさない

<div class="split-body">
<div class="left">

<div class="video-ph">
<div class="vp-play"></div>
<div class="vp-label">設定の様子（録画予定）</div>
<div class="vp-file">./src/fig02-recipe-mail-label.mov</div>
</div>

<div class="caption">この Flow を作る手順（動画は後日）</div>

</div>
<div class="right">

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「自分への質問が含まれるメールが来たら、"要返信" のラベルを付けて、Chatで私に知らせて。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり例 ｜ Google Chat（通知）</div>
<div class="dc-body">〇〇先生から<strong>質問メール</strong>が届きました。<br>件名：「来週の面談、何時にできますか？」<br>→ ラベル <strong>「要返信」</strong> を付けました。</div>
</div>

</div>
</div>

<div class="takeaway">指導教員・事務からの「要返信」を埋もれさせない</div>

<!--
- 1つ目。受信トレイが多くて大事なメールを見落とす学生向け。
- きっかけ＝メール受信。AI＝本文を読んで「これは自分への質問/依頼か」を判断。結果＝ラベル付け＋Chat通知。
- プロンプトはこの一文でよい。Geminiがフローに変換してくれる。Case Western大学でも教職員・学生に同じ例を紹介している（出典は最後）。
-->

---

<!-- _class: split -->

<div class="page-title">例② 学生</div>

## 今日締切の課題を毎朝まとめる

<div class="split-body">
<div class="left">

<div class="video-ph">
<div class="vp-play"></div>
<div class="vp-label">設定の様子（録画予定）</div>
<div class="vp-file">./src/fig03-recipe-deadline.mov</div>
</div>

<div class="caption">この Flow を作る手順（動画は後日）</div>

</div>
<div class="right">

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「毎朝7時に、今日が締切の課題・予定をカレンダーとメールから集めて、短いリストにしてChatに送って。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり例 ｜ Google Chat（今日のリスト）</div>
<div class="dc-body">□ レポートA 提出（23:59）<br>□ 統計演習 課題③<br>□ 13:00〜 ゼミ発表</div>
</div>

</div>
</div>

<div class="takeaway">「今日やること」が、起きたらもう手元にある</div>

<!--
- 2つ目。締切管理が苦手な学生向け。
- きっかけ＝毎朝7時のスケジュール。AI＝カレンダーとメールから今日締切を拾って要約。結果＝短いリストでChat通知。
- 「毎朝の手作業チェック」がゼロになる。スターターが“時刻”のパターン。
-->

---

<!-- _class: split -->

<div class="page-title">例③ 教職員</div>

## 問い合わせメールを仕分け＆下書き

<div class="split-body">
<div class="left">

<div class="video-ph">
<div class="vp-play"></div>
<div class="vp-label">設定の様子（録画予定）</div>
<div class="vp-file">./src/fig04-recipe-inquiry.mov</div>
</div>

<div class="caption">この Flow を作る手順（動画は後日）</div>

</div>
<div class="right">

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「学生からの問い合わせメールを "履修 / 施設 / その他" に分類し、よくある質問には返信の下書きを作って。送信はしないで。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり例 ｜ Gmail（下書き）</div>
<div class="dc-body">件名：Re: 履修登録について<br>〇〇さん、お問い合わせありがとうございます。履修登録の期限は△月△日です…<br><span class="dc-note">※ 送信せず下書き保存。内容を確認してから送信。</span></div>
</div>

</div>
</div>

<div class="takeaway">同じ質問への対応を時短。最終チェックは人が行う</div>

<!--
- 3つ目。窓口対応・事務職員・教員向け。
- きっかけ＝問い合わせ受信。AI＝内容で分類し、定型質問には返信文を下書き。結果＝ラベル＋下書き保存。
- 重要：AIは“下書き”まで。送信は人が確認してから。ここを必ず強調する（誤送信・不適切回答の防止）。
-->

---

<!-- _class: split -->

<div class="page-title">例④ 教職員</div>

## 議事録を要約してToDo抽出

<div class="split-body">
<div class="left">

<div class="video-ph">
<div class="vp-play"></div>
<div class="vp-label">設定の様子（録画予定）</div>
<div class="vp-file">./src/fig05-recipe-minutes.mov</div>
</div>

<div class="caption">この Flow を作る手順（動画は後日）</div>

</div>
<div class="right">

<div class="prompt">
<span class="lab">言葉でたのむ：</span>「このフォルダに議事録が追加されたら、決定事項とToDo（担当・期限つき）を表にして、委員会のChatに投稿して。」
</div>

<div class="demo-card">
<div class="dc-bar">できあがり例 ｜ 委員会 Chat（ToDo）</div>
<div class="dc-body">決定：次回は 6/30 に開催。<br>□ 資料作成 — 田川（〜6/25）<br>□ 会場予約 — 〇〇（〜6/23）</div>
</div>

</div>
</div>

<div class="takeaway">会議後の「で、誰が何をいつまで？」を自動で表に</div>

<!--
- 4つ目。委員会・教授会・プロジェクトの多い教職員向け。
- きっかけ＝特定フォルダに議事録Docが追加。AI＝決定事項とToDoを担当・期限つきで抽出。結果＝表にしてChatで共有。
- 「議事録は作るが、ToDoが追えない」を解決。スターターが“ファイル追加”のパターン。
-->

---

<!-- _class: summary -->

<div class="page-title">アイデア集</div>

## まだまだ作れる（持ち帰り用）

<div class="sections">

<div class="sec-box">

### 学生

- 論文PDFをDriveに入れたら**1ページ要約**をDocsに
- Form回答を**緊急度で分類**→Sheetsに集計
- 研究室Sheetsが「レビュー待ち」で**Chat通知**

</div>

<div class="sec-box">

### 教職員

- 会議前に**議題・締切・出席者・添付**を要約→Chat
- メール添付を**自動でDrive保存＋Sheets記録**
- 授業評価の自由記述を**感情分析**で傾向把握

</div>

</div>

<div class="takeaway">「毎週やっている作業」を1つ思い浮かべて、後で作ってみる</div>

<!--
- ハンズオンの4つ以外の発展例。すべてGoogle公式テンプレ／BETT2026教育発表／UW-Madison KBで確認済みのレシピ。
- これらは“宿題”。自分が毎週やっている定型作業を1つ選んで、帰ってから作ってみてほしい。
- どれも「きっかけ→AI処理→出力」に当てはまることを確認。出典は参考リンク参照。
-->

---

<!-- _class: summary -->

<div class="page-title">仕上げの作法</div>

## 作ったあと、知っておくと得

<div class="sections">

<div class="sec-box">

### 試す・直す

- **Test run** で必ず動作確認してから有効化
- うまくいかなければ**プロンプトを少し直す**

</div>

<div class="sec-box">

### 共有する

- Flow は **Googleドキュメントのように共有**できる
- 研究室・部署で**良い自動化を横展開**

</div>

<div class="sec-box">

### つなげる

- Salesforce / Jira / Asana など**外部サービス**とも連携
- 込み入った処理は **Apps Script** も呼べる

</div>

</div>

<div class="takeaway">良い Flow は1人で抱えず、チームで共有して使う</div>

<!--
- 作った後の3つの作法。①Test runで確認してから有効化、ダメならプロンプト修正。②作ったFlowはGoogle Docのように共有でき、研究室や部署で横展開できる。③外部サービス連携やApps Scriptで高度化も可能。
- 共有が効くと、誰か1人が作った良い自動化が組織全体に広がる。ここがチームでの価値。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 3 ・ 15-min ・ 議論・座談会</div>

# 気づきをみんなで共有する

## 学びを変える！研究を深める！生成AI活用術

<!--
- 最後の15分。今日のまとめと、自分の業務への落とし込み、質疑。
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- Workspace Studio＝**コードなし**でAI自動化（Flow）を作る道具
- Flow＝**スターター（きっかけ）＋ステップ（処理）**だけ
- 作り方は3通り、迷ったら**「言葉でたのむ」**
- 大学アカウントの**権限の範囲内**・学習に不使用で安全に
- まず**1つ作って Test run**。良い Flow はチームで共有

<!--
- 5点で締める。今日の要点を一気に振り返る。
- 一番のメッセージは「まず1つ作って動かす」。完璧主義にならない。
-->

---

<!-- _class: summary -->

<div class="page-title">振り返りワーク</div>

## 自分の「めんどう」を1つ選ぶ

<div class="sections">

<div class="sec-box">

### ① きっかけは？

- いつ・何が起きたら始めたい？
- 例：毎朝／メール受信／ファイル追加

</div>

<div class="sec-box">

### ② AIに何をさせる？

- 読む・要約・分類・下書き…
- 例：「要返信か判断して」

</div>

<div class="sec-box">

### ③ どう知らせる？

- Chat通知／ラベル／Sheets記録
- 例：「Chatで私に教えて」

</div>

</div>

<div class="takeaway">この3つが埋まれば、もう「言葉でたのむ」文が書けている</div>

<!--
- 振り返りワーク。隣の人と、または各自で、自分の定型作業を1つ選んで、3つの欄を埋めてみる。
- 3欄が埋まれば、それをつなげるだけで「言葉でたのむ」プロンプトになる。これを持ち帰ってもらう。
-->

---

<!-- _class: summary -->

<div class="page-title">コツと注意</div>

## つまずきポイントと対処

<div class="sections">

<div class="sec-box">

### うまくいくコツ

- **小さく始める**（1スターター＋数ステップ）
- プロンプトは**具体的に**（対象・条件・出力先）
- まず**テスト用データ**で Test run

</div>

<div class="sec-box">

### 注意すること

- 送信・公開は**人が最終確認**（自動送信にしない）
- 個人情報は**権限と用途**を意識
- 表示されない時は**管理者設定**を確認

</div>

</div>

<div class="takeaway">「下書きまではAI、送信は人」を基本ルールに</div>

<!--
- よくあるつまずきと対処。コツ＝小さく始める・具体的に書く・テストデータで試す。
- 注意＝送信や公開は人が確認（自動送信は事故のもと）、個人情報は権限と用途に注意、組織で表示されないのは管理者設定の問題。
- 黄金ルール「下書きまではAI、最終判断は人」。
-->

---

<!-- _class: summary -->

<div class="page-title">議論・座談会</div>

## slido で、気づきを共有しよう

<div class="sections">

<div class="sec-box">

### ① 面白かった・使えそう

- 今日つくって／見て、いちばん「使えそう」と思ったのは？

</div>

<div class="sec-box">

### ② 次に自動化したい

- 自分の学び・仕事で、次に自動化したい作業は？

</div>

<div class="sec-box">

### ③ 気をつけたい点

- 使うとき注意したいこと（権限・送信確認）は？

</div>

</div>

<div class="takeaway">敬意をもって、忌憚なく、建設的に — 協力的な場づくりが学びの秘訣</div>

<!--
- Session 3 の中心。slidoで全員から集める。第1回と同じ3つの問いをWorkspace Studio版に。
- 「面白かった/使えそう」「次に自動化したい作業」「気をつけたい点」。
- 場づくりの一言（敬意・忌憚なく・建設的に）も第1回を踏襲。
-->

---

<!-- _class: split -->

<div class="page-title">アンケート・次回</div>

## 終了時アンケートのお願い

<div class="split-body">
<div class="left">

### 次回予告

<div class="callout-orange">
<strong>第5回（7/2）</strong><br>
AIの仕組みと Google Colab
</div>

### このシリーズ
**ALC 15-min sessions**<br>
「学びを変える！研究を深める！生成AI活用術」<br>
気になった回だけの参加もOK

</div>
<div class="right">

### 終了時アンケート

<div class="callout-blue">
よりよい企画のため、ご協力ください<br>
<strong>https://forms.gle/（第4回用に差し替え）</strong>
</div>

- いますぐ試す：`studio.workspace.google.com`
- 学内の相談：アカデミック・リンク・センター
- 録画・スライドは後日公開

</div>
</div>

<div class="takeaway">※ 入力情報は個人情報等を除き、ALC／図書館の業務改善・調査研究に利用します</div>

<!--
- 次回は7/2、AIの仕組みとGoogle Colab。今日の「使う」から、一歩中身に踏み込む回。
- このシリーズは1回ごとに完結。気になる回だけの参加でOK。
- 学内の相談窓口はALC。録画とスライドは後日公開。
-->

---

<!-- _class: refs -->

<div class="page-title">参考リンク</div>

## 参考リンク

- Google Workspace Studio（公式）. https://workspace.google.com/studio/
- 使ってみる（ログイン）. https://studio.workspace.google.com/
- はじめ方／スターターとステップ（ヘルプ）. https://support.google.com/workspace-studio/answer/16765661
- Workspace Studio 発表（Google Workspace Blog, 2025年12月）. https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work
- 教育向けの発表（Google for Education, BETT 2026）. https://blog.google/products-and-platforms/products/education/bett26-premium-ai/
- 大学導入の事例：Case Western Reserve University. https://case.edu/utech/about/utech-news/google-launches-workspace-studio
- 大学の活用ガイド：UW–Madison KB. https://kb.wisc.edu/noncredit/160150
- 本シリーズ案内（千葉大ALC）. https://alc.chiba-u.jp/eyr/2026/04/03/2026ai.html

<!--
- 出典。公式サイト・利用URL・はじめ方ヘルプ・発表ブログ・海外大学の導入事例・本シリーズ案内。
- スライド配布時にここから辿れるようにしてある。
-->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# ありがとうございました

## ご質問・ご相談を、どうぞ

<!--
- 残り時間は質疑。自分の業務での「これ自動化できる？」を歓迎。
- 連絡先・アンケートのQRはここで案内（口頭/別資料）。
-->
