function init() {
  moveAmbulance();
  document.getElementById('btnShowTime').addEventListener('click',setClickHandlerTime);
}


let timeBool = false;

function setClickHandlerTime(){
  timeBool = !timeBool;
  toggleTime();
}

function toggleTime(){
  let timeDiv = document.getElementById('currentTime');
  if(timeBool){
    timeDiv.style.display = 'block';
    setInterval(function(){
      let time = new Date();
      let timeToSet = time.getHours() + 'u' + time.getMinutes() + 'min' + time.getSeconds() + 'sec';
      timeDiv.innerHTML = timeToSet;
    },1000);
  } else {
    timeDiv.style.display = 'none';
  }
}

function moveAmbulance() {
  let ambulance = document.getElementById('ambulance');
  let initial = 0;
  setInterval(function() {
    initial += 25;
    var width = window.innerWidth - 80;
    if (initial >= width) {
      initial = 0;
    }
    ambulance.style.left = initial + 'px';
  }, 500);
}

init();
