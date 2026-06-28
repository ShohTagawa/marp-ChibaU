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
  /* 吹き出し：尾を付けた角丸枠 */
  .bubble { position: relative; display: inline-block; border-radius: 22px; padding: 18px 36px; font-size: 34px; line-height: 1.4; text-align: center; }
  .bubble.out { border: 3px solid var(--accent-dark); background: #fff; color: var(--accent-dark); }
  .bubble.solid { background: #2E6E8E; color: #fff; font-weight: 700; }
  .b-tail-d::after { content: ""; position: absolute; bottom: -18px; left: 60px; border-width: 18px 16px 0 0; border-style: solid; border-color: var(--accent-dark) transparent transparent transparent; }
  .b-tail-u::before { content: ""; position: absolute; top: -18px; left: 90px; border-width: 0 16px 18px 0; border-style: solid; border-color: transparent transparent var(--accent-dark) transparent; }
  /* 価値テーブル */
  table.vtbl { border-collapse: collapse; width: 100%; font-size: 21px; margin: 6px 0; }
  table.vtbl th { background: var(--accent); color: #fff; padding: 6px 12px; text-align: left; font-weight: 700; }
  table.vtbl td { background: var(--accent-soft); border: 2px solid #fff; padding: 7px 12px; vertical-align: top; line-height: 1.4; }
  table.vtbl td:first-child { font-weight: 700; color: var(--accent-dark); white-space: nowrap; }
  /* ピラミッド */
  .pyramid { display: flex; flex-direction: column; align-items: center; }
  .pyramid .row { color: #fff; font-weight: 700; text-align: center; padding: 9px 0; border-bottom: 2px solid #fff; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">目的と目標を書く</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><br><span class="ind">目的と目標を適切に提案することが出来る</span></div>

<!--
- タイトルコール。「目的と目標を書く」。達成目標は、目的と目標を適切に提案できるようになること。
-->

---

<div class="page-title">目的と目標を書く</div>

# <span style="color:var(--accent-dark)">目的と目標</span>を書く

<div class="bubble out b-tail-d" style="position:absolute; top:115px; left:430px;">読んだ事ないし、<br>適当でよいのでは？</div>

<div class="goal-box" style="position:absolute; top:330px; left:40px; right:60px;"><b>達成目標：</b><br><span class="ind">目的と目標を適切に提案することが出来る</span></div>

<div class="bubble out b-tail-u" style="position:absolute; top:540px; left:90px;">ルールなんて<br>あるの？</div>

<!--
- 「読んだ事ないし適当でよいのでは？」「ルールなんてあるの？」という素朴な疑問から入る。
-->

---

<div class="page-title">目的と目標を書く</div>

# 書き方の<span style="border-bottom:4px solid var(--accent-dark);">共通事項</span>

<div class="lead-note" style="font-size:30px;">学習者の「<b style="color:var(--accent-dark);">主体的学び✨</b>」を支援する</div>

<div class="goal-box" style="margin-top:26px; font-size:34px;">①主語は<b>学習者</b>とすること</div>

<div class="goal-box" style="margin-top:18px; font-size:34px;">②動詞に<b>注意</b>すること</div>

<!--
- 共通事項は2つ。①主語は学習者、②動詞に注意する。狙いは学習者の「主体的学び」の支援。
-->

---

<div class="page-title">目的と目標を書く</div>

# 目的を書く<span style="color:var(--accent-dark)">ヒント</span>

<div style="font-size:27px; line-height:1.5;">
<div><b>①「ために」</b>を上手く使う</div>
<div style="margin-top:4px;"><b>② 多様な価値</b>が含まれていることを示す</div>
</div>

<table class="vtbl">
<tr><th style="width:8.5em;">価値の種類</th><th>意味</th><th>目的達成後の例</th></tr>
<tr><td>達成価値</td><td>習得と達成から満足が得られたか</td><td>一人で出来るようになった・一冊読んだ</td></tr>
<tr><td>内発的価値</td><td>授業のタスクそのものに価値を感じられるか</td><td>議論がためになる・プログラミングが楽しい</td></tr>
<tr><td>道具的価値</td><td>高次の目標達成に役立つか</td><td>資格取得に必要・卒論や就職後役立つ</td></tr>
</table>

<div style="font-size:27px;"><b>③ DPとの関連性</b>を考える</div>

<div class="box-accent" style="margin-top:8px; font-size:21px; line-height:1.5;">研究現場や社会に出てから熱力学を使いこなすために、岩石・鉱物・人工物へ熱力学の基礎法則を適用する方法を理解し、一人で問題解決できる力を身につける。</div>

<!--
- 目的を書くヒント。①「ために」を使う、②達成価値・内発的価値・道具的価値という多様な価値を示す、③DPとの関連性を考える。下は熱力学の記述例。
-->

---

<div class="page-title">目的と目標を書く</div>

# 目標を書く<span style="color:var(--accent-dark)">ヒント</span>

<div class="goal-box" style="margin-top:20px; font-size:33px;">①<b>観察可能</b>(=<b>評価可能</b>)<b>な行動</b>で記載する</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:18px;">
<div class="goal-box" style="flex:1; font-size:33px; margin:0;">②<b>一つの文章に一つの目標</b></div>
<div class="bubble solid" style="font-size:23px; padding:12px 22px;">シラバス全体で、<br>多くても10個</div>
</div>

<div class="goal-box" style="margin-top:18px; font-size:33px;">③<b>現実的かつジャンプすれば届く距離</b></div>

<!--
- 目標を書くヒント。①観察可能（評価可能）な行動で書く、②一文一目標（全体で多くても10個）、③現実的かつジャンプすれば届く距離。
-->

---

<div class="page-title">目的と目標</div>

# <span style="color:var(--accent-dark)">目標</span>とは

<div class="goal-box" style="margin-top:10px; font-size:32px;"><b>目標</b>：終了後に学習者にできるようになって欲しい<b>能力</b><br><span style="font-size:26px;">(Goal, Learning outcomes)</span></div>

<div style="font-size:27px; margin:14px 0 6px;">授業の結果、学習者が何を学び、何ができるようになっているのか。</div>

<div style="margin-top:10px;">
<img src="./src/fig20-beforeafter.png" alt="劇的 Before After：授業前後の学習者" style="height:215px;">
</div>

<!--
- 目標とは、終了後に学習者にできるようになって欲しい能力（Learning outcomes）。授業を経て劇的にBefore→Afterが変わる。
-->

---

<div class="page-title">目的と目標を書く</div>

# <span style="color:var(--accent-dark)">目標</span>とは　<span class="tag tag-soft" style="font-size:22px;">差分：評価</span>

<div class="box-info" style="font-size:20px; line-height:1.5;">例： <b>地球内部の熱力学▶</b>地球内部の相転移が起こる条件を記述出来る。<br>例： <b>医療倫理</b>▶諸問題を討議し、一般的な葛藤の構造を解釈する。</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">
<div style="flex:1;">
<div style="font-size:24px; font-weight:700; margin-bottom:6px;">知っておくべきこと</div>
<div class="stepbox" style="margin:6px 0;"><div class="st">① 目的を<b>具体化</b>したもの</div></div>
<div class="stepbox" style="margin:6px 0;"><div class="st">② <b>学生の自学自習</b>に役立つ</div></div>
<div class="stepbox" style="margin:6px 0;"><div class="st">③ <b>評価項目</b>と一致させる</div></div>
</div>
<img src="./src/fig21-beforeafter-eval.png" alt="授業前後と評価の差分" style="width:440px; align-self:center; flex:0 0 auto;">
</div>

<!--
- 目標は評価との差分でもある。知っておくべきこと：①目的を具体化、②自学自習に役立つ、③評価項目と一致。例は地球内部の熱力学・医療倫理。
-->

---

<div class="page-title">目的と目標</div>

# 目的と<span style="color:var(--accent-dark)">目標</span>

<table class="vtbl" style="font-size:25px; max-width:760px;">
<tr><td style="width:11em;">この<b>授業</b>の目標</td><td>シラバスに使用</td></tr>
<tr><td>この<b>講義</b>の目標</td><td>各回の冒頭に説明</td></tr>
<tr><td>この<b>動画</b>の目標</td><td>各動画の冒頭に説明</td></tr>
<tr><td>この<b>課題</b>の目標</td><td>課題のデザインに使用</td></tr>
</table>

<div style="display:flex; gap:60px; margin-top:22px; font-size:28px; font-weight:700;">
<div>各段階で<br><span style="color:var(--accent-dark);">様々な目標</span>がある</div>
<div><span style="color:var(--accent-dark);">目標を定めて</span>、<br>デザインする</div>
</div>

<!--
- 目標は段階ごとにある。授業＝シラバス、講義＝各回冒頭、動画＝各動画冒頭、課題＝デザインに使用。各段階で様々な目標を定めてデザインする。
-->

---

<div class="page-title">目的と目標</div>

# 授業の目的・目標と<span style="color:var(--accent-dark)">上位概念</span>

<div style="display:flex; gap:40px; align-items:flex-start;">

<div style="flex:0 0 480px;">
<div class="pyramid">
<div class="row" style="width:24%; background:#C0451E; border-radius:6px 6px 0 0;">DP</div>
<div class="row" style="width:36%; background:#CE5A2E;">CP</div>
<div class="row" style="width:50%; background:#D87B4E;">授業の<b>目的</b></div>
<div class="row" style="width:64%; background:#E0926A;">授業の<b>目標</b></div>
<div class="row" style="width:80%; background:#E7A988;">講義の<b>目標</b></div>
<div class="row" style="width:96%; background:#EFC2A8; border-bottom:none;">課題・動画の<b>目標</b></div>
</div>
</div>

<div style="flex:1; margin-top:30px;">
<div class="box-info" style="font-size:26px; line-height:1.5;">DP: Diploma policy<br>CP: Curriculum policy</div>
<div style="font-size:30px; font-weight:700; margin-top:28px; line-height:1.55;"><b style="color:var(--accent-dark);">上位のものと整合的</b>である、または<b style="color:var(--accent-dark);">関係性を説明</b>できる</div>
</div>

</div>

<!--
- 授業の目的・目標は上位概念（DP/CP）の下にある。下位の目標は、上位のものと整合的、または関係性を説明できることが大切。
-->

---

<div class="page-title">まとめ</div>

# まとめ

<div style="display:flex; gap:30px; align-items:flex-start;">

<div style="flex:1;">
<div class="goal-box" style="font-size:28px;"><b>授業の目的とは？</b><br><span class="ind">存在意義</span></div>

<div class="goal-box" style="margin-top:16px; font-size:28px;"><b>目標とは？</b><br><span class="ind">終了後に学習者にできるようになって欲しい<b>能力</b></span></div>
</div>

<img src="./src/fig22-mountain.png" alt="目的（山頂）と目標（道標）" style="height:300px; align-self:center;">

</div>

<div class="cite">参考文献：栗田佳代子 (2017) 『<i>インタラクティブ・ティーチング</i>』 河合出版<br>栗田佳代子(2021) <i>Interactive Teaching</i>, Coursera by 東京大学</div>

<!--
- まとめ。授業の目的とは存在意義。目標とは終了後に学習者にできるようになって欲しい能力。山頂＝目的、道標＝目標のイメージ。参考文献：栗田佳代子。
-->
