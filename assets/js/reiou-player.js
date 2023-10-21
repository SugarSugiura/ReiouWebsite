//strの文字列のnum行目を取得できる
function line_string(str, num) {
  var count = 0;
  var last = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "\n") {
      //console.log(i);
      count++;
      if (count == num) {
        if (num == 1) {
          return str.slice(last, str.indexOf("\n", last + 1));
        } else {
          return str.slice(last + 1, str.indexOf("\n", last + 1));
        }
      }
      last = i;
    }

  }
}

import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"; 
export class ShogiBoard extends LitElement {
  static styles = css`
    :host {
      padding-top: 76px;
      display: flex;
      min-height: 100vh;
      /*border: 1px solid hsl(0 0% 0% / 0.1);*/
      font-family: "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif;
      --main-color: #004097;
      --sub-color: #5E8DC3;
    }

    * {
      box-sizing: border-box;
      border-style: solid;
      border-width: 0px;
    }

    p {
      margin: 0;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }



    .container {
      position: relative;
      display: flex;
      width: 100%;
      /*justify-content: center;
      gap: 1rem;*/
      max-height: calc(100vh - 76px);
      box-sizing: border-box;
    }

    .explane {
      flex: 1 1 0%;
    }

    shogi-player-wc {
      flex-basis: 94vh;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    shogi-player-wc::part(root) {
      --sp_board_color: goldenrod;
      --sp_board_piece_size: 1.0;
    }

    .sidebar-container {
      flex: 1 1 0%;
      margin: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
      
    }

    .comments-container {
      width : 100%;
      height: 100%;
      border: solid 10px var(--sub-color);
      border-radius: 20px;
      display: flex;
      background-color: #fff;
    }

    .sub-container {
      width: calc(49.5% - 3rem);
      border: solid 1px black;
      border-radius: 5px;
      padding: 1rem;
      height: 44%;
    }

    .icon-container {
      padding: 1rem;
      width: 30%;
      text-align: center;
    }

    .icon-container img {
      max-width: 100%;
      border-radius: 5px;
    }

    .pc-button label {
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      font-weight: 600;
      border-radius: 5px;
      display: block;
      text-align: center;
      margin: 8px auto 0px auto;
      max-width: 120px;
      transition: 0.5s;
    }

    .pc-button label:hover {
      color: #fff;
      background-color: var(--sub-color);

    }

    #chapter-button {
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      font-weight: 600;
      border-radius: 5px;
      display: block;
      text-align: center;
      margin: 8px auto 0px auto;
      max-width: 120px;
      transition: 0.5s;
    }

    #chapter-button:hover {
      color: #fff;
      background-color: var(--sub-color);

    }

    .chat-container {
      width: 70%;
      margin: 0 auto;
      padding: 1rem;
      overflow-y: scroll;
    }

    .chat-message {
      display: inline-block;
      max-width: 100%; /* メッセージの最大幅を調整 */
      min-width: 50%;
      min-height: 20px;
      margin: 10px 0;
      position: relative;
      padding: 1rem;
      border-radius: 10px;
    }

    .chat-message-addition {
      display: block;
      max-width: 100%; /* メッセージの最大幅を調整 */
      min-width: 50%;
      min-height: 20px;
      margin: 10px 0;
      position: relative;
      padding: 1rem;
      border-radius: 10px;
    }

    .incoming {
      background-color: rgb(149 245 255);
      color: rgb(0, 0, 0);
      text-align: left;
      font-weight: 500;
      opacity: 0.6;
    }

    .chat-top {
      font-weight: 600;
      opacity: 1;
      background-color: rgb(149 245 255);
    }

    /* 吹き出しの三角形を追加 */
    .chat-top:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
    }


    .incoming:before {
      border-left: 10px solid rgb(149 245 255);
      border-right: 10px solid transparent;
      border-bottom: 10px solid transparent;
      transform: rotate(-45deg);
      top: 28px;
      left: -6px;
    }

    .foot-button-container {
      display: none;
    }

    .close {
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 9999;
    }
    

    @media (orientation: portrait){
      .container {
        flex-direction: column;
      }
      shogi-player-wc {
        flex-basis: 90vw;
      }
    }

    @media screen and (max-width: 1200px) {
      .container {
        flex-direction: column;
      }

      .sidebar-container {
        max-height: 600px;
      }
    }

    @media screen and (max-width: 766px) {
      :host {
        padding-top: 60px;
      }

      .icon-container {
        font-size: 10px;
      }

      .sidebar-container {
        max-height: 400px;
        margin-top: 0;
        margin-bottom: 2rem;
      }

      .container {

        max-height: none;

      }
    }
  }
  `

  static properties = {
    source: { type: String },
    comments: { type: String },
    turn: { type: String },
    pass_css: { type: String },
    human_sfen: { type: String },
    chapter: { type: Number },
    turn_max: { type: Number },
    human_side: { type: String },
    sfen_chapter: { type: Array },
    comments_chapter: { type: Array },
    chapter_num: { type: Number },
    max_line_num: { type: Array },
    current_comments: { type: String },
    current_sfen: { type: String },
    branch_num: { type: String },
    file_path: { type: String }, 
    max_chapter_num: { type: Number },
    first_sfen: { type: String },
    first_comment: { type: String },
    video_url: { type: String },
    hint: { type:String },
    hints_chapter: { type: Array },
    current_hints: { type: String },
    slide_num:  { type: String }
  }

  static fromAttribute(name, value) {
    if (name === "human_side") {
      // カスタム属性名が 'my-property' の場合、値をそのまま返す
      return value;
    } else if (name === "max_chapter_num") {
      return parseInt(value, 10);
    } else if (name === "file_path") {
      return value;
    } else if (name === "first_sfen") {
      return value;
    } else if (name === "branch_num") {
      return value;
    } else if (name === "first_comment") {
      return value;
    } else if (name === "video_url") {
      return value;
    } else if (name === "slide_num") {
      return value;
    }
    return super.fromAttribute(name, value);
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("file_path") ) { //branch_numにすると２回通るのでfile_pathで行っている
      // カスタム属性の値をカンマで分割して配列に変換
      this.branch_num = this.branch_num.split(',');
      this.branch_num = this.branch_num.map(str => parseInt(str, 10));
      this.slide_num = this.slide_num.split(",");
      this.slide_num = this.slide_num.map(str => parseInt(str, 10));
    }
  }

  constructor() {
    super()
    this.source = "position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1";
    this.comments = "";
    this.hint = "";
    this.turn = null;
    //this.pass_css =0 ".place_5_5 {background-color: blue;}";
    this.human_sfen = "";
    this.current_chapter = 1;
    this.human_side = "";
    this.sfen_chapter = ["", "", "", "", "", ""];
    this.comments_chapter = ["", "", "", "", "", ""];
    this.hints_chapter = ["", "", "", "", "", ""];
    this.max_line_num = [0, 0, 0, 0, 0, 0];
    this.current_comments = "";
    this.branch_num = "";
    this.slide_num = "";
    this.current_sfen = "";
    this.current_hints = "";
    this.turn_max = 100;
    this.file_path = "";
    this.max_chapter_num = 0;
    this.viewpoint = "";
    this.video_url = "";
    this.isVideoEnded = false;
  }

 

  
  firstUpdated() {
    this.read_file_sfen();
    this.read_file_comments();
    this.read_file_hints();
    setTimeout(() => {
      this.set_max_line_num();
      for (let i = 1; i <= this.max_chapter_num; i++) {
        console.log(this.max_line_num[i]);
      }
    }, 1000 * 0.5);
    this.source = this.first_sfen;
    this.viewpoint = this.human_side;
  }

  read_file_sfen() {
    // XMLHttpRequestオブジェクトを作成
    let rec = new Array();
  
    for (let i = 1; i <= this.max_chapter_num; i++) {
      rec[i] = new XMLHttpRequest();
  
      let url = "../../kif/" + this.file_path + "/sfen-" + i + ".txt";
      // ファイルのURLを指定
      rec[i].open('GET', url, true);
  
      // レスポンスタイプを指定
      rec[i].responseType = 'text';
  
      // 読み込み完了時の処理
      rec[i].onload = () => {
        if (rec[i].status === 200) {
          //console.log(rec.responseText); //rec.responceTextがファイルの中の文字列
  
          this.sfen_chapter[i] = rec[i].responseText;
  
          if (i == 1) this.current_sfen= this.sfen_chapter[i];
        }
      };
  
      // 読み込み開始
      rec[i].send();
    }
  }

  read_file_comments() {
    // XMLHttpRequestオブジェクトを作成
    let rec = new Array();
  
    for (let i = 1; i <= this.max_chapter_num; i++) {
      rec[i] = new XMLHttpRequest();
      let url = "../../kif/" + this.file_path + "/comments-" + i + ".txt";
      // ファイルのURLを指定
      rec[i].open('GET', url, true);
  
      // レスポンスタイプを指定
      rec[i].responseType = 'text';
  
      // 読み込み完了時の処理
      rec[i].onload = () => {
        if (rec[i].status === 200) {
          //console.log(rec.responseText); //rec.responceTextがファイルの中の文字列
  
          this.comments_chapter[i] = rec[i].responseText;
  
          if (i == 1) this.current_comments = this.comments_chapter[i];
        }
      };
  
      // 読み込み開始
      rec[i].send();
    }
  }

  read_file_hints() {
    // XMLHttpRequestオブジェクトを作成
    let rec = new Array();
  
    for (let i = 1; i <= this.max_chapter_num; i++) {
      rec[i] = new XMLHttpRequest();
      let url = "../../kif/" + this.file_path + "/hints-" + i + ".txt";
      // ファイルのURLを指定
      rec[i].open('GET', url, true);
  
      // レスポンスタイプを指定
      rec[i].responseType = 'text';
  
      // 読み込み完了時の処理
      rec[i].onload = () => {
        if (rec[i].status === 200) {
          //console.log(rec.responseText); //rec.responceTextがファイルの中の文字列
  
          this.hints_chapter[i] = rec[i].responseText;
  
          if (i == 1) this.current_hints = this.hints_chapter[i];
          this.hint = line_string(this.current_hints, 1);
        }
      };
  
      // 読み込み開始
      rec[i].send();
    }
  }
  

  set_max_line_num() {
    let count = 0;
    for (let i = 1; i <= this.max_chapter_num; i++) {
      count = 0;
      for (let j = 0; j <= this.sfen_chapter[i].length; j++) {
        if (this.sfen_chapter[i][j] == "\n") {
          count++;
        }
      }
      this.max_line_num[i] = count;

    }
    this.turn_max = this.max_line_num[1];
  }


 



  render() {
    const first_comment = this.first_comment;
    const lines = first_comment.split('*');
    
    return html`
    <div class="container">

      <shogi-player-wc
        sp_mode="play"
        sp_body="${this.source}"
        sp_mobile_vertical="false"
        sp_piece_variant="portella"
        sp_viewpoint="${this.viewpoint}"
        @ev_play_mode_move="${e => this.ev_play_mode_move(e)}"
        @ev_turn_offset_change="${e => this.ev_turn_offset_change(e)}"
        sp_controller="false"
        sp_human_side="${this.human_side}"
        sp_dev_tools_position="left"
        sp_pass_css="${this.pass_css}"
        sp_coordinate="true"
        sp_debug="false"
      ></shogi-player-wc>
      <div class="sidebar-container">
        <div class="comments-container">
          <div class="icon-container">
            <img src="../../img/sugar_icon.jpg">
            <p>現在の手数：${this.turn}手目</p>
            <div>
              <input id="change-chapter" type="button" value="第２章へ" @click="${this.change_sfen_t}" style="display: none">
              <label id="chapter-button" for="change-chapter">第${this.current_chapter + 1}章へ</label>
            </div>
            <div class="pc-button">
              <input type="checkbox" id="hint-button-pc" @click="${this.add_hint}" style="display: none">
              <label id="hint-button" for="hint-button-pc">ヒント</label>
              <input type="checkbox" id="slide-open-pc" @click="${this.open_slide}" style="display: none">
              <label for="slide-open-pc">スライド</label>
              <a href="${"../../html/" + this.file_path + "-video.html"}" target="_blank"><label>動画ページ</label></a>

              
            </div>
          </div>
          <div  id="chat" class="chat-container">
            <div class="chat-message incoming chat-top">
              ${lines.map(line => html`<p>${line}</p>`)}
            </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </div>
    `
  }

  handleVideoEnded() {
    this.shadowRoot.querySelector(".video-container").style.display = "none";
  }



  ev_play_mode_move(e) {
    setTimeout(() => {
      var correct_sfen = line_string(this.current_sfen, this.turn);     //sfenの文字列からこの手番の正しい手を格納
      correct_sfen = correct_sfen.replace(/\r/g, '');
      correct_sfen = correct_sfen.replace(/\n/g, '');                   //改行コードなどを取り除く
      const next_sfen = line_string(this.current_sfen, this.turn + 1);  //AIが指す手を格納
      this.human_sfen = e.detail[0].sfen;                               //人間が指した手を格納
      
      
      
      if (this.human_sfen == correct_sfen) {
        
        if (next_sfen == undefined) {
          this.source = correct_sfen;
          this.comments = line_string(this.current_comments, this.turn + 2); //ここで次のコメントに切り替え
          this.add_comment();                                                //コメントを表示
        } else {
          this.source = next_sfen;
          this.comments = line_string(this.current_comments, this.turn + 2); //ここで次のコメントに切り替え
          this.add_comment();                                                //コメントを表示
          this.hint = line_string(this.current_hints, this.turn + 2);        //次のヒントに切り替え
          this.shadowRoot.getElementById("hint-button").style.display = "block";
        }
      } else {
        alert("不正解です");
        const el = this.renderRoot.querySelector("shogi-player-wc");
        const sp_instance = el.shadowRoot.querySelector(".ShogiPlayer").__vue__;
        if (this.turn == this.turn_max) {
          this.shadowRoot.getElementById("chapter-button").style.display = "none";
          this.human_side = "black";
        }
        sp_instance.api_turn_add(-1);                                             //不正解の時は１手戻る
      }
    }, 1000 * 0.5);
  }

  ev_turn_offset_change(e) {
    this.turn = e.detail[0]; //変数this.turnに現在の手数を格納

    if (this.turn != 0) {
      this.play_sound("../../sound/koma-sound.mp3", 0.5 ,0);
    }

    

    const elem = this.shadowRoot.getElementById("chapter-button"); //chapterを切り替えるボタンを通常見えないようにしている
    if (e.detail[0] == this.turn_max) {                            //chapterの最後の手まで行くと出現
      if (!(this.max_line_num[this.max_chapter_num] == this.turn_max)) {
        elem.style.display = "block";
        this.human_side = "none";
      }
    } else {
      //elem.style.display = "none";
    }
  }
  
  //サウンドのパス、音の大きさ(0-1)、関数を通ってから何秒後に流すのかを指定
  play_sound(path, volume, delay) {
    var audio = new Audio(path);
    audio.volume = volume;
    setTimeout(() => {
      audio.play();
    }, 1000 * delay);
  }




  add_comment() {
    const dynamicElement = document.createElement("p");
    dynamicElement.innerHTML = this.comments.replace(/\*/g, "<br>"); //*の部分で改行できるように
    dynamicElement.classList.add("chat-message-addition"); //クラスを追加
    dynamicElement.classList.add("incoming");
    dynamicElement.classList.add("chat-top");
    var oldElement = this.shadowRoot.getElementById("chat").querySelector(".chat-top"); // 古い要素を取得
    oldElement.classList.remove("chat-top"); // クラスを削除
    this.shadowRoot.getElementById("chat").insertBefore(dynamicElement, this.shadowRoot.getElementById("chat").firstChild); //id="chat"の中にこの<p>を挿入
  }

  add_hint() {
    const dynamicElement = document.createElement("p");
    dynamicElement.innerHTML = "ヒント：" + this.hint.replace(/\*/g, "<br>");
    dynamicElement.classList.add("chat-message-addition"); //クラスを追加
    dynamicElement.classList.add("incoming");
    dynamicElement.classList.add("chat-top");
    var oldElement = this.shadowRoot.getElementById("chat").querySelector(".chat-top"); // 古い要素を取得
    oldElement.classList.remove("chat-top"); // クラスを削除
    this.shadowRoot.getElementById("chat").insertBefore(dynamicElement, this.shadowRoot.getElementById("chat").firstChild); //id="chat"の中にこの<p>を挿入
    this.shadowRoot.getElementById("hint-button").style.display = "none";

  }

  change_sfen_t() {
    var elem = this.shadowRoot.querySelectorAll(".chat-message-addition");
    elem.forEach(function(element) {
      element.remove();
    });
    this.shadowRoot.getElementById("chat").querySelector(".chat-message").classList.add("chat-top");


    this.current_sfen = this.sfen_chapter[this.current_chapter + 1];
    this.human_side = this.viewpoint;
    this.shadowRoot.getElementById("chapter-button").style.display ="none";
    this.source = line_string(this.current_sfen, this.branch_num[this.current_chapter + 1]);
    this.current_comments = this.comments_chapter[this.current_chapter + 1];
    this.current_hints = this.hints_chapter[this.current_chapter + 1];
    this.hint = line_string(this.current_hints, this.branch_num[this.current_chapter + 1]);
    this.first_comment = line_string(this.current_comments, this.branch_num[this.current_chapter + 1]);
    this.turn_max = this.max_line_num[this.current_chapter + 1];
    this.current_chapter++;
    this.shadowRoot.getElementById("change-chapter").setAttribute("value", "第" + (this.current_chapter + 1) + "章へ");
    this.shadowRoot.getElementById("hint-button").style.display = "block";

    this.create_arrow();

    //次の章のスライドを表示
    this.reset_slide_switch();
    document.getElementById("switch" + (this.slide_num[this.current_chapter] + 1)).checked = true;
    this.open_slide();
  }

  create_arrow() {
    var right_arrow = document.getElementById("right-arrow");
    for (var i = (this.slide_num[this.current_chapter]); i < (this.slide_num[this.current_chapter + 1]); i++) {
      var child = document.createElement("label");
      child.setAttribute("for", "switch" + (i + 1));
      right_arrow.appendChild(child);
    }

    var left_arrow = document.getElementById("left-arrow");
    for (var i = (this.slide_num[this.current_chapter]); i < (this.slide_num[this.current_chapter + 1]); i++) {
      var child = document.createElement("label");
      child.setAttribute("for", "switch" + (i + 1));
      left_arrow.appendChild(child);
    }
  }

  reset_slide_switch() {
    var switches = document.querySelectorAll(".slide-switch");

    for (var i = 0; i < switches.length; i++) {
      switches[i].checked = false;
    }
  }

  open_slide() {
    document.getElementById("slide_close").checked = true;
  }
}
customElements.define("shogi-board", ShogiBoard);