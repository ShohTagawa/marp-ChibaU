---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール（#0F574C）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section .page-title { left: 18%; width: 38%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* スライド4：分類表（2列の密な表）用の調整 */
  .ctbl { width: 100%; border-collapse: collapse; font-size: 19px; line-height: 1.4; }
  .ctbl th, .ctbl td { border: 1.5px solid #cfd6d4; padding: 5px 9px; vertical-align: top; }
  .ctbl th { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; white-space: nowrap; text-align: left; }
  .ctbl td b { color: var(--accent-dark); }
  .col-head { font-size: 26px; font-weight: 800; color: var(--accent-dark); margin: 2px 0 8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座</div>
<div class="title-big">第2回</div>
</div>

<div style="display:flex; align-items:center; justify-content:center; gap:56px; margin-top:8px;">
<div class="title-meta" style="text-align:left;">
<div style="font-size:30px; font-weight:700;">2025/10/8　講師：田川 翔</div>
<div style="font-size:24px; color:var(--muted); margin-top:6px;">千葉大学 国際未来教育基幹 助教</div>
<div style="margin-top:18px;"><span class="tag tag-accent" style="font-size:22px;">1　イントロ</span></div>
</div>
<img src="./src/fig01-img.png" alt="講師 田川 翔" style="width:300px; border-radius:14px; box-shadow:0 4px 14px rgba(0,0,0,.2);">
</div>

<!--
- タイトルコール。生成AI活用講座 第2回、イントロ・オリエンテーションです。講師は田川。
-->

---

<div class="page-title">第2回について</div>

# 第2回の進め方<span style="font-size:30px;">：所要時間 復習込みで(できれば)4.5 時間</span>

<div class="goal-box" style="margin-top:14px;"><b>第2回の目標は、</b><br>「生成AIの仕組み」を自分にあった方法で理解することです。</div>

<div class="box-warn" style="margin-top:18px; margin-right:calc(var(--pip-w) + 40px);">
<b>悩み：</b><br>
　普遍の授業なので、皆バラバラ。<br>
　理解したいことも違う。既習範囲も違う。
</div>

<div class="box-accent" style="margin-top:16px; margin-right:calc(var(--pip-w) + 40px);">
<b>そこで：</b><br>
　みんなが興味をもつことを自分で勉強し、<br>
　授業1回分：90分の講義 + 90分の復習 (+ 90分の予習や演習)<br>
　を選んで実施してもらう。
</div>

<!--
- 第2回の目標は「生成AIの仕組み」を自分に合った方法で理解すること。
- 普遍の授業で受講者がバラバラなので、興味のあることを自分で選んで学んでもらう。所要は復習込みで4.5時間ほど。
-->

---

<div class="page-title">第2回について</div>

# パスを選び、学習する<span style="font-size:26px;">　※今週中に公開される</span>

<div class="goal-box" style="margin-top:10px; padding:10px 22px; font-size:23px;"><b>第2回の目標は、「生成AIの仕組み」を自分にあった方法で理解することです。</b></div>

<div class="stepbox" style="margin:10px 0 8px;"><div class="st" style="font-size:23px; margin:2px 0;"><b>① パスを選び、フォームで登録 (10/21まで)</b></div></div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:6px 26px; font-size:19.5px; line-height:1.42; margin-top:2px;">
<div>
<div style="color:var(--accent-dark); font-weight:800;">数式なしコース</div>
<div>パス1) “3Blue1BrownJapan” の指定動画から4本 + <b>学んだことの解説 A4 1.5枚</b></div>
<div>パス2) 本：“数式なしで分かるAIのしくみ” + <b>第6 or 第7章の要約 A4 1枚</b></div>
<div style="color:var(--accent-dark); font-weight:800; margin-top:4px;">プログラミングお試し</div>
<div>パス3) 並び替えGPT &amp; いちもじGPTの体験 (nano GPT) + <b>出力されるレポート</b></div>
<div style="color:var(--accent-dark); font-weight:800; margin-top:4px;">数学コース</div>
<div>パス4) 本：”最短コースでわかる ディープラーニングの数学” + <b>学習時のメモ</b></div>
</div>
<div>
<div style="color:var(--accent-dark); font-weight:800;">MOOC/Google Cloud Skills boost (G-AI Leader)などのコース</div>
<div>パス5) MOOCなどの外部コースを完了 (努力量：2.5時間以上必須) + <b>証明</b></div>
<div style="color:var(--accent-dark); font-weight:800; margin-top:4px;">倫理コース</div>
<div>パス6) 本：”AIの倫理学 (など)”の読了 + <b>最も印象的だった内容の説明：A4半分</b></div>
<div style="color:var(--accent-dark); font-weight:800; margin-top:4px;">資格・就活コース ※コスト上、おすすめしない ※合格証書の提出</div>
<div>パス7) Google G-AI Leader / AWS Certified AI Practitioner / G検定 (11/7, 8)合格</div>
<div style="margin-top:2px;">※パス8) その他： 来年度の受講生のためにも役立つ教材を作るなど</div>
</div>
</div>

<div style="margin-top:8px; font-size:21px; line-height:1.5; margin-right:calc(var(--pip-w) + 20px);">
<b>② 11/21(金)までに、学習パスを完了させる (ものによっては、担当教員に要相談)</b><br>
<b>③結果を第二回のフォームで申請</b>　<span style="color:var(--muted);">※ 必要に応じて、求められているものを提出する</span>
</div>

<!--
- 8つのパスから興味に合うものを選び、10/21までにフォームで登録、11/21までに完了し、結果を申請する流れ。
-->

---

<div class="page-title">第2回について</div>

# 第2回の利点・欠点の分類表

<div style="display:grid; grid-template-columns:0.82fr 1.18fr; gap:22px; margin-top:8px;">

<div>
<div class="col-head">コスト感：</div>
<table class="ctbl">
<tr><th>パス1</th><td><b>無料</b> (作成者/翻訳者とも利用許諾頂けました)</td></tr>
<tr><th>パス2</th><td>2,948円 ※本代</td></tr>
<tr><th>パス3</th><td><b>無料</b> (田川が実施)</td></tr>
<tr><th>パス4</th><td>3,190円 ※本代</td></tr>
<tr><th>パス5</th><td>外部コース受講代金 無料? (ものによる) ※学習時間の目安と、修了しているスクショが必要 ※有料修了証は不要</td></tr>
<tr><th>パス6</th><td>本代 ※別途、タイトルを相談</td></tr>
<tr><th>パス7</th><td>最低5,500円 + 参考書代</td></tr>
<tr><th>パス8</th><td>別途相談</td></tr>
</table>
<div class="box-info" style="margin-top:8px; font-size:19px; padding:8px 16px;">ある程度、本はあるので、貸せます。<br>先着順。教員まで。</div>
</div>

<div>
<div class="col-head">想定する対象者・利点・欠点：</div>
<table class="ctbl">
<tr><th>パス1、<br>パス2、<br>パス6</th><td><b>想定</b>：文系学科 or 音・画像を選んだグループ or 倫理　<b>前提知識</b>：不要 (コーディングもない)　<b>利点</b>：歴史や機械学習も分かる、視覚的にもわかりやすい　<b>欠点</b>：レポートが大変</td></tr>
<tr><th>パス3</th><td><b>想定</b>：一般 (但し、少し理系向け)　<b>前提知識</b>：不要 (コーディングもない)　<b>利点</b>：小規模だけどもLLMを作れる、レポートまでスムーズ　<b>欠点</b>：PythonやGoogle Colaboの知識などが必要</td></tr>
<tr><th>パス4</th><td><b>想定</b>：数理DSを除く理系向け　<b>前提知識</b>：数ⅢCを終え1年前期で偏微分と線形代数を履修　<b>利点</b>：今後の研究にも役立つ知識　<b>欠点</b>：レポートは楽だが、内容に少々骨がある。</td></tr>
<tr><th>パス5、<br>パス7</th><td><b>想定</b>：就活で取る人むけ、　<b>前提知識</b>：なし　<b>利点</b>：就活などに役立つ、資格勉強を手伝える　<b>欠点</b>：お金かかる、資格は受からないと他を再受講…</td></tr>
</table>
</div>

</div>

<!--
- 各パスのコスト感と、想定対象・利点・欠点の対応表。本は貸し出し可（先着順）。
-->

---

<div class="page-title">第2回の受講方法</div>

# 第2回の分類表

<div style="display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:center; margin-top:18px;">

<div>
<div class="stepbox" style="margin:18px 0;"><div class="st"><b>Step1</b>：10/21までに、学習パスを登録する</div></div>
<div class="stepbox" style="margin:18px 0;"><div class="st"><b>Step2</b>：各パスの指示に従って学習を行う</div></div>
<div class="stepbox" style="margin:18px 0;"><div class="st"><b>Step3</b>：指定の成果物を11/21までに提出する</div></div>
</div>

<div style="text-align:center;">
<img src="./src/fig05-classroom-list.png" alt="Google Classroom の課題一覧（学習パスの登録・各パス・レポート提出）" style="width:88%; border:1px solid #e3e8f0; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,.08);">
</div>

</div>

<!--
- 受講の流れは3ステップ：①10/21までに登録、②各パスで学習、③11/21までに成果物を提出。右はClassroomの課題一覧。
-->
