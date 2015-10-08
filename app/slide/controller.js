import Ember from 'ember';

export default Ember.Controller.extend({
  slideId: Ember.computed('model.slideId', function() {
    return parseInt(this.get('model.slideId'));
  }),
  slideComponentName: Ember.computed('slideId', function() {
    let slideId = this.get('slideId');
    return `slide-${slideId}`;
  }),

  nextSlideId: Ember.computed('slideId', function () {
    return this.get('slideId') + 1;
  }),

  lastSlideId: Ember.computed('slideId', function () {
    return this.get('slideId') - 1;
  })
});
