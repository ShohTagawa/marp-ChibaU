<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">ChatGPT(無料版)</span>の現状

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">
<div style="flex:0 0 360px;">
<img src="./src/fig13-crop.png" alt="SimpleQA ベンチマーク（モデル別の correct / not attempted / incorrect）" style="width:360px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="box-info" style="margin-top:10px; font-size:20px; padding:8px 14px;">SimpleQA：回答の事実的正確性のベンチマーク<br>Wei et al. (2024) Arxiv</div>
</div>
<div style="flex:1;">

<div class="box-accent" style="font-size:21px; padding:10px 16px;">例) Q. Who received the IEEE Frank Rosenblatt Award in 2010?<br>　　A. Michio Sugeno</div>

<div style="font-size:22px; margin:6px 0 0;">知識のエッジ(=学習回数小)にある内容も含めてある</div>

<div class="box-warn" style="margin-top:10px; font-size:22px;">問題を解かせたり、論文を探させた場合等、<br>無料版である<b>4o mini</b>は、「分からない」ということもなく、<b>ハルシネーション</b>する可能性が高い</div>

<div class="box-accent" style="margin-top:10px; font-size:22px;">但し、本流の知識を求めた場合については、<br>　- 正しく説明したり、<br>　- 答えを与えた状態でその理由を説明させると正しい<br>可能性が高い。</div>

</div>
</div>

<!--
- 無料版ChatGPT(4o mini)の現状。SimpleQAベンチマークでは、知識のエッジにある問いに対してハルシネーションが多い。一方、本流の知識なら正しく説明できる可能性が高い。
-->

---

<div class="page-title">②課題での利用例</div>

# <span style="color:var(--accent-dark)">ChatGPT(有料版)</span>の現状

<div style="display:flex; gap:28px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>1. インタラクティブに数値実験する</b></div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>2. 質問を自動生成する</b> → <b>精緻化（elaboration）</b></div>
<div class="box-accent" style="margin-top:6px; font-size:20px; padding:8px 14px;">「なぜそうなっているのか（Why）？」<br>「どのようにそうなっているのか（How）？」<br>「具体例は何なのか（What）？」</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>3. o1を使って、問題の詳細な解説を得る</b></div>
<div class="box-accent" style="margin-top:6px; font-size:20px; padding:8px 14px;">自分は、この問題について、〇〇と思った。<br>解答は、△だった。なぜ？</div></div>

</div>
<div style="flex:1;">

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>4. Webで検索する</b></div>
<div style="font-size:20px; margin-top:4px;">地球の核に水素が存在する可能性は？</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>5. 出典を明示する</b></div>
<div class="box-accent" style="margin-top:6px; font-size:19px; padding:8px 14px;">地球の核に水素が入っている可能性があるか、地球核のニュートリノ観測でわかるかどうか、英語の論文を引用しながら教えて。出典を明記して。</div></div>

<div class="stepbox" style="margin:6px 0;"><div class="st"><b>6. コーディングする</b></div>
<div class="box-accent" style="margin-top:6px; font-size:19px; padding:8px 14px;">フーリエ関数で、xが1つ増えるごとに1と-1を行き来するbox関数を、だんだん近似してみせて。(なんか、Box側が違いますが…)</div></div>

</div>
</div>

<div class="cite pip-safe" style="margin-top:4px;">学校で学びそうなことを質問すると、自動生成されます。</div>

<!--
- 有料版ChatGPTの活用法6パターン。数値実験／質問の自動生成（精緻化）／o1での詳細解説／Web検索／出典明示／コーディング。
-->

---

<!-- _class: message -->

<div class="page-title">ワーク①</div>

<h1 style="margin-top:48px;">生成AIは、<span style="color:var(--accent-dark)">理学の学び/研究を幸せ</span>にするか</h1>

<div class="box-info" style="font-size:30px; margin-top:24px; padding:18px 32px; line-height:1.7;">　　時間管理：10分GW、5分共有<br>　　回答形式：Yes/No、なぜそう思うのか？</div>

<!--
- ワーク①。「生成AIは理学の学び／研究を幸せにするか」。10分グループワーク、5分共有。Yes/Noと、なぜそう思うのかを考える。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">① "教育×AI"領域の俯瞰</div>

# <span style="color:var(--accent-dark)">Benjamin Bloom</span> の２つの仕事-その1　2シグマ問題

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:4px;">
<div style="flex:0 0 360px;">
<img src="./src/fig16-crop.png" alt="2σ：個別指導は教室で学んだ群より学習効果が高い" style="width:360px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">Bloom (1984) <i>Educational Researcher</i><br><a href="https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf">https://web.mit.edu/5.95/readings/bloom-two-sigma.pdf</a></div>
</div>
<div style="flex:1;">

<div class="box-info" style="font-size:23px;">個別指導は、通常の教室での指導と比べ学習効果が<b>2標準偏差</b>高い。</div>

<div style="font-size:23px; margin:10px 0 0;">"コスト上実現しえない個別指導"と同等の学びを<b>全員に常時提供する方法</b>はあるか？</div>

<div class="box-accent" style="margin-top:8px; font-size:24px;"><b>生成AIで個別最適な学び</b>が支援出来る？</div>

<div class="subhead" style="margin-top:14px;"><b>学修支援向け生成AIの実用化　Khan (2024)</b></div>

<div style="display:flex; gap:16px; align-items:flex-start;">
<div class="pcard" style="padding:10px 16px;">
<div class="pc-h">学びの個別最適化ツール・<br>伴走者として利用する</div>
<ul>
<li>興味や既習知識を例とした説明の生成、チュータリング、学習歴の情報統合、評価</li>
<li>英語、プログラミング等のスキル学習</li>
</ul>
</div>
<div style="flex:0 0 140px; font-size:18px; color:#555; line-height:1.5;">
<b>MOOC提供者</b><br>Google / Stanford / coursera / edX / duolingo …
</div>
</div>

</div>
</div>

<!--
- Bloomの2シグマ問題。個別指導は教室指導より2標準偏差高い。実現不能だった個別指導を生成AIで全員に提供できるか。Khan(2024)等、学修支援向け生成AIの実用化が進む。
-->

---

<div class="page-title">① "教育×AI"領域の俯瞰</div>

# <span style="color:var(--accent-dark)">Benjamin Bloom</span> の２つの仕事 – その2 学習目標分類

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:2px;">
<div style="flex:1.35;">

<table style="font-size:18px; border-collapse:collapse; width:100%;">
<thead>
<tr>
<th style="background:#5a6473; color:#fff; padding:5px 8px; width:2.2em;"></th>
<th style="background:var(--tag-blue); color:#fff; padding:5px 8px;">認知的領域 (知識や思考)</th>
<th style="background:var(--tag-green); color:#fff; padding:5px 8px;">学びへの生成AIの影響</th>
</tr>
</thead>
<tbody>
<tr>
<td style="background:#eef0f3; font-weight:800; text-align:center;">高次</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>創造</b> (学習を応用し、新しい価値を作れる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">人の創造性こそが大切</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>評価</b> (事物・判断等を比較し評価出来る)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">評価軸/価値/判断は人が設定する</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>分析</b> (要素に分け、関係性を指摘できる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px; background:var(--accent-soft);"><b>解答/過程の支援可</b>(例：要約・構造化・コーディング)</td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>応用</b> (他の場面や状況に使用できる)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px; background:var(--accent-soft); color:var(--accent-dark);"><b>単なる問題では、 AIが解いてしまう…</b></td>
</tr>
<tr>
<td style="background:#eef0f3;"></td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>理解</b> (学習内容を説明出来る)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">説明/例示で支援可能 だが学修者の理解必須</td>
</tr>
<tr>
<td style="background:#eef0f3; font-weight:800; text-align:center;">低次</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;"><b>記憶</b> (事実や概念を暗記している)</td>
<td style="border:1px solid #d4d9e0; padding:5px 8px;">支援可能だが、 学修者の記憶必須</td>
</tr>
</tbody>
</table>
<div class="cite">左は栗田&amp;中村 (2023)を元に作成 / 原著 Bloom (1956/1964)、改訂版(2001)を記載</div>

</div>
<div style="flex:1;">

<div style="font-size:22px; margin:2px 0;">学修の目標を構造化し、学びの設計を支援</div>

<div class="box-warn" style="font-size:18px; padding:8px 14px; margin-top:6px;">※近年では、下から個別・段階的に行うのではなく、複数の次元の要素を組み合わせる必要性が叫ばれている。<br>※近年では、学び方の学びや、人間性の涵養などを含む、学習目標分類も作成されている (e.g. Finkの学習目標分類)<br>※但し、低次(特に記憶・理解・応用の段階)を蔑ろにして、高次の学修目標の達成は難しいと想定される。</div>

<div style="font-size:22px; margin:8px 0;">授業におけるAI利用の指針となり得る</div>

<div class="box-accent pip-safe" style="font-size:20px; padding:8px 14px;"><b>授業の課題やワークの一部として、AIを学びの設計に取り入れる/対策する/教員支援を行う</b></div>

</div>
</div>

<div class="cite pip-safe">▶学習目標分類についての、担当講師による解説動画 (9分) <a href="https://www.notion.so/geophysica/Bloom-145d8c8bc5ab80deb9dfc15b89d91875?pvs=4">https://www.notion.so/geophysica/Bloom-...</a></div>

<!--
- Bloomの学習目標分類（改訂版）。高次＝創造・評価・分析、低次＝応用・理解・記憶。生成AIは分析・理解の支援が可能だが、応用は直接解かれてしまう。授業設計の指針となる。
-->

---

<div class="page-title">授業で活用する上で</div>

# 課題における記載例 <span style="font-size:24px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>課題における自分のコントリビューションを説明する</b></div>

<div class="box-info" style="font-size:21px; line-height:1.55;">
<b>- 私は友人、ツール、テクノロジー、AI の助けを一切借りずに、この作業を完全に自力で行った</b>。<br>
<b>- 最初のドラフトは自分で書いたが、その後、友人/ 家族/AI/ パラフレーズ/文法/剽窃ソフトウェアに読んでもらい、提案をもらった。この助けを受けた後、以下の変更を行った：</b>
<div style="margin:2px 0 2px 1.4em;">- スペルと文法の修正<br>- 構成や順序の変更</div>
<b>自分で作成した後、テクノロジーを使用して文全体や段落全体を書き直した。</b><br>
<b>元となるアイデアを生成するためにAI/友人/チューターを使用した。</b><br>
<b>アウトライン/最初のドラフトを作成するためにAIを使用し、その後編集した。</b>
</div>

<!--
- Bowen & Watson "Teaching with AI"より、課題における記載例。自分のコントリビューション（どこまで自力か、どこでAIを使ったか）を学生に申告させる文例。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<div class="page-title">授業で活用する上で</div>

# 課題における記載例 <span style="font-size:24px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>事前に授業における生成AI利用のポリシーを共有する</b></div>

<div class="box-info" style="font-size:22px; line-height:1.6;">
AI の使用が許可または禁止されるのはいつか？なぜか？<br>
AI とのブレイ ンストーミングはカンニングにあたるのか？<br>
AI がこのクラスで学習をど のように強化または妨げる可能性があるのか？<br>
AI が許可されている場合、 学生は課題提出の一環として AI プロンプ トを共有する必要があるのか？<br>
AI の使用はどのようにクレジットされるべきか？<br>
AI の限界に関する警告<br>
AI 検出ツールの使用計画とその情報の使用方法に関する説明
</div>

<!--
- 同じくBowen & Watsonより。事前に授業の生成AI利用ポリシーを共有するために検討すべき問いのリスト。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<div class="page-title">③先生ご自身が授業で活用/対策される上で</div>

# 参考：課題における記載例 <span style="font-size:22px;">(Bowen &amp; Watson, AAC&amp;U 2024)</span>

<div class="subhead"><b>事前に授業における生成AI利用のポリシーの例</b></div>

<div class="box-info pip-safe" style="font-size:18.5px; line-height:1.55;">
このライティングコースの目標の一つは、効果的に書き、コミュニケーションをとる方法を学ぶことだ。これは練習が必要である。AIを使って迅速に生産することも期待されるが、<b>そもそも質の高い文章を自分で作成、編集し、認識する能力も必要</b>である。AIが自分を介さずに作業を行うことができる場合、それは雇用されるに値するスキルを持っていない、いうことになる。だから、練習しよう。<br>
それを達成するために、コースの前半では、AIのサポートは一切禁止する。この過程の苦労やもどかしさは、レベル上げ訓練のようなものと捉えてほしい。自分で作業を行う人が利益を得るのだ。<br>
一方、コースの後半では、特定の状況下でAIを使用することが許可される場合がある。AIの使用を認める必要がある。使用したプロンプトとその応答を提出するよう求める場合がある。<br>
AIリテラシーは重要な新しいスキルだ。Aiは「幻覚：事実のように見えるものを生成する可能性」があることに注意が必要である。この技術の利点と潜在的な危険性の両方について批判的に考える必要がある。<br>
あなたは依然として最終的な成果物およびAIからの制限やバイアスの可能性について責任を負う。このポリシーは必要に応じて変更する権利を留保する。
</div>

<!--
- 生成AI利用ポリシーの具体例（ライティングコース）。前半はAI禁止で基礎力を鍛え、後半は条件付きで許可。AIリテラシーと最終責任は学生にあると明記。
- メタな点：①ルーブリックでの採点やフィードバック支援はAIが可能になった
-->

---

<!-- _class: message -->

<div class="page-title">ワーク②</div>

<h1 style="margin-top:40px; line-height:1.4;">生成AIを、<span style="color:var(--accent-dark)">理学の学びや授業に活かす</span>には<br>どうすればよいのか、なぜなのか？</h1>

<div style="font-size:30px; margin:8px 0 0 1.4em; line-height:1.6;">1. 学びを損なわないために<br>2. 学びをもっと伸ばすために</div>

<div class="box-info" style="font-size:27px; margin-top:18px; padding:16px 30px; line-height:1.7;">
　<b>時間管理：</b>30分GW、10分共有<br>
　<b>回答形式：</b>上記について説明<br>
　　※ホワイトボード使用可
</div>

<!--
- ワーク②。生成AIを理学の学びや授業に活かすには、どうすればよいか・なぜか。①学びを損なわないために、②学びをもっと伸ばすために。30分GW、10分共有。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<!-- _class: message -->

<div class="page-title">ワーク③</div>

<h1 style="margin-top:48px; line-height:1.4;">生成AIの活用のために、<br>　どのような学修支援があると良いか</h1>

<div class="box-info" style="font-size:27px; margin-top:28px; padding:16px 30px; line-height:1.7;">
　<b>時間管理：</b>30分GW、10分共有<br>
　<b>回答形式：</b>上記について説明<br>
　　※ホワイトボード使用可
</div>

<!--
- ワーク③。生成AIの活用のために、どのような学修支援があると良いか。30分GW、10分共有。
- でも、アンケートを有効活用しようと思っていただければ嬉しいです。
-->

---

<div class="page-title">① "教育×AI"領域の俯瞰</div>

# 社会の<span style="color:var(--accent-dark)">"水準"</span>としてのAI

<div class="box-info" style="font-size:22px;"><b>インターネットが教育に入ってきた黎明期 ▶ 主に知識 (記憶・理解)の次元への影響</b></div>

<div style="font-size:21px; margin:4px 0 0;">"自由に検索出来る"知識の水準としてのインターネット</div>

<div class="box-accent" style="font-size:19px; padding:8px 16px; margin-top:6px;">
▶ 但し、インターネットの知識を自らのものとして使いこなすには、　 変わらず相当の学びが必要だった<br>
▶ 一方、課題を解いたり、より上位の学習目標分類に至る上で、　 検索する手間が大きく省略され、授業設計や課題設定の幅が広がった<br>
▶ インターネットリテラシやその使用方法は、仕事や課題解決の前提となった
</div>

<div class="box-warn" style="font-size:22px; margin-top:10px;"><b>AIが教育に入ってきた黎明期 ▶ 主に思考/推論 (理解・応用・分析)の次元への影響</b></div>

<div style="font-size:21px; margin:4px 0 0;">思考やアウトプットの水準としてのAI</div>

<div class="box-accent pip-safe" style="font-size:23px; margin-top:8px;"><b>大切なのは、情報を収集し、自分がどう付き合うか考えること</b><br>▶ 知識や思考を自らのものとして使いこなすには、変わらず学びが必要では？</div>

<!--
- インターネットが「知識の水準」を底上げしたのと同様に、AIは「思考・推論の水準」を底上げする。だが自らのものとして使いこなすには、変わらず学びが必要。
- ハンプサイクル
-->

---

<div class="page-title">① "教育×AI"領域の俯瞰</div>

# 理学を志すこと <span style="font-size:26px;">(私自身の立ち位置)</span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">

<div class="box-info" style="font-size:23px;">　理学は、世界に対する人の好奇心という、本質的な心の働きにドライブされた　学問領域であると私は思います。</div>

<div class="box-accent pip-safe" style="font-size:20px; margin-top:10px; line-height:1.55;">
　そのため、<br>
　　- 理解/思考する上での道具として使いたい、とか<br>
　　- 教員が教える際に支援や高度化に繋がる、とか<br>
　生成AIは、目的を達するための「道具」として捉えられると思います。<br>
　レポート/課題の時間を短縮したい、成績上げたいという意識が不正や学びの毀損に繋がることはありえますが、　AIに頼っても自分が伸びない、という点は、学生も共感出来ると想定しています。<br>
　<b>理学の学び/研究のワクワク感やモチベーションには、　今のところ影響しない</b>と考えます。
</div>

</div>
<div style="flex:0 0 280px;">
<img src="./src/fig24-crop.png" alt="DALL·Eで生成した四季の樹のイメージ" style="width:280px; border:1px solid #e3e8f0; border-radius:8px;">
<div class="cite">DALL·Eで2024/7作成 以下の文章に対する絵を生成させた結果 ▲<br>暗は無限大であって明は有限である。暗はいっさいであって明は微分である。- 寺田寅彦『知と疑い』</div>
</div>
</div>

<!--
- 理学は世界への好奇心にドライブされた学問。生成AIは目的を達する「道具」。AIに頼っても自分は伸びないという点は学生も共感する。理学の学び・研究のワクワク感やモチベーションには今のところ影響しないと考える。
- ハンプサイクル
-->
