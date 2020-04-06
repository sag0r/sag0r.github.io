/*================
 Template Name: nCovid Corona virus Medical Prevention HTML Template
 Description: All type of virus, medical Prevention  Html  template.
 Version: 1.0
 Author: https://themeforest.net/user/themetags
=======================*/

// TABLE OF CONTENTS
// 1. preloader
// 2. fixed navbar
// 3. back to top
// 4. magnify popup video
// 5. custom counter js with scrolling
// 6. our clients logo carousel
// 7. product carousel
// 8. wow js
// 9. countdown one
// 10. Datatable


jQuery(function($) {

    'use strict';

    // 1. preloader
    $(window).ready(function() {
        $('#preloader').delay(200).fadeOut('fade');
    });

    // 2. fixed navbar
    $(window).on('scroll', function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 60) {
            $('.navbar').addClass('affix');
            $('.scroll-to-target').addClass('open');
        } else {
            $('.navbar').removeClass('affix');
            $('.scroll-to-target').removeClass('open');
        }
    });

    // 3. back to top
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);

        });
    }


    // 4. magnify popup video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // 5. custom counter js with scrolling
    var isFirstTime = true;
    var interval = null;
    var countSelector = $('.single-counter > h3, .single-card > h3');
    if (countSelector.length) {
        var startingTop = countSelector.offset().top - window.innerHeight;
        if (startingTop > 0) {
            $(window).on('scroll', function() {
                if (isFirstTime && $(window).scrollTop() > startingTop) {
                    startCounting();
                    isFirstTime = false;
                }
            });
        } else {
            startCounting();
        }
    }

    /**
     * Get the increment value
     * @param value
     * @returns {number}
     */
    function incrementValue(value) {
        var incVal = 0;
        if (Math.ceil(value / 2) <= 5) { // upto 10
            incVal = 1;
        } else if (Math.ceil(value / 10) <= 10) { // up to 100
            incVal = 10;
        } else if (Math.ceil(value / 100) <= 10) { // up to 1000
            incVal = 25;
        } else if (Math.ceil(value / 100) <= 100) { // up to 10000
            incVal = 50;
        } else if (Math.ceil(value / 1000) <= 100) { // up to 100000
            incVal = 150;
        } else {
            incVal = 500;
        }
        return incVal;
    }

    /**
     * To start count
     * @param counters all selectors
     * @param start int
     * @param value int
     * @param id int
     */
    function count(counters, start, value, id) {
        var localStart = start;
        var inc = incrementValue(value);
        interval = setInterval(function() {
            if (localStart < value) {
                localStart = localStart + inc;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }

    /**
     * Start the count
     */
    function startCounting() {
        var counters = $(".single-counter > h3, .single-card > h3");
        var countersQuantity = counters.length;
        var counter = [];

        // get al counts from HTML count
        for (var i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        // calling all count function
        for (var j = 0; j < countersQuantity; j++) {
            count(counters, 0, counter[j], j);
        }
    }



    // 6. our clients logo carousel
    $('.clients-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        autoplaySpeed: 4500,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            600: {
                items: 4
            },
            800: {
                items: 5
            },
            1200: {
                items: 6
            }

        }
    });


    // 7. product carousel
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            991: {
                items: 3
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });


    // 8. wow js
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }

    wowAnimation()

    // 9. countdown one
    $('#clock').countdown('2022/01/30', function(event) {
        $(this).html(event.strftime('' +
            '<div class="row">' +
            '<div class="col">' +
            '<h2 class="mb-1">%-D</h2>' +
            '<h5>Day%!d</h5>' +
            '</div>' +
            '<div class="col">' +
            '<h2 class="mb-1">%H</h2>' +
            '<h5>Hours</h5>' +
            '</div>' +
            '<div class="col">' +
            '<h2 class="mb-1">%M</h2>' +
            '<h5>Minutes</h5>' +
            '</div>' +
            '<div class="col">' +
            '<h2 class="mb-1">%S</h2>' +
            '<h5>Seconds</h5>' +
            '</div>' +
            '</div>'));
    });

    //  10. DataTable
    $('#outBreakTable').DataTable({});

}); // JQuery end