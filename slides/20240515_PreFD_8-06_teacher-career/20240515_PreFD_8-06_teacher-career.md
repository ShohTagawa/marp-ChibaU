---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（#CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* ベン図用の小部品 */
  .vennwrap { position: relative; }
  .vsvg .clab { font-weight: 800; }
  .sidenote { font-size: 21px; line-height: 1.45; color: #333; }
  .pill { display: inline-block; background: var(--section-bg); border: 1.5px solid #cfcfcf; border-radius: 8px; padding: 4px 14px; font-weight: 800; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">大学教員というキャリア</div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b> 達成目標：</b><br><span class="ind">大学教員のキャリアの性質を理解する。</span></div>

<!--
- まずは、タイトルコール。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">大学教員</span>は<span style="color:var(--accent-dark)">楽しそう？楽そう？</span>

<div class="subhead"><span class="pill">勤務の実態</span></div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1.55;">

<div class="box-info" style="font-size:21px; line-height:1.5;"><b>総活動時間</b>：<b>約 53時間/週</b> (職位/系統差は小さい)<br>cf. 民間は所定労働時間40時間弱 + 残業</div>

<div style="font-size:21px; line-height:1.7; margin-top:8px;">
<div>・<b>指揮命令下の活動時間</b>：20時間弱/週</div>
<div>・<b>活動場所</b>：2割程度自宅/1割程度学外</div>
<div>・<b>分類</b>：教育30：研究25：管理運営15：社会貢献10：他</div>
<div style="font-size:18px; color:#666;">※ 分野差あり</div>
</div>

</div>
<div style="flex:1;">

<div class="box-warn" style="font-size:20px; text-align:center;">指揮命令下活動≒ 労働時間<br>(裁量労働制の主たる理由)</div>

<div class="box-accent" style="font-size:23px; text-align:center; font-weight:800; margin-top:10px;">結構、忙しい</div>

</div>
</div>

<div style="display:flex; gap:16px; margin-top:12px;">
<div class="pcard" style="margin:0;"><div class="pc-h">良さ・楽しさ</div>
<ul>
<li>好きな事を研究/学習できる</li>
<li>時間/指揮の拘束が少ない</li>
<li>キャリアをデザインできる</li>
</ul>
</div>
<div class="pcard" style="margin:0;"><div class="pc-h">厳しさ・不安</div>
<ul>
<li>任期付きの雇用は不安定</li>
<li>財源の先細り・競争激化</li>
<li>一生学び研鑽し続ける職</li>
</ul>
</div>
</div>

<div class="cite">R3 大学教員の勤務実態に係る調査研究　ブレインアカデミー (文科省 委託事業)</div>

<!--
- 総活動時間は約53時間/週。指揮命令下は20時間弱で、裁量労働制の主な理由。良さと厳しさの両面がある。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">大学教員</span>の<span style="color:var(--accent-dark)">活動のスコープ</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<div class="vennwrap" style="flex:1.15;">

<svg class="vsvg" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
<text x="280" y="22" text-anchor="middle" font-size="24" font-weight="800" fill="#2E7D46">私生活</text>
<circle cx="225" cy="150" r="105" fill="#C7E0D2" fill-opacity="0.72"/>
<circle cx="335" cy="150" r="105" fill="#F4C9CE" fill-opacity="0.72"/>
<circle cx="225" cy="258" r="105" fill="#BFD2C9" fill-opacity="0.72"/>
<circle cx="335" cy="258" r="105" fill="#A9C7B4" fill-opacity="0.72"/>
<text x="178" y="140" font-size="27" font-weight="800" fill="#1a1a1a">教育</text>
<text x="352" y="140" font-size="27" font-weight="800" fill="#1a1a1a">研究</text>
<text x="170" y="268" font-size="27" font-weight="800" fill="#1a1a1a">管理</text>
<text x="170" y="296" font-size="27" font-weight="800" fill="#1a1a1a">運営</text>
<text x="350" y="268" font-size="27" font-weight="800" fill="#1a1a1a">社会</text>
<text x="350" y="296" font-size="27" font-weight="800" fill="#1a1a1a">貢献</text>
<text x="280" y="392" text-anchor="middle" font-size="22" font-weight="800" fill="#1a1a1a" style="paint-order:stroke">業績評価</text>
<rect x="222" y="372" width="116" height="2" fill="#888"/>
</svg>

<div class="sidenote" style="position:absolute; left:0; top:96px;">授業<br>学生支援<br>研究指導</div>
<div class="sidenote" style="position:absolute; right:0; top:84px; text-align:left;">予算獲得<br>研究活動<br>成果公開</div>
<div class="sidenote" style="position:absolute; left:0; top:228px;">教務<br>委員会<br>企画立案<br>基盤管理<br>組織運営</div>
<div class="sidenote" style="position:absolute; right:0; top:236px; text-align:left;">診療<br>兼務<br>学会運営<br>講演・執筆<br>公共審議会</div>

</div>
<div style="flex:1; padding-top:30px;">

<div class="box-accent" style="font-size:25px; font-weight:800; text-align:center;">多様な教職員と仕事で、<br>大学は成り立っている</div>

</div>
</div>

<!--
- 大学教員の活動は教育・研究・管理運営・社会貢献の4領域。私生活の中にあり、業績評価で支えられる。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">大学教員</span>の<span style="color:var(--accent-dark)">活動のスコープ</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<div class="vennwrap" style="flex:1.15;">

<svg class="vsvg" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
<circle cx="280" cy="204" r="186" fill="none" stroke="#bbb" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="280" y="22" text-anchor="middle" font-size="22" font-weight="800" fill="#777">所属大学</text>
<text x="12" y="208" font-size="20" font-weight="800" fill="#777">　社会　</text>
<text x="494" y="208" font-size="20" font-weight="800" fill="#777">ポスト</text>
<text x="280" y="404" text-anchor="middle" font-size="20" font-weight="800" fill="#777">自分　</text>
<text x="280" y="56" text-anchor="middle" font-size="22" font-weight="800" fill="#2E7D46">私生活</text>
<circle cx="225" cy="170" r="92" fill="#C7E0D2" fill-opacity="0.72"/>
<circle cx="335" cy="170" r="92" fill="#F4C9CE" fill-opacity="0.72"/>
<circle cx="225" cy="262" r="92" fill="#BFD2C9" fill-opacity="0.72"/>
<circle cx="335" cy="262" r="92" fill="#A9C7B4" fill-opacity="0.72"/>
<text x="185" y="162" font-size="24" font-weight="800" fill="#1a1a1a">教育</text>
<text x="350" y="162" font-size="24" font-weight="800" fill="#1a1a1a">研究</text>
<text x="178" y="272" font-size="23" font-weight="800" fill="#1a1a1a">管理</text>
<text x="178" y="298" font-size="23" font-weight="800" fill="#1a1a1a">運営</text>
<text x="352" y="272" font-size="23" font-weight="800" fill="#1a1a1a">社会</text>
<text x="352" y="298" font-size="23" font-weight="800" fill="#1a1a1a">貢献</text>
</svg>

</div>
<div style="flex:1; padding-top:18px;">

<div class="box-accent" style="font-size:23px; font-weight:800; text-align:center;">多様な教職員と仕事で、<br>大学は成り立っている</div>

<div class="box-warn" style="font-size:22px; margin-top:14px;">教員である以上に、<b>社会人</b><br>社会規範や組織決定は重要</div>

<div class="box-info" style="font-size:22px; margin-top:14px;">どうバランスを取るか、<b>デザインする裁量</b>もある</div>

</div>
</div>

<!--
- 教員は所属大学・社会・ポスト・自分の中にあり、教員である以上に社会人。どうバランスを取るかをデザインする裁量もある。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">キャリアをどうデザインする？</span>

<div class="stepbox"><div class="st"><b>①色々な人に話を聞く</b><br><span style="font-size:23px; margin-left:1.2em;">先生、先輩、同僚、友人、講演会 etc...</span></div></div>

<div class="stepbox"><div class="st"><b>②FD活動</b>に参加してみる　<span class="em" style="font-size:25px;">アカデミック・ポートフォリオ</span></div></div>

<div class="box-info" style="margin-top:10px;">教育・研究・管理運営・社会貢献全ての<br>自己省察による記述と資料をまとめたもの</div>

<div style="font-size:22px; line-height:1.7; margin-top:12px;">
<div><b>Knapper &amp; Wilcox (2007)</b>：6 ~ 12ページ程度の記載 + 添付資料</div>
<div style="margin-left:1.2em; color:#444;"><b>理念</b>/目的、方針/方法、経験、履歴、目標など</div>
<div><b>吉田 &amp; 栗田 (2014)</b>：構造化ポートフォリオ (3時間くらいで作れる)</div>
<div><b>→</b>インタラクティブ・ティーチング内に講義あり (Week 8)</div>
</div>

<!--
- キャリアは①色々な人に話を聞く、②FD活動に参加してアカデミック・ポートフォリオを作る、などでデザインする。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">まずは、採用を勝ち取る</span>

<div class="box-warn" style="position:absolute; top:118px; right:48px; width:300px; text-align:center; font-size:22px;">専門家としての研究と研鑽を<br>頑張るのは<b>前提</b></div>

<div class="stepbox" style="margin-right:340px;"><div class="st"><b>①日頃から、経験・業績をまとめておく</b></div>
<div style="font-size:21px; line-height:1.55; margin-left:1.2em;">CV (Curriculum Vitae)の作成・証拠資料保存<br><span style="color:#666;">※Researchmapを更新するのも良い</span><br>ティーチングポートフォリオ(教育業績記録)の作成<br>個人webページの作成 (案外見られる)</div>
</div>

<div class="stepbox"><div class="st"><b>②チャンスには挑む</b></div>
<div style="font-size:21px; line-height:1.55; margin-left:1.2em;">申請書 (様々な競争的資金、学振/JST等の研究員)、<br>認定書/資格獲得に向けた学習、非常勤講師など</div>
</div>

<div class="stepbox"><div class="st"><b>③予め公募書類を目標に準備しておく</b></div>
<div style="font-size:21px; line-height:1.55; margin-left:1.2em;">研究の関心は？教育への理念・抱負は？業績は？</div>
</div>

<!--
- 採用を勝ち取るには、①経験・業績をまとめる、②チャンスに挑む、③公募書類を目標に準備する。研究と研鑽は前提。
-->

---

<div class="page-title">大学教員というキャリア</div>

# <span style="color:var(--accent-dark)">「教育の抱負」レポート</span>

<div style="display:flex; gap:16px; align-items:flex-start;">
<div style="flex:1.7;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>原則1</b>　評価者の視点に立って考えよ</div>
<div style="font-size:20px; line-height:1.5; margin-left:1.2em;">読みやすさ　 A4 1枚、11pt、重要箇所は<b>強調</b><br>把握しやすさ 緒言→3つ程構造化し内容記載→結言<br>共感しやすさ ストーリー化、公募先の大学に歩み寄る</div>
</div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>原則2</b>　多様な評価軸を含めよ</div>
<div style="font-size:20px; line-height:1.5; margin-left:1.2em;">過去の教育実績・ご自身の体験・理念<br>教育のトレンド・知見・IDなどの技法<br>公募先の大学の指針と自分の相性</div>
</div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>原則3</b>　熱意(パトス)と信頼(エトス)を示せ</div>
<div style="font-size:20px; line-height:1.5; margin-left:1.2em;">クレバーに、でも、モデストに</div>
</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:10px; padding-top:6px;">

<div class="box-warn" style="font-size:20px; text-align:center;">誤字や規定違反がないのは<br><b>前提</b>である</div>
<div class="box-info" style="font-size:20px; text-align:center;">音読して<b>推敲する</b><br><b>　寝かせて</b>確認する</div>
<div class="box-accent" style="font-size:20px; text-align:center;">羅列ではなく、<br><b>精選</b>する</div>

</div>
</div>

<!--
- 教育の抱負レポートは、原則1評価者視点、原則2多様な評価軸、原則3熱意と信頼。誤字や規定違反がないのは前提。
-->

---

<!-- _class: refs -->

<div class="page-title">大学教員というキャリア</div>

# 参考文献

<div class="cite" style="font-size:20px; line-height:1.75;">
株式会社ブレインアカデミー データサイエンスセンター編 (2022) 令和３年度 文部科学省 大学改革推進委託事業 「大学教員の勤務実態に係る調査研究」 調査報告書<br>
科研費.com著 (2023) ここはこう書け! いちばんわかりやすい科研費申請書の教科書 (KS科学一般書). <i>講談社</i><br>
インタラクティブ・ティーチング (講師 栗田佳代子) 第8章, 東京大学 FD. <a href="https://utokyofd.com/it/summary/">https://utokyofd.com/it/summary/</a><br>
Knapper and Wilcox (2007) <i>Preparing a Teaching Dossier</i>, Center for Teaching and Learning, Queens's University<br>
吉田塁、栗田佳代子 (2014) 構造化アカデミック・ポートフォリオの開発、<i>日本教育工学会研究報告集</i> 14 (4), p 15-21.<br>
池上彰 (2007) 伝える力、<i>PHPビジネス新書</i>、PHP研究所. 　あっさ<br>
パトリック・ハーラン (2014) ツカむ！話術、(角川oneテーマ21)、<i>角川書店</i>.
</div>

<!--
- 参考文献。
-->
