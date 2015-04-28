var require = {
    baseUrl: 'assets/scripts',
    paths: {
        main: 'main',
        app: 'app',
        component: 'components',
        jquery: '../../vendors/jquery/dist/jquery',
        loglevel: '../../vendors/loglevel/dist/loglevel.min',
        underscore: '../../vendors/underscore/underscore-min',
        mousewheel: '../../vendors/jquery-mousewheel/jquery.mousewheel',
        scrollmagic: '../../vendors/scrollmagic/scrollmagic/minified/ScrollMagic.min'
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
};
