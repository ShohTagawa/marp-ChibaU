<div class="page-title">データバリューチェーン</div>

# データの流れと<span style="color:var(--accent-dark)">品質</span>　<span class="tag tag-accent">AI / ML</span>

<img src="./src/fig24-img.png" alt="データバリューチェーン：生成→収集→処理→保存→分析→活用" style="display:block; width:100%; max-width:1180px; margin:6px auto 10px;">

<div class="box-info" style="margin-top:4px; margin-right:calc(var(--pip-w) + 8px);">
1. <b>完全性 (Completeness):</b> 欠損値がないこと　　2. <b>一意性 (Uniqueness):</b> 重複レコードがないこと<br>
3. <b>適時性 (Timeliness):</b> データが現状を反映していること　　4. <b>有効性 (Validity):</b> 定義された形式に従っていること<br>
5. <b>精度 (Accuracy):</b> 実態を正しく反映していること (例: 猫の 画像に「犬」とラベル付けしない)<br>
6. <b>整合性 (Consistency):</b> データセット全体で統一されていること
</div>

<div class="box-warn pip-safe" style="margin-top:12px;">※ <b>ETL (抽出→保存)</b>に加えて、<b> ELT (保存→抽出)</b>もAIで拡大中</div>

<!--
- データバリューチェーン。生成→収集→処理→保存→分析→活用の流れの各段で、6つのデータ品質（完全性・一意性・適時性・有効性・精度・整合性）が問われる。
- 従来のETL（抽出→保存）に加えて、AIによりELT（保存→抽出）が拡大している。
-->

---

<div class="page-title">分析の自動化</div>

# BIが<span style="color:var(--accent-dark)">ダッシュボード＋AI EDA</span>へ

<div style="display:flex; gap:24px; align-items:center; margin-top:8px;">
<div style="flex:0 0 64%;">
<img src="./src/fig14-looker.png" alt="Looker の Explore と Gemini による Explore Assistant" style="display:block; width:100%; border:1.5px solid #e3e8f0; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,.12);">
</div>
<div style="flex:1; text-align:center; font-size:40px; font-weight:800; line-height:1.5;">
BIが<br><b style="color:var(--accent-dark)">ダッシュボード</b><br>＋<br><b style="color:var(--accent-dark)">AI EDA</b>へ
</div>
</div>

<div class="cite pip-safe" style="margin-top:8px;">Looker で BigQuery の可能性を最大限に引き出す　<a>リンク</a></div>

<!--
- 分析の自動化。BIは静的なダッシュボードから、AIによる探索的データ分析（AI EDA）へと進化している。
- LookerではGeminiの「Explore Assistant」に自然言語で問いかけると、explore（分析）を生成し、結果を要約してくれる。
-->

---

<div class="page-title">データガバナンス</div>

# <span style="color:var(--accent-dark)">物理的な場所</span>と<span style="color:var(--accent-dark)">法的管轄</span>の制御

<img src="./src/fig15-gov-crop.png" alt="データ所在地(Residency)とデータ主権(Sovereignty)" style="display:block; width:100%; max-width:1060px; margin:18px auto 0;">

<!--
- データガバナンス。物理的な場所と法的管轄の制御という二つの観点がある。
- データ所在地（Residency）はデータが保存・処理される物理的な場所（リージョン／ゾーン）。データ主権（Sovereignty）はデータが所在する国の法律・規制の適用対象となる概念（例：GDPR）。
-->

---

<div class="page-title">iPaaSによる業務テンプレ化</div>

# iPaaSによる<span style="color:var(--accent-dark)">業務テンプレ化</span>

<div class="box-info" style="margin-top:4px;"><b>Integration Platform as a Service</b>　異なるSaaSやオンプレミスシステムをクラウド上で連携・統合するサービス</div>

<div style="display:flex; gap:20px; margin-top:12px;">
<div style="flex:1;">

<div class="cardrow" style="margin:8px 0;">
<div class="pcard"><div class="pc-h">これまで</div><p style="margin:0; font-size:22px;">できることが限られていた</p></div>
</div>
<div class="cardrow" style="margin:8px 0;">
<div class="pcard"><div class="pc-h">これから</div><ul><li>生成AI活用で出来ることが多様化</li><li>生成AIで作り方のノウハウが民主化</li></ul></div>
</div>

<div class="box-warn" style="margin-top:10px; font-size:22px;"><b>例：場所、現在の時刻、今日の24時間の天気</b>　／　普遍教育： 生成AI活用講座で実施中</div>

</div>
<div style="flex:0 0 30%;">
<img src="./src/fig27-img.png" alt="ワークフロー実行結果（千葉市の天気）" style="display:block; width:100%; max-height:300px; object-fit:contain; border:1.5px solid #e3e8f0; border-radius:10px;">
</div>
</div>

<img src="./src/fig28-img.png" alt="iPaaSワークフロー：開始→現在時刻→天気取得→コード実行→HTTP→LLM→終了" style="display:block; width:100%; max-width:1180px; margin:8px auto 6px;">

<div class="box-accent pip-safe" style="margin-top:4px;"><b>Google Workspace Studio</b>が近日、利用可能に！　※ 来年は授業教材もDifyからGoogleへ移行</div>

<!--
- iPaaS（Integration Platform as a Service）は、異なるSaaSやオンプレミスシステムをクラウド上で連携・統合するサービス。
- これまでできることが限られていたが、これからは生成AI活用で出来ることが多様化し、作り方のノウハウも民主化する。
- 例として「場所・現在の時刻・今日の24時間の天気」を返すワークフロー。普遍教育の生成AI活用講座で実施中。
- Google Workspace Studioが近日利用可能に。来年は授業教材もDifyからGoogleへ移行予定。
-->

---

<div class="page-title">クラウドの学び方</div>

# クラウドの<span style="color:var(--accent-dark)">学び方</span>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:8px;">
<div style="flex:0 0 38%;">

<div class="stepbox" style="margin:6px 0;"><div class="st">① やってみる<br><span style="margin-left:1.4em;"><b>サンドボックス</b></span></div></div>
<div class="stepbox" style="margin:6px 0;"><div class="st">② 知識を持つ<br><span style="margin-left:1.4em;"><b>Skills</b></span></div></div>
<div class="stepbox" style="margin:6px 0;"><div class="st">③ 資格も取る</div></div>

<div class="box-accent" style="margin-top:12px; font-size:22px;">Google公式で、<b>無料で学べ</b>、<b>格安で資格を取れる</b>プログラムがあります</div>

</div>
<div style="flex:1;">
<img src="./src/fig31-img.png" alt="Google Skills の学習プログラム画面" style="display:block; width:100%; border:1.5px solid #e3e8f0; border-radius:10px; box-shadow:0 2px 7px rgba(0,0,0,.1);">
<div class="cardrow pip-safe" style="margin-top:14px; justify-content:center; align-items:center;">
<img src="./src/fig29-img.png" alt="Cloud Digital Leader 認定バッジ" style="height:170px;">
<img src="./src/fig30-img.png" alt="Generative AI Leader 認定バッジ" style="height:170px;">
</div>
</div>
</div>

<!--
- クラウドの学び方は3段階。①やってみる（サンドボックス）、②知識を持つ（Skills）、③資格も取る。
- Google公式に、無料で学べて格安で資格を取れるプログラムがある。Cloud Digital Leader や Generative AI Leader といった認定資格を目指せる。
-->
