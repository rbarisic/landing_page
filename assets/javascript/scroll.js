   $(window).scroll(function() {

    if ($(this).scrollTop()>128)
     {
        $('.hide-on-scroll').fadeOut();
     }
    else
     {
      $('.hide-on-scroll').fadeIn();
     }
 });