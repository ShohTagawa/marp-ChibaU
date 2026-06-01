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
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0d4334"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.10"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mA" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1A7A5E"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <g opacity="0.11">
    <rect x="150" y="116" width="980" height="470" rx="18" fill="#ffffff" stroke="#1A7A5E" stroke-width="3"/>
    <rect x="150" y="116" width="980" height="40" rx="18" fill="#1A7A5E"/>
    <rect x="150" y="138" width="980" height="18" fill="#1A7A5E"/>
    <circle cx="178" cy="136" r="6" fill="#ffffff"/><circle cx="200" cy="136" r="6" fill="#ffffff"/><circle cx="222" cy="136" r="6" fill="#ffffff"/>
    <rect x="300" y="126" width="700" height="20" rx="10" fill="#ffffff"/>
    <rect x="190" y="186" width="430" height="34" rx="8" fill="#1A7A5E"/>
    <rect x="660" y="186" width="430" height="34" rx="8" fill="#1A7A5E"/>
    <rect x="190" y="250" width="900" height="14" rx="7" fill="#1A7A5E"/>
    <rect x="190" y="282" width="760" height="14" rx="7" fill="#1A7A5E"/>
    <rect x="190" y="314" width="840" height="14" rx="7" fill="#1A7A5E"/>
    <rect x="190" y="360" width="280" height="120" rx="12" fill="#1A7A5E"/>
    <rect x="500" y="360" width="280" height="120" rx="12" fill="#1A7A5E"/>
    <rect x="810" y="360" width="280" height="120" rx="12" fill="#1A7A5E"/>
    <rect x="190" y="510" width="600" height="14" rx="7" fill="#1A7A5E"/>
    <rect x="190" y="542" width="720" height="14" rx="7" fill="#1A7A5E"/>
  </g>
  <rect x="0" y="98" width="1280" height="540" fill="#ffffff" opacity="0.62"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="16" font-weight="700" fill="#16624b">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="128" font-size="13" font-weight="700" fill="#999999">① いまの課題</text>
  <text x="613" y="128" font-size="13" font-weight="700" fill="#999999">② 2本柱（アプリ × AI基盤）で打ち手を 1:1 で当てる</text>
  <text x="1052" y="128" font-size="13" font-weight="700" fill="#999999" text-anchor="middle">③ GOAL</text>
  <rect x="40" y="142" width="232" height="338" rx="16" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="142" width="232" height="38" rx="16" fill="url(#gWarn)"/>
  <rect x="40" y="160" width="232" height="20" fill="url(#gWarn)"/>
  <circle cx="65" cy="161" r="13" fill="#ffffff"/>
  <g transform="translate(65,162)" stroke="#d2772f" stroke-width="2" fill="none"><path d="M0 -7 L7 6 L-7 6 Z"/></g>
  <circle cx="65" cy="164" r="1.1" fill="#d2772f"/>
  <text x="86" y="167" font-size="14" font-weight="700" fill="#ffffff">立ち行かない現状</text>
  <text x="56" y="208" font-size="11.5" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
  <text x="56" y="226" font-size="11" fill="#555">院生の多様化・申請/評価/添削に限界</text>
  <text x="56" y="262" font-size="11.5" font-weight="700" fill="#c4632a">B 研究人材育成が高度化</text>
  <text x="56" y="280" font-size="11" fill="#555">成功モデル多様化・求める水準が上昇</text>
  <text x="56" y="316" font-size="11.5" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
  <text x="56" y="334" font-size="11" fill="#555">支援が乱立・重複し必要な人に届かない</text>
  <text x="56" y="370" font-size="11.5" font-weight="700" fill="#c4632a">D 支援者の実践知が埋もれる</text>
  <text x="56" y="388" font-size="11" fill="#555">反復・データ分散・異動でゼロリセット</text>
  <rect x="56" y="412" width="200" height="52" rx="10" fill="#FBEDE2"/>
  <text x="156" y="434" font-size="11.5" font-weight="700" fill="#c4632a" text-anchor="middle">広がる支援ギャップ</text>
  <text x="156" y="452" font-size="10.5" fill="#a8602f" text-anchor="middle">教員数は一定／院生は増・多様化</text>
  <path d="M278 296 L298 296 L312 311 L298 326 L278 326 L292 311 Z" fill="#1A7A5E"/>
  <rect x="320" y="142" width="540" height="338" rx="16" fill="#F7FBF9" filter="url(#sh)"/>
  <rect x="320" y="142" width="540" height="38" rx="16" fill="url(#gAccH)"/>
  <rect x="320" y="160" width="540" height="20" fill="url(#gAccH)"/>
  <circle cx="345" cy="161" r="13" fill="#ffffff"/>
  <g transform="translate(345,161)" stroke="#1A7A5E" stroke-width="1.8" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="2"/><path d="M-7 -3 H-10 M-7 3 H-10 M7 -3 H10 M7 3 H10 M-3 -7 V-10 M3 -7 V-10 M-3 7 V10 M3 7 V10"/></g>
  <text x="366" y="167" font-size="14" font-weight="700" fill="#ffffff">アプリ（フロント） × AI基盤（裏側）で個別最適</text>
  <rect x="338" y="196" width="118" height="270" rx="11" fill="#ffffff" filter="url(#shSoft)"/>
  <text x="397" y="216" font-size="11.5" font-weight="700" fill="#1A7A5E" text-anchor="middle">アプリ</text>
  <rect x="364" y="226" width="66" height="100" rx="9" fill="#E4F2EC"/>
  <rect x="368" y="230" width="58" height="92" rx="7" fill="#ffffff" stroke="#1A7A5E" stroke-width="1.3"/>
  <rect x="368" y="230" width="58" height="13" rx="7" fill="#1A7A5E"/>
  <rect x="368" y="237" width="58" height="6" fill="#1A7A5E"/>
  <rect x="375" y="252" width="44" height="8" rx="3" fill="#E4F2EC" stroke="#cfe0d8" stroke-width="0.6"/>
  <circle cx="381" cy="272" r="3.6" fill="#cfe0d8"/><rect x="388" y="269" width="31" height="5" rx="2" fill="#cfe0d8"/>
  <circle cx="381" cy="288" r="3.6" fill="#cfe0d8"/><rect x="388" y="285" width="31" height="5" rx="2" fill="#cfe0d8"/>
  <circle cx="381" cy="304" r="3.6" fill="#cfe0d8"/><rect x="388" y="301" width="31" height="5" rx="2" fill="#cfe0d8"/>
  <text x="397" y="350" font-size="10.5" fill="#666" text-anchor="middle">学びの入口</text>
  <text x="397" y="366" font-size="10.5" fill="#666" text-anchor="middle">情報が集約</text>
  <text x="397" y="400" font-size="10.5" fill="#888" text-anchor="middle">学生がニーズを</text>
  <text x="397" y="416" font-size="10.5" fill="#888" text-anchor="middle">入力 → 受け取る</text>
  <text x="470" y="216" font-size="11.5" font-weight="700" fill="#1A7A5E">課題 ↔ 打ち手（1:1）</text>
  <rect x="470" y="226" width="378" height="56" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="491" cy="240" r="11" fill="#E4F2EC"/><text x="491" y="244" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="middle">A</text>
  <text x="510" y="244" font-size="12" font-weight="700" fill="#16624b">教員の指導負担を軽減 → 研究時間を確保</text>
  <text x="510" y="262" font-size="10.5" fill="#666">AI多言語支援・ラボ共通支援・支援者を接続</text>
  <rect x="470" y="288" width="378" height="56" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="491" cy="302" r="11" fill="#E4F2EC"/><text x="491" y="306" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="middle">B</text>
  <text x="510" y="306" font-size="12" font-weight="700" fill="#16624b">院生の研究力を向上 → 段階別の個別支援</text>
  <text x="510" y="324" font-size="10.5" fill="#666">CVデータベース ＋ AI伴走／留学・ラボ・企業マッチング</text>
  <rect x="470" y="350" width="378" height="56" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="491" cy="364" r="11" fill="#E4F2EC"/><text x="491" y="368" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="middle">C</text>
  <text x="510" y="368" font-size="12" font-weight="700" fill="#16624b">個別最適な情報を直に届ける</text>
  <text x="510" y="386" font-size="10.5" fill="#666">学生のニーズ × 全学の支援情報を突合 → 必要な人へ</text>
  <rect x="470" y="412" width="378" height="48" rx="9" fill="#ffffff" filter="url(#shSoft)"/>
  <circle cx="491" cy="430" r="11" fill="#E4F2EC"/><text x="491" y="434" font-size="12" font-weight="700" fill="#1A7A5E" text-anchor="middle">D</text>
  <text x="510" y="430" font-size="12" font-weight="700" fill="#16624b">支援者の労力削減・効率化</text>
  <text x="510" y="448" font-size="10.5" fill="#666">基盤でデータ接続・AI分析／窓口はRAGで省力化</text>
  <path d="M866 296 L886 296 L900 311 L886 326 L866 326 L880 311 Z" fill="#1A7A5E"/>
  <circle cx="1052" cy="300" r="150" fill="url(#glow)"/>
  <rect x="908" y="142" width="332" height="338" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="935" cy="170" r="14" fill="#ffffff"/>
  <g transform="translate(935,170)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="960" y="176" font-size="15" font-weight="700" fill="#ffffff">向かう先</text>
  <text x="930" y="216" font-size="18" font-weight="700" fill="#ffffff">教員の手間↓ × 研究力↑</text>
  <g fill="#ffffff"><circle cx="935" cy="244" r="2.4"/><circle cx="935" cy="272" r="2.4"/><circle cx="935" cy="300" r="2.4"/><circle cx="935" cy="328" r="2.4"/></g>
  <text x="948" y="248" font-size="12" fill="#DCEEE5">研究者・支援者が躍動する大学</text>
  <text x="948" y="276" font-size="12" fill="#DCEEE5">情報がリンクし成果が連鎖的に伸びる</text>
  <text x="948" y="304" font-size="12" fill="#DCEEE5">許諾済データを学内・行政・企業で共創</text>
  <text x="948" y="332" font-size="12" fill="#DCEEE5">統合分析で経営判断を迅速化・外販も</text>
  <rect x="930" y="356" width="288" height="106" rx="11" fill="#ffffff" opacity="0.14"/>
  <text x="948" y="380" font-size="12.5" font-weight="700" fill="#ffffff">GOAL バースト</text>
  <text x="948" y="404" font-size="11.5" fill="#ffffff">→ 中退率↓・修了率↑</text>
  <text x="948" y="426" font-size="11.5" fill="#ffffff">→ 自ら考える学生が育つ</text>
  <text x="948" y="448" font-size="11.5" fill="#ffffff">→ 学内すべての成果が伸びる</text>
  <text x="40" y="510" font-size="13" font-weight="700" fill="#999999">想定KPI（いずれも試算・導入効果の目安）</text>
  <rect x="40" y="520" width="1200" height="86" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="520" width="6" height="86" rx="3" fill="url(#gAcc)"/>
  <text x="180" y="558" font-size="36" font-weight="700" fill="#1A7A5E" text-anchor="middle">+3h</text>
  <text x="180" y="582" font-size="12" fill="#555" text-anchor="middle">教員の研究時間 / 週</text>
  <text x="180" y="598" font-size="10" fill="#aaaaaa" text-anchor="middle">想定</text>
  <line x1="332" y1="536" x2="332" y2="590" stroke="#e3ece8" stroke-width="1.5"/>
  <text x="470" y="558" font-size="36" font-weight="700" fill="#E07B39" text-anchor="middle">−50%</text>
  <text x="470" y="582" font-size="12" fill="#555" text-anchor="middle">定型問い合わせ</text>
  <text x="470" y="598" font-size="10" fill="#aaaaaa" text-anchor="middle">試算</text>
  <line x1="622" y1="536" x2="622" y2="590" stroke="#e3ece8" stroke-width="1.5"/>
  <text x="772" y="558" font-size="36" font-weight="700" fill="#1A7A5E" text-anchor="middle">+20pt</text>
  <text x="772" y="582" font-size="12" fill="#555" text-anchor="middle">院生の研究力</text>
  <text x="772" y="598" font-size="10" fill="#aaaaaa" text-anchor="middle">想定</text>
  <line x1="930" y1="536" x2="930" y2="590" stroke="#e3ece8" stroke-width="1.5"/>
  <text x="1085" y="558" font-size="36" font-weight="700" fill="#1A7A5E" text-anchor="middle">+5pt</text>
  <text x="1085" y="582" font-size="12" fill="#555" text-anchor="middle">修了率（中退率↓）</text>
  <text x="1085" y="598" font-size="10" fill="#aaaaaa" text-anchor="middle">試算</text>
  <path d="M40 628 L1206 628 L1240 666 L1206 704 L40 704 Z" fill="url(#gAccH)"/>
  <text x="623" y="672" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">分散を接続するハブとなり、研究者と支援者が躍動し続ける大学へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie)で作成。骨格=横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤で課題↔打ち手1:1→③GOALバースト)＋下段に想定KPI帯。0層=アプリ画面を巨大テキストボックスに見立てた薄色パネル(ブラウザ枠・薄UI行・見出しボックスを地に敷き、白スクリム0.62で可読性確保)。配色=teal＋warn橙＋ニュートラルの3色。密度=airy。KPIは全て想定/試算と明示。 -->
