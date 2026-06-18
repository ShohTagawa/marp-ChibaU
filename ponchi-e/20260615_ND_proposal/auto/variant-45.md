---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gHdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#16624b"/></linearGradient>
    <linearGradient id="gNexus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f5a623"/><stop offset="1" stop-color="#e07b1a"/></linearGradient>
    <linearGradient id="gKpi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <radialGradient id="gGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f5a623" stop-opacity="0.24"/><stop offset="1" stop-color="#f5a623" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#0e4233" flood-opacity="0.18"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e4233" flood-opacity="0.12"/></filter>
    <marker id="mA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#1f8f6e"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <rect x="0" y="0" width="1280" height="60" fill="url(#gHdr)"/>
  <text x="40" y="39" font-size="25" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="20"/>
  <text x="40" y="92" font-size="16" font-weight="700" fill="#16624b">学内に分散する〈情報・データ・サポート・機会〉を1つに接続し、研究者と支援者が躍動する大学へ</text>
  <text x="40" y="130" font-size="12.5" font-weight="700" fill="#9a9a9a">STAGE：① 接続する → ② 個別最適に届ける → ③ 実践知を循環させる</text>
  <circle cx="640" cy="372" r="186" fill="url(#gGlow)"/>
  <circle cx="640" cy="372" r="96" fill="url(#gNexus)" filter="url(#sh)"/>
  <g transform="translate(640,372)" stroke="#ffffff" stroke-width="2.4" fill="none" opacity="0.92"><circle cx="0" cy="-30" r="7"/><circle cx="-30" cy="14" r="7"/><circle cx="30" cy="14" r="7"/><path d="M0 -23 L-26 9 M0 -23 L26 9 M-23 14 L23 14"/></g>
  <text x="640" y="392" font-size="21" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="414" font-size="12.5" fill="#fff5e6" text-anchor="middle">接続基盤</text>
  <g stroke="#7fc9b2" stroke-width="2.6" fill="none">
    <path d="M348 250 C470 286 478 318 552 344" marker-end="url(#mA)"/>
    <path d="M348 506 C470 470 478 432 552 404" marker-end="url(#mA)"/>
    <path d="M932 250 C810 286 802 318 728 344" marker-end="url(#mA)"/>
    <path d="M932 506 C810 470 802 432 728 404" marker-end="url(#mA)"/>
  </g>
  <g>
    <rect x="64" y="178" width="296" height="96" rx="14" fill="#ffffff" filter="url(#shS)" stroke="#cfe6dd"/>
    <circle cx="92" cy="206" r="13" fill="#e4f2ec"/><text x="92" y="211" font-size="14" font-weight="700" fill="#1a7a5e" text-anchor="middle">A</text>
    <text x="116" y="200" font-size="13.5" font-weight="700" fill="#16624b">課題：教員の業務負荷が急増</text>
    <text x="116" y="219" font-size="11.5" fill="#7a7a7a">院生の多様化・申請/評価/添削で限界</text>
    <text x="80" y="248" font-size="13.5" font-weight="700" fill="#1f8f6e">→ 指導負担を軽減し研究時間を確保</text>
    <text x="80" y="265" font-size="11.5" fill="#666">AI多言語支援・ラボ共通支援・支援者接続</text>
  </g>
  <g>
    <rect x="64" y="476" width="296" height="96" rx="14" fill="#ffffff" filter="url(#shS)" stroke="#cfe6dd"/>
    <circle cx="92" cy="504" r="13" fill="#e4f2ec"/><text x="92" y="509" font-size="14" font-weight="700" fill="#1a7a5e" text-anchor="middle">C</text>
    <text x="116" y="498" font-size="13.5" font-weight="700" fill="#16624b">課題：大学→個人のミッシングリンク</text>
    <text x="116" y="517" font-size="11.5" fill="#7a7a7a">支援が乱立・分散し必要な個人に届かない</text>
    <text x="80" y="546" font-size="13.5" font-weight="700" fill="#1f8f6e">→ 個別最適な情報を直に届ける</text>
    <text x="80" y="563" font-size="11.5" fill="#666">学生ニーズ × 全学支援情報を突合し投下</text>
  </g>
  <g>
    <rect x="920" y="178" width="296" height="96" rx="14" fill="#ffffff" filter="url(#shS)" stroke="#cfe6dd"/>
    <circle cx="948" cy="206" r="13" fill="#e4f2ec"/><text x="948" y="211" font-size="14" font-weight="700" fill="#1a7a5e" text-anchor="middle">B</text>
    <text x="972" y="200" font-size="13.5" font-weight="700" fill="#16624b">課題：研究人材の育成が多様化・高度化</text>
    <text x="972" y="219" font-size="11.5" fill="#7a7a7a">成功モデル多様化・求める水準が上昇</text>
    <text x="936" y="248" font-size="13.5" font-weight="700" fill="#1f8f6e">→ 院生の研究力を向上</text>
    <text x="936" y="265" font-size="11.5" fill="#666">CVデータベース × AI伴走・段階別の個別支援</text>
  </g>
  <g>
    <rect x="920" y="476" width="296" height="96" rx="14" fill="#ffffff" filter="url(#shS)" stroke="#cfe6dd"/>
    <circle cx="948" cy="504" r="13" fill="#e4f2ec"/><text x="948" y="509" font-size="14" font-weight="700" fill="#1a7a5e" text-anchor="middle">D</text>
    <text x="972" y="498" font-size="13.5" font-weight="700" fill="#16624b">課題：支援者の実践知が共有されない</text>
    <text x="972" y="517" font-size="11.5" fill="#7a7a7a">手続きの反復・データ分散・異動でリセット</text>
    <text x="936" y="546" font-size="13.5" font-weight="700" fill="#1f8f6e">→ 支援者の労力削減・効率化</text>
    <text x="936" y="563" font-size="11.5" fill="#666">基盤で接続しRAG省力化・成果を自動統合分析</text>
  </g>
  <g>
    <rect x="556" y="150" width="168" height="42" rx="10" fill="#f2fbf8" stroke="#9fe3cc"/>
    <rect x="568" y="160" width="22" height="22" rx="5" fill="#ffffff" stroke="#27a07c"/><path d="M573 171 h12 M573 177 h12 M579 162 v18" stroke="#27a07c" stroke-width="1.6" fill="none"/>
    <text x="600" y="166" font-size="11" font-weight="700" fill="#16624b">アプリ（学生の入口）</text>
    <text x="600" y="183" font-size="10.5" fill="#7a7a7a">ニーズ入力・伴走UIで個別に接続</text>
  </g>
  <g font-size="10.5" fill="#7a7a7a">
    <text x="640" y="476" font-size="11.5" font-weight="700" fill="#16624b" text-anchor="middle">副次効果</text>
    <rect x="500" y="486" width="92" height="30" rx="8" fill="#f2fbf8" stroke="#9fe3cc"/><text x="546" y="498" font-size="10" text-anchor="middle" fill="#3c5b50">許諾済データの</text><text x="546" y="510" font-size="10" text-anchor="middle" fill="#3c5b50">共同研究活用</text>
    <rect x="596" y="486" width="92" height="30" rx="8" fill="#f2fbf8" stroke="#9fe3cc"/><text x="642" y="498" font-size="10" text-anchor="middle" fill="#3c5b50">統合分析で</text><text x="642" y="510" font-size="10" text-anchor="middle" fill="#3c5b50">経営判断を迅速化</text>
    <rect x="692" y="486" width="92" height="30" rx="8" fill="#f2fbf8" stroke="#9fe3cc"/><text x="738" y="498" font-size="10" text-anchor="middle" fill="#3c5b50">アプリの</text><text x="738" y="510" font-size="10" text-anchor="middle" fill="#3c5b50">外販</text>
  </g>
  <rect x="40" y="600" width="1200" height="84" rx="14" fill="url(#gKpi)" filter="url(#sh)"/>
  <text x="64" y="628" font-size="13" font-weight="700" fill="#e9f7f1">想定KPI（すべて想定／試算）</text>
  <g text-anchor="middle" fill="#ffffff">
    <text x="232" y="654" font-size="30" font-weight="700">+3h</text><text x="232" y="674" font-size="11.5" fill="#e9f7f1">教員の研究時間／週（想定）</text>
    <text x="520" y="654" font-size="30" font-weight="700">-50%</text><text x="520" y="674" font-size="11.5" fill="#e9f7f1">定型問い合わせ（試算）</text>
    <text x="800" y="654" font-size="30" font-weight="700">+20pt</text><text x="800" y="674" font-size="11.5" fill="#e9f7f1">院生の研究力（想定）</text>
    <text x="1064" y="654" font-size="30" font-weight="700">+5pt</text><text x="1064" y="674" font-size="11.5" fill="#e9f7f1">修了率／中退率↓（試算）</text>
  </g>
  <line x1="380" y1="616" x2="380" y2="672" stroke="#ffffff" stroke-opacity="0.35"/>
  <line x1="656" y1="616" x2="656" y2="672" stroke="#ffffff" stroke-opacity="0.35"/>
  <line x1="932" y1="616" x2="932" y2="672" stroke="#ffffff" stroke-opacity="0.35"/>
</svg>

<!-- variant-45：ハブ&スポーク（中央=接続基盤Nexus）。千葉大teal整合＋アクセント1焦点=中央Nexusハブのみ橙。airy・白背景。四隅にA-D課題↔打ち手1:1カードを曲線で合流。上にappMockup/stageBand、中央下に副次効果、最下部にkpiBand(想定/試算明示)。 -->
