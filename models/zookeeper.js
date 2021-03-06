'use strict'

const { bookshelf } = require('../db/database')
require('./animalZookeeper')
require('./animal')


const Zookeeper = bookshelf.Model.extend( {
  tableName: 'zookeepers',
  animals: function () { return this.belongsToMany('Animal').through('AnimalZookeeper')}
}, {
  getAllZookeepers: function () {
    return this.forge()
    .fetchAll()
    .then((zookeepers) => {
      return zookeepers
    })
    .catch( (err) =>{
      return err
    })
  },
  deleteZookeeper: function (id) {
    return this.forge({id})
    .destroy()
    .then( ()=>{
      return {"msg" : "deleted zookeeper"}
    })
    .catch( (err) =>{
      return err
    })
  },
  dependents: ['animals']
})

module.exports =bookshelf.model('Zookeeper', Zookeeper)
