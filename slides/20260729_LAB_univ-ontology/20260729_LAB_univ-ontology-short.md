---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">大学オントロジー</div><span class="hdr-event">研究室ゼミ｜要点版</span><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    --accent: #A6192E;          /* 千葉大ガーネット */
    --accent-dark: #7A1220;
    --accent-soft: #FBEAEC;
    --section-bg: #FDF6F7;
    --hdr-left-w: 23%;
  }
  /* ヘッダー右：イベント名ラベル＋ロゴ */
  section > header .hdr-event { margin-left: auto; align-self: center; margin-right: 14px;
    font-size: 16px; font-weight: 700; color: #6b6f76; white-space: nowrap; line-height: 1.15; }
  section > header .hdr-logo { margin-left: 0; }
  section .page-title { left: 21%; width: 38%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  h2 { color: var(--accent-dark); }
  /* 本文を縦中央寄せ（フルセット再宣言方式） */
  section.summary, section.split, section.wrap {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: stretch !important;
  }
  section.summary > h2, section.split > h2 { margin-bottom: 18px; }
  section.split.jtop, section.summary.jtop { justify-content: flex-start !important; }

  /* ===== 表紙 ===== */
  section.cover-hero { --hdr-left-w: 23%; }
  section.cover-hero .title-small { color: #2a2d33; font-size: 34px; }
  section.cover-hero .title-big { font-size: 68px; }
  section.cover-hero .title-affil { font-size: 22px; color: #4a4f57; }
  section.cover-hero .cv-kicker { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 20px; padding: 7px 18px; border-radius: 8px; margin-bottom: 20px; }

  /* ===== アジェンダ ===== */
  .agenda { display: flex; flex-direction: column; gap: 9px; margin-top: 2px; }
  .agenda-row { display: flex; align-items: center; gap: 20px; border: 1.5px solid #e4dcdd; border-radius: 14px; padding: 8px 20px; background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .agenda-left { flex: 0 0 210px; }
  .agenda-time { font-size: 16px; color: #6b6f76; font-weight: 700; margin-bottom: 4px; }
  .agenda-time .min { color: var(--accent); }
  .agenda-pill { font-size: 23px; font-weight: 800; text-align: center; border-radius: 10px; padding: 6px 0; line-height: 1.15; }
  .pill-1 { background: #FBEAEC; color: var(--accent-dark); }
  .pill-2 { background: #E7EAF3; color: #34406b; }
  .pill-3 { background: #FBEAD9; color: #9a4a12; }
  .pill-4 { background: #E3F1EF; color: #0d5d55; }
  .pill-5 { background: #EDE7F6; color: #4a2f7a; }
  .agenda-list { flex: 1; font-size: 19px; line-height: 1.45; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 3px 0; position: relative; padding-left: 1.05em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #a8a2a3; font-weight: 700; }

  /* ===== 3カード ===== */
  .cards3 { display: flex; gap: 14px; margin-top: 8px; }
  .card3 { flex: 1; border-radius: 14px; padding: 13px 17px; background: #fff; border: 1.5px solid #e7e3e4; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .card3 .c3-h { font-size: 20px; font-weight: 800; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
  .card3 .c3-h .ic { font-size: 23px; }
  .card3 .c3-b { font-size: 18px; line-height: 1.5; color: #333; }
  .card3 .c3-b strong { color: var(--accent-dark); }
  .card-a { border-top: 5px solid var(--accent); } .card-a .c3-h { color: var(--accent); }
  .card-b { border-top: 5px solid #1A6BB0; } .card-b .c3-h { color: #1A6BB0; }
  .card-c { border-top: 5px solid #B7791F; } .card-c .c3-h { color: #9a6314; }
  .card-d { border-top: 5px solid #0d7a6f; } .card-d .c3-h { color: #0d7a6f; }

  /* ===== 2列比較 ===== */
  .cmp { display: flex; gap: 16px; margin-top: 8px; align-items: stretch; }
  .cmp-col { flex: 1; border-radius: 14px; padding: 13px 19px; background: #F4F6F9; border: 1.5px solid #dfe4ea; }
  .cmp-col.good { background: var(--accent-soft); border-color: #efd0d5; }
  .cmp-col .cmp-h { font-size: 21px; font-weight: 800; color: #34406b; margin-bottom: 7px; }
  .cmp-col.good .cmp-h { color: var(--accent-dark); }
  .cmp-col ul { margin: 0 0 0 1.1em; font-size: 18px; line-height: 1.5; }
  .cmp-col li { margin: 5px 0; }
  .cmp-col li strong { color: var(--accent-dark); }

  /* ===== 大きな数字スタット ===== */
  .stat-row { display: flex; gap: 15px; margin: 10px 0; }
  .stat { flex: 1; text-align: center; background: var(--accent-soft); border-radius: 12px; padding: 12px 8px; }
  .stat .num { font-size: 42px; font-weight: 800; color: var(--accent); line-height: 1; }
  .stat .num .u { font-size: 22px; }
  .stat .lbl { font-size: 16.5px; color: #4a4f57; margin-top: 7px; line-height: 1.35; }
  .stat.mute { background: #F1F2F4; } .stat.mute .num { color: #6b7280; }

  /* ===== フロー ===== */
  .flow { display: flex; align-items: stretch; gap: 7px; margin: 10px 0; }
  .flow .arrow { align-self: center; font-size: 22px; font-weight: 800; color: var(--accent); }
  .fstep { flex: 1; border-radius: 12px; padding: 10px 12px; background: #fff; border: 1.5px solid #e4dcdd; }
  .fstep .fs-n { display: inline-block; font-size: 14px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 999px; width: 23px; height: 23px; line-height: 23px; text-align: center; margin-bottom: 5px; }
  .fstep .fs-h { font-size: 17px; font-weight: 800; color: var(--accent-dark); line-height: 1.3; margin-bottom: 4px; }
  .fstep .fs-b { font-size: 15.5px; line-height: 1.4; color: #333; }

  /* ===== 引用・出典 ===== */
  .gquote { font-size: 19px; line-height: 1.55; background: #F8F5F5; border-left: 6px solid var(--accent); border-radius: 8px; padding: 11px 18px; margin: 8px 0; color: #2a2d33; }
  .gquote strong { color: var(--accent-dark); }
  .gquote .src { display: block; margin-top: 6px; font-size: 15px; color: #7a7378; }
  .srcline { font-size: 15px; color: #7a7378; margin-top: 8px; line-height: 1.45; }
  .srcline a { color: var(--accent); text-decoration: none; word-break: break-all; }
  .srcline b { color: #5a5559; font-weight: 700; }
  .attr { font-size: 15px; color: #6e7378; margin-top: 6px; }

  /* ===== コード／トリプル ===== */
  .code { background: #F5F6F8; border: 1px solid #e0e3e8; border-radius: 8px; padding: 10px 16px; font-family: "SFMono-Regular", Menlo, Consolas, monospace; font-size: 17px; line-height: 1.55; color: #2a2d33; overflow-wrap: anywhere; }
  .code .k { color: #A6192E; font-weight: 700; }
  .code .c { color: #7a7378; }
  .triple { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 10px 0; }
  .triple .t-node { background: var(--accent-soft); border: 2px solid var(--accent); border-radius: 10px; padding: 9px 18px; font-size: 20px; font-weight: 700; color: var(--accent-dark); }
  .triple .t-edge { background: #fff; border: 2px dashed #9aa0a6; border-radius: 999px; padding: 6px 16px; font-size: 17px; color: #4a4f57; }
  .triple .t-ar { font-size: 22px; color: #9aa0a6; }

  /* ===== 表 ===== */
  .tbl { width: 100%; border-collapse: collapse; font-size: 17.5px; margin: 4px 0; }
  .tbl th { text-align: left; color: #fff; background: var(--accent); padding: 7px 11px; font-weight: 700; }
  .tbl td { border-bottom: 1px solid #e7e3e4; padding: 6px 11px; vertical-align: top; line-height: 1.4; }
  .tbl tr:nth-child(even) td { background: #FBF8F8; }
  .tbl td.mono { font-family: Menlo, Consolas, monospace; font-size: 16px; color: var(--accent-dark); white-space: nowrap; }
  .tbl td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .tbl.sm { font-size: 16px; } .tbl.sm td, .tbl.sm th { padding: 5px 9px; }

  /* ===== グリッド（ノード型など） ===== */
  .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 4px; }
  .gcell { background: #fff; border: 1.5px solid #e4dcdd; border-left: 5px solid var(--accent); border-radius: 10px; padding: 8px 13px; }
  .gcell.blue { border-left-color: #1A6BB0; } .gcell.blue .gc-h { color: #1A6BB0; }
  .gcell.gray { border-left-color: #8a9098; } .gcell.gray .gc-h { color: #5f666e; }
  .gcell .gc-h { font-size: 17.5px; font-weight: 800; color: var(--accent-dark); margin-bottom: 2px; }
  .gcell .gc-h .en { font-family: Menlo, Consolas, monospace; font-size: 14.5px; color: #7a7378; font-weight: 600; }
  .gcell .gc-b { font-size: 15.5px; line-height: 1.4; color: #444; }

  /* ===== 帯 ===== */
  .band { background: var(--accent-soft); border-left: 8px solid var(--accent); border-radius: 6px; padding: 10px 20px; margin: 10px 0; font-size: 20px; font-weight: 700; color: #2a2d33; }
  .band.blue { background: #EAF2FB; border-left-color: #1A6BB0; }
  .band.gray { background: #F1F2F4; border-left-color: #8a9098; }

  /* ===== 提案マーク ===== */
  .propose { display: inline-block; background: #6b4ea8; color: #fff; font-size: 15px; font-weight: 800; border-radius: 999px; padding: 3px 14px; margin-bottom: 8px; letter-spacing: .04em; }
  .checkmark { display: inline-block; background: #B7791F; color: #fff; font-size: 14px; font-weight: 800; border-radius: 5px; padding: 2px 9px; margin-left: 6px; }

  /* ===== 図 ===== */
  section.fig .fig-area svg { max-height: 400px; width: auto; max-width: 100%; }
  .figwrap { text-align: center; }
  .figwrap img { max-height: 380px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,.12); }

  /* ===== 参考文献 ===== */
  .lit { width: 100%; border-collapse: collapse; margin: 4px 0; font-size: 16px; }
  .lit th { text-align: left; color: var(--accent-dark); border-bottom: 2px solid var(--accent); padding: 6px 9px; }
  .lit td { border-bottom: 1px solid #ebe6e7; padding: 5px 9px; vertical-align: top; line-height: 1.4; }
  .lit td.tag { white-space: nowrap; font-weight: 700; color: var(--accent); }
  .lit a { color: #1A6BB0; text-decoration: none; word-break: break-all; }

  .hl { color: var(--accent); font-weight: 700; }
  .hl-dark { color: var(--accent-dark); font-weight: 700; }
  .cl-sub { font-weight: 400; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="cv-kicker">研究室ゼミ｜論文紹介（要点版・全20枚）</div>
<div class="title-small">カリキュラムを「機械が読める構造」にする</div>
<div class="title-big">大学オントロジー</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">題材：Liang et al. (2026) K12-KGraph（arXiv:2605.09635v3）</div>
<div class="title-date">2026/7/29（水）</div>
<div class="title-affil">千葉大学 国際未来教育基幹 助教　田川 翔（タガワ ショウ）<br>博士（理学）・専門：高等教育論／AI教育工学</div>
</div>
</div>

<!--
- 要点版です。フルの55枚版から、論文の「結果」と「優れた点」を中心に20枚へ絞りました。
- 前半にオントロジーの定義を1枚だけ置き、あとは論文の設計・結果・大学への含意に集中します。
-->

---

<!-- _class: summary -->

<div class="page-title">本日の流れ</div>

## 3部構成 ── 定義 → 論文の設計 → 結果と大学への含意

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">導入 ・ <span class="min">2枚</span></div>
<div class="agenda-pill pill-1">定義</div>
</div>
<div class="agenda-list">

- オントロジーとは何か（哲学の存在論 → Gruber の「概念化の明示的な仕様」）を**1枚に結晶化**

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第1部 ・ <span class="min">6枚</span></div>
<div class="agenda-pill pill-3">論文の設計</div>
</div>
<div class="agenda-list">

- **K12-KGraph**：教科書からグラフを作り、そこから**評価と学習の両方**を導く仕組みと品質保証

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第2部 ・ <span class="min">8枚</span></div>
<div class="agenda-pill pill-4">結果</div>
</div>
<div class="agenda-list">

- 最新モデルでも**EM 57%**。少量SFTが**14万件級を上回る**理由と、**教科横断の転移**

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第3部 ・ <span class="min">4枚</span></div>
<div class="agenda-pill pill-5">含意</div>
</div>
<div class="agenda-list">

- 論文の限界と、**大学オントロジー**への読み替え・持ち帰り

</div>
</div>

</div>

<div class="takeaway">ねらい：この論文の「結果」と「優れた点」を、批判できる形にして持ち帰る</div>

<!--
- 3部構成に絞りました。導入で定義を1枚、第1部が論文の設計、第2部が結果、第3部が含意です。
- 全体の重心を第2部の結果に置いています。
-->

---

<!-- _class: summary -->

<div class="page-title">オントロジーの定義</div>

## 「概念化の明示的な仕様」── 存在論から、機械が推論できる知識へ

<div class="cards3">
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🏛</span>源流：哲学の存在論</div>
<div class="c3-b">「<strong>何が存在するか</strong>」を問う形而上学の一分野。世界を構成するカテゴリの体系を扱う。</div>
</div>
<div class="card3 card-a">
<div class="c3-h"><span class="ic">💻</span>情報学が借用</div>
<div class="c3-b">1990年代に知識工学が借用。「<strong>あるドメインに何が存在すると約束するか</strong>」を機械可読に書き下したもの。</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🧮</span>なぜ「形式的」か</div>
<div class="c3-b">機械が処理するには形式言語が要る。基盤は<strong>一階述語論理(FOL)</strong>、その決定可能な部分＝<strong>記述論理(DL)</strong>が OWL の土台。だから<strong>一貫性検証と暗黙知の導出</strong>ができる。</div>
</div>
</div>

<div class="gquote">
「オントロジーとは、<strong>概念化（conceptualization）の明示的な仕様</strong>である」
<span class="src">Gruber, T. R. (1993). A translation approach to portable ontology specifications. <i>Knowledge Acquisition</i>, 5(2), 199–220.</span>
</div>

<div class="gquote">
のちに Studer らが「<strong>形式的で明示的な、共有された概念化の仕様</strong>」と精緻化。<br>
＝ ①<strong>形式的</strong>（機械が処理できる）②<strong>明示的</strong>（暗黙知にしない）③<strong>共有された</strong>（一人の私見でない）
<span class="src">Studer, R., Benjamins, V. R., &amp; Fensel, D. (1998). Knowledge engineering: Principles and methods. <i>Data &amp; Knowledge Engineering</i>, 25(1–2), 161–197.</span>
</div>

<div class="takeaway">オントロジー＝合意された「存在の辞書」＋機械が矛盾を検査し暗黙知を導ける形式</div>

<!--
- 今日の唯一の定義スライドです。
- オントロジーはもともと哲学の言葉で「何が存在するか」を問う分野。それを1990年代に知識工学が借りました。
- Gruberの定義が最も有名で「概念化の明示的な仕様」。Studerらが形式的・明示的・共有された、の3点に精緻化しました。
- なぜ「形式的」が要るかというと、機械に推論させるには形式言語が要るからです。一階述語論理、その決定可能な部分である記述論理がOWLの土台になっていて、だから一貫性検証や暗黙知の導出ができる。ここが単なる辞書やデータベースとの違いです。
-->

---

<!-- _class: split -->

<div class="page-title">書誌情報</div>

## Liang et al. (2026) ── 何をした論文か

<div class="split-body">
<div class="left">

### 基本情報

<table class="tbl sm">
<tr><td style="width:26%"><b>原題</b></td><td>K12-KGraph: A Curriculum-Aligned Knowledge Graph for Benchmarking and Training Educational LLMs</td></tr>
<tr><td><b>著者</b></td><td>Hao Liang, Qihan Lin, Zhaoyang Han, Xiaochen Ma, Zhen Hao Wong, Meiyi Qiang, Linzhuang Sun, Wentao Zhang</td></tr>
<tr><td><b>所属</b></td><td>北京大学／Institute for Advanced Algorithms Research (上海)／OriginHub Technology／中関村学院</td></tr>
<tr><td><b>出典</b></td><td>arXiv:2605.09635v3 [cs.CL]　2026年7月23日</td></tr>
<tr><td><b>ライセンス</b></td><td>CC BY-NC-SA 4.0</td></tr>
</table>

<div class="srcline">コード・データ・サイトすべて公開<br>https://github.com/haolpku/K12-Dataset</div>

</div>
<div class="right">

### ひとことで言うと

<div class="band">中国の検定教科書から<b>ナレッジグラフを1つ</b>作り、<br>そこから<b>ベンチマークと学習データの両方</b>を導いた</div>

<div class="gcell">
<div class="gc-h">① K12-KGraph</div>
<div class="gc-b">数学・物理・化学・生物 × 小中高。<strong>9ノード型・14関係型</strong></div>
</div>
<div class="gcell">
<div class="gc-h">② K12-Bench</div>
<div class="gc-b"><strong>23,640問</strong>の複数選択ベンチマーク（5タスク族）</div>
</div>
<div class="gcell">
<div class="gc-h">③ K12-Train</div>
<div class="gc-b"><strong>7,335件</strong>のSFTデータ（テキスト2,267＋マルチモーダル5,068）</div>
</div>

<div class="band blue">1つのグラフが、<b>測る道具</b>と<b>教える道具</b>の両方を生む</div>

</div>
</div>

<!--
- 論文の基本情報です。北京大学が中心のグループ、今年7月にv3。ライセンスがCC BY-NC-SAなので日本語全訳を同じフォルダに置いてあります。
- 一番大事なのは右下。グラフを1つ作ると、そこから評価データと学習データの両方が出てくる。この「1粒で2度おいしい」構造がこの論文の骨格です。
-->

---

<!-- _class: summary -->

<div class="page-title">問題設定</div>

## 試験は解ける。だが「カリキュラムの構造」は分かっていない

<div class="gquote">
既存ベンチマーク（C-Eval、CMMLU、GaokaoBench、EduEval）が測っているのは「試験問題に答えられるか」＝<strong>事実の想起</strong>だけである。
</div>

<div class="band">論文が提唱する概念：<b>カリキュラム認知（curriculum cognition）</b></div>

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">❓</span>WHY</div>
<div class="c3-b"><strong>なぜ</strong>ある話題を別の話題より先に学ばねばならないのか<br><span class="cl-sub">＝前提知識の連鎖</span></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🔗</span>HOW</div>
<div class="c3-b">実験室での実験が理論的概念と<strong>どう</strong>つながっているのか<br><span class="cl-sub">＝実験と概念の結び付き</span></div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">📍</span>WHERE</div>
<div class="c3-b">各アイデアが教科書の<strong>どこ</strong>に実際に置かれているのか<br><span class="cl-sub">＝所在と配列順序</span></div>
</div>
</div>

<div class="gquote">
有能な中学1年の数学教師は、「一次方程式」が単元名であることを知っているだけではない。それが<strong>四則演算を前提として要求する</strong>こと、「代数式」の下で「不等式」と<strong>兄弟関係にある</strong>こと、そして教科書の<strong>第3章に初出する</strong>ことを知っている。
<span class="src">Liang et al. (2026) §1 Introduction を要約</span>
</div>

<div class="takeaway">「答えられること」は良い教師の仕事のごく一部にすぎない</div>

<!--
- 論文の問題意識です。既存のベンチマークは全部「試験に答えられるか」しか見ていない。
- でも良い教師がやっていることの大部分は、答えることではなく、順序を設計したり、実験と概念を繋いだりすることです。論文はこれを「カリキュラム認知」と名付けました。WHY・HOW・WHEREの3点セットです。
- 中学の数学教師の例が分かりやすい。単元名を知っているだけの人と、前提・兄弟関係・所在を知っている人は別物です。
-->

---

<!-- _class: summary -->

<div class="page-title">スキーマ設計</div>

## 9ノード型・14関係型 ── 教科書を「意味をもつ部品」に分解する

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">テキスト成分（構造）＝ 7ノード</div>
<ul>
<li><strong>コンテナ</strong>：Book / Chapter / Section</li>
<li><strong>中身</strong>：Concept（定義・重要度）／Skill／Experiment（器具・現象・結論）／Exercise</li>
<li><strong>主な辺</strong>：<code>is_a</code>（分類）・<code>prerequisites_for</code>（前提）・<code>relates_to</code>（関連）・<code>verifies</code>（実験で検証）・<code>tests_concept/skill</code>・<code>appears_in</code>（所在）・<code>leads_to</code>（章の順序）</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">マルチモーダル成分（視覚的接地）＝ 2ノード<br><span style="font-size:15px;color:#7a7378;font-weight:600">★ 既存の教育KGに無かった部分</span></div>
<ul>
<li><strong>ノード</strong>：Figure（図1枚）／VisualElement（図の中の教育的な局所領域）</li>
<li><strong>辺</strong>：<code>illustrates</code>・<code>refers_to</code>（図/要素→概念）・<code>requires_figure</code>（問題→図）</li>
<li><code>supports_edge</code> は<strong>「辺を指す辺」</strong>。<span class="hl-dark">この図が、AとBの前提関係の視覚的証拠だ</span>まで表せる</li>
</ul>
</div>
</div>

<div class="band gray">異種プロパティグラフ。各ノードは型付き属性をもち、すべての内容ノードは <code>appears_in</code> で教科書上の位置に錨を下ろす</div>

<div class="srcline"><b>出典：</b>Liang et al. (2026) 表9（付録7.1）</div>

<div class="takeaway">図を「1枚の絵」でなく「意味をもつ部品」に。視覚的接地が独自性</div>

<!--
- スキーマです。左がテキスト側の7ノード、右が図側の2ノード。
- 独自性は右です。図全体だけでなく、図の中の「ここの部分」（VisualElement）に意味を与えている。
- 一番凝っているのがsupports_edge。「辺を指す辺」で、「この図はAがBの前提であることの視覚的証拠だ」ということまで表現できます。
-->

---

<!-- _class: fig -->

<div class="page-title">1つのグラフ、2つの資源</div>

## 同じ部分グラフが、評価問題にも学習データにもなる

<div class="fig-area">
<svg viewBox="0 0 880 400" xmlns="http://www.w3.org/2000/svg"><defs><marker id="a2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#A6192E"/></marker><marker id="a3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#9aa0a6"/></marker></defs><rect x="0" y="0" width="880" height="400" fill="#ffffff"/><rect x="40" y="120" width="230" height="170" rx="14" fill="#FBEAEC" stroke="#A6192E" stroke-width="2.5"/><text x="155" y="150" font-size="18" fill="#A6192E" text-anchor="middle" font-family="sans-serif" font-weight="bold">K12-KGraph</text><text x="155" y="172" font-size="14" fill="#7A1220" text-anchor="middle" font-family="sans-serif">検証済みの部分グラフ</text><circle cx="95" cy="215" r="21" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="95" y="220" font-size="13" fill="#7A1220" text-anchor="middle" font-family="sans-serif">四則</text><circle cx="215" cy="215" r="21" fill="#fff" stroke="#A6192E" stroke-width="2"/><text x="215" y="220" font-size="13" fill="#7A1220" text-anchor="middle" font-family="sans-serif">一次式</text><line x1="117" y1="215" x2="188" y2="215" stroke="#A6192E" stroke-width="2" marker-end="url(#a2)"/><text x="153" y="205" font-size="12.5" fill="#A6192E" text-anchor="middle" font-family="sans-serif">prereq</text><text x="155" y="268" font-size="13" fill="#7A1220" text-anchor="middle" font-family="sans-serif">＋ 教科書の根拠引用</text><path d="M275,180 L360,110" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#a3)"/><path d="M275,230 L360,300" stroke="#9aa0a6" stroke-width="2.5" marker-end="url(#a3)"/><rect x="370" y="40" width="470" height="140" rx="14" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="2.5"/><text x="392" y="68" font-size="17" fill="#1A6BB0" font-family="sans-serif" font-weight="bold">(A) K12-Bench ── 測る</text><text x="392" y="94" font-size="14.5" fill="#2a2d33" font-family="sans-serif">問：「一次方程式」の前提となる概念をすべて選べ</text><text x="392" y="118" font-size="14.5" fill="#0d5d55" font-family="sans-serif">正解 = 真のグラフ近傍（四則演算 …）</text><text x="392" y="142" font-size="14.5" fill="#9a4a12" font-family="sans-serif">誤答 = 2ホップ近傍・is_a の兄弟から機械的に採取</text><text x="392" y="166" font-size="13.5" fill="#6b6f76" font-family="sans-serif">→ LLM生成ではないので、正しさがグラフに帰着する</text><rect x="370" y="230" width="470" height="140" rx="14" fill="#E9F5F3" stroke="#0d7a6f" stroke-width="2.5"/><text x="392" y="258" font-size="17" fill="#0d7a6f" font-family="sans-serif" font-weight="bold">(B) K12-Train ── 教える</text><text x="392" y="284" font-size="14.5" fill="#2a2d33" font-family="sans-serif">問：なぜ「一次方程式」より先に「四則演算」を学ぶのか</text><text x="392" y="308" font-size="14.5" fill="#2a2d33" font-family="sans-serif">答：関係そのものを言語化させる（テンプレで強制）</text><text x="392" y="332" font-size="13.5" fill="#6b6f76" font-family="sans-serif">→ 事実ではなく「構造」を教師信号にする</text><text x="392" y="356" font-size="13.5" fill="#6b6f76" font-family="sans-serif">→ 属性を刈り込み、低確信度の辺は除外してから生成</text></svg>
</div>

<div class="takeaway">すべてのサンプルが部分グラフに遡れる＝難易度・網羅・正確性を制御できる</div>

<!--
- この論文の構造をひと目で示す図です。左が検証済みのグラフ、右上が評価、右下が学習。
- 上が「測る」。前提関係を問う4択問題にする。誤答も機械的に採取するので、LLMが変な選択肢を作る余地がない。
- 下が「教える」。同じ関係を「なぜ先に学ぶのか」という問いに変えて、関係そのものを言語化させる。
- ポイントは、どちらも同じ部分グラフから出ていること。だから難易度も網羅性も制御できます。ここがこの論文の一番の強みです。
-->

---

<!-- _class: split -->

<div class="page-title">構築と品質保証</div>

## 「LLMが作ったグラフ」を、どう信用させるか

<div class="split-body">
<div class="left">

### 5段階の自動構築 ＋ 3層の検証

<div class="flow" style="margin:6px 0">
<div class="fstep"><span class="fs-n">1</span><div class="fs-h">OCR</div><div class="fs-b">MinerU でPDF→構造化MD</div></div>
<span class="arrow">▶</span>
<div class="fstep"><span class="fs-n">2</span><div class="fs-h">節分割</div><div class="fs-b">各図を節の本文に紐付け</div></div>
<span class="arrow">▶</span>
<div class="fstep"><span class="fs-n">3</span><div class="fs-h">LLM抽出</div><div class="fs-b">GPT-5.2。<strong>全辺に根拠引用か確信度</strong></div></div>
</div>
<div class="flow" style="margin:6px 0">
<div class="fstep"><span class="fs-n">4</span><div class="fs-h">階層マージ</div><div class="fs-b">書籍→教科で重複排除・突合</div></div>
<span class="arrow">▶</span>
<div class="fstep"><span class="fs-n">5</span><div class="fs-h">DAG検証</div><div class="fs-b"><code>is_a</code>・前提辺に<strong>閉路検出</strong></div></div>
</div>

<div class="band" style="font-size:17.5px">検証は <b>KGだけを全数</b>、ベンチマーク・学習データは<b>抜き取り</b>に留める</div>

</div>
<div class="right">

### 得られた品質

<div class="stat-row">
<div class="stat">
<div class="num">12<span class="u">名</span></div>
<div class="lbl">教科資格をもつアノテータ<br>（4教科×3名）が<b>全数検証</b></div>
</div>
<div class="stat">
<div class="num">0.84</div>
<div class="lbl">アノテータ間一致<br>Fleiss' κ（全体・調停前）</div>
</div>
<div class="stat">
<div class="num">98.4<span class="u">%</span></div>
<div class="lbl">K12-Bench 抜き取りで<br>完全に正しかった項目</div>
</div>
</div>

<div class="band blue" style="font-size:17.5px">ベンチマークは<b>グラフから決定論的に導出</b>。だから正しさがグラフの正しさに帰着する</div>

</div>
</div>

<div class="takeaway">「グラフを直せばベンチマークも直る」── 品質が一点に集約する設計</div>

<!--
- ここは方法論として一番参考になるところです。5段階で作り、3層で検証する。
- 圧巻なのは12名で全数検証していること。κ=0.84はかなり高い一致です。
- そして設計思想。ベンチマークをグラフから決定論的に導出しているので、グラフさえ正しければベンチマークも正しい。だから検証をグラフ1点に集中できる。大学でやる場合にもそのまま真似できる考え方です。
-->

---

<!-- _class: summary -->

<div class="page-title">K12-Bench</div>

## 5つのタスク族 ── 何を測っているのか

<table class="tbl">
<tr><th style="width:15%">タスク族</th><th style="width:20%">検査する関係</th><th>問い方</th></tr>
<tr>
<td><b>Ground</b><br><span style="font-size:15px;color:#7a7378">知識の接地</span></td>
<td class="mono">tests_concept<br>tests_skill</td>
<td>①問題文を見せ、それが試す中核概念・技能を選ばせる　②概念を見せ、それを評価する問題を選ばせる</td>
</tr>
<tr>
<td><b>Prereq</b><br><span style="font-size:15px;color:#7a7378">前提推論</span></td>
<td class="mono">prerequisites_for</td>
<td>①概念の<strong>前提の閉包</strong>を選ばせる　②その概念の<strong>最も直接的な後続</strong>をすべて選ばせる</td>
</tr>
<tr>
<td><b>Neighbor</b><br><span style="font-size:15px;color:#7a7378">近傍推薦</span></td>
<td class="mono">is_a / relates_to</td>
<td>概念を見せ、直接関連する概念をすべて選ばせる（誤答は<strong>2ホップ外環</strong>から採取）</td>
</tr>
<tr>
<td><b>Evidence</b><br><span style="font-size:15px;color:#7a7378">実験の証拠連鎖</span></td>
<td class="mono">verifies</td>
<td>①概念を検証する実験を選ばせる　②実験が検証する概念を選ばせる</td>
</tr>
<tr>
<td><b>Locate</b><br><span style="font-size:15px;color:#7a7378">章横断の索引</span></td>
<td class="mono">appears_in<br>leads_to</td>
<td>①知識が<strong>初出する章</strong>を選ばせる　②ある章の<strong>前提となる章</strong>を選ばせる</td>
</tr>
</table>

<div class="band">全問<b>複数選択</b>。正解も誤答も<b>グラフから機械的に採取</b>（LLM生成でない）。正解は<b>1〜3個</b>で可変</div>

<div class="takeaway">部分点は無い。正解集合を過不足なく当てて初めてEM＝1</div>

<!--
- 5つのタスク族です。それぞれグラフの特定の関係に対応しています。
- 重要なのは出題形式。4択ですが、正解が1個から3個まで可変の複数選択で、正解が1個のときも複数選択の形式で答えなければならない。「AとBとC」なのか「Aだけ」なのかを自分で判断させる。
- 部分的に当てるのは簡単だが、過不足なく当てるのは非常に難しい。これが後で効いてきます。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ① 評価</div>

## 最新モデルでも、完全一致は 57% にとどまる

<div class="fig-area">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 900 480"><rect width="900" height="480" x="0" y="0" fill="none"></rect><path d="M317.5 10L317.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M419.5 10L419.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M522.5 10L522.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M624.5 10L624.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M727.5 10L727.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M830.5 10L830.5 418" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M317.5 10L317.5 418" fill="none" pointer-events="visible" stroke="#cccccc" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:12px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" y="6" transform="translate(573.375 446)" fill="#1a1a1a">Overall EM (%)</text><path d="M316.8 10.5L311.8 10.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 47.5L311.8 47.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 84.5L311.8 84.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 121.5L311.8 121.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 158.5L311.8 158.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 195.5L311.8 195.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 232.5L311.8 232.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 269.5L311.8 269.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 306.5L311.8 306.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 344.5L311.8 344.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 381.5L311.8 381.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M316.8 418.5L311.8 418.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 28.5455)" fill="#555555">Gemini-3-Flash</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 65.6364)" fill="#555555">Gemini-2.5-Flash</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 102.7273)" fill="#555555">Gemma-4-31B-IT</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 139.8182)" fill="#555555">GPT-5.2</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 176.9091)" fill="#555555">Qwen3-32B</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 214)" fill="#555555">Ministral-3-14B-It</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 251.0909)" fill="#555555">GLM-4.7-Flash</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 288.1818)" fill="#555555">GPT-5-mini</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 325.2727)" fill="#555555">GPT-4o</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 362.3636)" fill="#555555">LLaMA-3-8B-Instruct</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(308.75 399.4545)" fill="#555555">ランダム推測</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(316.75 426)" fill="#555555">0</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(419.4 426)" fill="#555555">20</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(522.05 426)" fill="#555555">40</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(624.7 426)" fill="#555555">60</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(727.35 426)" fill="#555555">80</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(830 426)" fill="#555555">100</text><path d="M320.8 17L605.8 17A4 4 0 0 1 609.8 21L609.8 40L316.8 40L316.8 21A4 4 0 0 1 320.8 17" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M320.8 54.1L560.6 54.1A4 4 0 0 1 564.6 58.1L564.6 77.1L316.8 77.1L316.8 58.1A4 4 0 0 1 320.8 54.1" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 91.2L550.9 91.2A4 4 0 0 1 554.9 95.2L554.9 114.2L316.8 114.2L316.8 95.2A4 4 0 0 1 320.8 91.2" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 128.3L532.4 128.3A4 4 0 0 1 536.4 132.3L536.4 151.3L316.8 151.3L316.8 132.3A4 4 0 0 1 320.8 128.3" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 165.4L531.4 165.4A4 4 0 0 1 535.4 169.4L535.4 188.4L316.8 188.4L316.8 169.4A4 4 0 0 1 320.8 165.4" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 202.5L505.2 202.5A4 4 0 0 1 509.2 206.5L509.2 225.5L316.8 225.5L316.8 206.5A4 4 0 0 1 320.8 202.5" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="5" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 239.6L475.5 239.6A4 4 0 0 1 479.5 243.6L479.5 262.6L316.8 262.6L316.8 243.6A4 4 0 0 1 320.8 239.6" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="6" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 276.7L475.5 276.7A4 4 0 0 1 479.5 280.7L479.5 299.7L316.8 299.7L316.8 280.7A4 4 0 0 1 320.8 276.7" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="7" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 313.8L472.4 313.8A4 4 0 0 1 476.4 317.8L476.4 336.8L316.8 336.8L316.8 317.8A4 4 0 0 1 320.8 313.8" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="8" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M320.8 350.9L349.7 350.9A4 4 0 0 1 353.7 354.9L353.7 373.9L316.8 373.9L316.8 354.9A4 4 0 0 1 320.8 350.9" fill="#9AA0A6" ecmeta_series_index="0" ecmeta_data_index="9" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M320.8 388L347.1 388A4 4 0 0 1 351.1 392L351.1 411L316.8 411L316.8 392A4 4 0 0 1 320.8 388" fill="#C8CCD0" ecmeta_series_index="0" ecmeta_data_index="10" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(614.8158 28.5455)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">57.1</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(569.6498 65.6364)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">48.3</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(559.898 102.7273)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">46.4</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(541.421 139.8182)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">42.8</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(540.3945 176.9091)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">42.6</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(514.2188 214)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">37.5</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(484.4503 251.0909)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">31.7</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(484.4503 288.1818)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">31.7</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(481.3708 325.2727)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">31.1</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(358.704 362.3636)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">7.2</text><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(356.1378 399.4545)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">6.7</text><path d="M351 10L351 418" fill="none" pointer-events="visible" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6,3" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:13px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" y="-6.5" transform="matrix(0,1,-1,0,356.1378,413)" fill="#6b7280">ランダム 6.7</text><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;fill:rgba(182,27,50,1);}.zr0-cls-2:hover {cursor:pointer;fill:rgba(215,123,137,1);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(169,176,182,1);}.zr0-cls-4:hover {cursor:pointer;fill:rgba(220,224,228,1);}]]></style></svg>
</div>

<div class="takeaway">試験問題では人間を超えるモデルが、カリキュラム構造では半分しか当てられない</div>

<!--
- 結果の1枚目。K12-Bench全体の完全一致スコア。
- 最上位のGemini-3-Flashで57.1%。強力なオープンソースのGemma-4-31B-ITで46.4%。
- 一番下、LLaMA-3-8B-Instructは7.2%で、ランダム推測の6.7%とほぼ変わりません。複数選択の出力形式そのものに追随できていない。
- 高考の問題は解けるモデルが、カリキュラムの構造については半分しか当てられない。これが論文の中心的な発見です。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ② タスク別</div>

## 最も難しいのは Prereq（前提）と Neighbor（近傍）

<div class="fig-area">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 940 440"><rect width="940" height="440" x="0" y="0" fill="none"></rect><path d="M83.7 344.5L916 344.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M83.7 278.5L916 278.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M83.7 211.5L916 211.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M83.7 145.5L916 145.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M83.7 79.5L916 79.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M83.7 46.5L916 46.5" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:12px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" y="-6" transform="translate(83.68 31)" fill="#1a1a1a">EM (%)</text><path d="M83.7 344.5L916 344.5" fill="none" pointer-events="visible" stroke="#cccccc" stroke-linecap="round" class="zr0-cls-0"></path><path d="M83.5 344L83.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M250.5 344L250.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M416.5 344L416.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M583.5 344L583.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M749.5 344L749.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M916.5 344L916.5 349" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 344)" fill="#555555">0</text><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 277.7778)" fill="#555555">20</text><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 211.5556)" fill="#555555">40</text><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 145.3333)" fill="#555555">60</text><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 79.1111)" fill="#555555">80</text><text dominant-baseline="central" text-anchor="end" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" transform="translate(75.68 46)" fill="#555555">90</text><path d="M-37.5 0l75 0l0 36l-75 0Z" transform="translate(166.912 352)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="9" transform="translate(166.912 352)" fill="#555555">Ground</text><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="27" transform="translate(166.912 352)" fill="#555555">知識の接地</text><path d="M-30 0l60 0l0 36l-60 0Z" transform="translate(333.376 352)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="9" transform="translate(333.376 352)" fill="#555555">Prereq</text><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="27" transform="translate(333.376 352)" fill="#555555">前提推論</text><path d="M-30.5 0l61.1 0l0 36l-61 0Z" transform="translate(499.84 352)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="9" transform="translate(499.84 352)" fill="#555555">Neighbor</text><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="27" transform="translate(499.84 352)" fill="#555555">近傍推薦</text><path d="M-37.5 0l75 0l0 36l-75 0Z" transform="translate(666.304 352)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="9" transform="translate(666.304 352)" fill="#555555">Evidence</text><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="27" transform="translate(666.304 352)" fill="#555555">実験の証拠</text><path d="M-30 0l60 0l0 36l-60 0Z" transform="translate(832.768 352)" fill="none" pointer-events="visible" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="9" transform="translate(832.768 352)" fill="#555555">Locate</text><text dominant-baseline="central" text-anchor="middle" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="27" transform="translate(832.768 352)" fill="#555555">章の索引</text><path d="M103.5 134.1L124.8 134.1A4 4 0 0 1 128.8 138.1L128.8 344L99.5 344L99.5 138.1A4 4 0 0 1 103.5 134.1" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M270 228.8L291.3 228.8A4 4 0 0 1 295.3 232.8L295.3 344L266 344L266 232.8A4 4 0 0 1 270 228.8" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M436.4 233.4L457.7 233.4A4 4 0 0 1 461.7 237.4L461.7 344L432.4 344L432.4 237.4A4 4 0 0 1 436.4 233.4" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M602.9 187.1L624.2 187.1A4 4 0 0 1 628.2 191.1L628.2 344L598.9 344L598.9 191.1A4 4 0 0 1 602.9 187.1" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M769.4 73.5L790.7 73.5A4 4 0 0 1 794.7 77.5L794.7 344L765.4 344L765.4 77.5A4 4 0 0 1 769.4 73.5" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M138.7 176.5L160 176.5A4 4 0 0 1 164 180.5L164 344L134.7 344L134.7 180.5A4 4 0 0 1 138.7 176.5" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M305.1 250.3L326.4 250.3A4 4 0 0 1 330.4 254.3L330.4 344L301.1 344L301.1 254.3A4 4 0 0 1 305.1 250.3" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M471.6 294.3L492.9 294.3A4 4 0 0 1 496.9 298.3L496.9 344L467.6 344L467.6 298.3A4 4 0 0 1 471.6 294.3" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M638.1 200.6L659.4 200.6A4 4 0 0 1 663.4 204.6L663.4 344L634.1 344L634.1 204.6A4 4 0 0 1 638.1 200.6" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M804.5 101L825.8 101A4 4 0 0 1 829.8 105L829.8 344L800.5 344L800.5 105A4 4 0 0 1 804.5 101" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M173.8 175.8L195.2 175.8A4 4 0 0 1 199.2 179.8L199.2 344L169.8 344L169.8 179.8A4 4 0 0 1 173.8 175.8" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M340.3 284.7L361.6 284.7A4 4 0 0 1 365.6 288.7L365.6 344L336.3 344L336.3 288.7A4 4 0 0 1 340.3 284.7" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M506.8 300.6L528.1 300.6A4 4 0 0 1 532.1 304.6L532.1 344L502.8 344L502.8 304.6A4 4 0 0 1 506.8 300.6" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M673.2 206.3L694.5 206.3A4 4 0 0 1 698.5 210.3L698.5 344L669.2 344L669.2 210.3A4 4 0 0 1 673.2 206.3" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M839.7 111.9L861 111.9A4 4 0 0 1 865 115.9L865 344L835.7 344L835.7 115.9A4 4 0 0 1 839.7 111.9" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M209 321.8L230.3 321.8A4 4 0 0 1 234.3 325.8L234.3 344L205 344L205 325.8A4 4 0 0 1 209 321.8" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M375.5 321.8L396.8 321.8A4 4 0 0 1 400.8 325.8L400.8 344L371.5 344L371.5 325.8A4 4 0 0 1 375.5 321.8" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M541.9 321.8L563.3 321.8A4 4 0 0 1 567.3 325.8L567.3 344L537.9 344L537.9 325.8A4 4 0 0 1 541.9 321.8" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M708.4 321.8L729.7 321.8A4 4 0 0 1 733.7 325.8L733.7 344L704.4 344L704.4 325.8A4 4 0 0 1 708.4 321.8" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M874.9 321.8L896.2 321.8A4 4 0 0 1 900.2 325.8L900.2 344L870.9 344L870.9 325.8A4 4 0 0 1 874.9 321.8" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><path d="M-5 -5l562.3 0l0 25l-562.3 0Z" transform="translate(193.85 5)" fill="rgb(0,0,0)" fill-opacity="0" stroke="#ccc" stroke-width="0" class="zr0-cls-0"></path><path d="M3.5 0L21.5 0A3.5 3.5 0 0 1 25 3.5L25 10.5A3.5 3.5 0 0 1 21.5 14L3.5 14A3.5 3.5 0 0 1 0 10.5L0 3.5A3.5 3.5 0 0 1 3.5 0" transform="translate(193.85 5.5)" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" x="30" y="7" transform="translate(193.85 5.5)" fill="#555555">Gemini-3-Flash</text><path d="M0 -0.5l132.6 0l0 15l-132.6 0Z" transform="translate(193.85 5.5)" fill="none" pointer-events="visible" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="legend" class="zr0-cls-5"></path><path d="M3.5 0L21.5 0A3.5 3.5 0 0 1 25 3.5L25 10.5A3.5 3.5 0 0 1 21.5 14L3.5 14A3.5 3.5 0 0 1 0 10.5L0 3.5A3.5 3.5 0 0 1 3.5 0" transform="translate(348.45 5.5)" fill="#1A6BB0" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" x="30" y="7" transform="translate(348.45 5.5)" fill="#555555">Gemma-4-31B-IT</text><path d="M0 -0.5l146.9 0l0 15l-146.9 0Z" transform="translate(348.45 5.5)" fill="none" pointer-events="visible" ecmeta_series_index="1" ecmeta_data_index="1" ecmeta_ssr_type="legend" class="zr0-cls-5"></path><path d="M3.5 0L21.5 0A3.5 3.5 0 0 1 25 3.5L25 10.5A3.5 3.5 0 0 1 21.5 14L3.5 14A3.5 3.5 0 0 1 0 10.5L0 3.5A3.5 3.5 0 0 1 3.5 0" transform="translate(517.3 5.5)" fill="#D98C1F" ecmeta_series_index="2" ecmeta_data_index="2" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" x="30" y="7" transform="translate(517.3 5.5)" fill="#555555">GPT-5.2</text><path d="M0 -0.5l86.9 0l0 15l-86.8 0Z" transform="translate(517.3 5.5)" fill="none" pointer-events="visible" ecmeta_series_index="2" ecmeta_data_index="2" ecmeta_ssr_type="legend" class="zr0-cls-5"></path><path d="M3.5 0L21.5 0A3.5 3.5 0 0 1 25 3.5L25 10.5A3.5 3.5 0 0 1 21.5 14L3.5 14A3.5 3.5 0 0 1 0 10.5L0 3.5A3.5 3.5 0 0 1 3.5 0" transform="translate(626.15 5.5)" fill="#C8CCD0" ecmeta_series_index="3" ecmeta_data_index="3" ecmeta_ssr_type="legend" ecmeta_silent="true" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" x="30" y="7" transform="translate(626.15 5.5)" fill="#555555">ランダム推測</text><path d="M0 -0.5l120 0l0 15l-120 0Z" transform="translate(626.15 5.5)" fill="none" pointer-events="visible" ecmeta_series_index="3" ecmeta_data_index="3" ecmeta_ssr_type="legend" class="zr0-cls-5"></path><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;fill:rgba(182,27,50,1);}.zr0-cls-2:hover {cursor:pointer;fill:rgba(28,117,193,1);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(238,154,34,1);}.zr0-cls-4:hover {cursor:pointer;fill:rgba(220,224,228,1);}.zr0-cls-5:hover {cursor:pointer;fill:rgba(0,0,0,0);}]]></style></svg>
</div>

<div class="takeaway">「どこに書いてあるか」は覚えている。「なぜその順序か」は分かっていない</div>

<!--
- タスク族別に見ると傾向がはっきりします。
- 一番右のLocate、「どの章に書いてあるか」は比較的よくできる。70〜80%。教科書の構成は記憶している。
- ところがPrereqとNeighborが極端に低い。GPT-5.2でNeighborが13.1%、ランダムに近い水準です。
- 「どこに書いてあるか」は覚えているが、「なぜその順序なのか」「どの概念と関連しているか」は分かっていない。記憶と構造理解は別物だ、ときれいに出ています。
-->

---

<!-- _class: split -->

<div class="page-title">結果 ③ 読み方</div>

## EM と F1 の乖離が意味すること

<div class="split-body">
<div class="left">

### 数字の対比

<table class="tbl">
<tr><th>モデル</th><th class="num">Overall EM</th><th class="num">Overall F1</th></tr>
<tr><td>Gemini-3-Flash</td><td class="num">57.1</td><td class="num">73.0</td></tr>
<tr><td>Gemma-4-31B-IT</td><td class="num">46.4</td><td class="num">69.5</td></tr>
<tr><td>GPT-5.2</td><td class="num">42.8</td><td class="num">68.0</td></tr>
<tr><td>GPT-4o</td><td class="num">31.1</td><td class="num">65.9</td></tr>
<tr><td>LLaMA-3-8B-Instruct</td><td class="num">7.2</td><td class="num">52.6</td></tr>
<tr><td>ランダム推測</td><td class="num">6.7</td><td class="num">36.4</td></tr>
</table>

<div class="srcline">EM＝正解集合と完全一致（all-or-nothing）／F1＝各問の選択肢集合上の適合率・再現率をインスタンス平均</div>

</div>
<div class="right">

### そこから言えること

<div class="gcell">
<div class="gc-h">① 部分的には当たっている</div>
<div class="gc-b">F1 が 52〜73% ＝<strong>関連する選択肢をいくつかは選べている</strong></div>
</div>
<div class="gcell">
<div class="gc-h">② 境界が引けていない</div>
<div class="gc-b">EM が低いのは<strong>「どこまでが正解か」を確定できない</strong>から。余分に選ぶか、取りこぼす</div>
</div>
<div class="gcell blue">
<div class="gc-h">③ 教育的な含意</div>
<div class="gc-b">「関連しそうなもの」は言えるが、<strong>「これで過不足ない」とは言えない</strong>＝カリキュラム設計の助言者としては危うい</div>
</div>

</div>
</div>

<div class="takeaway">「もっともらしい関連づけ」はできる。「網羅と排他」ができない</div>

<!--
- 結果の解釈です。F1は50〜70%あるのにEMは低い。
- 「関連しそうな選択肢はいくつか選べるが、どこまでが正解かの境界を引けない」ということです。
- 教育の文脈だとこれは結構怖い。「関連するのはこれとこれです」とは言えるけれど「これで過不足ありません」とは言えない。カリキュラム設計の助言者として使うには、まさにこの網羅性と排他性が要ります。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ④ 学習（テキスト）</div>

## 2,300件でも、主要8コーパスすべてを上回る

<div class="fig-area">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 900 480"><rect width="900" height="480" x="0" y="0" fill="none"></rect><path d="M386.5 8L386.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M465.5 8L465.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M544.5 8L544.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M623.5 8L623.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M701.5 8L701.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M780.5 8L780.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M820.5 8L820.5 416" fill="none" pointer-events="visible" stroke="#ececec" class="zr0-cls-0"></path><path d="M386.5 8L386.5 416" fill="none" pointer-events="visible" stroke="#cccccc" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="middle" style="font-size:12px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" y="6" transform="translate(603.05 444)" fill="#1a1a1a">GaokaoBench 合計スコア</text><path d="M386.1 8.5L381.1 8.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 45.5L381.1 45.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 82.5L381.1 82.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 119.5L381.1 119.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 156.5L381.1 156.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 193.5L381.1 193.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 230.5L381.1 230.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 267.5L381.1 267.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 304.5L381.1 304.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 342.5L381.1 342.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 379.5L381.1 379.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><path d="M386.1 416.5L381.1 416.5" fill="none" pointer-events="visible" stroke="#cccccc" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 26.5455)" fill="#555555">+ K12-Train-Text（本論文）</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 63.6364)" fill="#555555">+ DataFlow</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 100.7273)" fill="#555555">+ OpenHermes</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 137.8182)" fill="#555555">+ SmolTalk</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 174.9091)" fill="#555555">+ Infinity</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 212)" fill="#555555">+ Tulu-3</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 249.0909)" fill="#555555">+ WizardLM</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 286.1818)" fill="#555555">+ UltraChat</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 323.2727)" fill="#555555">+ LMSYS</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 360.3636)" fill="#555555">公式 Instruct 版</text><text dominant-baseline="central" text-anchor="end" style="font-size:15px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" xml:space="preserve" transform="translate(378.1 397.4545)" fill="#555555">素の Base モデル</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(386.1 424)" fill="#555555">0</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(464.9909 424)" fill="#555555">200</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(543.8818 424)" fill="#555555">400</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(622.7727 424)" fill="#555555">600</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(701.6636 424)" fill="#555555">800</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(780.5545 424)" fill="#555555">1,000</text><text dominant-baseline="central" text-anchor="middle" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;" y="7" transform="translate(820 424)" fill="#555555">1,100</text><path d="M390.1 15L780.5 15A4 4 0 0 1 784.5 19L784.5 38L386.1 38L386.1 19A4 4 0 0 1 390.1 15" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M390.1 52.1L771 52.1A4 4 0 0 1 775 56.1L775 75.1L386.1 75.1L386.1 56.1A4 4 0 0 1 390.1 52.1" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 89.2L763.5 89.2A4 4 0 0 1 767.5 93.2L767.5 112.2L386.1 112.2L386.1 93.2A4 4 0 0 1 390.1 89.2" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 126.3L762.2 126.3A4 4 0 0 1 766.2 130.3L766.2 149.3L386.1 149.3L386.1 130.3A4 4 0 0 1 390.1 126.3" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 163.4L758.3 163.4A4 4 0 0 1 762.3 167.4L762.3 186.4L386.1 186.4L386.1 167.4A4 4 0 0 1 390.1 163.4" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 200.5L757.5 200.5A4 4 0 0 1 761.5 204.5L761.5 223.5L386.1 223.5L386.1 204.5A4 4 0 0 1 390.1 200.5" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="5" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 237.6L746.1 237.6A4 4 0 0 1 750.1 241.6L750.1 260.6L386.1 260.6L386.1 241.6A4 4 0 0 1 390.1 237.6" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="6" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 274.7L738.2 274.7A4 4 0 0 1 742.2 278.7L742.2 297.7L386.1 297.7L386.1 278.7A4 4 0 0 1 390.1 274.7" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="7" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 311.8L690.7 311.8A4 4 0 0 1 694.7 315.8L694.7 334.8L386.1 334.8L386.1 315.8A4 4 0 0 1 390.1 311.8" fill="#C4707D" ecmeta_series_index="0" ecmeta_data_index="8" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M390.1 348.9L735.3 348.9A4 4 0 0 1 739.3 352.9L739.3 371.9L386.1 371.9L386.1 352.9A4 4 0 0 1 390.1 348.9" fill="#9AA0A6" ecmeta_series_index="0" ecmeta_data_index="9" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M390.1 386L557.8 386A4 4 0 0 1 561.8 390L561.8 409L386.1 409L386.1 390A4 4 0 0 1 390.1 386" fill="#C8CCD0" ecmeta_series_index="0" ecmeta_data_index="10" ecmeta_ssr_type="chart" class="zr0-cls-4"></path><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(789.4833 26.5455)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">1009.96</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(779.9967 63.6364)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">985.91</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(772.4744 100.7273)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">966.84</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(771.1964 137.8182)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">963.6</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(767.3031 174.9091)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">953.73</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(766.4827 212)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">951.65</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(755.0829 249.0909)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">922.75</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(747.1505 286.1818)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">902.64</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(699.7055 323.2727)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">782.36</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(744.2828 360.3636)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">895.37</text><text dominant-baseline="central" text-anchor="start" style="font-size:14px;font-family:"Hiragino Sans","Yu Gothic",YuGothic,"Noto Sans JP",Meiryo,sans-serif;font-weight:bold;" transform="translate(566.7979 397.4545)" fill="#333" stroke="rgb(255,255,255)" stroke-width="2" paint-order="stroke" stroke-miterlimit="2">445.42</text><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;fill:rgba(182,27,50,1);}.zr0-cls-2:hover {cursor:pointer;fill:rgba(215,123,137,1);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(169,176,182,1);}.zr0-cls-4:hover {cursor:pointer;fill:rgba(220,224,228,1);}]]></style></svg>
</div>

<div class="takeaway">同じ予算で最強ベースラインに +24.1／公式Instruct版に +114.6</div>

<!--
- 学習側の結果です。Qwen3-4B-Baseに2,300件だけSFTした、GaokaoBench合計スコア。
- K12-Train-Textが1009.96で最高。最強ベースラインDataFlowが985.91なので+24.1。公式Instruct版が895.37なので+114.6です。
- もう一方のLlama3.1-8B-Baseでも同傾向で、バックボーンを変えても効く。たった2,300件で汎用コーパスを上回る。これが「サンプル効率」の主張です。
-->

---

<!-- _class: summary -->

<div class="page-title">結果 ⑤ 学習（画像）</div>

## マルチモーダル：テキストと視覚は「相補的」

<table class="tbl sm">
<tr><th style="width:34%">学習データ</th><th class="num">Gaokao-MM</th><th class="num">MDK12-medium</th><th class="num">K12Vista</th></tr>
<tr><td>素の Qwen3.5-2B-Base</td><td class="num">32.4</td><td class="num">50.77</td><td class="num">79.72</td></tr>
<tr><td>公式 Qwen3.5-2B (Instruct)</td><td class="num">36.1</td><td class="num">50.61</td><td class="num">78.20</td></tr>
<tr><td>+ WizardLM（全量 142,759件）</td><td class="num">39.1</td><td class="num">50.76</td><td class="num">67.06</td></tr>
<tr><td>+ DataFlow（全量 10,000件）</td><td class="num">33.3</td><td class="num">51.28</td><td class="num">72.87</td></tr>
<tr><td>+ K12-Train-Text のみ（2,267件）</td><td class="num">38.3</td><td class="num">51.55</td><td class="num">71.13</td></tr>
<tr><td>+ K12-Train-MM のみ（5,068件）</td><td class="num">38.8</td><td class="num">52.33</td><td class="num">73.97</td></tr>
<tr style="background:#FBEAEC"><td><b>+ K12-Train-Full（7,335件）</b></td><td class="num"><b>39.9</b></td><td class="num"><b>52.94</b></td><td class="num"><b>79.95</b></td></tr>
</table>

<div class="cmp" style="margin-top:10px">
<div class="cmp-col good">
<div class="cmp-h">① 相補性</div>
<ul>
<li>Full が <strong>Text 単独・MM 単独の両方を上回る</strong>（3ベンチ一貫）。テキストQAが関係推論を鍛え、マルチモーダルQAが<strong>図に接地</strong>させる</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">② 能力の保持</div>
<ul>
<li>K12Vista は素のBaseが既に <strong>79.72</strong> と強く、多くのSFTは性能を落とす（WizardLMは67.06）。<strong>Full だけが Base を上回った</strong>（79.95）</li>
</ul>
</div>
</div>

<div class="takeaway">14万件の汎用データより、7千件の構造データのほうが強い</div>

<!--
- マルチモーダルの結果。見るべきは2点。
- 1つ目は最下行のK12-Train-Fullが3列とも最高で、しかもText単独・MM単独より高い。テキストと図の教師信号は相補的だ、と。
- 2つ目、右下が一番怖い話です。K12Vistaは素のベースが既に79.72と強い。ここに下手なSFTをかけると落ちる。WizardLMは14万件学習させて67まで落ちている。Fullだけがベースを上回った。少量・高品質は既存能力を壊しにくい。14万件より7千件のほうが強い、というのは示唆的です。
-->

---

<!-- _class: split -->

<div class="page-title">結果 ⑥ 決定的証拠</div>

## 理科のグラフで学んだのに、国語が伸びた

<div class="split-body">
<div class="left">

### 教科横断の転移

<div class="band blue">K12-Train は<b>数学・物理・化学・生物からのみ</b>合成。<br>国語のデータは1件も入っていない。にもかかわらず──</div>

<div class="stat-row">
<div class="stat">
<div class="num">+3.33</div>
<div class="lbl"><b>国語</b>で最高スコア 120.18<br>（最強ベースライン DataFlow 比）</div>
</div>
<div class="stat">
<div class="num">+4.08</div>
<div class="lbl"><b>文系数学</b>で最良 132.00<br>（同上）</div>
</div>
</div>

<div class="band gray" style="font-size:16.5px">リーク検証も実施：n-gram重複は<b>ごくわずか</b>、目視でも重複QAは発見されず</div>

</div>
<div class="right">

### なぜ効くのか（論文の仮説）

<div class="gcell">
<div class="gc-h">① 構造的接地</div>
<div class="gc-b">各QAが単なる事実でなく、<strong>明示的な関係</strong>（前提・分類・関連・検証）を符号化している</div>
</div>
<div class="gcell">
<div class="gc-h">② 教育的一貫性</div>
<div class="gc-b">KGが公的カリキュラムを写すため、<strong>学習分布が教育ベンチマークの前提と整合</strong>する</div>
</div>
<div class="gcell blue">
<div class="gc-h">この意味</div>
<div class="gc-b">国語は<strong>ドメイン内の教師信号を一切受けていない</strong>。改善を内容の記憶に帰せない<br>→ <span class="hl">転移可能な「構造に接地した答え方」を獲得した</span></div>
</div>

</div>
</div>

<div class="takeaway">内容ではなく「構造」を学んでいる ── この論文で一番おもしろい発見</div>

<!--
- なぜ効くのか。論文の仮説は右です。構造的接地と教育的一貫性。でも仮説だけなら弱い。決め手が左です。
- K12-Trainは数学・物理・化学・生物からしか作られていない。国語のデータは1件も入っていない。なのに国語のスコアが最高になった。文系数学も最高。
- これは内容を覚えたのでは説明できません。「構造に接地した答え方」という、教科によらないスキルを学んだと解釈するしかない。しかもリーク検証もしている。ここが一番面白い発見だと思います。
-->

---

<!-- _class: summary -->

<div class="page-title">この論文の優れた点</div>

## なぜ、この設計が効くのか ── 4つの強み

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">♻️</span>二重利用</div>
<div class="c3-b">グラフ<strong>1つ</strong>から評価と学習の両方を導く。すべてのサンプルが部分グラフに遡れ、<strong>難易度・網羅・正確性を制御</strong>できる</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🎯</span>品質の集約</div>
<div class="c3-b">誤答もグラフから機械採取＝<strong>LLM生成でない</strong>。検証を<strong>グラフ1点</strong>に集中でき、不具合は特定の辺に局在化できる</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">⚡</span>サンプル効率</div>
<div class="c3-b"><strong>7,335件</strong>が14万件級を上回る。少量・高品質・構造接地は<strong>破壊的忘却を起こしにくい</strong></div>
</div>
<div class="card3 card-d">
<div class="c3-h"><span class="ic">🌏</span>移植性</div>
<div class="c3-b">「構造を教える」効果は<strong>教科を越えて転移</strong>。設計思想そのものが<strong>他ドメインに移植可能</strong></div>
</div>
</div>

<div class="band">共通する核心：<b>事実ではなく「関係」を、検証済みグラフから決定論的に取り出している</b></div>

<div class="takeaway">強みは「グラフを唯一の真実源にした」という一点に集約する</div>

<!--
- 論文の優れた点を4つに整理しました。二重利用、品質の集約、サンプル効率、移植性。
- 共通する核心は下の帯です。事実ではなく「関係」を、検証済みのグラフから決定論的に取り出している。
- グラフを唯一の真実源にしたことで、評価も学習も品質も、すべてがそこに集約する。ここが真似すべき設計だと思います。
-->

---

<!-- _class: summary -->

<div class="page-title">批判的検討</div>

## この論文の限界 ── ゼミで議論したい点

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">🔍</span>正解の正しさ</div>
<div class="c3-b">「正解」は<strong>GPT-5.2の抽出＋人手検証</strong>。<code>relates_to</code> のような意味的に微妙な関係は<strong>一致率が低い</strong>と論文自身が認める。<br><span class="hl-dark">教科書に唯一の正解はあるのか？</span></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">📏</span>EM という指標</div>
<div class="c3-b">4択で正解1〜3個の完全一致は<strong>本質的に厳しい</strong>。同じ問題を<strong>人間の教師が解いたら何%か</strong>という基準が無い。<br><span class="hl-dark">57%は低いのか、妥当なのか？</span></div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🌏</span>一般化可能性</div>
<div class="c3-b">中国の<strong>検定教科書</strong>という国定の単一正典があるから成立する設計。<br><span class="hl-dark">教科書が複数ある国では？大学では？</span></div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col">
<div class="cmp-h">さらに議論したい点</div>
<ul>
<li><strong>Prereq が難しいのは本当にモデルのせいか</strong>。前提関係は教科書により異なりうるので、そもそも一意でない可能性</li>
<li>SFTの伸びは<strong>「答え方の型」を覚えただけ</strong>では。GaokaoBench の採点は文字列照合なので、形式が合うだけで上がりうる</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">それでも価値が残る点</div>
<ul>
<li><strong>グラフ1点に品質を集約する設計</strong>は、他ドメインにそのまま移植できる</li>
<li><strong>教科横断の転移</strong>という観察は、仮に他が全部弱くてもこれだけで面白い</li>
</ul>
</div>
</div>

<div class="takeaway">設計思想は移植できる。数値の解釈には人間ベースラインが要る</div>

<!--
- 私の批判的な読みです。ゼミなので議論したい。
- 一番引っかかるのは真ん中。EM 57%は「低い」と論文は言うけれど、人間の教師が解いたら何%なのか。人間ベースラインが無い。
- 左も気になる。前提関係って本当に一意に決まるのか。右は大学に持ち込むときに直接効く問題で、中国は国定教科書があるからこの設計が成立している。
- ただ右下のように、設計思想の部分は十分に移植可能だと思っています。
-->

---

<!-- _class: summary -->

<div class="page-title">大学への含意</div>

## この設計を「大学オントロジー」に読み替える

<div class="propose">提案</div>

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">K–12（論文の前提）</div>
<ul>
<li><strong>正典が1つ</strong>：国定の検定教科書</li>
<li>概念・技能が<strong>細かく明示</strong>されている</li>
<li>学年・章の順序が<strong>制度として固定</strong></li>
<li>日本のK-12は<strong>すでにコード化・LOD化</strong>済み（学習指導要領LOD）</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">大学（読み替え）</div>
<ul>
<li>正典が無い → <strong>シラバス＋履修規程</strong>を正典とみなす</li>
<li>記述が粗い → <strong>概念の粒度</strong>をどう決めるかが最大の設計問題</li>
<li>履修は自由度が高い → <code>prerequisites_for</code> を <strong>requires（規程）と recommends（推奨）に分割</strong></li>
<li>大学は<strong>空白地帯</strong>。スキーマは流用でき、データ源と粒度は作り直し</li>
</ul>
</div>
</div>

<div class="band">実装は現実解：<b>Markdown を正本に（教員が直せる）／ RDF・OWL は導出物として生成し検査に回す</b></div>

<div class="cards3" style="margin-top:10px">
<div class="card3 card-a"><div class="c3-h"><span class="ic">🎓</span>学生</div><div class="c3-b">「この研究をしたい」から<strong>自大学の実在科目で</strong>履修経路を逆算</div></div>
<div class="card3 card-b"><div class="c3-h"><span class="ic">🧭</span>教員・大学</div><div class="c3-b">科目の重複・空白を可視化。DPと科目の対応を<strong>グラフから自動生成</strong></div></div>
<div class="card3 card-c"><div class="c3-h"><span class="ic">🤖</span>AI</div><div class="c3-b">グラフを渡してから答えさせる。ハルシネーションが<strong>「グラフに無い」で検出</strong></div></div>
</div>

<div class="takeaway">目的は「AIに大学を語らせる」ことでなく「語る根拠を持たせる」こと</div>

<!--
- ここからは論文を離れた私の提案です。第5部を1枚に凝縮しました。
- 一番大きい違いは正典の不在。中国のK-12には国定教科書という唯一の正解があるが、大学にはない。代わりにシラバスと履修規程を正典とみなす。
- 大学固有の設計課題は「強制と推奨の分離」です。論文のprerequisites_forを、規程で強制されるrequiresと、教育的推奨のrecommendsに割る。
- 実装は、Markdownを正本にして教員が直せる形にし、RDF/OWLは自動生成して検査に回す。今日いちばん議論したいのは、シラバスから概念が本当に取り出せるか、です。
-->

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

## 今日の3つの持ち帰り

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">1️⃣</span>問題の所在</div>
<div class="c3-b">LLMは<strong>試験には答えられるが、カリキュラムの構造は分かっていない</strong>。<br>最新でも完全一致<strong>57%</strong>、前提関係は<strong>35%</strong>。<br><span class="cl-sub">記憶と構造理解は別物</span></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">2️⃣</span>解き方の強み</div>
<div class="c3-b"><strong>グラフを1つ作れば、測る道具と教える道具の両方が出る</strong>。<br>品質もグラフ1点に集約でき、<strong>7,335件</strong>が14万件の汎用データに勝つ。<br><span class="cl-sub">設計思想はドメインを問わず移植できる</span></div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">3️⃣</span>大学への含意</div>
<div class="c3-b">日本のK-12は<strong>すでにLOD化</strong>、大学は空白。<br>スキーマは流用でき、<strong>「強制と推奨の分離」</strong>が大学固有の課題。<br><span class="cl-sub">正本はMarkdown、厳密さは検査に回す</span></div>
</div>
</div>

<div class="band">今日いちばん議論したいこと：<b>シラバスから概念は本当に取り出せるのか</b>。<br>取り出せないなら、この構想は成立しない</div>

<div class="gquote">
オントロジーは「作ったら終わり」ではなく「<strong>維持できるか</strong>」がすべて。<br>だからこそ、<strong>現場が直せる形</strong>で作り始めたい。
</div>

<!--
- まとめです。問題の所在、解き方の強み、大学への含意。
- 下の帯が今日いちばん議論したいこと。シラバスから概念が取り出せるか。ここが成否を分けます。
- 最後の引用は私の実感。オントロジーは作った時点がピークで、維持できなければ意味がない。だから最初から現場が直せる形にしておきたい。
-->

---

<!-- _class: qa -->

# ご議論をお願いします

### ① シラバスから概念は取り出せるか　② 粒度は Topic か Concept か　③ Phase 1 の対象はどこか

<div class="srcline" style="margin-top:18px">主題論文：Liang et al. (2026) <i>K12-KGraph</i>, arXiv:2605.09635v3（CC BY-NC-SA 4.0）／日本語全訳は同フォルダ <code>論文邦訳_K12-KGraph.md</code>。定義：Gruber (1993)・Studer et al. (1998)。第3部の大学版は筆者による提案。</div>

<!--
- ありがとうございました。3つの論点を挙げておきます。議論をお願いします。
-->
