---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI体験WS</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 22%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-big">生成AI体験<br>ワークショップ</div>
</div>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:27px; color:var(--accent-dark); font-weight:800;">2025年度 第5回： AIとクラウドで起きる変化を俯瞰する</div>
<div style="font-size:24px; color:var(--muted); margin-top:6px;">45-min × 1 sessions</div>
</div>

<div class="box-info" style="max-width:760px; margin:22px auto 0; text-align:left;"><b>事前知識：</b> クラウドとAIの用語集<br><span style="font-size:21px;">参考文献： Google Skills CDLコース <a href="#">リンク</a></span></div>

<div style="text-align:center; font-size:26px; margin-top:24px;">国際未来教育基幹　田川 翔</div>

---

<div class="page-title">クラウドとは</div>

# クラウドは「IT部門の課題」ではない

<div class="lead-note">リーダーが持つべき認識とは</div>

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:10px;">
<div style="flex:0 0 280px;">
<img src="./src/fig02-cerf-crop.png" alt="Vint Cerf" style="width:280px; border-radius:8px;">
<div style="font-size:18px; color:#666; margin-top:6px;">Vint Cerf<br>VP &amp; Chief Internet Evangelist, Google</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:25px;">“クラウドの仕組みの詳細を理解する必要はありませんが、クラウドで何ができるのか（capability）、それがビジネスにどのような変革をもたらすのかを認識すべきです。”</div>

<div class="bgroup" style="margin-top:14px;">
<div class="bg-label">誤解</div>
<div class="bg-items">
<div><b>誤解 (Misconception)</b>　技術的なスキルが必要、ビジネス変革は可能であるという考え。</div>
</div>
</div>

<div class="bgroup">
<div class="bg-label">現実</div>
<div class="bg-items">
<div><b>現実 (Reality)</b>　新しい技術が企業の構造にどう貢献するかをリーダーが概念的に把握していなければ、効果的なリスクになる。</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:12px; font-size:21px;">スキルの確保：現代のクラウドが提供するコンピューティング容量とデータストレージ、信頼の置ける安全なレベルを適切に管理することができれば、「現実」を利用できるかが勝負の分かれ目になる。</div>

</div>
</div>

---

<div class="page-title">DXとは</div>

# デジタル トランスフォーメーション（DX）とは

<div class="stepbox" style="margin-top:4px; padding:8px 28px;">
<div class="st" style="margin:0;">① DXの<b>定義</b></div>
</div>

<div class="box-info" style="margin-top:3px; font-size:22px; padding:9px 24px;">組織が各クラウドプラットフォームなどの新しいデジタルテクノロジーを使用し、<b>ビジネスプロセス・企業文化・カスタマーエクスペリエンスを生み出し変えること</b>で、ビジネスと市場のダイナミクスの変化に対応すること</div>

<div class="stepbox" style="margin-top:7px; padding:8px 28px;">
<div class="st" style="margin:0;">② DXの<b>目的</b></div>
</div>

<div class="box-info" style="margin-top:3px; font-size:22px; padding:9px 24px;">イノベーションの推進、新たな価値・サービス・収益源の創出、リソースの適切な配分、市場とユーザーのニーズの変化への迅速な対応</div>

<div class="stepbox" style="margin-top:7px; padding:8px 28px;">
<div class="st" style="margin:0;">③ DXのキークエスチョン：<b>変わらないために変わり続ける</b></div>
</div>

<div class="box-accent pip-safe" style="margin-top:3px; font-size:21px; padding:9px 24px;">「どのように（How）」事業を行うかではなく、<b>「なぜ（Why）」自分たちは存在するのか（組織の使命）に焦点を当てる</b>ことで、テクノロジーの変化を「脅威」ではなく「機会」として捉え、柔軟に変革し続けることができる</div>

---

<div class="page-title">DXとは：ケーススタディ</div>

# 「How」に固執するか、「Why」を見据えるか：任天堂と百科事典の教訓

<div class="cardrow" style="margin-top:14px;">
<div class="pcard">
<div class="pc-h">任天堂 (Nintendo)</div>
<ul>
<li><b>起源</b>： 1889年、花札（印刷技術の産物）から開始。</li>
<li><b>哲学</b>：「Why（なぜ存在するのか）」＝ 人々に遊びを提供。</li>
<li><b>進化</b>：トランプ → 玩具 → 電子ゲーム → ポケモンGO → クラウドゲーム（Switch）。</li>
<li><b>結果</b>：テクノロジーが変わるたびに適応し、市場を拡大。</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">百科事典出版社 (Encyclopedia Publishers)</div>
<ul>
<li><b>起源</b>：印刷技術による知識の集積。</li>
<li><b>哲学</b>：「How（どう作るか）」＝ 重厚な書籍セットの販売。印刷物販売モデルに固執。</li>
<li><b>結果</b>：CD-ROMやインターネットの登場を「脅威」と認識。</li>
<li><b>結果</b>：Wikipediaやオンライン検索に取って代わられる。</li>
</ul>
</div>
</div>

<div class="takeaway pip-safe"><b>Takeaway</b>　DXの本質は、新しいツールを使って「なぜ自分が存在するのか」という使命を再定義し続けることにある。</div>

---

<div class="page-title">DXとは</div>

# <span style="color:var(--accent-dark)">インフラ・クラウドのタイプ</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1.3;">

<div class="subhead"><span class="tag tag-accent">クラウド</span><span style="font-size:23px;">インターネット経由で利用でき、情報の保存や演算ができるデータセンターのネットワーク</span></div>

<div style="font-size:25px; font-weight:800; color:var(--accent-dark); margin:6px 0 4px;">構成についての分類</div>

<div class="bgroup">
<div class="bg-label">分類</div>
<div class="bg-items">
<div><b>オンプレミス</b>　自社データセンター内で独自ニーズに合わせて運用 ／ 調達に数か月、スペース・電力・冷却・専門スタッフが必要</div>
<div><b>プライベート クラウド</b>　1組織が占有するクラウド環境 ／ セルフサービス・スケーラビリティのメリットあり</div>
<div><b>パブリック クラウド</b>　Google Cloudなどのプロバイダが管理 ／ 複数テナントで共有、使った分だけ支払い</div>
<div><b>ハイブリッド / マルチクラウド</b>　複数の環境を組み合わせ (GCP/AWS/MS Azure) ／ 89%の組織がマルチクラウド戦略（Flexera 2022）　<span class="tag tag-soft" style="font-size:18px;">Anthos</span> <span class="tag tag-soft" style="font-size:18px;">GKE enterprise</span></div>
</div>
</div>

</div>
<div style="flex:0 0 230px;">
<div style="font-size:25px; font-weight:800; color:var(--accent-dark); margin-bottom:8px;">利点</div>
<div class="box-accent" style="font-size:23px; line-height:2.0; padding:14px 22px;">スケーラビリティ<br>柔軟性<br>アジリティ<br>戦略的価値<br>セキュリティ<br>費用対効果</div>
</div>
</div>

---

<div class="page-title">クラウドをめぐるパラダイム</div>

# クラウドをめぐるパラダイム

<div style="text-align:center; margin-top:6px;">
<img src="./src/fig06-pyramid-crop.png" alt="VMクラウド→インフラストラクチャクラウド→トランスフォーメーションクラウド" style="height:400px;">
</div>

<div class="takeaway pip-safe"><b>コンピューティングリソースの移行から、働き方の移行へ</b></div>

---

<div class="page-title">サービスモデル</div>

# サービスモデルの選択： <span style="color:var(--accent-dark)">抽象化度</span>と<span style="color:var(--accent-dark)">責任</span>の違い

<div style="text-align:center; margin-top:0;">
<img src="./src/fig07-cars-crop.png" alt="自家用車・レンタカー・タクシー・バス" style="width:820px;">
</div>

<table style="width:1080px; margin:2px auto 0; border-collapse:collapse; font-size:21px; text-align:center; line-height:1.25;">
<tr style="background:var(--section-bg);">
<th style="padding:6px 10px; width:120px;"></th>
<th style="padding:6px 10px;">自家用車<br><b>オンプレミス</b></th>
<th style="padding:6px 10px;">レンタカー<br><b>IaaS</b></th>
<th style="padding:6px 10px;">タクシー<br><b>PaaS</b></th>
<th style="padding:6px 10px;">バス<br><b>SaaS</b></th>
</tr>
<tr><td style="padding:3px; font-weight:800;">保有</td><td>自分</td><td style="color:var(--accent);">会社</td><td style="color:var(--accent);">会社</td><td style="color:var(--accent);">会社</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:3px; font-weight:800;">運転</td><td>自分</td><td>自分</td><td style="color:var(--accent);">会社</td><td style="color:var(--accent);">会社</td></tr>
<tr><td style="padding:3px; font-weight:800;">行き先</td><td>自由</td><td>自由</td><td>自由</td><td style="color:var(--accent);">固定</td></tr>
<tr style="background:var(--section-bg);"><td style="padding:3px; font-weight:800;">例</td><td>(何でも)</td><td><b>Compute Engine</b><br><b>Cloud Strage</b></td><td><b>Cloud Run</b><br><b>Big Query</b><br><b>Vertex AI</b></td><td><b>Gmail</b><br><b>Google Drive</b><br><b>Gemini</b></td></tr>
</table>

---

<div class="page-title">サービスモデル</div>

# 責任共有モデル

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:10px;">
<div style="flex:1.5;">

<table style="width:100%; border-collapse:collapse; font-size:23px; text-align:center;">
<tr><td style="width:110px; font-weight:800; padding:8px; text-align:right;">On-Prem</td><td style="background:#F2C94C; padding:12px; border-radius:6px;">顧客が全て管理</td></tr>
<tr><td style="font-weight:800; padding:8px; text-align:right;">IaaS</td><td style="padding:0;"><table style="width:100%; border-collapse:collapse;"><tr><td style="background:#F2C94C; padding:12px; border-radius:6px 0 0 6px; width:45%;">データ、アプリ、OS</td><td style="background:#2D9CDB; color:#fff; padding:12px; border-radius:0 6px 6px 0;">ハードウェア、ネットワーク</td></tr></table></td></tr>
<tr><td style="font-weight:800; padding:8px; text-align:right;">PaaS</td><td style="padding:0;"><table style="width:100%; border-collapse:collapse;"><tr><td style="background:#F2C94C; padding:12px; border-radius:6px 0 0 6px; width:28%;">データ、アプリ</td><td style="background:#2D9CDB; color:#fff; padding:12px; border-radius:0 6px 6px 0;">OS、ネットワーク、ハードウェア</td></tr></table></td></tr>
<tr><td style="font-weight:800; padding:8px; text-align:right;">SaaS</td><td style="padding:0;"><table style="width:100%; border-collapse:collapse;"><tr><td style="background:#F2C94C; padding:12px; border-radius:6px 0 0 6px; width:18%;">データ、<br>アクセス</td><td style="background:#2D9CDB; color:#fff; padding:12px; border-radius:0 6px 6px 0;">アプリ、OS、ネットワーク、ハードウェア</td></tr></table></td></tr>
</table>

</div>
<div style="flex:0 0 320px;">
<div class="box-info" style="text-align:center;">データとアクセスの管理は、常に顧客の責任。</div>
<div class="box-warn pip-safe" style="margin-top:16px; text-align:center;">⚠️<br>「セキュリティ事故の99%はユーザーエラーに起因する」<br>(Gartner)</div>
</div>
</div>

---

<div class="page-title">コンピューティングリソース</div>

# コンピューティングリソース

<div style="display:flex; gap:22px; align-items:flex-start;">
<div style="flex:0 0 350px;">

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-bottom:3px;">サーバー/VM</div>
<div class="box-info" style="font-size:20px; padding:8px 16px;"><span class="tag tag-soft" style="font-size:18px;">Compute Engine</span> <span class="tag tag-soft" style="font-size:18px;">Bare Metal Solution</span><br>仮想マシンを作成・実行するIaaSプロダクト</div>
<div class="box-accent" style="font-size:19px; padding:6px 16px; margin-top:6px;"><b>継続割引・確約割引可能</b><br><b>プリエンプティブル VM/Spot VM</b></div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin:10px 0 3px;">コンテナ</div>
<div class="box-info" style="font-size:20px; padding:8px 16px;"><span class="tag tag-soft" style="font-size:18px;">Cloud run</span>　コンテナ化されたアプリを実行する仕組み<br>Kubernetes (K8s)：デプロイ・スケーリング・コンテナ管理の規格 (標準)<br><span class="tag tag-soft" style="font-size:18px;">GKE autopilot</span> <span class="tag tag-soft" style="font-size:18px;">GKE enterprise</span></div>

</div>
<div style="flex:1;">
<img src="./src/fig09-gke-crop.png" alt="コンテナ技術とGKE：VMとコンテナの仮想化レイヤ比較" style="width:100%; margin-top:30px;">
</div>
</div>

---

<div class="page-title">コンピューティングリソース</div>

# コンピューティングリソース

<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">コンテナ以外の　サーバーレス</div>

<div style="text-align:center; margin-top:2px;">
<img src="./src/fig10-serverless-crop.png" alt="Cloud Functions / App Engine" style="width:760px;">
</div>

<div class="box-accent" style="margin-top:4px; font-size:22px; padding:8px 22px;"><b>サーバーレス：</b>インフラのプロビジョニングや管理が完全に自動化されている状態。デマンドの調整などで便利</div>

<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-top:8px;">セキュリティ</div>

<div style="text-align:center; margin-top:2px;">
<img src="./src/fig10-security-crop.png" alt="Authentication / Authorization / Auditing とネットワーク防御" style="width:980px;">
</div>

---

<div class="page-title">データベース</div>

# データベース、データウェアハウス、データレイクの役割の違い

<div style="text-align:center; margin-top:6px;">
<img src="./src/fig11-illus-crop.png" alt="データベース・データウェアハウス・データレイクのイラスト" style="width:980px;">
</div>

<div class="cardrow" style="margin-top:8px;">
<div class="pcard">
<div class="pc-h">データベース (Database)</div>
<ul>
<li><b>目的</b>：データの保存・収集・管理（日常業務）</li>
<li><b>タイプ</b>：リレーショナル (SQL) vs 非リレーショナル (NoSQL)</li>
<li><b>特徴</b>：トランザクション処理 (OLTP)</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">データウェアハウス (Data Warehouse)</div>
<ul>
<li><b>目的</b>：データの分析（意思決定）</li>
<li><b>特徴</b>：構造化・整理済みデータ</li>
<li><b>用途</b>：ビジネスインテリジェンス (BI) に活用</li>
</ul>
</div>
<div class="pcard">
<div class="pc-h">データレイク (Data Lake)</div>
<ul>
<li><b>目的</b>：元データのまま全量を保存・探索</li>
<li><b>特徴</b>：構造化・非構造化データ</li>
<li><b>用途</b>：データを加工して新たな価値、データサイエンティストが探索的に利用</li>
</ul>
</div>
</div>

---

<div class="page-title">データベース</div>

# データベース

<div style="display:flex; gap:18px; align-items:flex-start;">
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">データベース</div>
<div style="font-size:22px; margin:2px 0 6px;">信頼性の高いトランザクション処理の選択肢</div>
<img src="./src/fig12-db-crop.png" alt="Cloud SQL / Cloud Spanner / Firestore / Cloud Bigtable の選択" style="width:100%;">
</div>
<div style="flex:1;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">データウェアハウス</div>
<div style="font-size:22px; margin:2px 0 6px;">現代のデータウェアハウスとデータレイクの融合</div>
<img src="./src/fig12-dwh-crop.png" alt="BigQuery のサーバーレス分析" style="width:100%;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark); margin-top:6px;">データレイク</div>
<img src="./src/fig12-lake-crop.png" alt="データレイクのストレージ階層" style="width:100%;">
<div style="text-align:right; margin-top:2px;"><span class="tag tag-soft" style="font-size:19px;">Cloud Strage</span></div>
</div>
</div>

---

<div class="page-title">データバリューチェーン</div>

# データの流れと<span style="color:var(--accent-dark)">品質</span>　<span class="tag tag-accent">AI / ML</span>

<img src="./src/fig24-img.png" alt="データバリューチェーン：生成→収集→処理→保存→分析→活用" style="display:block; width:100%; max-width:1060px; margin:2px auto 6px;">

<div class="box-info" style="margin-top:2px; margin-right:calc(var(--pip-w) + 8px); font-size:21px; line-height:1.4; padding:10px 20px;">
1. <b>完全性 (Completeness):</b> 欠損値がないこと　　2. <b>一意性 (Uniqueness):</b> 重複レコードがないこと<br>
3. <b>適時性 (Timeliness):</b> データが現状を反映していること　　4. <b>有効性 (Validity):</b> 定義された形式に従っていること<br>
5. <b>精度 (Accuracy):</b> 実態を正しく反映していること (例: 猫の 画像に「犬」とラベル付けしない)<br>
6. <b>整合性 (Consistency):</b> データセット全体で統一されていること
</div>

<div class="box-warn pip-safe" style="margin-top:8px;">※ <b>ETL (抽出→保存)</b>に加えて、<b> ELT (保存→抽出)</b>もAIで拡大中</div>

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

<div class="box-info" style="margin-top:2px; padding:9px 20px;"><b>Integration Platform as a Service</b>　異なるSaaSやオンプレミスシステムをクラウド上で連携・統合するサービス</div>

<div style="display:flex; gap:20px; margin-top:8px;">
<div style="flex:1;">

<div class="cardrow" style="margin:4px 0;">
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:5px;">これまで</div><p style="margin:0; font-size:22px;">できることが限られていた</p></div>
</div>
<div class="cardrow" style="margin:4px 0;">
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:5px;">これから</div><ul style="margin:0 0 0 1.05em;"><li>生成AI活用で出来ることが多様化</li><li>生成AIで作り方のノウハウが民主化</li></ul></div>
</div>

<div class="box-warn" style="margin-top:6px; font-size:22px; padding:9px 20px;"><b>例：場所、現在の時刻、今日の24時間の天気</b>　／　普遍教育： 生成AI活用講座で実施中</div>

</div>
<div style="flex:0 0 30%;">
<img src="./src/fig27-img.png" alt="ワークフロー実行結果（千葉市の天気）" style="display:block; width:100%; max-height:250px; object-fit:contain; border:1.5px solid #e3e8f0; border-radius:10px;">
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:8px;"><b>Google Workspace Studio</b>が近日、利用可能に！　※ 来年は授業教材もDifyからGoogleへ移行</div>

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
