<template>
  <div>
    <header id="header">
      <h1 class="site-title">
        <a href="#"><img src="img/logo-r.svg" alt="令王"></a>
      </h1>

      <nav id="navi">
        <img class="logo" src="img/logo-w.svg" alt="令王">
        <ul class="menu">
          <li><a href="#reason">令王の想い</a></li>
          <li><a href="#voice">受講生の声</a></li>
          <li><a href="#summary">学習サイトの概要</a></li>
        </ul>
        <a class="btn" href="#">無料で始める！</a>
      </nav>

      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <main>
      <!-- メインビジュアル -->
      <div id="mainvisual">
        <div class="text">
          <p class="title">どこでも学べる！<br>手軽に将棋を始めよう</p>
          <a class="btn" href="#">無料で始める！</a>
        </div>
        <ul class="fade">
          <li><img src="img/mainvisual1.jpg" alt=""></li>
          <li><img src="img/mainvisual2.jpg" alt=""></li>
          <li><img src="img/mainvisual3.jpg" alt=""></li>
        </ul>
      </div>

      <!-- 令王の特徴 -->
      <section id="reason">
        <h2 class="section-title">令王の特徴</h2>

        <div class="bg">
          <div class="slide inview-slide-left">
            <img src="img/icon-pc.png" alt="">
            <p>
              <span class="title">オンライン対応</span>
              <span class="text">24時間いつでも受講できる！</span>
            </p>
          </div>
          <div class="slide inview-slide-right">
            <img src="img/icon-teacher.png" alt="">
            <p>
              <span class="title">講師はアマチュア高段者からプロ棋士まで！</span>
              <span class="text">お気に入りの講師が自由に選べる！</span>
            </p>
          </div>
        </div>
      </section>

      <!-- 受講生の声 -->
      <section id="voice" class="wrapper">
        <h2 class="section-title">受講生の声</h2>

        <div class="item-left inview-balloon">
          <div class="student">
            <img src="img/icon-student1.png" alt="">
            <p class="name">○○○さん<br>大学生</p>
          </div>
          <div class="balloon-text">
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>

        <div class="item-right inview-balloon">
          <div class="balloon-text">
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div class="student">
            <img src="img/icon-student2.png" alt="">
            <p class="name">○○○さん<br>会社員</p>
          </div>
        </div>

        <div class="item-left inview-balloon">
          <div class="student">
            <img src="img/icon-student3.png" alt="">
            <p class="name">○○○さん<br>自営業</p>
          </div>
          <div class="balloon-text">
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </section>

      <!-- 令王の概要 -->
      <section id="summary">
        <div class="wrapper">
          <h2 class="section-title">令王の概要</h2>

          <ul class="menu">
            <li>
              <h3 class="menu-title">
                <span class="ja">レッスン内容</span>
                <span class="en">LESSON</span>
              </h3>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </li>
            <li>
              <h3 class="menu-title">
                <span class="ja">料金プラン</span>
                <span class="en">PRICE</span>
              </h3>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </li>
            <li>
              <h3 class="menu-title">
                <span class="ja">講師のご紹介</span>
                <span class="en">TEACHER</span>
              </h3>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </li>
            <li>
              <h3 class="menu-title">
                <span class="ja">令王のQ&A</span>
                <span class="en">Q&A</span>
              </h3>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 無料で始める！ -->
      <div id="entry" class="wrapper">
        <p class="title">まずは無料で、令王を試してみよう！</p>
        <p class="catchphrase">今なら初月のレッスンを特別価格で受講できる割引クーポンをプレゼント！</p>
        <a class="btn" href="#">無料で始める！</a>
      </div>
    </main>

    <footer id="footer">
      <ul class="inner wrapper">
        <li>
          <p class="title">コース一覧</p>
          <ul class="menu">
            <li><a href="#">スタンダードプラン</a></li>
            <li><a href="#">プレミアムプラン</a></li>
            <li><a href="#">短期集中プラン</a></li>
            <li><a href="#">毎日レッスンコース</a></li>
            <li><a href="#">超上達コース</a></li>
          </ul>
        </li>
        <li>
          <p class="title">講師紹介</p>
          <ul class="menu">
            <li><a href="#">講師について</a></li>
            <li><a href="#">講師一覧</a></li>
            <li><a href="#">講師を探す</a></li>
          </ul>
        </li>
        <li>
          <p class="title">会社情報</p>
          <ul class="menu">
            <li><a href="#">会社概要</a></li>
            <li><a href="#">採用情報</a></li>
          </ul>
        </li>
        <li>
          <p class="title">令王について</p>
          <ul class="menu">
            <li><a href="#">よくあるご質問</a></li>
            <li><a href="#">ご利用規約</a></li>
            <li><a href="#">プライバシーポリシー</a></li>
            <li><a href="#">お問い合わせ</a></li>
          </ul>
        </li>
      </ul>
      <p class="copyright">&copy; 令王</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "top",
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'assets/css/aigakariheader.css'
        }]
    }
  }
}
</script>
