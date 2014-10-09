function changeDiv(link, div) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    currentDiv.style.display = "none";
    div.style.display = "block";
    currentDiv = div;
  });
}

function highlightTitle(div, link) {
  $( div ).hover(
    function() { link.style.color = "yellow" },
    function() { link.style.color = "black" }
  );
}

var homeDiv = document.getElementById("home");
var homeLink = document.getElementById("home-link");
var aboutDiv = document.getElementById("about");
var aboutLink = document.getElementById("about-link");
var portfolioDiv = document.getElementById("portfolio");
var portfolioLink = document.getElementById("portfolio-link");
var contactDiv = document.getElementById("contact");
var contactLink = document.getElementById("contact-link");

changeDiv( aboutLink, aboutDiv );
changeDiv( contactLink, contactDiv );
changeDiv( portfolioLink, portfolioDiv );
changeDiv( homeLink, homeDiv );

highlightTitle( "#running", $("#running-link")[0] );
highlightTitle( $("#running-link")[0], $("#running-link")[0] );
highlightTitle( "#earthquake", $("#earthquake-link")[0] );
highlightTitle( $("#earthquake-link")[0], $("#earthquake-link")[0] );
highlightTitle( "#personal", $("#personal-link")[0] );
highlightTitle( $("#personal-link")[0], $("#personal-link")[0] );