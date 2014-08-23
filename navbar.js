var divNav1 = document.getElementById("nav-1");
var divNav2 = document.getElementById("nav-2");
var divNav3 = document.getElementById("nav-3");
var divNav4 = document.getElementById("nav-4");

var divHome = document.getElementById("div-home");
var parentDiv = divHome.parentNode;
var divAbout = document.createElement("div");
divAbout.setAttribute("id", "div-about");
var divPortfolio = document.createElement("div");
divPortfolio.setAttribute("id", "div-portfolio");
var divContact = document.createElement("div");
divContact.setAttribute("id", "div-contact");

var divHomeContent = divHome.innerText;
var divAboutContent = document.createTextNode("My bio here");
var divPortfolioContent = document.createTextNode("Look at these");
var divContactContent = document.createTextNode("Call me babe");

var navDivs = [divNav1, divNav2, divNav3, divNav4];
var contents = [
  divHomeContent, divAboutContent, divPortfolioContent, divContactContent
];

var colors = function(el) {
  el.addEventListener('mouseenter', function () {
    this.style.color = "yellow";
  }, false);
  el.addEventListener('mouseleave', function () {
    this.style.color = "white";
  }, false);
  // trying to add click event to change divs
  // el.addEventListener('click', function() {
  //   this.appendChild(contents[i]);
  // }, false);
};

for (var i = 0; i < navDivs.length; i++) { colors(navDivs[i]) }