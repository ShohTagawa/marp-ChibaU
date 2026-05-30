# SVG部品ライブラリ（コピペ用）

座標は例。`viewBox="0 0 1280 720"` 前提。**SVG内に空行を入れない**こと。色は ponchie.css の変数だが、SVG内は実値（#1A7A5E 等）で書く（CSS変数はSVG属性に効かない環境があるため確実な実値を使う）。

## 0. defs（必ず先頭に置く）

グラデ・影・矢印マーカーをまとめて定義する。

```svg
<defs>
  <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
  <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1A7A5E"/><stop offset="1" stop-color="#125642"/></linearGradient>
  <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.12"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
  <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#125642" flood-opacity="0.18"/></filter>
  <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#125642" flood-opacity="0.12"/></filter>
  <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
</defs>
```

> `feDropShadow` は Chromium(marp-cli/PDF) で描画される。VS Codeプレビューでは `filter/feDropShadow` を許可リストに足す。

## 1. 背景ゾーン（地）

太枠で囲わず、淡色の面＋やわらかい影で領域を作る。

```svg
<!-- ソフトゾーン（角丸パネル） -->
<rect x="40" y="120" width="380" height="220" rx="18" fill="#E4F2EC" filter="url(#shSoft)"/>
<!-- 課題ゾーンは warm 系 -->
<rect x="40" y="120" width="380" height="220" rx="18" fill="#FBEDE2" filter="url(#shSoft)"/>
<!-- 斜め帯で地を割る（背景の切り分け） -->
<polygon points="0,0 1280,0 1280,140 0,220" fill="#E4F2EC"/>
<!-- 主役背後の放射グロー -->
<circle cx="640" cy="360" r="220" fill="url(#glow)"/>
```

## 2. タイトル・帯（グラデ反転）

```svg
<!-- グラデのタイトルバナー（全幅） -->
<rect x="0" y="0" width="1280" height="66" fill="url(#gAccH)"/>
<text x="40" y="43" font-size="27" font-weight="700" fill="#fff">計画名がここに</text>
<!-- ロゴは白チップに載せて濃地でも見えるように -->
<rect x="1110" y="16" width="134" height="34" rx="8" fill="#fff"/>
<image href="./src/logo.png" x="1122" y="22" width="110" height="22"/>
<!-- 結論帯（下）。前進感を出す矢じり付き -->
<path d="M40 620 L1210 620 L1240 651 L1210 682 L40 682 Z" fill="url(#gAccH)"/>
<text x="630" y="658" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">キーメッセージ</text>
```

## 3. 影付きカード＋ヘッダータブ＋アイコンバッジ

平板な「枠＋塗り」を脱する基本単位。

```svg
<g filter="url(#sh)">
  <rect x="100" y="150" width="300" height="170" rx="14" fill="#ffffff"/>
</g>
<rect x="100" y="150" width="300" height="34" rx="14" fill="url(#gAccH)"/>
<rect x="100" y="170" width="300" height="14" fill="url(#gAccH)"/>
<text x="150" y="173" font-size="15" font-weight="700" fill="#fff">見出し</text>
<!-- 円アイコンバッジ -->
<circle cx="126" cy="167" r="13" fill="#fff"/>
<!-- バッジの中にアイコングリフ（下記ライブラリから） -->
<text x="120" y="290" font-size="13" fill="#1f2937">本文…</text>
```

## 4. アイコン・グリフ集（円バッジ内に置く想定）

各アイコンは「中心(cx,cy)・半径r ≈ 9」を目安に、`stroke` 主体の1〜2筆書き。色は文脈で #1A7A5E or #fff。

```svg
<!-- 人/学生（頭＋肩） -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
<!-- 複数人/みんな -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
<!-- 本/図書館 -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-8 -7 L0 -5 L0 8 L-8 6 Z"/><path d="M8 -7 L0 -5 L0 8 L8 6 Z"/></g>
<!-- AIチップ（四角＋ピン＋"AI"） -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-11 M-7 3 H-11 M7 -3 H11 M7 3 H11 M-3 -7 V-11 M3 -7 V-11 M-3 7 V11 M3 7 V11"/></g>
<!-- 的/ゴール（同心円） -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
<!-- 建物/大学（台形＋柱） -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
<!-- 歯車/業務 -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
<!-- 電球/アイデア -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-2" r="6"/><path d="M-3 6 H3 M-2 9 H2"/></g>
<!-- リンク/つなぐ -->
<g stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
```

使い方：`<g transform="translate(126,167)"> …グリフ… </g>` でバッジ中心へ移動して配置。

## 5. フロー矢印（塊で描く）

細線でなく塊のシェブロン/リボンで流れを示す。

```svg
<!-- シェブロン（幕間の太い矢印） -->
<path d="M430 210 L470 210 L490 235 L470 260 L430 260 L450 235 Z" fill="#1A7A5E"/>
<!-- 太いリボン矢印（横） -->
<path d="M120 400 H1080 L1080 388 L1130 410 L1080 432 L1080 420 H120 Z" fill="url(#gAccH)"/>
<!-- 合流（複数→1点へ曲線で集まる） -->
<path d="M200 300 C300 300 340 360 420 360" stroke="#1A7A5E" stroke-width="3" fill="none" marker-end="url(#mA)"/>
```

## 6. 番号バッジ / マイルストーンノード（ロードマップ旅）

```svg
<!-- 昇る破線パス -->
<path d="M120 440 C420 440 460 300 760 300 S1100 200 1160 200" stroke="#9bbcb1" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round" fill="none"/>
<!-- ノード（番号入り円） -->
<circle cx="200" cy="430" r="26" fill="url(#gAcc)" filter="url(#sh)"/>
<text x="200" y="438" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">1</text>
<text x="200" y="478" font-size="14" font-weight="700" fill="#16624b" text-anchor="middle">ラベル</text>
```

## 7. 巨大数字（KPI主役）

```svg
<text x="640" y="300" font-size="46" font-weight="700" fill="#1A7A5E" text-anchor="middle">＋3<tspan font-size="20">時間/週</tspan></text>
<text x="640" y="330" font-size="14" fill="#6b7280" text-anchor="middle">教員1人あたりの研究時間</text>
```

## 8. Before→After チップ

```svg
<rect x="60" y="500" width="130" height="40" rx="8" fill="#F2F2F2"/>
<text x="125" y="525" font-size="13" fill="#777" text-anchor="middle">いま：バラバラ</text>
<path d="M196 520 L214 520" stroke="#1A7A5E" stroke-width="3" marker-end="url(#mA)"/>
<rect x="220" y="500" width="150" height="40" rx="8" fill="#E4F2EC"/>
<text x="295" y="525" font-size="13" font-weight="700" fill="#16624b" text-anchor="middle">導入後：つながる</text>
```

## 組み合わせの順序（再掲）

`defs` → 背景ゾーン/グロー → 帯/バナー → カード(影) → アイコン → 矢印 → 数字/テキスト。奥から手前。重なり順＝記述順。
