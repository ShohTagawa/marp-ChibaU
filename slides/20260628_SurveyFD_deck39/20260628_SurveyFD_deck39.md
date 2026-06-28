---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">授業評価アンケート</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy（濃紺）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 24%; }
  section .page-title { left: 21%; width: 36%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* 密度の高い表・図向けの微調整 */
  .tbl { border-collapse: collapse; font-size: 20px; line-height: 1.35; }
  .tbl th, .tbl td { border: 1.5px solid #c4ccda; padding: 5px 10px; text-align: center; }
  .tbl th { background: var(--accent); color: #fff; font-weight: 800; }
  .tbl .rh { background: var(--accent-soft); color: var(--accent-dark); font-weight: 800; white-space: nowrap; }
  .tbl .lv { background: #eef1f7; color: #555; font-weight: 800; }
  .minilabel { font-size: 22px; font-weight: 800; color: var(--accent-dark); }
  .ph { color: var(--accent); font-weight: 800; }
  .okng-ok { color: #1F8A4C; font-weight: 800; }
  .okng-ng { color: #C0182B; font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">補足資料：授業設計・評価の考え方</div>
<div class="title-big">生成AI時代の教え方</div>
</div>

<div class="goal-box" style="max-width:760px; margin:8px auto 0;"><b>説明する内容：</b><span class="ind">到達目標の設定と評価の考え方</span></div>

<div style="text-align:center; margin-top:18px; font-size:26px; font-weight:700; color:var(--accent-dark);">千葉大学 高等教育センター 助教<br><span style="font-size:30px;">田川　翔</span></div>

<!--
(00:45) 00:00 -00:45 / 皆様、こんにちは。 / 高等教育センター 助教の田川と申します。 / 千葉大学全学FD、授業評価アンケートの活用に向けて、の二本目の動画となります。 / この動画では、効果的なアンケートの実施・活用方法を説明します。 / この動画の目標は、アンケートの効果的な実施方法がわかる、各項目を授業改善に活用できる、という点です。
-->

---

<div class="page-title">学修成果とは</div>

# 学生の<span style="color:var(--accent-dark)">学修成果</span>の評価

<div class="box-accent" style="margin-top:6px; font-size:21px; padding:10px 22px;"><b>方向性：学修者本位の教育</b>　学修者が何を学び、身につけることが出来るのかを明確にし、学修の成果を学修者が実感できる教育</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st" style="font-size:23px;"><b>直接的要素</b>　<b>個々の成績</b>　目標に準拠した到達度を示すもの</div>
<div class="st" style="font-size:23px;"><b>間接的要素</b>　<b>指標</b>　狙いがきちんと達成されているかを把握するもの<br>→ <b>卒業後の調査など、改善に活きる多角的な情報</b>が含まれる</div>
</div>

<div class="box-warn" style="margin-top:12px; font-size:21px; padding:10px 22px; margin-right:calc(var(--pip-w) + 40px);">期待される学習成果が体系的な教育課程を通して達成され、はじめて「学修成果」となる。<b>学習成果が「学修成果」になっているかを確認するのがアセスメントである</b>。→ <b>適切に目標が定められた上で、公正かつ妥当、客観的で厳格な必要がある</b></div>

<div class="cite">大学基準協会 (2018) <i>学習成果ハンドブック</i>／西岡・石井・田中 (2015)　教育評価：教育が上手くいっているかを把握し、捉えた実態を踏まえ、<b>改善する営み</b>。アセスメントの結果に基づき評価、未達成の場合には改善に取り組む</div>

<!-- 学修成果とは何か。直接的要素（成績）と間接的要素（指標・卒業後調査）。学習成果が学修成果になっているかを確認するのがアセスメント。 -->

---

<div class="page-title">評価対象としての学習成果</div>

# 評価対象としての<span style="color:var(--accent-dark)">学習成果</span>

<div class="box-accent" style="margin-top:6px;"><b>目標</b>と<b>評価</b>は、<b>対応する</b></div>

<div style="display:flex; gap:18px; margin-top:14px;">
<div class="stepbox" style="flex:1; margin:0;">
<div class="st"><b>目標設定</b>　教員が設計で意図する目標<br>授業で出来るようになって欲しいこと<br><span class="ph">intended learning outcomes</span></div>
</div>
<div class="stepbox" style="flex:1; margin:0;">
<div class="st"><b>評価対象</b>　実際に学生が修得した結果<br><span class="ph">achieved learning outcomes</span></div>
</div>
</div>

<div class="box-info" style="margin-top:14px; margin-right:calc(var(--pip-w) + 40px);">学習期間終了時に、学習者が知り、理解し、行い、実演できることを期待される内容を言明したもの。<br>学習成果の評価は、学生の知識や能力の表出にもとづく<b>直接評価</b>を中心とする</div>

<div class="cite"><b>学習成果（learning outcomes）</b>　参考資料 - 学習成果とその可視化 松下佳代先生 (リンク)／学士課程教育の構築に向けて (リンク) 中教審 2008年</div>

<!-- 目標と評価は対応する。intended（意図した目標）と achieved（実際の結果）。直接評価を中心とする。 -->

---

<div class="page-title">逆向き設計</div>

# 逆向き設計<span style="font-size:32px;">(backward design)</span><span class="tag tag-design">設計</span>

<div class="stepbox" style="margin-top:14px;">
<div class="st">① 求められている結果を明確にする <b>（目的・目標）</b></div>
<div class="st">② 承認できる証拠を決定する <b>（評価方法）</b></div>
<div class="st">③ 学習経験と指導を計画する <b>（内容）</b></div>
</div>

<div class="lead-note" style="color:#555;">(この順番 or 三位一体)</div>

<div class="ex-head">例：　(目標)<b>プレゼンテーションを効果的に実施出来る</b></div>

<div style="display:flex; gap:18px;">
<div class="box-warn" style="flex:1;"><span class="okng-ng">NG</span>　(内容) 講義のみで演習なし<br>(評価) テストで要点を確認するだけで実技なし</div>
<div class="box-accent" style="flex:1;"><span class="okng-ok">OK</span>　(内容) 学生が実際に発表準備<br>(評価) 発表した内容をもとに、フィードバック/採点</div>
</div>

<div class="box-info" style="margin-top:12px; margin-right:calc(var(--pip-w) + 40px);"><b>設定する目標</b>によって、<b>実施する評価</b>、<b>行うべき内容</b>は変わる。<b>目標・評価・内容を相互に調整</b> = コース全体： シラバス / クラス1回: クラスデザイン</div>

<div class="cite">Wiggins &amp; McTighe (1998); 西岡 (2005)</div>

<!-- 逆向き設計：①結果（目的・目標）→②証拠（評価方法）→③計画（内容）。目標によって評価・内容が変わる。 -->

---

<div class="page-title">学習目標分類の例</div>

# <span style="color:var(--accent-dark)">学習目標分類</span>の例

<div class="box-accent" style="margin-top:4px;">教育心理学者Bloomらにより、<b>8年かけて<sup>#</sup>作られた教育における目標の分類</b></div>

<div style="display:flex; gap:20px; margin-top:10px;">
<div>
<table class="tbl">
<tr><th></th><th>知識や<br>思考</th><th>技能や<br>スキル</th><th>態度</th></tr>
<tr><td class="lv">高次</td><td>創造</td><td></td><td></td></tr>
<tr><td class="lv"></td><td>評価</td><td>自然化</td><td>個性化</td></tr>
<tr><td class="lv"></td><td>分析</td><td>分節化</td><td>組織化</td></tr>
<tr><td class="lv"></td><td>応用</td><td>精密化</td><td>価値づけ</td></tr>
<tr><td class="lv"></td><td>理解</td><td>巧妙化</td><td>反応</td></tr>
<tr><td class="lv">低次</td><td>記憶</td><td>模倣</td><td>受け入れ</td></tr>
</table>
</div>
<div style="flex:1;">

<div class="minilabel">授業設計に活用する方法の例</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:6px;">
<div class="box-info" style="font-size:18px; padding:7px 12px;"><b>目標での活用方法</b>　<b>学部初年の教養の授業</b>だから、まずは理解！</div>
<div class="box-info" style="font-size:18px; padding:7px 12px;"><b>統計手法の比較の授業</b>　オンライン授業なので態度の評価は無理／<b>起業を体験する授業</b>　がっつり創造まで必要</div>
<div class="box-warn" style="font-size:18px; padding:7px 12px;"><b>評価での活用方法</b>　評価の種類によって評価できるものは変わる。理解と記憶の確認が主なので、<b>筆記試験</b>！</div>
<div class="box-warn" style="font-size:18px; padding:7px 12px;"><b>複数手法を構造化する論述試験</b>と<b>社会課題に応用するレポート</b>かな／<b>実演</b>や<b>企画書</b>の提出、<b>面接</b>等も必要かも</div>
<div class="box-accent" style="font-size:18px; padding:7px 12px;"><b>内容・方法での活用方法</b>　単なる座学の講義は到達出来る範囲が限られてしまう！／オンデマンド型の講義と問題演習でOK！</div>
<div class="box-accent" style="font-size:18px; padding:7px 12px;">現実のデータに基づく<b>演習</b>や<b>グループワーク</b>はよさそう／<b>アクティブラーニング</b>や<b>外部講師</b>も考える</div>
</div>
</div>
</div>

<div class="cite"><sup>#</sup> 1956年に認知的領域、1964年に情意的領域。精神運動領域は1967年の別のグループの仕事。認知的領域はAndersonらの改訂版を使用。　目的/学習者の状況に合わせ、適切な目標を決める。<b>実演</b>や<b>企画書</b>の提出、<b>面接</b>等も必要かも。オンデマンド型の講義と問題演習でOK！　<b>アクティブラーニング</b>や<b>外部講師</b>も考える</div>

<!-- Bloomらの学習目標分類（タキソノミー）。知識/技能/態度の3領域×高次〜低次。目標・評価・内容の各場面で活用する。 -->

---

<div class="page-title">学習目標分類から考えるAIの影響</div>

# 学習目標分類から考える<span style="color:var(--accent-dark)">AIの影響</span>

<div style="display:flex; gap:20px; margin-top:8px;">
<div style="flex:1.3;">
<table class="tbl" style="width:100%; font-size:19px;">
<tr><th></th><th>認知的領域 (知識や思考)</th><th>学びへの生成AIの影響</th></tr>
<tr><td class="lv">高次</td><td>創造 (学習を応用し、新しい価値を作れる)</td><td>人の創造性こそが大切</td></tr>
<tr><td class="lv"></td><td>評価 (事物・判断等を比較し評価出来る)</td><td>評価軸/価値/判断は人が設定する</td></tr>
<tr><td class="lv"></td><td>分析 (要素に分け、関係性を指摘できる)</td><td>かなりAIでできる(例：要約・構造化・コーディング)</td></tr>
<tr><td class="lv"></td><td>応用 (他の場面や状況に使用できる)</td><td>単なる問題では、 AIが解いてしまう…</td></tr>
<tr><td class="lv"></td><td>理解 (学習内容を説明出来る)</td><td>説明/例示で支援可能 だが学修者の理解必須</td></tr>
<tr><td class="lv">低次</td><td>記憶 (事実や概念を暗記している)</td><td>支援可能だが、 学修者の記憶必須</td></tr>
</table>
</div>
<div style="flex:1;">
<div class="box-accent"><b>授業の課題やワークの一部として、AIを学びの設計に取り入れる/対策する/教員支援を行う</b></div>
<div class="box-warn" style="margin-top:10px; font-size:19px; margin-right:calc(var(--pip-w) - 60px);">※近年では、下から個別・段階的に行うのではなく、複数の次元の要素を組み合わせる必要性が叫ばれている。<br>※但し、低次(特に記憶・理解・応用の段階)を蔑ろにして、高次の学修目標の達成は難しいと想定される。</div>
</div>
</div>

<div class="cite">左は栗田&amp;中村 (2023)を元に作成 ／ 原著 Bloom (1956/1964)、改訂版(2001)を記載</div>

<!-- Bloom分類の各段階で生成AIがどう影響するか。低次は支援可能だが学修者の記憶・理解は必須、高次は人の創造性・判断が大切。 -->

---

<div class="page-title">(参考) 学習目標分類の例</div>

# (参考)　他の例：<span style="color:var(--accent-dark)">Finkの意義ある学習分類</span>

<div class="box-accent" style="margin-top:6px;"><b>人間性の醸成</b>や、<b>価値観</b>の見出し、<b>学び方自体の学習</b>なども目標に加える立場</div>

<div style="display:flex; align-items:center; gap:30px; margin-top:10px;">
<img src="./src/fig02-img.png" alt="Finkの意義ある学習の6分類" style="height:380px;">
<div style="display:flex; flex-direction:column; gap:9px;">
<span class="tag tag-soft">基礎知識</span>
<span class="tag tag-soft">応用</span>
<span class="tag tag-soft">統合</span>
<span class="tag tag-soft">人間性</span>
<span class="tag tag-soft">関心</span>
<span class="tag tag-soft">学び方の学習</span>
</div>
</div>

<div class="cite">L.Dee Fink. (2003). <i>A Self-Directed Guide to Designing Courses for Significant Learning</i>. Jossey-Bass.</div>

<!-- Finkの意義ある学習の6分類。基礎知識・応用・統合・人間性・関心・学び方の学習。人間性や価値観・学び方も目標に加える立場。 -->

---

<div class="page-title">(参考) 科目レベルの到達目標の書き方</div>

# (参考) 科目レベルの<span style="color:var(--accent-dark)">到達目標の書き方</span><span class="tag tag-soft">各論(目標)</span>

<div class="box-accent" style="margin-top:4px;">学習者の「<b>主体的な学び</b>」の支援になる目標設定のコツ</div>

<div style="display:flex; gap:16px; margin-top:12px;">
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0; padding:8px 18px;">
<div class="st" style="font-size:22px;">① 主語は<b>学習者</b>とすること</div>
<div style="font-size:19px; margin-top:4px;"><span class="okng-ok">OK</span> (学生は、) 〇〇できる　／　<span class="okng-ng">NG</span> (教員は、) 〇〇を教える</div>
</div>
<div class="stepbox" style="margin:6px 0; padding:8px 18px;">
<div class="st" style="font-size:22px;">② 到達目標に応じて、<b>目標分類</b>を参照すること</div>
</div>
<div class="stepbox" style="margin:6px 0; padding:8px 18px;">
<div class="st" style="font-size:22px;">③ <b>測定/評価可能な動詞</b>を使用すること</div>
<div style="font-size:19px; margin-top:4px;"><span class="okng-ok">OK</span> (学生は、) 〇〇できる　／　<span class="okng-ng">NG</span> (学生は、) 〇〇を学ぶ</div>
</div>
<div class="stepbox" style="margin:6px 0; padding:8px 18px;">
<div class="st" style="font-size:22px;">④ 一つの文章に一つの目標</div>
</div>
</div>
<div style="flex:1;">
<div class="box-warn" style="font-size:21px;">⑤ 学生にとって現実的かつ授業の努力量で届く距離　　教員にとっても現実的な評価・フィードバック量</div>
<div class="box-info" style="margin-top:12px; font-size:21px; margin-right:calc(var(--pip-w) - 70px);">cf.　<b>目的</b> = <b>授業の存在価値</b> (なぜその授業を学生は学ぶ必要があるのか？)<br>　<b>目標</b> = <b>学習成果</b> (その授業で何が出来るようになるのか)</div>
</div>
</div>

<div class="cite">参考文献：<b>目的・目標記載のための動詞例 (リンク)</b> 佐藤 (2010)、中島(2016)、栗田(2023)</div>

<!-- 到達目標の書き方4＋1ポイント。主語は学習者、目標分類を参照、測定可能な動詞、一文一目標、現実的な距離。 -->

---

<div class="page-title">(参考) 評価の方法と測定可能な範囲</div>

# (参考) 評価の方法と<span style="color:var(--accent-dark)">測定可能な範囲</span><span class="tag tag-soft">各論(評価)</span>

<div class="box-accent" style="margin-top:4px;">試験以外にも、様々な評価方法があり、得意な範囲が変わる</div>

<div style="display:flex; gap:18px; margin-top:8px; align-items:flex-start;">
<div style="flex:1.1;">
<div class="minilabel" style="text-align:center;">様々な評価の種類</div>
<svg viewBox="0 0 560 430" style="width:100%; height:330px;">
<defs>
<linearGradient id="arr" x1="0" y1="1" x2="1" y2="0">
<stop offset="0" stop-color="#f3c0c0"/><stop offset="1" stop-color="#c01818"/>
</linearGradient>
<marker id="ah" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#7a7f86"/></marker>
</defs>
<line x1="280" y1="40" x2="280" y2="400" stroke="#9aa0a8" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>
<line x1="40" y1="225" x2="540" y2="225" stroke="#9aa0a8" stroke-width="3" marker-start="url(#ah)" marker-end="url(#ah)"/>
<path d="M250,300 L420,120" stroke="url(#arr)" stroke-width="26" stroke-linecap="round" marker-end="url(#ah)"/>
<text x="280" y="28" text-anchor="middle" font-size="20" font-weight="800">複雑</text>
<text x="280" y="424" text-anchor="middle" font-size="20" font-weight="800">単純</text>
<text x="34" y="252" text-anchor="end" font-size="20" font-weight="800">筆記</text>
<text x="548" y="252" text-anchor="start" font-size="20" font-weight="800">実演</text>
<text x="438" y="78" font-size="18" font-weight="800" fill="#C0182B">高次の目標を測りやすい</text>
<rect x="120" y="70" width="320" height="58" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="280" y="93" text-anchor="middle" font-size="20" font-weight="800">パフォーマンス課題</text>
<text x="280" y="118" text-anchor="middle" font-size="16">(小論文、作品制作、発表等)</text>
<rect x="120" y="150" width="130" height="60" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="185" y="175" text-anchor="middle" font-size="17">論述式問題</text>
<text x="185" y="197" text-anchor="middle" font-size="17">レポート</text>
<rect x="320" y="150" width="150" height="60" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="395" y="175" text-anchor="middle" font-size="17">実技テスト</text>
<text x="395" y="197" text-anchor="middle" font-size="17">面接/口頭試問</text>
<rect x="135" y="250" width="120" height="62" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="195" y="275" text-anchor="middle" font-size="17">記述式</text>
<text x="195" y="297" text-anchor="middle" font-size="17">問題</text>
<rect x="370" y="250" width="110" height="62" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="425" y="275" text-anchor="middle" font-size="17">観察</text>
<text x="425" y="297" text-anchor="middle" font-size="17">試験</text>
<rect x="135" y="330" width="120" height="62" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="195" y="355" text-anchor="middle" font-size="17">選択式</text>
<text x="195" y="377" text-anchor="middle" font-size="17">問題</text>
<rect x="300" y="330" width="110" height="62" fill="#fff" stroke="#E08A2B" stroke-width="2"/>
<text x="355" y="355" text-anchor="middle" font-size="17">心理</text>
<text x="355" y="377" text-anchor="middle" font-size="17">テスト</text>
</svg>
</div>
<div style="flex:1;">
<div class="minilabel" style="text-align:center;">適用可能な範囲</div>
<table class="tbl" style="margin:6px auto 0; font-size:19px;">
<tr><th></th><th>知識</th><th>技能</th><th>態度</th></tr>
<tr><td class="rh">客観試験</td><td>◯(低次)</td><td></td><td></td></tr>
<tr><td class="rh">論述試験</td><td>◯(高次)</td><td></td><td></td></tr>
<tr><td class="rh">レポート</td><td>◯(高次)</td><td>◯</td><td>◯</td></tr>
<tr><td class="rh">発表</td><td>◯(高次)</td><td>◯</td><td>◯</td></tr>
<tr><td class="rh">口述/面接</td><td>◯</td><td></td><td>◯</td></tr>
<tr><td class="rh">観察評価</td><td>◯</td><td>◯</td><td>◯</td></tr>
<tr><td class="rh">実演・制作</td><td></td><td>◯</td><td>◯</td></tr>
<tr><td class="rh">心理テスト</td><td></td><td></td><td>◯</td></tr>
</table>
</div>
</div>

<div class="cite">田中（2010）<i>『よくわかる教育評価』</i>を改変／中島 (2016) p.36を参考</div>

<!-- 評価方法のマップ。複雑↔単純・筆記↔実演の2軸。パフォーマンス課題ほど高次の目標を測りやすい。各手法が知識/技能/態度のどこを測れるか。 -->

---

<div class="page-title">(参考) 評価の方法と測定可能な範囲</div>

# (参考) ルーブリック<span class="tag tag-soft">各論(評価)</span>

<div class="box-accent" style="margin-top:4px;">ルーブリックは便利かつ高次まで使える評価の道具</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st" style="font-size:21px;"><b>✔  採点道具の一つで、課題を構成要素に分け、　   要素ごとに評価基準を満たすレベルを説明した表</b></div>
<div class="st" style="font-size:21px;">✔  パフォーマンス課題・レポート・実技等の評価の可視化</div>
<div class="st" style="font-size:21px;"><b>✔  フィードバックの高度化と効率化(時短)を両立</b></div>
</div>

<div class="ex-head" style="margin-top:10px;"><b>例： 「課題内容：6分模擬授業」</b>を評価するためのルーブリック</div>

<div style="display:flex; align-items:center; gap:10px;">
<div style="display:flex; flex-direction:column; gap:42px; font-size:18px; font-weight:800; color:var(--accent-dark); text-align:center; padding-top:30px;">
<div>評価<br>尺度</div>
<div>評価<br>基準</div>
</div>
<table class="tbl" style="font-size:19px;">
<tr><th>評価観点</th><th>素晴らしい(2)</th><th>合格(1)</th><th>不十分(0)</th></tr>
<tr><td class="rh">分量</td><td></td><td>6分間で丁度</td><td>過剰か少ない</td></tr>
<tr><td class="rh">目標</td><td>明確かつ内容が一致していた</td><td>明確さか内容の何れかに改善点</td><td>明確さ・内容の何れも不十分</td></tr>
<tr><td class="rh">レベル設定</td><td>手を伸ばせば届くレベルだった</td><td>一部高度・容易な箇所があった</td><td>極端に高度・容易であった</td></tr>
</table>
</div>

<div class="cite">スティーブンス＆レビ (2014)</div>

<!-- ルーブリック：課題を構成要素に分け、要素ごとに評価基準を満たすレベルを表で説明。フィードバックの高度化と効率化を両立。例＝6分模擬授業。 -->

---

<div class="page-title">(参考) 授業設計の様々な方法論</div>

# (参考) 授業設計の<span style="color:var(--accent-dark)">様々な方法論</span><span class="tag tag-soft">各論(方法)</span>

<div class="box-accent" style="margin-top:2px;">講義以外にも方法論や理論があり、情報伝達のモードがある</div>

<div style="display:flex; gap:16px; margin-top:8px;">
<div style="flex:1;">
<div class="minilabel">設計における要素の例</div>
<table class="tbl" style="width:100%; font-size:18px; margin-top:4px;">
<tr><td class="rh">講義説明</td><td style="text-align:left;">学習項目を効果的に伝達し、理解に役立つ</td></tr>
<tr><td class="rh">演習問題</td><td style="text-align:left;">学習項目を体験し理解度も確かめられる</td></tr>
<tr><td class="rh">談話</td><td style="text-align:left;">広がりのある学びや協力的な学習環境形成</td></tr>
<tr><td class="rh">予習映像</td><td style="text-align:left;">事前知識を共通化し、反転授業などもできる</td></tr>
<tr><td class="rh">事前問題</td><td style="text-align:left;">説明以前に価値付けされ、授業への関心を高める</td></tr>
<tr><td class="rh">ゆとり</td><td style="text-align:left;">臨機応変な授業運営で学習者の興味に応える</td></tr>
<tr><td class="rh">ワーク</td><td style="text-align:left;">学習者が主体的に学ぶチャンスが増える</td></tr>
<tr><td class="rh">課題</td><td style="text-align:left;">学んだことを自ら使いこなすチャンスになる</td></tr>
</table>
</div>
<div style="flex:1;">
<div class="box-info" style="font-size:17px;"><b>課題中心型の授業設計</b>（ブランチ・メリル 2013）<br>①新しい全体的なタスクを見せる　②タスクに必要な構成要素を提示する　③タスクに関する構成要素を演示する　④もう一つ新しい全体タスクを見せる　⑤学修者に、既習の構成要素を新タスクに応用させる　⑥この新タスクに必要となる追加的な構成要素を提示する　⑦これらの追加的な構成要素を演示する　⑧ステップ④ - ⑦を続くステップにも繰り返す</div>
</div>
</div>

<div style="display:flex; gap:16px; margin-top:8px;">
<div class="box-warn" style="flex:1; font-size:17px;"><b>情報の伝達方法に座学講義”だけ”を選ばなくても、学生は学ぶ事ができる</b><br><span style="font-size:15px; font-weight:400;">補足：⑥の追加部分は、AIに支援させるなども可能／cf. 養老孟司さんと考える これからの時代に必要な学びとは？</span></div>
<div style="flex:1.4;">
<div class="minilabel">深いアクティブ・ラーニング</div>
<div class="box-info" style="font-size:15px; margin-top:4px; padding:8px 14px; line-height:1.4;"><b>学生にある物事を行わせ、行っている物事について考えさせる</b>こと<br>- 学生自身のこれまでの知識や経験に、学びを関連づけること<br>- 実践や具体例から、パターンや重要な原理を探すこと<br>- 論理や議論を注意深く、批判的に検討すること<br>- 他者との関わりから、自らの考えを形づくること<br>- 仮説を形成し、根拠を探し、それらを結論に関連づけること<br>- 学生自身やチームが学びながら成長していることを自覚的に理解すること<br>- 学びに積極的に関わり、自らのイシューを見定め、学びを形作れること</div>
</div>
</div>

<div class="cite">ブランチ・メリル (2013)／アクティブラーニングの有効性の例　例：Deslauriers et al. ( 2011) <i>Science</i>／松下佳代 編著 (2015) <i>ディープ･アクティブラーニング 大学授業を深化させるために</i></div>

<!-- 授業設計の要素（講義/演習/談話/予習映像/事前問題/ゆとり/ワーク/課題）。課題中心型の授業設計（メリル）。座学講義だけでなくても学生は学べる。深いアクティブ・ラーニングの7要素。 -->

---

<div class="page-title">科目レベルでの改善のサイクルを回す</div>

# <span style="color:var(--accent-dark)">ADDIEモデル</span>

<div class="box-accent" style="margin-top:4px;"><b>教育・教材設計のプロセス</b>を示したもの (ガニエ他 2007) ※但し1980sからある</div>

<div style="display:flex; gap:20px; margin-top:10px; align-items:center;">
<div>
<div class="flowrow" style="flex-direction:column; gap:8px; margin:0;">
<div class="fbox red" style="font-size:24px; padding:6px 24px;">分析 <span style="font-size:18px; color:#555;">Analysis</span></div>
<div class="farrow" style="font-size:24px;">↓</div>
<div class="fbox red" style="font-size:24px; padding:6px 24px;">設計 <span style="font-size:18px; color:#555;">Design</span></div>
<div class="farrow" style="font-size:24px;">↓</div>
<div class="fbox red" style="font-size:24px; padding:6px 24px;">開発 <span style="font-size:18px; color:#555;">Development</span></div>
<div class="farrow" style="font-size:24px;">↓</div>
<div class="fbox red" style="font-size:24px; padding:6px 24px;">実施 <span style="font-size:18px; color:#555;">Implementation</span></div>
<div class="farrow" style="font-size:24px;">↓</div>
<div class="fbox red" style="font-size:24px; padding:6px 24px;">評価 <span style="font-size:18px; color:#555;">Evaluation</span></div>
</div>
<div style="text-align:center; font-weight:800; color:var(--accent); margin-top:6px;">Close the LOOP!</div>
</div>
<div style="flex:1;">
<div class="box-warn" style="font-size:19px;">1回のループで終わるのではなく、より高次のループに入ることが重要です(<b>Close the LOOP!</b>)。この形に常に固執するのではなく場合によっては実験を行ったり(ラピッドプロトタイピング)、引き返すなどが重要です。授業で期待される学習成果も明確化します　<b>※ 他に、授業改善に特化したモデル・理論もあります</b></div>
<div class="minilabel" style="margin-top:8px;">授業改善の道具 (分析項目)</div>
<div class="box-info" style="font-size:19px; margin-top:4px; margin-right:calc(var(--pip-w) - 70px);">① 学生の受講動機・事前知識等の分析　② レポート・期末試験 (間違いの多い点)　③ <b>成績分布</b> (ダッシュボード)　④ <b>授業評価アンケート</b>　⑤ <b>シラバスチェック</b>　⑥ 科目の位置づけ・DP/CPとの関係</div>
</div>
</div>

<div class="cite">逆向き設計</div>

<!-- ADDIEモデル：分析→設計→開発→実施→評価のループ。Close the LOOP。授業改善の道具として成績分布・授業評価アンケート・シラバスチェック等。 -->

---

<div class="page-title">まとめ</div>

# まとめ

<div class="goal-box" style="margin-top:14px; font-size:30px;"><b>到達目標の設定と評価の考え方</b></div>

<div class="wrap3" style="margin-top:18px;">
<div class="ln"><span class="no">1.</span> <b>学習(修)成果</b>とは何か</div>
<div class="ln"><span class="no">2.</span> <b>目標と評価</b>の関係性　<span style="font-size:24px; color:#555;">逆向き設計 ／ 学習目標分類 ／ 様々な評価手法と目標の関係性</span></div>
<div class="ln"><span class="no">3.</span> 授業改善と<b>ADDIEモデル</b></div>
</div>

<!-- まとめ。①学修成果とは、②目標と評価の関係性（逆向き設計・学習目標分類・評価手法）、③授業改善とADDIEモデル。 -->
