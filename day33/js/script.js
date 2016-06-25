window.onload = function(){
    // iniciating the varables
    var blinkScript = document.getElementById('blink');
    var inforScript = document.getElementById('info');
    var runButn = document.getElementById('buttonRun');
    var consoleMsg = document.getElementById('msg');

    // functions to add the proper styling to the selected tabs
    blinkScript.addEventListener('click', function(){
        var theInfoText = document.getElementById('infoText');
        var blinkText = document.getElementById('blinkCode');
        theInfoText.style.display = "none"; //removing the info text
        blinkText.style.display = "block"; //show the blink text
        blinkScript.className = "sketch-blink-name"; //changing the tab style to show it's selected
        inforScript.className = "sketch-blink-name sketch-instruction-name not-selected"; //changing the tab style to show it's NOT selected
    });

    // functions to add the proper styling to the selected tabs
    inforScript.addEventListener('click', function(){
        var theInfoText = document.getElementById('infoText');
        var blinkText = document.getElementById('blinkCode');
        theInfoText.style.display = "block"; //show the info text
        blinkText.style.display = "none"; //removing the info text
        blinkScript.className = "sketch-blink-name not-selected"; //changing the tab style to show it's NOT selected
        inforScript.className = "sketch-blink-name sketch-instruction-name"; //changing the tab style to show it's selected
    });

    runButn.addEventListener('click', function(){
        var allInputsAreCorrect = true;
        var setupCode = document.getElementById('setup-code').value;
        var loopCode = document.getElementById('loop-code').value;

        if(setupCode.length <=0 || loopCode.length <= 0){
            alert("You must write your code in the functions to be able to run the sketch");
        } else {
            var setupText = setupCode.split("\n"); //splitting up the text to get individual code
            console.log(setupText);

            var setupPenStatus = checkModes(setupText, 'pinMode(');
            var setupOutput = checkModes(setupText, 'OUTPUT');
            var ports = portNumbers(setupText);
            console.log(ports);
            setupPort = portCheck(ports);

            // checking if there is any error in the writeup code
            if(!setupPenStatus || !setupOutput || !setupPort){
                var txt;
                if(!setupPenStatus) {txt = "There is an Error while setting up your pin.\n Make sure you spelled it correctly.";}
                else if(!setupOutput) {txt = "There is an Error while setting up your output.\n Make sure you spelled it/or included it correctly.";}
                else if(!setupPort){txt = "There is an Error while setting up your port.\n Make sure your range is between 0 and 9";}
                consoleMsg.style.color = '#FC615C';
                consoleMsg.textContent = txt;
                allInputsAreCorrect = false;
            } else {
                var txt;
                consoleMsg.style.color = '#FC615C';
                // cheking the Loop vunction varables
                var loopText = loopCode.split("\n"); //splitting up the text to get individual code
                console.log(loopText);
                var digitalWrite = checkModes(loopText, 'digitalWrite(');
                var highOutput = highLowCheck(loopText, 'HIGH');
                console.log(highOutput);
                var lowOutput = highLowCheck(loopText, 'LOW');
                console.log(lowOutput);

                if(!digitalWrite) {txt = "There is an Error while writing up your digital write function.\n Make sure you spelled it correctly [or] include it."; allInputsAreCorrect = false;}
                else if(!(highOutput ||lowOutput)) {txt = "There is an Error while setting up your high or low varables.\n Make sure you spelled it/or included it correctly."; allInputsAreCorrect = false;}
                else {
                    allInputsAreCorrect = true;
                    txt = "SUCCESS!";
                    consoleMsg.style.color = '#34C949';
                    consoleMsg.textContent = txt;
                }
                consoleMsg.textContent = txt;
            }
        }


        if(allInputsAreCorrect){
            var loopText = loopCode.split("\n"); //splitting up the text to get individual code
            var portsToLightUp = portNumbers(loopText);
            portsToLightUp = convertPortToInt(portsToLightUp);
            console.log(portsToLightUp);
            for (var i = 0; i < portsToLightUp.length; i++) {
                var topDiod = document.getElementById('Rectangle'+portsToLightUp[i]);
                var lightDiod = document.getElementById('light'+portsToLightUp[i]);
                var lowerDiod = document.getElementById('Rectangl'+portsToLightUp[i]);
                console.log(lightDiod);

                lightDiod.style.WebkitAnimation = 'lightUp'+i+' 2s infinite ease';
                topDiod.style.WebkitAnimation = 'lightUp'+i+' 2s infinite ease';
                lowerDiod.style.WebkitAnimation = 'lightUp'+i+' 2s infinite ease';

            }
        }

    });

    // function to check th ecode entered is right
    function checkModes(array, modes){
        var clearCode = true;
        for(var i=0; i<array.length; i++){
                if(array[i].includes(modes) || array[i] == ""){
                    continue;
                } else {
                    clearCode = false;
                    break;
                }
        }
        return clearCode;
    }

    // function high low check
    function highLowCheck(array, modes){
        var clearCode = true;
        for(var i=0; i<array.length; i++){
                if(array[i].includes(modes)){
                    break;
                } else {
                    clearCode = false;
                    continue;
                }
        }
        return clearCode;
    }

    // function to grab the list of ports written by user
    function portNumbers(array){
        var portNumberList = [];

        for (var i = 0; i < array.length; i++) {
            portNumberList[i] = array[i].slice(array[i].indexOf('(')+1,array[i].indexOf(','));
        }
        return portNumberList;
    }

    // function for checking the port number range
    function portCheck(array){
        var rightPortNumbers = true;
        for (var i = 0; i < array.length; i++) {
            array[i] = parseInt(array[i]);
            if(array[i] < 10 || isNaN(array[i])){
                continue;
            } else {
                rightPortNumbers = false;
            }
        }
        console.log(array);
        return rightPortNumbers;
    }

    function convertPortToInt(array){
        var numberedArray = [];
        for (var i = 0; i < array.length; i++) {
            if(isNaN(parseInt(array[i]))){
                continue;
            }
            numberedArray[i] = parseInt(array[i]);
        }

        return numberedArray;
    }
};
