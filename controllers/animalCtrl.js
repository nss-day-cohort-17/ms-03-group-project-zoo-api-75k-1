'use strict'

const Animal = require('../models/animal')

// Fetches animals from database when called
// responds with status code 200 and json of animals if successful
module.exports.getAnimals = (req, res, next) => {
	Animal.getAll()
		.then(animals => res.status(200).json(animals))
		.catch(error => next(error))
}
