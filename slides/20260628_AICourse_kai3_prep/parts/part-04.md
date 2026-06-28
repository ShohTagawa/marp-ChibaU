<!-- _class: cover-hero -->

<div class="page-title">1　イントロ</div>

<div class="title-hero">
<div class="title-small">生成AI活用講座 <b>第3回</b></div>
<div class="title-big">予習編3：情報系での研究結果から</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig48-cover-canyon.png" alt="講師"></div>
<div class="title-meta">
<div class="title-date">2025/10/2 公開　講師：田川 翔</div>
<div>千葉大学 国際未来教育基幹 助教</div>
<div class="box-info" style="margin-top:16px; font-size:20px; text-align:left;">東大松尾研究室の授業スライドから<br><a href="https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/">https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/</a><br>(CC BY-NC-ND 4.0 )</div>
</div>
</div>

<!--
- 予習編3は、情報系の研究結果からプロンプティングを見ていきます。東大松尾研の授業スライド(CC BY-NC-ND 4.0)を参照しています。
-->

---

<div class="page-title">1　イントロ</div>

# <span style="color:var(--accent-dark)">AIが得意なこと？</span>

<div style="display:flex; align-items:center; justify-content:center; min-height:300px;">
<div class="box-accent" style="font-size:48px; font-weight:800; padding:32px 64px; text-align:center;">要約、推測、変換、拡張</div>
</div>

<!--
- AIが得意なことは、ざっくり言えば「要約・推測・変換・拡張」の4つです。
-->

---

<!-- _class: fig -->

<div class="page-title">1　イントロ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>Zero shot/ Few Shot</span></div>

## プロンプティング（Prompting）とは？

<div class="lead-note" style="text-align:center;">特定の機能の発生を促進 (prompt)するような言語モデルに入力するコンテキスト文</div>

<div class="fig-area">
<img src="./src/fig49-zeroshot.png" alt="Zero-Shot / Few-Shot のプロンプト例" style="max-height:380px;">
</div>

<div class="box-info pip-safe" style="font-size:20px;">与える指示や事例を変えれば異なることができる<br>（例：ポジネガ判定なら「次の文章がポジティブかネガティブか分類して」など）</div>

<div class="cite">[6] Tom B. Brown et al.(2020), <span class="j">“Language Models are Few-Shot Learners”</span>, NeurIPS2020</div>

<!--
- プロンプティングとは、特定の機能の発生を促す、モデルに入力するコンテキスト文のことです。事例ゼロのZero-Shotと、例を与えるFew-Shotがあります。
-->

---

<!-- _class: fig -->

<div class="page-title">1　イントロ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>コンテキストを充実させる</span></div>

## Few-Shot Promptingと文脈内学習（In-Context Learning）

<div class="fig-area">
<img src="./src/fig50-icl.png" alt="Few-Shot Prompting (Demonstration) と ICL のスケーリング" style="max-height:360px;">
</div>

<ul style="font-size:22px; margin:0 0 0 1em;">
<li>特にモデルが大規模な場合Few-Shotのデモンストレーションの追加可能性能が大幅に上がることが多い (右図)</li>
<li>文脈から学習するため、文脈内学習 (In-Context Learning)と呼ばれる.</li>
</ul>

<div class="cite pip-safe">[6] Tom B. Brown et al.(2020), <span class="j">“Language Models are Few-Shot Learners”</span>, NeurIPS2020より引用</div>

<!--
- 例を与えるFew-Shotは、モデルが大規模なほど効果が大きい傾向があります。これを文脈内学習(In-Context Learning)と呼びます。
-->

---

<!-- _class: fig -->

<div class="page-title">1　イントロ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>プロンプトで精度が変わる！</span></div>

## プロンプトの重要性｜指示文の違いの影響

<div class="fig-area">
<img src="./src/fig51-perplexity.png" alt="AG News タスクのプロンプト別 Accuracy 表" style="max-height:330px;">
</div>

<ul style="font-size:22px; margin:0 0 0 1em;">
<li>AG Newsはニュースのカテゴリ分類タスク<br><a href="https://huggingface.co/datasets/ag_news/viewer/default/train">https://huggingface.co/datasets/ag_news/viewer/default/train</a></li>
<li>プロンプトによって性能が30%変化</li>
</ul>

<div class="cite pip-safe">[8] Hila Gonen et al.(2022), <span class="j">“Demystifying Prompts in Language Models via Perplexity Estimation”</span>, 2022, より作成、一部改変</div>

<!--
- 同じタスクでも、指示文の書き方しだいで精度が30%も変わるという研究があります。
-->

---

<!-- _class: fig -->

<div class="page-title">1　イントロ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>プロンプトで精度が変わる！</span></div>

## デモンストレーション例入れるほど良くなる

<div class="fig-area">
<img src="./src/fig52-manyshot.png" alt="Many-Shot In-Context Learning の各タスクでの性能向上" style="max-height:380px;">
</div>

<div class="lead-note pip-safe">タスクによっては、ICLのみで特化モデルのfinetuningと匹敵する</div>

<div class="cite pip-safe">[70] Agarwal et al.(2024), <span class="j">“Many-Shot In-Context Learning”</span>, 2024, より引用</div>

<!--
- デモンストレーションの例を増やすほど性能が上がり、タスクによってはファインチューニングに匹敵することもあります。
-->

---

<!-- _class: fig -->

<div class="page-title">まとめ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>思考過程を描かせる  (CoT)</span></div>

## Chain-of-Thought (CoT) Prompting

<div class="fig-area">
<img src="./src/fig53-cot.png" alt="Standard Prompting と CoT Prompting の比較・GSM8K の正解率" style="max-height:340px;">
</div>

<ul style="font-size:22px; margin:0 0 0 1em;">
<li>Few-Shotの事例の隙間に思考過程を入れる (Chain of thought prompting)と、新しい質問についても思考過程を明示してくれる。</li>
<li>算数の文章題など、従来難しいとされていた推論タスクで大幅に性能が向上。</li>
</ul>

<div class="cite pip-safe">[13] Jason Wei et al.(2022), <span class="j">“Chain-of-Thought Prompting Elicits Reasoning in Large Language Models”</span>, NeurIPS2022</div>

<!--
- 思考過程を例として書いておくと、AIも新しい問いで思考過程を示すようになります。これがChain-of-Thought (CoT)です。算数の文章題などで効果が大きい。
-->

---

<!-- _class: fig -->

<div class="page-title">まとめ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>思考過程を描かせる  (CoT)</span></div>

## 入力するプロンプトによる性能の変化

<div class="fig-area">
<img src="./src/fig54-cottable.png" alt="Zero-Shot Reasoners：プロンプト別 Accuracy 表" style="max-height:380px;">
</div>

<ul style="font-size:22px; margin:0 0 0 1em;">
<li>Instructiveなプロンプトは性能を改善</li>
<li>MisleadingとIrrelevantは性能を改善しないか悪化。</li>
</ul>

<div class="cite pip-safe">[16] Takeshi Kojima et al.(2022), <span class="j">“Large Language Models are Zero-Shot Reasoners”</span>, NeurIPS2022 より引用、一部改変</div>

<!--
- 段階的に考えさせる指示は性能を改善しますが、誤誘導や無関係な指示はむしろ悪化させます。
-->

---

<!-- _class: fig -->

<div class="page-title">まとめ</div>

<div class="subhead"><span class="tag tag-soft">より詳しく</span><span>結果で多数欠する</span></div>

## CoTの推論能力の改善：Self Consistency

<div class="fig-area">
<img src="./src/fig55-selfcons.png" alt="Self-Consistency：複数の推論パスを集約して多数決" style="max-height:340px;">
</div>

<div class="lead-note pip-safe">LMに複数の推論を行わせて (上は3つの例)、多数決で答えを決定。<br>※ 文脈にもっともらしいから正しい推論とは限らないことを示唆。</div>

<div class="cite pip-safe">[14] Kuizhi Wang et al.(2022), <span class="j">“Self-Consistency Improves Chain of Thought Reasoning in Language Models”</span>, ICLR2023より引用</div>

<!--
- 複数の推論を走らせて多数決で答えを決めるのがSelf-Consistencyです。もっともらしくても正しいとは限らない、という点も示唆しています。
-->

---

<!-- _class: split -->

<div class="page-title">まとめ</div>

# AI AGENT化 <span style="font-size:24px; color:var(--muted);">(田川私見)</span>

<div class="box-accent" style="margin-bottom:14px;">AI Agent=「状況を観察し，自由に使えるツールを用いて働きかけることにより，目標を達成するアプリケーション」(Wiesinger et al., 2025)</div>

<div style="display:grid; grid-template-columns: 1.05fr 0.95fr; gap:28px; align-items:start;">

<div>
<img src="./src/fig56-agent.png" alt="ツールを使って自律的に作業するAIエージェントの画面" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>

<div>
<div class="box-info" style="font-size:21px;"><b>グラウンディング：</b><br>AIが生成する回答を、特定の信頼できる情報源（ソース）にしっかりと結びつける技術</div>

<div style="margin-top:14px; font-size:24px; line-height:1.7;">
<div style="display:flex; align-items:center; gap:12px;"><b style="width:2.4em;">昔：</b><span style="display:inline-block; background:#0F766E; color:#fff; border-radius:6px; padding:4px 18px; font-weight:800;">AI</span><span style="font-size:30px;">➡</span><span>回答</span></div>
<div style="display:flex; align-items:center; gap:12px; margin-top:10px;"><b style="width:2.4em;">今：</b><span style="display:inline-block; background:#0F766E; color:#fff; border-radius:6px; padding:4px 14px; font-weight:800;">データ</span><span style="font-size:30px; position:relative;"><span style="position:absolute; top:-18px; left:50%; transform:translateX(-50%); color:var(--accent); font-size:18px; font-weight:800;">AI</span>➡</span><span>回答</span></div>
</div>

<div class="lead-note pip-safe" style="margin-top:14px;"><b>「推論」「思考ツール」</b>になりつつある</div>
</div>

</div>

<!--
- AIは単に答えを出す存在から、状況を観察しツールを使って目標を達成する「エージェント」へ。回答を信頼できるソースに結びつけるグラウンディングが鍵で、AIは「推論」「思考ツール」になりつつあります。
-->

---

<!-- _class: split -->

<div class="page-title">まとめ</div>

# 余計に書かなくてもある程度回る <span style="font-size:24px; color:var(--muted);">(田川私見)</span>

<div style="display:grid; grid-template-columns: 1.05fr 0.95fr; gap:28px; align-items:start;">

<div>
<div class="box-accent"><b>商用の場合、CoTを指示する必要はない</b><br>　※ o3 → 高度な段階的推論 (CoT) <br>　※ 不必要に誘導すると、かえって混乱</div>

<div class="box-info" style="margin-top:14px;"><b>コンテキストや文脈内学習は、<br>　引き続き重要に </b>(geminiは本1冊入る！)<br>　例: プログラミングを書かせる</div>

<div class="box-warn pip-safe" style="margin-top:14px;">Few shot(outputの明示)や意図の説明も、<br>　<b>いまだ有効なテクニック</b></div>
</div>

<div>
<img src="./src/fig57-context.png" alt="長いコンテキストで段階的に推論するAIの画面" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>

</div>

<!--
- 商用の高性能モデルでは、わざわざCoTを指示しなくても段階的に推論してくれます。むしろ余計な誘導は混乱のもと。一方でコンテキストの充実やFew-Shot、意図の説明は今も有効です。
-->

---

<div class="page-title">6 教育活用</div>

<div class="subhead"><span class="tag tag-soft">実際の教育活用の技を体験する</span></div>

# <b>(時間がある場合デモ)</b> 探究の支援ツールにする

<div class="stepbox">
<div class="st"><b>①</b> web検索可能なAI (deep researchなど)で、調べるべき内容を教員が一気に検索しておく</div>
</div>

<div class="stepbox">
<div class="st"><b>②</b> その内容で得られた「リンク」をもとに、学生の調べ学習の参考資料を出す<br><span style="font-size:22px; color:var(--muted);">(もちろん学生自身が自分で検索できることも重要)</span></div>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>③</b> 学生はGeminiで要約したり、理解するための道具としたり、教科との関連付けを調べたりする</div>
</div>

<!--
- 探究の支援ツールとしての使い方デモです。教員が先にdeep researchで調べ、得たリンクを学生の参考資料にし、学生はGeminiで要約や関連付けに使う、という流れです。
-->
