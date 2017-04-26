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
  // adds trainers table
  .createTable('trainers',(t)=>{
    t.increments()
    t.string('name').notNullable()
    t.string('animal_type')
  })
  // add table types
  .createTable('types', (t) => {
    t.increments()
    t.string('type').unique().notNullable()
  })
  // adds tricks table
  .createTable('tricks', (t) => {
    t.increments()
    t.string('name').notNullable()
  })
  // adds animals_zookeepers join table
  .createTable('animals_zookeepers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('zookeeper_id').unsigned().references('zookeepers.id')
  })
  // adds animals_trainers join table
  .createTable('animals_trainers',(t)=>{
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('trainer_id').unsigned().references('trainers.id')
  })
  // adds trainer_tricks table
  .createTable('trainers_tricks', (t) => {
    t.increments()
    t.integer('trainer_id').unsigned().references('trainers.id')
    t.integer('trick_id').unsigned().references('tricks.id')
  })
  // adds animals_tricks join table
  .createTable('animals_tricks', (t) => {
    t.increments()
    t.integer('animal_id').unsigned().references('animals.id')
    t.integer('trick_id').unsigned().references('tricks.id')
  })
  // adds animaltype_tricks join table
  .createTable('animaltypes_tricks', (t) => {
    t.increments()
    t.string('animal_type').references('types.type')
    t.integer('trick_id').references('tricks.id')
  })
};

// function called during migrate:rollback to drop all tables
exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('animaltypes_tricks')
  .dropTableIfExists('animals_tricks')
  .dropTableIfExists('trainers_tricks')
  .dropTableIfExists('animals_trainers')
  .dropTableIfExists('animals_zookeepers')
  .dropTableIfExists('tricks')
  .dropTableIfExists('types')
  .dropTableIfExists('trainers')
  .dropTableIfExists('zookeepers')
  .dropTableIfExists('animals')
};
