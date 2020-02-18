let burgerMenu = document.querySelector(".burger-menu");
let span = document.querySelectorAll(".burger-menu span");
let menu = document.querySelector(".header-menu");
let searchInput = document.querySelector(".search-input");
let searchIcon = document.querySelector(".search-btn");
let body = document.querySelector("body");
let slider = document.querySelectorAll(".activity-spot");

burgerMenu.addEventListener("click", function() {
  burgerMenu.classList.toggle("fixed");
  menu.classList.toggle("none");
  span.forEach(element => {
    element.classList.toggle("open");
  });
});
searchIcon.addEventListener("click", function() {
  event.preventDefault();
  searchInput.classList.toggle("invisible");
});

burgerMenu.addEventListener("click", function() {
  event.preventDefault();
  if (body.classList.contains("noscroll")) {
    body.classList.remove("noscroll");
  } else {
    body.classList.add("noscroll");
  }
});

slider.forEach(element => {
  element.addEventListener("click", function() {
    event.preventDefault();
    element.classList.toggle("min");
  });
});
