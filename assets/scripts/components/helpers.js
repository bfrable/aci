define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      $('.upball').hover(function() {
        $(this).toggleClass('animated bounce');
      });

      $('.panel').height($(window).height());

      $(window).scroll(function () { 

         $('.panel').css({
            //'top' : ($(this).scrollTop()/1.2)+"px"
         }); 

      });

      $(window).resize(function() {
        $('.panel').height($(window).height());
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