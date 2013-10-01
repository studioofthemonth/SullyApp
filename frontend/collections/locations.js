define([
    'backbone',
    'models/location'
], function(Backbone, Location) {

    var Locations = Backbone.Collection.extend({
        url: '/api/locations',
        model: Location,
    });

    return Locations;
});