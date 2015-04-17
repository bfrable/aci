define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      $('.upball').hover(function() {
        $(this).toggleClass('animated bounce');
      });

    }
  };
});