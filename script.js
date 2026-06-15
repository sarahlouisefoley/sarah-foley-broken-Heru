
var spinWrap = document.getElementById('spinWrap');
var type = document.getElementById('type');


var rotation = 0;
var spinning = false;

// this function keeps rotating the heru
// found requestAnimationFrame online - it makes the animation smooth
function spinHeru() {
  if (spinning) {
    rotation = rotation + 2;
    spinWrap.style.transform = 'rotateY(' + rotation + 'deg)';
    requestAnimationFrame(spinHeru);
  }
}

// start spinning when mouse goes over it
spinWrap.addEventListener('mouseenter', function() {
  spinning = true;
  spinHeru();
});

// stop spinning when mouse leaves
spinWrap.addEventListener('mouseleave', function() {
  spinning = false;
});

// same thing but for mobile touch
spinWrap.addEventListener('touchstart', function() {
  spinning = true;
  spinHeru();
});

spinWrap.addEventListener('touchend', function() {
  spinning = false;
});


// clicking the type makes it crack
// toggle adds the class if its not there, removes it if it is
type.addEventListener('click', function() {
  type.classList.toggle('cracked');
});