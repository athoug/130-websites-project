// adjusting the size of the div
document.getElementById('changeMe').style.width = window.innerWidth + 'px';
document.getElementById('changeMe').style.height = window.innerHeight + 'px';

var colorList = ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed'];
var fontsize = ['2.5em', '4.5em'];
var i = 0;
var j = 0;

interaval = setInterval(function(){
    // reset my variables
    if(i == colorList.length){
        i=0;
    }
    if(j == fontsize.length){
        j=0;
    }
    // changing the elements
    var myDiv = document.getElementById('changeMe');
    myDiv.style.backgroundColor = colorList[i];
    var myText = document.getElementById('text');
    myText.style.fontSize = fontsize[j];
    // incremeting the counter
    j++;
    i++;
},500);
