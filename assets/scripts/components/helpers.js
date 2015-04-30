define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      $('.upball').hover(function() {
        $(this).toggleClass('animated bounce');
      });

      $('.panel').height($(window).height());

      if (!navigator.userAgent.match(/(iPod|iPhone)/) && $(window).width() > 675) {
        $(window).scroll(function () {

          $('.panel').css({
            'top' : ($(this).scrollTop()/1.2)+'px'
          });

        });
      }

      $(window).resize(function() {
        $('.panel').height($(window).height());
      });

      $(document).scroll(function(){
          var el = $('#canvas'),
              top = $('#info .logo').offset().top - $(document).scrollTop();
          if (top < 300 && el.is(':visible')){
              $(el).css('display', 'none');
              $('header .logo').hide();
              $('footer .upball').hide();
          }
          if (top > 300 && el.is(':hidden')){
              $(el).css('display', 'block');
              $('header .logo').show();
              $('footer .upball').show();
          }  
      });

      $('.dot').on('click', function() {
          
          if ($(this).text() === '+') {
            $(this).text('-')
          } else {
            $(this).text('+')
          }

          $(this).next().fadeToggle();
      });
    }
  };
});