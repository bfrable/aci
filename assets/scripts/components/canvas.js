define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      $(function() {
        var canvas, context, currentFrame, loadImageSequence, loadedFrameCallback, render, renderCurrentFrame, resizeCanvas, sequence, totalFrames, showLoader, hideLoader, showPanels;

        if ($('#background').length > 0) {
          
          resizeCanvas = function() {
            var windowHeight, windowWidth;
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            return $('#background').attr('width', windowWidth).attr('height', windowHeight);
          };

          resizeCanvas();
          
          $(window).resize(resizeCanvas);
          
          canvas = document.getElementById('background');
          context = canvas.getContext('2d');
          currentFrame = 1;
          totalFrames = 388;
          sequence = [];

          showPanels = function() {
            if (currentFrame === 1 || currentFrame === 96 && $('.panel.one').is(':hidden')) {
                console.log('test');
                $('.panel').hide();
                $('.panel.one').fadeIn();
            } else if (currentFrame === 97 || currentFrame === 193 && $('.panel.two').is(':hidden')) {
              $('.panel').hide();
              $('.panel.two').fadeIn();
            } else if (currentFrame === 194 || currentFrame === 290 && $('.panel.three').is(':hidden')) {
              $('.panel').hide();
              $('.panel.three').fadeIn();
            } else if (currentFrame === 291 && $('.panel.four').is(':hidden')) {
              $('.panel').hide();
              $('.panel.four').fadeIn();
            }
          };
          
          renderCurrentFrame = function() {
            var offset;
            offset = $(window).scrollTop();
            currentFrame = Math.round(offset / 140);
            
            if (currentFrame >= totalFrames) {
              currentFrame = totalFrames - 1;
            }
            showPanels();
            return render(sequence[currentFrame]);
          };
          
          render = function(img) {
            var h, videoAspectRatio, videoHeight, videoWidth, w, windowAspectRatio, windowHeight, windowWidth, x, y;
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            windowAspectRatio = windowWidth / windowHeight;
            videoWidth = 1280;
            videoHeight = 720;
            videoAspectRatio = videoWidth / videoHeight;
            if (windowAspectRatio > videoAspectRatio) {
              w = windowWidth;
              h = windowWidth / videoAspectRatio;
            } else {
              w = videoAspectRatio * windowHeight;
              h = windowHeight;
            }
            x = -(w - windowWidth) / 2;
            y = -(h - windowHeight) / 2;
            return context.drawImage(img, x, y, w, h);
          };
          
          loadImageSequence = function() {
            var file, i, img, num, _i;
            sequence = [];
            for (i = _i = 1; 1 <= totalFrames ? _i <= totalFrames : _i >= totalFrames; i = 1 <= totalFrames ? ++_i : --_i) {
              img = new Image();
              num = ("000" + i).slice(-3);
              file = 'assets/images/canvas/Dandelion_' + num + ".jpg";
              img.src = file;
              img.frame = i;
              img.onload = function() {
                return loadedFrameCallback(this);
              };
              sequence.push(img);
            }
            return sequence;
          };

          showLoader = function() {
            $('canvas').hide();
            $('#loader').show();
          };

          hideLoader = function() {
            $('#loader').hide();
            $('canvas').fadeIn();
          };
          
          loadedFrameCallback = function(img) {
            //showLoader();
            window.scrollTo(0,0);
            
            if (img.frame === 1) { // OR totalFrames
              //hideLoader();
              return render(img); // OR sequence[1]
            }
          };

          sequence = loadImageSequence();

          $(window).resize(renderCurrentFrame);
          $(window).scroll(function() {
            return renderCurrentFrame();
          });
          return $(window).on('touchmove', renderCurrentFrame);

        }
      });
    }
  };
});