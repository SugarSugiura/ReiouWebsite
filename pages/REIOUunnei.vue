<template>
  <div>
    <header id="header">
      <h1 class="site-title wrapper">
        <a href="REIOUwebsite.html"><img src="assets/img/REIOUlogo.png" alt="REIOU"></a>
      </h1>
      <nav id="wrapper">
        <!--中央揃えにしたほうがよいか-->
        <ul class="menu">
          <li><a href="#">学習</a></li>
          <li><a href="#">戦法一覧</a></li>
          <li><a href="#">紹介</a></li>
          <li><a href="#">プラン</a></li>
          <!--
              <li><a href="#">お問い合わせ</a></li>
          -->
        </ul>
        <ul class="login">
          <li><a href="#">無料版</a></li>
          <li><a href="#">ログイン</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div id="top-title" class="wrapper">
        <h1 class="page-title">About</h1>
        <div id="about">
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <section>
          <div class="slide">
            <img id="slide_img" src="img/img1.jpg">
          </div>
          <div class="toolbar">
            <div id="prev" class="button"><</div>
            <div id="page"></div>
            <div id="next" class="button">></div>
          </div>
        </section>
      </div>
    </main>

    <footer id="footer">
      <div class="content wrapper">
        <section class="item">
          <h3 class="footer-title">About</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <ul class="about-list">
            <li><a href="#" class="arrow">令王運営の詳細</a></li>
            <li><a href="#" class="arrow">お仕事の依頼</a></li>
            <li><a href="#" class="arrow">お問い合わせ</a></li>
          </ul>
        </section>

        <section class="item">
          <h3 class="footer-title">Menu</h3>
          <ul class="menu-list">
            <li><a href="#">NEW</a></li>
            <li><a href="#">CATEGORY</a></li>
            <li><a href="#">COLUMN</a></li>
            <li><a href="#">SERIES</a></li>
            <li><a href="#">Q&A</a></li>
          </ul>
        </section>

        <section class="item">
          <h3 class="footer-title">Twitter</h3>
          <a class="twitter-timeline" data-height="315" href="https://twitter.com/Sugar_Sugiura">Tweets by 令王</a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </section>
      </div>

      <p class="copyright">&copy; REIOU</p>
    </footer>
  </div>
</template>

<style lang="scss">
// 大枠
section{
  width: 500px;
  margin: 40px auto;
}

// スライドショー
.slide{
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

// ツールバー
.toolbar{
  display: flex;
  justify-content: center;
  align-items: center;
}

// ページ数
#page{
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
}

// ボタン
.button{
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-radius: 50%;
  font-size: 30px;
  font-weight: bold;
  background-color: #ddd;
  cursor: pointer;
  user-select: none;
}
</style>
