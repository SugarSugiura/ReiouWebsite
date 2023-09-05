let sfen;
let comments;






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

import { LitElement, css, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
export class ShogiBoard extends LitElement {
  static styles = css`
  :host {
    padding-top: 76px;
    display: flex;
    min-height: 100vh;
    /*border: 1px solid hsl(0 0% 0% / 0.1);*/
  }
  .container {
    position: relative;
    display: flex;
    width: 100%;
    /*justify-content: center;
    gap: 1rem;*/
  }

  .explane {
    flex: 1 1 0%;
  }

  shogi-player-wc {
    flex-basis: 98vh;
    margin-top: 1rem;
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
    border: solid 1px black;
    padding: 0 1rem;
    border-radius: 5px;
  }

  .sub-container {
    width: calc(49.5% - 3rem);
    border: solid 1px black;
    border-radius: 5px;
    padding: 0 1rem;
  }

  @media (orientation: portrait){
    .container {
      flex-direction: column;
    }
    shogi-player-wc {
      flex-basis: 90vw;
    }
  }

  @media screen and (max-width: 1400px) {
    .container {
      flex-direction: column;
    }
  }
  `

  static properties = {
    source: { type: String },
    comment_lines: { type: Array },
    comments: { type: String },
    turn: { type: String },
    pass_css: { type: String },
    human_sfen: { type: String },
    ai_sfen: { type: String },
    first_sfen: { type: String },
    chapter: { type: Number },
    turn_max: { type: Number },
    human_side: { type: String },
    sfen_chapter: { type: Array },
    comments_chapter: { type: Array },
    chapter_num : { type: Number },
    max_line_num : { type: Array },
  }

  constructor() {
    super()
    this.source = "position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1";
    this.comment_lines = null;
    this.comments = "";
    this.turn = null;
    //this.pass_css =0 ".place_5_5 {background-color: blue;}";
    this.human_sfen = "";
    this.ai_sfen = "";
    this.first_sfen = "position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1";
    this.chapter = 1;
    this.turn_max = 37;
    this.human_side = "black";
    this.sfen_chapter = ["", "", "", "", "", ""];
    this.comments_chapter = ["", "", "", "", "", ""];
    this.chapter_num = 4;
    this.max_line_num = [0, 0, 0, 0, 0, 0];
  }

  
  firstUpdated() {
    this.read_file_sfen();
    this.read_file_comments();
    setTimeout(() => {
      this.set_max_line_num();
      for (let i = 1; i <= this.chapter_num; i++) {
        console.log(this.max_line_num[i]);
      }
    }, 1000 * 0.5)
    
    
    
  }

  read_file_sfen() {
    // XMLHttpRequestオブジェクトを作成
    let rec = new Array();
  
    for (let i = 1; i <= this.chapter_num; i++) {
      rec[i] = new XMLHttpRequest();
  
      let url = "../../kif/kakugawari/koshikakegin/sfen-" + i + ".txt";
      // ファイルのURLを指定
      rec[i].open('GET', url, true);
  
      // レスポンスタイプを指定
      rec[i].responseType = 'text';
  
      // 読み込み完了時の処理
      rec[i].onload = () => {
        if (rec[i].status === 200) {
          //console.log(rec.responseText); //rec.responceTextがファイルの中の文字列
  
          this.sfen_chapter[i] = rec[i].responseText;
  
          if (i == 1) sfen = this.sfen_chapter[i];
        }
      };
  
      // 読み込み開始
      rec[i].send();
    }
  }

  read_file_comments() {
    // XMLHttpRequestオブジェクトを作成
    let rec = new Array();
  
    for (let i = 1; i <= this.chapter_num; i++) {
      rec[i] = new XMLHttpRequest();
      let url = "../../kif/kakugawari/koshikakegin/comments-" + i + ".txt";
      // ファイルのURLを指定
      rec[i].open('GET', url, true);
  
      // レスポンスタイプを指定
      rec[i].responseType = 'text';
  
      // 読み込み完了時の処理
      rec[i].onload = () => {
        if (rec[i].status === 200) {
          //console.log(rec.responseText); //rec.responceTextがファイルの中の文字列
  
          this.comments_chapter[i] = rec[i].responseText;
  
          if (i == 1) comments = this.comments_chapter[i];
        }
      };
  
      // 読み込み開始
      rec[i].send();
    }
  }
  

  set_max_line_num() {
    let count = 0;
    for (let i = 1; i <= this.chapter_num; i++) {
      count = 0;
      for (let j = 0; j <= this.sfen_chapter[i].length; j++) {
        if (this.sfen_chapter[i][j] == "\n") {
          count++;
        }
      }
      this.max_line_num[i] = count;
    }
  }



  render() {
    return html`
    <div class="container">

      <shogi-player-wc
        sp_mode="play"
        sp_body="${this.source}"
        sp_mobile_vertical="false"
        sp_piece_variant="portella"
        sp_viewpoint="black"
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
          <p>${this.comments}</p>
          <input id="change-chapter" type="button" value="第２章へ" @click="${this.change_sfen}">
        </div>
        <div class="sub-container">
          <p>現在の手数：${this.turn}手目</p>
          <p>ヒント</p>
        </div>
        
        
        <div class="sub-container">
          <input type="checkbox" id="slide-open" @click="${this.open_slide}" style="display: none">
          <label for="slide-open"><p>スライドをもう一度見る</p></label>
        </div>
      </div>
    </div>
    `
  }



  ev_play_mode_move(e) {
    setTimeout(() => {
      var correct_sfen = line_string(sfen, this.turn);
      correct_sfen = correct_sfen.replace(/\r/g, '');
      correct_sfen = correct_sfen.replace(/\n/g, '');
      const next_sfen = line_string(sfen, this.turn + 1);
      this.human_sfen = e.detail[0].sfen;
      console.log(correct_sfen);
      console.log(e.detail[0].sfen);
      if (this.human_sfen == correct_sfen) {
        if (next_sfen == undefined) {
          this.source = correct_sfen;
        } else {
          this.source = next_sfen;
        }
      } else {
        alert("不正解です");
        const el = this.renderRoot.querySelector("shogi-player-wc");
        const sp_instance = el.shadowRoot.querySelector(".ShogiPlayer").__vue__;
        sp_instance.api_turn_add(-1);
      }
    }, 1000 * 0.5)
  }

  ev_turn_offset_change(e) {

    this.turn = e.detail[0];

    if (this.turn == 0) {
      this.comments = "第１章 基本図まで △４五角戦法は奇襲戦法の戦法のひとつ。 派手な応酬が多く、正確に受けきれなければ一瞬で優勢まで築くこともできます。まずは横歩取りの進行でいきましょう。飛車先を突いていってください。";
    } else {
      this.comments = line_string(comments, this.turn + 1);
    }

    const elem = this.shadowRoot.getElementById("change-chapter");
    if (e.detail[0] == this.turn_max) {
      elem.style.display = "inline-block";
      this.human_side = "none";
    } else {
      elem.style.display = "none";
      this.human_side = "black";
    }
  }


  turn_change() {
    const el = this.renderRoot.querySelector("shogi-player-wc");
    const sp_instance = el.shadowRoot.querySelector(".ShogiPlayer").__vue__;
    sp_instance.api_turn_add(-1);
  }



  change_comments() {
    this.comments = line_string(comments, this.turn + 1);
  }

  //章の切り替えを行う関数
  change_sfen() {
    switch (this.chapter) {
      case 1:
        sfen = this.sfen_chapter[2];
        comments = this.comments_chapter[2];
        this.source = line_string(sfen, this.max_line_num[this.chapter] + 1);
        this.chapter = 2;
        this.shadowRoot.getElementById("change-chapter").setAttribute("value", "第３章へ");
        this.turn_max = this.max_line_num[2];
        break;
      case 2:
        sfen = this.sfen_chapter[3];
        comments = this.comments_chapter[3];
        this.source = line_string(sfen, this.max_line_num[this.chapter] + 1);
        this.chapter = 3;
        this.shadowRoot.getElementById("change-chapter").setAttribute("value", "第４章へ");
        this.turn_max = this.max_line_num[3]
        break;
      case 3:
        sfen = this.sfen_chapter[4];
        comments = this.comments_chapter[4];
        this.source = line_string(sfen, this.max_line_num[this.chapter] + 1);
        this.chapter = 4;
        this.shadowRoot.getElementById("change-chapter").setAttribute("value", "第１章へ");
        this.turn_max = this.max_line_num[4];
        break;
      default:
        sfen = this.sfen_chapter[1];
        comments = this.comments_chapter[1];
        this.source = "position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL";
        this.chapter = 1;
        this.shadowRoot.getElementById("change-chapter").setAttribute("value", "第２章へ");
        this.turn_max = this.max_line_num[1];
        break;
    }
  }

  open_slide() {
    document.getElementById("slide_close").checked = true;

  }

  // ☗76歩には☖34歩とし☗22角成に同銀とするだけのAI
  ai_best_move(e) {
    console.log(this.turn);
    if (e === line_string(sfen, this.turn)) {
      return line_string(sfen, this.turn + 1);
    }
  }
}
customElements.define("shogi-board", ShogiBoard);