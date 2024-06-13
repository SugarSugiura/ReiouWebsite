import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class SlideFirst extends LitElement {
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
    --text-red: red;
    --text-blue: blue;
    --text-green: #288a49a0;
    --text-yellow: #ab8c00;
    --text-lightBlue: #00a78e;
    --text-orange: #fd8c1c;
    --text-pink: #ea3992;
    --text-darkBlue: #03a9a9;
    --text-brown: #964b00;
    --text-purple: #990099;

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

  .first-slide-container {
    background-color: seagreen;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .first-slide-container > div {
    width: 100%;
    padding: 0 1rem;
  }

  .title-container {
    text-align: center;
  }

  .title-container > h1 {
    color: white;
    font-size: 3rem;
  }

  .text-container {
    text-align: center;
    margin-bottom: 1rem;
  }

  .text-container > p {
    color: white;
    font-size: 1.2rem;
    line-height: 22px;
  }

  .img-container {
    text-align: center;
    position: relative;
  }

  .img-container >img {
    max-width: 100%;
    width: 600px;
    height: auto;
  }

  .img-text-container {
    position: absolute;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 4rem;
    font-weight: bold;
  }

  

  @media screen and (max-width: 500px) {
    .img-text-container {
      width: 100vw;
      font-size: 2rem;
    }

  }

  .text-red {
    text-shadow: -1px -1px 4px var(--text-red), -1px 0 4px var(--text-red), -1px 1px 4px var(--text-red),
                    0 -1px 4px var(--text-red),                    0 1px 4px var(--text-red),
                  1px -1px 4px var(--text-red),  1px 0 4px var(--text-red),  1px 1px 4px var(--text-red);
  }
  
  .text-blue {
    text-shadow: -1px -1px 4px var(--text-blue), -1px 0 4px var(--text-blue), -1px 1px 4px var(--text-blue),
                    0 -1px 4px var(--text-blue),                    0 1px 4px var(--text-blue),
                  1px -1px 4px var(--text-blue),  1px 0 4px var(--text-blue),  1px 1px 4px var(--text-blue);
  }
  
  .text-green {
    text-shadow: -1px -1px 4px var(--text-green), -1px 0 4px var(--text-green), -1px 1px 4px var(--text-green),
                    0 -1px 4px var(--text-green),                    0 1px 4px var(--text-green),
                  1px -1px 4px var(--text-green),  1px 0 4px var(--text-green),  1px 1px 4px var(--text-green);
  }
  
  .text-yellow {
    text-shadow: -1px -1px 4px var(--text-yellow), -1px 0 4px var(--text-yellow), -1px 1px 4px var(--text-yellow),
                    0 -1px 4px var(--text-yellow),                    0 1px 4px var(--text-yellow),
                  1px -1px 4px var(--text-yellow),  1px 0 4px var(--text-yellow),  1px 1px 4px var(--text-yellow);
  }
  
  .text-lightBlue {
    text-shadow: -1px -1px 4px var(--text-lightBlue), -1px 0 4px var(--text-lightBlue), -1px 1px 4px var(--text-lightBlue),
                    0 -1px 4px var(--text-lightBlue),                    0 1px 4px var(--text-lightBlue),
                  1px -1px 4px var(--text-lightBlue),  1px 0 4px var(--text-lightBlue),  1px 1px 4px var(--text-lightBlue);
  }
  
  .text-orange {
    text-shadow: -1px -1px 4px var(--text-orange), -1px 0 4px var(--text-orange), -1px 1px 4px var(--text-orange),
                    0 -1px 4px var(--text-orange),                    0 1px 4px var(--text-orange),
                  1px -1px 4px var(--text-orange),  1px 0 4px var(--text-orange),  1px 1px 4px var(--text-orange);
  }
  
  .text-pink {
    text-shadow: -1px -1px 4px var(--text-pink), -1px 0 4px var(--text-pink), -1px 1px 4px var(--text-pink),
                    0 -1px 4px var(--text-pink),                    0 1px 4px var(--text-pink),
                  1px -1px 4px var(--text-pink),  1px 0 4px var(--text-pink),  1px 1px 4px var(--text-pink);
  }
  
  .text-darkBlue {
    text-shadow:  -1px -1px 4px var(--text-darkBlue), -1px 0 4px var(--text-darkBlue), -1px 1px 4px var(--text-darkBlue),
                    0 -1px 4px var(--text-darkBlue),                          0 1px 4px var(--text-darkBlue),
                  1px -1px 4px var(--text-darkBlue),  1px 0 4px var(--text-darkBlue),  1px 1px 4px var(--text-darkBlue);
  }
  
  .text-brown {
    text-shadow:  -1px -1px 4px var(--text-brown), -1px 0 4px var(--text-brown), -1px 1px 4px var(--text-brown),
                    0 -1px 4px var(--text-brown),                          0 1px 4px var(--text-brown),
                  1px -1px 4px var(--text-brown),  1px 0 4px var(--text-brown),  1px 1px 4px var(--text-brown);
  }
  
  .text-purple {
    text-shadow:  -1px -1px 4px var(--text-purple), -1px 0 4px var(--text-purple), -1px 1px 4px var(--text-purple),
                    0 -1px 4px var(--text-purple),                          0 1px 4px var(--text-purple),
                  1px -1px 4px var(--text-purple),  1px 0 4px var(--text-purple),  1px 1px 4px var(--text-purple);
  }

  
	`
	static properties = {
    title: { type: String },
    text: { type: String },
    img_url: { type: String },
    text_color: { type: String },
  
	}

  static fromAttribute(name, value) {
    if (name === "title") {
      return value;
    } else if (name === "text") {
      return value;
    } else if (name === "img_url") {
      return value;
    } else if (name === "text_color") {
      return value;
    }
    return super.fromAttribute(name, value);
  }

	constructor() {
    super()
    this.title = "戦法名"
    this.text = "ここに戦法についての軽い説明*２行目の説明"; //*で改行
    this.img_url = "../../img/shogiban.png";
    this.text_color = "red";
	}

  firstUpdated() {
    
  }

	render() {
    return html`
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css">
    <div class="first-slide-container">
      <div>
        <div class="title-container">
          <h1>${this.title}</h1>
        </div>
        <div class="text-container">
          ${this.text.split("*").map(line => html`<p>${line}</p>`)}
        </div>
        <div class="img-container">
          <img src="${this.img_url}">
          <div class="img-text-container ${"text-" + this.text_color}">
            ${this.title}
          </div>
        </div>
      </div>
    </div>
		`
	}
}
customElements.define("slide-first", SlideFirst);