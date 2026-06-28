---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* slide6 LLMステップ図 */
  .llm-flow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #FBEFE2; border-radius: 12px; padding: 10px 12px; }
  .llm-col { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .llm-col .step-h { font-size: 18px; font-weight: 800; color: #444; }
  .llm-node { width: 92%; text-align: center; border-radius: 7px; padding: 4px 0; font-size: 18px; font-weight: 700; }
  .llm-tok { background: #fff; border: 1.5px solid #999; color: #222; }
  .llm-in  { background: #5BA84A; color: #fff; }
  .llm-pre { background: #fff; border: 1.5px solid #888; color: #222; }
  .llm-dec { background: #8E2C8E; color: #fff; line-height: 1.25; }
  .llm-out { background: #5BA84A; color: #fff; }
  .llm-arrow { color: #666; font-size: 16px; line-height: 1; margin: -2px 0; }
  .chartcol img { display: block; width: 100%; margin-bottom: 4px; border: 1px solid #eee; border-radius: 6px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="display:flex; align-items:center; justify-content:center; gap:14px; flex-wrap:wrap;"><img src="./src/fig01-img.png" alt="Gemini" style="height:78px;"> を用いた</div>
<div class="title-big">シラバス作成支援について</div>
</div>

<div class="title-foot" style="grid-template-columns:1fr; text-align:center;">
<div class="title-meta">
<div class="title-date" style="font-size:30px; font-weight:800; color:#555;">2025/12</div>
<div style="font-weight:800;">高等教育センター 質保証・FD部</div>
<div>田川 翔</div>
</div>
</div>

<!--
[NOTE] Geminiを用いたシラバス作成支援についての回。高等教育センター 質保証・FD部 田川。
-->

---

<div class="page-title">Gemとはなにか？</div>

# Gem = <span style="color:var(--accent-dark)">Gemini</span>を用いたカスタムAIエキスパート

<div class="box-info" style="margin-top:26px; font-size:30px; padding:24px 32px;">

● <b>千葉大 Google Workspaceの標準機能</b>

● <b>自分が生成AIに指示した振る舞いで生成AIが動く</b>
<div style="font-size:24px; font-weight:400; margin:6px 0 4px 1.4em;">○ しかも、学内にリンクの形で、作ったエキスパートを共有出来る</div>

● <b>機密情報の取扱いが可能</b>

</div>

<!--
[NOTE] Gem＝Geminiを用いたカスタムAIエキスパート。千葉大Workspaceの標準機能で、機密情報も扱える。
-->

---

<div class="page-title">試行：シラバス”事前”チェック</div>

# シラバスを<span style="color:var(--accent-dark)">事前に確認</span>するGem

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-accent" style="margin-top:0;"><b>ご自由に</b>お使いになれます<br>ログは、他の方に共有<b>されません</b></div>

</div>
<img src="./src/fig04-img.png" alt="QRコード" style="width:118px; height:118px;">
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">出来ること</div>
<ul>
<li>● <b>シラバスのプレチェック</b>　○ PDFアップロード可</li>
<li>● <b>シラバスの表現の相談</b>　○ 壁打ち・質問する</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h" style="background:#888;">出来ないこと</div>
<ul>
<li>● <b>シラバス全体の作成</b>　○ あくまで支援”者”</li>
<li>● <b>正解の作成</b>　○ 最終確認はご自身で</li>
</ul>
</div>
</div>

<div class="goal-box" style="text-align:center; margin-top:14px; padding:10px 28px; font-size:26px;"><b>シラバス作成の伴走が可能です</b></div>

<!--
[NOTE] シラバスを事前確認するGem。ご自由に。プレチェック・表現相談は可能、全体作成や正解作成は支援者の範囲。伴走が可能。
-->

---

<div class="page-title">使い方：デモ</div>

# 使い方：デモ　<span class="tag tag-accent" style="font-size:24px;">①</span>

<div class="stepbox" style="font-size:30px;">
<div class="st"><b>使い方①</b></div>
<div class="st" style="margin-left:1.2em;">作成したPDFをアップロードし、<br><span style="display:inline-block; margin-left:3.2em;">シラバスのプレチェックをしてみる。</span></div>
</div>

<div class="box-accent" style="text-align:center; font-size:34px; font-weight:800; margin-top:22px; padding:18px;">→ ◎、◯、△、✕でプレチェック</div>

<div class="stepbox" style="margin-top:26px; opacity:.32;">
<div class="st"><b>使い方②</b></div>
<div class="st" style="margin-left:1.2em;">表現やシラバスの意味を尋ねる。</div>
</div>

<!--
[NOTE] 使い方①：作成したPDFをアップロードしてプレチェック。◎◯△✕で評価が返る。
-->

---

<div class="page-title">使い方：デモ</div>

# 使い方：デモ　<span class="tag tag-accent" style="font-size:24px;">②</span>

<div class="stepbox" style="opacity:.32;">
<div class="st"><b>使い方①</b></div>
<div class="st" style="margin-left:1.2em;">作成したPDFをアップロードし、<br><span style="display:inline-block; margin-left:3.2em;">シラバスのプレチェックをしてみる。</span></div>
</div>

<div class="stepbox" style="font-size:30px; margin-top:40px;">
<div class="st"><b>使い方②</b></div>
<div class="st" style="margin-left:1.2em;">表現やシラバスの意味を尋ねる。</div>
</div>

<div class="box-accent" style="text-align:center; font-size:34px; font-weight:800; margin-top:18px; padding:18px;">→ FD資料に基づき壁打ち</div>

<!--
[NOTE] 使い方②：表現やシラバスの意味を尋ねる。FD資料に基づいて壁打ちしてくれる。
-->

---

<div class="page-title">免責</div>

# <b>生成AIの中核である大規模言語モデル</b>は、<br><b>次の単語を予測するだけ</b> → <span style="color:var(--accent)">ハルシネーション注意</span>

<div style="display:grid; grid-template-columns: 1.32fr 1fr; gap:20px; align-items:start; margin-top:8px;">

<div>
<div style="font-size:22px; font-weight:800; margin-bottom:4px;">利用 (推論・生成)</div>
<div class="llm-flow">

<div class="llm-col">
<div class="step-h">計算1回目</div>
<div class="llm-node llm-tok">“吾輩は”</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-out">出力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-dec">AI処理<br>(デコーダ)</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-pre">前処理</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-in">入力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-tok">“吾輩”</div>
</div>

<div class="llm-col">
<div class="step-h">計算2回目</div>
<div class="llm-node llm-tok">“吾輩は猫”</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-out">出力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-dec">AI処理<br>(デコーダ)</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-pre">前処理</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-in">入力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-tok">“吾輩は”</div>
</div>

<div class="llm-col">
<div class="step-h">計算3回目</div>
<div class="llm-node llm-tok">“吾輩は猫で”</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-out">出力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-dec">AI処理<br>(デコーダ)</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-pre">前処理</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-in">入力</div>
<div class="llm-arrow">▲</div>
<div class="llm-node llm-tok">“吾輩は猫”</div>
</div>

</div>
</div>

<div class="chartcol pip-safe">
<img src="./src/fig08-img.png" alt="吾輩は_ 上位5トークン">
<img src="./src/fig09-img.png" alt="吾輩は猫である。_ 上位5トークン">
<img src="./src/fig10-img.png" alt="コンテキスト付与 上位5トークン">
<div class="cite" style="text-align:right; margin-top:2px;">モデル： cyberagent/open-calm-7b</div>
</div>

</div>

<!--
[NOTE] “吾輩は猫で”の例。LLMは前の単語列から次の単語を予測するだけ。だからハルシネーションに注意。モデルはopen-calm-7b。
-->

---

<div class="page-title">試行です / ご意見下さい</div>

# 試行です / ご意見下さい

<div class="stepbox" style="font-size:27px;">
<div class="st"><b>① AIの意見は、あくまで参考</b>として下さい</div>
<div class="st" style="margin-left:1.4em; font-size:24px;">→ご自身のご判断や分野の慣習を優先して下さい<br><span style="margin-left:1.2em;">AIの出力に全て従う必要はありません</span></div>
</div>

<div class="stepbox" style="font-size:27px; margin-top:14px;">
<div class="st"><b>② AIの出力結果は、確認</b>して下さい</div>
<div class="st" style="margin-left:1.4em; font-size:24px;">→常に、正解を出すわけではありません。<br><span style="margin-left:1.2em;">※シラバスチェックで指摘がある可能性はあります。</span></div>
</div>

<div class="box-accent pip-safe" style="margin-top:18px; font-size:28px;">誤作動や感想、改善について、<br>ご意見頂けますと幸いです。</div>

<!--
[NOTE] あくまで試行。①AIの意見は参考、②出力は必ず確認を。誤作動や感想・改善のご意見を歓迎します。
-->
