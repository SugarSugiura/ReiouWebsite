import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class SlideLast extends LitElement {
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

  .last-slide-container {
    background-color: seagreen;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .last-slide-container > div {
    width: 100%;
    padding: 0 1rem;
  }

  .last-text {
    margin-bottom: 1rem;
  }

  .last-text > p {
    text-align: center;
    color: white;
    font-size: 2rem;
    line-height: 40px;
  }

  .close-button-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .close-button-container > div {
    color: white;
    text-shadow: -1px -1px 1px #a1a1a1;
    border: 2px solid #00662d;
    border-bottom: 5px solid #00662d;
    font-size: 2rem;
    width: 444px;
    text-align: center;
    border-radius: 5px;
    user-select: none;
    position: relative;
    transition: all ease 0.1s;
  }

  .close-button-container > div:active {
    margin-top: 3px;
    border-bottom: 2px solid #00662d;
  }

  

  .close-button-container > div > i {
    position: absolute;
    top: calc(50% - 0.5em);
    right: 1rem;
  }

  @media screen and (max-width: 500px) {
    .last-text {
      margin-bottom: 0.5rem;
    }

    .last-text > p {
      font-size: 1.2rem;
      line-height: 24px;
    }

    .close-button-container > div {
      font-size: 1.2rem;
      width: 270px;
    }

  }

  
	`
	static properties = {
    
	}

  

	constructor() {
    super()
	}

  firstUpdated() {
    
  }

	render() {
    return html`
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css">
    <div class="last-slide-container">
      <div>
        <div class="last-text">
          <p>ここでスライドは終わりです<br>それではやっていきましょう！</p>
        </div>
        <div class="close-button-container">
          <div @click="${this.close_slide}">
            学習に進む<i class="fas fa-angle-right fa-position-right"></i>
          </div>
        </div>
      </div>
    </div>
		`
	}

  close_slide() {
    document.getElementById("slide_close").checked = false;
  }
}
customElements.define("slide-last", SlideLast);