const trainer = require('../trainer')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainer').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainer').insert(trainer);
    });
};
