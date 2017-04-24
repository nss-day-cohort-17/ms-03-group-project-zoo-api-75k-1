'use strict'

const { Router } = require('express')
const router = Router()

router.get('/',function (req,res) {
  res.json ({
    "hi": "hello"
  })
})

module.exports = router;
