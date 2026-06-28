---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">第8講</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 14%; }
  section .page-title { left: 13%; width: 30%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
  /* SAP CHART 図 */
  .sap-wrap { position: absolute; left: 28px; right: calc(var(--pip-w) + 8px); top: calc(var(--header-h) + 104px); bottom: 60px; }
  .sap-wrap svg { width: 100%; height: 100%; }
  .sap-note { position: absolute; left: 78px; bottom: 18px; font-size: 18px; color: #777; }
  .sap-instr { position: absolute; left: 30px; top: calc(var(--header-h) + 8px); width: 60%;
    font-size: 18px; line-height: 1.4; color: #9aa0a6; }
---

<div class="page-title">SAP CHART</div>

<div class="sap-instr">
<div>・付箋が重ねてありますので、ドラッグして使います</div>
<div>・足りなくなったらコピーしてください。</div>
<div>・重なりの順番を変更したいときは、「配置」</div>
<div>・拡大は「表示」のズーム</div>
</div>

<div class="sap-wrap">
<svg viewBox="0 0 1180 660" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
<defs>
<marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#9aa0a6"/></marker>
</defs>
<!-- ===== 上部タブ ===== -->
<g>
<rect x="190" y="0" width="150" height="34" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>
<text x="265" y="23" text-anchor="middle" font-size="17" font-weight="800" fill="var(--accent-dark)">PURPOSE</text>
<rect x="430" y="0" width="320" height="34" rx="9" fill="var(--accent)" />
<text x="590" y="24" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" letter-spacing="1">INTEGRATION</text>
<rect x="840" y="0" width="150" height="34" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>
<text x="915" y="23" text-anchor="middle" font-size="17" font-weight="800" fill="var(--accent-dark)">WRAP-UP</text>
<line x1="1010" y1="14" x2="1180" y2="14" stroke="#444" stroke-width="1.2"/><text x="1010" y="11" font-size="11" font-weight="700" fill="#444">NAME</text>
<line x1="1010" y1="34" x2="1180" y2="34" stroke="#444" stroke-width="1.2"/><text x="1010" y="31" font-size="11" font-weight="700" fill="#444">DATE</text>
</g>
<!-- ===== 列見出し ===== -->
<text x="180" y="74" text-anchor="middle" font-size="26" font-weight="800" fill="#b9bcc0">TEACHING</text>
<text x="590" y="74" text-anchor="middle" font-size="20" font-weight="700" fill="#c4c7cb">ACADEMIC GOAL</text>
<text x="1000" y="74" text-anchor="middle" font-size="26" font-weight="800" fill="#b9bcc0">RESEARCH</text>
<!-- ===== 左：TEACHING ===== -->
<g>
<rect x="14" y="86" width="332" height="40" rx="9" fill="#cfd2d6"/><text x="180" y="114" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">GOAL</text>
<rect x="14" y="130" width="332" height="40" rx="9" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/><text x="180" y="158" text-anchor="middle" font-size="22" font-weight="700" fill="#c4c7cb">PHILOSOPHY</text>
<rect x="14" y="174" width="332" height="62" rx="9" fill="#cfd2d6"/><text x="180" y="214" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">STRATEGY</text>
<path d="M150,206 h60 v-16 h22 l-32,-26 -32,26 h22 z" fill="#eceef0" stroke="#cfd2d6"/><text x="180" y="190" text-anchor="middle" font-size="14" fill="#8a8d91">Why</text>
<rect x="14" y="240" width="332" height="100" rx="9" fill="#cfd2d6"/><text x="180" y="298" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">METHODOLOGY</text>
<path d="M150,272 h60 v-22 h22 l-32,-28 -32,28 h22 z" fill="#eceef0" stroke="#cfd2d6"/><text x="180" y="258" text-anchor="middle" font-size="14" fill="#8a8d91">Why</text>
<rect x="60" y="344" width="286" height="150" rx="9" fill="#cfd2d6"/><text x="203" y="425" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">TEACHING FACT</text>
<path d="M173,360 h60 v18 h22 l-52,26 -52,-26 h22 z" fill="#eceef0" stroke="#cfd2d6"/><text x="203" y="384" text-anchor="middle" font-size="13" fill="#8a8d91">How</text>
<rect x="60" y="498" width="286" height="90" rx="9" fill="#cfd2d6"/><text x="203" y="555" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">EVALUATION</text><text x="203" y="578" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">ACCOMPLISHMENT</text>
<path d="M175,500 h56 v16 h20 l-48,24 -48,-24 h20 z" fill="#eceef0" stroke="#cfd2d6"/><text x="203" y="520" text-anchor="middle" font-size="12" fill="#8a8d91">As a result</text>
<!-- 左縦帯 -->
<rect x="14" y="344" width="42" height="244" rx="8" fill="#cfd2d6"/>
<text x="35" y="466" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" transform="rotate(-90 35 466)">IMPROVEMENT EFFORT</text>
</g>
<!-- ===== 中央：ACADEMIC GOAL ===== -->
<g>
<rect x="430" y="86" width="320" height="38" rx="9" fill="#d7dadd"/><text x="590" y="113" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">ACADEMIC GOAL</text>
<rect x="430" y="128" width="320" height="38" rx="9" fill="#d7dadd"/><text x="590" y="155" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">ACADEMIC CORE</text>
<rect x="430" y="170" width="320" height="56" rx="9" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/><text x="590" y="195" text-anchor="middle" font-size="19" font-weight="700" fill="#c4c7cb">ACCOMPLISHME</text><text x="590" y="216" text-anchor="middle" font-size="19" font-weight="700" fill="#c4c7cb">NT</text>
<!-- INTERACTION -->
<rect x="430" y="230" width="320" height="130" rx="12" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/>
<text x="590" y="262" text-anchor="middle" font-size="22" font-weight="700" fill="#c4c7cb">INTERACTION</text>
<path d="M470,318 Q590,278 710,318" fill="none" stroke="#c4c7cb" stroke-width="1.6" marker-start="url(#ah)" marker-end="url(#ah)"/>
<text x="470" y="338" text-anchor="middle" font-size="14" font-weight="700" fill="#9aa0a6">EDU</text>
<text x="710" y="338" text-anchor="middle" font-size="14" font-weight="700" fill="#9aa0a6">RES</text>
<rect x="448" y="346" width="120" height="86" rx="9" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/>
<rect x="612" y="346" width="120" height="86" rx="9" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/>
<path d="M470,352 Q462,400 560,418" fill="none" stroke="#c4c7cb" stroke-width="1.6" marker-end="url(#ah)"/>
<path d="M710,352 Q718,400 620,418" fill="none" stroke="#c4c7cb" stroke-width="1.6" marker-end="url(#ah)"/>
<text x="590" y="422" text-anchor="middle" font-size="14" font-weight="700" fill="#9aa0a6">SER</text>
<rect x="430" y="364" width="320" height="44" rx="9" fill="none"/>
<text x="590" y="458" text-anchor="middle" font-size="24" font-weight="800" fill="#c4c7cb">SERVICE</text>
<rect x="430" y="470" width="320" height="118" rx="9" fill="#9fa3a7"/><text x="590" y="535" text-anchor="middle" font-size="22" font-weight="700" fill="#fff">SERVICE</text>
</g>
<!-- ===== 右：RESEARCH ===== -->
<g>
<rect x="834" y="86" width="332" height="40" rx="9" fill="#cfd2d6"/><text x="1000" y="114" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">GOAL</text>
<rect x="834" y="130" width="332" height="40" rx="9" fill="#fff" stroke="#bfc3c7" stroke-dasharray="4 3"/><text x="1000" y="158" text-anchor="middle" font-size="22" font-weight="700" fill="#c4c7cb">PHILOSOPHY</text>
<rect x="834" y="174" width="332" height="62" rx="9" fill="#cfd2d6"/><text x="1000" y="214" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">VALUE</text>
<path d="M970,206 h60 v-16 h22 l-32,-26 -32,26 h22 z" fill="#eceef0" stroke="#cfd2d6"/><text x="1000" y="190" text-anchor="middle" font-size="14" fill="#8a8d91">Why</text>
<rect x="834" y="240" width="332" height="100" rx="9" fill="#cfd2d6"/><text x="1000" y="298" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">RESEARCH THEME</text>
<path d="M962,272 h76 v-22 h22 l-60,-28 -60,28 h22 z" fill="#eceef0" stroke="#cfd2d6"/><text x="1000" y="256" text-anchor="middle" font-size="12" fill="#8a8d91">For</text><text x="1000" y="269" text-anchor="middle" font-size="12" fill="#8a8d91">What</text>
<rect x="834" y="344" width="332" height="150" rx="9" fill="#cfd2d6"/><text x="980" y="425" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">ACCOMPLISHME</text><text x="980" y="450" text-anchor="middle" font-size="22" font-weight="800" fill="#fff">NT</text>
<path d="M952,346 h56 v18 h20 l-48,26 -48,-26 h20 z" fill="#eceef0" stroke="#cfd2d6"/><text x="980" y="370" text-anchor="middle" font-size="12" fill="#8a8d91">As a result</text>
<rect x="834" y="498" width="332" height="90" rx="9" fill="#cfd2d6"/><text x="980" y="552" text-anchor="middle" font-size="24" font-weight="800" fill="#fff">SKILL SET</text>
<path d="M952,500 h56 v16 h20 l-48,24 -48,-24 h20 z" fill="#eceef0" stroke="#cfd2d6"/><text x="980" y="520" text-anchor="middle" font-size="13" fill="#8a8d91">How</text>
<!-- 右縦帯 -->
<rect x="1124" y="344" width="42" height="244" rx="8" fill="#cfd2d6"/>
<text x="1145" y="466" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" transform="rotate(-90 1145 466)">GRANT</text>
</g>
<!-- ===== 列間 双方向矢印 ===== -->
<g stroke="#cfd2d6" fill="#eceef0" stroke-width="1">
<path d="M352,176 h22 v-9 h9 l-13,-18 -13,18 h9 v18 h-9 l13,18 13,-18 h-9 v-9 z"/>
<path d="M352,250 h22 v-9 h9 l-13,-18 -13,18 h9 v18 h-9 l13,18 13,-18 h-9 v-9 z"/>
<path d="M806,176 h22 v-9 h9 l-13,-18 -13,18 h9 v18 h-9 l13,18 13,-18 h-9 v-9 z"/>
<path d="M806,250 h22 v-9 h9 l-13,-18 -13,18 h9 v18 h-9 l13,18 13,-18 h-9 v-9 z"/>
</g>
<!-- 著者 -->
<text x="14" y="660" font-size="13" font-weight="700" fill="#9aa0a6">© Lui Yoshida, Kayoko Kurita</text>
</svg>
</div>

<div class="sap-note">UTokyo Online Education 東大FFP 2021　栗田佳代子　CC BY-NC-ND</div>

<!--
- 第8講で使う SAP CHART（Scholarship of Academic Practice）の枠組み。TEACHING／ACADEMIC GOAL／RESEARCH の三本柱を、GOAL→PHILOSOPHY→STRATEGY/VALUE→METHODOLOGY/RESEARCH THEME→…と上下に往復しながら埋めていくワークシート。
- 元スライドの付箋ワーク説明：付箋が重ねてありますので、ドラッグして使います／足りなくなったらコピーしてください。／重なりの順番を変更したいときは、「配置」／拡大は「表示」のズーム。
- 出典：UTokyo Online Education 東大FFP 2021　栗田佳代子　CC BY-NC-ND
-->
