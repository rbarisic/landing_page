   $(window).scroll(function() {

    if ($(this).scrollTop()>256)
     {
        $('.hide-on-scroll').fadeOut();
        $('.show-on-scroll').fadeIn();
     }
    else
     {
      $('.hide-on-scroll').fadeIn();
      $('.show-on-scroll').fadeOut();
     }
 });