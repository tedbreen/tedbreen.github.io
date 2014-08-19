// var navOne = document.getElementById('nav-1');
// var navTwo = document.getElementById('nav-2');
// var navThree = document.getElementById('nav-3');
// var navFour = document.getElementById('nav-4');
// navOne.addEventListener('click', function () {alert('HOME');}, false);
// navTwo.addEventListener('click', function () {alert('ABOUT');}, false);
// navThree.addEventListener('click', function () {alert('PORTFOLIO');}, false);
// navFour.addEventListener('click', function () {alert('CONTACT');}, false);


var els = document.getElementsByClassName('nav-el');

for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('mouseenter', function () {
    this.style.color = "yellow";
    // this.style.fontSize = "1.85em";
  }, false);
  els[i].addEventListener('mouseleave', function () {
    this.style.color = "white";
    // this.style.fontSize = "1.75em";
  }, false);
}