'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name')
    table.string('image_url')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates')
};
