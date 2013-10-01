define([
    'backbone'
], function(Backbone) {

    var Location = Backbone.Model.extend({
        url: '/api/locations/:id'
    });

    return Location;
});