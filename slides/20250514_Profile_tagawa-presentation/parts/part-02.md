<div class="page-title">学修基盤モックアップを作る</div>

# 学修基盤<span style="color:var(--accent-dark)">モックアップ</span>を作る

<div class="cardrow" style="margin-top:10px;">
<div class="pcard">
<div class="pc-h">学生用 - AIUEO</div>
<p style="font-size:22px; margin:4px 0;"><b>Chatbot</b>を軸とする web app</p>
</div>
<div class="pcard">
<div class="pc-h">教員支援用 TEACH</div>
<p style="font-size:22px; margin:4px 0;">製作予定 (Chatbot以外の要件が多い)</p>
</div>
</div>

<div class="box-info" style="margin-top:12px;">
<b>研究でユーザーが使用する”ガワ”はきちんと作る</b><br>
※様々なユースケースをこのapp内で実現可能とする<br>
※利用同意、評価データの収集、アンケート調査なども、ここから誘導
</div>

<div class="box-accent" style="margin-top:12px; margin-right:calc(var(--pip-w) + 8px);">
<b>消耗品費：UI/UX の開発・改善 (モックアップ費)、ラボ開発時の費用分担</b><br>
<span style="font-size:21px;">最低限の開発費用として、2年度に5,500千円、3年度に2,500千円。更新・維持費用として、以降4年度~最終年度1,000千円を計上</span><br>
<span style="font-size:21px; color:#8a4b00;">▶但しアプリ開発には不足するため、できる限り自前か学内予算獲得を目指す</span>
</div>

<div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap;">
<span class="tag tag-soft" style="font-size:20px;">設備備品費：2 ~ 最終年度実施 合計 2,400千円</span>
<span class="tag tag-soft" style="font-size:20px;">消耗品費：2 ~ 最終年度実施 合計 11,000千円</span>
<span class="tag tag-soft" style="font-size:20px;">2 ~ 最終年度実施 合計 500千円</span>
</div>

<!--
- 学生用 AIUEO（Chatbot軸のweb app）と教員支援用 TEACH を作る。研究でユーザーが触る“ガワ”はきちんと作り、利用同意・評価データ収集・アンケートもここから誘導する。
-->

---

<div class="page-title">学修基盤-授業前後の支援</div>

# <span style="color:var(--accent-dark)">主体的学びの同伴者app</span> <span style="font-size:26px;">(授業前後 / カリキュラム中)</span>

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1.55;">
<img src="./src/fig26-arch-crop.png" alt="授業前後支援の学修基盤アーキテクチャ図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">

<div class="box-warn" style="font-size:19px; padding:9px 16px;">
RA/TA人件費：① 授業の設計・確認・評価 2千円/1h ✕ 10 h = 20千円 per 1授業<br>
② プロンプティング・分析 2千円/1h ✕ 20 h = 40千円 per 1授業<br>
③ 得られた知見の記事化・公開 2千円/1h ✕ 10 h = 20千円 per 1授業
</div>

<div class="box-info" style="font-size:19px; padding:9px 16px;">
<b>API費用 (消耗品費用)：</b><br>
東大の場合は、<b>無料分があり格安</b><br>
他大の場合は、<b>250千円分確保</b>
</div>

<div class="box-accent" style="font-size:19px; padding:9px 16px; margin-right:calc(var(--pip-w) + 8px);">
<b>90分ぶっ通しではなく、unit化/目標の構造化必要</b><br>
授業設計・課題設計を変える必要が出る
</div>

</div>
</div>

<div style="display:flex; gap:10px; margin-top:6px; flex-wrap:wrap;">
<span class="tag tag-soft" style="font-size:19px;">その他人件費：2 ~ 5年度実施 合計 4,000千円</span>
<span class="tag tag-soft" style="font-size:19px;">消耗品費：2 ~ 5年度実施 合計 2,000千円</span>
</div>

<!--
- 授業前後／カリキュラム中の「主体的学びの同伴者app」の構成。オーケストレータがチューター用LLM・検知用LLM・情報加工用LLMを束ね、学修者情報(UTONE/過去レポート)・授業映像質疑RAG・教授法的背景を統合する。Geminiのコンテキスト一括投入か o1-mini+オーケストレーターかは要検討。
-->

---

<div class="page-title">学修基盤-授業前後の支援</div>

# <span style="color:var(--accent-dark)">主体的学びの同伴者app</span> <span style="font-size:26px;">(授業前後 / カリキュラム中)</span>

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1.55;">
<img src="./src/fig27-arch-crop.png" alt="授業前後支援（教員UI側を強調した）アーキテクチャ図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">

<div class="box-warn" style="font-size:19px; padding:9px 16px;">
RA/TA人件費：①課題の設計・確認・評価 2千円/1h ✕ 10 h = 20千円 per 1授業<br>
② プロンプティング・分析 2千円/1h ✕ 20 h = 40千円 per 1授業<br>
③ 得られた知見の記事化・公開 2千円/1h ✕ 10 h = 20千円 per 1授業
</div>

<div class="box-info" style="font-size:19px; padding:9px 16px;">
<b>API費用 (消耗品費用)：</b><br>
東大の場合は、<b>無料分があり格安</b><br>
他大の場合は、<b>250千円分確保</b>
</div>

<div class="box-accent" style="font-size:19px; padding:9px 16px; margin-right:calc(var(--pip-w) + 8px);">
特に2年目以降は、外部識者/技術者のアイデアを導入、授業数・カリキュラム数を適宜調整
</div>

</div>
</div>

<div style="display:flex; gap:10px; margin-top:6px; flex-wrap:wrap;">
<span class="tag tag-soft" style="font-size:19px;">その他人件費：2 ~ 5年度実施 合計 4,000千円</span>
<span class="tag tag-soft" style="font-size:19px;">消耗品費：2 ~ 5年度実施 合計 2,000千円</span>
</div>

<!--
- 前ページと同じ構成を、教員UI①（授業前後支援）と教員用LLM・提出課題一覧の側から見た図。90分ぶっ通しでなくunit化・目標の構造化が必要で、授業設計・課題設計を変える必要が出る。
-->

---

<div class="page-title">学修基盤モックアップを作る</div>

# 学修基盤<span style="color:var(--accent-dark)">モックアップ</span>を作る

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.7;">
<div class="subhead"><span style="color:var(--accent-dark);">教員支援用</span></div>
<img src="./src/fig28-teach-crop.png" alt="教員用-授業準備サンプル画面（関心の円グラフ・洞察・授業の構成表）" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">
<div class="subhead"><span style="color:var(--accent-dark);">学生用</span></div>

<div style="display:flex; align-items:center; gap:10px; font-size:21px; font-weight:800;">
<span class="tag tag-soft" style="font-size:20px;">Dify / Azure</span>
<span style="color:#555;">or</span>
<span class="tag" style="font-size:20px; color:#fff; background:#1f1f1f;">Google AI Studio</span>
</div>

<img src="./src/fig28-chat-crop.png" alt="学生用チャットボットUIのサンプル画面" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>
</div>

<!--
- モックアップの実例。教員支援用は、学生の関心を可視化した円グラフと「結果からの洞察・提案」、授業の構成／レポート内容の提案テーブル。学生用は Dify / Azure / Google AI Studio をバックエンドにしたチャットボットUI。
-->

---

<div class="page-title">学修基盤-授業中の支援</div>

# <span style="color:var(--accent-dark)">授業内支援 / 授業の体験変容</span>

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1.6;">
<img src="./src/fig29-arch-crop.png" alt="授業中支援の学修基盤アーキテクチャ図" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">

<div class="box-warn" style="font-size:19px; padding:9px 16px;">
RA/TA人件費：① 開発に伴うPoC支援(全体) 2千円/1h ✕ 1,000 h = 2,000千円<br>
② ツール整備 2千円/1h ✕ 750 h = 1,500千円<br>
③ 得られた知見の分析・記事化・公開 2千円/1h ✕ 500 h = 1,000千円<br>
2千円/1h ✕ 50 h ✕ 5授業 = 500千円 ✕ 2年
</div>

<div class="box-info" style="font-size:19px; padding:9px 16px;">
<b>API費用 (消耗品費用)：</b><br>
東大の場合は、<b>無料分があり格安</b><br>
他大の場合は、<b>確保</b>
</div>

<div class="box-accent" style="font-size:19px; padding:9px 16px; margin-right:calc(var(--pip-w) + 8px);">
<b>授業の中に、教員と学修者を支援する</b><br>
※授業前後支援で行った授業から選んで実施
</div>

</div>
</div>

<div style="display:flex; gap:10px; margin-top:6px; flex-wrap:wrap;">
<span class="tag tag-soft" style="font-size:19px;">その他人件費：3 ~ 5年度実施 合計 5,500千円</span>
<span class="tag tag-soft" style="font-size:19px;">消耗品費：4 ~ 5年度実施 合計 3,000千円</span>
</div>

<!--
- 授業中支援の構成。授業中の音声を speech to text し、事前処理データ・授業計画・参加学生の関心と統合、授業内の感情分析（感情の時間変化）も行う。学生UI②／教員UI②が授業中の体験を変える。前後支援で実施した授業から選んで実施。
-->

---

<div class="page-title">2シグマ論文</div>

# 2シグマ論文 <span style="font-size:24px; color:var(--muted);">Bloom (1984)</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1;">
<img src="./src/fig30-twosigma-crop.png" alt="Bloom (1984) の2シグマ：個別指導・完全習得学習・通常授業の成績分布と percentile equivalent" style="width:100%;">
</div>

<div style="flex:1;">
<img src="./src/fig30-table-crop.png" alt="学習達成に影響する変数の効果量一覧表（Effect of selected alterable variables on student achievement）" style="width:100%;">
</div>

</div>

<div class="cite" style="margin-right:calc(var(--pip-w) + 8px);">Bloom (1984), <i>Educational Researcher</i>　https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf</div>

<!--
- お金の配分を説明する（補足）。Bloom (1984) の2シグマ論文：個別指導(Tutorial)は通常授業に比べ約2標準偏差、完全習得学習でも約1標準偏差、成績分布が上方シフトする。右表は各種教育介入の効果量。
-->

---

<div class="page-title">学修基盤-授業前後の支援</div>

# <span style="color:var(--accent-dark)">Google</span>の場合

<div class="lead-note" style="margin-top:4px;">cf. LeanLM (Google)の開発コンセプト</div>

<div class="stepbox" style="margin-top:8px;">
<div class="st" style="font-size:23px;"><b>アクティブ ラーニングを促す</b>: 適切なタイミングでフィードバックを提供して、演習と健全な取り組みを可能にする</div>
<div class="st" style="font-size:23px;"><b>認知負荷の管理</b>: 関連性があり、構造化された情報を複数のモダリティで提示する</div>
<div class="st" style="font-size:23px;"><b>学習者に適応する</b>: 目標とニーズに合わせて動的に調整し、関連する教材に基づいて学習を進めます。</div>
<div class="st" style="font-size:23px;"><b>好奇心を刺激する</b>: 学習過程全体を通じてエンゲージメントを高め、モチベーションを高める</div>
<div class="st" style="font-size:23px;"><b>メタ認知の深化</b>: 学習計画を立て、進捗をモニタリングし、学習者が自分の進歩を振り返るのを支援する</div>
</div>

<!--
- 参考：Google の LearnLM の開発コンセプト（アクティブラーニング促進／認知負荷管理／学習者適応／好奇心刺激／メタ認知深化）。本研究の設計方針と重なる点を確認。
-->

---

<div class="page-title">学修基盤-授業中の支援</div>

# <span style="color:var(--accent-dark)">授業内支援 / 授業の体験変容</span>

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.4;">
<img src="./src/fig32-sample-crop.png" alt="授業内支援サンプル画面" style="width:100%; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite" style="text-align:right;">©榎田</div>
</div>

<div style="flex:1; display:flex; flex-direction:column; gap:10px;">

<div class="stepbox">
<div class="st" style="font-size:23px;"><b>問①</b>　アクティブ・ラーニングや主体的学びは可能か</div>
<div class="st" style="font-size:23px;"><b>問②</b>　学修の達成状況が良化するか、学習基盤を使った教育の短期的</div>
<div class="st" style="font-size:23px;"><b>機能⑤</b>　授業中の教員支援、ワーク支援</div>
</div>

<div style="display:flex; gap:10px; margin-top:4px;">
<span class="tag tag-soft" style="font-size:20px;">Step 1　機能開発</span>
<span class="tag tag-soft" style="font-size:20px;">Step 2　明らかにする問</span>
</div>

</div>
</div>

<!--
- 授業中支援の体験変容。問①アクティブ・ラーニングや主体的学びは可能か、問②学修の達成状況が良化するか（短期的影響）、機能⑤授業中の教員支援・ワーク支援。Step1 機能開発／Step2 明らかにする問。
-->

---

<div class="page-title">Step ① 学修基盤-授業中支援</div>

# 個別最適な継続的な学修支援 <span style="font-size:24px;">・長期的な生成AIが学びに与える影響の調査</span>

<div style="display:flex; gap:18px; align-items:flex-start; margin-top:4px;">

<div style="flex:1.15;">

<div class="box-info" style="font-size:21px; padding:10px 18px; text-align:center; margin-bottom:8px;">これまでの参加者　/　UTONE利用者</div>

<svg viewBox="0 0 460 230" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="6" width="300" height="42" rx="8" fill="#8E0029"/><text x="170" y="33" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">大学の学びで生成AIを体験</text><rect x="20" y="110" width="120" height="64" rx="8" fill="#fff" stroke="#1A6BB0" stroke-width="2.5"/><text x="80" y="138" font-size="17" font-weight="800" fill="#15436e" text-anchor="middle">学生UI③</text><text x="80" y="160" font-size="15" fill="#15436e" text-anchor="middle">授業外支援</text><rect x="172" y="110" width="120" height="64" rx="8" fill="#E8F3E8" stroke="#2E7D46" stroke-width="2.5"/><text x="232" y="138" font-size="17" font-weight="800" fill="#1d5a32" text-anchor="middle">チューター用</text><text x="232" y="160" font-size="17" font-weight="800" fill="#1d5a32" text-anchor="middle">LLM</text><rect x="324" y="110" width="120" height="64" rx="8" fill="#EEF0F3" stroke="#888" stroke-width="2.5"/><text x="384" y="138" font-size="17" font-weight="800" fill="#333" text-anchor="middle">UTONE</text><text x="384" y="160" font-size="16" fill="#333" text-anchor="middle">や学修履歴</text><line x1="324" y1="142" x2="296" y2="142" stroke="#444" stroke-width="2.5" marker-end="url(#ah33)"/><line x1="172" y1="142" x2="144" y2="142" stroke="#444" stroke-width="2.5" marker-end="url(#ah33)"/><line x1="80" y1="110" x2="80" y2="52" stroke="#444" stroke-width="2.5" marker-end="url(#ah33)"/><defs><marker id="ah33" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#444"/></marker></defs></svg>

<div class="box-info" style="font-size:19px; padding:8px 14px; margin-top:6px;">整備は別予算で実施 / 分析を本予算で行う</div>

</div>

<div style="flex:1; display:flex; flex-direction:column; gap:8px;">

<div style="display:flex; gap:8px; align-items:center;">
<span class="tag tag-design" style="font-size:21px;">インタビュー・調査・効果測定</span>
</div>

<div class="stepbox" style="margin:4px 0;">
<div class="st" style="font-size:21px;"><b>Step 1 機能開発</b>：機能⑥ 個別最適な学びに基づく、学習内容の生成</div>
<div class="st" style="font-size:21px;"><b>Step 2 問</b>：問② 学修の達成状況が良化するか、学習基盤を使った教育の長期的影響</div>
<div class="st" style="font-size:21px;"><b>Step 3 問</b>：問① 生成AIは、大学のどのような学修基盤となるべきか、設計の雛形はなにか / 問② 未来の大学のカリキュラムデザイン</div>
</div>

<div class="box-accent" style="font-size:20px; margin-right:calc(var(--pip-w) + 8px);"><b>授業の中に、教員と学修者を支援する</b></div>

<div style="display:flex;">
<span class="tag tag-soft" style="font-size:19px;">謝金：4 ~ 最終年度実施 合計 1,500千円</span>
</div>

</div>
</div>

<!--
- 授業外支援（学生UI③）でチューター用LLMがUTONE・学修履歴に基づき個別最適な学習内容を生成。これまでの参加者・UTONE利用者を対象にインタビュー・調査・効果測定。整備は別予算、分析を本予算で。Step1機能開発→Step2/3で長期的影響と未来のカリキュラムデザインを問う。
-->

---

<div class="page-title">Step ① 学修基盤-授業中支援</div>

# <span style="color:var(--accent-dark)">その他</span>の費用

<div class="box-warn" style="margin-top:24px; max-width:760px;"><b>クロアポ人件費 → 11,200千円</b></div>

<div class="box-warn" style="margin-top:18px; max-width:760px;"><b>出張旅費 → 2,200千円</b></div>

<div class="box-warn" style="margin-top:28px; max-width:760px;"><b>その他：主に、論文投稿・学会参加費用等 → 1700千円</b></div>

<!--
- その他の費用：クロスアポイントメント人件費 11,200千円、出張旅費 2,200千円、論文投稿・学会参加費用等 1,700千円。
-->

---

<div class="page-title">最後に</div>

<div style="text-align:center; margin-top:90px; font-size:34px; line-height:1.9;">
ご清聴、ありがとうございました。<br>
<span style="background:var(--accent-soft); padding:2px 6px;">大学教育と生成AIが共生する最大のチャンス</span>と思っております
</div>

<div style="text-align:center; margin-top:36px; font-size:34px; line-height:1.9;">
何としても、学生と大学教育の未来に貢献したいです。<br>
全力で頑張りますので、<b style="color:var(--accent-dark);">よろしくお願い致します。</b>
</div>

<!--
- 締め。大学教育と生成AIが共生する最大のチャンスと考えており、学生と大学教育の未来に何としても貢献したい。全力で頑張ります、よろしくお願い致します。
-->

---

<div class="page-title">メディア授業の建付けと制限</div>

# <span style="color:var(--accent-dark)">メディア授業の建付け</span>と<span style="color:var(--accent-dark)">制限</span>

<div class="lead-note">オンライン授業で出来ること</div>

<div class="goal-box" style="font-size:23px; padding:14px 26px; margin:10px 0;">
①大学設置基準内にメディア授業を規定<br>
<span class="ind">▶大学設置基準第二十五条第二項</span><br>
②<b>「面接(=対面)授業に相当する教育効果を有する」</b><br>
<span class="ind">- オンデマンド型の場合には <b>事後の指導</b>と<b>意見交換(質問)の機会確保</b>が必須</span><br>
<span class="ind">▶平成13年文科省告示第51条</span><br>
<b>③学部は卒業単位数に含められる上限がある</b><br>
<span class="ind"><b>- メディア授業科目</b>(授業回数のうち半数を超える回数をメディア授業で実施する授業)は<b>60単位まで</b></span><br>
<span class="ind">※大学院は<b>上限はない</b> (短大/通信制大学は別規定)</span>
</div>

<div class="cite pip-safe">大学における多様なメディアを高度に利用した授業について (文部科学省資料)　https://www.mext.go.jp/b_menu/shingi/chukyo/chukyo4/043/siryo/__icsFiles/afieldfile/2018/09/10/1409011_6.pdf</div>

<!--
- メディア授業の法的建付け。①大学設置基準第25条2項で規定、②対面授業に相当する教育効果（オンデマンドは事後指導と質問機会の確保が必須・平成13年文科省告示51条）、③学部はメディア授業科目を卒業単位60単位まで（大学院は上限なし）。
-->
