"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
    // es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise

// var AppRouter = router reqire('./app0.js')
var AppRouter = require('./app2.js')


window.addEventListener('load', app)

function app() {
    console.log(AppRouter)
    var startApp = new AppRouter()
}
