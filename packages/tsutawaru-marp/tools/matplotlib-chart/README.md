# matplotlib-chart（EChartsを使わない場合の代替）

グラフの標準は `tools/echarts-render`（Node・SSR）だが、Python が手に馴染む人は
matplotlib＋日本語化パッケージでも同じ品質のグラフを作れる。

## セットアップ

```bash
pip install matplotlib matplotlib-fontja
```

> `matplotlib-fontja` は `japanize-matplotlib` の後継fork。従来の japanize-matplotlib は
> **Python 3.12 以降では動かない**（distutils 削除のため）。3.11以前ならどちらでもよく、
> `example.py` は両対応。登録されるフォント（IPAexGothic）に太字ウェイトは無いので、
> `fontweight="bold"` 指定時に findfont の警告が出るが、通常ウェイトで描画される（無害）。

## 使い方

```bash
python3 tools/matplotlib-chart/example.py slides/<deck>/src/fig01-example.svg
```

`example.py` が「tsutawaru 風の横棒グラフ」の完全な見本になっている。
データ・グラフ種別を書き換えて使う。守るべきルールは ECharts 版と同じ:

- 強調するのは1系列だけ。他はグレーに落とす（p.140）
- 凡例を往復させず、値・系列名を直接添える（p.198）
- 影・角丸・立体感・余計な目盛線は付けない（p.132・p.104）
- 軸線は黒、目盛線は薄い罫だけ。目盛は粗く（p.134・p.208）

## 埋め込み

出力SVGは **1行化・width/height除去済み** なので、そのままスライドの Markdown に
インラインで貼る。`<img src="*.svg">` / `![](*.svg)` は Marp の PDF/PNG 化で
空白になるため使わない。

matplotlib は既定で文字をパス（アウトライン）化する（`svg.fonttype='path'`）ので、
閲覧側にフォントが無くても表示が崩れない。そのぶんファイルは大きめになる。
テキストのまま出したい場合は `matplotlib.rcParams['svg.fonttype']='none'` にする
（フォント環境依存になる点に注意）。
