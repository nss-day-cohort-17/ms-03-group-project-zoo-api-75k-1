
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('animals',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('species').notNullable()
    t.integer('age')
    t.string('type').notNullable()
    t.string('pic')
  })
  .createTable('zookeepers',(t)=>{
    t.increments()
    t.string('name').notNullable()
  })
  .createTable('animals_zookeepers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('zookeeper_id').unsigned().references('zookeepers.id')
  })
  .createTable('tricks',(t)=>{
    t.increments()
    t.string('name').notNullable()
  })
  .createTable('trainers',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('animal_type')
  })
  .createTable('animals_trainers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('trainer_id').unsigned().references('trainers.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('animals_trainers')
  .dropTableIfExists('trainers')
  .dropTableIfExists('animals_zookeepers')
  .dropTableIfExists('animals')
  .dropTableIfExists('zookeepers')
};
