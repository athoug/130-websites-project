window.onload = function() { //The function gets called when the windoe is fully loaded

    // get the canvas and the context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // Define the image dimensions
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    // create an imagedata object
    var imagedata = context.createImageData(width, height);

    // create the image
    function createImage(offset) {
        // loop over all the pixels
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                // Get the pixel index
                var pixelindex = (y * width + x) * 4;

                // generate a xor pattern with some random noise
                var red = ((x+offset) % 256) ^ ((y+offset) % 256);
                var green = ((2*x+offset) % 256) ^ ((2*y+offset) % 256);
                var blue = 50 + Math.floor(Math.random()*100);

                // rotate the colors
                blue = (blue + offset) % 256;

                // set the pixel data
                imagedata.data[pixelindex] = red; // RED
                imagedata.data[pixelindex+1] = green; // GREEN
                imagedata.data[pixelindex+2] = blue; // BLUE
                imagedata.data[pixelindex+3] = 255; // ALPHA

            }
        }
    }

    // Main loop
    function main(tframe) {
            // request animation frame set
            window.requestAnimationFrame(main);

            // create the Image
            createImage(Math.floor(tframe/10));

            // draw the image data to the canvas
            context.putImageData(imagedata, 0, 0);
    }

    // call the maiin loop
    main(0);
};
