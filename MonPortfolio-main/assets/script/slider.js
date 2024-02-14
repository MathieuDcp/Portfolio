let slideIndex = 1;
// Fonction pour changer de slide avec fléches et dots
function ChangerSlides(nbr) {
  const slides = document.getElementsByClassName("slides");
  slideIndex += nbr;
  AfficherSlides(slideIndex);
}

// Fonction pour la slide actuelle
function currentSlide(nbr) {
  slideIndex = nbr;
  AfficherSlides(slideIndex);
}

// Fonction permettant d'afficher les slides avec fléches et doits
function AfficherSlides(nbr) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

// Vérifie si nbr est supérieur à la slide actuelle
  if (nbr > slides.length) {
    slideIndex = 1;
  }

  // Vérifie si nbr est inférieur à la slide actuelle
  if (nbr < 1) {
    slideIndex = slides.length;
  }

  // Cacher toutes les slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Retirer "active" de tous les points
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  // Afficher la slide demandée
  slides[slideIndex - 1].style.display = "block";

  // Ajouter "active" sur le point cliqué
  dots[slideIndex - 1].classList.add("active");
}

AfficherSlides(slideIndex);
