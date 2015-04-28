define(['jquery', 'scrollmagic'],function ($, ScrollMagic) {
    
  'use strict';

  return {
    init: function() {

      var controller = new ScrollMagic.Controller();

      // Scene Handler
      var scene1 = new ScrollMagic.Scene({
        triggerElement: ".panel.one", // point of execution
        duration: $(window).height() + 500, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setPin(".panel.one h2") // the element we want to pin
      .addTo(controller);

    }
  };
});