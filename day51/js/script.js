$(document).ready(function() {

  // check off spasific to-do by clicking
  $("li").click(function () {
    $(this).toggleClass("completed");
  });

});
