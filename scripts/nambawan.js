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



// run slider
    $('.gallery').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<i class="fas fa-angle-left slick-arrow-left"></i>',
        nextArrow: '<i class="fas fa-angle-right slick-arrow-right"></i>'

    });

});