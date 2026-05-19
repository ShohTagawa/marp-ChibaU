---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生物論文 - AI</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デモ用：右カラムを画像オーバーレイ風に見せるための追加スタイル */
  section.intro .col.fig-col {
    position: relative;
    min-height: 360px;
    border-radius: 8px;
    overflow: hidden;
    background: #111;
  }
  section.intro .col.fig-col .bg-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: contain;   /* 元画像の縦横比を保持。コンテナの余白は黒地。 */
    opacity: 0.95;
  }
  section.intro .col.fig-col .overlay {
    position: absolute;
    left: 18px; right: 18px; bottom: 70px;
    color: #fff;
    font-size: 22px;
    line-height: 1.6;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }
  section.intro .col.fig-col .credit {
    position: absolute;
    right: 14px; bottom: 12px;
    color: #fff;
    font-size: 16px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }
  section.intro .col .magma-placeholder {
    width: 100%;
    min-height: 320px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: repeating-linear-gradient(135deg, #f7f3e9 0 12px, #fdfaf2 12px 24px);
    display: flex; align-items: center; justify-content: center;
    color: #777; font-size: 18px;
  }
---

<!-- _class: intro -->

<div class="page-title">自己紹介</div>

<div class="intro-head">
<div class="intro-name">
<span class="ruby">たがわ　しょう</span>
田川　翔
</div>
<div class="intro-affil">
<strong>所属：</strong>千葉大学<br>
高等教育センター / アカデミックリンクセンター
<div class="role">大学教育を設計し、学生と教員を支援する仕事</div>
</div>
</div>

<div class="two-col">
<div class="col">

### ①元々は理学の人

<div class="magma-placeholder">[マグマオーシャン断面図をここに配置]</div>

</div>
<div class="col fig-col">

<img class="bg-img" src="./src/space-placeholder.jpg" alt="原始太陽系">

<div class="overlay">
何がいまのこの惑星（ほし）を、<br>
決めているのか。<br>
私たちは、どこから来たのか？
</div>

<div class="credit">NASA/NASA/FUSE/Lynette Cook</div>

</div>
</div>

<!-- 元々理学(地球惑星科学)出身。今は教育設計の仕事をしている、という流れを30秒で。 -->

---

<div class="page-title">今日のまとめ</div>

<div class="callout-green">① 授業における生成AIの関わり方</div>

- 授業で生成AIで困った時に、どうすればよいか答えられる
- 使わない場面・使う場面を判断できる

<div class="callout-pink">② 学びにおける生成AIの関わり方</div>

- 生成AIが未来に与える影響を想像できる
- 学びの相棒としてGeminiを使うことが出来る

<div class="callout-orange">③ 生成AIを味方につけて、あなたは何を創りますか</div>

<div class="indent-md">

- 生成AIを活用することに関心をもてる
- 人や大学の提供する機会を、味方にできる

</div>

<!-- callout の色は green / pink / orange / yellow / gray / blue から選べる -->

---

<div class="page-title">千葉大の指針</div>

## 千葉大学の教育・学習における生成AIの利用についての指針

<div class="callout-pink">
<strong>使ってはいけない場面で使わない</strong><br>
&nbsp;&nbsp;→ 困ったら<strong style="color: var(--accent-dark)">シラバスを見て、担当教員に聞く</strong>
</div>

<p style="padding: 0 28px">カンニングと同様に、不正行為として、<br><strong>不可になる場合など</strong>、学部によってあります</p>



<div class="callout-pink">
機密情報や個人情報の入力、生成AIにより出力された情報の判断、<br>
<u>著作権（表現への類似性・依拠性）</u>には留意が必要
</div>

<div class="callout-yellow">
戦争やポルノなど、利用規約に抵触しうる情報は処理しない
</div>

<!-- 既存の callout クラスだけで再現可能なレイアウトの例 -->

---

<div class="page-title">授業での生成AIの関わり方</div>

想像してみて下さい。


<div class="callout-gray" style="text-align:center; padding: 18px 28px">
中高生の塾講師をしているとします。<br>
英語を教えているときに、こう言われました。<br>
「先生、この問題はAIが解けるのに、なぜ勉強しないといけないの？」
</div>

<div class="qa-grid">
<div>質問1:</div><div>あなたは、この生徒になんと言い返しますか？</div>
<div>質問2:</div><div>ところで、あなたが学んでいるときに、<br>同じ疑問を持ったことはないですか？</div>
</div>

<div class="takeaway">自分の頭で<span class="hl-dark">思考する価値</span>"も"<span class="hl-dark">理解しよう</span></div>

<!-- takeaway は常にスライド下端 28px 固定 -->

