<template>
  <div>
    <header id="header">
      <h1 class="site-title wrapper"><!--空白でclass名を2つ指定-->
        <a href="REIOUwebsite.html"><img src="assets/img/REIOUlogo.png" alt="REIOU"></a>
      </h1>
      <nav id="navi" class="pc-area"><!--元は-->
        <ul class="wrapper"><!--元はmenu-->
          <li><a href="#">学習<!----></a></li>
          <li><a href="#">戦法一覧<!----></a></li>
          <li><a href="#">紹介<!----></a></li>
          <li><a href="#">プラン<!----></a></li>
          <!--<li><a href="#">お問い合わせ</a></li>-->
        </ul>
        <!--<ul class="login">
            <li><a href="#">無料版</a></li>
            <li><a href="#">ログイン</a></li>
        </ul>-->
      </nav>
      <nav id="navi-phone" class="phone-area">
        <ul class="wrapper">
          <li><a href="#">学習</a></li>
          <li><a href="#">戦法一覧</a></li>
          <li><a href="#">紹介</a></li>
          <li><a href="#">プラン</a></li>
          <li><a href="#">お問い合わせ</a></li>
        </ul>
      </nav>
      <div class="toggle_btn">
        <span></span>
        <span></span>
      </div>

      <div id="mask"></div>
    </header>

    <!--ヘッダーとmainの間にタイトルをつけたいならこれをいれた方がいいか-->
    <div id="top-title" class="wrapper">
      <article>
        <h2 class="article-title">初心者はこちらから！！！</h2>
        <h2 class="article-subtitle">駒の動かし方</h2>
        <a href="hazimete.html">
          <img src="assets/img/ranking1.jpg" alt="テキストテキストテキスト">
        </a>

        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

        <div id="app">{{ message }}</div>

        <script>
          const {createApp} = Vue

          createApp({
            data() {
              return {
                message: '将棋盤をここに表示する'
              }
            }
          }).mount('#app')
        </script>


      </article>
    </div>
    <!--上にタイトルをつけたいならこれをいれた方がいいか-->

    <main>
      <div id="top" class="wrapper">
        <ul class="product-list">
          <li>
            <a href="aigakari.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【居飛車】</p>
              <p>相掛かり戦法</p>
            </a>
          </li>
          <li>
            <a href="kakugawari.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【居飛車】</p>
              <p>角換わり戦法</p>
            </a>
          </li>
          <li>
            <a href="yagura.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【居飛車】</p>
              <p>矢倉戦法</p>
            </a>
          </li>
          <li>
            <a href="sanken.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【振り飛車】</p>
              <p>三間飛車戦法</p>
            </a>
          </li>
          <li>
            <a href="shiken.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【振り飛車】</p>
              <p>四間飛車戦法</p>
            </a>
          </li>
          <li>
            <a href="nakahisya.html">
              <img src="assets/img/main1.jpg" alt="">
              <p>【振り飛車】</p>
              <p>中飛車戦法</p>
            </a>
          </li>
        </ul>
        <a class="link-text" href="REIOUproducts.html#koma-move">View More</a>
        <!--View Moreを押下するとさらに戦法一覧が表示される、productsのmoreから表示できるとなおよい-->
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
            <li><a href="REIOUunnei.html" class="arrow">令王運営の詳細</a></li>
            <li><a href="mailto:sugarrennraku@gmail.com?subject=お仕事のご依頼" class="arrow">お仕事のご依頼</a></li>
            <li><a href="otoiawase.html" class="arrow">お問い合わせ</a></li>
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
