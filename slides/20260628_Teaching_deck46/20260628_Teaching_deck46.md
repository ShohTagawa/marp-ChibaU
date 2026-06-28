---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">伝わるデザイン</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 20%; }
  section .page-title { left: 17%; width: 36%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 良し悪し比較の2カラム */
  .cmp { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; margin-top: 10px; }
  .cmp .col { display: flex; flex-direction: column; }
  .cmp-head { display: flex; align-items: center; gap: 12px; font-size: 27px; font-weight: 800; margin-bottom: 10px; }
  .cmp-mark { width: 38px; height: 38px; border-radius: 50%; border: 3px solid; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; }
  .mark-bad  { color: #9aa0a6; border-color: #9aa0a6; }
  .mark-good { color: var(--accent); border-color: var(--accent); }
  .cmp .card { border: 1.5px solid #dfe3ea; border-radius: 12px; padding: 0 18px 16px; box-shadow: 0 2px 7px rgba(0,0,0,.06); flex: 1; }
  .card-bad  { background: #fbfbfb; }
  .card-good { background: #fff; }
  .card-cap { background: #efe9e0; color: #4a4030; font-weight: 800; font-size: 19px; padding: 6px 14px; margin: 0 -18px 12px; border-radius: 11px 11px 0 0; }
  .card-good .card-cap { background: var(--accent-soft); color: var(--accent-dark); border-bottom: 3px solid var(--accent); }
  /* 悪い例：中央寄せ・等幅でメリハリ無し */
  .bad-body { text-align: center; font-size: 20px; line-height: 1.7; color: #333; }
  .bad-body .h { display: block; margin: 6px 0; }
  /* 良い例：左寄せ・強弱あり */
  .good-body { font-size: 20px; line-height: 1.7; }
  .good-body .h { font-weight: 800; color: #1a1a1a; display: block; margin: 8px 0 2px; }
  .good-body ul { margin: 0 0 6px 1.1em; padding: 0; }
  .good-body li { margin: 4px 0; }
  .good-body .punch { color: var(--accent); font-weight: 800; }
  /* スライド2/3の「コツ」表組み */
  .tips-box { background: var(--section-bg); border-radius: 10px; padding: 14px 22px; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 6px 28px; font-size: 23px; line-height: 1.7; white-space: nowrap; }
  .tips-box b { color: var(--accent-dark); }
  .tips-box u { text-underline-offset: 3px; }
  /* 悪い例スライド全体：詰め込み感 */
  .cramp { font-size: 21px; line-height: 1.45; }
  .cramp .tx { background: #fafafa; border: 1px solid #e6e6e6; padding: 8px 14px; margin: 6px 0; }
  /* データ表 */
  table.sat { border-collapse: collapse; font-size: 22px; }
  table.sat th, table.sat td { border: 1px solid #c9ced8; padding: 6px 18px; text-align: center; }
  table.sat thead th { background: var(--accent); color: #fff; }
  table.sat tbody th { background: var(--accent-soft); color: var(--accent-dark); text-align: left; font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">伝わるデザイン</div>
<div class="title-big">レイアウトのコツ</div>
</div>

<div class="cmp" style="max-width:1080px; margin:8px auto 0;">
<div class="col">
<div class="cmp-head"><span class="cmp-mark mark-bad">✕</span>ルールを知らないと</div>
<div class="card card-bad">
<div class="card-cap">整理して美しく</div>
<div class="bad-body">
<span class="h">読みやすいレイアウトは存在する！</span>
・行間・字間・書体・改行に注意を払う。<br>
・文字のサイズや太さに強弱をはっきりつける。
<span class="h">答えはひとつではない！</span>
・状況や媒体により最適なレイアウトは異なる。<br>
・センスやスタンスも人により様々である。
<span class="h">ルールが分かれば誰でも改善！</span>
</div>
</div>
</div>
<div class="col">
<div class="cmp-head"><span class="cmp-mark mark-good">◯</span>ルールを知っていると</div>
<div class="card card-good">
<div class="card-cap">整理して美しく</div>
<div class="good-body">
<span class="h">読みやすいレイアウトは存在する！</span>
<ul><li>行間・字間・書体・改行に注意を払う。</li>
<li>文字のサイズや太さに強弱をはっきりつける。</li></ul>
<span class="h">答えはひとつではない！</span>
<ul><li>状況や媒体により最適なレイアウトは異なる。</li>
<li>センスやスタンスも人により様々である。</li></ul>
<span class="punch">ルールが分かれば誰でも改善！</span>
</div>
</div>
</div>
</div>

<!--
- 伝わるデザインの導入。同じ内容でも「ルールを知らない／知っている」で読みやすさは大きく変わる。これから良し悪しを並べて見ていく。
-->

---

<div class="page-title">レイアウトのコツ</div>

# <span style="color:#888">✕</span>　悪い例 <span style="font-size:26px; color:#888;">（詰め込み・中央寄せ・多色）</span>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1.15;" class="cramp">

<div class="tx" style="text-align:center;">このスライドでは、資料のデザインについて、検討します。<br>重要なのは読み手の認知的負担を下げることです。</div>

<div class="tx" style="text-align:center;">端的に言えば、使用色を制限し、彩度を下げ、強調は太字/下線を使用し、余白を広くとり、まとまりをつくり、文字列を並べる事です。</div>

<div style="display:flex; gap:14px; margin-top:10px;">
<div style="background:#5a86c4; color:#fff; padding:6px 22px; border-radius:18px; font-weight:800; font-size:22px;">読みやすさ</div>
<div style="background:#7a8aa0; color:#fff; padding:6px 22px; border-radius:18px; font-weight:800; font-size:22px;">センスではなく、知識</div>
</div>

<img src="./src/fig02-chart-bad.png" alt="多色の縦棒グラフ（悪い例）" style="height:215px; margin-top:8px;">

</div>
<div style="flex:1;">

<table class="sat">
<thead><tr><th></th><th>満足</th><th>普通</th><th>不満</th></tr></thead>
<tbody>
<tr><th>オンライン授業</th><td>419</td><td>69</td><td>45</td></tr>
<tr><th>対面授業</th><td>1158</td><td>353</td><td>192</td></tr>
<tr><th>宿題のみ</th><td>96</td><td>48</td><td>51</td></tr>
</tbody>
</table>

</div>
</div>

<!--
- 悪い例。中央寄せ・等幅で強弱が無く、色も多く、表もグラフも盛り込みすぎ。読み手の認知的負担が高い。
-->

---

<div class="page-title">レイアウトのコツ</div>

# <span style="color:var(--accent)">◯</span>　良い例 <span style="font-size:26px; color:#888;">（強弱・余白・まとまり）</span>

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1.05;">

<div style="font-size:25px; line-height:1.65; margin-bottom:6px;">✔ 資料のデザインについて、検討しています。<br>　 重要なのは<span class="punch" style="text-decoration:underline; text-underline-offset:4px;">読み手の認知的負担を下げること</span>です。</div>

<div style="font-size:25px; font-weight:700; margin:10px 0 8px;">✔ 下記のコツがあります。</div>

<div class="tips-box">
<div>使用色を<b>制限</b></div>
<div><b>余白を広く</b>とる</div>
<div>彩度を<b>下る</b></div>
<div><b>まとまり</b>をつくる</div>
<div>文字を<b>並べる</b></div>
<div>強調は<b>太字</b>/<u>下線</u>を使用</div>
</div>

<div style="text-align:center; margin-top:22px;">
<div style="font-size:28px;">読みやすさ、とは</div>
<div style="font-size:34px; font-weight:800; color:var(--accent); text-decoration:underline; text-underline-offset:5px; margin-top:6px;">センスではなく、<span style="color:var(--accent-dark)">知識</span></div>
</div>

</div>
<div style="flex:1; text-align:center;">

<img src="./src/fig03-chart-good.png" alt="授業方法別の満足度（横棒：満足／普通／不満）" style="height:380px;">

</div>
</div>

<!--
- 良い例。同じ内容でも、強調の太字・下線、余白、まとまり（2列の表組み）、横棒の積み上げグラフで一気に読みやすくなる。読みやすさはセンスではなく知識。
-->
