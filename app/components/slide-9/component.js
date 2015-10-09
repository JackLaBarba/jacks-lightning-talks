import Ember from 'ember';

export default Ember.Component.extend({
  test() {
    flakyModel.save().then(
      function() {
        horrayThingsWorked(model);
      },
      function() {
        whatANovelConcept();
        //maybe even
        flakyModel.rollback();
      }
    )
  }

});
