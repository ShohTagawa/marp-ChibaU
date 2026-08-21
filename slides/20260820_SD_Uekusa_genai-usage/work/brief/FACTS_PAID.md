# FACTS_PAID — 有償ライセンス／AI関数まわりの一次情報（調査日 2026-08-20）

対象：Word・PowerPoint・Excel の「中」の Copilot ／ Excel `=COPILOT()` 関数 ／ Google スプレッドシート `=AI()` 関数。
※ 学園の前提（Microsoft 365 Copilot の有償ライセンス契約が無い／Google は Education Fundamentals・Gemini有償アドオン無し）は `brief/FACTS.md` のとおり。ここはその**例外の方だけ**のための資料。

---

## 1. 確認できた事実（出典URL付き）

### 1-1. Word・PowerPoint・Excel の中の Copilot ─ 必要なライセンス

| 項目 | 確認できた記述 | 出典 |
|---|---|---|
| Word | 「対象となる Microsoft 365 サブスクリプションまたは Microsoft 365 Copilot ライセンス」が必要 | [Word の Copilot へようこそ](https://support.microsoft.com/ja-jp/office/word-%E3%81%AE-copilot-%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D-2135e85f-a467-463b-b2f0-c51a46d625d1) |
| Word（自動の概要） | 「Microsoft 365 Copilot (作業) ライセンスがあり、ドキュメントが OneDrive または SharePoint に保存されている場合」に、文書の上部に概要が出る | [Word の Copilot を使用してドキュメントの要約を作成する](https://support.microsoft.com/ja-JP/Word/copilot/create-a-summary-of-your-document-with-copilot-in-word) |
| PowerPoint / Excel | 「Copilot が表示されない場合は、Microsoft 365 サブスクリプションに含まれていないか、組織の設定に基づいて利用できない可能性があります」 | [Excel の Copilot の使用を開始する](https://support.microsoft.com/ja-jp/office/excel-%E3%81%AE-copilot-%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%99%E3%82%8B-d7110502-0334-4b4f-a175-a73abdfc118a) |
| 動的アクション ボタン | 「Microsoft 365 Personal、Family、Premium サブスクリプション、または Microsoft 365 Copilot ライセンスを通じて」利用できる | [Word、Excel、PowerPoint の Copilot 動的アクション ボタン](https://support.microsoft.com/ja-jp/office/foundations-experiences/copilot-dab/the-copilot-dynamic-action-button-in-word-excel-and-powerpoint) |

→ **ライセンスが無ければアプリ内に Copilot のアイコンが出ないのが正常。**「ボタンが見つからない＝壊れている」ではない。

### 1-2. ボタンの位置 ─ ★いま2通りあり、移行中

公式ページの記述が2系統に分かれている。**どちらも公式**なので、両方を書く必要がある。

**(a) 隅に固定されたアイコン（新しい方）**

- 「ドキュメントの隅に固定された **Copilot 動的アクション ボタン**」
- 「動的アクション ボタンは、Word、Excel、PowerPoint、Windows、Mac、Web で**一貫した隅**に表示されます」
- 押すと「右側のチャット ウィンドウで Word、Excel、または PowerPoint エージェントが開きます」
- 右クリックのメニューに「ドック」「**リボンに移動**」「ようこそを表示」がある
- 出典：[Copilot 動的アクション ボタン](https://support.microsoft.com/ja-jp/office/foundations-experiences/copilot-dab/the-copilot-dynamic-action-button-in-word-excel-and-powerpoint)

個別ページの表記：
- Excel：「Excel の**右下隅**にある Copilot アイコンを選択します」（[Excel の Copilot の使用を開始する](https://support.microsoft.com/ja-jp/office/excel-%E3%81%AE-copilot-%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%99%E3%82%8B-d7110502-0334-4b4f-a175-a73abdfc118a)）
- PowerPoint：「スライドの**右下隅**にある〔Copilot〕アイコンを選択します」（[PowerPoint の Copilot を使用して新しいプレゼンテーションを作成する](https://support.microsoft.com/ja-jp/office/powerpoint-%E3%81%A7-microsoft-365-%E7%94%A8-copilot-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B-3222ee03-f5a4-4d27-8642-9c387ab4854d)）
- Word：「ドキュメントの隅にある〔Copilot 動的アクション〕ボタン」（[Word の Copilot へようこそ](https://support.microsoft.com/ja-jp/office/word-%E3%81%AE-copilot-%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D-2135e85f-a467-463b-b2f0-c51a46d625d1)）

**(b) リボンの中（従来の方）**

- PowerPoint の要約ページは「**リボンから〔Copilot〕ボタンを選択します**」「画面の右側に〔Copilot〕ウィンドウが開きます」と書いている（[PowerPoint の Copilot を使用してプレゼンテーションを要約する](https://support.microsoft.com/ja-jp/powerpoint/copilot/summarize-your-presentation-with-copilot-in-powerpoint)）
- 動的アクション ボタンの右クリックに「リボンに移動」があるので、**利用者がリボン側に戻せる**

→ **結論：手順書では「リボンの〔ホーム〕タブの右のほう、または文書・スライドの右下隅にある〈Copilot〉にあたるボタン」と両方書く。**

### 1-3. Word で文書を分析させる導線

- 公式ページに「要約」という名前の専用ボタンは書かれていない。**Copilot のチャット ウィンドウに指示を打ち込む**形。
- ライセンスがあり、かつ **OneDrive または SharePoint に保存されている**文書なら、開いたときにページ上部に概要が自動で出る。そこから「**詳細の表示**」を押すと全体が読める。
- 自動の概要が出るには「参照コンテンツに**少なくとも 200 語**が必要」。
- 出典：[Word の Copilot を使用してドキュメントの要約を作成する](https://support.microsoft.com/ja-JP/Word/copilot/create-a-summary-of-your-document-with-copilot-in-word)

### 1-4. PowerPoint でスライドを作らせる／要約させる導線

**作らせる**（日本語公式ページの手順、逐語）

1. PowerPoint で新しいプレゼンテーションを開始する
2. スライドの右下隅の Copilot アイコンを選ぶ
3. チャット ウィンドウ内の「**コンテンツの追加**」を選ぶ
4. 出てきたメニューから「**エージェント モード**」を選ぶ
5. 作りたい内容のプロンプトを入れて送信する
6. Copilot からの確認の質問に答える（飛ばしてもよい）
7. Copilot がアウトラインを作る → チャットで直す
8. スライドの生成を指示する

- 「**24 MB 未満の Word ドキュメント**で最適に動作」
- ファイルから作る場合は「表示されるピッカーからドキュメントを選択」。ファイルは **OneDrive / SharePoint** 上にある必要がある。
- 出典：[PowerPoint の Copilot を使用して新しいプレゼンテーションを作成する](https://support.microsoft.com/ja-jp/office/powerpoint-%E3%81%AE-copilot-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B-3222ee03-f5a4-4d27-8642-9c387ab4854d)

**要約させる**

- リボンの〔Copilot〕ボタン → 右側のウィンドウに指示を打つ
- 公式に載っている指示は英語のみ：「Summarize this presentation」「Show key slides」「Show action items」
- 「現在、**最大約 40,000 語**のプレゼンテーションを要約できます」
- 出典：[PowerPoint の Copilot を使用してプレゼンテーションを要約する](https://support.microsoft.com/ja-jp/powerpoint/copilot/summarize-your-presentation-with-copilot-in-powerpoint)

### 1-5. Excel の中の Copilot でできること（公式の一覧）

ワークシートの編集（追加・名前の変更・削除）／データと数式の生成／グラフ・ピボットテーブル・図形の作成／データ分析情報の特定／データの強調表示・並べ替え・フィルター処理／Web 検索／他のブックからのデータのインポート／繰り返しの作業の実行。
出典：[Excel の Copilot の使用を開始する](https://support.microsoft.com/ja-jp/office/excel-%E3%81%AE-copilot-%E3%81%AE%E4%BD%BF%E7%94%A8%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%99%E3%82%8B-d7110502-0334-4b4f-a175-a73abdfc118a)

---

### 1-6. ★ Excel の `=COPILOT()` 関数

出典：[COPILOT 関数（英語）](https://support.microsoft.com/en-us/excel/functions/copilot-function) ／ [COPILOT 関数（日本語）](https://support.microsoft.com/ja-jp/excel/functions/copilot-function)

**書式（確定）**

```
=COPILOT(prompt_part1, [context1], [prompt_part2], [context2], ...)
```

- `prompt_part`：**必須**。「AI モデルのタスクまたは質問を説明するテキスト」
- `context`：**省略可**。「AI モデルのコンテキストまたはデータを提供するグリッドからの参照。これは、**1 つのセルまたは範囲**を指定できます」
- **指示 → 範囲 → 指示 → 範囲 … と交互に何組でも並べられる**（下の3つ目の例がその形）

**公式の例**

```
=COPILOT("このフィードバックを要約してください", A2:A20)
=COPILOT("Classify sentiment", B2:B100)
=COPILOT("Classify", B1:B10, "into one of the following categories ", A1:A4)
```

**必要なライセンス（逐語）**

- 「職場または学校アカウントのユーザー: **Microsoft 365 Copilot アドオン ライセンス**が必要です」
- 「個人ユーザー: **Microsoft 365 Premium サブスクライバーのみ**が利用可能」

**対応するバージョン**

Excel for Microsoft 365／Excel for Microsoft 365 for Mac／Excel Web App／Excel for iPhone。
かつ「この関数は現在、**Frontier プログラム**と **Microsoft 365 Insider プログラム**で利用できます」＝**一般提供ではない。**

**★★ 提供終了（英語版ページのみに記載。日本語版は 2026-08-20 時点で未反映）**

> "Starting September 14, 2026, the COPILOT function will no longer be available. Copilot in Excel is generally available and supports many of the same AI-powered tasks."

＝ **2026年9月14日から使えなくなる。**研修日（2026年8月20日）時点ではまだ生きているが、手順書には一言入れておくべき。

**制限（英語版ページ）**

- インターネット接続が必要（モデルは Azure 上）
- **context で渡したデータしか見えない。**ブックの他のデータや企業データにはアクセスしない
- **10 分あたり 100 計算まで**
- 「社外秘」「機密性が高い」と分類されたブックでは計算できない
- 現在のモデルは gpt-4.1-mini (2025-04-14)
- **同じ引数でも結果が変わりうる。**固定したいときは値に変換する（選択 → Ctrl+C → **Ctrl+Shift+V**）
- 「Your prompts and data supplied as context will not be used to train AI models.」（入力と context のデータは学習に使われない）

---

### 1-7. ★ Google スプレッドシートの `=AI()` 関数

出典：[スプレッドシートで AI 関数を使用する](https://support.google.com/docs/answer/15877199?hl=ja) ／ [同（Workspace Experiments）](https://support.google.com/docs/answer/15820999?hl=ja)

**書式（確定）**

```
=AI("プロンプト", [範囲（省略可）])
```

- 第1引数が**指示のテキスト**、第2引数が**その指示が参照する範囲**（省略可）。COPILOT と引数の順番は同じ考え方だが、**範囲は1つだけ**（交互に並べる形は公式に書かれていない）
- **`=AI()` と `=Gemini()` のどちらでも使える**（公式ヘルプに「=AI() または =Gemini() のいずれかを使用できます」と明記）
- 範囲は単一セルでも複数セル（例 `A2:G2`）でも渡せる

**公式の例**

```
=AI("Generate slogan for event in 10 words or less", A2)
=AI("For the customer, write a one sentence summary of their feedback.", A2:D2)
=AI("Classify the sentiment of the realtor analysis.", D2)
=AI("カザフスタンの現在の首都はどこ？", A2)
```

**★ 対象となるプラン（逐語・Google Workspace Updates の Availability 節）**

出典：[The AI function in Google Sheets is now enhanced with Google Search results](https://workspaceupdates.googleblog.com/2025/10/enhanced-ai-function-sheets-google-search.html)

> Available for Google Workspace:
> - Business Standard and Plus
> - Enterprise Standard and Plus
> - Google AI Ultra for Education
>
> Also available to:
> - Google AI Pro and Ultra
>
> Anyone who previously purchased these add-ons will also receive this feature:
> - Gemini Business
> - Gemini Enterprise

**→ Education Fundamentals は列挙されていない。**（＝学園のアカウントでは使えない。前回調査の結論は正しかった。再確認済み）

**Education 系への展開状況（2026年2月）**

出典：[Select Gemini in Workspace capabilities now available to Education Plus and Teaching & Learning customers](https://workspaceupdates.googleblog.com/2026/02/gemini-in-workspace-education.html)

- Education Plus / Teaching and Learning アドオン（18歳以上）に開放されたのは **Docs・Slides・Forms・Vids** の Gemini 機能
- **Sheets は「in the coming months, we'll also make some Gemini in Sheets features available to the Education Plus plan」＝まだ来ていない**
- **Education Fundamentals はどこにも挙がっていない**

---

## 2. 確認できなかったこと（★断定しない）

| 項目 | 状況 | 手順書での扱い |
|---|---|---|
| Word の日本語UIに「要約」「下書きを作成」という**名前の専用ボタン**があるか | 公式ページはチャットに指示を打つ形しか書いていない。旧UIの「Copilot を使って下書き」は公式サポートページで逐語確認できず（解説サイトのみ） | ボタン名を断定せず、**チャット欄に指示を貼る形**で書く |
| PowerPoint の「**ファイルからプレゼンテーションを作成**」の正確な日本語メニュー表記 | 検索結果には出るが、公式ページ本文からは逐語で取れなかった。最新の日本語ページは「コンテンツの追加」→「エージェント モード」の手順に置き換わっている | `〈ファイルから作る〉にあたる項目` の形で書き、確認できた「コンテンツの追加」だけ具体名で書く |
| リボンの Copilot ボタンが〔ホーム〕タブのどこにあるか | 「リボンから〔Copilot〕ボタンを選択します」までしか公式に書かれていない。タブ名の逐語確認は取れず | `リボンの〔ホーム〕タブの右のほう、または右下隅` と両方書き、`〈Copilot〉にあたるボタン` の形にする |
| Copilot Chat (Basic) で Office アプリ内の機能が一部使えるか | 未確認。`FACTS.md` の前提（**使えない**）をそのまま採用 | 「学園の標準では使えません」と書く |
| `=COPILOT()` の 2026年9月14日以降の代替 | 「Copilot in Excel is generally available and supports many of the same AI-powered tasks」としか書かれていない | 「終了後は Excel の中の Copilot のチャットで同じことを頼みます」程度にとどめる |
| `=AI()` を Education Fundamentals で**個人の** Google AI Pro / Ultra 契約から使えるか | 対象一覧に「Google AI Pro and Ultra」はあるが、**学園アカウントに個人契約を適用できるか**は確認できず | 「ご自分の別アカウントで Google AI Pro／Ultra をお使いの場合」という条件で書く |

---

## 3. 手順書に書ける結論

### G のシナリオA（Word / PowerPoint の中の Copilot）

- 冒頭で切り分ける：**学園の標準では使えない。ライセンスが無いとアイコンが出ないのが正常。**見つからなければ飛ばす。
- ボタンは断定しない。`リボンの〔ホーム〕タブの右のほう、または文書・スライドの**右下隅**にある〈Copilot〉にあたるボタン` と、**2か所とも**書く。
- Word は**チャット欄に指示を貼る**形で書く。「文書の上部に概要が出ていたら〈詳細の表示〉を押す」を逃げ道として添える（OneDrive / SharePoint 保存＋200語以上のときだけ出る、と条件も書く）。
- PowerPoint は確認できた手順（Copilot アイコン →「コンテンツの追加」→「エージェント モード」→ プロンプト → アウトライン → スライド生成）で書く。ファイルから作る場合は **OneDrive / SharePoint 上の Word 文書**が要ること、**24MB 未満**が目安であることを添える。
- 要約は「このプレゼンテーションを要約してください」を日本語で貼る形で書き、公式の英語（Summarize this presentation ほか）は書かない。約40,000語までという上限だけ書く。

### G のシナリオB（Excel の `=COPILOT()`）

- 冒頭で切り分ける：**Microsoft 365 Copilot アドオン ライセンス**（職場・学校）または **Microsoft 365 Premium**（個人）が要る。さらに **Frontier / Microsoft 365 Insider** に入っていないと出ない。
- **2026年9月14日から使えなくなる**ことを1行入れる。
- 使えない方は、**既存のシナリオ（AIに数式を書かせて自分で貼る）へ誘導**する。G には数式のシナリオが無いので、**H のシナリオ3**へ案内する。
- 書式は確定しているので具体名で書ける：`=COPILOT("指示", 範囲)`。範囲は1セルでも範囲でも渡せる。指示と範囲を交互に並べられる。
- 「結果が変わりうるので、値に変換して固定する（Ctrl+C → Ctrl+Shift+V）」を必ず入れる。
- 「10分あたり100計算まで」「context に渡した範囲しか見えない」も入れる。
- 個人情報を含む範囲は渡さない、を明記する。

### H の追加シナリオ（表計算のAI関数）

- **Excel `=COPILOT()`** と **Google スプレッドシート `=AI()`** を**道具別に分けて**書く（H は Copilot 組と Gemini 組が混在）。
- Google 側は断定できる：**学園の Google アカウント（Education Fundamentals）では `=AI()` は使えない。**対象は Business Standard/Plus、Enterprise Standard/Plus、Google AI Ultra for Education、Google AI Pro / Ultra。
- 使える可能性があるのは「**ご自分の別のアカウント**で Google AI Pro／Ultra、または対象の Workspace をお使いの方」だけ。
- 書式は `=AI("指示", 範囲)`。`=Gemini(...)` でも同じ。
- 使えない方は **H の既存シナリオ3（数式を書かせて自分で貼る）へ誘導**する。★H の主線はシナリオ3のまま。この追加で主線を変えない。
