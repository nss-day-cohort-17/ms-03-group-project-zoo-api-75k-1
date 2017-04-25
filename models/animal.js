'use strict'

const {bookshelf} = require('../db/database')

const Animal = bookshelf.Model.extend({
	tableName: 'animals',
  zookeepers: function () { return this.belongsToMany('Zookeeper').through('animals_zookeepers')}
}, {
	getAll: function() {
		return this.forge().fetchAll()
	},
	addOne: function(animal) {
		return this.forge(animal).save({},{require: true})
	}
})

module.exports = bookshelf.model('Animal', Animal)
