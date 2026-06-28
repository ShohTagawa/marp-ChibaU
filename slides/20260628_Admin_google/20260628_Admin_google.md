---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">Google活用</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy（#19284A）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  .role-card { border: 2px solid #cfd6e4; border-radius: 16px; padding: 14px 26px; margin: 14px 0; }
  .role-card .rc-top { font-size: 22px; color: #555; margin-bottom: 6px; }
  .role-chip { display: inline-block; font-size: 30px; font-weight: 800; border-radius: 12px; padding: 8px 30px; }
  .chip-green { background: #DCEED9; color: #2E5E2E; }
  .chip-pink  { background: #FBE0E5; color: #8E0029; }
  .chip-gray  { background: #E6E6E6; color: #333; }
  .role-list { font-size: 28px; line-height: 1.55; }
  .role-row { display: flex; align-items: center; gap: 24px; }
  .role-row .rl-r { flex: 1; }
  .apply-tag { display: inline-block; font-weight: 800; color: #fff; background: var(--accent); border-radius: 8px; padding: 3px 16px; font-size: 22px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big" style="font-size:64px;"><span style="color:#1A6BB0;">Google</span>がもつ<br>学校向け支援一覧</div>
</div>

<div style="text-align:center; font-size:30px; color:var(--accent); font-weight:700; margin-top:8px;">…むっちゃわかりにくいのでまとめました</div>

<div class="title-meta" style="margin-top:40px;">国際未来教育基幹 田川 翔</div>

<!--
- Googleの学校向け支援は種類が多くわかりにくいので、一覧にまとめた。
-->

---

<div class="page-title">構成</div>

<div class="role-card">
<div class="rc-top">Google Cloud</div>
<div class="role-row">
<div><span class="role-chip chip-green">資格/無償提供</span></div>
<div class="rl-r role-list">
- Google Cloud 認定資格<br>
- Google の研究補助金
</div>
</div>
</div>

<div class="role-card">
<div class="rc-top">Google Edu</div>
<div class="role-row">
<div><span class="role-chip chip-pink">教職員認定</span></div>
<div class="rl-r role-list">
- Google 認定教職員<br>
- Google Edu Trainer / Innovator
</div>
</div>
</div>

<div class="role-card">
<div class="rc-top">機関としてのパートナー</div>
<div class="role-row">
<div><span class="role-chip chip-gray">Reference</span></div>
<div class="rl-r role-list">
- 機関別に行っているリファレンスプログラム<br>
- プログラム外での協働・パートナーシップ
</div>
</div>
</div>

<!--
- 全体は3本柱：資格/無償提供、教職員認定、機関としてのパートナー。
-->

---

<div class="page-title">方向性</div>

# 以下は単なる田川の想像

<div class="box-accent" style="margin-top:14px; margin-right:calc(var(--pip-w) + 30px);">
千葉大学図書館が、Google等のAIを用いた先進事例として、<b>新たな図書館サービス/情報との関わりを学ぶ場のスタンダード</b>になれないか。
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 30px);">
LibraryTechとして必要な、<b>クラウド/AIスキルの修得・PoC・実装</b>を<b>学び、実装できるエコシステムと人材プール</b>を作れないか。※学生も、スキル・資格が残れば嬉しいはず
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 30px);">
新しい学習支援をAI×appで構想し、大学のUX改革ができないか？
</div>

<div class="takeaway" style="margin-top:16px;">そのうえで使えるGoogleの支援リソースとは？</div>

<!--
- ここからは田川の想像。図書館を先進事例のスタンダードに、人材プールとエコシステムを作れないか。その上で使えるGoogleの支援リソースを見ていく。
-->

---

<div class="page-title">Google Cloud Standard</div>

# Google Cloud Standard

<div class="subhead"><span class="role-chip chip-green" style="font-size:24px; padding:5px 20px;">資格/無償提供</span><span style="font-size:28px;">- Google Cloud 認定資格</span></div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">
<div style="width:340px;">
<div style="font-size:30px; font-weight:800; text-align:center;">Google Skills</div>
<div style="text-align:center; font-size:30px; color:#888;">▽</div>
<div style="display:flex; align-items:center; gap:14px;">
<img src="./src/fig01-img.png" alt="Generative AI Leader" style="width:96px;">
<div style="font-size:26px; font-weight:700;">DX/AI活用スキル<br>開発スキル</div>
</div>
<div class="box-warn" style="margin-top:12px; text-align:center;">効果はあるけど、<br>値段が高い</div>
<div style="font-size:22px; margin-top:10px;">※田川は、PMPも鍵だと思ってます</div>
</div>
<img src="./src/fig02-img.png" alt="Google Skills 認定資格一覧" style="flex:1; max-height:430px; border:1px solid #ddd;">
</div>

<!--
- Google Cloud Standard の認定資格。Google Skills でDX/AI活用・開発スキルを学べる。効果はあるが値段が高い。田川はPMPも鍵だと考えている。
-->

---

<div class="page-title">Google Cloud Standard</div>

<div class="subhead" style="margin-top:8px; flex-wrap:nowrap;"><span style="font-size:32px; font-weight:800; color:var(--accent-dark);">Google Cloud Standard</span><span class="role-chip chip-green" style="font-size:21px; padding:4px 16px;">資格/無償提供</span><span style="font-size:24px; white-space:nowrap;">- Google Cloud 認定資格</span></div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1; min-width:0;">

<div class="box-info" style="margin:8px 0; padding:11px 22px; font-size:22px;"><b>Google Career Launchpad</b><br>Skillsを用いた学習プラットフォーム<br>AIやサーバーを使う”クレジット”が付随</div>

<div class="box-accent" style="margin:10px 0; padding:11px 22px; font-size:22px; text-align:center;">無料プログラム　＋ 修了者は認定試験半額　＋ クラウド無料券</div>

<div class="box-warn" style="margin:10px 0; padding:11px 22px; font-size:22px;">対教職員： FD/SDに親和性？　対学生：課程外学習?</div>

<div style="text-align:center; font-size:25px; font-weight:800; color:var(--accent-dark); margin-top:8px;">応募単位：個々の教員</div>

</div>
<div class="pcard" style="width:430px; flex:none;">
<div class="pc-h">取得できる主な認定（一例）</div>
<ul style="font-size:21px; line-height:1.6;">
<li>Google DeepMind AI Research Foundations</li>
<li>Cloud Cybersecurity Certificate</li>
<li>Cloud Data Analytics Certificate</li>
<li>Cloud Engineering Certificate</li>
<li>Cloud Generative AI Leader</li>
<li>Cloud Digital Leader　etc…</li>
</ul>
</div>
</div>

<div class="cite" style="margin-top:6px; font-size:17px; word-break:break-all;">Launchpadの説明 https://cloud.google.com/edu/faculty/career-launchpad?hl=ja 　教育用クレジットの取得と利用 https://docs.cloud.google.com/billing/docs/how-to/edu-grants?hl=ja</div>

<!--
- Career Launchpad は Skills を用いた学習プラットフォーム。無料で、修了者は認定試験半額・クラウド無料券付き。応募単位は個々の教員。
-->

---

<div class="page-title">Google Cloudの学校向け補助</div>

<div class="subhead" style="margin-top:8px;"><span style="font-size:34px; font-weight:800; color:var(--accent-dark);">Google Cloud Standard</span><span class="role-chip chip-green" style="font-size:22px; padding:4px 18px;">資格/無償提供</span><span style="font-size:26px;">- Google の研究補助金</span></div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">
<div class="box-info" style="margin:6px 0;">
<b>研究におけるGCP活用補助 リンク</b><br>
学術研究用に最大 5,000 ドルの Google Cloud クレジット<br>
→ 1年間 GCPの無料活用が可能 (継続は不可)<br>
<b>「図書館のAI活用から考える〇〇」、「大学のUXから考える〇〇」</b><br>
※ クラウド使用費用の計算と、簡単なプロポーザルが必要
</div>
<div style="text-align:right; font-size:23px; font-weight:800; color:var(--accent-dark);">応募単位：個々の教員</div>
</div>
<div style="flex:1;">
<div class="box-accent" style="margin:6px 0;">
<b>公的機関におけるGCP活用補助 リンク</b><br>
AI活用に最大 1,000 ドルのGoogle Cloud クレジット<br>
→ しかも、Googleからの人的支援あり<br>
<b>新しい学習支援をアプリで構成する予算はここから？</b><br>
※ 担当チームがWorkspaceと異なる予感
</div>
<div style="text-align:right; font-size:23px; font-weight:800; color:var(--accent-dark);">応募単位：組織</div>
</div>
</div>

<!--
- 研究補助：研究用に最大5,000ドル（教員単位）、公的機関のAI活用に最大1,000ドル＋人的支援（組織単位）。
-->

---

<div class="page-title">Google Edu</div>

# Google Edu

<div class="subhead"><span class="role-chip chip-pink" style="font-size:24px; padding:5px 20px;">教職員認定</span><span style="font-size:28px;">- Google 認定教職員</span><span style="font-size:26px; color:var(--accent-dark); font-weight:800;">クラウド・AI技術の学び直し</span></div>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:8px;">
<div style="flex:1;">
<div style="font-size:28px; font-weight:800; text-decoration:underline;">① 有料資格 (8000円ほど)</div>
<img src="./src/fig06-img.png" alt="認定教職員 修了証" style="width:340px; border:1px solid #ddd; margin-top:8px;">
</div>
<div style="flex:1;">
<div style="font-size:28px; font-weight:800; text-decoration:underline;">② 無料資格 　<img src="./src/fig07-img.png" style="height:48px; vertical-align:middle;"></div>
<div class="box-warn" style="margin:10px 0;">※今後は無料化 ? (USは今も無料)<br>あんまり役立たないかも…？</div>
<div style="font-size:28px; font-weight:800; text-decoration:underline; margin-top:6px;">③ Grow with Google</div>
<div style="font-size:25px; line-height:1.5; color:#1A6BB0; text-decoration:underline; margin-top:4px;">10x イノベ<br>官公庁向け無料講座/地域連携<br>Courseraの無料講座</div>
</div>
</div>

<!--
- 認定教職員はクラウド・AIの学び直し。①有料資格（8000円ほど）②無料資格③Grow with Google（10xイノベ・無料講座等）。
-->

---

<div class="page-title">Google Edu</div>

# Google Edu

<div class="subhead"><span class="role-chip chip-pink" style="font-size:24px; padding:5px 20px;">教職員認定</span><span style="font-size:28px;">- Google Edu Trainer / Innovator</span></div>

<div style="font-size:30px; font-weight:800; margin:6px 0;">Google Cloud チャンピオンプログラム</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:1;">
<img src="./src/fig08-img.png" alt="教育者コミュニティの一員になる" style="width:100%; max-width:680px; border:1px solid #ddd;">
<div style="display:flex; gap:60px; margin-top:14px; font-size:26px; color:#1A6BB0; text-decoration:underline;">
<span>コミュニティ</span><span>一覧表</span><span>GfE ポータル</span>
</div>
<div style="font-size:22px; color:#555; margin-top:8px;">申請中 ／ 対面支援向け ／ コミュニティ向け</div>
</div>
<img src="./src/fig09-img.png" alt="JPN26 Tokyo 申請" style="width:230px; border:1px solid #ddd;">
</div>

<!--
- Trainer / Innovator＝Google Cloud チャンピオンプログラム。認定イノベーター・トレーナー・コーチ・GEGリーダーから選ぶ。JPN26 Tokyoなど申請中。
-->

---

<div class="page-title">パートナーシップ</div>

<div class="role-card" style="margin:6px 0 12px;">
<div class="rc-top">機関としてのパートナー</div>
<div class="role-row">
<div><span class="role-chip chip-gray">Reference</span></div>
<div class="rl-r role-list" style="font-size:25px;">
- 機関別に行っているリファレンスプログラム<br>
- プログラム外での協働・パートナーシップ
</div>
</div>
</div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<img src="./src/fig10-img.png" alt="Google for Education 事例校プログラム" style="width:230px; border:1px solid #ddd;">
<div style="flex:1;">
<div style="font-size:30px; font-weight:800; margin:6px 0;">招待制プログラムは存在している</div>
<div style="font-size:30px; font-weight:800; margin:14px 0;">寄付講座<br><span style="font-size:24px; font-weight:400;">　(教育版は？)</span></div>
<div style="font-size:30px; font-weight:800; margin:14px 0;">協定?</div>
<div class="box-warn" style="font-size:22px; display:inline-block;">Amazon Think Big Spaceの<br>Google版はいつかあるのか？</div>
</div>
<img src="./src/fig11-img.png" alt="特任助教公募" style="width:250px; border:1px solid #ddd;">
</div>

<!--
- パートナー＝リファレンス。招待制プログラム・寄付講座・協定は存在。Amazon Think Big SpaceのGoogle版はいつか出るか。
-->

---

<div class="page-title">まとめ</div>

<div class="wrap3" style="font-size:30px;">
<div style="margin:14px 0;"><b>① 教員単位・組織単位でできること</b>はある</div>

<div style="margin:14px 0;"><b>②エコシステム作成が重要</b></div>
<div style="font-size:27px; line-height:1.6; margin-left:1.2em;">
学んで、作って、実装するまで、学生と作れる場<br>
教員の研究を支援できる場<br>
さらに、人材をプールしておく<br>
　→ アカリンのコンセプトと親和的なのではないか？
</div>

<div style="margin:18px 0 6px;"><b>③参画人数・実績が増加する</b>と先方の目を引ける可能性あり</div>
<div style="font-size:27px; margin-left:1.2em;">※予算がつけば可能性upだが、それ以外の手はあるかも？</div>
</div>

<!--
- まとめ：①教員・組織単位でできることはある ②エコシステム作成が重要（アカリンと親和的）③参画人数・実績が増えれば先方の目を引ける。
-->

---

<div class="page-title">おまけ：app関係者でAI?</div>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1;">
<img src="./src/fig12-img.png" alt="Google AI Pro for Education" style="width:100%; max-width:300px; border:1px solid #ddd;">
</div>
<div style="flex:1.4;">
<table style="font-size:23px; border-collapse:collapse; margin-bottom:10px;">
<tr><td style="padding:3px 14px;">個人有償版:</td><td style="padding:3px 14px; text-align:right;">34,800/1人/年</td></tr>
<tr><td style="padding:3px 14px;">標準：</td><td style="padding:3px 14px; text-align:right;">20,340/1人/年</td></tr>
<tr style="font-weight:800; color:var(--accent-dark);"><td style="padding:3px 14px;">50人以上：</td><td style="padding:3px 14px; text-align:right;">15,255/1人/年</td></tr>
</table>
<div style="font-size:23px; line-height:1.6;">
附属図書館/ALC(18名分)、<br>
高等教育センター(5名分)、<br>
学務部(教企/国企/留学)(15名分)、<br>
<b>DX会議体構成員(8名分)、</b><br>
<b>他(4名分) </b>とか?
</div>
<div class="box-accent" style="margin-top:10px; font-weight:800;">→ 762,750/年 (38 + 12シート)</div>
<div style="font-size:22px; margin-top:8px;">折半なら、なんとかなるのでは？<br>※UXの研究利用には、学生にもアカウント付与可?<br>※DXの研究名目 (業務観測とセット？)</div>
</div>
</div>

<!--
- おまけ。AI Proを50人以上だと15,255円/人。図書館・ALC・高等教育センター等で38+12シート＝762,750円/年。折半ならいけるか。
-->

---

<div class="page-title">Google AI Proの費用感</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">
<div class="box-accent" style="margin:4px 0;"><b>体感： 1日あたり15-30分の時間削減</b><br>　▶ 200日あたり50 -100時間<br>　　→ 十分にペイする印象</div>

<div style="font-size:25px; margin:12px 0;"><b>京都大学</b>有料アカウントを別経費で購入→管理者がレシートを元に権利付与</div>
<div class="box-warn" style="margin:6px 0;">課題：権利付与のアカウント管理が困難<br>(数1000人のアカウントに目視付与)</div>
</div>
<div style="flex:1;">
<div style="font-size:27px; font-weight:800; color:var(--accent-dark); margin:4px 0;">まずは、教育系50人規模でスモールな試行？</div>
<table style="font-size:23px; border-collapse:collapse; margin:8px 0;">
<tr><td style="padding:3px 14px;">個人有償版:</td><td style="padding:3px 14px; text-align:right;">34,800/1人/年</td></tr>
<tr><td style="padding:3px 14px;">標準：</td><td style="padding:3px 14px; text-align:right;">20,340/1人/年</td></tr>
<tr style="font-weight:800; color:var(--accent-dark);"><td style="padding:3px 14px;">50人以上：</td><td style="padding:3px 14px; text-align:right;">15,255/1人/年</td></tr>
</table>
<div style="font-size:24px; margin:6px 0;">年間契約で<b>相当の</b>割引に期間限定</div>
<div class="box-info" style="margin:6px 0;"><b>試行の例：50名　→ 762,750/年</b><br><b>教職員全員： 3500名 → 5500万円/年</b></div>
</div>
</div>

<!--
- 費用感：1日15-30分削減で十分ペイ。京大は別経費購入＋レシートで権利付与（管理が課題）。まずは教育系50人規模でスモールに試行。50名で762,750円/年、全員3500名なら5500万円/年。
-->

---

<div class="page-title">Google AI Pro VS 無償版</div>

<div style="font-size:34px; font-weight:800; color:var(--accent-dark); margin:6px 0 4px;">Google AI Pro Edu VS 無償版　<span style="font-size:26px; color:#2E7D46;">→ ◯</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.1; min-width:0;">
<img src="./src/fig16-crop-compare.png" alt="Gemini／NotebookLM 比較表" style="width:100%; max-height:400px; border:1px solid #ddd;">
</div>
<div style="flex:1; min-width:0;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">差となってくるのは、</div>
<div style="font-size:22px; line-height:1.45; margin:4px 0;">
①<b>性能の高いAIでの推論可能回数</b>　→使用制限で止まりにくい<br>
②<b>AIに入力出来るデータサイズ</b>　→複雑な処理が可能に<br>
③<b>応答速度</b>　→表に書いていないが違うらしい<br>
④ドライブ/PDFなどの要約
</div>
<div class="box-warn" style="margin-top:6px; padding:10px 22px;"><b>機能としては、現時点で差がない</b><br>※但し、仕事で使い始めると上限に容易に達する可能性が高い</div>
</div>
</div>

<div class="cite" style="margin-top:6px;">出典：教育機関向けGoogle AI Pro for Educationセミナー資料 〜教育と校務のDX を Googleと共に〜 2025/11/27開催</div>

<!--
- 無償版との差は、推論回数・入力データサイズ・応答速度・要約。機能自体は現時点で差がないが、仕事で使うと上限に容易に達する。
-->

---

<div class="page-title">Googleの今年の計画</div>

<div class="box-accent" style="margin:8px 0; padding:12px 24px; font-size:23px;">
<b>千葉大学は、Google Workspace for Education Plusを使用可能</b>　→ 今年1年間で機能強化が行われ、AI Proの機能の一部が利用可能に [出典]
</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:10px;">
<div style="flex:1.5; min-width:0; font-size:20px; line-height:1.5;">
<div style="font-weight:800; color:var(--accent-dark);">Education Fundamentals（無料版）にも提供:</div>
<div><b>Gemini in Gmail:</b> メールの下書き作成、長いスレッドの要約、AIによる返信案の提示</div>
<div><b>Google Workspace Studio：</b>「誰でも数分でAIエージェントを作れる」ノーコード開発</div>
<div style="font-weight:800; color:var(--accent-dark); margin-top:6px;">Education Plus & Teaching and Learningへ提供:上記に加え、</div>
<div><b>Gemini in Docs:</b> 数秒で文章を作成。サイドパネルで推敲や要約を依頼</div>
<div><b>Gemini in Slides:</b> テキストからスライド用のオリジナル画像を生成</div>
<div><b>Gemini in Sheets:</b> データの整理や分析をAIがサポート</div>
<div><b>Gemini in Forms:</b> 質問項目の提案や回答のAI要約</div>
<div><b>Gemini in Vids:</b> テキスト指示や既存スライドから、洗練された動画を自動生成</div>
</div>
<div style="flex:1; min-width:0;">
<div class="box-info" style="margin:0 0 10px; padding:12px 22px; font-size:22px;">AI Proにする必要があるのは、<b>高性能と大量のデータの処理が、何回も</b>必要な場合<br>→ コーディングや分析、採点を行う、全体の1/3程度なのではないか？</div>
<div class="box-warn" style="padding:12px 22px; font-size:22px;"><b>利用シナリオ</b><br>① レポートのルーブリックの仮採点/フィードバック<br>② 音声から授業動画の作成<br>③ データテーブルの分析実施</div>
<div style="text-align:center; font-size:27px; font-weight:800; color:var(--accent-dark); margin-top:14px;">千葉大全員で利用可能に！</div>
</div>
</div>

<div class="takeaway" style="margin-top:12px; margin-left:44px; font-size:23px;"><b>Google AI Pro Edu</b>　① 大規模コンテキスト　② 大容量上限　③ 高速応答　④ 連携強化</div>

<!--
- 千葉大はWorkspace for Education Plus使用可。今年1年で機能強化。無料版にもGemini in Gmail/Workspace Studio。Plusはさらに Docs/Slides/Sheets/Forms/Vids。AI Proが要るのは高性能・大量データを何度も使う場合（採点・分析等の1/3程度）。
-->
