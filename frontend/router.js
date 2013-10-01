define([
    'backbone',
    'collections/locations',
    'views/locations_view'
], function(Backbone, Locations, LocationsView) {;

    var Router = Backbone.Router.extend({
        
        routes: {
            '' : 'home',
            '*notFound' : 'notFound'
        },

        home: function() {
            var locations = new Locations(),
                locationsView = new LocationsView({
                    collection: locations
                });

            locations.fetch();
        },

        notFound: function() {
            console.log('Route Not Found');
        }
    });

    return Router;

});