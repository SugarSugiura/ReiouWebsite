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
        <section class="section-otoiawase">
          <h1 class="section-headline">Contact</h1>
          <form class="form" action="">
            <table class="form-table">
              <tr>
                <th>
                  <label for="menu">Menu</label>
                </th>
                <td>
                  <select class="select" id="menu">
                    <option value="menu-1">Menu 1</option>
                    <option value="menu-2">Menu 2</option>
                    <option value="menu-3">Menu 3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label for="name">Name</label>
                  <!--labelでforを指定することによって下のidと連携しクリックが反映される(テキスト場所だけじゃなくタイトルクリックでも反応する)-->
                </th>
                <td>
                  <input class="input" type="text" id="name">
                  <!--text以外にもemailなどでも設定可能-->
                </td>
              </tr>
              <tr>
                <th>
                  <label for="email">Email</label>
                </th>
                <td>
                  <input class="input" type="email" id="email">
                </td>
              </tr>
              <tr>
                <th>
                  Gender
                </th>
                <td>
                  <label class="radio"><input type="radio" name="gender" value="male"> Male</label>
                  <label class="radio"><input type="radio" name="gender" value="female"> Female</label>
                  <label class="radio"><input type="radio" name="gender" value="other"> Other</label>
                  <!--checkboxにすると複数選択もできるようになる-->
                </td>
              </tr>
              <tr>
                <th><label for="detail">Detail</label></th>
                <td>
                  <textarea class="textarea" id="detail" cols="30" rows="10"></textarea>
                </td>
              </tr>
            </table>
            <button class="button" type="submit">Submit</button>
            <!--buttonは押下すると何か情報が送信される、submitで送信-->
          </form>
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
