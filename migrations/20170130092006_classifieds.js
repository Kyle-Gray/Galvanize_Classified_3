'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table){
    //id
    table.increments('id').notNullable();
    //title
    table.varchar('title').notNullable();
    //description
    table.varchar('description').notNullable();
    //price
    table.decimal('price').notNullable();
    //item_image
    table.varchar('item_image').notNullable();
    //timestamps
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');
};
