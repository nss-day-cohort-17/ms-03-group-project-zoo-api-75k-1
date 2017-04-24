const zookeepers = require('../zookeepers')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zookeepers').del()
    .then(function () {
      // Inserts seed entries
      return knex('zookeepers').insert(zookeepers);
    });
};
