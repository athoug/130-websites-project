$( document ).ready(function(){
    $('.wrapper').on('click', function(){
        withAnimate();
    });

    console.log('I\'m in');
});


function withAnimate() {
    $(".wrapper").animate({
        left: "1000px",
    }, {
        duration: 3000,
        easing: "linear"
    });
}
