Tesla.Instructions = function(game){
    this.instructionBG;
    this.ButtonStart;
}

Tesla.Instructions.prototype = {

    create: function() {
        
        this.ButtonStart = this.add.audio('button_audio');
        instructionBG = this.add.image(0, 0, 'instruction-menu');
        instructionBG.inputEnabled = true;
        this.add.button(this.world.centerX-200,this.world.centerY+320, 'continue',this.startGame,this, 2,1,0 );
    },

    startGame: function(pointer){
        this.ButtonStart.play();
        this.state.start('Game');
    }
};
