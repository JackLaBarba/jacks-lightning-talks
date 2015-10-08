import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.initializeMap();
  },

  initializeMap() {
    let map = L.map('map');
    this.setTileset(map);
    this.loadGPX(map);
    this.set('map', map);
  },

  setTileset(map) {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    return map;
  },

  loadGPX(map) {
    var gpx = '/data/jack_and_patty_trip.gpx'; // URL to your GPX file or the GPX itself
    new L.GPX(gpx, {
      async: true,
      marker_options: {
        startIconUrl: 'images/pin-icon-start.png',
        endIconUrl: 'images/pin-icon-end.png',
        shadowUrl: 'images/pin-shadow.png'
      }
    }).on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());
    }).addTo(map);
    return map;
  }
});
