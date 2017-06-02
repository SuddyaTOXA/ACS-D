$(function(){
	// header fade
	$(function() {
	   var header = $('#header'),
           body = $('body');
        setTimeout(function(){
            body .addClass('show');
        },400);
	   setTimeout(function(){
		   if (!($('body').hasClass('without-padding'))) {
			   header.addClass('show-bg');
		   }
			header.addClass('show');
	   },800);
	});

	//header background on scroll
    $(function() {
        var header = $('#header');
        $(window).on('scroll', function () {
            var st2 = $(this).scrollTop();

            if (st2 > 0) {
                // console.log(st2);
                header.addClass('scrolling');

            } else {
                header.removeClass('scrolling');
            }
        });
    });

    // for smooth scroll
    // if ( $('a').is('.smooth-scroll') ) {
    //     smoothScroll.init({
    //         selector: '.smooth-scroll', // Selector for links (must be a class, ID, data attribute, or element tag)
    //         speed: 500, // Integer. How fast to complete the scroll in milliseconds
    //         easing: 'easeInQuad', // Easing pattern to use
    //         offset: 130 // Integer. How far to offset the scrolling anchor location in pixels
    //     });
    // }

	$(document).ready(function() {
        //for burger menu
        $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function () {
            $('.mobile-menu-toggle').toggleClass('active');
            $('.mobile-menu-wrap').toggleClass('showing');
            $(document.body).toggleClass('overflow');
        });

        // for header-fixed padding
        // $(window).on('load resize', function() {
        //     if ($('div').hasClass('header-with-bg')) {
        //        var headerHeight = $('#header').outerHeight(),
        //            widthWin = $(window).width();
        //        if (widthWin > 991) {
        //            $('.wrapper').css('padding-top', headerHeight + 72);
        //        } else {
        //            $('.wrapper').css('padding-top', headerHeight + 22);
        //        }
        //     }
        // });

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
        $('a').click(function(e) {
            var header = $('#header'),
                body = $('body');

            e.preventDefault();
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
        });

        // /*! Fades out the whole page when clicking links */
        // $('a').click(function(e) {
        //     e.preventDefault();
        //     newLocation = this.href;
        //     $('body').fadeOut('slow', newpage);
        // });
        // function newpage() {
        //     window.location = newLocation;
        // }
    });
});