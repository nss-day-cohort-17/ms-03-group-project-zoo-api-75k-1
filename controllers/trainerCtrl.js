'use strict';

const { bookshelf } = require('../db/database');
const Trainer = require('../models/trainer')


module.exports.getAllTrainers = (req,res,next) => {
  // calls getAllTrainers method on Trainer model
  Trainer.getAllTrainers()
  .then( (trainers) => {
    // returns a 200 status
    res.status(200).json({trainers});
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.addTrainer = ({body},res,next) =>{
  Trainer.forge(body)
  .save()
  .then(() => res.status(200).json({"msg" : "trainer added successfully"}))
  .catch((err) => { next(err)})
}

module.exports.deleteTrainer = ({params: {id}}, res, next) =>{
  console.log('trainer id in deleteTrainer', id)
  Trainer.deleteTrainer(id)
  .then(() => res.status(200).json({"msg" : "deleted successfully"}))
  .catch((err) => { next(err)})
}
