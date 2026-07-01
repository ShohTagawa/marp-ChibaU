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
    <linearGradient id="gGray" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5b6b78"/><stop offset="1" stop-color="#3d4a55"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3.5" flood-color="#3a2530" flood-opacity="0.2"/></filter>
    <marker id="aR" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#a3123a"/></marker>
    <marker id="aG" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#2a9d6f"/></marker>
  </defs>
  <rect width="1280" height="720" fill="#ffffff"/>
  <text x="40" y="66" font-size="27" font-weight="700" fill="#a3123a">研究プロセスと AI の適用箇所</text>
  <rect x="40" y="76" width="360" height="4" rx="2" fill="#a3123a"/>
  <rect x="978" y="44" width="262" height="30" rx="15" fill="#eaf3f6" stroke="#1d6f8b"/>
  <rect x="992" y="52" width="16" height="14" rx="3" fill="url(#gTeal)"/>
  <text x="1016" y="64" font-size="14" font-weight="700" fill="#0e4f63">＝ AI（LLM）を適用する工程</text>
  <!-- chevrons -->
  <polygon points="326,250 352,250 366,268 352,286 326,286 340,268" fill="#c7ccd2"/>
  <polygon points="646,250 672,250 686,268 672,286 646,286 660,268" fill="#c7ccd2"/>
  <polygon points="966,250 992,250 1006,268 992,286 966,286 980,268" fill="#c7ccd2"/>
  <!-- Card 1 データ -->
  <rect x="40" y="130" width="286" height="280" rx="14" fill="#ffffff" stroke="#d7dde3" stroke-width="1.3" filter="url(#sh)"/>
  <rect x="40" y="130" width="286" height="46" rx="14" fill="url(#gGray)"/>
  <text x="62" y="160" font-size="18" font-weight="700" fill="#ffffff">① データ</text>
  <g font-size="14.5" fill="#33414f">
    <text x="62" y="212">オプトインされた</text>
    <text x="62" y="236">学生の行動ログ</text>
    <text x="62" y="260" font-size="13" fill="#5b6b78">（学習支援機会への</text>
    <text x="62" y="279" font-size="13" fill="#5b6b78">参加・検索 等）</text>
    <text x="62" y="312">＋ 安全なオプトインDB</text>
    <text x="62" y="336" font-size="13" fill="#5b6b78">同意・匿名化・</text>
    <text x="62" y="355" font-size="13" fill="#5b6b78">アクセス制御</text>
  </g>
  <text x="62" y="392" font-size="11.5" fill="#8a949e">※アプリ本体は別途予算で整備</text>
  <!-- Card 2 LLM抽出 (AI) -->
  <rect x="360" y="130" width="286" height="280" rx="14" fill="#ffffff" stroke="#bcd6df" stroke-width="1.6" filter="url(#sh)"/>
  <rect x="360" y="130" width="286" height="46" rx="14" fill="url(#gTeal)"/>
  <text x="382" y="160" font-size="18" font-weight="700" fill="#ffffff">② LLM で抽出</text>
  <rect x="576" y="140" width="52" height="26" rx="13" fill="#ffffff" opacity="0.95"/><text x="602" y="158" font-size="13" font-weight="700" fill="#0e4f63" text-anchor="middle">AI</text>
  <g font-size="14.5" fill="#33414f">
    <text x="382" y="214">構造化出力で</text>
    <text x="382" y="238">〈概念・関係・根拠〉</text>
    <text x="382" y="262">を半自動で抽出</text>
    <text x="382" y="300">自己整合性で検証し、</text>
    <text x="382" y="324">出典ログに根拠を接地</text>
    <text x="382" y="360" font-size="12.5" fill="#1d6f8b">機微データはローカルで匿名化</text>
  </g>
  <!-- Card 3 オントロジー -->
  <rect x="680" y="130" width="286" height="280" rx="14" fill="#ffffff" stroke="#e7bccb" stroke-width="1.6" filter="url(#sh)"/>
  <rect x="680" y="130" width="286" height="46" rx="14" fill="url(#gCrim)"/>
  <text x="702" y="160" font-size="17" font-weight="700" fill="#ffffff">③ 大学体験オントロジー</text>
  <text x="702" y="198" font-size="13.5" fill="#33414f">発見される知識グラフ（OWL）</text>
  <g font-size="12.5" text-anchor="middle">
    <circle cx="740" cy="248" r="26" fill="#fdeef2" stroke="#a3123a"/><text x="740" y="252" fill="#a3123a">孤立感</text>
    <line x1="766" y1="255" x2="812" y2="272" stroke="#a3123a" stroke-width="2" marker-end="url(#aR)"/>
    <circle cx="852" cy="284" r="28" fill="#a3123a" stroke="#6f0c27"/><text x="852" y="281" fill="#fff">履修</text><text x="852" y="296" fill="#fff">離脱</text>
    <circle cx="742" cy="330" r="26" fill="#eaf3f6" stroke="#1d6f8b"/><text x="742" y="334" fill="#0e4f63">居場所</text>
    <line x1="768" y1="330" x2="818" y2="330" stroke="#2a9d6f" stroke-width="2" marker-end="url(#aG)"/>
    <circle cx="864" cy="330" r="30" fill="#e7f5ee" stroke="#2a9d6f"/><text x="864" y="326" fill="#147a52">定着・</text><text x="864" y="341" fill="#147a52">自己効力</text>
  </g>
  <text x="702" y="392" font-size="11.5" fill="#8a6b74">行動の関係・転機を機械可読化</text>
  <!-- Card 4 検証 (人+AI) -->
  <rect x="1000" y="130" width="240" height="280" rx="14" fill="#ffffff" stroke="#d7dde3" stroke-width="1.3" filter="url(#sh)"/>
  <rect x="1000" y="130" width="240" height="46" rx="14" fill="url(#gCrim)"/>
  <text x="1020" y="160" font-size="18" font-weight="700" fill="#ffffff">④ 検証・育成</text>
  <rect x="1150" y="140" width="80" height="26" rx="13" fill="#ffffff" opacity="0.95"/><text x="1190" y="158" font-size="12.5" font-weight="700" fill="#a3123a" text-anchor="middle">人＋AI</text>
  <g font-size="14.5" fill="#33414f">
    <text x="1020" y="214">教員＋RA が</text>
    <text x="1020" y="238">アノテーション</text>
    <text x="1020" y="276">アノテーター間一致</text>
    <text x="1020" y="300">で品質を確認</text>
    <text x="1020" y="338">反復的に改善</text>
  </g>
  <!-- bottom flow -->
  <rect x="40" y="470" width="1200" height="150" rx="14" fill="#f7f8fa" stroke="#d7dde3"/>
  <text x="60" y="505" font-size="16" font-weight="700" fill="#243040">研究期間後の展開</text>
  <rect x="60" y="524" width="470" height="70" rx="12" fill="#ffffff" stroke="#bfe2d6"/>
  <text x="80" y="552" font-size="15.5" font-weight="700" fill="#147a52">研究期間後：A/B テストで有用性を検証</text>
  <text x="80" y="576" font-size="13" fill="#3a6b56">本オントロジーを用いたAIの支援 vs 従来手法</text>
  <polygon points="548,559 588,545 588,573" fill="#2a9d6f"/>
  <rect x="606" y="524" width="614" height="70" rx="12" fill="#f1faf5" stroke="#bfe2d6"/>
  <text x="626" y="552" font-size="15.5" font-weight="700" fill="#0f5a44">将来：人と AI が協働する大学</text>
  <text x="626" y="576" font-size="13" fill="#3a6b56">AIが「大学体験」を共通言語として読み、文脈に応じた学習支援を生成</text>
  <text x="40" y="660" font-size="12.5" fill="#8a949e">図　研究プロセス（①→④）とAIの適用箇所。②はLLMによる抽出、④はAIを補助に人が検証する工程。</text>
</svg>
