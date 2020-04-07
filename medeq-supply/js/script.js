(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 110) {
                siteHeader.addClass('fixed-header');
                scrollLink.addClass('open');
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.removeClass('open');
            }
        }
    }

    headerStyle();


    // dropdown menu
    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');

    $(window).on('resize', function() {
        navcollapse.children('ul').hide();
    });

    navcollapse.hover(function() {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(true, false, true).slideToggle(0);
        }
    });


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }


    //Mobile Navigation
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box').mCustomScrollbar();
        $('.info-sidebar .xs-sidebar-widget').mCustomScrollbar();

    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }


    // testimonial-carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 6,
            nav: false,
            smartSpeed: 3000,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1200: {
                    items: 1
                }

            }
        });
    }


    //three-column-carousel
    if ($('.three-column-carousel').length) {
        $('.three-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    // Four Item Carousel
    if ($('.four-item-carousel').length) {
        $('.four-item-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    // partners Carousel
    if ($('.partners-carousel').length) {
        $('.partners-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    //Main Slider Carousel
    if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 6000,
            navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Main Slider Carousel
    if ($('.main-slider-carousel-2').length) {
        $('.main-slider-carousel-2').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 6000,
            navText: ['<span class="fas fa-angle-double-left"></span>', '<span class="fas fa-angle-double-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //two-column-carousel
    if ($('.two-column-carousel').length) {
        $('.two-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                }
            }
        });
    }


    //single-item-carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="flaticon-slim-left"></span>', '<span class="flaticon-slim-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }


    //Product Tabs
    if ($('.project-tab').length) {
        $('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).hasClass('actve-tab')) {
                return false;
            } else {
                $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
                $(target).addClass('active-tab');
            }
        });
    }


    //project-carousel
    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class=""></span>', '<span class=""></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }



    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function() {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }


    // FLYOUT SEARCH BAR
    jQuery(".header-flyout-searchbar i").on("click", function() {
        jQuery("body").toggleClass("flyout-searchbar-active");
    });
    jQuery(".flyout-search-close").on("click", function() {
        jQuery("body").removeClass("flyout-searchbar-active");
    });


    // ------------------------------- AOS Animation
    if ($("[data-aos]").length) {
        AOS.init({
            duration: 1000,
            mirror: true
        });
    }


    //11.progressBarConfig
    function progressBarConfig() {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function() {
                var Self = $(this);
                Self.appear(function() {
                    var progressValue = Self.data('value');

                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 100);

                    Self.find('span.value').countTo({
                        from: 0,
                        to: progressValue,
                        speed: 100
                    });
                });
            })
        }
    }


    //Sortable Masonary with Filters
    function enableMasonry() {
        if ($('.sortable-masonry').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.filter-btns');

            $container.isotope({
                filter: '*',
                masonry: {
                    columnWidth: '.masonry-item.small-column'
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });


            // Isotope Filter 
            $filter.find('li').on('click', function() {
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.on('resize', function() {
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            });


            var filterItemA = $('.filter-btns li');

            filterItemA.on('click', function() {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

    enableMasonry();


    // Select menu 
    function selectDropdown() {
        if ($(".selectmenu").length) {
            $(".selectmenu").selectmenu();

            var changeSelectMenu = function(event, item) {
                $(this).trigger('change', item);
            };
            $(".selectmenu").selectmenu({
                change: changeSelectMenu
            });
        };
    }


    //Price Range Slider
    if ($('.price-range-slider').length) {
        $(".price-range-slider").slider({
            range: true,
            min: 0,
            max: 600,
            values: [0, 350],
            slide: function(event, ui) {
                $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }


    // Product Carousel Slider
    if ($('.single-shop .image-carousel').length && $('.single-shop .thumbs-carousel').length) {

        var $sync1 = $(".single-shop .image-carousel"),
            $sync2 = $(".single-shop .thumbs-carousel"),
            flag = false,
            duration = 500;

        $sync1
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = false;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                nav: true,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 3,
                        autoWidth: false
                    },
                    400: {
                        items: 3,
                        autoWidth: false
                    },
                    600: {
                        items: 3,
                        autoWidth: false
                    },
                    900: {
                        items: 3,
                        autoWidth: false
                    },
                    1000: {
                        items: 3,
                        autoWidth: false
                    }
                },
            })

            .on('click', '.owl-item', function() {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }


    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }


    //journey-carousel
    if ($('.journey-carousel').length && $('.journey-carousel').length) {

        var $sync3 = $(".journey-carousel"),
            $sync4 = $(".years-thumbs"),
            flag = false,
            duration = 500;

        $sync3
            .owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'zoomIn',
                loop: true,
                items: 1,
                margin: 0,
                nav: true,
                navText: ['<span class="fas fa-arrow-up"></span>', '<span class="fas fa-arrow-down"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = false;
                    $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync4
            .owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'zoomIn',
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 10000,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: ['<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>'],
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                },
            })

            .on('click', '.owl-item', function() {
                $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
    }


    if ($('.timer').length) {
        $(function() {
            $('[data-countdown]').each(function() {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    $this.html(event.strftime('%D days %H:%M:%S'));
                });
            });
        });

        $('.cs-countdown').countdown('').on('update.countdown', function(event) {
            var $this = $(this).html(event.strftime('<div class="count-col"><h6>days</h6><span>%D</span></div> <div class="count-col"><h6>Hours</h6><span>%H</span></div> <div class="count-col"><h6>Minutes</h6><span>%M</span></div> <div class="count-col"><h6>Seconds</h6><span>%S</span></div>'));
        });
    }


    /*	=========================================================================
    When document is Scrollig, do
    ========================================================================== */

    jQuery(document).on('ready', function() {
        (function($) {
            // add your functions
            progressBarConfig();
            selectDropdown();
        })(jQuery);
    });



    /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });



    /* ==========================================================================
   When document is loaded, do
   ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
        enableMasonry();
    });



})(window.jQuery);