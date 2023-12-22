import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class SlideSingle extends LitElement {
	static styles = css`
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

  * {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0px;
  }

  :host {
    --main-color: #004097;
    --sub-color:  #5E8DC3;
    --transition-color: 0.2s;

    display: block;
    width: 100%;
    height: 100%;
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

  .single-slide-container {
    background-color: seagreen;
    height: 100%;
  }

  .slide-txt {
    display: flex;
    justify-content: center;
    
  }

  .slide-txt > div {
    display: inline-block;
    margin: 1rem;
    color: white;
  }

  .slide-img {
    display: flex;
    justify-content: center;
    height: calc(100vh - 7rem);
  }

  .slide-img > img{
    border: solid 5px #024900;
    width: 100vw;
  }

  .img-num {
    color: white;
    text-align: center;
  }
  
  
  
  
	`
	static properties = {
    text: { type: String },
    img_url: { type: String },
    num_text: { type: String }
	}

  static fromAttribute(name, value) {
    if (name === "text") {
      // カスタム属性名が 'my-property' の場合、値をそのまま返す
      return value;
    } else if (name === "img_url") {
      return value;
    } else if (name === "num_text") {
      return value;
    }
    return super.fromAttribute(name, value);
  }

	constructor() {
    super()
    this.text = "①▲７五歩に飛車交換は先手成功形でした。そのため△８二飛（第１図）が冷静な対応です。*②先手は７筋の位を活かし▲７七桂（第２図）から石田流を目指します。";
    this.img_url = "../../img/hineri/hineri1_1.png";
    this.num_text = "第１図"
	}

  firstUpdated() {
    
  }

	render() {
    return html`
    <div class="single-slide-container">
      <div class="slide-txt">
        <div>
          ${this.text.split("*").map(line => html`<p>${line}</p>`)}
        </div>
      </div>
      <div class="slide-img">
        <img src="${this.img_url}">
      </div>
      <div class="img-num">
        <p>${this.num_text}</p>
      </div>
    </div>
		`
	}
}
customElements.define("slide-single", SlideSingle);