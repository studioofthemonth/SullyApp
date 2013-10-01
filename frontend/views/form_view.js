define([
    'jquery',
    'underscore',
    'backbone',
    'models/teaching',
    'hbars!templates/form_view'
], function($, _, Backbone, Teaching, FormViewTemplate) {

    var FormView = Backbone.View.extend({

        tagName: 'div',
        className: 'modal',

        events: {
            'submit form' : 'createTeaching'
            //'click .location' : 'openForm'
        },

        initialize: function() {
            console.log('hello');
            //this.listenTo(this.collection, 'sync', this.render);
        },

        render: function() {
            this.$el.html(FormViewTemplate({
                location: this.options.location,
                index: this.options.index
            })).appendTo('body').fadeIn();
        },

        createTeaching: function(e) {
            var $target = $(e.currentTarget);
                teaching = new Teaching({
                    location_index: $target.find('#location_index').val(),
                    acuity: $target.find('#acuity').val(),
                    learner_rank: $target.find('#learner_rank').val(),
                    teacher_rank: $target.find('#teacher_rank').val(),
                    complaint: $target.find('#complaint').val(),
                });

            console.log(teaching);

            teaching.save();
        }
    });

    return FormView;

});