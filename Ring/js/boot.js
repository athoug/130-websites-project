var bootState = {
	preload: function(){
		// load image
		game.load.image('progressBar', '../assets/img/progressBar.png')
	},

	create: function(){
		game.stage.background = '#222';

		// start the load state
		game.state.start('load');
	}
};