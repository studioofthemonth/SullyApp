define([
    'jquery',
    'underscore',
    'hbars!templates/locations_view'
], function($, _, LocationsTemplate) {

    var LocationsView = Backbone.View.extend({
        
        el: 'body',

        initialize: function() {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function() {
            console.log(LocationsTemplate(this.collection.toJSON()));
            var template = LocationsTemplate(this.collection.toJSON());
            this.$el.html(template);
        }

    });

    return LocationsView;

});