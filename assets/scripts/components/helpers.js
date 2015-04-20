define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      jQuery.fn.extend({
        toggleText: function (a, b){
            var isClicked = false;
            var that = this;
            this.click(function (){
                if (isClicked) { that.text(a); isClicked = false; }
                else { that.text(b); isClicked = true; }
            });
            return this;
        }
      });

      $('.upball').hover(function() {
        $(this).toggleClass('animated bounce');
      });

      $('.panel').height($(window).height());

      $(window).scroll(function () { 

         $('.panel').css({
            'top' : ($(this).scrollTop()/1.2)+"px"
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