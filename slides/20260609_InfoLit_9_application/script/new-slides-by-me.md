<!-- ============================================================
 田川オーサリング分（assembly時に所定位置へ差し込む）
 マーカー: @@SLIDE: <id> で各スライドを区切る
 ============================================================ -->

@@SLIDE: susumekata

<!-- _class: fig -->

<div class="page-title">本日の進め方</div>

## 90分の設計 ── 「8・20・90の法則」で、こまめに手を動かす

<div class="fig-area" style="margin-top:-10px">
<div class="grid2" style="gap:24px; align-items:start">
<div>

<div class="tl">
<div class="row"><div class="t">2分</div><div class="bar lec">① 第1タームお疲れ様＋お詫び</div></div>
<div class="row"><div class="t">8分</div><div class="bar lec">② 第8回の復習（地図／TCP-IP）</div></div>
<div class="row"><div class="t">10分</div><div class="bar wk">③ ワーク①：NotebookLM＋ペア <span class="sm">アナロジー・質問・学び方</span></div></div>
<div class="row"><div class="t">12分</div><div class="bar lec">④ メールのしくみ</div></div>
<div class="row"><div class="t">8分</div><div class="bar wk">⑤ ワーク②：自分のメールヘッダを読む</div></div>
<div class="row"><div class="t">10分</div><div class="bar lec">⑥ SSH・HTML・JavaScript</div></div>
</div>

</div>
<div>

<div class="tl">
<div class="row"><div class="t">10分</div><div class="bar wk">⑦ ワーク③：DevTools＋HTML作成</div></div>
<div class="row"><div class="t">体験</div><div class="bar wk">⑧ 体験①netlab1（旅の総復習）</div></div>
<div class="row"><div class="t">解説</div><div class="bar lec">⑨ TLS／SSL／HTTPS</div></div>
<div class="row"><div class="t">体験</div><div class="bar wk">⑩ 体験②netlab2（暗号・安全）</div></div>
<div class="row"><div class="t">予備</div><div class="bar lec">⑪ 残った話（時間があれば）</div></div>
<div class="row"><div class="t">締め</div><div class="bar lec">⑫ 次回予告（小テスト）・連絡</div></div>
</div>

<div class="cbox orange" style="margin-top:6px"><div class="h">8・20・90 とは</div><div class="b" style="font-size:16px">

- <span class="hl">8秒</span>：最初のつかみで「聞こう」と思える
- <span class="hl">20分</span>：集中の限界。約20分ごとに<span class="red">活動を切替</span>
- <span class="hl">90分</span>：1コマ＝1セッションの上限

</div></div>

</div>
</div>
</div>

<div class="takeaway"><span class="worktag">WORK</span> の回は手を動かす番。受け身にならず、隣の人と進めよう。</div>

<!-- 8-20-90の設計意図を最初に共有。講義(青)とワーク(橙)が交互に来ることを見せ、受講姿勢を作る。 -->

@@SLIDE: ssh

<!-- _class: split -->

<div class="page-title">SSH</div>

## SSH ＝ 遠くのコンピュータに「安全に」ログインする作法

<div class="split-body">
<div class="left">

<svg viewBox="0 0 380 260" width="100%" style="max-height:300px">
  <defs><marker id="ar-ssh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3C8A57"/></marker></defs>
  <g text-anchor="middle" font-size="14">
    <rect class="card" x="20" y="60" width="120" height="70" rx="10" fill="#fff" stroke="#A6192E" stroke-width="2.5"/><text x="80" y="92" font-weight="800" fill="#7d1322">手元のPC</text><text x="80" y="114" fill="#555" font-size="13">あなた</text>
    <rect class="card" x="240" y="60" width="120" height="70" rx="10" fill="#eef7ef" stroke="#3C8A57" stroke-width="2"/><text x="300" y="92" font-weight="700" fill="#3C8A57">遠くのサーバ</text><text x="300" y="114" fill="#555" font-size="13">研究室・クラウド</text>
    <rect x="120" y="150" width="140" height="30" rx="15" fill="#DDEBC8" stroke="#3C8A57"/><text x="190" y="170" font-size="13" font-weight="800" fill="#2f6b43">🔒 暗号化された通路</text>
    <path d="M142,86 L238,86" stroke="#3C8A57" stroke-width="2.5" fill="none" marker-end="url(#ar-ssh)"/>
    <text x="190" y="50" font-size="13" fill="#3C8A57" font-weight="700">コマンドで遠隔操作</text>
    <text x="190" y="210" font-size="13" fill="#555">画面が無くても、文字命令で動かせる</text>
  </g>
</svg>

</div>
<div class="right">

<div class="cbox green"><div class="h">遠隔ログインを暗号化したもの</div><div class="b">

- 目の前に無いサーバを<span class="red">手元から操作</span>できる
- 昔の TELNET は<span class="hl">平文</span>＝盗み見られた → 今は SSH
- 通信を<span class="red">暗号化</span>するので、合言葉も中身も守られる

</div></div>

<div class="cbox blue"><div class="h">どんな時に使う？</div><div class="b">

- 研究室・クラウドのサーバにログインして計算
- Web サイトの中身を更新（公開作業）
- 大きなデータの転送（SFTP／SCP）

</div></div>

<div class="band" style="font-size:18px">考え方は HTTPS と同じ ── <span class="hl">「遠隔操作＋暗号化」</span></div>

</div>
</div>

<div class="takeaway">SSH＝遠くのサーバに安全にログインする作法。HTTPSと同じ「暗号化」の発想。</div>

<!-- 工学部は研究室サーバ/クラウドで実際に使う。TELNET→SSHの歴史で「平文の危険」を再強調。 -->

@@SLIDE: nokotta-divider

<!-- _class: divider -->

<div class="chapter-num">STEP 11 ／ 予備</div>

# 授業で残った話

## 時間があれば ── Webの「動く裏側」と足あと

<!-- 時間調整用。HTTPの会話・GET/POST・Cookie・動的ページ・ログ・ストリーミングをここに集約。 -->

@@SLIDE: prompts-appendix

<!-- _class: summary -->

<div class="page-title">本日のプロンプト集</div>

## コピペで使える ── NotebookLM と Gem への指示

<div class="sections">

<div class="sec-box">

### ① NotebookLM（ワーク①）

<div class="promptcard"><div class="h">📋 第8回スライドを入れて貼る</div><div class="b">TCP/IPの4層を「宅配便」の比喩で説明して。専門用語は1つずつ日常語に言い換えて。最後に理解度チェックを3問つくって。</div></div>

</div>

<div class="sec-box">

### ② Gem：メールヘッダ解説（ワーク②）

<div class="promptcard"><div class="h">📋 ヘッダ全文を貼る</div><div class="b">次のメールヘッダを初学者にやさしく解説して。誰から誰へ／中継経路／<span class="red">From詐称の有無</span>／注意点。</div></div>

</div>

<div class="sec-box">

### ③ Gem：Web制作コーチ（ワーク③）

<div class="promptcard"><div class="h">📋 手書きHTMLを貼る</div><div class="b">このHTMLを STEP1=構造 → STEP2=CSSで装飾 → STEP3=JavaScriptで動き の順に、各コード全文と変更点を説明して。</div></div>

</div>

</div>

<div class="takeaway">プロンプトは「役割・入力・出してほしい形」を書くと精度が上がる。</div>

<!-- 当日スクリーンに出してコピペさせる用。詳細台本は script/lesson-plan-90min.md。 -->
