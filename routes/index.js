'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./zookeeper-route'))
router.use(require('./animal-route'))
router.get('/',function (req,res) {
  res.json ({
    "zookeepers" : "http://localhost:3000/api/v1/zookeepers",
    "zookeeper" : "http://localhost:3000/api/v1/zookeeper/id=<zookeeperId>",
    "add_zookeeper" : "http://localhost:3000/api/v1/zookeepers/new"
  })
})

module.exports = router;
