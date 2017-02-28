var menuState = {
	create: function(){

		// setting background color
		game.stage.backgroundColor = '#222';

		// add logo
		var logo = game.add.image(game.width/2, game.height/2, 'logo');
		logo.scale.setTo(0.9);
		logo.anchor.setTo(0.5);

		var btn = game.add.button(game.width/2,game.height/2 + logo.height -90, 'btn', this.start, 2, 1, 0);
		btn.anchor.setTo(0.5);

		// ++++ testing ++++this,
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
	},

	start: function(){
		//start the game
		game.state.start('play');
		// game.state.start('levelTwo');
	}
}
