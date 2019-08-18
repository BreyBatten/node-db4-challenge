
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description', 128);
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable()
            .unique();
        tbl.float('qty').notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
        tbl.string('description').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
