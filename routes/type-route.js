'use strict'

const { Router } = require('express')
const router = Router()
const { getAllTypes} = require('../controllers/typesCtrl')
router.get('/types', getAllTypes)

module.exports = router;
