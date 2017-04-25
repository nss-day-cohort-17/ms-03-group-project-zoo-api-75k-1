
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('animals',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('species').notNullable()
    t.integer('age')
    t.string('type').notNullable()
  })
  .createTable('zookeepers',(t)=>{
    t.increments()
    t.string('name').notNullable()
  })
  // .createTable('animals_zookeepers',(t)=>{
  //   t.increments()
  //   t.integer('animal_id').unsigned().references('animals.id')
  //   t.integer('zookeeper_id').unsigned().references('zookeepers.id')
  // })
};

exports.down = function(knex, Promise) {
  return knex.schema
  // .dropTable('animals_zookeepers')
  .dropTable('animals')
  .dropTable('zookeepers')
};
