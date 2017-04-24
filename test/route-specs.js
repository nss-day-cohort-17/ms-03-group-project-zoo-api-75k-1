process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
chai.use(chaiHttp)


describe('Shows routes', ()=>{
  beforeEach(() =>{
    return knex.migrate.rollback()
      .then (()=>{
        return knex.migrate.latest()
      })
      .then (()=>{
        return knex.seed.run()
      })
  })

  describe('get root route', ()=>{
    it('should have all routes',() =>{
      return chai.request(server)
        .get('/api/v1/')
        .then((res) => {
          res.should.have.status(200)
          res.should.be.a.json
        })
    })
  })


  describe('get all zookeepers', ()=>{
    it ('should have all zookeepers', () => {
      return chai.request(server)
      .get('/api/v1/zookeepers')
      .then((res) => {
        res.should.have.status(200)
      })

  describe(`GET /api/v1/animals`, function() {
    it(`should return all animals`, function() {
      return chai.request(server)
        .get(`/api/v1/animals`).then(res => {
          res.should.have.status(200)
          res.should.be.json
        })

    })
  })
})
