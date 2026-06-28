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
  /* 課題一覧の番号付き大項目 */
  .tasklist { margin-top: 6px; }
  .task-item { font-size: 36px; font-weight: 800; line-height: 1.25; margin: 4px 0; }
  .task-item.dim { color: #b9b9b9; }
  .task-num { color: var(--accent); margin-right: 6px; }
  .task-sub { font-size: 23px; line-height: 1.5; background: var(--section-bg); border-radius: 8px; padding: 8px 18px; margin: 4px 0 12px 52px; }
  .task-sub b { color: var(--accent-dark); }
  .band { display: inline-block; color: #fff; font-weight: 800; font-size: 26px; padding: 6px 22px; border-radius: 6px; margin: 6px 0; }
  .band.purple { background: #7B2D8E; }
  .band.green  { background: #3F9E54; }
  /* ルーブリック表 */
  .rubric { border-collapse: collapse; font-size: 23px; width: 100%; }
  .rubric th, .rubric td { border: 1.5px solid #b9b9b9; padding: 8px 14px; text-align: center; }
  .rubric thead th { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; }
  .rubric tbody th { background: #f3f3f3; font-weight: 800; }
  .ann { color: var(--accent); font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">模擬授業の評価</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">模擬授業の評価から授業改善を体験する。</span></div>

<!--
- まずは、タイトルコール。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業の評価課題 <span class="tag tag-soft">評価</span>

<div class="tasklist">
<div class="task-item"><span class="task-num">1.</span><b>他受講生・ご自身</b>の模擬授業の評価</div>
<div class="task-sub">①<b>ルーブリック</b>を体験し、活用出来るようになる。<br>②<b>相互フィードバックや授業改善の価値・必要性</b>を理解する。③学びの変化を柔軟かつ正しく取り入れ、学びの場を創造する能力を獲得する。</div>
<div class="task-item dim"><span class="task-num" style="color:#b9b9b9;">2.</span></div>
<div class="task-item dim"><span class="task-num" style="color:#b9b9b9;">3.</span></div>
</div>

<!--
- 授業の評価課題。まず「他受講生・ご自身の模擬授業の評価」から。
-->

---

<div class="page-title">模擬授業の評価</div>

# 目標到達度を評価する <span class="tag tag-soft">復習</span>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1.15;">
<div style="font-size:27px; font-weight:800; margin:4px 0 8px;"><b style="color:var(--accent-dark);">目標</b>とは、授業で出来るようになって欲しいことの一覧</div>
<div class="box-accent" style="font-size:20px; line-height:1.5; padding:10px 18px;"><b>大学などで教えるの目標</b><br>(3) 教育・学修に関連する理論や学説、方法の基本的事項を理解し、<b>学習者が主体的に学べる授業をデザイン</b>できる。<br>(4) <b>模擬授業の開発・実施・評価を通して、学習内容を実践し応用できる。</b><br>(5) <b>省察的実践と分析</b>を通じて自身が受ける教育や学修支援を改善し、教育改革に寄与できる。</div>
<div style="font-size:27px; font-weight:800; margin:14px 0 0;"><b style="color:var(--accent-dark);">評価</b>とは、<b style="color:var(--accent-dark);">目標に対しどれほど到達出来たか</b>を可視化したもの</div>
</div>
<div style="flex:0.85;">
<div class="box-info" style="font-size:24px; line-height:1.5;">評価は優劣を見分けるためではなく、<b>学修者の支援</b>のためにある</div>
<div class="box-warn" style="margin-top:16px; font-size:24px;">今回の授業での学びを実践してみましょう</div>
</div>
</div>

<!--
- 評価は、優劣を見分けるためではなく、学修者の支援のためにある。
-->

---

<div class="page-title">模擬授業の評価</div>

# ルーブリック

<div class="box-accent" style="font-size:23px; line-height:1.5; padding:10px 18px; margin:6px 0 12px;">✔パフォーマンス課題・レポート・実技等の評価の可視化。<br>✔<b>高次の学習目標の評価を可能</b>にする。</div>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1.25;">
<div style="font-size:21px; font-weight:800; color:var(--accent-dark); margin-bottom:4px;">「6分模擬授業」を評価するためのルーブリック</div>
<table class="rubric">
<thead><tr><th class="ann">課題内容</th><th>素晴らしい(2)</th><th>合格(1)</th><th>不十分(0)</th></tr></thead>
<tbody>
<tr><th>分量</th><td></td><td></td><td></td></tr>
<tr><th>目標</th><td></td><td></td><td></td></tr>
<tr><th>レベル</th><td></td><td></td><td></td></tr>
</tbody>
</table>
<div style="display:flex; gap:24px; margin-top:6px; font-size:22px; font-weight:800;">
<span class="ann">↑評価観点</span><span class="ann">評価基準 →</span><span class="ann">尺度 →</span>
</div>
</div>
<div style="flex:0.8;">
<div class="box-warn" style="font-size:21px; line-height:1.5; padding:10px 18px;"><b>作り方</b>：作法があり、従えば比較的容易に作れる (但し研究は難しい)</div>
<div class="box-info" style="font-size:20px; line-height:1.5; padding:10px 18px; margin-top:12px;"><b>参考①</b>：早稲田大資料「ルーブリック作成ガイド」<br><b>参考②</b>：インタラクティブ・ティーチング 「③学びを促す評価」</div>
</div>
</div>

<!--
- ルーブリック＝評価の可視化。高次の学習目標の評価を可能にする。評価観点・基準・尺度の三要素。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業の評価課題 <span class="tag tag-soft">評価</span>

<div class="tasklist">
<div class="task-item"><span class="task-num">1.</span><b>他受講生・ご自身</b>の模擬授業の評価</div>
<div class="task-sub">①<b>ルーブリック</b>を体験し、活用出来るようになる。<br>②<b>相互フィードバックや授業改善の価値・必要性</b>を理解する。③学びの変化を柔軟かつ正しく取り入れ、学びの場を創造する能力を獲得する。</div>
<div class="task-item"><span class="task-num">2.</span><b>ご自身</b>の模擬授業の内省評価</div>
<div class="task-sub">①授業記録の方法を理解する。</div>
<div class="task-item dim"><span class="task-num" style="color:#b9b9b9;">3.</span></div>
</div>

<!--
- 2つ目の課題は「ご自身の模擬授業の内省評価」。まず授業記録の方法を理解する。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業記録

<div class="box-info" style="font-size:23px; line-height:1.5; padding:10px 18px; margin:6px 0 10px;"><b>意義</b>：自らの授業活動での思考や行動を対象に、言語化できる<b>メタ認知能力</b>を向上させる。</div>

<div class="box-accent" style="font-size:24px; font-weight:800; padding:8px 18px; margin-bottom:8px;"><b>方法①：</b>授業中や授業後に気がついたことを、ノート、デザインシートや教材に<b>簡単にメモ</b>する</div>

<img src="./src/fig01-img.png" alt="デザインシートへのメモ・コメント例" style="width:88%; display:block; margin:0 auto 8px; border:1px solid #ddd;">

<div style="font-size:24px; font-weight:800;"><b style="color:var(--accent-dark);">方法②</b>：<b>自身の動画や音声記録</b>をもとに分析する。</div>
<div class="cite">Welsch &amp; Devlin (2007) <i>Action in Teacher Education</i></div>

<!--
- 授業記録の方法。①デザインシート等への簡単なメモ、②自身の動画や音声記録をもとに分析する。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業の評価課題 <span class="tag tag-soft">評価</span>

<div class="tasklist" style="opacity:.4;">
<div class="task-item"><span class="task-num">1.</span><b>他受講生・ご自身</b>の模擬授業の評価</div>
<div class="task-sub">①<b>ルーブリック</b>を体験し、活用出来るようになる。<br>②<b>相互フィードバックや授業改善の価値・必要性</b>を理解する。③学びの変化を柔軟かつ正しく取り入れ、学びの場を創造する能力を獲得する。</div>
<div class="task-item"><span class="task-num">2.</span><b>ご自身</b>の模擬授業の内省評価</div>
<div class="task-sub">①授業記録の方法を理解する。</div>
<div class="task-item"><span class="task-num">3.</span><b>この授業全体</b>の評価</div>
<div class="task-sub">①授業を改善し続けるための<b>分析を行う枠組み</b>を獲得する。<br>②<b>教育改革に参画出来る</b>ようになる。</div>
</div>

<!--
- 3つ目の課題「この授業全体の評価」が加わり、3課題が出そろう（ここでは全体像を提示）。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業の評価課題 <span class="tag tag-soft">評価</span>

<div class="tasklist">
<div class="task-item"><span class="task-num">1.</span><b>他受講生・ご自身</b>の模擬授業の評価</div>
<div class="task-sub">①<b>ルーブリック</b>を体験し、活用出来るようになる。<br>②<b>相互フィードバックや授業改善の価値・必要性</b>を理解する。③学びの変化を柔軟かつ正しく取り入れ、学びの場を創造する能力を獲得する。</div>
<div class="task-item"><span class="task-num">2.</span><b>ご自身</b>の模擬授業の内省評価</div>
<div class="task-sub">①授業記録の方法を理解する。</div>
<div class="task-item"><span class="task-num">3.</span><b>この授業全体</b>の評価</div>
<div class="task-sub">①授業を改善し続けるための<b>分析を行う枠組み</b>を獲得する。<br>②<b>教育改革に参画出来る</b>ようになる。</div>
</div>

<!--
- 3つ目の課題は「この授業全体の評価」。分析の枠組みを獲得し、教育改革に参画できるように。
-->

---

<div class="page-title">模擬授業の評価</div>

# 授業アンケート

<div class="box-info" style="font-size:22px; line-height:1.5; padding:10px 18px; margin:6px 0 8px;">学生授業評価は、統計的に信頼性があり、使用法も妥当で、他の評価法と比べてバイアスもコントロールの必要も少なく、授業改善にも人事にも役立つ。 (Marsh &amp; Roche, 1997)</div>

<div style="font-size:22px; line-height:1.5; margin:2px 0 8px;">✔ 授業評価記録や授業アンケート結果が、<b>公募の補助資料</b>となっている例あり。<br>✔ 大学が実施する場合や、<b>教員自身が実施している</b>場合もあり。</div>

<div style="display:flex; gap:18px;">
<div class="box-accent" style="flex:1; font-size:19px; line-height:1.45; padding:10px 16px;">① <b>教員の教える行為(教授活動)</b>を中心にしたアンケート<br>　教育方法、学修成果、教育内容や授業など<br>　例：串本(2005) 日本の1994 – 2003年までの授業評価アンケートの特徴<br>　　　 ※千葉大は、12問の形式で実施中</div>
<div class="box-accent" style="flex:1; font-size:19px; line-height:1.45; padding:10px 16px;">② <b>学生の学ぶ行為(学習活動)</b>を中心にしたアンケート<br>　深い学びに関する評価観点 例：エントウィスル著, 山口訳 (2010)</div>
</div>

<div class="box-warn" style="font-size:19px; line-height:1.45; padding:8px 16px; margin-top:8px;"><b>この授業では体験も兼ねて、全部実施します。</b> 必要に応じて質問項目をご自身の授業に活用して下さい。<br>Hint! 授業の終了直前の数分で取らない (回答が粗雑になり回収率ダウン)　コース期間中にミニッツペーパーで簡単に何回か実施するのもGood</div>

<!--
- 授業アンケート。教授活動中心と学習活動中心の2系統。千葉大は12問で実施。体験も兼ねて全部実施する。
-->

---

<div class="page-title">模擬授業の評価</div>

# グラウンドルール <span class="tag tag-soft">復習</span>

<div style="font-size:36px; font-weight:800; margin:12px 0 2px;"><span class="task-num">1.</span><b>3K</b>：<b style="color:var(--accent-dark);">敬意を持って、忌憚なく、建設的に</b></div>
<div style="font-size:26px; font-weight:800; margin:0 0 16px 52px;">→<b>甘くするのではなく、改善すれば良くなる点をキチンと書く</b></div>

<div style="font-size:36px; font-weight:800; margin:8px 0;"><span class="task-num">2.</span><b>「さん」づけ</b>で呼ぼう</div>

<div style="font-size:36px; font-weight:800; margin:8px 0 16px;"><span class="task-num">3.</span><b>積極的な参加とオープンな心</b></div>

<div class="box-accent" style="text-align:center; font-size:25px; line-height:1.5;">第8回は、全員の参加がないと成立しません<br><b style="font-size:28px;">積極的な参加をお願いします</b></div>

<!--
- グラウンドルール3点。3K（敬意・忌憚なく・建設的に）、さんづけ、積極的な参加。
- フィードバックなどあります。そのときに、この三点を忘れずに頑張りましょう！
-->

---

<div class="page-title">まとめ</div>

# この授業では、以下の評価活動を行います <span class="tag tag-soft">評価</span>

<div class="band purple">授業における学習の到達目標として評価体験</div>
<div class="task-item" style="margin-left:18px;"><span class="task-num">1.</span><b>他受講生・ご自身</b>の模擬授業の評価</div>
<div style="font-size:22px; margin:2px 0 8px 70px;">※他受講生や教員のフィードバックは、実際の成績になります</div>

<div class="band green">今後教育者として授業改善していくための評価技法</div>
<div class="task-item" style="margin-left:18px;"><span class="task-num">2.</span><b>ご自身</b>の模擬授業の内省評価</div>
<div class="task-item" style="margin-left:18px;"><span class="task-num">3.</span><b>この授業全体</b>の評価</div>

<!--
- まとめ。到達目標としての評価体験（課題1）と、今後の授業改善のための評価技法（課題2・3）。
-->

---

<!-- _class: refs -->

<div class="page-title">まとめ</div>

# 参考文献

<div class="cite" style="font-size:19px; line-height:1.6;">
栗田佳代子, 中村長史 (編著) (2024) <i>インタラクティブ・ティーチング 実践編3</i>. 河合出版.<br>
佐藤浩章, 栗田佳代子 (編著) (2021) <i>シリーズ 大学の教授法6 授業改善</i>. 玉川大学出版部.<br>
ノエル・エントウィスル 著 山口　栄一 訳 (2010) <i>学生の理解を重視する大学授業</i>. 玉川大学出版部.<br>
串本剛 (2005) 教育目的との対応にみる教育評価の妥当性―授業評価項目の分析を具体例に.<i>『大学教育学会誌』</i>27 (1), 124-130.<br>
吉川政夫, 有沢孝治, 川野辺裕幸, 内田晴久 (2012) 構造化された授業評価アンケートの開発.<i>『広島大学 高等教育研究開発センター 大学論集』</i> 第 43 集(2011年度), 337-351.<br>
Welsch, R. G., &amp; Devlin, P. A. (2007). Developing Preservice Teachers’ Reflection: Examining the Use of Video. <i>Action in Teacher Education</i>, 28(4), 53–61. https://doi.org/10.1080/01626620.2007.10463429
</div>

<div style="font-size:22px; font-weight:800; color:var(--accent-dark); margin:14px 0 4px;">千葉大学のアンケート調査</div>
<img src="./src/fig02-img.png" alt="千葉大学のアンケート調査 質問項目" style="width:62%; display:block; border:1px solid #ddd;">

<!--
- 参考文献。あわせて千葉大学のアンケート調査の質問項目を提示。
-->
