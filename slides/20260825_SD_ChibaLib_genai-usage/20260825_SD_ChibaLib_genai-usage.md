---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">生成AIの活用法について</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  :root {
    /* ── 附属図書館／アカデミック・リンクのティール（このデッキ限定の上書き。テーマ既定は変えない） ──
       出典：https://alc.chiba-u.jp/common/css/style.css の :root
             --base-color:#007069（サイトの主色。見出し・帯・罫線・ボタンに使用）
             --main-color:#00A095（明るい方。ホバー・タブ等の副次色）
             #B7EDEA（見出しのハイライト背景）
       accent-dark はサイトに定義が無いため #007069 を暗くして作成（白抜き文字で 8.8:1 を確保）。 */
    --accent: #007069;
    --accent-dark: #00544F;
    --accent-soft: #B7EDEA;
    --section-bg: #F2FAF9;
    /* ── ヘッダー幅の調整つまみ（値は現在の既定。数字を変えると効く） ── */
    --hdr-left-w: fit-content;  /* 左の題字帯の幅。固定したいときは例: 26% */
    --hdr-left-max: 38%;        /* 題字帯の上限幅（超えたら…で省略） */
    --pt-center: 44.3%;         /* 中央page-title帯の中心位置（50%=画面中央） */
    --pt-width: 38%;            /* page-title帯の幅。fit-contentも可能 */
    --pt-max: 40%;              /* page-title帯の上限幅 */
    /* 行長。テーマ既定は28em（=約27字）で、16:9だと右が大きく余り
       27〜30字の行が「ます」だけ折り返す。42em（=約40字）まで伸ばす */
    --measure: 42em;
  }
  /* ── 素のMarkdown箇条書きを「太字見出し＋説明」型（blist相当）で描く ──
     書き方:  - **見出しの文**
              説明の文。          ← divタグ不要 */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }
  /* 締めの「ありがとうございました」は控えめに（テーマ既定は96px） */
  section.qa h1 { font-size: 60px; letter-spacing: .06em; }
  /* 項目を塗りで囲む。使い方: <div class="boxed"> で箇条書きを包むだけ */
  .boxed ul > li {
    background: var(--fill); border-radius: var(--radius);
    padding: 11px 20px; margin: 0 0 11px;
  }
  .boxed ul > li:last-child { margin-bottom: 0; }
---

<!--
【たたき台】20260820_SD_Uekusa_genai-usage から3枚（リスク①／注意点①ハルシネーション／ループ）を
移植したもの。配色は植草の緑（#2F6B3A系）を、附属図書館／アカデミック・リンクのティール
（#007069系。出典は下の frontmatter のコメント）に置換済み。SVG内の色も同じ対応で置換している。

差し替え残件（確定後にこのメモを消す）：
1) ヘッダーのロゴ ── いまは暫定で ../assets/chiba-logo.png。
   アカデミック・リンクのマークを src/ に置いたら、frontmatter の header の src を1行差し替える。
2) 表紙のメタ情報 ── 研修の正式名称・開始終了時刻・会場が未確定（下記 S1 のコメント参照）。
3) 図書館業務の文脈への寄せ ── 移植した3枚の本文は植草（保育・福祉系の学校法人）向けの文言のまま。
   「貴学園」→「本学」等、および図書館業務の例への差し替えが必要。
-->

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">令和8年度 千葉大学附属図書館 SD研修</div>
<div class="title-big">生成AIの活用法について</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="../assets/profile.jpg" alt="田川 翔"></div>
<div class="title-meta">
<div class="title-event">2026年8月25日（火）　時間・会場は未定</div>
<div class="title-name">田川 翔</div>
<div class="title-affil">千葉大学 国際未来教育基幹／高等教育センター 助教</div>
</div>
</div>

<!-- 表紙。研修の正式名称・時刻・会場が未確定のため、title-small と title-event は仮置き。
     確定したら「令和8年度 第N回 …SD研修」「9:00–11:35　◯◯」の形に直す。 -->

---

<div class="page-title">リスク ①　情報の流出</div>

## 入力が守られるかは、料金ではなく「アカウントの契約体系」で決まります

<div class="tcols" style="grid-template-columns:1fr 1.05fr;">
<div style="align-self:center;">
<svg viewBox="0 0 460 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="組織契約・学習利用の設定・そもそも入力しない、という3段の守りを示す図" style="width:100%; height:auto;">
<rect x="10" y="4" width="440" height="84" rx="3" fill="#B7EDEA"/>
<text x="28" y="38" font-size="19" font-weight="700" fill="#00544F">① 貴学園のアカウントで入っているか</text>
<text x="28" y="70" font-size="17" fill="#262626">貴学園は契約あり。無償でも学習に使われない</text>
<path d="M220 94 L240 94 L230 108 Z" fill="#262626"/>
<rect x="10" y="112" width="440" height="84" rx="3" fill="#F1F1F1"/>
<text x="28" y="146" font-size="19" font-weight="700" fill="#262626">② 個人アカウントなら、設定をオフに</text>
<text x="28" y="178" font-size="17" fill="#5F5F5F">学習利用を止める（オプトアウト）</text>
<path d="M220 202 L240 202 L230 216 Z" fill="#262626"/>
<rect x="10" y="220" width="440" height="84" rx="3" fill="#B7EDEA" stroke="#007069" stroke-width="2.5"/>
<text x="28" y="254" font-size="19" font-weight="700" fill="#00544F">③ 迷う情報は、そもそも入れない</text>
<text x="28" y="286" font-size="17" fill="#262626">設定によらず、これが最後の砦</text>
</svg>

</div>
<div>

- **分かれ目は、どのアカウントで入るかです**
  例えば、大学契約のGoogleアカウントのGeminiは、無償でも学習に使われません。
  機密を入れてよいという規定を作った大学もあります。
- **個人アカウントは、初期設定だと学習に使われます**
  設定でオフにできますが、ChatGPTなど原則学習するものもあります。
  <span class="ss-tune" style="color:#00544F !important">学校の機密を扱うには、そもそも向きません。</span>
- **迷う情報は、そもそも入力しないのが確実です**
  個人情報や機密は組織が許可したものしか入れない。

</div>
</div>

<div class="takeaway">使い始める前に、データの扱いを一度だけ確認してください</div>

<!-- 軸は「無料か有料か」ではなく「どのアカウントで入っているか」。同じ gemini.google.com でも、個人アカウントなら消費者向け規約、大学アカウントなら Workspace for Education の規約が適用される。出典：Google 公式ヘルプ「Gemini アプリは、エンタープライズ級のデータ保護を備えたコアサービスとして、すべての Education エディションで使用できます」「ライセンスなしの Education Fundamentals ユーザーの場合：チャットとアップロードされたファイルは、人間のレビュアーが確認することも、生成 AI モデルの改善に使用されることもありません」。設定画面は当日デモでもよい。
     【要差し替え】図中と本文の「貴学園」は植草学園向けの文言。図書館SD版では「本学」に直し、本学の契約状況（Google Workspace for Education / Microsoft 365）を確認したうえで書く。 -->

---

<div class="page-title">注意点 ①　ハルシネーション</div>

## 知らないことも、それらしく答えてしまいます

<div class="tcols fig-left">
<div>

<svg viewBox="0 0 600 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AIが実在しない文献を書式まで整えて出した例と、それが架空である旨の注記" style="width:100%; height:auto;">
<rect x="6" y="6" width="588" height="52" rx="6" fill="#F1F1F1"/>
<text x="26" y="39" font-size="18" fill="#262626">質問：保育士の離職について、論文を教えて</text>
<path d="M292 62 L312 62 L302 74 Z" fill="#8A8A8A"/>
<rect x="6" y="80" width="588" height="142" rx="6" fill="#FAFAFA" stroke="#D6D6D6" stroke-width="1.5"/>
<text x="26" y="108" font-size="18" font-weight="700" fill="#8A8A8A">回答</text>
<text x="26" y="142" font-size="19" fill="#262626">山田 花子・鈴木 一郎（2021）</text>
<text x="26" y="174" font-size="19" fill="#262626">「保育者の離職意向と職場環境の関連」</text>
<text x="26" y="206" font-size="19" fill="#262626">保育学研究, 59(2), 112–125.</text>
<rect x="6" y="238" width="588" height="98" rx="6" fill="#FBF6EC" stroke="#B45309" stroke-width="2.5"/>
<text x="26" y="270" font-size="18" font-weight="700" fill="#B45309">この論文は存在しません</text>
<text x="26" y="304" font-size="18" fill="#262626">著者名も巻号もページも、それらしく作られています</text>
</svg>
<div class="cap">AIが作り出した架空の文献の例（再現）。書式が整うほど気づけません</div>

</div>
<div>

- <span class="ss-tune" style="color:#00544F !important">**ハルシネーション：事実でない内容を出します**</span>
  書式まで整っているので、信じてしまいます。
- <span class="ss-tune" style="color:#00544F !important">**カットオフ：知識には「収集」の期限があります**</span>
  それ以降の出来事は、検索機能を使わない限り知りません。
- **対策は、出典を出させて原典で確かめることです**
  文献名で検索すれば、存在しないことはすぐ分かります。
  (あるかどうかの判別は、AIも上手です。)

</div>
</div>

<div class="takeaway">事実の最終確認は、人の仕事として残ります</div>

<!-- 「仕組み上そうなる」と前半の内容につなげると腹落ちしやすい。図の文献は架空（説明用に作った再現例）で、実在の論文ではない。当日は「この誌名で検索しても出てきません」と実演してもよい。
     【要差し替え】図の質問文が「保育士の離職について」（植草の専門分野）。図書館SD版では、レファレンス業務で実際に来そうな問い合わせに寄せると刺さる。存在しない文献の照会＝図書館のカウンターに実際に来ている話なので、ここは本デックの目玉になり得る。 -->

---

<div class="page-title">直しながら使う</div>

## ループが大切： 一発で正解を求めず、直しながら使います

<div class="tcols fig-left">
<div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -6 740 616" preserveAspectRatio="xMidYMid meet" style="max-height:462px;max-width:100%;height:auto;display:block;margin:0 auto"><defs><marker id="ooda-arrow-lib" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#007069"/></marker></defs><rect x="200" y="230" width="200" height="140" rx="6" ry="6" fill="#fff" stroke="#007069" stroke-width="3"/><text x="300" y="286" text-anchor="middle" font-size="34" font-weight="700" fill="#007069">OODA</text><text x="300" y="318" text-anchor="middle" font-size="24" fill="#333">Loop</text><text x="300" y="350" text-anchor="middle" font-size="19" fill="#5F5F5F">(主語：人間)</text><path d="M 380 130 A 240 240 0 0 1 470 220" fill="none" stroke="#007069" stroke-width="4" marker-end="url(#ooda-arrow-lib)"/><path d="M 470 380 A 240 240 0 0 1 380 470" fill="none" stroke="#007069" stroke-width="4" marker-end="url(#ooda-arrow-lib)"/><path d="M 220 470 A 240 240 0 0 1 130 380" fill="none" stroke="#007069" stroke-width="4" stroke-dasharray="8,6" marker-end="url(#ooda-arrow-lib)"/><path d="M 130 220 A 240 240 0 0 1 220 130" fill="none" stroke="#007069" stroke-width="4" marker-end="url(#ooda-arrow-lib)"/><circle cx="300" cy="80" r="76" fill="#B7EDEA" stroke="#007069" stroke-width="3"/><text x="300" y="72" text-anchor="middle" font-size="30" font-weight="700" fill="#007069">Observe</text><text x="300" y="106" text-anchor="middle" font-size="21" fill="#333">観る</text><text x="214" y="46" text-anchor="end" font-size="22" font-weight="600" fill="#262626">AIの出力を見る</text><text x="214" y="72" text-anchor="end" font-size="19" fill="#5F5F5F">（HITLで確認）</text><circle cx="520" cy="300" r="76" fill="#B7EDEA" stroke="#007069" stroke-width="3"/><text x="520" y="292" text-anchor="middle" font-size="30" font-weight="700" fill="#007069">Orient</text><text x="520" y="326" text-anchor="middle" font-size="21" fill="#333">状況判断</text><text x="566" y="446" text-anchor="middle" font-size="22" font-weight="600" fill="#262626">自分の知識と照らす</text><circle cx="300" cy="520" r="76" fill="#B7EDEA" stroke="#007069" stroke-width="3"/><text x="300" y="512" text-anchor="middle" font-size="30" font-weight="700" fill="#007069">Decide</text><text x="300" y="546" text-anchor="middle" font-size="21" fill="#333">意思決定</text><text x="390" y="556" text-anchor="start" font-size="22" font-weight="600" fill="#262626">採用 / 修正 / 棄却</text><text x="390" y="583" text-anchor="start" font-size="19" fill="#5F5F5F">（使うかどうか決める）</text><circle cx="80" cy="300" r="76" fill="#B7EDEA" stroke="#007069" stroke-width="3"/><text x="80" y="292" text-anchor="middle" font-size="30" font-weight="700" fill="#007069">Act</text><text x="80" y="326" text-anchor="middle" font-size="21" fill="#333">実行</text><text x="34" y="446" text-anchor="middle" font-size="22" font-weight="600" fill="#262626">再プロンプト／実装</text><rect x="417" y="34" width="206" height="126" rx="8" ry="8" fill="#FBF6EC" stroke="#B45309" stroke-width="2.5"/><text x="520" y="78" text-anchor="middle" font-size="29" font-weight="700" fill="#B45309">Pause（確認）</text><text x="520" y="112" text-anchor="middle" font-size="20" fill="#333">私はこの出力を</text><text x="520" y="140" text-anchor="middle" font-size="20" fill="#333"><tspan font-weight="700">評価できる</tspan>か？</text><line x1="520" y1="160" x2="520" y2="222" stroke="#B45309" stroke-width="2.5"/></svg>
</div>
<div>

- **観る → 照らす → 決める → 再依頼、を回します**
  途中に「私はこの出力を評価できるか」の確認を挟みます。
- **最初の答えの出来は、あまり重要ではありません**
  2周目・3周目で良くなります。
- **使わないことには、上手になりません**
  試し、修正し、ループすることが上達の近道です。

</div>
</div>

<div class="takeaway">「試す → 直す」を回した経験で、上手になっていきます</div>

<!-- OODAループ。ワークを入れるなら、ここで「このループを体験してもらう」と予告する。 -->
