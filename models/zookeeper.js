'use strict'

const { bookshelf } = require('../db/database')

const Zookeeper = bookshelf.Model.extend( {
  tableName: 'zookeepers'
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
  }
})

module.exports =bookshelf.model('Zookeeper', Zookeeper)
