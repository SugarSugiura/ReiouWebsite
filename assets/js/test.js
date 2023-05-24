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

function audio(audio) {
  document.getElementById(audio).currentTime = 0; //連続クリックに対応
  document.getElementById(audio).play(); //クリックしたら音を再生
}

// explosion construction
function explode(x, y) {
  var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), // randomize the color rgb
        // particle element creation (could be anything other than div)
      elm = $('<div class="particle" style="' +
        'background-color: rgb(' + color + ') ;' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px"></div>');

    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}