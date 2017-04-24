
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('animals',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('species').notNullable()
    t.integer('age')
  })
  .createTable('zookeepers',(t)=>{
    t.increments()
    t.string('name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('animals')
  .dropTable('zookeepers')
};
