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
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1A7A5E" stop-opacity="0.20"/><stop offset="1" stop-color="#1A7A5E" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.12"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="36" fill="#E4F2EC"/>
  <text x="40" y="86" font-size="15.5" font-weight="700" fill="#16624b">4つの立場（教員・院生・個人・支援者）の課題を、ひとつの〈接続基盤 Nexus〉で同時に解く</text>
  <circle cx="640" cy="344" r="150" fill="url(#glow)"/>
  <rect x="40" y="110" width="578" height="226" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="110" width="578" height="34" rx="14" fill="url(#gAccH)"/>
  <rect x="40" y="127" width="578" height="17" fill="url(#gAccH)"/>
  <circle cx="68" cy="135" r="13" fill="#ffffff"/>
  <g transform="translate(68,136)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="90" y="140" font-size="14.5" font-weight="700" fill="#ffffff">A 教員 ― 指導負担を軽くし研究時間を確保</text>
  <text x="56" y="172" font-size="11" font-weight="700" fill="#b5651d">課題：業務負荷の急増（院生の多様化・申請・評価・学振添削・全員留学）</text>
  <text x="56" y="200" font-size="12" fill="#2f4f45">→ AIの多言語支援・ラボへの共通支援で指導を肩代わり</text>
  <text x="56" y="224" font-size="12" fill="#2f4f45">→ 支援者への接続が容易になり、指導負担を軽減</text>
  <text x="56" y="248" font-size="12.5" font-weight="700" fill="#16624b">→ 教員は研究そのものに時間を回せる</text>
  <rect x="662" y="110" width="578" height="226" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="662" y="110" width="578" height="34" rx="14" fill="url(#gAccH)"/>
  <rect x="662" y="127" width="578" height="17" fill="url(#gAccH)"/>
  <circle cx="690" cy="135" r="13" fill="#ffffff"/>
  <g transform="translate(690,135)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="0" r="8"/><circle cx="0" cy="0" r="3.5"/></g>
  <text x="712" y="140" font-size="14.5" font-weight="700" fill="#ffffff">B 院生 ― 一人ひとりの研究力を伸ばす</text>
  <text x="678" y="172" font-size="11" font-weight="700" fill="#b5651d">課題：育成の多様化・高度化（個別の能力育成と資源最適化が必須）</text>
  <text x="678" y="200" font-size="12" fill="#2f4f45">→ CVデータベース（学内外の学習・スキル・資格を記録）</text>
  <text x="678" y="224" font-size="12" fill="#2f4f45">→ 進路・研究段階に合わせ、AI伴走型の個別研究支援</text>
  <text x="678" y="248" font-size="12.5" font-weight="700" fill="#16624b">→ 留学先・ラボ・企業のマッチングも可能に</text>
  <rect x="40" y="352" width="578" height="226" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="40" y="352" width="578" height="34" rx="14" fill="url(#gAccH)"/>
  <rect x="40" y="369" width="578" height="17" fill="url(#gAccH)"/>
  <circle cx="68" cy="377" r="13" fill="#ffffff"/>
  <g transform="translate(68,378)" stroke="#1A7A5E" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="4"/><path d="M-7 8 A7 7 0 0 1 7 8"/></g>
  <text x="90" y="382" font-size="14.5" font-weight="700" fill="#ffffff">C 個人 ― 必要な情報・機会を直に届ける</text>
  <text x="56" y="414" font-size="11" font-weight="700" fill="#b5651d">課題：大学→個人のミッシングリンク（支援が乱立・分散し届かない）</text>
  <text x="56" y="442" font-size="12" fill="#2f4f45">→ ①学生が入力したニーズ ＋ ②全学の支援情報を突合</text>
  <text x="56" y="466" font-size="12" fill="#2f4f45">→ 「真に必要とする個人」へ情報・支援・機会を直投下</text>
  <text x="56" y="490" font-size="12.5" font-weight="700" fill="#16624b">→ 個別最適化した学び・訓練機会を提供</text>
  <rect x="662" y="352" width="578" height="226" rx="14" fill="#ffffff" filter="url(#sh)"/>
  <rect x="662" y="352" width="578" height="34" rx="14" fill="url(#gAccH)"/>
  <rect x="662" y="369" width="578" height="17" fill="url(#gAccH)"/>
  <circle cx="690" cy="377" r="13" fill="#ffffff"/>
  <g transform="translate(690,377)" stroke="#1A7A5E" stroke-width="2" fill="none"><rect x="-9" y="-4" width="9" height="8" rx="4"/><rect x="0" y="-4" width="9" height="8" rx="4"/></g>
  <text x="712" y="382" font-size="14.5" font-weight="700" fill="#ffffff">D 支援者 ― 実践知を活かし業務を効率化</text>
  <text x="678" y="414" font-size="11" font-weight="700" fill="#b5651d">課題：実践知が散逸（反復業務・システム乱立・異動でゼロリセット）</text>
  <text x="678" y="442" font-size="12" fill="#2f4f45">→ システムでなく〈データ〉を基盤上で接続しAIで分析</text>
  <text x="678" y="466" font-size="12" fill="#2f4f45">→ 反復・窓口業務をRAGで省力化</text>
  <text x="678" y="490" font-size="12.5" font-weight="700" fill="#16624b">→ IR・研究成果・アンケートを自動収集し統合分析</text>
  <circle cx="640" cy="344" r="44" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="640" cy="344" r="44" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <text x="640" y="340" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Nexus</text>
  <text x="640" y="357" font-size="9.5" fill="#d8efe6" text-anchor="middle">接続基盤</text>
  <text x="40" y="600" font-size="11" fill="#8a8a8a">さらに：許諾済データの共有・利活用（学内・行政・企業の共同研究）／統合分析で経営判断を迅速化／アプリの外販も視野</text>
  <path d="M40 612 L1206 612 L1240 646 L1206 680 L40 680 Z" fill="url(#gAccH)"/>
  <text x="623" y="651" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">4つの立場が一つの基盤でつながり、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- ポンチ絵スキル(marp-ponchie) #5 2×2マトリクス。A教員/B院生/C個人/D支援者の4象限、中心にNexus接続基盤ハブ。MECEな4領域を一望。 -->
