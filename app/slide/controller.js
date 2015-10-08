import Ember from 'ember';

export default Ember.Controller.extend({
  slideId: Ember.computed.alias('model.slideId'),
  slideComponentName: Ember.computed('slideId', function() {
    let slideId = this.get('slideId');
    return `slide_${slideId}`;
  })
});
