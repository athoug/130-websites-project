Tesla.MainMenu = function(game){
    this.startBG;
    this.Highscore;
    this.fontStyleMenu = null;
    this.fizz;
    this.selectButton;
    this.startbtn;
}

Tesla.MainMenu.prototype = {

    create: function() {
        
        //add sound
        this.selectButton = this.add.audio('button_audio');
        this.fizz = this.add.audio('menu_audio');
        this.fizz.play('', 0, 0.2,true);
        this.fizz.volume = 0.1;

        //add background image
        startBG = this.add.image(0, 0, 'titlescreen');
        
        //set highscore font attributes
         this.fontStyleMenu = {font: "35px Arial", fill: "#91ebff", stroke: "#00e1ff", strokeThickness: 2, align: "center"};
        
        //add highscore
         this.add.image(220, 0, 'highScore');
         this.Highscore = this.add.text(320, 20, localStorage.getItem(Tesla.Highscore), this.fontStyleMenu);
        startBG.inputEnabled = true;
       // startBG.events.onInputDown.addOnce(this.startGame, this);
       // startPrompt = this.add.bitmapText(this.world.centerX-170, this.world.centerY+380,'eightbitwonder', 'Touch to Start', 28 );
        this.startbtn = this.add.button(this.world.centerX-140,this.world.centerY+370, 'start',this.startGame,this, 2,1,0 );
        this.startbtn.scale.setTo(0.7);
    },

    startGame: function(pointer){
        this.fizz.stop();
        this.selectButton.play();
        this.state.start('Instructions');
        
    },
   
};
