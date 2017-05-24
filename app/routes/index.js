import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('comment');
  },

  actions: {
    createComment() {
      const comment = this.store.createRecord('comment', {});
      comment.save()
    },
  },
});
