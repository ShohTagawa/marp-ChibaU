<div class="page-title">4　AI利活用</div>

# AIを教育で利活用する上で、必ず知ってほしいこと

<div class="subhead"><span style="color:var(--accent-dark)">千葉大学における生成AIの指針</span> <span style="font-size:22px; color:#555;">(令和5年10月13日)</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">

<div class="bgroup" style="grid-template-columns:1.6em 1fr;">
<div class="bg-items" style="border:none; padding-left:0;">
<div>①「生成 AI についての学び」「生成 AI を用いた学び」「生成 AI によらない学び」を<b>それぞれ推進</b></div>
<div>②授業での利用は、授業の目的に合致することが前提であり、合致するかは、各授業の担当教員が<b>判断</b>。<b>禁止の場合はシラバスなどに明記</b><br><span style="color:var(--accent-dark); font-weight:800;">(気になったら先生に聞きましょう！)</span></div>
<div>③<b>リスクや懸念に伴う禁止事項あり</b></div>
</div>
</div>

</div>
<img src="./src/fig25-qr-crop.png" alt="QRコード" style="height:190px; align-self:flex-start;">
</div>

<div class="cite" style="margin-top:2px;">https://drive.google.com/file/d/1ZultuLWXNLJ53M43ExrYG8cIfwqcCnCO/view</div>

<div class="box-accent pip-safe" style="margin-top:10px;">特に、<b>機密情報や個人情報の入力禁止</b>、生成AIにより出力された情報の<b>著作権（表現への類似性・依拠性）</b>には留意が必要です。</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead">Gemini <span style="font-weight:800;">(とGem)</span> <span style="font-size:20px; color:#555;">https://gemini.google.com/gems/view</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig26-gemini-crop.png" alt="Gemini 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;">一般的なチャットボット<br><b>gemで用途に特化した道具</b>も作れて便利<br>ただ、現在、表現と思考がちょっと硬い</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="stepbox"><div class="st"><b>画面左下</b></div></div>
<div style="text-align:center; font-size:30px; color:#888; margin:4px 0;">↓</div>
<div class="stepbox"><div class="st">⚙ 設定とヘルプ</div></div>
<div style="text-align:center; font-size:30px; color:#888; margin:4px 0;">↓</div>
<div class="stepbox"><div class="st">アクティビティ</div></div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:20px;"><b>Gemini アプリ アクティビティの仕組み</b><br>「Gemini では私のデータはどのように扱われますか？」<br>組織のデータが含まれているタスクに Gemini を使用する場合、お客様のデータが、トレーニングや改善に使用されることはありません。</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead"><b>Copilot</b> <span style="font-size:20px; color:#555;">https://copilot.microsoft.com/</span></div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig27-copilot-crop.png" alt="Copilot 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;">一般的なチャットボット<br>Geminiと同じ事ができる。<br>(無料版は色々と出来るけど、大学版は機能少なめ)</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="box-accent pip-safe">このチャットには <b>エンタープライズ データ保護</b> が適用されます。<br>と書いてあればOK</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# 学内で使えるツール

<div class="subhead">NotebookLM</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<img src="./src/fig28-notebooklm-crop.png" alt="NotebookLM 画面" style="width:100%; border:1px solid #ccc; border-radius:6px;">

<div class="box-info" style="margin-top:10px;"><b>理解を助けるツール</b><br>大量の文章内を検索したり、音声・動画解説を使ったり、問題や暗記事項を書き出したりするのに便利</div>

</div>
<div style="flex:1;">

<div class="lead-note">セキュリティの確認</div>

<div class="box-accent pip-safe" style="font-size:20px;"><b>エンタープライズ級のセキュリティとプライバシー</b><br>アップロードされたファイル、チャット、モデル出力は、人間のレビューアーが確認することも、生成 AI モデルの改善に使用されることもありません。</div>

</div>
</div>

---

<div class="page-title">4　AI利活用</div>

# <span style="color:var(--accent-dark)">安全性の配慮：</span>大規模言語モデルを「生成AIサービス」にする

<table style="width:100%; border-collapse:collapse; margin-top:14px; font-size:24px;">
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:14px 22px; font-weight:800; width:34%;">チューニング<br>・RLHF</td>
<td style="padding:14px 22px;">人間にとって自然な回答をするよう、トレーニングする (good/bad)</td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:14px 22px; font-weight:800;">ガードレールの作成</td>
<td style="padding:14px 22px;"><b style="color:var(--accent);">AIの安全性を向上させる</b><br><span style="font-size:21px;">(AIに危険/不適切なことを言わせない)</span></td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:14px 22px; font-weight:800;">倫理的課題の解決<br>バイアスの低減</td>
<td style="padding:14px 22px;">トレーニングデータ上のバイアスを減らす</td>
</tr>
<tr>
<td style="background:var(--section-bg); border-radius:8px; padding:14px 22px; font-weight:800;">ツールの接続</td>
<td style="padding:14px 22px;">計算やweb検索など、モジュールを接続する</td>
</tr>
</table>

<div class="box-warn pip-safe" style="margin-top:14px;">市販のAIは、<b>人間中心の原則</b>に従い、かなりの注意して作成されている</div>

<!-- 人間のニーズ、能力、制約を最優先に考慮する -->

---

<div class="page-title">5 学び方</div>

# 生成AIの学び方 <span style="font-size:28px; color:#555;">(資料のみ)</span>

<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:20px; line-height:1.45;">
<tr style="color:#fff; background:var(--accent);">
<th style="padding:6px 12px; text-align:left; width:20%;">方法</th>
<th style="padding:6px 12px; text-align:left; width:48%;">特徴</th>
<th style="padding:6px 12px; text-align:left;">参考</th>
</tr>
<tr style="border-bottom:1px solid #e0e0e0;">
<td style="padding:8px 12px; font-weight:800;">本を読む</td>
<td style="padding:8px 12px;">◯ 自分の手で動かしてみるときに便利　◯ 情報が信頼できる　✕ １人だと難しいこともある</td>
<td style="padding:8px 12px;">(推薦はシラバスの参考書に)</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0; background:var(--section-bg);">
<td style="padding:8px 12px; font-weight:800;">YouTubeや記事を読む</td>
<td style="padding:8px 12px;">◯ 最新の情報の把握に便利　✕ 体系がない　✕ ガセがある　✕ 教育的効果がない…</td>
<td style="padding:8px 12px;">メカニズムから分かる映像　サービスが分かるAI図鑑</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0;">
<td style="padding:8px 12px; font-weight:800;">授業を受ける</td>
<td style="padding:8px 12px;">◯ 体系的な力が身につく　✕ しかし、大変</td>
<td style="padding:8px 12px;">東大松尾研究室講座/MOOC等 (現在募集中、学生無料) LLM基礎・データサイエンス</td>
</tr>
<tr style="border-bottom:1px solid #e0e0e0; background:var(--section-bg);">
<td style="padding:8px 12px; font-weight:800;">資格を取る・資格勉強する</td>
<td style="padding:8px 12px;">◯ 就活に有利　◯ 学習資料が充実しており、体系的　✕ １つあたり5000円くらいかかる</td>
<td style="padding:8px 12px;">JDLA G検定、 Google Generative AI Leader、 生成AIパスポートなど</td>
</tr>
<tr>
<td style="padding:8px 12px; font-weight:800;">上手い人の操作を見る</td>
<td style="padding:8px 12px;">◯ 自分でも使い方が分かる</td>
<td style="padding:8px 12px;">この授業の参考動画</td>
</tr>
</table>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:21px;">自分は、<b>本、授業、資格</b>で学びました。特に<b>松尾研究室の授業</b>と<b>Google Skillup boost</b>はおすすめです。</div>

---

<div class="page-title">6 まとめ</div>

# 今日達成出来たこと

<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>授業の説明</b>　gammaを使ったスライドとシラバスをご参照下さい</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>グループ分け・自己紹介</b>　無事、dify配布まで完了しました ありがとう!</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>生成AIについての認識の確認</b>　Slidoでクラスの現状を把握しました</div>
</div>
<div class="stepbox" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>DX事例の把握 /安全性など社会的な議論等の紹介</b>　宿題になっています (後者は別途説明します)</div>
</div>
<div class="stepbox pip-safe" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>千葉大で活用できる生成AI</b>　Gemini, Copilot, NotebookLMを紹介しました</div>
</div>
<div class="stepbox pip-safe" style="margin:8px 0 0; padding:8px 24px;">
<div class="st" style="margin:2px 0; line-height:1.4;"><b>この授業の学び方の紹介</b>　スライド p.29をご参照下さい</div>
</div>
