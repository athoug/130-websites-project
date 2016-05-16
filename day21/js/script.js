window.onload = function() {

    // setting up the canvas and context
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    // initalizing the width and height of our drawing app
    var height = window.innerHeight;
    var width = window.innerWidth;
    // setting up the canvas dimensions
    canvas.height = height/2+100;
    canvas.width = width/2+100;

    // state variables for mouse movments
    var isMouseDown = false;
    var mouseX = 0;
    var mouseY = 0;

    context.strokeStyle = '#000'; // draeing black lines
    context.lineWidth = 1; //set brush size
    // make sure canvas background is white for saving
    context.fillStyle = '#fff';
    context.fillRect(0,0,canvas.width,canvas.height);

    // Event listner to when the mouse is pressed down
    canvas.addEventListener("mousedown", function(event){
        isMouseDown = true;

        mouseX = event.offsetX;
        mouseY = event.offsetY;

        context.beginPath();
        context.moveTo(mouseX, mouseY);
        console.log('X: ' + mouseX + ' ,  Y: ' + mouseY);
    });

    // when the user lifts their mouse up anywhere on the screen
    window.addEventListener('mouseup', function(event){
        isMouseDown = false;
    });

    // when moving the mouse around update the x, and y
    canvas.addEventListener('mousemove', function(event){
        if(isMouseDown){
            mouseX = event.offsetX;
            mouseY = event.offsetY;

            context.lineTo(mouseX, mouseY);
            context.stroke();

            console.log('X: ' + mouseX + ' ,  Y: ' + mouseY);

        }
    });

    // swatch interactivity
    var palette = document.getElementById('palette');
    var swatches = palette.children; // grabing the ULs children (the li tags)
    var currentSwatch; // keeping track of what swatch is active

    for(var i=0; i<swatches.length; i++){
        var swatch = swatches[i];
        if(i == 0){
            currentSwatch = swatch;
        }

        swatch.addEventListener('click', function(event){
            this.className = 'active'; // give the swatch a class of active
            currentSwatch.className = ''; // remove the 'active' class from previous selected swatch
            currentSwatch = this; // set the current swatch sp next time we'll take active off of this one

            context.strokeStyle = this.style.backgroundColor; // set the background color for the canvas
        });
    }

    // clearing the canvas when clear button is clicked
    var clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', function(event){
        canvas.width = canvas.width; // all is needed to clear

        // make sure the canvas background is actually white
        context.fillStyle = '#fff';
        context.fillRect(0,0, canvas.width, canvas.height);
    });


    // when the save buttonn is clicked
    var saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', function(event){
        // we'll sace using the new html5 download attribute to save the image
        // we will give the image a name of draw-[timestamp].jpg

        var now = new Date().getTime(); // get todays date in milliseconds
        var dataUri = canvas.toDataURL('image/jpeg'); // get the canvas data as jpg

        // change the href and download attributes so it will save
        this.setAttribute('download', 'drawing-'+now+'.jpg');
        this.setAttribute('href', dataUri);
    });

    // erase lines when buton clicked
    var eraserBtn = document.getElementById('eraser');
    eraserBtn.addEventListener('click', function(event){
        context.strokeStyle = '#fff';
    });

    // using a color swatch to select colors
    // var colorPicker = document.getElementById('color-picker');
    // console.log(colorPicker);
    // colorPicker.addEventListener('click', function(event){
    //     console.log(colorPicker);
    //     var color = document.getElementById('color-picker').value;
    //     console.log(color);
    //     context.strokeStyle = color;
    // });

    function setSize() {
        var x = document.getElementById("myRange").value;
        context.lineWidth = x;
    }

}

function setColor(element) {
    var colorPicker = document.getElementById('color-picker').value;
    document.getElementById('set-color').style.backgroundColor = colorPicker;
}

function closewindow(id) {
    document.getElementById(id).style.display = "none";
}

function openwindow(id) {
    document.getElementById(id).style.display = "block";
}
