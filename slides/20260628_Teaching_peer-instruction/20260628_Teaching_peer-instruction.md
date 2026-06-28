---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">Peer Instruction</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝navy（濃紺）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #19284A; --accent-dark: #0D192F; --accent-soft: #E7EAF2; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 33%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  .pi-flow { width: 1140px; margin: 6px auto 0; display: block; }
  .pi-flow text { font-family: inherit; }
---

<div class="page-title">Peer Instruction のフロー</div>

<svg class="pi-flow" viewBox="0 0 1140 560" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#222"/></marker>
    <marker id="aho" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#E07A2C"/></marker>
  </defs>
  <!-- black connectors -->
  <path d="M570 88 L570 118" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <!-- split bar under concept-test box -->
  <path d="M210 196 L930 196" stroke="#222" stroke-width="2.4" fill="none"/>
  <path d="M455 168 L455 196" stroke="#222" stroke-width="2.4" fill="none"/>
  <path d="M685 168 L685 196" stroke="#222" stroke-width="2.4" fill="none"/>
  <path d="M210 196 L210 240" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <path d="M570 196 L570 240" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <path d="M930 196 L930 240" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <!-- left column down -->
  <path d="M210 286 L210 320" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <!-- center column down -->
  <path d="M570 286 L570 320" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <path d="M570 366 L570 400" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <!-- right column down -->
  <path d="M930 286 L930 320" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <path d="M930 366 L930 400" stroke="#222" stroke-width="2.4" fill="none" marker-end="url(#ah)"/>
  <!-- orange loop: 概念の再確認 -> back up to concept test -->
  <path d="M310 343 L420 343 L420 153" stroke="#E07A2C" stroke-width="2.6" fill="none" marker-end="url(#aho)"/>
  <!-- orange: 学生再投票 -> 解説 -->
  <path d="M670 423 L800 423 L800 366" stroke="#E07A2C" stroke-width="2.6" fill="none" marker-end="url(#aho)"/>

  <!-- 短い講義 -->
  <rect x="490" y="50" width="160" height="38" rx="4" fill="#EDEDED"/>
  <text x="570" y="75" text-anchor="middle" font-size="24" fill="#1a1a1a">短い講義</text>

  <!-- コンセプトテスト提示 / 投票 -->
  <rect x="430" y="118" width="280" height="50" rx="4" fill="#FCF3C5"/>
  <text x="570" y="139" text-anchor="middle" font-size="23" fill="#1a1a1a">コンセプトテスト提示</text>
  <text x="570" y="162" text-anchor="middle" font-size="23" fill="#1a1a1a">投票</text>

  <!-- 正答率 < 30% (dark red) -->
  <rect x="100" y="240" width="220" height="46" rx="3" fill="#7B0F12"/>
  <text x="210" y="270" text-anchor="middle" font-size="24" fill="#fff">正答率 &lt; 30%</text>
  <!-- 正答率 30 - 70% (green) -->
  <rect x="460" y="240" width="220" height="46" rx="3" fill="#3E8E41"/>
  <text x="570" y="270" text-anchor="middle" font-size="24" fill="#fff">正答率  30 - 70%</text>
  <!-- 正答率 > 70% (blue) -->
  <rect x="820" y="240" width="220" height="46" rx="3" fill="#28597C"/>
  <text x="930" y="270" text-anchor="middle" font-size="24" fill="#fff">正答率  &gt; 70%</text>

  <!-- 概念の再確認 -->
  <rect x="110" y="320" width="200" height="46" rx="3" fill="#DDEBCB"/>
  <text x="210" y="350" text-anchor="middle" font-size="23" fill="#1a1a1a">概念の再確認</text>
  <!-- ペアで議論 -->
  <rect x="470" y="320" width="200" height="46" rx="3" fill="#DDEBCB"/>
  <text x="570" y="350" text-anchor="middle" font-size="23" fill="#1a1a1a">ペアで議論</text>
  <!-- 解説 -->
  <rect x="850" y="320" width="160" height="46" rx="3" fill="#DDEBCB"/>
  <text x="930" y="350" text-anchor="middle" font-size="23" fill="#1a1a1a">解説</text>

  <!-- 学生再投票 -->
  <rect x="470" y="400" width="200" height="46" rx="3" fill="#FCF3C5"/>
  <text x="570" y="430" text-anchor="middle" font-size="23" fill="#1a1a1a">学生再投票</text>
  <!-- 次のトピック -->
  <rect x="850" y="400" width="160" height="46" rx="3" fill="#EDEDED"/>
  <text x="930" y="430" text-anchor="middle" font-size="23" fill="#1a1a1a">次のトピック</text>
</svg>

<!--
- Peer Instruction の基本フロー。短い講義のあとコンセプトテストを提示して投票。
- 正答率で3分岐：30%未満なら概念を再確認してテストへ戻る、30-70%ならペアで議論して学生が再投票、70%超なら解説して次のトピックへ。
-->
