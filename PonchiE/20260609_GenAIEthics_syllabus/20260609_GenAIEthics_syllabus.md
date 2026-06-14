---
marp: true
theme: ponchie
paginate: false
size: 4:3
header: ''
footer: ''
html: true
style: |
  section { width: 960px; height: 720px; }
---

<!-- _class: onepager -->

<svg viewBox="0 0 1280 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gHead" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f3d5c"/><stop offset="1" stop-color="#1A7A5E"/></linearGradient>
    <linearGradient id="gP1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient>
    <linearGradient id="gP1H" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient>
    <linearGradient id="gP2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#0f4a39"/></linearGradient>
    <linearGradient id="gP2H" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f8f6e"/><stop offset="1" stop-color="#125642"/></linearGradient>
    <linearGradient id="gP3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gP3H" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec9554"/><stop offset="1" stop-color="#d2772f"/></linearGradient>
    <linearGradient id="gP4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>
    <linearGradient id="gP4H" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>
    <linearGradient id="gGray" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b6b78"/><stop offset="1" stop-color="#3d4a55"/></linearGradient>
    <linearGradient id="gFoot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a6242f"/><stop offset="1" stop-color="#6d121a"/></linearGradient>
    <linearGradient id="gTime" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b82f6"/><stop offset="0.5" stop-color="#1f8f6e"/><stop offset="1" stop-color="#6d28d9"/></linearGradient>
    <radialGradient id="gGoal" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff7df"/><stop offset="0.55" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f59e0b" stop-opacity="0.30"/><stop offset="1" stop-color="#f59e0b" stop-opacity="0"/></radialGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#0f2a3a" flood-opacity="0.22"/></filter>
    <filter id="shSoft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f2a3a" flood-opacity="0.14"/></filter>
  </defs>
  <rect x="0" y="0" width="1280" height="960" fill="#FBFDFC"/>
  <rect x="0" y="0" width="1280" height="76" fill="url(#gHead)"/>
  <text x="36" y="38" font-size="28" font-weight="700" fill="#ffffff">生成AIと研究倫理・リテラシー</text>
  <text x="36" y="62" font-size="13" fill="#cfe6dd">大学院共通｜全8回 グラフィックシラバス　／　担当：國本・檜垣・田川</text>
  <rect x="1112" y="20" width="134" height="36" rx="8" fill="#ffffff"/>
  <image href="./src/chiba-logo.png" x="1124" y="27" width="110" height="22"/>
  <rect x="0" y="76" width="1280" height="44" fill="#eef3f1"/>
  <g font-size="12.5" fill="#374151">
    <rect x="36" y="86" width="158" height="24" rx="12" fill="#ffffff" stroke="#d6ddda"/><text x="48" y="103"><tspan font-weight="700" fill="#0f3d5c">使用言語</tspan>　日本語</text>
    <rect x="202" y="86" width="158" height="24" rx="12" fill="#ffffff" stroke="#d6ddda"/><text x="214" y="103"><tspan font-weight="700" fill="#0f3d5c">期別</tspan>　前期後半</text>
    <rect x="368" y="86" width="188" height="24" rx="12" fill="#ffffff" stroke="#d6ddda"/><text x="380" y="103"><tspan font-weight="700" fill="#0f3d5c">履修年次</tspan>　1〜4年／2–3ターム</text>
  </g>
  <g font-size="12" font-weight="700">
    <rect x="744" y="86" width="118" height="24" rx="12" fill="#eef2f7" stroke="#c7d2e0"/><circle cx="760" cy="98" r="6" fill="#6b7280"/><path d="M757 95 L764 98 L757 101 Z" fill="#ffffff"/><text x="772" y="103" fill="#4b5563">オンデマンド</text>
    <rect x="872" y="86" width="120" height="24" rx="12" fill="#e8eefc" stroke="#bcd0f5"/><path d="M885 95 L879 98 L885 101 M883 98 H895 M895 95 L901 98 L895 101" stroke="#1d4ed8" stroke-width="1.6" fill="none"/><text x="906" y="103" fill="#1d4ed8">同時双方向</text>
    <rect x="1002" y="86" width="142" height="24" rx="12" fill="#fbede2" stroke="#f0cda9"/><path d="M1016 102 V95 L1022 91 L1028 95 V102 Z" stroke="#d2772f" stroke-width="1.5" fill="none"/><text x="1034" y="103" fill="#d2772f">対面ハイブリッド</text>
  </g>
  <rect x="32" y="132" width="40" height="726" rx="14" fill="url(#gTime)" opacity="0.92"/>
  <path d="M36 838 L68 838 L52 866 Z" fill="#6d28d9"/>
  <text x="52" y="172" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">6月</text>
  <text x="52" y="500" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">7月</text>
  <text x="52" y="820" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">8月</text>
  <text x="52" y="660" font-size="11" fill="#ffffff" text-anchor="middle" opacity="0.85" transform="rotate(-90 52 660)">学びの深化</text>
  <g filter="url(#shSoft)"><rect x="92" y="132" width="200" height="170" rx="16" fill="#e8eefc"/></g>
  <rect x="92" y="132" width="200" height="34" rx="16" fill="url(#gP1H)"/><rect x="92" y="150" width="200" height="16" fill="url(#gP1H)"/>
  <circle cx="116" cy="149" r="13" fill="#ffffff"/><g transform="translate(116,149)" stroke="#1d4ed8" stroke-width="2" fill="none"><path d="M-8 -7 L0 -5 L0 8 L-8 6 Z"/><path d="M8 -7 L0 -5 L0 8 L8 6 Z"/></g>
  <text x="138" y="154" font-size="14" font-weight="700" fill="#ffffff">STEP 1 ナレッジ</text>
  <text x="108" y="196" font-size="15" font-weight="700" fill="#1d4ed8">基礎を「知る」</text>
  <text x="108" y="220" font-size="12" fill="#374151">生成AI・倫理・学術情報</text>
  <text x="108" y="240" font-size="12" fill="#374151">流通の基礎リテラシー</text>
  <rect x="108" y="262" width="168" height="24" rx="12" fill="#ffffff" stroke="#bcd0f5"/><text x="120" y="279" font-size="12" font-weight="700" fill="#1d4ed8">第1–3回 ／ オンデマンド</text>
  <g filter="url(#shSoft)"><rect x="92" y="318" width="200" height="170" rx="16" fill="#E4F2EC"/></g>
  <rect x="92" y="318" width="200" height="34" rx="16" fill="url(#gP2H)"/><rect x="92" y="336" width="200" height="16" fill="url(#gP2H)"/>
  <circle cx="116" cy="335" r="13" fill="#ffffff"/><g transform="translate(116,335)" stroke="#125642" stroke-width="2" fill="none"><path d="M0 -8 V6 M-8 -3 H8 M-6 6 H6"/><circle cx="-6" cy="-1" r="2.4"/><circle cx="6" cy="-1" r="2.4"/></g>
  <text x="138" y="355" font-size="13.5" font-weight="700" fill="#ffffff">STEP 2 研究・論文</text>
  <text x="108" y="382" font-size="15" font-weight="700" fill="#125642">ルールを「考える」</text>
  <text x="108" y="406" font-size="12" fill="#374151">AI利用ポリシーと</text>
  <text x="108" y="426" font-size="12" fill="#374151">各分野の受容状況を調査</text>
  <rect x="108" y="448" width="168" height="24" rx="12" fill="#ffffff" stroke="#9ecbbb"/><text x="120" y="465" font-size="12" font-weight="700" fill="#125642">第4–5回 ／ 調査→共有</text>
  <g filter="url(#shSoft)"><rect x="92" y="504" width="200" height="170" rx="16" fill="#FBEDE2"/></g>
  <rect x="92" y="504" width="200" height="34" rx="16" fill="url(#gP3H)"/><rect x="92" y="522" width="200" height="16" fill="url(#gP3H)"/>
  <circle cx="116" cy="521" r="13" fill="#ffffff"/><g transform="translate(116,521)" stroke="#d2772f" stroke-width="2" fill="none"><circle cx="0" cy="0" r="4"/><path d="M0 -8 V-5 M0 8 V5 M-8 0 H-5 M8 0 H5 M-6 -6 L-4 -4 M6 6 L4 4 M6 -6 L4 -4 M-6 6 L-4 4"/></g>
  <text x="138" y="541" font-size="13.5" font-weight="700" fill="#ffffff">STEP 3 研究手法</text>
  <text x="108" y="568" font-size="15" font-weight="700" fill="#d2772f">手法を「使う」</text>
  <text x="108" y="592" font-size="12" fill="#374151">研究でのAI活用手法を</text>
  <text x="108" y="612" font-size="12" fill="#374151">調査し学び合う</text>
  <rect x="108" y="634" width="168" height="24" rx="12" fill="#ffffff" stroke="#f0cda9"/><text x="120" y="651" font-size="12" font-weight="700" fill="#d2772f">第6–7回 ／ 調査→共有</text>
  <g filter="url(#shSoft)"><rect x="92" y="690" width="200" height="168" rx="16" fill="#efeafe"/></g>
  <rect x="92" y="690" width="200" height="34" rx="16" fill="url(#gP4H)"/><rect x="92" y="708" width="200" height="16" fill="url(#gP4H)"/>
  <circle cx="116" cy="707" r="13" fill="#ffffff"/><g transform="translate(116,707)" stroke="#6d28d9" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="138" y="727" font-size="13.5" font-weight="700" fill="#ffffff">STEP 4 議論</text>
  <text x="108" y="754" font-size="15" font-weight="700" fill="#6d28d9">学びを「統合する」</text>
  <text x="108" y="778" font-size="12" fill="#374151">会場全体で議論し、</text>
  <text x="108" y="798" font-size="12" fill="#374151">最終レポートへ昇華</text>
  <rect x="108" y="820" width="168" height="24" rx="12" fill="#ffffff" stroke="#cbb8f5"/><text x="120" y="837" font-size="12" font-weight="700" fill="#6d28d9">第8回 ／ 対面ハイブリッド</text>
  <g filter="url(#sh)"><rect x="312" y="132" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="312" y="132" width="296" height="30" rx="14" fill="url(#gP1H)"/><rect x="312" y="148" width="296" height="14" fill="url(#gP1H)"/>
  <circle cx="335" cy="147" r="13" fill="#ffffff"/><text x="335" y="152" font-size="14" font-weight="700" fill="#1d4ed8" text-anchor="middle">1</text>
  <text x="356" y="152" font-size="13" font-weight="700" fill="#ffffff">第1回 ・ ナレッジ①</text>
  <text x="328" y="186" font-size="15" font-weight="700" fill="#1f2937">生成AIと倫理とリテラシー</text>
  <text x="328" y="210" font-size="12" fill="#4b5563">研究倫理を概観し、生成AIの基礎</text>
  <text x="328" y="228" font-size="12" fill="#4b5563">リテラシーを学ぶ。授業目標を俯瞰</text>
  <text x="328" y="252" font-size="12" fill="#6b7280">担当：國本・檜垣・田川</text>
  <rect x="328" y="262" width="128" height="22" rx="11" fill="#eef2f7"/><circle cx="342" cy="273" r="5.5" fill="#6b7280"/><path d="M339.5 270.5 L345 273 L339.5 275.5 Z" fill="#fff"/><text x="352" y="277" font-size="11.5" font-weight="700" fill="#4b5563">公開 6/9</text>
  <text x="328" y="296" font-size="11.5" fill="#1d4ed8"><tspan font-weight="700">課題</tspan> 関心を含む自己紹介の記入</text>
  <g filter="url(#sh)"><rect x="630" y="132" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="630" y="132" width="296" height="30" rx="14" fill="url(#gP1H)"/><rect x="630" y="148" width="296" height="14" fill="url(#gP1H)"/>
  <circle cx="653" cy="147" r="13" fill="#ffffff"/><text x="653" y="152" font-size="14" font-weight="700" fill="#1d4ed8" text-anchor="middle">2</text>
  <text x="674" y="152" font-size="13" font-weight="700" fill="#ffffff">第2回 ・ ナレッジ②</text>
  <text x="646" y="186" font-size="15" font-weight="700" fill="#1f2937">学術情報流通の仕組み</text>
  <text x="646" y="210" font-size="12" fill="#4b5563">成果公表（論文・査読）の仕組みと</text>
  <text x="646" y="228" font-size="12" fill="#4b5563">倫理。AIで何が変わるかを考える</text>
  <text x="646" y="252" font-size="12" fill="#6b7280">担当：國本</text>
  <rect x="646" y="262" width="128" height="22" rx="11" fill="#eef2f7"/><circle cx="660" cy="273" r="5.5" fill="#6b7280"/><path d="M657.5 270.5 L663 273 L657.5 275.5 Z" fill="#fff"/><text x="670" y="277" font-size="11.5" font-weight="700" fill="#4b5563">公開 6/16</text>
  <text x="646" y="296" font-size="11.5" fill="#1d4ed8"><tspan font-weight="700">課題</tspan> グループワークのキックオフ</text>
  <g filter="url(#sh)"><rect x="948" y="132" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="948" y="132" width="296" height="30" rx="14" fill="url(#gP1H)"/><rect x="948" y="148" width="296" height="14" fill="url(#gP1H)"/>
  <circle cx="971" cy="147" r="13" fill="#ffffff"/><text x="971" y="152" font-size="14" font-weight="700" fill="#1d4ed8" text-anchor="middle">3</text>
  <text x="992" y="152" font-size="13" font-weight="700" fill="#ffffff">第3回 ・ ナレッジ③</text>
  <text x="964" y="186" font-size="15" font-weight="700" fill="#1f2937">生成AIの仕組み</text>
  <text x="964" y="210" font-size="12" fill="#4b5563">超ミニチュアを創る体験で仕組みを</text>
  <text x="964" y="228" font-size="12" fill="#4b5563">理解し、関わり方の「勘」を得る</text>
  <text x="964" y="252" font-size="12" fill="#6b7280">担当：田川</text>
  <rect x="964" y="262" width="128" height="22" rx="11" fill="#eef2f7"/><circle cx="978" cy="273" r="5.5" fill="#6b7280"/><path d="M975.5 270.5 L981 273 L975.5 275.5 Z" fill="#fff"/><text x="988" y="277" font-size="11.5" font-weight="700" fill="#4b5563">公開 6/23</text>
  <text x="964" y="296" font-size="11.5" fill="#1d4ed8"><tspan font-weight="700">課題</tspan> Google Colab での演習</text>
  <path d="M610 205 L624 205 L632 217 L624 229 L610 229 L618 217 Z" fill="#93b6f0"/>
  <path d="M928 205 L942 205 L950 217 L942 229 L928 229 L936 217 Z" fill="#93b6f0"/>
  <g filter="url(#sh)"><rect x="312" y="318" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="312" y="318" width="296" height="30" rx="14" fill="url(#gP2H)"/><rect x="312" y="334" width="296" height="14" fill="url(#gP2H)"/>
  <circle cx="335" cy="333" r="13" fill="#ffffff"/><text x="335" y="338" font-size="14" font-weight="700" fill="#125642" text-anchor="middle">4</text>
  <text x="356" y="338" font-size="12.5" font-weight="700" fill="#ffffff">第4回 ・ 研究・論文①</text>
  <text x="328" y="372" font-size="14.5" font-weight="700" fill="#1f2937">アカデミックインテグリティ</text>
  <text x="328" y="394" font-size="12" fill="#4b5563">論文誌・学会のAI利用ポリシーを</text>
  <text x="328" y="412" font-size="12" fill="#4b5563">調査し、考え方と線引きを把握</text>
  <text x="328" y="436" font-size="12" fill="#6b7280">担当：國本・田川</text>
  <rect x="328" y="446" width="128" height="22" rx="11" fill="#eef2f7"/><circle cx="342" cy="457" r="5.5" fill="#6b7280"/><path d="M339.5 454.5 L345 457 L339.5 459.5 Z" fill="#fff"/><text x="352" y="461" font-size="11.5" font-weight="700" fill="#4b5563">公開 6/30</text>
  <text x="328" y="481" font-size="11.5" fill="#125642"><tspan font-weight="700">課題</tspan> 共有資料＋ポリシー一覧表</text>
  <g filter="url(#sh)"><rect x="648" y="318" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="648" y="318" width="296" height="30" rx="14" fill="url(#gP2H)"/><rect x="648" y="334" width="296" height="14" fill="url(#gP2H)"/>
  <circle cx="671" cy="333" r="13" fill="#ffffff"/><text x="671" y="338" font-size="14" font-weight="700" fill="#125642" text-anchor="middle">5</text>
  <text x="692" y="338" font-size="12.5" font-weight="700" fill="#ffffff">第5回 ・ 研究・論文②</text>
  <text x="664" y="372" font-size="14.5" font-weight="700" fill="#1f2937">受容状況の情報共有</text>
  <text x="664" y="394" font-size="12" fill="#4b5563">第4回の調査結果をクラス全体で</text>
  <text x="664" y="412" font-size="12" fill="#4b5563">共有する</text>
  <text x="664" y="436" font-size="12" fill="#6b7280">担当：國本・田川</text>
  <rect x="664" y="446" width="150" height="22" rx="11" fill="#e8eefc"/><path d="M677 444 L671 457 L677 470 M675 457 H691 M691 444 L697 457 L691 470" stroke="#1d4ed8" stroke-width="1.4" fill="none"/><text x="702" y="461" font-size="11.5" font-weight="700" fill="#1d4ed8">同時双方向 7/30</text>
  <text x="664" y="481" font-size="11.5" fill="#125642"><tspan font-weight="700">課題</tspan> 相互評価・リフレクション</text>
  <path d="M612 391 L626 391 L634 403 L626 415 L612 415 L620 403 Z" fill="#7cc3ab"/>
  <g filter="url(#sh)"><rect x="312" y="504" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="312" y="504" width="296" height="30" rx="14" fill="url(#gP3H)"/><rect x="312" y="520" width="296" height="14" fill="url(#gP3H)"/>
  <circle cx="335" cy="519" r="13" fill="#ffffff"/><text x="335" y="524" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">6</text>
  <text x="356" y="524" font-size="12.5" font-weight="700" fill="#ffffff">第6回 ・ 研究手法①</text>
  <text x="328" y="558" font-size="15" font-weight="700" fill="#1f2937">AIを研究で用いる</text>
  <text x="328" y="580" font-size="12" fill="#4b5563">各分野の研究でのAI・生成AIの</text>
  <text x="328" y="598" font-size="12" fill="#4b5563">利活用を調査し、手法を学び合う</text>
  <text x="328" y="622" font-size="12" fill="#6b7280">担当：檜垣・田川</text>
  <rect x="328" y="632" width="128" height="22" rx="11" fill="#eef2f7"/><circle cx="342" cy="643" r="5.5" fill="#6b7280"/><path d="M339.5 640.5 L345 643 L339.5 645.5 Z" fill="#fff"/><text x="352" y="647" font-size="11.5" font-weight="700" fill="#4b5563">公開 7/7</text>
  <text x="328" y="667" font-size="11.5" fill="#d2772f"><tspan font-weight="700">課題</tspan> 第7回で共有する資料の準備</text>
  <g filter="url(#sh)"><rect x="648" y="504" width="296" height="170" rx="14" fill="#ffffff"/></g>
  <rect x="648" y="504" width="296" height="30" rx="14" fill="url(#gP3H)"/><rect x="648" y="520" width="296" height="14" fill="url(#gP3H)"/>
  <circle cx="671" cy="519" r="13" fill="#ffffff"/><text x="671" y="524" font-size="14" font-weight="700" fill="#d2772f" text-anchor="middle">7</text>
  <text x="692" y="524" font-size="12.5" font-weight="700" fill="#ffffff">第7回 ・ 研究手法②</text>
  <text x="664" y="558" font-size="15" font-weight="700" fill="#1f2937">調査と情報交換</text>
  <text x="664" y="580" font-size="12" fill="#4b5563">第6回の調査結果をクラス全体で</text>
  <text x="664" y="598" font-size="12" fill="#4b5563">共有する</text>
  <text x="664" y="622" font-size="12" fill="#6b7280">担当：田川・國本</text>
  <rect x="664" y="632" width="158" height="22" rx="11" fill="#fbede2"/><path d="M678 648 V641 L684 637 L690 641 V648 Z" stroke="#d2772f" stroke-width="1.4" fill="none"/><text x="696" y="647" font-size="11.5" font-weight="700" fill="#d2772f">対面ハイブリッド 8/18</text>
  <text x="664" y="667" font-size="11.5" fill="#d2772f"><tspan font-weight="700">課題</tspan> 相互評価・リフレクション</text>
  <path d="M612 577 L626 577 L634 589 L626 601 L612 601 L620 589 Z" fill="#eeb98a"/>
  <g filter="url(#shSoft)"><rect x="966" y="318" width="278" height="356" rx="16" fill="#f4f5f7"/></g>
  <rect x="966" y="318" width="278" height="34" rx="16" fill="url(#gGray)"/><rect x="966" y="336" width="278" height="16" fill="url(#gGray)"/>
  <circle cx="990" cy="335" r="13" fill="#ffffff"/><g transform="translate(990,335)" stroke="#3d4a55" stroke-width="2" fill="none"><circle cx="-4" cy="-3" r="3.2"/><circle cx="5" cy="-3" r="3.2"/><path d="M-10 7 A6 6 0 0 1 0 6"/><path d="M0 6 A6 6 0 0 1 11 7"/></g>
  <text x="1012" y="340" font-size="14" font-weight="700" fill="#ffffff">並行：グループワーク</text>
  <text x="984" y="376" font-size="12" fill="#374151">第2回キックオフから継続。チームで</text>
  <text x="984" y="394" font-size="12" fill="#374151">調査し、共有回で発表する。</text>
  <g filter="url(#shSoft)"><rect x="984" y="408" width="242" height="58" rx="10" fill="#ffffff"/></g>
  <circle cx="1004" cy="437" r="8" fill="#1d4ed8"/><text x="1004" y="441" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">5</text>
  <text x="1020" y="431" font-size="12" font-weight="700" fill="#1d4ed8">7/30 第5回で全体共有</text>
  <text x="1020" y="451" font-size="11.5" fill="#4b5563">AI利用ポリシー一覧表を提示</text>
  <g filter="url(#shSoft)"><rect x="984" y="476" width="242" height="58" rx="10" fill="#ffffff"/></g>
  <circle cx="1004" cy="505" r="8" fill="#d2772f"/><text x="1004" y="509" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">7</text>
  <text x="1020" y="499" font-size="12" font-weight="700" fill="#d2772f">8/18 第7回で全体共有</text>
  <text x="1020" y="519" font-size="11.5" fill="#4b5563">研究でのAI活用手法を交換</text>
  <g filter="url(#shSoft)"><rect x="984" y="544" width="242" height="62" rx="10" fill="#fff8ec"/></g>
  <text x="996" y="566" font-size="12" font-weight="700" fill="#b45309">全員で作る成果物</text>
  <text x="996" y="586" font-size="11.5" fill="#4b5563">2026年夏現在の(生成)AI利用</text>
  <text x="996" y="602" font-size="11.5" fill="#4b5563">ポリシー一覧表</text>
  <text x="984" y="632" font-size="11.5" fill="#6b7280">第5回より前に第6回の履修を開始</text>
  <text x="984" y="652" font-size="11.5" fill="#6b7280">第2ターム中に全回の視聴を完了</text>
  <path d="M962 405 L948 405 L940 393 L948 381 L962 381 L954 393 Z" fill="#bcc4cc"/>
  <path d="M962 590 L948 590 L940 578 L948 566 L962 566 L954 578 Z" fill="#bcc4cc"/>
  <g filter="url(#sh)"><rect x="312" y="690" width="296" height="168" rx="14" fill="#ffffff"/></g>
  <rect x="312" y="690" width="296" height="30" rx="14" fill="url(#gP4H)"/><rect x="312" y="706" width="296" height="14" fill="url(#gP4H)"/>
  <circle cx="335" cy="705" r="13" fill="#ffffff"/><text x="335" y="710" font-size="14" font-weight="700" fill="#6d28d9" text-anchor="middle">8</text>
  <text x="356" y="710" font-size="13" font-weight="700" fill="#ffffff">第8回 ・ 議論</text>
  <text x="328" y="744" font-size="15" font-weight="700" fill="#1f2937">議論とリフレクション</text>
  <text x="328" y="768" font-size="12" fill="#4b5563">学んだことを軸に、会場全体で議論。</text>
  <text x="328" y="786" font-size="12" fill="#4b5563">積極的に発言し参加する</text>
  <text x="328" y="810" font-size="12" fill="#6b7280">担当：國本・田川</text>
  <rect x="328" y="820" width="158" height="22" rx="11" fill="#fbede2"/><path d="M342 836 V829 L348 825 L354 829 V836 Z" stroke="#d2772f" stroke-width="1.4" fill="none"/><text x="360" y="835" font-size="11.5" font-weight="700" fill="#d2772f">対面ハイブリッド 8/18</text>
  <path d="M612 763 L626 763 L634 775 L626 787 L612 787 L620 775 Z" fill="#bfa3ee"/>
  <circle cx="940" cy="774" r="120" fill="url(#glow)"/>
  <g filter="url(#sh)"><rect x="648" y="690" width="596" height="168" rx="16" fill="url(#gGoal)"/></g>
  <circle cx="700" cy="730" r="22" fill="#ffffff" filter="url(#shSoft)"/><g transform="translate(700,730)" stroke="#d2772f" stroke-width="2.4" fill="none"><circle cx="0" cy="0" r="11"/><circle cx="0" cy="0" r="4.5"/></g>
  <text x="736" y="726" font-size="20" font-weight="700" fill="#7c2d12">GOAL ・ 最終レポート</text>
  <text x="736" y="752" font-size="13" fill="#92400e">本授業の学びを総括し、これからの研究姿勢を言葉にする</text>
  <g filter="url(#shSoft)"><rect x="668" y="772" width="556" height="68" rx="12" fill="#ffffff"/></g>
  <text x="688" y="800" font-size="15" font-weight="700" fill="#7c2d12">「自身は今後、研究でAIと</text>
  <text x="688" y="824" font-size="15" font-weight="700" fill="#7c2d12">　どのように関わって行きたいと考えるか」</text>
  <text x="1208" y="852" font-size="11.5" fill="#b45309" text-anchor="end">をまとめる</text>
  <path d="M608 774 L640 774 L640 766 L656 778 L640 790 L640 782 L608 782 Z" fill="#f59e0b"/>
</svg>
