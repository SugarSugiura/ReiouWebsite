import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class ReiouHeader extends LitElement {
	static styles = css`
  :host {
    --main-color: #004097;
    --sub-color:  #5E8DC3;
    --transition-color: 0.2s;

    width: 100%;
    height: 60px;
    display: block;
    position: fixed;
    z-index: 100;
  }

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }
  ul {
    list-style-type: none;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  
  * {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0px;
  }
  
  header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    z-index: 10;
    box-shadow: rgb(230, 230, 230) 0px 2px 6px;
  }
  
  nav {
    background-color: #121212;
  }
  
  .header_container {
  display: flex;
  flex-direction:row;
  height:100%;
  }
  
  header .site-title {
  padding: 10px 1vw;
  /*header自体の位置(間隔)*/
  flex-basis:10%;
  text-align: center;
  }
  
  header .site-title a {
    display: flex;
    height: 100%;
    align-items: center;
  }

  header .site-title a > img {
    max-width: 100%;
  }
  
  #navi {
    background-color: var(--main-color);
  }
  
  #navi a {
    color: #fff;
  }
  
  .menu {
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0;
  }
  
  .menu > li {
  width: 25%;
  height: 100%;
  line-height: 400%;
  text-align: center;
  }
  
  .menu > li a {
    display: block;
    font-size: 1rem;
  }
  
  .single:hover::before {
    width: 100%;
  }
  
  .single::before {
    content: "";
    width: 0;
    height: 3px;
    background-color: #fff;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
    transition: width .3s ease;
  }
  
  .menu > .single {
    position: relative;
  }
  
  .menu-second {
    width: 100%;
    position: relative;
    top: 0px;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s, visibility 0.5s;
    border-radius:0 0 0.5rem 0.5rem;
    background-color: #000;
  }

  .menu-second li {
    transition: background-color 0.3s;
  }
  
  .menu-second li:hover {
    background-color: var(--sub-color);
  }

  .menu-second li:last-child {
    border-radius:0 0 0.5rem 0.5rem;
  }

  .single .menu-second li a:hover {
    /* opacity: 0.7; */
    transition: opacity 0.5s;
  }
  
  .single:hover .menu-second {
    visibility: visible;
    opacity: 1;
  }
  
  #menu2 {
    border-left: 1px solid ;
  }
  
  #menu3 {
    border-left:1px solid;
    border-right:1px solid;
  }

  .login-container {
    flex-basis: 10%;
  }

  .login-container > a {
    display: block;
    width: 100%;
    height: 100%;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
  }

  .login {
    flex-basis: 10%;
  }

  .login > a {
    /*width: 80%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--sub-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin: 0 auto;*/

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  
    color: #fff;
    border-radius: 0;
    background: #000;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
  }

  .login > a:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 500%;
    content: "";
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
    background: #00b7ee;
  }

  .login > a:hover:before {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }

  .login > a > span {
    position: relative;
  }

  
  .pc-area {
    display: block;
    /* pc版を表示 */
    flex-basis: 80%;
  }
  .phone-area {
    display: none;
    /* スマホ版を非表示 */
  }
  .toggle_btn {
    right: 20px;
    display: none;
    /* スマホ版を非表示 */
  }
  
  #navi li {
    font-size: 15px;
    /* padding: 10px 60px 10px 0; */
    margin: auto;
    letter-spacing: 0.1em;
    font-weight: 550;
    /*ヘッダー枠内のmenuの位置*/
    /*margin-right: 0px;*/
    /*ヘッダー枠内のmenuの間隔*/
  }
  
  @media screen and (max-width: 767px) {
    .pc-area {
      display: none;
    }

    .phone-area {
      display: block;
    }

    header .site-title {
      padding: auto;
    }

    header {
      width: 100%;
      height: 60px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 10;
    }
  
    .header_container {
      display: block;
      left: 15px;
      position: relative;
    }

    header .site-title {
      padding: 0px 1vw;
      text-align: center;
  }

    header .site-title a > img {
      height: 60px;
    }
  
  
  
    .test {
      visibility: hidden;
    }
  
    #navi-phone {
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: -1000px;
      padding-top: 60px;
      z-index: 100;
      transition: opacity 0.3s;
      background: #293949;
      padding: 80px 8vw 8vw 8vw;
      opacity: 0;
      z-index: 0;
    }
  
    .phone-menu {
      width: 100%;
      max-width: 360px;
      margin: 30px auto 20px;
      background: #FFF;
      /* -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px; */
    }
   
    .phone-menu .link {
      cursor: pointer;
      display: block;
      padding: 15px 15px 15px 42px;
      color: #fff;
      background-color: #293949;
      font-size: 14px;
      font-weight: 700;
      border-bottom: 1px solid #CCC;
      position: relative;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }

    .login {
      display: none;
    }
   
    .phone-menu li:last-child .link {
      border-bottom: 0;
    }
   
   .phone-menu li i {
     position: absolute;
     top: 16px;
     right: 12px;
     font-size: 18px;
     color: #fff;
     -webkit-transition: all 0.4s ease;
     -o-transition: all 0.4s ease;
     transition: all 0.4s ease;
   }
  
   .phone-menu li i:before {
    content: "\f067";
   }
   
   .phone-menu li.open .link {
     color: #4aa5f0;
   }
   
   .phone-menu li.open i {
     color: #4aa5f0;
   }
   .phone-menu li.open i:before {
     content: "\f068";
   }
   
   .phone-menu li.default .phone-submenu {display: block;}

    .phone-submenu {
      display: none;
      background: #23313f;
      font-size: 14px;
    }
   
    .phone-submenu li {
      border-bottom: 1px solid #4b4a5e;
    }
   
    .phone-submenu a {
      display: block;
      text-decoration: none;
      color: #d9d9d9;
      padding: 12px;
      padding-left: 42px;
      -webkit-transition: all 0.25s ease;
      -o-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }
   
    .phone-submenu a:hover {
      background: #b63b4d;
      color: #FFF;
    }

    .open #navi-phone {
      left: 0;
      opacity: 1;
      z-index: 20;
    }
    .toggle_btn {
      display: block;
      width: 30px;
      height: 30px;
      position: relative;
      transition: all 0.5s;
      cursor: pointer;
      z-index: 101;
    }

    .toggle_btn span {
      display: block;
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: #333;
      border-radius: 4px;
      transition: all 0.5s;
    }

    .open .toggle_btn span:nth-child(1) {
      top: 7px;
    }
  
    .toggle_btn span:nth-child(1) {
      top: 6px;
    }

    .toggle_btn span:nth-child(2) {
      bottom: 14px;
    }
  
    .toggle_btn span:nth-child(3) {
      bottom: 6px;
    }
  
    .open .toggle_btn span {
      background-color: #fff;
    }

    .open .toggle_btn span:nth-child(1) {
      -webkit-transform: translateY(4px) rotate(-45deg);
      transform: translateY(8px) rotate(-45deg);
    }

    .open .toggle_btn span:nth-child(2) { 
    opacity: 0;
    } 

    .open .toggle_btn span:nth-child(3) {
      -webkit-transform: translateY(-4px) rotate(45deg);
      transform: translateY(-7px) rotate(45deg);
    }
  
    #mask {
      display: none;
      transition: all 0.5s;
    }

    .sub-open {
      display: block;
    }
  }
	`
	static properties = {

	}

	constructor() {
    super()
	}

  firstUpdated() {
    const accordionItems = this.shadowRoot.querySelectorAll('.link');
    accordionItems.forEach(item => {
      item.addEventListener('click', (e) => this.toggleAccordion(e));
    });
  }

	render() {
    return html`
    <header id="header">
      <div></div>
      <div class="header_container">
        <div class="site-title">
          <a href="http://reioushogi.jp/"><img src="https://reioushogi.jp/assets/img/logo/logo_blue_letter.png" alt="REIOU"></a>
        </div>
        <nav id="navi" class="pc-area">
          <ul class="menu active">
            <li class="single">
              <a href="#" id="menu1" class="single_text">学習</a>
              <ul class="menu-second">
                <li><a href="index.html">戦法定跡</a></li>
                <!--<li><a href="quiz.html">次の一手</a></li>-->
                <!--<li><a href="tsume-shogi.html">詰将棋</a></li>-->
                <li><a href="https://www.youtube.com/@SugarSaiShogi">YouTube動画</a></li>
              </ul>
            </li>
            <li class="single active">
              <a href="#" id="menu2" class="single_text">記事<!----></a>
              <ul class="menu-second">
                <li><a href="https://shogimatome.com/">棋戦情報</a></li>
                <li><a href="https://www.youtube.com/@ShogiNewsSokuho">プロの棋譜解説</a></li>
                <!--<li><a href="assets/html/slide.html">動画ページ</a></li>-->
              </ul>
            </li>
            <li class="single active">
              <a href="#" id="menu3" class="single_text">紹介<!----></a>
            </li>
            <li class="single active">
              <a href="http://reioushogi.jp/" id="menu4" class="single_text">プラン<!---->
              </a>
            </li>
            <!--<li><a href="#">お問い合わせ</a></li>-->
          </ul>
        </nav>
        <!-- <div style="flex-basis: 10%;" class="login">
          <a href="http://localhost:8000/login">
            <span>ログイン</sapn>
          </a>
        </div> -->
        <div class="login-container pc-area" style="flex-basis: 10%;">
          <a href="#">
            <span>ログイン・新規登録</sapn>
          </a>
        </div>
      </div>

      <nav id="navi-phone" class="phone-area">
          <ul id="phone-menu" class="phone-menu">
            <li>
              <div class="link">
                学習<i class="fa"></i>
              </div>
              <ul class="phone-submenu">
                  <li><a href="index.html">戦法定跡</a></li>
                  <li><a href="quiz.html">次の一手</a></li>
                  <li><a href="tsume-shogi.html">詰将棋</a></li>
                  <li><a href="assets/html/slide.html">YouTube動画</a></li>
              </ul>
            </li>
            <li>
              <div class="link">
                記事<i class="fa"></i>
              </div>
              <ul class="phone-submenu">
                <li><a href="joseki-slide.html">棋戦情報</a></li>
                <li><a href="quiz.html">プロの棋譜解説</a></li>
                <li><a href="assets/html/video.html">動画ページ</a></li>
              </ul>
            </li>
            <li>
              <div class="link">
                紹介<i class="fa"></i>
              </div>
            </li>
            <li>
              <div class="link">
                プラン<i class="fa"></i>
              </div>
            </li>
            <!-- <li><a href="#">お問い合わせ</a></li> -->
          </ul>
        </nav>
        
        <div class="toggle_btn" @click="${this.toggle_phone_header}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="mask" @click="${this.close_phone_header}"></div>
    </header>
		`
	}

  toggle_phone_header() {
    const elem = this.shadowRoot.getElementById("header");
    console.log(elem);
    if (elem.classList[0] == "open") {
      elem.classList.remove("open");
    } else {
      elem.classList.add("open");
    }
  }

  close_phone_header() {
    const elem = this.shadowRoot.getElementById("header");
    elem.classList.remove("open");
  }

  toggleAccordion(e) {
    const clickedItem = e.currentTarget;
    const nextElement = clickedItem.nextElementSibling;
    if (nextElement != null) {
      nextElement.classList.toggle("open");
    }
    

    //複数開きっぱなしにするならmultipleをtrueに
    if (!this.multiple) {
      const accordionItems = this.shadowRoot.querySelectorAll('.phone-submenu');
      accordionItems.forEach(item => {
        if (item !== nextElement && item.classList.contains('open')) {
          item.classList.remove('open');
        }
      });
    }
  }

  action() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      if (!e.data.multiple) {
        $el.find('.phone-submenu').not($next).slideUp().parent().removeClass('open');
      };
    }	
  
    var accordion = new Accordion($('#phone-menu'), false);
  }

// $(function(){
//     /*=================================================
//     ハンバーガーメニュー
//     ===================================================*/
//     // ハンバーガーメニューのクリックイベント
//     $('.toggle_btn').on('click', function() {
//       // #headerにopenクラスが存在する場合
//       if ($('#header').hasClass('open')) {
//         // openクラスを削除
//         // openクラスを削除すると、openクラスのCSSがはずれるため、
//         // メニューが非表示になる
//         $('#header').removeClass('open');
  
//       // #headerにopenクラスが存在しない場合
//       } else {
//         // openクラスを追加
//         // openクラスを追加すると、openクラスのCSSが適応されるため、
//         // メニューが表示される
//         $('#header').addClass('open');
//       }
//     });

//     $('.toggle_btn').on('click', function() {
//       if ($('#shogi-player').hasClass('sp')) {
//         $('#shogi-player').removeClass('sp');
//       } else {
//         $('#shogi-player').addClass('sp');
//       }
//     }); 
  
//     // メニューが表示されている時に画面をクリックした場合
//     $('#mask').on('click', function() {
//       // openクラスを削除して、メニューを閉じる
//       $('#header').removeClass('open');
//     });
//   });

}
customElements.define("reiou-header", ReiouHeader);