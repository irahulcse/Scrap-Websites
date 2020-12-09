
// smooth scrolling
    jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });


// lightbox controls for linked Vimeo videos
jQuery(".vimeo-start").click(function(){
  var video_id = jQuery(this).attr("data-id");
  var video_lang = jQuery(this).attr("data-lang");
  var embed_link = "//player.vimeo.com/video/"+video_id+"?api=1&amp;player_id=player_1&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933&amp;autoplay=1&amp;texttrack="+video_lang;
  jQuery(".vimeo-lay").fadeIn(400);
  jQuery(".vimeo-lay iframe").attr("src", embed_link);
});

jQuery(".vimeo-close").click(function() {
  jQuery(".vimeo-lay").fadeOut(300);
  jQuery(".vimeo-lay iframe").attr("src", "about:blank");
});


// Policy Center - Privacy menu toggle controls
    jQuery('#nav-toggle-policies').click(function(event){
        if(jQuery("#nav-menu-policies").hasClass("show")){
            jQuery("#nav-menu-policies").removeClass("show");
        } else {
            jQuery("#nav-menu-policies").addClass("show");
        }

		if(jQuery("#nav-toggle-policies").hasClass("open")){
            jQuery("#nav-toggle-policies").removeClass("open");
        } else {
            jQuery("#nav-toggle-policies").addClass("open");
        }

        event.stopPropagation();
    });

// Policy Center - Terms menu toggle controls
    jQuery('#nav-toggle-terms').click(function(event){
        if(jQuery("#nav-menu-terms").hasClass("show")){
            jQuery("#nav-menu-terms").removeClass("show");
        } else {
            jQuery("#nav-menu-terms").addClass("show");
        }

		if(jQuery("#nav-toggle-terms").hasClass("open")){
            jQuery("#nav-toggle-terms").removeClass("open");
        } else {
            jQuery("#nav-toggle-terms").addClass("open");
        }

        event.stopPropagation();
    });

// About Us page videos
jQuery("#videoslick").slick({
  slidesToShow : 3,
  slidesToSlide: 1,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// SparkLabs page timeline (main portion)
 jQuery('.timeline-wrapper').slick({
	 centerMode: true,
	 infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.timeline-nav',
  arrows: true,
  fade: false,
	 draggable: false,
	 responsive: [
    {
      breakpoint: 640,
      settings: "unslick"
    }
  ]

});
// SparkLabs page timeline (nav portion)
jQuery('.timeline-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.timeline-wrapper',
	  arrows: false,
  dots: false,
	centerPadding: 0,
  focusOnSelect: true,
		 responsive: [
    {
      breakpoint: 640,
      settings: "unslick"
    }
  ]

});	

// All functions tied to scrolling
jQuery(window).scroll(function() {
		  
	  // selectors
	  var $window = jQuery(window),
		     $body = jQuery('body');
		 
	  // Change 33% earlier than scroll position
	  var scroll = $window.scrollTop() + ($window.height() / 2);
	 
	  // Glossary page index nav bar
	  var $glossaryIndex = jQuery('.glossary-alphabet-wrap');
	  if ($window.scrollTop() > 500) {
	      $glossaryIndex.addClass( 'scrolled' );
	  } else {
	      $glossaryIndex.removeClass( 'scrolled' );
	  }
	  
}).scroll();
