console.log('app1 connected')


var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

Backbone.$ = $

var ApplicationRouter = Backbone.Router.extend({
    initialize: function() {
        this.homeView = new HomePageView();
        Backbone.history.start();
    },

    routes: {

        '*default': 'showHome'
    },
    showHome: function() {

    this.homeView.render()
    },
})

var HomePageView = Backbone.View.extend({
    el: '.container',

    template: function() {
        return `<h1> Backbone Explorations - the sunlight API </h1>
        `
    },

    render() {

        this.el.innerHTML = this.template()
    },
})

export default ApplicationRouter
