/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var bowerDir = 'bower_components/';

  //leaflet
  app.import(bowerDir + 'leaflet/dist/leaflet.js');
  app.import(bowerDir + 'leaflet/dist/leaflet.css');

  return app.toTree();
};
