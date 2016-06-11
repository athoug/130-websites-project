$(document).ready(function(){
    // canvas elements
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    var cw = 10 //cell width
    var d;
    var food;
    var score;

    // create the snake
    var snake_array; // an array of cells to make up the snake

    function init() { // initializing function
        d = 'right'; // default direction
        createSnake(); // calling the create snake function
        create_food(); //creating the snake food
        // display the score
        score = 0;
        // moving the snake using a timer witch will trigger the paint function every 60ms
        if (typeof game_loop != 'undefined') clearInterval(game_loop);
        game_loop = setInterval(paint, 60);
    }

    init();

    function createSnake(){
        var length = 5; // length of the snake
        snake_array = []; // empty array to start with

        for (var i = length-1; i >= 0;  i--) {
            // This will create a horizontal snake starting from the top left
            snake_array.push({x: i, y: 0});
        }
    }

    // create the food
    function create_food(){
        food = {
            x: Math.round(Math.random()*(width-cw)/cw),
            y: Math.round(Math.random()*(height-cw)/cw)
        };
        // this will create a cell with x/y between 0-58
        // because there are 59(590/10) positions accross the rows and columns
    }

    // painting the snake function
    function paint(){
        // to avoid the snake trail we need to paint the BG on every frame
        // styling the canvas
        ctx.fillStyle = '#5f9ea0';
        ctx.fillRect(0,0,width, height);

        // The movment code for the snake comes here
        // the logic is simple
        // pop out the tail cell ans place it infront of the head cell
        var nx = snake_array[0].x;
        var ny = snake_array[0].y;
        // these are the positions of the head cell
        // we will increment it to get the new head positions
        // adding proper direction based on movment
        if(d == 'right') nx++;
        else if (d == 'left') nx--;
        else if (d == 'up') ny--;
        else if (d == 'down') ny++;

        // adding the gameover states
        // this will reset the game if the snake hits the wall
        // also adding the body collision check
        if(nx == -1 || nx == width/cw || ny == -1 || ny == height/cw || check_collision(nx, ny, snake_array)) {
            // reset the game
            init();
            return;
        }

        // the code to make the snake eat the food
        // the logic is simple
        // if the new head position matches with that of the food
        // create a new head instead of moving the tail
        if(nx == food.x && ny == food.y){
            var tail = {x: nx, y: ny};
            score++;
            // create new food
            create_food();
        } else {
            var tail = snake_array.pop(); //pops out the last cell
            tail.x = nx; tail.y = ny;
        }
        // the snake now can eat food

        snake_array.unshift(tail); // puts back the tail as the first cell


        // drawing the snake using the canvas context
        for (var i = 0; i < snake_array.length; i++) {
            var c = snake_array[i];
            // painting 10px wide cells
            paint_cells(c.x, c.y);
        }

        // lets paint food
        paint_cells(food.x, food.y);
        document.getElementById('score').textContent = score;
    }

    // generic function to paint the cells
    function paint_cells(x,y){
        ctx.fillStyle = '#a0d6b4';
        ctx.fillRect(x*cw, y*cw, cw, cw);
        ctx.strokeStyle = '#317873';
        ctx.strokeRect(x*cw, y*cw, cw, cw);
    }

    // function for body colittion
    function check_collision(x, y, array){
        // this function will check if the provided x/y coordinates exist
        // in an array of cells or not
        for (var i = 0; i < array.length; i++) {
            if(array[i].x == x && array[i].y == y){
                return true;
            }
        }
        return false;
    }

    // adding the keyboard controls
    $(document).keydown(function(e){
        var key = e.which;
        // adding aother clause to prevent revears gear
        if(key == '37' && d != 'right') d = 'left';
        else if(key == '38' && d != 'down') d = 'up';
        else if(key == '39' && d != 'left') d = 'right';
        else if(key == '40' && d != 'up') d = 'down';
        //The snake is now keyboard controllable
    });


})
