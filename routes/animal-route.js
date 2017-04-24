'use strict'

const {Router} = require('express')
const router = Router()

const {getAnimals, addAnimal} = require('../controllers/animalCtrl')

router.get('/animals', getAnimals)
router.post('/animals', addAnimal)

module.exports = router
