function main() {

  // when clicking the run buton
  $("#run").on("click", function(){
    // change background color
    $(".run").addClass("changeBackground");

    // check background
    $(".run").contents().find('body').html("<style> "+$("#css").val() +"</style>" + $("#html").val());

    document.querySelector('.run').contentWindow.eval($("#js").val());
  });


}

$(document).ready(main);
