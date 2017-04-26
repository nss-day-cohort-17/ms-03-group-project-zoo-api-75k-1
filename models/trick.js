'use strict'

const { bookshelf } = require('../db/database')
require('./animalTrick')
require('./animal')


const Trick = bookshelf.Model.extend( {
  tableName: 'tricks',
  animals: function () { return this.belongsToMany('Animal').through('AnimalTrick')}
}, {
  getAllTrainers: function () {
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
  dependents: ['animals']
})

module.exports = bookshelf.model('Trick', Trick)
