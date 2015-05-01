/*global define */
define(function (require) {
    'use strict';

    // load dependencies
    var $ = require('jquery'),
        log = require('loglevel'),
        components = {},
        self = {};

    components.canvas = require('components/canvas');
    components.scrolling = require('components/scrolling');
    components.helpers = require('components/helpers');
    components.pin = require('components/pin');
    
    // API methods
    $.extend(self, {

       /**
        * App initialization
	     */
        init: function init() {
            log.setLevel(0);
            log.debug('Running jQuery %s', $().jquery);

            log.debug('');
            log.debug('Initializing components ...');

            for (var key in components) {
                try {
                    components[key].init();
                } catch (err) {
                    log.debug('initialization failed for component \'' + key + '\'');
                    log.error(err);
                }
            }
        }
    });

    return self;
});