---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（#CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">シラバス</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">シラバスが学習者と教員双方へどう役立つか説明出来る。</span></div>

<!--
- まずは、タイトルコール。シラバスが学習者と教員双方にどう役立つか説明できる、が達成目標。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス</span>

<div class="goal-box" style="margin-top:18px;"><b>達成目標：</b><span class="ind">シラバスが学習者と教員双方へどう役立つか説明出来る。</span></div>

<div class="box-warn" style="margin-top:40px; max-width:680px; text-align:center;">シラバス、学生or教員として<br>使ったことありますか？</div>

<!--
- 問いかけ：シラバス、学生か教員として使ったことありますか？
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス</span>とは何か

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-accent" style="margin-top:6px;"><b>各授業科目の詳細な授業計画。</b></div>

<div style="font-size:24px; line-height:1.7; margin:14px 0 0 8px;">
大学の授業名、<br>
担当教員名、<br>
講義目的、<br>
各回ごとの授業内容、<br>
成績評価方法・基準、<br>
準備学修等についての具体的な指示、<br>
教科書・参考文献、履修条件等
</div>

<div style="font-size:24px; line-height:1.6; margin:10px 0 0 8px;">が記されており、<b style="color:var(--accent-dark)">学生が各授業科目の準備学修等を進めるための基本となるもの。</b></div>

</div>
<img src="./src/fig01-img.png" alt="授業計画" style="width:230px; margin-top:30px;">
</div>

<div class="cite">中教審, 質的転換答申 (2012)の用語集より</div>

<!--
- シラバスとは各授業科目の詳細な授業計画。学生が準備学修を進めるための基本となるもの。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバスの根拠</span>

<div class="box-info" style="margin-top:14px;">
<b style="font-size:26px;">大学設置基準 （成績評価基準等の明示等）</b><br>
<span style="font-size:22px; line-height:1.5;">第二十五条の二　大学は、学生に対して、授業の方法及び内容並びに一年間の授業の計画をあらかじめ明示するものとする。</span><br>
<span style="font-size:22px; line-height:1.5;">２　大学は、学修の成果に係る評価及び卒業の認定に当たつては、客観性及び厳格性を確保するため、学生に対してその基準をあらかじめ明示するとともに、当該基準にしたがつて適切に行うものとする。</span>
</div>

<div class="box-accent" style="margin-top:16px;">
<b>教学マネジメント指針（中教審 / 2020）</b><br>
<span style="font-size:23px;">学生と教員の共通理解の基盤及び成績評価の基点として<br>シラバスの重要性を強調</span>
</div>

<!--
- シラバスの法的・制度的根拠。大学設置基準第二十五条の二と、教学マネジメント指針（中教審/2020）。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">2種類</span>のシラバス

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<div class="stepbox" style="margin-top:8px;">
<div class="st">① <b>授業要覧</b>から発展したもの</div>
</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">② <b>より詳細</b>なもの</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">事務連絡、契約書、学習のガイド等の要素も含み、<br><b class="em">学生の学修を促すツール</b></div>
</div>

</div>
<div style="flex:1; margin-top:10px;">
<img src="./src/fig02-img.png" alt="シラバス検索システム" style="width:100%; border:1px solid #ddd;">
<div class="box-info" style="margin-top:12px; font-size:22px;">シラバスの必須要素が<br>端的にまとまっている</div>
<div class="box-accent" style="margin-top:10px; font-size:22px;"><b>ねらい・目的/目標・課題・<br>予習・参考文献</b>等、行間も分かる</div>
</div>
</div>

<div class="cite" style="font-size:22px;">①を公開しつつ、<b style="color:var(--accent-dark)">②を履修者に配る</b>授業も増加 (中島, 2016)</div>

<!--
- シラバスは2種類。①授業要覧から発展した必須要素中心のもの、②より詳細で学修を促すツール。①を公開し②を配る授業も増加。
-->

---

<div class="page-title">シラバス</div>

# シラバスは<span style="color:var(--accent-dark)">誰のため？</span>

<div class="subhead"><b style="color:var(--accent-dark)">シラバスを作ることで授業をデザインする</b></div>

<div style="display:flex; gap:20px; align-items:center;">
<div style="text-align:center; flex:0 0 130px;">
<div style="font-weight:800;">学生</div>
<img src="./src/fig06-student.png" alt="学生" style="height:240px;">
</div>

<div style="flex:1;">
<div class="box-accent" style="font-size:23px;">
<b>コースデザイン</b>に役立つ目標に応じたデザイン<br>
<b>カリキュラムの整合性</b>の確認　 DP、CP、AP<br>
<b>教育力を示す資料</b>として
</div>
<div class="box-info" style="margin-top:10px; font-size:23px;"><b>学修を促すツール</b>として</div>
<div class="box-warn" style="margin-top:10px; font-size:23px;">両者にとって…　<b>約束事</b>(評価/態度等)として</div>
</div>

<div style="text-align:center; flex:0 0 130px;">
<div style="font-weight:800;">教員</div>
<img src="./src/fig05-img.png" alt="教員" style="height:240px;">
</div>
</div>

<div class="takeaway"><b>シラバス作成は、学習者・教員の双方に役立つ</b></div>

<!--
- シラバスを作ることで授業をデザインする。コースデザイン・整合性確認・教育力を示す資料、学修を促すツール、両者の約束事として。学習者・教員双方に役立つ。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス作成課題</span>

<div class="box-warn" style="position:absolute; top:108px; right:40px; width:330px; text-align:center; font-size:22px;">実際に作成するときも<br>同じ流れがgood!</div>

<div class="stepbox" style="margin-top:8px;">
<div class="st">① <b>雛形をダウンロード</b>する。</div>
<div class="st" style="font-size:23px; margin-left:1.2em;">A. <b>千葉大シラバス</b><br>B. <b>詳細シラバスを一旦作成後</b>、千葉大シラバスに内容を<b>精選</b>する。</div>
</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">② <b>逆向き設計</b>で埋める　。<span class="tag tag-analyze" style="margin-left:8px;">分析</span><span class="tag tag-design" style="margin-left:6px;">設計</span></div>
<div class="st" style="font-size:23px; margin-left:1.2em;">本学・他大学の類似講義を参考にするのも可。<br><b>目標・目的の記載、評価方法</b>については、この講義で順を追い、説明する。</div>
</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">③ 完成させたら、<b>学生が主体的に学べる</b>か、<b>量的無理がないか、記載の妥当性</b>等を<b class="em">チェックリスト</b>で確認。</div>
</div>

<!--
- シラバス作成課題。①雛形をダウンロード、②逆向き設計で埋める（分析・設計）、③チェックリストで確認。実際の作成でも同じ流れがgood。
-->

---

<div class="page-title">まとめ</div>

# まとめ

<div class="wrap3" style="font-size:26px; line-height:1.5;">
<div style="margin:10px 0;"><span class="no">1.</span> <b style="color:var(--accent-dark)">シラバス</b>は、各授業科目の詳細な授業計画に加え、<br><span style="margin-left:1.6em;"><b>学生の学修を促すツール</b></span></div>
<div style="margin:10px 0;"><span class="no">2.</span> シラバスが役立つのは、<b style="color:var(--accent-dark)">学生・教員双方</b><br><span style="margin-left:1.6em;">コースデザインや整合性の確認にもなる</span></div>
<div style="margin:10px 0;"><span class="no">3.</span> シラバスの作り方には…<br><span style="margin-left:1.6em;"><b class="em" style="color:var(--accent);">型がある</b>ので、課題で身につけよう</span></div>
</div>

<div class="cite" style="margin-top:18px;">
<b>参考文献：</b><br>
①中島英博 編著 (2016) <i>『授業設計』</i> 玉川大学出版部<br>
②栗田佳代子・中村長史 編著 (2023) <i>インタラクティブ・ティーチング 実践編2</i>
</div>

<!--
- まとめ。①シラバスは詳細な授業計画＋学修を促すツール、②学生・教員双方に役立ち整合性確認にもなる、③作り方には型があるので課題で身につけよう。
-->
