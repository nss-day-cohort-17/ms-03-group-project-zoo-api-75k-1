'use strict'

const { bookshelf } = require('../db/database')
require('./animalTrick')
require('./animal')
require('./trainer')
require('./animalTrainer')


const Trick = bookshelf.Model.extend( {
  tableName: 'tricks',
  animals: function () { return this.belongsToMany('Animal').through('AnimalTrick')},
  trainers: function() {return this.belongsToMany('Trainer').through('AnimalTrainer')}
}, {
  getAllTricks: function () {
    return this.forge()
    .fetchAll()
    .then((tricks) => {
      return tricks
    })
    .catch( (err) =>{
      return err
    })
  },
  deleteTrick: function (id) {
    return this.forge({id})
    .destroy()
    .then( ()=>{
      return {"msg" : "deleted trick"}
    })
    .catch( (err) =>{
      return err
    })
  },
  dependents: ['animals', 'trainers']
})

module.exports = bookshelf.model('Trick', Trick)
