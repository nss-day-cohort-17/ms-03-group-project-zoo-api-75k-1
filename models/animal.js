'use strict'

const {bookshelf} = require('../db/database')
require('./animalZookeeper')
require('./zookeeper')

const Animal = bookshelf.Model.extend({
	tableName: 'animals',
  zookeepers: function () { return this.belongsToMany('Zookeeper').through('AnimalZookeeper')}
}, {
	getAllWithRelated: function() {
		return this.forge().fetchAll({withRelated: ['zookeepers']})
	},
	addOne: function(animal) {
		return this.forge(animal).save({},{require: true})
	},
	delete: function(id) {
		// Delete animal and all dependents in other tables
		return this.forge({id}).destroy()
	},
	dependents: ['zookeepers'],
  updateAnimal: function(id,body) {
    // console.log("bodyFromModel",{age:10});
    return this.forge({id}).save(body)
    .then( (edit) =>{
      return{"msg" : "edited successfully"}
    })
    .catch( (err) =>{ return err})
  }
})

module.exports = bookshelf.model('Animal', Animal)
