'use strict'

const Animal = require('../models/animal')

// Fetches animals from database when called
// responds with status code 200 and json of animals if successful
module.exports.getAnimals = (req, res, next) => {
	Animal.getAll()
		.then(animals => res.status(200).json({animals}))
		.catch(error => next(error))
}

module.exports.addAnimal = (req, res, next) => {
	const animal = req.body
	Animal.addOne(animal)
		.then(animal => res.status(201).json(animal))
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
