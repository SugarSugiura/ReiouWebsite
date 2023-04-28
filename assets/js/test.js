let elem = document.getElementById("shogi");


//引数に手番、位置(２六など)、駒の種類、移動する前の位置(25など)を渡してそのposに駒を移動させる関数
//注意：oldPosは整数型で渡せるが、それ以外の引数はstring型で渡す。
//　　　また、tebannは半角、posとkomaに関しては全角で渡す。
//　　　例：SetKoma('1', '２八', '歩', 27)
//　　　この関数はsource属性を入れ替えるものなので既存の棋譜は消えてしまう->改良すべき
function SetKoma(tebann, pos, koma, oldPos) {
  elem.setAttribute("source", tebann + " " + pos + koma + "(" + oldPos + ")");
  elem.setAttribute("turn", tebann);
}