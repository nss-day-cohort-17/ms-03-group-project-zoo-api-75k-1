'use strict'

const { Router } = require('express')
const router = Router()
const { getAllTricks , addTrick, deleteTrick } = require('../controllers/trickCtrl')

router.get('/tricks', getAllTricks )
router.post('/tricks/new', addTrick)
router.delete('/tricks/:id', deleteTrick)

module.exports =router;
