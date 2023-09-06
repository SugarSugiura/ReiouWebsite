import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class ReiouHeader extends LitElement {
	static styles = css`

	`
	static properties = {

	}

	constructor() {
    super()
	}


	render() {
    return html`
		<div></div>          
		<div class="header_container">
			<div class="site-title">
				<a href="index.html"><img src="assets/img/REIOUlogo.png" alt="REIOU"></a>
			</div>
			<nav id="navi" class="pc-area"><!--元は-->
				<ul class="menu active"><!--元はmenu-->
					<li class="single">
						<a href="index.html" id="menu1" class="single_text">学習</a>
						<ul class="menu-second">
							<li><a href="index.html">戦法定跡</a></li>
							<li><a href="quiz.html">次の一手</a></li>
							<li><a href="tsume-shogi.html">詰将棋</a></li>
							<li><a href="assets/html/slide.html">YouTube動画</a></li>
						</ul>
					</li>
					<li class="single active">
						<a href="test.html" id="menu2" class="single_text">記事<!----></a>
						<ul class="menu-second">
							<li><a href="joseki-slide.html">棋戦情報</a></li>
							<li><a href="quiz.html">プロの棋譜解説</a></li>
						</ul>
					</li>
					<li class="single active">
						<a href="sousa.html" id="menu3" class="single_text">紹介<!----></a>
					</li>
					<li class="single active">
						<a href="create-tume-shogi.html" id="menu4" class="single_text">プラン<!---->
						</a>
					</li>
					<!--<li><a href="#">お問い合わせ</a></li>-->
				</ul>
						<!--<ul class="login">
								<li><a href="#">無料版</a></li>
								<li><a href="#">ログイン</a></li>
					</ul>-->
			</nav>
			<div style="flex-basis: 10%;" class="test">
				<h1>
					仮予定地
				</h1>
			</div>
		</div>
		`
	}
}
customElements.define("reiou-header", ReiouHeader);