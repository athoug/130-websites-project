Tesla.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Tesla.Preloader.prototype = {

	preload: function () {
        //set up the loading page
        //assign the sprite to the declared variable and set anchorpoit to middle
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
        //we set the preload image to the preload methood in Phaser
		this.load.setPreloadSprite(this.preloadBar);
        //set the title screen to local variable and set the anchor point
		this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);

        //loading game image assets
        this.load.image('titlescreen', 'images/mainmenue-logo.png');
        this.load.image('pausemenu', 'images/pause-menu.png');
        this.load.image('dcwire', 'images/DCwires.png');
        this.load.image('bg', 'images/background.png');
        this.load.image('gameoverbg', 'images/gameover.png');
        this.load.image('score', 'images/score.png');
        this.load.image('highScore', 'images/High-score1.png');
        this.load.spritesheet('bolt', 'images/bolts.png', 71,88,3);
        this.load.spritesheet('start', 'images/button-start.png',401, 143,3);
        this.load.spritesheet('pause', 'images/button-pause',401, 143,3);
        this.load.image('button-pause', 'images/pause.png');
        this.load.spritesheet('telsandedison', 'images/togehter.png', 640, 433);
        this.load.image('player', 'images/player.png');
        this.load.image('life', 'images/light-bulb_on.png');
        this.load.image('dead-light', 'images/light-bulb-off.png');
        this.load.image('instruction-menu', 'images/instructions.png');
        this.load.spritesheet('continue', 'images/continue.png',401, 143,3);
        this.load.spritesheet('menuButton', 'images/back-to-menue.png',401, 143,3);
        //load game audio assets
        this.load.audio('hurt_audio', 'audio/hurt.mp3');
        this.load.audio('select_audio', 'audio/select.mp3');
        this.load.audio('menu_audio', 'audio/menu.mp3');
        this.load.audio('button_audio', 'audio/button-select.mp3');
        this.load.audio('gameover_audio', 'audio/gameover.mp3');
        this.load.audio('gameover2_audio', 'audio/gameover2.mp3');
        this.load.audio('main_audio', 'audio/mainmusic.wav');
        
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.cache.isSoundDecoded('main_audio') && this.ready == false) {
        this.ready = true;
        this.state.start('MainMenu');
        }
	}
};
