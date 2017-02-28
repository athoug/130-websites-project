var game = new Phaser.Game(800,600, Phaser.AUTO, '', {preload: preload, create: create, render: render, update: update});

	// variables
	var player;
	var blue_player;
	var blueActivate = false;
	var center;
	var blue;
	var blue_w;
	var getColor = false;
	var xScale = 1, yScale = 1;
	var calledColorReset = false;
	var ring;

	//testing scale
	var ring_scale = 1;
	var timePassed_sinceRing_hit = false;
	var counter = 0;
	function preload() {
		// setting background color
		game.stage.backgroundColor = '#222';

		// loading assets
		game.load.image('center', 'assets/img/player.png');
		game.load.image('player_blue', 'assets/img/player-blue.png');
		game.load.image('player', 'assets/img/center.png');
		game.load.image('blue', 'assets/img/blue.png');
		game.load.image('blue_ring', 'assets/img/blue-ring-dashed.png');
		
	}

	function create() {


		// enabling physics for game
		game.physics.startSystem(Phaser.Physics.BOX2D);
		game.physics.box2d.debugDraw.joints = true;
		game.physics.box2d.gravity.y = 400;
		game.physics.box2d.restitution = 0.5;
		game.physics.box2d.setBoundsToWorld();


		// add centeral Dot
		center = game.add.sprite(game.world.width/2, game.world.height/2, 'center');
		game.physics.box2d.enable(center);
		center.body.static = true;
		console.log("center at point x = " + center.body.x);


		// add test ball blue
		blue = game.add.sprite(390, window.innerHeight/2, 'blue');
		game.physics.box2d.enable(blue);
		blue.body.kinematic = true;
		blue.anchor.set(0.5);
		blue.pivot.x = 50;
		blue.body.fixedRotation = false;
		blue_w = blue.width/2;
		blue.name = 'blue';
		blue.body.setCircle(blue.width/2);


		// add player
		player = game.add.sprite(200, 400, 'player');
		blue.anchor.set(0.5);
		player.color = 'none';
		game.physics.box2d.enable(player, false);


		// add ring
		ring = game.add.sprite(200,200,'blue_ring');
		ring.scale.set(1);
		ring.anchor.set(0.5);
		ring.pivot.x = 50;
		ring.color = 'blue';
		ring_w = ring.width/2;
		game.physics.box2d.enable(ring);
		ring.body.kinematic = true;

		// fix body from rectangle edges to circular to detect better collision
		player.body.setCircle(player.width/2);
		center.body.setCircle(center.width/2);
		var ringSensor = ring.body.setCircle(ring.width/2, -50, 0);

		ringSensor.SetSensor(true);
		ring.body.setFixtureContactCallback(ringSensor,  checkColorsToRing,  this);

		
		console.log("player color " + player.color);

		//add collision 
		player.body.setBodyContactCallback(blue, colorChange, this);
		
		// adding join between player and center
		game.physics.box2d.ropeJoint(center, player);

		// set up mechanics [mouse event]
		game.input.onDown.add(mouseDragStart, this);
		game.input.addMoveCallback(mouseDragMove, this);
		game.input.onUp.add(mouseDragEnd, this);

		// move the ring trigger function
		 game.time.events.repeat(Phaser.Timer.SECOND * 5, 100, randomLocation, this);

	}

	function checkColorsToRing(body1, body2, fixture1, fixture2, begin) {
		if(ring.color == player.color) {
			console.log('WIN!!!!!!');
		} else if(ring_scale <=0){
			console.log('YOU LOST :( :(');
		} else {

			// remove this later
			//if (!timePassed_sinceRing_hit && ring_scale > 0) 
			console.log("Im checking color ");
			counter++;
			console.log("I'm in here " + counter);
			// remove this later

			ring_scale -= 0.1;
			ring_w -= 0.1;
			timePassed_sinceRing_hit = true;

			// ++++++++ TESTING START HERE ++++++++
			console.log("The radius of ring is " + ring.width);
			//console.log('id of body 1' + body1.id);
			body1 = ring;

			console.log(body1.color);

			//ring.body.setCircle(ring.width/2, -50, 0);
			game.add.tween(ring.scale).to( { x: 1*ring_scale, y: 1*ring_scale }, 2000, "Sine.easeInOut",true);
		}
	}

	function canShrink() {
		console.log("I'm in the canShrink and calculating time");
		ring.body.setCircle(ring.width/2, -50, 0);
		timePassed_sinceRing_hit = false;
	}

	function randomLocation() {
		//  generate random num
        var randX = game.rnd.realInRange(0 + ring.width, game.world.width - ring.width);
        var randY = game.rnd.realInRange(0 + ring.height, game.world.height - ring.height);
        console.log(randX + ',' + randY);

        // move the ring around 
        game.add.tween(ring.body).to( { x: randX, y: randY }, 4000, "Sine.easeInOut", true);

	}

	function resetColor(){
		
		//console.log("called reset color");
		calledColorReset = false;
		blueActivate = false;
		player.color = 'none';
		player.alpha = 1;
		blue_player.destroy();
	}

	function colorChange(body1, body2, fixture1, fixture2, begin) {

		if(blue_w > 0) {

			//shrink size with each collision
			blue_w -= 0.1;
			xScale -= 0.1;
			yScale -= 0.1;
			player.color = "blue";
			player.alpha = 0;
			calledColorReset = true;

			// reduce size
			if(xScale > 0 && yScale > 0){
				//blue.body.setCircle(blue.width/2, -50, 0);
				game.add.tween(blue.scale).to( { x: 1*xScale, y: 1 * yScale}, 2000, Phaser.Easing.Linear.None,true);
			}

			if (!blueActivate){
				// create blue sprite
				blue_player = game.add.sprite(player.body.x, player.body.y, 'player_blue');
				blue_player.anchor.set(0.5);
			}
			

			blueActivate = true;
			
			getColor = true;
		} else {
			blue.destroy();
		}
		
	}


	function mouseDragStart() {
		game.physics.box2d.mouseDragStart(game.input.mousePointer);
	}

	function mouseDragMove() {
		game.physics.box2d.mouseDragMove(game.input.mousePointer);
	}

	function mouseDragEnd() {
		game.physics.box2d.mouseDragEnd();
	}

	function update() {

		// if(timePassed_sinceRing_hit) {
		// 	game.time.events.add(Phaser.Timer.SECOND * 2, canShrink, this);
		// }

		// Shrink ball radius +++++ THIS IS NOT WORKING!!! +++++
		if(blue_w >= 0){

			blue.body.setCircle(blue_w, -50, 0);
			blue.body.rotation += 0.05;
		}

		// shrinking the ring +++++ THIS IS NOT WORKING!!! +++++
		// if(ring_w >= 0){
		// 	ring.body.setCircle(ring_w, -50, 0);
		// }

		// fire timer to change color
		if(player.color !== 'none' && calledColorReset) {
			//console.log("Add timer here");

			if(blueActivate){
				blue_player.x = player.body.x;
				blue_player.y = player.body.y;
			}
			
			game.time.events.add(Phaser.Timer.SECOND * 6, resetColor, this);
		}

		ring.body.rotation += 0.05;
		
	}

	function render() {
		// to see the world and how the collide with one another
		game.debug.box2dWorld();
		//game.debug.body(blue);
	}