Main = {
  init: function(){

    /* mobile nav */
    $("#menu-trigger").click(function() {
      $("#main-header nav ul").toggle();
      $(".header-form").hide();
    });

  }
}

$(document).ready(function() {
  Main.init();
});
