<div class="page-title">UNIX / Linux</div>

# Linux (UNIX)を叩いてみるワーク<span style="font-size:32px;">(10分)</span>

<div class="subhead"><span style="color:var(--accent-dark)">Colabを<u>開く</u> → ドライブに複製</span></div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1.55;">

<div class="box-accent" style="font-size:21px; padding:10px 18px; margin:6px 0;">
<b>【現在地と一覧】 pwd</b>：今いる場所（ディレクトリ）を表示　<b>cd</b>：別のフォルダに移動　<b>ls</b>：フォルダの中身（ファイル一覧）を表示
</div>

<div class="box-accent" style="font-size:21px; padding:10px 18px; margin:6px 0;">
<b>【ファイル・フォルダの操作】 mkdir</b>：新しいフォルダを作成　<b>cp</b>：ファイルをコピー　<b>mv</b>：ファイルの移動・名前の変更　<b>rm</b>：ファイルやフォルダを削除（お片付け）
</div>

<div class="box-info" style="font-size:21px; padding:10px 18px; margin:6px 0;">
<b>【ファイルの中身を見る・探す】 echo</b>：文字を出力（ファイルへの書き込みにも使用）　<b>cat</b>：ファイルの中身をすべて表示　head：先頭数行　tail：末尾数行　<b>grep</b>：単語を含む行を検索　wc：行数・文字数をカウント
</div>

<div class="box-info" style="font-size:21px; padding:10px 18px; margin:6px 0;">
<b>【Webとの通信】</b> wget：Webからダウンロード　curl：URL指定で取得・通信　<b>【システム確認（おまけ）】</b> uname：OS情報　whoami：ユーザー名　date：日時を表示
</div>

</div>
<div style="flex:1; display:flex; flex-direction:column; gap:8px;">

<div class="box-warn" style="font-size:21px; padding:10px 18px;">
<b>横の人と話しながらしましょう</b> / 新規の記入は不要です / ポチポチでOK<br>PCがない人はある人の近くに大移動し、<b>複数人で一緒に</b>進めましょう
</div>

<div class="box-info" style="font-size:20px; padding:8px 16px;">
ヒント<b>：左パネルでフォルダは見れる</b><br>少し遅れて反応する
</div>

<div class="box-accent" style="font-size:20px; padding:8px 16px;">
<b>情報リテラシの後の学び方</b><br>sudoやchmod、vim、キー操作は重要<br>シェルスクリプトも身につけましょう
</div>

</div>
</div>

<div style="position:absolute; bottom:14px; left:30px; font-size:20px; color:#666;">※ <b style="color:var(--accent)">太字の箇所</b>が重要</div>

<!--
- Colabを開いてドライブに複製したら、横の人と話しながら基本コマンドを叩いてみるワーク。新規記入は不要、ポチポチでOK。PCがない人は近くに移動して複数人で。
-->

---

<div class="page-title">UNIX / Linux</div>

# CLIは、生成AIで叩ける<span style="font-size:30px;">（相性が良い：デモ）</span>

<div style="display:flex; gap:20px; align-items:stretch; margin-top:10px;">
<img src="./src/fig27-img.png" alt="Gemini CLI デモ" style="width:48%; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.18);">
<img src="./src/fig26-img.png" alt="ターミナルでのAI操作デモ" style="width:48%; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.18);">
</div>

<div class="box-accent" style="margin-top:16px; margin-right:calc(var(--pip-w) + 56px); text-align:center;">
<b>わからなくても、AIがコマンドを叩いてくれる</b><br>
<b>PCの全ての操作がAIに自然言語で頼めば出来る状態に</b><br>
<span style="font-size:21px;">（例：古いファイルをまとめて／サーバーにコピーして／このpdfをまとめてtextにして）</span>
</div>

<!--
- CLIは生成AIと相性が良い。わからなくてもAIがコマンドを叩いてくれるので、PCの全操作を自然言語で頼める状態になる。デモを見せる。
-->

---

<div class="page-title">プログラミング</div>

# プログラミング言語の進化と言語処理系

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1.5;">

<div class="subhead"><span style="color:var(--accent-dark)">プログラミング言語の誕生とその変遷</span></div>

<div class="bgroup">
<div class="bg-label">変遷</div>
<div class="bg-items">
<div><b>機械語</b>　二進数の命令　人間にとって理解しづらい</div>
<div><b>アセンブリ言語</b>　CPUのアーキテクチャに依存する</div>
<div><b>高級言語</b>　<b>手続き型言語:</b> Fortran, C++, Rust等　<b>関数型言語:</b> Lisp　論理型言語　DB言語：SQL　静的型付け言語：Typescript等</div>
</div>
</div>

<div class="box-info" style="margin-top:10px; font-size:22px;">
最近では<b>Python（インタプリタ）</b>の普及率が上がっている（フロント・サーバー・データ解析など多岐）
</div>

</div>
<div style="flex:1;">

<div class="subhead" style="font-size:24px;"><span style="color:var(--accent-dark)">言語処理系</span></div>

<div class="stepbox" style="font-size:22px;">
<div class="st" style="font-size:22px;"><b>コンパイラ：</b>事前にすべてのプログラムを機械語に変換する（コンパイル）</div>
</div>

<div class="stepbox" style="font-size:22px;">
<div class="st" style="font-size:22px;"><b>インタプリタ：</b>高級言語の命令を一語一語機械語の命令に変換しながら実行する</div>
</div>

<img src="./src/fig28-img.png" alt="アセンブリ言語の例" style="width:100%; border-radius:8px; margin-top:8px; box-shadow:0 2px 8px rgba(0,0,0,.18);">

</div>
</div>

<!--
- プログラミング言語は機械語→アセンブリ→高級言語と進化。最近はPython（インタプリタ）が普及。言語処理系にはコンパイラとインタプリタがある。
-->

---

<div class="page-title">プログラミング</div>

# ワーク③： ハノイの塔を自動で動かすアプリをAIで作る<span style="font-size:30px;">(8分)</span>

<div class="lead-note">①Geminiを立ち上げる　②Canvasをオン、Proモード　③貼り付けて実行</div>

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1.7;">

<div class="box-info" style="font-size:19px; padding:10px 18px;">
GeminiのCanvas機能を使用して、以下の要件を満たす「ハノイの塔 自動シミュレーター」のWebアプリを作成してください。コードはHTML, CSS, JavaScriptを統合した1つのファイル（hanoi.html）として出力し、Canvas上で直接プレビューおよび動作できるようにしてください。
</div>

<div class="box-accent" style="font-size:19px; padding:10px 18px; margin-top:8px;">
<b>【要件定義】</b><br>
<b>1. アプリケーションの目的</b>　ユーザー（主に学生）が「再帰アルゴリズム」の動作を視覚的に観察し、直感的に理解できる教育用のシミュレーター。<br>
<b>2. 機能要件</b>　<b>輪っかの枚数変更:</b> 1〜5枚を任意に入力（変更時は自動でリセット）。<b>操作コントロール:</b>「▶ 再生」「⏸ 一時停止」「🔄 リセット」。<b>再生スピードの調整:</b> スライダーで低速〜高速。<b>移動回数のカウント:</b>「移動回数: 現在 / 最短」をリアルタイム表示。<br>
<b>3. アニメーションと描画（最重要）</b>　<code>&lt;canvas&gt;</code> を使用。輪っかは<b>柱を越えるようにアーチ状の軌道を描いて滑らかにスライド移動</b>。輪っかのサイズに応じて色（HSL等）を変える。
</div>

</div>
<img src="./src/fig28-hanoi-crop.png" alt="ハノイの塔シミュレーター" style="flex:1; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.18);">
</div>

<!--
- ワーク③。Geminiを立ち上げ、CanvasをオンにしてProモードで、ハノイの塔の自動シミュレーターを作るプロンプトを貼り付けて実行。再帰アルゴリズムを視覚的に観察できる教育用アプリ。
-->

---

<div class="page-title">プログラミング</div>

# Pythonで書かせてみる

<div class="box-info" style="margin-top:8px;">
先ほどのアプリを、Google Colabでやってみたいので、出来る限りシンプルにPythonで出力して下さい。プレートが3枚の場合に、コマ送りで手順を見せる絵を出力する形式として下さい。
</div>

<div class="box-info" style="margin-top:8px;">
出力されたPythonのコードを理解したいので、変数、配列、制御構造（条件分岐・繰り返し）を解説して下さい。
</div>

<div class="stepbox" style="margin-top:10px;">
<div class="st"><b>プログラミングは、結局以下の3つである</b>（1入力・1出力→構造化定理）</div>
<div class="st" style="font-size:23px;"><span class="em">順次（Sequence）</span>： 処理を上から順番に実行する。</div>
<div class="st" style="font-size:23px;"><span class="em">選択（Selection / 分岐）</span>： 条件によって処理を分ける（if-else など）。</div>
<div class="st" style="font-size:23px;"><span class="em">反復（Iteration）</span>： 条件を満たす間、処理を繰り返す（while や for など）。</div>
</div>

<div class="box-accent" style="margin-top:8px; margin-right:calc(var(--pip-w) + 56px);">
<b>大体、教科書を見ると書かれているのはこういう感じ</b>　入出力、演算子、変数/データ型/コンテナ、関数、オブジェクト、モジュール、クラス
</div>

<div style="position:absolute; bottom:14px; left:30px; font-size:22px; font-weight:800; color:var(--accent-dark);">他の自然言語を学ぶよりは、簡単そうですね。</div>

<!--
- 先ほどのアプリをColab用にシンプルなPythonで出力させ、コードを解説させる。プログラミングは結局、順次・選択・反復の3つ（構造化定理）。
-->

---

<div class="page-title">プログラミングの学び方</div>

# <span style="color:var(--accent-dark)">私見</span>

<div class="stepbox" style="margin-top:10px;">
<div class="st">① 生成AIのプログラミング能力は、今後も向上するだろう。</div>
<div class="st">② その分、非ITエンジニアでも、コードに触れることが当たり前になるだろう。</div>
<div class="st">③ そのため、読める・日本語で何を創りたいか言える、までは必須だろう。<br><span style="margin-left:1.4em;">それを学ぶためには、ある程度書けないと、着想できないだろう。</span></div>
</div>

<div class="box-accent" style="margin-top:8px; margin-right:calc(var(--pip-w) + 56px);"><b>よって、プログラミングを学ぶことは今後もある程度、必要だろう。</b></div>

<div class="box-warn" style="margin-top:8px; font-size:21px; margin-right:calc(var(--pip-w) + 56px);">
現在、一部の人々は「AIが自動化してくれるから」という理由で、プログラミングを学ぶのをやめるよう周囲に勧めています。しかし、このアドバイスは、<b>これまでに与えられたキャリアアドバイスの中で最悪のものの一つ</b>として歴史に記憶されることになるでしょう。
<div style="font-size:18px; color:#666; margin-top:4px;">https://x.com/AndrewYNg/status/1900219116822102116</div>
</div>

<div style="position:absolute; bottom:14px; left:30px; font-size:21px;"><b>よい学び方</b>がある人は、クラスに共有してください。(slido)　/　<b>Pythonの基礎</b>は、例えば、<u>ここ</u>参照</div>

<!--
- 私見。生成AIのコーディング能力は向上し、非ITエンジニアもコードに触れるのが当たり前に。読める・日本語で何を創りたいか言えるまでは必須。だからプログラミングを学ぶことは今後も必要。Andrew Ng「学ぶのをやめろは最悪のキャリアアドバイスの一つ」。
-->

---

<div class="page-title">符号化の原理</div>

# 情報は、符号にする事ができる

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="font-size:22px;">
<b>符号表の例</b>　2ビット (bit, b) による表現
<table style="font-size:22px; margin-top:6px; border-collapse:collapse;">
<tr><td style="padding:1px 14px;">A： 00</td><td style="padding:1px 14px;">T： 01</td></tr>
<tr><td style="padding:1px 14px;">G： 10</td><td style="padding:1px 14px;">C： 11</td></tr>
</table>
</div>

<div class="box-accent" style="font-size:22px; margin-top:8px;">
<b>定義　ビット：</b>情報の量を表現する最小単位<br>
　情報は、ビットパターンで表現される<br>
　二進数の1桁のことで、binary digit由来<br>
<b>バイト：</b>8bitの塊 (2^8 = 256通り)
</div>

</div>
<div style="flex:1.25;">

<div class="box-warn" style="font-size:22px; color:#333; background:#FFF6E6; border-color:#F0A500;">
<b style="color:var(--accent-dark)">nビットのビット列は 2ⁿ 種類</b><br>
<span style="font-family:monospace; font-size:21px;">n &nbsp;: 1&nbsp; 2&nbsp; 3&nbsp; 4&nbsp;&nbsp; 5&nbsp;&nbsp; 6&nbsp; 7&nbsp;&nbsp; 8<br>2ⁿ : 2&nbsp; 4&nbsp; 8&nbsp; 16&nbsp; 32&nbsp; 64 128 256</span>
</div>

<div class="box-info" style="font-size:21px; margin-top:8px;">
・20個のアミノ酸を符号化するのに必要なビット数は？→ <b>5ビット (32パターンで良いが、4³→64)</b><br>
・26種類のアルファベットを符号化するのに必要なビット数は？ → <b>5ビット</b><br>
・大文字小文字合わせて52文字を符号化するのに必要なビット数は？ → <b>6ビット</b>
</div>

</div>
</div>

<div class="subhead" style="font-size:22px; margin-top:6px;"><span style="color:var(--accent-dark)">自然数の2進数による表現</span>
<span style="font-family:monospace; font-size:19px; color:#444;">1:1(0001) 2:10(0010) 3:11(0011) 4:100(0100) 5:101(0101) 6:110(0110) 7:111(0111) 8:1000(1000) 9:1001(1001)</span></div>

<!--
- 情報は符号にできる。2ビットでA/T/G/Cの4種を表現。nビットのビット列は2ⁿ種類。ビットは情報量の最小単位、8bitの塊がバイト。アミノ酸20個なら5ビット、アルファベット26種なら5ビット、大小52文字なら6ビット。
-->

---

<div class="page-title">二進数を理解する</div>

# 自然数の表現（2進数と10進数）

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="subhead" style="font-size:24px;"><span style="color:var(--accent-dark)">自然数の10進数による表現</span></div>

<div class="box-info" style="font-size:22px;">
10を基数とした表現：<br>
<b>123 = 1×10² + 2×10¹ + 3×10⁰</b><br>
例：<br>
<b>32₁₀ = 3×10¹ + 2×10⁰ = 100000₂</b><br>
<b>10₁₀ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 1010₂</b>
</div>

<div class="subhead" style="font-size:24px; margin-top:10px;"><span style="color:var(--accent-dark)">サイズの大きな情報量</span></div>

<div class="box-accent" style="font-size:22px;">
2進数1桁 = <b>1ビット</b> | 8ビット = <b>1バイト</b><br>
2¹⁰ = 1024 ≒ 1,000　→　2¹⁰ = 1 K（キロ）B<br>
2²⁰ = (2¹⁰)² ≒ 1 M（メガ）B<br>
2³⁰ = (2¹⁰)³ ≒ 1 G（ギガ）B<br>
2⁴⁰ = (2¹⁰)⁴ ≒ 1 T（テラ）B
</div>

</div>
<div style="flex:1;">

<div class="subhead" style="font-size:24px;"><span style="color:var(--accent-dark)">10進数から2進数への変換</span>　<span style="font-size:20px; color:#444;">（32₁₀ → 32を10進数で表した数）</span></div>

<div class="box-warn" style="font-size:21px; color:#333; background:#FFF6E6; border-color:#F0A500;">
a = aₙ×2ⁿ + … + a₂×2² + a₁×2¹ + a₀×2⁰<br>
a = 2 ×(aₙ×2ⁿ⁻¹ + … + a₁) + a₀<br>
<b>20₁₀ = 10100₂</b>
</div>

<div class="box-info" style="font-size:21px; margin-top:8px;">
出てきた余りを<b>下から上に向かって</b>（最後に出た余りから一番最初の余りへ）並べます。「<b>10100</b>」になります。<br>
「2で割った余りを求めれば、そのまま2進数の一番下の桁 a₀ になる」ということ。あとは繰り返す。
</div>

<div class="cite">檜垣先生スライドより</div>

</div>
</div>

<!--
- 10進数は10を基数とした表現。2進数への変換は、2で割った余りを下から上へ並べる。情報量の単位は1024≒1000でK/M/G/T。檜垣先生スライドより。
-->

---

<div class="page-title">二進数を理解する</div>

# 自然数と二進数の計算・変換

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="subhead" style="font-size:24px;"><span style="color:var(--accent-dark)">ビット列による表現の広がり</span></div>

<div class="box-info" style="font-size:23px;">
8ビット(1バイト)の表現範囲:<br>
<b>0 〜 255 (2⁸種類)</b><br>
16ビット(2バイト)の表現範囲:<br>
<b>0 〜 65,535 (2¹⁶種類)</b>
</div>

<div class="subhead" style="font-size:24px; margin-top:12px;"><span style="color:var(--accent-dark)">2進数の加算とオーバーフロー</span></div>

<div class="box-warn" style="font-size:21px;">
<b>あふれ (オーバーフロー)</b>: 計算結果が用意された桁数（この場合は8ビット）を超えてしまう現象。最上位桁からの繰り上がりが発生した際に起こる。<br>
100₁₀ + 200₁₀ の計算では、結果が300₁₀となり、8ビットの最大値255を超えるため正しく表現できない。
</div>

</div>
<div style="flex:1;">

<div class="subhead" style="font-size:24px;"><span style="color:var(--accent-dark)">10進数と2進数の対応（16進数）</span></div>

<img src="./src/fig33-img.png" alt="10進数・2進数・16進数の対応表" style="width:100%; border-radius:8px; box-shadow:0 2px 7px rgba(0,0,0,.12);">

<div class="box-accent" style="font-size:22px; margin-top:10px;">
<b>2進数の省略記法</b><br>
<b>10進数:</b> 57130<br>
<b>2進数:</b> 1101111100101010<br>
<b>16進数:</b> DF2A
</div>

</div>
</div>

<!--
- 8ビットは0〜255、16ビットは0〜65535。加算でオーバーフロー（あふれ）が起こる：100+200=300は8ビットの255を超え表現できない。長い2進数は16進数で省略記法。
-->

---

<div class="page-title">符号付整数表現</div>

# 符号付整数表現

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">

<div class="subhead" style="font-size:25px;"><span style="color:var(--accent-dark)">絶対値表現</span></div>

<div class="box-info" style="font-size:22px;">
<b>00010100 → +20</b><br>
<b>10010100 → -20</b><br>
<b>最上位ビットが符号（0:+, 1:-）を表す</b><br><br>
符号ビット（MSB）を反転させることで負数を表現する方式です。直感的ですが、0の表現が2つ存在（+0と-0）する課題があります。
</div>

</div>
<div style="flex:1;">

<div class="subhead" style="font-size:25px;"><span style="color:var(--accent-dark)">2の補数表現</span></div>

<div class="box-accent" style="font-size:22px;">
<b>変換手順：</b>　ビットを反転させる　→　「1」を加算する<br>
<b>+20: 00010100</b><br>
<b>-20: 11101100</b><br>
<b>加算器で減算が可能になる（効率化）</b><br>
現在のコンピュータで最も一般的な表現です。あふれを無視することで、減算を加算として処理できる大きなメリットがあります。
</div>

</div>
</div>

<div class="box-warn" style="font-size:21px; color:#333; background:#FFF6E6; border-color:#F0A500; margin-top:8px; margin-right:calc(var(--pip-w) + 56px);">
a - b = a + (-b)　減算を加算器のみで実行可能<br>
<span style="font-family:monospace;">　00011110 (30)　＋ 11101100 (-20)　= 100001010</span>　あふれを無視 → 00001010₂ = 10₁₀
</div>

<div style="position:absolute; bottom:14px; left:30px; font-size:21px;">※1の補数表現なども別にあります。　<b style="color:var(--accent-dark)">現在のコンピューターでは、2の補数が使われています</b></div>

<!--
- 符号付整数表現には絶対値表現（MSBが符号、0が±2つで非効率）と2の補数表現がある。2の補数はビット反転＋1で、減算を加算器のみで実行でき効率的。現在最も一般的。
-->

---

<div class="page-title">Google NotebookLM</div>

# <span style="color:var(--accent-dark)">学びやすい形に情報を変換</span>

<div style="display:flex; gap:16px; align-items:stretch;">

<div class="pcard">
<div class="pc-h">絵1枚で要約</div>
<img src="./src/fig35a-crop.png" alt="日本史早わかり年表" style="width:100%; border-radius:6px;">
</div>

<div class="pcard">
<div class="pc-h">スライド作成</div>
<img src="./src/fig35b-crop.png" alt="浮世絵スライド" style="width:100%; border-radius:6px;">
</div>

<div class="pcard">
<div class="pc-h">クイズで時間確認</div>
<img src="./src/fig35c-crop.png" alt="クイズ画面" style="width:100%; border-radius:6px;">
</div>

<div class="pcard">
<div class="pc-h">動画・podキャスト</div>
<div style="font-size:20px; text-align:center; margin-top:6px;">(ソクラテスメソッド)<br><b>質問・応答</b></div>
<img src="./src/fig35d-crop.png" alt="五重塔" style="width:60%; display:block; margin:8px auto 0; border-radius:6px;">
</div>

</div>

<div class="box-accent" style="text-align:center; margin-top:14px; margin-right:calc(var(--pip-w) + 56px); font-size:26px;"><b>学びやすい形に情報を変換</b></div>

<!--
- Google NotebookLMは、情報を学びやすい形に変換する道具。絵1枚で要約、スライド作成、クイズで時間確認、動画・podキャスト（ソクラテスメソッドの質問・応答）など。
-->

---

<div class="page-title">学び方</div>

# 学び方

<div class="box-info" style="margin-top:4px; font-size:22px;">
<b>学習方略</b> - Dunlosky et al. (2013) <i>PSPI</i>　教育心理学による、「生徒がどう勉強すべきか」のレビュー論文
</div>

<table style="width:100%; font-size:18px; border-collapse:collapse; margin-top:8px;">
<thead>
<tr style="background:var(--accent); color:#fff;">
<th style="padding:4px 8px; text-align:left;">テクニック</th>
<th style="padding:4px 8px; text-align:left;">内容・方法</th>
<th style="padding:4px 8px;">効果</th>
<th style="padding:4px 8px; text-align:left;">主な理由</th>
</tr>
</thead>
<tbody>
<tr style="background:#FBE4EA;"><td style="padding:3px 8px;"><b>実力テスト</b></td><td style="padding:3px 8px;">フラッシュカードや練習問題などを使い、自分の記憶から情報を引き出すテストを行う。</td><td style="padding:3px 8px; text-align:center; color:var(--accent); font-weight:800;">高</td><td style="padding:3px 8px;">学習効果が高く、幅広い教材・年齢層に有効。フィードバックがあると効果的。</td></tr>
<tr style="background:#FBE4EA;"><td style="padding:3px 8px;"><b>分散学習</b></td><td style="padding:3px 8px;">一気に学習せず、学習スケジュールを分散させる。</td><td style="padding:3px 8px; text-align:center; color:var(--accent); font-weight:800;">高</td><td style="padding:3px 8px;">長期的な記憶保持に有効。一夜漬けよりも遥かに効率が良い。</td></tr>
<tr><td style="padding:3px 8px;">精緻化的質問</td><td style="padding:3px 8px;">「なぜその事実が成り立つのか？」という質問を自分に投げかけ、説明を考える。</td><td style="padding:3px 8px; text-align:center;">中</td><td style="padding:3px 8px;">事実の学習に有効だが、ある程度の予備知識が必要。</td></tr>
<tr><td style="padding:3px 8px;">自己説明</td><td style="padding:3px 8px;">学習のプロセスや、新しい情報が既知の情報とどう関連するかを自分自身に説明する。</td><td style="padding:3px 8px; text-align:center;">中</td><td style="padding:3px 8px;">数学や論理的思考を要する問題解決に有効だが、時間がかかる。</td></tr>
<tr><td style="padding:3px 8px;">交互練習</td><td style="padding:3px 8px;">1つの種類の問題をまとめて解くのではなく、異なる種類の問題を混ぜて練習する。</td><td style="padding:3px 8px; text-align:center;">中</td><td style="padding:3px 8px;">数学などで劇的な効果がある（区別がつかなくなるのを防ぐ）。※全教科での効果は未検証。</td></tr>
<tr style="color:#777;"><td style="padding:3px 8px;">要約</td><td style="padding:3px 8px;">学習したテキストの要点をまとめ短い文章にする。</td><td style="padding:3px 8px; text-align:center;">低</td><td style="padding:3px 8px;">時間がかかるわりに、要約スキルの形成を除き効果が薄い。</td></tr>
<tr style="color:#777;"><td style="padding:3px 8px;">ハイライト</td><td style="padding:3px 8px;">重要な部分に線を引いたり、色を塗ったりする。</td><td style="padding:3px 8px; text-align:center;">低</td><td style="padding:3px 8px;">読むだけより効果が薄くなりがちで、推論能力を阻害しうる。</td></tr>
<tr style="color:#777;"><td style="padding:3px 8px;">キーワード法</td><td style="padding:3px 8px;">発音が似たキーワードにイメージを結びつける。</td><td style="padding:3px 8px; text-align:center;">低</td><td style="padding:3px 8px;">適用できる教材が限られ（語呂合わせなど）、長期記憶しにくい。</td></tr>
<tr style="color:#777;"><td style="padding:3px 8px;">テキストのイメージ化</td><td style="padding:3px 8px;">読んでいる内容を頭の中で映像化する。</td><td style="padding:3px 8px; text-align:center;">低</td><td style="padding:3px 8px;">視覚化しやすい教材に限られ、効果が一貫しない。</td></tr>
<tr style="color:#777;"><td style="padding:3px 8px;">再読</td><td style="padding:3px 8px;">テキストやノートを繰り返し読む。</td><td style="padding:3px 8px; text-align:center;">低</td><td style="padding:3px 8px;">最も一般的だが、時間対効果が低く、深い理解につながらない。</td></tr>
</tbody>
</table>

<div style="display:flex; gap:14px; align-items:center; margin-top:6px;">
<div style="font-size:18px; color:#666; white-space:nowrap;">※個人差はあります。</div>
<div class="box-warn pip-safe" style="font-size:18px; padding:6px 16px; margin:0;">
再読やハイライト、写し直すなど、準備コストの低いが効果も低い、方略を選びがち　<b>一方で、学習効果の高い方法は、準備コストが高い一方、一人では難しい</b>
</div>
</div>

<!--
- 学習方略のレビュー論文 Dunlosky et al. (2013) PSPI。実力テスト・分散学習は効果「高」。要約・ハイライト・再読は効果「低」。人は準備コストが低く効果も低い方略を選びがち。効果の高い方法は準備コストが高く一人では難しい。
-->
