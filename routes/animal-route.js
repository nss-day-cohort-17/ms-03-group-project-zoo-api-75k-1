'use strict'

const {Router} = require('express')
const router = Router()

const {getAnimals, addAnimal, deleteAnimal} = require('../controllers/animalCtrl')

router.get('/animals', getAnimals)
router.post('/animals', addAnimal)
router.delete('/animals/:id', deleteAnimal)

module.exports = router
