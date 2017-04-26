const animaltypes_tricks = require('../animaltypes_tricks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animaltypes_tricks').del()
    .then(function () {
      // Inserts seed entries
      return knex('animaltypes_tricks').insert(animaltypes_tricks);
    });
};
