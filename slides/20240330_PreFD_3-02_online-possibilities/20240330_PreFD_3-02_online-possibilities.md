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
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">オンラインで出来ること</div>
</div>

<div class="goal-box" style="max-width:880px; margin:6px auto 0;"><b>達成目標：</b><br><span class="ind">メディア授業の利点・欠点を指摘できる。</span></div>

<!--
- まずは、タイトルコール。メディア授業（オンライン授業）の利点・欠点を指摘できる、が今回の達成目標。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# メディア授業の種類<span class="tag tag-ref">参照</span>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px 22px; margin-top:6px; margin-right:calc(var(--pip-w) - 120px);">

<div class="pcard">
<div class="pc-h">オンデマンド型</div>
この授業 (他MOOC等が例)。映像が構造的に並び学習者が履修。情報の効率的な伝達に効果的で、資格試験関係に便利だが、遊びがないため疲れ易く、エンゲージメントが難しい
</div>

<div class="pcard">
<div class="pc-h">同時双方向型</div>
Zoom等で学生の反応を見て実施。通常のクラスをオンライン化。アクティブ・ラーニング手法も取り入れ易いが、ツール・準備を要するため、教員が大変。ただ話すだけだと飽きられ易い
</div>

<div class="pcard">
<div class="pc-h">ハイフレックス型</div>
オンライン・対面の両方で履修可。準備が大変で(教室の)設備も必要
</div>

<div class="pcard">
<div class="pc-h">反転授業型 <span style="font-weight:600;">(後述)</span></div>
オンデマンド教材を履修後、教室で演習やワークを実施
</div>

<div class="pcard">
<div class="pc-h">ブレンド型</div>
対面や上記の形式を授業の目的に合わせて選択し実施
</div>

<div class="pcard">
<div class="pc-h">自習型</div>
映像や音声は使わず、課題やレポート等の課題のみで実施
</div>

</div>

<!--
- メディア授業には大きく6つの型がある：オンデマンド／同時双方向／ハイフレックス／反転授業／ブレンド／自習。後ほど反転授業を詳しく扱う。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# メディア授業の<span style="color:var(--accent-dark)">建付け</span>と<span style="color:var(--accent-dark)">制限</span>

<div class="stepbox" style="margin-top:14px; margin-right:calc(var(--pip-w) - 60px);">
<div class="st">① 大学設置基準内にメディア授業を規定<br><span style="font-size:22px; color:#555; margin-left:1.4em;">▶大学設置基準第二十五条第二項</span></div>
</div>

<div class="stepbox" style="margin:10px 0; margin-right:calc(var(--pip-w) - 60px);">
<div class="st">② <b>「面接(=対面)授業に相当する教育効果を有する」</b><br><span style="font-size:23px; margin-left:1.4em;">- オンデマンド型の場合には <b>事後の指導</b>と<b>意見交換(質問)の機会確保</b>が必須</span><br><span style="font-size:22px; color:#555; margin-left:1.4em;">▶平成13年文科省告示第51条</span></div>
</div>

<div class="stepbox" style="margin:10px 0; margin-right:calc(var(--pip-w) - 60px);">
<div class="st"><b>③ 学部は卒業単位数に含められる上限がある</b><br><span style="font-size:23px; margin-left:1.4em;"><b>- メディア授業科目(</b>授業回数のうち半数を超える回数をメディア授業で実施する授業)は<b>60単位まで</b></span><br><span style="font-size:22px; color:#555; margin-left:1.4em;"><b>※</b>大学院は<b>上限はない</b> (短大/通信制大学は別規定)</span></div>
</div>

<div class="cite">大学における多様なメディアを高度に利用した授業について (文部科学省資料)　https://www.mext.go.jp/b_menu/shingi/chukyo/chukyo4/043/siryo/__icsFiles/afieldfile/2018/09/10/1409011_6.pdf</div>

<!--
- メディア授業は大学設置基準に位置づけられ、対面相当の教育効果（オンデマンドは事後指導と意見交換の機会確保が必須）が求められる。学部は卒業単位に含められる上限が60単位。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# メディア授業の評価

<div class="subhead" style="margin:2px 0 6px;"><span style="font-size:25px;"><b>対面</b>><span style="color:var(--accent)">ライブ講義~オンデマンド</span>><b>オンラインアクティブラーニング</b></span></div>

<img src="./src/fig04-eval-chart.png" alt="授業方法別の評価（学生版）" style="display:block; height:370px; margin:12px auto 0; border:1px solid #ddd;">

<div class="box-warn" style="margin-top:10px; margin-right:calc(var(--pip-w) + 30px);">教員側のFD<b>(慣れ・手法開発・TF支援)</b>の問題</div>

<div class="cite">東京大学 オンライン授業・Web会議ポータルサイト　https://utelecon.adm.u-tokyo.ac.jp/questionnaire/student_2020A/</div>

<!--
- 学生版の評価アンケート。おおむね 対面 ＞ ライブ講義～オンデマンド ＞ オンラインAL の順。背景には教員側のFD（慣れ・手法開発・TF支援）の問題がある。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# メディア授業の評価

<div class="subhead" style="margin:2px 0 8px;"><span style="font-size:24px;"><b>東大の大学などで教える</b>での結果<span style="font-size:20px; font-weight:600; color:#555;"> (慣れ・手法開発・TF支援とも最大化したAL型授業の修了アンケート)</span></span></div>

<div style="display:grid; grid-template-columns:1fr 370px; gap:18px; align-items:start; margin-right:calc(var(--pip-w) - 230px);">

<div>
<img src="./src/fig05a-ffp-table.png" alt="修了アンケート結果" style="width:100%; border:1px solid #ddd;">
<div style="margin-top:8px; font-size:22px;"><b style="color:var(--tag-blue);">青い数字</b>：一方が<b>3ポイント以上良い項目</b>　<span style="font-size:19px; color:#555;">©東大FFP/栗田/2022</span></div>
</div>

<div>
<div class="box-accent" style="font-size:21px; padding:8px 14px;">修了率の変化はない<br><b>満足度はオンラインの方が高い？</b></div>
<img src="./src/fig05b-satisfaction.png" alt="満足度（オンライン／対面）" style="width:100%; margin-top:8px; border:2px solid var(--accent);">
</div>

</div>

<!--
- 東大FFPのAL型授業（慣れ・手法開発・TF支援とも最大化）の修了アンケート結果。修了率は変わらず、満足度はむしろオンラインの方が高いという結果も。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# メディア授業の<span style="color:var(--accent-dark)">強み・弱み・配慮点</span>

<div class="bgroup" style="margin-top:8px;">
<div class="bg-label" style="color:#C0182B;">強み</div>
<div class="bg-items" style="border-left-color:var(--accent);">
<div>①<b>設定した目標への到達</b>は得意</div>
<div>②<b>情報を効率的に提示し理解</b>に至りやすい</div>
<div>③<b>時間・場所的な融通</b>が効く</div>
</div>
</div>

<div class="bgroup" style="margin:10px 0;">
<div class="bg-label" style="color:var(--tag-blue);">弱み</div>
<div class="bg-items" style="border-left-color:var(--tag-blue);">
<div>①<b>意図しない学びの発生</b>が難しい</div>
<div>②ジェネリックスキル形成に繋がり難い</div>
<div>③疲れやすい/集中しにくい</div>
</div>
</div>

<div class="bgroup" style="margin:10px 0;">
<div class="bg-label" style="color:#E08A2B;">要配慮</div>
<div class="bg-items" style="border-left-color:#E08A2B;">
<div>①学生/教師-学生間の<b style="color:#E08A2B;">コミュニケーション</b></div>
<div>②学生側の視聴環境に差がある</div>
</div>
</div>

<!--
- 強み：目標到達・効率的な理解・時間や場所の融通。弱み：意図しない学びが起きにくい・ジェネリックスキルが育ちにくい・疲れやすい。要配慮：コミュニケーションと視聴環境の差。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# 反転授業

<div class="box-info" style="margin-top:10px; margin-right:calc(var(--pip-w) - 40px);">事前に基礎知識に関する(メディア)学習をして,<br><b>授業では議論・演習を行うブレンド型</b>の一つ</div>

<div class="lead-note" style="margin:10px 0;">▶医学部等でも<b>実践論文</b>あり / Stanfordの取組が有名</div>

<div class="cardrow" style="margin-right:calc(var(--pip-w) - 40px);">
<div class="pcard">
<div class="pc-h">高度化型</div>
<ul style="list-style:none; margin-left:0; padding-left:0;">
<li>- <b>「理解」</b>をオンデマンド</li>
<li>- <b>高次目標</b>を演習や実験で</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">完全習得型</div>
<ul style="list-style:none; margin-left:0; padding-left:0;">
<li>- <b>「理解」</b>をオンデマンド</li>
<li>- <b>理解の確認や質問</b>を教室で</li>
</ul>
</div>
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 30px); font-size:22px;">✔アクティブラーニングを取り入れ教育効果を高めやすい<br>✔教員は多様な学生に対応しやすく、効率化もしやすい<br>✔学生は疑問点や関心をもって授業に取り組める</div>

<!--
- 反転授業＝事前にメディアで基礎知識を学び、教室では議論・演習を行うブレンド型。高度化型（高次目標を演習で）と完全習得型（理解の確認・質問を教室で）がある。教育効果が高めやすい。
-->

---

<div class="page-title">オンライン授業で出来ること</div>

# まとめ

<div class="wrap3" style="font-size:25px; line-height:1.55;">

<div style="margin:14px 0;"><span class="no">①</span> オンライン授業には、<b>対面授業とは異なる<span style="color:var(--accent);">強み</span>と<span style="color:var(--tag-blue);">弱み</span>がある</b><br><span style="margin-left:1.6em;">特に、意図しない学びの発生は難しくコミュニケーション等の配慮が必要</span></div>

<div style="margin:14px 0;"><span class="no">②</span> <b>オンラインと対面を組み合わせたブレンド型授業 </b>(含む反転授業)に<br><span style="margin-left:1.6em;">注目が集まっている</span></div>

<div style="margin:14px 0;"><span class="no">③</span> 学部はオンライン授業を卒業単位に含める上での<b>上限</b>がある</div>

</div>

<!--
- まとめ。①対面とは異なる強み・弱みがある（意図しない学びは難しくコミュニケーションへの配慮が必要）。②ブレンド型（含む反転授業）に注目。③学部は卒業単位算入に上限がある。
-->
