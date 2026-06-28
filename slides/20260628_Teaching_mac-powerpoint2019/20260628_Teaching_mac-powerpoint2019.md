---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">PowerPoint</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy（#19284A）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* スクショ枠 */
  .shot { position: relative; display: inline-block; border: 2px solid #cfd6e4; border-radius: 8px; box-shadow: 0 3px 12px rgba(0,0,0,.14); overflow: hidden; }
  .shot img { display: block; }
  /* スクショ上に重ねる赤い注釈枠／矢印 */
  .anno { position: absolute; border: 3px solid #E2231A; border-radius: 4px; }
  .anno-arrow { position: absolute; color: #E2231A; font-size: 34px; font-weight: 900; line-height: 1; }
  /* 英語サブ訳（コールアウト内） */
  .en { display: block; font-weight: 400; font-size: .78em; color: #3a4a63; margin-top: 2px; line-height: 1.35; }
  /* 番号バッジ付きコールアウト行 */
  .ncall { display: flex; align-items: flex-start; gap: 10px; margin: 10px 0; padding-left: 14px; border-left: 4px solid var(--accent); }
  .ncall .tx { font-size: 22px; line-height: 1.4; }
  .ncall .tx b { color: var(--accent-dark); }
  .figcap { font-size: 22px; line-height: 1.45; }
  .figcap b { color: var(--accent-dark); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">PowerPointを使った</div>
<div class="title-big">動画つきスライドの作成</div>
<div class="title-small" style="margin-top:10px;">（Mac版の2019）</div>
</div>

<div class="title-meta" style="margin-top:8px; color:#3a4a63;">
Creating slides with videos<br>using PowerPoint<br>(Mac version 2019)
</div>

<!--
Creating slides with videos using PowerPoint(Windows version 2019 or Office 365)
-->

---

<div class="page-title">動画付きスライドを作成するには</div>

# <span style="color:var(--accent-dark)">スライドショーの記録</span>を選択

<div class="box-warn" style="margin:6px 0 16px; margin-right:calc(var(--pip-w) + 40px);">
スライドショーの記録を選択してスライド一枚ずつ動画を作成
<span class="en">Select Record Slide Show Record and create videos one by one</span>
</div>

<div style="display:flex; gap:34px; align-items:center;">
<div class="shot" style="width:560px;">
<img src="./src/fig01-img.png" style="width:560px;">
<div class="anno" style="left:240px; top:14px; width:54px; height:54px;"></div>
</div>
<div class="box-accent" style="font-size:24px;">
動画付きのパワーポイントスライドを作成するには
<span class="en" style="font-size:.82em;">How to create PowerPoint with video</span>
</div>
</div>

<!--
Select a slideshow recording and create videos one by one / How to create PowerPoint with video
-->

---

<div class="page-title">収録の準備ができたら</div>

# 上の<span style="color:#E2231A">赤いボタン</span>をクリック

<div class="box-warn" style="margin:6px 0 14px; margin-right:calc(var(--pip-w) + 40px);">
この画面になり、収録の準備ができたら、上の赤いボタンをクリック
<span class="en">When this screen appears, click the red button if you are ready to record</span>
</div>

<div class="shot" style="width:760px; margin-top:4px;">
<img src="./src/fig05-img.png" style="width:760px;">
<div class="anno" style="left:357px; top:14px; width:48px; height:48px;"></div>
<div class="anno-arrow" style="left:372px; top:62px;">▲</div>
</div>

<!--
When this screen appears, click the red button if you are ready to record
-->

---

<div class="page-title">記録の開始</div>

# カウントダウン後に<span style="color:var(--accent-dark)">記録開始</span>

<div class="box-warn" style="margin:6px 0 18px; margin-right:calc(var(--pip-w) + 40px);">
カウントダウン後、動画の記録が開始
<span class="en">Video recording starts after the countdown</span>
</div>

<div class="shot" style="width:520px; margin-top:8px;">
<img src="./src/fig04-img.png" style="width:520px;">
</div>

<!--
Video recording starts after the countdown
-->

---

<div class="page-title">収録中の操作</div>

# 収録しながら<span style="color:var(--accent-dark)">授業を進める</span>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div class="shot" style="width:600px; flex:0 0 auto;">
<img src="./src/fig05-img.png" style="width:600px;">
<div class="anno" style="left:288px; top:11px; width:40px; height:38px;"></div>
</div>

<div style="flex:1;">
<div class="ncall"><div class="tx">①スライドに基づいて、授業内容を適宜話す<span class="en">Speak the lecture content accordingly based on the slides</span></div></div>
<div class="ncall"><div class="tx">②次のスライドも連続して記録する場合には赤枠またはスライドをクリック（終了後に動画はスライド単位で分かれる）<span class="en">If you want to record the next slide continuously, click the red frame or the slide (after this, the video is divided by slides）</span></div></div>
<div class="ncall"><div class="tx">③ペンや蛍光ペンを操作しながら収録することも可能<span class="en">It is also possible to record while operating with the pen or highlighter pen</span></div></div>
<div class="ncall"><div class="tx">④収録が終わったら赤いボタンをクリック<span class="en">Click the red button when recording is complete</span></div></div>
</div>

</div>

<!--
①スライドに基づいて話す ②赤枠/スライドで次へ ③ペン操作も可 ④終わったら赤ボタン
-->

---

<div class="page-title">収録後の確認・終了</div>

# 動画を<span style="color:var(--accent-dark)">確認</span>して<span style="color:var(--accent-dark)">終了</span>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div class="shot" style="width:580px; flex:0 0 auto; margin-top:6px;">
<img src="./src/fig06-img.png" style="width:580px;">
<div class="anno" style="left:282px; top:11px; width:38px; height:38px;"></div>
</div>

<div style="flex:1;">
<div class="box-info" style="margin:6px 0 16px;">
再生をクリックし、適宜記録した動画を確認 左隣のゴミ箱アイコンから動画を削除可能
<span class="en">Click Play and check the recorded video. You can delete the video from the trash can icon on the left.</span>
</div>
<div class="box-info">
左上の「×」をクリックすれば、スライドショーを終了し、各スライドの編集画面に戻る（作成した動画は消えません）
<span class="en">Click the "x" in the upper left to end the slide show and Return to the edit screen of each slide (created video will not disappear）</span>
</div>
</div>

</div>

<!--
再生で確認・ゴミ箱で削除／「×」で終了して編集画面へ戻る（動画は消えない）
-->

---

<div class="page-title">動画の調整とエクスポート</div>

# 位置を調整し<span style="color:var(--accent-dark)">エクスポート</span>

<div style="display:flex; gap:30px; align-items:flex-start;">

<div class="shot" style="width:560px; flex:0 0 auto; margin-top:6px;">
<img src="./src/fig08-img.png" style="width:560px;">
<div class="anno" style="left:14px; top:118px; width:160px; height:24px;"></div>
</div>

<div style="flex:1;">
<div class="box-warn" style="margin:6px 0 16px;">
スライドが完成したら、動画ファイルとして保存するため、「ファイル」からエクスポートをクリック
<span class="en">When the slide is complete, click Export from "File" to save it as a video file.</span>
</div>
<div class="box-info">
記録された動画をクリックし、位置や大きさを自由に調節可能。（スライド外に置くことはできません）
<span class="en">Click on the recorded video. You can freely adjust position and size. (Cannot place outside the slide)</span>
</div>
</div>

</div>

<!--
完成したら「ファイル」→エクスポート／動画は位置・大きさを自由に調整可（スライド外不可）
-->

---

<div class="page-title">MP4で書き出す</div>

# ファイル形式を<span style="color:var(--accent-dark)">「MP4」</span>に

<div style="display:flex; gap:30px; align-items:flex-start;">

<div class="shot" style="width:580px; flex:0 0 auto; margin-top:6px;">
<img src="./src/fig10-img.png" style="width:580px;">
<div class="anno" style="left:196px; top:88px; width:118px; height:26px;"></div>
</div>

<div style="flex:1;">
<div class="box-warn" style="margin:6px 0 16px;">
ファイル形式を「MP4」に変更
<span class="en">Change file format to "MP4".</span>
</div>
<div class="box-accent">
ファイル名、保存する場所、ファイル形式、品質を設定し「エクスポート」をクリック
<span class="en">Set the file name, save location, file format, quality, and click "Export".</span>
</div>
</div>

</div>

<!--
ファイル形式をMP4に／名前・場所・形式・品質を設定して「エクスポート」
-->
