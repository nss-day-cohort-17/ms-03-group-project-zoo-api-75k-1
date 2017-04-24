'use strict'

const {bookshelf} = require('../db/database')

const Animal = bookshelf.Model.extend({
	tableName: 'animals'
}, {
	getAll: function() {
		return this.forge().fetchAll()
	}
})

module.exports = bookshelf.model('Animal', Animal)
