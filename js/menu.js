// Open/Close Navbar when screen mobile sized (<600px)
// JQuery is used for this because of slideToggle
// This makes it significantly easier to create a nice looking 
// dropdown menu
$(function() {
    // Take the navbar list
    var el = $('nav ul');

    // When clicking on the element with the id=dropdown
    // Prevent default action of the element,
    // and use slideToggle to display the matched elements
    // in a sliding motion
    $('#dropdown').on('click', function(e) {
        e.preventDefault();
        el.slideToggle();
    });

    // If screen resizes above 600px (my breakpoint), 
    // allow original full size navbar to be seen again
    $(window).resize(function() {
        var width = $(this).width();
        if (width > 600 && el.is(':hidden')) {
            el.removeAttr('style');
        }
    });

    // Once an item in the dropdown has been clicked,
    // Close the dropdown menu, as long as the page is still below 600px
    $('nav li').on('click', function(e) {
        var width = $(window).width();
        if (width < 600) {
            el.slideToggle();
        }
    });
});