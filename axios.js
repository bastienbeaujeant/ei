let url = "https://cepegra.yo.fr/kazan_api/"
let liste = document.querySelector(".activity-list")
let spot

let Affiche = function (){

    spot.forEach(element => {
        console.log(element)
        console.log(element.situation)
        let situationClass = (element.situation == "Center of the city") ? 'center' : 'out' 
        liste.innerHTML  +=  `
        
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
       
        `
    });
  
}

const Anime = function() {
    let slider = document.querySelectorAll(".activity-spot");
    let localization = document.querySelectorAll(".infos-location");
    let monumentStyle = document.querySelectorAll(".infos-subtitle");
    let favbutton = document.querySelectorAll(".like-btn")
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
  
}

const Main = function(){
    axios.get(url)
    .then(response => {
        spot = response.data.feed
        console.log(spot)
    })
    .then(Affiche)
    .then(Anime)
   .catch(function(){
        alert("erreur")
    })
}
window.addEventListener("load", Main)