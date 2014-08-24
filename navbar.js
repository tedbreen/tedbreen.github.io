var divNav1 = document.getElementById("nav-1");
var divNav2 = document.getElementById("nav-2");
var divNav3 = document.getElementById("nav-3");
var divNav4 = document.getElementById("nav-4");

var currentDiv = document.getElementById("div-home");

var homeContent = document.createTextNode("Great stuff here");
var aboutContent = document.createTextNode("My bio here");
var portfolioContent = document.createTextNode("Look at these");
var contactContent = document.createTextNode("Call me, babe");

currentDiv.appendChild(homeContent);
var currentContent = homeContent;

var navDivs = [ divNav1, divNav2, divNav3, divNav4 ];
var navContents = [
  homeContent, aboutContent, portfolioContent, contactContent
];

var navbarColors = function(el) {
  el.addEventListener('mouseenter', function () {
    this.style.color = "yellow";
  }, false);
  el.addEventListener('mouseleave', function () {
    this.style.color = "white";
  }, false);
};

var changeContent = function(el, content) {
  el.addEventListener('click', function () {
    currentDiv.removeChild(currentContent);
    currentDiv.appendChild(content);
    currentContent = content;
  }, false);
}

for (var i = 0; i < navDivs.length; i++) {
  navbarColors( navDivs[i] );
  changeContent( navDivs[i], navContents[i] );
}



// divNav1.addEventListener('click', function () {
//   currentDiv.removeChild(currentContent);
//   currentDiv.appendChild(homeContent);
//   currentContent = homeContent;
// }, false);

// divNav2.addEventListener('click', function () {
//   currentDiv.removeChild(currentContent);
//   currentDiv.appendChild(aboutContent);
//   currentContent = aboutContent;
// }, false);

// divNav3.addEventListener('click', function () {
//   currentDiv.removeChild(currentContent);
//   currentDiv.appendChild(portfolioContent);
//   currentContent = portfolioContent;
// }, false);

// divNav4.addEventListener('click', function () {
//   currentDiv.removeChild(currentContent);
//   currentDiv.appendChild(contactContent);
//   currentContent = contactContent;
// }, false);