---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  .speech { position: relative; display: inline-block; border: 2.5px solid #E08A2B; background: #fff; border-radius: 14px; padding: 12px 26px; font-size: 28px; line-height: 1.45; color: #333; }
  .speech.down::after { content: ""; position: absolute; left: 40px; bottom: -16px; width: 0; height: 0; border: 16px solid transparent; border-top-color: #E08A2B; border-bottom: 0; }
  .speech.up::after { content: ""; position: absolute; left: 40px; top: -16px; width: 0; height: 0; border: 16px solid transparent; border-bottom-color: #E08A2B; border-top: 0; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">評価と目標の関係</div>
</div>

<div class="goal-box" style="max-width:840px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">目標に応じた評価方法を理解する。</span></div>

<!--
- タイトルコール。「目標に応じた評価方法を理解する」が今回の達成目標。
-->

---

<div class="page-title">評価と目標の関係</div>

<div class="speech up" style="position:absolute; top:120px; left:300px;">テストなんて嫌だ…<br>評価されたくない…</div>

<div class="goal-box" style="margin-top:150px;"><b>達成目標：</b><span class="ind">目標に応じた評価方法を理解する。</span></div>

<div class="speech down" style="position:absolute; bottom:120px; left:110px;">成績をつけるのに<br>どんな意義があるの</div>

<!--
- 学生からはテストや評価への抵抗の声がある。一方で成績をつける意義は何か。この緊張関係から考えていく。
-->

---

<div class="page-title">評価と目標の関係</div>

# そもそも、<span style="color:var(--accent-dark)">なぜ評価は必要</span>？

<div class="box-info" style="margin-top:6px; padding:9px 22px; font-size:23px;"><b>良い成績を取れる人を見分けるため？</b>　<span style="color:var(--accent); font-weight:800;">⇒ 否</span>。受験パラダイムは忘れよう。</div>

<div class="goal-box" style="margin-top:11px; padding:9px 24px; font-size:25px;"><b>学修者を支援するため</b></div>

<div style="display:grid; grid-template-columns:1fr; gap:8px; margin-top:10px; margin-right:calc(var(--pip-w) + 40px);">
<div class="stepbox" style="padding:9px 28px; margin:0;"><div class="st" style="margin:2px 0;"><b>学修者：</b>目標到達度に基づく主体的な学びのため</div></div>
<div class="stepbox" style="padding:9px 28px; margin:0;"><div class="st" style="margin:2px 0;"><b>教員：</b>理解度を確認し支援するため</div></div>
<div class="stepbox" style="padding:9px 28px; margin:0;"><div class="st" style="margin:2px 0;"><b>教員：</b>授業を改善するため</div></div>
</div>

<div class="goal-box" style="margin-top:11px; padding:9px 24px; font-size:25px; margin-right:calc(var(--pip-w) + 40px);"><b>学修の質を保証をするため (成績)</b></div>

<!--
- 評価は良い成績の人を見分けるためではない。受験パラダイムを忘れ、学修者支援・授業改善・質保証のためと捉える。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">目標到達度</span>を評価する

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.25;">

<div class="goal-box" style="font-size:25px; padding:14px 22px; margin-top:6px;"><b>目標</b>とは、授業で出来るようになって欲しいことの一覧</div>

<div class="box-accent" style="margin-top:14px; font-size:25px;"><b>評価</b>とは、<b>目標に対しどれほど到達出来たか</b>を可視化したもの</div>

<div class="box-warn" style="margin-top:14px; font-size:24px;"><b>評価対象と評価方法</b>は<b>目標と対応</b><br>→逆向き設計でも同じ話がありました</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; align-items:center;">
<div class="box-info" style="font-size:21px; padding:9px 16px; text-align:center; margin-top:4px;"><b>評価</b>：あと30 mで目標到達<br>道の右側の方が安全だよ</div>
<div style="display:flex; align-items:center; gap:6px; margin-top:8px;">
<img src="./src/fig03-img.png" alt="スマホを見る学生" style="height:170px;">
<img src="./src/fig02-img.png" alt="目標の看板" style="height:140px;">
</div>
</div>
</div>

<!--
- 目標＝できてほしいことの一覧、評価＝目標への到達度を可視化したもの。評価対象・方法は目標と対応する（逆向き設計と同じ）。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">評価を設定する</span>

<div class="stepbox"><div class="st">① <b>頻度</b>：どのくらい評価はマメに行うべきか？</div></div>
<div class="stepbox"><div class="st">② <b>種類</b>：どの方法で評価するのか？</div></div>
<div class="stepbox"><div class="st">③ <b>性質</b>：その評価で目標到達は測れるのか？</div></div>

<div style="display:flex; gap:18px; margin-top:18px; margin-right:calc(var(--pip-w) + 24px);">
<div class="box-info" style="flex:1; font-size:23px;"><b>✔ シラバスの目標一覧</b>と<b>教育目標分類</b>を眺めながら決める</div>
<div class="box-warn" style="flex:1; font-size:23px;"><b>✔ </b>目標が曖昧で評価が決まらないなら、<b>目標に立ち返って目標を明確化する</b></div>
</div>

<!--
- 評価設定は①頻度②種類③性質の3点で考える。シラバスの目標一覧と教育目標分類を眺めて決め、曖昧なら目標に立ち返る。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">評価の種類</span>

<div style="position:absolute; top:108px; right:60px; text-align:right;">
<div style="font-size:26px; font-weight:800;"><b>高次</b>の目標を測りやすい</div>
<div style="font-size:24px; text-decoration:underline; margin-top:10px;">組み合わせて測ることも<b>可</b></div>
</div>

<svg viewBox="0 0 1000 520" style="width:760px; margin-top:6px;" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="ah" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse"><path d="M1,1 L11,6 L1,11 Z" fill="#8a8f96"/></marker>
<linearGradient id="redarr" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#f3b6b6"/><stop offset="1" stop-color="#d11f1f"/></linearGradient>
</defs>
<line x1="500" y1="30" x2="500" y2="490" stroke="#8a8f96" stroke-width="5" marker-start="url(#ah)" marker-end="url(#ah)"/>
<line x1="30" y1="265" x2="970" y2="265" stroke="#8a8f96" stroke-width="5" marker-start="url(#ah)" marker-end="url(#ah)"/>
<text x="500" y="22" text-anchor="middle" font-size="28" font-weight="800">複雑</text>
<text x="500" y="512" text-anchor="middle" font-size="28" font-weight="800">単純</text>
<text x="34" y="300" font-size="28" font-weight="800">筆記</text>
<text x="900" y="300" font-size="28" font-weight="800">実演</text>
<!-- 単純/筆記(左下)→複雑/実演(右上=高次)。シャフトと対称な矢じり -->
<line x1="160" y1="355" x2="724" y2="93" stroke="url(#redarr)" stroke-width="38" stroke-linecap="round" opacity="0.92"/>
<polygon points="795,60 744,135 705,51" fill="#d11f1f"/>
<rect x="120" y="70" width="520" height="95" rx="6" fill="#FBE4EA" stroke="#E08A2B" stroke-width="2.5"/>
<text x="380" y="108" text-anchor="middle" font-size="29" font-weight="800">パフォーマンス課題</text>
<text x="380" y="146" text-anchor="middle" font-size="25">(小論文、作品制作、発表等)</text>
<rect x="120" y="185" width="220" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="230" y="220" text-anchor="middle" font-size="26">論述式問題</text>
<text x="230" y="256" text-anchor="middle" font-size="26">レポート</text>
<rect x="540" y="185" width="240" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="660" y="220" text-anchor="middle" font-size="26">実技テスト</text>
<text x="660" y="256" text-anchor="middle" font-size="26">面接/口頭試問</text>
<rect x="135" y="300" width="180" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="225" y="335" text-anchor="middle" font-size="26">記述式</text>
<text x="225" y="371" text-anchor="middle" font-size="26">問題</text>
<rect x="640" y="300" width="160" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="720" y="335" text-anchor="middle" font-size="26">観察</text>
<text x="720" y="371" text-anchor="middle" font-size="26">試験</text>
<rect x="135" y="408" width="180" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="225" y="443" text-anchor="middle" font-size="26">選択式</text>
<text x="225" y="479" text-anchor="middle" font-size="26">問題</text>
<rect x="560" y="408" width="160" height="92" rx="6" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="640" y="443" text-anchor="middle" font-size="26">心理</text>
<text x="640" y="479" text-anchor="middle" font-size="26">テスト</text>
</svg>

<div class="cite" style="position:absolute; bottom:22px; left:70px;">田中耕治（2010）「<i>よくわかる教育評価</i>」(ミネルヴァ書房)を改変</div>

<!--
- 評価の種類を「筆記↔実演」「単純↔複雑」の2軸で整理。右上ほど高次の目標を測りやすい。組み合わせて測ることも可。
-->

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">ルーブリック</span>

<div class="box-accent" style="font-size:23px; margin-top:4px; margin-right:calc(var(--pip-w) + 20px);"><b>✔採点道具の一つで、課題を構成要素に分け、　要素ごとに評価基準を満たすレベルを説明した表</b><br>✔パフォーマンス課題・レポート・実技等の評価の可視化</div>

<div style="margin-top:12px;">
<div style="display:flex;">
<div style="width:184px; flex:none;"></div>
<div style="flex:1; text-align:center; color:var(--accent-dark); font-weight:800; font-size:21px; margin-bottom:4px;">◀──── 評価尺度（レベル） ────▶</div>
</div>
<div style="display:flex; align-items:center; gap:14px;">
<div style="width:30px; flex:none; writing-mode:vertical-rl; text-orientation:upright; font-weight:800; color:var(--accent-dark); font-size:22px; letter-spacing:.1em; text-align:center;">評価基準</div>
<table style="border-collapse:collapse; font-size:20px; flex:1; table-layout:fixed; width:100%;">
<colgroup><col style="width:140px;"><col><col><col></colgroup>
<tr style="background:var(--accent); color:#fff;">
<th style="border:1.5px solid #fff; padding:6px 8px; color:#fff;">評価観点</th>
<th style="border:1.5px solid #fff; padding:6px 8px; color:#fff;">素晴らしい(2)</th>
<th style="border:1.5px solid #fff; padding:6px 8px; color:#fff;">合格(1)</th>
<th style="border:1.5px solid #fff; padding:6px 8px; color:#fff;">不十分(0)</th>
</tr>
<tr><td style="border:1.5px solid #ccc; padding:6px 8px; background:var(--accent-soft); font-weight:700;">分量</td><td style="border:1.5px solid #ccc; padding:6px 8px;"></td><td style="border:1.5px solid #ccc; padding:6px 8px;">6分間で丁度</td><td style="border:1.5px solid #ccc; padding:6px 8px;">過剰か少ない</td></tr>
<tr><td style="border:1.5px solid #ccc; padding:6px 8px; background:var(--accent-soft); font-weight:700;">目標と目的</td><td style="border:1.5px solid #ccc; padding:6px 8px;">明確かつ内容が一致していた</td><td style="border:1.5px solid #ccc; padding:6px 8px;">明確さか内容の何れかに改善点</td><td style="border:1.5px solid #ccc; padding:6px 8px;">明確さ・内容の何れも不十分</td></tr>
<tr><td style="border:1.5px solid #ccc; padding:6px 8px; background:var(--accent-soft); font-weight:700;">レベル設定</td><td style="border:1.5px solid #ccc; padding:6px 8px;">手を伸ばせば届くレベルだった</td><td style="border:1.5px solid #ccc; padding:6px 8px;">一部高度・容易な箇所があった</td><td style="border:1.5px solid #ccc; padding:6px 8px;">極端に高度・容易であった</td></tr>
</table>
</div>
</div>

<div style="margin-top:8px; margin-right:calc(var(--pip-w) + 20px); font-size:21px;"><b>「課題内容</b>：6分模擬授業」を評価するためのルーブリック　<span style="font-size:18px; color:#666;">(スティーブンス＆レビ, 2014)</span></div>

<div class="box-warn" style="margin-top:8px; font-size:22px; margin-right:calc(var(--pip-w) + 20px);">ルーブリックを適切に設計し高次の課題も扱おう</div>

<div class="cite" style="margin-top:4px; margin-left:44px;">栗田 &amp; 中村（2024）<i>インタラクティブ・ティーチング 実践編３</i></div>

<!--
- ルーブリックは採点道具。課題を要素に分け、要素ごとに評価基準のレベルを説明した表。評価観点×評価尺度の二次元で高次の課題も評価できる。
-->

---

<div class="page-title">評価と目標の関係</div>

# まとめ

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.4;">

<div class="wrap3" style="font-size:26px;">
<div class="ln"><span class="no" style="color:#222;">①</span> 評価は、<span style="color:var(--accent-dark); font-weight:800;">学習者を支援するため</span>にある</div>
<div class="ln"><span class="no" style="color:#222;">②</span> 目標と<span style="color:var(--accent-dark); font-weight:800;">評価方法</span>は、<span style="color:var(--accent-dark); font-weight:800;">強い対応関係</span>を持つ</div>
<div class="ln"><span class="no" style="color:#222;">③</span> 目標の<b>レベル感に合わせた評価方法</b>を選ぶ</div>
</div>

<div class="box-info" style="margin-top:18px; font-size:22px;">具体的な問題設定自体については、Tipsはいくつかあるものの、<b>各分野の先行事例</b>や<b>教科書の例</b>、<b>先生ご自身の体験</b>、<b>過去の結果</b>から設定可能と考えます。</div>

</div>
<img src="./src/fig04-img.png" alt="レポートを見る学生" style="height:300px; align-self:center;">
</div>

<!--
- まとめ。①評価は学習者支援のため、②目標と評価方法は強い対応関係、③目標のレベル感に合った評価方法を選ぶ。具体の問題設定は先行事例・教科書・体験・過去結果から設定可能。
-->
