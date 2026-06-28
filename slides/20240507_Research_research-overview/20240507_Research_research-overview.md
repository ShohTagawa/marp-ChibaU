---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">研究概要</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール（#0F574C）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }

  /* ===== 研究概要フロー図 共通部品 ===== */
  .ro-io { border: 2.5px solid #333; border-radius: 8px; background: #fff; padding: 7px 14px; font-size: 19px; line-height: 1.4; }
  .ro-io b { color: var(--accent-dark); }
  .ro-tab { position: relative; border: 2.5px solid #333; border-radius: 14px; background: #fff; padding: 26px 16px 12px; }
  .ro-tab .tabname { position: absolute; top: -17px; left: 50%; transform: translateX(-50%); background: #fff; padding: 0 14px; font-weight: 800; font-size: 22px; color: var(--accent-dark); white-space: nowrap; }
  .ro-tab .li { font-size: 19px; line-height: 1.4; margin: 4px 0; }
  .ro-tab .li b { color: var(--accent-dark); }
  .ro-badge { display: inline-block; color: #fff; font-weight: 800; border-radius: 4px; padding: 5px 16px; font-size: 23px; }
  .b-orange { background: #B5531B; }
  .b-green  { background: #3C7A3C; }
  .b-red    { background: #7C1218; }
  .mid-lbl { font-weight: 800; font-size: 20px; color: #333; text-align: center; }
  .core-q { background: #111; color: #fff; font-weight: 800; font-size: 26px; text-align: center; border-radius: 6px; padding: 8px 0; letter-spacing: .01em; }

  /* ===== slide2 概念パネル ===== */
  .cpanel { border: 2px solid #cfcfcf; border-radius: 8px; padding: 12px 16px; background: #fff; }
  .cpanel .ptitle { font-size: 20px; font-weight: 800; color: var(--accent-dark); margin-bottom: 6px; }
  .greenband { background: #DCEAD9; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 14px; padding: 8px 14px; }
  .gbox { border: 2.5px solid #1d3a37; border-radius: 10px; background: #fff; font-weight: 700; line-height: 1.3; text-align: center; padding: 6px 14px; }
  .lbl-red    { background: #C01620; color:#fff; font-weight:800; padding:3px 12px; }
  .lbl-green  { background: #3C7A3C; color:#fff; font-weight:800; padding:3px 12px; }
  .lbl-orange { background: #B5531B; color:#fff; font-weight:800; padding:3px 12px; }
  .ai-pink { background: #F7DEE0; font-weight:800; border-radius:4px; padding:4px 16px; display:inline-block; }
  .exp-tag { display:inline-block; border:2px solid #C01620; color:#C01620; font-weight:800; padding:2px 12px; }
  .exp-tag.purple { border-color:#7a3b8f; color:#7a3b8f; }
---

<div class="page-title">研究全体像</div>

<div style="position:absolute; inset:var(--header-h) 0 0 0;">

<!-- 上段入力ボックス -->
<div class="ro-io" style="position:absolute; left:2.5%; top:3%; width:34%;"><b>外部</b>：事例の報告、研究結果、<br>ニュース、サイトへの掲載希望</div>
<div class="ro-io" style="position:absolute; left:55%; top:3%; width:36%;"><b>資料</b>：学内アンケート、情報・<br>教育工学的視点からの生成AI教材</div>

<!-- 上段→大枠の下矢印 -->
<div style="position:absolute; left:14%; top:18%; font-size:30px; color:#9a9a9a;">⬇</div>
<div style="position:absolute; left:71%; top:18%; font-size:30px; color:#9a9a9a;">⬇</div>

<!-- 左：基盤形成の大枠 -->
<div class="ro-tab" style="position:absolute; left:2.5%; top:24%; width:41%;">
<div class="tabname">基盤形成・具体例の収集</div>
<div class="li"><b>A.</b> 学生参画の基盤構築 “サンドボックス(試行環境)”</div>
<div class="li"><b>B.</b> Webサイトでの収集・記事化、学生とのアイデアの試行</div>
<div class="li"><b>C.</b> ニーズ分析・FDプログラム評価</div>
</div>

<!-- 右：FDプログラムの大枠 -->
<div class="ro-tab" style="position:absolute; left:57%; top:24%; width:40.5%;">
<div class="tabname">FDプログラムの作成と実施</div>
<div class="li">①生成AIで学習効果の損なわれない授業作りの技法を身につける</div>
<div class="li">②高等教育に生成AIを有効利用する方法を具体例を元に作成できる</div>
<div class="li">③生成AIを教育活用する際に必要な学生・教員の知識を説明できる</div>
</div>

<!-- 中央：双方向の関係ラベル -->
<div style="position:absolute; left:44.5%; top:27%; width:12%; text-align:center;">
<div class="mid-lbl">分析</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">→</div>
<div class="mid-lbl" style="margin-top:6px;">学生目線<br>の付加</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">→</div>
<div class="mid-lbl">公開</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">←</div>
<div class="mid-lbl">分析</div>
</div>

<!-- 成果バッジ -->
<div style="position:absolute; left:9%; top:62.5%;"><span class="ro-badge b-orange">成果1 webサイト</span></div>
<div style="position:absolute; left:65%; top:62.5%;"><span class="ro-badge b-green">成果2 FD教材</span></div>

<!-- 成果3 行 -->
<div style="position:absolute; left:2.5%; top:74%; width:95%; display:flex; align-items:flex-start; gap:18px;">
<span style="font-size:28px; color:#9a9a9a;">➡</span>
<span class="ro-badge b-red" style="line-height:1.25; text-align:center;">成果3<br>研究/実践論文</span>
<div style="font-size:19px; line-height:1.45;">① 生成AIに損なわれない授業の手法とチェックリスト<br>② 生成AI活用による授業内タスクの高度化<br>③ 生成AIのFDプログラムの実践報告と効果検証</div>
</div>

<!-- 核心の問 -->
<div class="core-q" style="position:absolute; left:5%; top:91%; width:78%;">核心の問：生成AIを大学(院)の授業でどうすれば有効活用出来るのか？</div>

</div>

<!--
- 研究全体像。外部・資料を入力に、左の「基盤形成・具体例の収集」と右の「FDプログラムの作成と実施」が、分析・学生目線の付加・公開を介して往復し、成果1 webサイト・成果2 FD教材・成果3 研究/実践論文を生む。核心の問は「生成AIを大学(院)の授業でどうすれば有効活用出来るのか？」。
-->

---

<div class="page-title">生成AIの位置づけ</div>

<div style="position:absolute; inset:var(--header-h) 0 0 0; padding: 8px 3% 0;">

<div style="display:flex; gap:3%; align-items:flex-start;">

<!-- 左：原理（小パネル） -->
<div class="cpanel" style="width:46%;">
<div class="ptitle">インストラクショナル・デザインの原理</div>
<div class="greenband">
<div class="gbox" style="font-size:21px;">課題中心<br>の教育設計</div>
<span style="color:#3C7A3C; font-size:30px; font-weight:900;">➡</span>
<div class="gbox" style="font-size:21px;">学修者中心<br>の教育</div>
</div>
<div style="display:flex; align-items:center; gap:8px; margin:10px 0 2px; font-size:23px;">
<span class="lbl-red">懸念</span><span class="lbl-green">高度化</span>
<span style="font-weight:800; font-size:26px;">生成AI</span>
<span class="lbl-orange">可能性</span>
</div>
<div style="display:flex; align-items:flex-start; gap:10px; margin-top:8px;">
<span style="font-weight:800; font-size:21px;">期待</span>
<div style="font-weight:800; font-size:21px; line-height:1.35;">FDプログラムの拡充<br>具体例や学修者視点の可視化</div>
</div>
</div>

<!-- 右：理想（大パネル2つ・同一構成） -->
<div style="width:51%; display:flex; flex-direction:column; gap:14px;">

<div class="cpanel">
<div class="greenband">
<div class="gbox" style="font-size:23px;">タスク中心<br>の教育設計</div>
<span style="color:#3C7A3C; font-size:24px; font-weight:900; display:inline-flex; align-items:center; gap:4px;">理想 ➡</span>
<div class="gbox" style="font-size:23px;">学修者中心<br>の高等教育</div>
</div>
<div style="display:flex; align-items:center; gap:16px; margin:8px 0 2px; font-weight:800; font-size:22px;">
<span>懸念</span><span style="color:#888;">⬇⬆</span><span>高度化</span>
<span style="margin-left:auto; color:#888;">⬆</span><span>可能性</span>
</div>
<div style="margin:2px 0;"><span class="ai-pink"><b style="font-size:26px;">生成AI</b> (ChatGPT etc...)</span></div>
<div style="display:flex; align-items:flex-start; gap:10px; margin-top:6px;">
<span class="exp-tag">期待</span>
<div style="font-weight:800; font-size:21px; line-height:1.3;">FDプログラムの拡充<br>具体例や学修者視点の可視化</div>
</div>
</div>

<div class="cpanel">
<div class="greenband">
<div class="gbox" style="font-size:23px;">タスク中心<br>の教育設計</div>
<span style="color:#3C7A3C; font-size:24px; font-weight:900; display:inline-flex; align-items:center; gap:4px;">理想 ➡</span>
<div class="gbox" style="font-size:23px;">学修者中心<br>の高等教育</div>
</div>
<div style="display:flex; align-items:center; gap:16px; margin:8px 0 2px; font-weight:800; font-size:22px;">
<span>懸念</span><span style="color:#888;">⬇⬆</span><span>高度化</span>
<span style="margin-left:auto; color:#888;">⬆</span><span>可能性</span>
</div>
<div style="margin:2px 0;"><span class="ai-pink"><b style="font-size:26px;">生成AI</b> (ChatGPT etc...)</span></div>
<div style="display:flex; align-items:flex-start; gap:10px; margin-top:6px;">
<span class="exp-tag purple">期待</span>
<div style="font-weight:800; font-size:21px; line-height:1.3;">FDプログラムの拡充<br>具体例や学修者視点の可視化</div>
</div>
</div>

</div>
</div>
</div>

<!--
- 生成AIの位置づけ。ID（インストラクショナル・デザイン）の原理「課題中心→学修者中心」を起点に、タスク中心の教育設計から学修者中心の高等教育という理想へ。生成AIは懸念・高度化・可能性をもたらし、期待としてFDプログラムの拡充、具体例や学修者視点の可視化につながる。
-->

---

<div class="page-title">研究全体像（成果版）</div>

<div style="position:absolute; inset:var(--header-h) 0 0 0;">

<!-- 上段入力ボックス -->
<div class="ro-io" style="position:absolute; left:2.5%; top:3%; width:34%;"><b>外部</b>：事例の報告、研究結果、<br>ニュース、サイトへの掲載希望</div>
<div class="ro-io" style="position:absolute; left:55%; top:3%; width:36%;"><b>資料</b>：学内アンケート、情報・<br>教育工学的視点からの生成AI教材</div>

<div style="position:absolute; left:14%; top:18%; font-size:30px; color:#9a9a9a;">⬇</div>
<div style="position:absolute; left:71%; top:18%; font-size:30px; color:#9a9a9a;">⬇</div>

<!-- 左：基盤形成の大枠 -->
<div class="ro-tab" style="position:absolute; left:2.5%; top:24%; width:41%;">
<div class="tabname">基盤形成・具体例の収集</div>
<div class="li">①学生参画の基盤構築</div>
<div class="li">②学生協働による情報集約、試行、Webサイトでの記事化</div>
<div class="li">③教員・学生の生成AIに関する調査やFDのニーズ分析</div>
</div>

<!-- 右：FDプログラムの大枠 -->
<div class="ro-tab" style="position:absolute; left:57%; top:24%; width:40.5%;">
<div class="tabname">FDプログラムの創造と公開</div>
<div class="li">①生成AIで学習効果の損なわれない授業作りの技法を身につける</div>
<div class="li">②高等教育に生成AIを有効利用する方法を具体例を元に創造出来る</div>
<div class="li">③生成AIを教育活用する際に必要な学生・教員の知識を説明できる</div>
</div>

<!-- 中央：双方向の関係ラベル -->
<div style="position:absolute; left:44.5%; top:27%; width:12%; text-align:center;">
<div class="mid-lbl">分析</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">→</div>
<div class="mid-lbl" style="margin-top:6px;">学生目線<br>の付加</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">→</div>
<div class="mid-lbl">公開</div>
<div style="font-size:26px; color:#888; margin:-2px 0;">←</div>
<div class="mid-lbl">分析</div>
</div>

<!-- 成果バッジ -->
<div style="position:absolute; left:9%; top:62.5%;"><span class="ro-badge b-orange">成果1 Webサイト</span></div>
<div style="position:absolute; left:62%; top:62.5%;"><span class="ro-badge b-green">成果2 FD教材</span></div>

<!-- 成果3 行 -->
<div style="position:absolute; left:2.5%; top:74%; width:95%; display:flex; align-items:flex-start; gap:18px;">
<span style="font-size:28px; color:#9a9a9a;">➡</span>
<span class="ro-badge b-red" style="line-height:1.25; text-align:center;">成果3<br>研究/実践論文</span>
<div style="font-size:19px; line-height:1.45;">① 生成AIに毀損されないID手法とチェックリスト<br>② 生成AI活用による異分野向け理系教育の高度化<br>③ 生成AIのFDのニーズとプログラムの効果検証</div>
</div>

<!-- 核心の問 -->
<div class="core-q" style="position:absolute; left:5%; top:91%; width:78%;">核心の問：生成AIを大学(院)の授業でどうすれば有効活用出来るのか？</div>

</div>

<!--
- 研究全体像の成果版。前スライドの構想を成果ベースで言い換え。①学生参画の基盤構築、②学生協働による情報集約・試行・記事化、③教員・学生の生成AI調査やFDニーズ分析を経て、FDプログラムの創造と公開へ。成果1 Webサイト・成果2 FD教材・成果3 研究/実践論文。核心の問は同じ。
-->
