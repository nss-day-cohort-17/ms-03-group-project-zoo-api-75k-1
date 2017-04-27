'use strict'

const { bookshelf } = require('../db/database')
require('./animalTrainer')
require('./animal')
require('./trick')
require('./animalTrick')


const Trainer = bookshelf.Model.extend( {
  tableName: 'trainers',
  animals: function () { return this.belongsToMany('Animal').through('AnimalTrainer')},
  tricks: function() {return this.belongsToMany('Trick').through('AnimalTrick')}
}, {
  getAllTrainers: function () {
    return this.forge()
    .fetchAll()
    .then((trainers) => {
      return trainers
    })
    .catch( (err) =>{
      return err
    })
  },
  deleteTrainer: function (id) {
    return this.forge({id})
    .destroy()
    .then( ()=>{
      return {"msg" : "deleted trainer"}
    })
    .catch( (err) =>{
      return err
    })
  },
  dependents: ['animals', 'tricks']
})

module.exports = bookshelf.model('Trainer', Trainer)
