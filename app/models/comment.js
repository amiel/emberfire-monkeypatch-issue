import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  message: attr('string'),
  author: belongsTo({ async: false }),
});
