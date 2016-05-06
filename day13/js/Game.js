Tesla.Game = function(game) {
    this.boltsGroup= null;
    this.canhitbolts = true;
    this.totalBolts = 13;
    this.fontStyle = null;
    this.scoreText = 0;
    this.NPC = null;
    this.player = null;
    this.speed = 20;
    this.cursor =0;
    this.score = 0;
    this.boltPoints = 1;
    this.health = 10;
    this.lifegroup = null;
    this.deadlifgroup = null;
    this.countlightLocation = 0;
    this.gameover;
    this.gameoverbg;
    this.count = 0;
    Tesla.Highscore = 0;
    this.music;
    this.ouch;
    this.ding;
    this.backbuttonsound;
    this.pausebuttonsound;
    this.hitwireaudio;
    this.gameoversound;
    this.finalscoreText;
    this.thewire;
};

Tesla.Game.prototype = {

    create: function() {
        //we set the gameover boolean to false
        this.gameover = false;
        
        //assign audio
        this.music = this.add.audio('main_audio');
        this.music.play('', 0, 0.2, true);
        this.ouch = this.add.audio('hurt_audio');
        this.ding = this.add.audio('select_audio');
        this.backbuttonsound = this.add.audio('button_audio');
        this.pausebuttonsound = this.add.audio('button_audio');
        this.gameoversound = this.add.audio('gameover_audio');
        this.hitwireaudio = this.add.audio('gameover2_audio');
        
        //function call for building the world assets
        this.buildworld();

        //assign physics engin
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //assign keyboard inout
        this.cursor = this.input.keyboard.createCursorKeys();

    },



    //build world function
    buildworld: function(){
        //background and score board
        this.add.image(0, 0, 'bg');
        this.add.image(0, 10, 'score');

        //font
        this.fontStyle = {font: "40px Arial", fill: "#fbe704", stroke: "#fabb12", strokeThickness: 3, align: "center"};
		this.scoreText = this.add.text(130, 25, "0", this.fontStyle);

        //NPC Charachters
        this.NPC = this.add.sprite(0, 527, 'telsandedison');
        this.NPC.animations.add('moving', [0,1,2], 2, true);
        this.NPC.animations.play('moving');

        //adding the pause button
        this.add.button(640-70, 15, 'button-pause', this.managePause, this, 2,1,0);
        

        //creta life assets
        this.deadlifgroup = this.add.group();
         for(var i = 0; i<6 ; i++){
            this.deadlifgroup.create(240 + i *50, 0, 'dead-light');
        }

        this.lifegroup = this.add.group();
        for(var i = 0; i<6 ; i++){
            this.lifegroup.create(240 + i *50, 0, 'life');
        }


        //build player
        this.buildPlayer();

        //generate the bolts
        this.buildBolts();
        
        //build conductor (enemie)
        this.buildwire();
    },

    //build player function
    buildPlayer: function(){
        //add the player
        this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        this.player.inputEnabled = true;
        //this.player.input.enableDrag(false, false, true);
        this.player.events.onInputDown.add(this.onDown, this);

        //activating the physics engine
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
    },

    onDown: function(sprite, pointer){
        //move player something with touch event
        sprite.x = pointer.screenX;
        sprite.y = pointer.screenY;
    },
    
    //build the wir (enemy NPC)
    buildwire: function() {
         this.thewire = this.add.group();
         this.thewire.enableBody = true;
         this.thewire.physicsBodyType = Phaser.Physics.ARCADE;

        for(var i = 0; i<1 ; i++){
            var w =  this.thewire.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), 'dcwire');
            // var scale = this.rnd.realInRange(0.3, 1.0);
            w.scale.x = 0.7;
            w.scale.y = 0.7;

            //w.anchor.setTo(0.5, 0.5);

            this.physics.enable(w, Phaser.Physics.ARCADE);
            w.enableBody = true;
            w.body.velocity.y = this.rnd.integerInRange(200, 400);

            w.checkWorldBounds = true;
            w.events.onOutOfBounds.add(this.resetwire, this, this.lifegroup);
        }
        //this.thewire.pivot.setTo(0.5, 0.5);

    },

    //reset the wire
    resetwire: function(w){
    
         if(this.gameover == false) {

        if(w.y > this.world.height){
            //regenerate bolts
            this.rebuildwire(w);
            }
        }
    },
    
    //rebuild the wire
    rebuildwire: function(w){
        w.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500,0));
        w.body.velocity.y = this.rnd.integerInRange(200, 400);
    },
    
    //manage the pause event function
    managePause: function()
	{  // mamaging the pause event
        this.pausebuttonsound.play();
		this.game.paused = true;
//        var pausebg = this.add.sprite(0,0,'pausemenu');
//        this.pausebg.inputEnabled = true;
//        this.add.button(this.world.centerX-200,this.world.centerY+320, 'continue',/*this.startGame,this,*/ 2,1,0 );
		var pasuedText = this.add.text(100, 250, "Game Pased.\n Tap anywhere to continue.", this.fontStyle);
        this.NPC.animations.stop(null, true);
        
//        this.events.onInputDown.add(function(){
//			pausebg.destroy();
//			this.game.paused = false;
//            this.NPC.animations.play('moving');
//		}, this);

		this.input.onDown.add(function(){
			pasuedText.destroy();
			this.game.paused = false;
            this.NPC.animations.play('moving');
		}, this);
	},

    //building the bolts function
    buildBolts: function(){
        this.boltsGroup = this.add.group();
        this.boltsGroup.enableBody = true;
        this.boltsGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for(var i = 0; i<this.totalBolts ; i++){
            var b = this.boltsGroup.create(this.rnd.integerInRange(10, this.world.width-35), this.rnd.realInRange(-1500, 0), 'bolt');

            var scale = this.rnd.realInRange(0.3, 1.0);
            b.scale.x = scale;
            b.scale.y = scale;

            this.physics.enable(b, Phaser.Physics.ARCADE);
            b.enableBody = true;
            b.body.velocity.y = this.rnd.integerInRange(200, 400);

            b.checkWorldBounds = true;
            b.events.onOutOfBounds.add(this.resetBolt, this, this.lifegroup);
        }

    },

    //reset the games bolts
    resetBolt: function(r) {
        if(this.gameover == false) {

        if(r.y > this.world.height){
            //decerease the health
            this.health -= 1;
            //regenerate bolts
            this.rebuildbolt(r);
            //check if we are still alive
            this.checkLife();
            }
        }
    },

    //check the players life counter
    checkLife: function(){

        this.count++;

        if(this.health <=0){
            this.gameGameover();

        }else {
            if(this.count<6){

                this.ouch.play();
                this.ouch.volume = 0.4;
                //this.lifegroup.getFirstAlive().kill();
                this.lifegroup.getAt(this.countlightLocation).alpha = 0;
                this.countlightLocation ++;

            }
        }

    },

    //return to menue function and reset variables
    BacktoMenu: function(pointer){
        this.boltsGroup= null;
        this.canhitbolts = true;
		this.totalBolts = 13;
		this.fontStyle = null;
		this.scoreText = 0;
        this.finalscoreText = 0;
        this.countlightLocation = 0;
		this.NPC = null;
		this.player = null;
		this.speed = 20;
		this.cursor =0;
		this.score = 0;
		this.boltPoints = 1;
		this.health = 10;
		this.lifegroup = null;
        this.deadlifgroup = null;
		this.gameover;
		this.gameoverbg;
		this.count = 0;
        this.thewire = null;
        this.backbuttonsound.play();
        this.state.start('MainMenu');
    },

    //rebuild the bolts
    rebuildbolt: function(r){
        r.reset(this.rnd.integerInRange(0, this.world.width-30), this.rnd.realInRange(-1500,0));
        r.body.velocity.y = this.rnd.integerInRange(200, 400);
    },
    
    //detecting the collision with wire
    wireCollision: function (player, wire){
          this.gameGameover();  
    },

    gameGameover: function(){
        this.canhitbolts = false;
        this.ding.stop();
        this.music.stop();
        this.gameoversound.play('', 0, 1, false, false);
        this.gameoversound.volume = 0.3;
        this.gameover = true;
        this.gameoverbg = this.add.sprite(0, 0, 'gameoverbg');
        this.add.button(this.world.centerX-90,this.world.centerY+180, 'menuButton',this.BacktoMenu,this, 2,1,0 );
        this.finalscoreText = this.add.text(300, 600, 'You scored: ' + this.score, this.fontStyle);   
    },

    //detecting the collision with bolt
    boltCollision: function(player, bolt){
        if(this.canhitbolts === true){
        //check health first
        if(this.health >0){
            //increase score if collided with player
            this.score +=  this.boltPoints;
            //change the score text
            this.scoreText.text = this.score;
            //audio for point 
            this.ding.play();
            this.ding.volume = 0.1;
            
            //check the condition of the high score
            if (localStorage.getItem(Tesla.Highscore) < this.score)
            {
                localStorage.setItem(Tesla.Highscore, this.score);
            }
     
            //regenerate the bolt
            this.rebuildbolt(bolt);
         }
     }
    },

    //checking for any updates in the game state
    update: function() {

         this.physics.arcade.overlap(this.player,this.boltsGroup, this.boltCollision, null, this);
         this.physics.arcade.overlap(this.player,this.thewire, this.wireCollision, null, this);

         //this.thewire.angle += 1;

        //keyboard input
        if(this.cursor.left.isDown){
            this.player.x -= this.speed;
            this.player.angle = -15;
        }

        if(this.cursor.right.isDown){
            this.player.x +=this.speed;
            this.player.angle = 15;
        }

        if(this.cursor.up.isDown){
            this.player.y -=this.speed;
            this.player.angle = 0;
        }

         if(this.cursor.down.isDown){
            this.player.y +=this.speed;
            this.player.angle = 0;
        }


    }
};

