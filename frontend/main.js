// main entry pint for require
require.config({
    // referencing the libs folder
    paths: {
        jquery: 'libs/jquery-1.10.2.min',
        jqueryui: 'libs/jquery-ui-1.10.3.min',
        json2: 'libs/json2',
        underscore: 'libs/underscore-min', // 1.5.2
        backbone: 'libs/backbone', // 1.0.0
        handlebars: 'libs/handlebars',
        text: 'libs/text',
        hbars: 'libs/hbars',
    },
    shim: {
        underscore: { exports: '_' },
        json2: { exports: 'JSON' },
        backbone: {
            deps: ['underscore', 'jquery', 'json2'],
            exports: 'Backbone'
        },
        handlebars: { exports: 'Handlebars'}
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'sully',
    'router'
], function($, _, Backbone, Sully, Router) {

    // Initiate the router
    var router = new Router;

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start({ pushState: true });
});
