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
          res.should.be.json
          res.should.be.a.object
          res.body.should.have.key(['animals', 'zookeepers'])
        })
    })
  });

  // tests getting all animals
  describe(`GET /api/v1/animals`, function() {
    it(`should return all animals`, function() {
      return chai.request(server)
        .get(`/api/v1/animals`).then(res => {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a.object
          res.body.should.have.key('animals')
          res.body.animals.should.be.a.array
          res.body.animals[0].name.should.equal('Brooks')
        })
    })
  })

  // tests posting a new animal
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

  // test for deleting an animal
  describe(`DELETE /api/v1/animals/:id`, function() {
    it(`should delete all rows from the pivot table and the animal`, function() {
      return chai.request(server)
        .delete(`/api/v1/animals/5`)
        .then(res => {
          res.should.be.json
          res.should.have.status(200)
          res.body.should.be.a.object
        })
    })
  })

  // test for editing an existing animal
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
        res.should.be.a.object
      })
    })
  })

  // test getting all zookeepers
  describe('GET /api/v1/zookeepers', ()=>{
    it ('should return all zookeepers', () => {
      return chai.request(server)
      .get('/api/v1/zookeepers')
      .then((res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a.object
        res.body.should.have.key('zookeepers')
        res.body.zookeepers.should.be.a.array
        res.body.zookeepers[0].name.should.equal('Rudolf')
      })
    })
  });

  // test for posting a new zookeeper
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

  // test for deleting a zookeeper
  describe('DELETE /api/v1/zookeepers/:id', ()=>{
    it('should delete a show obj from db', ()=>{
      return chai.request(server)
      .delete('/api/v1/zookeepers/1')
      .then( (res)=>{
        res.should.have.status(200);
        res.should.be.a.json
        res.should.be.a.object
      })
    })
  })


})
