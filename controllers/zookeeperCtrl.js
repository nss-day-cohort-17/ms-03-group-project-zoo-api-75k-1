'use strict';

const { bookshelf } = require('../db/database');
const Zookeeper = require('../models/zookeeper')

module.exports.getAllZookeepers = (req,res,next) => {
  Zookeeper.getAllZookeepers()
  .then( (zookeepers) => {
    res.status(200).json(zookeepers);
  })
  .catch( (error) => {
    next(error);
  });
}
