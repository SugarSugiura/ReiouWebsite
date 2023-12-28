import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class SlideDouble extends LitElement {
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
    --slide-txt-size: 1.2rem;
    --imgnum-txt-size: 1.2rem;

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

  .double-slide-container {
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
    font-size: var(--slide-txt-size);
    text-align: start;
  }

  .slide-img {
    display: flex;
    justify-content: center;
    height: calc(100% - ((2*var(--slide-txt-size))*1.6 + 2rem + 0.95px));
    height: 100%;
  }

  .slide-img > div > img {
    border: solid 5px #024900;
    max-width: calc(50vw - 4rem);
    height: calc(100% - (var(--imgnum-txt-size)*1.6 + 1rem));
    margin: 0 1rem;
    width: auto;
  }

  .img-num {
    color: white;
    text-align: center;
    font-size: var(--imgnum-txt-size);
  }

  @media screen and (max-width: 1000px) {
    :host {
      --slide-txt-size: 1rem;
      --imgnum-txt-size: 1rem;
    }

    .slide-img > div > img {
      height: auto;
      width: calc(50vw - 2rem);
    }
  }

  @media (orientation: portrait) {
    .slide-img {
      flex-direction: column;
      justify-content: start;
    }
    
    .slide-img > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50%;
    }

    .slide-img > div > img {
      max-width: 100vw;
      width: auto;
      height: calc(100% - (var(--imgnum-txt-size)*1.6) - 1rem);
    }

    .img-num {
      margin-bottom: 1rem;
    }
  }
	`
	static properties = {
    text: { type: String },
    img_url_1: { type: String },
    img_url_2: { type:String },
    num_text_1: { type: String },
    num_text_2: { type: String }
	}

  static fromAttribute(name, value) {
    if (name === "text") {
      // カスタム属性名が 'my-property' の場合、値をそのまま返す
      return value;
    } else if (name === "img_url_1") {
      return value;
    } else if (name === "img_url_2") {
      return value;
    } else if (name === "num_text_1") {
      return value;
    } else if (name === "num_text_2") {
      return value;
    }
    return super.fromAttribute(name, value);
  }

	constructor() {
    super()
    this.text = "①▲７五歩に飛車交換は先手成功形でした。そのため△８二飛（第１図）が冷静な対応です。*②先手は７筋の位を活かし▲７七桂（第２図）から石田流を目指します。";
    this.img_url_1 = "../../img/hineri/hineri1_1.png";
    this.img_url_2 = "../../img/hineri/hineri1_2.png";
    this.num_text_1 = "第１図";
    this.num_text_2 = "第２図";

    
	}

  firstUpdated() {
    window.addEventListener('resize', () => this.updateStyles());
    this.updateStyles(); // 初期化時にもスタイルを更新する
  }

  

	render() {
    return html`
    <div class="double-slide-container">
      <div class="slide-txt">
        <div>
          ${this.text.split("*").map(line => html`<p>${line}</p>`)}
        </div>
      </div>
      <div class="img-container">
        <div class="slide-img">
          <div>
            <img class="img" src="${this.img_url_1}">
            <div class="img-num">
              <p>${this.num_text_1}</p>
            </div>
          </div>
          <div>
            <img class="img" src="${this.img_url_2}">
            <div class="img-num">
              <p>${this.num_text_2}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
		`
	}

  updateStyles() {
    // デバイスの向きが縦向きかどうかを確認
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const slideImgElem = this.shadowRoot.querySelectorAll(".img");
    const slideTxtElem = this.shadowRoot.querySelector(".slide-txt");
    const slideTxtHeight = slideTxtElem.offsetHeight;
    const imgContainerElem = this.shadowRoot.querySelector(".img-container");
    imgContainerElem.style.height = "calc(100% - " + slideTxtElem.offsetHeight + "px)";
    // 必要に応じてスタイルを更新
    // if (isPortrait) {
      

    //   slideImgElem.forEach((element, index) => {
    //     element.style.height = "calc((100% - 84px - " + slideTxtHeight + "px)/2)";
    //     element.style.height = "100%";
    //     console.log(element.style.height);
    //   });
    // } else {
    //   slideImgElem.forEach((element, index) => {
    //     element.style.height = "calc(100% - (var(--imgnum-txt-size)*1.6 + 1rem))";
    //     console.log(element.style.height);
    //   });
    // }
  }
}
customElements.define("slide-double", SlideDouble);