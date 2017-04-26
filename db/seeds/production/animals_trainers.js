const animals_trainers = require('../animals_trainers')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals_trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals_trainers').insert(animals_trainers);
    });
};
