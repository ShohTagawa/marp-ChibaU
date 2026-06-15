---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI×研究</div><img class="hdr-logo" src="./src/research-genai-logo.svg" alt="研究における生成AIの活用法">'
footer: ''
style: |
  :root { --accent:#C2410C; --accent-dark:#9A3412; --accent-soft:#FBE7D6; --section-bg:#FBF4EF; --hdr-left-w:19%; }
  /* ヘッダー帯：左帯とページタイトル帯の幅を調整（崩れ防止） */
  section .page-title { left:17%; width:36%; }
  section.cover-hero { --hdr-left-w:19%; }
  h2 { color: var(--accent-dark); }
  section svg { max-width:100%; height:auto; }
  /* ---- components (deck-local) ---- */
  .important { display:inline-block; background:#FBE7D6; color:#9A3412; font-weight:700; font-size:20px; padding:1px 12px; border-radius:7px; margin-left:8px; letter-spacing:0.12em; vertical-align:middle; border:1px solid #E6C4A8; }
  .cbox { border-radius:10px; overflow:hidden; background:#F5F6F7; margin:8px 0; border:1px solid #e6e7e9; }
  .cbox > .h { color:#fff; font-weight:700; font-size:23px; padding:8px 20px; }
  .cbox > .b { padding:12px 20px 14px; font-size:23px; line-height:1.6; }
  .cbox.deep > .h { background:#9A3412; } .cbox.mid > .h { background:#C2410C; } .cbox.soft > .h { background:#E08A4F; color:#3a1d0a; } .cbox.gray > .h { background:#5B6068; } .cbox.blue > .h { background:#1A6BB0; }
  .cbox.red > .h { background:var(--accent); } .cbox.orange > .h { background:#C2410C; } .cbox.green > .h { background:#1A6BB0; }
  .cbox .b ul { margin:3px 0 3px 1.1em; } .cbox .b li { margin:6px 0; }
  .band { background:var(--accent-soft); border-left:8px solid var(--accent); border-radius:6px; padding:10px 20px; margin:10px 0; font-size:25px; font-weight:700; }
  .statement { text-align:center; font-weight:700; font-size:30px; margin-top:8px; color:var(--accent-dark); }
  .qbox { background:#FBF4EF; border:2px solid #C2410C; border-radius:10px; padding:10px 18px; margin:8px 0; font-weight:700; font-size:24px; }
  .qbox .ans { display:block; margin-top:8px; font-weight:400; font-size:22px; color:#444; border-top:1px dashed #d8b48f; padding-top:8px; }
  .hl-1 { background:#FBE7D6; padding:0 4px; border-radius:3px; } .hl-2 { background:#F3DCC8; padding:0 4px; border-radius:3px; }
  .red { color:var(--accent); font-weight:700; } .blu { color:#1A6BB0; font-weight:700; } .gry { color:#5B6068; font-weight:700; }
  .mono { font-family:"Menlo","Consolas",monospace; }
  .attr { font-size:19px; color:#6e7378; margin-top:6px; }
  .src { font-size:17px; color:#7a7f86; white-space:nowrap; }
  .src a, a.src { color:#1A6BB0; text-decoration:none; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; } .grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .ph { border:2px dashed #c2b1a3; border-radius:8px; background:#f7f3ef; color:#8a7a6a; display:flex; align-items:center; justify-content:center; text-align:center; font-size:16px; font-weight:700; padding:10px; }
  .dtbl { border-collapse:collapse; font-size:22px; margin:6px auto; }
  .dtbl th, .dtbl td { border:1px solid #cdcdcd; padding:9px 16px; text-align:center; }
  .dtbl th { background:var(--accent-soft); } .dtbl td.l { text-align:left; }
  .figwrap { text-align:center; } .figwrap img { max-height:430px; }
  .goals { list-style:none; margin:6px 0 0; padding:0; counter-reset:g; }
  .goals > li { position:relative; padding:6px 0 10px 56px; margin:0; min-height:44px; }
  .goals > li .gt { font-weight:700; font-size:24px; } .goals > li .gs { font-size:21px; color:#5B6068; }
  .goals > li::before { counter-increment:g; content:counter(g); position:absolute; left:0; top:6px; width:40px; height:40px; line-height:40px; text-align:center; border-radius:8px; background:var(--accent); color:#fff; font-weight:800; font-size:22px; }
  /* ---- density: larger fonts ---- */
  section { font-size:26px; padding-top:66px; padding-bottom:56px; }
  section h2 { font-size:38px; margin:0 0 8px; }
  section h3 { font-size:27px; }
  .caption { font-size:22px !important; line-height:1.5; }
  .takeaway { font-size:30px; }
  section.summary .sec-box h3 { font-size:25px; } section.summary .sec-box ul { font-size:24px; }
  section.fig .fig-area { min-height:380px; }
  section.split .split-body { min-height:400px; align-items:center; }
  /* タイトル(h2)は上端固定のまま、本文(.sections)だけを縦中央に置く（タイトルを拡大縮小の外へ分離） */
  section.summary .sections { flex:1 1 auto; justify-content:center; }
  section.wrap ul { margin-top:auto; margin-bottom:auto; }
  section:has(.takeaway) { padding-bottom:var(--takeaway-bottom) !important; }
  /* 下端の band/takeaway（＋直後の出典）を最下部に固定して高さを揃える */
  section > .band:last-child, section > .takeaway:last-child { margin-top:auto !important; }
  section > .band:has(+ .attr:last-child) { margin-top:auto !important; }
  section:has(.band) { padding-bottom:64px; }
  /* tk-low: 旧パッチ。現在は全パターン共通で下端固定（var(--takeaway-bottom)）するため default と同値。class が残っていても無害 */
  section.tk-low:has(.takeaway) { padding-bottom:var(--takeaway-bottom) !important; }
  section.cover-hero .title-event { font-size:34px; }
  section.cover-hero .title-affil { font-size:27px; color:#333; }
  /* 自己紹介：右上の所属・専門ブロックを少し大きく */
  section.intro .intro-affil { font-size:24px; }
  section.intro .intro-affil .role { font-size:22px; }
  /* 説明文をやわらかいパネルに */
  .qpanel { background:#FBF4EF; border:1px solid #E6C4A8; border-radius:10px; padding:12px 18px; margin-top:4px; }
  .qpanel p:last-child { margin-bottom:0; }
  /* 入れ子図の右側凡例 */
  .lyr { display:flex; align-items:flex-start; gap:12px; margin:13px 0; font-size:24px; line-height:1.4; }
  .lyr .sw { flex:none; width:23px; height:23px; border-radius:5px; margin-top:4px; border:1px solid rgba(0,0,0,.18); }
  .lyr b { font-weight:800; color:#9A3412; }
  .lyrnote { font-size:18px; color:#6e7378; margin-top:14px; line-height:1.5; }
  /* DIKWモデル（情報とは）の黄色ボックス */
  .lead-q { text-align:center; font-size:25px; color:#6e7378; margin:2px 0 8px; }
  .dikw { background:#FBF1CC; border:1px solid #E6CE7C; border-radius:12px; padding:16px 30px 14px; }
  .dikw .d { margin:8px 0; }
  .dikw .t { font-weight:800; font-size:26px; color:#333; }
  .dikw .s { display:block; font-size:23px; color:#454545; margin:2px 0 0 1.5em; }
  .dikw .imp .t { color:#9A3412; }
  .dikw .imp .s { font-weight:700; color:#222; }
  .dikw .tag { display:inline-block; font-size:18px; font-weight:700; color:#9A3412; background:#F6DCC2; border-radius:6px; padding:1px 11px; margin-left:12px; vertical-align:middle; }
  .dikw .src2 { text-align:right; font-size:18px; color:#7a7f86; margin-top:8px; }

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">第4回（オンデマンド）</div>
<div class="title-big">アカデミック・<br>インテグリティと生成AI</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="./src/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">研究・論文①：アカデミック・インテグリティと生成AI</div>
<div class="title-affil">千葉大学 国際未来教育基幹<br>田川 翔（専門：高等教育論・地球惑星科学）</div>
</div>
</div>

---

<!-- _class: fig -->

<div class="page-title">最初の一手</div>

## まず<span class="red">投稿先・所属学会のAIポリシー</span>を確認する <span class="important">出発点</span>

<div class="fig-area">
<svg viewBox="0 0 990 260" width="100%" style="max-height:360px">
  <defs>
    <marker id="ar7a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#C2410C"/></marker>
  </defs>
  <g text-anchor="middle">
    <rect x="20" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#9A3412" stroke-width="2"/>
    <text x="125" y="78" font-size="18" font-weight="800" fill="#9A3412">① 投稿先を想定</text>
    <text x="125" y="104" font-size="16" fill="#5B6068">論文誌・所属学会・会議</text>
    <text x="125" y="122" font-size="16" fill="#5B6068">を具体的に決める</text>
    <rect x="262" y="40" width="210" height="96" rx="14" fill="#C2410C" stroke="#9A3412" stroke-width="2.5"/>
    <text x="367" y="78" font-size="18" font-weight="800" fill="#fff">② AIポリシー確認</text>
    <text x="367" y="104" font-size="16" fill="#FBE7D6">投稿規程・著者規定</text>
    <text x="367" y="122" font-size="16" fill="#FBE7D6">査読規程の両方</text>
    <rect x="504" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#C2410C" stroke-width="2"/>
    <text x="609" y="78" font-size="18" font-weight="800" fill="#C2410C">③ 段階ごとに可否</text>
    <text x="609" y="104" font-size="16" fill="#5B6068">実施／執筆／査読／</text>
    <text x="609" y="122" font-size="16" fill="#5B6068">改訂で線引きが違う</text>
    <rect x="746" y="40" width="210" height="96" rx="14" fill="#FBE7D6" stroke="#E08A4F" stroke-width="2"/>
    <text x="851" y="78" font-size="18" font-weight="800" fill="#9A3412">④ 開示し記録</text>
    <text x="851" y="104" font-size="16" fill="#5B6068">使ったら書いて</text>
    <text x="851" y="122" font-size="16" fill="#5B6068">版・履歴を残す</text>
  </g>
  <line x1="232" y1="88" x2="258" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <line x1="474" y1="88" x2="500" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <line x1="716" y1="88" x2="742" y2="88" stroke="#C2410C" stroke-width="3" marker-end="url(#ar7a)"/>
  <text x="495" y="218" text-anchor="middle" font-size="18" font-weight="800" fill="#9A3412">「分野・媒体・研究の段階」ごとに違う ── 一律の正解はない</text>
</svg>
</div>

<div class="takeaway">可否は媒体ごと、さらに研究の段階ごとに違う。まず規程を読むところから始める。</div>

---

<!-- _class: split -->

<div class="page-title">画像生成も同じ核</div>

## 画像生成も「学んだものから作り直す」だけ

<div class="split-body">
<div class="left">

<svg viewBox="0 0 360 250" width="100%" style="max-height:300px">
  <g text-anchor="middle">
    <text x="180" y="30" font-size="18" fill="#9A3412" font-weight="700">画像生成（拡散モデル）</text>
    <rect x="60" y="48" width="240" height="64" rx="10" fill="#EDEEF0" stroke="#5B6068" stroke-width="2"/>
    <text x="180" y="88" font-size="20" fill="#5B6068" font-weight="700">ランダムなノイズ</text>
    <text x="180" y="150" font-size="30" fill="#C2410C" font-weight="800">↓</text>
    <rect x="60" y="166" width="240" height="64" rx="10" fill="#F3DCC8" stroke="#C2410C" stroke-width="2"/>
    <text x="180" y="206" font-size="20" fill="#9A3412" font-weight="800">学んだ絵に近づける</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox blue"><div class="h" style="font-size:26px">画像生成も“学んだものから作る”</div><div class="b">

- 手順は違っても、根はLLMと同じ<span class="red">学習分布からのサンプリング</span>
- ゼロからの創造ではなく、学びの<span class="red">再構成</span>。生成AIを見る共通の物差し

</div></div>

- なお<span class="red">学習（育てる）と推論（使う）は別物</span>。使う時は学ばない（詳しくは動画3・5で）

</div>
</div>

<div class="takeaway">方式が違っても「学んだ分布から作る」は共通。これが生成AIの共通の核。</div>

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

## 仕組みを2点に圧縮する

<div class="grid2">

<div class="cbox deep"><div class="h">① LLM＝確率的な次トークン予測</div><div class="b">

- <span class="red">“次の語を当て続けるだけ”</span>
- 語彙全体に確率を割り振り、1つ抽選して連結（＝自己回帰）
- 流暢でも正しさは別問題。誤りも“尤もらしさ”の帰結（ハルシネーション）

</div></div>

<div class="cbox blue"><div class="h">② 画像生成＝学んだものを作り直す</div><div class="b">

- <span class="red">“学んだものを作り直すだけ”</span>
- 画像（拡散モデル）も根は同じ。使う時は学ばない（学習と推論は別物）
- 出力のゆらぎは抽選と温度が生む“設計された仕様”

</div></div>

</div>

<div class="takeaway">仕組みの理解が、「生成AIの限界」を理解する土台になる。</div>

---

<!-- _class: summary -->

<div class="page-title">グレー事例を判定する</div>

## 例えば： Science の方針に当てはめると

<div style="font-size:19px; margin-top:4px;">
<table style="width:100%; border-collapse:collapse;">
<thead>
<tr style="background:#A33818; color:#fff;">
<th style="text-align:left; padding:7px 12px; border:1px solid #A33818;">AIの使い方</th>
<th style="padding:7px; border:1px solid #A33818; width:150px;">Science判定</th>
<th style="text-align:left; padding:7px 12px; border:1px solid #A33818;">条件・理由</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:6px 12px; border:1px solid #e6c4a8;">文献の検索・下調べに使う</td><td style="text-align:center; border:1px solid #e6c4a8; color:#1A6BB0; font-weight:800;">可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;">但し、事実は<b>自分で確認</b>する</td></tr>
<tr style="background:#FBF4EC;"><td style="padding:6px 12px; border:1px solid #e6c4a8;">言い回し・文法の校正</td><td style="text-align:center; border:1px solid #e6c4a8; color:#1A6BB0; font-weight:800;">軽微なら、可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;">文意を変えない範囲</td></tr>
<tr><td style="padding:6px 12px; border:1px solid #e6c4a8;">本文の執筆・翻訳・要約</td><td style="text-align:center; border:1px solid #e6c4a8; color:#A33818; font-weight:800;">要開示で可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;">cover letter＋謝辞、methodsに<b>プロンプト・モデル・版</b></td></tr>
<tr style="background:#FBF4EC;"><td style="padding:6px 12px; border:1px solid #e6c4a8;">解析コード・データの生成</td><td style="text-align:center; border:1px solid #e6c4a8; color:#A33818; font-weight:800;">要開示で可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;">開示したうえ、<b>結果を自分で検証</b></td></tr>
<tr><td style="padding:6px 12px; border:1px solid #e6c4a8;">図・画像をAIで生成</td><td style="text-align:center; border:1px solid #e6c4a8; color:#832D18; font-weight:800;">原則不可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;"><b>編集部の許可</b>が必要／データ改変は禁止</td></tr>
<tr style="background:#FBF4EC;"><td style="padding:6px 12px; border:1px solid #e6c4a8;">原稿をLLMに入れて査読・改訂</td><td style="text-align:center; border:1px solid #e6c4a8; color:#832D18; font-weight:800;">不可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;"><b>機密保持</b>に反する</td></tr>
<tr><td style="padding:6px 12px; border:1px solid #e6c4a8;">引用の捏造・データ改ざん</td><td style="text-align:center; border:1px solid #e6c4a8; color:#832D18; font-weight:800;">不可</td><td style="padding:6px 12px; border:1px solid #e6c4a8;"><b>研究不正</b></td></tr>
</tbody>
</table>
</div>

<div class="band">開示すれば使える領域と、<span class="red">図生成・査読投入・不正</span>の不可領域。なお<span class="red">AIは著者にできない</span>。</div>

<div class="attr">出典: Science Journals「Guidelines for AI use <a href="https://www.science.org/cms/asset/6eaae64d-ccef-41b2-acbf-72a77649def1/science_journals_guidelines_for_ai_use.pdf">science.org（PDF）</a></div>
