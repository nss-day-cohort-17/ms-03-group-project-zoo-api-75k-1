
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('animals',(t)=>{
    t.increments()
    t.string('name').NotNullable()
    t.string('species').NotNullable()
    t.integer('age')
  })
  .createTable('zookeepers',(t)=>{
    t.increments()
    t.string('name').NotNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('animals')
  .dropTable('zookeepers')
};
