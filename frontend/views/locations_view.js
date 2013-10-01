// define is require, matches jquery, underscore, etc to $, _ etc
define([
    'jquery',
    'underscore',
    'backbone',
    'views/form_view',
    // hbars! is a plugin for require hbars!path/to/template
    'hbars!templates/locations_view'
], function($, _, Backbone, FormView, LocationsTemplate) {

    var LocationsView = Backbone.View.extend({
        
        el: 'body',

        events: {
            'click .location' : 'openForm'
        },

        initialize: function() {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function() {
            var template = LocationsTemplate(this.collection.toJSON());
            this.$el.html(template);
        },

        openForm: function(e) {
            var $target = $(e.currentTarget),
                index = $target.data('index'),
                form = new FormView({ location: this.collection.at(index).toJSON(), index: index });

                form.render();
        }
    });

    return LocationsView;

});