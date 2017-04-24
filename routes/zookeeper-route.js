'use strict'

const { Router } = require('express')
const router = Router()
const { getAllZookeepers, addZookeeper } = require('../controllers/zookeeperCtrl')
router.get('/zookeepers', getAllZookeepers)
router.post('/zookeepers/new', addZookeeper)
module.exports =router;
