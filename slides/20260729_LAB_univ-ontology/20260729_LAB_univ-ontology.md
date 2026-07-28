---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">大学オントロジー</div><span class="hdr-event">研究室ゼミ／論文紹介</span><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
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
<div class="cv-kicker">研究室ゼミ｜論文紹介 ＋ 構想提案</div>
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
- 今日は「大学オントロジー」というタイトルで話します。
- 題材にするのは、中国のK-12教科書からナレッジグラフを作った2026年7月の論文です。
- ただ論文を紹介するだけでなく、「これを大学でやったらどうなるか」までを最後に提案します。
- 前半にオントロジーの超入門を置いたので、この分野が初めての方でも追えるようにしてあります。
-->

---

<!-- _class: summary -->

<div class="page-title">本日の流れ</div>

## 5部構成 ── 入門 → レビュー → 論文 → 結果 → 大学への展開

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第1部 ・ <span class="min">約15分</span></div>
<div class="agenda-pill pill-1">超入門</div>
</div>
<div class="agenda-list">

- オントロジーとは何か。**情報学**（RDF／OWL）と**教育学**（学習到達基準・学習理論）の両側から

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第2部 ・ <span class="min">約10分</span></div>
<div class="agenda-pill pill-2">レビュー</div>
</div>
<div class="agenda-list">

- 既存研究の系譜と、**2026年の最新実装 OKF**（Google Cloud）まで

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第3部 ・ <span class="min">約20分</span></div>
<div class="agenda-pill pill-3">論文解説</div>
</div>
<div class="agenda-list">

- **K12-KGraph**：教科書からグラフを作り、ベンチマークと学習データを導く

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第4部 ・ <span class="min">約15分</span></div>
<div class="agenda-pill pill-4">実験結果</div>
</div>
<div class="agenda-list">

- 最新モデルでも**EM 57%**。少量データのSFTがなぜ効くのか

</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">第5部 ・ <span class="min">約15分</span></div>
<div class="agenda-pill pill-5">大学へ</div>
</div>
<div class="agenda-list">

- 大学版オントロジーの設計試案とロードマップ

</div>
</div>

</div>

<div class="takeaway">ゴール：「大学のカリキュラムをグラフにする」構想を、批判できる形にして持ち帰る</div>

<!--
- 全体で75分程度を想定しています。
- 第1部と第2部は共通言語をそろえる時間です。ご存じの方は復習として聞いてください。
- 第3部・第4部が論文の本体。第5部が私の提案で、ここが今日いちばん議論したいところです。
-->

---

<!-- _class: message -->

## なぜ「大学オントロジー」なのか

<div class="band">LLMは試験問題には答えられる。<br>しかし「なぜこの科目を先に履修するのか」は答えられない。</div>

<div class="gquote">
シラバスも、履修規程も、カリキュラムマップも、大学の中には<strong>すでに大量の構造情報</strong>がある。<br>
しかしそれは PDF と Excel の中に閉じていて、<strong>機械が辿れる形になっていない</strong>。
</div>

<!--
- 今日の出発点はこの一文です。
- 生成AIに「線形代数の前に何を学ぶべき?」と聞くと、それらしい答えは返ってきます。でもそれは千葉大のカリキュラムに基づいた答えではありません。
- 大学には構造情報がすでにあるのに、機械が使える形になっていない。ここが本質的なボトルネックだと考えています。
-->

---

<!-- _class: divider -->

# 第1部

## オントロジー超入門
### ── 情報学と教育学、二つの系譜

<!--
- まずは共通言語をそろえます。
- 「オントロジー」という言葉は情報学と教育学で少しずつ使われ方が違うので、両方を並べます。
-->

---

<!-- _class: summary -->

<div class="page-title">言葉の由来</div>

## 哲学の「存在論」から、情報学の「概念化の明示的な仕様」へ

<div class="cards3">
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🏛</span>哲学：存在論</div>
<div class="c3-b">「<strong>何が存在するか</strong>」を問う形而上学の一分野。世界を構成するカテゴリの体系を扱う。</div>
</div>
<div class="card3 card-a">
<div class="c3-h"><span class="ic">💻</span>情報学：借用された用語</div>
<div class="c3-b">1990年代に知識工学が借用。「<strong>あるドメインに何が存在すると約束するか</strong>」を機械可読に書き下したもの。</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🎓</span>教育学：領域の記述</div>
<div class="c3-b">学習内容・到達目標・学習理論などを、<strong>共有可能な語彙と関係</strong>として整理する営み。</div>
</div>
</div>

<div class="gquote">
「オントロジーとは、<strong>概念化（conceptualization）の明示的な仕様</strong>である」
<span class="src">Gruber, T. R. (1993). A translation approach to portable ontology specifications. <i>Knowledge Acquisition</i>, 5(2), 199–220.</span>
</div>

<div class="gquote">
のちに Studer らが「<strong>形式的で明示的な、共有された概念化の仕様</strong>」と精緻化。<br>
＝ ①形式的（機械が処理できる）②明示的（暗黙知にしない）③共有された（一人の私見でない）
<span class="src">Studer, R., Benjamins, V. R., &amp; Fensel, D. (1998). Knowledge engineering: Principles and methods. <i>Data &amp; Knowledge Engineering</i>, 25(1–2), 161–197.</span>
</div>

<div class="takeaway">オントロジー＝「この世界には何があり、どう関係するか」の合意された辞書</div>

<!--
- オントロジーはもともと哲学の言葉で、「何が存在するか」を問う分野です。
- それを1990年代に知識工学が借りました。Gruberの定義が最も有名で、「概念化の明示的な仕様」。
- Studerらの定義が実務的には使いやすい。形式的・明示的・共有された、の3点セットです。
- 「共有された」が重要で、一人が勝手に決めた分類はオントロジーとは呼びません。
-->

---

<!-- _class: summary -->

<div class="page-title">情報学の積み木</div>

## セマンティックウェブ技術スタック ── RDF・RDFS・OWL・SPARQL

<div class="grid3">
<div class="gcell">
<div class="gc-h">RDF <span class="en">Resource Description Framework</span></div>
<div class="gc-b">すべてを「<strong>主語–述語–目的語</strong>」の三つ組（トリプル）で書く、データの最小単位</div>
</div>
<div class="gcell">
<div class="gc-h">RDFS <span class="en">RDF Schema</span></div>
<div class="gc-b">クラスと下位クラス、プロパティの定義域・値域といった<strong>軽い語彙定義</strong></div>
</div>
<div class="gcell">
<div class="gc-h">OWL <span class="en">Web Ontology Language</span></div>
<div class="gc-b">分類や関係など<strong>複雑な知識</strong>を表す。計算論理ベースで推論ができる</div>
</div>
<div class="gcell blue">
<div class="gc-h">SPARQL <span class="en">Query Language</span></div>
<div class="gc-b">RDFグラフに対する<strong>問い合わせ言語</strong>。SQLのグラフ版にあたる</div>
</div>
<div class="gcell blue">
<div class="gc-h">IRI <span class="en">Internationalized Resource Identifier</span></div>
<div class="gc-b">クラス・プロパティ・個体を<strong>世界で一意に指す</strong>識別子</div>
</div>
<div class="gcell gray">
<div class="gc-h">LOD <span class="en">Linked Open Data</span></div>
<div class="gc-b">これらを使って<strong>公開・相互リンク</strong>されたデータ群</div>
</div>
</div>

<div class="gquote">
「OWLは、RDF、RDFS、SPARQLなどを含む<strong>W3Cのセマンティックウェブテクノロジースタックの一部</strong>」<br>
「OWLは<strong>計算論理ベースの言語</strong>であり、…その知識の一貫性を検証したり、<strong>暗黙の知識を明示的にしたり</strong>することができる」
<span class="src">IPA デジタル基盤センター データ環境勉強会「OWL」（作成 2022-10-10／更新 2023-07-19）DOI: 10.60430/digital.e-learning0003</span>
</div>

<div class="takeaway">OWLの効用は「書ける」ことより「一貫性検証」と「暗黙知の明示化」</div>

<!--
- 情報学側の道具立てです。IPAが公開している勉強会資料がよくまとまっているので引用しました。
- RDFがデータの最小単位、RDFSが軽い語彙、OWLが本格的なオントロジー言語、SPARQLが問い合わせ。
- 大事なのは最後の一文。OWLを使う価値は「書けること」ではなく、「矛盾を機械が見つけられること」「暗黙の知識を導出できること」にあります。
-->

---

<!-- _class: split -->

<div class="page-title">OWLの中身</div>

## オントロジーは3つの構文カテゴリでできている

<div class="split-body">
<div class="left">

### IPA資料の整理

<div class="gcell">
<div class="gc-h">① エンティティ <span class="en">entities</span></div>
<div class="gc-b">クラス・プロパティ・個体。<strong>IRIで識別</strong>され、オントロジーの原始的な用語をなす</div>
</div>
<div class="gcell">
<div class="gc-h">② 式 <span class="en">expressions</span></div>
<div class="gc-b">ドメイン内の<strong>複雑な概念</strong>を表す。例：制限の観点から一連の個人を記述するクラス式</div>
</div>
<div class="gcell">
<div class="gc-h">③ 公理 <span class="en">axioms</span></div>
<div class="gc-b">そのドメインで<strong>真であると主張される</strong>言明。例：サブクラス公理</div>
</div>

<div class="srcline">
<b>出典：</b>IPA デジタル基盤センター データ環境勉強会「OWL」pp.6（更新 2023-07-19）
</div>

</div>
<div class="right">

### 具体例（IPA資料の例に沿う）

<div class="code">
<span class="c"># ① エンティティ</span><br>
<span class="k">a:Person</span>　クラス（すべての人の集合）<br>
<span class="k">a:parentOf</span>　オブジェクトプロパティ<br>
<span class="k">a:Peter</span>　個体（特定の人）<br>
<br>
<span class="c"># ③ 公理（サブクラス公理）</span><br>
<span class="k">a:Student</span> ⊑ <span class="k">a:Person</span><br>
<span class="c">「学生は人である」</span>
</div>

<div class="band blue">この宣言があるので、<br>「a:Peter は Student」→「a:Peter は Person」を<br><b>機械が自動で導ける</b></div>

</div>
</div>

<div class="takeaway">クラス・関係・公理の三点セットが揃って初めて「推論できる知識」になる</div>

<!--
- OWLで書くオントロジーは、エンティティ・式・公理の3つでできています。
- 左がIPA資料の整理、右がその例です。
- ポイントは右下。「学生は人である」という公理を一度書いておけば、あとは機械が勝手に推論します。これが単なるデータベースとの違いです。
-->

---

<!-- _class: fig -->

<div class="page-title">トリプルで書く</div>

## 大学のことを RDF で書くと、こうなる

<div class="triple">
<div class="t-node">線形代数I</div>
<span class="t-ar">──</span>
<div class="t-edge">prerequisiteFor（前提である）</div>
<span class="t-ar">──▶</span>
<div class="t-node">機械学習</div>
</div>

<div class="triple">
<div class="t-node">機械学習</div>
<span class="t-ar">──</span>
<div class="t-edge">assessedBy（評価される）</div>
<span class="t-ar">──▶</span>
<div class="t-node">DP-3 データ分析力</div>
</div>

<div class="triple">
<div class="t-node">DP-3 データ分析力</div>
<span class="t-ar">──</span>
<div class="t-edge">partOf（一部である）</div>
<span class="t-ar">──▶</span>
<div class="t-node">情報系学位プログラム</div>
</div>

<div class="band">3本のトリプルを繋ぐだけで「<b>この学位を出すには線形代数Iが要る</b>」という問いに機械が答えられる</div>

<div class="attr">※ 科目名・DP番号は説明のための架空例。実際の千葉大の科目体系とは対応しない。</div>

<!--
- 抽象的な話が続いたので、大学の例で書いてみます。
- 主語・述語・目的語の3つ組を3本つなぐだけで、「この学位を出すには何が要るか」という問いに機械が答えられるようになる。
- 逆に言うと、いまはこの3本が書かれていないので答えられない、ということです。
- なお科目名は説明用の架空例です。
-->

---

<!-- _class: summary -->

<div class="page-title">用語の整理</div>

## オントロジー / ナレッジグラフ / スキーマ ── 何が違うのか

<table class="tbl">
<tr><th style="width:20%">用語</th><th style="width:34%">何を指すか</th><th>大学に置き換えると</th></tr>
<tr>
<td class="mono">スキーマ<br>Schema</td>
<td>データの<strong>型と項目</strong>の定義。制約は緩く、意味論は持たない</td>
<td>シラバスDBのテーブル定義（科目名・単位数・担当者…）</td>
</tr>
<tr>
<td class="mono">オントロジー<br>Ontology</td>
<td><strong>語彙＋関係＋公理</strong>。何が存在し、どう関係するかの合意。推論できる</td>
<td>「科目」「到達目標」「学位」とは何か、どう関係するかの定義</td>
</tr>
<tr>
<td class="mono">ナレッジグラフ<br>Knowledge Graph</td>
<td>オントロジーに沿って<strong>実データを入れた</strong>グラフ本体（実例の集合）</td>
<td>千葉大の全科目・全DPを実際に繋いだグラフ</td>
</tr>
<tr>
<td class="mono">LOD</td>
<td>ナレッジグラフを<strong>公開・相互リンク</strong>した状態</td>
<td>他大学・文科省コードと相互参照できる形での公開</td>
</tr>
</table>

<div class="band gray">実務上の順序：<b>スキーマを決める → オントロジーとして意味を固める → データを流し込んでグラフにする → 公開してLODにする</b></div>

<div class="takeaway">オントロジーは「設計図」、ナレッジグラフは「建った建物」</div>

<!--
- ここは混同しやすいので整理しておきます。
- オントロジーが設計図で、ナレッジグラフが実際に建った建物です。今日の論文はこの両方を作っています。
- スキーマとの違いは「意味論と推論があるかどうか」。単なるテーブル定義では、矛盾も導出もできません。
-->

---

<!-- _class: summary -->

<div class="page-title">教育学の系譜</div>

## 教育の世界は、何を構造化してきたか

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">📚</span>学習資源</div>
<div class="c3-b">教材そのものにメタデータを付ける。<br><strong>IEEE LOM</strong>／SCORM の系譜。<br>「この教材は何の教材か」</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🎯</span>到達目標・コンピテンシー</div>
<div class="c3-b">学習到達基準を機械可読に交換する。<br><strong>1EdTech CASE</strong>。<br>「何ができるようになるか」</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🧠</span>学習・教授理論</div>
<div class="c3-b">理論そのものを体系化する。<br><strong>OMNIBUS オントロジー</strong>（溝口ら）。<br>「なぜその教え方が効くか」</div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col">
<div class="cmp-h">1EdTech CASE（v1.1）</div>
<ul>
<li>学習到達基準・コンピテンシー・スキルの情報を、<strong>アプリ間で交換する</strong>ための標準</li>
<li>PDF・HTML・表計算で公開されている基準を、<strong>機械可読なDB</strong>で扱える形に置き換えることを狙う</li>
<li>コンピテンシー枠組／定義／関連／ルーブリックのデータモデルを規定。K-12・高等教育・労働市場を対象</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">OMNIBUS オントロジー</div>
<ul>
<li>行動主義・認知主義・構成主義・社会構成主義など、<strong>パラダイムを横断</strong>して学習・教授理論を体系化する共通概念枠組み</li>
<li>学習科学の知見と、インストラクショナルデザインの知見を<strong>繋ぐ</strong>ことを狙う</li>
<li>溝口理一郎らによる、日本発のオントロジー工学の代表的成果</li>
</ul>
</div>
</div>

<div class="takeaway">教育側は「教材」「目標」「理論」を別々に構造化してきた。繋がってはいない</div>

<!--
- 教育学の側も、実は長く構造化をやってきました。ただし対象がバラバラです。
- 教材のメタデータ、到達目標の交換仕様、そして学習理論そのもののオントロジー。
- 特にOMNIBUSは日本発の代表的な仕事で、行動主義から社会構成主義まで、パラダイムを横断して理論を整理しようという野心的なものです。
- ただし、この3つは互いに繋がっていません。ここが今日の話の伏線になります。
-->

---

<!-- _class: split -->

<div class="page-title">日本の実装</div>

## 学習指導要領コード と 学習指導要領LOD

<div class="split-body">
<div class="left">

### ① 文部科学省「教育データ標準」

- **2020年10月16日**、学習指導要領コードを公開（教育データ標準 第1版）
- コードは**全16桁**。告示時期・学校種別・教科・分野／科目／分類などが各桁に割り当て
- 対象は幼稚園・小中学校・高等学校・特別支援学校の**全教育機関・全教科**、学習指導要領の**全項目**にコードを付与
- 学習指導要領の版ごとにコード表を公表・改訂

<div class="srcline">
<b>出典：</b>文部科学省「教育データ標準」<br>
https://www.mext.go.jp/a_menu/other/data_00001.htm
</div>

</div>
<div class="right">

### ② 学習指導要領LOD

- **教育データプラス研究会**が、上記コード表の内容を **Linked Open Data** として公開
- 全学校種の**18のコード表**を **RDF/Turtle** に変換、**CC BY 4.0**
- 語彙は Dublin Core Terms・schema.org＋独自名前空間 `https://w3id.org/jp-cos/`
- `Item` / `CourseOfStudy` / `CommentaryItem` などのクラスを定義。**SPARQLエンドポイント**を試験公開

<div class="band blue">日本のK-12は<b>すでにLOD化されている</b>。<br>大学にはこれに相当するものが無い</div>

<div class="srcline">
<b>出典：</b>学習指導要領LOD https://jp-cos.github.io/about
</div>

</div>
</div>

<div class="takeaway">初等中等教育は国レベルでコード化済み。大学だけが空白地帯</div>

<!--
- ここが今日いちばん強調したい対比です。
- 日本のK-12は、学習指導要領の全項目に16桁のコードが振られていて、しかもそれがLODとして公開されている。SPARQLで問い合わせられます。
- ところが大学には、これに相当する全国共通のコード体系もLODもありません。
- 各大学がバラバラにシラバスDBを持っているだけ。ここが空白地帯です。
-->

---

<!-- _class: divider -->

# 第2部

## 既存研究のレビュー
### ── 系譜と、2026年の最新実装

<!--
- ここからは既存研究の流れを俯瞰します。
- 最後に、今年出たばかりのGoogle CloudのOKFという実装まで持っていきます。
-->

---

<!-- _class: summary -->

<div class="page-title">系譜</div>

## 4つの流れが、いま合流しつつある

<div class="flow">
<div class="fstep">
<span class="fs-n">1</span>
<div class="fs-h">セマンティックウェブ</div>
<div class="fs-b">RDF／RDFS／OWL／SPARQL。<strong>形式的に厳密</strong>だが、書くコストが高い</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">2</span>
<div class="fs-h">教育メタデータ標準</div>
<div class="fs-b">LOM／SCORM／CASE、学習指導要領コード。<strong>交換のための規格</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">3</span>
<div class="fs-h">教育ナレッジグラフ</div>
<div class="fs-b">知識追跡・前提関係発見への応用。<strong>研究レベル</strong>の蓄積</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">4</span>
<div class="fs-h">LLM × KG</div>
<div class="fs-b">LLMでKGを<strong>作る</strong>／KGでLLMを<strong>鍛える</strong>。今日の論文はここ</div>
</div>
</div>

<div class="cmp" style="margin-top:16px">
<div class="cmp-col">
<div class="cmp-h">これまでの教育KG研究の限界（論文の指摘）</div>
<ul>
<li><strong>単一教科</strong>、あるいは英語圏の講義に閉じることが多い</li>
<li>公的な K–12 カリキュラムに<strong>整合していない</strong>ことが多い</li>
<li>教科書知識をテキストの実体と関係として表すのみで、<strong>図を明示的に接地していない</strong></li>
<li>LLMによるKG構築の研究はあるが、大規模・多教科・カリキュラム整合のKGを作り、<strong>評価と学習の両方に使った</strong>先行研究はない</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">応用の蓄積はある</div>
<ul>
<li><strong>知識追跡</strong>（knowledge tracing）：学習者の理解状態を推定する</li>
<li><strong>前提関係の発見</strong>（prerequisite discovery）：何を先に学ぶべきかを推定する</li>
<li>近年は LLM を KG 構築に使う流れ（zero-shot 抽出、LLMs4OL など）</li>
</ul>
</div>
</div>

<div class="srcline"><b>出典：</b>Liang et al. (2026) K12-KGraph, §2 Related Work（arXiv:2605.09635v3）</div>

<!--
- 4つの流れがあります。厳密なセマンティックウェブ、交換のための教育標準、研究としての教育KG、そしてLLMとの融合。
- 論文が指摘する既存研究の限界が右下です。特に「図を接地していない」という指摘は、この論文の独自性そのものです。
- 教科書って図が本質的に重要なのに、これまでのKGは全部テキストだけだった、と。
-->

---

<!-- _class: split -->

<div class="page-title">最新実装 ①</div>

## 2026年6月：Google Cloud が Open Knowledge Format を公開

<div class="split-body">
<div class="left">

### 何を解こうとしているか

- 組織のナレッジが**複数システムに散在**：メタデータカタログ、Wiki、共有ドライブ、コードコメント、そして**シニアエンジニアの頭の中**
- AIエージェントが答えを出すには、**互換性のないサーフェスから組み立て直す**必要がある
- 各ベンダーが独自のカタログ・SDK・ナレッジグラフスキーマを提供 → **知識の移植が困難**

<div class="band">狙いは<b>「LLM-wiki パターン」を、移植可能で相互運用可能な形式にする</b>オープン仕様</div>

</div>
<div class="right">

### 仕様の中身（v0.1）

<div class="gcell">
<div class="gc-h">Markdown ファイル</div>
<div class="gc-b">どのエディタでも読め、GitHubでそのままレンダリングできる</div>
</div>
<div class="gcell">
<div class="gc-h">ファイルシステム</div>
<div class="gc-b">tarball で配布でき、任意の Git リポジトリでホストできる</div>
</div>
<div class="gcell">
<div class="gc-h">YAML フロントマター</div>
<div class="gc-b">クエリ可能な構造化フィールド（type / title / description / resource / tags / timestamp）</div>
</div>

<div class="band blue">必須フィールドは <b><code>type</code> だけ</b>。<br><code>index.md</code>（階層ナビ）と <code>log.md</code>（変更履歴）を予約</div>

</div>
</div>

<div class="srcline">
<b>出典：</b>Sam McVeety, Amir Hormati「Open Knowledge Format のご紹介」Google Cloud Blog, 2026年6月22日公開（米国時間 2026年6月13日）／仕様は GitHub <code>GoogleCloudPlatform/knowledge-catalog/okf</code>
</div>

<!--
- ここが今日の「最新の実装」パートです。今年の6月に出たばかりのものです。
- 面白いのは、あれだけ厳密なRDF/OWLの世界に対して、OKFは「Markdownとファイルシステムとフロントマターだけ」で作ろうとしている点です。
- 必須フィールドはtypeだけ。極端に軽い。
- 背景には「ベンダーごとに独自のナレッジグラフスキーマがあって知識が移植できない」という問題意識があります。
-->

---

<!-- _class: summary -->

<div class="page-title">最新実装 ②</div>

## OKF の設計思想 ── 「重い形式主義」への対抗

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">OWL / RDF アプローチ</div>
<ul>
<li><strong>形式論理に基づく</strong>：一貫性検証・暗黙知の導出ができる</li>
<li>IRIで一意識別、公理で意味を固定</li>
<li>SPARQL で厳密に問い合わせられる</li>
<li>反面：<strong>書くコスト・学習コストが高い</strong>。現場の担当者が書き続けられない</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">OKF アプローチ</div>
<ul>
<li><strong>人間もLLMも同じファイルを読む</strong>（変換レイヤ不要）</li>
<li>制約は最小限。<code>type</code> 以外はプロデューサーに任せる</li>
<li>プロデューサーとコンシューマーが<strong>独立に差し替え可能</strong></li>
<li>「プラットフォームではなく<strong>形式</strong>」：特定のクラウド・DB・モデルに非依存</li>
</ul>
</div>
</div>

<div class="cards3" style="margin-top:14px">
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🔌</span>製品との接続</div>
<div class="c3-b"><strong>BigQuery</strong> のスキーマ・テーブル・ビューから OKF ドキュメントを生成。<strong>Knowledge Catalog</strong> が OKF を取り込んでエージェントに提供</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🤖</span>参照エージェント</div>
<div class="c3-b">データセットを走査 → 下書き作成 → <strong>2回目のLLMパスで引用付き検証</strong>し、スキーマ・結合パスで拡充</div>
</div>
<div class="card3 card-d">
<div class="c3-h"><span class="ic">📖</span>公開状況</div>
<div class="c3-b"><strong>v0.1 は出発点</strong>で完成した標準ではないと明言。外部からの貢献・代替実装・採用を歓迎</div>
</div>
</div>

<div class="takeaway">論点：大学オントロジーは「OWLで厳密に」か「OKFで軽く」か</div>

<!--
- OKFの設計思想は、OWL的な重い形式主義への対抗と読めます。
- 左が伝統的なアプローチ、右がOKF。どちらが正しいという話ではなく、トレードオフです。
- 厳密さを取れば推論できるが、現場が書き続けられない。軽さを取れば運用は回るが、矛盾検出はできない。
- この論点は第5部でもう一度戻ってきます。大学でやるならどちらか、という話です。
-->

---

<!-- _class: fig -->

<div class="page-title">位置づけの地図</div>

## 今日の論文はどこに立っているか

<div class="fig-area">
<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#9aa0a6"/></marker></defs><rect x="0" y="0" width="860" height="400" fill="#ffffff"/><text x="430" y="24" font-size="16" fill="#6b6f76" text-anchor="middle" font-family="sans-serif">横軸：形式の厳密さ　／　縦軸：カリキュラムへの整合</text><line x1="70" y1="350" x2="810" y2="350" stroke="#c8ccd0" stroke-width="2" marker-end="url(#ah)"/><line x1="70" y1="350" x2="70" y2="50" stroke="#c8ccd0" stroke-width="2" marker-end="url(#ah)"/><text x="790" y="374" font-size="15" fill="#7a7378" text-anchor="end" font-family="sans-serif">厳密 →</text><text x="52" y="60" font-size="15" fill="#7a7378" text-anchor="end" font-family="sans-serif" transform="rotate(-90 52 60)">整合 →</text><rect x="120" y="250" width="150" height="62" rx="10" fill="#F1F2F4" stroke="#8a9098" stroke-width="1.8"/><text x="195" y="275" font-size="16" fill="#5f666e" text-anchor="middle" font-family="sans-serif" font-weight="bold">汎用 SFT データ</text><text x="195" y="296" font-size="13.5" fill="#7a7378" text-anchor="middle" font-family="sans-serif">OpenHermes 等</text><rect x="560" y="240" width="160" height="72" rx="10" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="1.8"/><text x="640" y="265" font-size="16" fill="#1A6BB0" text-anchor="middle" font-family="sans-serif" font-weight="bold">OWL / RDF</text><text x="640" y="285" font-size="13.5" fill="#4a6a8a" text-anchor="middle" font-family="sans-serif">セマンティックウェブ</text><text x="640" y="303" font-size="13.5" fill="#4a6a8a" text-anchor="middle" font-family="sans-serif">（IPA 資料の世界）</text><rect x="118" y="120" width="168" height="72" rx="10" fill="#FDF6EE" stroke="#B7791F" stroke-width="1.8"/><text x="202" y="145" font-size="16" fill="#9a6314" text-anchor="middle" font-family="sans-serif" font-weight="bold">OKF (2026)</text><text x="202" y="165" font-size="13.5" fill="#8a6a3a" text-anchor="middle" font-family="sans-serif">Markdown＋YAML</text><text x="202" y="183" font-size="13.5" fill="#8a6a3a" text-anchor="middle" font-family="sans-serif">軽い・運用しやすい</text><rect x="545" y="105" width="190" height="80" rx="10" fill="#E9F5F3" stroke="#0d7a6f" stroke-width="1.8"/><text x="640" y="130" font-size="16" fill="#0d7a6f" text-anchor="middle" font-family="sans-serif" font-weight="bold">学習指導要領LOD</text><text x="640" y="150" font-size="13.5" fill="#3a7a72" text-anchor="middle" font-family="sans-serif">RDF/Turtle・SPARQL</text><text x="640" y="170" font-size="13.5" fill="#3a7a72" text-anchor="middle" font-family="sans-serif">国のコードに完全対応</text><rect x="330" y="60" width="190" height="86" rx="12" fill="#FBEAEC" stroke="#A6192E" stroke-width="3"/><text x="425" y="88" font-size="18" fill="#A6192E" text-anchor="middle" font-family="sans-serif" font-weight="bold">K12-KGraph</text><text x="425" y="110" font-size="13.5" fill="#7A1220" text-anchor="middle" font-family="sans-serif">教科書から自動抽出</text><text x="425" y="130" font-size="13.5" fill="#7A1220" text-anchor="middle" font-family="sans-serif">＋評価＋学習データ</text><rect x="325" y="255" width="200" height="66" rx="10" fill="#F5F0FA" stroke="#6b4ea8" stroke-width="2" stroke-dasharray="6 4"/><text x="425" y="280" font-size="16" fill="#6b4ea8" text-anchor="middle" font-family="sans-serif" font-weight="bold">大学オントロジー</text><text x="425" y="301" font-size="13.5" fill="#6b4ea8" text-anchor="middle" font-family="sans-serif">（本日の提案・未着手）</text><path d="M425,255 L425,150" stroke="#6b4ea8" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/></svg>
</div>

<div class="takeaway">論文の独自性＝「カリキュラムへの整合」と「評価＋学習の両立」</div>

<!--
- 全体を1枚に整理した図です。横軸が形式の厳密さ、縦軸がカリキュラムへの整合度。
- 右下がOWL/RDFの世界。厳密だが、必ずしもカリキュラムに整合しているわけではない。
- 左上がOKF。軽いけれど厳密さは捨てている。
- 中央上が今日の論文。教科書から自動抽出しているので、カリキュラム整合が非常に高い。
- 破線が私の提案です。この位置を大学で埋めたい、という話を最後にします。
-->

---

<!-- _class: divider -->

# 第3部

## 論文解説：K12-KGraph
### ── 教科書からグラフを作り、評価と学習を導く

<!--
- ここから論文の本体に入ります。
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
- 論文の基本情報です。北京大学が中心のグループ。今年7月にv3が出たばかりです。
- ライセンスがCC BY-NC-SAなので、翻訳して共有するのは問題ありません。全訳は別ファイルに置いてあります。
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
- 論文の問題意識です。ここが一番共感できるところだと思います。
- 既存のベンチマークは全部「試験に答えられるか」しか見ていない。
- でも良い教師がやっていることの大部分は、答えることではなく、順序を設計したり、実験と概念を繋いだりすることです。
- 論文はこれを「カリキュラム認知」と名付けました。WHY・HOW・WHEREの3点セットです。
- 中学の数学教師の例が分かりやすい。単元名を知っているだけの人と、前提関係と兄弟関係と所在を知っている人は、まったく別です。
-->

---

<!-- _class: summary -->

<div class="page-title">スキーマ ①</div>

## 9つのノード型 ── 教科書を「何の集まり」と見るか

<div class="band gray">テキスト成分（7型）＝カリキュラム構造を捉える</div>

<div class="grid3">
<div class="gcell gray">
<div class="gc-h">Book <span class="en">教科書</span></div>
<div class="gc-b">教科・学年・出版社をもつ教科書の実体</div>
</div>
<div class="gcell gray">
<div class="gc-h">Chapter <span class="en">章</span></div>
<div class="gc-b">タイトルと順序をもつ章</div>
</div>
<div class="gcell gray">
<div class="gc-h">Section <span class="en">節</span></div>
<div class="gc-b">タイトルと順序をもつ節</div>
</div>
<div class="gcell">
<div class="gc-h">Concept <span class="en">概念</span></div>
<div class="gc-b">定義を伴う中核知識。<code>importance</code>（understand / master / important）等の属性</div>
</div>
<div class="gcell">
<div class="gc-h">Skill <span class="en">技能</span></div>
<div class="gc-b">転移可能な方法・技法。手順と適用場面をもつ</div>
</div>
<div class="gcell">
<div class="gc-h">Experiment <span class="en">実験</span></div>
<div class="gc-b">器具・生徒実験か否か・手順・現象・結論をもつ</div>
</div>
<div class="gcell">
<div class="gc-h">Exercise <span class="en">練習問題</span></div>
<div class="gc-b">問題文と解答をもつ</div>
</div>
<div class="gcell blue">
<div class="gc-h">Figure <span class="en">図</span></div>
<div class="gc-b">教科書中の1枚の図</div>
</div>
<div class="gcell blue">
<div class="gc-h">VisualElement <span class="en">視覚要素</span></div>
<div class="gc-b">図の中で<strong>教育的価値をもつ局所領域</strong></div>
</div>
</div>

<div class="band blue">マルチモーダル成分（青の2型）＝<b>視覚的接地</b>を捉える。既存の教育KGに無かった部分</div>

<div class="takeaway">図を「1枚の絵」ではなく「意味をもつ部品の集合」として扱う</div>

<!--
- スキーマです。9つのノード型。
- 上3つはコンテナ、真ん中4つが中身、下の青2つが図です。
- 注目すべきはVisualElement。図全体ではなく、図の中の「ここの部分」に意味を与えている。
- 例えば実験装置図の中の「このフラスコ」が何の概念に対応するか、まで持たせています。ここが既存の教育KGに無かった部分です。
-->

---

<!-- _class: summary -->

<div class="page-title">スキーマ ②</div>

## 14の関係型 ── 何と何を、どう結ぶか

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">カリキュラム構造（テキスト）</div>
<table class="tbl sm" style="margin-top:2px">
<tr><td class="mono">is_a</td><td>分類上の包摂（Concept→Concept）</td></tr>
<tr><td class="mono">prerequisites_for</td><td>学習依存（Concept/Skill→Concept/Skill/Experiment）</td></tr>
<tr><td class="mono">relates_to</td><td>意味的関連（Concept→Concept）</td></tr>
<tr><td class="mono">verifies</td><td>実験による検証（Experiment→Concept）</td></tr>
<tr><td class="mono">tests_concept</td><td>問題が概念を評価（Exercise→Concept）</td></tr>
<tr><td class="mono">tests_skill</td><td>問題が技能を評価（Exercise→Skill）</td></tr>
<tr><td class="mono">appears_in</td><td>知識の所在（…→Section）</td></tr>
<tr><td class="mono">leads_to</td><td>章レベルの必要学習順序（Chapter→Chapter）</td></tr>
<tr><td class="mono">is_part_of</td><td>章階層（Section→Chapter→Book）</td></tr>
</table>
</div>
<div class="cmp-col">
<div class="cmp-h">視覚的接地（マルチモーダル）</div>
<table class="tbl sm" style="margin-top:2px">
<tr><td class="mono">contains_visual_element</td><td>図の構成（Figure→VisualElement）</td></tr>
<tr><td class="mono">illustrates</td><td>図レベルの知識接地（Figure→Concept/Skill/Experiment）</td></tr>
<tr><td class="mono">refers_to</td><td>要素レベルの知識接地（VisualElement→…）</td></tr>
<tr><td class="mono">requires_figure</td><td>視覚依存（Exercise→Figure）</td></tr>
<tr><td class="mono">supports_edge</td><td><strong>テキスト関係への視覚的証拠</strong>（Figure→Edge）</td></tr>
</table>

<div class="band blue" style="font-size:17px"><code>supports_edge</code> は<b>辺を指す辺</b>。<br>「この図が、AとBの前提関係の視覚的証拠になっている」を表せる</div>

</div>
</div>

<div class="srcline"><b>出典：</b>Liang et al. (2026) 表9（付録7.1）</div>

<!--
- 14の関係型です。左がテキスト側、右が図側。
- 左で注目すべきはprerequisites_forとleads_to。前者は概念レベル、後者は章レベルの順序です。粒度を分けている。
- 右で面白いのはsupports_edge。これは「辺を指す辺」で、reificationという技法です。
- 「この図は、AがBの前提であることの視覚的証拠だ」ということまで表現できる。かなり凝った設計です。
-->

---

<!-- _class: fig -->

<div class="page-title">構築パイプライン</div>

## 教科書PDF から グラフへ ── 5段階の自動処理

<div class="flow">
<div class="fstep">
<span class="fs-n">1</span>
<div class="fs-h">OCR 解析</div>
<div class="fs-b"><strong>MinerU</strong> で教科書PDFを構造化Markdownに。見出し階層・数式・画像を保持</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">2</span>
<div class="fs-h">節への分割</div>
<div class="fs-b">目次パーサが <code>sections_index.json</code> を生成。<strong>各画像を節の本文に紐付け</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">3</span>
<div class="fs-h">LLM抽出</div>
<div class="fs-b">節ごとに <strong>GPT-5.2</strong> がノード・辺をJSONで出力。<strong>全ての辺に根拠引用か確信度</strong>を付す</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">4</span>
<div class="fs-h">階層マージ</div>
<div class="fs-b">書籍→教科の順にボトムアップ統合。同名概念を重複排除し、<strong>書籍横断で実体を突合</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">5</span>
<div class="fs-h">DAG検証</div>
<div class="fs-b"><code>is_a</code> と <code>prerequisites_for</code> に<strong>閉路検出</strong>。違反は人手で解消</div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col good">
<div class="cmp-h">設計上の勘所</div>
<ul>
<li>抽出プロンプトが<strong>ハルシネーションを明示的に抑制</strong>し、「真に重要で、明確に提示された」知識に限定</li>
<li>辺は<strong>教科書の原文に遡る根拠フィールド</strong>を持つ ＝ 後から検証できる</li>
<li>「速度」が中2物理と中3物理の両方に出る、といった<strong>書籍横断の重複</strong>を教科レベルで統合</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">なぜ DAG 検証が要るか</div>
<ul>
<li>分類関係と前提関係は、<strong>本来ループしてはいけない</strong>（AがBの前提でBがAの前提、は矛盾）</li>
<li>LLM抽出は局所的に正しくても<strong>全体では閉路を作る</strong>ことがある</li>
<li>閉路検出は<strong>機械的にできる品質保証</strong>。人手は矛盾箇所だけ見ればよい</li>
</ul>
</div>
</div>

<!--
- 構築パイプラインです。5段階。
- 特筆すべきは3番目。全ての辺に「教科書のこの文が根拠です」という引用か、確信度スコアを付けさせている。後から検証できる設計です。
- そして5番目のDAG検証。前提関係がループしていたら論理的におかしいので、機械的に検出できます。
- ここが賢い。人手のチェックを「矛盾しているところだけ」に絞り込めるので、全数を人が見るより遥かに安い。
-->

---

<!-- _class: split -->

<div class="page-title">品質保証</div>

## 「LLMが作ったグラフ」をどう信用させるか

<div class="split-body">
<div class="left">

### 3層の検証

<div class="gcell">
<div class="gc-h">① 自動：構造チェック</div>
<div class="gc-b"><code>is_a</code>・<code>prerequisites_for</code> の閉路と構造的不整合を検出。<strong>DAGであるべき</strong>という制約を機械が検査</div>
</div>
<div class="gcell">
<div class="gc-h">② 人手：全数検証</div>
<div class="gc-b">4教科 × <strong>各3名 = 計12名</strong>の教科資格をもつK-12教育実務者。各ノード・各辺を3名が独立にアノテート、不一致は合同レビューで合意</div>
</div>
<div class="gcell">
<div class="gc-h">③ 視覚関係のフィルタ</div>
<div class="gc-b">確信度で足切り：<code>refers_to</code>/<code>illustrates</code> は <strong>0.85以上</strong>、<code>requires_figure</code>/<code>supports_edge</code> は <strong>0.95以上</strong>、バウンディングボックスは <strong>0.9以上</strong></div>
</div>

</div>
<div class="right">

### 結果として得られた品質

<div class="stat-row">
<div class="stat">
<div class="num">0.84</div>
<div class="lbl">アノテータ間一致<br>Fleiss' κ（全体・調停前）</div>
</div>
<div class="stat">
<div class="num">98.4<span class="u">%</span></div>
<div class="lbl">K12-Bench の層化抜き取り検査で<br>完全に正しかった項目</div>
</div>
</div>

<div class="band">一致率は<b>構造的に明示的な関係（is_a）で高く</b>、<br><b>意味的に微妙な関係（relates_to）で低い</b>傾向</div>

<div class="cmp" style="margin-top:6px">
<div class="cmp-col good" style="padding:11px 16px">
<div class="cmp-h" style="font-size:19px">検証戦略の設計思想</div>
<ul style="font-size:17px">
<li><strong>KGだけを全数検証</strong>し、ベンチマークと学習データは抜き取りに留める</li>
<li>理由：ベンチマークは<strong>グラフから決定論的に導出</strong>されるので、正しさがグラフの正しさに帰着する</li>
</ul>
</div>
</div>

</div>
</div>

<div class="takeaway">「グラフを直せばベンチマークも直る」── 品質が一点に集約する設計</div>

<!--
- ここは方法論として非常に参考になるところです。
- 3層の検証。自動・人手・確信度フィルタ。
- 圧巻なのは12名で全数検証していること。κ=0.84はかなり高い一致です。
- そして右下の設計思想。ベンチマークをグラフから決定論的に導出しているので、グラフさえ正しければベンチマークも正しい。だから検証をグラフ1点に集中できる。
- これは大学でやる場合にもそのまま真似できる考え方だと思います。
-->

---

<!-- _class: summary -->

<div class="page-title">グラフ統計</div>

## 実際にできたグラフの規模

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">テキスト成分（表1）</div>
<table class="tbl sm" style="margin-top:2px">
<tr><th>教科</th><th class="num">概念</th><th class="num">技能</th><th class="num">実験</th><th class="num">問題</th><th class="num">前提辺</th></tr>
<tr><td>数学</td><td class="num">1,475</td><td class="num">428</td><td class="num">0</td><td class="num">471</td><td class="num">855</td></tr>
<tr><td>物理</td><td class="num">1,154</td><td class="num">197</td><td class="num">220</td><td class="num">186</td><td class="num">648</td></tr>
<tr><td>化学</td><td class="num">2,302</td><td class="num">451</td><td class="num">309</td><td class="num">270</td><td class="num">1,344</td></tr>
<tr><td>生物</td><td class="num">1,648</td><td class="num">288</td><td class="num">123</td><td class="num">244</td><td class="num">858</td></tr>
<tr><td><b>計</b></td><td class="num"><b>6,579</b></td><td class="num"><b>1,364</b></td><td class="num"><b>652</b></td><td class="num"><b>1,171</b></td><td class="num"><b>3,705</b></td></tr>
</table>
<div style="font-size:16px;color:#7a7378;margin-top:6px">教科書 48冊。他に <code>is_a</code> 1,896／<code>relates_to</code> 2,174／<code>verifies</code> 889／<code>leads_to</code> 282</div>
</div>
<div class="cmp-col">
<div class="cmp-h">マルチモーダル成分（表2）</div>
<table class="tbl sm" style="margin-top:2px">
<tr><th>教科</th><th class="num">図</th><th class="num">視覚要素</th><th class="num">refers_to</th><th class="num">illustrates</th></tr>
<tr><td>数学</td><td class="num">3,831</td><td class="num">5,208</td><td class="num">5,256</td><td class="num">4,006</td></tr>
<tr><td>物理</td><td class="num">1,344</td><td class="num">1,906</td><td class="num">1,927</td><td class="num">1,407</td></tr>
<tr><td>化学</td><td class="num">1,096</td><td class="num">1,583</td><td class="num">1,642</td><td class="num">1,154</td></tr>
<tr><td>生物</td><td class="num">1,117</td><td class="num">1,506</td><td class="num">1,527</td><td class="num">1,152</td></tr>
<tr><td><b>計</b></td><td class="num"><b>7,388</b></td><td class="num"><b>10,203</b></td><td class="num"><b>10,352</b></td><td class="num"><b>7,719</b></td></tr>
</table>
<div style="font-size:16px;color:#7a7378;margin-top:6px">他に <code>contains_visual_element</code> 9,077／<code>supports_edge</code> 1,831／<code>requires_figure</code> 102</div>
</div>
</div>

<div class="band">図が <b>7,388枚</b>、視覚要素が <b>10,203個</b>。<b>図の側の情報量がテキストを上回る</b>という事実</div>

<div class="takeaway">数学は実験0、化学は概念が突出 ── 教科ごとに構造が違う</div>

<!--
- できたグラフの規模です。
- 面白いのは教科ごとの偏り。数学は実験が0で、化学は概念が2,302と突出しています。教科の性格がそのまま出ている。
- そして下の帯。図が7,388枚、視覚要素が10,203個で、実は図の側の情報量のほうが多い。
- 教科書って本当に図が主役なんだな、ということがデータで見えます。
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
- ポイントは、どちらも同じ部分グラフから出ていること。だから難易度も網羅性も制御できます。
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

<div class="band">全問<b>複数選択（multi-select）</b>。4択のうち正解は<b>1〜3個</b>で可変。正解が1個でも複数選択の形式で答えさせる</div>

<div class="takeaway">部分点は無い。正解集合を過不足なく当てて初めてEM＝1</div>

<!--
- 5つのタスク族です。それぞれグラフの特定の関係に対応しています。
- 重要なのは出題形式。4択ですが、正解が1個から3個まで可変の複数選択です。
- しかも正解が1個のときも複数選択の形式で答えなければならない。つまり「AとBとC」なのか「Aだけ」なのかを自分で判断させる。
- これが後で効いてきます。部分的に当てるのは簡単だが、過不足なく当てるのは非常に難しい。
-->

---

<!-- _class: split -->

<div class="page-title">K12-Train</div>

## 3つの経路で、グラフを教師データに変える

<div class="split-body">
<div class="left">

### 生成の3経路

<div class="gcell">
<div class="gc-h">① ノード接地QA（LLM生成）</div>
<div class="gc-b"><strong>Qwen3-235B-A22B</strong> がノードの型付き属性からQAを生成。概念→定義・数式・例題、実験→器具・現象・結論。<br><span class="hl-dark">ノードの中身を教える</span></div>
</div>
<div class="gcell">
<div class="gc-h">② 辺接地QA（LLM生成）</div>
<div class="gc-b">関係ごとに<strong>固定の質問テンプレート</strong>に錨づけ、答えが関係そのものを言語化するよう強制。<br><span class="hl-dark">ノード間の構造を教える</span></div>
</div>
<div class="gcell">
<div class="gc-h">③ 問題–評価QA（テンプレ）</div>
<div class="gc-b"><code>tests_concept</code>/<code>tests_skill</code> は事実として曖昧さが無いので<strong>LLMを迂回</strong>し、辺から決定論的にテンプレを埋める</div>
</div>

<div class="band gray" style="font-size:17px">③の狙い＝LLMが関係を<b>捏造・言い換えするリスクを構造的に排除</b></div>

</div>
<div class="right">

### 質問テンプレートの例（辺接地）

<table class="tbl sm">
<tr><td class="mono">is_a</td><td>なぜ A はカテゴリ B に属するのか？</td></tr>
<tr><td class="mono">prerequisites_for</td><td>なぜ B より先に A を学ばねばならないのか？</td></tr>
<tr><td class="mono">relates_to</td><td>A と B はどう関係しているのか？</td></tr>
<tr><td class="mono">verifies</td><td>実験 E は概念 C をどう検証するのか？</td></tr>
<tr><td class="mono">illustrates</td><td>図 F は概念 C をどう説明しているのか？</td></tr>
<tr><td class="mono">refers_to</td><td>視覚要素 V は概念 C にどう対応するのか？</td></tr>
<tr><td class="mono">requires_figure</td><td>図 F は問題にどんな情報を与えているのか？</td></tr>
<tr><td class="mono">supports_edge</td><td>図 F は既存の関係にどんな視覚的証拠を与えるのか？</td></tr>
</table>

<div class="band blue">問いの形を固定することで、答えが必ず<b>「関係の説明」</b>になる</div>

</div>
</div>

<!--
- 学習データの作り方です。3つの経路。
- 一番賢いと思うのは③。tests_conceptのような曖昧さのない関係については、そもそもLLMを使わない。テンプレートに機械的に流し込む。
- LLMを使わなければ、LLMが捏造するリスクはゼロになる。当たり前のようで、なかなかできない割り切りです。
- 右が②のテンプレート一覧。「なぜBより先にAを学ぶのか」という形に固定することで、答えが必ず関係の説明になる。
-->

---

<!-- _class: summary -->

<div class="page-title">K12-Train の内訳</div>

## 7,335件 ── サイズは控えめ、中身は構造的

<div class="stat-row">
<div class="stat">
<div class="num">7,335</div>
<div class="lbl">K12-Train-Full<br>総QAペア数</div>
</div>
<div class="stat">
<div class="num">2,267</div>
<div class="lbl">K12-Train-Text<br>テキストのみで答えられる</div>
</div>
<div class="stat">
<div class="num">5,068</div>
<div class="lbl">K12-Train-MM<br>図・視覚要素を要する</div>
</div>
</div>

<div class="cmp" style="margin-top:12px">
<div class="cmp-col good">
<div class="cmp-h">Text（2,267件）の内訳</div>
<table class="tbl sm" style="margin-top:2px">
<tr><td>Exercise 例（段階的推論つき）</td><td class="num">450</td></tr>
<tr><td><code>tests_concept</code>/<code>tests_skill</code> 例</td><td class="num">356</td></tr>
<tr><td>ノード接地QA（概念・技能・実験）</td><td class="num">695</td></tr>
<tr><td>関係接地QA（is_a・前提・関連・検証）</td><td class="num">766</td></tr>
</table>
<div style="font-size:16px;color:#7a7378;margin-top:6px">はるかに大きな候補プールから<b>出典バランスを取って</b>抽出</div>
</div>
<div class="cmp-col">
<div class="cmp-h">MM（5,068件）の性質</div>
<ul>
<li>すべて<strong>関係接地QA</strong>（illustrates／refers_to／requires_figure／supports_edge）</li>
<li>対応する辺の<strong>確信度で選抜</strong>：illustrates・refers_to・supports_edge は 1.0、requires_figure は 0.8</li>
<li>生のKG由来プールの<strong>自然な偏りを緩和</strong>（例：教科書の練習問題は相対的に少ない）</li>
</ul>
</div>
</div>

<div class="takeaway">数を追わず、構造の種類が均等に入るよう設計されている</div>

<!--
- 内訳です。テキストが2,267件、マルチモーダルが5,068件。
- 注目は左下。「はるかに大きな候補プールから出典バランスを取って抽出」している。
- つまり作れるだけ作ったのではなく、意図的に絞っている。ノード由来と辺由来がだいたい同じくらいになるように。
- この「量より配分」という考え方が、次の結果につながります。
-->

---

<!-- _class: divider -->

# 第4部

## 実験結果
### ── どこまでできて、どこができないか

<!--
- ここから結果です。
-->

---

<!-- _class: summary -->

<div class="page-title">実験設定</div>

## 2つの実験 ── 「測る」と「教える」

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">実験1：K12-Bench でのベンチマーク</div>
<ul>
<li><strong>ゼロショット・解答のみ</strong>の設定。グラフの文脈は一切与えず、<strong>パラメトリックな知識</strong>だけを問う</li>
<li>オープンソース5種：LLaMA-3-8B-Instruct、GLM-4.7-Flash、Ministral-3-14B-Instruct、Qwen3-32B、Gemma-4-31B-IT</li>
<li>プロプライエタリ5種：GPT-4o、GPT-5-mini、GPT-5.2、Gemini-2.5-Flash、Gemini-3-Flash</li>
<li>指標：<strong>EM</strong>（正解集合と完全一致）と<strong>インスタンスレベルF1</strong></li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">実験2：K12-Train での SFT</div>
<ul>
<li><strong>テキスト</strong>：Qwen3-4B-Base と Llama3.1-8B-Base に全パラメータSFT。8つの汎用コーパスと<strong>約2,300件に予算を厳密に揃えて</strong>比較</li>
<li><strong>マルチモーダル</strong>：Qwen3.5-2B-Base に LoRA SFT。DataFlow（10,000件）・WizardLM（142,759件）は<strong>全量</strong>で比較</li>
<li>評価：GaokaoBench・EduEval／Gaokao-MM・MDK12-Bench・K12Vista</li>
</ul>
</div>
</div>

<div class="band">比較の公平性が徹底されている：<b>同じサンプル数・同じハイパーパラメータ・同じ実装（LLaMA-Factory）</b></div>

<div class="band gray">シード {42, 123, 2026} の3回実行で標準偏差も報告（例：Qwen3-4B-Base で GaokaoBench 1002.94 ± 6.37）。<b>結果はシード選択に対して安定</b></div>

<!--
- 実験設定です。2つあります。
- 実験1で重要なのは「グラフの文脈を一切与えない」こと。つまりモデルが事前学習で獲得した知識だけを問うています。
- 実験2で重要なのは予算を揃えていること。2,300件対2,300件で比較している。データ量の差ではなく質の差を見ようとしている。
- しかもシードを3つ振って標準偏差も出している。丁寧な実験です。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ①</div>

## 最新モデルでも、完全一致は 57% にとどまる

<div class="fig-area">
<!--SVG:fig21-->
</div>

<div class="takeaway">試験問題では人間を超えるモデルが、カリキュラム構造では半分しか当てられない</div>

<!--
- 結果の1枚目です。K12-Bench全体の完全一致スコア。
- 最上位のGemini-3-Flashで57.1%。強力なオープンソースのGemma-4-31B-ITで46.4%。
- 一番下、LLaMA-3-8B-Instructは7.2%で、ランダム推測の6.7%とほぼ変わりません。これは複数選択の出力形式そのものに追随できていないということです。
- 高考の問題は解けるモデルが、カリキュラムの構造については半分しか当てられない。これが論文の中心的な発見です。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ②</div>

## 最も難しいのは Prereq（前提）と Neighbor（近傍）

<div class="fig-area">
<!--SVG:fig22-->
</div>

<div class="takeaway">「どこに書いてあるか」は覚えている。「なぜその順序か」は分かっていない</div>

<!--
- タスク族別に見ると、傾向がはっきりします。
- 一番右のLocate、つまり「どの章に書いてあるか」は比較的よくできる。70〜80%。教科書の構成は記憶しているんですね。
- ところがPrereqとNeighborが極端に低い。GPT-5.2でNeighborが13.1%、これはランダムに近い水準です。
- つまり「どこに書いてあるか」は覚えているが、「なぜその順序なのか」「どの概念と関連しているか」は分かっていない。
- 記憶と構造理解は別物だ、ということがきれいに出ています。
-->

---

<!-- _class: split -->

<div class="page-title">結果の読み方</div>

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

<div class="srcline">EM＝正解集合と完全一致（all-or-nothing）／F1＝各問の選択肢集合上の適合率・再現率の調和平均をインスタンス平均</div>

</div>
<div class="right">

### そこから言えること

<div class="gcell">
<div class="gc-h">① 部分的には当たっている</div>
<div class="gc-b">F1 が 52〜73% ということは、<strong>関連する選択肢をいくつかは選べている</strong></div>
</div>
<div class="gcell">
<div class="gc-h">② 境界が引けていない</div>
<div class="gc-b">EM が低いのは<strong>「どこまでが正解か」を確定できない</strong>から。余分に選ぶか、取りこぼす</div>
</div>
<div class="gcell blue">
<div class="gc-h">③ 教育的な含意</div>
<div class="gc-b">「関連しそうなもの」は言えるが、<strong>「これで過不足ない」とは言えない</strong>＝カリキュラム設計の助言者としては危うい</div>
</div>

<div class="band">LLaMA-3-8B-Instruct は EM 7.2 でランダム並。<br><b>複数選択の出力形式そのものに追随できていない</b></div>

</div>
</div>

<div class="takeaway">「もっともらしい関連づけ」はできる。「網羅と排他」ができない</div>

<!--
- ここは結果の解釈です。EMとF1の乖離が大きい。
- F1は50〜70%あるのに、EMは低い。これは何を意味するか。
- 「関連しそうな選択肢はいくつか選べるが、どこまでが正解かの境界を引けない」ということです。
- 教育の文脈で言うと、これは結構怖い。「この科目に関連するのはこれとこれです」とは言えるけれど、「これで過不足ありません」とは言えない。
- カリキュラム設計の助言者として使うには、まさにこの網羅性と排他性が要るわけです。
-->

---

<!-- _class: fig -->

<div class="page-title">結果 ③</div>

## 2,300件でも、主要8コーパスすべてを上回る

<div class="fig-area">
<!--SVG:fig23-->
</div>

<div class="takeaway">同じ予算で最強ベースラインに +24.1／公式Instruct版に +114.6</div>

<!--
- 学習側の結果です。Qwen3-4B-Baseに2,300件だけSFTした結果の、GaokaoBench合計スコア。
- K12-Train-Textが1009.96で最高。最強のベースラインDataFlowが985.91なので+24.1。
- 公式のInstruct版が895.37なので+114.6です。
- もう一方のLlama3.1-8B-Baseでも同じ傾向で、625.49対593.08。バックボーンを変えても効く。
- たった2,300件で、汎用コーパスを上回る。これが「サンプル効率」の主張です。
-->

---

<!-- _class: summary -->

<div class="page-title">結果 ④</div>

## マルチモーダル：テキストと視覚は「相補的」

<table class="tbl">
<tr><th style="width:34%">学習データ</th><th class="num">Gaokao-MM</th><th class="num">MDK12-medium</th><th class="num">K12Vista</th></tr>
<tr><td>素の Qwen3.5-2B-Base</td><td class="num">32.4</td><td class="num">50.77</td><td class="num">79.72</td></tr>
<tr><td>公式 Qwen3.5-2B (Instruct)</td><td class="num">36.1</td><td class="num">50.61</td><td class="num">78.20</td></tr>
<tr><td>+ WizardLM（全量 142,759件）</td><td class="num">39.1</td><td class="num">50.76</td><td class="num">67.06</td></tr>
<tr><td>+ DataFlow（全量 10,000件）</td><td class="num">33.3</td><td class="num">51.28</td><td class="num">72.87</td></tr>
<tr><td>+ K12-Train-Text のみ（2,267件）</td><td class="num">38.3</td><td class="num">51.55</td><td class="num">71.13</td></tr>
<tr><td>+ K12-Train-MM のみ（5,068件）</td><td class="num">38.8</td><td class="num">52.33</td><td class="num">73.97</td></tr>
<tr style="background:#FBEAEC"><td><b>+ K12-Train-Full（7,335件）</b></td><td class="num"><b>39.9</b></td><td class="num"><b>52.94</b></td><td class="num"><b>79.95</b></td></tr>
</table>

<div class="cmp" style="margin-top:12px">
<div class="cmp-col good">
<div class="cmp-h">読みどころ ①：相補性</div>
<ul>
<li>Full が <strong>Text 単独・MM 単独の両方を上回る</strong>。3つのベンチマークすべてで一貫</li>
<li>テキストQAが<strong>関係レベルの推論</strong>を鍛え、マルチモーダルQAがそれを<strong>図に接地</strong>させる、という解釈</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">読みどころ ②：能力の保持</div>
<ul>
<li>K12Vista は素のBaseが既に <strong>79.72</strong> と強い。多くのSFTは<strong>ここで性能を落とす</strong>（WizardLM は 67.06 まで低下）</li>
<li><strong>Full だけが Base を上回った</strong>（79.95）。少量・高品質データは<strong>破壊的忘却を起こしにくい</strong></li>
</ul>
</div>
</div>

<div class="takeaway">14万件の汎用データより、7千件の構造データのほうが強い</div>

<!--
- マルチモーダルの結果です。表が細かいですが、見るべきは2点。
- 1つ目は最下行のK12-Train-Fullが3列とも最高であること。しかもText単独・MM単独より高い。テキストと図の教師信号は相補的だ、と。
- 2つ目、右下が実は一番怖い話です。K12Vistaは素のベースモデルが既に79.72と強い。ここに下手なSFTをかけると性能が落ちる。WizardLMは14万件も学習させて67まで落ちています。
- Fullだけがベースを上回った。少量・高品質のデータは、既存能力を壊しにくい。
- 14万件より7千件のほうが強い、というのは示唆的です。
-->

---

<!-- _class: split -->

<div class="page-title">なぜ効くのか</div>

## 論文の仮説と、その裏付け

<div class="split-body">
<div class="left">

### 2つの仮説

<div class="gcell">
<div class="gc-h">① 構造的接地</div>
<div class="gc-b">各QAペアが単なる事実ではなく、<strong>明示的な関係</strong>（前提・分類・関連・検証）を符号化している</div>
</div>
<div class="gcell">
<div class="gc-h">② 教育的一貫性</div>
<div class="gc-b">KGが公的カリキュラムを写しているため、<strong>学習分布が教育ベンチマークの暗黙の前提と整合</strong>する</div>
</div>

<div class="band">整合する観察：伸びが最大なのは<b>GaokaoBench の自由記述</b>、<b>EduEval の Ethics</b>、<b>K12Vista の自由記述QA</b><br>── いずれも<b>孤立した想起ではなく構造化された推論</b>を要求する</div>

</div>
<div class="right">

### 決定的な証拠：教科横断の転移

<div class="band blue">K12-Train は<b>数学・物理・化学・生物からのみ</b>合成されている。<br>にもかかわらず──</div>

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

<div class="gcell">
<div class="gc-h">この意味</div>
<div class="gc-b">これらの教科は K12-Train から<strong>ドメイン内の教師信号を一切受けていない</strong>。<br>だから改善を<strong>内容の記憶に帰することはできない</strong>。<br>→ <span class="hl">転移可能で構造に接地した「答え方」を獲得した</span>と解釈できる</div>
</div>

<div class="band gray" style="font-size:17px">リーク検証も実施：n-gram重複は<b>ごくわずか</b>、目視でも重複QAペアは発見されず</div>

</div>
</div>

<div class="takeaway">理科のグラフで学んだのに国語が伸びた ── 内容ではなく構造を学んでいる</div>

<!--
- なぜ効くのか。論文の仮説が左です。構造的接地と教育的一貫性。
- でも仮説だけなら弱い。決め手が右です。
- K12-Trainは数学・物理・化学・生物からしか作られていない。国語のデータは1件も入っていない。
- なのに国語のスコアが最高になった。文系数学も最高。
- これは内容を覚えたのでは説明できません。「構造に接地した答え方」という、教科によらないスキルを学んだと解釈するしかない。
- ここが一番面白い発見だと思います。しかもリーク検証もしている。
-->

---

<!-- _class: summary -->

<div class="page-title">批判的検討</div>

## この論文の限界 ── ゼミで議論したい点

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">🔍</span>正解の正しさ</div>
<div class="c3-b">「正解」は<strong>GPT-5.2の抽出結果＋人手検証</strong>。<code>relates_to</code> のような意味的に微妙な関係は<strong>一致率が低い</strong>と論文自身が認めている。<br><span class="hl-dark">教科書の記述に唯一の正解はあるのか？</span></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">📏</span>EM という指標</div>
<div class="c3-b">4択で正解1〜3個の完全一致は<strong>本質的に厳しい</strong>。<br>人間の教師に同じ問題を解かせたら何%か、という<strong>人間ベースラインが無い</strong>。<br><span class="hl-dark">57%は低いのか、妥当なのか？</span></div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🌏</span>一般化可能性</div>
<div class="c3-b">中国の<strong>検定教科書（人民教育出版社）</strong>という、国が定めた単一の正典があるから成立する設計。<br><span class="hl-dark">教科書が複数ある国では？大学では？</span></div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col">
<div class="cmp-h">さらに議論したい点</div>
<ul>
<li><strong>Prereq が難しいのは本当にモデルのせいか</strong>。前提関係は教科書によって異なりうるので、そもそも一意でない可能性</li>
<li>SFTの伸びは<strong>「答え方の型」を覚えただけ</strong>ではないか。GaokaoBenchの採点は文字列照合なので、形式が合うだけでスコアが上がりうる</li>
<li>マルチモーダルの改善幅は<strong>数ポイント</strong>。実用上の意味はどれくらいか</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">それでも価値が残る点</div>
<ul>
<li><strong>グラフ1点に品質を集約する設計</strong>は、他ドメインにそのまま移植できる</li>
<li><strong>誤答をグラフから機械的に採取</strong>する発想は、ベンチマーク構築の一般解になりうる</li>
<li><strong>教科横断の転移</strong>という観察は、仮に他が全部弱くてもこれだけで面白い</li>
</ul>
</div>
</div>

<div class="takeaway">設計思想は移植できる。数値の解釈には人間ベースラインが要る</div>

<!--
- ここは私の批判的な読みです。ゼミなので議論したい。
- 一番引っかかるのは真ん中。EM 57%は「低い」と論文は言うけれど、人間の教師が同じ問題を解いたら何%なんでしょうか。人間ベースラインが無い。
- 左も気になります。前提関係って本当に一意に決まるのか。教科書や指導者によって変わりうるのでは。
- 右は大学に持ち込むときに直接効いてくる問題で、中国は国定教科書があるからこの設計が成立している。大学にはそれがありません。
- ただ、右下に書いたように、設計思想の部分は十分に移植可能だと思っています。
-->

---

<!-- _class: divider -->

# 第5部

## 大学オントロジーへの展開
### ── ここからは提案です

<!--
- ここからは論文を離れて、私の提案です。
-->

---

<!-- _class: summary -->

<div class="page-title">K-12 と大学</div>

## そのまま持ち込めるか ── 4つの決定的な違い

<table class="tbl">
<tr><th style="width:16%">論点</th><th style="width:38%">K–12（論文の前提）</th><th>大学</th></tr>
<tr>
<td><b>正典</b></td>
<td>国定の検定教科書が<strong>1つ</strong>。人民教育出版社が唯一の情報源</td>
<td><span class="hl">正典が無い</span>。シラバスは教員ごと、教科書は科目ごとに異なる<br>→ <b>シラバスと履修規程を正典と見なす</b>ほかない</td>
</tr>
<tr>
<td><b>粒度</b></td>
<td>概念・技能が<strong>細かく明示</strong>されている（「一次方程式」レベル）</td>
<td>シラバスの記述は<strong>粗く抽象的</strong>（「機械学習の基礎を学ぶ」）<br>→ <b>概念の粒度をどう決めるかが最大の設計問題</b></td>
</tr>
<tr>
<td><b>順序</b></td>
<td>学年・章の順序が<strong>制度として固定</strong></td>
<td>履修は<strong>選択の自由度が高い</strong>。前提は「推奨」であって強制でない<br>→ <b>ハードな前提とソフトな推奨を区別する必要</b></td>
</tr>
<tr>
<td><b>目標</b></td>
<td>学習指導要領の項目に対応（<strong>コード化済み</strong>）</td>
<td>ディプロマ・ポリシー、カリキュラムマップが対応物<br>→ <b>大学ごとに書式も粒度もバラバラ</b></td>
</tr>
</table>

<div class="band">結論：<b>スキーマはほぼそのまま使える</b>が、<b>データ源と粒度の設計は作り直しが要る</b></div>

<div class="takeaway">「教科書 → シラバス＋履修規程」という読み替えが出発点</div>

<!--
- では大学に持ち込めるか。4つの違いを整理しました。
- 一番大きいのは正典の不在です。中国のK-12には国定教科書という唯一の正解があるけれど、大学にはない。
- 代わりに何を正典と見なすか。私はシラバスと履修規程だと思います。制度的に確定していて、全科目を網羅している唯一の文書だからです。
- 2番目の粒度も難しい。「機械学習の基礎を学ぶ」というシラバスの1行から、どこまで細かい概念を取り出すか。ここが設計の勘所になります。
- 3番目、大学の前提関係は「推奨」であって強制ではない。ここは論文のDAGよりも柔らかいモデルが要ります。
-->

---

<!-- _class: summary -->

<div class="page-title">設計試案 ①</div>

## 大学版スキーマ ── ノード型

<div class="propose">提案</div>

<div class="grid3">
<div class="gcell gray">
<div class="gc-h">Program <span class="en">学位プログラム</span></div>
<div class="gc-b">学部・学科・課程。学位の単位</div>
</div>
<div class="gcell gray">
<div class="gc-h">Curriculum <span class="en">教育課程</span></div>
<div class="gc-b">年度ごとの科目群と履修要件</div>
</div>
<div class="gcell gray">
<div class="gc-h">Course <span class="en">科目</span></div>
<div class="gc-b">ナンバリング・単位数・開講期をもつ</div>
</div>
<div class="gcell">
<div class="gc-h">Topic <span class="en">主題</span></div>
<div class="gc-b">科目の各回で扱う内容。<strong>Concept より粗い中間層</strong></div>
</div>
<div class="gcell">
<div class="gc-h">Concept <span class="en">概念</span></div>
<div class="gc-b">定義をもつ知識単位。論文と同じ最小粒度</div>
</div>
<div class="gcell">
<div class="gc-h">Skill <span class="en">技能</span></div>
<div class="gc-b">転移可能な方法・技法</div>
</div>
<div class="gcell">
<div class="gc-h">Outcome <span class="en">到達目標</span></div>
<div class="gc-b">科目レベルの学習成果（シラバスの到達目標欄）</div>
</div>
<div class="gcell">
<div class="gc-h">Competency <span class="en">コンピテンシー</span></div>
<div class="gc-b">DP・カリキュラムマップの能力項目</div>
</div>
<div class="gcell">
<div class="gc-h">Assessment <span class="en">評価</span></div>
<div class="gc-b">課題・試験・ルーブリック</div>
</div>
<div class="gcell blue">
<div class="gc-h">Resource <span class="en">教材</span></div>
<div class="gc-b">教科書・スライド・動画・データセット</div>
</div>
<div class="gcell blue">
<div class="gc-h">Figure <span class="en">図</span></div>
<div class="gc-b">教材中の図。論文と同じ扱い</div>
</div>
<div class="gcell blue">
<div class="gc-h">Person <span class="en">人</span></div>
<div class="gc-b">教員・TA。<strong>担当と専門性</strong>を繋ぐ</div>
</div>
</div>

<div class="band">論文の9型に対し<b>12型</b>。増分は <b>Program / Curriculum / Outcome / Competency / Assessment / Person</b>、<br>減分は Book・Chapter・Section（→ Course・Topic に吸収）</div>

<div class="takeaway">大学固有の増分は「学位」「到達目標」「人」の3方向</div>

<!--
- ここからが提案です。まずノード型。
- 論文の9型をベースに、大学固有のものを足しました。
- 灰色が構造のコンテナ。赤が知識の中身。青が周辺です。
- 増やしたのは3方向。学位プログラムという上位構造、到達目標とコンピテンシーという目標系、そして人。
- 人を入れたのは、大学だと「誰が何を教えられるか」が実務上とても重要だからです。担当者が変わると科目の中身も変わる。
- 逆にBook/Chapter/Sectionは要りません。CourseとTopicが同じ役割を果たします。
-->

---

<!-- _class: summary -->

<div class="page-title">設計試案 ②</div>

## 大学版スキーマ ── 関係型と、大学固有の工夫

<div class="propose">提案</div>

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">論文から継承する関係</div>
<table class="tbl sm" style="margin-top:2px">
<tr><td class="mono">is_a</td><td>概念の分類</td></tr>
<tr><td class="mono">relates_to</td><td>概念の関連</td></tr>
<tr><td class="mono">covers</td><td>科目が概念を扱う（≒ appears_in）</td></tr>
<tr><td class="mono">assesses</td><td>評価が到達目標を測る（≒ tests_concept）</td></tr>
<tr><td class="mono">illustrates</td><td>図が概念を説明する</td></tr>
<tr><td class="mono">requires_figure</td><td>課題が図を要する</td></tr>
</table>
</div>
<div class="cmp-col">
<div class="cmp-h">大学のために作り替える関係</div>
<table class="tbl sm" style="margin-top:2px">
<tr><td class="mono">requires</td><td><strong>制度上の履修要件</strong>（規程で強制）</td></tr>
<tr><td class="mono">recommends</td><td><strong>推奨される順序</strong>（強制でない）</td></tr>
<tr><td class="mono">builds_on</td><td><strong>概念レベルの依存</strong>（科目をまたぐ）</td></tr>
<tr><td class="mono">contributes_to</td><td>科目 → コンピテンシー（カリキュラムマップ）</td></tr>
<tr><td class="mono">equivalent_to</td><td><strong>他大学・他学部の科目との対応</strong></td></tr>
<tr><td class="mono">can_teach</td><td>教員 → 概念（担当可能性）</td></tr>
</table>
</div>
</div>

<div class="cards3" style="margin-top:12px">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">⚖️</span>強制と推奨を分ける</div>
<div class="c3-b">論文の <code>prerequisites_for</code> を <span class="hl">requires（規程）</span>と<span class="hl">recommends（教育的推奨）</span>に<strong>分割</strong>。前者だけをDAG検証の対象にする</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🔀</span>3層の依存を持つ</div>
<div class="c3-b">科目レベル（requires）・概念レベル（builds_on）・目標レベル（contributes_to）。<strong>粒度の違う3つの順序</strong>が大学には共存する</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🌐</span>外部と繋ぐ</div>
<div class="c3-b"><code>equivalent_to</code> で単位互換・編入・MOOC を接続。<strong>1EdTech CASE</strong> や<strong>学習指導要領LOD</strong>（高大接続）への参照も張れる</div>
</div>
</div>

<div class="takeaway">大学の本質は「強制されない順序」── そこをモデル化できるかが勝負</div>

<!--
- 関係型です。左は論文からほぼそのまま継承できるもの。
- 右が大学のために作り替えるところ。ここが提案の核心です。
- 一番大事なのは左下のカード。論文のprerequisites_forを2つに割ります。
- requiresは履修規程で強制されている要件。recommendsは「こっちを先に取ったほうがいい」という教育的推奨。
- この2つは性質がまったく違います。前者は矛盾したら制度のバグなのでDAG検証すべき。後者は多少ループしていても構わない。
- 右下も面白くて、equivalent_toを張ると単位互換や高大接続、つまり学習指導要領LODとの接続まで見えてきます。
-->

---

<!-- _class: fig -->

<div class="page-title">構築パイプライン</div>

## 千葉大の既存データから、どう作るか

<div class="propose">提案</div>

<div class="flow">
<div class="fstep">
<span class="fs-n">1</span>
<div class="fs-h">既存データの棚卸し</div>
<div class="fs-b"><strong>シラバス</strong>・履修規程・ナンバリング・カリキュラムマップ・DP。<span class="hl-dark">所在と形式を要確認</span></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">2</span>
<div class="fs-h">正規化</div>
<div class="fs-b">科目を一意IDに。<strong>ナンバリングをIRIの土台</strong>に使えるか検討</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">3</span>
<div class="fs-h">LLM抽出</div>
<div class="fs-b">シラバスの到達目標・授業計画から <strong>Topic / Concept / Outcome</strong> を抽出。<strong>必ず原文引用を付す</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">4</span>
<div class="fs-h">統合・検証</div>
<div class="fs-b">同名概念を学部横断で統合。<code>requires</code> に<strong>閉路検出</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">5</span>
<div class="fs-h">教員による確認</div>
<div class="fs-b">自分の科目の抽出結果だけを<strong>各教員が確認</strong>。全数は見ない</div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col good">
<div class="cmp-h">論文から借りる勘所</div>
<ul>
<li><strong>全ての辺に根拠引用</strong>を付ける（シラバスの原文）。後から検証・反論できる形にする</li>
<li><strong>閉路検出で人手を絞る</strong>。矛盾している所だけ人が見る</li>
<li><strong>確信度で足切り</strong>。低確信度の関係は最初から採用しない</li>
<li><strong>グラフだけを検証</strong>し、下流の応用は抜き取り検査に留める</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">大学ならではの現実的制約</div>
<ul>
<li>シラバスの<strong>記述粒度・詳しさが教員によって極端に違う</strong>。抽出結果の品質もばらつく</li>
<li><strong>教員の確認コストが最大のボトルネック</strong>。「自分の科目だけ」に限定するのが現実解</li>
<li>年度ごとに<strong>科目が改廃される</strong>。バージョン管理が必須（論文には無い論点）</li>
<li>個人情報・成績データとは<strong>接続しない</strong>設計から始める</li>
</ul>
</div>
</div>

<!--
- 作り方の提案です。論文の5段階をほぼ踏襲しつつ、5番目を変えました。
- 論文は12名で全数検証しましたが、大学ではそれは無理です。代わりに「各教員が自分の科目の抽出結果だけを確認する」。
- これなら1人あたりの負担は数分で済みます。しかも自分の科目なら正しく判断できる。
- 右下の制約も現実的な問題で、特にバージョン管理は論文には無い論点です。科目は毎年変わるので。
- あと最後の行、最初は成績データとは繋がない。倫理的にもプロジェクトを進める上でも、そこから始めるべきだと思っています。
-->

---

<!-- _class: summary -->

<div class="page-title">何ができるようになるか</div>

## ユースケース ── 「作ったら何が変わるか」

<div class="propose">提案</div>

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">🎓</span>学生：履修設計</div>
<div class="c3-b">「この研究をしたい」から<strong>逆算した履修経路</strong>を提示。<br>いまのAIは一般論しか言えないが、<span class="hl">自大学の実在科目で</span>答えられるようになる</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🧭</span>教員：科目設計</div>
<div class="c3-b">新設科目が<strong>どの概念と重複し、どこが空白か</strong>を可視化。<br>「この内容は3年の別科目で既にやっている」を機械が指摘</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">📋</span>大学：質保証</div>
<div class="c3-b">DPと科目の対応（カリキュラムマップ）を<strong>手作業の表から自動生成</strong>へ。<br>認証評価の根拠資料を<span class="hl">グラフから導出</span></div>
</div>
<div class="card3 card-d">
<div class="c3-h"><span class="ic">🤖</span>AI：接地した助言</div>
<div class="c3-b">生成AIに<strong>大学の構造を渡してから</strong>答えさせる。<br>ハルシネーションが<span class="hl">「グラフに無い」で検出可能</span>になる</div>
</div>
</div>

<div class="cmp" style="margin-top:14px">
<div class="cmp-col good">
<div class="cmp-h">とくに効きそうな場面</div>
<ul>
<li><strong>カリキュラム改訂</strong>：科目を1つ廃止したとき、どの到達目標が孤立するかが即座に分かる</li>
<li><strong>編入・単位互換</strong>：<code>equivalent_to</code> があれば、既修得単位の読み替え検討を機械が下書きできる</li>
<li><strong>学生の相談対応</strong>：「この分野に進みたい」に対し、履修可能性を制約付きで探索できる</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">論文の結果が示唆すること</div>
<ul>
<li>今日見たとおり、<strong>LLM単体では前提関係を34%しか当てられない</strong>（Gemini-3-Flash の Prereq）</li>
<li>つまり<strong>グラフを渡さずに履修相談をさせるのは危険</strong>。「それらしい」が「正しくない」助言になる</li>
<li>逆に、グラフさえあれば<strong>小さいモデルでも十分</strong>な可能性がある（サンプル効率の結果）</li>
</ul>
</div>
</div>

<div class="takeaway">目的は「AIに大学を語らせる」ことではなく「語る根拠を持たせる」こと</div>

<!--
- 何ができるようになるか。4つの立場から書きました。
- 学生の履修設計、教員の科目設計、大学の質保証、そしてAIの接地。
- 右下が今日の論文と直結するところです。
- Gemini-3-Flashですら前提関係を34.8%しか当てられない。ということは、グラフを渡さずに生成AIに履修相談をさせるのは相当危ないということです。
- もっともらしいけれど正しくない助言が返ってくる。
- 逆に、グラフさえあれば小さいモデルでいい可能性がある。これはコスト面でも重要です。
- 最後の一行が私の立場です。AIに大学を語らせたいのではなく、語る根拠を持たせたい。
-->

---

<!-- _class: split -->

<div class="page-title">評価をどう作るか</div>

## 大学版ベンチマークの設計試案

<div class="propose">提案</div>

<div class="split-body">
<div class="left">

### 論文の5タスク族を大学に読み替える

<table class="tbl sm">
<tr><th>族</th><th>大学版の問い</th></tr>
<tr><td><b>Ground</b></td><td>この課題はどの到達目標を測っているか</td></tr>
<tr><td><b>Prereq</b></td><td>この科目の履修要件は何か／この科目を前提とする科目は何か</td></tr>
<tr><td><b>Neighbor</b></td><td>この科目と内容が近い科目はどれか</td></tr>
<tr><td><b>Evidence</b></td><td>このDPは、どの科目群で担保されているか</td></tr>
<tr><td><b>Locate</b></td><td>この概念は、何年次のどの科目で初出するか</td></tr>
</table>

<div class="band blue" style="font-size:17.5px">論文と同じく、<b>正解も誤答もグラフから機械的に採取</b>できる<br>→ 作問コストがほぼゼロ</div>

</div>
<div class="right">

### 大学ならではの追加タスク

<div class="gcell">
<div class="gc-h">Path：経路探索</div>
<div class="gc-b">「Xを学ぶために、いま2年生が取れる最短の履修経路は？」<br><strong>制約充足を含む</strong>ので難度が高い</div>
</div>
<div class="gcell">
<div class="gc-h">Gap：空白検出</div>
<div class="gc-b">「このDPを担保する科目が不足しているのはどこか」<br><strong>否定の推論</strong>を要する</div>
</div>
<div class="gcell">
<div class="gc-h">Impact：影響波及</div>
<div class="gc-b">「この科目を廃止すると、どの到達目標が孤立するか」<br><strong>グラフの連結性</strong>を問う</div>
</div>

<div class="band">この3つは<b>LLM単体ではまず解けない</b>。<br>グラフを渡す価値がそのまま可視化される</div>

</div>
</div>

<div class="takeaway">評価もグラフから自動生成できる ── これが論文最大の再利用ポイント</div>

<!--
- 評価をどう作るか。左は論文の5タスクをそのまま読み替えたもの。
- 右が大学ならではの追加です。経路探索、空白検出、影響波及。
- この3つはLLM単体ではまず解けません。制約充足とか否定の推論とか連結性の判定が要るからです。
- 逆に言うと、グラフを渡す価値がここで一番はっきり出ます。
- そして左下。論文の最大の再利用ポイントは、評価データがグラフから自動生成できることです。作問コストがほぼゼロになる。
-->

---

<!-- _class: summary -->

<div class="page-title">実装形式の選択</div>

## OWL で厳密に か、OKF で軽く か

<div class="cmp">
<div class="cmp-col">
<div class="cmp-h">案A：OWL / RDF で書く</div>
<ul>
<li><strong>◎</strong> 履修要件の矛盾を<strong>推論で検出</strong>できる（閉路・到達不能な要件）</li>
<li><strong>◎</strong> 学習指導要領LOD や CASE と<strong>語彙レベルで接続</strong>できる</li>
<li><strong>◎</strong> SPARQL で厳密に問い合わせられる</li>
<li><strong>×</strong> 書ける人が学内にほぼいない。<strong>維持できない</strong></li>
<li><strong>×</strong> 教員が中身を直せない＝現場から乖離する</li>
</ul>
</div>
<div class="cmp-col good">
<div class="cmp-h">案B：OKF 的に書く</div>
<ul>
<li><strong>◎</strong> Markdown ＋ フロントマター。<strong>教員が直接直せる</strong></li>
<li><strong>◎</strong> Git で差分管理＝<strong>年度改訂の履歴</strong>がそのまま残る</li>
<li><strong>◎</strong> 人もLLMも<strong>同じファイルを読む</strong>（変換レイヤ不要）</li>
<li><strong>×</strong> 形式的な一貫性検証ができない</li>
<li><strong>×</strong> 外部標準との接続は<strong>自前で書く</strong>必要</li>
</ul>
</div>
</div>

<div class="band">現実解（提案）：<b>案B を正本にし、案A を導出物として生成する</b></div>

<div class="cards3" style="margin-top:10px">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">✍️</span>正本＝Markdown</div>
<div class="c3-b">教員が書き、Gitで管理。<strong>人が読める形が真実</strong></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">⚙️</span>導出＝RDF/OWL</div>
<div class="c3-b">CIで自動変換し、<strong>閉路検出などの検証だけ</strong>を機械にやらせる</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🔗</span>公開＝LOD</div>
<div class="c3-b">検証を通ったものを公開。<strong>他大学・国のコード</strong>と繋ぐ</div>
</div>
</div>

<div class="takeaway">「書きやすさ」を正本に、「厳密さ」を検査に回す</div>

<!--
- 第2部で保留にした論点に戻ります。OWLで厳密にやるか、OKFのように軽くやるか。
- 私の提案は真ん中の帯です。Markdownを正本にして、RDF/OWLは自動生成する。
- 理由は単純で、教員が直せないものは維持できないからです。オントロジーは作った時点がピークで、あとは腐っていく。それを防げるのは、現場が直せる形にしておくことだけだと思います。
- 一方で厳密さも捨てたくない。だからCIで自動変換して、閉路検出などの検証だけ機械にやらせる。
- 「書きやすさを正本に、厳密さを検査に回す」。これが現実解ではないかと考えています。
-->

---

<!-- _class: summary -->

<div class="page-title">ロードマップ</div>

## 3フェーズ ── 小さく作って、壊れないかを見る

<div class="propose">提案</div>

<div class="flow">
<div class="fstep">
<span class="fs-n">1</span>
<div class="fs-h">Phase 1：1プログラム分の実証</div>
<div class="fs-b"><strong>1学部・1学位プログラム</strong>のシラバスだけでグラフを作る。<br>目的は「シラバスから概念が本当に取れるか」の検証。<br><span class="hl-dark">成果物：グラフ＋抽出品質の実測値</span></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">2</span>
<div class="fs-h">Phase 2：評価データの生成</div>
<div class="fs-b">グラフから<strong>大学版ベンチマーク</strong>を自動生成し、<br>各種LLMがどこまで答えられるかを測る。<br><span class="hl-dark">成果物：論文1本になる規模の実験</span></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">3</span>
<div class="fs-h">Phase 3：応用と全学展開</div>
<div class="fs-b">履修相談・カリキュラム点検への実装。<br>他学部へ拡大し、外部標準と接続。<br><span class="hl-dark">成果物：運用可能な仕組み</span></div>
</div>
</div>

<div class="cmp" style="margin-top:16px">
<div class="cmp-col good">
<div class="cmp-h">Phase 1 で必ず測っておきたいこと</div>
<ul>
<li>シラバス1件あたり、<strong>Concept が平均何個</strong>取れるか（粒度の実測）</li>
<li>教員に見せたとき、<strong>何%が「これで良い」と言うか</strong>（＝人手検証のκに相当）</li>
<li><code>requires</code> の<strong>閉路がどれくらい出るか</strong>（＝履修規程そのものの整合性チェックにもなる）</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">今日この場で決めたいこと</div>
<ul>
<li>Phase 1 の<strong>対象をどこにするか</strong>（協力が得やすく、科目数が多すぎない単位）</li>
<li>シラバスデータの<strong>入手経路と利用範囲</strong>（要確認）<span class="checkmark">要確認</span></li>
<li>粒度の設計方針：<strong>Topic 止まりにするか、Concept まで降りるか</strong></li>
</ul>
</div>
</div>

<div class="takeaway">最初の問いは「作れるか」ではなく「シラバスから概念が取れるか」</div>

<!--
- ロードマップです。3フェーズ。
- Phase 1は小さく。1つの学位プログラムだけ。目的は「シラバスから概念が本当に取れるのか」を確かめることです。ここが駄目なら全部駄目なので。
- 左下、Phase 1で測るべきことを3つ挙げました。3つ目が地味に面白くて、requiresの閉路を検出すると、それは履修規程そのもののバグ検出になります。副産物として価値がある。
- 右下が今日この場で議論したいことです。特に粒度の設計方針。Topicで止めるか、Conceptまで降りるか。ここが決まらないと先に進めません。
- シラバスデータの入手経路は私もまだ確認できていないので、ご存じの方がいたら教えてください。
-->

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

## 今日の3つの持ち帰り

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">1️⃣</span>問題の所在</div>
<div class="c3-b">LLMは<strong>試験には答えられるが、カリキュラムの構造は分かっていない</strong>。<br>最新モデルでも完全一致<strong>57%</strong>、前提関係に至っては<strong>35%</strong>。<br><span class="cl-sub">記憶と構造理解は別物である</span></div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">2️⃣</span>解き方</div>
<div class="c3-b"><strong>グラフを1つ作れば、測る道具と教える道具の両方が出る</strong>。<br>品質もグラフ1点に集約でき、<strong>7,335件</strong>が14万件の汎用データに勝つ。<br><span class="cl-sub">設計思想はドメインを問わず移植できる</span></div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">3️⃣</span>大学への含意</div>
<div class="c3-b">日本のK-12は<strong>すでにコード化・LOD化されている</strong>。大学は空白。<br>スキーマは流用でき、<strong>「強制と推奨の分離」</strong>が大学固有の設計課題。<br><span class="cl-sub">正本はMarkdown、厳密さは検査に回す</span></div>
</div>
</div>

<div class="band">今日いちばん議論したいこと：<b>シラバスから概念は本当に取り出せるのか</b>。<br>取り出せないなら、この構想は成立しない</div>

<div class="gquote">
オントロジーは「作ったら終わり」ではなく「<strong>維持できるか</strong>」がすべて。<br>だからこそ、<strong>現場が直せる形</strong>で作り始めたい。
</div>

<!--
- まとめです。3点。
- 問題の所在、解き方、大学への含意。
- そして下の帯が今日いちばん議論したいことです。シラバスから概念が取り出せるか。ここが成否を分けます。
- 最後の引用は私の実感です。オントロジーは作った時点がピークで、維持できなければ意味がない。だから最初から現場が直せる形にしておきたい。
-->

---

<!-- _class: refs -->

<div class="page-title">参考文献・出典</div>

## 本日参照した資料

<table class="lit">
<tr><th style="width:14%">区分</th><th>出典</th></tr>
<tr>
<td class="tag">主題論文</td>
<td>Liang, H., Lin, Q., Han, Z., Ma, X., Wong, Z. H., Qiang, M., Sun, L., &amp; Zhang, W. (2026). <i>K12-KGraph: A Curriculum-Aligned Knowledge Graph for Benchmarking and Training Educational LLMs.</i> arXiv:2605.09635v3 [cs.CL]. CC BY-NC-SA 4.0.<br><a href="https://arxiv.org/html/2605.09635v3">https://arxiv.org/html/2605.09635v3</a>　／　コード・データ： <a href="https://github.com/haolpku/K12-Dataset">https://github.com/haolpku/K12-Dataset</a></td>
</tr>
<tr>
<td class="tag">定義</td>
<td>Gruber, T. R. (1993). A translation approach to portable ontology specifications. <i>Knowledge Acquisition</i>, 5(2), 199–220.<br>Studer, R., Benjamins, V. R., &amp; Fensel, D. (1998). Knowledge engineering: Principles and methods. <i>Data &amp; Knowledge Engineering</i>, 25(1–2), 161–197.</td>
</tr>
<tr>
<td class="tag">OWL</td>
<td>独立行政法人情報処理推進機構 デジタル基盤センター データ環境勉強会「OWL」（作成 2022-10-10／更新 2023-07-19）DOI: 10.60430/digital.e-learning0003<br><a href="https://www.ipa.go.jp/digital/data/nq6ept000000kbna-att/owl.pdf">https://www.ipa.go.jp/digital/data/nq6ept000000kbna-att/owl.pdf</a></td>
</tr>
<tr>
<td class="tag">教育標準</td>
<td>文部科学省「教育データ標準」（学習指導要領コード、2020年10月公開）<a href="https://www.mext.go.jp/a_menu/other/data_00001.htm">https://www.mext.go.jp/a_menu/other/data_00001.htm</a><br>教育データプラス研究会「学習指導要領LOD」<a href="https://jp-cos.github.io/about">https://jp-cos.github.io/about</a>（RDF/Turtle、CC BY 4.0）<br>1EdTech Consortium, <i>Competencies and Academic Standards Exchange (CASE) v1.1</i>. <a href="https://www.1edtech.org/standards/case">https://www.1edtech.org/standards/case</a></td>
</tr>
<tr>
<td class="tag">教育KG</td>
<td>溝口理一郎『オントロジー工学の理論と実践』（人工知能学会編「知の科学」シリーズ、オーム社）── OMNIBUS オントロジーを含む</td>
</tr>
<tr>
<td class="tag">最新実装</td>
<td>McVeety, S., &amp; Hormati, A.「Open Knowledge Format のご紹介」Google Cloud Blog, 2026年6月22日公開（米国時間2026年6月13日）<br><a href="https://cloud.google.com/blog/ja/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/">https://cloud.google.com/blog/ja/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/</a><br>仕様・参照実装：GitHub <code>GoogleCloudPlatform/knowledge-catalog/okf</code>（v0.1）</td>
</tr>
</table>

<div class="attr">図表はすべて出典の数値をもとに本デック用に作成。第5部の大学版スキーマ・ロードマップは筆者による提案であり、既存研究の主張ではない。</div>

<!--
- 参考文献です。
- 主題論文はCC BY-NC-SAなので、日本語全訳を同じフォルダに置いてあります。必要な方はどうぞ。
- 第5部は全部私の提案なので、既存研究の主張と混ぜないよう明示してあります。
-->

---

<!-- _class: qa -->

# ご議論をお願いします

### ① シラバスから概念は取り出せるか　② 粒度は Topic か Concept か　③ Phase 1 の対象はどこか

<!--
- ありがとうございました。3つの論点を挙げておきます。議論をお願いします。
-->
