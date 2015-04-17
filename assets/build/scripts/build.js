/*global define */
define(function (require) {
    'use strict';

    // load dependencies
    var $ = require('jquery'),
        log = require('loglevel'),
        components = {},
        self = {};

    components.canvas = require('components/canvas');
    components.scrollspeed = require('components/scrollspeed');
    components.helpers = require('components/helpers');
    
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
});;var require = {
    baseUrl: 'assets/scripts',
    paths: {
        main: 'main',
        app: 'app',
        component: 'components',
        jquery: '../../vendors/jquery/dist/jquery',
        loglevel: '../../vendors/loglevel/dist/loglevel.min'
    },
    shim: {
        component: {
            deps: [
                //'components/helpers'
            ],
        }
    },
    packages: [
        {

        }
    ]
};;require(['app', 'jquery'], function (app) {
    'use strict';
    // use app here
    app.init();
});