define([
    'backbone'
], function(Backbone) {

    var Teaching = Backbone.Model.extend({
        url: '/api/locations/:id'
    });

    return Teaching;
});