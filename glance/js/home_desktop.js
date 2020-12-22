/* eslint-disable no-undef */
$( document ).ready( function() {
  $( "img" ).lazy();
  $( ".lazy" ).lazy();
  const tilevideo = $( ".video-tile" );
  $( window ).on( "scroll", function() {
    if ( tilevideo.is( ":in-viewport" ) ) {
      tilevideo.children().get( 0 ).play();
    } else {
      tilevideo.children().get( 0 ).pause();
    }
  } );


  $( ".single-image-1" ).addClass( "active" );
  $( ".outer-container-1" ).addClass( "active" );
  $( ".single-image" ).click( function() {
    const next = $( this ).next();
    const current = this;
    $( ".outer-container" ).removeClass( "active" );
    next.addClass( "active" );
    $( ".single-image" ).removeClass( "active" );
    $( this ).addClass( "active" );
    new TimelineMax()
      .set( ".single-image", { display: "flex", opacity: 1 } )
      .set( current, { display: "none", opacity: 0 } )
      .set( next, { x: "60%", opacity: 0 } )
      .to( ".outer-container", 1, { display: "none", opacity: 0 }, "-1" )
      .to( next, 1.5, { display: "flex", x: "0%", opacity: 1, ease: Power1.easeOut }, "=-1" );
  } );

  let scale, yDir;
  if ( $( window ).width() <= 1800 ) {
    scale = 7.3;
    yDir = "126%";
  } else {
    scale = 10;
    yDir = "126%";
  }

  const tlFirstScroll1 = new TimelineMax();
  if ( $( window ).width() >= 1800 ) {
    tlFirstScroll1
      .set( "header", { opacity: 0.4 } )

    //.set('.tile1 .image-container', {scale: 8.5, y:"160%", x: "14%", ease:Power0.easeNone})
      .set( ".tile1 .image-container", { scale: scale, y: yDir, x: "0%", ease: Power0.easeNone } )
      .set( ".first-load", { display: "none" } )

      .set( ".tile1 .hero-text", { opacity: 1, top: "21%", ease: Power0.easeNone } )
      .to( ".tile1 .image-container", 3, { scale: 1, y: "0%", x: "0%", ease: Power1.easeNone } )

      .to( ".tile1 .hero-text", 3, { opacity: 0, top: "0%", ease: Power1.easeNone }, "=-3" )
      .to( "header", 2, { display: "block", opacity: 1, ease: Power1.easeNone }, "=-1" );

  } else {
    tlFirstScroll1
      .set( "header", { opacity: 0.4 } )

    //.set('.tile1 .image-container', {scale: 8.5, y:"160%", x: "14%", ease:Power0.easeNone})
      .set( ".tile1 .image-container", { scale: scale, y: yDir, x: "0%", ease: Power0.easeNone } )
      .set( ".first-load", { display: "none" } )

      .set( ".tile1 .hero-text", { opacity: 1, top: "18%", ease: Power0.easeNone } )
      .to( ".tile1 .image-container", 3, { scale: 1, y: "0%", x: "0%", ease: Power1.easeNone } )

      .to( ".tile1 .hero-text", 3, { opacity: 0, top: "0%", ease: Power1.easeNone }, "=-3" )
      .to( "header", 2, { display: "block", opacity: 1, ease: Power1.easeNone }, "=-1" );

  }

  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene( {
    triggerElement: ".tile1",
    triggerHook: "0",
    duration: "100%"
  } )
    .setPin( ".tile1" )
    .setTween( tlFirstScroll1 )

    // .addIndicators({name: "tile1", colorStart:"#0b4bcc"})
    .addTo( controller );

  // Tile 4 Animation
  const secScroll = new TimelineMax();
  secScroll
    .to( ".phone1", 6, { y: "60%", marginBottom: "30%" } )
    .to( ".phone2", 6, { y: "40%", marginBottom: "30%" }, "=-6" )
    .to( ".phone3", 6, { y: "20%", marginBottom: "30%" }, "=-6" )
    .to( ".tile4 .content .heading", 6, { y: "100%" }, "=-6" );

  new ScrollMagic.Scene( {
    triggerElement: ".tile4", duration: "200%", triggerHook: 0.5
  } )
    .setTween( secScroll )

    // .addIndicators()
    .addTo( controller );

  const thirdScroll = new TimelineMax();
  thirdScroll
    .set( ".tile7 .tile-heading", { display: "block" } )
    .set( ".tile7 .content", { x: "150%", opacity: 0 } )
    .set( ".tile7 .mobile-image", { width: "100%", ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe9", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe8", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe7", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe6", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe5", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe4", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe3", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image .swipe2", 2, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile7 .mobile-image", 2, { width: "80%", ease: Power1.easeOut } )
    .to( ".tile7 .inner-container", 2, { marginTop: "0", ease: Power1.easeOut }, "=-2" )
    .to( ".tile7 .tile-heading", 3, { x: "-70%", opacity: 1 } )
    .to( ".tile7 .image-item", 3, { x: "70%" }, "-=3" )
    .to( ".tile7 .content", 3, { display: "block", x: "0%", opacity: 1 }, "=-3" );

  new ScrollMagic.Scene( {
    triggerElement: ".tile7", duration: "100%", triggerHook: 0
  } )
    .setPin( ".tile7" )
    .setTween( thirdScroll )
    .addTo( controller );

  // Tile2

  const tile2 = new TimelineMax();
  tile2

    // .set('.tile3 .overlay', {css:{background: 'url(/images/desktop/impression-before.png)'}})
    .set( ".tile2 .inner-content", { y: "20%", opacity: 0, ease: Power1.easeOut } )
    .to( ".tile2 .inner-content", 3, { y: "0%", opacity: 1, ease: Power1.easeOut } );

  new ScrollMagic.Scene( {
    triggerElement: ".tile2", duration: "40%", triggerHook: 0.2
  } )
    .setTween( tile2 )
    .addTo( controller );

  // Tile3
  const tile3bg = new TimelineMax();
  tile3bg
    .set( ".tile3 .after-image", { opacity: 0, ease: Power1.easeOut } )
    .set( ".tile3 .content", { y: "10%", opacity: 0, ease: Power1.easeOut } )
    .to( ".tile3 .before-image", 5, { opacity: 0, ease: Power1.easeOut } )
    .to( ".tile3 .after-image", 5, { opacity: 1, ease: Power1.easeOut }, "=-5" )
    .to( ".tile3 .content", 5, { y: "0%", opacity: 1, ease: Power1.easeOut }, "=-5" );

  new ScrollMagic.Scene( {
    triggerElement: ".tile3", duration: "10%", triggerHook: 0.2
  } )
    .setTween( tile3bg )

    // .addIndicators()
    .addTo( controller );


  // Tile 9
  new ScrollMagic.Scene( {
    triggerElement: ".tile9", duration: "200%", triggerHook: 0
  } )
    .setPin( ".tile9" )

    // .addIndicators()
    .addTo( controller );

  const tile9 = new TimelineMax();
  tile9
    .set( ".tile9 .img2", { opacity: 0.8 } )
    .set( ".tile9 .img3", { opacity: 0.6 } )
    .set( ".tile9 .img4", { opacity: 0.3 } )
    .set( ".tile9 .img5", { opacity: 0.1 } )
    .to( ".tile9 .img1", 5, { x: "30%", y: "-20%", opacity: 0 } )
    .to( ".image-overlay5", 5, { opacity: 0, ease: Power1.easeOut }, "=-5" )
    .to( ".tile9 .img2", 5, { opacity: 1 }, "=-5" )
    .to( ".tile9 .img2", 5, { x: "30%", y: "-20%", opacity: 0 } )
    .to( ".image-overlay4", 5, { opacity: 0, ease: Power1.easeOut }, "=-5" )
    .to( ".tile9 .img3", 5, { opacity: 1 }, "=-5" )
    .to( ".tile9 .img3", 5, { x: "30%", y: "-20%", opacity: 0 } )
    .to( ".image-overlay3", 5, { opacity: 0, ease: Power1.easeOut }, "=-5" )
    .to( ".tile9 .img4", 5, { opacity: 1 }, "=-5" )
    .to( ".tile9 .img4", 5, { x: "30%", y: "-20%", opacity: 0 } )
    .to( ".image-overlay2", 5, { opacity: 0, ease: Power1.easeOut }, "=-5" )
    .to( ".tile9 .img5", 5, { opacity: 1 }, "=-5" );

  new ScrollMagic.Scene( {
    triggerElement: ".tile9", duration: "200%", triggerHook: 0, offset: 100
  } )

    // .setPin(".tile9")
    .setTween( tile9 )

    // .addIndicators()
    .addTo( controller );


  // SLiders

  new ScrollMagic.Scene( {
    triggerElement: ".tile5-slider1",
    triggerHook: 0,
    duration: "20%"
  } )
    .setPin( ".tile5-slider1" )

    // .addIndicators()
    .addTo( controller );

  const sixthScroll = new TimelineMax();
  sixthScroll
    .set( ".tile8 .content-container", { y: "60%" } )
    .set( ".tile8 .content-container .content", { y: "60%", opacity: 0 } )
    .set( ".tile8 .hand-img-cont", { rotation: "50", y: "100%" } )
    .set( ".tile8 .hand-img-cont.reveal1", { opacity: 0 } )
    .to( ".tile8 .content-container", 4, { y: "0%", ease: Power1.easeOut } )
    .to( ".tile8 .content-container .content", 4, { y: "0%", opacity: 1, ease: Power1.easeOut }, "=-4" )
    .to( ".tile8 .hand-img-cont", 6, { rotation: "0", y: "0%", ease: Power1.easeOut }, "=-4" )
    .to( ".tile8 .hand-img-cont.reveal1", 0.3, { opacity: 1, ease: Power1.easeOut } );

  new ScrollMagic.Scene( {
    triggerElement: ".tile8", duration: "70%", triggerHook: 0.7
  } )

    // .setPin(".tile8")
    .setTween( sixthScroll )

    // .addIndicators()
    .addTo( controller );

  const fifth = new TimelineMax( { repeat: -1 } );
  fifth
    .to( ".progress1", 3, { width: "100%", onUpdate: function() {
      $( ".tile10-img1" ).addClass( "hide" ); $( ".tile10-img2" ).removeClass( "hide" );
    } } )
    .set( ".progress1", { width: "0%" } )
    .to( ".progress2", 3, { width: "100%", onUpdate: function() {
      $( ".tile10-img2" ).addClass( "hide" ); $( ".tile10-img1" ).removeClass( "hide" );
    } } )
    .set( ".progress2", { width: "0%" } );

  $( ".tile5-slider" ).slick( {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    pauseOnHover: false,
    cssEase: "linear"

  } );
  const glanceTv = [], glanceGaming = [], glanceNews = [];
  $( ".tile5-slider1 .hidden-content > div" ).each( function() {
    glanceTv.push( $( this ).data( "src" ) );
  } );
  $( ".tile5-slider2 .hidden-content >  div" ).each( function() {
    glanceGaming.push( $( this ).data( "src" ) );
  } );
  $( ".tile5-slider3 .hidden-content > div" ).each( function() {
    glanceNews.push( $( this ).data( "src" ) );
  } );
  $( ".tile5-slider1 .slick-dots li" ).each( function( i ) {
    $( this ).html( "<img src=\"" + glanceTv[ i ] + "\" class=\"width100\" />" );
  } );
  $( ".tile5-slider2 .slick-dots li" ).each( function( i ) {
    $( this ).html( "<img src=\"" + glanceGaming[ i ] + "\" class=\"width100\" />" );
  } );
  $( ".tile5-slider3 .slick-dots li" ).each( function( i ) {
    $( this ).html( "<img src=\"" + glanceNews[ i ] + "\" class=\"width100\" />" );
  } );
} );
