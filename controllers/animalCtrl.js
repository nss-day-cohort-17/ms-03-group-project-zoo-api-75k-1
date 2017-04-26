'use strict'

const Animal = require('../models/animal')
const AnimalZookeeper = require('../models/animalZookeeper')

// Fetches animals from database when called
// responds with status code 200 and json of animals if successful
module.exports.getAnimals = (req, res, next) => {
	Animal.getAllWithRelated()
		.then(animals => res.status(200).json({animals}))
		.catch(error => next(error))
}

module.exports.addAnimal = (req, res, next) => {
	let animal = req.body
	const zookeepers = animal.zookeepers
	// Remove zookeepers property from animal object
	delete animal.zookeepers

	Animal.addOne(animal)
		.then(animal => {
			const id = animal.id
			let pairs = []
			zookeepers.forEach(keeper => {
				pairs.push({animal_id: id, zookeeper_id: keeper.id})
			})
			AnimalZookeeper.addMany(pairs)
				.then(response => res.status(201).json({animal}))
				.catch(err => next(err))
		})
		.catch(err => next(err))
}

module.exports.deleteAnimal = (req, res, next) => {
	const id = req.params.id
	Animal.delete(id)
		.then(animal => res.status(200).json({msg: 'successful deletion'}))
		.catch(err => next(err))
}

module.exports.updateAnimal = (req,res,next) =>{
  const animal = req.body
  const {id} = req.params
  console.log("id",id);
  console.log("body",animal);
  Animal.updateAnimal(id,animal)
  .then(animal => res.status(200).json(animal))
  .catch(err => next(err))
}
