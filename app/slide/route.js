import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params;
  },

  actions: {
    changeSlide(slideId) {
      this.transitionTo('slide', slideId);
    }
  }
});
