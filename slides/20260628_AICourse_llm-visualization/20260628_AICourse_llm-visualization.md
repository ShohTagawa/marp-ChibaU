---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    --accent: #0F574C;
    --accent-dark: #073A31;
    --accent-soft: #E3EEEB;
  }
  section .page-title { left: 16%; width: 36%; }
  /* スライド3：学習/推論の2枠 */
  .ti-row { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin: 8px 0 14px; }
  .ti-col { }
  .ti-head { font-size: 34px; font-weight: 800; color: #fff; border-radius: 12px; padding: 10px 0; text-align: center; }
  .ti-head.train { background: var(--accent-dark); }
  .ti-head.infer { background: #4A1F4D; }
  .ti-body { font-size: 27px; line-height: 1.5; padding: 12px 8px 4px 14px; }
  .ti-col.infer-wrap { border: 3px solid #C0182B; border-radius: 14px; padding: 6px 10px; }
  .pts { font-size: 26px; line-height: 1.62; margin: 6px 0 0; }
  .pts .row { display: grid; grid-template-columns: 1.6em 1fr; margin: 8px 0; }
  .pts .no { font-weight: 800; color: var(--accent); }
  .pts b { color: var(--accent-dark); }
---

<!-- _class: fig -->

<div class="page-title">アンドレイ・カーパシー</div>

## 「LLM Visualization」の作者をたどる

<div class="fig-area">

<img src="./src/fig01-img.png" alt="ウィキペディア『アンドレイ・カーパシー』のページ。OpenAIの共同設立者でディープラーニング／コンピュータビジョンを専門とする計算機科学者">

</div>

<div class="caption">出典：フリー百科事典『ウィキペディア（Wikipedia）』</div>

<!-- LLMの内部を可視化する教材の背景。まずは関連人物としてアンドレイ・カーパシーを紹介する。 -->

---

<!-- _class: fig -->

<div class="page-title">教材『LLM Visualization』</div>

## 作者 Brendan Bycroft と公開教材

<div class="fig-area">

<img src="./src/fig02-img.png" alt="Brendan Bycroft（Software Engineer）の個人サイト。Projects欄に LLM Visualization：OpenAIのChatGPTを支えるLLMアルゴリズムを可視化・解説する教材">

</div>

<div class="caption">Brendan Bycroft, <i>LLM Visualization</i>（個人サイトの Projects より）</div>

<!-- LLM Visualization は、ChatGPTを支えるLLMアルゴリズムを「足し算・掛け算のレベルまで」可視化して歩いて見られる教材。 -->

---

<div class="page-title">LLM Visualization</div>

<div class="subhead"><span class="mag">🔎</span> LLM Visualization で「学習」と「推論」を見る</div>

<div class="ti-row">

<div class="ti-col">
<div class="ti-head train">学習 (トレーニング)</div>
<div class="ti-body">AIの重みを作り、<br>AIが機能するようにする処理</div>
</div>

<div class="ti-col infer-wrap">
<div class="ti-head infer">推論</div>
<div class="ti-body">学習で得られた重みを使い、<br>出力を作成する処理</div>
</div>

</div>

<div class="pts">
<div class="row"><span class="no">①</span><span>大規模言語モデルは、次のtokenを確率的に予想するタスクを行っている。</span></div>
<div class="row"><span class="no">②</span><span>大量の掛け算・足し算 (= 線形台数)を中心に計算が進んでいる。<br>※ 非線形の処理は、極めて限られている。</span></div>
<div class="row"><span class="no">③</span><span>AIの計算量は、とても大きい。</span></div>
</div>

<!-- 学習＝重みを作る処理／推論＝重みを使って出力する処理。LLMの計算は次トークンの確率予測で、掛け算・足し算（線形代数）が中心、非線形処理はごく一部、計算量は莫大。 -->
