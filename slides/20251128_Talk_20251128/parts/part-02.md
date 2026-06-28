<!-- _class: divider -->

<div class="chapter-num">SESSION 2</div>

# AI時代の教え方<br><span style="font-size:40px; font-weight:700;">大学教育への事例をもとに</span>

<h2>大学における生成AIとの関わり方を考える　15 - min × 6 sessions</h2>

<div class="goal-box" style="background:rgba(255,255,255,.12); border-color:rgba(255,255,255,.6); color:#fff; max-width:760px; margin:28px 0 0;"><b style="color:#fff;">Session 2：</b><span class="ind">演習：生成AIの仕組みを体験する</span></div>

<div style="margin-top:24px; font-size:24px; color:rgba(255,255,255,.9);">千葉大学 国際未来教育基幹　田川 翔</div>

<!--
- Session 2、演習：生成AIの仕組みを体験する、に入ります。
-->

---

<div class="page-title">Slido</div>

<div style="display:flex; align-items:center; gap:32px; margin-top:60px; justify-content:center;">
<svg width="150" height="120" viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#7A3E9E" stroke-width="7" stroke-linejoin="round"><path d="M40 78 a26 26 0 0 1 4 -51 a30 30 0 0 1 56 6 a22 22 0 0 1 -6 45 z"/><path d="M78 95 a18 18 0 1 0 0 -1 z" fill="#EBDDF5"/></g></svg>
<h1 style="margin:0; color:var(--accent-dark);">生成AIの仕組みを一言で言うと</h1>
</div>

<div class="box-info" style="margin-top:48px; font-size:28px; text-align:center;">📣 投票画面 — <b>Slido</b> に入力してください</div>

<!--
📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide.
-->

---

<div class="page-title">生成AIのレイヤー</div>

# 生成AIの<span style="color:var(--accent-dark)">レイヤー</span>

<div style="display:flex; align-items:stretch; gap:18px; margin-top:10px;">

<div style="display:flex; flex-direction:column; justify-content:space-between; align-items:center; font-weight:800; font-size:26px;">
<div style="color:var(--accent-dark);">応用<br><span style="font-size:34px;">▲</span></div>
<div style="color:var(--accent-dark);"><span style="font-size:34px;">▼</span><br>基盤</div>
</div>

<table style="flex:1; border-collapse:collapse; font-size:21px; line-height:1.45;">
<tr><td style="width:30%; background:var(--accent-soft); border:1.5px solid #d8b; font-weight:800; padding:9px 14px;">生成AI アプリケーション</td><td style="border:1.5px solid #d8b; padding:9px 14px;">etc…</td></tr>
<tr><td style="background:var(--accent-soft); border:1.5px solid #d8b; font-weight:800; padding:9px 14px;">エージェント</td><td style="border:1.5px solid #d8b; padding:9px 14px;"><b>DeepResearch, web検索 etc…</b> 環境とやり取りし、情報を収集して、その情報に基づいて意思決定を行い、アクションを実行</td></tr>
<tr><td style="background:var(--accent-soft); border:1.5px solid #d8b; font-weight:800; padding:9px 14px;">プラットフォーム</td><td style="border:1.5px solid #d8b; padding:9px 14px;"><b>Dify, Google AI studio etc…</b> AI モデルの構築とデプロイに役立つツールとサービス、データマネジメントツールで構成</td></tr>
<tr><td style="background:var(--accent-soft); border:1.5px solid #d8b; font-weight:800; padding:9px 14px;">大規模言語モデル</td><td style="border:1.5px solid #d8b; padding:9px 14px;">Section2での説明の通り</td></tr>
<tr><td style="background:var(--accent-soft); border:1.5px solid #d8b; font-weight:800; padding:9px 14px;">インフラストラクチャー</td><td style="border:1.5px solid #d8b; padding:9px 14px;">コンピューターリソース、GPUなど</td></tr>
</table>

</div>

<div class="cite">改変：Google Cloud Skills Boost</div>

<!--
- 生成AIのレイヤー構造。基盤のインフラ・LLMから、応用のプラットフォーム・エージェント・アプリへ積み上がる。
-->

---

<div class="page-title">インフラストラクチャー</div>

# <span style="color:var(--accent-dark)">インフラストラクチャー</span>

<div style="display:flex; gap:30px; align-items:center; margin-top:10px;">
<img src="./src/fig28-crop.png" alt="GPUインフラのデモ画像" style="height:360px; border-radius:8px;">
<div style="font-size:26px; line-height:1.7;">
<div>nVidia presentation デモ (いま非公開…)</div>
</div>
</div>

<div class="cite pip-safe">もっと詳しく：https://cloud.google.com/tpu/docs/system-architecture-tpu-vm?hl=ja</div>

<!--
- 生成AIを支えるインフラ。GPU/TPUといった巨大な計算資源の上で、すべてが動いている。
-->

---

<div class="page-title">生成AIの中でしていること</div>

# 生成AIの中でしていること

<div style="display:flex; gap:36px; align-items:flex-start; margin-top:8px;">

<div style="flex:0 0 360px; text-align:center;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark); margin-bottom:8px;">生成AIの<span style="text-decoration:underline;">概観</span></div>
<img src="./src/fig29-crop.png" alt="nano-gpt の可視化" style="height:380px;">
</div>

<div style="flex:1;">
<div style="font-size:30px; font-weight:800; margin-bottom:16px;">学習と推論のデモ</div>
<div class="box-info" style="font-size:21px; word-break:break-all;">https://colab.research.google.com/drive/1-HXdqybmsnfZQbRi2Mny2fugKP5D9o9D</div>
<div class="box-accent" style="margin-top:28px; text-align:center; font-size:30px; font-weight:800;">実際に学習を体験できる!</div>
</div>

</div>

<!--
- 生成AIの中身を概観し、Google Colab 上で実際に学習と推論を体験できるデモを用意した。
-->

---

<div class="page-title">生成AIの中でしていること</div>

# <span style="color:var(--accent-dark)">利用 (推論・生成)</span>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:6px;">

<div style="flex:1; display:flex; justify-content:center;">
<svg viewBox="0 0 640 470" xmlns="http://www.w3.org/2000/svg" style="height:498px; width:auto; max-width:100%;" font-family="sans-serif">
<g text-anchor="middle" font-weight="700">
<text x="107" y="22" font-size="18" fill="#333">計算1回目</text>
<text x="320" y="22" font-size="18" fill="#333">計算2回目</text>
<text x="533" y="22" font-size="18" fill="#333">計算3回目</text>
<g font-size="17">
<rect x="22" y="34" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="107" y="60" fill="#111">"吾輩は"</text>
<rect x="235" y="34" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="320" y="60" fill="#111">"吾輩は猫"</text>
<rect x="448" y="34" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="533" y="60" fill="#111">"吾輩は猫で"</text>
</g>
<g font-size="18" fill="#fff">
<rect x="42" y="110" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="107" y="136">出力</text>
<rect x="255" y="110" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="320" y="136">出力</text>
<rect x="468" y="110" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="533" y="136">出力</text>
</g>
<g font-size="16" fill="#fff">
<rect x="42" y="185" width="130" height="58" rx="4" fill="#7A2E8E"/><text x="107" y="208">AI処理</text><text x="107" y="230">(デコーダ)</text>
<rect x="255" y="185" width="130" height="58" rx="4" fill="#7A2E8E"/><text x="320" y="208">AI処理</text><text x="320" y="230">(デコーダ)</text>
<rect x="468" y="185" width="130" height="58" rx="4" fill="#7A2E8E"/><text x="533" y="208">AI処理</text><text x="533" y="230">(デコーダ)</text>
</g>
<g font-size="17" fill="#111">
<rect x="42" y="278" width="130" height="40" rx="4" fill="#fff" stroke="#888"/><text x="107" y="304">前処理</text>
<rect x="255" y="278" width="130" height="40" rx="4" fill="#fff" stroke="#888"/><text x="320" y="304">前処理</text>
<rect x="468" y="278" width="130" height="40" rx="4" fill="#fff" stroke="#888"/><text x="533" y="304">前処理</text>
</g>
<g font-size="18" fill="#fff">
<rect x="42" y="350" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="107" y="376">入力</text>
<rect x="255" y="350" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="320" y="376">入力</text>
<rect x="468" y="350" width="130" height="40" rx="4" fill="#2E9E5B"/><text x="533" y="376">入力</text>
</g>
<g font-size="17">
<rect x="22" y="420" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="107" y="446" fill="#111">"吾輩"</text>
<rect x="235" y="420" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="320" y="446" fill="#111">"吾輩は"</text>
<rect x="448" y="420" width="170" height="40" rx="4" fill="#fff" stroke="#888"/><text x="533" y="446" fill="#111">"吾輩は猫"</text>
</g>
</g>
<g stroke="#444" stroke-width="2" fill="none" marker-end="url(#ar2)">
<path d="M107,420 L107,392"/><path d="M107,350 L107,320"/><path d="M107,278 L107,245"/><path d="M107,185 L107,152"/>
<path d="M320,420 L320,392"/><path d="M320,350 L320,320"/><path d="M320,278 L320,245"/><path d="M320,185 L320,152"/>
<path d="M533,420 L533,392"/><path d="M533,350 L533,320"/><path d="M533,278 L533,245"/><path d="M533,185 L533,152"/>
</g>
<defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs>
</svg>
</div>

<div style="flex:0 0 320px;">
<img src="./src/fig30-charts-crop.png" alt="次トークン確率の棒グラフ" style="width:100%;">
</div>

</div>

<div class="cite" style="text-align:right;">モデル： cyberagent/open-calm-7b</div>

<!--
- 推論・生成では、入力→前処理→デコーダ→出力を1トークンずつ繰り返す。右は各ステップの次トークン確率。
-->

---

<div class="page-title">ワーク</div>

# <span style="color:var(--accent-dark)">AIのアプリの中身をご相談ください</span>

<div class="box-warn" style="margin-top:18px;"><b>標準時間：</b>自己紹介3分、実習2分 (会場は隣の人とペアで実施します) ＋ 全体共有：2分</div>

<div class="box-accent" style="margin-top:16px;">
<b>ワーク：</b>あなたが今日の夜に雨にふられずに、帰宅する時間を知りたいとします。<br>
<b>その時間を教えてくれる生成AIアプリには、どんな情報を与えてあげればよいですか。</b>箇条書きで3つ考えて下さい。<br>
ワーク用のスライドに記入して下さい。
</div>

<!--
- ペアでワーク。雨に降られず帰宅できる時間を教えるAIアプリに、どんな情報を与えるべきか3つ考える。
-->

---

<div class="page-title">リーズニング</div>

# <span style="color:var(--accent-dark)">リーズニング</span>

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 540px;">
<img src="./src/fig32-crop.png" alt="推論ツールの実行画面" style="width:100%; border:1px solid #ddd; border-radius:6px;">
</div>

<div style="flex:1;">
<div class="box-info" style="font-size:22px;"><b>グラウンディング：</b><br>　AIが生成する回答を、特定の信頼できる　情報源（ソース）にしっかりと結びつける技術</div>

<div style="margin-top:18px;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">昔：</div>
<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:800;">
<span style="border:2.5px solid var(--tag-blue); color:var(--tag-blue); border-radius:8px; padding:4px 20px;">AI</span>
<span style="color:#444;">⟶</span>
<span>回答</span>
</div>
</div>

<div style="margin-top:14px;">
<div style="font-size:24px; font-weight:800; margin-bottom:6px;">今：</div>
<div style="display:flex; align-items:center; gap:14px; font-size:24px; font-weight:800;">
<span style="background:#0F6E8E; color:#fff; border-radius:8px; padding:4px 18px;">データ</span>
<span style="color:#444; position:relative;">⟶<span style="position:absolute; top:-24px; left:2px; color:var(--accent); font-size:20px;">AI</span></span>
<span>回答</span>
</div>
</div>

<div style="margin-top:18px; font-size:23px;"><b>「推論ツール」「情報の分析ツール」</b>　になりつつある</div>
</div>

</div>

<!--
- リーズニング。AIはデータに根拠づけて答える「推論ツール」「情報の分析ツール」になりつつある。
-->

---

<div class="page-title">Slido</div>

<div style="display:flex; align-items:center; gap:32px; margin-top:60px; justify-content:center;">
<svg width="150" height="120" viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#1F6E6A" stroke-width="7" stroke-linejoin="round"><path d="M18 22 h114 a8 8 0 0 1 8 8 v52 a8 8 0 0 1 -8 8 H54 l-22 22 v-22 H18 a8 8 0 0 1 -8 -8 V30 a8 8 0 0 1 8 -8 z"/><path d="M34 46 h60 M34 66 h44" stroke-linecap="round"/></g></svg>
<h1 style="margin:0; color:var(--accent-dark);">必要と思われる情報を記入して下さい。</h1>
</div>

<div class="box-info" style="margin-top:48px; font-size:28px; text-align:center;">📣 投票画面 — <b>Slido</b> に入力してください</div>

<!--
📣 This is Slido interaction slide, please don't delete it.✅ Click on 'Present with Slido' and the poll will launch automatically when you get to this slide.
-->

---

<div class="page-title">Session 2のワーク例</div>

# Session 2の<span style="color:var(--accent-dark)">ワーク例</span>

<div class="box-accent" style="margin-top:40px; text-align:center;">
<div style="font-size:30px; font-weight:800; margin-bottom:10px;">実装例</div>
<div style="font-size:23px; word-break:break-all;">https://chiba-u-ai25-g1.xvps.jp/app/1ec6e43e-461e-4392-afea-09a82c7149f4/workflow</div>
</div>

<!--
- ワークの実装例。Difyで作ったワークフローの実物をお見せします。
-->

---

<div class="page-title">研究で活用する際のアイデア</div>

# 研究で活用する際のアイデア

<div style="display:flex; gap:30px; align-items:center; margin-top:10px;">
<img src="./src/fig35-crop.png" alt="道具を作るイメージ" style="height:380px; border-radius:8px;">
<div class="box-accent" style="font-size:30px; font-weight:800; text-align:center;">GemやDify、n8nで道具を作れるようになる</div>
</div>

<!--
- 研究での活用。GemやDify、n8nで自分専用の道具を作れるようになる。
-->

---

<div class="page-title">Session 2の目的・到達目標</div>

# Session 2の目的・到達目標

<div style="display:grid; grid-template-columns:130px 1fr; gap:14px 18px; align-items:start; margin-top:6px;">

<div style="font-size:26px; font-weight:800; color:var(--accent-dark); padding-top:6px;">目的</div>
<div class="box-accent" style="font-size:22px;"><b>Session 2：</b><br>　生成AIの仕組みを体験する</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); padding-top:6px; line-height:1.3;">目標<br>　+<br>まとめ<br><span style="font-size:20px; font-weight:700;">振り返り</span></div>
<div class="stepbox" style="margin:0;">
<div class="st" style="font-size:22px; margin:2px 0;"><b>大規模言語モデル(LLM)</b>の中身をイメージできる</div>
<div style="font-size:20px; margin:0 0 6px 1.2em; color:#444;">Transformerによる「次の単語の予測」作業／ハルシネーションや誤った出力がでるのは当たり前</div>
<div class="st" style="font-size:22px; margin:2px 0;"><b>AI agentやツール</b>イメージできる</div>
<div style="font-size:20px; margin:0 0 6px 1.2em; color:#444;">AIに正しい情報を渡すことで、誤りが減る／AIは、自分の出力をもとに、「推論」を深められる（リーズニング）</div>
<div class="st" style="font-size:22px; margin:2px 0;"><b>LLMの上のレイヤーでAIは進化している</b></div>
</div>

</div>

<!--
- Session 2の振り返り。LLMの中身、AI agent・ツール、そしてLLMの上のレイヤーでAIが進化していること。
-->
