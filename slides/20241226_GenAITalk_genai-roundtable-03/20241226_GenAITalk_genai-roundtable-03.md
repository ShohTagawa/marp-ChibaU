---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI座談会</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 20%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AIと理学の学びを考えてみる</div>
<div class="title-big"><span style="color:var(--accent);">非公式</span> 座談会 <span style="font-size:.5em;color:#222;">(ワークショップ)</span></div>
</div>

<div class="goal-box" style="max-width:980px; margin:6px auto 0;"><b>本日の内容 (この時間の目的)：</b><br>－　AIと自分の学びの関係を考え、自らの意見を見つける。<br>－　AIについて、気になった点を聞いてみる。</div>

<div style="text-align:center; font-size:30px; font-weight:800; color:var(--accent-dark); margin:18px 0 6px;">注意：正解が無い問です</div>

<div class="title-meta" style="margin-top:6px;">
<div><b>高等教育センター 助教</b>　田川　翔</div>
<div class="title-date">2024年12月25日</div>
</div>

<!--
- タイトルコール。生成AIと理学の学びを考える、非公式の座談会（ワークショップ）です。
- 本日の目的は、AIと自分の学びの関係を考えて自らの意見を見つけること、そしてAIについて気になった点を聞いてみること。正解が無い問なので、自由に考えてみてください。
-->

---

# <span style="color:var(--accent-dark);">鉄腕アトムは、必要なのだろうか？</span>

<div style="height:120px;"></div>

<div style="text-align:center; font-size:30px; color:#666;">— まずは、ここから考えてみましょう —</div>

<!--
- 問いかけから始めます。「鉄腕アトムは、必要なのだろうか？」という問いを、頭の片隅に置いてみてください。
-->

---

# <span style="color:var(--accent-dark);">2025</span>年、挑みはじめてみたいこと

<div class="box-accent" style="margin-top:24px; padding:20px 28px;">
<div style="font-size:30px; font-weight:800; text-align:center; color:#222;">1．教員・学修者双方の支援</div>
<div style="text-align:center; font-size:25px; margin-top:10px; color:#222;">
教員・学生・生成AIによる授業デザイン<br>
目的に特化した生成AI開発<br>
実装方法の検討・実装・販売
</div>
</div>

<div style="background:#EFEFEF; border-radius:12px; padding:18px 28px; margin-top:24px; text-align:center;">
<span style="font-size:30px; font-weight:800; color:#222;">2. 生成AIなどを用いた学務支援</span>
</div>

<!--
- 2025年に挑みはじめてみたいことが2つあります。1つ目は教員・学修者双方の支援。授業デザイン、目的特化型の生成AI開発、その実装・販売まで。
- 2つ目は、生成AIなどを用いた学務支援です。
-->

---

# <span style="color:var(--accent-dark);">私の主義</span>

<div class="box-accent" style="margin-top:8px; padding:8px 22px; text-align:center;">
<div style="font-size:26px; font-weight:800; color:#222;">1．人間中心設計 + 人間介在志向</div>
<div style="font-size:22px; margin-top:2px;">共存・共創するレベルでのデザイン (場モデル)　≠ 人間 vs AIモデル</div>
</div>
<div style="text-align:center; font-size:20px; color:#333; margin:4px 0;">人が価値を感じない仕事はAIでもよいが、人が価値を作れる領域ではAIは人の支援に徹するべき。</div>

<div style="background:#E3F1E0; border:2px solid #6FBF73; border-radius:12px; padding:8px 22px; text-align:center;">
<div style="font-size:26px; font-weight:800; color:#222;">2. ディープアクティブラーニング</div>
<div style="font-size:22px; margin-top:2px;">タスク中心教授法、Case Studyや学習支援の推進<br>≠ 暗記、≠ 専門、≠ 直接的な社会課題解決</div>
</div>
<div style="text-align:center; font-size:20px; color:#333; margin:4px 0;">授業で知識を学ぶのではなく、教養や学び続ける力を身につけるべき<br>暗記はとても重要、でも、それを使う場も重要</div>

<div style="display:flex; gap:16px; align-items:center;">
<div style="background:#DCEEF7; border:2px solid #1A6BB0; border-radius:12px; padding:8px 22px; text-align:center; flex:1;">
<span style="font-size:25px; font-weight:800; color:#222;">3. 実践主義、たたき台先行、EASTアプローチ</span>
</div>
<div style="font-size:19px; line-height:1.35; color:#444; flex:none; white-space:nowrap;">Easy / Attractive /<br>Social / Timely</div>
</div>
<div style="text-align:center; font-size:20px; color:#333; margin:4px 0;">実践・実験と理論のバランスを取る、さっさと間違えて次に行く</div>

<!--
- 私の主義は3つ。1つ目は人間中心設計＋人間介在志向。人とAIが共存・共創する「場モデル」でデザインし、人間 vs AI モデルにはしない。
- 2つ目はディープアクティブラーニング。タスク中心の教授法やCase Studyで、暗記そのものではなく、それを使う場を重視する。
- 3つ目は実践主義・たたき台先行・EASTアプローチ。Easy / Attractive / Social / Timely を意識し、さっさと間違えて次に行く。
-->

---

# <span style="color:var(--accent-dark);">私のポートフォリオと繋がり</span>

<div style="display:flex; gap:18px; align-items:center;">

<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<div style="border:2px solid #2a2a2a; border-radius:14px; padding:10px 18px;">
<div style="font-weight:800; text-align:center; font-size:24px;">専門バカにならない (教養?)</div>
<div style="font-size:22px; line-height:1.45;">- 東工大 池上彰 読書会 (今も)<br>- 地球惑星科学の「一人独学」<br>- 民間経験</div>
</div>
<div style="border:2px solid #2a2a2a; border-radius:14px; padding:10px 18px;">
<div style="font-weight:800; text-align:center; font-size:24px;">学生参画</div>
<div style="font-size:22px; line-height:1.45;">- 学生参画による教養教育課程改革<br>- 学生参画によるオンライン授業作成<br>- ICT支援のTA組織運営</div>
</div>
</div>

<img src="./src/fig01-img.jpg" alt="田川 翔" style="width:190px; height:190px; border-radius:50%; object-fit:cover; flex:none;">

<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<div style="border:2px solid #2a2a2a; border-radius:14px; padding:10px 18px;">
<div style="font-weight:800; text-align:center; font-size:24px;">情報・DS</div>
<div style="font-size:22px; line-height:1.45;">- 東京大学松尾研授業支援<br>- DS授業<br>- 民間のDS教育</div>
</div>
<div style="border:2px solid #2a2a2a; border-radius:14px; padding:10px 18px;">
<div style="font-weight:800; text-align:center; font-size:24px;">学生との協業</div>
<div style="font-size:22px; line-height:1.45;">- WAZED / WillSeed河合塾<br>- 大総センター/情報基盤センター<br>- 千葉大ALC</div>
</div>
</div>

</div>

<div style="display:flex; gap:24px; margin-top:14px;">
<div style="background:#EFEFEF; border-radius:8px; padding:6px 26px; font-size:22px;">過去の経験</div>
<div style="background:#EFEFEF; border-radius:8px; padding:6px 26px; font-size:22px;">今の繋がり</div>
</div>

<!--
- 私のポートフォリオと繋がりです。左が過去の経験、右が今の繋がり。
- 専門バカにならないための教養、学生参画の経験、情報・データサイエンス、そして学生との協業という4つの軸で動いてきました。
-->

---

# <span style="color:var(--accent-dark);">私の計画</span>

<div style="text-align:center; margin-top:8px;">
<img src="./src/fig02-img.png" alt="私の計画：教員・学生・生成AIによる授業デザインから、領域特化Chatボット・学修プラットフォームAPP・学修ポートフォリオまでの全体像" style="max-height:540px; max-width:88%;">
</div>

<!--
- これが私の計画の全体像です。大学の授業の収録Moodle映像や既存のMOOC/SPOCを素材に、生成AIで領域特化したChatボットや学修プラットフォームを作る。
- 課題①はFD/教授法開発・教室の再設計、課題②は各学問領域へのAI融合、課題③はAIによる個別最適な知識伝達・課題設定。まずはここで、千葉大に強みがあると考えています。
-->

---

<div class="page-title">担当講師自己紹介</div>

# <span style="color:var(--accent-dark);">担当講師自己紹介</span>

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:10px;">

<div style="flex:none; text-align:center;">
<img src="./src/fig01-img.jpg" alt="田川 翔" style="width:200px; height:240px; border-radius:14px; object-fit:cover;">
<div style="font-size:30px; font-weight:800; margin-top:8px;">田川 翔</div>
<div style="font-size:20px; color:#666;">(たがわ しょう)</div>
</div>

<div style="flex:1; font-size:23px; line-height:1.6;">
<div><b>所属：</b>千葉大・高等教育センター<br><span style="font-size:20px; color:#555;">※ 12月よりアカデミックリンクセンター兼任</span></div>
<div style="margin-top:8px;"><b>専門：</b>地球惑星科学 (高圧地球科学) /高等教育論</div>
<div style="margin-top:8px;"><b>経歴：</b>中高　…　宮崎山の中で寮生活<br>学部～大学院　…　地球の起源を探る<br><span style="font-size:20px; color:#555;">※ 2020年3月 博士(理学) 取得</span><br>その後、教育領域 → 理学領域 → 航空会社</div>
</div>

</div>

<div class="box-info pip-safe" style="margin-top:12px; display:flex; gap:16px; align-items:center;">
<div style="flex:1;"><b>研究例：</b>「海の起源」の仮説検証　Tagawa et al. (2021)</div>
<img src="./src/fig05-img.png" alt="Tagawa et al. (2021) Nature Communications" style="height:70px;">
</div>

<!--
- 担当講師の自己紹介です。所属は千葉大・高等教育センター、12月よりアカデミックリンクセンター兼任。専門は地球惑星科学（高圧地球科学）と高等教育論。
- 経歴は、宮崎の山の中で寮生活、学部から大学院では地球の起源を探り、2020年3月に博士（理学）を取得。その後、教育・理学・航空会社と渡り歩きました。研究例は「海の起源」の仮説検証、Tagawa et al. (2021) です。
-->

---

<div class="page-title">インタラクティブ化ツール</div>

# <span style="color:var(--accent-dark);">インタラクティブ化ツール</span>　<img src="./src/fig07-img.png" alt="slido" style="height:46px; vertical-align:middle;">

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:10px;">

<div style="flex:1; font-size:25px; line-height:1.7;">
<div style="font-weight:800;">①反応を送付できます</div>
<div style="background:#EFEFEF; border-radius:8px; padding:4px 18px; display:inline-block; margin:6px 0; font-size:23px;">リアクション、大歓迎です</div>
<div style="font-weight:800;">②アンケートを取らせて頂きます</div>
<div style="padding-left:1.2em; font-size:23px;">自動的に画面が変わります</div>
<div style="font-weight:800;">③質問もこちらにご入力下さい</div>
</div>

<div style="flex:none; text-align:center;">
<div style="font-size:23px; margin-bottom:8px;">PCまたはスマホで開いて下さい</div>
<img src="./src/fig06-img.png" alt="slido QRコード" style="width:200px; height:200px;">
<div style="font-size:30px; font-weight:700; margin-top:8px; line-height:1.25;">slido.com<br>#2311 489</div>
</div>

</div>

<!--
- インタラクティブ化のためにslidoを使います。①反応を送付できます。リアクション大歓迎です。
- ②アンケートを取らせて頂きます。回答すると自動的に画面が変わります。③質問もこちらにご入力下さい。PCまたはスマホで、slido.com の #2311 489 から開いてください。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">ワーク①</div>

# ワーク①

<div class="box-accent" style="margin-top:60px; padding:28px 36px; font-size:34px; line-height:1.6;">
生成AIは、<b>理学のどんな点に</b>活用できるか
<div style="font-size:27px; margin-top:16px; padding-left:1.5em; line-height:1.7;">
時間管理：10分GW、5分共有<br>
回答形式：Yes/No、なぜそう思うのか？
</div>
</div>

<!--
- ワーク①です。生成AIは、理学のどんな点に活用できるか、を考えてみてください。
- 時間管理は10分グループワーク、5分共有。回答形式はYes/Noで、なぜそう思うのかも添えてください。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark);">デモ：理解を支援する、課題での情報の分析を行う、問題を作成する</span>

<div class="subhead"><img src="./src/fig08-img.png" alt="NotebookLM" style="height:36px;"><span style="font-size:22px; color:#555;">by</span><img src="./src/fig09-img.png" alt="Google" style="height:26px;"><span style="font-size:22px; color:#555;">(5分)　研修後、Gemini / NotebookLMのデモ動画を共有</span></div>

<div style="display:flex; gap:16px;">

<div style="flex:1;">
<div class="box-info" style="font-size:21px; line-height:1.5;">
① Notebook LMにアクセスしてみて下さい<br>　https://notebooklm.google.com/<br>
② 新規作成をクリックし、論文等のPDFや興味ある学習YouTubeなどを読み込ませて下さい<br>
③ 分析後、質問を書いたり、選んだり、英語による要約を確認してみて下さい<br>
④ 学生がよく持ちがちな誤概念について、間違っている理由を説明させて下さい
</div>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="box-warn" style="font-size:20px; line-height:1.45;">
逆に言えば、学生スライドや配布資料をもとに、レポートを書くことや検索することが可能です<br>
<b>→ ある程度重たい課題でも学生は実施出来ます / 逆に、簡単な課題はAIが答えてしまいます</b><br>
<span style="font-weight:400; color:#8a4b00;">※情報の変換・統合的なタスクであり比較的安心ですが、ハルシネーションはまだ発生します。</span>
</div>
<div style="border:2px solid #aaa; border-radius:10px; padding:8px 16px; font-size:20px; line-height:1.45;">
授業動画ファイルも、Gemini Pro (有料版)に読み込ませて、要約などが可能です。<br>(支援が必要な学生向けに有効かも… / でも、授業を聞かなくてもよい、とはならないはずです)
</div>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:21px;">▶生物×物理とか、分野横断/学際的な学習も支援や実装出来る？　　▶先生方の感想や気付きを、コメントスクリーンでご共有頂けませんか (5分)</div>

<!--
- ②課題での利用例のデモです。NotebookLM by Google を使って、理解を支援し、課題での情報の分析を行い、問題を作成します。研修後にGemini / NotebookLMのデモ動画を共有します。
- 手順は、NotebookLMにアクセスし、論文PDFや学習動画を読み込ませ、分析後に質問や英語要約を確認し、学生がよく持つ誤概念の間違っている理由を説明させる、という流れです。
- 逆に言えば、配布資料をもとにレポートを書くことも可能で、重たい課題でも学生は実施できる一方、簡単な課題はAIが答えてしまいます。情報の変換・統合は比較的安心ですが、ハルシネーションはまだ発生します。
- 先生方の感想や気付きを、コメントスクリーンでご共有頂けませんか。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark);">動画を解釈する / 個別の生成AIツールを作成する</span>

<div style="display:flex; gap:18px; margin-top:14px;">

<div style="flex:1;">
<div class="box-info" style="display:flex; gap:14px; align-items:center;">
<img src="./src/fig10-img.png" alt="Google AI Studio QRコード" style="width:120px; height:120px; flex:none;">
<div style="font-size:22px; line-height:1.5;"><b>自分の講義動画から授業の要約や問題作成をする例 (たたき台作成向け)</b><br>Google AI studio</div>
</div>
</div>

<div style="flex:1;">
<div style="border:2px solid #aaa; border-radius:12px; padding:13px 24px; display:flex; gap:14px; align-items:center;">
<img src="./src/fig11-img.png" alt="Claude プロジェクト機能 QRコード" style="width:120px; height:120px; flex:none;">
<div style="font-size:22px; line-height:1.5;"><b>PDFをアップロードするだけで、フィードバックシートを作成する例 Claude 有料版 プロジェクト機能</b></div>
</div>
</div>

</div>

<div class="box-accent pip-safe" style="margin-top:18px; font-size:23px; line-height:1.55;">
※昨今、これらのツールが大きく進展し、LangChainを使わずとも、Google / AWS / OpenAI等の公式ツールや、Dify等のサードパーティツールで、目的特化型の生成AI chatbotを設計出来るようになっています。
</div>

<div class="cite pip-safe">https://geophysica.notion.site/Google-AI-studio-145d8c8bc5ab80a29a94dd3acf009c54?pvs=4　/　https://geophysica.notion.site/Claude-project-145d8c8bc5ab8037a41ad7fb7b3cf2d4?pvs=4</div>

<!--
- 動画を解釈したり、個別の生成AIツールを作成する例です。左は、自分の講義動画から授業の要約や問題作成をする例で、Google AI studio。たたき台作成向けです。
- 右は、PDFをアップロードするだけでフィードバックシートを作成する例で、Claude有料版のプロジェクト機能を使います。
- 昨今これらのツールが大きく進展し、LangChainを使わずとも、Google / AWS / OpenAIの公式ツールや、Dify等のサードパーティツールで、目的特化型の生成AI chatbotを設計できるようになっています。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark);">参考：理解を支援するための他のGoogleツール</span>

<div class="subhead"><span style="font-size:30px; font-weight:800;">LearnLM</span><span style="font-size:22px; color:#555;">by</span><img src="./src/fig09-img.png" alt="Google" style="height:26px;"><span style="font-size:22px; color:#555;">Jurenka et al. (2024) on Arxiv　研修後、LearnLMのデモ動画を共有</span></div>

<div class="box-info" style="margin-top:8px; font-size:23px; line-height:1.55;">
① Google AI Studioにログインしてみて下さい<br>　https://aistudio.google.com/prompts/new_chat?hl=ja<br>
② 新規作成/Create New Promptをクリックし、LearnLMを選択後、先生の分野における法則や概念、事実とされている内容を質問してみて下さい<br>
③ その内容について、問題を作成したり、先生の興味から解説するよう聞いて下さい
</div>

<div style="display:flex; gap:16px; margin-top:12px;">
<div class="box-accent" style="flex:1; font-size:21px; line-height:1.5;">
<b>LearnLM</b>の取り組みについて<br>「Google の使命は、世界中の情報を整理し、世界中の人がアクセスできて使えるようにすること」
</div>
<div style="flex:1; border:2px solid #aaa; border-radius:10px; padding:10px 18px; font-size:21px; line-height:1.5;">
Google labs の中に、幾つかの開発中の製品があり、教育への影響もありそうです<br>　→ https://labs.google/<br>
例：Illuminate (何でもソクラテス化：説明文や論文を対話的な解説に変えてしまうAI)
</div>
</div>

<!--
- 参考として、理解を支援するための他のGoogleツール、LearnLMを紹介します。Jurenka et al. (2024) on Arxiv。研修後にLearnLMのデモ動画を共有します。
- 手順は、Google AI Studioにログインし、新規作成からLearnLMを選び、先生の分野の法則や概念を質問し、その内容について問題を作成したり解説させたりする、という流れです。
- Google labs には開発中の製品が幾つかあり、教育への影響もありそうです。例えばIlluminateは、説明文や論文を対話的な解説に変えてしまう「何でもソクラテス化」AIです。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">ChatGPT(無料版)</span>の現状

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<div style="flex:0 0 360px;">
<img src="./src/fig13-crop.png" alt="SimpleQA ベンチマーク（モデル別の correct / not attempted / incorrect）" style="width:360px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-info" style="margin-top:10px; font-size:20px; padding:8px 14px;">SimpleQA：回答の事実的正確性のベンチマーク<br>Wei et al. (2024) Arxiv</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:21px; padding:10px 16px;">例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?<br>　　A. Michio Sugeno</div>

<div style="font-size:22px; margin:6px 0 0;">知識のエッジ(=学習回数小)にある内容も含めてある</div>

<div class="box-warn" style="margin-top:10px; font-size:22px;">問題を解かせたり、論文を探させた場合等、<br>無料版である<b>4o mini</b>は、「分からない」ということもなく、<b>ハルシネーション</b>する可能性が高い</div>

<div class="box-accent" style="margin-top:10px; font-size:22px;">但し、本流の知識を求めた場合については、<br>　- 正しく説明したり、<br>　- 答えを与えた状態でその理由を説明させると正しい<br>可能性が高い。</div>

</div>
</div>

<!--
- 無料版ChatGPT(4o mini)の現状。SimpleQAベンチマークでは、知識のエッジにある問いに対してハルシネーションが多い。一方、本流の知識なら正しく説明できる可能性が高い。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">ChatGPT(有料版)</span>の現状

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>1. インタラクティブに数値実験する</b></div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>2. 質問を自動生成する</b> → <b>精緻化（elaboration）</b></div>
<div class="box-accent" style="margin-top:6px; font-size:20px; padding:8px 14px;">「なぜそうなっているのか（Why）？」<br>「どのようにそうなっているのか（How）？」<br>「具体例は何なのか（What）？」</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>3. o1を使って、問題の詳細な解説を得る</b></div>
<div class="box-accent" style="margin-top:6px; font-size:20px; padding:8px 14px;">自分は、この問題について、〇〇と思った。<br>解答は、△だった。なぜ？</div></div>

</div>
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>4. Webで検索する</b></div>
<div style="font-size:20px; margin-top:4px;">地球の核に水素が存在する可能性は？</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>5. 出典を明示する</b></div>
<div class="box-accent" style="margin-top:6px; font-size:19px; padding:8px 14px;">地球の核に水素が入っている可能性があるか、地球核のニュートリノ観測でわかるかどうか、英語の論文を引用しながら教えて。出典を明記して。</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>6. コーディングする</b></div>
<div class="box-accent" style="margin-top:6px; font-size:19px; padding:8px 14px;">フーリエ関数で、xが1つ増えるごとに1と-1を行き来するbox関数を、だんだん近似してみせて。(なんか、Box側が違いますが…)</div></div>

</div>
</div>

<div class="cite pip-safe" style="margin-top:4px;">学校で学びそうなことを質問すると、自動生成されます。</div>

<!--
- 有料版ChatGPTの活用法6パターン。数値実験／質問の自動生成（精緻化）／o1での詳細解説／Web検索／出典明示／コーディング。
-->

---

<!-- _class: message -->

<div class="page-title">ワーク①</div>

<h1 style="margin-top:48px;">生成AIは、<span style="color:var(--accent-dark)">理学の学び/研究を幸せ</span>にするか</h1>

<div class="box-info" style="font-size:30px; margin-top:24px; padding:18px 32px; line-height:1.7;">　　時間管理：10分GW、5分共有<br>　　回答形式：Yes/No、なぜそう思うのか？</div>

<!--
- ワーク①。「生成AIは理学の学び／研究を幸せにするか」。10分グループワーク、5分共有。Yes/Noと、なぜそう思うのかを考える。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# <span style="color:var(--accent-dark)">Benjamin Bloom</span> の２つの仕事-その1　2シグマ問題

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:4px;">
<div style="flex:0 0 360px;">
<img src="./src/fig16-crop.png" alt="2σ：個別指導は教室で学んだ群より学習効果が高い" style="width:360px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">Bloom (1984) <i>Educational Researcher</i><br><a href="https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf">https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf</a></div>
</div>
<div style="flex:1;">

<div class="box-info" style="font-size:23px;">個別指導は、通常の教室での指導と比べ学習効果が<b>2標準偏差</b>高い。</div>

<div style="font-size:23px; margin:10px 0 0;">“コスト上実現しえない個別指導”と同等の学びを<b>全員に常時提供する方法</b>はあるか？</div>

<div class="box-accent" style="margin-top:8px; font-size:24px;"><b>生成AIで個別最適な学び</b>が支援出来る？</div>

<div class="subhead" style="margin-top:14px;"><b>学修支援向け生成AIの実用化　Khan (2024)</b></div>

<div style="display:flex; gap:16px; align-items:flex-start;">
<div class="pcard" style="padding:10px 16px;">
<div class="pc-h">学びの個別最適化ツール・<br>伴走者として利用する</div>
<ul>
<li>興味や既習知識を例とした説明の生成、チュータリング、学習歴の情報統合、評価</li>
<li>英語、プログラミング等のスキル学習</li>
</ul>
</div>
<div style="flex:0 0 140px; font-size:18px; color:#555; line-height:1.5;">
<b>MOOC提供者</b><br>Google / Stanford / coursera / edX / duolingo …
</div>
</div>

</div>
</div>

<!--
- Bloomの2シグマ問題。個別指導は教室指導より2標準偏差高い。実現不能だった個別指導を生成AIで全員に提供できるか。Khan(2024)等、学修支援向け生成AIの実用化が進む。
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# <span style="color:var(--accent-dark)">Benjamin Bloom</span> の２つの仕事 – その2 学習目標分類

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:2px;">
<div style="flex:1.35;">

<table style="font-size:18px; border-collapse:collapse; width:100%;">
<thead>
<tr>
<th style="background:#5a6473; color:#fff; padding:5px 8px; width:2.2em;"></th>
<th style="background:var(--tag-blue); color:#fff; padding:5px 8px;">認知的領域 (知識や思考)</th>
<th style="background:var(--tag-green); color:#fff; padding:5px 8px;">学びへの生成AIの影響</th>
</tr>
</thead>
<tbody>
<tr>
<td style="background:#eef0f3; font-weight:800; text-align:center;">高次</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>創造</b> (学習を応用し、新しい価値を作れる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">人の創造性こそが大切</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>評価</b> (事物・判断等を比較し評価出来る)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">評価軸/価値/判断は人が設定する</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>分析</b> (要素に分け、関係性を指摘できる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px; background:var(--accent-soft);"><b>解答/過程の支援可</b>(例：要約・構造化・コーディング)</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>応用</b> (他の場面や状況に使用できる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px; background:var(--accent-soft); color:var(--accent-dark);"><b>単なる問題では、 AIが解いてしまう…</b></td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>理解</b> (学習内容を説明出来る)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">説明/例示で支援可能 だが学修者の理解必須</td>
</tr>
<tr>
<td style="background:#eef0f3; font-weight:800; text-align:center;">低次</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>記憶</b> (事実や概念を暗記している)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">支援可能だが、 学修者の記憶必須</td>
</tr>
</tbody>
</table>
<div class="cite">左は栗田&amp;中村 (2023)を元に作成 / 原著 Bloom (1956/1964)、改訂版(2001)を記載</div>

</div>
<div style="flex:1;">

<div style="font-size:22px; margin:2px 0;">学修の目標を構造化し、学びの設計を支援</div>

<div class="box-warn" style="font-size:18px; padding:8px 14px; margin-top:6px;">※近年では、下から個別・段階的に行うのではなく、複数の次元の要素を組み合わせる必要性が叫ばれている。<br>※近年では、学び方の学びや、人間性の涵養などを含む、学習目標分類も作成されている (e.g. Finkの学習目標分類)<br>※但し、低次(特に記憶・理解・応用の段階)を蔑ろにして、高次の学修目標の達成は難しいと想定される。</div>

<div style="font-size:22px; margin:8px 0;">授業におけるAI利用の指針となり得る</div>

<div class="box-accent pip-safe" style="font-size:20px; padding:8px 14px;"><b>授業の課題やワークの一部として、AIを学びの設計に取り入れる/対策する/教員支援を行う</b></div>

</div>
</div>

<div class="cite pip-safe">▶学習目標分類についての、担当講師による解説動画 (9分) <a href="https://www.notion.so/geophysica/Bloom-145d8c8bc5ab80deb9dfc15b89d91875?pvs=4">https://www.notion.so/geophysica/Bloom-...</a></div>

<!--
- Bloomの学習目標分類（改訂版）。高次＝創造・評価・分析、低次＝応用・理解・記憶。生成AIは分析・理解の支援が可能だが、応用は直接解かれてしまう。授業設計の指針となる。
-->

---

<div class="page-title">授業で活用する上で</div>

# 課題における記載例 <span style="font-size:24px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>課題における自分のコントリビューションを説明する</b></div>

<div class="box-info" style="font-size:21px; line-height:1.55;">
<b>- 私は友人、ツール、テクノロジー、AI の助けを一切借りずに、この作業を完全に自力で行った</b>。<br>
<b>- 最初のドラフトは自分で書いたが、その後、友人/ 家族/AI/ パラフレーズ/文法/剽窃ソフトウェアに読んでもらい、提案をもらった。この助けを受けた後、以下の変更を行った：</b>
<div style="margin:2px 0 2px 1.4em;">- スペルと文法の修正<br>- 構成や順序の変更</div>
<b>自分で作成した後、テクノロジーを使用して文全体や段落全体を書き直した。</b><br>
<b>元となるアイデアを生成するためにAI/友人/チューターを使用した。</b><br>
<b>アウトライン/最初のドラフトを作成するためにAIを使用し、その後編集した。</b>
</div>

<!--
- Bowen & Watson "Teaching with AI"より、課題における記載例。自分のコントリビューション（どこまで自力か、どこでAIを使ったか）を学生に申告させる文例。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<div class="page-title">授業で活用する上で</div>

# 課題における記載例 <span style="font-size:24px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>事前に授業における生成AI利用のポリシーを共有する</b></div>

<div class="box-info" style="font-size:22px; line-height:1.6;">
AI の使用が許可または禁止されるのはいつか？なぜか？<br>
AI とのブレイ ンストーミングはカンニングにあたるのか？<br>
AI がこのクラスで学習をど のように強化または妨げる可能性があるのか？<br>
AI が許可されている場合、 学生は課題提出の一環として AI プロンプ トを共有する必要があるのか？<br>
AI の使用はどのようにクレジットされるべきか？<br>
AI の限界に関する警告<br>
AI 検出ツールの使用計画とその情報の使用方法に関する説明
</div>

<!--
- 同じくBowen & Watsonより。事前に授業の生成AI利用ポリシーを共有するために検討すべき問いのリスト。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<div class="page-title">③授業で活用/対策する</div>

# 参考：課題における記載例 <span style="font-size:22px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>事前に授業における生成AI利用のポリシーの例</b></div>

<div class="box-info pip-safe" style="font-size:18.5px; line-height:1.55;">
このライティングコースの目標の一つは、効果的に書き、コミュニケーションをとる方法を学ぶことだ。これは練習が必要である。AIを使って迅速に生産することも期待されるが、<b>そもそも質の高い文章を自分で作成、編集し、認識する能力も必要</b>である。AIが自分を介さずに作業を行うことができる場合、それは雇用されるに値するスキルを持っていない、いうことになる。だから、練習しよう。<br>
それを達成するために、コースの前半では、AIのサポートは一切禁止する。この過程の苦労やもどかしさは、レベル上げ訓練のようなものと捉えてほしい。自分で作業を行う人が利益を得るのだ。<br>
一方、コースの後半では、特定の状況下でAIを使用することが許可される場合がある。AIの使用を認める必要がある。使用したプロンプトとその応答を提出するよう求める場合がある。<br>
AIリテラシーは重要な新しいスキルだ。Aiは「幻覚：事実のように見えるものを生成する可能性」があることに注意が必要である。この技術の利点と潜在的な危険性の両方について批判的に考える必要がある。<br>
あなたは依然として最終的な成果物およびAIからの制限やバイアスの可能性について責任を負う。このポリシーは必要に応じて変更する権利を留保する。
</div>

<!--
- 生成AI利用ポリシーの具体例（ライティングコース）。前半はAI禁止で基礎力を鍛え、後半は条件付きで許可。AIリテラシーと最終責任は学生にあると明記。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<!-- _class: message -->

<div class="page-title">ワーク②</div>

<h1 style="margin-top:40px; line-height:1.4;">生成AIを、<span style="color:var(--accent-dark)">理学の学びや授業に活かす</span>には<br>どうすればよいのか、なぜなのか？</h1>

<div style="font-size:30px; margin:8px 0 0 1.4em; line-height:1.6;">1. 学びを損なわないために<br>2. 学びをもっと伸ばすために</div>

<div class="box-info" style="font-size:27px; margin-top:18px; padding:16px 30px; line-height:1.7;">
　<b>時間管理：</b>30分GW、10分共有<br>
　<b>回答形式：</b>上記について説明<br>
　　※ホワイトボード使用可
</div>

<!--
- ワーク②。生成AIを理学の学びや授業に活かすには、どうすればよいか・なぜか。①学びを損なわないために、②学びをもっと伸ばすために。30分GW、10分共有。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<!-- _class: message -->

<div class="page-title">ワーク③</div>

<h1 style="margin-top:48px; line-height:1.4;">生成AIの活用のために、<br>　どのような学修支援があると良いか</h1>

<div class="box-info" style="font-size:27px; margin-top:28px; padding:16px 30px; line-height:1.7;">
　<b>時間管理：</b>30分GW、10分共有<br>
　<b>回答形式：</b>上記について説明<br>
　　※ホワイトボード使用可
</div>

<!--
- ワーク③。生成AIの活用のために、どのような学修支援があると良いか。30分GW、10分共有。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# 社会の<span style="color:var(--accent-dark)">”水準”</span>としてのAI

<div class="box-info" style="font-size:22px;"><b>インターネットが教育に入ってきた黎明期 ▶ 主に知識 (記憶・理解)の次元への影響</b></div>

<div style="font-size:21px; margin:4px 0 0;">“自由に検索出来る”知識の水準としてのインターネット</div>

<div class="box-accent" style="font-size:19px; padding:8px 16px; margin-top:6px;">
▶ 但し、インターネットの知識を自らのものとして使いこなすには、　 変わらず相当の学びが必要だった<br>
▶ 一方、課題を解いたり、より上位の学習目標分類に至る上で、　 検索する手間が大きく省略され、授業設計や課題設定の幅が広がった<br>
▶ インターネットリテラシやその使用方法は、仕事や課題解決の前提となった
</div>

<div class="box-warn" style="font-size:22px; margin-top:10px;"><b>AIが教育に入ってきた黎明期 ▶ 主に思考/推論 (理解・応用・分析)の次元への影響</b></div>

<div style="font-size:21px; margin:4px 0 0;">思考やアウトプットの水準としてのAI</div>

<div class="box-accent pip-safe" style="font-size:23px; margin-top:8px;"><b>大切なのは、情報を収集し、自分がどう付き合うか考えること</b><br>▶ 知識や思考を自らのものとして使いこなすには、変わらず学びが必要では？</div>

<!--
- インターネットが「知識の水準」を底上げしたのと同様に、AIは「思考・推論の水準」を底上げする。だが自らのものとして使いこなすには、変わらず学びが必要。
- ハンプサイクル
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# 理学を志すこと <span style="font-size:26px;">(私自身の立ち位置)</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="box-info" style="font-size:23px;">　理学は、世界に対する人の好奇心という、本質的な心の働きにドライブされた　学問領域であると私は思います。</div>

<div class="box-accent pip-safe" style="font-size:20px; margin-top:10px; line-height:1.55;">
　そのため、<br>
　　- 理解/思考する上での道具として使いたい、とか<br>
　　- 教員が教える際に支援や高度化に繋がる、とか<br>
　生成AIは、目的を達するための「道具」として捉えられると思います。<br>
　レポート/課題の時間を短縮したい、成績上げたいという意識が不正や学びの毀損に繋がることはありえますが、　AIに頼っても自分が伸びない、という点は、学生も共感出来ると想定しています。<br>
　<b>理学の学び/研究のワクワク感やモチベーションには、　今のところ影響しない</b>と考えます。
</div>

</div>
<div style="flex:0 0 280px;">
<img src="./src/fig24-crop.png" alt="DALL·Eで生成した四季の樹のイメージ" style="width:280px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">DALL·Eで2024/7作成 以下の文章に対する絵を生成させた結果 ▲<br>暗は無限大であって明は有限である。暗はいっさいであって明は微分である。- 寺田寅彦『知と疑い』</div>
</div>
</div>

<!--
- 理学は世界への好奇心にドライブされた学問。生成AIは目的を達する「道具」。AIに頼っても自分は伸びないという点は学生も共感する。理学の学び・研究のワクワク感やモチベーションには今のところ影響しないと考える。
- ハンプサイクル
-->

---

<!-- _class: message -->

<div class="page-title">感想</div>

<h1 style="margin-top:120px;">　感想を、1人1分程度で教えて下さい</h1>

<!--
- 感想を、1人1分程度で教えて下さい。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">申請者の過去の経験</div>

# 申請者の<span style="color:var(--accent-dark)">過去の経験</span>

<div class="cardrow" style="margin-top:10px; align-items:flex-start;">
<div class="pcard" style="flex:1;">
<div class="pc-h">学生時：オンライン授業制作支援 (リーダー)</div>
<div style="text-align:center;"><img src="./src/fig26L-crop.png" alt="教材の種類・コースの制作と運営" style="width:74%; border:1px solid #e3e8f0; border-radius:8px;"></div>
</div>
<div class="pcard" style="flex:1;">
<div class="pc-h">教員時：オンライン授業の記事作成 (分担)</div>
<div style="text-align:center;"><img src="./src/fig26R-crop.png" alt="グッドプラクティスの共有記事" style="width:90%; border:1px solid #e3e8f0; border-radius:8px;"></div>
</div>
</div>

<div class="takeaway pip-safe" style="margin-top:14px;">学生・教員双方で、TA/RAとの協働による学びの場変革の経験→具体的イメージ</div>

<!--
- 申請者の過去の経験。学生時はオンライン授業制作支援のリーダー、教員時はオンライン授業の記事作成を分担。
- 学生・教員双方で、TA/RAとの協働による学びの場変革の経験があり、具体的イメージを持っている。
- 旅費
-->

---

<div class="page-title">おわりに・協力依頼</div>

# <span style="color:var(--accent-dark)">おわりに</span>・協力依頼

<h1 style="text-align:center; margin-top:36px;">ご参加頂きありがとうございました！</h1>

<div style="display:flex; gap:40px; align-items:center; justify-content:center; margin-top:40px;">
<div style="flex:0 0 220px; text-align:center;">
<img src="./src/fig27-img.png" alt="連絡用QRコード" style="width:200px;">
</div>
<div class="box-accent pip-safe" style="font-size:28px; line-height:1.6; padding:20px 30px;">もし、このPJに今後も興味があれば、<br>←空メール下さい。</div>
</div>

<!--
- ご参加頂きありがとうございました！
- もし、このPJに今後も興味があれば、←空メール下さい。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# 本日の<span style="color:var(--accent-dark)">スコープの整理</span>

<div style="display:flex; gap:40px; align-items:flex-start; margin-top:24px;">
<div style="flex:1;">

<div class="box-info" style="background:#F7E9F1; border-color:#D9A6C4; color:#9a9aa0; font-weight:800; font-size:24px; line-height:1.5; padding:16px 24px;"><b>トレンド①</b><br>学びの個別最適化ツール・<br>同伴者として利用する</div>

<div class="box-accent" style="margin-top:40px; background:#F2C6DA; border-color:var(--accent); color:#1a1a1a; font-weight:800; font-size:24px; line-height:1.5; padding:16px 24px;"><b>トレンド②</b><br>授業の課題やワークの一部として、<br>AIを学びの設計に取り入れる/対策する/教員支援を行う</div>

</div>
<div style="flex:1; padding-top:6px;">

<div style="font-size:28px; line-height:1.6;">大学教育の趨勢として<br><u>←こちらも気になりますが…</u></div>

<div style="font-size:28px; line-height:1.6; margin-top:90px;">本講座では、<br><u>← こちらを話題にします。</u></div>

</div>
</div>

<!--
- 本日のスコープの整理。トレンド①「学びの個別最適化ツール・同伴者として利用する」は大学教育の趨勢として気になるが、本講座ではトレンド②「授業の課題やワークの一部としてAIを学びの設計に取り入れる/対策する/教員支援を行う」を話題にする。
-->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# ① “教育×AI”領域の<span style="color:var(--accent-dark)">俯瞰</span>

<div class="bgroup" style="margin-top:18px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="goal-box" style="margin:0; padding:14px 26px;"><b>教育におけるAI活用が何を目指しているか</b>、背景にある教育領域の知見を整理する。</div>
</div>

<div class="subhead" style="margin-top:22px;"><span class="tag tag-soft">内容</span></div>

<div class="goal-box" style="margin:10px 0 0; padding:12px 26px;"><b>A. AIを教育の文脈に取り込む</b>　<span style="font-size:23px;">“社会の水準”、理学の学びと生成AI</span></div>
<div style="margin:6px 0 0 1.4em; font-size:22px;">AI利用を想定した授業設計・課題設定が不可欠になる<br>でも、理学の学びの本質は変わらないのではないか</div>

<div class="goal-box pip-safe" style="margin:14px 0 0; padding:12px 26px;"><b>B. Bloomの仕事と生成AI</b>　<span style="font-size:23px;">2シグマ問題・学習目標分類</span></div>
<div class="pip-safe" style="margin:6px 0 0 1.4em; font-size:22px;">トレンド① 学びの個別最適化ツール・伴走者として利用する<br>トレンド② 授業の課題やワークの一部として、設計に取り入れる and/or 教員支援を行う</div>

<!--
- ① “教育×AI”領域の俯瞰。目的は、教育におけるAI活用が何を目指しているか、背景にある教育領域の知見を整理すること。
- 内容A：AIを教育の文脈に取り込む（"社会の水準"、理学の学びと生成AI）。内容B：Bloomの仕事と生成AI（2シグマ問題・学習目標分類）。
-->

---

<div class="page-title">②課題での利用例</div>

# ②課題での<span style="color:var(--accent-dark)">利用例</span>

<div class="bgroup" style="margin-top:18px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="goal-box" style="margin:0; padding:14px 26px;">現状、どのような利用例/研究例があるのか知り、試せるようになる。</div>
</div>

<div class="subhead" style="margin-top:24px;"><span class="tag tag-soft">内容</span></div>

<div class="goal-box" style="margin:10px 0 0; padding:12px 26px;"><b>A. 学生が利用する</b></div>
<div class="box-accent" style="margin:8px 0 0; padding:8px 22px; font-size:24px;">学修目標の達成のため、積極的に取り入れうる領域</div>
<div class="box-info" style="margin:6px 0 0; padding:8px 22px; font-size:24px;">公平かつ正しい評価のため、AI対策すべき領域</div>

<div class="goal-box pip-safe" style="margin:12px 0 0; padding:12px 26px;"><b>B. 教員が利用する</b></div>

<!--
- ②課題での利用例。目的は、現状どのような利用例/研究例があるのか知り、試せるようになること。
- 内容A：学生が利用する（学修目標の達成のため積極的に取り入れうる領域／公平かつ正しい評価のためAI対策すべき領域）。内容B：教員が利用する。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">AI</span>を学びの設計に取り入れる

<div class="box-accent" style="margin-top:8px; background:#F2C6DA; border-color:var(--accent); color:#1a1a1a; font-size:22px; padding:10px 20px;"><b>現在の状況：</b>各大学で、グッドプラクティスを洗い出している状況<br>　　　　　　昨今の生成AIの進化が早く、評価結果はかなり限られている</div>

<div class="goal-box" style="margin:14px 0 0; padding:12px 26px; font-size:24px;"><b>学生が使用する：課題・ワークでの活用</b><br>　学生の<b>分析・応用・理解の次元</b>における生成AIの利用<br>　特に、課題/ワーク上での<b>支援や課題ツール</b>としての利用</div>

<div class="goal-box pip-safe" style="margin:12px 0 0; padding:12px 26px; font-size:24px;"><b>教員が使用する：先生ご自身の支援ツールとしての活用</b><br>　フィードバック用ルーブリック<br>　問題や問いかけの作成支援、(シラバスや設計の支援)</div>

<div class="cite pip-safe" style="margin-top:8px;">参考① 阪大 「生成AI教育ガイド」 <a href="https://www.tlsc.osaka-u.ac.jp/project/generative_ai/support_al.html">https://www.tlsc.osaka-u.ac.jp/project/generative_ai/support_al.html</a><br>参考② Bowen &amp; Watson, AAC&amp;U “Teaching with AI” (2024)</div>

<!--
- AIを学びの設計に取り入れる。現在の状況は、各大学でグッドプラクティスを洗い出している段階で、生成AIの進化が早く評価結果はかなり限られている。
- 学生が使用する：課題・ワークでの活用（分析・応用・理解の次元における利用、支援や課題ツールとしての利用）。教員が使用する：先生ご自身の支援ツールとしての活用（ルーブリック、問題作成支援）。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<div class="page-title">②課題での利用例</div>

# ②課題での<span style="color:var(--accent-dark)">利用例</span>

<div class="box-accent" style="margin-top:6px; font-size:24px;"><b>アンケート 2</b><br>実際に授業で活用されている先生はどのように使用されていますか？</div>

<div class="stepbox" style="margin-top:12px; padding:14px 30px;">
<div class="st">① コーディング</div>
<div class="st">② 理解の促進 (学生が理解しにくい教授内容の深堀り)</div>
<div class="st">③ 高度な学習目標の課題をさせるための途中過程</div>
<div class="st">④ 外国語の翻訳や本/論文の要約</div>
<div class="st">⑤ その他</div>
</div>

<div class="cite pip-safe" style="font-size:22px; margin-top:8px;">(補足)差し支えなければ、コメントスクリーンでご紹介頂けませんか</div>
<div class="takeaway pip-safe" style="margin-top:6px;">この10分では、課題での利用例を説明致します</div>

<!--
- アンケート2：実際に授業で活用されている先生はどのように使用されていますか？
- ①コーディング ②理解の促進（学生が理解しにくい教授内容の深堀り）③高度な学習目標の課題をさせるための途中過程 ④外国語の翻訳や本/論文の要約 ⑤その他。
- この10分では、課題での利用例を説明致します。
-->

---

<div class="page-title">②課題での利用例</div>

# 要注意パターン：<span style="color:var(--accent-dark)">「応用」の次元</span>への対応

<div class="box-warn" style="margin-top:6px; font-size:22px;">簡単な問題や単答式の問題では、生成AIが直接回答を当てる場合がありえます<br>特に、昨今のOpenAI o1は推論性能の向上により、相当強力です</div>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:10px;">
<div style="flex:0 0 340px;">
<img src="./src/fig33b-chart-crop.png" alt="GPQA Diamond：gpt4o 56.1 / o1-preview 78.3 / o1 78.0 / expert human 69.7" style="width:340px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">GPQA＝Graduate-level Physical and Quantitative Assessmentで人間の回答精度を上回る<br>Rein et al. (2023) arXiv ／ <a href="https://openai.com/index/learning-to-reason-with-llms/">https://openai.com/index/learning-to-reason-with-llms/</a></div>
</div>
<div style="flex:1;">

<div class="box-info" style="font-size:16.5px; line-height:1.4; padding:8px 14px;"><b>化学（一般）</b><br>炭素と水素原子で構成される液体有機化合物の反応が、80度、20気圧で24時間行われたとする。プロントの核磁気共鳴スペクトルにおいて、反応物の最も高い化学シフトのシグナルが、生成物のシグナルに置き換わり、それは約3〜4 unit ほど低磁場側で観測される。対応する工業的大規模プロセスでも使用される、周期表のどの位置にある元素の化合物が、最も可能性の高い初期添加物（少量）として使用されたと考えられるか？<br>A) 第5周期の金属化合物　B) 第5周期の金属化合物と第3周期の非金属化合物<br>C) 第4周期の金属化合物　D) 第4周期の金属化合物と第2周期の非金属化合物</div>

<div class="box-info" style="font-size:16.5px; line-height:1.4; padding:8px 14px; margin-top:6px;"><b>天文</b><br>天文学者たちは、有効温度(Teff)が約6000 Kの星を研究している。彼らは2つの化学元素El1とEl2の分光線(等価幅 EW &lt; 100 mÅ)を使用して、分光学的に星の表面重力を決定することに関心がある。この星の大気温度では、El1は主に中性状態にあり、El2は主にイオン化する。天文学者が考慮すべき表面重力に最も敏感な分光線はどれか？<br>A) El2 I (中性) B) El1 II (一重イオン化) C) El2 II (一重イオン化) D) El1 I (中性)</div>

</div>
</div>

<div class="cite pip-safe" style="margin-top:4px;">※課金した学生が成績がよい、という不公平な状況が発生しないよう、留意下さい</div>

<!--
- 要注意パターン：「応用」の次元への対応。簡単な問題や単答式の問題では、生成AIが直接回答を当てる場合がある。特に昨今のOpenAI o1は推論性能の向上により相当強力。
- GPQA（大学院レベルの物理・定量評価）では、o1が専門家（expert human 69.7）を上回る精度（78.3 / 78.0）を示す。
- ※課金した学生が成績がよい、という不公平な状況が発生しないよう、留意下さい。
-->

---

<div class="page-title">②課題での利用例</div>

# 要注意パターン：<span style="color:var(--accent-dark)">「応用」の次元</span>への対応

<div class="box-warn" style="margin-top:6px; font-size:22px;">語学的な課題や、要約的な課題も、生成AIに直接入れてしまうだけで、回答が出てしまうことがありえます (写真も読み込めます)。</div>

<div style="font-size:23px; margin:8px 0 0;">例：〇〇論文の内容を要約せよ / 教科書を翻訳せよ</div>

<div style="display:flex; align-items:center; gap:14px; margin:8px 0;">
<div style="background:#F7E0EA; border-radius:8px; padding:8px 24px; font-size:24px; min-width:120px; text-align:center;">課題</div>
<div style="color:#1A6BB0; font-size:30px;">→</div>
<div style="background:#D7ECF7; border:2px solid #1A6BB0; border-radius:8px; padding:8px 22px; font-size:22px; color:#15436e; font-weight:800;">生成AI</div>
<div style="color:#1A6BB0; font-size:30px;">→</div>
<div style="font-size:24px;">アウトプット</div>
<div style="font-size:30px; margin-left:24px;"><b>成績?</b></div>
<div style="margin-left:auto; margin-right:30px; background:#F2D6E6; border:2px solid #B05A8A; border-radius:14px; padding:6px 18px; font-size:19px; font-weight:800; color:#7A2B57; text-align:center; line-height:1.25;">AIスキルの<br>得点？</div>
</div>

<div class="box-accent" style="margin-top:6px; font-size:20px; line-height:1.5; padding:10px 18px;">
<b>そこで、一捻りいかがでしょう</b> (RPGを設計するように、レベル上げのパスを設計する)<br>
例：教科書を翻訳の後、単語リストを作成し、暗記した内容をテストする。<br>
例：教科書の翻訳の際には、生成AIを使用しないポリシーを定める。<br>
例：生成AIで回答させた後、自分で添削して、そのプロセスを提出する。<br>
例：発表と質疑で成績を評価する。(理解のために生成AIは用いてよい。)
</div>

<div style="display:flex; align-items:center; gap:14px; margin:10px 30px 0 0;" class="pip-safe">
<div style="background:#F7E0EA; border-radius:8px; padding:8px 24px; font-size:22px; min-width:100px; text-align:center;">課題</div>
<div style="color:#1A6BB0; font-size:28px;">→</div>
<div style="background:#D7ECF7; border:2px solid #1A6BB0; border-radius:8px; padding:6px 18px; font-size:20px; color:#15436e; font-weight:800;">生成AI</div>
<div style="color:var(--accent); font-size:28px;">→</div>
<div style="background:var(--accent); color:#fff; border-radius:8px; padding:6px 18px; font-size:19px; font-weight:800;">学習目標を確認できる学習者の努力</div>
<div style="color:var(--accent); font-size:28px;">→</div>
<div style="font-size:22px;">アウトプット</div>
<div style="font-size:26px;"><b>成績</b></div>
</div>

<!--
- 語学的な課題や要約的な課題も、生成AIに直接入れるだけで回答が出てしまう（写真も読み込める）。例：論文を要約せよ／教科書を翻訳せよ。
- そこで一捻り（RPGを設計するように、レベル上げのパスを設計する）。例：翻訳後に単語リスト作成・暗記テスト／翻訳時はAI不使用ポリシー／AIで回答後に自分で添削しプロセス提出／発表と質疑で評価。
- 課題→生成AI→アウトプットだけだと「AIスキルの得点?」になりかねない。間に「学習目標を確認できる学習者の努力」を挟むことで、成績につなげる。
-->

---

<div class="page-title">②課題での利用例</div>

# 要注意パターン：<span style="color:var(--accent-dark)">「応用」の次元</span>への対応

<div style="display:flex; align-items:center; gap:14px; margin-top:14px;">
<div style="flex:0 0 150px; font-size:22px; line-height:1.4;">持込み不可<br>試験など</div>
<div style="flex:1; background:#F7E0EA; border-radius:8px; padding:10px 16px; display:flex; align-items:center; gap:12px;">
<span style="font-size:22px;">課題</span>
<span style="background:var(--accent); color:#fff; border-radius:6px; padding:5px 14px; font-size:19px; font-weight:800;">学習目標を確認できる学習者の努力 ▶</span>
<span style="font-size:22px;">アウトプット</span>
<span style="margin-left:auto; font-size:24px; font-weight:800; color:#fff; background:var(--accent); border-radius:50%; padding:8px 14px;">成績</span>
</div>
</div>

<div style="display:flex; align-items:center; gap:14px; margin-top:10px;">
<div style="flex:0 0 150px; font-size:22px; line-height:1.4;"><span style="color:var(--accent); font-weight:800; font-size:18px;">要注意</span><br>持込み可試験<br>レポートなど</div>
<div style="flex:1; background:#D7ECF7; border-radius:8px; padding:10px 16px; display:flex; align-items:center; gap:12px;">
<span style="font-size:22px;">課題 (演習問題)</span>
<span style="background:#1A6BB0; color:#fff; border-radius:6px; padding:5px 14px; font-size:19px; font-weight:800;">生成AI ▶</span>
<span style="font-size:22px;">アウトプット</span>
<span style="margin-left:auto; font-size:22px; font-weight:800;">成績?</span>
</div>
</div>

<div style="font-size:22px; margin:14px 0 4px;">生成AIを利用する課題デザイン</div>
<div style="display:flex; align-items:center; gap:14px;">
<div style="flex:1; background:#F7E0EA; border-radius:8px; padding:10px 16px; display:flex; align-items:center; gap:10px;">
<span style="font-size:22px;">課題</span>
<span style="background:#1A6BB0; color:#fff; border-radius:6px; padding:5px 12px; font-size:18px; font-weight:800;">生成AI ▶</span>
<span style="background:var(--accent); color:#fff; border-radius:6px; padding:5px 12px; font-size:18px; font-weight:800;">学習目標を確認できる学習者の努力 ▶</span>
<span style="font-size:22px;">アウトプット</span>
<span style="margin-left:auto; font-size:24px; font-weight:800; color:#fff; background:var(--accent); border-radius:50%; padding:8px 14px;">成績</span>
</div>
</div>

<div style="font-size:22px; margin:14px 0 4px;">高次の学習目標 (例：創造・評価・分析) cf. 課題中心型の教授方略</div>
<div class="pip-safe" style="display:flex; align-items:center; gap:14px;">
<div style="flex:1; background:#F7E0EA; border-radius:8px; padding:10px 16px; display:flex; align-items:center; gap:10px;">
<span style="font-size:21px; font-weight:800;">大きな課題<br><span style="font-weight:400; font-size:18px;">複数トピック</span></span>
<span style="font-size:20px; color:#555;">途中で学修者の努力を含む ／ 過程を確認する ▶</span>
<span style="font-size:22px;">アウトプット</span>
<span style="margin-left:auto; font-size:24px; font-weight:800; color:#fff; background:var(--accent); border-radius:50%; padding:8px 14px;">成績</span>
</div>
</div>

<!--
- 持込み不可試験などは、課題→（学習目標を確認できる学習者の努力）→アウトプット→成績、と直結する。
- 要注意は持込み可試験・レポートなど：課題（演習問題）→生成AI→アウトプットだと「成績?」になりかねない。
- 生成AIを利用する課題デザインでは、課題→生成AI→学習目標を確認できる学習者の努力→アウトプット→成績、と過程を挟む。
- 高次の学習目標（創造・評価・分析）では、課題中心型の教授方略のように、複数トピックの大きな課題を段階的に進め、途中で学修者の努力を含め過程を確認する。
- AIを必要に応じ活用しながらも、人間の創造性や批判的思考を重視し、
-->

---

<div class="page-title">②課題での利用例</div>

# 課題の種別ごとの、<span style="color:var(--accent-dark)">生成AIのインパクト</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:8px;">
<div style="flex:1.4;">

<table style="width:100%; border-collapse:collapse; font-size:21px; line-height:1.35;">
<thead>
<tr>
<th style="background:#5a6473; color:#fff; padding:6px 10px;"></th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">知識</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">思考</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">技能</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">態度</th>
</tr>
</thead>
<tbody>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">客観試験</td><td style="border:1px solid #d4d9e0; text-align:center; background:var(--accent-soft);">◎(低次)</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">論述試験</td><td style="border:1px solid #d4d9e0; text-align:center;">◯(高次)</td><td style="border:1px solid #d4d9e0; text-align:center; background:var(--accent-soft);">◎</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">レポート</td><td style="border:1px solid #d4d9e0; text-align:center;">◯(高次)</td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">発表</td><td style="border:1px solid #d4d9e0; text-align:center;">◯(高次)</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">口述/面接</td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">観察評価</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">実演・制作</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0; text-align:center;">◎</td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">自己評価</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
<tr><td style="border:1px solid #d4d9e0; padding:5px 10px; font-weight:700;">心理テスト</td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0;"></td><td style="border:1px solid #d4d9e0; text-align:center;">◯</td></tr>
</tbody>
</table>
<div class="cite">中島 (2016) p.36が出典、吉田 (2023)/阪大FD (参照日：2024.11.20)より改変</div>

</div>
<div style="flex:1;">

<div class="box-warn pip-safe" style="font-size:24px; margin-top:40px;"><b>生成AI利用可とした場合：成果物へのインパクトが大</b></div>

</div>
</div>

<!--
- 課題の種別ごとの、生成AIのインパクト。Bloom的な認知領域（知識・思考・技能・態度）と課題種別（客観試験〜心理テスト）の対応表。
- 客観試験は知識（低次）に◎。論述試験・レポート・発表は思考（高次）に◎/◯。レポート・発表は技能・態度にも対応。
- 生成AI利用可とした場合：成果物へのインパクトが大。
-->

---

<div class="page-title">②課題での利用例 ／ その他、利用例</div>

# <span style="color:var(--accent-dark)">その他、利用例</span>

<div class="stepbox" style="margin-top:14px;">
<div class="st"><b>①授業内のグループワークの設計</b></div>
<div style="margin-left:1.2em; font-size:24px;">東大・前期教養のアクティブ・ラーニングクラスでの実践例</div>
<div style="margin-left:1.2em;"><a href="https://www.juce.jp/LINK/journal/2501/pdf/02_01.pdf" style="color:var(--tag-blue); font-size:20px;">https://www.juce.jp/LINK/journal/2501/pdf/02_01.pdf</a></div>
<div class="box-info" style="margin:8px 0 0 1.2em; font-size:22px; padding:8px 18px;">アクティブラーニングの参加者の一人が生成AIになる<br>※広大などでは、グループワークの情報を統合する利用例がある</div>
</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st"><b>② レポート用フィードバック ルーブリックの作成</b></div>
<div style="margin-left:1.2em; font-size:24px;">阪大のプロンプト例</div>
<div style="margin-left:1.2em;"><a href="https://www.tlsc.osaka-u.ac.jp/project/generative_ai/support_al.html#4" style="color:var(--tag-blue); font-size:20px;">https://www.tlsc.osaka-u.ac.jp/project/generative_ai/support_al.html#4</a></div>
</div>

<div class="stepbox pip-safe" style="margin-top:12px;">
<div class="st"><b>③ 教員利用 / 学生利用の場合のグッドプラクティス例</b></div>
<div style="margin-left:1.2em; font-size:24px;">横国の実施例</div>
<div style="margin-left:1.2em;"><a href="https://www.yec.ynu.ac.jp/news/images/AI_good_practice.pdf" style="color:var(--tag-blue); font-size:20px;">https://www.yec.ynu.ac.jp/news/images/AI_good_practice.pdf</a></div>
</div>

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">②課題での利用例</span>

<div class="bgroup" style="margin-top:18px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="goal-box" style="margin:0; padding:14px 26px;">現状、どのような利用例/研究例があるのか知り、試せるようになる。</div>
</div>

<div class="subhead" style="margin-top:26px;"><span class="tag tag-soft">内容</span></div>

<div class="goal-box" style="margin:10px 0 0; padding:12px 26px;"><b>A. 学生が利用する</b></div>
<div style="margin:8px 0 0 1.4em; font-size:25px;">理解を支援する、課題での情報の分析を行う<br>ツール例：<b>NotebookLM</b>　／　授業のワーク・課題の設計で用いる</div>

<div class="goal-box pip-safe" style="margin:18px 0 0; padding:12px 26px;"><b>B. 教員が利用する</b></div>
<div style="margin:8px 0 0 1.4em; font-size:25px;">問題を作成する、フィードバックに用いる</div>

---

<div class="page-title">③授業で活用/対策する</div>

# ③先生ご自身が授業で<span style="color:var(--accent-dark)">活用/対策</span>される上で

<div class="bgroup" style="margin-top:18px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="goal-box" style="margin:0; padding:14px 26px;">指針等をもとに、生成AIを制限/活用する上での、「原則」を考える。</div>
</div>

<div class="subhead" style="margin-top:30px;"><span class="tag tag-soft">内容</span></div>

<div class="goal-box" style="margin:10px 0 0; padding:14px 26px;"><b>A. 利用/対策のポリシー、チェックシート</b></div>

<div class="goal-box pip-safe" style="margin:24px 0 0; padding:14px 26px;"><b>B. 利用/対策の原則</b></div>

---

<div class="page-title">こんなとき、どうされますか？</div>

# <span style="color:var(--accent-dark)">こんなとき</span>、どうされますか？

<div class="cardrow" style="margin-top:24px; align-items:flex-start;">
<div style="flex:1; text-align:center;">
<div class="box-info" style="border-radius:24px; padding:22px 24px; font-size:27px; font-weight:800; line-height:1.5;">レポートや課題、<br>生成AIで悪影響<br>受けないかな…</div>
<div style="font-size:34px; font-weight:800; margin-top:18px; color:var(--accent-dark);">▶対策は？</div>
</div>
<div style="flex:1; text-align:center;">
<div class="box-accent" style="border-radius:24px; padding:22px 24px; font-size:27px; font-weight:800; line-height:1.5;">学生が理解したり、<br>演習するのを助ける上で生成AIを<br>使ってみようかな？</div>
<div style="font-size:34px; font-weight:800; margin-top:18px; color:var(--accent-dark);">▶活用は？</div>
</div>
</div>

<div class="takeaway pip-safe" style="margin-top:28px;">ここでは、対策と活用の部分についてご説明します</div>

---

<div class="page-title">千葉大学における生成AIの指針①</div>

# 千葉大学における<span style="color:var(--accent-dark)">生成AIの指針①</span> <span style="font-size:24px; color:var(--muted);">(令和５年４月１２日)</span>

<div style="text-align:center; margin:2px 0 8px;"><a href="https://gakunai.jm.chiba-u.jp/gakujutsu/joho/sjoho2023/pdf/20230713ChatGPT.pdf" style="color:var(--tag-blue); font-size:20px;">https://gakunai.jm.chiba-u.jp/gakujutsu/joho/sjoho2023/pdf/20230713ChatGPT.pdf</a></div>

<div style="text-align:center;"><img src="./src/fig39-img.png" style="width:62%; border:1px solid #ddd; border-radius:6px;" /></div>

<div class="box-warn pip-safe" style="margin-top:14px;">特に、<b>機密情報や個人情報の入力禁止</b>、生成AIにより出力された情報の著作権 (表現への類似性・依拠性)には留意が必要です。</div>

---

<div class="page-title">千葉大学における生成AIの指針②</div>

# 千葉大学における<span style="color:var(--accent-dark)">生成AIの指針②</span> <span style="font-size:24px; color:var(--muted);">(令和５年４月１２日)</span>

<div style="text-align:center; margin:2px 0 10px;"><a href="https://gakunai.jm.chiba-u.jp/gakujutsu/joho/sjoho2023/pdf/20230713ChatGPT.pdf" style="color:var(--tag-blue); font-size:20px;">https://gakunai.jm.chiba-u.jp/gakujutsu/joho/sjoho2023/pdf/20230713ChatGPT.pdf</a></div>

<div class="pip-safe" style="text-align:center;"><img src="./src/fig40-img.png" style="width:60%; border:1px solid #ddd; border-radius:6px;" /></div>

---

<div class="page-title">③授業で活用/対策する</div>

# <span style="color:var(--accent-dark)">(補足)</span> 評価に関わる対策集 / 阪大FD (2024)

<div style="text-align:center; margin-top:4px;"><img src="./src/fig43-crop.png" style="width:92%; border:1px solid #ddd; border-radius:6px;" /></div>

<div class="cite pip-safe" style="text-align:center;">浦田・長岡・村上 (2024). <i>情報処理</i></div>

---

<div class="page-title">制限/活用する上での「原則」</div>

# 制限/活用する上での<span style="color:var(--accent-dark)">「原則」</span> <span style="font-size:22px; color:var(--muted);">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="stepbox" style="margin-top:14px; padding:10px 28px;">
<div class="st"><b>① 課題をAIに入れてみて、試す</b></div>
</div>

<div class="stepbox" style="margin-top:8px; padding:10px 28px;">
<div class="st"><b>② ポリシーを決める</b></div>
<div style="font-size:22px; margin-left:1.2em;">▶大学全体、授業全体、個別の課題での生成AI利用を定める<br>※ 使用の可否、使用内容/使用バージョンの記載等<br>▶授業の目的・目標を鑑みて、AIの使用可否を説明する。</div>
</div>

<div class="stepbox" style="margin-top:8px; padding:10px 28px;">
<div class="st"><b>③ 不正行為のAI検出は不完全である</b></div>
<div style="font-size:22px; margin-left:1.2em;"><b>▶</b>採点対象の成果は、生成AIで直接出力不可のものにするか、生成AIの使用過程を含め、課題をデザインする<br>※記述式のテストは、測れる能力が限定される点に留意</div>
</div>

<div class="stepbox pip-safe" style="margin-top:8px; padding:10px 28px;">
<div class="st"><b>④ 生成AI利用にあたるリテラシを共有する</b></div>
</div>

---

<div class="page-title">参考：LLMを視覚的に体験する</div>

# 参考：<span style="color:var(--accent-dark)">LLMを視覚的に体験</span>し、リテラシを向上させる

<div style="font-size:24px; margin:4px 0 8px;">LLM Visualization by Brendan Bycroft</div>

<div style="text-align:center;"><img src="./src/fig41-img.png" style="width:80%; border:1px solid #ddd; border-radius:6px;" /></div>

<div class="box-accent pip-safe" style="margin-top:14px; text-align:center;">次のトークンを予想することで、回答を出すことを体験出来る</div>

---

<div class="page-title">アンケート3</div>

# <span style="color:var(--accent-dark)">アンケート3</span>

<div class="box-accent" style="margin-top:8px; font-size:26px; line-height:1.5;">
先生ご自身は、生成AIの授業利用/制限について、どんな「原則」を大切にされたいと考えますか？<br>ぜひ、チャットにて共有して下さい。<br>
<span style="font-size:22px; color:#555;">※ 触れた内容でも、他でも構いません。</span>
</div>

<div class="stepbox" style="margin-top:16px;">
<div style="font-size:23px; color:#555; margin-bottom:4px;">例：</div>
<div style="font-size:23px; line-height:1.6; margin-left:1em;">難しい問題はAIが支援を可能にする分、基礎力を徹底して鍛える授業にしたい。<br>生成AIを使われてしまいかねない課題は、生成AIに試しで入力してみる<br>課題をデザインする際に、生成AIを使用する部分を中間に設ける</div>
</div>

<div class="cite pip-safe" style="margin-top:14px; font-size:22px;">※ 他の先生のコメントへの、返信もぜひ、お願い致します。</div>

---

<div class="page-title">③授業で活用/対策する</div>

# ③先生ご自身が授業で<span style="color:var(--accent-dark)">活用/対策</span>される上で

<div class="bgroup" style="margin-top:8px;">
<div class="bg-label" style="color:var(--accent-dark);">目的</div>
<div class="goal-box" style="margin:0; padding:10px 24px; font-size:24px;">指針等をもとに、生成AIを制限/活用する上での、「原則」を考える。</div>
</div>

<div class="goal-box" style="margin:14px 0 0; padding:10px 24px; font-size:24px;"><b>A. 利用/対策のポリシー、チェックシート</b></div>
<div style="margin:6px 0 0 1.2em; font-size:22px; line-height:1.55;">まずは、<b>千葉大のポリシー</b>をご参照下さい<br>- <b>活用</b>する場合 → <b>他大学のgood practice</b>をご参照いただき、授業のポリシーを設定下さい<br>- <b>対策</b>する場合 → 阪大の評価にかかる対策集や授業ポリシー例をご活用下さい</div>

<div class="goal-box" style="margin:14px 0 0; padding:10px 24px; font-size:24px;"><b>B. 利用/対策の原則</b></div>
<div class="box-accent pip-safe" style="margin:8px 0 0; font-size:22px; line-height:1.55;">科目・分野による差が大きく、<b>一律の決定は難しい印象</b>です<br>一方で、本日お話したように、方針やチェックすべき点は見出されつつあります<br>本研修をもとに、先生方ご自身が、自らや授業での原則を形作って頂けますと、嬉しいです</div>

---

<div class="page-title">まとめ</div>

# <span style="color:var(--accent-dark)">まとめ</span>

<div class="box-accent" style="margin-top:6px; text-align:center; font-size:26px;"><b>学習効果を損なわず、学修者の自律的な学びを支える</b>ために</div>

<div class="subhead" style="margin-top:12px; font-size:24px;">Bloomの学修目標分類</div>

<table style="width:100%; border-collapse:collapse; font-size:21px; line-height:1.4; margin-top:2px;">
<tr>
<th style="background:var(--accent); color:#fff; padding:7px 10px; width:30%;">認知的領域 (知識や思考)</th>
<th style="background:var(--accent); color:#fff; padding:7px 10px; width:36%;">学びへの生成AIの影響</th>
<th style="background:var(--accent); color:#fff; padding:7px 10px;">現在の状況</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:7px 10px;"><b>分析</b> (要素に分け、関係性を指摘できる)</td>
<td style="border:1px solid #ccc; padding:7px 10px;">解答/過程の支援可(例：要約・構造化・コーディング)</td>
<td style="border:1px solid #ccc; padding:7px 10px;">AIを利用することで、高度な課題が可能に</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:7px 10px; background:var(--accent-soft);"><b>応用</b> (他の場面や状況に使用できる)</td>
<td style="border:1px solid #ccc; padding:7px 10px; background:var(--accent-soft); color:var(--accent-dark); font-weight:800;">単なる問題では、 AIが解いてしまう…</td>
<td style="border:1px solid #ccc; padding:7px 10px; background:var(--accent-soft);">アウトプットが直接成績にならないよう注意</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:7px 10px;"><b>理解</b> (学習内容を説明出来る)</td>
<td style="border:1px solid #ccc; padding:7px 10px;">説明/例示で支援可能 だが学修者の理解必須</td>
<td style="border:1px solid #ccc; padding:7px 10px;">生成AIが理解をインタラクティブに支援</td>
</tr>
</table>

<div class="pip-safe" style="margin-top:10px; font-size:20px; line-height:1.5;">
- 理解の次元は、<b>持ち込みなしペーパーテスト等</b>で確認しやすいです。<br>
- 分析の次元は、学生のアウトプットが発表やレポート、口頭での試験となりやすく、<b>AIで単純に回答出来なくなります</b>。<br>
- 応用の次元は、生成AIが直接アウトプットを出さないように気をつけましょう。- <b>高度な次元 (例：創造的なPBL等)の課題</b>を設定するのも手です。
</div>

---

<div class="page-title">まとめ</div>

# 今日の俯瞰図：<span style="color:var(--accent-dark)">AIを学びの設計に入れる / AIを対策する</span>

<div class="bgroup" style="margin-top:10px;">
<div class="bg-label" style="color:var(--accent-dark);">学生</div>
<table style="width:100%; border-collapse:collapse; font-size:19px; line-height:1.35;">
<tr>
<th style="background:var(--accent); color:#fff; padding:5px 8px; width:14%;">知識や思考</th>
<th style="background:var(--accent); color:#fff; padding:5px 8px;">生成AIの利用</th>
<th style="background:var(--accent); color:#fff; padding:5px 8px; width:24%;">使用可能なツール</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 8px;"><b>分析</b></td>
<td style="border:1px solid #ccc; padding:5px 8px;">情報を統合する/要約する/比較する</td>
<td style="border:1px solid #ccc; padding:5px 8px;">NotebookLM</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 8px;"><b>応用</b></td>
<td style="border:1px solid #ccc; padding:5px 8px;">- 課題のデザインを考える</td>
<td style="border:1px solid #ccc; padding:5px 8px;"></td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 8px;"><b>理解</b></td>
<td style="border:1px solid #ccc; padding:5px 8px;">AIを使って様々な角度から説明を受ける／授業に関する質問をAIに聞いてみる／授業の聞き逃しを要約する</td>
<td style="border:1px solid #ccc; padding:5px 8px;">NotebookLM/LearnLM<br>NotebookLM / ChatGPT等<br>Gemini</td>
</tr>
</table>
</div>

<div class="bgroup pip-safe" style="margin-top:8px;">
<div class="bg-label" style="color:var(--accent-dark);">教員</div>
<table style="width:100%; border-collapse:collapse; font-size:18px; line-height:1.3;">
<tr>
<th style="background:var(--accent-dark); color:#fff; padding:4px 8px; width:18%;">メタな部分</th>
<th style="background:var(--accent-dark); color:#fff; padding:4px 8px;">生成AIの利用</th>
<th style="background:var(--accent-dark); color:#fff; padding:4px 8px; width:26%;">使用可能なツール例</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:4px 8px;">指針 (ガイドライン)</td>
<td style="border:1px solid #ccc; padding:4px 8px;">千葉大の指針／使用までの推奨フローと禁止行為／(参考)文部科学省 初等中等向けガイドライン</td>
<td style="border:1px solid #ccc; padding:4px 8px;"><a href="#" style="color:var(--tag-blue);">リンク</a> (要ログイン)　<a href="#" style="color:var(--tag-blue);">リンク</a></td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:4px 8px;">授業設計</td>
<td style="border:1px solid #ccc; padding:4px 8px;">タスクベースの教授方略 / 反転授業／PBL/アクティブラーニング</td>
<td style="border:1px solid #ccc; padding:4px 8px;">後ほど動画を公開</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:4px 8px;">問題作成</td>
<td style="border:1px solid #ccc; padding:4px 8px;">様々な形式問題を作成する</td>
<td style="border:1px solid #ccc; padding:4px 8px;">NotebookLM / LearnLM</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:4px 8px;">採点</td>
<td style="border:1px solid #ccc; padding:4px 8px;">ルーブリックに基づく採点/フィードバック</td>
<td style="border:1px solid #ccc; padding:4px 8px;">NotebookLM / Claude 3.5</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:4px 8px;">他大学の例</td>
<td style="border:1px solid #ccc; padding:4px 8px;">グッド・プラクティス集</td>
<td style="border:1px solid #ccc; padding:4px 8px;">Yale / 阪大 / 横国 / 私大情協</td>
</tr>
</table>
</div>

<!-- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった -->

---

<div class="page-title">補足</div>

# <span style="color:var(--accent-dark)">SoTL / Good practice</span>収集のお誘い

<div class="box-info" style="margin-top:10px; font-size:23px;">SoTL = Scholarship of Teaching and Learning (授業実践に係る研究)<br>例：生成AIを使ったら成果物の質が上がった、学生の点数が上がった/下がった etc…</div>

<div class="box-accent" style="margin-top:14px; font-size:23px; line-height:1.5;">
今後、<b>生成AIの利用における理学</b>と<b>学際分野の学修への影響を調査していきたい</b>と考えています。<br>
もし、<b>先生の授業で研究/AI関連の支援をさせて頂ける場合</b>には、ぜひお声掛け頂けませんでしょうか。理学の教育活動に、貢献できますと幸いです。
</div>

<div class="stepbox pip-safe" style="margin-top:12px; font-size:22px; line-height:1.5;">
また、授業で生成AIを使用して見た結果など、グッドプラクティスを個人プロジェクトとして収集しています。インタビューや授業見学させて頂ける場合には、ぜひ、お知らせ下さい。
</div>

<div class="takeaway pip-safe" style="margin-top:12px;">それと、<b>複数の分野の知を使う学び/研究の加速</b>や、<b>大学院の研究支援</b>なども、可能では、、、と</div>

<div class="pip-safe" style="text-align:right; font-size:22px; font-weight:700; color:var(--accent-dark); margin-top:8px;">本日は、お時間を頂き、ありがとうございました。</div>

<!-- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった -->

---

<div class="page-title">補足</div>

# <span style="color:var(--accent-dark)">本研修のアンケート</span>のお願い

<div class="box-accent" style="margin-top:14px; text-align:center; font-size:26px;">本研修の内容について、<br>主に選択式で、3分程度で終わる、アンケートがございます。</div>

<div style="text-align:center; margin-top:14px; font-size:24px;"><a href="https://forms.gle/aXK5n2ojYu2SzoQ96" style="color:var(--tag-blue);">https://forms.gle/aXK5n2ojYu2SzoQ96</a></div>

<div style="text-align:center; margin-top:16px; font-size:25px; font-weight:700;">差し支えなければ、今週中で構いませんので、ご回答頂けますと幸いです。</div>

<div class="box-info pip-safe" style="margin-top:18px; font-size:22px;">頂いた質問は、こちらにて解答致します (千葉大学 Google アカウントへのログインが必要です)<br><a href="https://docs.google.com/document/d/15iYeIOcIvbMgsydTFyBxJnvFKWMAoICJcXbLhNEMVJw/edit?usp=sharing" style="color:var(--tag-blue); font-size:19px;">https://docs.google.com/document/d/15iYeIOcIvbMgsydTFyBxJnvFKWMAoICJcXbLhNEMVJw/edit?usp=sharing</a></div>

<!-- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった -->

---

<div class="page-title">③授業で活用/対策する</div>

# 参考：<span style="color:var(--accent-dark)">AIリテラシ</span> OECD (2023)

<div class="box-accent" style="margin-top:10px; text-align:center; font-size:26px;">AIの技術面を批判的に評価し、AIを効果的に活用できる能力<br><span style="font-size:23px;">(communicate and collaborate)</span></div>

<div style="margin-top:14px; font-size:23px; line-height:1.6;">
第１：AIの基本的な機能と日常生活におけるAIの使用方法に関する知識<br>
第２：様々な場面に応用することのできる能力<br>
第３：AIを実装し、評価することができる能力<br>
第４：アルゴリズムの開発に必要なデータを管理する能力とAIの出力結果を批判的に考察する能力
</div>

<div style="text-align:center; margin-top:14px; font-size:30px; font-weight:800;">AIを理解し、活用し、監視し、批判的に考察できるスキル</div>

<div class="cite" style="text-align:right;"><b>内閣府(2024) 世界経済の潮流</b>>第1章>p.32</div>

<div class="takeaway pip-safe" style="margin-top:10px;"><b>各国でリスキリング/学校教育への取り込みが行われている</b></div>

<!-- ハンプサイクル -->

---

<div class="page-title">① “教育×AI”領域の俯瞰</div>

# 参考：<span style="color:var(--accent-dark)">職業への影響</span>

<div style="display:flex; gap:22px; align-items:flex-start; margin-top:10px;">
<div style="flex:0 0 44%; text-align:center;">
<img src="./src/fig53-scatter-crop.png" style="width:100%; border:1px solid #ddd; border-radius:6px;" />
<div class="cite" style="text-align:center;"><b>内閣府(2024) 世界経済の潮流</b>>第1章>p.13</div>
</div>
<div style="flex:1;">
<div class="box-warn" style="font-size:21px; padding:10px 18px; line-height:1.5;"><b>AIの影響が大きく、代替性が高い職業：</b>事務的タスクのシェアが大きい職業。▶ つまり、AIがとって変わってしまう職業</div>
<div class="box-info" style="margin-top:8px; font-size:21px; padding:10px 18px; line-height:1.5;"><b>AIの影響が大きく、補完性が高い職業：</b>事務的タスクのシェアが大きいものの、意思決定の重要性が高く、AI任せとすることが社会的に望ましくない職業。▶ AIを使いこなす必要のある職業</div>
<div class="stepbox" style="margin-top:8px; font-size:21px; padding:10px 18px; line-height:1.5;"><b>AIの影響の小さい職業：</b>物理的タスクのシェアが大きい職業。</div>
</div>
</div>

<div class="takeaway pip-safe" style="margin-top:8px; font-size:22px;">※ 教員・研究者(自然科学系)は、青の領域</div>

<!-- ハンプサイクル -->

---

<div class="page-title">オンライン授業で出来ること</div>

# 参考：<span style="color:var(--accent-dark)">反転授業</span>

<div class="box-accent" style="margin-top:10px; font-size:24px;">基礎知識に関する(メディア)学習を<b>事前に行い、その後の授業では議論・演習などを行うブレンド型の設計</b></div>

<div style="font-size:23px; margin:8px 0 4px;">▶Stanfordの取組が有名 / 学内でも医学部等でも<b>実践論文</b>あり</div>

<div class="cardrow" style="margin-top:8px;">
<div class="pcard">
<div class="pc-h">高度化型</div>
<div style="font-size:23px;">- <b>高次目標</b>を演習や実験で</div>
</div>
<div class="pcard">
<div class="pc-h">完全習得型</div>
<div style="font-size:23px;">- <b>理解の確認や質問</b>を教室で</div>
</div>
</div>

<div class="box-info pip-safe" style="margin-top:10px; font-size:21px; line-height:1.5;">
✔<b>アクティブラーニング</b>を取り入れ教育効果を高めやすい<br>
✔教員は多様な学生に対応しやすく、<b>効率化もしやすい</b><br>
✔学生は疑問点や関心を持ち、<b>自己に最適な授業に臨める</b><br>
✔授業時間の課題で評価するので、AIの影響を受けにくい/設計に取り入れやすい
</div>

---

<div class="page-title">授業構成のtips</div>

# 参考：<span style="color:var(--accent-dark)">最近接発達領域</span>

<div class="box-accent" style="margin-top:8px; text-align:center; font-size:24px;"><b>受講前は自力でできないが、課題を解いたら自力で出来るようになる</b></div>

<div style="display:flex; gap:20px; align-items:center; margin-top:10px;">
<div style="flex:0 0 38%; text-align:center;">
<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
<circle cx="160" cy="130" r="120" fill="#FCEAEC" stroke="var(--accent)" stroke-width="2.5"/>
<circle cx="160" cy="150" r="78" fill="#F8D7DC" stroke="var(--accent)" stroke-width="2.5"/>
<circle cx="160" cy="178" r="40" fill="#fff" stroke="#888" stroke-width="2.5"/>
<text x="160" y="40" text-anchor="middle" font-size="15" font-weight="800" fill="var(--accent-dark)">援助や協同があっても出来ない</text>
<text x="160" y="112" text-anchor="middle" font-size="15" font-weight="800" fill="var(--accent-dark)">援助や協同があれば出来る</text>
<text x="160" y="183" text-anchor="middle" font-size="15" font-weight="800" fill="#333">自力で出来る</text>
<text x="160" y="246" text-anchor="middle" font-size="14" font-weight="800" fill="var(--accent)">最近接発達領域</text>
</svg>
<div class="cite" style="text-align:center;">Vygotsky (1978)</div>
</div>
<div style="flex:1; font-size:22px; line-height:1.6;">
<div><b>足場かけ (Scaffolding)：</b>他者の援助や協同で出来る状態にする</div>
<div style="margin-top:4px; color:#555;">最近接発達領域を広げたり、身につけたりする内容</div>
<div style="margin-top:10px;"><b>足場外し (Fading)：</b>他者の援助や協同を徐々に減らし独り立ち</div>
<div style="margin-top:4px; color:#555;">自力出来るようになる内容</div>
</div>
<div style="flex:0 0 22%; text-align:center;">
<svg viewBox="0 0 180 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
<ellipse cx="90" cy="48" rx="52" ry="34" fill="#F0F0F0" stroke="#888" stroke-width="2"/>
<ellipse cx="90" cy="50" rx="34" ry="22" fill="#F4B400" stroke="#9a7400" stroke-width="2"/>
<ellipse cx="90" cy="52" rx="14" ry="9" fill="#E6F0DC" stroke="#888" stroke-width="1.5"/>
<text x="14" y="24" text-anchor="start" font-size="14" font-weight="800" fill="#333">AI以前</text>
<ellipse cx="78" cy="160" rx="68" ry="48" fill="#F0F0F0" stroke="#888" stroke-width="2"/>
<ellipse cx="78" cy="162" rx="50" ry="34" fill="#F4B400" stroke="#9a7400" stroke-width="2"/>
<ellipse cx="78" cy="164" rx="22" ry="13" fill="#E6F0DC" stroke="#888" stroke-width="1.5"/>
<text x="6" y="118" text-anchor="start" font-size="14" font-weight="800" fill="#333">AI以後</text>
<polygon points="128,156 144,156 144,150 162,164 144,178 144,172 128,172" fill="#F2D6E6" stroke="#B05A8A" stroke-width="1.5"/>
<text x="145" y="167" text-anchor="middle" font-size="11" font-weight="800" fill="#7A2B57">拡大？</text>
</svg>
</div>
</div>

<div class="takeaway pip-safe" style="margin-top:8px; font-size:22px;"><b>生成AIの活用を前提とすれば、よい本質的な課題に取り組む設計が出来る？</b></div>

---

<div class="page-title">学習者主体のクラス設計</div>

# 参考：<span style="color:var(--accent-dark)">アクティブラーニングの有効性</span>とAI

<div style="display:flex; gap:20px; align-items:center; margin-top:10px;">
<div style="flex:0 0 52%; text-align:center;">
<img src="./src/fig56-bars-crop.png" style="width:100%; border:1px solid #ddd; border-radius:6px;" />
<div class="cite" style="text-align:center;">Deslauriers et al. (2011). <i>Science</i></div>
</div>
<div style="flex:1;">
<div class="box-accent" style="font-size:22px; line-height:1.55;">適切な講習を受け、双方向性・主体性のある学習を取り入れると、若い教員も良い授業ができる<br>　→その支援にAIはならないか？</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:10px; font-size:22px;"><b>注意：</b>アクティブラーニングすること自体が授業の目的ではない <b>(効果がない事例も多数)</b></div>

---

<div class="page-title">評価と目標の関係</div>

# <span style="color:var(--accent-dark)">評価の種類</span>

<div style="display:flex; justify-content:space-between; align-items:baseline; margin-top:2px;">
<div class="cite" style="margin:0;">田中耕治（2010）「よくわかる教育評価」を改変</div>
<div style="font-size:23px;">組み合わせて測ることも<b>可</b></div>
</div>

<div style="position:relative; margin-top:4px;">
<svg viewBox="0 0 1040 430" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
<defs>
<marker id="ar" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#888"/></marker>
<linearGradient id="hi" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FCEAEC" stop-opacity="0.2"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0.9"/></linearGradient>
</defs>
<line x1="520" y1="40" x2="520" y2="410" stroke="#888" stroke-width="4" marker-start="url(#ar)" marker-end="url(#ar)"/>
<line x1="120" y1="240" x2="940" y2="240" stroke="#888" stroke-width="4" marker-start="url(#ar)" marker-end="url(#ar)"/>
<line x1="240" y1="370" x2="760" y2="90" stroke="url(#hi)" stroke-width="20" stroke-linecap="round" marker-end="url(#ar)"/>
<text x="520" y="28" text-anchor="middle" font-size="22" font-weight="800">複雑</text>
<text x="520" y="428" text-anchor="middle" font-size="22" font-weight="800">単純</text>
<text x="80" y="280" text-anchor="middle" font-size="22" font-weight="800">筆記</text>
<text x="960" y="280" text-anchor="middle" font-size="22" font-weight="800">実演</text>
<text x="700" y="70" font-size="22" font-weight="800"><tspan fill="var(--accent-dark)">高次</tspan>の目標を測りやすい</text>
<rect x="150" y="130" width="370" height="80" fill="#FCEAEC" stroke="var(--accent)" stroke-width="2.5"/>
<text x="335" y="162" text-anchor="middle" font-size="24" font-weight="800">パフォーマンス課題</text>
<text x="335" y="192" text-anchor="middle" font-size="20">(小論文、作品制作、発表等)</text>
<rect x="150" y="225" width="200" height="78" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="250" y="256" text-anchor="middle" font-size="22" font-weight="700">論述式問題</text>
<text x="250" y="284" text-anchor="middle" font-size="22" font-weight="700">レポート</text>
<rect x="160" y="312" width="180" height="60" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="250" y="349" text-anchor="middle" font-size="22" font-weight="700">記述式問題</text>
<rect x="540" y="225" width="220" height="78" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="650" y="256" text-anchor="middle" font-size="22" font-weight="700">実技テスト</text>
<text x="650" y="284" text-anchor="middle" font-size="22" font-weight="700">面接/口頭試問</text>
<rect x="610" y="312" width="150" height="60" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="685" y="349" text-anchor="middle" font-size="22" font-weight="700">観察試験</text>
<rect x="160" y="382" width="180" height="42" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="250" y="410" text-anchor="middle" font-size="22" font-weight="700">選択式問題</text>
<rect x="540" y="382" width="150" height="42" fill="#fff" stroke="#E08A2B" stroke-width="2.5"/>
<text x="615" y="410" text-anchor="middle" font-size="22" font-weight="700">心理テスト</text>
</svg>
</div>

---

<div class="page-title">ルーブリック</div>

# <span style="color:var(--accent-dark)">ルーブリック</span>

<div class="box-accent" style="margin-top:8px; font-size:23px; line-height:1.5;">
✔<b>採点道具の一つで、課題を構成要素に分け、要素ごとに評価基準を満たすレベルを説明した表</b><br>
✔パフォーマンス課題・レポート・実技等の評価の可視化
</div>

<div style="font-size:23px; margin:10px 0 4px;"><b>「課題内容：6分模擬授業」</b>を評価するためのルーブリック</div>

<table style="width:100%; border-collapse:collapse; font-size:21px; line-height:1.4;">
<tr>
<th style="background:var(--accent-dark); color:#fff; padding:6px 10px; width:16%;">評価観点</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">素晴らしい(2)</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">合格(1)</th>
<th style="background:var(--accent); color:#fff; padding:6px 10px;">不十分(0)</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:6px 10px; background:var(--accent-soft); font-weight:700;">分量</td>
<td style="border:1px solid #ccc; padding:6px 10px;"></td>
<td style="border:1px solid #ccc; padding:6px 10px;">6分間で丁度</td>
<td style="border:1px solid #ccc; padding:6px 10px;">過剰か少ない</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:6px 10px; background:var(--accent-soft); font-weight:700;">目標</td>
<td style="border:1px solid #ccc; padding:6px 10px;">明確かつ内容が一致していた</td>
<td style="border:1px solid #ccc; padding:6px 10px;">明確さか内容の何れかに改善点</td>
<td style="border:1px solid #ccc; padding:6px 10px;">明確さ・内容の何れも不十分</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:6px 10px; background:var(--accent-soft); font-weight:700;">レベル設定</td>
<td style="border:1px solid #ccc; padding:6px 10px;">手を伸ばせば届くレベルだった</td>
<td style="border:1px solid #ccc; padding:6px 10px;">一部高度・容易な箇所があった</td>
<td style="border:1px solid #ccc; padding:6px 10px;">極端に高度・容易であった</td>
</tr>
</table>

<div style="display:flex; gap:24px; margin-top:6px; font-size:20px; color:#555;">
<div><b>評価尺度</b>＝横軸（2・1・0）</div>
<div><b>評価基準</b>＝縦の各観点</div>
</div>

<div class="takeaway pip-safe" style="margin-top:8px; font-size:22px;">ルーブリックを設計し高次目標の課題も扱おう</div>

<div class="cite" style="margin-top:2px;">栗田 &amp; 中村（2024）「インタラクティブ・ティーチング 実践編３」／スティーブンス＆レビ (2014)</div>

---

<div class="page-title">②課題での利用例</div>

# 参考：<span style="color:var(--accent-dark)">AIを活用する上で、私が気をつけていること</span>

<div class="flowrow" style="justify-content:center; margin:6px 0 10px; gap:14px;">
<div class="fbox gray" style="font-size:26px; padding:6px 24px;">設計</div>
<span class="farrow">⇄</span>
<div class="fbox red" style="font-size:26px; padding:6px 24px;">PoC</div>
<span class="farrow">→</span>
<div class="fbox gray" style="font-size:26px; padding:6px 24px;">運用</div>
<span class="farrow">→</span>
<div class="fbox gray" style="font-size:26px; padding:6px 24px;">確認</div>
</div>

<div class="stepbox" style="margin-top:8px; padding:10px 24px;">
<div class="st"><b>① ループする/人力を入れる：</b></div>
<div style="font-size:21px; margin-left:1.2em; line-height:1.5;">1回で正しい/求める答えは出ない。設計、PoCの双方で、AIと何度もやり取りしながら、求める形の結果になるまで整える。雛形が一回出来上がると、コンスタント化。</div>
</div>

<div class="stepbox" style="margin-top:8px; padding:10px 24px;">
<div class="st"><b>② 十分なコンテキストを与える：</b></div>
<div style="font-size:21px; margin-left:1.2em; line-height:1.5;">特に有料版の生成AIは、背景となる資料を与えた上でコンテキストを規定することで、的を射た形になる。</div>
</div>

<div class="stepbox pip-safe" style="margin-top:8px; padding:10px 24px;">
<div class="st"><b>③ 生成AIの答えを直接信用しない：</b></div>
<div style="font-size:21px; margin-left:1.2em; line-height:1.5;">出てきた解答を検証する。あるいは、選択する。例えば、1つの例を作るより、10個の例をAIが作って、正しいものを選ぶほうが早いし、きれい。</div>
</div>

---

<div class="page-title">②課題での利用例</div>

# 参考：<span style="color:var(--accent-dark)">ID(インストラクショナル・デザイン)の第一原理</span>

<div class="box-info" style="margin-top:8px; font-size:23px;"><b>インストラクション</b>：学習を促進させるために行うことすべて</div>

<div style="text-align:center; font-size:24px; font-weight:800; color:var(--accent-dark); margin:8px 0 4px;">IDの第一原理</div>

<table style="width:100%; border-collapse:collapse; font-size:22px; line-height:1.3;">
<tr>
<th style="background:var(--accent); color:#fff; padding:8px 12px; width:34%;">5つの要件</th>
<th style="background:var(--accent); color:#fff; padding:8px 12px;">説明</th>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 12px;">①問題(Problem)</td>
<td style="border:1px solid #ccc; padding:5px 12px;">現実に起こりそうな問題に挑戦する</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 12px;">②活性化(Activation)</td>
<td style="border:1px solid #ccc; padding:5px 12px;">すでに知っている知識を動員する</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 12px;">③例示(Demonstration)</td>
<td style="border:1px solid #ccc; padding:5px 12px;">例示がある(Tell me でなく Show me)</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 12px;">④応用(Application)</td>
<td style="border:1px solid #ccc; padding:5px 12px;">応用するチャンスがある(Let me)</td>
</tr>
<tr>
<td style="border:1px solid #ccc; padding:5px 12px;">⑤統合(Integration)</td>
<td style="border:1px solid #ccc; padding:5px 12px;">現場で活用し、振り返るチャンスがある</td>
</tr>
</table>

<div class="cite pip-safe" style="margin-top:10px;">鈴木克明（2015）『研修設計マニュアル』北大路書房</div>

---

<div class="page-title">②課題での利用例</div>

# <span style="font-size:30px;">参考：</span>課題中心型の授業設計を行う背景にある<span style="color:var(--accent-dark)">問題意識</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:2px;">
<div style="flex:0 0 640px;">

<div style="display:flex; gap:18px; align-items:flex-end;">
<div style="text-align:center;">
<div style="font-size:24px; font-weight:800; margin-bottom:4px;">14世紀 @ ドイツ</div>
<img src="./src/fig61L-crop.png" alt="14世紀ドイツの講義の様子（写本挿絵）" style="width:294px; border:1px solid #ccc;">
<div class="cite" style="margin-top:2px;">Laurentius de Voltolina</div>
</div>
<div style="text-align:center;">
<div style="font-size:24px; font-weight:800; margin-bottom:4px;">現在？</div>
<img src="./src/fig61R-crop.png" alt="現在の講義の様子（DALL-E生成）" style="width:200px; border:1px solid #ccc;">
<div class="cite" style="margin-top:2px;">Generated by DALL-E</div>
</div>
</div>

<div class="box-accent" style="margin-top:14px; font-size:25px;"><b>社会</b>も、<b>科学技術</b>も、<b>教育理論</b>も進歩<br>でも、<b>授業は同じまま</b>？</div>

</div>

<div style="flex:1;">

<div style="font-size:22px; font-weight:800; text-align:center; margin-bottom:4px;">認知的領域</div>
<div style="display:flex; gap:8px; align-items:stretch;">
<div style="display:flex; flex-direction:column; justify-content:space-between; font-size:20px; font-weight:700; padding:4px 0;">
<div>高</div>
<div>低</div>
</div>
<div style="flex:1;">
<div style="background:var(--accent); color:#fff; text-align:center; font-weight:800; padding:5px 0; border-bottom:1px solid #fff;">創造</div>
<div style="background:#D94668; color:#fff; text-align:center; font-weight:800; padding:5px 0; border-bottom:1px solid #fff;">評価</div>
<div style="background:#E07090; color:#fff; text-align:center; font-weight:800; padding:5px 0; border-bottom:1px solid #fff;">分析</div>
<div style="background:#E8A0B4; text-align:center; font-weight:800; padding:5px 0; border-bottom:1px solid #fff;">応用</div>
<div style="background:#F2C8D4; text-align:center; font-weight:800; padding:5px 0; border-bottom:1px solid #fff;">理解</div>
<div style="background:#FBE4EA; text-align:center; font-weight:800; padding:5px 0;">記憶</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:21px; font-weight:400;">
<b>座学の講義で理解を促すだけ</b>では、到達出来たり、授業中に試せたりする<b>目標の範囲が狭くなりがち</b>。<br>そこで、<b>課題中心や実験中心など、「起こりそうな問題」や「実験」を設計の軸にする</b>ことで、より深く学べるようになるのでは？
</div>

</div>
</div>

<!--
- 14世紀ドイツの講義の様子と、現在の講義をDALL-Eで描かせたもの。社会も科学技術も教育理論も進歩したのに、授業は同じままでよいのか、という問題意識。
- ブルームの認知的領域：記憶→理解→応用→分析→評価→創造。座学で理解を促すだけだと、到達できる目標の範囲が狭くなりがち。課題中心や実験中心など「起こりそうな問題」を設計の軸にすると、より深く学べるのでは。
-->

---

<div class="page-title">Teaching with AI</div>

# <span style="font-size:30px;">参考：</span>Teaching with AI <span style="font-size:24px; color:#555;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:2px;">
<div style="flex:0 0 200px; text-align:center;">
<img src="./src/fig52-img.png" alt="Teaching with AI 書影" style="width:188px; box-shadow:0 2px 8px rgba(0,0,0,.25); border-radius:4px;">
<div style="font-size:20px; font-weight:800; color:var(--accent-dark); margin-top:8px;">高等教育における、生成AI活用の事例・プロンプト集</div>
</div>

<div style="flex:1;">
<div style="display:flex; gap:14px;">

<div style="flex:1;">
<div class="callout-blue" style="font-size:21px; font-weight:800;">授業での活用：</div>
<div style="font-size:18px; line-height:1.45; margin:4px 0 8px;">
AIをリアルタイムの議論のサポートとして活用<br>
AIを用いた模擬面接や役割演習の実施<br>
AIを使った個別化された学習支援とフィードバック提供<br>
クラスディスカッションでのAIの活用(例:反対意見の提示役として)<br>
授業内での小テストやミニエッセイの実施
</div>
<div class="callout-blue" style="font-size:21px; font-weight:800;">課題設計：</div>
<div style="font-size:18px; line-height:1.45; margin-top:4px;">
個人の経験や地域に基づいた課題の作成<br>
プロセスを重視した段階的な課題設計<br>
ピアレビューを組み込んだ課題<br>
リアルタイムの出来事についての分析課題<br>
フィールドワークやインタビューを含む課題<br>
グループワークやコラボレーション課題<br>
アノテーション(注釈付け)を活用した読解課題<br>
マルチメディア(ビデオ、ポッドキャスト)を使用した課題
</div>
</div>

<div style="flex:1;">
<div class="callout-pink" style="font-size:21px; font-weight:800;">評価方法：</div>
<div style="font-size:18px; line-height:1.45; margin:4px 0 8px;">
ルーブリックを使用した評価<br>
プロセスの評価(draftsの提出など)<br>
AIとの対話記録の提出と評価<br>
個別化された評価基準の設定<br>
即時フィードバックの提供
</div>
<div class="callout-pink" style="font-size:21px; font-weight:800;">特徴的な課題例：</div>
<div style="font-size:18px; line-height:1.45; margin-top:4px;">
AIを使って生成した文章の編集・改善<br>
AIの出力に対する事実確認演習<br>
異なる観客向けの文章作成練習<br>
ケーススタディやテキストアドベンチャーゲームの作成<br>
グラフィックノベルの制作<br>
プレゼンテーションの準備と実施
</div>
</div>

</div>

<div class="box-accent pip-safe" style="font-size:21px; margin-top:8px;">AIを活用しながらも、<b>人間の創造性や批判的思考を重視</b>し、学習効果を高める</div>
</div>
</div>

<div class="cite pip-safe">本一冊のユースケースについて要約を依頼し出力, 2024.11.21, Claude 3.5 Sonnet</div>

<!--
- Bowen & Watson『Teaching with AI』（AAC&U 2024）。高等教育における生成AI活用の事例・プロンプト集。授業での活用・課題設計・評価方法・特徴的な課題例を、本一冊のユースケースとしてClaude 3.5 Sonnetに要約させた結果。
- AIを活用しながらも、人間の創造性や批判的思考を重視し、学習効果を高めることが主眼。
-->

---

<div class="page-title">Teaching with AI</div>

# <span style="font-size:30px;">参考：</span>課題中心型の授業設計

<div class="box-info" style="font-size:23px; margin-top:6px;">
<b>✗問題解決型</b>：現実の解決する形で設定するが、どのような学びや学問を使用するかは、明確にデザインされていない (スキル獲得を目指すもの)。
</div>

<div class="box-accent" style="font-size:23px; margin-top:10px;">
<b>◯課題中心型</b>：現実に起きそうな問題を、教員が小問 (道しるべ) や試行錯誤、ワークなど、使用する概念や獲得される学びを把握して、学習課程を設計する。
</div>

<div class="stepbox pip-safe" style="margin-top:12px;">
<div style="font-size:23px; font-weight:800; color:var(--accent-dark); margin-bottom:4px;">方法</div>
<div style="font-size:20px; line-height:1.5;">
①新しい全体的なタスクを見せる<br>
②タスクに必要な構成要素を提示する<br>
③タスクに関する構成要素を演示する<br>
④もう一つ新しい全体タスクを見せる<br>
⑤学修者に、既習の構成要素を新タスクに応用させる<br>
⑥この新タスクに必要となる追加的な構成要素を提示する　<span style="color:#555;">補足：追加部分は、AIに支援させるなども可能</span><br>
⑦これらの追加的な構成要素を演示する<br>
⑧ステップ4~7を続くステップにも繰り返す
</div>
</div>

<div class="cite pip-safe">ブランチ・メリル (2013)</div>

<!--
- 問題解決型（✗）は、解決の形で設定するが、どんな学びや学問を使うかが明確にデザインされていない（スキル獲得が目的）。
- 課題中心型（◯）は、現実に起きそうな問題を、教員が小問・試行錯誤・ワークなどで、使用する概念や獲得される学びを把握して学習課程を設計する。
- メリルの方法：①全体タスクを見せる→②③構成要素の提示・演示→④もう一つの全体タスク→⑤既習要素の応用→⑥⑦追加要素の提示・演示（追加部分はAI支援も可）→⑧繰り返す。ブランチ・メリル（2013）。
-->
