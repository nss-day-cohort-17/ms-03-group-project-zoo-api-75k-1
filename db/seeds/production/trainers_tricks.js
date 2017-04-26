const trainers_tricks = require('../trainers_tricks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainers_tricks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainers_tricks').insert(trainers_tricks);
    });
};
