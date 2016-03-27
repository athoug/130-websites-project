// Setting the variables
var seconds = 0;
var minutes = 0;
var hours = 0;
var len, str;
var interavel;

// time interavel
function timeSetting(sec) {
    seconds += 1;
    str = seconds.toString();
    len = str.length;

    if (len < 2){
        document.getElementById('seconds').innerHTML = '0'+seconds;
    } else {
        if(seconds == 60){

            seconds = 0;
            minutes += 1;
            str = minutes.toString();
            len = str.length;

            if(len < 2){
                document.getElementById('seconds').innerHTML = '0'+seconds;
                document.getElementById('minutes').innerHTML = '0'+minutes;
            } else {
                if (minutes == 60){

                    minutes = 0;
                    hours += 1;
                    str = hours.toString();
                    len = str.length;

                    if (len < 2){
                        document.getElementById('seconds').innerHTML = '0'+seconds;
                        document.getElementById('minutes').innerHTML = minutes;
                        document.getElementById('hours').innerHTML = '0'+ hours;
                    } else {
                        if(hours == 24) {
                            hours = 0
                            document.getElementById('seconds').innerHTML = '0'+seconds;
                            document.getElementById('minutes').innerHTML = minutes;
                            document.getElementById('hours').innerHTML = '0'+ hours;
                        } else {
                            document.getElementById('seconds').innerHTML = '0'+seconds;
                            document.getElementById('minutes').innerHTML = minutes;
                            document.getElementById('hours').innerHTML = hours;
                        }
                    }

                } else {
                    document.getElementById('seconds').innerHTML = '0'+seconds;
                    document.getElementById('minutes').innerHTML = minutes;
                }
            }

        } else {
            document.getElementById('seconds').innerHTML = seconds;
        }
    }

}



document.getElementById('start').onclick = function() {
    interavel = setInterval(timeSetting, 1000);
};


document.getElementById('stop').onclick = function() {
    clearInterval(interavel);
};


document.getElementById('clear').onclick = function() {
    clearInterval(interavel);

    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
};
