import Ember from 'ember';

export default Ember.Component.extend({
  language: '',

  didInsertElement() {
    Ember.$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
