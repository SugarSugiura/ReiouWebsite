// let menu_id;

// document.addEventListener("mouseover", function(event) {
//   menu_id = $(event.target).attr("id");
//   console.log(menu_id);
//   if (menu_id == "menu1" || menu_id == "menu2" || menu_id == "menu3" || menu_id == "menu4"
//       || menu_id == "menu1_sub") {
//     document.getElementById(menu_id).classList.toggle("single_text");
//   }
// })

// document.addEventListener("mouseout", function(event) {
//   menu_id = $(event.target).attr("id");
//   if (menu_id == "menu1" || menu_id == "menu2" || menu_id == "menu3" || menu_id == "menu4") {
//     document.getElementById(menu_id).classList.toggle("single_text");
//   }
// })

  
  $('ul.menu li').mouseover(function(){
    $('ul.menu li a').addClass('dark').removeClass('light');
  });

  $('ul.menu li a').mouseover(function(){
    $('ul.menu li').addClass('light');
  });
  
  $('ul.menu li').mouseout(function(){
    $('ul.menu li a').addClass('light').removeClass('dark');
  });
