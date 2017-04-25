'use strict'

const {bookshelf} = require('../db/database')
require('./animal')
require('./zookeeper')

const AnimalZookeeper = bookshelf.Model.extend({
	tableName: 'animals_zookeepers',
	animal: function() {
		return this.belongsTo('Animal')
	},
	zookeeper: function() {
		return this.belongsTo('Zookeeper')
	}
}, {
	// expects an array of objects like this:
	// [{animal_id: 1, zookeeper_id: 2}]
	addMany: function(rows) {
		return this.collection(rows).invokeThen('save')
	}
})

module.exports = bookshelf.model('AnimalZookeeper', AnimalZookeeper)
