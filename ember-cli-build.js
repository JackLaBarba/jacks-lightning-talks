/* global require, module */
var Funnel = require('broccoli-funnel');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var bowerDir = 'bower_components/';
  var vendorDir = 'vendor/';

  //leaflet
  app.import(bowerDir + 'leaflet/dist/leaflet.js');
  app.import(bowerDir + 'leaflet/dist/leaflet.css');
  app.import(vendorDir + 'leaflet-gpx/gpx.js');

  // Serve our GPX file
  var extraAssets = new Funnel('data/', {
    destDir: '/data/'
  });

  return app.toTree(extraAssets);
};
