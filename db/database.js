// We created this file manually so we can specify
// the environment (test, development, or production),
// require the knexfile.js, and export the configuration
// (based on the environment) for our database:

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);
const cascadeDelete = require('bookshelf-cascade-delete');


// Resolve circular dependencies with relations, ie models requiring each other
// when defining relationships
bookshelf.plugin('registry');
// Enable cascading delete
// Disable like this: Author.forge({ id: 1 }).destroy({ cascadeDelete: false });
// https://github.com/seegno/bookshelf-cascade-delete
bookshelf.plugin(cascadeDelete);

module.exports = {knex, bookshelf}
