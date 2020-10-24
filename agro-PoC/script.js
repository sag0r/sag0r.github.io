$(document).ready(function () {

    $('.shop-dropdown .nav-link')
        .hoverIntent(function () {
            $(this).tab('show');
        });

    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
    });



});