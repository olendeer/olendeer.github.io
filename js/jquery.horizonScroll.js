/**
 * HorizonScroll
 * Version: 1.1.0
 * URL: https://github.com/trgraglia/jquery.horizonScroll.js/
 * Description: This is a jQuery plugin which allows for websites to scroll left and right.
 * Requires: jQuery 1.10.2
 * Optional: jQuery TouchSwipe (http://labs.rampinteractive.co.uk/touchSwipe/)
 * Author: Anthony Graglia
 * Copyright: Copyright 2013 Anthony Graglia
 * License: MIT License
 */

// Semicolon to prevent breakage with concatenation.
(function ($) {
    'use strict';

    $.fn.horizon = function (options, i) {
        if (options === 'scrollLeft') {
            scrollLeft();
        } else if (options === 'scrollRight') {
            scrollRight();
        } else if (options === 'scrollTo') {
            if (isNumeric(i)) {
                scrollTo(+i, $.fn.horizon.defaults.scrollDuration);
            } else {
                scrollToId(i, $.fn.horizon.defaults.scrollDuration);
            }
        } else {
            $.extend($.fn.horizon.defaults, options);

            $.fn.horizon.defaults.sections = this;
            $.fn.horizon.defaults.limit = this.length;
            $.fn.horizon.defaults.i = 0;

            sizeSections();

            $(document).bind('mousewheel DOMMouseScroll', function (e) {
                // Equalize event object.
                var evt = window.event || e;
                // Convert to originalEvent if possible.
                evt = evt.originalEvent ? evt.originalEvent : evt;
                // Check for detail first, because it is used by Opera and FF.
                var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;

                scrollAction(delta);
            }).on('click', '.horizon-next', function () {
                scrollRight();
            }).on('click', '.horizon-prev', function () {
                scrollLeft();
            }).on('click', 'a[href^="#"]', function () {
                var hash = $(this).attr('href');
                if (-1 < hash.indexOf('#')) {
                    scrollToId(hash.split('#')[1], $.fn.horizon.defaults.scrollDuration);
                }
            });

            // if ($.fn.horizon.defaults.swipe) {
            //     $(document).swipe({
            //         // Generic swipe handler for all directions.
            //         swipe: function (event, direction, distance, duration, fingerCount) {
            //             if (scrolls[direction]) {
            //                 scrolls[direction]();
            //             }
            //         },
                    /*click: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     //$(target).click();
                     },
                     tap: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     $(target).click();
                     },*/
                    // Default is 75px, set to 0 for demo so any distance triggers swipe
            //         threshold: 75
            //     });
            // }

            $(window).on('resize', function () {
                sizeSections();
            }).on('keydown', function (e) {
                if (scrolls[e.which]) {
                    scrolls[e.which]();
                    e.preventDefault();
                }
            });

            return this;
        }
    };

    $.fn.horizon.defaults = {
        scrollTimeout: null,
        scrollEndDelay: 50,
        scrollDuration: 400,
        i: 0,
        limit: 0,
        docWidth: 0,
        sections: null,
        swipe: false,
        fnCallback: function (i) {
        }
    };

    function isNumeric(num) {
        return !isNaN(num)
    }

    function scrollToId(id, speed) {
        var i = -1;
        $.fn.horizon.defaults.sections.each(function (index, element) {
            if (id === $(this).attr('id')) {
                i = index;
            }
        });

        if (0 <= i) {
            scrollTo(i, $.fn.horizon.defaults.scrollDuration);
        }
    }
    var SlidesCoupons = ['grey' , 'azure', 'yellow', 'white', 'black'];
    var BackgroudColorsCoupons = ['#E0DCDC', '#93E1ED', '#FFD455', '#FFFFFF', '#000000'];
    var HoverBackground = ['#C3BFBF','#6CE7FA','#F2B90F','#F5F5F5','#444444'];
    var ColorsCoupons = ['#E0DCDC', '#93E1ED', '#FFD455', '#F9F9F9', '#030303'];
    var TextCoupons = ['Серый купон', 'Лазурный купон', 'Янтарный купон', 'Уайт купон', 'Блэк купон'];
    // HTML animate does not work in webkit. BODY does not work in opera.
    // For animate, we must do both.
    // http://stackoverflow.com/questions/8790752/callback-of-animate-gets-called-twice-jquery
    var activeSlide = 0;
    var coupon = 0;
    var scrollTo = function (index, speed) {
        if (index > ($.fn.horizon.defaults.limit - 1) || index < 0) {
            console.log('Scroll where? I think you want me to go out of my limits. Sorry, no can do.');
            return;
        }

        // console.log('Scroll to: ' + index);
        $.fn.horizon.defaults.i = index;
        activeSlide = index;
        UpdateButton(index);
        UpdateIllustration(index)
        var $section = $($.fn.horizon.defaults.sections[index]);
        $('html,body').animate({scrollLeft: $section.offset().left}, speed, 'swing', $.fn.horizon.defaults.fnCallback(index));

        if (index === 0) {
            $('.horizon-prev').hide();
            $('.horizon-next').show();
        } else if (index === $.fn.horizon.defaults.limit - 1) {
            $('.horizon-prev').show();
            $('.horizon-next').hide();
        } else {
            $('.horizon-next').show();
            $('.horizon-prev').show();
        }
    };
    $(document).on('click', '.next-coupon', function () {
        if(activeSlide == 4)
        {
            activeSlide = -1;
        }
        coupon = SlidesCoupons[activeSlide + 1];
        $(document).horizon('scrollTo', coupon);
    });
    function hover(index, bool)
    {
        if(index == 4)
        {
            index = -1;
        }
        if(bool)
        {
            $('.next-coupon').animate({
                backgroundColor : HoverBackground[index + 1]
            },50);
        }
        else
        {
            $('.next-coupon').animate({
                backgroundColor : BackgroudColorsCoupons[index + 1]
            },50);
        }
    }
    var mouseenter = function()
    {
        if(activeSlide != 4)
        {
            $('.next-coupon > svg').css({
                'transform': 'translate(calc(0.1em + 0.5vh + 1.5vw))' 
            });
        }
        hover(activeSlide, true);    
    }
    var mouseleave = function()
    {
        if(activeSlide != 4)
        {
            $('.next-coupon > svg').css({
                'transform': 'translate(-0.4em)' 
            });
        }
        hover(activeSlide, false);
    }
    $('.next-coupon').bind('mouseenter', mouseenter);
    $('.next-coupon').bind('mouseleave', mouseleave);
    function UpdateIllustration(index)
    {
        $('.illustration > svg > g > g > path:nth-child(3)').css({
            'fill' : ColorsCoupons[index]
        });
    }
    function UpdateButton(index)
    {
        $('.colors-coupon > div').removeClass('activecolor');
        $('.' + SlidesCoupons[index]).addClass('activecolor');
        if(index == 4)
        {
            index = -1;
            $('.next-coupon > svg').css({
                'transform' : 'rotate(180deg)'
            }); 
        }
        else if($('.next-coupon > svg').css('transform') == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)')
        {
            $('.next-coupon > svg').css({
                'transform' : 'rotate(360deg)'
            });  
            $('.next-coupon').bind("mouseenter", mouseenter);
            $('.next-coupon').bind("mouseleave", mouseleave); 
        }
        if(index == 2)
        {
            $('.next-coupon').css({
                'border':'2px solid #2196F3'
            });
            $('.next-coupon > span').animate({
                color :'#2196F3'
            },200);
            $('.next-coupon > svg > path').css({
                'fill' :'#2196F3'
            });
        }
        else
        {
            $('.next-coupon').css({
                'border':'none'
            });
            $('.next-coupon > span').animate({
                color :'#fff'
            },200);
            $('.next-coupon > svg > path').css({
                'fill' :'#fff'
            });
        }
        if(index == 3)
        {
            $('.illustration > svg > g > g > text').css({
                'fill' : '#2196F3'
            });
        }
        else
        {
            $('.illustration > svg > g > g > text').css({
                'fill' : '#fff'
            });
        }
            $('.next-coupon').animate({
                backgroundColor: BackgroudColorsCoupons[index + 1]
            },300);
            $('.next-coupon > span').text(TextCoupons[index + 1]);
        if($('.next-coupon').is(':hover'))
        {
            hover(activeSlide, true);
        }
    }
    var scrollLeft = function () {
        // console.log('Scroll left');
        var i2 = 0;
        if($('.champions').hasClass('block-scroll') == true || $('.lots').hasClass('block-scroll') == true)
        {
            // console.log('block scroll');
        }
        else
        {
            i2 = $.fn.horizon.defaults.i - 1;
            if (i2 > -1) {
                scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
            }
        }
    };

    var scrollRight = function () {
        // console.log('Scroll right');
        var i2 = 0;
        if($('.champions').hasClass('block-scroll') == true || $('.lots').hasClass('block-scroll') == true)
        {
            // console.log('block scroll');
        }
        else
        {
            i2 = $.fn.horizon.defaults.i + 1;
            if (i2 < $.fn.horizon.defaults.limit) {
                scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
            }
        }
    };

    // Executes on 'scrollbegin'.
    var scrollBeginHandler = function (delta) {
        // Scroll up, Scroll down.
        if (delta > 1) {
            scrollLeft();
        } else if (delta < -1) {
            scrollRight();
        }
    };

    // Executes on 'scrollend'.
    var scrollEndHandler = function () {
        $.fn.horizon.defaults.scrollTimeout = null;
    };

    var scrollAction = function (delta) {
        if ($.fn.horizon.defaults.scrollTimeout === null) {
            scrollBeginHandler(delta);
        } else {
            clearTimeout($.fn.horizon.defaults.scrollTimeout);
        }

        $.fn.horizon.defaults.scrollTimeout = setTimeout(scrollEndHandler, $.fn.horizon.defaults.scrollEndDelay);
    };

    var sizeSections = function () {
        var iInnerWidth = $(window).innerWidth();

        // Store window width and assign it to each panel or section.
        $.fn.horizon.defaults.docWidth = iInnerWidth;
        $.fn.horizon.defaults.sections.each(function () {
            $(this).width(iInnerWidth);
        });

        // Set the page to be a width large enough to include all panels.
        $('html').width($.fn.horizon.defaults.limit * iInnerWidth);

        // Scroll to current section without animation.
        scrollTo($.fn.horizon.defaults.i, 0);
    };

    var scrolls = {
        'right': scrollLeft,
        'down': scrollLeft,
        'left': scrollRight,
        'up': scrollRight,
        37: scrollLeft,
        38: scrollLeft,
        39: scrollRight,
        40: scrollRight
    };
})
(jQuery);
