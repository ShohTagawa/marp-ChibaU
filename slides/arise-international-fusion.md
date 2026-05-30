---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">高圧地球科学・廣瀬研究室</div><img class="hdr-logo" src="../assets/logo-placeholder.png">'
footer: ''
style: |
  :root {
    --accent: #003B71;
    --accent-dark: #001f3f;
    --accent-soft: #E6EEF7;
    --section-bg: #F4F8FC;
    --hdr-left-w: 38%;
  }
  section > header .hdr-left { font-size: 22px; padding: 0 16px 0 28px; }
  section .page-title { left: 32%; width: 30%; font-size: 22px; }
  section > header::after { left: 50%; }
---

<!-- _class: cover -->

# AI駆動型自律DACによる<br>地球コア相空間の完全解明

## ARISE 国際融合型 公募提案（2026年度）

### 研究開発代表者：廣瀬 敬 先生（東京大学）

<div class="meta">
2026年6月 / JST ARISE 国際・融合型
</div>

<!-- 表紙。タイトルは "自律DAC × 地球コア" の二本柱を明示。代表者と AI/ロボット側分担を併記し、ARISE が必須とする AI×ドメイン体制を冒頭で示す。 -->

---

<!-- _class: message -->

# ダイヤ ×1/5、FIB ×1/10。<br>**人** はそのまま。

## 律速は ハードと人の **境界面** に移った。

<!-- 問題提起。ハード側は速くなった（ダイヤ ×1/5、FIB ×1/10）が、人手作業は不変、という非対称性を冒頭で焼き付ける。 -->

---

<!-- _class: split -->

<div class="page-title">律速の現在地</div>

## 何が速くなり、何が変わらないか

<div class="split-body">
<div class="left">

<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="560" height="380" fill="#fafafa" rx="6"/>
  <text x="280" y="28" text-anchor="middle" font-size="16" font-weight="bold" fill="#1a1a1a">1試料あたり所要時間（h）</text>
  <line x1="70" y1="60" x2="70" y2="320" stroke="#777" stroke-width="1.2"/>
  <line x1="70" y1="320" x2="540" y2="320" stroke="#777" stroke-width="1.2"/>
  <g font-size="11" fill="#666" text-anchor="end">
    <text x="62" y="324">0</text>
    <text x="62" y="264">2</text>
    <text x="62" y="204">4</text>
    <text x="62" y="144">6</text>
    <text x="62" y="84">8</text>
  </g>
  <g stroke="#e5e5e5" stroke-dasharray="2,3">
    <line x1="70" y1="260" x2="540" y2="260"/>
    <line x1="70" y1="200" x2="540" y2="200"/>
    <line x1="70" y1="140" x2="540" y2="140"/>
    <line x1="70" y1="80" x2="540" y2="80"/>
  </g>
  <rect x="140" y="200" width="110" height="120" fill="#7E92AC" stroke="#2D4561"/>
  <text x="195" y="265" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">FIB 4h</text>
  <rect x="140" y="110" width="110" height="90" fill="#D77A4A" stroke="#7A3A1F"/>
  <text x="195" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">人手 3h</text>
  <rect x="140" y="80" width="110" height="30" fill="#7AB5C5" stroke="#1D5A6B"/>
  <text x="195" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">測定 1h</text>
  <text x="195" y="345" text-anchor="middle" font-size="14" font-weight="bold" fill="#1a1a1a">従来</text>
  <text x="195" y="362" text-anchor="middle" font-size="11" fill="#666">~8 h／試料</text>
  <rect x="370" y="308" width="110" height="12" fill="#7E92AC" stroke="#2D4561"/>
  <text x="425" y="318" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">FIB 0.4h</text>
  <rect x="370" y="218" width="110" height="90" fill="#D77A4A" stroke="#7A3A1F"/>
  <text x="425" y="268" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">人手 3h（不変）</text>
  <rect x="370" y="188" width="110" height="30" fill="#7AB5C5" stroke="#1D5A6B"/>
  <text x="425" y="208" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">測定 1h</text>
  <text x="425" y="345" text-anchor="middle" font-size="14" font-weight="bold" fill="#1a1a1a">現在（FIB ×10速）</text>
  <text x="425" y="362" text-anchor="middle" font-size="11" fill="#666">~4.4 h／試料・人手が9割</text>
</svg>

<div class="caption">図1. 1試料あたり所要時間の構成変化</div>

</div>
<div class="right">

### 何が起きたか

- ダイヤモンド単価が **1/5** に低下、消耗品制約は事実上消失
- FIB（Xe-PFIB）でガスケット加工が **1/10時間** に短縮
- 一方、装填・センタリング等の **人手時間は不変**
- 結果、人手が1試料時間の **約9割** を占める逆転状態に

</div>
</div>

<div class="takeaway">ハードを速くしても、人がついて来なければ伸びない。境界面の自動化が次の10倍を生む。</div>

<!-- 「ダイヤ・FIB が速くなったが人手は変わらない」という非対称性をグラフで示す。数字は廣瀬研実体験ベースで後で精緻化。 -->

---

<!-- _class: summary -->

<div class="page-title">Physical AI 潮流</div>

## なぜ今、自律サンプリングが現実解か

<div class="sections">

<div class="sec-box">

### Physical AI とは（2024–2026）

- VLA基盤モデル（DeepMind RT-2／π0／NVIDIA GR00T）でスキルが装置間転移
- Sim-to-real（NVIDIA Isaac）で**事前学習→実機展開**が常識化
- AIが**物理世界で能動的にサンプル取得**する新パラダイム

</div>

<div class="sec-box">

### 自律実験室（SDL）の急成長

- A-Lab（Berkeley, Nature 2023）：**17日で41新規材料を合成**
- Coscientist（CMU, Nature 2023）：LLMが化学実験を自律実行
- AI→ロボット→測定→再学習の**閉ループ**でサンプリング効率が桁違い

</div>

<div class="sec-box">

### 極限環境への未踏空白

- 既存SDLは常温・常圧化学が中心、**極限環境は世界的に未開拓**
- DAC級で実現すれば **世界初の高圧自律実験室** となる
- 廣瀬・山本研のハード資産 × 物理制約BO で国産発の獲得を狙う

</div>

</div>

<!-- 2024-2026 の Physical AI / SDL 潮流を示し、「常圧化学では既に走っているが極限環境はまだ空白」「ここを国内発で取りに行く」というポジショニングを明示。AI側審査員に通る固有名詞（RT-2, π0, GR00T, A-Lab, Coscientist）を厳選。 -->

---

<!-- _class: summary -->

<div class="page-title">ARISE との整合性</div>

## なぜ ARISE 国際融合型 なのか

<div class="sections">

<div class="sec-box">

### 公募が求める3要件への対応

- **AI×ドメイン共同提案**：廣瀬（地球深部）×山本（精密ロボット）×AI研究者
- **AI駆動型ロボット**：DAC自動装填・SPring-8自律ビームタイムを具体実装
- **国際連携**：BGI（独）・ESRF（仏）と既往パートナーシップを資金外で活用

</div>

<div class="sec-box">

### 「応用研究にしない」設計

- 物理制約（CALPHAD自由エネルギー・EoS・相律）を**ベイズ事前分布に直接埋め込む**
- 単なるBO適用ではなく、極限環境専用の新規AIモデル創出を目標化
- 成果物：AIモデル＋AIエージェント＋AI駆動ロボットを**三点セット**で提示

</div>

<div class="sec-box">

### 戦略ターゲット適合性

- 廣瀬研の FeHe 発見（PRL 2024）等、**日本が世界最先端**の領域に集中投資
- SPring-8 BL10XU・自前 Xe-PFIB という**国内既存インフラ**にプラグイン

</div>

</div>

<!-- 審査基準「応用研究は対象外」「固有の理論・制約条件をAIモデルに組み込む」へのカウンターを真ん中のセクションで明示。 -->

---

<!-- _class: message -->

# 自律DACで実験点を **10倍**。<br>そこから初めて見える相空間がある。

## 50点/年 → 500点/年。地球深部の組成は、もはや「点で議論する」段階を超える。

<!-- プロジェクトのコアコンセプト宣言。KPI（10×）を聴衆の頭に焼き付ける。次章以降の具体技術への橋渡し。 -->

---

<!-- _class: summary -->

<div class="page-title">3軸で開くサイエンス</div>

## 数・再現性・精度がそれぞれ何を解くか

<div class="sections">

<div class="sec-box">

### ① 数 — 多成分系を「面」で描く

- Fe-Si-O-H-He 5成分系の相図を **点ではなく面** で議論可能に
- コア軽元素**分配係数の網羅マッピング**で従来推定値を実測値に置換
- マグマオーシャン期のコア–マントル化学平衡を**完全相図**として描画

</div>

<div class="sec-box">

### ② 再現性 — 微小効果と「論争」を統計で決着

- **固体水素の金属化**（Wigner-Huntington 1935）の再現性論争に終止符
- ³He/⁴He 同位体分別の**起源を実験で確定**：ハワイ熱点異常を説明
- Fe-H 水素同位体分別：**地球コアが水の起源か** を判定
- Fe スピン転移の**正確な圧力点**を多回測定で決定

</div>

<div class="sec-box">

### ③ 精度 — 地震学モデルと直接対話

- 内核物性を **PREM（地震学）と完全比較**：密度・音速ジャンプを再現
- マントル–コア境界の **ULVZ 組成** を絞り込む：化学 vs 部分融解論争に決着
- 状態方程式パラメータを**惑星モデル直結精度**で決定

</div>

</div>

<!-- 10×宣言の直後に「では具体的に何の科学が解けるのか」を3軸で展開。FeHe Nature 2024 の延長線という枠で、コア・マントル・惑星モデルの3レイヤーを網羅。各軸に flagship problem を1つは入れる。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# 自律DAC実験プラットフォーム

## ハード × AI × ロボット の三層統合

<!-- 章扉。ここから技術中身に入る。 -->

---

<!-- _class: split -->

<div class="page-title">技術スタック</div>

## 自律実験ループの構成

<div class="split-body">
<div class="left">

<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="560" height="380" fill="#fafafa" rx="6"/>
  <defs>
    <marker id="arrL" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#003B71"/>
    </marker>
  </defs>
  <circle cx="280" cy="195" r="50" fill="#003B71" stroke="#001f3f" stroke-width="2"/>
  <text x="280" y="190" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">LLM</text>
  <text x="280" y="210" text-anchor="middle" font-size="11" fill="#fff">エージェント</text>
  <circle cx="280" cy="65" r="40" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="280" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#003B71">Xe-PFIB</text>
  <text x="280" y="78" text-anchor="middle" font-size="11" fill="#1a1a1a">加工</text>
  <circle cx="404" cy="155" r="40" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="404" y="150" text-anchor="middle" font-size="11" font-weight="bold" fill="#003B71">ロボット</text>
  <text x="404" y="168" text-anchor="middle" font-size="11" fill="#1a1a1a">装填</text>
  <circle cx="356" cy="300" r="40" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="356" y="295" text-anchor="middle" font-size="11" font-weight="bold" fill="#003B71">BL10XU</text>
  <text x="356" y="313" text-anchor="middle" font-size="11" fill="#1a1a1a">XRD測定</text>
  <circle cx="204" cy="300" r="40" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="204" y="295" text-anchor="middle" font-size="11" font-weight="bold" fill="#003B71">CNN</text>
  <text x="204" y="313" text-anchor="middle" font-size="11" fill="#1a1a1a">相同定</text>
  <circle cx="156" cy="155" r="40" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="156" y="150" text-anchor="middle" font-size="11" font-weight="bold" fill="#003B71">物理BO</text>
  <text x="156" y="168" text-anchor="middle" font-size="11" fill="#1a1a1a">次条件</text>
  <path d="M 314 90 Q 360 100 372 130" stroke="#003B71" stroke-width="2" fill="none" marker-end="url(#arrL)"/>
  <path d="M 412 192 Q 412 250 388 273" stroke="#003B71" stroke-width="2" fill="none" marker-end="url(#arrL)"/>
  <path d="M 316 305 L 244 305" stroke="#003B71" stroke-width="2" fill="none" marker-end="url(#arrL)"/>
  <path d="M 188 273 Q 148 250 148 192" stroke="#003B71" stroke-width="2" fill="none" marker-end="url(#arrL)"/>
  <path d="M 188 130 Q 220 100 246 90" stroke="#003B71" stroke-width="2" fill="none" marker-end="url(#arrL)"/>
  <g stroke="#999" stroke-dasharray="3,3" stroke-width="1">
    <line x1="280" y1="145" x2="280" y2="105"/>
    <line x1="324" y1="174" x2="364" y2="160"/>
    <line x1="316" y1="227" x2="332" y2="262"/>
    <line x1="244" y1="227" x2="228" y2="262"/>
    <line x1="236" y1="174" x2="196" y2="160"/>
  </g>
  <text x="280" y="358" text-anchor="middle" font-size="11" font-style="italic" fill="#444">人介在ゼロ／BL10XU 上で24時間連続稼働</text>
</svg>

<div class="caption">図2. クローズドループ・アーキテクチャ</div>

</div>
<div class="right">

### 各層の役割

- **ハード**：Xe-PFIBマルチガスケット加工（廣瀬研既設）
- **ロボット**：精密マニピュレータでサブミクロン pick-and-place（山本研）
- **AIビジョン**：CNNで試料認識・自動アライメント
- **物理制約BO**：CALPHAD＋EoSを事前分布に埋め込んだ獲得関数
- **オーケストレータ**：LLMエージェントが実験計画を立案・実行・再学習

</div>
</div>

<div class="takeaway">「人介在ゼロで24時間回る DAC ライン」を SPring-8 BL10XU 上に実装する。</div>

<!-- 技術全体像。ハードは既設、AI/ロボットがARISE経費で新規追加、という構造を明示するのが予算の納得感に直結する。 -->

---

<!-- _class: split -->

<div class="page-title">主軸：地球コア</div>

## Fe–Si–O–H–He系の相空間完全解明

<div class="split-body">
<div class="left">

<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="560" height="360" fill="#fafafa" rx="6"/>
  <text x="280" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#1a1a1a">Fe–H–He 三元相空間の被覆密度</text>
  <polygon points="130,80 60,260 200,260" fill="#fff" stroke="#003B71" stroke-width="2"/>
  <text x="130" y="73" text-anchor="middle" font-size="13" font-weight="bold" fill="#003B71">Fe</text>
  <text x="50" y="276" text-anchor="end" font-size="13" font-weight="bold" fill="#003B71">H</text>
  <text x="210" y="276" text-anchor="start" font-size="13" font-weight="bold" fill="#003B71">He</text>
  <g fill="#A6192E">
    <circle cx="130" cy="130" r="3.5"/>
    <circle cx="100" cy="180" r="3.5"/>
    <circle cx="160" cy="180" r="3.5"/>
    <circle cx="130" cy="220" r="3.5"/>
    <circle cx="85" cy="240" r="3.5"/>
    <circle cx="175" cy="240" r="3.5"/>
    <circle cx="130" cy="190" r="3.5"/>
  </g>
  <text x="130" y="298" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a1a1a">従来手法</text>
  <text x="130" y="316" text-anchor="middle" font-size="11" fill="#666">~50 点／年</text>
  <text x="280" y="180" text-anchor="middle" font-size="34" font-weight="bold" fill="#003B71">→</text>
  <text x="280" y="210" text-anchor="middle" font-size="16" font-weight="bold" fill="#A6192E">×10</text>
  <g transform="translate(280, 0)">
    <polygon points="130,80 60,260 200,260" fill="#fff" stroke="#003B71" stroke-width="2"/>
    <text x="130" y="73" text-anchor="middle" font-size="13" font-weight="bold" fill="#003B71">Fe</text>
    <text x="50" y="276" text-anchor="end" font-size="13" font-weight="bold" fill="#003B71">H</text>
    <text x="210" y="276" text-anchor="start" font-size="13" font-weight="bold" fill="#003B71">He</text>
    <g fill="#003B71">
      <circle cx="130" cy="100" r="2.2"/>
      <circle cx="115" cy="120" r="2.2"/>
      <circle cx="145" cy="120" r="2.2"/>
      <circle cx="100" cy="140" r="2.2"/>
      <circle cx="130" cy="140" r="2.2"/>
      <circle cx="160" cy="140" r="2.2"/>
      <circle cx="90" cy="160" r="2.2"/>
      <circle cx="115" cy="160" r="2.2"/>
      <circle cx="145" cy="160" r="2.2"/>
      <circle cx="170" cy="160" r="2.2"/>
      <circle cx="80" cy="180" r="2.2"/>
      <circle cx="105" cy="180" r="2.2"/>
      <circle cx="130" cy="180" r="2.2"/>
      <circle cx="155" cy="180" r="2.2"/>
      <circle cx="180" cy="180" r="2.2"/>
      <circle cx="75" cy="195" r="2.2"/>
      <circle cx="95" cy="195" r="2.2"/>
      <circle cx="118" cy="195" r="2.2"/>
      <circle cx="142" cy="195" r="2.2"/>
      <circle cx="165" cy="195" r="2.2"/>
      <circle cx="185" cy="195" r="2.2"/>
      <circle cx="70" cy="215" r="2.2"/>
      <circle cx="92" cy="215" r="2.2"/>
      <circle cx="115" cy="215" r="2.2"/>
      <circle cx="135" cy="215" r="2.2"/>
      <circle cx="158" cy="215" r="2.2"/>
      <circle cx="180" cy="215" r="2.2"/>
      <circle cx="200" cy="215" r="2.2"/>
      <circle cx="65" cy="235" r="2.2"/>
      <circle cx="85" cy="235" r="2.2"/>
      <circle cx="107" cy="235" r="2.2"/>
      <circle cx="130" cy="235" r="2.2"/>
      <circle cx="152" cy="235" r="2.2"/>
      <circle cx="175" cy="235" r="2.2"/>
      <circle cx="195" cy="235" r="2.2"/>
      <circle cx="62" cy="252" r="2.2"/>
      <circle cx="82" cy="252" r="2.2"/>
      <circle cx="102" cy="252" r="2.2"/>
      <circle cx="125" cy="252" r="2.2"/>
      <circle cx="148" cy="252" r="2.2"/>
      <circle cx="170" cy="252" r="2.2"/>
      <circle cx="190" cy="252" r="2.2"/>
    </g>
    <text x="130" y="298" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a1a1a">自律DAC</text>
    <text x="130" y="316" text-anchor="middle" font-size="11" fill="#666">~500 点／年</text>
  </g>
</svg>

<div class="caption">図3. 多成分系の被覆密度向上イメージ</div>

</div>
<div class="right">

### 主軸：地球コア軽元素分配

- **FeHe 化合物（廣瀬 2024 Nature）の続編**：He含有量・温度依存を定量化
- マントル–コア境界条件下（130 GPa, 4000 K）での**水素分配係数の精密測定**
- コア組成と磁場ダイナモ起源の**実験的決定**
- 同位体比 ³He/⁴He 異常の起源モデルを実証

</div>
</div>

<div class="takeaway">「地球コアが始原的ヘリウムの貯蔵庫である」仮説を実験で確定する。</div>

<!-- 主軸の科学目標。FeHe 発見の延長線という分かりやすいストーリーで審査員にインパクトを刺す。 -->

---

<!-- _class: split -->

<div class="page-title">副軸：物性アナログ</div>

## 高圧水素化物：物質科学への波及

<div class="split-body">
<div class="left">

<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="560" height="360" fill="#fafafa" rx="6"/>
  <text x="280" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#1a1a1a">同一プラットフォームでの並列スケジューリング</text>
  <line x1="120" y1="295" x2="540" y2="295" stroke="#666" stroke-width="1.2"/>
  <g font-size="11" fill="#555" text-anchor="middle">
    <text x="120" y="313">M1</text>
    <text x="190" y="313">M6</text>
    <text x="260" y="313">M12</text>
    <text x="330" y="313">M18</text>
    <text x="400" y="313">M24</text>
    <text x="470" y="313">M30</text>
  </g>
  <g stroke="#ddd" stroke-dasharray="2,2">
    <line x1="190" y1="60" x2="190" y2="295"/>
    <line x1="260" y1="60" x2="260" y2="295"/>
    <line x1="330" y1="60" x2="330" y2="295"/>
    <line x1="400" y1="60" x2="400" y2="295"/>
    <line x1="470" y1="60" x2="470" y2="295"/>
  </g>
  <text x="110" y="92" text-anchor="end" font-size="12" font-weight="bold" fill="#003B71">主軸</text>
  <text x="110" y="108" text-anchor="end" font-size="11" fill="#555">地球コア</text>
  <rect x="120" y="80" width="140" height="36" fill="#003B71" rx="4"/>
  <text x="190" y="103" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fe-Si-O系</text>
  <rect x="265" y="80" width="270" height="36" fill="#003B71" rx="4"/>
  <text x="400" y="103" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fe-H-He系（FeHe Nature 2024 続編）</text>
  <text x="110" y="160" text-anchor="end" font-size="12" font-weight="bold" fill="#7A3A1F">副軸</text>
  <text x="110" y="176" text-anchor="end" font-size="11" fill="#555">高圧水素化物</text>
  <rect x="220" y="148" width="200" height="36" fill="#D77A4A" rx="4"/>
  <text x="320" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">LaH₁₀/YH₉系の物性探索</text>
  <rect x="425" y="148" width="115" height="36" fill="#D77A4A" rx="4"/>
  <text x="482" y="171" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">検証</text>
  <text x="110" y="232" text-anchor="end" font-size="12" font-weight="bold" fill="#444">共有</text>
  <text x="110" y="248" text-anchor="end" font-size="11" fill="#555">ハード</text>
  <rect x="120" y="218" width="420" height="36" fill="#888" rx="4"/>
  <text x="330" y="241" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">自律DAC ＋ BL10XU ＋ 物理BO（同一スタック）</text>
  <polygon points="260,275 268,283 260,291 252,283" fill="#A6192E"/>
  <text x="260" y="345" text-anchor="middle" font-size="10" fill="#A6192E" font-weight="bold">10×実証</text>
  <polygon points="400,275 408,283 400,291 392,283" fill="#A6192E"/>
  <text x="400" y="345" text-anchor="middle" font-size="10" fill="#A6192E" font-weight="bold">コア相図</text>
  <polygon points="470,275 478,283 470,291 462,283" fill="#A6192E"/>
  <text x="470" y="345" text-anchor="middle" font-size="10" fill="#A6192E" font-weight="bold">国際展開</text>
</svg>

<div class="caption">図4. 主軸プラットフォームの副次活用</div>

</div>
<div class="right">

### 副軸：高圧物質探索

- 高圧水素化物は **常圧物性のアナログ**として機能
- LaH₁₀ / YH₉ 系探索を**副次的に**実行（主軸の同じハードを利用）
- 物理制約BOで**合成条件 P-T-X** の効率的探索
- NIMS データ拠点に AI モデル・データセットを公開（マテリアル分野要件）

</div>
</div>

<div class="takeaway">同じハードから「地球科学」と「物質科学」の二系統成果が出る。</div>

<!-- 副軸の位置づけを明確に。「主軸に集中するが、副次的に物質科学への波及がある」のラインを守る。室温超伝導の過剰約束は避ける。 -->

---

<!-- _class: fig -->

<div class="page-title">AI 革新性</div>

## 物理制約付きベイズ最適化の核心

<div class="fig-area">
<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;max-height:360px;">
  <rect width="720" height="380" fill="#fafafa" rx="6"/>
  <text x="360" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#1a1a1a">物理制約付きベイズ最適化（Thermodynamics-informed GP）</text>
  <defs>
    <radialGradient id="energyBG" cx="65%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#FFF1B0" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#FFE066" stop-opacity="0.55"/>
      <stop offset="80%" stop-color="#A6CDE6" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#003B71" stop-opacity="0.2"/>
    </radialGradient>
    <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" stroke="#A6192E" stroke-width="1.5" stroke-opacity="0.55"/>
    </pattern>
  </defs>
  <rect x="100" y="60" width="500" height="270" fill="url(#energyBG)" stroke="#444" stroke-width="1.5"/>
  <path d="M 100 60 L 240 60 L 290 110 L 230 170 L 100 140 Z" fill="url(#hatch)" stroke="#A6192E" stroke-width="1.2" stroke-opacity="0.8"/>
  <text x="170" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#A6192E">相律違反域</text>
  <text x="170" y="119" text-anchor="middle" font-size="10" fill="#A6192E">（CALPHAD で除外）</text>
  <g stroke="#003B71" fill="none" stroke-opacity="0.35" stroke-width="1.2">
    <ellipse cx="400" cy="200" rx="70" ry="50"/>
    <ellipse cx="400" cy="200" rx="110" ry="80"/>
    <ellipse cx="400" cy="200" rx="160" ry="115"/>
  </g>
  <g fill="#003B71">
    <circle cx="360" cy="240" r="5"/>
    <circle cx="430" cy="220" r="5"/>
    <circle cx="480" cy="190" r="5"/>
    <circle cx="380" cy="170" r="5"/>
    <circle cx="430" cy="270" r="5"/>
    <circle cx="320" cy="290" r="5"/>
  </g>
  <circle cx="525" cy="140" r="11" fill="none" stroke="#D77A4A" stroke-width="3"/>
  <circle cx="525" cy="140" r="5" fill="#D77A4A"/>
  <text x="640" y="142" text-anchor="middle" font-size="11" font-weight="bold" fill="#D77A4A">次サンプル</text>
  <text x="640" y="158" text-anchor="middle" font-size="10" fill="#D77A4A">最大期待情報量</text>
  <text x="350" y="355" text-anchor="middle" font-size="12" fill="#333">圧力 P (GPa)</text>
  <text x="80" y="195" text-anchor="middle" font-size="12" fill="#333" transform="rotate(-90 80 195)">温度 T (K)</text>
  <g font-size="10" fill="#333">
    <circle cx="115" cy="368" r="4" fill="#003B71"/>
    <text x="125" y="372">既測定</text>
    <circle cx="190" cy="368" r="4" fill="none" stroke="#D77A4A" stroke-width="2"/>
    <text x="200" y="372">BO推薦</text>
    <rect x="265" y="364" width="10" height="8" fill="url(#hatch)" stroke="#A6192E"/>
    <text x="280" y="372">物理制約除外</text>
    <rect x="385" y="364" width="10" height="8" fill="#FFE066" opacity="0.7"/>
    <text x="400" y="372">Gibbs事前分布</text>
  </g>
</svg>
</div>

<div class="caption">図5. Thermodynamics-informed Gaussian Process for Extreme Conditions</div>

<div class="takeaway">「単なるBO適用」ではなく、極限環境専用の新規AI数理モデルを創出する。</div>

<!-- ARISE が "応用研究は対象外" としている点への直接の回答スライド。AI共同代表者の独立業績にも繋がる学術貢献として位置づけ。 -->

---

<!-- _class: summary -->

<div class="page-title">体制・国際連携</div>

## 実施体制とパートナーシップ

<div class="sections">

<div class="sec-box">

### 国内共同代表者（予定）

- **廣瀬 敬**（東京大学・代表）：高圧地球化学、DAC実験、SPring-8運用
- **AI研究者**（共同代表・調整中）：物理制約BO・能動学習
- **山本 晃生**（東京大学・精密工学）：超精密ロボット・平面アクチュエータ

</div>

<div class="sec-box">

### 国際連携パートナー（資金外連携）

- **BGI Bayreuth（独）**：H/He 系高圧化学の世界拠点、廣瀬研既往交流
- **ESRF ID27（仏）**：自動センタリング先行ビームライン
- **Carnegie EPL（米）**：水素系極限環境物質科学

</div>

<div class="sec-box">

### データ・計算資源

- **NIMSデータ拠点**にAIモデル・データセットを原則公開
- **理研 AI4Sci マシン**＋クラウドで物理制約BOの並列実行

</div>

</div>

<!-- 国際連携は「JSTから海外への資金提供はない」前提を踏まえ、対等な技術交換ベースの連携を明示する。 -->

---

<!-- _class: fig -->

<div class="page-title">計画・予算</div>

## マイルストーン × 予算配分

<div class="fig-area">

| Phase | 期間 | 主要マイルストーン |
|---|---|---|
| 基盤構築 | M1–M9 | FIBカルーセル稼働／BO試作／MOU調印 |
| クローズドループ | M10–M18 | BL10XU 自律ビームタイム／**10倍スループット実証** |
| ブレイクスルー | M19–M30 | コア相空間完成／He化合物発見／NIMS公開 |

| 費目 | 金額 | 主用途 |
|---|---:|---|
| ハードウェア | 6,000万 | DACオートチェンジャー・精密駆動系・ガス装填改修 |
| 人件費 | 5,000万 | PD2名／ロボットエンジニア／RA |
| 消耗品 | 2,000万 | ダイヤ・Re/W・ガス・FIB |
| 計算・国際・他 | 2,000万 | AI4Sci／BGI・ESRF出張／OA・知財 |

</div>

<div class="takeaway">直接経費 1.5億円・30ヶ月で「10倍化の実証」と「コア解明」を同時達成。</div>

<!-- マイルストーンと予算を1枚に圧縮。審査基準「目標計画の妥当性」「予算の具体性」へ直接答える構造。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- ダイヤ ×1/5、FIB ×1/10 で **ハードは速くなったが人は変わらない**
- 律速は **人とハードの境界面** に移った、ここを倒すと10倍化が実現
- 廣瀬研の世界最先端ハード × 山本研の精密ロボット × 物理制約BOで実装
- 主軸：地球コア相空間の完全解明（FeHe 発見の続編）
- 副軸：高圧水素化物探索による物質科学への波及
- 物理制約付きBOは **ARISE が求める "領域固有AI" の核心要件** を満たす
- 国際連携：BGI・ESRF・Carnegie との対等な技術交換で世界トップリーグへ

<!-- 全章の要点を ✓ チェックで6点に集約。最後に "ARISE要件全項目を満たす" を再強調。 -->

