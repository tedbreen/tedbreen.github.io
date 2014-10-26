function changeDiv(link, div) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    currentDiv.style.display = "none";
    div.style.display = "block";
    currentDiv = div;
  });
}

function highlightTitle(div, link) {
  jQuery( div ).hover(
    function() { link.style.color = "yellow" },
    function() { link.style.color = "black" }
  );
}