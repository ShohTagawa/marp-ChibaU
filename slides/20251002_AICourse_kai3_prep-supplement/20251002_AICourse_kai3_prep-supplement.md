---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用講座</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ティール。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section .page-title { left: 19%; width: 40%; }
  .src-note { font-size: 17px; color: #888; }
  .paper-cap { font-size: 20px; color: #555; margin-bottom: 2px; }
  .paper-ttl { font-size: 30px; font-weight: 800; color: var(--accent-dark); margin: 0 0 10px; }
  .figframe { border: 1px solid #dfe5e3; border-radius: 10px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.07); padding: 8px; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座 <b>第3回</b></div>
<div class="title-big" style="font-size:50px;">(予習編補足：情報系での研究結果から)</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig01-img.png" alt="講師"></div>
<div class="title-meta">
<div class="title-date">2025/10/2 公開　講師：田川 翔<br><span style="font-size:21px;">千葉大学 国際未来教育基幹 助教</span></div>
<div style="font-size:21px; line-height:1.6;">東大松尾研究室の授業スライドから<br><a href="https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/" style="color:var(--accent);">https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/</a><br>(CC BY-NC-ND 4.0 )</div>
</div>
</div>

<!--
- 第3回の予習編補足。情報系（東大松尾研の授業スライド）の研究結果から、生成AIの使い方の勘所を補足する。
-->

---

<div class="page-title">まとめ</div>

# AI AGENT化 <span style="font-size:28px;">(田川私見)</span>

<div class="box-accent" style="margin-top:6px;">AI Agent= 「状況を観察し，自由に使えるツールを用いて働きかけることにより，目標を達成するアプリケーション」(Wiesinger et al., 2025)</div>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:14px;">

<div style="flex:1.05;">
<img src="./src/fig02-img.png" alt="AIエージェントの対話例" class="figframe" style="width:100%;">
</div>

<div style="flex:1; margin-right:calc(var(--pip-w) - 80px);">

<div class="box-info" style="font-size:22px;"><b>グラウンディング：</b><br>　AIが生成する回答を、特定の信頼できる　情報源（ソース）にしっかりと結びつける技術</div>

<div style="display:flex; align-items:center; gap:16px; margin:16px 0 6px; justify-content:center;">
<div style="text-align:center;"><b>昔：</b><br><span style="display:inline-block; border:2px solid #888; border-radius:8px; padding:4px 18px; margin:4px 0; font-weight:700;">AI</span><br>↑↓<br><span style="display:inline-block; border:2px solid #888; border-radius:8px; padding:4px 14px; font-weight:700;">回答</span></div>
<div style="font-size:30px; color:#999;">→</div>
<div style="text-align:center;"><b>今：</b><br><span style="display:inline-block; border:2px solid var(--accent); border-radius:8px; padding:4px 14px; margin:4px 0; font-weight:700;">データ</span> <span style="display:inline-block; border:2px solid var(--accent); border-radius:8px; padding:4px 18px; font-weight:700;">AI</span><br>↓<br><span style="display:inline-block; border:2px solid var(--accent); border-radius:8px; padding:4px 14px; font-weight:700;">回答</span></div>
</div>

<div style="text-align:center; font-weight:800; color:var(--accent-dark);">人と情報を繋ぐツールになりつつある</div>

</div>
</div>

<!--
- AIは「人と情報を繋ぐツール」へ。昔はAIが回答を出すだけだったが、今はデータ（ソース）に結びつけて回答するグラウンディングが鍵。AI Agent化が進む。
-->

---

<div class="page-title">まとめ</div>

# 余計に書かなくてもある程度回る <span style="font-size:26px;">(田川私見)</span>

<div style="display:flex; gap:28px; align-items:flex-start;">

<div style="flex:1.15;">

<div class="box-warn" style="font-size:22px;"><b>商用の場合、CoTを指示する必要はない</b><br>　※ o3 → 高度な段階的推論 (CoT) <br>　※ 不必要に誘導すると、かえって混乱</div>

<div class="box-accent" style="font-size:22px; margin-top:12px;"><b>コンテキストや文脈内学習は、</b><br><b>　引き続き重要に </b>(geminiは本1冊入る！)<br>　例：プログラミングを書かせる<br>　例：コンテキスト・エンジニアリング</div>

<div class="box-info" style="font-size:22px; margin-top:12px;">Few shot(outputの明示)や意図の説明も、<br>　<b>いまだ有効なテクニック</b></div>

</div>

<div style="flex:1; margin-right:calc(var(--pip-w) - 90px);">
<img src="./src/fig04-img.png" alt="OpenAI o3-miniの思考過程に関する投稿" class="figframe" style="width:100%;">
</div>

</div>

<!--
- 最近の商用モデルはCoTを明示しなくてもある程度回る。むしろ不要な誘導は混乱のもと。一方でコンテキスト充実・文脈内学習・Few shot・意図説明は今も有効。
-->

---

<!-- _class: message -->

<div style="text-align:center; margin-top:40px;">
<div style="font-size:46px; margin-bottom:36px;">AIが得意なこと？</div>
<div style="font-size:54px; font-weight:800; color:var(--accent-dark);">要約、推測、変換、拡張</div>
</div>

<!--
- AIが得意なこと＝要約・推測・変換・拡張。この4つを軸にプロンプトを考えるとよい。
-->

---

<div class="page-title">Zero shot / Few Shot</div>

# プロンプティング（Prompting）とは？

<div class="paper-cap">“Language Models are Few-Shot Learners”, NeurIPS2020</div>

<div class="box-accent" style="font-size:22px; margin:4px 0 8px;">特定の機能の発生を促進 (prompt)するような言語モデルに入力するコンテキスト文</div>

<img src="./src/fig05-shots.png" alt="Zero-shot（Instruction）とFew-shot（Demonstration）のプロンプト例" class="figframe" style="width:96%; display:block; margin:0 auto;">

<div class="box-info" style="font-size:21px; margin-top:8px; margin-right:calc(var(--pip-w) - 60px);">与える指示や事例を変えれば異なることができる（例：ポジネガ判定なら「次の文章がポジティブかネガティブか分類して」など）</div>

<div class="cite">Tom B. Brown et al.(2020), <i>Language Models are Few-Shot Learners</i> より引用</div>

<!--
- プロンプティング＝特定の機能を促すために言語モデルへ入力するコンテキスト文。Zero-Shot（指示のみ）とFew-Shot（事例つき）。事例や指示を変えれば異なるタスクに使える。
-->

---

<div class="page-title">コンテキストを充実させる</div>

<h1 style="font-size:34px;">Few-Shot Promptingと文脈内学習（In-Context Learning）</h1>

<div class="paper-cap">“Language Models are Few-Shot Learners”, NeurIPS2020</div>

<div style="display:flex; gap:24px; align-items:center; margin-top:8px;">

<div style="flex:1;">
<div class="paper-ttl" style="font-size:22px;">Few-Shot Prompting (Demonstration)</div>
<img src="./src/fig05-shots.png" alt="Few-shotプロンプト例" class="figframe" style="width:100%;">
<div style="text-align:center; font-weight:800; color:var(--accent); margin-top:6px;">文脈（Context）</div>
</div>

<div style="flex:1.05;">
<img src="./src/fig06-scaling.png" alt="文脈内の事例数と性能のスケーリング" class="figframe" style="width:100%;">
</div>

</div>

<div style="margin-top:8px; margin-right:calc(var(--pip-w) - 40px); font-size:22px; line-height:1.5;">
・特にモデルが大規模な場合Few-Shotのデモンストレーションの追加で性能が大幅に上がることが多い（右図）<br>
・文脈から学習するため、文脈内学習 (In-Context Learning)と呼ばれる.
</div>

<div class="cite">Tom B. Brown et al.(2020), <i>Language Models are Few-Shot Learners</i> より引用</div>

<!--
- Few-Shotで文脈に事例を入れると、特に大規模モデルで性能が大きく上がる。文脈から学ぶのでIn-Context Learningと呼ぶ。
-->

---

<div class="page-title">プロンプトで精度が変わる！</div>

# プロンプトの重要性 | 指示文の違いの影響

<div class="paper-cap">“Demystifying Prompts in Language Models via Perplexity Estimation”, 2022</div>

<div style="display:flex; gap:20px; align-items:center; margin-top:8px;">

<img src="./src/fig07-table.png" alt="プロンプトと精度の表" class="figframe" style="width:560px;">

<div>
<div style="font-size:24px; margin:8px 0;">精度低 👎</div>
<div style="font-size:24px; margin:30px 0 8px; color:var(--accent-dark); font-weight:800;">精度高 👍</div>
</div>

</div>

<div style="font-size:20px; color:#555; margin:6px 0;">Table 1: Example prompts for the task AG News (news classification) that vary considerably in accuracy.</div>

<div style="margin-top:6px; margin-right:calc(var(--pip-w) - 40px); font-size:23px; line-height:1.6;">
・AG Newsはニュースのカテゴリ分類タスク<br>
　<a href="https://huggingface.co/datasets/ag_news/viewer/default/train" style="color:var(--accent);">https://huggingface.co/datasets/ag_news/viewer/default/train</a><br>
・プロンプトによって性能が30%変化
</div>

<div class="cite">Hila Gonen et al.(2022), <i>Demystifying Prompts in Language Models via Perplexity Estimation</i> より引用、一部改変</div>

<!--
- 同じタスクでも指示文の違いで精度が30%も変わる。AG Newsの分類で、聞き方を変えるだけで40.9%→71.2%に。プロンプト設計は重要。
-->

---

<div class="page-title">プロンプトで精度が変わる！</div>

# デモンストレーション例入れるほど良くなる

<div class="paper-cap">“Many-Shot In-Context Learning”, 2024</div>

<img src="./src/fig08-manyshot.png" alt="Many-Shot ICLの性能" class="figframe" style="width:88%; display:block; margin:8px auto 0;">

<div style="margin-top:10px; margin-right:calc(var(--pip-w) - 40px); font-size:23px; font-weight:700;">
タスクによっては、ICLのみで特化モデルやfinetuningと匹敵する
</div>

<div class="cite">Agarwal et al.(2024), <i>Many-Shot In-Context Learning</i> より引用</div>

<!--
- 事例（ショット）を多く入れるほど性能が上がる。タスクによってはIn-Context Learningだけで特化モデルやfinetuningに匹敵する。
-->

---

<div class="page-title">思考過程を描かせる (CoT)</div>

# Chain-of-Thought (CoT) Prompting

<div class="paper-cap">“Chain of Thought Prompting Elicits Reasoning in Large Language Models”, NeurIPS2022</div>

<div style="display:flex; gap:18px; align-items:center; margin-top:6px;">

<img src="./src/fig09-cot.png" alt="Standard PromptingとCoT Promptingの比較" class="figframe" style="width:60%; max-height:248px;">

<div style="flex:1; text-align:center;">
<div style="font-size:19px; font-weight:800; color:var(--accent-dark); margin-bottom:2px;">※ GSM8kは9-12歳の正解率が60%。</div>
<img src="./src/fig09-gsm.png" alt="GSM8Kの正解率" style="max-height:218px;">
</div>

</div>

<div style="margin-top:6px; margin-right:calc(var(--pip-w) - 40px); font-size:21px; line-height:1.45;">
・Few-Shotの事例の際に思考過程を入れる（Chain of thought prompting）と、新しい質問についても思考過程を明示してくれる。<br>
・算数の文章題など、従来難しいとされていた推論タスクでも大幅に性能が向上。
</div>

<div class="cite">Jason Wei et al.(2022), <i>Chain-of-Thought Prompting Elicits Reasoning in Large Language Models</i>, NeurIPS2022 より引用</div>

<!--
- Few-Shotの事例に思考過程を入れる（CoT）と、新しい質問でも思考過程を出してくれる。算数の文章題など従来難しい推論タスクで性能が大幅向上。
-->

---

<div class="page-title">結果で多数欠する</div>

# CoTの推論能力の改善：Self Consistency

<div class="paper-cap">“Self-Consistency Improves Chain of Thought Reasoning in Language Models”, ICLR2023</div>

<img src="./src/fig10-selfcons.png" alt="Self-Consistencyの仕組み" class="figframe" style="width:92%; display:block; margin:8px auto 0;">

<div style="margin-top:10px; margin-right:calc(var(--pip-w) - 40px); font-size:23px; line-height:1.55;">
LMに複数の推論を行わせて（上は3つの例）、多数決で答えを決定。<br>
※ 文的にもっともらしいものが正しい推論とは限らないことを示唆。
</div>

<div class="cite">Xuezhi Wang et al.(2023), <i>Self-Consistency Improves Chain of Thought Reasoning in Language Models</i>, ICLR2023 より引用</div>

<!--
- Self-Consistency＝複数の推論経路を生成し（例では3つ）、出た答えを多数決で決める。文として尤もらしい推論が必ずしも正しいとは限らない、という示唆。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">生成AI活用講座 <b>第3回</b></div>
<div class="title-big" style="font-size:50px;">(予習編補足：Difyの最初の一歩)</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig01-img.png" alt="講師"></div>
<div class="title-meta">
<div class="title-date">2025/10/2 公開　講師：田川 翔<br><span style="font-size:21px;">千葉大学 国際未来教育基幹 助教</span></div>
<div style="font-size:21px; line-height:1.6;">東大松尾研究室の授業スライドから<br><a href="https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/" style="color:var(--accent);">https://weblab.t.u-tokyo.ac.jp/llm_contents_2024/</a><br>(CC BY-NC-ND 4.0 )</div>
</div>
</div>

<!--
- ここから次パート「Difyの最初の一歩」へ。ノーコードでAIアプリを組む実践に入る。
-->
