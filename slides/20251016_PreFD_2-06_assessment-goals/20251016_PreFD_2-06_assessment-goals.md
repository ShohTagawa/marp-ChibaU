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
  /* 吹き出し（コミック風）*/
  .bubble { position: relative; display: inline-block; border: 2.5px solid #E08A2B; border-radius: 16px; background: #fff; color: #1a1a1a; font-size: 30px; font-weight: 700; line-height: 1.35; padding: 14px 26px; text-align: center; }
  .bubble.dn::after { content: ""; position: absolute; left: 36px; bottom: -16px; border: 9px solid transparent; border-top-color: #E08A2B; }
  .bubble.up::after { content: ""; position: absolute; left: 36px; top: -16px; border: 9px solid transparent; border-bottom-color: #E08A2B; }
  /* 2D 評価マトリクス（slide 7）*/
  .quad { position: relative; width: 720px; height: 500px; margin: 0 auto 0 40px; }
  .quad .axisV { position: absolute; left: 50%; top: 0; bottom: 0; width: 0; border-left: 3px solid #555; }
  .quad .axisH { position: absolute; top: 50%; left: 0; right: 0; height: 0; border-top: 3px solid #555; }
  .quad .qlab { position: absolute; font-size: 22px; font-weight: 800; color: #333; background: #fff; padding: 0 4px; }
  .quad .qcell { position: absolute; background: #fff; border: 2px solid #bbb; border-radius: 10px; text-align: center; font-size: 21px; font-weight: 700; line-height: 1.3; padding: 6px 4px; box-sizing: border-box; }
  .quad .qcell.hot { background: var(--accent-soft); border-color: var(--accent); color: var(--accent-dark); font-size: 22px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">評価と目標の関係</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">目標に応じた評価方法を理解する。</span></div>

<!--
- タイトルコール。今回の達成目標は「目標に応じた評価方法を理解する」こと。
-->

---

<div class="page-title">評価と目標の関係</div>

# 評価への<span style="color:var(--accent-dark)">よくある不安</span>

<div style="position:absolute; left:120px; top:140px;">
<div class="bubble dn">テストなんて嫌だ…<br>評価されたくない…</div>
</div>

<div class="goal-box" style="margin-top:150px; margin-right:calc(var(--pip-w) + 40px);"><b>達成目標：</b><span class="ind">目標に応じた評価方法を理解する。</span></div>

<div style="position:absolute; left:60px; top:470px;">
<div class="bubble up">成績をつけるのに<br>どんな意義があるの</div>
</div>

<!--
- 学生側には「テストなんて嫌だ／評価されたくない」、教員側には「成績をつける意義は？」という不安がある。本講ではこの関係を解きほぐす。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">頻度軸</span>：総括的評価と形成的評価　<span class="tag tag-ref">参照</span>

<table style="border-collapse:collapse; width:calc(100% - var(--pip-w) - 20px); font-size:20px; margin-top:6px; line-height:1.25;">
<tr>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:3px 10px; width:13%;"></th>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:3px 10px;">形成的評価</th>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:3px 10px;">総括的評価</th>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:3px 10px; font-weight:800;">目的</td>
<td style="border:1px solid #bbb; padding:3px 10px;">学習途上の改善</td>
<td style="border:1px solid #bbb; padding:3px 10px;">達成された成果の測定</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:3px 10px; font-weight:800;">機能</td>
<td style="border:1px solid #bbb; padding:3px 10px;">優れた点，改善点等フィードバック</td>
<td style="border:1px solid #bbb; padding:3px 10px;">合格水準判定</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:3px 10px; font-weight:800;">時期</td>
<td style="border:1px solid #bbb; padding:3px 10px;">学習中</td>
<td style="border:1px solid #bbb; padding:3px 10px;">学習終了後</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:3px 10px; font-weight:800;">成績評価</td>
<td style="border:1px solid #bbb; padding:3px 10px;">原則、含めない</td>
<td style="border:1px solid #bbb; padding:3px 10px;">含める</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:3px 10px; font-weight:800;">範囲</td>
<td style="border:1px solid #bbb; padding:3px 10px;">狭い/学習内容のみ</td>
<td style="border:1px solid #bbb; padding:3px 10px;">広い/発展課題も含む</td>
</tr>
</table>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:8px;">
<div class="box-info" style="flex:1; font-size:19px; padding:8px 18px;">※「どちらか」ではない。<br>　「形成的側面を持った総括的評価」やその逆もあり。<br>※ 一つの授業で両方を組み合わせるのもあり。</div>
<div class="cite" style="align-self:flex-end; white-space:nowrap;">栗田&amp;中村 (2023)  p.18</div>
</div>

<div class="box-accent" style="margin-top:8px; margin-right:calc(var(--pip-w) + 40px); font-weight:800; padding:8px 24px;">主体的な学びには<b>形成的評価の導入も重要</b></div>

<!--
- 評価には頻度の軸がある。総括的評価（学習後・成績に含める）と形成的評価（学習中・改善のためのフィードバック）。どちらか一方ではなく、組み合わせや「形成的側面を持った総括的評価」もある。主体的な学びには形成的評価の導入も重要。
-->

---

<div class="page-title">評価と目標の関係</div>

# そもそも、<span style="color:var(--accent-dark)">なぜ評価は必要</span>？

<div class="box-info" style="display:inline-block; font-size:26px; font-weight:800; margin:4px 0;">良い成績を取れる人を見分けるため？</div>
<div style="font-size:26px; font-weight:800; margin:8px 0 14px 40px;"><span style="color:var(--accent);">➡ 否</span>。受験パラダイムは忘れよう。</div>

<div class="goal-box" style="padding:10px 24px; font-size:24px; margin:8px 0;"><b style="color:var(--accent-dark);">学修者を支援するため</b></div>

<div class="stepbox" style="margin:8px 0; padding:8px 24px;">
<div class="st" style="font-size:24px; margin:5px 0;"><b>学修者</b>：目標到達度に基づく主体的な学びのため</div>
<div class="st" style="font-size:24px; margin:5px 0;"><b>教員</b>：理解度を確認し支援するため</div>
<div class="st" style="font-size:24px; margin:5px 0;"><b>教員</b>：授業を改善するため</div>
</div>

<div class="goal-box" style="padding:10px 24px; font-size:24px; margin:8px 0; margin-right:calc(var(--pip-w) + 40px);"><b style="color:var(--accent-dark);">学修の質を保証をするため (成績)</b></div>

<!--
- 評価は「良い成績の人を見分ける」ためではない。受験パラダイムは忘れる。学修者を支援するため＝主体的な学び・理解度確認・授業改善のため、そして学修の質保証（成績）のためにある。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">目標到達度</span>を評価する

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.5;">

<div class="goal-box" style="padding:12px 22px; font-size:24px; margin:8px 0;"><b>目標</b>とは、授業で出来るようになって欲しいことの一覧</div>

<div class="box-accent" style="margin:10px 0;"><b>評価</b>とは、<b>目標に対しどれほど到達出来たか</b>を可視化したもの</div>

<div class="why-callout" style="margin:10px 0;">
<div class="wh">評価対象と評価方法は目標と対応</div>
→逆向き設計でも同じ話がありました
</div>

</div>
<div style="flex:1; text-align:center; position:relative;">
<img src="./src/fig01-img.png" alt="山を登る人" style="height:230px;">
<div class="box-info" style="font-size:20px; margin-top:6px; text-align:center;"><b>評価</b>：あと30 mで目標到達<br>道の右側の方が安全だよ</div>
</div>
</div>

<!--
- 目標＝授業で出来るようになって欲しいことの一覧。評価＝目標にどれほど到達したかの可視化。だから評価対象・評価方法は目標と対応する（逆向き設計と同じ）。登山に喩えると「あと30mで頂上、右側が安全」という案内が評価。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">評価を設定する</span>

<div class="stepbox" style="margin-top:14px;">
<div class="st">① <b>頻度</b>：どのくらい評価はマメに行うべきか？</div>
<div class="st">② <b>種類</b>：どの方法で評価するのか？</div>
<div class="st">③ <b>性質</b>：その評価で目標到達は測れるのか？</div>
</div>

<div class="box-warn" style="margin-top:16px; margin-right:calc(var(--pip-w) + 40px);"><b>✔ シラバスの目標一覧</b>と<b>教育目標分類</b>を眺めながら決める</div>

<div class="box-warn" style="margin-top:12px; margin-right:calc(var(--pip-w) + 40px);"><b>✔ </b>目標が曖昧で評価が決まらないなら、<b>目標に立ち返って目標を明確化する</b></div>

<!--
- 評価設定の3観点：①頻度（どれだけマメに）②種類（どの方法で）③性質（目標到達を測れるか）。シラバスの目標一覧と教育目標分類を見ながら決め、目標が曖昧なら目標に立ち返って明確化する。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">評価の種類</span>

<div style="position:relative;">
<div class="quad">
<div class="axisV"></div>
<div class="axisH"></div>
<div class="qlab" style="left:50%; top:-12px; transform:translateX(-50%);">複雑</div>
<div class="qlab" style="left:50%; bottom:-12px; transform:translateX(-50%);">単純</div>
<div class="qlab" style="left:-44px; top:50%; transform:translateY(-50%);">筆記</div>
<div class="qlab" style="right:-44px; top:50%; transform:translateY(-50%);">実演</div>

<div class="qcell hot" style="left:130px; top:22px; width:300px;">パフォーマンス課題<br>(小論文、作品制作、発表等)</div>
<div class="qcell" style="left:30px; top:150px; width:140px;">論述式問題<br>レポート</div>
<div class="qcell" style="left:475px; top:150px; width:175px;">実技テスト<br>面接/口頭試問</div>
<div class="qcell" style="left:35px; top:275px; width:125px;">記述式<br>問題</div>
<div class="qcell" style="left:545px; top:275px; width:110px;">観察<br>試験</div>
<div class="qcell" style="left:35px; top:395px; width:125px;">選択式<br>問題</div>
<div class="qcell" style="left:460px; top:395px; width:110px;">心理<br>テスト</div>
</div>

<div class="box-accent" style="position:absolute; right:30px; top:20px; width:230px; font-size:20px; text-align:center; padding:10px 14px;"><b>高次</b>の目標を測りやすい</div>
<div class="box-info" style="position:absolute; right:30px; top:120px; width:230px; font-size:19px; text-align:center; padding:8px 12px;">組み合わせて測ることも<b>可</b></div>
<div class="cite" style="position:absolute; right:0; bottom:-6px; text-align:right;">田中耕治（2010）「<i>よくわかる教育評価</i>」(ミネルヴァ書房)を改変</div>
</div>

<!--
- 評価の種類を「単純⇔複雑」「筆記⇔実演」の2軸で整理。左下＝選択式・記述式問題、右下＝心理テスト・観察試験、中央上＝パフォーマンス課題は高次の目標を測りやすい。組み合わせて測ることも可。田中耕治(2010)を改変。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">ルーブリック</span>　<span class="cite" style="font-size:18px;">栗田 &amp; 中村（2024）<i>インタラクティブ・ティーチング 実践編３</i></span>

<div class="box-accent" style="margin:6px 0; font-size:22px;"><b>✔採点道具の一つで、課題を構成要素に分け、　要素ごとに評価基準を満たすレベルを説明した表</b><br>✔パフォーマンス課題・レポート・実技等の評価の可視化</div>

<div style="font-size:21px; font-weight:700; margin:8px 0 4px;">「<b style="color:var(--accent-dark);">課題内容</b>：6分模擬授業」を評価するためのルーブリック　<span style="color:#777; font-size:18px;">(スティーブンス＆レビ, 2014)</span></div>

<div style="display:flex; gap:10px; align-items:flex-start;">
<table style="border-collapse:collapse; flex:1; font-size:19px; line-height:1.35;">
<tr>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:5px 8px;">評価観点</th>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:5px 8px;">素晴らしい(2)</th>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:5px 8px;">合格(1)</th>
<th style="border:1px solid #bbb; background:var(--accent-soft); color:var(--accent-dark); padding:5px 8px;">不十分(0)</th>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 8px; font-weight:800;">分量</td>
<td style="border:1px solid #bbb; padding:5px 8px;"></td>
<td style="border:1px solid #bbb; padding:5px 8px;">6分間で丁度</td>
<td style="border:1px solid #bbb; padding:5px 8px;">過剰か少ない</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 8px; font-weight:800;">目標と<br>目的</td>
<td style="border:1px solid #bbb; padding:5px 8px;">明確かつ内容が<br>一致していた</td>
<td style="border:1px solid #bbb; padding:5px 8px;">明確さか内容の何れかに改善点</td>
<td style="border:1px solid #bbb; padding:5px 8px;">明確さ・内容の何れも不十分</td>
</tr>
<tr>
<td style="border:1px solid #bbb; padding:5px 8px; font-weight:800;">レベル<br>設定</td>
<td style="border:1px solid #bbb; padding:5px 8px;">手を伸ばせば届くレベルだった</td>
<td style="border:1px solid #bbb; padding:5px 8px;">一部高度・容易な箇所があった</td>
<td style="border:1px solid #bbb; padding:5px 8px;">極端に高度・容易であった</td>
</tr>
</table>
<div style="display:flex; flex-direction:column; gap:34px; padding-top:6px;">
<div class="tag tag-soft" style="font-size:18px; text-align:center;">評価<br>尺度</div>
<div class="tag tag-soft" style="font-size:18px; text-align:center;">評価<br>基準</div>
</div>
</div>

<div class="box-accent" style="margin-top:8px; margin-right:calc(var(--pip-w) + 40px); font-weight:800;">ルーブリックを適切に設計し高次の課題も扱おう</div>

<!--
- ルーブリック＝採点道具の一つ。課題を構成要素に分け、要素ごとに評価基準を満たすレベルを説明した表。横が評価尺度、縦の観点ごとに評価基準。パフォーマンス課題・レポート・実技等を可視化できる。適切に設計し高次の課題も扱おう。栗田&中村(2024)、スティーブンス&レビ(2014)。
-->

---

<div class="page-title">評価と目標の関係</div>

# まとめ

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1.6;">

<div class="stepbox" style="margin:10px 0;">
<div class="st">① 評価は、<b>学習者を支援するため</b>にある</div>
</div>
<div class="stepbox" style="margin:10px 0;">
<div class="st">② 目標と<b>評価方法</b>は、<b>強い対応関係</b>を持つ</div>
</div>
<div class="stepbox" style="margin:10px 0;">
<div class="st">③ 目標の<b>レベル感に合わせた評価方法</b>を　選ぶ</div>
</div>

</div>
<img src="./src/fig04-img.png" alt="レポートを見る学生" style="height:230px; align-self:center;">
</div>

<div class="box-warn" style="margin-top:8px; margin-right:calc(var(--pip-w) + 40px);">得点にこだわるのではなく、<b>学習者の主体的な学びに活きるという評価の価値</b>をクラスで共有しましょう</div>

<!--
- まとめ。①評価は学習者を支援するためにある、②目標と評価方法は強い対応関係を持つ、③目標のレベル感に合わせた評価方法を選ぶ。得点ではなく「主体的な学びに活きる」という評価の価値をクラスで共有しよう。
-->
