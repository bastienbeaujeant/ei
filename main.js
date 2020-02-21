//script pour le menu
let burgerMenu = document.querySelector(".burger-menu");
let span = document.querySelectorAll(".burger-menu span");
let menu = document.querySelector(".header-menu");
let searchInput = document.querySelector(".search-input");
let searchIcon = document.querySelector(".search-btn");

let body = document.querySelector("body");
//Script pour les activités
let slider = document.querySelectorAll(".activity-spot");
let localization = document.querySelectorAll(".infos-location");
let monumentStyle = document.querySelectorAll(".infos-subtitle");
let favbutton = document.querySelectorAll(".like-btn");
//Script pour le formulaire
let minLabel = document.querySelectorAll(".label-contact");
let contactInput = document.querySelectorAll(".input-contact");
//Script pour l'Ajax/Axios
let url = "https://cepegra.yo.fr/kazan_api/";
let liste = document.querySelector(".activity-list");
let spot;
//Affiche l'Ajax
let Affiche = function() {
  spot.forEach(element => {
    console.log(element);
    console.log(element.situation);
    let situationClass =
      element.situation == "Center of the city" ? "center" : "out";
    liste.innerHTML += `
        
        <li class="activity-spot min">
        <figure class="activity-infos">
          <a href="#">
            <h2 class="infos-title">${element.title} ${element.title2}</span></h2>
            <h3 class="infos-location ">${element.situation}</h3>
            <img src="${element.img}" alt="${element.text_img}"
              class="image-spot" />
            <h3 class="infos-subtitle ${situationClass}">${element.ss_titre}</h3>
            <p class="info-text">
              ${element.texte}
            </p>
          </a>
          <div class="spot-btn">
            <button class="like-btn ${situationClass}"><i class="far fa-heart"></i></button>
            <button class="see-more">Read more</button>
          </div>
        </figure>
      </li>
       
        `;
  });
};
//Lance les animations après chargement de l'ajax
const Anime = function() {
  let slider = document.querySelectorAll(".activity-spot");
  let localization = document.querySelectorAll(".infos-location");
  let monumentStyle = document.querySelectorAll(".infos-subtitle");
  let favbutton = document.querySelectorAll(".like-btn");
  slider.forEach(element => {
    element.addEventListener("click", function() {
      event.preventDefault();
      element.classList.remove("toggle");
    });
  });
  //Ajoute la classe pour l'activité en hover et devrait l'animer en desktop
  slider.forEach(element => {
    element.addEventListener("mouseover", function() {
      event.preventDefault();
      element.classList.remove("min");
    });
  });
  //Retire la classe pour l'activité en hover et devrait l'animer en desktop
  slider.forEach(element => {
    element.addEventListener("mouseout", function() {
      event.preventDefault();
      element.classList.add("min");
    });
  });
  //Changement de classe pour le bouton favoris <3
favbutton.forEach(element => {
  element.addEventListener("click", function() {
    if (this.childNodes[0].classList == "far fa-heart") {
      this.childNodes[0].classList.add("fas") + "fa-heart";
    } else {
      this.childNodes[0].classList.remove("fas") + " fa-heart";
    }
  });
});
};
//Appelle l'Ajax
const Main = function() {
  axios
    .get(url)
    .then(response => {
      spot = response.data.feed;
      console.log(spot);
    })
    .then(Affiche)
    .then(Anime)
    .catch(function() {
      alert("erreur");
    });
};
window.addEventListener("load", Main);

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
//noscroll du menu sur le reste de la page
burgerMenu.addEventListener("click", function() {
  event.preventDefault();
  if (body.classList.contains("noscroll")) {
    body.classList.remove("noscroll");
  } else {
    body.classList.add("noscroll");
  }
});
//Change la classe pour l'activité et devrait l'animer en mobile
slider.forEach(element => {
  element.addEventListener("click", function() {
    event.preventDefault();
    element.classList.remove("toggle");
  });
});
//Ajoute la classe pour l'activité en hover et devrait l'animer en desktop
slider.forEach(element => {
  element.addEventListener("mouseover", function() {
    event.preventDefault();
    element.classList.remove("min");
  });
});
//Retire la classe pour l'activité en hover et devrait l'animer en desktop
slider.forEach(element => {
  element.addEventListener("mouseout", function() {
    event.preventDefault();
    element.classList.add("min");
  });
});
//Rajoute la classe de localisation pour la couleur de chaques activités au like
favbutton.forEach(element => {
  if (element.classList.contains("center")) {
  } else {
    element.childNodes[0].classList.add("out");
  }
});
//Rajoute la classe de localisation pour la couleur de chaques activités
localization.forEach(element => {
  if (element.classList.contains("center")) {
    element.classList.add("center");
  } else {
    element.classList.add("out");
  }
});
//Rajoute la classe de localisation pour la couleur de chaques activités
monumentStyle.forEach(element => {
  if (element.classList.contains("center")) {
    element.classList.add("center");
  } else {
    element.classList.add("out");
  }
});
//Garde la barre bleue lorqu'on tape dans cet input
contactInput.forEach(element => {
  element.addEventListener("keyup", function() {
    if (element.value == "") {
      element.classList.remove("input-writted");
    } else {
      element.classList.add("input-writted");
    }
  });
  //Hover sur les activités du desktop
  element.addEventListener("mouseenter", function() {
    let id = element.dataset.id;
    console.log(id);
    minLabel[id].classList.toggle("label-min");
  });
  element.addEventListener("mouseout", function() {
    let id = element.dataset.id;
    console.log(id);
    minLabel[id].classList.toggle("label-min");
  });
});

