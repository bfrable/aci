define(['jquery'],function ($) {
    
  'use strict';

  return {
    init: function() {
      if (!navigator.userAgent.match(/(iPod|iPhone)/)) {
        $(function() {
          var canvas, context, currentFrame, loadImageSequence, loadedFrameCallback, render, renderCurrentFrame, resizeCanvas, sequence, totalFrames, showLoader, hideLoader, showPopups;

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

            showPopups = function() {
              if (currentFrame < 180 || currentFrame > 330) {
                $('.popout').fadeOut();
              }

              if (currentFrame >= 230 && currentFrame <=260 && $('.popout.one').is(':hidden')) {    
                $('.popout').fadeOut();
                $('.popout.one').fadeIn(); 
              }

              if (currentFrame >= 260 && currentFrame <= 290 && $('.popout.two').is(':hidden')) {
                $('.popout').fadeOut();
                $('.popout.two').fadeIn(); 
              }

              if (currentFrame >= 290 && currentFrame <= 330 && $('.popout.three').is(':hidden')) {
                $('.popout').fadeOut();
                $('.popout.three').fadeIn();
              }
            };
            
            renderCurrentFrame = function() {
              var offset;
              offset = $(window).scrollTop();
              currentFrame = Math.round(offset / 140);
              
              if (currentFrame >= totalFrames) {
                currentFrame = totalFrames - 1;
              }
              showPopups();
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
                file = 'assets/images/canvas/Fraud_' + num + ".jpg";
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
              
              if (img.frame === 1) { // OR totalFrames
                //hideLoader();
                window.scrollTo(0,0);
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
    }
  };
});