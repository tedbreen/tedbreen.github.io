(function(){
    function highlightTitle(div, link) {
      jQuery( div ).hover(
        function() { link.style.color = "yellow" },
        function() { link.style.color = "black" }
      );
    }

    function scrollEvent(divName, number) {
        jQuery('a[href=#' + divName + ']').click(function(event) {
            event.preventDefault();
            jQuery("body").animate({ scrollTop: number });
        });
    }

    function getOffset(divName) {
        var value = jQuery("#" + divName).offset().top;
        return value;
    }

    jQuery( document ).ready( function() {
        // enable smooth scrolling for link navigation
        var divOffset = getOffset('contact');
        scrollEvent('contact', divOffset);
        scrollEvent( "", 0 );
    });
})();