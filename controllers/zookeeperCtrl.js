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

module.exports.addZookeeper = ({body},res,next) =>{
  Zookeeper.forge(body)
  .save()
  .then(() => res.status(200).json({"msg" : "zookeeper added successfully"}))
  .catch((err) => { next(err)})
}
