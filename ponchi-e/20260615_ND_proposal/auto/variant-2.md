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
    <linearGradient id="gH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.22"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#E07B39" stop-opacity="0.55"/><stop offset="1" stop-color="#E07B39" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#fbfdfc"/>
  <g opacity="0.08" stroke="#1A7A5E" fill="none" stroke-width="1.1">
    <ellipse cx="640" cy="400" rx="430" ry="430"/>
    <ellipse cx="640" cy="400" rx="430" ry="150"/>
    <ellipse cx="640" cy="400" rx="430" ry="280"/>
    <ellipse cx="640" cy="400" rx="120" ry="430"/>
    <ellipse cx="640" cy="400" rx="280" ry="430"/>
    <line x1="210" y1="400" x2="1070" y2="400"/>
    <line x1="640" y1="-30" x2="640" y2="830"/>
  </g>
  <g opacity="0.07" stroke="#1A7A5E" stroke-width="0.9" stroke-dasharray="2 6"><line x1="120" y1="190" x2="560" y2="360"/><line x1="1160" y1="200" x2="720" y2="360"/><line x1="160" y1="620" x2="560" y2="440"/><line x1="1120" y1="610" x2="720" y2="440"/><line x1="640" y1="120" x2="640" y2="680"/><line x1="200" y1="400" x2="1080" y2="400"/></g>
  <g opacity="0.10" fill="#1A7A5E"><circle cx="120" cy="190" r="3"/><circle cx="1160" cy="200" r="3"/><circle cx="160" cy="620" r="3"/><circle cx="1120" cy="610" r="3"/><circle cx="300" cy="120" r="2.4"/><circle cx="980" cy="120" r="2.4"/><circle cx="300" cy="680" r="2.4"/><circle cx="980" cy="680" r="2.4"/></g>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gH)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="13" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="../src/chiba-logo.png" x="1120" y="19" width="112" height="22"/>
  <rect x="0" y="60" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="83" font-size="15" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="0" y="94" width="1280" height="32" fill="#0f4a39"/>
  <text x="40" y="115" font-size="13" font-weight="700" fill="#9fe3cb">想定KPI（試算）</text>
  <g font-family="sans-serif"><text x="206" y="110" font-size="22" font-weight="700" fill="#ffffff">＋3h/週</text><text x="206" y="123" font-size="10.5" fill="#cdeede">教員の研究時間</text></g>
  <line x1="358" y1="102" x2="358" y2="120" stroke="#2f7a62" stroke-width="1"/>
  <g><text x="386" y="110" font-size="22" font-weight="700" fill="#ffffff">−50%</text><text x="386" y="123" font-size="10.5" fill="#cdeede">定型問い合わせ</text></g>
  <line x1="530" y1="102" x2="530" y2="120" stroke="#2f7a62" stroke-width="1"/>
  <g><text x="558" y="110" font-size="22" font-weight="700" fill="#ffffff">＋20pt</text><text x="558" y="123" font-size="10.5" fill="#cdeede">院生の研究力</text></g>
  <line x1="726" y1="102" x2="726" y2="120" stroke="#2f7a62" stroke-width="1"/>
  <g><text x="754" y="110" font-size="22" font-weight="700" fill="#ffffff">＋5pt</text><text x="754" y="123" font-size="10.5" fill="#cdeede">修了率（中退率↓）</text></g>
  <text x="1240" y="115" font-size="10" fill="#6fb79e" text-anchor="end">※数値はすべて想定／試算</text>
  <circle cx="640" cy="332" r="150" fill="url(#glow)"/>
  <rect x="34" y="138" width="572" height="178" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="34" y="138" width="572" height="32" rx="13" fill="url(#gH)"/>
  <rect x="34" y="154" width="572" height="16" fill="url(#gH)"/>
  <circle cx="60" cy="162" r="12" fill="#ffffff"/>
  <g transform="translate(60,163)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 6 A5.5 5.5 0 0 1 0 5"/><path d="M0 5 A5.5 5.5 0 0 1 10 6"/></g>
  <text x="80" y="166" font-size="14" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <text x="48" y="194" font-size="11" font-weight="700" fill="#b5651d">課題：業務負荷の急増（院生の多様化／申請・評価・学振添削・全員留学で限界）</text>
  <text x="48" y="218" font-size="11.5" fill="#2f4f45">→ AIの多言語支援・ラボ共通支援で指導を肩代わり</text>
  <text x="48" y="240" font-size="11.5" fill="#2f4f45">→ 支援者への接続が容易になり、負担を分散</text>
  <text x="48" y="266" font-size="12" font-weight="700" fill="#16624b">→ 教員は研究そのものに時間を回せる</text>
  <rect x="674" y="138" width="572" height="178" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="138" width="572" height="32" rx="13" fill="url(#gH)"/>
  <rect x="674" y="154" width="572" height="16" fill="url(#gH)"/>
  <circle cx="700" cy="162" r="12" fill="#ffffff"/>
  <g transform="translate(700,162)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7.5"/><circle cx="0" cy="0" r="3"/></g>
  <text x="720" y="166" font-size="14" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <text x="688" y="194" font-size="11" font-weight="700" fill="#b5651d">課題：育成の多様化・高度化（個別の能力育成と資源の最適投下が必須）</text>
  <text x="688" y="218" font-size="11.5" fill="#2f4f45">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="688" y="240" font-size="11.5" fill="#2f4f45">→ 段階別にAI伴走の個別研究支援</text>
  <text x="688" y="266" font-size="12" font-weight="700" fill="#16624b">→ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="34" y="348" width="572" height="178" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="34" y="348" width="572" height="32" rx="13" fill="url(#gH)"/>
  <rect x="34" y="364" width="572" height="16" fill="url(#gH)"/>
  <circle cx="60" cy="372" r="12" fill="#ffffff"/>
  <g transform="translate(60,373)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.5"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g>
  <text x="80" y="376" font-size="14" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <text x="48" y="404" font-size="11" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・重複・分散し届かない）</text>
  <text x="48" y="428" font-size="11.5" fill="#2f4f45">→ ①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="48" y="450" font-size="11.5" fill="#2f4f45">→ 真に必要とする個人へ情報・支援・機会を直投下</text>
  <text x="48" y="476" font-size="12" font-weight="700" fill="#16624b">→ 個別最適化した学び・訓練機会を提供</text>
  <rect x="674" y="348" width="572" height="178" rx="13" fill="#ffffff" filter="url(#sh)"/>
  <rect x="674" y="348" width="572" height="32" rx="13" fill="url(#gH)"/>
  <rect x="674" y="364" width="572" height="16" fill="url(#gH)"/>
  <circle cx="700" cy="372" r="12" fill="#ffffff"/>
  <g transform="translate(700,372)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-8" y="-3.5" width="8" height="7" rx="3.5"/><rect x="0" y="-3.5" width="8" height="7" rx="3.5"/></g>
  <text x="720" y="376" font-size="14" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <text x="688" y="404" font-size="11" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務・システム乱立・データ分散・異動でゼロリセット）</text>
  <text x="688" y="428" font-size="11.5" fill="#2f4f45">→ システムでなく〈データ〉を基盤上で接続しAIで分析</text>
  <text x="688" y="450" font-size="11.5" fill="#2f4f45">→ 反復・窓口業務をRAGで省力化</text>
  <text x="688" y="476" font-size="12" font-weight="700" fill="#16624b">→ IR・成果・回答を自動収集し統合分析</text>
  <circle cx="640" cy="332" r="42" fill="url(#gA)" filter="url(#sh)"/>
  <circle cx="640" cy="332" r="42" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <text x="640" y="328" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="345" font-size="10" fill="#d8efe6" text-anchor="middle">接続ハブ</text>
  <rect x="34" y="540" width="1212" height="58" rx="11" fill="#E4F2EC"/>
  <text x="52" y="563" font-size="12.5" font-weight="700" fill="#16624b">受益者のニーズ → 導入後</text>
  <g font-size="10.5"><text x="52" y="585" font-weight="700" fill="#b5651d">学生</text><text x="92" y="585" fill="#2f4f45">機会が届かない → 個別最適に直投下</text></g>
  <line x1="372" y1="552" x2="372" y2="588" stroke="#bcdccf" stroke-width="1"/>
  <g font-size="10.5"><text x="388" y="585" font-weight="700" fill="#b5651d">教員</text><text x="428" y="585" fill="#2f4f45">指導過多 → 研究時間を確保</text></g>
  <line x1="660" y1="552" x2="660" y2="588" stroke="#bcdccf" stroke-width="1"/>
  <g font-size="10.5"><text x="676" y="585" font-weight="700" fill="#b5651d">職員</text><text x="716" y="585" fill="#2f4f45">反復業務 → RAGで省力化・知の蓄積</text></g>
  <line x1="980" y1="552" x2="980" y2="588" stroke="#bcdccf" stroke-width="1"/>
  <g font-size="10.5"><text x="996" y="585" font-weight="700" fill="#b5651d">大学</text><text x="1036" y="585" fill="#2f4f45">判断の遅れ → 統合分析で迅速化</text></g>
  <text x="40" y="618" font-size="10.5" fill="#8a8a8a">副次効果：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <circle cx="623" cy="664" r="60" fill="url(#burst)"/>
  <path d="M34 628 L1206 628 L1240 656 L1206 684 L34 684 Z" fill="url(#gH)"/>
  <text x="623" y="661" font-size="18" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) variant-2 2×2マトリクス＋中心Nexusハブ。地に薄グローブ&ネットワーク点線(国際×接続)。teal3色制限・packed。kpiBand/beneficiaryRow/goalBurst入り。A-D課題↔打ち手1:1、KPIは想定/試算明示。 -->
