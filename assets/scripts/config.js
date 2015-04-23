var require = {
    baseUrl: 'assets/scripts',
    paths: {
        main: 'main',
        app: 'app',
        component: 'components',
        jquery: '../../vendors/jquery/dist/jquery',
        loglevel: '../../vendors/loglevel/dist/loglevel.min',
        underscore: '../../vendors/underscore/underscore-min',
        mousewheel: '../../vendors/jquery-mousewheel/jquery.mousewheel'
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
