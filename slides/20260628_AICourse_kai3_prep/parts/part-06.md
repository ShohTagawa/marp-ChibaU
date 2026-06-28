<div class="page-title">箱としての、ディープラーニング</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div style="text-align:center; margin-top:6px;">
<img src="./src/fig73-net.png" alt="入力層・中間層（隠れ層）・出力層からなるニューラルネットワーク" style="width:90%; max-height:330px; object-fit:contain;">
</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:30px; margin-top:14px;">

<div style="border:2.5px solid #C98A2B; border-radius:12px; padding:12px 18px; background:#FBF1E0;">
<div style="font-weight:800; margin-bottom:8px;">学習</div>
<div style="display:flex; align-items:center; justify-content:center; gap:14px;">
<div style="font-weight:800;">入力</div>
<div style="background:var(--accent); color:#fff; border-radius:8px; padding:10px 22px; text-align:center; font-weight:800; line-height:1.25;">パラメーター<br>の函<br><span style="font-size:18px; font-weight:700;">数字の羅列</span></div>
<div style="display:flex; flex-direction:column; gap:2px; font-weight:800;"><span>出力</span><span style="color:var(--accent);">↻ 更新</span><span>評価</span></div>
</div>
</div>

<div style="border:2.5px solid #C98A2B; border-radius:12px; padding:12px 18px; background:#FBF1E0;">
<div style="font-weight:800; margin-bottom:8px;">利用</div>
<div style="display:flex; align-items:center; justify-content:center; gap:14px;">
<div style="font-weight:800;">入力</div>
<div style="background:var(--accent); color:#fff; border-radius:8px; padding:10px 22px; text-align:center; font-weight:800; line-height:1.25;">パラメーター<br>の函<br><span style="font-size:18px; font-weight:700;">数字の羅列</span></div>
<div style="font-weight:800;">出力</div>
</div>
</div>

</div>

<div class="cite pip-safe">『R1 総務省 情報通信白書』総務省(2019)</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 / 意味を直接設計しようとするアプローチではなく、機械的に膨大なパラメータから意味を生成する方法の方法がいまのAIの背景にあるのです。 -->

---

<div class="page-title">箱としての、ディープラーニング</div>

# 箱としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div style="display:grid; grid-template-columns:1.25fr 0.75fr; gap:24px; align-items:start; margin-top:4px;">

<div>
<img src="./src/fig74-net.png" alt="人間の神経細胞のように層をなして接続されるニューラルネットワーク" style="width:100%; max-height:310px; object-fit:contain;">

<div style="font-size:22px; line-height:1.5; margin-top:6px;">
- 人間の神経細胞（ニューロン）のように、各ノードが層をなして接続されるものがニューラルネットワーク<br>
- 中間層（隠れ層）が複数の層となっているものを用いるものが深層学習
</div>
</div>

<div style="text-align:center;">
<img src="./src/fig74-nobel.png" alt="ノーベル賞メダル" style="height:120px;">
<div style="font-weight:800; font-size:24px; margin-top:2px;">ノーベル賞<br>2024年</div>
</div>

</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:8px;">
<div class="box-info" style="font-size:20px;"><b>物理学：</b>人工ニューラルネットワークによる機械学習を可能にする基礎的な発見と発明<br><b>ジョン・ホップフィールド</b>　物理学者・分子生物学者<br><b>ジェフリー・ヒントン</b>　生理学・哲学→実験心理学→コンピューター科学</div>
<div class="box-info" style="font-size:20px;"><b>化学 (一部)：</b>タンパク質プログラムの開発<br><b>デミス・ハサビス</b>　人工知能研究者、神経科学者<br><b>ジョン・M・ジャンパー</b>　固体物理学→理論化学→計算生物学</div>
</div>

<div class="box-accent" style="font-size:19px; margin-top:8px;"><b>2012年</b>、Googleの キャットペーパー（「猫」を教えていなかったのに、写真から猫の特徴を抽出）ヒントンらによる画像認識のブレークスルー　／　<b>2016年</b>、世界トップレベルのプロ囲碁棋士に勝利 (囲碁専用ではない)</div>

<div class="cite pip-safe">※高校生/高校教諭向けには、東大松尾研のGCIなど、無料でおすすめ　／　『R1 総務省 情報通信白書』総務省(2019)</div>

<!-- ただ、このブラックボックス部分ですけど、この自体をどんな形にするか、という設計はあるわけです。 / 人工ニューラルネットワーク、その発展型である深層学習(Deep Learning)という言葉を耳にした方は多いかもしれません。今年のノーベル賞ですからね。複数のパラメータを配置することで、学習したデータとはことなるものを確率的につくることが出来るわけです。 -->

---

<div class="page-title">箱としての、ディープラーニング</div>

# 言語型の大規模言語モデル <span style="font-size:28px; color:var(--accent-dark)">(生成AIの中身) の本質</span>

<div style="text-align:center; margin-top:6px;">
<div style="font-size:34px; font-weight:800;">ネクストワードプレディクション</div>
<div style="font-size:26px; margin:10px 0; color:#333;">日本の首都___ →　日本の首都は___ →　日本の首都は東京___</div>
<div class="box-accent" style="display:inline-block; font-size:23px;"><b>これまでのコンテキストから、次の言葉(トークン)の確率を予想する問題</b></div>
</div>

<div style="display:grid; grid-template-columns:0.9fr 1.1fr; gap:26px; align-items:center; margin-top:14px;">

<div style="border:2.5px solid #C98A2B; border-radius:12px; padding:12px 18px; background:#FBF1E0;">
<div style="font-weight:800; margin-bottom:8px;">学習</div>
<div style="display:flex; align-items:center; justify-content:center; gap:14px;">
<div style="font-weight:800; text-align:center;">入力<br>文字</div>
<div style="background:var(--accent); color:#fff; border-radius:8px; padding:10px 22px; text-align:center; font-weight:800; line-height:1.25;">パラメーター<br>の函<br><span style="font-size:18px; font-weight:700;">数字の羅列</span></div>
<div style="display:flex; flex-direction:column; gap:2px; font-weight:800;"><span>出力</span><span style="color:var(--accent);">↻ 更新</span><span>評価</span></div>
</div>
</div>

<div class="box-info" style="font-size:22px;">GPT 4の場合、アメリカ議会図書館の<b>全蔵書の約22倍</b>に相当?<br><span style="font-size:19px;">※書籍、記事、ウェブサイト、コードなど幅広いテキストソース</span></div>

</div>

<!-- そして、生成AIの時代にきます。生成AIでよく想像されるのは、Chat GPTのような、言語を扱うAIでしょう。 / トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。 / 言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 -->

---

<div class="page-title">箱としての、ディープラーニング</div>

# パラメーターの箱(函)としての、<span style="color:var(--accent-dark)">ディープラーニング (深層学習)</span>

<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:380px; gap:30px;">
<div style="font-size:34px; text-decoration:underline; font-weight:700;">LLM Visualization</div>
</div>

<div style="font-size:24px; margin-top:8px;">cf. NVIDIA “Mythbusters Demo GPU versus CPU”</div>

<!-- トランスフォーマーの一つである、GPTのパラメタ構造をのぞいてみましょう。 / ここでは「nano-gpt」という非常に小さなモデルを使って、モデルの仕組みを探っていきます。 / 緑のセルは現在処理されている数値を、青のセルは重みを表しています。 -->

---

<!-- _class: divider -->

<div class="page-title">千葉大で使える生成AI</div>

# <span style="color:var(--accent-dark)">千葉大で使える生成AI</span>

<!-- 人間のニーズ、能力、制約を最優先に考慮する -->

---

<div class="page-title">ワーク：AIを使ってみる</div>

# <span style="color:var(--accent-dark)">ワーク：AIを使ってみる</span>

<div class="stepbox" style="margin-top:8px;">
<div class="st"><b>Step 1)　Gemini か、MS copilot</b>など、<b>学校で使われているAI</b>を開いて下さい。</div>
</div>

<div class="stepbox">
<div class="st"><b>Step 2)　以下のプロンプトをそれぞれ流してみて下さい。</b></div>
<div style="font-size:22px; line-height:1.5; margin:6px 0 0 1.2em; color:#333;">
生成AIとはなにか、説明して下さい。<br>
<span style="color:#777;">(わかりにくい場合)</span>　わかりにくいので、高校生にも分かるよう、説明して下さい<br>
わかりにくいので、3文で説明して下さい
</div>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>Step 3)　意図的にハルシネーションさせてみましょう (例)</b></div>
<div style="font-size:22px; line-height:1.5; margin:6px 0 0 1.2em; color:#333;">
千葉大の学長の先生は誰ですか？<br>
地球の核に水はどのくらいありますか<br>
5 cmの綿に、10 cmのレンがを乗せると、高さ何cm?
</div>
</div>

<div class="cite pip-safe">※余裕がある場合、「自信なかったら答えないように」頼んだ質問もやってみて下さい。</div>

---

<div class="page-title">ワーク：AIを使ってみる</div>

# <span style="color:var(--accent-dark)">ワーク：AIを使ってみる</span>

<div class="box-accent" style="margin:6px 0 12px;"><b>Step 4)　YouTubeまたはPDFを開き、動画の書き起こしを開き、コピー、AIに日本語で要約させて下さい。</b></div>

<div style="display:grid; grid-template-columns:1.5fr 0.5fr; gap:20px; align-items:center;">

<div style="background:#f2f2f2; border-radius:10px; padding:14px 18px;">
<div style="font-size:22px; margin-bottom:8px;">例：https://www.youtube.com/watch?v=6dHmu1GALmA</div>
<img src="./src/fig79-transcript.png" alt="NotebookLM の文字起こし画面" style="width:100%; max-height:300px; object-fit:contain;">
</div>

<div style="font-size:30px; font-weight:800; text-align:center;">→AIにコピペ</div>

</div>

<div class="box-info pip-safe" style="font-size:22px; margin-top:10px;">“以下は、動画の書き起こしを添付したものです。その内容を200文字で要約して下さい”</div>

---

<div class="page-title">ワーク：AIを使ってみる</div>

# <span style="color:var(--accent-dark)">ワーク：AIを使ってみる</span>

<div class="stepbox" style="margin-top:6px;">
<div class="st"><b>Step 5)　与えた情報(コンテキスト)内を情報を検索してみましょう</b></div>
<div style="font-size:21px; margin:4px 0 0 1.2em; color:#444;">“与えた情報によれば、Notebook LMでは、どのようなファイルを使えるんですか”</div>
</div>

<div class="stepbox">
<div class="st"><b>Step 6)　議論のパートナーにする</b></div>
<div style="font-size:21px; margin:4px 0 0 1.2em; color:#444;">“私は科目〇〇の高校の先生です。NotebookLMは、自分の担当する科目でどう使えそうですか？”</div>
</div>

<div class="stepbox">
<div class="st"><b>Step 7) 理解を確かめる</b></div>
<div style="font-size:21px; margin:4px 0 0 1.2em; color:#444;">“与えた情報から、Notebook LMを自分が理解したかを確かめる、三択問題を2問、この動画から作成して下さい。”</div>
</div>

<div class="stepbox pip-safe">
<div class="st"><b>Step 8) 情報検索をしてみる</b></div>
<div style="font-size:21px; margin:4px 0 0 1.2em; color:#444;">“Notebook LMは、高校生でもつかえるんですか?”</div>
</div>

---

<div class="page-title">Audience Q&A</div>

<div style="display:flex; align-items:center; justify-content:center; gap:48px; height:420px;">
<svg width="180" height="160" viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
<rect x="42" y="14" width="118" height="6" rx="3" fill="var(--accent)"/>
<path d="M40 18 q-8 0 -8 8 v34" stroke="var(--accent)" stroke-width="6" fill="none" stroke-linecap="round"/>
<rect x="44" y="44" width="118" height="86" rx="16" fill="#fff" stroke="var(--accent)" stroke-width="7"/>
<path d="M70 130 v22 l26 -22 z" fill="#fff" stroke="var(--accent)" stroke-width="7" stroke-linejoin="round"/>
<circle cx="80" cy="87" r="9" fill="var(--accent)"/>
<circle cx="106" cy="87" r="9" fill="var(--accent)"/>
<circle cx="132" cy="87" r="9" fill="var(--accent)"/>
</svg>
<div style="font-size:56px; font-weight:800; color:#555;">Audience Q&amp;A</div>
</div>

<!-- 📣 This is Slido interaction slide, please don't delete it. ✅ Click on 'Present with Slido' and the questions from your audience will appear when you get to this slide. -->

---

<div class="page-title">AIの説明はわかりやすくなりましたか？</div>

<div style="display:flex; align-items:center; justify-content:center; gap:48px; height:420px;">
<svg width="150" height="170" viewBox="0 0 150 170" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="14" width="110" height="142" rx="16" fill="#EAF2FB" stroke="var(--tag-blue)" stroke-width="7"/>
<path d="M40 56 l12 12 l22 -24" stroke="var(--tag-blue)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="84" y="58" width="30" height="8" rx="4" fill="var(--tag-blue)"/>
<circle cx="51" cy="116" r="13" fill="none" stroke="var(--tag-blue)" stroke-width="7"/>
<rect x="84" y="112" width="30" height="8" rx="4" fill="var(--tag-blue)"/>
</svg>
<div style="font-size:48px; font-weight:800;">AIの説明はわかりやすくなりましたか？</div>
</div>

<!-- The Slido app must be installed on every computer you're presenting from -->

---

<div class="page-title">ハルシネーションはどんな問でおきましたか。</div>

<div style="display:flex; align-items:center; justify-content:center; gap:48px; height:420px;">
<svg width="170" height="150" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
<rect x="18" y="18" width="134" height="92" rx="18" fill="#fff" stroke="#0F766E" stroke-width="7"/>
<path d="M52 110 v24 l28 -24 z" fill="#fff" stroke="#0F766E" stroke-width="7" stroke-linejoin="round"/>
<rect x="42" y="50" width="86" height="8" rx="4" fill="#0F766E"/>
<rect x="42" y="72" width="58" height="8" rx="4" fill="#0F766E"/>
</svg>
<div style="font-size:48px; font-weight:800;">ハルシネーションはどんな問でおきましたか。</div>
</div>

<!-- The Slido app must be installed on every computer you're presenting from -->

---

<!-- _class: summary -->

<div class="page-title">まとめ</div>

# <span style="color:var(--accent-dark)">まとめ</span>

<div class="box-accent" style="margin:4px 0 10px;"><b>大規模言語モデル = 数字の箱</b>　<b>→　ルールの箱や、データの箱ではないことに注意</b></div>

<div style="text-align:center; margin:8px 0;">
<div style="font-size:30px; font-weight:800;">ネクストワードプレディクション</div>
<div style="display:inline-block; border:2.5px solid var(--accent); border-radius:8px; padding:6px 18px; font-size:24px; margin:8px 0;">日本の首都___ →　日本の首都は___ →　日本の首都は東京</div>
<div style="font-size:23px;">これまでのコンテキストから、次の言葉(トークン)<b style="color:var(--accent);">の生成確率</b>を予想する問題</div>
</div>

<div class="box-info" style="margin:8px 0;"><b>生成AIは、LLMを有用化した一連のパッケージ</b></div>

<div class="box-warn pip-safe"><b>確率的に考えるモデルなので、ハルシネーションはなくならない</b><br><span style="color:#333; font-weight:600;">しかし、工夫により問題は減り、<b style="color:var(--accent);">有用性が向上</b>しつつある</span></div>

<!-- 言葉を操る生成AIは、ネクストワードプレディクション、つまり次に出てくる言葉の予測をおこなうAIなわけですね。 -->
