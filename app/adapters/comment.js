import Ember from 'ember';
import ApplicationAdapter from './application';

const { RSVP: { resolve } } = Ember;

export default ApplicationAdapter.extend({
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
