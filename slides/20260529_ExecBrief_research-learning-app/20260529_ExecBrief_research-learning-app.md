---
marp: true
theme: academic
paginate: true
size: 16:9
header: '<div class="hdr-left">研究×学び アプリ</div><img class="hdr-logo" src="./src/chiba-logo.png" alt="CHIBA UNIVERSITY">'
footer: ''
html: true
style: |
  /* Academic Link グリーンを基調に */
  :root {
    --accent: #1A7A5E;
    --accent-soft: #E4F2EC;
    --hdr-left-w: 26%;
  }
  section .page-title { left: 20%; width: 42%; }
  h2 { color: #1A7A5E; }
  .split .right h3 { color: #1A7A5E; margin-bottom: 2px; }
  .split .right ul { margin-top: 2px; margin-bottom: 12px; }
  .split .right li { font-size: 21px; line-height: 1.45; }
  .split .left svg { width: 100%; height: auto; }
  .figcap { font-size: 18px; color: #666; text-align: center; margin-top: 2px; }
  .cost-line { color: #1A7A5E; font-weight: 700; }
  /* 4セクション split を詰める */
  .split.tight .right h3 { margin-bottom: 0; }
  .split.tight .right ul { margin-top: 0; margin-bottom: 7px; }
  .split.tight .right li { font-size: 19px; line-height: 1.38; }
  /* ストーリー（現場の声） */
  section.story h2 { margin-bottom: 10px; }
  section.story .bubble { background: linear-gradient(180deg,#DCEEE5 0%,#ffffff 100%); border-radius: 22px; padding: 18px 30px 24px; position: relative; }
  section.story .quotes { display: grid; grid-template-columns: 1fr 1fr; column-gap: 48px; row-gap: 12px; }
  section.story .q { font-size: 18px; line-height: 1.45; color: #333; }
  section.story .q .by { display: block; text-align: right; font-weight: 700; font-size: 18px; margin-top: 2px; color: #222; }
  section.story .bubble::after { content: ""; position: absolute; left: 36%; bottom: -16px; width: 0; height: 0; border-left: 18px solid transparent; border-right: 18px solid transparent; border-top: 16px solid #ffffff; }
  section.story .count { text-align: right; font-size: 20px; color: #333; margin: 8px 6px 0 0; }
  section.story .synth { font-size: 20px; line-height: 1.55; margin: 14px 0 16px; color: #222; }
  section.story .msgbox { border: 2px solid #444; border-radius: 6px; text-align: center; font-size: 30px; padding: 12px; }
  section.story .msgbox b { color: #1A7A5E; }
  /* 解決後の世界（Before→After） */
  section.world { padding-bottom: calc(var(--takeaway-bottom) + 56px); }
  section.world h2 { margin-bottom: 6px; }
  section.world .thesis { font-size: 20px; line-height: 1.5; background: #E4F2EC; border-left: 6px solid #1A7A5E; border-radius: 8px; padding: 11px 18px; margin: 6px 0 14px; }
  section.world .thesis b { color: #16624b; }
  section.world .ba-grid { display: grid; grid-template-columns: 84px 1fr 1.08fr; row-gap: 8px; align-items: stretch; }
  section.world .ba-head { font-size: 16px; font-weight: 700; padding: 2px 14px; }
  section.world .ba-head.before { color: #999; }
  section.world .ba-head.after { color: #1A7A5E; padding-left: 30px; }
  section.world .who { font-size: 18px; font-weight: 700; color: #1A7A5E; display: flex; align-items: center; }
  section.world .b { font-size: 17px; color: #777; background: #F2F2F2; padding: 8px 14px; border-radius: 8px 0 0 8px; display: flex; align-items: center; }
  section.world .a { font-size: 17px; color: #222; background: #F7FBF9; border: 1.5px solid #cfe0d8; border-left: none; padding: 8px 14px 8px 30px; border-radius: 0 8px 8px 0; display: flex; align-items: center; position: relative; }
  section.world .a::before { content: "→"; position: absolute; left: 8px; color: #1A7A5E; font-weight: 700; }
  /* 労力↓・研究力↑（クロス） */
  section.cross { padding-bottom: calc(var(--takeaway-bottom) + 56px); }
  section.cross h2 { margin-bottom: 4px; }
  section.cross .cv { text-align: center; margin-top: 4px; }
  section.cross svg { width: 90%; height: auto; }
  /* KPI / KGI */
  section.kpi h2 { margin-bottom: 6px; }
  section.kpi .kpi-body { display: grid; grid-template-columns: 1.32fr 1fr; gap: 28px; align-items: start; }
  section.kpi .blk { border: 1.5px solid #cfd8d4; border-radius: 6px; padding: 8px 14px; margin-bottom: 11px; }
  section.kpi .blk.boxed { border: 2px solid #1A7A5E; }
  section.kpi .blk .bt { font-size: 19px; font-weight: 700; color: #1A7A5E; }
  section.kpi .blk p { font-size: 18px; line-height: 1.42; margin: 2px 0; color: #333; }
  /* 効果の試算（ダミー値） */
  section.kpi .est-title { font-size: 18px; font-weight: 700; color: #1A7A5E; text-align: center; margin: 0 0 8px; }
  section.kpi .est { border: 1.5px solid #cfd8d4; border-left: 6px solid #1A7A5E; border-radius: 8px; padding: 6px 14px; margin-bottom: 9px; background: #F7FBF9; }
  section.kpi .est .ev { font-size: 24px; font-weight: 700; color: #16624b; line-height: 1.15; }
  section.kpi .est .el { font-size: 16px; color: #333; line-height: 1.35; }
  section.kpi .est-note { font-size: 14px; color: #888; text-align: right; margin: 2px 2px 0 0; }
  section.kpi .foot { text-align: center; font-size: 23px; font-weight: 700; color: #1A7A5E; margin-top: 8px; }
  /* 具体例（ユースケース） */
  section.usecase { padding-bottom: calc(var(--takeaway-bottom) + 70px); }
  section.usecase .uc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 11px 22px; margin-top: 8px; }
  section.usecase .uc { border: 1.5px solid #cfd8d4; border-left: 6px solid #1A7A5E; border-radius: 8px; padding: 9px 16px; background: #F7FBF9; }
  section.usecase .uc .ut { font-size: 19px; font-weight: 700; color: #1A7A5E; margin-bottom: 2px; }
  section.usecase .uc .ud { font-size: 17px; line-height: 1.4; color: #333; }
  section.usecase .uc .ud b { color: #16624b; }
  /* 投資の意義（クロージング） */
  section.invest .inv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 24px; margin-top: 8px; }
  section.invest .inv { border: 1.5px solid #cfd8d4; border-radius: 8px; padding: 12px 18px; }
  section.invest .inv .iv-h { font-size: 21px; font-weight: 700; color: #1A7A5E; margin-bottom: 4px; }
  section.invest .inv .iv-d { font-size: 17px; line-height: 1.45; color: #333; }
  section.invest .inv .iv-d b { color: #16624b; }
  section.invest .msgbox2 { margin-top: 14px; text-align: center; font-size: 26px; font-weight: 700; color: #fff; background: #1A7A5E; border-radius: 8px; padding: 14px; }
  /* 効果が出るまでの時間（横タイムライン） */
  section.invest .htl-title { font-size: 17px; color: #888; text-align: right; margin: 16px 2px 8px 0; }
  section.invest .htl { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 22px; }
  section.invest .hstg { border-top: 3px solid #1A7A5E; padding: 12px 12px 0; position: relative; }
  section.invest .hstg::before { content: ""; position: absolute; left: 0; top: -8px; width: 13px; height: 13px; border-radius: 50%; background: #1A7A5E; border: 2px solid #fff; }
  section.invest .hstg .hw { font-size: 18px; font-weight: 700; color: #1A7A5E; margin-bottom: 2px; }
  section.invest .hstg .he { font-size: 16px; color: #333; line-height: 1.4; }
---

<!-- _class: story -->

<div class="page-title">現場の声</div>

## 現場の声 ― リンクすればもっと良くなる

<div class="bubble">
<div class="quotes">
<div class="qcol">

<div class="q">留学生の文章添削など、学生の支援に研究時間が取られる。<span class="by">ーインタビューした園芸学部教員</span></div>

<div class="q">論文やゼミ指導などでいつも言われていることは、共通化すれば楽になるのに。<span class="by">ーxxx・教員</span></div>

<div class="q">定型的な仕事に押されがちで忙しい。<span class="by">ーxxx・職員</span></div>

</div>
<div class="qcol">

<div class="q">全員留学の情報を学生に最適化する基盤があれば楽なのに。<span class="by">ーxxx・教員</span></div>

<div class="q">学内で様々な支援があるのに、それが届かない。だから、アプリが欲しい。<span class="by">ーR6学生参画会議 学生提言</span></div>

<div class="q">大量に情報が来すぎて、自分に役立つものが分からない。<span class="by">ー融合理工・博士課程学生</span></div>

</div>
</div>
</div>

<div class="count">アンケート〇〇件、インタビュー△△件</div>

<div class="synth">大学院生支援と教員の時間確保のために、見えてきたこと。<br>
それは、情報を集約し、全員の実践知をAIに載せる体験(UX)の基盤があれば、<br>
全員の手間を減らし、教育と研究の質の両方を向上させうるということ。</div>

<div class="msgbox"><b>「研究×学び」</b>アプリで、一括して解決する</div>

<!-- ストーリーの導入。現場の生の声（教員・職員・学生）を提示し、課題を共感的に共有してから「アプリで一括解決」へ繋ぐ。アンケート/インタビュー件数は確定値に差し替える。 -->

---

<!-- _class: world -->

<div class="page-title">解決後の世界</div>

## 繋げば、解決する ― 解決後の世界

<div class="thesis">学内に散らばる<b>人・データ・支援</b>を繋ぎ・マッチングするだけで、別々に見えていた課題が<b>一度に解ける</b></div>

<div class="ba-grid">

<div class="ba-head actor"></div>
<div class="ba-head before">いま（バラバラ）</div>
<div class="ba-head after">つながった世界</div>

<div class="who">学生</div>
<div class="b">支援や成長の機会が届かず、迷う</div>
<div class="a">専用AIが学びに伴走し、機会が適時届く</div>

<div class="who">教員</div>
<div class="b">指導・支援に追われ研究時間がない</div>
<div class="a">定型支援はAIが肩代わり、研究に集中</div>

<div class="who">職員</div>
<div class="b">同じ問い合わせ・手続きの繰り返し</div>
<div class="a">窓口DXで省力化し、本来業務へ</div>

<div class="who">大学</div>
<div class="b">システム乱立・データが分散</div>
<div class="a">共通基盤に統合し、IR・経営に活用</div>

</div>

<div class="takeaway">繋ぐ・マッチングするほど、学内の課題が連鎖的に解ける</div>

<!-- ニーズ（現場の声）を受け、「繋ぐ・マッチングするだけで課題が連鎖的に解ける」という解決後の世界を提示。学生・教員・職員・大学のBefore→Afterで便利さを具体的に見せる。 -->

---

<!-- _class: cross -->

<div class="page-title">本質的な価値</div>

## 労力は減らし、研究力は上げる

<div class="cv">
<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="agU" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="arD" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
  <polygon points="515,240 880,100 880,360" fill="#1A7A5E" opacity="0.12"/>
  <line x1="120" y1="410" x2="900" y2="410" stroke="#999" stroke-width="2" marker-end="url(#agU)"/>
  <line x1="120" y1="410" x2="120" y2="40" stroke="#999" stroke-width="2"/>
  <text x="500" y="455" font-size="16" fill="#666" text-anchor="middle">導入後の時間 →</text>
  <line x1="150" y1="380" x2="880" y2="100" stroke="#1A7A5E" stroke-width="7" marker-end="url(#agU)"/>
  <line x1="150" y1="120" x2="880" y2="360" stroke="#A6192E" stroke-width="7" marker-end="url(#arD)"/>
  <rect x="352" y="196" width="356" height="58" rx="12" fill="#fff" stroke="#1A7A5E" stroke-width="2"/>
  <text x="530" y="231" font-size="20" fill="#1A7A5E" text-anchor="middle" font-weight="700">AIが定型・反復の支援を肩代わり</text>
  <text x="815" y="226" font-size="18" fill="#16624b" text-anchor="middle" font-weight="700">ギャップを埋める</text>
  <text x="815" y="250" font-size="13" fill="#16624b" text-anchor="middle">＝研究時間・研究力の余力</text>
  <text x="912" y="96" font-size="22" fill="#1A7A5E" font-weight="700">研究力 ↑</text>
  <text x="912" y="122" font-size="15" fill="#16624b">論文・申請の質、院生の伸び</text>
  <text x="912" y="356" font-size="22" fill="#A6192E" font-weight="700">教員の手間・労力 ↓</text>
  <text x="912" y="382" font-size="15" fill="#A6192E">指導・窓口・反復対応の負担</text>
</svg>
</div>

<div class="takeaway">定型支援をAIが担うほど、教員の手間は減り、研究力は上がる</div>

<!-- 1枚で本質的価値を伝える図。緑＝研究力↑、赤＝教員の手間↓が交差し、その分岐点に「AIが定型・反復の支援を肩代わり」を置く。労力をかけずに研究力が上がる構造を視覚化。 -->

---

<!-- _class: kpi -->

<div class="page-title">期待される効果（KGI）</div>

## アプリにより期待される効果（重要目標達成指標 KGI）

<div class="kpi-body">
<div class="kpi-left">

<div class="blk">

<div class="bt">研究力の向上 =「教員の時間の確保」</div>

<p>方針① 支援情報を多言語で共通化し、教員の支援を軽減</p>
<p>方針② 論文作成など共通化できる支援と接続</p>

</div>

<div class="blk boxed">

<div class="bt">院生の研究力向上：ラーニングジャーニーの可視化</div>

<p>方針③ 研究者になるうえでのチェックポイントを明示</p>
<p>方針④ 個別最適な文脈の蓄積や支援の実施</p>
<p>方針⑤ プッシュ送信で適時に届ける</p>

</div>

<div class="blk">

<div class="bt">同一基盤で副次的に実現されること</div>

<p>① 図書館入館（必要であれば学生証へ）　② 事務窓口DX　③ IR・分析基盤</p>

</div>

</div>
<div class="kpi-right">

<div class="est-title">期待効果の試算（暫定値）</div>

<div class="est">
<div class="ev">＋3時間/週</div>
<div class="el">教員1人あたりの研究時間を捻出</div>
</div>

<div class="est">
<div class="ev">−40%</div>
<div class="el">留学生・院生の定型問い合わせ対応</div>
</div>

<div class="est">
<div class="ev">−50%</div>
<div class="el">科研費・学振 申請書の初稿作成時間</div>
</div>

<div class="est">
<div class="ev">約1,800万円/年</div>
<div class="el">システム統廃合による運用コスト削減（将来）</div>
</div>

<div class="est-note">※ 暫定の試算値（導入後に検証）</div>

</div>
</div>

<div class="foot">アプリを基盤に、次の予算の確保や研究力向上にも繋げる</div>

<!-- KGI。研究力向上＝教員の時間確保を主目標に、方針①〜⑤を提示。副次効果（入館証・窓口DX・IR）は同一基盤で得られることを強調。効果が出る時間軸は右に向かうほど中長期。 -->

---

<!-- _class: split -->

<div class="page-title">解決したい現状</div>

## 学生・教員の不満を「つなぐ」

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <!-- A: 散らばるリソース -->
  <text x="80" y="28" font-size="16" fill="#666" text-anchor="middle">バラバラで届かない</text>
  <g font-size="14" fill="#333">
    <rect x="18" y="50" width="124" height="34" rx="8" fill="#EFEFEF" stroke="#bbb"/><text x="80" y="72" text-anchor="middle">セミナー</text>
    <rect x="18" y="96" width="124" height="34" rx="8" fill="#EFEFEF" stroke="#bbb"/><text x="80" y="118" text-anchor="middle">奨学金・留学</text>
    <rect x="18" y="142" width="124" height="34" rx="8" fill="#EFEFEF" stroke="#bbb"/><text x="80" y="164" text-anchor="middle">論文・データ</text>
    <rect x="18" y="188" width="124" height="34" rx="8" fill="#EFEFEF" stroke="#bbb"/><text x="80" y="210" text-anchor="middle">研究費・指導</text>
  </g>
  <!-- arrow A->B -->
  <path d="M150 136 L196 136" stroke="#1A7A5E" stroke-width="4" marker-end="url(#ar)"/>
  <!-- B: 専用AI -->
  <text x="270" y="60" font-size="16" fill="#1A7A5E" text-anchor="middle" font-weight="700">伴走</text>
  <circle cx="270" cy="136" r="52" fill="#1A7A5E"/>
  <text x="270" y="130" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">専用AI</text>
  <text x="270" y="152" font-size="13" fill="#E4F2EC" text-anchor="middle">コンパス</text>
  <!-- arrow B->C -->
  <path d="M324 136 L368 136" stroke="#1A7A5E" stroke-width="4" marker-end="url(#ar)"/>
  <!-- C: 成長の道 -->
  <text x="438" y="60" font-size="16" fill="#666" text-anchor="middle">成長を可視化</text>
  <path d="M392 300 Q470 260 410 210 Q360 170 440 120" fill="none" stroke="#C9A24B" stroke-width="6"/>
  <circle cx="392" cy="300" r="6" fill="#1A7A5E"/>
  <circle cx="430" cy="245" r="6" fill="#1A7A5E"/>
  <circle cx="402" cy="195" r="6" fill="#1A7A5E"/>
  <line x1="440" y1="120" x2="440" y2="92" stroke="#333" stroke-width="3"/>
  <path d="M440 94 L476 104 L440 116 Z" fill="#A6192E"/>
  <defs>
    <marker id="ar" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
</svg>

<div class="figcap">学内に散らばる支援を、専用AIが一人ひとりに繋ぐ</div>

</div>
<div class="right">

### 学生のいま

- 成長実感がもてず、キャリアに迷う
- 支援・機会の情報が届かない

### 教員のいま

- 研究指導の負担が重い／属人化
- 研究に充てる時間が足りない

### 解決イメージ

- 専用AIが学びに伴走し、目標と経路を可視化
- 成長機会を適時プッシュで届ける

</div>
</div>

<div class="takeaway">学生も教員も「自分専用AI」が伴走する新しいUXへ</div>

<!-- 7分プレゼンの導入。左図：バラバラな学内リソース → 専用AI（コンパス）→ 成長の道（旗）の3ステップで「つなぐ」を直感的に示す。右の不満は学生・教員の双方を対比。 -->

---

<!-- _class: split -->

<div class="page-title">何が解決するか</div>

## できること・誰に効くか

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <!-- center hub -->
  <rect x="186" y="150" width="148" height="76" rx="12" fill="#1A7A5E"/>
  <text x="260" y="182" font-size="16" fill="#fff" text-anchor="middle" font-weight="700">研究×学び</text>
  <text x="260" y="204" font-size="16" fill="#fff" text-anchor="middle" font-weight="700">アプリ</text>
  <!-- spokes -->
  <line x1="260" y1="150" x2="260" y2="92" stroke="#1A7A5E" stroke-width="3"/>
  <line x1="200" y1="226" x2="120" y2="296" stroke="#1A7A5E" stroke-width="3"/>
  <line x1="320" y1="226" x2="400" y2="296" stroke="#1A7A5E" stroke-width="3"/>
  <!-- 学生 -->
  <rect x="160" y="36" width="200" height="56" rx="10" fill="#E4F2EC" stroke="#1A7A5E"/>
  <text x="260" y="60" font-size="15" fill="#1A7A5E" text-anchor="middle" font-weight="700">学生</text>
  <text x="260" y="80" font-size="13" fill="#333" text-anchor="middle">学び最適化・成長可視化</text>
  <!-- 教員 -->
  <rect x="20" y="298" width="200" height="58" rx="10" fill="#E4F2EC" stroke="#1A7A5E"/>
  <text x="120" y="322" font-size="15" fill="#1A7A5E" text-anchor="middle" font-weight="700">教員</text>
  <text x="120" y="342" font-size="13" fill="#333" text-anchor="middle">指導負担↓・研究時間↑</text>
  <!-- 事務・本部 -->
  <rect x="300" y="298" width="200" height="58" rx="10" fill="#E4F2EC" stroke="#1A7A5E"/>
  <text x="400" y="322" font-size="15" fill="#1A7A5E" text-anchor="middle" font-weight="700">事務・本部</text>
  <text x="400" y="342" font-size="13" fill="#333" text-anchor="middle">窓口省力化・IR集約</text>
</svg>

<div class="figcap">バックシステム利用者以外の教職員にも価値が及ぶ</div>

</div>
<div class="right">

### できること

- 履修・セミナー・留学・奨学金を個人に最適提案
- 学内の信頼できるデータ・資料をAIが提示

### 研究力・研究時間

- AI×電子ラボノート、URA×AIで申請を効率化
- 指導負担を軽減し教員の研究時間を捻出

### 他の教職員も

- 窓口RAGで省力化、IR情報を自動集約

</div>
</div>

<div class="takeaway">学生の研究力向上と、教員・事務の省力化を同時に実現</div>

<!-- 中央ハブ＝アプリ、3方向に学生・教員・事務本部。研究力と研究時間の捻出は機能①〜⑦で実現。バックシステム利用者以外（事務・本部）への波及を図で明示。 -->

---

<!-- _class: usecase -->

<div class="page-title">具体例</div>

## こう変わる ― 具体的なユースケース

<div class="uc-grid">

<div class="uc">
<div class="ut">科研費・学振の申請書作成</div>
<div class="ud">過去の採択例とURAの知見をAIが学習し、<b>初稿を自動生成</b>。URAが仕上げ、教員の執筆負担を大幅に軽減。</div>
</div>

<div class="uc">
<div class="ut">留学生・院生への対応</div>
<div class="ud">履修・留学・生活手続きを<b>多言語AIが24時間案内</b>。研究室に来る相談対応の時間を削減。</div>
</div>

<div class="uc">
<div class="ut">文章支援・研究の伴走</div>
<div class="ud">学生ごとの<b>個別データベース</b>を基にAIが文章を伴走支援。留学生の添削など、教員が抱える負担を肩代わり。</div>
</div>

<div class="uc">
<div class="ut">ゼミ指導の共通化</div>
<div class="ud">毎回伝える基礎指導をAIに載せ、<b>OB・OGの指導ログ</b>も継承。教員は本質的な議論に集中。</div>
</div>

<div class="uc">
<div class="ut">留学・キャリアの設計</div>
<div class="ud">キャリアプランから<b>留学先候補や交換提携校</b>をAIが提示。学振・JST等の公募も適時通知。</div>
</div>

<div class="uc">
<div class="ut">成長の可視化</div>
<div class="ud">研究力向上のパスとチェックポイントを示し、<b>達成をスタンプで可視化</b>。学びの自律性を高める。</div>
</div>

</div>

<div class="takeaway">日々の「繰り返しの支援」をAIが担い、人は本質的な指導へ</div>

<!-- 具体例で「使えるイメージ」を持たせる。申請書作成（科研費・学振）はURA×AIで初稿、留学生対応は多言語AI、レポートは図書館資料連携、ゼミ指導は共通化＋OBログ継承。教員の時間を生む4シーン。 -->

---

<!-- _class: split tight -->

<div class="page-title">投資判断のポイント</div>

## 拡張性・持続性・収益化

<div class="split-body">
<div class="left">

<svg viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
  <!-- staged bars -->
  <line x1="40" y1="300" x2="500" y2="300" stroke="#999" stroke-width="2"/>
  <rect x="60" y="232" width="96" height="68" rx="6" fill="#CFE6DC"/>
  <text x="108" y="272" font-size="13" fill="#1A7A5E" text-anchor="middle" font-weight="700">Lv.1</text>
  <rect x="196" y="170" width="96" height="130" rx="6" fill="#7FC0A6"/>
  <text x="244" y="240" font-size="13" fill="#0d4a37" text-anchor="middle" font-weight="700">Lv.2</text>
  <rect x="332" y="92" width="96" height="208" rx="6" fill="#1A7A5E"/>
  <text x="380" y="200" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">Lv.3</text>
  <!-- rising arrow -->
  <path d="M70 250 L400 70" stroke="#A6192E" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#ar2)"/>
  <!-- labels -->
  <text x="108" y="320" font-size="12" fill="#333" text-anchor="middle">事務DX・学生証</text>
  <text x="244" y="320" font-size="12" fill="#333" text-anchor="middle">生成AI・RAG</text>
  <text x="380" y="320" font-size="12" fill="#333" text-anchor="middle">AI agent基盤</text>
  <!-- cost callout -->
  <rect x="318" y="20" width="190" height="58" rx="8" fill="#fff" stroke="#1A7A5E" stroke-width="2"/>
  <text x="413" y="42" font-size="13" fill="#1A7A5E" text-anchor="middle" font-weight="700">削減効果</text>
  <text x="413" y="62" font-size="13" fill="#333" text-anchor="middle">約400万→1,800万円/年</text>
  <!-- 外部展開（収益化） -->
  <path d="M428 196 L470 174" stroke="#A6192E" stroke-width="3" marker-end="url(#ar2)"/>
  <rect x="404" y="120" width="116" height="48" rx="8" fill="#FBEDEF" stroke="#A6192E"/>
  <text x="462" y="140" font-size="13" fill="#A6192E" text-anchor="middle" font-weight="700">外部へ展開</text>
  <text x="462" y="158" font-size="12" fill="#333" text-anchor="middle">他大学・地域・企業</text>
  <defs>
    <marker id="ar2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#A6192E"/></marker>
  </defs>
</svg>

<div class="figcap">共通基盤として段階拡張し、コストを回収する</div>

</div>
<div class="right">

### 基本設計と拡張

- 学内APIで何でも繋がる×認証つき
- 必要な機能だけ読込む共通基盤で段階拡張

### 持続可能性・コスト

- Google Cloudで安価運用、学生・民間と継続開発
- <span class="cost-line">削減効果 約400万円/年（将来 約1,800万）</span>

### 統廃合の対象

- 入館証→学生証、掲示板・授業評価・ポータル統合

### 収益化・外部展開

- 基盤・AI agentを他大学/地域/企業へ提供し収益化

</div>
</div>

<div class="takeaway">統廃合でコストを回収し、外部展開で稼ぐ共通基盤へ</div>

<!-- 左図：Lv.1→Lv.3の段階拡張（バー上昇）＋削減効果の数字でROIを示す。コストはPDF p.5（R9合計400万/年・将来1,800万/年）。統廃合候補は入館証・掲示板・アンケート・ポータル。 -->

---

<!-- _class: invest -->

<div class="page-title">推進体制・実現性</div>

## 「絵に描いた餅」にしない体制がある

<div class="inv-grid">

<div class="inv">
<div class="iv-h">Google Cloud 認定資格を保有</div>
<div class="iv-d">クラウド・生成AI基盤を<b>自走で構築・運用</b>できる技術力を学内に確保。</div>
</div>

<div class="inv">
<div class="iv-h">第一線の助言（NDA可）</div>
<div class="iv-d"><b>橋口剛 氏</b>（元 Google Cloud Japan 生成AI本部長）に相談できる体制。</div>
</div>

<div class="inv">
<div class="iv-h">開発リソースの確保</div>
<div class="iv-d"><b>ソフトバンクのエンジニア</b>と連携し、実装力を担保。</div>
</div>

<div class="inv">
<div class="iv-h">内製＋外部知のエコシステム</div>
<div class="iv-d">学生・民間エンジニアが参画し、<b>低コストで継続開発</b>。</div>
</div>

</div>

<div class="msgbox2">外部の第一線の知見を取り込み、低リスク・低コストで確実に実装する</div>

<!-- 実現性・体制の担保。Google Cloud認定資格、NDA下で相談できる助言者（橋口剛氏：元Google Cloud Japan 生成AI本部長）、ソフトバンクのエンジニア連携、内製エコシステムを示し、「絵に描いた餅」ではないことを学長に伝える。 -->

---

<!-- _class: invest -->

<div class="page-title">投資の意義</div>

## なぜ、いま千葉大が投資すべきか

<div class="inv-grid">

<div class="inv">
<div class="iv-h">研究力で「選ばれる大学」へ</div>
<div class="iv-d">申請書作成や指導の共通化で<b>教員の時間を研究に取り戻し</b>、院生の研究力を底上げ。10年後の競争力に直結。</div>
</div>

<div class="inv">
<div class="iv-h">投資を回収し、収益も生む</div>
<div class="iv-d">既存システムの統廃合で<b>約400万→1,800万円/年</b>を削減。基盤を他大学・地域・企業へ外部展開。</div>
</div>

<div class="inv">
<div class="iv-h">低リスクで段階拡張</div>
<div class="iv-d">学生証・情報配信から着手し、生成AI→AI agent基盤へ。<b>Google Cloud＋学内開発</b>で持続可能。</div>
</div>

<div class="inv">
<div class="iv-h">先行優位を取る好機</div>
<div class="iv-d">東大・東北大・海外有力大が<b>AI×アプリへ移行中</b>。データ中心の基盤で先んじる。</div>
</div>

</div>

<div class="msgbox2">「研究×学び」アプリは、研究力・財務・ブランドを同時に高める投資</div>

<div class="htl-title">効果が出るまでの時間 →</div>

<div class="htl">

<div class="hstg">
<div class="hw">短期（〜半年）</div>
<div class="he">情報が届く・学生の利便性UP／窓口・事務の省力化</div>
</div>

<div class="hstg">
<div class="hw">中期（1〜2年）</div>
<div class="he">教員の研究時間を確保／研究室活動のレベルアップ</div>
</div>

<div class="hstg">
<div class="hw">長期（3年〜）</div>
<div class="he">研究の高度化・次の予算確保／外部展開で収益化</div>
</div>

</div>

<!-- クロージング。学長の関心（研究力＝大学評価／財務ROI／リスク／競争優位）に直接答える4点。最後の一言で投資判断を後押しし、効果が出る時間軸を横タイムラインで補足。 -->

---

<!-- _class: cross -->

<div class="page-title">研究力が二重に上がる</div>

## 両輪で、大学の研究力を二重に押し上げる

<div class="cv">
<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ad" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="60" y="168" width="180" height="96" rx="14" fill="#1A7A5E"/>
  <text x="150" y="210" font-size="22" fill="#fff" text-anchor="middle" font-weight="700">研究×学び</text>
  <text x="150" y="240" font-size="22" fill="#fff" text-anchor="middle" font-weight="700">アプリ</text>
  <path d="M240 198 L310 102" stroke="#1A7A5E" stroke-width="3.5" fill="none" marker-end="url(#ad)"/>
  <path d="M240 236 L310 330" stroke="#1A7A5E" stroke-width="3.5" fill="none" marker-end="url(#ad)"/>
  <rect x="315" y="70" width="210" height="64" rx="10" fill="#E4F2EC" stroke="#1A7A5E" stroke-width="1.5"/>
  <text x="420" y="99" font-size="19" fill="#1A7A5E" text-anchor="middle" font-weight="700">教員の負担 ↓</text>
  <text x="420" y="121" font-size="13" fill="#16624b" text-anchor="middle">定型支援をAIが肩代わり</text>
  <path d="M525 102 L598 102" stroke="#1A7A5E" stroke-width="3.5" fill="none" marker-end="url(#ad)"/>
  <rect x="600" y="70" width="232" height="64" rx="10" fill="#E4F2EC" stroke="#1A7A5E" stroke-width="1.5"/>
  <text x="716" y="108" font-size="19" fill="#1A7A5E" text-anchor="middle" font-weight="700">研究時間を捻出</text>
  <rect x="315" y="298" width="282" height="64" rx="10" fill="#E4F2EC" stroke="#1A7A5E" stroke-width="1.5"/>
  <text x="456" y="327" font-size="19" fill="#1A7A5E" text-anchor="middle" font-weight="700">大学院生が伸びる</text>
  <text x="456" y="349" font-size="13" fill="#16624b" text-anchor="middle">専用AIが学びに伴走</text>
  <path d="M832 102 C880 110 880 188 898 192" stroke="#1A7A5E" stroke-width="3.5" fill="none" marker-end="url(#ad)"/>
  <path d="M597 330 C760 330 800 256 898 250" stroke="#1A7A5E" stroke-width="3.5" fill="none" marker-end="url(#ad)"/>
  <rect x="900" y="150" width="260" height="140" rx="16" fill="#1A7A5E"/>
  <text x="1030" y="208" font-size="24" fill="#fff" text-anchor="middle" font-weight="700">研究力が</text>
  <text x="1030" y="248" font-size="26" fill="#fff" text-anchor="middle" font-weight="700">二重に向上 ↑↑</text>
  <rect x="60" y="300" width="180" height="70" rx="10" fill="#F2F2F2" stroke="#bbb"/>
  <text x="150" y="330" font-size="16" fill="#555" text-anchor="middle" font-weight="700">職員の手間も ↓</text>
  <text x="150" y="352" font-size="13" fill="#777" text-anchor="middle">窓口DXで省力化</text>
</svg>
</div>

<div class="takeaway">教員の時間と院生の成長、両輪で大学の研究力を押し上げる</div>

<!-- 最終スライド。アプリ→①教員の負担減で研究時間を捻出、②大学院生が伸びる、の二経路が合流して「研究力が二重に向上」。職員の手間減も併記。大学全体の研究力向上という学長の最大関心に着地。 -->
