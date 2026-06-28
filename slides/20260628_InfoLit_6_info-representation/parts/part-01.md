<div class="page-title">補足</div>

# <span style="color:var(--accent-dark)">スーパーコンピューターとは？</span>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:1;">

<div class="subhead"><span style="color:var(--accent-dark)">究極の並列処理システム</span></div>

<div class="box-accent">何万、何十万もの高性能なCPUやGPUを接続し、<b>一つの巨大なシステムとして結合</b>させた計算機。</div>

<div style="font-size:23px; margin:10px 0;">気象予測、新薬開発、宇宙シミュレーション、巨大なAIモデルの学習など、極めて複雑で膨大な計算に用いられる。</div>

</div>
<div style="flex:0 0 248px; text-align:center;">
<img src="./src/fig13-img.png" alt="富嶽" style="width:248px; border-radius:6px; box-shadow:0 2px 7px rgba(0,0,0,.15);">
<div style="font-size:19px; color:#666; margin-top:4px;">RIKEN/JST 富嶽の写真</div>
</div>
</div>

<div class="subhead" style="margin-top:6px;"><span style="color:var(--accent-dark)">スパコンにおける「帯域」の重要性</span></div>

<div class="box-info" style="margin-right:calc(var(--pip-w) + 8px);">帯域：通信回線で一度に送受信できるデータ容量のこと。<br>膨大な数のプロセッサが協力して計算を行うため、計算途中のデータをプロセッサ間で頻繁にやり取りする必要がある。</div>

<div style="font-size:22px; margin:8px 0; margin-right:calc(var(--pip-w) + 8px);">そのため、個々の計算力以上に、<b style="color:var(--accent-dark)">計算機間を繋ぐ通信帯域幅の太さと通信の遅延の少なさ</b>が重要<br><span class="ind" style="display:inline-block; margin-left:1.4em;">cf. MPI (Message Passing Interface) ：連携させ高速な計算を行うための通信規格</span></div>

<div class="box-warn pip-safe" style="margin-top:6px;">2000年頃のスパコンと同じ性能(数十億円)に匹敵する性能が、手元のmac (&lt;20万円)で出る (4.1 TFLOPS )</div>

<!--
- スパコンは何万ものCPU/GPUを一つの巨大システムに結合した計算機。気象・新薬・宇宙・AI学習などに使う。
- 個々の計算力以上に、計算機間を繋ぐ通信帯域と遅延の少なさが重要。cf. MPI。
- やがて、量子コンピューターも含む形になるか？ 2000年頃のスパコン級が今や手元のmacで出る。
-->

---

<div class="page-title">今日の目標</div>

# 今日の目標

<div class="goal-box" style="margin-top:10px;">
<div style="margin:4px 0;"><b>1. Linuxを触って、ファイルを移動したり編集したりすることが出来る</b></div>
<div style="font-size:23px; margin-left:1.4em;">ファイルを開いたり、確認することが出来るようになります</div>
<div style="font-size:23px; margin-left:1.4em;">Linuxやコマンドラインインターフェイスをつかう利点が分かります</div>
<div style="margin:10px 0 4px;"><b>2. AIとプログラムを試作することが出来る</b></div>
<div style="font-size:23px; margin-left:1.4em;">プログラミングの「超」初歩を理解します</div>
<div style="font-size:23px; margin-left:1.4em;">AI駆動型開発を理解できます</div>
<div style="margin:10px 0 4px;"><b>3. 情報の表現について理解できる</b></div>
<div style="font-size:23px; margin-left:1.4em;">DNAからPCの中身に至るまで、情報量を理解する</div>
</div>

<div style="font-size:23px; margin-top:14px;">※ 第4回分テストは真ん中で行います</div>

<div class="box-warn pip-safe" style="margin-top:10px;"><span style="color:var(--accent-dark)">私語は禁止ですが、笑う・発言の自由です</span>。楽しくいきましょう。</div>

<!--
- 今日の目標は3つ：①Linuxを触ってファイル操作・CLIの利点、②AIとプログラム試作・AI駆動開発、③情報の表現（DNAからPCまで）。
- 第4回分テストは真ん中で実施。私語は禁止だが、笑う・発言は自由。楽しくいきましょう。
-->

---

<div class="page-title">小テストの実施</div>

# <span style="color:var(--accent-dark)">ワーク①：</span> 周囲と<span style="color:var(--accent-dark)">Safe Exam Browser</span>の起動を確認する (5分)

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 430px;">
<img src="./src/fig14-img.png" alt="Safe Exam Browser ダウンロード画面" style="width:430px; border:1px solid #ddd; border-radius:6px;">
</div>
<div style="flex:1;">

<div class="box-info"><b>Moodleのログイン必要</b><br>アルファベット4文字・数字4文字</div>

<div class="box-warn" style="margin-top:14px;"><b>5分でインストール・ログインして下さい</b><br><b>困ったら横に聞く</b></div>

</div>
</div>

<div class="box-accent pip-safe" style="margin-top:14px;"><b>横の人と起動テストを完了する</b>／無理な場合は<b>教室右(<span style="color:#2E9E5B;">緑</span>)へ移動</b></div>

<!--
- ワーク①：周囲とSafe Exam Browserの起動を5分で確認する。Moodleのログインが必要（アルファベット4文字・数字4文字）。
- 5分でインストール・ログイン。困ったら横に聞く。横の人と起動テストを完了。無理なら教室右（緑）へ移動。
-->

---

<div class="page-title">小テストの実施</div>

# 小テストの実施

<div class="box-info" style="margin-top:16px; font-size:25px;">時間は<b>10分で10問 (+2分 予備)</b><br><b>12分たったら、受験が完了します。</b><br>まず、PCの人に自分が問題を解放します。<br>次に、紙受験の人に配ります<br><b>(なので、少しだけ、紙受験の方が短くなります。)</b><br>※回収は、配り始めた側から行います。</div>

<div class="box-warn" style="margin-top:16px; margin-right:calc(var(--pip-w) + 8px);">注意： カンニング・持ち込み・横を覗く・スマホを見る行為などの禁止<br>不正行為を認定の場合は、それなりの対応がなされます…。</div>

<div style="font-size:24px; font-weight:700; margin-top:16px; margin-right:calc(var(--pip-w) + 8px);">それでは、開始 (xx:xxまで) / 完了後：回収されてない人の確認</div>

<!--
- 10分で10問（+2分予備）、12分で受験完了。まずPCの人に問題を解放、次に紙受験の人に配る（紙の方が少し短い）。回収は配り始めた側から。
- 注意：カンニング・持ち込み・横を覗く・スマホ閲覧などは禁止。不正行為を認定した場合はそれなりの対応。
-->

---

<div class="page-title">コンピューターの動作原理</div>

# コンピュータの起動の仕組み

<div style="display:flex; gap:30px; align-items:flex-start;">
<div style="flex:1;">

<div class="stepbox" style="margin-top:6px;">
<div class="st" style="font-size:24px;"><b>• ブートストラップの手順</b></div>
<div style="font-size:23px; margin:2px 0;">- BIOS (Basic Input Output System) 起動</div>
<div style="font-size:21px; color:#666; margin-left:1.2em;">※ 周辺機器の検索</div>
<div style="font-size:23px; margin:2px 0;">- ブートローダ起動</div>
<div style="font-size:21px; color:#666; margin-left:1.2em;">※ 起動OSの選択</div>
<div style="font-size:23px; margin:2px 0;">- オペレーティングシステムの起動</div>
<div style="font-size:21px; color:#666; margin-left:1.2em;">※ 周辺機器のデバイスドライバの確認</div>
</div>

</div>
<div style="flex:1;">

<div class="subhead"><span style="color:var(--accent-dark)">プログラムの起動</span></div>

<div class="stepbox" style="margin-top:6px;">
<div class="st" style="font-size:24px;"><b>• コマンドインタプリタによる起動</b></div>
<div style="font-size:23px; margin:2px 0;">- シェル(shell)、コマンドプロンプト</div>
<div style="font-size:24px; font-weight:800; color:var(--tag-blue); margin:4px 0 8px 1em;">CLI (Command Line Interface)</div>
<div class="st" style="font-size:24px;"><b>• マウスで起動</b></div>
<div style="font-size:23px; margin:2px 0;">- プログラムのアイコンをクリック</div>
<div style="font-size:23px; margin:2px 0;">- プログラムに関連付けられたファイルのアイコンをクリック</div>
<div style="font-size:23px; margin:2px 0;">- 右クリック</div>
<div style="font-size:24px; font-weight:800; color:var(--tag-blue); margin:4px 0 0 1em;">GUI (Graphical User Interface)</div>
</div>

</div>
</div>

<!--
- 起動の仕組み：ブートストラップの手順（BIOS起動→周辺機器検索、ブートローダ起動→起動OS選択、OS起動→デバイスドライバ確認）。
- プログラムの起動は2通り。コマンドインタプリタ（シェル/コマンドプロンプト）＝CLI、マウス（アイコンクリック・右クリック）＝GUI。
-->

---

<div class="page-title">OS/アプリケーション</div>

# <span style="color:var(--accent-dark)">ワーク②：</span> 推しOSを語ろう

<div class="goal-box" style="margin-top:16px; margin-right:calc(var(--pip-w) + 8px);">
<div style="margin:6px 0;">① 自分の使っている<b>OSの便利な点を横の人</b>と話す (2分)</div>
<div style="font-size:24px; margin-left:1.4em; margin-bottom:12px;">　→特に、なんでそれを選んだのかに言及</div>
<div style="margin:6px 0;">② 手元に箇条書きでメモる (1分)</div>
<div style="margin:6px 0;">③ slidoでWindows/Mac/その他で共有する (各30s)</div>
</div>

<!--
- ワーク②：推しOSを語ろう。①自分の使っているOSの便利な点を横の人と話す（2分、なぜ選んだかに言及）、②手元に箇条書きでメモる（1分）、③slidoでWindows/Mac/その他で共有（各30秒）。
-->

---

<div class="page-title">OS/アプリケーション</div>

# <span style="color:var(--accent-dark)">主要なOS</span>

<div style="display:flex; gap:20px; align-items:stretch;">
<div class="pcard" style="flex:1;">
<div class="pc-h">Microsoft Windows</div>
<ul>
<li>PCのOSのデファクトスタンダード</li>
<li>圧倒的なシェアを持つ</li>
<li>ハードウェアは各メーカが製造する</li>
<li>クライアント用(Windows 10, 11)のほかに、サーバ用やモバイル用も展開</li>
</ul>
<div style="font-size:21px; font-weight:800; color:var(--accent-dark); margin:8px 0 0 .6em;">Windows 10は2025年10月 サポート終了<br>現在、Windows 11</div>
</div>
<div class="pcard" style="flex:1;">
<div class="pc-h">macOS</div>
<ul>
<li>Apple社が開発・販売するMacintoshコンピュータ用のOS</li>
<li>UNIXに関連した技術をベースにしている</li>
<li>旧来のMac OSに比べて安定している</li>
<li>直感的に操作できるGUIには定評がある</li>
</ul>
</div>
</div>

<div class="box-info" style="margin-top:12px; margin-right:calc(var(--pip-w) + 8px); font-size:22px;">自分は両方使っているが、どっちもどっちである／クラウド技術の進展もあり、「片方しかできない」は減少<br>但し、AIの推論は、<b>macOSの方が、コスト的に有利</b>　<b>学習でnvidia GPU使うなら、Linux or windows</b>　<span style="color:#666;">cf. LLM/音声認識をローカルで動かす</span></div>

<div class="cite pip-safe" style="margin-top:6px;">cf. iOSやアンドロイドOSもOSですね。端末数としてはそっちの方が多い。なお、GIGAスクールのOSは、Chrome OSが多いらしい。</div>

<!--
- 主要なOS。Microsoft Windows＝PCのデファクトスタンダード、圧倒的シェア、各メーカが製造、Win10は2025年10月サポート終了で現在Win11。
- macOS＝Apple製、UNIX系技術ベース、安定、GUIに定評。両方使ってどっちもどっち。AI推論はmacOSが有利、学習でnvidia GPU使うならLinux/Windows。
- iOS/AndroidもOS。GIGAスクールはChrome OSが多い。
-->

---

<div class="page-title">OS/アプリケーション</div>

# <span style="color:var(--accent-dark)">OSは「舞台」であり、 アプリは「役者」である。</span>

<div style="text-align:center; font-size:24px; color:#666; margin:6px 0 18px;">OSという共通の土台があってこそ、アプリは個別の目的を果たせる</div>

<div style="display:flex; align-items:baseline; gap:14px; margin-top:8px;">
<span class="tag tag-soft" style="font-size:20px;">重要</span>
<div>
<div style="font-size:30px; font-weight:800;">OS(Operating System)</div>
<div style="font-size:23px; margin-left:1em;">　コンピューターを動作させるための基本のソフトウェア群</div>
<div style="font-size:22px; color:#555; margin-left:1em;">　　※アプリ (Application)は、OS上で動く、「応用ソフトウェア」のこと</div>
</div>
</div>

<div style="margin-top:16px; margin-left:64px;">
<div style="font-size:30px; font-weight:800;">カーネル</div>
<div style="font-size:23px; margin-left:1em;">　CPUやメモリの管理(、ファイルシステム)といった中核を担うソフトウェア</div>
</div>

<!--
- OSは「舞台」、アプリは「役者」。OSという共通の土台があってこそアプリは個別の目的を果たせる。
- OS(Operating System)＝コンピューターを動作させる基本のソフトウェア群。アプリはOS上で動く応用ソフトウェア。
- カーネル＝CPUやメモリの管理（ファイルシステム）といった中核を担うソフトウェア。
-->

---

<div class="page-title">OS/アプリケーション</div>

# OSとアプリケーション

<div style="display:flex; flex-direction:column; align-items:center; gap:4px; margin:6px 0 14px;">
<div style="display:flex; gap:14px;">
<div style="background:#eee; border:1.5px solid #bbb; border-radius:6px; padding:6px 36px; font-size:24px;">アプリケーション</div>
<div style="background:#eee; border:1.5px solid #bbb; border-radius:6px; padding:6px 36px; font-size:24px;">アプリ</div>
</div>
<div style="background:var(--accent-soft); border:1.5px solid var(--accent); border-radius:6px; padding:6px 0; width:420px; text-align:center; font-size:26px;">OS</div>
<div style="background:#eee; border:1.5px solid #bbb; border-radius:6px; padding:6px 0; width:520px; text-align:center; font-size:24px;">ハード</div>
</div>

<div style="text-align:right; font-size:24px; margin:0 60px 8px 0;">さらなる学習のために： 仮想化やDocker</div>

<table style="width:100%; border-collapse:collapse; font-size:22px;">
<tr style="background:var(--section-bg);">
<th style="text-align:left; padding:8px 14px; border:1px solid #e0e0e0;">比較項目</th>
<th style="text-align:left; padding:8px 14px; border:1px solid #e0e0e0;">OS (オペレーティングシステム)</th>
<th style="text-align:left; padding:8px 14px; border:1px solid #e0e0e0;">アプリケーション (応用ソフト)</th>
</tr>
<tr>
<td style="padding:8px 14px; border:1px solid #e0e0e0; font-weight:700;">主な役割</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">資源（ハード・ソフト）の管理・制御</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">特定のユーザー目的の遂行</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:8px 14px; border:1px solid #e0e0e0; font-weight:700;">立場</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">「土台」「舞台」</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">「道具」「役者」</td>
</tr>
<tr>
<td style="padding:8px 14px; border:1px solid #e0e0e0; font-weight:700;">具体例</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">Windows, Android, macOS, Linux</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">Chrome, Word, LINE, Instagram</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:8px 14px; border:1px solid #e0e0e0; font-weight:700;">動作条件</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">単体で基本動作が可能</td>
<td style="padding:8px 14px; border:1px solid #e0e0e0;">OSがないと動作できない</td>
</tr>
</table>

<!--
- ハード→OS→アプリケーションの層構造。さらなる学習のために：仮想化やDocker。
- OSとアプリの比較表：主な役割（資源管理 vs ユーザー目的）、立場（土台・舞台 vs 道具・役者）、具体例、動作条件（単体動作可 vs OSがないと動かない）。
-->

---

<div class="page-title">OSが行っていること</div>

# OSが行っていること

<div style="font-size:24px; margin:4px 0;">①プログラムの管理や通信 (複数のプログラムが同時に動作する)</div>
<div style="font-size:24px; margin:4px 0;">②ハードウェアの抽象化 (周辺機器が同じ手順で操作できる)</div>
<div style="font-size:24px; margin:4px 0 12px;">③UI/メモリ管理</div>

<div class="cardrow" style="margin-right:calc(var(--pip-w) + 8px);">
<div class="pcard">
<div class="pc-h">メモリの保護</div>
<p style="font-size:21px; margin:0;">各アプリにメモリ領域を割り当てます。他アプリの領域への侵入を防ぎ、システムの安定性を保ちます。</p>
</div>
<div class="pcard">
<div class="pc-h">共通UIの提供</div>
<p style="font-size:21px; margin:0;">ウィンドウ、メニュー、ボタンなどの操作感を統一。どのアプリでも迷わず操作できる環境を作ります。</p>
</div>
<div class="pcard">
<div class="pc-h">ファイル管理</div>
<p style="font-size:21px; margin:0;">データの保存場所やアクセス権限を管理。情報の安全性と整理を自動的に行います。</p>
</div>
</div>

<!--
- OSが行っていること：①プログラムの管理や通信（複数プログラムが同時動作）、②ハードウェアの抽象化（周辺機器を同じ手順で操作）、③UI/メモリ管理。
- メモリの保護（領域割り当て・侵入防止）、共通UIの提供（操作感の統一）、ファイル管理（保存場所・アクセス権限）。
-->

---

<div class="page-title">UNIX / Linux</div>

# <span style="color:var(--accent-dark)">UNIX系</span> <span style="font-size:26px;">(unixライクなものも含む)</span>

<div style="display:flex; gap:20px; align-items:stretch;">
<div class="pcard" style="flex:1;">
<div class="pc-h">UNIXの開発と歴史</div>
<ul>
<li><b>1969年</b>、AT&amp;Tのベル研究所にて開発開始</li>
<li>プログラミング言語Cとの関連が深い</li>
<li>派生する系列がある</li>
<li>カリフォルニア大学バークレー校をオリジナルとするBSD系 (macの源流)</li>
<li>UNIX System V等の伝統的なUNIX</li>
</ul>
</div>
<div class="pcard" style="flex:1;">
<div class="pc-h">Linux と UNIXライク OS</div>
<ul style="font-size:21px;">
<li>Linux (Ubuntu等) はUNIXライクなOSの一つ</li>
<li>1991年、学生だったライナス・トパーズがカーネルを開発</li>
<li>フリーでオープンソースなソフトウェア</li>
<li>Linuxカーネルと複数のディストリビューション</li>
<li>サーバーでNo.1 / あらゆる用途に利用されている<br><span style="color:#666;">サーバ、メインフレーム、スーパーコンピュータ／組み込みシステム／スマートフォン、デスクトップ・パソコン</span></li>
</ul>
</div>
</div>

<div class="box-info" style="margin-top:12px; margin-right:calc(var(--pip-w) + 8px);">Windowsでは、WSLで<b>ubuntu</b>が動く (教育用端末は両方動く)　macはもともと<b>UNIX</b>である</div>

<div style="font-size:24px; font-weight:700; margin-top:8px;" class="pip-safe">多くのひとが、<b style="color:var(--accent-dark)">CLI</b>でUNIXかLinuxを叩くことになるはず</div>

<!--
- UNIX系。1969年AT&Tベル研究所で開発開始、C言語と関連が深い、派生系列あり（BSD系＝macの源流、System V）。
- Linux（Ubuntu等）はUNIXライクOSの一つ。1991年ライナス・トパーズがカーネル開発、フリー/オープンソース、サーバーでNo.1。
- WindowsはWSLでubuntuが動く、macはもともとUNIX。多くの人がCLIでUNIX/Linuxを叩くことになるはず。
-->

---

<div class="page-title">UNIX / Linux</div>

# <span style="color:var(--accent-dark)">CLIってなんや？</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">
<div class="subhead"><span style="color:var(--tag-blue)">GUI ： Graphical user interface</span></div>
<div style="font-size:23px; margin:2px 0 10px;"><b>マウスを用いて、UIを叩く</b><br>何をしているか、簡単に分かる</div>
<img src="./src/fig24-img.png" alt="GUI（Finderの画面）" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>
<div style="flex:1;">
<div class="subhead"><span style="color:var(--accent-dark)">CLI： Command line interface</span></div>
<div style="font-size:23px; margin:2px 0 10px;">いわゆる黒い画面をキーボードで叩く<br>比較的簡単だが、初心者には大変</div>
<img src="./src/fig25-img.png" alt="CLI（ターミナルの画面）" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px;">わかりにくい？→いいえ、<b>生成AIや自動化に向いている</b></div>

<!--
- CLIってなんや？ GUI＝Graphical user interface、マウスでUIを叩く、何をしているか簡単に分かる（Finderの画面）。
- CLI＝Command line interface、いわゆる黒い画面をキーボードで叩く、比較的簡単だが初心者には大変（ターミナルの画面）。
- わかりにくい？→いいえ、生成AIや自動化に向いている。
-->
