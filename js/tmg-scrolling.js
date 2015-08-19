$(document).ready(function() {
    "use strict";

    // Au clic sur les liens à ancre (navigation pricipale)
    $('a[href^="#"], .site-nav').on('click', function (event) {
        var the_id;

        // Because this is relative link
        the_id = $(this).attr("href");

        // Déclenche la fonction animate()
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 1000);

    });
});