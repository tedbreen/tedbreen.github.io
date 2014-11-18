(function(){
    jQuery( document ).ready( function() {
        var aboutDiv = document.getElementById("about");
        var aboutLink = document.getElementById("about-link");
        var portfolioDiv = document.getElementById("portfolio");
        var portfolioLink = document.getElementById("portfolio-link");
        var contactDiv = document.getElementById("contact");
        var contactLink = document.getElementById("contact-link");
        var homeLink = document.getElementById("home-link");
        var homeDiv = document.getElementById("home");

        homeDiv.style.display = "block";
        currentDiv = homeDiv;

        changeDiv( aboutLink, aboutDiv );
        changeDiv( contactLink, contactDiv );
        changeDiv( portfolioLink, portfolioDiv );
        changeDiv( homeLink, homeDiv );
        // following lines enable highlighting on portfolio links
        highlightTitle( "#running", jQuery("#running-link")[0] );
        highlightTitle( jQuery("#running-link")[0], jQuery("#running-link")[0] );
        highlightTitle( "#earthquake", jQuery("#earthquake-link")[0] );
        highlightTitle( jQuery("#earthquake-link")[0], jQuery("#earthquake-link")[0] );
        highlightTitle( "#slots", jQuery("#slots-link")[0] );
        highlightTitle( jQuery("#slots-link")[0], jQuery("#slots-link")[0] );
    });
})();