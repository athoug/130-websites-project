$(document).ready(function() {

  // check off spasific to-do by clicking
  $("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  // click on x to remove to-do item from the list
  $("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    e.stopPropagation(); // this is a method that stops events from bubbling up
  });

  // craeting new to do on keypress
  $("input[type='text']").keypress(function(e) {
    // both which and keyCode work for the event property
    if(e.which === 13){
      var $toDoText = $(this).val();
      // clear the input
       $(this).val("");
      // create a new li and add to ul
      $("ul").append("<li> <span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + $toDoText + " </li>");
    }
  });

  // when clicking on add , add a to do item
  $(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
  });

});
