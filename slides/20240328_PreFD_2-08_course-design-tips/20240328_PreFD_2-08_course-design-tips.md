---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  .tipbadge { display:inline-block; background:var(--accent); color:#fff; font-weight:800; border-radius:8px; padding:2px 14px; margin-right:8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big">コース構成のtips</div>
</div>

<div class="goal-box" style="max-width:860px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">授業構成のtipsを理解し応用できる。</span></div>

<!--
- タイトルコール。授業構成のtipsを理解し応用できるようになる、が今回の達成目標。
-->

---

<div class="page-title">授業構成のtips</div>

# <span style="color:var(--accent-dark)">クラスをどう並べるか？</span>

<div style="display:flex; align-items:center; gap:40px; margin-top:24px;">
<div style="flex:1;">
<div class="goal-box" style="font-size:32px; margin:14px 0;">各内容の比重は？</div>
<div class="goal-box" style="font-size:32px; margin:14px 0;">順番は？</div>
<div class="goal-box" style="font-size:32px; margin:14px 0;">教科書と同じで良いのでは？</div>
</div>
<div style="position:relative; flex:0 0 auto; text-align:center;">
<img src="./src/fig01-img.png" alt="悩む先生" style="height:330px;">
<img src="./src/fig02-img.png" alt="シラバス" style="height:150px; position:absolute; left:-90px; top:60px;">
</div>
</div>

<!--
- 授業担当になると「クラスをどう並べるか？」で悩む。各内容の比重・順番・教科書との関係。この回でtipsを示す。
-->

---

<div class="page-title">授業構成のtips</div>

# <span style="color:var(--accent-dark)">原則</span>

<div class="stepbox" style="margin-top:22px;">
<div class="st">① 必修の学習内容・評価は <b>絞り込む</b></div>
</div>

<div class="stepbox" style="margin-top:16px;">
<div class="st">② 自分と学習者は <b>違うこと</b> 認識する</div>
</div>

<div class="stepbox" style="margin-top:16px;">
<div class="st">③ <b>構造化</b> し項目の関係性を考える</div>
</div>

<!--
- 授業構成の3原則：①絞り込む ②自分と学習者は違う ③構造化して関係性を考える。
-->

---

<div class="page-title">授業構成のtips</div>

# <span style="color:var(--accent-dark)">原則</span>

<div class="box-accent" style="margin:10px 0 14px; margin-right:calc(var(--pip-w) + 40px);">授業の雛形に一致させるだけではなく、<br><b>原則に基づいた、一歩前進なクラス配置</b>を</div>

<div class="exrow"><div class="exn">①</div><div>必修の学習内容・評価は<b>絞り込む</b>　<span class="tag tag-soft" style="font-size:20px;">Tip 1</span> 最近接発達領域・足場かけ/足場外し</div></div>

<div class="exrow"><div class="exn">②</div><div>自分と学習者は<b>違うこと</b>認識する　<span class="tag tag-soft" style="font-size:20px;">Tip 2</span> 専門家の盲点 / <span class="tag tag-soft" style="font-size:20px;">Tip 3</span> 学習者を知ること</div></div>

<div class="exrow"><div class="exn">③</div><div><b>構造化</b>し項目の関係性を考える　<span class="tag tag-soft" style="font-size:20px;">Tip 4</span> 効果的な学習順序 / <span class="tag tag-soft" style="font-size:20px;">Tip 5</span> グラフィック・シラバス</div></div>

<!--
- 3原則それぞれに対応するTip 1〜5を示す。雛形に合わせるだけでなく、原則に基づき一歩前進したクラス配置を。
-->

---

<div class="page-title">授業構成のtips</div>

# <span class="tipbadge">Tip 1</span><span style="color:var(--accent-dark)">最近接発達領域</span>

<div class="box-warn" style="margin:6px 0 12px; margin-right:calc(var(--pip-w) + 40px);"><b>受講前は自力でできないが、受けたら自力で出来るようになる</b></div>

<div style="display:flex; gap:26px; align-items:flex-start;">
<div style="flex:0 0 430px;">
<svg viewBox="0 0 430 270" width="430" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="215" cy="135" rx="210" ry="130" fill="#EFEFEF" stroke="#888" stroke-width="2"/>
<text x="215" y="34" text-anchor="middle" font-size="20" fill="#333">援助や協同があっても<tspan font-weight="700">出来ない</tspan></text>
<ellipse cx="215" cy="150" rx="170" ry="100" fill="#F5B800" stroke="#C99400" stroke-width="2"/>
<text x="215" y="80" text-anchor="middle" font-size="20" fill="#222">援助や協同が<tspan font-weight="700">あれば出来る</tspan></text>
<ellipse cx="215" cy="165" rx="105" ry="62" fill="#D7EFC4" stroke="#7FB36B" stroke-width="2"/>
<text x="215" y="160" text-anchor="middle" font-size="22" font-weight="700" fill="#222">自力で</text>
<text x="215" y="186" text-anchor="middle" font-size="22" font-weight="700" fill="#222">出来る</text>
<text x="215" y="234" text-anchor="middle" font-size="20" font-weight="800" fill="#C0182B">最近接発達領域</text>
</svg>
<div class="cite">Vygotsky (1978)</div>
</div>
<div style="flex:1; font-size:22px; line-height:1.5;">
<div class="box-info" style="font-size:21px; padding:8px 16px; margin:0 0 8px;">伝えたいことは沢山あるかもですが、多すぎては身になりません</div>
<div style="margin:6px 0;"><b>最近接発達領域</b>に<b>内容を絞り</b>ましょう</div>
<div style="margin:6px 0;">個人差がある場合は、<b>参考資料・補完教材</b>を使用しましょう</div>
</div>
</div>

<div style="font-size:21px; line-height:1.5; margin-top:6px; margin-right:calc(var(--pip-w) + 20px);">
<b>足場かけ (Scaffolding)：</b>他者の援助や協同で出来る状態にする <span style="color:#666;">（最近接発達領域を広げたり、身につけたりする内容）</span>　／　<b>足場外し (Fading)：</b>他者の援助や協同を徐々に減らし独り立ち <span style="color:#666;">（自力出来るようになる内容）</span>
</div>

<!--
- Tip 1：最近接発達領域。自力／援助があれば／援助でも無理、の3層。受講前は自力で無理でも、受けたら自力でできるように。足場かけと足場外しで設計する。
-->

---

<div class="page-title">授業構成のtips</div>

# <span class="tipbadge">Tip 2</span><span style="color:var(--accent-dark)">専門家の盲点</span>

<div style="display:flex; gap:30px; align-items:flex-start; margin-top:6px;">
<div style="text-align:center; flex:0 0 auto;">
<img src="./src/fig04-img.png" alt="熟達者" style="height:170px;"><br>
<div style="font-weight:800;">今のあなた：熟達者</div>
<div style="font-size:21px;">無意識にできる</div>
</div>
<div style="text-align:center; flex:0 0 auto;">
<img src="./src/fig03-img.png" alt="見習い" style="height:170px;"><br>
<div style="font-weight:800;">昔のあなた・学生：見習い</div>
</div>
<div class="box-accent" style="align-self:center; text-align:center; font-size:23px;">できること<br>わかりにくいこと<br>面白いこと<br><b>すべて異なる</b></div>
</div>

<div class="box-warn" style="margin-top:10px; margin-right:calc(var(--pip-w) + 30px);"><b>専門家の盲点</b>：専門家は、無意識にできてしまうために<b>学習者が何がわからないか分からない</b></div>

<div class="box-info" style="margin-top:8px; margin-right:calc(var(--pip-w) + 30px);">教師は<b>学習内容をわかっていても、学習者を理解できないこと</b>を前提とし、<b>学習者の意見・反応を意識的に盛り込む</b>のが望ましい</div>

<div class="cite" style="position:absolute; top:120px; right:40px;">アンブローズ (2014)</div>

<!--
- Tip 2：専門家の盲点。熟達者は無意識にできるため、学習者が何でつまずくか分からない。学習者の意見・反応を意識的に盛り込む。
-->

---

<div class="page-title">授業構成のtips</div>

# <span class="tipbadge">Tip 3</span><span style="color:var(--accent-dark)">学習者を知る</span>

<div class="subhead" style="margin-top:4px;"><span style="color:#C0182B; font-weight:800;">✘ 教師に合わせる</span><span style="color:var(--accent); font-weight:800;">○ 学習者に合わせる</span></div>

<div style="display:flex; gap:22px; align-items:flex-start;">
<div class="box-info" style="flex:1;">授業中・後の質問、オフィスアワーの雑談、ミニッツ・ペーパーの記載、授業前後アンケートの結果</div>
<div class="box-accent" style="flex:0 0 300px; text-align:center; font-weight:800;">インタラクションは<br>学習者を知るチャンス</div>
</div>

<div class="box-warn" style="margin-top:12px; margin-right:calc(var(--pip-w) + 20px);"><b>教室もダイバーシティ＆インクルーシブ</b></div>

<div style="font-size:21px; line-height:1.5; margin-top:8px; margin-right:calc(var(--pip-w) + 20px);">
支援が必要な学生さんはいないか <b>(色覚→赤注意、その他)</b>　<b>例：</b>”色のシミュレータ” アプリ on iPhone/Android<br>
分かりやすい説明と思考は人により異なる <b>(認知特性・背景)</b>　<b>例 会社時代のストーリー：</b> 自分の話は、ビジョンや絵で思考する人には伝わるけど、文字思考の人には伝わりにくい
</div>

<!--
- Tip 3：学習者を知る。教師ではなく学習者に合わせる。インタラクションは学習者を知るチャンス。教室の多様性・インクルーシブにも配慮（色覚・認知特性）。
-->

---

<div class="page-title">授業構成のtips</div>

# <span class="tipbadge">Tip 4</span><span style="color:var(--accent-dark)">効果的な学習順序</span>

<div style="display:flex; align-items:flex-start; gap:16px;">
<div style="flex:1;">
<div class="ex-head" style="margin-bottom:6px;">情報提示の雛形</div>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:4px 34px; font-size:23px; line-height:1.55;">
<div>既知→未知</div><div>簡単→複雑</div>
<div>結論→理由</div><div>個別→一般</div>
<div>具体→抽象</div><div>過去→現在→未来</div>
<div><b>全体→要素→再構築</b></div><div><b>原則→個別</b></div>
<div>概論→例示→体験</div><div><b>Why→How→What</b></div>
<div>空(事実)→雨(解釈)→傘(行動)</div><div>抽象→比喩</div>
<div>問題意識→一次情報(体験)→理論→体系</div><div><b>理論→応用→理論</b> <span class="tag tag-ref" style="font-size:16px; padding:1px 10px;">参照</span></div>
</div>
<div class="box-accent" style="margin-top:10px; margin-right:calc(var(--pip-w) + 10px);"><b>正解はないが、よく使われる雛形はある</b></div>
</div>
<div class="cite" style="flex:0 0 230px; border:1.5px solid #ccc; border-radius:8px; padding:8px 12px; font-size:18px;">
栗田 (2017) p.76 / 安宅 (2010)<br>Nilson (2007) Sinek (2010)他<br><br><b style="color:var(--accent-dark);">参考：</b>ストーリーテーリングの重要性
</div>
</div>

<!--
- Tip 4：効果的な学習順序。情報提示の雛形は既知→未知、簡単→複雑、Why→How→Whatなど多数。正解はないが、よく使われる雛形がある。
-->

---

<div class="page-title">授業構成のtips</div>

<div class="page-title">授業構成のtips</div>

# <span class="tipbadge">Tip 5</span><span style="color:var(--accent-dark)">グラフィックシラバス</span>

<div style="font-size:21px; margin:0 0 6px;">授業の重要な概念感の系統性や関係性を図示し、要素を構造化した<b>図</b>や<b>絵</b>のこと　<span class="cite" style="margin:0;">栗田&中村 (2023) <b>p.32</b></span></div>

<div style="display:flex; gap:16px; align-items:flex-start;">
<img src="./src/fig21-graphic-syllabus.png" alt="グラフィックシラバスの例" style="height:355px; border:1px solid #ddd; border-radius:6px;">
<div style="flex:0 0 auto; font-size:19px;">
<div style="font-weight:800; margin-bottom:6px;">凡例 <span style="font-weight:400; font-size:16px;">※数字はクラス番号</span></div>
<div style="display:flex; flex-direction:column; gap:7px;">
<div style="border:2.5px solid #E08A2B; border-radius:4px; padding:2px 10px;">クラス主要活動</div>
<div style="border:2.5px solid #C0182B; border-radius:4px; padding:2px 10px;">クラス事後課題</div>
<div style="border:2.5px solid #2E7D46; border-radius:4px; padding:2px 10px;">クラス最終成果物</div>
</div>
</div>
</div>

<!--
- Tip 5：グラフィックシラバス。重要概念の系統性・関係性を図示し構造化した図・絵。養成講座の全体像を一枚の図で示した例。
-->

---

<div class="page-title">授業構成のtips</div>

# <span style="color:var(--accent-dark)">原則を意識したコース作成</span>

<div class="exrow" style="margin:8px 0;"><div class="exn">①</div><div>必修の学習内容・評価は<b>絞り込む</b>　<span class="tag tag-soft" style="font-size:19px;">Tip 1</span> 最近接発達領域・足場かけ/足場外し</div></div>

<div class="exrow" style="margin:8px 0;"><div class="exn">②</div><div>自分と学習者は<b>違うこと</b>認識する　<span class="tag tag-soft" style="font-size:19px;">Tip 2</span> 専門家の盲点 / <span class="tag tag-soft" style="font-size:19px;">Tip 3</span> 学習者を知ること</div></div>

<div class="exrow" style="margin:8px 0;"><div class="exn">③</div><div><b>構造化</b>し項目の関係性を考える　<span class="tag tag-soft" style="font-size:19px;">Tip 4</span> 効果的な学習順序 / <span class="tag tag-soft" style="font-size:19px;">Tip 5</span> グラフィック・シラバス</div></div>

<div class="why-callout" style="margin-top:14px; margin-right:calc(var(--pip-w) + 30px);">
<div class="wh">最後に：時間的なゆとりや雑談、ふんわりとした進行も重要です。</div>
そこから安心感や気づきや、興味・関心が生まれます。ガチガチに誤りなくかっこよく作り込む<span class="em">必要はありません</span>。
</div>

<!--
- まとめ。3原則とTip 1〜5を意識したコース作成を。最後に、時間的ゆとり・雑談・ふんわりした進行も大切。完璧に作り込む必要はない。
-->
