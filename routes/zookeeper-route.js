'use strict'

const { Router } = require('express')
const router = Router()
const { getAllZookeepers, addZookeeper, deleteZookeeper } = require('../controllers/zookeeperCtrl')
router.get('/zookeepers', getAllZookeepers)
router.post('/zookeepers/new', addZookeeper)
router.delete('/zookeepers/:id', deleteZookeeper)
module.exports =router;
