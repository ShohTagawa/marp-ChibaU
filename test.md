---
marp: true
size: 16:9
style: |
  /* BIZ UDPGothicフォントの読み込み */
  @import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap');

  /* 全体の基本設定 */
  section {
    background-color: #ffffff;
    color: #000000;
    font-family: 'BIZ UDPGothic', sans-serif;
    font-size: 28px;
    padding: 80px 60px 50px 60px; /* 全体のマージンを調整 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  /* ボックスを囲むラッパーを追加して、縦いっぱいに広げる */
  .box-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px; /* ボックス間の間隔を広げる */
  }

  /* --- ヘッダー --- */
  .header-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 38px; /* 高さを少し削って線を上にあげる */
    display: flex;
    align-items: stretch;
    border-bottom: 3px solid #7A141A; /* 全幅に通る濃い赤のアンダーライン */
    z-index: 10;
  }

  .header-left {
    background-color: #B12228; /* 左側の少し明るい赤 */
    color: white;
    font-size: 23px; /* 拡大 */
    padding: 0 15px 0 15px;
    display: flex;
    align-items: center;
    width: 230px; /* 拡大 */
    flex-shrink: 0;
    /* 右側だけ斜めにカット */
    clip-path: polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
  }

  .header-center {
    background-color: #7A141A; /* 中央の濃い赤 */
    color: white;
    font-size: 23px; /* 拡大 */
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 380px; /* 拡大 */
    flex-shrink: 0;
    margin-left: -15px; /* 左のブロックと重なるようにマージンを負に */
    /* 左側だけ斜めにカット */
    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%);
  }

  .header-right {
    background-color: #ffffff; /* 白背景を追加 */
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px; /* 拡大 */
    font-size: 18px; /* 拡大 */
    font-weight: bold;
    margin-left: -15px; /* 中央ブロックと重なるようにマージンを負に */
    /* 左側だけ斜めにカット */
    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%);
  }

  /* --- 本文 --- */
  /* 角丸背景付きテキストボックス */
  .box {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px 40px; /* やや広げる */
    border: 1px solid #8e9aaa;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* 親のbox-wrapperの縦幅をバランスよく使う */
    justify-content: center; /* 中身を上下中央揃え */
  }
  
  .box-title {
    font-size: 26px; /* 拡大 */
    margin-bottom: 5px; /* 行間調整のため下げる */
    margin-left: 10px;
  }
  
  .box-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  /* ボックス内の見出し用バッジ（緑・ピンク・グレー） */
  .badge {
    padding: 20px 0; /* 高さを揃える */
    border-radius: 12px; /* 拡大 */
    margin-right: 50px; /* 余白拡大 */
    margin-left: 30px; /* 余白拡大。少し内側に */
    width: 260px; /* 拡大 */
    text-align: center;
    font-size: 32px; /* 拡大 */
    flex-shrink: 0;
  }
  .badge.green { background-color: #dcedc8; }
  .badge.pink { background-color: #fae3e3; }
  .badge.gray { background-color: #e5e5e5; }

  .box-text {
    font-size: 28px; /* 拡大 */
    line-height: 1.6;
    flex-grow: 1;
  }
---

<div class="header-container">
  <div class="header-left">生成AI 連続WS 1</div>
  <div class="header-center">今回の構成</div>
  <div class="header-right">🕒 15-min. Session!</div>
</div>

<div class="box-wrapper">
  <div class="box">
    <div class="box-title">最初の15分</div>
    <div class="box-content">
      <div class="badge green">講義</div>
      <div class="box-text">- 大規模言語モデル<br>- 生成AIを構成するレイヤー</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">真ん中の15分</div>
    <div class="box-content">
      <div class="badge pink">体験</div>
      <div class="box-text">- Google Colabでやってみる<br>　次にくる単語の確率を予測してみよう</div>
    </div>
  </div>

  <div class="box">
    <div class="box-title">最後の15分</div>
    <div class="box-content">
      <div class="badge gray">議論・座談会</div>
      <div class="box-text">- 今日面白かったこと、気付きは何でしたか。<br>- AIの学び方ってどうすればよいと思いますか。<br>- 今後、どのような点を特に学んでみたいですか。</div>
    </div>
  </div>
</div>