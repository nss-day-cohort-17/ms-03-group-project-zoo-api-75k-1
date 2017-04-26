process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } = require('../db/database')
chai.use(chaiHttp)


describe('Zoo routes', ()=>{
  // does a rollback on test db and then migration and seed before each test run so we know what is in db
  beforeEach(() =>{
    return knex.migrate.rollback()
      .then (()=>{
        return knex.migrate.latest()
      })
      .then (()=>{
        return knex.seed.run()
      })
  });

  // test for getting the api root
  describe('get root route', ()=>{
    it('should have all routes',() =>{
      return chai.request(server)
        .get('/api/v1/')
        .then((res) => {
          res.should.have.status(200)
          res.should.be.a.json
        })
    })
  });


  describe('GET /api/v1/zookeepers', ()=>{
    it ('should return all zookeepers', () => {
      return chai.request(server)
      .get('/api/v1/zookeepers')
      .then((res) => {
        res.should.have.status(200)
        res.should.be.json
      })
    })
  });



  describe(`GET /api/v1/animals`, function() {
    it(`should return all animals`, function() {
      return chai.request(server)
        .get(`/api/v1/animals`).then(res => {
          res.should.have.status(200)
          res.should.be.json
        })
    })
  })

  describe(`POST /api/v1/animals`, function() {
    it(`should add an animal to the database`, function() {
      return chai.request(server)
        .post(`/api/v1/animals`)
        .send({
          name: 'George',
          species: 'Monkey',
          type: 'Primate',
          age: 5,
          zookeepers: [
            {id: 1},
            {id: 2},
            {id: 3}
          ]
        })
        .then(res => {
          res.should.be.json
          res.should.have.status(201)
        })
    })
  });

  describe(`DELETE /api/v1/animals/:id`, function() {
    it(`should delete all rows from the pivot table and the animal`, function() {
      return chai.request(server)
        .delete(`/api/v1/animals/5`)
        .then(res => {
          res.should.be.a.json
          res.should.have.status(200)
        })
    })
  })

  describe('POST /api/v1/zookeepers/new', () => {
    it('should add a new zookeeper obj to the db', () =>{
      return chai.request(server)
      .post('/api/v1/zookeepers/new')
      .send({
        name: "Priya"
      })
      .then((res) =>{
        res.should.have.status(200);
      })
    })
  })

  describe('DELETE /api/v1/zookeepers/:id', ()=>{
  it('should delete a show obj from db', ()=>{
    return chai.request(server)
    .delete('/api/v1/zookeepers/1')
    .then( (res)=>{
      res.should.have.status(200);
      res.should.be.a.json
      res.should.be.a('object')
    })
  })
})

  describe('UPDATE /api/v1/animals/:id', () =>{
    it('should update an animal obj', () => {
      return chai.request(server)
      .patch('/api/v1/animals/1')
      .send({
        age:12,
        type: "primate"
      })
      .then( (res) => {
        res.should.have.status(200)
        res.should.be.a.json
        res.should.be.a('object')
      })
    })
  })

})
