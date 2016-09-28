Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      $(".header-entry").toggle();
    });

    /* project gallery */
    $('.bxslider').bxSlider();

    /* home gallery */
    $("#home").vegas({
       slides: [
         { src: "../assets/projects/cef/01.jpg" },
         { src: "../assets/projects/cef/02.jpg" },
         { src: "../assets/projects/cef/03.jpg" },
         { src: "../assets/projects/cef/04.jpg" }
       ]
    });

  }
}

$(document).ready(function() {
  Main.init();
});
