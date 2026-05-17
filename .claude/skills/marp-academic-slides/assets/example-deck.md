---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生物論文 - AI</div><img class="hdr-logo" src="./logo-placeholder.png">'
footer: ''
---

<!-- _class: cover -->

# 大規模言語モデルは<br>科学論文を読めるか

## 生物学領域における LLM 援用読解の実証

### 田川　翔
### 千葉大学 アカデミックリンクセンター

<div class="meta">2026年5月17日 / 生物論文 - AI 勉強会</div>

<!-- 開始のあいさつ。本日のテーマを30秒で予告。 -->

---

<!-- _class: intro -->

<div class="page-title">自己紹介</div>

<div class="intro-head">
<div class="intro-name">
<span class="ruby">たがわ　しょう</span>
田川　翔
</div>
<div class="intro-affil">
<strong>所属：</strong>千葉大学<br>
高等教育センター / アカデミックリンクセンター
<div class="role">大学教育を設計し、学生と教員を支援する仕事</div>
</div>
</div>

<div class="two-col">
<div class="col">

### ①元々は理学の人

<div class="placeholder">[マグマオーシャン断面図]</div>

</div>
<div class="col">

### ②問いの原点

何がいまのこの惑星（ほし）を、決めているのか。
私たちは、どこから来たのか？

地球形成期の高温高圧化学反応から、水と生命の起源を辿る研究をしていた。

</div>
</div>

<!-- 経歴は理学→高等教育。研究で扱った時間スケールの感覚を共有する。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# 背景と問い

## なぜ今 LLM × 論文読解なのか

<!-- 章の導入。読解支援というテーマの位置づけを語る。 -->

---

<!-- _class: summary -->

<div class="page-title">背景</div>

## 学生の論文読解の三つの壁

<div class="sections">

<div class="sec-box">

### 言語の壁

- 英語論文の読解速度が日本語の1/3に落ちる
- 専門用語の閾値が想像以上に高い
- 構文の解釈ミスが結論の誤読に直結

</div>

<div class="sec-box">

### 領域知識の壁

- 前提となる手法論文を読まないと評価できない
- 図表の慣習が分野ごとに異なる
- 統計手法の妥当性を判断できない

</div>

<div class="sec-box">

### モチベーションの壁

- 1本に1時間かけても得るものが見えない
- 抄録だけで満足してしまう
- 議論の場が学内にしか無い

</div>

</div>

<!-- 三つの壁は独立ではなく相互に絡む。後の章で個別の対処を見ていく。 -->

---

<!-- _class: fig -->

<div class="page-title">予備調査</div>

## 学部生の読解時間分布

<div class="fig-area">
<div class="placeholder">[英語論文1本あたりの読解時間ヒストグラム<br>横軸: 時間 (分), 縦軸: 学生数 (n=124)]</div>
</div>

<div class="caption">図1. 2025年度 千葉大学 学部3年 自己申告データ</div>

<div class="takeaway">中央値 78 分。上位層と下位層で 3 倍の開き。</div>

<!-- 中央値ではなく分布の広がりに注目してほしい。 -->

---

<!-- _class: split -->

<div class="page-title">介入設計</div>

## LLM を読解の足場に据える

<div class="split-body">
<div class="left">

<div class="placeholder">[読解ワークフロー図<br>論文 → LLM 要約 → 学生 → 議論]</div>

<div class="caption">図2. 援用読解の流れ</div>

</div>
<div class="right">

### 介入の三原則

- LLM 要約は **読む前** に渡す（読後ではなく）
- 学生は要約への **反論** を1点書き残す
- 反論を持ち寄って **議論** に持ち込む

</div>
</div>

<div class="takeaway">「答え」ではなく「叩き台」として LLM を使う設計が肝。</div>

<!-- 要約を読後に与えると学生の能動性が落ちることが先行研究で示されている。 -->

---

<!-- _class: message -->

# 鍵は「反論を1つ書け」という制約

## 受動的読解を能動的読解に変える最小ルール

<!-- ここで一拍置く。次の章の結果に繋ぐ。 -->

---

<!-- _class: fig -->

<div class="page-title">結果</div>

## 介入前後の読解スコア比較

| 指標 | 介入前 | 介入後 | 変化 |
|---|---|---|---|
| 要旨理解 (10点) | 6.2 | 8.1 | +1.9 |
| 手法評価 (10点) | 4.1 | 6.8 | +2.7 |
| 議論への参加率 | 38% | 71% | +33pt |
| 平均読解時間 | 78分 | 52分 | -26分 |

<div class="caption">表1. 2学期 13回の演習に基づく集計 (n=124)</div>

<div class="takeaway">手法評価と議論参加率の伸びが特に顕著。</div>

<!-- 読解時間の短縮は副次的効果。質の向上が本筋。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- 学部生の論文読解には言語・領域・動機の三つの壁がある
- LLM 要約は読後ではなく読前に渡し叩き台として扱う
- 「反論を1つ書け」が能動的読解に切り替える最小制約
- 介入後 手法評価で +2.7 点、議論参加率 +33pt の改善

<!-- 三つの壁を全部解いたわけではない。動機の壁は残っている。 -->

---

<!-- _class: refs -->

<div class="page-title">参考文献</div>

## 参考文献

- 田川翔 (2025). 学部生の論文読解支援における LLM の活用. *日本教育工学会論文誌*, 49(2), 123-138. https://doi.org/...
- Smith, J., & Lee, K. (2024). Scaffolding scientific reading with generative AI. *Journal of Higher Education Research*, 88(4), 451-478.
- 千葉大学高等教育センター (2024). *学修ポートフォリオ年次報告書 2024*. 千葉大学.
- Kim, A., Park, B., & Wong, C. (2025). Prompting strategies for academic literacy. *Computers & Education*, 215, 104892.

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.sho@chiba-u.jp / @sh_tagawa
