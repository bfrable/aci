define(['jquery', 'underscore', 'scrollspeed'],function ($, _, scrollspeed) {
    
  'use strict';

  var node = document.getElementById('canvas-content');

  var normalize = function (e) {
    var //o = e.originalEvent,
      o = e,
      d = o.detail, w = o.wheelDelta,
      n = 225, n1 = n-1;
    
    d = d ? w && (f = w/d) ? d/f : -d/1.35 : w/120;
    d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
    // Delta *should* not be greater than 2...
    e.delta = Math.min(Math.max(d / 1, 2), 1);
  }

  var listener = function(e) {
    normalize(e);
    node.scrollTop -= 10 * e.delta;
  }

  var runListener = function() {
    if ('onmousewheel' in node) {
      node.onmousewheel = function(e) {
        e = e || window.event;
        listener(e);
      }

    } else {
      node.addEventListener('DOMMouseScroll', listener)
    }
  }

  var setScrollSpeed = function() {
    if (!navigator.userAgent.match(/(iPod|iPhone)/) && $(window).width() > 675) {
      $.scrollSpeed(45, 650);
    }
  }

  return {
    init: function() {
      runListener();
      setScrollSpeed();
    }
  };
});