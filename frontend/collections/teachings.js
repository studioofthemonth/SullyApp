define([
    'backbone',
    'models/teaching'
], function(Backbone, Teaching) {

    var Teachings = Backbone.Collection.extend({
        url: '/api/teachings',
        model: Teaching
    });

    return Teachings;
});