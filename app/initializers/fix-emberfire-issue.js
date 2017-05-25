import DS from 'ember-data';

export function initialize(/* application */) {
  // re-monkey-patch https://github.com/firebase/emberfire/blob/v2.0.7/addon/initializers/emberfire.js#L55
  DS.Store.reopen({
    _emberfirePatchPatched: true,
    _push(jsonApiDoc) {
      if (jsonApiDoc.data) {
        return this._super(jsonApiDoc);
      } else {
        // This breaks if the response has no data and has included records
        // that need to be updated.
        return null;
      }
    },
  });
}

export default {
  name: 'fix-emberfire-hack',
  after: 'emberfire',
  initialize,
};
