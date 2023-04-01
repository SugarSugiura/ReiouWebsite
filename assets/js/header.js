let menu_id;

document.addEventListener("mouseover", function(event) {
  menu_id = $(event.target).attr("id");
  console.log(menu_id);
  if (menu_id == "menu1" || menu_id == "menu2" || menu_id == "menu3" || menu_id == "menu4"
      || menu_id == "menu1_sub") {
    document.getElementById(menu_id).classList.toggle("single_text");
  }
})

document.addEventListener("mouseout", function(event) {
  menu_id = $(event.target).attr("id");
  if (menu_id == "menu1" || menu_id == "menu2" || menu_id == "menu3" || menu_id == "menu4") {
    document.getElementById(menu_id).classList.toggle("single_text");
  }
})