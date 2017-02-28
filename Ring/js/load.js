var loadState = {
	preload: function(){

		// text settings
		var loadingText = game.add.text(game.width/2, 150, 'loading...', 
			{font: '12 Helvetica', fill: "#fff"});
		loadingText.anchor.setTo(0.5);

		// display progress bar
		var progress = game.add.sprite(game.width/2, 200, 'progressBar');
		progress.anchor.setTo(0.5);
		game.load.setPreloadSprite(progress);

		// loading image assets
		game.load.image('center', '../assets/img/player.png');
		game.load.image('player', '../assets/img/center.png');
		game.load.image('blue', '../assets/img/blue.png');
		game.load.image('yellow', '../assets/img/yellow.png');

		game.load.image('ring_yellow', '../assets/img/yellow-ring-dashed.png');
		game.load.image('ring_win', '../assets/img/win-ring-yellow.png'); 
		game.load.image('playerYellow', '../assets/img/player-yellow.png');

		game.load.image('player_blue', '../assets/img/player-blue.png');
		game.load.image('blue_ring', '../assets/img/blue-ring-dashed.png');
		game.load.image('win_ring', '../assets/img/win-ring.png');
		game.load.image('loseBall', '../assets/img/redLose.png');
		game.load.image('logo', '../assets/img/logo.png');
		game.load.spritesheet('btn', '../assets/img/btn.png', 285, 58);

		// load sound assets
		game.load.audio('bump', '../assets/sound/clank.wav');
		game.load.audio('winBump', '../assets/sound/win.wav');
		game.load.audio('lose', '../assets/sound/lose.wav');
		game.load.audio('wrongBump', '../assets/sound/wrong-bump-1.wav');
	},

	create: function(){

		// go to menu state
		game.state.start('menu');
	}
};