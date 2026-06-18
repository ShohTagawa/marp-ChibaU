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
    <linearGradient id="gNavH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b3a63"/><stop offset="1" stop-color="#0e2240"/></linearGradient>
    <linearGradient id="gTeal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f8f"/><stop offset="1" stop-color="#0f5e63"/></linearGradient>
    <linearGradient id="gTealH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#22a0a0"/><stop offset="1" stop-color="#14757a"/></linearGradient>
    <linearGradient id="gGoal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b4f74"/><stop offset="1" stop-color="#0d2f4a"/></linearGradient>
    <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#3fc4c4" stop-opacity="0.55"/><stop offset="0.6" stop-color="#1f8f8f" stop-opacity="0.18"/><stop offset="1" stop-color="#1f8f8f" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0e2240" flood-opacity="0.22"/></filter>
    <filter id="shS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0e2240" flood-opacity="0.14"/></filter>
    <marker id="mT" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6 Z" fill="#14757a"/></marker>
  </defs>
  <rect x="0" y="0" width="1280" height="58" fill="url(#gNavH)"/>
  <text x="40" y="38" font-size="24" font-weight="700" fill="#ffffff">「研究×学び」接続基盤 ― Nexus University 構想</text>
  <rect x="1108" y="13" width="136" height="32" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1122" y="19" width="110" height="20"/>
  <rect x="0" y="58" width="1280" height="34" fill="#E5F1F2"/>
  <text x="40" y="80" font-size="15" font-weight="700" fill="#14606a">学内に分散する〈情報・データ・サポート・機会〉を「接続」し、研究者と支援者が躍動する大学へ</text>
  <rect x="32" y="100" width="430" height="244" rx="16" fill="#FBEDE2" filter="url(#shS)"/>
  <rect x="48" y="112" width="220" height="26" rx="13" fill="#d2772f"/>
  <text x="74" y="130" font-size="13.5" font-weight="700" fill="#ffffff">① いま起きている課題</text>
  <text x="278" y="130" font-size="11" fill="#b86a2c">A–D を打ち手と1:1で解く</text>
  <rect x="48" y="146" width="398" height="44" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="168" r="11" fill="#FBEDE2"/><text x="68" y="173" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">A</text>
  <text x="86" y="164" font-size="11.5" font-weight="700" fill="#933f12">教員の業務負荷が急増</text>
  <text x="86" y="181" font-size="10.5" fill="#777">院生多様化・研究費申請・評価・学振添削で限界</text>
  <rect x="48" y="194" width="398" height="44" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="216" r="11" fill="#FBEDE2"/><text x="68" y="221" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">B</text>
  <text x="86" y="212" font-size="11.5" font-weight="700" fill="#933f12">研究人材の育成が多様化・高度化</text>
  <text x="86" y="229" font-size="10.5" fill="#777">成功モデル多様化・求める水準↑／個別最適が必須</text>
  <rect x="48" y="242" width="398" height="44" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="264" r="11" fill="#FBEDE2"/><text x="68" y="269" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">C</text>
  <text x="86" y="260" font-size="11.5" font-weight="700" fill="#933f12">大学→個人のミッシングリンク</text>
  <text x="86" y="277" font-size="10.5" fill="#777">支援が乱立・重複・分散／必要な個人に届かない</text>
  <rect x="48" y="290" width="398" height="44" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <circle cx="68" cy="312" r="11" fill="#FBEDE2"/><text x="68" y="317" font-size="13" font-weight="700" fill="#c4632a" text-anchor="middle">D</text>
  <text x="86" y="308" font-size="11.5" font-weight="700" fill="#933f12">支援者の実践知が活かされない</text>
  <text x="86" y="325" font-size="10.5" fill="#777">同じ手続きの反復・データ分散・異動でゼロリセット</text>
  <path d="M464 210 L482 210 L494 222 L482 234 L464 234 L476 222 Z" fill="#14757a"/>
  <rect x="500" y="100" width="492" height="244" rx="16" fill="#E5F1F2" filter="url(#shS)"/>
  <rect x="516" y="112" width="280" height="26" rx="13" fill="url(#gTealH)"/>
  <text x="542" y="130" font-size="13.5" font-weight="700" fill="#ffffff">② 2本柱で解く ― アプリ × AI基盤</text>
  <rect x="516" y="146" width="226" height="188" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="516" y="146" width="226" height="30" rx="11" fill="#16828a"/>
  <rect x="516" y="161" width="226" height="15" fill="#16828a"/>
  <text x="530" y="167" font-size="12" font-weight="700" fill="#ffffff">柱① アプリ（フロント）</text>
  <text x="530" y="196" font-size="10.5" font-weight="700" fill="#933f12">A▸ 教員の指導負担を軽減し研究時間を確保</text>
  <text x="540" y="212" font-size="10" fill="#666">AI多言語支援・ラボ共通支援・支援者接続</text>
  <text x="530" y="234" font-size="10.5" font-weight="700" fill="#933f12">B▸ 院生の研究力を向上</text>
  <text x="540" y="250" font-size="10" fill="#666">CVデータベース＋AI伴走の段階別個別支援</text>
  <text x="540" y="264" font-size="10" fill="#666">留学・ラボ・企業マッチング</text>
  <text x="530" y="286" font-size="10.5" font-weight="700" fill="#933f12">C▸ 個別最適な情報を直に届ける</text>
  <text x="540" y="302" font-size="10" fill="#666">①学生入力ニーズ＋②全学の支援情報を突合</text>
  <text x="540" y="316" font-size="10" fill="#666">→ 必要な個人へダイレクト投下</text>
  <text x="755" y="240" font-size="20" font-weight="700" fill="#16828a" text-anchor="middle">＋</text>
  <rect x="766" y="146" width="226" height="188" rx="11" fill="#ffffff" filter="url(#shS)"/>
  <rect x="766" y="146" width="226" height="30" rx="11" fill="#0f5e63"/>
  <rect x="766" y="161" width="226" height="15" fill="#0f5e63"/>
  <text x="780" y="167" font-size="12" font-weight="700" fill="#ffffff">柱② AI基盤（裏側）</text>
  <text x="780" y="196" font-size="10.5" font-weight="700" fill="#933f12">D▸ 支援者の労力削減・効率化</text>
  <text x="790" y="212" font-size="10" fill="#666">データを基盤上で接続しAIで分析</text>
  <text x="790" y="226" font-size="10" fill="#666">反復・窓口業務をRAGで省力化</text>
  <text x="790" y="240" font-size="10" fill="#666">IR・成果・回答を自動収集・統合分析</text>
  <rect x="780" y="252" width="200" height="74" rx="9" fill="#E5F1F2"/>
  <text x="792" y="270" font-size="10.5" font-weight="700" fill="#14606a">副次的に広がる価値</text>
  <text x="792" y="287" font-size="9.8" fill="#555">許諾済データの共有・利活用</text>
  <text x="800" y="300" font-size="9.4" fill="#777">（学内・行政・企業の共同研究）</text>
  <text x="792" y="316" font-size="9.8" fill="#555">統合分析で経営判断を迅速化／アプリ外販</text>
  <path d="M994 210 L1012 210 L1024 222 L1012 234 L994 234 L1006 222 Z" fill="#14757a"/>
  <circle cx="1158" cy="222" r="118" fill="url(#burst)"/>
  <g stroke="#9fdede" stroke-width="2" opacity="0.7"><line x1="1158" y1="92" x2="1158" y2="116"/><line x1="1158" y1="328" x2="1158" y2="352"/><line x1="1262" y1="222" x2="1278" y2="222"/><line x1="1078" y1="148" x2="1094" y2="164"/><line x1="1222" y1="148" x2="1206" y2="164"/><line x1="1078" y1="296" x2="1094" y2="280"/></g>
  <rect x="1030" y="116" width="218" height="212" rx="16" fill="url(#gGoal)" filter="url(#sh)"/>
  <circle cx="1056" cy="146" r="14" fill="#ffffff"/>
  <g transform="translate(1056,146)" stroke="#1b4f74" stroke-width="2" fill="none"><circle cx="0" cy="0" r="7.5"/><circle cx="0" cy="0" r="3"/></g>
  <text x="1080" y="151" font-size="14" font-weight="700" fill="#ffffff">③ GOAL</text>
  <text x="1050" y="188" font-size="15" font-weight="700" fill="#ffffff">教員の負荷↓</text>
  <text x="1050" y="210" font-size="15" font-weight="700" fill="#7fe3e3">研究力↑</text>
  <text x="1050" y="240" font-size="10.5" fill="#cfe6ee">情報が接続するほど</text>
  <text x="1050" y="256" font-size="10.5" fill="#cfe6ee">学内すべての成果が連鎖して伸びる</text>
  <text x="1050" y="284" font-size="10.5" fill="#cfe6ee">→ 中退率↓・修了率↑</text>
  <text x="1050" y="300" font-size="10.5" fill="#cfe6ee">→ 研究者と支援者が躍動する大学</text>
  <rect x="32" y="356" width="1216" height="56" rx="12" fill="#0e2240" filter="url(#shS)"/>
  <rect x="44" y="368" width="128" height="32" rx="8" fill="#16828a"/>
  <text x="108" y="382" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">想定KPI</text>
  <text x="108" y="396" font-size="9" fill="#bfeaea" text-anchor="middle">※すべて想定/試算</text>
  <text x="240" y="380" font-size="26" font-weight="700" fill="#7fe3e3" text-anchor="middle">+3h</text>
  <text x="240" y="400" font-size="10" fill="#cfe6ee" text-anchor="middle">教員の研究時間/週</text>
  <line x1="356" y1="366" x2="356" y2="402" stroke="#2a4566" stroke-width="1"/>
  <text x="470" y="380" font-size="26" font-weight="700" fill="#7fe3e3" text-anchor="middle">−50%</text>
  <text x="470" y="400" font-size="10" fill="#cfe6ee" text-anchor="middle">定型問い合わせ</text>
  <line x1="586" y1="366" x2="586" y2="402" stroke="#2a4566" stroke-width="1"/>
  <text x="704" y="380" font-size="26" font-weight="700" fill="#7fe3e3" text-anchor="middle">+20pt</text>
  <text x="704" y="400" font-size="10" fill="#cfe6ee" text-anchor="middle">院生の研究力</text>
  <line x1="820" y1="366" x2="820" y2="402" stroke="#2a4566" stroke-width="1"/>
  <text x="938" y="380" font-size="26" font-weight="700" fill="#7fe3e3" text-anchor="middle">+5pt</text>
  <text x="938" y="400" font-size="10" fill="#cfe6ee" text-anchor="middle">修了率（中退率↓）</text>
  <line x1="1056" y1="366" x2="1056" y2="402" stroke="#2a4566" stroke-width="1"/>
  <text x="1152" y="386" font-size="9.5" fill="#9fbace" text-anchor="middle">数値はあくまで</text>
  <text x="1152" y="399" font-size="9.5" fill="#9fbace" text-anchor="middle">想定/試算値</text>
  <text x="32" y="434" font-size="12" font-weight="700" fill="#8aa0b5">段階的に提供価値を拡大（Level 1 → 3）</text>
  <path d="M120 462 C320 462 360 452 540 450 S880 444 1010 442" stroke="#9fc4c4" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" fill="none"/>
  <rect x="150" y="448" width="232" height="34" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="170" y="470" font-size="11.5" font-weight="700" fill="#14606a">L1 図書館アプリ</text>
  <text x="282" y="470" font-size="9.8" fill="#777">情報・資源を集約</text>
  <rect x="500" y="446" width="244" height="34" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="520" y="468" font-size="11.5" font-weight="700" fill="#14606a">L2 AI基盤接続</text>
  <text x="624" y="468" font-size="9.8" fill="#777">伴走・接続・省力化</text>
  <rect x="870" y="442" width="244" height="34" rx="9" fill="#ffffff" filter="url(#shS)"/>
  <text x="890" y="464" font-size="11.5" font-weight="700" fill="#14606a">L3 全学展開</text>
  <text x="986" y="464" font-size="9.8" fill="#777">教育・研究・経営へ</text>
  <circle cx="120" cy="462" r="18" fill="url(#gTeal)" filter="url(#shS)"/><text x="120" y="468" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
  <circle cx="470" cy="450" r="18" fill="url(#gTeal)" filter="url(#shS)"/><text x="470" y="456" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
  <circle cx="840" cy="442" r="18" fill="url(#gTeal)" filter="url(#shS)"/><text x="840" y="448" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
  <text x="32" y="504" font-size="12" font-weight="700" fill="#8aa0b5">受益者：ニーズ → 導入後</text>
  <rect x="32" y="512" width="295" height="86" rx="13" fill="#E5F1F2" filter="url(#shS)"/>
  <circle cx="56" cy="538" r="14" fill="#ffffff"/>
  <g transform="translate(56,539)" stroke="#16828a" stroke-width="2" fill="none"><circle cx="0" cy="-4" r="3.6"/><path d="M-6 7 A6 6 0 0 1 6 7"/></g>
  <text x="80" y="544" font-size="14" font-weight="700" fill="#14606a">学生</text>
  <text x="48" y="568" font-size="10.5" fill="#888">ニーズ：個別最適な学びがほしい</text>
  <text x="48" y="588" font-size="11" font-weight="700" fill="#14606a">導入後：専用AIが伴走し研究力↑</text>
  <rect x="337" y="512" width="295" height="86" rx="13" fill="#E5F1F2" filter="url(#shS)"/>
  <circle cx="361" cy="538" r="14" fill="#ffffff"/>
  <g transform="translate(361,539)" stroke="#16828a" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3"/><circle cx="5" cy="-3" r="3"/><path d="M-9 7 A5 5 0 0 1 0 6"/><path d="M0 6 A5 5 0 0 1 10 7"/></g>
  <text x="385" y="544" font-size="14" font-weight="700" fill="#14606a">教員</text>
  <text x="353" y="568" font-size="10.5" fill="#888">ニーズ：定型支援に時間を奪われる</text>
  <text x="353" y="588" font-size="11" font-weight="700" fill="#14606a">導入後：AIが肩代わり研究時間↑</text>
  <rect x="642" y="512" width="295" height="86" rx="13" fill="#E5F1F2" filter="url(#shS)"/>
  <circle cx="666" cy="538" r="14" fill="#ffffff"/>
  <g transform="translate(666,538)" stroke="#16828a" stroke-width="2" fill="none"><circle cx="0" cy="0" r="3.6"/><path d="M0 -7 V-4.5 M0 7 V4.5 M-7 0 H-4.5 M7 0 H4.5 M-5 -5 L-3.4 -3.4 M5 5 L3.4 3.4 M5 -5 L3.4 -3.4 M-5 5 L-3.4 3.4"/></g>
  <text x="690" y="544" font-size="14" font-weight="700" fill="#14606a">職員</text>
  <text x="658" y="568" font-size="10.5" fill="#888">ニーズ：問い合わせ・反復業務が多い</text>
  <text x="658" y="588" font-size="11" font-weight="700" fill="#14606a">導入後：窓口DXで省力化</text>
  <rect x="947" y="512" width="301" height="86" rx="13" fill="#E5F1F2" filter="url(#shS)"/>
  <circle cx="971" cy="538" r="14" fill="#ffffff"/>
  <g transform="translate(971,539)" stroke="#16828a" stroke-width="2" fill="none"><path d="M-8 -3 L0 -8 L8 -3"/><path d="M-6 -3 V6 M-2 -3 V6 M2 -3 V6 M6 -3 V6 M-8 7 H8"/></g>
  <text x="995" y="544" font-size="14" font-weight="700" fill="#14606a">大学</text>
  <text x="963" y="568" font-size="10.5" fill="#888">ニーズ：データが分散し判断が遅い</text>
  <text x="963" y="588" font-size="11" font-weight="700" fill="#14606a">導入後：統合分析でIR/経営を迅速化</text>
  <path d="M32 608 L1206 608 L1248 646 L1206 684 L32 684 Z" fill="url(#gNavH)"/>
  <text x="620" y="652" font-size="19" font-weight="700" fill="#ffffff" text-anchor="middle">分散する〈情報・データ・支援・機会〉を接続し、研究者と支援者が躍動する Nexus University へ</text>
</svg>

<!-- variant-68：ネイビー＋tealの寒色クール。横3幕フロー(①課題A-D→②2本柱アプリ×AI基盤→③GOAL burst)＋KPIband(想定/試算明示)＋Level1-3ロードマップ＋受益者row(ニーズ→導入後)。ゾーンは薄teal/薄warmの面塗り＋影で区切り太枠なし。課題A-Dと打ち手A-Dを1:1対応。packed密度。 -->
