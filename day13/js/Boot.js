var Tesla = {};

Tesla.Boot = function(game) {};

Tesla.Boot.prototype = {
    preload: function() {
        //loading the image assets
        this.load.image('preloaderBar', 'images/Loading-bar.png');
        this.load.image('titleimage', 'images/Loading-screen-(glowing).png');
    },

    create: function() {
        //sets the maximum number of cursors/touch to one
        this.input.maxPointers = 1;
        //pasus the game is another windo opens whilst we're mid playing
		this.stage.disableVisibilityChange = false;
        //scales the stage to fit the screen makes sure nothing is croped out
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //sets the minimum width and height of prowser resize
		this.scale.minWidth = 270;
		this.scale.minHeight = 480;
        //centers the stage
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
        //forces Portrate mode in mobile devices
		this.stage.forcePortrait = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
		this.stage.backgroundColor = '#171642';
        //invoking the preload state
        this.state.start('Preloader');
    }
}
