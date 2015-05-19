
var clock = window.setInterval(function DisplayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

  // if (hours < 10){
  //   hours += hours
  // }

  // if (minutes < 10){
  //   minutes += minutes
  // }

  // if (seconds < 10){

  //   seconds += seconds;
  // },1000);



 document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
});
