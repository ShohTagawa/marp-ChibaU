---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  /* デック固有：配色＝ガーネット（#CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 法令の階層スタック */
  .law-stack { margin-top: 6px; }
  .law-row { font-size: 30px; line-height: 1.45; margin: 6px 0; }
  .law-row b { color: var(--accent-dark); }
  .law-note { font-size: 22px; color: #555; margin: 2px 0 2px 2.0em; }
  /* DP/CP/AP の色分け */
  .c-dp { color: var(--accent-dark); font-weight: 800; }
  .c-cp { color: #1F7A43; font-weight: 800; }
  .c-ap { color: #1A6BB0; font-weight: 800; }
  /* 中教審⇄文科省 フロー */
  .gov-grid { display: grid; grid-template-columns: auto 1fr; column-gap: 22px; row-gap: 6px; align-items: center; margin-top: 6px; }
  .gov-node { font-size: 30px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 10px; padding: 8px 22px; text-align: center; white-space: nowrap; }
  .gov-node.dark { background: var(--accent-dark); }
  .gov-desc { font-size: 24px; color: #333; }
  .gov-arrow { text-align: center; color: var(--accent); font-weight: 800; font-size: 22px; line-height: 1; }
  /* 方針ピラミッド */
  .pyr { display: grid; gap: 4px; width: 300px; }
  .pyr div { color: #fff; font-weight: 800; text-align: center; border-radius: 6px; padding: 8px 0; }
  .pyr .p1 { background: var(--accent-dark); width: 120px; justify-self: center; font-size: 26px; }
  .pyr .p2 { background: var(--accent); width: 210px; justify-self: center; font-size: 26px; }
  .pyr .p3 { background: #E59AAE; width: 300px; font-size: 26px; }
  /* 参考スライド：下余白を詰めて密な本文を1画面に収める（PiPは右下のみ） */
  section.dense { padding-bottom: 40px; }
  section.dense h1 { margin-bottom: 8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">高等教育の建付け</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">高等教育の制度的背景を説明出来る。</span></div>

<!-- まずは、タイトルコール。 -->

---

<div class="page-title">高等教育の建付け</div>

# 大学・大学院の根拠法は？

<div class="law-stack">
<div class="law-row"><b>日本国憲法第</b>：第二十六条 教育を受ける権利</div>
<div class="law-row" style="margin-left:1.2em;"><b>教育基本法</b>：教育の原則『目的・目標・理念』</div>
<div class="law-row" style="margin-left:1.2em;"><b>学校教育法</b>：大学の定義</div>
<div class="law-note"> ※ 国立大学設置法/国立大学法人法とその施行規則</div>
<div class="law-note"> ※ 私立学校法/地方独立行政法人法</div>
<div class="law-row" style="margin-left:1.2em; margin-top:10px;"><b>大学設置基準</b></div>
<div class="law-row" style="margin-left:1.2em;"><b>大学院設置基準</b></div>
</div>

<div class="box-warn" style="margin-top:18px;"><b>設置基準をクリア・遵守すること</b>は不可欠</div>

<!-- 大学・大学院の根拠は、憲法→教育基本法・学校教育法→設置基準と階層になっている。設置基準のクリア・遵守は不可欠。 -->

---

<div class="page-title">高等教育の建付け</div>

# 大学・大学院設置基準と中教審

<div class="box-info" style="margin-top:10px;">設置基準・計画は、時代に合わせて変化する</div>

<div class="gov-grid" style="margin-top:16px;">
<div class="gov-node">中央教育審議会</div>
<div class="gov-desc">教育にかかる重要事項を調査審議し，文部科学大臣に意見を述べる</div>
<div class="gov-arrow">↓<br>答申</div>
<div></div>
<div class="gov-node dark">文部科学省</div>
<div class="gov-desc">基準や計画、施策等を変更する</div>
</div>

<div class="box-accent" style="margin-top:18px;"><b>中央教育審議会答申や文部科学省予算資料</b><br>大学・大学院の未来がどうなるか、国としての教育指針がわかる</div>

<!-- 設置基準は時代に合わせて変わる。中教審が答申し、文科省が基準・計画を変更する。答申や予算資料を読むと国の教育指針がわかる。 -->

---

<div class="page-title">高等教育の建付け</div>

# ３つの方針

<div class="box-info" style="margin-top:6px; font-size:22px;">
1. 中教審「将来像答申」(2005年: 初登場)、「学士力答申」(2008年)<br>
2. 学校教育法施行規則  (2016年3月31日改正、2017年4月1日施行）<br>
3. 中教審「教学マネジメント指針」(2020年)
</div>

<div style="font-size:30px; line-height:2.2; margin-top:24px;">
<div>・卒業認定・学位授与の方針<span class="c-dp">（ディプロマ/DP）</span></div>
<div>・教育課程編成・実施の方針<span class="c-cp">（カリキュラム/CP）</span></div>
<div>・入学者受入れの方針<span class="c-ap">（アドミッション/AP）</span></div>
</div>

<!-- 大学が定める「3つの方針」。DP・CP・APの3つで、根拠は中教審答申と学校教育法施行規則。 -->

---

<div class="page-title">高等教育の建付け</div>

# ３つの方針

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div style="font-size:27px; line-height:1.4; margin-top:8px;">
<div>・卒業認定・学位授与の方針<span class="c-dp">（ディプロマ/DP）</span></div>
<div style="margin:2px 0 12px 1.4em; color:#444; font-size:24px;">大学(院)での学修目標</div>
<div>・教育課程編成・実施の方針<span class="c-cp">（カリキュラム/CP）</span></div>
<div style="margin:2px 0 12px 1.4em; color:#444; font-size:24px;">教育内容と評価方法の方針</div>
<div>・入学者受入れの方針<span class="c-ap">（アドミッション/AP）</span></div>
<div style="margin:2px 0 4px 1.4em; color:#444; font-size:24px;">受け入れる学生に求める学修成果</div>
</div>

</div>
<div style="width:380px;">
<div class="box-accent" style="font-size:25px;">
✔ 全大学は<b>3つの方針</b>を提示<br>
✔ DPからCPへ<br>
<span style="margin-left:1.4em;">CPから各授業へ</span>
</div>
</div>
</div>

<div style="display:flex; align-items:flex-end; gap:18px; margin-top:14px;">
<div class="pyr">
<div class="p1">DP</div>
<div class="p2">CP</div>
<div class="p3">授業の<b>目的</b></div>
</div>
</div>

<!-- 3つの方針の中身。DP=学修目標、CP=教育内容と評価、AP=求める学修成果。DP→CP→各授業へと落ちる階層（ピラミッド）。 -->

---

<!-- _class: dense -->

<div class="page-title">高等教育の建付け</div>

# ３つの方針 <span style="font-size:30px;">(参考)</span>

<div style="font-size:22px; line-height:1.4; margin-top:2px;">
<div style="margin:7px 0;"><b>・卒業認定・学位授与の方針<span class="c-dp">（ディプロマ/DP）</span></b>各大学、学部・学科等の教育理念に基づき、どのような力を身に付けた者に卒業を認定し、学位を授与するのかを定める基本的な方針であり、学生の学修成果の目標（学修目標）ともなるもの。</div>
<div style="margin:7px 0;"><b>・教育課程編成・実施の方針<span class="c-cp">（カリキュラム/CP）</span></b>卒業認定・学位授与の方針の達成のために、どのような教育課程を編成し、どのような教育内容・方法を実施し、学修成果をどのように評価するのかを定める基本的な方針。</div>
<div style="margin:7px 0;"><b>・入学者受入れの方針<span class="c-ap">（アドミッション/AP）</span></b>各大学、学部・学科等の教育理念、ディプロマ・ポリシー、カリキュラム・ポリシーに基づく教育内容等を踏まえ、どのように入学者を受け入れるかを定める基本的な方針であり、受け入れる学生に求める学修成果（「学力の３要素」についてどのような成果を求めるか）を示すもの。</div>
</div>

<div class="cite" style="margin-top:4px;">(文部科学省：教学マネジメント指針用語集)</div>

<!-- 3つの方針の正式な定義（参考）。出典は文科省の教学マネジメント指針用語集。 -->

---

<div class="page-title">高等教育の建付け</div>

# 文科省と大学の関係

<div style="display:flex; align-items:center; justify-content:center; height:55%;">
<div class="box-info" style="font-size:26px;">何もなければ、このスライドはなくす予定です。</div>
</div>

<!-- ＼＼ドン！／／ -->

---

<div class="page-title">まとめ</div>

# まとめ

<div style="display:flex; align-items:center; justify-content:center; height:55%;">
<div class="box-info" style="font-size:26px;">何もなければ、このスライドはなくす予定です。</div>
</div>

<!-- まとめ。 -->
</content>
</invoke>
