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
      var $fixedPanel = $('.panel.fixed');
      var $fixedText = $('.panel.fixed h2');

      function onResize() {
        $panels.height($(window).height());
        $fixedText.width($('.panel h2').eq(1).width());
        $fixedPanel.css('left', $('.panel h2').eq(1).offset().left);
      }
      $(window).resize(onResize);
      onResize();

      if (!navigator.userAgent.match(/(iPod|iPhone)/) && $(window).width() > 675) {
        var $canvasContent = $('#canvas-content');

        var locked = false;
        var panelIndex = 0;

        $(window).scroll(function panelScrollHandler () {
          var $h2;
          
          $h2 = $('h2', $panels.eq(panelIndex));
          if (!locked && $h2.length && pixelsToFooter($h2) > 100) {
            console.log(panelIndex, "hit");
            locked = true;

            $fixedText.text($h2.text());
            $h2.text('');

            setTimeout(function() {
              var stepsLeft = 100;

              setTimeout(function step() {
                var deltaHeight, currentBottom;

                currentBottom = Number($fixedPanel.css('bottom').slice(0, -2));
                deltaHeight = pixelsToFooter($h2) - currentBottom;

                $fixedPanel.css({
                  'bottom': (currentBottom + (deltaHeight / stepsLeft)) + 'px'
                });

                stepsLeft -= 1;
                if (stepsLeft === 0) {
                  $h2.text($fixedText.text());
                  $fixedText.text("");
                  $fixedText.css('bottom', '100px')
                  locked = false;
                  panelIndex += 1;
                } else {
                  setTimeout(step, 10);
                }
              }, 20);
            }, 5e3);
          }

          $canvasContent.css({
            'top' : ($(window).scrollTop()/1.2)+'px'
          });

        });
      }

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