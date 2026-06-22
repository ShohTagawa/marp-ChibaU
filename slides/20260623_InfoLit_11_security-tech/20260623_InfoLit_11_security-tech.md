---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">情報リテラシ第11回</div><img class="hdr-logo" src="../assets/logo-info-literacy.png">'
footer: ''
style: |
  :root {
    --hdr-left-w: 23%;
    --pt-width:   50%;
    --hdr-gap:   -4px;
    --pt-left: calc(var(--hdr-left-w) - var(--hdr-slant, 22px) + var(--hdr-gap));
  }
  section .page-title { left: var(--pt-left); width: var(--pt-width); }
  section > header .hdr-logo { height: 48px; margin-right: 12px; }
  section::after { left: 23px; right: auto; }
  section svg { max-width: 100%; height: auto; }
  .important { display:inline-block; background:#FBE0E0; color:#B11C1C; font-weight:700; font-size:19px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.14em; vertical-align:middle; border:1px solid #f0c4c4; }
  .cbox { border-radius:10px; overflow:hidden; background:#F6F7F9; margin:8px 0; border:1px solid #e7e7ea; }
  .cbox > .h { color:#3a3a3a; font-weight:700; padding:5px 16px; font-size:19px; background:#f1ecee; border-left:4px solid #b9b9b9; }
  .cbox > .b { padding:8px 16px 9px; font-size:18px; }
  .cbox.blue > .h { border-left-color:#3E78B2; } .cbox.green > .h { border-left-color:#3C8A57; } .cbox.orange > .h { border-left-color:#D98A2B; } .cbox.gray > .h { border-left-color:#6B6F76; } .cbox.red > .h { border-left-color:var(--accent); }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:2px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:21px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:24px; margin-top:8px; }
  .ask { background:#FAF3F4; border:1px solid #e6d2d6; border-radius:10px; padding:8px 16px 8px 50px; margin:8px 0; font-weight:700; font-size:19px; position:relative; }
  .ask::before { content:"？"; position:absolute; left:12px; top:50%; transform:translateY(-50%); width:26px; height:26px; line-height:26px; text-align:center; border-radius:50%; background:var(--accent); color:#fff; font-size:17px; }
  .ask.hand::before { content:"\270B"; background:#D98A2B; }
  .hl-pink { background:#FAE1E2; padding:0 4px; border-radius:3px; } .hl-yellow { background:#FBEFC8; padding:0 4px; border-radius:3px; } .hl-green { background:#DDEBC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:14px; color:#999; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .dtbl { border-collapse:collapse; font-size:18px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #c8c8c8; padding:4px 12px; text-align:center; }
  .dtbl th { background:var(--accent-soft); }
  .dtbl td.l { text-align:left; }
  svg .card { filter: drop-shadow(0 2px 3px rgba(0,0,0,.12)); }
  .src { font-size:13px; color:#9a9a9a; } .src a { color:#9a9a9a; }
  /* 学生からの質問ボックス */
  .qbox { background:#FFF8E8; border:2px solid #E0A93B; border-radius:10px; padding:8px 16px 8px 54px; margin:8px 0; position:relative; font-size:19px; }
  .qbox::before { content:"\2753"; position:absolute; left:14px; top:9px; font-size:22px; }
  .qbox .qh { font-weight:700; color:#a9781a; font-size:15px; letter-spacing:.04em; display:block; margin-bottom:2px; }
  /* まとめ(wrap)は1枚。やや詰める（最小18px厳守） */
  section.wrap ul { font-size:19px; }
  section.wrap ul li { margin:5px 0; line-height:1.4; padding-left:28px; }
  /* 表紙レイアウト（cover-hero） */
  section.cover-hero { padding-top: calc(var(--header-h) + 60px); --hdr-left-w: 23%; }
  section.cover-hero > header::after { left: 0; right: 0; }
  section.cover-hero .title-hero { text-align: center; margin-bottom: 60px; }
  section.cover-hero .title-small { font-size: 40px; font-weight: 700; line-height: 1.3; margin-bottom: 8px; }
  section.cover-hero .title-big { font-size: 72px; font-weight: 800; line-height: 1.2; letter-spacing: 0.02em; }
  section.cover-hero .title-foot { display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: center; padding: 0 60px; }
  section.cover-hero .title-photo { width: 240px; height: 240px; border-radius: 50%; overflow: hidden; background: #ffffff; border: 3px solid #D9EAD3; display: flex; align-items: center; justify-content: center; color: #777; font-size: 16px; }
  section.cover-hero .title-photo img { width: 84%; height: 84%; object-fit: contain; }
  section.cover-hero .title-meta { font-size: 26px; line-height: 1.7; text-align: center; }
  section.cover-hero .title-event { color: #e65100; font-weight: 700; margin-bottom: 16px; }
  section.cover-hero .title-affil { margin-top: 8px; }
---


<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">情報リテラシ 第11回 ／ オンデマンド（メディア授業）</div>
<div class="title-big">情報技術と<br>情報セキュリティ</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/logo-info-literacy-icon.svg" alt="情報リテラシー">
</div>
<div class="title-meta">
<div class="title-event">23 & 24クラス<br>（医工学 ／ 都市環境システム ／ 応用化学）</div>
<div class="title-affil">担当：千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

<!-- 第11回はMoodleオンデマンド。情報倫理とセキュリティ(2)＝「情報技術・認証・情報セキュリティと対策」。全8動画＋まとめ。前半=取りこぼし(文字コード)とセキュリティ深掘り、動画7=学生質問に回答、動画8=今後とプログラミングの学び方。 -->

---

<div class="page-title">この回の進め方</div>

## 第11回はオンデマンド授業 ─ 視聴期限と課題を最初に確認

<div class="grid2">
<div>

<div class="callout-blue">📺 受講のしかた</div>

- 全体を **動画8本＋まとめ** に分けて配信
- 各動画にこのスライド資料（PDF）が対応
- 途中で止めて巻き戻してOK。<span class="hl">slido なし</span>
- 質問は Moodle の質問フォーラムへ

<div class="callout-green" style="margin-top:14px">🗂 3つの山だけ覚える</div>

- ① 文字を0と1で表す（**文字コード**）
- ② 情報セキュリティ追加分<br>（脅威・脆弱性・実務・**認証**・大学の備え）
- ③ **学生の質問**に答える ＋ これからの**学び方**

</div>
<div>

<div class="callout-orange">🗓 期限（Moodle で要確認）</div>

<div style="text-align:center">
<table class="dtbl" style="display:inline-table; margin:6px 0">
<tr><th>項目</th><th>期限</th></tr>
<tr><td class="l">動画の<strong>視聴</strong></td><td><span class="hl-dark mono">7/14（火）</span></td></tr>
<tr><td class="l"><strong>課題</strong>の提出</td><td><span class="hl-dark mono">7/7（火）</span></td></tr>
<tr><td class="l">リフレクション</td><td><span class="hl-dark mono">7/7（火）</span></td></tr>
<tr><td class="l">提出先</td><td class="mono">すべて Moodle</td></tr>
</table>
</div>

<div class="ask">後半に<strong>「学生の質問に答える」動画</strong>を1本。学外アクセス・バックアップ・文献探し・執筆・ツールまで。<br>最後は<strong>今後の展開とプログラミングの学び方</strong>も。</div>

</div>
</div>

<div class="band" style="margin-top:14px">⚠️ <span class="hl">過去回のオンデマンド動画</span>で<strong>まだ見ていないもの</strong>があれば、<span class="hl">7/14（火）より、採点を確定</span>します。残っている人は<strong>それまでに必ず視聴</strong>してください。</div>

<!-- ※期限は仮置き(6/30火)。Moodleの実設定に合わせて差し替える。冒頭で必ず「期限・提出先・質問フォーラム」を確認させる。未視聴の過去回オンデマンドは7/14採点確定→必ず視聴を促す。 -->

---

<!-- _class: fig -->

<div class="page-title">この回の地図</div>

## 「文字の表し方」から「これからの学び方」まで

<div class="fig-area" style="margin-top:-6px">
<svg viewBox="0 0 960 270" width="100%" style="max-height:340px">
  <defs><marker id="ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#A6192E"/></marker><marker id="arO" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#D98A2B"/></marker><marker id="arG" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
  <g font-size="16" text-anchor="middle">
    <rect class="card" x="20" y="44" width="150" height="70" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="95" y="72" font-weight="800" font-size="17">① 文字コード</text>
    <text x="95" y="96" fill="#555" font-size="14">動画1</text>
    <text x="184" y="84" fill="#A6192E" font-size="26" font-weight="800">→</text>
    <rect class="card" x="200" y="44" width="250" height="70" rx="10" fill="#fdecec" stroke="#A6192E" stroke-width="2"/>
    <text x="325" y="72" font-weight="800" font-size="17">② 情報セキュリティ</text>
    <text x="325" y="96" fill="#555" font-size="13">守る・脅威・実務・認証・大学（動画2-6）</text>
    <text x="466" y="84" fill="#A6192E" font-size="26" font-weight="800">→</text>
    <rect class="card" x="484" y="44" width="205" height="70" rx="10" fill="#fffaf0" stroke="#D98A2B" stroke-width="2"/>
    <text x="586" y="72" font-weight="800" font-size="17">③ 質問に答える</text>
    <text x="586" y="96" fill="#555" font-size="14">文献・データ・執筆（動画7）</text>
    <text x="702" y="84" fill="#A6192E" font-size="26" font-weight="800">→</text>
    <rect class="card" x="714" y="44" width="226" height="70" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/>
    <text x="827" y="72" font-weight="800" font-size="17">④ これからと学び方</text>
    <text x="827" y="96" fill="#555" font-size="14">今後・プログラミング（動画8）</text>
  </g>
  <g text-anchor="middle">
    <rect class="card" x="200" y="160" width="250" height="96" rx="10" fill="#fff7f8" stroke="#cbb" stroke-width="1.5"/>
    <text x="325" y="188" font-weight="700" fill="#7d1322" font-size="15">② ＝ シラバスの</text>
    <text x="325" y="212" font-weight="700" fill="#7d1322" font-size="15">「情報セキュリティと対策」</text>
    <text x="325" y="238" fill="#555" font-size="13">第10回(対面)で扱った基礎の深掘り</text>
    <rect class="card" x="484" y="160" width="456" height="96" rx="10" fill="#fffaf0" stroke="#e0c08a" stroke-width="1.5"/>
    <text x="712" y="200" font-weight="700" fill="#a9781a" font-size="16">③④ ＝ 皆さんの質問に答え、次の一歩へ送り出す枠</text>
    <text x="712" y="228" fill="#555" font-size="15">学んだことを、研究と将来の学びに繋ぐ</text>
  </g>
  <path d="M325,116 L325,158" stroke="#A6192E" stroke-width="2" fill="none" marker-end="url(#ar)"/>
  <path d="M586,116 L586,158" stroke="#D98A2B" stroke-width="2" fill="none" marker-end="url(#arO)"/>
  <path d="M827,116 L827,158" stroke="#3C8A57" stroke-width="2" fill="none" marker-end="url(#arG)"/>
</svg>
</div>

<div class="takeaway">ゴール ── これからの学び方を学ぶこと</div>

<!-- 全8動画の地図。①は第6回「情報の表現」の取りこぼし回収、②はセキュリティ深掘り(動画2-6)、③は学生質問への回答(動画7)、④は今後と学び方(動画8)。各動画冒頭でいまどこかを示す。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 1 ／ CHAPTER 1</div>

# 文字を0と1で表す

## 文字コード ── 「文字化け」の正体を知る

<!-- 第6回「数値と文字のビット表現」で時間が足りず触れきれなかった文字コードを回収する。第8回の符号化(音・画像のA/D変換)とは別物であることを最初に区別する。1とそれ以外(セキュリティ)は性質が違うので独立した山として置く。 -->

---

<!-- _class: split -->

<div class="page-title">つかみ</div>

## なぜ「文字化け」は起きるのか

<div class="split-body">
<div class="left">

<div class="cbox gray"><div class="h">こんな経験は？</div><div class="b" style="font-family:monospace; font-size:22px; line-height:1.7; color:#7d1322;">
譁�蟄怜喧縺�<br>�シ滂シ�win-mac<br>��繧ｳ繝ｼ繝�
</div></div>

<div class="ask">読めるはずの日本語が、記号の羅列に。<br><strong>これは「壊れた」のではない</strong>。</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">コンピュータは文字を知らない</div><div class="b">

- 機械が扱えるのは <span class="hl">0と1（数値）</span>だけ
- だから文字も「**番号**」に対応づける
- その「文字 ↔ 番号」の対応表が <span class="red">文字コード</span>

</div></div>

<div class="band" style="font-size:19px">化けるのは、<span class="hl">書いた時と読む時で「使った対応表」が食い違う</span>から。</div>

</div>
</div>

<div class="takeaway">文字化け＝文字コードの不一致。まず「文字＝番号の約束」を押さえる。</div>

<!-- つかみ。文字化けは破損ではなく「対応表の取り違え」。次スライドでASCIIから具体化。化け例は雰囲気を出すためのダミー文字列。 -->

---

<!-- _class: split -->

<div class="page-title">ビットから文字へ</div>

## まず英数字 ── ASCII という最初の約束

<div class="split-body">
<div class="left">

<table class="dtbl" style="width:100%; font-size:19px">
<tr><th>文字</th><th>番号(10進)</th><th>2進(7ビット)</th></tr>
<tr><td class="mono">A</td><td>65</td><td class="mono">1000001</td></tr>
<tr><td class="mono">B</td><td>66</td><td class="mono">1000010</td></tr>
<tr><td class="mono">a</td><td>97</td><td class="mono">1100001</td></tr>
<tr><td class="mono">0</td><td>48</td><td class="mono">0110000</td></tr>
</table>

<div class="caption">表1. ASCII の対応（抜粋）</div>

</div>
<div class="right">

<div class="cbox green"><div class="h">ASCII（アスキー）</div><div class="b">

- <span class="hl">7ビット＝128通り</span>で英数字・記号を表す
- 1文字＝ほぼ1バイト。世界共通の土台
- 「HELLO」も、裏では番号の列になっている

</div></div>

<div class="cbox orange"><div class="h">第8回の「符号化」とは別物</div><div class="b">
あれは<strong>音・画像</strong>を標本化→量子化して数値にする話。<br>こちらは<strong>文字 ↔ 番号</strong>の対応表。混同しない。
</div></div>

</div>
</div>

<div class="takeaway">文字は「番号」。英数字はASCIIで128通り＝1バイトに収まる。</div>

<!-- 第8回(音・画像のA/D=符号化)と本回(文字コード)の違いを明示するのが狙い。学生は「符号化」という語を両方で聞くので必ず切り分ける。 -->

---

<!-- _class: split -->

<div class="page-title">日本語の苦難</div>

## 漢字は数千字 ── 規格が乱立した

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">1バイトでは足りない</div><div class="b">

- ひらがな・カタカナ・漢字で<span class="hl">数千〜数万字</span>
- 128通り（1バイト）には到底入らない
- → <span class="red">2バイト</span>で1文字を表すように

</div></div>

<div class="cbox red"><div class="h">複数の規格が並び立った</div><div class="b">

- <span class="hl">Shift_JIS</span>（Windows系で普及）
- <span class="hl">EUC-JP</span>（UNIX系）
- <span class="hl">ISO-2022-JP</span>（メールで使用）

</div></div>

</div>
<div class="right">

<div class="cbox gray"><div class="h">これが文字化けの主因</div><div class="b">
同じバイト列でも、<strong>どの規格で読むか</strong>で別の文字に化ける。<br><br>
例：あるバイト列を<br>　Shift_JISで読む → 「<span class="mono">縺</span>…」<br>　UTF-8で読む → 「あ」
</div></div>

<div class="band" style="font-size:19px">Windows と Mac、メールと Web で<span class="hl">既定の規格が違った</span>ことが、化けの温床だった。</div>

</div>
</div>

<div class="takeaway">日本語は2バイト＋規格乱立。「どの表で読むか」がずれると化ける。</div>

<!-- 規格乱立＝歴史的経緯。細部の規格名は暗記不要、「複数あって食い違うと化ける」が要点。次でUnicode/UTF-8による統一へ。 -->

---

<!-- _class: split -->

<div class="page-title">世界を1つの表に</div>

## Unicode と UTF-8 ── いまの標準

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">Unicode（ユニコード）</div><div class="b">

- 世界中の文字に<span class="hl">1つずつ番号</span>を割り当てる
- 日本語も中国語も絵文字も同じ表に
- 「規格の乱立」を根本から解消

</div></div>

<div class="cbox blue"><div class="h">UTF-8 ＝ その符号化方式</div><div class="b">

- Unicodeの番号を<span class="hl">可変長バイト</span>で表す
- 英数字は1バイト（ASCII互換）、日本語は3バイト
- <span class="red">Web・プログラムの事実上の標準</span>

</div></div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">第9回の伏線、回収</div><div class="b">
HTMLを「<span class="mono">文字コードUTF-8</span>で保存」と言ったのは<strong>このため</strong>。<br>
ページ先頭の<br><span class="mono">&lt;meta charset="UTF-8"&gt;</span><br>は「この表で読んでね」という宣言。
</div></div>

<div class="band" style="font-size:19px">迷ったら <span class="hl">UTF-8 に統一</span>。これが今のいちばん安全な既定。</div>

</div>
</div>

<div class="takeaway">Unicodeで世界を1表に、UTF-8で符号化。標準はUTF-8。</div>

<!-- 第9回「UTF-8で保存」「<meta charset>」の意味を回収。要点は「UTF-8に統一すれば化けにくい」。 -->

---

<!-- _class: split -->

<div class="page-title">直し方・予防</div>

## 化けたら直せる ── 慌てない

<div class="split-body">
<div class="left">

<div class="cbox red"><div class="h">原因（再確認）</div><div class="b">
書いた時の表 ≠ 読む時の表。<br>データそのものは<span class="hl">壊れていない</span>ことが多い。
</div></div>

<div class="cbox blue"><div class="h">直す</div><div class="b">

- ブラウザ／エディタで<span class="hl">エンコーディングを指定し直す</span>
- 「Shift_JISで開く」「UTF-8で開く」を切り替える
- CSVがExcelで化ける → UTF-8(BOM付き)で保存し直す

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">予防（いちばん大事）</div><div class="b">

- 保存は<span class="red">UTF-8で統一</span>する
- ファイル名・フォルダ名も<span class="hl">半角英数</span>が安全
- 他人とやり取りする時は文字コードを合わせる

</div></div>

<div class="ask">研究でデータを共有する時、文字化けは<strong>「再現できない」事故</strong>の一因。<br>最初からUTF-8で揃えておく。</div>

</div>
</div>

<div class="takeaway">直す＝正しい表で開き直す。予防＝最初からUTF-8で統一。</div>

<!-- 実務直結。CSVのExcel化けは研究でよく遭遇。動画1のまとめとして「UTF-8統一」を再強調。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 2 ／ CHAPTER 2</div>

# 何を、どんな状態で守るのか

## 情報資産・リスク・インシデント

<!-- 第10回でCIAは扱ったが、情報資産/リスク/インシデントの用語トリオは未。ここを短く補い、以降の「脅威の地図」の土台にする。ここから動画6までが「情報セキュリティ」の山。 -->

---

<!-- _class: fig -->

<div class="page-title">守る対象と言葉</div>

## まず3つの言葉 ── 資産・リスク・インシデント

<div class="fig-area" style="min-height:0">

<div class="grid3" style="width:96%">
<div class="cbox blue"><div class="h">① 情報資産</div><div class="b">守るべきもの。<br><span class="hl">個人情報・研究データ</span>・システム・ノウハウ。<br><span class="attr">＝あなたの卒論データも資産</span></div></div>
<div class="cbox orange"><div class="h">② リスク</div><div class="b">資産が<span class="hl">損なわれる可能性</span>。<br>外的要因（攻撃）と<br>内的要因（紛失・ミス）がある。</div></div>
<div class="cbox red"><div class="h">③ インシデント</div><div class="b"><span class="hl">実際に損なわれた状態</span>。<br>漏えい・改ざん・<br>システム停止など。</div></div>
</div>

</div>

<div class="band">リスクを下げ、インシデントが起きても<span class="hl">被害を最小化</span>する ── これが「対策」。</div>

<div class="takeaway">資産を見極め、リスクを下げ、インシデントに備える。これが全体像。</div>

<!-- 用語トリオ。卒論データを「情報資産」と自分ごと化させると以降が効く。出典:IPA情報セキュリティ読本。 -->

---

<!-- _class: fig -->

<div class="page-title">守るべき性質</div>

## 「守る」＝7つの性質を保つこと（第10回の復習＋接続）

<div class="fig-area">

<table class="dtbl" style="width:92%; font-size:19px; line-height:1.35">
<tr><th style="width:22%">性質</th><th>意味</th></tr>
<tr><td class="l"><span class="red">機密性</span></td><td class="l">許可された人だけがアクセスできる</td></tr>
<tr><td class="l"><span class="red">完全性</span></td><td class="l">破壊・改ざんされていない</td></tr>
<tr><td class="l"><span class="red">可用性</span></td><td class="l">使いたいときに使える</td></tr>
<tr><td class="l"><span class="hl">真正性</span></td><td class="l">本物だと確認できる ＝ <strong>動画5「認証」で深掘り</strong></td></tr>
<tr><td class="l">責任追跡性 / 信頼性 / 否認防止</td><td class="l">追跡できる・期待どおり動く・後から否認させない</td></tr>
</table>

</div>

<div class="band" style="font-size:20px"><span class="red">機密性・完全性・可用性</span>＝3要素（CIA）。今日の後半は<span class="hl">真正性＝認証</span>を最新形まで。</div>

<div class="takeaway">CIAが核。真正性（本人確認）は動画5へ伏線。</div>

<!-- 第10回 表7の軽い復習。1枚に圧縮。真正性→動画5(パスキー)へ橋渡し。深く語らず通過。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 3 ／ CHAPTER 3</div>

# 攻撃を「地図」で捉える

## 不正アクセス・マルウェア・脆弱性・内部漏えい

<!-- 第10回でマルウェアの種類・CIAは扱った。本動画は「攻撃の類型整理」「踏み台＝加害者」「感染プロセス」「脆弱性の分類」「内部漏えい6割」という未カバーの骨格を入れる。 -->

---

<!-- _class: fig -->

<div class="page-title">攻撃の類型</div>

## 不正アクセスは6つに整理できる

<div class="fig-area" style="min-height:0">

<table class="dtbl" style="width:94%; font-size:19px; line-height:1.4">
<tr><th style="width:22%">不正行為</th><th>内容</th></tr>
<tr><td class="l"><span class="red">盗聴</span></td><td class="l">通信・保存データを不正に読む（パスワード・メール）</td></tr>
<tr><td class="l"><span class="red">改ざん</span></td><td class="l">データを書き換える（Webページ・設定）</td></tr>
<tr><td class="l"><span class="red">なりすまし</span></td><td class="l">他人のIDを装って侵入・買い物</td></tr>
<tr><td class="l"><span class="red">破壊</span></td><td class="l">データ・プログラムの削除、初期化</td></tr>
<tr><td class="l"><span class="red">不正使用</span></td><td class="l">コンピュータを勝手に遠隔操作</td></tr>
<tr><td class="l"><span class="hl">踏み台</span></td><td class="l">他人のPCを<strong>攻撃の中継地点</strong>にする ← 次で詳説</td></tr>
</table>

</div>

<div class="takeaway">攻撃は6類型で地図化できる。要注意は「踏み台」── 自分が巻き込まれる側。</div>

<!-- 出典:IPA読本。6類型を一覧で。最後の「踏み台」を次スライドの主題に繋ぐ。 -->

---

<!-- _class: split -->

<div class="page-title">踏み台</div>

## 「自分は狙われない」は通用しない ── 踏み台

<div class="split-body">
<div class="left">

<svg viewBox="0 0 420 230" width="100%" style="max-height:230px">
  <defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#A6192E"/></marker></defs>
  <g font-size="14" text-anchor="middle">
    <rect class="card" x="14" y="92" width="92" height="46" rx="8" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/>
    <text x="60" y="112" font-weight="700" fill="#7d1322">攻撃者</text>
    <rect class="card" x="160" y="40" width="100" height="46" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="1.8"/>
    <text x="210" y="60" font-weight="700">あなたのPC</text><text x="210" y="78" font-size="12" fill="#555">乗っ取り済み</text>
    <rect class="card" x="160" y="144" width="100" height="46" rx="8" fill="#fff" stroke="#3E78B2" stroke-width="1.8"/>
    <text x="210" y="164" font-weight="700">IoT機器</text><text x="210" y="182" font-size="12" fill="#555">カメラ・ルータ</text>
    <rect class="card" x="312" y="92" width="94" height="46" rx="8" fill="#fdf3e8" stroke="#D98A2B" stroke-width="2"/>
    <text x="359" y="112" font-weight="700" fill="#a9781a">標的サーバ</text>
    <path d="M106,108 L158,80" stroke="#A6192E" stroke-width="1.8" marker-end="url(#ar2)"/>
    <path d="M106,122 L158,162" stroke="#A6192E" stroke-width="1.8" marker-end="url(#ar2)"/>
    <path d="M260,66 L320,100" stroke="#D98A2B" stroke-width="1.8" marker-end="url(#ar2)"/>
    <path d="M260,164 L320,128" stroke="#D98A2B" stroke-width="1.8" marker-end="url(#ar2)"/>
    <text x="210" y="118" font-size="12" fill="#888">あなたは無自覚</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">乗っ取られた機器が「加害者」に</div><div class="b">

- 感染したPC・IoT機器が攻撃の<span class="hl">中継地点</span>に
- 知らぬ間に <span class="red">DDoS攻撃やスパム送信に加担</span>
- ある日「あなたのIPから攻撃が」と通知が届く

</div></div>

<div class="band" style="font-size:19px">守るのは自分のためだけでない。<span class="hl">他人を攻撃しないため</span>でもある。だから更新・対策。</div>

</div>
</div>

<div class="takeaway">踏み台＝被害者がそのまま加害者に。対策（更新・ウイルス対策）は社会的責任。</div>

<!-- 「自分は無関係」の油断を崩す最重要スライド。IoT(ルータ・防犯カメラ)が踏み台にされDDoSに使われる実例(Mirai等)を口頭で。 -->

---

<!-- _class: fig -->

<div class="page-title">感染のしくみ</div>

## マルウェアはどう感染するか ── 1枚で追う

<div class="fig-area" style="margin-top:-4px">
<svg viewBox="0 0 940 220" width="100%" style="max-height:250px">
  <defs><marker id="ar3" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#A6192E"/></marker></defs>
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="20" y="80" width="150" height="60" rx="9" fill="#eef4fa" stroke="#3E78B2" stroke-width="1.8"/>
    <text x="95" y="104" font-weight="700">① 入口</text><text x="95" y="126" font-size="13" fill="#555">添付メール／偽サイト／USB</text>
    <text x="182" y="114" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <rect class="card" x="200" y="80" width="160" height="60" rx="9" fill="#fff" stroke="#6B6F76" stroke-width="1.8"/>
    <text x="280" y="104" font-weight="700">② 脆弱性を突く</text><text x="280" y="126" font-size="13" fill="#555">古いOS・ソフトの穴</text>
    <text x="372" y="114" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <rect class="card" x="390" y="80" width="160" height="60" rx="9" fill="#fff" stroke="#6B6F76" stroke-width="1.8"/>
    <text x="470" y="104" font-weight="700">③ ダウンローダ</text><text x="470" y="126" font-size="13" fill="#555">本体を呼び込む小型部品</text>
    <text x="562" y="114" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <rect class="card" x="580" y="80" width="160" height="60" rx="9" fill="#fdecec" stroke="#A6192E" stroke-width="2"/>
    <text x="660" y="104" font-weight="700" fill="#7d1322">④ 本体を感染</text><text x="660" y="126" font-size="13" fill="#555">情報窃取・暗号化</text>
    <text x="752" y="114" fill="#A6192E" font-size="22" font-weight="800">→</text>
    <rect class="card" x="770" y="80" width="150" height="60" rx="9" fill="#F8E5EA" stroke="#A6192E" stroke-width="2"/>
    <text x="845" y="104" font-weight="700" fill="#7d1322">⑤ 拡散・加担</text><text x="845" y="126" font-size="13" fill="#555">次の標的へ／踏み台</text>
  </g>
</svg>
</div>

<div class="band" style="font-size:20px">止めどころは <span class="red">②脆弱性</span>。穴さえ塞いでおけば、入口を踏んでも本体まで届きにくい。</div>

<div class="takeaway">感染は段階的。要は「脆弱性を塞ぐ」＝更新が最強の予防。</div>

<!-- IPA読本のシーケンシャル感染図を5段階に整理。①種類(第10回既習)ではなく「過程」を見せるのが目的。次スライドで脆弱性そのものを定義。 -->

---

<!-- _class: split -->

<div class="page-title">脆弱性とは</div>

## 穴は2種類 ── システム的 と 人為的

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">脆弱性（ぜいじゃくせい）</div><div class="b">
ソフトやシステムの<span class="hl">セキュリティ上の欠陥</span>。<br>「セキュリティホール」とも呼ぶ。<br>攻撃の入口になる。
</div></div>

<div class="cbox gray"><div class="h">① システム的な脆弱性</div><div class="b">

- OS・ソフトのバグ、設計の穴
- <span class="red">対策＝パッチ／更新</span>で塞ぐ
- Windows Update、アプリの自動更新

</div></div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">② 人為的な脆弱性</div><div class="b">

- 設定ミス（公開範囲・初期PW）
- 気のゆるみ（添付を開く・PW使い回し）
- <span class="red">対策＝ルールと習慣</span>で塞ぐ

</div></div>

<div class="ask">技術の穴は<strong>パッチ</strong>で、人の穴は<strong>習慣</strong>で。<br>どちらか片方だけでは守れない。</div>

</div>
</div>

<div class="takeaway">脆弱性＝攻撃の入口。システム的（更新）と人為的（習慣）の両輪で塞ぐ。</div>

<!-- 第10回「更新でぜい弱性をふさぐ」を、脆弱性そのものの定義・分類へ拡張。人為的脆弱性が次スライド「内部漏えい6割」に繋がる。 -->

---

<!-- _class: split -->

<div class="page-title">内側の穴</div>

## 漏えいの原因は、外より「内」が多い

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 220" width="100%" style="max-height:220px">
  <g font-size="14" text-anchor="middle">
    <circle cx="180" cy="110" r="92" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <path d="M180,110 L180,18 A92,92 0 0,1 254,154 Z" fill="#F3C9D2"/>
    <path d="M180,110 L254,154 A92,92 0 0,1 110,170 Z" fill="#F8DEE4"/>
    <text x="150" y="70" font-weight="800" fill="#7d1322" font-size="20">内部 6割</text>
    <text x="150" y="90" fill="#7d1322" font-size="12">紛失・誤送信・内部不正</text>
    <text x="232" y="150" fill="#23527a" font-size="13">外部</text>
    <text x="232" y="166" fill="#23527a" font-size="12">4割</text>
  </g>
</svg>
<div class="caption">図. 情報漏えいの原因内訳（イメージ）</div>

</div>
<div class="right">

<div class="cbox red"><div class="h">内部要因の中身</div><div class="b">

- <span class="hl">紛失・盗難</span>（PC・USB・スマホ）
- <span class="hl">誤送信・誤公開</span>（宛先間違い・共有範囲ミス）
- <span class="hl">内部不正</span>（持ち出し）

</div></div>

<div class="cbox green"><div class="h">だから</div><div class="b">
ファイアウォールだけでは防げない。<br><span class="red">守りやすいルール</span>と、組織（経営）の関与が要る。
</div></div>

</div>
</div>

<div class="takeaway">漏えいの多くは内側のミス。技術より「運用」が効く領域。</div>

<!-- IPA読本「情報漏えいの原因は内部が6割」。割合はイメージ図(正確な統計値は年で変動、口頭で出典補足)。人為的脆弱性の具体化。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 4 ／ CHAPTER 4</div>

# 手口を知って、実務で守る

## ポート・バッファオーバーフロー・偽装ファイル・BEC

<!-- 攻撃手口の深掘り＋日常の実務Tips。第8回(ポート)・第9回(From詐称)の知識を発展させる構成。 -->

---

<!-- _class: split -->

<div class="page-title">ポート</div>

## ポートは「窓」── 使わない窓は閉める

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">第8回の復習</div><div class="b">
ポート＝サービスの<span class="hl">入口（部屋番号）</span>。<br>
　Web（HTTP/HTTPS）→ 80 / 443<br>
　メール送信（SMTP）→ 25<br>
　メール受信（POP3）→ 110
</div></div>

<div class="cbox red"><div class="h">開いた窓はリスク</div><div class="b">
開いているポート＝<span class="red">攻撃の入口</span>。<br>
スキャンで「どのサービスが動くか」が外から分かる。
</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">対策はシンプル</div><div class="b">

- <span class="hl">使わないポートは閉じる</span>（セキュリティの基本）
- ファイアウォールで出入りを制御
- 脆弱性は<span class="hl">パッチ</span>で塞ぐ

</div></div>

<div class="band" style="font-size:19px">「全部開けて便利」より「<span class="hl">必要な窓だけ開ける</span>」。最小限が安全。</div>

</div>
</div>

<div class="takeaway">ポート＝サービスの窓。不要な窓を閉じるのが守りの第一歩。</div>

<!-- 第8回でポート番号は既習。ここは「閉じる＝対策」の視点を足す。最小権限・最小公開の考え方に繋ぐ。 -->

---

<!-- _class: split -->

<div class="page-title">攻撃の一例</div>

## バッファオーバーフロー ── あふれさせて乗っ取る

<div class="split-body">
<div class="left">

<svg viewBox="0 0 400 200" width="100%" style="max-height:200px">
  <g font-size="14" text-anchor="middle">
    <rect x="60" y="40" width="280" height="40" rx="6" fill="#eef7ef" stroke="#3C8A57" stroke-width="1.8"/>
    <text x="200" y="65" fill="#2d6a44">想定サイズの入れ物（バッファ）</text>
    <rect x="60" y="100" width="280" height="40" rx="6" fill="#fff" stroke="#A6192E" stroke-width="1.8"/>
    <rect x="60" y="100" width="360" height="40" rx="6" fill="#F8E5EA" stroke="#A6192E" stroke-width="2" opacity="0.5"/>
    <text x="200" y="125" fill="#7d1322">大量データを送り込む →</text>
    <text x="372" y="125" fill="#A6192E" font-weight="700" font-size="13">溢れる</text>
    <text x="200" y="172" fill="#555" font-size="13">あふれた部分が、別の領域を上書きしてしまう</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox red"><div class="h">手口</div><div class="b">

- 想定より<span class="hl">大量のデータ</span>を送り込む
- 入れ物（バッファ）からあふれさせる
- あふれた部分でプログラムを<span class="red">誤作動・乗っ取り</span>

</div></div>

<div class="cbox green"><div class="h">対策</div><div class="b">
古典的だが今も現役。<br>結局は<span class="red">パッチ（脆弱性を塞ぐ）</span>に尽きる。
</div></div>

</div>
</div>

<div class="takeaway">あふれさせて権限を奪う典型手口。守りはやはり「更新」。</div>

<!-- 専門寄り。詳細な仕組みは深入りせず「あふれ→乗っ取り→対策はパッチ」の3点で十分。脆弱性対策の重要性の裏づけ。 -->

---

<!-- _class: split -->

<div class="page-title">偽装ファイル</div>

## 「見た目」にだまされない ── 拡張子を見る

<div class="split-body">
<div class="left">

<div class="cbox red"><div class="h">よくある偽装</div><div class="b">

- <span class="hl">二重拡張子</span>：<span class="mono">お知らせ.docx.exe</span><br>（最後が <span class="red mono">.exe</span> ＝実行ファイル）
- <span class="hl">アイコン偽装</span>：Word風アイコンの実行ファイル
- 名前を長くして<span class="mono">…</span>で末尾を隠す

</div></div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">見抜く設定（Windows）</div><div class="b">

- 既定では<span class="red">拡張子が隠れている</span>
- エクスプローラ →「表示」→<br><span class="hl">拡張子を表示</span>をONに
- これで <span class="mono">.exe / .scr / .js</span> が見える

</div></div>

<div class="band" style="font-size:19px">開く前に<span class="hl">拡張子を確認</span>。心当たりのない添付は<span class="red">開かない</span>のが原則。</div>

</div>
</div>

<div class="takeaway">拡張子表示をONにし、開く前に末尾を確認。これだけで多くを防げる。</div>

<!-- 実務Tips。Windows既定で拡張子非表示→偽装が通る。設定変更は学生が今日できる自衛。Macも同様(Finder設定)を口頭補足。 -->

---

<!-- _class: split -->

<div class="page-title">BEC</div>

## ビジネスメール詐欺 ── 「至急振込を」を疑う

<div class="split-body">
<div class="left">

<div class="cbox red"><div class="h">BEC（ビジネスメール詐欺）</div><div class="b">

- 取引先・上司・教員に<span class="hl">なりすまし</span>
- 「<span class="red">至急、この口座へ振込を</span>」と指示
- 巧妙な日本語・本物そっくりの署名

</div></div>

<div class="cbox gray"><div class="h">第9回の復習</div><div class="b">
メールの <span class="mono">From</span> は<span class="hl">自己申告</span>。<br>差出人は簡単に詐称できる。
</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">対策</div><div class="b">

- お金・秘密の指示は<span class="red">別経路で確認</span>（電話）
- 送信元<span class="hl">ドメインを1文字ずつ</span>見る
- 「至急」「内密に」で<span class="hl">焦らせる</span>のが手口

</div></div>

<div class="ask">研究室でも他人事でない。<br>学会費・備品の「振込先変更」メールは、<strong>必ず口頭/電話で裏取り</strong>。</div>

</div>
</div>

<div class="takeaway">差出人は詐称できる。お金が絡む指示は必ず別経路で確認する。</div>

<!-- 第9回From詐称の発展。BECは大学・研究室でも実害。対策の核は「別経路での確認」。生成AIで自然な日本語の偽メールが増えた点も補足。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 5 ／ CHAPTER 5</div>

# 「あなた」を確かめる

## 認証の最新形 ── パスワードレスへ

<!-- 第10回の認証3要素・チャレンジレスポンス(付録)を発展させ、パスキー/FIDO2へ。学外アクセスの話は動画7(学生質問)に移設し、ここは認証技術の進化に集中。 -->

---

<!-- _class: fig -->

<div class="page-title">復習と発展</div>

## パスワードを「送らない」方向へ（第10回の続き）

<div class="fig-area" style="margin-top:-4px">
<svg viewBox="0 0 940 180" width="100%" style="max-height:210px">
  <defs><marker id="ar4" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
  <g font-size="15" text-anchor="middle">
    <rect class="card" x="30" y="55" width="220" height="66" rx="10" fill="#fdecec" stroke="#A6192E" stroke-width="2"/>
    <text x="140" y="82" font-weight="800" fill="#7d1322">① 固定パスワード</text><text x="140" y="104" font-size="13" fill="#555">盗まれたら成り済まされる</text>
    <text x="262" y="92" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <rect class="card" x="285" y="55" width="220" height="66" rx="10" fill="#fff7ec" stroke="#D98A2B" stroke-width="2"/>
    <text x="395" y="82" font-weight="800" fill="#a9781a">② ワンタイムPW</text><text x="395" y="104" font-size="13" fill="#555">毎回変わる＝盗んでも無効</text>
    <text x="517" y="92" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <rect class="card" x="540" y="55" width="240" height="66" rx="10" fill="#eef4fa" stroke="#3E78B2" stroke-width="2"/>
    <text x="660" y="82" font-weight="800" fill="#23527a">③ チャレンジレスポンス</text><text x="660" y="104" font-size="13" fill="#555">PWそのものを送らない</text>
    <text x="792" y="92" fill="#3C8A57" font-size="22" font-weight="800">→</text>
    <rect class="card" x="812" y="55" width="116" height="66" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2.5"/>
    <text x="870" y="82" font-weight="800" fill="#2d6a44">④ パスキー</text><text x="870" y="104" font-size="12" fill="#555">次スライド</text>
  </g>
</svg>
</div>

<div class="band">弱点（盗まれる）を消す方向に進化してきた。その到達点が <span class="red">パスキー</span>。</div>

<div class="takeaway">固定PW → 毎回変える → 送らない → 持たない（パスキー）。一本の進化。</div>

<!-- 第10回付録(スニッフィング→OTP→チャレンジレスポンス)を伏線として回収し、パスキーへ。「進化の一本道」として提示。 -->

---

<!-- _class: split -->

<div class="page-title">パスキー</div>

## パスキー / FIDO2 ── 生体 × 公開鍵

<div class="split-body">
<div class="left">

<div class="cbox green"><div class="h">しくみ（公開鍵暗号の応用）</div><div class="b">

- <span class="hl">秘密鍵は端末の中</span>から出ない
- <span class="hl">公開鍵だけ</span>をサービスに登録
- 顔/指紋で端末を解錠し、<span class="red">署名</span>を返す
- パスワードは<span class="red">そもそも無い</span>

</div></div>

<div class="caption">第8回「公開鍵で施錠／秘密鍵で開錠」の実用形</div>

</div>
<div class="right">

<div class="cbox blue"><div class="h">なにが嬉しい？</div><div class="b">

- <span class="hl">フィッシングに強い</span>：偽サイトには鍵を出さない
- 漏れるパスワードが無い ＝ 使い回し事故ゼロ
- 指紋・顔だけでログイン（速い・楽）

</div></div>

<div class="band" style="font-size:19px">Google・Apple・大学アカウントでも順次対応。<span class="hl">使えるなら今すぐ有効化を</span>。</div>

</div>
</div>

<div class="takeaway">パスキー＝生体×公開鍵のパスワードレス。フィッシングに本質的に強い。</div>

<!-- 未習×最新。第8回(公開鍵)・第10回(生体認証)の合流点として説明すると腑に落ちる。チャレンジレスポンスの進化形。学外アクセス(VPN/学認)は動画7へ。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 6 ／ CHAPTER 6</div>

# 守る側から、探す側へ

## 千葉大の備えと、次の一歩

<!-- 千葉大の体制(C-csirt)と発展概念(フォレンジク/ペネトレ)を紹介し、バグハンティングコンテストへ誘導。動画8(学び方)への布石でもある。 -->

---

<!-- _class: split -->

<div class="page-title">千葉大の備え</div>

## 大学も守っている ── そして「探す側」へ

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">C-csirt（シー・シーサート）</div><div class="b">
<strong>千葉大学情報危機対策チーム</strong>。<br>本学の情報資産をサイバー攻撃から守り、<span class="hl">インシデントに対応</span>する専門チーム（H28.4発足）。
</div></div>

<div class="cbox gray"><div class="h">発展のことば</div><div class="b">

- <span class="hl">ディジタルフォレンジク</span>＝事後の「鑑識」
- <span class="hl">ペネトレーションテスト</span>＝侵入実験で穴を探す

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">バグハンティングコンテスト2026</div><div class="b">

- Webサイトの<span class="hl">セキュリティホールを探す</span>
- プログラミング初心者OK（講習あり）
- 4名までのチーム（1名でも可）
- 今日の「守る側」から<span class="red">「探す側」</span>を体験

</div></div>

<div class="band" style="font-size:18px">申込〜7/28、講習会7/30（オンデマンド可）。詳細はMoodle／c-csirtのページへ。</div>

</div>
</div>

<div class="takeaway">大学はC-csirtで守る。興味があれば「探す側」も体験できる。</div>

<!-- 第10回告知のコンテストを、組織(C-csirt)・発展概念(フォレンジク/ペネトレ)とともに再提示。情報セキュリティ分析(入門)など関連授業も口頭で。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 7 ／ CHAPTER 7</div>

# 届いた質問に答える

## 寄せられた疑問を、6つのテーマで

<!-- 学生から事前に寄せられた質問(レポート執筆〜文献〜データ管理〜プレゼン〜進路〜ツール)を6グループに整理。IT寄り(学外アクセス・データ管理)は深め、他は「どこで学ぶか」を案内。1動画で全部は教えず「地図＋入口＋行き先」に徹する。 -->

---

<!-- _class: fig -->

<div class="page-title">質問の地図</div>

## 質問を6つのテーマに整理した

<div class="fig-area" style="min-height:0">

<div class="grid3" style="width:96%">
<div class="cbox blue"><div class="h">① レポート・論文を書く</div><div class="b">執筆手順・読みやすい文章・<br>引用・剽窃回避・卒論/修論の構成</div></div>
<div class="cbox green"><div class="h">② 文献を探す・読む</div><div class="b">DBの使い分け・批判的に読む・<br>学外アクセス・取り寄せ</div></div>
<div class="cbox orange"><div class="h">③ データを集計・保存・管理</div><div class="b">ファイル整理・バックアップ・<br>Excel集計・研究データ管理</div></div>
<div class="cbox blue"><div class="h">④ 伝える（プレゼン・学会）</div><div class="b">スライド設計・発表動画・<br>質疑・国際学会</div></div>
<div class="cbox green"><div class="h">⑤ 大学生活・進路</div><div class="b">研究室選び・履修計画・<br>留学・奨学金・連絡のマナー</div></div>
<div class="cbox orange"><div class="h">⑥ 支援ツール</div><div class="b">Moodle・EndNote・<br>Grammarly・TeX/LaTeX</div></div>
</div>

</div>

<div class="band" style="font-size:19px">この動画は<span class="hl">「最初の一歩」と「どこで深く学ぶか」</span>を案内。情報技術寄り（②③）は少し詳しく。</div>

<div class="takeaway">疑問は6テーマに整理できる。全部を今日やらず、入口と行き先を示す。</div>

<!-- 質問一覧を俯瞰。1動画で全部は教えられないので「地図＋入口＋行き先」に徹する。②③をこの後深掘り、①④⑤⑥は資源案内。 -->

---

<!-- _class: split -->

<div class="page-title">②文献・学外アクセス</div>

## 文献を「探す」と、学外から「読む」

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">探す ── 目的で使い分け</div><div class="b">

- <span class="hl">CiNii Research</span>：国内論文・博論
- <span class="hl">Google Scholar</span>：広く速く・引用数
- <span class="hl">Web of Science</span>：国際誌・引用をたどる
- 本学の契約は<span class="hl">電子ジャーナルAtoZ</span>で確認
- 無い文献は<span class="hl">取り寄せ（ILL）</span>で他大学から

</div></div>

</div>
<div class="right">

<div class="qbox"><span class="qh">学生からの質問</span>自宅から電子ジャーナルの<strong>本文が読めない</strong>。学外からの読み方を知りたい。</div>

<div class="cbox green"><div class="h">読む ── 学外アクセスの2つの道</div><div class="b">

- <span class="hl">VPN</span>：自宅PCを「学内」に見せる暗号トンネル
- <span class="hl">学認(GakuNin)</span>：大学IDで出版社に直接ログイン
- どちらも<span class="red">「学内IP扱い」</span>で本文が開く

</div></div>

</div>
</div>

<div class="takeaway">探すはDB使い分け、学外で読むはVPN／学認。設定は大学・図書館の案内へ。</div>

<!-- カテゴリ②。学生質問「学外で読めない」をここで回収(動画5から移設)。VPN=トンネル、学認=フェデレーション認証。具体URLは図書館/情報環境の最新案内へ。批判的に読む方法はEYeL!も口頭で。 -->

---

<!-- _class: split -->

<div class="page-title">③データを守る・残す</div>

## 集計・保存・管理 ── 失わない仕組み

<div class="split-body">
<div class="left">

<div class="qbox"><span class="qh">学生からの質問</span>ファイルの<strong>バックアップの取り方</strong>、オンラインストレージの使い方を知りたい。</div>

<div class="cbox blue"><div class="h">3-2-1バックアップ</div><div class="b">
<span class="hl">3つ</span>のコピー／<span class="hl">2種類</span>の媒体（PC＋外付け/クラウド）／<span class="hl">1つ</span>は別の場所。<br>ランサムウェアで人質に取られても<span class="red">復元できる</span>。
</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">クラウド・整理・研究データ</div><div class="b">

- 共有リンクの<span class="hl">公開範囲</span>＝アクセス制御。最小限に
- フォルダは<span class="hl">命名規則＋日付</span>で迷子を防ぐ
- Excelは<span class="hl">集計表→グラフ</span>の順（生データは別シート）
- 研究データは<span class="hl">DMP・データ管理方針</span>に従う

</div></div>

<div class="band" style="font-size:18px">自動化して「<span class="hl">続く仕組み</span>」に。手動のバックアップは続かない。</div>

</div>
</div>

<div class="takeaway">3-2-1で多重化、クラウドは公開範囲に注意、研究データは方針に従う。</div>

<!-- カテゴリ③。学生質問「バックアップ」をここで回収(動画6データ編から移設)。第10回ランサム対策の実践。Excel集計・RDM/DMPも軽く触れ、研究室の方針優先で締める。 -->

---

<!-- _class: split -->

<div class="page-title">①⑥執筆・ツール</div>

## レポート・論文と、それを助ける道具

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">書く ── 引用と剽窃</div><div class="b">

- 引用は<span class="hl">「主」が自分・「従」が引用</span>、出所を明示
- コピペは<span class="red">剽窃</span>。言い換え（パラフレーズ）＋出典
- 構成は<span class="hl">問い→主張→根拠</span>の順で組む
- 千葉大の<span class="hl">EYeL!</span>に作法・テンプレあり

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">道具 ── 使えば速くなる</div><div class="b">

- <span class="hl">文献管理</span>：EndNote等で参考文献を自動整形
- <span class="hl">英文校正</span>：Grammarlyで語法ミスを減らす
- <span class="hl">数式・組版</span>：TeX/LaTeXできれいに（理系の標準）
- <span class="hl">生成AI</span>は下書きの相棒。<span class="red">事実は必ず自分で確認</span>

</div></div>

</div>
</div>

<div class="takeaway">引用は出所明示、剽窃は厳禁。ツールで速く、でも中身は自分で担保。</div>

<!-- カテゴリ①⑥。引用/剽窃は第10回(著作権)・前任lec07の流れ。EYeL!(alc.chiba-u.jp/eyr)に引用ガイドあり。ツールは紹介にとどめ深掘りはEYeL!/図書館講習へ。生成AIは検証必須を強調。 -->

---

<!-- _class: split -->

<div class="page-title">④⑤伝える・進路</div>

## 伝える力と、相談のしかた

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">④ 伝える（プレゼン・学会）</div><div class="b">

- 1スライド1メッセージ。<span class="hl">図で見せ、字は減らす</span>
- 配色・文字サイズは<span class="hl">後ろの席</span>基準で
- 質疑は<span class="hl">結論→理由</span>。分からなければ正直に
- 発表動画はPowerPointの録画機能で手軽に

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">⑤ 大学生活・進路・相談</div><div class="b">

- 研究室は<span class="hl">テーマ＋指導の相性</span>で。早めに見学
- 教員へのメールは<span class="hl">所属・氏名・用件・締切</span>を簡潔に
- 留学・奨学金は<span class="hl">締切が命</span>。逆算して準備
- 迷ったら<span class="hl">一人で抱えず相談</span>（教員・先輩・窓口）

</div></div>

</div>
</div>

<div class="takeaway">伝えるは「図と一言」。相談は早め・簡潔に。締切から逆算する。</div>

<!-- カテゴリ④⑤。プレゼン設計はmarp/academic.cssの密度ガイドと同じ思想。メール作法は社会人基礎。深掘りはキャリアセンター・指導教員へ。「抱えず相談」を強調。 -->

---

<!-- _class: divider -->

<div class="chapter-num">動画 8 ／ CHAPTER 8</div>

# これからの情報技術と「学び方」

## 今後の展開と、プログラミングの学び方

<!-- 締めの動画。今後の技術トレンド→プログラミング/AIの学び方→次の一歩。この授業を「終わり」でなく「入口」にする。第8回(クラウド・AIの特徴・なぜ学ぶか)を回収。 -->

---

<!-- _class: fig -->

<div class="page-title">これからの流れ</div>

## 技術は変わり続ける ── 4つの大きな流れ

<div class="fig-area" style="min-height:0">

<div class="grid2" style="width:94%">
<div class="cbox blue"><div class="h">① 生成AIが「道具」になる</div><div class="b">使いこなす力＋<span class="hl">出力を検証する力</span>が要る。第8回「浅く聞けば浅い」</div></div>
<div class="cbox green"><div class="h">② クラウド前提</div><div class="b"><span class="hl">所有から利用へ</span>。必要な時に借りる（第8回）</div></div>
<div class="cbox orange"><div class="h">③ データ駆動</div><div class="b">どの分野も<span class="hl">データを読む力</span>が共通言語に</div></div>
<div class="cbox red"><div class="h">④ セキュリティは常識</div><div class="b">守りは特別でなく<span class="hl">ユーザーの基本動作</span>に</div></div>
</div>

</div>

<div class="band" style="font-size:20px">個々の道具はやがて変わる。だから<span class="hl">「学び方」そのもの</span>を身につける。</div>

<div class="takeaway">流れは AI・クラウド・データ・セキュリティ。変化が前提だから学び続ける。</div>

<!-- 今後の展開。第8回(クラウド・AIの特徴)と接続。「道具は変わる→学び方を学ぶ」へ。次スライドでプログラミングの学び方。 -->

---

<!-- _class: split -->

<div class="page-title">プログラミングの学び方</div>

## なぜ・何から・どう続けるか

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">なぜ学ぶ？</div><div class="b">

- 機械に<span class="hl">正確に指示する</span>＝論理の言語化
- データを<span class="hl">自分で処理・可視化</span>できる
- AIに任せきりにせず<span class="red">出力を検証</span>できる

</div></div>

<div class="cbox green"><div class="h">何から？</div><div class="b">

- <span class="hl">Python＋データ分析</span>から（応用が広い）
- <span class="hl">Colab</span>（第8回の砂場）ならインストール不要
- 自分の研究・課題に<span class="hl">直結する小題材</span>で

</div></div>

</div>
<div class="right">

<div class="cbox orange"><div class="h">どう続ける？</div><div class="b">

- <span class="hl">小さく作って動かす</span>→直す（写経より実装）
- エラーは敵でなく先生。<span class="hl">AIに「なぜ？」</span>を聞く
- <span class="hl">週15分でも毎日</span>。継続が最大の武器

</div></div>

<div class="ask">「全部わかってから」は来ない。<br><strong>動くものを小さく作りながら</strong>覚えるのが最短。</div>

</div>
</div>

<div class="takeaway">何からより「小さく作り続ける」。Colabで今日から、AIを相棒に。</div>

<!-- プログラミングの学び方。Colabは第8回で既出。AIを「答え製造機」でなく「壁打ち・なぜ説明役」に使う。研究直結の小題材＝動機が続く。 -->

---

<!-- _class: split -->

<div class="page-title">次の一歩</div>

## AIを相棒に、でも「分かる人」が使いこなす

<div class="split-body">
<div class="left">

<div class="cbox blue"><div class="h">この授業が伝えたかったこと</div><div class="b">

- 仕組みを知る人ほど<span class="hl">AIを使いこなせる</span>
- <span class="hl">浅く聞けば浅い／文脈を与えれば深い</span>（第8回）
- 「便利」の裏側を知ると、<span class="hl">安全に・賢く</span>使える

</div></div>

</div>
<div class="right">

<div class="cbox green"><div class="h">千葉大の学び場・次の一歩</div><div class="b">

- <span class="hl">EYeL!</span>・図書館講習：執筆・文献・データ
- <span class="hl">情報セキュリティ分析(入門)</span>・バグハンティング
- Colab・生成AIで<span class="hl">小さく試す</span>を習慣に

</div></div>

<div class="statement" style="font-size:22px">守る・作る・問う ──<br>この授業の先も、続けていこう。</div>

</div>
</div>

<div class="takeaway">道具は変わる。仕組みを知り、小さく試し、問い続ける人が強い。</div>

<!-- 締め。第8回(AIの特徴・なぜ学ぶか)を回収して全体を閉じる。EYeL!・関連授業・Colabへ送り出す。「守る・作る・問う」で前向きに終える。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## この回の要点 ── 8つ

- **文字コード**：文字は番号。化けたら符号の食い違い。迷わず<span class="hl">UTF-8に統一</span>
- **守る対象**：情報資産・リスク・インシデント。核は<span class="hl">CIA</span>＋真正性（＝認証）
- **脅威の地図**：不正アクセス6類型。乗っ取られると<span class="hl">踏み台＝加害者</span>に
- **脆弱性**：システム的（更新）と人為的（習慣）。漏えいは<span class="hl">内部が6割</span>
- **実務の守り**：拡張子を見る・BECは別経路で確認・<span class="hl">不要ポートは閉じる</span>
- **認証**：固定PW→OTP→送らない→<span class="hl">パスキー</span>（生体×公開鍵）
- **質問の答え**：学外は<span class="hl">VPN／学認</span>、データは<span class="hl">3-2-1</span>、執筆・ツールは行き先を案内
- **これから**：技術は変わる→<span class="hl">「学び方」を学ぶ</span>。プログラミングは小さく作り続ける

<!-- 8動画を1枚で総括。文字コード／セキュリティ自衛／質問への回答／学び方が柱。試験・課題の観点でもある。 -->

---

<!-- _class: qa -->

<div class="page-title">課題・おわり</div>

# 課題とおわりに

## リフレクション＋課題は Moodle ／ 視聴・提出は 6/30（火）まで

<div class="band" style="text-align:left">今日できる3つ：①拡張子表示をON ②大事なアカウントにパスキー/2要素認証 ③卒論データを3-2-1でバックアップ</div>

<!-- 締め。課題=Moodleリフレクション＋設問。視聴期限は仮(6/30火)、要差し替え。質問は質問フォーラムで受付。「探す側」コンテスト・学び方も再案内。 -->
