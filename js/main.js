Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      $(".header-entry").toggle();
    });

    /* home gallery */
    $("#home").vegas({
       slides: [
         { src: "../assets/photos/01.jpg" },
         { src: "../assets/photos/02.jpg" },
         { src: "../assets/photos/03.jpg" },
         { src: "../assets/photos/04.jpg" }
       ]
    });

  }
}

$(document).ready(function() {
  Main.init();
});
