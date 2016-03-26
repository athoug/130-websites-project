var img = $('#left-eye'); // grab a refrence to the left eye
if(img.length > 0) {
    var offset = img.offset(); // getting the offset of the eye

    function mouse(event) {
        var center_x = 55 + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = event.pageX;
        var mouse_y = event.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y, center_y);
        var degree = (radians * (180 / Math.PI) * -1);
        img.css('-moz-transform', 'rotate(' + degree + 'deg)');
        img.css('-webkit-transform', 'rotate(' + degree + 'deg)');
        img.css('-o-transform', 'rotate(' + degree + 'deg)');
        img.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
    $('.the-face').mousemove(mouse);
}

var img2 = $('#right-eye'); // grab a refrence to the right eye
if (img2.length > 0) {
    var offset = img2.offset();

    function mouse2(evt2) {
        var center_x_2 = (offset.left + 5) + (img2.width() / 2);
        var center_y_2 = (offset.top) + (img2.height() / 2);
        var mouse_x_2 = evt2.pageX;
        var mouse_y_2 = evt2.pageY;
        var radians_2 = Math.atan2(mouse_x_2 - center_x_2, mouse_y_2 - center_y_2);
        var degree_2 = (radians_2 * (180 / Math.PI) * -1);
        img2.css('-moz-transform', 'rotate(' + degree_2 + 'deg)');
        img2.css('-webkit-transform', 'rotate(' + degree_2 + 'deg)');
        img2.css('-o-transform', 'rotate(' + degree_2 + 'deg)');
        img2.css('-ms-transform', 'rotate(' + degree_2 + 'deg)');
    }
    $(".eyes").mousemove(mouse2);
}
