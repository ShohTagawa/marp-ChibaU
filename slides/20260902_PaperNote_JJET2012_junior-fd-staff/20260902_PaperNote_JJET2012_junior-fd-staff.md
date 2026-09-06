---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">若手FD担当者のやりがいと不安</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    /* ── ヘッダー幅の調整つまみ（値は既定。数字を変えると効く） ── */
    --hdr-left-w: fit-content;  /* 左の題字帯の幅。固定したいときは例: 26% */
    --hdr-left-max: 40%;        /* 題字帯の上限幅（超えたら…で省略） */
    --pt-center: 54%;           /* 中央page-title帯の中心位置（50%=画面中央）。題字が長いので少し右へ */
    --pt-width: fit-content;    /* page-title帯の幅。固定したいときは例: 26% */
    --pt-max: 40%;              /* page-title帯の上限幅 */
    /* 行長。テーマ既定は28em。まとめの箇条書きが説明文を持つので少し伸ばす */
    --measure: 40em;
  }
  /* ── 素のMarkdown箇条書きを「太字見出し＋説明」型（blist相当）で描く ──
     書き方:  - **見出しの文**
              説明の文。          ← divタグ不要 */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }
  /* 表：1列目（項目名）を太字に */
  section table td:first-child { font-weight: 700; }
---

<!-- _class: cover-hero -->

<style scoped>
  section.cover-hero .title-big { font-size: 60px; line-height: 1.3; }
</style>

<div class="title-hero">
<div class="title-small">論文まとめ ｜ 2026年9月2日</div>
<div class="title-big">若手FD担当者の業務に対する<br>「やりがい」と「不安」</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="../assets/profile.jpg" alt="田川 翔"></div>
<div class="title-meta">
<div class="title-event">田口真奈・半澤礼之・杉原真晃・村上正行（2012）他部局との連携とキャリア展望の観点から．日本教育工学会論文誌 36(3), 327–337</div>
<div class="title-name">田川 翔</div>
<div class="title-affil">千葉大学 国際未来教育基幹／高等教育センター 助教</div>
</div>
</div>

<!-- 表紙。書誌：田口真奈・半澤礼之・杉原真晃・村上正行（2012）若手FD担当者の業務に対する「やりがい」と「不安」－他部局との連携とキャリア展望の観点から－．日本教育工学会論文誌, 36(3), 327–337（資料論文）。所属は当時：京都大学高等教育研究開発推進センター（田口・半澤）、山形大学基盤教育院（杉原）、京都外国語大学マルチメディア教育センター（村上）。 -->

---

<div class="page-title">調査の枠組み</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 21%; }
</style>

## 2009年の全国調査で、若手FD担当者の感情とその要因を探った研究です

<div class="body">

| 項目 | 内容 |
|---|---|
| 目的 | FD業務への「やりがい」「不安」が、他部局との連携の程度とキャリア展望でどう変わるかを、ポジション別に調べる |
| 調査時期・方法 | 2009年11月下旬〜12月下旬。Webアンケート（メールアドレスが無い大学には郵送） |
| 依頼先 | 4年制大学727校のFD担当部署。うち265校はセンター・委員会の存在をWebで確認できた大学 |
| 回答者 | 代表者165名／若手174名（研究職130名＝センター23・委員会79・その他28、事務職39名） |
| 若手の定義 | 40歳以下、または研究員・助手・助教・講師（非常勤を含む） |
| 尋ねた項目 | やりがい・不安・他部局との連携・キャリア展望（各5件法）と、その理由の自由記述 |

</div>

<div class="takeaway">センター専任の若手研究職は7割が任期付き。委員会所属では1割でした</div>

<!-- p.328–330。表1：センター・委員会の存在を確認 265校（国立70・公立32・私立163）、未確認 462校、合計727校。表2：若手の職階は准教授26.4%・講師25.3%・事務職員22.4%・助教12.6%・助手4.6%・研究員3.4%。代表者は教授83.0%。任期：センター等に専任として勤務する若手研究職23名のうち69.6%が任期付き、委員会所属の若手研究職79名では10.1%（p.330 3.1.1）。専任教員を有するセンターの専任と回答した割合は国立48.1%・公立12.0%・私立11.2%。若手の総勤務年数は平均7.37年、FD業務歴は1年未満37%・1〜5年未満54%。 -->

---

<div class="page-title">結果①　やりがいと不安</div>

## やりがいは立場で違い、不安は立場によらず高めでした

<div class="body">

<div class="tcols fig-left">
<div>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 760 400"><rect width="760" height="400" x="0" y="0" fill="none"></rect><path d="M262.5 12L262.5 360" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M370.5 12L370.5 360" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M479.5 12L479.5 360" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M587.5 12L587.5 360" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M696.5 12L696.5 360" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M262 360L262 12" fill="none" pointer-events="visible" stroke="#262626" stroke-width="1.5" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="29.5" transform="translate(706 360)" fill="#5F5F5F">5件法の平均</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(252 316.5)" fill="#262626">若手・委員会所属（N=79）</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(252 229.5)" fill="#262626">若手・事務職（N=37）</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(252 142.5)" fill="#262626">代表者（N=159）</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(252 55.5)" fill="#262626">若手・センター所属（N=22）</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(262 370)" fill="#5F5F5F">1</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(370.5 370)" fill="#5F5F5F">2</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(479 370)" fill="#5F5F5F">3</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(587.5 370)" fill="#5F5F5F">4</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(696 370)" fill="#5F5F5F">5</text><path d="M262 299.5l251.7 0l0 34l-251.7 0Z" fill="#BDBDBD" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M262 212.5l275.6 0l0 34l-275.6 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M262 125.5l334.2 0l0 34l-334.2 0Z" fill="#BDBDBD" ecmeta_series_index="0" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M262 38.5l345 0l0 34l-345 0Z" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><text dominant-baseline="central" text-anchor="start" style="font-size:18px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(521.72 316.5)" fill="#262626">3.32</text><text dominant-baseline="central" text-anchor="start" style="font-size:18px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(545.59 229.5)" fill="#262626">3.54</text><text dominant-baseline="central" text-anchor="start" style="font-size:18px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(604.18 142.5)" fill="#262626">4.08</text><text dominant-baseline="central" text-anchor="start" style="font-size:18px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(615.03 55.5)" fill="#262626">4.18</text><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;fill:rgba(207,207,207,1);}.zr0-cls-2:hover {cursor:pointer;fill:rgba(151,151,151,1);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(182,27,50,1);}]]></style></svg>

<div class="cap">図1　FD業務に対する「やりがい」の平均（5件法）。本文の数値から作図</div>

</div>
<div>

- **やりがいの差は有意でした**
  F(3,293)=14.14, p&lt;.001。センター所属の若手は委員会所属の若手より高く、代表者は委員会所属・事務職の若手より高い。
- **不安は誰もが「やや感じている」**
  若手 3.52、代表者 3.57。ポジションによる差は有意でない（F=0.82）。
- **不安の中身は、知識・負荷・学内の温度差**
  「本当のFD活動を学びたい」「兼任で両立が難しい」「教職員にFDの重要性が浸透していない」。

</div>
</div>

</div>

<div class="takeaway">センター所属の若手が最もやりがいを感じ、委員会所属の若手が最も低い</div>

<!-- p.331–332。やりがい：若手（N=162）M=3.52 SD=1.09、代表者（N=159）M=4.07 SD=0.84。ポジション別平均は若手センター 4.18、代表者 4.08、若手事務職 3.54、若手委員会 3.32（一元配置分散分析・Tukey法、F(3,293)=14.14, p<.001）。不安：若手 M=3.52 SD=1.09、代表者 M=3.57 SD=1.08、F(3,293)=0.82 n.s.。やりがいの理由は「学生を含む多くの対象者に教育・学習の向上に関わって影響を与えられる」など教育改善への寄与。不安の理由は「知識不足」「個人負担が大きすぎ、いずれ瓦解する」「任期が短い。責任者がいない」「教職員の間でFDに関する知識、重要性が浸透していない」など。図の N は図1の凡例（若手センター22・若手委員会79・若手事務職37・代表者159）。 -->

---

<div class="page-title">結果②　連携とキャリア展望</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 30%; }
  section table th:nth-child(n+2), section table td:nth-child(n+2) {
    text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap;
  }
  section table td b { color: var(--accent-dark); }
</style>

## 連携とキャリア展望は、立場によって違う形でやりがいを左右します

<div class="body">

| ポジション | 連携 → やりがい | 連携 → 不安 | キャリア展望 → やりがい | キャリア展望 → 不安 |
|---|---|---|---|---|
| 若手・センター所属（N=23） | .26 | −.21 | <b>.48</b> \* | −.15 |
| 若手・委員会所属（N=79） | <b>.37</b> \*\* | <b>−.26</b> \* | <b>.52</b> \*\*\* | −.01 |
| 若手・事務職（N=39） | .04 | −.24 | .19 | .01 |
| 代表者（N=140） | .11 | <b>−.21</b> \* | — | — |

<div class="note">相関係数（表5・表6）。* p&lt;.05　** p&lt;.01　*** p&lt;.001。代表者にはキャリア展望を尋ねていない。キャリア展望の平均：センター所属 4.14／事務職 3.58／委員会所属 3.03（p&lt;.001）。</div>

</div>

<div class="takeaway">連携が取れ、FD業務をキャリアに位置づけられる若手ほど、やりがいが高い</div>

<!-- p.332–334。表4：最も連携を取るべき部局は「学部・大学院」（若手研究職44.2%、若手事務職44.4%、代表者36.6%）だが、その連携度は若手研究職3.09・代表者3.66と相対的に低い。連携度の平均は代表者3.94が若手委員会3.46より高い（F(3,283)=3.59, p<.05）。表5（他部局との連携×やりがい／不安）：若手センター .26／−.21、若手委員会 .37**／−.26*、若手事務職 .04／−.24、代表者 .11／−.21*。表6（キャリア展望×やりがい／不安）：若手センター .48*／−.15、若手委員会 .52***／−.01、若手事務職 .19／.01。キャリア展望の平均：若手センター4.14・若手事務職3.58・若手委員会3.03（F(2,133)=10.59, p<.001）。若手（N=160）のキャリア展望の平均は3.37 SD=1.12。結びつきが強い理由は「管理・運営者として」「教育者として」「研究者として」の位置づけ。弱い理由は「研究を行いたい」「研究業績で評価される傾向」など。 -->

---

<div class="page-title">まとめと示唆</div>

## 組織の仕事は、連携の体制づくりと、キャリアへの位置づけです

<div class="body">

- **委員会所属の若手には、連携の設計が効きます**
  連携が取れているほど、やりがいが増え不安が減る。代表者が感じている「連携は取れている」という事実を、若手にも示す。
- **研究職の若手には、キャリアへの位置づけが効きます**
  管理・運営者、教育者、研究者のどの役割でもよい。FD業務が研究につながり、教育が評価される、と組織が保証する。
- **若手には、たどれるキャリアのモデルがありません**
  法令の義務化で急増した仕事なので、指導教員と同じ道筋を歩めない。事務職とセンター所属の若手は連携との関連がなく、今後の課題。

</div>

<div class="takeaway">FDを一部の任期付き若手の仕事で終わらせない。人員配置は大学全体の問題です</div>

<!-- p.334–336「4. まとめと今後の課題」。4.4 組織の在り方に対する示唆：委員会所属の若手は「やりがい」が連携と正、「不安」が負の相関を示すので、どのようなFDを実施するかだけでなく、どうすれば円滑な連携を取ることができるのかを検討することが重要。代表者が連携を取れていると感じている事実を若手にも示す。研究職では、FD業務を自身のキャリア展望に位置づけられれば「やりがい」が増す。不安要因の「組織としての協力がない」「負担が大きすぎる」を軽減するため、協力体制と時間的・精神的ゆとりを組織として支援する。教育者としての自己が評価されないとFD業務が「邪魔なもの」と認識されるので、教育を組織の中で正当に評価し重要と共通認識する。4.5 今後の課題：若手にキャリアを描くモデルが不在。最後の段落：「FDが一部の任期つきの若手教職員の業務となり、大学全体の教育改善にはつながらないのではないだろうか。今後、人員配置を含めた大学組織全体の問題としてFD業務を捉えていく必要がある」。 -->
