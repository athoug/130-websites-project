var context = new AudioContext(), // cretae an audio context
    volume = context.createGain(), //create a gain that will controll the volume
    SquareOscillators = {},
    // SawtoothOscillators = {},
    analyser = context.createAnalyser(),
    waveDate = new Uint8Array(analyser.frequencyBinCount),
    canvas = document.getElementById('oscilliscope'),
    canvasConext = canvas.getContext('2d'),
    canvasHeight = 250,
    canvasWidth = 587;


volume.gain.value = 0.5; //set the volume

volume.connect(analyser); //connect the sound to the speackers
volume.connect(context.destination); //connect the sound to the speackers

// osc.start(context.currentTime);
// osc.stop(context.currentTime + 1);

var keyboard = new QwertyHancock({
    id: 'keyboard',
    octaves: 2,
    whiteNotesColour: 'orange',
    blackNotesColour: '#7ACCC8',
    hoverColour: '#FFD900'
});

keyboard.keyDown = function(note, frequency) {
    var squareOsc = context.createOscillator(),
        sawtoothosc = context.createOscillator(); // create an oscillator that will generate the sound
    SquareOscillators[note] = squareOsc;
    // SawtoothOscillators[note] = sawtoothosc;

    squareOsc.connect(volume); //connect the sound to the oscillator
    // sawtoothosc.connect(volume); //connect the sound to the oscillator

    squareOsc.frequency.value = frequency;
    // sawtoothosc.frequency.value = frequency;

    // squareOsc.detune.value = -10;
    // sawtoothosc.detune.value = 10;

    squareOsc.type = 'sine';
    // sawtoothosc.type = 'square';

    squareOsc.start(context.currentTime);
    // sawtoothosc.start(context.currentTime);

};

keyboard.keyUp = function(note, frequency){
    SquareOscillators[note].stop(context.currentTime);
    SquareOscillators[note].disconnect();

    // SawtoothOscillators[note].stop(context.currentTime);
    // SawtoothOscillators[note].disconnect();
};

var xWidth = canvasWidth / analyser.frequencyBinCount;
var draw = function() {
    requestAnimationFrame(function(){
        canvas.width = canvasWidth;
        analyser.getByteTimeDomainData(waveDate);

        for (var i = 0; i < waveDate.length; i++) {
            var yPosition = waveDate[i] / 256,
                xPosition = i * xWidth;
            yPosition *= canvasHeight;

            canvasConext.lineTo(xPosition, yPosition);
        }
        canvasConext.strokeStyle = '#222';
        canvasConext.strokeWeight = 3;
        canvasConext.stroke();
        draw();
    });
};

draw();
