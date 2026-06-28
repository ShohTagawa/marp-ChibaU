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
  /* Bloom表（3領域×6段：低次→高次でグラデーション） */
  .bloom { border-collapse: collapse; font-size: 20px; line-height: 1.3; }
  .bloom th, .bloom td { border: 1px solid #cfcfcf; padding: 5px 9px; vertical-align: middle; }
  .bloom th { background: var(--accent); color: #fff; font-weight: 800; text-align: center; }
  .bloom .axis { background: #f3f3f3; font-weight: 800; color: #555; text-align: center; width: 2.6em; }
  .bloom td b { color: var(--accent-dark); }
  .bloom .verb { font-weight: 800; }
  .bloom.compact td, .bloom.compact th { font-size: 22px; padding: 6px 14px; text-align: center; }
  .bloom .l1 { background: #FBE4EA; } .bloom .l2 { background: #F6CDD7; }
  .bloom .l3 { background: #F1B6C4; } .bloom .l4 { background: #EC9FB1; }
  .bloom .l5 { background: #E7889E; } .bloom .l6 { background: #E2718B; color:#fff; }
  .bloom .l6 b { color: #fff; }
  .arrow-up { writing-mode: vertical-rl; text-orientation: mixed; color: var(--accent); font-weight: 800; }
  /* 吹き出し（先生コメント） */
  .speech { background: var(--accent-soft); border: 2.5px solid var(--accent); border-radius: 14px; padding: 8px 16px; font-size: 21px; line-height: 1.45; color: var(--accent-dark); font-weight: 700; }
  .lvlrow { display: grid; grid-template-columns: 1fr; gap: 9px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">Bloomの教育目標分類</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">教育目標分類を使いこなせるようになる。</span></div>

<!--
- タイトルコール。「Bloomの教育目標分類」を使いこなせるようになる、が今回の達成目標。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# <span style="color:var(--accent-dark)">8年</span>かけて作られた目標の分類

<div class="subhead"><span>教育心理学者Bloomらにより、<b>8年かけて</b>作られた教育における目標の分類</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<table class="bloom">
<tr><th></th><th>認知的領域<br>(知識や思考)</th><th>精神運動的領域<br>(技能やスキル)</th><th>情意的領域<br>(態度)</th></tr>
<tr class="l6"><td class="axis">高次</td><td><b class="verb">創造</b> (学習を応用し、新しい価値を作れる)</td><td></td><td></td></tr>
<tr class="l5"><td class="axis"></td><td><b class="verb">評価</b> (事物・判断等を比較し、評価出来る)</td><td><b class="verb">自然化</b> (習慣的な動作として行える)</td><td><b class="verb">個性化</b> (自身の世界観を持ち行動を促せる)</td></tr>
<tr class="l4"><td class="axis"></td><td><b class="verb">分析</b> (要素に分け、関係性を指摘できる)</td><td><b class="verb">分節化</b> (複数動作を組み合わせ調和できる)</td><td><b class="verb">組織化</b> (複数の価値の相互関係を設定する)</td></tr>
<tr class="l3"><td class="axis"></td><td><b class="verb">応用</b> (他の場面や状況に使用できる)</td><td><b class="verb">精密化</b> (臨機応変な動作が出来る)</td><td><b class="verb">価値づけ</b> (価値を理解し自分のものとする)</td></tr>
<tr class="l2"><td class="axis"></td><td><b class="verb">理解</b> (学習内容を説明出来る)</td><td><b class="verb">巧妙化</b> (示された動作を誤りなく行える)</td><td><b class="verb">反応</b> (新しい現象に能動的に反応する)</td></tr>
<tr class="l1"><td class="axis">低次</td><td><b class="verb">記憶</b> (事実や概念を暗記している)</td><td><b class="verb">模倣</b> (示された動作を真似できる)</td><td><b class="verb">受け入れ</b> (新たな現象に注意を向ける)</td></tr>
</table>
<div style="flex:0 0 230px;">
<div class="box-info" style="font-size:19px; padding:9px 16px;"><b>参照</b><br>1956年に認知的領域、1964年に情意的領域。精神運動領域は1972年の別のグループの仕事。認知的領域はAndersonらの改訂版を使用。</div>
</div>
</div>

<div class="cite">(梶田, 2010や栗田&amp;中村, 2023を元に作成)</div>

<!--
- Bloomらが8年かけて作った3領域×6段の目標分類。認知・精神運動・情意の各領域を、低次（記憶・模倣・受け入れ）から高次（創造・自然化・個性化）へ並べる。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# スキルは目標に沿って<span style="color:var(--accent-dark)">発達</span>する

<div class="subhead"><span>個人のスキルは、<b>教育目標に沿って発達している</b>と考えると、腑に落ちませんか？</div>

<div style="display:flex; gap:40px; align-items:center; margin-top:10px;">
<table class="bloom compact">
<tr><th></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr>
<tr class="l6"><td class="axis">高次</td><td><b>創造</b></td><td></td><td></td></tr>
<tr class="l5"><td class="axis"></td><td>評価</td><td>自然化</td><td>個性化</td></tr>
<tr class="l4"><td class="axis"></td><td>分析</td><td>分節化</td><td>組織化</td></tr>
<tr class="l3"><td class="axis"></td><td>応用</td><td>精密化</td><td>価値づけ</td></tr>
<tr class="l2"><td class="axis"></td><td>理解</td><td>巧妙化</td><td>反応</td></tr>
<tr class="l1"><td class="axis">低次</td><td>記憶</td><td>模倣</td><td>受け入れ</td></tr>
</table>

<div style="display:flex; flex-direction:column; gap:14px; align-items:center;">
<div style="display:flex; align-items:center; gap:14px;"><img src="./src/fig05-img.png" style="height:96px;"><span style="font-size:30px; font-weight:800; color:var(--accent-dark);">棟梁</span></div>
<div style="display:flex; align-items:center; gap:14px;"><img src="./src/fig06-img.png" style="height:108px;"><span style="font-size:30px; font-weight:800;">大工</span></div>
<div style="display:flex; align-items:center; gap:14px;"><img src="./src/fig04-img.png" style="height:96px;"><span style="font-size:30px; font-weight:800; color:#555;">見習い</span></div>
</div>
</div>

<!--
- スキルは教育目標に沿って発達する、と考えると腑に落ちる。見習い→大工→棟梁のように、低次から高次へ積み上がっていくイメージ。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# <span style="color:var(--accent-dark)">②評価</span>の次元<span class="tag tag-design">道具</span>

<div class="subhead"><span><b>Bloomの教育目標をコースデザインの道具として使う</b><br><span style="font-size:22px;"><b>②評価の次元：</b>各次元まで測れるか・課題のねらい考える</span></span></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<table class="bloom compact" style="flex:0 0 auto;">
<tr><th></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr>
<tr class="l6"><td class="axis">高次</td><td><b>創造</b></td><td></td><td></td></tr>
<tr class="l5"><td class="axis"></td><td>評価</td><td>自然化</td><td>個性化</td></tr>
<tr class="l4"><td class="axis"></td><td>分析</td><td>分節化</td><td>組織化</td></tr>
<tr class="l3"><td class="axis"></td><td>応用</td><td>精密化</td><td>価値づけ</td></tr>
<tr class="l2"><td class="axis"></td><td>理解</td><td>巧妙化</td><td>反応</td></tr>
<tr class="l1"><td class="axis">低次</td><td>記憶</td><td>模倣</td><td>受け入れ</td></tr>
</table>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div class="speech" style="align-self:flex-end; text-align:center;">課題種別に応じて<br>評価できるものは変わるよ</div>
<div class="speech">理解と記憶の確認が主<br>なので、筆記試験！</div>
<div class="speech">複数手法を構造化する<br>論述試験と複数手法を<br>応用するレポートかな</div>
<div class="speech" style="margin-right:calc(var(--pip-w) - 60px);">実演や企画書の提出、<br>面接等も必要かも</div>
</div>
</div>

<!--
- 評価の次元：表の各段（次元）まで測れているか、課題のねらいを考える道具に使う。記憶・理解なら筆記試験、分析・評価なら論述・レポート、創造や態度なら実演・企画書・面接など、課題種別を選ぶ。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# <span style="color:var(--accent-dark)">②評価</span>の次元　<span style="font-size:30px;">例)</span><span class="tag tag-design">道具</span>

<div class="subhead"><span><b>Bloomの教育目標をコースデザインの道具として使う</b><br><span style="font-size:22px;"><b>②評価の次元：</b>各次元まで測れるか・課題のねらい考える</span></span></div>

<div style="text-align:center; margin-top:4px;">
<img src="./src/fig08-crop.png" alt="評価の次元の例（英日対照表）" style="max-width:74%; max-height:420px; border:1px solid #ddd;">
</div>

<!--
- 例として、各次元（Remember〜Create 等）に対応する課題種別を英日対照で並べたもの。次元ごとに評価できる課題が変わる。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# <span style="color:var(--accent-dark)">③インストラクション</span>の次元<span class="tag tag-design">道具</span>

<div class="subhead"><span><b>Bloomの教育目標をコースデザインの道具として使う</b><br><span style="font-size:22px;"><b>③インストラクションの次元：</b>その教え方で身につきます？</span></span></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<table class="bloom compact" style="flex:0 0 auto;">
<tr><th></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr>
<tr class="l6"><td class="axis">高次</td><td><b>創造</b></td><td></td><td></td></tr>
<tr class="l5"><td class="axis"></td><td>評価</td><td>自然化</td><td>個性化</td></tr>
<tr class="l4"><td class="axis"></td><td>分析</td><td>分節化</td><td>組織化</td></tr>
<tr class="l3"><td class="axis"></td><td>応用</td><td>精密化</td><td>価値づけ</td></tr>
<tr class="l2"><td class="axis"></td><td>理解</td><td>巧妙化</td><td>反応</td></tr>
<tr class="l1"><td class="axis">低次</td><td>記憶</td><td>模倣</td><td>受け入れ</td></tr>
</table>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div class="speech" style="align-self:flex-end; text-align:center;">単なる講義では<br>高次の目標には<br>到達できないよ</div>
<div class="speech">オンデマンド型の講義<br>で十分かな</div>
<div class="speech">輪読型の授業や実社会<br>の課題を見学する時間<br>は取りたいかも</div>
<div class="speech" style="margin-right:calc(var(--pip-w) - 60px);">アクティブラーニング<br>や外部講師は必須かも</div>
</div>
</div>

<!--
- インストラクションの次元：その教え方で本当に身につくか。低次はオンデマンド講義で十分、中位は輪読や見学、高次はアクティブラーニングや外部講師が必須になりやすい。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# <span style="color:var(--accent-dark)">Fink</span>の意味ある学習分類

<div class="subhead"><span><b>Finkの意味ある学習分類</b><br><span style="font-size:22px;">(Taxonomy of significant learning)</span></span></div>

<div class="box-accent" style="margin-top:4px;"><b>人間性の醸成</b>や、<b>価値観</b>の見出し、<b>学び方自体の学習</b>なども目標に加える立場</div>

<div class="cite" style="margin-left:6px;">Fink (2003) <i>Creating significant leaning experiences</i></div>

<div class="stepbox" style="margin-top:10px; margin-right:calc(var(--pip-w) + 40px);">
<div class="st">複数の学習分類があるので、<br><b>学習に組み込む必要がある領域を含んだモデル</b>を使用する</div>
</div>

<div class="takeaway" style="margin-top:14px; background:var(--accent); color:#fff; border-radius:12px; padding:12px 24px; font-weight:800; font-size:28px;">目標分類を道具として活用し、授業設計に活かす</div>

<!--
- Bloom以外にもFinkの「意味ある学習分類」など複数のモデルがある。人間性・価値観・学び方の学習まで含める立場。最後に：複数の分類を道具として活用し、必要な領域を含むモデルで授業設計に活かす。
-->
