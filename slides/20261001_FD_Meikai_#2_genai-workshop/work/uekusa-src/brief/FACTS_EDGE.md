# Microsoft Edge サイドバーの Copilot — 一次情報による検証

検証日：2026年8月20日。すべて Microsoft の公式ドキュメント（learn.microsoft.com / support.microsoft.com）に当たった。

---

## 確認できた事実（出典URL付き）

### 1. 職場アカウントでサインインすれば、エンタープライズ データ保護が適用される（★白）

Edge のサイドバーで動く Copilot は、**Microsoft 365 Copilot Chat そのもの**。学園の M365 アカウント（Microsoft Entra アカウント）でサインインしていれば、エンタープライズ データ保護（EDP）が適用される。

> 「Microsoft 365 Copilot チャットには、Microsoft Edge サイドバーからアクセスできます。**Microsoft Entra アカウントでサインインしたユーザーは、エンタープライズ データ保護を受け取ります。**」
> — https://learn.microsoft.com/ja-jp/copilot/edge （英語版：https://learn.microsoft.com/en-us/copilot/edge ）

> "Microsoft 365 Copilot Chat can be accessed in the Microsoft Edge sidebar. **Users signed in with a Microsoft Entra account receive enterprise data protection.**"

使う条件も、同じページに明記されている。

> 「1. ユーザーは、Microsoft Entra アカウント (職場または学校アカウント) を使用して Microsoft Edge にサインインする必要があります。
> 2. ユーザーは、Edge ブラウザーの右上にある Copilot アイコン (Ctrl + Shift + ) をクリックして、Copilot チャットにアクセスできます。」
> — https://learn.microsoft.com/ja-jp/copilot/edge

Microsoft は「職場・教育向け Copilot」の入口の一覧に **Copilot Chat in Edge** を明示的に挙げている。

> "Entry points for users signed in with a Microsoft Entra account: … **Copilot Chat in Edge** …"
> — https://learn.microsoft.com/en-us/copilot/manage

---

### 2. 画面のどこで保護が効いていると分かるか（★白＝盾のアイコン）

> 「**サイドバーの Copilot チャット エクスペリエンスの上部にあるシールド アイコン**は、Edge での Copilot チャットがエンタープライズ データ保護を提供することを確認します。」
> — https://learn.microsoft.com/ja-jp/copilot/edge

> "**A shield icon at the top of the Copilot Chat experience in the sidebar** confirms that Copilot Chat in Edge offers enterprise data protection."
> — https://learn.microsoft.com/en-us/copilot/edge

Copilot Chat の UI 全般については、盾が**緑**であること・**［新しいチャット］ボタンの隣**にあることまで書かれている。

> "Copilot Chat makes it clear that enterprise data protection is applied by featuring **a green shield along the top of the user interface next to the New Chat button**."
> — https://learn.microsoft.com/en-us/copilot/privacy-and-protections

> "Users know they're protected by **the green shield in the top right of the UI**."
> — https://learn.microsoft.com/en-us/copilot/overview

★ つまり「盾のアイコンを探す」は一次情報に裏打ちされた確認方法。**手順書に書いてよい。**

---

### 3. 有償の Microsoft 365 Copilot ライセンスが無くても適用される（★白）

> "**Using Copilot Chat doesn't require a Microsoft 365 Copilot license.**"
> — https://learn.microsoft.com/en-us/copilot/overview

> "**EDP is available in Copilot Chat at no extra cost.**"
> — https://learn.microsoft.com/en-us/copilot/privacy-and-protections

対象ライセンスも列挙されている（教育機関向けが含まれる）。

> "Copilot Chat is available at no extra cost for Microsoft Entra account users with one of the following licenses:
> - **Microsoft 365 A1/A3/A5** (including MA3/MA5 for students, MA3/MA5 for faculty, and MA3/MA5 student-use benefit)
> - Microsoft 365 Business Basic, Business Standard, or Business Premium
> - Microsoft 365 E3 or E5 … **Office 365 A1, A1 Plus, A3, or A5** …"
> — https://learn.microsoft.com/en-us/copilot/manage

また、講師が実機で見ている左下の **「Copilot Chat (Basic)」** という表示の意味も、公式に定義されている。

> "**Copilot Chat (Basic)** indicates that a user does not have the Microsoft Copilot add-on license and does not have access to Copilot chat in Word, Excel, PowerPoint and OneNote."
> — https://learn.microsoft.com/en-us/copilot/overview

★ (Basic) 表示は「有償アドオン無し」の状態を指すが、**EDP はその状態でも適用される**。FACTS.md の「教育ツールは有償ライセンス不要」とも矛盾しない。

---

### 4. 開いているWebページを読ませる機能（ページの要約）と、保護の範囲（★白）

**(a) ユーザーの許可が必要**

> 「**ユーザーがページ情報を共有するアクセス許可を付与すると**、Microsoft Edge は、特定のセッションの閲覧コンテキスト、ユーザーのプロンプト、および以前の会話履歴を Copilot チャットに送信します。」
> — https://learn.microsoft.com/ja-jp/copilot/edge

サポート記事にも、同意ダイアログが出ることが書かれている。

> 「organization が Copilot をオンにしている場合は、Copilot がページ コンテンツにアクセスできるようにする**同意ダイアログが表示される場合があります**」
> — https://support.microsoft.com/ja-jp/microsoft-copilot/using-microsoft-copilot-in-edge-at-work

**(b) プロンプトと応答は EDP の対象**

> 「エンタープライズ データ保護は、ユーザーが Microsoft Entra アカウントでサインインしたときに **Copilot チャットのプロンプトと応答に適用されます**。」
> — https://learn.microsoft.com/ja-jp/copilot/edge

**(c) ページの中身も EDP のもとで扱われる**

> 「ページ コンテキストを使用して応答を生成する場合、**要約されたコンテンツ (完全な Web ページではない) が保持され、エンタープライズ データ保護の下で処理される**場合があります。」
> — https://learn.microsoft.com/ja-jp/copilot/edge

**(d) ページの中身が Bing（外部）に送られるかどうか → 送られない**

Bing への Web 検索クエリは EDP とは別の扱い（Microsoft が独立したデータ管理者になる）だが、**そこにページの中身そのものは含まれない**と明記されている。

> "The following information is **not included** in the generated query sent to the Bing search service:
> - Any user or tenant identifiers …
> - The user's entire prompt, unless the prompt is very short …
> - Entire files uploaded into Copilot Chat …
> - **Entire web pages or PDFs summarized by Copilot Chat in Edge**"
> — https://learn.microsoft.com/en-us/copilot/privacy-and-protections

同ページの例示表でも、Edge でページの要約を頼んだ場合は Bing クエリが**発生しない**と説明されている。

> "*User has navigated to a public news article on the web about clean energy and uses Copilot Chat in Edge to ask for a summary.* … Generated search queries: **None**. To generate a page summary, Copilot Chat can infer all needed information from the text on the page itself. No generated search query is necessary. **After the chat session ends, any information from the web page is no longer retained by Copilot Chat.**"
> — https://learn.microsoft.com/en-us/copilot/privacy-and-protections

**(e) DLP で守られたページは、そもそも読めない**

> "Copilot can't access page content on pages protected by data loss prevention (DLP) policies, even if this policy is enabled."
> — https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/edgeentracopilotpagecontext

**(f) 学内（イントラ）のページも読ませられる**

> "When using Copilot Chat in Edge if the 'Allow access to any webpage or PDF' setting is enabled by the user or admin and an intranet page is open in the browser. In this scenario, Copilot Chat can use the content of this page to help answer questions."
> — https://learn.microsoft.com/en-us/copilot/privacy-and-protections

★ 結論：**ページの要約は保護の対象**。ページの中身が「学習に使われる」「外部に丸ごと送られる」という扱いにはならない。

---

### 5. 個人の Microsoft アカウントとの違い（★白＝別物）

Microsoft は、職場・教育用と個人用を**別製品・別の入口**として明確に分けている。

> "- **Microsoft Copilot Chat** (grounded in the web) and **Microsoft Copilot** (grounded in the web and work data) **are for work and education.** Entry points for users signed in with a Microsoft Entra account: … Copilot Chat in Edge …
> - **Microsoft Copilot is for personal use.** Entry points for users signed in with a personal account (MSA): Microsoft Copilot app …, copilot.microsoft.com, bing.com/chat …"
> — https://learn.microsoft.com/en-us/copilot/manage

Edge の管理ポリシーの説明でも、個人 MSA の場合は「Microsoft Copilot（個人用）」として別扱いになっている。

> "To allow or block Copilot Chat in Edge from using browsing context when users are signed in with **their personal MSA Bing account** while in the Edge work profile, use the *CopilotPageContext* policy. This policy prevents **Microsoft Copilot (personal use)** from using webpage or PDF content when it formulates responses to prompts."
> — https://learn.microsoft.com/en-us/copilot/manage

EDP の適用条件も「Entra アカウントでサインインしたとき」と限定されている（前掲 4-(b)）。

★ 結論：**個人アカウントのままだと、エンタープライズ データ保護の対象にならない。** アカウントの確認を手順の最初に置くことには、一次情報上の根拠がある。

---

### 6. 管理者の設定で無効にできる（★白）

| ポリシー | できること |
|---|---|
| `HubsSidebarEnabled` | 「To **disable Copilot Chat in Edge entirely**, use the *HubsSidebarEnabled* policy.」 |
| `EdgeEntraCopilotPageContext` | 「To allow or **block Copilot Chat in Edge from using browsing context**」＝ページの中身を読ませない設定 |
| `EdgeMicrosoft365CopilotChatIconEnabled` | 「control which sidebar apps, including Copilot Chat, are blocked」 |

— https://learn.microsoft.com/en-us/copilot/manage

`EdgeEntraCopilotPageContext` の既定値も明記されている。

> "If you don't configure this policy:
> - **Access is enabled by default in non-EU regions.**
> - Access is disabled by default in EU regions.
> - **Users can turn this setting on or off in Microsoft Edge settings.**"
> — https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/edgeentracopilotpagecontext

★ 日本は non-EU なので、**管理者が止めていなければ既定で有効**。

ユーザー側の設定場所も公式に書かれている。

> "Users can modify this permission by going to **Microsoft Edge > Settings > Appearance > Copilot and Sidebar > Copilot** and then turning on or off the toggles for *Show Copilot button on the toolbar* and *Allow Microsoft to access page content*."
> — https://learn.microsoft.com/en-us/copilot/manage

アイコンが出ないときの確認先（日本語UIの表記）：

> 「Microsoft Edge を開き、`edge://settings/appearance/copilotAndSidebar` に移動します。… **ツール バーの [Copilot の表示] ボタン**のトグルがオンになっていることを確認します。」
> — https://learn.microsoft.com/ja-jp/troubleshoot/microsoft-edge/experience/copilot-icon-missing-sidebar

---

### 7. ★書いてはいけないこと：「Browse with Copilot」は有償ライセンスが要る

Copilot が**自分でサイトを渡り歩いて操作する**機能（Browse with Copilot／エージェント的ブラウジング）は、サイドバーで開いているページについて聞くのとは**別の機能**で、有償ライセンスが必要。

> "**Browsing with Copilot is only available to users with a Microsoft 365 Copilot license.**"
> "**NOTE:** This feature is currently in preview."
> — https://learn.microsoft.com/en-us/deployedge/microsoft-edge-management-browsing-with-copilot

★ 手順書では、この機能に触れない。「開いているページについて聞く」だけにとどめる。

---

## 確認できなかったこと

1. **Edge のサイドバーに出る日本語の文言そのもの。**
   FACTS.md にある「このチャットには エンタープライズ データ保護 が適用されます」は、講師が **m365.cloud.microsoft のチャット画面**で確認したもの。**Edge のサイドバーで同じ文言が出るかは、実機で未確認。**
   一次情報で確実なのは「**上部にシールド（盾）のアイコンが出る**」まで。
   → 手順書では、盾のアイコンを主にし、文言のほうは「〜という趣旨の表示」と逃がして書く。

2. **「保護されています（Protected）」というバッジが、プロフィールアイコンの横に出るかどうか。**
   検索結果の要約にはこの表現が現れたが、**Microsoft の公式ページ本文からは取得できなかった**（古いUIの記述である可能性がある）。**断定しない。**

3. **植草学園のテナントで、Edge のサイドバーの Copilot が実際に有効かどうか。**
   管理者が `HubsSidebarEnabled` や `EdgeEntraCopilotPageContext` を止めている可能性は残る。講師が実機で確認済みなのは m365.cloud.microsoft の側だけ。
   → 手順書に**「出てこないときは m365.cloud.microsoft に戻る」逃げ道を必ず置く。**

4. **学園の M365 ライセンスの正確な種別**（A1/A3/A5 のどれか）。
   ただし講師の実機に「Copilot Chat (Basic)」が出ている＝対象ライセンスを持っている状態なので、実務上は問題ない。

5. **職員の PC の Edge が、学園アカウントの「職場プロファイル」で動いているかどうか。**
   サポート記事は「ほとんどの場合、仕事用プロファイルで Edge にサインインした後、Entra ID アカウントで自動的に Microsoft Copilot にサインインします」と書くが、**「ほとんどの場合」であって全員ではない。**
   → だからこそ、**アカウントの確認を①に置く**必要がある。

---

## 結論：手順書に載せてよいか

**載せてよい。** 理由は次の3点。

1. **保護が効くこと自体は、Microsoft の一次情報で白。** 「Microsoft Entra アカウントでサインインしたユーザーは、エンタープライズ データ保護を受け取ります」と、Edge のサイドバーについて名指しで書かれている（learn.microsoft.com/ja-jp/copilot/edge）。講師の条件「秘密が保持できるならそれでよい」を満たす。

2. **有償ライセンス無しで使える。** 「Using Copilot Chat doesn't require a Microsoft 365 Copilot license」「EDP is available in Copilot Chat at no extra cost」。学園の状態（Copilot Chat (Basic)）のままで成立する。Word/Excel の中の Copilot が使えないこととは、別の話。

3. **開いているページを読ませる機能も、保護の中に入る。** 要約されたコンテンツは EDP のもとで処理され、ページの中身そのものが Bing に送られることはない、と明記されている。

ただし、**条件つきで載せる**。手順書には次を必ず入れる。

- **①でアカウントを確認する**（個人アカウントだと Microsoft Copilot（個人用）に落ちて、EDP の対象外になるため。ここが白黒の分かれ目）。
- **盾のアイコンで保護を目視確認する**（一次情報で裏の取れている唯一の確認方法）。
- **サイドバーが出ないときは m365.cloud.microsoft に戻る逃げ道**（テナント側で止められている可能性が消せないため）。
- **機密情報を含むページでは使わない**の一言（未公開の学内資料は、そもそも研修で触らせない方針と揃う）。
- **「Browse with Copilot」には触れない**（有償ライセンスが必要・プレビュー段階）。
