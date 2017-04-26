'use strict'

const {bookshelf} = require('../db/database')
const Type = bookshelf.Model.extend( {
  tableName: 'types'
}, {
  getAllTypes: function () {
    return this.forge()
    .fetchAll()
    .then((types) => {
      return types
    })
    .catch( (err) =>{
      return err
    })
  }
})


module.exports = bookshelf.model('Type', Type)
