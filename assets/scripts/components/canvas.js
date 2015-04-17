define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {

      $(function() {
        var canvas, context, currentFrame, loadImageSequence, loadedFrameCallback, render, renderCurrentFrame, resizeCanvas, sequence, totalFrames, showLoader, hideLoader;

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
          
          renderCurrentFrame = function() {
            var offset;
            offset = $(window).scrollTop();
            currentFrame = Math.round(offset / 140);
            if (currentFrame >= totalFrames) {
              currentFrame = totalFrames - 1;
            }
            return render(sequence[currentFrame]);
          };
          
          render = function(img) {
            var h, videoAspectRatio, videoHeight, videoWidth, w, windowAspectRatio, windowHeight, windowWidth, x;
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
            return context.drawImage(img, x, 0, w, h);
          };
          
          loadImageSequence = function() {
            var file, i, img, num, _i;
            sequence = [];
            for (i = _i = 1; 1 <= totalFrames ? _i <= totalFrames : _i >= totalFrames; i = 1 <= totalFrames ? ++_i : --_i) {
              img = new Image();
              num = ("000" + i).slice(-3);
              file = 'assets/images/Dandelion_' + num + ".jpg";
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
            $(document).ready(function () {
                window.scrollTo(0,0);
            });
            $('#loader').show();
          };

          hideLoader = function() {
            $('#loader').hide();
            $('canvas').fadeIn();
          };
          
          loadedFrameCallback = function(img) {
            showLoader();
            if (img.frame === totalFrames) {
              hideLoader();
              return render(sequence[1]);
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