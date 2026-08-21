---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIの活用法について</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* 配色はテーマ既定（千葉大ガーネット #A6192E）をそのまま使う。上書きしない。 */
  :root {
    /* ── ヘッダー幅の調整つまみ（値は現在の既定。数字を変えると効く） ── */
    --hdr-left-w: fit-content;  /* 左の題字帯の幅。固定したいときは例: 26% */
    --hdr-left-max: 38%;        /* 題字帯の上限幅（超えたら…で省略） */
    --pt-center: 44.3%;         /* 中央page-title帯の中心位置（50%=画面中央） */
    --pt-width: 38%;            /* page-title帯の幅。fit-contentも可能 */
    --pt-max: 40%;              /* page-title帯の上限幅 */
    /* 行長。テーマ既定は28em（=約27字）で、16:9だと右が大きく余る */
    --measure: 42em;
  }
  /* ── 素のMarkdown箇条書きを「太字見出し＋説明」型（blist相当）で描く ──
     書き方:  - **見出しの文**
              説明の文。          ← divタグ不要 */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }
---

<div class="page-title">リスク ①　情報の流出</div>

## 入力が守られるかは、料金ではなく「アカウントの契約体系」で決まります

<div class="tcols" style="grid-template-columns:1fr 1.05fr;">
<div style="align-self:center;">
<svg viewBox="0 0 460 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="組織契約・学習利用の設定・そもそも入力しない、という3段の守りを示す図" style="width:100%; height:auto;">
<rect x="10" y="4" width="440" height="84" rx="3" fill="#F6E9EC"/>
<text x="28" y="38" font-size="19" font-weight="700" fill="#7D1322">① 貴学園のアカウントで入っているか</text>
<text x="28" y="70" font-size="17" fill="#262626">貴学園は契約あり。無償でも学習に使われない</text>
<path d="M220 94 L240 94 L230 108 Z" fill="#262626"/>
<rect x="10" y="112" width="440" height="84" rx="3" fill="#F1F1F1"/>
<text x="28" y="146" font-size="19" font-weight="700" fill="#262626">② 個人アカウントなら、設定をオフに</text>
<text x="28" y="178" font-size="17" fill="#5F5F5F">学習利用を止める（オプトアウト）</text>
<path d="M220 202 L240 202 L230 216 Z" fill="#262626"/>
<rect x="10" y="220" width="440" height="84" rx="3" fill="#F6E9EC" stroke="#A6192E" stroke-width="2.5"/>
<text x="28" y="254" font-size="19" font-weight="700" fill="#7D1322">③ 迷う情報は、そもそも入れない</text>
<text x="28" y="286" font-size="17" fill="#262626">設定によらず、これが最後の砦</text>
</svg>

</div>
<div>

- **分かれ目は、どのアカウントで入るかです**
  例えば、大学契約のGoogleアカウントのGeminiは、無償でも学習に使われません。
  機密を入れてよいという規定を作った大学もあります。
- **個人アカウントは、初期設定だと学習に使われます**
  設定でオフにできますが、ChatGPTなど原則学習するものもあります。
  <span class="ss-tune" style="color:#7d1322 !important">学校の機密を扱うには、そもそも向きません。</span>
- **迷う情報は、そもそも入力しないのが確実です**
  個人情報や機密は組織が許可したものしか入れない。

</div>
</div>

<div class="takeaway">使い始める前に、データの扱いを一度だけ確認してください</div>

<!-- 軸は「無料か有料か」ではなく「どのアカウントで入っているか」。同じ gemini.google.com でも、個人アカウントなら消費者向け規約、学園アカウントなら Workspace for Education の規約が適用される。出典：Google 公式ヘルプ「Gemini アプリは、エンタープライズ級のデータ保護を備えたコアサービスとして、すべての Education エディションで使用できます」「ライセンスなしの Education Fundamentals ユーザーの場合：チャットとアップロードされたファイルは、人間のレビュアーが確認することも、生成 AI モデルの改善に使用されることもありません」。設定画面は当日デモでもよい。口頭で足す：学園アカウントなら人間のレビューも入らないので、成績や研究の機密をどこまで入れてよいかは、組織として判断・許可できる範囲の話になる。 -->

---

<div class="page-title">リスク ②　シャドーAI</div>

## 職場に「見えないAI利用」が生まれ始めています

<div class="body">

<div class="grid2">
<div class="fill">
<div class="t">学生名簿やレポートを貼って並べ替える</div>
<div class="d">個人契約のAIに、そのまま貼ってしまった。</div>
</div>
<div class="fill">
<div class="t">面談の記録を要約させる</div>
<div class="d">音声入力/文字起こしをAIが学習していた。</div>
</div>
<div class="fill">
<div class="t">未公開の資料を下書きさせる</div>
<div class="d">論文の査読をさせたが、学会が禁じていた。</div>
</div>
<div class="fill">
<div class="t">素性の分からないアプリを使う</div>
<div class="d">AIつき安全カメラに課題があった。。。</div>
</div>
</div>

- **どれも悪気はありません。だから見えなくなります。**
  組織が把握できないのに、業務で利用されているのが「シャドーAI」です。
  禁止するより、<span class="ss-tune" style="color:#A6192E !important">安全に使える道(道具とポリシー・規定)を用意する</span>ほうが効きます。

</div>

<div class="takeaway">安全な生成AI/製品かどうかや、用途別の利用可否に注意が必要です。</div>

<!-- 前スライド（リスク①情報の流出）と同じ「データを外に出す」話なので続けて置く。①どのアカウントで入っているか → ②そもそも組織から見えていない利用がある、という順で話す。責める話ではなく、組織で安全な道を作る話につなげる。4つの例は「うちでも起きうる」と自分の部署に置き換えてもらう。 -->

---

<div class="page-title">注意点 ①　ハルシネーション</div>

## 知らないことも、それらしく答えてしまいます

<div class="tcols fig-left">
<div>

<svg viewBox="0 0 600 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AIが実在しない文献を書式まで整えて出した例と、それが架空である旨の注記" style="width:100%; height:auto;">
<rect x="6" y="6" width="588" height="52" rx="6" fill="#F1F1F1"/>
<text x="26" y="39" font-size="18" fill="#262626">質問：保育士の離職について、論文を教えて</text>
<path d="M292 62 L312 62 L302 74 Z" fill="#8A8A8A"/>
<rect x="6" y="80" width="588" height="142" rx="6" fill="#FAFAFA" stroke="#D6D6D6" stroke-width="1.5"/>
<text x="26" y="108" font-size="18" font-weight="700" fill="#8A8A8A">回答</text>
<text x="26" y="142" font-size="19" fill="#262626">山田 花子・鈴木 一郎（2021）</text>
<text x="26" y="174" font-size="19" fill="#262626">「保育者の離職意向と職場環境の関連」</text>
<text x="26" y="206" font-size="19" fill="#262626">保育学研究, 59(2), 112–125.</text>
<rect x="6" y="238" width="588" height="98" rx="6" fill="#FBF6EC" stroke="#B45309" stroke-width="2.5"/>
<text x="26" y="270" font-size="18" font-weight="700" fill="#B45309">この論文は存在しません</text>
<text x="26" y="304" font-size="18" fill="#262626">著者名も巻号もページも、それらしく作られています</text>
</svg>
<div class="cap">AIが作り出した架空の文献の例（再現）。書式が整うほど気づけません</div>

</div>
<div>

- <span class="ss-tune" style="color:#7d1322 !important">**ハルシネーション：事実でない内容を出します**</span>
  書式まで整っているので、信じてしまいます。
- <span class="ss-tune" style="color:#7d1322 !important">**カットオフ：知識には「収集」の期限があります**</span>
  それ以降の出来事は、検索機能を使わない限り知りません。
- **対策は、出典を出させて原典で確かめることです**
  文献名で検索すれば、存在しないことはすぐ分かります。
  (あるかどうかの判別は、AIも上手です。)

</div>
</div>

<div class="takeaway">事実の最終確認は、人の仕事として残ります</div>

<!-- 「仕組み上そうなる」と前半1の内容につなげると腹落ちしやすい。図の文献は架空（説明用に作った再現例）で、実在の論文ではない。当日は「この誌名で検索しても出てきません」と実演してもよい。 -->

---

<div class="page-title">注意点 ②　バイアス</div>

## 「平均」に寄る性質が、そのまま偏りになります

<div class="tcols fig-left">
<div>

<img src="./src/fig24-ai-bias.jpg" alt="生成AIが描いた均質な人物画像の例" style="height:440px; width:auto;">
<div class="cap">生成AIに「医療従事者」を描かせた例。似た属性に偏ります</div>
<div class="cite">出典：総務省「生成AIはじめの一歩 ver1.0 ── 生成AIの入門的な使い方と注意点」（情報流通行政局）</div>

</div>
<div>

- **学習データの偏りが、そのまま出力に現れます**
  特定の属性ばかりが描かれる、といった形で表面化します。
- **文章でも同じことが起きます**
  「ふつう」「一般的」の中身が、データ由来で偏っています。
- 現在は、意図的に制御してますが、その文ハルシネーションもします。
  例：1900年代の国会議員などの性別比など。

</div>
</div>

<!-- バイアス。植草の専門分野（保育・福祉・看護）に引きつける。 -->

---

<div class="page-title">直しながら使う</div>

## ループが大切： 一発で正解を求めず、直しながら使います

<div class="tcols fig-left">
<div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -6 740 616" preserveAspectRatio="xMidYMid meet" style="max-height:462px;max-width:100%;height:auto;display:block;margin:0 auto"><defs><marker id="ooda-arrow-uk" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#A6192E"/></marker></defs><rect x="200" y="230" width="200" height="140" rx="6" ry="6" fill="#fff" stroke="#A6192E" stroke-width="3"/><text x="300" y="286" text-anchor="middle" font-size="34" font-weight="700" fill="#A6192E">OODA</text><text x="300" y="318" text-anchor="middle" font-size="24" fill="#333">Loop</text><text x="300" y="350" text-anchor="middle" font-size="19" fill="#5F5F5F">(主語：人間)</text><path d="M 380 130 A 240 240 0 0 1 470 220" fill="none" stroke="#A6192E" stroke-width="4" marker-end="url(#ooda-arrow-uk)"/><path d="M 470 380 A 240 240 0 0 1 380 470" fill="none" stroke="#A6192E" stroke-width="4" marker-end="url(#ooda-arrow-uk)"/><path d="M 220 470 A 240 240 0 0 1 130 380" fill="none" stroke="#A6192E" stroke-width="4" stroke-dasharray="8,6" marker-end="url(#ooda-arrow-uk)"/><path d="M 130 220 A 240 240 0 0 1 220 130" fill="none" stroke="#A6192E" stroke-width="4" marker-end="url(#ooda-arrow-uk)"/><circle cx="300" cy="80" r="76" fill="#F6E9EC" stroke="#A6192E" stroke-width="3"/><text x="300" y="72" text-anchor="middle" font-size="30" font-weight="700" fill="#A6192E">Observe</text><text x="300" y="106" text-anchor="middle" font-size="21" fill="#333">観る</text><text x="214" y="46" text-anchor="end" font-size="22" font-weight="600" fill="#262626">AIの出力を見る</text><text x="214" y="72" text-anchor="end" font-size="19" fill="#5F5F5F">（HITLで確認）</text><circle cx="520" cy="300" r="76" fill="#F6E9EC" stroke="#A6192E" stroke-width="3"/><text x="520" y="292" text-anchor="middle" font-size="30" font-weight="700" fill="#A6192E">Orient</text><text x="520" y="326" text-anchor="middle" font-size="21" fill="#333">状況判断</text><text x="566" y="446" text-anchor="middle" font-size="22" font-weight="600" fill="#262626">自分の知識と照らす</text><circle cx="300" cy="520" r="76" fill="#F6E9EC" stroke="#A6192E" stroke-width="3"/><text x="300" y="512" text-anchor="middle" font-size="30" font-weight="700" fill="#A6192E">Decide</text><text x="300" y="546" text-anchor="middle" font-size="21" fill="#333">意思決定</text><text x="390" y="556" text-anchor="start" font-size="22" font-weight="600" fill="#262626">採用 / 修正 / 棄却</text><text x="390" y="583" text-anchor="start" font-size="19" fill="#5F5F5F">（使うかどうか決める）</text><circle cx="80" cy="300" r="76" fill="#F6E9EC" stroke="#A6192E" stroke-width="3"/><text x="80" y="292" text-anchor="middle" font-size="30" font-weight="700" fill="#A6192E">Act</text><text x="80" y="326" text-anchor="middle" font-size="21" fill="#333">実行</text><text x="34" y="446" text-anchor="middle" font-size="22" font-weight="600" fill="#262626">再プロンプト／実装</text><rect x="417" y="34" width="206" height="126" rx="8" ry="8" fill="#FBF6EC" stroke="#B45309" stroke-width="2.5"/><text x="520" y="78" text-anchor="middle" font-size="29" font-weight="700" fill="#B45309">Pause（確認）</text><text x="520" y="112" text-anchor="middle" font-size="20" fill="#333">私はこの出力を</text><text x="520" y="140" text-anchor="middle" font-size="20" fill="#333"><tspan font-weight="700">評価できる</tspan>か？</text><line x1="520" y1="160" x2="520" y2="222" stroke="#B45309" stroke-width="2.5"/></svg>
</div>
<div>

- **観る → 照らす → 決める → 再依頼、を回します**
  途中に「私はこの出力を評価できるか」の確認を挟みます。
- **最初の答えの出来は、あまり重要ではありません**
  2周目・3周目で良くなります。
- **使わないことには、上手になりません**
  試し、修正し、ループすることが上達の近道です。

</div>
</div>

<div class="takeaway">「試す → 直す」を回した経験で、上手になっていきます</div>

<!-- OODAループ。ワークでもこのループを体験してもらう、と予告。 -->

