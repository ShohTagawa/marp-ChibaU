---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 吹き出し（box-warn を尻尾付きに） */
  .bubble { position: relative; }
  .bubble::after { content: ""; position: absolute; top: -18px; left: 60px; border: 9px solid transparent; border-bottom-color: #E08A2B; }
  /* 役割タグ（誰のため：学生=青 / 教員=赤） */
  .who { font-size: 24px; font-weight: 800; text-align: center; }
  .who-st { color: var(--tag-blue); }
  .who-tc { color: var(--accent-dark); }
  /* 色帯ボックス（誰のため） */
  .obox { border-radius: 12px; padding: 10px 22px; margin: 8px 0; font-size: 23px; line-height: 1.45; }
  .obox.o-red  { border: 2.5px solid #E08A2B; background: #FCEFDD; }
  .obox.o-blue { border: 2.5px solid var(--tag-blue); background: #EAF2FB; }
  .obox.o-gray { border: 2.5px solid #999; background: #F2F2F2; }
  .obox b { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">シラバス</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">シラバスが学習者と教員双方へどう役立つか説明出来る。</span></div>

<!--
- まずは、タイトルコール。シラバスが学習者と教員の双方にどう役立つかを説明できる、が今回の達成目標。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">シラバス</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">シラバスが学習者と教員双方へどう役立つか説明出来る。</span></div>

<div class="box-warn bubble" style="max-width:560px; margin:22px auto 0; text-align:center;">シラバス、学生or教員として<br>使ったことありますか？</div>

<!--
- 導入の問いかけ。シラバスを学生として、あるいは教員として使ったことがありますか？
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス</span>とは何か

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:10px;">
<div style="flex:1;">

<div class="goal-box" style="font-size:24px; padding:14px 26px;">
<b>各授業科目の詳細な授業計画。</b>
<div style="margin:6px 0 0 0.6em; font-size:23px; line-height:1.5;">
－大学の授業名、<br>
－担当教員名、<br>
－講義目的、<br>
－各回ごとの授業内容、<br>
－成績評価方法・基準、<br>
－準備学修等についての具体的な指示、<br>
－教科書・参考文献、履修条件等
</div>
<div style="margin-top:8px;">が記されており、<b>学生が各授業科目の準備学修等を進めるための基本となるもの。</b></div>
</div>

</div>
<img src="./src/fig01-img.png" alt="授業計画のメモ" style="height:300px; margin-top:30px;">
</div>

<div class="cite">中教審, 質的転換答申 (2012)の用語集より</div>

<!--
- シラバスの定義。各授業科目の詳細な授業計画で、授業名・担当教員・目的・各回の内容・評価・準備学修・教科書などが記され、学生が準備学修を進める基本となるもの。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス</span>の根拠

<div class="box-info" style="margin-top:14px;">
<div style="font-size:27px; font-weight:800; color:var(--tag-blue); margin-bottom:6px;">大学設置基準 （成績評価基準等の明示等）</div>
<div style="font-size:22px; line-height:1.5;">第二十五条の二　大学は、学生に対して、授業の方法及び内容並びに一年間の授業の計画をあらかじめ明示するものとする。</div>
<div style="font-size:22px; line-height:1.5; margin-top:8px;">２　大学は、学修の成果に係る評価及び卒業の認定に当たつては、客観性及び厳格性を確保するため、学生に対してその基準をあらかじめ明示するとともに、当該基準にしたがつて適切に行うものとする。</div>
</div>

<div class="box-accent" style="margin-top:16px; margin-right:calc(var(--pip-w) + 16px);">
<div style="font-size:27px; font-weight:800; margin-bottom:4px;">教学マネジメント指針（中教審 / 2020）</div>
<div style="font-size:23px; line-height:1.5;">学生と教員の共通理解の基盤及び成績評価の基点として<br>シラバスの重要性を強調</div>
</div>

<!--
- シラバスの法的・政策的根拠。大学設置基準第25条の2で計画と評価基準の事前明示が求められ、2020年の教学マネジメント指針でも共通理解と成績評価の基点として重要性が強調されている。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">2種類</span>のシラバス

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">

<div style="flex:1;">

<div style="display:flex; align-items:center; gap:14px; font-size:28px; font-weight:800; margin:4px 0;">
<span class="tag tag-soft">①</span> <b>授業要覧</b>から発展したもの
</div>
<div style="display:flex; align-items:center; gap:16px; margin:10px 0 14px 8px;">
<img src="./src/fig02-img.png" alt="シラバス検索システム" style="height:64px;">
<div class="box-info" style="font-size:22px; padding:8px 16px;">シラバスの必須要素が<br>端的にまとまっている</div>
</div>

<div style="display:flex; align-items:center; gap:14px; font-size:28px; font-weight:800; margin:14px 0 4px;">
<span class="tag tag-soft">②</span> <b>より詳細</b>なもの
</div>
<div style="font-size:23px; line-height:1.5; margin:4px 0 0 8px;">　事務連絡、契約書、学習のガイド等の要素も含み、<br>　<b style="color:var(--accent-dark);">学生の学修を促すツール</b></div>

<div style="display:flex; align-items:center; gap:16px; margin:12px 0 0 8px;">
<img src="./src/fig03-img.png" alt="詳細シラバスの例" style="height:96px; border:1px solid #ddd;">
<div class="box-accent" style="font-size:22px; padding:8px 16px;"><b>ねらい・目的/目標・課題・</b><br><b>予習・参考文献</b>等、行間も分かる</div>
</div>

</div>
</div>

<div class="cite">①を公開しつつ、②を履修者に配る授業も増加 (中島, 2016)</div>

<!--
- シラバスには2種類。①授業要覧から発展した必須要素中心のもの（千葉大シラバス検索システム）と、②事務連絡・契約書・学習ガイドの要素も含む、学修を促す詳細なもの。①を公開しつつ②を配る授業も増加。
-->

---

<div class="page-title">シラバス</div>

# シラバスは<span style="color:var(--accent-dark)">誰のため？</span>

<div class="subhead"><b>シラバスを作ることで<span style="color:var(--accent-dark)">授業をデザイン</span>する</b></div>

<div style="display:flex; align-items:center; gap:18px; margin-top:6px;">

<div style="text-align:center;">
<img src="./src/fig04-img.png" alt="学生" style="height:230px;">
<div class="who who-st">学生</div>
</div>

<div style="flex:1;">
<div class="obox o-red">
－<b>コースデザイン</b>に役立つ目標に応じたデザイン<br>
－<b>カリキュラムの整合性</b>の確認　DP、CP、AP<br>
－<b>教育力を示す資料</b>として
</div>
<div class="obox o-blue">－<b>学修を促すツール</b>として</div>
<div class="obox o-gray">両者にとって…　－<b>約束事</b>(評価/態度等)として</div>
</div>

<div style="text-align:center;">
<img src="./src/fig05-img.png" alt="教員" style="height:230px;">
<div class="who who-tc">教員</div>
</div>

</div>

<div class="box-warn" style="margin-top:10px; margin-right:calc(var(--pip-w) + 16px); text-align:center;">シラバス作成は、<span style="color:var(--accent-dark)">学習者・教員の双方</span>に役立つ</div>

<!--
- シラバスは誰のため？ 作ることで授業をデザインできる。教員にはコースデザイン・カリキュラム整合性・教育力の証明、学生には学修を促すツール、両者には約束事として役立つ。シラバス作成は双方に役立つ。
-->

---

<div class="page-title">シラバス</div>

# <span style="color:var(--accent-dark)">シラバス作成課題</span>

<div class="box-warn" style="position:absolute; top:96px; right:40px; width:330px; text-align:center;">実際に作成するときも<br>同じ流れがgood!</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st">① <b>雛形をダウンロード</b>する。<br>　　A. <b>千葉大シラバス</b><br>　　B. <b>詳細シラバスを一旦作成後</b>、千葉大シラバスに内容を<b>精選</b>する。</div>
</div>

<div class="stepbox">
<div class="st">② <b>逆向き設計</b>で埋める。<span class="tag tag-analyze" style="font-size:21px; margin:0 6px;">分析</span><span class="tag tag-design" style="font-size:21px;">設計</span><br>　本学・他大学の類似講義を参考にするのも可。<br>　<b>目標・目的の記載、評価方法</b>については、この講義で順を追い、説明する。</div>
</div>

<div class="stepbox">
<div class="st">③ 完成させたら、<b>学生が主体的に学べる</b>か、<b>量的無理がないか、記載の妥当性</b>等を<b>チェックリスト</b>で確認。</div>
</div>

<!--
- シラバス作成課題の手順。①雛形をDL（千葉大シラバス、または詳細を作ってから精選）。②逆向き設計で埋める（分析→設計）。③完成後はチェックリストで妥当性を確認。実際に作るときも同じ流れがgood。
-->

---

<div class="page-title">まとめ</div>

# まとめ

<div class="wrap3" style="font-size:26px; line-height:1.5;">
<div style="margin:10px 0;"><span class="no">1.</span> <b>シラバス</b>は、各授業科目の詳細な授業計画に加え、<br><span style="margin-left:1.4em; color:var(--accent-dark); font-weight:800;">学生の学修を促すツール</span></div>
<div style="margin:10px 0;"><span class="no">2.</span> シラバスが役立つのは、<b>学生・教員双方</b><br><span style="margin-left:1.4em;">コースデザインや整合性の確認にもなる</span></div>
<div style="margin:10px 0;"><span class="no">3.</span> シラバスの作り方には…<br><span style="margin-left:1.4em;"><b style="color:var(--accent);">型がある</b>ので、課題で身につけよう</span></div>
</div>

<div class="cite" style="margin-top:14px;"><b>参考文献</b>：<br>①中島英博 編著 (2016) 『<i>授業設計</i>』 玉川大学出版部<br>②栗田佳代子・中村長史 編著 (2023) <i>インタラクティブ・ティーチング 実践編2</i></div>

<!--
- まとめ。①シラバスは詳細な授業計画に加え学修を促すツール。②役立つのは学生・教員双方で、コースデザインや整合性確認にもなる。③作り方には型があるので課題で身につけよう。
-->
