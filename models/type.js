'use strict'

const { bookshelf } = require('../db/database')
require('./trick')
require('./animaltypeTrick')


const Type = bookshelf.Model.extend( {
  tableName: 'trainers',
  tricks: function() {return this.belongsToMany('Trick').through('AnimaltypeTrick')}
}, {
  dependents: ['tricks']
})

module.exports = bookshelf.model('Type', Type)
