<div class="page-title">標本化</div>

# <span style="color:var(--accent-dark)">標本化</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="box-info" style="margin-top:4px;">アナログ信号（音声や画像など）は連続的に変化する値<br>デジタル化の第一段階として、一定の時間間隔（サンプリング周期）で信号の値を切り出す作業を「標本化」という</div>

<div style="margin-top:16px; font-size:25px;"><b style="color:var(--accent-dark)">サンプリング周期：</b>　データを取得する時間間隔。</div>

<div style="margin-top:10px; font-size:25px;"><b style="color:var(--accent-dark)">サンプリング周波数(Hz)：</b><br>　1秒間に何回サンプリングするか。</div>

</div>
<div style="width:46%;">
<img src="../src/fig25-adc.png" alt="A/D変換 サンプラー" style="width:100%;">
<div style="font-size:18px; color:#888; margin-top:4px;">出典：https://media.monolithicpower.com/wysiwyg/Educational/ADC_Chapter_1_Fig4-_960_x_622.png</div>
</div>
</div>

<div class="flowrow" style="margin-top:14px;">
<div class="fbox gray" style="font-size:26px; padding:6px 22px;">A/D変換</div>
<div style="font-size:23px; color:#555;">アナログ・デジタル変換</div>
</div>

<div class="box-accent pip-safe" style="margin-top:8px; font-weight:800;">挙手： CDは圧縮されていると思う人？</div>

<!--
- デジタル化の第一段階が「標本化（サンプリング）」。連続的なアナログ信号を、一定の時間間隔で値を切り出す。
- その間隔がサンプリング周期、1秒間の回数がサンプリング周波数(Hz)。図のサンプラーがその作業をしている。
- ここで挙手してもらう：「CDは圧縮されていると思う人？」——あとで答えを確認します。
-->

---

<div class="page-title">標本化定理</div>

# 標本化定理　<span style="font-size:40px; font-weight:800;">F<sub>s</sub> &gt; 2・f</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="width:24%;">
<img src="../src/fig26-shannon.png" alt="Claude Shannon" style="width:100%;">
<div style="font-size:18px; color:#888; margin-top:4px;">Shannon, Claude<br>Author: Jacobs, Konrad<br>Source: Konrad Jacobs, Erlangen<br>Copyright: MFO</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="margin-top:4px;">元の信号に含まれる最高の周波数の2倍以上の速さでサンプリングすれば、理論上元の波形を完全に復元できる</div>

<div style="margin-top:10px; font-size:23px;"><b>Fs:</b> サンプリング周波数 / <b>f:</b> 元の信号の最大周波数</div>

<div class="box-info" style="margin-top:12px;"><b>音楽CD (44.1kHz)：</b>人の可聴域（約20kHz）の2倍以上を確保。<br>高音域をCDは持っていません。<br>　※16bitに減っていて、量子化誤差はある。<br>　　但し、人間の耳にとって、非圧縮です。</div>

<div style="margin-top:12px; font-size:25px;"><b style="color:var(--accent-dark)">音声通信 (8kHz)：</b>会話に必要な4kHzまでを伝送。</div>

</div>
</div>

<!--
- 標本化定理（シャノン）：元信号の最高周波数の2倍以上でサンプリングすれば、理論上は元の波形を完全に復元できる。Fs > 2・f。
- 音楽CDは44.1kHz＝可聴域20kHzの2倍以上を確保。高音域は持たず、16bitで量子化誤差はあるが、人間の耳には非圧縮。
- 音声通信は8kHz＝会話に必要な4kHzまでを伝送している。
-->

---

<div class="page-title">音声のデジタルへの変換</div>

# <span style="color:var(--accent-dark)">CD</span> <span style="font-size:28px;">(コンパクトディスク) 1枚</span>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div class="stepbox" style="margin-top:4px;">
<div class="st" style="font-size:23px; line-height:1.6;">44.1kHz 16bit 2ch LPCM形式で、<b>79分58秒</b><br>
<b>(44100×16×2) [bps]</b> × (79×60 + 58) [秒] / 8 [バイトへ]<br>
= 846,367,200 (バイト)　※ 10^2の括りでないこと注意<br>
≒ 807MB (メガバイト)　※÷ 1024 ÷ 1024<br>
→音じゃなくて、データ書けばよいのでは？ → <b>CD-R</b><br>
→もっと細かくデータ書き込めばよいのでは？ → <b>ブルーレイ</b></div>
</div>

<div class="box-info" style="margin-top:14px;">ビットレートとは、<br><b>1秒間に処理または転送されるデータの量</b><br><b>CDの場合、1.41Mbps</b>　<b>※ bps（bits per second）</b></div>

</div>
<div style="width:30%; text-align:center; align-self:center;">
<div style="font-size:96px; font-weight:900; color:var(--accent); line-height:1;">1.41</div>
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-top:6px;">Mbps (CDビットレート)</div>
</div>
</div>

<!--
- CD1枚を計算してみる。44.1kHz・16bit・2ch・79分58秒で、約846,367,200バイト＝約807MB。
- 「音そのものではなくデータを書けばよいのでは」→CD-R、「もっと細かく書ければ」→ブルーレイ、と発想がつながる。
- ビットレート＝1秒間に処理・転送されるデータ量。CDは1.41Mbps（bits per second）。
-->

---

<div class="page-title">画像のデジタルへの変換</div>

# <span style="color:var(--accent-dark)">画像の符号化</span>

<div style="display:flex; gap:28px; align-items:center;">
<div style="width:160px;">
<img src="../src/fig28-apple.png" alt="格子をかけたりんご" style="width:160px; height:auto;">
</div>
<div style="flex:1; font-size:38px; font-weight:800;">切り分けて、色を当てる</div>
</div>

<div style="display:flex; gap:14px; margin-top:14px; text-align:center;">
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">単純2値</div>
<img src="../src/fig28-binary.png" alt="単純2値" style="width:180px; height:auto;">
</div>
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">8bitグレースケール</div>
<img src="../src/fig28-gray.png" alt="8bitグレースケール" style="width:180px; height:auto;">
</div>
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">4色</div>
<img src="../src/fig28-4color.png" alt="4色" style="width:180px; height:auto;">
</div>
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">RGB</div>
<img src="../src/fig28-rgb.png" alt="RGB" style="width:180px; height:auto;">
</div>
</div>

<!--
- 画像の符号化とは「切り分けて、色を当てる」こと。りんごに格子をかけ、各マスに色を割り当てるイメージ。
- 単純2値（白黒）、8bitグレースケール、4色、RGB——同じ十字でも、色の表現方法でデータ量が変わる。次のスライドで計算する。
-->

---

<div class="page-title">画像のデジタルへの変換</div>

# 画像のデジタルへの変換　<span class="tag tag-accent" style="font-size:22px;">重要</span>

<div style="display:flex; gap:10px; text-align:center; align-items:flex-start; margin-top:4px;">

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; margin-bottom:2px;">単純2値</div>
<img src="../src/fig28-binary.png" alt="単純2値" style="width:135px; height:auto;">
<div class="box-accent" style="margin-top:4px; font-size:19px; padding:5px 6px; min-height:80px;">(8・8)/8<br>= 8B</div>
</div>

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; margin-bottom:2px;">8bitグレースケール</div>
<img src="../src/fig28-gray.png" alt="8bitグレースケール" style="width:135px; height:auto;">
<div class="box-accent" style="margin-top:4px; font-size:18px; padding:5px 6px; min-height:80px;">(8・8)・8[bit]/8 = 64B<br>8bit：256階調<br>(2^8通りの色)</div>
</div>

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; margin-bottom:2px;">4色</div>
<img src="../src/fig28-4color.png" alt="4色" style="width:135px; height:auto;">
<div class="box-accent" style="margin-top:4px; font-size:19px; padding:5px 6px; min-height:80px;">(8・8)・2[bit]/8<br>= 16B</div>
</div>

<div style="flex:1;">
<div style="font-size:21px; font-weight:800; margin-bottom:2px;">RGB</div>
<img src="../src/fig28-rgb.png" alt="RGB" style="width:135px; height:auto;">
<div class="box-accent" style="margin-top:4px; font-size:19px; padding:5px 6px; min-height:80px;">(8・8)・3 = 192B<br>1箇所を256階調</div>
</div>

</div>

<div style="display:flex; gap:10px; text-align:center; margin-top:6px; font-weight:800; color:var(--accent-dark); font-size:24px;">
<div style="flex:1;">96kB</div>
<div style="flex:1;">768kB</div>
<div style="flex:1;">192kB</div>
<div style="flex:1;">2.25MB</div>
</div>
<div style="text-align:center; font-size:18px; color:#666; margin-top:2px;">1024✕768 のとき　／　Quark67(Modified color by Monami) - Image:Synthese+.svg, CC 表示-継承 3.0</div>

<!--
- 同じ8×8の十字を、色の表現方法ごとにデータ量で比較する。重要ポイント。
- 単純2値=8B、8bitグレースケール=64B（256階調=2^8）、4色=16B（2bit）、RGB=192B（各画素を256階調×3）。
- これを1024×768に拡大すると、96kB / 768kB / 192kB / 2.25MB と桁が変わる。色数とデータ量の関係を体感してほしい。
-->

---

<div class="page-title">映像のデジタルへの変換</div>

# <span style="color:var(--accent-dark)">映像</span>のデジタルへの変換

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="width:40%;">
<img src="../src/fig30-horse.png" alt="疾走する馬の連続写真" style="width:100%;">
<img src="../src/fig30-flipbook.png" alt="連続コマのパラパラ漫画" style="width:100%; margin-top:8px;">
</div>
<div style="flex:1;">

<div class="box-info" style="margin-top:4px;">デジタル映像とは、画像を繋いだ、<br><b>パラパラ漫画</b>である<br>(映写機もそう)</div>

<div class="box-accent" style="margin-top:12px;"><b>実際の映画も24fps(frames per second)</b>：何枚の静止画か？<br>スマホは、120fpsなど</div>

<div class="box-warn pip-safe" style="margin-top:12px;">アニメ「呪術◯戦」にて、禪院家が扱う術式「投射呪法」は、<b>1秒間を24分割する</b></div>

</div>
</div>

<!--
- デジタル映像の正体は「画像を繋いだパラパラ漫画」。映写機も原理は同じ。
- 実際の映画は24fps（1秒あたり24枚の静止画）。スマホは120fpsなど、もっと細かい。
- 余談：アニメ「呪術◯戦」の投射呪法も「1秒間を24分割する」設定——映画のフレームレートと同じ発想です。
-->

---

<div class="page-title">圧縮</div>

# <span style="color:var(--accent-dark)">情報の圧縮</span>

<div style="display:flex; gap:20px; align-items:flex-start;">
<div style="flex:1;">

<div class="stepbox" style="margin-top:4px;">
<div class="st" style="font-size:22px; line-height:1.55;"><b>モースル信号の例</b><br>出現頻度の高いアルファベットに短い符号</div>
</div>

<div class="box-info" style="margin-top:10px;"><b>可逆圧縮方式</b>　完全に元に戻せる圧縮<br>データ圧縮のLZH, ZIP, CAB</div>

<div class="box-warn" style="margin-top:10px;"><b>非可逆圧縮方式</b>　元に戻せない圧縮。目立たない箇所を削る<br>マルチメディアデータ（音声、画像等）<br>WMA, AAC, MP3, ATRAC</div>

<img src="../src/fig31-morse.png" alt="モールス符号表" style="width:88%; margin-top:8px;">
<div style="font-size:18px; color:#888;">総務省</div>

</div>
<div style="width:34%;">
<div style="font-size:20px; font-weight:800; color:var(--accent-dark); text-align:right; margin-bottom:4px;">檜垣先生スライドより</div>
<img src="../src/fig31-flower1.png" alt="圧縮率50の朝顔" style="width:100%;">
<div class="box-accent" style="font-size:19px; padding:7px 10px; margin:4px 0 10px;"><b>圧縮率50 (96kB)</b><br>1024 ✕ 768　※元々は2.2MB なので4.2%</div>
<img src="../src/fig31-flower2.png" alt="圧縮率98の朝顔" style="width:100%;">
<div class="box-accent" style="font-size:19px; padding:7px 10px; margin-top:4px;"><b>圧縮率98 (24kB)</b><br>1024 ✕ 768　1.0%</div>
</div>
</div>

<!--
- 情報の圧縮。モールス信号は出現頻度の高い文字に短い符号を当てる——これも一種の圧縮。
- 可逆圧縮（LZH, ZIP, CAB）は完全に元に戻せる。非可逆圧縮（WMA, AAC, MP3, ATRAC）は目立たない箇所を削るので元に戻せないが、マルチメディアでは十分。
- 右の朝顔：圧縮率50%で96kB（元2.2MBの4.2%）、圧縮率98%で24kB（1.0%）。下の画像ほどブロックノイズが見える。
-->

---

<div class="page-title">圧縮のファイル形式と仕組み</div>

# 圧縮のファイル形式と仕組み

<div style="display:flex; gap:14px;">
<div style="flex:1;">
<div class="box-accent" style="height:100%;"><b>音声の圧縮形式</b><br><b>wav：</b>非圧縮<br><b>mp3/aac：</b>不可逆圧縮<br><b>alac/flac：</b>可逆圧縮</div>
</div>
<div style="flex:1;">
<div class="box-info" style="height:100%;"><b>画像の圧縮形式</b><br><b>bmp：</b>非圧縮<br><b>jpg：</b>写真で一般的<br><b>gif：</b>256色以下/可逆可<br><b>png：</b>可逆可/透明可</div>
</div>
<div style="flex:1;">
<div class="box-warn" style="height:100%;"><b>動画の圧縮形式 全て不可逆</b><br><b>avi：</b>非圧縮 (コンテナ)<br><b>mpg2：</b>地デジ/DVD<br><b>mpg4：</b>現在の映像/Blu-ray<br>※H.265などweb配信</div>
</div>
</div>

<div style="font-size:25px; font-weight:800; color:var(--accent-dark); margin:14px 0 6px;">圧縮の仕組みの例</div>

<div style="display:flex; gap:14px;">
<div class="pcard"><div class="pc-h">音声</div><p style="margin:0; font-size:22px;">目立たない周波数を落とす or 量子化を変える</p></div>
<div class="pcard"><div class="pc-h">画像</div><p style="margin:0; font-size:22px;">周囲の画素でまとめる</p></div>
<div class="pcard"><div class="pc-h">動画</div><p style="margin:0; font-size:22px;">前後のフレームで動かない所を変えない</p></div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px; text-align:center; font-weight:800;">昨今のスマホで僕らがマルチメディアを扱えるのは、圧縮技術とその復元技術の賜物</div>

<!--
- 圧縮形式の整理。音声：wav非圧縮／mp3・aac不可逆／alac・flac可逆。画像：bmp非圧縮／jpg写真向き／gif256色以下／png可逆・透明可。動画：avi非圧縮、mpg2地デジ・DVD、mpg4現行・Blu-ray、H.265はweb配信——動画は全て不可逆。
- 仕組みの例：音声＝目立たない周波数を落とす／量子化を変える、画像＝周囲の画素でまとめる、動画＝前後フレームで動かない所を変えない。
- スマホでマルチメディアを自由に扱えるのは、圧縮技術と復元技術の賜物です。
-->

---

<div class="page-title">第5回について</div>

# <span style="color:var(--accent-dark)">第5回</span>について

<div class="box-info" style="margin-top:8px;">6/9 教室講義 (G3-12で対面実施)となります。<br>以下を持参してください。</div>

<div class="stepbox" style="margin-top:16px;">
<div class="st" style="font-weight:800;">① PCまたはタブレット、②スマホ、③メモを取るもの</div>
</div>

<div class="box-warn pip-safe" style="margin-top:18px;">
Moodleに今回分の問題もあるので、忘れずに！<br>
5/27 - 6/2の間に、第8回のオンデマンド授業が1日数動画ずつ、公開されます。<br>
そちらの視聴もお忘れなく。<br>
いま、授業はシラバスから1回分遅れて進行中です。<br>
<b>※ 第8回分の小テストは、第10回です。</b>
</div>

<!--
- 連絡事項。第5回は6/9に教室講義（G3-12で対面）。PCまたはタブレット、スマホ、メモを取るものを持参してください。
- Moodleに今回分の問題があるので忘れずに。5/27〜6/2に第8回のオンデマンド授業が1日数動画ずつ公開されるので、視聴もお忘れなく。
- 授業はシラバスから1回分遅れて進行中。第8回分の小テストは第10回なので注意してください。
-->
