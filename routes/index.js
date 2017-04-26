'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./zookeeper-route'))
router.use(require('./animal-route'))
router.use(require('./trainer-route'))
router.get('/',function (req,res) {
  res.json ({
  	"animals": "https://zoo-api.herokuapp.com/api/v1/animals",
    "zookeepers": "https://zoo-api.herokuapp.com/api/v1/zookeepers",
    "trainers": "https://zoo-api.herokuapp.com/api/v1/trainers"
  })
})

module.exports = router;
