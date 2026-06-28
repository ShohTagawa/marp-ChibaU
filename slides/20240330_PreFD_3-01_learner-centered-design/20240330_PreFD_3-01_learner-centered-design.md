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
  /* 要素一覧テーブル（slide6/7用） */
  .elemtbl { display: grid; grid-template-columns: max-content 1fr; gap: 8px 16px; align-items: center; margin: 6px 0; }
  .elemtbl .el-name { font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 4px 14px; text-align: center; font-size: 22px; }
  .elemtbl .el-desc { font-size: 22px; }
  .elemtbl .el-desc b { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">学習者主体のクラス設計</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">クラス設計の指針を理解する。</span></div>

<!-- まずは、タイトルコール。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">クラス設計</span>とは<span class="tag tag-design">設計</span>

<div class="box-accent" style="margin-top:14px;"><b>一回分の授業を「要素」</b>を組み合わせ、<br><b>目標が達成出来るようにデザインする</b>こと</div>

<div style="font-size:38px; font-weight:800; margin:26px 0 18px;">①逆向き設計を使用する</div>

<div style="font-size:38px; font-weight:800; margin:18px 0;">② 2つの便利な方針を知っておく</div>

<div style="font-size:38px; font-weight:800; margin:18px 0;">③<b style="color:var(--accent-dark)">インストラクショナル・デザイン</b>の要素を<br><span style="margin-left:1.2em;">適切に組み合わせ使用する</span></div>

<!-- クラス設計とは、一回分の授業を要素の組み合わせでデザインすること。3つの指針で進める。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">クラス設計</span>とは<span class="tag tag-design">設計</span>

<div style="font-size:33px; font-weight:800; margin-top:4px;">①逆向き設計を使用する</div>
<div style="font-size:29px; margin:2px 0 10px 1.4em;">「コースにおける」クラスの目標を認識する</div>

<div class="stepbox" style="margin:7px 0;">
<div class="st" style="font-size:26px;">✔<b>クラスの次元での目標</b>をきちんと定義し説明しましょう</div>
<div class="st" style="font-size:26px; margin-left:1.2em;">▶この授業だと、各回のイントロ動画で</div>
</div>

<div class="stepbox" style="margin:7px 0;">
<div class="st" style="font-size:26px;">✔<b>要素の目標</b>をきちんと定義しましょう</div>
<div class="st" style="font-size:26px; margin-left:1.2em;">▶課題の目標は、詳細シラバスで</div>
<div class="st" style="font-size:26px; margin-left:1.2em;">▶動画の目標は、動画のタイトルページで</div>
</div>

<div style="font-size:27px; font-weight:800; margin-top:8px;">✔あとは<span style="color:var(--accent-dark)">コースデザインの時と同じ</span>です</div>

<!-- ①逆向き設計。クラスの次元・要素それぞれの目標を定義し説明する。あとはコースデザインと同じ。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">クラス設計</span>とは<span class="tag tag-design">設計</span><span class="tag tag-ref" style="margin-left:10px;">参照</span>

<div style="font-size:34px; font-weight:800; margin:6px 0 4px;">② 2つの便利な方針を知っておく</div>

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

<div style="font-size:30px; font-weight:800; color:var(--accent-dark); margin:8px 0;">ガニエの9教授事象 <span style="font-size:22px; color:#666; font-weight:600;">(ガニエ他 2004)</span></div>

<div class="box-accent" style="font-size:25px; padding:8px 18px;"><b>認知プロセス</b>に沿った教え方</div>

<div style="font-size:24px; line-height:1.5; margin-top:14px;">関心をもち、価値を知り、<br>説明を受け、体験の機会を得て、<br>記憶に残り、使える知識になる</div>

<div class="box-info" style="font-size:24px; margin-top:12px;"><b>授業の時間</b>を<b>どうデザインするか</b></div>
<div class="box-info" style="font-size:24px; margin-top:8px;">それぞれの流れに於いて、<b>何をするべきか</b></div>

</div>
<img src="./src/fig02-img.png" alt="ガニエの9教授事象" style="height:420px; align-self:flex-start;">
</div>

<!-- ガニエ：インストラクショナル・デザインの大家。9教授事象は認知プロセスに沿った教え方。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">クラス設計</span>とは<span class="tag tag-design">設計</span>

<div style="font-size:34px; font-weight:800; margin:6px 0 4px;">② 2つの便利な方針を知っておく</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.05;">

<div style="font-size:32px; font-weight:800; color:var(--accent-dark); margin:6px 0 8px;">90-20-8の法則 <span style="font-size:22px; color:#666; font-weight:600;">(ロバート・パイク, 2008)</span></div>

<div style="font-size:26px; line-height:1.7;">
• 理解しながら聞けるのは<b>90分</b>まで<br>
• 記憶に残しながら聞けるのは<b>20分</b>まで<br>
• <b>8分ごと</b>に参画させる
</div>

<div class="box-warn" style="font-size:26px; margin-top:14px;"><b>→内容を20分毎にわける</b></div>

</div>
<div style="flex:1; text-align:center;">
<div style="display:flex; align-items:center; gap:6px; justify-content:center;">
<div style="writing-mode:vertical-rl; font-size:18px; color:#555;">学生の集中度合い</div>
<img src="./src/fig03-concentration.png" alt="動画長さと集中度" style="height:296px;">
</div>
<div style="font-size:21px; color:#444; margin-top:4px;"><b>大規模オンラインコースの分析</b>　(Guo et al, 2014)</div>
<div style="font-size:22px; font-weight:800; color:var(--accent-dark);">6 ~ 9分を超えると集中力低下</div>
</div>
</div>

<!-- 90-20-8の法則。集中が続くのは短い。Guo et al の分析でも6〜9分超で集中低下。内容を20分毎にわける。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">クラス設計</span>とは<span class="tag tag-design">設計</span><span class="tag tag-ref" style="margin-left:10px;">参照</span>

<div style="font-size:30px; font-weight:800; margin:6px 0 10px;">③ 様々なインストラクションの要素を適切に組みわせる</div>

<div class="elemtbl">
<div class="el-name">予習映像</div><div class="el-desc">事前知識を共通化し、質問もしやすくなる</div>
<div class="el-name">事前問題</div><div class="el-desc">事前に価値付けされ、授業にも関心をもつ</div>
<div class="el-name">講義説明</div><div class="el-desc">学習項目を短時間で伝達し、理解に役立つ</div>
<div class="el-name">演習問題</div><div class="el-desc">学習項目を体験し理解度も確かめられる</div>
<div class="el-name">雑談</div><div class="el-desc">協力的な学習環境形成や集中の回復に</div>
<div class="el-name">ゆとり</div><div class="el-desc">臨機応変な授業運営で学習者の興味に応える</div>
<div class="el-name">課題</div><div class="el-desc">▶コースデザイン参照</div>
<div class="el-name">ワーク</div><div class="el-desc"><b>学習者が主体的に学ぶチャンスが増える</b></div>
</div>

<!-- 授業を構成する様々な要素を、目的に応じて適切に組み合わせる。 -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">アクティブラーニング</span>

<div class="subhead"><span class="tag tag-accent">ワーク</span><span class="tag tag-accent">課題</span><span>学習者が<b style="color:var(--accent-dark)">主体的に</b>学びやすい要素</span></div>

<div style="font-size:30px; font-weight:800; margin:6px 0 8px;">双方向性・主体性のある学びを実現する方法論</div>

<div class="box-info" style="font-size:24px;">教員と学生が意思疎通を図りつつ、<b>一緒になって</b>切磋琢磨し、相互に刺激を与えながら知的に成長する場を創り、<b>学生が主体的に問題を発見し、解を見出していく能動的学修 </b>(文科省 2012)</div>

<div style="font-size:25px; margin-top:10px;"><b>▶手法：沢山ある (いくつかを次以降、体験)</b></div>
<div style="font-size:25px;"><b>▶実装方法：教員がする or </b><b>ティーチングフェローが双方向性を創る</b></div>

<div class="box-accent" style="font-size:27px; margin-top:12px; margin-right:calc(var(--pip-w) + 40px);">授業の目的上、適切ならば<b>積極的に利用</b>する<br><b>学習者が聴くだけの授業は終わりにしよう</b></div>

<!-- ミニッツペーパー、自己評価、Think-Pair-Share、ピアレビュー、ブレインストーミング、ジグソー法、ケーススタディ、課題解決型学習(PBL)、チーム基盤型学習(TBL)、ピアインストラクション、ポスターツアー...... -->

---

<div class="page-title">学習者主体のクラス設計</div>

# <span style="color:var(--accent-dark)">アクティブラーニング</span>の有効性

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">
<div style="font-size:21px; font-weight:700; margin-bottom:2px;">学部初歩の物理授業のテスト成績の分布図</div>
<div style="display:flex; align-items:center; gap:4px;">
<div style="writing-mode:vertical-rl; font-size:17px; color:#555;">学生の人数(人)</div>
<img src="./src/fig06-img.png" alt="テスト成績分布" style="width:100%; max-width:480px;">
</div>
<div style="font-size:17px; color:#555; text-align:center;">得点</div>
<div style="font-size:18px; color:#666; text-align:right; margin-top:0;">(Deslauriers et al. Science, 2011)</div>
<div style="font-size:20px; margin-top:2px;"><span style="color:#9aa; font-weight:800;">■</span> 経験豊富な講師の講義　<b>N = 267</b></div>
<div style="font-size:20px;"><span style="color:#444; font-weight:800;">■</span> 経験は少ない講師の双方向な授業　<b>N = 271</b></div>
</div>

<div style="flex:0.85;">
<div class="box-accent" style="font-size:29px; line-height:1.5;"><b>適切な講習を受け、双方向性・主体性のある学習</b>を取り入れると、<br><b>若い教員も良い授業ができる!</b></div>
</div>
</div>

<div class="box-warn" style="font-size:22px; margin-top:8px; padding:8px 22px; margin-right:calc(var(--pip-w) + 40px);"><b>注意：</b>アクティブラーニングすること自体が授業の目的ではない <b>(効果がない事例も多数)</b></div>

<!-- Deslauriersらの研究：双方向授業を取り入れると若い教員でも成績が上がる。ただしAL自体が目的ではない。 -->
