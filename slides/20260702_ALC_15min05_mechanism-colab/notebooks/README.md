# 第5回 ハンズオン用 Colab ノートブック

「生成AIの仕組みと Google Colab」（ALC 15-min 第5回・2026/7/2）で使うノートブック一式です。
各ファイルを Google Colab で開く（または Drive にアップロード）して、**上から順に ▶** で実行します。

| # | ファイル | いつ使う | 内容 | 目安 |
|---|---|---|---|---|
| 03 | `03_ichimo_gpt.ipynb` | **STEP①** まず動かす | ChatGPTと同じ Transformer を一から作る「いちもじGPT」。次の1文字を予測してつなげる生成AIを体験 | 約10分 |
| 04 | `04_hajimete_no_colab.ipynb` | STEP③ A・超入門 | Colab の超入門（セル実行・GPU・ファイル・保存）。Colab がはじめての人向け | 約10分 |
| 05 | `05_gemini_data_analysis_education.ipynb` | STEP③ B・分析＋Gemini | 教育データ(CASchools)を**まず自分でEDA**（相関・散布図）→ 後半で（使える環境なら）**Gemini（データサイエンス・エージェント）** に同じ分析を頼んで見くらべる | 約15分 |
| 06 | `06_eda_ml_education.ipynb` | STEP③ C・自分で書く | 教育データ(satgpa)で EDA →（線形回帰で）大学GPAを予測 → 評価。機械学習入門 | 約15分 |

## 使うデータ（教育系オープンデータ）
- **satgpa**：高校GPA・SAT と 大学1年GPA（学生1000人）— OpenIntro Statistics 由来
- **CASchools**：カリフォルニアの学校データ（生徒数・支出・給食補助率・学力）— R の AER パッケージ由来
- 配信元：Rdatasets <https://vincentarelbundock.github.io/Rdatasets/>（pandas で URL から直接読み込み）

## 注意
- Colab の無料枠は最長12時間・放置で切断。こまめに ▶ と保存を。
- Gemini など AI の出力は**もっともらしく間違える**ことがあります。**必ず自分で検証**してください。
- アップロードしたファイルはセッション終了で消えます。大事なものは Google ドライブへ。

## 出典・参考
- Google Colab（公式FAQ） <https://research.google.com/colaboratory/faq.html>
- Data Science Agent in Colab（Gemini） <https://developers.googleblog.com/en/data-science-agent-in-colab-with-gemini/>
- いちもじGPT の土台：nanoGPT（A. Karpathy, MIT License） <https://github.com/karpathy/nanoGPT>
