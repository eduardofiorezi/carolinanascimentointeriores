Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      var menu = $("#site-navigation");
      menu.toggleClass("is-open");
      $(this).attr("aria-expanded", menu.hasClass("is-open") ? "true" : "false");
    });

    /* project gallery */
    $('.bxslider').bxSlider();

    /* home gallery */
    var homeImage = document.querySelector(".home-image");
    if (homeImage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var slides = homeImage.dataset.slides.split(",").map(function(src) {
        return { src: src };
      });
      $("#home").vegas({ slides: slides });
    }

  }
}

$(document).ready(function() {
  Main.init();
});
