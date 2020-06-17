

particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

var name = "Tolani_";
var wo = "";
var i = 0;
var brand = document.getElementById("nav-brand");
var bann = document.getElementById("word");
function typewriter () {
  if (i < name.length) {
    brand.innerHTML += name.charAt(i);
    i++;
    setTimeout(typewriter, 120);
  }
}

function brandwriter () {
  if (i < wo.length) {
    bann.innerHTML += wo.charAt(i);
    i++;
    setTimeout(typewriter, 120);
  }
}


var navbar = document.getElementById("nav-bar");

function shadow() {
  navbar.style.boxShadow = "0px 13px 34px #f1f1f1";
}