---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">授業評価アンケート</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy（濃紺）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 23%; }
  section .page-title { left: 20%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 流れ表（詳細） */
  .flowtbl { display: grid; grid-template-columns: 168px 250px 1fr; gap: 8px 14px; align-items: stretch; margin-top: 6px; }
  .flowtbl .stp { background: var(--accent); color: #fff; font-weight: 800; font-size: 21px; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6px; line-height: 1.3; }
  .flowtbl .cen { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; font-size: 21px; border: 2px solid var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6px 8px; line-height: 1.3; }
  .flowtbl .rgt { font-size: 19px; line-height: 1.4; display: flex; flex-direction: column; justify-content: center; }
  .leg { display: grid; grid-template-columns: 40px 1fr; gap: 8px 12px; align-items: center; font-size: 22px; margin-top: 4px; }
  .leg .sw { width: 38px; height: 24px; border: 1.5px solid #999; border-radius: 3px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">授業評価アンケートの活用に向けて</div>
<div class="title-big">(補足) 授業評価アンケートに係る補足事項</div>
</div>

<div class="box-accent" style="max-width:760px; margin:4px auto 18px;"><b>説明する内容：</b><br>① システムの使い方・実施の流れ詳細<br>② 内部質保証としての授業評価アンケート</div>

<div class="title-meta" style="text-align:center; font-size:22px; line-height:1.6;">
高等教育センター 助教　<b>田川　翔</b><br>
高等教育センター 質保証・FD部長／医学研究院 教授　<b>伊藤　彰一</b>
</div>

<!--
(00:45) 皆様、こんにちは。高等教育センター 助教の田川と申します。千葉大学全学FD、授業評価アンケートの活用に向けて、の二本目の動画となります。この動画では、効果的なアンケートの実施・活用方法を説明します。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# 授業評価アンケートのスケジュール

<div class="subhead"><span class="tag tag-soft">例：2024年度 (R6) T1</span></div>

<div style="display:flex; gap:36px; align-items:flex-start;">
<img src="./src/fig01-img.png" alt="アンケートスケジュールのカレンダー" style="height:430px;">
<div style="flex:1;">
<div class="leg">
<div class="sw" style="background:#F8E0D0;"></div><div><b>アンケート対象講義選定</b>　(学部・研究科学務担当者)</div>
<div class="sw" style="background:#B9CCE6;"></div><div><b>アンケート回答期間</b> (学生)</div>
<div class="sw" style="background:#000; border-color:#000;"></div><div><b>ターム終了日</b></div>
<div class="sw" style="background:#BFBFBF;"></div><div><b>集計日</b> (スマートオフィス)</div>
<div class="sw" style="background:#F4A6A6;"></div><div><b>フィードバックコメント入力期間</b> (教員)</div>
<div class="sw" style="background:#CDE6C6;"></div><div><b>アンケート結果閲覧開始</b> (学生)</div>
</div>
<div class="box-info" style="margin-top:16px;">※T3、T6も含め、毎学期実施している</div>
</div>
</div>

<!--
アンケートは毎学期、ターム単位で実施。回答期間→集計→教員のコメント入力→学生への結果閲覧、という流れがスケジュールされている。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# 授業評価アンケートの流れ (詳細)

<div class="flowtbl">
<div class="stp">学生への案内メール</div>
<div class="cen">Step.1 回答期間開始</div>
<div class="rgt">- アンケート開始日<br>　※ 未回答の場合リマインド</div>

<div class="stp">学生による回答</div>
<div class="cen">Step.2 回答期間中</div>
<div class="rgt">- リンクから随時<br>- 授業中に記入 など</div>

<div class="stp">アンケート集計</div>
<div class="cen">Step.3 回答期間終了</div>
<div class="rgt">※スマートオフィスで実施</div>

<div class="stp">教員へ結果通知・<br>教員がコメント記入</div>
<div class="cen">Step.4 集計完了</div>
<div class="rgt">- 結果を確認し、フィードバックコメント (1授業に対し1つ)を記載下さい<br>　※受講者が少ない場合は、集計結果のみ公開</div>

<div class="stp">学生へ通知メール／<br>学生がコメントを確認</div>
<div class="cen">Step.5 学生へ、<br>コメントが戻る</div>
<div class="rgt">- 一方通行ではない、コミュニケーション</div>
</div>

<!--
回答開始→回答中→集計→教員コメント→学生へ結果が戻る、までの5ステップ。最後に学生へコメントが戻ることで、一方通行ではないコミュニケーションになる。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# <span style="font-size:34px;">学生への案内メール</span>　<span class="tag tag-soft">Step.1 回答期間開始</span>

<div style="display:flex; gap:30px; align-items:flex-start;">
<img src="./src/fig02-img.png" alt="アンケート回答開始日に送信されるメールの例" style="height:430px; border:1px solid #ccc;">
<div style="flex:1; margin-top:30px;">
<div class="box-info">- アンケート開始日<br>　※ 未回答の場合リマインド</div>
<div class="box-accent" style="margin-top:24px;">※日英、併記で送付されます。</div>
<div class="box-accent" style="margin-top:18px;">※回答用のマニュアルリンク、期間等も送付されます。</div>
</div>
</div>

<!--
回答開始日に学生へ案内メールが自動送付される。日本語と英語が併記され、回答用マニュアルのリンクや回答期間も記載される。未回答者にはリマインドが送られる。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# <span style="font-size:34px;">学生による回答</span>　<span class="tag tag-soft">Step.2 回答期間中</span>

<div class="box-info" style="margin-bottom:10px;">- リンクから随時　- 授業中に記入 など</div>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="text-align:center;">
<img src="./src/fig03-img.png" alt="PC版の回答画面" style="height:330px; border:1px solid #ccc;">
<div style="font-size:24px; font-weight:800; margin-top:6px;">PC版</div>
</div>
<div style="text-align:center;">
<img src="./src/fig04-img.png" alt="スマホ版の回答画面" style="height:330px; border:1px solid #ccc;">
<div style="font-size:24px; font-weight:800; margin-top:6px;">スマホ版</div>
</div>
</div>

<!--
学生はメールのリンクから随時、または授業中に回答できる。PC版・スマホ版どちらにも対応している。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# <span style="font-size:28px;">教員へ結果通知・教員がコメント記入</span>　<span class="tag tag-soft">Step.4 集計完了</span>

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:8px;">
<div style="flex:1.05;">
<img src="./src/fig05-img.png" alt="アンケート結果一覧画面" style="width:100%; border:1px solid #ccc;">
<img src="./src/fig06-img.png" alt="コメント入力画面" style="width:100%; border:1px solid #ccc; margin-top:8px;">
</div>
<div style="flex:0.95;">
<div class="box-warn" style="font-size:20px; padding:9px 18px;">- 結果を確認し、フィードバックコメント (1授業に対し1つ)を記載下さい<br>　※受講者が少ない場合は、集計結果のみ公開</div>
<div class="box-info" style="margin-top:10px; font-size:19px; padding:9px 18px;">履修登録人数が5名未満であるため、アンケート結果の閲覧及びフィードバックコメント入力の対象外<br>　※分析結果の一覧は確認可能です</div>
<div class="box-accent" style="margin-top:10px; font-size:19px; padding:9px 18px; margin-right:calc(var(--pip-w) - 40px);">※オムニバス等、複数教員で担当する場合、一人でも記入された場合、コメント記入済となります</div>
</div>
</div>

<!--
集計完了後、教員に結果が通知される。結果を確認し、1授業につき1つフィードバックコメントを記入する。受講者が5名未満の授業は対象外（分析結果の一覧は確認可能）。オムニバスは誰か一人が記入すれば記入済となる。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# 分析結果の閲覧方法

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">
<img src="./src/fig09-img.png" alt="分析結果一覧の画面" style="width:100%; border:1px solid #ccc;">
<img src="./src/fig12-img.png" alt="アンケート分析結果閲覧の画面" style="width:100%; border:1px solid #ccc; margin-top:8px;">
</div>
<div style="width:340px;">
<img src="./src/fig10-img.png" alt="設問別の評価レーダーチャート" style="width:100%;">
</div>
</div>

<div class="box-accent" style="margin-top:10px; margin-right:calc(var(--pip-w) + 16px);">
<b>より詳しく、分析されたい先生へ</b>　<b>「回答一覧 CSV 出力」</b>より、各設問(自由記述含む)について、学生を特定できない形で個票データを出力できます。
</div>

<!--
分析結果は一覧から閲覧できる。設問別の評価がレーダーチャートで可視化される。より詳しく分析したい場合は「回答一覧CSV出力」で、学生を特定できない形の個票データを出力できる。
-->

---

<div class="page-title">補足① イーキュースの使い方 (教員向け)</div>

# システムの詳細なマニュアル

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="width:430px;">
<img src="./src/fig15-img.png" alt="学生ポータルのリンク一覧" style="width:100%; border:1px solid #ccc;">
<div style="font-size:22px; font-weight:800; color:var(--accent-dark); margin-top:8px;">学生ポータル</div>
</div>
<div style="flex:1;">
<img src="./src/fig13-img.png" alt="マニュアルへのリンク一覧（学生・教員・職員向け）" style="width:100%;">
</div>
</div>

<div class="box-accent" style="margin-top:10px; text-align:center; margin-right:calc(var(--pip-w) + 16px);">https://portal.gs.chiba-u.jp/ceval</div>

<!--
詳細なマニュアルは学生ポータルから確認できる。学生向け・教員向け・職員向けに、それぞれ操作マニュアルやシステム導入の解説が用意されている。
-->

---

<div class="page-title">補足② 科目レベルの内部質保証</div>

# <span style="font-size:38px;">大学の教育の質をどう、保証するか</span>

<div class="subhead" style="font-size:21px; margin:2px 0 6px;">● 設置認可制度（学校教育法第4条）　● <b>認証評価制度</b>（学校教育法第109条第2項）<span class="box-info" style="padding:3px 12px; font-size:18px;">◀設置時 (大学<b>設置</b>基準)　◀恒常的 (eg. 大学<b>評価</b>基準)</span></div>

<img src="./src/fig09-crop-qa.png" alt="内部質保証・外部質保証の関係図" style="display:block; width:820px; margin:2px auto 0;">

<div class="box-accent" style="margin-top:8px; font-size:18px; padding:9px 18px; margin-right:calc(var(--pip-w) - 40px);">
「内部質保証」とは、大学が自律的な組織として、その使命や目的を実現するために、自らが行う教育及び研究（中略）の状況について継続的に点検・評価し、質の保証を行うとともに、絶えず改善・向上に取り組むことを指す。<span style="font-size:16px;">(「教育の内部質保証に関するガイドライン」NIAD、2017)</span>
</div>

<!--
大学の質は、設置時の「設置認可制度」と、恒常的な「認証評価制度」で保証される。大学は自ら点検・評価・改善を行う「内部質保証」と、第三者評価という「外部質保証」を組み合わせて質を保つ。機関別認証評価は7年に1回。
-->

---

<div class="page-title">補足② 科目レベルの内部質保証</div>

# <span style="font-size:38px;">教学マネジメント上、どのような位置づけか</span>

<div style="display:flex; gap:16px; align-items:flex-start; margin-top:2px;">
<div style="flex:1;">

<div class="box-accent" style="font-size:19px; padding:7px 16px;"><b>教学マネジメント</b>：大学がその教育目的を達成するために行う管理運営<br>▶<b>大学の内部質保証の確立にも密接に関わる</b>重要な営み　<b>学修者本位の教育</b>の実現へ</div>

<div class="box-info" style="margin-top:6px; font-size:16px; padding:6px 16px; line-height:1.4;">
・DP、CP、AdPに基づく体系的で組織的な大学教育を展開し、その成果を学位を与える課程共通の考え方や尺度に則って、点検・評価を行うことで、不断の改善に取り組むこと<br>
・学生の学修成果に関する情報や大学全体の教育成果に関する情報を的確に把握・測定し、教育活動の見直し等に適切に活用すること
</div>

<div class="lead-note" style="margin-top:5px; font-size:18px;">以下の2点が必要かつ、<b>PＤＣＡサイクルを確立する</b>ことが求められる。</div>

</div>
<div style="width:170px; text-align:center; position:relative; flex-shrink:0;">
<img src="./src/fig16-img.png" alt="PDCAサイクルの矢印" style="width:128px;">
<div style="position:absolute; top:34px; left:0; right:0; font-weight:800; color:var(--accent-dark); font-size:17px; line-height:1.3;">より良くを<br>目指す、<br>PDCA</div>
</div>
</div>

<div class="box-warn" style="margin-top:5px; font-size:16px; padding:6px 16px; line-height:1.4; margin-right:calc(var(--pip-w) - 40px);">
授業評価アンケートは、<b>3回</b>出現する (かなり、重要視されている)　Ⅲ 学修成果・教育成果の把握・可視化／Ⅳ 教学マネジメントを支える基盤（ＦＤ・ＳＤの高度化、教学ＩＲ体制の確立）　▶個々の<b>授業改善の基礎資料</b>として、<b>FDの授業事例把握</b>の資料として
</div>

<div class="cite" style="margin-top:3px;">「教学マネジメント指針」 中央教育審議会大学分科会 (2020)</div>

<!--
教学マネジメントは、教育目的の達成のための管理運営であり、内部質保証の確立に密接に関わる。「教学マネジメント指針」では授業評価アンケートが3回出現し、学修成果の把握や授業改善の基礎資料として重視されている。
-->

---

<div class="page-title">補足② 科目レベルの内部質保証</div>

# <span style="font-size:28px;">科目レベルの内部質保証・教学マネジメントをどう、実現するか</span>

<div class="box-accent" style="font-size:20px; padding:7px 18px; margin-top:2px;"><b>授業評価アンケート</b>は、科目レベルの質保証の重要な手段<br>　個々の<b>授業改善の指針</b>として、授業への満足度や学びの状況の把握の資料として</div>

<div class="goal-box" style="font-size:20px; margin-top:8px; padding:8px 22px;">大学評価基準２－２ 【<b>重点評価項目】内部質保証のための手順が明確に規定されていること</b></div>

<img src="./src/fig18-img.png" alt="大学評価基準2-2-4 分析の手順" style="display:block; width:640px; margin:6px auto 0; border:1px solid #ccc;">

<div class="cite" style="margin-top:6px; margin-right:calc(var(--pip-w) - 40px);">大学機関別認証評価自己評価実施要項（NIAD、令和6年6月版）　https://www.niad.ac.jp/storage/006/202405/no6_1_1_jikohyoukajissiyoukouR7.pdf</div>

<!--
授業評価アンケートは科目レベルの質保証の重要な手段。大学評価基準2-2の重点評価項目「内部質保証のための手順が明確に規定されていること」では、関係者から意見を聴取する仕組みの一つとして、学生からの意見聴取＝授業評価アンケートも含まれる。
-->

---

<div class="page-title">補足② 科目レベルの内部質保証</div>

# <span style="font-size:34px;">授業評価アンケート活用の国内グッドプラクティス</span>

<div style="display:flex; gap:14px; align-items:flex-start; margin-top:2px;">
<img src="./src/fig19-img.png" alt="上智大学ロゴ" style="width:84px; margin-top:2px;">
<div style="flex:1;">
<div class="box-info" style="font-size:17px; padding:5px 14px;"><b>インタビュー記事</b>：学生が思う「いい授業」を知り、教育を変える／分析結果例：2024年春学期大学授業アンケート集計・分析報告</div>
<div style="font-size:17px; line-height:1.38; margin-top:4px;">例えば、学生の授業推奨度に強く影響するのは、<b>「説明のわかりやすさ」に加え、「知的に刺激され、深く勉強したくなる」授業である</b>という事実。楽な授業が評価されるだろうとの教職員側の予想はいい意味で裏切られ、上智生は歯ごたえのある授業を求めています。</div>
</div>
</div>

<div style="display:flex; gap:14px; align-items:flex-start; margin-top:5px;">
<div style="width:84px; text-align:center; font-size:17px; font-weight:800; color:#7a1020; line-height:1.3;">北海道<br>大学</div>
<div style="flex:1;">
<div class="box-accent" style="font-size:16px; padding:5px 14px;"><b>令和5年度全学教育科目 学生による授業アンケート報告書</b>　▶ 自由記述の回答データについて、計量テキスト分析を実施、以下の提言を導く</div>
<div class="box-info" style="margin-top:4px; font-size:15px; padding:5px 14px; line-height:1.38; margin-right:calc(var(--pip-w) - 40px);">授業の情報量と課題量は学生が受け止め切れる程度にする。予習・復習のための学習リソースを提供する。レクチャーだけでなく、グループワークなど能動的でインタラクティブな活動を取り入れる。一方、フリーライダーの防止や十分な準備時間の折込みなど工夫が必要。学生の学習意欲を維持するための形成的評価の実施。</div>
</div>
</div>

<div class="cite" style="margin-top:2px;">分析対象：2275 科目、回答率：50.0%　https://www.fd-sophia.jp/activity/survey/pdf/report_2024_01.pdf</div>

<!--
国内のグッドプラクティス。上智大学のインタビューでは、学生が求めるのは楽な授業ではなく「知的に刺激される歯ごたえのある授業」だと判明。北海道大学は自由記述を計量テキスト分析し、情報量・課題量の調整やアクティブな活動の導入などの提言を導いている。
-->

---

<!-- _class: message -->

<div class="page-title">補足② 科目レベルの内部質保証</div>

<div class="box-accent" style="font-size:22px; max-width:980px; margin:0 auto;">
結果を教育に還元することにより、<b>学生には、アンケートに回答して良かった、大学づくりに貢献した</b>、と思ってもらいたい。アンケートの調査期間中、回答を呼びかけるポスターに配したのは、「WE MAKE SOPHIA」のキャッチフレーズです。アンケートを通して、<b>よりよい大学を一緒につくろうとのメッセージを込めました。</b>
</div>

<div class="lead-note" style="text-align:center; margin-top:18px; font-size:26px;">トレンド：<span style="color:var(--accent);">「総括的評価」ではなく、フィードバックへの転換</span></div>

<div class="goal-box" style="text-align:center; font-size:30px; max-width:980px; margin:14px auto 0; border-color:var(--accent);">
アンケートの役割：<b>学生のフィードバックから、良い大学を一緒に作る</b>
</div>

<div class="box-warn" style="text-align:center; font-size:24px; max-width:980px; margin:16px auto 0;">
<b>授業評価アンケートの活用や促進は、大学の制度論や高等教育政策以上に、大学での学びをより良くする風土の醸成の話なのかも、しれません。</b>
</div>

<div class="cite" style="text-align:center;">インタビュー記事：学生が思う「いい授業」を知り、教育を変える (上智大学)　https://www.sophia.ac.jp/jpn/article/feature/endeavor/endeavor-0019/</div>

<!--
最後に。アンケートのトレンドは「総括的評価」からフィードバックへの転換。結果を教育に還元することで、学生に「回答して良かった、大学づくりに貢献した」と思ってもらう。授業評価アンケートの活用は、制度論以上に、大学での学びをより良くする風土の醸成の話なのかもしれません。
-->
