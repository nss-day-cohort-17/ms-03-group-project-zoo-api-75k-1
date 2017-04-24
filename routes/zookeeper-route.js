'use strict'

const { Router } = require('express')
const router = Router()
const { getAllZookeepers } = require('../controllers/zookeeperCtrl')
router.get('/zookeepers', getAllZookeepers)

module.exports =router;
