$(document).ready( function () {
  updateTime();
});

function updateTime(){

    $("body").css({"transition": "all 0.8s", "-webkit-transition": "all 0.8s"});
    
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    
    if (hours < 10){hours = "0" + hours};
    if (mins < 10){mins = "0" + mins};
    if (secs < 10){secs = "0" + secs};
    
    hours.toString();
    mins.toString();
    secs.toString();
    
    var hex = "#" + hours + mins + secs;
    
    $("#time").html(hours +" : "+ mins +" : "+ secs);
    $("#hex").html(hex);
    
    document.body.style.background = hex;
    
    setTimeout(function(){ updateTime();}, 1000);
}










