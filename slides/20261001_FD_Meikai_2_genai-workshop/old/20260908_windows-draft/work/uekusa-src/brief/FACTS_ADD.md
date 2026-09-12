# FACTS_ADD ── 追加調査（2026-08-20 実施）

調査対象：① Gemini Canvas でのグラフ作成 ／ ② Workspace Studio のテスト実行 ／ ③ Canva のテンプレート
前提環境は `FACTS.md` のとおり（Google Workspace for Education **Fundamentals**、Microsoft 365 Copilot Chat、Canva）。

---

## ① Gemini Canvas でのグラフ作成

### 確認できた事実

**A. Canvas は Education Fundamentals で使える（有償アドオン不要）**

- Google Workspace Updates の Canvas 提供告知の Availability 欄に、**Education は Fundamentals / Standard / Plus** が明記されている。Business・Enterprise・Frontline・Nonprofits も対象。
  出典: https://workspaceupdates.googleblog.com/2025/03/introducing-canvas-for-the-gemini-app.html
- Gemini アプリを職場・学校アカウントで使う場合の説明でも、Canvas・Gem は「ほとんどのユーザーが一般提供で使える機能」として案内されている。
  出典: https://support.google.com/gemini/answer/14620100?hl=en&co=DASHER._Family%3DEducation

**B. Canvas は HTML／React のコードを書いて、その場でプレビューできる（公式）**

- 公式告知の記載：「Ask Gemini to generate & preview React or HTML code directly in Canvas in a familiar code editor.」
  出典: https://workspaceupdates.googleblog.com/2025/03/introducing-canvas-for-the-gemini-app.html
- 公式紹介ページでは Canvas の成果物として「apps, games, interactive tests, webpages, and infographics」を挙げ、作例に 3D 惑星ジェネレータ・経路探索の可視化・音楽シンセサイザーが並ぶ。「Canvas is available to all Gemini users.」とも書かれている。
  出典: https://gemini.google/overview/canvas/

**C. 日本語UIの導線（公式ヘルプ）**

- Canvas を開く：gemini.google.com の**画面下部のテキストボックスの下**にある「ファイルを追加」アイコンの並びから **［Canvas］** をクリック。
- Canvas パネル**右上の［作成］** から、**［音声解説］／［クイズ］／［インフォグラフィック］／［ウェブページ］** に変換できる（自由記述で独自のビジュアルやアプリも指定可）。
- コードを見る／直す：**Canvas パネル右上の［コード］**。コンソール表示アイコンでログを確認できる。
- 書き出し：**［共有とエクスポート］** →［公開リンクをコピー］／［Google ドキュメントにエクスポート］／［コンテンツをコピー］／（Python は）［Colab にエクスポート］。
- 制限：Canvas の利用にはログインが必要。AI による作成機能と共有 Canvas のコピーは **18歳以上**。共有リンクは gemini.google.com でのみ開く（モバイルアプリでは開かない）。
  出典: https://support.google.com/gemini/answer/16047321?hl=ja&co=GENIE.Platform%3DDesktop

**D. インフォグラフィックの中にグラフが実際に描かれる**

- ソフトバンクの技術ブログが、Canvas で作ったインフォグラフィックに「ブログPVデータのトレンド分析グラフ」が入った実例を画像付きで示している。手順は「プロンプト入力ボックスにある『Canvas』をオンに」→ テキストが出たら「右上の『作成』をクリックして『インフォグラフィック』をクリック」。データはスプレッドシートを添付するより**手入力（プロンプトに貼る）を推奨**としている。
  出典: https://www.softbank.jp/biz/blog/cloud-technology/articles/202506/gemini-infographics/

**E. 外部CDNのライブラリ：Tailwind CSS を CDN から読み込む生成HTMLの実例がある**

- Gemini Canvas で作ったページを Netlify に上げる手順記事に、生成された `index.html` が **Tailwind を CDN（`cdn.tailwindcss.com`）から読み込む**構成であること、Canvas 上でその見た目がプレビューされることが書かれている。取り出し方は「`<!DOCTYPE html>` から `</html>` まで全部を選択してコピー」で、**ダウンロード／エクスポート専用のボタンには触れていない**。
  出典: https://blog.julietedjere.com/posts/vibe-coding-how-to-host-websites-from-gemini-canvas-on-netlify-for-free

**F. Canvas から HTML を取り出す現実的な方法（第三者記事）**

- 「［コード］タブを選択し、記載されているコードをすべてドラッグしてからコピー」→ VS Code 等に貼って `info.html` として保存 → ブラウザで開く。画像が欲しいときは**スクリーンショット**。直接ダウンロードには非対応、と説明されている。
  出典: https://note.com/weel_media/n/n34f8b2192ec8
- PDF で残す一般的な方法として、**ブラウザの［印刷］→［PDF に保存］** が案内されている。
  出典: https://www.pdnob.com/pdf-tips/gemini-to-pdf.html ／ https://www.softbank.jp/biz/blog/cloud-technology/articles/202601/gemini-slides-workaround/

**G. Canvas 内から外部APIを呼ぶアプリは壊れる報告がある**

- Gemini Apps コミュニティに「Gemini Canvas not working without API keys」「All of my Gemini Canvas-built apps stopped working (401 API error)」というスレッドが複数立っている。**APIキーを必要とする作りのアプリは今回のワークで作らせないほうがよい。**
  出典: https://support.google.com/gemini/thread/411164680/gemini-canvas-not-working-without-api-keys?hl=en ／ https://support.google.com/gemini/thread/411173546/all-of-my-gemini-canvas-built-apps-stopped-working-401-api-error?hl=en

**H. 代替候補の裏取り**

- **Google スプレッドシートのグラフ**（Gemini 不要・コアサービス）：［挿入］→［グラフ］。右側に［設定］と［カスタマイズ］のパネルが出て、グラフの種類・データ範囲・グラフと軸のタイトル・凡例などを変えられる。
  出典: https://support.google.com/docs/answer/63824?hl=ja
- **Canva のグラフ素材**：［素材］タブ →「グラフ」の［全て表示］→ グラフを選んで配置 → クリックすると**データ入力画面**が出て「項目名」「数値」を入力できる。左の表の**一番左上のセルをクリックして Ctrl+V** すると Excel のデータを貼り付けられる。
  出典: https://blog.asobou.co.jp/web/canva-graph ／ https://note.com/skillkit/n/n0b62f2e04017
- **Copilot の「画像の作成」**：生成画像なので**数値は正確に描かれない**。数字を載せる図の作成には使えない（この点は今回、公式の反証も裏付けも見つからなかったが、画像生成モデルの性質上、正確な棒の長さは保証されない）。

### 確認できなかったこと

- **Apache ECharts など任意の外部CDNスクリプトを、Canvas のプレビューが常に読み込めるかどうか。** Google の公式ドキュメントに、許可されるCDNの一覧も、外部スクリプトをブロックするという記述も**見つからなかった**。Tailwind の実例（上記E）はあるが、これは「Tailwind は動いた」という第三者の報告であって、ECharts が動く保証にはならない。
- 逆に「外部スクリプトはブロックされる」と断定できる一次情報も**見つからなかった**。検索でヒットする「Canvas は外部スクリプトをブロックする」系の記事は、**Instructure 社の Canvas LMS**（学習管理システム）の話であり、Gemini の Canvas とは別物。混同しないこと。
- Gemini の Canvas に **HTML ファイルとして直接ダウンロードするボタン**があるかどうか。公式ヘルプの書き出し一覧（ドキュメント／Colab／コピー／公開リンク）には無い。
- Canvas のプレビュー枠が iframe のサンドボックスでどう制限されているか（CSP の具体的な内容）。公開資料が見つからなかった。
- 「コード」タブ／「プレビュー」タブという**タブ名の正確な日本語表記**。公式ヘルプは［コード］としか書いていない。

### 手順書に書ける結論（①②③の操作手順の案）

**方針：グラフは AI に描かせない。「正確な数字のグラフ」と「見せる1枚」を分ける。**
ECharts を Canvas に読み込ませる道は、動く保証が取れなかったので**手順書には書かない**。

#### 道その1：正確な数字のグラフ（教員／Google）

```
① ブラウザの新しいタブを開きます。
② アドレス欄に sheets.new と入力して Enter を押します。
　→ 何も書かれていない新しいスプレッドシートが開けば、正しい画面です。
③ 表の左上（A1のマス）をクリックして、下の表を打ち込みます。1行目が見出しです。
④ 打ち込んだ範囲をドラッグして選びます。
⑤ 画面上の〈挿入〉を押して、〈グラフ〉を押します。
　→ 画面の右側に［グラフエディタ］が開き、［設定］と［カスタマイズ］の2つのタブが出ます。
　→ 表の横にグラフが出れば、正しい状態です。
⑥ ［設定］の〈グラフの種類〉を押して、棒グラフや折れ線グラフに変えます。
```

#### 道その2：正確な数字のグラフ（広報／Canva）

```
① Canva でデザインを開きます。
② 画面左の〈素材〉を押します。
③ 「グラフ」という並びを探して、その右にある〈全て表示〉を押します。
④ 使いたいグラフを押します。デザインの上にグラフが置かれます。
⑤ 置いたグラフを押します。
　→ 画面の左側にデータを入れる表が開けば、正しい状態です。
⑥ 表の「項目名」と「数値」を書き換えます。
　→ Excel の表がある場合は、左側の表の一番左上のマスを押してから、
　　 キーボードの Ctrl キーを押しながら V を押すと貼り付けられます。
```

#### 道その3：見せる1枚（教員／Gemini の Canvas）

```
① ブラウザの新しいタブを開きます。
② アドレス欄に gemini.google.com と入力して Enter を押します。
③ 画面下の文字を入れる欄の下にある〈Canvas〉を押します。
　→ 〈Canvas〉が押された状態（色が変わる）になれば、正しい状態です。
④ 下の文をコピーして、文字を入れる欄に貼り、Enter を押します。
　（データは文の中に文字で書きます。ファイルは付けません。）
⑤ 右側に文章が出たら、その右上の〈作成〉を押して、〈インフォグラフィック〉を押します。
　→ 画面によって〈作成〉が英語で Create と出ることがあります。同じものです。
⑥ 図ができたら、キーボードの Ctrl キーを押しながら P を押して、
　 送信先を〈PDF に保存〉にして保存します。
　→ うまく保存できないときは、画面のスクリーンショットを撮ってください。
```

※ ③〜⑥は共通ページの Gemini Notebook の［インフォグラフィック］と役割が重なる。**共通ページと重複させないなら、道その1・その2だけを各グループの手順書に載せ、見せる1枚は共通ページに任せる**のが安全。

---

## ② Workspace Studio のテスト実行

### 確認できた事実

**A. 提供エディション（Education Fundamentals を含む）**

- 公式ヘルプの対象エディション：Business Starter / Standard / Plus、Enterprise Standard / Plus、**Education Fundamentals / Education Standard / Education Plus**、Teaching and Learning アドオン、Google AI Pro for Education。
- ただし、**学校アカウントで18歳未満のユーザーは AI 機能を使えない**旨の注記がある（今回の受講者は教職員なので該当しない）。
  出典: https://support.google.com/workspace-studio/answer/16444479?hl=ja

**B. URL**

- `https://studio.workspace.google.com`
  出典: https://support.google.com/a/users/answer/16430397?hl=ja ／ https://support.google.com/workspace-studio/answer/16447677?hl=ja

**C. テスト実行（★保存前でもできる）**

- 公式ヘルプ（日本語）：準備ができたら画面の **［テスト実行］** を押す。**このボタンは、フローを保存する前にテストできる。**
- 押したあとの分岐：
  - **スケジュール実行のフロー** → **［起動］**（英語UIでは Start）を押す。＝**待たずにその場で1回動かせる。**
  - **手動開始のフロー** → プロンプトの窓に求められたデータを入れて **［実行］**（英語UIでは Run）を押す。
  - **その他の開始条件**（メール受信・メンション等） → 使う既存データが自動で入ることがある。確認して **［起動］** を押す。
- **★重要（そのまま手順書の注意書きにできる）：テスト実行は本物の動作をします。**メッセージを実際に送り、カレンダーの予定を実際に作り、ドキュメントを実際に書き換えます。**テスト用のドキュメントや自分宛てのメッセージで試すこと**が公式に推奨されている。
- 結果の見え方：実行に合わせてその場で結果が出る。Gemini の応答のようにその場に出るものと、Chat のメッセージのようにリンクのチップになって元アプリで開くものがある。
- 失敗の見分け：**赤い「テスト完了」＝設定の不足**（必須項目が空、連携が未接続など）。**黄色い「テストを完了できませんでした」＝データ側の問題**（セキュリティ上のリスク、入力が合わないなど）。
  出典: https://support.google.com/workspace-studio/answer/16663517?hl=ja ／ https://support.google.com/workspace-studio/answer/16663517?hl=en

**D. 有効化／無効化（オン・オフ）**

- テストがうまくいったら **［オンにする］** を押す。ボタンは**フローエディタの下部**にある。
  出典: https://support.google.com/a/users/answer/16430397?hl=ja ／ https://support.google.com/workspace-studio/answer/16444479?hl=ja
- 止めるとき：**フローの横の［その他］（三点メニュー）→［オフにする］**。実行中のものも直ちに停止し、あとからいつでもオンに戻せる。
  出典: https://support.google.com/workspace-studio/answer/16766368?hl=ja
- トラブル対応ページでも「［自分のフロー］→ フローを押す →［オンにする］」の順で案内されている。
  出典: https://support.google.com/workspace-studio/answer/16430806?hl=ja

**E. 実行履歴・ログ＝［アクティビティ］（★講師が見た「折れ線グラフのようなアイコン」の正体）**

- **全フローぶん**：左メニューの **［アクティビティ］** を押す。**完了／進行中／問題あり**でフィルタできる。一覧の更新、詳細の開閉、開始時刻の確認、エディタを開く、が可能。
- **1つのフローだけ**：フローの横の **［その他］→［アクティビティ］**、または**エディタでフローを開いて上部の［アクティビティ］**。
- フローの実行に問題が起きると、**［アクティビティ］タブに赤い点**が表示される。
  出典: https://support.google.com/workspace-studio/answer/16766368?hl=ja ／ https://support.google.com/workspace-studio/answer/16430806?hl=ja ／ https://support.google.com/chat/answer/16765741?hl=ja

**F. エディタ上部ツールバーの並び（講師の実機画面と一致）**

公式ヘルプの画面構成の説明では、フローエディタの**上部ツールバー**に次が並ぶ：

| 講師が見たもの | 公式ヘルプ上の名称 | 役割 |
|---|---|---|
| 折れ線グラフのようなアイコン | **アクティビティ** | 実行履歴・エラーの確認 |
| 共有アイコン | **共有**（「他のユーザーがコピーできるようにリンクを取得」） | 組織内にコピー可のリンクを配る |
| 三点メニュー | **コピーを作成／削除** | 複製・削除 |

- 共有の手順：上部の共有アイコン → 権限を「このリンクを知っている組織内のユーザーは誰でもコピーを作成できます」に変える →［リンクをコピー］。
- 削除の警告文：「削除すると、元に戻すことはできません」。
  出典: https://support.google.com/workspace-studio/answer/16447677?hl=ja ／ https://support.google.com/workspace-studio/answer/16766368?hl=ja

**G. 管理者側のログ**

- 管理コンソールに **Workspace Studio のログイベント**があり、フローの動作や、ループ・過剰実行の検知ルールを作れる。（受講者向け手順書には不要な情報）
  出典: https://knowledge.workspace.google.com/admin/reports/workspace-studio-log-events
- 管理者がフローを止める手順も別ページにある。
  出典: https://support.google.com/a/answer/16703602?hl=en

### 確認できなかったこと

- **日本語UIのボタン表記が確定できない。** 公式ヘルプの日本語ページ間で表記が揺れている：
  - ［テスト実行］（16663517・16444479・16430397）に対し、画面構成ページでは「**テスト実行してオンにする**」という一体のボタンとして訳されている（16447677）。
  - 有効化は［**オンにする**］（16444479・16430806・16430397）と［**有効にする**］（16430397 の別箇所）の両方が出てくる。
  - → **手順書では「〈テスト実行〉にあたるボタン」「〈オンにする〉にあたるボタン」と幅を持たせて書くこと。**
- ［テスト実行］が**画面の下部**なのか、講師が見たように**上部**にもあるのか。公式ヘルプは「フローエディタの下部」と書いているが、上部ツールバーの説明とは別ページなので、実機で確認が必要。
- 折れ線グラフ型アイコンにマウスを載せたときの**ツールチップの正確な文言**。
- **保存という概念があるか**（フローに明示的な「保存」ボタンがあるのか、自動保存なのか）。「保存前でもテストできる」という記述はあるが、保存ボタンの所在は書かれていない。
- **植草学園のテナントで Workspace Studio が管理者により有効化されているか。** エディションとしては Education Fundamentals が対象だが、管理コンソールでの ON/OFF は別問題。当日までに実機で開けるか確認が要る。

### 手順書に書ける結論（①②③の操作手順の案）

```
① ブラウザの新しいタブを開きます。
② アドレス欄に studio.workspace.google.com と入力して Enter を押します。
　→ 学園のアカウントでログインを求められたら、ログインしてください。
　→ 「おすすめ」という画面が出れば、正しい画面です。
③ フローを作り終えたら、画面の中の〈テスト実行〉にあたるボタンを押します。
　→ 画面によって 「テスト実行」 と表示されている場合と
　　 「テスト実行してオンにする」 と表示されている場合があります。どちらでも同じものです。
　→ このボタンは、フローを保存する前でも押せます。
④ 次に出てくる〈起動〉または〈実行〉にあたるボタンを押します。
　→ 決まった時刻に動かすフローのときは〈起動〉です。時刻を待たずに、その場で1回だけ動きます。
　→ 自分で始めるフローのときは、聞かれたことを入力してから〈実行〉です。
⑤ 画面に結果が出るのを待ちます。
　→ 「テスト完了」と出れば、うまくいっています。
　→ 赤い表示が出たときは、入力していない項目があります。ステップを開いて空欄を埋めてください。
　→ 黄色い表示が出たときは、入れたデータが合っていません。データを変えてやり直してください。
⑥ うまくいったら、〈オンにする〉にあたるボタンを押します。
　→ 画面によって 「オンにする」 と表示されている場合と 「有効にする」 と表示されている場合があります。
　　 どちらでも同じものです。
⑦ あとから動いたかどうかを見るときは、画面の〈アクティビティ〉を押します。
　→ 画面の左側のメニューにあります。フローを開いているときは、画面の上のほうにもあります。
　→ 折れ線グラフのような形のアイコンです。
　→ 実行の一覧が出れば、正しい画面です。うまくいかなかった実行には赤い点が付きます。
⑧ 止めたいときは、フローの横の〈その他〉（点が3つ並んだ印）を押して、〈オフにする〉を押します。
```

**★注意書き（必ず入れる）**

```
テスト実行は、練習ではなく本当に動きます。メールが実際に送られ、
カレンダーの予定が実際に作られ、ドキュメントが実際に書き換わります。
宛先は自分自身にし、書き換える文書は自分で作った練習用のものにしてください。
```

---

## ③ Canva のテンプレート

### 確認できた事実

**A. インフォグラフィックのテンプレートの探し方**

- トップページの検索窓に「**インフォグラフィック**」と入力すると、インフォグラフィックのテンプレートが表示される。リスト型・タイムライン型・チャート型などがある。
  出典: https://cloudserviceconcierge.com/blog/canva/056 ／ https://kohsukenemoto.com/digital-contents/canva-infographic/
- Canva 公式の日本語テンプレートページが存在する：
  - インフォグラフィック全般 https://www.canva.com/ja_jp/infographics/templates/
  - **教育向けインフォグラフィック** https://www.canva.com/ja_jp/infographics/templates/education/
- Canva 公式の使い方記事（日本語） https://www.canva.com/ja_jp/learn/how-to/ ／ https://www.canva.com/ja_jp/learn/about-infographics/

**B. 実際に結果が出る日本語の検索語（Canva公式の日本語テンプレートページが実在するもの）**

いずれも `https://www.canva.com/ja_jp/templates/s/<スラッグ>/` が実在する＝その語で結果が出る。

| 検索語 | 公式ページ | 備考 |
|---|---|---|
| インフォグラフィック | /ja_jp/infographics/templates/ | 5項目を縦に並べる型が多い |
| 報告会 | /ja_jp/templates/s/houkokukai/ | 13,739件超。やったこと・分かったことの型 |
| 掲示 | /ja_jp/templates/s/keiji/ | 1枚もの・貼り出す前提の型 |
| 学校 | /ja_jp/templates/s/school/ | |
| 学校紹介 | /ja_jp/templates/s/school-introduction/ | 大学広報のトーンに合う |
| オープンキャンパス | /ja_jp/templates/s/open-campus/ | |
| ポスター | /ja_jp/templates/s/poster/ | |
| 一覧 | /ja_jp/templates/s/ichiran/ | 997件超 |
| 事例 | /ja_jp/templates/s/jirei/ | |
| 学生 | /ja_jp/templates/s/gakusei/ | |
| 見学会 | /ja_jp/templates/s/kengakukai/ | |
| 展示会ポスター | /ja_jp/templates/s/tenjikai-poster/ | |

出典（存在確認）: https://www.canva.com/ja_jp/templates/s/houkokukai/ ／ https://www.canva.com/ja_jp/templates/s/keiji/ ／ https://www.canva.com/ja_jp/templates/s/school/ ／ https://www.canva.com/ja_jp/templates/s/school-introduction/ ／ https://www.canva.com/ja_jp/templates/s/open-campus/ ／ https://www.canva.com/ja_jp/templates/s/poster/ ／ https://www.canva.com/ja_jp/templates/s/ichiran/ ／ https://www.canva.com/ja_jp/templates/s/jirei/ ／ https://www.canva.com/ja_jp/templates/s/gakusei/ ／ https://www.canva.com/ja_jp/templates/s/kengakukai/ ／ https://www.canva.com/ja_jp/templates/s/tenjikai-poster/

**C. 無料と有料の見分け方**

- テンプレート・フォント・画像の**右下に王冠マーク**が付いているものが**有料**。
- 有料素材を含むテンプレートには **「¥」マーク**が付く場合がある（王冠と¥では有料素材の種類が異なる）。
- 有料素材には**編みかけの透かし**が入り、うすく「Canva」と表示される。**有料素材を含んだままデザインは続けられるが、ダウンロードできない。**
  出典: https://ameblo.jp/atelier-plume-net/entry-12691371815.html ／ https://manuals.ocl-dm.com/canva/post838/
- 検索結果を**無料だけに絞る**：検索窓の横のフィルターから「無料」を選ぶ。
  出典: https://canvas-college.com/onlyforfree/ ／ https://omoide.blog/archives/canva.html

**D. ダウンロード（1ページだけ）**

- 画面**右上の［共有］** →［**ダウンロード**］→ ファイルの種類（PNG／JPG／PDF）を選ぶ → 「すべてのページ」と出ているところを押して **［ページを選択］** で保存したいページだけにチェック → 右下の［ダウンロード］。
  出典: https://sugiha-style.com/canva%E3%81%A7%E8%A4%87%E6%95%B0%E3%83%9A%E3%83%BC%E3%82%B8%E4%BD%9C%E6%88%90%E3%81%AE%E4%B8%AD%E3%81%AE%EF%BC%91p%E3%81%AE%E3%81%BF%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E3%81%99/ ／ https://assist-all.co.jp/column/dxtools/20250303-3981/

**E. 無料版の制約**

- **［マジックリサイズ］は Pro 限定**。無料版では「複製して作り直す」考え方で対応する。
  出典: https://asset-inc.jp/newcurrent/canva-size-change-guide/ ／ https://canvas-college.com/resize/
- Canva Pro の機能一覧（公式） https://www.canva.com/ja_jp/learn/canva-pro-18features/

**F. Canva for Education は今回の8名の対象外の可能性が高い（★要確認）**

- Canva for Education（Pro 相当が無料）は **幼稚園〜高校3年（K-12）の教員・生徒**が対象。**高等教育は Canva Campus という別の枠組み**とされている。
- したがって**大学・短期大学の広報職員は Canva for Education の対象外の可能性が高い**。附属高校・附属こども園の教員は対象になり得る。
  出典: https://www.canva.com/help/about-canva-for-education/ ／ https://www.canva.com/education/ ／ https://asset-inc.jp/newcurrent/canva-for-education-teacher-guide-tips-and-free-use/

### 確認できなかったこと

- **Canva の検索窓の正確な文言。** 「何をデザインしますか？」という記述は第三者記事由来で、公式画面では確認できなかった。［デザインを作成］というボタン名も同様に確認できていない。
  → 手順書では「画面の上のほうにある検索の欄」「〈デザインを作成〉にあたるボタン」と幅を持たせる。
- **無料フィルタの正確なラベル。** 「フィルター」「すべてのフィルター」「無料」いずれも第三者記事由来で、公式表記を確認できなかった。
- **［ページを削除］［ページを複製］の正確なメニュー名**（プレゼンテーションから1枚ものを作るときに使う）。第三者記事は「ページをコピーできる」としか書いていない。
  → 手順書では「使わないページを消します」と操作の目的だけ書き、メニュー名は断定しない。
- Canva の公式ページ（canva.com）は自動取得をブロックしており、**UI ラベルの一次確認ができなかった**。上記の日本語テンプレートページは URL とタイトルの存在までは確認できたが、ページ内文言までは読めていない。
- **植草学園の広報職員8名がどのプラン（無料／Pro／Teams）を使っているか。** FACTS.md には「有料プラン限定の機能が多く、月間の使用回数に上限がある」とあるので、**無料プラン前提で書くのが安全**。

### 手順書に書ける結論（①②③の操作手順の案）

#### ★おすすめの検索語 3つ（5項目を流し込みやすい順）

| 順位 | 検索語 | 理由 |
|---|---|---|
| 1 | **インフォグラフィック** | 見出し＋短文の枠が縦に並ぶ型が多く、5項目をそのまま置き換えられる |
| 2 | **報告会** | 「やったこと」「分かったこと」を並べる型。件数が非常に多く、必ず何か見つかる |
| 3 | **掲示** | もともと1枚で貼り出す前提の型。文字が大きく、写真を1枚入れる余白がある |

（見つからないときの予備：「学校紹介」「ポスター」「一覧」）

#### 手順の案（テンプレートを探して1枚に仕上げる）

```
① ブラウザの新しいタブを開きます。
② アドレス欄に canva.com と入力して Enter を押します。
　→ 学園のアカウントでログインしてください。
③ 画面の上のほうにある検索の欄に、次のどれかを入力して Enter を押します。
　 インフォグラフィック ／ 報告会 ／ 掲示
　→ テンプレートが並んだ画面が出れば、正しい画面です。
④ 右下に王冠のマークが付いていないものを選んで押します。
　→ 王冠のマークが付いているものは有料です。無料のものだけを見たいときは、
　　 検索の欄の近くにある〈フィルター〉にあたるボタンから「無料」を選んでください。
⑤ テンプレートが開いたら、文字の部分を押して、次の5つに書き換えます。
　 班名 ／ 選んだ題材 ／ 使った道具 ／ 作ったもの ／ 分かったこと
⑥ 使わないページがあるときは、そのページを消します。1ページだけ残します。
⑦ 画面右上の〈共有〉を押して、〈ダウンロード〉を押します。
⑧ ファイルの種類を PNG にして、〈ダウンロード〉を押します。
　→ ページがいくつかあるときは、「すべてのページ」と出ているところを押して、
　　 残した1ページだけにチェックを入れてください。
```

#### プレゼンテーションのテンプレートから1枚ものを作る場合

```
① 検索の欄に「プレゼンテーション」と入力して Enter を押します。
② 使いたいテンプレートを押して開きます。
③ 5つの項目を書き込むページを1枚だけ選び、それ以外のページを消します。
④ 画面右上の〈共有〉→〈ダウンロード〉→ ファイルの種類を PNG にします。
⑤ 「すべてのページ」と出ているところを押して、残した1ページだけにチェックを入れます。
⑥ 〈ダウンロード〉を押します。
```

**★注意書き（有料素材でつまずく人が出るので入れる）**

```
ダウンロードのときに、お金の支払いを求める画面が出ることがあります。
そのときは、有料の素材（右下に王冠のマークが付いているもの）がデザインの中に残っています。
その素材を押して消すか、王冠のマークが付いていない別のテンプレートを選び直してください。
```

---

## 補足：混同に注意（調査中に頻出した誤情報）

- 「Canvas は外部スクリプトをブロックする」「Canvas の CSP が厳しい」と書かれた記事の多くは、**Instructure 社の Canvas LMS**（学習管理システム）の話。**Gemini の Canvas とは無関係**。
- 「サンドボックスは既定で外部ネットワークに出られない」という記述は、**Gemini Enterprise Agent Platform の Managed Agents**（開発者向けクラウド製品）の仕様。**Gemini アプリの Canvas とは別物**。
