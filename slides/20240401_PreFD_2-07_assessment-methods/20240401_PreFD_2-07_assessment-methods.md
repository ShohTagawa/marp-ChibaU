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
  .assess-tbl { border-collapse: collapse; font-size: 22px; margin: 8px 0; }
  .assess-tbl th, .assess-tbl td { border: 1px solid #c9ccd2; padding: 7px 14px; text-align: center; }
  .assess-tbl th { background: var(--accent); color: #fff; font-weight: 800; }
  .assess-tbl td:first-child, .assess-tbl th:first-child { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; text-align: left; white-space: nowrap; }
  .assess-tbl .ok { color: var(--accent-dark); font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">評価の方法</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">評価の性質という観点から説明できる。</span></div>

<!--
- タイトルコール。「評価の方法」を、評価の性質という観点から説明できるようになるのが今回の達成目標。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">頻度軸</span>：総括的評価と形成的評価 <span class="tag tag-ref">参照</span>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1.55;">

<table class="assess-tbl" style="width:100%;">
<tr><th></th><th>形成的評価</th><th>総括的評価</th></tr>
<tr><td>目的</td><td>学習途上の改善</td><td>達成された成果の測定</td></tr>
<tr><td>機能</td><td>優れた点，改善点等<br><span class="ok">フィードバック</span></td><td>合格水準判定</td></tr>
<tr><td>時期</td><td>学習<span class="ok">中</span></td><td>学習終了<span class="ok">後</span></td></tr>
<tr><td>成績評価</td><td>原則、含めない</td><td>含める</td></tr>
<tr><td>範囲</td><td>狭い/学習内容のみ</td><td>広い/発展課題も含む</td></tr>
</table>

</div>
<div style="flex:1; margin-top:6px;">

<div class="box-info"><b>※</b>「どちらか」ではない。<br>「形成的側面を持った総括的評価」やその逆もあり。<br><b>※</b> 一つの授業で両方を組み合わせるのもあり。</div>

</div>
</div>

<div class="box-accent" style="margin-top:14px; margin-right:calc(var(--pip-w) + 56px);">主体的な学びには<b>形成的評価の導入も重要</b></div>

<div class="cite" style="text-align:right;">栗田&amp;中村 (2023)  p.18</div>

<!--
- 頻度軸は形成的評価と総括的評価。目的・機能・時期・成績評価・範囲で対比。どちらか一方ではなく組み合わせるのもあり。主体的な学びには形成的評価の導入も重要。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">エビングハウスの忘却曲線</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:-6px;">
<div style="position:relative; flex:0 0 470px;">
<img src="./src/fig01-img.png" alt="The Forgetting Curve（忘却曲線）" style="width:470px;">
<div style="position:absolute; left:102px; top:96px; color:#E0762B; font-size:30px; font-weight:800;">↑</div>
<div style="position:absolute; left:80px; top:146px; font-size:20px;">復習</div>
<div style="position:absolute; left:198px; top:72px; color:#E0762B; font-size:30px; font-weight:800;">↑</div>
<div style="position:absolute; left:250px; top:96px; font-size:20px;">復習</div>
</div>
<div style="flex:1; margin-top:40px;">

<div class="box-warn" style="font-weight:400; color:#1a1a1a; background:#fff; border-color:#E0762B;">形成的評価で忘れない<br>道を間違わない</div>

<div style="margin-top:80px; font-size:24px;">忘れにくくなる</div>
<div style="margin-top:96px; font-size:24px;">忘れた</div>

</div>
</div>

<div class="cite" style="margin-top:0;">Ebbinghaus, H. (1885)など　https://commons.wikimedia.org/wiki/File:ForgettingCurve.svg</div>

<div class="box-accent" style="margin-top:4px; margin-right:calc(var(--pip-w) + 56px); font-size:27px;">形成的評価で<b>復習を促す</b>ことも重要</div>

<!--
- 忘却曲線。復習のたびに記憶が戻り、忘れにくくなる。形成的評価で復習を促すことも重要。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">性質軸</span>：目標に応じた評価方法 <span class="tag tag-ref">参照</span>

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1;">

<table class="assess-tbl" style="width:100%;">
<tr><th></th><th>知識</th><th>技能</th><th>態度</th></tr>
<tr><td>客観試験</td><td class="ok">◯(低次)</td><td></td><td></td></tr>
<tr><td>論述試験</td><td class="ok">◯(高次)</td><td></td><td></td></tr>
<tr><td>レポート</td><td class="ok">◯(高次)</td><td class="ok">◯</td><td class="ok">◯</td></tr>
<tr><td>発表</td><td class="ok">◯(高次)</td><td class="ok">◯</td><td class="ok">◯</td></tr>
<tr><td>口述試験/面接</td><td class="ok">◯</td><td></td><td class="ok">◯</td></tr>
<tr><td>観察評価</td><td class="ok">◯</td><td class="ok">◯</td><td class="ok">◯</td></tr>
<tr><td>実演・制作</td><td></td><td class="ok">◯</td><td class="ok">◯</td></tr>
<tr><td>心理テスト</td><td></td><td></td><td class="ok">◯</td></tr>
</table>

</div>
<div style="flex:0 0 300px; margin-top:30px;">

<div class="box-accent"><b>目標にあった評価方法</b>を選ぶ</div>

</div>
</div>

<div class="cite" style="text-align:right;">中島 (2016)  p.36を参考</div>

<!--
- 性質軸。知識・技能・態度という目標に応じて評価方法を選ぶ。客観試験は知識(低次)、レポートや発表は3領域すべてを評価できる。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">性質軸</span>：目標に応じた評価方法

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div class="subhead"><span style="color:var(--accent-dark);">例：柑橘2/3年苗木の栽培方法</span></div>

<div class="box-info" style="font-size:22px; padding:8px 18px;"><b>目標：</b>苗を植えて2/3年目の柑橘に必要な作業を1人で計画し実施出来る。</div>

</div>
<img src="./src/fig02-img.png" alt="柑橘の収穫" style="height:150px; margin-top:-6px;">
</div>

<div class="stepbox" style="margin:8px 0; padding:10px 24px;">
<div class="st" style="font-size:24px; margin:2px 0;"><b>①知識&gt;記憶・理解</b></div>
<div style="font-size:22px;">1年間の必要な作業の一覧を<b>客観試験して記憶・理解を促す</b>(順番並び替え・作業の理由)</div>
</div>

<div class="stepbox" style="margin:8px 0; padding:10px 24px;">
<div class="st" style="font-size:24px; margin:2px 0;"><b>②知識&gt;応用・分析</b>と<b>技能&gt;精密化</b></div>
<div style="font-size:22px;">剪定作業・水やり実習での<b>観察評価</b></div>
</div>

<div class="stepbox" style="margin:8px 0; padding:10px 24px; margin-right:calc(var(--pip-w) + 30px);">
<div class="st" style="font-size:24px; margin:2px 0;"><b>③知識&gt;創造</b>と<b>技能&gt;分節化</b>と<b>態度&gt;価値づけ</b></div>
<div style="font-size:22px;">作業の効果/効率を上げるためのチーム探究活動における<b>レポートと発表</b></div>
</div>

<!--
- 柑橘栽培を例に、①記憶・理解は客観試験、②応用・分析と技能は観察評価、③創造・態度はレポートと発表、と目標の段階に応じて評価方法を選ぶ。
-->

---

<div class="page-title">評価の方法</div>

# <span style="color:var(--accent-dark)">設定軸</span>：何を評価するべきか <span class="tag tag-ref">参照</span>

<div class="stepbox" style="margin:8px 0; padding:8px 24px;">
<div class="st" style="font-size:25px; margin:2px 0;">①<b>目標に対しどれほど到達出来たか</b>を測れるもの</div>
<div style="font-size:22px;">目的/目標と無関係な負担の多い課題や測れない課題を多数出題しない</div>
</div>

<div class="stepbox" style="margin:8px 0; padding:8px 24px;">
<div class="st" style="font-size:25px; margin:2px 0;">②<b>学生の主体的な学びを促す</b>もの</div>
<div style="font-size:22px;">フィードバックや評価実施自体が学びに繋がると良い</div>
</div>

<div class="stepbox" style="margin:8px 0; padding:8px 24px; margin-right:calc(var(--pip-w) + 30px);">
<div class="st" style="font-size:25px; margin:2px 0;">③<b>授業の目的・目標の達成において、重要なもの</b></div>
<div style="font-size:22px;">評価を行う箇所→<b>学習者が良く学び、良く経験出来る箇所</b><br>そのため、授業上重要な点・価値ある点(=目的・目標)について<b>重点的(かつ満遍なく)</b>設定する</div>
</div>

<div class="box-warn" style="margin-top:8px; font-weight:400; color:#1a1a1a; margin-right:calc(var(--pip-w) + 30px); font-size:21px;">具体的な問題設定自体に関するTipsはあるものの、<br><b>各分野の先行事例</b>や<b>教科書の例題</b>、<b>自身の体験</b>、<b>過去の結果</b>から設定可能と考えます。</div>

<!--
- 設定軸。①目標への到達を測れる、②主体的な学びを促す、③目的・目標の達成において重要、という観点で評価箇所を設定する。
-->

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

# まとめ

<div class="wrap3" style="font-size:30px; line-height:1.55;">
<div style="margin:14px 0;"><span class="no">頻度軸：</span><b>総括的評価</b>と<b>形成的評価</b>を組み合わせる</div>
<div style="margin:14px 0;"><span class="no">性質軸：</span>目標に応じた評価方法を選ぶ</div>
<div style="margin:14px 0;"><span class="no">設定軸：</span><b>目的・目標の達成において重要</b>、<br><span style="display:inline-block; margin-left:3.6em;">かつ<b>学生の主体的な学びを促す</b></span><br><span style="display:inline-block; margin-left:3.6em;">点を評価する</span></div>
</div>

<div class="box-warn" style="margin-top:16px; font-weight:400; color:#1a1a1a; margin-right:calc(var(--pip-w) + 30px);">全部の評価方法を授業で実施するのは無理なので、<br>各軸を意識し、<b>適切に取捨選択するのが肝要</b>です</div>

<!--
- まとめ。頻度軸・性質軸・設定軸の3軸を意識し、全部はできないので適切に取捨選択するのが肝要。
-->
