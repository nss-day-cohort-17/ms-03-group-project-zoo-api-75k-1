'use strict'

const {bookshelf} = require('../db/database')
require('./animalZookeeper')
require('./zookeeper')

const Animal = bookshelf.Model.extend({
	tableName: 'animals',
  zookeepers: function () { return this.belongsToMany('Zookeeper').through('AnimalZookeeper')}
}, {
	getAll: function() {
		return this.forge().fetchAll()
	},
	addOne: function(animal) {
		return this.forge(animal).save({},{require: true})
	}
})

module.exports = bookshelf.model('Animal', Animal)
