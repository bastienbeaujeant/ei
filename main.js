let burgerMenu = document.querySelector(".burger-menu");
let span = document.querySelectorAll(".burger-menu span");
let menu = document.querySelector(".header-menu");
let searchInput = document.querySelector(".search-input");
let searchIcon = document.querySelector(".search-btn");
let body = document.querySelector("body");
let slider = document.querySelectorAll(".activity-spot");
let localization = document.querySelectorAll(".infos-location");
let monumentStyle = document.querySelectorAll(".infos-subtitle");
//ouverture du menu
burgerMenu.addEventListener("click", function() {
  burgerMenu.classList.toggle("fixed");
  menu.classList.toggle("none");
  span.forEach(element => {
    element.classList.toggle("open");
  });
});
//ouverture de la barre de recherche
searchIcon.addEventListener("click", function() {
  event.preventDefault();
  searchInput.classList.toggle("invisible");
  searchInput.classList.toggle("search-input-white");
  menu.classList.toggle("pink-menu");

});
//noscroll du menu suyr le reste de la page
burgerMenu.addEventListener("click", function() {
  event.preventDefault();
  if (body.classList.contains("noscroll")) {
    body.classList.remove("noscroll");
  } else {
    body.classList.add("noscroll");
  }
});
//
slider.forEach(element => {
  element.addEventListener("click", function() {
    event.preventDefault();
    element.classList.remove("toggle");
  });
});
slider.forEach(element => {
  element.addEventListener("mouseover", function() {
    event.preventDefault();
    element.classList.remove("min");
  });
});
slider.forEach(element => {
  element.addEventListener("mouseout", function() {
    event.preventDefault();
    element.classList.add("min");
  });
});


localization.forEach(element => {
  if(element.classList.contains("center")){
  element.classList.add("center")
  }
  else{
    element.classList.add("out")
  }
});

monumentStyle.forEach(element => {
  if(element.classList.contains("center")){
  element.classList.add("center")
  }
  else{
    element.classList.add("out")
  }
});

