define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      var node = document.getElementById('canvas-content');

      (function($) {

          function normalize_mousewheel(e) {
            var //o = e.originalEvent,
              o = e,
              d = o.detail, w = o.wheelDelta,
              n = 225, n1 = n-1;
            
            d = d ? w && (f = w/d) ? d/f : -d/1.35 : w/120;
            d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
            // Delta *should* not be greater than 2...
            e.delta = Math.min(Math.max(d / 1, -1), 1);
            console.log(d);
          }

          function listener(e) {
            normalize_mousewheel(e);
            node.scrollTop -= 10 * e.delta;
          }

          if ('onmousewheel' in node) {
            node.onmousewheel = function(e) {
              e = e || window.event;
              listener(e);
            }

          } else {
            node.addEventListener('DOMMouseScroll', listener)
          }

          jQuery.scrollSpeed = function(step, speed, easing) {

              var $document = $(document),
                  $window = $(window),
                  $body = $('html, body'),
                  option = easing || 'default',
                  root = 0,
                  scroll = false,
                  scrollY,
                  scrollX,
                  view;

              if (window.navigator.msPointerEnabled)

                  return false;

              $window.on('mousewheel DOMMouseScroll', function(e) {

                  var deltaY = e.originalEvent.wheelDeltaY,
                      detail = e.originalEvent.detail;
                      scrollY = $document.height() > $window.height();
                      scrollX = $document.width() > $window.width();
                      scroll = true;

                  if (scrollY) {

                      view = $window.height();

                      if (deltaY < 0 || detail > 0)

                          root = (root + view) >= $document.height() ? root : root += step;

                      if (deltaY > 0 || detail < 0)

                          root = root <= 0 ? 0 : root -= step;

                      $body.stop().animate({

                          scrollTop: root

                      }, speed, option, function() {

                          scroll = false;

                      });
                  }

                  if (scrollX) {

                      view = $window.width();

                      if (deltaY < 0 || detail > 0)

                          root = (root + view) >= $document.width() ? root : root += step;

                      if (deltaY > 0 || detail < 0)

                          root = root <= 0 ? 0 : root -= step;

                      $body.stop().animate({

                          scrollLeft: root

                      }, speed, option, function() {

                          scroll = false;

                      });
                  }

                  return false;

              }).on('scroll', function() {

                  if (scrollY && !scroll) root = $window.scrollTop();
                  if (scrollX && !scroll) root = $window.scrollLeft();

              }).on('resize', function() {

                  if (scrollY && !scroll) view = $window.height();
                  if (scrollX && !scroll) view = $window.width();

              });
          };

          jQuery.easing.default = function (x,t,b,c,d) {
              return -c * ((t=t/d-1)*t*t*t - 1) + b * t * t;
          };

      })(jQuery);
      
      if (!navigator.userAgent.match(/(iPod|iPhone)/) && $(window).width > 675) {

        $.scrollSpeed(40, 50);

      }

    }
  };
});