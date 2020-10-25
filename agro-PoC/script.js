$(document).ready(function () {

    // Show tabs on hover instead of click
    $('.shop-dropdown .nav-link')
        .hoverIntent(function () {
            $(this).tab('show');
        });

    // Banner typing-text effect
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
    });

    // Countdown clock
    const deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
    initializeClock('.countdown-clock', deadline);



});