'use strict';

/* 初期設定 */
const imgs = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'];  // 画像の配列
let currentImg = 0;  // スライドショーに表示している画像番号
pageNow();  // 現在のページ数を表示する

/* スライドショーメソッド */
function slideShow(num){
  if(currentImg + num >= 0 && currentImg + num < imgs.length){
    currentImg += num;
    document.getElementById('slide_img').src = imgs[currentImg];
  }else if(currentImg + num === -1){ // 先頭の画像表示時にprevボタンを押したとき
    currentImg = imgs.length - 1;
    document.getElementById('slide_img').src = imgs[currentImg];
  }else if(currentImg + num === imgs.length){ // 末尾の画像表示時にnextボタンを押したとき
    currentImg = 0;
    document.getElementById('slide_img').src = imgs[currentImg];
  }
  pageNow();
}

/* 現在のページ数表示メソッド */
function pageNow(){
  document.getElementById('page').textContent = `${currentImg + 1} / ${imgs.length}`;
}

/* prevボタンクリックイベント */
document.getElementById('prev').onclick = function(){
  slideShow(-1);
}

/* nextボタンクリックイベント */
document.getElementById('next').onclick = function(){
  slideShow(1);
}