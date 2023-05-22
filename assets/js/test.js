//引数に手番、位置(２六など)、駒の種類、移動する前の位置(25など)を渡してそのposに駒を移動させる関数
//注意：oldPosは整数型で渡せるが、それ以外の引数はstring型で渡す。
//　　　また、tebannは半角、posとkomaに関しては全角で渡す。
//　　　例：SetKoma('1', '２八', '歩', 27)
//　　　この関数はsource属性を上書きするものなので既存の棋譜は消えてしまう->改良すべき


function SetKoma(tebann, pos, koma, oldPos) {
  var elem = document.getElementById("shogi");  //idからHTMLElementを取得

  elem.setAttribute("source", "\n" + tebann + " " + pos + koma + "(" + oldPos + ")");  //source属性を上書き
  elem.setAttribute("turn", tebann);  //その手番に移動
}

function SetSfen(sfen) {
  var elem = document.getElementById("shogi");  //idからHTMLElementを取得
  elem.setAttribute("source", sfen);  //source属性を上書き
}

function EmphasizeSquare(rows, cols) {
  var elem = document.getElementById("shogi");  //idからHTMLElementを取得

  elem.setAttribute("pass_css", ".place_" + rows + "_" + cols + " { background-color: LightPink; }");

}

