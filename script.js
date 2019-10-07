$(document).ready(function() {
    //slick
    $('.slider-slick').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        vertical: true,
        verticalSwiping: true
    });
    $('button[role="tab"]').empty();
    $('.slick-dots').prependTo($('.slider-block__nav'));

    //vide
    var instance = $('#video').data('vide');
    // Get video element of the background. Do what you want.
    instance.getVideoObject();
});