---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">教室の協働学習に生成AIを活かす</div><img class="hdr-logo" src="./assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    --hdr-left-w: 56%;
    --hdr-slant: 14px;
  }
  section > header .hdr-left { padding: 0 12px 0 32px; }
  section .page-title { left: 50%; width: 32%; }
---

<!-- _class: cover -->

# 教室の協働学習に<br>生成AIを活かす

## 「グループ気づき」と「AIエージェント」の効果量研究から

### 田川　翔
### 千葉大学 国際未来教育基幹 / アカデミック・リンク・センター

<div class="meta">2026年5月19日 / 教育学部 研究会</div>

<!-- 2本のメタ分析を統合し、小中学校での生成AI活用の可能性を語る。 -->

---

<!-- _class: fig -->

<div class="page-title">Bloomの2シグマ問題</div>

## 1984年の古典的問いから始める

| 学習条件 | 効果量（vs 通常授業） | 平均的生徒の到達位置 |
|---|---|---|
| 通常の一斉授業（30人） | 基準（g = 0） | 50パーセンタイル |
| 完全習得学習（学級指導） | <span class="hl">g ≈ 1.0</span> | 84パーセンタイル |
| <span class="hl">1対1チュータリング</span> | <span class="hl">g ≈ 2.0</span> | <span class="hl">98パーセンタイル</span> |

<div class="caption">Bloom, B. S. (1984). The 2 sigma problem. *Educational Researcher*, 13(6), 4–16.</div>

<div class="takeaway">1対1指導は通常授業より2標準偏差上。これを集団で実現できるか？</div>

<!-- Bloomは「集団でも家庭教師並みの効果を出せる方法を探せ」と問題提起した。 -->

---

<!-- _class: message -->

# 2シグマ問題は<br>生成AIで解けるか？

## 教室のグループワークで「気づきまとめ」をAIが担うと効果はどう変わるか

<!-- 本日の中心問い。AIで2シグマギャップを縮められるか。 -->

---

<!-- _class: refs -->

<div class="page-title">本日扱う主要文献</div>

## エビデンスの出典（先に整理）

- **①Chen, D., Zhang, Y., Luo, H., Zhu, Z., Ma, J., & Lin, Y. (2024).** Effects of group awareness support in CSCL on students' learning performance: A three-level meta-analysis. *International Journal of Computer-Supported Collaborative Learning*, 19, 97–129.
- **②Liu, J., Mbowe, A. E., Tahri, D., & Aziku, M. (2026).** Meta-analysis on the influence of AI agents on K-12 student cognitive performance. *Computers in Human Behavior Reports*, 21, 100973.
- **③Bloom, B. S. (1984).** The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. *Educational Researcher*, 13(6), 4–16.
- **④Cohen, J. (1992).** A power primer. *Psychological Bulletin*, 112(1), 155–159.
- **⑤Dourish, P., & Bellotti, V. (1992).** Awareness and coordination in shared workspaces. *Proceedings of CSCW '92*, 107–114.

<!-- 主要5本。①②が本日のメタ分析、③が動機、④が効果量基準、⑤がGA概念の出典。 -->

---

<!-- _class: summary -->

<div class="page-title">用語・略語の定義</div>

## 本日使用する略語の解説

<div class="sections">

<div class="sec-box">

### 学習理論・設計

- <span class="hl">CSCL</span>：Computer-Supported Collaborative Learning（コンピュータ支援協調学習）
- <span class="hl">GA</span>：Group Awareness（グループ・アウェアネス、メンバー活動の理解）
- <span class="hl">ZPD</span>：Zone of Proximal Development（発達の最近接領域、Vygotsky）

</div>

<div class="sec-box">

### AI・教育技術

- <span class="hl">GenAI</span>：Generative AI（生成AI、ChatGPT等）
- <span class="hl">ITS</span>：Intelligent Tutoring System（知的チュータリング）
- <span class="hl">K-12</span>：幼稚園〜高校3年（初中等教育）
- <span class="hl">EFL</span>：English as a Foreign Language（外国語英語）

</div>

<div class="sec-box">

### 統計・メタ分析

- <span class="hl">SMD / Hedges' g</span>：標準化平均差（補正済み）= 効果量指標
- <span class="hl">SD / SE / CI</span>：標準偏差／標準誤差／信頼区間
- <span class="hl">I² / Q</span>：異質性指標（研究間ばらつきの大きさ）
- <span class="hl">PRISMA</span>：系統的レビュー報告基準

</div>

</div>

<!-- 略語は出てきた時点で再確認できるよう、先に一覧化。 -->

---

<!-- _class: summary -->

<div class="page-title">発表の流れ</div>

## 4章構成で2本のメタ分析を読み解く

<div class="sections">

<div class="sec-box">

### CH1 方法論

- メタ分析とは何か
- 効果量Hedges' gの定義
- ランダム効果モデル

</div>

<div class="sec-box">

### CH2-3 2本の研究

- 研究①：GA支援（Chen 2024）
- 研究②：AIエージェント（Liu 2026）
- モデレーター分析

</div>

<div class="sec-box">

### CH4 統合と実装

- 2研究の比較
- 教室での実装ビジョン
- デザイン原則6つ

</div>

</div>

<!-- 方法論→研究→統合の順で20分。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 1</div>

# メタ分析と効果量の基礎

## なぜ「g = 0.46」が大事なのか

<!-- 専門外の聴衆に方法論の最低限を共有する。 -->

---

<!-- _class: summary -->

<div class="page-title">メタ分析とは</div>

## 複数研究を統合する強力な統計手法

<div class="sections">

<div class="sec-box">

### 個別研究の限界

- サンプル小さく不安定
- 結果が研究ごとにバラバラ
- 出版バイアスの懸念

</div>

<div class="sec-box">

### メタ分析の強み

- 数千名分のデータを統合
- 全体傾向と条件差を分離
- バイアスを統計で検証

</div>

<div class="sec-box">

### 本日扱う2本

- 研究① 46研究 96効果量
- 研究② 34研究 73効果量
- 計 <span class="hl">3,000名超</span>のデータ

</div>

</div>

<!-- 個別研究を「重ね合わせて」全体像を出すイメージ。 -->

---

<!-- _class: fig -->

<div class="page-title">Hedges' g の定義</div>

## 「何標準偏差分の差か」を表す指標

<div class="fig-area">

$$g = J \times \frac{\bar{X}_{実験群} - \bar{X}_{統制群}}{SD_{pooled}}$$

| 要素 | 意味 |
|---|---|
| $\bar{X}$ | 各群の平均テスト点 |
| $SD_{pooled}$ | プールされた標準偏差 |
| $J$ | 小サンプル補正係数 |

</div>

<div class="caption">標準化平均差（SMD）の代表的な効果量指標</div>

<div class="takeaway">g = 0.5 は偏差値で約5点差に相当。</div>

<!-- 偏差値10点 = 1標準偏差。直感的な意味を伝える。 -->

---

<!-- _class: fig -->

<div class="page-title">効果量の解釈基準</div>

## Cohen (1992) のベンチマーク

| Hedges' g | 効果 | イメージ |
|---|---|---|
| 0.2 | 小 | 偏差値+2点 |
| **0.4〜0.5** | **中** | **偏差値+4〜5点** |
| 0.8 | 大 | 偏差値+8点 |
| <span class="hl">0.46</span> | 研究① 全体 | 中程度 |
| <span class="hl">0.404</span> | 研究② 全体 | 中程度 |
| <span class="hl">0.877</span> | 研究② 小学高学年 | 大 |

<div class="caption">本研究で扱う主要な効果量の位置づけ</div>

<div class="takeaway">両研究の全体効果は中程度。小学高学年で「大」。</div>

<!-- どちらも教育研究では十分に意味のある効果サイズ。 -->

---

<!-- _class: summary -->

<div class="page-title">異質性とモデレーター</div>

## ランダム効果モデルで「条件差」を探る

<div class="sections">

<div class="sec-box">

### モデル

- 真の効果量に分散$\tau^2$を仮定
- 研究間のばらつきを認める
- 「平均的な真の効果」を推定

</div>

<div class="sec-box">

### 異質性指標

- Q統計量：均一性検定
- $I^2$：変動の何%が真の差か
- $I^2$ > 75% で<span class="hl">高い異質性</span>

</div>

<div class="sec-box">

### モデレーター分析

- 条件で効果はどう変わる？
- 教科・学齢・期間で分割
- 「効く条件」を特定する

</div>

</div>

<!-- I²が高い→単一の平均では語れない→条件別分析へ。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 2</div>

# 研究① GA支援のメタ分析

## Chen et al. (2024) IJCSCL

<!-- CSCL分野の標準的研究。三水準モデルを採用。 -->

---

<!-- _class: summary -->

<div class="page-title">協働学習の課題とGA</div>

## 「気づきの可視化」が解く3つの落とし穴

<div class="sections">

<div class="sec-box">

### 協働学習の落とし穴

- フリーライダー問題
- 議論の品質低下
- 不公平感・不信感

</div>

<div class="sec-box">

### GA支援とは

- 他者の活動を可視化
- Dourish & Bellotti (1992)
- CSCL設計の中核概念

</div>

<div class="sec-box">

### GAの3タイプ

- <span class="hl">行動的</span>：誰が何回貢献したか
- <span class="hl">認知的</span>：仲間の知識・気づき
- <span class="hl">社会的</span>：雰囲気・信頼感

</div>

</div>

<!-- ワークシートの「気づきまとめ」は認知的GAに相当。 -->

---

<!-- _class: fig -->

<div class="page-title">研究①の概要</div>

## 46研究を三水準メタ分析

| 項目 | 内容 |
|---|---|
| 対象期間 | 2000〜2022年 |
| 検索DB | WoS, ScienceDirect, Wiley, Springer, ERIC |
| 最終採択 | <span class="hl">46研究（外れ値除き45）</span> |
| 効果量数 | <span class="hl">96効果量（58独立研究）</span> |
| 統計手法 | <span class="hl">三水準メタ分析</span>（metafor, R） |
| 評定者間信頼性 | Cohen's κ = 0.90 |
| 従属変数 | 行動参加・認知発達・社会的感情 |

<div class="caption">Chen, Zhang, Luo, Zhu, Ma, & Lin (2024) IJCSCL 19:97–129</div>

<div class="takeaway">CSCL分野で初の三水準モデルを採用。</div>

<!-- 三水準モデルは効果量の非独立性を扱える。 -->

---

<!-- _class: fig -->

<div class="page-title">PRISMA フロー（研究①）</div>

## 1,642件 → 46研究への絞り込み

| 段階 | 件数 | 処理 |
|---|---|---|
| データベース検索 | 1,642 | WoS / ScienceDirect / Wiley / Springer / ERIC |
| スクリーニング後 | 98 | 重複・抄録除外 |
| フルテキスト精査 | 98 → 46 | レビュー・統制群なし・データ不足を除外 |
| **最終採択** | **<span class="hl">46（→45）</span>** | 外れ値1除外。<span class="hl">96効果量・58独立研究</span> |

<div class="caption">Figure 1 of Chen et al. (2024) — Cohen's κ = 0.90</div>

<div class="takeaway">5DB+スノーボールで20年分を網羅した検索。</div>

<!-- PRISMA図はメタ分析の透明性の証。 -->

---

<!-- _class: summary -->

<div class="page-title">三水準メタ分析</div>

## 「研究内」と「研究間」の分散を分離

<div class="sections">

<div class="sec-box">

### 通常モデルの問題

- 同じ研究から複数効果量
- 効果量の非独立性
- 標準誤差を過小評価

</div>

<div class="sec-box">

### 三水準モデル

- Level 1: サンプリング誤差
- Level 2: 研究内分散
- Level 3: 研究間分散

</div>

<div class="sec-box">

### 研究①の分散内訳

- Level 1: 24.47%
- Level 2: <span class="hl">37.31%</span>
- Level 3: <span class="hl">38.22%</span>

</div>

</div>

<!-- 研究内も研究間も同等にばらつく → 三水準が必要だった。 -->

---

<!-- _class: fig -->

<div class="page-title">全体効果量（研究①）</div>

## GA支援の学習効果は中程度・有意

| 指標 | 値 |
|---|---|
| **Hedges' g** | **<span class="hl">0.46</span>** |
| 標準誤差 SE | 0.06 |
| 95%信頼区間 | [0.34, 0.58] |
| t値 | 7.62 *** |
| Q(95) | 374.18 *** |
| Level 2 I² | 37.31% |
| Level 3 I² | 38.22% |

<div class="caption">Table 3 of Chen et al. (2024) — 96効果量・58独立研究</div>

<div class="takeaway">GA支援は学習を約0.46 SD押し上げる。</div>

<!-- 偏差値で約4.6点上昇に相当。 -->

---

<!-- _class: fig -->

<div class="page-title">3アウトカム別効果量</div>

## 認知・行動・感情すべてに有意な効果

| 学習アウトカム | Hedges' g (SE) | 95%CI |
|---|---|---|
| <span class="hl">認知的発達</span> | **0.49** (0.08) | [0.33, 0.65] |
| 行動的参加 | 0.47 (0.11) | [0.24, 0.69] |
| 社会的感情 | 0.38 (0.07) | [0.23, 0.53] |

<div class="caption">Table 3 of Chen et al. (2024) — すべて p < 0.001</div>

<div class="takeaway">認知発達への効果が最大（g = 0.49）。</div>

<!-- 「わかること・考えること」を最も助ける。 -->

---

<!-- _class: fig -->

<div class="page-title">複合型 vs 単一型</div>

## 3タイプを組み合わせると効果は約2倍

| タイプ | 研究数 | g (SE) | 95%CI |
|---|---|---|---|
| <span class="hl">複合型</span>（3種類組合せ） | 22 | **0.65** (0.09) | [0.47, 0.83] |
| 単一型（1種類のみ） | 36 | 0.34 (0.07) | [0.20, 0.48] |

<div class="caption">Table 4 of Chen et al. (2024) — F(1,94)=7.57, p=0.007</div>

<div class="takeaway">行動・認知・社会の組合せで効果はほぼ2倍。</div>

<!-- 「気づきまとめ」も複合型で設計すべき示唆。 -->

---

<!-- _class: fig -->

<div class="page-title">単一型GAの詳細</div>

## どのGAが何のアウトカムに効くか

| アウトカム | 行動的GA | 認知的GA | 社会的GA |
|---|---|---|---|
| 行動的参加 | <span class="hl">0.53*</span> | 0.23 n.s. | 0.27 n.s. |
| 認知的発達 | <span class="hl">0.45*</span> | 0.32** | 0.31 n.s. |
| 社会的感情 | −0.04 n.s. | <span class="hl">0.37*</span> | 0.27 n.s. |

<div class="caption">Table 5 of Chen et al. (2024)</div>

<div class="takeaway">行動的GAが認知発達を最も促進する逆説。</div>

<!-- 「誰が何をしたか」の可視化が深い学びを誘発。 -->

---

<!-- _class: fig -->

<div class="page-title">グループサイズの影響</div>

## 大グループほどGA支援の価値は高い

| サイズ | 研究数 | g (SE) | 95%CI |
|---|---|---|---|
| <span class="hl">大（5人以上）</span> | 12 | **0.71** (0.13) | [0.46, 0.96] |
| 小（2〜4人） | 36 | 0.38 (0.08) | [0.23, 0.54] |

<div class="caption">Table 6 of Chen et al. (2024) — F(1,73)=4.89, p=0.030</div>

<div class="takeaway">5人以上では効果がほぼ倍に。可視化が必須に。</div>

<!-- クラス全体での共有＝大グループ効果を活かせる。 -->

---

<!-- _class: fig -->

<div class="page-title">介入期間・教科の影響</div>

## 長期介入が最大、教科差は非有意

| 期間 | g (SE) | 教科 | g (SE) |
|---|---|---|---|
| 短期 ≤1週 | 0.41 (0.08) | 人文学 | 0.70 (0.32) |
| 中期 1–8週 | 0.41 (0.18) | <span class="hl">工学</span> | <span class="hl">0.65 (0.11)</span> |
| <span class="hl">長期 >8週</span> | <span class="hl">0.75 (0.13)</span> | 社会科学 | 0.38 (0.12) |
| | | 自然科学 | 0.38 (0.09) |

<div class="caption">Table 6 of Chen et al. (2024)</div>

<div class="takeaway">8週超の長期で g = 0.75（大）に達する。</div>

<!-- 単発授業より学期単位での継続が鍵。 -->

---

<!-- _class: fig -->

<div class="page-title">教育段階別</div>

## 中等教育で最大、初等教育は研究不足

| 段階 | 研究数 | g (SE) | 95%CI |
|---|---|---|---|
| <span class="hl">中等教育</span> | 9 | <span class="hl">0.54</span> | [0.22, 0.85] |
| 高等教育 | 38 | 0.49 | [0.33, 0.64] |
| 職業訓練 | 4 | 0.46 | [0.00, 0.92] |
| 混合 | 6 | 0.31 | [−0.04, 0.67] |
| 初等教育 | **1** | −0.07 n.s. | [−1.12, 0.97] |

<div class="caption">Table 7 of Chen et al. (2024) — F(4,91)=0.51, p=0.725</div>

<div class="takeaway">初等教育は採択1件のみ。実証研究が急務。</div>

<!-- 中学・高校なら効果が確かに出ている。 -->

---

<!-- _class: summary -->

<div class="page-title">初等教育で効果が小さい理由</div>

## GA支援は「自律的解釈」を前提とする

<div class="sections">

<div class="sec-box">

### 低〜中学年

- 具体的操作段階
- 抽象思考が未発達
- GA情報の意味づけ困難

</div>

<div class="sec-box">

### <span class="hl">高学年〜中学</span>

- <span class="hl">形式的操作への移行期</span>
- 抽象思考が芽生え
- 足場かけで効果発揮

</div>

<div class="sec-box">

### 高校・大学

- 自律的学習が成熟
- GA情報を活用できる
- 効果は安定する

</div>

</div>

<!-- 本発表の関心校種は「効果が出始める過渡期」。 -->

---

<!-- _class: fig -->

<div class="page-title">出版バイアスの検証</div>

## ファンネルプロットは対称・頑健

| 検証手法 | 結果 | 解釈 |
|---|---|---|
| ファンネルプロット | <span class="hl">対称形</span> | 出版バイアスなし |
| Classic fail-safe N | <span class="hl">9,955</span> | 臨界値490を大幅超過 |
| 効果消失に必要な未発表研究 | 9,955本 | 現実的にあり得ない |

<div class="caption">Figure 2 & Table 6 of Chen et al. (2024)</div>

<div class="takeaway">バイアスの懸念なし。結果は頑健。</div>

<!-- 「効果ありの研究」だけが発表されている可能性は低い。 -->

---

<!-- _class: summary -->

<div class="page-title">研究①の具体的な研究例</div>

## CSCL分野の代表的GA支援研究

<div class="sections">

<div class="sec-box">

### 行動的GA

**Janssen et al.**
相対的貢献度を可視化（誰が何回投稿したか）。中・高等教育の工学系（40〜69名）。行動参加と認知発達が向上。

</div>

<div class="sec-box">

### 認知的GA

**Engelmann & Hesse (2010, 2011)**
仲間の知識状態を可視化。高等教育・自然科学系（各120名、小グループ）。欠損知識を補う活動が活性化。

</div>

<div class="sec-box">

### 複合型GA

**Phielix et al. (2010, 2011)**
ピアフィードバックで雰囲気と貢献を可視化。中等教育39名（小グループ）。3アウトカムすべてを測定。

</div>

</div>

<!-- 「気づきまとめ」の生成AI版は複合型GAに位置づく。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 3</div>

# 研究② AIエージェントのメタ分析

## Liu et al. (2026) Computers in Human Behavior Reports

<!-- K-12教育におけるAI活用の最新メタ分析。 -->

---

<!-- _class: fig -->

<div class="page-title">研究②の概要</div>

## 34研究・3,042名のK-12メタ分析

| 項目 | 内容 |
|---|---|
| 対象期間 | 2020〜2025年 |
| 検索DB | WoS, ScienceDirect, Google Scholar, Springer |
| 最終採択 | <span class="hl">34研究</span> |
| 効果量数 | <span class="hl">73効果量</span> |
| 総参加者数 | <span class="hl">3,042名</span>（1,495 + 1,472） |
| 統計手法 | ランダム効果モデル（STATA 18.0） |
| 対象 | K-12（小1〜高3）のみ |

<div class="caption">Liu, Mbowe, Tahri, & Aziku (2026) CHBR 21: 100973</div>

<div class="takeaway">生成AI普及期の最新エビデンス。</div>

<!-- COVID後・生成AI登場後の研究を網羅した稀有なメタ分析。 -->

---

<!-- _class: fig -->

<div class="page-title">AIエージェントの4タイプ</div>

## 本研究が分類するAIの種類

| タイプ | 割合 | 内容 |
|---|---|---|
| 会話型AI | 41.1% | ChatGPT等のチャットボット。Q&A形式の対話 |
| <span class="hl">生成AI</span> | <span class="hl">23.3%</span> | テキスト・画像生成。ライティング支援。<span class="hl">本日の関心</span> |
| AIロボット | 21.9% | Pepper等の教育ロボット。身体性のある対話 |
| ITS | 13.7% | 知的チュータリングシステム。個別適応型学習 |

<div class="caption">Table 5 of Liu et al. (2026) — 4タイプ間に有意差なし</div>

<div class="takeaway">どのAIタイプでも効果量は中程度で有意。</div>

<!-- 4タイプ間に効果量の有意差なし（QB=0.069）。 -->

---

<!-- _class: fig -->

<div class="page-title">全体効果量（研究②）</div>

## 中程度の効果だが異質性が高い

| モデル | Hedges' g | 95%CI | Q | I² |
|---|---|---|---|---|
| 固定効果 | 0.269 | [0.221, 0.316] | 813.56*** | 91.2% |
| <span class="hl">ランダム効果</span> | <span class="hl">**0.404**</span> | [0.242, 0.567] | — | 91.2% |

<div class="caption">Table 3 of Liu et al. (2026) — Z=4.87, p<0.001, τ²=0.448</div>

73効果量の分布：大13件（17.8%）/ 中8件（11.0%）
小16件（21.9%）/ <span class="hl">無〜負36件（49.3%）</span>

<div class="takeaway">半数近い研究で効果が小さい/負＝設計次第。</div>

<!-- I²=91.2%の高異質性→モデレーター分析が決定的に重要。 -->

---

<!-- _class: fig -->

<div class="page-title">フォレストプロット要点</div>

## 効果量は研究間で大きくばらつく

| 研究 | 国 | Hedges' g |
|---|---|---|
| Elmaadaway et al. (2025) | Egypt | <span class="hl">2.12</span> |
| Chen et al. (2024) | China | 1.15 |
| Chen et al. (2022) | Taiwan | 1.07 |
| Feng & Wang (2023) | China | 0.76 |
| Pei et al. (2025) | China | 0.45 |
| Rücker & Becker-Genschow (2025) | Germany | −0.27 |
| Tong et al. (2025) | China | <span class="hl">−0.73</span> |

<div class="caption">Figure 2 of Liu et al. (2026) — 抜粋</div>

<div class="takeaway">+2.12 〜 −0.73 まで分布。文脈差が大きい。</div>

<!-- 正負両方向→「使い方次第」を物語る。 -->

---

<!-- _class: fig -->

<div class="page-title">学習者レベル別効果量</div>

## 小学校高学年が最大（g = 0.877）

| 学習者レベル | k | Hedges' g | 95%CI |
|---|---|---|---|
| <span class="hl">小学校高学年（4〜6年）</span> | 28 | <span class="hl">**0.877**</span> | [0.502, 1.253] |
| 小学校低学年（1〜3年） | 8 | 0.237 | [0.044, 0.431] |
| 中学校（7〜9年） | 17 | 0.195 | [0.012, 0.402] |
| 高校（10〜12年） | 19 | 0.037 n.s. | [−0.217, 0.290] |

<div class="caption">Table 5 of Liu et al. (2026) — QB=12.97, p=0.005</div>

<div class="takeaway">小学高学年は全体平均の2倍。本発表の主要ターゲット。</div>

<!-- 抽象思考への移行期＝AI支援の黄金期。 -->

---

<!-- _class: summary -->

<div class="page-title">なぜ小学高学年で最大？</div>

## Vygotsky のZPD理論と整合

<div class="sections">

<div class="sec-box">

### 小学校低学年

- 具体的操作段階
- 抽象思考が未発達
- 自律的対話が困難

</div>

<div class="sec-box">

### <span class="hl">小学校高学年</span>

- <span class="hl">形式的操作への移行</span>
- 抽象思考が芽生える
- スキャフォールド効果最大

</div>

<div class="sec-box">

### 高校以上

- 自律的学習が成熟
- AIへの依存が薄れる
- 効果サイズが減衰

</div>

</div>

<!-- 「学べる準備」と「自律」のスイートスポット。 -->

---

<!-- _class: fig -->

<div class="page-title">教科別効果量</div>

## 言語・芸術は大、自然科学は無効

| 教科領域 | k | Hedges' g | 95%CI |
|---|---|---|---|
| <span class="hl">言語・リテラシー</span> | 28 | <span class="hl">**0.830**</span> | [0.384, 1.127] |
| <span class="hl">芸術・創造性</span> | 4 | <span class="hl">0.755</span> | [0.112, 1.548] |
| 数学・情報技術 | 28 | 0.230 | [0.067, 0.393] |
| 自然科学 | 11 | −0.065 n.s. | [−0.454, 0.324] |

<div class="caption">Table 5 of Liu et al. (2026) — QB=7.61, p=0.006</div>

<div class="takeaway">国語・道徳・社会・総合の授業が高効果。</div>

<!-- 読み書きスキルはAIとの対話で伸びやすい。 -->

---

<!-- _class: fig -->

<div class="page-title">認知カテゴリー別</div>

## スキル・知識は有意、高次思考は不安定

| 認知カテゴリー | k | Hedges' g | I² |
|---|---|---|---|
| <span class="hl">スキルベース</span> | 42 | <span class="hl">**0.391***</span> | 90.0% |
| 知識ベース | 18 | 0.344* | 88.2% |
| 高次思考 | 13 | 0.540 n.s. | <span class="hl">95.4%</span> |

<div class="caption">Table 4 of Liu et al. (2026) — 高次思考はp=0.066</div>

<div class="takeaway">高次思考は「大きな可能性」だが不安定。</div>

<!-- 異質性95.4%→研究によって結果が真逆になることも。 -->

---

<!-- _class: fig -->

<div class="page-title">AIタイプ別効果量</div>

## 全タイプで有意。タイプ間差は非有意

| AIタイプ | k | Hedges' g | 95%CI |
|---|---|---|---|
| ITS | 10 | **0.540** | [0.241, 0.839] |
| AIロボット | 16 | 0.474 | [0.150, 0.799] |
| 会話型AI | 30 | 0.468 | [0.008, 0.645] |
| <span class="hl">生成AI</span> | 17 | <span class="hl">**0.421**</span> | [0.198, 0.645] |

<div class="caption">Table 5 of Liu et al. (2026) — QB=0.069, p=0.793</div>

<div class="takeaway">生成AIもITSと同等の効果（中程度）。</div>

<!-- 生成AIは新しいが、効果は既存AIと遜色なし。 -->

---

<!-- _class: summary -->

<div class="page-title">研究②の成功例</div>

## 言語・小学高学年・継続が共通点

<div class="sections">

<div class="sec-box">

### Feng & Wang (2023)

**g = 0.76**

中国語・英語のバイリンガル教育に生成AIを<span class="hl">24週間（120セッション）</span>。小学校高学年85名。作文とスピーキング。

</div>

<div class="sec-box">

### Chen et al. (2024)

**g = 1.15（大）**

中国語の詩の授業にAIを4週間。小学高学年80名。スキル＋高次思考を測定。<span class="hl">大きな効果</span>を確認。

</div>

<div class="sec-box">

### Pei et al. (2025)

**g = 0.45**

EFL英語ライティングに生成AI。13セッション・40分。高校99名。<span class="hl">作文スキル</span>の伸び。

</div>

</div>

<!-- 3例とも「言語×継続」がキーワード。 -->

---

<!-- _class: summary -->

<div class="page-title">研究②の失敗例</div>

## STEM教科では効果が出にくい

<div class="sections">

<div class="sec-box">

### Tong et al. (2025)

**g = −0.73**

物理の問題解決に会話型AI（120分/セッション）。中国115名。<span class="hl">統制群を下回る</span>。

</div>

<div class="sec-box">

### Rücker & Becker (2025)

**g = −0.27**

ドイツの中学校・<span class="hl">数学（平方根）</span>でAI導入。195名。同じく統制群を下回る。

</div>

<div class="sec-box">

### Yang et al. (2025)

**g = −0.13**

中国の高校・<span class="hl">プログラミング</span>。153名規模でも効果が出ない。

</div>

</div>

<!-- STEM教科（物理・数学・プログラミング）では別アプローチが必要。 -->

---

<!-- _class: fig -->

<div class="page-title">出版バイアス（研究②）</div>

## ファンネルは対称・極めて頑健

| 検証手法 | 結果 | 解釈 |
|---|---|---|
| ファンネルプロット | 対称形 | 出版バイアスなし |
| trim-and-fill 法 | <span class="hl">欠損研究 = 0</span> | バイアス補正不要 |
| Classic fail-safe N | **378** | 必要値180を超過 |
| Orwin's fail-safe N | <span class="hl">2,876</span> | 極めて頑健 |

<div class="caption">Figure 6 & Tables 6–7 of Liu et al. (2026)</div>

<div class="takeaway">バイアスの懸念なし。結果は信頼できる。</div>

<!-- 負の効果量も多数発表されている→バイアスが小さい証拠。 -->

---

<!-- _class: divider -->

<div class="chapter-num">CHAPTER 4</div>

# 統合と教室実装への示唆

## 2本のメタ分析が教えてくれること

<!-- 方法論的に独立した2研究が同じ方向を指している。 -->

---

<!-- _class: fig -->

<div class="page-title">2研究の比較</div>

## 独立な2メタ分析が同じ方向を示す

| 観点 | 研究①GA支援 | 研究②AI |
|---|---|---|
| 全体効果量 | g = <span class="hl">0.46</span> | g = <span class="hl">0.404</span> |
| 手法 | 三水準（R） | ランダム効果（STATA） |
| 最大効果 | 複合型×大グループ 0.71 | 小学高学年 0.877 |
| 認知効果 | 0.49 | スキル0.39, 知識0.34 |
| 教育段階 | 中等 0.54 | 小学高学年 0.88 |
| 長期介入 | >8週 0.75 | 1〜3ヶ月 0.39 |
| バイアス検証 | fail-safe 9,955 | fail-safe 378 |

<div class="caption">両研究とも「中程度・有意・設計依存」で一致</div>

<div class="takeaway">独立な2研究が同方向＝結論は頑健。</div>

<!-- 異なる方法論・対象でも同じ結論。 -->

---

<!-- _class: split -->

<div class="page-title">教室実装のビジョン</div>

## 生成AIによる「気づきまとめ」授業

<div class="split-body">
<div class="left">

| 段階 | 内容 |
|---|---|
| ① | グループワーク開始 |
| ② | 各自が気づきをワーク記入 |
| ③ | <span class="hl">生成AIが収集・統合</span> |
| ④ | ダッシュボード可視化 |
| ⑤ | 振り返り・修正 |
| ⑥ | 全体共有・教師FB |

<div class="caption">想定授業フロー（45〜50分）</div>

</div>
<div class="right">

### このビジョンの位置づけ

- 行動的GA：誰が気づいたか
- 認知的GA：何に気づいたか
- 社会的GA：グループの雰囲気
- <span class="hl">複合型GA = g = 0.65</span>
- 大グループ運用 = g = 0.71
- 小学高学年 = g = 0.877

</div>
</div>

<div class="takeaway">エビデンスが指す「最大効果」の組合せ設計。</div>

<!-- 3つの最大効果条件をすべて満たすシナリオ。 -->

---

<!-- _class: summary -->

<div class="page-title">デザイン原則 ①〜③</div>

## エビデンスに基づく設計の3つの基本

<div class="sections">

<div class="sec-box">

### ①複合型GAを設計

行動・認知・社会の3情報を組み合わせて可視化。単一型g=0.34に対して<span class="hl">複合型g=0.65</span>と約2倍の効果。

</div>

<div class="sec-box">

### ②小学高学年・言語系から

小学高学年g=<span class="hl">0.877</span>、言語g=<span class="hl">0.830</span>。国語・道徳・社会・総合の授業が高効果。

</div>

<div class="sec-box">

### ③大グループで実施

5人以上のグループでg=0.71、4人以下でg=0.38。<span class="hl">クラス全体共有</span>を組み込む。

</div>

</div>

<!-- 「誰に・何に・どう」の3軸でエビデンスがある。 -->

---

<!-- _class: summary -->

<div class="page-title">デザイン原則 ④〜⑥</div>

## 継続・足場かけ・統合の3つの応用

<div class="sections">

<div class="sec-box">

### ④学期単位で継続

短期g=0.41に対し<span class="hl">8週超でg=0.75</span>。単発授業ではなく1〜2学期間の継続が効果を最大化。

</div>

<div class="sec-box">

### ⑤低学年は足場かけ必須

GA支援は自律的解釈を前提とする。低学年は<span class="hl">教師の補助</span>でダッシュボードを読み解く設計が必要。

</div>

<div class="sec-box">

### ⑥スキャフォールド込み

AIは単独で完結しない。<span class="hl">授業計画・評価規準・教師FB</span>と統合して初めて効果を発揮する。

</div>

</div>

<!-- ツール単体ではなく「授業設計」が決め手。 -->

---

<!-- _class: summary -->

<div class="page-title">実装の注意点</div>

## エビデンスが示す3つの留意事項

<div class="sections">

<div class="sec-box">

### 教科を選ぶ

<span class="hl">自然科学g=−0.065 n.s.</span>。物理・数学・プログラミング等のSTEMでは別アプローチを維持する。

</div>

<div class="sec-box">

### 文化的一般化に注意

研究②の<span class="hl">67.7%が中国</span>の研究。日本の教室で同じ効果が出るかは別の実証研究が必要。

</div>

<div class="sec-box">

### 学齢を選ぶ

<span class="hl">高校g=0.037 n.s.</span>。AIサポートの優位性が薄れる。中学までを優先ターゲットに。

</div>

</div>

<!-- 「効かない条件」も明確に把握する。 -->

---

<!-- _class: summary -->

<div class="page-title">今後の研究課題</div>

## 残された3つの未解決問題

<div class="sections">

<div class="sec-box">

### 初等教育の研究不足

研究①の初等教育採択論文は<span class="hl">わずか1件</span>。日本の小中学校での実証研究が急務。

</div>

<div class="sec-box">

### 「気づきまとめ」単独の効果

生成AIによる<span class="hl">グループ気づき集約</span>そのものの効果量はまだ測定されていない。

</div>

<div class="sec-box">

### 高次思考の不安定性

研究②でI²=95.4%、p=0.066。<span class="hl">批判的思考への効果</span>の条件特定が必要。

</div>

</div>

<!-- 田川研究室の今後の方向性に直結する。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめ</div>

## まとめ

- GA支援全体の効果は g = 0.46（中程度・有意）
- 複合型GAは単一型の約2倍（0.65 vs 0.34）
- K-12でのAI全体効果は g = 0.404（中程度・有意）
- 小学校高学年で最大効果 g = 0.877（言語0.830）
- 生成AI単独でも g = 0.421。ITS並みの効果
- 2研究とも「設計と継続」が結果を左右する

<!-- 適切な設計で小中学校の協働学習を大きく促進できる。 -->

---

<!-- _class: refs -->

<div class="page-title">参考文献</div>

## 参考文献

- Chen, D., Zhang, Y., Luo, H., Zhu, Z., Ma, J., & Lin, Y. (2024). Effects of group awareness support in CSCL on students' learning performance: A three-level meta-analysis. *International Journal of Computer-Supported Collaborative Learning*, 19, 97–129. https://doi.org/10.1007/s11412-024-09418-3
- Liu, J., Mbowe, A. E., Tahri, D., & Aziku, M. (2026). Meta-analysis on the influence of AI agents on K-12 student cognitive performance. *Computers in Human Behavior Reports*, 21, 100973. https://doi.org/10.1016/j.chbr.2026.100973
- Cohen, J. (1992). A power primer. *Psychological Bulletin*, 112(1), 155–159.
- Dourish, P., & Bellotti, V. (1992). Awareness and coordination in shared workspaces. *Proceedings of CSCW '92*, 107–114.
- Viechtbauer, W. (2010). Conducting meta-analyses in R with the metafor package. *Journal of Statistical Software*, 36(3), 1–48.

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.s@faculty.gs.chiba-u.jp
