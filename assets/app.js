function init() {
  moveAmbulance();
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
