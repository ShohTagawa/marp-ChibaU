---
marp: true
theme: tsutawaru-academic
paginate: true
size: 16:9
header: '<div class="hdr-left">AeroMedLink</div><img class="hdr-logo" src="../assets/chiba-logo.png" alt="CHIBA UNIVERSITY">'
footer: ''
html: true
style: |
  :root {
    /* ── ヘッダー幅の調整つまみ（英語版と同じ値） ── */
    --hdr-left-w: fit-content;
    --hdr-left-max: 43%;
    --pt-center: 37%;
    --pt-width: 50%;
    --pt-max: 40%;

    /* ── Boeing ブルー（メインの色）＋強調はオレンジ1色 ── */
    --accent: #0033A0;
    --accent-dark: #002266;
    --accent-soft: #E7EDF7;
    --em: #B45309;

    /* 英語は1文字が狭いので行長を広げる（本の28"字"は日本語基準） */
    --measure: 33em;
    /* 併記で takeaway が2行になるので、本文側の予約を増やす（既定118px） */
    --takeaway-reserve: 152px;
    /* 併記は行数が増えるので、項目間をやや詰める */
    --gap-group: .6em;

    /* 英文が主・和文が従。ラテン書体を先頭に置く */
    --font-jp: "Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", sans-serif;
  }

  /* 箇条書きは素のMarkdownで書く（divを増やさない） */
  section ul > li::before { content: none; }
  section ul > li { padding-left: 0; margin: 0 0 var(--gap-group); }
  section ul > li > strong:first-child { display: block; line-height: 1.6; }
  section ul > li > strong:first-child + br { display: none; }

  /* ── 和文（従）：19px・灰・和文書体。英文の直下に置く ── */
  section .ja {
    display: block;
    font-size: 19px; font-weight: 400;
    line-height: 1.55; letter-spacing: .03em;
    color: var(--ink-weak);
    font-family: "BIZ UDPGothic", "Hiragino Kaku Gothic ProN", "Yu Gothic Medium", sans-serif;
    margin-top: .1em;
    max-width: none;
  }
  /* .ja の直前の改行は消す（Marpがsoft breakを<br>にするため）。
     `+` は「次の"要素"」を見るので、文中に <br> がある voice/title には効かせない。
     素のMarkdown箇条書き（li）だけに限定する。 */
  section li br:has(+ .ja) { display: none; }
  /* 見出し直下の和文は間隔を詰める */
  section h1, section h2 { margin-bottom: .12em; }
  section h1 + .ja, section h2 + .ja { margin-bottom: .7em; }
  section h3 + .ja { margin-top: -.25em; margin-bottom: .45em; }
  section .fbox .ja { margin-top: .2em; }
  section .takeaway { flex-direction: column; align-items: flex-start; justify-content: center; }
  section .takeaway .ja { color: var(--accent-dark); opacity: .8; margin-top: .1em; width: 100%; }
  section table .ja { margin-top: .15em; }

  /* 図（インラインSVG）の器 */
  section .dia { width: 100%; max-width: 100%; overflow: hidden; margin: .1em 0 0; }
  section .dia > svg { width: 100%; height: auto; display: block; }

  /* 引用（乗務員の声） */
  section .voice {
    font-size: 29px; font-weight: 700; line-height: 1.45;
    border-left: 5px solid var(--accent);
    padding-left: .55em; margin: .1em 0 .3em; max-width: none;
  }
  section .voice .ja { font-size: 19px; margin-top: .35em; }
  section .title-event .ja { margin-top: .3em; }
  section .voice-src { font-size: 19px; color: var(--ink-weak); margin: 0; }

  /* 写真 */
  section .photo img { width: 100%; display: block; border-radius: 3px; }

  /* 大きな数字を3つ並べる（p.207 数字は大きく・単位は小さく） */
  section .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin: .3em 0 0; }
  section .stats .num { font-size: 2.5em; display: block; color: var(--accent); }
  section .stats .unit { font-size: .95em; color: var(--accent); }
  section .stats p { margin: .3em 0 0; max-width: none; line-height: 1.45; }
---

<!-- _class: cover-hero -->

<div class="title-hero">
<div class="title-small">Boeing Externship 2026 — Final Pitch<span class="ja">ボーイング・エクスターンシップ 2026　最終発表</span></div>
<div class="title-big">AeroMedLink</div>
</div>

<div class="title-foot">
<div class="title-photo"><img src="./src/fig01-aircraft-sky.jpg" alt=""></div>
<div class="title-meta">
<div class="title-event">When someone falls ill at 10,000 metres,<br>the story should only have to be told once.<span class="ja">上空で人が倒れたとき、同じ話を何度も伝え直さずに済むようにする。</span></div>
<div class="title-name">Team AeroMedLink</div>
<div class="title-affil">Chiba University　|　7 September 2026</div>
</div>
</div>

<!--
Good morning. We are Team AeroMedLink from Chiba University.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Where we started</div>

## We did not start from a device. We started from a voice.
<div class="ja">機材からではなく、現場の声から始めました。</div>

<div class="body">

<div class="tcols fig-right">
<div>

<p class="voice">“The doctor asked me<br>for her blood pressure.<br>All I could give them<br>was how she looked.”<span class="ja">「医師に血圧を聞かれました。でも私が渡せたのは、患者さんの見た目の様子だけでした。」</span></p>

<p class="voice-src">A cabin crew member, describing an in-flight emergency (illustrative scene)<span class="ja">客室乗務員の語り（機内急病の場面／例示）</span></p>

</div>
<div class="photo">

<img src="./src/fig02-cabin-emergency.png" alt="Cabin crew helping a passenger in the aisle">

</div>
</div>

</div>

<div class="takeaway">Nobody could say a number. So everybody talked instead.<span class="ja">誰も数値を言えない。だから、みんなが言葉で話し続ける。</span></div>

<!--
We expected to hear "we need better medical devices". That is not what came back.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Today</div>

## The people are connected. The information is not.
<div class="ja">人はつながっている。情報がつながっていない。</div>

<div class="body">

<div class="dia">
<svg viewBox="0 0 1160 348" aria-label="Today: no reliable number reaches the doctor">
<g fill="none" stroke="#D6D6D6" stroke-width="1.5" stroke-dasharray="7 6">
<rect x="0" y="34" width="520" height="296" rx="3"/>
<rect x="640" y="34" width="520" height="296" rx="3"/>
</g>
<text x="4" y="22" font-size="19" font-weight="700" fill="#6E6E6E">IN THE AIRCRAFT ／ 機内</text>
<text x="644" y="22" font-size="19" font-weight="700" fill="#6E6E6E">ON THE GROUND ／ 地上</text>
<rect x="22" y="56" width="476" height="98" rx="3" fill="#F1F1F1"/>
<text x="42" y="88" font-size="21" font-weight="700" fill="#262626">SpO₂ ?　·　pulse ?　·　BP ?</text>
<text x="42" y="114" font-size="19" fill="#6E6E6E">what the doctor asks for first</text>
<text x="42" y="138" font-size="18" fill="#6E6E6E">医師が最初に聞くのは、この数値</text>
<path d="M498 100 L566 100" stroke="#B45309" stroke-width="2" stroke-dasharray="6 5" fill="none"/>
<path d="M574 88 l22 24 M596 88 l-22 24" stroke="#B45309" stroke-width="3.5" stroke-linecap="round"/>
<text x="612" y="100" font-size="19" fill="#B45309">no reliable number ever reaches them</text>
<text x="612" y="124" font-size="18" fill="#B45309">確かな数値は、ひとつも届かない</text>
<g fill="#ffffff" stroke="#D6D6D6" stroke-width="1.5">
<rect x="22" y="190" width="140" height="104" rx="3"/>
<rect x="190" y="190" width="140" height="104" rx="3"/>
<rect x="358" y="190" width="140" height="104" rx="3"/>
<rect x="676" y="190" width="200" height="104" rx="3"/>
<rect x="920" y="190" width="200" height="104" rx="3"/>
</g>
<g text-anchor="middle" font-size="19" fill="#6E6E6E">
<text x="92" y="218">Crew</text>
<text x="260" y="218">Purser</text>
<text x="428" y="218">Captain</text>
<text x="776" y="218">Doctor</text>
<text x="1020" y="218">Ambulance</text>
</g>
<g text-anchor="middle" font-size="25" font-weight="700" fill="#262626">
<text x="92" y="250">sees</text>
<text x="260" y="250">hears</text>
<text x="428" y="250">relays</text>
<text x="776" y="250">imagines</text>
<text x="1020" y="250">re-asks</text>
</g>
<g text-anchor="middle" font-size="18" fill="#6E6E6E">
<text x="92" y="278">乗務員が見る</text>
<text x="260" y="278">パーサーが聞く</text>
<text x="428" y="278">機長が中継する</text>
<text x="776" y="278">医師が想像する</text>
<text x="1020" y="278">救急隊がまた聞く</text>
</g>
<g stroke="#B0B0B0" stroke-width="2" stroke-dasharray="5 5" fill="none">
<path d="M162 242 L180 242"/>
<path d="M330 242 L348 242"/>
<path d="M498 242 L666 242"/>
<path d="M876 242 L910 242"/>
</g>
<g fill="#B0B0B0">
<path d="M180 236 l10 6 l-10 6 z"/>
<path d="M348 236 l10 6 l-10 6 z"/>
<path d="M666 236 l10 6 l-10 6 z"/>
<path d="M910 236 l10 6 l-10 6 z"/>
</g>
<text x="582" y="222" text-anchor="middle" font-size="19" fill="#6E6E6E">voice only</text>
<text x="582" y="270" text-anchor="middle" font-size="18" fill="#6E6E6E">音声だけ</text>
</svg>
</div>

</div>

<div class="takeaway">The same story, told four times — and thinner every time.<span class="ja">同じ話を4回。そのたびに情報が薄くなる。</span></div>

<!--
Every link in this chain is a person talking. Nothing is written down, nothing is shared.
-->

---

<div class="page-title">Already on board</div>

## The aircraft is not empty. It already carries almost everything.
<div class="ja">機内は空ではない。ほとんどの物は、もう積んである。</div>

<div class="body">

- **An emergency medical kit.** Blood-pressure cuff, stethoscope, eleven medicines.
  <span class="ja">救急医療キット。血圧計・聴診器・11種類の薬。</span>
- **A defibrillator.** Required on US airliners with cabin crew.
  <span class="ja">AED。米国では客室乗務員が乗る機体に義務づけられている。</span>
- **A satellite link.** Already installed. Already selling internet.
  <span class="ja">衛星回線。すでに搭載され、すでに客席にWi-Fiを売っている。</span>

</div>

<div class="takeaway">Everything is already on board. Nothing is connected.<span class="ja">物はすべて積んである。つながっていないだけ。</span></div>

<div class="cite">US requirement: 14 CFR §121.803 and Appendix A to Part 121 (first-aid kits, emergency medical kit, AED).</div>

<!--
The medicine is already up there; only the link between people is missing.
-->

---

<!-- _class: message -->

# So we asked one question:<br>what if the information<br>was connected too?
<div class="ja">私たちの問いはひとつです ── 情報のほうも、つないだらどうなるか。</div>

<!--
Not a hospital in the sky. Not an AI that replaces doctors.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Our answer</div>

## The whole cabin and the doctor outside meet on one record
<div class="ja">機内の全員と、外にいる医師が、ひとつの記録の上で出会う。</div>

<div class="body">

<div class="dia">
<svg viewBox="0 0 1160 400" aria-label="AeroMedLink: the whole cabin and the doctor on the ground meet on one record">
<g fill="none" stroke="#0033A0" stroke-width="1.5" stroke-dasharray="7 6" opacity=".55">
<rect x="0" y="34" width="392" height="352" rx="3"/>
<rect x="768" y="34" width="392" height="352" rx="3"/>
</g>
<text x="4" y="22" font-size="19" font-weight="700" fill="#6E6E6E">IN THE AIRCRAFT ／ 機内</text>
<text x="772" y="22" font-size="19" font-weight="700" fill="#6E6E6E">ON THE GROUND ／ 地上</text>
<g stroke="#0033A0" stroke-width="2.5" fill="none">
<path d="M366 102 L420 180"/>
<path d="M366 208 L420 215"/>
<path d="M366 314 L420 250"/>
<path d="M740 190 L794 136"/>
<path d="M740 240 L794 296"/>
</g>
<rect x="420" y="140" width="320" height="150" rx="3" fill="#E7EDF7" stroke="#0033A0" stroke-width="2.5"/>
<text x="580" y="172" text-anchor="middle" font-size="22" font-weight="700" fill="#0033A0">One shared record</text>
<text x="580" y="196" text-anchor="middle" font-size="18" fill="#0033A0">ひとつの共有記録</text>
<text x="580" y="224" text-anchor="middle" font-size="18" font-weight="700" fill="#262626">SpO₂ 96 · pulse 82 · BP 128/76</text>
<text x="580" y="248" text-anchor="middle" font-size="19" fill="#262626">+ what the crew saw</text>
<text x="580" y="272" text-anchor="middle" font-size="18" fill="#6E6E6E">updating live ／ 自動更新</text>
<text x="580" y="322" text-anchor="middle" font-size="19" font-weight="700" fill="#0033A0">everything meets here</text>
<text x="580" y="346" text-anchor="middle" font-size="18" font-weight="700" fill="#0033A0">ここで全部が合わさる</text>
<g fill="#ffffff" stroke="#0033A0" stroke-width="1.5">
<rect x="22" y="56" width="344" height="92" rx="3"/>
<rect x="22" y="162" width="344" height="92" rx="3"/>
<rect x="22" y="268" width="344" height="92" rx="3"/>
<rect x="794" y="90" width="344" height="92" rx="3"/>
<rect x="794" y="250" width="344" height="92" rx="3"/>
</g>
<g text-anchor="middle" font-size="23" font-weight="700" fill="#262626">
<text x="194" y="86">Cabin crew</text>
<text x="194" y="192">Purser</text>
<text x="194" y="298">Captain</text>
<text x="966" y="120">Ground physician</text>
<text x="966" y="280">Ambulance</text>
</g>
<g text-anchor="middle" font-size="18" fill="#6E6E6E">
<text x="194" y="110">enters it once</text>
<text x="194" y="216">sees it, does not relay it</text>
<text x="194" y="322">decides with the same page</text>
<text x="966" y="144">reads and recommends</text>
<text x="966" y="304">has it before the aircraft lands</text>
</g>
<g text-anchor="middle" font-size="18" fill="#6E6E6E">
<text x="194" y="134">一度だけ入力する</text>
<text x="194" y="240">見るだけ。伝え直さない</text>
<text x="194" y="346">同じ画面を見て決める</text>
<text x="966" y="168">読んで助言する</text>
<text x="966" y="328">着陸前にもう持っている</text>
</g>
</svg>
</div>

</div>

<div class="takeaway">Told once. Connected to everyone. Still decided by the same people.<span class="ja">伝えるのは一度。つながるのは全員。決めるのは、今までと同じ人。</span></div>

<!--
The system does not decide anything. The decision stays human.
-->

---

<!-- _class: vcenter -->

<div class="page-title">In the cabin</div>

## Four steps the crew can follow under pressure
<div class="ja">緊張の中でも追える、4つの手順。</div>

<div class="body">

<div class="flow">
<div class="fbox">1 <span class="big">Prepare</span>Optional passenger profile<span class="ja">事前登録（任意）</span></div>
<div class="arw"></div>
<div class="fbox">2 <span class="big">Measure</span>Oxygen, pulse, blood pressure<span class="ja">酸素・脈拍・血圧を測る</span></div>
<div class="arw"></div>
<div class="fbox">3 <span class="big">Consult</span>Doctor sees the same page<span class="ja">医師が同じ画面を見る</span></div>
<div class="arw"></div>
<div class="fbox">4 <span class="big">Hand over</span>Captain decides. Record goes to EMS.<span class="ja">機長が決める。記録は救急隊へ。</span></div>
</div>

</div>

<div class="takeaway">The crew tell it once, then go back to the patient.<span class="ja">乗務員は一度伝えたら、患者のそばに戻れる。</span></div>

<!--
The screen guides the crew through each step, so they do not have to remember a protocol.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Two calls</div>

## The same system prevents one landing and speeds up another
<div class="ja">同じ仕組みが、ある着陸を防ぎ、別の着陸を早める。</div>

<div class="body">

<div class="tcols">
<div>

### Case A — stable
<div class="ja">ケースA ── 安定している</div>

Shortness of breath during cruise. Oxygen 96–97%, pulse settles, symptoms improve.
<span class="ja">巡航中の呼吸苦。酸素96〜97%、脈拍は落ち着き、症状も改善する。</span>

<div class="fill">

**“Stable — continue and monitor.”**
<span class="ja">「安定。このまま経過観察を。」便は目的地に到着する。</span>

</div>

</div>
<div>

### Case B — urgent
<div class="ja">ケースB ── 急を要する</div>

Chest pain that does not stop, blood pressure falling.
<span class="ja">止まらない胸痛。血圧が下がっていく。</span>

<div class="fill accent">

**“Urgent ground evaluation.”**
<span class="ja">「至急、地上での評価を。」記録が患者より先に届く。</span>

</div>

</div>
</div>

</div>

<div class="takeaway">Fewer diversions we did not need. Faster ones when we do.<span class="ja">要らなかった着陸は減らし、必要な着陸は早める。</span></div>

<!--
Both cases come from the same kit. Success is not only money saved.
-->

---

<!-- _class: vcenter -->

<div class="page-title">How often</div>

## A small chance, repeated four billion times a year
<div class="ja">確率はまれでも、年間40億人が飛べば毎日どこかで起きている。</div>

<div class="body">

<div class="stats">
<div>
<span class="num">1</span><span class="unit"> in 600 flights</span>
<p>has a medical emergency on board.<span class="ja">600便に1便で、機内急病が起きる。</span></p>
</div>
<div>
<span class="num">1</span><span class="unit"> in 22</span>
<p>of those emergencies ends in a diversion.<span class="ja">そのうち22件に1件が、目的地外に降りる。</span></p>
</div>
<div>
<span class="num">200</span><span class="unit"> a day</span>
<p>worldwide — about 2 a day at Haneda alone.<span class="ja">世界で1日約200件。羽田だけで1日2件。</span></p>
</div>
</div>

</div>

<div class="takeaway">Rare for one passenger. Routine for the industry.<span class="ja">一人の乗客にはまれ。業界には日常。</span></div>

<div class="cite">Christian M. G. et al. (2018); D. N. I. (2021); Peterson D. C. et al. (2013)</div>

<!--
One emergency per 600 flights; a diversion in about 4.4% of them.
-->

---

<div class="page-title">What it costs</div>

## One diversion costs an airline up to $900,000
<div class="ja">目的地外への着陸は、1回で最大90万ドルかかる。</div>

<div class="body">

<div class="tcols fig-right">
<div>

<div class="datarow"><span>Cost of one diversion<span class="ja">1回あたりの費用</span></span><span class="v"><span class="num">15k–900k</span><span class="unit">USD</span></span></div>
<div class="datarow"><span>Diversions for illness, worldwide<span class="ja">世界の1日あたり件数</span></span><span class="v"><span class="num">9</span><span class="unit">a day</span></span></div>
<div class="datarow"><span>Upper estimate of daily cost<span class="ja">1日あたり費用の上限</span></span><span class="v"><span class="num">7.8</span><span class="unit">M USD</span></span></div>

<p class="note">Fuel, landing fees, crew hours, hotels, passenger compensation.<span class="ja">燃料・着陸料・乗務員の時間・宿泊・補償。</span></p>

</div>
<div class="photo">

<img src="./src/fig03-b787-haneda.jpg" alt="Boeing 787">

<div class="cap">At that rate: a new 787 burned every 42 days.<span class="ja">42日ごとに新造787を1機ぶん。</span></div>

</div>
</div>

</div>

<div class="takeaway">Some of these landings were avoidable. Connected information is how we tell.<span class="ja">避けられた着陸もある。それを見分けるのが、つながった情報。</span></div>

<!--
The point is not that diversions are bad, but that some are made without enough information.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Feasibility</div>

## Nothing here has to be invented
<div class="ja">新しく発明するものは、ひとつもない。</div>

<div class="body">

- **The parts exist.** Certified sensors, off the shelf. We assemble; we do not invent.
  <span class="ja">部品はすでにある。認証済みのセンサーを組み合わせるだけ。</span>
- **The link is flying.** Our data is tiny next to passenger video.
  <span class="ja">回線はすでに飛んでいる。送るデータは客席の動画よりずっと軽い。</span>
- **The market pays.** Airlines already buy ground medical support.
  <span class="ja">市場はすでに払っている。航空会社は今も地上医療支援を契約している。</span>

</div>

<div class="takeaway">Using proven parts keeps the risk — and the certification — manageable.<span class="ja">実績のある部品を使うから、リスクも認証も現実的な範囲に収まる。</span></div>

<!--
Technology, connectivity, business — in all three, what we need already exists.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Hard questions</div>

## The three problems we could not ignore
<div class="ja">避けて通れなかった、3つの問題。</div>

<div class="body">

| The problem<span class="ja">問題</span> | Our answer<span class="ja">私たちの答え</span> |
|---|---|
| A doctor cannot diagnose across every border.<span class="ja">医師は国境を越えて診断できるとは限らない。</span> | The doctor **advises**. The captain and the local team decide.<span class="ja">医師は助言する。決めるのは機長と現地の医療チーム。</span> |
| Cabin crew are not medical staff.<span class="ja">客室乗務員は医療者ではない。</span> | **Guided steps on screen**, simple sensors, standard training.<span class="ja">画面が手順を示す。センサーは単純に。訓練は標準化する。</span> |
| Devices need approval — medical and aviation.<span class="ja">機器は医療と航空の両方で承認が要る。</span> | Use **certified devices**. Start in Japan, then expand.<span class="ja">認証済みの機器を使う。日本から始めて広げる。</span> |

</div>

<div class="takeaway">Defining the roles clearly removes most of the legal barrier.<span class="ja">役割をはっきり決めることが、法的な壁のほとんどを外す。</span></div>

<!--
We are not asking a doctor to practise medicine in another country's airspace.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Value</div>

## It takes work off everyone in the chain
<div class="ja">関わる全員の負担が減る。</div>

<div class="body">

- **The crew stop guessing.** They read a number instead of finding the words.
  <span class="ja">乗務員は言葉を探さなくてよくなる。数値を読み上げるだけでいい。</span>
- **The doctor stops interviewing.** The numbers are already there when the call starts.
  <span class="ja">医師は聞き取りから始めなくてよくなる。通話の時点で数値がもう在る。</span>
- **The captain stops deciding blind.** Same authority, better evidence.
  <span class="ja">機長は手探りで決めなくてよくなる。権限は同じまま、根拠だけが増える。</span>

</div>

<div class="takeaway">Less work for everyone — and the passenger is helped sooner.<span class="ja">全員の手間が減り、そのぶん患者が早く助かる。</span></div>

<!--
Usually safety costs money. Here, better communication improves both at once.
-->

---

<!-- _class: vcenter -->

<div class="page-title">Why Boeing</div>

## Boeing is the one company that can put this in the aircraft
<div class="ja">これを機体に組み込めるのは、ボーイングだけ。</div>

<div class="body">

- **Lead connected aviation.** The link is already there. This is what it is for.
  <span class="ja">回線はもう積んである。これは、その使い道のひとつ。</span>
- **Raise the value of the fleet.** A ready-to-fit option for the 787 and 777X.
  <span class="ja">787と777Xにそのまま載せられる装備になる。</span>
- **Give airlines a reason to choose Boeing.** Fewer diversions is a number they can bank.
  <span class="ja">「目的地外着陸が減る」は、航空会社が自社の計算に使える数字。</span>

</div>

<div class="takeaway">Boeing does not have to build a medical company. It has to open the door.<span class="ja">ボーイングが医療会社になる必要はない。扉を開ければいい。</span></div>

<!--
Airlines can buy medical services from anyone. Only Boeing can make the aircraft ready.
-->

---

<!-- _class: message -->

# From isolated emergencies<br>to connected care.
<div class="ja">孤立した緊急事態から、つながる医療へ。</div>

<!--
Thank you for listening. We are happy to take your questions.
-->
