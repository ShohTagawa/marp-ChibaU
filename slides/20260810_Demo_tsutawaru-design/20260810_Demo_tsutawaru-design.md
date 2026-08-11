---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">伝わるデザインの基本 準拠テーマ</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">Marp テーマ tsutawaru-academic</div>
<div class="title-big">囲まない、盛らない</div>
</div>

<div class="title-foot">
<div class="title-photo">図版なし</div>
<div class="title-meta">
<div class="title-event">『伝わるデザインの基本 増補改訂3版』に沿って本文を組み直す</div>
<div class="title-date">2026年8月10日</div>
<div>千葉大学</div>
</div>
</div>

---

<div class="page-title">箇条書き</div>

## 記号もインデントも使わず、太さと余白だけで組む

<div class="body">

<div class="blist">
<div class="t">小見出しは本文と同じ大きさにする</div>
<div class="d">サイズを増やさず、太さだけで差をつける。</div>
<div class="t">ナカグロ（・）は付けない</div>
<div class="d">文頭記号を消すと行頭が一直線に揃う。</div>
<div class="t">インデントで入れ子を表さない</div>
<div class="d">段差ではなく文字の強弱で階層を示す。</div>
<div class="t">区切りは空白行ではなく段落間隔</div>
<div class="d">項目内の行間より、項目同士の間隔を広くとる。</div>
</div>

</div>

<div class="takeaway">構造は囲みではなく、太さ・余白・揃えでつくる</div>

---

<div class="page-title">フロー図</div>

## 囲みは白地・細枠・直角、矢印は小さく

<div class="body">

<div class="flow">
<div class="fbox">枠を<span class="big">減らす</span></div>
<div class="arw"></div>
<div class="fbox">余白で<span class="big">まとめる</span></div>
<div class="arw"></div>
<div class="fbox">揃えて<span class="big">配置する</span></div>
</div>

<div class="blist">
<div class="t">塗りか枠か、どちらか一方にだけ色を使う</div>
<div class="d">両方に色を付けると悪目立ちする。</div>
<div class="t">枠の幅は文字数に合わせず等幅にする</div>
<div class="d">上下左右を揃え、間隔も均等にする。</div>
<div class="t">角は丸めすぎない</div>
<div class="d">丸みが強いと角で文字と枠が接近する。</div>
</div>

</div>

---

<div class="page-title">情報量が多い場合</div>

## 装飾を減らし、横罫と数字の大小で見せる

<div class="body">

<div class="tcols">
<div>

### 囲みの数（枠 ÷ スライド）

<div class="datarow"><span>リポジトリ全体</span><span class="v"><span class="num">1.35</span><span class="unit">枠/枚</span></span></div>
<div class="datarow"><span>添削済みの4デック</span><span class="v"><span class="num">0.32</span><span class="unit">枠/枚</span></span></div>

</div>
<div>

### 1枚あたりの文字数

<div class="datarow"><span>リポジトリ全体</span><span class="v"><span class="num">184</span><span class="unit">字</span></span></div>
<div class="datarow"><span>添削済みの4デック</span><span class="v"><span class="num">218</span><span class="unit">字</span></span></div>

</div>
</div>

<p class="note wide">2026年8月10日時点、slides/ 配下139デック・3,688枚の機械集計。<b>差が出たのは囲みの数であって、文字数ではない。</b></p>

</div>

---

<div class="page-title">図やグラフ</div>

## 16:9では行長を伸ばさず、二段に割る

<div class="tcols fig-left">
<div>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" viewBox="0 0 760 400"><rect width="760" height="400" x="0" y="0" fill="none"></rect><path d="M184.5 10L184.5 366" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M313.5 10L313.5 366" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M443.5 10L443.5 366" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M572.5 10L572.5 366" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M702.5 10L702.5 366" fill="none" pointer-events="visible" stroke="#E4E4E4" class="zr0-cls-0"></path><path d="M184 366L184 10" fill="none" pointer-events="visible" stroke="#262626" stroke-width="1.5" stroke-linecap="round" class="zr0-cls-0"></path><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" xml:space="preserve" transform="translate(174 336.3333)" fill="#262626">添削済み EdTech</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" xml:space="preserve" transform="translate(174 277)" fill="#262626">添削済み InfoLit8</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" xml:space="preserve" transform="translate(174 217.6667)" fill="#262626">添削済み FD明海</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" xml:space="preserve" transform="translate(174 158.3333)" fill="#262626">添削済み ALC</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(174 99)" fill="#262626">全体の平均</text><text dominant-baseline="central" text-anchor="end" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:400;" transform="translate(174 39.6667)" fill="#262626">最も多いデック</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(184 376)" fill="#5F5F5F">0</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(313.5 376)" fill="#5F5F5F">1</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(443 376)" fill="#5F5F5F">2</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(572.5 376)" fill="#5F5F5F">3</text><text dominant-baseline="central" text-anchor="middle" style="font-size:16px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;" y="8" transform="translate(702 376)" fill="#5F5F5F">4</text><path d="M184 321.3l0 0l0 30l0 0Z" fill="#BDBDBD" ecmeta_series_index="0" ecmeta_data_index="0" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M184 262l10.4 0l0 30l-10.4 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="1" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M184 202.7l58.3 0l0 30l-58.3 0Z" fill="#BDBDBD" ecmeta_series_index="0" ecmeta_data_index="2" ecmeta_ssr_type="chart" class="zr0-cls-1"></path><path d="M184 143.3l143.7 0l0 30l-143.7 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="3" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><path d="M184 84l174.8 0l0 30l-174.8 0Z" fill="#A6192E" ecmeta_series_index="0" ecmeta_data_index="4" ecmeta_ssr_type="chart" class="zr0-cls-3"></path><path d="M184 24.7l441.6 0l0 30l-441.6 0Z" fill="#8A8A8A" ecmeta_series_index="0" ecmeta_data_index="5" ecmeta_ssr_type="chart" class="zr0-cls-2"></path><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(192 336.3333)" fill="#262626">0</text><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(202.36 277)" fill="#262626">0.08</text><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(250.275 217.6667)" fill="#262626">0.45</text><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(335.745 158.3333)" fill="#262626">1.11</text><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(366.825 99)" fill="#262626">1.35</text><text dominant-baseline="central" text-anchor="start" style="font-size:17px;font-family:'BIZ UDPGothic','Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic Medium','Noto Sans JP',Meiryo,sans-serif;font-weight:700;" transform="translate(633.595 39.6667)" fill="#262626">3.41</text><style ><![CDATA[.zr0-cls-0:hover {pointer-events:none;}.zr0-cls-1:hover {cursor:pointer;fill:rgba(207,207,207,1);}.zr0-cls-2:hover {cursor:pointer;fill:rgba(151,151,151,1);}.zr0-cls-3:hover {cursor:pointer;fill:rgba(182,27,50,1);}]]></style></svg>

<div class="cap">囲み密度（枠 ÷ スライド枚数）</div>

</div>
<div>

<div class="blist">
<div class="t">強調するのは1本だけ</div>
<div class="d">残りはグレーに落とす。色を増やすほど、どこを見ればよいか分からなくなる。</div>
<div class="t">目盛りは粗く、値は直接添える</div>
<div class="d">凡例を往復させず、棒の右に数値を置く。色だけに頼らない示し方になる。</div>
<div class="t">影・角丸・立体感は付けない</div>
<div class="d">グラフの装飾はノイズにしかならない。</div>
</div>

</div>
</div>

---

<div class="page-title">囲みたくなったら</div>

## 囲む前に、代わりの手が3つある

<div class="body">

<div class="figrow">
<div>

### ① 塗りだけにする

<div class="fill">枠線を消し、塗りだけで囲む。線と塗りの両方に色を付けない。</div>

</div>
<div>

### ② 細い枠だけにする

<div class="rule-box">白地のまま、細い線で囲む。線に色は付けない。丸みは全部品で統一する。</div>

</div>
<div>

### ③ そもそも囲まない

<div class="group">グループ化と揃えと余白で、項目のまとまりは一目で分かる。囲む必要がなくなる。</div>

</div>
</div>

<p class="note wide">右へ行くほど紙面が静かになる。③で足りるなら②も①も使わない。</p>

</div>

<div class="takeaway rule-only">枠を付けるのは最低限に。迷ったら③から試す</div>

---

<div class="page-title">まとめ</div>

## このテーマが自動で守ること

<div class="body">

| 項目 | tsutawaru-academic の既定 |
|---|---|
| 色 | 背景・文字・メインの3色。強調色は1色だけ |
| 文字サイズ | 見出し34px／本文23px／補足19px の3種類 |
| 行間・字間 | 行間1.7（文字サイズの0.7文字分）／字間5% |
| 行長 | 28文字で折り返し（本文幅は画面の約55%） |
| 囲み | 塗りのみ／細枠のみ／囲まない、の3形式だけ。丸み3pxで統一 |
| 表 | 罫線は上端・見出し下・下端の3本。縦罫はなし |
| 強調 | 太さ・大きさ・色の3手段のみ。併用は2つまで |

</div>
