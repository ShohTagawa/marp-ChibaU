---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用術</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 20%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<div class="page-title">開始の前に</div>

<div class="box-info" style="margin-top:6px;">
<div style="font-size:26px; line-height:1.55;"><b>① PCを立ち上げ、お持ちの<br>　 千葉大学Google Workspaceにログインして下さい</b><br><span style="margin-left:1.4em;">→ 学校のGmailが立ち上がる状況ならOKです。</span></div>
<div style="font-size:26px; line-height:1.55; margin-top:8px;"><b>② インタラクションツール Slidoにアクセスして下さい</b><br><span style="margin-left:1.4em;">URLを配布したり、質問やアンケートをとったりします</span></div>
</div>

<div class="cite" style="margin-top:8px; font-size:18px;">※お名前などの個人情報は入力しないで下さい。<br>※<b>slido/ワーク</b>への入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<div class="cardrow pip-safe" style="margin-top:10px;">
<div class="pcard"><div class="pc-h">スマホから</div><div style="font-size:21px; line-height:1.5;">QRコードを読み取り、Slidoにアクセス</div></div>
<div class="pcard"><div class="pc-h">PCから</div><ul><li>方法1　Google検索「Slido」→コード入力 <b>ALC-AI2-01</b></li><li>方法2　直接リンク</li></ul><div style="font-size:18px; color:#666; word-break:break-all;">https://app.sli.do/event/iJQ71dhpuqstH3wbGSYpRD</div></div>
</div>

<!--
- 始める前に。①千葉大Google Workspaceにログイン（学校のGmailが開けばOK）、②Slidoにアクセス。個人情報は入力しない。
-->

---

<div class="page-title">講師紹介</div>

<div class="subhead" style="margin-bottom:6px;"><span style="font-size:20px; color:#666;">たがわ　しょう</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 250px;">
<div style="font-size:46px; font-weight:800; line-height:1.1;">田川　翔</div>
<div style="font-size:19px; color:var(--tag-blue); margin-top:2px;">オープンバッジ</div>
</div>
<div style="flex:1;">
<div style="font-size:24px; line-height:1.5;"><b>所属：</b>千葉大学 高等教育センター/アカデミックリンクセンター</div>
<div class="tag-soft" style="display:inline-block; font-weight:800; border-radius:8px; padding:4px 16px; margin-top:8px; font-size:24px;">大学教育を企画し、学生と教員を支援する仕事</div>
</div>
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard"><div class="pc-h">①元々は理学の人</div><img src="./src/fig02a-physics.png" alt="地球誕生時の再現研究" style="width:100%; border-radius:8px;"><div style="font-size:18px; color:#666; margin-top:4px;">Tagawa et al. (2021) Nat. Commun.</div></div>
<div class="pcard"><div class="pc-h">②色々な仕事経験</div><img src="./src/fig02b-work.png" alt="大規模オンライン授業" style="width:100%; border-radius:8px;"><ul><li>大学のICT支援 (コロナ禍)</li><li>大規模オンライン授業の作成</li><li>民間企業での経験</li><li>AI×大学</li></ul></div>
<div class="pcard"><div class="pc-h">③大学を学びやすく!</div><img src="./src/fig02c-books.png" alt="大学での教え方 FFP" style="width:100%; border-radius:8px;"><ul><li>大学での教え方</li><li>生成AIの教育利活用<br><span style="font-size:18px;">現在、Teaching with AIを翻訳・出版準備中</span></li></ul></div>
</div>

<!--
- 講師の田川です。元々は理学（地球科学）出身で、Nature Communicationsに論文。大学のICT支援や大規模オンライン授業、民間経験も。今は「大学での教え方」と生成AIの教育利活用を進めています。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; margin-top:8px;">
<div style="font-size:28px; color:var(--accent-dark); font-weight:700;">2026年度 第1回：<b>プロンプティング</b>と<b>生成AIの仕組み</b>の基礎</div>
<div style="font-size:24px; color:var(--muted); margin-top:4px;">15-min or 30-min × 3 sessions</div>
<div style="font-size:24px; margin-top:18px;">国際未来教育基幹 田川 翔</div>
</div>

<div class="box-warn" style="position:absolute; top:64px; right:56px; width:200px; text-align:center; border-radius:24px; font-size:22px;"><b>学部1年生にも<br>おすすめ</b></div>

<!--
- 本講座のタイトル「学びを変える！研究を深める！生成AI活用術」。第1回はプロンプティングと生成AIの仕組みの基礎。学部1年生にもおすすめです。
-->

---

<div class="page-title">今回の構成</div>

<div class="stepbox" style="margin-top:10px;">
<div style="display:flex; align-items:center; gap:20px;"><div style="flex:0 0 230px; font-size:22px; color:#555;">最初の15分</div><div style="flex:0 0 120px;"><span class="tag tag-accent" style="font-size:24px;">講義</span></div><div style="flex:1; font-size:22px; line-height:1.5;">- AI/生成AIとは何かを理解する<br>- プロンプティングのコツを知る<br>- 千葉大学のGeminiの機能と利点を知る</div></div>
</div>

<div class="stepbox" style="margin-top:8px;">
<div style="display:flex; align-items:center; gap:20px;"><div style="flex:0 0 230px; font-size:22px; color:#555;">真ん中<b style="font-size:28px;">30</b>分 (前半だけも可)</div><div style="flex:0 0 120px;"><span class="tag tag-accent" style="font-size:24px;">体験</span></div><div style="flex:1; font-size:22px; line-height:1.5;">- Geminiの機能を最大限使いこなしてみる<br>- 気づきを共有してみる</div></div>
</div>

<div class="stepbox" style="margin-top:8px;">
<div style="display:flex; align-items:center; gap:20px;"><div style="flex:0 0 230px; font-size:22px; color:#555;">最後の15分</div><div style="flex:0 0 120px;"><span class="tag tag-accent" style="font-size:24px;">議論・座談会</span></div><div style="flex:1; font-size:22px; line-height:1.5;">- 今日学んで面白かったことは何でしたか。<br>- AIの学び方って、どうすれよいと思いますか。<br>- 今後、どんな点を特に学んでみたいですか。</div></div>
</div>

<!--
- 今回は3部構成。最初の15分が講義、真ん中30分が体験（前半だけでもOK）、最後の15分が議論・座談会です。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:26px; color:var(--accent-dark); font-weight:700;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="font-size:24px; color:var(--muted); margin-top:4px;">15-min sessions</div>
</div>

<div class="goal-box" style="max-width:880px; margin:18px auto 0; background:var(--section-bg); border-color:#bbb;"><b>Session 1：</b><span class="ind">プロンプティングのコツと生成AIの基礎</span></div>

<div style="text-align:center; font-size:24px; margin-top:18px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 1。「プロンプティングのコツと生成AIの基礎」をテーマに進めます。
-->

---

<div class="page-title">Session 1の目的・到達点</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:24px;">
<div style="flex:0 0 110px; font-size:33px; font-weight:800;">目的</div>
<div class="goal-box" style="flex:1; margin:0; background:var(--section-bg); border-color:#bbb;"><b>Session 1：</b><br><span class="ind">プロンプティングのコツと生成AIの基礎を知る！</span></div>
</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:40px;">
<div style="flex:0 0 110px; font-size:33px; font-weight:800;">目標</div>
<div class="goal-box pip-safe" style="flex:1; margin:0; background:var(--section-bg); border-color:#bbb; font-size:25px;">
・ AI/生成AIとは何かを理解する<br>
・ プロンプティングのコツを知る<br>
・ 千葉大学のGeminiの機能と利点を知る
</div>
</div>

<!--
- Session 1の目的は「プロンプティングのコツと生成AIの基礎を知る」。目標は3つ：①AI/生成AIの理解、②プロンプティングのコツ、③千葉大Geminiの機能と利点。
-->

---

<div class="page-title">生成AIの学び方</div>

<div class="box-accent" style="margin-top:8px; display:flex; align-items:center; gap:24px;">
<div style="flex:1; font-size:25px; line-height:1.7;"><b>生成AIの利活用に、現時点で正解はあるか？</b><br><b>生成AIは、学習・研究で不可欠な相棒か？</b><br><b>生成AI時代は学び方を必ず変えないといけないか？</b></div>
<div style="flex:0 0 90px; text-align:center; font-size:54px; font-weight:800; color:var(--accent);">▶ ？</div>
</div>

<div style="font-size:25px; margin-top:12px;">… しかし、生成AI技術は進歩し、<b style="color:var(--tag-green);">仕事</b>や<b style="color:var(--accent-dark);">研究</b>にも影響を与えつつある</div>

<div style="text-align:center; font-size:25px; margin-top:10px; line-height:1.5;">受講者の皆様が、生成AIは「相棒になるか」を<b>自ら考え</b>、<br><b>必要なときに、使えるようになる</b>ことが重要</div>

<div class="box-warn pip-safe" style="margin-top:12px; text-align:center; border:none; background:var(--accent-soft); color:#1a1a1a;"><span style="font-size:30px; font-weight:800; color:#1a1a1a;"><b>生成AIとの付き合い方</b>を決めるのは<b>あなた自身</b></span><br><span style="font-size:23px;"><b>これからの15minsでは</b>、そのための材料をお渡しします</span></div>

<!--
- 生成AIに今「正解」はあるか、不可欠な相棒か、学び方を必ず変えるべきか。答えは「？」。でも技術は進歩し仕事や研究に影響しつつある。だからこそ、相棒になるかを自ら考え、必要なときに使えることが大事。付き合い方を決めるのはあなた自身です。
-->

---

<div class="page-title">生成AIの学び方</div>

<div style="font-size:26px; font-weight:800; margin:4px 0 8px;">生成AIを活用するコツってなんだろう？どうすれば学べるんだろう？</div>

<div class="box-accent" style="padding:10px 24px;">
<div style="font-size:23px; line-height:1.55;">✓ <b style="color:var(--accent-dark);">生成AIは単なる手段</b><br>✓ 最終的には、<b style="color:var(--accent-dark);">自分がより学び、より良い人生を生きること</b><br><span style="margin-left:1.4em;">その文脈の中で、<b>生成AIを活かす方法と理由</b>を考えたい</span></div>
</div>

<div class="bgroup" style="grid-template-columns:9em 1fr; margin-top:10px;">
<div style="font-size:25px; font-weight:800; align-self:center;">AIリテラシー</div>
<div class="bg-items">
<div style="font-size:21px; line-height:1.5;">個人がAI技術を<b>批判的に</b>評価し、AIと効果的に<b>コミュニケーションおよび協働</b>し、<b>オンライン、家庭、職場でAIをツールとして利活用でき</b>るようにするコンピテンシー(「できる」知識・スキル・態度)の集合体</div>
<div style="font-size:18px; color:#666; margin-top:2px;">Long &amp; Magerko (2020) <i>CHI</i>　／　<b>30個以上</b>のコンピテンシーが提案されている (e.g. Laupichler et al. 2022 <i>CAEAI</i>)</div>
</div>
</div>

<div style="display:flex; gap:14px; margin-top:8px; align-items:stretch;">
<div style="flex:0 0 160px; font-size:24px; font-weight:800; display:flex; align-items:center; justify-content:center; background:var(--accent-soft); border-radius:10px;">AI教育方法論</div>
<div class="pcard" style="flex:1; padding:8px 16px;"><div style="font-size:22px; font-weight:800;">足場かけ体験学習</div><div style="font-size:20px;">Plan-Iterate-Evaluate loop</div><div style="font-size:17px; color:#666;">Anders &amp; Dux Speltz (2025) <i>CAEAI</i></div></div>
<div class="pcard" style="flex:1; padding:8px 16px;"><div style="font-size:22px; font-weight:800;">コミュニティ中心方略</div><div style="font-size:20px;">e.g. <i>AI cafe</i></div><div style="font-size:17px; color:#666;">Hutler et al. (2025) <i>AI and Society</i></div></div>
</div>

<div class="takeaway" style="margin-top:8px; text-align:center;">みんなで試し、話すことで、AIリテラシを伸ばす場にしましょう！</div>

<!--
- 生成AIを活用するコツとは何か。生成AIは単なる手段で、最終的には自分がより学び良い人生を生きること、その文脈で活かす方法と理由を考えたい。AIリテラシーは批判的評価・協働・利活用のコンピテンシー集合体で、30個以上提案。教育方法論として足場かけ体験学習とコミュニティ中心方略。みんなで試し話す場にしましょう。
-->

---

<div class="page-title">生成AIの仕事への影響</div>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:0 0 430px;">
<img src="./src/fig09-radar.png" alt="職業カテゴリ別のAIカバレッジ（理論値と観測値）" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>
<div style="flex:1;">

<div style="text-align:center; font-size:30px; font-weight:800; margin-bottom:2px;">AIの仕事への影響度合い</div>
<div style="text-align:center; font-size:20px; color:#666; margin-bottom:8px;"><span style="color:var(--tag-blue);">Massenkoff and McCrory (2026)</span><br>Anthropic /Economic Research</div>

<div class="box-info" style="padding:8px 18px; font-size:21px; line-height:1.5;"><b>時間×タスクでのAIカバレッジ指標</b><br>軸：　AIを全く使ってなかった時<br><b style="color:var(--tag-blue);">青</b>： AIで理論上、2倍効率化する範囲 (Eloundou et al., 2023)<br><b style="color:var(--accent);">赤</b>： 自動化/効率化が観察された範囲 (2025/8・11の利用実績：”暴露度”)</div>

<div style="font-size:21px; line-height:1.5; margin-top:6px;">例 Education &amp; Library：<br><span style="margin-left:1.2em;"><b style="color:var(--tag-blue);">青</b>≒60%分の時間×タスクがAIで効率化/代替可能</span><br><span style="margin-left:1.2em;"><b style="color:var(--accent);">赤</b>≒20%分のタスクがClaudeに実行結果がある</span></div>

</div>
</div>

<div class="stepbox pip-safe" style="margin-top:8px; padding:8px 24px;">
<div style="font-size:23px; line-height:1.6;">① いわゆる<b style="color:var(--accent);">ホワイトカラーの大半</b>に影響　　② 今後、<b style="color:var(--accent);">赤</b>が<b style="color:var(--tag-blue);">青</b>に近づく cf. 軸も変わる　　③ 現時点で雇用は影響ないが、<b>若手で変化</b></div>
</div>

<!--
- AIの仕事への影響。Massenkoff and McCrory (2026)、Anthropic Economic Research。時間×タスクでのAIカバレッジ指標で、青は理論上2倍効率化する範囲、赤は実際に自動化が観察された範囲。Education & Libraryでは青が約60%、赤が約20%。①ホワイトカラーの大半に影響、②今後赤が青に近づく、③雇用は現時点で影響ないが若手で変化。
-->

---

<div class="page-title">AIってなに？</div>

<div style="font-size:24px; margin:2px 0 6px;"><b>AI：</b> 人が知的だと感じる処理を実現するシステム</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 360px;">

<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
<rect x="2" y="2" width="356" height="356" rx="20" fill="#ECECEC"/>
<text x="180" y="34" text-anchor="middle" font-size="22" font-weight="700" fill="#1a1a1a">数理・統計・DS</text>
<rect x="30" y="46" width="300" height="296" rx="18" fill="#2C6E73"/>
<text x="180" y="76" text-anchor="middle" font-size="22" font-weight="700" fill="#ffffff">人工知能 (AI)</text>
<rect x="58" y="90" width="244" height="238" rx="16" fill="#D6E8D0"/>
<text x="180" y="118" text-anchor="middle" font-size="22" font-weight="700" fill="#1a1a1a">機械学習</text>
<rect x="86" y="132" width="188" height="180" rx="14" fill="#F7E2C4"/>
<text x="180" y="160" text-anchor="middle" font-size="22" font-weight="700" fill="#1a1a1a">深層学習</text>
<rect x="116" y="180" width="128" height="110" rx="12" fill="#D89A98"/>
<text x="180" y="244" text-anchor="middle" font-size="22" font-weight="700" fill="#1a1a1a">生成AI</text>
</svg>

</div>
<div style="flex:1;">
<div style="font-size:24px; margin-bottom:6px;">分類したり、予想したり、処理したり…</div>
<div class="box-info" style="padding:10px 20px; font-size:23px; line-height:1.55;">生成AIを使っていなくても、<br><b>YouTubeのおすすめ</b>や、<br><b>運転支援・お掃除ロボット</b>や、<br><b>今日のスーパーの仕入れ管理</b>など、<br>様々なところで利用されている</div>
<div style="display:flex; gap:10px; align-items:center; margin-top:10px;">
<span class="tag" style="background:#D6E8D0; color:#1a5a2e; font-size:21px;">機械学習</span>
<span class="tag" style="background:#F7E2C4; color:#7a4a00; font-size:21px;">深層学習</span>
<span style="font-size:21px; line-height:1.35;">信頼性・再現性・<br>速度/費用・適合性…</span>
</div>
</div>
</div>

<div class="takeaway" style="margin-top:8px; text-align:center;">日常はすでに、<b>AIアルゴリズムに囲まれて、便利になっている</b></div>

<!--
- AIとは「人が知的だと感じる処理を実現するシステム」。広い順に数理・統計・DS＞人工知能＞機械学習＞深層学習＞生成AIと入れ子。生成AIを使っていなくても、YouTubeのおすすめや運転支援・お掃除ロボット、スーパーの仕入れ管理など、すでにAIに囲まれて便利になっています。
-->

---

<div class="page-title">深層学習・機械学習</div>

<div style="font-size:26px; font-weight:800; margin:2px 0 6px;"><b>機械学習/深層学習</b>で実現すること</div>

<img src="./src/fig11-charts.png" alt="機械学習/深層学習の4つの用途（売上需要予測・異常故障検知・可視化分類・強化学習と自動化）" style="display:block; height:352px; max-width:100%; margin:4px auto 0;">

<div class="box-accent pip-safe" style="margin-top:10px; text-align:center;">統計や機械学習は、<b>未来</b>や<b>全体</b>を知ることができない人間が、<br><b>世界を理解したり、作業を実行するために</b>編み出した技術</div>

<!--
- 機械学習・深層学習で実現すること。①売上・需要予測（在庫最適化）、②異常・故障検知（トラブル未然防止）、③データの可視化・分類（新たな知見）、④強化学習と自動化（複雑な制御）。統計や機械学習は、未来や全体を知れない人間が、世界を理解し作業を実行するために編み出した技術です。
-->

---

<div class="page-title">生成AIの仕組み</div>

<div style="font-size:25px; font-weight:800; margin:2px 0 8px;"><b>大規模言語モデルの中身 → ◯ 巨大な数字の塊　　<span style="color:var(--accent);">✗知識集・ルール集</span></b></div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="padding:10px 20px;">
<div style="font-size:27px; font-weight:800; margin-bottom:6px;">ネクストワードプレディクション</div>
<div style="border:2px solid var(--accent); border-radius:8px; padding:8px 12px; font-size:21px; background:#fff;">日本の首都__→日本の首都は__→日本の首都は東京__</div>
<div style="font-size:24px; font-weight:800; margin-top:8px;">次の言葉(トークン)の確率を予想する問題</div>
</div>

<div class="box-warn" style="margin-top:10px; background:#FBF1DE; border-color:#E0B36B; color:#1a1a1a; padding:10px 18px;">
<div style="display:grid; grid-template-columns:auto 1fr auto; gap:8px 16px; align-items:center; font-size:22px; font-weight:800;">
<div>学習</div>
<div style="grid-row:span 2; text-align:center;"><div style="border:2px solid #444; border-radius:6px; padding:10px 4px; background:#fff;"><div style="font-size:24px;">パラメーター<br>の函</div><div style="font-size:18px; margin-top:4px;">数字の羅列</div></div></div>
<div>出力</div>
<div>入力</div>
<div>評価</div>
</div>
<div style="font-size:20px; font-weight:700; margin-top:6px; line-height:1.5;">GPT 4：アメリカ議会図書館の<b>全蔵書の約22倍</b>相当?　<span style="font-size:18px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソースを元に学習している（更新）</span></div>
</div>

</div>
<div style="flex:0 0 320px;">
<img src="./src/fig12-llmviz.png" alt="大規模言語モデルの可視化（nano-gptの可視化）" style="display:block; height:430px; margin:0 auto;">
</div>
</div>

<!--
- 生成AIの仕組み。大規模言語モデルの中身は「巨大な数字の塊」で、知識集やルール集ではありません。やっているのはネクストワードプレディクション＝次のトークンの確率を予想する問題。パラメーターの函（数字の羅列）に入力し、出力を評価して更新する学習を繰り返す。GPT-4の学習量はアメリカ議会図書館の全蔵書の約22倍相当とも。
-->

---

<div class="page-title">生成AIの仕組み</div>

<div style="font-size:38px; font-weight:800; margin:2px 0 0;">利用 <span style="font-weight:800;">(推論・生成)</span></div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">

<div style="flex:1.55; background:#FBF1DA; border-radius:12px; padding:6px 16px 4px;">
<table style="width:100%; border-collapse:collapse; table-layout:fixed; font-size:19px; text-align:center;">
<tr style="font-weight:800; font-size:22px;">
<td style="padding-bottom:3px;">計算1回目</td>
<td style="padding-bottom:3px;">計算2回目</td>
<td style="padding-bottom:3px;">計算3回目</td>
</tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩は”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩は猫”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩は猫で”</div></td>
</tr>
<tr><td colspan="3" style="font-size:20px; color:#5a5f66; padding:1px 0;">▲ 出力</td></tr>
<tr>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">出力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">出力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">出力</div></td>
</tr>
<tr><td colspan="3" style="font-size:20px; color:#5a5f66; padding:1px 0;">▲</td></tr>
<tr>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:3px 2px; line-height:1.2;">AI処理<br>(デコーダ)</div></td>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:3px 2px; line-height:1.2;">AI処理<br>(デコーダ)</div></td>
<td><div style="background:#9C2D8E; color:#fff; font-weight:700; border-radius:8px; padding:3px 2px; line-height:1.2;">AI処理<br>(デコーダ)</div></td>
</tr>
<tr><td colspan="3" style="font-size:20px; color:#5a5f66; padding:1px 0;">▲</td></tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:3px 2px;">前処理</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:3px 2px;">前処理</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:3px 2px;">前処理</div></td>
</tr>
<tr><td colspan="3" style="font-size:20px; color:#5a5f66; padding:1px 0;">▲</td></tr>
<tr>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">入力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">入力</div></td>
<td><div style="background:#3F9C35; color:#fff; font-weight:800; border-radius:6px; padding:4px 2px;">入力</div></td>
</tr>
<tr><td colspan="3" style="height:4px;"></td></tr>
<tr>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩は”</div></td>
<td><div style="border:2px solid #333; background:#fff; border-radius:4px; padding:4px 2px;">“吾輩は猫”</div></td>
</tr>
</table>
</div>

<div style="flex:1; text-align:center;">
<img src="./src/fig13a-tokens-crop.png" alt="上位5トークンの確率分布（モデル: cyberagent/open-calm-7b）" style="height:430px;">
<div class="cite" style="margin-top:2px;">モデル： cyberagent/open-calm-7b</div>
</div>

</div>

<!--
- 推論・生成のしくみ。「吾輩」→「吾輩は」→「吾輩は猫」と、前の出力を入力に戻しながら1トークンずつ計算を繰り返す（自己回帰）。
- 右は実モデル open-calm-7b で次トークンの上位5候補と確率を示したもの。文脈（コンテキスト）を足すと確率分布が変わる。
-->

---

<div class="page-title">生成AIの仕組み</div>

# まとめ — この<span style="color:var(--accent-dark)">3つ</span>だけ

<div class="stepbox" style="margin-top:10px;">
<div class="st">① 大規模言語モデルがしていることとは<br><span style="margin-left:1.4em;"></span><b>次のもっともらしい単語(Token)を予測する作業</b></div>
</div>

<div class="stepbox">
<div class="st">② 大規模言語モデルの中身とは<br><span style="margin-left:1.4em;"></span><b>ルール集ではなく、数字(統計的な重み)の塊</b></div>
</div>

<div class="stepbox">
<div class="st">③ なぜ精度が上がったり、複雑なことも出来るのか<br><span style="margin-left:1.4em;"></span><b>繰り返し推論したり、ツール/情報を接続できるから</b></div>
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 56px);">まずは、この<b>3つ</b>だけ、覚えましょう　→詳細・体験・倫理は第4回へ</div>

<!--
- 仕組みパートのまとめ。①次トークン予測、②中身は数字の塊、③繰り返し推論・ツール接続で高度化。まずこの3つだけ覚えればよい。
-->

---

<div class="page-title">プロンプトとは？</div>

# プロンプトとは？

<div class="box-info" style="margin-top:6px; line-height:1.6;">
<div><b>プロンプト：</b>　生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと</div>
<div style="margin-top:8px;"><b>プロンプトエンジニアリング：</b>　生成AIから望ましい出力を得るために、指示や命令を設計、最適化すること</div>
<div style="margin-top:8px;"><b>コンテキストエンジニアリング：</b>　生成AIに読み込ませる中身を選択し、正確で関連性の高い出力を生成できるよう、タスクに必要な背景情報や前提条件（コンテキスト）を整理・最適化すること</div>
<div style="margin-top:8px;"><b>コンテキスト内学習：</b>　プロンプトに与えた文章から、生成AIがタスクの結果を生成できるようになること</div>
</div>

<div class="box-accent" style="margin-top:14px; margin-right:calc(var(--pip-w) + 56px); font-weight:800;"><b>良いプロンプト・コンテキスト</b>を入れれば、AIがより精度の高い情報を戻すようになる</div>

<!--
- プロンプト＝AIにタスクを促す自然言語の文章。それを設計・最適化するのがプロンプトエンジニアリング、背景情報まで整えるのがコンテキストエンジニアリング。
- 与えた文章からその場でタスクを覚えるのがコンテキスト内学習。良いプロンプト・コンテキストほど精度が上がる。
-->

---

<div class="page-title">プロンプトのコツ</div>

# プロンプトのコツ

<div class="box-info" style="margin-top:4px;">
<b>Few-shot：</b> プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法。コンテキスト内学習をGPTが出来るので、実現する
<div class="cite" style="margin-top:4px;">Prompt Engineering Guide　https://www.promptingguide.ai/jp/techniques/fewshot</div>
</div>

<div class="cardrow" style="margin-top:10px;">
<div class="pcard" style="background:#EAF2FB; border-color:#bcd4ee;">
<div style="font-weight:800; margin-bottom:6px;">Google検索的 (単語)</div>
これは素晴らしい! 感情?
</div>
<div class="pcard" style="background:#E9F5EC; border-color:#bfe0c8;">
<div style="font-weight:800; margin-bottom:6px;">Zero-shot</div>
「これは素晴らしい!」と 書いた書き手の感情を教えて下さい
</div>
<div class="pcard" style="background:#FBE9EC; border-color:#eecad1;">
<div style="font-weight:800; margin-bottom:6px;">Few-shot</div>
あの映画は最高だった!<br>&gt;ポジティブ<br>これは酷い! &gt;ネガティブ<br>「これは素晴らしい!」&gt;?
</div>
</div>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:10px;">
<div style="flex:1.4;">
<div style="font-weight:800;">スキーマ ：</div>
回答してほしいことをすべて構造化し、回答形式として指定する。<br><b>※Few-shotを組み合わせ、回答を例示する</b>
</div>
<div style="flex:1;">
<div style="font-weight:800; color:var(--accent-dark);">例)</div>
<div class="pcard" style="background:#FCF6E3; border-color:#ecdfae; margin-top:4px;">
<b>授業のタイトル：</b><br>　目的：<br>　到達目標：<br>　宿題の案：
</div>
</div>
</div>

<!--
- Few-shotは入力例と出力例のデモを与える技法。Google検索的な単語、Zero-shot（例なし指示）、Few-shot（例つき）の3段階で精度が上がる。
- スキーマは回答形式を構造化して指定する。Few-shotと組み合わせて回答例まで示すと安定する。
-->

---

<div class="page-title">複雑な処理を行う時のコツ</div>

# 複雑な処理を行う時のコツ

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:4px;">

<div style="flex:1;">
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-3　簡易プロンプト</div>
<div class="stepbox" style="margin:0 0 14px; padding:8px 18px;">
<div class="st" style="font-size:22px; margin:4px 0;"><b>Request</b> (依頼) を出す</div>
<div class="st" style="font-size:22px; margin:4px 0;"><b>Role</b> (役割) を決める</div>
<div class="st" style="font-size:22px; margin:4px 0;"><b>Regulation</b> (形式) を指定する</div>
</div>
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-5　詳細プロンプト</div>
<div class="stepbox" style="margin:0; padding:8px 18px;">
<div class="st" style="font-size:21px; margin:3px 0;"><b>Request</b> (依頼) を出す</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Role</b> (役割) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Regulation</b> (形式) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Rule</b> (ルール) を決める</div>
<div class="st" style="font-size:21px; margin:3px 0;"><b>Review &amp; Refine</b> (詳細・改善) を求める</div>
</div>
</div>

<div style="flex:1.15;">
<div style="font-size:20px; color:#555; margin-bottom:4px;">図5-1　プロンプト上手になるための7つのポイント</div>
<table style="width:100%; border-collapse:collapse; font-size:20px; line-height:1.4;">
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">① 明確な質問</td><td style="padding:3px 0;">曖昧な質問でなく明確な質問をすることで、より良い回答が得られます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">② 具体性</td><td style="padding:3px 0;">トピックや要求に具体的な詳細を提供することで、適切な回答を引き出すことができます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">③ プロンプトの構造</td><td style="padding:3px 0;">質問を構造化して、抜け・漏れをなくします。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">④ 文脈の提供</td><td style="padding:3px 0;">重要な文脈や背景情報を提供します。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑤ 複数の質問</td><td style="padding:3px 0;">必要に応じて、複数の質問を連続して投げます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑥ ステップバイステップ指示</td><td style="padding:3px 0;">段階的に考えさせます。</td></tr>
<tr><td style="vertical-align:top; padding:3px 8px 3px 0; font-weight:800; color:var(--accent-dark); white-space:nowrap;">⑦ 校正とフィードバック</td><td style="padding:3px 0;">得られた結果を評価し、精度向上を促します。</td></tr>
</table>
</div>

</div>

<div class="cite">『ChatGPT時代の文系AI人材になる』| 野口 竜司（東洋経済新報社 2023）</div>

<div class="box-accent" style="margin-top:6px; text-align:center; font-weight:800; margin-right:calc(var(--pip-w) + 56px);">困ったら、生成AIと一緒にプロンプトを作ろう</div>

<!--
- 複雑な処理は、依頼(Request)・役割(Role)・形式(Regulation)を基本に、ルールやReview & Refineを足して詳細化する。
- 7つのポイント（明確さ・具体性・構造・文脈・複数質問・段階指示・校正）も意識。困ったら生成AIにプロンプト自体を作らせるのが早い。
-->

---

<div class="page-title">大学のGeminiのメリット</div>

# 大学のGeminiのメリット

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:6px;">

<div style="flex:1.05;">
<div class="box-accent" style="font-weight:800;">① 入力が学習されない！<br><span style="font-weight:400; font-size:21px;">(オプトアウト済)　※大学版のCopilotも同様</span></div>
<div class="box-accent" style="font-weight:800; margin-top:10px;">② 学習向けのチューニング<br><span style="font-weight:400; font-size:21px;">(商用版よりは依存しにくい)　※名前を呼んだり馴れ馴れしくない</span></div>
<div class="box-accent" style="font-weight:800; margin-top:10px;">③ Google WSと連携できる<br><span style="font-weight:400; font-size:21px;">(@マークで読み込み簡単)</span></div>
</div>

<div style="flex:1;">
<div class="box-info" style="line-height:1.55;">以下に対処する意図でチューニングされている
<div style="margin-top:4px;">・AIへの過依存（答えを全部もらう）</div>
<div>・認知的オフロード（自分で考えなくなる）</div>
<div>・受動的学習（情報を受け取るだけ）</div>
</div>
<div style="margin-top:12px; display:flex; gap:14px; font-size:22px;">
<div style="flex:1; text-align:center;"><div style="font-weight:800;">作業自動化</div></div>
<div style="flex:1; text-align:center;"><div style="font-weight:800;">返信案の作成</div></div>
</div>
</div>

</div>

<div class="box-accent" style="margin-top:10px; text-align:center; margin-right:calc(var(--pip-w) + 56px);">大学版は、個人購入版よりも安心が大きいのと連携がウリ</div>

<!--
- 大学版Geminiの3つのメリット。①入力が学習されない（オプトアウト済）、②学習向けにチューニング（過依存しにくい）、③Google Workspaceと@で簡単連携。
- AIへの過依存・認知的オフロード・受動的学習に対処する設計。個人購入版より安心と連携が強み。
-->

---

<div class="page-title">Geminiで出来る色々</div>

# Geminiで出来る色々

<div style="display:flex; gap:16px; align-items:flex-start; margin-top:4px;">

<div style="flex:1;">
<div class="callout-blue" style="font-weight:800;">スライドの作成・修正</div>
<div class="callout-blue" style="font-weight:800; margin-top:8px;">プログラムの対話的作成</div>
<div class="callout-blue" style="font-weight:800; margin-top:8px;">絵・音声の文字起こし</div>
</div>

<div style="flex:1.5; text-align:center;">
<div style="font-weight:800; margin-bottom:6px;">絵/漫画の出力 ・ 図の修正</div>
<div style="display:flex; gap:10px; justify-content:center;">
<img src="./src/fig19a-aurora-crop.png" alt="生成画像：オーロラと旅客機" style="height:175px; border-radius:6px;">
<img src="./src/fig19b-chem-crop.png" alt="生成画像：化学実験の漫画" style="height:175px; border-radius:6px;">
</div>
<div style="margin-top:8px; display:flex; gap:10px; justify-content:center;">
<div class="callout-pink" style="font-weight:800; flex:1;">授業の解説や問題の作成</div>
<div class="callout-pink" style="font-weight:800; flex:1;">暗記の支援</div>
</div>
</div>

<div style="flex:1;">
<div style="font-weight:800; text-align:center; margin-bottom:6px;">曲/動画の作成</div>
<div class="box-accent" style="padding:8px 16px; font-size:21px; line-height:1.7;">
検索(DeepResearch)<br>スプレッドシートの分析<br>カレンダー/ToDo書込<br>業務支援ワークフロー
</div>
</div>

</div>

<div class="box-accent" style="margin-top:12px; text-align:center; font-weight:800; margin-right:calc(var(--pip-w) + 56px);">大学全体で共有 → 授業や職務で活用しやすい / 研修も実施</div>

<!--
- Geminiでできることは幅広い。スライド作成・修正、対話的なプログラム作成、絵/漫画の出力や図の修正、曲/動画の作成、文字起こし。
- 授業の解説・問題作成、暗記支援、DeepResearch検索、スプレッドシート分析、カレンダー/ToDo書込、業務ワークフローまで。大学全体で共有し研修も実施。
-->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns: 130px 1fr; gap:14px 20px; align-items:start; margin-top:8px;">

<div style="font-size:30px; font-weight:800; padding-top:6px;">目的</div>
<div class="box-accent" style="font-weight:800;">Session 1：<br><span style="margin-left:1.2em;">プロンプティングのコツと生成AIの基礎を知る！</span></div>

<div style="font-size:30px; font-weight:800; line-height:1.3; padding-top:6px;">目標<br><span style="font-size:24px;">＋まとめ</span></div>
<div class="box-info" style="line-height:1.5;">
<div style="font-weight:800;">AI/生成AIとは何かを理解する</div>
<div style="margin-left:1em;">次のトークンを予測する仕組み</div>
<div style="margin-left:1em;">繰り返しの推論やツール/情報を接続して性能向上</div>
<div style="font-weight:800; margin-top:6px;">プロンプティングのコツを知る</div>
<div style="margin-left:1em;">7R法/Few shot/スキーマ利用</div>
<div style="margin-left:1em;">困ったら生成AIに書かせる</div>
<div style="font-weight:800; margin-top:6px;">千葉大学のGeminiの機能と利点を知る</div>
<div style="margin-left:1em;">オプトアウト、学習にむけた最適化、WSとの連携</div>
</div>

</div>

<!--
- Session 1の振り返り。目的は「プロンプティングのコツと生成AIの基礎を知る」。
- 目標とまとめ：①AI/生成AIの仕組み（次トークン予測・繰り返し推論・ツール接続）、②プロンプトのコツ（7R法・Few shot・スキーマ・困ったらAIに書かせる）、③千葉大Geminiの機能と利点（オプトアウト・最適化・WS連携）。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:24px;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:22px; margin:4px 0 14px;">30-min sessions</div>

<div class="box-accent" style="max-width:880px; margin:0 auto; font-weight:800; font-size:28px;">Session 2：<br><span style="margin-left:1.2em;">Geminiの機能を最大限使いこなしてみる</span></div>

<div style="text-align:center; font-size:24px; margin-top:20px;">国際未来教育基幹 田川 翔</div>

<!--
- セッション区切り（中扉）。ここから Session 2：Geminiの機能を最大限使いこなしてみる。30分のハンズオンに入る。
-->

---

<div class="page-title">本日のワークの中身</div>

# 本日のワークの中身

<div style="font-size:21px; margin-bottom:4px;"><b>どっちか：</b>　まずは、Geminiに詳しくなりたい人向け　<span class="tag tag-soft" style="font-size:20px;">初級編：Geminiを使い倒す</span>　／　定型作業・マニュアルを自動化したい人向け　<span class="tag tag-accent" style="font-size:20px;">中級編：Gemsを作ってみる</span></div>

<div style="display:grid; grid-template-columns: 150px 1fr; gap:10px 14px; align-items:stretch; margin-top:6px;">

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 1<br>仲間を作る！</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">
<div><b>会場：</b> まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に<b>自己紹介</b>を(チーム内で別々を選んでもOK)</div>
<div style="margin-top:4px;"><b>zoom：</b> <b>原則1人</b>でAIと実施です。但し、Breakoutを作ります。関心があれば、2-3人で散らばってみて下さい。</div>
</div>

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 2<br>手順書で実践</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">各自、<b>実践してみる</b>。困ったら自己紹介した人に聞いてみて下さい。進行は、<b>一人も協力もOKです。</b>講師/スタッフへの質問もOKです。進行すると共に、Spreadsheetを順次、埋めて下さい。</div>

<div class="stepbox" style="margin:0; display:flex; flex-direction:column; justify-content:center; border-left:7px solid var(--accent);"><span style="font-weight:800; color:var(--accent);">Phase 3<br>評価・反省</span></div>
<div class="box-info" style="display:flex; flex-direction:column; justify-content:center;">気づいたことを、グループまたは個人でまとめて、<b>slido</b>に記入する。※グループになったところは、まずはメンバーで話してみましょう。※他の人の作品を試してみて、気付きを得るのも良い。</div>

</div>

<div class="cite pip-safe" style="margin-top:6px;">※slido/ワークへの入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<!--
- ワークは3フェーズ。Phase 1で仲間づくり（会場はペア/3人で自己紹介、zoomは原則1人）。
- Phase 2は手順書で実践しSpreadsheetを埋める。Phase 3で気づきをまとめてslidoに記入。初級＝Geminiを使い倒す、中級＝Gemsを作る。
-->

---

<div class="page-title">ワーク① Geminiの機能を使う</div>

# ワーク① Geminiの機能を使う

<div class="box-warn" style="margin-top:4px;"><b>手順書にしたがって、Geminiの機能を使ってみよう (標準 20分)</b></div>

<div style="font-size:22px; margin:8px 0 4px;">手順書内にプロンプトがあるので、それぞれやってみましょう。</div>

<div style="display:grid; grid-template-columns: 1fr 200px; gap:6px 16px; align-items:center; margin-top:4px; font-size:23px;">
<div><b>① Google カレンダーに予定を立てる。読み込む。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">アプリ連携</div>
<div><b>② 概念を暗記するための4択問題を5個作ってみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">ガイド付き学習</div>
<div><b>③ AIリテラシーの歌(30秒)を作ってみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Lyria 3</div>
<div><b>④ Webを検索してみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Ground機能</div>
<div><b>⑤ 文章を翻訳させたり、Geminiと共同編集してみる。</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Canvas機能</div>
<div><b>⑥ 問題の解説をさせてみる</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">マルチモーダル機能</div>
<div><b>⑦ 英語と日本語まじりで会話してみる(スマホアプリ版必要)</b></div><div class="tag tag-soft" style="text-align:center; font-size:21px;">Live機能</div>
</div>

<div class="box-info pip-safe" style="margin-top:8px; font-size:21px;">やったことある分は、～(使ってる！)と書いてとばしましょう。1項目終わるごとに、ここに◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。完了した人は、応用のワーク2に取り組んでみましょう。</div>

<!--
- ワーク①は手順書に沿って20分でGeminiの機能を一通り試す。①カレンダー連携、②4択問題作成、③AIリテラシーの歌(Lyria 3)、④Web検索(Ground)。
- ⑤翻訳・共同編集(Canvas)、⑥問題解説(マルチモーダル)、⑦英日まじり会話(Live)。済みは飛ばし、各項目を◯△✗で評価。終わったらワーク2へ。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:grid; grid-template-columns: 130px 1fr; gap:24px 20px; align-items:start; margin-top:14px;">

<div style="font-size:30px; font-weight:800; padding-top:8px;">目的</div>
<div class="box-accent" style="font-weight:800; font-size:27px;">Session 2：<br><span style="margin-left:1.2em;">Geminiの機能を最大限使いこなしてみる</span></div>

<div style="font-size:30px; font-weight:800; line-height:1.3; padding-top:8px;">目標<br><span style="font-size:24px;">＋まとめ</span></div>
<div class="box-info" style="font-size:26px; line-height:1.7;">
<div>・半構造化データから役立つ情報を引き出せた</div>
<div>・構造化データの近未来の分析を体験できた</div>
</div>

</div>

<!--
- Session 2の振り返り。目的は「Geminiの機能を最大限使いこなしてみる」。
- 目標とまとめ：半構造化データから役立つ情報を引き出せた／構造化データの近未来の分析を体験できた。
-->

---

<div class="page-title">Session 3</div>

<div class="title-hero" style="text-align:center; margin-top:18px;">
<div class="title-small" style="font-size:40px; font-weight:800;">学びを変える！研究を深める！</div>
<div class="title-big" style="font-size:76px; font-weight:800; color:var(--accent); line-height:1.15;">生成AI活用術</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:28px; margin-top:18px;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>

<div style="text-align:center; color:var(--accent-dark); font-weight:700; font-size:24px; margin-top:6px;">15-min sessions</div>

<div class="box-accent" style="max-width:880px; margin:24px auto 0; text-align:left;"><b>Session 3：</b><br><span style="display:inline-block; margin-left:1.4em;">今日の気づきをみんなで共有してみる。</span></div>

<div style="text-align:center; font-size:26px; margin-top:22px;">国際未来教育基幹　田川 翔</div>

<!--
- ここからSession 3。最後の15分は、今日の気づきをみんなで共有してみます。
-->

---

<div class="page-title">Session 3の進め方</div>

# <span style="color:var(--accent-dark)">議論・座談会</span><span class="tag tag-accent" style="font-size:24px; margin-left:12px;">最後の15分</span>

<div class="box-info" style="margin-top:6px;">
- 今日学んで面白かったことは何でしたか。<br>
- AIの学び方って、どうすれよいと思いますか。<br>
- 今後、どんな点を特に学んでみたいですか。
</div>

<div class="cite pip-safe" style="margin-top:6px; font-size:16px;">※slidoへの入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<div class="subhead" style="margin-top:8px;"><span class="tag tag-soft">Slidoで進めます</span></div>

<div style="display:flex; gap:24px; align-items:center; margin-top:4px;">
<div style="text-align:center;">
<div style="font-weight:800; font-size:22px; margin-bottom:4px;">スマホから</div>
<img src="./src/fig50-qr-slido.png" alt="Slido QRコード" style="width:118px;">
</div>
<div style="font-size:21px; line-height:1.5;">
<div style="font-weight:800; margin-bottom:2px;">PCから</div>
方法1　Google検索「Slido」→コード入力　<span class="tag tag-soft" style="font-size:19px;">ALC-AI2-01</span><br>
方法2　直接リンク　<span style="color:var(--tag-blue); font-size:18px; word-break:break-all;">https://app.sli.do/event/iJQ71dhpuqstH3wbGSYpRD</span>
</div>
</div>

<div class="box-warn pip-safe" style="position:absolute; left:48px; bottom:28px; width:calc(100% - 96px - var(--pip-w));">
<b>お願い：協力的な場作りが、学びの秘訣です。</b><br>
<span style="display:inline-block; margin-left:1.2em; font-weight:700; color:#8a4b00;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span>
</div>

<!--
- 最後の15分は議論・座談会。Slidoで「面白かったこと／AIの学び方／今後学びたいこと」を共有します。協力的な場作りが学びの秘訣です。
-->

---

<div class="page-title">終了時アンケート・次回予告</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<img src="./src/fig52-qr-survey.png" alt="終了時アンケートQRコード" style="width:170px;">
<div class="box-accent" style="flex:1;">
次回以降も「さらにみなさんのニーズにあわせた」企画を実施するため、<b>終了時アンケート</b>へのご協力をお願いいたします。<br>
<span style="color:var(--tag-blue); font-size:21px;">https://forms.gle/5sXy6f5yZkoJ8XJZ7</span>
</div>
</div>

<div class="cite" style="margin-top:8px;">【お願い】アンケートへの入力情報のうち【個人情報や機微情報を除いた】情報を、アカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<div style="display:flex; gap:28px; align-items:stretch; margin-top:12px;">

<div style="flex:1.1; border:2.5px solid var(--accent); border-radius:14px; padding:14px 22px;">
<div class="tag tag-accent" style="font-size:23px; margin-bottom:8px;">次回予告</div>
<div style="font-weight:800; font-size:26px;">学びを変える！研究を深める！</div>
<div style="font-weight:800; font-size:40px; color:var(--accent); line-height:1.1;">生成AI活用術</div>
<div style="color:var(--accent-dark); font-weight:700; font-size:21px; margin-top:8px;">2026年度 第2回： <b>生成AIを利用した学び方 (ゲスト講師回)</b></div>
<div style="color:var(--muted); font-size:19px; margin-top:2px;">15-min or 30-min × 3 sessions　<span class="tag tag-soft" style="font-size:18px;">学部1年生にもおすすめ</span></div>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<div style="font-size:25px; line-height:1.5;">● 情報・データサイエンス学部 3年の先輩と自分で進めます。<br>● 学生目線の意見にも注目です！</div>
<div class="box-warn pip-safe" style="text-align:center;"><span style="font-size:28px;"><b>5/25 (月)</b> 16:10 - 17:10</span><br>会場(ここ)・オンライン併用</div>
</div>

</div>

<!--
- 終了時アンケートにご協力ください。次回・第2回は「生成AIを利用した学び方」(ゲスト講師回)。情報・データサイエンス学部3年の先輩と進めます。5/25(月)16:10-17:10。
-->

---

<div class="page-title">ワーク② Gemを作る</div>

<div class="box-accent" style="margin-bottom:10px;"><b>応用編 Gem：学内に共有出来るAIエキスパートを作ろう (標準 20分)</b></div>

<div style="display:flex; gap:24px; align-items:flex-start;">

<div style="flex:1.4;">
<div style="font-size:24px; line-height:1.5;"><b>① Gemを作ってみましょう。作る際にプロンプト作成支援Gemsを使って見ましょう。</b></div>
<img src="./src/fig53-gem-ui.png" alt="Gem作成画面（名前・システムプロンプト・知識ファイル・ユーザープロンプト）" style="width:100%; max-width:660px; margin-top:8px; border-radius:8px;">
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div style="text-align:center;">
<img src="./src/fig54-qr-gems.png" alt="プロンプト作成支援Gems QRコード" style="width:120px;">
<div style="font-size:22px; color:var(--accent-dark); font-weight:700; margin-top:4px;">プロンプト作成支援Gems</div>
</div>
<div style="font-size:21px; text-align:center;">入力内容は作成者は見れません</div>
<div class="box-info pip-safe">
● <b>名前</b>と<b>システムプロンプト</b>は必須<br>
● ユーザープロンプトに入力し評価<br>
● 悪用・個人情報入力NG
</div>
</div>

</div>

<div class="box-warn pip-safe" style="margin-top:8px;">
<b>② 動くまで試行錯誤してみましょう。</b><br>
<b>③ 面白いものができたら、ここに共有リンクを共有して下さい。(共有範囲→学内)</b>
</div>

<!--
- ワーク②は応用編。プロンプト作成支援Gemsを使ってGemを作る。名前とシステムプロンプトは必須、入力内容は作成者には見えません。動くまで試行錯誤し、面白いものは学内に共有リンクを共有してください。
-->
