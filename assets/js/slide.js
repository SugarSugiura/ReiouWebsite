//変数宣言
//letは2回目の宣言ができないvarは可能
let slide;
let style;
let slide_transform;

//slideのスタイルを読み取り専用で取得
slide = document.getElementById("slide");
style = window.getComputedStyle(slide);

//これはmatrixの値を配列として得られる関数->https://arakaze.ready.jp/archives/3654
function transform_value(e){
  var values = e.split("(")[1];
  values = values.split(")")[0];
  values = values.split(", ");
  var matrix = {
    "scale-x":values[0],
    "rotate-p":values[1],
    "rotate-m":values[2],
    "scale-y":values[3],
    "transform-x":values[4],
    "transform-y":values[5]
  };
  return matrix;
}

window.addEventListener("DOMContentLoaded", function(){
   // 0.100秒ごとに実行
  setInterval(() => {
    //スライドが表示されているときだけ処理を通す
    if (window.getComputedStyle(document.getElementById("slide_all")).display != "none") {
      slide_transform = style.getPropertyValue("transform");
      console.log(transform_value(slide_transform)["transform-x"]);
      console.log(window.outerWidth);
      //slide_contentsのtransform-xの値によって矢印ボタンのスタイルを変化させる
      if (transform_value(slide_transform)["transform-x"] == 0){
        document.getElementById("left-arrow").style.opacity = "0.5";
        document.getElementById("left-arrow").style.pointerEvents = "none";
      } else {
        document.getElementById("left-arrow").style.opacity = "1";
        document.getElementById("left-arrow").style.pointerEvents = "auto";
      }
      if (transform_value(slide_transform)["transform-x"] / window.outerWidth <= -2.0){
        document.getElementById("right-arrow").style.opacity = "0.5";
        document.getElementById("right-arrow").style.pointerEvents = "none";
      } else {
        document.getElementById("right-arrow").style.opacity = "1";
        document.getElementById("right-arrow").style.pointerEvents = "auto";
      }
    }
  }, 100);  //この値で何秒ごとに実行するかが決まる
});

function saiten(){
  var elem = document.getElementById("quiz");
  if (elem.Q1.value == "a") {
    alert("正解です");
  } else {
    alert("不正解です");
  }
}