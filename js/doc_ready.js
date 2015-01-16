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
        ["about", "portfolio", "contact"].forEach(function(divName) {
            var divOffset = getOffset(divName);
            scrollEvent( divName, divOffset );
        });
        scrollEvent( "", 0 );

        // following lines enable highlighting on portfolio links
        highlightTitle( "#running", jQuery("#running-link")[0] );
        highlightTitle( jQuery("#running-link")[0], jQuery("#running-link")[0] );
        highlightTitle( "#earthquake", jQuery("#earthquake-link")[0] );
        highlightTitle( jQuery("#earthquake-link")[0], jQuery("#earthquake-link")[0] );
        highlightTitle( "#slots", jQuery("#slots-link")[0] );
        highlightTitle( jQuery("#slots-link")[0], jQuery("#slots-link")[0] );
        highlightTitle( "#doc-analyzer", jQuery("#doc-analyzer-link")[0] );
        highlightTitle( jQuery("#slots-link")[0], jQuery("#doc-analyzer-link")[0] );
    });
})();