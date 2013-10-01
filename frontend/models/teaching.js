define([
    'backbone'
], function(Backbone) {

    var Teaching = Backbone.Model.extend({

        initialize: function() {
        	console.log('created');
        }
    });


    return Teaching;
});