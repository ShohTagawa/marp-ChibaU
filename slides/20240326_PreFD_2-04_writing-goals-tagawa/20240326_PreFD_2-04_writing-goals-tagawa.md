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
  /* 価値の3色（道具的=青, 内発的=橙, 達成=赤）。スライド5・7で一貫 */
  .v-do { color: var(--tag-blue); font-weight: 800; }
  .v-nai { color: #C8741A; font-weight: 800; }
  .v-tas { color: var(--accent); font-weight: 800; }
  /* 例文ボックス（黒枠・白地） */
  .exbox { border: 2px solid #2a2a2a; border-radius: 12px; padding: 12px 22px; font-size: 23px; line-height: 1.55; margin: 12px 0; }
  .exbox b { color: #1a1a1a; }
  /* 吹き出し（学習者の素朴な疑問） */
  .bubble { position: relative; display: inline-block; border: 2.5px solid var(--accent-dark); border-radius: 18px; padding: 16px 30px; color: var(--accent-dark); font-size: 30px; font-weight: 700; line-height: 1.4; text-align: center; background: #fff; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">目的と目標を書く</div>
</div>

<div class="goal-box" style="max-width:880px; margin:6px auto 14px;"><b>達成目標：</b><span class="ind">目的と目標を適切に提案することが出来る。</span></div>

<div class="box-info" style="max-width:760px; margin:0 auto; text-align:left;"><b style="color:var(--tag-green)!important;">Hint</b>　シラバス作成課題の<b style="color:var(--accent-dark);">目的</b>と<b style="color:var(--accent-dark);">目標</b>を書きながら受講すること</div>

<!--
- まずは、タイトルコール。シラバス作成課題の目的と目標を書きながら受講するのがコツ。
-->

---

<div class="page-title">目的と目標を書く</div>

# 目的と目標を書く

<div style="display:flex; flex-direction:column; align-items:center; gap:30px; margin-top:18px;">

<div class="bubble" style="margin-left:120px;">読んだ事ないし、<br>適当でよいのでは？</div>

<div class="goal-box" style="width:92%; margin:4px 0;"><b>達成目標：</b><br><span class="ind" style="margin-left:0;">目的と目標を適切に提案することが出来る。</span></div>

<div class="bubble" style="margin-right:240px;">ルールなんて<br>あるの？</div>

</div>

<!--
- 「読んだことないし適当でよいのでは？」「ルールなんてあるの？」——実はルール（書き方）がある、という導入。
-->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref" style="vertical-align:middle;">参照</span> <span style="border-bottom:4px solid #2a2a2a;">書き方の共通事項</span>

<div style="font-size:33px; margin:20px 0 14px;">学習者の「<b style="color:var(--accent-dark);">主体的学び✨</b>」の支援になること</div>

<div class="stepbox"><div class="st">①主語は<b>学習者</b>とすること</div></div>
<div class="stepbox"><div class="st">②動詞に<b>注意</b>すること</div></div>

<div class="cite" style="margin-top:18px;"><span style="color:var(--accent);font-size:25px;font-weight:800;">参考文献：目的・目標記載のための動詞例</span><br>(佐藤編2010、中島編2016、栗田編2023)</div>

<!--
- 共通事項は2つ。①主語は学習者にする、②動詞に注意する。すべては「主体的学び」の支援のため。動詞例は参考文献を参照。
-->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref" style="vertical-align:middle;">参照</span> 目的を書くヒント

<div style="font-size:27px; margin:6px 0 4px;"><b style="color:var(--accent-dark);">①</b>「<b>ために</b>」を上手く使う</div>
<div style="font-size:27px; margin:4px 0 8px;"><b style="color:var(--accent-dark);">②</b> <b style="color:var(--accent-dark);">多様な価値</b>が含まれていることを示す</div>

<table style="border-collapse:collapse; width:100%; font-size:21px; line-height:1.4;">
<tr style="background:var(--accent-soft); color:var(--accent-dark);">
<th style="border:1.5px solid #bbb; padding:5px 10px;">価値の種類</th>
<th style="border:1.5px solid #bbb; padding:5px 10px;">意味</th>
<th style="border:1.5px solid #bbb; padding:5px 10px;">目的達成後の例</th>
</tr>
<tr>
<td style="border:1.5px solid #bbb; padding:5px 10px;"><span class="v-tas">達成価値</span></td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">習得と達成から満足が得られたか</td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">一人で出来るようになった・一冊読んだ</td>
</tr>
<tr>
<td style="border:1.5px solid #bbb; padding:5px 10px;"><span class="v-nai">内発的価値</span></td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">授業のタスクそのものに価値を感じられるか</td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">議論がためになる・プログラミングが楽しい</td>
</tr>
<tr>
<td style="border:1.5px solid #bbb; padding:5px 10px;"><span class="v-do">道具的価値</span></td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">高次の目標達成に役立つか</td>
<td style="border:1.5px solid #bbb; padding:5px 10px;">資格取得に必要・卒論や就職後役立つ</td>
</tr>
</table>

<div class="box-warn" style="margin:10px 0; font-weight:400;">価値が多いほどモチベーションが高まるとされる (例：<b>自動車教習</b>🚗)</div>

<div style="font-size:27px; margin:4px 0;"><b style="color:var(--accent-dark);">③</b> <b style="color:var(--accent-dark);">DP</b>との関連性を考える</div>

<!--
- 目的を書くヒント：①「ために」を使う、②達成・内発的・道具的の多様な価値を示す、③DP（ディプロマポリシー）との関連を考える。価値が多いほど動機づけが高まる。
-->

---

<div class="page-title">目的と目標を書く</div>

# 目的 <span style="font-size:28px;">(= 授業の存在意義)</span>の例

<div class="exbox">
<b>(私が、)</b>一生健やかな人生を歩む<b>ために </b>(<span class="v-do">道具的価値</span>)、<br>
筋トレの背景にある理論、医学的エビデンス、方法を<b>理解し</b>、<br>
実践を楽しみながら(<span class="v-nai">内発的価値</span>)、<br>
一人で正しく筋トレする<b>能力を身につける</b>(<span class="v-tas">達成価値</span>) 。
</div>

<div class="exbox">
<b>(私が、)</b>未来の大学教員として活躍する<b>ために</b>(<span class="v-do">道具的価値</span>)、<br>
学習者主体の高等教育の実現や学修支援に必要な概念を<b>理解し</b>、<br>
(課題などのアクティビティを楽しみながら：<span class="v-nai">内発的価値</span>)、<br>
教育を担当する際に<b>応用できるようになる</b>(<span class="v-tas">達成価値</span>)。
</div>

<div class="exbox" style="margin-right:calc(var(--pip-w) + 16px);">
<b>(私が、)</b>患者さんに寄り添える医療従事者となる<b>ために</b>(<span class="v-do">道具的価値</span>) 、<br>
多様なケーススタディと議論を通して、<br>
倫理観を涵養する(<span class="v-tas">達成価値</span>) 。
</div>

<!--
- 目的の文例3つ。いずれも「〜のために（道具的価値）／〜を理解し（内発的価値）／〜できる能力（達成価値）」の形で多様な価値を織り込む。
-->

---

<div class="page-title">目的と目標を書く</div>

# <span class="tag tag-ref" style="vertical-align:middle;">参照</span> 目標を書くヒント

<div class="box-info" style="position:absolute; top:118px; right:40px; width:330px; text-align:center; font-size:21px;">授業の結果、学修者が修了後に<br>できるようになって欲しい能力</div>

<div class="stepbox"><div class="st"><b>①</b>観察可能<b>(=評価可能)な行動</b>で記載</div></div>
<div class="stepbox"><div class="st"><b>②</b>一つの文章に一つの目標 <span style="font-size:21px; color:#666;">（シラバス全体で、多くても10個）</span></div></div>
<div class="stepbox"><div class="st"><b>③</b>現実的かつジャンプすれば届く距離</div></div>

<div style="font-size:25px; font-weight:700; margin:14px 0 6px;">難易度調整：優しすぎず、難しすぎず。</div>

<div style="display:flex; gap:18px; align-items:center; margin-right:calc(var(--pip-w) + 16px);">
<img src="./src/fig01-img.png" alt="その道のプロ" style="height:150px;">
<div class="box-warn" style="flex:1; font-weight:400;">あなたが<b>その道のプロ</b>であれば、<b>目標は比較的簡単</b>に書けます。但し、学習した当時は難しかったことを忘れ、今や簡単になっているので<b>難易度設定には要注意</b></div>
</div>

<!--
- 目標を書くヒント：①観察可能（=評価可能）な行動で書く、②一文一目標（全体で多くても10個）、③現実的かつ少しジャンプすれば届く距離。プロほど難易度を見誤りやすいので要注意。
-->

---

<div class="page-title">目的と目標を書く</div>

# 目標 <span style="font-size:26px;">(= 出来る様になって欲しい能力)</span>の例

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<div style="font-size:23px; color:#666; margin-bottom:4px;">(私が、)</div>
<div class="exbox" style="margin-top:0; font-size:22px;">
①筋トレの主要5動作と対応する種目を<b>説明出来る</b>。<br>
②各種目における自身の10RMを実践から<b>測定する</b>。<br>
③正しいトレーニング方法を<b>模倣する。</b><br>
④ペアの筋トレスキルの向上に<b>協力する</b>。<br>
⑤疲れや怪我の時の筋トレプランを<b>構成出来る</b>。<br>
⑥各動作にて意識すべき部位と怪我の注意点を<b>指摘出来る</b>。<br>
⑦生涯健康の為の筋トレの必要性について、<br>
　クラスでの討議に積極的に参加し<b>持論を持つ</b>。
</div>
</div>

<div class="box-warn" style="width:240px; flex-shrink:0; font-weight:400;"><b>注意</b><br>評価と照らし合わせ、それで全てか考えよ。</div>

</div>

<div style="display:flex; align-items:center; gap:12px; margin-top:6px; margin-right:calc(var(--pip-w) + 16px);">
<div style="font-size:20px; font-weight:700; line-height:1.2;">劇的<br>Before<br>After</div>
<img src="./src/fig02-img.png" alt="筋トレ前" style="height:108px;">
<img src="./src/fig04-img.png" alt="筋トレ" style="height:108px;">
<div style="font-size:26px; font-weight:800; color:var(--accent-dark);">→</div>
<div style="text-align:center;"><div style="font-size:24px; font-weight:700;">できるように<br>なる</div><div class="tag tag-soft" style="font-size:20px; margin-top:4px;">授業</div></div>
<img src="./src/fig03-img.png" alt="筋トレ後" style="height:108px;">
</div>

<!--
- 目標の文例。観察可能な動詞（説明出来る・測定する・模倣する…）で記述。評価と照らして「これで全てか」を確認すること。
-->

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

# まとめ

<div class="wrap3">
<div class="ln"><span class="no">①</span> 目的と目標には、<b style="color:var(--accent-dark);">書き方がある</b></div>
<div class="ln"><span class="no">②</span> まずは、<b style="color:var(--accent-dark);">練習してみる</b>　<span style="font-size:24px;">動詞例の表 <span class="tag tag-ref">参照</span> のスライド</span></div>
<div class="ln"><span class="no">③</span> 学習者の「<b style="color:var(--accent-dark);">主体的学び✨</b>」の支援を目指すことを忘れずに</div>
</div>

<div class="cite" style="margin-top:24px;"><b style="color:var(--accent-dark);font-size:22px;">参考文献</b>：栗田佳代子, 中村長史 編著 (2023)<br><span style="margin-left:7em;">『<i>インタラクティブ・ティーチング 実践編2</i>』河合出版</span></div>

<!--
- まとめ。①目的と目標には書き方がある、②まずは練習してみる（動詞例の表を参照）、③主体的学びの支援を目指すことを忘れずに。
-->
