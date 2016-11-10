console.log('app2 connected')


var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

Backbone.$ = $

var ApplicationRouter = Backbone.Router.extend({
    initialize: function() {
        this.homeView = new HomePageView();
        this.politiciansCollection = new Legislator
        Backbone.history.start();
    },

    routes: {

        '*default': 'showHome'
    },

    showHome: function() {

        this.politiciansCollection.fetch().then(function(responseData){
            console.log(responseData)
        });

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

var Legislator = Backbone.Collection.extend({

})

var LegislatorCollection = Backbone.Collection.extend({
    model: Legislator,
    key: '7ba96d266cc84b168fab4d878d9aa141',
    url: function(){
        return `http://congress.api.sunlightfoundation.com/legislators?apikey=${this.key}`
    }
})

export default ApplicationRouter
