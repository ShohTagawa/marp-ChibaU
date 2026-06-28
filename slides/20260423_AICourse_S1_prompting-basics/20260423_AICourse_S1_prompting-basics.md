---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AI活用術</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root { --accent: #0F574C; --accent-dark: #073A31; --accent-soft: #E3EEEB; --hdr-left-w: 20%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<div class="page-title">開始の前に</div>

# 開始の前に

<div class="goal-box" style="margin:10px 0;">
<div>① <b>PCを立ち上げ、お持ちの千葉大学Google Workspaceにログインして下さい</b></div>
<div class="ind" style="color:var(--accent-dark); font-weight:700;">→ 学校のGmailが立ち上がる状況ならOKです。</div>
<div style="margin-top:8px;">② インタラクションツール <b>slido</b> にアクセスして下さい</div>
<div class="ind">URLを配布したり、質問やアンケートをとったりします</div>
</div>

<div class="box-info" style="font-size:20px;">※<b>slido／ワーク教材への入力情報</b>のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</div>

<div class="cardrow pip-safe" style="margin-top:14px;">
<div class="pcard"><div class="pc-h">スマホから</div>
<div style="font-size:21px; line-height:1.5;">方法1　Google検索「<b>slido</b>」→ コード入力 <b>ALC-AI2-01</b></div>
</div>
<div class="pcard"><div class="pc-h">PCから</div>
<div style="font-size:21px; line-height:1.5;">方法2　直接リンク<br><span style="color:var(--tag-blue); word-break:break-all;">https://app.sli.do/event/iJQ71dhpuqstH3wbGSYpRD</span></div>
</div>
</div>

<!--
- 始める前に、まず千葉大のGoogle Workspaceにログイン。学校のGmailが開けばOK。
- それから slido にアクセス。URL配布や質問・アンケートに使います。
- slido等への入力情報は、個人情報・機微情報を除いて業務改善・調査研究等に使います。出したくない情報は入れないでください。
-->

---

<div class="page-title">講師紹介</div>

# <span style="color:var(--accent-dark)">田川　翔</span><span style="font-size:24px; font-weight:600; margin-left:14px;">（たがわ　しょう）</span>

<div class="subhead"><span class="tag tag-soft">オープンバッジ</span><span><b>所属：</b>千葉大学 高等教育センター／アカデミックリンクセンター</span></div>

<div class="box-accent" style="font-size:25px; margin:6px 0 14px;"><b>大学教育を企画し、学生と教員を支援する仕事</b></div>

<div class="cardrow">
<div class="pcard"><div class="pc-h">① 元々は理学の人</div>
<img src="./src/fig02a-science.png" alt="地球の起源を探る研究" style="width:100%; border-radius:8px;">
<div style="font-size:18px; color:#666; margin-top:4px;">Tagawa et al. (2021) <i>Nat. Commun.</i></div>
</div>
<div class="pcard"><div class="pc-h">② 色々な仕事経験</div>
<img src="./src/fig02b-work.png" alt="航空機" style="width:100%; border-radius:8px;">
<ul style="margin-top:6px;">
<li>大学のICT支援 (コロナ禍)</li>
<li>大規模オンライン授業の作成</li>
<li>民間企業での経験</li>
<li>AI×大学</li>
</ul>
</div>
<div class="pcard pip-safe"><div class="pc-h">③ 大学を学びやすく!</div>
<img src="./src/fig02c-teach.png" alt="大学で教えるを学ぼう" style="width:100%; border-radius:8px;">
<ul style="margin-top:6px;">
<li>大学での教え方</li>
<li>生成AIの教育利活用</li>
<li>現在、<i>Teaching with AI</i> を翻訳・出版準備中</li>
</ul>
</div>
</div>

<!--
- 講師の田川です。所属は千葉大の高等教育センター／アカデミックリンクセンター。大学教育を企画し、学生と教員を支援する仕事です。
- 元々は理学（地球の起源）の研究者。色々な仕事を経て、いまはAI×大学。Teaching with AI を翻訳・出版準備中です。
-->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; font-weight:700; color:var(--accent-dark);">2026年度 第1回：<b>プロンプティング</b>と<b>生成AIの仕組み</b>の基礎</div>
<div style="font-size:26px; color:var(--muted); margin:8px 0 18px;">15-min or 30-min × 3 sessions</div>
<div style="font-size:26px;">国際未来教育基幹 田川 翔</div>
</div>

<div class="box-warn" style="position:absolute; top:120px; right:80px; width:230px; text-align:center; border-radius:24px;"><b>学部1年生にも<br>おすすめ</b></div>

<!--
- タイトルコール。「学びを変える！研究を深める！生成AI活用術」。2026年度 第1回はプロンプティングと生成AIの仕組みの基礎です。
- 学部1年生にもおすすめの内容です。
-->

---

<div class="page-title">今回の構成</div>

# 今回の構成

<table style="width:100%; border-collapse:separate; border-spacing:0 12px; font-size:25px;">
<tr>
<td style="width:200px; vertical-align:middle; font-weight:700; color:var(--accent-dark);">最初の15分</td>
<td style="width:140px;"><div class="fbox red" style="font-size:28px; padding:8px 0; text-align:center;">講義</div></td>
<td style="padding-left:20px;">
- AI/生成AIとは何かを理解する<br>
- プロンプティングのコツを知る<br>
- 千葉大学のGeminiの機能と利点を知る
</td>
</tr>
<tr>
<td style="vertical-align:middle; font-weight:700; color:var(--accent-dark);">真ん中<b>30</b>分 (前半だけも可)</td>
<td><div class="fbox red" style="font-size:28px; padding:8px 0; text-align:center;">体験</div></td>
<td style="padding-left:20px;">
- Geminiの機能を最大限使いこなしてみる<br>
- 気づきを共有してみる
</td>
</tr>
<tr>
<td style="vertical-align:middle; font-weight:700; color:var(--accent-dark);">最後の15分</td>
<td><div class="fbox red" style="font-size:28px; padding:8px 0; text-align:center;">議論・座談会</div></td>
<td style="padding-left:20px;">
- 今日学んで面白かったことは何でしたか。<br>
- AIの学び方って、どうすれよいと思いますか。<br>
- 今後、どんな点を特に学んでみたいですか。
</td>
</tr>
</table>

<!--
- 今回は3部構成。最初の15分は講義、真ん中30分は体験（前半だけでも可）、最後の15分は議論・座談会です。
-->

---

<!-- _class: divider -->

<div class="chapter-num">SESSION 1</div>

# プロンプティングのコツと生成AIの基礎

## 2026年度 第1回：プロンプティングと生成AIの仕組みの基礎 ／ 15-min sessions

<!--
- ここからSession 1。プロンプティングのコツと生成AIの基礎を扱います。
-->

---

<div class="page-title">Session 1の目的・到達点</div>

# Session 1の目的・到達点

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px; align-items:center; margin-top:24px;">
<div style="font-size:32px; font-weight:800;">目的</div>
<div class="box-accent" style="font-size:30px; padding:20px 28px;"><b>Session 1：</b><br><span style="margin-left:1em;">プロンプティングのコツと生成AIの基礎を知る！</span></div>
</div>

<div style="display:grid; grid-template-columns:140px 1fr; gap:18px; align-items:center; margin-top:24px;">
<div style="font-size:32px; font-weight:800;">目標</div>
<div class="goal-box pip-safe" style="margin:0; font-size:27px;">
<div>・ AI/生成AIとは何かを理解する</div>
<div>・ プロンプティングのコツを知る</div>
<div>・ 千葉大学のGeminiの機能と利点を知る</div>
</div>
</div>

<!--
- Session 1の目的は「プロンプティングのコツと生成AIの基礎を知る」こと。
- 目標は3つ。AI/生成AIとは何かを理解、プロンプティングのコツを知る、千葉大Geminiの機能と利点を知る、です。
-->

---

<div class="page-title">生成AIの学び方</div>

# 生成AIの学び方

<div class="box-info" style="font-size:25px;">
<div style="margin:4px 0;"><b>生成AIの利活用に、現時点で正解はあるか？</b></div>
<div style="margin:4px 0;"><b>生成AIは、学習・研究で不可欠な相棒か？</b></div>
<div style="margin:4px 0;"><b>生成AI時代は学び方を必ず変えないといけないか？</b></div>
</div>

<div class="lead-note" style="margin-top:14px;"><b>… しかし、生成AI技術は進歩し、<span style="color:var(--accent);">仕事</span>や<span style="color:var(--accent);">研究</span>にも影響を与えつつある</b></div>

<div class="stepbox" style="margin-top:10px;">
<div class="st">受講者の皆様が、生成AIは「相棒になるか」を<b>自ら考え</b>、<b>必要なときに、使えるようになる</b>ことが重要</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px;"><b>生成AIとの付き合い方</b>を決めるのは<b>あなた自身</b>。<b>今期の15minsでは、そのための材料をお渡しします</b></div>

<!--
- 生成AIの利活用に、いま正解はあるか？不可欠な相棒か？学び方を必ず変えるべきか？――問いかけです。
- ただ生成AI技術は進歩し、仕事や研究に影響を与えつつある。だからこそ、相棒になるかを自ら考え、必要なときに使えるようになることが重要。
- 付き合い方を決めるのはあなた自身。今期はそのための材料をお渡しします。
-->

---

<div class="page-title">生成AIの学び方</div>

<style scoped>section{padding-top:calc(var(--header-h) + 10px); padding-bottom:36px;} h1{margin-bottom:6px;}</style>

# 生成AIの学び方

<div class="box-accent" style="font-size:24px; margin-bottom:8px; padding:8px 24px;"><b>生成AIを活用するコツってなんだろう？どうすれば学べるんだろう？</b></div>

<div class="goal-box" style="margin:6px 0; font-size:22px; padding:10px 24px;">
<div>✓ <b>生成AIは単なる手段</b></div>
<div>✓ 最終的には、<b>自分がより学び、より良い人生を生きること</b>。その文脈の中で、<b>生成AIを活かす方法と理由</b>を考えたい</div>
</div>

<div class="cardrow" style="margin-top:8px;">
<div class="pcard" style="flex:1.3; padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">AIリテラシー</div>
<div style="font-size:21px; line-height:1.4;">個人がAI技術を<b>批判的に</b>評価し、AIと効果的に<b>コミュニケーションおよび協働</b>し、<b>オンライン、家庭、職場でAIをツールとして利活用でき</b>るようにするコンピテンシー(「できる」知識・スキル・態度)の集合体</div>
<div class="cite">Long &amp; Magerko (2020) <i>CHI</i>　／　30個以上が提案 (e.g. Laupichler et al. 2022 <i>CAEAI</i>)</div>
</div>
<div class="pcard pip-safe" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">AI教育方法論</div>
<div style="font-size:21px; line-height:1.4;"><b>足場かけ体験学習</b><br>Plan-Iterate-Evaluate loop<br><br><b>コミュニティ中心方略</b><br>e.g. AI cafe</div>
<div class="cite">Anders &amp; Dux Speltz (2025) <i>CAEAI</i>；Hutler et al. (2025) <i>AI and Society</i></div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:22px; padding:8px 24px;"><b>みんなで試し、話すことで、AIリテラシを伸ばす場にしましょう！</b></div>

<!--
- 生成AIを活用するコツって何だろう、どう学べばいい？まず生成AIは単なる手段。最終的には自分がより学び、より良い人生を生きること。その文脈で活かす方法と理由を考えたい。
- AIリテラシーは、AIを批判的に評価し、効果的に協働し、ツールとして利活用できるコンピテンシーの集合体。30個以上が提案されています。
- 教育方法論としては足場かけ体験学習やコミュニティ中心方略。みんなで試し、話すことでAIリテラシを伸ばす場にしましょう。
-->

---

<div class="page-title">AIってなに？</div>

# AIってなに？

<div class="box-accent" style="font-size:25px; margin-bottom:10px;"><b>AI：</b> 人が知的だと感じる処理を実現するシステム</div>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 360px;">
<svg viewBox="0 0 360 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
<rect x="2" y="2" width="356" height="326" rx="14" fill="#EAF2FB" stroke="#1A6BB0" stroke-width="2"/>
<text x="14" y="28" font-size="18" font-weight="700" fill="#15436e">数理・統計・DS</text>
<rect x="26" y="40" width="308" height="270" rx="12" fill="#D9E8F7" stroke="#1A6BB0" stroke-width="1.5"/>
<text x="40" y="64" font-size="18" font-weight="800" fill="#15436e">人工知能 (AI)</text>
<rect x="50" y="78" width="260" height="218" rx="12" fill="#CFE6D6" stroke="#2E9E5B" stroke-width="1.5"/>
<text x="64" y="102" font-size="17" font-weight="800" fill="#1f6b3a">機械学習</text>
<rect x="74" y="116" width="212" height="166" rx="10" fill="#FBE4EA" stroke="var(--accent)" stroke-width="1.5"/>
<text x="88" y="140" font-size="17" font-weight="800" fill="var(--accent-dark)">深層学習</text>
<rect x="100" y="156" width="160" height="112" rx="10" fill="var(--accent)" />
<text x="180" y="218" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">生成AI</text>
</svg>
</div>
<div style="flex:1;">
<div class="lead-note">分類したり、予想したり、処理したり…</div>
<div class="box-info" style="font-size:22px;">生成AIを使っていなくても、<b>YouTubeのおすすめ</b>や、<b>運転支援・お掃除ロボット</b>や、<b>今日のスーパーの仕入れ管理</b>など、様々なところで利用されている</div>
<div class="flowrow" style="margin-top:12px;">
<div class="fbox gray" style="font-size:24px; padding:6px 22px;">機械学習</div>
<div class="farrow">→</div>
<div class="fbox gray" style="font-size:24px; padding:6px 22px;">深層学習</div>
</div>
<div style="font-size:21px; color:#555; margin-top:6px;">信頼性・再現性・速度/費用・適合性…</div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px; font-size:23px;">日常はすでに、<b>AIアルゴリズムに囲まれて、便利になっている</b></div>

<!--
- AIとは、人が知的だと感じる処理を実現するシステム。数理・統計・DSの中にAI、その中に機械学習、深層学習、生成AIが入れ子になっています。
- 生成AIを使っていなくても、YouTubeのおすすめ、運転支援やお掃除ロボット、スーパーの仕入れ管理など、すでにAIに囲まれて便利になっています。
-->

---

<div class="page-title">生成AIの仕組み</div>

# 生成AIの仕組み

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:1;">
<div class="box-accent" style="font-size:24px;"><b>ネクストワードプレディクション</b><br><b>次の言葉(トークン)の確率を予想する問題</b></div>

<div class="flowrow" style="margin:12px 0; gap:10px;">
<div style="border:2px solid #888; border-radius:6px; padding:6px 12px; font-size:20px;">日本の首都__</div>
<div class="farrow" style="font-size:24px;">→</div>
<div style="border:2px solid #888; border-radius:6px; padding:6px 12px; font-size:20px;">日本の首都は__</div>
<div class="farrow" style="font-size:24px;">→</div>
<div style="border:2px solid var(--accent); border-radius:6px; padding:6px 12px; font-size:20px; color:var(--accent-dark); font-weight:700;">日本の首都は東京__</div>
</div>

<div style="display:flex; align-items:center; gap:20px; margin-top:14px;">
<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="width:320px;">
<ellipse cx="160" cy="100" rx="120" ry="74" fill="none" stroke="#5a5f66" stroke-width="2.5"/>
<polygon points="280,96 270,80 270,112" fill="#5a5f66"/>
<rect x="92" y="68" width="136" height="64" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
<text x="160" y="94" font-size="18" font-weight="800" fill="var(--accent-dark)" text-anchor="middle">パラメーター</text>
<text x="160" y="118" font-size="18" font-weight="800" fill="var(--accent-dark)" text-anchor="middle">の函</text>
<text x="160" y="160" font-size="16" fill="#555" text-anchor="middle">数字の羅列</text>
<text x="20" y="40" font-size="17" font-weight="800" fill="#1a1a1a">学習</text>
<text x="14" y="108" font-size="17" font-weight="800" fill="#1a1a1a">入力</text>
<text x="252" y="64" font-size="17" font-weight="800" fill="#1a1a1a">出力</text>
<text x="246" y="150" font-size="17" font-weight="800" fill="#1a1a1a">評価</text>
<text x="150" y="34" font-size="15" fill="#555">更新</text>
</svg>
<div class="box-info" style="font-size:20px;">GPT 4：アメリカ議会図書館の<b>全蔵書の約22倍</b>相当?<br><span style="font-size:18px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソースを元に学習している</span></div>
</div>
</div>
<div style="flex:0 0 360px;">
<img src="./src/fig10-llmvis.png" alt="LLMの内部構造（Transformer）" style="width:100%; border:1px solid #ddd; border-radius:8px;">
<div class="cite" style="text-align:right;">LLM Visualization ©Bycroft 2023</div>
</div>
</div>

<div class="box-warn pip-safe" style="margin-top:8px; font-size:23px;"><b>大規模言語モデルの中身 → ◯ 巨大な数字の塊　✗知識集・ルール集</b></div>

<!--
- 生成AIの仕組みの本質はネクストワードプレディクション。次の言葉（トークン）の確率を予想する問題です。「日本の首都」→「は」→「東京」と一語ずつ予測。
- モデルはパラメーターの函＝数字の羅列。GPT-4は議会図書館の全蔵書の約22倍相当を学習。
- 中身は巨大な数字の塊であって、知識集・ルール集ではありません。
-->

---

<div class="page-title">生成AIの仕組み</div>

# 利用 (推論・生成)

<img src="./src/fig11-inference.png" alt="推論・生成の流れ：吾輩→吾輩は→吾輩は猫 を1トークンずつ生成。上位5トークンの確率分布（モデル cyberagent/open-calm-7b）" style="width:100%; max-height:600px; object-fit:contain;">

<!--
- 利用（推論・生成）のイメージ。計算1回目で「吾輩」から「吾輩は」、2回目で「吾輩は猫」、3回目で「吾輩は猫で」…と1トークンずつ生成します。
- 各ステップで前処理→AI処理（デコーダ）→出力。右は上位5トークンの確率分布（モデルは cyberagent/open-calm-7b）。文脈を与えると確率が変わります。
-->

---

<div class="page-title">生成AIの仕組み</div>

# 生成AIの仕組み <span style="font-size:26px; color:var(--muted);">まとめ</span>

<div class="stepbox"><div class="st"><b>① 大規模言語モデルがしていることとは</b><br><span style="margin-left:1.4em; color:var(--accent-dark); font-weight:800;">次のもっともらしい単語(Token)を予測する作業</span></div></div>

<div class="stepbox"><div class="st"><b>② 大規模言語モデルの中身とは</b><br><span style="margin-left:1.4em; color:var(--accent-dark); font-weight:800;">ルール集ではなく、数字(統計的な重み)の塊</span></div></div>

<div class="stepbox"><div class="st"><b>③ なぜ精度が上がったり、複雑なことも出来るのか</b><br><span style="margin-left:1.4em; color:var(--accent-dark); font-weight:800;">分解や繰返しで推論を行ったり、ツールを接続できるから</span></div></div>

<div class="box-accent pip-safe" style="margin-top:14px; font-size:25px;">まずは、この<b>3つ</b>だけ、覚えましょう<br>→詳細・体験・倫理は第4回へ</div>

<!--
- 仕組みのまとめ。①LLMがしているのは次のもっともらしい単語(Token)の予測。②中身はルール集ではなく数字（統計的な重み）の塊。③精度が上がり複雑なことも出来るのは、分解や繰返しで推論したりツールを接続できるから。
- まずはこの3つだけ覚えましょう。詳細・体験・倫理は第4回へ。
-->

---

<div class="page-title">プロンプトとは？</div>

# プロンプトとは？

<div class="box-accent" style="margin-top:6px;">
<b>プロンプト：</b> 生成AIに、<b>実行すべきタスクの生成を促す</b>、自然言語による文章のこと
</div>

<div style="display:flex; gap:16px; margin-top:12px;">
<div class="box-info" style="flex:1;"><b>ユーザープロンプト：</b><br>一般的に想像されるプロンプト</div>
<div class="box-info" style="flex:1;"><b>システムプロンプト：</b><br>AI/Agentの振る舞いを決めるプロンプト</div>
</div>

<div style="margin-top:14px; font-size:23px; line-height:1.55;">
<b>プロンプトエンジニアリング：</b>生成AIから望ましい出力を確実に生み出すプロンプトを発見する過程のこと<br>
<b>コンテキスト：</b>プロンプトの意図を正確に理解し、適切な返答を返すために利用する付加情報<br>
<b>コンテキストエンジニアリング：</b>生成AIに読み込ませる中身を選択し、正確で関連性の高い出力を生成できるよう、タスクに必要な背景情報や前提条件（コンテキスト）を整理・最適化すること
</div>

<div class="box-accent pip-safe" style="margin-top:14px;"><b>良いプロンプト・コンテキスト</b>を入れれば、AIがより精度の高い情報を戻すようになる<br><span style="font-size:20px;">※一昔前のCoT指示・誘導などは不要。</span></div>

<div class="cite pip-safe">Phoenix &amp; Tayler／田村・大野監訳『生成AIのプロンプトエンジニアリング』O'REILLY 2025</div>

<!-- プロンプトは、AIにタスク生成を促す自然言語の文章。ユーザープロンプトとシステムプロンプトがある。良いプロンプト・コンテキストを入れれば精度が上がる。一昔前のCoT指示・誘導はもう不要。 -->

---

<div class="page-title">プロンプトの構成例</div>

<style scoped>section{padding-top:calc(var(--header-h) + 10px); padding-bottom:36px;} h1{margin-bottom:6px;}</style>

# プロンプトの構成例

<div class="box-accent" style="margin-top:2px; padding:6px 24px; font-size:22px;"><b>テンプレと注意点を覚えたあとは、試行錯誤が一番大切</b></div>

<div class="box-info" style="margin-top:6px; padding:6px 24px; font-size:21px;"><b>簡潔に</b>、<b>十分に</b>、<b>具体的に</b>、4要素（ペルソナ・タスク・背景情報・形式）を記入<br>▶ <b>Google プロンプト初級ガイド を修正</b>（参照日：2026/04/23）</div>

<div style="display:flex; gap:16px; margin-top:6px; align-items:flex-start;">

<div style="flex:1.15;">
<div class="exrow" style="padding:4px 16px; margin:4px 0;"><div class="exn"></div><div>ディレクションを示す</div></div>
<div class="exrow" style="padding:4px 16px; margin:4px 0;"><div class="exn"></div><div>出力形式を指定する</div></div>
<div class="exrow" style="padding:4px 16px; margin:4px 0;"><div class="exn"></div><div>例を示す</div></div>
<div class="exrow" style="padding:4px 16px; margin:4px 0;"><div class="exn"></div><div>品質を評価する</div></div>
<div class="exrow" style="padding:4px 16px; margin:4px 0;"><div class="exn"></div><div>タスクを分割する</div></div>
<div class="box-info" style="margin-top:6px; padding:7px 16px; font-size:19px; line-height:1.35;"><b>例）</b>あなたは大学院生のグラントを読んでアドバイスするチューターです。学振のDCの書類を書く上でのアドバイスをインターネット上の採択者の経験談を参照し説明してください。2文程度で挨拶のあと、箇条書きで出力してください。</div>
</div>

<div style="flex:1.6;">

<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">システムプロンプト</div>
<ul style="font-size:21px;">
<li><b>自然な表現を使い、話すような完全な文章で</b></li>
<li><b>具体的かつ反復的に（多くの背景情報）</b></li>
<li><b>簡潔に記述して、複雑にならない（矛盾注意）</b></li>
</ul>
</div>

<div class="pcard" style="margin-top:8px; padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">ユーザープロンプト</div>
<ul style="font-size:21px;">
<li><b>会話しながらプロンプトを改善する</b></li>
<li><b>Geminiとプロンプトを作る</b></li>
<li><b>自分でつくったドキュメントをソースにする</b></li>
</ul>
</div>
</div>

</div>

<div class="cite pip-safe" style="margin-top:6px;">Phoenix &amp; Tayler／田村・大野監訳『生成AIのプロンプトエンジニアリング』O'REILLY 2025</div>

<!-- 4要素（ペルソナ・タスク・背景情報・形式）を簡潔に十分に具体的に。Googleの初級ガイドを修正したもの。システム／ユーザープロンプトそれぞれにコツがある。テンプレを覚えたら試行錯誤が一番大切。 -->

---

<div class="page-title">プロンプトのコツ</div>

# プロンプトのコツ

<div class="stepbox" style="margin:4px 0; padding:7px 28px;"><div class="st" style="margin:2px 0;"><b>① 例：Few-shotを利用する</b></div>
<div style="font-size:20px; line-height:1.4;">プロンプト内に「入力例」と「出力例」のデモを提供しより高性能な結果を得る技法<br>※ コンテキスト内学習（与えた文章から、生成AIがタスクの結果を生成できる能力）に由来</div></div>

<div style="display:flex; gap:14px; margin-top:5px; align-items:stretch;">
<div class="pcard" style="padding:7px 16px;"><div class="pc-h" style="margin-bottom:5px;">Zero-shot</div>
<p style="font-size:20px; margin:3px 0;">Google検索的（単語）<br>これは素晴らしい! 感情?</p>
<p style="font-size:20px; margin:3px 0;">「これは素晴らしい!」と書いた書き手の感情を教えて下さい</p></div>
<div class="pcard" style="padding:7px 16px;"><div class="pc-h" style="margin-bottom:5px;">Few-shot</div>
<p style="font-size:20px; margin:3px 0;">あの映画は最高だった! ＞ポジティブ<br>これは酷い! ＞ネガティブ<br>「これは素晴らしい!」＞?</p></div>
</div>

<div style="display:flex; gap:14px; margin-top:6px; align-items:flex-start;">
<div style="flex:1;">
<div class="stepbox" style="margin:0; padding:8px 28px;"><div class="st" style="margin:2px 0;"><b>② 出力形式：回答をスキーマに沿って出力させる</b></div>
<div style="font-size:21px; line-height:1.4;">回答してほしいことをすべて構造化し、回答形式として指定する。<b>※Few-shotを組み合わせ、回答を例示する</b></div></div>

<div class="stepbox pip-safe" style="margin-top:6px; padding:8px 28px;"><div class="st" style="margin:2px 0;"><b>③ コンテキストを十分に与える</b></div></div>
</div>
<div class="box-info" style="flex:0 0 280px; padding:8px 20px; font-size:21px;"><b>例)</b><br>授業のタイトル：<br>　目的：<br>　到達目標：<br>　宿題の案：</div>
</div>

<div class="box-accent pip-safe" style="margin-top:6px; padding:8px 24px;"><b>slido</b>　さらに学びたい方へ：Google プロンプト設計戦略 など</div>

<!-- コツ3つ。①Few-shotで入力例・出力例を見せる（コンテキスト内学習に由来）。②回答をスキーマに沿って構造化して出させる。③コンテキストを十分に与える。さらに学びたい人はGoogleのプロンプト設計戦略を。 -->

---

<div class="page-title">大学のGeminiのメリット</div>

# 大学のGeminiのメリット

<div style="display:flex; gap:18px; align-items:flex-start;">

<div style="flex:1.1;">

<div class="box-accent"><b>① 入力が学習されない！</b><br>（オプトアウト済）<br><span style="font-size:20px;">※大学版のCopilotも同様</span></div>

<div class="box-accent" style="margin-top:10px;"><b>② 学習向けのチューニング</b><br>（商用版よりは依存しにくい）<br><span style="font-size:20px;">※名前を呼んだり馴れ馴れしくない</span></div>

<div class="box-accent" style="margin-top:10px;"><b>③ Google WSと連携できる</b><br>（@マークで読み込み簡単）</div>

</div>

<div style="flex:1.2;">

<img src="./src/fig16a-gemini-privacy.png" alt="Geminiのデータ取り扱い説明" style="width:100%; border:1px solid #ddd; border-radius:6px;">

<div class="box-info" style="margin-top:12px;">以下に対処する意図でチューニングされている<br>・AIへの過依存（答えを全部もらう）<br>・認知的オフロード（自分で考えなくなる）<br>・受動的学習（情報を受け取るだけ）</div>

</div>

</div>

<div class="box-accent pip-safe" style="margin-top:12px;">大学版は、個人購入版よりも安心が大きいのと連携がウリ</div>

<!-- 大学版Geminiの3つのメリット。①入力が学習されない（オプトアウト済、Copilotも同様）。②学習向けチューニング（過依存・認知的オフロード・受動的学習に対処）。③Google Workspaceと連携できる（@で簡単読み込み）。 -->

---

<div class="page-title">Geminiで出来る色々</div>

# Geminiで出来る色々

<div style="display:flex; gap:16px; align-items:flex-start;">

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">スライドの作成・修正</div>
<img src="./src/fig17a-slides.png" alt="スライド作成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:8px; font-size:22px; text-align:left;">プログラムの対話的作成</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">絵/漫画の出力・図の修正</div>
<img src="./src/fig17b-aurora.png" alt="風景写真生成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:4px; font-size:11px; color:#777; text-align:left; line-height:1.3;">圧巻の風景写真を作成したいです。北極の空を静かに飛ぶ旅客機を横から眺め、後ろにはオーロラが見えるような、景色を写実感のある写真として出して下さい。高度は高く、地上は小さく、暗闇の中を光るのは飛行機の窓とオーロラだ、という雄大な構図にして下さい。飛行機を横からみた構図にして下さい。写真は正方形にして下さい。</div>
<div style="margin-top:4px; font-size:22px; text-align:left;">授業の解説や問題の作成<br>暗記の支援</div>
</div>

<div style="flex:1; text-align:center;">
<div style="font-weight:800; color:var(--accent-dark);">曲/動画の作成</div>
<img src="./src/fig17c-manga.png" alt="漫画生成例" style="height:150px; margin-top:6px; border:1px solid #ddd;">
<div style="margin-top:4px; font-size:11px; color:#777; text-align:left; line-height:1.3;">高校の化学の実験を生徒がモチベーションがあがるような、楽しそうな絵を生成して下さい。化学実験室の机にフラスコがあって、反応が進んで生徒2-3人驚いている感じで。但し、現実的な実験の様子にして下さい。漫画な感じで、効果音も文字で書いてほしい。吹き出しは使ってはだめです。白黒の線画にして下さい。図は正方形で、明るい感じ。</div>
<div style="margin-top:4px; font-size:22px; text-align:left;">検索(DeepResearch)<br>スプレッドシートの分析</div>
</div>

</div>

<div style="display:flex; gap:30px; margin-top:10px; font-size:22px;">
<div>絵・音声の文字起こし</div>
<div>カレンダー/ToDo書込</div>
<div>業務支援ワークフロー</div>
</div>

<div class="box-accent pip-safe" style="margin-top:10px;">大学全体で共有 → 授業や職務で活用しやすい / 研修も実施</div>

<!-- Geminiで出来ること多数。スライド作成・修正、絵/漫画の出力・図の修正、曲/動画の作成、検索(DeepResearch)、スプレッドシート分析、絵・音声の文字起こし、カレンダー/ToDo書込、業務支援ワークフローなど。大学全体で共有して活用しやすい。 -->

---

<div class="page-title">Session 1の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 110px; padding-top:14px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">目的</div>
<div style="font-size:28px; font-weight:800; color:var(--accent-dark); margin-top:140px; line-height:1.3;">目標<br>＋<br>まとめ</div>
</div>

<div style="flex:1;">

<div class="box-accent"><b>Session 1：</b><br>プロンプティングのコツと生成AIの基礎を知る！</div>

<div style="margin-top:14px; font-size:24px; line-height:1.55;">
<b>・AI/生成AIとは何かを理解する</b>
<div style="margin-left:1.3em; font-size:22px;">次のトークンを予測する仕組み<br>繰り返しの推論やツール/情報を接続して性能向上</div>

<b>・プロンプティングのコツを知る</b>
<div style="margin-left:1.3em; font-size:22px;">7R法/Few shot/スキーマ利用<br>困ったら生成AIに書かせる</div>

<b>・千葉大学のGeminiの機能と利点を知る</b>
<div style="margin-left:1.3em; font-size:22px;">オプトアウト、学習にむけた最適化、WSとの連携</div>
</div>

</div>

</div>

<!-- Session 1の振り返り。目的はプロンプティングのコツと生成AIの基礎を知ること。目標とまとめ：①AI/生成AIの仕組み（次トークン予測・推論やツール接続）、②プロンプティングのコツ（7R法・Few shot・スキーマ・困ったらAIに書かせる）、③千葉大Geminiの利点（オプトアウト・最適化・WS連携）。 -->

---

<!-- _class: divider -->

<div class="title-hero" style="text-align:center;">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center; color:var(--accent-dark); font-size:26px; margin-top:8px;">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="text-align:center; color:var(--accent-dark); font-size:23px; margin-top:4px;">30-min sessions</div>

<div class="box-accent" style="max-width:760px; margin:18px auto 0;"><b>Session 2：</b><br>　　Geminiの機能を最大限使いこなしてみる</div>

<div style="text-align:center; font-size:22px; margin-top:22px;">国際未来教育基幹 田川 翔</div>

<!-- セッション2へ。30分構成。Session 2のテーマは「Geminiの機能を最大限使いこなしてみる」。 -->

---

<div class="page-title">本日のワークの中身</div>

# 本日のワークの中身

<div style="display:flex; gap:14px; align-items:flex-start;">

<div style="flex:0 0 150px;">
<div class="stepbox" style="background:var(--accent-soft);"><b>Phase 1</b><br>仲間を作る！</div>
<div class="stepbox" style="margin-top:60px; background:var(--accent-soft);"><b>Phase 2</b><br>手順書で実践</div>
<div class="stepbox" style="margin-top:60px; background:var(--accent-soft);"><b>Phase 3</b><br>評価・反省</div>
</div>

<div style="flex:1;">

<div style="font-size:22px; line-height:1.5;">まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に<b>自己紹介</b>を（チーム内で別々を選んでもOK）</div>

<div class="box-info" style="margin-top:6px;"><b>会場：</b>まずは、ペアか3人で集まってみましょう。3分時間を取るので、簡単に自己紹介を（チーム内で別々を選んでもOK）<br><b>zoom：</b>原則1人でAIと実施です。但し、Breakoutを作ります。関心があれば、2-3人で散らばってみて下さい。</div>

<div class="box-accent" style="margin-top:8px;"><b>どっちか：</b>　初級編：Geminiを使い倒す（まずは、Geminiに詳しくなりたい人向け）　／　中級編：学びでの使用を考える（ちょっと踏み込んでみたい人むけ）</div>

<div class="box-info" style="margin-top:8px;">各自、<b>実践してみる</b>。<b>一人も協力もOKです。</b>困ったら仲間・講師へ質問を。進行すると共に、Spreadsheetのワークを順次、埋めて下さい。全員でどこが使えるか書き出してみましょう！</div>

<div class="box-info" style="margin-top:8px;">気づいたことを、グループまたは個人でまとめて、<b>slido</b>に記入する。<br>※グループになったところは、まずはメンバーで話してみましょう。</div>

</div>

</div>

<div class="cite pip-safe">※ slido/ワーク教材への入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報は、入力しないようご注意ください。</div>

<!-- 本日のワークは3フェーズ。Phase1：仲間を作る（自己紹介3分。会場はペア・3人、zoomは原則1人だがBreakoutあり）。Phase2：手順書で実践（初級＝Geminiを使い倒す／中級＝学びでの使用を考える、どちらか）。Phase3：評価・反省（Spreadsheetを埋め、気づきをslidoに記入）。 -->

---

<div class="page-title">ワーク Geminiの機能を使う</div>

# ワーク　Geminiの機能を使う　<span class="tag tag-soft" style="font-size:22px;">初級編</span>

<div class="box-accent" style="margin-top:4px; padding:8px 24px;"><b>手順書に従って、Geminiの機能を使ってみよう（標準 20分）</b></div>

<div style="display:flex; gap:18px; margin-top:8px; align-items:flex-start;">

<div style="flex:1.5; font-size:23px; line-height:1.55;">
<b>① Google カレンダーに予定を立てる。読み込む。</b><br>
<b>② 概念を暗記するための4択問題を5個作ってみる。</b><br>
<b>③ AIリテラシーの歌(30秒)を作ってみる。</b><br>
<b>④ Webを検索してみる。</b><br>
<b>⑤ 文章を翻訳させる。</b><br>
<b>⑥ 文章を一緒に編集してみる。</b><br>
<b>⑦ 音声を書き起こさせる。</b><br>
<b>⑧ 文字を書き起こさせる。</b>
</div>

<div style="flex:0 0 230px; font-size:22px; line-height:1.55; color:var(--accent-dark);">
アプリ連携<br>
ガイド付き学習<br>
Lyria 3<br>
Ground機能<br>
Canvas機能<br>
マルチモーダル機能
</div>

</div>

<div style="margin-top:6px; font-size:21px;">手順書内にプロンプト・資料があります。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info pip-safe" style="margin-top:6px; padding:8px 22px; font-size:20px; line-height:1.4;">終わったらここに<b>評価・感想</b>を記入してください。使っている場合は、〜と書いてとばしましょう。1項目終わるごとに、◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。精度が悪い時には、モードをProに上げてみましょう。動かない場合は、教えて下さい。</div>

<!-- 初級編ワーク（標準20分）。手順書に従い①カレンダー②4択問題③AIリテラシーの歌④Web検索⑤翻訳⑥文章編集⑦音声書き起こし⑧文字書き起こし。アプリ連携・ガイド付き学習・Lyria 3・Ground・Canvas・マルチモーダルなどの機能。どこからでもOK。終わったら評価・感想を記入。 -->

---

<div class="page-title">ワーク Geminiの機能を使う</div>

# ワーク　Geminiの機能を使う　<span class="tag tag-soft" style="font-size:22px;">中級編</span>

<div class="box-accent" style="margin-top:4px; padding:8px 24px;"><b>学びでの使用をためしてみよう（標準 20分）</b></div>

<div style="display:flex; gap:18px; margin-top:8px; align-items:flex-start;">

<div style="flex:1.6;">

<div class="stepbox" style="margin:0; padding:9px 28px;"><div class="st" style="margin:2px 0;"><b>① 問題の解説をさせてみる</b></div></div>

<div class="stepbox" style="margin-top:8px; padding:9px 28px;"><div class="st" style="margin:2px 0;"><b>② Geminiアプリで外国語を練習してみる</b></div>
<div style="font-size:21px;">※ロールプレイなどもぜひ。 ※スマホでのインストール必須</div></div>

<div class="stepbox" style="margin-top:8px; padding:9px 28px;"><div class="st" style="margin:2px 0;"><b>③ 自分の分野について学べる学習ゲームをつくってみる</b></div>
<div style="font-size:21px;">※アイデア出しもぜひ ※Proモードでの実施必須</div></div>

</div>

<div style="flex:0 0 220px; font-size:22px; line-height:1.9; color:var(--accent-dark);">
マルチモーダル機能<br>
Live機能<br>
Canvas機能
</div>

</div>

<div style="margin-top:6px; font-size:21px;">中級編は、ご自身で1テーマです（手順書なし）。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info pip-safe" style="margin-top:6px; padding:8px 22px; font-size:20px; line-height:1.4;">終わったらここに<b>評価・感想・実施したシナリオ</b>を記入してください。使っている場合は、〜と書いてとばしましょう。1項目終わるごとに、◯(使える！)・△(微妙)・✗(間違った)で評価を記入してみましょう。精度が悪い時には、モードをProに上げてみましょう。動かない場合は、教えて下さい。</div>

<!-- 中級編ワーク（標準20分）。学びでの使用を試す。①問題の解説②Geminiアプリで外国語練習（ロールプレイも、スマホ必須）③自分の分野の学習ゲーム作成（Proモード必須）。マルチモーダル・Live・Canvas機能。手順書なしで1テーマ。終わったら評価・感想・シナリオを記入。 -->

---

<div class="page-title">ワークで行うこと</div>

# ワークで行うこと

<div class="box-accent" style="margin-top:6px; font-size:26px;"><b>ワークテーマ：みんなでGeminiを使い倒して、どこが使えるか把握しよう！</b></div>

<div style="font-size:24px; margin-top:12px;"><b>手順書内にプロンプト・資料があります</b>。<b>どこからでも良いので</b>、やってみましょう。</div>

<div class="box-info" style="margin-top:12px;"><b>進め方：</b><br><b>一人も協力もOKです。</b>困ったら仲間・講師へ質問を。<br>終わったら、Spreadsheetのワークを順次、埋めて下さい。<br>全員でどこが使えるか書き出してみましょう！</div>

<div class="box-warn" style="margin-top:12px;"><b>Zoomでいま来た方へ：</b>もしグループで進行されたい場合は<b>ブレークアウト</b>でどこかに参加してみてください。ルーム選択を解放しています。<br><span style="font-size:21px;">※グループは自由参加・自由解散・移動も自由</span></div>

<div class="box-accent pip-safe" style="margin-top:12px;"><b>質問がある場合：会場・オンラインとも → slidoのQ&amp;Aに投稿してください</b></div>

<!-- ワークで行うこと。テーマは「みんなでGeminiを使い倒して、どこが使えるか把握しよう」。手順書のプロンプト・資料を使い、どこからでも。一人でも協力でもOK、困ったら質問を。Spreadsheetを埋める。Zoomで遅れて来た人はブレークアウトへ。質問はslidoのQ&Aへ。 -->

---

<div class="page-title">Session 2の目的・到達目標</div>

# 振り返り

<div style="display:flex; gap:24px; align-items:flex-start; margin-top:6px;">

<div style="flex:0 0 110px; padding-top:14px;">
<div style="font-size:30px; font-weight:800; color:var(--accent-dark);">目的</div>
<div style="font-size:28px; font-weight:800; color:var(--accent-dark); margin-top:130px; line-height:1.3;">目標<br>＋<br>まとめ</div>
</div>

<div style="flex:1;">

<div class="box-accent"><b>Session 2：</b><br>　Geminiの機能を最大限使いこなしてみる</div>

<div style="margin-top:90px;">
<div class="box-info" style="font-size:26px;">
・半構造化データから役立つ情報を引き出せた<br>
・<u>構造化データ</u>の近未来の分析を体験できた
</div>
</div>

</div>

</div>

<!-- Session 2の振り返り。目的はGeminiの機能を最大限使いこなしてみること。目標とまとめ：半構造化データから役立つ情報を引き出せた、構造化データの近未来の分析を体験できた。 -->

---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">学びを変える！研究を深める！</div>
<div class="title-big">生成AI活用術</div>
</div>

<div style="text-align:center;">
<div style="font-size:30px; font-weight:700; color:var(--accent-dark);">2026年度 第1回： プロンプティングと生成AIの仕組みの基礎</div>
<div style="font-size:26px; color:var(--muted); margin:8px 0 14px;">15-min sessions</div>
</div>

<div class="box-accent" style="max-width:900px; margin:0 auto 14px; font-size:28px;"><b>Session 3：</b><br><span style="margin-left:1em;">今日の気づきをみんなで共有してみる。</span></div>

<div style="text-align:center; font-size:26px;">国際未来教育基幹 田川 翔</div>

<!--
- ここからSession 3。最後の15分は、今日の気づきをみんなで共有してみる時間です。
-->

---

<div class="page-title">Session 3の進め方</div>

<style scoped>section{padding-top:calc(var(--header-h) + 10px); padding-bottom:36px;} h1{margin-bottom:6px;}</style>

# Session 3の進め方 <span style="font-size:26px; color:var(--muted);">議論・座談会／最後の15分</span>

<div class="box-accent" style="font-size:24px; margin-bottom:8px; padding:8px 24px;"><b>slido で進めます</b></div>

<div class="box-info" style="padding:8px 24px;">
<div style="margin:3px 0;">- 今日学んで面白かったことは何でしたか。</div>
<div style="margin:3px 0;">- AIの学び方って、どうすれよいと思いますか。</div>
<div style="margin:3px 0;">- 今後、どんな点を特に学んでみたいですか。</div>
</div>

<div class="box-warn" style="margin:8px 0; font-size:22px; padding:8px 24px;"><b>お願い：協力的な場作りが、学びの秘訣です。</b><br><span style="margin-left:1em;">敬意をもって、忌憚なく、建設的に、話し合いましょう</span></div>

<div class="cardrow pip-safe" style="margin-top:6px;">
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">スマホから</div>
<div style="display:flex; gap:12px; align-items:center;">
<img src="./src/fig26a-qr-sp.png" alt="slido スマホ用QRコード" style="width:72px; height:72px; flex:0 0 72px;">
<div style="font-size:20px; line-height:1.5;">方法1　Google検索「<b>slido</b>」→ コード入力 <b>ALC-AI2-01</b></div>
</div>
</div>
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">PCから</div>
<div style="display:flex; gap:12px; align-items:center;">
<img src="./src/fig26b-qr-pc.png" alt="slido PC用QRコード" style="width:72px; height:72px; flex:0 0 72px;">
<div style="font-size:20px; line-height:1.5;">方法2　直接リンク<br><span style="color:var(--tag-blue); word-break:break-all; font-size:18px;">https://app.sli.do/event/iJQ71dhpuqstH3wbGSYpRD</span></div>
</div>
</div>
</div>

<div class="box-info pip-safe" style="font-size:17px; margin-top:8px; padding:7px 22px; line-height:1.4;">※slidoへの入力情報のうち【個人情報や機微情報を除いた】情報をアカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<!--
- Session 3はslidoで進めます。問いは3つ：今日面白かったこと、AIの学び方、今後学んでみたい点。
- 協力的な場作りが学びの秘訣。敬意をもって、忌憚なく、建設的に話し合いましょう。
- slidoへの入力は、個人情報・機微情報を除いて業務改善・調査研究等に使います。出したくない情報は入れないでください。
-->

---

<div class="page-title">終了時アンケート・次回予告</div>

# 終了時アンケート・次回予告

<div class="box-accent" style="font-size:23px; margin-bottom:12px;">
次回以降も「さらにみなさんのニーズにあわせた」企画を実施するため、<b>終了時アンケート</b>へのご協力をお願いいたします。<br>
<span style="color:var(--tag-blue); word-break:break-all;">https://forms.gle/5sXy6f5yZkoJ8XJZ7</span>
</div>

<div class="box-info" style="font-size:18px; margin-bottom:14px;">【お願い】アンケートへの入力情報のうち【個人情報や機微情報を除いた】情報を、アカデミック・リンク・センター／附属図書館において、業務改善・調査研究・外部発表等に用います。個人が特定される情報や、利用されたくない情報については、入力しないようご注意ください。</div>

<div class="subhead"><span class="tag tag-accent">次回予告</span></div>

<div class="cardrow pip-safe">
<div class="pcard" style="flex:1.4;">
<div style="font-size:24px; font-weight:800; color:var(--accent-dark);">学びを変える！研究を深める！ 生成AI活用術</div>
<div style="font-size:23px; margin-top:6px;">2026年度 第2回：<b>生成AIを利用した学び方 (ゲスト講師回)</b></div>
<div style="font-size:20px; color:var(--muted); margin-top:4px;">15-min or 30-min × 3 sessions</div>
</div>
<div class="pcard">
<div class="box-accent" style="font-size:22px; margin:0;"><b>5/25 (月) 16:10 - 17:10</b><br>会場(ここ)・オンライン併用</div>
<div style="font-size:20px; margin-top:8px;">情報・データサイエンス学部 3年の先輩と自分で進めます。学生目線の意見にも注目です！</div>
</div>
</div>

<!--
- 終了時アンケートへのご協力をお願いします。次回以降の企画づくりに使います。
- 次回予告。第2回は「生成AIを利用した学び方」のゲスト講師回。5/25(月)16:10-17:10、会場・オンライン併用。
- 情報・データサイエンス学部3年の先輩と一緒に進めます。学生目線の意見にも注目です。
-->

---

<div class="page-title">参考：深層学習・機械学習</div>

<style scoped>section{padding-top:calc(var(--header-h) + 10px); padding-bottom:36px;} h1{margin-bottom:6px;}</style>

# 参考：深層学習・機械学習 <span style="font-size:24px; color:var(--muted);">機械学習/深層学習で実現すること</span>

<div class="cardrow" style="margin:8px 0;">
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">① 売上・需要予測</div>
<img src="./src/fig28a-chart.png" alt="需要予測の折れ線グラフ" style="width:100%; height:94px; object-fit:cover; border-radius:8px;">
<div style="font-size:20px; line-height:1.35; margin-top:5px;">既存データから将来の数値を予測<br><span style="margin-left:1em;">→ 在庫最適化やリソース配置の変更</span></div>
</div>
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">② 異常・故障検知</div>
<img src="./src/fig28b-chart.png" alt="異常値検知の折れ線グラフ" style="width:100%; height:94px; object-fit:cover; border-radius:8px;">
<div style="font-size:20px; line-height:1.35; margin-top:5px;">リアルタイムで異常パターンを検知<br><span style="margin-left:1em;">→ 重大なトラブルを未然に防止</span></div>
</div>
</div>

<div class="cardrow" style="margin:8px 0;">
<div class="pcard" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">③ データの可視化・分類</div>
<img src="./src/fig28c-chart.png" alt="セグメントのクラスタ可視化" style="width:100%; height:94px; object-fit:cover; border-radius:8px;">
<div style="font-size:20px; line-height:1.35; margin-top:5px;">複雑なデータをグループ化・可視化<br><span style="margin-left:1em;">→ 新たな知見の発見を支援</span></div>
</div>
<div class="pcard pip-safe" style="padding:8px 18px;"><div class="pc-h" style="margin-bottom:6px;">④ 強化学習と自動化</div>
<img src="./src/fig28d-chart.png" alt="強化学習のループ図" style="width:100%; height:94px; object-fit:cover; border-radius:8px;">
<div style="font-size:20px; line-height:1.35; margin-top:5px;">試行錯誤から最適な行動パターンを学習<br><span style="margin-left:1em;">→ 複雑な制御や判断を自動化</span></div>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:8px; padding:8px 24px; font-size:22px;">統計や機械学習は、<b>未来</b>や<b>全体</b>を知ることができない人間が、<b>世界を理解したり、作業を実行するために</b>編み出した技術</div>

<!--
- 参考。機械学習/深層学習で実現することの代表例を4つ。①売上・需要予測、②異常・故障検知、③データの可視化・分類、④強化学習と自動化。
- 統計や機械学習は、未来や全体を知れない人間が、世界を理解し作業を実行するために編み出した技術です。
-->

---

<div class="page-title">参考：複雑な処理</div>

# 参考：複雑な処理 <span style="font-size:24px; color:var(--muted);">プロンプト上手になるための 7つのポイント</span>

<div class="cardrow">
<div class="pcard" style="flex:1.1;"><div class="pc-h">プロンプト上手になるための 7つのポイント</div>
<table style="width:100%; border-collapse:separate; border-spacing:0 6px; font-size:21px;">
<tr><td style="width:230px; font-weight:800; color:var(--accent-dark);">① 明確な質問</td><td>曖昧な質問でなく明確な質問をする</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">② 具体性</td><td>トピックや要求に具体的・詳細な情報をつけて、適切な回答を引き出せるようにする</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">③ プロンプトの構造</td><td>明確で論理的な構造にする</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">④ 文脈の提供</td><td>重要な文脈や背景情報を提供する</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">⑤ 複数の質問</td><td>必要に応じて、複数の質問を連続して提示する</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">⑥ ステップバイステップ思考</td><td>大きな課題を分割する</td></tr>
<tr><td style="font-weight:800; color:var(--accent-dark);">⑦ 校正とフィードバック</td><td>得られた結果を評価し、精度向上を図る</td></tr>
</table>
</div>
</div>

<div class="box-accent pip-safe" style="margin-top:12px; font-size:25px;"><b>困ったら、生成AIと一緒にプロンプトを作ろう</b></div>

<div class="cite">野口 竜司 (2023). <i>ChatGPT時代の文系AI人材になる</i>. 東洋経済新報社.</div>

<!--
- 参考。複雑な処理を引き出すプロンプト上手になるための7つのポイント。明確な質問、具体性、構造、文脈の提供、複数の質問、ステップバイステップ思考、校正とフィードバック。
- 困ったら、生成AIと一緒にプロンプトを作りましょう。
-->

---

<div class="page-title">参考：Gemを作る</div>

# 参考：Gemを作る <span style="font-size:24px; color:var(--muted);">学内に共有出来るAIエキスパートを作る方法</span>

<div style="display:flex; gap:24px; align-items:flex-start;">
<div style="flex:0 0 620px;">
<img src="./src/fig30-gem.png" alt="GemビルダーのUI：名前・システムプロンプト・知識ファイル・ユーザープロンプト" style="width:100%; border:1px solid #ddd; border-radius:8px;">
<div style="font-size:18px; color:#666; margin-top:4px;">名前・システムプロンプト・知識ファイル(コンテキストの一部)・ユーザープロンプト／ Geminiの力もかりてみましょう</div>
</div>
<div style="flex:1;">
<div class="stepbox" style="margin:6px 0; padding:10px 24px;"><div class="st" style="font-size:23px; line-height:1.45;"><b>① Gemを作ってみましょう。</b>作る際にプロンプト作成支援Gemsを使って見ましょう。</div></div>
<div class="stepbox" style="margin:6px 0; padding:10px 24px;"><div class="st" style="font-size:23px; line-height:1.45;"><b>② 動くまで試行錯誤してみましょう。</b></div></div>
<div class="stepbox" style="margin:6px 0; padding:10px 24px;"><div class="st" style="font-size:23px; line-height:1.45;"><b>③ 面白いもの・便利なものができたら、学内に共有・展開可能です。</b></div></div>
<div class="box-warn pip-safe" style="margin-top:8px; font-size:20px; padding:10px 22px;"><b>名前</b>と<b>システムプロンプト</b>は必須。ユーザープロンプトに入力し評価。悪用・個人情報入力NG。<b>入力内容は作成者は見れません</b></div>
</div>
</div>

<!--
- 参考。学内に共有できるAIエキスパート＝Gemの作り方。①Gemを作ってみる。作る際はプロンプト作成支援Gemsを使うと便利。
- ②動くまで試行錯誤。③面白い・便利なものができたら学内に共有・展開可能です。
- 名前とシステムプロンプトは必須。悪用・個人情報入力はNG。入力内容は作成者からは見えません。
-->
