import Ember from 'ember';
import DS from 'ember-data';

const { RSVP: { resolve } } = Ember;

export default DS.JSONAPIAdapter.extend({
  findAll() {
    return resolve({
      data: [],
    });
  },

  createRecord() {
    return resolve({
      data: {
        id: '1',
        type: 'comment',
        attributes: {
          message: 'This is comment #1',
        },
        relationships: {
          author: {
            data: { id: '1', type: 'author' },
          },
        },
      },

      included: [
        {
          id: '1',
          type: 'author',
          attributes: {
            name: 'Author #1',
          },
        },
      ],
    });
  },
});
