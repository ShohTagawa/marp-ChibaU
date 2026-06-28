---
marp: true
theme: chiba-deck
paginate: true
size: 16:9
header: '<div class="hdr-left">大学などで教える</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="千葉大学">'
footer: ''
style: |
  /* デック固有：配色＝ガーネット（千葉大Color CMYK 0/100/70/20 → #CC003D）。部品は theme/chiba-deck.css に共通化 */
  :root { --accent: #CC003D; --accent-dark: #8E0029; --accent-soft: #FBE4EA; --hdr-left-w: 21%; }
  section .page-title { left: 18%; width: 40%; }
  section > header { z-index: 13; }
  section > header::after { left: 0; right: 0; height: 4px; background: var(--accent); }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">大学などで教える</div>
<div class="title-big"><b>高等教育</b>の<b>置かれている状況</b></div>
</div>

<div class="goal-box" style="max-width:820px; margin:6px auto 0;"><b>達成目標：</b><span class="ind">日本の高等教育の課題を理解出来る。</span></div>

<!--
- まずは、タイトルコール。
-->

---

<div class="page-title">大学性悪説</div>

# 大学<span style="color:var(--accent-dark)">性悪説</span>

<div style="font-size:24px; line-height:1.55;">

- そもそも大学や大学教員はその活動を疑われている
- 批判は<b>60年代・70年代</b>から
  <div style="margin-left:2em; font-size:23px;">中教審「大学教育の改善についての答申」（1963年）、<br>「当面する大学教育の課題に対応するための方策について」（1970年）、</div>
  <div style="margin-left:2em; font-size:23px;">ライシャワー（1979）、ヴォ―ゲル（1979）、グレーザー（1977）など</div>
  <div style="margin-left:2em; font-size:23px;">「欠如理論」＋「経済ナショナリズムへの奉仕」（苅谷2018）</div>
- <b>現状についての根拠の曖昧さ</b>
  <div style="margin-left:2em; font-size:23px;">教育または教育制度についての　科学的根拠の不足・不在、外的妥当性の問題</div>

</div>

<div class="box-accent" style="margin-top:14px; font-size:34px; font-weight:800; text-align:center; margin-right:calc(var(--pip-w) + 8px);">→<b>ブラックボックス</b>としての教育</div>

<!--
- 大学や大学教員はその活動を疑われてきた。批判は60〜70年代から。根拠の曖昧さゆえ、教育はブラックボックスとして扱われがち。
-->

---

<div class="page-title">大学性悪説</div>

# 大学<span style="color:var(--accent-dark)">性悪説</span>

<div class="box-info" style="font-size:21px; line-height:1.5;">
「個々の授業が実際にどのような内容を伝えるかは、ほぼ個々の教員に任されていて、教員間に明確な共通理解があるわけではない。あるいはそれらを集積した学習経験がどのような教育成果を形成するかについても、それについての一定の暗黙の期待があるものの、それがどのような過程を通じて形成されるかが明示されることはほとんどなく、また実際に検証されることもない」（金子2014）
</div>

<div style="font-size:23px; line-height:1.55; margin-top:10px;">

- 所詮シグナリングに過ぎないという学内外の根強い意見も。
  <div style="margin-left:2em; font-size:22px;">優秀な人間を選抜しているだけ?（大学教育に効果があるわけではない）</div>
- 研究機関としての価値はあるが、教育はセレンディピティだけ？

</div>

<div style="display:flex; align-items:center; gap:24px; margin-top:10px; margin-right:calc(var(--pip-w) + 8px);">
<div class="box-warn" style="font-size:30px; font-weight:800;">→組織的詐欺？</div>
<div style="font-size:34px; font-weight:800; color:var(--accent-dark);">大学への<span style="color:var(--accent)">良い変化</span>を作れるか</div>
</div>

<!--
- 大学はシグナリングに過ぎない、教育効果は無いという根強い意見も。組織的詐欺とまで言われかねない中で、大学に良い変化を作れるか。
-->

---

<div class="page-title">大学全入時代／社会人の学び直し</div>

# 大学<span style="color:var(--accent-dark)">全入時代</span><span style="font-size:22px; color:#888; font-weight:400; margin-left:16px;">／　社会人の<span style="color:var(--accent-dark); font-weight:800;">学び直し</span></span>

<div style="display:flex; gap:20px; align-items:flex-start; margin-top:4px;">
<div style="flex:1;">
<img src="./src/fig02-img.png" alt="リアル大学全入時代、ようやく実現？" style="width:100%; border:1px solid #e3e8f0; border-radius:6px;">
<div style="display:flex; align-items:center; gap:12px; margin-top:4px;">
<img src="./src/fig03-img.png" alt="日本経済新聞" style="height:22px;">
<div class="cite" style="margin:0;">2021年7月23日</div>
</div>
<img src="./src/fig04-img.png" alt="学び直し助成、7年で12倍" style="width:100%; border:1px solid #e3e8f0; border-radius:6px; margin-top:10px;">
<div class="cite" style="margin-top:2px;">日本経済新聞 2023年12月13日</div>
</div>
<div style="flex:1; display:flex; flex-direction:column; gap:14px;">
<img src="./src/fig01-img.png" alt="18歳人口の推移と大学進学率" style="width:100%; border:1px solid #e3e8f0; border-radius:6px;">
<div class="box-accent" style="font-size:27px; font-weight:800; line-height:1.45; text-align:center; margin-right:calc(var(--pip-w) + 8px);">「エリートのモラトリアム」から<br><b>「全員の学びの場」</b>への転換</div>
</div>
</div>

<!--
- 18歳人口は減り定員は増え、リアル大学全入時代がやってくる。学び直し助成は7年で12倍。「エリートのモラトリアム」から「全員の学びの場」への転換が進む。
-->

---

<div class="page-title">海外の状況</div>

# 海外の<span style="color:var(--accent-dark)">状況</span>

<div class="stepbox" style="margin-top:24px;">
<div class="st">お金の意味・研究引用指数で<b>先行</b></div>
<div class="st">背景には、<b>語学以上の問題</b></div>
</div>

<!--
- 海外は、お金の意味や研究引用指数で先行している。背景には、語学以上の問題がある。
-->

---

<div class="page-title">価値のある大学教育の実現</div>

# 価値のある<span style="color:var(--accent-dark)">大学教育の実現</span>

<div class="bgroup" style="margin-top:14px;">
<div class="bg-label">施策</div>
<div class="bg-items">
<div>各種施策の実施</div>
<div>教員が変わることによる、教育の変化</div>
<div>千葉大の取組例</div>
</div>
</div>

<div class="box-accent" style="margin-top:24px; font-size:32px; font-weight:800; text-align:center; margin-right:calc(var(--pip-w) + 8px);">作っていくのは、<b>未来の教員となる受講者のみんな</b></div>

<!--
- 各種施策の実施、教員が変わることによる教育の変化、千葉大の取組例。作っていくのは、未来の教員となる受講者のみんな。
-->

---

<!-- _class: sec-open -->

<div class="page-title">まとめ</div>

# まとめ

<div class="wrap3" style="margin-top:8px;">
<div class="ln"><span class="no">1.</span> <b>大学性悪説</b> ── 教育はブラックボックスと疑われてきた</div>
<div class="ln"><span class="no">2.</span> <b>大学全入時代</b>・<b>社会人の学び直し</b> ── 「全員の学びの場」へ</div>
<div class="ln"><span class="no">3.</span> <b>価値のある大学教育</b>を作るのは、未来の教員となるみんな</div>
</div>

<div class="box-warn" style="margin-top:24px; margin-right:calc(var(--pip-w) + 8px);">日本の高等教育の課題を理解し、<span style="color:var(--accent-dark)">良い変化</span>を作っていく</div>

<!--
- まとめ。性悪説、全入時代・学び直し、そして価値ある大学教育の実現。作っていくのは未来の教員となる受講者のみんな。
-->
