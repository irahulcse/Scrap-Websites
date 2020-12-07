jQuery(document).ready(function($) {

    /* STICKY HEADER */
    const normalNav = function() {

        const normalNavTop = $("#wrapper-navbar").offset().top;

        const scrollTop = $(window).scrollTop();
        
        if($("body").hasClass("page-template-lending")) {
        	if (scrollTop > 0) {
                $("body").addClass("kb-sticky");
            } else {
                $("body").removeClass("kb-sticky");
            }
		} else {
            if (scrollTop > 90) {
                $("body").addClass("kb-sticky");
            } else {
                $("body").removeClass("kb-sticky");
            }
        }
    };

    $(window).scroll(function() {
        normalNav();
    });
    /* /STICKY HEADER */

    /* PLAY YOUTUBE VIDEO */
    $('.play-video').on('click', function(event) {
        event.preventDefault();

        const videoUrl = $(this).attr("data-url");

        $("body").addClass("kb-video-playing");
        $(".kb-video-wrapper").addClass("kb-play-video");
        $(".kb-video").addClass("kb-video-active");

        const newSrc = videoUrl.replace("autoplay=0", "autoplay=1");
        $(".kb-video-active").attr("src", newSrc);

        $(".carousel").carousel('pause');
    });
    /* /PLAY YOUTUBE VIDEO */


    /* STOP YOUTUBE VIDEO */
    $('.kb-video-wrapper').on('click', function() {
        $("body").removeClass("kb-video-playing");
        const oldSrc = $(".kb-video-active").attr("src");
        const newSrc = oldSrc.replace("autoplay=1", "autoplay=0");
        $(".kb-video-active").attr("src", newSrc);
        $(".kb-video-wrapper").removeClass("kb-play-video");
        $(".kb-video").removeClass("kb-video-active").removeAttr("src");
        $('.carousel').carousel('cycle');
    });
    /* /STOP YOUTUBE VIDEO */


    /* MOBILE MENU ACTIVE */
    $("button.navbar-toggler").on("click", function() {
        $("body").toggleClass("kb-menu-active");
    });
    /* /MOBILE MENU ACTIVE */


    /* SMOOTH SCROLL TO A DIV */
    $(".kb-smooth-scroll").on("click", function(event) {

        const windowWidth = $(window).width();
        const headerHeight = $("#wrapper-navbar").height();

        const smoothScrollAttr = $(this).attr("href");
        $this = $(this);
        if (typeof smoothScrollAttr !== typeof undefined && smoothScrollAttr !== false) {
            $smoothScrollTarget = $this.attr("href");
        } else {
            $smoothScrollTarget = $this.find("a").attr("href");
        }

        if ($smoothScrollTarget.length) {
            event.preventDefault();

            if (windowWidth > 767) {
                $("html, body").animate({
                    scrollTop: $($smoothScrollTarget).offset().top - headerHeight
                }, 1000);
            } else {
                $("html, body").animate({
                    scrollTop: $($smoothScrollTarget).offset().top - 65
                }, 1000);
            }
        }
    });
    /* /SMOOTH SCROLL TO A DIV */


    /* CLOSE MENU ON CLICK OF GET THE APP BUTTON */
    $(".menu-app a").on("click", function() {
        $("button.navbar-toggler").trigger("click");
    });
    /* /CLOSE MENU ON CLICK OF GET THE APP BUTTON */


    /* CHANGE SITE LOGO FOR CAREERS PAGE */
    if ($("body").hasClass("page-template-careers")) {
        $(".navbar-brand").find("img").attr("src", "/wp-content/uploads/2020/01/Site-icon-light.svg");
    }
    /* /CHANGE SITE LOGO FOR CAREERS PAGE */

    // $("input.app-input").val("+91 ");

    $("button.app-submit").click(function(e) {
        e.preventDefault();
        formelement = $(this);
        phonenumber = $(this).siblings("input.app-input").val();
        console.log(phonenumber);

        $.ajax({
            type: "post",
            dataType: "json",
            url: "https://khatabook.com/wp-admin/admin-ajax.php",
            data: { action: "send_sms", number: phonenumber },
            success: function(response) {
                if (response.type == "success") {
                    formelement.parent().removeClass("smserror");
                    $(".app-thankyou-modal-wrapper").show();
                    $(".app-modal-wrapper").hide();
                } else {
                    formelement.parent().addClass("smserror");
                }
            }
        })

    })

    /* GET THE APP MODAL */
    $(".menu-app a").on("click", function(event) {
        event.preventDefault();
        $(".app-modal-wrapper").show();
    });

    $(".app-modal-cross").on("click", function(event) {
        event.preventDefault();
        $(".app-modal-wrapper").hide();
    });

    $(".app-thankyou-modal-cross").on("click", function(event) {
        event.preventDefault();
        $(".app-thankyou-modal-wrapper").hide();
    });

    $(".app-done").on("click", function(event) {
        event.preventDefault();
        $(".app-thankyou-modal-wrapper").hide();
    });
    /* /GET THE APP MODAL */

    document.addEventListener('wpcf7mailsent', function(event) {

        if ('924' == event.detail.contactFormId ) {
            location = 'https://api.whatsapp.com/send?phone=+919606800800&text=Namaskar,%20Mujhe%20KhataBook%20me%20Free%20QR%20order%20karna%20hai!';
        }

    }, false);

    /* LANGUAGE BLOCK */
    $(".language-toggle").click(function() {

        $('.language-block').toggleClass('show-language');
        $('body').toggleClass('opacity-low');

    });
    $(".language-close").click(function() {

        $('.language-block').removeClass('show-language');
        $('body').removeClass('opacity-low');

    });
	
	$(".single-language").click(function(){
		var language = $(this).find("p").text();
		window.location.href = location.protocol + '//' + location.host + location.pathname + "?lang=" + language;
	});
    /* LANGUAGE BLOCK */

});