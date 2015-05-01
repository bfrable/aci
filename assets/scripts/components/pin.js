define(['jquery', 'scrollmagic'],function ($, ScrollMagic) {
    
  'use strict';

  return {
    init: function() {

      var controller = new ScrollMagic.Controller();

      // Scene Handler
      var scene1 = new ScrollMagic.Scene({
        triggerElement: ".panel.one", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.one", "sticky") // add class toggle
      .setPin(".panel.one h2") // the element we want to pin
      .addTo(controller);

      var scene2 = new ScrollMagic.Scene({
        triggerElement: ".panel.two", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.two", "sticky") // add class toggle
      .setPin(".panel.two h2") // the element we want to pin
      .addTo(controller);

      var scene3 = new ScrollMagic.Scene({
        triggerElement: ".panel.three", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.three", "sticky") // add class toggle
      .setPin(".panel.three h2") // the element we want to pin
      .addTo(controller);

      var scene4 = new ScrollMagic.Scene({
        triggerElement: ".panel.four", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.four", "sticky") // add class toggle
      .setPin(".panel.four h2") // the element we want to pin
      .addTo(controller);

      var scene5 = new ScrollMagic.Scene({
        triggerElement: ".panel.five", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.five", "sticky") // add class toggle
      .setPin(".panel.five h2") // the element we want to pin
      .addTo(controller);

      var scene6 = new ScrollMagic.Scene({
        triggerElement: ".panel.six", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.six", "sticky") // add class toggle
      .setPin(".panel.six h2") // the element we want to pin
      .addTo(controller);

      var scene7 = new ScrollMagic.Scene({
        triggerElement: ".panel.seven", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.seven", "sticky") // add class toggle
      .setPin(".panel.seven h2") // the element we want to pin
      .addTo(controller);

      var scene8 = new ScrollMagic.Scene({
        triggerElement: ".panel.eight", // point of execution
        duration: $(window).height() + 5000, // pin element for the window height - 1
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        reverse: true // allows the effect to trigger when scrolled in the reverse direction
      })
      .setClassToggle(".panel.eight", "sticky") // add class toggle
      .setPin(".panel.eight h2") // the element we want to pin
      .addTo(controller);

    }
  };
});