define(['jquery'],function ($) {
    
  'use strict';

  var userAgents      = navigator.userAgent.match(/(iPod|iPhone)/),
      maxWidth        = $(window).width() > 675,
      panel           = $('.panel'),
      popoutToggle    = $('.dot'),
      accordionHandle = $('.accordion h2');

  var setPanelHeight = function() {
    panel.height($(window).height());
    
    $(window).resize(function() {
      panel.height($(window).height());
    });
  };

  var parallaxText = function() {
    $(window).scroll(function() {
      if (!userAgents && maxWidth) {
          if (!panel.is('.sticky')) {
            panel.css({
              //'top' : ($(this).scrollTop()/1.2)+"px"
            }); 
          }          
      }
    });

    $(window).resize(function() {
      if (!userAgents && maxWidth) {
        if (!panel.is('.sticky')) {
          panel.css({
            'top' : ($(this).scrollTop()/1.2)+"px"
          }); 
        }          
      }
    });
  };

  var togglePopouts = function() {
    popoutToggle.on('click', function() {
      if ($(this).text() === '+') {
        $(this).text('-')
      } else {
        $(this).text('+')
      }

      $(this).next().fadeToggle();
    });
  };

  var accordion = function() {
    accordionHandle.on('click', function() {
      $(this).parent().toggleClass('show');
    });
  }

  var hideCanvas = function() {
    $(document).scroll(function(){
      var el = $('#canvas'),
          top = $('#info .logo').offset().top - $(document).scrollTop();
      
      if (top < 300 && el.is(':visible')){
        $(el).css('display', 'none');
      }
      if (top > 300 && el.is(':hidden')){
        $(el).css('display', 'block');
      }  
    });
  }

  return {
    init: function() {
      setPanelHeight();
      togglePopouts();
      accordion();
      hideCanvas();
      parallaxText();
    }
  };
});