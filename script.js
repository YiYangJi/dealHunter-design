//////////////////////////////////////////////////////////////////////////////////
// Código para que el carousel de New Deals funciones correctamente
//////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel-inner");
  var carouselWidth = carousel.scrollWidth;
  var cardWidth = document.querySelector(".carousel-item").offsetWidth;
  var scrollPosition = 0;

  document.querySelector(".carousel-control-next").addEventListener("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  });

  document.querySelector(".carousel-control-prev").addEventListener("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  });

  var multipleCardCarousel = document.querySelector("#carouselExampleControls");
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carouselBootstrap = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false,
    });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

//////////////////////////////////////////////////////////////////////////////////
// El hover para los textos que no quepan en el card de los Best Deals y Top Rated
//////////////////////////////////////////////////////////////////////////////////
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
