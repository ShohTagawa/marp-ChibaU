---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">高等教育／研究センターの現状と未来</div><div class="hdr-event"><span class="no">第43回</span><span class="nm">関東地区大学教育研究会</span></div>'
footer: ''
style: |
  :root {
    /* ── ヘッダー幅の調整つまみ（値は既定。数字を変えると効く） ── */
    --hdr-left-w: fit-content;  /* 左の題字帯の幅。固定したいときは例: 26% */
    --hdr-left-max: 40%;        /* 題字帯の上限幅（超えたら…で省略） */
    --pt-center: 56%;           /* 中央page-title帯の中心位置（50%=画面中央）。題字が長いので右へ寄せる */
    --pt-width: 50%;    /* page-title帯の幅。固定したいときは例: 26% */
    --pt-max: 40%;              /* page-title帯の上限幅 */
    /* 行長。テーマ既定は28em。表・2カラム中心のデッキなので少し伸ばす */
    --measure: 42em;
  }
  /* ── ヘッダー右端の「イベント名ロゴ」（ロゴ画像の代わりに文字で組む） ──
     1行目 = 回数（小）、2行目 = 会名（大）。数字を変えると効く */
  section > header .hdr-event {
    margin-left: auto; margin-right: 28px;
    display: flex; flex-direction: column; align-items: flex-end;
    line-height: 1.15; color: var(--accent); white-space: nowrap;
  }
  section > header .hdr-event .no { font-size: 18px; font-weight: 700; letter-spacing: .12em; }
  section > header .hdr-event .nm { font-size: 22px; font-weight: 700; letter-spacing: .05em; }
  /* ── 素のMarkdown箇条書きを「太字見出し＋説明」型（blist相当）で描く ──
     書き方:  - **見出しの文**
              説明の文。          ← divタグ不要 */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }
  /* 表：1列目（資料名）を太字に。列幅は各スライドの scoped style で指定 */
  section table td:first-child { font-weight: 700; }
  /* 締めの「ありがとうございました」は控えめに（テーマ既定は96px） */
  section.qa h1 { font-size: 60px; letter-spacing: .06em; }
---

<!-- _class: cover-hero -->

<style scoped>
  section.cover-hero .title-big { font-size: 54px; line-height: 1.3; }
</style>

<div class="title-hero">
<div class="title-small">第43回 関東地区大学教育研究会 シンポジウム ｜ 話題提供</div>
<div class="title-big">大学における<br>高等教育／研究センターの現状と未来</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="../assets/profile.jpg" alt="田川 翔"></div>
<div class="title-meta">
<div class="title-event">2026年9月2日（水）15:15–18:00　千葉大学附属図書館本館 コンテンツスタジオ「ひかり」</div>
<div class="title-name">田川 翔</div>
<div class="title-affil">千葉大学 国際未来教育基幹／高等教育センター 助教</div>
</div>
</div>

<!-- 表紙。日時・会場は広島大学高等教育研究開発センターの案内ページ（https://rihe.hiroshima-u.ac.jp/2026/07/9-2-kanto/）の記載どおり。登壇：石井雅章（神田外語大）・杉原亨（淑徳大）・松本暢平・田川翔・岡山咲子（千葉大）、司会：出光直樹（横浜市大）。 -->

---

<div class="page-title">自己紹介</div>

<style scoped>
  section .figrow img { align-self: center; width: auto; max-width: 100%; }
  /* このスライドだけ一回り大きく（投影時の可読性）。数字を変えると効く */
  section    { font-size: 26px; }   /* 本文（.d の説明文） */
  section h2 { font-size: 36px; }   /* 見出し */
  .cap       { font-size: 22px; }   /* 写真の見出しラベル */
  .name      { font-size: 24px; color: var(--ink-weak); margin: -.35em 0 .5em; }
  .name b    { font-size: 28px; color: var(--accent-dark); margin-right: .5em; }
</style>

## 理学から民間を経て、いまはセンターで教育の実務を回しています

<div class="name"><b>田川 翔</b>千葉大学 国際未来教育基幹／高等教育センター 助教（2024年2月着任）</div>

<div class="body">

<div class="figrow">
<div>

<img src="./src/fig02a-intro-earth.png" alt="地球内部の研究" style="height:200px; width:auto;">
<div class="cap">理学（地球科学）</div>
<div class="d">地球の内部を高圧実験で調べる研究者でした。博士（理学）。</div>

</div>
<div>

<img src="./src/fig02b-intro-cargo.jpg" alt="貨物航空" style="height:200px; width:auto;">
<div class="cap">民間（航空貨物）</div>
<div class="d">現場のオペレーションと、全社システム更新を経験しました。</div>

</div>
<div>

<img src="./src/fig02c-intro-ffp.png" alt="大学教育" style="height:200px; width:auto;">
<div class="cap">大学教育</div>
<div class="d">東大の大学総合教育研究センターを経て、千葉大学へ来ました。</div>

</div>
</div>

</div>

<div class="takeaway">教員・職員・学生の三者と一緒に、全学の仕組みを動かす側にいます</div>

<!-- 30秒〜1分。経歴の詳細より「センターの若手として、現場の実務を回している人間」であることを伝える。東大では2020〜21年に大学総合教育研究センター特任助教としてコロナ禍のオンライン授業支援（utelecon）に関わった。 -->

---

<div class="page-title">センターでの持ち場</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 22%; }
  section table th:nth-child(2), section table td:nth-child(2) { width: 30%; }
</style>

## 趣旨文にある4つの機能に、私の仕事をあてはめると次のようになります

<div class="body">

| センターの機能 | 私の持ち場 | 具体的な仕事 |
|---|---|---|
| FD推進 | 全学FD・プレFD・学外FD/SD | 3つのポリシーFD、大学院プレFD、他大学の生成AI研修 |
| 教学マネジメント | 3つのポリシー見直しPT | 令和10年度入学者から適用する全学・部局ポリシーの再設計 |
| IR高度化 | 授業評価アンケート・学修記録 | アンケート活用FD、学修記録を使う学生支援アプリの設計 |
| 学生支援専門化 | 生成AIリテラシの授業・講座 | 情報リテラシー、生成AI活用講座、図書館での教職員講座 |

</div>

<div class="takeaway">4機能のどれも、教職協働のプロジェクトとして動かしています</div>

<!-- 「FD推進に加え、教学マネジメント確立、IR高度化、学生支援専門化」は本シンポジウム趣旨文の文言。3ポリシーPTは高等教育センター・教育企画課・入試課・企画政策課の連携で延べ14名（田川ほか 2026「3つのポリシーの構造化の事例」）。 -->

---

<div class="page-title">資料 ①　学生向けの授業</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 27%; }
  section table th:nth-child(2), section table td:nth-child(2) { width: 13%; white-space: nowrap; }
  section table th:nth-child(3), section table td:nth-child(3) { width: 22%; }
</style>

## 学部1年から大学院まで、生成AIリテラシを段階的に積み上げています

<div class="body">

| 資料（授業） | 対象 | 形式 | シンポジウムで伝えたいこと |
|---|---|---|---|
| 情報リテラシー（全学教育） | 工学部1年 | オンデマンド＋対面 | ネットワーク・セキュリティ・倫理を、Colab と Gems で手を動かして学ぶ |
| 生成AI活用講座 | 学部生 | ワークショップ | Dify・NotebookLM・Colab で AI アプリを作るグループワーク |
| 研究における生成AIの活用法 | 大学院生 | 講義 | 倫理とリテラシー、仕組み、研究公正（学術誌の AI 規定）を扱う |
| プレFD | 大学院生 | 講義＋模擬授業 | 到達目標・評価・シラバスの設計を、次世代教員に手渡す |

</div>

<div class="takeaway">「使い方」ではなく「仕組みと規定」から教えると、学生は自分で判断できます</div>

<!-- 情報リテラシーは2026年度 第4〜11回を担当（オンデマンド回と対面回の組合せ）。生成AI活用講座は2025年度 第1〜7回・2026年度 WS1〜8＋S1〜5。研究における生成AIの活用法は第1回（倫理・リテラシー）、第3回（仕組み）、第4回（研究公正・Science誌の規定）など。プレFDは2024年度から担当（バックワードデザイン、ブルーム、シラバス、6分模擬授業）。 -->

---

<div class="page-title">資料 ②　教職員向け</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 27%; }
  section table th:nth-child(2), section table td:nth-child(2) { width: 15%; }
  section table th:nth-child(3), section table td:nth-child(3) { width: 24%; }
</style>

## 図書館を拠点に、教職員のAIリテラシも同じ流儀で育てています

<div class="body">

| 資料 | 対象 | 形式・時期 | シンポジウムで伝えたいこと |
|---|---|---|---|
| 15-min sessions／1210あかりんアワー | 本学教職員 | アカデミック・リンク、2026年4〜7月 全6回 各60分 | 大学アカウントで定型作業を AI に任せる。対面とオンラインの選択制 |
| 学外の FD・SD 研修 | 他大学の教職員 | 明海大・立正大・東大 EIP・植草学園・附属図書館（2026年6〜8月） | 「守り（データ・ハルシネーション）」と「攻め（OODA で直しながら使う）」を一つの研修に |
| 『Teaching with AI』日本語版（編訳） | 大学教員 | 技術評論社、2027年3月刊行予定 | 3部15章＋日本向けコラム7本。日本の大学の生成AIポリシーを書き下ろし |

</div>

<div class="takeaway">学生・教職員・次世代教員を、同じセンターが一体で育てられます</div>

<!-- 15-min sessions の回数・時間は植草学園SD研修デッキの注記（2026年4〜7月・全6回・各60分・対面とオンラインの選択制）に合わせた。学外研修の日付：明海大FD 7/2、立正大 6/20、東大EIP 7/13、植草学園SD 8/20、附属図書館SD 8/25。『Teaching with AI』は Bowen & Watson 第2版、田川翔 編訳。邦題は資料により『AI時代の教育』『AI時代の大学教育』の2表記があるため、ここでは原題で書いた（要確認）。 -->

---

<div class="page-title">資料 ③　教学マネジメント</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 29%; }
  section table th:nth-child(2), section table td:nth-child(2) { width: 29%; }
</style>

## ポリシーの構造化と、学修データを使う支援を同時に進めています

<div class="body">

| 資料 | 形式・時期 | シンポジウムで伝えたいこと |
|---|---|---|
| 3つのポリシーの見直し | 全学FD研修（2026年6月） | 令和10年度入学者から適用。部局 DP を「学生が○○できる」の測れる目標に書き直す |
| 「3つのポリシーの構造化の事例」 | 高等教育質保証学会 第15回大会 ポスター（2026年8月） | 全学と部局の関係を階層型・置換え型・付加型・並列型の4つで整理し、DP は階層型へ |
| 学修支援アプリ AcaLin | 理事向け説明（2026年6月）。学内予算を獲得 | 学修記録で学生の体験を改善する。学生のオプトインを前提に設計 |
| 若手研究「AIクロス型」教育プログラムの比較とモデル化 | 科研費（2026〜2029年度） | 専門と経験を起点に、分野ごとの AI の教え方をプログラム比較で明らかにする |

</div>

<div class="takeaway">「測れる目標」と「学修データ」が揃うと、センターは改革の起点になれます</div>

<!-- 3ポリシーPT：高等教育センター・教育企画課・入試課・企画政策課の連携、延べ14名。打合せは令和6年度6回・令和7年度7回。学会発表は田川翔・伊藤彰一・竹内比呂也・佐藤之彦・3つのポリシーPT（千葉大学）、高等教育質保証学会第15回大会（2026年8月29–30日・横浜市立大学）。AcaLin は 2026-05-29 執行部向け「研究×学び アプリ」、2026-06-11 理事向け「AcaLinApp開発プロジェクト」。科研費の正式課題名は「専門と経験を起点とする『AIクロス型』教育プログラムの比較とモデル化」（若手研究、KAKEN 研究者番号 60882826）。授業評価アンケートFD（2024年10・11月）は「センターでの持ち場」のIR欄で触れる。 -->

---

<div class="page-title">『Teaching with AI』から</div>

<style scoped>
  section table { font-size: 20px; }
  section table th:nth-child(1), section table td:nth-child(1) { width: 36%; }
  section table th:nth-child(2), section table td:nth-child(2) { width: 22%; }
</style>

## 本の章立てが、そのままセンターの機能に対応しています

<div class="body">

| 章（Bowen & Watson 第2版） | センターの機能 | 論点 |
|---|---|---|
| 第5章 AIリテラシー | 学生支援・教育 | 学生と教職員の AI リテラシを、誰が・どこで育てるか |
| 第9章 ポリシー＋コラム4「日本の大学における生成AIポリシー」 | 教学マネジメント | 全学ポリシーを作って終わりにせず、更新し続ける体制 |
| 第11章 フィードバック・ロールプレイ・チュータリング | 学生支援専門化 | AI チューターと人の伴走を、どう組み合わせるか |
| 第12章 人の努力を考慮した課題と評価のデザイン | FD推進 | 評価の再設計を、FD の中心課題に据える |

</div>

<div class="takeaway">「AIと共に考える・教える・学ぶ」の3部構成は、センターの仕事の地図になります</div>

<!-- 原著は Bowen & Watson, Teaching with AI, 2nd ed.（Johns Hopkins University Press）。日本語版は3部（Part I AIと共に考える／Part II AIと共に教える／Part III AIと共に学ぶ）15章に、日本向けコラム7本（学校での利活用制限・大学の生成AIポリシー・教員養成・授業設計・日本の教育の未来など）を編訳者が書き下ろす。章タイトルは翻訳原稿の構成に合わせた。 -->

---

<div class="page-title">未来に向けて</div>

## 若手の立場から、センターの次の役割を3つ提案します

<div class="body">

- **回す：全学の仕組みを、教職協働のプロジェクトで動かします**
  3つのポリシー見直しは、4部署・延べ14名のチームで2年かけて進めました。
- **育てる：学生・教職員・次世代教員のAIリテラシを一体で扱います**
  授業、図書館の講座、プレFDを、同じ流儀でつなげます。
- **つなぐ：学修データとAIで、情報と支援を学生に届けます**
  学修記録を使う伴走型の支援を、学生のオプトインを前提に設計します。

</div>

<div class="takeaway">センターは、全学の教育改革を教職協働で回すエンジンでありたい</div>

<!-- 趣旨文の「全学的教育改革のエンジンとしての組織のあり方」に対する私の答え。3点の根拠は前の3枚の資料一覧。ディスカッションでは「若手教員の視点」を求められているので、実務で手を動かしている立場からの提案として話す。 -->

---

<div class="page-title">境界を越える</div>

<style scoped>
  section blockquote { font-size: 23px; color: var(--ink); line-height: 1.7; margin-bottom: .3em; }
  .six { display: grid; grid-template-columns: 1fr 1fr 1.25fr; gap: 4px 20px; margin: .3em 0 .9em; white-space: nowrap; }
  .six b { color: var(--accent-dark); }
</style>

## センターの仕事は、「境界を越えるリーダーシップ」そのものです

<div class="body">

> 「バウンダリー・スパニング・リーダーシップ」は、より高いビジョンやゴールをめざし、集団の境界を越えて方向性、団結力、責任感を築く能力である。

<div class="cite">アーンスト＆クロボット=メイソン（三木俊哉 訳）『組織の壁を越える――「バウンダリー・スパニング」6つの実践』英治出版, 2018, p.11</div>

<div class="six">
<div><b>① バッファリング</b>　和らげる</div>
<div><b>② リフレクティング</b>　映し返す</div>
<div><b>③ コネクティング</b>　つなげる</div>
<div><b>④ モビライジング</b>　結集させる</div>
<div><b>⑤ ウィービング</b>　織り合わせる</div>
<div><b>⑥ トランスフォーミング</b>　変容させる</div>
</div>

- **越える境界は、垂直・水平、ステークホルダー、人口属性、地理の4種です**
  センターでは、教員と職員、部局と全学、大学と社会の境界にあたります。

</div>

<div class="takeaway">各集団が単独では出せない成果「ネクサス効果」を、センターが生み出す</div>

<!-- 出典は『組織の壁を越える』pp.10–11（序文部分）。p.10：「バウンダリー・スパニング・リーダーシップ（境界・壁を越えるリーダーシップ）」と呼ぶ新しい実践が必要になり、リーダーは異なる情報源や視点を組み合わせて「ネクサス効果」（各集団が一致協力して達成できる、単独では達成できない無限の可能性や優れた成果）を生み出す。p.11：リーダーシップの優位性は、異なる情報や人間をうまく統合できる人や組織が手にする。境界の種類（垂直・水平・ステークホルダー・人口属性・地理）と6つの実践（Buffering／Reflecting／Connecting／Mobilizing／Weaving／Transforming）の結果、「いまある境界があすには限界なきフロンティアに変化する」。
     【要確認】6つ目の訳語：手元のメモは「変好させること」となっていたので「変容させる」に直した。原書の該当ページで確認する。 -->

---

<!-- _class: qa -->

<div class="page-title">おわりに</div>

# ありがとうございました

## researchmap：https://researchmap.jp/shoh.tagawa

<!-- 締め。資料はこのデッキを PDF で共有できる。 -->
