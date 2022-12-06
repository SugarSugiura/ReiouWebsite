class MyTitle extends HTMLElement {
    constructor() { super(); }

    connectedCallback() {
      const title = document.createElement('h1');
      title.textContent = 'タイトル';
      this.appendChild(title);
    }
  }
  customElements.define('my-title', MyTitle);