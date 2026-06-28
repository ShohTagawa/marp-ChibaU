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
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* before/after の小イラスト行 */
  .ba-row { display: flex; align-items: center; gap: 14px; margin-top: 14px; }
  .ba-row img { height: 96px; }
  .ba-cap { font-size: 22px; font-weight: 800; text-align: center; line-height: 1.2; }
  .ba-arrow { font-size: 40px; color: var(--accent); }
  .ba-class { font-size: 24px; font-weight: 800; border: 2px solid #888; border-radius: 8px; padding: 4px 14px; background: #fff; }
  /* ピラミッド右の説明 */
  .pyr-note { font-size: 34px; font-weight: 800; line-height: 1.5; }
  .pyr-note b { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">目的と目標とは？</div>
</div>

<div class="goal-box" style="max-width:880px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">目的と目標とはなにかを説明出来る</span></div>

<!--
- まずは、タイトルコール。
-->

---

<div class="page-title">目的と目標とは</div>

# 目的と目標とは

<div class="box-accent" style="width:560px; margin:8px auto 0; text-align:center; font-size:36px; font-weight:800;">そもそも、これいる？</div>

<div class="goal-box" style="margin:22px 0;"><b>達成目標：</b><span class="ind">目的と目標とはなにかを説明出来る</span></div>

<div class="box-accent" style="width:420px; margin-left:40px; text-align:center; font-size:36px; font-weight:800; line-height:1.3;">目標と目的？<br>同じじゃん？</div>

<!--
- 「目標」と「目的」は同じでは？ いる？という素朴な疑問から入る。
-->

---

<div class="page-title">目的と目標とは</div>

# <span style="color:var(--accent-dark)">授業の目的</span> = 授業の存在意義

<div class="box-info" style="margin:14px 0; font-size:27px;">学習者の<br><b style="font-size:34px; color:var(--tag-blue);">「Why? なぜこれを学ぶ必要があるのか？」</b><br><span style="display:block; text-align:right;">に対する答え</span></div>

<div style="display:flex; gap:22px;">
<div class="box-accent" style="flex:1; font-size:21px; line-height:1.5;"><b>例：筋トレ学</b><br>一生健やかな人生を歩むために、<br>筋トレの背景にある理論、医学的エビデンス、方法を理解し、<br>実践を楽しみながら、一人で正しく筋トレする能力を身につける。</div>
<div class="box-accent" style="flex:1; font-size:21px; line-height:1.5;"><b>例： 医療倫理</b><br>患者さんに寄り添える医療従事者となるために、<br>多様なケーススタディと議論を通して倫理観を涵養する。</div>
</div>

<!--
- 授業の目的＝授業の存在意義。「なぜこれを学ぶのか」への答え。筋トレ学・医療倫理を例に。
-->

---

<div class="page-title">目的と目標とは</div>

# <span style="color:var(--accent-dark)">目標</span>：終了後に学習者にできるようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<div class="lead-note" style="text-align:center; font-size:30px; color:#444;">(Goal, Learning outcomes)</div>

<div class="box-accent" style="margin:14px 0; font-size:28px;">授業の結果、学習者が何を学び、何ができるようになっているのか。</div>

<div class="ba-row">
<div class="ba-cap">劇的<br>Before</div>
<img src="./src/fig03-img.png" alt="Before">
<img src="./src/fig04-img.png" alt="Before">
<div class="ba-cap">できるように<br>なる</div>
<div class="ba-class">授業</div>
<span class="ba-arrow">➡</span>
<img src="./src/fig01-img.png" alt="After">
<img src="./src/fig02-img.png" alt="After">
<div class="ba-cap">劇的<br>After</div>
</div>

<!--
- 目標＝修了後に学習者にできるようになって欲しい能力（Learning outcomes）。授業を通じてBefore→Afterへ。
-->

---

<div class="page-title">目的と目標とは</div>

# <span style="color:var(--accent-dark)">目標</span>：終了後に学習者にできるようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1.05;">
<div class="box-info" style="font-size:20px; line-height:1.5; padding:8px 18px;">例： <b>筋トレ学▶</b>各動作にて意識すべき部位と怪我の注意点を指摘出来る。<br>例： <b>医療倫理</b>▶諸問題を討議し、一般的な葛藤の構造を解釈する。</div>
<div style="display:flex; gap:18px; margin-top:10px;">
<div class="box-accent" style="font-size:23px; font-weight:800; padding:8px 16px;">知っておくべきこと</div>
<div style="flex:1;">
<div class="stepbox" style="margin:0 0 6px;"><div class="st">① 目的を<b>具体化</b>したもの</div></div>
<div class="stepbox" style="margin:0 0 6px;"><div class="st">② <b>学生の自学自習</b>に役立つ</div></div>
<div class="stepbox" style="margin:0;"><div class="st">③ <b>評価項目</b>と一致させる</div></div>
</div>
</div>
</div>
</div>

<div class="ba-row" style="margin-top:16px;">
<div class="ba-cap">Before</div>
<img src="./src/fig07-img.png" alt="Before">
<img src="./src/fig08-img.png" alt="Before">
<div class="ba-cap" style="color:var(--accent-dark);">差分：評価</div>
<div class="ba-class">授業</div>
<span class="ba-arrow">➡</span>
<img src="./src/fig05-img.png" alt="After">
<img src="./src/fig06-img.png" alt="After">
<div class="ba-cap">劇的<br>After</div>
</div>

<!--
- 目標は ①目的を具体化 ②自学自習に役立つ ③評価項目と一致 の3要件。Before→Afterの差分＝評価。
-->

---

<div class="page-title">目的と目標とは</div>

# <span style="color:var(--accent-dark)">目標</span>：終了後に学習者にできるようになって欲しい<span style="color:var(--accent-dark)">能力</span>

<table style="border-collapse:collapse; font-size:30px; margin:14px 0; width:78%;">
<tr><td style="border:2px solid var(--accent); background:var(--accent-soft); padding:10px 24px; font-weight:800;">この<b style="color:var(--accent-dark);">授業</b>の目標</td><td style="border:2px solid #ccc; padding:10px 24px;">シラバスに使用</td></tr>
<tr><td style="border:2px solid var(--accent); background:var(--accent-soft); padding:10px 24px; font-weight:800;">この<b style="color:var(--accent-dark);">講義</b>の目標</td><td style="border:2px solid #ccc; padding:10px 24px;">各回の冒頭に説明</td></tr>
<tr><td style="border:2px solid var(--accent); background:var(--accent-soft); padding:10px 24px; font-weight:800;">この<b style="color:var(--accent-dark);">動画</b>の目標</td><td style="border:2px solid #ccc; padding:10px 24px;">各動画の冒頭に説明</td></tr>
<tr><td style="border:2px solid var(--accent); background:var(--accent-soft); padding:10px 24px; font-weight:800;">この<b style="color:var(--accent-dark);">課題</b>の目標</td><td style="border:2px solid #ccc; padding:10px 24px;">課題のデザインに使用</td></tr>
</table>

<div style="display:flex; gap:60px; font-size:34px; font-weight:800; margin-top:8px;">
<div style="text-align:center;">各段階で<br><span style="color:var(--accent-dark);">様々な目標</span>がある</div>
<div style="text-align:center;"><span style="color:var(--accent-dark);">目標を定めて</span>、<br>デザインする</div>
</div>

<!--
- 授業・講義・動画・課題、それぞれの段階で目標がある。目標を定めてからデザインする。
-->

---

<div class="page-title">目的と目標とは</div>

# 授業の目的・目標と上位概念

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:6px;">
<div style="flex:0 0 460px;">
<div style="font-size:34px; font-weight:800; margin-bottom:6px;"><span style="color:var(--accent-dark);">逆向き</span>設計　<span style="color:#E08A2B; font-size:40px;">⬇</span></div>
<svg viewBox="0 0 440 332" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
<!-- 頂点(220,8)から底辺左右(5,320)(435,320)へ一直線。各段の上下辺はこの斜辺上に置く＝きれいな三角形 -->
<polygon points="220,8 179,68 261,68" fill="#C44A1E"/>
<polygon points="176,72 264,72 298,120 142,120" fill="#D86A3C"/>
<polygon points="140,124 300,124 333,172 107,172" fill="#E58A5E"/>
<polygon points="104,176 336,176 369,224 71,224" fill="#EFA989"/>
<polygon points="69,228 371,228 402,272 38,272" fill="#F4C3AC"/>
<polygon points="36,276 404,276 435,320 5,320" fill="#F8D7C7"/>
<text x="220" y="61" fill="#fff" font-size="27" font-weight="800" text-anchor="middle">DP</text>
<text x="220" y="105" fill="#fff" font-size="27" font-weight="800" text-anchor="middle">CP</text>
<text x="220" y="157" fill="#fff" font-size="25" font-weight="700" text-anchor="middle">授業の目的</text>
<text x="220" y="209" fill="#6B2A10" font-size="25" font-weight="700" text-anchor="middle">授業の目標</text>
<text x="220" y="259" fill="#6B2A10" font-size="25" font-weight="700" text-anchor="middle">講義の目標</text>
<text x="220" y="307" fill="#6B2A10" font-size="25" font-weight="700" text-anchor="middle">課題・動画の目標</text>
</svg>
</div>
<div style="flex:1; padding-top:10px;">
<div class="box-info" style="font-size:30px; text-align:center; padding:12px 20px;">DP / CP → 『高等教育の建付け』</div>
<div class="pyr-note" style="margin-top:34px; text-align:center;">上位のものと<b>整合的</b>である、<br>または<b>関係性を説明</b>できる</div>
</div>
</div>

<!--
- 授業の目的・目標は DP/CP といった上位概念とつながる。上位と整合的・関係を説明できることが大切。逆向き設計で上から下へ。
-->

---

<div class="page-title">まとめ</div>

# まとめ

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1;">
<div style="display:flex; align-items:center; gap:14px; margin-bottom:6px;"><span class="tag tag-soft">暗記</span><span style="font-size:34px; font-weight:800;"><span style="color:var(--accent-dark);">授業の目的とは？</span></span></div>
<div style="font-size:30px; margin:0 0 22px 12px;">授業の<b>存在意義</b></div>
<div style="font-size:34px; font-weight:800; color:var(--accent-dark);">目標とは？</div>
<div style="font-size:30px; margin:4px 0 0 12px;">修了後に学習者にできる<br>ようになって欲しい<b style="color:var(--accent-dark);">能力</b></div>
</div>
<img src="./src/fig12-img.png" alt="登山者と山の地図" style="width:300px; align-self:center;">
</div>

<div class="cite" style="margin-top:18px;">参考文献：栗田佳代子, 中村長史 編著 (2023)　<i>『インタラクティブ・ティーチング 実践編2』</i>河合出版</div>

<!--
- まとめ。目的＝授業の存在意義、目標＝修了後にできるようになって欲しい能力。暗記してほしいポイント。
- 参考文献：栗田・中村 編著 (2023)『インタラクティブ・ティーチング 実践編2』河合出版。
-->
