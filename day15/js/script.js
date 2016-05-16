var endDate = '2016-06-02';



function timeRemaining(endDate) {
    var time = Date.parse(endDate) - Date.parse(new Date());
    var seconds = Math.floor((time/1000)%60);
    var minutes = Math.floor((time/1000/60)%60);
    var hours = Math.floor((time/(1000*60*60))%24);
    var days = Math.floor(time/(1000*60*60*24));

    console.log(time);

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endDate){
    var theDay = document.getElementById('day');
    var theHours = document.getElementById('hours');
    var theMinutes = document.getElementById('minutes');
    var theSecongs = document.getElementById('seconds');

    var timeinerval = setInterval(function(){
        var t = timeRemaining(endDate);
        theDay.innerHTML = t.days;
        theHours.innerHTML = t.hours;
        theMinutes.innerHTML = t.minutes;
        theSecongs.innerHTML = t.seconds;

        if(t.total <=0){
            clearInterval(timeinerval);
        }
    },1000);
}


initializeClock(endDate);
