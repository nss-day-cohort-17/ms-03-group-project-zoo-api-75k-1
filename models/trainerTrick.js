'use strict'

const {bookshelf} = require('../db/database')
require('./trick')
require('./trainer')

// sets up relations for join table
const TrainerTrick = bookshelf.Model.extend({
  tableName: 'trainers_tricks',
  trick: function() {
    return this.belongsTo('Trick')
  },
  trainer: function() {
    return this.belongsTo('Trainer')
  }
})

module.exports = bookshelf.model('TrainerTrick', TrainerTrick)
