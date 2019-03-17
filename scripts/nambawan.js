$(document).ready(function() {

    $(window).scroll(function() {
        $('.nav-section-item').each(function() {
            let $nav_section = $(this),
                $offset_nav = $nav_section.offset();

            // see active section
            if (($offset_nav.top) > $('.section-' + $(this).attr('data-section')).offset().top) {
                $('.nav-section-item').removeClass('active');
                $nav_section.addClass('active');
            }

           // see bg in section
            if (($offset_nav.top) > $('.section-2').offset().top) {
                $nav_section.addClass('inverse-color');
            } else {
                $nav_section.removeClass('inverse-color');
            }

        });
    });

    $('.nav-section-item, .btn').click(function() {
        $('html, body').animate({
            scrollTop: $('.section-' + $(this).attr('data-section')).offset().top
        }, 800);
    });

// init active link
    $(window).scroll();


// click play video
    $('.ic-play').click(function () {
        $('#video').get(0).play();
        $('.video').addClass('video-play');
    });

    $('.ic-pause').click(function () {
        $('#video').get(0).pause();
        $('.video').removeClass('video-play');
    });


// run sliders
    $('.gallery').each(function () {
        let $gallery = $(this),
            $slides = $('.slides', $gallery),
            $slide_count = $('.slide-count', $gallery);

        $slides.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            let i = (currentSlide ? currentSlide : 0) + 1;
            $slide_count.html('<strong>' + i + '</strong>' + '&nbsp;/&nbsp;' + slick.slideCount);
        });

        $slides.slick({
            //dots: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<i class="fas fa-angle-left slick-arrow-left"></i>',
            nextArrow: '<i class="fas fa-angle-right slick-arrow-right"></i>'
        });
    });

});