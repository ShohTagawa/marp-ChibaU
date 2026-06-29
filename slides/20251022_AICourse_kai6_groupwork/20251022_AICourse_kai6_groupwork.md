---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座 <b>第6回</b></div>
<div class="title-big">グループワークでの開発</div>
</div>

<div style="display:flex; align-items:flex-end; gap:36px; margin-top:8px;">
<div style="font-size:26px; line-height:1.5;">
2025/10/22 講師：田川 翔<br>
<span style="font-size:21px; color:var(--muted);">千葉大学 国際未来教育基幹 助教</span>
</div>
<img src="./src/fig01-img.png" alt="講師" style="height:180px; border-radius:10px; margin-left:auto; margin-right:60px;">
</div>

<!--
- 第6回。今日はグループで開発と発表準備を行います。
-->

---

<div class="page-title">今日の授業について</div>

# 今日の授業について

<div class="box-accent" style="margin-top:6px;">
<b>流れ：</b><br>
<b>グループで開発と発表準備を行う</b><br>
- グループで分担して話をしても良い<br>
- 他のグループに話をしにいっても良い
</div>

<div class="box-info" style="margin-top:14px; margin-right:calc(var(--pip-w) + 40px);">
<b>課題：</b><br>
第5回の「AI課題解決説明シート」の修正と完成<br>
第6回の課題は<b>全員で第7回を仕上げること</b><br>
　　① AI課題解決説明シート<br>
　　② DSLファイル<br>
　　③ 発表資料スライド + 実施結果
</div>

<div class="lead-note" style="margin-top:14px;"><b>評価基準の説明：</b> form</div>

<!--
- 今日の流れと課題、評価基準の説明。
-->

---

<div class="page-title">第7回 課題のオーバービュー</div>

# 第7回 課題のオーバービュー

<div class="box-accent" style="display:inline-block; padding:4px 16px; font-size:20px; margin:0 0 6px;">みんなを驚かせよう！</div>

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1;">
<div class="subhead" style="font-size:23px;"><b>グループで実施するサービス開発・実験</b></div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">提出物 <span style="font-weight:400; font-size:20px;">(グループで1つです)</span></div>
<div style="font-size:19px; color:#555; margin-bottom:4px;">(第5回の宿題として仮提出、教員feed back後、第7回で確定)</div>
<div style="font-size:21px; line-height:1.7;">
①AIでの課題解決説明シート<br>
<img src="./src/fig02-img.png" alt="AI課題解決説明シート" style="width:100%; max-width:420px; border:1px solid #ddd; border-radius:6px; margin:4px 0;"><br>
②DifyアプリのDSLファイル<br>
③発表資料スライド + 実施結果
</div>
</div>

<div style="flex:1;">
<div class="subhead" style="font-size:23px;"><b>授業中に実施すること</b></div>
<div style="font-size:22px; font-weight:800; margin:4px 0;">4分半のプレゼン (時間厳守)</div>
<div class="stepbox" style="padding:10px 22px; font-size:21px;">
背景 + 目的 (なぜ必要？)<br>
Difyでの工夫 (画面見せる)<br>
出力のデモ<br>
結果 (可能であれば周囲の反応)<br>
気づいたこと
</div>

<div style="font-size:22px; font-weight:800; margin:10px 0 4px;">評価方法</div>
<div class="box-info" style="font-size:21px; padding:10px 20px; margin-right:calc(var(--pip-w) - 100px);">
<b>グループワークの相互評価</b><br>
　　　 ※全員の採点 + 教員で補正<br>
チーム内での相互評価<br>
　※フリーライダー防止のため
</div>
</div>

</div>

<!--
- 提出物（グループで1つ）と、授業中のプレゼン・評価方法のオーバービュー。
-->

---

<!-- _class: divider -->

<div style="display:flex; align-items:center; gap:40px; justify-content:center; height:100%;">
<img src="./src/fig03-img.png" alt="チェックリスト" style="height:200px;">
<div style="font-size:64px; font-weight:800; color:#fff;">今の段階</div>
</div>

<!--
- Slidoのインタラクションスライド。今の段階をみんなに聞く。
-->

---

<div class="page-title">評価URL</div>

# 評価URL

<div style="display:flex; justify-content:center; margin-top:20px;">
<img src="./src/fig06-img.png" alt="評価URL QRコード" style="height:380px;">
</div>

<!--
- 評価フォームのURL（QRコード）。
-->

---

<div class="page-title">授業の目標</div>

# 授業の目標

<div class="box-accent" style="margin-top:8px; font-size:25px; line-height:1.7; margin-right:calc(var(--pip-w) - 80px);">
①[基礎知識]生成AIの背景の仕組み、　周辺のコンセプトを定性的に説明出来るようになる。<br>
　[応用]生成AIのリスクや得意な点・難しい点を理解し、　批判的思考力を働かせ生成AIを活用できる。<br>
②[統合と創造]社会または自分の課題解決のために　生成AIを活用したミニアプリを組み立てられる。<br>
③[価値づけ]生成AIと自分/社会がどのように　関わるべきか、自らの考えをもつ。
</div>

<!--
- この講座の3つの達成目標を再確認。
-->

---

<div class="page-title">第8回の提出物の解説</div>

# 第8回の提出物の解説

<div style="display:flex; gap:28px; align-items:flex-start;">

<div style="flex:1.1;">
<img src="./src/fig07-img.png" alt="最終レポート様式" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>

<div style="flex:1; padding-top:10px;">
<div class="stepbox" style="margin-bottom:18px;">
<div class="st"><b>課題1</b></div>
<div class="st"><b>90分情報収集・実験</b>をして、<br><b>120分くらい</b>で書く</div>
</div>

<div class="stepbox" style="margin-right:calc(var(--pip-w) - 90px);">
<div class="st"><b>課題2</b></div>
<div class="st"><b>いままで自分が作ったものを</b><br><b>なんか出す (第3回/4回)</b></div>
<div class="st" style="font-size:21px; word-break:break-all;">https://forms.gle/B7q3h8NTd23hinhWA</div>
</div>
</div>

</div>

<!--
- 第8回の提出物（最終レポート）の様式と2つの課題の説明。
-->

---

<div class="page-title">11/5回補講・追加の解説</div>

# 11/5回補講・追加の解説

<div class="stepbox" style="margin-top:10px;">
<div class="st"><b>①質問・開発できます (宿題相当の時間)</b></div>
</div>

<div class="stepbox" style="margin-top:14px;">
<div class="st"><b>②出席できんかった人：出席つきます</b></div>
</div>

<div class="stepbox" style="margin-top:14px; margin-right:calc(var(--pip-w) + 20px);">
<div class="st"><b>③試験受け忘れた、むっちゃ悪かった…と思った人</b></div>
<div class="st" style="font-size:23px;">追試験：11/5に別の問題セットで行います</div>
<div class="st" style="font-size:23px;"><b>　※公欠の人は最大20点丸ごと入る</b></div>
<div class="st" style="font-size:23px;"><b>　※それ以外の人は、8割に縮めます</b></div>
</div>

<!--
- 11/5の補講でできること（質問・開発、出席、追試験）。
-->

---

<div class="page-title">今日の授業について</div>

# 今日の授業について

<div class="box-info" style="margin-top:8px;">
<b>課題：</b><br>
第5回の「AI課題解決説明シート」の修正と完成<br>
第6回の課題は<b>全員で第7回を仕上げること</b><br>
　　① AI課題解決説明シート<br>
　　② DSLファイル<br>
　　③ 発表資料スライド + 実施結果
</div>

<div class="box-warn" style="margin-top:24px; margin-right:calc(var(--pip-w) + 40px);">
<b>来週は自習ですが、この部屋を抑えていて田川もいます。</b><br>
<b>困ったら、すぐ連絡して下さい</b>
</div>

<!--
- まとめ。課題の再掲と、来週の自習回の案内。
-->
