define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {
      function pixelsToFooter($e) {
        var top = $(window).scrollTop();
        var bottomOfElement = $e.offset().top + $e[0].offsetHeight;
        var distance = Math.max(0, (top - bottomOfElement) * -1);
        return window.innerHeight - distance;
      }

      $('.upball').hover(function() {
        $(this).toggleClass('animated bounce');
      });

      var $panels = $('.panel:not(.fixed)');

      $panels.height($(window).height());
      $('.panel.fixed h2').width($('.panel h2').eq(1).width());
      $('.panel.fixed').css('left', $('.panel h2').eq(1).offset().left);

      if (!navigator.userAgent.match(/(iPod|iPhone)/) && $(window).width() > 675) {
        var $canvasContent = $('#canvas-content');
        var $fixedText = $('.panel.fixed h2');

        var locked = false;
        var panelIndex = 0;

        $(window).scroll(function panelScrollHandler () {
          var $h2 = $('h2', $panels.eq(panelIndex));
          if (!locked && $h2.length && pixelsToFooter($h2) > 100) {
            locked = true;
            var $textToLock = $('h2', $panels.eq(panelIndex));

            $fixedText.text($textToLock.text());
            $textToLock.text("");

            setTimeout(function () {
              locked = false;
              $textToLock.text($fixedText.text());
              $fixedText.text("");
            }, 5e3);

            panelIndex += 1;
          }

          $canvasContent.css({
            'top' : ($(window).scrollTop()/1.2)+'px'
          });

        });
      }

      $(window).resize(function() {
        $panels.height($(window).height());
        $('.panel.fixed h2').width($('.panel h2').eq(1).width());
        $('.panel.fixed').css('left', $('.panel h2').eq(1).offset().left);
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