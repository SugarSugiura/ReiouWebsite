import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class ReiouFooter extends LitElement {
	static styles = css`
  :host {
    --main-color: #004097;
    --sub-color:  #5E8DC3;
    --transition-color: 0.2s;

    font-size: 0.875rem;
    background-color: var(--main-color);
    position: static;
    color: #ffffff;
    bottom: 0px;
    width: 100%;
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
  }
  
  * {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0px;
  }

  .wrapper {
    max-width: 1200px;
    padding: 0 16px;
    margin: 0 auto;
    position: relative;
    width: 100%;
  }
  
  #footer {
    font-size: 0.875rem;
    background-color: var(--main-color);
    position: static;
    color: #ffffff;
    bottom: 0px;
    width: 100%;
  }
  
  #footer .content {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  #footer .item {
    width: 30%;
    text-align: left;
  }
  
  #footer .footer-title {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  #footer ul.service-list {
    text-align: left;
    width: fit-content;
  }
  

  
  #footer ul.service-list li a {
    color: #fff;
  }
  
  #footer ul.service-list .arrow {
    position: relative;
    display: inline-block;
    padding-left: 12px;
  }

  #footer ul.service-list .arrow::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 8px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -6px;
  }
  #footer .menu-list {
    width: fit-content;
  }
  #footer .menu-list > li {
    text-align: left;
    margin: auto;
  }
  
  #footer .menu-list a {
    color: #fff
  } 
  
  #footer .copyright {
    font-size: 0.750rem;
    text-align: center;
    padding: 0;
  }
  
  .service {
    border-right: solid;
    border-left: solid;
    padding-left: 40px;
  }
  
  .support {
    border-right: solid;
  }
  
  .sns {
    border-right: solid;
  }
  
  .follow-me {
    list-style: none;
    margin: 0 0 -8px;
    overflow: hidden;
    padding: 0;
  }
  .follow-me li {
    float: left;
    margin: 0px;
    padding: 0px;
    width: 44px;
    height: 44px;
    background-color: white;
    border-radius: 2px;
    text-align: center;
    line-height: 55px;
  }
  
  .follow-me li a {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s;
  }

  .follow-me li a:hover {
    opacity: 0.7;
  }

  .select {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    min-width: 500px;
  }
  .input {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    min-width: 500px;
  }
  .radio {
    margin: auto;
  }
  .textarea {
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    min-width: 500px;
    min-height: 100px;
  }
  label, input, textarea, select, button {
    cursor: pointer;
  }
  
  @media screen and (max-width: 767px) {
    /*-------------------------------------------
    footer
    -------------------------------------------*/
    #footer {
      font-size: 0.875rem;
      background-color: var(--main-color);
      color: #ffffff;
      position: static;
    }
  
    #footer .content {
      flex-direction: column;
    }
    #footer .item {
      width: 100%;
      margin-bottom: 30px;
    }
  
    #footer .footer-title {
      margin-bottom: 10px;
      text-align: center;
    }
  
    .service-list {
      margin: 0 auto;
    }
  
    #footer .service-list li {
      text-align: center;
    }
  
    .menu-list {
      margin: 0 auto;
    }
  
    #footer .menu-list > li {
      text-align: center;
    }
  
    .service {
      border-right: none;
      border-left: none;
      padding-left: 0; 
    }
  
    .support {
      border-right: none;
    }
  
    .sns {
      border-right: none;
    }
  
    .follow-me {
      display: flex;
      justify-content: center;
    }
  
    .follow-me li {
      margin: 0;
    }
  
    
  
  }
	`
	static properties = {

	}

	constructor() {
    super()
	}

	render() {
    return html`
    <footer id="footer">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css">
      <div class="content wrapper">
        <!-- <section class="item"> アプリができたとき用

        </section> -->
        <section class="item service">
          <h3 class="footer-title">サービス</h3>
          <ul class="service-list">
            <li><a href="assets/html/landing.html">トップページ</a></li>
            <li><a href="REIOUunnei.html">コース一覧</a></li>
            <li><a href="mailto:sugarrennraku@gmail.com?subject=お仕事のご依頼">Q&A</a></li>
            <li><a href="otoiawase">お問い合わせ</a></li>
          </ul>
        </section>

        <section class="item support">
          <h3 class="footer-title">サポート</h3>
            <ul class="menu-list">
              <li><a href="https://reioushogi.jp/assets/html/company-info.html">運営会社</a></li>
              <li><a href="https://reioushogi.jp/assets/html/policy.html" >利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="https://reioushogi.jp/assets/img/specifiedCommercial.pdf">特定商取引法に関する表記</a></li>
          </ul>
        </section>

        <section class="item sns">
          <h3 class="footer-title">SNS</h3>
          <ul class="follow-me">
            <li>
              <a href="https://twitter.com/Sugar_Sugiura"><i class="fa-brands fa-x-twitter fa-2x" style="color: black;"></i></a>
              <script async src="https://platform.twitter.com/widgets.js"></script>
            </li>
          </ul>
        </section>
      </div>
      <p class="copyright">&copy; REIOU</p>
    </footer>
		`
	}
}
customElements.define("reiou-footer", ReiouFooter);