'use strict';

const { bookshelf } = require('../db/database');
const Type = require('../models/type')

module.exports.getAllTypes = (req,res,next) => {
  Type.getAllTypes()
  .then( (types) => {
    res.status(200).json({types});
  })
  .catch( (error) => {
    next(error);
  });
}
