'use strict'

const { Router } = require('express')
const router = Router()
const { getAllTrainers, addTrainer, deleteTrainer } = require('../controllers/trainerCtrl')
router.get('/trainers', getAllTrainers)
router.post('/trainers/new', addTrainer)
router.delete('/trainers/:id', deleteTrainer)
module.exports =router;
