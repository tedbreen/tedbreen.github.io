function highlightTitle(div, link) {
  jQuery( div ).hover(
    function() { link.style.color = "yellow" },
    function() { link.style.color = "black" }
  );
}