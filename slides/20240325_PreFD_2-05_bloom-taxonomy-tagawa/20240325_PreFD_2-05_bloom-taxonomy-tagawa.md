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
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* Bloom 教育目標分類の表（このデック専用） */
  table.bloom { border-collapse: collapse; font-size: 19px; line-height: 1.25; }
  table.bloom th, table.bloom td { border: 1px solid #cfd6df; padding: 5px 9px; text-align: left; vertical-align: middle; }
  table.bloom thead th { background: var(--accent); color: #fff; font-weight: 800; text-align: center; font-size: 19px; }
  table.bloom .axis { background: #F3F5F8; color: #5a5f66; font-weight: 800; text-align: center; width: 46px; }
  table.bloom td b { color: #1a1a1a; }
  table.bloom .lv { font-weight: 800; }
  table.bloom .dim { color: #9aa1ab; }
  table.bloom .desc { color: #555; font-size: 17px; }
  table.bloom .hi { background: var(--accent-soft); }
  /* スライド6の詳細表は更にコンパクトに */
  table.bloom.detail { font-size: 16px; }
  table.bloom.detail th, table.bloom.detail td { padding: 3px 8px; }
  table.bloom.detail thead th { font-size: 16px; line-height: 1.2; }
  table.bloom.detail .desc { font-size: 15px; }
  /* 吹き出し（先生のコメント） */
  .bubble { background: #fff; border: 2.5px solid var(--accent); border-radius: 14px; padding: 9px 16px; font-size: 21px; line-height: 1.4; box-shadow: 0 2px 6px rgba(0,0,0,.08); position: relative; }
  .bubble b { color: var(--accent-dark); }
  .bubble.gray { border-color: #9aa1ab; }
  .bubble.gray b { color: #444; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">Bloomの教育目標分類</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">教育目標分類を使いこなせるようになる。</span></div>

<!--
- タイトルコール。Bloomの教育目標分類を使いこなせるようになる、が今回の達成目標。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# Bloomの教育目標分類　<span class="tag tag-ref">参照</span>

<div class="box-info" style="position:absolute; top:96px; right:40px; width:430px; font-size:18px; line-height:1.45;"># 1956年に認知的領域、1964年に情意的領域。精神運動領域は1972年の別のグループの仕事。認知的領域はAndersonらの改訂版を使用。</div>

<div class="box-accent" style="margin:8px 0 12px; width:760px;">教育心理学者Bloomらにより、<br><b>8年かけて#作られた教育における目標の分類</b></div>

<table class="bloom">
<thead><tr><th class="axis"></th><th>認知的領域<br>(知識や思考)</th><th>精神運動的領域<br>(技能やスキル)</th><th>情意的領域<br>(態度)</th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b class="lv">創造</b> <span class="desc">(学習を応用し、新しい価値を作れる)</span></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis"></td><td><b class="lv">評価</b> <span class="desc">(事物・判断等を比較し、評価出来る)</span></td><td><b class="lv">自然化</b> <span class="desc">(習慣的な動作として行える)</span></td><td><b class="lv">個性化</b> <span class="desc">(自身の世界観を持ち行動を促せる)</span></td></tr>
<tr><td class="axis"></td><td><b class="lv">分析</b> <span class="desc">(要素に分け、関係性を指摘できる)</span></td><td><b class="lv">分節化</b> <span class="desc">(複数動作を組み合わせ調和できる)</span></td><td><b class="lv">組織化</b> <span class="desc">(複数の価値の相互関係を設定する)</span></td></tr>
<tr><td class="axis"></td><td><b class="lv">応用</b> <span class="desc">(他の場面や状況に使用できる)</span></td><td><b class="lv">精密化</b> <span class="desc">(臨機応変な動作が出来る)</span></td><td><b class="lv">価値づけ</b> <span class="desc">(価値を理解し自分のものとする)</span></td></tr>
<tr><td class="axis"></td><td><b class="lv">理解</b> <span class="desc">(学習内容を説明出来る)</span></td><td><b class="lv">巧妙化</b> <span class="desc">(示された動作を誤りなく行える)</span></td><td><b class="lv">反応</b> <span class="desc">(新しい現象に能動的に反応する)</span></td></tr>
<tr><td class="axis">低次</td><td><b class="lv">記憶</b> <span class="desc">(事実や概念を暗記している)</span></td><td><b class="lv">模倣</b> <span class="desc">(示された動作を真似できる)</span></td><td><b class="lv">受け入れ</b> <span class="desc">(新たな現象に注意を向ける)</span></td></tr>
</tbody>
</table>

<div class="cite">(梶田, 2010や栗田&中村, 2023を元に作成)</div>

<!--
- 認知・精神運動・情意の3領域×6段階。8年かけて作られた目標分類。低次（記憶）から高次（創造）へ。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# Bloomの教育目標分類

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 auto;">
<table class="bloom">
<thead><tr><th class="axis"></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b class="lv">創造</b></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis hi">評</td><td class="hi"><b class="lv">評価</b></td><td class="hi"><b class="lv">自然化</b></td><td class="hi"><b class="lv">個性化</b></td></tr>
<tr><td class="axis"><b>分析</b></td><td><b class="lv">分析</b></td><td><b class="lv">分節化</b></td><td><b class="lv">組織化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">応用</b></td><td><b class="lv">精密化</b></td><td><b class="lv">価値づけ</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">理解</b></td><td><b class="lv">巧妙化</b></td><td><b class="lv">反応</b></td></tr>
<tr><td class="axis">低次</td><td><b class="lv">記憶</b></td><td><b class="lv">模倣</b></td><td><b class="lv">受け入れ</b></td></tr>
</tbody>
</table>
</div>

<div style="flex:1;">

<div class="box-accent" style="font-size:23px; margin-bottom:14px;">個人のスキルは、<b>教育目標に沿って発達している</b><br>と考えると、腑に落ちませんか？</div>

<div style="display:flex; flex-direction:column; gap:2px;">
<div style="display:flex; align-items:center; gap:12px;"><img src="./src/fig01-img.png" style="height:96px;"><span style="font-size:24px; font-weight:800;">棟梁</span></div>
<div style="display:flex; align-items:center; gap:12px;"><img src="./src/fig06-img.png" style="height:96px;"><span style="font-size:24px; font-weight:800;">大工</span></div>
<div style="display:flex; align-items:center; gap:12px;"><img src="./src/fig04-img.png" style="height:96px;"><span style="font-size:24px; font-weight:800;">見習い</span></div>
</div>

</div>
</div>

<!--
- スキルは目標に沿って発達する。見習い→大工→棟梁の熟達は、低次→高次の階層と重なる。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# 道具として使う <span style="font-size:26px;">①目標の次元</span>

<div class="box-accent" style="font-size:21px; margin:4px 0 10px; width:840px;"><b>Bloomの教育目標をコースデザインの道具として使う</b><br><b>①目標の次元：</b>クラスのレベルや構造を考える</div>

<div style="display:flex; gap:26px; align-items:flex-start;">

<div style="flex:0 0 auto;">
<table class="bloom">
<thead><tr><th class="axis"></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b class="lv">創造</b></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis"></td><td><b class="lv">評価</b></td><td><b class="lv">自然化</b></td><td><b class="lv">個性化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">分析</b></td><td><b class="lv">分節化</b></td><td><b class="lv">組織化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">応用</b></td><td><b class="lv">精密化</b></td><td><b class="lv">価値づけ</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">理解</b></td><td><b class="lv">巧妙化</b></td><td><b class="lv">反応</b></td></tr>
<tr><td class="axis">低次</td><td><b class="lv">記憶</b></td><td><b class="lv">模倣</b></td><td><b class="lv">受け入れ</b></td></tr>
</tbody>
</table>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div style="display:flex; gap:12px; align-items:flex-start;">
<img src="./src/fig07-img.png" style="height:110px;">
<div class="bubble gray" style="font-size:18px;">授業内容の<br>見直しにも！</div>
</div>
<div class="bubble"><b>一年生の授業</b>だから、<br>低次を中心にしよう</div>
<div class="bubble"><b>大学院の統計学</b>だから<br>評価と分節化まで。<br>態度は評価しない</div>
<div class="bubble"><b>起業の実践論</b>なので、<br>創造体験に集中しよう</div>
</div>

</div>

<!--
- ①目標の次元：クラスのレベルや構造を、表のどこを狙うかで言語化する。授業内容の見直しにも使える。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# 道具として使う <span style="font-size:26px;">②評価の次元</span>

<div class="box-accent" style="font-size:21px; margin:4px 0 10px; width:840px;"><b>Bloomの教育目標をコースデザインの道具として使う</b><br><b>②評価の次元：</b>各次元まで測れるか・課題のねらい考える</div>

<div style="display:flex; gap:26px; align-items:flex-start;">

<div style="flex:0 0 auto;">
<table class="bloom">
<thead><tr><th class="axis"></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b class="lv">創造</b></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis"></td><td><b class="lv">評価</b></td><td><b class="lv">自然化</b></td><td><b class="lv">個性化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">分析</b></td><td><b class="lv">分節化</b></td><td><b class="lv">組織化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">応用</b></td><td><b class="lv">精密化</b></td><td><b class="lv">価値づけ</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">理解</b></td><td><b class="lv">巧妙化</b></td><td><b class="lv">反応</b></td></tr>
<tr><td class="axis">低次</td><td><b class="lv">記憶</b></td><td><b class="lv">模倣</b></td><td><b class="lv">受け入れ</b></td></tr>
</tbody>
</table>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div class="bubble gray" style="align-self:flex-start; font-size:18px;">課題種別に応じて<br>評価できるものは変わるよ</div>
<div class="bubble">理解と記憶の確認が主<br>なので、筆記試験！</div>
<div class="bubble">複数手法を構造化する<br>論述試験と複数手法を<br>応用するレポートかな</div>
<div class="bubble">実演や企画書の提出、<br>面接等も必要かも</div>
</div>

</div>

<!--
- ②評価の次元：各次元まで測れるか、課題のねらいを考える。狙う段階に応じて評価手法が変わる。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# 道具として使う <span style="font-size:26px;">②評価の次元（例）</span>

<div class="box-accent" style="font-size:19px; margin:2px 0 6px; padding:8px 22px; width:900px;"><b>Bloomの教育目標をコースデザインの道具として使う</b>　<b>②評価の次元：</b>各次元まで測れるか・課題のねらい考える</div>

<div style="font-size:20px; font-weight:800; color:var(--accent-dark); margin:0 0 2px;">例)</div>

<table class="bloom detail">
<thead><tr><th class="axis"></th><th>知識 (認知的領域)<br><span style="font-weight:600;">Cognitive domain (knowledge-based)</span></th><th>技能 (精神運動的領域)<br><span style="font-weight:600;">Psychomotor domain (action-based)</span></th><th>態度 (情意的領域)<br><span style="font-weight:600;">Affective domain (emotion-based)</span></th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b>創造 Create</b><br><span class="desc">6分間模擬授業制作⑦</span></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis"></td><td><b>評価 Evaluate</b><br><span class="desc">模擬授業評価⑧</span></td><td class="dim">自然化 Naturalization</td><td class="dim">個性化 Characterizing</td></tr>
<tr><td class="axis"></td><td><b>分析 Analyze</b><br><span class="desc">授業参観計画書④・ 報告書⑤</span></td><td><b>分節化 Articulation</b><br><span class="desc">6分間模擬授業制作⑦</span></td><td><b>組織化 Organizing</b><br><span class="desc">シラバスの作成③</span></td></tr>
<tr><td class="axis"></td><td><b>応用 Apply</b><br><span class="desc">クラスデザインシート 作成③、シラバス作成②</span></td><td><b>精密化 Precision</b><br><span class="desc">クラスデザインシート 作成③</span></td><td><b>価値づけ Valuing</b><br><span class="desc">1 min 自己紹介①<br>「 教育の抱負」レポート ①/⑧</span></td></tr>
<tr><td class="axis"></td><td><b>理解 Understand</b><br><span class="desc">(授業コンテンツそのもの)</span></td><td><b>巧妙化 Manipulation</b><br><span class="desc">シラバス作成②</span></td><td><b>反応 Responding</b><br><span class="desc">リアクションペーパー④・ ⑥</span></td></tr>
<tr><td class="axis">低次</td><td><b>記憶 Remember</b><br><span class="desc">著作権理解度テスト ⑦</span></td><td><b>模倣 Imitation</b><br><span class="desc">授業参観報告書⑤</span></td><td><b>受け入れ Receiving</b><br><span class="desc">(授業コンテンツその)</span></td></tr>
</tbody>
</table>

<!--
- 評価の次元の具体例。各セルに、どの課題（①〜⑧）がどの段階を測るかを割り付けている。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# 道具として使う <span style="font-size:26px;">③インストラクションの次元</span>

<div class="box-accent" style="font-size:20px; margin:4px 0 10px; width:880px;"><b>Bloomの教育目標をコースデザインの道具として使う</b><br><b>③インストラクションの次元：</b>その教え方で身につきます？</div>

<div style="display:flex; gap:26px; align-items:flex-start;">

<div style="flex:0 0 auto;">
<table class="bloom">
<thead><tr><th class="axis"></th><th>知識や思考</th><th>技能やスキル</th><th>態度</th></tr></thead>
<tbody>
<tr><td class="axis">高次</td><td><b class="lv">創造</b></td><td class="dim"></td><td class="dim"></td></tr>
<tr><td class="axis"></td><td><b class="lv">評価</b></td><td><b class="lv">自然化</b></td><td><b class="lv">個性化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">分析</b></td><td><b class="lv">分節化</b></td><td><b class="lv">組織化</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">応用</b></td><td><b class="lv">精密化</b></td><td><b class="lv">価値づけ</b></td></tr>
<tr><td class="axis"></td><td><b class="lv">理解</b></td><td><b class="lv">巧妙化</b></td><td><b class="lv">反応</b></td></tr>
<tr><td class="axis">低次</td><td><b class="lv">記憶</b></td><td><b class="lv">模倣</b></td><td><b class="lv">受け入れ</b></td></tr>
</tbody>
</table>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">
<div class="bubble gray" style="align-self:flex-start; font-size:18px;">単なる講義では<br>高次の目標には<br>到達できないよ</div>
<div class="bubble">オンデマンド型の講義<br>で十分かな</div>
<div class="bubble">輪読型の授業や実社会<br>の課題を見学する時間<br>は取りたいかも</div>
<div class="bubble">アクティブラーニング<br>や外部講師は必須かも</div>
</div>

</div>

<!--
- ③インストラクションの次元：その教え方で本当に身につくか。狙う段階が高いほど能動的な学習が必要。
-->

---

<div class="page-title">Bloomの教育目標分類</div>

# Finkの意味ある学習分類

<div class="box-accent" style="margin:6px 0 14px; width:760px;"><b>Finkの意味ある学習分類</b><br>(Taxonomy of significant learning)</div>

<div class="goal-box" style="font-size:25px; margin:0 0 6px;"><b>人間性の醸成</b>や、<b>価値観</b>の見出し、<br><b>学び方自体の学習</b>なども目標に加える立場</div>

<div class="cite">Fink (2003) Creating significant leaning experiences</div>

<div class="flowrow" style="margin-top:14px;">
<div class="farrow" style="color:var(--accent); font-size:40px;">⇒</div>
<div style="font-size:26px; font-weight:800; line-height:1.45;">複数の学習分類があるので、<br><span style="color:var(--accent-dark);">学習に組み込む必要がある領域を</span><br><span style="color:var(--accent-dark);">含んだモデル</span>を使用する</div>
</div>

<div class="takeaway" style="margin-top:16px;">目標分類を道具として活用し、授業に活かす</div>

<!--
- Finkの分類は、人間性・価値観・学び方の学習まで目標に含める。必要な領域を含んだモデルを選び、道具として授業に活かす。
-->
