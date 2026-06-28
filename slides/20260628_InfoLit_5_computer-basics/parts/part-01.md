<div class="page-title">コンピューターの中身</div>

# <span style="color:var(--accent-dark)">マザーボード</span>（メインボード）

<div style="display:flex; gap:28px; align-items:flex-start;">
<div style="flex:1;">

CPU、メモリ、拡張カードなどのあらゆる部品を一つに接続するための**巨大な電子回路基板**。

各パーツは基板上に張り巡らされた「バス（伝送路）」と呼ばれる配線を通じて相互に通信を行う。

パソコンの性能を引き出せるかどうかは、このマザーボードの品質にも大きく依存する。

</div>
</div>

<div class="ex-head">外部インターフェースについて</div>

<div class="cardrow">
<div class="pcard"><div class="pc-h">ディスプレイ端子</div><p>HDMIやDisplayPortなど、デジタル映像・音声をディスプレイに出力するための端子。</p></div>
<div class="pcard"><div class="pc-h">汎用ポート (USB)</div><p>キーボード、マウス、外部ストレージなど、多種多様な入力・出力装置を接続するための規格。</p></div>
<div class="pcard"><div class="pc-h">ネットワーク端子</div><p>LANケーブルを接続し、インターネットや他のコンピュータと通信を行う。</p></div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px; text-align:center; font-weight:800;">それぞれに標準規格があり、安定して使えるようになっている</div>

<!--
- マザーボードは全部品を載せる巨大な基板。バスで相互通信する。
- 外部インターフェース＝ディスプレイ端子・USB・ネットワーク端子。標準規格で安定して使える。
-->

---

<div class="page-title">コンピューターの中身</div>

# ワーク #「<span style="color:var(--accent-dark)">良いコンピュータ</span>」を考える

<div class="lead-note" style="text-align:center;">電気店ロールプレイで学ぶ「良いコンピュータ」って何?</div>

Gemにアクセスし、電気店員/学生に分かれて話しましょう

<div style="display:flex; gap:20px; align-items:stretch; margin-top:8px;">
<div style="flex:1.1;">

<div class="box-accent"><b>答えはひとつではない</b><br>用途・予算・使う人・目的によって変わる</div>

<div class="stepbox" style="margin-top:12px;">
<div class="st"><b>手順1) ペアを組む</b></div>
<div class="st"><b>A: 電気店員役</b> ― AI (Gem) が手元で助言</div>
<div class="st"><b>B: PCを買いに来た学生役</b>：自由に質問・要望</div>
<div class="st"><b>手順2)</b> 3分ずつで会話→入れ替える</div>
<div class="st"><b>手順3)</b> 振り返りを行う</div>
</div>

</div>
<div style="flex:1;">

<div class="box-info"><b>Gemの使い方(電気店員役)</b><br>
・学生役の質問を聞く<br>
・Gemに「お客さんからこう聞かれた」と簡単に入力<br>
・5つの観点を受け取る<br>
・**自分の言葉に直して** お客さんに答える<br>
・わかりやすく、習ったことを使おう</div>

</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; text-align:center;">終わったら、気づきを共有しましょう</div>

<!--
- 電気店ロールプレイ。A=店員役（Gemが助言）／B=学生役。3分ずつ交代。
- 「良いコンピュータ」の答えはひとつでなく、用途・予算・使う人・目的で変わる。
- Gemから5つの観点を受け取り、自分の言葉に直して答える。終わったら気づきを共有。
-->

---

<div class="page-title">コンピューターの中身</div>

# <span style="color:var(--accent-dark)">スーパーコンピューター</span>とは？

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.35;">

<div class="ex-head">究極の並列処理システム</div>

一般的なPCの延長線上にありながら、何万、何十万もの高性能なCPUやGPUを接続し、**一つの巨大なシステムとして密結合**させた計算機。

気象予測、新薬開発、宇宙シミュレーション、巨大なAIモデルの学習など、極めて複雑で膨大な計算に用いられる。

<div class="ex-head" style="margin-top:10px;">スパコンにおける「帯域」の重要性</div>

膨大な数のプロセッサが協力して計算を行うため、計算途中のデータをプロセッサ間で頻繁にやり取りする必要がある。

そのため、個々の計算力以上に、**ノード（計算機）間を繋ぐ「ネットワーク通信帯域幅」の太さと通信の遅延の少なさ**が、性能のボトルネックを解消する最大の鍵となる。

</div>
<div style="flex:1; text-align:center;">
<img src="./src/fig15-fugaku.png" alt="RIKEN/JST 富嶽" style="width:100%; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.18);">
<div class="cite" style="text-align:center;">RIKEN/JST 富嶽</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:8px; text-align:center; font-weight:800;">いまや、Colabの先にあるPCも、かなり高速なサーバー</div>

<!--
- スーパーコンピュータ＝何万ものCPU/GPUを密結合した計算機。気象・新薬・宇宙・AI学習に使う。
- 個々の計算力よりノード間の通信帯域と低遅延が性能の鍵。
- Colabの先にあるPCも、かなり高速なサーバー。
-->

---

<div class="page-title">小テストの実施</div>

# <span style="color:var(--accent-dark)">Safe Exam Browser</span>を入れる

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.1;">
<img src="./src/fig16-img.png" alt="Safe Exam Browser ダウンロード画面" style="width:100%; border:1.5px solid #ddd; border-radius:6px;">
</div>
<div style="flex:1;">

<div class="ex-head">Moodleでテストできる</div>

<div class="box-info"><b>Moodleのログイン必要</b><br>アルファベット4文字・数字4文字</div>

<div class="box-warn" style="margin-top:14px;"><b>5分でインストール・ログインして下さい</b><br>困ったら手を上げる</div>

</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center; font-weight:800;">テストは、<span style="color:var(--accent);">15分で</span>実施です / 持ち込み・閲覧不可</div>

<!--
- Safe Exam Browserをインストール。Moodleでテストできる。
- Moodleログインが必要（アルファベット4文字・数字4文字）。5分でインストール・ログイン、困ったら手を上げる。
- テストは15分・持ち込み閲覧不可。
-->

---

<!-- _class: message -->

<div class="page-title">OS/アプリケーション</div>

<div style="text-align:center; margin-top:80px;">

# OSは「舞台」であり、<br> アプリは「役者」である。

<div style="font-size:27px; color:var(--muted); margin-top:18px;">OSという共通の土台があってこそ、アプリは個別の目的を果たせます</div>

</div>

<!--
- OSは「舞台」、アプリは「役者」。OSという共通の土台があってこそ、アプリは個別の目的を果たせる。
-->

---

<div class="page-title">OS/アプリケーション</div>

<div style="display:flex; justify-content:center; align-items:flex-end; gap:14px; margin:6px 0 18px;">
<div style="background:#ededed; border-radius:6px; padding:8px 0; width:300px; text-align:center; font-size:27px;">アプリケーション</div>
<div style="background:#ededed; border-radius:6px; padding:8px 0; width:140px; text-align:center; font-size:27px;">アプリ</div>
</div>
<div style="display:flex; justify-content:center; margin:-12px 0 0;">
<div style="background:var(--accent-soft); border-radius:6px; padding:8px 0; width:560px; text-align:center; font-size:27px; color:var(--accent-dark);">OS</div>
</div>
<div style="display:flex; justify-content:center; margin:6px 0 14px;">
<div style="background:#ededed; border-radius:6px; padding:8px 0; width:660px; text-align:center; font-size:27px;">ハード</div>
</div>

<table style="width:100%; border-collapse:collapse; font-size:23px;">
<thead>
<tr style="background:#f4f4f6;">
<th style="text-align:left; padding:9px 14px; width:18%;">比較項目</th>
<th style="text-align:left; padding:9px 14px;">OS (オペレーティングシステム)</th>
<th style="text-align:left; padding:9px 14px;">アプリケーション (応用ソフト)</th>
</tr>
</thead>
<tbody>
<tr style="background:#e9ecf3;"><td style="padding:9px 14px;"><b>主な役割</b></td><td style="padding:9px 14px;">資源（ハード・ソフト）の管理・制御</td><td style="padding:9px 14px;">特定のユーザー目的の遂行</td></tr>
<tr style="background:#eef1f7;"><td style="padding:9px 14px;"><b>立場</b></td><td style="padding:9px 14px;">「土台」「舞台」</td><td style="padding:9px 14px;">「道具」「役者」</td></tr>
<tr style="background:#e9ecf3;"><td style="padding:9px 14px;"><b>具体例</b></td><td style="padding:9px 14px;">Windows, Android, macOS, Linux</td><td style="padding:9px 14px;">Chrome, Word, LINE, Instagram</td></tr>
<tr style="background:#eef1f7;"><td style="padding:9px 14px;"><b>動作条件</b></td><td style="padding:9px 14px;">単体で基本動作が可能</td><td style="padding:9px 14px;">OSがないと動作できない</td></tr>
</tbody>
</table>

<!--
- 階層図：ハードの上にOS、OSの上にアプリケーション（アプリ）。
- 表でOSとアプリを比較：役割・立場・具体例・動作条件。アプリはOSがないと動作できない。
-->

---

<div class="page-title">OS/アプリケーション</div>

# <span style="color:var(--accent-dark)">オペレーティングシステム（OS）の種類</span>

<div class="lead-note" style="margin-left:24px; color:#555;">Operating System</div>

<div style="font-size:28px; line-height:1.65; margin-top:14px;">

- Windows（マイクロソフト社）
- macOS, OS X，MacOS（アップル社）
- Linux（OSS: Open Source Software)）
  - UnixライクなOS

<div style="height:14px;"></div>

- スマートフォン用 iOS（アップル社）
- スマートフォン用 Android

</div>

<!--
- OSの種類：Windows（マイクロソフト）、macOS/OS X/MacOS（アップル）、Linux（OSS・Unixライク）。
- スマートフォン用はiOS（アップル）とAndroid。
-->

---

<div class="page-title">OS/アプリケーション</div>

# <span style="color:var(--accent-dark)">Microsoft Windows</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div style="font-size:24px; line-height:1.6;">

- パーソナルコンピュータOSのデファクトスタンダード
- 圧倒的なシェアを持つ
- ハードウェアは各メーカが製造する
- クライアント用(Windows10, 11)のほかに、サーバ用(Windows Server 2012, 2016, 2019, 2022)、モバイル用(Windows Phone 8→Windows 10 Mobile, 2019年終了)、組み込み用がある。

</div>

<div class="box-warn" style="margin-top:14px; border-color:var(--accent); background:#FCEAEC; color:var(--accent-dark);"><b>Windows10は 2025年10月14日 サポート終了</b></div>

</div>
<div style="flex:1;">

# <span style="color:var(--accent-dark); font-size:36px;">macOS，（OS X，MacOS X）</span>

<div style="font-size:22px; line-height:1.55;">

- アップル社が開発・販売するMacintoshコンピュータ用のOS
- UNIXに関連した技術をベースにしている
- オープンな標準規格の採用を基本としている
- 旧来のMac OSに比べて非常に安定している
- 直感的に操作できる洗練されたGUIには定評がある
- 開かれていることと閉じていることの強み

</div>

<img src="./src/fig20-mac-cpu.png" alt="MacのCPUとOSの独立した変遷" style="width:100%; margin-top:8px;">
<div class="cite">https://ascii.jp/elem/000/004/052/4052764/</div>

</div>
</div>

<!--
- Windows＝PC OSのデファクトスタンダード、圧倒的シェア。ハードは各メーカ製造。クライアント/サーバ/モバイル/組込み。Windows10は2025/10/14サポート終了。
- macOS＝アップルのMacintosh用OS。UNIXベース、標準規格、安定、洗練されたGUI。MacのCPUとOSは独立して変遷。
-->

---

<div class="page-title">OSが行っていること</div>

<div style="display:flex; gap:30px; margin:4px 0 2px;">
<div style="font-size:30px; font-weight:800;">① プログラムの管理</div>
<div style="font-size:30px; font-weight:800;">② ハードウェアの抽象化</div>
<div style="font-size:30px; font-weight:800;">③ UI/メモリ管理</div>
</div>

<div class="cardrow" style="margin-top:14px;">
<div class="pcard"><div class="pc-h">メモリの保護</div><p>各アプリにメモリ領域を割り当てます。他アプリの領域への侵入を防ぎ、システムの安定性を保ちます。</p></div>
<div class="pcard"><div class="pc-h">共通UIの提供</div><p>ウィンドウ、メニュー、ボタンなどの操作感を統一。どのアプリでも迷わず操作できる環境を作ります。</p></div>
<div class="pcard"><div class="pc-h">ファイル管理</div><p>データの保存場所やアクセス権限を管理。情報の安全性と整理を自動的に行います。</p></div>
</div>

<!--
- OSが行うこと：①プログラムの管理、②ハードウェアの抽象化、③UI/メモリ管理。
- メモリの保護＝アプリにメモリ領域を割り当て侵入を防ぐ。共通UIの提供＝操作感を統一。ファイル管理＝保存場所とアクセス権限を管理。
-->

---

<div class="page-title">質問②の例：学習方略</div>

<div class="box-info" style="margin-bottom:8px;"><b>学習方略</b> - Dunlosky et al. (2013)  PSPI<br><span style="font-size:21px;">教育心理学による、「生徒がどう勉強すべきか」のレビュー論文</span></div>

<table style="width:100%; border-collapse:collapse; font-size:17px; line-height:1.35;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:5px 8px; text-align:left; width:13%;">テクニック</th>
<th style="padding:5px 8px; text-align:left;">内容・方法</th>
<th style="padding:5px 8px; text-align:center; width:7%;">効果</th>
<th style="padding:5px 8px; text-align:left; width:33%;">主な理由</th>
</tr>
</thead>
<tbody>
<tr style="background:#fff;"><td style="padding:4px 8px;"><b>実力テスト</b></td><td style="padding:4px 8px;">フラッシュカードや練習問題などを使い、自分の記憶から情報を引き出すテストを行う。</td><td style="padding:4px 8px; text-align:center; color:var(--accent); font-weight:800;">高</td><td style="padding:4px 8px;">学習効果が高く、幅広い教材・年齢層に有効。フィードバックがあると効果的。</td></tr>
<tr style="background:#f6f6f8;"><td style="padding:4px 8px;"><b>分散学習</b></td><td style="padding:4px 8px;">一気に学習せず、学習スケジュールを分散させる。</td><td style="padding:4px 8px; text-align:center; color:var(--accent); font-weight:800;">高</td><td style="padding:4px 8px;">長期的な記憶保持に有効。一夜漬けよりも遥かに効率が良い。</td></tr>
<tr style="background:#fff;"><td style="padding:4px 8px;"><b>精緻化的質問</b></td><td style="padding:4px 8px;">「なぜその事実が成り立つのか？」という質問を自分に投げかけ、説明を考える。</td><td style="padding:4px 8px; text-align:center; font-weight:800;">中</td><td style="padding:4px 8px;">事実の学習に有効だが、ある程度の予備知識が必要。</td></tr>
<tr style="background:#f6f6f8;"><td style="padding:4px 8px;"><b>自己説明</b></td><td style="padding:4px 8px;">学習のプロセスや、新しい情報が既知の情報とどう関連するかを自分自身に説明する。</td><td style="padding:4px 8px; text-align:center; font-weight:800;">中</td><td style="padding:4px 8px;">数学や論理的思考を要する問題解決に有効だが、時間がかかる。</td></tr>
<tr style="background:#fff;"><td style="padding:4px 8px;"><b>交互練習</b></td><td style="padding:4px 8px;">1つの種類の問題をまとめて解くのではなく、異なる種類の問題を混ぜて練習する。</td><td style="padding:4px 8px; text-align:center; font-weight:800;">中</td><td style="padding:4px 8px;">数学などで劇的な効果がある（区別がつかなくなるのを防ぐ）。 ※ 全ての教科での効果は未検証。</td></tr>
<tr style="background:#f6f6f8;"><td style="padding:4px 8px;"><b>要約</b></td><td style="padding:4px 8px;">学習したテキストの要点をまとめ短い文章にする。</td><td style="padding:4px 8px; text-align:center; color:#888; font-weight:800;">低</td><td style="padding:4px 8px;">時間がかかるわりに、要約スキルの形成を除き効果が薄い。</td></tr>
<tr style="background:#fff;"><td style="padding:4px 8px;"><b>ハイライト</b></td><td style="padding:4px 8px;">重要な部分に線を引いたり、色を塗ったりする。</td><td style="padding:4px 8px; text-align:center; color:#888; font-weight:800;">低</td><td style="padding:4px 8px;">読むだけより効果が薄くなりがちで、推論能力を阻害しうる。</td></tr>
<tr style="background:#f6f6f8;"><td style="padding:4px 8px;"><b>キーワード法</b></td><td style="padding:4px 8px;">発音が似たキーワードにイメージを結びつける。</td><td style="padding:4px 8px; text-align:center; color:#888; font-weight:800;">低</td><td style="padding:4px 8px;">適用できる教材が限られ（語呂合わせなど）、長期記憶しにくい。</td></tr>
<tr style="background:#fff;"><td style="padding:4px 8px;"><b>テキストのイメージ化</b></td><td style="padding:4px 8px;">読んでいる内容を頭の中で映像化する。</td><td style="padding:4px 8px; text-align:center; color:#888; font-weight:800;">低</td><td style="padding:4px 8px;">視覚化しやすい教材に限られ、効果が一貫しない。</td></tr>
<tr style="background:#f6f6f8;"><td style="padding:4px 8px;"><b>再読</b></td><td style="padding:4px 8px;">テキストやノートを繰り返し読む。</td><td style="padding:4px 8px; text-align:center; color:#888; font-weight:800;">低</td><td style="padding:4px 8px;">最も一般的だが、時間対効果が低く、深い理解につながらない。</td></tr>
</tbody>
</table>

<div style="display:flex; gap:12px; margin-top:8px; align-items:center;">
<div style="font-size:18px; color:#666; white-space:nowrap;">※個人差はあります。</div>
<div class="box-warn pip-safe" style="font-size:19px; padding:8px 16px; flex:1;">再読やハイライト、写し直すなど、準備コストの低いが効果も低い、方略を選びがち<br><b>一方で、学習効果の高い方法は、準備コストが高い一方、一人では難しい</b></div>
</div>

<!--
- Dunlosky et al. (2013) PSPI のレビュー。生徒がどう勉強すべきか。
- 効果「高」＝実力テスト・分散学習。「中」＝精緻化的質問・自己説明・交互練習。「低」＝要約・ハイライト・キーワード法・イメージ化・再読。
- 準備コストの低い方略（再読・ハイライト）を選びがちだが、効果の高い方法は準備コストが高く一人では難しい。個人差あり。
-->

---

<!-- _class: divider -->

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">Google NotebookLM</span>

<div class="lead-note" style="text-align:center;">コンテキストをもとに、情報を変換・深堀りする道具</div>

<img src="./src/fig23-notebooklm.png" alt="NotebookLM の画面" style="width:88%; display:block; margin:14px auto 0; border:1.5px solid #ddd; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.12);">

<div class="flowrow" style="justify-content:center; margin-top:10px;">
<div class="fbox gray" style="font-size:27px; padding:6px 26px;">コンテキスト</div>
<div class="farrow">→</div>
<div class="fbox gray" style="font-size:27px; padding:6px 26px;">質問</div>
<div class="farrow">→</div>
<div class="fbox red" style="font-size:27px; padding:6px 26px;">変換</div>
</div>

<!--
- Google NotebookLM＝コンテキストをもとに情報を変換・深堀りする道具。
- コンテキスト → 質問 → 変換、の流れ。
-->

---

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">学びやすい形に情報を変換</span>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1.4;">

<div class="cardrow">
<div class="pcard" style="text-align:center;"><div class="pc-h">絵1枚で要約</div><img src="./src/fig24a-summary.png" alt="絵1枚で要約" style="width:100%; border-radius:6px;"></div>
<div class="pcard" style="text-align:center;"><div class="pc-h">スライド作成</div><img src="./src/fig24b-slide.png" alt="スライド作成" style="width:100%; border-radius:6px;"></div>
</div>

<div class="cardrow" style="margin-top:12px;">
<div class="pcard" style="text-align:center;"><div class="pc-h">クイズで時間確認</div><img src="./src/fig24c-quiz.png" alt="クイズで時間確認" style="width:100%; border-radius:6px;"></div>
<div class="pcard"><div class="pc-h">動画・podキャスト</div><p style="text-align:center;">（ソクラテスメソッド）<br>質問・応答</p></div>
</div>

</div>
<div style="flex:0.55; text-align:center;">
<img src="./src/fig24d-pagoda.png" alt="五重塔" style="width:100%; border-radius:6px;">
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; text-align:center; font-weight:800;">学びやすい形に情報を変換</div>

<!--
- NotebookLMで学びやすい形に情報を変換：絵1枚で要約、スライド作成、クイズで時間確認、動画・podキャスト（ソクラテスメソッド）、質問・応答。
-->
