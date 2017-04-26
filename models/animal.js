'use strict'

const {bookshelf} = require('../db/database')
require('./animalZookeeper')
require('./zookeeper')
require('./animalTrainer')
require('./trainer')
require('./trick')
require('./animalTrick')

const Animal = bookshelf.Model.extend({
	tableName: 'animals',
  // sets relationship with zookeepers
  zookeepers: function () { return this.belongsToMany('Zookeeper').through('AnimalZookeeper')},
  // sets relationship with trainers
  trainers: function () { return this.belongsToMany('Trainer').through('AnimalTrainer')},
  tricks: function () { return this.belongsToMany('Trick').through('AnimalTrick')}
}, {
  // gets all animals with a specified zookeeper
	getAllWithRelated: function() {
		return this.forge().orderBy('id', 'ASC').fetchAll({withRelated: ['zookeepers']})
	},
  // adds an animal
	addOne: function(animal) {
		return this.forge(animal).save({},{require: true})
	},
  // deletes and animal
	delete: function(id) {
		// Delete animal and all dependents in other tables
		return this.forge({id}).destroy()
	},
  // use by cascade delete to delete animal records from pivot table
	dependents: ['zookeepers', 'trainers', 'tricks'],

  // edits animal
  updateAnimal: function(id,{name,age,species}) {
    // console.log("bodyFromModel",{age:10});
    return this.forge({id}).save({name,age,species})
    .then( (edit) =>{
      return{"msg" : "edited successfully"}
    })
    .catch( (err) =>{ return err})
  }
})

module.exports = bookshelf.model('Animal', Animal)
