Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      $(".header-entry").toggle();
    });

  }
}

$(document).ready(function() {
  Main.init();
});
