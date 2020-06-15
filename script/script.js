// const particlesJS = require('particle.js');
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

document.getElementsByTagName("body").onscroll = function () {myFunction()};

function myFunction() {
  var nav = document.getElementsByClassName("nav-bar");
  nav.style.boxShadow = "b0px 13px 34px rgba(0, 0, 0, 0.1)";
}