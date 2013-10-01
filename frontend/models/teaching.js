define([
    'backbone'
], function(Backbone) {

    var Teaching = Backbone.Model.extend({
        url: '/api/teachings',

        initialize: function() {
        	console.log('created');
        }
    });


    return Teaching;
});