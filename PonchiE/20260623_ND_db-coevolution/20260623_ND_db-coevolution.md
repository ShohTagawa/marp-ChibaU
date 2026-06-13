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

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gGray" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b6b78"/><stop offset="1" stop-color="#3d4a55"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.10"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
    <marker id="mG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#5b6b78"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#FBFDFC"/>
  <rect x="0" y="0" width="1280" height="64" fill="url(#gAccH)"/>
  <text x="36" y="40" font-size="25" font-weight="700" fill="#fff">Nexus Uni+ データ基盤設計 ─ アプリDBと教育DBを並列の意思決定フローで共進化させる</text>
  <rect x="1118" y="15" width="128" height="34" rx="8" fill="#fff"/>
  <image href="./src/chiba-logo.png" x="1128" y="21" width="108" height="22"/>
  <text x="36" y="58" font-size="11.5" fill="#d9efe7">すべて Google PaaS（Firestore / Pub/Sub / Cloud Run / Cloud Storage / BigQuery / Dataform / Vertex AI）利用、しかし要件の厳しさと、意思決定のサイクル数が異なる。</text>
  <rect x="36" y="78" width="560" height="224" rx="18" fill="#E4F2EC" filter="url(#shSoft)"/>
  <rect x="36" y="78" width="560" height="36" rx="18" fill="url(#gAccH)"/>
  <rect x="36" y="96" width="560" height="18" fill="url(#gAccH)"/>
  <circle cx="62" cy="96" r="13" fill="#fff"/>
  <g transform="translate(62,96)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="84" y="101" font-size="16" font-weight="700" fill="#fff">アプリ基盤DB ＝ 運用系（SoE）</text>
  <text x="556" y="101" font-size="11.5" fill="#d9efe7" text-anchor="end">体験を支えるトランザクション</text>
  <g filter="url(#shSoft)"><rect x="52" y="124" width="528" height="32" rx="8" fill="#fff"/></g>
  <text x="64" y="144" font-size="12.5" fill="#1f2937"><tspan font-weight="700" fill="#16624b">Firestore</tspan>：会話ログ・目標/ニーズ・成長・同意（短期・リアルタイム同期）</text>
  <g filter="url(#shSoft)"><rect x="52" y="162" width="528" height="32" rx="8" fill="#fff"/></g>
  <text x="64" y="182" font-size="12.5" fill="#1f2937"><tspan font-weight="700" fill="#16624b">Pub/Sub</tspan>：行動イベントを発行 → BigQueryへ直接サブスク（非同期・疎結合）</text>
  <g filter="url(#shSoft)"><rect x="52" y="200" width="528" height="32" rx="8" fill="#fff"/></g>
  <text x="64" y="220" font-size="12.5" fill="#1f2937"><tspan font-weight="700" fill="#16624b">Cloud Storage</tspan>：mdノート・写メ画像＝データレイクの原本（rawを捨てない）</text>
  <g filter="url(#shSoft)"><rect x="52" y="238" width="528" height="32" rx="8" fill="#fff"/></g>
  <text x="64" y="258" font-size="12.5" fill="#1f2937"><tspan font-weight="700" fill="#16624b">Cloud Run（TypeScript）</tspan>：API/SSE・Gemini呼び出し・スキーマ検証・認証</text>
  <rect x="52" y="276" width="110" height="20" rx="10" fill="#1A7A5E"/>
  <text x="107" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">ミリ秒応答</text>
  <rect x="170" y="276" width="190" height="20" rx="10" fill="#1A7A5E"/>
  <text x="265" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">スキーマによる柔軟なAI DB</text>
  <rect x="368" y="276" width="150" height="20" rx="10" fill="#1A7A5E"/>
  <text x="443" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">本人のデータ・8割精度</text>
  <rect x="684" y="78" width="560" height="224" rx="18" fill="#EEF1F3" filter="url(#shSoft)"/>
  <rect x="684" y="78" width="560" height="36" rx="18" fill="url(#gGray)"/>
  <rect x="684" y="96" width="560" height="18" fill="url(#gGray)"/>
  <circle cx="710" cy="96" r="13" fill="#fff"/>
  <g transform="translate(710,96)" stroke="#3d4a55" stroke-width="2" fill="none"><path d="M-9 -3 L0 -8 L9 -3"/><path d="M-7 -3 V7 M-2 -3 V7 M3 -3 V7 M8 -3 V7 M-9 8 H9"/></g>
  <text x="732" y="101" font-size="16" font-weight="700" fill="#fff">教育系DB ＝ 基幹系（SoR）</text>
  <text x="1240" y="101" font-size="11.5" fill="#dde4e9" text-anchor="end">大学の正本（成績・単位・学籍）</text>
  <rect x="700" y="124" width="72" height="146" rx="10" fill="#E4F2EC"/>
  <text x="736" y="143" font-size="10" font-weight="700" fill="#16624b" text-anchor="middle">分析・BI層</text>
  <rect x="704" y="156" width="64" height="44" rx="8" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="736" y="183" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">BigQuery</text>
  <rect x="704" y="210" width="64" height="44" rx="8" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="736" y="228" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">Looker</text>
  <text x="736" y="243" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">Studio</text>
  <g filter="url(#shSoft)"><rect x="780" y="124" width="448" height="32" rx="8" fill="#fff"/></g>
  <text x="792" y="144" font-size="12" fill="#1f2937"><tspan font-weight="700" fill="#3d4a55">学籍</tspan>：在籍・所属・身分　／　<tspan font-weight="700" fill="#3d4a55">履修状況</tspan>：履修登録・出席・進捗</text>
  <g filter="url(#shSoft)"><rect x="780" y="162" width="448" height="32" rx="8" fill="#fff"/></g>
  <text x="792" y="182" font-size="12" fill="#1f2937"><tspan font-weight="700" fill="#16624b">個人×科目の達成</tspan>：科目の修了要件・成績・GPA・単位修得（個人データ）</text>
  <g filter="url(#shSoft)"><rect x="780" y="200" width="448" height="32" rx="8" fill="#fff"/></g>
  <text x="792" y="220" font-size="12" fill="#1f2937"><tspan font-weight="700" fill="#3d4a55">科目マスタ</tspan>：科目情報・シラバス（到達目標/評価方法）⇄ LMS・時間割</text>
  <g filter="url(#shSoft)"><rect x="780" y="238" width="448" height="32" rx="8" fill="#fff"/></g>
  <text x="792" y="258" font-size="12" fill="#1f2937"><tspan font-weight="700" fill="#3d4a55">卒業要件</tspan>：科目達成の集約判定（要件マスタ×実績）／現行RDB・バッチ更新</text>
  <rect x="700" y="276" width="130" height="20" rx="10" fill="#5b6b78"/>
  <text x="765" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">正確性・監査</text>
  <rect x="838" y="276" width="120" height="20" rx="10" fill="#5b6b78"/>
  <text x="898" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">更新は重いが高信頼</text>
  <rect x="966" y="276" width="190" height="20" rx="10" fill="#5b6b78"/>
  <text x="1061" y="290" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">大学基盤として例外なく処理</text>
  <circle cx="640" cy="150" r="34" fill="url(#gWarn)" filter="url(#sh)"/>
  <text x="640" y="146" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">要件・</text>
  <text x="640" y="161" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">開発速度</text>
  <text x="640" y="200" font-size="11.5" font-weight="700" fill="#d2772f" text-anchor="middle">異なっている</text>
  <path d="M606 222 H668" stroke="#5b6b78" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#mG)"/>
  <path d="M674 240 H612" stroke="#1A7A5E" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#mA)"/>
  <text x="640" y="260" font-size="10" fill="#6b7280" text-anchor="middle">連携はAPI・</text>
  <text x="640" y="273" font-size="10" fill="#6b7280" text-anchor="middle">イベント経由</text>
  <rect x="36" y="314" width="1208" height="290" rx="18" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="640" cy="460" r="230" fill="url(#glow)"/>
  <text x="56" y="340" font-size="16" font-weight="700" fill="#0f4a39">共進化ロードマップ＝螺旋的成長 ─ アプリDBは機動的でAgileに／教育DBは着実に誤りなく進化 → 俯瞰後、異なる時間軸で整備、共通化</text>
  <text x="1224" y="340" font-size="11" fill="#6b7280" text-anchor="end">●＝育てる順／💡＝できること</text>
  <rect x="48" y="392" width="64" height="64" rx="10" fill="#E4F2EC"/>
  <text x="80" y="416" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">アプリ</text>
  <text x="80" y="430" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">基盤</text>
  <text x="80" y="446" font-size="10" fill="#6b7280" text-anchor="middle">SoE</text>
  <rect x="48" y="478" width="64" height="64" rx="10" fill="#EEF1F3"/>
  <text x="80" y="502" font-size="11.5" font-weight="700" fill="#3d4a55" text-anchor="middle">教育</text>
  <text x="80" y="516" font-size="11.5" font-weight="700" fill="#3d4a55" text-anchor="middle">基盤</text>
  <text x="80" y="532" font-size="10" fill="#6b7280" text-anchor="middle">SoR</text>
  <rect x="124" y="352" width="180" height="24" rx="12" fill="url(#gGray)"/>
  <text x="214" y="368" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Lv0　接続</text>
  <g filter="url(#sh)"><rect x="124" y="384" width="180" height="162" rx="12" fill="#F7F9F8"/></g>
  <text x="136" y="406" font-size="12" font-weight="700" fill="#3d4a55">既存基盤からの最小連携</text>
  <text x="136" y="422" font-size="11" fill="#6b7280">（API / CSVで受け取る）</text>
  <text x="136" y="444" font-size="11.5" fill="#1f2937">・学籍（誰が、何を、どこで）</text>
  <text x="136" y="462" font-size="11.5" fill="#1f2937">・科目ID⇄シラバス</text>
  <text x="136" y="480" font-size="11.5" fill="#1f2937">　⇄LMS対応</text>
  <text x="136" y="498" font-size="11.5" fill="#1f2937">・時間割・開講情報</text>
  <rect x="136" y="510" width="80" height="20" rx="10" fill="url(#gWarn)"/>
  <text x="176" y="524" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">実証済み</text>
  <rect x="124" y="556" width="180" height="34" rx="8" fill="#FFF8EE"/>
  <text x="134" y="570" font-size="10.5" fill="#8a5a1f">💡 時間割・シラバス・蔵書</text>
  <text x="134" y="583" font-size="10.5" fill="#8a5a1f">　 連携</text>
  <rect x="322" y="352" width="242" height="24" rx="12" fill="url(#gAccH)"/>
  <text x="443" y="368" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Lv1　最小実装で動かす</text>
  <g filter="url(#sh)"><rect x="322" y="384" width="242" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="322" y="384" width="4" height="76" fill="#1A7A5E"/>
  <text x="336" y="402" font-size="12" font-weight="700" fill="#16624b">アプリ基盤 Lv1（Firestore）<tspan font-size="9" fill="#d2772f"> ◀いまココ</tspan></text>
  <text x="336" y="419" font-size="11.5" fill="#1f2937">・どんな質問をしたか（会話ログ）</text>
  <text x="336" y="435" font-size="11.5" fill="#1f2937">・将来の目標・ニーズ・同意</text>
  <text x="336" y="451" font-size="11.5" fill="#1f2937">・行動ログ（成長記録・タイマー）</text>
  <g filter="url(#sh)"><rect x="322" y="470" width="242" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="322" y="470" width="4" height="76" fill="#5b6b78"/>
  <text x="336" y="488" font-size="12" font-weight="700" fill="#3d4a55">教育基盤 Lv1（BigQuery複製）</text>
  <text x="336" y="505" font-size="11.5" fill="#1f2937">・既存DBは<tspan font-weight="700">併存のまま</tspan>触らない</text>
  <text x="336" y="521" font-size="11.5" fill="#1f2937">・Datastream/日次ダンプで</text>
  <text x="336" y="537" font-size="11.5" fill="#1f2937">　分析用の「写し」を作る</text>
  <rect x="322" y="556" width="242" height="34" rx="8" fill="#FFF8EE"/>
  <text x="332" y="570" font-size="10.5" fill="#8a5a1f">💡 オプトインデータの分析／問い合わせ</text>
  <text x="332" y="583" font-size="10.5" fill="#8a5a1f">　 傾向の把握（FAQの自動改善）</text>
  <rect x="582" y="352" width="262" height="24" rx="12" fill="url(#gAccH)"/>
  <text x="713" y="368" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Lv2　分析を体験に返す</text>
  <g filter="url(#sh)"><rect x="582" y="384" width="262" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="582" y="384" width="4" height="76" fill="#1A7A5E"/>
  <text x="596" y="402" font-size="12" font-weight="700" fill="#16624b">アプリ基盤 Lv2（BigQuery書き戻し）</text>
  <text x="596" y="419" font-size="11.5" fill="#1f2937">・日次スケジュールクエリで集計し、</text>
  <text x="596" y="435" font-size="11.5" fill="#1f2937">　Firestoreへ書き戻して体験へ反映</text>
  <text x="596" y="451" font-size="11.5" fill="#1f2937">・データレイク＋ログ→ポートフォリオ</text>
  <g filter="url(#sh)"><rect x="582" y="470" width="262" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="582" y="470" width="4" height="76" fill="#5b6b78"/>
  <text x="596" y="488" font-size="12" font-weight="700" fill="#3d4a55">教育基盤 Lv2（オントロジー）</text>
  <text x="596" y="505" font-size="11.5" fill="#1f2937">・科目⇄DP⇄スキル⇄支援の写像を</text>
  <text x="596" y="521" font-size="11.5" fill="#1f2937">　Dataform/Knowledge Catalogで抽象化</text>
  <text x="596" y="537" font-size="11.5" fill="#1f2937">・教育で生じるあらゆる関係を地図に</text>
  <rect x="582" y="556" width="262" height="34" rx="8" fill="#FFF8EE"/>
  <text x="592" y="570" font-size="10.5" fill="#8a5a1f">💡 AIによるIR／行動×成績の学習分析／</text>
  <text x="592" y="583" font-size="10.5" fill="#8a5a1f">　 DP達成の実測（自己評価→実データへ）</text>
  <rect x="862" y="352" width="370" height="24" rx="12" fill="url(#gAcc)"/>
  <text x="1047" y="368" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Lv3　個人最適化 ─ 学びの前後をつなぐ</text>
  <g filter="url(#sh)"><rect x="862" y="384" width="370" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="862" y="384" width="4" height="76" fill="#1A7A5E"/>
  <text x="876" y="402" font-size="12" font-weight="700" fill="#16624b">学習支援基盤 Lv3（個人最適化学習DB）</text>
  <text x="876" y="419" font-size="11.5" fill="#1f2937">・教育基盤Lv2×大学入学前の学び等を統合し、</text>
  <text x="876" y="435" font-size="11.5" fill="#1f2937">　大学での学びの「前後」をまとめた個人DB</text>
  <text x="876" y="451" font-size="11.5" fill="#1f2937">・生涯ポートフォリオ（BigQuery VECTOR_SEARCH＝RAG）</text>
  <g filter="url(#sh)"><rect x="862" y="470" width="370" height="76" rx="12" fill="#ffffff"/></g>
  <rect x="862" y="470" width="4" height="76" fill="#5b6b78"/>
  <text x="876" y="488" font-size="12" font-weight="700" fill="#3d4a55">教育系DB Lv3（シームレス）</text>
  <text x="876" y="505" font-size="11.5" fill="#1f2937">・学習支援DBと地続きになり、個人の学びを</text>
  <text x="876" y="521" font-size="11.5" fill="#1f2937">　随時アペンドできるDBへ（学修歴の器）</text>
  <text x="876" y="537" font-size="11.5" fill="#1f2937">・正課×課外×学外の学びがひとつながりに</text>
  <rect x="862" y="556" width="370" height="34" rx="8" fill="#FFF8EE"/>
  <text x="872" y="570" font-size="10.5" fill="#8a5a1f">💡 個別最適カリキュラム提案／卒業後も続く学修歴／</text>
  <text x="872" y="583" font-size="10.5" fill="#8a5a1f">　 全学ナレッジ（実践知の共有基盤）</text>
  <circle cx="552" cy="394" r="11" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="552" y="398.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">1</text>
  <circle cx="544" cy="480" r="11" fill="url(#gGray)" filter="url(#shSoft)"/>
  <text x="544" y="484.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">2</text>
  <circle cx="824" cy="394" r="11" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="824" y="398.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">3</text>
  <circle cx="824" cy="480" r="11" fill="url(#gGray)" filter="url(#shSoft)"/>
  <text x="824" y="484.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">4</text>
  <circle cx="1212" cy="394" r="11" fill="url(#gAcc)" filter="url(#shSoft)"/>
  <text x="1212" y="398.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">5</text>
  <circle cx="1212" cy="480" r="11" fill="url(#gGray)" filter="url(#shSoft)"/>
  <text x="1212" y="484.5" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">6</text>
  <rect x="36" y="616" width="656" height="92" rx="14" fill="#F2F6F4" filter="url(#shSoft)"/>
  <text x="52" y="638" font-size="13" font-weight="700" fill="#0f4a39">AIのためのバックエンド設計（グッドプラクティス）</text>
  <text x="52" y="657" font-size="11.5" fill="#1f2937">・AIは基幹DBを直接触らない ─ BigQueryの集計ビューと、Firestoreの「本人のデータ」だけを読む</text>
  <text x="52" y="674" font-size="11.5" fill="#1f2937">・同意（オプトイン）はFirestoreが正本 → BigQueryへ伝播し、分析側でも行レベルで除外できる設計</text>
  <text x="52" y="691" font-size="11.5" fill="#1f2937">・将来：BigQuery VECTOR_SEARCH（RAG・高QPSはVertex AI）／スケジュールクエリ／Dataformでコード管理</text>
  <g filter="url(#sh)"><rect x="712" y="616" width="532" height="92" rx="14" fill="url(#gAcc)"/></g>
  <rect x="728" y="604" width="148" height="24" rx="12" fill="url(#gWarn)"/>
  <text x="802" y="620" font-size="12.5" font-weight="700" fill="#fff" text-anchor="middle">最も伝えたいこと</text>
  <text x="730" y="650" font-size="12.5" font-weight="700" fill="#fff">① System of Record/Engagement/Insightの分離</text>
  <text x="730" y="671" font-size="12.5" font-weight="700" fill="#fff">② タイムスコープと承認フローを分け、共進化を実現</text>
  <text x="730" y="692" font-size="12.5" font-weight="700" fill="#fff">③ アプリの最小限はLv1で動く ─ Pub/Sub疎結合で、両者が交互に育つ</text>
  <path d="M310 455 L330 455 L344 469 L330 483 L310 483 L322 469 Z" fill="#1A7A5E"/>
  <path d="M570 455 L590 455 L604 469 L590 483 L570 483 L582 469 Z" fill="#1A7A5E"/>
  <path d="M850 455 L870 455 L884 469 L870 483 L850 483 L862 469 Z" fill="#1A7A5E"/>
</svg>
