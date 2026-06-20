---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">大学運営における生成AI活用</div><img class="hdr-logo" src="../assets/edtech-logo.png" alt="教育テック事例研究">'
footer: ''
html: true
style: |
  /* === pptx2marp: 座標再現レイヤ（色・字体は academic CSS に委ねる） === */
  section.ppt { padding: 0; }
  section.ppt .ppt-canvas { position: absolute; inset: 0; }
  section.ppt .ppt-box {
    position: absolute; box-sizing: border-box; overflow: hidden;
    display: flex; flex-direction: column; justify-content: flex-start;
    padding: 1px 2px;
  }
  section.ppt .ppt-p { margin: 0; line-height: 1.25; }
  section.ppt .ppt-bu { margin-right: .4em; }
  section.ppt .ppt-img { position: absolute; object-fit: contain; }
  section.ppt .ppt-tbl { position: absolute; border-collapse: collapse; font-size: 18px; }
  section.ppt .ppt-tbl th, section.ppt .ppt-tbl td {
    border: 1px solid #bbb; padding: 2px 6px; vertical-align: middle;
  }
  section.ppt .ppt-tbl th { background: var(--accent-soft, #f3e6e8); }
  section.ppt .ppt-ph {
    position: absolute; box-sizing: border-box; display: flex;
    align-items: center; justify-content: center; text-align: center;
    border: 2px dashed var(--accent, #C0182B); color: var(--accent, #C0182B);
    font-size: 14px; padding: 4px;
  }
---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:90.519%;top:92.685%;width:7.133%;height:5.325%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<div class="ppt-box" style="left:20.793%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">開始に先立ち</div>
</div>
<img class="ppt-img" style="left:78.725%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig01-img.png" />
<img class="ppt-img" style="left:84.429%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig02-img.png" />
<div class="ppt-box" style="left:3.923%;top:11.726%;width:92.152%;height:46.235%">
<div class="ppt-p" style="font-size:44.4px">① A4 1枚のシートの表の問へ、ご回答をお考え下さい</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:44.4px">② インタラクションツール Slidoにアクセスして下さい</div>
<div class="ppt-p" style="font-size:40.9px">　　URLを配布したり、質問やアンケートをとったりします</div>
<div class="ppt-p" style="font-size:40.9px">    お名前などの個人情報の入力は禁止です</div>
<div class="ppt-p" style="font-size:40.9px">　　所属組織の意見ではなく、個人としてご記入下さい</div>
</div>
<img class="ppt-img" style="left:51.488%;top:74.953%;width:35.943%;height:8.102%" src="./src/fig03-img.png" />
<div class="ppt-box" style="left:50.01%;top:89.555%;width:42.9%;height:6.282%">
<div class="ppt-p" style="font-size:21.3px">https://app.sli.do/event/626s4pbDxme1HR9ezTa9H2</div>
</div>
<div class="ppt-box" style="left:4.538%;top:66.028%;width:16.253%;height:8.976%">
<div class="ppt-p" style="font-size:37.3px">スマホから</div>
</div>
<div class="ppt-box" style="left:36.438%;top:66.028%;width:15.502%;height:8.976%">
<div class="ppt-p" style="font-size:37.3px">PCから</div>
</div>
<div class="ppt-box" style="left:47.044%;top:66.956%;width:47.818%;height:7.781%">
<div class="ppt-p" style="font-size:30.2px">方法1 Google検索「Slido」→コード入力</div>
</div>
<div class="ppt-box" style="left:47.044%;top:83.732%;width:41.017%;height:7.781%">
<div class="ppt-p" style="font-size:30.2px">方法2 直接リンク</div>
</div>
<div class="ppt-box" style="left:74.678%;top:75.793%;width:11.421%;height:6.882%">
<div class="ppt-p">1134033</div>
</div>
<img class="ppt-img" style="left:15.638%;top:74.656%;width:10.417%;height:18.519%" src="./src/fig04-img.png" />
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:23.979%;top:81.903%;width:52.044%;height:11.519%">
<div class="ppt-p" style="font-size:30.2px;text-align:center">国立大学法人 千葉大学</div>
<div class="ppt-p" style="font-size:30.2px;text-align:center">国際未来教育基幹 田川 翔</div>
</div>
<div class="ppt-box" style="left:90.519%;top:92.685%;width:7.133%;height:5.325%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<div class="ppt-box" style="left:8.925%;top:56.32%;width:82.152%;height:8.679%">
<div class="ppt-p" style="font-size:35.6px;text-align:center">みんなで創る大学DX： 実践事例紹介と横連携の価値</div>
</div>
<div class="ppt-box" style="left:9.24%;top:70.141%;width:81.519%;height:8.381%">
<div class="ppt-p" style="font-size:28.4px;text-align:center">2026/1/25 （日）　TeamSwimmy 教育・経営テック共創会議</div>
</div>
<div class="ppt-box" style="left:15.569%;top:14.913%;width:68.862%;height:36.81%">
<div class="ppt-p" style="font-size:94.2px;text-align:center">大学運営における</div>
<div class="ppt-p" style="font-size:103.1px;text-align:center">生成AI活用</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:90.519%;top:92.685%;width:7.133%;height:5.325%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<div class="ppt-box" style="left:6.685%;top:11.478%;width:22.516%;height:11.945%">
<div class="ppt-p" style="font-size:44.4px;text-align:center">田川　翔 </div>
</div>
<div class="ppt-box" style="left:20.793%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">講師紹介</div>
</div>
<div class="ppt-box" style="left:32.581%;top:8.244%;width:65.42%;height:11.519%">
<div class="ppt-p" style="font-size:30.2px">高等教育センター：FD、PreFD、内部質保証</div>
<div class="ppt-p" style="font-size:30.2px">図書館/アカデミックリンクセンター：SD、授業外学習支援</div>
</div>
<div class="ppt-box" style="left:7.722%;top:10.631%;width:21.867%;height:5.833%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">たがわ    しょう</div>
</div>
<div class="ppt-box" style="left:35.825%;top:19.553%;width:58.904%;height:6.433%">
<div class="ppt-p" style="font-size:30.2px">教職協働で大学教育を設計し、学生と教員を支援する</div>
</div>
<img class="ppt-img" style="left:5.108%;top:36.567%;width:20.452%;height:48.379%" src="./src/fig05-img.png" />
<div class="ppt-box" style="left:4.131%;top:27.822%;width:22.516%;height:6.731%">
<div class="ppt-p" style="font-size:32.0px">①元々は理学の人</div>
</div>
<div class="ppt-box" style="left:36.816%;top:27.822%;width:20.453%;height:6.731%">
<div class="ppt-p" style="font-size:32.0px">②色々な経験</div>
</div>
<div class="ppt-box" style="left:68.705%;top:27.823%;width:20.896%;height:6.731%">
<div class="ppt-p" style="font-size:32.0px">③大学のUX変革</div>
</div>
<img class="ppt-img" style="left:22.791%;top:66.208%;width:8.86%;height:18.433%" src="./src/fig06-img.png" />
<img class="ppt-img" style="left:36.961%;top:36.534%;width:27.183%;height:26.614%" src="./src/fig07-img.png" />
<img class="ppt-img" style="left:72.215%;top:39.618%;width:22.516%;height:27.939%" src="./src/fig08-img.png" />
<div class="ppt-box" style="left:36.819%;top:66.208%;width:28.675%;height:5.833%">
<div class="ppt-p" style="font-size:26.7px">- 大学のICT支援 (コロナ禍)</div>
</div>
<div class="ppt-box" style="left:36.819%;top:71.743%;width:32.136%;height:5.833%">
<div class="ppt-p" style="font-size:26.7px">- MOOCの制作</div>
</div>
<div class="ppt-box" style="left:36.819%;top:77.278%;width:26.637%;height:10.324%">
<div class="ppt-p" style="font-size:26.7px">- 民間企業での経験</div>
<div class="ppt-p" style="font-size:26.7px">  IT企画 / PoC/ 安全管理</div>
</div>
<div class="ppt-box" style="left:70.32%;top:34.348%;width:20.896%;height:5.535%">
<div class="ppt-p" style="font-size:24.9px">大学での教え方</div>
</div>
<div class="ppt-box" style="left:70.32%;top:67.818%;width:25.24%;height:5.535%">
<div class="ppt-p" style="font-size:24.9px">生成AI/ICTの教育利活用</div>
</div>
<img class="ppt-img" style="left:71.445%;top:72.621%;width:18.156%;height:6.731%" src="./src/fig09-img.png" />
<img class="ppt-img" style="left:78.725%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig10-img.png" />
<img class="ppt-img" style="left:84.429%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig11-img.png" />
<img class="ppt-img" style="left:89.358%;top:79.139%;width:5.373%;height:9.552%" src="./src/fig12-img.png" />
<div class="ppt-box" style="left:1.333%;top:90.11%;width:90.827%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">ミッション： 大学に関わる皆様の体験（エクスペリエンス）の向上</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">今日の構成</div>
</div>
<div class="ppt-box" style="left:4.6%;top:11.292%;width:90.801%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">20分×2テーマ：合計40分の2部構成</div>
</div>
<div class="ppt-box" style="left:7.988%;top:21.767%;width:76.066%;height:33.514%">
<div class="ppt-p" style="font-size:40.9px">Session 1: AIの活用事例と風土醸成の事例の共有</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">  目的： 「現在地」と「今後進むべき方向」を把握する</div>
<div class="ppt-p" style="font-size:40.9px">  目標： 情報共有を通して、組織で使えるアイデアや</div>
<div class="ppt-p" style="font-size:40.9px">　　　　　ヒントを見つけて頂く</div>
</div>
<div class="ppt-box" style="left:7.988%;top:61.833%;width:76.066%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">Session 2: 大学DXの要素と横展開の価値</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:90.519%;top:92.685%;width:7.133%;height:5.325%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<div class="ppt-box" style="left:20.793%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">インタラクティブ・プレゼン</div>
</div>
<img class="ppt-img" style="left:78.725%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig13-img.png" />
<img class="ppt-img" style="left:84.429%;top:80.057%;width:4.341%;height:7.717%" src="./src/fig14-img.png" />
<div class="ppt-box" style="left:3.923%;top:11.726%;width:92.152%;height:43.243%">
<div class="ppt-p" style="font-size:44.4px"> インタラクションツール Slidoにアクセスして下さい</div>
<div class="ppt-p" style="font-size:40.9px">　　URLを配布したり、質問やアンケートをとったりします</div>
<div class="ppt-p" style="font-size:40.9px">    お名前などの個人情報の入力は禁止です</div>
<div class="ppt-p" style="font-size:40.9px">　　所属組織の意見ではなく、個人としてご記入下さい</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">　　答えた内容は、匿名で反映されます。</div>
</div>
<img class="ppt-img" style="left:51.488%;top:74.953%;width:35.943%;height:8.102%" src="./src/fig15-img.png" />
<div class="ppt-box" style="left:50.01%;top:89.555%;width:42.9%;height:6.282%">
<div class="ppt-p" style="font-size:21.3px">https://app.sli.do/event/626s4pbDxme1HR9ezTa9H2</div>
</div>
<div class="ppt-box" style="left:4.538%;top:66.028%;width:16.253%;height:8.976%">
<div class="ppt-p" style="font-size:37.3px">スマホから</div>
</div>
<div class="ppt-box" style="left:36.438%;top:66.028%;width:15.502%;height:8.976%">
<div class="ppt-p" style="font-size:37.3px">PCから</div>
</div>
<div class="ppt-box" style="left:47.044%;top:66.956%;width:47.818%;height:7.781%">
<div class="ppt-p" style="font-size:30.2px">方法1 Google検索「Slido」→コード入力</div>
</div>
<div class="ppt-box" style="left:47.044%;top:83.732%;width:41.017%;height:7.781%">
<div class="ppt-p" style="font-size:30.2px">方法2 直接リンク</div>
</div>
<div class="ppt-box" style="left:74.678%;top:75.793%;width:11.421%;height:6.882%">
<div class="ppt-p">1134033</div>
</div>
<img class="ppt-img" style="left:15.638%;top:74.656%;width:10.417%;height:18.519%" src="./src/fig16-img.png" />
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">1-1: 大学契約下/データ保護で使える AIは?</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig17-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig18-img.png" />
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig19-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">1-2: 大学契約下でiPaaSの</div>
<div class="ppt-p" style="font-size:64.0px">中核になるのは？</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig20-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig21-img.png" />
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig22-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig23-img.png" />
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">1-3: 大学の生成 AI の利活用ポリシーであるのは？</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig24-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig25-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig26-img.png" />
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">1-4: 生成AIを大学の業務・授業の関係で使う頻度は？</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig27-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig28-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">橋口さんの発表の振り返り</div>
</div>
<div class="ppt-box" style="left:5.866%;top:84.075%;width:91.608%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">大学とAIは親和的：要素技術が揃い民主化された今がチャンス</div>
</div>
<div class="ppt-box" style="left:8.173%;top:9.376%;width:31.388%;height:58.874%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">DX推進の3つの柱</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">①基盤整備</div>
<div class="ppt-p" style="font-size:26.7px">　 機密情報の入力可</div>
<div class="ppt-p" style="font-size:26.7px">   プラットフォーム</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">②体制整備</div>
<div class="ppt-p" style="font-size:26.7px">　 AI CoE &amp; 教職協働</div>
<div class="ppt-p" style="font-size:26.7px">　 研修・スキル形成・風土</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">③ツール導入</div>
<div class="ppt-p" style="font-size:26.7px">   iPaaSほか</div>
</div>
<div class="ppt-box" style="left:60.44%;top:9.376%;width:31.388%;height:58.874%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">課題解決領域</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">①情報集約・可視化</div>
<div class="ppt-p" style="font-size:26.7px">　 KPI、経営財務指標、<br>　 Enrollment Management</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">②事務作業</div>
<div class="ppt-p" style="font-size:32.0px">　 報告書作成などの定型業務</div>
<div class="ppt-p" style="font-size:26.7px">　　n8nなどでの自動化</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:32.0px">③学生支援・広報</div>
<div class="ppt-p" style="font-size:26.7px">   個別最適な支援・発信</div>
</div>
<div class="ppt-box" style="left:40.218%;top:33.33%;width:19.564%;height:15.264%">
<div class="ppt-p" style="font-size:23.1px">① データ管理変革</div>
<div class="ppt-p" style="font-size:23.1px">　ローコンテキストで</div>
<div class="ppt-p" style="font-size:23.1px">　構造化・標準化</div>
</div>
<div class="ppt-box" style="left:40.218%;top:52.242%;width:19.564%;height:15.264%">
<div class="ppt-p" style="font-size:23.1px">② 業界での横連携</div>
<div class="ppt-p" style="font-size:23.1px">　改善事例共有</div>
<div class="ppt-p" style="font-size:23.1px">　システムの共通化</div>
</div>
<div class="ppt-box" style="left:5.866%;top:73.599%;width:90.207%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">変化：クラウド/iPaaS/AIで、非常に安くPoCし、横展開可能</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">2-1: 大学全体や事務組織内での生成 AI 活用と印象/結果や課題感を教えて下さい。(5分)</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig29-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig30-img.png" />
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig31-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">千葉大学での取り組み事例①</div>
</div>
<img class="ppt-img" style="left:2.811%;top:9.496%;width:34.141%;height:88.158%" src="./src/fig32-img.png" />
<div class="ppt-box" style="left:52.346%;top:10.382%;width:43.225%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">AIを活用する風土づくり</div>
</div>
<div class="ppt-box" style="left:39.711%;top:10.887%;width:11.027%;height:7.635%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">環境</div>
</div>
<div class="ppt-box" style="left:40.384%;top:22.274%;width:53.209%;height:17.358%">
<div class="ppt-p" style="font-size:40.9px">対象：大学院生 + 教職員 (初心者)</div>
<div class="ppt-p" style="font-size:40.9px">　60-70名程 + 事後で映像配信</div>
</div>
<div class="ppt-box" style="left:43.495%;top:44.448%;width:7.244%;height:6.159%">
<div class="ppt-p" style="font-size:26.8px;text-align:center">講義</div>
</div>
<div class="ppt-box" style="left:64.519%;top:44.448%;width:7.244%;height:6.159%">
<div class="ppt-p" style="font-size:26.8px;text-align:center">体験</div>
</div>
<div class="ppt-box" style="left:81.986%;top:44.448%;width:13.314%;height:6.159%">
<div class="ppt-p" style="font-size:26.8px;text-align:center">議論・座談会</div>
</div>
<div class="ppt-box" style="left:37.341%;top:39.632%;width:18.291%;height:4.794%">
<div class="ppt-p" style="font-size:18.7px;text-align:center">最初の15分</div>
</div>
<div class="ppt-box" style="left:57.418%;top:39.632%;width:11.906%;height:4.794%">
<div class="ppt-p" style="font-size:18.7px;text-align:center">真ん中の15分</div>
</div>
<div class="ppt-box" style="left:78.018%;top:39.632%;width:11.906%;height:4.794%">
<div class="ppt-p" style="font-size:18.7px;text-align:center">最後の15分</div>
</div>
<img class="ppt-img" style="left:38.836%;top:71.728%;width:22.329%;height:22.305%" src="./src/fig33-img.png" />
<div class="ppt-box" style="left:78.153%;top:56.991%;width:20.945%;height:19.749%">
<div class="ppt-p" style="font-size:32.0px">「触ってみる」</div>
<div class="ppt-p" style="font-size:32.0px">「みんなで試す」</div>
<div class="ppt-p" style="font-size:32.0px">「反応を見る」</div>
</div>
<div class="ppt-box" style="left:79.952%;top:83.921%;width:15.988%;height:14.366%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">概ね好評</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">教職員多数</div>
</div>
<img class="ppt-img" style="left:46.067%;top:51.961%;width:24.794%;height:24.779%" src="./src/fig34-img.png" />
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:15.524%;top:8.375%;width:82.139%;height:7.781%">
<div class="ppt-p" style="font-size:30.2px;text-align:center">生成AI活用講座 / Hands-on Generative AI Workshop</div>
</div>
<img class="ppt-img" style="left:34.893%;top:23.943%;width:24.388%;height:64.852%" src="./src/fig35-img.png" />
<div class="ppt-box" style="left:33.514%;top:16.999%;width:27.149%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">生成AIアプリを作ってみる</div>
</div>
<div class="ppt-box" style="left:3.881%;top:16.999%;width:27.149%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">大規模言語モデルを知る</div>
</div>
<img class="ppt-img" style="left:8.566%;top:23.943%;width:17.109%;height:64.852%" src="./src/fig36-img.png" />
<div class="ppt-box" style="left:65.584%;top:16.999%;width:27.149%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">AIとの関わり方を考える</div>
</div>
<div class="ppt-box" style="left:67.171%;top:23.752%;width:17.946%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">AIリテラシ/倫理</div>
</div>
<div class="ppt-box" style="left:67.171%;top:67.222%;width:17.946%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">レポート</div>
</div>
<div class="ppt-box" style="left:67.046%;top:29.61%;width:20.505%;height:24.602%">
<div class="ppt-p" style="font-size:22.0px">・人間中心のAI社会原則</div>
<div class="ppt-p" style="font-size:22.0px">・安全性</div>
<div class="ppt-p" style="font-size:22.0px">・プライシー</div>
<div class="ppt-p" style="font-size:22.0px">・透明性</div>
<div class="ppt-p" style="font-size:22.0px">・公平性</div>
<div class="ppt-p" style="font-size:22.0px">・説明可能性</div>
</div>
<div class="ppt-box" style="left:67.046%;top:73.208%;width:20.505%;height:16.139%">
<div class="ppt-p" style="font-size:20.4px">・AIの活用例</div>
<div class="ppt-p" style="font-size:20.4px"> →企業での活用例を調査</div>
<div class="ppt-p" style="font-size:20.4px">・生成AIの自分なりの説明</div>
<div class="ppt-p" style="font-size:20.4px">・AIとの関わり方レポート</div>
</div>
<div class="ppt-box" style="left:67.171%;top:53.438%;width:17.946%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">テスト</div>
</div>
<div class="ppt-box" style="left:67.171%;top:60.116%;width:17.946%;height:6.877%">
<div class="ppt-p" style="font-size:26.7px">グループワーク</div>
</div>
<div class="ppt-box" style="left:8.123%;top:8.827%;width:9.177%;height:6.877%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">環境</div>
</div>
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">千葉大学での取り組み事例②</div>
</div>
<div class="ppt-box" style="left:4.016%;top:90.519%;width:91.969%;height:8.976%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">AIツールを作れる学生の育成 → 学生参画型のFD?</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:15.524%;top:8.375%;width:82.139%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">職務を越えたディスカッション・ユースケースの洗い出し</div>
</div>
<div class="ppt-box" style="left:3.552%;top:8.375%;width:17.349%;height:7.781%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">ボトムアップ</div>
</div>
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">千葉大学での取り組み事例③</div>
</div>
<div class="ppt-box" style="left:4.016%;top:87.631%;width:91.969%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">ボトムアップから、業務フローと体験を少しずつ変えていく</div>
</div>
<div class="ppt-box" style="left:54.651%;top:71.778%;width:39.032%;height:13.467%">
<div class="ppt-p" style="font-size:32.0px">教職協働での議論: AI CoE的？</div>
<div class="ppt-p" style="font-size:32.0px"> →自分が動くことで情報が集約</div>
</div>
<div class="ppt-box" style="left:54.651%;top:17.034%;width:36.437%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">AIをもちいた概念図の作成</div>
</div>
<img class="ppt-img" style="left:55.776%;top:24.302%;width:42.534%;height:42.644%" src="./src/fig37-img.png" />
<div class="ppt-box" style="left:3.552%;top:17.034%;width:44.449%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">Difyを説明後、ニーズの把握 (例)</div>
</div>
<div class="ppt-box" style="left:4.738%;top:24.196%;width:49.144%;height:61.05%">
<div class="ppt-p" style="font-size:21.3px">◆入力：シラバスの文字情報</div>
<div class="ppt-p" style="font-size:21.3px">    出力：購入必要な図書のISBN/価格・著者名</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:21.3px">◆現行のフロー</div>
<div class="ppt-p" style="font-size:21.3px">① シラバスデータ（csv）を入手</div>
<div class="ppt-p" style="font-size:21.3px">② 「教科書」「参考書」欄に書かれている図書の情報を確認</div>
<div class="ppt-p" style="font-size:21.3px">③  シラバスにあるデータの欠け/ISBNを補完</div>
<div class="ppt-p" style="font-size:21.3px">④ 目録で重複調査</div>
<div class="ppt-p" style="font-size:21.3px">⑤ 所蔵のない図書・最新版が刊行されている図書を購入</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:21.3px">◆②に記載されている情報</div>
<div class="ppt-p" style="font-size:21.3px">・ISBNが明記されているかどうかも教員次第。</div>
<div class="ppt-p" style="font-size:21.3px">・記載されているタイトル等に誤りがある場合も多い。</div>
<div class="ppt-p" style="font-size:21.3px">・「適宜指示」など図書情報以外の文言も含まれる。</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:21.3px">※昨年度：全◯◯件 / 1件あたり平均〇〇分</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:67.89%;top:69.514%;width:5.351%;height:3.995%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<img class="ppt-img" style="left:1.25%;top:9.516%;width:72.564%;height:85.694%" src="./src/fig38-img.png" />
<div class="ppt-box" style="left:66.034%;top:41.285%;width:33.967%;height:46.684%">
<div class="ppt-p" style="font-size:37.3px">AIとともにある時代、</div>
<div class="ppt-p" style="font-size:37.3px">どのように学ぶか、</div>
<div class="ppt-p" style="font-size:37.3px">学長も教員も学生も、</div>
<div class="ppt-p" style="font-size:37.3px">話す場を作る</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:37.3px">→問題提起/MITなど<br>　でも実施</div>
</div>
<div class="ppt-box" style="left:18.777%;top:93.58%;width:58.566%;height:5.984%">
<div class="ppt-p" style="font-size:19.6px">https://chibadaipress.chiba-u.jp/information/ai_meet/</div>
</div>
<div class="ppt-box" style="left:66.033%;top:30.434%;width:17.349%;height:7.781%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">トップダウン</div>
</div>
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">千葉大学での取り組み事例④</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<img class="ppt-img" style="left:30.22%;top:37.742%;width:19.301%;height:15.005%" src="./src/fig39-img.png" />
<div class="ppt-box" style="left:15.524%;top:8.375%;width:82.139%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">クラウド・AI技術の学び直し</div>
</div>
<div class="ppt-box" style="left:3.552%;top:8.375%;width:17.349%;height:7.781%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">スキル</div>
</div>
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">個人的に行っていること①</div>
</div>
<img class="ppt-img" style="left:4.928%;top:25.128%;width:32.337%;height:11.988%" src="./src/fig40-img.png" />
<img class="ppt-img" style="left:5.568%;top:38.372%;width:7.731%;height:13.744%" src="./src/fig41-img.png" />
<img class="ppt-img" style="left:15.169%;top:38.372%;width:7.731%;height:13.744%" src="./src/fig42-img.png" />
<img class="ppt-img" style="left:23.868%;top:36.738%;width:9.57%;height:17.013%" src="./src/fig43-img.png" />
<div class="ppt-box" style="left:3.552%;top:16.854%;width:16.401%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">資格の取得</div>
</div>
<div class="ppt-box" style="left:2.945%;top:56.23%;width:49.245%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">Google Career Launchpadの提供</div>
</div>
<div class="ppt-box" style="left:5.163%;top:63.025%;width:44.81%;height:26.935%">
<div class="ppt-p" style="font-size:23.1px">Google DeepMind AI Research Foundations</div>
<div class="ppt-p" style="font-size:23.1px">Cloud Cybersecurity Certificate</div>
<div class="ppt-p" style="font-size:23.1px">Cloud Data Analytics Certificate</div>
<div class="ppt-p" style="font-size:23.1px">Cloud Engineering Certificate</div>
<div class="ppt-p" style="font-size:23.1px">Cloud Generative AI Leader</div>
<div class="ppt-p" style="font-size:23.1px">Cloud Digital Leader etc…</div>
</div>
<div class="ppt-box" style="left:54.061%;top:16.854%;width:40.115%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">Skillsでの学習</div>
</div>
<div class="ppt-box" style="left:53.454%;top:56.23%;width:43.602%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px">目標：トレーナー/イノベーター資格へ</div>
</div>
<img class="ppt-img" style="left:56.941%;top:64.094%;width:40.115%;height:22.564%" src="./src/fig44-img.png" />
<img class="ppt-img" style="left:53.61%;top:24.451%;width:13.924%;height:30.015%" src="./src/fig45-img.png" />
<img class="ppt-img" style="left:68.868%;top:24.319%;width:28.794%;height:29.31%" src="./src/fig46-img.png" />
<div class="ppt-box" style="left:6.496%;top:90.44%;width:87.008%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">どこで何を学べるかを調べ、仲間を作り、学習する</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:15.524%;top:8.375%;width:82.139%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">民間エンジニアとの教員支援ツールの構築と研究</div>
</div>
<div class="ppt-box" style="left:3.552%;top:8.375%;width:17.349%;height:7.781%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">ボトムアップ</div>
</div>
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">個人的に行っていること②</div>
</div>
<div class="ppt-box" style="left:6.496%;top:90.44%;width:87.008%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">大学教員が、同じ時間でもっと優れた授業を準備する手助けをしたい！</div>
</div>
<img class="ppt-img" style="left:2.435%;top:29.533%;width:95.13%;height:57.566%" src="./src/fig47-img.png" />
<div class="ppt-box" style="left:9.235%;top:16.726%;width:87.008%;height:13.467%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">狙い：時短 × 授業高度化 ×　学生のUX向上</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">AIエージェントで授業計画、形成的評価、分析、授業RAGまでを自動化</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">国内での研修状況</div>
</div>
<div class="ppt-box" style="left:3.605%;top:9.126%;width:62.129%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">2024年度のFDの話題の集計 (田川 2025)</div>
</div>
<img class="ppt-img" style="left:5.873%;top:18.406%;width:86.325%;height:60.697%" src="./src/fig48-img.png" />
<div class="ppt-box" style="left:5.768%;top:81.759%;width:88.763%;height:15.561%">
<div class="ppt-p" style="font-size:35.6px">10 トピック、高いニーズ、肯定的 / 活用関連の内容が目立つ</div>
<div class="ppt-p" style="font-size:35.6px">生成AIの禁止・否定から、共存・活用への転換が見られる(AIの環境化)</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">北米での横連携の事例</div>
</div>
<img class="ppt-img" style="left:1.437%;top:29.691%;width:50.317%;height:69.791%" src="./src/fig49-img.png" />
<div class="ppt-box" style="left:3.605%;top:9.126%;width:45.007%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">AAC&amp;U (アメリカ大学カレッジ協会)</div>
</div>
<div class="ppt-box" style="left:2.394%;top:15.326%;width:89.678%;height:14.366%">
<div class="ppt-p" style="font-size:32.0px">「2025–2026年度 AI・教育法・カリキュラムに関するインスティテュート」<br> 参加大学の生成AI活用に関連する目標調査 Bowen &amp; Watson (2025)</div>
</div>
<div class="ppt-box" style="left:27.689%;top:77.267%;width:24.065%;height:17.055%">
<div class="ppt-p" style="font-size:26.7px;text-align:right">n = 191</div>
<div class="ppt-p" style="font-size:26.7px;text-align:right">1年間で実施したいこと</div>
<div class="ppt-p" style="font-size:26.7px;text-align:right">上位3-5個を提示</div>
</div>
<div class="ppt-box" style="left:57.147%;top:40.443%;width:37.1%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">北米では、横連携と支援の例あり</div>
</div>
<div class="ppt-box" style="left:57.147%;top:56.086%;width:37.1%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">業務改善より教育改革が急務</div>
</div>
<div class="ppt-box" style="left:57.147%;top:72.376%;width:37.1%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">管理・運営の効率化は今後？</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">ボトムアップDXの課題感の例</div>
</div>
<img class="ppt-img" style="left:2.113%;top:8.984%;width:51.798%;height:40.841%" src="./src/fig50-img.png" />
<div class="ppt-box" style="left:54.228%;top:31.545%;width:45.771%;height:9.577%">
<div class="ppt-p" style="font-size:17.8px">CEOs Say AI Is Making Work More Efficient. Employees Tell a Different Story. - Jan. 21, 2026 WSJ</div>
</div>
<div class="ppt-box" style="left:53.912%;top:14.417%;width:47.661%;height:17.953%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">トップダウンで語られるAIの有用性と、</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">現場での感覚が非常に乖離している</div>
<div class="ppt-p" style="font-size:26.7px;text-align:center">現場：4割はAIは時短ではない感覚！</div>
</div>
<div class="ppt-box" style="left:55.808%;top:9.126%;width:25.364%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">グローバルな共通課題</div>
</div>
<div class="ppt-box" style="left:54.856%;top:40.419%;width:45.771%;height:7.483%">
<div class="ppt-p" style="font-size:28.4px">→ AIツールを配るだけでは難しい?</div>
</div>
<div class="ppt-box" style="left:68.932%;top:52.362%;width:25.364%;height:4.62%">
<div class="ppt-p" style="font-size:32.0px">検証マインドの不足</div>
</div>
<div class="ppt-box" style="left:68.932%;top:57.28%;width:24.354%;height:18.852%">
<div class="ppt-p" style="font-size:32.0px">小さく初めて素早く改善するPoCが根付かず、SE任せ。</div>
</div>
<div class="ppt-box" style="left:5.704%;top:52.362%;width:25.364%;height:4.62%">
<div class="ppt-p" style="font-size:32.0px">完璧主義の罠</div>
</div>
<div class="ppt-box" style="left:5.704%;top:57.28%;width:27.822%;height:18.852%">
<div class="ppt-p" style="font-size:32.0px">誤った回答生成を許容しないと活用は無理。</div>
<div class="ppt-p" style="font-size:32.0px">改善出来ることは重要。</div>
</div>
<div class="ppt-box" style="left:37.318%;top:52.362%;width:25.364%;height:4.62%">
<div class="ppt-p" style="font-size:32.0px">インセンティブの不足</div>
</div>
<div class="ppt-box" style="left:37.318%;top:57.28%;width:25.364%;height:18.852%">
<div class="ppt-p" style="font-size:32.0px">挑む報酬よりも、<br>問題がおきて罰されるリスクの方が大。</div>
</div>
<div class="ppt-box" style="left:2.636%;top:82.345%;width:94.728%;height:15.141%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">トップダウンで価値を伝え、挑戦を推奨することに加え、</div>
<div class="ppt-p" style="font-size:40.9px;text-align:center">制度や研修といった環境の整備も必要では?</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">ボトムアップDXの課題感の例</div>
</div>
<div class="ppt-box" style="left:0.87%;top:8.341%;width:44.18%;height:8.078%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">生成AIの関連の影響範囲</div>
</div>
<div class="ppt-box" style="left:1.077%;top:22.118%;width:10.525%;height:13.467%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">マクロ</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">(全学)</div>
</div>
<div class="ppt-box" style="left:1.077%;top:71.116%;width:10.525%;height:13.467%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">ミクロ</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">(授業)</div>
</div>
<div class="ppt-box" style="left:80.396%;top:91.033%;width:18.222%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">クリエイティブ</div>
</div>
<div class="ppt-box" style="left:4.192%;top:91.033%;width:16.709%;height:8.078%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">事務/タスク</div>
</div>
<div class="ppt-box" style="left:44.345%;top:79.116%;width:12.034%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">フィード<br>バック</div>
</div>
<div class="ppt-box" style="left:48.185%;top:43.126%;width:9.846%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">学生<br>相談</div>
</div>
<div class="ppt-box" style="left:29.484%;top:18.844%;width:14.295%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">iPaaS + AI</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">業務改革</div>
</div>
<div class="ppt-box" style="left:83.359%;top:67.577%;width:14.295%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">授業支援</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">チューター</div>
</div>
<div class="ppt-box" style="left:63.497%;top:30.372%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">ポリシー</div>
</div>
<div class="ppt-box" style="left:12.76%;top:30.372%;width:20.4%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">教学マネジメント</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">質保証/ with AI</div>
</div>
<div class="ppt-box" style="left:45.429%;top:18.844%;width:15.003%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">データ中心の</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">記録改革</div>
</div>
<div class="ppt-box" style="left:77.253%;top:30.372%;width:20.4%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">個別最適で在学中支援するアプリ</div>
</div>
<div class="ppt-box" style="left:77.253%;top:79.116%;width:20.4%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px">生成AIと教員mixの</div>
<div class="ppt-p" style="font-size:21.3px">授業設計</div>
</div>
<div class="ppt-box" style="left:60.278%;top:79.116%;width:14.295%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">課題・教材利用</div>
</div>
<div class="ppt-box" style="left:1.077%;top:44.416%;width:10.525%;height:13.467%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">ミドル</div>
<div class="ppt-p" style="font-size:32.0px;text-align:center">(課程)</div>
</div>
<div class="ppt-box" style="left:75.485%;top:54.213%;width:22.162%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">カリキュラムへの</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">生成AIの統合</div>
</div>
<div class="ppt-box" style="left:34.26%;top:54.359%;width:9.846%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">科目</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">検索</div>
</div>
<div class="ppt-box" style="left:62.829%;top:54.548%;width:9.846%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">専門AI <br>教科書</div>
</div>
<div class="ppt-box" style="left:80.396%;top:18.844%;width:17.257%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">教育データ活用</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">一生涯 + 2次</div>
</div>
<div class="ppt-box" style="left:34.521%;top:43.369%;width:9.846%;height:8.976%">
<div class="ppt-p" style="font-size:19.6px;text-align:center">AIの</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">FD/SD</div>
</div>
<div class="ppt-box" style="left:60.14%;top:43.126%;width:15.003%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">時間主義から<br>達成主義へ</div>
</div>
<div class="ppt-box" style="left:51.04%;top:54.359%;width:10.525%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">AI<br>リテラシ</div>
</div>
<div class="ppt-box" style="left:42.263%;top:67.577%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">採点利用</div>
</div>
<div class="ppt-box" style="left:12.76%;top:54.744%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">窓口DX</div>
</div>
<div class="ppt-box" style="left:62.829%;top:18.844%;width:16.03%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">研究クラウド</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">・研究AI</div>
</div>
<div class="ppt-box" style="left:12.83%;top:43.318%;width:15.003%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">データ活用</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">ポリシー</div>
</div>
<div class="ppt-box" style="left:67.504%;top:67.577%;width:10.525%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Writing</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">支援</div>
</div>
<div class="ppt-box" style="left:77.253%;top:42.883%;width:20.4%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">学び方・卒業後の</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">ロールモデル提示</div>
</div>
<div class="ppt-box" style="left:54.883%;top:67.577%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">授業評価</div>
</div>
<div class="ppt-box" style="left:12.76%;top:79.116%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">教務作業<br>自動化</div>
</div>
<div class="ppt-box" style="left:26.185%;top:78.74%;width:16.03%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">シラバス・</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">授業案自動化</div>
</div>
<div class="ppt-box" style="left:12.83%;top:18.844%;width:15.003%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">業務フロー</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">改善</div>
</div>
<div class="ppt-box" style="left:49.908%;top:9.841%;width:9.846%;height:5.325%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">普及済</div>
</div>
<div class="ppt-box" style="left:61.818%;top:9.841%;width:9.846%;height:5.325%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">普及中</div>
</div>
<div class="ppt-box" style="left:73.728%;top:9.841%;width:9.846%;height:5.325%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">黎明期</div>
</div>
<div class="ppt-box" style="left:85.638%;top:9.841%;width:9.846%;height:5.325%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">まだ</div>
</div>
<div class="ppt-box" style="left:12.83%;top:67.577%;width:11.647%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">AI活用<br>反転授業</div>
</div>
<div class="ppt-box" style="left:34.26%;top:30.372%;width:12.375%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">KPI/</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">経営支援</div>
</div>
<div class="ppt-box" style="left:26.337%;top:67.577%;width:9.846%;height:8.976%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">倫理的</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">確認</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">前半のまとめ</div>
</div>
<div class="ppt-box" style="left:7.988%;top:65.767%;width:90.971%;height:17.358%">
<div class="ppt-p" style="font-size:40.9px">一人が変われば、動くことも多い時期です。</div>
<div class="ppt-p" style="font-size:40.9px">皆様の大学で活用できるアイデアが見つかると嬉しいです。</div>
</div>
<div class="ppt-box" style="left:7.988%;top:84.19%;width:76.066%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">Session 2: 大学DXの要素と横展開の価値</div>
</div>
<div class="ppt-box" style="left:6.944%;top:47.107%;width:86.207%;height:18.851%">
<div class="ppt-p" style="font-size:32.0px">まとめ：AIの大学への影響は甚大、国内外で様々な取組みがある。</div>
<div class="ppt-p" style="font-size:32.0px">　　　　　トップダウン・ボトムアップ・環境の側面で、取り組める事がある。</div>
<div class="ppt-p" style="font-size:32.0px">　　　　　一方、まだまだ手つかずの領域も多く、今後の展開が期待される。</div>
</div>
<div class="ppt-box" style="left:9.654%;top:9.209%;width:76.066%;height:37.708%">
<div class="ppt-p" style="font-size:40.9px">Session 1: AIの活用事例と風土醸成の事例の共有</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">  <br>  目的： 「現在地」と「今後進むべき方向」を把握する</div>
<div class="ppt-p" style="font-size:40.9px">  目標： 情報共有を通して、組織で使えるアイデアや</div>
<div class="ppt-p" style="font-size:40.9px">　　　　　ヒントを見つけて頂く</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">インターミッション</div>
</div>
<div class="ppt-box" style="left:54.651%;top:9.917%;width:44.803%;height:7.18%">
<div class="ppt-p" style="font-size:32.0px">(Bowen &amp; Watson, AAC&amp;U 2025)</div>
</div>
<div class="ppt-box" style="left:8.614%;top:17.097%;width:78.934%;height:7.18%">
<div class="ppt-p" style="font-size:32.0px;text-align:center">高等教育における生成AI活用の事例・プロンプト集</div>
</div>
<div class="ppt-box" style="left:24.712%;top:33.889%;width:43.107%;height:56.255%">
<div class="ppt-p" style="font-size:18.0px">授業での活用:</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>AIをリアルタイムの議論のサポートとして活用</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>AIを用いた模擬面接や役割演習の実施</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>AIを使った個別化された学習支援とフィードバック提供</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>クラスディスカッションでのAIの活用<br>(例:反対意見の提示役として)</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>授業内での小テストやミニエッセイの実施</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:18.0px">課題設計:</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>個人の経験や地域に基づいた課題の作成</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>プロセスを重視した段階的な課題設計</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>ピアレビューを組み込んだ課題</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>リアルタイムの出来事についての分析課題</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>フィールドワークやインタビューを含む課題</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>グループワークやコラボレーション課題</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>アノテーション(注釈付け)を活用した読解課題</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>マルチメディア(ビデオ、ポッドキャスト)を使用した課題</div>
<div class="ppt-p">&#8203;</div>
</div>
<div class="ppt-box" style="left:3.299%;top:24.277%;width:98.917%;height:7.18%">
<div class="ppt-p" style="font-size:32.0px">AIを活用しながら、人間の創造性や批判的思考を重視し、学習効果を高める大学へ</div>
</div>
<div class="ppt-box" style="left:64.938%;top:33.889%;width:36.28%;height:47.157%">
<div class="ppt-p" style="font-size:18.0px">評価方法:</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>ルーブリックを使用した評価</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>プロセスの評価(draftsの提出など)</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>AIとの対話記録の提出と評価</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>個別化された評価基準の設定</div>
<div class="ppt-p" style="font-size:18.0px"><span class="ppt-bu">•</span>即時フィードバックの提供</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:18.0px">特徴的な課題例:</div>
<div class="ppt-p" style="font-size:18.0px">AIを使って生成した文章の編集・改善</div>
<div class="ppt-p" style="font-size:18.0px">AIの出力に対する事実確認演習</div>
<div class="ppt-p" style="font-size:18.0px">異なる観客向けの文章作成練習</div>
<div class="ppt-p" style="font-size:18.0px">ケーススタディやアドベンチャーゲームの作成</div>
<div class="ppt-p" style="font-size:18.0px">グラフィックノベルの制作</div>
<div class="ppt-p" style="font-size:18.0px">プレゼンテーションの準備と実施</div>
</div>
<div class="ppt-box" style="left:-13.741%;top:8.42%;width:87.244%;height:10.172%">
<div class="ppt-p" style="font-size:49.8px;text-align:center">Teaching with AI、翻訳中！</div>
</div>
<img class="ppt-img" style="left:2.443%;top:32.661%;width:20.042%;height:55.042%" src="./src/fig51-img.png" />
<div class="ppt-box" style="left:61.17%;top:89.595%;width:38.832%;height:7.18%">
<div class="ppt-p" style="font-size:32.0px">技術評論社から出版予定です！</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">後半</div>
</div>
<div class="ppt-box" style="left:4.6%;top:11.292%;width:90.801%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">20分×2テーマ：合計40分の2部構成</div>
</div>
<div class="ppt-box" style="left:7.988%;top:21.767%;width:76.066%;height:33.514%">
<div class="ppt-p" style="font-size:40.9px">Session 1: AIの活用事例と風土醸成の事例の共有</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">  目的： 「現在地」と「今後進むべき方向」を把握する</div>
<div class="ppt-p" style="font-size:40.9px">  目標： 情報共有を通して、組織で使えるアイデアや</div>
<div class="ppt-p" style="font-size:40.9px">　　　　　ヒントを見つけて頂く</div>
</div>
<div class="ppt-box" style="left:7.988%;top:61.833%;width:81.877%;height:34.716%">
<div class="ppt-p" style="font-size:40.9px">Session 2: 大学DXの要素と横展開の価値</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">  目的： AI時代のDXにおける横連携の重要性を考える</div>
<div class="ppt-p" style="font-size:40.9px">  目標： 大学DXの概要を俯瞰する</div>
<div class="ppt-p" style="font-size:40.9px">           横連携の重要性を認識頂き、機運が高まる</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig52-img.png" />
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">3 大学で感じるDXの課題感を選んで下さい(3つまで複数回答可)</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig53-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig54-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">課題感は横並び？</div>
</div>
<div class="ppt-box" style="left:3.605%;top:9.126%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">2025 AI Landscape Study - EDUCAUSE リンク</div>
</div>
<img class="ppt-img" style="left:2.438%;top:30.787%;width:46.534%;height:66.928%" src="./src/fig55-img.png" />
<div class="ppt-box" style="left:2.438%;top:14.177%;width:94.416%;height:17.358%">
<div class="ppt-p" style="font-size:40.9px">大学などの高等教育機関がAI導入を進めるにあたり、</div>
<div class="ppt-p" style="font-size:40.9px">    どのような施策を戦略に盛り込んでいるかを調査した結果</div>
</div>
<div class="ppt-box" style="left:35.998%;top:84.909%;width:11.506%;height:8.381%">
<div class="ppt-p" style="font-size:28.4px">n =673</div>
</div>
<div class="ppt-box" style="left:57.147%;top:42.216%;width:38.929%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">課題感は大学を越えて同じでは？</div>
</div>
<div class="ppt-box" style="left:57.147%;top:57.859%;width:37.1%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">車輪の再発明をしても仕方ない</div>
</div>
<div class="ppt-box" style="left:57.147%;top:74.149%;width:37.1%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">コラボ強化は40%が認識</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">大学DXの全体像</div>
</div>
<div class="ppt-box" style="left:3.605%;top:9.126%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">2024-2026 早稲田大学 情報化重点施策 リンク</div>
</div>
<img class="ppt-img" style="left:3.098%;top:16.402%;width:91.152%;height:74.615%" src="./src/fig56-img.png" />
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">大学DXの全体像</div>
</div>
<div class="ppt-box" style="left:3.605%;top:9.126%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">2024-2026 早稲田大学 情報化重点施策 リンク</div>
</div>
<table class="ppt-tbl" style="left:3.605%;top:17.387%;width:32.808%;height:58.326%">
<tr>
<th>目標</th>
<th>重点施策</th>
</tr>
<tr>
<td>1 教育DX推進</td>
<td>(1) 学修成果・学修過程の可視化と教育のパーソナライズ化促進に向けた環境整備</td>
</tr>
<tr>
<td></td>
<td>(2) 学歴証明・学修歴証明のデジタル化と利用促進</td>
</tr>
<tr>
<td></td>
<td>(3) リアルとバーチャルを融合した次世代授業実施環境の整備と教員向け利用促進</td>
</tr>
<tr>
<td></td>
<td>(4) 教育DXを支える教務事務システムの再構築</td>
</tr>
<tr>
<td></td>
<td>(5) 高大連携を加速化する高校教務システムの刷新</td>
</tr>
<tr>
<td>2 研究DX推進</td>
<td>(1) 研究活動を支えるICT基盤整備</td>
</tr>
<tr>
<td>3 大学運営DX推進</td>
<td>(1) エビデンス・分析に基づく大学運営</td>
</tr>
<tr>
<td></td>
<td>(2) 大学業務・諸手続きの電子化・効率化のさらなる推進</td>
</tr>
<tr>
<td></td>
<td>(3) 基盤システムの更新</td>
</tr>
<tr>
<td>4 DX基盤強化</td>
<td>(1) 高品質キャンパスネットワークの構築</td>
</tr>
<tr>
<td></td>
<td>(2) 事業継続性の確保に向けたITインフラのBCP対策の推進</td>
</tr>
<tr>
<td></td>
<td>(3) 多様化するサービス利用に対するゼロトラストセキュリティ対策の推進</td>
</tr>
<tr>
<td></td>
<td>(4) 多様なニーズに対応する統合認証システムの再構築</td>
</tr>
<tr>
<td>5 CX・EX向上</td>
<td>(1) システム・サービスの訴求効果向上</td>
</tr>
<tr>
<td></td>
<td>(2) 利用者支援サービスの充実</td>
</tr>
<tr>
<td></td>
<td>(3) ステークホルダー間のコミュニケーションを活性化する仕組みの検討</td>
</tr>
<tr>
<td>6 情報化推進体制強化</td>
<td>(1) 運用保守業務効率向上と運用コスト削減</td>
</tr>
<tr>
<td></td>
<td>(2) デジタル専門人材の育成</td>
</tr>
<tr>
<td></td>
<td>(3) 利用者のデジタル・リテラシー向上</td>
</tr>
</table>
<div class="ppt-box" style="left:0.0%;top:0.0%;width:32.808%;height:7.781%">
<div class="ppt-p">メソッド部分</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">大学DXの変化</div>
</div>
<div class="ppt-box" style="left:3.605%;top:9.126%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">2024-2026 早稲田大学 情報化重点施策 リンク</div>
</div>
<div class="ppt-box" style="left:12.975%;top:18.693%;width:79.002%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">大学が実現すべきDXの一覧として、芯を捉えている</div>
</div>
<div class="ppt-box" style="left:12.975%;top:46.283%;width:79.002%;height:8.509%">
<div class="ppt-p" style="font-size:32.0px">一方で、AIの技術要素が出揃ったこと+技術民主化で別の方法も出来た</div>
<div class="ppt-p">&#8203;</div>
</div>
<div class="ppt-box" style="left:14.328%;top:28.704%;width:79.003%;height:12.126%">
<div class="ppt-p" style="font-size:32.0px">やれること、目指す方向性はかなりの大学が一致するだろう。</div>
<div class="ppt-p" style="font-size:32.0px">DX計画を策定する上で、非常に参考になる資料。</div>
</div>
<div class="ppt-box" style="left:14.328%;top:56.192%;width:79.003%;height:19.633%">
<div class="ppt-p" style="font-size:32.0px">① 大学の中で、教職員が自ら試せる。</div>
<div class="ppt-p" style="font-size:32.0px">② AIとクラウド技術で汎用的に実現できる場合がある。</div>
<div class="ppt-p" style="font-size:32.0px">③ 共通の基盤を使っていれば、ノウハウ/方法をコピーできる。</div>
</div>
<div class="ppt-box" style="left:10.499%;top:77.223%;width:85.42%;height:16.273%">
<div class="ppt-p" style="font-size:40.9px">個別システムに立脚していたモデルから、</div>
<div class="ppt-p" style="font-size:40.9px">iPaaS、クラウド、AIを元に、汎用的に連携できるモデルへ。</div>
<div class="ppt-p" style="font-size:40.9px">→みんなで進めば、きっと変わる</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">DXの構造</div>
</div>
<img class="ppt-img" style="left:23.001%;top:44.513%;width:70.629%;height:11.9%" src="./src/fig57-img.png" />
<div class="ppt-box" style="left:5.705%;top:11.079%;width:91.722%;height:6.882%">
<div class="ppt-p" style="font-size:40.9px">WHY: ミッションの本質的追求</div>
</div>
<div class="ppt-box" style="left:6.955%;top:19.451%;width:87.356%;height:13.765%">
<div class="ppt-p" style="font-size:40.9px">テクノロジー活用とプロセス変革で、ミッションの本質を<br>捉えかつ新しい価値を実現する　▶ 変わらないために変わり続ける</div>
</div>
<div class="ppt-box" style="left:25.144%;top:46.764%;width:17.917%;height:3.144%">
<div class="ppt-p" style="font-size:18.7px">TOP-DOWN</div>
</div>
<div class="ppt-box" style="left:25.144%;top:50.068%;width:18.812%;height:4.491%">
<div class="ppt-p" style="font-size:26.7px">基盤・方向性</div>
</div>
<div class="ppt-box" style="left:43.957%;top:46.303%;width:48.855%;height:8.976%">
<div class="ppt-p" style="font-size:26.7px">経営層がデジタルの基盤と全学的な変革の方向性を明確に定義し、旗を振る</div>
</div>
<img class="ppt-img" style="left:23.001%;top:58.194%;width:70.629%;height:11.9%" src="./src/fig58-img.png" />
<div class="ppt-box" style="left:25.144%;top:60.445%;width:17.917%;height:3.144%">
<div class="ppt-p" style="font-size:18.7px">BOTTOM-UP</div>
</div>
<div class="ppt-box" style="left:25.144%;top:63.749%;width:18.812%;height:4.491%">
<div class="ppt-p" style="font-size:26.7px">プロセス変革</div>
</div>
<div class="ppt-box" style="left:43.957%;top:60.075%;width:50.354%;height:8.976%">
<div class="ppt-p" style="font-size:26.7px">現場主導で業務プロセスを再構築。データセントリックに転換し、情報の繋がる価値を創出する。</div>
</div>
<div class="ppt-box" style="left:25.139%;top:72.336%;width:17.917%;height:3.144%">
<div class="ppt-p" style="font-size:18.7px">CULTURE &amp; SKILL</div>
</div>
<div class="ppt-box" style="left:25.139%;top:75.641%;width:18.812%;height:4.491%">
<div class="ppt-p" style="font-size:26.7px">風土・スキル形成</div>
</div>
<div class="ppt-box" style="left:43.951%;top:71.875%;width:48.855%;height:8.976%">
<div class="ppt-p" style="font-size:26.7px">PoCを繰り返し、デジタルの特性を理解。小さな前進から変革への意欲を醸成。</div>
</div>
<img class="ppt-img" style="left:34.311%;top:59.706%;width:8.75%;height:4.074%" src="./src/fig59-img.png" />
<div class="ppt-box" style="left:18.505%;top:37.154%;width:74.301%;height:8.976%">
<div class="ppt-p" style="font-size:32.0px">トップダウンで基盤と方向を定め、ボトムアップでプロセスを変える</div>
</div>
<div class="ppt-box" style="left:5.705%;top:36.994%;width:32.808%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">HOW:</div>
</div>
<div class="ppt-box" style="left:5.705%;top:70.907%;width:32.808%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">WHAT:</div>
</div>
<div class="ppt-box" style="left:4.603%;top:84.889%;width:42.083%;height:11.899%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">大学間の横連携</div>
</div>
<div class="ppt-box" style="left:8.707%;top:54.031%;width:14.295%;height:8.976%">
<div class="ppt-p" style="font-size:26.7px;text-align:center">PoCできる</div>
<div class="ppt-p" style="font-size:26.7px;text-align:center">安全な環境</div>
</div>
<div class="ppt-box" style="left:52.861%;top:84.889%;width:42.083%;height:11.899%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">専門人材 (教育テック)</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig60-img.png" />
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">4 生成 AI 活用や大学の DX で取り組んだら面白そうな点を教えて下さい。</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig61-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig62-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">想定される大学の変化</div>
</div>
<div class="ppt-box" style="left:4.958%;top:9.126%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">Skills Firstの時代へ</div>
</div>
<div class="ppt-box" style="left:31.165%;top:8.653%;width:90.459%;height:6.585%">
<div class="ppt-p" style="font-size:17.8px">OECD - Empowering the Workforce in the Context of a Skills-First Approach (2025)</div>
</div>
<div class="ppt-box" style="left:4.958%;top:36.733%;width:76.293%;height:5.051%">
<div class="ppt-p" style="font-size:32.0px">AIが人を教える時代もくる？</div>
</div>
<div class="ppt-box" style="left:8.087%;top:16.739%;width:76.293%;height:19.994%">
<div class="ppt-p" style="font-size:32.0px">2000年まで：学位・学歴重視</div>
<div class="ppt-p" style="font-size:32.0px">2020年まで：スキルのハイブリッド</div>
<div class="ppt-p" style="font-size:32.0px">いまから：スキルのほうが採用に先行する？</div>
<div class="ppt-p">&#8203;</div>
</div>
<div class="ppt-box" style="left:32.207%;top:52.339%;width:40.525%;height:19.994%">
<div class="ppt-p" style="font-size:32.0px">現時点ですでに、自分より、</div>
<div class="ppt-p" style="font-size:32.0px">個別最適な学びを提供？</div>
<div class="ppt-p" style="font-size:32.0px">僕より教えるのがうまい？</div>
</div>
<img class="ppt-img" style="left:10.134%;top:43.752%;width:20.907%;height:37.168%" src="./src/fig63-img.png" />
<div class="ppt-box" style="left:119.532%;top:100.802%;width:4.167%;height:3.109%">
<div class="ppt-p" style="text-align:center">‹#›</div>
</div>
<img class="ppt-img" style="left:61.894%;top:41.532%;width:35.572%;height:40.253%" src="./src/fig64-img.png" />
<div class="ppt-box" style="left:66.692%;top:80.919%;width:19.406%;height:4.958%">
<div class="ppt-p" style="font-size:9.4px">Bloom (1984) Educational Researcher</div>
<div class="ppt-p" style="font-size:9.4px">https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf</div>
</div>
<div class="ppt-box" style="left:7.29%;top:88.081%;width:85.42%;height:7.617%">
<div class="ppt-p" style="font-size:49.8px;text-align:center">大学はいま、転換点にある？</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">大学の変わらぬ価値</div>
</div>
<div class="ppt-box" style="left:11.727%;top:14.269%;width:19.127%;height:9.577%">
<div class="ppt-p" style="font-size:41.7px;text-align:center">研究的価値</div>
</div>
<div class="ppt-box" style="left:41.961%;top:14.269%;width:22.605%;height:9.577%">
<div class="ppt-p" style="font-size:41.7px;text-align:center">講義的な価値</div>
</div>
<div class="ppt-box" style="left:74.486%;top:14.269%;width:20.692%;height:9.577%">
<div class="ppt-p" style="font-size:41.7px;text-align:center">人が集う価値</div>
</div>
<div class="ppt-box" style="left:7.077%;top:6.784%;width:28.428%;height:7.448%">
<div class="ppt-p" style="font-size:29.1px;text-align:center">変わらない</div>
</div>
<div class="ppt-box" style="left:43.958%;top:6.784%;width:18.507%;height:7.448%">
<div class="ppt-p" style="font-size:29.1px;text-align:center">やばい？</div>
</div>
<div class="ppt-box" style="left:76.13%;top:6.784%;width:18.507%;height:7.448%">
<div class="ppt-p" style="font-size:29.1px;text-align:center">変わらない</div>
</div>
<div class="ppt-box" style="left:13.118%;top:26.233%;width:79.695%;height:22.444%">
<div class="ppt-p" style="font-size:40.9px;text-align:center">大学 = 成長を後押しし、安心して失敗出来る場所</div>
<div class="ppt-p" style="font-size:40.9px;text-align:center">良い課題があり、専門家のfeedbackを得られる場所</div>
<div class="ppt-p" style="font-size:40.9px;text-align:center">志をおなじくする仲間に出会える場所</div>
</div>
<table class="ppt-tbl" style="left:74.987%;top:49.331%;width:32.808%;height:58.326%">
<tr>
<th></th>
<th>認知的領域</th>
</tr>
<tr>
<td>高</td>
<td>創造</td>
</tr>
<tr>
<td></td>
<td>評価 </td>
</tr>
<tr>
<td></td>
<td>分析 </td>
</tr>
<tr>
<td></td>
<td>応用</td>
</tr>
<tr>
<td></td>
<td>理解</td>
</tr>
<tr>
<td>低</td>
<td>記憶</td>
</tr>
</table>
<div class="ppt-box" style="left:4.278%;top:77.417%;width:65.604%;height:16.6%">
<div class="ppt-p" style="font-size:41.7px;text-align:center">人が集う価値のある問題に集中するのは、</div>
<div class="ppt-p" style="font-size:41.7px;text-align:center">一つの方向性？</div>
</div>
<div class="ppt-box" style="left:5.623%;top:52.286%;width:64.308%;height:16.6%">
<div class="ppt-p" style="font-size:41.7px;text-align:center">人の発達は変わらないが、</div>
<div class="ppt-p" style="font-size:41.7px;text-align:center">教える事の分業が起きる？</div>
</div>
</div>

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:78.907%;top:7.509%;width:27.356%;height:11.35%">
<div class="ppt-p" style="font-size:21.3px;text-align:center">Do not edit</div>
<div class="ppt-p" style="font-size:21.3px;text-align:center">How to change the design</div>
</div>
<div class="ppt-box" style="left:25.532%;top:25.676%;width:69.606%;height:34.057%">
<div class="ppt-p" style="font-size:64.0px">5: 今後の 10 年先の AI 時代、どんな大学教育を理想に思いますか。未来の大学で、本当に実現したいDXはなんですか？</div>
</div>
<div class="ppt-box" style="left:6.079%;top:84.865%;width:75.988%;height:15.136%">
<div class="ppt-p" style="font-size:21.3px">Presenting with animations, GIFs or speaker notes? Enable our Chrome extension</div>
</div>
<img class="ppt-img" style="left:2.432%;top:90.271%;width:2.432%;height:4.323%" src="./src/fig65-img.png" />
<img class="ppt-img" style="left:86.626%;top:87.029%;width:12.158%;height:10.807%" src="./src/fig66-img.png" />
<img class="ppt-img" style="left:3.647%;top:25.411%;width:19.453%;height:34.583%" src="./src/fig67-img.png" />
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide. -->

---

<!-- _class: ppt -->

<div class="ppt-canvas">
<div class="ppt-box" style="left:20.901%;top:0.591%;width:33.75%;height:5.325%">
<div class="ppt-p" style="text-align:center">まとめ</div>
</div>
<div class="ppt-box" style="left:7.002%;top:78.244%;width:90.971%;height:17.358%">
<div class="ppt-p" style="font-size:40.9px">複数大学で歩けばきっと変わる</div>
<div class="ppt-p" style="font-size:40.9px">ぜひ、Team Swimmyで横連携を盛り上げていきましょう</div>
</div>
<div class="ppt-box" style="left:7.305%;top:24.38%;width:83.655%;height:35.013%">
<div class="ppt-p" style="font-size:40.9px">Session 2: 大学DXの要素と横展開の価値</div>
<div class="ppt-p">&#8203;</div>
<div class="ppt-p" style="font-size:40.9px">  目的： AI時代のDXにおける横連携の重要性を考える</div>
<div class="ppt-p" style="font-size:40.9px">  目標： 大学DXの概要を俯瞰する</div>
<div class="ppt-p" style="font-size:40.9px">           横連携の重要性を認識頂き、機運が高まる</div>
</div>
<div class="ppt-box" style="left:5.959%;top:59.584%;width:86.207%;height:18.851%">
<div class="ppt-p" style="font-size:32.0px">まとめ：大学の課題感も解決策も実は横並び。</div>
<div class="ppt-p" style="font-size:32.0px">　　　　　大学DXには雛形があるが、生成AIでルールが変わった。</div>
<div class="ppt-p" style="font-size:32.0px">　　　　　横連携の価値が大きな時代に入っている。</div>
</div>
<div class="ppt-box" style="left:7.305%;top:9.209%;width:76.066%;height:10.475%">
<div class="ppt-p" style="font-size:40.9px">Session 1: AIの活用事例と風土醸成の事例の共有</div>
</div>
</div>
