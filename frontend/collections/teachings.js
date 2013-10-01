define([
    'backbone',
    'models/teaching'
], function(Backbone, Location) {

    var Teachings = Backbone.Collection.extend({
        url: '/api/locations',
        model: Teaching
    });

    return Teachings;
});