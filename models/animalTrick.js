'use strict'

const {bookshelf} = require('../db/database')
require('./animal')
require('./trick')

const AnimalTrick = bookshelf.Model.extend({
  tableName: 'animals_tricks',
  animal: function() {
    return this.belongsTo('Animal')
  },
  trick: function() {
    return this.belongsTo('Trick')
  }
}, {
  // expects an array of objects like this:
  // [{animal_id: 1, zookeeper_id: 2}]
  addMany: function(rows) {
    return this.collection(rows).invokeThen('save')
  }
})

module.exports = bookshelf.model('AnimalTrick', AnimalTrick)
