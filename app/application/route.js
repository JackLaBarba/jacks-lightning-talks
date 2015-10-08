import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (transition.intent.url === '/') {
      this.transitionTo('slide', 1);
    }
  }
});
