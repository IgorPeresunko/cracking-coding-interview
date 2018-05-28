require('babel-register')({ presets: [ 'env', 'stage-0' ] })
require("babel-core/register")
require("babel-polyfill")

module.exports = require('./app.js')