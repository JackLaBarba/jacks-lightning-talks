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

  //highlight
  app.import(bowerDir + 'highlightjs/highlight.pack.js');
  app.import(bowerDir + 'highlightjs/styles/solarized_light.css');

  // Serve our GPX file
  var dataAssets = new Funnel('data/', {
    destDir: '/data/'
  });

  // Serve the stupid pin images for the GPX file
  var gpxAssets = new Funnel(vendorDir + 'leaflet-gpx', {
    destDir: '/images/'
  });

  return app.toTree([dataAssets, gpxAssets]);
};
