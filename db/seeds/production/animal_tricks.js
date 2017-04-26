const animals_tricks = require('../animals_tricks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals_tricks').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals_tricks').insert(animals_tricks);
    });
};
