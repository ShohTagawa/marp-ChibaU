---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">教室の協働学習に生成AIを活かす（要約版）</div><img class="hdr-logo" src="./assets/chiba-logo.png" alt="千葉大学">'
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

# 教室の協働学習に<br>生成AIを活かす【要約版】

## Bloom (1984) から最新メタ分析へ──20分で読み解く効果量

### 田川　翔
### 千葉大学 国際未来教育基幹 / アカデミック・リンク・センター

<div class="meta">2026年5月19日 / 教育学部 研究会</div>

<!-- 完全版を20スライドに凝縮した要約版。 -->

---

<!-- _class: fig -->

<div class="page-title">Bloomの2シグマ問題（1984）</div>

## 1対1指導は集団授業を2標準偏差超える

| 学習条件 | 効果量 g | 平均的生徒の到達位置 |
|---|---|---|
| 通常の一斉授業（1対30） | 基準（g = 0） | 50パーセンタイル |
| 完全習得学習（1対30） | <span class="hl">≈ 1.0</span> | 84パーセンタイル |
| <span class="hl">1対1チュータリング</span> | <span class="hl">≈ 2.0</span> | <span class="hl">98パーセンタイル</span> |

<div class="caption">Bloom (1984) Figure 1 & Table I — Anania (1982, 1983), Burke (1984) の3条件比較</div>

<div class="takeaway">この2シグマ・ギャップを集団で実現する方法はあるか？</div>

<!-- Bloomは「家庭教師並みの効果を集団で出せる手法を探せ」と問題提起。 -->

---

<!-- _class: fig -->

<div class="page-title">2シグマを埋める変数の候補</div>

## Bloom Table I：効果量の高い「変えられる変数」

| 介入変数 | 効果量 g | 介入変数 | 効果量 g |
|---|---|---|---|
| Tutorial instruction | **2.00** | <span class="hl">Cooperative learning</span> | <span class="hl">**0.80**</span> |
| Reinforcement | 1.20 | Classroom morale | 0.60 |
| <span class="hl">Feedback-corrective (ML)</span> | <span class="hl">**1.00**</span> | Home environment | 0.50 |
| Cues and explanations | 1.00 | Peer tutoring | 0.40 |
| Student participation | 1.00 | Higher order questions | 0.30 |
| Time on task | 1.00 | Advance organizers | 0.20 |

<div class="caption">Bloom (1984) Table I — Walberg (1984) を元に再構成</div>

<div class="takeaway">協調学習 g = 0.80。本日扱うGA・AI支援はこの延長線上。</div>

<!-- 「協調学習」がすでに高い効果量。これに気づき支援を加えると？ -->

---

<!-- _class: message -->

# 2シグマ問題は<br>生成AIで解けるか？

## グループの「気づきまとめ」をAIが担うと効果はどう変わるか

<!-- 2025年代、AIで集団授業の効果量を押し上げる現実的シナリオを描く。 -->

---

<!-- _class: refs -->

<div class="page-title">本日扱う主要文献</div>

## エビデンスの出典

- **①Chen, D., Zhang, Y., Luo, H., Zhu, Z., Ma, J., & Lin, Y. (2024).** Effects of group awareness support in CSCL on students' learning performance: A three-level meta-analysis. *International Journal of Computer-Supported Collaborative Learning*, 19, 97–129.
- **②Liu, J., Mbowe, A. E., Tahri, D., & Aziku, M. (2026).** Meta-analysis on the influence of AI agents on K-12 student cognitive performance. *Computers in Human Behavior Reports*, 21, 100973.
- **③Bloom, B. S. (1984).** The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. *Educational Researcher*, 13(6), 4–16.
- **④Cohen, J. (1992).** A power primer. *Psychological Bulletin*, 112(1), 155–159.
- **⑤Dourish, P., & Bellotti, V. (1992).** Awareness and coordination in shared workspaces. *Proceedings of CSCW '92*, 107–114.

<!-- 5本で本日の議論の99%をカバーする。 -->

---

<!-- _class: summary -->

<div class="page-title">用語・略語の定義</div>

## 本日使用する略語

<div class="sections">

<div class="sec-box">

### 学習理論・設計

- <span class="hl">CSCL</span>：Computer-Supported Collaborative Learning（コンピュータ支援協調学習）
- <span class="hl">GA</span>：Group Awareness（メンバー活動の理解）
- <span class="hl">ZPD</span>：Zone of Proximal Development（発達の最近接領域、Vygotsky）

</div>

<div class="sec-box">

### AI・教育技術

- <span class="hl">GenAI</span>：Generative AI（生成AI、ChatGPT等）
- <span class="hl">ITS</span>：Intelligent Tutoring System（知的チュータリング）
- <span class="hl">K-12</span>：幼稚園〜高校3年（初中等教育）

</div>

<div class="sec-box">

### 統計

- <span class="hl">SMD / Hedges' g</span>：標準化平均差（効果量指標）
- <span class="hl">CI / SE / I²</span>：信頼区間／標準誤差／異質性指標
- <span class="hl">PRISMA</span>：系統的レビュー報告基準

</div>

</div>

<!-- 略語は出てきた時点で確認できるよう先に一覧化。 -->

---

<!-- _class: fig -->

<div class="page-title">メタ分析とHedges' g</div>

## 効果量の解釈基準と本日扱う主要値

$$g = J \times \frac{\bar{X}_{実験群} - \bar{X}_{統制群}}{SD_{pooled}}$$

| Hedges' g | 効果 | 本日の主要値 |
|---|---|---|
| 0.2 | 小 | — |
| 0.5 | 中 | <span class="hl">研究① g = 0.46 / 研究② g = 0.404</span> |
| 0.8 | 大 | <span class="hl">研究② 小学高学年 g = 0.877</span> |
| <span class="hl">2.0</span> | 極大 | <span class="hl">Bloom 1対1指導</span> |

<div class="caption">Cohen (1992) の基準 + 本研究で扱う効果量の位置づけ</div>

<div class="takeaway">g = 0.5 は偏差値+5点。両研究の全体効果は中程度。</div>

<!-- 教育研究では g = 0.4 でも十分に実用的な効果。 -->

---

<!-- _class: fig -->

<div class="page-title">研究①：GA支援メタ分析</div>

## Chen et al. (2024) IJCSCL の概要

| 項目 | 内容 |
|---|---|
| 対象期間 | 2000〜2022年 |
| 検索DB | WoS, ScienceDirect, Wiley, Springer, ERIC |
| 最終採択 | <span class="hl">46研究 / 96効果量 / 58独立研究</span> |
| 統計手法 | <span class="hl">三水準メタ分析</span>（metafor, R） |
| GA支援の3タイプ | 行動的・認知的・社会的 |
| 学習アウトカム | 行動参加・認知発達・社会的感情 |

<div class="caption">Chen et al. (2024) — Cohen's κ = 0.90</div>

<div class="takeaway">「気づきまとめ」は認知的GA + 複合型に位置づく。</div>

<!-- CSCL分野で初の三水準メタ分析。 -->

---

<!-- _class: summary -->

<div class="page-title">どんなGA支援か（具体例）</div>

## 3タイプそれぞれの実装と代表研究

<div class="sections">

<div class="sec-box">

### 行動的GA：「誰がどれだけ貢献したか」

- **画面に表示するもの**：各メンバーの投稿数バー、発言時間メーター、編集回数の円グラフ
- **代表研究 Janssen et al.**：チャット投稿数を棒グラフで全員に可視化 → <span class="hl">行動参加 g = 0.53</span>
- **学習者が気づくこと**：「自分の発言が少ない」「Aさんが頑張っている」

</div>

<div class="sec-box">

### 認知的GA：「仲間が何を知っている/気づいたか」

- **画面に表示するもの**：各自の事前テスト結果ヒートマップ、コンセプトマップ重ね合わせ、気づき一覧
- **代表研究 Engelmann & Hesse (2010, 2011)**：メンバーが持つ知識項目をマトリクスで可視化 → <span class="hl">認知発達 g = 0.32〜0.45</span>
- **学習者が気づくこと**：「Bさんはこの部分を知らない」「私が説明すべき」

</div>

<div class="sec-box">

### 社会的GA / 複合型：「グループの雰囲気・信頼感」

- **画面に表示するもの**：ピア評価レーダーチャート、感情タグ、グループ満足度バー
- **代表研究 Phielix et al. (2010, 2011)**：複合型でピア評価＋気づき＋雰囲気を統合可視化 → <span class="hl">複合型全体 g = 0.65</span>
- **学習者が気づくこと**：「グループはまだ温まっていない」「もう少し聴く役に回ろう」

</div>

</div>

<!-- 抽象的なGAではなく「画面に何が出るか・学習者が何に気づくか」で説明。 -->

---

<!-- _class: fig -->

<div class="page-title">認知的GAはどう成績に効くか</div>

## 「仲間の知識を知る」が学力に変換される4経路

| 認知メカニズム | 学習者の活動 | 効果量への寄与 |
|---|---|---|
| ①知識ギャップの自覚 | 「自分は◯◯を理解できていない」と気づく | <span class="hl">認知的GA → 認知発達 g = 0.32</span> |
| ②相互教授（learn by teaching） | 「Bさんが知らないから私が説明」→ 自分の理解も深化 | <span class="hl">行動的GA → 認知発達 g = 0.45</span> |
| ③認知的葛藤と統合 | 異なる解釈の衝突 → 議論で深い理解へ | <span class="hl">複合型全体 g = 0.65</span> |
| ④共通基盤の形成 | 全員が同じ前提で議論可能になる | <span class="hl">認知発達全体 g = 0.49</span> |

<div class="caption">Sangin et al. (2011), Engelmann & Hesse (2010) — 欠損知識を補う活動が認知発達を促進</div>

<div class="takeaway">「気づく→教える/学ぶ→深まる」連鎖が成績を押し上げる。</div>

<!-- 認知的GAは知識ギャップの可視化が起点。そこから4経路で学力に変換される。 -->

---

<!-- _class: fig -->

<div class="page-title">研究①の主要結果</div>

## 全体効果と3アウトカム別の効果量

| 分析 | Hedges' g (SE) | 95%CI |
|---|---|---|
| **全体効果量** | **<span class="hl">0.46</span>** (0.06) | [0.34, 0.58] |
| 認知的発達 | <span class="hl">0.49</span> (0.08) | [0.33, 0.65] |
| 行動的参加 | 0.47 (0.11) | [0.24, 0.69] |
| 社会的感情 | 0.38 (0.07) | [0.23, 0.53] |

<div class="caption">Table 3 of Chen et al. (2024) — すべて p < 0.001</div>

<div class="takeaway">GA支援は学習を約0.46 SD押し上げる。中程度・有意。</div>

<!-- 3アウトカムいずれも有意な正の効果。 -->

---

<!-- _class: fig -->

<div class="page-title">研究①のモデレーター</div>

## 「効く条件」の特定：3つの重要要因

| モデレーター | 高効果条件 | 低効果条件 |
|---|---|---|
| <span class="hl">GAタイプ</span> | <span class="hl">複合型 g = 0.65</span> | 単一型 g = 0.34 |
| <span class="hl">グループサイズ</span> | <span class="hl">5人以上 g = 0.71</span> | 2〜4人 g = 0.38 |
| 介入期間 | <span class="hl">8週超 g = 0.75</span> | 短期〜中期 g = 0.41 |
| 教育段階 | 中等教育 g = 0.54 | 初等教育 −0.07（採択1件） |

<div class="caption">Tables 4–7 of Chen et al. (2024)</div>

<div class="takeaway">複合型 × 大グループ × 長期継続 = 最大効果。</div>

<!-- 「気づきまとめ」を設計する上での3つの鍵。 -->

---

<!-- _class: fig -->

<div class="page-title">研究②：AIエージェントメタ分析</div>

## Liu et al. (2026) CHBR の概要

| 項目 | 内容 |
|---|---|
| 対象期間 | 2020〜2025年 |
| 最終採択 | <span class="hl">34研究 / 73効果量 / 3,042名</span> |
| 統計手法 | ランダム効果モデル（STATA 18） |
| 全体効果量 | <span class="hl">**g = 0.404**</span>, 95%CI [0.242, 0.567] |
| 異質性 | I² = 91.2%（高） |
| AIタイプ | 会話型 / 生成AI / ロボット / ITS |

<div class="caption">Liu et al. (2026) — Z = 4.87, p < 0.001</div>

<div class="takeaway">K-12でAIエージェントは中程度の効果。設計次第で大きく変動。</div>

<!-- 高異質性 = モデレーター分析が決定的に重要。 -->

---

<!-- _class: fig -->

<div class="page-title">学習者レベル別効果量</div>

## 小学校高学年で最大効果（g = 0.877）

| 学習者レベル | k | Hedges' g | 95%CI |
|---|---|---|---|
| <span class="hl">小学校高学年（4〜6年）</span> | 28 | <span class="hl">**0.877**</span> | [0.502, 1.253] |
| 小学校低学年（1〜3年） | 8 | 0.237 | [0.044, 0.431] |
| 中学校（7〜9年） | 17 | 0.195 | [0.012, 0.402] |
| 高校（10〜12年） | 19 | 0.037 n.s. | [−0.217, 0.290] |

<div class="caption">Table 5 of Liu et al. (2026) — QB = 12.97, p = 0.005</div>

<div class="takeaway">小学高学年は全体平均の2倍。本発表の主要ターゲット。</div>

<!-- 形式的操作への移行期（Vygotsky ZPDと整合）。 -->

---

<!-- _class: fig -->

<div class="page-title">教科別・認知別効果量</div>

## 言語系で最大、自然科学では効果なし

| 教科 | g | 認知カテゴリ | g |
|---|---|---|---|
| <span class="hl">言語・リテラシー</span> | <span class="hl">0.830</span>*** | スキルベース | 0.391*** |
| 芸術・創造性 | 0.755* | 知識ベース | 0.344* |
| 数学・情報技術 | 0.230** | 高次思考 | 0.540 n.s. |
| 自然科学 | −0.065 n.s. | | |

<div class="caption">Table 5 & Table 4 of Liu et al. (2026)</div>

<div class="takeaway">国語・道徳・総合の授業 + スキル習得で最大効果。</div>

<!-- 自然科学（探究・実験）はAIとの相性が悪い。 -->

---

<!-- _class: fig -->

<div class="page-title">AIタイプ別効果量</div>

## 生成AIもITSと同等の効果（タイプ間差なし）

| AIタイプ | k | Hedges' g | 95%CI |
|---|---|---|---|
| ITS | 10 | **0.540** | [0.241, 0.839] |
| AIロボット | 16 | 0.474 | [0.150, 0.799] |
| 会話型AI | 30 | 0.468 | [0.008, 0.645] |
| <span class="hl">生成AI</span> | 17 | <span class="hl">**0.421**</span> | [0.198, 0.645] |

<div class="caption">Table 5 of Liu et al. (2026) — QB = 0.069, p = 0.793</div>

<div class="takeaway">生成AIは新参でも既存AIと同等の効果を出す。</div>

<!-- 「ツール選び」より「使い方」が決め手。 -->

---

<!-- _class: summary -->

<div class="page-title">研究②の代表例</div>

## 成功例と失敗例の対比

<div class="sections">

<div class="sec-box">

### 成功例：言語×継続×小学高学年

- **Feng & Wang (2023)**: 中国語/英語、24週・小学高学年85名、<span class="hl">g = 0.76</span>
- **Chen et al. (2024)**: 中国語の詩、4週・小学高学年80名、<span class="hl">g = 1.15</span>
- **Pei et al. (2025)**: EFLライティング、高校99名、g = 0.45

</div>

<div class="sec-box">

### 失敗例：STEM教科

- **Tong et al. (2025)**: 物理×会話型AI、中国115名、<span class="hl">g = −0.73</span>
- **Rücker & Becker (2025)**: 中学数学・ドイツ195名、g = −0.27
- **Yang et al. (2025)**: 高校プログラミング・153名、g = −0.13

</div>

<div class="sec-box">

### 教訓

- 言語×小学高学年×継続 = 大効果
- 物理・数学・プログラミングは別アプローチ必要
- 設計と教科特性の見極めが鍵

</div>

</div>

<!-- 成功も失敗も「設計次第」を示している。 -->

---

<!-- _class: fig -->

<div class="page-title">2研究の比較</div>

## 独立な2メタ分析が同方向を指す

| 観点 | 研究① GA支援 | 研究② AI |
|---|---|---|
| 全体効果量 | g = <span class="hl">0.46</span> | g = <span class="hl">0.404</span> |
| 手法 | 三水準（R, metafor） | ランダム効果（STATA） |
| 最大効果 | 複合型×大グループ 0.71 | 小学高学年 0.877 |
| 長期介入 | >8週で 0.75 | 1〜3ヶ月で 0.39 |
| 出版バイアス | fail-safe N = 9,955 | fail-safe N = 378 |

<div class="caption">両研究とも「中程度・有意・設計依存」で一致</div>

<div class="takeaway">方法論が異なる2研究が同方向＝結論は頑健。</div>

<!-- 偶然の一致ではない。GA×AIの組合せに勝算がある。 -->

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

<!-- 3つの最大効果条件を全て満たすシナリオ。 -->

---

<!-- _class: summary -->

<div class="page-title">エビデンスに基づくデザイン原則</div>

## 6つの実装指針

<div class="sections">

<div class="sec-box">

### ①複合型GA × ②小学高学年・言語系から

行動・認知・社会の3情報を組合せて可視化（複合型 g = 0.65）。<span class="hl">国語・道徳・社会・総合</span>から開始（言語 g = 0.83、小学高学年 g = 0.877）。

</div>

<div class="sec-box">

### ③大グループ × ④長期継続

5人以上のグループでg = 0.71。<span class="hl">8週超でg = 0.75</span>。単発授業ではなく学期単位での継続が鍵。

</div>

<div class="sec-box">

### ⑤足場かけ × ⑥スキャフォールド込み

低学年は教師の補助でダッシュボードを読み解く。<span class="hl">AIは授業計画・評価規準・教師FBと統合</span>して初めて効果を発揮。

</div>

</div>

<!-- 6原則を3つの軸に統合：誰に・どう設計・どう運用。 -->

---

<!-- _class: wrap -->

<div class="page-title">まとめと今後</div>

## まとめ：エビデンスが示すこと

- Bloomの2シグマ問題（1対1指導 g = 2.0）が出発点
- 研究①GA支援の全体効果は g = 0.46（中程度）
- 研究②K-12 AIの全体効果は g = 0.404（中程度）
- 小学校高学年で最大効果 g = 0.877（言語 g = 0.830）
- 生成AI単独でも g = 0.421（ITS並み）
- <span class="hl">複合型GA × 大グループ × 長期 × 言語系</span>が最適解
- 今後の課題：日本の小中学校での実証研究、生成AIによる気づきまとめ単独効果の測定

<!-- 適切な設計で2シグマギャップを縮めうる可能性がある。 -->

---

<!-- _class: qa -->

<div class="page-title">Q&amp;A</div>

# Q&A

## tagawa.s@faculty.gs.chiba-u.jp
