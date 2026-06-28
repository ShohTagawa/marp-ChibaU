---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* スピーチバブル（Q&A） */
  .bubble { position: relative; border-radius: 16px; padding: 12px 20px; font-size: 21px; line-height: 1.5; }
  .bubble.q { background: #C9CDD2; color: #1a1a1a; }
  .bubble.a { background: #F4D7E7; color: #1a1a1a; }
  .bubble.a b { color: var(--accent-dark); }
  /* 段階ラダー（教育の次元） */
  .ladder { display: grid; grid-template-columns: 40px 1fr; gap: 6px 14px; align-items: center; }
  .ladder .arrow { grid-row: 1 / span 5; align-self: stretch; background: linear-gradient(#FBE4EA,#CC003D); width: 26px; justify-self: center; border-radius: 4px; clip-path: polygon(35% 0,65% 0,65% 78%,100% 78%,50% 100%,0 78%,35% 78%); }
  .ladder .lh { font-weight: 800; font-size: 23px; }
  .ladder .lv { font-size: 24px; }
  .ladder .lv.on { font-weight: 800; color: var(--accent-dark); }
  /* 紫ポイント枠 */
  .ptbox { border: 2.5px solid #7B3FA0; background: #F3E6F7; border-radius: 8px; padding: 12px 18px; font-size: 19.5px; line-height: 1.55; }
  .ptbox .pth { display: inline-block; border: 2px solid #7B3FA0; color: #6A2C8F; font-weight: 800; border-radius: 6px; padding: 2px 16px; margin-bottom: 8px; }
  .ptbox b { color: #1a1a1a; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">あそびの価値、深い学びの意義</div>
</div>

<div class="goal-box" style="max-width:880px; margin:8px auto 0;"><b>達成目標：</b><span class="ind">目的指向や知識偏重ではない</span><br><span class="ind">学びの価値も認識できる。</span></div>

<!--
- タイトルコール。目的指向や知識偏重ではない「学びの価値」も認識できる、が今回の達成目標。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# <span style="color:var(--accent-dark)">3つの懸念</span>から始める

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1.18;">

<div class="stepbox" style="margin:4px 0; padding:8px 22px;">
<div class="st" style="margin:2px 0; line-height:1.35;"><b>1.</b> <b>目標の設定を誤ってはいけない</b><br><span style="font-size:22px;">　→ 主体的な学びを織り込んだ目標・設計にしましょう</span></div>
</div>

<div class="stepbox" style="margin:4px 0; padding:8px 22px;">
<div class="st" style="margin:2px 0; line-height:1.35;"><b>2.</b> <b>教室の内外の多様性を活かす</b><br><span style="font-size:22px;">　→インタラクションを設計に折り込みましょう</span></div>
</div>

<div class="stepbox" style="margin:4px 0; padding:8px 22px;">
<div class="st" style="margin:2px 0; line-height:1.35;"><b>3.</b> <b>詰めすぎず、あそび(=ゆとり)を活かす</b><br><span style="font-size:22px;">　→<span class="em">協力的な学習環境を作り、対話や気付きのある場</span>にしましょう</span></div>
</div>

</div>

<div style="flex:.85;">
<img src="./src/fig01-img.png" alt="Claudeの回答" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite" style="text-align:right; margin-top:2px;">(Claudeを使って生成 2024/5/15)</div>
</div>

</div>

<div class="box-warn" style="margin-top:8px; margin-right:calc(var(--pip-w) + 24px); font-size:21px; padding:10px 22px;">N.G.　:認知的領域 (特に低次)に偏る　／　Good　:<b style="color:var(--accent-dark)">どのような学生を育てるべきかを考える</b></div>

<!--
- あそびの価値、深い学びの意義。Claudeに「達成目標を偏重した場合の懸念」を尋ねた回答から、3つの注意点を引き出す。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# <span style="color:var(--accent-dark)">効率</span>を常に追う必要はない

<div class="lead-note">同じ内容でも、学び方で、受け取り方は変わる</div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:6px;">

<div style="flex:1; text-align:center;">
<div class="fbox blue" style="font-size:24px; padding:6px 0; display:block;">計画された学び</div>
<div style="display:flex; gap:8px; justify-content:center; margin-top:8px;">
<img src="./src/fig02-img.png" alt="講義" style="height:150px;">
<img src="./src/fig06-img.png" alt="退屈" style="height:150px; align-self:center;">
</div>
<div style="font-size:22px; margin-top:6px;">理解はするけど、忘れるかも…</div>
</div>

<img src="./src/fig05-img.png" alt="！" style="height:160px; align-self:center;">

<div style="flex:1; text-align:center;">
<div class="fbox red" style="font-size:24px; padding:6px 0; display:block;">偶発的な学び</div>
<img src="./src/fig03-img.png" alt="話し合い" style="height:150px; margin-top:8px;">
<div style="font-size:22px; margin-top:6px;">気づけたことは、残るかも！</div>
</div>

</div>

<div class="box-accent" style="margin-top:10px; margin-right:calc(var(--pip-w) + 24px); font-size:22px;">計画された目標と評価に終始し、無駄を切り詰め、対話もない<br><b>そんな「あそびやゆとりのない教育」ではいけない</b>。<b>教育を一歩引いたところから捉え、深い学びに繋がる道</b>を選ぶ</div>

<div class="box-warn" style="position:absolute; top:96px; right:40px; width:300px; text-align:center; font-size:21px;"><b>偏った目標を極端に追い求めると、失うものがある</b></div>

<!--
- 同じ内容でも学び方で受け取り方は変わる。計画された学びは「理解するけど忘れるかも」、偶発的な学びは「気づけたことは残るかも」。偏った目標を極端に追うと失うものがある。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# <span style="color:var(--accent-dark)">Fink</span>の意義ある学習分類、再び<span style="font-size:24px;">　Fink (2003)</span>

<div class="box-info" style="margin:4px 0 10px; margin-right:calc(var(--pip-w) + 24px);"><b>人間性の醸成</b>や、<b>価値観</b>の見出し、<b>学び方自体の学習</b>なども目標に加える立場</div>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1;">
<img src="./src/fig07-img.png" alt="Finkの意義ある学習分類の輪" style="width:100%; max-width:420px;">
<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
<span class="tag tag-accent" style="font-size:18px;">基礎知識</span>
<span class="tag tag-accent" style="font-size:18px;">応用</span>
<span class="tag tag-accent" style="font-size:18px;">統合</span>
<span class="tag tag-accent" style="font-size:18px;">人間性</span>
<span class="tag tag-accent" style="font-size:18px;">関心</span>
<span class="tag tag-accent" style="font-size:18px;">学び方の学習</span>
</div>
</div>

<div style="flex:1;">
<div class="bubble q" style="margin-bottom:10px;">Q) 逆向き設計は使えないんですか？</div>
<div class="bubble a">A)<b>いいえ</b>。<br>原則はこの授業で習った内容と<b>同じ</b>です。<br>例えばE.F. Barkleyらの<b>学習評価ハンドブック</b>に、Finkの学習分類に基づく評価技法がのっています。</div>
</div>

</div>

<div class="cite">L.Dee Fink. (2003). <i>A Self-Directed Guide to Designing Courses for Significant Learning</i>. Jossey-Bass.</div>

<!--
- Finkの意義ある学習分類を再び。基礎知識・応用・統合・人間性・関心・学び方の学習。逆向き設計は使える（原則は同じ）。Barkleyらの学習評価ハンドブックにFink分類に基づく評価技法がある。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# 深い<span style="color:var(--accent-dark)">アクティブ・ラーニング</span>

<div class="box-accent" style="margin:4px 0 8px; margin-right:calc(var(--pip-w) + 24px); text-align:center; font-size:23px;">「<b>学生にある物事を行わせ、行っている物事について考えさせる</b>こと」</div>
<div class="cite" style="margin-top:0;">松下佳代 編著 (2015) <i>ディープ･アクティブラーニング 大学授業を深化させるために</i></div>

<div class="box-info" style="margin-top:8px;">
<div style="font-weight:800; color:#15436e; margin-bottom:4px;">学習への深いアプローチの例</div>
<div style="font-size:19px; line-height:1.5;">
- 学生自身のこれまでの知識や経験に、学びを関連づけること<br>
- 実践や具体例から、パターンや重要な原理を探すこと<br>
- 論理や議論を注意深く、批判的に検討すること<br>
- 他者との関わりから、自らの考えを形づくること<br>
- 仮説を形成し、根拠を探し、それらを結論に関連づけること<br>
- 学生自身やチームが学びながら成長していることを自覚的に理解すること<br>
- 学びに積極的に関わり、自らのイシューを見定め、学びを形作れること
</div>
</div>

<div class="box-warn" style="margin-top:8px; margin-right:calc(var(--pip-w) + 24px); font-size:21px;"><b>あそび</b>や一時的な<b>無駄</b>、<b>試行錯誤</b>も<b>織り込む</b>。<b style="color:var(--accent-dark)">一見すると無駄かもしれないが、一生無駄かは分からない</b>。知識を詰め込むだけではなく、<b style="color:var(--accent-dark)">研究や経験の共有</b>なども学びかも</div>

<div class="cite"><b>参考資料：</b>文部科学省 教育課程企画特別部会　論点整理　補足資料（5）</div>

<!--
- 深いアクティブ・ラーニング。「学生に物事を行わせ、行っていることを考えさせる」。あそび・無駄・試行錯誤も織り込む。一見無駄でも一生無駄とは限らない。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# <span style="color:var(--accent-dark)">カリキュラム論</span>や<span style="color:var(--accent-dark)">社会学</span>への発展

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:.42;">
<div class="ladder">
<div class="arrow"></div>
<div class="lh">教育の次元</div>
<div class="lv">アクティビティ</div>
<div class="lv">クラス</div>
<div class="lv">コース</div>
<div class="lv on">カリキュラム</div>
</div>
</div>

<div style="flex:1;">
<div class="ptbox">
<span class="pth">カリキュラム・デザインのポイント</span><br>
①高校までの「答えが決まっている学び」から、<b>「答えのない課題を発見する学び」への転換</b>が出来る。<br>
②<b>主体性の重要性、学びの重要性</b>に気付ける。<br>
③多様な価値観や意識をもつ<b>他者と、いかに共同して成果を上げるか</b>を体験し、社会に出る自信が持てる。<br>
④社会の現実や仕組みを理解し、<b>将来のキャリアを主体的に描ける</b>ようになる。<br>
⑤<b>課題発見能力・課題解決能力を身につけ</b>、磨く。
<div class="cite" style="margin-top:4px;">佐藤浩章ほか (2016) 『大学生の主体的学びを促すカリキュラム・デザイン』を改変</div>
</div>
</div>

</div>

<div style="display:flex; gap:18px; align-items:center; margin-top:8px;">
<span class="tag tag-soft" style="font-size:22px;">大学や教育のあり方</span>
<span style="font-size:24px; font-weight:800; color:var(--accent-dark);">→ 社会学的な視点</span>
</div>

<div class="box-info" style="margin-top:6px; margin-right:calc(var(--pip-w) + 24px); font-size:21px;">例：インターネットやAIがあれば、ほとんどの知識が学べる時代に、私達はなぜ大学に集うのか。大学の価値はなにか。<br>→古今東西、多数の本があるので、当たられると面白いかと思います。</div>

<!--
- カリキュラム論や社会学への発展。教育の次元はアクティビティ→クラス→コース→カリキュラムと上がる。カリキュラムまで上がると社会学的な視点に発展する。
-->

---

<div class="page-title">あそびの価値、深い学びの意義</div>

# <span style="color:var(--accent-dark)">知識偏重</span>ではないカリキュラム

<div class="subhead"><b>次の人材育成を目標とする教育</b>をどう実現するか</div>

<div style="display:flex; gap:18px;">
<div class="box-accent" style="flex:1; font-size:22px;"><b>患者さんを尊重した医療を提供できる人材</b>を育成する<br><span style="font-size:18px; color:#666;">ー千葉大学 総合医療教育研修センターのミッションより</span></div>
<div class="box-accent" style="flex:1; font-size:22px;"><b>積極性と主体性を備えた課題解決人材</b>を育成する<br><span style="font-size:18px; color:#666;">ー千葉大学千葉大学次世代人材育成計画より</span></div>
</div>

<div style="margin:10px 0 6px; font-size:23px; line-height:1.6;">
僕らは、そのような人材の育成を<b style="color:var(--accent-dark)">本気</b>で目指しています。皆さんも、着任した機関で目指す教育の形があるでしょう<br>
専門的知識の伝授は、もちろん大切です。しかし、それだけでは、<b style="color:var(--accent-dark)">人を育てることは出来ません</b>
</div>

<div class="box-warn" style="margin-top:6px; margin-right:calc(var(--pip-w) + 24px);"><b style="color:var(--accent-dark)">知識・スキルに偏重した「専門性の伝授」だけに終始せず、学修者の主体的な学びへ転換しましょう</b></div>

<!--
- 知識偏重ではないカリキュラム。千葉大の人材育成目標を例に、専門的知識の伝授だけでは人は育てられない。主体的な学びへ転換しよう。
-->

---

<!-- _class: refs -->

<div class="page-title">あそびの価値、深い学びの意義</div>

# 参考文献

<div style="font-size:21px; line-height:1.7;">

L.Dee Fink. (2003). <i>A Self-Directed Guide to Designing Courses for Significant Learning</i>. Jossey-Bass.
<span class="cite" style="display:block; margin:0 0 8px;"><a href="https://www.bu.edu/sph/files/2014/03/www.deefinkandassociates.com_GuidetoCourseDesignAug05.pdf">https://www.bu.edu/sph/files/2014/03/www.deefinkandassociates.com_GuidetoCourseDesignAug05.pdf</a></span>

文部科学省 教育課程企画特別部会 (2015) 論点整理 > 補足資料（5）アクティブ・ラーニングに関する議論.
<span class="cite" style="display:block; margin:0 0 8px;"><a href="https://www.mext.go.jp/component/b_menu/shingi/toushin/__icsFiles/afieldfile/2015/09/24/1361110_2_5.pdf">https://www.mext.go.jp/component/b_menu/shingi/toushin/__icsFiles/afieldfile/2015/09/24/1361110_2_5.pdf</a></span>

松下佳代 編著 (2015) <i>ディープ･アクティブラーニング 大学授業を深化させるために</i>, 勁草書房.

佐藤浩章ほか (2016) <i>大学生の主体的学びを促すカリキュラム・デザイン</i>, ナカニシヤ出版.

千葉大学 (2022)千葉大学次世代人材育成計画.
<span class="cite" style="display:block; margin:0;"><a href="https://www.chiba-u.ac.jp/academics/files/pdf/blueprint2028.pdf">https://www.chiba-u.ac.jp/academics/files/pdf/blueprint2028.pdf</a></span>

</div>

<!--
- 参考文献一覧。
-->
