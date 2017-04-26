'use strict';

const { bookshelf } = require('../db/database');
const Trick = require('../models/trick')

module.exports.getAllTricks = (req,res,next) => {
  Trick.getAllTricks()
  .then( (tricks) => {
    res.status(200).json({tricks});
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.addTrick = ({body},res,next) =>{
  Trick.forge(body)
  .save()
  .then(() => res.status(200).json({"msg" : "trick added successfully"}))
  .catch((err) => { next(err)})
}

module.exports.deleteTrick = ({params: {id}}, res, next) =>{
  Trick.deleteTrick(id)
  .then(() => res.status(200).json({"msg" : "deleted successfully"}))
  .catch((err) => { next(err)})
}
