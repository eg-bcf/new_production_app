exports.up = function(knex, Promise) {
  return knex.schema.createTable('values', function(table){
    table.increments('value_id');
    table.text('area');
    table.text('value');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('values');
};
