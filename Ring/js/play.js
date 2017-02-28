// global variables
var center;
var player;
var redLoseBall;

var ropeLength;
var blueScaleValue = 1;
var ringScaleVlaue = 1;
var count = 1;

// text variables
var text;
var style = { font: "12px Helvetica-light", fill: "#fff", align: "center" };
var lostStyle = { font: "12px Helvetica-light", fill: "#D0011B", align: "center" };
var winStyle = { font: "12px Helvetica-light", fill: "#4990E2", align: "center" };
var t;
var loseT;
var winT;

// detector varables
var contacted = false;
var ringCollied = false;
var blueActivate = false;
var blueDead = false;
var calledColorReset = false;
var ringDead = false;
var gameWin = false;
var gameLose = false;
var ifTextGone = false;

// timer varables
var contactTimerFinished = true;
var playerSpriteTimerFinished = true;

// mouse movment functions
function mouseDragStart() {
	game.physics.box2d.mouseDragStart(game.input.mousePointer);
}

function mouseDragMove() {
	game.physics.box2d.mouseDragMove(game.input.mousePointer);
}

function mouseDragEnd() {
	game.physics.box2d.mouseDragEnd();
}

function winState(){
	// create full ring
	if(ring.full && count == 1){
		// set text 
		text = "you did it :)";
    	winT = game.add.text(ring.body.x, ring.body.y, text, winStyle);
    	game.physics.box2d.enable(winT);
    	winT.alpha = 1;

    	// sound 
    	winFx.play();
    	winFx.volume = 0.1;

    	// halting variables
    	gameWin = true;
		count++;

		// full colored circle 
		ring.alpha = 0;
		full_ring = game.add.sprite(ring.body.x, ring.body.y, 'win_ring');
		full_ring.anchor.set(0.5);
		full_ring.scale.setTo(0);
		game.add.tween(full_ring.scale).to( { x: ringScaleVlaue, y: ringScaleVlaue }, 2000, "Sine.easeInOut",true);
		//game.time.events.add(Phaser.Timer.SECOND * 4, levelTwo, this);
	}
}

function levelTwo(){
	game.state.start('levelTwo');
}

function changePlayerColor() {
	player.color = "blue";
	player.alpha = 0;
	calledColorReset = true;

	if (!blueActivate){
		// create blue sprite
		blue_player = game.add.sprite(player.body.x, player.body.y, 'player_blue');
		blue_player.anchor.set(0.5);
	}

	blueActivate = true;
	
}

// Collision functions that are triggered on contact
function colorChange(body1, body2, fixture1, fixture2, begin){
	if(!begin){
		contacted = true;
		
	}
}

function shrinkCircle(){
	// shrinkCircleing the ball and collider
	if(!gameWin){
		if(blueScaleValue > 0.3){ // the radius is big enough
			blueScaleValue -= 0.1;
			blue.scale.setTo(blueScaleValue, blueScaleValue);
			blue.body.setCircle(blue.width/2);
		} else {
			blueDead = true;
			blue.destroy();
			gameLose = true;
			console.log("You lost!");
		}	
	}	
}

function shrinkRing(){
	if(!ring.full && !player.hitRing){
		player.hitRing = true;
		console.log("player hit ring: " + player.hitRing);

		// shrinkCircleing the ball and collider
		if(ringScaleVlaue >= 0.3){ // the radius is big enough
			
			if(!gameWin){ // play audio
				wrongFx.play();
				wrongFx.volume = 0.1;
			}
			
			ringScaleVlaue -= 0.1;
			ring.scale.setTo(ringScaleVlaue, ringScaleVlaue);
			ring.body.setCircle(ring.width/2);
		} else if(player.color == ring.color){ // HERE IS MY DELEMA!! +++++++
			ring.full = true;					// okay fixed this stuid situation	
			gameWin = true;
		}else if (ringScaleVlaue <= 0.35){
			ringDead = true;
			ring.destroy();
			gameLose = true;
			console.log("You lost!");
		}
	}
}


function resetColor(){
	playerSpriteTimerFinished = true;
	calledColorReset = false;
	blueActivate = false;
	player.color = 'none';
	player.alpha = 1;
	blue_player.destroy();
}

function randomLocation() {
	//  generate random num for blue 
    var randX = game.rnd.realInRange(0 + blue.width, game.world.width - blue.width);
    var randY = game.rnd.realInRange(0 + blue.height, game.world.height - blue.height);

    // move the ring around 
    game.add.tween(blue.body).to( { x: randX, y: randY }, 4000, "Sine.easeInOut", true);

    //  generate random num
    var randXr = game.rnd.realInRange(0 + ring.width, game.world.width - ring.width);
    var randYr = game.rnd.realInRange(0 + ring.height, game.world.height - ring.height);

    // move the ring around 
    game.add.tween(ring.body).to( { x: randXr, y: randYr }, 4000, "Sine.easeInOut", true);

    if(gameLose){
    	redLoseBall.alpha = 1;
    	loseT.alpha = 1;

    	if(count == 1){ // play audio
    		count++;
    		loseFx.play();
    		loseFx.volume = 0.1; 
    	}
    	//  generate random num
    	var randXrB = game.rnd.realInRange(0 + redLoseBall.width, game.world.width - redLoseBall.width);
    	var randYrB = game.rnd.realInRange(0 + redLoseBall.height, game.world.height - redLoseBall.height);

    	// move the ring around 
    	game.add.tween(redLoseBall.body).to( { x: randXrB, y: randYrB }, 4000, "Sine.easeInOut", true);
    }
}


function checkColorsToRing(body1, body2, fixture1, fixture2, begin) {
	if(!begin){
		ringCollied = true;	
	}
}

function removeText() {
	ifTextGone = true;
    t.destroy();
}

function dead(){
	// add textinstruction
	text = "You lost :(";
    loseT = game.add.text(game.world.centerX-300, 0, text, lostStyle);
    game.physics.box2d.enable(loseT);
    loseT.alpha = 0;
}

function resetPlayerRingHit(){
	player.hitRing = false;
	console.log("player hit ring: " + player.hitRing);
}

var playState = {
	preload: function() {

		// setting background color
		game.stage.backgroundColor = '#222';

		// set rope length 
		ropeLength = 250;

	}, 

	create: function() {

		// enabling physics for game
		game.physics.startSystem(Phaser.Physics.BOX2D);
		game.physics.box2d.debugDraw.joints = true;
		game.physics.box2d.gravity.y = 400;
		game.physics.box2d.restitution = 0.8;
		game.physics.box2d.setBoundsToWorld();

		// add textinstruction
		text = "Move Me";
    	t = game.add.text(game.world.centerX-300, 0, text, style);
    	game.input.onDown.addOnce(removeText, this); // remove text on mouse button down
    	game.physics.box2d.enable(t);

    	// audio setup
    	bumpFx = game.add.audio('bump');
    	winFx = game.add.audio('winBump');
    	loseFx = game.add.audio('lose');
    	wrongFx = game.add.audio('wrongBump');

    	// add red ball
    	redLoseBall = game.add.sprite(50, 100, 'loseBall');
    	game.physics.box2d.enable(redLoseBall);
    	redLoseBall.anchor.set(0.5);
    	redLoseBall.body.static = true;
    	redLoseBall.alpha = 0;

		// add centeral Dot
		center = game.add.sprite(game.world.width/2, game.world.height/2, 'center');
		game.physics.box2d.enable(center);
		center.body.static = true;

		// add player
		player = game.add.sprite(game.world.width/4, 150, 'player');
		player.color = 'none';
		player.hitRing = false;
		player.anchor.set(0.5);
		game.physics.box2d.enable(player);

		// add test ball blue
		blue = game.add.sprite(290, game.world.height/2, 'blue');
		game.physics.box2d.enable(blue);
		blue.body.kinematic = true;
		blue.anchor.set(0.5);
		blue.body.fixedRotation = false;
		blue.name = 'blue';
		blue.body.setCircle(blue.width/2);

		// add ring
		ring = game.add.sprite(500,200,'blue_ring');
		ring.scale.set(1);
		ring.anchor.set(0.5);
		ring.color = 'blue';
		ring.full = false;
		game.physics.box2d.enable(ring);
		ring.body.fixedRotation = true;
		ring.body.kinematic = true;

		// fix body from rectangle edges to circular to detect better collision
		player.body.setCircle(player.width/2);
		center.body.setCircle(center.width/2);
		var ringSensor = ring.body.setCircle(ring.width/2);

		// adding join between player and center
		game.physics.box2d.ropeJoint(center, player, ropeLength);

		// set up mechanics [mouse event]
		game.input.onDown.add(mouseDragStart, this);
		game.input.addMoveCallback(mouseDragMove, this);
		game.input.onUp.add(mouseDragEnd, this);

		// add collision 
		player.body.setBodyContactCallback(blue, colorChange, this);
		player.body.setBodyContactCallback(ring, checkColorsToRing, this);
		
		// add ring sensor 
		// ringSensor.SetSensor(true);
		// ring.body.setFixtureContactCallback(ringSensor,  checkColorsToRing,  this);

		// move the ring trigger function
		 game.time.events.repeat(Phaser.Timer.SECOND * 3, 500, randomLocation, this);
		 dead();
	}, 


	update: function(){
		// check ball collision
		if(contacted){
			contacted = false;
			bumpFx.play(); // audio effect
			bumpFx.volume = 0.05;
			if(!blueDead){
				shrinkCircle();
				changePlayerColor();
			}
		}

		// check ring collision
		if(ringCollied){
			ringCollied = false;
			if(!ringDead){
				shrinkRing();
			}
			game.time.events.add(Phaser.Timer.SECOND * 1, resetPlayerRingHit, this);
		}

		// fire timer to change color
		if(player.color !== 'none' && calledColorReset) {

			if(blueActivate){
				blue_player.x = player.body.x;
				blue_player.y = player.body.y;
			}

			if(playerSpriteTimerFinished){
				playerSpriteTimerFinished = false;
				game.time.events.add(Phaser.Timer.SECOND * 4, resetColor, this);
			}	
		}

		if(count > 1 && ring.full){
			full_ring.x = ring.body.x;
			full_ring.y = ring.body.y;
			winT.body.x = ring.body.x;
			winT.body.y = ring.body.y;
			winT.body.y -=15;
		}

		// check win 
		if(player.color == ring.color && player.hitRing){
			ring.full = true;
			console.log('WIN!!!!!!');
			winState();
		}



		// move text 
		if(!ifTextGone){
			t.body.x = player.body.x;
			t.body.y = player.body.y;
			t.body.y -= 15
		}

		// dead text movment
		loseT.body.x = redLoseBall.body.x;
		loseT.body.y = redLoseBall.body.y;
		loseT.body.y -= 15

		// rotate ball and ring
		blue.body.rotation += 0.05;
		ring.body.rotation += 0.05;

		console.log("player hit ring: " + player.hitRing);

	}, 

	render: function(){
		//game.debug.box2dWorld();
	}
};

