'use strict'

const { bookshelf } = require('../db/database')

const Trick = bookshelf.Model.extend( {
  tableName: 'tricks'
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
  }
})

module.exports =bookshelf.model('Trick', Trick)
