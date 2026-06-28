---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">詳細版シラバス</div>
</div>

<div class="goal-box" style="max-width:880px; margin:6px auto 0;"><b>達成目標：</b><br><span class="ind">詳細版シラバスの内容を理解しよう。</span></div>

<!-- まずは、タイトルコール。 -->

---

<div class="page-title">詳細版シラバス</div>

# <span style="color:var(--accent-dark)">詳細版シラバス</span>とは

<div class="box-accent" style="margin-top:6px;">学生が各科目の準備学習等を進めるための<b>基本</b>となるもの<br><span style="font-size:20px;">(中央教育審議会, 2008)</span></div>

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:34px;">
<div style="flex:0 0 auto;">
<div style="font-size:44px; font-weight:800; border-bottom:4px solid var(--accent-dark); display:inline-block; padding-bottom:4px;"><span style="color:var(--accent-dark)">Web</span>にあるシラバス</div>
<div style="font-size:38px; margin-top:10px; padding-left:1em;">“授業要覧”</div>
</div>
<img src="./src/fig01-img.png" alt="千葉大学 シラバス検索システム" style="width:420px; border:1px solid #ddd; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,.12);">
</div>

<!-- 授業要覧には、形式や各回の計画など、最低限の事が書いてある / 授業選択には便利 / 詳細版シラバスは、アメリカなどで多い。いろんな側面がある / 実は、配っている授業も出てきている。 -->

---

<div class="page-title">詳細版シラバス</div>

# <span style="color:var(--accent-dark)">詳細版シラバス</span>とは

<div class="box-accent" style="margin-top:4px; padding:8px 24px;">学生が各科目の準備学習等を進めるための<b>基本</b>となるもの<span style="font-size:19px;">　(中央教育審議会, 2008)</span></div>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:14px;">
<div style="flex:1;">

<div style="font-size:30px;"><span style="font-weight:800; color:#333;">① <span style="border-bottom:3px solid var(--accent-dark);">Web</span>にあるシラバス</span>　“授業要覧”</div>

<div style="margin-top:16px; font-size:30px;"><span style="font-weight:800; color:var(--accent-dark);">② 詳細版シラバス</span></div>
<div style="font-size:27px; padding-left:1.6em; line-height:1.5;">連絡文章、契約書、<br><b>主体的な学習支援</b> etc…</div>

</div>
<div style="flex:0 0 auto;">
<img src="./src/fig01-img.png" alt="千葉大学 シラバス検索システム" style="width:300px; border:1px solid #ddd; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,.12);">
<div class="box-info" style="margin-top:12px; width:300px; font-size:21px; padding:10px 16px; text-align:center;"><b>ねらい・目的/目標・課題・</b><br><b>予習・参考文献</b>等、行間も分かる</div>
</div>
</div>

<div class="box-warn" style="margin-top:14px; margin-right:calc(var(--pip-w) + 24px);">①を公開しつつ、<b>②を履修者に配る</b>授業も増加 <span style="font-size:20px; font-weight:400;">(中島, 2016)</span></div>

<!-- 授業要覧には、形式や各回の計画など、最低限の事が書いてある / 授業選択には便利 / 詳細版シラバスは、アメリカなどで多い。いろんな側面がある / 実は、配っている授業も出てきている。 -->

---

<div class="page-title">詳細版シラバス</div>

# シラバスは<span style="color:var(--accent-dark)">誰のため？</span>

<div class="lead-note" style="font-size:30px;"><b>シラバスを作ることで<span style="color:var(--accent-dark)">授業をデザイン</span>する</b></div>

<div style="display:flex; gap:24px; align-items:center; margin-top:10px;">

<div style="flex:0 0 auto; text-align:center;">
<img src="./src/fig03-img.png" alt="学生" style="height:230px;">
<div style="font-weight:800; margin-top:4px;">学生</div>
</div>

<div style="flex:1;">
<div class="box-info" style="padding:12px 22px; font-size:23px; line-height:1.55;">
<div><b>コースデザイン</b>に役立つ目標に応じたデザイン</div>
<div style="margin-top:6px;"><b>カリキュラムの整合性</b>の確認　<span style="font-size:21px;">DP、CP、AP</span></div>
<div style="margin-top:6px;"><b>教育力を示す資料</b>として</div>
</div>
<div class="box-accent" style="padding:8px 22px; font-size:23px; margin-top:10px;"><b>学修を促すツール</b>として</div>
<div class="box-warn" style="padding:8px 22px; font-size:23px; margin-top:10px;">両者にとって…　<b>約束事</b>(評価/態度等)として</div>
</div>

<div style="flex:0 0 auto; text-align:center;">
<img src="./src/fig04-img.png" alt="教員" style="height:230px;">
<div style="font-weight:800; margin-top:4px;">教員</div>
</div>

</div>

<div class="takeaway"><b>シラバス作成は、学習者・教員の双方に役立つ</b></div>

<!-- シラバス作成は、学習者・教員の双方に役立つ。 -->

---

<div class="page-title">詳細版シラバス</div>

# <span style="color:var(--accent-dark)">自修の同伴者</span>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:12px;">

<div style="flex:1;">
<div class="stepbox" style="margin:14px 0;"><div class="st"><b>1.</b> 詳細シラバスは、<span class="em">学習のガイド</span></div></div>
<div class="stepbox" style="margin:14px 0; display:flex; align-items:center;"><div class="st" style="flex:1;"><b>2.</b> <span class="em">目標・目的</span>は、<span class="em">学習の道しるべ</span></div><span style="color:var(--accent); font-weight:800; font-size:24px; white-space:nowrap;">←最重要</span></div>
<div class="stepbox" style="margin:14px 0;"><div class="st"><b>3.</b> <span class="em">課題/成績評価</span>は、<span class="em">単位取得の鍵</span></div></div>
</div>

<div style="flex:0 0 auto; text-align:center;">
<img src="./src/fig05-img.png" alt="説明書を読む人" style="height:300px;">
</div>

</div>

<div class="takeaway" style="text-align:center;"><b>しっかり読み込もう</b></div>

<!-- 目標・目的が最重要。しっかり読み込もう。 -->
