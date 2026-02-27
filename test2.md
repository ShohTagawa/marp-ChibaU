---
marp: true
size: 16:9
style: |
  /* BIZ UDPGothicフォントの読み込み */
  @import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap');

  /* === 全体の基本設定 === */
  section {
    background-color: #ffffff;
    color: #000000;
    font-family: 'BIZ UDPGothic', sans-serif;
    font-size: 28px;
    padding: 80px 60px 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
  }

  /* === ヘッダー（全スライド共通） === */
  .header-container {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 38px;
    display: flex; align-items: stretch;
    border-bottom: 3px solid #7A141A;
    z-index: 10;
  }
  .header-left {
    background-color: #B12228; color: white;
    font-size: 23px; padding: 0 15px 0 15px;
    display: flex; align-items: center; width: 230px;
    flex-shrink: 0; clip-path: polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
  }
  .header-center {
    background-color: #7A141A; color: white;
    font-size: 23px; padding: 0 20px;
    display: flex; align-items: center; justify-content: center;
    width: 380px; flex-shrink: 0; margin-left: -15px;
    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%);
  }
  .header-right {
    background-color: #ffffff; flex-grow: 1; display: flex;
    align-items: center; justify-content: flex-end; padding-right: 30px;
    font-size: 18px; font-weight: bold; margin-left: -15px;
    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%);
  }

  /* === 見出し === */
  h1 { font-size: 38px; margin-bottom: 20px; color: #7A141A; }
  h2 { font-size: 32px; margin-bottom: 15px; border-bottom: 2px solid #ddd; padding-bottom: 5px; }

  /* === レイアウト A: 3ボックス並列（アジェンダや要点用） === */
  .box-wrapper { display: flex; flex-direction: column; flex-grow: 1; gap: 20px; }
  .box { background-color: #ffffff; border-radius: 20px; padding: 20px 40px; border: 1px solid #8e9aaa; display: flex; flex-direction: column; justify-content: center; }
  .box-title { font-size: 26px; margin-bottom: 5px; font-weight: bold; margin-left: 10px; }
  .box-content { display: flex; align-items: center; justify-content: flex-start; }
  .badge { padding: 20px 0; border-radius: 12px; margin-right: 50px; margin-left: 30px; width: 260px; text-align: center; font-size: 32px; font-weight: bold; flex-shrink: 0; }
  .badge.green { background-color: #dcedc8; } .badge.pink { background-color: #fae3e3; } .badge.gray { background-color: #e5e5e5; }
  .badge.blue { background-color: #e3f2fd; } .badge.yellow { background-color: #fff8e1; }
  .box-text { font-size: 28px; line-height: 1.6; flex-grow: 1; }

  /* === レイアウト B: シンプルなグレー枠（目的・目標用） === */
  .gray-block { background-color: #f0f0f0; border-radius: 12px; padding: 25px 40px; margin-bottom: 30px; font-size: 30px; font-weight: bold; display: flex; align-items: center; }
  .gray-block-label { font-size: 36px; margin-right: 40px; width: 140px; text-align: right; }
  .gray-block-content { flex-grow: 1; font-weight: normal; font-size: 28px; line-height: 1.5; }

  /* === レイアウト C: レイヤー構造・テーブル型（生成AIのレイヤー等） === */
  .table-wrapper { border: 1px solid #ccc; border-radius: 5px; overflow: hidden; margin-top: 10px; }
  .table-row { display: flex; border-bottom: 1px solid #ccc; background-color: #ffffff; }
  .table-row:last-child { border-bottom: none; }
  .table-left { width: 35%; padding: 20px; font-weight: bold; font-size: 28px; background-color: #fafafa; border-right: 1px solid #ccc; display: flex; align-items: center; }
  .table-right { width: 65%; padding: 20px; font-size: 24px; line-height: 1.5; display: flex; flex-direction: column; justify-content: center; }
  .table-right strong { color: #A31A24; font-size: 26px; margin-bottom: 5px; display: inline-block; }

  /* === レイアウト D: 2カラム・吹き出し（自由配置用） === */
  .columns { display: flex; gap: 40px; margin-top: 20px; }
  .col-left { flex: 1; font-size: 28px; line-height: 1.6; }
  .col-right { flex: 1; background-color: #f9f9f9; padding: 20px; border-radius: 10px; text-align: center; display: flex; flex-direction: column; justify-content: center;}
  .callout-yellow { background-color: #fff3e0; border: 2px solid #ffe0b2; border-radius: 15px; padding: 20px 30px; font-size: 24px; margin-top: 20px; font-weight: bold; }
---

<div class="header-container">
  <div class="header-left">DX Overview</div>
  <div class="header-center">デジタルトランスフォーメーションとは</div>
  <div class="header-right">Slide 1 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">DXの基本定義</div>
    <div class="box-content">
      <div class="badge green">定義と目的</div>
      <div class="box-text">- 組織が新しいデジタル技術を使用して、ビジネスのプロセス、文化、カスタマーエクスペリエンスを作成、変更することです 。<br>- 従来のITインフラをクラウドに移行して費用を削減するだけでなく、ビジネスの「やり方」自体を変革することが目的です 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">継続的なプロセスとしてのDX</div>
    <div class="box-content">
      <div class="badge blue">パラダイムシフト</div>
      <div class="box-text">- DXは1回限りのものではなく、市場と顧客のニーズに迅速に対応するための継続的なプロセスです 。<br>- 印刷機や蒸気機関に匹敵する、人間の働き方を根本的に変えるパラダイムシフトのただ中にあります 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Cloud Value</div>
  <div class="header-center">クラウドがもたらすビジネスの変革</div>
  <div class="header-right">Slide 2 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">インフラの限界を超える</div>
    <div class="box-content">
      <div class="badge pink">スケーラビリティ</div>
      <div class="box-text">- オンデマンドでスケーラブルなリソースにアクセス可能になり、固定インフラストラクチャの制限から解放されます 。<br>- 需要の急増やビジネスの拡大に迅速に対応できるアジリティをもたらします 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">財務モデルの転換</div>
    <div class="box-content">
      <div class="badge yellow">コスト構造の変化</div>
      <div class="box-text">- 物理サーバー購入などの多額な「資本支出（CapEx）」から、使用した分だけ支払う「運用支出（OpEx）」へとシフトします 。<br>- 初期投資を抑え、イノベーションに資金とリソースを集中させることが可能になります 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Cloud Models</div>
  <div class="header-center">3つのクラウドコンピューティングモデル</div>
  <div class="header-right">Slide 3 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">インフラストラクチャの提供 (IaaS)</div>
    <div class="box-content">
      <div class="badge gray">IaaS</div>
      <div class="box-text">- コンピューティング、ネットワーク、ストレージなどのリソースをサービスとして提供します 。<br>- ハードウェアの管理はプロバイダが行い、自由度の高い構築が可能です 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">プラットフォームの提供 (PaaS)</div>
    <div class="box-content">
      <div class="badge blue">PaaS</div>
      <div class="box-text">- アプリケーションを開発、実行、管理するための環境を提供します 。<br>- インフラ管理の手間を省き、コードの記述や製品化に集中できます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">ソフトウェアの提供 (SaaS)</div>
    <div class="box-content">
      <div class="badge pink">SaaS</div>
      <div class="box-text">- ソフトウェア全体をクラウドでホストし、ウェブブラウザ経由で提供します 。<br>- ダウンロードや保守管理が不要で、どこからでもアクセス可能です 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Modern Infrastructure</div>
  <div class="header-center">インフラのモダナイゼーション</div>
  <div class="header-right">Slide 4 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">ハードウェアの仮想化</div>
    <div class="box-content">
      <div class="badge green">仮想マシン (VM)</div>
      <div class="box-text">- 1台の物理サーバー上で複数の独立したOSやアプリケーションを実行し、リソース効率を向上させます 。<br>- 既存のオンプレミス環境からクラウドへの移行（リフト＆シフト）の足掛かりとして頻繁に利用されます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">ソフトウェアレイヤの仮想化</div>
    <div class="box-content">
      <div class="badge yellow">コンテナ技術</div>
      <div class="box-text">- OSレベルより上のレイヤを仮想化し、アプリとその依存関係をパッケージ化して実行します 。<br>- 起動が速く、どこでも一貫して実行できるため、開発とデプロイの俊敏性が大幅に向上します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Serverless</div>
  <div class="header-center">サーバーレスコンピューティングの活用</div>
  <div class="header-right">Slide 5 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">インフラ管理からの解放</div>
    <div class="box-content">
      <div class="badge pink">サーバーレス</div>
      <div class="box-text">- リソースが必要に応じてバックグラウンドで自動的にプロビジョニングされます 。<br>- デベロッパーはコード（関数）の記述に集中でき、インフラの保守やスケーリングはクラウドプロバイダが担います 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">ビジネス上のメリット</div>
    <div class="box-content">
      <div class="badge gray">費用と運用</div>
      <div class="box-text">- クエリやアプリが実行されたときだけ料金が発生する従量課金制により、費用を最適化できます 。<br>- 新機能の市場投入までの時間を短縮し、開発費用や運用負荷を削減します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Modern Apps</div>
  <div class="header-center">最新のアプリケーション開発とAPI</div>
  <div class="header-right">Slide 6 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">クラウドネイティブな設計</div>
    <div class="box-content">
      <div class="badge blue">マイクロサービス</div>
      <div class="box-text">- 独立してデプロイ可能な「マイクロサービス」の集合体としてアプリを構築します 。<br>- 一部の機能を更新する際も他の部分に影響を与えず、スケーラビリティとアジリティを確保できます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">システム間連携の標準化</div>
    <div class="box-content">
      <div class="badge green">APIの活用</div>
      <div class="box-text">- API（アプリケーションプログラミングインターフェース）を通じて、異なるソフトウェア間のデータのやり取りを標準化します 。<br>- 既存の機能やデータを再利用し、新しいプロダクト開発や収益源の創出を加速します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Data Value</div>
  <div class="header-center">データからビジネス価値を引き出す</div>
  <div class="header-right">Slide 7 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">多様化するデータソース</div>
    <div class="box-content">
      <div class="badge yellow">データの種類</div>
      <div class="box-text">- 行と列で整理された「構造化データ」、メールのような「半構造化データ」、画像や動画などの「非構造化データ」が存在します 。<br>- 新しいデータの80～90%は非構造化データが占めています 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">未活用のデータに光を当てる</div>
    <div class="box-content">
      <div class="badge pink">非構造化データの活用</div>
      <div class="box-text">- 従来は分析が困難だった非構造化データも、クラウドツールや機械学習（ML）を使うことでインサイトを引き出せます 。<br>- 画像認識APIなどでタグ付けを行い、顧客の行動や感情を深く理解することが可能になります 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Data Storage</div>
  <div class="header-center">クラウドストレージとデータレイク</div>
  <div class="header-right">Slide 8 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">柔軟なデータ保管庫</div>
    <div class="box-content">
      <div class="badge gray">データレイク</div>
      <div class="box-text">- 任意の種類と量の元データ（非構造化データ含む）を、元の形式のまま保存・探索できるリポジトリです 。<br>- 前処理を行わずに保持することで、将来的な新たな分析ニーズにも柔軟に対応できます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">非構造化データに最適な基盤</div>
    <div class="box-content">
      <div class="badge blue">Cloud Storage</div>
      <div class="box-text">- オブジェクトストレージとして、動画や画像などの非構造化データをパッケージ化して保存します 。<br>- データのアクセス頻度に応じたストレージクラス（Standard, Nearline等）を選択し、コストを最適化できます 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Data Analysis</div>
  <div class="header-center">データウェアハウスと分析</div>
  <div class="header-right">Slide 9 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">大規模分析のハブ</div>
    <div class="box-content">
      <div class="badge green">データウェアハウス</div>
      <div class="box-text">- 複数のソースから収集した構造化・半構造化データを分析・レポートするために設計されたシステムです 。<br>- 過去のデータを統合し、ビジネスインテリジェンス（BI）の基盤として機能します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">フルマネージドな分析環境</div>
    <div class="box-content">
      <div class="badge pink">BigQuery</div>
      <div class="box-text">- ペタバイト規模のデータをSQLで高速に分析できる、Google Cloudのデータウェアハウスです 。<br>- インフラ管理が不要で、組み込みのML機能によりデータベース内で直接機械学習モデルを作成可能です 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Data Pipeline</div>
  <div class="header-center">ストリーミングとリアルタイム分析</div>
  <div class="header-right">Slide 10 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">データを瞬時に価値へ</div>
    <div class="box-content">
      <div class="badge yellow">ストリーミング分析</div>
      <div class="box-text">- データレコードをバッチではなく連続的に処理し、生成された瞬間にインサイトを導き出します 。<br>- IoTセンサーやクリックストリームなど、時間にセンシティブなデータソースに不可欠です 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">データパイプラインの構築</div>
    <div class="box-content">
      <div class="badge gray">Pub/Sub & Dataflow</div>
      <div class="box-text">- Pub/Subで非同期に発生する大量のイベントメッセージを取り込みます 。<br>- Dataflowを使用してストリーミングデータとバッチデータの両方を処理（ETL）し、分析基盤へ転送します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">AI / ML Basics</div>
  <div class="header-center">AI（人工知能）とML（機械学習）の基本</div>
  <div class="header-right">Slide 11 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">技術の定義と関係性</div>
    <div class="box-content">
      <div class="badge blue">AIとMLの違い</div>
      <div class="box-text">- AIは人間の知能に関連する認知機能を模倣する広範な技術概念です 。<br>- MLはAIのサブセットであり、明示的にプログラムしなくてもデータからパターンを学習し予測を行う手法です 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">過去から未来へのシフト</div>
    <div class="box-content">
      <div class="badge green">予測的インサイト</div>
      <div class="box-text">- 従来のデータ分析が「過去」の傾向を説明するのに対し、MLは大量のデータから「将来」を予測します 。<br>- ルールベースのシステムの置き換え、プロセス自動化、パーソナライズに非常に適しています 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Ready-to-use AI</div>
  <div class="header-center">事前トレーニング済みAPIによる迅速な導入</div>
  <div class="header-right">Slide 12 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">専門知識不要のAI活用</div>
    <div class="box-content">
      <div class="badge pink">Google Cloud API</div>
      <div class="box-text">- 独自のトレーニングデータやデータサイエンティストがいなくても、すぐに強力なMLモデルを利用できます 。<br>- アプリケーションに画像認識、音声テキスト変換、自然言語処理などを簡単に組み込めます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">代表的なツール</div>
    <div class="box-content">
      <div class="badge yellow">ユースケース</div>
      <div class="box-text">- Vision API：画像内のオブジェクト、テキスト、感情を検出して自動分類します 。<br>- Natural Language API：テキストの感情や構文を分析し、顧客からの問い合わせを自動的に振り分けます 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Custom ML</div>
  <div class="header-center">独自データによるカスタムAIモデルの構築</div>
  <div class="header-right">Slide 13 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">ノーコードでのモデル構築</div>
    <div class="box-content">
      <div class="badge gray">AutoML</div>
      <div class="box-text">- 独自のデータセットを使い、グラフィカルなインターフェースでコードを書かずにMLモデルをトレーニングできます 。<br>- Vertex AIが最適なモデルを自動選択し、特殊な業務要件（例：特定部品の欠陥検出）に対応します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">高度なカスタマイズ</div>
    <div class="box-content">
      <div class="badge blue">カスタムトレーニング</div>
      <div class="box-text">- エンドツーエンドのMLパイプラインを完全に制御し、ビジネスに最も差別化された結果をもたらします 。<br>- TensorFlowなどのフレームワークや専用ハードウェア（TPU）を活用し、高度な処理を高速に行います 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Security Basics</div>
  <div class="header-center">クラウドにおけるセキュリティの基礎</div>
  <div class="header-right">Slide 14 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">責任の分担</div>
    <div class="box-content">
      <div class="badge green">責任共有モデル</div>
      <div class="box-text">- クラウドプロバイダはインフラストラクチャや物理的なセキュリティの責任を負います 。<br>- お客様は、データ自体、アクセス制御、構成など「クラウド内」のセキュリティに対して常に責任を持ちます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">暗黙の信頼を排除する</div>
    <div class="box-content">
      <div class="badge pink">ゼロトラスト</div>
      <div class="box-text">- 「いかなるユーザーやデバイスもデフォルトでは信頼しない」というセキュリティモデルです 。<br>- リソースへアクセスする前に、常にIDとコンテキストの両方を厳格に検証します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Defense in Depth</div>
  <div class="header-center">データ保護とアクセス管理</div>
  <div class="header-right">Slide 15 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">データのライフサイクルを守る</div>
    <div class="box-content">
      <div class="badge yellow">暗号化</div>
      <div class="box-text">- 「保存中」「転送中」「使用中」のすべての状態のデータを強力なアルゴリズムで暗号化し保護します 。<br>- 万が一データが傍受されたとしても、暗号鍵がなければ解読不可能な状態を維持します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">3Aによるコントロール</div>
    <div class="box-content">
      <div class="badge gray">IAMの活用</div>
      <div class="box-text">- 認証 (Authentication)、認可 (Authorization)、監査 (Auditing) を一元管理します 。<br>- Identity and Access Management (IAM) を使用し、ユーザーの役割に応じた最小権限を適用します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">FinOps</div>
  <div class="header-center">クラウドの財務ガバナンスとコスト管理</div>
  <div class="header-right">Slide 16 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">チーム間の連携</div>
    <div class="box-content">
      <div class="badge blue">アカウンタビリティ</div>
      <div class="box-text">- クラウド費用の管理は財務、テクノロジー、ビジネスチームの協力と可視化が不可欠です 。<br>- 組織全体にアカウンタビリティの文化を定着させ、費用とビジネス目標を一致させます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">支出のコントロール</div>
    <div class="box-content">
      <div class="badge green">予算とアラート</div>
      <div class="box-text">- 予算しきい値のルールを設定し、費用が超過する前にリアルタイムでアラートを受け取ります 。<br>- リソース階層を利用して部門ごとの支出を追跡し、無駄なリソースを特定・最適化します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Operations & SRE</div>
  <div class="header-center">サイト信頼性エンジニアリング (SRE) と運用</div>
  <div class="header-right">Slide 17 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">開発と運用の架け橋</div>
    <div class="box-content">
      <div class="badge pink">SREの実践</div>
      <div class="box-text">- ソフトウェアエンジニアリングの手法を運用に適用し、スケーラブルで信頼性の高いシステムを構築します 。<br>- アジリティ（開発スピード）と安定性（システム信頼性）のバランスをデータ駆動で管理します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">ゴールデンシグナルと目標設定</div>
    <div class="box-content">
      <div class="badge yellow">SLI / SLO</div>
      <div class="box-text">- レイテンシ、トラフィック、エラー、飽和度を監視し、システムの健全性を測定します (SLI) 。<br>- 許容できる信頼性レベルを目標値 (SLO) として設定し、顧客体験を担保します 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Resilience</div>
  <div class="header-center">復元力のあるインフラ設計と監視</div>
  <div class="header-right">Slide 18 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">障害を前提とした設計</div>
    <div class="box-content">
      <div class="badge gray">冗長性とスケーリング</div>
      <div class="box-text">- 単一障害点をなくすため、複数のリージョンにリソースを分散させ、自動スケーリングを構成します 。<br>- コンポーネントに障害が発生した場合でも、サービスを中断せずに稼働し続ける高可用性を実現します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">クラウドの可視化</div>
    <div class="box-content">
      <div class="badge blue">オブザーバビリティ</div>
      <div class="box-text">- Cloud Monitoring と Logging を使用し、インフラとアプリのパフォーマンスを統合的に監視・分析します 。<br>- 異常を早期に検出し、迅速なトラブルシューティングとプロアクティブな対応を可能にします 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Sustainability</div>
  <div class="header-center">Google Cloudとサステナビリティ</div>
  <div class="header-right">Slide 19 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">環境負荷の低減</div>
    <div class="box-content">
      <div class="badge green">高効率データセンター</div>
      <div class="box-text">- 再生可能エネルギーの活用や革新的な冷却システムにより、業界最高水準のエネルギー効率を達成しています 。<br>- クラウドに移行するだけで、組織のIT関連カーボンフットプリントを大幅に低減できます 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">サステナブルなビジネス構築</div>
    <div class="box-content">
      <div class="badge pink">パートナーシップ</div>
      <div class="box-text">- 企業は独自の環境目標の達成に向け、Googleの技術を基盤に新しいソリューション（スマート充電など）を構築できます 。<br>- 脱炭素化とビジネス成長を両立させる、未来志向のプラットフォームです 。</div>
    </div>
  </div>
</div>

---

<div class="header-container">
  <div class="header-left">Conclusion</div>
  <div class="header-center">まとめ：DXを成功に導くために</div>
  <div class="header-right">Slide 20 / 20</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">テクノロジー、人、プロセスの統合</div>
    <div class="box-content">
      <div class="badge yellow">総合的アプローチ</div>
      <div class="box-text">- インフラのモダナイズからデータ活用、AI導入まで、クラウドツールを戦略的に組み合わせることが重要です 。<br>- テクノロジーの導入だけでなく、組織文化とプロセスの変革がDXの真の価値を生み出します 。</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">次のステップへ</div>
    <div class="box-content">
      <div class="badge gray">継続的なイノベーション</div>
      <div class="box-text">- セキュリティとガバナンスを確保しながら、アジャイルな環境で新しいアイデアを試し続けます 。<br>- クラウドの恩恵を最大限に引き出し、変化し続ける市場と顧客ニーズに迅速に適応しましょう 。</div>
    </div>
  </div>
</div>
