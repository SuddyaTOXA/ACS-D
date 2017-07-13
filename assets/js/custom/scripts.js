jQuery(function($){
    var body = $('body'),
        header = $('#header');

    // header fade
    $(function() {
        setTimeout(function(){
            body.addClass('show');
        },400);
        setTimeout(function(){
            if (!body.hasClass('without-padding')) {
                header.addClass('show-bg');
            }
            header.addClass('show');
        },800);
    });

    //header background on scroll
    $(function() {
        $(window).on('load scroll', function () {
            var st2 = $(this).scrollTop();

            if (st2 > 0) {
                body.addClass('scrolling');
            } else {
                body.removeClass('scrolling');
            }
        });
    });

    $(document).ready(function() {
        //for burger menu
        $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function () {
            $('.mobile-menu-toggle').toggleClass('active');
            $('.mobile-menu-wrap').toggleClass('showing');
            $(document.body).toggleClass('overflow');
        });

        var swiper = new Swiper('.swiper-banner', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            autoHeight: true
        });


        var swiper = new Swiper('.swiper-what-we-do', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            autoHeight: true
        });

        /*! Fades out the whole page when clicking links */
        $('a:not([target="_blank"]):not([href^="tel"]):not([href^="mailto"]):not("#fancybox-close")').click(function(e) {
            e.preventDefault();

            if ( !$(this).hasClass('fancybox') && !$(this).hasClass('popup') ) {
                var hash = $(this).attr('href'),
                    newLocation = this.href;

                console.log(hash);
                console.log(newLocation);

                if (hash != '#' || !(hash)) {
                    header.removeClass('show');
                    setTimeout(function(){
                        body.removeClass('show');
                    },400);
                    setTimeout(function(){
                        window.location = newLocation;
                    },800);
                }
            }
        });
    });
});