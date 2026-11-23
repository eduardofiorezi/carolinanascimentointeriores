Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      var menu = $("#site-navigation");
      menu.toggleClass("is-open");
      $(this).attr("aria-expanded", menu.hasClass("is-open") ? "true" : "false");
    });

    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $('.bxslider').each(function() {
      var photos = $(this);
      var total = photos.children().length;
      if (total < 2) return;

      var position = $('<span class="photo-position" role="status"></span>');
      function photoLabel(index) {
        return "Foto " + (index + 1) + " de " + total;
      }

      photos.bxSlider({
        adaptiveHeight: true,
        adaptiveHeightSpeed: 0,
        speed: reducedMotion ? 0 : 350,
        useCSS: !reducedMotion,
        prevText: "Foto anterior",
        nextText: "Próxima foto",
        buildPager: photoLabel,
        onSliderLoad: function(index) {
          position.text(photoLabel(index)).prependTo(photos.closest('.bx-wrapper').find('.bx-controls'));
        },
        onSlideAfter: function(photo, previousIndex, index) {
          position.text(photoLabel(index));
        }
      });
    });

    /* home gallery */
    var homeImage = document.querySelector(".home-image");
    if (homeImage && !reducedMotion) {
      var slides = homeImage.dataset.slides.split(",").map(function(src) {
        return { src: src };
      });
      vegas("#home", { slides: slides });
    }

  }
}

$(document).ready(function() {
  Main.init();
});
