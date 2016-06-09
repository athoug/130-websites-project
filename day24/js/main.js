// listen for when th euser clicks on burger icon
$('.hamburger').on('click', function(){
    $('.nav').fadeToggle('open');
    $('.social').toggleClass('socialClosed');
    $("#container").toggleClass('under');
});


// make side menu/section height same as browser hight
$(function(){
    $('.nav').css({height: $(window).innerHeight()});
    $('section').css({height: $(window).innerHeight()});


});


// change logo image on hover
$('.logo').mouseover(function(){
    $(this).attr('src', 'img/logo2.svg');
}).mouseout(function() {
    $(this).attr('src', 'img/logo-white.svg');
});


// change social media icons on hover
$('.twitter').mouseover(function(){
    $(this).attr('src', 'img/twitterhover.png');
}).mouseout(function() {
    $(this).attr('src', 'img/twitter.png');
});

$('.insta').mouseover(function(){
    $(this).attr('src', 'img/instahover.png');
}).mouseout(function() {
    $(this).attr('src', 'img/insta.png');
});

$('.face').mouseover(function(){
    $(this).attr('src', 'img/facehover.png');
}).mouseout(function() {
    $(this).attr('src', 'img/face.png');
});

$('.youtube').mouseover(function(){
    $(this).attr('src', 'img/youtubehover.png');
}).mouseout(function() {
    $(this).attr('src', 'img/youtube.png');
});
