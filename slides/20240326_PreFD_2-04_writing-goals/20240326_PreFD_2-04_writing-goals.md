---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  /* デック固有：配色＝ガーネット (#CC003D)。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 吹き出し（角丸＋しっぽ）：ガーネット枠 */
  .bubble { position: relative; display: inline-block; border: 3px solid var(--accent-dark); border-radius: 28px; padding: 18px 36px; color: var(--accent-dark); font-size: 40px; font-weight: 700; line-height: 1.35; text-align: center; background: #fff; }
  .bubble::after { content: ""; position: absolute; width: 26px; height: 26px; background: #fff; border-right: 3px solid var(--accent-dark); border-bottom: 3px solid var(--accent-dark); }
  .bubble.down::after { left: 30px; bottom: -16px; transform: rotate(45deg); }
  .bubble.up::after   { left: 56px; top: -16px; transform: rotate(-135deg); }
  /* 価値テーブル */
  .vtbl { border-collapse: collapse; width: 100%; font-size: 21px; line-height: 1.45; }
  .vtbl th { background: #E8845B; color: #fff; padding: 6px 12px; text-align: left; font-weight: 800; }
  .vtbl td { border-bottom: 1px solid #e3d5cf; padding: 5px 12px; vertical-align: top; }
  .vtbl td.k { font-weight: 800; color: #1a1a1a; white-space: nowrap; }
  .vtbl .car { color: var(--accent); font-weight: 700; }
  /* 目的例の枠（破線・カラー注記） */
  .pbox { border: 2.5px dashed var(--accent); border-radius: 12px; padding: 12px 22px; margin: 12px 0; font-size: 23px; line-height: 1.5; }
  .pbox .ann { font-weight: 800; }
  .ann-do { color: #1A6BB0; }   /* 道具的価値 */
  .ann-in { color: #2E9E5B; }   /* 内発的価値 */
  .ann-ac { color: var(--accent); } /* 達成価値 */
  .hintlab { display:inline-block; color:#fff; background:var(--tag-blue); font-weight:800; font-size:21px; border-radius:8px; padding:4px 14px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">目的と目標を書く</div>
</div>

<div class="goal-box" style="max-width:880px; margin:6px auto 18px;"><b>達成目標：</b><span class="ind">目的と目標を適切に提案することが出来る。</span></div>

<div style="text-align:center; font-size:24px; line-height:1.5;"><span style="color:#2E9E5B; font-weight:800;">Hint</span>　シラバス作成課題の<b>目的</b>と<b>目標</b>を書きながら受講すること</div>

<!-- まずは、タイトルコール。 -->

---

<div class="page-title">目的と目標を書く</div>

# 目的と目標を書く

<div style="display:flex; justify-content:center; margin:18px 0 0 0;">
<div class="bubble down">読んだ事ないし、<br>適当でよいのでは？</div>
</div>

<div class="goal-box" style="max-width:880px; margin:18px 0;"><b>達成目標：</b><span class="ind">目的と目標を適切に提案することが出来る。</span></div>

<div style="display:flex; margin:8px 0 0 40px;">
<div class="bubble up">ルールなんて<br>あるの？</div>
</div>

<!-- 目的・目標の書き方なんてルールあるの？という素朴な疑問から始める。 -->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref">参照</span> <span style="text-decoration:underline; text-underline-offset:8px;">書き方の共通事項</span>

<div style="font-size:32px; margin:14px 0 18px;">学習者の「<b>主体的学び✨</b>」の支援になること</div>

<div class="goal-box" style="border-color:#888; margin:10px 0;">
<div style="font-size:30px; margin:4px 0;">①主語は<b>学習者</b>とすること</div>
<div style="font-size:30px; margin:4px 0;">②動詞に<b>注意</b>すること</div>
</div>

<div class="cite" style="font-size:22px; margin-top:18px;"><span style="color:var(--accent); font-weight:800;">参考文献：目的・目標記載のための動詞例</span><br>(佐藤編2010、中島編2016、栗田編2023)</div>

<!-- 共通事項は2つ。主語は学習者、動詞に注意。いずれも主体的学びの支援が目的。 -->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref">参照</span> 目的を書くヒント

<div style="font-size:26px; margin:2px 0;">①<b>「ために」</b>を上手く使う</div>
<div style="font-size:26px; margin:2px 0;">②<b>多様な価値</b>が含まれていることを示す</div>

<table class="vtbl" style="margin:6px 0; margin-right:calc(var(--pip-w) - 60px);">
<tr><th>価値の種類</th><th>意味</th><th>目的達成後の例</th></tr>
<tr><td class="k">達成価値</td><td>習得と達成から満足が得られたか</td><td>一人で出来た・一冊読んだ<br><span class="car">🚗一人で運転/教本読破/試験合格</span></td></tr>
<tr><td class="k">内発的価値</td><td>授業のタスクそのものに価値を感じられるか</td><td>議論がためになる・作業が楽しい<br><span class="car">🚗運転楽しい/教官との話有意義</span></td></tr>
<tr><td class="k">道具的価値</td><td>高次の目標達成に役立つか</td><td>資格取得・卒論や就職後役立つ<br><span class="car">🚗免許取得/旅行出来る/就職に有利</span></td></tr>
</table>

<div class="box-warn" style="display:inline-block; font-size:21px; padding:5px 16px; margin:2px 0;">価値が多いほどモチベーションが高まるとされる (例：<b>自動車教習</b>🚗)</div>

<div style="font-size:26px; margin:4px 0;">③ <b>DPとの関連性</b>を考える</div>

<!-- 目的を書くヒント3つ。特に「多様な価値」（達成・内発・道具）が含まれるとモチベが高まる。 -->

---

<div class="page-title">目的と目標を書く</div>

# 目的 <span style="font-size:30px;">(= 授業の存在意義)</span>の例

<div class="pbox">
<span class="ann ann-do">(私が、)</span>一生健やかな人生を歩む<b>ために <span class="ann-do">(道具的価値)</span></b>、<br>
筋トレの背景にある理論、医学的エビデンス、方法を<b>理解し</b>、実践を楽しみながら<b><span class="ann-in">(内発的価値)</span></b>、一人で正しく筋トレする<b>能力を身につける<span class="ann-ac">(達成価値)</span></b> 。
</div>

<div class="pbox">
<b>(私が、)</b>未来の大学教員として活躍する<b>ために<span class="ann-do">(道具的価値)</span></b>、学習者主体の高等教育の実現や学修支援に必要な概念を<b>理解し</b>、<b>(</b>課題などのアクティビティを楽しみながら：<span class="ann-in">内発的価値</span><b>)</b>、教育を担当する際に<b>応用できるようになる<span class="ann-ac">(達成価値)</span></b>。
</div>

<div class="pbox" style="margin-right:calc(var(--pip-w) - 30px);">
<b>(私が、)</b>患者さんに寄り添える医療従事者となる<b>ために<span class="ann-do">(道具的価値)</span></b> 、多様なケーススタディと議論を通して、倫理観を涵養する<b><span class="ann-ac">(達成価値)</span> </b>。
</div>

<!-- 目的の例を3つ。道具的・内発的・達成の各価値がどこに含まれるかを色で示す。 -->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref">参照</span> 目標を書くヒント

<div class="box-info" style="position:absolute; top:118px; right:40px; width:340px; font-size:21px; text-align:center;">授業の結果、学修者が修了後に<br>できるようになって欲しい能力</div>

<div style="font-size:28px; margin:10px 0;">①<b>観察可能(=評価可能)な行動</b>で記載</div>

<div style="display:flex; align-items:center; gap:18px; margin:10px 0;">
<div style="font-size:28px;">②<b>一つの文章に一つの目標</b></div>
<div class="box-info" style="font-size:20px; padding:5px 16px;">シラバス全体で、<br>多くても10個</div>
</div>

<div style="font-size:28px; margin:10px 0;">③<b>現実的かつジャンプすれば届く距離</b></div>

<div style="font-size:24px; margin:6px 0 0 40px;">▶ 難易度調整：優しすぎず、難しすぎず。</div>

<div style="display:flex; align-items:flex-start; gap:18px; margin-top:14px;">
<img src="./src/fig01-img.png" alt="プロの先生" style="height:130px;">
<div class="box-accent" style="font-size:22px; margin-right:calc(var(--pip-w) - 40px);">あなたが<b>その道のプロ</b>であれば、<b>目標は比較的簡単</b>に書けます。<br><span style="font-size:20px;">但し、学習した当時は難しかったことを忘れ、今や簡単になっているので<b>難易度設定には要注意</b></span></div>
</div>

<!-- 目標を書くヒント3つ。観察可能な行動で、1文1目標、ジャンプすれば届く難易度に。 -->

---

<div class="page-title">目的と目標を書く</div>

# 目標 <span style="font-size:30px;">(= 出来る様になって欲しい能力)</span>の例

<div style="font-size:22px; margin:-2px 0 4px;">(私が、)</div>

<div style="font-size:25px; line-height:1.5;">
①筋トレの主要5動作と対応する種目を<b>説明出来る</b>。<br>
②各種目における自身の10RMを実践から<b>測定する</b>。<br>
③正しいトレーニング方法を<b>模倣する。</b><br>
④ペアの筋トレスキルの向上に<b>協力する</b>。<br>
⑤疲れや怪我の時の筋トレプランを<b>構成出来る</b>。<br>
⑥各動作にて意識すべき部位と怪我の注意点を<b>指摘出来る</b>。<br>
⑦生涯健康な人生における筋トレの必要性について、<br>
　クラスでの討議に積極的に参加し、<b>持論を持つ</b>。
</div>

<div class="box-warn" style="position:absolute; top:118px; right:36px; width:300px; font-size:21px;"><b>注意</b><br>評価と照らし合わせ、それで全てか考えよ。</div>

<div style="position:absolute; left:24px; bottom:18px; display:flex; align-items:flex-end; gap:10px;">
<div style="font-size:18px; line-height:1.3; text-align:center;"><b>劇的<br>Before<br>After</b></div>
<img src="./src/fig04-img.png" alt="before" style="height:110px;">
<div style="font-size:24px; line-height:1.3; text-align:center;"><b>できるように<br>なる</b><br><span style="font-size:22px;">授業</span></div>
<img src="./src/fig03-img.png" alt="after" style="height:120px;">
</div>

<!-- 目標の例を①〜⑦で。動詞は観察可能なものに。評価と照合し漏れがないか確認。 -->

---

<div class="page-title">まとめ</div>

# まとめ

<div style="font-size:34px; margin:18px 0;">①目的と目標には、<b>書き方がある</b></div>

<div style="font-size:34px; margin:18px 0;">②まずは、<b>練習してみる</b><br>
<span style="font-size:30px; margin-left:1.4em;">動詞例の表 <span class="tag tag-ref">参照</span> のスライド</span></div>

<div style="font-size:34px; margin:18px 0;">③学習者の「<b>主体的学び✨</b>」の<br>
<span style="margin-left:1.4em;">支援を目指すことを忘れずに</span></div>

<div class="cite" style="font-size:21px; margin-top:14px;"><b>参考文献</b>：栗田佳代子, 中村長史 編著 (2023)<br><span style="margin-left:7.2em;"><i>『インタラクティブ・ティーチング 実践編2』</i>河合出版</span></div>

<!-- まとめ。①書き方がある、②まず練習、③主体的学びの支援を忘れずに。 -->
