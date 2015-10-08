import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.initializeMap();
  },

  initializeMap() {
    let lat = 37.239908;
    let lon = -118.680388;
    let map = L.map('map').setView([lat, lon], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.set('map', map);
  }
});
