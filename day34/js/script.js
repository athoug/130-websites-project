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
        var setUpPortNumbersArray;
        var loopPortNumbersArray;

        if(setupCode.length <=0 || loopCode.length <= 0){
            alert("You must write your code in the functions to be able to run the sketch");
        } else {
            var setupText = setupCode.split("\n"); //splitting up the text to get individual code
            // console.log(setupText);

            var setupPenStatus = checkModes(setupText, 'pinMode(');
            var setupOutput = checkModes(setupText, 'OUTPUT');
            var ports = portNumbers(setupText);
            setUpPortNumbersArray = ports; // save the port numbers
            // console.log(ports);
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
                // console.log(loopText);
                var digitalWrite = checkModesDouble(loopText, 'digitalWrite(' ,'delay(');
                // var delayCheck = checkModes(loopText, 'delay(');
                var highOutput = highLowCheck(loopText, 'HIGH');
                // console.log(highOutput);
                var lowOutput = highLowCheck(loopText, 'LOW');
                var ports = portNumbers(loopText);
                var loopPort = portCheck(ports);
                // console.log(lowOutput);
                loopPortNumbersArray = ports;

                // LOGIC to tets if the setup pins match the loop pins
                // sort out the setup pins
                var duplicats = checkDuplicates(setUpPortNumbersArray);
                setUpPortNumbersArray.sort();
                loopPortNumbersArray.sort();

                var loopDuplicates = checkDuplicates(loopPortNumbersArray);
                var removedDuplicates = removeDuplicate(loopPortNumbersArray, loopDuplicates);
                console.log("loop array array");
                console.log(loopPortNumbersArray);
                console.log("setup array  values");
                console.log(setUpPortNumbersArray);


                // check if the ports in setup are the same as the ones in loop
                // console.log("arrays are equal? ");
                var arraysAreEqualTest = checkEqual(setUpPortNumbersArray, loopPortNumbersArray);
                // console.log(arraysAreEqualTest);


                if(!digitalWrite) {txt = "There is an Error while writing up your digital write function.\n Make sure you spelled it correctly [or] include it."; allInputsAreCorrect = false;}
                else if(!(highOutput ||lowOutput)) {txt = "There is an Error while setting up your high or low varables.\n Make sure you spelled it/or included it correctly."; allInputsAreCorrect = false;}
                else if(!loopPort){txt = "There is an Error while setting up your port.\n Make sure your range is between 0 and 9"; allInputsAreCorrect = false;}
                else if(checkDuplicates(setUpPortNumbersArray).length > 0) {txt = "There is an Error while setting up your port.\n Make sure you don't include duplicate ports"; allInputsAreCorrect = false;}
                else if(!arraysAreEqualTest){txt = "There is an Error while reading your port.\n Make sure your ports match in both the setup function and loop function"; allInputsAreCorrect = false;}

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
            // remove default animation
            for(var i =0; i < 10; i++){
                document.getElementById("Rectangle"+i).style.WebkitAnimation = 'none';
                document.getElementById("light"+i).style.WebkitAnimation = 'none';
                document.getElementById("Rectangl"+i).style.WebkitAnimation = 'none';
            }

            var loopText = loopCode.split("\n"); //splitting up the text to get individual code
            // console.log("splited loop data");
            // console.log(loopText);
            var portsToLightUp = portNumbers(loopText);
            portsToLightUp = convertPortToInt(portsToLightUp);

            var theDiodsObjects = createTheObject(loopText, portsToLightUp);
            // console.log("The objects");
            // console.log(theDiodsObjects);
            // delayGrabber(theDiodsObjects, loopText, portsToLightUp);

            // console.log("Does the objects work");
            // console.log(theDiodsObjects);
            // console.log("ports to light up");
            // console.log(portsToLightUp);
            var listOfAnimationsToHold = [];
            var listOfCloseAnimationsToHold = [];

            for (var i = 0; i < portsToLightUp.length; i++) {
                var topDiod = document.getElementById('Rectangle'+portsToLightUp[i]);
                var lightDiod = document.getElementById('light'+portsToLightUp[i]);
                var lowerDiod = document.getElementById('Rectangl'+portsToLightUp[i]);
                // console.log(lightDiod);

                if((theDiodsObjects['port'+portsToLightUp[i]].high) && (theDiodsObjects['port'+portsToLightUp[i]].low)){
                    // blink animation
                    lightDiod.style.WebkitAnimation = 'lightUp'+i+' '+ theDiodsObjects['port'+portsToLightUp[i]].delay +'ms infinite ease';
                    topDiod.style.WebkitAnimation = 'lightUp'+i+' '+ theDiodsObjects['port'+portsToLightUp[i]].delay +'ms infinite ease';
                    lowerDiod.style.WebkitAnimation = 'lightUp'+i+' '+ theDiodsObjects['port'+portsToLightUp[i]].delay +'ms infinite ease';
                }

                if((theDiodsObjects['port'+portsToLightUp[i]].high) && (theDiodsObjects['port'+portsToLightUp[i]].low == undefined)){
                    // save the lights to turn on
                    listOfAnimationsToHold.push('Rectangle'+portsToLightUp[i]);
                    listOfAnimationsToHold.push('light'+portsToLightUp[i]);
                    listOfAnimationsToHold.push('Rectangl'+portsToLightUp[i]);

                    // turn on animation
                    lightDiod.style.WebkitAnimation = 'turnOn 3s ease';
                    topDiod.style.WebkitAnimation = 'turnOn 3s ease';
                    lowerDiod.style.WebkitAnimation = 'turnOn 3s ease';



                }

                if((theDiodsObjects['port'+portsToLightUp[i]].high == undefined) && (theDiodsObjects['port'+portsToLightUp[i]].low)){
                    //save lights to close
                    listOfCloseAnimationsToHold.push('Rectangle'+portsToLightUp[i]);
                    listOfCloseAnimationsToHold.push('light'+portsToLightUp[i]);
                    listOfCloseAnimationsToHold.push('Rectangl'+portsToLightUp[i]);

                    // turn off animation
                    lightDiod.style.WebkitAnimation = 'turnOff 3s ease';
                    topDiod.style.WebkitAnimation = 'turnOff 3s ease';
                    lowerDiod.style.WebkitAnimation = 'turnOff 3s ease';
                }


            }

            for (var i =0; i <listOfAnimationsToHold.length; i++) {
                console.log(listOfAnimationsToHold[i]);
                document.getElementById(listOfAnimationsToHold[i]).addEventListener("animationend",function(e){
                    this.style.fill = "FF0000";
                },false);
            }


            for (var i =0; i <listOfCloseAnimationsToHold.length; i++) {
                console.log(listOfCloseAnimationsToHold[i]);
                document.getElementById(listOfCloseAnimationsToHold[i]).addEventListener("animationend",function(e){
                    this.style.fill = "E37576";
                },false);
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

    // function to check th ecode entered is right
    function checkModesDouble(array, modes1, modes2){
        var clearCode = true;
        for(var i=0; i<array.length; i++){
                if(array[i].includes(modes1) || array[i] == "" || array[i].includes(modes2)){
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
            if(array[i].includes('delay')) {continue}
            else {
                portNumberList.push(array[i].slice(array[i].indexOf('(')+1,array[i].indexOf(',')));
            }
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
        // console.log(array);
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


    // check duplicate values in array
    function checkDuplicates(array){
        var sorted_array = array.slice().sort(); // You can define the comparing function here.
                                                // JS by default uses a crappy string compare.
                                                // (we use slice to clone the array so the original array won't be modified)
        var results = [];
        for (var i = 0; i < array.length - 1; i++) {
            if (sorted_array[i + 1] == sorted_array[i]) {
                results.push(sorted_array[i]);
            }
        }

        return results;
    }

    // remove duplicats from array
    function removeDuplicate(array, duplicateValues){
        if(duplicateValues.length < 0){
            return array;
        } else {
            var newArray = array;

                for(var j = 0; j < duplicateValues.length; j++){
                    if(newArray.includes(duplicateValues[j])){
                        newArray.splice(newArray.indexOf(duplicateValues[j]), 1);
                    }
            }
            return newArray;
        }
    }

    // check equality
    function checkEqual (array1, array2){
        if (array1.length < array2.length || array2.length > array1.length){
            return false;
        } else {
            for (var i = 0; i < array1.length; i++) {
                if(array1[i] == array2[i]){
                    continue
                } else {
                    return false;
                }
            }
        }

        return true;
    }


    // check delay
    function delayGrabber(obj, textArray, portnumbers){
        for (var i = 0; i < textArray.length; i++) {
            if(textArray[i].includes(obj['port'+portnumbers[i]].portnum)){
                console.log(textArray[i]);
                if(textArray[i+1].includes('delay')){
                    if(obj['port'+portnumbers[i]].high && obj['port'+portnumbers[i]].low){
                        obj['port'+portnumbers[i]].delay = textArray[i+1].slice(textArray[i+1].indexOf('(')+1,textArray[i+1].indexOf(')'));
                    }
                }
            }
        }
        console.log(obj);
    }


    // return an opject that has data info
    function createTheObject(array, portnumbers){
        var diods = {};

        // creatign objects with proper property names
        for (var i = 0; i < portnumbers.length; i++) {
             diods['port'+portnumbers[i]] = new Diodes(portnumbers[i],undefined, undefined, undefined);
        }
        console.log("creating The initial object");
        console.log(diods);

        for (var i = 0; i < array.length; i++) {
            console.log();
            if(array[i].includes('digitalWrite')){
                var port = array[i].slice(array[i].indexOf('(')+1,array[i].indexOf(','));
                if(array[i].includes('LOW')){diods['port'+port].low = true;}
                if(array[i].includes('HIGH')){diods['port'+port].high = true;}

                console.log(port);

            }
            else {
                var port = array[i-1].slice(array[i-1].indexOf('(')+1,array[i-1].indexOf(','));
                console.log(port);
                diods['port'+port].delay = array[i].slice(array[i].indexOf('(')+1,array[i].indexOf(')'));
                console.log('I am out');
            }

            console.log("after The initial object");
            console.log(diods);

        }

        // for (var i = 0; i < array.length; i++) {
        //
        //     if(diods.hasOwnProperty('port'+portnumbers[i])){
        //         if(array[i].includes('LOW') && diods['port'+portnumbers[i]].low == undefined){diods['port'+portnumbers[i]].low = true;}
        //         if(array[i].includes('HIGH' && diods['port'+portnumbers[i]].high == undefined)){diods['port'+portnumbers[i]].high = true;}
        //     } else {
        //         var low = undefined;
        //         var high = undefined;
        //         var delay = 0;
        //         var port = "";
        //         if (array[i].includes('digitalWrite')){ port = array[i].slice(array[i].indexOf('(')+1,array[i].indexOf(','));}
        //         if(array[i].includes('LOW')){low = true;}
        //         if(array[i].includes('HIGH')){high = true;}
        //         // if(array[i+1].includes('delay')){delay = array[i+1].slice(array[i+1].indexOf('(')+1,array[i+1].indexOf(')'));}
        //         diods['port'+port].high = high;
        //         diods['port'+port].low = low;
        //         diods['port'+port].delay = delay;
        //     }
        //
        // }

        return diods;
    }

    // class of diods
    function Diodes(portnum, high, low, delay){
    	this.portnum = portnum;
    	this. high = high;
    	this.low = low;
    	this.delay = delay;
    }
};
