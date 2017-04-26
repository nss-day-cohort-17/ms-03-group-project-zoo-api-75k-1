const animals_zookeepers = require('../animals_zookeepers')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals_zookeepers').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals_zookeepers').insert(animals_zookeepers);
    });
};
