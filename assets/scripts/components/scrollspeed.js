define(['jquery', 'underscore'],function ($, _) {
    
  'use strict';

  return {
    init: function() {

      // Globals:
      var deltas = [null, null, null, null, null, null, null, null, null],
          timer  = null,
          lock   = 0,
          seen   = 0;

      function hasPeak() {
          
          if (lock > 0) {
              lock--;
              return false;
          }
          
          if (deltas[0] == null) return false;
          
          if (
              deltas[0] <  deltas[4] &&
              deltas[1] <= deltas[4] &&
              deltas[2] <= deltas[4] &&
              deltas[3] <= deltas[4] &&
              deltas[5] <= deltas[4] &&
              deltas[6] <= deltas[4] &&
              deltas[7] <= deltas[4] &&
              deltas[8] <  deltas[4] 
          ) return true;

          if (
            deltas[8] < 1000
          ) return false
          
          return false;
      }

      (function($) {
        
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

            $window.on('mousewheel DOMMouseScroll', _.throttle(function(e) {

                var deltaY = e.originalEvent.wheelDeltaY,
                    detail = e.originalEvent.detail;
                    scrollY = $document.height() > $window.height();
                    scrollX = $document.width() > $window.width();
                    scroll = true;

                var delta  = e.type == 'mousewheel' ? e.originalEvent.wheelDelta * -1 : 40 * e.originalEvent.detail;

                console.log(delta);

                if (hasPeak()) {
                  lock = 10;
                  seen++;
                  console.log('Inertial Gesture Found! (' + seen + ' total)');
                }

                else if ((deltas[8] == null || deltas[8] == 120) && Math.abs(delta) == 120 ||  Math.abs(delta) % 120 === 0) {

                  console.log('no inertia');

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
                }

                deltas.shift();
                deltas.push(Math.abs(delta));

                clearTimeout(timer);
                timer = setTimeout(function() {
                    //console.log('Waiting ...');
                }, 200);


            }, 513)).on('scroll', _.throttle(function(e) {
              var delta  = e.type == 'mousewheel' ? e.originalEvent.wheelDelta * -1 : 40 * e.originalEvent.detail;

              if ((deltas[8] == null || deltas[8] == 120) && Math.abs(delta) == 120 || delta % 120 === 0 ) {

                console.log(delta);

                if (scrollY && !scroll) root = $window.scrollTop();
                if (scrollX && !scroll) root = $window.scrollLeft();
              }

            }, 513)).on('resize', function(e) {
              var delta  = e.type == 'mousewheel' ? e.originalEvent.wheelDelta * -1 : 40 * e.originalEvent.detail;

              if ((deltas[8] == null || deltas[8] == 120) && Math.abs(delta) == 120) {
                if (scrollY && !scroll) view = $window.height();
                if (scrollX && !scroll) view = $window.width();
              }
            });
        };

        jQuery.easing.default = function (x,t,b,c,d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b * t;
        };

      })(jQuery);

      //$.scrollSpeed(1000, 1600);
    }
  };
});