---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">伴走AIアプリ 構想</div><span class="hdr-event">アプリ計画とAIの振る舞い</span><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
html: true
style: |
  :root {
    --accent: #C8611C;
    --accent-dark: #8f3f12;
    --accent-soft: #FBEAD9;
    --section-bg: #FDF6F1;
    --hdr-left-w: 26%;
  }
  /* ヘッダー：右にイベント名ラベル、下線は全幅・前面 */
  section > header .hdr-event { margin-left: auto; align-self: center; margin-right: 14px;
    font-size: 16px; font-weight: 700; color: #6b6f76; white-space: nowrap; line-height: 1.15; }
  section > header .hdr-logo { margin-left: 0; }
  section .page-title { left: 24%; width: 38%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  h2 { color: var(--accent-dark); }
  /* 本文を縦中央寄せ */
  section.summary, section.split, section.wrap {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: stretch !important;
  }
  section.summary > h2, section.split > h2 { margin-bottom: 16px; }
  section.summary.jtop, section.split.jtop { justify-content: flex-start !important; }

  /* ===== 表紙 ===== */
  section.cover-hero { --hdr-left-w: 26%; }
  section.cover-hero .title-small { color: #2a2d33; font-size: 30px; }
  section.cover-hero .title-big { font-size: 58px; color: var(--accent); }
  section.cover-hero .title-event { color: var(--accent); }
  section.cover-hero .title-affil { font-size: 22px; color: #4a4f57; }

  /* ===== アジェンダ ===== */
  .agenda { display: flex; flex-direction: column; gap: 8px; margin-top: 2px; }
  .agenda-row { display: flex; align-items: center; gap: 20px; border: 1.5px solid #e6ded6; border-radius: 14px; padding: 7px 20px; background: #fff; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .agenda-left { flex: 0 0 200px; }
  .agenda-time { font-size: 18px; color: #6b6f76; font-weight: 700; margin-bottom: 3px; }
  .agenda-pill { font-size: 22px; font-weight: 800; text-align: center; border-radius: 10px; padding: 5px 0; line-height: 1.15; }
  .pill-1 { background: #FBEAD9; color: #9a4a12; }
  .pill-2 { background: #E7EAF3; color: #34406b; }
  .pill-3 { background: #E3F1EF; color: #0d5d55; }
  .pill-4 { background: #EDE7F6; color: #4a2f7a; }
  .pill-5 { background: #F1F2F4; color: #4a4f57; }
  .agenda-list { flex: 1; font-size: 19px; line-height: 1.45; }
  .agenda-list ul { margin: 0; padding: 0; list-style: none; }
  .agenda-list li { margin: 2px 0; position: relative; padding-left: 1.05em; }
  .agenda-list li::before { content: "−"; position: absolute; left: 0; color: #b3a89f; font-weight: 700; }

  /* ===== 3カード ===== */
  .cards3 { display: flex; gap: 14px; margin-top: 8px; }
  .card3 { flex: 1; border-radius: 14px; padding: 13px 17px; background: #fff; border: 1.5px solid #e7e2dd; box-shadow: 0 1px 5px rgba(0,0,0,.06); }
  .card3 .c3-h { font-size: 20px; font-weight: 800; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
  .card3 .c3-h .ic { font-size: 23px; }
  .card3 .c3-b { font-size: 18px; line-height: 1.5; color: #333; }
  .card3 .c3-b strong { color: var(--accent-dark); }
  .card-a { border-top: 5px solid var(--accent); } .card-a .c3-h { color: var(--accent-dark); }
  .card-b { border-top: 5px solid #1A6BB0; } .card-b .c3-h { color: #1A6BB0; }
  .card-c { border-top: 5px solid #0d7a6f; } .card-c .c3-h { color: #0d7a6f; }
  .card-d { border-top: 5px solid #6b4ea8; } .card-d .c3-h { color: #6b4ea8; }

  /* ===== 2列比較 ===== */
  .cmp { display: flex; gap: 16px; margin-top: 8px; align-items: stretch; }
  .cmp-col { flex: 1; border-radius: 14px; padding: 13px 19px; background: #F4F6F9; border: 1.5px solid #dfe4ea; }
  .cmp-col.good { background: var(--accent-soft); border-color: #f0d6bd; }
  .cmp-col .cmp-h { font-size: 21px; font-weight: 800; color: #34406b; margin-bottom: 7px; }
  .cmp-col.good .cmp-h { color: var(--accent-dark); }
  .cmp-col ul { margin: 0 0 0 1.1em; font-size: 18px; line-height: 1.5; }
  .cmp-col li { margin: 5px 0; }
  .cmp-col li strong { color: var(--accent-dark); }

  /* ===== フロー ===== */
  .flow { display: flex; align-items: stretch; gap: 7px; margin: 10px 0; }
  .flow .arrow { align-self: center; font-size: 22px; font-weight: 800; color: var(--accent); }
  .fstep { flex: 1; border-radius: 12px; padding: 10px 12px; background: #fff; border: 1.5px solid #e6ded6; }
  .fstep .fs-n { display: inline-block; font-size: 17px; font-weight: 800; color: #fff; background: var(--accent); border-radius: 999px; width: 28px; height: 28px; line-height: 28px; text-align: center; margin-bottom: 5px; }
  .fstep .fs-h { font-size: 19px; font-weight: 800; color: var(--accent-dark); line-height: 1.3; margin-bottom: 4px; }
  .fstep .fs-b { font-size: 18px; line-height: 1.42; color: #333; }

  /* ===== 表 ===== */
  .tbl { width: 100%; border-collapse: collapse; font-size: 18.5px; margin: 4px 0; }
  .tbl th { text-align: left; color: #fff; background: var(--accent); padding: 7px 11px; font-weight: 700; }
  .tbl td { border-bottom: 1px solid #eae4de; padding: 7px 11px; vertical-align: top; line-height: 1.4; }
  .tbl tr:nth-child(even) td { background: #FBF7F3; }
  .tbl td.lv { white-space: nowrap; font-weight: 800; color: var(--accent-dark); }
  .tbl td.c { text-align: center; }

  /* ===== 帯 ===== */
  .band { background: var(--accent-soft); border-left: 8px solid var(--accent); border-radius: 6px; padding: 10px 20px; margin: 10px 0; font-size: 20px; font-weight: 700; color: #2a2d33; }
  .band.blue { background: #EAF2FB; border-left-color: #1A6BB0; }
  .band.gray { background: #F1F2F4; border-left-color: #8a9098; }

  /* ===== 提案マーク・出典 ===== */
  /* grid/flex いずれの親でも伸びないよう start に固定（伸びると巨大な帯になる） */
  .propose { display: inline-block; align-self: start; justify-self: start; background: #6b4ea8; color: #fff; font-size: 18px; font-weight: 800; border-radius: 999px; padding: 3px 16px; margin-bottom: 8px; letter-spacing: .04em; }
  .srcline { font-size: 18px; color: #7a7378; margin-top: 8px; line-height: 1.45; }
  .srcline b { color: #5a5559; font-weight: 700; }

  .ok { color: #0F766E; font-weight: 700; }
  .ng { color: #C0392B; font-weight: 700; }
  .hl { color: var(--accent); font-weight: 700; }
  .hl-dark { color: var(--accent-dark); font-weight: 700; }

  /* ===== 図 ===== */
  section.fig .fig-area svg { max-height: 440px; max-width: 100%; width: auto; height: auto; }
  /* takeaway 付きの fig は本文が上詰めになり下に空白が出るので、本文ブロックごと中央へ */
  section.fig:has(.takeaway) .fig-area { margin-top: auto; }
  .fig-area table { font-size: 19px; }
  .fig-area td, .fig-area th { padding: 6px 10px; line-height: 1.35; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">全学の「伴走AI」を、どう作り、どう振る舞わせるか</div>
<div class="title-big">アプリ計画とAIの振る舞い</div>
</div>

<div class="title-foot">
<div class="title-photo">
<img src="../assets/profile.jpg" alt="田川 翔">
</div>
<div class="title-meta">
<div class="title-event">構想メモ ― 技術検討資料<br>作るものより先に、AIの「振る舞い」を決める</div>
<div class="title-date">2026/7/28（火）</div>
<div class="title-affil">千葉大学 国際未来教育基幹 / アカデミック・リンク・センター<br>田川 翔</div>
</div>
</div>

<!--
- 6/22 の基盤比較の続き。基盤の話は決着したので、今日はその上に載せる「アプリ」の話。
- ただし機能一覧ではなく、AIをどう振る舞わせるかを先に決めたい。ここが曖昧なまま作ると、運用で必ず止まる。
- 費用の試算は今日は出さない。振る舞いが決まってから積む。
-->

---

<!-- _class: summary -->

<div class="page-title">前提（動かさない条件）</div>

## 今日の議論の外側にあるもの

<div class="sections">

<div class="sec-box">

### 既にある土台

- Google Workspace を一部職員を除き全学運用
- Box が研究・業務データの中核ストレージ
- Office 365・既存SaaS（教務・人事給与等）も継続

</div>

<div class="sec-box">

### 決まっている方向（6/22 技術評価）

- GCP／Gemini を中核に、既存資産の上へ**薄く重ねる**
- 既存資産は動かさない（移行しない・置き換えない）
- 標準プロトコル（MCP・A2A）で可逆性を確保する

</div>

<div class="sec-box">

### このデックで決めたいこと

- ① 何を作るか（アプリの層構造・範囲・段階）
- ② AIをどう振る舞わせるか（自律度・権限・UX）
- ③ 何で動かすか（モデルの階層と差し替え方）

</div>

</div>

<!--
- 前提の確認。ゼロから作る話ではない。基盤は6/22で結論が出ている。
- 今日はその上に何を載せるかだけを扱う。基盤の再議論はしない。
- 3つ目が本題。特に②が今日の中心で、ここを決めないと調達も規程も書けない。
-->

---

<!-- _class: summary jtop -->

<div class="page-title">本日の流れ</div>

## 5つの論点 ── 計画 → 自律度 → 権限 → UX → モデル

<div class="agenda">

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">CHAPTER 1</div>
<div class="agenda-pill pill-1">アプリ計画</div>
</div>
<div class="agenda-list">
<ul>
<li>層構造：既存資産の上に、どこまで薄く作れるか</li>
<li>答える根拠：大学の知識グラフを土台に置く</li>
<li>機能スコープと、契約ゼロから始める段階導入</li>
</ul>
</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">CHAPTER 2</div>
<div class="agenda-pill pill-2">起案と承認</div>
</div>
<div class="agenda-list">
<ul>
<li>実行ループ：観測 → 起案 → <b>人の承認</b> → 実行 → 記録</li>
<li>自律度 L0〜L3 を定義し、業務ごとに割り当てる</li>
</ul>
</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">CHAPTER 3</div>
<div class="agenda-pill pill-3">権限とガードレール</div>
</div>
<div class="agenda-list">
<ul>
<li>AIは権限を増やさない（利用者の資格で動く）</li>
<li>データ3区分と、入口・出口・記録の3点セット</li>
</ul>
</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">CHAPTER 4</div>
<div class="agenda-pill pill-4">UXの振る舞い</div>
</div>
<div class="agenda-list">
<ul>
<li>いつ話しかけるか：呼べば出る／横で見ている／先回りする</li>
<li>利用者（学生・教員・職員）ごとの伴走の型</li>
</ul>
</div>
</div>

<div class="agenda-row">
<div class="agenda-left">
<div class="agenda-time">CHAPTER 5</div>
<div class="agenda-pill pill-5">モデルと可逆性</div>
</div>
<div class="agenda-list">
<ul>
<li>用途ごとにモデル階層を割り当て、差し替え可能に保つ</li>
</ul>
</div>
</div>

</div>

<!--
- 5章構成。1章が「何を作るか」、2〜4章が「どう振る舞わせるか」、5章が「何で動かすか」。
- 議論の時間を取りたいのは2章の自律度と3章の権限。ここが規程と直結する。
-->

---

<!-- _class: message -->

# 機能より先に、AIの振る舞いを決める

## 振る舞いが曖昧な機能は、必ず運用の途中で止まる

<!--
- ここで一拍。機能一覧から入ると、必ず「で、これは誰が責任を取るのか」で止まる。
- 先に決めるべきは、AIがどこまで自分で決めてよいか、何を見てよいか、いつ話しかけてよいか。
- この3つが決まれば、機能は後から足せる。逆は成り立たない。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# アプリ計画 ― 何を作るか

## 既存資産の上に、どこまで薄く重ねられるか

<!--
- まず作るものの形。ポータルの追加ではなく、既存資産に薄く重ねる層として設計する。
- 厚くなるのはアプリではなく、知識の土台とガバナンスの側。
-->

---

<!-- _class: fig -->

<div class="page-title">アプリの全体像</div>

## 5層構成 ── 厚いのは「知識」と「ガバナンス」

<div class="fig-area">

<svg viewBox="0 0 1240 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="upA" markerWidth="10" markerHeight="10" refX="3" refY="2" orient="auto"><path d="M0 5 L3 0 L6 5 Z" fill="#C8611C"/></marker>
  </defs>
  <line x1="44" y1="470" x2="44" y2="40" stroke="#C8611C" stroke-width="3" marker-end="url(#upA)"/>
  <text x="24" y="255" font-size="12" fill="#8f3f12" text-anchor="middle" transform="rotate(-90 24 255)">下→上に、答えの根拠が積み上がる</text>
  <rect x="1006" y="24" width="208" height="448" rx="12" fill="#FBEAD9" stroke="#C8611C" stroke-width="1.5"/>
  <text x="1090" y="248" font-size="18" font-weight="700" fill="#8f3f12" text-anchor="middle" transform="rotate(-90 1090 248)">承認・権限・監査ログ</text>
  <text x="1124" y="248" font-size="12.5" fill="#9a5224" text-anchor="middle" transform="rotate(-90 1124 248)">全層を貫く（誰が何をしたかを残す）</text>
  <rect x="66" y="24" width="924" height="80" rx="12" fill="#FDF4EC" stroke="#C8611C" stroke-width="1.5"/>
  <text x="88" y="60" font-size="16" font-weight="700" fill="#8f3f12">利用・UI</text>
  <text x="88" y="82" font-size="12" fill="#6b7280">（出口）</text>
  <text x="270" y="58" font-size="15" fill="#1f2937">学生アプリ（スマホ）　｜　教員・職員のWeb</text>
  <text x="270" y="84" font-size="15" fill="#1f2937">既存ツールの中（Workspace / Office / Box）にも同じAIを出す</text>
  <rect x="66" y="116" width="924" height="80" rx="12" fill="#C8611C"/>
  <text x="88" y="152" font-size="16" font-weight="700" fill="#ffffff">AI・</text>
  <text x="88" y="174" font-size="16" font-weight="700" fill="#ffffff">エージェント</text>
  <text x="300" y="150" font-size="15" fill="#ffffff">伴走エージェント群（学修 ／ 研究 ／ 事務）</text>
  <text x="300" y="176" font-size="15" fill="#f7dcc6">起案 → 人の承認 → 実行 → 記録　のループで動く（CHAPTER 2）</text>
  <rect x="66" y="208" width="924" height="70" rx="12" fill="#FBEAD9" stroke="#C8611C" stroke-width="1.5"/>
  <text x="88" y="240" font-size="16" font-weight="700" fill="#8f3f12">知識の土台</text>
  <text x="88" y="262" font-size="12" fill="#6b7280">答える根拠</text>
  <text x="300" y="249" font-size="15" fill="#1f2937">大学の知識グラフ（科目・到達目標・概念の関係）／ 重い分析だけ BigQuery</text>
  <rect x="66" y="290" width="924" height="70" rx="12" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="1.5"/>
  <text x="88" y="331" font-size="16" font-weight="700" fill="#1A4A7A">連携</text>
  <text x="300" y="322" font-size="15" fill="#1f2937">ネイティブコネクタ（Box / Workspace / SharePoint 等）／ MCP・A2A（標準）</text>
  <text x="300" y="346" font-size="15" fill="#1f2937">既存の権限を、そのまま上へ持ち上げる（作り直さない）</text>
  <rect x="66" y="372" width="924" height="100" rx="12" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="88" y="414" font-size="16" font-weight="700" fill="#374151">既存資産</text>
  <text x="88" y="436" font-size="12" fill="#6b7280">残す・移行しない</text>
  <rect x="300" y="392" width="200" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="400" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">教務・学務システム</text>
  <text x="400" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">シラバス・履修・規程</text>
  <rect x="516" y="392" width="200" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="616" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">Box</text>
  <text x="616" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">研究・業務データ（永続）</text>
  <rect x="732" y="392" width="238" height="60" rx="8" fill="#ffffff" stroke="#cbd5cf" stroke-width="1.2"/>
  <text x="851" y="418" font-size="14" font-weight="700" fill="#1f2937" text-anchor="middle">Workspace / Office</text>
  <text x="851" y="438" font-size="11.5" fill="#6b7280" text-anchor="middle">Gmail / Drive / Word / Excel</text>
</svg>

</div>

<div class="takeaway">アプリは薄い。厚いのは「知識の土台」と「ガバナンス」</div>

<!--
- 6/22 の構成図と同じ形にしてある。最下層の既存資産は動かさない。
- 変えたのは上2層。エージェント層に「起案→承認→実行→記録」のループを明示し、その下に知識の土台を独立させた。
- ここが今日の主張。アプリのUIは薄くてよい。投資すべきは知識の土台と、右の縦串（承認・権限・ログ）。
-->

---

<!-- _class: summary -->

<div class="page-title">知識の土台</div>

## なぜ「大学の知識グラフ」を先に作るのか

<div class="propose">設計試案</div>

<div class="flow">
<div class="fstep">
<span class="fs-n">1</span>
<div class="fs-h">既存データの棚卸し</div>
<div class="fs-b">シラバス・履修規程・ナンバリング・カリキュラムマップ</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">2</span>
<div class="fs-h">正規化</div>
<div class="fs-b">科目を一意IDに。<strong>ナンバリングをIDの土台</strong>に使えるか</div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">3</span>
<div class="fs-h">LLM抽出</div>
<div class="fs-b">到達目標・授業計画から概念を抽出。<strong>必ず原文引用を付す</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">4</span>
<div class="fs-h">統合・検証</div>
<div class="fs-b">同名概念を学部横断で統合。前提関係に<strong>閉路検出</strong></div>
</div>
<span class="arrow">▶</span>
<div class="fstep">
<span class="fs-n">5</span>
<div class="fs-h">教員による確認</div>
<div class="fs-b"><strong>自分の科目だけ</strong>を各教員が確認。全数は見ない</div>
</div>
</div>

<div class="band">グラフを渡さずに履修相談をさせるのは危険 ── 最新モデルでも<b>科目の前提関係は 34.8%（EM）</b>しか当てられない</div>

<div class="srcline"><b>出典</b>：Liang, H. et al. (2026). K12-KGraph. arXiv:2605.09635v3（Gemini-3-Flash：Prereq EM 34.8 / 全体 EM 57.1）。パイプラインは 7/29 ゼミ資料「大学オントロジー」の設計試案より。</div>

<!--
- なぜ知識グラフを先に作るか。答えは「AIに大学を語らせたいのではなく、語る根拠を持たせたい」から。
- 中央の帯が根拠。最新モデルでも科目の前提関係は34.8%しか当てられない。もっともらしいが正しくない履修助言が返る。
- 5段階のうち5番目が肝。全数検証は無理なので、各教員が自分の科目だけを見る。1人あたり数分で済む。
- 詳細は7/29のゼミ資料。ここでは「アプリの土台として要る」という位置づけだけ押さえる。
-->

---

<!-- _class: summary -->

<div class="page-title">誰の何が変わるか</div>

## 4つの立場から見た「作ったら何が変わるか」

<div class="cards3">
<div class="card3 card-a">
<div class="c3-h"><span class="ic">🎓</span>学生：履修と研究</div>
<div class="c3-b">「この研究をしたい」から<strong>逆算した履修経路</strong>を提示。<br>一般論ではなく<span class="hl">自大学の実在科目で</span>答える</div>
</div>
<div class="card3 card-b">
<div class="c3-h"><span class="ic">🧭</span>教員：時間の回復</div>
<div class="c3-b">申請書・様式の<strong>下書きをAIが起案</strong>。<br>新設科目が<strong>どこと重複し、どこが空白か</strong>を機械が指摘</div>
</div>
<div class="card3 card-c">
<div class="c3-h"><span class="ic">🏢</span>職員：定型の圧縮</div>
<div class="c3-b">規程・手続きの問い合わせに<strong>出典付きで一次回答</strong>。<br>定型申請は<span class="hl">承認を受けてAIが実行</span></div>
</div>
<div class="card3 card-d">
<div class="c3-h"><span class="ic">📋</span>大学：説明できる状態</div>
<div class="c3-b">DPと科目の対応を<strong>手作業の表から自動生成</strong>へ。<br>誰が何を承認したかが<strong>常にログに残る</strong></div>
</div>
</div>

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">この4つに共通する条件</div>
<ul>
<li><strong>答えに根拠が付く</strong>こと。出典の無い回答は出さない設計にする</li>
<li><strong>決めるのは人</strong>であること。AIは案を出すところまでを既定にする</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">最初からは狙わないもの</div>
<ul>
<li><strong>成績・評価の判断</strong>。個人の不利益に直結する判断はAIに渡さない</li>
<li><strong>全学一斉の自動処理</strong>。範囲を限らない自動実行は作らない</li>
</ul>
</div>
</div>

<!--
- 受益者は4者。ゼミ資料のユースケースを、アプリの機能として読み替えたもの。
- 下段が重要。4つに共通する条件が「根拠が付く」「決めるのは人」。この2つを外すと全部が危うくなる。
- 右下は最初から線を引いておく。成績判断と全学一斉の自動処理は、少なくとも初期スコープに入れない。
-->

---

<!-- _class: fig -->

<div class="page-title">機能スコープ</div>

## 何をやらせ、何を初期に含めるか

<div class="fig-area">

<table class="tbl">
<tr><th>機能</th><th>主な利用者</th><th>AIがすること</th><th>初期</th></tr>
<tr><td>規程・手続きの質問応答</td><td>学生・職員</td><td>出典を付けて答える</td><td class="c"><span class="ok">✓</span></td></tr>
<tr><td>履修・研究計画の相談</td><td>学生</td><td>知識グラフで裏取りして答える</td><td class="c"><span class="ok">✓</span></td></tr>
<tr><td>申請書・通知文の下書き</td><td>教員・職員</td><td>起案する（決めない）</td><td class="c"><span class="ok">✓</span></td></tr>
<tr><td>授業設計・重複チェック</td><td>教員</td><td>構造を照合して指摘する</td><td class="c">次期</td></tr>
<tr><td>定型申請の処理</td><td>職員</td><td>承認を受けてから実行する</td><td class="c">次期</td></tr>
<tr><td>締切・要件変更の通知</td><td>全員</td><td>先回りして知らせる</td><td class="c">次期</td></tr>
</table>

</div>

<div class="caption">初期＝知識グラフと権限継承さえあれば動く機能。次期＝書き込み・通知を伴い、規程の整備が要る機能</div>

<div class="takeaway">初期は「読んで答える・下書きする」まで。書き込みは次期</div>

<!--
- 初期3つは全部「読む」と「書く前」で止まる。だから規程を待たずに始められる。
- 次期3つは書き込みか通知を伴うので、承認の仕組みと利用規約が要る。ここが2章と3章の議題。
- 分け方の基準は難易度ではなく「取り返しがつくかどうか」。
-->

---

<!-- _class: fig -->

<div class="page-title">段階導入</div>

## 契約ゼロのPoCから、書き込みへ

<div class="fig-area">

<svg viewBox="0 0 1120 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="stA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#C8611C"/></marker>
  </defs>
  <rect x="30" y="232" width="230" height="78" rx="10" fill="#FBEAD9" stroke="#C8611C" stroke-width="1.5"/>
  <text x="145" y="262" font-size="15" fill="#8f3f12" text-anchor="middle" font-weight="700">STEP 1　読むだけ</text>
  <text x="145" y="286" font-size="13" fill="#1f2937" text-anchor="middle">既存データに聞くPoC</text>
  <text x="145" y="304" font-size="11.5" fill="#6b7280" text-anchor="middle">追加契約ゼロで試す</text>
  <rect x="290" y="176" width="230" height="78" rx="10" fill="#F5D0AE" stroke="#C8611C" stroke-width="1.5"/>
  <text x="405" y="206" font-size="15" fill="#8f3f12" text-anchor="middle" font-weight="700">STEP 2　起案まで</text>
  <text x="405" y="230" font-size="13" fill="#1f2937" text-anchor="middle">下書きを作らせ人が直す</text>
  <text x="405" y="248" font-size="11.5" fill="#6b7280" text-anchor="middle">まだ何も書き込まない</text>
  <rect x="550" y="120" width="230" height="78" rx="10" fill="#E09B5F" stroke="#C8611C" stroke-width="1.5"/>
  <text x="665" y="150" font-size="15" fill="#4a2308" text-anchor="middle" font-weight="700">STEP 3　承認付き実行</text>
  <text x="665" y="174" font-size="13" fill="#2a1a0c" text-anchor="middle">範囲を限って書き込み解禁</text>
  <text x="665" y="192" font-size="11.5" fill="#4a2308" text-anchor="middle">1業務・1部署から</text>
  <rect x="810" y="64" width="240" height="78" rx="10" fill="#C8611C"/>
  <text x="930" y="94" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">STEP 4　現場が自作</text>
  <text x="930" y="118" font-size="13" fill="#fdece0" text-anchor="middle">ノーコードで横展開</text>
  <text x="930" y="136" font-size="11.5" fill="#f5cfb4" text-anchor="middle">全学・基幹連携へ</text>
  <line x1="260" y1="271" x2="288" y2="217" stroke="#C8611C" stroke-width="2.5" marker-end="url(#stA)"/>
  <line x1="520" y1="215" x2="548" y2="161" stroke="#C8611C" stroke-width="2.5" marker-end="url(#stA)"/>
  <line x1="780" y1="159" x2="808" y2="105" stroke="#C8611C" stroke-width="2.5" marker-end="url(#stA)"/>
  <line x1="20" y1="320" x2="1090" y2="320" stroke="#cbd5cf" stroke-width="2"/>
  <text x="145" y="344" font-size="12" fill="#6b7280" text-anchor="middle">取り返しがつく</text>
  <text x="405" y="344" font-size="12" fill="#6b7280" text-anchor="middle">まだ取り返しがつく</text>
  <text x="665" y="344" font-size="12" fill="#6b7280" text-anchor="middle">承認が要る</text>
  <text x="930" y="344" font-size="12" fill="#6b7280" text-anchor="middle">規程が要る</text>
</svg>

</div>

<div class="takeaway">段は「難しさ」ではなく「取り返しのつかなさ」で刻む</div>

<!--
- 段階の刻み方に思想を入れている。難易度順ではなく、取り返しのつかなさ順。
- STEP1は読むだけなので、追加契約なしで今日から試せる。STEP2までは何も書き込まない。
- 書き込みが入るSTEP3から、承認の仕組みと規程が必要になる。ここで一度立ち止まって判断を仰ぐ。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# AIの振る舞い ① 起案と承認

## どこまで自分で決めさせ、どこで人が止めるか

<!--
- ここからが本題。AIがどこまで自分で決めてよいかを、業務ごとに明示的に決める。
- 「AIが賢いから任せる」ではなく「取り返しがつくから任せる」で線を引く。
-->

---

<!-- _class: fig -->

<div class="page-title">実行ループ</div>

## エージェントは6段のループで動く（承認を必ず通す）

<div class="fig-area">

<svg viewBox="0 0 1240 420" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="lpA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#C8611C"/></marker>
    <marker id="lpB" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9aa0a6"/></marker>
  </defs>
  <rect x="30" y="24" width="160" height="140" rx="10" fill="#fff" stroke="#C8611C" stroke-width="1.5"/>
  <text x="110" y="62" font-size="18" fill="#8f3f12" text-anchor="middle" font-weight="700">① きっかけ</text>
  <text x="110" y="100" font-size="15" fill="#1f2937" text-anchor="middle">締切・変更・質問</text>
  <text x="110" y="128" font-size="15" fill="#6b7280" text-anchor="middle">人が呼ぶ or 予定</text>
  <line x1="192" y1="94" x2="232" y2="94" stroke="#C8611C" stroke-width="2.5" marker-end="url(#lpA)"/>
  <rect x="234" y="24" width="160" height="140" rx="10" fill="#fff" stroke="#C8611C" stroke-width="1.5"/>
  <text x="314" y="62" font-size="18" fill="#8f3f12" text-anchor="middle" font-weight="700">② 理解・計画</text>
  <text x="314" y="100" font-size="15" fill="#1f2937" text-anchor="middle">何が要るかを分解</text>
  <text x="314" y="128" font-size="15" fill="#6b7280" text-anchor="middle">知識グラフを引く</text>
  <line x1="396" y1="94" x2="436" y2="94" stroke="#C8611C" stroke-width="2.5" marker-end="url(#lpA)"/>
  <rect x="438" y="24" width="160" height="140" rx="10" fill="#fff" stroke="#C8611C" stroke-width="1.5"/>
  <text x="518" y="62" font-size="18" fill="#8f3f12" text-anchor="middle" font-weight="700">③ 起案</text>
  <text x="518" y="100" font-size="15" fill="#1f2937" text-anchor="middle">下書き＋根拠を出す</text>
  <text x="518" y="128" font-size="15" fill="#6b7280" text-anchor="middle">まだ何も起きない</text>
  <line x1="600" y1="94" x2="640" y2="94" stroke="#C8611C" stroke-width="2.5" marker-end="url(#lpA)"/>
  <rect x="642" y="24" width="160" height="140" rx="10" fill="#C8611C"/>
  <text x="722" y="62" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="700">④ 人の承認</text>
  <text x="722" y="100" font-size="15" fill="#ffffff" text-anchor="middle">誰が承認したかを</text>
  <text x="722" y="128" font-size="15" fill="#f7dcc6" text-anchor="middle">記録して初めて進む</text>
  <line x1="804" y1="94" x2="844" y2="94" stroke="#C8611C" stroke-width="2.5" marker-end="url(#lpA)"/>
  <rect x="846" y="24" width="160" height="140" rx="10" fill="#fff" stroke="#C8611C" stroke-width="1.5"/>
  <text x="926" y="62" font-size="18" fill="#8f3f12" text-anchor="middle" font-weight="700">⑤ 実行</text>
  <text x="926" y="100" font-size="15" fill="#1f2937" text-anchor="middle">書き込み・送信・登録</text>
  <text x="926" y="128" font-size="15" fill="#6b7280" text-anchor="middle">利用者の資格で行う</text>
  <line x1="1008" y1="94" x2="1048" y2="94" stroke="#C8611C" stroke-width="2.5" marker-end="url(#lpA)"/>
  <rect x="1050" y="24" width="160" height="140" rx="10" fill="#fff" stroke="#C8611C" stroke-width="1.5"/>
  <text x="1130" y="62" font-size="18" fill="#8f3f12" text-anchor="middle" font-weight="700">⑥ 記録・説明</text>
  <text x="1130" y="100" font-size="15" fill="#1f2937" text-anchor="middle">何をしたかを残す</text>
  <text x="1130" y="128" font-size="15" fill="#6b7280" text-anchor="middle">後から追跡できる</text>
  <path d="M722 164 L722 250 L318 250" stroke="#9aa0a6" stroke-width="2.2" fill="none" stroke-dasharray="6 4"/>
  <path d="M318 250 L314 250 L314 170" stroke="#9aa0a6" stroke-width="2.2" fill="none" stroke-dasharray="6 4" marker-end="url(#lpB)"/>
  <text x="520" y="240" font-size="16" fill="#6b7280" text-anchor="middle">差し戻し・却下 → ②に戻して作り直す</text>
  <path d="M1130 164 L1130 330 L114 330" stroke="#C8611C" stroke-width="2.2" fill="none"/>
  <path d="M114 330 L110 330 L110 170" stroke="#C8611C" stroke-width="2.2" fill="none" marker-end="url(#lpA)"/>
  <text x="620" y="358" font-size="16" fill="#8f3f12" text-anchor="middle">次のきっかけへ（記録が次の判断材料になる）</text>
</svg>

</div>

<div class="takeaway">④を通らない経路は、既定では作らない</div>

<!--
- 6段のループ。技術的には③と⑤の間に④を必ず挟むというだけの設計。
- 重要なのは③で止まること。起案の時点では何も起きていないので、間違えても損失がない。
- 破線の差し戻しは②へ戻す。①へ戻さないのは、きっかけ自体は変わっていないから。
- テイクアウェイが調達仕様にも書くべき一文。④を飛ばす経路を作らない。
-->

---

<!-- _class: fig -->

<div class="page-title">自律度の定義</div>

## L0〜L3 ── 業務ごとに、どの段まで許すか

<div class="fig-area">

<table class="tbl">
<tr><th>段階</th><th>AIができること</th><th>人の関与</th><th>適用してよい業務の例</th><th>残す記録</th></tr>
<tr><td class="lv">L0 参照</td><td>読んで答えるだけ</td><td>使う人が読んで判断</td><td>規程・シラバスの質問応答</td><td>参照元</td></tr>
<tr><td class="lv">L1 提案</td><td>案・候補を出す</td><td>人が採否を決める</td><td>履修相談・科目の重複指摘</td><td>案と根拠</td></tr>
<tr><td class="lv">L2 起案</td><td>下書きを作る</td><td>人が直して提出する</td><td>申請書・通知文・議事メモ</td><td>差分</td></tr>
<tr><td class="lv">L3 実行</td><td>承認後に書き込む</td><td>人が事前に承認する</td><td>定型申請・登録の代行</td><td>承認者と時刻</td></tr>
</table>

</div>

<div class="band gray">L4（承認なしの自動実行）は当面つくらない ── 必要になった時に、業務を限って個別に判断する</div>

<div class="takeaway">機能ごとに L を明記する。既定は L1、書き込みは L3 のみ</div>

<!--
- 4段の定義。機能一覧に必ずこのLを併記する運用にしたい。仕様書にも調達仕様にも入れる。
- L2とL3の差が決定的。L2までは人が最終的に手を動かすので、AIの誤りは人のレビューで止まる。
- L3は人が事前に承認するが、手は動かさない。だから承認の粒度設計が要る。1件ごとか、条件付き一括か。
- L4は作らない。ここは明示的に宣言しておく方が、後の議論が楽になる。
-->

---

<!-- _class: summary -->

<div class="page-title">迷った時・間違えた時</div>

## 「正しく答える」より「間違い方を決める」

<div class="sections">

<div class="sec-box">

### 分からない時

- 「分からない」「規程に定めが無い」と**言い切る**
- 推測で埋めない。**足りない情報を人に聞き返す**
- 該当が無ければ**担当窓口へ引き継ぐ**

</div>

<div class="sec-box">

### 答える時

- **必ず出典を付ける**（規程の条項・シラバスの原文）
- 知識グラフに無い関係は<strong>「無い」と示す</strong>
- 古い情報は**年度を明示**して答える

</div>

<div class="sec-box">

### 間違えた時

- 実行前なら**差し戻し**、実行後なら**取り消し手順**を用意
- 誤りは**記録して次の判断材料**にする
- 同じ誤りが続く機能は**Lを下げて**運用を続ける

</div>

</div>

<!--
- 生成AIの導入で一番揉めるのがここ。「正しく答えるか」ではなく「間違え方が設計されているか」。
- 左：分からない時に黙って推測するのが最悪。言い切って聞き返すか、人に渡す。
- 中：出典の義務化。知識グラフを作る理由もここにある。「グラフに無い」と言えることが検証可能性になる。
- 右：Lを下げて運用を続けられる、というのが効く。止めるか続けるかの二択にしない。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# AIの振る舞い ② 権限とガードレール

## 何を見てよいか ── AIは権限を増やさない

<!--
- 3章は権限。ここが情報部門にとって最大の関心事だと思う。
- 結論を先に言うと「AIに権限を持たせない」。利用者の資格を借りて動かす。
-->

---

<!-- _class: fig -->

<div class="page-title">権限継承</div>

## AIに権限を持たせず、利用者の資格で動かす

<div class="fig-area">

<svg viewBox="0 0 1240 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="pgA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#1f8f6e"/></marker>
    <marker id="pgB" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#C0392B"/></marker>
  </defs>
  <text x="40" y="30" font-size="19" font-weight="700" fill="#1f8f6e">採る設計 ── AIは利用者の資格を借りて動く</text>
  <rect x="40" y="46" width="180" height="88" rx="10" fill="#E4F2EC" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="130" y="82" font-size="15" fill="#125642" text-anchor="middle" font-weight="700">利用者</text>
  <text x="130" y="106" font-size="12.5" fill="#1f2937" text-anchor="middle">学生・教員・職員</text>
  <line x1="224" y1="90" x2="264" y2="90" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#pgA)"/>
  <rect x="268" y="46" width="240" height="88" rx="10" fill="#fff" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="388" y="82" font-size="15" fill="#125642" text-anchor="middle" font-weight="700">AIエージェント</text>
  <text x="388" y="106" font-size="12.5" fill="#1f2937" text-anchor="middle">固有の権限を持たない</text>
  <line x1="512" y1="90" x2="552" y2="90" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#pgA)"/>
  <rect x="556" y="46" width="250" height="88" rx="10" fill="#fff" stroke="#1f8f6e" stroke-width="1.5"/>
  <text x="681" y="82" font-size="15" fill="#125642" text-anchor="middle" font-weight="700">参照できる範囲</text>
  <text x="681" y="106" font-size="12.5" fill="#1f2937" text-anchor="middle">＝ その人が見える範囲と同一</text>
  <line x1="810" y1="90" x2="850" y2="90" stroke="#1f8f6e" stroke-width="2.5" marker-end="url(#pgA)"/>
  <rect x="854" y="46" width="342" height="88" rx="10" fill="#1f8f6e"/>
  <text x="1025" y="82" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="700">AIは権限を増やさない</text>
  <text x="1025" y="108" font-size="12.5" fill="#d7efe6" text-anchor="middle">見えない資料は「無い」と答える／ログは個人に紐づく</text>
  <line x1="40" y1="176" x2="1200" y2="176" stroke="#e3e7ea" stroke-width="1"/>
  <text x="40" y="216" font-size="19" font-weight="700" fill="#C0392B">採らない設計 ── AIに強い共通権限を持たせる</text>
  <rect x="40" y="232" width="180" height="88" rx="10" fill="#f3f4f6" stroke="#9aa0a6" stroke-width="1.5"/>
  <text x="130" y="268" font-size="15" fill="#374151" text-anchor="middle" font-weight="700">利用者</text>
  <text x="130" y="292" font-size="12.5" fill="#6b7280" text-anchor="middle">学生・教員・職員</text>
  <line x1="224" y1="276" x2="264" y2="276" stroke="#C0392B" stroke-width="2.5" marker-end="url(#pgB)"/>
  <rect x="268" y="232" width="240" height="88" rx="10" fill="#FCEBEA" stroke="#C0392B" stroke-width="1.6"/>
  <text x="388" y="268" font-size="15" fill="#8a2620" text-anchor="middle" font-weight="700">AIエージェント</text>
  <text x="388" y="292" font-size="12.5" fill="#1f2937" text-anchor="middle">全学を読める共通権限</text>
  <line x1="512" y1="276" x2="552" y2="276" stroke="#C0392B" stroke-width="2.5" marker-end="url(#pgB)"/>
  <rect x="556" y="232" width="250" height="88" rx="10" fill="#FCEBEA" stroke="#C0392B" stroke-width="1.6"/>
  <text x="681" y="268" font-size="15" fill="#8a2620" text-anchor="middle" font-weight="700">参照できる範囲</text>
  <text x="681" y="292" font-size="12.5" fill="#1f2937" text-anchor="middle">＝ 全学のデータ（誰が使っても）</text>
  <line x1="810" y1="276" x2="850" y2="276" stroke="#C0392B" stroke-width="2.5" marker-end="url(#pgB)"/>
  <rect x="854" y="232" width="342" height="88" rx="10" fill="#C0392B"/>
  <text x="1025" y="268" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="700">誰が何を見たか説明できない</text>
  <text x="1025" y="294" font-size="12.5" fill="#f7d7d3" text-anchor="middle">1つの設定ミスが全学に及ぶ／監査に耐えない</text>
</svg>

</div>

<div class="takeaway">権限はAIに与えず、既存の権限をそのまま持ち上げる</div>

<!--
- 上下で対比。上が採る設計、下が採らない設計。
- 技術的には、コネクタが元システムの権限を継承する構成にする。BoxならBoxの権限をそのまま使う。
- 下の設計は一見便利だが、監査に耐えない。誰が何を見たかが説明できない。
- 「見えない資料は無いと答える」は、実は2章の間違い方の設計とも繋がっている。
-->

---

<!-- _class: fig -->

<div class="page-title">データ区分</div>

## 3区分 ── AIに何を渡してよいか

<div class="fig-area">

<table class="tbl">
<tr><th>区分</th><th>中身の例</th><th>AIの扱い</th><th>置き場</th></tr>
<tr><td class="lv">L1 公開</td><td>シラバス・規程・お知らせ・公開資料</td><td>自由に参照して答えてよい</td><td>知識グラフに取り込む</td></tr>
<tr><td class="lv">L2 学内秘</td><td>個人の履修・指導記録・研究進捗</td><td>本人と権限者の範囲でのみ参照</td><td>元システムに置いたまま参照</td></tr>
<tr><td class="lv">L3 極秘</td><td>未公開特許・契約上の機密</td><td><span class="ng">アプリへの入力を禁止</span></td><td>持ち込まない</td></tr>
</table>

</div>

<div class="band">誤ってL3が入力された時は<b>自動で検知して除去し、L2として隔離</b>。入力した本人に通知し、以降の学習・共有には回さない</div>

<div class="takeaway">L1は取り込む、L2は元の場所を見る、L3は入れない</div>

<!--
- 区分の考え方は6/11の理事会ブリーフと同じ3層。今回はAI側の扱いと置き場を明示した。
- 効くのはL2の行。取り込まずに元システムを見に行くので、権限が自動的に効くしコピーも増えない。
- L3は禁止だが、禁止しただけでは事故は防げないので、下の帯の検知・隔離をセットにする。
- 「以降の学習・共有には回さない」は、規程と契約の両方に書く必要がある。
-->

---

<!-- _class: summary -->

<div class="page-title">ガードレール</div>

## 入口・出口・記録の3点で挟む

<div class="sections">

<div class="sec-box">

### 入口（何を入れさせないか）

- L3の混入を**検知して除去**する
- 個人情報は**必要最小限**に絞って渡す
- 外部からの指示文の**混入を無効化**する

</div>

<div class="sec-box">

### 出口（何を出させないか）

- 出典の無い断定を**出させない**
- 権限外の内容は**要約でも出さない**
- 個人の評価・選抜の**判断は返さない**

</div>

<div class="sec-box">

### 記録（何を残すか）

- 何を参照し、何を根拠にしたか
- 誰が・いつ・何を**承認**したか
- 実行した処理と、**取り消し**の可否

</div>

</div>

<!--
- ガードレールは3点で挟む。入口・出口・記録。どれか1つでは足りない。
- 入口の3つ目が「外部からの指示文の混入を無効化」。取り込んだ文書の中に指示が書いてあっても従わせない、という話。
- 出口の2つ目が地味に重要。権限外の内容を要約なら出してよい、としてしまうと権限継承が崩れる。
- 記録は監査のためだけではない。2章の「間違えた時」で、Lを下げる判断の材料になる。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 4</div>

# AIの振る舞い ③ UXの設計

## いつ話しかけ、どこまで先回りしてよいか

<!--
- 4章はUX。技術の話ではなく、体験としての振る舞い。
- ここを決めないと、便利どころか鬱陶しいものができる。
-->

---

<!-- _class: fig -->

<div class="page-title">3つの介入モード</div>

## 呼べば出る／横で見ている／先回りする

<div class="fig-area">

<svg viewBox="0 0 1240 430" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="uxA" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#8f3f12"/></marker>
  </defs>
  <rect x="40" y="20" width="360" height="300" rx="14" fill="#F7FAF9" stroke="#1f8f6e" stroke-width="1.8"/>
  <text x="220" y="70" font-size="24" font-weight="700" fill="#125642" text-anchor="middle">① 呼べば出る</text>
  <text x="220" y="100" font-size="15" fill="#6b7280" text-anchor="middle">On-demand ／ 既定のモード</text>
  <text x="220" y="160" font-size="17" fill="#1f2937" text-anchor="middle">使う人が呼んだ時だけ答える</text>
  <text x="220" y="206" font-size="17" fill="#1f2937" text-anchor="middle">例：規程・履修の質問に答える</text>
  <text x="220" y="256" font-size="16" fill="#125642" text-anchor="middle" font-weight="700">同意は利用開始時の1回でよい</text>
  <text x="220" y="294" font-size="15" fill="#6b7280" text-anchor="middle">自律度 L0〜L1</text>
  <rect x="440" y="20" width="360" height="300" rx="14" fill="#FDF4EC" stroke="#C8611C" stroke-width="1.8"/>
  <text x="620" y="70" font-size="24" font-weight="700" fill="#8f3f12" text-anchor="middle">② 横で見ている</text>
  <text x="620" y="100" font-size="15" fill="#6b7280" text-anchor="middle">Ambient ／ 作業画面の中</text>
  <text x="620" y="160" font-size="17" fill="#1f2937" text-anchor="middle">作業中の画面で候補を出す</text>
  <text x="620" y="206" font-size="17" fill="#1f2937" text-anchor="middle">例：申請書・シラバスの下書き</text>
  <text x="620" y="256" font-size="16" fill="#8f3f12" text-anchor="middle" font-weight="700">出すのは候補まで。決めるのは人</text>
  <text x="620" y="294" font-size="15" fill="#6b7280" text-anchor="middle">自律度 L2</text>
  <rect x="840" y="20" width="360" height="300" rx="14" fill="#FBEAD9" stroke="#8f3f12" stroke-width="1.8"/>
  <text x="1020" y="70" font-size="24" font-weight="700" fill="#6b2f0c" text-anchor="middle">③ 先回りする</text>
  <text x="1020" y="100" font-size="15" fill="#6b7280" text-anchor="middle">Proactive ／ AIから声をかける</text>
  <text x="1020" y="160" font-size="17" fill="#1f2937" text-anchor="middle">きっかけを検知して通知する</text>
  <text x="1020" y="206" font-size="17" fill="#1f2937" text-anchor="middle">例：締切・要件変更の知らせ</text>
  <text x="1020" y="256" font-size="16" fill="#6b2f0c" text-anchor="middle" font-weight="700">機能ごとの個別オプトインが要る</text>
  <text x="1020" y="294" font-size="15" fill="#6b7280" text-anchor="middle">自律度 L2〜L3</text>
  <line x1="40" y1="366" x2="1200" y2="366" stroke="#C8611C" stroke-width="2.5" marker-end="url(#uxA)"/>
  <text x="60" y="400" font-size="16" fill="#6b7280">静か・低リスク</text>
  <text x="620" y="400" font-size="16" fill="#8f3f12" text-anchor="middle" font-weight="700">右にいくほど、同意の粒度を細かくし、切れるようにする</text>
  <text x="1190" y="400" font-size="16" fill="#6b2f0c" text-anchor="end" font-weight="700">積極的・要同意</text>
</svg>

</div>

<div class="takeaway">既定は①。②③は機能ごとに、利用者が個別に切れること</div>

<!--
- 3モード。左ほど静かで、右ほど積極的。積極的なほど便利だが、同意の設計が重くなる。
- ②は「作業画面の中に出る」。既存ツールの中に出す、というのは1章の全体像の一番上の層と対応している。
- ③は必ず個別オプトイン。全学一律でオンにしない。ここを間違えると信頼を一度で失う。
- 各モードに自律度Lを併記してある。UXと自律度は別の軸だが、対応関係はある。
-->

---

<!-- _class: summary -->

<div class="page-title">利用者別の型</div>

## 誰に対して、どんな伴走をするか

<div class="sections">

<div class="sec-box">

### 学生：長い時間軸で伴走

- 入学から修了まで**同じ文脈**を持ち続ける
- 節目（履修登録・研究室配属）で**先回り**する
- 平時は静か。**呼ばれた時だけ**答える

</div>

<div class="sec-box">

### 教員：作業の中に埋める

- 別アプリを開かせない。**Docs・Officeの中**に出す
- 起案までを担い、**判断は必ず本人**が行う
- 通知は**締切と要件変更**に限る

</div>

<div class="sec-box">

### 職員：手続きに沿って動く

- 手続きの**定型パターン**に沿って案を出す
- 例外は無理に処理せず**担当へ引き継ぐ**
- 実行系は**承認を挟む**（L3のみ）

</div>

</div>

<!--
- 3者で伴走の型が違う。学生は時間軸が長い、教員は作業の中、職員は手続きに沿う。
- 学生で効くのは「同じ文脈を持ち続ける」こと。毎回説明し直させないのがアプリにする理由。
- 教員は別アプリを開かせないのが鉄則。開かせた時点で使われない。
- 職員は例外処理をAIにやらせない。ここを欲張ると事故になる。
-->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 5</div>

# AIの振る舞い ④ モデルと可逆性

## 何で動かし、どう差し替え続けるか

<!--
- 最後にモデル。今のモデルを前提に作り込むと、半年で古くなる。
- 差し替えられる形で作る、というのが5章の主張。
-->

---

<!-- _class: summary -->

<div class="page-title">差し替え可能に保つ</div>

## 固定してよいものと、してはいけないもの

<div class="cmp">
<div class="cmp-col good">
<div class="cmp-h">固定してよいもの（大学側の資産）</div>
<ul>
<li><strong>知識グラフ</strong>：どのモデルでも同じ根拠として使える</li>
<li><strong>自律度Lと承認の設計</strong>：モデルが変わっても変わらない</li>
<li><strong>権限継承の仕組み</strong>：元システムの権限に依存する</li>
<li><strong>ログの形式</strong>：監査に必要な項目はモデルに依らない</li>
</ul>
</div>
<div class="cmp-col">
<div class="cmp-h">固定してはいけないもの</div>
<ul>
<li><strong>特定モデルの名前</strong>：仕様書・コードに直接書かない</li>
<li><strong>プロンプトの丸暗記</strong>：モデル固有の言い回しに依存させない</li>
<li><strong>単一ベンダーの独自形式</strong>：出口を塞がない</li>
<li><strong>推論単価の前提</strong>：安くなる方向に動く前提で設計する</li>
</ul>
</div>
</div>

<div class="band blue">つなぎ目は開放層で持つ ── データは <b>Iceberg</b>、連携は <b>MCP・A2A</b>、モデルは <b>Model Garden</b> で差し替える</div>

<!--
- 左が大学の資産。ここに投資する。モデルが変わっても価値が残る。
- 右は資産にならない。特にプロンプトをモデル固有の言い回しに最適化しすぎると、乗り換えで全部書き直しになる。
- 下の帯が6/22の結論と同じ。開放層でつなぎ目を持つことで可逆性を確保する。
-->

---

<!-- _class: fig -->

<div class="page-title">モデルの割り当て</div>

## 用途ごとに階層を分け、まとめて差し替えない

<div class="fig-area">

<table class="tbl">
<tr><th>用途</th><th>求めるもの</th><th>置くモデルの階層</th><th>差し替えの単位</th></tr>
<tr><td>定型の抽出・分類</td><td>速さ・安さ</td><td>軽量モデル</td><td>タスク単位で随時</td></tr>
<tr><td>対話・下書きの生成</td><td>日本語の自然さ</td><td>標準モデル</td><td>定期的に見直す</td></tr>
<tr><td>計画・照合・検証</td><td>手順を追う力</td><td>推論モデル</td><td>精度が要る所だけ</td></tr>
<tr><td>図・PDFの読み取り</td><td>画像を含む理解</td><td>マルチモーダル対応</td><td>必要になった時</td></tr>
</table>

</div>

<div class="caption">階層を分けておくと、1つのモデルが値上がり・提供終了しても、その用途だけを差し替えれば済む</div>

<div class="takeaway">「全部を最新の最強モデルで」は、費用でも可逆性でも不利</div>

<!--
- 用途を4つに分けて、それぞれ別の階層を当てる。全部を最強モデルで動かさない。
- 費用の話でもあるが、それ以上に可逆性の話。全部を1モデルに寄せると、そのモデルが終わった時に全部止まる。
- ゼミ資料の示唆とも繋がる。知識グラフがあれば小さいモデルで足りる可能性がある。根拠を外に持つ設計の効き所。
-->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## 今日の持ち帰りと、次に決めること

- **アプリは薄く作る**。厚くするのは知識の土台とガバナンス
- **自律度 L0〜L3 を機能ごとに明記**する。既定はL1、書き込みはL3のみ
- **AIに権限を与えない**。利用者の資格で動かし、見えないものは「無い」と答える
- **UXの既定は「呼べば出る」**。先回りは機能ごとの個別オプトインで
- **モデルは差し替え前提**。資産にするのは知識グラフ・承認設計・ログ

<div class="band">次に決めたい3つ ── ① 初期スコープ3機能の確定　② L3を許す業務の範囲　③ 知識グラフの元データの所在確認</div>

<!--
- 5点にまとめた。全部「振る舞い」の話で、機能の話は1行も入れていない。
- 最後の帯が次回までの宿題。特に③はデータの所在確認から始まるので、情報部門の協力が要る。
- ①は次期でよいものを削って3つに絞る。②は規程との擦り合わせが要るので、早めに着手したい。
-->

---

<!-- _class: refs -->

<div class="page-title">出典・参考</div>

## 出典・参考

- **本学内部資料**：「全学データ活用基盤 3案の比較」技術評価レポート（2026/6/22）／「AcaLinApp 開発プロジェクト(案)」理事会ブリーフ（2026/6/11）／「大学オントロジー」研究室ゼミ資料（2026/7/29）
- **知識グラフの根拠**：Liang, H., Lin, Q., Han, Z., Ma, X., Wong, Z. H., Qiang, M., Sun, L., & Zhang, W. (2026). *K12-KGraph*. arXiv:2605.09635v3 ― Gemini-3-Flash で Prereq EM 34.8 / 全体 EM 57.1
- **接続の標準**：Model Context Protocol (MCP)／Agent2Agent (A2A)／Apache Iceberg
- **クラウド側**：Google Cloud 公式ドキュメント（Gemini Enterprise・Model Garden・各種コネクタ）

<div class="srcline"><b>注</b>：本資料は構想段階のメモであり、費用・人数・削減額の試算は含めていない。金額は 6/22・6/11 の内部資料を参照のこと。図はすべて本資料のために作成した。</div>

<!--
- 出典。内部資料3本と、知識グラフの根拠になっている論文1本。
- 数字を出していないのは意図的。振る舞いが決まってから積む方が、見積の精度が上がる。
- 図は全部自作なので、そのまま流用してもらってよい。
-->
