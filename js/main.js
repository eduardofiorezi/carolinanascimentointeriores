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

    /* portfolio list */
    var GammaSettings = {
        viewport : [ {
          width : 1200,
          columns : 5
        }, {
          width : 900,
          columns : 4
        }, {
          width : 500,
          columns : 3
        }, {
          width : 320,
          columns : 2
        }, {
          width : 0,
          columns : 2
        } ]
    };

    Gamma.init( GammaSettings );

  }
}

$(document).ready(function() {
  Main.init();
});
