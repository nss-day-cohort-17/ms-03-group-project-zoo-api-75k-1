// function called during migrate:latest to add tables
exports.up = function(knex, Promise) {
  return knex.schema
  // adds animals table
  .createTable('animals',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('species').notNullable()
    t.integer('age')
    t.string('type').notNullable()
    t.string('pic')
  })
  // adds zookeepers table
  .createTable('zookeepers',(t)=>{
    t.increments()
    t.string('name').notNullable()
  })
  // adds animals_zookeepers join table
  .createTable('animals_zookeepers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('zookeeper_id').unsigned().references('zookeepers.id')
  })
  // adds trainers table
  .createTable('trainers',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('animal_type')
  })
  // adds animals_trainers join table
  .createTable('animals_trainers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('trainer_id').unsigned().references('trainers.id')
  })
};

// function called during migrate:rollback to drop all tables
exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('animals_trainers')
  .dropTableIfExists('trainers')
  .dropTableIfExists('animals_zookeepers')
  .dropTableIfExists('animals')
  .dropTableIfExists('zookeepers')
};
