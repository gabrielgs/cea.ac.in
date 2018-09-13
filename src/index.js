import "bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "./sass/main.scss";

$(document).ready(function() {
  $(".student_carousel").owlCarousel();
  $(".news_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
});