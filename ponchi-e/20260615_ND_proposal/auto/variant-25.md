---
marp: true
theme: ponchie
paginate: false
size: 16:9
html: true
header: ''
footer: ''
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gAccH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gAcc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#27a07c"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gMid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f9f85"/><stop offset="1" stop-color="#2c7a60"/></linearGradient>
    <linearGradient id="gBase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6ece2"/><stop offset="1" stop-color="#bfe0d4"/></linearGradient>
    <linearGradient id="gWarn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <radialGradient id="gBurst" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe7c9" stop-opacity="0.95"/><stop offset="0.6" stop-color="#f3b878" stop-opacity="0.55"/><stop offset="1" stop-color="#f3b878" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f4a39" flood-opacity="0.20"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f4a39" flood-opacity="0.13"/></filter>
    <marker id="mW" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#d2772f"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="720" fill="#ffffff"/>
  <polygon points="-40,720 360,720 1320,160 1320,300 480,720 760,720 1320,400 1320,500 880,720" fill="#e4f2ec" opacity="0.85"/>
  <polygon points="-40,720 180,720 1320,40 1320,120 300,720" fill="#cfe8dc" opacity="0.55"/>
  <rect x="0" y="0" width="1280" height="62" fill="url(#gAccH)"/>
  <text x="40" y="40" font-size="26" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ＝ Nexus University 構想</text>
  <rect x="1106" y="14" width="138" height="34" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1120" y="20" width="112" height="22"/>
  <rect x="0" y="62" width="1280" height="34" fill="#E4F2EC"/>
  <text x="40" y="84" font-size="15.5" font-weight="700" fill="#16624b">分散する〈情報・データ・支援・機会〉を接続 ── 研究者と支援者が躍動する大学へ</text>
  <polygon points="640,116 1010,330 270,330" fill="url(#gAcc)" filter="url(#sh)"/>
  <circle cx="640" cy="270" r="62" fill="url(#gBurst)"/>
  <circle cx="640" cy="158" r="14" fill="#ffffff"/>
  <g transform="translate(640,158)" stroke="#1A7A5E" stroke-width="2" fill="none"><path d="M-8 4 L-8 -6 L8 -6 L8 4"/><path d="M-8 -1 L8 -1"/><circle cx="0" cy="6" r="1.6" fill="#1A7A5E"/></g>
  <text x="640" y="196" font-size="17" font-weight="700" fill="#ffffff" text-anchor="middle">頂点：Nexus University</text>
  <text x="640" y="220" font-size="12.5" fill="#dff0e9" text-anchor="middle">自ら考える学生が育ち、研究と支援が連鎖的に伸びる大学</text>
  <text x="640" y="252" font-size="11.5" fill="#cfe8dc" text-anchor="middle">許諾済データの共同利活用（学内・行政・企業）</text>
  <text x="640" y="270" font-size="11.5" fill="#cfe8dc" text-anchor="middle">統合分析で経営判断を迅速化／アプリ外販</text>
  <text x="640" y="308" font-size="12.5" font-weight="700" fill="#ffe7c9" text-anchor="middle">GOAL：教員を増やさず院生の研究力を引き上げる</text>
  <polygon points="270,338 1010,338 1090,452 190,452" fill="url(#gMid)" filter="url(#shSoft)"/>
  <circle cx="234" cy="395" r="14" fill="#ffffff"/>
  <g transform="translate(234,395)" stroke="#2c7a60" stroke-width="2" fill="none"><rect x="-7" y="-7" width="14" height="14" rx="3"/><path d="M-3 -3 H3 M-3 1 H3 M-3 5 H1"/></g>
  <text x="640" y="370" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">中段：AI機能 ── 接続された情報を文脈に応じて個別最適化</text>
  <text x="640" y="394" font-size="11.5" fill="#eef7f3" text-anchor="middle">AI多言語・ラボ共通支援 ／ CVデータベース＋AI伴走 ／ ニーズ×支援情報の突合</text>
  <text x="640" y="412" font-size="11.5" fill="#eef7f3" text-anchor="middle">RAGで反復・窓口を省力化 ／ IR・成果・回答を自動収集・統合分析</text>
  <text x="640" y="437" font-size="11" fill="#d7ebe2" text-anchor="middle">副次：許諾済データを基盤上で接続し、AIで横断分析できる</text>
  <polygon points="190,458 1090,458 1170,556 110,556" fill="url(#gBase)" filter="url(#shSoft)"/>
  <circle cx="150" cy="507" r="14" fill="#ffffff"/>
  <g transform="translate(150,507)" stroke="#16624b" stroke-width="2" fill="none"><circle cx="-5" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><circle cx="0" cy="5" r="3"/><path d="M-5 0 L0 2 M5 0 L0 2"/></g>
  <text x="640" y="488" font-size="15" font-weight="700" fill="#16624b" text-anchor="middle">土台：データ接続基盤 ── 散らばる 人・データ・支援・実践知 を一つに繋ぐ</text>
  <text x="640" y="512" font-size="11.5" fill="#245c4a" text-anchor="middle">学内外の学習・スキル・資格記録（CV） ／ 全学の支援情報 ／ 支援者の実践知</text>
  <text x="640" y="532" font-size="11.5" fill="#245c4a" text-anchor="middle">システム乱立・データ分散・異動でのゼロリセットを、接続で解消する</text>
  <g transform="translate(40,128)">
    <rect x="0" y="0" width="172" height="356" rx="20" fill="#ffffff" filter="url(#sh)" stroke="#cfe0d8" stroke-width="1"/>
    <rect x="10" y="10" width="152" height="26" rx="9" fill="url(#gAccH)"/>
    <text x="86" y="28" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">学生・支援者アプリ</text>
    <rect x="14" y="46" width="144" height="40" rx="9" fill="#E4F2EC"/>
    <text x="24" y="64" font-size="10.5" font-weight="700" fill="#16624b">あなたの研究ニーズは？</text>
    <text x="24" y="79" font-size="10" fill="#4a6b60">留学・ラボ・企業をマッチ</text>
    <rect x="14" y="92" width="144" height="34" rx="9" fill="#f4f9f6" stroke="#dfeae5" stroke-width="1"/>
    <circle cx="30" cy="109" r="9" fill="#27a07c"/>
    <text x="46" y="106" font-size="9.5" fill="#33473f">CV：学習・スキル・資格</text>
    <text x="46" y="118" font-size="9.5" font-weight="700" fill="#16624b">→ 必要な個人へ直送</text>
    <rect x="14" y="132" width="144" height="32" rx="9" fill="#FBEDE2"/>
    <text x="24" y="146" font-size="9.5" fill="#8a4f23">AI伴走（段階別）</text>
    <text x="24" y="159" font-size="9.5" font-weight="700" fill="#c4632a">Lv1→Lv2→Lv3</text>
    <text x="14" y="184" font-size="10" font-weight="700" fill="#999">段階展開ロードマップ</text>
    <rect x="14" y="192" width="144" height="26" rx="8" fill="#E4F2EC"/>
    <text x="22" y="209" font-size="9.5" font-weight="700" fill="#16624b">Lv1 接続：データ統合</text>
    <rect x="14" y="222" width="144" height="26" rx="8" fill="#bfe0d4"/>
    <text x="22" y="239" font-size="9.5" font-weight="700" fill="#0f4a39">Lv2 伴走：AI個別支援</text>
    <rect x="14" y="252" width="144" height="26" rx="8" fill="url(#gAcc)"/>
    <text x="22" y="269" font-size="9.5" font-weight="700" fill="#ffffff">Lv3 躍動：全学で連鎖</text>
    <rect x="14" y="288" width="144" height="58" rx="9" fill="#fafdfb" stroke="#e3efea" stroke-width="1"/>
    <text x="24" y="304" font-size="9.5" font-weight="700" fill="#888">想定KPI（試算）</text>
    <text x="24" y="319" font-size="10" fill="#33473f">研究時間 ＋3h/週</text>
    <text x="24" y="333" font-size="10" fill="#33473f">問い合わせ −50%</text>
    <text x="24" y="344" font-size="9" fill="#aa8">※すべて想定値</text>
  </g>
  <text x="1118" y="120" font-size="13" font-weight="700" fill="#999" text-anchor="middle">課題 → AI打ち手（1:1）</text>
  <g transform="translate(1004,128)">
    <rect x="0" y="0" width="228" height="84" rx="13" fill="#ffffff" filter="url(#shSoft)" stroke="#f0ddcd" stroke-width="1"/>
    <rect x="0" y="0" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="16" y="22" font-size="12.5" font-weight="700" fill="#c4632a">A 教員の業務負荷が急増</text>
    <text x="16" y="38" font-size="9.5" fill="#7a5238">院生の多様化・申請/評価/添削で限界</text>
    <path d="M16 47 H212" stroke="#eee2d6" stroke-width="1"/>
    <text x="16" y="63" font-size="11" font-weight="700" fill="#16624b">→ 指導負担を軽減し研究時間を確保</text>
    <text x="16" y="77" font-size="9.5" fill="#3c5e52">AI多言語・ラボ共通支援・支援者接続</text>
  </g>
  <g transform="translate(1004,220)">
    <rect x="0" y="0" width="228" height="84" rx="13" fill="#ffffff" filter="url(#shSoft)" stroke="#f0ddcd" stroke-width="1"/>
    <rect x="0" y="0" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="16" y="22" font-size="12.5" font-weight="700" fill="#c4632a">B 人材育成が多様化・高度化</text>
    <text x="16" y="38" font-size="9.5" fill="#7a5238">求める水準↑・個別育成と資源最適化</text>
    <path d="M16 47 H212" stroke="#eee2d6" stroke-width="1"/>
    <text x="16" y="63" font-size="11" font-weight="700" fill="#16624b">→ 院生の研究力を向上</text>
    <text x="16" y="77" font-size="9.5" fill="#3c5e52">CVデータベース＋AI伴走の段階別支援</text>
  </g>
  <g transform="translate(1004,312)">
    <rect x="0" y="0" width="228" height="84" rx="13" fill="#ffffff" filter="url(#shSoft)" stroke="#f0ddcd" stroke-width="1"/>
    <rect x="0" y="0" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="16" y="22" font-size="12.5" font-weight="700" fill="#c4632a">C 大学→個人のミッシングリンク</text>
    <text x="16" y="38" font-size="9.5" fill="#7a5238">支援が乱立・重複・分散で届かない</text>
    <path d="M16 47 H212" stroke="#eee2d6" stroke-width="1"/>
    <text x="16" y="63" font-size="11" font-weight="700" fill="#16624b">→ 個別最適な情報を直に届ける</text>
    <text x="16" y="77" font-size="9.5" fill="#3c5e52">入力ニーズ×全学の支援情報を突合</text>
  </g>
  <g transform="translate(1004,404)">
    <rect x="0" y="0" width="228" height="84" rx="13" fill="#ffffff" filter="url(#shSoft)" stroke="#f0ddcd" stroke-width="1"/>
    <rect x="0" y="0" width="6" height="84" rx="3" fill="url(#gWarn)"/>
    <text x="16" y="22" font-size="12.5" font-weight="700" fill="#c4632a">D 実践知が蓄積・活用されない</text>
    <text x="16" y="38" font-size="9.5" fill="#7a5238">反復・システム乱立・異動でリセット</text>
    <path d="M16 47 H212" stroke="#eee2d6" stroke-width="1"/>
    <text x="16" y="63" font-size="11" font-weight="700" fill="#16624b">→ 支援者の労力削減・効率化</text>
    <text x="16" y="77" font-size="9.5" fill="#3c5e52">RAGで省力化・IR/成果を自動統合分析</text>
  </g>
  <path d="M0 560 L1240 560 L1240 656 L34 656 Z" fill="#ffffff" opacity="0"/>
  <path d="M40 580 L1206 580 L1240 618 L1206 656 L40 656 Z" fill="url(#gAccH)"/>
  <text x="623" y="613" font-size="18.5" font-weight="700" fill="#ffffff" text-anchor="middle">接続基盤の上にAIを積み、Nexus University ＝ 研究者と支援者が躍動する大学へ</text>
  <text x="623" y="638" font-size="11.5" fill="#cfe8dc" text-anchor="middle">想定KPI（試算）：教員の研究時間 ＋3h/週 ／ 定型問い合わせ −50% ／ 院生の研究力 ＋20pt ／ 修了率 ＋5pt（中退率↓）</text>
</svg>

<!-- variant-25：階層ピラミッド（土台=データ接続基盤→中=AI機能→頂=Nexus University）。地に左下→右上へ昇る半透明tealシェブロン。appMockup（左カード）+goalBurst（頂点の橙グロー）+stageBand（Lv1→Lv3帯）。右にA-D課題↔打ち手1:1。KPIは想定/試算を明示。teal+warn橙+ニュートラルの3色。 -->
