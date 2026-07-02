---
marp: true
theme: ponchie
paginate: false
size: 16:9
header: ''
footer: ''
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg" font-family="'Hiragino Sans','Hiragino Kaku Gothic ProN','Yu Gothic',sans-serif">
  <defs>
    <linearGradient id="gCrim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a3123a"/><stop offset="1" stop-color="#6f0c27"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d6f8b"/><stop offset="1" stop-color="#0e4f63"/></linearGradient>
    <linearGradient id="gGreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a9d6f"/><stop offset="1" stop-color="#147a52"/></linearGradient>
    <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6c14b"/><stop offset="1" stop-color="#e8a83a"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#a3123a" stop-opacity="0.10"/><stop offset="1" stop-color="#a3123a" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#3a2530" flood-opacity="0.22"/></filter>
    <marker id="aT" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1d6f8b"/></marker>
    <marker id="aG" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2a9d6f"/></marker>
    <marker id="aR" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#a3123a"/></marker>
    <marker id="aGy" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#5b6b78"/></marker>
  </defs>
  <rect width="1280" height="720" fill="#ffffff"/>

  <!-- ===== ヘッダ ===== -->
  <rect x="0" y="0" width="1280" height="52" fill="url(#gCrim)"/>
  <text x="28" y="34" font-size="21" font-weight="700" fill="#ffffff">学生の行動と共に成長する『大学体験オントロジー』の構築 ― 大学の場を活かすAIとデジタルツインにむけて</text>

  <!-- ===== 問い・実現像・背景 ===== -->
  <rect x="24" y="62" width="1232" height="70" rx="11" fill="#fdf0f4" stroke="#e7bccb" stroke-width="1.3"/>
  <circle cx="56" cy="97" r="19" fill="url(#gCrim)"/><text x="56" y="105" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">?</text>
  <text x="86" y="86" font-size="17" font-weight="700" fill="#a3123a">核心の問い　<tspan fill="#243040" font-size="16.5">「場がもたらす体験の構造は、行動ログから発見できるか」</tspan></text>
  <text x="86" y="108" font-size="13.5" font-weight="700" fill="#a3123a">答えられれば：余白のある回答・4年間のコンパスとなるAI・多様な学修者への貢献 ―「大学の場」の価値が実現する</text>
  <text x="86" y="126" font-size="12" fill="#7a5763">高等教育の大問題：知識の伝達が場所を選ばなくなる中、大学の固有価値は「場の学び」へ（知の総和答申2025）― だが体験の次元には記述形式がなく、AIも大学も参照できない</text>

  <!-- ===== 工程1 基盤 ===== -->
  <rect x="24" y="142" width="252" height="150" rx="13" fill="#f2f8fa" stroke="#bcd7e1" stroke-width="1.4" filter="url(#sh)"/>
  <circle cx="52" cy="168" r="15" fill="url(#gTeal)"/><text x="52" y="174" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">1</text>
  <text x="76" y="174" font-size="16" font-weight="700" fill="#0e4f63">基盤（オプトイン環境）</text>
  <g font-size="13" fill="#243040">
    <text x="44" y="198">・同意（撤回・閲覧可）・匿名化</text>
    <text x="44" y="216">・アクセス制御／オプトアウト</text>
    <text x="44" y="234">・Google Cloud 標準サービス</text>
    <text x="44" y="252">・専門家コンサル＋倫理審査</text>
  </g>
  <rect x="118" y="264" width="146" height="21" rx="10.5" fill="#ffffff" stroke="#1d6f8b" stroke-width="1.4"/>
  <text x="191" y="279" font-size="11.5" font-weight="700" fill="#0e4f63" text-anchor="middle">成果物① 動く基盤</text>
  <polygon points="57,298 83,298 70,318" fill="#1d6f8b"/>

  <!-- ===== 工程2 収集 ===== -->
  <rect x="24" y="322" width="252" height="164" rx="13" fill="#f2f8fa" stroke="#bcd7e1" stroke-width="1.4" filter="url(#sh)"/>
  <circle cx="52" cy="348" r="15" fill="url(#gTeal)"/><text x="52" y="354" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">2</text>
  <text x="76" y="354" font-size="16" font-weight="700" fill="#0e4f63">収集</text>
  <rect x="130" y="336" width="132" height="24" rx="12" fill="url(#gTeal)"/><text x="196" y="353" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">期間中ずっと連続運用</text>
  <g font-size="12.5" fill="#243040">
    <text x="44" y="378">・数十名規模のパイロットから開始</text>
    <text x="44" y="395">・イベント参加・関心・質問</text>
    <text x="44" y="412">・ふりかえり記述（任意）</text>
    <text x="44" y="429">・既存：アカデミック・リンク・</text>
    <text x="56" y="446">センターの学習イベント参加記録</text>
  </g>
  <text x="44" y="462" font-size="12" font-weight="700" fill="#a3123a">学生が閲覧・修正＝開示の主導権は学生に</text>
  <rect x="118" y="468" width="146" height="21" rx="10.5" fill="#ffffff" stroke="#1d6f8b" stroke-width="1.4"/>
  <text x="191" y="483" font-size="11.5" font-weight="700" fill="#0e4f63" text-anchor="middle">成果物② データベース</text>
  <polygon points="284,387 284,413 304,400" fill="#a3123a"/>

  <!-- ===== 工程3 構造化（中央パネル） ===== -->
  <ellipse cx="640" cy="320" rx="280" ry="170" fill="url(#glow)"/>
  <rect x="318" y="142" width="646" height="344" rx="16" fill="#ffffff" stroke="#e7bccb" stroke-width="1.6" filter="url(#sh)"/>
  <circle cx="348" cy="170" r="15" fill="url(#gCrim)"/><text x="348" y="176" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">3</text>
  <text x="372" y="176" font-size="16" font-weight="700" fill="#a3123a">構造化：個人知識ベース → 集約 → 大学体験オントロジー第1版（OWL）</text>

  <!-- 個人知識ベース（左：学生ごとのカード） -->
  <g filter="url(#sh)">
    <rect x="344" y="212" width="150" height="52" rx="9" fill="#fdf6f8" stroke="#d9a3b5" stroke-width="1.2"/>
    <rect x="352" y="228" width="150" height="52" rx="9" fill="#fdf6f8" stroke="#d9a3b5" stroke-width="1.2"/>
    <rect x="360" y="244" width="150" height="52" rx="9" fill="#ffffff" stroke="#a3123a" stroke-width="1.5"/>
  </g>
  <text x="435" y="266" font-size="13.5" font-weight="700" fill="#a3123a" text-anchor="middle">個人知識ベース</text>
  <text x="435" y="284" font-size="12" fill="#5a2233" text-anchor="middle">学生ごとの体験の軌跡</text>
  <text x="435" y="322" font-size="12" fill="#7a5763" text-anchor="middle">LLMで自動生成</text>

  <!-- 集約（統一三角形） -->
  <polygon points="524,255 524,281 546,268" fill="#a3123a"/>
  <text x="552" y="252" font-size="12.5" font-weight="700" fill="#a3123a">集約・正規化</text>

  <!-- オントロジーのミニグラフ（右） -->
  <g>
    <circle cx="672" cy="228" r="26" fill="url(#gTeal)" filter="url(#sh)"/><text x="672" y="224" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">留学</text><text x="672" y="238" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">説明会</text>
    <circle cx="800" cy="212" r="26" fill="url(#gTeal)" filter="url(#sh)"/><text x="800" y="208" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">海外</text><text x="800" y="222" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">体験</text>
    <circle cx="694" cy="322" r="26" fill="url(#gGreen)" filter="url(#sh)"/><text x="694" y="318" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">図書の</text><text x="694" y="332" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">関心</text>
    <circle cx="822" cy="306" r="26" fill="url(#gGreen)" filter="url(#sh)"/><text x="822" y="302" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">ゼミ・</text><text x="822" y="316" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">共同体</text>
    <circle cx="906" cy="248" r="24" fill="#ffffff" stroke="#a3123a" stroke-width="2" filter="url(#sh)"/><text x="906" y="244" font-size="11" font-weight="700" fill="#a3123a" text-anchor="middle">渡航</text><text x="906" y="258" font-size="11" font-weight="700" fill="#a3123a" text-anchor="middle">支援</text>
    <line x1="700" y1="222" x2="772" y2="214" stroke="#1d6f8b" stroke-width="2.6" marker-end="url(#aT)"/>
    <text x="736" y="204" font-size="11.5" fill="#0e4f63" text-anchor="middle">先行体験</text>
    <line x1="722" y1="316" x2="794" y2="308" stroke="#2a9d6f" stroke-width="2.6" marker-end="url(#aG)"/>
    <text x="758" y="300" font-size="11.5" fill="#147a52" text-anchor="middle">つながり</text>
    <line x1="898" y1="270" x2="822" y2="212" stroke="#a3123a" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#aR)"/>
    <text x="880" y="296" font-size="11.5" fill="#a3123a" text-anchor="middle">障壁を下げる</text>
    <line x1="690" y1="252" x2="692" y2="294" stroke="#5b6b78" stroke-width="2.2" marker-end="url(#aGy)"/>
    <text x="662" y="276" font-size="11.5" fill="#5b6b78" text-anchor="middle">前提</text>
  </g>
  <rect x="766" y="338" width="176" height="21" rx="10.5" fill="#ffffff" stroke="#a3123a" stroke-width="1.4"/>
  <text x="854" y="353" font-size="11.5" font-weight="700" fill="#a3123a" text-anchor="middle">成果物③ 第1版＋検証結果</text>

  <!-- 検証ループ -->
  <rect x="344" y="368" width="596" height="92" rx="12" fill="#f4faf7" stroke="#bfe0d0" stroke-width="1.4"/>
  <path d="M394 414 a22 22 0 1 1 6 15" fill="none" stroke="#2a9d6f" stroke-width="4" marker-end="url(#aG)"/>
  <text x="446" y="396" font-size="14.5" font-weight="700" fill="#147a52">検証と反復改善 ― 教員・大学院生RA・学生本人でアノテーション</text>
  <text x="446" y="420" font-size="13" fill="#243040">指標：根拠の紐づけ率（出典ログとの対応）／評価者間の一致度／想定質問への回答可能性</text>
  <text x="446" y="444" font-size="12.5" fill="#5b6b78">機微情報は収集しない・機微になりうる記述はローカルLLMで匿名化・参加者の偏りは明示</text>
  <text x="641" y="470" font-size="11" fill="#8a7580" text-anchor="middle">※現在のトレンド：パランティア社等、組織のオントロジー構築が産業で進むほか、</text>
  <text x="641" y="482" font-size="11" fill="#8a7580" text-anchor="middle">LLM wiki等、個人の記録のグラフ化も生成AI技術により進展</text>

  <!-- ===== 工程4 公開＋成果と価値（右列） ===== -->
  <polygon points="970,194 970,220 990,207" fill="#2a9d6f"/>
  <rect x="1004" y="142" width="252" height="130" rx="13" fill="#f4faf7" stroke="#bfe0d0" stroke-width="1.4" filter="url(#sh)"/>
  <circle cx="1032" cy="168" r="15" fill="url(#gGreen)"/><text x="1032" y="174" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">4</text>
  <text x="1056" y="174" font-size="16" font-weight="700" fill="#147a52">公開</text>
  <g font-size="13" fill="#243040">
    <text x="1022" y="196">・オントロジー第1版（OWL）</text>
    <text x="1022" y="213">・抽出パイプライン一式</text>
    <text x="1022" y="230">・同意設計文書・合成データ</text>
    <text x="1022" y="247">・GitHubで公開</text>
  </g>
  <rect x="1098" y="252" width="146" height="21" rx="10.5" fill="#ffffff" stroke="#2a9d6f" stroke-width="1.4"/>
  <text x="1171" y="267" font-size="11.5" font-weight="700" fill="#147a52" text-anchor="middle">成果物④ 再現キット</text>

  <rect x="1004" y="286" width="252" height="200" rx="13" fill="#fdf0f4" stroke="#e7bccb" stroke-width="1.4" filter="url(#sh)"/>
  <text x="1022" y="316" font-size="15.5" font-weight="700" fill="#a3123a">本研究で見込む成果と価値</text>
  <g font-size="13" fill="#243040">
    <text x="1022" y="348">▸ 学習支援AIの参照基盤</text>
    <text x="1036" y="366" font-size="12" fill="#5a2233">一般論でなく、個々の大学に基づき回答</text>
    <text x="1022" y="396">▸ 体験の次元のデータ基盤</text>
    <text x="1036" y="414" font-size="12" fill="#5a2233">連続更新で、時間発展をとらえる</text>
    <text x="1022" y="444">▸ 他大学・他分野へ転用可能</text>
    <text x="1036" y="462" font-size="12" fill="#5a2233">再現キット（成果物④）として公開</text>
  </g>

  <!-- ===== オントロジーの設計原理リボン ===== -->
  <rect x="24" y="500" width="1232" height="44" rx="10" fill="url(#gGold)" filter="url(#sh)"/>
  <text x="640" y="528" font-size="17" font-weight="700" fill="#4a3208" text-anchor="middle">オントロジーの設計原理：最適経路の提示ではなく、機会の構造の可視化 ― 選択は学生に残す（主体的・自律的な学修の支援）</text>

  <!-- ===== スケジュール（工程つき） ===== -->
  <rect x="24" y="558" width="736" height="140" rx="13" fill="#f7f8fa" stroke="#d5dbe1" stroke-width="1.3"/>
  <text x="44" y="586" font-size="15" font-weight="700" fill="#243040">研究期間（約180日）の計画</text>
  <line x1="60" y1="644" x2="660" y2="644" stroke="#5b6b78" stroke-width="4"/>
  <line x1="660" y1="644" x2="772" y2="644" stroke="#8a6410" stroke-width="3.5" stroke-dasharray="7 6"/>
  <polygon points="776,633 776,655 794,644" fill="#e8a83a"/>
  <text x="716" y="630" font-size="11.5" font-weight="700" fill="#8a6410" text-anchor="middle">期間後へ</text>
  <circle cx="120" cy="644" r="7" fill="#1d6f8b"/><circle cx="360" cy="644" r="7" fill="#a3123a"/><circle cx="600" cy="644" r="7" fill="#2a9d6f"/>
  <text x="120" y="610" font-size="12.5" fill="#0e4f63" text-anchor="middle" font-weight="700">工程1・2｜基盤稼働・収集開始</text>
  <text x="360" y="610" font-size="12.5" fill="#a3123a" text-anchor="middle" font-weight="700">工程3｜中間(3ヶ月) 初版</text>
  <text x="600" y="610" font-size="12.5" fill="#147a52" text-anchor="middle" font-weight="700">工程4｜最終(6ヶ月) 第1版・公開</text>
  <text x="120" y="672" font-size="12" fill="#5b6b78" text-anchor="middle">倫理審査→連続運用へ</text>
  <text x="360" y="672" font-size="12" fill="#5b6b78" text-anchor="middle">既存・合成ログで先行構築</text>
  <text x="600" y="672" font-size="12" fill="#5b6b78" text-anchor="middle">実ログ反映・定量報告・IR分析例</text>

  <!-- ===== 期間後の展開 ===== -->
  <rect x="776" y="558" width="224" height="140" rx="13" fill="#fffaf0" stroke="#ecd9a8" stroke-width="1.4"/>
  <text x="794" y="584" font-size="14" font-weight="700" fill="#8a6410">研究期間後の展開</text>
  <g font-size="12" fill="#243040">
    <text x="794" y="608">・A/B比較・自律性支援感の測定</text>
    <text x="794" y="626">・公平性の検証（機会の認知度）</text>
    <text x="794" y="650" font-weight="700" fill="#8a6410">・大学の場のデジタルツインへ</text>
    <text x="804" y="668">支援策を実施前に仮想検証</text>
    <text x="804" y="686">（公平性・到達性）</text>
  </g>
  <polygon points="998,615 998,641 1020,628" fill="#e8a83a"/>

  <!-- ===== 未来の大学支援AI（独立フレーム） ===== -->
  <rect x="1016" y="558" width="240" height="140" rx="13" fill="#fdf0f4" stroke="#d9a3b5" stroke-width="1.6"/>
  <text x="1034" y="584" font-size="14" font-weight="700" fill="#a3123a">未来の大学支援AI</text>
  <g font-size="12.5" fill="#243040">
    <text x="1034" y="608">学生の問いに「この大学」の</text>
    <text x="1034" y="626">機会の地図で応えるAIへ。</text>
  </g>
  <text x="1034" y="652" font-size="13" font-weight="700" fill="#a3123a">AI時代に「大学へ集まる</text>
  <text x="1034" y="670" font-size="13" font-weight="700" fill="#a3123a">意味」を、かたちで示す</text>
  <text x="1034" y="689" font-size="11.5" fill="#8a6410">― AI時代のキャンパス像を実装する</text>
</svg>
