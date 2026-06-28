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
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">逆向き設計</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">逆向き設計を理解し、使用出来る。</span></div>

<!--
- まずは、タイトルコール。「逆向き設計」を理解して使えるようになる、が今回の達成目標。
-->

---

<div class="page-title">逆向き設計とは</div>

# <span style="color:var(--accent-dark)">授業担当者</span>となったら

<div class="lead-note">まずは…</div>

<div class="flowrow">
<div class="fbox blue">分析</div>
<div class="farrow">⇒</div>
<div class="fbox red">設計</div>
</div>

<div style="display:flex; align-items:center; gap:30px; margin-top:18px;">
<div style="font-size:32px; font-weight:800;">概観しましょう</div>
<img src="./src/fig01-img.png" alt="悩む先生" style="height:300px;">
</div>

<!--
- 授業担当者になったら、みんな「どう作ろう」と困る。まずは全体像を「分析 → 設計」の2段で概観しましょう。
-->

---

<div class="page-title">逆向き設計とは</div>

# <span style="color:var(--accent-dark)">分析</span>すべき内容　<span class="tag tag-ref">参照</span>

<div class="subhead"><span class="tag tag-analyze">分析</span><span><span style="color:var(--accent-dark)">全体像決定</span>の為の<span style="color:var(--accent-dark)">情報収集</span></span></div>

<div class="box-warn" style="position:absolute; top:120px; right:48px; width:330px; text-align:center;"><b>チェックリスト化</b>し、<br><b>確認</b>しましょう</div>

<div class="bgroup">
<div class="bg-label">要件</div>
<div class="bg-items">
<div>①<b>上位ポリシー</b> (DP / CP)</div>
<div>②<b>課目の位置づけ</b>　普遍 / 専門, 必修/選択</div>
<div>③<b>開講期間・時間要件</b>　集中 / ターム, 1単位=時間？</div>
</div>
</div>

<div class="bgroup">
<div class="bg-label">学生</div>
<div class="bg-items">
<div>④学生の<b>人数・態度・ニーズ・モチベーション</b></div>
<div>⑤学生の<b>スキル・既習概念</b></div>
</div>
</div>

<div class="bgroup">
<div class="bg-label">環境</div>
<div class="bg-items">
<div>⑥オンライン・対面・オンデマンド</div>
<div>⑦<b>機材</b>(プロジェクタ)<b>・什器</b> (机は可動式？)</div>
</div>
</div>

<div class="num-loose">⑧<b>前担当者</b>や<b>プログラム担当者</b>の期待・意見</div>

<!--
- 設計の前に「分析」。全体像を決めるための情報収集を、要件・学生・環境の3観点でチェックリスト化して確認する。
-->

---

<div class="page-title">逆向き設計とは</div>

# 逆向き設計<span style="font-size:34px;">(backward design)</span><span class="tag tag-design">設計</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st">① 求められている結果を明確にする <b>（目的・目標）</b></div>
<div class="st">② 承認できる証拠を決定する <b>（評価方法）</b></div>
<div class="st">③ 学習経験と指導を計画する <b>（内容）</b></div>
</div>

<div class="lead-note" style="text-align:center; color:#444;">(この順番 or 三位一体)</div>

<div class="cite">Wiggins &amp; McTighe (1998), <i>Understanding by Design</i>；西岡 (2005)</div>

<!--
- 設計の本体が逆向き設計。①結果（目的・目標）→②証拠（評価方法）→③計画（内容）の順、または三位一体で考える。
-->

---

<div class="page-title">逆向き設計とは</div>

# 逆向き設計<span style="font-size:34px;">(backward design)</span><span class="tag tag-design">設計</span>

<div class="stepbox" style="margin-top:18px;">
<div class="st">① 求められている結果を明確にする <b>（目的・目標）</b></div>
<div class="st">② 承認できる証拠を決定する <b>（評価方法）</b></div>
<div class="st">③ 学習経験と指導を計画する <b>（内容）</b></div>
</div>

<div class="why-callout" style="margin-top:14px; margin-right:calc(var(--pip-w) + 56px);">
<div class="wh">なんで「逆向き」?</div>
指導後に考えられがちな<span class="em">評価方法を指導の前</span>にる点，単元末・学年末・卒業時といった<span class="em">最終的な結果から遡って教育を設計する</span>点から。
</div>

<div class="cite" style="margin-right:calc(var(--pip-w) + 56px);">Wiggins &amp; McTighe (1998), <i>Understanding by Design</i>；西岡 (2005)</div>

<!--
- 「逆向き」と呼ぶ理由：評価方法を指導の“前”に決める／最終的な結果から遡って設計するから。
-->

---

<div class="page-title">逆向き設計とは</div>

# 逆向き設計<span style="font-size:34px;">(backward design)</span>の例<span class="tag tag-design">設計</span>

<div class="ex-head">(架空)　筋トレ学第一</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div class="exrow"><div class="exn">①</div><div><b>目的</b>：健やかな人生を歩むために、理論的医学的背景、方法論を理解し、実践を楽しみながら一人で正しく筋トレできる能力を身につける。<br><b>目標</b>：猫背や腰痛の防止に不可欠な広背筋を適切に鍛えられる。</div></div>

<div class="exrow"><div class="exn">②</div><div><b>評価</b>：A. 意識する部位を実技で述べ採点。　B. 実演動画を視聴し、コメント。　C. 期末に広背筋の体力テスト。　D. 本質的な問についてのレポート。</div></div>

<div class="exrow"><div class="exn">③</div><div><b>設計</b>：A. ペアで実技し評価表で採点。　B. 自宅トレーニング用動画教材の準備。　C. 筋トレ計画の作成とモニタ。　D. 健康・体力への影響等の探究。</div></div>

</div>
<img src="./src/fig02-img.png" alt="筋トレをする人" style="height:240px; align-self:center;">
</div>

<!--
- 架空例「筋トレ学第一」で①目的・目標→②評価→③設計を一気通貫で示す。
- 西岡先生の例：①アメリカの歴史→「独立するとは何か」、②基礎物理→「重力とは何か」。 https://www.jstage.jst.go.jp/article/jscs/14/0/14_KJ00007910995/_article/-char/ja
-->

---

<div class="page-title">逆向き設計とは</div>

# まとめ

<div class="wrap3">
<div class="ln"><span class="no">1.</span> 授業担当者となったら…</div>
<div class="ln"><span class="no">2.</span> <span class="tag tag-analyze">分析</span> は、チェックリストで情報収集</div>
<div class="ln"><span class="no">3.</span> <span class="tag tag-design">設計</span> は、<span style="color:var(--accent-dark); font-weight:800;">逆向き設計</span>を用いる</div>
</div>

<div class="box-warn" style="margin-top:24px; margin-right:calc(var(--pip-w) + 56px);"><span style="color:var(--accent-dark)">目的・目標、評価方法、内容</span>をこの順番 or 同時に作っていく</div>

<!--
- まとめ。①担当になったら、②まず分析（チェックリストで情報収集）、③設計は逆向き設計で。目的・目標／評価方法／内容を順番に、または同時に作る。
-->
