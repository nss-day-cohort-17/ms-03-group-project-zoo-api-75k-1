const tricks = require('../tricks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tricks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tricks').insert(tricks);
    });
};
