---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">AIと学習の研究を読む</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    /* ── ヘッダー幅の調整つまみ（値は既定。数字を変えると効く） ── */
    --hdr-left-w: fit-content;  /* 左の題字帯の幅。固定したいときは例: 26% */
    --hdr-left-max: 38%;        /* 題字帯の上限幅（超えたら…で省略） */
    --pt-center: 42.3%;           /* 中央page-title帯の中心位置（50%=画面中央） */
    --pt-width: 38%;    /* page-title帯の幅。固定したいときは例: 26% */
    --pt-max: 40%;              /* page-title帯の上限幅 */
  }
  /* ── 素のMarkdown箇条書きを「太字見出し＋説明」型で描く ──
     書き方:  - **見出しの文**
              説明の文。          ← divタグ不要 */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }
  /* インラインSVG（グラフ・図）のラッパ。幅を確定させないと高さが潰れる */
  section .figwrap { width: 100%; }
  section .figwrap > svg { width: 100%; height: auto; display: block; }

---

<!-- _class: cover-hero -->

<style scoped>
  /* 2行タイトル用に一回り小さく。写真を置かないので1列にする */
  section.cover-hero { padding-top: calc(var(--header-h) + 54px); }
  section.cover-hero .title-small { font-size: 30px; }
  section.cover-hero .title-big { font-size: 60px; }
  section.cover-hero .title-hero { margin-bottom: 44px; }
  section.cover-hero .title-foot { grid-template-columns: 1fr; }
</style>

<div class="title-hero">
<div class="title-small">論文を読む ── 生成AIと学習</div>
<div class="title-big">AIを使うと成績は上がる。<br>取り上げると、下がる</div>
</div>

<div class="title-foot">
<div class="title-meta">
<div class="title-event">Bastani, H. et al. (2025) PNAS, 122(26), e2422633122</div>
<div class="title-date">2026年8月18日（火）　学部生向けセミナー</div>
<div class="title-affil">千葉大学 国際未来教育基幹　田川 翔</div>
</div>
</div>

<!--
【表紙／1分30秒】

みなさん、こんにちは。お集まりいただき、ありがとうございます。千葉大学国際未来教育基幹の田川と申します。よろしくおねがいします。

この時間は「論文を読む」ということで、生成AIと学習に関する論文を、1本だけ、じっくり読んでいきます。20分ほどお付き合いください。話の途中でも、うなずいたり、首をかしげたりしていただけると、こちらもやりやすいので、ぜひ反応をいただけるとうれしいです。

今日読むのは、2025年にPNAS、アメリカ科学アカデミーの紀要ですね、そこに載ったBastaniさんたちの論文です。タイトルをそのまま訳すと「ガードレールのない生成AIは学習を害しうる」。高校の数学の授業で、実際に生徒さんにAIを使ってもらって測った研究になります。

で、スライドのこの2行、「AIを使うと成績は上がる。取り上げると、下がる」。これは僕がひねって書いたコピーではなくて、この論文の結果そのものです。上がるのか下がるのか、どっちなんだという感じなんですが、同じ実験の中で、両方が起きました。

先に1つだけ申し上げておくと、「AIは便利だ」という話と、「AIで学べる」という話は、別ものです。そこを分けて測ったところが、この研究のいちばんの手柄かなと感じています。では、いきましょう。
-->

---

<div class="page-title">今日の問い</div>

## 「AIを使うと、はかどる」と「学べている」は、別のことです

<div class="body">

- **課題は速く終わります。それは何度も確かめられています**
  文章でも、プログラムでも、AIを使うと作業の成績は上がります。
- **では、AIが手元にない場面ではどうなるのでしょうか**
  試験、実習、就職後の現場。AIに頼れない時間はまだ残ります。
- **今日読む論文は、その差を実験で測りました**
  高校数学の授業で、約1,000人を3つの群に分けています。

</div>

<div class="takeaway">「使えるあいだ」と「取り上げた後」を、分けて測った研究です</div>

<!--
【今日の問い／1分45秒】

まず、今日の問いです。「AIを使うと、はかどる」ということと、「学べている」ということは、別です、と書きました。上から順にいきます。

1つ目。課題は速く終わります。これはもう、いろいろな研究で何度も確かめられていて、文章を書く作業でも、プログラムを書く作業でも、AIを使えばその場の成績は上がる。ここはほぼ疑いがないところまで来ています。

2つ目。では、AIが手元にない場面ではどうなるのか。みなさんでいうと、まず試験ですよね。あとは実習の現場とか、実験をしているその瞬間とか。就職した後も、AIに聞けない時間というのは、まだけっこう残っています。AIがある状態でうまくいっていることと、AIが無い状態でできることは、同じなんでしょうか。

3つ目。今日読む論文は、まさにその差を、実験で測りました。高校の数学の授業で、およそ1,000人を3つのグループに分けています。

下の帯に書いたとおりで、「使えるあいだ」と「取り上げた後」を、分けて測った研究です。ここが今日の骨になります。

ここでちょっと、自分に聞いてみてほしいんですけど。AIを使って課題を出した後、同じ問題を、何も見ずにもう一回解けますか。ちょっと自信ないな、という方、いますよね。僕も正直そうです。その感じを持ったまま、この先を聞いてみてください。
-->

---

<div class="page-title">実験の形</div>

## 90分の授業を3つに区切り、真ん中だけ条件を変えました

<div class="body">

<div class="figwrap">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 720 250"><rect width="720" height="250" x="0" y="0" fill="none"></rect><path d="M267.5 16L267.5 181" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M358.5 16L358.5 181" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M449.5 16L449.5 181" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M539.5 16L539.5 181" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M630.5 16L630.5 181" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M268 181L268 16" fill="none" pointer-events="visible" stroke="#262626" stroke-width="1.5" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:23px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(257.64 139.75)" fill="#262626">GPT Tutor</text><text dominant-baseline="central" text-anchor="end" style="font-size:23px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(257.64 57.25)" fill="#262626">GPT Base</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(267.64 191)" fill="#5F5F5F">0%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(358.23 191)" fill="#5F5F5F">20%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(448.82 191)" fill="#5F5F5F">40%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(539.41 191)" fill="#5F5F5F">60%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(630 191)" fill="#5F5F5F">80%</text><path d="M267.6 120.8l167.6 0l0 38l-167.6 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M267.6 38.3l303.5 0l0 38l-303.5 0Z" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><text dominant-baseline="central" text-anchor="start" style="font-size:26px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" transform="translate(440.2315 139.75)" fill="#262626">37%</text><text dominant-baseline="central" text-anchor="start" style="font-size:26px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" transform="translate(576.1165 57.25)" fill="#262626">67%</text></svg>
</div>

</div>

<div class="takeaway">練習の時間だけを変え、試験は全員おなじ条件で解きます</div>

<!--
【実験の形／1分45秒】

実験の形です。舞台は、ある高校の数学の授業。1コマ90分を、3つに区切っています。

前半は、ふつうの授業です。先生が教える。ここは全グループ同じです。

真ん中が練習の時間で、ここだけ条件を変えます。1つ目のグループは、教科書とノートだけ。これがくらべる基準になる対照群ですね。2つ目がGPT Base、3つ目がGPT Tutorというやつで、この2つの中身は次のスライドで説明します。

そして最後が試験です。ここは全員おなじで、AIも端末も無し、紙で解きます。練習で使った問題と試験の問題は、同じ考え方が問われるように対応づけてあります。

この設計のポイントは3つあります。1つは、どのグループになるかを、クラス単位でランダムに決めていること。もともと出来のいいクラスがAIを使った、みたいな偏りが起きないようにしています。2つ目は、いま言ったように、練習と試験がきちんと対応していること。3つ目は、この点数が成績に反映されるので、生徒さんが手を抜けない状況になっていることです。

つまり、変えたのは練習の時間だけ。試験は全員おなじ土俵、ということですね。

-->

---

<div class="page-title">2つのAI</div>

## 同じGPT-4でも、指示の書き方で別の道具になります

<style scoped>
  section .tcols .fill { padding: .7em .9em; height: 100%; box-sizing: border-box; }
  section .tcols .fill .t { font-size: 24px; margin-bottom: .35em; }
  section .tcols .fill .d { font-size: 21px; line-height: 1.6; }
</style>

<div class="tcols">
<div>

<div class="fill">
<div class="t">GPT Base</div>
<div class="d">ChatGPTとほぼ同じ画面です。問題文を渡して「生徒を助けて」と伝えただけで、答えを聞けば答えを返します。</div>
</div>

</div>
<div>

<div class="fill accent">
<div class="t">GPT Tutor（ガードレール付き）</div>
<div class="d">答えそのものは渡さず、ヒントだけ出すよう指示しています。さらに問題ごとに、正解と「よくあるつまずき・そのときのヒント」を教員が書いて渡しています。</div>
</div>

</div>
</div>

<p class="note wide">この下ごしらえのために、数学教員2名が問題ごとの正解とヒントを用意しています。手間はかかります。</p>

> GPT Tutor に与えた指示から（抜粋・意訳）：「どんな場合でも、生徒に完全な解答を与えてはいけません」<br>「まず生徒がどこまでやったかを見せてもらい、つまずいている一歩だけを指摘しなさい」

<div class="takeaway">違いはモデルではなく、与えた指示だけです</div>

<!--
【2つのAI／2分30秒】

AIを使った2つのグループの中身です。ここが、この論文のいちばんおもしろいところだと感じています。

左が、GPT Base。みなさんが使っているChatGPTと、ほぼ同じ画面だと思ってください。裏で渡している指示は、その日の問題文と、「生徒を助けてあげてね」くらいのものです。ですから、生徒が「答えは？」と聞けば、答えを返します。

右が、GPT Tutor。ガードレール付き、と書きました。ガードレールというのは、道路の脇にある、あの落ちないようにする柵ですね。ここでは、AIに「これはやるな」という縛りをかけている、という意味で使っています。何を縛ったかというと、答えそのものを渡さないこと。ヒントだけを出しなさい、という指示です。それに加えて、問題ごとに、正解と、生徒がよくつまずくポイント、そのときに出すヒントを、あらかじめ書いて渡しています。

下に、実際の指示の抜粋を意訳して載せました。「どんな場合でも、生徒に完全な解答を与えてはいけません」。それから「まず生徒がどこまでやったかを見せてもらい、つまずいている一歩だけを指摘しなさい」。かなり強い言い方で縛っているのが分かるかと思います。

大事なのは、この2つが、同じGPT-4だということです。モデルは同じ。値段の高い賢いAIを使ったからよかった、という話ではありません。違うのは、与えた指示だけです。

もう1つだけ。この下ごしらえのために、数学の先生が2人がかりで、問題ごとに正解とヒントを準備しています。つまり、手間はかかります。ここは後半で効いてくるので、覚えておいてください。
-->

---

<div class="page-title">結果</div>

## 練習では大きく伸び、試験では逆に下がりました

<style scoped>
  section .figwrap { width: 880px; max-width: 100%; align-self: center; }
</style>

<div class="body">

<div class="figwrap">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 880 392"><rect width="880" height="392" x="0" y="0" fill="none"></rect><path d="M168.8 268.5L830 268.5" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M168.8 215.5L830 215.5" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M168.8 149.5L830 149.5" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M168.8 83.5L830 83.5" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M168.8 30.5L830 30.5" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M168.8 268L830 268" fill="none" pointer-events="visible" stroke="#262626" stroke-width="1.5" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" transform="translate(158.83 268)" fill="#5F5F5F">-40%</text><text dominant-baseline="central" text-anchor="end" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" transform="translate(158.83 215.1111)" fill="#5F5F5F">0%</text><text dominant-baseline="central" text-anchor="end" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" transform="translate(158.83 149)" fill="#5F5F5F">50%</text><text dominant-baseline="central" text-anchor="end" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" transform="translate(158.83 82.8889)" fill="#5F5F5F">100%</text><text dominant-baseline="central" text-anchor="end" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" transform="translate(158.83 30)" fill="#5F5F5F">140%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:22px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="11" transform="translate(334.1225 278)" fill="#262626">練習中（AIを使える）</text><text dominant-baseline="central" text-anchor="middle" style="font-size:22px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="11" transform="translate(664.7075 278)" fill="#262626">試験（AIなし）</text><path d="M272.5 215.1l56 0l0 -63.5l-56 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M603.1 215.1l56 0l0 22.5l-56 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M339.7 215.1l56 0l0 -167.9l-56 0Z" fill="#A6192E" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M670.3 215.1l56 0l0 1.3l-56 0Z" fill="#A6192E" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:24px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="-12" transform="translate(300.5225 146.6444)" fill="#262626">48%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:24px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="-12" transform="translate(631.1075 210.1111)" fill="#262626">-17%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:24px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="-12" transform="translate(367.7225 42.1889)" fill="#262626">127%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:24px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" y="-12" transform="translate(698.3075 210.1111)" fill="#262626">-1%</text><path d="M-5 -5l749.3 0l0 31l-749.3 0Z" transform="translate(70.355 366)" fill="rgb(0,0,0)" fill-opacity="0" stroke="#ccc" stroke-width="0" class="zr0-cls-0"></path><path d="M2.5 0L11.5 0A2.5 2.5 0 0 1 14 2.5L14 7.5A2.5 2.5 0 0 1 11.5 10L2.5 10A2.5 2.5 0 0 1 0 7.5L0 2.5A2.5 2.5 0 0 1 2.5 0" transform="translate(70.355 371.5)" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:21px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" xml:space="preserve" x="19" y="5" transform="translate(70.355 371.5)" fill="#5F5F5F">GPT Base（そのままのChatGPT型）</text><path d="M0 -5.5l372 0l0 21l-372 0Z" transform="translate(70.355 371.5)" fill="none" pointer-events="visible" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="legend" class="zr0-cls-3"></path><path d="M2.5 0L11.5 0A2.5 2.5 0 0 1 14 2.5L14 7.5A2.5 2.5 0 0 1 11.5 10L2.5 10A2.5 2.5 0 0 1 0 7.5L0 2.5A2.5 2.5 0 0 1 2.5 0" transform="translate(482.365 371.5)" fill="#A6192E" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:21px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" xml:space="preserve" x="19" y="5" transform="translate(482.365 371.5)" fill="#5F5F5F">GPT Tutor（ガードレール付き）</text><path d="M0 -5.5l327.3 0l0 21l-327.3 0Z" transform="translate(482.365 371.5)" fill="none" pointer-events="visible" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="legend" class="zr0-cls-3"></path></svg>
</div>

<p class="note wide">対照群（教科書とノートだけ）の平均を基準にした差。生徒×セッション 2,848件の回帰分析による。</p>

</div>

<div class="takeaway">GPT Baseは練習で＋48%、試験で−17%。伸びと落ち込みが逆を向きます</div>

<!--
【結果／2分45秒】

結果です。少しグラフの読み方から説明します。

横に、大きく2つのかたまりがあります。左が練習中、つまりAIを使えている場面。右が試験、AIを取り上げた場面です。

縦軸は、対照群、教科書とノートだけのグループを基準のゼロとして、そこから何パーセント上下したか、という差です。棒の色は、灰色がGPT Base、そのままのChatGPT型。赤がGPT Tutor、ガードレール付きのほうです。

まず左、練習中を見てください。灰色のGPT Baseがプラス48%。ガードレール付きの赤にいたっては、プラス127%です。倍以上ですね。AIを使うと、その場の出来はものすごく良くなる。ここまでは、たぶん直感どおりだと思います。

問題は右です。試験、AIが手元に無い状態。GPT Baseはマイナス17%。しかもこれは、統計的にきちんと意味のある差だと確認されています。AIを使って練習したグループのほうが、教科書とノートだけで練習したグループより、点が低くなってしまった。

一方、ガードレール付きのGPT Tutorはマイナス1%。ほぼゼロですね。論文の数字でいうとマイナス0.004。要するに、対照群と差が無かった、ということです。

ここ、読み間違えないでほしいところなんですが、Tutorは「学習を増やした」わけではありません。練習では2倍以上に見えていたのに、試験では、教科書とノートに追いついただけ。ガードレールがやったのは、害を打ち消すところまで、なんですね。

ちなみにこの数字は、生徒とセッションの組み合わせで2,848件ぶんのデータを回帰分析して出しています。
-->

---

<div class="page-title">前提の確認</div>

## そもそもAIの答えは、半分しか合っていませんでした

<div class="body">

<div class="figwrap">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 980 150"><rect width="980" height="150" x="0" y="0" fill="none"></rect><path d="M18 34l414.1 0l0 56l-414.1 0Z" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-0"></path><path d="M432.1 34l341 0l0 56l-341 0Z" fill="#8A8A8A" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M773.2 34l56.8 0l0 56l-56.8 0Z" fill="#BDBDBD" ecmeta_series_index="2" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:26px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(225.06 62)" fill="#fff">正解 51%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:24px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(602.64 62)" fill="#fff">考え方の誤り 42%</text><text dominant-baseline="central" text-anchor="start" style="font-size:20px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(835 62)" fill="#262626">計算ミス 8%</text></svg>
</div>

- **練習問題57問に、10回ずつ「答えは？」と聞いた結果です**
  正解は51%。考え方から間違えるものが42%、計算ミスが8%でした。
- **それでも、誤りが試験の点数を下げたわけではありません**
  AIがよく間違えた問題ほど成績が悪い、という関係は試験側には出ませんでした。

</div>

<div class="takeaway">「AIが間違えたから」では、成績の低下を説明できません</div>

<!--
【前提の確認／1分30秒】

ここで、当然出てくる疑問をつぶしておきます。「それ、AIが間違ったことを教えたからじゃないの？」という話ですね。

著者たちは、そこもちゃんと測っています。練習に使った57問について、AIに10回ずつ「答えは？」と聞いてみた。その結果が、この帯です。左の赤いところ、正解は51%。真ん中、考え方から間違えているものが42%。右端の、単なる計算ミスが8%。半分しか合っていません。2023年の秋、当時のGPT-4での測定です。

ただ、ここからが大事で。AIがよく間違えた問題ほど、試験の成績が悪い、という関係は、試験の側には出ませんでした。つまり、「AIが嘘をついたから下がった」では、この落ち込みを説明できないんです。

では、いったい何が起きていたのか。次のスライドが、この論文の答えになります。
-->

---

<div class="page-title">原因</div>

## 答えを写すために使うと、練習になりません

<div class="tcols fig-left">
<div>

<div class="figwrap">
<svg class="wide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 780 260"><rect width="780" height="260" x="0" y="0" fill="none"></rect><path d="M267.5 16L267.5 191" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M373.5 16L373.5 191" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M479.5 16L479.5 191" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M584.5 16L584.5 191" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M690.5 16L690.5 191" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M268 191L268 16" fill="none" pointer-events="visible" stroke="#262626" stroke-width="1.5" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:23px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(257.64 147.25)" fill="#262626">GPT Tutor</text><text dominant-baseline="central" text-anchor="end" style="font-size:23px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" xml:space="preserve" transform="translate(257.64 59.75)" fill="#262626">GPT Base</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(267.64 201)" fill="#5F5F5F">0%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(373.23 201)" fill="#5F5F5F">20%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(478.82 201)" fill="#5F5F5F">40%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(584.41 201)" fill="#5F5F5F">60%</text><text dominant-baseline="central" text-anchor="middle" style="font-size:19px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="9.5" transform="translate(690 201)" fill="#5F5F5F">80%</text><path d="M267.6 127.1l195.3 0l0 40.3l-195.3 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M267.6 39.6l353.7 0l0 40.3l-353.7 0Z" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><text dominant-baseline="central" text-anchor="start" style="font-size:26px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" transform="translate(467.9815 147.25)" fill="#262626">37%</text><text dominant-baseline="central" text-anchor="start" style="font-size:26px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:bold;" transform="translate(626.3665 59.75)" fill="#262626">67%</text></svg>
</div>

<div class="cap">最初のセッションで、各問題の最初のひと言が<br>「問題文の貼り付け」か「答えを教えて」だった割合</div>

</div>
<div>

- **GPT Baseでは、3人に2人が最初から答えを求めました**
  やり取りの回数も少なく、短く終わっています。
- **GPT Tutorでは、自分の解答を見せて相談する形が増えました**
  回を重ねるほど、聞き方が具体的になりました。
- **研究者はこれを「松葉杖」と呼んでいます**
  外した瞬間に転ぶ使い方です。

</div>
</div>

<div class="takeaway">下がった原因は、AIの誤りではなく使い方でした</div>

<!--
【原因／2分30秒】

原因です。答えを写すために使うと、練習になりません。

左のグラフを見てください。これは最初のセッションで、生徒が問題ごとにAIへ投げた「最初のひと言」が、問題文の貼り付けか、「答えを教えて」だった割合です。GPT Baseで67%。3人に2人が、自分で手を動かす前に、いきなり答えを取りにいっています。やり取りの回数も少なくて、短く終わっている。

ガードレール付きのGPT Tutorでは、これが37%まで下がります。代わりに何が起きたかというと、自分の解答を見せて、「ここまでやったんですけど合ってますか」と相談する形が増えました。しかも、回を重ねるほど、聞き方が具体的になっていったと書かれています。

研究者は、この使い方を crutch、松葉杖と呼んでいます。うまい言い方ですよね。松葉杖があるあいだは、むしろ速く歩けます。でも、外した瞬間に転ぶ。本当は練習の時間に、自分の足で歩く訓練をするはずだったのに、松葉杖の使い方がうまくなっただけ、ということです。

ですので、下がった原因は、AIの誤りではなくて、使い方でした。ここが、今日いちばん持ち帰ってほしいところです。同じAIでも、答えを取りにいく道具として使うのか、詰まったところを一緒に見てもらう相手として使うのかで、結果が逆を向きます。
-->

---

<div class="page-title">やっかいな点</div>

## 本人には、落ちている自覚がありません

<div class="body">

- **成績が下がった群は、下がった感覚を持っていませんでした**
  「できた」「学べた」の自己評価は、対照群と変わりません。
- **成績が変わらなかった群は、伸びた感覚を持っていました**
  ガードレール付きの群は、実際より高く自己評価しています。
- **同じズレは、他の学習研究でも報告されています**
  「わかった気」は、学べたかどうかの目安になりません。

</div>

<div class="takeaway">手応えではなく、何も見ずに解けるかで確かめてください</div>

<!--
【やっかいな点／1分30秒】

そして、ここがいちばんやっかいなところです。本人には、落ちている自覚がありません。

成績が下がったGPT Baseのグループに、「今日はどれくらいできましたか」「学べましたか」と聞くと、その自己評価は、対照群と変わらないんです。実際には17%落ちているのに、本人の手応えは落ちていない。

しかもガードレール付きのグループのほうは、実際には対照群と同じところに着地しているのに、自分では伸びたと感じている。実力より高めに見積もっています。

これ、じつは生成AIに限った話ではなくて、アクティブラーニングの研究でも、「学べた感じ」と、実際に測った学習量が、きれいにずれることが報告されています。人間はそもそも、自分の学びを主観で正しく測れないんですね。

ですから、手応えは判定に使えません。何も見ずに解けるかどうかで確かめてください。
-->

---

<div class="page-title">この研究が言っていないこと</div>

## 条件を確認してから、自分の場面に当てはめます

<div class="body">

- **1つの高校の、数学の授業での結果です**
  作文や実験のように、正解を採点しにくい科目は測れていません。
- **2023年秋のGPT-4を使っています**
  モデルも、私たちの慣れ方も、その後で変わっています。
- **測ったのは、その日のうちの短期の効果です**
  学期をまたいだ長期の影響は、この研究では分かりません。
- **「AIを使うな」とは書かれていません**
  設計しだいで害は消せる、というのが著者の結論です。

</div>

<div class="takeaway">結果は条件つきです。条件ごと引用してください</div>

<!--
【この研究が言っていないこと／1分30秒】

ここまで、けっこう強い結果をお話ししてきました。ただ、論文を読むときは、必ず限界の章まで読んでください。この研究にも、言えていないことがあります。4つ挙げます。

1つ目。これは1つの高校の、数学の授業での結果です。作文とか、実験レポートみたいに、正解を機械的に採点しにくい科目では測れていません。

2つ目。2023年秋のGPT-4を使っています。モデルもそのあと変わりましたし、僕らの慣れ方も変わりました。

3つ目。測ったのは、その日のうちの短期の効果です。学期をまたいで、長い目で見たらどうなのかは、この研究では分かりません。

4つ目。そして、「AIを使うな」とは、どこにも書かれていません。設計しだいで害は消せる、というのが著者たちの結論です。

論文の結果というのは、条件つきの結果です。誰かに紹介するときは、条件ごと引用してください。「AIを使うと成績が下がるらしいですよ」だけ持っていくと、それはもう、この論文が言っていないことになってしまいます。
-->

---

<div class="page-title">持ち帰り</div>

## 明日から変えられるのは、頼み方と確かめ方です

<div class="body">

- **答えではなく、次の一歩を頼みます**
  「答えは言わずに、どこで詰まっているかだけ教えて」と書きます。
- **使った後に、何も見ずに解き直します**
  ここで手が止まるなら、まだ自分のものになっていません。
- **AIの答えは、半分は間違っている前提で確かめます**
  途中式や根拠を出させて、自分で追える形にします。

</div>

<div class="takeaway">AIを外した状態で解けるか。それが唯一の答え合わせです</div>

<!--
【持ち帰り／2分】

では、明日から何を変えられるか。3つです。

1つ目。答えではなく、次の一歩を頼む。「答えは言わないで、どこで詰まっているかだけ教えて」と書いてください。これは、さっきのGPT Tutorが指示でやっていたことを、自分の側からやる、ということですね。相手の設定を変えられなくても、頼み方は自分で変えられます。

2つ目。使った後に、何も見ずに解き直す。ここで手が止まるなら、まだ自分のものになっていません。これは、さっきの実験の試験と同じことを、自分でやるということです。全部でなくていいので、1問だけでもやってみてください。

3つ目。AIの答えは、半分は間違っている前提で確かめる。実際に51%でしたよね。途中の式とか根拠を出させて、自分で追える形にしてください。答えだけもらうと、そもそも確かめようがありません。

この3つは、全部、今日の論文の中身と対応しています。ヒント型の頼み方はGPT Tutorの設計、解き直しは試験のパート、確かめるは正答率51%の話です。

下の帯にも書きましたが、AIを外した状態で解けるかどうか。それが唯一の答え合わせです。
-->

---

<!-- _class: message -->

# 便利さと、身につくことは、別々に測る

## AIを使えば作業は速くなります。学べたかどうかは、AIを外してから分かります

<!--
【メッセージ／30秒】

今日のまとめです。便利さと、身につくことは、別々に測る。

AIを使えば、作業は速くなります。それは本当です。ただ、学べたかどうかは、AIを外してからでないと分かりません。

（ここは1行だけ置いて、少し間を取る）
-->

---

<!-- _class: refs -->

<div class="page-title">出典</div>

## 元の論文とデータ

<style scoped>
  section.refs ul { max-width: none; }
  section.refs li { margin-bottom: .5em; }
</style>

- Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS*, 122(26), e2422633122. https://doi.org/10.1073/pnas.2422633122
- 匿名化されたデータと解析コード：https://github.com/obastani/GenAICanHarmLearning
- 本スライドの数値は、同論文の本文・Table 1・Fig. 2 と、学生の会話分析の記述から引用しています。

<!--
【出典／30秒】

出典です。元の論文はこちら、2025年のPNAS。匿名化したデータと解析コードも公開されていて、GitHubから誰でも取れます。興味のある方は、自分で数字を触ってみてください。

今日お見せしたグラフは、論文の図をそのまま貼ったものではなく、公開されている数値から作り直しています。

以上になります。ご清聴ありがとうございました。

【注意】PNASのページに Correction が出ている。引用する前に本文と併せて確認すること。
-->
