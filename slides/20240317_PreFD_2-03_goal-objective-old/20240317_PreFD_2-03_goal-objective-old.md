---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 38%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 吹き出し（スピーチバルーン） */
  .bubble { position: relative; border: 2.5px solid var(--accent-dark); border-radius: 26px; color: var(--accent-dark); font-weight: 800; text-align: center; padding: 18px 30px; line-height: 1.4; background: #fff; }
  .bubble.b-down::after { content: ""; position: absolute; left: 22%; bottom: -22px; border: 12px solid transparent; border-top-color: var(--accent-dark); }
  .bubble.b-up::before { content: ""; position: absolute; left: 26%; top: -22px; border: 12px solid transparent; border-bottom-color: var(--accent-dark); }
  /* 達成目標 角丸枠 */
  .achieve { border: 2.5px solid #1f3a5f; border-radius: 18px; padding: 16px 30px; font-size: 30px; line-height: 1.5; }
  .achieve b { color: #111; }
  /* ピラミッド段 */
  .pyr { display: flex; flex-direction: column; align-items: center; gap: 3px; }
  .pyr .lvl { color: #fff; font-size: 26px; font-weight: 800; text-align: center; padding: 7px 0; clip-path: polygon(0 0, 100% 0, calc(100% - 0px) 100%, 0 100%); }
  /* Before/After 変化図 */
  .ba { display: flex; align-items: center; gap: 8px; }
  .ba .lbl { font-size: 22px; font-weight: 800; }
  .ba .ar { font-size: 40px; color: var(--accent); font-weight: 900; }
  /* シラバス段階テーブル */
  .stage-tbl { width: 100%; border-collapse: separate; border-spacing: 0 10px; font-size: 30px; }
  .stage-tbl td { padding: 6px 0; }
  .stage-tbl .k { color: #15436e; font-weight: 800; }
  .stage-tbl .k b { color: var(--accent-dark); }
  .stage-tbl .v { color: #333; padding-left: 40px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big"><span style="color:var(--accent-dark)">目的</span>と<span style="color:var(--accent-dark)">目標</span>とは？</div>
</div>

<div class="achieve" style="max-width:980px; margin:14px auto 0;"><b>達成目標：</b><br><span style="margin-left:1.6em;">目的と目標とはなにかを説明出来る</span></div>

<!--
- タイトルコール。「目的」と「目標」とは何か。今回の達成目標は、目的と目標とは何かを説明できるようになること。
-->

---

<div class="page-title">目的と目標</div>

<div class="bubble b-down" style="position:absolute; left:30%; top:120px; width:420px; font-size:40px;">そもそも、これいる？</div>

<div class="achieve" style="position:absolute; left:40px; top:300px; right:40px; font-size:42px;"><b>達成目標：</b><br><span style="margin-left:1.6em;">目的と目標とはなにかを説明出来る</span></div>

<div class="bubble b-up" style="position:absolute; left:60px; top:500px; width:380px; font-size:40px;">目標と目的？<br>同じじゃん？</div>

<!--
- 「そもそも、これいる？」「目標と目的って同じじゃん？」という素朴な疑問から始める。達成目標は、目的と目標とはなにかを説明できること。
-->

---

<div class="page-title">目的と目標</div>

# <span style="color:var(--accent-dark)">授業の目的</span> = 授業の存在意義

<div class="box-info" style="text-align:center; font-size:30px; margin-top:10px;">学習者の<br><b style="font-size:38px;">「Why? なぜこれを学ぶ必要があるのか？」</b><br>に対する答え</div>

<div class="box-accent" style="margin-top:16px;"><b>例：筋トレ学</b><br>一生健やかな人生を歩むために、筋トレの背景にある理論、医学的エビデンス、方法を理解し、一人で正しく筋トレできる能力を身につける。</div>

<div class="box-accent" style="margin-top:12px;"><b>例： 医療倫理</b><br>患者さんに寄り添える医療従事者となるために、多様なケーススタディと議論を通して倫理観を涵養する。</div>

<!--
- 授業の目的＝授業の存在意義。学習者の「なぜこれを学ぶのか？」への答え。筋トレ学・医療倫理を例に。
- 地球内部の熱力学：研究現場や社会に出てから熱力学を使いこなすために、岩石・鉱物・人工物へ熱力学の基礎法則を適用する方法を理解し、一人で問題解決できる力を身につける。
-->

---

<div class="page-title">目的と目標</div>

# 目標：終了後に学習者にできる<br>ようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<div style="text-align:center; font-size:34px; font-weight:800; color:#444; margin:4px 0 10px;">(Goal, Learning outcomes)</div>

<div style="display:flex; align-items:center; gap:24px;">
<div class="box-accent" style="flex:1; font-size:28px;">授業の結果、学習者が何を学び、<br>何ができるようになっているのか。</div>
</div>

<div class="ba" style="position:absolute; left:60px; bottom:46px;">
<div style="text-align:center;"><div class="lbl">劇的<br>Before</div><img src="./src/fig11-img.png" style="height:120px;"><img src="./src/fig12-img.png" style="height:120px; margin-left:-18px;"></div>
<div style="text-align:center; margin:0 6px;"><div class="lbl">授業</div><div class="ar">➡</div></div>
<div style="text-align:center;"><div class="lbl">できるように<br>なる</div><img src="./src/fig09-img.png" style="height:120px;"><img src="./src/fig10-img.png" style="height:120px; margin-left:-18px;"></div>
<div style="text-align:center;"><div class="lbl"><br>After</div></div>
</div>

<!--
- 目標とは、終了後に学習者にできるようになって欲しい能力（Goal, Learning outcomes）。授業を通して Before → After へ変化する。
-->

---

<div class="page-title">目的と目標</div>

# 目標：終了後に学習者にできる<br>ようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<div class="box-accent" style="font-size:23px; margin-top:8px;">例： <b>筋トレ学▶</b>各動作にて意識すべき部位と怪我の注意点を指摘出来る。<br>例： <b>医療倫理</b>▶諸問題を討議し、一般的な葛藤の構造を解釈する。</div>

<div style="display:flex; gap:30px; margin-top:12px;">
<div style="font-size:32px; font-weight:800; color:#15436e; white-space:nowrap;">知っておくべきこと</div>
<div class="stepbox" style="flex:1; margin:0;">
<div class="st">① 目的を<b>具体化</b>したもの</div>
<div class="st">② <b>学生の自学自習</b>に役立つ</div>
<div class="st">③ <b>評価項目</b>と一致させる</div>
</div>
</div>

<div class="ba" style="position:absolute; left:60px; bottom:38px;">
<div style="text-align:center;"><div class="lbl">Before</div><img src="./src/fig11-img.png" style="height:104px;"><img src="./src/fig12-img.png" style="height:104px; margin-left:-16px;"></div>
<div style="text-align:center; margin:0 6px;"><div class="lbl" style="color:var(--accent-dark);">差分：評価</div><div class="lbl">授業</div><div class="ar">➡</div></div>
<div style="text-align:center;"><div class="lbl">劇的 After</div><img src="./src/fig09-img.png" style="height:104px;"><img src="./src/fig10-img.png" style="height:104px; margin-left:-16px;"></div>
</div>

<!--
- 目標は ①目的を具体化したもの ②学生の自学自習に役立つ ③評価項目と一致させる。Before→Afterの「差分＝評価」になる。
-->

---

<div class="page-title">目的と目標</div>

# 目標：終了後に学習者にできる<br>ようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:14px;">

<table class="stage-tbl" style="flex:1.4;">
<tr><td class="k">この<b>授業</b>の目標</td><td class="v">シラバスに使用</td></tr>
<tr><td class="k">この<b>講義</b>の目標</td><td class="v">各回の冒頭に説明</td></tr>
<tr><td class="k">この<b>動画</b>の目標</td><td class="v">各動画の冒頭に説明</td></tr>
<tr><td class="k">この<b>課題</b>の目標</td><td class="v">課題のデザインに使用</td></tr>
</table>

</div>

<div style="display:flex; gap:30px; margin-top:18px;">
<div class="box-info" style="flex:1; text-align:center; font-size:30px;">各段階で<br><b style="color:#15436e;">様々な目標</b>がある</div>
<div class="box-accent" style="flex:1; text-align:center; font-size:30px;"><b>目標を定めて</b>、<br>デザインする</div>
</div>

<!--
- 授業・講義・動画・課題と各段階に様々な目標がある。目標を定めてからデザインする。
-->

---

<div class="page-title">目的と目標</div>

# 授業の目的・目標と上位概念

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 auto; width:430px;">
<div style="display:flex; align-items:flex-start; gap:14px;">
<div style="text-align:center; padding-top:8px;">
<div style="font-size:30px; font-weight:800;"><span style="color:var(--accent-dark)">逆向き</span>設計</div>
<div style="font-size:54px; color:var(--accent); line-height:1; margin-top:8px;">⬇</div>
</div>
<div class="pyr" style="flex:1;">
<div class="lvl" style="background:#A03318; width:120px;">DP</div>
<div class="lvl" style="background:#C05528; width:170px;">CP</div>
<div class="lvl" style="background:#D98050; width:230px;">授業の<b>目的</b></div>
<div class="lvl" style="background:#E6A07A; width:290px;">授業の<b>目標</b></div>
<div class="lvl" style="background:#EFBDA0; width:350px;">講義の<b>目標</b></div>
<div class="lvl" style="background:#F4D2BD; width:410px; color:#7a3b1a;">課題・動画の<b>目標</b></div>
</div>
</div>
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:28px;">DP / CP → <br>『高等教育の建付け』を復習</div>
<div style="font-size:36px; font-weight:800; line-height:1.5; margin-top:20px;"><span style="color:var(--accent-dark)">上位のものと整合的</span>である、または<span style="color:var(--accent-dark)">関係性を説明</span>できる</div>
</div>

</div>

<!--
- 授業の目的・目標は、DP/CPなどの上位概念とつながる階層の一部。逆向き設計で上から降ろし、上位と整合的である／関係性を説明できることが大切。
-->

---

<div class="page-title">まとめ</div>

# <span class="tag tag-soft" style="font-size:26px;">まとめ</span>

<div style="display:flex; gap:24px; align-items:center;">

<div style="flex:1.4;">
<div class="box-accent" style="font-size:30px;"><b>授業の目的とは？</b><br><span style="margin-left:1em;">授業の<b>存在意義</b></span></div>
<div class="box-accent" style="font-size:30px; margin-top:14px;"><b>目標とは？</b><br>修了後に学習者にできる<br>ようになって欲しい<b>能力</b></div>
</div>

<div style="flex:0 0 auto; position:relative;">
<img src="./src/fig26-img.png" style="height:300px; display:block;">
<span style="position:absolute; left:6%; top:30%; background:#fff; border:1.5px solid #888; border-radius:8px; font-size:18px; font-weight:800; padding:1px 8px;">暗記</span>
<span style="position:absolute; left:58%; top:6%; color:var(--accent-dark); font-size:18px; font-weight:800;">目的</span>
<span style="position:absolute; left:34%; top:22%; color:var(--accent-dark); font-size:18px; font-weight:800;">目標</span>
<span style="position:absolute; left:50%; top:36%; color:var(--accent-dark); font-size:18px; font-weight:800;">目標</span>
</div>

</div>

<div class="cite" style="margin-top:14px;">参考文献：栗田佳代子 (2017) <i>『インタラクティブ・ティーチング』</i> 河合出版<br>栗田佳代子 (2021) <i>Interactive Teaching</i>, Coursera by 東京大学</div>

<!--
- まとめ。授業の目的とは＝授業の存在意義。目標とは＝修了後に学習者にできるようになって欲しい能力。
-->
