'use strict'

const {bookshelf} = require('../db/database')
require('./trick')
require('./type')

// sets up relations for join table
const AnimaltypeTrick = bookshelf.Model.extend({
  tableName: 'animaltypes_tricks',
  trick: function() {
    return this.belongsTo('Trick')
  },
  type: function() {
    return this.belongsTo('Type')
  }
})

module.exports = bookshelf.model('AnimaltypeTrick', AnimaltypeTrick)
