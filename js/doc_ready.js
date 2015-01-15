(function(){
    function highlightTitle(div, link) {
      jQuery( div ).hover(
        function() { link.style.color = "yellow" },
        function() { link.style.color = "black" }
      );
    }
    
    jQuery( document ).ready( function() {
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