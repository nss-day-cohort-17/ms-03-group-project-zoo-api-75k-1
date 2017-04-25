'use strict'

const {Router} = require('express')
const router = Router()

const {getAnimals, addAnimal, deleteAnimal, updateAnimal} = require('../controllers/animalCtrl')

router.get('/animals', getAnimals)
router.post('/animals', addAnimal)
router.patch('/animals/:id', updateAnimal )
router.delete('/animals/:id', deleteAnimal)

module.exports = router
