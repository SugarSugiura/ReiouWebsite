let active;
let test ;

document.addEventListener("mouseover", function(event) {
  active = $(event.target).attr("class");
  console.log(active);
})





console.log(test);
console.log(active);

