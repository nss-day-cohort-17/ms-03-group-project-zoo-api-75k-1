'use strict'

const {bookshelf} = require('../db/database')
require('./animal')
require('./trainer')

// sets up relations for join table
const AnimalTrainer = bookshelf.Model.extend({
  tableName: 'animals_trainers',
  animal: function() {
    return this.belongsTo('Animal')
  },
  trainer: function() {
    return this.belongsTo('Trainer')
  }
})

module.exports = bookshelf.model('AnimalTrainer', AnimalTrainer)
